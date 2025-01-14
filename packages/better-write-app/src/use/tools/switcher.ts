import { useAbsoluteStore } from '@/store/absolute'
import { useContextStore } from '@/store/context'
import { useExternalsStore } from '@/store/externals'
import { useProjectStore } from '@/store/project'
import { ASTUtils } from 'better-write-contenteditable-ast'
import { ContextState, Entity } from 'better-write-types'
import { nextTick, reactive } from 'vue'
import { useScroll } from '../scroll'
import { useStorage } from '../storage/storage'

export const useSwitcher = () => {
  const CONTEXT = useContextStore()
  const PROJECT = useProjectStore()
  const EXTERNALS = useExternalsStore()
  const ABSOLUTE = useAbsoluteStore()

  const storage = useStorage()
  const scroll = useScroll()

  const state = reactive({
    entry: '',
    output: '' as string,
    equal: true as boolean,
    actuallyLetterCounter: 0 as number,
    actuallyLetterRaw: '' as string,
    listOfLettersExists: [] as Array<Record<string, any>>,
    maxLetterCounter: 0 as number,
  })

  const switcherText = ({ entry, output, equal }: Record<any, any>) => {
    const arr = CONTEXT.entities

    // TODO: Deletar em caso de output vazio
    if (!entry) return

    arr.forEach((entity: Entity) => {
      // all cases
      if (entry === entity.raw) {
        storage.normalize().then(() => {
          CONTEXT.switchEntityRaw({
            entity,
            match: entry,
            raw: output,
          })
        })
      }
    })
  }

  const onSwitcherAll = () => {
    switcherText({
      entry: state.entry,
      output: state.output,
      equal: state.equal,
    })
  }

  const onSwitcher = () => {
    state.listOfLettersExists = []
    state.actuallyLetterCounter = 0
    state.actuallyLetterRaw = ''
    state.maxLetterCounter = 0

    EXTERNALS.switcher.value = state.entry

    PROJECT.pages.forEach((page: ContextState) => {
      page.entities.forEach((entity: Entity) => {
        const occurrences = ASTUtils.occurrences(
          entity.raw,
          state.entry || '',
          true
        )

        if (occurrences > 0 && state.entry) {
          state.listOfLettersExists.push({ entity, page })
          state.maxLetterCounter++
        }
      })
    })

    if (state.maxLetterCounter === 0) return

    onSearchGo(state.listOfLettersExists[0])
  }

  const onSearchGo = (object: Record<string, any>) => {
    state.actuallyLetterRaw = object.letter
    state.actuallyLetterCounter = state.listOfLettersExists.indexOf(object) + 1

    const pageIndex = PROJECT.pages.indexOf(object.page)
    const entityIndex = PROJECT.pages[pageIndex].entities.indexOf(object.entity)

    EXTERNALS.switcher.entity = entityIndex

    storage.normalize().then(() => {
      onGo(`entity-${entityIndex}`, object.page)
    })
  }

  const onGo = async (go: string | symbol, page: ContextState) => {
    if (!ABSOLUTE.shortcuts.finder && !ABSOLUTE.shortcuts.switcher) return

    if (CONTEXT.id !== page.id) CONTEXT.load(page)

    await nextTick

    scroll.to(`#${String(go)}`, 'center')
  }

  const onUp = () => {
    if (!state.entry) return

    if (state.actuallyLetterCounter >= state.maxLetterCounter) {
      onSearchGo(state.listOfLettersExists[0])
    } else {
      const object = state.listOfLettersExists[state.actuallyLetterCounter]

      onSearchGo(object)
    }
  }

  const onDown = () => {
    if (!state.entry) return

    if (state.actuallyLetterCounter <= 1) {
      onSearchGo(
        state.listOfLettersExists[state.listOfLettersExists.length - 1]
      )
    } else {
      const object = state.listOfLettersExists[state.actuallyLetterCounter - 2]

      onSearchGo(object)
    }
  }

  return {
    state,
    switcherText,
    onSwitcherAll,
    onSwitcher,
    onSearchGo,
    onGo,
    onUp,
    onDown,
  }
}

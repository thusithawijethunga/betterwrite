<template>
  <div
    ref="main"
    class="flex flex-col overflow-hidden bg-theme-editor-background hover:bg-theme-editor-background-hover active:bg-theme-editor-background-active"
    :class="[
      EDITOR.configuration.draggable ? 'fixed' : 'inline-block',
      EDITOR.configuration.bars
        ? 'w-full lg:w-3/4 sm:w-10/12 shadow-xl'
        : 'w-full',
      TUTORIAL.counter === 2 ? 'z-umax' : 'z-20',
    ]"
  >
    <EditorBaseRender v-if="PROJECT.base === 'chapter'" />
    <EditorBaseAnnotations v-else-if="PROJECT.base === 'annotations'" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useEditorStore } from '@/store/editor'
  import { useProjectStore } from '@/store/project'
  import { useTutorialStore } from '@/store/tutorial'

  const EDITOR = useEditorStore()
  const PROJECT = useProjectStore()
  const TUTORIAL = useTutorialStore()

  const main = ref<HTMLElement | null>(null)
</script>

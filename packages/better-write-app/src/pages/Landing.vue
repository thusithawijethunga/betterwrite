<template>
  <main class="wb-screen font-raleway w-full">
    <section
      id="landing-base"
      class="flex flex-col bg-theme-background-2 z-max text-white items-center justify-between min-h-screen w-full overflow-x-hidden"
    >
      <div
        v-if="webgl.isLoaded.value"
        class="flex-1 bg-theme-background-2 container mx-auto flex px-5 py-24 flex-col justify-center items-center z-50"
      >
        <div
          v-if="!isNecessaryLogin"
          class="lg:flex-grow w-full flex flex-col items-center text-center"
        >
          <div
            v-motion
            :initial="{ opacity: 0, y: -50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 50 } }"
            class="flex justify-start items-end"
          >
            <img
              class="shadow-lg rounded-xs w-12 md:w-18"
              alt="Better Write Logo"
              src="/logo_default.svg"
            />
            <h1
              class="font-poppins font-bold ml-5 relative top-3 sm:top-4 lg:top-6 md:ml-10 text-3xl sm:text-4xl lg:text-5xl"
            >
              Better Write.
            </h1>
          </div>
          <v-typical
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="mt-8 font-raleway leading-relaxed text-lg blink max-w-11/12"
            :steps="[
              t('landing.first.typical.1'),
              2000,
              t('landing.first.typical.2'),
              150,
              t('landing.first.typical.3'),
              2000,
              t('landing.first.typical.3'),
              2000,
            ]"
            :loop="Infinity"
            :wrapper="'p'"
          ></v-typical>
          <div
            v-motion
            class="flex items-center justify-center gap-3 w-1/2 lg:w-5/12 xl:w-1/3 mt-24 md:(mt-32)"
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          >
            <button
              class="flex text-gray-200 items-center text-lg rounded-full gap-2 transition-colors bg-gradient-to-br from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-300 text-black px-7 py-3.5 md:(px-8 py-4) shadow-xl transition-colors font-bold"
              @click.prevent.stop="router.push('/about')"
            >
              <p class="hidden md:inline-block">
                {{ t('landing.first.editor.about') }}
              </p>
              <IconHelp class="w-6 h-6" />
            </button>
            <button
              class="flex text-gray-200 items-center text-lg rounded-full gap-2 transition-colors bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 px-7 py-3.5 md:(px-8 py-4) shadow-xl transition-colors font-bold"
              @click.prevent.stop="onClick"
            >
              {{ t('landing.first.editor.website') }}
              <IconAccess class="w-6 h-6" />
            </button>
          </div>
          <a
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 500 } }"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Novout/betterwrite"
            class="flex font-raleway items-center gap-3 absolute bottom-0 right-0 p-5 cursor-pointer"
          >
            <IconGithub class="text-gray-200 w-5 h-5" />
            <v-typical
              class="tracking-wide text-center text-xs md:text-sm blink"
              :steps="[
                t('landing.first.support'),
                10000,
                t('landing.first.support'),
              ]"
              :loop="Infinity"
              :wrapper="'p'"
            ></v-typical>
          </a>
        </div>
        <AuthMain v-else @close="isNecessaryLogin = false" />
      </div>
      <div
        v-else
        class="flex justify-center items-center h-screen w-full z-umax"
        :style="{ backgroundColor: '#1e293b' }"
      >
        <img
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-xs w-32 md:w-60 opacity-30"
          alt="Better Write Logo"
          src="/logo_default.svg"
        />
        <Spinner :width="100" :height="100" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import VTypical from 'vue-typical'
  import { useLanding } from '@/use/landing'
  import { useWebGL } from '@/use/webgl'
  import { useI18n } from 'vue-i18n'
  import { watch } from 'vue'
  import { useRouter } from 'vue-router'

  const { onClick, isNecessaryLogin } = useLanding()
  const { t } = useI18n()
  const webgl = useWebGL()
  const router = useRouter()

  webgl.init()

  watch(isNecessaryLogin, (login) => {
    if (login) {
      setTimeout(() => {
        webgl.setCamera()
      }, 0)
    }
  })
</script>

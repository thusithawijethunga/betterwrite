<template>
  <Switch
    v-model="cmp"
    :class="[
      props.specific
        ? 'bg-theme-editor-material-boolean-background'
        : cmp
        ? 'bg-theme-background-1'
        : 'bg-theme-background-4',
    ]"
    class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none shadow-xl"
  >
    <span
      :class="[
        cmp ? 'translate-x-6' : 'translate-x-1',
        props.specific
          ? 'bg-theme-editor-material-boolean-rounded-background'
          : 'bg-white',
      ]"
      class="inline-block w-4 h-4 transition-transform transform rounded-full"
    />
  </Switch>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    modelValue: {
      required: true,
      type: Boolean,
    },
    css: {
      required: false,
      type: String,
    },
    specific: {
      required: false,
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits(['update:modelValue'])
  const cmp = computed({
    get() {
      return props.modelValue
    },
    set(val: any) {
      emit('update:modelValue', val)
    },
  })
</script>

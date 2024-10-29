<script setup>

const props = defineProps({
  config: {
    type: Object,
    default: () => ({})
  },
  formModel: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:formModel'])
</script>


<template>
  <el-slider v-model="formModel[config.prop]" :disabled="config.disabled" :show-input="config.sliderI"
    :min="config.sliderMin" :max="config.sliderMax" :step="config.sliderStep" :show-stops="config.sliderS" :range="config.sliderR" />
</template>

<style scoped></style>
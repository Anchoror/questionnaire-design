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
  <el-checkbox-group v-model="formModel[config.prop]" :disabled="config.disabled">
    <el-checkbox v-for="item in config.options" :value="item.value">{{ item.label }}</el-checkbox>
  </el-checkbox-group>
</template>

<style scoped></style>
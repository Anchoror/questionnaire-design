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
  <el-select v-model="formModel[config.prop]" :multiple="config.multiple" :multiple-limit="config.selectL"
    :clearable="config.clearable" :filterable="config.filterable" :placeholder="config.placeholder"
    :disabled="config.disabled">
    <el-option v-for="item in config.options" :key="item.value" :value="item.value" :label="item.label"></el-option>
  </el-select>
</template>

<style scoped></style>
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
  <el-switch v-model="formModel[config.prop]" :active-value="config.switchA" :inactive-value="config.switchI" :disabled="config.disabled"/>
</template>

<style scoped></style>
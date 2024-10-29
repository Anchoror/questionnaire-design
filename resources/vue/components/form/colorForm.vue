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
 <el-color-picker v-model="formModel[config]" :show-alpha="config.colorA" :color-format="config.colorF" :disabled="config.disabled"/>
</template>

<style scoped></style>
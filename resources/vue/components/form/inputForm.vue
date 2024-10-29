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
    <el-input v-model="formModel[config.prop]" :placeholder="config?.placeholder" :type="config.inputT"
        :clearable="config.clearable" :show-password="config.inputT === 'password'" :disabled="config.disabled" :maxlength="config.maxL || Infinity" :rows="config.inputR || Infinity" :show-word-limit="config.showN"></el-input>
</template>

<style scoped></style>
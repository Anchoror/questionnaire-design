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
    <el-date-picker
        v-model="formModel[config.prop]"
        :type="config.dateT"
        :placeholder="config.placeholder"
        :start-placeholder="config.placeholder.split(',')[0]"
        :end-placeholder="config.placeholder.split(',')[1]"
        :disabled="config.disabled"
        :clearable="config.clearable"
        :format="config.dateF"
        :value-format="config.dateF"
       
    />
</template>

<style scoped></style>
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

const fontStyle = computed(() => {
    return {
        fontSize: props.config.fontS + 'px',
        color: props.config.fontC
    }
})
</script>

<template>
    <el-text :style="fontStyle" :id="config.prop">
        {{ config.content }}
    </el-text>
</template>

<style scoped></style>
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

const style = computed(() => {
    return {
        width: props.config.btnW,
        height: props.config.btnH,
    }
})

const fontStyle = computed(() => {
    return {
        fontSize: props.config.fontS + 'px',
        color: props.config.fontC
    }
})
</script>

<template>
    <el-button :type="config.btnS" v-bind:[config.btnT]="true" :style :disabled="config.disabled" :plain="config.btnP"
        :id="config.prop">
        <span :style="fontStyle">
            {{ config.content || '' }}
        </span>
    </el-button>
</template>

<style scoped></style>
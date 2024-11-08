<script setup>
import { computed } from 'vue';


const props = defineProps({
    config: {
        type: Object,
        default: () => ({})
    },
})

const emit = defineEmits(['update:formModel'])

const colorStyleMap = {
    'primary': 'blue',
    'success': 'green',
    'info': 'gray',
    'warning': 'orange',
    'danger': 'red'
}

const btnClass = computed(() => {
    let color = ''
    if (props.config.btnS) {
        if (!colorStyleMap[props.config.btnS]) {
            color = ''
        }
        else {
            color = `layui-${props.config.btnP ? 'border' : 'bg'}-${colorStyleMap[props.config.btnS]}`
        }
    }
    else {
        color = 'layui-btn-primary layui-border'
    }
    return `layui-btn ${color} ${props.config.btnT === 'round' && 'layui-btn-radius'} ${props.config.btnP && 'layui-btn-primary'} ${props.config.disabled && 'layui-btn-disabled'}`
})

const btnStyle = computed(() => {

    let style = `font-size:${props.config.fontS || 14}px;color:${props.config.fontC || '#333'}; width:${props.config.btnW};height:${props.config.btnH};`
    if (props.config.btnT === 'circle') {
        style += 'border-radius:50%;padding:0; aspect-ratio:1/1'
    }

    return style
})


</script>

<template>
    <button type="button" :class="btnClass" :style="btnStyle">{{ config.content }}</button>
</template>

<style scoped></style>
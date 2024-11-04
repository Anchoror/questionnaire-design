<script setup>
import { inject } from 'vue';


const props = defineProps({
    config: {
        type: Object,
        default: () => ({})
    },
})

const emit = defineEmits(['update:formModel'])


const init = () => layui.slider.render({
            elem: `#slider-${props.config.prop}`,
            min: props.config.sliderMin, // 最小值
            max: props.config.sliderMax, // 最大值
            step: props.config.sliderStep, // 步长
            showstep: props.config.sliderS, // 开启间隔点
            input: props.config.sliderI, //输入框
            range: props.config.sliderR, // 范围选择
            value: props.config.defaultV
        })

const childRenderFn = inject('childRenderFn')
childRenderFn.push(`
    layui.slider.render({
        elem: '#slider-${props.config.prop}',
        min: '${props.config.sliderMin}', // 最小值
        max: '${props.config.sliderMax}', // 最大值
        step: '${props.config.sliderStep}', // 步长
        showstep: ${props.config.sliderS}, // 开启间隔点
        input: ${props.config.sliderI}, //输入框
        range: ${props.config.sliderR}, // 范围选择
        value: '${props.config.defaultV}'
    })
`)
</script>

<template>
    <div style="line-height: 4px;transform: translateY(calc(50% - 2px));height: 38px;">
        <div :id="`slider-${config.prop}`"></div>
    </div>
</template>

<style scoped></style>
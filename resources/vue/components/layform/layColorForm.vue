<script setup>

const props = defineProps({
    config: {
        type: Object,
        default: () => ({})
    },
})

const emit = defineEmits(['update:formModel'])


const init = () => layui.colorpicker.render({
    elem: `#colorpicker-${props.config.prop}`,
    color: props.config.defaultV, // 设置默认色
    format: props.config.colorF,
    alpha: props.config.colorA
});


const childRenderFn = inject('childRenderFn')
childRenderFn.push(`
    layui.colorpicker.render({
        elem: '#colorpicker-${props.config.prop}',
        color: '${props.config.defaultV}', // 设置默认色
        format: '${props.config.colorF}',
        alpha: '${props.config.colorA}'
    });
`)
</script>

<template>
    <div :id="`colorpicker-${config.prop}`" :style="config.disabled ? `pointer-events: none` : ''"></div>
</template>

<style scoped></style>
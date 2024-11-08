<script setup>
import { computed, onMounted } from 'vue';


const props = defineProps({
    config: {
        type: Object,
        default: () => ({})
    },
})

const emit = defineEmits(['update:formModel'])

const type = computed(() => {
    return props.config.dateT.replace('range', '')
})
const isRange = computed(() => {
    return props.config.dateT.indexOf('range') > 0
})

const init = () => layui.laydate.render({
    elem: `#date-${props.config.prop}`,
    type: type.value,
    format: props.config.dateF,
    range: isRange.value,
    rangeLinked: isRange.value
})

const childRenderFn = inject('childRenderFn')
childRenderFn.push(`
    layui.laydate.render({
        elem: '#date-${props.config.prop}',
        type: '${type.value}',
        format: '${props.config.dateF}',
        range: ${isRange.value},
        rangeLinked: ${isRange.value}
    })
`)
</script>

<template>
    <input type="text" class="layui-input" :id="`date-${config.prop}`" :placeholder="config.placeholder"
        :disabled="config.disabled" />
</template>

<style scoped></style>
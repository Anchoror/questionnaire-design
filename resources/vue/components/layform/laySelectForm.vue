<script setup>
import { computed, onMounted } from 'vue';


const props = defineProps({
    config: {
        type: Object,
        default: () => ({})
    },
})

const emit = defineEmits(['update:formModel'])

const isMultiple = computed(() => !!props.config.multiple)

const defaultV = computed(() => (props.config.defaultV?.split(',') || []))

const childRenderFn = inject('childRenderFn')
if (props.config.multiple) childRenderFn.push(`
    // 文档地址： https://cdn.faysunshine.com/file/xm-select/v1.2.4/index.html#/basic/use
    xmSelect.render({
                el: '#xmselect${props.config.prop}',
                language: 'zn',
                toolbar: {
                    show: ${props.config.clearable},
                },
                tips: '${props.config.placeholder}',
                max: ${props.config.selectL},
                filterable: ${props.config.filterable},
                initValue: ${JSON.stringify(defaultV.value)},
                autoRow: true,
                data: ${JSON.stringify(props.config.options.map(item => ({ name: item.label, value: item.value })))}
            })
    `)

onMounted(() => {
    if (isMultiple) {

        // 文档地址： https://cdn.faysunshine.com/file/xm-select/v1.2.4/index.html#/basic/use
        const init = xmSelect.render({
            el: `#xmselect${props.config.prop}`,
            language: 'zn',
            toolbar: {
                show: props.config.clearable,
            },
            tips: props.config.placeholder,
            max: props.config.selectL,
            filterable: props.config.filterable,
            initValue: defaultV.value,
            autoRow: true,
            data: props.config.options.map(item => ({
                name: item.label, value: item.value
            })),
        })
    }

})
</script>

<template>
    <div v-if="isMultiple" :id="'xmselect' + config.prop" :style="config.disabled ? `pointer-events: none` : ''"></div>
    <select v-else :lay-search="config.filterable ? '' : undefined" :disabled="config.disabled">
        <option value="">清选择</option>
        <option v-for="item in config.options" :value="item.value" :selected="item.value == config.defaultV">{{
            item.label }}</option>
    </select>


</template>

<style scoped></style>
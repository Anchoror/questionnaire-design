<script setup>
import { appStore } from '@/stores/app'
import { storeToRefs } from 'pinia';
import { computed, onMounted, onUpdated } from 'vue';
const props = defineProps({
    config: {
        type: Object,
        default: () => ({})
    },
    formConfig: {
        type: Object,
        default: () => ({})
    }
})

const labelWidth = computed(() => {
    if (props.config.labelW !== 'auto') return props.config.labelW + 'em'
    return props.formConfig.labelW + 'em'
})
const labelPostion = computed(() => { return props.config.labelP || props.formConfig.labelP })
const isRow = computed(() => {
    return labelPostion.value === 'left' || labelPostion.value === 'right'
})

const { layformMap } = storeToRefs(appStore())

const labelStyle = computed(() => {
    return `padding:0;line-height:38px;width:${labelWidth.value};text-align:${!isRow.value ? 'left' : labelPostion.value};`
})

const itemStyle = computed(() => {
    return `display:flex;flex-direction:${isRow.value ? 'row' : 'column'};`
})

onMounted(() => {
    console.log(3)
})

</script>


<template>


    <div v-if="config.type === 'grid'" class="layui-row" :class="'layui-col-space' + config.gutter">
        <div v-for="(child, index) in config.children" :key="index" :class="'layui-col-md' + (child.colS[index] / 2)">
            <template v-for="(item, i) in child" :key="i">
                <LAYViewItem :config="item" />
            </template>
        </div>
    </div>

    <div v-else class="layui-row" style="width:100%; text-align: left;">
        <div :class="`layui-col-md` + (config.span / 2)">
            <div class="layui-form-item" :style="itemStyle">
                <label class="layui-form-label" :style="labelStyle">{{
                    config.label
                    }}</label>
                <div class="flex-1 layui-input-wrap ml-6">
                    <component :is="layformMap[config.type]" :config />
                </div>
            </div>
        </div>
    </div>
</template>
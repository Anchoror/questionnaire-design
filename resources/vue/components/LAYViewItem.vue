<script setup>
import { appStore } from '@/stores/app'
import { storeToRefs } from 'pinia';
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
const isFlex = computed(() => {
    return labelPostion.value === 'left' || labelPostion.value === 'right'
})

const { layformMap } = storeToRefs(appStore())


</script>


<template>


    <div v-if="config.type === 'grid'" class="layui-row" :class="'layui-col-space' + config.gutter">
        <div v-for="(child, index) in config.children" :key="index" :class="'layui-col-md' + (child.colS[index] / 2)">
            <template v-for="(item, i) in child" :key="i">
                <LAYViewItem :config="item" />
            </template>
        </div>
    </div>

    <div v-else class="w-full layui-row text-left">
        <div :class="`layui-col-md` + (config.span / 2)">
            <div class="layui-form-item flex" :class="isFlex ? 'flex-row' : 'flex-col'">
                <label
                    :class="`layui-form-label p-0 lh-19 h-19 text-${!isFlex ? 'left' : labelPostion} w-${labelWidth}`">{{
                        config.label
                    }}</label>
                <div class="flex-1 layui-input-wrap ml-6">
                    <component :is="layformMap[config.type]" :config />
                </div>
            </div>
        </div>
    </div>
</template>
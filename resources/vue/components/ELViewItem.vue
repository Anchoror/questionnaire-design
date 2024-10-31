<script setup>
import { appStore } from '@/stores/app'
import { storeToRefs } from 'pinia';

const props = defineProps({
    formModel: {
        type: Object,
        default: () => ({})
    },
    config: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits(['update:formModel'])

const { formMap } = storeToRefs(appStore())

</script>


<template>
    <el-row v-if="config.type === 'grid'" :gutter="config.gutter">
        <el-col v-for="(child, index) in config.children" :key="index" :span="config.colS[index]">
            <template v-for="(item, i) in child" :key="i">
                <ELViewItem v-model:formModel="props.formModel" :config="item" />
            </template>
        </el-col>
    </el-row>
    <el-row v-else :gutter="0" class="w-full">
        <el-col :span="24">
            <el-form-item :prop="config.prop" :label="config.label"
                :label-width="typeof config.labelW === 'number' ? config.labelW + 1 + 'em' : undefined"
                :label-position="config.labelP">
                <component :is="formMap[config.type]" :config v-model:formModel="props.formModel" />
            </el-form-item>
        </el-col>
    </el-row>

</template>
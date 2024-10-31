<script setup>
import { appStore } from '@/stores/app'
import { storeToRefs } from 'pinia';
const props = defineProps({
    config: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits(['remove'])

const { formConfig, activeId, formModel: configModel, formMap } = storeToRefs(appStore())

// 当前是否为激活组件
const isActive = computed(() => {
    return activeId.value === props.config.id
})

// 表单值
const formModel = ref({})

// 获取表单值
const getField = () => {
    return formModel.value
}
// 重置表单值
const reset = () => {
    formModel.value = {}
}

defineExpose({
    getField,
    reset
})

</script>

<template>
    <div class="px-2 py-4 rounded-2 border-1 border-solid border-transparent relative"
        :class="isActive && '!border-blue-500'">
        <div class="bg-#409eff absolute top-0 right-0 color-#fff text-6 lh-6 z-100" v-if="isActive"
            @click="emit('remove', activeId)">
            <IconLsiconDeleteOutline />
        </div>

        <el-row :gutter="config.gutter || 0" @click.stop="activeId = config.id; configModel = config">
            <template v-if="config.type === 'grid' && config.children.length">
                <el-col :span="config.colS[index]" v-for="(item, index) in config.children" :key="index">
                    <div class="rounded-2 border-1 border-dashed border-gray-300">
                        <component :is="formMap[config.type]" ref="ListRef" :listData="item" />
                    </div>
                </el-col>
            </template>
            <el-col :span="config.span" class="relative bg-gray-50" v-else>
                <el-form :model="formModel" :label-position="formConfig.labelP"
                    :label-width="(formConfig.labelW + 1) + 'em'">
                    <el-form-item class="mb-0" :prop="config.prop" :label="config.label"
                        :label-width="typeof config.labelW === 'number' ? config.labelW + 1 + 'em' : undefined"
                        :label-position="config.labelP">
                        <component :is="formMap[config.type]" :config v-model:formModel="formModel" />
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>


</template>

<style scoped></style>
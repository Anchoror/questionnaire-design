<script setup>
import { shallowRef,defineAsyncComponent } from 'vue';
    const props = defineProps({
        config: {
            type: Object,
            default: () => ({})
        },
        activeId:{
            type: Number,
            default: 0
        },
        formConfig:{
            type: Object,
            default: () => ({})
        },
        disabled:{
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['update:activeId'])

    const isActive = computed(()=>{
        if(props.disabled) return false;
        return props.activeId === props.config.id
    })
    
    const formMap = shallowRef({
        radio: defineAsyncComponent(() => import('./form/radioForm.vue')),
        check: defineAsyncComponent(() => import('./form/checkForm.vue')),
        input: defineAsyncComponent(() => import('./form/inputForm.vue')),
        select: defineAsyncComponent(() => import('./form/selectForm.vue')),
        date: defineAsyncComponent(() => import('./form/dateForm.vue')),
        color: defineAsyncComponent(() => import('./form/colorForm.vue')),
        switch: defineAsyncComponent(() => import('./form/switchForm.vue')),
        slider: defineAsyncComponent(() => import('./form/sliderForm.vue')),
        // upload: defineAsyncComponent(() => import('./form/uploadForm.vue')),
        // score: defineAsyncComponent(() => import('./form/scoreForm.vue')),

        grid: defineAsyncComponent(() => import('./List.vue')),
    })

    const formModel = ref({})

    const getField = () => {
        return formModel.value
    }

    const reset = () => {
        formModel.value = {}
    }

    defineExpose({
        getField,
        reset
    })

</script>

<template>
    <el-row :gutter="formConfig.gutter" class="py-2">
        <template v-if="config.type === 'grid' && config.children.length">
            <el-col :span="12"  v-for="(item, index) in config.children" :key="index">
                <div class="rounded-2 border-1 border-dashed border-gray-300">
                    <component :is="formMap[config.type]" ref="ListRef" :formConfig="config.children[index]" @change="(data) => emit('update:activeId', data.id)" />
                </div>
            </el-col>
        </template>

      <el-col :span="config.span" class="relative" v-else>
        <div class="cursor-pointer relative rounded-2 px-2 py-6 border-1 border-#fff border-solid" :class="isActive?'bg-gray-100 !border-#409eff':''" @click="emit('update:activeId', config.id)">
            <el-form :model="formModel" :label-position="formConfig.labelP" :label-width="(formConfig.labelW + 1) + 'em'">
                <el-form-item class="mb-0" :prop="config.prop" :label="config.label" :label-width="typeof config.labelW === 'number'? config.labelW + 1 + 'em':undefined" :label-position="config.labelP">
                    <component :is="formMap[config.type]" :config  v-model:formModel="formModel" />
                </el-form-item>
            </el-form>
        </div>
      </el-col>
    </el-row>
    
</template>

<style scoped>


</style>
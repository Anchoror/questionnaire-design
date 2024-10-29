<script setup>
import { shallowRef,defineAsyncComponent } from 'vue';
    const props = defineProps({
        config: {
            type: Object,
            default: () => ({})
        },
        activeIndex:{
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

    const emit = defineEmits(['update:activeIndex'])

    const isActive = computed(()=>{
        if(props.disabled) return false;
        return props.activeIndex === props.config.index
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
    
    <div class="cursor-pointer relative rounded-2 px-2 py-6 border-1 border-#fff border-solid" :class="isActive?'bg-gray-100 !border-#409eff':''" @click="emit('update:activeIndex', config.index)">
        <el-form :model="formModel" :label-position="formConfig.labelP" :label-width="(formConfig.labelW + 1) + 'em'">
            <el-form-item class="mb-0" :prop="config.prop" :label="config.label" :label-width="typeof config.labelW === 'number'? config.labelW + 1 + 'em':undefined" :label-position="config.labelP">
                <component :is="formMap[config.type]" :config  v-model:formModel="formModel" />
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped>


</style>
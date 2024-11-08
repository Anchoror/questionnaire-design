<script setup>
import { inject } from 'vue';

import ELViewItem from './ELViewItem.vue';

const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})

const data = inject('data') || props.data

const { form, list } = data

// const submitCB = inject('submitCB')

const onSubmit = () => {
    // submitCB(formModel.value)
    console.log(formModel.value)
}

const onReset = () => {
    formModel.value = {}
}

const formModel = ref({})
</script>


<template>
    <div>
        <el-form :model="formModel" :label-position="form.labelP" :label-width="(form.labelW + 1) + 'em'">
            <template v-for="(config, index) in list" :key="index">
                <ELViewItem v-model:formModel="formModel" :config />
            </template>
        </el-form>
        <div class="h-20 flex  items-center" v-if="form.hadSubmit">
            <el-button type="primary" @click="onSubmit">
                提交
            </el-button>
            <el-button @click="onReset">
                重置
            </el-button>
        </div>
    </div>
</template>
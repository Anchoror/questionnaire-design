
<script setup>
import List from './List.vue'

const props = defineProps({
    data:{
        type:Object,
        default: () => ({})
    }
})


const {form, list} = props.data

const ListRef = ref(null)

const onSubmit = () => {
    console.log(ListRef.value.getFieldData())
}

const onReset = () => {
    ListRef.value.reset()
}
</script>


<template>
    <div>
        <List ref="ListRef" :formConfig="form" :data="list" :disabled="true"/>

        <div class="h-20 flex justify-end items-center">
            <el-button type="primary" @click="onSubmit">
                提交
            </el-button>
            <el-button @click="onReset">
                重置
            </el-button>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import LAYViewItem from './LAYViewItem.vue'


const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})

const data = inject('data') || props.data

const { form, list } = data



const onSubmit = () => {
    console.log(2222)
}

onMounted(() => {
    console.log(2)
})
</script>


<template>
    <form lay-filter="layfrom" class="layui-form" action="">
        <template v-for="(config, index) in list" :key="index">
            <LAYViewItem :config :formConfig="form" />
        </template>

        <div class="layui-row" v-if="form.hadSubmit">
            <button type="button" class="layui-btn" @click="onSubmit">提交</button>
            <button type="button" class="layui-btn layui-btn-primary">重置</button>
        </div>
    </form>
</template>
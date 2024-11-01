<script setup>


import LAYViewItem from './LAYViewItem.vue'


const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})

const data = inject('data') || props.data

const { form, list } = data



</script>


<template>
    <form lay-filter="layfrom" class="layui-form" action="">
        <template v-for="(config, index) in list" :key="index">
            <LAYViewItem :config :formConfig="form" />
        </template>
    </form>
</template>
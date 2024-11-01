<script setup>

const props = defineProps({
    config: {
        type: Object,
        default: () => ({})
    },
})

const emit = defineEmits(['update:formModel'])
</script>

<template>
    <input type="text" :name="config.prop" lay-affix="clear" class="layui-input" :placeholder="config.placeholder" />
</template>

<style scoped></style>
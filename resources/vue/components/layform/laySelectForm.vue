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
    <select :lay-search="config.filterable ? '' : undefined">
        <option value="">清选择</option>
        <option v-for="item in config.options" :value="item.value" :selected="item.value == config.defaultV">{{
            item.label }}</option>
    </select>
</template>

<style scoped></style>
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
    <input type="checkbox" :name="config.prop" title="" :value="config.switchA" lay-skin="switch"
        :checked="config.defaultV === config.switchA" :disabled="config.disabled"></input>
</template>

<style scoped></style>
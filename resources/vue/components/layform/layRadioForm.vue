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
    <div>
        <input v-for="item in config.options" type="radio" :name="config.prop" :value="item.value" :title="item.label"
            :checked="item.value == config.defaultV" :disabled="config.disabled">
    </div>
</template>

<style scoped></style>
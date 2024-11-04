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
        <input v-for="item in config.options" type="checkbox" :name="config.prop" :value="item.value"
            :title="item.label" :checked="item.value == config.defaultV" class="checkbox-input">
    </div>
</template>

<style lang="less"></style>
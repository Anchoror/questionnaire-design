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
    <div :style="{
        color:config.fontC,
        fontSize:config.fontS + 'px'
    }">
        {{ config.content }}
    </div>
</template>

<style scoped></style>
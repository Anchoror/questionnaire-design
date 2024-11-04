<script setup>
import { onMounted } from 'vue';


const props = defineProps({
    config: {
        type: Object,
        default: () => ({})
    },
})

const emit = defineEmits(['update:formModel'])

const affix = computed(() => {
    if (props.config.inputT === 'password') return 'eye'
    if (props.config.clearable) return 'clear'
    return ''
})

const textareaRef = ref(null)

const count = ref(1)

onMounted(() => {
    console.log(4)
})
</script>

<template>
    <textarea v-if="config.inputT === 'textarea'" :name="config.prop" class="layui-textarea" @input="onChange"
        :placeholder="config.placeholder" :value="config.defaultV" :maxLength="config.maxL" :disabled="config.disabled"
        :rows="config.inputR" show-number-limit></textarea>
    <input v-else :type="config.inputT" :name="config.prop" :lay-affix="affix" class="layui-input" @input="onChange"
        :placeholder="config.placeholder" :value="config.defaultV" :maxLength="config.maxL"
        :disabled="config.disabled" />
</template>

<style scoped></style>
<script setup>

const props = defineProps({
    config: {
        type: Object,
        default: () => ({})
    },
    formModel: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits(['update:formModel'])

const handlePreview = () => {
    console.log('preview')
}

const handleRemove = () => {
    console.log('remove')
}

const beforeRemove = (file, fileList) => {
    return true
}

const handleExceed = (files, fileList) => {
    console.log(files, fileList)
}
</script>


<template>
    <el-upload v-model:file-list="formModel[config.prop]" class="upload-demo" :action="config.action"
        :multiple="config.multiple" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove"
        :limit="config.limit" :on-exceed="handleExceed">
        <el-button type="primary">
            点击上传
        </el-button>
    </el-upload>
</template>

<style scoped></style>
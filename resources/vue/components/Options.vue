<script setup>

const props = defineProps({
    optionsValue: {
        type: Array,
        default: () => []
    }
})

// console.log(props.optionsValue)

const emit = defineEmits(['update:optionsValue'])

const onAdd = () => {
    const newOptions = [...props.optionsValue]
    newOptions.splice(newOptions.length, 0, {
        label: '',
        value: ''
    })
    emit('update:optionsValue', [...newOptions])
}

const onDel = (formModel) => {
    emit('update:optionsValue', props.optionsValue.filter(item => item !== formModel))
}

</script>

<template>
    <div class="mb-6">
        <div class="flex gap-4 max-w-120 items-center mb-4">
            <div class="flex-1 color-#999">标签名</div>
            <div class="flex-1 color-#999">值</div>
            <el-button type="primary" circle size="small" @click="onAdd">
                <IconLsiconAddOneOutline />
            </el-button>
        </div>
        <template v-for="(formModel, index) in optionsValue" :key="index">
            <el-form :model="formModel">
                <div class="flex gap-4 max-w-120 items-center mb-4">
                    <el-input class="flex-1" v-model="formModel.label" placeholder="请输入"></el-input>
                    <el-input class="flex-1" v-model="formModel.value" placeholder="请输入"></el-input>
                    <el-button type="danger" circle size="small" @click="onDel(formModel)"
                        :disabled="optionsValue.length <= 1">
                        <IconLsiconDeleteOutline />
                    </el-button>
                </div>
            </el-form>
        </template>
    </div>
</template>
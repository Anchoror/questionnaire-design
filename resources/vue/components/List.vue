<script setup>
import Item from './Item.vue';
import { vDraggable } from 'vue-draggable-plus'

const props = defineProps({
    formConfig: {
        type: Object,
        default: () => ({})
    },
    data: {
        type: Array,
        default: () => []
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['change'])

const list = ref(props.data.map((item, index) => item.index = index + 1))
const activeId = ref(0)
const listItemIndex = ref(list.value.length + 1)

// const onDel = () => {
//     if (props.disabled) return
//     list.value = list.value.filter((item) => activeId.value !== item.index)
//     activeId.value = 0
// }

const dataMap = {
    radio: {
        options: [{ value: '', label: '' }],
    },
    check: {
        options: [{ value: '', label: '' }]
    },
    input: {
        placeholder: '请输入',
        inputT: 'text',
        inputR: '',
        clearable: true,
        inputR: 3,
        showN: false
    },
    select: {
        placeholder: '请选择',
        clearable: true,
        filterable: false,
        multiple: false,
        selectL: 0,
        options: [{ value: '', label: '请选择' }],
    },
    date: {
        placeholder: '请选择日期',
        dateT: 'date',
        dateF: 'YYYY-MM-DD',
        clearable: true
    },
    color: {
        colorF: 'hex',
        colorA: false
    },
    switch: {
        switchA: undefined,
        switchI: undefined
    },
    slider: {
        sliderMax: 100,
        sliderMin: 0,
        sliderStep: 1,
        sliderR: false,
        sliderS: false,
        sliderS: false
    },
    grid: {
        cols: 2,
        children: [[], []]
    }
}

const createItem = (type) => {
    const id = listItemIndex.value
    const data = {
        type,
        label: '',
        prop: '',
        id,
        defaultV: '',
        labelW: 'auto',
        labelP: '',
        span: 24,
        disabled: false,
        placeholder: '',
        // inputT:undefined,
        // clearable:undefined,
        // maxL:undefined,
        // inputR:undefined,
        // showN:undefined,
        // filterable:undefined,
        // multiple:undefined,
        // selectL:undefined,
        // dateT:undefined,
        // dateF:undefined,
        // colorF:undefined,
        // colorA:undefined,
        // switchA:undefined,
        // switchI:undefined,
        // options:undefined,
        // sliderMax:undefined,
        // sliderMin:undefined,
        // sliderStep:undefined,
        // sliderR:undefined,
        // sliderS:undefined,
        // sliderS:undefined
        ...dataMap[type],
    }
    return data
}

const getData = () => {
    const data = {
        form: { ...props.formConfig },
        list: [...list.value]
    }
    return data
}

const clear = () => {
    list.value = []
    activeId.value = 0
    listItemIndex.value = 0
    emit('change', null)
    return
}

const listItemRefs = ref(null)

const getFieldData = () => {
    const dataArr = listItemRefs.value.map(item => item.getField())
    const obj = {}
    dataArr.forEach(item => {
        for (const key in item) {
            obj[key] = item[key]
        }
    })
    return obj
}

const reset = () => {
    listItemRefs.value.forEach(item => item.reset())
}

watch(() => activeId.value, () => {
    emit('change', list.value.find(item => item.id === activeId.value))
})

defineExpose({
    createItem,
    getData,
    getFieldData,
    clear,
    reset,
    activeId
})


const onUpdate = (e) => {
    console.log('update', e)
}
const onAdd = (e) => {
    const { newIndex, data, clonedData } = e

    console.log(e)
    activeId.value = clonedData.id
    listItemIndex.value += 1
}
</script>

<template>
    <!-- <el-row :gutter="formConfig.gutter">
      <el-col >
       

        <div class="bg-#409eff absolute top-0 right-0 color-#fff text-6 lh-6" v-if="!props.disabled && (activeId === item.index)" @click="onDel">
            <IconLsiconDeleteOutline />
        </div>
      </el-col>
    </el-row> -->
    <div v-draggable="[
        list,
        {
            animation: 150,
            ghostClass: 'ghost',
            group: {
                name: 'formList',
            },
            onUpdate,
            onAdd,
        }
    ]" class="draggler">
        <template v-for="item in list" :key="item.id">
            <Item  ref="listItemRefs" :config="item" v-model:active-id="activeId" :formConfig :disabled="props.disabled">
            </Item>
        </template>
    </div>
</template>

<script setup>
import Item from './Item.vue';
const props = defineProps({
    formConfig:{
        type: Object,
        default: () => ({})
    },
    data:{
        type: Array,
        default: () => []
    },
    disabled:{
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['change'])

const list = ref(props.data)
const activeIndex = ref(0)

const onDel = () => {
    if(props.disabled) return
    list.value = list.value.filter((item) => activeIndex.value !== item.index)
    activeIndex.value = 0
}

const dataMap = {
    radio:{
        options:[{value:'', label:''}],
    },
    check:{
        options:[{value:'', label:''}]
    },
    input:{
        placeholder:'请输入',
        inputT:'text',
        inputR:'',
        clearable:true,
        inputR:3,
        showN:false
    },
    select:{
        placeholder:'请选择',
        clearable:true,
        filterable:false,
        multiple:false,
        selectL:0,
        options:[{value:'', label:'请选择'}],
    },
    date:{
        placeholder:'请选择日期',
        dateT:'date',
        dateF:'YYYY-MM-DD',
        clearable:true
    },
    color:{
        colorF:'hex',
        colorA:false
    },
    switch:{
        switchA:undefined,
        switchI:undefined
    },
    slider:{
        sliderMax:100,
        sliderMin:0,
        sliderStep:1,
        sliderR:false,
        sliderS:false,
        sliderS:false
    }
}

const push = (type) => {
    const index = list.value[list.value.length - 1]?.index ? list.value[list.value.length - 1].index + 1 : 1
    const data = {
        type,
        label:'',
        prop:'',
        index,
        defaultV:'',
        labelW:'auto',
        labelP:'',
        span:24,
        disabled:false,
        placeholder:'',
        inputT:'',
        clearable:undefined,
        maxL:undefined,
        inputR:undefined,
        showN:undefined,
        filterable:undefined,
        multiple:undefined,
        selectL:undefined,
        dateT:undefined,
        dateF:undefined,
        colorF:undefined,
        colorA:undefined,
        switchA:undefined,
        switchI:undefined,
        options:undefined,
        sliderMax:undefined,
        sliderMin:undefined,
        sliderStep:undefined,
        sliderR:undefined,
        sliderS:undefined,
        sliderS:undefined
    }

    list.value.push({...data, ...dataMap[type]})
    activeIndex.value = index
}

const getData = () => {
    const data = {
        form: {...props.formConfig},
        list:[...list.value]
    }
    return data
}

const clear = () => {
    list.value = []
    activeIndex.value = 0
    emit('change', null)
    return
}

const listItemRefs = ref(null)

const getFieldData = () => {
    const dataArr = listItemRefs.value.map(item => item.getField())
    const obj = {}
    dataArr.forEach(item => {
        for(const key in item){
            obj[key] = item[key]
        }
    })
    return obj
}

const reset = () => {
    listItemRefs.value.forEach(item => item.reset())
}

watch(()=> activeIndex.value,  () => {
    emit('change', list.value.find(item => item.index === activeIndex.value))
})

defineExpose({
    push,
    getData,
    getFieldData,
    clear,
    reset,
    activeIndex
})

</script>

<template>
    <el-row :gutter="formConfig.gutter">
      <el-col :span="item.span" v-for="item in list" :key="item.index" class="relative">
        <Item ref="listItemRefs" :config="item" v-model:active-index="activeIndex" :formConfig :disabled="props.disabled"></Item>

        <div class="bg-#409eff absolute top-0 right-0 color-#fff text-6 lh-6" v-if="!props.disabled && (activeIndex === item.index)" @click="onDel">
            <IconLsiconDeleteOutline />
        </div>
      </el-col>
    </el-row>
</template>
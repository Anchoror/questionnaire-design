<script setup>
import Config from './components/Config.vue';
import List from './components/List.vue';
import View from './components/View.vue';


const title = ref('表单设计系统') 

// 配置问题类型
const questionMap = ref([
    {
        name:'单选框',
        icon:IconLsiconCircleSucceedOutline,
        type:'radio'
    },
    {
        name:'多选框',
        icon:IconLsiconCheckCorrectOutline,
        type:'check'
    },
    {
        name:'输入框',
        icon:IconLsiconAlignTxtLeftOutline,
        type:'input'
    },
    {
        name:'下拉框',
        icon:IconLsiconAmountDownOutline,
        type:'select'
    },
    {
        name:'日期选择',
        icon:IconLsiconCalendarOutline,
        type:'date'
    },
    {
        name:'颜色选择',
        icon:IconLsiconDecorateOutline,
        type:'color'
    },
    {
        name:'开关',
        icon:IconLsiconPowerOutline,
        type:'switch'
    },
    {
        name:'滑块',
        icon:IconLsiconControlOutline,
        type:'slider'
    },
    // {
    //     name:'文件上传',
    //     icon:IconLsiconFolderOutline,
    //     type:'upload'
    // },
    
    // {
    //     name:'评分框',
    //     icon:IconLsiconCircleStarOutline,
    //     type:'score'
    // }
])


const ListRef = ref(null)

const activeIndex = computed(()=> ListRef.value?.activeIndex || 0)

const onAddQuestion = (data) => {
    ListRef.value.push(data.type)
}
const onChangeModel = (model) => {
    formModel.value = model
}


const formModel = ref({
    title:'',
    prop:'',
    type:''
})
const formConfigModel = ref({
    type:'normal',
    labelW:3,
    labelP:'right',
    gutter:10
})

const dialogConfig = ref({
    show:false,
    type:'export',
    title:'导出 json',
    content:'',
    width:800
})

const onView = () => {
    const data = ListRef.value.getData()
    dialogConfig.value.type = 'view'
    dialogConfig.value.content = data
    dialogConfig.value.show = true
}

const onExport = () => {
   const data = ListRef.value.getData()
   dialogConfig.value.type = 'export'
   dialogConfig.value.content = data.list
   dialogConfig.value.show = true
}

const onClear = () => {
    ListRef.value.clear()
}

const onSure = () => {

}

</script>

<template>
    <div class="h-32 flex items-center px-12 border-b-1 border-b-solid border-gray-300">
         <el-text size="large" class="flex-1">
            {{ title }}
         </el-text>
         <div>
            <el-button type="primary" @click="onView">预览</el-button>
            <el-button type="success" @click="onExport">导出</el-button>
            <el-button type="warning">导入</el-button>
            <el-button type="danger" @click="onClear">清空</el-button>
         </div>
    </div>
    <div class="flex h-[calc(100vh-64px)] overflow-hidden">
        <div class="w-150">
            <h3 class="lh-24 ml-12">题目类型</h3>
            <el-row>
                <el-col :span="8" v-for="item in questionMap" :key="item.type">
                    <div class="h-50 aspect-ratio-1 flex items-center justify-center flex-col gap-6 hover:bg-gray-100 cursor-pointer" @click="onAddQuestion(item)">
                        <component :is="item.icon" class="size-12"/>
                        <div>{{ item.name }}</div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="flex-1">
            <List ref="ListRef" :formConfig="formConfigModel" @change="onChangeModel"></List>
        </div>

        <div class="w-180 h-full px-6">
            <Config v-model:formModel="formModel" v-model:formConfigModel="formConfigModel" :questionMap :disabled="!activeIndex"></Config>
        </div>
    </div>

    <el-dialog
        v-model="dialogConfig.show"
        :title="dialogConfig.title"
        :width="dialogConfig.width"
        destroy-on-close
    >
        <div v-if="dialogConfig.type === 'export'">
            <json-viewer :value="dialogConfig.content" copyable :expanded="true" :expandDepth="4" theme="dark" class="max-h-300 overflow-auto"></json-viewer>
        </div>
        <div v-if="dialogConfig.type === 'view'">
            <View :data="dialogConfig.content" />
        </div>
    </el-dialog>
</template>
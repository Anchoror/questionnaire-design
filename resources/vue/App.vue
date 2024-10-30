<script setup>
import Config from './components/Config.vue';
import JsonAndHtml from './components/JsonAndHtml.vue';
import List from './components/List.vue';
import View from './components/View.vue';
import { vDraggable } from 'vue-draggable-plus'


const title = ref('表单设计系统')

// 配置问题类型
const questionMap = ref([
    {
        name: '单选框',
        icon: IconLsiconCircleSucceedOutline,
        type: 'radio'
    },
    {
        name: '多选框',
        icon: IconLsiconCheckCorrectOutline,
        type: 'check'
    },
    {
        name: '输入框',
        icon: IconLsiconAlignTxtLeftOutline,
        type: 'input'
    },
    {
        name: '下拉框',
        icon: IconLsiconAmountDownOutline,
        type: 'select'
    },
    {
        name: '日期选择',
        icon: IconLsiconCalendarOutline,
        type: 'date'
    },
    {
        name: '颜色选择',
        icon: IconLsiconDecorateOutline,
        type: 'color'
    },
    {
        name: '开关',
        icon: IconLsiconPowerOutline,
        type: 'switch'
    },
    {
        name: '滑块',
        icon: IconLsiconControlOutline,
        type: 'slider'
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
const otherMap = ref([
    {
        name: '布局',
        icon: IconLsiconAppsOutline,
        type: 'grid'
    },
    {
        name: '按钮',
        icon: IconLsiconPointerOutline,
        type: 'button'
    },
    {
        name: '文字',
        icon: IconLsiconTextOutline,
        type: 'text'
    },
])


const ListRef = ref(null)

const activeId = computed(() => ListRef.value?.activeId || 0)

const onChangeModel = (model) => {
    formModel.value = model
}


const formModel = ref({
    title: '',
    prop: '',
    type: ''
})
const formConfigModel = ref({
    type: 'normal',
    labelW: 3,
    labelP: 'right',
    gutter: 10
})

const dialogConfig = ref({
    show: false,
    type: 'export',
    title: '',
    content: '',
    width: 800
})

const onView = () => {
    const data = ListRef.value.getData()
    dialogConfig.value.title = '预览'
    dialogConfig.value.type = 'view'
    dialogConfig.value.content = data
    dialogConfig.value.show = true
}

const onExport = () => {
    const data = {
        form: formConfigModel.value,
        list: ListRef.value.getData()
    }
    dialogConfig.value.title = '导出 json'
    dialogConfig.value.type = 'export'
    dialogConfig.value.content = data.list
    dialogConfig.value.show = true
}

const onClear = () => {
    ListRef.value.clear()
}

const clone = (data) => {
    return ListRef.value.createItem(data.type)
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
        <div class="w-150 px-6 border-r-1 border-r-solid border-gray-300">
            <h3 class="lh-24">表单组件</h3>
            <el-row v-draggable="[
                questionMap,
                {
                    animation: 150,
                    ghostClass: 'ghost',
                    group: {
                        name: 'formList',
                        pull: 'clone',
                        put: false
                    },
                    dragClass: 'flex-1',
                    sort: false,
                    clone
                }
            ]">
                <el-col :span="6" v-for="item in questionMap" :key="item.type" class="drag-row">
                    <div
                        class="aspect-ratio-1 flex items-center justify-center flex-col gap-6 hover:bg-gray-100 cursor-pointer drag-item">
                        <component :is="item.icon" class="size-12" />
                        <div>{{ item.name }}</div>
                    </div>
                </el-col>
            </el-row>
            <el-divider />
            <el-row v-draggable="[
                otherMap,
                {
                    animation: 150,
                    ghostClass: 'ghost',
                    group: {
                        name: 'formList',
                        pull: 'clone',
                        put: false
                    },
                    dragClass: 'flex-1',
                    sort: false,
                    clone
                }
            ]">
                <el-col :span="6" v-for="item in otherMap" :key="item.type" class="drag-row">
                    <div
                        class="aspect-ratio-1 flex items-center justify-center flex-col gap-6 hover:bg-gray-100 cursor-pointer drag-item">
                        <component :is="item.icon" class="size-12" />
                        <div>{{ item.name }}</div>
                    </div>
                </el-col>
            </el-row>

        </div>
        <div class="flex-1 px-4">
            <List ref="ListRef" :formConfig="formConfigModel" @change="onChangeModel"></List>
        </div>

        <div class="w-180 h-full px-6 border-l-1 border-l-solid border-gray-300">
            <Config v-model:formModel="formModel" v-model:formConfigModel="formConfigModel" :questionMap
                :disabled="!activeId"></Config>
        </div>
    </div>

    <el-dialog v-model="dialogConfig.show" :title="dialogConfig.title" :width="dialogConfig.width" destroy-on-close>
        <div v-if="dialogConfig.type === 'export'">
            <JsonAndHtml :data="dialogConfig.content" />
        </div>
        <div v-if="dialogConfig.type === 'view'">
            <View :data="dialogConfig.content" />
        </div>
    </el-dialog>
</template>


<style lang="less">
.draggler {
    min-height: calc(100vh - 64px);

    .draggler {
        min-height: 42px;
        padding: 6px 0;
    }

    .drag-row {
        max-width: 100% !important;
    }

    .drag-item {
        flex-direction: row;
        aspect-ratio: none;
        height: 46px;
        background: #f0f0f0;
        width: 100%;
        max-width: 100%;
        border-radius: 4px
    }
}
</style>
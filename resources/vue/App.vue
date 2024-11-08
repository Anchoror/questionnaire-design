<script setup>
import Config from './components/Config.vue';
import JsonAndHtml from './components/JsonAndHtml.vue';
import List from './components/List.vue';
import { vDraggable } from 'vue-draggable-plus'
import { appStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

const { formConfig: formModel, componentMap, otherMap } = storeToRefs(appStore())

const title = ref('表单设计系统') // 系统标题

const ListRef = ref(null) // 列表组件实例

// 弹窗组件配置
const dialogConfig = ref({
    show: false,
    title: '',
    content: '',
    width: 800
})

/**
 * 打开弹窗
 */
const onView = () => {
    const data = ListRef.value.getAllConfigData()
    dialogConfig.value.title = '预览'
    dialogConfig.value.content = data
    dialogConfig.value.show = true
}

/**
 * 清空当前配置数据
 */
const onClear = () => {
    ListRef.value.clear()
}

/**
 * 自定义拖动事件的克隆数据
 * @param {Object} data 原数据 
 * @return {Object} 相应类型组件的初始配置数据
 */
const cloneData = (data) => {

    return ListRef.value.getComConfigData(data.type)
}


const initList = [
    {
        "type": "input",
        "label": "姓名",
        "prop": "name",
        "id": 1,
        "defaultV": "",
        "labelW": "auto",
        "labelP": "",
        "span": 24,
        "disabled": false,
        "placeholder": "请输入",
        "inputT": "text",
        "inputR": 3,
        "clearable": true,
        "showN": false
    },
    {
        "type": "radio",
        "label": "性别",
        "prop": "sex",
        "id": 2,
        "defaultV": "1",
        "labelW": "auto",
        "labelP": "",
        "span": 24,
        "disabled": false,
        "placeholder": "",
        "options": [
            {
                "value": "1",
                "label": "男"
            },
            {
                "label": "女",
                "value": "2"
            },
            {
                "label": "位置",
                "value": "3"
            }
        ]
    },
    {
        "type": "check",
        "label": "爱好",
        "prop": "like",
        "id": 3,
        "defaultV": "",
        "labelW": "auto",
        "labelP": "",
        "span": 24,
        "disabled": false,
        "placeholder": "",
        "options": [
            {
                "value": "1",
                "label": "滑雪"
            },
            {
                "label": "游泳",
                "value": "2"
            },
            {
                "label": "烹饪",
                "value": "3"
            },
            {
                "label": "打坐",
                "value": "4"
            }
        ]
    },
    {
        "type": "select",
        "label": "职业",
        "prop": "job",
        "id": 4,
        "defaultV": "4",
        "labelW": "auto",
        "labelP": "",
        "span": 24,
        "disabled": false,
        "placeholder": "请选择",
        "clearable": false,
        "filterable": true,
        "multiple": false,
        "selectL": undefined,
        "options": [
            {
                "value": "1",
                "label": "运动员"
            },
            {
                "label": "厨师",
                "value": "2"
            },
            {
                "label": "伐木工",
                "value": "3"
            },
            {
                "label": "司机",
                "value": "4"
            }
        ]
    },
    {
        "type": "date",
        "label": "出生日期",
        "prop": "birth",
        "id": 5,
        "defaultV": "",
        "labelW": 5,
        "labelP": "",
        "span": 24,
        "disabled": false,
        "placeholder": "请选择日期",
        "dateT": "date",
        "dateF": "yyyy-MM-dd",
        "clearable": false
    },
    {
        "type": "color",
        "label": "幸运色",
        "prop": "color",
        "id": 6,
        "defaultV": "#fff",
        "labelW": 4,
        "labelP": "",
        "span": 24,
        "disabled": true,
        "placeholder": "",
        "colorF": "hex",
        "colorA": true
    },
    {
        "type": "switch",
        "label": "是否退休",
        "prop": "isOut",
        "id": 7,
        "defaultV": "1",
        "labelW": 5,
        "labelP": "",
        "span": 24,
        "disabled": false,
        "placeholder": "",
        "switchA": "1",
        "switchI": "2"
    },
    {
        "type": "slider",
        "label": "日照比",
        "prop": "rate",
        "id": 8,
        "defaultV": "0.4",
        "labelW": 4,
        "labelP": "",
        "span": 24,
        "disabled": false,
        "placeholder": "",
        "sliderMax": 1,
        "sliderMin": 0,
        "sliderStep": 0.2,
        "sliderI": false,
        "sliderS": false,
        "sliderR": false
    },
    {
        "type": "select",
        "label": "这是一个多选",
        "prop": "mutiple",
        "id": 9,
        "defaultV": "",
        "labelW": 8,
        "labelP": "left",
        "span": 10,
        "disabled": false,
        "placeholder": "请选择",
        "clearable": true,
        "filterable": false,
        "multiple": true,
        "selectL": 2,
        "options": [
            {
                "value": "a",
                "label": "A"
            },
            {
                "label": "B",
                "value": "b"
            },
            {
                "label": "C",
                "value": "c"
            }
        ]
    }
]

const initList2 = []

onMounted(() => {
    // onView()
})
</script>

<template>
    <div class="h-32 flex items-center px-12 border-b-1 border-b-solid border-gray-300">
        <el-text size="large" class="flex-1">
            {{ title }}
        </el-text>
        <div>
            <el-button type="primary" @click="onView">预览</el-button>
            <!-- <el-button type="success" @click="onExport">导出</el-button> -->
            <el-button type="warning">导入</el-button>
            <el-button type="danger" @click="onClear">清空</el-button>
        </div>
    </div>
    <div class="flex h-[calc(100vh-64px)] overflow-hidden">
        <div class="w-150 px-6 border-r-1 border-r-solid border-gray-300">
            <h3 class="lh-24">表单组件</h3>
            <el-row v-draggable="[
                componentMap,
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
                    clone: cloneData
                }
            ]">
                <el-col :span="6" v-for="item in componentMap" :key="item.type" class="drag-row">
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
                    clone: cloneData
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
        <div class="flex-1 px-2">
            <List ref="ListRef" :listData="initList2"></List>
        </div>

        <div class="w-180 h-full px-6 border-l-1 border-l-solid border-gray-300">
            <Config></Config>
        </div>
    </div>

    <el-dialog v-model="dialogConfig.show" :title="dialogConfig.title" :width="dialogConfig.width" destroy-on-close
        align-center>
        <JsonAndHtml :data="dialogConfig.content" />
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

.layui-form-radio {
    margin-top: 0;
}

.layui-form-item .layui-form-checkbox[lay-skin=primary] {
    margin-top: 0;
}

.layui-form-switch {
    margin-top: 0;
}
</style>
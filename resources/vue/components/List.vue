<script setup>
import Item from './Item.vue';
import { vDraggable } from 'vue-draggable-plus'
import { appStore } from '@/stores/app'
import { storeToRefs } from 'pinia';

const props = defineProps({
    listData: {
        type: Array,
        default: () => []
    },
})
const emit = defineEmits(['change'])

const { activeId, listItemId, baseConfig, typeConfigMap, formConfig, formModel } = storeToRefs(appStore())

const list = ref(props.listData) // 组件配置数据列表

/**
 * 获取某一类型组件的相关初始配置数据
 * @param {String} type 组件类型
 * @return {Object} 组件配置数据
 */
const getComConfigData = (type) => {
    const id = ++listItemId.value
    const data = { ...baseConfig.value, ...typeConfigMap.value[type], id, type }
    if (type === 'grid') {
        data.children = [[], []]
    }
    return data
}
/**
 * 获取所有组件和全局的配置数据
 * @return {Object} 组件配置数据
 */
const getAllConfigData = () => {
    const data = {
        form: { ...formConfig.value },
        list: [...list.value]
    }
    return data
}
/**
 * 清除配置列表
 */
const clear = () => {
    list.value = []
    activeId.value = 0
    listItemId.value = 0
    emit('change', null)
    return
}

const listItemRefs = ref(null) //Item 组件实例数组

// /**
//  * 获取表单填入数据
//  * 该函数遍历表单项引用，并将每个表单项的字段数据合并到一个对象中
//  * @returns {Object} 包含所有表单项字段数据的对象
//  */
// const getFieldData = () => {
//     const dataArr = listItemRefs.value.map(item => item.getField())
//     const obj = {}
//     dataArr.forEach(item => {
//         for (const key in item) {
//             obj[key] = item[key]
//         }
//     })
//     return obj
// }
// /**
//  * 重置表单填入数据
//  */
// const reset = () => {
//     listItemRefs.value.forEach(item => item.reset())
// }

/**
 * 向列表中添加新的数据项后，处理激活 id，和正在编辑的表单数据
 * @param e 拖动结束的事件对象
 */
const onAdd = (e) => {
    const { newIndex, data, clonedData } = e
    activeId.value = clonedData.id
    formModel.value = clonedData
}

/**
 * 删除列表数据中某一项
 * @param {Number} id 某项数据的 id 值
 */
const onDel = (id) => {
    // list.value = list.value.filter((item) => id !== item.id)
    list.value.splice(list.value.findIndex(item => item.id === id), 1)
    activeId.value = 0
}



defineExpose({
    getComConfigData,
    getAllConfigData,
    // getFieldData,
    clear,
    // reset,
})
</script>

<template>
    <div v-draggable="[
        list,
        {
            animation: 150,
            ghostClass: 'ghost',
            group: {
                name: 'formList',
            },
            onAdd,
        }
    ]" class="draggler">
        <template v-for="item in list" :key="item.id">
            <Item ref="listItemRefs" :config="item" @remove="onDel">
            </Item>
        </template>
    </div>
</template>

<script setup>
import VCodeBlock from '@wdns/vue-code-block';
import ELView from './ELView.vue'
import LAYView from './LAYView.vue'
import { js_beautify, css_beautify, html_beautify } from 'js-beautify'
import { nextTick } from 'vue';
const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})

const json = JSON.stringify(props.data, null, 4)
const code = ref('')

const options = ref(['elementUI', 'layUI'])
const value = ref('layUI')

const switchVModel = ref(false)
const layRef = ref(null)
const Lang = ref('')
const childRenderFn = []
provide('childRenderFn', childRenderFn)



const getCode = () => {
    switchVModel.value = false
    if (value.value === 'layUI') {
        code.value = html_beautify(
            `<form lay-filter="layfrom" class="layui-form" action="">${layui.$('.layui-form').eq(0).html()}</form>`,
            { indent_size: 2, space_in_empty_paren: true }
        )
        layui.use(() => {
            layui.form.render()
            let script = ``
            childRenderFn.forEach((fnStr) => {
                console.log(fnStr)
                eval(fnStr)
                script += fnStr
            })
            code.value += `\n\n<script>\nlayui.use(() => { ${script} })\n\n<\/script>`
        })
        Lang.value = 'html'
    }
    if (value.value === 'elementUI') {
        code.value = json
        Lang.value = 'json'
    }
}

const onChange = async () => {

    childRenderFn.length = 0

    await nextTick()

    getCode()

}

onMounted(() => {
    getCode()
})

</script>


<template>
    <div class="flex gap-2 mb-8 justify-between">
        <el-segmented v-model="value" :options="options" @change="onChange" />
        <el-switch class="swith" v-model="switchVModel" inline-prompt active-text="code"
            inactive-text="view"></el-switch>
    </div>

    <el-divider></el-divider>

    <div v-show="!switchVModel">
        <ELView v-if="value === 'elementUI'" :data="props.data" :type="value"></ELView>
        <LAYView v-if="value === 'layUI'" :data="props.data" :type="value" ref="layRef"></LAYView>
    </div>

    <div v-show="switchVModel">
        <VCodeBlock :code="code" max-height="700px" highlightjs :lang="Lang" theme="neon-bunny" />
    </div>

</template>

<style lang="less" scoped>
.swith {
    --el-switch-off-color: var(--el-color-primary);
    --el-switch-on-color: var(--el-color-success);
}
</style>
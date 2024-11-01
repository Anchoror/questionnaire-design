<script setup>
import VCodeBlock from '@wdns/vue-code-block';
import ELView from './ELView.vue'
import LAYView from './LAYView.vue'
const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})

const code = JSON.stringify(props.data, null, 4)

const options1 = ref(['渲染', '代码'])
const value1 = ref('渲染')
const options2 = ref(['elementUI', 'layUI'])
const value2 = ref('layUI')


</script>


<template>
    <div class="flex gap-2 mb-8">
        <el-segmented v-model="value1" :options="options1" />
        <el-segmented v-model="value2" :options="options2" />
    </div>

    <el-divider></el-divider>

    <div v-if="value1 === '渲染'">
        <ELView v-if="value2 === 'elementUI'" :data="props.data" :type="value2"></ELView>
        <LAYView v-if="value2 === 'layUI'" :data="props.data" :type="value2"></LAYView>
    </div>
    <div v-if="value1 === '代码'">
        <VCodeBlock class="max-h-300" :code="code" highlightjs lang="json" theme="neon-bunny" />
    </div>
</template>

<style scoped></style>
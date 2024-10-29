<script setup>
import Options from './Options.vue'
const props = defineProps({
    formModel: {
        type: Object,
        default: () => ({})
    },
    formConfigModel:{
        type:Object,
        default: () => ({})  
    },
    questionMap: {
        type: Array,
        default: () => []
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:formModel', 'update:formConfigModel'])

const tabsName = ref("1")


</script>

<template>

    <el-tabs v-model="tabsName" @tab-click="">
        <el-tab-pane label="组件配置" name="1">
            <el-form :model="formModel" class="px-12 h-[calc(100vh-55px-64px)] overflow-auto pb-12"
                label-position="left" label-width="5em" :disabled>
                <div class="mb-6">基础配置</div>
                <el-form-item prop="label" label="标签">
                    <el-input v-model="formModel.label" placeholder="请输入" />
                </el-form-item>
                <el-form-item prop="prop" label="字段名" required>
                    <el-input v-model="formModel.prop" placeholder="请输入" />
                </el-form-item>
                <el-form-item prop="type" label="类型">
                    <el-select v-model="formModel.type" placeholder="请选择" disabled>
                        <el-option v-for="item in questionMap" :key="item.type" :label="item.name" :value="item.type" />
                    </el-select>
                </el-form-item>
                <el-form-item prop="defaultV" label="默认值">
                    <el-input v-model="formModel.defaultV" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item prop="labelP" label="标签位置">
                    <el-radio-group v-model="formModel.labelP">
                        <el-radio-button value="left">左</el-radio-button>
                        <el-radio-button value="right">右</el-radio-button>
                        <el-radio-button value="top">上</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item prop="labelW" label="标签宽度">
                    <el-input-number v-model="formModel.labelW" placeholder="" step-strictly></el-input-number>
                    <span class="ml-5">em</span>
                </el-form-item>
                <el-form-item prop="span" label="组件宽度">
                    <el-slider v-model="formModel.span" :step="2" size="small" :min="2" :max="24" show-stops />
                </el-form-item>
                <el-form-item prop="disabled" label="禁用组件">
                    <el-switch v-model="formModel.disabled" />
                </el-form-item>
                <div class="mb-6">主要配置</div>
                <template v-if="['radio', 'check', 'select'].includes(formModel.type)">

                    <Options v-model:optionsValue="formModel.options" />
                </template>

                <template v-if="['input'].includes(formModel.type)">
                    <el-form-item prop="inputT" label="输入类型">
                        <el-select v-model="formModel.inputT" placeholder="请选择">
                            <el-option value="text" label="文本"></el-option>
                            <el-option value="password" label="密码"></el-option>
                            <el-option value="number" label="数字"></el-option>
                            <el-option value="textarea" label="文本域"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="placeholder" label="占位文字">
                        <el-input v-model="formModel.placeholder" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item prop="clearable" label="清除按钮">
                        <el-switch v-model="formModel.clearable" />
                    </el-form-item>
                    <el-form-item prop="maxL" label="最大长度">
                        <el-input-number v-model="formModel.maxL" placeholder="" step-strictly
                            :min="0"></el-input-number>
                    </el-form-item>

                    <el-form-item prop="inputR" label="初始行数">
                        <el-input-number v-model="formModel.inputR" placeholder="" step-strictly
                            :min="0"></el-input-number>
                    </el-form-item>
                    <el-form-item prop="showN" label="字数统计">
                        <el-switch v-model="formModel.showN" />
                    </el-form-item>


                </template>

                <template v-if="['select'].includes(formModel.type)">
                    <el-form-item prop="multiple" label="是否多选">
                        <el-switch v-model="formModel.multiple" />
                    </el-form-item>
                    <el-form-item prop="placeholder" label="占位文字">
                        <el-input v-model="formModel.placeholder" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item prop="clearable" label="清除按钮">
                        <el-switch v-model="formModel.clearable" />
                    </el-form-item>
                    <el-form-item prop="filterable" label="筛选选项">
                        <el-switch v-model="formModel.filterable" />
                    </el-form-item>
                    <el-form-item prop="selectL" label="多选限制">
                        <el-input-number v-model="formModel.selectL" placeholder="" step-strictly
                            :min="0"></el-input-number>
                    </el-form-item>
                </template>

                <template v-if="['date'].includes(formModel.type)">
                    <el-form-item prop="dateT" label="输入类型">
                        <el-select v-model="formModel.dateT" placeholder="请选择">
                            <el-option value="year" label="年"></el-option>
                            <el-option value="month" label="月"></el-option>
                            <el-option value="week" label="周"></el-option>
                            <el-option value="date" label="日"></el-option>
                            <el-option value="datetime" label="时间"></el-option>
                            <el-option value="yearrange" label="年范围"></el-option>
                            <el-option value="monthrange" label="月范围"></el-option>
                            <el-option value="daterange" label="日范围"></el-option>
                            <el-option value="datetimerange" label="时间范围"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="placeholder" label="占位文字">
                        <el-input v-model="formModel.placeholder" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item prop="dateF" label="日期格式">
                        <el-input v-model="formModel.dateF" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item prop="clearable" label="清除按钮">
                        <el-switch v-model="formModel.clearable" />
                    </el-form-item>
                </template>

                <template v-if="['color'].includes(formModel.type)">
                    <el-form-item prop="colorF" label="颜色格式">
                        <el-input v-model="formModel.colorF" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item prop="colorA" label="透明度">
                        <el-switch v-model="formModel.colorA" />
                    </el-form-item>
                </template>
                <template v-if="['switch'].includes(formModel.type)">
                    <el-form-item prop="switchA" label="on 值">
                        <el-input v-model="formModel.switchA" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item prop="switchI" label="off 值">
                        <el-input v-model="formModel.switchI" placeholder="请输入"></el-input>
                    </el-form-item>
                </template>

                <template v-if="['slider'].includes(formModel.type)">
                    <el-form-item prop="sliderMax" label="最大值">
                        <el-input-number v-model="formModel.sliderMax" placeholder="" step-strictly :min="0"
                            :max="100"></el-input-number>
                    </el-form-item>
                    <el-form-item prop="sliderMin" label="最小值">
                        <el-input-number v-model="formModel.sliderMin" placeholder="" step-strictly :min="0"
                            :max="formModel.sliderMax || 0"></el-input-number>
                    </el-form-item>
                    <el-form-item prop="sliderStep" label="步长">
                        <el-input-number v-model="formModel.sliderStep" placeholder="" step-strictly :min="1"
                            :max="100"></el-input-number>
                    </el-form-item>
                    <el-form-item prop="sliderR" label="范围选择">
                        <el-switch v-model="formModel.sliderR" />
                    </el-form-item>
                    <el-form-item prop="sliderS" label="输入框">
                        <el-switch v-model="formModel.sliderI" />
                    </el-form-item>
                    <el-form-item prop="sliderS" label="断点显示">
                        <el-switch v-model="formModel.sliderS" />
                    </el-form-item>
                </template>
            </el-form>

        </el-tab-pane>
        <el-tab-pane label="表单配置" name="2">
            <el-form :model="formConfigModel" class="px-12 h-[calc(100vh-55px-64px)] overflow-auto pb-12"
                label-position="left" label-width="5em" :disabled>
                <div class="mb-6">基础配置</div>
                <el-form-item prop="type" label="类型">
                    <el-radio-group v-model="formConfigModel.type">
                        <el-radio-button value="normal">内置</el-radio-button>
                        <el-radio-button value="dialog">弹窗</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item prop="labelP" label="标签位置">
                    <el-radio-group v-model="formConfigModel.labelP">
                        <el-radio-button value="left">左</el-radio-button>
                        <el-radio-button value="right">右</el-radio-button>
                        <el-radio-button value="top">上</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item prop="labelW" label="标签宽度">
                    <el-input-number v-model="formConfigModel.labelW" placeholder="" step-strictly></el-input-number>
                    <span class="ml-5">em</span>
                </el-form-item>
                <el-form-item prop="gutter" label="间距">
                    <el-slider v-model="formConfigModel.gutter" :step="2" size="small" :min="0" :max="100" />
                </el-form-item>
            </el-form>
        </el-tab-pane>
    </el-tabs>


</template>

<style lang="less" scoped></style>
import { defineStore } from "pinia";

import layRadio from "@/components/layform/layRadioForm.vue";
import layCheck from "@/components/layform/layCheckForm.vue";
import layInput from "@/components/layform/layInputForm.vue";
import laySelect from "@/components/layform/laySelectForm.vue";
import layDate from "@/components/layform/layDateForm.vue";
import layColor from "@/components/layform/layColorForm.vue";
import laySwitch from "@/components/layform/laySwitchForm.vue";
import laySlider from "@/components/layform/laySliderForm.vue";
import layBtn from "@/components/layform/layBtn.vue";
import layTxt from "@/components/layform/layTxt.vue";

export const appStore = defineStore(
    "app",
    () => {
        const activeId = ref(0); //当前激活组件 id
        const listItemId = ref(200); //当前最新的组件 id

        // 组件基础配置参数
        const baseConfig = ref({
            type: "", //类型
            label: "", //标签
            prop: "", //字段名
            id: 0, //唯一 key
            defaultV: "", //默认值
            labelW: "auto", //标签宽度
            labelP: "", //标签定位
            span: 24, //组件宽度（栅格栏布局）
            disabled: false, //是否禁用
            placeholder: "", //占位符
            // inputT:undefined, //输入框类型
            // clearable:undefined, //是否显示清除按钮
            // maxL:undefined, //最大长度
            // inputR:undefined, //最大行数
            // showN:undefined, //是否显示字数统计
            // filterable:undefined, //是否可搜索
            // multiple:undefined, //是否多选
            // selectL:undefined, //选项数量
            // dateT:undefined, //日期类型
            // dateF:undefined, //日期格式
            // colorF:undefined, //颜色格式
            // colorA:undefined, //是否显示 alpha
            // switchA:undefined, //开关打开值
            // switchI:undefined, //开关关闭值
            // options:undefined, //选项数组 [{label:'', value:''}]
            // sliderMax:undefined, //滑块最大值
            // sliderMin:undefined, //滑块最小值
            // sliderStep:undefined, //滑块步长
            // sliderI:undefined, //是否显示输入框
            // sliderS:undefined, //是否显示断点
            // sliderR:undefined, //是否使用范围选择
            // colNum:2, //栅格栏列数
            // colS:[8, 8], //列宽
            // children:[[], []], //栅格栏布局
            // content:'', //文字内容
            // fontS:16, //文字大小
            // fontC:'', //文字颜色
            // btnW:32px, //按钮大小
            // btnH:84px, //按钮大小
            // btnS:'', //按钮样式
            // btnT:'', //按钮风格
            // btnP:false, //按钮是否朴素
            // disabled:false //是否禁用组件
        });

        // 各个类型组件的初始化配置参数映射
        const typeConfigMap = ref({
            radio: {
                options: [{ value: "", label: "" }],
            },
            check: {
                options: [{ value: "", label: "" }],
            },
            input: {
                placeholder: "请输入",
                inputT: "text",
                inputR: "",
                clearable: true,
                inputR: 3,
                showN: false,
            },
            select: {
                placeholder: "请选择",
                clearable: true,
                filterable: false,
                multiple: false,
                selectL: 0,
                options: [{ value: "", label: "请选择" }],
            },
            date: {
                placeholder: "请选择日期",
                dateT: "date",
                dateF: "YYYY-MM-DD",
                clearable: true,
            },
            color: {
                colorF: "hex",
                colorA: false,
            },
            switch: {
                switchA: undefined,
                switchI: undefined,
            },
            slider: {
                sliderMax: 100,
                sliderMin: 0,
                sliderStep: 1,
                sliderI: false,
                sliderS: false,
                sliderR: false,
            },
            grid: {
                labelW: 0,
                colNum: 2,
                gutter: 8,
                colS: [12, 12],
                // children:[[],[]]
            },
            button: {
                labelW: 0,
                content: "按钮",
                fontS: 14,
                fontC: undefined,
                btnW: "auto",
                btnH: "auto",
                btnS: "",
                btnT: "",
                btnP: false,
                disabled: false,
            },
            text: {
                labelW: 0,
                content: "文字",
                fontS: 14,
                fontC: undefined,
            },
        });

        // 表单整体配置
        const formConfig = ref({
            type: "normal",
            labelW: 3,
            labelP: "right",
        });

        // 表单组件配置
        const formModel = ref({
            title: "",
            prop: "",
            type: "",
        });

        // 组件类型映射
        const componentMap = ref([
            {
                name: "单选框",
                icon: IconLsiconCircleSucceedOutline,
                type: "radio",
            },
            {
                name: "多选框",
                icon: IconLsiconCheckCorrectOutline,
                type: "check",
            },
            {
                name: "输入框",
                icon: IconLsiconAlignTxtLeftOutline,
                type: "input",
            },
            {
                name: "下拉框",
                icon: IconLsiconAmountDownOutline,
                type: "select",
            },
            {
                name: "日期选择",
                icon: IconLsiconCalendarOutline,
                type: "date",
            },
            {
                name: "颜色选择",
                icon: IconLsiconDecorateOutline,
                type: "color",
            },
            {
                name: "开关",
                icon: IconLsiconPowerOutline,
                type: "switch",
            },
            {
                name: "滑块",
                icon: IconLsiconControlOutline,
                type: "slider",
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
        ]);
        const otherMap = ref([
            {
                name: "布局",
                icon: IconLsiconAppsOutline,
                type: "grid",
            },
            {
                name: "按钮",
                icon: IconLsiconPointerOutline,
                type: "button",
            },
            {
                name: "文字",
                icon: IconLsiconTextOutline,
                type: "text",
            },
        ]);

        // type=>component 的关系映射
        const formMap = shallowRef({
            radio: defineAsyncComponent(() =>
                import("@/components/form/radioForm.vue")
            ),
            check: defineAsyncComponent(() =>
                import("@/components/form/checkForm.vue")
            ),
            input: defineAsyncComponent(() =>
                import("@/components/form/inputForm.vue")
            ),
            select: defineAsyncComponent(() =>
                import("@/components/form/selectForm.vue")
            ),
            date: defineAsyncComponent(() =>
                import("@/components/form/dateForm.vue")
            ),
            color: defineAsyncComponent(() =>
                import("@/components/form/colorForm.vue")
            ),
            switch: defineAsyncComponent(() =>
                import("@/components/form/switchForm.vue")
            ),
            slider: defineAsyncComponent(() =>
                import("@/components/form/sliderForm.vue")
            ),
            // upload: defineAsyncComponent(() => import('@/components/form/uploadForm.vue')),
            // score: defineAsyncComponent(() => import('@/components/form/scoreForm.vue')),

            grid: defineAsyncComponent(() => import("@/components/List.vue")),
            button: defineAsyncComponent(() =>
                import("@/components/other/btn.vue")
            ),
            text: defineAsyncComponent(() =>
                import("@/components/other/txt.vue")
            ),
        });

        const layformMap = shallowRef({
            radio: layRadio,
            check: layCheck,
            input: layInput,
            select: laySelect,
            date: layDate,
            color: layColor,
            switch: laySwitch,
            slider: laySlider,
            // upload: defineAsyncComponent( import('@/components/form/uploadForm.vue')),
            // score: defineAsyncComponent( import('@/components/form/scoreForm.vue')),

            button: layBtn,
            text: layTxt,
        });

        return {
            activeId,
            listItemId,
            baseConfig,
            typeConfigMap,
            formConfig,
            formModel,
            componentMap,
            otherMap,
            formMap,
            layformMap,
        };
    },
    {
        persist: {
            paths: [],
        },
    }
);

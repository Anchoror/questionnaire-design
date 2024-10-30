<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>questionnaire-design</title>
    @vite(['resources/vue/main.js'])


</head>

<body>
    <div id="form"></div>

    <div>

        <div id=""></div>
    </div>
</body>

<script>
    document.addEventListener('vloaded', function (vload) {
        const { VForm } = vload.detail
        VForm('#form',{
            json:{
            "form": {
                "type": "normal",
                "labelW": 3,
                "labelP": "right",
                "gutter": 10
            },
            "list": [
                {
                "type": "input",
                "label": "姓名",
                "prop": "name",
                "index": 1,
                "defaultV": "",
                "labelW": "auto",
                "labelP": "",
                "span": 24,
                "disabled": false,
                "placeholder": "请输入",
                "inputT": "text",
                "clearable": true,
                "inputR": 3,
                "showN": false
                },
                {
                "type": "radio",
                "label": "性别",
                "prop": "sex",
                "index": 2,
                "defaultV": "",
                "labelW": "auto",
                "labelP": "",
                "span": 24,
                "disabled": false,
                "placeholder": "",
                "inputT": "",
                "options": [
                    {
                    "value": "1",
                    "label": "男"
                    },
                    {
                    "label": "女",
                    "value": "2"
                    }
                ]
                },
                {
                "type": "date",
                "label": "出生日期",
                "prop": "birthday",
                "index": 3,
                "defaultV": "",
                "labelW": 4,
                "labelP": "",
                "span": 24,
                "disabled": false,
                "placeholder": "请选择日期",
                "inputT": "",
                "clearable": true,
                "dateT": "date",
                "dateF": "YYYY-MM-DD"
                }
            ]
            },
            submit: function(data){
                console.log(data)
            }
        })
    });

</script>

</html>
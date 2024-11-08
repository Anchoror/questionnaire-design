<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>questionnaire-design</title>
    <link rel="stylesheet" href="/layui/css/layui.css">
    <script src="/layui/layui.js"></script>
    <script src="/xm-select/xm-select.js"></script>
    @vite(['resources/vue/main.js'])


</head>

<body>
    <form lay-filter="layfrom" class="layui-form" action="">
        <div class="layui-row" style="width: 100%; text-align: left;">
            <div class="layui-col-md12">
                <div class="layui-form-item" style="display: flex; flex-direction: row;"><label class="layui-form-label"
                        style="padding: 0px; line-height: 38px; width: 3em; text-align: right;">姓名</label>
                    <div class="flex-1 layui-input-wrap ml-6"><input type="text" name="name" lay-affix="clear"
                            class="layui-input" placeholder="请输入" value=""></div>
                </div>
            </div>
        </div>
        <div class="layui-row" style="width: 100%; text-align: left;">
            <div class="layui-col-md12">
                <div class="layui-form-item" style="display: flex; flex-direction: row;"><label class="layui-form-label"
                        style="padding: 0px; line-height: 38px; width: 3em; text-align: right;">性别</label>
                    <div class="flex-1 layui-input-wrap ml-6">
                        <div><input type="radio" name="sex" title="男" checked="" value="1"><input type="radio"
                                name="sex" title="女" value="2"><input type="radio" name="sex" title="位置" value="3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="layui-row" style="width: 100%; text-align: left;">
            <div class="layui-col-md12">
                <div class="layui-form-item" style="display: flex; flex-direction: row;"><label class="layui-form-label"
                        style="padding: 0px; line-height: 38px; width: 3em; text-align: right;">爱好</label>
                    <div class="flex-1 layui-input-wrap ml-6">
                        <div><input type="checkbox" name="like" title="滑雪" class="checkbox-input" value="1"><input
                                type="checkbox" name="like" title="游泳" class="checkbox-input" value="2"><input
                                type="checkbox" name="like" title="烹饪" class="checkbox-input" value="3"><input
                                type="checkbox" name="like" title="打坐" class="checkbox-input" value="4"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="layui-row" style="width: 100%; text-align: left;">
            <div class="layui-col-md12">
                <div class="layui-form-item" style="display: flex; flex-direction: row;"><label class="layui-form-label"
                        style="padding: 0px; line-height: 38px; width: 3em; text-align: right;">职业</label>
                    <div class="flex-1 layui-input-wrap ml-6"><select lay-search="">
                            <option value="">清选择</option>
                            <option value="1">运动员</option>
                            <option value="2">厨师</option>
                            <option value="3">伐木工</option>
                            <option selected="" value="4">司机</option>
                        </select></div>
                </div>
            </div>
        </div>
        <div class="layui-row" style="width: 100%; text-align: left;">
            <div class="layui-col-md12">
                <div class="layui-form-item" style="display: flex; flex-direction: row;"><label class="layui-form-label"
                        style="padding: 0px; line-height: 38px; width: 5em; text-align: right;">出生日期</label>
                    <div class="flex-1 layui-input-wrap ml-6"><input type="text" class="layui-input" id="date-birth"
                            placeholder="请选择日期"></div>
                </div>
            </div>
        </div>
        <div class="layui-row" style="width: 100%; text-align: left;">
            <div class="layui-col-md12">
                <div class="layui-form-item" style="display: flex; flex-direction: row;"><label class="layui-form-label"
                        style="padding: 0px; line-height: 38px; width: 4em; text-align: right;">幸运色</label>
                    <div class="flex-1 layui-input-wrap ml-6">
                        <div id="colorpicker-color" style="pointer-events: none;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="layui-row" style="width: 100%; text-align: left;">
            <div class="layui-col-md12">
                <div class="layui-form-item" style="display: flex; flex-direction: row;"><label class="layui-form-label"
                        style="padding: 0px; line-height: 38px; width: 5em; text-align: right;">是否退休</label>
                    <div class="flex-1 layui-input-wrap ml-6"><input type="checkbox" name="isOut" title=""
                            lay-skin="switch" checked="" value="1"></div>
                </div>
            </div>
        </div>
        <div class="layui-row" style="width: 100%; text-align: left;">
            <div class="layui-col-md12">
                <div class="layui-form-item" style="display: flex; flex-direction: row;"><label class="layui-form-label"
                        style="padding: 0px; line-height: 38px; width: 4em; text-align: right;">日照比</label>
                    <div class="flex-1 layui-input-wrap ml-6">
                        <div style="line-height: 4px; transform: translateY(calc(50% - 2px)); height: 38px;">
                            <div id="slider-rate"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="layui-row" style="width: 100%; text-align: left;">
            <div class="layui-col-md5">
                <div class="layui-form-item" style="display: flex; flex-direction: row;"><label class="layui-form-label"
                        style="padding: 0px; line-height: 38px; width: 8em; text-align: left;">这是一个多选</label>
                    <div class="flex-1 layui-input-wrap ml-6">
                        <div id="xmselectmutiple" style="">
                            <xm-select ua="mac" size="medium" tabindex="1"><input class="xm-select-default"
                                    lay-verify="" lay-vertype="" lay-reqtext="" name="select"><i class="xm-icon"></i>
                                <div class="xm-tips">请选择</div>
                                <div class="xm-label auto-row">
                                    <div class="scroll">
                                        <div class="label-content" title=""></div>
                                    </div>
                                </div>
                                <div class="xm-body  absolute dis">
                                    <div tabindex="1" style="outline: none;">
                                        <div>
                                            <div class="xm-toolbar">
                                                <div class="toolbar-tag"><i
                                                        class="xm-iconfont xm-icon-quanxuan"></i><span>全选</span></div>
                                                <div class="toolbar-tag"><i
                                                        class="xm-iconfont xm-icon-qingkong"></i><span>清空</span></div>
                                            </div>
                                            <div class="xm-search dis"><i class="xm-iconfont xm-icon-sousuo"></i><input
                                                    class="xm-input xm-search-input" placeholder="请选择"></div>
                                            <div class="scroll-body" style="max-height: 200px;">
                                                <div class="xm-option   show-icon" value="a"><i
                                                        class="xm-option-icon xm-iconfont xm-icon-duox"
                                                        style="border-color: rgb(0, 150, 136);"></i>
                                                    <div class="xm-option-content">A</div>
                                                </div>
                                                <div class="xm-option   show-icon" value="b"><i
                                                        class="xm-option-icon xm-iconfont xm-icon-duox"
                                                        style="border-color: rgb(0, 150, 136);"></i>
                                                    <div class="xm-option-content">B</div>
                                                </div>
                                                <div class="xm-option   show-icon" value="c"><i
                                                        class="xm-option-icon xm-iconfont xm-icon-duox"
                                                        style="border-color: rgb(0, 150, 136);"></i>
                                                    <div class="xm-option-content">C</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </xm-select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="layui-row"><button type="button" class="layui-btn">提交</button><button type="button"
                class="layui-btn layui-btn-primary">重置</button></div>
    </form>

    <script>
        layui.use(() => { 
          layui.laydate.render({
              elem: '#date-birth',
              type: 'date',
              format: 'yyyy-MM-dd',
              range: false,
              rangeLinked: false
          })
      
          layui.colorpicker.render({
              elem: '#colorpicker-color',
              color: '#fff', // 设置默认色
              format: 'hex',
              alpha: 'true'
          });
      
          layui.slider.render({
              elem: '#slider-rate',
              min: '0', // 最小值
              max: '1', // 最大值
              step: '0.2', // 步长
              showstep: false, // 开启间隔点
              input: false, //输入框
              range: false, // 范围选择
              value: '0.4',
              disabled: false,
          })
      
          // 文档地址： https://cdn.faysunshine.com/file/xm-select/v1.2.4/index.html#/basic/use
          xmSelect.render({
                      el: '#xmselectmutiple',
                      language: 'zn',
                      toolbar: {
                          show: true,
                      },
                      tips: '请选择',
                      max: 2,
                      filterable: false,
                      initValue: [""],
                      autoRow: true,
                      data: [{"name":"A","value":"a"},{"name":"B","value":"b"},{"name":"C","value":"c"}]
                  })
           })
      
    </script>
</body>

</html>
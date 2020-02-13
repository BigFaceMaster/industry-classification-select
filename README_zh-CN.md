[English](./README.md) | 简体中文



# industry-classification-select 行业信息分类选择器

> 根据 [GICS](https://www.msci.com/gics) 全球行业信息分类整理，使用 [ant-design Cascader](https://ant.design/components/cascader-cn)封装成全球行业信息分类选择器。



## 何时使用



需获取全球行业信息分类时





## [在线示例](https://codesandbox.io/s/industry-classification-select-j3y5c)



## API



```react
import IndustryClassificationSelect from 'industry-classification-select;

<IndustryClassificationSelect onChange={v => consle.log(v)}/>
```





## 参数说明



| 参数                 | 说明                                                         | 类型                                                         | 默认值              |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------- |
| allowClear           | 是否支持清除                                                 | boolean                                                      | true                |
| changeOnSelect       | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | boolean                                                      | false               |
| className            | 自定义类名                                                   | string                                                       | -                   |
| zh                   | 是否显示中文                                                 | boolean                                                      | False               |
| defaultValue         | 默认的选中项({   code: number;   en?: string;   zh?: string;   desc?: string;   desc_zh?: string; }) | object                                                       | -                   |
| disabled             | 禁用                                                         | boolean                                                      | false               |
| expandTrigger        | 次级菜单的展开方式，可选 'click' 和 'hover'                  | string                                                       | ‘click’             |
| getPopupContainer    | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | Function(triggerNode)                                        | () => document.body |
| notFoundContent      | 当下拉列表为空时显示的内容                                   | string                                                       | 'Not Found'         |
| placeholder          | 输入框占位文本                                               | string                                                       | '请选择'            |
| popupClassName       | 自定义浮层类名                                               | string                                                       | -                   |
| popupPlacement       | 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` | Enum                                                         | bottomLeft          |
| popupVisible         | 控制浮层显隐                                                 | boolean                                                      | -                   |
| showSearch           | 在选择框中显示搜索框                                         | boolean                                                      | false               |
| size                 | 输入框大小，可选 `large` `default` `small`                   | string                                                       | default             |
| style                | 自定义样式                                                   | string                                                       | -                   |
| suffixIcon           | 自定义的选择框后缀图标                                       | ReactNode                                                    | -                   |
| value                | 指定选中项({   code: number;   en?: string;   zh?: string;   desc?: string;   desc_zh?: string; }) | object                                                       | -                   |
| onChange             | 选择完成后的回调                                             | ({   code: number;   en: string;   zh: string;   desc: string;   desc_zh: string; })) => void | -                   |
| onPopupVisibleChange | 显示/隐藏浮层的回调                                          | (value) => void                                              |                     |



更多参数请参考[ant-design cascader](https://ant.design/components/cascader-cn/#API)

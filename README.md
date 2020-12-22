English| [简体中文](./README_zh-CN.md)



# industry-classification-select

> This is base on  [GICS](https://www.msci.com/gics), and used [ant-design v4 Cascader](https://ant.design/components/cascader/)



## When To Use



When you need to select industry classification.



## [Online Demo](https://codesandbox.io/s/industry-classification-select-j3y5c)



## API



```react
import IndustryClassificationSelect from 'industry-classification-select;

<IndustryClassificationSelect onChange={v => consle.log(v)}/>
```





## Parameter



| Parameters                 | Desc                                                         | Type                                                         | Default              |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------- |
| allowClear           | whether allow clear                                          | boolean                                                      | true                |
| changeOnSelect       | change value on each selection if set to true, see above demo for details | boolean                                                      | false               |
| className            | additional css class                                         | string                                                       | -                   |
| zh                   | language zh or en                                            | boolean                                                      | false               |
| defaultValue         | initial selected value({   code: number;   en?: string;   zh?: string;   desc?: string;   desc_zh?: string; }) | object                                                       | -                   |
| disabled             | whether disabled select                                      | boolean                                                      | false               |
| expandTrigger        | expand current item when click or hover, one of 'click' 'hover' | string                                                       | ‘click’             |
| getPopupContainer    | Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative.[example](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | Function(triggerNode)                                        | () => document.body |
| notFoundContent      | Specify content to show when no result matches.              | string                                                       | 'Not Found'         |
| placeholder          | input placeholder                                            | string                                                       | '请选择'            |
| popupClassName       | additional className of popup overlay                        | string                                                       | -                   |
| popupPlacement       | use preset popup align config from builtinPlacements：`bottomLeft` `bottomRight` `topLeft` `topRight` | Enum                                                         | bottomLeft          |
| popupVisible         | set visible of cascader popup                                | boolean                                                      | -                   |
| showSearch           | Whether show search input in single mode.                    | boolean                                                      | false               |
| size                 | input size, one of `large` `default` `small`                 | string                                                       | default             |
| style                | additional style                                             | string                                                       | -                   |
| suffixIcon           | The custom suffix icon                                       | ReactNode                                                    | -                   |
| value                | selected value({   code: number;   en?: string;   zh?: string;   desc?: string;   desc_zh?: string; }) | object                                                       | -                   |
| onChange             | callback when finishing cascader select                      | ({   code: number;   en: string;   zh: string;   desc: string;   desc_zh: string; })) => void | -                   |
| onPopupVisibleChange | callback when popup shown or hidden                          | (value) => void                                              |                     |



more parameters to [ant-design cascader](https://ant.design/components/cascader/#API)

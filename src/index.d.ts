import * as React from 'react';

export interface IndustryClassificationSelectorProps {
  /** 默认的选中项 */
  defaultValue?: {
    code: number;
    en?: string;
    zh?: string;
    desc?: string;
    desc_zh?: string;
  };
  /** 指定选中项 */
  value?: {
    code: number;
    en?: string;
    zh?: string;
    desc?: string;
    desc_zh?: string;
  };
  /** 选择完成后的回调 */
  onChange?: (value: {
    code: number;
    en?: string;
    zh?: string;
    desc?: string;
    desc_zh?: string;
  }) => void;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 自定义浮层类名 */
  popupClassName?: string;
  /** 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` */
  popupPlacement?: string;
  /** 输入框占位文本 */
  placeholder?: string;
  /** 输入框大小，可选 `large` `default` `small` */
  size?: 'large' | 'default' | 'small';
  /** 禁用 */
  disabled?: boolean;
  /** 是否支持清除 */
  allowClear?: boolean;
  showSearch?: boolean;
  notFoundContent?: React.ReactNode;
  /** 次级菜单的展开方式，可选 'click' 和 'hover' */
  expandTrigger?: 'click' | 'hover';
  /** 当此项为 true 时，点选每级菜单选项值都会发生变化 */
  changeOnSelect?: boolean;
  /** 浮层可见变化时回调 */
  onPopupVisibleChange?: (popupVisible: boolean) => void;
  prefixCls?: string;
  inputPrefixCls?: string;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  popupVisible?: boolean;
  suffixIcon?: React.ReactNode;
}

export default class IndustryClassificationSelector extends React.Component<
  IndustryClassificationSelectorProps,
  any
> {}

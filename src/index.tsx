import React, { FC, useEffect, useState } from 'react';
import { Cascader } from 'antd';
import mapper from 'lodash/map';
import last from 'lodash/last';
import flattenDeep from 'lodash/flattenDeep';
import cloneDeep from 'lodash/cloneDeep';
import forEach from 'lodash/forEach';
import split from 'lodash/split';
import 'antd/es/cascader/style/index.css';
import 'antd/es/input/style/index.css';
import GICSOriginal from './GICS';

interface GICSItemProps {
  code?: number;
  en?: string;
  zh?: string;
  desc?: string;
  desc_zh?: string;
  children?: GICSItemProps[];
}

export interface IndustryClassificationSelectorProps {
  zh?: boolean;
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
  onChange?: (value: { code: any; desc_zh: any; en: any; zh: any; desc: any } | any[]) => void;
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

const IndustryClassificationSelector: FC<IndustryClassificationSelectorProps> = (
  props: IndustryClassificationSelectorProps,
) => {
  const GICS = cloneDeep(GICSOriginal);
  const { zh: cn, onChange, value } = props;

  // @ts-ignore
  const formatChildren = (item: GICSItemProps) => {
    const { code, en, zh, children } = item;
    return {
      ...item,
      value: code,
      label: cn ? zh : en,
      children: children
        ? mapper(children, (subItem: GICSItemProps) => formatChildren(subItem))
        : undefined,
    };
  };

  const formatIndustry = () =>
    mapper(GICS, (value: GICSItemProps) => {
      const { code, en, zh, children } = value;
      return {
        ...value,
        value: code,
        label: cn ? zh : en,
        children: children
          ? mapper(children, (item: GICSItemProps) => formatChildren(item))
          : undefined,
      };
    });

  const formatValue = (v: (string | number)[]) => {
    if (v && v.length > 0) {
      const allGICS = flattenDeep(
        mapper(GICS, (item: GICSItemProps) => {
          const { children } = item;
          if (children) {
            return [
              {
                ...item,
              },
              ...mapper(children, (subItem: GICSItemProps) => reverseGICS(subItem)),
            ];
          }
          return {
            ...item,
          };
        }),
      );
      const realKey = last(v);
      // @ts-ignore
      const realValue = allGICS.find(({ code }) => code === realKey) || {};
      // @ts-ignore
      const { code, en, zh, desc, desc_zh: descZH } = realValue;
      return {
        code,
        en,
        zh,
        desc,
        desc_zh: descZH,
      };
    }
    return [];
  };

  // @ts-ignore
  const reverseGICS = (item: any) => {
    const { children } = item;
    if (children) {
      return [
        {
          ...item,
        },
        ...mapper(children, (subItem: GICSItemProps) => reverseGICS(subItem)),
      ];
    }
    return {
      ...item,
    };
  };

  const handleOnChange = (v: (string | number)[]) => {
    if (onChange) {
      onChange(formatValue(v));
    }
  };

  const opts = formatIndustry();
  const [cascaderValue, setCascaderValue] = useState<string[] | number[]>([]);

  useEffect(() => {
    if (value) {
      const { code } = value;

      const targetValue: number[] = [];
      // @ts-ignore
      forEach(split(code, ''), (v, k) => {
        if (k > 0 && k % 2 === 1) {
          targetValue.push(Number(`${code}`.slice(0, k + 1)));
        }
      });
      // @ts-ignore
      setCascaderValue(code ? targetValue : []);
    }
  }, [value]);

  // @ts-ignore
  return <Cascader {...props} value={cascaderValue} options={opts} onChange={handleOnChange} />;
};

export default IndustryClassificationSelector;

import React, { Component } from 'react';
import { Cascader } from 'antd';
import mapper from 'lodash/map';
import last from 'lodash/last';
import flattenDeep from 'lodash/flattenDeep';
import cloneDeep from 'lodash/cloneDeep';
import forEach from 'lodash/forEach';
import split from 'lodash/split';
import GICSOriginal from './GICS';

const GICS = cloneDeep(GICSOriginal);

class IndustryClassificationSelector extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      opts: this.formatIndustry(),
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { value = {} } = props;

    if (value) {
      const { code } = value;
      const targetValue = [];
      forEach(split(code, ''), (v, k) => {
        if (k > 0 && k % 2 === 1) {
          targetValue.push(Number(`${code}`.slice(0, k + 1)));
        }
      });
      return {
        ...state,
        cascaderValue: code ? targetValue : [],
      };
    }
    return state;
  }

  formatIndustry = () => {
    const { zh: cn } = this.props;
    return mapper(GICS, value => {
      const { code, en, zh, children } = value;
      return {
        ...value,
        value: code,
        label: cn ? zh : en,
        children: children ? mapper(children, item => this.formatChildren(item)) : undefined,
      };
    });
  };

  formatChildren = item => {
    const { zh: cn } = this.props;
    const { code, en, zh, children } = item;
    return {
      ...item,
      value: code,
      label: cn ? zh : en,
      children: children ? mapper(children, subItem => this.formatChildren(subItem)) : undefined,
    };
  };

  formatValue = v => {
    if (v && v.length > 0) {
      const allGICS = flattenDeep(
        mapper(GICS, item => {
          const { children } = item;
          if (children) {
            return [
              {
                ...item,
              },
              ...mapper(children, subItem => this.reverseGICS(subItem)),
            ];
          }
          return {
            ...item,
          };
        }),
      );
      const realKey = last(v);
      const realValue = allGICS.find(({ code }) => code === realKey) || {};
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

  reverseGICS = item => {
    const { children } = item;
    if (children) {
      return [
        {
          ...item,
        },
        ...mapper(children, subItem => this.reverseGICS(subItem)),
      ];
    }
    return {
      ...item,
    };
  };

  handleOnChange = v => {
    const { onChange } = this.props;
    if (onChange) {
      console.log(this.formatValue(v));
      onChange(this.formatValue(v));
    }
  };

  render() {
    const { opts, cascaderValue } = this.state;
    return (
      <Cascader
        {...this.props}
        value={cascaderValue}
        options={opts}
        onChange={this.handleOnChange}
      />
    );
  }
}
export default IndustryClassificationSelector;

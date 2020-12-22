import React, { useState, useEffect } from 'react';
import { Cascader } from 'antd';
import mapper from 'lodash/map';
import last from 'lodash/last';
import flattenDeep from 'lodash/flattenDeep';
import cloneDeep from 'lodash/cloneDeep';
import forEach from 'lodash/forEach';
import split from 'lodash/split';
import 'antd/es/cascader/style/index.css';
import 'antd/es/input/style/index.css';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

/**
 * It is base https://www.msci.com/gics Effective until Sep 28, 2018
 * https://www.msci.com/documents/1296102/11185224/Effective+until+September+28%2C+2018.xls/7fb8b3b7-ce4e-8f73-6f1b-bfee5d1ddc94
 */
var GICSOriginal = [
  {
    code: 10,
    en: 'Energy',
    zh: '能源',
    children: [
      {
        code: 1010,
        en: 'Energy',
        zh: '能源',
        children: [
          {
            code: 101010,
            en: 'Energy Equipment & Services',
            zh: '能源设备与服务',
            children: [
              {
                code: 10101010,
                en: 'Oil & Gas Drilling',
                zh: '石油天然气钻探',
                desc:
                  'Drilling contractors or owners of drilling rigs that contract their services for drilling wells.',
                desc_zh: '钻井承包商或业主的钻井平台钻井服务合同',
              },
              {
                code: 10101020,
                en: 'Oil & Gas Equipment & Services',
                zh: '石油天然气设备及服务',
                desc:
                  'Manufacturers of equipment, including drilling rigs and equipment, and providers of supplies and services to companies involved in the drilling, evaluation and completion of oil and gas wells.',
                desc_zh:
                  '制造商的设备,包括钻井平台和设备,并提供物资和服务的公司参与钻井,评估和完成石油和天然气井。',
              },
            ],
          },
          {
            code: 101020,
            en: 'Oil, Gas & Consumable Fuels',
            zh: '石油、天然气及可消耗的燃料',
            children: [
              {
                code: 10102010,
                en: 'Integrated Oil & Gas',
                zh: '综合石油天然气',
                desc:
                  'Integrated oil companies engaged in the exploration & production of oil and gas, as well as at least one other significant activity in either refining, marketing and transportation, or chemicals.',
                desc_zh:
                  '综合性石油公司从事石油和天然气的勘探和生产,以及至少一个其他重要活动炼油、营销和运输或化学物质。',
              },
              {
                code: 10102020,
                en: 'Oil & Gas Exploration & Production',
                zh: '石油和天然气勘探和生产',
                desc:
                  'Companies engaged in the exploration and production of oil and gas not classified elsewhere.',
                desc_zh: '公司从事石油和天然气的勘探和生产不分类。',
              },
              {
                code: 10102030,
                en: 'Oil & Gas Refining & Marketing',
                zh: '石油&天然气炼油和营销',
                desc:
                  'Companies engaged in the refining and marketing of oil, gas and/or refined products not classified in the Integrated Oil & Gas or Independent Power Producers & Energy Traders Sub-Industries.',
                desc_zh:
                  '公司从事石油炼油及营销、气体和/或成品油不分类的综合石油天然气或独立电力生产商和能源公司附属产业。',
              },
              {
                code: 10102040,
                en: 'Oil & Gas Storage & Transportation',
                zh: '石油和天然气储存和运输',
                desc:
                  'Companies engaged in the storage and/or transportation of oil, gas and/or refined products. Includes diversified midstream natural gas companies facing competitive markets, oil and refined product pipelines, coal slurry pipelines and oil & gas shipping companies.',
                desc_zh:
                  '公司从事的储存和/或运输石油、天然气和/或精炼石油产品。包括多元化中游天然气公司面对竞争市场,石油和成品油管道、煤浆管道和石油天然气运输公司。',
              },
              {
                code: 10102050,
                en: 'Coal & Consumable Fuels',
                zh: '煤炭和可消耗的燃料',
                desc:
                  'Companies primarily involved in the production and mining of coal, related products and other consumable fuels related to the generation of energy.  Excludes companies primarily producing gases classified in the Industrial Gases sub-industry and companies primarily mining for metallurgical (coking) coal used for steel production.',
                desc_zh:
                  '公司主要从事煤炭、相关产品和其他与能源生产相关的消耗燃料的生产和开采。 不包括主要生产工业气体子工业类气体的公司，以及主要开采用于钢铁生产的冶金（炼焦）煤的公司。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: 15,
    en: 'Materials',
    zh: '材料',
    children: [
      {
        code: 1510,
        en: 'Materials',
        zh: '材料',
        children: [
          {
            code: 151010,
            en: 'Chemicals',
            zh: '化学物质',
            children: [
              {
                code: 15101010,
                en: 'Commodity Chemicals',
                zh: '通用化学品',
                desc:
                  'Companies that primarily produce industrial chemicals and basic chemicals. Including but not limited to plastics, synthetic fibers, films, commodity-based paints & pigments, explosives and petrochemicals. Excludes chemical companies classified in the Diversified Chemicals, Fertilizers & Agricultural Chemicals, Industrial Gases, or Specialty Chemicals Sub-Industries.',
                desc_zh:
                  '公司主要生产化工原料和基本的化学物质。包括但不限于塑料、合成纤维、电影、商品油漆和颜料、炸药和石化产品。不包括化学公司机密的多元化化工、化肥和农药、工业气体,或拥有专用化学品。',
              },
              {
                code: 15101020,
                en: 'Diversified Chemicals',
                zh: '多元化的化学物质',
                desc:
                  'Manufacturers of a diversified range of chemical products not classified in the Industrial Gases, Commodity Chemicals, Specialty Chemicals or Fertilizers & Agricultural Chemicals Sub-Industries.',
                desc_zh:
                  '多元化的化学产品制造商不分类的工业气体,商品化学品,专用化学品或拥有化肥和农药。',
              },
              {
                code: 15101030,
                en: 'Fertilizers & Agricultural Chemicals',
                zh: '化肥和农药',
                desc:
                  'Producers of fertilizers, pesticides, potash or other agriculture-related chemicals not classified elsewhere.',
                desc_zh: '化肥、农药、钾肥或其他未列入其他地方的农业相关化学品的生产者。',
              },
              {
                code: 15101040,
                en: 'Industrial Gases',
                zh: '工业气体',
                desc: 'Manufacturers of industrial gases.',
                desc_zh: '工业气体的制造商。',
              },
              {
                code: 15101050,
                en: 'Specialty Chemicals',
                zh: '特种化学品',
                desc:
                  'Companies that primarily produce high value-added chemicals used in the manufacture of a wide variety of products, including but not limited to fine chemicals, additives, advanced polymers, adhesives, sealants and specialty paints, pigments and coatings.',
                desc_zh:
                  '公司主要生产高附加值化学品用于制造各种各样的产品,包括但不限于精细化学品,添加剂,先进的聚合物,粘合剂、密封剂和特种油漆、颜料和涂料。',
              },
            ],
          },
          {
            code: 151020,
            en: 'Construction Materials',
            zh: '建筑材料',
            children: [
              {
                code: 15102010,
                en: 'Construction Materials',
                zh: '建筑材料',
                desc:
                  'Manufacturers of construction materials including sand, clay, gypsum, lime, aggregates, cement, concrete and bricks. Other finished or semi-finished building materials are classified  in the Building Products Sub-Industry.',
                desc_zh:
                  '建筑材料的制造商，包括砂、粘土、石膏、石灰、骨料、水泥、混凝土和砖块。其他成品或半成品建筑材料属于建筑产品子行业。',
              },
            ],
          },
          {
            code: 151030,
            en: 'Containers & Packaging',
            zh: '容器和包装',
            children: [
              {
                code: 15103010,
                en: 'Metal & Glass Containers',
                zh: '金属和玻璃容器',
                desc:
                  'Manufacturers of metal, glass or plastic containers. Includes corks and caps.',
                desc_zh: '制造商的金属、玻璃或塑料容器。包括软木塞和帽子。',
              },
              {
                code: 15103020,
                en: 'Paper Packaging',
                zh: '纸质包装',
                desc: 'Manufacturers of paper and cardboard containers and packaging.',
                desc_zh: '制造商的纸张和纸板容器和包装。',
              },
            ],
          },
          {
            code: 151040,
            en: 'Metals & Mining',
            zh: '金属和矿业',
            children: [
              {
                code: 15104010,
                en: 'Aluminum',
                zh: '铝',
                desc:
                  'Producers of aluminum and related products, including companies that mine or process bauxite and companies that recycle aluminum to produce finished or semi-finished products. Excludes companies that primarily produce aluminum building materials classified in the Building Products Sub-Industry.',
                desc_zh:
                  '铝及相关产品的生产商，包括开采或加工铝土矿的公司和回收铝生产成品或半成品的公司。不包括主要生产建筑产品子行业分类的铝建筑材料的公司。',
              },
              {
                code: 15104020,
                en: 'Diversified Metals & Mining',
                cn: '多样化的金属和矿业',
                desc:
                  'Companies engaged in the diversified production or extraction of metals and minerals not classified elsewhere. Including, but not limited to, nonferrous metal mining (except bauxite), salt and borate mining, phosphate rock mining, and diversified mining operations. Excludes iron ore mining, classified in the Steel Sub-Industry, bauxite mining, classified in the Aluminum Sub-Industry, and coal mining, classified in either the Steel or Coal & Consumable Fuels Sub-Industries.',
                desc_zh:
                  '从事非其他地方分类的金属和矿物的多样化生产或开采的公司。包括但不限于有色金属开采（铝土矿除外）、盐和硼酸盐开采、磷矿开采和多元化采矿。不包括属于钢铁子工业的铁矿石开采、属于铝子行业的铝土矿开采和煤炭开采，它们属于钢铁或煤炭和消耗燃料子行业。',
              },
              {
                code: 15104025,
                en: 'Copper',
                zh: '铜',
                desc: 'Companies involved primarily in copper ore mining.',
                desc_zh: '公司主要在铜矿石开采。',
              },
              {
                code: 15104030,
                en: 'Gold',
                zh: '黄金',
                desc:
                  'Producers of gold and related products, including companies that mine or process gold and the South African finance houses which primarily invest in, but do not operate, gold mines.',
                desc_zh:
                  '黄金生产商和相关产品,包括我公司或流程黄金和南非主要金融机构的投资,但不要操作,金矿。',
              },
              {
                code: 15104040,
                en: 'Precious Metals & Minerals',
                zh: '贵重金属和矿物质',
                desc:
                  'Companies mining precious metals and minerals not classified in the Gold Sub-Industry. Includes companies primarily mining platinum.',
                desc_zh: '开采贵金属和矿物的公司不属于黄金子行业。包括主要开采铂金的公司。',
              },
              {
                code: 15104045,
                en: 'Silver',
                cn: '银',
                desc:
                  'Companies primarily mining silver. Excludes companies classified in the Gold or Precious Metals & Minerals Sub-Industries.',
                desc_zh: '公司主要开采白银。不包括被归类为黄金或贵金属和矿物子行业的公司。',
              },
              {
                code: 15104050,
                en: 'Steel',
                zh: '钢',
                desc:
                  'Producers of iron and steel and related products, including metallurgical (coking) coal mining used for steel production.',
                desc_zh: '钢铁及相关产品的生产商，包括用于钢铁生产的冶金（炼焦）煤矿。',
              },
            ],
          },
          {
            code: 151050,
            en: 'Paper & Forest Products',
            zh: '纸张和森林产品',
            children: [
              {
                code: 15105010,
                en: 'Forest Products',
                zh: '森林产品',
                desc:
                  'Manufacturers of timber and related wood products. Includes lumber for the building industry.',
                desc_zh: '木材及相关木制品的制造商。包括用于建筑行业的木材。',
              },
              {
                code: 15105020,
                en: 'Paper Products',
                zh: '纸产品',
                desc:
                  'Manufacturers of all grades of paper. Excludes companies specializing in paper packaging classified in the Paper Packaging Sub-Industry.',
                desc_zh: '各种牌号的纸张制造商。不包括专门从事纸包装的公司，分类在纸包装子行业。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: 20,
    en: 'Industrials',
    zh: '工业',
    children: [
      {
        code: 2010,
        en: 'Capital Goods',
        zh: '资本货物',
        children: [
          {
            code: 201010,
            en: 'Aerospace & Defense',
            zh: '航空航天和国防',
            children: [
              {
                code: 20101010,
                en: 'Aerospace & Defense',
                zh: '航空航天和国防',
                desc:
                  'Manufacturers of civil or military aerospace and defense equipment, parts or products. Includes defense electronics and space equipment.',
                desc_zh:
                  '民用或军用航空航天和国防设备、零件或产品的制造商。包括国防电子设备和空间设备。',
              },
            ],
          },
          {
            code: 201020,
            en: 'Building Products',
            zh: '建筑产品',
            children: [
              {
                code: 20102010,
                en: 'Building Products',
                zh: '建筑产品',
                desc:
                  'Manufacturers of building components and home improvement products and equipment. Excludes lumber and plywood classified under Forest Products and cement and other materials classified in the Construction Materials Sub-Industry.',
                desc_zh:
                  '建筑组件和家居装修产品及设备的制造商。不包括列入森林产品下的木材和胶合板以及建筑材料分工业中分类的水泥和其他材料。',
              },
            ],
          },
          {
            code: 201030,
            en: 'Construction & Engineering',
            zh: '建筑与工程',
            children: [
              {
                code: 20103010,
                en: 'Construction & Engineering',
                zh: '建筑与工程',
                desc:
                  'Companies engaged in primarily non-residential construction. Includes civil engineering companies and large-scale contractors. Excludes companies classified in the Homebuilding Sub-Industry.',
                desc_zh:
                  '公司主要从事非住宅建设。包括土木工程公司和大型承包商。不包括属于住宅建筑子行业的公司。',
              },
            ],
          },
          {
            code: 201040,
            en: 'Electrical Equipment',
            zh: '电气设备',
            children: [
              {
                code: 20104010,
                en: 'Electrical Components & Equipment',
                zh: '电子元件和设备',
                desc:
                  'Companies that produce electric cables and wires, electrical components or equipment not classified in the Heavy Electrical Equipment Sub-Industry.',
                desc_zh: '公司生产电缆和电线,电器元件或设备不分类Sub-Industry沉重的电气设备。',
              },
              {
                code: 20104020,
                en: '重型电气设备',
                zh: '电子元件和设备',
                desc:
                  'Manufacturers of power-generating equipment and other heavy electrical equipment, including power turbines, heavy electrical machinery intended for fixed-use and large electrical systems. Excludes cables and wires, classified in the Electrical Components & Equipment Sub-Industry.',
                desc_zh:
                  '发电设备制造商和其他重型电气设备,包括发电机、重型电机用于定期使用和大电力系统。不包括电缆和电线,Sub-Industry分类的电器元件及设备。',
              },
            ],
          },
          {
            code: 201050,
            en: 'Industrial Conglomerates',
            zh: '工业集团',
            children: [
              {
                code: 20105010,
                en: 'Industrial Conglomerates',
                zh: '工业集团',
                desc:
                  'Diversified industrial companies with business activities in three or more sectors, none of which contributes a majority of revenues. Stakes held are predominantly of a controlling nature and stake holders maintain an operational interest in the running of the subsidiaries.',
                desc_zh:
                  '在三个或三个以上部门开展业务的多元化工业公司，其中没有一个贡献大部分收入。持有的股份主要具有控股性质，股东在子公司的运营中保持运营利益。',
              },
            ],
          },
          {
            code: 201060,
            en: 'Machinery',
            zh: '机械',
            children: [
              {
                code: 20106010,
                en: 'Construction Machinery & Heavy Trucks',
                zh: '工程机械与重型卡车',
                desc:
                  'Manufacturers of heavy duty trucks, rolling machinery, earth-moving and construction equipment, and manufacturers of related parts. Includes non-military shipbuilding.',
                desc_zh:
                  '生产重型卡车、轧制机械、土方和建筑设备，以及相关零件制造商。包括非军事造船。',
              },
              {
                code: 20106015,
                en: 'Agricultural & Farm Machinery',
                zh: '农业与农业机械',
                desc:
                  'Companies manufacturing agricultural machinery, farm machinery, and their related parts. Includes machinery used for the production of crops and agricultural livestock, agricultural tractors, planting and fertilizing machinery, fertilizer and chemical application equipment, and grain dryers and blowers.',
                desc_zh:
                  '公司生产农业机械、农机及其相关零部件。包括用于生产作物和农畜的机械、农用拖拉机、种植和施肥机械、肥料和化学应用设备以及谷物烘干机和鼓风机。',
              },
              {
                code: 20106020,
                en: 'Industrial Machinery',
                zh: '工业机械',
                desc:
                  'Manufacturers of industrial machinery and industrial components. Includes companies that manufacture presses, machine tools, compressors, pollution control equipment, elevators, escalators, insulators, pumps, roller bearings and other metal fabrications.',
                desc_zh:
                  '工业机械和工业零部件制造商。包括制造压力机、机床、压缩机、污染控制设备、电梯、自动扶梯、绝缘体、泵、滚子轴承和其他金属制造的公司。',
              },
            ],
          },
          {
            code: 201070,
            en: 'Trading Companies & Distributors',
            zh: '贸易公司及分销商',
            children: [
              {
                code: 201070,
                en: 'Trading Companies & Distributors',
                zh: '贸易公司及分销商',
                desc:
                  'Trading companies and other distributors of industrial equipment and products.',
                desc_zh: '工业设备和产品的贸易公司和其他分销商。',
              },
            ],
          },
        ],
      },
      {
        code: 2020,
        en: 'Commercial  & Professional Services',
        zh: '商业和专业服务',
        children: [
          {
            code: 202010,
            en: 'Commercial Services & Supplies',
            zh: '商业服务与用品',
            children: [
              {
                code: 20201010,
                en: 'Commercial Printing',
                zh: '专业印刷',
                desc:
                  'Companies providing commercial printing services. Includes printers primarily serving the media industry.',
                desc_zh: '公司提供专业印刷服务。包括主要服务于媒体行业的打印机。',
              },
              {
                code: 20201050,
                en: 'Environmental & Facilities Services',
                zh: '环境与设施服务',
                desc:
                  'Companies providing environmental and facilities maintenance services. Includes waste management, facilities management and pollution control services.  Excludes large-scale water treatment systems classified in the Water Utilities Sub-Industry.',
                desc_zh:
                  '公司提供环境和设施维护服务。包括废物管理、设施管理和污染控制服务。 不包括在水务分行业分类的大型水处理系统。',
              },
              {
                code: 20201060,
                en: 'Office Services & Supplies',
                zh: '办公服务与用品',
                desc:
                  'Providers of office services and manufacturers of office supplies and equipment not classified elsewhere.',
                desc_zh: '办公服务提供者和办公用品和设备制造商在其他地方未分类。',
              },
              {
                code: 20201070,
                en: 'Diversified Support Services',
                zh: '多元化支持服务',
                desc:
                  'Companies primarily providing labor oriented support services to businesses and governments.  Includes commercial cleaning services, dining & catering services, equipment repair services, industrial maintenance services, industrial auctioneers, storage & warehousing, transaction services, uniform rental services, and other business support services.',
                desc_zh:
                  '公司主要为企业和政府提供面向劳动力的支持服务。 包括商业清洁服务、餐饮服务、设备维修服务、工业维护服务、工业拍卖商、仓储和仓储、交易服务、统一租赁服务和其他业务支持服务。',
              },
              {
                code: 20201080,
                en: 'Security & Alarm Services',
                zh: '安全和报警服务',
                desc:
                  'Companies providing security and protection services to business and governments. Includes companies providing services such as correctional facilities, security & alarm services, armored transportation & guarding.  Excludes companies providing security software classified under the Systems Software Sub-Industry and home security services classified under the Specialized Consumer Services Sub-Industry. Also excludes companies manufacturing security system equipment classified under the Electronic Equipment & Instruments Sub-Industry.',
                desc_zh:
                  '为企业和政府提供安全和保护服务的公司。包括提供惩教设施、安保和报警服务、装甲运输与警卫等服务的公司。 不包括提供系统软件子行业分类的安全软件和家庭安全服务，这些软件属于专业消费者服务子行业。也不包括制造电子设备和仪器子行业分类的安保系统设备的公司。',
              },
            ],
          },
          {
            code: 202020,
            en: 'Commercial  & Professional Services',
            zh: '商业和专业服务',
            children: [
              {
                code: '20202010',
                en: 'Human Resource & Employment Services',
                zh: '人力资源与就业服务',
                desc:
                  'Companies providing business support services relating to human capital management. Includes employment agencies, employee training, payroll & benefit support services, retirement support services and temporary agencies.',
                desc_zh:
                  '提供与人力资本管理相关的业务支持服务的公司。包括职业介绍机构、员工培训、薪资和福利支助服务、退休支助服务和临时机构。',
              },
              {
                code: '20202020',
                en: 'Research & Consulting Services',
                zh: '研究与咨询服务',
                desc:
                  'Companies primarily providing research and consulting services to businesses and governments not classified elsewhere.  Includes companies involved in management consulting services, architectural design, business information or scientific research, marketing, and testing & certification services. Excludes companies providing information technology consulting services classified in the IT Consulting & Other Services Sub-Industry.',
                desc_zh:
                  '公司主要为没有分类的企业提供研究和咨询服务。 包括参与管理咨询服务、建筑设计、商业信息或科学研究、市场营销和测试与认证服务的公司。不包括提供信息技术咨询服务的公司，这些服务属于IT咨询和其他服务子行业。',
              },
            ],
          },
        ],
      },
      {
        code: 2030,
        en: 'Transportation',
        zh: '运输',
        children: [
          {
            code: 203010,
            en: 'Air Freight & Logistics',
            cn: '空运与物流',
            children: [
              {
                code: 203010,
                en: 'Air Freight & Logistics',
                zh: '空运与物流',
                desc:
                  'Companies providing air freight transportation, courier and logistics services, including package and mail delivery and customs agents. Excludes those companies classified in the Airlines, Marine or Trucking Sub-Industries.',
                desc_zh:
                  '公司提供空运、快递和物流服务，包括包裹和邮件递送以及海关代理。不包括属于航空公司、海运或卡车运输子行业的公司。',
              },
            ],
          },
          {
            code: 203020,
            en: 'Airlines',
            zh: '航空公司',
            children: [
              {
                code: 203020,
                en: 'Airlines',
                zh: '航空公司',
                desc: 'Companies providing primarily passenger air transportation.',
                desc_zh: '公司主要提供客运航空运输。',
              },
            ],
          },
          {
            code: 203030,
            en: 'Marine',
            zh: '海洋',
            children: [
              {
                code: 203030,
                en: 'Marine',
                zh: '海洋',
                desc:
                  'Companies providing goods or passenger maritime transportation. Excludes cruise-ships classified in the Hotels, Resorts & Cruise Lines Sub-Industry.',
                desc_zh: '提供货物或客运海运的公司。不包括分类在酒店，度假村和邮轮线子行业邮轮。',
              },
            ],
          },
          {
            code: 203040,
            en: 'Road & Rail',
            zh: '公路与铁路',
            children: [
              {
                code: 20304010,
                en: 'Railroads',
                zh: '铁路',
                desc: 'Companies providing primarily goods and passenger rail  transportation.',
                desc_zh: '公司主要提供货物和客运铁路运输。',
              },
              {
                code: 20304020,
                en: 'Trucking',
                zh: '货运',
                desc:
                  'Companies providing primarily goods and passenger land transportation. Includes vehicle rental and taxi companies.',
                desc_zh: '公司主要提供货物和客运陆路运输。包括汽车租赁和出租车公司。',
              },
            ],
          },
          {
            code: 203050,
            en: 'Transportation Infrastructure',
            zh: '交通基础设施',
            children: [
              {
                code: 20305010,
                en: 'Airport Services',
                zh: '机场服务',
                desc: 'Operators of airports and companies providing related services.',
                desc_zh: '提供相关服务的机场和公司的运营商。',
              },
              {
                code: 20305020,
                en: 'Highways & Railtracks',
                zh: '高速公路和铁路',
                desc: 'Owners and operators of roads, tunnels and railtracks.',
                desc_zh: '道路、隧道和铁路的所有者和运营商。',
              },
              {
                code: 20305030,
                en: 'Marine Ports & Services',
                zh: '海运港口与服务',
                desc: 'Owners and operators of marine ports and related services.',
                desc_zh: '海洋港口及相关服务的所有者和经营者。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: 25,
    en: 'Consumer Discretionary',
    zh: '消费者自由裁量权',
    children: [
      {
        code: 2510,
        en: 'Automobiles & Components',
        zh: '汽车及零部件',
        children: [
          {
            code: 251010,
            en: 'Auto Components',
            zh: '零部件',
            children: [
              {
                code: 25101010,
                en: 'Auto Parts & Equipment',
                zh: '汽车零部件与设备',
                desc:
                  'Manufacturers of parts and accessories for  automobiles and motorcycles. Excludes companies classified in the Tires & Rubber Sub-Industry.',
                desc_zh: '汽车和摩托车零部件制造商。不包括在轮胎和橡胶子行业分类的公司。',
              },
              {
                code: 25101020,
                en: 'Tires & Rubber',
                zh: '轮胎和橡胶',
                desc: 'Manufacturers of tires and rubber.',
                desc_zh: '轮胎和橡胶制造商。',
              },
            ],
          },
          {
            code: 251020,
            zh: '车',
            children: [
              {
                code: 25102010,
                en: 'Automobile Manufacturers',
                zh: '汽车制造商',
                desc:
                  'Companies that produce mainly passenger automobiles and light trucks. Excludes companies producing mainly motorcycles and three-wheelers classified in the Motorcycle Manufacturers Sub-Industry and heavy duty trucks classified in the Construction Machinery & Heavy Trucks Sub-Industry.',
                desc_zh:
                  '主要生产乘用车和轻型卡车的公司。不包括主要生产摩托车和三轮车的公司，包括摩托车制造商子行业，以及重型卡车，属于工程机械和重型卡车子行业。',
              },
              {
                code: 25102020,
                en: 'Motorcycle Manufacturers',
                zh: '摩托车制造商',
                desc:
                  'Companies that produce motorcycles, scooters or three-wheelers. Excludes bicycles classified in the Leisure Products Sub-Industry.',
                desc_zh: '生产摩托车、摩托车或三轮车的公司。不包括属于休闲产品子行业的自行车。',
              },
            ],
          },
        ],
      },
      {
        code: 2520,
        zh: '耐用消费品和服装',
        children: [
          {
            code: 252010,
            en: 'Household Durables',
            zh: '家用耐用品',
            children: [
              {
                code: 25201010,
                en: 'Consumer Electronics',
                zh: '消费电子',
                desc:
                  'Manufacturers of consumer electronics products including TVs, home audio equipment, game consoles, digital cameras, and related products. Excludes personal home computer manufacturers classified in the Technology Hardware, Storage & Peripherals Sub-Industry, and electric household appliances classified in the Household Appliances Sub-Industry.',
                desc_zh:
                  '消费类电子产品的制造商，包括电视、家庭音响设备、游戏机、数码相机及相关产品。不包括在技术硬件、存储和外围设备子行业分类的个人家用计算机制造商，以及分类为家用电器子行业的家用电器制造商。',
              },
              {
                code: 25201020,
                en: 'Home Furnishings',
                zh: '家居装饰',
                desc:
                  'Manufacturers of soft home furnishings or furniture, including upholstery, carpets and wall-coverings.',
                desc_zh: '软家具或家具的制造商，包括室内装饰、地毯和墙面。',
              },
              {
                code: 25201030,
                en: 'Homebuilding',
                zh: '住宅建设',
                desc:
                  'Residential construction companies. Includes manufacturers of prefabricated houses and semi-fixed manufactured homes.',
                desc_zh: '住宅建筑公司。包括预制房屋和半固定房屋的制造商。',
              },
              {
                code: 25201040,
                en: 'Household Appliances',
                zh: '家用电器',
                desc:
                  'Manufacturers of electric household appliances and related products.  Includes manufacturers of power and hand tools, including garden improvement tools.  Excludes TVs and other audio and video products classified in the Consumer Electronics Sub-Industry and personal computers classified in the Technology Hardware, Storage & Peripherals Sub-Industry.',
                desc_zh:
                  '生产电器及相关产品。 包括电动和手动工具制造商，包括花园改进工具。 不包括电视和其他音像制品，这些产品属于消费电子子行业，个人电脑属于技术硬件、存储和外围设备子行业。',
              },
              {
                code: 25201050,
                en: 'Housewares & Specialties',
                zh: '家居用品及特色',
                desc:
                  'Manufacturers of durable household products, including cutlery, cookware, glassware, crystal, silverware, utensils, kitchenware and consumer specialties not classified elsewhere.',
                desc_zh:
                  '耐用家居用品的制造商，包括餐具、炊具、玻璃器皿、水晶、银器、餐具、厨具和未分类的消费品。',
              },
            ],
          },
          {
            code: 252020,
            en: 'Leisure Products',
            zh: '休闲产品',
            children: [
              {
                code: 25202010,
                en: 'Leisure Products',
                zh: '休闲产品',
                desc:
                  'Manufacturers of leisure products and equipment including sports equipment, bicycles and toys.',
                desc_zh: '休闲产品及器材的制造商，包括运动器材、自行车及玩具。',
              },
            ],
          },
          {
            code: 252030,
            en: 'Textiles, Apparel & Luxury Goods',
            zh: '纺织品、服装和奢侈品',
            children: [
              {
                code: 25203010,
                en: 'Apparel, Accessories & Luxury Goods',
                zh: '服装、配饰和奢侈品',
                desc:
                  'Manufacturers of apparel, accessories & luxury goods. Includes companies primarily producing designer handbags, wallets, luggage, jewelry and watches. Excludes shoes classified in the Footwear Sub-Industry.',
                desc_zh:
                  '服装、配件及奢侈品制造商。包括主要生产名牌手袋、钱包、行李箱、珠宝和手表的公司。不包括鞋类子行业分类的鞋子。',
              },
              {
                code: 25203020,
                en: 'Footwear',
                zh: '鞋',
                desc: 'Manufacturers of footwear. Includes sport and leather shoes.',
                desc_zh: '鞋类制造商。包括运动鞋和皮鞋。',
              },
              {
                code: 25203030,
                en: 'Textiles',
                zh: '纺织品',
                desc:
                  'Manufacturers of textile and related products not classified in the Apparel, Accessories & Luxury Goods, Footwear or Home Furnishings Sub-Industries.',
                desc_zh:
                  '纺织品及相关产品的制造商，未分类于服装、配件及奢侈品、鞋类或家居家具子行业。',
              },
            ],
          },
        ],
      },
      {
        code: 2530,
        en: 'Consumer Services',
        zh: '消费者服务',
        children: [
          {
            code: 253010,
            en: 'Hotels, Restaurants & Leisure',
            zh: '酒店、餐厅和休闲',
            children: [
              {
                code: 25301010,
                en: 'Casinos & Gaming',
                zh: '赌场与博彩',
                desc:
                  'Owners and operators of casinos and gaming facilities. Includes companies providing lottery and betting services.',
                desc_zh: '赌场和博彩设施的所有者和运营商。包括提供彩票和博彩服务的公司。',
              },
              {
                code: 25301020,
                en: 'Hotels, Resorts & Cruise Lines',
                zh: '酒店、度假村和邮轮公司',
                desc:
                  'Owners and operators of hotels, resorts and cruise-ships. Includes travel agencies, tour operators and related services not classified elsewhere . Excludes casino-hotels classified in the Casinos & Gaming Sub-Industry.',
                desc_zh:
                  '酒店、度假村和游轮的所有者和运营商。包括旅行社、旅行社及未分类的旅行社、旅行社及有关服务。不包括赌场和博彩子行业分类的赌场酒店。',
              },
              {
                code: 25301030,
                en: 'Leisure Facilities',
                zh: '休闲设施',
                desc:
                  'Owners and operators of leisure facilities, including sport and fitness centers, stadiums, golf courses and amusement parks not classified in the Movies & Entertainment Sub-Industry.',
                desc_zh:
                  '休闲设施的所有者和运营商，包括体育和健身中心、体育场、高尔夫球场和未归入电影和娱乐分行业的游乐园。',
              },
              {
                code: 25301040,
                en: 'Restaurants',
                zh: '餐馆',
                desc:
                  'Owners and operators of restaurants, bars, pubs, fast-food or take-out facilities. Includes companies that provide food catering services.',
                desc_zh:
                  '餐馆、酒吧、酒吧、快餐店或外带设施的业主和经营者。包括提供餐饮服务的公司。',
              },
            ],
          },
          {
            code: 253020,
            en: 'Diversified Consumer Services',
            zh: '多元化消费服务',
            children: [
              {
                code: 25302010,
                en: 'Education Services',
                zh: '教育服务',
                desc:
                  'Companies providing educational services, either on-line or through conventional teaching methods. Includes, private universities, correspondence teaching, providers of educational seminars, educational materials and technical education. Excludes companies providing employee education programs classified in the Human Resources & Employment Services Sub-Industry',
                desc_zh:
                  '提供在线或传统教学方法的教育服务的公司。包括私立大学、函授教学、教育研讨会提供者、教材和技术教育。不包括提供人力资源和就业服务子行业分类的员工培训计划的公司',
              },
              {
                code: 25302020,
                en: 'Specialized Consumer Services',
                zh: '专业消费者服务',
                desc:
                  'Companies providing consumer services not classified elsewhere.  Includes residential services, home security, legal services, personal services, renovation & interior design services, consumer auctions and wedding & funeral services.',
                desc_zh:
                  '提供消费者服务的公司在其他地方没有分类。 包括住宅服务、家庭保安、法律服务、个人服务、装修和室内设计服务、消费者拍卖和婚礼及葬礼服务。',
              },
            ],
          },
        ],
      },
      {
        code: 2540,
        en: 'Media',
        zh: '媒体',
        children: [
          {
            code: 254010,
            en: 'Media',
            zh: '媒体',
            children: [
              {
                code: 25401010,
                en: 'Advertising',
                zh: '广告',
                desc: 'Companies providing advertising, marketing or public relations services.',
                desc_zh: '提供广告、营销或公共关系服务的公司。',
              },
              {
                code: 25401020,
                en: 'Broadcasting',
                zh: '广播',
                desc:
                  'Owners and operators of television or radio broadcasting systems, including programming. Includes, radio and television broadcasting, radio networks, and radio stations.',
                desc_zh:
                  '电视或无线电广播系统（包括节目）的所有者和运营商。包括，广播和电视广播，无线电网络和广播电台。',
              },
              {
                code: 25401025,
                zh: '有线电视和卫星电视',
                desc:
                  'Providers of cable or satellite television services. Includes cable networks and program distribution.',
                desc_zh: '有线电视或卫星电视服务提供商。包括有线网络和节目分发。',
              },
              {
                code: 25401030,
                en: 'Movies & Entertainment',
                zh: '电影和娱乐',
                desc:
                  'Companies that engage in producing and selling entertainment products and services, including companies engaged in the production, distribution and screening of movies and television shows, producers and distributors of music, entertainment theaters and sports teams.',
                desc_zh:
                  '从事制作和销售娱乐产品和服务的公司，包括从事电影和电视节目的制作、发行和放映的公司、音乐、娱乐剧院和发行商。运动队。',
              },
              {
                code: 25401040,
                en: 'Publishing',
                zh: '出版',
                desc:
                  'Publishers of newspapers, magazines and books, and providers of information in print or electronic formats.',
                desc_zh: '报纸、杂志和书籍的出版商，以及印刷或电子格式的信息提供者。',
              },
            ],
          },
        ],
      },
      {
        code: 2550,
        en: 'Retailing',
        zh: '零售',
        children: [
          {
            code: 255010,
            en: 'Distributors',
            zh: '经销商',
            children: [
              {
                code: 25501010,
                en: 'Distributors',
                zh: '经销商',
                desc:
                  'Distributors and wholesalers of general merchandise not classified elsewhere. Includes vehicle distributors.',
                desc_zh: '一般商品的分销商和批发商在其他地方没有分类。包括车辆分销商。',
              },
            ],
          },
          {
            code: 255020,
            en: 'Internet & Direct Marketing Retail',
            zh: '互联网和直销零售',
            children: [
              {
                code: 255020,
                en: 'Internet & Direct Marketing Retail',
                zh: '互联网和直销零售',
                desc:
                  'Companies  providing  retail  services  primarily  on  the Internet, through mail order, and TV home shopping retailers.',
                desc_zh: '主要通过互联网、邮购和电视家庭购物零售商提供零售服务的公司。',
              },
            ],
          },
          {
            code: 255030,
            en: 'Multiline Retail',
            zh: '多线零售',
            children: [
              {
                code: 25503010,
                en: 'Department Stores',
                zh: '百货公司',
                desc: 'Owners and operators of department stores.',
                desc_zh: '百货公司的所有者和经营者。',
              },
              {
                code: 25503020,
                en: 'General Merchandise Stores',
                zh: '一般商品商店',
                desc:
                  'Owners and operators of stores offering diversified general merchandise. Excludes hypermarkets and large-scale super centers classified in the Hypermarkets & Super Centers Sub-Industry.',
                desc_zh:
                  '提供多元化一般商品的商店的业主和经营者。不包括大卖场和大型超级中心，这些中心分为大卖场和超级中心子行业。',
              },
            ],
          },
          {
            code: 255040,
            en: 'Specialty Retail',
            zh: '专业零售',
            children: [
              {
                code: 25504010,
                en: 'Apparel Retail',
                zh: '服装零售',
                desc: 'Retailers specialized mainly in apparel and accessories.',
                desc_zh: '零售商主要经营服装和配饰。',
              },
              {
                code: 25504020,
                en: 'Computer & Electronics Retail',
                zh: '计算机与电子零售',
                desc:
                  'Owners and operators of consumer electronics, computers, video and related products retail stores.',
                desc_zh: '消费电子、计算机、视频及相关产品零售商店的所有者和经营者。',
              },
              {
                code: 25504030,
                en: 'Home Improvement Retail',
                zh: '家居装修零售',
                desc:
                  'Owners and operators of home and garden improvement retail stores. Includes stores offering building materials and supplies.',
                desc_zh: '家居及花园装修零售商店的业主及经营者。包括提供建筑材料和用品的商店。',
              },
              {
                code: 25504040,
                en: 'Specialty Stores',
                zh: '专卖店',
                desc:
                  'Owners and operators of specialty retail stores not classified elsewhere. Includes jewelry stores, toy stores, office supply stores, health & vision care stores, and book & entertainment stores.',
                desc_zh:
                  '专卖店的所有者和经营者在其他地方没有分类。包括珠宝店、玩具店、办公用品店、健康与视觉护理店以及图书和娱乐商店。',
              },
              {
                code: 25504050,
                en: 'Automotive Retail',
                zh: '汽车零售',
                desc:
                  'Owners and operators of stores specializing in automotive retail.  Includes auto dealers, gas stations, and retailers of auto accessories, motorcycles & parts, automotive glass, and automotive equipment & parts.',
                desc_zh:
                  '专业从事汽车零售的商店的所有者和经营者。 包括汽车经销商、加油站和零售商的汽车配件、摩托车和零件、汽车玻璃和汽车设备及零件。',
              },
              {
                code: 25504060,
                en: 'Homefurnishing Retail',
                zh: '家居零售',
                desc:
                  'Owners and operators of furniture and home furnishings retail stores.  Includes residential furniture, homefurnishings, housewares, and interior design.  Excludes home and garden improvement stores, classified in the Home Improvement Retail Sub-Industry.',
                desc_zh:
                  '家具和家居用品零售商店的所有者和经营者。 包括住宅家具、家居用品、家居用品和室内设计。 不包括家居和花园装修商店，分类在家居装修零售子行业。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: 30,
    en: 'Consumer Staples',
    zh: '消费类食品',
    children: [
      {
        code: 3010,
        en: 'Food & Staples Retailing',
        zh: '食品与主食零售',
        children: [
          {
            code: 301010,
            en: 'Food & Staples Retailing',
            zh: '食品与主食零售',
            children: [
              {
                code: 30101010,
                en: 'Drug Retail',
                zh: '药品零售',
                desc: 'Owners and operators of primarily drug retail stores and pharmacies.',
                desc_zh: '主要拥有药品零售商店和药店。',
              },
              {
                code: 30101020,
                en: 'Food Distributors',
                zh: '食品分销商',
                desc:
                  'Distributors of food products to other companies and not directly to the consumer.',
                desc_zh: '食品分销商给其他公司，而不是直接给消费者。',
              },
              {
                code: 30101030,
                en: 'Food Retail',
                zh: '食品零售',
                desc: 'Owners and operators of primarily food retail stores.',
                desc_zh: '主要经营食品零售商店。',
              },
              {
                code: 30101040,
                en: 'Hypermarkets & Super Centers',
                zh: '大卖场和超级中心',
                desc:
                  'Owners and operators of hypermarkets and super centers selling food and a wide-range of consumer staple products.  Excludes Food and Drug Retailers classified in the Food Retail and Drug Retail Sub-Industries, respectively.',
                desc_zh:
                  '大卖场和超级中心的所有者和经营者，销售食品和各种消费主食产品。 不包括分别属于食品零售和药品零售分行业的食品和药品零售商。',
              },
            ],
          },
        ],
      },
      {
        code: 3020,
        en: 'Food, Beverage & Tobacco',
        zh: '食品、饮料和烟草',
        children: [
          {
            code: 302010,
            en: 'Beverages',
            zh: '饮料',
            children: [
              {
                code: 30201010,
                en: 'Brewers',
                zh: '酿酒',
                desc:
                  'Producers of beer and malt liquors. Includes breweries not classified in the Restaurants Sub-Industry.',
                desc_zh: '啤酒和麦芽酒的生产商。包括未列入餐厅子行业的啤酒厂。',
              },
              {
                code: 30201020,
                en: 'Distillers & Vintners',
                zh: '蒸馏器和酿酒商',
                desc:
                  'Distillers, vintners and producers of alcoholic beverages not classified in the Brewers Sub-Industry.',
                desc_zh: '酿酒商、酿酒商和酒精饮料生产商未列入酿酒厂子行业。',
              },
              {
                code: 30201030,
                en: 'Soft Drinks',
                zh: '软饮料',
                desc:
                  'Producers of non-alcoholic beverages including mineral waters. Excludes producers of milk classified in the Packaged Foods Sub-Industry.',
                desc_zh: '生产非酒精饮料，包括矿泉水。不包括包装食品子行业分类的牛奶生产商。',
              },
            ],
          },
          {
            code: 302020,
            en: 'Food Products',
            zh: '食品',
            children: [
              {
                code: 30202010,
                en: 'Agricultural Products',
                zh: '农产品',
                desc:
                  'Producers of agricultural products. Includes crop growers, owners of plantations and companies that produce and process foods but do not package and market them. Excludes companies classified in the Forest Products Sub-Industry and those that package and market the food products classified in the Packaged Foods Sub-Industry.',
                desc_zh:
                  '农产品生产者。包括作物种植者、种植园所有者以及生产和加工食品但不包装和销售的公司。不包括被分类为森林产品子行业的公司，以及包装和销售分类为包装食品子行业的食品的公司。',
              },
              {
                code: 30202030,
                en: 'Packaged Foods & Meats',
                zh: '包装食品与肉类',
                desc:
                  'Producers of packaged foods including dairy products, fruit juices, meats, poultry, fish and pet foods.',
                desc_zh: '包装食品的生产商，包括乳制品、果汁、肉类、家禽、鱼类和宠物食品。',
              },
            ],
          },
          {
            code: 302030,
            en: 'Tobacco',
            zh: '烟草',
            children: [
              {
                code: 30203010,
                en: 'Tobacco',
                zh: '烟草',
                desc: 'Manufacturers of cigarettes and other tobacco products.',
                desc_zh: '香烟和其他烟草制品的制造商。',
              },
            ],
          },
        ],
      },
      {
        code: 3030,
        en: 'Household & Personal Products',
        zh: '家用及个人用品',
        children: [
          {
            code: 303010,
            en: 'Household Products',
            zh: '家居用品',
            children: [
              {
                code: 30301010,
                en: 'Household Products',
                zh: '家居用品',
                desc:
                  'Producers of non-durable household products, including detergents, soaps, diapers and other tissue and household paper products not classified in the Paper Products Sub-Industry.',
                desc_zh:
                  '生产非耐用家用产品的生产商，包括洗涤剂、肥皂、尿布等纸巾及家用纸制品，未列入纸制品子行业。',
              },
            ],
          },
          {
            code: 303020,
            en: 'Personal Products',
            zh: '个人产品',
            children: [
              {
                code: 30302010,
                en: 'Personal Products',
                zh: '个人产品',
                desc:
                  'Manufacturers of personal and beauty care products, including cosmetics and perfumes.',
                desc_zh: '个人护理和美容护理产品的制造商，包括化妆品和香水。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: 35,
    en: 'Health Care',
    zh: '卫生保健',
    children: [
      {
        code: 3510,
        en: 'Health Care Equipment & Services',
        zh: '医疗设备和服务',
        children: [
          {
            code: 351010,
            en: 'Health Care Equipment & Supplies',
            zh: '医疗设备和用品',
            children: [
              {
                code: 35101010,
                en: 'Health Care Equipment',
                zh: '医疗设备',
                desc:
                  'Manufacturers of health care equipment and devices. Includes medical instruments, drug delivery systems, cardiovascular & orthopedic devices, and diagnostic equipment.',
                desc_zh:
                  '医疗设备和设备的制造商。包括医疗器械、药物输送系统、心血管和矫形器械和诊断设备。',
              },
              {
                code: 35101020,
                en: 'Health Care Supplies',
                zh: '医疗用品',
                desc:
                  'Manufacturers of health care supplies and medical products not classified elsewhere. Includes eye care products, hospital supplies, and safety needle & syringe devices.',
                desc_zh:
                  '医疗用品和医疗产品的制造商在其他地方没有分类。包括眼部护理产品、医院用品和安全针头和注射器设备。',
              },
            ],
          },
          {
            code: 351020,
            en: 'Health Care Providers & Services',
            zh: '卫生保健提供者和服务',
            children: [
              {
                code: 35102010,
                en: 'Health Care Distributors',
                zh: '医疗分销商',
                desc:
                  'Distributors and wholesalers of health care products not classified elsewhere.',
                desc_zh: '医疗分销商和批发商在其他地方没有分类。',
              },
              {
                code: 35102015,
                en: 'Health Care  Services',
                zh: '医疗服务',
                desc:
                  'Providers of patient health care services not classified elsewhere. Includes dialysis centers, lab testing services, and pharmacy management services. Also includes companies providing business support services to health care providers, such as clerical support services, collection agency services, staffing services and outsourced sales & marketing services',
                desc_zh:
                  '患者卫生医疗服务的提供者在其他地方没有分类。包括透析中心、实验室检测服务和药房管理服务。还包括向医疗医疗提供商提供业务支持服务的公司，如文书支持服务、托收代理服务、人员配置服务和外包销售和营销服务',
              },
              {
                code: 35102020,
                en: 'Health Care Facilities',
                zh: '医疗机构',
                desc:
                  'Owners and operators of health care facilities, including hospitals, nursing homes, rehabilitation centers and animal hospitals.',
                desc_zh: '医疗机构的所有者和运营商，包括医院、疗养院、康复中心和动物医院。',
              },
              {
                code: 35102030,
                en: 'Managed Health Care',
                zh: '托管医疗',
                desc:
                  'Owners and operators of Health Maintenance Organizations (HMOs) and other managed plans.',
                desc_zh: '健康维护组织 （HMOs） 和其他托管计划的所有者和运营商。',
              },
            ],
          },
          {
            code: 351030,
            en: 'Health Care Technology',
            zh: '医药卫生技术',
            children: [
              {
                code: 35103010,
                en: 'Health Care Technology',
                zh: '医药卫生技术',
                desc:
                  'Companies providing information technology services primarily to health care providers.  Includes companies providing application, systems and/or data processing software, internet-based tools, and IT consulting services to doctors, hospitals or businesses operating primarily in the Health Care Sector',
                desc_zh:
                  '公司主要向医疗保健提供者提供信息技术服务。 包括为主要在医疗保健部门运营的医生、医院或企业提供应用程序、系统和/或数据处理软件、基于互联网的工具和 IT 咨询服务的公司',
              },
            ],
          },
        ],
      },
      {
        code: 3520,
        en: 'Pharmaceuticals, Biotechnology & Life Sciences',
        zh: '制药、生物技术和生命科学',
        children: [
          {
            code: 352010,
            en: 'Biotechnology',
            zh: '生物技术',
            children: [
              {
                code: 35201010,
                en: 'Biotechnology',
                zh: '生物技术',
                desc:
                  'Companies primarily engaged in the research, development, manufacturing and/or marketing of products based on genetic analysis and genetic engineering.  Includes companies specializing in protein-based therapeutics to treat human diseases. Excludes companies manufacturing products using biotechnology but without a health care application.',
                desc_zh:
                  '公司主要从事基于基因分析和基因工程的产品的研究、开发、制造和/或营销。 包括专门从事基于蛋白质的治疗治疗人类疾病的公司。不包括使用生物技术制造产品但没有医疗保健应用的公司。',
              },
            ],
          },
          {
            code: 352020,
            en: 'Pharmaceuticals',
            zh: '制药',
            children: [
              {
                code: 35202010,
                en: 'Pharmaceuticals',
                zh: '制药',
                desc:
                  'Companies engaged in the research, development or production of pharmaceuticals. Includes veterinary drugs.',
                desc_zh: '从事药品的研究、开发或生产。包括兽药。',
              },
            ],
          },
          {
            code: 352030,
            en: 'Life Sciences Tools & Services',
            zh: '生命科学工具与服务',
            children: [
              {
                code: 35203010,
                en: 'Life Sciences Tools & Services',
                zh: '生命科学工具与服务',
                desc:
                  'Companies enabling the drug discovery, development and production continuum by providing analytical tools, instruments, consumables & supplies, clinical trial services and contract research services.  Includes firms primarily servicing the pharmaceutical and biotechnology industries.',
                desc_zh:
                  '公司通过提供分析工具、仪器、耗材和耗材、临床试验服务和合同研究服务，实现药物的发现、开发和生产连续体。 包括主要为制药和生物技术行业提供服务的公司。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: 40,
    en: 'Financials',
    zh: '金融',
    children: [
      {
        code: 4010,
        en: 'Banks',
        zh: '银行',
        children: [
          {
            code: 401010,
            en: 'Banks',
            zh: '银行',
            children: [
              {
                code: 40101010,
                en: 'Diversified Banks',
                zh: '多元化银行',
                desc:
                  'Large, geographically diverse banks with a national footprint whose revenues are derived primarily from conventional banking operations, have significant business activity in retail banking and small and medium corporate lending, and provide a diverse range of financial services.  Excludes banks classified in the Regional Banks and Thrifts & Mortgage Finance Sub-Industries. Also excludes investment banks classified in the Investment Banking & Brokerage Sub-Industry.',
                desc_zh:
                  '规模大、地理上多样化的银行，其业务范围主要来自传统银行业务，在零售银行业务和中小型企业贷款领域拥有重要的业务活动，并提供多种多样的金融服务。 不包括分类于区域银行和储蓄和抵押贷款金融子行业的银行。也不包括投资银行分类在投资银行和经纪子行业。',
              },
              {
                code: 40101015,
                en: 'Regional Banks',
                zh: '区域银行',
                desc:
                  'Commercial banks whose businesses are derived primarily from conventional banking operations and have significant business activity in retail banking and small and medium corporate lending. Regional banks tend to operate in limited geographic regions. Excludes companies classified in the Diversified Banks and Thrifts & Mortgage Banks sub-industries. Also excludes investment banks classified in the Investment Banking & Brokerage Sub-Industry.',
                desc_zh:
                  '商业银行的业务主要来自传统的银行业务，在零售银行和中小型企业贷款中具有重要的业务活动。区域银行往往在有限的地理区域开展业务。不包括分类为多元化银行和储蓄银行及按揭银行子行业的公司。也不包括投资银行分类在投资银行和经纪子行业。',
              },
            ],
          },
          {
            code: 401020,
            en: 'Thrifts & Mortgage Finance',
            zh: '储蓄机构和抵押贷款融资',
            children: [
              {
                code: 40102010,
                en: 'Thrifts & Mortgage Finance',
                zh: '储蓄机构和抵押贷款融资',
                desc:
                  'Financial institutions providing mortgage and mortgage related services.  These include financial institutions whose assets are primarily mortgage related, savings & loans, mortgage lending institutions, building societies and companies providing insurance to mortgage banks.',
                desc_zh:
                  '提供抵押贷款和抵押贷款相关服务的金融机构。 这些机构的资产主要是抵押贷款相关，储蓄和贷款，抵押贷款机构，建筑协会和公司提供保险抵押贷款银行。',
              },
            ],
          },
        ],
      },
      {
        code: 4020,
        en: 'Diversified Financials',
        zh: '多元化金融',
        children: [
          {
            code: 402010,
            en: 'Diversified Financial Services',
            zh: '多元化金融服务',
            children: [
              {
                code: 40201020,
                en: 'Other Diversified Financial Services',
                zh: '其他多元化金融服务',
                desc:
                  'Providers of a diverse range of financial services and/or with some interest in a wide range of financial services including banking, insurance and capital markets, but with no dominant business line. Excludes companies classified in the Regional Banks and Diversified Banks Sub-Industries.',
                desc_zh:
                  '提供各种金融服务和/或对包括银行、保险和资本市场在内的各种金融服务感兴趣，但没有主导业务线。不包括分类于区域银行和多元化银行子行业的公司。',
              },
              {
                code: 40201030,
                en: 'Multi-Sector Holdings',
                zh: '多部门控股',
                desc:
                  'A company with significantly diversified holdings across three or more sectors, none of which contributes a majority of profit and/or sales. Stakes held are predominantly of a non-controlling nature.  Includes diversified financial companies where stakes held are of a controlling nature. Excludes other diversified companies classified in the Industrials Conglomerates Sub-Industry.',
                desc_zh:
                  '在三个或三个以上部门拥有显著多元化的公司，其中没有一个部门贡献大部分利润和/或销售额。持有的赌注主要是非控制性质的。 包括持有股份具有控制性质的多元化金融公司。不包括分类为工业集团子工业的其他多元化公司。',
              },
              {
                code: 40201040,
                en: 'Specialized Finance',
                zh: '专业财务',
                desc:
                  'Providers  of  specialized  financial  services  not  classified  elsewhere. Companies  in  this  sub-industry  derive  a  majority  of  revenue  from  one  specialized  line  of  business. Includes,  but  not  limited  to,  commercial  financing  companies,  central  banks,  leasing  institutions, factoring services, and specialty boutiques. Excludes companies classified in the Financial Exchanges & Data sub-industry.',
                desc_zh:
                  '专门金融服务的提供者在其他地方没有分类。此子行业的公司的大部分收入来自一个专业业务线。包括但不限于商业融资公司、中央银行、租赁机构、保理服务和专业精品店。不包括金融交易所和数据子行业分类的公司。',
              },
            ],
          },
          {
            code: 402020,
            en: 'Consumer Finance',
            zh: '消费金融',
            children: [
              {
                code: 40202010,
                en: 'Consumer Finance',
                zh: '消费金融',
                desc:
                  'Providers of consumer finance services, including personal credit, credit cards, lease financing, travel-related money services and pawn shops.  Excludes mortgage lenders classified in the Thrifts & Mortgage Finance Sub-Industry.',
                desc_zh:
                  '提供消费金融服务，包括个人信贷、信用卡、租赁融资、旅游相关货币服务和典当行。 不包括分类为节俭和抵押贷款金融子行业的抵押贷款机构。',
              },
            ],
          },
          {
            code: 402030,
            en: 'Capital Markets',
            zh: '资本市场',
            children: [
              {
                code: 40203010,
                en: 'Asset Management & Custody Banks',
                zh: '资产管理与托管银行',
                desc:
                  'Financial institutions primarily engaged in investment management and/or related custody and securities fee-based services. Includes companies operating mutual funds, closed-end funds and unit investment trusts.  Excludes banks and other financial institutions primarily involved in commercial lending, investment banking, brokerage and other specialized financial activities.',
                desc_zh:
                  '主要从事投资管理和/或相关托管和证券收费服务的金融机构。包括经营共同基金、封闭式基金和单位投资信托的公司。 不包括主要从事商业贷款、投资银行、经纪和其他专门金融活动的银行和其他金融机构。',
              },
              {
                code: 40203020,
                en: 'Investment Banking & Brokerage',
                zh: '投资银行与经纪',
                desc:
                  'Financial institutions primarily engaged in investment banking & brokerage services, including equity and debt underwriting, mergers and acquisitions, securities lending and advisory services. Excludes banks and other financial institutions primarily involved in commercial lending, asset management and specialized financial activities.',
                desc_zh:
                  '金融机构主要从事投资银行和经纪服务，包括股权和债务承销、并购、证券借贷和咨询服务。不包括主要从事商业贷款、资产管理和专门金融活动的银行和其他金融机构。',
              },
              {
                code: 40203030,
                en: 'Diversified Capital Markets',
                zh: '多元化资本市场',
                desc:
                  'Financial institutions primarily engaged in diversified capital markets activities, including a significant presence in at least two of the following area: large/major corporate lending, investment banking, brokerage and asset management. Excludes less diversified companies classified in the Asset Management & Custody Banks or Investment Banking & Brokerage sub-industries.  Also excludes companies classified in the Banks or Insurance industry groups or the Consumer Finance Sub-Industry.',
                desc_zh:
                  '金融机构主要从事多元化的资本市场活动，包括至少两个领域：大型/大型公司贷款、投资银行、经纪和资产管理。不包括资产管理与托管银行或投资银行与经纪子行业分类的较多元化公司。 也不包括银行或保险行业集团或消费金融子行业分类的公司。',
              },
              {
                code: 40203040,
                en: 'Financial Exchanges & Data',
                zh: '金融交易所与数据',
                desc:
                  'Financial  exchanges  for  securities,  commodities,  derivatives and other financial instruments, and providers of financial decision support tools and products  including ratings agencies',
                desc_zh:
                  '证券、商品、衍生品和其他金融工具的金融交易所，以及金融决策支持工具和产品的提供商，包括评级机构',
              },
            ],
          },
          {
            code: 402040,
            en: 'Mortgage Real Estate InvestmentTrusts (REITs)',
            zh: '抵押贷款房地产投资信托',
            children: [
              {
                code: 40204010,
                en: 'Mortgage REITs',
                zh: '抵押贷款',
                desc:
                  'Companies or Trusts that service, originate, purchase and/or securitize residential and/or commercial mortgage loans.  Includes trusts that invest in mortgage-backed securities and other mortgage related assets.',
                desc_zh:
                  '服务、发起、购买和/或证券化住宅和/或商业抵押贷款的公司或信托。 包括投资于抵押贷款支持证券和其他抵押贷款相关资产的信托。',
              },
            ],
          },
        ],
      },
      {
        code: 4030,
        en: 'Insurance',
        zh: '保险',
        children: [
          {
            code: 403010,
            en: 'Insurance',
            zh: '保险',
            children: [
              {
                code: 40301010,
                en: 'Insurance Brokers',
                zh: '保险经纪人',
                desc: 'Insurance and reinsurance brokerage firms.',
                desc_zh: '保险和再保险经纪公司。',
              },
              {
                code: 40301020,
                en: 'Life & Health Insurance',
                zh: '人寿保险',
                desc:
                  'Companies providing primarily life, disability, indemnity or supplemental health insurance. Excludes managed care companies classified in the Managed Health Care Sub-Industry.',
                desc_zh:
                  '主要提供人寿保险、残疾、赔偿或补充健康保险的公司。不包括分类于管理医疗保健子行业的托管护理公司。',
              },
              {
                code: 40301030,
                en: 'Multi-line Insurance',
                zh: '多线保险',
                desc:
                  'Insurance companies with diversified interests in life, health and property and casualty insurance.',
                desc_zh: '在寿险、健康险、财产险和意外险方面拥有多元化利益的保险公司。',
              },
              {
                code: 40301040,
                en: 'Property & Casualty Insurance',
                zh: '财产和意外伤害保险',
                desc: 'Companies providing primarily property and casualty insurance.',
                desc_zh: '主要提供财产和意外伤害保险的公司。',
              },
              {
                code: 40301050,
                en: 'Reinsurance',
                zh: '再保险',
                desc: 'Companies providing primarily reinsurance.',
                desc_zh: '主要提供再保险的公司。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: 45,
    en: 'Information Technology',
    zh: '信息技术',
    children: [
      {
        code: 4510,
        en: 'Software & Services',
        zh: '软件与服务',
        children: [
          {
            code: 451010,
            en: 'Internet Software & Services',
            zh: '互联网软件与服务',
            children: [
              {
                code: 45101010,
                en: 'Internet Software & Services',
                zh: '互联网软件与服务',
                desc:
                  'Companies developing and marketing internet software and/or providing internet services including online databases and interactive services, as well as companies deriving a majority of their revenues from online advertising. Excludes companies classified in the Internet Retail Sub-Industry.',
                desc_zh:
                  '开发和营销互联网软件和/或提供互联网服务（包括在线数据库和互动服务）的公司，以及从在线广告中获得大部分收入的公司。不包括分类于互联网零售子行业的公司。',
              },
            ],
          },
          {
            code: 451020,
            en: 'IT Services',
            zh: 'IT 服务',
            children: [
              {
                code: 45102010,
                en: 'IT Consulting & Other Services',
                zh: 'IT 咨询与其他服务',
                desc:
                  'Providers of information technology and systems integration services not classified in the Data Processing & Outsourced Services or Internet Software & Services Sub-Industries.  Includes information technology consulting and information management services.',
                desc_zh:
                  '未分类于数据处理和外包服务或互联网软件与服务子行业的信息技术和系统集成服务提供商。 包括信息技术咨询和信息管理服务。',
              },
              {
                code: 45102020,
                en: 'Data Processing & Outsourced Services',
                zh: '数据处理和外包服务',
                desc:
                  'Providers of commercial electronic data processing and/or business process outsourcing services.  Includes companies that provide services for back-office automation.',
                desc_zh:
                  '商业电子数据处理和/或业务流程外包服务的提供者。 包括为后台自动化提供服务的公司。',
              },
            ],
          },
          {
            code: 451030,
            en: 'Software',
            zh: '软件',
            children: [
              {
                code: 45103010,
                en: 'Application Software',
                zh: '应用软件',
                desc:
                  'Companies engaged in developing and producing software designed for specialized applications for the business or consumer market. Includes enterprise and technical software. Excludes companies classified in the Home Entertainment Software Sub-Industry. Also excludes companies producing systems or database management software classified in the Systems Software Sub-Industry.',
                desc_zh:
                  '从事开发和生产专为企业或消费市场设计的软件的公司。包括企业和技术软件。不包括分类于家庭娱乐软件子行业的公司。也不包括生产系统或数据库管理软件的公司，这些软件或数据库管理软件属于系统软件子行业。',
              },
              {
                code: 45103020,
                en: 'Systems Software',
                zh: '系统软件',
                desc:
                  'Companies engaged in developing and producing systems and database management software.',
                desc_zh: '从事开发和生产系统和数据库管理软件的公司。',
              },
              {
                code: 45103030,
                en: 'Home Entertainment Software',
                zh: '家庭娱乐软件',
                desc:
                  'Manufacturers of home entertainment software and educational software used primarily in the home.',
                desc_zh: '家庭娱乐软件和教育软件的制造商主要用于家庭。',
              },
            ],
          },
        ],
      },
      {
        code: 4520,
        en: 'Technology Hardware & Equipment',
        zh: '技术硬件与设备',
        children: [
          {
            code: 452010,
            en: 'Communications Equipment',
            zh: '通讯设备',
            children: [
              {
                code: 45201010,
                en: 'Communications Equipment',
                zh: '通讯设备',
                desc:
                  'Manufacturers of communication equipment and products, including LANs, WANs, routers, telephones, switchboards and exchanges. Excludes cellular phone manufacturers classified in the Technology Hardware, Storage & Peripherals Sub-Industry.',
                desc_zh:
                  '通信设备和产品的制造商，包括局域网、WAN、路由器、电话、配电盘和交换机。不包括分类为技术硬件、存储和外围设备子行业的手机制造商。',
              },
            ],
          },
          {
            code: 452020,
            en: 'Technology Hardware, Storage & Peripherals',
            zh: '技术硬件、存储和外围设备',
            children: [
              {
                code: 45202010,
                en: 'Technology Hardware, Storage & Peripherals',
                zh: '技术硬件、存储和外围设备',
                desc:
                  'Manufacturers of cellular phones, personal computers, servers, electronic computer components and peripherals. Includes data storage components, motherboards, audio and video cards, monitors, keyboards, printers, and other peripherals. Excludes semiconductors classified in the Semiconductors Sub-Industry.',
                desc_zh:
                  '手机、个人电脑、服务器、电子计算机组件和外围设备的制造商。包括数据存储组件、主板、音频和视频卡、监视器、键盘、打印机和其他外围设备。不包括半导体子工业中的半导体。',
              },
            ],
          },
          {
            code: 452030,
            en: 'Electronic Equipment, Instruments & Components',
            zh: '电子设备、仪器及组件',
            children: [
              {
                code: 45203010,
                en: 'Electronic Equipment & Instruments',
                zh: '电子设备与仪器',
                desc:
                  'Manufacturers of electronic equipment and instruments including analytical, electronic test and measurement instruments, scanner/barcode products, lasers, display screens, point-of-sales machines, and security system equipment.',
                desc_zh:
                  '电子设备和仪器制造商，包括分析、电子测试和测量仪器、扫描仪/条形码产品、激光器、显示屏、销售点机器和安全系统设备。',
              },
              {
                code: 45203015,
                en: 'Electronic Components',
                zh: '电子元件',
                desc:
                  'Manufacturers of electronic components. Includes electronic components, connection devices, electron tubes, electronic capacitors and resistors, electronic coil, printed circuit board, transformer and other inductors, signal processing technology/components.',
                desc_zh:
                  '电子元件制造商。包括电子元件、连接装置、电子管、电子电容器和电阻器、电子线圈、印刷电路板、变压器和其他电感器、信号处理技术/组件。',
              },
              {
                code: 45203020,
                en: 'Electronic Manufacturing Services',
                zh: '电子制造服务',
                desc:
                  'Producers of electronic equipment mainly for the OEM (Original Equipment Manufacturers) markets.',
                desc_zh: '电子设备的生产商主要为OEM（原始设备制造商）市场。',
              },
              {
                code: 45203030,
                en: 'Technology Distributors',
                zh: '技术分销商',
                desc:
                  'Distributors of technology hardware and equipment. Includes distributors of communications equipment, computers & peripherals, semiconductors, and electronic equipment and components.',
                desc_zh:
                  '技术硬件设备的分销商。包括通信设备、计算机和外围设备、半导体以及电子设备和组件的分销商。',
              },
            ],
          },
        ],
      },
      {
        code: 4530,
        en: 'Semiconductors & Semiconductor Equipment',
        zh: '半导体与半导体设备',
        children: [
          {
            code: 453010,
            en: 'Semiconductors & Semiconductor Equipment',
            zh: '半导体与半导体设备',
            children: [
              {
                code: 45301010,
                en: 'Semiconductor Equipment',
                zh: '半导体设备',
                desc:
                  'Manufacturers of semiconductor equipment, including manufacturers of the raw material and equipment used in the solar power industry.',
                desc_zh: '半导体设备制造商，包括太阳能行业使用的原材料和设备制造商。',
              },
              {
                code: 45301020,
                en: 'Semiconductors',
                zh: '半导体',
                desc:
                  'Manufacturers of semiconductors and related products, including manufacturers of solar modules and cells.',
                desc_zh: '半导体及相关产品的制造商，包括太阳能电池组件和电池制造商。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: 50,
    en: 'Telecommunication Services',
    zh: '电信服务',
    children: [
      {
        code: 5010,
        en: 'Telecommunication Services',
        zh: '电信服务',
        children: [
          {
            code: 501010,
            en: 'Diversified Telecommunication Services',
            zh: '多元化电讯服务',
            children: [
              {
                code: 50101010,
                en: 'Alternative Carriers',
                zh: '电信承运商',
                desc:
                  'Providers of communications and high-density data transmission services primarily through a high bandwidth/fiber-optic cable network.',
                desc_zh: '通信和高密度数据传输服务的提供商，主要通过高带宽/光纤电缆网络。',
              },
              {
                code: 50101020,
                en: 'Integrated Telecommunication Services',
                zh: '综合电信服务',
                desc:
                  'Operators of primarily fixed-line telecommunications networks and companies providing both wireless and fixed-line telecommunications services not classified elsewhere.',
                desc_zh:
                  '主要为固定线路电信网络的运营商和同时提供无线和固定线路电信服务的公司的运营商，在其他地方没有分类。',
              },
            ],
          },
          {
            code: 501020,
            en: 'Wireless Telecommunication Services',
            zh: '无线通讯服务',
            children: [
              {
                code: 50102010,
                en: 'Wireless Telecommunication Services',
                zh: '无线通讯服务',
                desc:
                  'Providers of primarily cellular or wireless telecommunication services, including paging services.',
                desc_zh: '主要提供蜂窝或无线电信服务，包括寻呼服务。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: 55,
    en: 'Utilities',
    zh: '公用事业',
    children: [
      {
        code: 5510,
        en: 'Utilities',
        zh: '公用事业',
        children: [
          {
            code: 551010,
            en: 'Electric Utilities',
            zh: '电力公用事业',
            children: [
              {
                code: 55101010,
                en: 'Electric Utilities',
                zh: '电力公用事业',
                desc:
                  'Companies that produce or distribute electricity. Includes both nuclear and non-nuclear facilities.',
                desc_zh: '生产或分配电力的公司。包括核设施和非核设施。',
              },
            ],
          },
          {
            code: 551020,
            en: 'Gas Utilities',
            zh: '燃气公用事业',
            children: [
              {
                code: 551020,
                en: 'Gas Utilities',
                zh: '燃气公用事业',
                desc:
                  'Companies whose main charter is to distribute and transmit natural and manufactured gas. Excludes companies primarily involved in gas exploration or production classified in the Oil & Gas Exploration & Production Sub-Industry.   Also excludes diversified midstream natural gas companies classified in the Oil & Gas Storage & Transportation Sub-Industry.',
                desc_zh:
                  '公司的主要章程是分配和输送天然气和人造气体。不包括主要从事油气勘探或油气勘探和生产子行业生产的公司。  还不包括属于石油天然气储运子行业的多元化中游天然气公司。',
              },
            ],
          },
          {
            code: 551030,
            en: 'Multi-Utilities',
            zh: '多元化公用事业',
            children: [
              {
                code: 55103010,
                en: 'Multi-Utilities',
                zh: '多元化公用事业',
                desc:
                  'Utility companies with significantly diversified activities in addition to core Electric Utility, Gas Utility and/or Water Utility operations.',
                desc_zh:
                  '除了核心电力公用事业、燃气公用事业和/或水务业务外，拥有显著多元化活动的公用事业公司。',
              },
            ],
          },
          {
            code: 551040,
            en: 'Water Utilities',
            zh: '水务公司',
            children: [
              {
                code: 55104010,
                en: 'Water Utilities',
                zh: '水务公司',
                desc:
                  'Companies that purchase and redistribute water to the end-consumer. Includes large-scale water treatment systems.',
                desc_zh: '购买和重新分配水给最终消费者的公司。包括大型水处理系统。',
              },
            ],
          },
          {
            code: 551050,
            en: 'Independent Power and Renewable Electricity Producers',
            zh: '独立电力和可再生能源发电',
            children: [
              {
                code: 55105010,
                en: 'Independent Power Producers & Energy Traders',
                zh: '独立电力生产商和能源交易商',
                desc:
                  'Companies that operate as Independent Power Producers (IPPs), Gas & Power Marketing & Trading Specialists and/or Integrated Energy Merchants. Excludes producers of electricity using renewable sources, such as solar power, hydropower, and wind power. Also excludes electric transmission companies and utility distribution companies classified in the Electric Utilities Sub-Industry.',
                desc_zh:
                  '作为独立电力生产商 （IpP）、天然气和电力营销与交易专家和/或集成能源商运营的公司。不包括使用可再生能源（如太阳能、水电和风能）的电力生产商。也不包括电力公用事业子行业分类的输电公司和公用事业分销公司。',
              },
              {
                code: 55105020,
                en: 'Renewable Electricity',
                zh: '可再生电力',
                desc:
                  'Companies that engage in the generation and distribution of electricity using renewable sources, including, but not limited to, companies that produce electricity using biomass, geothermal energy, solar energy, hydropower, and wind power. Excludes companies manufacturing capital equipment used to generate electricity using renewable sources, such as manufacturers of solar power systems, installers of photovoltaic cells,  and companies involved in the provision of technology, components, and services mainly to this market.',
                desc_zh:
                  '从事使用可再生能源发电和分配电力的公司，包括但不限于使用生物质能、地热能、太阳能、水电和风能发电的公司。不包括制造用于使用可再生能源发电的资本设备的公司，例如太阳能发电系统的制造商、光伏电池的安装商以及参与提供技术、组件和主要服务于这个市场',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: 60,
    en: 'Real Estate',
    zh: '房地产',
    children: [
      {
        code: 6010,
        en: 'Real Estate',
        zh: '房地产',
        children: [
          {
            code: 601010,
            en: 'Equity Real Estate Investment Trusts(REITs)',
            zh: '股权房地产投资信托(REITs)',
            children: [
              {
                code: 60101010,
                en: 'Diversified REITs',
                zh: '多元化房地产投资信托基金',
                desc:
                  'A company or Trust with significantly diversified operations across two or more property types.',
                desc_zh: '在两种或两种以上财产类型上具有显著多元化运营的公司或信托公司。',
              },
              {
                code: 60101020,
                en: 'Industrial REITs',
                zh: '工业房地产投资信托基金',
                desc:
                  'Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of industrial properties. Includes companies operating industrial warehouses and distribution properties.',
                desc_zh:
                  '从事工业产权的收购、开发、所有权、租赁、管理和运营的公司或信托。包括经营工业仓库和分销物业的公司。',
              },
              {
                code: 60101030,
                en: 'Hotel & Resort REITs',
                zh: '酒店及度假村房地产投资信托基金',
                desc:
                  'Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of hotel and resort properties.',
                desc_zh: '从事酒店和度假村物业的收购、开发、所有权、租赁、管理和运营的公司或信托。',
              },
              {
                code: 60101040,
                en: 'Office REITs',
                zh: '商业房地产投资信托基金',
                desc:
                  'Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of office properties.',
                desc_zh: '从事写字楼的收购、开发、所有权、租赁、管理和运营的公司或信托。',
              },
              {
                code: 60101050,
                en: 'Health Care REITs',
                zh: '医疗卫生房地产投资信托基金',
                desc:
                  'Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of properties serving the health care industry, including hospitals, nursing homes, and assisted living properties.',
                desc_zh:
                  '公司或信托参与为医疗卫生行业提供服务的物业的收购、开发、所有权、租赁、管理和运营，包括医院、养老院和辅助生活物业。',
              },
              {
                code: 60101060,
                en: 'Residential REITs',
                zh: '住宅房地产投资信托基金',
                desc:
                  'Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of residential properties including multifamily homes, apartments, manufactured homes and student housing properties',
                desc_zh:
                  '从事住宅物业（包括多户住宅、公寓、制造房屋和学生住房）的收购、开发、所有权、租赁、管理和运营的公司或信托',
              },
              {
                code: 60101070,
                en: 'Retail REITs',
                zh: '零售房地产投资信托基金',
                desc:
                  'Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of shopping malls, outlet malls, neighborhood and community shopping centers.',
                desc_zh:
                  '公司或信托公司从事商场、商场、商场、社区和社区购物中心的收购、开发、所有权、租赁、管理和运营。',
              },
              {
                code: 60101080,
                en: 'Specialized REITs',
                zh: '专业的房地产投资信托基金',
                desc:
                  'Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of properties not classified elsewhere. Includes trusts that operate and invest in storage properties. It also includes REITs that do not generate a majority of their revenues and income from real estate rental and leasing operations.',
                desc_zh:
                  '从事收购、开发、所有权、租赁、管理和运营未归别处财产的公司或信托。包括运营和投资存储属性的信托。它还包括不产生大部分收入和收入从房地产租赁和租赁业务产生的REIT。',
              },
            ],
          },
          {
            code: 601020,
            en: 'Real Estate Management & Development',
            zh: '房地产管理与开发',
            children: [
              {
                code: 60102010,
                en: 'Diversified Real Estate Activities',
                zh: '多元化房地产活动',
                desc:
                  'Companies engaged in a diverse spectrum of real estate activities including real estate development & sales, real estate management, or real estate services, but with no dominant business line.',
                desc_zh:
                  '从事各种房地产活动的公司包括房地产开发与销售、房地产管理或房地产服务，但没有主导业务线。',
              },
              {
                code: 60102020,
                en: 'Real Estate Operating Companies',
                zh: '房地产运营公司',
                desc:
                  'Companies engaged in operating real estate properties for the purpose of leasing & management.',
                desc_zh: '公司从事经营房地产租赁和管理。',
              },
              {
                code: 60102030,
                en: 'Real Estate Development',
                zh: '房地产开发',
                desc:
                  'Companies that develop real estate and sell the properties after development. Excludes companies classified in the Homebuilding Sub-Industry.',
                desc_zh: '开发房地产并在开发后出售物业的公司。不包括属于住宅建筑子行业的公司。',
              },
              {
                code: 60102040,
                en: 'Real Estate Services',
                zh: '房地产服务',
                desc:
                  'Real estate service providers such as real estate agents, brokers & real estate appraisers.',
                desc_zh: '房地产服务提供商，如房地产经纪人，经纪人和房地产估价师。',
              },
            ],
          },
        ],
      },
    ],
  },
];

var IndustryClassificationSelector = function IndustryClassificationSelector(props) {
  var GICS = cloneDeep(GICSOriginal);
  var cn = props.zh,
    onChange = props.onChange,
    value = props.value; // @ts-ignore

  var formatChildren = function formatChildren(item) {
    var code = item.code,
      en = item.en,
      zh = item.zh,
      children = item.children;
    return _objectSpread2(
      _objectSpread2({}, item),
      {},
      {
        value: code,
        label: cn ? zh : en,
        children: children
          ? mapper(children, function(subItem) {
              return formatChildren(subItem);
            })
          : undefined,
      },
    );
  };

  var formatIndustry = function formatIndustry() {
    return mapper(GICS, function(value) {
      var code = value.code,
        en = value.en,
        zh = value.zh,
        children = value.children;
      return _objectSpread2(
        _objectSpread2({}, value),
        {},
        {
          value: code,
          label: cn ? zh : en,
          children: children
            ? mapper(children, function(item) {
                return formatChildren(item);
              })
            : undefined,
        },
      );
    });
  };

  var formatValue = function formatValue(v) {
    if (v && v.length > 0) {
      var allGICS = flattenDeep(
        mapper(GICS, function(item) {
          var children = item.children;

          if (children) {
            return [_objectSpread2({}, item)].concat(
              _toConsumableArray(
                mapper(children, function(subItem) {
                  return reverseGICS(subItem);
                }),
              ),
            );
          }

          return _objectSpread2({}, item);
        }),
      );
      var realKey = last(v); // @ts-ignore

      var realValue =
        allGICS.find(function(_ref) {
          var code = _ref.code;
          return code === realKey;
        }) || {}; // @ts-ignore

      var code = realValue.code,
        en = realValue.en,
        zh = realValue.zh,
        desc = realValue.desc,
        descZH = realValue.desc_zh;
      return {
        code: code,
        en: en,
        zh: zh,
        desc: desc,
        desc_zh: descZH,
      };
    }

    return [];
  }; // @ts-ignore

  var reverseGICS = function reverseGICS(item) {
    var children = item.children;

    if (children) {
      return [_objectSpread2({}, item)].concat(
        _toConsumableArray(
          mapper(children, function(subItem) {
            return reverseGICS(subItem);
          }),
        ),
      );
    }

    return _objectSpread2({}, item);
  };

  var handleOnChange = function handleOnChange(v) {
    if (onChange) {
      onChange(formatValue(v));
    }
  };

  var opts = formatIndustry();

  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    cascaderValue = _useState2[0],
    setCascaderValue = _useState2[1];

  useEffect(
    function() {
      if (value) {
        var code = value.code;
        var targetValue = []; // @ts-ignore

        forEach(split(code, ''), function(v, k) {
          if (k > 0 && k % 2 === 1) {
            targetValue.push(Number(''.concat(code).slice(0, k + 1)));
          }
        }); // @ts-ignore

        setCascaderValue(code ? targetValue : []);
      }
    },
    [value],
  ); // @ts-ignore

  return /*#__PURE__*/ React.createElement(
    Cascader,
    Object.assign({}, props, {
      value: cascaderValue,
      options: opts,
      onChange: handleOnChange,
    }),
  );
};

export default IndustryClassificationSelector;

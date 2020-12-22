/**
 * It is base https://www.msci.com/gics Effective until Sep 28, 2018
 * https://www.msci.com/documents/1296102/11185224/Effective+until+September+28%2C+2018.xls/7fb8b3b7-ce4e-8f73-6f1b-bfee5d1ddc94
 */
declare const _default: (
  | {
      code: number;
      en: string;
      zh: string;
      children: {
        code: number;
        en: string;
        zh: string;
        children: {
          code: number;
          en: string;
          zh: string;
          children: (
            | {
                code: number;
                en: string;
                zh: string;
                desc: string;
                desc_zh: string;
                cn?: undefined;
              }
            | {
                code: number;
                en: string;
                cn: string;
                desc: string;
                desc_zh: string;
                zh?: undefined;
              }
          )[];
        }[];
      }[];
    }
  | {
      code: number;
      en: string;
      zh: string;
      children: (
        | {
            code: number;
            en: string;
            zh: string;
            children: (
              | {
                  code: number;
                  en: string;
                  zh: string;
                  children: {
                    code: number;
                    en: string;
                    zh: string;
                    desc: string;
                    desc_zh: string;
                  }[];
                }
              | {
                  code: number;
                  en: string;
                  zh: string;
                  children: {
                    code: string;
                    en: string;
                    zh: string;
                    desc: string;
                    desc_zh: string;
                  }[];
                }
            )[];
          }
        | {
            code: number;
            en: string;
            zh: string;
            children: (
              | {
                  code: number;
                  en: string;
                  cn: string;
                  children: {
                    code: number;
                    en: string;
                    zh: string;
                    desc: string;
                    desc_zh: string;
                  }[];
                  zh?: undefined;
                }
              | {
                  code: number;
                  en: string;
                  zh: string;
                  children: {
                    code: number;
                    en: string;
                    zh: string;
                    desc: string;
                    desc_zh: string;
                  }[];
                  cn?: undefined;
                }
            )[];
          }
      )[];
    }
  | {
      code: number;
      en: string;
      zh: string;
      children: (
        | {
            code: number;
            en: string;
            zh: string;
            children: (
              | {
                  code: number;
                  en: string;
                  zh: string;
                  children: {
                    code: number;
                    en: string;
                    zh: string;
                    desc: string;
                    desc_zh: string;
                  }[];
                }
              | {
                  code: number;
                  zh: string;
                  children: {
                    code: number;
                    en: string;
                    zh: string;
                    desc: string;
                    desc_zh: string;
                  }[];
                  en?: undefined;
                }
            )[];
          }
        | {
            code: number;
            zh: string;
            children: {
              code: number;
              en: string;
              zh: string;
              children: {
                code: number;
                en: string;
                zh: string;
                desc: string;
                desc_zh: string;
              }[];
            }[];
            en?: undefined;
          }
        | {
            code: number;
            en: string;
            zh: string;
            children: {
              code: number;
              en: string;
              zh: string;
              children: (
                | {
                    code: number;
                    en: string;
                    zh: string;
                    desc: string;
                    desc_zh: string;
                  }
                | {
                    code: number;
                    zh: string;
                    desc: string;
                    desc_zh: string;
                    en?: undefined;
                  }
              )[];
            }[];
          }
      )[];
    }
)[];
export default _default;

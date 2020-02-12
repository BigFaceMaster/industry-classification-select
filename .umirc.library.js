export default {
  entry: 'src/index.js',
  autoprefixer: {
    browsers: ['ie>10', 'Safari >= 6'],
  },
  cssModules: true,
  esm: 'rollup',
  cjs: 'rollup',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};

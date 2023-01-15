/** @type {import('tailwindcss').Config} */
// 生产优化文档
// https://www.tailwindcss.cn/docs/optimizing-for-production#removing-unused-keyframes
module.exports = {
  theme: {
    extend: {},
  },
  purge: {
    //enable一般不需要设置，默认生产会tree-sharing，设置为true每次开发保存都需要扫描编译，影响性能
    // enable:true , 

    // NODE_ENV 设置为 production时会自动扫描对应目录，进行css类的tree-sharking
    content: ['./index.html', './src/**/*.{vue,js,ts,tsx,jsx}'],

    // 一般不需要设置，是否保护html原生元素的默认样式，避免被过渡清除，
    // preserveHtmlElements: false,

    // 配置图层清除- 默认会清除base, components, 和 utilities 图层. 
    // layers: ['components', 'utilities'],

    // -----------------
    // 如果您真的想删除所有未使用的样式，包括第三方那些只在 node_modules 文件夹深处引用的类
    // 设置 mode: 'all' 和 preserveHtmlElements: false，并且要非常小心地提供可能引用任何类或HTML元素的所有文件的路径。
    // mode: 'all',
    // preserveHtmlElements: false,
    // content: [
    //   './src/**/*.js',
    //   './node_modules/flatpickr/**/*.js',
    // ],
    // ---------------------- 不推荐这样做，默认方案的tree-sharking即可

    // https://purgecss.com/configuration.html#options  对应的可配置选项
    options: {
      // 安全受保护的类，这里配置的css类不会被tree-sharking掉
      safelist: [],
      // PurgeCSS默认情况下不会删除未使用的@keyframes规则
      keyframes: true,
    },
  },
  plugins: [],

  // 禁用未使用到的核心插件和变体
  // corePlugins: {
  //   float: false
  // }

  // 如果您只需要少量的功能类，您可以向 corePlugins 传递一个数组，其中包含您想保留的功能插件。
  // corePlugins: [
  //   'margin',
  //   'padding'
  // ]

  // 如果需要一个功能类，但不需要响应式版本，将其变体设置为空数组，以减少 83% 的类生成。
  // variants: {
  //   appearance: []
  // }
}

module.exports = {
  plugins: [
    require('postcss-import'), //构建时提前处理 @import 语句
    require('tailwindcss'),
    require('autoprefixer'),  //浏览器前缀补全
  ]
}

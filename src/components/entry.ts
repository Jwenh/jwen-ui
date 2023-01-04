import { App } from 'vue';
import MyButton from './Button'

// 单独导出组件
export {
    MyButton
}

// 全局导入组件， 使用 app.use() 会调用对应的install方法
export default {
    install(app:App):void{
        app.component(MyButton.name,MyButton)
    }
}
import { defineComponent } from 'vue'

const button = ()=>{
    return (
        <div>
            <button>myButton</button>
        </div>
    )
}

export default  defineComponent({
    name:'MyButton',
    setup(){
        return button
    }
})
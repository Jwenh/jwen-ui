import { defineComponent } from 'vue'

const button = ()=>{
    return (
        <div className='text-orange-600	'>
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
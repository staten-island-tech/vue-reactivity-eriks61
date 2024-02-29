import { reactive } from "vue"
export const store = reactive({
    items : [],
    cartItems : [],
    increment(){
    this.count++
    },
    addCart(item){
        this.cartItems.push(item)
        console.log(this.cartItems)
    },
    showCart(){
        
    }
})
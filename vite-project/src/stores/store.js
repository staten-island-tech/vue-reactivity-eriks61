import { reactive } from "vue"
export const store = reactive({
    items : [],
    cartItems : [],
    increment(){
    this.items.length++
    },
    addCart(item){
        this.cartItems.push(item)
        console.log(this.cartItems)
    },
    showCart(){
        return this.cartItems
    }
})
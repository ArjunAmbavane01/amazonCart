import { selector } from "recoil";
import userCartAtom from "./cartItemsState";


const cartTotalSelector = selector({
    key:'cartTotalSelector',
    get: ({get})=> {
        const Cart = get(userCartAtom);
        const cartTotal = Cart.reduce((sum,item)=>{
            return sum + (item.quantity*item.price);
        },0)
        const cartLength = Cart.reduce((sum,item)=>{
            return sum + item.quantity;
        },0)
        return {
            cartTotal,
           cartLength
        }
    }
})

export default cartTotalSelector
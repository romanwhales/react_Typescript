import {Actions,AddProductsAction,ResetOrderAction,ModifyOrderAction}from "./types";
import {Product} from "./entities";

export const addProduct = (...products: Product[]):AddProductsAction =>({
    type: Actions.ADD_PRODUCTS,
    payload: products
})

export const modifyOrder = (product: Product,quantity:number): ModifyOrderAction =>({
    
    type: Actions.MODIFY_ORDER,
    payload:{
        product,quantity
    }
})

export const resetOrder = (): ResetOrderAction => ({
    type: Actions.RESET_ORDER
})
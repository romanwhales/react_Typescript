import {Actions,StoreData,StoreAction} from "./types";
import {Order} from "./entities";
import {Reducer} from "redux";

export const StoreReducer: Reducer<StoreData,StoreAction> = (data: StoreData | undefined, action) => {
    data = data || {products:[],order: new Order()}
    switch(action.type){
        case Actions.ADD_PRODUCTS:
            if(data.products.length >= 9){
                return {...data, products: [...data.products]}
            }
            return {
                ...data,
                products: [...data.products,...action.payload]
            }
        case Actions.MODIFY_ORDER:
            debugger;
            data.order.addProduct(action.payload.product,action.payload.quantity)
            return {...data}
        case Actions.RESET_ORDER:
            return {
                ...data,
                order: new Order()
            }
        default:
            return data;
    }
}
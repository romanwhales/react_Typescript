import {Product,Order} from "./entities";
import {Action} from "redux";

export interface StoreData{
    products: Product[],
    order: Order
}

export enum Actions{
    ADD_PRODUCTS,
    MODIFY_ORDER,
    RESET_ORDER
}

export interface AddProductsAction extends Action<Actions.ADD_PRODUCTS>{
    payload: Product[]
}

export interface ModifyOrderAction extends Action<Actions.MODIFY_ORDER>{
    
    payload: {
        product: Product,
        quantity: number
    }
}

export interface ResetOrderAction extends Action<Actions.RESET_ORDER>{

}

export type StoreAction = AddProductsAction | ModifyOrderAction | ResetOrderAction
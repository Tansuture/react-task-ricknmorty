

export enum ShopActionType {
    SET_PRODUCTS ='SET_PRODUCTS',
    ADD_TO_BASKET = 'ADD_TO_BASKET',
     DELETE_FROM_BASKET = 'DELETE_FROM_BASKET',
     CLEAR_THE_BASKET = 'CLEAR_THE_BASKET',
    INCREMENT_COUNT = 'INCREMENT_COUNT',
    
     OPEN_MODAL = 'OPEN_MODAL',
   CLOSE_MODAL = 'CLOSE_MODAL',
}

export interface ShopState{
    shop: ShoppingData[]
    basket: BasketData[] 
    counter: number
    modal:boolean
}

export interface BasketData {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number,
    }
}
export interface ShoppingData{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number,
    }
}
interface SetProductsAction {
    type:ShopActionType.SET_PRODUCTS,
    payload:ShoppingData[]
}

interface AddToBasketAction{
    type:ShopActionType.ADD_TO_BASKET,
    payload:number
}

interface DeleteFromBasketAction{
    type:ShopActionType.DELETE_FROM_BASKET
    payload:number
}
interface ClearTheBasketAction {
    type:ShopActionType.CLEAR_THE_BASKET
    
}
interface OpenModalAction{
    type:ShopActionType.OPEN_MODAL
}
interface CloseModalAction{
    type: ShopActionType.CLOSE_MODAL
}

export type ShopAction = SetProductsAction | AddToBasketAction | DeleteFromBasketAction | ClearTheBasketAction | OpenModalAction | CloseModalAction
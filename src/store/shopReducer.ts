import { ShopActionType } from './types'
import { loadBasket } from "./localStorage"
import { ShopAction, ShoppingData, ShopState } from "./types"




let initState:ShopState = {
    shop:[],
    basket:loadBasket()|| [],
    counter:0,
    modal:false

}



export const shopReducer=(state=initState,action:ShopAction):ShopState=>{
    switch(action.type){
        case ShopActionType.SET_PRODUCTS:
            return {...state,shop:action.payload}
        case ShopActionType.ADD_TO_BASKET:
            let addedItem  =state.shop.find(item=>action.payload===item.id)
            let existedItem = state.basket.find(item=>action.payload===item.id)
            if(existedItem){
             
                  return  {...state,counter:state.counter+1}
            }
            {
                return {...state,basket:[...state.basket,addedItem],counter:state.counter+1}
             

            }
        case ShopActionType.DELETE_FROM_BASKET:
             let newCount = state.counter-1
             return {...state,basket:[...state.basket.filter(b=>b.id!==action.payload)],counter:newCount}
        case ShopActionType.CLEAR_THE_BASKET:
              return {...state,basket:[],counter:0}

     
      
        case ShopActionType.OPEN_MODAL:
            return {...state,modal:true}
         case ShopActionType.CLOSE_MODAL:
                return{...state,modal:false}
         default:  return state
    }

}
    


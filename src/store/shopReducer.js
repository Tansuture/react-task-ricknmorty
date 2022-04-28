import { api, SET_PRODUCTS,ADD_TO_BASKET,DELETE_FROM_BASKET, CLEAR_THE_BASKET, INCREMENT_COUNT, DECREMENT_COUNT, OPEN_MODAL, CLOSE_MODAL } from "./actions"
import { loadBasket } from "./localStorage"




let initState = {
    shop:JSON.parse(localStorage.getItem('products'))||[],
    basket:loadBasket()||[],
    counter:0,
    modal:false

}



export const shopReducer=(state=initState,action)=>{
    switch(action.type){
        case SET_PRODUCTS:
            return {...state,shop:action.products}
        case ADD_TO_BASKET:
            let addedItem  =state.shop.find(item=>action.id===item.id)
            let existedItem = state.basket.find(item=>action.id===item.id)
            if(existedItem){
             
                  return  {...state,counter:state.counter+1}
            }
            {
                return {...state,basket:[...state.basket,addedItem],counter:state.counter+1}
            }
        case DELETE_FROM_BASKET:
             let newCount = state.counter-1
             return {...state,basket:[...state.basket.filter(b=>b.id!==action.id)],counter:newCount}
        case CLEAR_THE_BASKET:
              return {...state,basket:[],counter:0}

     
        case INCREMENT_COUNT:
            return {
                ...state,counter:state.counter+1
            }
                
        case DECREMENT_COUNT:
            return {
            ...state,counter:state.counter-1
        }
        case OPEN_MODAL:
            return {...state,modal:true}
         case CLOSE_MODAL:
                return{...state,modal:false}
         default:  return state
    }

}
    


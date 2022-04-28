
import { ShopAction, ShoppingData, ShopActionType } from './types';
import { Dispatch } from 'redux';
import axios from "axios"





export const getProducts =()=> async(dispatch:Dispatch<ShopAction>)=>{
    
    await axios.get<ShoppingData[]>('https://fakestoreapi.com/products').then((response)=>{
        dispatch({type:ShopActionType.SET_PRODUCTS,payload:response.data})
            })

}
export const addToBasket = (id:number) => (dispatch:Dispatch<ShopAction>) => {

         dispatch({type:ShopActionType.ADD_TO_BASKET,payload:id})
        
}

export const deleteFromBasket = (id:number) => (dispatch:Dispatch<ShopAction>) => {
    
 
   dispatch({type:ShopActionType.DELETE_FROM_BASKET,payload:id})
}
export const clearTheBasket = ()=>(dispatch:Dispatch<ShopAction>)=>{
dispatch({type:ShopActionType.CLEAR_THE_BASKET})
}


// export const getCharacters = (pageNumber,search,status,species)=>(dispatch)=>{
//     console.log(status)
//     axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}`).then((response)=>{
//         dispatch(setCharactersAC(response.data.results))
//         localStorage.setItem('characters',JSON.stringify(response.data.results))
//     })
// }

export const openModal = ()=>(dispatch:Dispatch<ShopAction>)=>{
    dispatch({type:ShopActionType.OPEN_MODAL})
}
export const closeModal = ()=>(dispatch:Dispatch<ShopAction>)=>{
    dispatch({type:ShopActionType.CLOSE_MODAL})
}
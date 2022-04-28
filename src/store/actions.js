import axios from "axios"


export let SET_PRODUCTS ='SET_PRODUCTS'
 export let ADD_TO_BASKET = 'ADD_TO_BASKET'
 export let DELETE_FROM_BASKET = 'DELETE_FROM_BASKET'
export let CLEAR_THE_BASKET = 'CLEAR_THE_BASKET'
export let INCREMENT_COUNT = 'INCREMENT_COUNT'
export let DECREMENT_COUNT = 'DECREMENT_COUNT'
export let SET_CHARACTERS = 'SET_CHARACTERS'
export let OPEN_MODAL = 'OPEN_MODAL'
export let CLOSE_MODAL = 'CLOSE_MODAL'

export const setProductsAC = (products)=>({
    type:SET_PRODUCTS,
    products
})
 const addToBasketAC =(product,id)=>({
    
   
    type:ADD_TO_BASKET,
    product,
    id,

})
 const deleteFromBasketAC =(id)=>({
    type:DELETE_FROM_BASKET,
    id
})

 const clearTheBasketAC = ()=>({
    type:CLEAR_THE_BASKET,
    
})
const incrementAC=()=>({
    type:INCREMENT_COUNT,

})
// const  decrementAC=()=>({
//     type:DECREMENT_COUNT
// })

const setCharactersAC = (characters)=>({
    type:SET_CHARACTERS,
    characters
})
const openModalAC = ()=>({
    type:OPEN_MODAL,
})
const closeModalAC = ()=>({
    type:CLOSE_MODAL
})



export const getProducts =()=>dispatch=>{
    
    axios.get('https://fakestoreapi.com/products').then((response)=>{
        dispatch(setProductsAC(response.data))
        localStorage.setItem('products',JSON.stringify(response.data))

              
            })

}
export const addToBasket = (product,id) => (dispatch) => {

         dispatch(addToBasketAC(product,id))
}

export const deleteFromBasket = (id) => (dispatch) => {
    
 
   dispatch(deleteFromBasketAC(id))
}
export const clearTheBasket = ()=>(dispatch)=>{
dispatch(clearTheBasketAC())
}

export const getTotal = (id)=>(dispatch)=>{
    dispatch(incrementAC(id))
}
export const getCharacters = (pageNumber,search,status,species)=>(dispatch)=>{
    console.log(status)
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}`).then((response)=>{
        dispatch(setCharactersAC(response.data.results))
        localStorage.setItem('characters',JSON.stringify(response.data.results))
    })
}

export const openModal = ()=>(dispatch)=>{
    dispatch(openModalAC())
}
export const closeModal = ()=>(dispatch)=>{
    dispatch(closeModalAC())
}
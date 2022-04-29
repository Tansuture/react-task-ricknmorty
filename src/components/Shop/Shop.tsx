import { Container, Grid } from "@mui/material"
import {  FC, useEffect } from "react"
import React from 'react'


import { useDispatch, useSelector } from "react-redux"
import { addToBasket, getProducts,deleteFromBasket } from "../../store/actions"
import { RootState } from "../../store/store"

// import Basket2 from "./Basket2"
import BasicModal from "./Modal"
import ShopInfo from "./Shop.info"
import { useUserActions } from "./UseUsersActon"




const Shop:FC =()=>{
    const dispatch = useDispatch()
    const products = useSelector((state:RootState)=>state.shopReducer.shop)
    const {getProducts}=useUserActions()
  

    // const products = useSelector((state)=>{
    //  return state.shopReducer.shop
    // })
  
    
    useEffect(()=>{
    getProducts()
    },[getProducts])
    
    const handleBasket = (id:number)=>{
      addToBasket(id)
    }
    const handleDelete= (id:number)=>{
      deleteFromBasket(id)
    }

    return(
        <>
        <Container>
         
          <Grid container spacing={2}>

        {products.map((product)=>(
          <Grid item md={3} xs={12} key={product.id}>
          <ShopInfo  addToBasket = {handleBasket} product={product}></ShopInfo>
          </Grid>
        ))}
          </Grid>
          {/* <Basket2 deleteFromBasket={handleDelete} /> */}
        <BasicModal/>
        </Container>
        </>
    )
}

export default Shop

import {Button, styled} from "@mui/material";
import { FC } from "react";
import {ShoppingData} from '../../store/types'
import React from 'react'

const Box = styled('div')`
padding: 16px 16px 12px 16px;
box-sizing: border-box;
border-radius: 8px;
transition: .2s;
&:hover {
  box-shadow: 0 10px 15px 0 rgba(0,0,0,.1);
}
`
const Image = styled('img')`
  width: 150px;
  height: 150px;
  object-fit: contain;
`
const Title = styled('h3')`
  font-size: 16px;
  font-weight: normal;
  color: #19191D;
  margin-top: 12px;
`
const Price = styled('h3')`
  font-size: 24px;
  color: #19191D;
  margin-top: 12px;
`
type Props={
  product:ShoppingData,
  addToBasket:(id:number)=>void
}
const ShopInfo:FC<Props> = ({product,addToBasket})=>{
 

    return(
        <>
        <Box>
            <Image src={product.image}></Image>
            <Title>{product.title} </Title>
            <Price>{product.price}$</Price>
          
            {/* <Button onClick={()=>addToBasket(product.id )}>Add to Basket</Button> */}

        </Box>
        </>
    )
}
export default ShopInfo
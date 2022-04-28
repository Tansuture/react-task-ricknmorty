import {BasketData} from './types'

export const saveDataToBasket = (basket:BasketData[])=>{

const data = JSON.stringify(basket)
localStorage.setItem('basket',data)
}
export const loadBasket = ():BasketData[] | undefined=>{
    try {
        const  data = localStorage.getItem('basket');
        if (data === null) {
          return undefined;
        }
        return JSON.parse(data);
      } catch (err) {
        return undefined;
      }
}
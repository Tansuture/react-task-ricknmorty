

export const saveDataToBasket = (basket)=>{

const data = JSON.stringify(basket)
localStorage.setItem('basket',data)
}
export const loadBasket = ()=>{
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
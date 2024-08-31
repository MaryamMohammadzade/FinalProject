import React from 'react'
import { useBasket } from '../../store/basket'
import BasketItem from './BasketItem';

const Basket = () => {
  const { items, invoice, actions } = useBasket((state) => state);

  return (
    <div className='justify-center'>
      <span className='font-bold'>Total price: </span>
      <span>{invoice.total} $</span>
      {
        items
          .filter(item => item.quantity > 0) 
          .map((item, i) => {
            return <BasketItem key={i} product={item} remove={actions.removeItem} />;
          })
      }
    </div>
  )
}

export default Basket;
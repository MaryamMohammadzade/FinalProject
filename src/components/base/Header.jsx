import { NavLink } from 'react-router-dom'
import { useBasket } from '../../store/basket';
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const { items } = useBasket((state) => state)
  let totalBasket = 0;
  for (let i = 0; i < items.length; i++) {
    totalBasket = totalBasket + items[i].quantity
  }
  var url = require('../../img/1.png');

  return (
    <header className='p-2 bg-gray-50 mb-2 flex justify-between items-center text-lg font-bold text-gray-700'>
      <div className='flex items-center'>
        <img className="h-20 m-0" src={url} alt='logo' />
        <div className='h-10 flex items-center gap-4 px-4'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/">Categories</NavLink>
          <NavLink to="/">Delivery</NavLink>
          <NavLink to="/">About us</NavLink>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <NavLink className="flex items-center gap-1" to="/"><VscAccount />Account</NavLink>
        <NavLink className="flex items-center gap-1" to="/basket"><FiShoppingCart />Basket: {totalBasket}</NavLink>
      </div>
    </header>
  )
}

export default Header

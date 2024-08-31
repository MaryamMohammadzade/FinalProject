import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import CartModal from '../modals/cart/CartModal';

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const url = require('../../assets/img/1.png');

  return (
    <header className="bg-gray-50 p-2 mb-2">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
          <img className="h-12 w-auto" src={url} alt="logo" />
        </div>
        <div className="block font-bold lg:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-gray-900 hover:border-gray-900"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${menuOpen ? '' : 'hidden'}`}>
          <div className="text-xl font-bold lg:flex-grow">
            <NavLink 
              to="/home" 
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900 mr-4"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/home/products" 
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900 mr-4"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink 
              to="/home/basket" 
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Basket
            </NavLink>
          </div>
          <div className="flex text-xl font-bold items-center">
            <NavLink 
              to="/" 
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 mt-4 lg:mt-0"
              onClick={() => setMenuOpen(false)}
            >
              <VscAccount className="text-xl" />
              <span >Account</span>
            </NavLink>
            <div 
              className="cursor-pointer flex items-center gap-1 text-gray-600 hover:text-gray-900 mt-4 lg:mt-0 ml-4"
              onClick={() => {
                setIsOpen(true);
                setMenuOpen(false);
              }}
            >
              <FiShoppingCart className="text-xl" />
              <span>Basket</span>
            </div>
            {isOpen && <CartModal onClose={() => setIsOpen(false)} />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
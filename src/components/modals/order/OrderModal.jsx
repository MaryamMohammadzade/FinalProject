import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { RiCloseFill } from 'react-icons/ri';
import { FiShoppingCart } from 'react-icons/fi';  
import ProductDetails from '../ProductDetails';
import Counter from './Counter';
import { useBasket } from '../../../store/basket';
import SizeBtn from './SizeBtn';
import DeliveryInfo from './DeliveryInfo';
import { BsTruck } from "react-icons/bs";
import { GoShieldSlash } from "react-icons/go";

const OrderModal = ({ data, onClose }) => {
 const {price, id} = data;
  const [count, setCount] = useState(1);
  const orderRef = useRef();
  const closeOrder = (e) => {
    if (orderRef.current === e.target) {
      onClose();
    }
  };
  const {items, actions } = useBasket((state) => state);
/*   const isInBasket = items.some((item) => item.id === id);
  if(isInBasket) 
    {
      const { quantity } = data;
      setCount(quantity);
    }  */
  return ReactDOM.createPortal(
    <div
      ref={orderRef}
      onClick={closeOrder}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-row-reverse"
    >
      <div className="flex flex-col p-6 bg-slate-50 m-6 rounded-2xl w-full max-w-md">
        <button
          onClick={onClose}
          className="bg-gray-200 rounded-full p-2 text-black text-xl place-self-end"
        >
          <RiCloseFill />
        </button>

        <div className="flex flex-col justify-between flex-grow">

          <div className="flex flex-col gap-4 mb-6">
            <ProductDetails data={data} />
            <Counter
              count={count}
              add={() => setCount(count + 1)}
              remove={() => {count>0 && setCount(count - 1) && actions.removeItem(data) }}
            />
            <div className="flex gap-2">
              <SizeBtn title="s" />
              <SizeBtn title="m" />
              <SizeBtn title="l" />
              <SizeBtn title="xl" />
              <SizeBtn title="xxl" />
            </div>
          </div>

        
          <div className="flex flex-col gap-4">
            <DeliveryInfo icon={<BsTruck />} title='DeliveryLimit' info='Free delivery within 50km' /> 
            <DeliveryInfo icon={<GoShieldSlash />} title='ReturnPolicy' info=' with-in 5days of product delivery'  />

            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-3">
                <button
                  className="rounded-full border-2 px-3 py-1 border-orange-400 text-orange-500 transition-transform duration-200 ease-in-out transform hover:scale-105"
                  onClick={() => actions.addItem(data, count)}
                >
                  Add to cart
                </button>
                <button
                  className="rounded-full border-2 px-3 py-1 text-gray-500 transition-transform duration-200 ease-in-out transform hover:scale-105"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
              <div className='flex text-gray-500 gap-2'>
                <FiShoppingCart className=" cursor-pointer text-xl transition-transform duration-200 ease-in-out transform hover:scale-110" />
                <span>{count*price} $</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default OrderModal;
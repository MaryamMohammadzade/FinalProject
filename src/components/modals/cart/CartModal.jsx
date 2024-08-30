import React, { useRef} from 'react';
import ReactDOM from 'react-dom';
import { RiCloseFill } from 'react-icons/ri';
import { useBasket } from '../../../store/basket';
import DeliveryInfo from '../order/DeliveryInfo';
import { BsTruck } from "react-icons/bs";
import { GoShieldSlash } from "react-icons/go";
import CartItem from './CartItem';

const CartModal = ({ onClose }) => {
  const orderRef = useRef();
  const closeBasket = (e) => {
    if (orderRef.current === e.target) {
      onClose();
    }
  };
  const { items, invoice, actions }=useBasket ((state)=> state);
  let totalBasket = 0;
  for (let i = 0; i < items.length; i++) {
    totalBasket = totalBasket + items[i].quantity;
  }
  return ReactDOM.createPortal(
    <div
      ref={orderRef}
      onClick={closeBasket}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="flex flex-col p-6 bg-slate-50 m-6 rounded-2xl ">
        <button
          onClick={onClose}
          className="bg-gray-200 mb-3 rounded-full p-2 text-black text-xl place-self-end"
        >
          <RiCloseFill />
        </button>

        <div className='flex gap-3 text-gray-700'>
          <div className='flex flex-col flex-grow gap-3'>
          <div className='border border-gray-400 rounded-md p-2'>
            <h5 className=' text-2xl font-semibold mb-5'>Cart Details</h5>
            {
               items.map((item, i)=>{
               return <CartItem key={i} product={item} remove={actions.removeItem}/>;
               })
             }
          </div>
          <div className='flex justify-between border border-gray-400 rounded-md p-3 flex-grow'>
            <div className='flex flex-col gap-3 justify-between'>
                 <h5 className=' text-2xl font-semibold '>Delivery Information</h5>
                 <p>Wade  John Smith</p>
                 <p className='line-clamp-2'> New Zealand - 2nd Cross raod - Po 25698 United States</p>
            </div>
            <button
              className="rounded-full border-2 p-2 w-20 h-6 flex justify-center items-center border-orange-400 text-orange-500 transition-transform duration-200 ease-in-out transform hover:scale-105"
             >
              Edit
              </button>
          </div>
          </div>

          <div className='border border-gray-400 rounded-md p-3 flex flex-col gap-9'>
            <div className='flex flex-col gap-2 '>
                <h5 className=' text-2xl font-semibold '>Order Summery</h5>
                <div>
                    <h5 className='font-bold text-sm'>Products added</h5>
                    <span>{totalBasket}</span>
                </div>
                <div>
                    <h5 className='font-bold text-sm'>GST</h5>
                    <span>1.25%</span>
                </div>
                <div>
                    <h5 className='font-bold text-sm'>S-GST</h5>
                    <span>1.25%</span>
                </div>
                <div>
                    <h5 className='font-bold text-sm'>Total Cat Value</h5>
                    <span>{invoice.total}</span>
                </div>
                <div>
                    <h5 className='font-bold text-sm'>Discount</h5>
                    <span>7.5%</span>
                </div>
            </div>
            
             <div className="flex flex-col gap-4">
               <DeliveryInfo icon={<BsTruck />} title='DeliveryLimit' info='Free delivery within 50km' /> 
               <DeliveryInfo icon={<GoShieldSlash />} title='ReturnPolicy' info=' with-in 5days of product delivery'  />
             </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default CartModal;
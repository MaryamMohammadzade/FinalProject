import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Home from '../../pages/Home';
import ProductsList from '../../pages/ProductsList'
import NotFound from './NotFound';
import Basket from '../basket/Basket';
import OrderModal from '../modals/order/OrderModal';

const InnerRoutes = () => {
    const routeList = useRoutes([
        {
            path: "/",
            element: <Navigate to="/home" replace /> 
        },
        {
            path: "/home/order",
            element: <OrderModal />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/home/products",
            element: <ProductsList />
        },
        {
            path: "/home/basket",
            element: <Basket />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]);

    return (
        <div>{routeList}</div>
    )
}

export default InnerRoutes;

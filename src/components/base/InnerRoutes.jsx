import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../../pages/Home';
import ProductsList from '../../pages/ProductsList'
import NotFound  from './NotFound';
import Basket from '../basket/Basket';
const InnerRoutes = () => {
    const routeList= useRoutes([
        {
          path:"/",
          element:<Home />,
          children:[
            /* {
            index:true,
            element:<Home />
          }, */
          {
             path:"/products",
             element:<ProductsList />
           },
           {
            path:"/basket",
            element:<Basket/>
           },
           {
             path:"*",
             element:<NotFound />
           }]
       }])
  return (
    <div>{routeList}</div>
  )
}

export default InnerRoutes;
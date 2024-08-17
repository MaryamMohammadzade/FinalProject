import  React from 'react';
import { BrowserRouter } from 'react-router-dom';
import InnerRoutes from './components/base/InnerRoutes';

function App(){
  
  return(
    <div className=' bg-gray-50'>
      <BrowserRouter>
          <InnerRoutes />
      </BrowserRouter>
    </div>
)
}
export default App;
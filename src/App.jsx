import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import InnerRoutes from './components/base/InnerRoutes';
import Header from './components/base/Header';
import Footer from './components/base/Footer';
import HeaderBaner from './components/base/HeaderBaner';

function App() {
  return (
    <div className=' w-full h-screen bg-gray-50 relative'>
        <BrowserRouter >
          <HeaderBaner />
          <div className=' md:mx-28'>
            <header>
              <Header />
            </header>
            <InnerRoutes />
          </div>
          <footer className=''>
            <Footer />
          </footer>
        </BrowserRouter>
    </div>
  );
}
export default App;

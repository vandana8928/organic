import React from 'react'
import './App.css';

import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Home from './component/home';
import Brand from './component/Brand';
import Product from './component/Product';

const MainHome = () => {
  return (
    <div>
      {/* <Topbar/> */}
      <Home/>
      <About/>
      <Service />
      <Brand/>
      <Product/>
      <Contact/>
      {/* <Buttombar/> */}
    </div>
  )
}

export default MainHome

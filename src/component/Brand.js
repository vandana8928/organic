import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Brand = () => {

  
  useEffect(()=>{
    AOS.init({
      duration:3000
    });
      },[])
  return (
    <div className='container-fliud brand' style={{backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/03/20/39/85/1000_F_320398572_P4HHAy08qiRKI9b7GgsHDKy15qwgjlTy.jpg")'}}   data-aos="fade-up">
      <div className="container-fluid text-overlay">
        <h1>Services</h1>
        <p>This is some text overlaying the background image.</p>
      </div>
    </div>
  );
};

export default Brand;


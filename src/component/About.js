import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {
  useEffect(()=>{
AOS.init({
  duration:1000
});
  },[])
  return (
    <div className="container-fluid about-page" data-aos="fade-up">
      <div className="col-lg-6"data-aos="fade-right">
        <img
          src="https://kalbis.ac.id/wp-content/uploads/2020/12/contact_image.png"
          alt="gfghghdhg"
        ></img>
      </div>
      <div className="col-lg-6" data-aos="fade-left">
        <h1>About Us</h1>
        <p>
          our mission is simple to make organic and sustainable living
          accessible to everyone. We believe that by choosing organic products,
          individuals can make a positive impact on their health and the
          environment.
        </p>
        <p>
          
          Our goal is to inspire and empower individuals to embrace a lifestyle
          that prioritizes wellness, environmental conservation, and ethical
          consumerism.
        </p>
      </div>
    </div>
  );
};

export default About;

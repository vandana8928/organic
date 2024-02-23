import React, { useState,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Service = () => {
  // Define an array of objects representing your services

  useEffect(()=>{
    AOS.init({
      duration:3000
    });
      },[])
  const services = [
    {
      id: 1,
      title: "Fresh Produce Delivery",
      description: "We offer convenient delivery services of fresh vegetables straight to your doorstep. Choose from a wide variety of locally sourced, organic, and seasonal produce.",
      imageUrl: "https://wallpapers.com/images/hd/vegetables-pictures-qs8trfk65nvldcyr.jpg"
    },
    {
      id: 2,
      title: "Customizable Subscription Boxes",
      description: "Tailor your vegetable deliveries to suit your needs with our customizable subscription boxes. Select your preferred veggies, quantities, and delivery frequency for a hassle-free experience.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWqspQsTMJCiZCWLooownyo9q4lvaBtobtL47GclVYZLibAyTXEwUHaUhG7SvPJybP_A&usqp=CAU"
    },
    {
      id: 3,
      title: "Farmers Market Stall",
      description: " Visit our farmers market stall to handpick your favorite vegetables. Meet local farmers, learn about seasonal produce.",
      imageUrl: "https://media.istockphoto.com/id/1203599923/photo/food-background-with-assortment-of-fresh-organic-vegetables.webp?b=1&s=170667a&w=0&k=20&c=fRNCED4dyey-i6K2RHTPaIm_HFLUr3hnj4J6WblHaXc="
    },
    {
        id: 3,
        title: "Educational Workshops",
        description: "Join us for educational workshops on sustainable farming practices, healthy cooking tips, and the benefits of incorporating more vegetables into your diet. ",
        imageUrl: "https://t4.ftcdn.net/jpg/01/91/27/77/240_F_191277716_tRLBK7L3YqmILp2MOxYjbrrkGw1v50Ho.jpg"
      },
      {
        id: 3,
        title: "Special Events Catering",
        description: "Make your special occasions memorable with our vegetable-centric catering services. Whether you're planning a wedding, birthday party, or corporate event.",
        imageUrl: "https://as2.ftcdn.net/v2/jpg/01/91/27/77/1000_F_191277716_tRLBK7L3YqmILp2MOxYjbrrkGw1v50Ho.jpg"
      },
      {
        id: 3,
        title: "Recipe Suggestions ",
        description: "Explore new culinary horizons with our collection of delicious vegetable-based recipes. From quick and easy meals to gourmet delights, we provide inspiration for every occasion. ",
        imageUrl: "https://as1.ftcdn.net/v2/jpg/01/47/51/60/1000_F_147516063_hCXI8VUIdBYud0B0hhS3Yo5CFTT1a4g8.jpg"
      },
    // Add more service objects as needed
  ];

  
   // State to manage expanded description
   const [expandedDescriptions, setExpandedDescriptions] = useState([]);

   // Function to toggle the expanded state of a description
   const toggleDescription = (id) => {
     if (expandedDescriptions.includes(id)) {
       setExpandedDescriptions(expandedDescriptions.filter(item => item !== id));
     } else {
       setExpandedDescriptions([...expandedDescriptions, id]);
     }
   };

  return (
    <div className="container service-sec " data-aos="fade-up">
      <h1>Services</h1>
      <div className="row" data-aos="fade-left">
        {services.map(service => (
          <div className="col-md-4" key={service.id}>
            <div className="card">
              <img src={service.imageUrl} className="card-img-top" alt="Service" />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{expandedDescriptions.includes(service.id) ? service.description : service.description.slice(0, 100)}</p>
                {service.description.length > 100 &&
                  <button className="btn" onClick={() => toggleDescription(service.id)}>
                    {expandedDescriptions.includes(service.id) ? "Read Less" : "Read More"}
                  </button>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

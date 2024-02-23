import React from "react";

const home = () => {
  return (
    <div className="home">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fresh Harvest Hub</h5>
              <p>
              Your Gateway to Locally Sourced, Farm-Fresh Delights.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.thequint.com/thequint/2020-02/8b12865d-24e8-4d7a-9e48-580ff3f970df/Fruits_and_Vegetables_QuintFit.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Garden to Table Treasures</h5>
              <p>
              Discover Fresh Flavors Straight from Nature's Bounty.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images8.alphacoders.com/134/1348057.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Leafy Lifestyles</h5>
              <p>
              Cultivating Health and Wellness Through Green Cuisine.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default home;

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Buttombar = () => {
  return (
    <div className="container-fluid footer">
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to="/MainHome">
                      <img
                        src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-100-organic-eco-label-with-leave-png-image_5682683.png"
                        className="img-fluid"
                        alt="logo"
                        style={{ maxHeight: "70px" }} // Inline CSS for maximum height
                      />
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p>
                    SNDT WOMEN'S UNIVERSITY, 1, Nathibai Thackersey Rd, New Marine Lines, Churchgate, Mumbai, Maharashtra 400020
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="https://www.facebook.com/">
                      <FaFacebookF className="facebook-bg" />
                      
                    </a>
                    <a href="https://twitter.com/home">
                      <FaTwitter className="twitter-bg" />
                     
                    </a>
                    <a href="https://www.google.co.in/">
                      <FaGooglePlusG className="google-bg" />
                     
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Buttombar;

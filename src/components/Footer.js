import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          {/* Column 1: Restaurant Brand */}
          <div className="col-md-4">
            <h3
              className="text-white mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              TASTE<span className="text-orange">.</span>
            </h3>
            <p className="text-white-50 small">
              Crafting premium dining culinary experiences that linger in
              memory. Join us for a modern gastronomic adventure crafted with
              fresh ingredients and master techniques.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a
                href="#"
                className="text-white text-decoration-none bg-olive p-2 rounded-circle d-inline-flex justify-content-center align-items-center"
                style={{ width: "36px", height: "36px" }}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#"
                className="text-white text-decoration-none bg-olive p-2 rounded-circle d-inline-flex justify-content-center align-items-center"
                style={{ width: "36px", height: "36px" }}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#"
                className="text-white text-decoration-none bg-olive p-2 rounded-circle d-inline-flex justify-content-center align-items-center"
                style={{ width: "36px", height: "36px" }}
              >
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-2">
            <h5 className="text-orange mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white-50 text-decoration-none hover-orange transition-all"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/menu"
                  className="text-white-50 text-decoration-none hover-orange transition-all"
                >
                  Our Menu
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-white-50 text-decoration-none hover-orange transition-all"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/reservation"
                  className="text-white-50 text-decoration-none hover-orange transition-all"
                >
                  Book Table
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div className="col-md-3">
            <h5 className="text-orange mb-3">Opening Hours</h5>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-2 d-flex justify-content-between">
                <span>Mon - Thu:</span>{" "}
                <span className="text-white">11:30 AM - 10:00 PM</span>
              </li>
              <li className="mb-2 d-flex justify-content-between">
                <span>Fri - Sat:</span>{" "}
                <span className="text-white">11:30 AM - 11:30 PM</span>
              </li>
              <li className="mb-2 d-flex justify-content-between">
                <span>Sunday:</span>{" "}
                <span className="text-white">12:00 PM - 09:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="col-md-3">
            <h5 className="text-orange mb-3">Contact Details</h5>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-geo-alt-fill text-olive me-2"></i>
                <span className="text-white">
                  123 Culinary Blvd, Taste City
                </span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-telephone-fill text-olive me-2"></i>
                <span className="text-white">+1 (555) 987-6543</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-envelope-fill text-olive me-2"></i>
                <span className="text-white">dine@taste-restaurant.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-secondary" />
        <div className="row">
          <div className="col-md-12 text-center text-white-50 small">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Taste Restaurant. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

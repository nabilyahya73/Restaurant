import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ title, subtitle, bgImage, showCtas = true }) => {
  return (
    <div
      className="position-relative overflow-hidden bg-dark text-white d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "75vh",
      }}
    >
      {/* Background Dimming Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>

      <div className="container position-relative text-center z-index-1 px-3 py-5">
        <p
          className="text-uppercase tracking-wider text-orange mb-2 fw-bold"
          style={{ letterSpacing: "4px" }}
        >
          Welcome to Taste
        </p>
        <h1
          className="display-2 fw-extrabold mb-3 text-white"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
          }}
        >
          {title}
        </h1>
        <p
          className="lead fs-4 text-light mx-auto mb-5"
          style={{ maxWidth: "650px" }}
        >
          {subtitle}
        </p>

        {showCtas && (
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link
              to="/menu"
              className="btn btn-taste-orange px-5 py-3 rounded-pill fs-5 shadow"
            >
              Explore Our Menu
            </Link>
            <Link
              to="/reservation"
              className="btn btn-outline-light border-2 px-5 py-3 rounded-pill fs-5"
            >
              Book a Table
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ foodItem }) => {
  const { name, description, price, image } = foodItem;

  return (
    <div className="card h-100 food-card bg-white shadow-sm border-0">
      <div
        className="position-relative"
        style={{ height: "220px", overflow: "hidden" }}
      >
        <img
          src={image}
          className="card-img-top w-100 h-100 object-fit-cover"
          alt={name}
        />
        {/* Floating Price Badge */}
        <span
          className="position-absolute top-3 end-3 bg-orange text-white px-3 py-2 rounded-pill fw-bold shadow-sm"
          style={{ top: "15px", right: "15px" }}
        >
          ${price.toFixed(2)}
        </span>
      </div>
      <div className="card-body d-flex flex-column p-4">
        <h4
          className="card-title fw-bold text-olive mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {name}
        </h4>
        <p className="card-text text-muted flex-grow-1 small leading-relaxed">
          {description}
        </p>
        <div className="mt-3">
          <Link
            to="/reservation"
            className="btn btn-taste-olive w-100 py-2 rounded-pill"
          >
            Order & Dine In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

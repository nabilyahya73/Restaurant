import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import FoodCard from "../components/FoodCard";
import { menuData } from "../data/menuData";

const Home = () => {
  // Extract featured menu items for display on home
  const featuredDishes = menuData.filter((item) => item.featured);

  return (
    <div>
      {/* 1. Hero Module */}
      <Hero
        title="Modern Gastronomy Meets Elegant Hospitality"
        subtitle="Experience hand-crafted, artisan dishes with exquisite premium flavors designed to deliver unforgettable culinary highlights."
        bgImage="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1600"
      />

      {/* 2. Why Choose Us Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <SectionTitle
            title="Our Recipe For Excellence"
            subtitle="The Taste Standard"
          />
          <div className="row g-4 mt-2">
            <div className="col-md-4 text-center">
              <div className="feature-icon-wrapper">
                <i className="bi bi-flower1 fs-3"></i>
              </div>
              <h4 className="fw-bold mb-3 text-olive">Fresh Ingredients</h4>
              <p className="text-muted px-3">
                All ingredients are sourced fresh daily from local sustainable
                farms to ensure seasonal vibrancy in every single bite.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon-wrapper">
                <i className="bi bi-patch-check fs-3"></i>
              </div>
              <h4 className="fw-bold mb-3 text-olive">Artisan Chefs</h4>
              <p className="text-muted px-3">
                Our culinary team boasts decades of combined premium experience
                in Michelin-recognized fine dining kitchens.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon-wrapper">
                <i className="bi bi-cup-hot fs-3"></i>
              </div>
              <h4 className="fw-bold mb-3 text-olive">Excellent Service</h4>
              <p className="text-muted px-3">
                We design environments that are elegant yet warm, promising
                personalized attention for a seamless table service experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Dishes Grid */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <SectionTitle title="From Our Kitchen" subtitle="House Favorites" />
          <div className="row g-4 mt-1">
            {featuredDishes.map((dish) => (
              <div className="col-12 col-md-6 col-lg-4" key={dish.id}>
                <FoodCard foodItem={dish} />
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link
              to="/menu"
              className="btn btn-taste-olive px-5 py-3 rounded-pill fw-bold"
            >
              View Full Exquisite Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Customer Testimonials */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <SectionTitle title="What Our Guests Say" subtitle="Testimonials" />
          <div className="row g-4 mt-2">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 text-center bg-light">
                <div className="text-warning mb-3">
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="fst-italic text-muted leading-relaxed mb-4">
                  "The Truffle Tagliatelle was sensory art. Elegant environment,
                  perfectly warm host team, and unmatched attention to detail.
                  This is now our regular weekend spot!"
                </p>
                <h6 className="fw-bold text-olive mb-0">Sophia Martinez</h6>
                <small className="text-muted">
                  Food Critic, Gourmet Weekly
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 text-center bg-light">
                <div className="text-warning mb-3">
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="fst-italic text-muted leading-relaxed mb-4">
                  "Truly impressive wine pairings and perfectly executed lamb.
                  The rosemary aroma fills the plate. Easily the top dining
                  space in the city right now."
                </p>
                <h6 className="fw-bold text-olive mb-0">Marcus Vance</h6>
                <small className="text-muted">Connoisseur</small>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card h-100 border-0 shadow-sm p-4 text-center bg-light">
                <div className="text-warning mb-3">
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="fst-italic text-muted leading-relaxed mb-4">
                  "The signature mocktails were as carefully designed as the
                  entrees. The staff treated us with such warm, authentic
                  hospitality. Simply wonderful."
                </p>
                <h6 className="fw-bold text-olive mb-0">Elena Rostova</h6>
                <small className="text-muted">Gourmand Lover</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Booking Banner Section */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(85, 107, 47, 0.92), rgba(85, 107, 47, 0.92)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-4">
          <h2
            className="display-4 fw-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Embark on a Culinary Journey?
          </h2>
          <p
            className="lead mb-4 max-width-md mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Table reservations are highly recommended. Secure your seating to
            enjoy premium, handcrafted taste creations tonight.
          </p>
          <Link
            to="/reservation"
            className="btn btn-taste-orange btn-lg px-5 py-3 rounded-pill"
          >
            Reserve Your Table Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div>
      <Hero
        title="Our Heritage & Philosophy"
        subtitle="Bringing elegant dining visions and locally sourced artisan meals together under one roof."
        bgImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600"
        showCtas={false}
      />

      {/* The Story & Vision Block */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="text-orange fw-bold text-uppercase small">
                Since 2018
              </span>
              <h2
                className="display-5 fw-bold text-olive mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Crafting Culinary Experiences
              </h2>
              <p className="text-muted leading-relaxed mb-3">
                Taste Restaurant was born out of a profound passion for culinary
                excellence and premium community engagement. Nestled in the
                heart of the culinary district, we strive to serve more than
                just standard meals.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                We craft comprehensive culinary sensory pathways. Every season,
                our kitchen reinterprets timeless classic Mediterranean and
                global gourmet templates into clean, vibrant, modern structures.
              </p>
              <div className="row g-3 text-start">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-orange"></i>
                    <span className="fw-bold">100% Organic Sourcing</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-orange"></i>
                    <span className="fw-bold">Michelin Star Trained Chefs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-8">
                  <img
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600"
                    className="img-fluid rounded-3 shadow"
                    alt="Kitchen Prep"
                  />
                </div>
                <div className="col-4">
                  <img
                    src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600"
                    className="img-fluid rounded-3 shadow h-100 object-fit-cover"
                    alt="Wine Collection"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with warm background overlay */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#556B2F" }}
      >
        <div className="container py-4 text-center">
          <div className="row g-4">
            <div className="col-6 col-md-3">
              <h2 className="display-4 fw-bold">8+</h2>
              <p className="text-light-50 mb-0">Years of Heritage</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-4 fw-bold">45+</h2>
              <p className="text-light-50 mb-0">Artisan Dishes</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-4 fw-bold">30k+</h2>
              <p className="text-light-50 mb-0">Happy Diners</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-4 fw-bold">5</h2>
              <p className="text-light-50 mb-0">Culinary Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Profile Segment */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <SectionTitle
            title="The Masters Behind Taste"
            subtitle="Meet Our Team"
          />
          <div className="row align-items-center g-5 mt-2">
            <div className="col-lg-5">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600"
                className="img-fluid rounded-3 shadow-lg w-100"
                alt="Executive Chef"
              />
            </div>
            <div className="col-lg-7">
              <h3
                className="fw-bold text-olive mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Chef Antonio Vance
              </h3>
              <p className="text-orange fw-bold mb-3">
                Executive Chef / Founder
              </p>
              <p className="text-muted leading-relaxed">
                Antonio spent years cultivating and fine-tuning classic
                gastronomy inside the most high-performing kitchens of Rome and
                Paris. His plating reflects structural balance, and his
                ingredient combinations focus on highlighting organic, honest
                components.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                "Our philosophy is straightforward: treat food with deep
                structural respect. When you source beautifully grown local
                plants and meats, your job as a chef is to elegantly amplify
                their inherent natural perfection."
              </p>
              <Link
                to="/reservation"
                className="btn btn-taste-orange px-4 py-2 rounded-pill"
              >
                Experience His Cuisine
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React, { useState } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import FoodCard from "../components/FoodCard";
import { menuData } from "../context/foodContext";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter dynamic helper
  const filteredDishes =
    activeCategory === "all"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  const categories = [
    { key: "all", label: "All Dishes" },
    { key: "starters", label: "Starters" },
    { key: "mains", label: "Main Dishes" },
    { key: "desserts", label: "Desserts" },
    { key: "drinks", label: "Drinks" },
  ];

  return (
    <div>
      <Hero
        title="Our Culinary Portfolio"
        subtitle="A seasonal selection of premium, hand-crafted food items created with authentic techniques."
        bgImage="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600"
        showCtas={false}
      />

      <section className="py-5">
        <div className="container py-2">
          <SectionTitle
            title="Discover our Culinary Art"
            subtitle="Gourmet Selections"
          />

          {/* Filtering Tabs */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`btn px-4 py-2 rounded-pill fw-bold transition-all ${
                  activeCategory === category.key
                    ? "btn-taste-orange shadow-sm"
                    : "btn-outline-secondary"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Responsive Food Card Grid */}
          <div className="row g-4">
            {filteredDishes.map((dish) => (
              <div className="col-12 col-md-6 col-lg-4" key={dish.id}>
                <FoodCard foodItem={dish} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;

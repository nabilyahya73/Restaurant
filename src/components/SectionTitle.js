import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center my-5">
      {subtitle && (
        <p className="text-uppercase tracking-wider text-olive mb-1 fw-bold">
          {subtitle}
        </p>
      )}
      <h2
        className="display-5 fw-bold"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      <div
        className="mx-auto rounded-pill mt-2"
        style={{ width: "80px", height: "4px", backgroundColor: "#E67E22" }}
      ></div>
    </div>
  );
};

export default SectionTitle;

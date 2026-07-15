import React, { useState } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      <Hero
        title="Get In Touch"
        subtitle="Have a question or looking to set up custom events? Contact our customer desk instantly."
        bgImage="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1600"
        showCtas={false}
      />

      <section className="py-5">
        <div className="container py-2">
          <SectionTitle
            title="We Love To Hear From You"
            subtitle="Connect with Us"
          />

          <div className="row g-5 mt-3">
            {/* Contact Details Left Col */}
            <div className="col-lg-5">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h3
                  className="fw-bold text-olive mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Contact Information
                </h3>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="bg-orange text-white p-2 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Our Location</h6>
                    <p className="text-muted small mb-0">
                      123 Culinary Blvd, Taste City, TC 94211
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="bg-orange text-white p-2 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Phone Number</h6>
                    <p className="text-muted small mb-0">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="bg-orange text-white p-2 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Email Inquiry</h6>
                    <p className="text-muted small mb-0">
                      dine@taste-restaurant.com
                    </p>
                  </div>
                </div>

                <hr className="my-4" />

                <h5 className="fw-bold text-olive mb-3">Follow Along</h5>
                <div className="d-flex gap-3">
                  <Link
                    href="#"
                    className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="bi bi-twitter-x"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Direct Message Form Right Col */}
            <div className="col-lg-7">
              <div className="bg-white p-4 p-md-5 rounded shadow-sm h-100">
                <h3
                  className="fw-bold text-olive mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send a Direct Message
                </h3>

                {formSubmitted ? (
                  <div className="alert alert-success p-4 rounded text-center">
                    <i className="bi bi-check-circle-fill display-5 text-success mb-2 d-block"></i>
                    <h5 className="fw-bold">Your message has been sent!</h5>
                    <p className="small text-muted mb-0">
                      We typically reply within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-bold">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control py-2"
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-bold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control py-2"
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-bold">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control py-2"
                          required
                          placeholder="Catering Event, Feedback, etc."
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-bold">
                          Message
                        </label>
                        <textarea
                          rows="5"
                          className="form-control"
                          required
                          placeholder="Type your message here..."
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-taste-olive px-4 py-3 w-100 rounded"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map Grid Block */}
          <div className="row mt-5">
            <div className="col-12">
              <div
                className="card border-0 shadow-sm overflow-hidden"
                style={{ height: "350px" }}
              >
                {/* Embed placeholder or generic styled Map frame */}
                <iframe
                  title="Taste Restaurant Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.428238125134!2d-73.98742868428686!3d40.751261979328224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

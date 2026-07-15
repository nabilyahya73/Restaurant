import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { useBookings } from "../context/BookingContext"; // Import the context hook

const Reservation = () => {
  const { addBooking } = useBookings(); // Retrieve the booking action from Context

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "18:00",
    requests: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      setValidated(true);

      // Save data globally using context (saves to State + LocalStorage)
      addBooking(formData);
      setSubmitted(true);
    }
  };

  return (
    <div>
      <Hero
        title="Reserve Your Experience"
        subtitle="Plan your modern dining evening with us. We reserve spaces ahead for ultimate dining experiences."
        bgImage="https://images.unsplash.com/photo-1428515613728-6b4607e44363?auto=format&fit=crop&q=80&w=1600"
        showCtas={false}
      />

      <section className="py-5 bg-white">
        <div className="container py-3">
          <SectionTitle
            title="Book Your Dining Seating"
            subtitle="Reservations"
          />

          <div className="row justify-content-center mt-4">
            <div className="col-lg-8">
              {submitted ? (
                <div className="card border-0 shadow-lg p-5 text-center bg-light">
                  <div className="display-3 text-success mb-4">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <h3 className="fw-bold text-olive">Reservation Confirmed!</h3>
                  <p className="text-muted my-3 px-md-5">
                    Thank you, <strong>{formData.name}</strong>. We have
                    securely booked table space for{" "}
                    <strong>{formData.guests} guests</strong> on{" "}
                    <strong>{formData.date}</strong> at{" "}
                    <strong>{formData.time}</strong>.
                  </p>
                  <p className="text-muted small mb-4">
                    A confirmation email outlining details and location links
                    has been sent to <strong>{formData.email}</strong>. We look
                    forward to hosting you.
                  </p>

                  {/* Updated Action Buttons to Route or Reset */}
                  <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setValidated(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          guests: "2",
                          date: "",
                          time: "18:00",
                          requests: "",
                        });
                      }}
                      className="btn btn-outline-secondary px-4 py-2 rounded-pill"
                    >
                      Make Another Booking
                    </button>
                    <Link
                      to="/bookings"
                      className="btn btn-taste-orange px-4 py-2 rounded-pill text-decoration-none text-white fw-bold"
                    >
                      View All Bookings
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="card border-0 shadow p-4 p-md-5 bg-light">
                  <form
                    className={`needs-validation ${validated ? "was-validated" : ""}`}
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <div className="row g-4">
                      {/* Guest Name */}
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-olive">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control py-3"
                          placeholder="Sophia Martinez"
                          required
                        />
                        <div className="invalid-feedback">
                          Please tell us your name.
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-olive">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control py-3"
                          placeholder="sophia@example.com"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email.
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-olive">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control py-3"
                          placeholder="(555) 000-0000"
                          required
                        />
                        <div className="invalid-feedback">
                          Please supply a phone number.
                        </div>
                      </div>

                      {/* Guests Amount */}
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-olive">
                          Number of Guests *
                        </label>
                        <select
                          className="form-select py-3"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6">6+ (Large Group)</option>
                        </select>
                      </div>

                      {/* Date */}
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-olive">
                          Select Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="form-control py-3"
                          required
                        />
                        <div className="invalid-feedback">
                          Please select a valid dining date.
                        </div>
                      </div>

                      {/* Time Slot Selection */}
                      <div className="col-md-6">
                        <label className="form-label fw-bold small text-olive">
                          Select Dining Time *
                        </label>
                        <select
                          className="form-select py-3"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        >
                          <option value="11:30">11:30 AM (Lunch)</option>
                          <option value="13:00">01:00 PM (Lunch)</option>
                          <option value="17:00">05:00 PM (Dinner)</option>
                          <option value="18:30">06:30 PM (Dinner)</option>
                          <option value="20:00">08:00 PM (Dinner)</option>
                          <option value="21:30">09:30 PM (Dinner)</option>
                        </select>
                      </div>

                      {/* Custom Special Requests */}
                      <div className="col-12">
                        <label className="form-label fw-bold small text-olive">
                          Special Dietary / Seating Requests
                        </label>
                        <textarea
                          rows="4"
                          name="requests"
                          value={formData.requests}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Let us know if you have any allergies, birthdays, or specific window-seating requests."
                        ></textarea>
                      </div>

                      {/* Button Wrapper */}
                      <div className="col-12 text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-taste-orange px-5 py-3 rounded-pill fw-bold fs-5 shadow"
                        >
                          Confirm Seating Reservation
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;

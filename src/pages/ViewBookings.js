import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { useBookings } from "../context/BookingContext"; // Import Context

const ViewBookings = () => {
  const { bookings, cancelBooking } = useBookings(); // Grab bookings array and delete action

  const handleCancel = (id, guestName) => {
    if (
      window.confirm(
        `Are you sure you want to cancel the reservation for ${guestName}?`,
      )
    ) {
      cancelBooking(id);
    }
  };

  return (
    <div>
      <Hero
        title="Manage Reservations"
        subtitle="Review, audit, or cancel active table bookings at Taste Restaurant."
        bgImage="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1600"
        showCtas={false}
      />

      <section className="py-5 bg-white">
        <div className="container py-3">
          <SectionTitle title="Active Seating Ledgers" subtitle="Admin Panel" />

          <div className="row justify-content-center mt-4">
            <div className="col-xl-10">
              {bookings.length === 0 ? (
                <div className="text-center py-5 bg-light rounded shadow-sm">
                  <div className="display-1 text-muted mb-3">
                    <i className="bi bi-calendar-x"></i>
                  </div>
                  <h4 className="text-muted mb-3">
                    No bookings found in the ledger.
                  </h4>
                  <Link
                    to="/reservation"
                    className="btn btn-taste-orange px-4 py-2 rounded-pill fw-bold text-decoration-none"
                  >
                    Book a Table Now
                  </Link>
                </div>
              ) : (
                <div className="card border-0 shadow-sm overflow-hidden">
                  <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0 bg-white">
                      <thead className="bg-dark text-white">
                        <tr>
                          <th className="py-3 ps-4">Guest Information</th>
                          <th className="py-3">Date & Time</th>
                          <th className="py-3 text-center">Party Size</th>
                          <th className="py-3">Requests / Notes</th>
                          <th className="py-3">Status</th>
                          <th className="py-3 text-center pe-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((booking) => (
                          <tr key={booking.id}>
                            {/* Guest Info */}
                            <td className="ps-4 py-3">
                              <div className="fw-bold text-dark">
                                {booking.name}
                              </div>
                              <div className="text-muted small">
                                <i className="bi bi-envelope me-1"></i>
                                {booking.email} <br />
                                <i className="bi bi-telephone me-1"></i>
                                {booking.phone}
                              </div>
                            </td>

                            {/* Schedule */}
                            <td className="py-3">
                              <div className="fw-semibold text-olive">
                                {booking.date}
                              </div>
                              <span className="badge bg-light text-dark border mt-1">
                                {booking.time}
                              </span>
                            </td>

                            {/* Guest Count */}
                            <td className="py-3 text-center">
                              <span className="badge rounded-pill bg-dark px-3 py-2 fs-6">
                                {booking.guests}{" "}
                                {parseInt(booking.guests) === 1
                                  ? "Guest"
                                  : "Guests"}
                              </span>
                            </td>

                            {/* Custom Notes */}
                            <td
                              className="py-3 text-muted small"
                              style={{ maxWidth: "240px" }}
                            >
                              {booking.requests ? (
                                <span className="fst-italic">
                                  "{booking.requests}"
                                </span>
                              ) : (
                                <span className="text-muted opacity-50 fst-italic">
                                  None
                                </span>
                              )}
                            </td>

                            {/* Status */}
                            <td className="py-3">
                              <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded">
                                {booking.status || "Confirmed"}
                              </span>
                            </td>

                            {/* Delete Reservation Action */}
                            <td className="py-3 text-center pe-4">
                              <button
                                onClick={() =>
                                  handleCancel(booking.id, booking.name)
                                }
                                className="btn btn-outline-danger btn-sm rounded-pill px-3 fw-semibold"
                              >
                                <i className="bi bi-trash-fill me-1"></i> Cancel
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewBookings;

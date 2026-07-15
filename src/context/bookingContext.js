import React, { createContext, useContext, useState, useEffect } from "react";

// Initialize the React Context
const BookingContext = createContext();

// Seed data to make the app look lively on first load
const initialMockBookings = [
  {
    id: 101,
    name: "Sophia Martinez",
    email: "sophia@example.com",
    phone: "(555) 019-2834",
    guests: "2",
    date: "2026-07-20",
    time: "18:30",
    requests: "Anniversary dinner, window seat if possible please.",
    status: "Confirmed",
  },
  {
    id: 102,
    name: "Marcus Vance",
    email: "marcus.v@example.com",
    phone: "(555) 438-9201",
    guests: "4",
    date: "2026-07-22",
    time: "20:00",
    requests: "One guest is highly allergic to peanuts.",
    status: "Confirmed",
  },
];

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    // Lazy initialization from localStorage
    const savedBookings = localStorage.getItem("taste_bookings");
    return savedBookings ? JSON.parse(savedBookings) : initialMockBookings;
  });

  // Sync state changes with localStorage
  useEffect(() => {
    localStorage.setItem("taste_bookings", JSON.stringify(bookings));
  }, [bookings]);

  // Action: Add a new booking
  const addBooking = (newBooking) => {
    const bookingWithId = {
      ...newBooking,
      id: Date.now(), // Generate a unique timestamp ID
      status: "Confirmed",
    };
    setBookings((prevBookings) => [...prevBookings, bookingWithId]);
  };

  // Action: Cancel/Remove a booking by ID
  const cancelBooking = (id) => {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.id !== id),
    );
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

// Custom Hook for easier and cleaner consumption in functional components
export const useBookings = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookings must be used within a BookingProvider");
  }
  return context;
};

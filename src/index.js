import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { BookingProvider } from "./context/BookingContext"; // Import the Provider

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Provide global access to booking state */}
      <BookingProvider>
        <App />
      </BookingProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

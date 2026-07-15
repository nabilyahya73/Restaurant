import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Dynamic Nav bar standard layout element */}
      <Navbar />

      {/* Pages Router View switcher */}
      <main className="flex-shrink-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer Element */}
      <Footer />
    </div>
  );
}

export default App;

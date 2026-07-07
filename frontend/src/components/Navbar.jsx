import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-green-700 font-bold"
      : "hover:text-green-700";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-700"
        >
          🐐 SMG Goat Farming
        </Link>

        

        {/* Desktop Button */}
        <Link
          to="/booking"
          className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
        >
          Book Now
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col p-6 gap-5">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={isActive("/")}
            >
              Home
            </Link>

            <Link
              to="/goats"
              onClick={() => setMenuOpen(false)}
              className={isActive("/goats")}
            >
              Goats
            </Link>

            <Link
              to="/hens"
              onClick={() => setMenuOpen(false)}
              className={isActive("/hens")}
            >
              Natty Hens
            </Link>

            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className={isActive("/booking")}
            >
              Booking
            </Link>

            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="bg-green-700 text-white text-center py-3 rounded-lg"
            >
              Book Now
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserPlus, FaSignInAlt, FaRocket, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
        scrolled ? "bg-dark shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        
        <h1 className="text-3xl font-bold text-primary">MyBrand</h1>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

       
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex transition-all duration-300 bg-dark md:bg-transparent ${
            menuOpen ? "block" : "hidden"
          } md:flex-row flex-col items-center space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0`}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <button className="px-4 py-2 rounded-full bg-secondary text-white hover:bg-buttonHover transition flex items-center space-x-2">
              <FaUserPlus />
              <span>Inscription</span>
            </button>
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="px-4 py-2 rounded-full bg-primary text-white hover:bg-buttonHover transition flex items-center space-x-2">
              <FaSignInAlt />
              <span>Connexion</span>
            </button>
          </Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
            <button className="px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition flex items-center space-x-2">
              <FaHome />
              <span>Dashboard</span>
            </button>
          </Link>
          <Link to="/coming-soon" onClick={() => setMenuOpen(false)}>
            <button className="px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition flex items-center space-x-2">
              <FaRocket />
              <span>Coming Soon</span>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

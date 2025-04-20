import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => (
  <nav className="bg-gray-800 text-white px-4 py-2 flex gap-4">
    <Link to="/" className="hover:underline">Accueil</Link>
    <Link to="/config" className="hover:underline">Config</Link>
    {/* Ajoute d'autres liens au besoin */}
  </nav>
);

export default NavBar;

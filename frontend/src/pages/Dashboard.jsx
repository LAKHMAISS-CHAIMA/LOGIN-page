import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-textLight">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center text-gray-900 w-96">
        <FaUserCircle size={80} className="text-electricViolet mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Bienvenue 🎉</h1>
        <p className="text-lg mt-2">Vous êtes connecté !</p>

        <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

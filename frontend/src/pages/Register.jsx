import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "Le nom est requis.";
    if (!email.trim()) newErrors.email = "L'email est requis.";
    if (!password.trim()) newErrors.password = "Le mot de passe est requis.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
      alert("Inscription réussie !");
      navigate("/");
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      alert("Erreur lors de l'inscription");
    }
  };

  const handleOAuthLogin = (provider) => {
    window.location.href = `http://localhost:5000/api/auth/${provider}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-textLight">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">📝 Inscription</h1>

       
        <div className={`flex items-center p-3 rounded-lg mb-2 border ${errors.name ? "border-red-500" : "border-gray-300"}`}>
          <FaUser className="text-gray-500 mx-2" />
          <input
            className="w-full bg-transparent outline-none text-black"
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

   
        <div className={`flex items-center p-3 rounded-lg mb-2 border ${errors.email ? "border-red-500" : "border-gray-300"}`}>
          <FaEnvelope className="text-gray-500 mx-2" />
          <input
            className="w-full bg-transparent outline-none text-black"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

      
        <div className={`flex items-center p-3 rounded-lg mb-2 border ${errors.password ? "border-red-500" : "border-gray-300"}`}>
          <FaLock className="text-gray-500 mx-2" />
          <input
            className="w-full bg-transparent outline-none text-black"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}

      
        <button
          className="w-full bg-green-900 text-white py-2 rounded-lg shadow-md hover:opacity-90 transition mb-4 flex items-center justify-center"
          onClick={handleRegister}
        >
          <FaUser className="mr-2" /> Créer un compte
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-3 text-gray-500">OU</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <div className="flex flex-col space-y-2">
          <button
            className="w-full bg-red-500 text-white flex items-center justify-center py-2 rounded-lg shadow-md hover:opacity-90 transition"
            onClick={() => handleOAuthLogin("google")}
          >
            <FaGoogle className="mr-2" /> Continuer avec Google
          </button>

          <button
            className="w-full bg-gray-900 text-white flex items-center justify-center py-2 rounded-lg shadow-md hover:opacity-90 transition"
            onClick={() => handleOAuthLogin("github")}
          >
            <FaGithub className="mr-2" /> Continuer avec GitHub
          </button>

          <button
            className="w-full bg-blue-600 text-white flex items-center justify-center py-2 rounded-lg shadow-md hover:opacity-90 transition"
            onClick={() => handleOAuthLogin("facebook")}
          >
            <FaFacebook className="mr-2" /> Continuer avec Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

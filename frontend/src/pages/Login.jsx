import React, { useState } from "react";
import { FaUser, FaLock, FaExclamationCircle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    let validationErrors = {};
    if (!email) validationErrors.email = "⚠️ Veuillez entrer votre email.";
    if (!password) validationErrors.password = "⚠️ Veuillez entrer votre mot de passe.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Connexion réussie !");
      navigate("/dashboard");
    } catch (error) {
      setErrors({ general: "Email ou mot de passe incorrect" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-textLight">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-dark">🔑 Connexion</h1>

        <div className={`flex items-center p-3 rounded-lg mb-4 border ${errors.email ? "border-red-500" : "border-gray-300"}`}>
          <FaUser className={`mx-2 ${errors.email ? "text-red-500" : "text-gray-500"}`} />
          <input
            className="w-full bg-transparent outline-none text-gray-700"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: "" }); }}
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm flex items-center"><FaExclamationCircle className="mr-2" /> {errors.email}</p>}

        <div className={`flex items-center p-3 rounded-lg mb-4 border ${errors.password ? "border-red-500" : "border-gray-300"}`}>
          <FaLock className={`mx-2 ${errors.password ? "text-red-500" : "text-gray-500"}`} />
          <input
            className="w-full bg-transparent outline-none text-gray-700"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: "" }); }}
          />
        </div>
        {errors.password && <p className="text-red-500 text-sm flex items-center"><FaExclamationCircle className="mr-2" /> {errors.password}</p>}

        {errors.general && <p className="text-red-500 text-sm flex items-center mt-2"><FaExclamationCircle className="mr-2" /> {errors.general}</p>}

        <button className="w-full bg-primary text-white py-2 rounded-lg shadow-md hover:bg-buttonHover transition" onClick={handleLogin}>
          Se Connecter
        </button>
      </div>
    </div>
  );
};

export default Login;

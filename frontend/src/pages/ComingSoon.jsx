import React from "react";
import { FaClock } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-textLight">
      <FaClock size={80} className="mb-4 animate-bounce" />
      <h1 className="text-5xl font-bold"> Bientôt Disponible !</h1>
      <p className="text-lg mt-4 text-center">Nous préparons quelque chose d'incroyable. Restez connectés !</p>
    </div>
  );
};

export default ComingSoon;

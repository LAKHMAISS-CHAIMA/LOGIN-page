import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
      <h1 className="text-blue-600/100 dark:text-sky-400/100- font-bold text-5xl mb-7">Hi! Welcome to our site!</h1>
      
     
      <button
        onClick={() => {
          localStorage.removeItem('token'); 
          window.location.href = '/login'; 
        }}
        className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
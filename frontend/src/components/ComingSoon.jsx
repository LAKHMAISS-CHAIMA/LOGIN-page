import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg mb-8">Our e-commerce platform is under development. Stay tuned!</p>
      <form className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border rounded-l"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default ComingSoon;
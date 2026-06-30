import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-4 mt-8 w-full">
      <div className="max-w-[1600px] mx-auto px-6 flex flex-wrap items-center justify-between gap-4 md:gap-0">
        
        <div className="flex items-center gap-2">
          <span className="text-2xl">📘</span>
          <span className="text-sm font-semibold tracking-wider">Learn the Right Way</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-2xl text-blue-400">{'</>'}</span>
          <span className="text-sm font-semibold tracking-wider">Build Real Projects</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl text-yellow-500">📁</span>
          <span className="text-sm font-semibold tracking-wider">Create Your Portfolio</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl">👨‍💼</span>
          <span className="text-sm font-semibold tracking-wider">Get Job Ready</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="text-sm font-semibold tracking-wider">Build Your Dream Career</span>
        </div>

        <div className="bg-[#1e293b] p-3 rounded-lg border border-gray-600 flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wide">Your Journey Starts Here!</span>
            <span className="text-sm text-yellow-400 font-bold">Let's Build Your Future Together.</span>
          </div>
          <span className="text-3xl text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">🌟</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

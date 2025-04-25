
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-pink-200 via-white to-purple-200 opacity-90"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1929&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-md">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-purple-800">
            Изысканные десерты ручной работы
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Превращаем моменты в сладкие воспоминания. Наши десерты — это произведения искусства с неповторимым вкусом.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/catalog"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Заказать сейчас
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-lg bg-white text-purple-600 font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all transform hover:scale-105"
            >
              О нас
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

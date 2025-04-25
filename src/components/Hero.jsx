
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-50 to-purple-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Изысканные десерты <span className="text-purple-600">ручной работы</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Наслаждайтесь неповторимым вкусом наших кондитерских шедевров,
            созданных с любовью из натуральных ингредиентов
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/catalog"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors shadow-md"
            >
              Перейти в каталог
            </Link>
            <Link
              to="/special"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-pink-600 font-semibold rounded-lg border border-pink-200 transition-colors shadow-sm"
            >
              Специальные предложения
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=2000&auto=format&fit=crop"
            alt="Ассортимент десертов"
            className="rounded-lg shadow-xl z-10 relative max-w-md mx-auto"
          />
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-100 rounded-full opacity-70"></div>
          <div className="absolute -left-5 bottom-10 w-24 h-24 bg-purple-100 rounded-full opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

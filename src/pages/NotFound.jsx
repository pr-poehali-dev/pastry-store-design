
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-pink-50">
      <h1 className="text-6xl font-serif font-bold text-pink-600 mb-6">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Страница не найдена</p>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Кажется, этот десерт исчез из нашего меню. Возможно, его уже съели!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors shadow-md"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;

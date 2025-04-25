
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link to="/" className="flex items-center mr-4">
          <span className="text-2xl font-bold text-purple-600">🧁</span>
          <span className="ml-2 text-xl font-serif font-semibold text-purple-600">Сласти-Страсти</span>
        </Link>
        <nav className="mx-6 hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="text-gray-700 hover:text-purple-600 transition-colors">
                Каталог
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-pink-600 transition-colors">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-gray-700 hover:text-purple-600 transition-colors">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <span className="text-gray-700 hover:text-pink-600 transition-colors">🛒</span>
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

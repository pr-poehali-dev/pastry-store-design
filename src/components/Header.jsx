
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-pink-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 pb-2">
          <nav className="container mx-auto px-4">
            <ul className="space-y-2 py-2">
              <li>
                <Link 
                  to="/" 
                  className="block p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link 
                  to="/catalog" 
                  className="block p-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacts" 
                  className="block p-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

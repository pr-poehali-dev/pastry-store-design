
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-purple-600">🧁</span>
              <span className="ml-2 text-xl font-serif font-semibold text-purple-600">
                Сласти-Страсти
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Кондитерская с изысканными десертами ручной работы. Мы создаем сладкое настроение с 2010 года.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-colors"
              >
                <span>📱</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors"
              >
                <span>📸</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-colors"
              >
                <span>💬</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Каталог</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/catalog/cakes"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Торты
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog/macarons"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Макаруны
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog/eclairs"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Эклеры
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog/cheesecakes"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Чизкейки
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/delivery"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Вопросы и ответы
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span className="text-gray-600">
                  г. Москва, ул. Кондитерская, д. 123
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📞</span>
                <a
                  href="tel:+79001234567"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">✉️</span>
                <a
                  href="mailto:info@slasti-strasti.ru"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  info@slasti-strasti.ru
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">⏰</span>
                <span className="text-gray-600">
                  Пн-Вс: 9:00 - 21:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2023 Сласти-Страсти. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-pink-600">🧁</span>
              <span className="ml-2 text-xl font-serif font-semibold text-pink-600">
                Сласти-Страсти
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Кондитерские изделия ручной работы из натуральных ингредиентов.
              Доставляем радость с 2015 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">
                FB
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">
                IG
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">
                VK
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Категории</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/cakes" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Торты
                </Link>
              </li>
              <li>
                <Link to="/catalog/eclairs" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Эклеры
                </Link>
              </li>
              <li>
                <Link to="/catalog/macarons" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Макаруны
                </Link>
              </li>
              <li>
                <Link to="/catalog/pastries" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Пирожные
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Возврат и обмен
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Частые вопросы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Контакты</h3>
            <address className="not-italic">
              <p className="text-gray-600 mb-2">г. Москва, ул. Кондитерская, 123</p>
              <p className="text-gray-600 mb-2">
                <a href="tel:+74951234567" className="hover:text-pink-600 transition-colors">
                  +7 (495) 123-45-67
                </a>
              </p>
              <p className="text-gray-600 mb-4">
                <a href="mailto:info@slasti-strasti.ru" className="hover:text-pink-600 transition-colors">
                  info@slasti-strasti.ru
                </a>
              </p>
              <p className="text-gray-600">
                Ежедневно с 9:00 до 21:00
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© 2023 Сласти-Страсти. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

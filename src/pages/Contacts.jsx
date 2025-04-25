
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-serif font-bold mb-4 text-purple-800">
              Свяжитесь с нами
            </h1>
            <p className="max-w-2xl mx-auto text-gray-700">
              У вас есть вопросы или предложения? Мы всегда на связи и готовы помочь вам!
            </p>
          </div>
        </section>

        {/* Contact Information + Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6 text-purple-800">
                  Наши контакты
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mr-4">
                      📍
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-800">Адрес</h3>
                      <p className="text-gray-600">г. Москва, ул. Кондитерская, д. 123</p>
                      <p className="text-gray-600">г. Москва, ул. Сладкая, д. 45</p>
                      <p className="text-gray-600">г. Москва, ул. Десертная, д. 67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                      ✉️
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-800">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@slasti-strasti.ru" className="text-purple-600 hover:underline">
                          info@slasti-strasti.ru
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a href="mailto:zakaz@slasti-strasti.ru" className="text-purple-600 hover:underline">
                          zakaz@slasti-strasti.ru
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mr-4">
                      📞
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-800">Телефон</h3>
                      <p className="text-gray-600">
                        <a href="tel:+79001234567" className="text-purple-600 hover:underline">
                          +7 (900) 123-45-67
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a href="tel:+79009876543" className="text-purple-600 hover:underline">
                          +7 (900) 987-65-43
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                      ⏰
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-800">Время работы</h3>
                      <p className="text-gray-600">Понедельник — Пятница: 9:00 – 21:00</p>
                      <p className="text-gray-600">Суббота — Воскресенье: 10:00 – 20:00</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-serif font-bold mt-12 mb-6 text-purple-800">
                  Мы в социальных сетях
                </h2>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-colors"
                  >
                    📱
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors"
                  >
                    📸
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-colors"
                  >
                    💬
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors"
                  >
                    🎥
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6 text-purple-800">
                  Напишите нам
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                      Ваше имя
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                      placeholder="example@mail.ru"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
                      Телефон
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                      placeholder="+7 (900) 123-45-67"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-gray-700 font-medium">
                      Тема
                    </label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                    >
                      <option value="order">Заказ десертов</option>
                      <option value="feedback">Отзыв о продукции</option>
                      <option value="partnership">Сотрудничество</option>
                      <option value="question">Вопрос</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                      Сообщение
                    </label>
                    <textarea 
                      id="message" 
                      rows="4"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                      placeholder="Ваше сообщение..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      required
                      className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="privacy" className="ml-2 text-gray-700">
                      Я согласен на обработку персональных данных
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="px-6 py-3 w-full md:w-auto rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center text-purple-800">
              Как нас найти
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              {/* Здесь можно подключить карту */}
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Здесь будет карта с нашими магазинами</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;

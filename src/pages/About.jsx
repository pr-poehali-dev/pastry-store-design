
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Анна Петрова",
      position: "Шеф-кондитер",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote: "Я верю, что каждый десерт должен приносить радость и удивление."
    },
    {
      id: 2,
      name: "Михаил Иванов",
      position: "Основатель",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      quote: "Наша миссия — сделать каждый ваш день немного слаще."
    },
    {
      id: 3,
      name: "Екатерина Смирнова",
      position: "Кондитер-декоратор",
      image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      quote: "Для меня каждый десерт — это произведение искусства."
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Основание кондитерской",
      description: "Мы начали с маленькой кухни и большой мечты."
    },
    {
      year: "2014",
      title: "Первый магазин",
      description: "Открытие нашего первого магазина в центре города."
    },
    {
      year: "2017",
      title: "Расширение ассортимента",
      description: "Добавление макарунов и эклеров в наш ассортимент."
    },
    {
      year: "2020",
      title: "Запуск онлайн-заказов",
      description: "Начало работы нашего интернет-магазина."
    },
    {
      year: "2023",
      title: "Сеть магазинов",
      description: "Открытие третьего магазина и обновление бренда."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-pink-200 via-white to-purple-200 opacity-90"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-purple-800">
              О нас
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              История, ценности и команда, которая создает для вас самые вкусные десерты
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-purple-800">
                  Наша история
                </h2>
                <p className="text-gray-700 mb-4">
                  Компания «Сласти-Страсти» начала свой путь в 2010 году с небольшой домашней кондитерской, где все десерты создавались вручную с любовью и вниманием к каждой детали.
                </p>
                <p className="text-gray-700 mb-4">
                  Основательница компании, Анна Петрова, всегда мечтала создавать десерты, которые не только восхитительны на вкус, но и выглядят как произведения искусства. После обучения у лучших кондитеров Франции и Италии, она вернулась в Россию, чтобы воплотить свою мечту в реальность.
                </p>
                <p className="text-gray-700">
                  Сегодня «Сласти-Страсти» — это сеть кондитерских с собственным производством, где команда профессионалов создает изысканные десерты по оригинальным рецептам с использованием лучших ингредиентов.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-3/4 h-3/4 bg-purple-100 rounded-lg -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-pink-100 rounded-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Наша кондитерская" 
                  className="rounded-lg shadow-lg w-full h-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gradient-to-b from-white to-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center text-purple-800">
              Наши ценности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-pink-100 rounded-full text-2xl text-pink-600">
                  👨‍🍳
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Качество</h3>
                <p className="text-gray-700 text-center">
                  Мы используем только натуральные ингредиенты высочайшего качества, без искусственных добавок и консервантов.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-purple-100 rounded-full text-2xl text-purple-600">
                  🎨
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Креативность</h3>
                <p className="text-gray-700 text-center">
                  Мы постоянно экспериментируем с новыми вкусами и техниками, чтобы удивлять и радовать наших клиентов.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-pink-100 rounded-full text-2xl text-pink-600">
                  💝
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Любовь</h3>
                <p className="text-gray-700 text-center">
                  В каждый десерт мы вкладываем частичку души, чтобы принести радость и наслаждение в жизнь наших клиентов.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center text-purple-800">
              Наш путь
            </h2>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative">
                    {/* Circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-4 border-white shadow-md z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} p-6 bg-white rounded-lg shadow-md`}>
                      <div className="font-bold text-purple-600 text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center text-purple-800">
              Наша команда
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map(member => (
                <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                    <p className="text-pink-600 mb-4">{member.position}</p>
                    <p className="text-gray-700 italic">"{member.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

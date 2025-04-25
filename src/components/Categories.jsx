
import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Торты",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
      description: "Классические и авторские торты на любой вкус",
      color: "from-pink-400 to-pink-600",
      link: "/catalog/cakes"
    },
    {
      id: 2,
      name: "Макаруны",
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Нежное французское лакомство с разными вкусами",
      color: "from-purple-400 to-purple-600",
      link: "/catalog/macarons"
    },
    {
      id: 3,
      name: "Эклеры",
      image: "https://images.unsplash.com/photo-1583251633146-d0c6c036187d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Воздушные заварные пирожные с кремом",
      color: "from-pink-400 to-purple-500",
      link: "/catalog/eclairs"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">
            Наши категории
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Исследуйте мир изысканных десертов, созданных с любовью и вниманием к каждой детали.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 transition-opacity duration-300 group-hover:opacity-70`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-serif font-bold text-white drop-shadow-md">
                    {category.name}
                  </h3>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-600">{category.description}</p>
                <div className="mt-4 flex items-center text-purple-600 font-semibold">
                  <span>Подробнее</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

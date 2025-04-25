
import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Торты",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
      description: "Изысканные торты для любого праздника",
      count: 24,
    },
    {
      id: 2,
      name: "Макаруны",
      image: "https://images.unsplash.com/photo-1558326567-98166332163b?q=80&w=1000&auto=format&fit=crop",
      description: "Нежные французские пирожные",
      count: 16,
    },
    {
      id: 3,
      name: "Эклеры",
      image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?q=80&w=1000&auto=format&fit=crop",
      description: "Классические французские десерты",
      count: 12,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-800">
          Наши <span className="text-pink-600">категории</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              to={`/category/${category.id}`}
              key={category.id}
              className="group block"
            >
              <div className="bg-gradient-to-br from-white to-pink-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-purple-600 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {category.count} видов
                    </span>
                    <span className="text-pink-600 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
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

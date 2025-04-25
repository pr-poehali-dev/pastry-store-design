
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Торты",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
    description: "Изысканные торты для особых случаев",
  },
  {
    id: 2,
    name: "Эклеры",
    image: "https://images.unsplash.com/photo-1605801675843-c6d5a77a3ed1?q=80&w=1000&auto=format&fit=crop",
    description: "Нежные эклеры с разнообразными начинками",
  },
  {
    id: 3,
    name: "Макаруны",
    image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?q=80&w=1000&auto=format&fit=crop",
    description: "Яркие французские пирожные ручной работы",
  },
  {
    id: 4,
    name: "Пирожные",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop",
    description: "Разнообразные пирожные на любой вкус",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-3">
          Наши категории
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Выберите категорию и откройте для себя разнообразие вкусов и форм наших кондитерских изделий
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/catalog/${category.name.toLowerCase()}`}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

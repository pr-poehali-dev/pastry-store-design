
import React from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Торт Малиновый бархат",
      description: "Нежный бисквит со свежей малиной и взбитыми сливками",
      price: 2800,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop",
      discount: 10,
    },
    {
      id: 2,
      name: "Макаруны ассорти",
      description: "Набор из 12 макарунов с разными вкусами",
      price: 1500,
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1000&auto=format&fit=crop",
      discount: 0,
    },
    {
      id: 3,
      name: "Шоколадные эклеры",
      description: "Классические эклеры с шоколадной глазурью",
      price: 900,
      image: "https://images.unsplash.com/photo-1613650328281-1df1f0bae2e9?q=80&w=1000&auto=format&fit=crop",
      discount: 15,
    },
    {
      id: 4,
      name: "Чизкейк Нью-Йорк",
      description: "Классический американский чизкейк с ягодным соусом",
      price: 1800,
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1000&auto=format&fit=crop",
      discount: 0,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-800">
            Популярные <span className="text-pink-600">десерты</span>
          </h2>
          <a
            href="/catalog"
            className="text-purple-600 hover:text-pink-600 transition-colors font-medium flex items-center"
          >
            Смотреть все
            <span className="ml-1">→</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

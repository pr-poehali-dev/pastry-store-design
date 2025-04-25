
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Черничный торт",
    description: "Нежный бисквит со свежими ягодами черники и сливочным кремом",
    price: 2400,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710029?q=80&w=1000&auto=format&fit=crop",
    discount: 10,
  },
  {
    id: 2,
    name: "Ванильные эклеры",
    description: "Воздушные эклеры с натуральной ванильной начинкой",
    price: 180,
    image: "https://images.unsplash.com/photo-1621236378699-8f3f548c8441?q=80&w=1000&auto=format&fit=crop",
    discount: 0,
  },
  {
    id: 3,
    name: "Набор макарунов",
    description: "Ассорти из 8 макарунов с разными вкусами: малина, шоколад, фисташка и лимон",
    price: 950,
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1000&auto=format&fit=crop",
    discount: 15,
  },
  {
    id: 4,
    name: "Шоколадный тарт",
    description: "Тарт с темным бельгийским шоколадом и малиновым конфи",
    price: 650,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop",
    discount: 0,
  },
  {
    id: 5,
    name: "Фисташковое пирожное",
    description: "Бисквитное пирожное с фисташковым кремом и белым шоколадом",
    price: 320,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1000&auto=format&fit=crop",
    discount: 0,
  },
  {
    id: 6,
    name: "Клубничный чизкейк",
    description: "Классический чизкейк с сезонной клубникой и свежими ягодами",
    price: 1800,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1000&auto=format&fit=crop",
    discount: 5,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-3">
          Популярные десерты
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Откройте для себя наши самые популярные кондитерские изделия, которые покорили сердца наших клиентов
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white hover:bg-gray-50 text-pink-600 font-semibold rounded-lg border border-pink-200 transition-colors shadow-sm">
            Показать больше десертов
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

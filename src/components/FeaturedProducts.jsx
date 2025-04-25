
import React from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Торт 'Клубничное облако'",
      description: "Воздушный бисквит с кремом из маскарпоне и свежей клубникой",
      price: 2200,
      discount: 0,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      isNew: true
    },
    {
      id: 2,
      name: "Набор макарунов (12 шт)",
      description: "Ассорти вкусов: малина, фисташка, шоколад, лаванда",
      price: 980,
      discount: 10,
      image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      isNew: false
    },
    {
      id: 3,
      name: "Эклеры 'Классик' (3 шт)",
      description: "Классические эклеры с заварным кремом и шоколадной глазурью",
      price: 450,
      discount: 0,
      image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      isNew: false
    },
    {
      id: 4,
      name: "Чизкейк 'Нью-Йорк'",
      description: "Классический чизкейк с ванильным вкусом и тонкой основой из печенья",
      price: 1500,
      discount: 15,
      image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      isNew: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">
            Популярные позиции
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Самые любимые десерты наших клиентов. Попробуйте и влюбитесь в них с первого кусочка!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/catalog"
            className="inline-block px-6 py-3 rounded-lg bg-white text-purple-600 font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
          >
            Смотреть весь каталог
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

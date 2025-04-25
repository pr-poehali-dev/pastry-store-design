
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const Catalog = () => {
  const categories = [
    { id: "all", name: "Все десерты" },
    { id: "cakes", name: "Торты" },
    { id: "macarons", name: "Макаруны" },
    { id: "eclairs", name: "Эклеры" },
    { id: "cheesecakes", name: "Чизкейки" }
  ];

  const products = [
    {
      id: 1,
      name: "Торт 'Клубничное облако'",
      description: "Воздушный бисквит с кремом из маскарпоне и свежей клубникой",
      price: 2200,
      discount: 0,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      isNew: true,
      category: "cakes"
    },
    {
      id: 2,
      name: "Набор макарунов (12 шт)",
      description: "Ассорти вкусов: малина, фисташка, шоколад, лаванда",
      price: 980,
      discount: 10,
      image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      isNew: false,
      category: "macarons"
    },
    {
      id: 3,
      name: "Эклеры 'Классик' (3 шт)",
      description: "Классические эклеры с заварным кремом и шоколадной глазурью",
      price: 450,
      discount: 0,
      image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      isNew: false,
      category: "eclairs"
    },
    {
      id: 4,
      name: "Чизкейк 'Нью-Йорк'",
      description: "Классический чизкейк с ванильным вкусом и тонкой основой из печенья",
      price: 1500,
      discount: 15,
      image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      isNew: false,
      category: "cheesecakes"
    },
    {
      id: 5,
      name: "Торт 'Шоколадный бархат'",
      description: "Шоколадные коржи с нежным кремом и ганашем",
      price: 2100,
      discount: 0,
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=706&q=80",
      isNew: false,
      category: "cakes"
    },
    {
      id: 6,
      name: "Макаруны 'Розовое настроение'",
      description: "Малиновые макаруны с кремом из белого шоколада (6 шт)",
      price: 560,
      discount: 0,
      image: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      isNew: true,
      category: "macarons"
    },
    {
      id: 7,
      name: "Эклеры 'Карамельный микс' (4 шт)",
      description: "Ассорти эклеров с карамельной начинкой",
      price: 680,
      discount: 5,
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
      isNew: false,
      category: "eclairs"
    },
    {
      id: 8,
      name: "Чизкейк 'Малиновый бархат'",
      description: "Нежный чизкейк с малиновым желе и свежими ягодами",
      price: 1650,
      discount: 0,
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      isNew: false,
      category: "cheesecakes"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOption, setSortOption] = useState("recommended");

  const filteredProducts = products.filter(
    product => activeCategory === "all" || product.category === activeCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return (a.price * (1 - a.discount / 100)) - (b.price * (1 - b.discount / 100));
      case "price-high":
        return (b.price * (1 - b.discount / 100)) - (a.price * (1 - a.discount / 100));
      case "discount":
        return b.discount - a.discount;
      case "new":
        return b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold mb-8 text-purple-800">
            Каталог десертов
          </h1>

          {/* Categories and Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-4 md:mb-0 overflow-x-auto w-full md:w-auto">
              <div className="flex space-x-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-purple-300"
                    } transition-all`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-auto">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                <option value="recommended">Рекомендуемые</option>
                <option value="price-low">Сначала дешевле</option>
                <option value="price-high">Сначала дороже</option>
                <option value="discount">По скидке</option>
                <option value="new">Новинки</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">В этой категории пока нет товаров</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;

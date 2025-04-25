
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold py-1 px-2 rounded-full">
            Новинка
          </div>
        )}
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold py-1 px-2 rounded-full">
            -{product.discount}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3 h-10 overflow-hidden">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {product.discount > 0 ? (
              <>
                <span className="text-lg font-bold text-purple-600">
                  {Math.round(product.price * (1 - product.discount / 100))} ₽
                </span>
                <span className="text-sm text-gray-400 line-through ml-2">
                  {product.price} ₽
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-purple-600">{product.price} ₽</span>
            )}
          </div>
          
          <button 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-110"
            aria-label="Добавить в корзину"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

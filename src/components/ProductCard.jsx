
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
        {product.discount && (
          <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <div>
            {product.discount ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-pink-600 mr-2">
                  {Math.round(product.price * (1 - product.discount / 100))} ₽
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {product.price} ₽
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-800">
                {product.price} ₽
              </span>
            )}
          </div>
          <button className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-lg transition-colors">
            🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

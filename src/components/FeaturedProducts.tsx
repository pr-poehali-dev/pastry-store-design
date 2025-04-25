
import ProductCard, { ProductProps } from "./ProductCard";

const featuredProducts: ProductProps[] = [
  {
    id: "1",
    name: "Шоколадный торт",
    price: 2500,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    category: "Торты"
  },
  {
    id: "2",
    name: "Французские эклеры",
    price: 800,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    category: "Эклеры"
  },
  {
    id: "3",
    name: "Макаруны ассорти",
    price: 1200,
    image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    category: "Макаруны"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-playfair font-bold text-center mb-2">Популярные товары</h2>
        <p className="text-center text-muted-foreground mb-10">Насладитесь нашими лучшими предложениями</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

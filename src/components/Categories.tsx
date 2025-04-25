
import { Link } from "react-router-dom";

const categories = [
  {
    id: "cakes",
    name: "Торты",
    description: "Изысканные торты для любого торжества",
    image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    color: "bg-pastry-pink"
  },
  {
    id: "eclairs",
    name: "Эклеры",
    description: "Нежные эклеры с различными кремами",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    color: "bg-pastry-cream"
  },
  {
    id: "macaroons",
    name: "Макаруны",
    description: "Воздушные французские пирожные",
    image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    color: "bg-pastry-blue"
  }
];

const Categories = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-playfair font-bold text-center mb-10">Наши категории</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/catalog/${category.id}`} 
              className={`${category.color} rounded-lg p-6 transition-transform hover:scale-[1.02] hover:shadow-md`}
            >
              <div className="aspect-[4/3] mb-4 overflow-hidden rounded-md">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-playfair font-semibold">{category.name}</h3>
              <p className="mt-2 text-muted-foreground">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

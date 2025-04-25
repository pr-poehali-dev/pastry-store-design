
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-pastry-pink py-20">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }} 
      />
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Кондитерские изделия <span className="text-pastry-brown">ручной работы</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Мы создаем неповторимые вкусы и текстуры, которые подарят вам незабываемые моменты наслаждения
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-pastry-brown text-white hover:bg-pastry-brown/90">
              Заказать сейчас
            </Button>
            <Button variant="outline" size="lg">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 right-10 md:right-20 lg:right-32 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" 
          alt="Торт" 
          className="w-full h-full object-contain animate-float drop-shadow-lg rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;

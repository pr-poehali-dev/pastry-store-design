
import { Link } from "react-router-dom";
import { CakeIcon, InstagramIcon, FacebookIcon, PhoneIcon, MapPinIcon, MailIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pastry-brown text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <CakeIcon className="h-6 w-6" />
              <span className="ml-2 text-xl font-playfair font-semibold">Сласти-Страсти</span>
            </Link>
            <p className="mt-4 text-sm opacity-80">
              Кондитерская лавка с изысканными десертами ручной работы. Мы создаем неповторимые вкусы и текстуры.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Категории</h3>
            <ul className="space-y-2">
              {["Торты", "Эклеры", "Макаруны", "Пирожные"].map((item) => (
                <li key={item}>
                  <Link to={`/catalog/${item.toLowerCase()}`} className="opacity-80 hover:opacity-100 transition-opacity">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              {[
                { name: "О нас", path: "/about" },
                { name: "Доставка", path: "/delivery" },
                { name: "Оплата", path: "/payment" },
                { name: "Контакты", path: "/contacts" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="opacity-80 hover:opacity-100 transition-opacity">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-2 mt-0.5" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 mr-2 mt-0.5" />
                <span>info@сласти-страсти.рф</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 mt-0.5" />
                <span>г. Москва, ул. Кондитерская, д. 123</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4">
        <div className="container text-center text-sm opacity-70">
          © {new Date().getFullYear()} Сласти-Страсти. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

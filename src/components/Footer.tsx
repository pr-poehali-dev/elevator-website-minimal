
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="ArrowUpCircle" className="text-blue-500" size={24} />
              <span className="text-xl font-bold">ЭлеваТекс</span>
            </div>
            <p className="text-zinc-400">Инновационные решения в области подъемного оборудования</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Продукция</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Каталог подъемников</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Запчасти</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Сервисное обслуживание</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">О нас</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">Производство</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">Новости</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                г. Москва, ул. Промышленная, 24
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@elevatex.ru
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 mb-4 md:mb-0">© 2025 ЭлеваТекс. Все права защищены.</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-blue-400">
              <Icon name="Facebook" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-blue-400">
              <Icon name="Instagram" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-blue-400">
              <Icon name="Youtube" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full bg-zinc-950/80 backdrop-blur-lg z-50 border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="ArrowUpCircle" className="text-blue-500" size={28} />
          <span className="text-xl font-bold tracking-tight">ЭлеваТекс</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-blue-400 transition-colors">Главная</Link>
          <Link to="/products" className="hover:text-blue-400 transition-colors">Продукция</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">О компании</Link>
          <Link to="/contacts" className="hover:text-blue-400 transition-colors">Контакты</Link>
        </nav>
        <Button className="hidden md:flex">
          <Icon name="Phone" />
          Связаться
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" />
        </Button>
      </div>
    </header>
  );
};

export default Header;

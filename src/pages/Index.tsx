
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Навигационная панель */}
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

      {/* Главный баннер */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-zinc-900/20 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=2070')",
            filter: "brightness(0.5)" 
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Инновационные <span className="text-blue-500">подъемные</span> решения
            </h1>
            <p className="text-xl mb-8 text-zinc-300">
              Мы создаем высокотехнологичные одномачтовые подъемники, 
              сочетающие максимальную безопасность и эффективность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Смотреть каталог
                <Icon name="ArrowRight" />
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                <Icon name="Play" />
                Видео о производстве
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему ЭлеваТекс?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Мы предлагаем инновационные решения в области подъемного оборудования, обеспечивая безопасность и эффективность работы.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-zinc-800 border-zinc-700 p-6">
              <div className="mb-4 bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Безопасность</h3>
              <p className="text-zinc-400">Многоуровневые системы безопасности, соответствующие мировым стандартам.</p>
            </Card>
            
            <Card className="bg-zinc-800 border-zinc-700 p-6">
              <div className="mb-4 bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Эффективность</h3>
              <p className="text-zinc-400">Высокая грузоподъемность при оптимальном энергопотреблении.</p>
            </Card>
            
            <Card className="bg-zinc-800 border-zinc-700 p-6">
              <div className="mb-4 bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <Icon name="Settings" className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Надежность</h3>
              <p className="text-zinc-400">Прецизионная инженерия и качественные материалы для долгой службы.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Продукция */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша продукция</h2>
              <p className="text-zinc-400 max-w-xl">Линейка одномачтовых подъемников для различных задач и условий эксплуатации</p>
            </div>
            <Button className="mt-4 md:mt-0">
              Весь каталог
              <Icon name="ChevronRight" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ЭлеваПро-1000",
                desc: "Грузоподъемность 1000 кг, высота подъема до 150 м",
                image: "https://images.unsplash.com/photo-1635533370663-ef0d4151ad8f?q=80&w=2070"
              },
              {
                title: "ЭлеваМакс-2000",
                desc: "Грузоподъемность 2000 кг, высота подъема до 120 м",
                image: "https://images.unsplash.com/photo-1627433454851-549d19201bef?q=80&w=2070"
              },
              {
                title: "ЭлеваФлекс-1500",
                desc: "Грузоподъемность 1500 кг, модульная конструкция",
                image: "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?q=80&w=2069"
              }
            ].map((product, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-zinc-400 mb-4">{product.desc}</p>
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
                    Подробнее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы к сотрудничеству?</h2>
            <p className="text-zinc-400 mb-8">Наши специалисты подберут оптимальное решение для ваших задач и ответят на все вопросы</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Mail" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
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
    </div>
  );
};

export default Index;


import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => {
  return (
    <Card className="bg-zinc-800 border-zinc-700 overflow-hidden group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>
        <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
          Подробнее
          <Icon name="ArrowRight" size={16} />
        </Button>
      </div>
    </Card>
  );
};

const ProductSection = () => {
  const products = [
    {
      title: "Тельферы Болгария",
      description: "Надежные европейские тельферы с грузоподъемностью от 1 до 10 тонн",
      image: "https://images.unsplash.com/photo-1582693567340-f0ef969a1fd7?q=80&w=2070"
    },
    {
      title: "Тельферы Россия",
      description: "Отечественные тельферы с высокой устойчивостью к низким температурам",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071"
    },
    {
      title: "Тельферы КНР",
      description: "Экономичные решения для подъема грузов с обширной линейкой моделей",
      image: "https://images.unsplash.com/photo-1588738596295-a05cce96823b?q=80&w=2070"
    },
    {
      title: "ЭлеваПро-1000",
      description: "Грузоподъемность 1000 кг, высота подъема до 150 м",
      image: "https://images.unsplash.com/photo-1635533370663-ef0d4151ad8f?q=80&w=2070"
    },
    {
      title: "ЭлеваМакс-2000",
      description: "Грузоподъемность 2000 кг, высота подъема до 120 м",
      image: "https://images.unsplash.com/photo-1627433454851-549d19201bef?q=80&w=2070"
    },
    {
      title: "ЭлеваФлекс-1500",
      description: "Грузоподъемность 1500 кг, модульная конструкция",
      image: "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?q=80&w=2069"
    }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша продукция</h2>
            <p className="text-zinc-400 max-w-xl">
              Линейка тельферов и подъемников для различных задач и условий эксплуатации
            </p>
          </div>
          <Button className="mt-4 md:mt-0">
            Весь каталог
            <Icon name="ChevronRight" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

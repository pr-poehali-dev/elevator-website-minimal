
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroBanner = () => {
  return (
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
  );
};

export default HeroBanner;

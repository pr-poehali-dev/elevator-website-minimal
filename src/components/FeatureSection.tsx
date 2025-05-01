
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <Card className="bg-zinc-800 border-zinc-700 p-6">
      <div className="mb-4 bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center">
        <Icon name={icon} className="text-blue-500" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </Card>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Многоуровневые системы безопасности, соответствующие мировым стандартам."
    },
    {
      icon: "Zap",
      title: "Эффективность",
      description: "Высокая грузоподъемность при оптимальном энергопотреблении."
    },
    {
      icon: "Settings",
      title: "Надежность",
      description: "Прецизионная инженерия и качественные материалы для долгой службы."
    }
  ];

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему ЭлеваТекс?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Мы предлагаем инновационные решения в области подъемного оборудования, 
            обеспечивая безопасность и эффективность работы.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;


import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы к сотрудничеству?</h2>
          <p className="text-zinc-400 mb-8">
            Наши специалисты подберут оптимальное решение для ваших задач и ответят на все вопросы
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Mail" />
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

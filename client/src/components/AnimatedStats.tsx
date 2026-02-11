import { Card, CardContent } from '@/components/ui/card';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Trophy, Users, Calendar, Award, Car } from 'lucide-react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export default function AnimatedStats() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const yearsCount = useCounterAnimation({ end: 12, isVisible, duration: 2000 });
  const studentsCount = useCounterAnimation({ end: 3500, isVisible, duration: 2500 });
  const successRate = useCounterAnimation({ end: 95, isVisible, duration: 2200 });
  const vehiclesCount = useCounterAnimation({ end: 12, isVisible, duration: 1800 });

  const stats = [
    {
      icon: Calendar,
      value: yearsCount,
      suffix: '+',
      label: 'Anos de Experiência',
      description: 'Formando condutores com excelência desde 2013'
    },
    {
      icon: Users,
      value: studentsCount,
      suffix: '+',
      label: 'Alunos Aprovados',
      description: 'Milhares de condutores preparados com sucesso'
    },
    {
      icon: Trophy,
      value: successRate,
      suffix: '%',
      label: 'Taxa de Aprovação',
      description: 'Compromisso real com o seu resultado final'
    },
    {
      icon: Car,
      value: vehiclesCount,
      suffix: '',
      label: 'Veículos Adequados',
      description: 'Frota moderna e preparada para o seu aprendizado'
    }
  ];

  const testimonials = [
    {
      quote: "A KL transformou minha insegurança em confiança no volante. Os instrutores são pacientes e conhecem profundamente a realidade das estradas angolanas.",
      name: "João Manuel",
      title: "Aluno Aprovado em 2024",
    },
    {
      quote: "Excelente escola! Os veículos são modernos e bem cuidados, facilitando muito o aprendizado prático. Recomendo a todos em Luanda.",
      name: "Maria Antónia",
      title: "Condutora Formada",
    },
    {
      quote: "A flexibilidade de horários foi fundamental para eu conseguir tirar minha carta enquanto trabalhava. O processo foi rápido e eficiente.",
      name: "Pedro Santos",
      title: "Aprovado na 1ª tentativa",
    },
    {
      quote: "O suporte teórico é muito forte. Cheguei no exame de código muito bem preparada e sem nervosismo graças ao acompanhamento.",
      name: "Ana Luísa",
      title: "Aluna da KL",
    }
  ];

  return (
    <section 
      ref={elementRef}
      className="py-20 bg-primary text-primary-foreground overflow-hidden"
      data-testid="section-animated-stats"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-serif text-white">
            Números que Falam por Si
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Mais de uma década de dedicação ao ensino da condução em Angola
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className={`bg-white/10 border-white/20 backdrop-blur-sm hover-elevate transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms` 
              }}
              data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange" />
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                  {stat.value}
                  <span className="text-orange">{stat.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {stat.label}
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pt-10 border-t border-white/10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

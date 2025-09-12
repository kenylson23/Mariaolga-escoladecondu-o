import { Card, CardContent } from '@/components/ui/card';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Trophy, Users, Calendar, Award } from 'lucide-react';

export default function AnimatedStats() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const yearsCount = useCounterAnimation({ end: 20, isVisible, duration: 2000 });
  const studentsCount = useCounterAnimation({ end: 1500, isVisible, duration: 2500 });
  const successRate = useCounterAnimation({ end: 92, isVisible, duration: 2200 });
  const coursesCount = useCounterAnimation({ end: 8, isVisible, duration: 1800 });

  const stats = [
    {
      icon: Calendar,
      value: yearsCount,
      suffix: '+',
      label: 'Anos de Experiência',
      description: 'Formando condutores desde 2004'
    },
    {
      icon: Users,
      value: studentsCount,
      suffix: '+',
      label: 'Alunos Formados',
      description: 'Condutores preparados com sucesso'
    },
    {
      icon: Trophy,
      value: successRate,
      suffix: '%',
      label: 'Taxa de Sucesso',
      description: 'Aprovação nos exames'
    },
    {
      icon: Award,
      value: coursesCount,
      suffix: '',
      label: 'Tipos de Cursos',
      description: 'Categorias de condução disponíveis'
    }
  ];

  return (
    <section 
      ref={elementRef}
      className="py-20 bg-primary text-primary-foreground"
      data-testid="section-animated-stats"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Números que Falam por Si
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Duas décadas de dedicação ao ensino da condução em Angola
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}
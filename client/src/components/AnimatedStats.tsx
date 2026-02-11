import { Card, CardContent } from '@/components/ui/card';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Trophy, Users, Calendar, Award, Car } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

        <div className="w-full relative px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {stats.map((stat, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card 
                    className={`h-full bg-white/10 border-white/20 backdrop-blur-sm hover-elevate transition-all duration-500 ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 150}ms` 
                    }}
                    data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                      <stat.icon className="w-12 h-12 mb-4 text-orange shrink-0" />
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

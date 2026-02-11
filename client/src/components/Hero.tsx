import { Button } from '@/components/ui/button';
import { Award, Users, Car } from 'lucide-react';
import Lottie from 'lottie-react';
import drivingAnimation from '@assets/Driving_Car___Success_tick___Pickup_Scheduled_1770563462145.json';

export default function Hero() {
  const stats = [
    { icon: Award, label: 'Anos de Experiência', value: '12+' },
    { icon: Users, label: 'Alunos Aprovados', value: '3500+' },
    { icon: Car, label: 'Veículos Adequados', value: '12' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="text-left">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Escola de Condução KL
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif leading-tight">
              Aprenda a Conduzir em <span className="text-primary text-nowrap">Angola</span> com Confiança e Segurança
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Transformamos sonhos em realidade com formação adaptada às condições locais e instrutores certificados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold"
                data-testid="button-inscrever-agora"
              >
                Começar Agora
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg"
                data-testid="button-saber-mais"
              >
                Ver Cursos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-10 pb-10 border-t border-border/50">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1 group cursor-default">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                      <stat.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight flex items-baseline gap-0.5">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider leading-tight max-w-[80px] sm:max-w-none">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lottie Animation */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[380px] aspect-square relative opacity-90">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
              <Lottie 
                animationData={drivingAnimation} 
                loop={true} 
                className="w-full h-full relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
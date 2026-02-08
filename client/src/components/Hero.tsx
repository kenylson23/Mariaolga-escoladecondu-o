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
    <section id="inicio" className="relative min-h-screen flex items-center bg-zinc-950 bg-gradient-to-br from-zinc-950 via-zinc-950 to-purple-950/30 overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="text-left">
            <p className="text-purple-400 font-semibold tracking-widest uppercase text-sm mb-4">
              Escola de Condução KL
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              Aprenda a Conduzir em <span className="text-purple-500 text-nowrap">Angola</span> com Confiança e Segurança
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl">
              Transformamos sonhos em realidade com formação adaptada às condições locais e instrutores certificados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-500 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-purple-500/20"
                data-testid="button-inscrever-agora"
              >
                Começar Agora
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zinc-700 text-white hover:bg-zinc-900 rounded-full px-8 py-6 text-lg"
                data-testid="button-saber-mais"
              >
                Ver Cursos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-zinc-800 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lottie Animation */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[380px] aspect-square relative opacity-85">
              <div className="absolute inset-0 bg-purple-500/5 rounded-full blur-3xl" />
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
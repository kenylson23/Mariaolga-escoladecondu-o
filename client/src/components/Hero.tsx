import { Button } from '@/components/ui/button';
import { Award, Users, Car } from 'lucide-react';
import heroImage from '@assets/generated_images/Driving_instructor_teaching_student_2b3ed7ce.png';

export default function Hero() {
  const stats = [
    { icon: Award, label: 'Anos de Experiência', value: '12+' },
    { icon: Users, label: 'Alunos Aprovados', value: '3500+' },
    { icon: Car, label: 'Veículos Adequados', value: '12' },
  ];

  return (
    <section id="inicio" className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Instrução de condução" 
          className="w-full h-full object-cover"
        />
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
            Aprenda a Conduzir com <span className="text-orange">Confiança</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Na Escola de Condução KL, transformamos sonhos em realidade. 
            Com mais de 10 anos de experiência em Angola, oferecemos formação 
            adaptada às condições locais para todas as categorias de condução.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="default"
              className="bg-orange hover:bg-orange/90 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold md:size-lg"
              data-testid="button-inscrever-agora"
            >
              Inscrever Agora
            </Button>
            <Button 
              size="default"
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg md:size-lg"
              data-testid="button-saber-mais"
            >
              Saber Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <stat.icon className="w-8 h-8 text-orange mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
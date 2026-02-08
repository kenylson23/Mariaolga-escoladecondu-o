import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Trophy, Heart, Clock } from 'lucide-react';
import mariaOlgaImage from '@assets/generated_images/Maria_Olga_driving_instructor_portrait_bb9c3c1b.png';
import schoolImage from '@assets/generated_images/Modern_driving_school_building_5228ea15.png';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedStats from '@/components/AnimatedStats';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Segurança em Primeiro',
      description: 'Priorizamos a segurança rodoviária em todas as nossas lições, preparando condutores responsáveis.'
    },
    {
      icon: Trophy,
      title: 'Taxa de Sucesso Elevada',
      description: 'Mais de 90% dos nossos alunos são aprovados no exame de condução em Angola.'
    },
    {
      icon: Heart,
      title: 'Ensino Personalizado',
      description: 'Adaptamos o nosso método de ensino às necessidades individuais de cada aluno.'
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Oferecemos aulas em horários convenientes, incluindo fins de semana.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Sobre a <span className="text-primary">KL</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma história de excelência no ensino da condução em Angola
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          {/* Text content */}
          <AnimatedSection animation="slideRight" delay={200}>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Mais de 10 Anos de Experiência na Formação de Condutores em Angola
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Fundada em 2013, a nossa escola tem-se dedicado à formação 
                de milhares de condutores em Angola. Com uma paixão genuína pelo ensino 
                e um compromisso inabalável com a segurança rodoviária, construímos uma 
                reputação sólida em Luanda e províncias.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                A nossa missão é simples: formar condutores confiantes, responsáveis e 
                preparados para as condições únicas das estradas angolanas. Utilizamos 
                métodos adaptados à realidade local e veículos adequados para garantir 
                a melhor experiência de aprendizagem.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                data-testid="button-conhecer-historia"
              >
                Conhecer a Nossa História
              </Button>
            </div>
          </AnimatedSection>

          {/* Images */}
          <AnimatedSection animation="slideLeft" delay={400}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={mariaOlgaImage} 
                  alt="KL - Formação de Excelência" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  data-testid="img-maria-olga"
                />
                <img 
                  src={schoolImage} 
                  alt="Escola de Condução" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg mt-8"
                  data-testid="img-escola-edificio"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Features horizontal scroll */}
        <div className="relative mt-16">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 no-scrollbar">
            {features.map((feature, index) => (
              <article 
                key={index}
                className="min-w-[280px] sm:min-w-[320px] snap-start bg-card border-border border rounded-xl shadow-lg hover-elevate transition-all duration-300 group"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-card-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Statistics Section */}
      <AnimatedStats />
    </section>
  );
}
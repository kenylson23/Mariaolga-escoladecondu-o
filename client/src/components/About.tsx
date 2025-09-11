import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Trophy, Heart, Clock } from 'lucide-react';
import mariaOlgaImage from '@assets/generated_images/Maria_Olga_driving_instructor_portrait_bb9c3c1b.png';
import schoolImage from '@assets/generated_images/Modern_driving_school_building_5228ea15.png';

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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sobre a <span className="text-primary">Maria Olga</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma história de excelência no ensino da condução em Angola
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              20 Anos de Experiência na Formação de Condutores em Angola
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Fundada em 2004 por Maria Olga, a nossa escola tem-se dedicado à formação 
              de milhares de condutores em Angola. Com uma paixão genuína pelo ensino 
              e um compromisso inabalável com a segurança rodoviária, construímos uma 
              reputação sólida em Luanda e províncias.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
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

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={mariaOlgaImage} 
                alt="Maria Olga - Fundadora" 
                className="rounded-lg shadow-lg"
                data-testid="img-maria-olga"
              />
              <img 
                src={schoolImage} 
                alt="Escola de Condução" 
                className="rounded-lg shadow-lg mt-8"
                data-testid="img-escola-edificio"
              />
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover-elevate transition-all duration-300"
              data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
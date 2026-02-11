import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Target, Heart, Timer, CheckCircle2, ArrowRight } from 'lucide-react';
import mariaOlgaImage from '@assets/generated_images/Maria_Olga_driving_instructor_portrait_bb9c3c1b.png';
import schoolImage from '@assets/generated_images/Modern_driving_school_building_5228ea15.png';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedStats from '@/components/AnimatedStats';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Segurança em Primeiro',
      description: 'Priorizamos a segurança rodoviária em todas as nossas lições, preparando condutores responsáveis.'
    },
    {
      icon: Target,
      title: 'Taxa de Sucesso Elevada',
      description: 'Mais de 90% dos nossos alunos são aprovados no exame de condução em Angola.'
    },
    {
      icon: Heart,
      title: 'Ensino Personalizado',
      description: 'Adaptamos o nosso método de ensino às necessidades individuais de cada aluno.'
    },
    {
      icon: Timer,
      title: 'Horários Flexíveis',
      description: 'Oferecemos aulas em horários convenientes, incluindo fins de semana.'
    }
  ];

  const highlights = [
    'Instrutores Certificados',
    'Frota Moderna de Veículos',
    'Aulas Práticas e Teóricas',
    'Suporte no Processo de Carta'
  ];

  return (
    <section id="sobre" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Visual Elements Column */}
          <AnimatedSection animation="slideRight" delay={200} className="relative">
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={schoolImage} 
                  alt="Escola de Condução KL" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="absolute -bottom-10 -right-6 md:-right-10 z-20 w-48 md:w-64">
                <div className="bg-white p-6 rounded-2xl shadow-2xl border-l-4 border-secondary">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Target className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">12+</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Anos de Glória</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 z-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-4 hidden md:grid">
               <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                 <img src={mariaOlgaImage} alt="Nossa Instrutora" className="w-full h-48 object-cover" />
               </div>
               <div className="bg-primary p-6 rounded-xl text-white flex flex-col justify-center">
                 <p className="text-sm font-medium opacity-80 mb-2">Compromisso KL</p>
                 <p className="text-lg font-bold leading-tight italic">"Sua segurança é nossa maior prioridade."</p>
               </div>
            </div>
          </AnimatedSection>

          {/* Content Column */}
          <AnimatedSection animation="slideLeft" delay={400}>
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="px-4 py-1 text-secondary border-secondary/30 bg-secondary/5 font-bold tracking-wider uppercase text-xs">
                  Sobre a nossa Instituição
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight font-serif">
                  Excelência na Formação de <span className="text-secondary italic">Condutores</span> desde 2013
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A <span className="font-bold text-primary">Escola de Condução KL</span> nasceu com o propósito de elevar o padrão do ensino rodoviário em Angola. Em mais de uma década, transformamos o medo em confiança para milhares de condutores.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Não apenas ensinamos a operar um veículo; formamos cidadãos conscientes e preparados para as dinâmicas únicas das nossas estradas, sempre com profissionalismo, paciência e ética.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-border">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="font-semibold text-primary/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary text-white hover-elevate px-8 py-6 text-lg rounded-xl shadow-xl group">
                  Começar Jornada
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-muted px-8 py-6 text-lg rounded-xl">
                  Nossa História
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Features Cards */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-primary font-serif mb-4">Por que escolher a KL?</h3>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-none shadow-xl bg-muted/30 hover-elevate transition-all duration-300 rounded-2xl overflow-hidden group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-500">
                    <feature.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-primary">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <AnimatedStats />
    </section>
  );
}

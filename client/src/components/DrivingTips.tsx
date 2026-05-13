import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Eye, AlertTriangle, Timer, Car, MapPin, Gauge, Lightbulb } from 'lucide-react';

interface Tip {
  id: number;
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  difficulty: 'Básico' | 'Intermédio' | 'Avançado';
}

export default function DrivingTips() {
  const tips: Tip[] = [
    {
      id: 1,
      title: "Distância de Segurança",
      content: "Em Angola, mantenha pelo menos 4 segundos de distância do veículo da frente devido às condições das estradas. Em terra batida ou areia, aumente para 5-6 segundos. Conte devagar: 'mil e um, mil e dois...'",
      icon: Timer,
      category: "Segurança Rodoviária",
      difficulty: "Básico"
    },
    {
      id: 2,
      title: "Atenção ao Tráfego Misto",
      content: "Nas cidades angolanas, esteja sempre atento a mototáxis, bicicletas, vendedores ambulantes e peões. Muitos não respeitam a sinalização. Reduza a velocidade em zonas comerciais e residenciais.",
      icon: Eye,
      category: "Trânsito Urbano",
      difficulty: "Básico"
    },
    {
      id: 3,
      title: "Condução em Estradas de Terra",
      content: "Em estradas não pavimentadas, reduza a velocidade pela metade. Mantenha as mãos firmes no volante para controlar vibrações. Evite travagens bruscas que podem causar derrapagem na areia ou barro.",
      icon: Car,
      category: "Estradas Rurais",
      difficulty: "Intermédio"
    },
    {
      id: 4,
      title: "Condução na Época das Chuvas",
      content: "Durante a época das chuvas, as estradas ficam escorregadias. Reduza drasticamente a velocidade, aumente a distância e ligue os faróis. Cuidado com buracos cheios de água - podem ser mais profundos do que parecem.",
      icon: AlertTriangle,
      category: "Condições Climáticas",
      difficulty: "Avançado"
    },
    {
      id: 5,
      title: "Navegação em Buracos",
      content: "Reduza a velocidade ao aproximar-se de buracos. Se não conseguir desviar, passe devagar e em linha reta. Nunca trave dentro do buraco. Mantenha o veículo sempre verificado - pneus e suspensão sofrem muito.",
      icon: MapPin,
      category: "Infraestrutura",
      difficulty: "Intermédio"
    },
    {
      id: 6,
      title: "Segurança nos Semáforos",
      content: "Aproxime-se devagar dos semáforos. Muitos condutores aceleram no amarelo ou passam no vermelho. Antes de arrancar no verde, observe se não vem ninguém da esquerda ou direita.",
      icon: Gauge,
      category: "Intersecções",
      difficulty: "Básico"
    },
    {
      id: 7,
      title: "Respeito pelas Zonas Escolares",
      content: "Reduza drasticamente a velocidade próximo de escolas, especialmente na entrada e saída. Crianças podem surgir inesperadamente. Toque a buzina suavemente para alertar da sua presença em zonas residenciais.",
      icon: Shield,
      category: "Proteção Infantil",
      difficulty: "Básico"
    },
    {
      id: 8,
      title: "Condução Noturna Segura",
      content: "Nas estradas angolanas, a iluminação pública é limitada. Use sempre os faróis médios na cidade e máximos nas estradas rurais (quando não há tráfego contrário). Cuidado com animais na estrada.",
      icon: Lightbulb,
      category: "Condução Noturna",
      difficulty: "Avançado"
    }
  ];

  const getDifficultyStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'Básico':     return 'font-light italic tracking-tight text-foreground/35';
      case 'Intermédio': return 'font-semibold italic tracking-tight text-foreground/55';
      case 'Avançado':   return 'font-black italic tracking-tight text-foreground/80';
      default:           return 'font-light italic text-foreground/30';
    }
  };

  return (
    <section id="dicas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Dicas de <span className="text-primary">Condução Defensiva</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprenda técnicas essenciais adaptadas às condições de condução em Angola. 
            Estas dicas irão ajudá-lo a conduzir com segurança nas nossas estradas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <Card 
              key={tip.id} 
              className="hover-elevate transition-all duration-300 h-full"
              data-testid={`tip-card-${tip.id}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-2xl leading-none ${getDifficultyStyle(tip.difficulty)}`}>
                    {tip.difficulty}
                  </span>
                </div>
                <CardTitle className="text-lg mb-2">{tip.title}</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {tip.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tip.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Quer aprender mais técnicas de condução defensiva?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Os nossos instrutores experientes ensinam estas e muitas outras técnicas 
                durante as aulas práticas. A segurança é sempre a nossa prioridade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    const element = document.getElementById('contacto');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  size="lg"
                  data-testid="button-book-lessons"
                >
                  Marcar Aulas Práticas
                </Button>
                <Button
                  onClick={() => {
                    const element = document.getElementById('quiz');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline"
                  size="lg"
                  data-testid="button-test-knowledge"
                >
                  Testar Conhecimentos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
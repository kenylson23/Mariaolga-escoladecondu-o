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
      title: "Regra dos 3 Segundos",
      content: "Mantenha sempre uma distância de pelo menos 3 segundos do veículo da frente. Escolha um ponto de referência (poste, placa) e conte: '1001, 1002, 1003'. Se passar pelo mesmo ponto antes de terminar a contagem, está demasiado próximo.",
      icon: Timer,
      category: "Distância de Segurança",
      difficulty: "Básico"
    },
    {
      id: 2,
      title: "Verificação dos Espelhos",
      content: "Verifique os espelhos a cada 8-10 segundos. Ordem: espelho retrovisor, espelho esquerdo, espelho direito. Esta técnica mantém-no consciente do que acontece ao seu redor em todas as direções.",
      icon: Eye,
      category: "Observação",
      difficulty: "Básico"
    },
    {
      id: 3,
      title: "Posição das Mãos no Volante",
      content: "Mantenha as mãos na posição 9h e 3h do relógio. Esta posição oferece melhor controlo, especialmente em situações de emergência. Evite a posição 10h e 2h - pode causar lesões se o airbag disparar.",
      icon: Car,
      category: "Posicionamento",
      difficulty: "Básico"
    },
    {
      id: 4,
      title: "Condução em Chuva",
      content: "Reduza a velocidade em 10-15 km/h em piso molhado. Aumente a distância de segurança para 4-5 segundos. Evite travagens bruscas e manobras repentinas. Ligue os faróis mesmo durante o dia.",
      icon: AlertTriangle,
      category: "Condições Adversas",
      difficulty: "Intermédio"
    },
    {
      id: 5,
      title: "Técnica de Curva",
      content: "Aproxime-se devagar, curve rápido, saia rápido. Trave antes da curva, não durante. Olhe sempre para onde quer ir, não para o obstáculo. O carro segue naturalmente o seu olhar.",
      icon: MapPin,
      category: "Técnicas Avançadas",
      difficulty: "Intermédio"
    },
    {
      id: 6,
      title: "Gestão da Velocidade",
      content: "A velocidade ideal não é a máxima permitida, mas a adequada às condições. Considere: tráfego, visibilidade, estado da via, condições meteorológicas. Uma condução suave e previsível é mais segura.",
      icon: Gauge,
      category: "Velocidade",
      difficulty: "Intermédio"
    },
    {
      id: 7,
      title: "Condução Defensiva em Rotundas",
      content: "Aproxime-se devagar, observe bem à esquerda. Sinalize a saída apenas quando passar a saída anterior à sua. Ceda sempre passagem a quem já está na rotunda. Mantenha-se na faixa exterior se possível.",
      icon: Shield,
      category: "Rotundas",
      difficulty: "Avançado"
    },
    {
      id: 8,
      title: "Antecipação de Perigos",
      content: "Observe sempre 12-15 segundos à frente. Procure pistas: luzes de travão, sinais de mudança de direção, peões nas bermas, crianças a brincar. Antecipe sempre o pior cenário possível.",
      icon: Lightbulb,
      category: "Prevenção",
      difficulty: "Avançado"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Básico': return 'bg-green-100 text-green-800 border-green-300';
      case 'Intermédio': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Avançado': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
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
            Aprenda técnicas essenciais para uma condução mais segura e responsável. 
            Estas dicas irão ajudá-lo a desenvolver bons hábitos ao volante.
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
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <tip.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className={getDifficultyColor(tip.difficulty)}>
                    {tip.difficulty}
                  </Badge>
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
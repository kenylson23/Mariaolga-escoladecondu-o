import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, AlertCircle, Clock, FileText, Car, Users, BookOpen, Target } from 'lucide-react';

interface ExamTip {
  id: number;
  title: string;
  content: string;
  type: 'do' | 'dont' | 'info';
}

export default function ExamTips() {
  const theoreticalTips: ExamTip[] = [
    {
      id: 1,
      title: "Estude o Manual do Código da Estrada",
      content: "Leia atentamente todo o manual oficial. É a base de todas as perguntas do exame. Não confie apenas em resumos online.",
      type: "do"
    },
    {
      id: 2,
      title: "Pratique com simuladores online",
      content: "Faça muitos testes práticos online. Familiarize-se com o formato das perguntas e o tipo de linguagem usada no exame real.",
      type: "do"
    },
    {
      id: 3,
      title: "Não decore apenas as respostas",
      content: "Compreenda a lógica por trás de cada regra. As perguntas podem ser formuladas de maneiras diferentes no exame real.",
      type: "dont"
    },
    {
      id: 4,
      title: "Chegue cedo no dia do exame",
      content: "Apareça pelo menos 30 minutos antes. Leve todos os documentos necessários: BI, certificado médico e comprovativo de pagamento.",
      type: "info"
    }
  ];

  const practicalTips: ExamTip[] = [
    {
      id: 1,
      title: "Ajuste sempre o banco e espelhos",
      content: "Mesmo que seja o carro da escola, ajuste tudo ao seu gosto. Demonstra que sabe a importância da posição correta de condução.",
      type: "do"
    },
    {
      id: 2,
      title: "Sinalize SEMPRE as manobras",
      content: "Pisca, espelho, ponto morto - nesta ordem. Mesmo que pareça óbvio, o examinador quer ver que tem este hábito automático.",
      type: "do"
    },
    {
      id: 3,
      title: "Não acelere desnecessariamente",
      content: "Condução calma e suave impressiona mais que velocidade. Evite arranques bruscos e travagens repentinas.",
      type: "dont"
    },
    {
      id: 4,
      title: "O examinador pode ficar em silêncio",
      content: "Não se preocupe se o examinador não falar muito. Concentre-se na condução e siga as instruções dadas.",
      type: "info"
    },
    {
      id: 5,
      title: "Mantenha as mãos no volante",
      content: "Evite gestos desnecessários. Mantenha sempre o controlo total do veículo e uma postura profissional.",
      type: "do"
    },
    {
      id: 6,
      title: "Não tente 'impressionar' o examinador",
      content: "Conduza normalmente, dentro dos limites. Manobras arriscadas ou desnecessárias podem resultar em reprovação.",
      type: "dont"
    }
  ];

  const getTipIcon = (type: string) => {
    switch (type) {
      case 'do': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'dont': return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'info': return <FileText className="w-5 h-5 text-blue-600" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTipStyle = (type: string) => {
    switch (type) {
      case 'do': return 'bg-green-50/50 border-green-200 dark:bg-green-950/50 dark:border-green-800';
      case 'dont': return 'bg-red-50/50 border-red-200 dark:bg-red-950/50 dark:border-red-800';
      case 'info': return 'bg-blue-50/50 border-blue-200 dark:bg-blue-950/50 dark:border-blue-800';
      default: return 'bg-gray-50/50 border-gray-200 dark:bg-gray-950/50 dark:border-gray-700';
    }
  };

  const preparationSteps = [
    {
      week: "4-6 semanas antes",
      tasks: [
        "Inscreva-se numa escola de condução",
        "Inicie o estudo teórico",
        "Faça o exame médico",
        "Comece as aulas práticas"
      ]
    },
    {
      week: "2-3 semanas antes",
      tasks: [
        "Intensifique as aulas práticas",
        "Pratique estacionamentos e manobras",
        "Faça simulados do exame teórico",
        "Revise pontos fracos"
      ]
    },
    {
      week: "1 semana antes",
      tasks: [
        "Aulas de revisão práticas",
        "Último simulado teórico",
        "Prepare todos os documentos",
        "Descanse bem na véspera"
      ]
    }
  ];

  return (
    <section id="conselhos-exame" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Conselhos para o <span className="text-primary">Exame Prático</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prepare-se adequadamente para os exames teórico e prático. 
            Siga estes conselhos para aumentar as suas hipóteses de sucesso.
          </p>
        </div>

        <Tabs defaultValue="teorico" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="teorico" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Exame Teórico
            </TabsTrigger>
            <TabsTrigger value="pratico" className="flex items-center gap-2">
              <Car className="w-4 h-4" />
              Exame Prático
            </TabsTrigger>
            <TabsTrigger value="preparacao" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Preparação
            </TabsTrigger>
          </TabsList>

          <TabsContent value="teorico" className="mt-8">
            <div className="grid gap-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">Exame Teórico</h3>
                <p className="text-muted-foreground">
                  30 perguntas | 27 respostas certas para aprovar | 35 minutos
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {theoreticalTips.map((tip) => (
                  <Card 
                    key={tip.id} 
                    className={getTipStyle(tip.type)}
                    data-testid={`theoretical-tip-${tip.id}`}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        {getTipIcon(tip.type)}
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tip.content}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pratico" className="mt-8">
            <div className="grid gap-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">Exame Prático</h3>
                <p className="text-muted-foreground">
                  25-35 minutos | Condução em cidade e estrada | Manobras obrigatórias
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {practicalTips.map((tip) => (
                  <Card 
                    key={tip.id} 
                    className={getTipStyle(tip.type)}
                    data-testid={`practical-tip-${tip.id}`}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        {getTipIcon(tip.type)}
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tip.content}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preparacao" className="mt-8">
            <div className="grid gap-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">Cronograma de Preparação</h3>
                <p className="text-muted-foreground">
                  Siga este plano para se preparar adequadamente para os exames
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {preparationSteps.map((step, index) => (
                  <Card key={index} className="hover-elevate" data-testid={`prep-step-${index}`}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        {step.week}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-sm">
                            <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Success statistics */}
        <Card className="mt-16 bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Taxa de Sucesso da Maria Olga
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">96%</div>
                <div className="text-muted-foreground">Aprovação no Teórico</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <div className="text-muted-foreground">Aprovação no Prático</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">89%</div>
                <div className="text-muted-foreground">Aprovação à 1ª Tentativa</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              A nossa experiência de 25 anos e métodos de ensino comprovados 
              resultam numa das melhores taxas de aprovação de Portugal.
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById('contacto');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              data-testid="button-start-lessons"
            >
              Começar Preparação
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
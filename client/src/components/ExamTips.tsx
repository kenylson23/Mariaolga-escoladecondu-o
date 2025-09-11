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
      title: "Estude o Código da Estrada Angolano",
      content: "Leia o Código da Estrada Angolano oficial. Foque nas leis de trânsito específicas do país. Não use materiais de outros países.",
      type: "do"
    },
    {
      id: 2,
      title: "Pratique questões sobre sinalização local",
      content: "Familiarize-se com os sinais de trânsito usados em Angola. Alguns podem diferir dos padrões internacionais. Pratique identificação de placas e sinais.",
      type: "do"
    },
    {
      id: 3,
      title: "Não ignore as multas e penalizações",
      content: "Estude bem o sistema de multas angolano. Conheça as infrações mais comuns e respectivas penalizações. É uma parte importante do exame.",
      type: "dont"
    },
    {
      id: 4,
      title: "Documentação necessária",
      content: "Leve o Bilhete de Identidade, certificado médico da Junta Médica aprovada, comprovativo de pagamento e fotos tipo passe. Chegue 45 minutos antes.",
      type: "info"
    }
  ];

  const practicalTips: ExamTip[] = [
    {
      id: 1,
      title: "Inspecção inicial do veículo",
      content: "Antes de iniciar, verifique pneus, luzes, espelhos e cintos. O examinador pode pedir para explicar alguns controlos do veículo. Mostre conhecimento.",
      type: "do"
    },
    {
      id: 2,
      title: "Adapte-se às condições da estrada",
      content: "Demonstre como ajusta a condução a buracos, terra batida ou trânsito intenso. Reduza velocidade e mantenha segurança em estradas periféricas.",
      type: "do"
    },
    {
      id: 3,
      title: "Não ignore peões e vendedores",
      content: "Em Angola, peões e vendedores ambulantes são comuns. Tenha paciência, reduza velocidade e sinalize claramente suas intenções.",
      type: "dont"
    },
    {
      id: 4,
      title: "Estacionamento em declive",
      content: "Luanda tem muitas ruas inclinadas. Pratique estacionar em aclives e declives. Saiba usar o travão de mão correctamente.",
      type: "info"
    },
    {
      id: 5,
      title: "Respeite as condições locais",
      content: "Conduza de forma adequada ao trânsito angolano: toque a buzina quando necessário (mas sem exageros), seja paciente com outros condutores.",
      type: "do"
    },
    {
      id: 6,
      title: "Não tenha medo dos buracos",
      content: "Se encontrar buracos durante o exame, navegue-os com calma. Reduza velocidade, passe devagar. O examinador compreende as condições das estradas.",
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
      week: "6-8 semanas antes",
      tasks: [
        "Inscreva-se numa escola de condução licenciada",
        "Faça exame médico na Junta Médica aprovada",
        "Inicie estudo do Código da Estrada angolano",
        "Comece aulas teóricas e práticas"
      ]
    },
    {
      week: "3-4 semanas antes",
      tasks: [
        "Intensifique aulas práticas em diferentes tipos de estrada",
        "Pratique condução em terra batida e asfalto",
        "Faça simulados do exame teórico com questões angolanas",
        "Revise sinalização e multas locais"
      ]
    },
    {
      week: "1-2 semanas antes",
      tasks: [
        "Aulas de revisão em condições reais de trânsito",
        "Pratique estacionamento em declive (comum em Luanda)",
        "Confirme documentos: BI, certificado médico, fotos",
        "Descanse e mantenha-se calmo"
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
            Prepare-se para os exames de condução em Angola. 
            Conselhos adaptados ao sistema angolano para garantir o seu sucesso.
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
                  25 perguntas | 23 respostas certas para aprovar | 30 minutos
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
                  30-40 minutos | Condução urbana e estrada | Estacionamento e manobras
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
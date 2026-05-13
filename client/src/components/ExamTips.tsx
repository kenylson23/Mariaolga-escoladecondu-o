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

        {/* CTA */}
        <div className="mt-16 max-w-4xl mx-auto rounded-3xl bg-primary overflow-hidden">
          <div className="relative px-10 py-14 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 text-center md:text-left">
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">Escola de Condução KL</p>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                Pronto para começar<br className="hidden md:block" /> a sua preparação?
              </h3>
              <p className="text-white/60 mt-3 text-sm max-w-md leading-relaxed">
                Os nossos instrutores certificados vão guiá-lo em cada etapa do processo até obter a sua carta.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <a
                href="#contacto"
                data-testid="button-start-lessons"
                className="inline-flex items-center justify-center bg-secondary text-foreground font-semibold px-7 py-3.5 rounded-2xl text-sm hover:bg-secondary/90 transition-colors"
              >
                Começar Preparação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
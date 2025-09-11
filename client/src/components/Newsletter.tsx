import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Gift, Newspaper, Bell, CheckCircle, Star, Percent, Users } from 'lucide-react';
import { newsletterSubscriptionSchema, type NewsletterSubscription } from '@shared/schema';

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  conditions: string;
  highlight: boolean;
}

export default function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const form = useForm<NewsletterSubscription>({
    resolver: zodResolver(newsletterSubscriptionSchema),
    defaultValues: {
      name: '',
      email: '',
      interests: []
    }
  });

  const currentOffers: Offer[] = [
    {
      id: 1,
      title: "Promoção de Outono",
      description: "Desconto especial em cursos da Categoria B para novos alunos",
      discount: "15%",
      validUntil: "31 de Dezembro",
      conditions: "Válido apenas para inscrições até ao final do mês",
      highlight: true
    },
    {
      id: 2,
      title: "Traz um Amigo",
      description: "Indica um amigo e ambos recebem desconto no curso",
      discount: "10%",
      validUntil: "Sempre válido",
      conditions: "Desconto aplicado quando ambos se inscrevem",
      highlight: false
    },
    {
      id: 3,
      title: "Estudante Universitário",
      description: "Desconto especial para estudantes do ensino superior",
      discount: "12%",
      validUntil: "Todo o ano letivo",
      conditions: "Necessário apresentar cartão de estudante válido",
      highlight: false
    }
  ];

  const interestOptions = [
    { id: 'categoria-b', label: 'Categoria B - Automóveis' },
    { id: 'categoria-a', label: 'Categoria A - Motociclos' },
    { id: 'categoria-c', label: 'Categoria C - Pesados' },
    { id: 'noticias', label: 'Notícias do Código da Estrada' },
    { id: 'dicas', label: 'Dicas de Condução' },
    { id: 'promocoes', label: 'Promoções Exclusivas' }
  ];

  const handleSubscribe = (data: NewsletterSubscription) => {
    // Simulate subscription
    console.log('Newsletter subscription:', data);
    setIsSubscribed(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubscribed(false);
      form.reset();
    }, 5000);
  };

  if (isSubscribed) {
    return (
      <section id="newsletter" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Inscrição Confirmada!
              </h3>
              <p className="text-muted-foreground mb-6">
                Obrigado por se inscrever na nossa newsletter. Receberá em breve 
                as nossas dicas exclusivas e ofertas especiais no seu email.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <Gift className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">
                  Oferta especial: 10% de desconto no seu primeiro curso!
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Código promocional enviado para o seu email
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Newsletter signup */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Mail className="w-6 h-6 text-primary" />
                Newsletter Maria Olga
              </CardTitle>
              <p className="text-muted-foreground">
                Receba dicas exclusivas, ofertas especiais e as últimas novidades 
                sobre condução e código da estrada diretamente no seu email.
              </p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubscribe)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="O seu nome"
                              data-testid="input-newsletter-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="seuemail@exemplo.com"
                              data-testid="input-newsletter-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="interests"
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">
                          Interesses (selecione os tópicos que lhe interessam):
                        </FormLabel>
                        <div className="grid md:grid-cols-2 gap-3">
                          {interestOptions.map((option) => (
                            <FormField
                              key={option.id}
                              control={form.control}
                              name="interests"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={option.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(option.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, option.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value: string) => value !== option.id
                                                )
                                              )
                                        }}
                                        data-testid={`checkbox-${option.id}`}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal cursor-pointer">
                                      {option.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Bell className="w-4 h-4" />
                    O que irá receber:
                  </div>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Dicas semanais de condução defensiva</li>
                    <li>• Ofertas exclusivas e promoções especiais</li>
                    <li>• Novidades sobre o código da estrada</li>
                    <li>• Conselhos para o sucesso nos exames</li>
                  </ul>
                </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90" 
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    data-testid="button-subscribe-newsletter"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Subscrever Newsletter Gratuita
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Pode cancelar a subscrição a qualquer momento. 
                    Os seus dados estão seguros connosco.
                  </p>
                </form>
              </Form>

            </CardContent>
          </Card>

          {/* Current offers */}
          <div className="space-y-6">
            <Card className="bg-primary-foreground border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Gift className="w-6 h-6" />
                  Ofertas Atuais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentOffers.map((offer) => (
                  <Card 
                    key={offer.id} 
                    className={`${offer.highlight ? 'ring-2 ring-orange border-orange' : ''}`}
                    data-testid={`offer-card-${offer.id}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-card-foreground">{offer.title}</h4>
                        <div className="flex items-center gap-2">
                          {offer.highlight && (
                            <Badge className="bg-orange text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Destaque
                            </Badge>
                          )}
                          <Badge variant="outline" className="font-bold text-primary">
                            <Percent className="w-3 h-3 mr-1" />
                            {offer.discount}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {offer.description}
                      </p>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p><strong>Válido até:</strong> {offer.validUntil}</p>
                        <p><strong>Condições:</strong> {offer.conditions}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter benefits */}
            <Card className="bg-orange/10 border-orange/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-orange" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">
                      Junte-se a mais de 2.500 subscritores
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Que já beneficiam das nossas dicas e ofertas exclusivas
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange">95%</div>
                    <div className="text-xs text-muted-foreground">Taxa de aprovação dos subscritores</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange">€89</div>
                    <div className="text-xs text-muted-foreground">Poupança média por aluno</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
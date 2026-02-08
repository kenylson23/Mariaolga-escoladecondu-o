import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Car, Truck, Clock, CheckCircle, Info } from 'lucide-react';
import coursesData from '@/data/courses.json';
import { useState } from 'react';

export default function Courses() {
  const [isFeesModalOpen, setIsFeesModalOpen] = useState(false);
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Car': return Car;
      case 'Truck': return Truck;
      default: return Car;
    }
  };

  const courses = coursesData.courses.map(course => ({
    ...course,
    icon: getIconComponent(course.icon)
  }));

  const additionalFeesTotal = coursesData.additionalInfo.totalAdditionalFees;

  return (
    <section id="categorias" className="py-24 bg-background text-foreground relative overflow-hidden">
      {/* Subtle Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-muted/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">
            #CATEGORIAS
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-foreground font-serif">
            Formação que acelera o seu futuro
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Escolha a categoria ideal para as suas necessidades. Todos os nossos cursos seguem as normas do IMT Angola com instrutores certificados.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {courses.map((course, index) => {
            const isPopular = course.popular;
            const totalCost = course.priceNumeric + course.rupeFee.priceNumeric + additionalFeesTotal;

            return (
              <Card 
                key={index} 
                className={`relative rounded-[24px] flex flex-col justify-between overflow-hidden transition-all duration-300 border-none shadow-2xl ${
                  isPopular 
                    ? 'bg-card ring-1 ring-primary/40' 
                    : 'bg-card/50 border border-border'
                }`}
                data-testid={`card-course-${course.category.toLowerCase().replace(' ', '-')}`}
              >
                <div className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${isPopular ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      <course.icon className="w-6 h-6" />
                    </div>
                    {isPopular && (
                      <Badge className="bg-primary text-primary-foreground hover:bg-primary border-none px-3 py-1 text-[10px] tracking-wider uppercase font-bold">
                        Mais Popular
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tight text-foreground">
                        {course.price}
                      </span>
                      <span className="text-sm text-muted-foreground">Kz</span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        + {course.rupeFee.price} Kz (Taxa RUPE)
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        + {additionalFeesTotal.toLocaleString('pt-AO')} Kz (Taxas comuns)
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">Total Estimado</p>
                      <p className="text-xl font-bold text-foreground">{totalCost.toLocaleString('pt-AO')} Kz</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-3 text-sm text-foreground/80">
                      <Clock className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span>Duração: {course.duration}</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 pt-0 relative z-10">
                  <Button 
                    className={`w-full rounded-full py-6 text-sm font-semibold transition-all duration-300 ${
                      isPopular 
                        ? 'bg-primary hover:bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                        : 'bg-secondary hover:bg-secondary text-secondary-foreground'
                    }`}
                    data-testid={`button-inscrever-${course.category.toLowerCase().replace(' ', '-')}`}
                  >
                    Inscrever-se Agora
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-6">
            Preços e taxas sujeitos a alterações conforme regulamentação do IMT.
          </p>
          
          <Dialog open={isFeesModalOpen} onOpenChange={setIsFeesModalOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                className="rounded-full text-muted-foreground hover:text-foreground hover:bg-muted px-8 py-6"
                data-testid="button-outras-categorias"
              >
                Ver Detalhes das Taxas
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-border text-foreground max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-foreground mb-4">Detalhamento das Taxas</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h4 className="text-primary font-semibold mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Taxas Comuns (IMT Angola)
                  </h4>
                  <div className="grid gap-3">
                    {coursesData.additionalInfo.additionalFees.map((fee: any, i: number) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-muted rounded-lg border border-border">
                        <span className="text-muted-foreground">{fee.name}</span>
                        <span className="font-semibold">{fee.priceNumeric.toLocaleString('pt-AO')} Kz</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <span className="font-bold text-primary">Total de Taxas Comuns</span>
                      <span className="font-bold text-foreground">{additionalFeesTotal.toLocaleString('pt-AO')} Kz</span>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-xl border border-border">
                  <p className="mb-2"><strong>Nota sobre Taxas RUPE:</strong></p>
                  <p>As taxas RUPE (Documento de Arrecadação de Receitas do Estado) variam de acordo com a categoria selecionada e são obrigatórias para a emissão do processo no IMT.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

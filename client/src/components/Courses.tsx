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
    <section id="categorias" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Subtle Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-purple-400 mb-3">
            #CATEGORIAS
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white font-serif">
            Formação que acelera o seu futuro
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
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
                    ? 'bg-zinc-900 ring-1 ring-purple-500/40' 
                    : 'bg-zinc-900/50 border border-zinc-800'
                }`}
                data-testid={`card-course-${course.category.toLowerCase().replace(' ', '-')}`}
              >
                <div className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${isPopular ? 'bg-purple-500/20 text-purple-400' : 'bg-zinc-800 text-zinc-400'}`}>
                      <course.icon className="w-6 h-6" />
                    </div>
                    {isPopular && (
                      <Badge className="bg-purple-600 text-white hover:bg-purple-500 border-none px-3 py-1 text-[10px] tracking-wider uppercase font-bold">
                        Mais Popular
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tight text-white">
                        {course.price}
                      </span>
                      <span className="text-sm text-zinc-400">Kz</span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-zinc-500 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-zinc-600" />
                        + {course.rupeFee.price} Kz (Taxa RUPE)
                      </p>
                      <p className="text-xs text-zinc-500 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-zinc-600" />
                        + {additionalFeesTotal.toLocaleString('pt-AO')} Kz (Taxas comuns)
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-zinc-800">
                      <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-1">Total Estimado</p>
                      <p className="text-xl font-bold text-white">{totalCost.toLocaleString('pt-AO')} Kz</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-zinc-300">
                        <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? 'text-purple-400' : 'text-zinc-600'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-3 text-sm text-zinc-300">
                      <Clock className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? 'text-purple-400' : 'text-zinc-600'}`} />
                      <span>Duração: {course.duration}</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 pt-0 relative z-10">
                  <Button 
                    className={`w-full rounded-full py-6 text-sm font-semibold transition-all duration-300 ${
                      isPopular 
                        ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/20' 
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
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
          <p className="text-zinc-500 text-sm mb-6">
            Preços e taxas sujeitos a alterações conforme regulamentação do IMT.
          </p>
          
          <Dialog open={isFeesModalOpen} onOpenChange={setIsFeesModalOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                className="rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 px-8 py-6"
                data-testid="button-outras-categorias"
              >
                Ver Detalhes das Taxas
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-950 border-zinc-800 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-white mb-4">Detalhamento das Taxas</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Taxas Comuns (IMT Angola)
                  </h4>
                  <div className="grid gap-3">
                    {coursesData.additionalInfo.additionalFees.map((fee: any, i: number) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                        <span className="text-zinc-300">{fee.name}</span>
                        <span className="font-semibold">{fee.priceNumeric.toLocaleString('pt-AO')} Kz</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <span className="font-bold text-purple-400">Total de Taxas Comuns</span>
                      <span className="font-bold text-white">{additionalFeesTotal.toLocaleString('pt-AO')} Kz</span>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-zinc-400 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
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

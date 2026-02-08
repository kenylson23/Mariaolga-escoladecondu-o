import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Truck, Clock, CheckCircle, Star } from 'lucide-react';
import coursesData from '@/data/courses.json';

export default function Courses() {
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
    <section id="categorias" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-400 mb-3">
            #CATEGORIAS
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-neutral-50 font-serif">
            Formação que acelera o seu futuro
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-400 max-w-2xl mx-auto">
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
                className={`relative rounded-[32px] flex flex-col justify-between overflow-hidden transition-all duration-300 border-none shadow-2xl ${
                  isPopular 
                    ? 'bg-gradient-to-b from-orange-500/15 via-orange-500/5 to-black ring-1 ring-orange-500/50' 
                    : 'bg-neutral-900/40 border border-neutral-800'
                }`}
                data-testid={`card-course-${course.category.toLowerCase().replace(' ', '-')}`}
              >
                {/* Decorative mesh for popular card */}
                {isPopular && (
                  <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen" 
                    style={{ 
                      backgroundImage: 'radial-gradient(circle at 0 0,rgba(249,115,22,0.15),transparent 55%), radial-gradient(circle at 100% 100%,rgba(249,115,22,0.15),transparent 55%)' 
                    }} 
                  />
                )}

                <div className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${isPopular ? 'bg-orange-500/20 text-orange-400' : 'bg-neutral-800 text-neutral-400'}`}>
                      <course.icon className="w-6 h-6" />
                    </div>
                    {isPopular && (
                      <Badge className="bg-orange-500 text-black hover:bg-orange-400 border-none px-3 py-1 text-[10px] tracking-wider uppercase font-bold">
                        Mais Popular
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tight text-white">
                        {course.price}
                      </span>
                      <span className="text-sm text-neutral-400">Kz</span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-neutral-500 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-neutral-600" />
                        + {course.rupeFee.price} Kz (Taxa RUPE)
                      </p>
                      <p className="text-xs text-neutral-500 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-neutral-600" />
                        + {additionalFeesTotal.toLocaleString('pt-AO')} Kz (Taxas comuns)
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-800">
                      <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-1">Total Estimado</p>
                      <p className="text-xl font-bold text-white">{totalCost.toLocaleString('pt-AO')} Kz</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-neutral-300">
                        <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? 'text-orange-400' : 'text-neutral-500'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-3 text-sm text-neutral-300">
                      <Clock className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? 'text-orange-400' : 'text-neutral-500'}`} />
                      <span>Duração: {course.duration}</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 pt-0 relative z-10">
                  <Button 
                    className={`w-full rounded-full py-6 text-sm font-semibold transition-all duration-300 ${
                      isPopular 
                        ? 'bg-orange-500 hover:bg-orange-400 text-black shadow-[0_0_20px_rgba(249,115,22,0.3)]' 
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
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

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-500 text-sm mb-6">
            Preços e taxas sujeitos a alterações conforme regulamentação do IMT.
          </p>
          <Button 
            variant="outline" 
            className="rounded-full border-neutral-700 text-neutral-300 hover:bg-neutral-900 px-8 py-6"
            data-testid="button-outras-categorias"
          >
            Ver Detalhes das Taxas
          </Button>
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Car, Truck, CheckCircle, Info, ArrowRight } from 'lucide-react';
import coursesData from '@/data/courses.json';
import { useState } from 'react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Courses() {
  const [isFeesModalOpen, setIsFeesModalOpen] = useState(false);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Car': return Car;
      case 'Truck': return Truck;
      default: return Car;
    }
  };

  const courses = coursesData.courses.map(course => ({
    ...course,
    icon: getIconComponent(course.icon),
  }));

  const additionalFeesTotal = coursesData.additionalInfo.totalAdditionalFees;

  return (
    <section id="categorias" className="relative py-28 bg-muted/40 overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

      {/* BG decorative text */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute top-0 right-4 text-[clamp(80px,14vw,180px)] font-black text-foreground/[0.03] leading-none tracking-tighter"
      >
        KL
      </span>

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">Categorias</span>
            <span className="h-px w-10 bg-secondary" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-foreground leading-tight tracking-tight mb-5">
            Formação que acelera<br className="hidden sm:block" /> o seu futuro
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Escolha a categoria ideal. Todos os cursos seguem as normas do IMT Angola com instrutores certificados.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {courses.map((course, index) => {
            const isPopular = course.popular;
            const totalCost = course.priceNumeric + course.rupeFee.priceNumeric + additionalFeesTotal;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                data-testid={`card-course-${course.category.toLowerCase().replace(' ', '-')}`}
                className={`relative flex flex-col rounded-3xl overflow-hidden border transition-shadow duration-300 ${
                  isPopular
                    ? 'bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20'
                    : 'bg-card border-border hover:shadow-xl hover:shadow-black/5'
                }`}
              >
                {/* Popular ribbon */}
                {isPopular && (
                  <div className="absolute top-5 right-5 bg-secondary text-foreground font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Mais Popular
                  </div>
                )}

                <div className="p-8 flex-1">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    isPopular ? 'bg-white/15' : 'bg-primary/8'
                  }`}>
                    <course.icon className={`w-6 h-6 ${isPopular ? 'text-white' : 'text-primary'}`} />
                  </div>

                  <h3 className={`text-2xl font-black mb-2 tracking-tight ${isPopular ? 'text-white' : 'text-foreground'}`}>
                    {course.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-8 ${isPopular ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {course.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-end gap-1.5 mb-3">
                      <span className={`text-5xl font-black tracking-tight leading-none ${isPopular ? 'text-white' : 'text-foreground'}`}>
                        {course.price}
                      </span>
                      <span className={`text-sm mb-1.5 ${isPopular ? 'text-white/60' : 'text-muted-foreground'}`}>Kz</span>
                    </div>
                    <div className={`space-y-1.5 text-xs ${isPopular ? 'text-white/60' : 'text-muted-foreground'}`}>
                      <p>+ {course.rupeFee.price} Kz (Taxa RUPE)</p>
                      <p>+ {additionalFeesTotal.toLocaleString('pt-AO')} Kz (Taxas comuns)</p>
                    </div>
                    <div className={`mt-4 pt-4 border-t ${isPopular ? 'border-white/15' : 'border-border'}`}>
                      <p className={`text-[10px] uppercase tracking-widest font-semibold mb-1 ${isPopular ? 'text-white/50' : 'text-muted-foreground'}`}>
                        Total Estimado
                      </p>
                      <p className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-foreground'}`}>
                        {totalCost.toLocaleString('pt-AO')} Kz
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8">
                    {course.features.map((feature, fIndex) => (
                      <li key={fIndex} className={`flex items-start gap-2.5 text-sm ${isPopular ? 'text-white/80' : 'text-foreground/75'}`}>
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-secondary' : 'text-secondary'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                    <li className={`flex items-start gap-2.5 text-sm ${isPopular ? 'text-white/80' : 'text-foreground/75'}`}>
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-secondary" />
                      <span>Duração: {course.duration}</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-8 pb-8">
                  <motion.a
                    href={`https://wa.me/244923912483?text=${encodeURIComponent(`Olá! Tenho interesse no curso ${course.title}. Gostaria de mais informações.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid={`button-inscrever-${course.category.toLowerCase().replace(' ', '-')}`}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm transition-colors ${
                      isPopular
                        ? 'bg-secondary text-foreground hover:bg-secondary/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    Inscrever-se Agora
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-muted-foreground text-sm mb-5">
            Preços e taxas sujeitos a alterações conforme regulamentação do IMT Angola.
          </p>

          <Dialog open={isFeesModalOpen} onOpenChange={setIsFeesModalOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="rounded-full text-muted-foreground gap-2 px-6"
                data-testid="button-outras-categorias"
              >
                <Info className="w-4 h-4" />
                Ver Detalhes das Taxas
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-border text-foreground max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black text-foreground mb-4 tracking-tight">Detalhamento das Taxas</DialogTitle>
              </DialogHeader>
              <div className="space-y-5">
                <div>
                  <h4 className="text-primary font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <Info className="w-4 h-4" />
                    Taxas Comuns (IMT Angola)
                  </h4>
                  <div className="grid gap-2">
                    {coursesData.additionalInfo.additionalFees.map((fee: any, i: number) => (
                      <div key={i} className="flex justify-between items-center px-4 py-3 bg-muted rounded-xl">
                        <span className="text-muted-foreground text-sm">{fee.name}</span>
                        <span className="font-bold text-sm">{fee.priceNumeric.toLocaleString('pt-AO')} Kz</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center px-4 py-3 bg-primary/10 rounded-xl border border-primary/20">
                      <span className="font-bold text-primary text-sm">Total de Taxas Comuns</span>
                      <span className="font-bold">{additionalFeesTotal.toLocaleString('pt-AO')} Kz</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-xl">
                  <p className="font-semibold text-foreground mb-1">Nota sobre Taxas RUPE:</p>
                  <p>As taxas RUPE variam por categoria e são obrigatórias para emissão do processo no IMT.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}

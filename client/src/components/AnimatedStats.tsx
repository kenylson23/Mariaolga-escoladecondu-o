import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const stats = [
  {
    value: 12,
    suffix: '+',
    label: 'Anos de Experiência',
    description: 'Formando condutores com excelência desde 2013',
    index: '01',
  },
  {
    value: 3500,
    suffix: '+',
    label: 'Alunos Formados',
    description: 'Milhares de condutores preparados pela KL',
    index: '02',
  },
  {
    value: 12,
    suffix: '',
    label: 'Veículos na Frota',
    description: 'Frota moderna e preparada para o seu aprendizado',
    index: '03',
  },
];

function StatCard({ stat, isActive }: { stat: typeof stats[0]; isActive: boolean }) {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });
  const count = useCounterAnimation({ end: stat.value, isVisible, duration: 2000 });

  return (
    <div ref={elementRef as React.RefObject<HTMLDivElement>} className="h-full flex flex-col justify-between p-10 md:p-14">
      <span className="text-white/20 font-black text-7xl md:text-[120px] leading-none tracking-tighter select-none">
        {stat.index}
      </span>

      <div className="mt-auto">
        <div className="flex items-end gap-1 mb-3">
          <span className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
            {count.toLocaleString('pt-AO')}
          </span>
          <span className="text-4xl md:text-6xl font-black text-secondary leading-none mb-1">
            {stat.suffix}
          </span>
        </div>
        <p className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">{stat.label}</p>
        <p className="text-white/50 text-sm leading-relaxed max-w-xs">{stat.description}</p>
      </div>
    </div>
  );
}

export default function AnimatedStats() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: '-100px' });

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % stats.length);
    }, 3500);
  };

  useEffect(() => {
    startAutoplay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleDotClick = (i: number) => {
    setActive(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoplay();
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-primary overflow-hidden"
      data-testid="section-animated-stats"
    >
      {/* Decorative large "KL" watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -right-8 top-1/2 -translate-y-1/2 text-[clamp(160px,22vw,280px)] font-black text-white/[0.04] leading-none tracking-tighter"
      >
        KL
      </span>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[420px] md:min-h-[500px]">
        {/* Left — label + dots */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col justify-between px-8 py-12 md:px-14 md:py-16 border-b lg:border-b-0 lg:border-r border-white/10"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-secondary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">Escola de Condução KL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Números que<br />
              <span className="text-white/40">falam por si</span>
            </h2>
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
              Mais de uma década de dedicação ao ensino da condução em Angola, com resultados que comprovam a nossa excelência.
            </p>
          </div>

          {/* Navigation dots + progress */}
          <div className="mt-10 flex items-center gap-4">
            {stats.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                aria-label={`Ver estatística ${i + 1}`}
                className="group flex flex-col gap-1.5"
              >
                <motion.div
                  animate={{ width: active === i ? 40 : 12 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={`h-1 rounded-full transition-colors duration-300 ${active === i ? 'bg-secondary' : 'bg-white/20 group-hover:bg-white/40'}`}
                />
              </button>
            ))}
            <span className="ml-2 text-white/30 text-xs font-mono">
              {String(active + 1).padStart(2, '0')} / {String(stats.length).padStart(2, '0')}
            </span>
          </div>
        </motion.div>

        {/* Right — animated stat */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <StatCard stat={stats[active]} isActive={true} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom ticker — all 3 stats in a row on large screens */}
      <div className="border-t border-white/10 hidden lg:grid grid-cols-3">
        {stats.map((stat, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`text-left px-10 py-6 border-r border-white/10 last:border-r-0 transition-colors duration-200 ${active === i ? 'bg-white/5' : 'hover:bg-white/[0.03]'}`}
          >
            <p className={`text-xs uppercase tracking-widest font-semibold mb-0.5 transition-colors ${active === i ? 'text-secondary' : 'text-white/30'}`}>
              {stat.index}
            </p>
            <p className={`text-sm font-bold transition-colors ${active === i ? 'text-white' : 'text-white/50'}`}>
              {stat.label}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}

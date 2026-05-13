import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import mariaOlgaImage from '@assets/Gemini_Generated_Image_j60n42j60n42j60n_1778662345906.png';
import schoolImage from '@assets/Gemini_Generated_Image_xymirgxymirgxymi_1778662049110.png';
import AnimatedStats from '@/components/AnimatedStats';

const features = [
  { title: 'Segurança em Primeiro', description: 'Priorizamos a segurança rodoviária em cada lição, formando condutores responsáveis.' },
  { title: 'Taxa de Sucesso 90%+', description: 'A maioria dos nossos alunos é aprovada no exame de condução à primeira tentativa.' },
  { title: 'Ensino Personalizado', description: 'Adaptamos o método de ensino às necessidades individuais de cada aluno.' },
  { title: 'Horários Flexíveis', description: 'Aulas em horários convenientes, incluindo fins de semana e feriados.' },
];

const highlights = [
  'Instrutores Certificados',
  'Frota Moderna de Veículos',
  'Aulas Práticas e Teóricas',
  'Suporte no Processo de Carta',
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: '-80px' });

  return (
    <section id="sobre" className="relative py-28 bg-background overflow-hidden">
      {/* Large decorative BG text */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-8 left-0 text-[clamp(100px,18vw,220px)] font-black text-foreground/[0.03] leading-none tracking-tighter"
      >
        KL
      </span>

      {/* Glow blobs */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4" ref={sectionRef}>
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-secondary" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">Sobre a Nossa Instituição</span>
        </motion.div>

        {/* Main two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image column */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={schoolImage}
                alt="Escola de Condução KL"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
              className="absolute -bottom-6 -right-4 md:-right-8 z-20 bg-white dark:bg-card rounded-2xl shadow-2xl p-5 flex items-center gap-4 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-3xl font-black text-primary leading-none">12+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-0.5">Anos de Experiência</p>
              </div>
            </motion.div>

            {/* Small secondary image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="absolute -bottom-12 left-6 hidden md:block"
            >
              <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-background shadow-xl">
                <img src={mariaOlgaImage} alt="Instrutora KL" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Orange accent line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
              className="absolute -left-4 top-8 bottom-8 w-1 bg-secondary rounded-full origin-top hidden lg:block"
            />
          </motion.div>

          {/* Content column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-8"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-tight">
              Excelência na<br />
              Formação de{' '}
              <span className="relative inline-block">
                <span className="text-secondary">Condutores</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary origin-left"
                />
              </span>
              <br />
              desde 2013
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              A <strong className="text-foreground">Escola de Condução KL</strong> nasceu com o propósito de elevar o padrão do ensino rodoviário em Angola. Em mais de uma década, transformamos o medo em confiança para milhares de condutores.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href="#categorias"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-full text-sm shadow-lg shadow-primary/20 transition-shadow hover:shadow-primary/30"
              >
                Ver Cursos
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-muted transition-colors"
              >
                Falar Connosco
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Features grid */}
        <div ref={featuresRef} className="mt-36">
          <motion.div
            variants={container}
            initial="hidden"
            animate={featuresInView ? 'show' : 'hidden'}
            className="mb-14 text-center"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-3">
              Por que escolher a KL?
            </motion.p>
            <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
              A nossa diferença
            </motion.h3>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={featuresInView ? 'show' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-card border border-border rounded-2xl p-7 overflow-hidden cursor-default"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10">
                  <h4 className="text-base font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-28">
        <AnimatedStats />
      </div>
    </section>
  );
}

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import vehiclesImage from '@assets/Gemini_Generated_Image_7ytgr57ytgr57ytg_1778663721818.png';
import vehiclesImage2 from '@assets/Gemini_Generated_Image_dfvip4dfvip4dfvi_1778663763636.png';
import schoolImage from '@assets/Gemini_Generated_Image_pnjfklpnjfklpnjf_1778664763212.png';
import heroImage from '@assets/Gemini_Generated_Image_nyg2e4nyg2e4nyg2_1778665000186.png';

const images = [
  { id: 1, src: vehiclesImage, alt: 'Frota de veículos modernos', category: 'veiculos', title: 'Frota Moderna', span: 'lg:col-span-2' },
  { id: 2, src: schoolImage, alt: 'Instalações da escola', category: 'instalacoes', title: 'Instalações Modernas', span: '' },
  { id: 4, src: vehiclesImage2, alt: 'Veículo de instrução', category: 'veiculos', title: 'Duplo Comando', span: '' },
  { id: 3, src: heroImage, alt: 'Aula prática de condução', category: 'aulas', title: 'Aulas Práticas', span: 'lg:col-span-2' },
];

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'veiculos', label: 'Veículos' },
  { id: 'instalacoes', label: 'Instalações' },
  { id: 'aulas', label: 'Aulas' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [lightbox, setLightbox] = useState<null | typeof images[0]>(null);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = activeCategory === 'todos' ? images : images.filter(img => img.category === activeCategory);

  return (
    <section id="galeria" className="relative py-28 bg-background overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">Galeria</span>
            <span className="h-px w-10 bg-secondary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-5">
            Nossa <span className="text-primary">Galeria</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Conheça as nossas instalações, veículos e ambiente de aprendizagem.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`button-filter-${cat.id}`}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                activeCategory === cat.id
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="filterBg"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
          >
            {filtered.map(img => (
              <motion.div
                key={img.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className={`group relative rounded-2xl overflow-hidden aspect-video cursor-pointer ${img.span}`}
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-bold text-lg tracking-tight">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-5 text-sm">Quer conhecer pessoalmente as nossas instalações?</p>
          <motion.a
            href={`https://wa.me/244923912483?text=${encodeURIComponent('Olá! Gostaria de agendar uma visita à Escola de Condução KL.')}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            data-testid="button-agendar-visita"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-sm shadow-lg shadow-primary/20"
          >
            Agendar Visita
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden cursor-default"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-xl">{lightbox.title}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center text-lg hover:bg-white/20 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

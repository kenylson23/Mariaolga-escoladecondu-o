import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight, Twitter, Linkedin } from 'lucide-react';
import siteData from '@/data/site.json';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Facebook': return Facebook;
      case 'Instagram': return Instagram;
      case 'Youtube': return Youtube;
      case 'Twitter': return Twitter;
      case 'Linkedin': return Linkedin;
      default: return Facebook;
    }
  };

  const socialLinks = siteData.socialLinks.map(link => ({ ...link, icon: getIconComponent(link.icon) }));
  const quickLinks = siteData.navigation.quickLinks;

  const courses = [
    { label: 'Ligeiro Amador', href: '#categorias' },
    { label: 'Ligeiro Profissional', href: '#categorias' },
    { label: 'Pesado Profissional', href: '#categorias' },
    { label: 'Categorias de Reciclagem', href: '#categorias' },
  ];

  return (
    <footer className="bg-background" ref={ref}>
      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-4 md:mx-8 lg:mx-12 rounded-3xl bg-primary overflow-hidden mb-0"
      >
        <div className="relative px-8 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-white/50 text-sm uppercase tracking-widest font-semibold mb-3">Pronto para começar?</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight flex items-center gap-4">
              Vamos conversar?
              <ArrowUpRight className="w-10 h-10 text-secondary" strokeWidth={2} />
            </h2>
          </div>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative z-10 shrink-0 inline-flex items-center gap-2 bg-secondary text-foreground font-bold px-8 py-4 rounded-2xl text-sm shadow-lg shadow-secondary/20"
          >
            Contactar Agora
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>

      {/* Main footer */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="container mx-auto px-4 pt-20 pb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-black text-foreground tracking-tight">
                {siteData.company.name.split(' KL')[0]}{' '}
                <span className="text-secondary">KL</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              {siteData.company.description}
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-5">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-5">Categorias</h4>
            <ul className="space-y-3">
              {courses.map((course, i) => (
                <li key={i}>
                  <a href={course.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-5">Contacto</h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Luanda, Angola</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-sm text-muted-foreground">{siteData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-sm text-muted-foreground">{siteData.contact.email}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {siteData.company.name}.</span>
            <span className="text-border">|</span>
            <span>
              Feito por{' '}
              <a href="https://www.instagram.com/keny_ggg/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                Kenylson Lourenço
              </a>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Termos & Condições</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

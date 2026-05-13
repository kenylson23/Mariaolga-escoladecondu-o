import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import siteData from '@/data/site.json';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const menuItems = siteData.navigation.menuItems;

  const handleQuickContact = () => {
    const msg = "Olá! Gostaria de saber mais informações sobre as categorias da Escola de Condução KL.";
    window.open(`https://wa.me/244949639932?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 flex justify-center w-full px-4 pt-3">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`max-w-5xl w-full rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl shadow-lg shadow-black/5 border border-border'
            : 'bg-background/70 backdrop-blur-md border border-border/50'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-lg font-black tracking-tight text-foreground">
            {siteData.company.name.split(' KL')[0]}{' '}
            <span className="text-primary">KL</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
                className="relative px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0.5 left-3 right-3 h-px bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </div>

          <div className="w-px h-4 bg-border" />

          <motion.button
            onClick={handleQuickContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            data-testid="button-contacto-rapido"
            className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full shadow-md shadow-primary/20 hover:shadow-primary/30 transition-shadow"
          >
            Contacto Rápido
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-foreground hover:bg-muted transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="button-mobile-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isMenuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-[68px] left-4 right-4 md:hidden"
          >
            <div className="rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-xl p-3 space-y-1">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="h-px bg-border mx-2 my-1" />
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: menuItems.length * 0.05 }}
                className="w-full bg-primary text-primary-foreground text-sm font-semibold py-2.5 rounded-xl"
                onClick={() => { handleQuickContact(); setIsMenuOpen(false); }}
                data-testid="button-mobile-contacto"
              >
                Contacto Rápido
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

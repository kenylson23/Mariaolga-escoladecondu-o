import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import siteData from '@/data/site.json';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = siteData.navigation.menuItems;

  const handleQuickContact = () => {
    const whatsappNumber = "244949639932";
    const whatsappMessage = "Olá! Gostaria de saber mais informações sobre as categorias da Escola de Condução KL.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 flex justify-center w-full px-4 pt-4">
      <nav className="max-w-5xl w-full bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-purple-500/10">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" viewBox="0 0 48 48" fill="currentColor">
              <path d="M24 10 L26 22 L38 24 L26 26 L24 38 L22 26 L10 24 L22 22 Z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            {siteData.company.name.split(' KL')[0]} <span className="text-purple-500">KL</span>
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
                data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="h-6 w-px bg-white/10"></div>
          
          <button 
            onClick={handleQuickContact}
            className="group relative inline-flex cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.05] text-white text-xs font-semibold tracking-tight rounded-full px-6 py-2 items-center justify-center overflow-hidden"
            style={{
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)',
              background: 'radial-gradient(ellipse at bottom, rgba(124,58,237,0.5) 0%, rgba(0,0,0,1) 100%)'
            }}
            data-testid="button-contacto-rapido"
          >
            <span className="relative z-10 text-sm font-medium">Contacto Rápido</span>
            <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white to-transparent"></span>
          </button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10 rounded-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-4 right-4 md:hidden">
          <div className="space-y-1 rounded-2xl border border-white/10 bg-zinc-950/90 p-4 backdrop-blur-xl shadow-2xl">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
                data-testid={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
              </a>
            ))}
            <div className="my-3 h-px w-full bg-white/10"></div>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-500 text-white rounded-xl py-6"
              onClick={() => {
                handleQuickContact();
                setIsMenuOpen(false);
              }}
              data-testid="button-mobile-contacto"
            >
              Contacto Rápido
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
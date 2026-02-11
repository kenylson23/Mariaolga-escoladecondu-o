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
    <header className="sticky top-0 z-50 flex justify-center w-full px-4 pt-2">
      <nav className="max-w-5xl w-full bg-background/80 backdrop-blur-md border border-border rounded-full px-5 py-2 flex items-center justify-between shadow-lg">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-lg font-bold tracking-tight text-foreground">
            {siteData.company.name.split(' KL')[0]} <span className="text-primary">KL</span>
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-5">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="h-4 w-px bg-border"></div>
          
          <Button 
            onClick={handleQuickContact}
            size="sm"
            className="rounded-full px-5 font-semibold"
            data-testid="button-contacto-rapido"
          >
            Contacto Rápido
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground hover:bg-accent rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-4 right-4 md:hidden">
          <div className="space-y-1 rounded-2xl border border-border bg-background/95 p-3 backdrop-blur-xl shadow-xl">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
                data-testid={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
              </a>
            ))}
            <div className="my-2 h-px w-full bg-border"></div>
            <Button 
              className="w-full rounded-xl"
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
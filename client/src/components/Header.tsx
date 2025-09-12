import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import siteData from '@/data/site.json';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = siteData.navigation.menuItems;

  const handleQuickContact = () => {
    const whatsappNumber = "244923912483";
    const whatsappMessage = "Olá! Gostaria de saber mais informações sobre os cursos da Escola de Condução Maria Olga.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="border-b border-primary-foreground/20 py-2">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{siteData.contact.phone}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{siteData.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold">
                {siteData.company.name.split(' Maria Olga')[0]} <span className="text-orange">Maria Olga</span>
              </h1>
            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-orange transition-colors duration-200"
                  data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="secondary" 
                size="sm"
                onClick={handleQuickContact}
                data-testid="button-contacto-rapido"
              >
                Contacto Rápido
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20 pt-4">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="hover:text-orange transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  variant="secondary" 
                  className="mt-4 self-start"
                  onClick={() => {
                    handleQuickContact();
                    setIsMenuOpen(false);
                  }}
                  data-testid="button-mobile-contacto"
                >
                  Contacto Rápido
                </Button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
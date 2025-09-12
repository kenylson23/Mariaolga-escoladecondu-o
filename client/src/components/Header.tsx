import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Quiz', href: '#quiz' },
    { label: 'Dicas', href: '#dicas' },
    { label: 'Exame', href: '#conselhos-exame' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Newsletter', href: '#newsletter' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="border-b border-primary-foreground/20 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(+244) 923 912 483</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Rua Rainha Ginga, 45, Maianga, Luanda</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                Escola de Condução <span className="text-orange">Maria Olga</span>
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
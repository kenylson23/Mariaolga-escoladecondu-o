import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const courses = [
    { label: 'Categoria B - Automóveis', href: '#cursos' },
    { label: 'Categoria A - Motociclos', href: '#cursos' },
    { label: 'Categoria C - Pesados', href: '#cursos' },
    { label: 'Outras Categorias', href: '#cursos' },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Escola de Condução <span className="text-orange">Maria Olga</span>
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Há mais de 20 anos a formar condutores responsáveis e confiantes em Angola. 
              A sua jornada na estrada começa connosco.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="icon"
                  variant="ghost"
                  className="hover:bg-white/10 text-white hover:text-orange"
                  asChild
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-orange transition-colors duration-200"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Cursos</h4>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index}>
                  <a 
                    href={course.href}
                    className="text-white/80 hover:text-orange transition-colors duration-200"
                    data-testid={`footer-course-${index}`}
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm">
                  Rua Rainha Ginga, 45<br />
                  Maianga, Luanda - Angola
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-white/80 text-sm">(+244) 923 912 483</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-white/80 text-sm">escoladeconducaomariaolga@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <div>
              © {new Date().getFullYear()} Escola de Condução Maria Olga. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-orange transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
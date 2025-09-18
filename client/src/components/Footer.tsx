import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import siteData from '@/data/site.json';
import contactData from '@/data/contact.json';

export default function Footer() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Facebook': return Facebook;
      case 'Instagram': return Instagram;
      case 'Youtube': return Youtube;
      default: return Facebook;
    }
  };

  const socialLinks = siteData.socialLinks.map(link => ({
    ...link,
    icon: getIconComponent(link.icon)
  }));

  const quickLinks = siteData.navigation.quickLinks;

  const courses = [
    { label: 'Ligeiro Amador - Particular', href: '#categorias' },
    { label: 'Ligeiro Profissional - Comercial', href: '#categorias' },
    { label: 'Pesado Profissional - Veículos Pesados', href: '#categorias' },
    { label: 'Categorias de Reciclagem', href: '#categorias' },
    { label: 'Outras Categorias', href: '#categorias' },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {siteData.company.name.split(' Maria Olga')[0]} <span className="text-orange">{siteData.company.shortName}</span>
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              {siteData.company.description}
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
            <h4 className="text-lg font-semibold mb-4">Nossas Categorias</h4>
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
                  Luanda, Luanda-Sul, casa nº 41<br />
                  est. nº 11 de novembro – 4 campos
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-white/80 text-sm">{siteData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-white/80 text-sm">{siteData.contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <div>
                © {new Date().getFullYear()} {siteData.company.name}. Todos os direitos reservados.
              </div>
              <div className="text-xs">
                feito por{' '}
                <a 
                  href="https://www.instagram.com/keny_ggg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange hover:text-orange/80 transition-colors font-medium"
                  data-testid="link-developer-credit"
                >
                  Kenylson Lourenço
                </a>
              </div>
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
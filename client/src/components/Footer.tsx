import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import siteData from '@/data/site.json';

export default function Footer() {
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

  const socialLinks = siteData.socialLinks.map(link => ({
    ...link,
    icon: getIconComponent(link.icon)
  }));

  const quickLinks = siteData.navigation.quickLinks;

  const courses = [
    { label: 'Ligeiro Amador', href: '#categorias' },
    { label: 'Ligeiro Profissional', href: '#categorias' },
    { label: 'Pesado Profissional', href: '#categorias' },
    { label: 'Categorias de Reciclagem', href: '#categorias' },
    { label: 'Outras Categorias', href: '#categorias' },
  ];

  return (
    <footer className="animate-on-scroll lg:px-6 lg:pt-12 lg:pb-0 max-w-6xl mx-auto pt-24 px-4 pb-24 bg-background">
      <div 
        className="lg:px-6 bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-blue-500/0 max-w-6xl rounded-3xl mx-auto mb-8 p-8 relative border border-white/10"
        style={{ 
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0))'
        }}
      >
        {/* CTA Banner */}
        <div className="mb-0 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-4xl lg:text-5xl font-light text-foreground tracking-tight flex items-center gap-4">
              Vamos conversar?
              <ArrowUpRight className="w-12 h-12 text-amber-400" strokeWidth={1.5} />
            </h2>
            <Button 
              size="lg"
              className="rounded-full px-8 bg-gradient-to-bl from-amber-200 via-orange-500 to-amber-200 hover:brightness-110 transition-all text-white border-none shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              asChild
            >
              <a href="#contacto">Contactar Agora</a>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-12"></div>

        {/* Footer Content */}
        <div className="flex flex-col gap-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            {/* Logo + short description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-foreground">
                  {siteData.company.name.split(' KL')[0]} <span className="text-orange-500">{siteData.company.shortName}</span>
                </span>
              </div>
              <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                {siteData.company.description}
              </p>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="text-sm text-amber-500 mb-4 font-semibold uppercase tracking-wider">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-sm text-amber-500 mb-4 font-semibold uppercase tracking-wider">
                Categorias
              </h4>
              <ul className="space-y-2">
                {courses.map((course, index) => (
                  <li key={index}>
                    <a href={course.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {course.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company / Contact Column */}
            <div>
              <h4 className="text-sm text-amber-500 mb-4 font-semibold uppercase tracking-wider">
                Contacto
              </h4>
              <div className="text-muted-foreground text-xs space-y-2 mb-6">
                <p className="text-foreground font-medium">{siteData.company.name}</p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-orange-500" />
                  <span>Luanda, Angola</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-orange-500" />
                  <span>{siteData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-orange-500" />
                  <span>{siteData.contact.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 hover:bg-amber-500/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-foreground/10 text-xs">
            <div className="text-muted-foreground flex items-center gap-2">
              <span>© {new Date().getFullYear()} {siteData.company.name}.</span>
              <span className="hidden sm:inline">|</span>
              <span>
                Feito por{' '}
                <a href="https://www.instagram.com/keny_ggg/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                  Kenylson Lourenço
                </a>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <span className="text-muted-foreground/30">/</span>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos & Condições
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import contactData from '@/data/contact.json';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Create WhatsApp message with form data
    const whatsappMessage = `*Solicitação de Informações - Escola de Condução KL*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Curso de Interesse:* ${formData.course}

*Mensagem:*
${formData.message}

Enviado através do site da Escola de Condução KL`;

    // WhatsApp number: (+244) 923 912 483 -> 244923912483
    const whatsappNumber = "244923912483";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const handleDirectWhatsApp = () => {
    const whatsappNumber = "244923912483";
    const whatsappMessage = "Olá! Gostaria de saber mais informações sobre os cursos da Escola de Condução KL.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'MapPin': return MapPin;
      case 'Phone': return Phone;
      case 'Mail': return Mail;
      case 'Clock': return Clock;
      default: return MapPin;
    }
  };

  const contactInfo = contactData.contactInfo.map(info => ({
    ...info,
    icon: getIconComponent(info.icon)
  }));

  const contactMethods = [
    {
      icon: (
        <MessageCircle className="w-6 h-6" />
      ),
      title: "Conecte-se connosco",
      desc: "Estamos aqui para ajudar e responder a qualquer dúvida que possa ter.",
      link: {
        name: "Falar via WhatsApp",
        href: `https://wa.me/244923912483?text=${encodeURIComponent("Olá! Gostaria de saber mais informações sobre os cursos da Escola de Condução KL.")}`
      },
    },
    {
      icon: (
        <div className="font-bold text-lg">f</div>
      ),
      title: "Siga-nos",
      desc: "Acompanhe as nossas novidades e dicas nas redes sociais.",
      link: {
        name: "Ver Redes Sociais",
        href: "#"
      },
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-screen-xl mx-auto gap-12 lg:flex">
          <div className="max-w-md">
            <h2 className="text-foreground text-3xl font-semibold sm:text-4xl font-serif">
              Entre em <span className="text-primary">Contacto</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Estamos aqui para ajudar e responder a qualquer dúvida que possa ter. Estamos ansiosos por ouvi-lo.
            </p>

            <div className="mt-8 space-y-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="text-xl">Envie-nos uma Mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="O seu nome"
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="seuemail@exemplo.com"
                          required
                          data-testid="input-email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+244 923 456 789"
                          required
                          data-testid="input-phone"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course">Categoria de Interesse</Label>
                        <Select onValueChange={(value) => handleInputChange('course', value)}>
                          <SelectTrigger data-testid="select-course">
                            <SelectValue placeholder="Selecione uma categoria" />
                          </SelectTrigger>
                          <SelectContent className="max-h-[60vh]">
                            {contactData.courses.map((course) => (
                              <SelectItem key={course.value} value={course.value}>
                                {course.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Conte-nos mais sobre o que precisa..."
                          rows={3}
                          data-testid="textarea-message"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white mt-2"
                      data-testid="button-submit-form"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enviar via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Interactive Map */}
              <Card className="hover-elevate">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3 text-card-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Como Chegar
                  </h4>
                  <div className="rounded-lg overflow-hidden border border-border">
                    <div className="relative w-full h-0" style={{ paddingBottom: '50%' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.569438914614!2d13.24255!3d-8.8415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f3b0e68e4b77%3A0x7b1b5b1b5b1b5b1b!2sLuanda%2C%20Angola!5e0!3m2!1spt!2sao!4v1710000000000!5m2!1spt!2sao"
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        data-testid="map-location"
                        title="Localização da Escola de Condução KL"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex-1 mt-12 lg:mt-0">
            <ul className="grid gap-y-6 gap-x-12 items-start md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {contactMethods.map((item, idx) => (
                <li key={idx} className="space-y-3 border-t pt-6 md:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary bg-primary/5">
                    {item.icon}
                  </div>
                  <h4 className="text-foreground text-lg font-medium xl:text-xl">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                  <a 
                    href={item.link.href} 
                    target={item.link.href.startsWith('http') ? '_blank' : undefined}
                    className="flex items-center gap-1 text-sm text-primary duration-150 hover:text-primary/80 font-medium"
                  >
                    {item.link.name}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              ))}
              
              {/* Existing Contact Info Items */}
              {contactInfo.map((info, index) => (
                <li key={`info-${index}`} className="space-y-3 border-t pt-6 md:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary bg-primary/5">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-foreground text-lg font-medium xl:text-xl">
                    {info.title}
                  </h4>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">
                    {info.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
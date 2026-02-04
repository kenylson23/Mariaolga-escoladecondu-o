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

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para começar a sua jornada? Contacte-nos hoje mesmo para mais informações 
            ou para agendar a sua primeira aula
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Contact form */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-2xl">Envie-nos uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
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
                  <div>
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
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
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
                  <div>
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
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Conte-nos mais sobre o que precisa..."
                    rows={4}
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  data-testid="button-submit-form"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">
                Informações de Contacto
              </h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="hover-elevate transition-all duration-300"
                    data-testid={`card-contact-${info.title.toLowerCase()}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-card-foreground mb-2 text-sm sm:text-base">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground whitespace-pre-line text-sm sm:text-base break-words">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Direct WhatsApp Button */}
              <div className="mt-6">
                <Button 
                  onClick={handleDirectWhatsApp}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  data-testid="button-direct-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar via WhatsApp
                </Button>
              </div>
            </div>

            {/* Interactive Map */}
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-card-foreground">
                  Como Chegar
                </h4>
                <div className="rounded-lg overflow-hidden border border-border">
                  <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
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
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-card-foreground">Escola de Condução KL</p>
                      <p>Luanda, Luanda-Sul, casa nº 41,</p>
                      <p>Estrada nº 11 de novembro – 4 campos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
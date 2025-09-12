import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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
    
    // Create mailto link with form data
    const emailBody = `Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Curso de Interesse: ${formData.course}

Mensagem:
${formData.message}`;

    const mailtoLink = `mailto:escoladeconducaomariaolga@gmail.com?subject=Solicitação de Informações - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
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
                    <Label htmlFor="course">Curso de Interesse</Label>
                    <Select onValueChange={(value) => handleInputChange('course', value)}>
                      <SelectTrigger data-testid="select-course">
                        <SelectValue placeholder="Selecione um curso" />
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
                  className="w-full bg-primary hover:bg-primary/90"
                  data-testid="button-submit-form"
                >
                  Enviar Mensagem
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
            </div>

            {/* Map placeholder */}
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-card-foreground">
                  Como Chegar
                </h4>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Mapa Interativo</p>
                    <p className="text-sm">Rua das Flores, 123 - Lisboa</p>
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
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import contactData from '@/data/contact.json';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' });

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.course) {
      alert('Por favor, preencha os campos obrigatórios.');
      return;
    }
    const msg = `*Solicitação — Escola de Condução KL*\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Email:* ${formData.email}\n*Curso:* ${formData.course}\n\n*Mensagem:*\n${formData.message}`;
    window.open(`https://wa.me/244923912483?text=${encodeURIComponent(msg)}`, '_blank');
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
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
    icon: getIconComponent(info.icon),
  }));

  return (
    <section id="contacto" className="relative py-28 bg-muted/40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">Contacto</span>
            <span className="h-px w-10 bg-secondary" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-5">
            Fale Connosco
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-xl mx-auto">
            Estamos prontos para responder a todas as suas dúvidas e ajudá-lo a começar a sua jornada.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left panel — dark info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 bg-primary rounded-3xl p-8 flex flex-col justify-between gap-8"
          >
            <div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Informações de Contacto</h3>
              <p className="text-white/60 text-sm leading-relaxed">Escolha o meio que preferir para entrar em contacto connosco.</p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-0.5">{info.title}</p>
                    <p className="text-white text-sm leading-relaxed whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/244923912483?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os cursos da Escola de Condução KL.')}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 bg-secondary text-foreground font-semibold px-6 py-3.5 rounded-2xl text-sm w-fit"
            >
              <MessageCircle className="w-4 h-4" />
              Falar via WhatsApp
            </motion.a>

            {/* Decorative circles */}
            <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute bottom-12 right-12 w-16 h-16 rounded-full border border-white/5 pointer-events-none" />
          </motion.div>

          {/* Right panel — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="lg:col-span-3 bg-card border border-border rounded-3xl p-8"
          >
            <h3 className="text-2xl font-black text-foreground mb-6 tracking-tight">Envie uma Mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    placeholder="O seu nome"
                    required
                    data-testid="input-name"
                    className="rounded-xl border-border bg-muted/50 focus:bg-background transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Telefone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                    placeholder="+244 923 456 789"
                    required
                    data-testid="input-phone"
                    className="rounded-xl border-border bg-muted/50 focus:bg-background transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  placeholder="seuemail@exemplo.com"
                  data-testid="input-email"
                  className="rounded-xl border-border bg-muted/50 focus:bg-background transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Categoria de Interesse *
                </Label>
                <Select onValueChange={value => setFormData(p => ({ ...p, course: value }))}>
                  <SelectTrigger data-testid="select-course" className="rounded-xl border-border bg-muted/50">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactData.courses.map(course => (
                      <SelectItem key={course.value} value={course.value}>{course.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  placeholder="Conte-nos mais sobre o que precisa..."
                  rows={4}
                  data-testid="textarea-message"
                  className="rounded-xl border-border bg-muted/50 focus:bg-background transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                data-testid="button-submit-form"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3.5 rounded-2xl text-sm shadow-lg shadow-green-500/20 hover:bg-[#20bd5c] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Enviar via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>

            {/* Map */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.569438914614!2d13.24255!3d-8.8415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f3b0e68e4b77%3A0x7b1b5b1b5b1b5b1b!2sLuanda%2C%20Angola!5e0!3m2!1spt!2sao!4v1710000000000!5m2!1spt!2sao"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="map-location"
                title="Localização da Escola de Condução KL"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

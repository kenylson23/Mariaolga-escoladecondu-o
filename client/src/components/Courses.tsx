import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Bike, Truck, Clock, Euro, CheckCircle } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      category: 'Categoria B',
      icon: Car,
      title: 'Automóveis Ligeiros',
      description: 'Curso completo para condução de automóveis ligeiros até 3.5 toneladas.',
      price: '450',
      duration: '28 aulas',
      features: [
        'Aulas teóricas e práticas',
        'Veículos com duplo comando',
        'Preparação para exame',
        'Material didático incluído'
      ],
      popular: true
    },
    {
      category: 'Categoria A',
      icon: Bike,
      title: 'Motociclos',
      description: 'Formação especializada para condução de motociclos de todas as cilindradas.',
      price: '380',
      duration: '20 aulas',
      features: [
        'Curso A1, A2 e A',
        'Equipamento de proteção incluído',
        'Pista de treino própria',
        'Motociclos modernos'
      ],
      popular: false
    },
    {
      category: 'Categoria C',
      icon: Truck,
      title: 'Pesados de Mercadorias',
      description: 'Curso profissional para condução de veículos pesados de mercadorias.',
      price: '850',
      duration: '35 aulas',
      features: [
        'Formação profissional',
        'Veículos industriais',
        'Certificação reconhecida',
        'Apoio na colocação'
      ],
      popular: false
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Cursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos formação completa para todas as categorias de condução, 
            com instrutores qualificados e veículos modernos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`relative hover-elevate transition-all duration-300 ${
                course.popular ? 'ring-2 ring-orange ring-opacity-50' : ''
              }`}
              data-testid={`card-course-${course.category.toLowerCase().replace(' ', '-')}`}
            >
              {course.popular && (
                <Badge 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange text-white"
                  data-testid="badge-popular"
                >
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <course.icon className="w-8 h-8 text-primary" />
                </div>
                <Badge variant="secondary" className="w-fit mx-auto mb-2">
                  {course.category}
                </Badge>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <p className="text-muted-foreground text-sm">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {course.price}€
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full"
                  variant={course.popular ? "default" : "outline"}
                  data-testid={`button-inscrever-${course.category.toLowerCase().replace(' ', '-')}`}
                >
                  Inscrever-se
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center bg-muted rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Outras Categorias Disponíveis
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Também oferecemos cursos para as categorias D (transportes públicos), 
            E (reboques) e cursos de reciclagem. Contacte-nos para mais informações.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            data-testid="button-outras-categorias"
          >
            Ver Todas as Categorias
          </Button>
        </div>
      </div>
    </section>
  );
}
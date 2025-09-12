import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Bike, Truck, Clock, CheckCircle } from 'lucide-react';
import coursesData from '@/data/courses.json';

export default function Courses() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Car': return Car;
      case 'Truck': return Truck;
      default: return Car;
    }
  };

  const courses = coursesData.courses.map(course => ({
    ...course,
    icon: getIconComponent(course.icon)
  }));

  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Cursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos formação completa seguindo as normas do IMT Angola, 
            com instrutores certificados e veículos adaptados às condições angolanas
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
                    {course.price} Kz
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
            Também oferecemos cursos para categoria D (transportes colectivos), 
            categoria E (veículos articulados) e cursos de reciclagem conforme exigido pelo IMT Angola.
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
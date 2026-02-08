import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import vehiclesImage from '@assets/generated_images/Driving_school_vehicles_collection_ec97c06a.png';
import schoolImage from '@assets/generated_images/Modern_driving_school_building_5228ea15.png';
import heroImage from '@assets/generated_images/Driving_instructor_teaching_student_2b3ed7ce.png';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('todos');

  // TODO: remove mock functionality - using generated images as placeholders
  const images = [
    {
      id: 1,
      src: vehiclesImage,
      alt: 'Frota de veículos modernos',
      category: 'veiculos',
      title: 'Frota Moderna'
    },
    {
      id: 2,
      src: schoolImage,
      alt: 'Instalações da escola',
      category: 'instalacoes',
      title: 'Instalações Modernas'
    },
    {
      id: 3,
      src: heroImage,
      alt: 'Aula prática de condução',
      category: 'aulas',
      title: 'Aulas Práticas'
    },
    {
      id: 4,
      src: vehiclesImage,
      alt: 'Veículo de instrução',
      category: 'veiculos',
      title: 'Duplo Comando'
    },
    {
      id: 5,
      src: schoolImage,
      alt: 'Sala de aulas teóricas',
      category: 'instalacoes',
      title: 'Salas de Aula'
    },
    {
      id: 6,
      src: heroImage,
      alt: 'Instrutor e aluno',
      category: 'aulas',
      title: 'Ensino Personalizado'
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'veiculos', label: 'Veículos' },
    { id: 'instalacoes', label: 'Instalações' },
    { id: 'aulas', label: 'Aulas' }
  ];

  const filteredImages = activeCategory === 'todos' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Nossa <span className="text-primary">Galeria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as nossas instalações, veículos modernos e ambiente de aprendizagem
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              data-testid={`button-filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* New Interactive Gallery Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group rounded-2xl overflow-hidden cursor-pointer h-[300px] hover-elevate"
            >
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {image.category === 'veiculos' ? 'Nossa Frota' : image.category === 'instalacoes' ? 'Infraestrutura' : 'Formação Prática'}
                </span>
                <h3 className="text-white text-xl font-bold font-serif">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Quer conhecer pessoalmente as nossas instalações?
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            data-testid="button-agendar-visita"
          >
            Agendar Visita
          </Button>
        </div>
      </div>
    </section>
  );
}
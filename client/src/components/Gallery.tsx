import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CardStack3D } from '@/components/ui/card-stack-3d';
import vehiclesImage from '@assets/Gemini_Generated_Image_7ytgr57ytgr57ytg_1778663721818.png';
import vehiclesImage2 from '@assets/Gemini_Generated_Image_dfvip4dfvip4dfvi_1778663763636.png';
import schoolImage from '@assets/generated_images/Modern_driving_school_building_5228ea15.png';
import heroImage from '@assets/generated_images/Driving_instructor_teaching_student_2b3ed7ce.png';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      src: vehiclesImage2,
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
    <section id="galeria" className="py-20 bg-muted overflow-hidden">
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

        {/* 3D Card Stack Gallery */}
        <div className="max-w-4xl mx-auto flex justify-center">
          <CardStack3D 
            images={filteredImages.map(img => ({ src: img.src, alt: img.alt }))} 
            cardWidth={isMobile ? 240 : 400}
            cardHeight={isMobile ? 150 : 250}
            className="py-16 md:py-32"
          />
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

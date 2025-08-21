
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/581c49fa-143f-427c-a5af-01a402c29d31.png",
      alt: "Alternador Bosch"
    },
    {
      src: "/lovable-uploads/f8ff83c6-82b8-4ca9-bb62-34b347d7cf88.png",
      alt: "Bateria Moura"
    },
    {
      src: "/lovable-uploads/1ab75be8-9848-45f2-80e1-4aac2b14b1c6.png",
      alt: "Bateria Líder"
    },
    {
      src: "/lovable-uploads/111d354b-d67f-4ee4-b658-afeecf571838.png",
      alt: "Bateria Tudor"
    },
    {
      src: "/lovable-uploads/be582b94-463a-440c-aee5-0abfea35cfba.png",
      alt: "Baterias Moura em Estoque"
    },
    {
      src: "/lovable-uploads/f5046380-d5a3-403e-9ff6-eec20bd2e35a.png",
      alt: "Terminal de Bateria"
    },
    {
      src: "/lovable-uploads/b37da1d9-83ef-40d6-a951-d71443802fef.png",
      alt: "Alternador Bosch - Oferta Especial"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="text-center space-y-8 lg:space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Nossos Produtos
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Confira nossa linha completa de baterias e acessórios automotivos
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-lg">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-200"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-200"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 sm:mt-6 grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex 
                      ? 'border-primary shadow-md' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;


import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Paulo',
      company: 'Trans Viva',
      rating: 5,
      text: 'Excelente atendimento! Sempre que preciso de baterias para nossa frota, posso contar com a ES Baterias. Atendimento rápido e produtos de qualidade.'
    },
    {
      name: 'Donizete',
      company: 'Grama Xavier',
      rating: 5,
      text: 'Serviço muito profissional. Testaram o alternador do meu caminhão e resolveram o problema rapidamente. Recomendo!'
    },
    {
      name: 'André',
      company: 'Aço Via',
      rating: 5,
      text: 'O atendimento 24h fez toda a diferença. Tive problema com a bateria durante uma viagem e eles me atenderam na madrugada. Salvaram meu dia!'
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-3 py-2 sm:px-4 rounded-full">
            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">DEPOIMENTOS</span>
          </div>
          
          <h2 className="text-primary text-2xl sm:text-3xl lg:text-4xl">
            O Que Nossos 
            <br />
            <span className="text-accent">Clientes Dizem</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja o que eles falam sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-current" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-card-foreground mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-card-foreground text-sm sm:text-base">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 lg:p-8 text-center">
          <div className="grid grid-cols-3 gap-4 lg:gap-8 text-white">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">24h</div>
              <div className="text-white/90 text-xs sm:text-sm lg:text-base">Atendimento</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">6+</div>
              <div className="text-white/90 text-xs sm:text-sm lg:text-base">Marcas Principais</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/90 text-xs sm:text-sm lg:text-base">Satisfação</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 lg:mt-12">
          <a 
            href="https://wa.me/5515991026043" 
            className="btn-hero animate-pulse-glow text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4"
          >
            Faça Seu Pedido Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

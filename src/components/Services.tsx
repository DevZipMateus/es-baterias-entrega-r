
import React from 'react';
import { Battery, Zap, Wrench, Truck, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Battery,
      title: 'Entrega e Instalação de Baterias',
      description: 'Trabalhamos com as melhores marcas do mercado: Heliar, Moura, Tudor, Líder, Cral e Pioneiro.',
      features: ['Entrega rápida', 'Instalação profissional', 'Garantia das marcas']
    },
    {
      icon: Zap,
      title: 'Teste de Alternador',
      description: 'Testamos alternadores de qualquer veículo com equipamentos profissionais.',
      features: ['Diagnóstico preciso', 'Relatório detalhado', 'Recomendações técnicas']
    },
    {
      icon: Wrench,
      title: 'Teste de Motor de Partida',
      description: 'Análise completa do sistema de partida do seu veículo.',
      features: ['Avaliação completa', 'Teste funcional', 'Orientação técnica']
    },
    {
      icon: Truck,
      title: 'Alternadores para Caminhões',
      description: 'Especializados em alternadores para veículos pesados e de grande porte.',
      features: ['Peças originais', 'Alta durabilidade', 'Atendimento especializado']
    }
  ];

  const additionalProducts = [
    'Pasta higiênica para lavar as mãos',
    'Terminais de baterias',
    'Desengripantes automotivos',
    'Acessórios automotivos diversos'
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-muted/30 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-2 sm:px-4 rounded-full">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">NOSSOS SERVIÇOS</span>
          </div>
          
          <h2 className="text-primary text-2xl sm:text-3xl lg:text-4xl">
            Soluções Completas em 
            <br />
            <span className="text-accent">Baterias Automotivas</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos serviços especializados com atendimento 24 horas. 
            Nossos valores e qualidade no atendimento são nossos principais diferenciais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 lg:mb-6">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-3 lg:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4 lg:mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Products */}
        <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border">
          <div className="text-center mb-6 lg:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3 lg:mb-4">
              Produtos Adicionais
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Além dos nossos serviços principais, oferecemos diversos produtos automotivos
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {additionalProducts.map((product, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-muted/50 p-3 lg:p-4 rounded-lg"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base text-card-foreground font-medium">{product}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 lg:mt-12">
          <a 
            href="https://wa.me/5515991026043" 
            className="btn-hero animate-pulse-glow text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4"
          >
            Solicitar Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

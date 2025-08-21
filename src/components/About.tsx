
import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Clock,
      title: 'Atendimento 24 Horas',
      description: 'Estamos sempre disponíveis para atender suas necessidades, a qualquer hora do dia ou da noite.'
    },
    {
      icon: Award,
      title: 'Marcas de Qualidade',
      description: 'Trabalhamos apenas com as melhores marcas do mercado: Heliar, Moura, Tudor, Líder, Cral e Pioneiro.'
    },
    {
      icon: Users,
      title: 'Atendimento Especializado',
      description: 'Nossa equipe é especializada em soluções automotivas, oferecendo o melhor atendimento.'
    },
    {
      icon: MapPin,
      title: 'Entrega no Local',
      description: 'Oferecemos serviço de entrega e instalação onde você estiver, com praticidade e rapidez.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Users className="w-5 h-5" />
            <span className="font-semibold">SOBRE NÓS</span>
          </div>
          
          <h2 className="text-primary">
            Conheça a 
            <br />
            <span className="text-accent">ES Baterias</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa especializada em baterias automotivas e acessórios, 
            comprometida em oferecer soluções completas para seu veículo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">
              Nossa História e Missão
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-primary">ES Baterias Automotivas & Acessórios</strong> nasceu 
                com o objetivo de oferecer soluções completas em baterias automotivas, 
                sempre priorizando a qualidade e o atendimento diferenciado.
              </p>
              
              <p>
                Além de atendermos 24 horas, nossa empresa trabalha com marcas diversas de baterias 
                como Heliar, Moura, Tudor, Líder, Cral, Pioneiro entre outras. 
                <strong className="text-accent"> Nossos valores e atendimento são nossos diferenciais.</strong>
              </p>
              
              <p>
                Oferecemos não apenas a venda de baterias, mas também serviços especializados como 
                teste de alternador e motor de partida de qualquer veículo, além de uma linha 
                completa de acessórios automotivos.
              </p>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-2xl font-bold text-accent italic">
                "SÓ CHAMAR QUE A GENTE ENTREGA"
              </p>
              <p className="text-muted-foreground mt-2">
                Nosso slogan reflete nosso compromisso com a praticidade e rapidez no atendimento.
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                  <Award className="w-12 h-12 text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-primary">Nossos Diferenciais</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">Atendimento 24 horas</span>
                </div>
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">Entrega e instalação</span>
                </div>
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">Marcas de qualidade</span>
                </div>
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">Atendimento especializado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center space-y-4 p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h4 className="text-xl font-bold text-card-foreground">
                  {feature.title}
                </h4>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5515991026043" 
            className="btn-hero animate-pulse-glow"
          >
            Conheça Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

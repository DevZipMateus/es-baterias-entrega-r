
import React from 'react';
import { Clock, CheckCircle, Zap, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20 sm:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPgo8Y2lyY2xlIGN4PSI1MyIgY3k9IjUzIiByPSIxIi8+CjxjaXJjbGUgY3g9IjciIGN5PSI1MyIgcj0iMSIvPgo8Y2lyY2xlIGN4PSI1MyIgY3k9IjciIHI9IjEiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPgo8L2c+CjwvZz4KPC9zdmc+')]"></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 lg:space-y-8 animate-fade-in-up order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-3 py-2 sm:px-4 rounded-full text-sm">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">ATENDIMENTO 24 HORAS</span>
              </div>
              
              <h1 className="text-white leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Baterias Automotivas
                <br />
                <span className="text-accent">Entrega Rápida</span>
              </h1>
              
              <div className="space-y-3">
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-accent">
                  SÓ CHAMAR QUE A GENTE ENTREGA
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-lg leading-relaxed">
                  Atendimento 24h com as melhores marcas: Heliar, Moura, Tudor, Líder, Cral e Pioneiro.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3 text-white/90">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">Entrega e Instalação</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">Teste de Alternador</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">Motor de Partida</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">Atendimento Local</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="https://wa.me/5515991026043" 
                className="btn-hero animate-pulse-glow text-center text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4"
              >
                Solicitar Atendimento
              </a>
              <a 
                href="#services" 
                className="bg-white/10 text-white border-2 border-white/60 hover:bg-white hover:text-primary px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 text-center focus:border-white focus:outline-none"
              >
                Nossos Serviços
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-white/80 text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">(15) 99102-6043</span>
            </div>
          </div>

          {/* Video */}
          <div className="relative animate-fade-in order-1 lg:order-2">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 overflow-hidden">
              <video
                className="w-full h-auto rounded-lg lg:rounded-xl max-h-[300px] sm:max-h-[400px] lg:max-h-none object-cover"
                autoPlay
                loop
                muted
                playsInline
                style={{ pointerEvents: 'none' }}
              >
                <source src="/lovable-uploads/bateria.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

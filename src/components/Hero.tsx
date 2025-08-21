
import React from 'react';
import { Clock, CheckCircle, Zap, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"1\"/%3E%3Ccircle cx=\"53\" cy=\"53\" r=\"1\"/%3E%3Ccircle cx=\"7\" cy=\"53\" r=\"1\"/%3E%3Ccircle cx=\"53\" cy=\"7\" r=\"1\"/%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">ATENDIMENTO 24 HORAS</span>
              </div>
              
              <h1 className="text-white leading-tight">
                Baterias Automotivas
                <br />
                <span className="text-accent">Entrega Rápida</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                {/* Slogan da empresa */}
                <span className="font-semibold text-accent text-2xl block mb-2">
                  SÓ CHAMAR QUE A GENTE ENTREGA
                </span>
                Atendimento 24h com as melhores marcas: Heliar, Moura, Tudor, Líder, Cral e Pioneiro.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-white/90">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Entrega e Instalação</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Zap className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Teste de Alternador</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Motor de Partida</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Atendimento Local</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5515991026043" 
                className="btn-hero animate-pulse-glow text-center"
              >
                Solicitar Atendimento
              </a>
              <a 
                href="#services" 
                className="bg-white/10 text-white border-2 border-white/60 hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center focus:border-white focus:outline-none"
              >
                Nossos Serviços
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-white/80">
              <Phone className="w-5 h-5" />
              <span className="font-medium">(15) 99102-6043</span>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-fade-in">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <Zap className="w-16 h-16 text-accent-foreground" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    Principais Marcas
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3 text-white/90">
                    <div className="bg-white/10 p-3 rounded-lg text-center font-semibold">
                      Heliar
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center font-semibold">
                      Moura
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center font-semibold">
                      Tudor
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center font-semibold">
                      Líder
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center font-semibold">
                      Cral
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center font-semibold">
                      Pioneiro
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Zap } from 'lucide-react';

const Brands = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-accent">
      <div className="container-custom">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="w-24 h-24 mx-auto bg-accent rounded-full flex items-center justify-center mb-6">
              <Zap className="w-12 h-12 text-accent-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              Principais Marcas
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Trabalhamos com as melhores marcas de baterias do mercado
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center font-semibold text-white text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Heliar
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center font-semibold text-white text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Moura
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center font-semibold text-white text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Tudor
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center font-semibold text-white text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Líder
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center font-semibold text-white text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Cral
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center font-semibold text-white text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Pioneiro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

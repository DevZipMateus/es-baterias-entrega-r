
import React from 'react';
import { Zap } from 'lucide-react';

const Brands = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary via-primary-dark to-accent px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="text-center space-y-8 lg:space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto bg-accent rounded-full flex items-center justify-center mb-4 lg:mb-6">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent-foreground" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Principais Marcas
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Trabalhamos com as melhores marcas de baterias do mercado
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-center font-semibold text-white text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Heliar
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-center font-semibold text-white text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Moura
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-center font-semibold text-white text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Tudor
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-center font-semibold text-white text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Líder
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-center font-semibold text-white text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Cral
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-center font-semibold text-white text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              Pioneiro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

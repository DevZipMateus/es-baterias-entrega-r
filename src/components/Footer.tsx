
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Battery } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="gradient-primary text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/93aab8db-9c96-4d30-bc98-7b101d65fc7e.png" 
                alt="ES Baterias" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">ES BATERIAS</h3>
                <p className="text-sm text-white/80">AUTOMOTIVAS & ACESSÓRIOS</p>
              </div>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              Além de atendermos 24 horas, nossa empresa tem marcas diversas de baterias. 
              Nossos valores e atendimento são nossos diferenciais.
            </p>
            
            <div className="text-accent font-bold text-lg">
              "SÓ CHAMAR QUE A GENTE ENTREGA"
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contato</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a 
                  href="https://wa.me/5515991026043" 
                  className="text-white/90 hover:text-accent transition-colors"
                >
                  (15) 99102-6043
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a 
                  href="mailto:esbateriasauto@gmail.com" 
                  className="text-white/90 hover:text-accent transition-colors"
                >
                  esbateriasauto@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/90">
                  Av. Coronel Firmo Vieira de Camargo, 549
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold">Atendimento 24h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Serviços</h4>
            
            <ul className="space-y-2">
              <li className="text-white/90 hover:text-accent transition-colors cursor-pointer">
                Entrega e Instalação de Baterias
              </li>
              <li className="text-white/90 hover:text-accent transition-colors cursor-pointer">
                Teste de Alternador
              </li>
              <li className="text-white/90 hover:text-accent transition-colors cursor-pointer">
                Teste de Motor de Partida
              </li>
              <li className="text-white/90 hover:text-accent transition-colors cursor-pointer">
                Alternadores para Caminhões
              </li>
              <li className="text-white/90 hover:text-accent transition-colors cursor-pointer">
                Acessórios Automotivos
              </li>
            </ul>
          </div>

          {/* Brands & Social */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Marcas Trabalhadas</h4>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-white/90">• Heliar</div>
              <div className="text-white/90">• Moura</div>
              <div className="text-white/90">• Tudor</div>
              <div className="text-white/90">• Líder</div>
              <div className="text-white/90">• Cral</div>
              <div className="text-white/90">• Pioneiro</div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold">Redes Sociais</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/p/ES-baterias-automotivas-e-acess%C3%B3rios-61551254670591/?locale=pt_BR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/esbateriastatui/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2025 ES Baterias Automotivas & Acessórios. Todos os direitos reservados.
              <br />
              CNPJ: 46.708.607/0001-21
            </div>
            
            <div className="text-white/80 text-sm">
              <a 
                href="https://www.esbateriasauto.com.br" 
                className="hover:text-accent transition-colors"
              >
                www.esbateriasauto.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

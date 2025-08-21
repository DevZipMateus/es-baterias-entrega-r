
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-muted/30 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-2 sm:px-4 rounded-full">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">CONTATO</span>
          </div>
          
          <h2 className="text-primary text-2xl sm:text-3xl lg:text-4xl">
            Entre em 
            <br />
            <span className="text-accent">Contato Conosco</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atendê-lo 24 horas por dia. 
            Entre em contato e solicite seu orçamento sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="bg-card p-6 lg:p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4 lg:mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">Telefone</h4>
                    <a 
                      href="https://wa.me/5515991026043" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      (15) 99102-6043
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">E-mail</h4>
                    <a 
                      href="mailto:esbateriasauto@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
                    >
                      esbateriasauto@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">Endereço</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Avenida Coronel Firmo Vieira de Camargo, 549
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">Horário</h4>
                    <p className="text-accent font-semibold text-sm sm:text-base">Atendimento 24 Horas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card p-6 lg:p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4 lg:mb-6">
                Redes Sociais
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="https://www.facebook.com/p/ES-baterias-automotivas-e-acess%C3%B3rios-61551254670591/?locale=pt_BR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary" />
                  <div>
                    <div className="font-semibold text-card-foreground text-sm sm:text-base">Facebook</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">ES baterias automotivas e acessórios</div>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/esbateriastatui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary" />
                  <div>
                    <div className="font-semibold text-card-foreground text-sm sm:text-base">Instagram</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">@esbateriastatui</div>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://wa.me/5515991026043" 
              className="btn-hero w-full text-center animate-pulse-glow block text-sm sm:text-base lg:text-lg py-3 sm:py-4"
            >
              Solicitar Atendimento via WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden order-1 lg:order-2">
            <div className="p-4 sm:p-6 border-b border-border">
              <h3 className="text-xl sm:text-2xl font-bold text-card-foreground">
                Nossa Localização
              </h3>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Venha nos visitar ou solicite nosso atendimento no local
              </p>
            </div>
            
            <div className="h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://maps.app.goo.gl/zvzavmHsnG5LjxrS8"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ES Baterias Automotivas & Acessórios - Localização"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-12 lg:mt-16 text-center bg-card p-6 lg:p-8 rounded-2xl shadow-lg border border-border">
          <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3 lg:mb-4">
            ES BATERIAS AUTOMOTIVAS & ACESSÓRIOS
          </h3>
          <p className="text-muted-foreground mb-2 text-sm sm:text-base">
            CNPJ: 46.708.607/0001-21
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            Domínio: www.esbateriasauto.com.br
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

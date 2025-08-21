
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">CONTATO</span>
          </div>
          
          <h2 className="text-primary">
            Entre em 
            <br />
            <span className="text-accent">Contato Conosco</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atendê-lo 24 horas por dia. 
            Entre em contato e solicite seu orçamento sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Telefone</h4>
                    <a 
                      href="https://wa.me/5515991026043" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (15) 99102-6043
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">E-mail</h4>
                    <a 
                      href="mailto:esbateriasauto@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      esbateriasauto@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Avenida Coronel Firmo Vieira de Camargo, 549
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Horário</h4>
                    <p className="text-accent font-semibold">Atendimento 24 Horas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Redes Sociais
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://facebook.com/esbateriasautomotivas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <Facebook className="w-6 h-6 text-primary group-hover:text-primary" />
                  <div>
                    <div className="font-semibold text-card-foreground">Facebook</div>
                    <div className="text-sm text-muted-foreground">ES baterias automotivas e acessórios</div>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/esbateriastatui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <Instagram className="w-6 h-6 text-primary group-hover:text-primary" />
                  <div>
                    <div className="font-semibold text-card-foreground">Instagram</div>
                    <div className="text-sm text-muted-foreground">@esbateriastatui</div>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://wa.me/5515991026043" 
              className="btn-hero w-full text-center animate-pulse-glow block"
            >
              Solicitar Atendimento via WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-2xl font-bold text-card-foreground">
                Nossa Localização
              </h3>
              <p className="text-muted-foreground mt-2">
                Venha nos visitar ou solicite nosso atendimento no local
              </p>
            </div>
            
            <div className="h-96">
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
        <div className="mt-16 text-center bg-card p-8 rounded-2xl shadow-lg border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            ES BATERIAS AUTOMOTIVAS & ACESSÓRIOS
          </h3>
          <p className="text-muted-foreground mb-2">
            CNPJ: 46.708.607/0001-21
          </p>
          <p className="text-muted-foreground">
            Domínio: www.esbateriasauto.com.br
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

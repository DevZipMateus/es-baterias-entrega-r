
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Atendimento 24h</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Av. Coronel Firmo Vieira de Camargo, 549</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <a 
              href="https://wa.me/5515991026043" 
              className="hover:text-accent transition-colors font-medium"
            >
              (15) 99102-6043
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-background'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/76482c21-9d01-4071-afca-f2fb14d836a1.png" 
                alt="ES Baterias Automotivas & Acessórios" 
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <h2 className="text-lg font-bold text-primary">ES BATERIAS</h2>
                <p className="text-xs text-muted-foreground">AUTOMOTIVAS & ACESSÓRIOS</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a 
              href="https://wa.me/5515991026043" 
              className="hidden md:inline-flex btn-hero animate-pulse-glow"
            >
              Solicitar Orçamento
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-background border-t border-border">
              <nav className="py-4 space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 pt-2">
                  <a 
                    href="https://wa.me/5515991026043" 
                    className="btn-hero w-full text-center"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

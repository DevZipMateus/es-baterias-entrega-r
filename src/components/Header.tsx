
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Se estiver no topo, sempre mostrar
      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        
        // Se rolando para baixo, esconder header
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        }
        // Se rolando para cima, mostrar header
        else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigation = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <div className={`fixed w-full z-40 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-2 sm:px-4">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Atendimento 24h</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Av. Coronel Firmo Vieira de Camargo, 549</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
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
      <header className={`w-full transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-background'
      }`}>
        <div className="container-custom px-2 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/lovable-uploads/93aab8db-9c96-4d30-bc98-7b101d65fc7e.png" 
                alt="ES Baterias Automotivas & Acessórios" 
                className="h-8 sm:h-10 w-auto"
              />
              <div className="hidden xs:block">
                <h2 className="text-sm sm:text-lg font-bold text-primary">ES BATERIAS</h2>
                <p className="text-xs text-muted-foreground">AUTOMOTIVAS & ACESSÓRIOS</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a 
              href="https://wa.me/5515991026043" 
              className="hidden lg:inline-flex btn-hero text-sm xl:text-base px-4 py-2 xl:px-8 xl:py-4 animate-pulse-glow"
            >
              Solicitar Orçamento
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-background border-t border-border">
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 pt-4">
                  <a 
                    href="https://wa.me/5515991026043" 
                    className="btn-hero w-full text-center block py-3"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

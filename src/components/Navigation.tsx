import React, { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial size
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isMobile ? 'top-2 w-[95%] max-w-sm' : 'top-6 w-[95%] sm:w-[85%] lg:w-[75%] max-w-4xl'
    }`}>
      <div className={`transition-all duration-300 flex items-center ${
        isMobile 
          ? `px-4 h-16 rounded-2xl ${isScrolled ? 'bg-[#141414]/95 backdrop-blur-md border border-gray-800/50 shadow-lg' : 'bg-[#141414]/90 backdrop-blur-sm border border-gray-700/40'}`
          : `px-6 lg:px-8 h-16 rounded-full ${isScrolled ? 'bg-[#141414]/95 backdrop-blur-md border border-gray-800/50' : 'bg-[#141414]/80 backdrop-blur-sm border border-gray-700/30'} w-full`
      }`}>
        <div className={`flex items-center ${isMobile ? 'justify-center w-full' : 'justify-between w-full'}`}>
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <img 
              src="/aura-logo.svg" 
              alt="Aura Robotics Logo" 
              className={`object-contain ${isMobile ? 'h-12 w-12' : 'h-10 w-10 sm:h-16 sm:w-16'}`}
            />
            <span className={`font-bold ${isMobile ? 'text-lg text-[#9f64cb]' : 'text-base sm:text-xl text-white hidden sm:inline'}`}>
              Aura Robotics Team
            </span>
          </div>
          
          {!isMobile && (
            <div className="flex space-x-1 sm:space-x-3 ml-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'members', label: 'Members' },
                { id: 'about', label: 'About Us' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-sm font-medium transition-all duration-200 min-h-[44px] flex items-center justify-center ${
                    activeSection === item.id
                      ? 'bg-[#9f64cb] text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
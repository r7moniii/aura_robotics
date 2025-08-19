import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[95%] sm:w-[85%] lg:w-[75%] max-w-4xl">
      <div className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 ${
        isScrolled ? 'bg-[#141414]/95 backdrop-blur-md border border-gray-800/50' : 'bg-[#141414]/80 backdrop-blur-sm border border-gray-700/30'
      } w-full`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-[#9f64cb]" />
            <span className="text-lg sm:text-xl font-bold text-white hidden sm:inline">Aura Robotics Team</span>
            <span className="text-lg font-bold text-[#9f64cb] sm:hidden">Aura</span>
          </div>
          
          <div className="flex space-x-1 sm:space-x-3 ml-4 sm:ml-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'members', label: 'Members' },
              { id: 'about', label: 'About Us' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[#9f64cb] text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
import React, { useState, useEffect } from 'react';
import { ArrowDown, Trophy, Target, Users } from 'lucide-react';
import Navigation from './components/Navigation';
import ChromaGrid from './components/ChromaGrid';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'members', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMembers = () => {
    const element = document.getElementById('members');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    {
      image: "https://axbqnhcluxxusukcczvw.supabase.co/storage/v1/object/public/bucket/istockphoto-1087531642-612x612-Photoroom.png",
      title: "Abdulrahim Khoja",
      subtitle: "Visionary Code Architect",
      borderColor: "#9f64cb",
      gradient: "linear-gradient(145deg, #9f64cb, #000000)",
    },
    {
      image: "https://axbqnhcluxxusukcczvw.supabase.co/storage/v1/object/public/bucket/istockphoto-1087531642-612x612-Photoroom.png",
      title: "Abubaker El-Saltani",
      subtitle: "Creative Code Weaver & Visual Artist",
      borderColor: "#9f64cb",
      gradient: "linear-gradient(145deg, #9f64cb, #000000)",
    },
    {
      image: "https://axbqnhcluxxusukcczvw.supabase.co/storage/v1/object/public/bucket/istockphoto-1087531642-612x612-Photoroom.png",
      title: "Mohammed El-Shareef",
      subtitle: "Strategic Mentor & Community Builder",
      borderColor: "#9f64cb",
      gradient: "linear-gradient(145deg, #9f64cb, #000000)",
    },
    {
      image: "https://axbqnhcluxxusukcczvw.supabase.co/storage/v1/object/public/bucket/istockphoto-1087531642-612x612-Photoroom.png",
      title: "Jehad Ben Dardaf",
      subtitle: "Innovative Robotics Constructor",
      borderColor: "#9f64cb",
      gradient: "linear-gradient(145deg, #9f64cb, #000000)",
    },
    {
      image: "https://axbqnhcluxxusukcczvw.supabase.co/storage/v1/object/public/bucket/istockphoto-1087531642-612x612-Photoroom.png",
      title: "Sanad Edbish",
      subtitle: "Ambitious Junior Programmer & Builder",
      borderColor: "#9f64cb",
      gradient: "linear-gradient(145deg, #9f64cb, #000000)",
    },
    {
      image: "https://axbqnhcluxxusukcczvw.supabase.co/storage/v1/object/public/bucket/istockphoto-1087531642-612x612-Photoroom.png",
      title: "Taha Bheh",
      subtitle: "Dedicated Software Engineer",
      borderColor: "#9f64cb",
      gradient: "linear-gradient(145deg, #9f64cb, #000000)",
    },
    {
      image: "https://axbqnhcluxxusukcczvw.supabase.co/storage/v1/object/public/bucket/istockphoto-1087531642-612x612-Photoroom.png",
      title: "Rajab Ben Khayal",
      subtitle: "Passionate Problem Solver & Coder",
      borderColor: "#9f64cb",
      gradient: "linear-gradient(145deg, #9f64cb, #000000)",
    },
    {
      image: "https://axbqnhcluxxusukcczvw.supabase.co/storage/v1/object/public/bucket/istockphoto-1087531642-612x612-Photoroom.png",
      title: "Fadel El-Senusi",
      subtitle: "Rising Star in Programming",
      borderColor: "#9f64cb",
      gradient: "linear-gradient(145deg, #9f64cb, #000000)",
    },
    {
      image: "https://axbqnhcluxxusukcczvw.supabase.co/storage/v1/object/public/bucket/istockphoto-1087531642-612x612-Photoroom.png",
      title: "Ahmed Arbida",
      subtitle: "Precision Engineer & Robotics Fabricator",
      borderColor: "#9f64cb",
      gradient: "linear-gradient(145deg, #9f64cb, #000000)",
    },
  ];

  return (
    <div className="bg-[#141414] text-white font-sans">
      <Navigation activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9f64cb]/20 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-left w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            Aura Robotics
            <span className="block text-[#9f64cb]">Team</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl leading-relaxed">
            Into coding, building, and all things STEM.
            Sometimes we code, sometimes we stare at the code.
          </p>
          <button
            onClick={scrollToMembers}
            className="group inline-flex items-center space-x-2 sm:space-x-3 bg-[#9f64cb] hover:bg-[#8b4fb8] px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-200 transform hover:scale-105"
          >
            <span className="text-base sm:text-lg font-medium">Meet Our Team</span>
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 hidden sm:block">
          <div className="absolute top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 border border-[#9f64cb] rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-16 sm:right-32 w-12 sm:w-24 h-12 sm:h-24 border border-[#9f64cb] rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-8 sm:w-16 h-8 sm:h-16 bg-[#9f64cb] rounded-full animate-ping"></div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Our <span className="text-[#9f64cb]">Team</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Meet the people behind Aura Robotics. We're programmers, designers, builders, 
              and makers who love working together to create cool robotics projects.
            </p>
          </div>

          <div className="relative min-h-[600px] sm:min-h-[800px]">
            <ChromaGrid
              items={teamMembers}
              radius={200}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-transparent to-[#9f64cb]/5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              About <span className="text-[#9f64cb]">Aura Robotics</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Founded in 2025, Aura Robotics Team is a fresh collective of ambitious innovators 
              dedicated to elevating the robotics landscape in our country through cutting-edge technology and bold vision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4">
                <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-[#9f64cb] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Rising Innovators</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    A dynamic team of passionate engineers and developers committed to pushing boundaries 
                    and creating revolutionary robotics solutions that will shape the future of our industry.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-[#9f64cb] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Technology Vision</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Focused on developing next-generation robotics systems that combine artificial intelligence, 
                    precision engineering, and innovative design to solve real-world challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#9f64cb] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">National Ambition</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Driven by the goal to elevate our country's position in the global robotics arena, 
                    bringing world-class innovation and technical excellence to our local tech ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#9f64cb]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#9f64cb]/20">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#9f64cb]">Our Mission</h3>
                <blockquote className="text-base sm:text-lg text-gray-300 leading-relaxed italic">
                  "To revolutionize robotics in our country by combining ambitious vision with 
                  cutting-edge technology. We're building the future of automation, one innovative 
                  solution at a time, and establishing our nation as a leader in robotics excellence."
                </blockquote>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#9f64cb]/20">
                  <p className="text-sm text-gray-400">
                    Established 2025 • Ambitious Innovators • Elevating National Robotics
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2024 Aura Robotics Team. Innovating the future, one robot at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import { useState, useEffect } from 'react';
import { BookOpen, Gamepad2, HelpCircle, Home, Menu, X, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { courseInfo } from '@/data/courseData';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Inicio', icon: Home },
    { id: 'units', label: 'Unidades', icon: BookOpen },
    { id: 'quiz', label: 'Juego', icon: Gamepad2 },
    { id: 'qa', label: 'Preguntas', icon: HelpCircle },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-lg hidden sm:block ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              SNPIP
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : isScrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white/90 hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* LinkedIn Button */}
          <a
            href={courseInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2"
          >
            <Button
              variant="outline"
              className={`flex items-center gap-2 ${
                isScrolled
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-50'
                  : 'border-white text-white hover:bg-white/20'
              }`}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-xl shadow-xl mt-2 p-4 border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 justify-start px-4 py-3 rounded-lg ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                );
              })}
              <a
                href={courseInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2 border-blue-600 text-blue-600"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn del Facilitador</span>
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import { useState, useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { Units } from '@/sections/Units';
import { Quiz } from '@/sections/Quiz';
import { QA } from '@/sections/QA';
import { Footer } from '@/sections/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main ref={mainRef} className="relative">
        <Hero onNavigate={handleNavigate} />
        <Units />
        <Quiz />
        <QA />
        <Footer />
      </main>

      <Toaster position="top-right" />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slide0 from './components/Slide0';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';
import Slide8 from './components/Slide8';
import Slide9 from './components/Slide9';
import Slide10 from './components/Slide10';
import Slide11 from './components/Slide11';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Slide0 key="0" />,
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
    <Slide7 key="7" />,
    <Slide8 key="8" />,
    <Slide9 key="9" />,
    <Slide10 key="10" />,
    <Slide11 key="11" />
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [slides.length]);

  return (
    <div className="h-screen w-screen bg-[var(--s-bg-base)] flex flex-col overflow-hidden">
      <div className="flex-1 overflow-auto min-h-0">
        {slides[currentSlide]}
      </div>

      <div className="flex items-center justify-between px-8 py-4 bg-[var(--s-bg-elevated)] border-t border-[var(--s-glass-border-strong)]">
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-[var(--s-glass-hover)] border cursor-pointer"
          style={{
            background: 'var(--s-glass)',
            borderColor: 'var(--s-glass-border)',
            color: 'var(--s-text-primary)',
            fontFamily: 'var(--font-body)',
            fontWeight: 400
          }}
        >
          <ChevronLeft className="w-5 h-5" />
          Anterior
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'bg-[var(--s-text-primary)] w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-[var(--s-glass-hover)] border cursor-pointer"
          style={{
            background: 'var(--s-glass)',
            borderColor: 'var(--s-glass-border)',
            color: 'var(--s-text-primary)',
            fontFamily: 'var(--font-body)',
            fontWeight: 400
          }}
        >
          Próximo
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
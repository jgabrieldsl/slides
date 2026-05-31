import { Shield, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export default function Slide0() {
  return (
    <div
      className="h-full px-12 py-8 flex flex-col justify-center relative overflow-hidden text-center"
      style={{
        background: 'var(--s-bg-base)',
        backgroundImage: 'var(--s-bg-gradient)',
      }}
    >
      {/* Visual Background Accent */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600"
          alt="Balança da Justiça e Tecnologia"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay for high readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#07090d] via-transparent to-transparent opacity-80 pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto z-10 w-full animate-fade-in-up">
        {/* Animated Badge Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center border" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border-strong)' }}>
            <Shield className="w-10 h-10 text-[var(--s-text-primary)]" />
          </div>
        </div>

        {/* Presentation Title */}
        <h1 
          className="text-8xl md:text-9xl mb-4 font-normal tracking-tight" 
          style={{ 
            fontFamily: 'var(--font-heading)',
            color: 'var(--s-text-primary)',
            textShadow: '0 0 40px rgba(240, 235, 225, 0.15)'
          }}
        >
          Sentinella
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <p 
            className="text-2xl md:text-3xl font-medium" 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              color: 'var(--s-text-secondary)',
              letterSpacing: '0.02em'
            }}
          >
            Inteligência jurídica que cita a fonte.
          </p>
        </div>

        {/* Description */}
        <div className="rounded-2xl p-8 border mt-4" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
          <p className="text-xl md:text-2xl leading-relaxed font-light" style={{ color: 'var(--s-text-secondary)' }}>
            Um assistente virtual especializado em <span className="font-semibold text-[var(--s-text-primary)]">CLT</span> — 
            respostas fundamentadas, <span className="font-semibold text-[var(--s-text-primary)]">sem alucinações</span> e com 
            <span className="font-semibold text-[var(--s-text-primary)]"> rastreabilidade jurídica total</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

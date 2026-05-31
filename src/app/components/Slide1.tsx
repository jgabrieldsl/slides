import { TrendingUp, AlertCircle, FileText } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="h-full bg-[#07090d] text-[var(--s-text-primary)] px-12 py-8 flex flex-col justify-center" style={{ backgroundImage: 'linear-gradient(135deg, #111318 0%, #080a0d 100%)' }}>
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-5xl mb-16 text-center" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          Os números que não podemos ignorar
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="rounded-2xl p-8 border animate-fade-in-up" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 opacity-80" />
            </div>
            <div className="text-4xl mb-3 text-center" style={{ fontFamily: 'var(--font-heading)' }}>5 milhões+</div>
            <p className="text-center" style={{ color: 'var(--s-text-secondary)' }}>de processos trabalhistas abertos por ano no Brasil</p>
          </div>

          <div className="rounded-2xl p-8 border animate-fade-in-up animation-delay-150" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="flex justify-center mb-4">
              <AlertCircle className="w-12 h-12 opacity-80" />
            </div>
            <div className="text-4xl mb-3 text-center" style={{ fontFamily: 'var(--font-heading)' }}>80%</div>
            <p className="text-center" style={{ color: 'var(--s-text-secondary)' }}>dos trabalhadores desconhecem seus direitos básicos pela CLT</p>
          </div>

          <div className="rounded-2xl p-8 border animate-fade-in-up animation-delay-300" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="flex justify-center mb-4">
              <FileText className="w-12 h-12 opacity-80" />
            </div>
            <div className="text-4xl mb-3 text-center" style={{ fontFamily: 'var(--font-heading)' }}>900+ Artigos</div>
            <p className="text-center" style={{ color: 'var(--s-text-secondary)' }}>na CLT com regras complexas que geram dúvidas e risco jurídico diário</p>
          </div>
        </div>

        <div className="rounded-2xl p-8 border-l-4 animate-fade-in-up animation-delay-450" style={{ background: 'var(--s-warning-dim)', borderColor: 'var(--s-warning)' }}>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--s-text-primary)' }}>
            Sem suporte confiável, empresas e trabalhadores tomam decisões baseadas em informações erradas ou desatualizadas.
          </p>
        </div>
      </div>
    </div>
  );
}

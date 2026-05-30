import { MessageSquare, Database, Sparkles } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="h-full px-12 py-8 flex flex-col justify-center" style={{ background: '#0b0d12' }}>
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-5xl mb-16 text-center" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          Como funciona
        </h1>

        <div className="flex items-center justify-between mb-12">
          <div className="flex-1 flex flex-col items-center animate-fade-in-up">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4" style={{ background: 'var(--s-surface-strong)', border: '1px solid var(--s-glass-border-strong)' }}>
              <MessageSquare className="w-12 h-12" style={{ color: 'var(--s-text-primary)' }} />
            </div>
            <h3 className="text-xl mb-2 text-center" style={{ fontFamily: 'var(--font-heading)' }}>1. Usuário pergunta</h3>
            <p className="text-center" style={{ color: 'var(--s-text-muted)' }}>Dúvida em linguagem natural</p>
          </div>

          <div className="flex-none px-4">
            <div className="w-12 h-[2px]" style={{ background: 'var(--s-glass-border-strong)' }}></div>
          </div>

          <div className="flex-1 flex flex-col items-center animate-fade-in-up animation-delay-200">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4" style={{ background: 'var(--s-surface-strong)', border: '1px solid var(--s-glass-border-strong)' }}>
              <Database className="w-12 h-12" style={{ color: 'var(--s-text-primary)' }} />
            </div>
            <h3 className="text-xl mb-2 text-center" style={{ fontFamily: 'var(--font-heading)' }}>2. RAG busca</h3>
            <p className="text-center" style={{ color: 'var(--s-text-muted)' }}>Artigos reais da CLT/TST</p>
          </div>

          <div className="flex-none px-4">
            <div className="w-12 h-[2px]" style={{ background: 'var(--s-glass-border-strong)' }}></div>
          </div>

          <div className="flex-1 flex flex-col items-center animate-fade-in-up animation-delay-400">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4" style={{ background: 'var(--s-surface-strong)', border: '1px solid var(--s-glass-border-strong)' }}>
              <Sparkles className="w-12 h-12" style={{ color: 'var(--s-text-primary)' }} />
            </div>
            <h3 className="text-xl mb-2 text-center" style={{ fontFamily: 'var(--font-heading)' }}>3. IA responde</h3>
            <p className="text-center" style={{ color: 'var(--s-text-muted)' }}>Com fonte citada</p>
          </div>
        </div>

        <div className="rounded-2xl p-10 border-l-4 animate-fade-in-up animation-delay-500" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)', borderLeftColor: 'var(--s-text-primary)' }}>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--s-text-secondary)' }}>
            O backend recupera os chunks mais relevantes da CLT via <span className="font-semibold" style={{ color: 'var(--s-text-primary)' }}>busca vetorial semântica</span>,
            monta o contexto e transmite a resposta em streaming com <span className="font-semibold" style={{ color: 'var(--s-text-primary)' }}>referências interativas clicáveis</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

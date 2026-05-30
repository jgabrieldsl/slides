import { User, Search, FileCheck } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="h-full px-12 py-8 flex flex-col justify-center" style={{ background: 'var(--s-bg-base)', backgroundImage: 'var(--s-bg-gradient)' }}>
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-5xl mb-8 text-center" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          Veja o Sentinella em ação
        </h1>
        <p className="text-2xl text-center mb-16" style={{ color: 'var(--s-text-secondary)', fontWeight: 300 }}>
          Da pergunta à resposta fundamentada — tudo em tempo real, com rastreabilidade jurídica completa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl p-8 border-t-2 animate-fade-in-up" style={{ background: 'var(--s-glass)', border: '1px solid var(--s-glass-border)', borderTopColor: 'var(--s-info)', borderTopWidth: '3px' }}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'var(--s-info-dim)' }}>
                <User className="w-10 h-10" style={{ color: 'var(--s-info)' }} />
              </div>
            </div>
            <h3 className="text-2xl mb-4 text-center" style={{ fontFamily: 'var(--font-heading)' }}>Usuário</h3>
            <p className="text-center leading-relaxed" style={{ color: 'var(--s-text-secondary)' }}>
              Digita a dúvida trabalhista em linguagem natural
            </p>
            <div className="mt-6 rounded-lg p-4" style={{ background: 'var(--s-surface)' }}>
              <p className="text-sm italic" style={{ color: 'var(--s-text-muted)' }}>
                "Tenho direito a horas extras se trabalho aos sábados?"
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-8 animate-fade-in-up animation-delay-200" style={{ background: 'var(--s-glass)', border: '1px solid var(--s-glass-border)', borderTopColor: 'var(--s-success)', borderTopWidth: '3px' }}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'var(--s-success-dim)' }}>
                <Search className="w-10 h-10" style={{ color: 'var(--s-success)' }} />
              </div>
            </div>
            <h3 className="text-2xl mb-4 text-center" style={{ fontFamily: 'var(--font-heading)' }}>RAG</h3>
            <p className="text-center leading-relaxed" style={{ color: 'var(--s-text-secondary)' }}>
              Recupera os artigos e súmulas exatos do banco vetorial
            </p>
            <div className="mt-6 rounded-lg p-4" style={{ background: 'var(--s-surface)' }}>
              <p className="text-sm italic" style={{ color: 'var(--s-text-muted)' }}>
                Busca semântica em CLT Art. 59, 60, 71...
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-8 animate-fade-in-up animation-delay-400" style={{ background: 'var(--s-glass)', border: '1px solid var(--s-glass-border)', borderTopColor: '#a78bfa', borderTopWidth: '3px' }}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'rgba(167, 139, 250, 0.15)' }}>
                <FileCheck className="w-10 h-10" style={{ color: '#a78bfa' }} />
              </div>
            </div>
            <h3 className="text-2xl mb-4 text-center" style={{ fontFamily: 'var(--font-heading)' }}>Resposta</h3>
            <p className="text-center leading-relaxed" style={{ color: 'var(--s-text-secondary)' }}>
              Gerada em streaming com links interativos para as fontes
            </p>
            <div className="mt-6 rounded-lg p-4" style={{ background: 'var(--s-surface)' }}>
              <p className="text-sm italic" style={{ color: 'var(--s-text-muted)' }}>
                "Sim, conforme CLT Art. 59..."
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

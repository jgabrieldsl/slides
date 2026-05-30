import { ArrowRight } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="h-full px-12 py-8 flex flex-col justify-center" style={{ background: '#0b0d12' }}>
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-5xl mb-16 text-center" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          Arquitetura
        </h1>

        <div className="rounded-2xl p-12 border" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
          <div className="space-y-8">
            {/* Fluxo HTTP REST */}
            <div className="rounded-xl p-8 animate-fade-in-up" style={{ background: 'var(--s-surface)', border: '1px solid var(--s-glass-border)' }}>
              <h3 className="text-xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-primary)' }}>Fluxo HTTP REST</h3>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="px-6 py-4 rounded-lg" style={{ background: 'var(--s-surface-strong)', border: '1px solid var(--s-glass-border-strong)' }}>
                  <p className="font-semibold" style={{ color: 'var(--s-text-primary)' }}>Usuário</p>
                </div>
                <ArrowRight className="w-8 h-8" style={{ color: 'var(--s-text-muted)' }} />
                <div className="px-6 py-4 rounded-lg" style={{ background: 'var(--s-info-dim)', border: '1px solid var(--s-info)' }}>
                  <p className="font-semibold" style={{ color: 'var(--s-info)' }}>Frontend Next.js</p>
                </div>
                <ArrowRight className="w-8 h-8" style={{ color: 'var(--s-text-muted)' }} />
                <div className="px-6 py-4 rounded-lg" style={{ background: 'var(--s-success-dim)', border: '1px solid var(--s-success)' }}>
                  <p className="font-semibold" style={{ color: 'var(--s-success)' }}>Backend Django/DRF</p>
                </div>
                <ArrowRight className="w-8 h-8" style={{ color: 'var(--s-text-muted)' }} />
                <div className="px-6 py-4 rounded-lg" style={{ background: 'rgba(167, 139, 250, 0.15)', border: '1px solid #a78bfa' }}>
                  <p className="font-semibold" style={{ color: '#a78bfa' }}>PostgreSQL + pgvector</p>
                </div>
              </div>
            </div>

            {/* Fluxo WebSocket Streaming */}
            <div className="rounded-xl p-8 animate-fade-in-up animation-delay-200" style={{ background: 'var(--s-surface)', border: '1px solid var(--s-glass-border)' }}>
              <h3 className="text-xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-primary)' }}>Fluxo WebSocket Streaming</h3>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="px-6 py-4 rounded-lg" style={{ background: 'var(--s-info-dim)', border: '1px solid var(--s-info)' }}>
                  <p className="font-semibold" style={{ color: 'var(--s-info)' }}>Frontend</p>
                </div>
                <ArrowRight className="w-8 h-8" style={{ color: 'var(--s-text-muted)' }} />
                <div className="px-6 py-4 rounded-lg" style={{ background: 'var(--s-warning-dim)', border: '1px solid var(--s-warning)' }}>
                  <p className="font-semibold" style={{ color: 'var(--s-warning)' }}>Django Channels (WebSocket)</p>
                </div>
                <ArrowRight className="w-8 h-8" style={{ color: 'var(--s-text-muted)' }} />
                <div className="px-6 py-4 rounded-lg" style={{ background: 'var(--s-danger-dim)', border: '1px solid var(--s-danger)' }}>
                  <p className="font-semibold" style={{ color: 'var(--s-danger)' }}>Ollama</p>
                </div>
                <ArrowRight className="w-8 h-8" style={{ color: 'var(--s-text-muted)' }} />
                <div className="px-6 py-4 rounded-lg" style={{ background: 'var(--s-info-dim)', border: '1px solid var(--s-info)' }}>
                  <p className="font-semibold" style={{ color: 'var(--s-info)' }}>Retorna tokens em stream</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl p-6 text-center animate-fade-in-up animation-delay-400" style={{ background: 'var(--s-accent-warm)', border: '1px solid var(--s-glass-border-strong)' }}>
            <p className="text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-primary)' }}>100% local, 100% rastreável</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Shield, ExternalLink } from 'lucide-react';

export default function Slide11() {
  return (
    <div className="h-full px-12 py-8 flex items-center justify-center" style={{ background: 'var(--s-bg-base)', backgroundImage: 'var(--s-bg-gradient)' }}>
      <div className="max-w-5xl mx-auto text-center w-full">
        <div className="mb-12 animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ background: 'var(--s-glass)', border: '2px solid var(--s-glass-border-strong)' }}>
              <Shield className="w-16 h-16" style={{ color: 'var(--s-text-primary)' }} />
            </div>
          </div>
          <h1 className="text-7xl mb-8" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em', color: 'var(--s-text-primary)' }}>Sentinella</h1>
          <div className="rounded-2xl p-10 mb-12 border" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <p className="text-4xl leading-relaxed" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-primary)', fontWeight: 400 }}>
              Inteligência jurídica que chega onde a dúvida começa.
            </p>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in-up animation-delay-200">
          <div className="rounded-xl p-6 border" style={{ background: 'var(--s-surface)', borderColor: 'var(--s-glass-border-strong)' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
              <div>
                <p className="mb-2" style={{ color: 'var(--s-text-muted)' }}>Confiabilidade</p>
                <p className="text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-primary)' }}>100%</p>
              </div>
              <div>
                <p className="mb-2" style={{ color: 'var(--s-text-muted)' }}>Alucinações</p>
                <p className="text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-primary)' }}>0</p>
              </div>
              <div>
                <p className="mb-2" style={{ color: 'var(--s-text-muted)' }}>Fontes citadas</p>
                <p className="text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-primary)' }}>Todas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16" style={{ color: 'var(--s-text-faint)' }}>
          <p className="text-sm">
            Desenvolvido com responsabilidade social e tecnologia de ponta
          </p>
        </div>
      </div>
    </div>
  );
}

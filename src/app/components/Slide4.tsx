import { Shield, CheckCircle } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="h-full px-12 py-8 flex items-center justify-center" style={{ background: 'var(--s-bg-base)', backgroundImage: 'var(--s-bg-gradient)' }}>
      <div className="max-w-5xl mx-auto text-center w-full">
        <div className="mb-12 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ background: 'var(--s-glass)', border: '1px solid var(--s-glass-border)' }}>
              <Shield className="w-14 h-14" style={{ color: 'var(--s-text-primary)' }} />
            </div>
          </div>
          <h1 className="text-7xl mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em', color: 'var(--s-text-primary)' }}>Sentinella</h1>
          <p className="text-3xl mb-8" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-secondary)', fontWeight: 400 }}>Inteligência jurídica que cita a fonte.</p>
        </div>

        <div className="rounded-2xl p-12 border animate-fade-in-up animation-delay-200" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
          <p className="text-2xl leading-relaxed mb-8" style={{ color: 'var(--s-text-primary)', fontWeight: 300 }}>
            A primeira plataforma de consulta trabalhista com <span className="font-semibold">RAG estrito</span>,
            que responde com base nos textos reais da CLT, Súmulas e OJs do TST — sem alucinações.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="w-6 h-6" style={{ color: 'var(--s-success)' }} />
              <span className="text-lg" style={{ color: 'var(--s-text-secondary)' }}>Fonte verificável</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="w-6 h-6" style={{ color: 'var(--s-success)' }} />
              <span className="text-lg" style={{ color: 'var(--s-text-secondary)' }}>Zero alucinações</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="w-6 h-6" style={{ color: 'var(--s-success)' }} />
              <span className="text-lg" style={{ color: 'var(--s-text-secondary)' }}>100% confiável</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

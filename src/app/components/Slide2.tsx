import { ImageWithFallback } from './ImageWithFallback';

export default function Slide2() {
  return (
    <div className="h-full px-12 py-8 flex flex-col justify-center" style={{ background: '#0b0d12' }}>
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-5xl mb-12 text-center" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-primary)', letterSpacing: '-0.03em' }}>
          O problema que ninguém resolve
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="rounded-2xl p-10 border" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
              <p className="text-2xl leading-relaxed" style={{ color: 'var(--s-text-primary)', fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                IAs generativas genéricas <span className="font-semibold">alucinam artigos</span>,
                <span className="font-semibold"> inventam regras</span> e
                <span className="font-semibold"> misturam conceitos</span> — em termos jurídicos,
                isso gera passivo de risco inaceitável para RH, advogados e colaboradores.
              </p>
            </div>

            <div className="mt-8 rounded-r-2xl p-6 border-l-4" style={{ background: 'var(--s-danger-dim)', borderColor: 'var(--s-danger)' }}>
              <p className="text-lg" style={{ color: 'var(--s-danger)' }}>
                ⚠️ Informação errada em direito trabalhista = processos, multas e prejuízos financeiros
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border animate-fade-in-up animation-delay-200" style={{ borderColor: 'var(--s-glass-border)' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3ODAwMTk5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="AI Technology Visualization"
              className="w-full h-[500px] object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

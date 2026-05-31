import { ImageWithFallback } from './ImageWithFallback';
import { Target, Users } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="h-full px-12 py-8 flex flex-col justify-center" style={{ background: 'var(--s-bg-base)', backgroundImage: 'var(--s-bg-gradient)' }}>
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-5xl mb-12 text-center" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          E se a IA consultasse a lei de verdade?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div className="rounded-2xl overflow-hidden border animate-fade-in-up" style={{ borderColor: 'var(--s-glass-border)' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMHRlY2hub2xvZ3klMjBsYXd5ZXJ8ZW58MXx8fHwxNzgwMTUzNTUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Justice Statue"
              className="w-full h-[500px] object-cover opacity-70"
            />
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <div className="rounded-2xl p-10 mb-8 border" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
              <p className="text-2xl leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: 'var(--s-text-primary)' }}>
                O <span className="font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Sentinella</span> usa arquitetura <span className="font-semibold">RAG estrita</span>:
              </p>
              <p className="text-xl leading-relaxed" style={{ color: 'var(--s-text-secondary)' }}>
                O modelo não memoriza a lei, ele <span className="font-semibold" style={{ color: 'var(--s-text-primary)' }}>consulta o texto real</span> no
                banco de dados como única fonte de verdade.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-xl p-6 border-l-4 border" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)', borderLeftColor: 'var(--s-info)' }}>
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8" style={{ color: 'var(--s-info)' }} />
                  <div>
                    <div className="font-semibold text-lg" style={{ color: 'var(--s-text-primary)' }}>ODS 16</div>
                    <p style={{ color: 'var(--s-text-secondary)' }}>Paz, Justiça e Instituições Eficazes</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6 border-l-4 border" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)', borderLeftColor: 'var(--s-success)' }}>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8" style={{ color: 'var(--s-success)' }} />
                  <div>
                    <div className="font-semibold text-lg" style={{ color: 'var(--s-text-primary)' }}>Acesso à Justiça</div>
                    <p style={{ color: 'var(--s-text-secondary)' }}>Democratização do conhecimento jurídico</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Code2, Server, Radio, Database as DatabaseIcon, Cpu, Shield } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="h-full px-12 py-8 flex flex-col justify-center" style={{ background: 'var(--s-bg-base)', backgroundImage: 'var(--s-bg-gradient)' }}>
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-5xl mb-16 text-center" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          Tecnologias
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl p-8 border transition-all hover:scale-[1.02] animate-fade-in-up" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-10 h-10" style={{ color: 'var(--s-info)' }} />
              <h3 className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>Next.js 15 + TypeScript</h3>
            </div>
            <p style={{ color: 'var(--s-text-muted)' }}>Interface do usuário com markdown em tempo real</p>
          </div>

          <div className="rounded-2xl p-8 border transition-all hover:scale-[1.02] animate-fade-in-up animation-delay-100" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-10 h-10" style={{ color: 'var(--s-success)' }} />
              <h3 className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>Django + DRF</h3>
            </div>
            <p style={{ color: 'var(--s-text-muted)' }}>APIs REST e autenticação JWT</p>
          </div>

          <div className="rounded-2xl p-8 border transition-all hover:scale-[1.02] animate-fade-in-up animation-delay-200" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <Radio className="w-10 h-10" style={{ color: 'var(--s-warning)' }} />
              <h3 className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>Django Channels</h3>
            </div>
            <p style={{ color: 'var(--s-text-muted)' }}>WebSockets para streaming de respostas</p>
          </div>

          <div className="rounded-2xl p-8 border transition-all hover:scale-[1.02] animate-fade-in-up animation-delay-300" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <DatabaseIcon className="w-10 h-10" style={{ color: '#a78bfa' }} />
              <h3 className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>PostgreSQL 16 + pgvector</h3>
            </div>
            <p style={{ color: 'var(--s-text-muted)' }}>Busca vetorial semântica por CosineDistance</p>
          </div>

          <div className="rounded-2xl p-8 border transition-all hover:scale-[1.02] animate-fade-in-up animation-delay-400" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-10 h-10" style={{ color: 'var(--s-danger)' }} />
              <h3 className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>Ollama / gemma4:e4b</h3>
            </div>
            <p style={{ color: 'var(--s-text-muted)' }}>Modelo local de geração de linguagem</p>
          </div>

          <div className="rounded-2xl p-8 border transition-all hover:scale-[1.02] animate-fade-in-up animation-delay-500" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10" style={{ color: 'var(--s-text-primary)' }} />
              <h3 className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>RAG Engine</h3>
            </div>
            <p style={{ color: 'var(--s-text-muted)' }}>Guardrails e prompts de segurança jurídica</p>
          </div>
        </div>

      </div>
    </div>
  );
}

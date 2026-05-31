import { ArrowRight, ArrowDown, ArrowLeft, ArrowUpLeft } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="h-full px-12 py-6 flex flex-col justify-center select-none" style={{ background: '#0b0d12', backgroundImage: 'var(--s-bg-gradient)' }}>
      <div className="max-w-7xl mx-auto w-full animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-primary)', letterSpacing: '-0.02em' }}>
            Arquitetura em camadas do Sentinella
          </h1>
          <p className="text-lg" style={{ color: 'var(--s-text-secondary)' }}>
            Fluxo RAG implementado no repositório develop
          </p>
        </div>

        {/* Layered Architecture Diagram */}
        <div className="space-y-8">
          
          {/* Layer 1: APRESENTAÇÃO */}
          <div className="rounded-xl p-4 border" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="text-xs uppercase tracking-wider mb-3 font-mono font-semibold" style={{ color: 'var(--s-text-muted)' }}>
              01. APRESENTAÇÃO
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              
              {/* Next.js + React */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>Next.js + React</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>Rotas, login/cadastro, chat e histórico.</p>
                </div>
                {/* Horizontal line pointing to right */}
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-[rgba(255,255,255,0.15)] hidden md:block z-20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[6px] border-l-[rgba(255,255,255,0.35)] border-y-[4px] border-y-transparent" />
                </div>
              </div>

              {/* Chat streaming */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>Chat streaming</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>WebSocket e resposta progressiva.</p>
                </div>
                {/* Vertical line pointing down to Django Channels */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-8 w-[2px] bg-[rgba(255,255,255,0.15)] hidden md:block z-20">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-t-[6px] border-t-[rgba(255,255,255,0.35)] border-x-[4px] border-x-transparent" />
                </div>
              </div>

              {/* JWT client */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>JWT client</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>Access/refresh token e sessão.</p>
                </div>
              </div>

              {/* Empty placeholder to maintain symmetry */}
              <div className="hidden md:block"></div>

            </div>
          </div>

          {/* Layer 2: APLICAÇÃO E AUTENTICAÇÃO */}
          <div className="rounded-xl p-4 border" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="text-xs uppercase tracking-wider mb-3 font-mono font-semibold" style={{ color: 'var(--s-text-muted)' }}>
              02. APLICAÇÃO E AUTENTICAÇÃO
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              
              {/* Django + DRF */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>Django + DRF</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>API REST de auth, usuário e sessão.</p>
                </div>
                {/* Vertical line pointing down to Embedding */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-8 w-[2px] bg-[rgba(255,255,255,0.15)] hidden md:block z-20">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-t-[6px] border-t-[rgba(255,255,255,0.35)] border-x-[4px] border-x-transparent" />
                </div>
              </div>

              {/* Django Channels */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>Django Channels</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>ASGI + WebSocket autenticado.</p>
                </div>
                {/* Horizontal line pointing right to Prompt builder */}
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-[rgba(255,255,255,0.15)] hidden md:block z-20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[6px] border-l-[rgba(255,255,255,0.35)] border-y-[4px] border-y-transparent" />
                </div>
              </div>

              {/* Prompt builder */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>Prompt builder</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>Contexto, regras e pergunta.</p>
                </div>
                {/* Vertical line pointing down to LLM local */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-8 w-[2px] bg-[rgba(255,255,255,0.15)] hidden md:block z-20">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-t-[6px] border-t-[rgba(255,255,255,0.35)] border-x-[4px] border-x-transparent" />
                </div>
              </div>

              {/* simple-jwt */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>simple-jwt</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>Access e refresh token.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Layer 3: RECUPERAÇÃO E GERAÇÃO */}
          <div className="rounded-xl p-4 border" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="text-xs uppercase tracking-wider mb-3 font-mono font-semibold" style={{ color: 'var(--s-text-muted)' }}>
              03. RECUPERAÇÃO E GERAÇÃO
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              
              {/* Embedding */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>Embedding</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>Pergunta convertida em vetor.</p>
                </div>
                {/* Horizontal line pointing right to Busca vetorial */}
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-[rgba(255,255,255,0.15)] hidden md:block z-20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[6px] border-l-[rgba(255,255,255,0.35)] border-y-[4px] border-y-transparent" />
                </div>
              </div>

              {/* Busca vetorial */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>Busca vetorial</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>Top-k por distância de cosseno.</p>
                </div>
                {/* Vertical line pointing down to clt_chunks */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-8 w-[2px] bg-[rgba(255,255,255,0.15)] hidden md:block z-20">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-t-[6px] border-t-[rgba(255,255,255,0.35)] border-x-[4px] border-x-transparent" />
                </div>
              </div>

              {/* LLM local */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>LLM local</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>Geração configurável via Ollama.</p>
                </div>
                {/* Horizontal line pointing left to Busca vetorial */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-[rgba(255,255,255,0.15)] hidden md:block z-20">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 border-r-[6px] border-r-[rgba(255,255,255,0.35)] border-y-[4px] border-y-transparent" />
                </div>
                {/* Horizontal line pointing right to Guardrails */}
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-[rgba(255,255,255,0.15)] hidden md:block z-20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[6px] border-l-[rgba(255,255,255,0.35)] border-y-[4px] border-y-transparent" />
                </div>
                {/* Diagonal line pointing down-left to clt_chunks */}
                <div className="absolute -bottom-8 -left-8 w-8 h-8 hidden md:block z-20 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 32 32" fill="none">
                    <path d="M32 0 L4 28" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                    <path d="M4 28 H12 M4 28 V20" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Guardrails */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>Guardrails</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>Contexto fechado e citações [N].</p>
                </div>
              </div>

            </div>
          </div>

          {/* Layer 4: DADOS E INGESTÃO OFFLINE */}
          <div className="rounded-xl p-4 border" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
            <div className="text-xs uppercase tracking-wider mb-3 font-mono font-semibold" style={{ color: 'var(--s-text-muted)' }}>
              04. DADOS E INGESTÃO OFFLINE
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              
              {/* PostgreSQL 16 */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>PostgreSQL 16</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>Usuários, chats, logs e feedback.</p>
                </div>
              </div>

              {/* clt_chunks */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>clt_chunks</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>Texto, metadados e vector(1024).</p>
                </div>
              </div>

              {/* Ingestão */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>Ingestão</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>CLT, limpeza e chunking.</p>
                </div>
              </div>

              {/* Docker Compose */}
              <div className="relative rounded-lg p-4 border flex flex-col justify-between h-24 transition-all duration-300 hover:scale-[1.02]" 
                   style={{ background: 'rgba(255, 255, 255, 0.02)', borderColor: 'var(--s-glass-border)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--s-text-primary)' }}>Docker Compose</div>
                  <p className="text-[11px] leading-snug mt-1" style={{ color: 'var(--s-text-secondary)' }}>DB, backend e frontend local.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

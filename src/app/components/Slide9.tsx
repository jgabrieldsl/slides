import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Slide9() {
  const data = [
    {
      name: 'Risco de Alucinação',
      'IA Genérica': 85,
      'Sentinella': 0,
    },
    {
      name: 'Rastreabilidade de Fonte',
      'IA Genérica': 10,
      'Sentinella': 100,
    },
    {
      name: 'Custo por Consulta',
      'IA Genérica': 75,
      'Sentinella': 20,
    },
    {
      name: 'Conformidade Jurídica',
      'IA Genérica': 30,
      'Sentinella': 100,
    },
  ];

  return (
    <div className="h-full px-12 py-8 flex flex-col justify-center" style={{ background: '#0b0d12' }}>
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-5xl mb-8 text-center" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          Eficiência e Confiabilidade
        </h1>
        <p className="text-2xl text-center mb-12" style={{ color: 'var(--s-text-secondary)', fontWeight: 300, fontFamily: 'var(--font-heading)' }}>
          Sentinella vs. IA Genérica
        </p>

        <div className="rounded-2xl p-10 mb-8 border animate-fade-in-up" style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <defs>
                <linearGradient id="colorIAGenerica" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f87171" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f87171" stopOpacity={0.15}/>
                </linearGradient>
                <linearGradient id="colorSentinella" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--s-text-primary)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--s-text-primary)" stopOpacity={0.15}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis 
                dataKey="name" 
                height={50} 
                tick={{ fill: 'var(--s-text-secondary)', fontSize: 13, fontFamily: 'var(--font-body)' }} 
                tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <YAxis 
                tick={{ fill: 'var(--s-text-secondary)', fontSize: 13, fontFamily: 'var(--font-body)' }} 
                tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <Tooltip
                cursor={false}
                contentStyle={{ background: '#10131a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#F0EBE1', fontFamily: 'var(--font-body)' }}
                itemStyle={{ color: '#F0EBE1' }}
              />
              <Legend wrapperStyle={{ color: 'rgba(214, 211, 205, 0.82)', fontFamily: 'var(--font-body)' }} />
              <Bar dataKey="IA Genérica" fill="url(#colorIAGenerica)" stroke="#f87171" strokeWidth={1} radius={[6, 6, 0, 0]} />
              <Bar dataKey="Sentinella" fill="url(#colorSentinella)" stroke="var(--s-text-primary)" strokeWidth={1} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 border-l-4 animate-fade-in-up animation-delay-200" style={{ background: 'var(--s-danger-dim)', borderColor: 'var(--s-glass-border)', borderLeftColor: 'var(--s-danger)' }}>
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-danger)' }}>IA Genérica</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--s-danger)' }}>✗</span>
                <span style={{ color: 'var(--s-text-secondary)' }}>Alto risco de alucinação</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--s-danger)' }}>✗</span>
                <span style={{ color: 'var(--s-text-secondary)' }}>Sem fonte rastreável</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--s-danger)' }}>✗</span>
                <span style={{ color: 'var(--s-text-secondary)' }}>Custo alto por API externa</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--s-danger)' }}>✗</span>
                <span style={{ color: 'var(--s-text-secondary)' }}>Baixa conformidade jurídica</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl p-8 border-l-4 animate-fade-in-up animation-delay-350" style={{ background: 'var(--s-success-dim)', borderColor: 'var(--s-glass-border)', borderLeftColor: 'var(--s-success)' }}>
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-success)' }}>Sentinella</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--s-success)' }}>✓</span>
                <span style={{ color: 'var(--s-text-secondary)' }}>0 artigos fictícios</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--s-success)' }}>✓</span>
                <span style={{ color: 'var(--s-text-secondary)' }}>Fonte rastreável em cada resposta</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--s-success)' }}>✓</span>
                <span style={{ color: 'var(--s-text-secondary)' }}>Custo operacional local reduzido</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--s-success)' }}>✓</span>
                <span style={{ color: 'var(--s-text-secondary)' }}>100% conformidade jurídica</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl p-8 text-center animate-fade-in-up animation-delay-500" style={{ background: 'var(--s-accent-warm)', border: '1px solid var(--s-glass-border-strong)' }}>
          <p className="text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-primary)' }}>
            A arquitetura RAG local elimina custos de API por consulta e garante conformidade jurídica.
          </p>
        </div>
      </div>
    </div>
  );
}

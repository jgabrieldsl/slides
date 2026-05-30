import { ImageWithFallback } from './ImageWithFallback';

export default function Slide10() {
  const teamMembers = [
    {
      name: 'Bruno Cruz',
      role: 'Backend',
      image: '/cruz.jpeg',
    },
    {
      name: 'Enzo Garofalo',
      role: 'Backend + IA',
      image: '/enzo.jpeg',
    },
    {
      name: 'Gabriel Campos',
      role: 'Backend + IA',
      image: '/campos.jpeg',
    },
    {
      name: 'João Gabriel',
      role: 'Frontend',
      image: '/perfil.jpeg',
    },
    {
      name: 'Pedro Daou',
      role: 'Frontend',
      image: '/pedro-daou.png',
    },
    {
      name: 'Yuri Cardoso',
      role: 'Frontend',
      image: '/yuri.jpg',
    },
  ];

  return (
    <div className="h-full px-12 py-8 flex flex-col justify-center" style={{ background: 'var(--s-bg-base)', backgroundImage: 'var(--s-bg-gradient)' }}>
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-5xl mb-16 text-center" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          Equipe
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border text-center transition-all hover:scale-[1.02] animate-fade-in-up ${
                index > 0 ? `animation-delay-${index * 100}` : ''
              }`}
              style={{ background: 'var(--s-glass)', borderColor: 'var(--s-glass-border)' }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden" style={{ border: '2px solid var(--s-glass-border-strong)', background: 'var(--s-surface)' }}>
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
              <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--s-text-primary)' }}>{member.name}</h3>
              <p className="text-xl font-light" style={{ color: 'var(--s-text-secondary)' }}>{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

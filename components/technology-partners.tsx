import Image from 'next/image';

export function TechnologyPartners({ language = 'fr' }: { language?: 'fr' | 'en' }) {
  const label = language === 'en' ? 'AI technologies' : 'Technologies IA';

  return (
    <div className="technology-partners" aria-label={label}>
      <p>{label}</p>
      <div className="technology-partner-marks">
        <span>
          <Image src="/brand/partners/openai.svg" alt="" width={28} height={28} />
          <strong>OpenAI</strong>
        </span>
        <span>
          <Image src="/brand/partners/claude.png" alt="" width={28} height={28} />
          <strong>Claude</strong>
        </span>
        <span>
          <Image src="/brand/partners/mistral.svg" alt="" width={28} height={28} />
          <strong>Mistral</strong>
        </span>
      </div>
    </div>
  );
}

interface LogoProps {
  size?: number;
  className?: string;
  /** Affiche le logo dans un cercle doré avec fond */
  circled?: boolean;
}

/**
 * Logo Gaby Coiffure.
 * Dépose ton fichier dans : public/assets/logo/logo.svg
 * (ou logo.png — ajuste alors l'extension ci-dessous)
 */
export default function Logo({ size = 40, className, circled = true }: LogoProps) {
  if (!circled) {
    return (
      <img
        src="/assets/logo/logo.svg"
        alt="Gaby Coiffure"
        className={className}
        style={{ height: size, width: 'auto', display: 'block' }}
      />
    );
  }

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: '50%',
        border: '1.5px solid rgba(212, 175, 55, 0.55)',
        background:
          'radial-gradient(circle at 30% 30%, rgba(212,175,55,0.10), rgba(212,175,55,0.02) 70%, transparent 100%)',
        boxShadow: '0 0 0 1px rgba(212,175,55,0.10), 0 4px 14px rgba(0,0,0,0.35)',
        flexShrink: 0,
        padding: Math.max(4, Math.round(size * 0.14)),
        overflow: 'hidden'
      }}
      aria-label="Gaby Coiffure"
    >
      <img
        src="/assets/logo/logo.png"
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </span>
  );
}
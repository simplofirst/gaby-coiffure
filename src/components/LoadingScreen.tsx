import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`} aria-hidden={hidden}>
      <div className="loader-inner">
        {/* Cercle + logo */}
        <div className="loader-ring">
          {/* Bague dorée qui se dessine */}
          <svg className="loader-ring-svg" viewBox="0 0 120 120" aria-hidden="true">
            <circle
              cx="60"
              cy="60"
              r="56"
              fill="none"
              stroke="url(#ringGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
                <stop offset="50%" stopColor="#e6c976" stopOpacity="1" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logo au centre */}
          <img
            src="/assets/logo/logo.png"
            alt=""
            className="loader-logo"
            aria-hidden="true"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        {/* Wordmark */}
        <div className="loader-wordmark">GABY COIFFURE</div>
      </div>
    </div>
  );
}
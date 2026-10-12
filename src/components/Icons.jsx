import React from 'react';

export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

/* Authentic Official Brand SVG Icons */
export function OriginalInstagramIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id="amcomIgGradient" cx="25%" cy="105%" r="140%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="65%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6.5" fill="url(#amcomIgGradient)" />
      <path
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 3.5H7A3.5 3.5 0 0 0 3.5 7v10A3.5 3.5 0 0 0 7 20.5h10a3.5 3.5 0 0 0 3.5-3.5V7A3.5 3.5 0 0 0 17 3.5z"
      />
      <circle cx="12" cy="12" r="4" stroke="#ffffff" strokeWidth="1.9" fill="none" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="#ffffff" />
    </svg>
  );
}

export function OriginalWhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#ffffff"
        d="M12.04 4.5C7.9 4.5 4.5 7.9 4.5 12.04c0 1.45.42 2.8 1.13 3.97L4.5 20l4.13-1.08c1.13.62 2.43.96 3.41.96 4.14 0 7.54-3.4 7.54-7.54C19.58 7.9 16.18 4.5 12.04 4.5zm4.4 10.66c-.19.52-1.08 1.01-1.49 1.05-.4.04-.88.06-2.58-.64-2.17-.9-3.56-3.11-3.67-3.26-.11-.15-.88-1.16-.88-2.23 0-1.07.56-1.59.77-1.81.19-.21.43-.26.58-.26.15 0 .3 0 .43.02.15.02.34-.06.53.39.19.47.66 1.59.71 1.71.06.11.09.24.02.39-.07.15-.11.24-.22.37-.11.13-.24.28-.34.39-.11.11-.22.24-.09.47.13.22.58.95 1.25 1.55.86.77 1.59 1.01 1.82 1.12.22.11.36.09.49-.06.13-.15.56-.66.71-.88.15-.22.3-.19.51-.11.21.07 1.31.62 1.54.73.22.11.37.17.43.26.06.09.06.56-.13 1.09z"
      />
    </svg>
  );
}

export function OriginalFacebookIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#ffffff"
        d="M15.5 12.3H13.2v7.2h-3v-7.2h-1.8V9.8h1.8V8c0-1.8 1.1-2.9 2.8-2.9.9 0 1.6.08 1.8.1v2.1h-1.2c-.9 0-1.1.4-1.1 1.1v1.5h2.5l-.4 2.5z"
      />
    </svg>
  );
}

export function OriginalGoogleIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}


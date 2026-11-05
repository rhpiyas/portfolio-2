import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function GithubIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="11" className="fill-slate-900 dark:fill-white transition-colors" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        className="fill-white dark:fill-[#181717] transition-colors"
      />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <rect width="22" height="22" x="1" y="1" rx="4.5" fill="#0A66C2" />
      <path
        d="M7.4 9.2H5.1V18h2.3V9.2zM6.25 5.8a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7zM18.9 18h-2.3v-4.4c0-1.2-.4-1.8-1.4-1.8-1.1 0-1.7.7-1.7 1.8V18h-2.3V9.2h2.3v1.2c.4-.7 1.3-1.4 2.6-1.4 1.8 0 2.8 1.1 2.8 3.3V18z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient
          id="ig-radial-gradient"
          cx="30%"
          cy="107%"
          r="150%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="22" height="22" x="1" y="1" rx="5.5" fill="url(#ig-radial-gradient)" />
      <circle cx="12" cy="12" r="4.2" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
      <rect width="14.4" height="14.4" x="4.8" y="4.8" rx="3.6" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
      <circle cx="16.5" cy="7.5" r="1.1" fill="#FFFFFF" />
    </svg>
  );
}

export function GmailIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Official 4-color Google Gmail */}
      <path
        fill="#4285F4"
        d="M1.636 21.002H5.454V11.73L0 7.64v11.726c0 .904.732 1.636 1.636 1.636z"
      />
      <path
        fill="#34A853"
        d="M18.546 21.002h3.818c.904 0 1.636-.732 1.636-1.636V7.64l-5.454 4.09v9.272z"
      />
      <path
        fill="#EA4335"
        d="M18.546 4.727L12 9.545 5.454 4.727V11.73L12 16.636l6.546-4.906V4.727z"
      />
      <path
        fill="#FBBC04"
        d="M5.454 4.727L3.927 3.493C2.309 2.279 0 3.434 0 5.457V7.64l5.454 4.09V4.727z"
      />
      <path
        fill="#C5221F"
        d="M18.546 4.727V11.73l5.454-4.09V5.457c0-2.023-2.309-3.178-3.927-1.964L18.546 4.727z"
      />
    </svg>
  );
}

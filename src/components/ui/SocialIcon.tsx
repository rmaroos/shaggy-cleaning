import React from 'react';

export type SocialNetwork = 'facebook' | 'instagram' | 'linkedin';

const paths: Record<SocialNetwork, string> = {
  facebook: 'M14 8h3V4h-3c-2.8 0-4.5 1.9-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8Z',
  instagram:
  'M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.9-8.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 3.5c-2.3 0-2.6 0-3.5.1-3.1.1-4.8 1.8-4.9 4.9-.1.9-.1 1.2-.1 3.5s0 2.6.1 3.5c.1 3.1 1.8 4.8 4.9 4.9.9.1 1.2.1 3.5.1s2.6 0 3.5-.1c3.1-.1 4.8-1.8 4.9-4.9.1-.9.1-1.2.1-3.5s0-2.6-.1-3.5c-.1-3.1-1.8-4.8-4.9-4.9-.9-.1-1.2-.1-3.5-.1Z',
  linkedin:
  'M6.9 20H3.5V9h3.4v11ZM5.2 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM20.5 20h-3.4v-5.4c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V20H9.9V9h3.2v1.5h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.3V20Z'
};

export function SocialIcon({ network, className }: {network: SocialNetwork;className?: string;}) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={paths[network]} />
    </svg>);

}
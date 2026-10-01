'use client';

import Link from 'next/link';
import { useSyncExternalStore, type ReactNode } from 'react';

const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

function subscribe(onChange: () => void) {
  window.addEventListener('popstate', onChange);
  return () => window.removeEventListener('popstate', onChange);
}

function locationSnapshot() {
  return window.location.pathname + window.location.search;
}

function serverSnapshot() {
  return '';
}

/** Keep campaign context in the link itself, including when opened in a new tab. */
export function LeadLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const currentLocation = useSyncExternalStore(subscribe, locationSnapshot, serverSnapshot);
  const [path, query = ''] = href.split('?');
  const destination = new URLSearchParams(query);
  if (currentLocation) {
    const [currentPath, currentQuery = ''] = currentLocation.split('?');
    const incoming = new URLSearchParams(currentQuery);
    for (const key of campaignKeys) {
      const value = incoming.get(key);
      if (value && !destination.has(key)) destination.set(key, value);
    }
    if (!destination.has('landing')) destination.set('landing', incoming.get('landing') || currentPath);
  }
  const search = destination.toString();
  return <Link href={search ? `${path}?${search}` : path} className={className}>{children}</Link>;
}

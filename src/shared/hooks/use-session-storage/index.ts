'use client';

import { useState, useEffect } from 'react';

export function useSessionStorage(name: string) {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    if (window) {
      setValue(window.sessionStorage.getItem(name));
    }
  }, [name]);

  return value;
}

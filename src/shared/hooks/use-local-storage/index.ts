'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage(name: string) {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    if (window) {
      setValue(window.localStorage.getItem(name));
    }
  }, [name]);

  return value;
}

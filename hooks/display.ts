import { useEffect, useState } from 'react';

const THRESHOLDS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

type MediaQueryName = 'smAndDown' | 'smAndUp' | 'mdAndUp' | 'lgAndUp' | 'xlAndUp';

export function useDisplay() {
  const [state, setState] = useState<Record<MediaQueryName, boolean>>({
    smAndDown: false,
    smAndUp: false,
    mdAndUp: false,
    lgAndUp: false,
    xlAndUp: false,
  });

  useEffect(() => {
    const mediaQueries: { name: MediaQueryName; query: string }[] = [
      { name: 'smAndDown', query: `(max-width: ${THRESHOLDS.md - 1}px)` },
      { name: 'smAndUp', query: `(min-width: ${THRESHOLDS.sm}px)` },
      { name: 'mdAndUp', query: `(min-width: ${THRESHOLDS.md}px)` },
      { name: 'lgAndUp', query: `(min-width: ${THRESHOLDS.lg}px)` },
      { name: 'xlAndUp', query: `(min-width: ${THRESHOLDS.xl}px)` },
    ];

    const listeners: (() => void)[] = [];

    mediaQueries.forEach(({ name, query }) => {
      const mql = window.matchMedia(query);

      const updateState = () =>
        setState((prev) => ({ ...prev, [name]: mql.matches }));

      // Set initial value
      updateState();

      // Add listener
      mql.addEventListener('change', updateState);
      listeners.push(() => mql.removeEventListener('change', updateState));
    });

    return () => {
      listeners.forEach((cleanup) => cleanup());
    };
  }, []);

  return state;
}

import { useCallback, useEffect, useRef } from 'react';

export const useDismissListener = <T extends HTMLElement>(onDismiss: () => void) => {
  const ref = useRef<T>(null);

  const escapeListener = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onDismiss();
      }
    },
    [onDismiss],
  );

  const clickListener = useCallback(
    (event: MouseEvent) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        event.stopPropagation();
        onDismiss();
      }
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener('click', clickListener, true);
    document.addEventListener('keyup', escapeListener, true);
    return () => {
      document.removeEventListener('click', clickListener, true);
      document.removeEventListener('keyup', escapeListener, true);
    };
  }, [clickListener, escapeListener]);

  return ref;
};

import { createContext, ReactNode } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  return <ToastContext.Provider value={null}>{children}</ToastContext.Provider>;
}

export function useToast() {
  return { showToast: () => {}, removeToast: () => {} };
}

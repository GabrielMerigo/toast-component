import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const value = React.useMemo(() => {
    return { toasts, setToasts };
  }, [toasts]);

  const handleEsc = () => {
    setToasts([]);
  };

  useEscapeKey(handleEsc);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;

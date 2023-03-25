import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  function onClick(id) {
    const toastsFiltered = toasts.filter((toast) => toast.id !== id);
    setToasts(toastsFiltered);
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper}>
          <Toast
            key={toast.id}
            onClick={() => onClick(toast.id)}
            variant={toast.variant}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

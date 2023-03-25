import React, { useState } from "react";

import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { toasts, setToasts } = React.useContext(ToastContext);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  return (
    <div
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              id="message"
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map((option) => {
            const id = `variant-${option}`;

            return (
              <div
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                key={option}
              >
                <label key={id} htmlFor={id}>
                  <input
                    type="radio"
                    name="variant"
                    id={id}
                    value={option}
                    checked={variant === option}
                    onClick={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                  {option}
                </label>
              </div>
            );
          })}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              aria-label="Dismiss message"
              aria-live="off"
              onClick={() =>
                setToasts([...toasts, { message, variant, id: Date.now() }])
              }
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;

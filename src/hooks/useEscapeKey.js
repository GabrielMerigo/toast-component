import React from "react";

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        callback();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
};

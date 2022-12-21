import React, { memo, useState, useEffect } from "react";
import { useKeyboardEvents } from "@kundinos/react-hooks";

function Counter() {
  const [message, setMessage] = useState("Нажимайте на клавиши");

  useKeyboardEvents({
    onArrowDown: () => {
      setMessage("Нажали стрелочку вниз");
    },
    onArrowUp: () => {
      setMessage("Нажали стрелочку вверх");
    },
    onArrowLeft: () => {
      setMessage("Нажали стрелочку влево");
    },
    onArrowRight: () => {
      setMessage("Нажали стрелочку вправо");
    },
    onEscape: () => {
      setMessage("Нажали Escape");
    },
  });

  useEffect(() => {
    const id = setTimeout(() => {
      setMessage("Нажимайте на клавиши");
    }, 2000);

    return () => clearTimeout(id);
  }, [message]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 40px",
      }}
    >
      <span>{message}</span>
    </div>
  );
}

export default memo(Counter);

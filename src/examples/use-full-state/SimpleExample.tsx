import React, { memo } from "react";
import { useFullState } from "@kundinos/react-hooks";

function Counter() {
  const [count, setCount, prevCount] = useFullState(0);

  return (
    <div>
      Текущее: {count}, предыдущее: {String(prevCount)}
      <div style={{ display: "flex", columnGap: "10px", marginTop: "10px" }}>
        <button onClick={() => setCount((p) => p - 1)}>-</button>
        <button onClick={() => setCount((p) => p + 1)}>+</button>
      </div>
    </div>
  );
}

export default memo(Counter);

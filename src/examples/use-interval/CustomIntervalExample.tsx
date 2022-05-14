import React, { memo, useState } from "react";
import { useInterval } from "@kundinos/react-hooks";
import BrowserOnly from "@docusaurus/BrowserOnly";

function Example() {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);
  const [inputDelay, setInputDelay] = useState(1000);

  useInterval(
    () => {
      setCounter((prev) => prev + 1);
    },
    // Если вместо задержки указать null, то интервал будет поставлен на паузу
    pause ? null : inputDelay
  );

  return (
    <div>
      <div style={{ display: "flex", columnGap: "20px" }}>
        <input
          type="number"
          value={inputDelay}
          onChange={(e) => setInputDelay(+e.currentTarget.value)}
        />
        <button onClick={() => setPause((prev) => !prev)}>
          {pause ? "Продолжить" : "Поставить на паузу"}
        </button>
      </div>
      <div>{`Счетчик: ${counter}`}</div>
    </div>
  );
}

function Wrapper() {
  return <BrowserOnly>{() => <Example />}</BrowserOnly>;
}

export default memo(Wrapper);

import React, { memo, useState } from "react";
import { useIdle, useInterval } from "@kundinos/react-hooks";
import BrowserOnly from "@docusaurus/BrowserOnly";

function CustomTimeExample() {
  const [time, setTime] = useState(0);
  const isIdle = useIdle({ timeout: 11 * 1000, onWakeUp: () => setTime(0) });
  const delay = isIdle ? null : 1000;

  useInterval(() => {
    setTime((prev) => prev + 1);
  }, delay);

  return <div>{`Пользователь ${isIdle ? "бездействует" : `активен ${time} секунд`}`}</div>;
}

function Wrapper() {
  return <BrowserOnly>{() => <CustomTimeExample />}</BrowserOnly>;
}

export default memo(Wrapper);

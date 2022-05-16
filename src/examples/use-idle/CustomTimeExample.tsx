import React, { memo, useEffect, useMemo, useState } from "react";
import { useIdle, useInterval } from "@kundinos/react-hooks";
import BrowserOnly from "@docusaurus/BrowserOnly";

function CustomTimeExample() {
  const [time, setTime] = useState(0);
  const isIdle = useIdle({ timeout: 10 * 1000 });
  const delay = isIdle ? null : 1000;

  const text = useMemo(() => {
    if (isIdle) return "Пользователь бездействует!";
    if (time < 2) return "Пользователь активен!";

    return `Никаких действий уже ${time} секунд…`;
  }, [isIdle, time]);

  useInterval(() => {
    setTime((prev) => prev + 1);
  }, delay);

  useEffect(() => {
    const eventNames = ["visibilitychange", "click", "keydown", "mousemove", "scroll"];
    const resetTime = () => setTime(0);

    eventNames.map((eventName) => {
      document.addEventListener(eventName, resetTime);
    });

    return () => {
      eventNames.map((eventName) => {
        document.removeEventListener(eventName, resetTime);
      });
    };
  });

  return <div>{text}</div>;
}

function Wrapper() {
  return <BrowserOnly>{() => <CustomTimeExample />}</BrowserOnly>;
}

export default memo(Wrapper);

import React, { memo } from "react";
import { useIdle } from "@kundinos/react-hooks";
import BrowserOnly from "@docusaurus/BrowserOnly";

function EventsExample() {
  useIdle({
    onWakeUp: () => console.log("Пользователь проснулся!"),
    onIdle: () => console.log("Пользователь бездействует…"),
  });

  return <div>Откройте консоль, чтобы увидеть результат :)</div>;
}

function Wrapper() {
  return <BrowserOnly>{() => <EventsExample />}</BrowserOnly>;
}

export default memo(Wrapper);

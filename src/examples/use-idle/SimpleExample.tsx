import React, { memo } from "react";
import { useIdle } from "@kundinos/react-hooks";
import BrowserOnly from "@docusaurus/BrowserOnly";

function Example() {
  const isIdle = useIdle();

  return <div>{`Пользователь ${isIdle ? "бездействует" : "активен"}`}</div>;
}

function Wrapper() {
  return <BrowserOnly>{() => <Example />}</BrowserOnly>;
}

export default memo(Wrapper);

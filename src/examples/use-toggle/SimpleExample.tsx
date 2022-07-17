import React, { memo } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useToggle } from "@kundinos/react-hooks";

function Example() {
  const [on, toggle] = useToggle(false); // Можно задавать начальное состояние

  return (
    <>
      <div>{`Тёмная тема ${on ? "включена" : "выключена"}!`}</div>
      <button onClick={toggle}>Переключить</button>
    </>
  );
}

function Wrapper() {
  return <BrowserOnly>{() => <Example />}</BrowserOnly>;
}

export default memo(Wrapper);

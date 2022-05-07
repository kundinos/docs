import React, { memo, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useDocumentEvent } from "@kundinos/react-hooks";

function Example() {
  const [count, setCount] = useState(0);

  useDocumentEvent("contextmenu", () => {
    setCount((prev) => prev + 1);
  });

  return <div>{`Меню было открыто ${count} раз`}</div>;
}

function Wrapper() {
  return <BrowserOnly>{() => <Example />}</BrowserOnly>;
}

export default memo(Wrapper);

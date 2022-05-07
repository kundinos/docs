import React, { useState, memo } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useResize } from "@kundinos/react-hooks";

import plural from "@site/src/utils/plural";

function Example() {
  const [count, setCount] = useState(0);

  useResize(() => {
    setCount((prev) => prev + 1);
  });

  return <div>{`Размеры изменились ${count} ${plural(count, ["раз", "раза", "раз"])}`}</div>;
}

function Wrapper() {
  return <BrowserOnly>{() => <Example />}</BrowserOnly>;
}

export default memo(Wrapper);

import React, { memo, useState } from "react";
import { useDocumentEvent } from "@kundinos/react-hooks";

function Example() {
  const [count, setCount] = useState(0);

  useDocumentEvent("contextmenu", () => {
    setCount((prev) => prev + 1);
  });

  return <div>{`Меню было открыто ${count} раз`}</div>;
}

export default memo(Example);

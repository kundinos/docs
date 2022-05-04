import React, { useState, memo } from "react";
import { useResize } from "@kundinos/react-hooks";

import plural from "@site/src/utils/plural";

function Example() {
  const [count, setCount] = useState(0);

  useResize(() => {
    setCount((prev) => prev + 1);
  });

  return <div>{`Размеры изменились ${count} ${plural(count, ["раз", "раза", "раз"])}`}</div>;
}

export default memo(Example);

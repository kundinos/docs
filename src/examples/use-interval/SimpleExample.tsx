import React, { memo, useState } from "react";
import { useInterval } from "@kundinos/react-hooks";
import BrowserOnly from "@docusaurus/BrowserOnly";

function Example() {
  const [seconds, setSeconds] = useState(0);

  useInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);

  return <div>{`Эта страница открыта ${seconds} секунд назад`}</div>;
}

function Wrapper() {
  return <BrowserOnly>{() => <Example />}</BrowserOnly>;
}

export default memo(Wrapper);

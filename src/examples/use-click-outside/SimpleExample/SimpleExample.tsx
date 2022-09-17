import React, { memo, useState } from "react";
import { useClickOutside } from "@kundinos/react-hooks";

import styles from "./SimpleExample.module.css";

function SimpleExample() {
  const [opened, setOpened] = useState(true);

  const ref = useClickOutside<HTMLDivElement>({
    disabled: !opened,
    handleEvent: () => {
      setOpened(false);
    },
  });

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setOpened(true)}>
        Открыть подсказку
      </button>

      {opened && (
        <div ref={ref} className={styles.popup}>
          Этот попап можно закрыть, если кликнуть на любую часть страницы за его пределами
        </div>
      )}
    </div>
  );
}

export default memo(SimpleExample);

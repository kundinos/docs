import React, { memo } from "react";
import { useClickOutside, useToggle } from "@kundinos/react-hooks";

import styles from "./ComboExample.module.css";

function ComboExample() {
  const [opened, toggle] = useToggle(true);

  const ref = useClickOutside<HTMLDivElement>({
    disabled: !opened,
    handleEvent: toggle,
  });

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggle}>
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

export default memo(ComboExample);

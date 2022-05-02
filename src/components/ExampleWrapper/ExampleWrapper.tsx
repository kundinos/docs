import React, { FC, memo, ReactElement } from "react";
import styles from "./ExampleWrapper.module.css";

export interface ExampleWrapperProps {
  title?: string;
  children: ReactElement;
}

const ExampleWrapper: FC<ExampleWrapperProps> = (props) => {
  const { title = "Результат", children } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default memo(ExampleWrapper);

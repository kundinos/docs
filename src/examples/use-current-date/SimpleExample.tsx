import React, { memo } from "react";
import { useCurrentDate } from "@kundinos/react-hooks";

function SimpleExample() {
  const currentDate = useCurrentDate();

  // Получаем компоненты текущей даты
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const fullYear = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  return (
    <div>
      <p style={{ marginBottom: "10px" }}>
        {`Текущая дата: `}
        <strong>{`${month}.${date}.${fullYear}`}</strong>
      </p>

      <p style={{ marginBottom: "0" }}>
        {`Текущее время: `}
        <strong>{`${hours}:${minutes}:${seconds}`}</strong>
      </p>
    </div>
  );
}

export default memo(SimpleExample);

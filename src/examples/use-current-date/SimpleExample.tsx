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
      <p>{`Текущая дата: ${month}.${date}.${fullYear}`}</p>
      <p>{`Текущее время: ${hours}:${minutes}:${seconds}`}</p>
    </div>
  );
}

export default memo(SimpleExample);

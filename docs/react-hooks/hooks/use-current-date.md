---
sidebar_position: 1
---

import ExampleWrapper from '@site/src/components/ExampleWrapper';
import SimpleExample from '@site/src/examples/use-current-date/SimpleExample.tsx';

# useCurrentDate

Используется для получения реактивного значения текущей даты и времени, что может быть полезно при создании календарей, таймеров обратного отсчета и любого другого вывода даты/времени, который должен обновляться.

## Поведение по умолчанию

По умолчанию обновляет своё значение каждую секунду и вызывает повторный рендер компонента.

```tsx
import { useCurrentDate } from "@kundinos/react-hooks";

function Example() {
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
```

<ExampleWrapper><SimpleExample /></ExampleWrapper>

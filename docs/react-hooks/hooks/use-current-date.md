---
sidebar_position: 1
---

import ExampleWrapper from '@site/src/components/ExampleWrapper';
import SimpleExample from '@site/src/examples/use-current-date/SimpleExample.tsx';
import ManyPeriodsExample from '@site/src/examples/use-current-date/ManyPeriodsExample.tsx';

# useCurrentDate

Используется для получения реактивного значения текущей даты и времени, что может быть полезно при создании календарей, таймеров обратного отсчета и любого другого вывода даты/времени, который должен автоматически обновляться.

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

## Период обновления даты

В зависимости от потребностей может возникнуть ситуация, когда не требуется обновлять дату слишком часто, например, будет достаточно обновлять значение раз в минуту, вместо того, чтобы делать это каждую секунду. И этого поведения можно легко добиться, передав в хук параметр `every`, который может принимать одно из следующих значений `millisecond`, `second`, `minute`, `hour`, `day` или произвольное число миллисекунд.

```tsx
// Будет обновляться каждые 5 секунд
const currentDate = useCurrentDate({ every: 5 * 1000 });

// Будет обновляться каждый час
const currentDate = useCurrentDate({ every: "hour" });
```

<ExampleWrapper title='Пример работы'><ManyPeriodsExample /></ExampleWrapper>

---
sidebar_position: 3
---

# Мотивация

Разработчики современных веб-сайтов всё больше учитывают пожелания конкретного пользователя, подгоняя сайт не только под ширину устройства, но и под персональные настройки.
Например, сайт может поддерживать светлую и темную темы отображения и подбирать необходимую индивидуально под каждого человека. Других пользователей могут раздражать анимации на сайте и они хотели бы чтобы сайт не использовал их.

Всего этого можно добиться с помощью метода `window.matchMedia` (реализован во всех популярных браузерах) и библиотека `@kundinos/mock-media-queries` поможет упростить тестирование этого кода.

# Установка

```bash
npm install @kundinos/mock-media-queries
```

# Пример использования

```ts
import { act, renderHook } from "@testing-library/react-hooks/server";
import { usePrefersColorScheme } from "@kundinos/react-hooks";
import * as MockMediaQueries from "@kundinos/mock-media-queries";

beforeEach(() => {
  MockMediaQueries.cleanup();
  MockMediaQueries.startMock();
});

test("Should return prefers colors scheme when she is changing", () => {
  const { result, hydrate, rerender } = renderHook(() => usePrefersColorScheme());

  hydrate();
  rerender();

  // User changed the color scheme to dark
  act(() => {
    MockMediaQueries.fireEvent({ media: "(prefers-color-scheme: dark)", matches: true });
  });

  expect(result.current.theme).toBe("dark");
  expect(result.current.isDark).toBeTruthy();
  expect(result.current.isLight).toBeFalsy();

  // User return back the color scheme to light
  act(() => {
    MockMediaQueries.fireEvent({ media: "(prefers-color-scheme: dark)", matches: false });
  });

  expect(result.current.theme).toBe("light");
  expect(result.current.isDark).toBeFalsy();
  expect(result.current.isLight).toBeTruthy();
});
```

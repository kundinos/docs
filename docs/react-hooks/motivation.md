---
sidebar_position: 1
---

# Мотивация

Хуки&nbsp;&mdash; нововведение в&nbsp;React&nbsp;16.8, которое позволяет использовать
состояние и&nbsp;другие возможности React без написания классов, решая множество
разноплановых проблем. Более подробно о&nbsp;плюсах использования хуков можно прочесть
на&nbsp;официальном сайте в&nbsp;разделе &laquo;[Мотивация](https://ru.reactjs.org/docs/hooks-intro.html#motivation)&raquo;

Из&nbsp;коробки React уже имеет несколько прекрасных базовых хуков, а&nbsp;также позволяет
создавать собственные хуки для решения необходимых задач. Именно этой возможностью
я&nbsp;воспользовался и&nbsp;написал несколько своих хуков, которые уже облегчили мне
работу с&nbsp;React&nbsp;и, я&nbsp;уверен, будут полезны и&nbsp;вам.

## Установка

```bash
npm install @kundinos/react-hooks
```

## Список хуков

- [useClickOutside](./hooks/use-click-outside.mdx) — позволяет подписаться на событие клика за пределами указанного компонента;
- [useCurrentDate](./hooks/use-current-date) - реактивный доступ к текущей дате и времени;
- [useDocumentEvent](./hooks/use-document-event) - упрощает подписку на события `document`;
- [useFullState](./hooks/use-full-state) — для доступа к предыдущему значению стейта;
- [useIdle](./hooks/use-idle) – помогает определить когда пользователь ничего не делает;
- [useInterval](./hooks/use-interval) — деклатиративная версия setInterval;
- [useKeyboardEvents](./hooks/use-keyboard-events) — подписка на события клавиатуры;
- [useMediaQueries](./hooks/use-media-queries.mdx) — упрощает использование нескольких media queries в React;
- [useMediaQuery](./hooks/use-media-query.mdx) - упрощает работу с одним media query в React;
- [useNativeEvent](./hooks/use-native-event) — помогает подписаться на событие любого HTML-элемента;
- [usePrefers](./hooks/use-prefers) - возвращает предпочитаемые пользователем настройки (цветовая схема, язык и т.д.);
- [usePrefersColorScheme](./hooks/use-prefers-color-scheme.mdx) - возвращает предпочтимаемую пользователем цветовую схему;
- [usePrefersLanguages](./hooks/use-prefers-languages.mdx) - возвращает предпочтимаемые пользователем языки;
- [usePrefersReducedMotion](./hooks/use-prefers-reduced-motion.mdx) - возвращает информацию о том, предпочтитает ли пользователь анимацию на сайте;
- [useWindowResize](./hooks/use-window-resize) — подписываемся на событие изменения размера страницы;
- [useScroll](./hooks/use-scroll) – реактивный доступ к позиции скрола;
- [useTimeout](./hooks/use-timeout) — деклатиративная версия setTimeout;
- [useToggle](./hooks/use-toggle) — упрощает создание компонентов с состояниями включен/выключен;
- [useWindowEvent](./hooks/use-window-event) — подписываемся на события `window`;
- [useWindowResize](./hooks/use-window-resize) — упрощает подписку на событие изменения размеров окна;

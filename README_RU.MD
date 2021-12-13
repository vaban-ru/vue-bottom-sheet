# Vue Bottom Sheet

Компонент выезжающей снизу панели material-like, так же поддерживает жест смахивания вниз

![Размер](https://img.shields.io/bundlephobia/minzip/@webzlodimir/vue-bottom-sheet)
![Загрузки](https://img.shields.io/npm/dt/@webzlodimir/vue-bottom-sheet)
![Версия](https://img.shields.io/npm/v/@webzlodimir/vue-bottom-sheet)

- :clapper: [ДЕМО](https://webzlodimir.github.io/vue-bottom-sheet-demo/)
- :open_book: [Documentation in english](https://github.com/webzlodimir/vue-bottom-sheet/blob/master/README.MD)

## Установка

### NPM

`npm install --save @webzlodimir/vue-bottom-sheet`

### Yarn

`yarn add @webzlodimir/vue-bottom-sheet`

## Использование

```vue
<template>
  <vue-bottom-sheet ref="myBottomSheet">
    <h1>Lorem Ipsum</h1>
    <h2>What is Lorem Ipsum?</h2>
    <p>
      <strong>Lorem Ipsum</strong> is simply dummy text
    </p>
  </vue-bottom-sheet>
</template>

<script>
import  VueBottomSheet from "@webzlodimir/vue-bottom-sheet";

export default {
  components: {
    VueBottomSheet
  },
  methods: {
    open() {
      this.$refs.myBottomSheet.open();
    },
    close() {
      this.$refs.myBottomSheet.close();
    }
  }
}
</script>
```

Либо для использования по всему проекту добавить в main.js
```js
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import Vue from "vue";

Vue.use(VueBottomSheet);
```

## Настройки

| Свойство  | Тип | Описание | Пример |
| ------------- | ------------- | ------------- | ------------- |
| overlay  | Boolean  | Убирает затемнение  | `:overlay="false"` |
| click-to-close  | Boolean  | Клик вне карточки закрывает компонент  | `:click-to-close="false"` |
| max-width  | String  | Устанавливает максимальную ширину карточки компонента  | `max-width="640px"` |
| max-height  | String  | Устанавливает максимальную высоту карточки компонента  | `max-height="90%"` |
| effect  | String  | Устанавливает эффект появление карточки компонента  | `effect="fx-fadein-scale"` |
| rounded  | Boolean  | Включает скругление 2 верхних углов компонента  | `:rounded="false"` |
| is-full-screen  | Boolean  | Включает и выключает полноэкранный режим  | `:is-full-screen="true"` |
| swipe-able  | Boolean  | Включает и выключает возможность закрытия окна свайпом | `:swipe-able="false"` |
| overlay-color  | String  | Задаёт цвет оверлея | `:overlay-color="#0000004D"` |

## События

| Событие  | Описание | Пример |
| ------------- | ------------- | ------------- |
| opened  | Срабатывает при открытии компонента  | @opened="" |
| closed  | Срабатывает при закрытии компонента  | @closed="" |


### Список эффектов

- fx-default
- fx-fadein-scale
- fx-slide-from-right
- fx-slide-from-left

Вы можете посмотреть все эффекты на [демо странице](https://webzlodimir.github.io/vue-bottom-sheet-demo/)

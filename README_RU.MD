![Size](https://img.shields.io/bundlephobia/minzip/@webzlodimir/vue-bottom-sheet)
![Downloads](https://img.shields.io/npm/dw/@webzlodimir/vue-bottom-sheet)
![Version](https://img.shields.io/npm/v/@webzlodimir/vue-bottom-sheet)
# Vue Bottom Sheet

[ДЕМО](https://webzlodimir.github.io/vue-bottom-sheet-demo/)

[Documentation in english](https://github.com/webzlodimir/vue-bottom-sheet/blob/master/README.MD)


Компонент выезжающей снизу панели material-like, так же поддерживает жест смахивания вниз

![Пример работы компонента](https://anyprinter.ru/example.gif)

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
      <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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

`:overlay="false"` - убирает затемнение за компонентом

`"max-width="640"` - устанавливает максимальную ширину карточки компонента

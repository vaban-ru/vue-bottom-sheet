![Example](https://bs.vaban.ru/logo.jpg)

# Vue Bottom Sheet 
![Size](https://img.shields.io/bundlephobia/minzip/@webzlodimir/vue-bottom-sheet)
![Downloads](https://img.shields.io/npm/dt/@webzlodimir/vue-bottom-sheet)
![Version](https://img.shields.io/npm/v/@webzlodimir/vue-bottom-sheet)

A nice clean and touch-friendly bottom sheet component based on [Vue.js](https://vuejs.org/) and [hammer.js](https://hammerjs.github.io/) for Vue 3

 - :clapper: [Demo](https://bs.vaban.ru/)

## Installation

### NPM

```
npm install @webzlodimir/vue-bottom-sheet
```

### Yarn

```
yarn add @webzlodimir/vue-bottom-sheet
```

## Usage

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

<script setup>
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import  "@webzlodimir/vue-bottom-sheet/dist/style.css";
import { ref } from "vue";

const myBottomSheet = ref(null)

const open = () => {
  myBottomSheet.value.open();
}

const close = () => {
  myBottomSheet.value.close();
}
</script>
```
## Props

| Prop                | Type    | Description                                                                           | Example                        | Defaults  |
|---------------------|---------|---------------------------------------------------------------------------------------|--------------------------------|-----------|
| max-width           | Number  | Set max-width of component card in px                                                 | `:max-width="640"`             | 640       |
| max-height          | Number  | Sets the maximum height of the window, if not set it takes the height of the content  | `:max-height="90"`             | -         |
| can-swipe           | Boolean | Enable or disable swipe to close                                                      | `:can-swipe="false"`           | true      |
| overlay             | Boolean | Enable overlay                                                                        | `:overlay="false"`             | true      |
| overlay-color       | String  | Set overlay color with opacity                                                        | `overlay-color="#0000004D"`    | #0000004D |
| overlay-click-close | Boolean | Close window on overlay click                                                         | `:overlay-click-close="false"` | true      |
| transition-duration | Number  | Transition animation duration                                                         | `:transition-duration="0.5"`   | 0.5       |

## Events

| Event         | Description                               | Example               |
|---------------|-------------------------------------------|-----------------------|
| opened        | Fire when card component is opened        | @opened=""            |
| closed        | Fire when card component is closed        | @closed=""            |
| dragging-up   | Fire while card component dragging up     | @dragging-up=""       |
| dragging-down | Fire while card component dragging down   | @dragging-down=""     |


## Slots

And you can use named slots as usual:

```vue
<template>
  <vue-bottom-sheet ref="myBottomSheet">
    <template #header>
      <h1>Lorem Ipsum</h1>
    </template>
    <template #default>
      <h2>What is Lorem Ipsum?</h2>
    </template>
    <template #footer>
      <p>
        <strong>Lorem Ipsum</strong> is simply dummy text
      </p>
    </template>
  </vue-bottom-sheet>
</template>
```

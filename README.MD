

# Nuxt Bottom Sheet 
![Size](https://img.shields.io/bundlephobia/minzip/@antonosipov/vue-bottom-sheet)
![Downloads](https://img.shields.io/npm/dt/@antonosipov/vue-bottom-sheet)
![Version](https://img.shields.io/npm/v/@antonosipov/vue-bottom-sheet)

A nice clean and touch-friendly bottom sheet component based on [Vue.js](https://vuejs.org/) and [Hammer.js](https://hammerjs.github.io/) for Nuxt 3

## Installation

### NPM

```
npm install @antonosipov/vue-bottom-sheet
```

### Yarn

```
yarn add @antonosipov/vue-bottom-sheet
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
import { VueBottomSheet } from "@webzlodimir/vue-bottom-sheet";
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

| Prop                  | Type       | Description                                                    | Example                         |
|-----------------------|------------|----------------------------------------------------------------|---------------------------------|
| overlay               | Boolean    | Remove back overlay                                            |  `:overlay="false"`             |
| click-to-close        | Boolean    | Click outside card to close                                    | `:click-to-close="false"`       |
| max-width             | String     | Set max-width of component card                                | `max-width="640px"`             |
| max-height            | String     | Set max-height of component card                               | `max-height="90%"`              |
| effect                | String     | Set effect for component card                                  | `effect="fx-fadein-scale"`      |
| rounded               | Boolean    | Round the top two corners of the sheet                         | `:rounded="false"`              |
| is-full-screen        | Boolean    | Enable or disable full-screen mode                             | `:is-full-screen="true"`        |
| swipe-able            | Boolean    | Enable or disable swipe to close                               | `:swipe-able="false"`           |
| overlay-color         | String     | Set overlay color with opacity                                 | `:overlay-color="#0000004D"`    |
| background-scrollable | Boolean    | Enable scroll                                                  | `:background-scrollable="true"` |
| background-clickable  | Boolean    | Enable background click, doesn't work if `click-to-close=true` | `:background-clickable="true"`  |

## Events

| Event    | Description                          | Example      |
|----------|--------------------------------------|--------------|
| opened   | Fire when card component is opened   | @opened=""   |
| closed   | Fire when card component is closed   | @closed=""   |

### List of effects

- fx-default
- fx-fadein-scale
- fx-slide-from-right
- fx-slide-from-left

You can see all the effects on the [demo page](https://vaban-ru.github.io/vue-bottom-sheet-demo/)

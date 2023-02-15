![Example](https://anyprinter.ru/logo.jpg)

# Vue Bottom Sheet 
![Size](https://img.shields.io/bundlephobia/minzip/@webzlodimir/vue-bottom-sheet)
![Downloads](https://img.shields.io/npm/dt/@webzlodimir/vue-bottom-sheet)
![Version](https://img.shields.io/npm/v/@webzlodimir/vue-bottom-sheet)

A nice clean and touch-friendly bottom sheet component based on [Vue.js](https://vuejs.org/) and [Hammer.js](https://hammerjs.github.io/)

 - :clapper: [Demo](https://webzlodimir.github.io/vue-bottom-sheet-demo/)
 - :open_book: [Документация на русском](https://github.com/webzlodimir/vue-bottom-sheet/blob/master/README_RU.MD)

## Installation

### NPM

`npm install --save @webzlodimir/vue-bottom-sheet`

### Yarn

`yarn add @webzlodimir/vue-bottom-sheet`

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

Or add to main.js for use throughout the project
```js
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import Vue from "vue";

Vue.use(VueBottomSheet);
```

## Props

| Prop  | Type | Description | Example |
| ------------- | ------------- | ------------- | ------------- |
| overlay  | Boolean  | Remove back overlay  | `:overlay="false"` |
| click-to-close  | Boolean  | Click outside card to close  | `:click-to-close="false"` |
| max-width  | String  | Set max-width of component card  | `max-width="640px"` |
| max-height  | String  | Set max-height of component card  | `max-height="90%"` |
| effect  | String  | Set effect for component card  | `effect="fx-fadein-scale"` |
| rounded  | Boolean  | Round the top two corners of the sheet  | `:rounded="false"` |
| is-full-screen  | Boolean  | Enable or disable full-screen mode  | `:is-full-screen="true"` |
| swipe-able  | Boolean  | Enable or disable swipe to close | `:swipe-able="false"` |
| content-swipe-able  | Boolean  | Enable or disable content swipe to close | `:content-swipe-able="false"` |
| overlay-color  | Boolean  | Set overlay color with opacity | `:overlay-color="#0000004D"` |
| background-scrollable  | Boolean  | Enable scroll | `:background-scrollable="true"` |
| background-clickable  | Boolean  | Enable background click, doesn't work if `click-to-close=true` | `:background-clickable="true"` |

## Events

| Event  | Description | Example |
| ------------- | ------------- | ------------- |
| opened  | Fire when card component is opened  | @opened="" |
| closed  | Fire when card component is closed  | @closed="" |

### List of effects

- fx-default
- fx-fadein-scale
- fx-slide-from-right
- fx-slide-from-left

You can see all the effects on the [demo page](https://webzlodimir.github.io/vue-bottom-sheet-demo/)

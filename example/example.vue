<template>
  <div>
    <div class="container">
      <h1>Vue Bottom Sheet</h1>
      <button type="button" @click="open">Open</button>
      <vue-bottom-sheet ref="myBottomSheet">
        <div class="sheet-content">
          <h1>Lorem Ipsum</h1>
          <h2>What is Lorem Ipsum?</h2>
        </div>
      </vue-bottom-sheet>
    </div>
  </div>
</template>

<script>
import VueBottomSheet from '../src';

export default {
  components: {
    VueBottomSheet
  },
  methods: {
    open() {
      this.$refs.myBottomSheet.open(true)
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  padding: 20px;
}

.container {
  max-width: 1170px;
  margin: 0 auto;
}

h1, h2, h3 {
  margin-bottom: 15px;
}

.sheet-content {
  padding: 20px;
}

p {
  line-height: 1.3;
}

p + h2 {
  margin-top: 15px;
}
</style>

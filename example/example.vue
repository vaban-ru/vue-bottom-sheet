<template>
  <div>
    <div class="container">
      <h1><a href="https://github.com/webzlodimir/vue-bottom-sheet/tree/master">Vue Bottom Sheet</a></h1>
      <p class="mb-5">
        Компонент выезжающей снизу панели material-like, так же поддерживает жест смахивания вниз
      </p>
      <button class="btn" type="button" @click="open">Открыть</button>
      <vue-bottom-sheet ref="myBottomSheet">
        <div class="sheet-content">
          <h1>Lorem Ipsum</h1>
          <h2>What is Lorem Ipsum?</h2>
          <h1>Lorem Ipsum</h1>
          <h2>What is Lorem Ipsum?</h2>
          <h1>Lorem Ipsum</h1>
          <h2>What is Lorem Ipsum?</h2>
          <h1>Lorem Ipsum</h1>
          <h2>What is Lorem Ipsum?</h2>
          <h1>Lorem Ipsum</h1>
          <h2>What is Lorem Ipsum?</h2>
          <h1>Lorem Ipsum</h1>
          <h2>What is Lorem Ipsum?</h2>
          <h1>Lorem Ipsum</h1>
          <h2>What is Lorem Ipsum?</h2>
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
  outline: none;
}

.mb-5 {
  margin-bottom: 30px;
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

h1 a {
  color: #000;
  text-decoration: underline;
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

.btn {
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  display: block;
  width: 100%;
}
</style>

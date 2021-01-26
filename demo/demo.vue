<template>
  <div>
    <div class="container pt-5 pb-5">
      <h1>
        Vue Bottom Sheet
      </h1>
      <p>
        A swipeable bottom sheet component for
        <a target="_blank" href="https://vuejs.org/">Vue.js</a> created with
        <a target="_blank" href="https://hammerjs.github.io/">Hammer.js</a>
      </p>
      <h3 class="mb-3">Settings</h3>

      <div class="row">
        <div class="col-4">
          <div class="form-check form-switch mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              v-model="overlay"
              checked
            />
            <label class="form-check-label" for="flexSwitchCheckChecked"
              >Overlay</label
            >
          </div>
          <div class="form-group mb-3">
            <label for="maxWidthInput" class="form-label">Max width:</label>
            <input
              name="maxWidthInput"
              id="maxWidthInput"
              v-model="maxWidth"
              type="text"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <button class="btn btn-primary" type="button" @click="open">
        Open bottom sheet
      </button>
      <vue-bottom-sheet
        :max-width="maxWidth"
        :overlay="overlay"
        ref="myBottomSheet"
      >
        <div class="sheet-content">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            neque sed tempore ullam. Accusamus animi at autem beatae est, hic
            inventore iste minima, non quibusdam quisquam quos velit veritatis
            voluptatem?
          </p>
          <h2>
            Lorem Ipsum
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            excepturi explicabo id illum magnam possimus provident quae
            recusandae rerum tempore. Ab adipisci beatae, distinctio ea nemo
            omnis sed similique veniam.
          </p>
          <button type="button" class="btn btn-danger" @click="close">
            Close
          </button>
        </div>
      </vue-bottom-sheet>
    </div>
  </div>
</template>

<script>
import VueBottomSheet from "../src";

export default {
  data() {
    return {
      overlay: true,
      maxWidth: 640
    };
  },
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
};
</script>

<style>
.sheet-content {
  padding: 20px;
}
</style>

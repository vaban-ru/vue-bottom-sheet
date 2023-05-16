<template>
  <div class="container pt-5 pb-5">
    <h1>Vue Bottom Sheet</h1>
    <p>
      A nice clean and touch-friendly bottom sheet component based on
      <a target="_blank" href="https://vuejs.org/">Vue.js</a> and
      <a target="_blank" href="https://hammerjs.github.io/">Hammer.js</a>
    </p>
    <h3 class="mb-3">Settings</h3>
    <hr style="opacity: 0.1" />
    <div class="row">
      <div class="col-md-4 col-12">
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
        <div class="form-check form-switch mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="closeSwitchCheckChecked"
            v-model="clickToClose"
            checked
          />
          <label class="form-check-label" for="closeSwitchCheckChecked"
            >Click outside card to close</label
          >
        </div>
        <div class="form-check form-switch mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="roundedCheckChecked"
            v-model="rounded"
            checked
          />
          <label class="form-check-label" for="roundedCheckChecked"
            >Rounded top corners</label
          >
        </div>
        <div class="form-check form-switch mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="swipeSwitchCheckChecked"
            v-model="swipeAble"
            checked
          />
          <label class="form-check-label" for="swipeSwitchCheckChecked"
            >Swipe Able</label
          >
        </div>
        <div class="form-check form-switch mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="fullscreenSwitchCheckChecked"
            v-model="isFullScreen"
          />
          <label class="form-check-label" for="fullscreenSwitchCheckChecked"
            >Full Screen</label
          >
        </div>
        <div class="form-check form-switch mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="srollableSwitchCheckChecked"
            v-model="backgroundScrollable"
          />
          <label class="form-check-label" for="srollableSwitchCheckChecked"
            >Background scrollable</label
          >
        </div>
        <div class="form-check form-switch mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="clickableSwitchCheckChecked"
            v-model="backgroundClickable"
          />
          <label class="form-check-label" for="clickableSwitchCheckChecked"
            >Background clickable</label
          >
        </div>
      </div>
      <div class="col-md-4 col-12">
        <div class="mb-3">
          <h6>Overlay Color</h6>
          <color-picker format="hex8" v-model:pureColor="overlayColorSelect" />
        </div>
      </div>
      <div class="col-md-4 col-12">
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
        <div class="form-group mb-3">
          <label for="maxHeightInput" class="form-label">Max height:</label>
          <input
            name="maxHeightInput"
            id="maxHeightInput"
            v-model="maxHeight"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group mb-3">
          <label for="effectSelect" class="form-label">Effects:</label>
          <select
            v-model="effect"
            class="form-select"
            name="effectSelect"
            id="effectSelect"
          >
            <option selected value="fx-default">fx-default</option>
            <option selected value="fx-fadein-scale">fx-fadein-scale</option>
            <option selected value="fx-slide-from-right">
              fx-slide-from-right
            </option>
            <option selected value="fx-slide-from-left">
              fx-slide-from-left
            </option>
          </select>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" type="button" @click="open">
      Open bottom sheet
    </button>
    <vue-bottom-sheet
      :max-width="maxWidth"
      :max-height="maxHeight"
      :overlay="overlay"
      :click-to-close="clickToClose"
      :effect="effect"
      :rounded="rounded"
      :swipeAble="swipeAble"
      :isFullScreen="isFullScreen"
      :backgroundScrollable="false"
      :backgroundClickable="backgroundClickable"
      :overlayColor="overlayColorSelect"
      ref="myBottomSheet"
    >
      <div class="sheet-content">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime neque
          sed tempore ullam. Accusamus animi at autem beatae est, hic inventore
          iste minima, non quibusdam quisquam quos velit veritatis voluptatem?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime neque
          sed tempore ullam. Accusamus animi at autem beatae est, hic inventore
          iste minima, non quibusdam quisquam quos velit veritatis voluptatem?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime neque
          sed tempore ullam. Accusamus animi at autem beatae est, hic inventore
          iste minima, non quibusdam quisquam quos velit veritatis voluptatem?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime neque
          sed tempore ullam. Accusamus animi at autem beatae est, hic inventore
          iste minima, non quibusdam quisquam quos velit veritatis voluptatem?
        </p>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          excepturi explicabo id illum magnam possimus provident quae recusandae
          rerum tempore. Ab adipisci beatae, distinctio ea nemo omnis sed
          similique veniam.
        </p>
        <button type="button" class="btn btn-danger" @click="close">
          Close
        </button>
      </div>
    </vue-bottom-sheet>
  </div>
</template>

<script setup lang="ts">
import VueBottomSheet from "@/VueBottomSheet.vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { ref } from "vue";

const overlay = ref(true);
const maxWidth = ref("640px");
const maxHeight = ref("90%");
const clickToClose = ref(true);
const effect = ref("fx-default");
const rounded = ref(true);
const swipeAble = ref(true);
const isFullScreen = ref(false);
const overlayColorSelect = ref("#0000004D");
const backgroundScrollable = ref(false);
const backgroundClickable = ref(false);
const myBottomSheet = ref(null);

const open = () => {
  myBottomSheet.value.open();
};
const close = () => {
  myBottomSheet.value.close();
};
</script>
<style>
.sheet-content {
  padding: 20px;
}
</style>

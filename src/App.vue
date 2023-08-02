<template>
  <div class="container pt-5 pb-5">
    <h1>Vue Bottom Sheet</h1>
    <p>
      A nice clean and touch-friendly bottom sheet component based on
      <a target="_blank" href="https://vuejs.org/">vue.js</a> and
      <a target="_blank" href="https://hammerjs.github.io/">hammer.js</a>
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
          <label class="form-check-label" for="flexSwitchCheckChecked">Overlay</label>
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
            id="canSwipe"
            v-model="canSwipe"
            checked
          />
          <label class="form-check-label" for="canSwipe"
          >Enable swipe to close</label
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
          <label for="maxWidthInput" class="form-label">Max width (px):</label>
          <input
            name="maxWidthInput"
            type="number"
            id="maxWidthInput"
            v-model="maxWidth"
            class="form-control"
          />
        </div>
        <div class="form-group mb-3">
          <label for="maxHeightInput" class="form-label">Max height (px):</label>
          <input
            name="maxHeightInput"
            type="number"
            id="maxHeightInput"
            v-model="maxHeight"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <button class="btn btn-primary" type="button" @click="open">Open bottom sheet</button>
    <vue-bottom-sheet
      :overlay-click-close="clickToClose"
      :transition-duration="0.5"
      :max-width="maxWidth"
      :max-height="maxHeight"
      :overlay="overlay"
      :can-swipe="canSwipe"
      :overlay-color="overlayColorSelect"
      ref="myBottomSheet"
    >
      <div class="sheet-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime neque sed tempore ullam.
          Accusamus animi at autem beatae est, hic inventore iste minima, non quibusdam quisquam
          quos velit veritatis voluptatem?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime neque sed tempore ullam.
          Accusamus animi at autem beatae est, hic inventore iste minima, non quibusdam quisquam
          quos velit veritatis voluptatem?
        </p>
        <button type="button" class="btn btn-danger" @click="close">Close</button>
      </div>
    </vue-bottom-sheet>
  </div>
</template>

<script setup lang="ts">
import { ColorPicker } from 'vue3-colorpicker'
import 'vue3-colorpicker/style.css'
import { ref } from 'vue'
import VueBottomSheet from '@/VueBottomSheet.vue'

const overlay = ref(true)
const maxWidth = ref(640)
const maxHeight = ref(640)
const clickToClose = ref(true)
const overlayColorSelect = ref('#0000004D')
const canSwipe = ref(true)
const myBottomSheet = ref(null)

const open = () => {
  myBottomSheet.value.open()
}
const close = () => {
  myBottomSheet.value.close()
}
</script>
<style>
.sheet-content {
  padding: 20px;
}
</style>

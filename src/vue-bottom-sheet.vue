<template>
  <div
      :class="[
      'bottom-sheet',
      {
        opened: opened,
        closed: opened === false,
        moving: moving
      }
    ]"
      v-on="handlers"
      ref="bottomSheet"
  >
    <div v-if="overlay" class="bottom-sheet__backdrop" />
    <div
        :style="{ bottom: cardP, maxWidth: maxWidth, maxHeight: maxHeight }"
        :class="[
        'bottom-sheet__card',
        { stripe: stripe, square: !rounded },
        effect
      ]"
        ref="bottomSheetCard"
    >
      <div class="bottom-sheet__pan" ref="pan">
        <div class="bottom-sheet__bar" />
      </div>
      <div
          :style="{ height: contentH }"
          ref="bottomSheetCardContent"
          class="bottom-sheet__content"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Hammer from "hammerjs";

export default {
  name: "VueBottomSheet",
  data() {
    const vm = this;
    return {
      opened: false,
      contentH: "auto",
      mc: null,
      cardP: null,
      cardH: null,
      moving: false,
      stripe: 0,
      handlers: {
        mousedown: vm.clickOnBottomSheet,
        touchstart: vm.clickOnBottomSheet
      }
    };
  },
  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    maxWidth: {
      type: String,
      default: "640px"
    },
    maxHeight: {
      type: String,
      default: "95%"
    },
    clickToClose: {
      type: Boolean,
      default: true
    },
    effect: {
      type: String,
      default: "fx-default"
    },
    rounded: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    isIphone() {
      let iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
      let aspect = window.screen.width / window.screen.height;
      return iPhone && aspect.toFixed(3) === "0.462";
    },
    init() {
      return new Promise(resolve => {
        this.contentH = "auto";
        setTimeout(() => {
          this.stripe = this.isIphone() ? 20 : 0;
          this.cardH = this.$refs.bottomSheetCard.clientHeight;
          this.contentH = `${this.cardH - this.$refs.pan.clientHeight}px`;
          this.$refs.bottomSheetCard.style.maxHeight = this.maxHeight;
          this.cardP =
              this.effect === "fx-slide-from-right" ||
              this.effect === "fx-slide-from-left"
                  ? 0
                  : `-${this.cardH + this.stripe}px`;

          this.mc = new Hammer(this.$refs.pan);
          this.mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });
          this.mc.on("panstart", () => {
            this.moving = true;
          });
          this.mc.on("pandown panup", evt => {
            const panPosition =
                this.$refs.bottomSheet.clientHeight - this.cardH - evt.center.y;
            if (panPosition < 0) {
              this.cardP = `${panPosition}px`;
            }
          });
          this.mc.on("panend", evt => {
            this.moving = false;
            const panP =
                this.$refs.bottomSheet.clientHeight - this.cardH - evt.center.y;
            if (panP < -30) {
              this.opened = false;
              this.cardP = `-${this.cardH + this.stripe}px`;
              document.body.style.overflow = "";
              this.mc.off("panend");
              this.$emit("closed");
            }
          });
          resolve();
        }, 10);
      });
    },
    open() {
      this.init().then(() => {
        this.opened = true;
        this.cardP = 0;
        document.body.style.overflow = "hidden";
        this.$emit("opened");
      });
    },
    close() {
      this.opened = false;
      this.cardP =
          this.effect === "fx-slide-from-right" ||
          this.effect === "fx-slide-from-left"
              ? 0
              : `-${this.cardH + this.stripe}px`;
      document.body.style.overflow = "";
      this.$emit("closed");
    },
    clickOnBottomSheet(event) {
      if (this.clickToClose) {
        if (
            event.target.classList.contains("bottom-sheet__backdrop") ||
            event.target.classList.contains("bottom-sheet")
        ) {
          this.close();
        }
      }
    }
  },
  beforeDestroy() {
    this.mc.destroy();
  }
};
</script>

<style lang="scss" scoped>
.bottom-sheet {
  z-index: 99999;
  transition: all 0.4s ease;
  position: relative;

  * {
    box-sizing: border-box;
  }

  &__content {
    overflow-y: scroll;
  }

  &__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
  }

  &__card {
    width: 100%;
    position: fixed;
    background: white;
    border-radius: 14px 14px 0 0;
    left: 50%;
    z-index: 9999;
    margin: 0 auto;

    &.square {
      border-radius: 0;
    }

    &.stripe {
      padding-bottom: 20px;
    }

    &.fx-default {
      transform: translate(-50%, 0);
      transition: bottom 0.3s ease;
    }

    &.fx-fadein-scale {
      transform: translate(-50%, 0) scale(0.7);
      opacity: 0;
      transition: all 0.3s;
    }

    &.fx-slide-from-right {
      transform: translate(100%, 0);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    }

    &.fx-slide-from-left {
      transform: translate(-100%, 0);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    }
  }

  &__pan {
    padding-bottom: 20px;
    padding-top: 15px;
    height: 38px;
  }

  &__bar {
    display: block;
    width: 50px;
    height: 3px;
    border-radius: 14px;
    margin: 0 auto;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
  }

  &.closed {
    opacity: 0;
    visibility: hidden;
    .bottom-sheet__backdrop {
      animation: hide 0.3s ease;
    }
  }

  &.moving {
    .bottom-sheet__card {
      transition: none;
    }
  }

  &.opened {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .bottom-sheet__backdrop {
      animation: show 0.3s ease;
      opacity: 1;
      visibility: visible;
    }

    .bottom-sheet__card {
      &.fx-fadein-scale {
        transform: translate(-50%, 0) scale(1);
        opacity: 1;
      }
      &.fx-slide-from-right {
        transform: translate(-50%, 0);
        opacity: 1;
      }
      &.fx-slide-from-left {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
  }
}

@keyframes show {
  0% {
    opacity: 0;
    visibility: hidden;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>

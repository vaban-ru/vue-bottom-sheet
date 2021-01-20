<template>
  <div
    :class="{
      'bottom-sheet--opened': opened,
      'bottom-sheet--closed': opened === false,
      'bottom-sheet--moving': moving
    }"
    class="bottom-sheet"
  >
    <div
      ref="backdrop"
      @click="open(false)"
      class="bottom-sheet__backdrop"
    ></div>
    <div
      :style="{ bottom: cardPosition }"
      :class="{ 'bottom-sheet__card--stripe': hasStripe }"
      ref="bottomSheetCard"
      class="bottom-sheet__card"
    >
      <div class="bottom-sheet__pan" ref="pan">
        <div class="bottom-sheet__bar" ref="bar"></div>
      </div>
      <div
        :style="{ height: contentHeight }"
        ref="bottomSheetCardContent"
        class="bottom-sheet__content"
        @click="open(false)"
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
    return {
      opened: null,
      contentHeight: "auto",
      mc: null,
      cardPosition: null,
      cardHeight: null,
      moving: false,
      hasStripe: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      // Проверка для отступа на айфонах без кнопки
      let iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
      let aspect = window.screen.width / window.screen.height;
      if (iPhone && aspect.toFixed(3) === "0.462") {
        this.hasStripe = 20
      }

      this.cardHeight = this.$refs.bottomSheetCard.clientHeight;
      this.contentHeight = `${this.cardHeight - this.$refs.pan.clientHeight}px`;
      this.cardPosition = `-${this.cardHeight + this.hasStripe}px`;

      this.mc = new Hammer(this.$refs.pan);
      this.mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });
      this.mc.on("panstart", () => {
        this.moving = true;
      });
      this.mc.on("panup pandown", evt => {
        const panPosition =
          this.$refs.backdrop.clientHeight - this.cardHeight - evt.center.y;
        if (panPosition < 0) {
          this.cardPosition = `${panPosition}px`;
        }
      });
      this.mc.on("panend", evt => {
        this.moving = false;
        const panPosition =
          this.$refs.backdrop.clientHeight - this.cardHeight - evt.center.y;
        if (panPosition < -30) {
          this.opened = false;
          this.cardPosition = `-${this.cardHeight + this.hasStripe}px`;
        }
      });


    });
  },
  methods: {
    open(isOpen) {
      this.opened = isOpen;
      this.cardPosition = isOpen ? 0 : `-${this.cardHeight + this.hasStripe}px`;
    }
  },
  beforeDestroy () {
    this.mc.destroy()
  }
};
</script>

<style lang="scss" scoped>
.bottom-sheet {
  z-index: 99999;
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
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    background: white;
    border-radius: 14px 14px 0 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 9999;
    max-height: 95%;
    transition: bottom 0.3s ease;
    max-width: 640px;
    margin: 0 auto;

    &--stripe {
      padding-bottom: 20px;
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
  &--closed {
    .bottom-sheet__backdrop {
      animation: hide 0.3s ease;
    }
  }
  &--moving {
    .bottom-sheet__card {
      transition: none;
    }
  }
  &--opened {
    position: fixed;
    top: 0;
    left: 0;

    .bottom-sheet__backdrop {
      animation: show 0.3s ease;
      opacity: 1;
      visibility: visible;
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

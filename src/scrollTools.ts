let scrollPosition = 0;

export default {
  enable() {
    scrollPosition = window.pageYOffset;
    const $body = document.querySelector("body");
    if ($body) {
      $body.style.overflow = "hidden";
      $body.style.position = "fixed";
      $body.style.top = `-${scrollPosition}px`;
      $body.style.width = "100%";
    }
  },
  disable() {
    const $body = document.querySelector("body");
    if ($body) {
      $body.style.removeProperty("overflow");
      $body.style.removeProperty("position");
      $body.style.removeProperty("top");
      $body.style.removeProperty("width");
      window.scrollTo(0, scrollPosition);
    }
  },
};

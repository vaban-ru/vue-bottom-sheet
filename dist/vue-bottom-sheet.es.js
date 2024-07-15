import { defineComponent as M, useCssVars as N, ref as a, computed as m, nextTick as k, openBlock as O, createBlock as z, Teleport as R, createElementVNode as n, createVNode as W, Transition as P, withCtx as j, withDirectives as q, vShow as G, normalizeClass as J, normalizeStyle as K, renderSlot as p, createCommentVNode as Q, pushScopeId as U, popScopeId as X } from "vue";
import r from "hammerjs";
const Z = (l) => (U("data-v-bd328146"), l = l(), X(), l), ee = ["aria-hidden"], te = /* @__PURE__ */ Z(() => /* @__PURE__ */ n("div", { class: "bottom-sheet__default-draggable-area" }, [
  /* @__PURE__ */ n("div", { class: "bottom-sheet__draggable-thumb" })
], -1)), oe = /* @__PURE__ */ M({
  __name: "VueBottomSheet",
  props: {
    overlay: { type: Boolean, default: !0 },
    overlayColor: { default: "#0000004D" },
    maxWidth: { default: 640 },
    maxHeight: {},
    transitionDuration: { default: 0.5 },
    overlayClickClose: { type: Boolean, default: !0 },
    canSwipe: { type: Boolean, default: !0 },
    hideDragHandle: { type: Boolean, default: !1 },
    roundness: { default: "16px" }
  },
  emits: ["opened", "closed", "dragging-up", "dragging-down"],
  setup(l, { expose: f, emit: i }) {
    const t = l;
    N((e) => ({
      "69c8804c": I.value,
      aa26e1fa: t.overlayColor,
      "39b99c86": B.value,
      "7643faf6": T.value,
      "078a2cc5": $.value,
      "0b9922ec": V.value
    }));
    const c = a(!1), u = a(0), s = a(100), g = a(!1), b = a(0), y = a(null), S = a(null), d = a(null), w = a(null), x = a(null), C = a(null), D = (e) => document.activeElement === e;
    window.addEventListener("keyup", (e) => {
      const o = y.value.contains(e.target) && D(e.target);
      e.key === "Escape" && !o && v();
    });
    const E = m(() => [
      "bottom-sheet__content",
      {
        "bottom-sheet__content--fullscreen": u.value >= window.innerHeight,
        "bottom-sheet__content--dragging": g.value
      }
    ]), I = m(() => `${t.transitionDuration}s`), T = m(() => u.value && u.value > 0 ? `${u.value + 1}px` : "auto"), V = m(() => t.maxHeight ? `${t.maxHeight}px` : "inherit"), B = m(() => `${s.value}%`), $ = m(() => `${t.maxWidth}px`), Y = async () => {
      await k(), u.value = S.value.offsetHeight + d.value.clientHeight + w.value.offsetHeight;
    }, H = (e, o) => {
      if (t.canSwipe) {
        g.value = !0;
        const h = (L) => {
          L.preventDefault();
        };
        e.deltaY > 0 && (o === "main" && e.type === "panup" && (s.value = _(e.deltaY), e.cancelable && d.value.addEventListener("touchmove", h)), o === "main" && e.type === "pandown" && b.value === 0 && (s.value = _(e.deltaY)), o === "area" && (s.value = _(e.deltaY)), e.type === "panup" && i("dragging-up"), e.type === "pandown" && i("dragging-down")), e.isFinal && (d.value.removeEventListener("touchmove", h), o === "main" && (b.value = d.value.scrollTop), g.value = !1, s.value >= 10 ? v() : s.value = 0);
      }
    };
    k(() => {
      Y();
      const e = new r(C.value, {
        inputClass: r.TouchMouseInput,
        recognizers: [[r.Pan, { direction: r.DIRECTION_VERTICAL }]]
      }), o = new r(d.value, {
        inputClass: r.TouchMouseInput,
        recognizers: [[r.Pan, { direction: r.DIRECTION_VERTICAL }]]
      });
      e.on("panstart panup pandown panend", (h) => {
        H(h, "area");
      }), o.on("panstart panup pandown panend", (h) => {
        H(h, "main");
      });
    });
    const A = () => {
      s.value = 0, document.documentElement.style.overflowY = "hidden", document.documentElement.style.overscrollBehavior = "none", c.value = !0, i("opened");
    }, v = async () => {
      c.value = !1, s.value = 100, setTimeout(() => {
        document.documentElement.style.overflowY = "auto", document.documentElement.style.overscrollBehavior = "", i("closed");
      }, t.transitionDuration * 1e3);
    }, F = () => {
      t.overlayClickClose && v();
    }, _ = (e) => {
      const o = t.maxHeight && t.maxHeight <= u.value ? t.maxHeight : u.value;
      return e / o * 100;
    };
    return f({ open: A, close: v }), (e, o) => (O(), z(R, { to: "body" }, [
      n("div", {
        class: "bottom-sheet",
        ref_key: "bottomSheet",
        ref: y,
        "aria-hidden": !c.value,
        role: "dialog"
      }, [
        W(P, null, {
          default: j(() => [
            q(n("div", {
              onClick: F,
              class: "bottom-sheet__overlay"
            }, null, 512), [
              [G, e.overlay && c.value]
            ])
          ]),
          _: 1
        }),
        n("div", {
          ref_key: "bottomSheetContent",
          ref: x,
          class: J(E.value),
          style: K(`border-radius: ${e.roundness} ${e.roundness} 0 0`)
        }, [
          n("header", {
            ref_key: "bottomSheetHeader",
            ref: S,
            class: "bottom-sheet__header"
          }, [
            n("div", {
              ref_key: "bottomSheetDraggableArea",
              ref: C,
              class: "bottom-sheet__draggable-area"
            }, [
              e.hideDragHandle ? Q("", !0) : p(e.$slots, "drag-handle", { key: 0 }, () => [
                te
              ], !0)
            ], 512),
            p(e.$slots, "header", {}, void 0, !0)
          ], 512),
          n("main", {
            ref_key: "bottomSheetMain",
            ref: d,
            class: "bottom-sheet__main"
          }, [
            p(e.$slots, "default", {}, void 0, !0)
          ], 512),
          n("footer", {
            ref_key: "bottomSheetFooter",
            ref: w,
            class: "bottom-sheet__footer"
          }, [
            p(e.$slots, "footer", {}, void 0, !0)
          ], 512)
        ], 6)
      ], 8, ee)
    ]));
  }
});
const ae = (l, f) => {
  const i = l.__vccOpts || l;
  for (const [t, c] of f)
    i[t] = c;
  return i;
}, se = /* @__PURE__ */ ae(oe, [["__scopeId", "data-v-bd328146"]]);
export {
  se as default
};

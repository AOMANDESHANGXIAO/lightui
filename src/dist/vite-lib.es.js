import { computed as k, openBlock as n, createElementBlock as o, normalizeClass as m, unref as z, createCommentVNode as y, renderSlot as _, pushScopeId as F, popScopeId as A, createElementVNode as u, ref as v, onMounted as P, normalizeStyle as S, Fragment as X, renderList as Q, inject as T, provide as j, toDisplayString as B, watch as Z, createBlock as Y, Transition as ee, withCtx as N, withModifiers as M, createVNode as D, createTextVNode as R, resolveDynamicComponent as te } from "vue";
const $ = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [a, s] of l)
    e[a] = s;
  return e;
}, W = (t) => (F("data-v-984b5af5"), t = t(), A(), t), le = {
  key: 0,
  class: "is-loading"
}, ae = /* @__PURE__ */ W(() => /* @__PURE__ */ u("li", { class: "item-1" }, null, -1)), ne = /* @__PURE__ */ W(() => /* @__PURE__ */ u("li", { class: "item-2" }, null, -1)), se = /* @__PURE__ */ W(() => /* @__PURE__ */ u("li", { class: "item-3" }, null, -1)), oe = [
  ae,
  ne,
  se
], ie = { key: 2 }, ue = /* @__PURE__ */ Object.assign({
  name: "lf-button"
}, {
  __name: "button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: !1
    },
    round: {
      type: Boolean,
      default: !1
    },
    circle: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    // 是否为文字按钮
    text: {
      type: Boolean,
      default: !1
    },
    // 提供加载动画
    loading: {
      type: Boolean,
      default: !1
    },
    // 是否需要防抖
    debounce: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const e = t, a = l, s = k(() => e.debounce ? 300 : 0), d = ((f, g) => {
      let b;
      return (...c) => {
        clearTimeout(b), b = setTimeout(() => {
          f(...c);
        }, g);
      };
    })((f) => {
      e.disabled || e.loading || a("click", f);
    }, s.value), p = k(() => e.icon.endsWith("--left") ? e.icon.slice(0, -6) : e.icon.endsWith("--right") ? e.icon.slice(0, -7) : e.icon), r = k(() => e.icon.endsWith("--left") ? "left" : e.icon.endsWith("--right") ? "right" : "left");
    return (f, g) => (n(), o("button", {
      class: m(["lf-button", [
        `lf-button--${e.type}`,
        { "is-plain": e.plain },
        { "is-round": e.round },
        { "is-circle": e.circle },
        { "is-disabled": e.disabled },
        { "is-text": e.text },
        { "is-loading": e.loading }
      ]]),
      onClick: g[0] || (g[0] = (b) => z(d)(b))
    }, [
      e.loading ? (n(), o("ul", le, oe)) : y("", !0),
      t.icon && r.value === "left" ? (n(), o("i", {
        key: 1,
        class: m(p.value)
      }, null, 2)) : y("", !0),
      f.$slots.default ? (n(), o("span", ie, [
        _(f.$slots, "default", {}, void 0, !0)
      ])) : y("", !0),
      t.icon && r.value === "right" ? (n(), o("i", {
        key: 3,
        class: m(p.value)
      }, null, 2)) : y("", !0)
    ], 2));
  }
}), ce = /* @__PURE__ */ $(ue, [["__scopeId", "data-v-984b5af5"]]), re = ["onMouseenter"], de = /* @__PURE__ */ Object.assign({
  name: "lf-carousel"
}, {
  __name: "carousel",
  props: {
    height: {
      type: String,
      default: "150px"
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    autoplay: {
      type: Boolean,
      default: !0
    },
    interval: {
      type: Number,
      default: 3e3
    },
    indicatorPosition: {
      type: String,
      default: "none"
    }
  },
  setup(t) {
    const l = t, e = v(0), a = v([]), s = v(null);
    P(() => {
      a.value = s.value.querySelectorAll(".lf-carousel-item"), console.log(a.value), e.value = a.value.length;
      for (let c = 0; c < e.value; c++)
        a.value[c].style["z-index"] = e.value - c + 1, a.value[c].style.opacity = "0";
      a.value[l.initialIndex].style.opacity = "1", i.value = l.initialIndex;
    });
    const i = v(0), d = (c = 1, I = "auto") => {
      I === "auto" && !l.autoplay || (p(i.value), i.value = (i.value + c) % e.value, i.value < 0 && (i.value = e.value - 1), r(i.value));
    }, p = (c) => {
      a.value[c].style.opacity = "0", a.value[c].style["z-index"] = "0";
    }, r = (c) => {
      a.value[c].style["z-index"] = "10", a.value[c].style.opacity = "1";
    };
    let f = v(null);
    P(() => {
      l.autoplay && (f.value = setInterval(() => {
        d();
      }, l.interval));
    });
    const g = v(!1), b = () => {
      g.value ? f.value = setInterval(() => {
        d();
      }, l.interval) : clearInterval(f.value), g.value = !g.value;
    }, C = (c) => {
      p(i.value), i.value = c, r(i.value);
    };
    return (c, I) => (n(), o("section", {
      class: "lf-carousel",
      ref_key: "thisCarousel",
      ref: s,
      style: S({ height: t.height }),
      onMouseenter: b,
      onMouseleave: b
    }, [
      _(c.$slots, "default", {}, void 0, !0),
      t.indicatorPosition !== "none" ? (n(), o("ul", {
        key: 0,
        class: m(["lf-carousel__pointer", [`lf-carousel__pointer--${t.indicatorPosition}`]])
      }, [
        (n(!0), o(X, null, Q(e.value, (V, O) => (n(), o("li", {
          class: m(["lf-carousel__pointer--item", [{ active: i.value === O }]]),
          key: V,
          onMouseenter: (H) => C(O)
        }, null, 42, re))), 128))
      ], 2)) : y("", !0),
      u("div", {
        class: m(["lf-carousel__arrow--back", [
          { "is-Touched": g.value },
          {
            "lf-carousel__arrow--back--top": t.indicatorPosition === "left" || t.indicatorPosition === "right"
          }
        ]]),
        onClick: I[0] || (I[0] = (V) => d(-1, "click"))
      }, null, 2),
      u("div", {
        class: m(["lf-carousel__arrow--go", [
          { "is-Touched": g.value },
          {
            "lf-carousel__arrow--go--bottom": t.indicatorPosition === "left" || t.indicatorPosition === "right"
          }
        ]]),
        onClick: I[1] || (I[1] = (V) => d(1, "click"))
      }, null, 2)
    ], 36));
  }
}), fe = /* @__PURE__ */ $(de, [["__scopeId", "data-v-ba456007"]]), pe = { class: "lf-carousel-item" }, me = /* @__PURE__ */ Object.assign({
  name: "lf-carousel-item"
}, {
  __name: "carouselItem",
  setup(t) {
    return (l, e) => (n(), o("div", pe, [
      u("div", null, [
        _(l.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ge = /* @__PURE__ */ $(me, [["__scopeId", "data-v-8e0bc0dd"]]), ve = /* @__PURE__ */ Object.assign({
  name: "lf-col"
}, {
  __name: "col",
  props: {
    span: {
      type: Number,
      default: 0
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(t) {
    const l = t, e = T("align"), a = k(() => {
      if (["middle", "top", "bottom"].includes(e.value)) {
        if (e.value === "middle")
          return "center";
        if (e.value === "top")
          return "flex-start";
        if (e.value === "bottom")
          return "flex-end";
      }
      return "flex-start";
    });
    return (s, i) => (n(), o("div", {
      class: "lf-col",
      style: S({
        width: `${l.span / 24 * 100}%`,
        "margin-left": `${t.offset / 24 * 100}%`,
        "align-items": a.value
      })
    }, [
      _(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), he = /* @__PURE__ */ $(ve, [["__scopeId", "data-v-6c2918c4"]]), ye = /* @__PURE__ */ Object.assign({
  name: "lf-collapse"
}, {
  __name: "collapse",
  props: {
    modelValue: {
      type: [String, Number],
      default: null
    },
    accordion: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    const e = t, a = v(null), s = l, i = (r) => {
      d.value = r, s("update:modelValue", r);
    }, d = v(e.modelValue), p = v(e.accordion);
    return j("changeActive", i), j("activeName", d), j("accordion", p), (r, f) => (n(), o("section", {
      class: "lf-collapse",
      ref_key: "collapse",
      ref: a
    }, [
      _(r.$slots, "default", {}, void 0, !0)
    ], 512));
  }
}), _e = /* @__PURE__ */ $(ye, [["__scopeId", "data-v-601f694f"]]), q = (t) => (F("data-v-3f86e36f"), t = t(), A(), t), be = ["name"], ke = /* @__PURE__ */ q(() => /* @__PURE__ */ u("path", {
  d: "M301.568 536.32c-7.168 0-14.336-2.816-19.968-8.192-11.008-11.008-11.008-28.928 0-39.936L702.464 67.584c11.008-11.008 28.928-11.008 39.936 0 11.008 11.008 11.008 28.928 0 39.936L321.536 528.128c-5.376 5.376-12.8 8.192-19.968 8.192z",
  "p-id": "4245",
  fill: "#dbdbdb"
}, null, -1)), $e = /* @__PURE__ */ q(() => /* @__PURE__ */ u("path", {
  d: "M722.432 964.864c-7.168 0-14.336-2.816-19.968-8.192L281.6 535.808c-11.008-11.008-11.008-28.928 0-39.936 11.008-11.008 28.928-11.008 39.936 0L742.4 916.736c11.008 11.008 11.008 28.928 0 39.936-5.632 5.376-12.8 8.192-19.968 8.192z",
  "p-id": "4246",
  fill: "#dbdbdb"
}, null, -1)), we = [
  ke,
  $e
], xe = ["name"], Se = { class: "lf-collapse-item__content--slot" }, Ce = /* @__PURE__ */ Object.assign({
  name: "lf-collapse-item"
}, {
  __name: "collapseItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    name: {
      type: [String, Number],
      default: ""
    }
  },
  setup(t) {
    const l = t, e = T("changeActive"), a = T("activeName"), s = T("accordion"), i = v(null), d = v(!1), p = k(() => s.value ? l.name === a.value : d.value), r = () => {
      s.value ? a.value === l.name ? e(null) : e(l.name) : d.value = !d.value;
    }, f = v("");
    return P(() => {
      s.value || (d.value = l.name === a.value), i.value.style.height = "auto", i.value.style.height = i.value.offsetHeight + "px", f.value = i.value.offsetHeight + "px", i.value.style.height = "0px";
    }), (g, b) => (n(), o("section", {
      class: "lf-collapse-item",
      name: t.name
    }, [
      u("header", {
        class: "lf-collapse-item__header",
        onClick: r
      }, [
        _(g.$slots, "title", {}, () => [
          u("span", null, B(t.title), 1)
        ], !0),
        (n(), o("svg", {
          t: "1711189173429",
          class: m(["icon lf-collapse-item__header--arrow", { "lf-collapse-item__header--arrow--isfolded": !p.value }]),
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "4244",
          width: "20",
          height: "20"
        }, we, 2))
      ]),
      u("main", {
        class: "lf-collapse-item__content",
        ref_key: "content",
        ref: i,
        name: t.name,
        style: S({ height: p.value ? f.value : "0px" })
      }, [
        u("section", Se, [
          _(g.$slots, "default", {}, void 0, !0)
        ])
      ], 12, xe)
    ], 8, be));
  }
}), Ie = /* @__PURE__ */ $(Ce, [["__scopeId", "data-v-3f86e36f"]]), E = (t) => (F("data-v-b9378dcd"), t = t(), A(), t), Be = {
  key: 0,
  class: "is-loading"
}, Ve = /* @__PURE__ */ E(() => /* @__PURE__ */ u("li", { class: "item-1" }, null, -1)), Te = /* @__PURE__ */ E(() => /* @__PURE__ */ u("li", { class: "item-2" }, null, -1)), je = /* @__PURE__ */ E(() => /* @__PURE__ */ u("li", { class: "item-3" }, null, -1)), ze = [
  Ve,
  Te,
  je
], Oe = { key: 2 }, Ne = /* @__PURE__ */ Object.assign({
  name: "lf-button"
}, {
  __name: "button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: !1
    },
    round: {
      type: Boolean,
      default: !1
    },
    circle: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    // 是否为文字按钮
    text: {
      type: Boolean,
      default: !1
    },
    // 提供加载动画
    loading: {
      type: Boolean,
      default: !1
    },
    // 是否需要防抖
    debounce: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const e = t, a = l, s = k(() => e.debounce ? 300 : 0), d = ((f, g) => {
      let b;
      return (...c) => {
        clearTimeout(b), b = setTimeout(() => {
          f(...c);
        }, g);
      };
    })((f) => {
      e.disabled || e.loading || a("click", f);
    }, s.value), p = k(() => e.icon.endsWith("--left") ? e.icon.slice(0, -6) : e.icon.endsWith("--right") ? e.icon.slice(0, -7) : e.icon), r = k(() => e.icon.endsWith("--left") ? "left" : e.icon.endsWith("--right") ? "right" : "left");
    return (f, g) => (n(), o("button", {
      class: m(["lf-button", [
        `lf-button--${e.type}`,
        { "is-plain": e.plain },
        { "is-round": e.round },
        { "is-circle": e.circle },
        { "is-disabled": e.disabled },
        { "is-text": e.text },
        { "is-loading": e.loading }
      ]]),
      onClick: g[0] || (g[0] = (b) => z(d)(b))
    }, [
      e.loading ? (n(), o("ul", Be, ze)) : y("", !0),
      t.icon && r.value === "left" ? (n(), o("i", {
        key: 1,
        class: m(p.value)
      }, null, 2)) : y("", !0),
      f.$slots.default ? (n(), o("span", Oe, [
        _(f.$slots, "default", {}, void 0, !0)
      ])) : y("", !0),
      t.icon && r.value === "right" ? (n(), o("i", {
        key: 3,
        class: m(p.value)
      }, null, 2)) : y("", !0)
    ], 2));
  }
}), G = /* @__PURE__ */ $(Ne, [["__scopeId", "data-v-b9378dcd"]]), Pe = { class: "lf-dialog-message" }, Me = { class: "lf-dialog-footer" }, Le = /* @__PURE__ */ Object.assign({
  name: "lf-dialog"
}, {
  __name: "dialog",
  props: {
    // v-model的默认值，可以通过该值实现双向绑定
    modelValue: {
      type: Boolean,
      default: !0
    },
    "background-color": {
      type: String,
      default: "white"
    },
    title: {
      type: String,
      default: "Tips"
    },
    width: {
      type: String,
      default: "500px"
    },
    top: {
      type: String,
      default: "15vh"
    },
    "show-close": {
      type: Boolean,
      default: !0
    },
    draggable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "close", "open"],
  setup(t, { emit: l }) {
    const e = l, a = t, s = () => {
      e("update:modelValue", !1), e("close");
    }, i = () => {
      e("open");
    }, d = v(null);
    Z(
      () => a.modelValue,
      (c) => {
        c && i();
      }
    );
    const p = v(null), r = v({ top: 0, left: 0 }), f = v({ top: 0, left: 0 }), g = (c) => {
      a.draggable && (r.value = { top: p.value.offsetTop, left: p.value.offsetLeft }, f.value = {
        top: c.clientY - p.value.offsetTop,
        left: c.clientX - p.value.offsetLeft
      }, document.addEventListener("mousemove", b), document.addEventListener("mouseup", C));
    }, b = (c) => {
      r.value = { top: p.value.offsetTop, left: p.value.offsetLeft }, p.value.style.top = c.clientY - f.value.top + "px", p.value.style.left = c.clientX - f.value.left + "px";
    }, C = () => {
      document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", C);
    };
    return (c, I) => (n(), Y(ee, null, {
      default: N(() => [
        a.modelValue ? (n(), o("div", {
          key: 0,
          class: "lf-overlay-dialog",
          onClick: M(s, ["self"]),
          ref_key: "lfDialog",
          ref: d
        }, [
          u("section", {
            class: "lf-dialog",
            style: S(`width:${t.width};top:${t.top};background-color:${c.backgroundColor}`),
            ref_key: "dialog",
            ref: p
          }, [
            c.showClose ? (n(), o("span", {
              key: 0,
              class: "lf-dialog-close",
              onClick: s
            }, "X")) : y("", !0),
            u("header", {
              class: m(["lf-dialog-header", { "is-draggable": a.draggable }]),
              onMousedown: g
            }, [
              _(c.$slots, "title", {}, () => [
                u("span", null, B(t.title), 1)
              ], !0)
            ], 34),
            u("span", Pe, [
              _(c.$slots, "default", {}, void 0, !0)
            ]),
            _(c.$slots, "footer", {}, () => [
              u("section", Me, [
                D(G, { onClick: s }, {
                  default: N(() => [
                    R("cancle")
                  ]),
                  _: 1
                }),
                D(G, {
                  type: "primary",
                  onClick: s
                }, {
                  default: N(() => [
                    R("confirm")
                  ]),
                  _: 1
                })
              ])
            ], !0)
          ], 4)
        ], 512)) : y("", !0)
      ]),
      _: 3
    }));
  }
}), Fe = /* @__PURE__ */ $(Le, [["__scopeId", "data-v-9acb9b6e"]]), Ae = /* @__PURE__ */ Object.assign({
  name: "lf-h"
}, {
  __name: "h",
  props: {
    size: {
      type: String,
      default: "normal"
    },
    decorate: {
      type: Boolean,
      default: !0
    },
    linearColor: {
      type: Array,
      default: null
    }
  },
  setup(t) {
    const l = t, e = k(() => {
      if (!l.linearColor)
        return "";
      let s = "";
      return l.linearColor.forEach((i) => {
        s += `${i},`;
      }), `-webkit-linear-gradient(right, ${s.substring(0, s.length - 1)})`;
    }), a = k(() => e.value ? {
      background: e.value,
      "-webkit-background-clip": "text",
      "background-clip": "text",
      "-webkit-text-fill-color": "transparent"
    } : "");
    return (s, i) => (n(), o("div", null, [
      u("h1", {
        class: m(["lf-h", [`lf-h--${l.size}`, { "is-decorated": t.decorate }]]),
        style: S(a.value)
      }, [
        _(s.$slots, "default", {}, void 0, !0)
      ], 6)
    ]));
  }
}), We = /* @__PURE__ */ $(Ae, [["__scopeId", "data-v-ba6c2a31"]]), Ee = ["type", "value", "placeholder", "name"], He = {
  key: 0,
  class: "lf-input-prefix-icon"
}, De = { class: "lf-input-suffix" }, Re = {
  key: 0,
  class: "lf-input-suffix-icon"
}, Ge = ["value", "placeholder", "name"], Xe = /* @__PURE__ */ Object.assign({
  name: "lf-input"
}, {
  __name: "input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "Please Input"
    },
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    showPassword: {
      type: Boolean,
      default: !1
    },
    // 带图标的输入框，前缀输入框
    prefixIcon: {
      type: String,
      default: ""
    },
    suffixIcon: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "180px"
    },
    // textarea文本域专属参数
    autoSize: {
      type: Object,
      default: {}
    }
  },
  emits: ["change", "update:modelValue", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, a = l, s = (h) => {
      a("update:modelValue", h.target.value);
    }, i = v(!1), d = v(!1), p = () => {
      d.value = !0;
    }, r = () => {
      d.value = !!i.value;
    }, f = (h) => {
      h.button === 0 && a("update:modelValue", "");
    }, g = (h) => {
      i.value = !0, a("focus", h);
    }, b = (h) => {
      i.value = !1, d.value = !1, a("blur", h);
    }, C = v(!1), c = (h) => {
      h.button === 0 && (C.value = !C.value);
    }, I = k(() => {
      let h = 14;
      return e.clearable && d.value && (h += 15), e.showPassword && d.value && (h += 15), e.suffixIcon !== "" && (h += 15), h + "px";
    }), V = v(null);
    function O(h, w) {
      let x;
      return function(...K) {
        clearTimeout(x), x = setTimeout(() => {
          h(...K);
        }, w);
      };
    }
    const H = k(() => Object.keys(e.autoSize).length === 0 ? "25px" : e.autoSize.minRows * 16), U = O((h) => {
      if (Object.keys(e.autoSize).length === 0)
        return;
      V.value.style.height = "25px";
      const w = e.autoSize.maxRows * 16, x = h.target.scrollHeight - 20;
      V.value.style.height = Math.min(x, w) + "px";
    }, 300), J = (h) => {
      a("update:modelValue", h.target.value), U(h);
    };
    return (h, w) => t.type !== "textarea" ? (n(), o("section", {
      key: 0,
      class: "lf-input-container__input",
      style: S(`width:${t.width}`)
    }, [
      u("input", {
        class: m([[{ "lf-input-prefix__icon": t.prefixIcon }, { "lf-input-suffix__icon": t.suffixIcon }], "lf-input"]),
        type: C.value ? t.showPassword ? "password" : "text" : t.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        name: e.name,
        onInput: w[0] || (w[0] = (x) => s(x)),
        onFocus: w[1] || (w[1] = (x) => g(x)),
        onBlur: w[2] || (w[2] = (x) => b(x)),
        onMouseenter: p,
        onMouseleave: r,
        style: S(`padding-right:${I.value};`)
      }, null, 46, Ee),
      t.prefixIcon ? (n(), o("span", He, [
        u("i", {
          class: m(`lf-icon-${t.prefixIcon}`)
        }, null, 2)
      ])) : y("", !0),
      u("span", De, [
        t.suffixIcon ? (n(), o("span", Re, [
          u("i", {
            class: m(`lf-icon-${t.suffixIcon}`)
          }, null, 2)
        ])) : y("", !0),
        t.clearable && t.modelValue && d.value ? (n(), o("span", {
          key: 1,
          class: "lf-icon-guanbi lf-input-icon",
          onMousedown: w[3] || (w[3] = M((x) => f(x), ["prevent"])),
          onMouseenter: p
        }, null, 32)) : y("", !0),
        t.showPassword && t.modelValue ? (n(), o("span", {
          key: 2,
          class: "lf-icon-liulan lf-input-icon",
          style: { "font-size": "18px" },
          onMousedown: w[4] || (w[4] = M((x) => c(x), ["prevent"])),
          onMouseenter: p
        }, null, 32)) : y("", !0)
      ])
    ], 4)) : (n(), o("section", {
      key: 1,
      class: "lf-input-container__textarea",
      style: S(`width:${t.width}`)
    }, [
      u("textarea", {
        ref_key: "textarea",
        ref: V,
        class: "lf-textarea",
        value: e.modelValue,
        placeholder: e.placeholder,
        name: e.name,
        onInput: w[5] || (w[5] = (x) => J(x)),
        style: S({ minHeight: H.value })
      }, null, 44, Ge)
    ], 4));
  }
}), Ye = /* @__PURE__ */ $(Xe, [["__scopeId", "data-v-55a953e2"]]), qe = ["href", "target"], Ue = /* @__PURE__ */ Object.assign({
  name: "lf-link"
}, {
  __name: "link",
  props: {
    href: {
      type: String,
      default: ""
    },
    target: {
      type: String,
      default: "_self"
    },
    type: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    underline: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const l = t;
    return (e, a) => (n(), o("div", {
      class: m(["lf-link", [`lf-link--${t.type}`, { "is-disabled": t.disabled }, { "is-no-underline": !t.underline }]])
    }, [
      u("a", {
        href: l.href,
        target: t.target
      }, [
        _(e.$slots, "default", {}, void 0, !0)
      ], 8, qe)
    ], 2));
  }
}), Je = /* @__PURE__ */ $(Ue, [["__scopeId", "data-v-8c616a78"]]), Ke = { class: "lf-progress__line--inside" }, Qe = { key: 0 }, Ze = { class: "lf-progress__line--outside" }, et = { key: 0 }, tt = {
  key: 1,
  class: "lf-progress__circle"
}, lt = ["stroke-width"], at = ["innerHTML"], nt = ["stroke", "stroke-width", "stroke-dashoffset"], st = { class: "lf-progress__circle-showtext" }, ot = /* @__PURE__ */ Object.assign({
  name: "lf-progress"
}, {
  __name: "progress",
  props: {
    percentage: {
      type: Number,
      default: 90
    },
    type: {
      type: String,
      default: "line"
    },
    status: {
      type: String,
      default: "primary"
    },
    showTextOutside: {
      type: Boolean,
      default: !1
    },
    showTextInside: {
      type: Boolean,
      default: !1
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    color: {
      // 接收一个数组或者函数
      type: [Array, Function],
      default: null
    },
    // 渐变色进度条
    linearColor: {
      type: Array,
      default: null
    },
    indeterminate: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const l = t, e = k(() => l.percentage > 100 ? 100 : l.percentage < 0 ? 0 : l.percentage.toFixed(0)), a = k(() => ((100 - e.value) / 100 * 314).toString()), s = v(null), i = k(() => {
      let r;
      return l.color instanceof Array ? (l.color.forEach((f) => {
        e.value >= f.percentage && (r = f.color);
      }), r = r || l.color[0].color) : l.color instanceof Function && (r = l.color(e.value)), r;
    }), d = k(() => {
      let r = "";
      return l.linearColor instanceof Array && (r = l.linearColor.join(",")), `linear-gradient(to right, ${r})`;
    }), p = k(() => `<linearGradient id="linear-gradient" x1="0%" y1="0%" x2="100%" y2="0%">${l.linearColor.map((f, g) => `<stop offset="${g / (l.linearColor.length - 1) * 100}%" stop-color="${f}"/>`).join("")}</linearGradient>`);
    return (r, f) => (n(), o(X, null, [
      t.type === "line" ? (n(), o("div", {
        key: 0,
        class: "lf-progress__line",
        style: S({ height: `${t.strokeWidth}px` })
      }, [
        u("div", {
          class: "lf-progress__line--bgc",
          style: S({ "border-radius": `${t.strokeWidth / 2}px` })
        }, [
          u("div", {
            class: m(["lf-progress__line--progress", [
              `lf-progress__line--progress--${t.status}`,
              { "lf-progress__line--progress--animation": t.indeterminate }
            ]]),
            style: S({
              width: `${e.value}%`,
              "border-radius": `${t.strokeWidth / 2}px`,
              "background-color": t.color ? i.value : "",
              background: t.linearColor ? d.value : ""
            })
          }, [
            u("span", Ke, [
              _(r.$slots, "inside", {}, () => [
                t.showTextInside ? (n(), o("span", Qe, B(e.value) + " %", 1)) : y("", !0)
              ], !0)
            ])
          ], 6)
        ], 4),
        u("span", Ze, [
          _(r.$slots, "outside", {}, () => [
            t.showTextOutside ? (n(), o("span", et, B(e.value) + " %", 1)) : y("", !0)
          ], !0)
        ])
      ], 4)) : y("", !0),
      t.type === "circle" ? (n(), o("div", tt, [
        (n(), o("svg", {
          width: "126",
          height: "126",
          "view-box": "0 0 126 126",
          ref_key: "svg",
          ref: s
        }, [
          u("circle", {
            cx: "63",
            cy: "63",
            r: "50",
            class: "lf-progress__circle--bgc",
            "stroke-width": t.strokeWidth
          }, null, 8, lt),
          u("defs", { innerHTML: p.value }, null, 8, at),
          u("circle", {
            cx: "63",
            cy: "63",
            r: "50",
            class: m(["lf-progress__circle--progress", [
              `lf-progress__circle--progress--${t.color ? "" : t.status}`,
              { "lf-progress__circle--progress--animation": t.indeterminate }
            ]]),
            stroke: t.linearColor ? "url(#linear-gradient)" : t.color ? i.value : "",
            "stroke-width": t.strokeWidth,
            "stroke-dasharray": "314 314",
            "stroke-dashoffset": a.value
          }, null, 10, nt)
        ], 512)),
        u("div", st, [
          _(r.$slots, "default", {}, () => [
            u("div", null, B(e.value) + " %", 1)
          ], !0)
        ])
      ])) : y("", !0)
    ], 64));
  }
}), it = /* @__PURE__ */ $(ot, [["__scopeId", "data-v-bfa8aa17"]]), ut = ["value"], ct = /* @__PURE__ */ Object.assign({
  name: "lf-radio"
}, {
  __name: "radio",
  props: {
    value: {
      type: [Array, String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const l = t, e = T("r_value"), a = T("update_v"), s = () => {
      l.disabled || a(l.value);
    };
    return (i, d) => (n(), o("span", {
      class: "lf-radio",
      onClick: s
    }, [
      u("span", {
        class: m(["lf-radio__input", [{ "is-checked": l.value === z(e) }, { "is-disabled": l.disabled }]])
      }, [
        u("input", {
          type: "radio",
          class: "lf-radio__input--orginal",
          value: z(e)
        }, null, 8, ut)
      ], 2),
      u("span", {
        class: m(["lf-radio__label", [{ "is-checked": l.value === z(e) }, { "is-disabled": l.disabled }]])
      }, [
        _(i.$slots, "default", {}, void 0, !0)
      ], 2)
    ]));
  }
}), rt = /* @__PURE__ */ $(ct, [["__scopeId", "data-v-480cc489"]]), dt = { class: "lf-radio-group" }, ft = /* @__PURE__ */ Object.assign({
  name: "lf-radio-group"
}, {
  __name: "radioGroup",
  props: {
    modelValue: {
      type: [Array, String, Boolean, Number],
      default: ""
    }
  },
  emits: ["update:model-value"],
  setup(t, { emit: l }) {
    const e = t, a = v("");
    P(() => {
      a.value = e.modelValue;
    }), j("r_value", a);
    const s = l;
    return j("update_v", (d) => {
      s("update:model-value", d), a.value = d;
    }), (d, p) => (n(), o("div", dt, [
      _(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), pt = /* @__PURE__ */ $(ft, [["__scopeId", "data-v-d85b7173"]]), mt = /* @__PURE__ */ Object.assign({
  name: "lf-row"
}, {
  __name: "row",
  props: {
    gap: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "top"
    }
  },
  setup(t) {
    const l = t, e = k(() => ["start", "end", "space-between", "space-around", "space-evenly"].includes(l.justify) ? l.justify === "start" || l.justify === "end" ? `flex${l.justify}` : l.justify : "flex-start"), a = v(l.align);
    return j("align", a), (s, i) => (n(), o("div", {
      class: "lf-row",
      style: S({ gap: `${l.gap}px`, "justify-content": e.value })
    }, [
      _(s.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), gt = /* @__PURE__ */ $(mt, [["__scopeId", "data-v-912769db"]]), vt = /* @__PURE__ */ Object.assign({
  name: "lfSwitch"
}, {
  __name: "switch",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    onColor: {
      type: String,
      default: ""
    },
    offColor: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    },
    inlinePrompt: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    const e = t, a = l, s = v(null), i = () => {
      !e.modelValue && e.offColor ? s.value.style.backgroundColor = e.offColor : e.modelValue && e.onColor && (s.value.style.backgroundColor = e.onColor);
    }, d = () => {
      i(), a("update:modelValue", !e.modelValue);
    };
    return (p, r) => (n(), o("span", {
      class: m(["lf-switch", [{ "is-disabled": t.disabled }]])
    }, [
      t.inactiveText && !t.inlinePrompt ? (n(), o("span", {
        key: 0,
        class: m(["lf-switch__label-text", [
          { "is-checked": e.modelValue },
          { "lf-switch--large": e.size === "large" },
          { "lf-switch--small": e.size === "small" }
        ]])
      }, B(t.inactiveText), 3)) : y("", !0),
      u("span", {
        ref_key: "switchCore",
        ref: s,
        class: m(["lf-switch__core", [
          { "is-checked": e.modelValue },
          { "lf-switch--large": e.size === "large" },
          { "lf-switch--small": e.size === "small" }
        ]]),
        onClick: d
      }, [
        (t.activeText || t.inactiveText) && t.inlinePrompt ? (n(), o("div", {
          key: 0,
          class: m(["lf-switch__inline-prompt", [
            { "is-checked": e.modelValue },
            { "lf-switch--large": e.size === "large" },
            { "lf-switch--small": e.size === "small" }
          ]])
        }, B(t.modelValue ? t.inactiveText : t.activeText), 3)) : y("", !0),
        u("div", {
          class: m(["lf-switch__action", [
            { "is-checked": e.modelValue },
            { "lf-switch--large": e.size === "large" },
            { "lf-switch--small": e.size === "small" }
          ]])
        }, null, 2)
      ], 2),
      t.activeText && !t.inlinePrompt ? (n(), o("span", {
        key: 1,
        class: m(["lf-switch__label-text", [
          { "is-checked": !e.modelValue },
          { "lf-switch--large": e.size === "large" },
          { "lf-switch--small": e.size === "small" }
        ]])
      }, B(t.activeText), 3)) : y("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ $(vt, [["__scopeId", "data-v-c80b9551"]]), yt = /* @__PURE__ */ Object.assign({
  name: "lf-text"
}, {
  __name: "text",
  props: {
    size: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      default: "default"
    },
    tag: {
      type: String,
      default: "span"
    },
    truncated: {
      type: Boolean,
      default: !1
    },
    lineClamp: {
      type: [Number, String],
      default: 0
    }
  },
  setup(t) {
    const l = t;
    return (e, a) => (n(), Y(te(t.tag), {
      class: m(["lf-text", [
        `lf-text__font-size--${l.size}`,
        `lf-text--${l.type}`,
        { "is-truncated": t.truncated },
        { "is-line-clamp": t.lineClamp !== 0 }
      ]]),
      style: S({ "-webkit-line-clamp": Number(t.lineClamp) > 0 ? t.lineClamp : "auto" })
    }, {
      default: N(() => [
        _(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), _t = /* @__PURE__ */ $(yt, [["__scopeId", "data-v-ad942b26"]]), L = {
  lfButton: ce,
  lfCarousel: fe,
  lfCarouselItem: ge,
  lfCol: he,
  lfCollapse: _e,
  lfCollapseItem: Ie,
  lfDialog: Fe,
  lfH: We,
  lfInput: Ye,
  lfLink: Je,
  lfProgress: it,
  lfRadio: rt,
  lfRadioGroup: pt,
  lfRow: gt,
  lfSwitch: ht,
  lfText: _t
};
function bt(t) {
  Object.keys(L).forEach((e) => {
    const a = L[e];
    t.component(a.name || e, a);
  });
}
const $t = {
  install: bt,
  ...L
};
export {
  $t as default
};
//# sourceMappingURL=vite-lib.es.js.map

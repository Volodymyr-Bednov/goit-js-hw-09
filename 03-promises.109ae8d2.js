!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("iU1Pc"),u=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),c=document.querySelector('[name="amount"]');function l(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}u.setAttribute("min",0),a.setAttribute("min",0),c.setAttribute("min",0),document.querySelector("form.form").addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(u.value),o=0;o<Number(c.value);o+=1)l(o,n).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=Number(a.value)}))}();
//# sourceMappingURL=03-promises.109ae8d2.js.map
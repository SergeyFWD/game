(()=>{var e={63:()=>{!function(){const e=document.createElement("div");e.classList.add("choose-wrap");const t=document.createElement("h2");t.classList.add("choose__title"),t.textContent="Выбери сложность";const n=document.createElement("button");n.classList.add("choose__btn"),n.textContent="Старт";const a=document.createElement("div");a.classList.add("choose__link-bg");const d=document.createElement("div");d.classList.add("choose__link-wrap");const o=document.createElement("a");o.classList.add("choose__link","easy"),o.setAttribute("href","#"),o.setAttribute("value","easy"),o.textContent="1";const r=document.createElement("div");r.classList.add("choose__link-wrap");const s=document.createElement("a");s.classList.add("choose__link","average"),s.setAttribute("href","#"),s.setAttribute("value","average"),s.textContent="2";const c=document.createElement("div");c.classList.add("choose__link-wrap");const l=document.createElement("a");l.classList.add("choose__link","hard"),l.setAttribute("href","#"),l.setAttribute("value","hard"),l.textContent="3",APP.appendChild(e),e.appendChild(t),e.appendChild(a),a.appendChild(d),d.appendChild(o),a.appendChild(r),r.appendChild(s),a.appendChild(c),c.appendChild(l),e.appendChild(n)}();const e=document.querySelector(".choose__btn");document.querySelectorAll(".choose__link").forEach((t=>{t.addEventListener("click",(()=>{e.addEventListener("click",(e=>{const n=t.getAttribute("value");e.preventDefault(),"easy"===n?renderCard(3):"average"===n?renderCard(6):"hard"===n?renderCard(9):alert("Выберите уровень сложности")}))}),{once:!0})}))}},t={};function n(a){var d=t[a];if(void 0!==d)return d.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(63),document.querySelector(".app")})()})();
//# sourceMappingURL=bundle.js.map
(()=>{var e,t={15:()=>{document.querySelectorAll(".accordion").forEach((e=>{const t=e.querySelector(".accordion__btn"),i=e.querySelector(".accordion__content"),r=e.querySelector(".accordion__main");t.addEventListener("click",(()=>{e.classList.contains("accordion--active")?(t.classList.remove("accordion__btn--active"),i.style.height=`${i.scrollHeight}px`,e.classList.add("accordion--activating"),setTimeout((()=>i.style.height="0px"))):(t.classList.add("accordion__btn--active"),e.classList.add("accordion--activating"),i.style.height=`${r.getBoundingClientRect().height}px`)})),i.addEventListener("transitionend",(()=>{e.classList.remove("accordion--activating"),e.classList.contains("accordion--active")?e.classList.remove("accordion--active"):(i.setAttribute("style",""),e.classList.add("accordion--active"))}))}))},324:()=>{document.querySelectorAll(".categories-section").forEach((e=>{e.querySelectorAll(".categories-section__item:not(.categories-section__item--img)").forEach((t=>{t.addEventListener("mouseover",(()=>{const i=e.querySelector(".categories-section__item--active");i===t||window.innerWidth<768||(i.classList.remove("categories-section__item--active"),t.classList.add("categories-section__item--active"))}))}))}))},691:(e,t,i)=>{"use strict";i(936);var r=i(80);r.ZP.use(r.tl),new r.ZP(".banner__slider",{slidesPerView:1,speed:600,pagination:{el:".banner__pagination",clickable:!0}});i(324);r.ZP.use(r.tl);document.querySelectorAll(".gallery").forEach((e=>{const t=e.querySelector(".gallery__slider");new r.ZP(t,{speed:600,enabled:!0,slidesPerView:1,pagination:{el:".gallery__pagination",clickable:!0},breakpoints:{768:{enabled:!1,slidesPerView:"auto"}}})}));i(901);r.ZP.use(r.tl);document.querySelectorAll(".partners").forEach((e=>{const t=e.querySelector(".partners__slider");new r.ZP(t,{speed:600,slidesPerView:1,spaceBetween:21,slideVisibleClass:"test",pagination:{el:".partners__pagination",clickable:!0},breakpoints:{992:{slidesPerView:3},767:{slidesPerView:2}}})}));i(15)},936:()=>{const e=document.querySelector(".menu");if(e){e.querySelector(".menu__toggle").addEventListener("click",(()=>{e.classList.toggle("menu--active"),document.body.classList.toggle("body--lock")})),e.addEventListener("click",(t=>{e===t.target&&e.classList.contains("menu--active")&&(e.classList.remove("menu--active"),document.body.classList.remove("body--lock"))}))}},901:()=>{document.querySelectorAll(".video-player").forEach((e=>{e.querySelector(".video-player__play").addEventListener("click",(()=>{if(e.classList.contains("video-player--active"))return;const t=e.dataset.src,i=document.createElement("video");i.classList.add("video-player__video"),i.setAttribute("src",t),i.setAttribute("controls",""),e.prepend(i),e.classList.add("video-player--active"),i.play()}))}))}},i={};function r(e){var o=i[e];if(void 0!==o)return o.exports;var c=i[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=(t,i,o,c)=>{if(!i){var a=1/0;for(d=0;d<e.length;d++){for(var[i,o,c]=e[d],s=!0,n=0;n<i.length;n++)(!1&c||a>=c)&&Object.keys(r.O).every((e=>r.O[e](i[n])))?i.splice(n--,1):(s=!1,c<a&&(a=c));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[i,o,c]},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var o,c,[a,s,n]=i,l=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(n)var d=n(r)}for(t&&t(i);l<a.length;l++)c=a[l],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(d)},i=globalThis.webpackChunkterra_roof=globalThis.webpackChunkterra_roof||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var o=r.O(void 0,[80],(()=>r(691)));o=r.O(o)})();
(()=>{var e,t={15:()=>{document.querySelectorAll(".accordion").forEach((e=>{const t=e.querySelector(".accordion__btn"),r=e.querySelector(".accordion__content"),i=e.querySelector(".accordion__main");t.addEventListener("click",(()=>{e.classList.contains("accordion--active")?(t.classList.remove("accordion__btn--active"),r.style.height=`${r.scrollHeight}px`,e.classList.add("accordion--activating"),setTimeout((()=>r.style.height="0px"))):(t.classList.add("accordion__btn--active"),e.classList.add("accordion--activating"),r.style.height=`${i.getBoundingClientRect().height}px`)})),r.addEventListener("transitionend",(()=>{e.classList.remove("accordion--activating"),e.classList.contains("accordion--active")?e.classList.remove("accordion--active"):(r.setAttribute("style",""),e.classList.add("accordion--active"))}))}))},324:()=>{document.querySelectorAll(".categories-section").forEach((e=>{e.querySelectorAll(".categories-section__item:not(.categories-section__item--img)").forEach((t=>{t.addEventListener("mouseover",(()=>{const r=e.querySelector(".categories-section__item--active");r===t||window.innerWidth<768||(r.classList.remove("categories-section__item--active"),t.classList.add("categories-section__item--active"))}))}))}))},219:(e,t,r)=>{"use strict";r(936);var i=r(80);i.ZP.use(i.tl),new i.ZP(".banner__slider",{slidesPerView:1,speed:600,pagination:{el:".banner__pagination",clickable:!0}});r(324);i.ZP.use(i.tl);document.querySelectorAll(".images-section").forEach((e=>{const t=e.querySelector(".images-section__slider");new i.ZP(t,{speed:600,enabled:!0,slidesPerView:1,pagination:{el:".images-section__pagination",clickable:!0},breakpoints:{768:{enabled:!1,slidesPerView:"auto"}}})}));r(901),r(57);i.ZP.use(i.tl);document.querySelectorAll(".partners").forEach((e=>{const t=e.querySelector(".partners__slider");new i.ZP(t,{speed:600,slidesPerView:1,spaceBetween:21,slideVisibleClass:"test",pagination:{el:".partners__pagination",clickable:!0},breakpoints:{992:{slidesPerView:3},767:{slidesPerView:2}}})}));r(15);function o(e){const{element:t,from:r,to:i,width:o,fromInsertType:c="append",toInsertType:a="append"}=e,s=document.querySelector(t),n=document.querySelector(r),l=document.querySelector(i);s&&n&&l&&setTimeout((()=>{window.innerWidth<=o&&s.parentNode===n?l[a](s):window.innerWidth>=o&&s.parentNode!==n&&n[c](s)}))}function c(){o({element:".footer__copyright-text",from:".footer__copyright",to:".footer__bottom",width:767})}c(),window.addEventListener("resize",c)},936:()=>{const e=document.querySelector(".menu");if(e){e.querySelector(".menu__toggle").addEventListener("click",(()=>{e.classList.toggle("menu--active"),document.body.classList.toggle("body--lock")})),e.addEventListener("click",(t=>{e===t.target&&e.classList.contains("menu--active")&&(e.classList.remove("menu--active"),document.body.classList.remove("body--lock"))}))}},901:()=>{document.querySelectorAll(".video-player").forEach((e=>{e.querySelector(".video-player__play").addEventListener("click",(()=>{if(e.classList.contains("video-player--active"))return;const t=e.dataset.src,r=document.createElement("video");r.classList.add("video-player__video"),r.setAttribute("src",t),r.setAttribute("controls",""),e.prepend(r),e.classList.add("video-player--active"),r.play()}))}))},57:()=>{document.querySelectorAll(".youtube-player").forEach((e=>{e.querySelector(".youtube-player__play").addEventListener("click",(()=>{if(e.classList.contains("youtube-player--active"))return;const t=function(e){const t=document.createElement("iframe");return t.setAttribute("src",`${e}?autoplay=1`),t.setAttribute("autoplay",""),t.setAttribute("frameborder","0"),t.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),t.setAttribute("allowfullscreen",""),t}(e.dataset.src);t.classList.add("youtube-player__iframe"),e.prepend(t),e.classList.add("youtube-player--active")}))}))}},r={};function i(e){var o=r[e];if(void 0!==o)return o.exports;var c=r[e]={exports:{}};return t[e](c,c.exports,i),c.exports}i.m=t,e=[],i.O=(t,r,o,c)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,o,c]=e[d],s=!0,n=0;n<r.length;n++)(!1&c||a>=c)&&Object.keys(i.O).every((e=>i.O[e](r[n])))?r.splice(n--,1):(s=!1,c<a&&(a=c));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[r,o,c]},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var o,c,[a,s,n]=r,l=0;if(a.some((t=>0!==e[t]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(n)var d=n(i)}for(t&&t(r);l<a.length;l++)c=a[l],i.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return i.O(d)},r=globalThis.webpackChunkterra_roof=globalThis.webpackChunkterra_roof||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=i.O(void 0,[80],(()=>i(219)));o=i.O(o)})();
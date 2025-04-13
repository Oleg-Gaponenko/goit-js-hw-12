import{a as S,S as q,i as l}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const $="23726631-21d3c8e5c551d1cabdf8b5ecc";async function u(i,r=1){try{return(await S.get("https://pixabay.com/api/",{params:{key:$,q:i,per_page:15,page:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.log(t),t}}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),f=document.querySelector(".load-more-button"),B=new q(".gallery-link",{captionsData:"alt",captionDelay:250});function h(i){const r=i.map(({webformatURL:t,largeImageURL:s,tags:e,likes:o,views:n,comments:b,downloads:w})=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${e}"
    />
  </a>
  <div class="info">
  <div class="info-item">
   <p class="title">Likes</p>
   <p class="item">${o}</p>
  </div>
  <div class="info-item">
   <p class="title">Views</p>
   <p class="item">${n}</p>
  </div>
  <div class="info-item">
   <p class="title">Comments</p>
   <p class="item">${b}</p>
  </div>
  <div class="info-item">
  <p class="title">Downloads</p>
  <p class="item">${w}</p>
  </div>
  </div>
</li>
`).join("");m.insertAdjacentHTML("beforeend",r),B.refresh()}function M(){m.innerHTML=""}function y(){p.classList.remove("is-hidden")}function g(){p.classList.add("is-hidden")}function L(){f.classList.remove("is-hidden")}function c(){f.classList.add("is-hidden")}const v=document.querySelector(".form"),P=document.querySelector(".load-more-button"),C=document.querySelector(".gallery");v.addEventListener("submit",H);P.addEventListener("click",O);let a=1,d=0,x="";async function H(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(r===""){l.error({message:"Please enter your search query!",position:"topRight",maxWidth:"450px"});return}a=1,x=r,y(),M(),c();try{const{hits:t,totalHits:s}=await u(r,a);d=s,t.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"450px"}):h(t),d>a*15?L():c()}catch{l.error({message:"Cannot fetch images",position:"topRight",maxWidth:"450px"})}finally{g(),v.reset()}}async function O(){a+=1,y(),c();try{const{hits:i,totalHits:r}=await u(x,a);h(i);const t=C.querySelector(".gallery-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}a*15>=d?(c(),l.error({message:"We are sorry, but you have reached the end of search results.",position:"topRight",maxWidth:"450px"})):L()}catch{l.error({message:"Cannot fetch images",position:"topRight",maxWidth:"450px"})}finally{g()}}
//# sourceMappingURL=index.js.map

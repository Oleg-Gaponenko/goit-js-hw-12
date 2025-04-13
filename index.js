import{a as S,S as q,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const B="23726631-21d3c8e5c551d1cabdf8b5ecc";async function u(i,t=1){try{return(await S.get("https://pixabay.com/api/",{params:{key:B,q:i,per_page:15,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(o){throw console.log(o),o}}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),f=document.querySelector(".load-more-button"),M=new q(".gallery-link",{captionsData:"alt",captionDelay:250});function h(i){const t=i.map(({webformatURL:o,largeImageURL:c,tags:e,likes:r,views:a,comments:b,downloads:w})=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${c}"
      alt="${e}"
    />
  </a>
  <div class="info">
  <div class="info-item">
   <p class="title">Likes</p>
   <p class="item">${r}</p>
  </div>
  <div class="info-item">
   <p class="title">Views</p>
   <p class="item">${a}</p>
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
`).join("");m.innerHTML=t,M.refresh()}function $(){m.innerHTML=""}function g(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}function L(){f.classList.remove("is-hidden")}function l(){f.classList.add("is-hidden")}const v=document.querySelector(".form"),P=document.querySelector(".load-more-button");v.addEventListener("submit",C);P.addEventListener("click",O);let s=1,d=0,x="";async function C(i){i.preventDefault();const t=i.target.elements["search-text"].value.trim();if(t===""){n.error({message:"Please enter your search query!",position:"topRight",maxWidth:"450px"});return}s=1,x=t,g(),$(),l();try{const o=await u(t,s);d=o.totalHits,o.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"450px"}):h(o),d>s*15?L():l()}catch{n.error({message:"Cannot fetch images",position:"topRight",maxWidth:"450px"})}finally{y(),v.reset()}}async function O(){s+=1,g(),l();try{const i=await u(x,s);h(i);const t=document.querySelector(".gallery .gallery-item");if(t){const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}s*15>=d?(l(),n.error({message:"We are sorry, but you have reached the end of search results.",position:"topRight",maxWidth:"450px"})):L()}catch{n.error({message:"Cannot fetch images",position:"topRight",maxWidth:"450px"})}finally{y()}}
//# sourceMappingURL=index.js.map

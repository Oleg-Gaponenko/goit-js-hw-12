import{a as u,S as f,i as n}from"./assets/vendor-DVva8SYe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const h="23726631-21d3c8e5c551d1cabdf8b5ecc";function y(r){return u.get("https://pixabay.com/api/",{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>{throw console.log(t),t})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function v(r){const t=r.map(({webformatURL:s,largeImageURL:a,tags:e,likes:i,views:o,comments:p,downloads:m})=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${a}"
      alt="${e}"
    />
  </a>
  <div class="info">
  <div class="info-item">
   <p class="title">Likes</p>
   <p class="item">${i}</p>
  </div>
  <div class="info-item">
   <p class="title">Views</p>
   <p class="item">${o}</p>
  </div>
  <div class="info-item">
   <p class="title">Comments</p>
   <p class="item">${p}</p>
  </div>
  <div class="info-item">
  <p class="title">Downloads</p>
  <p class="item">${m}</p>
  </div>
  </div>
</li>
`).join("");l.innerHTML=t,g.refresh()}function L(){l.innerHTML=""}function x(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}const d=document.querySelector(".form");d.addEventListener("submit",S);function S(r){r.preventDefault();const t=r.target.elements["search-text"].value.trim();if(t===""){n.error({message:"Please enter your search query!",position:"topRight",maxWidth:"450px"});return}x(),L(),y(t).then(s=>{s.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"450px"}):v(s)}).catch(s=>{n.error({message:"Cannot fetch images",position:"topRight",maxWidth:"450px"})}).finally(()=>{b(),d.reset()})}
//# sourceMappingURL=index.js.map

import{a as u,S as f,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="23726631-21d3c8e5c551d1cabdf8b5ecc";async function g(s,i){try{return(await u.get("https://pixabay.com/api/",{params:{key:y,q:s,per_page:15,page:1,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw console.log(r),r}}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");document.querySelector(".load-more-button");const h=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function v(s){const i=s.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:o,comments:d,downloads:m})=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${a}"
      alt="${e}"
    />
  </a>
  <div class="info">
  <div class="info-item">
   <p class="title">Likes</p>
   <p class="item">${t}</p>
  </div>
  <div class="info-item">
   <p class="title">Views</p>
   <p class="item">${o}</p>
  </div>
  <div class="info-item">
   <p class="title">Comments</p>
   <p class="item">${d}</p>
  </div>
  <div class="info-item">
  <p class="title">Downloads</p>
  <p class="item">${m}</p>
  </div>
  </div>
</li>
`).join("");l.innerHTML=i,h.refresh()}function L(){l.innerHTML=""}function x(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}const p=document.querySelector(".form");p.addEventListener("submit",S);function S(s){s.preventDefault();const i=s.target.elements["search-text"].value.trim();if(i===""){n.error({message:"Please enter your search query!",position:"topRight",maxWidth:"450px"});return}x(),L(),g(i).then(r=>{r.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"450px"}):v(r)}).catch(r=>{n.error({message:"Cannot fetch images",position:"topRight",maxWidth:"450px"})}).finally(()=>{b(),p.reset()})}
//# sourceMappingURL=index.js.map

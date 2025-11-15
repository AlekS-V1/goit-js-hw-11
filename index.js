import{a as h,S as f,i as m}from"./assets/vendor-Dy2ZTtfi.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(s){const a=new URLSearchParams({key:"513303310-9209d844650666afb5a4e1e7c",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return h.get(`https://pixabay.com/api/?${a}`).then(r=>r.data.hits).catch(r=>console.log(r.message))}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");let y=new f(".largeImage",{captionsData:"alt",captionDelay:250});function g(s){const a=s.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:o,comments:d,downloads:u})=>`<li class="card">
                <a href="${l}" class="largeImage">
                    <img src="${r}" class="webFormat" alt="${e}" />
                </a>

                <div class="container-lable">
                    <div class="label">
                        <h3 class="headrLable">Likes</h3>
                        <p class="textLable">${t}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Views</h3>
                        <p class="textLable">${o}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Comments</h3>
                        <p class="textLable">${d}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Downloads</h3>
                        <p class="textLable">${u}</p>
                    </div>
                </div>
        </li>`).join("");n.innerHTML=a,y.refresh()}function L(){n.innerHTML=""}function b(){c.classList.remove("hidden")}function v(){c.classList.add("hidden")}const x=document.querySelector(".form"),i=document.querySelector('input[name="search-text"]');x.addEventListener("submit",s=>{s.preventDefault();const a=i.value.trim();if(i.value===""||i.value===" ")return i.value="";L(),b(),p(a).then(r=>{if(r.length<=0)return m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});g(r)}).finally(()=>{v()}),s.target.reset()});
//# sourceMappingURL=index.js.map

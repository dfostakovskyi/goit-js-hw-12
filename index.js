import{a as L,i as l,S as h}from"./assets/vendor-D73Uttp0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const v="46850539-7e4ca2d811908faae801b6294",w="https://pixabay.com/api/";async function y(o,r=1,a=15){const s={key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:a},e=`${w}`;try{return(await L.get(e,{params:s})).data}catch(t){throw new Error(t.response?t.response.statusText:t.message)}}function g(o){return o.map(({webformatURL:r,largeImageURL:a,tags:s,likes:e,views:t,comments:i,downloads:b})=>`
        <li class="gallery_item" >
            <a href="${a}">
        <img src="${r}" alt="${s}" width="360px" >
        </a>
            <div class="gallery_data">
            <table>
    <tr>
    <th>Likes</th>
    <th>Views</th>
    <th>Comments</th>
    <th>Downloads</th>
  </tr>
  <tr>
    <td>${e}</td>
    <td>${t}</td>
    <td>${i}</td>
    <td>${b}</td>
  </tr>
 
</table>
</div>

        </li>
    `).join("")}const S=document.querySelector(".input-forme"),m=document.querySelector(".gallery"),f=document.querySelector("#div-load-btn"),u=document.querySelector(".line-loader"),p=document.querySelector("#end-message");S.addEventListener("submit",q);document.querySelector("#load-btn").addEventListener("click",E);let n=1,c=0,d="";async function q(o){if(o.preventDefault(),d=document.querySelector("#input-user").value.trim(),d===""){l.error({title:"Error",message:"Please enter a search term."});return}m.innerHTML="",n=1,p.classList.add("invisible"),f.classList.add("invisible");try{u.classList.remove("invisible");const r=await y(d.toLowerCase(),n,15);console.log("API Response:",r),c=r.totalHits,c>0?(m.insertAdjacentHTML("beforeend",g(r.hits)),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),c>15&&f.classList.remove("invisible")):l.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(r){l.error({title:"Error",message:"Error fetching data"}),console.error("Error fetching data:",r)}finally{u.classList.add("invisible")}document.querySelector("#input-user").value=""}async function E(){n++;try{u.classList.remove("invisible");const o=await y(d.toLowerCase(),n,15);console.log("API Response:",o),m.insertAdjacentHTML("beforeend",g(o.hits)),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh();const s=document.querySelector(".gallery_item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),n*15>=c&&(f.classList.add("invisible"),p.classList.remove("invisible"))}catch(o){l.error({title:"Error",message:"Error fetching more data"}),console.error("Error fetching more data:",o)}finally{u.classList.add("invisible")}}
//# sourceMappingURL=index.js.map

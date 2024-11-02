import{i as a,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="46850539-7e4ca2d811908faae801b6294",f="https://pixabay.com/api/";function h(i,o=1,r=200){const n=new URLSearchParams({key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:r}),e=`${f}?${n.toString()}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function m(i){return i.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:s,downloads:l})=>`
        <li class="gallery_item" >
            <a href="${r}">
        <img src="${o}" alt="${n}" width="360px" >
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
    <td>${s}</td>
    <td>${l}</td>
  </tr>
 
</table>
</div>

        </li>
    `).join("")}const p=document.querySelector(".input-forme"),c=document.querySelector(".gallery");p.addEventListener("submit",y);let g=1;function y(i){i.preventDefault();const o=document.querySelector("#input-user").value.trim();if(o===""){a.error({title:"Error",message:"Please enter a search term."});return}c.innerHTML="",h(o.toLowerCase(),g,200).then(r=>{console.log("API Response:",r),r.totalHits>0?(c.insertAdjacentHTML("beforeend",m(r.hits)),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()):a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>{a.error({title:"Error",message:"Error fetching data"}),console.error("Error fetching data:",r)}),document.querySelector("#input-user").value=""}
//# sourceMappingURL=index.js.map

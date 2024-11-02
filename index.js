import{i as a,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="46850539-7e4ca2d811908faae801b6294",h="https://pixabay.com/api/";function m(s){const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),r=`${h}?${o.toString()}`;return fetch(r).then(n=>{if(!n.ok)throw new Error(n.statusText);return n.json()})}function p(s){return s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:u})=>`
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
    <td>${i}</td>
    <td>${u}</td>
  </tr>
 
</table>
</div>

        </li>
    `).join("")}const y=document.querySelector(".input-forme"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");y.addEventListener("submit",g);function g(s){s.preventDefault();const o=document.querySelector("#input-user").value.trim();if(o===""){a.error({title:"Error",message:"Please enter a search term."});return}l.style.display="block",c.innerHTML="",m(o.toLowerCase()).then(r=>{l.style.display="none",console.log("API Response:",r),r.totalHits>0?(c.insertAdjacentHTML("beforeend",p(r.hits)),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()):a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>{l.style.display="none",a.error({title:"Error",message:"Error fetching data"}),console.error("Error fetching data:",r)}),document.querySelector("#input-user").value=""}
//# sourceMappingURL=index.js.map

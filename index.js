import{a as L,S as v,i as l}from"./assets/vendor-D73Uttp0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const w="46850539-7e4ca2d811908faae801b6294",S="https://pixabay.com/api/";async function h(o,r=1,s=15){const i={key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:s},e=`${S}`;try{return(await L.get(e,{params:i})).data}catch(t){throw new Error(t.response?t.response.statusText:t.message)}}function y(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:b})=>`
        <li class="gallery_item">
            <a href="${s}">
                <img src="${r}" alt="${i}" width="360px">
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
                        <td>${a}</td>
                        <td>${b}</td>
                    </tr>
                </table>
            </div>
        </li>
    `).join("")}const q=document.querySelector(".input-forme"),m=document.querySelector(".gallery"),f=document.querySelector("#div-load-btn"),E=document.querySelector("#load-btn"),u=document.querySelector(".line-loader"),g=document.querySelector("#end-message");q.addEventListener("submit",P);E.addEventListener("click",M);let n=1,c=0,d="";const p=new v(".gallery a",{captionsData:"alt",captionDelay:250});async function P(o){if(o.preventDefault(),d=document.querySelector("#input-user").value.trim(),d===""){l.error({title:"Error",message:"Please enter a search term."});return}m.innerHTML="",n=1,g.classList.add("invisible"),f.classList.add("invisible");try{u.classList.remove("invisible");const r=await h(d.toLowerCase(),n,15);console.log("API Response:",r),c=r.totalHits,c>0?(m.insertAdjacentHTML("beforeend",y(r.hits)),p.refresh(),c>15&&f.classList.remove("invisible")):l.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(r){l.error({title:"Error",message:"Error fetching data"}),console.error("Error fetching data:",r)}finally{u.classList.add("invisible")}document.querySelector("#input-user").value=""}async function M(){n++;try{u.classList.remove("invisible");const o=await h(d.toLowerCase(),n,15);console.log("API Response:",o),m.insertAdjacentHTML("beforeend",y(o.hits)),p.refresh();const s=document.querySelector(".gallery_item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),n*15>=c&&(f.classList.add("invisible"),g.classList.remove("invisible"))}catch(o){l.error({title:"Error",message:"Error fetching more data"}),console.error("Error fetching more data:",o)}finally{u.classList.add("invisible")}}
//# sourceMappingURL=index.js.map

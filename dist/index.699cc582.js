document.querySelectorAll(".radio-input"),document.querySelector(".quiz__answers");const e=document.querySelector(".bookmark"),o=document.querySelectorAll(".accordion__icons"),c=document.querySelectorAll(".accordion__body"),t=document.querySelector(".modal"),r=function(e){t.style.display=this};e.addEventListener("mouseover",r.bind("block")),e.addEventListener("mouseout",r.bind("none")),o.forEach(e=>{e.addEventListener("click",e=>{let o=e.target.closest(".accordion__icon");if(!o)return;let t=o.closest(".accordion__body");c.forEach(e=>{e!==t&&e.classList.remove("active-color")}),t.classList.toggle("active-color")})});
//# sourceMappingURL=index.699cc582.js.map

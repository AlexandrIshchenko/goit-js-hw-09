const t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.addEventListener("click",(function(){if(a)return;r=setInterval(d,1e3),a=e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(r),a=e.disabled=!1}));let r=null,a=e.disabled=!1;function d(){return t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.9404b764.js.map
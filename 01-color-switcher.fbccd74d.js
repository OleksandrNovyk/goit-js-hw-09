const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),o=document.querySelector("[data-reset]");let d=null;function a(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}r.setAttribute("disabled",""),e.addEventListener("click",(o=>{o.target.setAttribute("disabled",!0),r.removeAttribute("disabled"),d=setInterval((()=>{t.style.backgroundColor=a(),e.style.backgroundColor=a(),r.style.backgroundColor=a()}),1e3)})),r.addEventListener("click",(t=>{t.target.setAttribute("disabled",!0),e.removeAttribute("disabled"),clearInterval(d)})),o.addEventListener("click",(()=>{location.reload()}));
//# sourceMappingURL=01-color-switcher.fbccd74d.js.map

var r=document.querySelector("ul"),t=Array.from(document.querySelectorAll("li"));function e(r){return parseInt(r.getAttribute("data-salary").replace(/[^0-9.-]+/g,""),10)}t.sort(function(r,t){return e(t)-e(r)}),r.innerHTML="",t.forEach(function(t){return r.appendChild(t)}),t.map(function(r){return{name:r.textContent.trim(),salary:e(r)}});
//# sourceMappingURL=index.931e2600.js.map

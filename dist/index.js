(()=>{var e,r,t,n,o,a,i={},s={};function l(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={id:e,loaded:!1,exports:{}};return i[e](t,t.exports,l),t.loaded=!0,t.exports}l.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(o,a,i)=>{var s;i&&((s=[]).d=-1);var l,c,u,d=new Set,p=o.exports,f=new Promise(((e,r)=>{u=r,c=e}));f[r]=p,f[e]=e=>(s&&e(s),d.forEach(e),f.catch((e=>{}))),o.exports=f,a((o=>{var a;l=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[r]=e,n(a)}),(e=>{i[t]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[r]=o,s})))(o);var i=()=>l.map((e=>{if(e[t])throw e[t];return e[r]})),c=new Promise((r=>{(a=()=>r(i)).r=0;var t=e=>e!==s&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));l.map((r=>r[e](t)))}));return a.r?c:i()}),(e=>(e?u(f[t]=e):c(p),n(s)))),s&&s.d<0&&(s.d=0)},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((r,t)=>(l.f[t](e,r),r)),[])),l.u=e=>e+".index.js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},a="image-filter:",l.l=(e,r,t,n)=>{if(o[e])o[e].push(r);else{var i,s;if(void 0!==t)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+t){i=d;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",a+t),i.src=e),o[e]=[r];var p=(r,t)=>{i.onerror=i.onload=null,clearTimeout(f);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.v=(e,r,t,n)=>{var o=fetch(l.p+""+t+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((r=>Object.assign(e,r.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((r=>Object.assign(e,r.instance.exports)))},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var r=l.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.f.j=(r,t)=>{var n=l.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=l.p+l.u(r),i=new Error;l.l(a,(t=>{if(l.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,s]=t,c=0;if(a.some((r=>0!==e[r]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);s&&s(l)}for(r&&r(t);c<a.length;c++)o=a[c],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkimage_filter=self.webpackChunkimage_filter||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),(async()=>{let e=null;try{e=await l.e(235).then(l.bind(l,235))}catch(e){return void console.error(e)}const r=document.getElementById("upload"),t=new FileReader;t.onloadend=()=>{const r=t.result.replace(/^data:image\/(jpe?g|png|gif);base64,/,""),n=e.grayscale(r);document.getElementById("new-img").setAttribute("src",n)},r.addEventListener("change",(()=>{t.readAsDataURL(r.files[0])}))})()})();
if(!self.define){let o,i={};const e=(e,n)=>(e=new URL(e+".js",n).href,i[e]||new Promise((i=>{if("document"in self){const o=document.createElement("script");o.src=e,o.onload=i,document.head.appendChild(o)}else o=e,importScripts(e),i()})).then((()=>{let o=i[e];if(!o)throw new Error(`Module ${e} didn’t register its module`);return o})));self.define=(n,r)=>{const s=o||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const l=o=>e(o,s),t={module:{uri:s},exports:c,require:l};i[s]=Promise.all(n.map((o=>t[o]||l(o)))).then((o=>(r(...o),c)))}}define(["./workbox-6567b62a"],(function(o){"use strict";o.setCacheNameDetails({prefix:"bookit-v2-frontend"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/Bookit-V2-Working/android-chrome-192x192.png",revision:"ab15a36676c5e3c90d30c0f7abeb0523"},{url:"/Bookit-V2-Working/android-chrome-512x512.png",revision:"fc08f3ac6405f8f9c8af81e76acea1ce"},{url:"/Bookit-V2-Working/apple-touch-icon.png",revision:"3ea186252858b6b0b54a43ca2315d871"},{url:"/Bookit-V2-Working/css/app.8430bf87.css",revision:null},{url:"/Bookit-V2-Working/css/chunk-vendors.eb3be2cc.css",revision:null},{url:"/Bookit-V2-Working/favicon-16x16.png",revision:"a359142013816ddcc330a445c7e478cc"},{url:"/Bookit-V2-Working/favicon-32x32.png",revision:"b207b29e9d74ceebdcaebbf372050895"},{url:"/Bookit-V2-Working/img/Bookitwh.50273ee1.webp",revision:null},{url:"/Bookit-V2-Working/img/Signup.4d451c2f.webp",revision:null},{url:"/Bookit-V2-Working/img/bgfinal.7438be6c.webp",revision:null},{url:"/Bookit-V2-Working/img/bgreadbook.2efee700.png",revision:null},{url:"/Bookit-V2-Working/img/cross.a0d9478d.svg",revision:null},{url:"/Bookit-V2-Working/img/sideimg.1ce4f96d.webp",revision:null},{url:"/Bookit-V2-Working/img/singlebook.bbde2976.webp",revision:null},{url:"/Bookit-V2-Working/index.html",revision:"35290ed530adfb99aadcc281b4ac92f2"},{url:"/Bookit-V2-Working/js/app.2b4137b1.js",revision:null},{url:"/Bookit-V2-Working/js/chunk-vendors.c0ca3b76.js",revision:null},{url:"/Bookit-V2-Working/manifest.json",revision:"6c431f05f23b3567aaca1f39ff9bc9d8"},{url:"/Bookit-V2-Working/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/Bookit-V2-Working/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"}],{})}));
//# sourceMappingURL=service-worker.js.map
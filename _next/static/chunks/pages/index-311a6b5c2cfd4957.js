(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2603)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(4788),a=r(8754),i=r(1757),o=r(224),s=i._(r(7294)),l=a._(r(2636)),c=r(7757),d=r(3735),u=r(3341);r(4210);let f=a._(r(7746)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,a,i,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;a.current(n._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}function _(e){let[t,r]=s.version.split("."),n=parseInt(t,10),a=parseInt(r,10);return n>18||18===n&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let x=(0,s.forwardRef)((e,t)=>{var{imgAttributes:r,heightInt:a,widthInt:i,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fetchPriority:p,fill:m,placeholder:h,loading:x,srcString:v,config:b,unoptimized:j,loader:w,onLoadRef:y,onLoadingCompleteRef:E,setBlurComplete:N,setShowAltText:S,onLoad:C,onError:k}=e,z=o._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return x=f?"lazy":x,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",n._({},z,_(p),{loading:x,width:i,height:a,decoding:"async","data-nimg":m?"fill":"1",className:c,style:n._({},d,u)},r,{ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&g(e,v,h,y,E,N,j))},[v,h,y,E,N,k,j,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,h,y,E,N,j)},onError:e=>{S(!0),"blur"===h&&N(!0),k&&k(e)}})))}),v=(0,s.forwardRef)((e,t)=>{let r,a;var i,{src:g,sizes:v,unoptimized:b=!1,priority:j=!1,loading:w,className:y,quality:E,width:N,height:S,fill:C,style:k,onLoad:z,onLoadingComplete:P,placeholder:I="empty",blurDataURL:L,fetchPriority:R,layout:O,objectFit:A,objectPosition:M,lazyBoundary:F,lazyRoot:H}=e,D=o._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=(0,s.useContext)(u.ImageConfigContext),T=(0,s.useMemo)(()=>{let e=p||B||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n._({},e,{allSizes:t,deviceSizes:r})},[B]),G=D,W=G.loader||f.default;delete G.loader;let q="__next_img_default"in W;if(q){if("custom"===T.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:r}=t,n=o._(t,["config"]);return e(n)}}if(O){"fill"===O&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(k=n._({},k,e));let t={responsive:"100vw",fill:"100vw"}[O];t&&!v&&(v=t)}let V="",U=h(N),X=h(S);if("object"==typeof(i=g)&&(m(i)||void 0!==i.src)){let e=m(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,a=e.blurHeight,L=L||e.blurDataURL,V=e.src,!C){if(U||X){if(U&&!X){let t=U/e.width;X=Math.round(e.height*t)}else if(!U&&X){let t=X/e.height;U=Math.round(e.width*t)}}else U=e.width,X=e.height}}let J=!j&&("lazy"===w||void 0===w);(!(g="string"==typeof g?g:V)||g.startsWith("data:")||g.startsWith("blob:"))&&(b=!0,J=!1),T.unoptimized&&(b=!0),q&&g.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(b=!0),j&&(R="high");let[Q,Y]=(0,s.useState)(!1),[Z,$]=(0,s.useState)(!1),K=h(E),ee=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:M}:{},Z?{}:{color:"transparent"},k),et="blur"===I&&L&&!Q?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,c.getImageBlurSvg)({widthInt:U,heightInt:X,blurWidth:r,blurHeight:a,blurDataURL:L,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:i,sizes:o,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:i,kind:"x"}}(t,a,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,n)=>"".concat(s({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:s({config:t,src:r,quality:i,width:l[d]})}}({config:T,src:g,unoptimized:b,width:U,quality:K,sizes:v,loader:W}),en=g,ea=(0,s.useRef)(z);(0,s.useEffect)(()=>{ea.current=z},[z]);let ei=(0,s.useRef)(P);(0,s.useEffect)(()=>{ei.current=P},[P]);let eo=n._({isLazy:J,imgAttributes:er,heightInt:X,widthInt:U,qualityInt:K,className:y,imgStyle:ee,blurStyle:et,loading:w,config:T,fetchPriority:R,fill:C,unoptimized:b,placeholder:I,loader:W,srcString:en,onLoadRef:ea,onLoadingCompleteRef:ei,setBlurComplete:Y,setShowAltText:$},G);return s.default.createElement(s.default.Fragment,null,s.default.createElement(x,n._({},eo,{ref:t})),j?s.default.createElement(l.default,null,s.default.createElement("link",n._({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:G.crossOrigin},_(R)))):null)}),b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:i,objectFit:o}=e,s=n||t,l=a||r,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&a?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},2603:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),a=r(183),i=r.n(a),o=r(9008),s=r.n(o),l=r(5675),c=r.n(l),d=r(9034),u=r.n(d);function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:"".concat(u().main," ").concat(i().className),children:[(0,n.jsxs)("div",{className:u().description,children:[(0,n.jsxs)("p",{children:["Get started by editing\xa0",(0,n.jsx)("code",{className:u().code,children:"pages/index.tsx"})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,n.jsx)(c(),{src:"/vercel.svg",alt:"Vercel Logo",className:u().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,n.jsx)("div",{className:u().center,children:(0,n.jsx)(c(),{className:u().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0})}),(0,n.jsxs)("div",{className:u().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Docs ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Learn ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,n.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Templates ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Deploy ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},183:function(e){e.exports={style:{fontFamily:"'__Inter_ccafe3', '__Inter_Fallback_ccafe3'",fontStyle:"normal"},className:"__className_ccafe3"}},9034:function(e){e.exports={main:"Home_main__nLjiQ",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9",rotate:"Home_rotate____XsI"}},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2269)}])},3271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});let i=r(8754),n=r(1757),o=n._(r(7294)),l=i._(r(3935)),s=i._(r(9201)),a=r(3914),u=r(5494),d=r(869);r(1905);let c=r(1823),f=i._(r(4545)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/noscasamos/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function handleLoading(e,t,r,i,n,o){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function getDynamicProps(e){let[t,r]=o.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:l,width:s,decoding:a,className:u,style:d,fetchPriority:c,placeholder:f,loading:g,unoptimized:p,fill:m,onLoadRef:h,onLoadingCompleteRef:b,setBlurComplete:v,setShowAltText:w,onLoad:_,onError:y,...x}=e;return o.default.createElement("img",{...x,...getDynamicProps(c),loading:g,width:s,height:l,decoding:a,"data-nimg":m?"fill":"1",className:u,style:d,sizes:n,srcSet:i,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(y&&(e.src=e.src),e.complete&&handleLoading(e,f,h,b,v,p))},[r,f,h,b,v,y,p,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,f,h,b,v,p)},onError:e=>{w(!0),"empty"!==f&&v(!0),y&&y(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...getDynamicProps(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):o.default.createElement(s.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let m=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(c.RouterContext),i=(0,o.useContext)(d.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=g||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:s}=e,m=(0,o.useRef)(l);(0,o.useEffect)(()=>{m.current=l},[l]);let h=(0,o.useRef)(s);(0,o.useEffect)(()=>{h.current=s},[s]);let[b,v]=(0,o.useState)(!1),[w,_]=(0,o.useState)(!1),{props:y,meta:x}=(0,a.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:b,showAltText:w});return o.default.createElement(o.default.Fragment,null,o.default.createElement(p,{...y,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:_,ref:t}),x.priority?o.default.createElement(ImagePreload,{isAppRouter:!r,imgAttributes:y}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),r(1905);let i=r(2393),n=r(5494);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var r;let o,l,s,{src:a,sizes:u,unoptimized:d=!1,priority:c=!1,loading:f,className:g,quality:p,width:m,height:h,fill:b=!1,style:v,onLoad:w,onLoadingComplete:_,placeholder:y="empty",blurDataURL:x,fetchPriority:S,layout:j,objectFit:P,objectPosition:E,lazyBoundary:C,lazyRoot:I,...z}=e,{imgConf:O,showAltText:k,blurComplete:N,defaultLoader:R}=t,M=O||n.imageConfigDefault;if("allSizes"in M)o=M;else{let e=[...M.deviceSizes,...M.imageSizes].sort((e,t)=>e-t),t=M.deviceSizes.sort((e,t)=>e-t);o={...M,allSizes:e,deviceSizes:t}}let L=z.loader||R;delete z.loader,delete z.srcSet;let A="__next_img_default"in L;if(A){if("custom"===o.loader)throw Error('Image with src "'+a+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(j){"fill"===j&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!u&&(u=t)}let D="",B=getInt(m),F=getInt(h);if("object"==typeof(r=a)&&(isStaticRequire(r)||void 0!==r.src)){let e=isStaticRequire(a)?a.default:a;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,s=e.blurHeight,x=x||e.blurDataURL,D=e.src,!b){if(B||F){if(B&&!F){let t=B/e.width;F=Math.round(e.height*t)}else if(!B&&F){let t=F/e.height;B=Math.round(e.width*t)}}else B=e.width,F=e.height}}let G=!c&&("lazy"===f||void 0===f);(!(a="string"==typeof a?a:D)||a.startsWith("data:")||a.startsWith("blob:"))&&(d=!0,G=!1),o.unoptimized&&(d=!0),A&&a.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(d=!0),c&&(S="high");let W=getInt(p),q=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:E}:{},k?{}:{color:"transparent"},v),T=N||"empty"===y?null:"blur"===y?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:B,heightInt:F,blurWidth:l,blurHeight:s,blurDataURL:x||"",objectFit:q.objectFit})+'")':'url("'+y+'")',U=T?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:T}:{},V=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:l,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,l),d=a.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:a.map((e,i)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:s({config:t,src:r,quality:o,width:a[d]})}}({config:o,src:a,unoptimized:d,width:B,quality:W,sizes:u,loader:L}),J={...z,loading:G?"lazy":f,fetchPriority:S,width:B,height:F,decoding:"async",className:g,style:{...q,...U},sizes:V.sizes,srcSet:V.srcSet,src:V.src},X={unoptimized:d,priority:c,placeholder:y,fill:b};return{props:J,meta:X}}},2393:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:l}=e,s=i?40*i:t,a=n?40*n:r,u=s&&a?"viewBox='0 0 "+s+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return a}});let i=r(8754),n=r(3914),o=r(1905),l=r(3271),s=i._(r(4545)),unstable_getImgProps=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/noscasamos/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},a=l.Image},4545:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),defaultLoader.__next_img_default=!0;let r=defaultLoader},2269:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return App}});var i=r(5893),n=r(5675),o=r.n(n);let Footer=()=>(0,i.jsx)("footer",{className:"flex flex-col w-full bg-black text-white",children:(0,i.jsxs)("div",{className:"p-8",children:[(0,i.jsxs)("p",{className:"flex flex-row justify-center tracking-widest  leading-6",children:[(0,i.jsx)("span",{className:"pr-2",children:"Vir"}),(0,i.jsx)(o(),{src:"/noscasamos/icons/rings-white.svg",height:24,width:50,alt:"Anillos entrelazados"}),(0,i.jsx)("span",{className:"pl-2",children:"Seba"})]}),(0,i.jsx)("p",{className:"flex flex-row justify-center tracking-widest  leading-6",children:"02 de Marzo 2025"})]})});function App(e){let{Component:t,pageProps:r}=e;return(0,i.jsxs)("div",{className:"bg-light-brown min-h-screen",children:[(0,i.jsx)(t,{...r})," ",(0,i.jsx)(Footer,{})]})}r(415)},415:function(){},5675:function(e,t,r){e.exports=r(645)}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(6840),__webpack_exec__(9974)}),_N_E=e.O()}]);
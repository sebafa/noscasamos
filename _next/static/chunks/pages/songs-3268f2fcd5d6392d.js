(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[750],{9234:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/songs",function(){return t(5787)}])},6720:function(e,s){"use strict";s.Z={src:"/noscasamos//_next/static/media/tile-background.020780c2.png",height:656,width:656,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAJ1BMVEX37ub68en58On58Oj47+f37ub78ur68en58Oj47+f37+f37ub27eX4z4UdAAAABnRSTlP8/v7+/v7yKxypAAAAMUlEQVR42mPY2dlRzNCxu2MyQ3t7dzND55ztjQyV06ubGWbOrJrMsLOyPZnBWFkkAABi0hA4FKWMTwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},7818:function(e,s,t){"use strict";t.d(s,{B:function(){return addSongsSuggestions},h:function(){return addGuest}});var a=t(3977),n=t(9828);let l=(0,a.ZF)({apiKey:"AIzaSyDs9zGrnw6R3qfKZswGPKWL-9pnBpL1_rc",authDomain:"invitados-d8317.firebaseapp.com",projectId:"invitados-d8317",storageBucket:"invitados-d8317.appspot.com",messagingSenderId:"907344341198",appId:"1:907344341198:web:5c57149d18856f8357489f",measurementId:"G-B7JDMRLV3G"}),i=(0,n.ad)(l),addGuest=async e=>{try{let s=await (0,n.ET)((0,n.hJ)(i,"guests"),e);console.log("Document written with ID: ",s.id)}catch(e){console.error("Error adding document: ",e)}},addSongsSuggestions=async e=>{try{let s=await (0,n.ET)((0,n.hJ)(i,"songsSuggestions"),e);console.log("Document written with ID: ",s.id)}catch(e){console.error("Error adding document: ",e)}}},7977:function(e,s,t){"use strict";var a=t(5893),n=t(5675),l=t.n(n);s.Z=e=>{let s,{imageSrc:t,imageAlt:n,text:i,height:c,width:r,textSize:o="lg"}=e;switch(o){case"sm":s="text-sm";break;case"md":s="text-md";break;case"lg":s="text-lg";break;case"xl":s="text-xl";break;case"2xl":s="text-2xl";break;case"3xl":s="text-3xl";break;case"4xl":s="text-4xl";break;default:s="text-base"}return(0,a.jsxs)("header",{className:"flex bg-white flex-col m-auto items-center w-full max-w-5xl mt-14 pt-6",children:[(0,a.jsx)(l(),{src:t,height:c,width:r,alt:n}),(0,a.jsx)("p",{className:"tracking-widest leading-6 pt-6 text-center ".concat(s),children:i})]})}},6629:function(e,s,t){"use strict";t.d(s,{B:function(){return NavigationHeader}});var a=t(5893),n=t(4990),l=t(5675),i=t.n(l),c=t(1664),r=t.n(c),o=t(1163),d=t(7294);let NavigationHeader=()=>{let e=(0,o.useRouter)(),[s,t]=(0,d.useState)(!1),[l,c]=(0,d.useState)(!1),[u,x]=(0,d.useState)(!1),h=(0,d.useRef)(null),m=(0,n.a)("(max-width: 1023px)"),handleClick=e=>{t(!s),c(!0),setTimeout(()=>c(!1),300)};return(0,d.useEffect)(()=>{x(m)},[m]),(0,d.useEffect)(()=>{if(s)return document.addEventListener("click",handleClickOutside),()=>document.removeEventListener("click",handleClickOutside);function handleClickOutside(e){h.current&&!h.current.contains(e.target)&&t(!1)}},[s]),(0,a.jsx)("header",{className:"fixed z-20 w-full top-0 flex flex-row justify-center bg-black text-white pl-6 py-4 lg:px-20",children:(0,a.jsxs)("div",{className:"flex w-full flex-row justify-between max-w-5xl",children:[(0,a.jsx)("h1",{children:(0,a.jsxs)(r(),{href:"/",className:"flex font-normal  leading-6",children:[(0,a.jsx)("span",{className:"pr-2",children:"Vir"}),(0,a.jsx)(i(),{src:"/noscasamos/icons/rings-white.svg",height:24,width:50,alt:"Anillos entrelazados"}),(0,a.jsx)("span",{className:"pl-2",children:"Seba"})]})}),u?(0,a.jsxs)("div",{ref:h,className:"flex flex-col w-3/5 items-end relative justify-end",children:[(0,a.jsx)("button",{className:"mr-6",onClick:handleClick,disabled:l,children:s?(0,a.jsx)(i(),{src:"/noscasamos/icons/icon_close.svg",height:24,width:25,alt:"Anillos entrelazados"}):(0,a.jsx)(i(),{src:"/noscasamos/icons/burguer-menu.svg",height:24,width:25,alt:"Anillos entrelazados"})}),(0,a.jsxs)("nav",{className:s?"fixed z-10 top-14 w-2/3 h-full bg-black transition duration-300 ease-out":"fixed z-10 top-14 w-2/3 h-full bg-black transition duration-300 ease-in scale-x-0 translate-x-full",children:[(0,a.jsx)("div",{className:"flex flex-col tracking-widest  leading-6 px-4 pt-10 ".concat("/"===e.pathname&&"font-bold underline"),children:(0,a.jsx)(r(),{href:"/",children:"\xa1BIENVENIDOS!"})}),(0,a.jsx)("div",{className:"flex flex-col tracking-widest  leading-6 px-4 pt-6 ".concat("/about-us"===e.pathname&&"font-bold underline"),children:(0,a.jsx)(r(),{href:"/#about-us",onClick:handleClick,children:"SOBRE NOSOTROS"})}),(0,a.jsx)("div",{className:"flex flex-col tracking-widest  leading-6 px-4 pt-6 ".concat("/confirmation"===e.pathname&&"font-bold underline"),children:(0,a.jsx)(r(),{href:"/confirmation",children:"CONFIRMAR ASISTENCIA"})}),(0,a.jsx)("div",{className:"flex flex-col tracking-widest  leading-6 px-4 pt-6 ".concat("/songs"===e.pathname&&"font-bold underline"),children:(0,a.jsx)(r(),{href:"/songs",children:"PED\xcd TUS TEMAZOS"})})]})]}):(0,a.jsxs)("nav",{className:"flex space-x-6 leading-6  text-white",children:[(0,a.jsx)(r(),{href:"/",className:"".concat("/"===e.pathname&&"font-bold underline"),children:"\xa1BIENVENIDOS!"}),(0,a.jsx)(r(),{href:"/#about-us",className:"".concat("/about-us"===e.pathname&&"font-bold underline"),children:"SOBRE NOSOTROS"}),(0,a.jsx)(r(),{href:"/confirmation",className:"".concat("/confirmation"===e.pathname&&"font-bold underline"),children:"CONFIRMAR ASISTENCIA"}),(0,a.jsx)(r(),{href:"/songs",className:"".concat("/songs"===e.pathname&&"font-bold underline"),children:"PED\xcd TUS TEMAZOS"})]})]})})}},5787:function(e,s,t){"use strict";t.r(s);var a=t(5893),n=t(7818),l=t(7977),i=t(6629),c=t(6720),r=t(4990),o=t(5675),d=t.n(o),u=t(1163),x=t(7294);s.default=()=>{let e=(0,u.useRouter)(),[s,t]=(0,x.useState)(!1),[o,h]=(0,x.useState)(!1),m=(0,r.a)("(max-width: 1023px)");(0,x.useEffect)(()=>{h(m)},[m]);let handleSubmit=async s=>{s.preventDefault(),t(!0);let a={songsSuggestions:s.target.songs.value};await (0,n.B)(a).then(()=>{e.push("/songs-confirmation")}).catch(e=>{t(!1),console.log(e)})};return(0,a.jsxs)("div",{style:{backgroundImage:"url(".concat(c.Z.src,")"),backgroundRepeat:"repeat"},children:[(0,a.jsx)(i.B,{}),(0,a.jsxs)("div",{className:"min-h-[calc(100vh-112px)] max-w-5xl m-auto bg-white lg:text-base ",children:[(0,a.jsx)("div",{className:"lg:pt-14",children:(0,a.jsx)(l.Z,{imageSrc:"".concat("/noscasamos/images/","date-rings-large.svg"),imageAlt:"Anillos de boda entrelazados",text:"\xbfQu\xe9 es una fiesta sin temazos?",height:108,width:150,textSize:"16"})}),(0,a.jsxs)("div",{className:"px-6 lg:px-44 relative",children:[(0,a.jsx)("h3",{className:"tracking-widest pt-10 ",children:"\xbfQU\xc9 TE GUSTAR\xcdA QUE SONARA EN LA FIESTA?"}),(0,a.jsxs)("form",{onSubmit:handleSubmit,className:"flex flex-col",children:[(0,a.jsx)("label",{className:" text-primary-brown pt-4 z-10",htmlFor:"songs",children:"Te dejamos este espacio para que escribas tu canci\xf3n"}),(0,a.jsx)("textarea",{className:"z-10 bg-light-grey border border-primary-grey italic p-3 mt-2",id:"songs",name:"songs",rows:4,cols:50,required:!0,placeholder:"..."}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{className:"py-3 px-10 mt-8 font-bold tracking-widest leading-6 bg-primary-brown text-white",type:"submit",disabled:s,children:"ENVIAR"})})]}),(0,a.jsx)("div",{className:"pb-4 mt-[-16px] lg:mt-[-48px] lg:ml-[-148px]",children:(0,a.jsx)(d(),{src:"".concat("/noscasamos/images/","disco-dancing.svg"),height:o?233:410,width:o?272:477,alt:"Pareja bailando en la disco"})})]})]})]})}}},function(e){e.O(0,[16,190,868,774,888,179],function(){return e(e.s=9234)}),_N_E=e.O()}]);
(this.webpackJsonpnatsu=this.webpackJsonpnatsu||[]).push([[0],{49:function(n,e,t){n.exports=t.p+"static/media/natsu_kanji.18169d19.svg"},56:function(n,e,t){n.exports=t(89)},61:function(n,e,t){},89:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(46),o=t.n(r),c=(t(61),t(4)),u=t(13),l=t(8),s=t(2),p=t(3);function d(){var n=Object(s.a)(["\n  display: ",";\n  align-items: center;\n  justify-content: center;\n\n  background-color: var(--header-color);\n\n  width: 60%;\n\n  position: absolute;\n  top: 90px;\n  right: 20%;\n  left: 20%;\n\n  input::-webkit-input-placeholder,\n  input::-moz-placeholder,\n  input::placeholder {\n    color: #fff;\n    font-size: 12pt;\n    opacity: 1;\n  }\n\n  input {\n    background-color: var(--header-color);\n    border: none;\n    color: #fff;\n    font-size: 12pt;\n    text-align: center;\n    width: 100%;\n    height: 50px;\n  }\n\n  @media screen and (max-width: 559px) {\n    width: 80%;\n    right: 10%;\n    left: 10%;\n  }\n"]);return d=function(){return n},n}function m(){var n=Object(s.a)(["\n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n\n  background-color: var(--header-color);\n\n  position: absolute;\n  top: 85px;\n  right: 15px;\n\n  padding: 10px 20px;\n\n  div.link {\n    display: flex;\n    align-items: center;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  div.link a {\n    font-size: 12pt;\n    margin-left: 5px;\n  }\n"]);return m=function(){return n},n}function f(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: var(--header-color);\n  padding: 0 30px;\n  width: 100%;\n  height: 80px;\n\n  div.brand {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  div.brand a {\n    font-size: 16pt;\n    font-weight: bold;\n    margin-left: 5px;\n  }\n\n  div#panthom {\n    width: 30%;\n  }\n\n  svg {\n    cursor: pointer;\n  }\n"]);return f=function(){return n},n}var h=p.a.div(f()),g=p.a.div(m(),(function(n){return"true"===n.visibility?"flex":"none"})),b=p.a.div(d(),(function(n){return"true"===n.visibility?"flex":"none"})),v=t(17),x=t(49),E=t.n(x);var j=function(){var n=Object(a.useState)(""),e=Object(l.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(!1),u=Object(l.a)(o,2),s=u[0],p=u[1],d=Object(a.useState)(!1),m=Object(l.a)(d,2),f=m[0],x=m[1];return i.a.createElement(h,null,i.a.createElement("div",{className:"brand"},i.a.createElement("img",{src:E.a,alt:"Kanji japon\xeas para ver\xe3o.",height:"20px"}),i.a.createElement(c.b,{to:"/"},"Natsu")),i.a.createElement("div",{id:"panthom"}),i.a.createElement(v.d,{size:"30px",onClick:function(){return x(!f),void p(!1)}}),i.a.createElement(v.c,{size:"30px",onClick:function(){return p(!s),void x(!1)}}),i.a.createElement(g,{visibility:s.toString()},i.a.createElement("div",{className:"link"},i.a.createElement(v.b,{size:"14pt"}),i.a.createElement(c.b,{to:"/"},"In\xedcio")),i.a.createElement("div",{className:"link"},i.a.createElement(v.e,{size:"14pt"}),i.a.createElement(c.b,{to:"/"},"Lan\xe7amentos")),i.a.createElement("div",{className:"link"},i.a.createElement(v.a,{size:"14pt"}),i.a.createElement(c.b,{to:"/"},"Hoje"))),i.a.createElement(b,{visibility:f.toString()},i.a.createElement("input",{type:"text",placeholder:"Pesquisa...",onKeyDown:function(n){return function(n){13===n.keyCode?""!==t&&window.location.assign("/busca/".concat(t)):8===n.keyCode?r(t.split("").slice(0,-1).join("")):r(t+n.key)}(n)}})))},w=t(10),y=t.n(w),k=t(15);function O(){var n=Object(s.a)(["\n  padding: 0 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return O=function(){return n},n}var z=p.a.div(O());function N(){var n=Object(s.a)(["\n  background: url(",");\n  background-size: 100%;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  margin-top: 10px;\n  width: ","px;\n  height: ","px;\n\n  p {\n    background-color: rgba(11, 10, 13, 0.55);\n    font-size: 13pt;\n    text-align: center;\n    padding: 15px;\n    width: 100%;\n  }\n\n  @media (min-width: 600px) {\n    margin-left: 10px;\n  }\n\n  @media (max-width: 599px) {\n    width: 100%;\n    height: ","px;\n  }\n"]);return N=function(){return n},n}var S=Object(p.a)(c.b)(N(),(function(n){return n.imagem}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.height}));var q=function(n){var e=n.data,t=n.label,a=n.width,r=n.height,o=n.url,c=void 0===o?"/":o;return i.a.createElement(S,{to:"/".concat(c),imagem:e.imagem,width:a,height:r,href:"/"},i.a.createElement("p",null,t))},C=t(52),B=t.n(C).a.create({baseURL:"https://hydrogenium.herokuapp.com/api"});var I=function(){var n=Object(a.useState)([]),e=Object(l.a)(n,2),t=e[0],r=e[1];return Object(a.useEffect)((function(){function n(){return(n=Object(k.a)(y.a.mark((function n(){var e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.get("/ultimos-episodios");case 2:e=n.sent,r(e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){r([])}}),[]),i.a.createElement(z,null,t.length>0&&t.map((function(n){return i.a.createElement(q,{key:"".concat(n.slug,"/").concat(n.episodio),data:n,width:320,height:240,label:"".concat(n.nome," | ").concat(n.episodio),url:"episodio/".concat(n.slug,"/").concat(n.episodio)})})))},J=t(53),K=t.n(J);function L(){var n=Object(s.a)(["\n  background-color: #ffffff0d;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n\n  margin: 0;\n  width: 70px;\n  height: 100px;\n"]);return L=function(){return n},n}function W(){var n=Object(s.a)(["\n  color: ",";\n  font-weight: bold;\n  padding: 16px;\n"]);return W=function(){return n},n}function _(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 5px;\n  width: 100%;\n  padding: 10px;\n\n  div.player {\n    background-color: var(--header-color);\n    border-radius: 10px;\n    width: 80%;\n  }\n\n  div.episodios {\n    background-color: var(--header-color);\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    margin-left: 10px;\n    width: 20%;\n\n    div.anime {\n      display: flex;\n      align-items: center;\n      padding: 30px 18px;\n      border-bottom: 1px solid #ffffff0d;\n      --imagem: ",";\n\n      a {\n        font-weight: bold;\n        text-align: center;\n        margin-left: 14px;\n      }\n    }\n  }\n\n  @media (max-width: 599px) {\n    flex-direction: column;\n    div.player {\n      width: 100%;\n    }\n    div.episodios {\n      width: 100%;\n      margin: 0;\n      margin-top: 20px;\n    }\n  }\n"]);return _=function(){return n},n}var A=p.a.div(_(),(function(n){return n.imagem})),D=Object(p.a)(c.b)(W(),(function(n){return n.mark?"#7159c1":"#fff"})),H=Object(p.a)(c.b)(L(),(function(n){return n.image}));var P=function(){var n=Object(a.useState)({}),e=Object(l.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)({}),s=Object(l.a)(o,2),p=s[0],d=s[1],m=Object(u.f)(),f=m.tipo,h=m.nome,g=m.episodio;function b(n,e){for(var t=[],a=n;a<=e;a++)t.push(a);return t}return Object(a.useEffect)((function(){function n(){return(n=Object(k.a)(y.a.mark((function n(){var e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.get("/".concat(f,"/").concat(h));case 2:e=n.sent,r(e.data),document.title="Natsu | Assistir ".concat(e.data.nome);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function e(){return(e=Object(k.a)(y.a.mark((function n(){var e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.get("/episodio/".concat(f,"/").concat(h,"/").concat(g));case 2:e=n.sent,d(e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){e.apply(this,arguments)}(),function(){document.title="Natsu"}}),[g,h,f]),p.episodio>0&&i.a.createElement(A,null,i.a.createElement("div",{classNameName:"player"},i.a.createElement(K.a,{url:p.video_url,playing:!1,controls:!0,width:"100%",height:"100%"})),i.a.createElement("div",{classNameName:"episodios"},i.a.createElement("div",{classNameName:"anime"},i.a.createElement(H,{to:"/".concat(f,"/").concat(h),image:t.imagem}),i.a.createElement(c.b,{to:"/".concat(f,"/").concat(h)},t.nome)),function(n){var e="";return 1===n.episodio||2===n.episodio?e=b(1,n.episodios).map((function(e){return i.a.createElement(D,{to:"/episodio/".concat(f,"/").concat(h,"/").concat(e),mark:e===n.episodio},"Epis\xf3dio ",e)})):n.episodio>=3&&n.episodio<=n.episodios-2?e=b(n.episodio-2,n.episodio+2).map((function(e){return i.a.createElement(D,{to:"/episodio/".concat(f,"/").concat(h,"/").concat(e),mark:e===n.episodio},"Epis\xf3dio ",e)})):n.episodio===n.episodios&&(e=n.episodio<5?b(1,n.episodio).map((function(e){return i.a.createElement(D,{to:"/episodio/".concat(f,"/").concat(h,"/").concat(e),mark:e===n.episodio},"Epis\xf3dio ",e)})):b(n.episodios-4,n.episodios).map((function(e){return i.a.createElement(D,{to:"/episodio/".concat(f,"/").concat(h,"/").concat(e),mark:e===n.episodio},"Epis\xf3dio ",e)}))),e}(p)))};function R(){var n=Object(s.a)(["\n  padding: 0 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return R=function(){return n},n}var U=p.a.div(R());function $(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  padding: 30px;\n\n  width: 100%;\n  height: calc(100vh - 80px);\n\n  h1,\n  h2 {\n    text-align: center;\n  }\n\n  h1 {\n    font-size: 14pt;\n  }\n  h2 {\n    font-size: 10pt;\n    margin-top: 10px;\n  }\n"]);return $=function(){return n},n}var F=p.a.div($());function G(n){var e=n.msg,t=n.info;return i.a.createElement(F,null,i.a.createElement("h1",null,e),t&&i.a.createElement("h2",null,t))}var M=function(){var n=Object(a.useState)(200),e=Object(l.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)([]),c=Object(l.a)(o,2),s=c[0],p=c[1],d=Object(u.f)().query;return Object(a.useEffect)((function(){function n(){return(n=Object(k.a)(y.a.mark((function n(){var e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B.get("/busca-np/".concat(d));case 3:e=n.sent,r(200),p(e.data.animes),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),r(400);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){p([])}}),[d]),i.a.createElement(U,null,200===t?s.length>0&&s.map((function(n){return i.a.createElement(q,{key:"".concat(n.slug),data:n,width:280,height:400,label:"".concat(n.nome),url:"".concat(n.slug)})})):i.a.createElement(G,{msg:"Ocorreu um erro na sua pesquisa!",info:'Nenhum resutado para "'.concat(d,'", tente novamente com outro termo.')}))};var Q=function(){return i.a.createElement(c.a,null,i.a.createElement(j,null),i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/",exact:!0,component:I}),i.a.createElement(u.a,{path:"/episodio/:tipo/:nome/:episodio",component:P}),i.a.createElement(u.a,{path:"/busca/:query",component:M})))};var T=function(){return i.a.createElement(Q,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.87604f0e.chunk.js.map
(this["webpackJsonpip-tracker"]=this["webpackJsonpip-tracker"]||[]).push([[0],{26:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(8),r=c.n(n),i=(c(26),c(4)),l=c(1),o=function(e){var t=e.clickHandler,c=e.InputHandler;return Object(l.jsxs)("header",{className:"row text-center",id:"header",children:[Object(l.jsx)("h1",{className:"col-md-12",children:"IP address tracker"}),Object(l.jsxs)("div",{className:"col-md-12",children:[Object(l.jsx)("input",{type:"text",placeholder:"Search any ip address or domain",className:"w-50 mx-auto h-75 mb-3",onChange:c}),Object(l.jsx)("button",{className:"btn ",onClick:t,children:"Search"})]})]})},j=(c(28),c(21)),d=c.n(j),b=c(51),h=c(52),O=c(55),m=c(53),p=c(54),u=c(56),x=function(e){var t=e.item;return Object(l.jsx)("div",{className:"container",children:t.map((function(e,t){return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-3",children:[Object(l.jsx)("h2",{children:"Ip address"}),Object(l.jsx)("p",{children:e.ip})]}),Object(l.jsxs)("div",{className:"col-md-3",children:[Object(l.jsx)("h2",{children:"location"}),Object(l.jsx)("p",{children:e.location.city})]}),Object(l.jsxs)("div",{className:"col-md-3",children:[Object(l.jsx)("h2",{children:"timezone"}),Object(l.jsx)("p",{children:e.location.timezone})]}),Object(l.jsxs)("div",{className:"col-md-3",children:[Object(l.jsx)("h2",{children:"Isp"}),Object(l.jsx)("p",{children:e.isp})]})]},t)}))})},v=function(e){var t=e.click,c=Object(s.useState)(),a=Object(i.a)(c,2),n=a[0],r=a[1],o=Object(s.useState)({lat:"",lng:""}),j=Object(i.a)(o,2),v=j[0],f=j[1];function g(e){var t=e.coords,c=Object(b.a)();return c.setView(t,c.getZoom()),null}return Object(s.useEffect)((function(){var e="https://geo.ipify.org/api/v1?apiKey=at_BZdubqTDSUYV4zH2wM04W5mmB76nw&ipAddress";t&&(e="https://geo.ipify.org/api/v1?apiKey=at_BZdubqTDSUYV4zH2wM04W5mmB76nw&ipAddress=".concat(t)),d.a.get(e).then((function(e){r([e.data]),f({lat:e.data.location.lat,lng:e.data.location.lng})}))}),[t]),console.log(v),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)(h.a,{center:v,zoom:13,scrollWheelZoom:!1,className:"map",children:[Object(l.jsx)(O.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(l.jsx)(m.a,{position:v}),Object(l.jsx)(p.a,{name:"custom",style:{zIndex:100},children:Object(l.jsx)(u.a,{center:v,radius:200})}),Object(l.jsx)(g,{coords:v})]}),n&&Object(l.jsx)(x,{item:n})]})};var f=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),j=r[0],d=r[1];return Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(o,{InputHandler:function(e){a(e.target.value)},clickHandler:function(){c&&d(c)}}),Object(l.jsx)(v,{click:j})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.8cfa4d2a.chunk.js.map
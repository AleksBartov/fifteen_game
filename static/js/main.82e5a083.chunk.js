(this.webpackJsonpfifteen_game=this.webpackJsonpfifteen_game||[]).push([[0],[,,,,,function(e,n,t){e.exports=t(12)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(3),o=t.n(r),u=(t(10),t(4)),i=t(1);var s=function(e){var n=e.children;return c.a.createElement("div",{className:"Game"},n)};var l=function(e){var n,t,r,o,u,s,l=e.x,f=e.y,v=e.value,y=e.CARD_WIDTH,m=e.gap,d=e.moveHandler,x=Object(a.useState)({x:0,y:0}),h=Object(i.a)(x,2),p=h[0],g=h[1],b=Object(a.useRef)(null);return Object(a.useEffect)((function(){l===m.x&&f<m.y?(n="Y",t=!0,r=!0):l===m.x&&f>m.y?(n="Y",t=!1,r=!0):f===m.y&&l<m.x?(n="X",t=!0,r=!0):f===m.y&&l>m.x&&(n="X",t=!1,r=!0)}),[m]),c.a.createElement("div",{ref:b,onTouchStart:function(e){b.current.firstChild.classList.add("shadowDown"),r&&(o="X"===n?e.touches[0].pageX:e.touches[0].pageY),e.preventDefault()},onTouchMove:function(e){r&&(u=("X"===n?e.changedTouches[0].pageX:e.changedTouches[0].pageY)-o,!t&&u>0?u=0:!t&&u<-y?u=-y:t&&u<0?u=0:t&&u>y&&(u=y),b.current.style.transform="translate".concat(n,"(").concat(u+p.y,"px)")),e.preventDefault()},onTouchEnd:function(e){b.current.firstChild.classList.remove("shadowDown"),r&&(s=t?u>y/2?y:0:u<-y/2?-y:0,b.current.style.transform="translate".concat(n,"(").concat(s+p.y,"px)"),d(v,{x:l,y:f},{x:"Y"===n||0===s?l:t?l+1:l-1,y:"X"===n||0===s?f:t?f+1:f-1}),g((function(e){var t=e.x,a=e.y;return{x:"X"===n?s:t,y:"Y"===n?s:a}}))),e.preventDefault()},className:"Card ".concat(16===v?"empty":"")},c.a.createElement("div",{className:"number"},v))},f=16,v=69,y=4,m=(t(11),f),d=v,x=y;var h=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)({x:null,y:null}),f=Object(i.a)(o,2),v=f[0],y=f[1];function h(e,n,t){var a=n.x,c=n.y,o=t.x,u=t.y;if(a!==o||c!==u)return y((function(e){e.x,e.y;return{x:n.x,y:n.y}})),void r((function(n){var t=n.findIndex((function(n){return n.value===e}));return n[t].x=o,n[t].y=u,n}))}return Object(a.useEffect)((function(){var e=0,n=0,a=new Array(m).fill(null).reduce((function(t,a,c){return c%x!==0?e++:e=0,c%x!==0?n=n:n++,[].concat(Object(u.a)(t),[{value:c+1,x:e,y:n-1}])}),[]);r(t.concat(a)),y({x:x-1,y:x-1})}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(s,null,t.map((function(e,n){var t=e.value,a=e.x,r=e.y;e.active;return c.a.createElement(l,Object.assign({key:n},{x:a,y:r,value:t,CARD_WIDTH:d,gap:v,moveHandler:h}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.82e5a083.chunk.js.map
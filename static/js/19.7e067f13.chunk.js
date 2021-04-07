(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{622:function(t,e,c){"use strict";c.d(e,"a",(function(){return l}));var n=c(43),r=c(158),o=c(1),a=c.n(o),i=c(621),s=c(20),u=function(t){var e=t.name,c=t.text,o=Object(r.a)(t,["name","text"]),a=e?"https://coreui.io/react/docs/components/".concat(e):t.href;return Object(s.jsx)("div",{className:"card-header-actions",children:Object(s.jsx)(i.db,Object(n.a)(Object(n.a)({},o),{},{href:a,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(s.jsx)("small",{className:"text-muted",children:c||"reference"})}))})},l=a.a.memo(u)},623:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(626);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var c=[],n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done)&&(c.push(a.value),!e||c.length!==e);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return c}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},625:function(t,e,c){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var c=0,n=new Array(e);c<e;c++)n[c]=t[c];return n}c.d(e,"a",(function(){return n}))},626:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(625);function r(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(n.a)(t,e):void 0}}},691:function(t,e,c){"use strict";c.r(e);var n=c(625);var r=c(626);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=c(623),i=c(1),s=c(621),u=c(622),l=c(20);e.default=function(){var t=Object(i.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),e=Object(a.a)(t,2),c=e[0],n=e[1],r=Object(i.useState)("top-right"),b=Object(a.a)(r,2),j=b[0],d=b[1],h=Object(i.useState)(!0),m=Object(a.a)(h,2),f=m[0],O=m[1],p=Object(i.useState)(5e3),x=Object(a.a)(p,2),y=x[0],v=x[1],g=Object(i.useState)(!0),k=Object(a.a)(g,2),S=k[0],w=k[1],A=Object(i.useState)(!0),N=Object(a.a)(A,2),T=N[0],C=N[1],F=c.reduce((function(t,e){return t[e.position]=t[e.position]||[],t[e.position].push(e),t}),{});return Object(l.jsxs)(s.j,{children:[Object(l.jsxs)(s.n,{children:["Toasts.",Object(l.jsx)(u.a,{name:"-Toast"})]}),Object(l.jsx)(s.k,{children:Object(l.jsx)(s.w,{children:Object(l.jsxs)(s.wb,{children:[Object(l.jsx)(s.u,{sm:"12",lg:"6",children:Object(l.jsxs)(s.J,{children:[Object(l.jsx)("h5",{children:"Add toast with following props:"}),Object(l.jsxs)(s.K,{variant:"custom-checkbox",className:"my-2 mt-4",children:[Object(l.jsx)(s.T,{id:"autohide",checked:f,onChange:function(t){O(t.target.checked)},custom:!0}),Object(l.jsx)(s.cb,{variant:"custom-checkbox",htmlFor:"autohide",children:"Autohide of the toast"})]}),f&&Object(l.jsxs)(s.K,{className:"my-2",children:[Object(l.jsx)(s.cb,{htmlFor:"ccyear",children:"Time to autohide"}),Object(l.jsx)(s.S,{type:"number",value:y,onChange:function(t){v(Number(t.target.value))}})]}),Object(l.jsxs)(s.K,{className:"my-2",children:[Object(l.jsx)(s.cb,{htmlFor:"ccyear",children:"Position"}),Object(l.jsx)("select",{className:"form-control",value:j,onChange:function(t){d(t.target.value)},children:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(t,e){return Object(l.jsx)("option",{children:t},e)}))})]}),Object(l.jsxs)(s.K,{variant:"custom-checkbox",className:"my-2",children:[Object(l.jsx)(s.T,{id:"fade",checked:T,onChange:function(t){C(t.target.checked)},custom:!0}),Object(l.jsx)(s.cb,{variant:"custom-checkbox",htmlFor:"fade",children:"fade"})]}),Object(l.jsxs)(s.K,{variant:"custom-checkbox",className:"my-2",children:[Object(l.jsx)(s.T,{id:"close",custom:!0,checked:S,onChange:function(t){w(t.target.checked)}}),Object(l.jsx)(s.cb,{variant:"custom-checkbox",htmlFor:"close",children:"closeButton"})]}),Object(l.jsx)(s.f,{className:"mr-1 w-25",color:"success",onClick:function(){n([].concat(o(c),[{position:j,autohide:f&&y,closeButton:S,fade:T}]))},children:"Add toast"})]})}),Object(l.jsx)(s.u,{sm:"12",lg:"6",children:Object.keys(F).map((function(t){return Object(l.jsx)(s.Pb,{position:t,children:F[t].map((function(e,c){return Object(l.jsxs)(s.Mb,{show:!0,autohide:e.autohide,fade:e.fade,children:[Object(l.jsx)(s.Ob,{closeButton:e.closeButton,children:"Toast title"}),Object(l.jsx)(s.Nb,{children:"This is a toast in ".concat(t," positioned toaster number ").concat(c+1,".")})]},"toast"+c)}))},"toaster"+t)}))})]})})})]})}}}]);
//# sourceMappingURL=19.7e067f13.chunk.js.map
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{622:function(e,c,t){"use strict";t.d(c,"a",(function(){return a}));var n=t(43),i=t(158),r=t(1),o=t.n(r),l=t(621),s=t(20),j=function(e){var c=e.name,t=e.text,r=Object(i.a)(e,["name","text"]),o=c?"https://coreui.io/react/docs/components/".concat(c):e.href;return Object(s.jsx)("div",{className:"card-header-actions",children:Object(s.jsx)(l.db,Object(n.a)(Object(n.a)({},r),{},{href:o,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(s.jsx)("small",{className:"text-muted",children:t||"reference"})}))})},a=o.a.memo(j)},623:function(e,c,t){"use strict";t.d(c,"a",(function(){return i}));var n=t(626);function i(e,c){return function(e){if(Array.isArray(e))return e}(e)||function(e,c){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,i=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(t.push(o.value),!c||t.length!==c);n=!0);}catch(s){i=!0,r=s}finally{try{n||null==l.return||l.return()}finally{if(i)throw r}}return t}}(e,c)||Object(n.a)(e,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},625:function(e,c,t){"use strict";function n(e,c){(null==c||c>e.length)&&(c=e.length);for(var t=0,n=new Array(c);t<c;t++)n[t]=e[t];return n}t.d(c,"a",(function(){return n}))},626:function(e,c,t){"use strict";t.d(c,"a",(function(){return i}));var n=t(625);function i(e,c){if(e){if("string"===typeof e)return Object(n.a)(e,c);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(n.a)(e,c):void 0}}},684:function(e,c,t){"use strict";t.r(c);var n=t(623),i=t(1),r=t(621),o=t(622),l=t(624),s=t(20);c.default=function(){var e=Object(i.useState)(!0),c=Object(n.a)(e,2),t=c[0],j=c[1],a=Object(i.useState)(!1),b=Object(n.a)(a,2),d=b[0],u=b[1],h=Object(i.useState)(!1),O=Object(n.a)(h,2),x=O[0],f=O[1],m=Object(i.useState)(!1),p=Object(n.a)(m,2),g=p[0],k=p[1],C=Object(i.useState)(!1),w=Object(n.a)(C,2),y=w[0],v=w[1],A=Object(i.useState)(!1),D=Object(n.a)(A,2),S=D[0],I=D[1],q=Object(i.useState)(!1),R=Object(n.a)(q,2),P=R[0],B=R[1],N=Object(i.useState)(!1),L=Object(n.a)(N,2),F=L[0],M=L[1];return Object(s.jsx)(r.wb,{children:Object(s.jsx)(r.u,{children:Object(s.jsxs)(r.j,{children:[Object(s.jsxs)(r.n,{children:["Bootstrap Modals",Object(s.jsx)(o.a,{name:"CModal"})]}),Object(s.jsxs)(r.k,{children:[Object(s.jsx)(r.f,{onClick:function(){return j(!t)},className:"mr-1",children:"Launch demo modal"}),Object(s.jsx)(r.f,{onClick:function(){return u(!d)},className:"mr-1",children:"Launch large modal"}),Object(s.jsx)(r.f,{onClick:function(){return f(!d)},className:"mr-1",children:"Launch small modal"}),Object(s.jsxs)(r.gb,{show:t,onClose:j,color:"primary",children:[Object(s.jsx)(r.jb,{closeButton:!0,children:Object(s.jsx)(r.kb,{children:"Confirm Import Actions"})}),Object(s.jsxs)(r.hb,{children:[Object(s.jsx)("p",{children:"Please confirm the following actions: "}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Action 1:  Accept and Confirm ",Object(s.jsx)("b",{children:"Referal [refGUID123]"})]}),Object(s.jsxs)("li",{children:["Action 2:  Register new Patient ",Object(s.jsx)("b",{children:"Thomas FakePatient"})]}),Object(s.jsxs)("li",{children:["Action 3:  Book Initial Consult with ",Object(s.jsx)("b",{children:"Dr FakeDoctor"})," at time date"]})]}),Object(s.jsxs)("p",{children:["Requested by: ",Object(s.jsx)("b",{children:"Operator ID"}),", at time date"]})]}),Object(s.jsxs)(r.ib,{children:[Object(s.jsx)(r.f,{color:"primary",children:"Do Something"})," ",Object(s.jsx)(r.f,{color:"secondary",onClick:function(){return j(!1)},children:"Cancel"})]})]}),Object(s.jsxs)(r.gb,{show:d,onClose:function(){return u(!d)},size:"lg",children:[Object(s.jsx)(r.jb,{closeButton:!0,children:Object(s.jsx)(r.kb,{children:"Modal title"})}),Object(s.jsx)(r.hb,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(s.jsxs)(r.ib,{children:[Object(s.jsx)(r.f,{color:"primary",onClick:function(){return u(!d)},children:"Do Something"})," ",Object(s.jsx)(r.f,{color:"secondary",onClick:function(){return u(!d)},children:"Cancel"})]})]}),Object(s.jsxs)(r.gb,{show:x,onClose:function(){return f(!x)},size:"sm",children:[Object(s.jsx)(r.jb,{closeButton:!0,children:Object(s.jsx)(r.kb,{children:"Modal title"})}),Object(s.jsx)(r.hb,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(s.jsxs)(r.ib,{children:[Object(s.jsx)(r.f,{color:"primary",onClick:function(){return f(!x)},children:"Do Something"})," ",Object(s.jsx)(r.f,{color:"secondary",onClick:function(){return f(!x)},children:"Cancel"})]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)(r.f,{color:"primary",onClick:function(){return k(!g)},className:"mr-1",children:"Primary modal"}),Object(s.jsx)(r.f,{color:"success",onClick:function(){return v(!y)},className:"mr-1",children:"Success modal"}),Object(s.jsx)(r.f,{color:"warning",onClick:function(){return I(!S)},className:"mr-1",children:"Warning modal"}),Object(s.jsx)(r.f,{color:"danger",onClick:function(){return B(!P)},className:"mr-1",children:"Danger modal"}),Object(s.jsx)(r.f,{color:"info",onClick:function(){return M(!F)},className:"mr-1",children:"Info modal"}),Object(s.jsxs)(r.gb,{show:g,onClose:function(){return k(!g)},color:"primary",children:[Object(s.jsx)(r.jb,{closeButton:!0,children:Object(s.jsx)(r.kb,{children:"Confirmation"})}),Object(s.jsxs)(r.hb,{children:[Object(s.jsx)("p",{children:"Please confirm the following actions: "}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Action 1:  Accept and Confirm ",Object(s.jsx)("b",{children:"Referal [refGUID123]"})]}),Object(s.jsxs)("li",{children:["Action 2:  Register new Patient ",Object(s.jsx)("b",{children:"Thomas FakePatient"})]}),Object(s.jsxs)("li",{children:["Action 3:  Book Initial Consult with ",Object(s.jsx)("b",{children:"Dr FakeDoctor"})," at time date"]})]}),Object(s.jsxs)("p",{children:["Requested by: ",Object(s.jsx)("b",{children:"Operator ID"}),", at ",Object(s.jsx)("b",{children:"time date"})]})]}),Object(s.jsxs)(r.ib,{children:[Object(s.jsx)(r.f,{color:"primary",onClick:function(){return k(!g)},children:"Confirm Actions"})," ",Object(s.jsx)(r.f,{color:"secondary",onClick:function(){return k(!g)},children:"Cancel"})]})]}),Object(s.jsxs)(r.gb,{show:y,onClose:function(){return v(!y)},color:"success",children:[Object(s.jsxs)(r.jb,{closeButton:!0,children:[Object(s.jsx)(l.a,{name:"cil-task",height:"24"}),Object(s.jsx)(r.kb,{children:"Success Modal"})]}),Object(s.jsxs)(r.hb,{children:[Object(s.jsx)("p",{children:"Congratulations and well done"}),Object(s.jsx)("p",{children:"You've managed to succeed in something today. Yay etc for you"})]}),Object(s.jsxs)(r.ib,{children:[Object(s.jsx)(r.f,{color:"success",onClick:function(){return v(!y)},children:"Do Something"})," ",Object(s.jsx)(r.f,{color:"secondary",onClick:function(){return v(!y)},children:"Cancel"})]})]}),Object(s.jsxs)(r.gb,{show:S,onClose:function(){return I(!S)},color:"warning",children:[Object(s.jsxs)(r.jb,{closeButton:!0,children:[Object(s.jsx)(l.a,{name:"cil-warning",height:"24"}),Object(s.jsx)(r.kb,{children:"Patient Warning"})]}),Object(s.jsxs)(r.hb,{children:[Object(s.jsx)("p",{children:"Please acknowledge the following:"}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Allergies -",Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("b",{children:"Latext"})}),Object(s.jsx)("li",{children:Object(s.jsx)("b",{children:"Stupidity"})})]})]}),Object(s.jsxs)("li",{children:["Smoking - ",Object(s.jsx)("b",{children:"Active Smoker"})]})]}),Object(s.jsxs)("p",{children:["Acknowledgement record: ",Object(s.jsx)("b",{children:"Operator ID"}),", at ",Object(s.jsx)("b",{children:"time date"})]})]}),Object(s.jsxs)(r.ib,{children:[Object(s.jsx)(r.f,{color:"warning",onClick:function(){return I(!S)},children:"Acknowledge warning(s)"})," ",Object(s.jsx)(r.f,{color:"secondary",onClick:function(){return I(!S)},children:"Cancel"})]})]}),Object(s.jsxs)(r.gb,{show:P,onClose:function(){return B(!P)},color:"danger",children:[Object(s.jsx)(r.jb,{closeButton:!0,children:Object(s.jsx)(r.kb,{children:"Warning: Deceased Patient"})}),Object(s.jsxs)(r.hb,{children:[Object(s.jsx)("p",{children:"Marking this patient as deceased will affect the following:"}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsxs)("u",{children:["Referals: ",Object(s.jsx)("b",{children:"1"})]}),Object(s.jsx)("ul",{children:Object(s.jsxs)("li",{children:[" ",Object(s.jsx)("b",{children:"refGUID124"}),": Will be marked complete"]})}),Object(s.jsx)("br",{}),Object(s.jsx)(r.f,{color:"danger",onClick:function(){return I(!P)},children:"Complete Referals"})," ",Object(s.jsx)(r.f,{color:"info",onClick:function(){return I(!P)},children:"View Referals"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("li",{children:[Object(s.jsxs)("u",{children:["Future Appointments: ",Object(s.jsx)("b",{children:"2"})]}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("b",{children:"11/05/2021 10:00 - Dr FakeDoctor"})}),Object(s.jsx)("li",{children:Object(s.jsx)("b",{children:"14/06/2021 13:00 - Dr FakeDoctor"})})]}),Object(s.jsx)("br",{}),Object(s.jsx)(r.f,{color:"danger",onClick:function(){return I(!P)},children:"Cancel Appointments"})," ",Object(s.jsx)(r.f,{color:"info",onClick:function(){return I(!P)},children:"View Appointments"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("li",{children:[Object(s.jsxs)("u",{children:["Recall Lists: ",Object(s.jsx)("b",{children:"2"})]}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("b",{children:"Annual Cardiac Health check"})}),Object(s.jsx)("li",{children:Object(s.jsx)("b",{children:"Patients Christmas List"})})]}),Object(s.jsx)("br",{}),Object(s.jsx)(r.f,{color:"danger",onClick:function(){return I(!P)},children:"Remove from All"})," ",Object(s.jsx)(r.f,{color:"info",onClick:function(){return I(!P)},children:"View Recall Lists"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("li",{children:[Object(s.jsxs)("u",{children:["Financials: ",Object(s.jsx)("b",{children:"$18,340.82"})]}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Invoice 12345: To Patient ",Object(s.jsx)("b",{children:"$2,340.59"})," outstanding"]}),Object(s.jsxs)("li",{children:["Invoice 12344: To Insurance ",Object(s.jsx)("b",{children:"$16,000.23"})," outstanding"]})]}),Object(s.jsx)("br",{}),Object(s.jsx)(r.f,{color:"danger",onClick:function(){return I(!P)},children:"Issue All"})," ",Object(s.jsx)(r.f,{color:"info",onClick:function(){return I(!P)},children:"View Financials"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("li",{children:[Object(s.jsxs)("u",{children:["Workflows: ",Object(s.jsx)("b",{children:"2"})]}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Workflow 'Referal Complete': ",Object(s.jsx)("b",{children:"3 stages"})," - 1 Authorisation Stage"]}),Object(s.jsxs)("li",{children:["Workflow 'Deceased': ",Object(s.jsx)("b",{children:"4 stages"})]})]}),Object(s.jsx)("br",{}),Object(s.jsx)(r.f,{color:"primary",onClick:function(){return I(!P)},children:"Confirm All"})," ",Object(s.jsx)(r.f,{color:"info",onClick:function(){return I(!P)},children:"View Workflows"})," "]})]}),Object(s.jsxs)("p",{children:["Acknowledgement record: ",Object(s.jsx)("b",{children:"Operator ID"}),", at ",Object(s.jsx)("b",{children:"time date"})]})]}),Object(s.jsxs)(r.ib,{children:[Object(s.jsx)(r.f,{color:"danger",onClick:function(){return B(!P)},children:"Do Something"})," ",Object(s.jsx)(r.f,{color:"secondary",onClick:function(){return B(!P)},children:"Cancel"})]})]}),Object(s.jsxs)(r.gb,{show:F,onClose:function(){return M(!F)},color:"info",children:[Object(s.jsx)(r.jb,{closeButton:!0,children:Object(s.jsx)(r.kb,{children:"Modal title"})}),Object(s.jsx)(r.hb,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(s.jsxs)(r.ib,{children:[Object(s.jsx)(r.f,{color:"secondary",onClick:function(){return M(!F)},children:"Cancel"}),Object(s.jsx)(r.f,{color:"info",onClick:function(){return M(!F)},children:"Do Something"})," "]})]})]})]})})})}}}]);
//# sourceMappingURL=18.9090bbac.chunk.js.map
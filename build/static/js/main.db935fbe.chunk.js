(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(49);t.a=function(e){return c.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},c.a.createElement("div",{className:"lds-dual-ring"}))}},function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(39);t.a=function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),c=Object(n.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})},function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(6),l=a.n(r);a(46);t.a=function(e){return l.a.createPortal(c.a.createElement("div",{className:"backdrop ".concat(e.className),style:e.style,onClick:e.handleClick}),document.getElementById("backdrop-hook"))}},,,,function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(4);a(48);t.a=function(e){var t="button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger");return e.href?c.a.createElement("a",{className:t,href:e.href},e.children):e.to?c.a.createElement(r.b,{to:e.to,exact:e.exact,className:t},e.children):c.a.createElement("button",{className:t,type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(26),l=a(20);t.a=function(e){return c.a.createElement(r.a,{onCancel:e.onClear,header:"An Error Occurred",show:!!e.error,footer:c.a.createElement(l.a,{onClick:e.onClear},"Okay")},c.a.createElement("p",null,e.error))}},function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(11),c=a.n(n),r=a(12),l=a(8),o=a(0),u=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],u=Object(o.useState)(),s=Object(l.a)(u,2),i=s[0],m=s[1],d=Object(o.useRef)([]),E=Object(o.useCallback)(function(){var e=Object(r.a)(c.a.mark((function e(t){var a,r,l,o,u,s,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,l=i.length>3&&void 0!==i[3]?i[3]:{},n(!0),o=new AbortController,d.current.push(o),e.prev=6,e.next=9,fetch(t,{method:a,body:r,headers:l,signal:o.signal});case 9:return u=e.sent,e.next=12,u.json();case 12:if(s=e.sent,d.current=d.current.filter((function(e){return e!==o})),u.ok){e.next=16;break}throw new Error(s.message);case 16:return n(!1),e.abrupt("return",s);case 20:throw e.prev=20,e.t0=e.catch(6),m(e.t0.message),n(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){return function(){d.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:i,sendRequest:E,clearError:function(){m(null)}}}},,,,function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(6),l=a.n(r),o=a(55),u=a(16),s=(a(47),function(e){var t=c.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},c.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},c.a.createElement("h2",null,e.header)),c.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){e.preventDefault()}},c.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),c.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return l.a.createPortal(t,document.getElementById("modal-hook"))});t.a=function(e){return c.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},e.show&&c.a.createElement(u.a,{handleClick:e.onCancel}),c.a.createElement(o.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},c.a.createElement(s,e)))}},,,,function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),l=a(6),o=a.n(l),u=(a(35),a(1)),s=a(4),i=a(11),m=a.n(i),d=a(12),E=a(8),f=(a(37),a(38),function(e){return r.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},r.a.createElement("img",{src:e.src,alt:e.alt,style:{width:e.width,height:e.width}}))}),h=a(14),b=(a(40),function(e){return r.a.createElement("li",{className:"user-item"},r.a.createElement(h.a,{className:"user-item__content"},r.a.createElement(s.b,{to:"/".concat(e.id,"/places")},r.a.createElement("div",{className:"user-item__image"},r.a.createElement(f,{src:"".concat("https://mern-myplace.herokuapp.com","/").concat(e.image),alt:e.name})),r.a.createElement("div",{className:"user-item__info"},r.a.createElement("h2",null,e.name),r.a.createElement("h3",null,e.placeCount," ",1===e.placeCount?"Place":"Places")))))}),p=function(e){return 0===e.items.length?r.a.createElement("div",{className:"center"},r.a.createElement(h.a,null,r.a.createElement("h2",null,"No user found."))):r.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places.length})})))},v=a(21),g=a(13),N=a(22),k=function(){var e=Object(N.a)(),t=e.isLoading,a=e.error,n=e.sendRequest,l=e.clearError,o=Object(c.useState)(),u=Object(E.a)(o,2),s=u[0],i=u[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("".concat("https://mern-myplace.herokuapp.com/api","/users"));case 3:t=e.sent,i(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{error:a,onClear:l}),t&&r.a.createElement("div",{className:"center"},r.a.createElement(g.a,null)),!t&&s&&r.a.createElement(p,{items:s}))},y=(a(50),function(e){return r.a.createElement("header",{className:"main-header ".concat(e.className),style:e.style},e.children)}),O=a(15),C=(a(51),function(e){var t=Object(c.useContext)(O.a);return r.a.createElement("ul",{className:"nav-links ".concat(e.className),style:e.style},r.a.createElement("li",null,r.a.createElement(s.c,{to:"/",exact:!0},"ALL USERS")),t.isLoggedIn&&r.a.createElement("li",null,r.a.createElement(s.c,{to:"/".concat(t.userId,"/places")},"MY PLACE")),t.isLoggedIn&&r.a.createElement("li",null,r.a.createElement(s.c,{to:"/places/new"},"ADD PLACE")),!t.isLoggedIn&&r.a.createElement("li",null,r.a.createElement(s.c,{to:"/auth"},"AUTHENTICATE")),t.isLoggedIn&&r.a.createElement("li",null,r.a.createElement("button",{onClick:t.logout},"LOGOUT")))}),w=a(16),j=a(55),I=(a(52),function(e){var t=r.a.createElement(j.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("aside",{className:"side-drawer ".concat(e.className),style:e.style,onClick:e.handleSideDrawerClick},e.children));return o.a.createPortal(t,document.getElementById("drawer-hook"))}),x=(a(53),function(e){var t=Object(c.useState)(!1),a=Object(E.a)(t,2),n=a[0],l=a[1],o=function(){l(!1)};return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(w.a,{handleClick:o}),r.a.createElement(I,{show:n,handleSideDrawerClick:o},r.a.createElement("nav",{className:"main-navigation__drawer-nav"},r.a.createElement(C,null))),r.a.createElement(y,{className:"main-navigation ".concat(e.className),style:e.style},r.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){l(!0)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("h1",{className:"main-navigation__title"},r.a.createElement(s.b,{to:"/"},"MyPlace")),r.a.createElement("nav",{className:"main-navigation__header-nav"},r.a.createElement(C,null))))}),S=r.a.lazy((function(){return a.e(3).then(a.bind(null,69))})),_=r.a.lazy((function(){return a.e(6).then(a.bind(null,72))})),D=r.a.lazy((function(){return a.e(5).then(a.bind(null,70))})),L=r.a.lazy((function(){return a.e(4).then(a.bind(null,71))})),T=function(){var e,t=function(){var e=Object(c.useState)(null),t=Object(E.a)(e,2),a=t[0],r=t[1],l=Object(c.useState)(),o=Object(E.a)(l,2),u=o[0],s=o[1],i=Object(c.useState)(null),m=Object(E.a)(i,2),d=m[0],f=m[1],h=Object(c.useCallback)((function(e,t,a){r(t),f(e);var n=a||new Date((new Date).getTime()+36e5);s(n),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:n.toISOString()}))}),[]),b=Object(c.useCallback)((function(){r(null),f(null),s(null),localStorage.removeItem("userData")}),[]);return Object(c.useEffect)((function(){if(a&&u){var e=u.getTime()-(new Date).getTime();n=setTimeout(b,e)}else clearTimeout(n)}),[a,b,u]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date<new Date(e.expiration)&&h(e.userId,e.token,new Date(e.expiration))}),[h]),{userId:d,token:a,login:h,logout:b}}(),a=t.userId,l=t.token,o=t.login,i=t.logout;return e=l?r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(k,null)),r.a.createElement(u.b,{path:"/:userId/places",exact:!0},r.a.createElement(_,null)),r.a.createElement(u.b,{path:"/places/new",exact:!0},r.a.createElement(S,null)),r.a.createElement(u.b,{path:"/places/:placeId"},r.a.createElement(D,null)),r.a.createElement(u.a,{to:"/"})):r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(k,null)),r.a.createElement(u.b,{path:"/:userId/places",exact:!0},r.a.createElement(_,null)),r.a.createElement(u.b,{path:"/auth"},r.a.createElement(L,null)),r.a.createElement(u.a,{to:"/"})),r.a.createElement(O.a.Provider,{value:{isLoggedIn:!!l,token:l,userId:a,login:o,logout:i}},r.a.createElement(s.a,null,r.a.createElement(x,null),r.a.createElement("main",null,r.a.createElement(c.Suspense,{fallback:r.a.createElement("div",{className:"center"},r.a.createElement(g.a,null))},e))))};o.a.render(r.a.createElement(T,null),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.db935fbe.chunk.js.map
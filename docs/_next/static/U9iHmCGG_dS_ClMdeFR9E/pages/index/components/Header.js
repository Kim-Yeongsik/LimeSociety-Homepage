(window.webpackJsonp=window.webpackJsonp||[]).push([["f9df"],{Bi3C:function(t,e,o){var n;"undefined"!=typeof self&&self,n=function(t){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=o(1),i=(n=r)&&n.__esModule?n:{default:n};e.default=i.default},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},i=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),a=o(2),l=(n=a)&&n.__esModule?n:{default:n};var c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),i(e,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var n=t.currentTarget.getAttribute("href").slice(1),r=document.getElementById(n).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:r-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}(t,["offset"]));return l.default.createElement("a",r({},e,{onClick:this.smoothScroll}))}}]),e}();e.default=c},function(e,o){e.exports=t},function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var o,n=t.HTMLElement||t.Element,r=468,i={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||c,scrollIntoView:n.prototype.scrollIntoView},a=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):i.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?i.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var t=arguments[0].left,e=arguments[0].top;h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var o=function(t){var o;do{o=(t=t.parentNode)===e.body}while(!1===o&&!1===f(t));return o=null,t}(this),n=o.getBoundingClientRect(),r=this.getBoundingClientRect();o!==e.body?(h.call(this,o,o.scrollLeft+r.left-n.left,o.scrollTop+r.top-n.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function s(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function p(e,o){var n=t.getComputedStyle(e,null)["overflow"+o];return"auto"===n||"scroll"===n}function f(t){var e=u(t,"Y")&&p(t,"Y"),o=u(t,"X")&&p(t,"X");return e||o}function d(e){var o,n,i,l,c=(a()-e.startTime)/r;l=c=c>1?1:c,o=.5*(1-Math.cos(Math.PI*l)),n=e.startX+(e.x-e.startX)*o,i=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,n,i),n===e.x&&i===e.y||t.requestAnimationFrame(d.bind(t,e))}function h(o,n,r){var l,s,u,p,f=a();o===e.body?(l=t,s=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,p=i.scroll):(l=o,s=o.scrollLeft,u=o.scrollTop,p=c),d({scrollable:l,method:p,startTime:f,startX:s,startY:u,x:n,y:r})}}}}()}])},t.exports=n(o("q1tI"))},BkLC:function(t,e,o){"use strict";o.r(e);var n=o("kOwS"),r=o("0iUn"),i=o("sLSF"),a=o("MI3g"),l=o("a7VT"),c=o("Tit0"),s=o("vYYK"),u=o("SUMQ"),p=o("DvoB"),f=o("q1tI"),d=o.n(f),h=o("Bi3C"),b=o.n(h),m=o("Ohc4"),g=o("aU3y"),v=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props.classes;return d.a.createElement("section",{className:t.container},d.a.createElement(g.default,{width:"full",className:t.root},d.a.createElement(p.r,{align:"center",className:t.motto1,component:"h2",color:"inherit",variant:"h1"},"Challenge the Future"),d.a.createElement(p.r,{align:"center",className:t.motto2,component:"h2",color:"inherit",variant:"h3"},"with Commitment and Passion"),d.a.createElement(p.b,{className:t.button,color:"primary",component:function(t){return d.a.createElement(b.a,Object(n.a)({},t,{offset:m.a,href:"#products",variant:"button"}))},size:"large",variant:"contained"},"Tell Me More"),d.a.createElement("div",{className:t.backdrop}),d.a.createElement("div",{className:t.background})))}}]),e}(d.a.Component);e.default=Object(u.withStyles)(function(t){var e,o;return Object(u.createStyles)({container:Object(s.a)({color:t.palette.common.white,position:"relative",display:"flex",alignItems:"center"},t.breakpoints.up("sm"),{height:"80vh",minHeight:500,maxHeight:1300}),root:{marginTop:10*t.spacing.unit,marginBottom:10*t.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center"},motto1:(e={marginTop:75,marginBottom:25,fontSize:60,fontWeight:"bold"},Object(s.a)(e,t.breakpoints.down("sm"),{fontSize:45}),Object(s.a)(e,t.breakpoints.down("xs"),{fontSize:30}),e),motto2:(o={marginBottom:75,fontSize:42,fontWeight:"bold"},Object(s.a)(o,t.breakpoints.down("sm"),{fontSize:31}),Object(s.a)(o,t.breakpoints.down("xs"),{fontSize:21}),o),button:Object(s.a)({borderRadius:5,boxShadow:"none","&:active, &:focus":{boxShadow:"none"},fontSize:t.typography.pxToRem(20),fontWeight:"bold",minWidth:250,padding:"".concat(3*t.spacing.unit-3,"px ").concat(6*t.spacing.unit,"px")},t.breakpoints.down("sm"),{padding:"".concat(2*t.spacing.unit,"px ").concat(3*t.spacing.unit,"px"),fontSize:t.typography.pxToRem(15),minWidth:200}),backdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:t.palette.common.black,opacity:.5,zIndex:-1},background:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundRepeat:"no-repeat",zIndex:-2,backgroundImage:'url("/static/index/components/header-bg.jpg")',backgroundColor:"#7fc7d9",backgroundPosition:"center"}})})(v)},aU3y:function(t,e,o){"use strict";o.r(e);var n=o("kOwS"),r=o("qNsG"),i=o("0iUn"),a=o("sLSF"),l=o("MI3g"),c=o("a7VT"),s=o("Tit0"),u=o("vYYK"),p=o("SUMQ"),f=o("gasH"),d=o("TSYQ"),h=o.n(d),b=o("q1tI"),m=o.n(b),g=o("Ohc4");o("nOHt");function v(t){return Math.round(1e4*t)/1e4}var y=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t,e=this.props,o=e.children,i=e.classes,a=e.className,l=e.component,c=e.fullHeight,s=e.fullWidth,p=e.style,d=e.width,b=Object(r.a)(e,["children","classes","className","component","fullHeight","fullWidth","style","width"]);return m.a.createElement(l,Object(n.a)({className:h()((t={},Object(u.a)(t,i["width".concat(Object(f.capitalize)(d))],!s),Object(u.a)(t,i.fullHeight,c),t),a),style:p},b),o)}}]),e}(m.a.Component);y.defaultProps={component:"div",fullHeight:!1,fullWidth:!1,width:"medium"};e.default=Object(p.withStyles)(function(t){var e,o;return Object(p.createStyles)({widthSmall:Object(u.a)({width:"auto",marginLeft:3*t.spacing.unit,marginRight:3*t.spacing.unit},t.breakpoints.up(660+6*t.spacing.unit),{width:660,marginLeft:"auto",marginRight:"auto"}),widthMedium:Object(u.a)({width:"auto",marginLeft:3*t.spacing.unit,marginRight:3*t.spacing.unit},t.breakpoints.up(Object(g.b)(t)),{width:850,marginLeft:"auto",marginRight:"auto"}),widthLarge:(e={width:"auto",marginLeft:3*t.spacing.unit,marginRight:3*t.spacing.unit},Object(u.a)(e,t.breakpoints.up("md"),{width:880,marginLeft:"auto",marginRight:"auto"}),Object(u.a)(e,t.breakpoints.up(v(880/.7777)),{width:"77.7777%"}),Object(u.a)(e,t.breakpoints.up(v(1400/.7777)),{width:1400}),e),widthXlarge:(o={width:"auto",marginLeft:3*t.spacing.unit,marginRight:3*t.spacing.unit},Object(u.a)(o,t.breakpoints.up("md"),{width:900,marginLeft:"auto",marginRight:"auto"}),Object(u.a)(o,t.breakpoints.up(v(1e3)),{width:"90%"}),Object(u.a)(o,t.breakpoints.up(v(2e3)),{width:1800}),o),widthFull:{width:"100%"},fullHeight:{height:"100%"}})})(y)},d3AA:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index/components/Header",function(){var t=o("BkLC");return{page:t.default||t}}])}},[["d3AA","5d41","9da1"]]]);
webpackJsonp([0xf56877dfa5f4],{"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function o(e,t,n){var o,u;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}try{var d=l(e),f=l(t)}catch(e){return!1}if(d.length!=f.length)return!1;for(d.sort(),f.sort(),o=d.length-1;o>=0;o--)if(d[o]!=f[o])return!1;for(o=d.length-1;o>=0;o--)if(u=d[o],!c(e[u],t[u],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,l=n("./node_modules/deep-equal/lib/keys.js"),s=n("./node_modules/deep-equal/lib/is_arguments.js"),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:o(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};r=function(){return o}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("./node_modules/react/react.js"),d=r(u),f=n("./node_modules/prop-types/index.js"),m=r(f),p=n("./node_modules/react-side-effect/lib/index.js"),T=r(p),E=n("./node_modules/deep-equal/index.js"),A=r(E),h=n("./node_modules/react-helmet/lib/HelmetUtils.js"),b=n("./node_modules/react-helmet/lib/HelmetConstants.js"),y=function(e){var t,n;return n=t=function(t){function n(){return o(this,n),i(this,t.apply(this,arguments))}return l(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,A.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return s({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[s({},a,this.mapNestedChildrenToProps(n,o))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return s({},a,(t={},t[r.type]=i,t.titleAttributes=s({},o),t));case b.TAG_NAMES.BODY:return s({},a,{bodyAttributes:s({},o)});case b.TAG_NAMES.HTML:return s({},a,{htmlAttributes:s({},o)})}return s({},a,(n={},n[r.type]=s({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=s({},t);return Object.keys(e).forEach(function(t){var r;n=s({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,l=a(o,["children"]),s=(0,h.convertReactPropstoHtmlAttributes)(l);switch(n.warnOnInvalidChildren(e,i),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=a(t,["children"]),o=s({},r);return n&&(o=this.mapChildrenToProps(n,o)),d.default.createElement(e,o)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component),t.propTypes={base:m.default.object,bodyAttributes:m.default.object,children:m.default.oneOfType([m.default.arrayOf(m.default.node),m.default.node]),defaultTitle:m.default.string,defer:m.default.bool,encodeSpecialCharacters:m.default.bool,htmlAttributes:m.default.object,link:m.default.arrayOf(m.default.object),meta:m.default.arrayOf(m.default.object),noscript:m.default.arrayOf(m.default.object),onChangeClientState:m.default.func,script:m.default.arrayOf(m.default.object),style:m.default.arrayOf(m.default.object),title:m.default.string,titleAttributes:m.default.object,titleTemplate:m.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},_=function(){return null},v=(0,T.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(_),g=y(v);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./node_modules/react/react.js"),l=r(i),s=n("./node_modules/object-assign/index.js"),c=r(s),u=n("./node_modules/react-helmet/lib/HelmetConstants.js"),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=A(e,u.TAG_NAMES.TITLE),n=A(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},m=function(e){return A(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},T=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[u.TAG_NAMES.BASE]}).map(function(e){return e[u.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a],i=o.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var a={};n.filter(function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],s=l.toLowerCase();t.indexOf(s)===-1||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===u.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),t.indexOf(l)===-1||l!==u.TAG_PROPERTIES.INNER_HTML&&l!==u.TAG_PROPERTIES.CSS_TEXT&&l!==u.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][c]&&(a[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(a),i=0;i<o.length;i++){var l=o[i],s=(0,c.default)({},r[l],a[l]);r[l]=s}return e},[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:T([u.TAG_PROPERTIES.HREF],e),bodyAttributes:p(u.ATTRIBUTE_NAMES.BODY,e),defer:A(e,u.HELMET_PROPS.DEFER),encode:A(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(u.ATTRIBUTE_NAMES.HTML,e),linkTags:E(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:E(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:m(e),scriptTags:E(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(u.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),y=function(e){return clearTimeout(e)},_="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,N=function(e){S&&v(S),e.defer?S=_(function(){O(e,function(){S=null})}):(O(e),S=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,f=e.title,m=e.titleAttributes;R(u.TAG_NAMES.BODY,r),R(u.TAG_NAMES.HTML,a),P(f,m);var p={baseTag:M(u.TAG_NAMES.BASE,n),linkTags:M(u.TAG_NAMES.LINK,o),metaTags:M(u.TAG_NAMES.META,i),noscriptTags:M(u.TAG_NAMES.NOSCRIPT,l),scriptTags:M(u.TAG_NAMES.SCRIPT,c),styleTags:M(u.TAG_NAMES.STYLE,d)},T={},E={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(E[e]=p[e].oldTags)}),t&&t(),s(e,T,E)},w=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=w(e)),R(u.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var s=i[l],c=t[s]||"";n.getAttribute(s)!==c&&n.setAttribute(s,c),a.indexOf(s)===-1&&a.push(s);var d=o.indexOf(s);d!==-1&&o.splice(d,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},M=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return i=t,n.isEqualNode(e)})?a.splice(i,1):o.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:o}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var a=C(n),o=w(t);return a?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+a+">"+d(o,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+d(o,r)+"</"+e+">"},j=function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a="undefined"==typeof r[t]?t:t+'="'+d(r[t],n)+'"';return e?e+" "+a:a},""),o=r.innerHTML||r.cssText||"",i=u.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t},t)},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,a=(r={key:t},r[u.HELMET_ATTRIBUTE]=!0,r),o=L(n,a);return[l.default.createElement(u.TAG_NAMES.TITLE,o,t)]},H=function(e,t){return t.map(function(t,n){var r,a=(r={key:n},r[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),l.default.createElement(e,a)})},k=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return j(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.scriptTags,c=e.styleTags,d=e.title,f=void 0===d?"":d,m=e.titleAttributes;return{base:k(u.TAG_NAMES.BASE,t,r),bodyAttributes:k(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(u.ATTRIBUTE_NAMES.HTML,a,r),link:k(u.TAG_NAMES.LINK,o,r),meta:k(u.TAG_NAMES.META,i,r),noscript:k(u.TAG_NAMES.NOSCRIPT,l,r),script:k(u.TAG_NAMES.SCRIPT,s,r),style:k(u.TAG_NAMES.STYLE,c,r),title:k(u.TAG_NAMES.TITLE,{title:f,titleAttributes:m},r)}};t.convertReactPropstoHtmlAttributes=x,t.handleClientStateChange=N,t.mapStateOnServer=D,t.reducePropsToState=h,t.requestAnimationFrame=_,t.warn=g}).call(t,function(){return this}())},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n("./node_modules/react/react.js"),s=r(l),c=n("./node_modules/exenv/index.js"),u=r(c),d=n("./node_modules/shallowequal/index.js"),f=r(d);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function d(){p=e(m.map(function(e){return e.props})),T.canUseDOM?t(p):n&&(p=n(p))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var m=[],p=void 0,T=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return p},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=p;return p=void 0,m=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,f.default)(e,this.props)},t.prototype.componentWillMount=function(){m.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=m.indexOf(this);m.splice(e,1),d()},t.prototype.render=function(){return s.default.createElement(c,this.props)},t}(l.Component);return T.displayName="SideEffect("+r(c)+")",T.canUseDOM=u.default.canUseDOM,T}}},"./node_modules/shallowequal/index.js":function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],d=t[c];if(a=n?n.call(r,u,d,c):void 0,a===!1||void 0===a&&u!==d)return!1}return!0}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/yo/Code/website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/yo/Code/website/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/yo/Code/website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/yo/Code/website/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/yo/Code/website/node_modules/babel-preset-stage-0/lib/index.js","/home/yo/Code/website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/services.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("./node_modules/react/react.js"),o=r(a),i=n("./node_modules/gatsby-link/index.js"),l=(r(i),n("./node_modules/react-helmet/lib/Helmet.js")),s=r(l),c=function(){return o.default.createElement("div",null,o.default.createElement(s.default,{title:"Services | Dream Akasa | We help companies from design to development with solution-by-design and human-centered approach.",meta:[{name:"description",content:"Dream Akasa"},{name:"keywords",content:"dreamakasa, Dream Akasa, development"}]}),o.default.createElement("div",{className:"row section section--banner transparent text-center"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"col-md-10 col-md-offset-1"},o.default.createElement("h1",{className:"heading"},"What can we help you with?"),o.default.createElement("h6",{className:"text"},"Deliver great services is our main priority. User experience is our resource and design is our way to build user-centered products.")))),o.default.createElement("div",{className:"row section section--services transparent p-t-0"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"service col-sm-12"},o.default.createElement("div",{className:"items media"},o.default.createElement("div",{className:"media-left"},o.default.createElement("div",{className:"item__img-wrapper circle"},o.default.createElement("img",{src:"images/web.svg",className:"img-responsive",alt:"Web Development"}))),o.default.createElement("div",{className:"media-body"},o.default.createElement("h4",{className:"media-heading item__text"},"Web Development"),o.default.createElement("p",{className:"item__sub-text"},"Wev develop web-based product that able to be used directly on our browser.")))),o.default.createElement("div",{className:"service col-sm-12"},o.default.createElement("div",{className:"items media"},o.default.createElement("div",{className:"media-left"},o.default.createElement("div",{className:"item__img-wrapper circle"},o.default.createElement("img",{src:"images/mobile.svg",className:"img-responsive",alt:"Mobile Application Development"}))),o.default.createElement("div",{className:"media-body"},o.default.createElement("h4",{className:"media-heading item__text"},"Mobile Application Development"),o.default.createElement("p",{className:"item__sub-text"},"Smartphone is handy device that able to carry around. We build and develop mobile application so it can be accessed anytime and anywhere for you")))),o.default.createElement("div",{className:"service col-sm-12"},o.default.createElement("div",{className:"items media"},o.default.createElement("div",{className:"media-left"},o.default.createElement("div",{className:"item__img-wrapper circle"},o.default.createElement("img",{src:"images/product.svg",className:"img-responsive",alt:"Product Design"}))),o.default.createElement("div",{className:"media-body"},o.default.createElement("h4",{className:"media-heading item__text"},"Product Design"),o.default.createElement("p",{className:"item__sub-text"},"We make solution of the problem as the product and we design it so our product will be helpful and also.. beautiful!")))),o.default.createElement("div",{className:"service col-sm-12"},o.default.createElement("div",{className:"items media"},o.default.createElement("div",{className:"media-left"},o.default.createElement("div",{className:"item__img-wrapper circle"},o.default.createElement("img",{src:"images/workshop.svg",className:"img-responsive",alt:"Workshop & Seminar"}))),o.default.createElement("div",{className:"media-body"},o.default.createElement("h4",{className:"media-heading item__text"},"Workshop & Seminar"),o.default.createElement("p",{className:"item__sub-text"},"Sharing is caring. By sharing experiences and knowledge, we helped educate about developing the great products.")))))),o.default.createElement("div",{className:"row section section--quotes text-center border-b-grey"},o.default.createElement("div",{className:"container"},o.default.createElement("h5",{className:"heading"},"Client Thoughts"),o.default.createElement("div",{id:"carousel-example-generic",className:"carousel carousel--text slide col-sm-12","data-ride":"carousel"},o.default.createElement("ol",{className:"carousel-indicators"},o.default.createElement("li",{"data-target":"#carousel-example-generic","data-slide-to":"0",className:"active"}),o.default.createElement("li",{"data-target":"#carousel-example-generic","data-slide-to":"1"}),o.default.createElement("li",{"data-target":"#carousel-example-generic","data-slide-to":"2"})),o.default.createElement("div",{className:"carousel-inner",role:"listbox"},o.default.createElement("div",{className:"item active"},o.default.createElement("div",{className:"carousel-caption"},o.default.createElement("blockquote",null,"We trust Dream Akasa with all our design & development projects and are very happy working together."),o.default.createElement("p",{className:"profil"},o.default.createElement("img",{src:"images/default-avatar.png"}),"Carl Carlson"))),o.default.createElement("div",{className:"item"},o.default.createElement("div",{className:"carousel-caption"},o.default.createElement("blockquote",null,"Dream akasa help us to design and develop for our company application. Their response and work is really great! Very recommended to work."),o.default.createElement("p",{className:"profil"},o.default.createElement("img",{src:"images/default-avatar.png"}),"Arron Montgomery"))),o.default.createElement("div",{className:"item"},o.default.createElement("div",{className:"carousel-caption"},o.default.createElement("blockquote",null,"Dream akasa help us doing usability test for our",o.default.createElement("i",null,"stealth"),"startup app. The result is really well and detail!"),o.default.createElement("p",{className:"profil"},o.default.createElement("img",{src:"images/default-avatar.png"}),"Tracey Carlson"))))))))};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-services-js-681736bf98ebe331db8a.js.map
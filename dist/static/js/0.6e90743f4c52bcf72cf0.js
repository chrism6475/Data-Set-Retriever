webpackJsonp([0],{"21It":function(t,e,n){"use strict";var r=n("FtD3");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"5VQ+":function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},"7GwW":function(t,e,n){"use strict";var r=n("cGG2"),o=n("21It"),a=n("DQCr"),i=n("oJlt"),s=n("GHBc"),u=n("FtD3"),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("thJu");t.exports=function(t){return new Promise(function(e,l){var f=t.data,p=t.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",v=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,h="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var m=t.auth.username||"",y=t.auth.password||"";p.Authorization="Basic "+c(m+":"+y)}if(d.open(t.method.toUpperCase(),a(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||v)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};o(e,l,r),d=null}},d.onerror=function(){l(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){l(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var g=n("p1b6"),w=(t.withCredentials||s(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;w&&(p[t.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),l(t),d=null)}),void 0===f&&(f=null),d.send(f)})}},DQCr:function(t,e,n){"use strict";var r=n("cGG2");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var a;if(n)a=n(e);else if(r.isURLSearchParams(e))a=e.toString();else{var i=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),i.push(o(e)+"="+o(t))}))}),a=i.join("&")}return a&&(t+=(-1===t.indexOf("?")?"?":"&")+a),t}},FtD3:function(t,e,n){"use strict";var r=n("t8qj");t.exports=function(t,e,n,o,a){var i=new Error(t);return r(i,e,n,o,a)}},GHBc:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},"JP+z":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},KCLY:function(t,e,n){"use strict";(function(e){var r=n("cGG2"),o=n("5VQ+"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s,u={adapter:("undefined"!=typeof XMLHttpRequest?s=n("7GwW"):void 0!==e&&(s=n("7GwW")),s),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(i(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(i(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){u.headers[t]={}}),r.forEach(["post","put","patch"],function(t){u.headers[t]=r.merge(a)}),t.exports=u}).call(e,n("W2nU"))},Re3r:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},TNV1:function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},W2nU:function(t,e){var n,r,o=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(t){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var t=s(p);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},XmWM:function(t,e,n){"use strict";var r=n("KCLY"),o=n("cGG2"),a=n("fuGk"),i=n("xLtR");function s(t){this.defaults=t,this.interceptors={request:new a,response:new a}}s.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),(t=o.merge(r,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[i,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){s.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){s.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=s},cGG2:function(t,e,n){"use strict";var r=n("JP+z"),o=n("Re3r"),a=Object.prototype.toString;function i(t){return"[object Array]"===a.call(t)}function s(t){return null!==t&&"object"==typeof t}function u(t){return"[object Function]"===a.call(t)}function c(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:i,isArrayBuffer:function(t){return"[object ArrayBuffer]"===a.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:s,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===a.call(t)},isFile:function(t){return"[object File]"===a.call(t)},isBlob:function(t){return"[object Blob]"===a.call(t)},isFunction:u,isStream:function(t){return s(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return e},extend:function(t,e,n){return c(e,function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},cWxy:function(t,e,n){"use strict";var r=n("dVOP");function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},dIwP:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dVOP:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},fuGk:function(t,e,n){"use strict";var r=n("cGG2");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},lO7g:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("mtWM"),o=n.n(r),a={data:function(){return{source:"World Bank",availableSources:["World Bank","IMF"],noResults:!1,searchText:"",countryOption:"",yearOption:"",test:"test",results:[],indicatorOption:"",countries:[],indicators:[],resultsInfo:[]}},methods:{changeSource:function(t){this.source=this.availableSources[t]},searchForDataSet:function(){var t=this;this.results=[],o.a.get("http://api.worldbank.org/v2/countries/all/indicators/SP.POP.TOTL?format=json").then(function(e){t.resultsInfo=e.data[0],t.results=e.data[1],console.log(t.results)}).catch(function(t){return console.log("error")})}},mounted:function(){var t=this;o.a.get("http://country.io/names.json").then(function(e){return t.countries=e.data}),o.a.get("http://localhost:5000/indicators").then(function(e){return t.indicators=e.data})}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container text-center justify-content-center"},[n("h1",{staticClass:"header"},[t._v("\n    World Data Index\n  ")]),t._v(" "),n("nav",{staticClass:"navbar navbar-light bg-light navbar-margin navbar-thin rounded",attrs:{id:"headerBar"}},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"sourceOptions","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Choose Source: "+t._s(t.source)+"\n    ")]),t._v(" "),n("div",{staticClass:"dropdown-menu"},[n("ul",{staticClass:"list-unstyled"},t._l(t.availableSources,function(e,r){return n("li",{on:{click:function(e){t.changeSource(r)}}},[t._v(t._s(e))])}),0)])]),t._v(" "),n("div",{staticClass:"row justify-content-center",staticStyle:{opacity:".9"}},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card",attrs:{id:"searchCriteriaForm"}},[n("div",{staticClass:"card-body text-black"},[n("div",{staticClass:"row box-margin"},[n("div",{staticClass:"col-md-12"},[n("form",[n("label",{attrs:{for:"searchTextBox"}},[t._v("Keyword:\n                   "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search for Data Set","aria-label":"Search"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),t._v(" "),n("label",{attrs:{for:"countryDropdown"}},[t._v("Country:\n                   "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.countryOption,expression:"countryOption"}],staticClass:"form-control",attrs:{id:"countryDropdown",value:"Choose your Country",required:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.countryOption=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"all"}},[t._v("\n                       All\n                     ")]),t._v(" "),t._l(t.countries,function(e){return n("option",{domProps:{value:t.countryOption}},[t._v(t._s(e.name))])})],2)]),t._v(" "),n("label",{attrs:{for:"indicatorDropdown"}},[t._v("Indicator:\n                    "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.indicatorOption,expression:"indicatorOption"}],staticClass:"form-control",attrs:{id:"indicatorDropdown",value:"Choose an Indicator",required:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.indicatorOption=e.target.multiple?n:n[0]}}},[n("option",[t._v("\n                        Choose your Indicator\n                      ")]),t._v(" "),t._l(t.indicators,function(e){return n("option",{domProps:{value:t.indicatorOption}},[t._v(t._s(e.name))])})],2)]),t._v(" "),n("label",{attrs:{for:"yearDropdown"}},[t._v("Year:\n                     "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.yearOption,expression:"yearOption"}],staticClass:"form-control",attrs:{id:"indicatorDropdown",value:"Choose a Year",required:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.yearOption=e.target.multiple?n:n[0]}}},[n("option",[t._v("\n                         Choose your Year\n                       ")]),t._v(" "),t._l(2018,function(e){return n("option",{domProps:{value:t.yearOption}},[t._v(t._s(e))])})],2)]),t._v(" "),n("button",{staticClass:"btn btn-outline-info",attrs:{type:"submit"},on:{click:t.searchForDataSet}},[t._v("Search")])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.noResults,expression:"noResults == true"}],staticClass:"row box-margin"},[t._m(0)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.noResults,expression:"!noResults"}],staticClass:"row box-margin"},[n("div",{staticClass:"col-md-12"},[n("table",{staticClass:"table table-bordered"},[n("th",[t._v("\n                   Data Set ID\n                  ")]),t._v(" "),n("th",[t._v("\n                   Country\n                  ")]),t._v(" "),n("th",[t._v("\n                   Indicator\n                  ")]),t._v(" "),n("th",[t._v("\n                   Year\n                  ")]),t._v(" "),t._l(t.results,function(e,r){return n("tr",[n("td",[t._v("\n                     "+t._s(r+1)+"\n                   ")]),t._v(" "),n("td",[n("a",{attrs:{href:"dataset.url"}},[t._v(t._s(e.country.value))])]),t._v(" "),n("td",[t._v("\n                     "+t._s(e.indicator.value)+"\n                   ")]),t._v(" "),n("td",[t._v("\n                     "+t._s(e.date)+"\n                   ")])])})],2),t._v(" "),t._m(1)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"alert alert-danger fade show",attrs:{role:"alert"}},[e("strong",[this._v("Not Found:")]),this._v(" Results matching your search not found.\n              ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"text-center text-info"},[n("ul",{staticClass:"pagination  justify-content-center text-info"},[n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Previous")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Next")])])])])}]},s=n("VU/8")(a,i,!1,null,null,null);e.default=s.exports},mtWM:function(t,e,n){t.exports=n("tIFN")},oJlt:function(t,e,n){"use strict";var r=n("cGG2"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,a,i={};return t?(r.forEach(t.split("\n"),function(t){if(a=t.indexOf(":"),e=r.trim(t.substr(0,a)).toLowerCase(),n=r.trim(t.substr(a+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}}),i):i}},p1b6:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,a,i){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},t8qj:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},tIFN:function(t,e,n){"use strict";var r=n("cGG2"),o=n("JP+z"),a=n("XmWM"),i=n("KCLY");function s(t){var e=new a(t),n=o(a.prototype.request,e);return r.extend(n,a.prototype,e),r.extend(n,e),n}var u=s(i);u.Axios=a,u.create=function(t){return s(r.merge(i,t))},u.Cancel=n("dVOP"),u.CancelToken=n("cWxy"),u.isCancel=n("pBtG"),u.all=function(t){return Promise.all(t)},u.spread=n("pxG4"),t.exports=u,t.exports.default=u},thJu:function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,a=String(t),i="",s=0,u=r;a.charAt(0|s)||(u="=",s%1);i+=u.charAt(63&e>>8-s%1*8)){if((n=a.charCodeAt(s+=.75))>255)throw new o;e=e<<8|n}return i}},xLtR:function(t,e,n){"use strict";var r=n("cGG2"),o=n("TNV1"),a=n("pBtG"),i=n("KCLY"),s=n("dIwP"),u=n("qRfI");function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!s(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||i.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}}});
//# sourceMappingURL=0.6e90743f4c52bcf72cf0.js.map
// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},_=r()?l:c,p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=function(e,r,t,n){var o,a,i,u,f,l,c,_,p;if(e<=0)return NaN;if(1===e||0===n)return(c=t[0])==c&&e-r>0?0:NaN;for(a=n<0?(1-e)*n:0,p=0;p<e;p++){if((c=t[a])==c){o=c;break}a+=n}if(p===e)return NaN;for(a+=n,p+=1,i=0,f=0,_=1;p<e;p++)(c=t[a])==c&&(i+=(l=c-o)*l,f+=l,_+=1),a+=n;return(u=_-r)<=0?NaN:i/u-f/_*(f/u)};p(d,"ndarray",(function(e,r,t,n,o){var a,i,u,f,l,c,_,p,d;if(e<=0)return NaN;if(1===e||0===n)return(_=t[o])==_&&e-r>0?0:NaN;for(i=o,d=0;d<e;d++){if((_=t[i])==_){a=_;break}i+=n}if(d===e)return NaN;for(i+=n,d+=1,u=0,l=0,p=1;d<e;d++)(_=t[i])==_&&(u+=(c=_-a)*c,l+=c,p+=1),i+=n;return(f=p-r)<=0?NaN:u/f-l/p*(l/f)}));var b=d,y=Math.sqrt;function s(e,r,t,n){return y(b(e,r,t,n))}return p(s,"ndarray",(function(e,r,t,n,o){return y(b.ndarray(e,r,t,n,o))})),s},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nanstdevch=r();
//# sourceMappingURL=browser.js.map

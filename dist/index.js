"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(g,s){
var h=require('@stdlib/stats-base-nanvariancech/dist'),p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,n){return p(h(e,r,a,n))}s.exports=x
});var c=t(function(j,u){
var y=require('@stdlib/stats-base-nanvariancech/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,a,n,o){return f(y(e,r,a,n,o))}u.exports=l
});var d=t(function(k,q){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=i(),O=c();m(v,"ndarray",O);q.exports=v
});var R=d();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

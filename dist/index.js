"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=n(function(g,i){
var y=require('@stdlib/stats-base-nanvariancech/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function h(e,r,t,a,o){return f(y(e,r,t,a,o))}i.exports=h
});var v=n(function(j,u){
var p=require('@stdlib/strided-base-stride2offset/dist'),x=s();function l(e,r,t,a){return x(e,r,t,a,p(e,a))}u.exports=l
});var d=n(function(k,q){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),O=s();m(c,"ndarray",O);q.exports=c
});var R=d();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

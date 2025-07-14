"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(O,s){
var d=require('@stdlib/stats-base-nanvariancech/dist').ndarray,o=require('@stdlib/math-base-special-sqrt/dist');function y(e,r,n,a,q){return o(d(e,r,n,a,q))}s.exports=y
});var v=i(function(R,u){
var f=require('@stdlib/strided-base-stride2offset/dist'),h=t();function p(e,r,n,a){return h(e,r,n,a,f(e,a))}u.exports=p
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),l=t();x(c,"ndarray",l);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

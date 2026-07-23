"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var a=c(function(N,t){
var u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-sin/dist'),q=require('@stdlib/constants-float64-pi/dist');function o(e,r){var i,n,s;return u(e)||u(r)||e<=0||r<=2?NaN:(n=q/r,i=2*n,s=v(n),e*e*(i/v(i)-n*n/(s*s)))}t.exports=o
});var f=a();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

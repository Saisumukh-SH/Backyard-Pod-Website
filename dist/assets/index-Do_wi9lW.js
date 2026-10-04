var cb=Object.defineProperty;var ub=(e,n,i)=>n in e?cb(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i;var Jn=(e,n,i)=>ub(e,typeof n!="symbol"?n+"":n,i);function db(e,n){for(var i=0;i<n.length;i++){const o=n[i];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in e)){const u=Object.getOwnPropertyDescriptor(o,l);u&&Object.defineProperty(e,l,u.get?u:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function gl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var su={exports:{}},Gi={},ou={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function hb(){if(Fp)return Fe;Fp=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function b(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,E={};function C(T,W,fe){this.props=T,this.context=W,this.refs=E,this.updater=fe||w}C.prototype.isReactComponent={},C.prototype.setState=function(T,W){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,W,"setState")},C.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function M(){}M.prototype=C.prototype;function I(T,W,fe){this.props=T,this.context=W,this.refs=E,this.updater=fe||w}var z=I.prototype=new M;z.constructor=I,N(z,C.prototype),z.isPureReactComponent=!0;var R=Array.isArray,U=Object.prototype.hasOwnProperty,F={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function A(T,W,fe){var Ae,Te={},Se=null,Be=null;if(W!=null)for(Ae in W.ref!==void 0&&(Be=W.ref),W.key!==void 0&&(Se=""+W.key),W)U.call(W,Ae)&&!q.hasOwnProperty(Ae)&&(Te[Ae]=W[Ae]);var Le=arguments.length-2;if(Le===1)Te.children=fe;else if(1<Le){for(var Oe=Array(Le),Et=0;Et<Le;Et++)Oe[Et]=arguments[Et+2];Te.children=Oe}if(T&&T.defaultProps)for(Ae in Le=T.defaultProps,Le)Te[Ae]===void 0&&(Te[Ae]=Le[Ae]);return{$$typeof:e,type:T,key:Se,ref:Be,props:Te,_owner:F.current}}function ae(T,W){return{$$typeof:e,type:T.type,key:W,ref:T.ref,props:T.props,_owner:T._owner}}function G(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function de(T){var W={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(fe){return W[fe]})}var ee=/\/+/g;function re(T,W){return typeof T=="object"&&T!==null&&T.key!=null?de(""+T.key):W.toString(36)}function Z(T,W,fe,Ae,Te){var Se=typeof T;(Se==="undefined"||Se==="boolean")&&(T=null);var Be=!1;if(T===null)Be=!0;else switch(Se){case"string":case"number":Be=!0;break;case"object":switch(T.$$typeof){case e:case n:Be=!0}}if(Be)return Be=T,Te=Te(Be),T=Ae===""?"."+re(Be,0):Ae,R(Te)?(fe="",T!=null&&(fe=T.replace(ee,"$&/")+"/"),Z(Te,W,fe,"",function(Et){return Et})):Te!=null&&(G(Te)&&(Te=ae(Te,fe+(!Te.key||Be&&Be.key===Te.key?"":(""+Te.key).replace(ee,"$&/")+"/")+T)),W.push(Te)),1;if(Be=0,Ae=Ae===""?".":Ae+":",R(T))for(var Le=0;Le<T.length;Le++){Se=T[Le];var Oe=Ae+re(Se,Le);Be+=Z(Se,W,fe,Oe,Te)}else if(Oe=b(T),typeof Oe=="function")for(T=Oe.call(T),Le=0;!(Se=T.next()).done;)Se=Se.value,Oe=Ae+re(Se,Le++),Be+=Z(Se,W,fe,Oe,Te);else if(Se==="object")throw W=String(T),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Be}function we(T,W,fe){if(T==null)return T;var Ae=[],Te=0;return Z(T,Ae,"","",function(Se){return W.call(fe,Se,Te++)}),Ae}function ge(T){if(T._status===-1){var W=T._result;W=W(),W.then(function(fe){(T._status===0||T._status===-1)&&(T._status=1,T._result=fe)},function(fe){(T._status===0||T._status===-1)&&(T._status=2,T._result=fe)}),T._status===-1&&(T._status=0,T._result=W)}if(T._status===1)return T._result.default;throw T._result}var ke={current:null},Y={transition:null},$={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Y,ReactCurrentOwner:F};function H(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:we,forEach:function(T,W,fe){we(T,function(){W.apply(this,arguments)},fe)},count:function(T){var W=0;return we(T,function(){W++}),W},toArray:function(T){return we(T,function(W){return W})||[]},only:function(T){if(!G(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Fe.Component=C,Fe.Fragment=i,Fe.Profiler=l,Fe.PureComponent=I,Fe.StrictMode=o,Fe.Suspense=m,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,Fe.act=H,Fe.cloneElement=function(T,W,fe){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var Ae=N({},T.props),Te=T.key,Se=T.ref,Be=T._owner;if(W!=null){if(W.ref!==void 0&&(Se=W.ref,Be=F.current),W.key!==void 0&&(Te=""+W.key),T.type&&T.type.defaultProps)var Le=T.type.defaultProps;for(Oe in W)U.call(W,Oe)&&!q.hasOwnProperty(Oe)&&(Ae[Oe]=W[Oe]===void 0&&Le!==void 0?Le[Oe]:W[Oe])}var Oe=arguments.length-2;if(Oe===1)Ae.children=fe;else if(1<Oe){Le=Array(Oe);for(var Et=0;Et<Oe;Et++)Le[Et]=arguments[Et+2];Ae.children=Le}return{$$typeof:e,type:T.type,key:Te,ref:Se,props:Ae,_owner:Be}},Fe.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:u,_context:T},T.Consumer=T},Fe.createElement=A,Fe.createFactory=function(T){var W=A.bind(null,T);return W.type=T,W},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(T){return{$$typeof:h,render:T}},Fe.isValidElement=G,Fe.lazy=function(T){return{$$typeof:x,_payload:{_status:-1,_result:T},_init:ge}},Fe.memo=function(T,W){return{$$typeof:g,type:T,compare:W===void 0?null:W}},Fe.startTransition=function(T){var W=Y.transition;Y.transition={};try{T()}finally{Y.transition=W}},Fe.unstable_act=H,Fe.useCallback=function(T,W){return ke.current.useCallback(T,W)},Fe.useContext=function(T){return ke.current.useContext(T)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(T){return ke.current.useDeferredValue(T)},Fe.useEffect=function(T,W){return ke.current.useEffect(T,W)},Fe.useId=function(){return ke.current.useId()},Fe.useImperativeHandle=function(T,W,fe){return ke.current.useImperativeHandle(T,W,fe)},Fe.useInsertionEffect=function(T,W){return ke.current.useInsertionEffect(T,W)},Fe.useLayoutEffect=function(T,W){return ke.current.useLayoutEffect(T,W)},Fe.useMemo=function(T,W){return ke.current.useMemo(T,W)},Fe.useReducer=function(T,W,fe){return ke.current.useReducer(T,W,fe)},Fe.useRef=function(T){return ke.current.useRef(T)},Fe.useState=function(T){return ke.current.useState(T)},Fe.useSyncExternalStore=function(T,W,fe){return ke.current.useSyncExternalStore(T,W,fe)},Fe.useTransition=function(){return ke.current.useTransition()},Fe.version="18.3.1",Fe}var Mp;function jd(){return Mp||(Mp=1,ou.exports=hb()),ou.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function mb(){if(Rp)return Gi;Rp=1;var e=jd(),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(h,m,g){var x,y={},b=null,w=null;g!==void 0&&(b=""+g),m.key!==void 0&&(b=""+m.key),m.ref!==void 0&&(w=m.ref);for(x in m)o.call(m,x)&&!u.hasOwnProperty(x)&&(y[x]=m[x]);if(h&&h.defaultProps)for(x in m=h.defaultProps,m)y[x]===void 0&&(y[x]=m[x]);return{$$typeof:n,type:h,key:b,ref:w,props:y,_owner:l.current}}return Gi.Fragment=i,Gi.jsx=d,Gi.jsxs=d,Gi}var Bp;function pb(){return Bp||(Bp=1,su.exports=mb()),su.exports}var r=pb(),Ro={},lu={exports:{}},Ot={},cu={exports:{}},uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function fb(){return Lp||(Lp=1,(function(e){function n(Y,$){var H=Y.length;Y.push($);e:for(;0<H;){var T=H-1>>>1,W=Y[T];if(0<l(W,$))Y[T]=$,Y[H]=W,H=T;else break e}}function i(Y){return Y.length===0?null:Y[0]}function o(Y){if(Y.length===0)return null;var $=Y[0],H=Y.pop();if(H!==$){Y[0]=H;e:for(var T=0,W=Y.length,fe=W>>>1;T<fe;){var Ae=2*(T+1)-1,Te=Y[Ae],Se=Ae+1,Be=Y[Se];if(0>l(Te,H))Se<W&&0>l(Be,Te)?(Y[T]=Be,Y[Se]=H,T=Se):(Y[T]=Te,Y[Ae]=H,T=Ae);else if(Se<W&&0>l(Be,H))Y[T]=Be,Y[Se]=H,T=Se;else break e}}return $}function l(Y,$){var H=Y.sortIndex-$.sortIndex;return H!==0?H:Y.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var m=[],g=[],x=1,y=null,b=3,w=!1,N=!1,E=!1,C=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(Y){for(var $=i(g);$!==null;){if($.callback===null)o(g);else if($.startTime<=Y)o(g),$.sortIndex=$.expirationTime,n(m,$);else break;$=i(g)}}function R(Y){if(E=!1,z(Y),!N)if(i(m)!==null)N=!0,ge(U);else{var $=i(g);$!==null&&ke(R,$.startTime-Y)}}function U(Y,$){N=!1,E&&(E=!1,M(A),A=-1),w=!0;var H=b;try{for(z($),y=i(m);y!==null&&(!(y.expirationTime>$)||Y&&!de());){var T=y.callback;if(typeof T=="function"){y.callback=null,b=y.priorityLevel;var W=T(y.expirationTime<=$);$=e.unstable_now(),typeof W=="function"?y.callback=W:y===i(m)&&o(m),z($)}else o(m);y=i(m)}if(y!==null)var fe=!0;else{var Ae=i(g);Ae!==null&&ke(R,Ae.startTime-$),fe=!1}return fe}finally{y=null,b=H,w=!1}}var F=!1,q=null,A=-1,ae=5,G=-1;function de(){return!(e.unstable_now()-G<ae)}function ee(){if(q!==null){var Y=e.unstable_now();G=Y;var $=!0;try{$=q(!0,Y)}finally{$?re():(F=!1,q=null)}}else F=!1}var re;if(typeof I=="function")re=function(){I(ee)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,we=Z.port2;Z.port1.onmessage=ee,re=function(){we.postMessage(null)}}else re=function(){C(ee,0)};function ge(Y){q=Y,F||(F=!0,re())}function ke(Y,$){A=C(function(){Y(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Y){Y.callback=null},e.unstable_continueExecution=function(){N||w||(N=!0,ge(U))},e.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<Y?Math.floor(1e3/Y):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return i(m)},e.unstable_next=function(Y){switch(b){case 1:case 2:case 3:var $=3;break;default:$=b}var H=b;b=$;try{return Y()}finally{b=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Y,$){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var H=b;b=Y;try{return $()}finally{b=H}},e.unstable_scheduleCallback=function(Y,$,H){var T=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?T+H:T):H=T,Y){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=H+W,Y={id:x++,callback:$,priorityLevel:Y,startTime:H,expirationTime:W,sortIndex:-1},H>T?(Y.sortIndex=H,n(g,Y),i(m)===null&&Y===i(g)&&(E?(M(A),A=-1):E=!0,ke(R,H-T))):(Y.sortIndex=W,n(m,Y),N||w||(N=!0,ge(U))),Y},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(Y){var $=b;return function(){var H=b;b=$;try{return Y.apply(this,arguments)}finally{b=H}}}})(uu)),uu}var Ip;function gb(){return Ip||(Ip=1,cu.exports=fb()),cu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function xb(){if(zp)return Ot;zp=1;var e=jd(),n=gb();function i(t){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function u(t,a){d(t,a),d(t+"Capture",a)}function d(t,a){for(l[t]=a,t=0;t<a.length;t++)o.add(a[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function b(t){return m.call(y,t)?!0:m.call(x,t)?!1:g.test(t)?y[t]=!0:(x[t]=!0,!1)}function w(t,a,s,c){if(s!==null&&s.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function N(t,a,s,c){if(a===null||typeof a>"u"||w(t,a,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function E(t,a,s,c,p,f,v){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=s,this.propertyName=t,this.type=a,this.sanitizeURL=f,this.removeEmptyString=v}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){C[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var a=t[0];C[a]=new E(a,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){C[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){C[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){C[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){C[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){C[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){C[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){C[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var a=t.replace(M,I);C[a]=new E(a,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var a=t.replace(M,I);C[a]=new E(a,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var a=t.replace(M,I);C[a]=new E(a,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){C[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),C.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){C[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function z(t,a,s,c){var p=C.hasOwnProperty(a)?C[a]:null;(p!==null?p.type!==0:c||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(N(a,s,p,c)&&(s=null),c||p===null?b(a)&&(s===null?t.removeAttribute(a):t.setAttribute(a,""+s)):p.mustUseProperty?t[p.propertyName]=s===null?p.type===3?!1:"":s:(a=p.attributeName,c=p.attributeNamespace,s===null?t.removeAttribute(a):(p=p.type,s=p===3||p===4&&s===!0?"":""+s,c?t.setAttributeNS(c,a,s):t.setAttribute(a,s))))}var R=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),F=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),de=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),Y=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,T;function W(t){if(T===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);T=a&&a[1]||""}return`
`+T+t}var fe=!1;function Ae(t,a){if(!t||fe)return"";fe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(V){var c=V}Reflect.construct(t,[],a)}else{try{a.call()}catch(V){c=V}t.call(a.prototype)}else{try{throw Error()}catch(V){c=V}t()}}catch(V){if(V&&c&&typeof V.stack=="string"){for(var p=V.stack.split(`
`),f=c.stack.split(`
`),v=p.length-1,k=f.length-1;1<=v&&0<=k&&p[v]!==f[k];)k--;for(;1<=v&&0<=k;v--,k--)if(p[v]!==f[k]){if(v!==1||k!==1)do if(v--,k--,0>k||p[v]!==f[k]){var P=`
`+p[v].replace(" at new "," at ");return t.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",t.displayName)),P}while(1<=v&&0<=k);break}}}finally{fe=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?W(t):""}function Te(t){switch(t.tag){case 5:return W(t.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return t=Ae(t.type,!1),t;case 11:return t=Ae(t.type.render,!1),t;case 1:return t=Ae(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case q:return"Fragment";case F:return"Portal";case ae:return"Profiler";case A:return"StrictMode";case re:return"Suspense";case Z:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case de:return(t.displayName||"Context")+".Consumer";case G:return(t._context.displayName||"Context")+".Provider";case ee:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case we:return a=t.displayName||null,a!==null?a:Se(t.type)||"Memo";case ge:a=t._payload,t=t._init;try{return Se(t(a))}catch{}}return null}function Be(t){var a=t.type;switch(t.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=a.render,t=t.displayName||t.name||"",a.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(a);case 8:return a===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Le(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Et(t){var a=Oe(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),c=""+t[a];if(!t.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var p=s.get,f=s.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return p.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(t,a,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function ha(t){t._valueTracker||(t._valueTracker=Et(t))}function Cs(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return t&&(c=Oe(t)?t.checked?"true":"false":t.value),t=c,t!==s?(a.setValue(t),!0):!1}function at(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sn(t,a){var s=a.checked;return H({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function si(t,a){var s=a.defaultValue==null?"":a.defaultValue,c=a.checked!=null?a.checked:a.defaultChecked;s=Le(a.value!=null?a.value:s),t._wrapperState={initialChecked:c,initialValue:s,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Es(t,a){a=a.checked,a!=null&&z(t,"checked",a,!1)}function hn(t,a){Es(t,a);var s=Le(a.value),c=a.type;if(s!=null)c==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}a.hasOwnProperty("value")?oi(t,a.type,s):a.hasOwnProperty("defaultValue")&&oi(t,a.type,Le(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(t.defaultChecked=!!a.defaultChecked)}function Ss(t,a,s){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var c=a.type;if(!(c!=="submit"&&c!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+t._wrapperState.initialValue,s||a===t.value||(t.value=a),t.defaultValue=a}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function oi(t,a,s){(a!=="number"||at(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var ar=Array.isArray;function ir(t,a,s,c){if(t=t.options,a){a={};for(var p=0;p<s.length;p++)a["$"+s[p]]=!0;for(s=0;s<t.length;s++)p=a.hasOwnProperty("$"+t[s].value),t[s].selected!==p&&(t[s].selected=p),p&&c&&(t[s].defaultSelected=!0)}else{for(s=""+Le(s),a=null,p=0;p<t.length;p++){if(t[p].value===s){t[p].selected=!0,c&&(t[p].defaultSelected=!0);return}a!==null||t[p].disabled||(a=t[p])}a!==null&&(a.selected=!0)}}function li(t,a){if(a.dangerouslySetInnerHTML!=null)throw Error(i(91));return H({},a,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ts(t,a){var s=a.value;if(s==null){if(s=a.children,a=a.defaultValue,s!=null){if(a!=null)throw Error(i(92));if(ar(s)){if(1<s.length)throw Error(i(93));s=s[0]}a=s}a==null&&(a=""),s=a}t._wrapperState={initialValue:Le(s)}}function Ps(t,a){var s=Le(a.value),c=Le(a.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),a.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),c!=null&&(t.defaultValue=""+c)}function Tn(t){var a=t.textContent;a===t._wrapperState.initialValue&&a!==""&&a!==null&&(t.value=a)}function sr(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ma(t,a){return t==null||t==="http://www.w3.org/1999/xhtml"?sr(a):t==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var or,Kt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,s,c,p){MSApp.execUnsafeLocalFunction(function(){return t(a,s,c,p)})}:t})(function(t,a){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=a;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=or.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;a.firstChild;)t.appendChild(a.firstChild)}});function St(t,a){if(a){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=a;return}}t.textContent=a}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cl=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(t){Cl.forEach(function(a){a=a+t.charAt(0).toUpperCase()+t.substring(1),lr[a]=lr[t]})});function pa(t,a,s){return a==null||typeof a=="boolean"||a===""?"":s||typeof a!="number"||a===0||lr.hasOwnProperty(t)&&lr[t]?(""+a).trim():a+"px"}function _s(t,a){t=t.style;for(var s in a)if(a.hasOwnProperty(s)){var c=s.indexOf("--")===0,p=pa(s,a[s],c);s==="float"&&(s="cssFloat"),c?t.setProperty(s,p):t[s]=p}}var mn=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(t,a){if(a){if(mn[t]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(i(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(i(61))}if(a.style!=null&&typeof a.style!="object")throw Error(i(62))}}function ga(t,a){if(t.indexOf("-")===-1)return typeof a.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function ci(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ya=null,pn=null,On=null;function va(t){if(t=_i(t)){if(typeof ya!="function")throw Error(i(280));var a=t.stateNode;a&&(a=Ks(a),ya(t.stateNode,t.type,a))}}function Ds(t){pn?On?On.push(t):On=[t]:pn=t}function ui(){if(pn){var t=pn,a=On;if(On=pn=null,va(t),a)for(t=0;t<a.length;t++)va(a[t])}}function Fs(t,a){return t(a)}function di(){}var cr=!1;function Vr(t,a,s){if(cr)return t(a,s);cr=!0;try{return Fs(t,a,s)}finally{cr=!1,(pn!==null||On!==null)&&(di(),ui())}}function ur(t,a){var s=t.stateNode;if(s===null)return null;var c=Ks(s);if(c===null)return null;s=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(i(231,a,typeof s));return s}var hi=!1;if(h)try{var $r={};Object.defineProperty($r,"passive",{get:function(){hi=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{hi=!1}function S(t,a,s,c,p,f,v,k,P){var V=Array.prototype.slice.call(arguments,3);try{a.apply(s,V)}catch(X){this.onError(X)}}var D=!1,O=null,Q=!1,te=null,xe={onError:function(t){D=!0,O=t}};function ve(t,a,s,c,p,f,v,k,P){D=!1,O=null,S.apply(xe,arguments)}function he(t,a,s,c,p,f,v,k,P){if(ve.apply(this,arguments),D){if(D){var V=O;D=!1,O=null}else throw Error(i(198));Q||(Q=!0,te=V)}}function ie(t){var a=t,s=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(s=a.return),t=a.return;while(t)}return a.tag===3?s:null}function be(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Ce(t){if(ie(t)!==t)throw Error(i(188))}function ye(t){var a=t.alternate;if(!a){if(a=ie(t),a===null)throw Error(i(188));return a!==t?null:t}for(var s=t,c=a;;){var p=s.return;if(p===null)break;var f=p.alternate;if(f===null){if(c=p.return,c!==null){s=c;continue}break}if(p.child===f.child){for(f=p.child;f;){if(f===s)return Ce(p),t;if(f===c)return Ce(p),a;f=f.sibling}throw Error(i(188))}if(s.return!==c.return)s=p,c=f;else{for(var v=!1,k=p.child;k;){if(k===s){v=!0,s=p,c=f;break}if(k===c){v=!0,c=p,s=f;break}k=k.sibling}if(!v){for(k=f.child;k;){if(k===s){v=!0,s=f,c=p;break}if(k===c){v=!0,c=f,s=p;break}k=k.sibling}if(!v)throw Error(i(189))}}if(s.alternate!==c)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?t:a}function De(t){return t=ye(t),t!==null?Re(t):null}function Re(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var a=Re(t);if(a!==null)return a;t=t.sibling}return null}var Ye=n.unstable_scheduleCallback,it=n.unstable_cancelCallback,xt=n.unstable_shouldYield,$e=n.unstable_requestPaint,Ie=n.unstable_now,Vn=n.unstable_getCurrentPriorityLevel,$n=n.unstable_ImmediatePriority,fn=n.unstable_UserBlockingPriority,Tt=n.unstable_NormalPriority,mi=n.unstable_LowPriority,dr=n.unstable_IdlePriority,Qt=null,Pt=null;function ba(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Qt,t,void 0,(t.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:Wn,mt=Math.log,hr=Math.LN2;function Wn(t){return t>>>=0,t===0?32:31-(mt(t)/hr|0)|0}var He=64,Un=4194304;function mr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wa(t,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,p=t.suspendedLanes,f=t.pingedLanes,v=s&268435455;if(v!==0){var k=v&~p;k!==0?c=mr(k):(f&=v,f!==0&&(c=mr(f)))}else v=s&~p,v!==0?c=mr(v):f!==0&&(c=mr(f));if(c===0)return 0;if(a!==0&&a!==c&&(a&p)===0&&(p=c&-c,f=a&-a,p>=f||p===16&&(f&4194240)!==0))return a;if((c&4)!==0&&(c|=s&16),a=t.entangledLanes,a!==0)for(t=t.entanglements,a&=c;0<a;)s=31-Pe(a),p=1<<s,c|=t[s],a&=~p;return c}function S0(t,a){switch(t){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T0(t,a){for(var s=t.suspendedLanes,c=t.pingedLanes,p=t.expirationTimes,f=t.pendingLanes;0<f;){var v=31-Pe(f),k=1<<v,P=p[v];P===-1?((k&s)===0||(k&c)!==0)&&(p[v]=S0(k,a)):P<=a&&(t.expiredLanes|=k),f&=~k}}function El(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uh(){var t=He;return He<<=1,(He&4194240)===0&&(He=64),t}function Sl(t){for(var a=[],s=0;31>s;s++)a.push(t);return a}function pi(t,a,s){t.pendingLanes|=a,a!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,a=31-Pe(a),t[a]=s}function P0(t,a){var s=t.pendingLanes&~a;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=a,t.mutableReadLanes&=a,t.entangledLanes&=a,a=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<s;){var p=31-Pe(s),f=1<<p;a[p]=0,c[p]=-1,t[p]=-1,s&=~f}}function Tl(t,a){var s=t.entangledLanes|=a;for(t=t.entanglements;s;){var c=31-Pe(s),p=1<<c;p&a|t[c]&a&&(t[c]|=a),s&=~p}}var We=0;function dh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var hh,Pl,mh,ph,fh,_l=!1,Ms=[],pr=null,fr=null,gr=null,fi=new Map,gi=new Map,xr=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gh(t,a){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":fi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(a.pointerId)}}function xi(t,a,s,c,p,f){return t===null||t.nativeEvent!==f?(t={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:f,targetContainers:[p]},a!==null&&(a=_i(a),a!==null&&Pl(a)),t):(t.eventSystemFlags|=c,a=t.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),t)}function D0(t,a,s,c,p){switch(a){case"focusin":return pr=xi(pr,t,a,s,c,p),!0;case"dragenter":return fr=xi(fr,t,a,s,c,p),!0;case"mouseover":return gr=xi(gr,t,a,s,c,p),!0;case"pointerover":var f=p.pointerId;return fi.set(f,xi(fi.get(f)||null,t,a,s,c,p)),!0;case"gotpointercapture":return f=p.pointerId,gi.set(f,xi(gi.get(f)||null,t,a,s,c,p)),!0}return!1}function xh(t){var a=Wr(t.target);if(a!==null){var s=ie(a);if(s!==null){if(a=s.tag,a===13){if(a=be(s),a!==null){t.blockedOn=a,fh(t.priority,function(){mh(s)});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rs(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var s=Fl(t.domEventName,t.eventSystemFlags,a[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var c=new s.constructor(s.type,s);xa=c,s.target.dispatchEvent(c),xa=null}else return a=_i(s),a!==null&&Pl(a),t.blockedOn=s,!1;a.shift()}return!0}function yh(t,a,s){Rs(t)&&s.delete(a)}function F0(){_l=!1,pr!==null&&Rs(pr)&&(pr=null),fr!==null&&Rs(fr)&&(fr=null),gr!==null&&Rs(gr)&&(gr=null),fi.forEach(yh),gi.forEach(yh)}function yi(t,a){t.blockedOn===a&&(t.blockedOn=null,_l||(_l=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,F0)))}function vi(t){function a(p){return yi(p,t)}if(0<Ms.length){yi(Ms[0],t);for(var s=1;s<Ms.length;s++){var c=Ms[s];c.blockedOn===t&&(c.blockedOn=null)}}for(pr!==null&&yi(pr,t),fr!==null&&yi(fr,t),gr!==null&&yi(gr,t),fi.forEach(a),gi.forEach(a),s=0;s<xr.length;s++)c=xr[s],c.blockedOn===t&&(c.blockedOn=null);for(;0<xr.length&&(s=xr[0],s.blockedOn===null);)xh(s),s.blockedOn===null&&xr.shift()}var ja=R.ReactCurrentBatchConfig,Bs=!0;function M0(t,a,s,c){var p=We,f=ja.transition;ja.transition=null;try{We=1,Dl(t,a,s,c)}finally{We=p,ja.transition=f}}function R0(t,a,s,c){var p=We,f=ja.transition;ja.transition=null;try{We=4,Dl(t,a,s,c)}finally{We=p,ja.transition=f}}function Dl(t,a,s,c){if(Bs){var p=Fl(t,a,s,c);if(p===null)Ql(t,a,c,Ls,s),gh(t,c);else if(D0(p,t,a,s,c))c.stopPropagation();else if(gh(t,c),a&4&&-1<_0.indexOf(t)){for(;p!==null;){var f=_i(p);if(f!==null&&hh(f),f=Fl(t,a,s,c),f===null&&Ql(t,a,c,Ls,s),f===p)break;p=f}p!==null&&c.stopPropagation()}else Ql(t,a,c,null,s)}}var Ls=null;function Fl(t,a,s,c){if(Ls=null,t=ci(c),t=Wr(t),t!==null)if(a=ie(t),a===null)t=null;else if(s=a.tag,s===13){if(t=be(a),t!==null)return t;t=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null);return Ls=t,null}function vh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vn()){case $n:return 1;case fn:return 4;case Tt:case mi:return 16;case dr:return 536870912;default:return 16}default:return 16}}var yr=null,Ml=null,Is=null;function bh(){if(Is)return Is;var t,a=Ml,s=a.length,c,p="value"in yr?yr.value:yr.textContent,f=p.length;for(t=0;t<s&&a[t]===p[t];t++);var v=s-t;for(c=1;c<=v&&a[s-c]===p[f-c];c++);return Is=p.slice(t,1<c?1-c:void 0)}function zs(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Os(){return!0}function wh(){return!1}function $t(t){function a(s,c,p,f,v){this._reactName=s,this._targetInst=p,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(s=t[k],this[k]=s?s(f):f[k]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Os:wh,this.isPropagationStopped=wh,this}return H(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Os)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Os)},persist:function(){},isPersistent:Os}),a}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=$t(Na),bi=H({},Na,{view:0,detail:0}),B0=$t(bi),Bl,Ll,wi,Vs=H({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wi&&(wi&&t.type==="mousemove"?(Bl=t.screenX-wi.screenX,Ll=t.screenY-wi.screenY):Ll=Bl=0,wi=t),Bl)},movementY:function(t){return"movementY"in t?t.movementY:Ll}}),jh=$t(Vs),L0=H({},Vs,{dataTransfer:0}),I0=$t(L0),z0=H({},bi,{relatedTarget:0}),Il=$t(z0),O0=H({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),V0=$t(O0),$0=H({},Na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W0=$t($0),U0=H({},Na,{data:0}),Nh=$t(U0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=q0[t])?!!a[t]:!1}function zl(){return Y0}var K0=H({},bi,{key:function(t){if(t.key){var a=H0[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=zs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?G0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(t){return t.type==="keypress"?zs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q0=$t(K0),X0=H({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=$t(X0),Z0=H({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),J0=$t(Z0),ev=H({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),tv=$t(ev),nv=H({},Vs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=$t(nv),av=[9,13,27,32],Ol=h&&"CompositionEvent"in window,ji=null;h&&"documentMode"in document&&(ji=document.documentMode);var iv=h&&"TextEvent"in window&&!ji,Ah=h&&(!Ol||ji&&8<ji&&11>=ji),Ch=" ",Eh=!1;function Sh(t,a){switch(t){case"keyup":return av.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Th(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ka=!1;function sv(t,a){switch(t){case"compositionend":return Th(a);case"keypress":return a.which!==32?null:(Eh=!0,Ch);case"textInput":return t=a.data,t===Ch&&Eh?null:t;default:return null}}function ov(t,a){if(ka)return t==="compositionend"||!Ol&&Sh(t,a)?(t=bh(),Is=Ml=yr=null,ka=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Ah&&a.locale!=="ko"?null:a.data;default:return null}}var lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!lv[t.type]:a==="textarea"}function _h(t,a,s,c){Ds(c),a=Gs(a,"onChange"),0<a.length&&(s=new Rl("onChange","change",null,s,c),t.push({event:s,listeners:a}))}var Ni=null,ki=null;function cv(t){Kh(t,0)}function $s(t){var a=Ta(t);if(Cs(a))return t}function uv(t,a){if(t==="change")return a}var Dh=!1;if(h){var Vl;if(h){var $l="oninput"in document;if(!$l){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),$l=typeof Fh.oninput=="function"}Vl=$l}else Vl=!1;Dh=Vl&&(!document.documentMode||9<document.documentMode)}function Mh(){Ni&&(Ni.detachEvent("onpropertychange",Rh),ki=Ni=null)}function Rh(t){if(t.propertyName==="value"&&$s(ki)){var a=[];_h(a,ki,t,ci(t)),Vr(cv,a)}}function dv(t,a,s){t==="focusin"?(Mh(),Ni=a,ki=s,Ni.attachEvent("onpropertychange",Rh)):t==="focusout"&&Mh()}function hv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $s(ki)}function mv(t,a){if(t==="click")return $s(a)}function pv(t,a){if(t==="input"||t==="change")return $s(a)}function fv(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var gn=typeof Object.is=="function"?Object.is:fv;function Ai(t,a){if(gn(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var s=Object.keys(t),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var p=s[c];if(!m.call(a,p)||!gn(t[p],a[p]))return!1}return!0}function Bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lh(t,a){var s=Bh(t);t=0;for(var c;s;){if(s.nodeType===3){if(c=t+s.textContent.length,t<=a&&c>=a)return{node:s,offset:a-t};t=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Bh(s)}}function Ih(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Ih(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function zh(){for(var t=window,a=at();a instanceof t.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)t=a.contentWindow;else break;a=at(t.document)}return a}function Wl(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}function gv(t){var a=zh(),s=t.focusedElem,c=t.selectionRange;if(a!==s&&s&&s.ownerDocument&&Ih(s.ownerDocument.documentElement,s)){if(c!==null&&Wl(s)){if(a=c.start,t=c.end,t===void 0&&(t=a),"selectionStart"in s)s.selectionStart=a,s.selectionEnd=Math.min(t,s.value.length);else if(t=(a=s.ownerDocument||document)&&a.defaultView||window,t.getSelection){t=t.getSelection();var p=s.textContent.length,f=Math.min(c.start,p);c=c.end===void 0?f:Math.min(c.end,p),!t.extend&&f>c&&(p=c,c=f,f=p),p=Lh(s,f);var v=Lh(s,c);p&&v&&(t.rangeCount!==1||t.anchorNode!==p.node||t.anchorOffset!==p.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(a=a.createRange(),a.setStart(p.node,p.offset),t.removeAllRanges(),f>c?(t.addRange(a),t.extend(v.node,v.offset)):(a.setEnd(v.node,v.offset),t.addRange(a)))}}for(a=[],t=s;t=t.parentNode;)t.nodeType===1&&a.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<a.length;s++)t=a[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xv=h&&"documentMode"in document&&11>=document.documentMode,Aa=null,Ul=null,Ci=null,Hl=!1;function Oh(t,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Hl||Aa==null||Aa!==at(c)||(c=Aa,"selectionStart"in c&&Wl(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ci&&Ai(Ci,c)||(Ci=c,c=Gs(Ul,"onSelect"),0<c.length&&(a=new Rl("onSelect","select",null,a,s),t.push({event:a,listeners:c}),a.target=Aa)))}function Ws(t,a){var s={};return s[t.toLowerCase()]=a.toLowerCase(),s["Webkit"+t]="webkit"+a,s["Moz"+t]="moz"+a,s}var Ca={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionend:Ws("Transition","TransitionEnd")},Gl={},Vh={};h&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete Ca.animationend.animation,delete Ca.animationiteration.animation,delete Ca.animationstart.animation),"TransitionEvent"in window||delete Ca.transitionend.transition);function Us(t){if(Gl[t])return Gl[t];if(!Ca[t])return t;var a=Ca[t],s;for(s in a)if(a.hasOwnProperty(s)&&s in Vh)return Gl[t]=a[s];return t}var $h=Us("animationend"),Wh=Us("animationiteration"),Uh=Us("animationstart"),Hh=Us("transitionend"),Gh=new Map,qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,a){Gh.set(t,a),u(a,[t])}for(var ql=0;ql<qh.length;ql++){var Yl=qh[ql],yv=Yl.toLowerCase(),vv=Yl[0].toUpperCase()+Yl.slice(1);vr(yv,"on"+vv)}vr($h,"onAnimationEnd"),vr(Wh,"onAnimationIteration"),vr(Uh,"onAnimationStart"),vr("dblclick","onDoubleClick"),vr("focusin","onFocus"),vr("focusout","onBlur"),vr(Hh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function Yh(t,a,s){var c=t.type||"unknown-event";t.currentTarget=s,he(c,a,void 0,t),t.currentTarget=null}function Kh(t,a){a=(a&4)!==0;for(var s=0;s<t.length;s++){var c=t[s],p=c.event;c=c.listeners;e:{var f=void 0;if(a)for(var v=c.length-1;0<=v;v--){var k=c[v],P=k.instance,V=k.currentTarget;if(k=k.listener,P!==f&&p.isPropagationStopped())break e;Yh(p,k,V),f=P}else for(v=0;v<c.length;v++){if(k=c[v],P=k.instance,V=k.currentTarget,k=k.listener,P!==f&&p.isPropagationStopped())break e;Yh(p,k,V),f=P}}}if(Q)throw t=te,Q=!1,te=null,t}function Qe(t,a){var s=a[nc];s===void 0&&(s=a[nc]=new Set);var c=t+"__bubble";s.has(c)||(Qh(a,t,2,!1),s.add(c))}function Kl(t,a,s){var c=0;a&&(c|=4),Qh(s,t,c,a)}var Hs="_reactListening"+Math.random().toString(36).slice(2);function Si(t){if(!t[Hs]){t[Hs]=!0,o.forEach(function(s){s!=="selectionchange"&&(bv.has(s)||Kl(s,!1,t),Kl(s,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Hs]||(a[Hs]=!0,Kl("selectionchange",!1,a))}}function Qh(t,a,s,c){switch(vh(a)){case 1:var p=M0;break;case 4:p=R0;break;default:p=Dl}s=p.bind(null,a,s,t),p=void 0,!hi||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),c?p!==void 0?t.addEventListener(a,s,{capture:!0,passive:p}):t.addEventListener(a,s,!0):p!==void 0?t.addEventListener(a,s,{passive:p}):t.addEventListener(a,s,!1)}function Ql(t,a,s,c,p){var f=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var k=c.stateNode.containerInfo;if(k===p||k.nodeType===8&&k.parentNode===p)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===p||P.nodeType===8&&P.parentNode===p))return;v=v.return}for(;k!==null;){if(v=Wr(k),v===null)return;if(P=v.tag,P===5||P===6){c=f=v;continue e}k=k.parentNode}}c=c.return}Vr(function(){var V=f,X=ci(s),J=[];e:{var K=Gh.get(t);if(K!==void 0){var se=Rl,ce=t;switch(t){case"keypress":if(zs(s)===0)break e;case"keydown":case"keyup":se=Q0;break;case"focusin":ce="focus",se=Il;break;case"focusout":ce="blur",se=Il;break;case"beforeblur":case"afterblur":se=Il;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=I0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=J0;break;case $h:case Wh:case Uh:se=V0;break;case Hh:se=tv;break;case"scroll":se=B0;break;case"wheel":se=rv;break;case"copy":case"cut":case"paste":se=W0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=kh}var me=(a&4)!==0,st=!me&&t==="scroll",B=me?K!==null?K+"Capture":null:K;me=[];for(var _=V,L;_!==null;){L=_;var ne=L.stateNode;if(L.tag===5&&ne!==null&&(L=ne,B!==null&&(ne=ur(_,B),ne!=null&&me.push(Ti(_,ne,L)))),st)break;_=_.return}0<me.length&&(K=new se(K,ce,null,s,X),J.push({event:K,listeners:me}))}}if((a&7)===0){e:{if(K=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",K&&s!==xa&&(ce=s.relatedTarget||s.fromElement)&&(Wr(ce)||ce[Hn]))break e;if((se||K)&&(K=X.window===X?X:(K=X.ownerDocument)?K.defaultView||K.parentWindow:window,se?(ce=s.relatedTarget||s.toElement,se=V,ce=ce?Wr(ce):null,ce!==null&&(st=ie(ce),ce!==st||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=V),se!==ce)){if(me=jh,ne="onMouseLeave",B="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(me=kh,ne="onPointerLeave",B="onPointerEnter",_="pointer"),st=se==null?K:Ta(se),L=ce==null?K:Ta(ce),K=new me(ne,_+"leave",se,s,X),K.target=st,K.relatedTarget=L,ne=null,Wr(X)===V&&(me=new me(B,_+"enter",ce,s,X),me.target=L,me.relatedTarget=st,ne=me),st=ne,se&&ce)t:{for(me=se,B=ce,_=0,L=me;L;L=Ea(L))_++;for(L=0,ne=B;ne;ne=Ea(ne))L++;for(;0<_-L;)me=Ea(me),_--;for(;0<L-_;)B=Ea(B),L--;for(;_--;){if(me===B||B!==null&&me===B.alternate)break t;me=Ea(me),B=Ea(B)}me=null}else me=null;se!==null&&Xh(J,K,se,me,!1),ce!==null&&st!==null&&Xh(J,st,ce,me,!0)}}e:{if(K=V?Ta(V):window,se=K.nodeName&&K.nodeName.toLowerCase(),se==="select"||se==="input"&&K.type==="file")var pe=uv;else if(Ph(K))if(Dh)pe=pv;else{pe=hv;var je=dv}else(se=K.nodeName)&&se.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(pe=mv);if(pe&&(pe=pe(t,V))){_h(J,pe,s,X);break e}je&&je(t,K,V),t==="focusout"&&(je=K._wrapperState)&&je.controlled&&K.type==="number"&&oi(K,"number",K.value)}switch(je=V?Ta(V):window,t){case"focusin":(Ph(je)||je.contentEditable==="true")&&(Aa=je,Ul=V,Ci=null);break;case"focusout":Ci=Ul=Aa=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,Oh(J,s,X);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":Oh(J,s,X)}var Ne;if(Ol)e:{switch(t){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else ka?Sh(t,s)&&(Ee="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ee="onCompositionStart");Ee&&(Ah&&s.locale!=="ko"&&(ka||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&ka&&(Ne=bh()):(yr=X,Ml="value"in yr?yr.value:yr.textContent,ka=!0)),je=Gs(V,Ee),0<je.length&&(Ee=new Nh(Ee,t,null,s,X),J.push({event:Ee,listeners:je}),Ne?Ee.data=Ne:(Ne=Th(s),Ne!==null&&(Ee.data=Ne)))),(Ne=iv?sv(t,s):ov(t,s))&&(V=Gs(V,"onBeforeInput"),0<V.length&&(X=new Nh("onBeforeInput","beforeinput",null,s,X),J.push({event:X,listeners:V}),X.data=Ne))}Kh(J,a)})}function Ti(t,a,s){return{instance:t,listener:a,currentTarget:s}}function Gs(t,a){for(var s=a+"Capture",c=[];t!==null;){var p=t,f=p.stateNode;p.tag===5&&f!==null&&(p=f,f=ur(t,s),f!=null&&c.unshift(Ti(t,f,p)),f=ur(t,a),f!=null&&c.push(Ti(t,f,p))),t=t.return}return c}function Ea(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xh(t,a,s,c,p){for(var f=a._reactName,v=[];s!==null&&s!==c;){var k=s,P=k.alternate,V=k.stateNode;if(P!==null&&P===c)break;k.tag===5&&V!==null&&(k=V,p?(P=ur(s,f),P!=null&&v.unshift(Ti(s,P,k))):p||(P=ur(s,f),P!=null&&v.push(Ti(s,P,k)))),s=s.return}v.length!==0&&t.push({event:a,listeners:v})}var wv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function Zh(t){return(typeof t=="string"?t:""+t).replace(wv,`
`).replace(jv,"")}function qs(t,a,s){if(a=Zh(a),Zh(t)!==a&&s)throw Error(i(425))}function Ys(){}var Xl=null,Zl=null;function Jl(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ec=typeof setTimeout=="function"?setTimeout:void 0,Nv=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,kv=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(t){return Jh.resolve(null).then(t).catch(Av)}:ec;function Av(t){setTimeout(function(){throw t})}function tc(t,a){var s=a,c=0;do{var p=s.nextSibling;if(t.removeChild(s),p&&p.nodeType===8)if(s=p.data,s==="/$"){if(c===0){t.removeChild(p),vi(a);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=p}while(s);vi(a)}function br(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return t}function em(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return t;a--}else s==="/$"&&a++}t=t.previousSibling}return null}var Sa=Math.random().toString(36).slice(2),Pn="__reactFiber$"+Sa,Pi="__reactProps$"+Sa,Hn="__reactContainer$"+Sa,nc="__reactEvents$"+Sa,Cv="__reactListeners$"+Sa,Ev="__reactHandles$"+Sa;function Wr(t){var a=t[Pn];if(a)return a;for(var s=t.parentNode;s;){if(a=s[Hn]||s[Pn]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(t=em(t);t!==null;){if(s=t[Pn])return s;t=em(t)}return a}t=s,s=t.parentNode}return null}function _i(t){return t=t[Pn]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ta(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function Ks(t){return t[Pi]||null}var rc=[],Pa=-1;function wr(t){return{current:t}}function Xe(t){0>Pa||(t.current=rc[Pa],rc[Pa]=null,Pa--)}function Ke(t,a){Pa++,rc[Pa]=t.current,t.current=a}var jr={},jt=wr(jr),Rt=wr(!1),Ur=jr;function _a(t,a){var s=t.type.contextTypes;if(!s)return jr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===a)return c.__reactInternalMemoizedMaskedChildContext;var p={},f;for(f in s)p[f]=a[f];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=p),p}function Bt(t){return t=t.childContextTypes,t!=null}function Qs(){Xe(Rt),Xe(jt)}function tm(t,a,s){if(jt.current!==jr)throw Error(i(168));Ke(jt,a),Ke(Rt,s)}function nm(t,a,s){var c=t.stateNode;if(a=a.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var p in c)if(!(p in a))throw Error(i(108,Be(t)||"Unknown",p));return H({},s,c)}function Xs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,Ur=jt.current,Ke(jt,t),Ke(Rt,Rt.current),!0}function rm(t,a,s){var c=t.stateNode;if(!c)throw Error(i(169));s?(t=nm(t,a,Ur),c.__reactInternalMemoizedMergedChildContext=t,Xe(Rt),Xe(jt),Ke(jt,t)):Xe(Rt),Ke(Rt,s)}var Gn=null,Zs=!1,ac=!1;function am(t){Gn===null?Gn=[t]:Gn.push(t)}function Sv(t){Zs=!0,am(t)}function Nr(){if(!ac&&Gn!==null){ac=!0;var t=0,a=We;try{var s=Gn;for(We=1;t<s.length;t++){var c=s[t];do c=c(!0);while(c!==null)}Gn=null,Zs=!1}catch(p){throw Gn!==null&&(Gn=Gn.slice(t+1)),Ye($n,Nr),p}finally{We=a,ac=!1}}return null}var Da=[],Fa=0,Js=null,eo=0,Xt=[],Zt=0,Hr=null,qn=1,Yn="";function Gr(t,a){Da[Fa++]=eo,Da[Fa++]=Js,Js=t,eo=a}function im(t,a,s){Xt[Zt++]=qn,Xt[Zt++]=Yn,Xt[Zt++]=Hr,Hr=t;var c=qn;t=Yn;var p=32-Pe(c)-1;c&=~(1<<p),s+=1;var f=32-Pe(a)+p;if(30<f){var v=p-p%5;f=(c&(1<<v)-1).toString(32),c>>=v,p-=v,qn=1<<32-Pe(a)+p|s<<p|c,Yn=f+t}else qn=1<<f|s<<p|c,Yn=t}function ic(t){t.return!==null&&(Gr(t,1),im(t,1,0))}function sc(t){for(;t===Js;)Js=Da[--Fa],Da[Fa]=null,eo=Da[--Fa],Da[Fa]=null;for(;t===Hr;)Hr=Xt[--Zt],Xt[Zt]=null,Yn=Xt[--Zt],Xt[Zt]=null,qn=Xt[--Zt],Xt[Zt]=null}var Wt=null,Ut=null,Ze=!1,xn=null;function sm(t,a){var s=nn(5,null,null,0);s.elementType="DELETED",s.stateNode=a,s.return=t,a=t.deletions,a===null?(t.deletions=[s],t.flags|=16):a.push(s)}function om(t,a){switch(t.tag){case 5:var s=t.type;return a=a.nodeType!==1||s.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(t.stateNode=a,Wt=t,Ut=br(a.firstChild),!0):!1;case 6:return a=t.pendingProps===""||a.nodeType!==3?null:a,a!==null?(t.stateNode=a,Wt=t,Ut=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(s=Hr!==null?{id:qn,overflow:Yn}:null,t.memoizedState={dehydrated:a,treeContext:s,retryLane:1073741824},s=nn(18,null,null,0),s.stateNode=a,s.return=t,t.child=s,Wt=t,Ut=null,!0):!1;default:return!1}}function oc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lc(t){if(Ze){var a=Ut;if(a){var s=a;if(!om(t,a)){if(oc(t))throw Error(i(418));a=br(s.nextSibling);var c=Wt;a&&om(t,a)?sm(c,s):(t.flags=t.flags&-4097|2,Ze=!1,Wt=t)}}else{if(oc(t))throw Error(i(418));t.flags=t.flags&-4097|2,Ze=!1,Wt=t}}}function lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function to(t){if(t!==Wt)return!1;if(!Ze)return lm(t),Ze=!0,!1;var a;if((a=t.tag!==3)&&!(a=t.tag!==5)&&(a=t.type,a=a!=="head"&&a!=="body"&&!Jl(t.type,t.memoizedProps)),a&&(a=Ut)){if(oc(t))throw cm(),Error(i(418));for(;a;)sm(t,a),a=br(a.nextSibling)}if(lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(a===0){Ut=br(t.nextSibling);break e}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++}t=t.nextSibling}Ut=null}}else Ut=Wt?br(t.stateNode.nextSibling):null;return!0}function cm(){for(var t=Ut;t;)t=br(t.nextSibling)}function Ma(){Ut=Wt=null,Ze=!1}function cc(t){xn===null?xn=[t]:xn.push(t)}var Tv=R.ReactCurrentBatchConfig;function Di(t,a,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(i(309));var c=s.stateNode}if(!c)throw Error(i(147,t));var p=c,f=""+t;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===f?a.ref:(a=function(v){var k=p.refs;v===null?delete k[f]:k[f]=v},a._stringRef=f,a)}if(typeof t!="string")throw Error(i(284));if(!s._owner)throw Error(i(290,t))}return t}function no(t,a){throw t=Object.prototype.toString.call(a),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t))}function um(t){var a=t._init;return a(t._payload)}function dm(t){function a(B,_){if(t){var L=B.deletions;L===null?(B.deletions=[_],B.flags|=16):L.push(_)}}function s(B,_){if(!t)return null;for(;_!==null;)a(B,_),_=_.sibling;return null}function c(B,_){for(B=new Map;_!==null;)_.key!==null?B.set(_.key,_):B.set(_.index,_),_=_.sibling;return B}function p(B,_){return B=_r(B,_),B.index=0,B.sibling=null,B}function f(B,_,L){return B.index=L,t?(L=B.alternate,L!==null?(L=L.index,L<_?(B.flags|=2,_):L):(B.flags|=2,_)):(B.flags|=1048576,_)}function v(B){return t&&B.alternate===null&&(B.flags|=2),B}function k(B,_,L,ne){return _===null||_.tag!==6?(_=eu(L,B.mode,ne),_.return=B,_):(_=p(_,L),_.return=B,_)}function P(B,_,L,ne){var pe=L.type;return pe===q?X(B,_,L.props.children,ne,L.key):_!==null&&(_.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ge&&um(pe)===_.type)?(ne=p(_,L.props),ne.ref=Di(B,_,L),ne.return=B,ne):(ne=Eo(L.type,L.key,L.props,null,B.mode,ne),ne.ref=Di(B,_,L),ne.return=B,ne)}function V(B,_,L,ne){return _===null||_.tag!==4||_.stateNode.containerInfo!==L.containerInfo||_.stateNode.implementation!==L.implementation?(_=tu(L,B.mode,ne),_.return=B,_):(_=p(_,L.children||[]),_.return=B,_)}function X(B,_,L,ne,pe){return _===null||_.tag!==7?(_=ea(L,B.mode,ne,pe),_.return=B,_):(_=p(_,L),_.return=B,_)}function J(B,_,L){if(typeof _=="string"&&_!==""||typeof _=="number")return _=eu(""+_,B.mode,L),_.return=B,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case U:return L=Eo(_.type,_.key,_.props,null,B.mode,L),L.ref=Di(B,null,_),L.return=B,L;case F:return _=tu(_,B.mode,L),_.return=B,_;case ge:var ne=_._init;return J(B,ne(_._payload),L)}if(ar(_)||$(_))return _=ea(_,B.mode,L,null),_.return=B,_;no(B,_)}return null}function K(B,_,L,ne){var pe=_!==null?_.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return pe!==null?null:k(B,_,""+L,ne);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case U:return L.key===pe?P(B,_,L,ne):null;case F:return L.key===pe?V(B,_,L,ne):null;case ge:return pe=L._init,K(B,_,pe(L._payload),ne)}if(ar(L)||$(L))return pe!==null?null:X(B,_,L,ne,null);no(B,L)}return null}function se(B,_,L,ne,pe){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return B=B.get(L)||null,k(_,B,""+ne,pe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case U:return B=B.get(ne.key===null?L:ne.key)||null,P(_,B,ne,pe);case F:return B=B.get(ne.key===null?L:ne.key)||null,V(_,B,ne,pe);case ge:var je=ne._init;return se(B,_,L,je(ne._payload),pe)}if(ar(ne)||$(ne))return B=B.get(L)||null,X(_,B,ne,pe,null);no(_,ne)}return null}function ce(B,_,L,ne){for(var pe=null,je=null,Ne=_,Ee=_=0,gt=null;Ne!==null&&Ee<L.length;Ee++){Ne.index>Ee?(gt=Ne,Ne=null):gt=Ne.sibling;var Ve=K(B,Ne,L[Ee],ne);if(Ve===null){Ne===null&&(Ne=gt);break}t&&Ne&&Ve.alternate===null&&a(B,Ne),_=f(Ve,_,Ee),je===null?pe=Ve:je.sibling=Ve,je=Ve,Ne=gt}if(Ee===L.length)return s(B,Ne),Ze&&Gr(B,Ee),pe;if(Ne===null){for(;Ee<L.length;Ee++)Ne=J(B,L[Ee],ne),Ne!==null&&(_=f(Ne,_,Ee),je===null?pe=Ne:je.sibling=Ne,je=Ne);return Ze&&Gr(B,Ee),pe}for(Ne=c(B,Ne);Ee<L.length;Ee++)gt=se(Ne,B,Ee,L[Ee],ne),gt!==null&&(t&&gt.alternate!==null&&Ne.delete(gt.key===null?Ee:gt.key),_=f(gt,_,Ee),je===null?pe=gt:je.sibling=gt,je=gt);return t&&Ne.forEach(function(Dr){return a(B,Dr)}),Ze&&Gr(B,Ee),pe}function me(B,_,L,ne){var pe=$(L);if(typeof pe!="function")throw Error(i(150));if(L=pe.call(L),L==null)throw Error(i(151));for(var je=pe=null,Ne=_,Ee=_=0,gt=null,Ve=L.next();Ne!==null&&!Ve.done;Ee++,Ve=L.next()){Ne.index>Ee?(gt=Ne,Ne=null):gt=Ne.sibling;var Dr=K(B,Ne,Ve.value,ne);if(Dr===null){Ne===null&&(Ne=gt);break}t&&Ne&&Dr.alternate===null&&a(B,Ne),_=f(Dr,_,Ee),je===null?pe=Dr:je.sibling=Dr,je=Dr,Ne=gt}if(Ve.done)return s(B,Ne),Ze&&Gr(B,Ee),pe;if(Ne===null){for(;!Ve.done;Ee++,Ve=L.next())Ve=J(B,Ve.value,ne),Ve!==null&&(_=f(Ve,_,Ee),je===null?pe=Ve:je.sibling=Ve,je=Ve);return Ze&&Gr(B,Ee),pe}for(Ne=c(B,Ne);!Ve.done;Ee++,Ve=L.next())Ve=se(Ne,B,Ee,Ve.value,ne),Ve!==null&&(t&&Ve.alternate!==null&&Ne.delete(Ve.key===null?Ee:Ve.key),_=f(Ve,_,Ee),je===null?pe=Ve:je.sibling=Ve,je=Ve);return t&&Ne.forEach(function(lb){return a(B,lb)}),Ze&&Gr(B,Ee),pe}function st(B,_,L,ne){if(typeof L=="object"&&L!==null&&L.type===q&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case U:e:{for(var pe=L.key,je=_;je!==null;){if(je.key===pe){if(pe=L.type,pe===q){if(je.tag===7){s(B,je.sibling),_=p(je,L.props.children),_.return=B,B=_;break e}}else if(je.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ge&&um(pe)===je.type){s(B,je.sibling),_=p(je,L.props),_.ref=Di(B,je,L),_.return=B,B=_;break e}s(B,je);break}else a(B,je);je=je.sibling}L.type===q?(_=ea(L.props.children,B.mode,ne,L.key),_.return=B,B=_):(ne=Eo(L.type,L.key,L.props,null,B.mode,ne),ne.ref=Di(B,_,L),ne.return=B,B=ne)}return v(B);case F:e:{for(je=L.key;_!==null;){if(_.key===je)if(_.tag===4&&_.stateNode.containerInfo===L.containerInfo&&_.stateNode.implementation===L.implementation){s(B,_.sibling),_=p(_,L.children||[]),_.return=B,B=_;break e}else{s(B,_);break}else a(B,_);_=_.sibling}_=tu(L,B.mode,ne),_.return=B,B=_}return v(B);case ge:return je=L._init,st(B,_,je(L._payload),ne)}if(ar(L))return ce(B,_,L,ne);if($(L))return me(B,_,L,ne);no(B,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,_!==null&&_.tag===6?(s(B,_.sibling),_=p(_,L),_.return=B,B=_):(s(B,_),_=eu(L,B.mode,ne),_.return=B,B=_),v(B)):s(B,_)}return st}var Ra=dm(!0),hm=dm(!1),ro=wr(null),ao=null,Ba=null,uc=null;function dc(){uc=Ba=ao=null}function hc(t){var a=ro.current;Xe(ro),t._currentValue=a}function mc(t,a,s){for(;t!==null;){var c=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),t===s)break;t=t.return}}function La(t,a){ao=t,uc=Ba=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&a)!==0&&(Lt=!0),t.firstContext=null)}function Jt(t){var a=t._currentValue;if(uc!==t)if(t={context:t,memoizedValue:a,next:null},Ba===null){if(ao===null)throw Error(i(308));Ba=t,ao.dependencies={lanes:0,firstContext:t}}else Ba=Ba.next=t;return a}var qr=null;function pc(t){qr===null?qr=[t]:qr.push(t)}function mm(t,a,s,c){var p=a.interleaved;return p===null?(s.next=s,pc(a)):(s.next=p.next,p.next=s),a.interleaved=s,Kn(t,c)}function Kn(t,a){t.lanes|=a;var s=t.alternate;for(s!==null&&(s.lanes|=a),s=t,t=t.return;t!==null;)t.childLanes|=a,s=t.alternate,s!==null&&(s.childLanes|=a),s=t,t=t.return;return s.tag===3?s.stateNode:null}var kr=!1;function fc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,a){return{eventTime:t,lane:a,tag:0,payload:null,callback:null,next:null}}function Ar(t,a,s){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(ze&2)!==0){var p=c.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a,Kn(t,s)}return p=c.interleaved,p===null?(a.next=a,pc(c)):(a.next=p.next,p.next=a),c.interleaved=a,Kn(t,s)}function io(t,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194240)!==0)){var c=a.lanes;c&=t.pendingLanes,s|=c,a.lanes=s,Tl(t,s)}}function fm(t,a){var s=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var p=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var v={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};f===null?p=f=v:f=f.next=v,s=s.next}while(s!==null);f===null?p=f=a:f=f.next=a}else p=f=a;s={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:f,shared:c.shared,effects:c.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=a:t.next=a,s.lastBaseUpdate=a}function so(t,a,s,c){var p=t.updateQueue;kr=!1;var f=p.firstBaseUpdate,v=p.lastBaseUpdate,k=p.shared.pending;if(k!==null){p.shared.pending=null;var P=k,V=P.next;P.next=null,v===null?f=V:v.next=V,v=P;var X=t.alternate;X!==null&&(X=X.updateQueue,k=X.lastBaseUpdate,k!==v&&(k===null?X.firstBaseUpdate=V:k.next=V,X.lastBaseUpdate=P))}if(f!==null){var J=p.baseState;v=0,X=V=P=null,k=f;do{var K=k.lane,se=k.eventTime;if((c&K)===K){X!==null&&(X=X.next={eventTime:se,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var ce=t,me=k;switch(K=a,se=s,me.tag){case 1:if(ce=me.payload,typeof ce=="function"){J=ce.call(se,J,K);break e}J=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=me.payload,K=typeof ce=="function"?ce.call(se,J,K):ce,K==null)break e;J=H({},J,K);break e;case 2:kr=!0}}k.callback!==null&&k.lane!==0&&(t.flags|=64,K=p.effects,K===null?p.effects=[k]:K.push(k))}else se={eventTime:se,lane:K,tag:k.tag,payload:k.payload,callback:k.callback,next:null},X===null?(V=X=se,P=J):X=X.next=se,v|=K;if(k=k.next,k===null){if(k=p.shared.pending,k===null)break;K=k,k=K.next,K.next=null,p.lastBaseUpdate=K,p.shared.pending=null}}while(!0);if(X===null&&(P=J),p.baseState=P,p.firstBaseUpdate=V,p.lastBaseUpdate=X,a=p.shared.interleaved,a!==null){p=a;do v|=p.lane,p=p.next;while(p!==a)}else f===null&&(p.shared.lanes=0);Qr|=v,t.lanes=v,t.memoizedState=J}}function gm(t,a,s){if(t=a.effects,a.effects=null,t!==null)for(a=0;a<t.length;a++){var c=t[a],p=c.callback;if(p!==null){if(c.callback=null,c=s,typeof p!="function")throw Error(i(191,p));p.call(c)}}}var Fi={},_n=wr(Fi),Mi=wr(Fi),Ri=wr(Fi);function Yr(t){if(t===Fi)throw Error(i(174));return t}function gc(t,a){switch(Ke(Ri,a),Ke(Mi,t),Ke(_n,Fi),t=a.nodeType,t){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:ma(null,"");break;default:t=t===8?a.parentNode:a,a=t.namespaceURI||null,t=t.tagName,a=ma(a,t)}Xe(_n),Ke(_n,a)}function Ia(){Xe(_n),Xe(Mi),Xe(Ri)}function xm(t){Yr(Ri.current);var a=Yr(_n.current),s=ma(a,t.type);a!==s&&(Ke(Mi,t),Ke(_n,s))}function xc(t){Mi.current===t&&(Xe(_n),Xe(Mi))}var Je=wr(0);function oo(t){for(var a=t;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var yc=[];function vc(){for(var t=0;t<yc.length;t++)yc[t]._workInProgressVersionPrimary=null;yc.length=0}var lo=R.ReactCurrentDispatcher,bc=R.ReactCurrentBatchConfig,Kr=0,et=null,ut=null,pt=null,co=!1,Bi=!1,Li=0,Pv=0;function Nt(){throw Error(i(321))}function wc(t,a){if(a===null)return!1;for(var s=0;s<a.length&&s<t.length;s++)if(!gn(t[s],a[s]))return!1;return!0}function jc(t,a,s,c,p,f){if(Kr=f,et=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,lo.current=t===null||t.memoizedState===null?Mv:Rv,t=s(c,p),Bi){f=0;do{if(Bi=!1,Li=0,25<=f)throw Error(i(301));f+=1,pt=ut=null,a.updateQueue=null,lo.current=Bv,t=s(c,p)}while(Bi)}if(lo.current=mo,a=ut!==null&&ut.next!==null,Kr=0,pt=ut=et=null,co=!1,a)throw Error(i(300));return t}function Nc(){var t=Li!==0;return Li=0,t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?et.memoizedState=pt=t:pt=pt.next=t,pt}function en(){if(ut===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var a=pt===null?et.memoizedState:pt.next;if(a!==null)pt=a,ut=t;else{if(t===null)throw Error(i(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},pt===null?et.memoizedState=pt=t:pt=pt.next=t}return pt}function Ii(t,a){return typeof a=="function"?a(t):a}function kc(t){var a=en(),s=a.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=t;var c=ut,p=c.baseQueue,f=s.pending;if(f!==null){if(p!==null){var v=p.next;p.next=f.next,f.next=v}c.baseQueue=p=f,s.pending=null}if(p!==null){f=p.next,c=c.baseState;var k=v=null,P=null,V=f;do{var X=V.lane;if((Kr&X)===X)P!==null&&(P=P.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),c=V.hasEagerState?V.eagerState:t(c,V.action);else{var J={lane:X,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};P===null?(k=P=J,v=c):P=P.next=J,et.lanes|=X,Qr|=X}V=V.next}while(V!==null&&V!==f);P===null?v=c:P.next=k,gn(c,a.memoizedState)||(Lt=!0),a.memoizedState=c,a.baseState=v,a.baseQueue=P,s.lastRenderedState=c}if(t=s.interleaved,t!==null){p=t;do f=p.lane,et.lanes|=f,Qr|=f,p=p.next;while(p!==t)}else p===null&&(s.lanes=0);return[a.memoizedState,s.dispatch]}function Ac(t){var a=en(),s=a.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=t;var c=s.dispatch,p=s.pending,f=a.memoizedState;if(p!==null){s.pending=null;var v=p=p.next;do f=t(f,v.action),v=v.next;while(v!==p);gn(f,a.memoizedState)||(Lt=!0),a.memoizedState=f,a.baseQueue===null&&(a.baseState=f),s.lastRenderedState=f}return[f,c]}function ym(){}function vm(t,a){var s=et,c=en(),p=a(),f=!gn(c.memoizedState,p);if(f&&(c.memoizedState=p,Lt=!0),c=c.queue,Cc(jm.bind(null,s,c,t),[t]),c.getSnapshot!==a||f||pt!==null&&pt.memoizedState.tag&1){if(s.flags|=2048,zi(9,wm.bind(null,s,c,p,a),void 0,null),ft===null)throw Error(i(349));(Kr&30)!==0||bm(s,a,p)}return p}function bm(t,a,s){t.flags|=16384,t={getSnapshot:a,value:s},a=et.updateQueue,a===null?(a={lastEffect:null,stores:null},et.updateQueue=a,a.stores=[t]):(s=a.stores,s===null?a.stores=[t]:s.push(t))}function wm(t,a,s,c){a.value=s,a.getSnapshot=c,Nm(a)&&km(t)}function jm(t,a,s){return s(function(){Nm(a)&&km(t)})}function Nm(t){var a=t.getSnapshot;t=t.value;try{var s=a();return!gn(t,s)}catch{return!0}}function km(t){var a=Kn(t,1);a!==null&&wn(a,t,1,-1)}function Am(t){var a=Dn();return typeof t=="function"&&(t=t()),a.memoizedState=a.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:t},a.queue=t,t=t.dispatch=Fv.bind(null,et,t),[a.memoizedState,t]}function zi(t,a,s,c){return t={tag:t,create:a,destroy:s,deps:c,next:null},a=et.updateQueue,a===null?(a={lastEffect:null,stores:null},et.updateQueue=a,a.lastEffect=t.next=t):(s=a.lastEffect,s===null?a.lastEffect=t.next=t:(c=s.next,s.next=t,t.next=c,a.lastEffect=t)),t}function Cm(){return en().memoizedState}function uo(t,a,s,c){var p=Dn();et.flags|=t,p.memoizedState=zi(1|a,s,void 0,c===void 0?null:c)}function ho(t,a,s,c){var p=en();c=c===void 0?null:c;var f=void 0;if(ut!==null){var v=ut.memoizedState;if(f=v.destroy,c!==null&&wc(c,v.deps)){p.memoizedState=zi(a,s,f,c);return}}et.flags|=t,p.memoizedState=zi(1|a,s,f,c)}function Em(t,a){return uo(8390656,8,t,a)}function Cc(t,a){return ho(2048,8,t,a)}function Sm(t,a){return ho(4,2,t,a)}function Tm(t,a){return ho(4,4,t,a)}function Pm(t,a){if(typeof a=="function")return t=t(),a(t),function(){a(null)};if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function _m(t,a,s){return s=s!=null?s.concat([t]):null,ho(4,4,Pm.bind(null,a,t),s)}function Ec(){}function Dm(t,a){var s=en();a=a===void 0?null:a;var c=s.memoizedState;return c!==null&&a!==null&&wc(a,c[1])?c[0]:(s.memoizedState=[t,a],t)}function Fm(t,a){var s=en();a=a===void 0?null:a;var c=s.memoizedState;return c!==null&&a!==null&&wc(a,c[1])?c[0]:(t=t(),s.memoizedState=[t,a],t)}function Mm(t,a,s){return(Kr&21)===0?(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=s):(gn(s,a)||(s=uh(),et.lanes|=s,Qr|=s,t.baseState=!0),a)}function _v(t,a){var s=We;We=s!==0&&4>s?s:4,t(!0);var c=bc.transition;bc.transition={};try{t(!1),a()}finally{We=s,bc.transition=c}}function Rm(){return en().memoizedState}function Dv(t,a,s){var c=Tr(t);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},Bm(t))Lm(a,s);else if(s=mm(t,a,s,c),s!==null){var p=Dt();wn(s,t,c,p),Im(s,a,c)}}function Fv(t,a,s){var c=Tr(t),p={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if(Bm(t))Lm(a,p);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=a.lastRenderedReducer,f!==null))try{var v=a.lastRenderedState,k=f(v,s);if(p.hasEagerState=!0,p.eagerState=k,gn(k,v)){var P=a.interleaved;P===null?(p.next=p,pc(a)):(p.next=P.next,P.next=p),a.interleaved=p;return}}catch{}finally{}s=mm(t,a,p,c),s!==null&&(p=Dt(),wn(s,t,c,p),Im(s,a,c))}}function Bm(t){var a=t.alternate;return t===et||a!==null&&a===et}function Lm(t,a){Bi=co=!0;var s=t.pending;s===null?a.next=a:(a.next=s.next,s.next=a),t.pending=a}function Im(t,a,s){if((s&4194240)!==0){var c=a.lanes;c&=t.pendingLanes,s|=c,a.lanes=s,Tl(t,s)}}var mo={readContext:Jt,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},Mv={readContext:Jt,useCallback:function(t,a){return Dn().memoizedState=[t,a===void 0?null:a],t},useContext:Jt,useEffect:Em,useImperativeHandle:function(t,a,s){return s=s!=null?s.concat([t]):null,uo(4194308,4,Pm.bind(null,a,t),s)},useLayoutEffect:function(t,a){return uo(4194308,4,t,a)},useInsertionEffect:function(t,a){return uo(4,2,t,a)},useMemo:function(t,a){var s=Dn();return a=a===void 0?null:a,t=t(),s.memoizedState=[t,a],t},useReducer:function(t,a,s){var c=Dn();return a=s!==void 0?s(a):a,c.memoizedState=c.baseState=a,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},c.queue=t,t=t.dispatch=Dv.bind(null,et,t),[c.memoizedState,t]},useRef:function(t){var a=Dn();return t={current:t},a.memoizedState=t},useState:Am,useDebugValue:Ec,useDeferredValue:function(t){return Dn().memoizedState=t},useTransition:function(){var t=Am(!1),a=t[0];return t=_v.bind(null,t[1]),Dn().memoizedState=t,[a,t]},useMutableSource:function(){},useSyncExternalStore:function(t,a,s){var c=et,p=Dn();if(Ze){if(s===void 0)throw Error(i(407));s=s()}else{if(s=a(),ft===null)throw Error(i(349));(Kr&30)!==0||bm(c,a,s)}p.memoizedState=s;var f={value:s,getSnapshot:a};return p.queue=f,Em(jm.bind(null,c,f,t),[t]),c.flags|=2048,zi(9,wm.bind(null,c,f,s,a),void 0,null),s},useId:function(){var t=Dn(),a=ft.identifierPrefix;if(Ze){var s=Yn,c=qn;s=(c&~(1<<32-Pe(c)-1)).toString(32)+s,a=":"+a+"R"+s,s=Li++,0<s&&(a+="H"+s.toString(32)),a+=":"}else s=Pv++,a=":"+a+"r"+s.toString(32)+":";return t.memoizedState=a},unstable_isNewReconciler:!1},Rv={readContext:Jt,useCallback:Dm,useContext:Jt,useEffect:Cc,useImperativeHandle:_m,useInsertionEffect:Sm,useLayoutEffect:Tm,useMemo:Fm,useReducer:kc,useRef:Cm,useState:function(){return kc(Ii)},useDebugValue:Ec,useDeferredValue:function(t){var a=en();return Mm(a,ut.memoizedState,t)},useTransition:function(){var t=kc(Ii)[0],a=en().memoizedState;return[t,a]},useMutableSource:ym,useSyncExternalStore:vm,useId:Rm,unstable_isNewReconciler:!1},Bv={readContext:Jt,useCallback:Dm,useContext:Jt,useEffect:Cc,useImperativeHandle:_m,useInsertionEffect:Sm,useLayoutEffect:Tm,useMemo:Fm,useReducer:Ac,useRef:Cm,useState:function(){return Ac(Ii)},useDebugValue:Ec,useDeferredValue:function(t){var a=en();return ut===null?a.memoizedState=t:Mm(a,ut.memoizedState,t)},useTransition:function(){var t=Ac(Ii)[0],a=en().memoizedState;return[t,a]},useMutableSource:ym,useSyncExternalStore:vm,useId:Rm,unstable_isNewReconciler:!1};function yn(t,a){if(t&&t.defaultProps){a=H({},a),t=t.defaultProps;for(var s in t)a[s]===void 0&&(a[s]=t[s]);return a}return a}function Sc(t,a,s,c){a=t.memoizedState,s=s(c,a),s=s==null?a:H({},a,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var po={isMounted:function(t){return(t=t._reactInternals)?ie(t)===t:!1},enqueueSetState:function(t,a,s){t=t._reactInternals;var c=Dt(),p=Tr(t),f=Qn(c,p);f.payload=a,s!=null&&(f.callback=s),a=Ar(t,f,p),a!==null&&(wn(a,t,p,c),io(a,t,p))},enqueueReplaceState:function(t,a,s){t=t._reactInternals;var c=Dt(),p=Tr(t),f=Qn(c,p);f.tag=1,f.payload=a,s!=null&&(f.callback=s),a=Ar(t,f,p),a!==null&&(wn(a,t,p,c),io(a,t,p))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var s=Dt(),c=Tr(t),p=Qn(s,c);p.tag=2,a!=null&&(p.callback=a),a=Ar(t,p,c),a!==null&&(wn(a,t,c,s),io(a,t,c))}};function zm(t,a,s,c,p,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,f,v):a.prototype&&a.prototype.isPureReactComponent?!Ai(s,c)||!Ai(p,f):!0}function Om(t,a,s){var c=!1,p=jr,f=a.contextType;return typeof f=="object"&&f!==null?f=Jt(f):(p=Bt(a)?Ur:jt.current,c=a.contextTypes,f=(c=c!=null)?_a(t,p):jr),a=new a(s,f),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=po,t.stateNode=a,a._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=p,t.__reactInternalMemoizedMaskedChildContext=f),a}function Vm(t,a,s,c){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==t&&po.enqueueReplaceState(a,a.state,null)}function Tc(t,a,s,c){var p=t.stateNode;p.props=s,p.state=t.memoizedState,p.refs={},fc(t);var f=a.contextType;typeof f=="object"&&f!==null?p.context=Jt(f):(f=Bt(a)?Ur:jt.current,p.context=_a(t,f)),p.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Sc(t,a,f,s),p.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(a=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),a!==p.state&&po.enqueueReplaceState(p,p.state,null),so(t,s,p,c),p.state=t.memoizedState),typeof p.componentDidMount=="function"&&(t.flags|=4194308)}function za(t,a){try{var s="",c=a;do s+=Te(c),c=c.return;while(c);var p=s}catch(f){p=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:a,stack:p,digest:null}}function Pc(t,a,s){return{value:t,source:null,stack:s??null,digest:a??null}}function _c(t,a){try{console.error(a.value)}catch(s){setTimeout(function(){throw s})}}var Lv=typeof WeakMap=="function"?WeakMap:Map;function $m(t,a,s){s=Qn(-1,s),s.tag=3,s.payload={element:null};var c=a.value;return s.callback=function(){wo||(wo=!0,Gc=c),_c(t,a)},s}function Wm(t,a,s){s=Qn(-1,s),s.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var p=a.value;s.payload=function(){return c(p)},s.callback=function(){_c(t,a)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(s.callback=function(){_c(t,a),typeof c!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var v=a.stack;this.componentDidCatch(a.value,{componentStack:v!==null?v:""})}),s}function Um(t,a,s){var c=t.pingCache;if(c===null){c=t.pingCache=new Lv;var p=new Set;c.set(a,p)}else p=c.get(a),p===void 0&&(p=new Set,c.set(a,p));p.has(s)||(p.add(s),t=Xv.bind(null,t,a,s),a.then(t,t))}function Hm(t){do{var a;if((a=t.tag===13)&&(a=t.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return t;t=t.return}while(t!==null);return null}function Gm(t,a,s,c,p){return(t.mode&1)===0?(t===a?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(a=Qn(-1,1),a.tag=2,Ar(s,a,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=p,t)}var Iv=R.ReactCurrentOwner,Lt=!1;function _t(t,a,s,c){a.child=t===null?hm(a,null,s,c):Ra(a,t.child,s,c)}function qm(t,a,s,c,p){s=s.render;var f=a.ref;return La(a,p),c=jc(t,a,s,c,f,p),s=Nc(),t!==null&&!Lt?(a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~p,Xn(t,a,p)):(Ze&&s&&ic(a),a.flags|=1,_t(t,a,c,p),a.child)}function Ym(t,a,s,c,p){if(t===null){var f=s.type;return typeof f=="function"&&!Jc(f)&&f.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(a.tag=15,a.type=f,Km(t,a,f,c,p)):(t=Eo(s.type,null,c,a,a.mode,p),t.ref=a.ref,t.return=a,a.child=t)}if(f=t.child,(t.lanes&p)===0){var v=f.memoizedProps;if(s=s.compare,s=s!==null?s:Ai,s(v,c)&&t.ref===a.ref)return Xn(t,a,p)}return a.flags|=1,t=_r(f,c),t.ref=a.ref,t.return=a,a.child=t}function Km(t,a,s,c,p){if(t!==null){var f=t.memoizedProps;if(Ai(f,c)&&t.ref===a.ref)if(Lt=!1,a.pendingProps=c=f,(t.lanes&p)!==0)(t.flags&131072)!==0&&(Lt=!0);else return a.lanes=t.lanes,Xn(t,a,p)}return Dc(t,a,s,c,p)}function Qm(t,a,s){var c=a.pendingProps,p=c.children,f=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Va,Ht),Ht|=s;else{if((s&1073741824)===0)return t=f!==null?f.baseLanes|s:s,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:t,cachePool:null,transitions:null},a.updateQueue=null,Ke(Va,Ht),Ht|=t,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:s,Ke(Va,Ht),Ht|=c}else f!==null?(c=f.baseLanes|s,a.memoizedState=null):c=s,Ke(Va,Ht),Ht|=c;return _t(t,a,p,s),a.child}function Xm(t,a){var s=a.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(a.flags|=512,a.flags|=2097152)}function Dc(t,a,s,c,p){var f=Bt(s)?Ur:jt.current;return f=_a(a,f),La(a,p),s=jc(t,a,s,c,f,p),c=Nc(),t!==null&&!Lt?(a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~p,Xn(t,a,p)):(Ze&&c&&ic(a),a.flags|=1,_t(t,a,s,p),a.child)}function Zm(t,a,s,c,p){if(Bt(s)){var f=!0;Xs(a)}else f=!1;if(La(a,p),a.stateNode===null)go(t,a),Om(a,s,c),Tc(a,s,c,p),c=!0;else if(t===null){var v=a.stateNode,k=a.memoizedProps;v.props=k;var P=v.context,V=s.contextType;typeof V=="object"&&V!==null?V=Jt(V):(V=Bt(s)?Ur:jt.current,V=_a(a,V));var X=s.getDerivedStateFromProps,J=typeof X=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(k!==c||P!==V)&&Vm(a,v,c,V),kr=!1;var K=a.memoizedState;v.state=K,so(a,c,v,p),P=a.memoizedState,k!==c||K!==P||Rt.current||kr?(typeof X=="function"&&(Sc(a,s,X,c),P=a.memoizedState),(k=kr||zm(a,s,k,c,K,P,V))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(a.flags|=4194308)):(typeof v.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=P),v.props=c,v.state=P,v.context=V,c=k):(typeof v.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{v=a.stateNode,pm(t,a),k=a.memoizedProps,V=a.type===a.elementType?k:yn(a.type,k),v.props=V,J=a.pendingProps,K=v.context,P=s.contextType,typeof P=="object"&&P!==null?P=Jt(P):(P=Bt(s)?Ur:jt.current,P=_a(a,P));var se=s.getDerivedStateFromProps;(X=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(k!==J||K!==P)&&Vm(a,v,c,P),kr=!1,K=a.memoizedState,v.state=K,so(a,c,v,p);var ce=a.memoizedState;k!==J||K!==ce||Rt.current||kr?(typeof se=="function"&&(Sc(a,s,se,c),ce=a.memoizedState),(V=kr||zm(a,s,V,c,K,ce,P)||!1)?(X||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ce,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ce,P)),typeof v.componentDidUpdate=="function"&&(a.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof v.componentDidUpdate!="function"||k===t.memoizedProps&&K===t.memoizedState||(a.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&K===t.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=ce),v.props=c,v.state=ce,v.context=P,c=V):(typeof v.componentDidUpdate!="function"||k===t.memoizedProps&&K===t.memoizedState||(a.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&K===t.memoizedState||(a.flags|=1024),c=!1)}return Fc(t,a,s,c,f,p)}function Fc(t,a,s,c,p,f){Xm(t,a);var v=(a.flags&128)!==0;if(!c&&!v)return p&&rm(a,s,!1),Xn(t,a,f);c=a.stateNode,Iv.current=a;var k=v&&typeof s.getDerivedStateFromError!="function"?null:c.render();return a.flags|=1,t!==null&&v?(a.child=Ra(a,t.child,null,f),a.child=Ra(a,null,k,f)):_t(t,a,k,f),a.memoizedState=c.state,p&&rm(a,s,!0),a.child}function Jm(t){var a=t.stateNode;a.pendingContext?tm(t,a.pendingContext,a.pendingContext!==a.context):a.context&&tm(t,a.context,!1),gc(t,a.containerInfo)}function ep(t,a,s,c,p){return Ma(),cc(p),a.flags|=256,_t(t,a,s,c),a.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function Rc(t){return{baseLanes:t,cachePool:null,transitions:null}}function tp(t,a,s){var c=a.pendingProps,p=Je.current,f=!1,v=(a.flags&128)!==0,k;if((k=v)||(k=t!==null&&t.memoizedState===null?!1:(p&2)!==0),k?(f=!0,a.flags&=-129):(t===null||t.memoizedState!==null)&&(p|=1),Ke(Je,p&1),t===null)return lc(a),t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((a.mode&1)===0?a.lanes=1:t.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(v=c.children,t=c.fallback,f?(c=a.mode,f=a.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=So(v,c,0,null),t=ea(t,c,s,null),f.return=a,t.return=a,f.sibling=t,a.child=f,a.child.memoizedState=Rc(s),a.memoizedState=Mc,t):Bc(a,v));if(p=t.memoizedState,p!==null&&(k=p.dehydrated,k!==null))return zv(t,a,v,c,k,p,s);if(f){f=c.fallback,v=a.mode,p=t.child,k=p.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&a.child!==p?(c=a.child,c.childLanes=0,c.pendingProps=P,a.deletions=null):(c=_r(p,P),c.subtreeFlags=p.subtreeFlags&14680064),k!==null?f=_r(k,f):(f=ea(f,v,s,null),f.flags|=2),f.return=a,c.return=a,c.sibling=f,a.child=c,c=f,f=a.child,v=t.child.memoizedState,v=v===null?Rc(s):{baseLanes:v.baseLanes|s,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=t.childLanes&~s,a.memoizedState=Mc,c}return f=t.child,t=f.sibling,c=_r(f,{mode:"visible",children:c.children}),(a.mode&1)===0&&(c.lanes=s),c.return=a,c.sibling=null,t!==null&&(s=a.deletions,s===null?(a.deletions=[t],a.flags|=16):s.push(t)),a.child=c,a.memoizedState=null,c}function Bc(t,a){return a=So({mode:"visible",children:a},t.mode,0,null),a.return=t,t.child=a}function fo(t,a,s,c){return c!==null&&cc(c),Ra(a,t.child,null,s),t=Bc(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function zv(t,a,s,c,p,f,v){if(s)return a.flags&256?(a.flags&=-257,c=Pc(Error(i(422))),fo(t,a,v,c)):a.memoizedState!==null?(a.child=t.child,a.flags|=128,null):(f=c.fallback,p=a.mode,c=So({mode:"visible",children:c.children},p,0,null),f=ea(f,p,v,null),f.flags|=2,c.return=a,f.return=a,c.sibling=f,a.child=c,(a.mode&1)!==0&&Ra(a,t.child,null,v),a.child.memoizedState=Rc(v),a.memoizedState=Mc,f);if((a.mode&1)===0)return fo(t,a,v,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var k=c.dgst;return c=k,f=Error(i(419)),c=Pc(f,c,void 0),fo(t,a,v,c)}if(k=(v&t.childLanes)!==0,Lt||k){if(c=ft,c!==null){switch(v&-v){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|v))!==0?0:p,p!==0&&p!==f.retryLane&&(f.retryLane=p,Kn(t,p),wn(c,t,p,-1))}return Zc(),c=Pc(Error(i(421))),fo(t,a,v,c)}return p.data==="$?"?(a.flags|=128,a.child=t.child,a=Zv.bind(null,t),p._reactRetry=a,null):(t=f.treeContext,Ut=br(p.nextSibling),Wt=a,Ze=!0,xn=null,t!==null&&(Xt[Zt++]=qn,Xt[Zt++]=Yn,Xt[Zt++]=Hr,qn=t.id,Yn=t.overflow,Hr=a),a=Bc(a,c.children),a.flags|=4096,a)}function np(t,a,s){t.lanes|=a;var c=t.alternate;c!==null&&(c.lanes|=a),mc(t.return,a,s)}function Lc(t,a,s,c,p){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:p}:(f.isBackwards=a,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=s,f.tailMode=p)}function rp(t,a,s){var c=a.pendingProps,p=c.revealOrder,f=c.tail;if(_t(t,a,c.children,s),c=Je.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&np(t,s,a);else if(t.tag===19)np(t,s,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ke(Je,c),(a.mode&1)===0)a.memoizedState=null;else switch(p){case"forwards":for(s=a.child,p=null;s!==null;)t=s.alternate,t!==null&&oo(t)===null&&(p=s),s=s.sibling;s=p,s===null?(p=a.child,a.child=null):(p=s.sibling,s.sibling=null),Lc(a,!1,p,s,f);break;case"backwards":for(s=null,p=a.child,a.child=null;p!==null;){if(t=p.alternate,t!==null&&oo(t)===null){a.child=p;break}t=p.sibling,p.sibling=s,s=p,p=t}Lc(a,!0,s,null,f);break;case"together":Lc(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function go(t,a){(a.mode&1)===0&&t!==null&&(t.alternate=null,a.alternate=null,a.flags|=2)}function Xn(t,a,s){if(t!==null&&(a.dependencies=t.dependencies),Qr|=a.lanes,(s&a.childLanes)===0)return null;if(t!==null&&a.child!==t.child)throw Error(i(153));if(a.child!==null){for(t=a.child,s=_r(t,t.pendingProps),a.child=s,s.return=a;t.sibling!==null;)t=t.sibling,s=s.sibling=_r(t,t.pendingProps),s.return=a;s.sibling=null}return a.child}function Ov(t,a,s){switch(a.tag){case 3:Jm(a),Ma();break;case 5:xm(a);break;case 1:Bt(a.type)&&Xs(a);break;case 4:gc(a,a.stateNode.containerInfo);break;case 10:var c=a.type._context,p=a.memoizedProps.value;Ke(ro,c._currentValue),c._currentValue=p;break;case 13:if(c=a.memoizedState,c!==null)return c.dehydrated!==null?(Ke(Je,Je.current&1),a.flags|=128,null):(s&a.child.childLanes)!==0?tp(t,a,s):(Ke(Je,Je.current&1),t=Xn(t,a,s),t!==null?t.sibling:null);Ke(Je,Je.current&1);break;case 19:if(c=(s&a.childLanes)!==0,(t.flags&128)!==0){if(c)return rp(t,a,s);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ke(Je,Je.current),c)break;return null;case 22:case 23:return a.lanes=0,Qm(t,a,s)}return Xn(t,a,s)}var ap,Ic,ip,sp;ap=function(t,a){for(var s=a.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break;for(;s.sibling===null;){if(s.return===null||s.return===a)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ic=function(){},ip=function(t,a,s,c){var p=t.memoizedProps;if(p!==c){t=a.stateNode,Yr(_n.current);var f=null;switch(s){case"input":p=Sn(t,p),c=Sn(t,c),f=[];break;case"select":p=H({},p,{value:void 0}),c=H({},c,{value:void 0}),f=[];break;case"textarea":p=li(t,p),c=li(t,c),f=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Ys)}fa(s,c);var v;s=null;for(V in p)if(!c.hasOwnProperty(V)&&p.hasOwnProperty(V)&&p[V]!=null)if(V==="style"){var k=p[V];for(v in k)k.hasOwnProperty(v)&&(s||(s={}),s[v]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(l.hasOwnProperty(V)?f||(f=[]):(f=f||[]).push(V,null));for(V in c){var P=c[V];if(k=p!=null?p[V]:void 0,c.hasOwnProperty(V)&&P!==k&&(P!=null||k!=null))if(V==="style")if(k){for(v in k)!k.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(s||(s={}),s[v]="");for(v in P)P.hasOwnProperty(v)&&k[v]!==P[v]&&(s||(s={}),s[v]=P[v])}else s||(f||(f=[]),f.push(V,s)),s=P;else V==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,k=k?k.__html:void 0,P!=null&&k!==P&&(f=f||[]).push(V,P)):V==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(V,""+P):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(l.hasOwnProperty(V)?(P!=null&&V==="onScroll"&&Qe("scroll",t),f||k===P||(f=[])):(f=f||[]).push(V,P))}s&&(f=f||[]).push("style",s);var V=f;(a.updateQueue=V)&&(a.flags|=4)}},sp=function(t,a,s,c){s!==c&&(a.flags|=4)};function Oi(t,a){if(!Ze)switch(t.tailMode){case"hidden":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function kt(t){var a=t.alternate!==null&&t.alternate.child===t.child,s=0,c=0;if(a)for(var p=t.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=t,p=p.sibling;else for(p=t.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=t,p=p.sibling;return t.subtreeFlags|=c,t.childLanes=s,a}function Vv(t,a,s){var c=a.pendingProps;switch(sc(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(a),null;case 1:return Bt(a.type)&&Qs(),kt(a),null;case 3:return c=a.stateNode,Ia(),Xe(Rt),Xe(jt),vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(to(a)?a.flags|=4:t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,xn!==null&&(Kc(xn),xn=null))),Ic(t,a),kt(a),null;case 5:xc(a);var p=Yr(Ri.current);if(s=a.type,t!==null&&a.stateNode!=null)ip(t,a,s,c,p),t.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!c){if(a.stateNode===null)throw Error(i(166));return kt(a),null}if(t=Yr(_n.current),to(a)){c=a.stateNode,s=a.type;var f=a.memoizedProps;switch(c[Pn]=a,c[Pi]=f,t=(a.mode&1)!==0,s){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(p=0;p<Ei.length;p++)Qe(Ei[p],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":si(c,f),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Qe("invalid",c);break;case"textarea":Ts(c,f),Qe("invalid",c)}fa(s,f),p=null;for(var v in f)if(f.hasOwnProperty(v)){var k=f[v];v==="children"?typeof k=="string"?c.textContent!==k&&(f.suppressHydrationWarning!==!0&&qs(c.textContent,k,t),p=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(f.suppressHydrationWarning!==!0&&qs(c.textContent,k,t),p=["children",""+k]):l.hasOwnProperty(v)&&k!=null&&v==="onScroll"&&Qe("scroll",c)}switch(s){case"input":ha(c),Ss(c,f,!0);break;case"textarea":ha(c),Tn(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Ys)}c=p,a.updateQueue=c,c!==null&&(a.flags|=4)}else{v=p.nodeType===9?p:p.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sr(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=v.createElement(s,{is:c.is}):(t=v.createElement(s),s==="select"&&(v=t,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):t=v.createElementNS(t,s),t[Pn]=a,t[Pi]=c,ap(t,a,!1,!1),a.stateNode=t;e:{switch(v=ga(s,c),s){case"dialog":Qe("cancel",t),Qe("close",t),p=c;break;case"iframe":case"object":case"embed":Qe("load",t),p=c;break;case"video":case"audio":for(p=0;p<Ei.length;p++)Qe(Ei[p],t);p=c;break;case"source":Qe("error",t),p=c;break;case"img":case"image":case"link":Qe("error",t),Qe("load",t),p=c;break;case"details":Qe("toggle",t),p=c;break;case"input":si(t,c),p=Sn(t,c),Qe("invalid",t);break;case"option":p=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},p=H({},c,{value:void 0}),Qe("invalid",t);break;case"textarea":Ts(t,c),p=li(t,c),Qe("invalid",t);break;default:p=c}fa(s,p),k=p;for(f in k)if(k.hasOwnProperty(f)){var P=k[f];f==="style"?_s(t,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Kt(t,P)):f==="children"?typeof P=="string"?(s!=="textarea"||P!=="")&&St(t,P):typeof P=="number"&&St(t,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Qe("scroll",t):P!=null&&z(t,f,P,v))}switch(s){case"input":ha(t),Ss(t,c,!1);break;case"textarea":ha(t),Tn(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Le(c.value));break;case"select":t.multiple=!!c.multiple,f=c.value,f!=null?ir(t,!!c.multiple,f,!1):c.defaultValue!=null&&ir(t,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(t.onclick=Ys)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return kt(a),null;case 6:if(t&&a.stateNode!=null)sp(t,a,t.memoizedProps,c);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(s=Yr(Ri.current),Yr(_n.current),to(a)){if(c=a.stateNode,s=a.memoizedProps,c[Pn]=a,(f=c.nodeValue!==s)&&(t=Wt,t!==null))switch(t.tag){case 3:qs(c.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qs(c.nodeValue,s,(t.mode&1)!==0)}f&&(a.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[Pn]=a,a.stateNode=c}return kt(a),null;case 13:if(Xe(Je),c=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ze&&Ut!==null&&(a.mode&1)!==0&&(a.flags&128)===0)cm(),Ma(),a.flags|=98560,f=!1;else if(f=to(a),c!==null&&c.dehydrated!==null){if(t===null){if(!f)throw Error(i(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Pn]=a}else Ma(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;kt(a),f=!1}else xn!==null&&(Kc(xn),xn=null),f=!0;if(!f)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=s,a):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(a.child.flags|=8192,(a.mode&1)!==0&&(t===null||(Je.current&1)!==0?dt===0&&(dt=3):Zc())),a.updateQueue!==null&&(a.flags|=4),kt(a),null);case 4:return Ia(),Ic(t,a),t===null&&Si(a.stateNode.containerInfo),kt(a),null;case 10:return hc(a.type._context),kt(a),null;case 17:return Bt(a.type)&&Qs(),kt(a),null;case 19:if(Xe(Je),f=a.memoizedState,f===null)return kt(a),null;if(c=(a.flags&128)!==0,v=f.rendering,v===null)if(c)Oi(f,!1);else{if(dt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(v=oo(t),v!==null){for(a.flags|=128,Oi(f,!1),c=v.updateQueue,c!==null&&(a.updateQueue=c,a.flags|=4),a.subtreeFlags=0,c=s,s=a.child;s!==null;)f=s,t=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,t=v.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ke(Je,Je.current&1|2),a.child}t=t.sibling}f.tail!==null&&Ie()>$a&&(a.flags|=128,c=!0,Oi(f,!1),a.lanes=4194304)}else{if(!c)if(t=oo(v),t!==null){if(a.flags|=128,c=!0,s=t.updateQueue,s!==null&&(a.updateQueue=s,a.flags|=4),Oi(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Ze)return kt(a),null}else 2*Ie()-f.renderingStartTime>$a&&s!==1073741824&&(a.flags|=128,c=!0,Oi(f,!1),a.lanes=4194304);f.isBackwards?(v.sibling=a.child,a.child=v):(s=f.last,s!==null?s.sibling=v:a.child=v,f.last=v)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=Ie(),a.sibling=null,s=Je.current,Ke(Je,c?s&1|2:s&1),a):(kt(a),null);case 22:case 23:return Xc(),c=a.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(a.flags|=8192),c&&(a.mode&1)!==0?(Ht&1073741824)!==0&&(kt(a),a.subtreeFlags&6&&(a.flags|=8192)):kt(a),null;case 24:return null;case 25:return null}throw Error(i(156,a.tag))}function $v(t,a){switch(sc(a),a.tag){case 1:return Bt(a.type)&&Qs(),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Ia(),Xe(Rt),Xe(jt),vc(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 5:return xc(a),null;case 13:if(Xe(Je),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Ma()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Xe(Je),null;case 4:return Ia(),null;case 10:return hc(a.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var xo=!1,At=!1,Wv=typeof WeakSet=="function"?WeakSet:Set,le=null;function Oa(t,a){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){tt(t,a,c)}else s.current=null}function zc(t,a,s){try{s()}catch(c){tt(t,a,c)}}var op=!1;function Uv(t,a){if(Xl=Bs,t=zh(),Wl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var p=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var v=0,k=-1,P=-1,V=0,X=0,J=t,K=null;t:for(;;){for(var se;J!==s||p!==0&&J.nodeType!==3||(k=v+p),J!==f||c!==0&&J.nodeType!==3||(P=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(se=J.firstChild)!==null;)K=J,J=se;for(;;){if(J===t)break t;if(K===s&&++V===p&&(k=v),K===f&&++X===c&&(P=v),(se=J.nextSibling)!==null)break;J=K,K=J.parentNode}J=se}s=k===-1||P===-1?null:{start:k,end:P}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zl={focusedElem:t,selectionRange:s},Bs=!1,le=a;le!==null;)if(a=le,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,le=t;else for(;le!==null;){a=le;try{var ce=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var me=ce.memoizedProps,st=ce.memoizedState,B=a.stateNode,_=B.getSnapshotBeforeUpdate(a.elementType===a.type?me:yn(a.type,me),st);B.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var L=a.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ne){tt(a,a.return,ne)}if(t=a.sibling,t!==null){t.return=a.return,le=t;break}le=a.return}return ce=op,op=!1,ce}function Vi(t,a,s){var c=a.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&t)===t){var f=p.destroy;p.destroy=void 0,f!==void 0&&zc(a,s,f)}p=p.next}while(p!==c)}}function yo(t,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var s=a=a.next;do{if((s.tag&t)===t){var c=s.create;s.destroy=c()}s=s.next}while(s!==a)}}function Oc(t){var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof a=="function"?a(t):a.current=t}}function lp(t){var a=t.alternate;a!==null&&(t.alternate=null,lp(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&(delete a[Pn],delete a[Pi],delete a[nc],delete a[Cv],delete a[Ev])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cp(t){return t.tag===5||t.tag===3||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vc(t,a,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,a?s.nodeType===8?s.parentNode.insertBefore(t,a):s.insertBefore(t,a):(s.nodeType===8?(a=s.parentNode,a.insertBefore(t,s)):(a=s,a.appendChild(t)),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Ys));else if(c!==4&&(t=t.child,t!==null))for(Vc(t,a,s),t=t.sibling;t!==null;)Vc(t,a,s),t=t.sibling}function $c(t,a,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,a?s.insertBefore(t,a):s.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for($c(t,a,s),t=t.sibling;t!==null;)$c(t,a,s),t=t.sibling}var yt=null,vn=!1;function Cr(t,a,s){for(s=s.child;s!==null;)dp(t,a,s),s=s.sibling}function dp(t,a,s){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Qt,s)}catch{}switch(s.tag){case 5:At||Oa(s,a);case 6:var c=yt,p=vn;yt=null,Cr(t,a,s),yt=c,vn=p,yt!==null&&(vn?(t=yt,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):yt.removeChild(s.stateNode));break;case 18:yt!==null&&(vn?(t=yt,s=s.stateNode,t.nodeType===8?tc(t.parentNode,s):t.nodeType===1&&tc(t,s),vi(t)):tc(yt,s.stateNode));break;case 4:c=yt,p=vn,yt=s.stateNode.containerInfo,vn=!0,Cr(t,a,s),yt=c,vn=p;break;case 0:case 11:case 14:case 15:if(!At&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var f=p,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&zc(s,a,v),p=p.next}while(p!==c)}Cr(t,a,s);break;case 1:if(!At&&(Oa(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(k){tt(s,a,k)}Cr(t,a,s);break;case 21:Cr(t,a,s);break;case 22:s.mode&1?(At=(c=At)||s.memoizedState!==null,Cr(t,a,s),At=c):Cr(t,a,s);break;default:Cr(t,a,s)}}function hp(t){var a=t.updateQueue;if(a!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new Wv),a.forEach(function(c){var p=Jv.bind(null,t,c);s.has(c)||(s.add(c),c.then(p,p))})}}function bn(t,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var p=s[c];try{var f=t,v=a,k=v;e:for(;k!==null;){switch(k.tag){case 5:yt=k.stateNode,vn=!1;break e;case 3:yt=k.stateNode.containerInfo,vn=!0;break e;case 4:yt=k.stateNode.containerInfo,vn=!0;break e}k=k.return}if(yt===null)throw Error(i(160));dp(f,v,p),yt=null,vn=!1;var P=p.alternate;P!==null&&(P.return=null),p.return=null}catch(V){tt(p,a,V)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)mp(a,t),a=a.sibling}function mp(t,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(a,t),Fn(t),c&4){try{Vi(3,t,t.return),yo(3,t)}catch(me){tt(t,t.return,me)}try{Vi(5,t,t.return)}catch(me){tt(t,t.return,me)}}break;case 1:bn(a,t),Fn(t),c&512&&s!==null&&Oa(s,s.return);break;case 5:if(bn(a,t),Fn(t),c&512&&s!==null&&Oa(s,s.return),t.flags&32){var p=t.stateNode;try{St(p,"")}catch(me){tt(t,t.return,me)}}if(c&4&&(p=t.stateNode,p!=null)){var f=t.memoizedProps,v=s!==null?s.memoizedProps:f,k=t.type,P=t.updateQueue;if(t.updateQueue=null,P!==null)try{k==="input"&&f.type==="radio"&&f.name!=null&&Es(p,f),ga(k,v);var V=ga(k,f);for(v=0;v<P.length;v+=2){var X=P[v],J=P[v+1];X==="style"?_s(p,J):X==="dangerouslySetInnerHTML"?Kt(p,J):X==="children"?St(p,J):z(p,X,J,V)}switch(k){case"input":hn(p,f);break;case"textarea":Ps(p,f);break;case"select":var K=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!f.multiple;var se=f.value;se!=null?ir(p,!!f.multiple,se,!1):K!==!!f.multiple&&(f.defaultValue!=null?ir(p,!!f.multiple,f.defaultValue,!0):ir(p,!!f.multiple,f.multiple?[]:"",!1))}p[Pi]=f}catch(me){tt(t,t.return,me)}}break;case 6:if(bn(a,t),Fn(t),c&4){if(t.stateNode===null)throw Error(i(162));p=t.stateNode,f=t.memoizedProps;try{p.nodeValue=f}catch(me){tt(t,t.return,me)}}break;case 3:if(bn(a,t),Fn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{vi(a.containerInfo)}catch(me){tt(t,t.return,me)}break;case 4:bn(a,t),Fn(t);break;case 13:bn(a,t),Fn(t),p=t.child,p.flags&8192&&(f=p.memoizedState!==null,p.stateNode.isHidden=f,!f||p.alternate!==null&&p.alternate.memoizedState!==null||(Hc=Ie())),c&4&&hp(t);break;case 22:if(X=s!==null&&s.memoizedState!==null,t.mode&1?(At=(V=At)||X,bn(a,t),At=V):bn(a,t),Fn(t),c&8192){if(V=t.memoizedState!==null,(t.stateNode.isHidden=V)&&!X&&(t.mode&1)!==0)for(le=t,X=t.child;X!==null;){for(J=le=X;le!==null;){switch(K=le,se=K.child,K.tag){case 0:case 11:case 14:case 15:Vi(4,K,K.return);break;case 1:Oa(K,K.return);var ce=K.stateNode;if(typeof ce.componentWillUnmount=="function"){c=K,s=K.return;try{a=c,ce.props=a.memoizedProps,ce.state=a.memoizedState,ce.componentWillUnmount()}catch(me){tt(c,s,me)}}break;case 5:Oa(K,K.return);break;case 22:if(K.memoizedState!==null){gp(J);continue}}se!==null?(se.return=K,le=se):gp(J)}X=X.sibling}e:for(X=null,J=t;;){if(J.tag===5){if(X===null){X=J;try{p=J.stateNode,V?(f=p.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(k=J.stateNode,P=J.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,k.style.display=pa("display",v))}catch(me){tt(t,t.return,me)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=V?"":J.memoizedProps}catch(me){tt(t,t.return,me)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===t)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===t)break e;for(;J.sibling===null;){if(J.return===null||J.return===t)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:bn(a,t),Fn(t),c&4&&hp(t);break;case 21:break;default:bn(a,t),Fn(t)}}function Fn(t){var a=t.flags;if(a&2){try{e:{for(var s=t.return;s!==null;){if(cp(s)){var c=s;break e}s=s.return}throw Error(i(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(St(p,""),c.flags&=-33);var f=up(t);$c(t,f,p);break;case 3:case 4:var v=c.stateNode.containerInfo,k=up(t);Vc(t,k,v);break;default:throw Error(i(161))}}catch(P){tt(t,t.return,P)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Hv(t,a,s){le=t,pp(t)}function pp(t,a,s){for(var c=(t.mode&1)!==0;le!==null;){var p=le,f=p.child;if(p.tag===22&&c){var v=p.memoizedState!==null||xo;if(!v){var k=p.alternate,P=k!==null&&k.memoizedState!==null||At;k=xo;var V=At;if(xo=v,(At=P)&&!V)for(le=p;le!==null;)v=le,P=v.child,v.tag===22&&v.memoizedState!==null?xp(p):P!==null?(P.return=v,le=P):xp(p);for(;f!==null;)le=f,pp(f),f=f.sibling;le=p,xo=k,At=V}fp(t)}else(p.subtreeFlags&8772)!==0&&f!==null?(f.return=p,le=f):fp(t)}}function fp(t){for(;le!==null;){var a=le;if((a.flags&8772)!==0){var s=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:At||yo(5,a);break;case 1:var c=a.stateNode;if(a.flags&4&&!At)if(s===null)c.componentDidMount();else{var p=a.elementType===a.type?s.memoizedProps:yn(a.type,s.memoizedProps);c.componentDidUpdate(p,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=a.updateQueue;f!==null&&gm(a,f,c);break;case 3:var v=a.updateQueue;if(v!==null){if(s=null,a.child!==null)switch(a.child.tag){case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}gm(a,v,s)}break;case 5:var k=a.stateNode;if(s===null&&a.flags&4){s=k;var P=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&s.focus();break;case"img":P.src&&(s.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var V=a.alternate;if(V!==null){var X=V.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&vi(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}At||a.flags&512&&Oc(a)}catch(K){tt(a,a.return,K)}}if(a===t){le=null;break}if(s=a.sibling,s!==null){s.return=a.return,le=s;break}le=a.return}}function gp(t){for(;le!==null;){var a=le;if(a===t){le=null;break}var s=a.sibling;if(s!==null){s.return=a.return,le=s;break}le=a.return}}function xp(t){for(;le!==null;){var a=le;try{switch(a.tag){case 0:case 11:case 15:var s=a.return;try{yo(4,a)}catch(P){tt(a,s,P)}break;case 1:var c=a.stateNode;if(typeof c.componentDidMount=="function"){var p=a.return;try{c.componentDidMount()}catch(P){tt(a,p,P)}}var f=a.return;try{Oc(a)}catch(P){tt(a,f,P)}break;case 5:var v=a.return;try{Oc(a)}catch(P){tt(a,v,P)}}}catch(P){tt(a,a.return,P)}if(a===t){le=null;break}var k=a.sibling;if(k!==null){k.return=a.return,le=k;break}le=a.return}}var Gv=Math.ceil,vo=R.ReactCurrentDispatcher,Wc=R.ReactCurrentOwner,tn=R.ReactCurrentBatchConfig,ze=0,ft=null,ot=null,vt=0,Ht=0,Va=wr(0),dt=0,$i=null,Qr=0,bo=0,Uc=0,Wi=null,It=null,Hc=0,$a=1/0,Zn=null,wo=!1,Gc=null,Er=null,jo=!1,Sr=null,No=0,Ui=0,qc=null,ko=-1,Ao=0;function Dt(){return(ze&6)!==0?Ie():ko!==-1?ko:ko=Ie()}function Tr(t){return(t.mode&1)===0?1:(ze&2)!==0&&vt!==0?vt&-vt:Tv.transition!==null?(Ao===0&&(Ao=uh()),Ao):(t=We,t!==0||(t=window.event,t=t===void 0?16:vh(t.type)),t)}function wn(t,a,s,c){if(50<Ui)throw Ui=0,qc=null,Error(i(185));pi(t,s,c),((ze&2)===0||t!==ft)&&(t===ft&&((ze&2)===0&&(bo|=s),dt===4&&Pr(t,vt)),zt(t,c),s===1&&ze===0&&(a.mode&1)===0&&($a=Ie()+500,Zs&&Nr()))}function zt(t,a){var s=t.callbackNode;T0(t,a);var c=wa(t,t===ft?vt:0);if(c===0)s!==null&&it(s),t.callbackNode=null,t.callbackPriority=0;else if(a=c&-c,t.callbackPriority!==a){if(s!=null&&it(s),a===1)t.tag===0?Sv(vp.bind(null,t)):am(vp.bind(null,t)),kv(function(){(ze&6)===0&&Nr()}),s=null;else{switch(dh(c)){case 1:s=$n;break;case 4:s=fn;break;case 16:s=Tt;break;case 536870912:s=dr;break;default:s=Tt}s=Ep(s,yp.bind(null,t))}t.callbackPriority=a,t.callbackNode=s}}function yp(t,a){if(ko=-1,Ao=0,(ze&6)!==0)throw Error(i(327));var s=t.callbackNode;if(Wa()&&t.callbackNode!==s)return null;var c=wa(t,t===ft?vt:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||a)a=Co(t,c);else{a=c;var p=ze;ze|=2;var f=wp();(ft!==t||vt!==a)&&(Zn=null,$a=Ie()+500,Zr(t,a));do try{Kv();break}catch(k){bp(t,k)}while(!0);dc(),vo.current=f,ze=p,ot!==null?a=0:(ft=null,vt=0,a=dt)}if(a!==0){if(a===2&&(p=El(t),p!==0&&(c=p,a=Yc(t,p))),a===1)throw s=$i,Zr(t,0),Pr(t,c),zt(t,Ie()),s;if(a===6)Pr(t,c);else{if(p=t.current.alternate,(c&30)===0&&!qv(p)&&(a=Co(t,c),a===2&&(f=El(t),f!==0&&(c=f,a=Yc(t,f))),a===1))throw s=$i,Zr(t,0),Pr(t,c),zt(t,Ie()),s;switch(t.finishedWork=p,t.finishedLanes=c,a){case 0:case 1:throw Error(i(345));case 2:Jr(t,It,Zn);break;case 3:if(Pr(t,c),(c&130023424)===c&&(a=Hc+500-Ie(),10<a)){if(wa(t,0)!==0)break;if(p=t.suspendedLanes,(p&c)!==c){Dt(),t.pingedLanes|=t.suspendedLanes&p;break}t.timeoutHandle=ec(Jr.bind(null,t,It,Zn),a);break}Jr(t,It,Zn);break;case 4:if(Pr(t,c),(c&4194240)===c)break;for(a=t.eventTimes,p=-1;0<c;){var v=31-Pe(c);f=1<<v,v=a[v],v>p&&(p=v),c&=~f}if(c=p,c=Ie()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Gv(c/1960))-c,10<c){t.timeoutHandle=ec(Jr.bind(null,t,It,Zn),c);break}Jr(t,It,Zn);break;case 5:Jr(t,It,Zn);break;default:throw Error(i(329))}}}return zt(t,Ie()),t.callbackNode===s?yp.bind(null,t):null}function Yc(t,a){var s=Wi;return t.current.memoizedState.isDehydrated&&(Zr(t,a).flags|=256),t=Co(t,a),t!==2&&(a=It,It=s,a!==null&&Kc(a)),t}function Kc(t){It===null?It=t:It.push.apply(It,t)}function qv(t){for(var a=t;;){if(a.flags&16384){var s=a.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var p=s[c],f=p.getSnapshot;p=p.value;try{if(!gn(f(),p))return!1}catch{return!1}}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Pr(t,a){for(a&=~Uc,a&=~bo,t.suspendedLanes|=a,t.pingedLanes&=~a,t=t.expirationTimes;0<a;){var s=31-Pe(a),c=1<<s;t[s]=-1,a&=~c}}function vp(t){if((ze&6)!==0)throw Error(i(327));Wa();var a=wa(t,0);if((a&1)===0)return zt(t,Ie()),null;var s=Co(t,a);if(t.tag!==0&&s===2){var c=El(t);c!==0&&(a=c,s=Yc(t,c))}if(s===1)throw s=$i,Zr(t,0),Pr(t,a),zt(t,Ie()),s;if(s===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=a,Jr(t,It,Zn),zt(t,Ie()),null}function Qc(t,a){var s=ze;ze|=1;try{return t(a)}finally{ze=s,ze===0&&($a=Ie()+500,Zs&&Nr())}}function Xr(t){Sr!==null&&Sr.tag===0&&(ze&6)===0&&Wa();var a=ze;ze|=1;var s=tn.transition,c=We;try{if(tn.transition=null,We=1,t)return t()}finally{We=c,tn.transition=s,ze=a,(ze&6)===0&&Nr()}}function Xc(){Ht=Va.current,Xe(Va)}function Zr(t,a){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Nv(s)),ot!==null)for(s=ot.return;s!==null;){var c=s;switch(sc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Qs();break;case 3:Ia(),Xe(Rt),Xe(jt),vc();break;case 5:xc(c);break;case 4:Ia();break;case 13:Xe(Je);break;case 19:Xe(Je);break;case 10:hc(c.type._context);break;case 22:case 23:Xc()}s=s.return}if(ft=t,ot=t=_r(t.current,null),vt=Ht=a,dt=0,$i=null,Uc=bo=Qr=0,It=Wi=null,qr!==null){for(a=0;a<qr.length;a++)if(s=qr[a],c=s.interleaved,c!==null){s.interleaved=null;var p=c.next,f=s.pending;if(f!==null){var v=f.next;f.next=p,c.next=v}s.pending=c}qr=null}return t}function bp(t,a){do{var s=ot;try{if(dc(),lo.current=mo,co){for(var c=et.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}co=!1}if(Kr=0,pt=ut=et=null,Bi=!1,Li=0,Wc.current=null,s===null||s.return===null){dt=1,$i=a,ot=null;break}e:{var f=t,v=s.return,k=s,P=a;if(a=vt,k.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var V=P,X=k,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var K=X.alternate;K?(X.updateQueue=K.updateQueue,X.memoizedState=K.memoizedState,X.lanes=K.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=Hm(v);if(se!==null){se.flags&=-257,Gm(se,v,k,f,a),se.mode&1&&Um(f,V,a),a=se,P=V;var ce=a.updateQueue;if(ce===null){var me=new Set;me.add(P),a.updateQueue=me}else ce.add(P);break e}else{if((a&1)===0){Um(f,V,a),Zc();break e}P=Error(i(426))}}else if(Ze&&k.mode&1){var st=Hm(v);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),Gm(st,v,k,f,a),cc(za(P,k));break e}}f=P=za(P,k),dt!==4&&(dt=2),Wi===null?Wi=[f]:Wi.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,a&=-a,f.lanes|=a;var B=$m(f,P,a);fm(f,B);break e;case 1:k=P;var _=f.type,L=f.stateNode;if((f.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(Er===null||!Er.has(L)))){f.flags|=65536,a&=-a,f.lanes|=a;var ne=Wm(f,k,a);fm(f,ne);break e}}f=f.return}while(f!==null)}Np(s)}catch(pe){a=pe,ot===s&&s!==null&&(ot=s=s.return);continue}break}while(!0)}function wp(){var t=vo.current;return vo.current=mo,t===null?mo:t}function Zc(){(dt===0||dt===3||dt===2)&&(dt=4),ft===null||(Qr&268435455)===0&&(bo&268435455)===0||Pr(ft,vt)}function Co(t,a){var s=ze;ze|=2;var c=wp();(ft!==t||vt!==a)&&(Zn=null,Zr(t,a));do try{Yv();break}catch(p){bp(t,p)}while(!0);if(dc(),ze=s,vo.current=c,ot!==null)throw Error(i(261));return ft=null,vt=0,dt}function Yv(){for(;ot!==null;)jp(ot)}function Kv(){for(;ot!==null&&!xt();)jp(ot)}function jp(t){var a=Cp(t.alternate,t,Ht);t.memoizedProps=t.pendingProps,a===null?Np(t):ot=a,Wc.current=null}function Np(t){var a=t;do{var s=a.alternate;if(t=a.return,(a.flags&32768)===0){if(s=Vv(s,a,Ht),s!==null){ot=s;return}}else{if(s=$v(s,a),s!==null){s.flags&=32767,ot=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dt=6,ot=null;return}}if(a=a.sibling,a!==null){ot=a;return}ot=a=t}while(a!==null);dt===0&&(dt=5)}function Jr(t,a,s){var c=We,p=tn.transition;try{tn.transition=null,We=1,Qv(t,a,s,c)}finally{tn.transition=p,We=c}return null}function Qv(t,a,s,c){do Wa();while(Sr!==null);if((ze&6)!==0)throw Error(i(327));s=t.finishedWork;var p=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var f=s.lanes|s.childLanes;if(P0(t,f),t===ft&&(ot=ft=null,vt=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||jo||(jo=!0,Ep(Tt,function(){return Wa(),null})),f=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||f){f=tn.transition,tn.transition=null;var v=We;We=1;var k=ze;ze|=4,Wc.current=null,Uv(t,s),mp(s,t),gv(Zl),Bs=!!Xl,Zl=Xl=null,t.current=s,Hv(s),$e(),ze=k,We=v,tn.transition=f}else t.current=s;if(jo&&(jo=!1,Sr=t,No=p),f=t.pendingLanes,f===0&&(Er=null),ba(s.stateNode),zt(t,Ie()),a!==null)for(c=t.onRecoverableError,s=0;s<a.length;s++)p=a[s],c(p.value,{componentStack:p.stack,digest:p.digest});if(wo)throw wo=!1,t=Gc,Gc=null,t;return(No&1)!==0&&t.tag!==0&&Wa(),f=t.pendingLanes,(f&1)!==0?t===qc?Ui++:(Ui=0,qc=t):Ui=0,Nr(),null}function Wa(){if(Sr!==null){var t=dh(No),a=tn.transition,s=We;try{if(tn.transition=null,We=16>t?16:t,Sr===null)var c=!1;else{if(t=Sr,Sr=null,No=0,(ze&6)!==0)throw Error(i(331));var p=ze;for(ze|=4,le=t.current;le!==null;){var f=le,v=f.child;if((le.flags&16)!==0){var k=f.deletions;if(k!==null){for(var P=0;P<k.length;P++){var V=k[P];for(le=V;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:Vi(8,X,f)}var J=X.child;if(J!==null)J.return=X,le=J;else for(;le!==null;){X=le;var K=X.sibling,se=X.return;if(lp(X),X===V){le=null;break}if(K!==null){K.return=se,le=K;break}le=se}}}var ce=f.alternate;if(ce!==null){var me=ce.child;if(me!==null){ce.child=null;do{var st=me.sibling;me.sibling=null,me=st}while(me!==null)}}le=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,le=v;else e:for(;le!==null;){if(f=le,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Vi(9,f,f.return)}var B=f.sibling;if(B!==null){B.return=f.return,le=B;break e}le=f.return}}var _=t.current;for(le=_;le!==null;){v=le;var L=v.child;if((v.subtreeFlags&2064)!==0&&L!==null)L.return=v,le=L;else e:for(v=_;le!==null;){if(k=le,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:yo(9,k)}}catch(pe){tt(k,k.return,pe)}if(k===v){le=null;break e}var ne=k.sibling;if(ne!==null){ne.return=k.return,le=ne;break e}le=k.return}}if(ze=p,Nr(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Qt,t)}catch{}c=!0}return c}finally{We=s,tn.transition=a}}return!1}function kp(t,a,s){a=za(s,a),a=$m(t,a,1),t=Ar(t,a,1),a=Dt(),t!==null&&(pi(t,1,a),zt(t,a))}function tt(t,a,s){if(t.tag===3)kp(t,t,s);else for(;a!==null;){if(a.tag===3){kp(a,t,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Er===null||!Er.has(c))){t=za(s,t),t=Wm(a,t,1),a=Ar(a,t,1),t=Dt(),a!==null&&(pi(a,1,t),zt(a,t));break}}a=a.return}}function Xv(t,a,s){var c=t.pingCache;c!==null&&c.delete(a),a=Dt(),t.pingedLanes|=t.suspendedLanes&s,ft===t&&(vt&s)===s&&(dt===4||dt===3&&(vt&130023424)===vt&&500>Ie()-Hc?Zr(t,0):Uc|=s),zt(t,a)}function Ap(t,a){a===0&&((t.mode&1)===0?a=1:(a=Un,Un<<=1,(Un&130023424)===0&&(Un=4194304)));var s=Dt();t=Kn(t,a),t!==null&&(pi(t,a,s),zt(t,s))}function Zv(t){var a=t.memoizedState,s=0;a!==null&&(s=a.retryLane),Ap(t,s)}function Jv(t,a){var s=0;switch(t.tag){case 13:var c=t.stateNode,p=t.memoizedState;p!==null&&(s=p.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(a),Ap(t,s)}var Cp;Cp=function(t,a,s){if(t!==null)if(t.memoizedProps!==a.pendingProps||Rt.current)Lt=!0;else{if((t.lanes&s)===0&&(a.flags&128)===0)return Lt=!1,Ov(t,a,s);Lt=(t.flags&131072)!==0}else Lt=!1,Ze&&(a.flags&1048576)!==0&&im(a,eo,a.index);switch(a.lanes=0,a.tag){case 2:var c=a.type;go(t,a),t=a.pendingProps;var p=_a(a,jt.current);La(a,s),p=jc(null,a,c,t,p,s);var f=Nc();return a.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Bt(c)?(f=!0,Xs(a)):f=!1,a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,fc(a),p.updater=po,a.stateNode=p,p._reactInternals=a,Tc(a,c,t,s),a=Fc(null,a,c,!0,f,s)):(a.tag=0,Ze&&f&&ic(a),_t(null,a,p,s),a=a.child),a;case 16:c=a.elementType;e:{switch(go(t,a),t=a.pendingProps,p=c._init,c=p(c._payload),a.type=c,p=a.tag=tb(c),t=yn(c,t),p){case 0:a=Dc(null,a,c,t,s);break e;case 1:a=Zm(null,a,c,t,s);break e;case 11:a=qm(null,a,c,t,s);break e;case 14:a=Ym(null,a,c,yn(c.type,t),s);break e}throw Error(i(306,c,""))}return a;case 0:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:yn(c,p),Dc(t,a,c,p,s);case 1:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:yn(c,p),Zm(t,a,c,p,s);case 3:e:{if(Jm(a),t===null)throw Error(i(387));c=a.pendingProps,f=a.memoizedState,p=f.element,pm(t,a),so(a,c,null,s);var v=a.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},a.updateQueue.baseState=f,a.memoizedState=f,a.flags&256){p=za(Error(i(423)),a),a=ep(t,a,c,s,p);break e}else if(c!==p){p=za(Error(i(424)),a),a=ep(t,a,c,s,p);break e}else for(Ut=br(a.stateNode.containerInfo.firstChild),Wt=a,Ze=!0,xn=null,s=hm(a,null,c,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ma(),c===p){a=Xn(t,a,s);break e}_t(t,a,c,s)}a=a.child}return a;case 5:return xm(a),t===null&&lc(a),c=a.type,p=a.pendingProps,f=t!==null?t.memoizedProps:null,v=p.children,Jl(c,p)?v=null:f!==null&&Jl(c,f)&&(a.flags|=32),Xm(t,a),_t(t,a,v,s),a.child;case 6:return t===null&&lc(a),null;case 13:return tp(t,a,s);case 4:return gc(a,a.stateNode.containerInfo),c=a.pendingProps,t===null?a.child=Ra(a,null,c,s):_t(t,a,c,s),a.child;case 11:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:yn(c,p),qm(t,a,c,p,s);case 7:return _t(t,a,a.pendingProps,s),a.child;case 8:return _t(t,a,a.pendingProps.children,s),a.child;case 12:return _t(t,a,a.pendingProps.children,s),a.child;case 10:e:{if(c=a.type._context,p=a.pendingProps,f=a.memoizedProps,v=p.value,Ke(ro,c._currentValue),c._currentValue=v,f!==null)if(gn(f.value,v)){if(f.children===p.children&&!Rt.current){a=Xn(t,a,s);break e}}else for(f=a.child,f!==null&&(f.return=a);f!==null;){var k=f.dependencies;if(k!==null){v=f.child;for(var P=k.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=Qn(-1,s&-s),P.tag=2;var V=f.updateQueue;if(V!==null){V=V.shared;var X=V.pending;X===null?P.next=P:(P.next=X.next,X.next=P),V.pending=P}}f.lanes|=s,P=f.alternate,P!==null&&(P.lanes|=s),mc(f.return,s,a),k.lanes|=s;break}P=P.next}}else if(f.tag===10)v=f.type===a.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(i(341));v.lanes|=s,k=v.alternate,k!==null&&(k.lanes|=s),mc(v,s,a),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===a){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}_t(t,a,p.children,s),a=a.child}return a;case 9:return p=a.type,c=a.pendingProps.children,La(a,s),p=Jt(p),c=c(p),a.flags|=1,_t(t,a,c,s),a.child;case 14:return c=a.type,p=yn(c,a.pendingProps),p=yn(c.type,p),Ym(t,a,c,p,s);case 15:return Km(t,a,a.type,a.pendingProps,s);case 17:return c=a.type,p=a.pendingProps,p=a.elementType===c?p:yn(c,p),go(t,a),a.tag=1,Bt(c)?(t=!0,Xs(a)):t=!1,La(a,s),Om(a,c,p),Tc(a,c,p,s),Fc(null,a,c,!0,t,s);case 19:return rp(t,a,s);case 22:return Qm(t,a,s)}throw Error(i(156,a.tag))};function Ep(t,a){return Ye(t,a)}function eb(t,a,s,c){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,a,s,c){return new eb(t,a,s,c)}function Jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tb(t){if(typeof t=="function")return Jc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ee)return 11;if(t===we)return 14}return 2}function _r(t,a){var s=t.alternate;return s===null?(s=nn(t.tag,a,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=a,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,a=t.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Eo(t,a,s,c,p,f){var v=2;if(c=t,typeof t=="function")Jc(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case q:return ea(s.children,p,f,a);case A:v=8,p|=8;break;case ae:return t=nn(12,s,a,p|2),t.elementType=ae,t.lanes=f,t;case re:return t=nn(13,s,a,p),t.elementType=re,t.lanes=f,t;case Z:return t=nn(19,s,a,p),t.elementType=Z,t.lanes=f,t;case ke:return So(s,p,f,a);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:v=10;break e;case de:v=9;break e;case ee:v=11;break e;case we:v=14;break e;case ge:v=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return a=nn(v,s,a,p),a.elementType=t,a.type=c,a.lanes=f,a}function ea(t,a,s,c){return t=nn(7,t,c,a),t.lanes=s,t}function So(t,a,s,c){return t=nn(22,t,c,a),t.elementType=ke,t.lanes=s,t.stateNode={isHidden:!1},t}function eu(t,a,s){return t=nn(6,t,null,a),t.lanes=s,t}function tu(t,a,s){return a=nn(4,t.children!==null?t.children:[],t.key,a),a.lanes=s,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}function nb(t,a,s,c,p){this.tag=a,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function nu(t,a,s,c,p,f,v,k,P){return t=new nb(t,a,s,k,P),a===1?(a=1,f===!0&&(a|=8)):a=0,f=nn(3,null,null,a),t.current=f,f.stateNode=t,f.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(f),t}function rb(t,a,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:t,containerInfo:a,implementation:s}}function Sp(t){if(!t)return jr;t=t._reactInternals;e:{if(ie(t)!==t||t.tag!==1)throw Error(i(170));var a=t;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Bt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(i(171))}if(t.tag===1){var s=t.type;if(Bt(s))return nm(t,s,a)}return a}function Tp(t,a,s,c,p,f,v,k,P){return t=nu(s,c,!0,t,p,f,v,k,P),t.context=Sp(null),s=t.current,c=Dt(),p=Tr(s),f=Qn(c,p),f.callback=a??null,Ar(s,f,p),t.current.lanes=p,pi(t,p,c),zt(t,c),t}function To(t,a,s,c){var p=a.current,f=Dt(),v=Tr(p);return s=Sp(s),a.context===null?a.context=s:a.pendingContext=s,a=Qn(f,v),a.payload={element:t},c=c===void 0?null:c,c!==null&&(a.callback=c),t=Ar(p,a,v),t!==null&&(wn(t,p,v,f),io(t,p,v)),v}function Po(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pp(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<a?s:a}}function ru(t,a){Pp(t,a),(t=t.alternate)&&Pp(t,a)}function ab(){return null}var _p=typeof reportError=="function"?reportError:function(t){console.error(t)};function au(t){this._internalRoot=t}_o.prototype.render=au.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(i(409));To(t,a,null,null)},_o.prototype.unmount=au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Xr(function(){To(null,t,null,null)}),a[Hn]=null}};function _o(t){this._internalRoot=t}_o.prototype.unstable_scheduleHydration=function(t){if(t){var a=ph();t={blockedOn:null,target:t,priority:a};for(var s=0;s<xr.length&&a!==0&&a<xr[s].priority;s++);xr.splice(s,0,t),s===0&&xh(t)}};function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Do(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function ib(t,a,s,c,p){if(p){if(typeof c=="function"){var f=c;c=function(){var V=Po(v);f.call(V)}}var v=Tp(a,c,t,0,null,!1,!1,"",Dp);return t._reactRootContainer=v,t[Hn]=v.current,Si(t.nodeType===8?t.parentNode:t),Xr(),v}for(;p=t.lastChild;)t.removeChild(p);if(typeof c=="function"){var k=c;c=function(){var V=Po(P);k.call(V)}}var P=nu(t,0,!1,null,null,!1,!1,"",Dp);return t._reactRootContainer=P,t[Hn]=P.current,Si(t.nodeType===8?t.parentNode:t),Xr(function(){To(a,P,s,c)}),P}function Fo(t,a,s,c,p){var f=s._reactRootContainer;if(f){var v=f;if(typeof p=="function"){var k=p;p=function(){var P=Po(v);k.call(P)}}To(a,v,t,p)}else v=ib(s,a,t,p,c);return Po(v)}hh=function(t){switch(t.tag){case 3:var a=t.stateNode;if(a.current.memoizedState.isDehydrated){var s=mr(a.pendingLanes);s!==0&&(Tl(a,s|1),zt(a,Ie()),(ze&6)===0&&($a=Ie()+500,Nr()))}break;case 13:Xr(function(){var c=Kn(t,1);if(c!==null){var p=Dt();wn(c,t,1,p)}}),ru(t,1)}},Pl=function(t){if(t.tag===13){var a=Kn(t,134217728);if(a!==null){var s=Dt();wn(a,t,134217728,s)}ru(t,134217728)}},mh=function(t){if(t.tag===13){var a=Tr(t),s=Kn(t,a);if(s!==null){var c=Dt();wn(s,t,a,c)}ru(t,a)}},ph=function(){return We},fh=function(t,a){var s=We;try{return We=t,a()}finally{We=s}},ya=function(t,a,s){switch(a){case"input":if(hn(t,s),a=s.name,s.type==="radio"&&a!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==t&&c.form===t.form){var p=Ks(c);if(!p)throw Error(i(90));Cs(c),hn(c,p)}}}break;case"textarea":Ps(t,s);break;case"select":a=s.value,a!=null&&ir(t,!!s.multiple,a,!1)}},Fs=Qc,di=Xr;var sb={usingClientEntryPoint:!1,Events:[_i,Ta,Ks,Ds,ui,Qc]},Hi={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ob={bundleType:Hi.bundleType,version:Hi.version,rendererPackageName:Hi.rendererPackageName,rendererConfig:Hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=De(t),t===null?null:t.stateNode},findFiberByHostInstance:Hi.findFiberByHostInstance||ab,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Qt=Mo.inject(ob),Pt=Mo}catch{}}return Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sb,Ot.createPortal=function(t,a){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(a))throw Error(i(200));return rb(t,a,null,s)},Ot.createRoot=function(t,a){if(!iu(t))throw Error(i(299));var s=!1,c="",p=_p;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onRecoverableError!==void 0&&(p=a.onRecoverableError)),a=nu(t,1,!1,null,null,s,!1,c,p),t[Hn]=a.current,Si(t.nodeType===8?t.parentNode:t),new au(a)},Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=De(a),t=t===null?null:t.stateNode,t},Ot.flushSync=function(t){return Xr(t)},Ot.hydrate=function(t,a,s){if(!Do(a))throw Error(i(200));return Fo(null,t,a,!0,s)},Ot.hydrateRoot=function(t,a,s){if(!iu(t))throw Error(i(405));var c=s!=null&&s.hydratedSources||null,p=!1,f="",v=_p;if(s!=null&&(s.unstable_strictMode===!0&&(p=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),a=Tp(a,null,t,1,s??null,p,!1,f,v),t[Hn]=a.current,Si(t),c)for(t=0;t<c.length;t++)s=c[t],p=s._getVersion,p=p(s._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[s,p]:a.mutableSourceEagerHydrationData.push(s,p);return new _o(a)},Ot.render=function(t,a,s){if(!Do(a))throw Error(i(200));return Fo(null,t,a,!1,s)},Ot.unmountComponentAtNode=function(t){if(!Do(t))throw Error(i(40));return t._reactRootContainer?(Xr(function(){Fo(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1},Ot.unstable_batchedUpdates=Qc,Ot.unstable_renderSubtreeIntoContainer=function(t,a,s,c){if(!Do(s))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Fo(t,a,s,!1,c)},Ot.version="18.3.1-next-f1338f8080-20240426",Ot}var Op;function Xg(){if(Op)return lu.exports;Op=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),lu.exports=xb(),lu.exports}var Vp;function yb(){if(Vp)return Ro;Vp=1;var e=Xg();return Ro.createRoot=e.createRoot,Ro.hydrateRoot=e.hydrateRoot,Ro}var vb=yb(),j=jd();const rt=gl(j),bb=db({__proto__:null,default:rt},[j]);var du,$p;function wb(){if($p)return du;$p=1;var e=typeof Element<"u",n=typeof Map=="function",i=typeof Set=="function",o=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function l(u,d){if(u===d)return!0;if(u&&d&&typeof u=="object"&&typeof d=="object"){if(u.constructor!==d.constructor)return!1;var h,m,g;if(Array.isArray(u)){if(h=u.length,h!=d.length)return!1;for(m=h;m--!==0;)if(!l(u[m],d[m]))return!1;return!0}var x;if(n&&u instanceof Map&&d instanceof Map){if(u.size!==d.size)return!1;for(x=u.entries();!(m=x.next()).done;)if(!d.has(m.value[0]))return!1;for(x=u.entries();!(m=x.next()).done;)if(!l(m.value[1],d.get(m.value[0])))return!1;return!0}if(i&&u instanceof Set&&d instanceof Set){if(u.size!==d.size)return!1;for(x=u.entries();!(m=x.next()).done;)if(!d.has(m.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(u)&&ArrayBuffer.isView(d)){if(h=u.length,h!=d.length)return!1;for(m=h;m--!==0;)if(u[m]!==d[m])return!1;return!0}if(u.constructor===RegExp)return u.source===d.source&&u.flags===d.flags;if(u.valueOf!==Object.prototype.valueOf&&typeof u.valueOf=="function"&&typeof d.valueOf=="function")return u.valueOf()===d.valueOf();if(u.toString!==Object.prototype.toString&&typeof u.toString=="function"&&typeof d.toString=="function")return u.toString()===d.toString();if(g=Object.keys(u),h=g.length,h!==Object.keys(d).length)return!1;for(m=h;m--!==0;)if(!Object.prototype.hasOwnProperty.call(d,g[m]))return!1;if(e&&u instanceof Element)return!1;for(m=h;m--!==0;)if(!((g[m]==="_owner"||g[m]==="__v"||g[m]==="__o")&&u.$$typeof)&&!l(u[g[m]],d[g[m]]))return!1;return!0}return u!==u&&d!==d}return du=function(d,h){try{return l(d,h)}catch(m){if((m.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw m}},du}var jb=wb();const Nb=gl(jb);var hu,Wp;function kb(){if(Wp)return hu;Wp=1;var e=function(n,i,o,l,u,d,h,m){if(!n){var g;if(i===void 0)g=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var x=[o,l,u,d,h,m],y=0;g=new Error(i.replace(/%s/g,function(){return x[y++]})),g.name="Invariant Violation"}throw g.framesToPop=1,g}};return hu=e,hu}var Ab=kb();const Up=gl(Ab);var mu,Hp;function Cb(){return Hp||(Hp=1,mu=function(n,i,o,l){var u=o?o.call(l,n,i):void 0;if(u!==void 0)return!!u;if(n===i)return!0;if(typeof n!="object"||!n||typeof i!="object"||!i)return!1;var d=Object.keys(n),h=Object.keys(i);if(d.length!==h.length)return!1;for(var m=Object.prototype.hasOwnProperty.bind(i),g=0;g<d.length;g++){var x=d[g];if(!m(x))return!1;var y=n[x],b=i[x];if(u=o?o.call(l,y,b,x):void 0,u===!1||u===void 0&&y!==b)return!1}return!0}),mu}var Eb=Cb();const Sb=gl(Eb);var Zg=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Zg||{}),pu={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Gp=Object.values(Zg),xl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Jg=Object.entries(xl).reduce((e,[n,i])=>(e[i]=n,e),{}),kn="data-rh",Xa={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Za=(e,n)=>{for(let i=e.length-1;i>=0;i-=1){const o=e[i];if(Object.prototype.hasOwnProperty.call(o,n))return o[n]}return null},Tb=e=>{let n=Za(e,"title");const i=Za(e,Xa.TITLE_TEMPLATE);if(Array.isArray(n)&&(n=n.join("")),i&&n)return i.replace(/%s/g,()=>n);const o=Za(e,Xa.DEFAULT_TITLE);return n||o||void 0},Pb=e=>Za(e,Xa.ON_CHANGE_CLIENT_STATE)||(()=>{}),fu=(e,n)=>n.filter(i=>typeof i[e]<"u").map(i=>i[e]).reduce((i,o)=>({...i,...o}),{}),_b=(e,n)=>n.filter(i=>typeof i.base<"u").map(i=>i.base).reverse().reduce((i,o)=>{if(!i.length){const l=Object.keys(o);for(let u=0;u<l.length;u+=1){const h=l[u].toLowerCase();if(e.indexOf(h)!==-1&&o[h])return i.concat(o)}}return i},[]),Db=e=>console&&typeof console.warn=="function"&&console.warn(e),qi=(e,n,i)=>{const o={};return i.filter(l=>Array.isArray(l[e])?!0:(typeof l[e]<"u"&&Db(`Helmet: ${e} should be of type "Array". Instead found type "${typeof l[e]}"`),!1)).map(l=>l[e]).reverse().reduce((l,u)=>{const d={};u.filter(m=>{let g;const x=Object.keys(m);for(let b=0;b<x.length;b+=1){const w=x[b],N=w.toLowerCase();n.indexOf(N)!==-1&&!(g==="rel"&&m[g].toLowerCase()==="canonical")&&!(N==="rel"&&m[N].toLowerCase()==="stylesheet")&&(g=N),n.indexOf(w)!==-1&&(w==="innerHTML"||w==="cssText"||w==="itemprop")&&(g=w)}if(!g||!m[g])return!1;const y=m[g].toLowerCase();return o[g]||(o[g]={}),d[g]||(d[g]={}),o[g][y]?!1:(d[g][y]=!0,!0)}).reverse().forEach(m=>l.push(m));const h=Object.keys(d);for(let m=0;m<h.length;m+=1){const g=h[m],x={...o[g],...d[g]};o[g]=x}return l},[]).reverse()},Fb=(e,n)=>{if(Array.isArray(e)&&e.length){for(let i=0;i<e.length;i+=1)if(e[i][n])return!0}return!1},Mb=e=>({baseTag:_b(["href"],e),bodyAttributes:fu("bodyAttributes",e),defer:Za(e,Xa.DEFER),encode:Za(e,Xa.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:fu("htmlAttributes",e),linkTags:qi("link",["rel","href"],e),metaTags:qi("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:qi("noscript",["innerHTML"],e),onChangeClientState:Pb(e),scriptTags:qi("script",["src","innerHTML"],e),styleTags:qi("style",["cssText"],e),title:Tb(e),titleAttributes:fu("titleAttributes",e),prioritizeSeoTags:Fb(e,Xa.PRIORITIZE_SEO_TAGS)}),ex=e=>Array.isArray(e)?e.join(""):e,Rb=(e,n)=>{const i=Object.keys(e);for(let o=0;o<i.length;o+=1)if(n[i[o]]&&n[i[o]].includes(e[i[o]]))return!0;return!1},gu=(e,n)=>Array.isArray(e)?e.reduce((i,o)=>(Rb(o,n)?i.priority.push(o):i.default.push(o),i),{priority:[],default:[]}):{default:e,priority:[]},qp=(e,n)=>({...e,[n]:void 0}),Bb=["noscript","script","style"],Wu=(e,n=!0)=>n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),tx=e=>Object.keys(e).reduce((n,i)=>{const o=typeof e[i]<"u"?`${i}="${e[i]}"`:`${i}`;return n?`${n} ${o}`:o},""),Lb=(e,n,i,o)=>{const l=tx(i),u=ex(n);return l?`<${e} ${kn}="true" ${l}>${Wu(u,o)}</${e}>`:`<${e} ${kn}="true">${Wu(u,o)}</${e}>`},Ib=(e,n,i=!0)=>n.reduce((o,l)=>{const u=l,d=Object.keys(u).filter(g=>!(g==="innerHTML"||g==="cssText")).reduce((g,x)=>{const y=typeof u[x]>"u"?x:`${x}="${Wu(u[x],i)}"`;return g?`${g} ${y}`:y},""),h=u.innerHTML||u.cssText||"",m=Bb.indexOf(e)===-1;return`${o}<${e} ${kn}="true" ${d}${m?"/>":`>${h}</${e}>`}`},""),nx=(e,n={})=>Object.keys(e).reduce((i,o)=>{const l=xl[o];return i[l||o]=e[o],i},n),zb=(e,n,i)=>{const o={key:n,[kn]:!0},l=nx(i,o);return[rt.createElement("title",l,n)]},Ho=(e,n)=>n.map((i,o)=>{const l={key:o,[kn]:!0};return Object.keys(i).forEach(u=>{const h=xl[u]||u;if(h==="innerHTML"||h==="cssText"){const m=i.innerHTML||i.cssText;l.dangerouslySetInnerHTML={__html:m}}else l[h]=i[u]}),rt.createElement(e,l)}),rn=(e,n,i=!0)=>{switch(e){case"title":return{toComponent:()=>zb(e,n.title,n.titleAttributes),toString:()=>Lb(e,n.title,n.titleAttributes,i)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>nx(n),toString:()=>tx(n)};default:return{toComponent:()=>Ho(e,n),toString:()=>Ib(e,n,i)}}},Ob=({metaTags:e,linkTags:n,scriptTags:i,encode:o})=>{const l=gu(e,pu.meta),u=gu(n,pu.link),d=gu(i,pu.script);return{priorityMethods:{toComponent:()=>[...Ho("meta",l.priority),...Ho("link",u.priority),...Ho("script",d.priority)],toString:()=>`${rn("meta",l.priority,o)} ${rn("link",u.priority,o)} ${rn("script",d.priority,o)}`},metaTags:l.default,linkTags:u.default,scriptTags:d.default}},Vb=e=>{const{baseTag:n,bodyAttributes:i,encode:o=!0,htmlAttributes:l,noscriptTags:u,styleTags:d,title:h="",titleAttributes:m,prioritizeSeoTags:g}=e;let{linkTags:x,metaTags:y,scriptTags:b}=e,w={toComponent:()=>[],toString:()=>""};return g&&({priorityMethods:w,linkTags:x,metaTags:y,scriptTags:b}=Ob(e)),{priority:w,base:rn("base",n,o),bodyAttributes:rn("bodyAttributes",i,o),htmlAttributes:rn("htmlAttributes",l,o),link:rn("link",x,o),meta:rn("meta",y,o),noscript:rn("noscript",u,o),script:rn("script",b,o),style:rn("style",d,o),title:rn("title",{title:h,titleAttributes:m},o)}},Uu=Vb,Bo=[],Nd=!!(typeof window<"u"&&window.document&&window.document.createElement),Hu=class{constructor(e,n){Jn(this,"instances",[]);Jn(this,"canUseDOM",Nd);Jn(this,"context");Jn(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Bo:this.instances,add:e=>{(this.canUseDOM?Bo:this.instances).push(e)},remove:e=>{const n=(this.canUseDOM?Bo:this.instances).indexOf(e);(this.canUseDOM?Bo:this.instances).splice(n,1)}}});this.context=e,this.canUseDOM=n||!1,n||(e.helmet=Uu({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},$b=parseInt(rt.version.split(".")[0],10),Gu=$b>=19,Wb={},rx=rt.createContext(Wb),oa,ax=(oa=class extends j.Component{constructor(i){super(i);Jn(this,"helmetData");Gu?this.helmetData=null:this.helmetData=new Hu(this.props.context||{},oa.canUseDOM)}render(){return Gu?rt.createElement(rt.Fragment,null,this.props.children):rt.createElement(rx.Provider,{value:this.helmetData.value},this.props.children)}},Jn(oa,"canUseDOM",Nd),oa),Ua=(e,n)=>{const i=document.head||document.querySelector("head"),o=i.querySelectorAll(`${e}[${kn}]`),l=[].slice.call(o),u=[];let d;return n&&n.length&&n.forEach(h=>{const m=document.createElement(e);for(const g in h)if(Object.prototype.hasOwnProperty.call(h,g))if(g==="innerHTML")m.innerHTML=h.innerHTML;else if(g==="cssText"){const x=h.cssText;m.appendChild(document.createTextNode(x))}else{const x=g,y=typeof h[x]>"u"?"":h[x];m.setAttribute(g,y)}m.setAttribute(kn,"true"),l.some((g,x)=>(d=x,m.isEqualNode(g)))?l.splice(d,1):u.push(m)}),l.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),u.forEach(h=>i.appendChild(h)),{oldTags:l,newTags:u}},qu=(e,n)=>{const i=document.getElementsByTagName(e)[0];if(!i)return;const o=i.getAttribute(kn),l=o?o.split(","):[],u=[...l],d=Object.keys(n);for(const h of d){const m=n[h]||"";i.getAttribute(h)!==m&&i.setAttribute(h,m),l.indexOf(h)===-1&&l.push(h);const g=u.indexOf(h);g!==-1&&u.splice(g,1)}for(let h=u.length-1;h>=0;h-=1)i.removeAttribute(u[h]);l.length===u.length?i.removeAttribute(kn):i.getAttribute(kn)!==d.join(",")&&i.setAttribute(kn,d.join(","))},Ub=(e,n)=>{typeof e<"u"&&document.title!==e&&(document.title=ex(e)),qu("title",n)},Yp=(e,n)=>{const{baseTag:i,bodyAttributes:o,htmlAttributes:l,linkTags:u,metaTags:d,noscriptTags:h,onChangeClientState:m,scriptTags:g,styleTags:x,title:y,titleAttributes:b}=e;qu("body",o),qu("html",l),Ub(y,b);const w={baseTag:Ua("base",i),linkTags:Ua("link",u),metaTags:Ua("meta",d),noscriptTags:Ua("noscript",h),scriptTags:Ua("script",g),styleTags:Ua("style",x)},N={},E={};Object.keys(w).forEach(C=>{const{newTags:M,oldTags:I}=w[C];M.length&&(N[C]=M),I.length&&(E[C]=w[C].oldTags)}),n&&n(),m(e,N,E)},Yi=null,Hb=e=>{Yi&&cancelAnimationFrame(Yi),e.defer?Yi=requestAnimationFrame(()=>{Yp(e,()=>{Yi=null})}):(Yp(e),Yi=null)},Gb=Hb,Kp=class extends j.Component{constructor(){super(...arguments);Jn(this,"rendered",!1)}shouldComponentUpdate(n){return!Sb(n,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:n}=this.props.context;n.remove(this),this.emitChange()}emitChange(){const{helmetInstances:n,setHelmet:i}=this.props.context;let o=null;const l=Mb(n.get().map(u=>{const{context:d,...h}=u.props;return h}));ax.canUseDOM?Gb(l):Uu&&(o=Uu(l)),i(o)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:n}=this.props.context;n.add(this),this.emitChange()}render(){return this.init(),null}},Go=[],Qp=e=>{const n={};for(const i of Object.keys(e))n[Jg[i]||i]=e[i];return n},ta=e=>{const n={};for(const i of Object.keys(e)){const o=xl[i];n[o||i]=e[i]}return n},Xp=(e,n)=>{if(!Nd)return;const i=document.getElementsByTagName(e)[0];if(!i)return;const o="data-rh-managed",l=i.getAttribute(o),u=l?l.split(","):[],d=Object.keys(n);for(const h of u)d.includes(h)||i.removeAttribute(h);for(const h of d){const m=n[h];m==null||m===!1?i.removeAttribute(h):m===!0?i.setAttribute(h,""):i.setAttribute(h,String(m))}d.length>0?i.setAttribute(o,d.join(",")):i.removeAttribute(o)},xu=()=>{const e={},n={};for(const i of Go){const{htmlAttributes:o,bodyAttributes:l}=i.props;o&&Object.assign(e,Qp(o)),l&&Object.assign(n,Qp(l))}Xp("html",e),Xp("body",n)},qb=class extends j.Component{componentDidMount(){Go.push(this),xu()}componentDidUpdate(){xu()}componentWillUnmount(){const e=Go.indexOf(this);e!==-1&&Go.splice(e,1),xu()}resolveTitle(){const{title:e,titleTemplate:n,defaultTitle:i}=this.props;return e&&n?n.replace(/%s/g,()=>Array.isArray(e)?e.join(""):e):e||i||void 0}renderTitle(){const e=this.resolveTitle();if(e===void 0)return null;const n=this.props.titleAttributes||{};return rt.createElement("title",ta(n),e)}renderBase(){const{base:e}=this.props;return e?rt.createElement("base",ta(e)):null}renderMeta(){const{meta:e}=this.props;return!e||!Array.isArray(e)?null:e.map((n,i)=>rt.createElement("meta",{key:i,...ta(n)}))}renderLink(){const{link:e}=this.props;return!e||!Array.isArray(e)?null:e.map((n,i)=>rt.createElement("link",{key:i,...ta(n)}))}renderScript(){const{script:e}=this.props;return!e||!Array.isArray(e)?null:e.map((n,i)=>{const{innerHTML:o,...l}=n,u=ta(l);return o&&(u.dangerouslySetInnerHTML={__html:o}),rt.createElement("script",{key:i,...u})})}renderStyle(){const{style:e}=this.props;return!e||!Array.isArray(e)?null:e.map((n,i)=>{const{cssText:o,...l}=n,u=ta(l);return o&&(u.dangerouslySetInnerHTML={__html:o}),rt.createElement("style",{key:i,...u})})}renderNoscript(){const{noscript:e}=this.props;return!e||!Array.isArray(e)?null:e.map((n,i)=>{const{innerHTML:o,...l}=n,u=ta(l);return o&&(u.dangerouslySetInnerHTML={__html:o}),rt.createElement("noscript",{key:i,...u})})}render(){return rt.createElement(rt.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},$u,Yb=($u=class extends j.Component{shouldComponentUpdate(e){return!Nb(qp(this.props,"helmetData"),qp(e,"helmetData"))}mapNestedChildrenToProps(e,n){if(!n)return null;switch(e.type){case"script":case"noscript":return{innerHTML:n};case"style":return{cssText:n};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,n,i,o){return{...n,[e.type]:[...n[e.type]||[],{...i,...this.mapNestedChildrenToProps(e,o)}]}}mapObjectTypeChildren(e,n,i,o){switch(e.type){case"title":return{...n,[e.type]:o,titleAttributes:{...i}};case"body":return{...n,bodyAttributes:{...i}};case"html":return{...n,htmlAttributes:{...i}};default:return{...n,[e.type]:{...i}}}}mapArrayTypeChildrenToProps(e,n){let i={...n};return Object.keys(e).forEach(o=>{i={...i,[o]:e[o]}}),i}warnOnInvalidChildren(e,n){return Up(Gp.some(i=>e.type===i),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Gp.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Up(!n||typeof n=="string"||Array.isArray(n)&&!n.some(i=>typeof i!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,n){let i={};return rt.Children.forEach(e,o=>{if(!o||!o.props)return;const{children:l,...u}=o.props,d=Object.keys(u).reduce((m,g)=>(m[Jg[g]||g]=u[g],m),{});let{type:h}=o;switch(typeof h=="symbol"?h=h.toString():this.warnOnInvalidChildren(o,l),h){case"Symbol(react.fragment)":n=this.mapChildrenToProps(l,n);break;case"link":case"meta":case"noscript":case"script":case"style":i=this.flattenArrayTypeChildren(o,i,d,l);break;default:n=this.mapObjectTypeChildren(o,n,d,l);break}}),this.mapArrayTypeChildrenToProps(i,n)}render(){const{children:e,...n}=this.props;let i={...n},{helmetData:o}=n;if(e&&(i=this.mapChildrenToProps(e,i)),o&&!(o instanceof Hu)){const l=o;o=new Hu(l.context,!0),delete i.helmetData}return Gu?rt.createElement(qb,{...i}):o?rt.createElement(Kp,{...i,context:o.value}):rt.createElement(rx.Consumer,null,l=>rt.createElement(Kp,{...i,context:l}))}},Jn($u,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),$u);/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ix=e=>{throw TypeError(e)},Kb=(e,n,i)=>n.has(e)||ix("Cannot "+i),yu=(e,n,i)=>(Kb(e,n,"read from private field"),i?i.call(e):n.get(e)),Qb=(e,n,i)=>n.has(e)?ix("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,i),Zp="popstate";function Jp(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Xb(e={}){function n(o,l){var g;let u=(g=l.state)==null?void 0:g.masked,{pathname:d,search:h,hash:m}=u||o.location;return os("",{pathname:d,search:h,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function i(o,l){return typeof l=="string"?l:Ln(l)}return Jb(n,i,null,e)}function Me(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ct(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Zb(){return Math.random().toString(36).substring(2,10)}function ef(e,n){return{usr:e.state,key:e.key,idx:n,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function os(e,n,i=null,o,l){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?rr(n):n,state:i,key:n&&n.key||o||Zb(),unstable_mask:l}}function Ln({pathname:e="/",search:n="",hash:i=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function rr(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substring(i),e=e.substring(0,i));let o=e.indexOf("?");o>=0&&(n.search=e.substring(o),e=e.substring(0,o)),e&&(n.pathname=e)}return n}function Jb(e,n,i,o={}){let{window:l=document.defaultView,v5Compat:u=!1}=o,d=l.history,h="POP",m=null,g=x();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function x(){return(d.state||{idx:null}).idx}function y(){h="POP";let C=x(),M=C==null?null:C-g;g=C,m&&m({action:h,location:E.location,delta:M})}function b(C,M){h="PUSH";let I=Jp(C)?C:os(E.location,C,M);g=x()+1;let z=ef(I,g),R=E.createHref(I.unstable_mask||I);try{d.pushState(z,"",R)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;l.location.assign(R)}u&&m&&m({action:h,location:E.location,delta:1})}function w(C,M){h="REPLACE";let I=Jp(C)?C:os(E.location,C,M);g=x();let z=ef(I,g),R=E.createHref(I.unstable_mask||I);d.replaceState(z,"",R),u&&m&&m({action:h,location:E.location,delta:0})}function N(C){return sx(C)}let E={get action(){return h},get location(){return e(l,d)},listen(C){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Zp,y),m=C,()=>{l.removeEventListener(Zp,y),m=null}},createHref(C){return n(l,C)},createURL:N,encodeLocation(C){let M=N(C);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:b,replace:w,go(C){return d.go(C)}};return E}function sx(e,n=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Me(i,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Ln(e);return o=o.replace(/ $/,"%20"),!n&&o.startsWith("//")&&(o=i+o),new URL(o,i)}var Ji,tf=class{constructor(e){if(Qb(this,Ji,new Map),e)for(let[n,i]of e)this.set(n,i)}get(e){if(yu(this,Ji).has(e))return yu(this,Ji).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,n){yu(this,Ji).set(e,n)}};Ji=new WeakMap;var ew=new Set(["lazy","caseSensitive","path","id","index","children"]);function tw(e){return ew.has(e)}var nw=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function rw(e){return nw.has(e)}function aw(e){return e.index===!0}function ls(e,n,i=[],o={},l=!1){return e.map((u,d)=>{let h=[...i,String(d)],m=typeof u.id=="string"?u.id:h.join("-");if(Me(u.index!==!0||!u.children,"Cannot specify children on an index route"),Me(l||!o[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),aw(u)){let g={...u,id:m};return o[m]=nf(g,n(g)),g}else{let g={...u,id:m,children:void 0};return o[m]=nf(g,n(g)),u.children&&(g.children=ls(u.children,n,h,o,l)),g}})}function nf(e,n){return Object.assign(e,{...n,...typeof n.lazy=="object"&&n.lazy!=null?{lazy:{...e.lazy,...n.lazy}}:{}})}function Mr(e,n,i="/"){return es(e,n,i,!1)}function es(e,n,i,o){let l=typeof n=="string"?rr(n):n,u=cn(l.pathname||"/",i);if(u==null)return null;let d=ox(e);sw(d);let h=null;for(let m=0;h==null&&m<d.length;++m){let g=xw(u);h=fw(d[m],g,o)}return h}function iw(e,n){let{route:i,pathname:o,params:l}=e;return{id:i.id,pathname:o,params:l,data:n[i.id],loaderData:n[i.id],handle:i.handle}}function ox(e,n=[],i=[],o="",l=!1){let u=(d,h,m=l,g)=>{let x={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&m)return;Me(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let y=An([o,x.relativePath]),b=i.concat(x);d.children&&d.children.length>0&&(Me(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),ox(d.children,n,b,y,m)),!(d.path==null&&!d.index)&&n.push({path:y,score:mw(y,d.index),routesMeta:b})};return e.forEach((d,h)=>{var m;if(d.path===""||!((m=d.path)!=null&&m.includes("?")))u(d,h);else for(let g of lx(d.path))u(d,h,!0,g)}),n}function lx(e){let n=e.split("/");if(n.length===0)return[];let[i,...o]=n,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(o.length===0)return l?[u,""]:[u];let d=lx(o.join("/")),h=[];return h.push(...d.map(m=>m===""?u:[u,m].join("/"))),l&&h.push(...d),h.map(m=>e.startsWith("/")&&m===""?"/":m)}function sw(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:pw(n.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var ow=/^:[\w-]+$/,lw=3,cw=2,uw=1,dw=10,hw=-2,rf=e=>e==="*";function mw(e,n){let i=e.split("/"),o=i.length;return i.some(rf)&&(o+=hw),n&&(o+=cw),i.filter(l=>!rf(l)).reduce((l,u)=>l+(ow.test(u)?lw:u===""?uw:dw),o)}function pw(e,n){return e.length===n.length&&e.slice(0,-1).every((o,l)=>o===n[l])?e[e.length-1]-n[n.length-1]:0}function fw(e,n,i=!1){let{routesMeta:o}=e,l={},u="/",d=[];for(let h=0;h<o.length;++h){let m=o[h],g=h===o.length-1,x=u==="/"?n:n.slice(u.length)||"/",y=il({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},x),b=m.route;if(!y&&g&&i&&!o[o.length-1].route.index&&(y=il({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!y)return null;Object.assign(l,y.params),d.push({params:l,pathname:An([u,y.pathname]),pathnameBase:bw(An([u,y.pathnameBase])),route:b}),y.pathnameBase!=="/"&&(u=An([u,y.pathnameBase]))}return d}function il(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,o]=gw(e.path,e.caseSensitive,e.end),l=n.match(i);if(!l)return null;let u=l[0],d=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:o.reduce((g,{paramName:x,isOptional:y},b)=>{if(x==="*"){let N=h[b]||"";d=u.slice(0,u.length-N.length).replace(/(.)\/+$/,"$1")}const w=h[b];return y&&!w?g[x]=void 0:g[x]=(w||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:d,pattern:e}}function gw(e,n=!1,i=!0){ct(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,m,g,x)=>{if(o.push({paramName:h,isOptional:m!=null}),m){let y=x.charAt(g+d.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),o]}function xw(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ct(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function cn(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,o=e.charAt(i);return o&&o!=="/"?null:e.slice(i)||"/"}function yw({basename:e,pathname:n}){return n==="/"?e:An([e,n])}var cx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kd=e=>cx.test(e);function vw(e,n="/"){let{pathname:i,search:o="",hash:l=""}=typeof e=="string"?rr(e):e,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=af(i.substring(1),"/"):u=af(i,n)):u=n,{pathname:u,search:ww(o),hash:jw(l)}}function af(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function vu(e,n,i,o){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ux(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function Ad(e){let n=ux(e);return n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase)}function yl(e,n,i,o=!1){let l;typeof e=="string"?l=rr(e):(l={...e},Me(!l.pathname||!l.pathname.includes("?"),vu("?","pathname","search",l)),Me(!l.pathname||!l.pathname.includes("#"),vu("#","pathname","hash",l)),Me(!l.search||!l.search.includes("#"),vu("#","search","hash",l)));let u=e===""||l.pathname==="",d=u?"/":l.pathname,h;if(d==null)h=i;else{let y=n.length-1;if(!o&&d.startsWith("..")){let b=d.split("/");for(;b[0]==="..";)b.shift(),y-=1;l.pathname=b.join("/")}h=y>=0?n[y]:"/"}let m=vw(l,h),g=d&&d!=="/"&&d.endsWith("/"),x=(u||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(g||x)&&(m.pathname+="/"),m}var An=e=>e.join("/").replace(/\/\/+/g,"/"),bw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ww=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,fs=class{constructor(e,n,i,o=!1){this.status=e,this.statusText=n||"",this.internal=o,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function cs(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function gs(e){return e.map(n=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var dx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function hx(e,n){let i=e;if(typeof i!="string"||!cx.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let o=i,l=!1;if(dx)try{let u=new URL(window.location.href),d=i.startsWith("//")?new URL(u.protocol+i):new URL(i),h=cn(d.pathname,n);d.origin===u.origin&&h!=null?i=h+d.search+d.hash:l=!0}catch{ct(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:l,to:i}}var Br=Symbol("Uninstrumented");function Nw(e,n){let i={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};e.forEach(l=>l({id:n.id,index:n.index,path:n.path,instrument(u){let d=Object.keys(i);for(let h of d)u[h]&&i[h].push(u[h])}}));let o={};if(typeof n.lazy=="function"&&i.lazy.length>0){let l=qa(i.lazy,n.lazy,()=>{});l&&(o.lazy=l)}if(typeof n.lazy=="object"){let l=n.lazy;["middleware","loader","action"].forEach(u=>{let d=l[u],h=i[`lazy.${u}`];if(typeof d=="function"&&h.length>0){let m=qa(h,d,()=>{});m&&(o.lazy=Object.assign(o.lazy||{},{[u]:m}))}})}return["loader","action"].forEach(l=>{let u=n[l];if(typeof u=="function"&&i[l].length>0){let d=u[Br]??u,h=qa(i[l],d,(...m)=>sf(m[0]));h&&(l==="loader"&&d.hydrate===!0&&(h.hydrate=!0),h[Br]=d,o[l]=h)}}),n.middleware&&n.middleware.length>0&&i.middleware.length>0&&(o.middleware=n.middleware.map(l=>{let u=l[Br]??l,d=qa(i.middleware,u,(...h)=>sf(h[0]));return d?(d[Br]=u,d):l})),o}function kw(e,n){let i={navigate:[],fetch:[]};if(n.forEach(o=>o({instrument(l){let u=Object.keys(l);for(let d of u)l[d]&&i[d].push(l[d])}})),i.navigate.length>0){let o=e.navigate[Br]??e.navigate,l=qa(i.navigate,o,(...u)=>{let[d,h]=u;return{to:typeof d=="number"||typeof d=="string"?d:d?Ln(d):".",...of(e,h??{})}});l&&(l[Br]=o,e.navigate=l)}if(i.fetch.length>0){let o=e.fetch[Br]??e.fetch,l=qa(i.fetch,o,(...u)=>{let[d,,h,m]=u;return{href:h??".",fetcherKey:d,...of(e,m??{})}});l&&(l[Br]=o,e.fetch=l)}return e}function qa(e,n,i){return e.length===0?null:async(...o)=>{let l=await mx(e,i(...o),()=>n(...o),e.length-1);if(l.type==="error")throw l.value;return l.value}}async function mx(e,n,i,o){let l=e[o],u;if(l){let d,h=async()=>(d?console.error("You cannot call instrumented handlers more than once"):d=mx(e,n,i,o-1),u=await d,Me(u,"Expected a result"),u.type==="error"&&u.value instanceof Error?{status:"error",error:u.value}:{status:"success",error:void 0});try{await l(h,n)}catch(m){console.error("An instrumentation function threw an error:",m)}d||await h(),await d}else try{u={type:"success",value:await i()}}catch(d){u={type:"error",value:d}}return u||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function sf(e){let{request:n,context:i,params:o,unstable_pattern:l}=e;return{request:Aw(n),params:{...o},unstable_pattern:l,context:Cw(i)}}function of(e,n){return{currentUrl:Ln(e.state.location),..."formMethod"in n?{formMethod:n.formMethod}:{},..."formEncType"in n?{formEncType:n.formEncType}:{},..."formData"in n?{formData:n.formData}:{},..."body"in n?{body:n.body}:{}}}function Aw(e){return{method:e.method,url:e.url,headers:{get:(...n)=>e.headers.get(...n)}}}function Cw(e){if(Sw(e)){let n={...e};return Object.freeze(n),n}else return{get:n=>e.get(n)}}var Ew=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sw(e){if(e===null||typeof e!="object")return!1;const n=Object.getPrototypeOf(e);return n===Object.prototype||n===null||Object.getOwnPropertyNames(n).sort().join("\0")===Ew}var px=["POST","PUT","PATCH","DELETE"],Tw=new Set(px),Pw=["GET",...px],_w=new Set(Pw),fx=new Set([301,302,303,307,308]),Dw=new Set([307,308]),bu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Fw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ki={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Mw=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),gx="remix-router-transitions",xx=Symbol("ResetLoaderData");function Rw(e){const n=e.window?e.window:typeof window<"u"?window:void 0,i=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u";Me(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o=e.hydrationRouteProperties||[],l=e.mapRouteProperties||Mw,u=l;if(e.unstable_instrumentations){let S=e.unstable_instrumentations;u=D=>({...l(D),...Nw(S.map(O=>O.route).filter(Boolean),D)})}let d={},h=ls(e.routes,u,void 0,d),m,g=e.basename||"/";g.startsWith("/")||(g=`/${g}`);let x=e.dataStrategy||Ow,y={...e.future},b=null,w=new Set,N=null,E=null,C=null,M=e.hydrationData!=null,I=Mr(h,e.history.location,g),z=!1,R=null,U,F;if(I==null&&!e.patchRoutesOnNavigation){let S=an(404,{pathname:e.history.location.pathname}),{matches:D,route:O}=Lo(h);U=!0,F=!U,I=D,R={[O.id]:S}}else if(I&&!e.hydrationData&&cr(I,h,e.history.location.pathname).active&&(I=null),I)if(I.some(S=>S.route.lazy))U=!1,F=!U;else if(!I.some(S=>Cd(S.route)))U=!0,F=!U;else{let S=e.hydrationData?e.hydrationData.loaderData:null,D=e.hydrationData?e.hydrationData.errors:null,O=I;if(D){let Q=I.findIndex(te=>D[te.route.id]!==void 0);O=O.slice(0,Q+1)}F=!1,U=O.every(Q=>{let te=yx(Q.route,S,D);return F=F||te.renderFallback,!te.shouldLoad})}else{U=!1,F=!U,I=[];let S=cr(null,h,e.history.location.pathname);S.active&&S.matches&&(z=!0,I=S.matches)}let q,A={historyAction:e.history.action,location:e.history.location,matches:I,initialized:U,renderFallback:F,navigation:bu,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||R,fetchers:new Map,blockers:new Map},ae="POP",G=null,de=!1,ee,re=!1,Z=new Map,we=null,ge=!1,ke=!1,Y=new Set,$=new Map,H=0,T=-1,W=new Map,fe=new Set,Ae=new Map,Te=new Map,Se=new Set,Be=new Map,Le,Oe=null;function Et(){if(b=e.history.listen(({action:S,location:D,delta:O})=>{if(Le){Le(),Le=void 0;return}ct(Be.size===0||O!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Q=On({currentLocation:A.location,nextLocation:D,historyAction:S});if(Q&&O!=null){let te=new Promise(xe=>{Le=xe});e.history.go(O*-1),pn(Q,{state:"blocked",location:D,proceed(){pn(Q,{state:"proceeding",proceed:void 0,reset:void 0,location:D}),te.then(()=>e.history.go(O))},reset(){let xe=new Map(A.blockers);xe.set(Q,Ki),at({blockers:xe})}}),G==null||G.resolve(),G=null;return}return hn(S,D)}),i){a1(n,Z);let S=()=>i1(n,Z);n.addEventListener("pagehide",S),we=()=>n.removeEventListener("pagehide",S)}return A.initialized||hn("POP",A.location,{initialHydration:!0}),q}function ha(){b&&b(),we&&we(),w.clear(),ee&&ee.abort(),A.fetchers.forEach((S,D)=>pa(D)),A.blockers.forEach((S,D)=>ya(D))}function Cs(S){return w.add(S),()=>w.delete(S)}function at(S,D={}){S.matches&&(S.matches=S.matches.map(te=>{let xe=d[te.route.id],ve=te.route;return ve.element!==xe.element||ve.errorElement!==xe.errorElement||ve.hydrateFallbackElement!==xe.hydrateFallbackElement?{...te,route:xe}:te})),A={...A,...S};let O=[],Q=[];A.fetchers.forEach((te,xe)=>{te.state==="idle"&&(Se.has(xe)?O.push(xe):Q.push(xe))}),Se.forEach(te=>{!A.fetchers.has(te)&&!$.has(te)&&O.push(te)}),[...w].forEach(te=>te(A,{deletedFetchers:O,newErrors:S.errors??null,viewTransitionOpts:D.viewTransitionOpts,flushSync:D.flushSync===!0})),O.forEach(te=>pa(te)),Q.forEach(te=>A.fetchers.delete(te))}function Sn(S,D,{flushSync:O}={}){var Ce,ye;let Q=A.actionData!=null&&A.navigation.formMethod!=null&&Ct(A.navigation.formMethod)&&A.navigation.state==="loading"&&((Ce=S.state)==null?void 0:Ce._isRedirect)!==!0,te;D.actionData?Object.keys(D.actionData).length>0?te=D.actionData:te=null:Q?te=A.actionData:te=null;let xe=D.loaderData?xf(A.loaderData,D.loaderData,D.matches||[],D.errors):A.loaderData,ve=A.blockers;ve.size>0&&(ve=new Map(ve),ve.forEach((De,Re)=>ve.set(Re,Ki)));let he=ge?!1:di(S,D.matches||A.matches),ie=de===!0||A.navigation.formMethod!=null&&Ct(A.navigation.formMethod)&&((ye=S.state)==null?void 0:ye._isRedirect)!==!0;m&&(h=m,m=void 0),ge||ae==="POP"||(ae==="PUSH"?e.history.push(S,S.state):ae==="REPLACE"&&e.history.replace(S,S.state));let be;if(ae==="POP"){let De=Z.get(A.location.pathname);De&&De.has(S.pathname)?be={currentLocation:A.location,nextLocation:S}:Z.has(S.pathname)&&(be={currentLocation:S,nextLocation:A.location})}else if(re){let De=Z.get(A.location.pathname);De?De.add(S.pathname):(De=new Set([S.pathname]),Z.set(A.location.pathname,De)),be={currentLocation:A.location,nextLocation:S}}at({...D,actionData:te,loaderData:xe,historyAction:ae,location:S,initialized:!0,renderFallback:!1,navigation:bu,revalidation:"idle",restoreScrollPosition:he,preventScrollReset:ie,blockers:ve},{viewTransitionOpts:be,flushSync:O===!0}),ae="POP",de=!1,re=!1,ge=!1,ke=!1,G==null||G.resolve(),G=null,Oe==null||Oe.resolve(),Oe=null}async function si(S,D){if(G==null||G.resolve(),G=null,typeof S=="number"){G||(G=wf());let Ye=G.promise;return e.history.go(S),Ye}let O=Yu(A.location,A.matches,g,S,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:Q,submission:te,error:xe}=lf(!1,O,D),ve;D!=null&&D.unstable_mask&&(ve={pathname:"",search:"",hash:"",...typeof D.unstable_mask=="string"?rr(D.unstable_mask):{...A.location.unstable_mask,...D.unstable_mask}});let he=A.location,ie=os(he,Q,D&&D.state,void 0,ve);ie={...ie,...e.history.encodeLocation(ie)};let be=D&&D.replace!=null?D.replace:void 0,Ce="PUSH";be===!0?Ce="REPLACE":be===!1||te!=null&&Ct(te.formMethod)&&te.formAction===A.location.pathname+A.location.search&&(Ce="REPLACE");let ye=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,De=(D&&D.flushSync)===!0,Re=On({currentLocation:he,nextLocation:ie,historyAction:Ce});if(Re){pn(Re,{state:"blocked",location:ie,proceed(){pn(Re,{state:"proceeding",proceed:void 0,reset:void 0,location:ie}),si(S,D)},reset(){let Ye=new Map(A.blockers);Ye.set(Re,Ki),at({blockers:Ye})}});return}await hn(Ce,ie,{submission:te,pendingError:xe,preventScrollReset:ye,replace:D&&D.replace,enableViewTransition:D&&D.viewTransition,flushSync:De,callSiteDefaultShouldRevalidate:D&&D.unstable_defaultShouldRevalidate})}function Es(){Oe||(Oe=wf()),or(),at({revalidation:"loading"});let S=Oe.promise;return A.navigation.state==="submitting"?S:A.navigation.state==="idle"?(hn(A.historyAction,A.location,{startUninterruptedRevalidation:!0}),S):(hn(ae||A.historyAction,A.navigation.location,{overrideNavigation:A.navigation,enableViewTransition:re===!0}),S)}async function hn(S,D,O){ee&&ee.abort(),ee=null,ae=S,ge=(O&&O.startUninterruptedRevalidation)===!0,Fs(A.location,A.matches),de=(O&&O.preventScrollReset)===!0,re=(O&&O.enableViewTransition)===!0;let Q=m||h,te=O&&O.overrideNavigation,xe=O!=null&&O.initialHydration&&A.matches&&A.matches.length>0&&!z?A.matches:Mr(Q,D,g),ve=(O&&O.flushSync)===!0;if(xe&&A.initialized&&!ke&&Yw(A.location,D)&&!(O&&O.submission&&Ct(O.submission.formMethod))){Sn(D,{matches:xe},{flushSync:ve});return}let he=cr(xe,Q,D.pathname);if(he.active&&he.matches&&(xe=he.matches),!xe){let{error:it,notFoundMatches:xt,route:$e}=va(D.pathname);Sn(D,{matches:xt,loaderData:{},errors:{[$e.id]:it}},{flushSync:ve});return}ee=new AbortController;let ie=Ha(e.history,D,ee.signal,O&&O.submission),be=e.getContext?await e.getContext():new tf,Ce;if(O&&O.pendingError)Ce=[Rr(xe).route.id,{type:"error",error:O.pendingError}];else if(O&&O.submission&&Ct(O.submission.formMethod)){let it=await Ss(ie,D,O.submission,xe,be,he.active,O&&O.initialHydration===!0,{replace:O.replace,flushSync:ve});if(it.shortCircuited)return;if(it.pendingActionResult){let[xt,$e]=it.pendingActionResult;if(Gt($e)&&cs($e.error)&&$e.error.status===404){ee=null,Sn(D,{matches:it.matches,loaderData:{},errors:{[xt]:$e.error}});return}}xe=it.matches||xe,Ce=it.pendingActionResult,te=wu(D,O.submission),ve=!1,he.active=!1,ie=Ha(e.history,ie.url,ie.signal)}let{shortCircuited:ye,matches:De,loaderData:Re,errors:Ye}=await oi(ie,D,xe,be,he.active,te,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,O&&O.initialHydration===!0,ve,Ce,O&&O.callSiteDefaultShouldRevalidate);ye||(ee=null,Sn(D,{matches:De||xe,...yf(Ce),loaderData:Re,errors:Ye}))}async function Ss(S,D,O,Q,te,xe,ve,he={}){or();let ie=n1(D,O);if(at({navigation:ie},{flushSync:he.flushSync===!0}),xe){let ye=await Vr(Q,D.pathname,S.signal);if(ye.type==="aborted")return{shortCircuited:!0};if(ye.type==="error"){if(ye.partialMatches.length===0){let{matches:Re,route:Ye}=Lo(h);return{matches:Re,pendingActionResult:[Ye.id,{type:"error",error:ye.error}]}}let De=Rr(ye.partialMatches).route.id;return{matches:ye.partialMatches,pendingActionResult:[De,{type:"error",error:ye.error}]}}else if(ye.matches)Q=ye.matches;else{let{notFoundMatches:De,error:Re,route:Ye}=va(D.pathname);return{matches:De,pendingActionResult:[Ye.id,{type:"error",error:Re}]}}}let be,Ce=qo(Q,D);if(!Ce.route.action&&!Ce.route.lazy)be={type:"error",error:an(405,{method:S.method,pathname:D.pathname,routeId:Ce.route.id})};else{let ye=Ja(u,d,S,Q,Ce,ve?[]:o,te),De=await sr(S,ye,te,null);if(be=De[Ce.route.id],!be){for(let Re of Q)if(De[Re.route.id]){be=De[Re.route.id];break}}if(S.signal.aborted)return{shortCircuited:!0}}if(aa(be)){let ye;return he&&he.replace!=null?ye=he.replace:ye=pf(be.response.headers.get("Location"),new URL(S.url),g,e.history)===A.location.pathname+A.location.search,await Tn(S,be,!0,{submission:O,replace:ye}),{shortCircuited:!0}}if(Gt(be)){let ye=Rr(Q,Ce.route.id);return(he&&he.replace)!==!0&&(ae="PUSH"),{matches:Q,pendingActionResult:[ye.route.id,be,Ce.route.id]}}return{matches:Q,pendingActionResult:[Ce.route.id,be]}}async function oi(S,D,O,Q,te,xe,ve,he,ie,be,Ce,ye,De){let Re=xe||wu(D,ve),Ye=ve||he||bf(Re),it=!ge&&!be;if(te){if(it){let mt=ar(ye);at({navigation:Re,...mt!==void 0?{actionData:mt}:{}},{flushSync:Ce})}let Pe=await Vr(O,D.pathname,S.signal);if(Pe.type==="aborted")return{shortCircuited:!0};if(Pe.type==="error"){if(Pe.partialMatches.length===0){let{matches:hr,route:Wn}=Lo(h);return{matches:hr,loaderData:{},errors:{[Wn.id]:Pe.error}}}let mt=Rr(Pe.partialMatches).route.id;return{matches:Pe.partialMatches,loaderData:{},errors:{[mt]:Pe.error}}}else if(Pe.matches)O=Pe.matches;else{let{error:mt,notFoundMatches:hr,route:Wn}=va(D.pathname);return{matches:hr,loaderData:{},errors:{[Wn.id]:mt}}}}let xt=m||h,{dsMatches:$e,revalidatingFetchers:Ie}=cf(S,Q,u,d,e.history,A,O,Ye,D,be?[]:o,be===!0,ke,Y,Se,Ae,fe,xt,g,e.patchRoutesOnNavigation!=null,ye,De);if(T=++H,!e.dataStrategy&&!$e.some(Pe=>Pe.shouldLoad)&&!$e.some(Pe=>Pe.route.middleware&&Pe.route.middleware.length>0)&&Ie.length===0){let Pe=ga();return Sn(D,{matches:O,loaderData:{},errors:ye&&Gt(ye[1])?{[ye[0]]:ye[1].error}:null,...yf(ye),...Pe?{fetchers:new Map(A.fetchers)}:{}},{flushSync:Ce}),{shortCircuited:!0}}if(it){let Pe={};if(!te){Pe.navigation=Re;let mt=ar(ye);mt!==void 0&&(Pe.actionData=mt)}Ie.length>0&&(Pe.fetchers=ir(Ie)),at(Pe,{flushSync:Ce})}Ie.forEach(Pe=>{mn(Pe.key),Pe.controller&&$.set(Pe.key,Pe.controller)});let Vn=()=>Ie.forEach(Pe=>mn(Pe.key));ee&&ee.signal.addEventListener("abort",Vn);let{loaderResults:$n,fetcherResults:fn}=await ma($e,Ie,S,Q);if(S.signal.aborted)return{shortCircuited:!0};ee&&ee.signal.removeEventListener("abort",Vn),Ie.forEach(Pe=>$.delete(Pe.key));let Tt=Io($n);if(Tt)return await Tn(S,Tt.result,!0,{replace:ie}),{shortCircuited:!0};if(Tt=Io(fn),Tt)return fe.add(Tt.key),await Tn(S,Tt.result,!0,{replace:ie}),{shortCircuited:!0};let{loaderData:mi,errors:dr}=gf(A,O,$n,ye,Ie,fn);be&&A.errors&&(dr={...A.errors,...dr});let Qt=ga(),Pt=xa(T),ba=Qt||Pt||Ie.length>0;return{matches:O,loaderData:mi,errors:dr,...ba?{fetchers:new Map(A.fetchers)}:{}}}function ar(S){if(S&&!Gt(S[1]))return{[S[0]]:S[1].data};if(A.actionData)return Object.keys(A.actionData).length===0?null:A.actionData}function ir(S){return S.forEach(D=>{let O=A.fetchers.get(D.key),Q=Qi(void 0,O?O.data:void 0);A.fetchers.set(D.key,Q)}),new Map(A.fetchers)}async function li(S,D,O,Q){mn(S);let te=(Q&&Q.flushSync)===!0,xe=m||h,ve=Yu(A.location,A.matches,g,O,D,Q==null?void 0:Q.relative),he=Mr(xe,ve,g),ie=cr(he,xe,ve);if(ie.active&&ie.matches&&(he=ie.matches),!he){St(S,D,an(404,{pathname:ve}),{flushSync:te});return}let{path:be,submission:Ce,error:ye}=lf(!0,ve,Q);if(ye){St(S,D,ye,{flushSync:te});return}let De=e.getContext?await e.getContext():new tf,Re=(Q&&Q.preventScrollReset)===!0;if(Ce&&Ct(Ce.formMethod)){await Ts(S,D,be,he,De,ie.active,te,Re,Ce,Q&&Q.unstable_defaultShouldRevalidate);return}Ae.set(S,{routeId:D,path:be}),await Ps(S,D,be,he,De,ie.active,te,Re,Ce)}async function Ts(S,D,O,Q,te,xe,ve,he,ie,be){or(),Ae.delete(S);let Ce=A.fetchers.get(S);Kt(S,r1(ie,Ce),{flushSync:ve});let ye=new AbortController,De=Ha(e.history,O,ye.signal,ie);if(xe){let He=await Vr(Q,new URL(De.url).pathname,De.signal,S);if(He.type==="aborted")return;if(He.type==="error"){St(S,D,He.error,{flushSync:ve});return}else if(He.matches)Q=He.matches;else{St(S,D,an(404,{pathname:O}),{flushSync:ve});return}}let Re=qo(Q,O);if(!Re.route.action&&!Re.route.lazy){let He=an(405,{method:ie.formMethod,pathname:O,routeId:D});St(S,D,He,{flushSync:ve});return}$.set(S,ye);let Ye=H,it=Ja(u,d,De,Q,Re,o,te),xt=await sr(De,it,te,S),$e=xt[Re.route.id];if(!$e){for(let He of it)if(xt[He.route.id]){$e=xt[He.route.id];break}}if(De.signal.aborted){$.get(S)===ye&&$.delete(S);return}if(Se.has(S)){if(aa($e)||Gt($e)){Kt(S,er(void 0));return}}else{if(aa($e))if($.delete(S),T>Ye){Kt(S,er(void 0));return}else return fe.add(S),Kt(S,Qi(ie)),Tn(De,$e,!1,{fetcherSubmission:ie,preventScrollReset:he});if(Gt($e)){St(S,D,$e.error);return}}let Ie=A.navigation.location||A.location,Vn=Ha(e.history,Ie,ye.signal),$n=m||h,fn=A.navigation.state!=="idle"?Mr($n,A.navigation.location,g):A.matches;Me(fn,"Didn't find any matches after fetcher action");let Tt=++H;W.set(S,Tt);let mi=Qi(ie,$e.data);A.fetchers.set(S,mi);let{dsMatches:dr,revalidatingFetchers:Qt}=cf(Vn,te,u,d,e.history,A,fn,ie,Ie,o,!1,ke,Y,Se,Ae,fe,$n,g,e.patchRoutesOnNavigation!=null,[Re.route.id,$e],be);Qt.filter(He=>He.key!==S).forEach(He=>{let Un=He.key,mr=A.fetchers.get(Un),wa=Qi(void 0,mr?mr.data:void 0);A.fetchers.set(Un,wa),mn(Un),He.controller&&$.set(Un,He.controller)}),at({fetchers:new Map(A.fetchers)});let Pt=()=>Qt.forEach(He=>mn(He.key));ye.signal.addEventListener("abort",Pt);let{loaderResults:ba,fetcherResults:Pe}=await ma(dr,Qt,Vn,te);if(ye.signal.aborted)return;if(ye.signal.removeEventListener("abort",Pt),W.delete(S),$.delete(S),Qt.forEach(He=>$.delete(He.key)),A.fetchers.has(S)){let He=er($e.data);A.fetchers.set(S,He)}let mt=Io(ba);if(mt)return Tn(Vn,mt.result,!1,{preventScrollReset:he});if(mt=Io(Pe),mt)return fe.add(mt.key),Tn(Vn,mt.result,!1,{preventScrollReset:he});let{loaderData:hr,errors:Wn}=gf(A,fn,ba,void 0,Qt,Pe);xa(Tt),A.navigation.state==="loading"&&Tt>T?(Me(ae,"Expected pending action"),ee&&ee.abort(),Sn(A.navigation.location,{matches:fn,loaderData:hr,errors:Wn,fetchers:new Map(A.fetchers)})):(at({errors:Wn,loaderData:xf(A.loaderData,hr,fn,Wn),fetchers:new Map(A.fetchers)}),ke=!1)}async function Ps(S,D,O,Q,te,xe,ve,he,ie){let be=A.fetchers.get(S);Kt(S,Qi(ie,be?be.data:void 0),{flushSync:ve});let Ce=new AbortController,ye=Ha(e.history,O,Ce.signal);if(xe){let $e=await Vr(Q,new URL(ye.url).pathname,ye.signal,S);if($e.type==="aborted")return;if($e.type==="error"){St(S,D,$e.error,{flushSync:ve});return}else if($e.matches)Q=$e.matches;else{St(S,D,an(404,{pathname:O}),{flushSync:ve});return}}let De=qo(Q,O);$.set(S,Ce);let Re=H,Ye=Ja(u,d,ye,Q,De,o,te),xt=(await sr(ye,Ye,te,S))[De.route.id];if($.get(S)===Ce&&$.delete(S),!ye.signal.aborted){if(Se.has(S)){Kt(S,er(void 0));return}if(aa(xt))if(T>Re){Kt(S,er(void 0));return}else{fe.add(S),await Tn(ye,xt,!1,{preventScrollReset:he});return}if(Gt(xt)){St(S,D,xt.error);return}Kt(S,er(xt.data))}}async function Tn(S,D,O,{submission:Q,fetcherSubmission:te,preventScrollReset:xe,replace:ve}={}){O||(G==null||G.resolve(),G=null),D.response.headers.has("X-Remix-Revalidate")&&(ke=!0);let he=D.response.headers.get("Location");Me(he,"Expected a Location header on the redirect Response"),he=pf(he,new URL(S.url),g,e.history);let ie=os(A.location,he,{_isRedirect:!0});if(i){let Ye=!1;if(D.response.headers.has("X-Remix-Reload-Document"))Ye=!0;else if(kd(he)){const it=sx(he,!0);Ye=it.origin!==n.location.origin||cn(it.pathname,g)==null}if(Ye){ve?n.location.replace(he):n.location.assign(he);return}}ee=null;let be=ve===!0||D.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Ce,formAction:ye,formEncType:De}=A.navigation;!Q&&!te&&Ce&&ye&&De&&(Q=bf(A.navigation));let Re=Q||te;if(Dw.has(D.response.status)&&Re&&Ct(Re.formMethod))await hn(be,ie,{submission:{...Re,formAction:he},preventScrollReset:xe||de,enableViewTransition:O?re:void 0});else{let Ye=wu(ie,Q);await hn(be,ie,{overrideNavigation:Ye,fetcherSubmission:te,preventScrollReset:xe||de,enableViewTransition:O?re:void 0})}}async function sr(S,D,O,Q){var ve;let te,xe={};try{te=await $w(x,S,D,Q,O,!1)}catch(he){return D.filter(ie=>ie.shouldLoad).forEach(ie=>{xe[ie.route.id]={type:"error",error:he}}),xe}if(S.signal.aborted)return xe;if(!Ct(S.method))for(let he of D){if(((ve=te[he.route.id])==null?void 0:ve.type)==="error")break;!te.hasOwnProperty(he.route.id)&&!A.loaderData.hasOwnProperty(he.route.id)&&(!A.errors||!A.errors.hasOwnProperty(he.route.id))&&he.shouldCallHandler()&&(te[he.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${he.route.id}`)})}for(let[he,ie]of Object.entries(te))if(Zw(ie)){let be=ie.result;xe[he]={type:"redirect",response:Gw(be,S,he,D,g)}}else xe[he]=await Hw(ie);return xe}async function ma(S,D,O,Q){let te=sr(O,S,Q,null),xe=Promise.all(D.map(async ie=>{if(ie.matches&&ie.match&&ie.request&&ie.controller){let Ce=(await sr(ie.request,ie.matches,Q,ie.key))[ie.match.route.id];return{[ie.key]:Ce}}else return Promise.resolve({[ie.key]:{type:"error",error:an(404,{pathname:ie.path})}})})),ve=await te,he=(await xe).reduce((ie,be)=>Object.assign(ie,be),{});return{loaderResults:ve,fetcherResults:he}}function or(){ke=!0,Ae.forEach((S,D)=>{$.has(D)&&Y.add(D),mn(D)})}function Kt(S,D,O={}){A.fetchers.set(S,D),at({fetchers:new Map(A.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function St(S,D,O,Q={}){let te=Rr(A.matches,D);pa(S),at({errors:{[te.route.id]:O},fetchers:new Map(A.fetchers)},{flushSync:(Q&&Q.flushSync)===!0})}function lr(S){return Te.set(S,(Te.get(S)||0)+1),Se.has(S)&&Se.delete(S),A.fetchers.get(S)||Fw}function Cl(S,D){mn(S,D==null?void 0:D.reason),Kt(S,er(null))}function pa(S){let D=A.fetchers.get(S);$.has(S)&&!(D&&D.state==="loading"&&W.has(S))&&mn(S),Ae.delete(S),W.delete(S),fe.delete(S),Se.delete(S),Y.delete(S),A.fetchers.delete(S)}function _s(S){let D=(Te.get(S)||0)-1;D<=0?(Te.delete(S),Se.add(S)):Te.set(S,D),at({fetchers:new Map(A.fetchers)})}function mn(S,D){let O=$.get(S);O&&(O.abort(D),$.delete(S))}function fa(S){for(let D of S){let O=lr(D),Q=er(O.data);A.fetchers.set(D,Q)}}function ga(){let S=[],D=!1;for(let O of fe){let Q=A.fetchers.get(O);Me(Q,`Expected fetcher: ${O}`),Q.state==="loading"&&(fe.delete(O),S.push(O),D=!0)}return fa(S),D}function xa(S){let D=[];for(let[O,Q]of W)if(Q<S){let te=A.fetchers.get(O);Me(te,`Expected fetcher: ${O}`),te.state==="loading"&&(mn(O),W.delete(O),D.push(O))}return fa(D),D.length>0}function ci(S,D){let O=A.blockers.get(S)||Ki;return Be.get(S)!==D&&Be.set(S,D),O}function ya(S){A.blockers.delete(S),Be.delete(S)}function pn(S,D){let O=A.blockers.get(S)||Ki;Me(O.state==="unblocked"&&D.state==="blocked"||O.state==="blocked"&&D.state==="blocked"||O.state==="blocked"&&D.state==="proceeding"||O.state==="blocked"&&D.state==="unblocked"||O.state==="proceeding"&&D.state==="unblocked",`Invalid blocker state transition: ${O.state} -> ${D.state}`);let Q=new Map(A.blockers);Q.set(S,D),at({blockers:Q})}function On({currentLocation:S,nextLocation:D,historyAction:O}){if(Be.size===0)return;Be.size>1&&ct(!1,"A router only supports one blocker at a time");let Q=Array.from(Be.entries()),[te,xe]=Q[Q.length-1],ve=A.blockers.get(te);if(!(ve&&ve.state==="proceeding")&&xe({currentLocation:S,nextLocation:D,historyAction:O}))return te}function va(S){let D=an(404,{pathname:S}),O=m||h,{matches:Q,route:te}=Lo(O);return{notFoundMatches:Q,route:te,error:D}}function Ds(S,D,O){if(N=S,C=D,E=O||null,!M&&A.navigation===bu){M=!0;let Q=di(A.location,A.matches);Q!=null&&at({restoreScrollPosition:Q})}return()=>{N=null,C=null,E=null}}function ui(S,D){return E&&E(S,D.map(Q=>iw(Q,A.loaderData)))||S.key}function Fs(S,D){if(N&&C){let O=ui(S,D);N[O]=C()}}function di(S,D){if(N){let O=ui(S,D),Q=N[O];if(typeof Q=="number")return Q}return null}function cr(S,D,O){if(e.patchRoutesOnNavigation)if(S){if(Object.keys(S[0].params).length>0)return{active:!0,matches:es(D,O,g,!0)}}else return{active:!0,matches:es(D,O,g,!0)||[]};return{active:!1,matches:null}}async function Vr(S,D,O,Q){if(!e.patchRoutesOnNavigation)return{type:"success",matches:S};let te=S;for(;;){let xe=m==null,ve=m||h,he=d;try{await e.patchRoutesOnNavigation({signal:O,path:D,matches:te,fetcherKey:Q,patch:(Ce,ye)=>{O.aborted||uf(Ce,ye,ve,he,u,!1)}})}catch(Ce){return{type:"error",error:Ce,partialMatches:te}}finally{xe&&!O.aborted&&(h=[...h])}if(O.aborted)return{type:"aborted"};let ie=Mr(ve,D,g),be=null;if(ie){if(Object.keys(ie[0].params).length===0)return{type:"success",matches:ie};if(be=es(ve,D,g,!0),!(be&&te.length<be.length&&ur(te,be.slice(0,te.length))))return{type:"success",matches:ie}}if(be||(be=es(ve,D,g,!0)),!be||ur(te,be))return{type:"success",matches:null};te=be}}function ur(S,D){return S.length===D.length&&S.every((O,Q)=>O.route.id===D[Q].route.id)}function hi(S){d={},m=ls(S,u,void 0,d)}function $r(S,D,O=!1){let Q=m==null;uf(S,D,m||h,d,u,O),Q&&(h=[...h],at({}))}return q={get basename(){return g},get future(){return y},get state(){return A},get routes(){return h},get window(){return n},initialize:Et,subscribe:Cs,enableScrollRestoration:Ds,navigate:si,fetch:li,revalidate:Es,createHref:S=>e.history.createHref(S),encodeLocation:S=>e.history.encodeLocation(S),getFetcher:lr,resetFetcher:Cl,deleteFetcher:_s,dispose:ha,getBlocker:ci,deleteBlocker:ya,patchRoutes:$r,_internalFetchControllers:$,_internalSetRoutes:hi,_internalSetStateDoNotUseOrYouWillBreakYourApp(S){at(S)}},e.unstable_instrumentations&&(q=kw(q,e.unstable_instrumentations.map(S=>S.router).filter(Boolean))),q}function Bw(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Yu(e,n,i,o,l,u){let d,h;if(l){d=[];for(let g of n)if(d.push(g),g.route.id===l){h=g;break}}else d=n,h=n[n.length-1];let m=yl(o||".",Ad(d),cn(e.pathname,i)||e.pathname,u==="path");if(o==null&&(m.search=e.search,m.hash=e.hash),(o==null||o===""||o===".")&&h){let g=Sd(m.search);if(h.route.index&&!g)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!h.route.index&&g){let x=new URLSearchParams(m.search),y=x.getAll("index");x.delete("index"),y.filter(w=>w).forEach(w=>x.append("index",w));let b=x.toString();m.search=b?`?${b}`:""}}return i!=="/"&&(m.pathname=yw({basename:i,pathname:m.pathname})),Ln(m)}function lf(e,n,i){if(!i||!Bw(i))return{path:n};if(i.formMethod&&!t1(i.formMethod))return{path:n,error:an(405,{method:i.formMethod})};let o=()=>({path:n,error:an(400,{type:"invalid-body"})}),u=(i.formMethod||"get").toUpperCase(),d=kx(n);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!Ct(u))return o();let y=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((b,[w,N])=>`${b}${w}=${N}
`,""):String(i.body);return{path:n,submission:{formMethod:u,formAction:d,formEncType:i.formEncType,formData:void 0,json:void 0,text:y}}}else if(i.formEncType==="application/json"){if(!Ct(u))return o();try{let y=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:n,submission:{formMethod:u,formAction:d,formEncType:i.formEncType,formData:void 0,json:y,text:void 0}}}catch{return o()}}}Me(typeof FormData=="function","FormData is not available in this environment");let h,m;if(i.formData)h=Qu(i.formData),m=i.formData;else if(i.body instanceof FormData)h=Qu(i.body),m=i.body;else if(i.body instanceof URLSearchParams)h=i.body,m=ff(h);else if(i.body==null)h=new URLSearchParams,m=new FormData;else try{h=new URLSearchParams(i.body),m=ff(h)}catch{return o()}let g={formMethod:u,formAction:d,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(Ct(g.formMethod))return{path:n,submission:g};let x=rr(n);return e&&x.search&&Sd(x.search)&&h.append("index",""),x.search=`?${h}`,{path:Ln(x),submission:g}}function cf(e,n,i,o,l,u,d,h,m,g,x,y,b,w,N,E,C,M,I,z,R){var we;let U=z?Gt(z[1])?z[1].error:z[1].data:void 0,F=l.createURL(u.location),q=l.createURL(m),A;if(x&&u.errors){let ge=Object.keys(u.errors)[0];A=d.findIndex(ke=>ke.route.id===ge)}else if(z&&Gt(z[1])){let ge=z[0];A=d.findIndex(ke=>ke.route.id===ge)-1}let ae=z?z[1].statusCode:void 0,G=ae&&ae>=400,de={currentUrl:F,currentParams:((we=u.matches[0])==null?void 0:we.params)||{},nextUrl:q,nextParams:d[0].params,...h,actionResult:U,actionStatus:ae},ee=gs(d),re=d.map((ge,ke)=>{let{route:Y}=ge,$=null;if(A!=null&&ke>A)$=!1;else if(Y.lazy)$=!0;else if(!Cd(Y))$=!1;else if(x){let{shouldLoad:fe}=yx(Y,u.loaderData,u.errors);$=fe}else Lw(u.loaderData,u.matches[ke],ge)&&($=!0);if($!==null)return Ku(i,o,e,ee,ge,g,n,$);let H=!1;typeof R=="boolean"?H=R:G?H=!1:(y||F.pathname+F.search===q.pathname+q.search||F.search!==q.search||Iw(u.matches[ke],ge))&&(H=!0);let T={...de,defaultShouldRevalidate:H},W=ns(ge,T);return Ku(i,o,e,ee,ge,g,n,W,T,R)}),Z=[];return N.forEach((ge,ke)=>{if(x||!d.some(Te=>Te.route.id===ge.routeId)||w.has(ke))return;let Y=u.fetchers.get(ke),$=Y&&Y.state!=="idle"&&Y.data===void 0,H=Mr(C,ge.path,M);if(!H){if(I&&$)return;Z.push({key:ke,routeId:ge.routeId,path:ge.path,matches:null,match:null,request:null,controller:null});return}if(E.has(ke))return;let T=qo(H,ge.path),W=new AbortController,fe=Ha(l,ge.path,W.signal),Ae=null;if(b.has(ke))b.delete(ke),Ae=Ja(i,o,fe,H,T,g,n);else if($)y&&(Ae=Ja(i,o,fe,H,T,g,n));else{let Te;typeof R=="boolean"?Te=R:G?Te=!1:Te=y;let Se={...de,defaultShouldRevalidate:Te};ns(T,Se)&&(Ae=Ja(i,o,fe,H,T,g,n,Se))}Ae&&Z.push({key:ke,routeId:ge.routeId,path:ge.path,matches:Ae,match:T,request:fe,controller:W})}),{dsMatches:re,revalidatingFetchers:Z}}function Cd(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}function yx(e,n,i){if(e.lazy)return{shouldLoad:!0,renderFallback:!0};if(!Cd(e))return{shouldLoad:!1,renderFallback:!1};let o=n!=null&&e.id in n,l=i!=null&&i[e.id]!==void 0;if(!o&&l)return{shouldLoad:!1,renderFallback:!1};if(typeof e.loader=="function"&&e.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!o};let u=!o&&!l;return{shouldLoad:u,renderFallback:u}}function Lw(e,n,i){let o=!n||i.route.id!==n.route.id,l=!e.hasOwnProperty(i.route.id);return o||l}function Iw(e,n){let i=e.route.path;return e.pathname!==n.pathname||i!=null&&i.endsWith("*")&&e.params["*"]!==n.params["*"]}function ns(e,n){if(e.route.shouldRevalidate){let i=e.route.shouldRevalidate(n);if(typeof i=="boolean")return i}return n.defaultShouldRevalidate}function uf(e,n,i,o,l,u){let d;if(e){let g=o[e];Me(g,`No route found to patch children into: routeId = ${e}`),g.children||(g.children=[]),d=g.children}else d=i;let h=[],m=[];if(n.forEach(g=>{let x=d.find(y=>vx(g,y));x?m.push({existingRoute:x,newRoute:g}):h.push(g)}),h.length>0){let g=ls(h,l,[e||"_","patch",String((d==null?void 0:d.length)||"0")],o);d.push(...g)}if(u&&m.length>0)for(let g=0;g<m.length;g++){let{existingRoute:x,newRoute:y}=m[g],b=x,[w]=ls([y],l,[],{},!0);Object.assign(b,{element:w.element?w.element:b.element,errorElement:w.errorElement?w.errorElement:b.errorElement,hydrateFallbackElement:w.hydrateFallbackElement?w.hydrateFallbackElement:b.hydrateFallbackElement})}}function vx(e,n){var i;return"id"in e&&"id"in n&&e.id===n.id?!0:e.index===n.index&&e.path===n.path&&e.caseSensitive===n.caseSensitive?(!e.children||e.children.length===0)&&(!n.children||n.children.length===0)?!0:((i=e.children)==null?void 0:i.every((o,l)=>{var u;return(u=n.children)==null?void 0:u.some(d=>vx(o,d))}))??!1:!1}var df=new WeakMap,bx=({key:e,route:n,manifest:i,mapRouteProperties:o})=>{let l=i[n.id];if(Me(l,"No route found in manifest"),!l.lazy||typeof l.lazy!="object")return;let u=l.lazy[e];if(!u)return;let d=df.get(l);d||(d={},df.set(l,d));let h=d[e];if(h)return h;let m=(async()=>{let g=tw(e),y=l[e]!==void 0&&e!=="hasErrorBoundary";if(g)ct(!g,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),d[e]=Promise.resolve();else if(y)ct(!1,`Route "${l.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let b=await u();b!=null&&(Object.assign(l,{[e]:b}),Object.assign(l,o(l)))}typeof l.lazy=="object"&&(l.lazy[e]=void 0,Object.values(l.lazy).every(b=>b===void 0)&&(l.lazy=void 0))})();return d[e]=m,m},hf=new WeakMap;function zw(e,n,i,o,l){let u=i[e.id];if(Me(u,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let x=hf.get(u);if(x)return{lazyRoutePromise:x,lazyHandlerPromise:x};let y=(async()=>{Me(typeof e.lazy=="function","No lazy route function found");let b=await e.lazy(),w={};for(let N in b){let E=b[N];if(E===void 0)continue;let C=rw(N),I=u[N]!==void 0&&N!=="hasErrorBoundary";C?ct(!C,"Route property "+N+" is not a supported property to be returned from a lazy route function. This property will be ignored."):I?ct(!I,`Route "${u.id}" has a static property "${N}" defined but its lazy function is also returning a value for this property. The lazy route property "${N}" will be ignored.`):w[N]=E}Object.assign(u,w),Object.assign(u,{...o(u),lazy:void 0})})();return hf.set(u,y),y.catch(()=>{}),{lazyRoutePromise:y,lazyHandlerPromise:y}}let d=Object.keys(e.lazy),h=[],m;for(let x of d){if(l&&l.includes(x))continue;let y=bx({key:x,route:e,manifest:i,mapRouteProperties:o});y&&(h.push(y),x===n&&(m=y))}let g=h.length>0?Promise.all(h).then(()=>{}):void 0;return g==null||g.catch(()=>{}),m==null||m.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:m}}async function mf(e){let n=e.matches.filter(l=>l.shouldLoad),i={};return(await Promise.all(n.map(l=>l.resolve()))).forEach((l,u)=>{i[n[u].route.id]=l}),i}async function Ow(e){return e.matches.some(n=>n.route.middleware)?wx(e,()=>mf(e)):mf(e)}function wx(e,n){return Vw(e,n,o=>{if(e1(o))throw o;return o},Qw,i);function i(o,l,u){if(u)return Promise.resolve(Object.assign(u.value,{[l]:{type:"error",result:o}}));{let{matches:d}=e,h=Math.min(Math.max(d.findIndex(g=>g.route.id===l),0),Math.max(d.findIndex(g=>g.shouldCallHandler()),0)),m=Rr(d,d[h].route.id).route.id;return Promise.resolve({[m]:{type:"error",result:o}})}}}async function Vw(e,n,i,o,l){let{matches:u,request:d,params:h,context:m,unstable_pattern:g}=e,x=u.flatMap(b=>b.route.middleware?b.route.middleware.map(w=>[b.route.id,w]):[]);return await jx({request:d,params:h,context:m,unstable_pattern:g},x,n,i,o,l)}async function jx(e,n,i,o,l,u,d=0){let{request:h}=e;if(h.signal.aborted)throw h.signal.reason??new Error(`Request aborted: ${h.method} ${h.url}`);let m=n[d];if(!m)return await i();let[g,x]=m,y,b=async()=>{if(y)throw new Error("You may only call `next()` once per middleware");try{return y={value:await jx(e,n,i,o,l,u,d+1)},y.value}catch(w){return y={value:await u(w,g,y)},y.value}};try{let w=await x(e,b),N=w!=null?o(w):void 0;return l(N)?N:y?N??y.value:(y={value:await b()},y.value)}catch(w){return await u(w,g,y)}}function Nx(e,n,i,o,l){let u=bx({key:"middleware",route:o.route,manifest:n,mapRouteProperties:e}),d=zw(o.route,Ct(i.method)?"action":"loader",n,e,l);return{middleware:u,route:d.lazyRoutePromise,handler:d.lazyHandlerPromise}}function Ku(e,n,i,o,l,u,d,h,m=null,g){let x=!1,y=Nx(e,n,i,l,u);return{...l,_lazyPromises:y,shouldLoad:h,shouldRevalidateArgs:m,shouldCallHandler(b){return x=!0,m?typeof g=="boolean"?ns(l,{...m,defaultShouldRevalidate:g}):typeof b=="boolean"?ns(l,{...m,defaultShouldRevalidate:b}):ns(l,m):h},resolve(b){let{lazy:w,loader:N,middleware:E}=l.route,C=x||h||b&&!Ct(i.method)&&(w||N),M=E&&E.length>0&&!N&&!w;return C&&(Ct(i.method)||!M)?Ww({request:i,unstable_pattern:o,match:l,lazyHandlerPromise:y==null?void 0:y.handler,lazyRoutePromise:y==null?void 0:y.route,handlerOverride:b,scopedContext:d}):Promise.resolve({type:"data",result:void 0})}}}function Ja(e,n,i,o,l,u,d,h=null){return o.map(m=>m.route.id!==l.route.id?{...m,shouldLoad:!1,shouldRevalidateArgs:h,shouldCallHandler:()=>!1,_lazyPromises:Nx(e,n,i,m,u),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Ku(e,n,i,gs(o),m,u,d,!0,h))}async function $w(e,n,i,o,l,u){i.some(g=>{var x;return(x=g._lazyPromises)==null?void 0:x.middleware})&&await Promise.all(i.map(g=>{var x;return(x=g._lazyPromises)==null?void 0:x.middleware}));let d={request:n,unstable_pattern:gs(i),params:i[0].params,context:l,matches:i},m=await e({...d,fetcherKey:o,runClientMiddleware:g=>{let x=d;return wx(x,()=>g({...x,fetcherKey:o,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(i.flatMap(g=>{var x,y;return[(x=g._lazyPromises)==null?void 0:x.handler,(y=g._lazyPromises)==null?void 0:y.route]}))}catch{}return m}async function Ww({request:e,unstable_pattern:n,match:i,lazyHandlerPromise:o,lazyRoutePromise:l,handlerOverride:u,scopedContext:d}){let h,m,g=Ct(e.method),x=g?"action":"loader",y=b=>{let w,N=new Promise((M,I)=>w=I);m=()=>w(),e.signal.addEventListener("abort",m);let E=M=>typeof b!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${x}" [routeId: ${i.route.id}]`)):b({request:e,unstable_pattern:n,params:i.params,context:d},...M!==void 0?[M]:[]),C=(async()=>{try{return{type:"data",result:await(u?u(I=>E(I)):E())}}catch(M){return{type:"error",result:M}}})();return Promise.race([C,N])};try{let b=g?i.route.action:i.route.loader;if(o||l)if(b){let w,[N]=await Promise.all([y(b).catch(E=>{w=E}),o,l]);if(w!==void 0)throw w;h=N}else{await o;let w=g?i.route.action:i.route.loader;if(w)[h]=await Promise.all([y(w),l]);else if(x==="action"){let N=new URL(e.url),E=N.pathname+N.search;throw an(405,{method:e.method,pathname:E,routeId:i.route.id})}else return{type:"data",result:void 0}}else if(b)h=await y(b);else{let w=new URL(e.url),N=w.pathname+w.search;throw an(404,{pathname:N})}}catch(b){return{type:"error",result:b}}finally{m&&e.signal.removeEventListener("abort",m)}return h}async function Uw(e){let n=e.headers.get("Content-Type");return n&&/\bapplication\/json\b/.test(n)?e.body==null?null:e.json():e.text()}async function Hw(e){var o,l,u,d,h;let{result:n,type:i}=e;if(Ed(n)){let m;try{m=await Uw(n)}catch(g){return{type:"error",error:g}}return i==="error"?{type:"error",error:new fs(n.status,n.statusText,m),statusCode:n.status,headers:n.headers}:{type:"data",data:m,statusCode:n.status,headers:n.headers}}return i==="error"?vf(n)?n.data instanceof Error?{type:"error",error:n.data,statusCode:(o=n.init)==null?void 0:o.status,headers:(l=n.init)!=null&&l.headers?new Headers(n.init.headers):void 0}:{type:"error",error:Kw(n),statusCode:cs(n)?n.status:void 0,headers:(u=n.init)!=null&&u.headers?new Headers(n.init.headers):void 0}:{type:"error",error:n,statusCode:cs(n)?n.status:void 0}:vf(n)?{type:"data",data:n.data,statusCode:(d=n.init)==null?void 0:d.status,headers:(h=n.init)!=null&&h.headers?new Headers(n.init.headers):void 0}:{type:"data",data:n}}function Gw(e,n,i,o,l){let u=e.headers.get("Location");if(Me(u,"Redirects returned/thrown from loaders/actions must have a Location header"),!kd(u)){let d=o.slice(0,o.findIndex(h=>h.route.id===i)+1);u=Yu(new URL(n.url),d,l,u),e.headers.set("Location",u)}return e}function pf(e,n,i,o){let l=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(kd(e)){let u=e,d=u.startsWith("//")?new URL(n.protocol+u):new URL(u);if(l.includes(d.protocol))throw new Error("Invalid redirect location");let h=cn(d.pathname,i)!=null;if(d.origin===n.origin&&h)return d.pathname+d.search+d.hash}try{let u=o.createURL(e);if(l.includes(u.protocol))throw new Error("Invalid redirect location")}catch{}return e}function Ha(e,n,i,o){let l=e.createURL(kx(n)).toString(),u={signal:i};if(o&&Ct(o.formMethod)){let{formMethod:d,formEncType:h}=o;u.method=d.toUpperCase(),h==="application/json"?(u.headers=new Headers({"Content-Type":h}),u.body=JSON.stringify(o.json)):h==="text/plain"?u.body=o.text:h==="application/x-www-form-urlencoded"&&o.formData?u.body=Qu(o.formData):u.body=o.formData}return new Request(l,u)}function Qu(e){let n=new URLSearchParams;for(let[i,o]of e.entries())n.append(i,typeof o=="string"?o:o.name);return n}function ff(e){let n=new FormData;for(let[i,o]of e.entries())n.append(i,o);return n}function qw(e,n,i,o=!1,l=!1){let u={},d=null,h,m=!1,g={},x=i&&Gt(i[1])?i[1].error:void 0;return e.forEach(y=>{if(!(y.route.id in n))return;let b=y.route.id,w=n[b];if(Me(!aa(w),"Cannot handle redirect results in processLoaderData"),Gt(w)){let N=w.error;if(x!==void 0&&(N=x,x=void 0),d=d||{},l)d[b]=N;else{let E=Rr(e,b);d[E.route.id]==null&&(d[E.route.id]=N)}o||(u[b]=xx),m||(m=!0,h=cs(w.error)?w.error.status:500),w.headers&&(g[b]=w.headers)}else u[b]=w.data,w.statusCode&&w.statusCode!==200&&!m&&(h=w.statusCode),w.headers&&(g[b]=w.headers)}),x!==void 0&&i&&(d={[i[0]]:x},i[2]&&(u[i[2]]=void 0)),{loaderData:u,errors:d,statusCode:h||200,loaderHeaders:g}}function gf(e,n,i,o,l,u){let{loaderData:d,errors:h}=qw(n,i,o);return l.filter(m=>!m.matches||m.matches.some(g=>g.shouldLoad)).forEach(m=>{let{key:g,match:x,controller:y}=m;if(y&&y.signal.aborted)return;let b=u[g];if(Me(b,"Did not find corresponding fetcher result"),Gt(b)){let w=Rr(e.matches,x==null?void 0:x.route.id);h&&h[w.route.id]||(h={...h,[w.route.id]:b.error}),e.fetchers.delete(g)}else if(aa(b))Me(!1,"Unhandled fetcher revalidation redirect");else{let w=er(b.data);e.fetchers.set(g,w)}}),{loaderData:d,errors:h}}function xf(e,n,i,o){let l=Object.entries(n).filter(([,u])=>u!==xx).reduce((u,[d,h])=>(u[d]=h,u),{});for(let u of i){let d=u.route.id;if(!n.hasOwnProperty(d)&&e.hasOwnProperty(d)&&u.route.loader&&(l[d]=e[d]),o&&o.hasOwnProperty(d))break}return l}function yf(e){return e?Gt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Rr(e,n){return(n?e.slice(0,e.findIndex(o=>o.route.id===n)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function Lo(e){let n=e.length===1?e[0]:e.find(i=>i.index||!i.path||i.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function an(e,{pathname:n,routeId:i,method:o,type:l,message:u}={}){let d="Unknown Server Error",h="Unknown @remix-run/router error";return e===400?(d="Bad Request",o&&n&&i?h=`You made a ${o} request to "${n}" but did not provide a \`loader\` for route "${i}", so there is no way to handle the request.`:l==="invalid-body"&&(h="Unable to encode submission body")):e===403?(d="Forbidden",h=`Route "${i}" does not match URL "${n}"`):e===404?(d="Not Found",h=`No route matches URL "${n}"`):e===405&&(d="Method Not Allowed",o&&n&&i?h=`You made a ${o.toUpperCase()} request to "${n}" but did not provide an \`action\` for route "${i}", so there is no way to handle the request.`:o&&(h=`Invalid request method "${o.toUpperCase()}"`)),new fs(e||500,d,new Error(h),!0)}function Io(e){let n=Object.entries(e);for(let i=n.length-1;i>=0;i--){let[o,l]=n[i];if(aa(l))return{key:o,result:l}}}function kx(e){let n=typeof e=="string"?rr(e):e;return Ln({...n,hash:""})}function Yw(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function Kw(e){var n,i;return new fs(((n=e.init)==null?void 0:n.status)??500,((i=e.init)==null?void 0:i.statusText)??"Internal Server Error",e.data)}function Qw(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([n,i])=>typeof n=="string"&&Xw(i))}function Xw(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function Zw(e){return Ed(e.result)&&fx.has(e.result.status)}function Gt(e){return e.type==="error"}function aa(e){return(e&&e.type)==="redirect"}function vf(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Ed(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Jw(e){return fx.has(e)}function e1(e){return Ed(e)&&Jw(e.status)&&e.headers.has("Location")}function t1(e){return _w.has(e.toUpperCase())}function Ct(e){return Tw.has(e.toUpperCase())}function Sd(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function qo(e,n){let i=typeof n=="string"?rr(n).search:n.search;if(e[e.length-1].route.index&&Sd(i||""))return e[e.length-1];let o=ux(e);return o[o.length-1]}function bf(e){let{formMethod:n,formAction:i,formEncType:o,text:l,formData:u,json:d}=e;if(!(!n||!i||!o)){if(l!=null)return{formMethod:n,formAction:i,formEncType:o,formData:void 0,json:void 0,text:l};if(u!=null)return{formMethod:n,formAction:i,formEncType:o,formData:u,json:void 0,text:void 0};if(d!==void 0)return{formMethod:n,formAction:i,formEncType:o,formData:void 0,json:d,text:void 0}}}function wu(e,n){return n?{state:"loading",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function n1(e,n){return{state:"submitting",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}}function Qi(e,n){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function r1(e,n){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n?n.data:void 0}}function er(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function a1(e,n){try{let i=e.sessionStorage.getItem(gx);if(i){let o=JSON.parse(i);for(let[l,u]of Object.entries(o||{}))u&&Array.isArray(u)&&n.set(l,new Set(u||[]))}}catch{}}function i1(e,n){if(n.size>0){let i={};for(let[o,l]of n)i[o]=[...l];try{e.sessionStorage.setItem(gx,JSON.stringify(i))}catch(o){ct(!1,`Failed to save applied view transitions in sessionStorage (${o}).`)}}}function wf(){let e,n,i=new Promise((o,l)=>{e=async u=>{o(u);try{await i}catch{}},n=async u=>{l(u);try{await i}catch{}}});return{promise:i,resolve:e,reject:n}}var ua=j.createContext(null);ua.displayName="DataRouter";var xs=j.createContext(null);xs.displayName="DataRouterState";var Ax=j.createContext(!1);function s1(){return j.useContext(Ax)}var Td=j.createContext({isTransitioning:!1});Td.displayName="ViewTransition";var Cx=j.createContext(new Map);Cx.displayName="Fetchers";var o1=j.createContext(null);o1.displayName="Await";var un=j.createContext(null);un.displayName="Navigation";var vl=j.createContext(null);vl.displayName="Location";var En=j.createContext({outlet:null,matches:[],isDataRoute:!1});En.displayName="Route";var Pd=j.createContext(null);Pd.displayName="RouteError";var Ex="REACT_ROUTER_ERROR",l1="REDIRECT",c1="ROUTE_ERROR_RESPONSE";function u1(e){if(e.startsWith(`${Ex}:${l1}:{`))try{let n=JSON.parse(e.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function d1(e){if(e.startsWith(`${Ex}:${c1}:{`))try{let n=JSON.parse(e.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new fs(n.status,n.statusText,n.data)}catch{}}function h1(e,{relative:n}={}){Me(ys(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=j.useContext(un),{hash:l,pathname:u,search:d}=vs(e,{relative:n}),h=u;return i!=="/"&&(h=u==="/"?i:An([i,u])),o.createHref({pathname:h,search:d,hash:l})}function ys(){return j.useContext(vl)!=null}function dn(){return Me(ys(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(vl).location}var Sx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Tx(e){j.useContext(un).static||j.useLayoutEffect(e)}function Vt(){let{isDataRoute:e}=j.useContext(En);return e?S1():m1()}function m1(){Me(ys(),"useNavigate() may be used only in the context of a <Router> component.");let e=j.useContext(ua),{basename:n,navigator:i}=j.useContext(un),{matches:o}=j.useContext(En),{pathname:l}=dn(),u=JSON.stringify(Ad(o)),d=j.useRef(!1);return Tx(()=>{d.current=!0}),j.useCallback((m,g={})=>{if(ct(d.current,Sx),!d.current)return;if(typeof m=="number"){i.go(m);return}let x=yl(m,JSON.parse(u),l,g.relative==="path");e==null&&n!=="/"&&(x.pathname=x.pathname==="/"?n:An([n,x.pathname])),(g.replace?i.replace:i.push)(x,g.state,g)},[n,i,u,l,e])}var p1=j.createContext(null);function f1(e){let n=j.useContext(En).outlet;return j.useMemo(()=>n&&j.createElement(p1.Provider,{value:e},n),[n,e])}function g1(){let{matches:e}=j.useContext(En),n=e[e.length-1];return n?n.params:{}}function vs(e,{relative:n}={}){let{matches:i}=j.useContext(En),{pathname:o}=dn(),l=JSON.stringify(Ad(i));return j.useMemo(()=>yl(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function x1(e,n,i){Me(ys(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=j.useContext(un),{matches:l}=j.useContext(En),u=l[l.length-1],d=u?u.params:{},h=u?u.pathname:"/",m=u?u.pathnameBase:"/",g=u&&u.route;{let C=g&&g.path||"";_x(h,!g||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let x=dn(),y;y=x;let b=y.pathname||"/",w=b;if(m!=="/"){let C=m.replace(/^\//,"").split("/");w="/"+b.replace(/^\//,"").split("/").slice(C.length).join("/")}let N=Mr(e,{pathname:w});return ct(g||N!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),ct(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),j1(N&&N.map(C=>Object.assign({},C,{params:Object.assign({},d,C.params),pathname:An([m,o.encodeLocation?o.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?m:An([m,o.encodeLocation?o.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),l,i)}function y1(){let e=E1(),n=cs(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:u},"ErrorBoundary")," or"," ",j.createElement("code",{style:u},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},n),i?j.createElement("pre",{style:l},i):null,d)}var v1=j.createElement(y1,null),Px=class extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){this.props.onError?this.props.onError(e,n):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const i=d1(e.digest);i&&(e=i)}let n=e!==void 0?j.createElement(En.Provider,{value:this.props.routeContext},j.createElement(Pd.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?j.createElement(b1,{error:e},n):n}};Px.contextType=Ax;var ju=new WeakMap;function b1({children:e,error:n}){let{basename:i}=j.useContext(un);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let o=u1(n.digest);if(o){let l=ju.get(n);if(l)throw l;let u=hx(o.location,i);if(dx&&!ju.get(n))if(u.isExternal||o.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:o.replace}));throw ju.set(n,d),d}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return e}function w1({routeContext:e,match:n,children:i}){let o=j.useContext(ua);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(En.Provider,{value:e},i)}function j1(e,n=[],i){let o=i==null?void 0:i.state;if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(n.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let l=e,u=o==null?void 0:o.errors;if(u!=null){let x=l.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);Me(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,x+1))}let d=!1,h=-1;if(i&&o){d=o.renderFallback;for(let x=0;x<l.length;x++){let y=l[x];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=x),y.route.id){let{loaderData:b,errors:w}=o,N=y.route.loader&&!b.hasOwnProperty(y.route.id)&&(!w||w[y.route.id]===void 0);if(y.route.lazy||N){i.isStatic&&(d=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let m=i==null?void 0:i.onError,g=o&&m?(x,y)=>{var b,w;m(x,{location:o.location,params:((w=(b=o.matches)==null?void 0:b[0])==null?void 0:w.params)??{},unstable_pattern:gs(o.matches),errorInfo:y})}:void 0;return l.reduceRight((x,y,b)=>{let w,N=!1,E=null,C=null;o&&(w=u&&y.route.id?u[y.route.id]:void 0,E=y.route.errorElement||v1,d&&(h<0&&b===0?(_x("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,C=null):h===b&&(N=!0,C=y.route.hydrateFallbackElement||null)));let M=n.concat(l.slice(0,b+1)),I=()=>{let z;return w?z=E:N?z=C:y.route.Component?z=j.createElement(y.route.Component,null):y.route.element?z=y.route.element:z=x,j.createElement(w1,{match:y,routeContext:{outlet:x,matches:M,isDataRoute:o!=null},children:z})};return o&&(y.route.ErrorBoundary||y.route.errorElement||b===0)?j.createElement(Px,{location:o.location,revalidation:o.revalidation,component:E,error:w,children:I(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:g}):I()},null)}function _d(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function N1(e){let n=j.useContext(ua);return Me(n,_d(e)),n}function k1(e){let n=j.useContext(xs);return Me(n,_d(e)),n}function A1(e){let n=j.useContext(En);return Me(n,_d(e)),n}function Dd(e){let n=A1(e),i=n.matches[n.matches.length-1];return Me(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function C1(){return Dd("useRouteId")}function E1(){var o;let e=j.useContext(Pd),n=k1("useRouteError"),i=Dd("useRouteError");return e!==void 0?e:(o=n.errors)==null?void 0:o[i]}function S1(){let{router:e}=N1("useNavigate"),n=Dd("useNavigate"),i=j.useRef(!1);return Tx(()=>{i.current=!0}),j.useCallback(async(l,u={})=>{ct(i.current,Sx),i.current&&(typeof l=="number"?await e.navigate(l):await e.navigate(l,{fromRouteId:n,...u}))},[e,n])}var jf={};function _x(e,n,i){!n&&!jf[e]&&(jf[e]=!0,ct(!1,i))}var Nf={};function kf(e,n){!e&&!Nf[n]&&(Nf[n]=!0,console.warn(n))}var T1="useOptimistic",Af=bb[T1],P1=()=>{};function _1(e){return Af?Af(e):[e,P1]}function D1(e){let n={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&ct(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(n,{element:j.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&ct(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(n,{hydrateFallbackElement:j.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&ct(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(n,{errorElement:j.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),n}var F1=["HydrateFallback","hydrateFallbackElement"],M1=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",e(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function R1({router:e,flushSync:n,onError:i,unstable_useTransitions:o}){o=s1()||o;let[u,d]=j.useState(e.state),[h,m]=_1(u),[g,x]=j.useState(),[y,b]=j.useState({isTransitioning:!1}),[w,N]=j.useState(),[E,C]=j.useState(),[M,I]=j.useState(),z=j.useRef(new Map),R=j.useCallback((A,{deletedFetchers:ae,newErrors:G,flushSync:de,viewTransitionOpts:ee})=>{G&&i&&Object.values(G).forEach(Z=>{var we;return i(Z,{location:A.location,params:((we=A.matches[0])==null?void 0:we.params)??{},unstable_pattern:gs(A.matches)})}),A.fetchers.forEach((Z,we)=>{Z.data!==void 0&&z.current.set(we,Z.data)}),ae.forEach(Z=>z.current.delete(Z)),kf(de===!1||n!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let re=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(kf(ee==null||re,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ee||!re){n&&de?n(()=>d(A)):o===!1?d(A):j.startTransition(()=>{o===!0&&m(Z=>Cf(Z,A)),d(A)});return}if(n&&de){n(()=>{E&&(w==null||w.resolve(),E.skipTransition()),b({isTransitioning:!0,flushSync:!0,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})});let Z=e.window.document.startViewTransition(()=>{n(()=>d(A))});Z.finished.finally(()=>{n(()=>{N(void 0),C(void 0),x(void 0),b({isTransitioning:!1})})}),n(()=>C(Z));return}E?(w==null||w.resolve(),E.skipTransition(),I({state:A,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})):(x(A),b({isTransitioning:!0,flushSync:!1,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation}))},[e.window,n,E,w,o,m,i]);j.useLayoutEffect(()=>e.subscribe(R),[e,R]),j.useEffect(()=>{y.isTransitioning&&!y.flushSync&&N(new M1)},[y]),j.useEffect(()=>{if(w&&g&&e.window){let A=g,ae=w.promise,G=e.window.document.startViewTransition(async()=>{o===!1?d(A):j.startTransition(()=>{o===!0&&m(de=>Cf(de,A)),d(A)}),await ae});G.finished.finally(()=>{N(void 0),C(void 0),x(void 0),b({isTransitioning:!1})}),C(G)}},[g,w,e.window,o,m]),j.useEffect(()=>{w&&g&&h.location.key===g.location.key&&w.resolve()},[w,E,h.location,g]),j.useEffect(()=>{!y.isTransitioning&&M&&(x(M.state),b({isTransitioning:!0,flushSync:!1,currentLocation:M.currentLocation,nextLocation:M.nextLocation}),I(void 0))},[y.isTransitioning,M]);let U=j.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:A=>e.navigate(A),push:(A,ae,G)=>e.navigate(A,{state:ae,preventScrollReset:G==null?void 0:G.preventScrollReset}),replace:(A,ae,G)=>e.navigate(A,{replace:!0,state:ae,preventScrollReset:G==null?void 0:G.preventScrollReset})}),[e]),F=e.basename||"/",q=j.useMemo(()=>({router:e,navigator:U,static:!1,basename:F,onError:i}),[e,U,F,i]);return j.createElement(j.Fragment,null,j.createElement(ua.Provider,{value:q},j.createElement(xs.Provider,{value:h},j.createElement(Cx.Provider,{value:z.current},j.createElement(Td.Provider,{value:y},j.createElement(z1,{basename:F,location:h.location,navigationType:h.historyAction,navigator:U,unstable_useTransitions:o},j.createElement(B1,{routes:e.routes,future:e.future,state:h,isStatic:!1,onError:i})))))),null)}function Cf(e,n){return{...e,navigation:n.navigation.state!=="idle"?n.navigation:e.navigation,revalidation:n.revalidation!=="idle"?n.revalidation:e.revalidation,actionData:n.navigation.state!=="submitting"?n.actionData:e.actionData,fetchers:n.fetchers}}var B1=j.memo(L1);function L1({routes:e,future:n,state:i,isStatic:o,onError:l}){return x1(e,void 0,{state:i,isStatic:o,onError:l})}function I1(e){return f1(e.context)}function z1({basename:e="/",children:n=null,location:i,navigationType:o="POP",navigator:l,static:u=!1,unstable_useTransitions:d}){Me(!ys(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=e.replace(/^\/*/,"/"),m=j.useMemo(()=>({basename:h,navigator:l,static:u,unstable_useTransitions:d,future:{}}),[h,l,u,d]);typeof i=="string"&&(i=rr(i));let{pathname:g="/",search:x="",hash:y="",state:b=null,key:w="default",unstable_mask:N}=i,E=j.useMemo(()=>{let C=cn(g,h);return C==null?null:{location:{pathname:C,search:x,hash:y,state:b,key:w,unstable_mask:N},navigationType:o}},[h,g,x,y,b,w,o,N]);return ct(E!=null,`<Router basename="${h}"> is not able to match the URL "${g}${x}${y}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:j.createElement(un.Provider,{value:m},j.createElement(vl.Provider,{children:n,value:E}))}var Yo="get",Ko="application/x-www-form-urlencoded";function bl(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function O1(e){return bl(e)&&e.tagName.toLowerCase()==="button"}function V1(e){return bl(e)&&e.tagName.toLowerCase()==="form"}function $1(e){return bl(e)&&e.tagName.toLowerCase()==="input"}function W1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function U1(e,n){return e.button===0&&(!n||n==="_self")&&!W1(e)}var zo=null;function H1(){if(zo===null)try{new FormData(document.createElement("form"),0),zo=!1}catch{zo=!0}return zo}var G1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nu(e){return e!=null&&!G1.has(e)?(ct(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ko}"`),null):e}function q1(e,n){let i,o,l,u,d;if(V1(e)){let h=e.getAttribute("action");o=h?cn(h,n):null,i=e.getAttribute("method")||Yo,l=Nu(e.getAttribute("enctype"))||Ko,u=new FormData(e)}else if(O1(e)||$1(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||h.getAttribute("action");if(o=m?cn(m,n):null,i=e.getAttribute("formmethod")||h.getAttribute("method")||Yo,l=Nu(e.getAttribute("formenctype"))||Nu(h.getAttribute("enctype"))||Ko,u=new FormData(h,e),!H1()){let{name:g,type:x,value:y}=e;if(x==="image"){let b=g?`${g}.`:"";u.append(`${b}x`,"0"),u.append(`${b}y`,"0")}else g&&u.append(g,y)}}else{if(bl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Yo,o=null,l=Ko,d=e}return u&&l==="text/plain"&&(d=u,u=void 0),{action:o,method:i.toLowerCase(),encType:l,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fd(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Y1(e,n,i,o){let l=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${o}`:l.pathname=`${l.pathname}.${o}`:l.pathname==="/"?l.pathname=`_root.${o}`:n&&cn(l.pathname,n)==="/"?l.pathname=`${n.replace(/\/$/,"")}/_root.${o}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${o}`,l}async function K1(e,n){if(e.id in n)return n[e.id];try{let i=await import(e.module);return n[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Q1(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function X1(e,n,i){let o=await Promise.all(e.map(async l=>{let u=n.routes[l.route.id];if(u){let d=await K1(u,i);return d.links?d.links():[]}return[]}));return t2(o.flat(1).filter(Q1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Ef(e,n,i,o,l,u){let d=(m,g)=>i[g]?m.route.id!==i[g].route.id:!0,h=(m,g)=>{var x;return i[g].pathname!==m.pathname||((x=i[g].route.path)==null?void 0:x.endsWith("*"))&&i[g].params["*"]!==m.params["*"]};return u==="assets"?n.filter((m,g)=>d(m,g)||h(m,g)):u==="data"?n.filter((m,g)=>{var y;let x=o.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(d(m,g)||h(m,g))return!0;if(m.route.shouldRevalidate){let b=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function Z1(e,n,{includeHydrateFallback:i}={}){return J1(e.map(o=>{let l=n.routes[o.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function J1(e){return[...new Set(e)]}function e2(e){let n={},i=Object.keys(e).sort();for(let o of i)n[o]=e[o];return n}function t2(e,n){let i=new Set;return new Set(n),e.reduce((o,l)=>{let u=JSON.stringify(e2(l));return i.has(u)||(i.add(u),o.push({key:u,link:l})),o},[])}function Dx(){let e=j.useContext(ua);return Fd(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function n2(){let e=j.useContext(xs);return Fd(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Md=j.createContext(void 0);Md.displayName="FrameworkContext";function Fx(){let e=j.useContext(Md);return Fd(e,"You must render this element inside a <HydratedRouter> element"),e}function r2(e,n){let i=j.useContext(Md),[o,l]=j.useState(!1),[u,d]=j.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:g,onMouseLeave:x,onTouchStart:y}=n,b=j.useRef(null);j.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let E=M=>{M.forEach(I=>{d(I.isIntersecting)})},C=new IntersectionObserver(E,{threshold:.5});return b.current&&C.observe(b.current),()=>{C.disconnect()}}},[e]),j.useEffect(()=>{if(o){let E=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(E)}}},[o]);let w=()=>{l(!0)},N=()=>{l(!1),d(!1)};return i?e!=="intent"?[u,b,{}]:[u,b,{onFocus:Xi(h,w),onBlur:Xi(m,N),onMouseEnter:Xi(g,w),onMouseLeave:Xi(x,N),onTouchStart:Xi(y,w)}]:[!1,b,{}]}function Xi(e,n){return i=>{e&&e(i),i.defaultPrevented||n(i)}}function a2({page:e,...n}){let{router:i}=Dx(),o=j.useMemo(()=>Mr(i.routes,e,i.basename),[i.routes,e,i.basename]);return o?j.createElement(s2,{page:e,matches:o,...n}):null}function i2(e){let{manifest:n,routeModules:i}=Fx(),[o,l]=j.useState([]);return j.useEffect(()=>{let u=!1;return X1(e,n,i).then(d=>{u||l(d)}),()=>{u=!0}},[e,n,i]),o}function s2({page:e,matches:n,...i}){let o=dn(),{future:l,manifest:u,routeModules:d}=Fx(),{basename:h}=Dx(),{loaderData:m,matches:g}=n2(),x=j.useMemo(()=>Ef(e,n,g,u,o,"data"),[e,n,g,u,o]),y=j.useMemo(()=>Ef(e,n,g,u,o,"assets"),[e,n,g,u,o]),b=j.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let E=new Set,C=!1;if(n.forEach(I=>{var R;let z=u.routes[I.route.id];!z||!z.hasLoader||(!x.some(U=>U.route.id===I.route.id)&&I.route.id in m&&((R=d[I.route.id])!=null&&R.shouldRevalidate)||z.hasClientLoader?C=!0:E.add(I.route.id))}),E.size===0)return[];let M=Y1(e,h,l.unstable_trailingSlashAwareDataRequests,"data");return C&&E.size>0&&M.searchParams.set("_routes",n.filter(I=>E.has(I.route.id)).map(I=>I.route.id).join(",")),[M.pathname+M.search]},[h,l.unstable_trailingSlashAwareDataRequests,m,o,u,x,n,e,d]),w=j.useMemo(()=>Z1(y,u),[y,u]),N=i2(y);return j.createElement(j.Fragment,null,b.map(E=>j.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),w.map(E=>j.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),N.map(({key:E,link:C})=>j.createElement("link",{key:E,nonce:i.nonce,...C,crossOrigin:C.crossOrigin??i.crossOrigin})))}function o2(...e){return n=>{e.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})}}var l2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{l2&&(window.__reactRouterVersion="7.13.1")}catch{}function c2(e,n){return Rw({basename:n==null?void 0:n.basename,getContext:n==null?void 0:n.getContext,future:n==null?void 0:n.future,history:Xb({window:n==null?void 0:n.window}),hydrationData:u2(),routes:e,mapRouteProperties:D1,hydrationRouteProperties:F1,dataStrategy:n==null?void 0:n.dataStrategy,patchRoutesOnNavigation:n==null?void 0:n.patchRoutesOnNavigation,window:n==null?void 0:n.window,unstable_instrumentations:n==null?void 0:n.unstable_instrumentations}).initialize()}function u2(){let e=window==null?void 0:window.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:d2(e.errors)}),e}function d2(e){if(!e)return null;let n=Object.entries(e),i={};for(let[o,l]of n)if(l&&l.__type==="RouteErrorResponse")i[o]=new fs(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let u=window[l.__subType];if(typeof u=="function")try{let d=new u(l.message);d.stack="",i[o]=d}catch{}}if(i[o]==null){let u=new Error(l.message);u.stack="",i[o]=u}}else i[o]=l;return i}var Mx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=j.forwardRef(function({onClick:n,discover:i="render",prefetch:o="none",relative:l,reloadDocument:u,replace:d,unstable_mask:h,state:m,target:g,to:x,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:w,...N},E){let{basename:C,navigator:M,unstable_useTransitions:I}=j.useContext(un),z=typeof x=="string"&&Mx.test(x),R=hx(x,C);x=R.to;let U=h1(x,{relative:l}),F=dn(),q=null;if(h){let we=yl(h,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);C!=="/"&&(we.pathname=we.pathname==="/"?C:An([C,we.pathname])),q=M.createHref(we)}let[A,ae,G]=r2(o,N),de=f2(x,{replace:d,unstable_mask:h,state:m,target:g,preventScrollReset:y,relative:l,viewTransition:b,unstable_defaultShouldRevalidate:w,unstable_useTransitions:I});function ee(we){n&&n(we),we.defaultPrevented||de(we)}let re=!(R.isExternal||u),Z=j.createElement("a",{...N,...G,href:(re?q:void 0)||R.absoluteURL||U,onClick:re?ee:n,ref:o2(E,ae),target:g,"data-discover":!z&&i==="render"?"true":void 0});return A&&!z?j.createElement(j.Fragment,null,Z,j.createElement(a2,{page:U})):Z});Ue.displayName="Link";var h2=j.forwardRef(function({"aria-current":n="page",caseSensitive:i=!1,className:o="",end:l=!1,style:u,to:d,viewTransition:h,children:m,...g},x){let y=vs(d,{relative:g.relative}),b=dn(),w=j.useContext(xs),{navigator:N,basename:E}=j.useContext(un),C=w!=null&&b2(y)&&h===!0,M=N.encodeLocation?N.encodeLocation(y).pathname:y.pathname,I=b.pathname,z=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(I=I.toLowerCase(),z=z?z.toLowerCase():null,M=M.toLowerCase()),z&&E&&(z=cn(z,E)||z);const R=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let U=I===M||!l&&I.startsWith(M)&&I.charAt(R)==="/",F=z!=null&&(z===M||!l&&z.startsWith(M)&&z.charAt(M.length)==="/"),q={isActive:U,isPending:F,isTransitioning:C},A=U?n:void 0,ae;typeof o=="function"?ae=o(q):ae=[o,U?"active":null,F?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let G=typeof u=="function"?u(q):u;return j.createElement(Ue,{...g,"aria-current":A,className:ae,ref:x,style:G,to:d,viewTransition:h},typeof m=="function"?m(q):m)});h2.displayName="NavLink";var m2=j.forwardRef(({discover:e="render",fetcherKey:n,navigate:i,reloadDocument:o,replace:l,state:u,method:d=Yo,action:h,onSubmit:m,relative:g,preventScrollReset:x,viewTransition:y,unstable_defaultShouldRevalidate:b,...w},N)=>{let{unstable_useTransitions:E}=j.useContext(un),C=y2(),M=v2(h,{relative:g}),I=d.toLowerCase()==="get"?"get":"post",z=typeof h=="string"&&Mx.test(h),R=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let F=U.nativeEvent.submitter,q=(F==null?void 0:F.getAttribute("formmethod"))||d,A=()=>C(F||U.currentTarget,{fetcherKey:n,method:q,navigate:i,replace:l,state:u,relative:g,preventScrollReset:x,viewTransition:y,unstable_defaultShouldRevalidate:b});E&&i!==!1?j.startTransition(()=>A()):A()};return j.createElement("form",{ref:N,method:I,action:M,onSubmit:o?m:R,...w,"data-discover":!z&&e==="render"?"true":void 0})});m2.displayName="Form";function p2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rx(e){let n=j.useContext(ua);return Me(n,p2(e)),n}function f2(e,{target:n,replace:i,unstable_mask:o,state:l,preventScrollReset:u,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:m,unstable_useTransitions:g}={}){let x=Vt(),y=dn(),b=vs(e,{relative:d});return j.useCallback(w=>{if(U1(w,n)){w.preventDefault();let N=i!==void 0?i:Ln(y)===Ln(b),E=()=>x(e,{replace:N,unstable_mask:o,state:l,preventScrollReset:u,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:m});g?j.startTransition(()=>E()):E()}},[y,x,b,i,o,l,n,e,u,d,h,m,g])}var g2=0,x2=()=>`__${String(++g2)}__`;function y2(){let{router:e}=Rx("useSubmit"),{basename:n}=j.useContext(un),i=C1(),o=e.fetch,l=e.navigate;return j.useCallback(async(u,d={})=>{let{action:h,method:m,encType:g,formData:x,body:y}=q1(u,n);if(d.navigate===!1){let b=d.fetcherKey||x2();await o(b,i,d.action||h,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:x,body:y,formMethod:d.method||m,formEncType:d.encType||g,flushSync:d.flushSync})}else await l(d.action||h,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:x,body:y,formMethod:d.method||m,formEncType:d.encType||g,replace:d.replace,state:d.state,fromRouteId:i,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,l,n,i])}function v2(e,{relative:n}={}){let{basename:i}=j.useContext(un),o=j.useContext(En);Me(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),u={...vs(e||".",{relative:n})},d=dn();if(e==null){u.search=d.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(x=>x==="")){h.delete("index"),m.filter(y=>y).forEach(y=>h.append("index",y));let x=h.toString();u.search=x?`?${x}`:""}}return(!e||e===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:An([i,u.pathname])),Ln(u)}function b2(e,{relative:n}={}){let i=j.useContext(Td);Me(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Rx("useViewTransitionState"),l=vs(e,{relative:n});if(!i.isTransitioning)return!1;let u=cn(i.currentLocation.pathname,o)||i.currentLocation.pathname,d=cn(i.nextLocation.pathname,o)||i.nextLocation.pathname;return il(l.pathname,d)!=null||il(l.pathname,u)!=null}var w2=Xg();function j2(e){return j.createElement(R1,{flushSync:w2.flushSync,...e})}function N2(){const e=dn(),[n,i]=j.useState(!1);j.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[n]);const o=[{path:"/products",label:"Designs"},{path:"/about",label:"About"},{path:"/blog",label:"Blog"},{path:"/faq",label:"FAQ"},{path:"/privacy-policy",label:"Privacy Policy"}],l=u=>u==="/"?e.pathname==="/":e.pathname.startsWith(u);return r.jsxs("nav",{className:"absolute top-0 left-0 w-full z-[100]",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"}),r.jsx("div",{className:"relative px-5 sm:px-8 lg:px-14 py-6 lg:py-8",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx(Ue,{to:"/",className:"font-serif tracking-tight",style:{color:"#ffffff",fontSize:"clamp(1.5rem, 6vw, 3.2rem)",textShadow:"0 2px 12px rgba(0,0,0,0.5)"},children:"Backyard Nest"}),r.jsxs("div",{className:"hidden lg:flex items-center gap-10",children:[r.jsx("div",{className:"flex items-center gap-10",children:o.map(u=>r.jsx(Ue,{to:u.path,style:{color:"#ffffff",opacity:l(u.path)?1:.8,textShadow:"0 2px 10px rgba(0,0,0,0.6)"},className:`
          uppercase
          text-[11px]
          tracking-[0.25em]
          transition-all
          duration-300
          hover:opacity-100
        `,children:u.label},u.path))}),r.jsxs("div",{className:"flex items-center gap-5 ml-4",children:[r.jsxs("a",{href:"tel:61466333438","aria-label":"Call Backyard Nest",className:`
    group
    flex items-center gap-2
    rounded-full
    border border-[#C7A77A]
    bg-[#C7A77A]/15
    px-4 py-2.5
    !text-[#C7A77A]
    text-[11px] font-semibold
    tracking-[0.12em]
    shadow-[0_4px_15px_rgba(199,167,122,0.18)]
    backdrop-blur-sm
    transition-all duration-300
    hover:bg-[#2E2A26]/80
    hover:border-[#C7A77A]
    hover:scale-105
    hover:shadow-[0_6px_20px_rgba(199,167,122,0.3)]
  `,children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:`
      w-4 h-4
      !text-[#C7A77A]
      transition-transform duration-300
      group-hover:scale-110
    `,children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.258-7.258 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.36-.27.52-.72.417-1.173L6.748 3.602A1.125 1.125 0 0 0 5.657 2.75H4.5A2.25 2.25 0 0 0 2.25 5v1.75Z"})}),r.jsx("span",{className:"!text-[#C7A77A]",children:"0466 333 438"})]}),r.jsx(Ue,{to:"/contact",className:`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[#C7A77A]
        px-6
        py-3
        text-[#2E2A26]
        uppercase
        text-[10px]
        font-semibold
        tracking-[0.2em]
        shadow-[0_6px_18px_rgba(0,0,0,0.18)]
        transition-all
        duration-300
        hover:bg-[#F5F0EB]
        hover:scale-105
        hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]
      `,children:"Contact Us"})]})]}),r.jsxs("button",{onClick:()=>i(!n),className:`
    lg:hidden
    relative
    z-[250]
    flex
    flex-col
    justify-center
    gap-1.5
    w-8
    h-8
  `,children:[r.jsx("span",{className:`h-[2px] transition-all duration-300 ${n?"rotate-45 translate-y-[7px] bg-[#1A1A1A]":"bg-white"}`}),r.jsx("span",{className:`h-[2px] transition-all duration-300 ${n?"opacity-0 bg-[#1A1A1A]":"bg-white"}`}),r.jsx("span",{className:`h-[2px] transition-all duration-300 ${n?"-rotate-45 -translate-y-[7px] bg-[#1A1A1A]":"bg-white"}`})]})]})}),n&&r.jsxs("div",{className:`
      fixed
      inset-0
      z-[200]
      lg:hidden
      bg-gradient-to-br
      from-[#F5F0EB]/95
      via-[#EFE7DF]/95
      to-[#E8DED5]/95
      backdrop-blur-xl
    `,children:[r.jsx("div",{className:"pointer-events-none absolute top-20 left-10 w-40 h-40 bg-white/30 rounded-full blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute bottom-20 right-10 w-52 h-52 bg-white/20 rounded-full blur-3xl"}),r.jsx("div",{className:"relative z-10 h-full flex flex-col justify-center items-center",children:r.jsxs("div",{className:"space-y-8 text-center",children:[o.map(u=>r.jsx(Ue,{to:u.path,onClick:()=>i(!1),className:`
              block
              uppercase
              tracking-[0.3em]
              text-lg
              transition-all
              duration-300
              ${l(u.path)?"text-[#1A1A1A]":"text-[#1A1A1A]/60 hover:text-[#1A1A1A]"}
            `,children:u.label},u.path)),r.jsx("button",{onClick:()=>{i(!1),window.location.href="/booking"},className:`
            mt-10
            px-8
            py-4
            border
            border-[#1A1A1A]/20
            text-[#1A1A1A]
            uppercase
            tracking-[0.25em]
            text-xs
            rounded-full
            hover:bg-white/40
            transition-all
            duration-300
            min-w-[240px]
          `,children:"Book Consultation"}),r.jsxs("a",{href:"tel:61412345678",onClick:()=>i(!1),className:`
    mt-4
    flex
    items-center
    justify-center
    gap-3
    px-8
    py-4
    rounded-full
    bg-[#2E2A26]
    text-[#F5F0EB]
    uppercase
    tracking-[0.2em]
    text-xs
    font-medium
    transition-all
    duration-300
    hover:bg-[#C7A77A]
    hover:text-[#2E2A26]
    min-w-[240px]
  `,children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:"w-4 h-4",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.258-7.258 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.36-.27.52-.72.417-1.173L6.748 3.602A1.125 1.125 0 0 0 5.657 2.75H4.5A2.25 2.25 0 0 0 2.25 5v1.75Z"})}),"Call 0466 333 438"]}),r.jsx(Ue,{to:"/contact",onClick:()=>i(!1),className:`
    mt-3
    flex
    items-center
    justify-center
    px-8
    py-4
    rounded-full
    bg-[#C7A77A]
    text-[#2E2A26]
    uppercase
    tracking-[0.2em]
    text-xs
    font-semibold
    transition-all
    duration-300
    hover:bg-[#2E2A26]
    hover:text-[#F5F0EB]
    min-w-[240px]
  `,children:"Contact Us →"})]})})]})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A2=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,o)=>o?o.toUpperCase():i.toLowerCase()),Sf=e=>{const n=A2(e);return n.charAt(0).toUpperCase()+n.slice(1)},Bx=(...e)=>e.filter((n,i,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=j.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,iconNode:d,...h},m)=>j.createElement("svg",{ref:m,...C2,width:n,height:n,stroke:e,strokeWidth:o?Number(i)*24/Number(n):i,className:Bx("lucide",l),...h},[...d.map(([g,x])=>j.createElement(g,x)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=(e,n)=>{const i=j.forwardRef(({className:o,...l},u)=>j.createElement(E2,{ref:u,iconNode:n,className:Bx(`lucide-${k2(Sf(e))}`,`lucide-${e}`,o),...l}));return i.displayName=Sf(e),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],T2=_e("arrow-left",S2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],on=_e("arrow-right",P2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],D2=_e("badge-dollar-sign",_2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],M2=_e("bed-double",F2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],B2=_e("briefcase-business",R2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],I2=_e("calendar-days",L2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],O2=_e("check",z2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],$2=_e("chevron-left",V2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Lx=_e("chevron-right",W2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],H2=_e("circle-check",U2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]],q2=_e("clock-3",G2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],K2=_e("cookie",Y2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],X2=_e("database",Q2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]],J2=_e("dumbbell",Z2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],tj=_e("facebook",ej);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],ku=_e("file-check",nj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],aj=_e("globe",rj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]],sj=_e("hammer",ij);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],us=_e("house",oj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],cj=_e("instagram",lj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],dj=_e("layout-grid",uj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],mj=_e("leaf",hj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],fj=_e("linkedin",pj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Ix=_e("loader-circle",gj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],yj=_e("lock",xj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],bj=_e("mail",vj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Qo=_e("map-pin",wj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]],Tf=_e("map-pinned",jj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],kj=_e("menu",Nj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Rd=_e("message-circle",Aj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],Ej=_e("paintbrush",Cj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],Tj=_e("palette",Sj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Pf=_e("pencil-ruler",Pj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Dj=_e("phone",_j);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fj=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Mj=_e("refresh-cw",Fj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],Bj=_e("scroll-text",Rj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Ij=_e("search",Lj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Oj=_e("share-2",zj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],_f=_e("shield-check",Vj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $j=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],zx=_e("shield",$j);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Uj=_e("sparkles",Wj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hj=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Gj=_e("user-round",Hj);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ox=_e("x",qj);function Yj(){return r.jsx("footer",{className:"bg-[#1E1E1C] text-white border-t border-white/10",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-10 pt-24",children:[r.jsxs("div",{className:"grid md:grid-cols-3 gap-20",children:[r.jsxs("div",{children:[r.jsxs(Ue,{to:"/",className:"group inline-flex items-center gap-4 mb-6",children:[r.jsx("img",{src:"/images/logo/final.webp",alt:"Backyard Nest",draggable:!1,onDragStart:e=>e.preventDefault(),onContextMenu:e=>e.preventDefault(),className:"h-10 w-auto shrink-0 opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"}),r.jsx("span",{className:"font-serif text-[2rem] leading-none text-white transition-colors duration-300 group-hover:text-[#C7A77A]",children:"Backyard Nest"})]}),r.jsx("p",{className:"text-white/60 mb-6 leading-relaxed max-w-sm",children:"Beautifully designed backyard studios and granny flats for modern Australian living. Built with precision, delivered with care."}),r.jsxs("div",{className:"text-white/60 space-y-2",children:[r.jsx("a",{href:"mailto:build@backyardnest.com.au",className:`\r
    relative inline-block\r
    text-[#2E2A26]\r
    transition-colors duration-300\r
    hover:text-[#C7A77A]\r
    after:absolute\r
    after:left-0\r
    after:bottom-[-3px]\r
    after:h-[1px]\r
    after:w-0\r
    after:bg-[#C7A77A]\r
    after:transition-all\r
    after:duration-300\r
    hover:after:w-full\r
  `,"aria-label":"Email Backyard Nest",children:"Email: build@backyardnest.com.au"}),r.jsx("p",{children:r.jsx("a",{href:"tel:+61466333438",className:`\r
    relative inline-block\r
    text-[#2E2A26]\r
    transition-colors duration-300\r
    hover:text-[#C7A77A]\r
    after:absolute\r
    after:left-0\r
    after:bottom-[-3px]\r
    after:h-[1px]\r
    after:w-0\r
    after:bg-[#C7A77A]\r
    after:transition-all\r
    after:duration-300\r
    hover:after:w-full\r
  `,"aria-label":"Call Backyard Nest",children:"Ph No.: +61 466 333 438"})}),r.jsx("a",{href:"https://maps.app.goo.gl/FPbpaeABqK8EsoWN6",target:"_blank",rel:"noopener noreferrer",className:`\r
    relative inline-block\r
    text-[#2E2A26]\r
    transition-colors duration-300\r
    hover:text-[#C7A77A]\r
    after:absolute\r
    after:left-0\r
    after:bottom-[-3px]\r
    after:h-[1px]\r
    after:w-0\r
    after:bg-[#C7A77A]\r
    after:transition-all\r
    after:duration-300\r
    hover:after:w-full\r
  `,"aria-label":"View address on Google Maps",children:r.jsx("p",{children:"Address: Unit 7/21-35 Ricketts Rd, Mount Waverley VIC 3149"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"uppercase tracking-[0.25em] text-xs text-white/40 mb-6",children:"Products"}),r.jsxs("ul",{className:"space-y-3 text-white/70",children:[r.jsx("li",{children:r.jsx(Ue,{to:"/products/studio",className:"hover:text-white transition",children:"Backyard Studio"})}),r.jsx("li",{children:r.jsx(Ue,{to:"/products/granny",className:"hover:text-white transition",children:"Granny Flats"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"uppercase tracking-[0.25em] text-xs text-white/40 mb-6",children:"Company"}),r.jsxs("ul",{className:"space-y-3 text-white/70",children:[r.jsx("li",{children:r.jsx(Ue,{to:"/about",className:"hover:text-white transition",children:"About Us"})}),r.jsx("li",{children:r.jsx(Ue,{to:"/contact",className:"hover:text-white transition",children:"Contact Us"})}),r.jsx("li",{children:r.jsx(Ue,{to:"/blog",className:"hover:text-white transition",children:"Blog"})}),r.jsx("li",{children:r.jsx(Ue,{to:"/projects",className:"hover:text-white transition",children:"Projects"})}),r.jsx("li",{children:r.jsx(Ue,{to:"/faq",className:"hover:text-white transition",children:"FAQ"})}),r.jsx("li",{children:r.jsx(Ue,{to:"/privacy-policy",className:"hover:text-[#C8A97E] transition-colors",children:"Privacy Policy"})})]})]})]}),r.jsx("div",{className:"mt-10 lg:mt-14 pt-8 border-t border-white/10",children:r.jsxs("div",{className:"grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-10 items-center",children:[r.jsxs("div",{className:"text-center lg:text-left mx-auto lg:mx-0",children:[r.jsx("h4",{className:"uppercase tracking-[0.28em] text-xs text-[#C7A77A] mb-3",children:"Industry Accreditations"}),r.jsx("p",{className:"text-white/50 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0",children:"Proudly accredited and working alongside recognised industry leaders, ensuring every project meets Australia's highest standards."})]}),r.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-3 items-center gap-5 md:gap-6 lg:gap-8",children:[r.jsxs("div",{className:"flex flex-col items-center gap-4",children:[r.jsxs("div",{className:"group relative w-full flex flex-col items-center rounded-2xl px-2 md:px-4 py-4 lg:py-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]",children:[r.jsx("div",{className:"w-full h-28 sm:h-32 lg:h-36 flex items-center justify-center",children:r.jsx("img",{src:"/images/partners/bunnings.webp",alt:"Bunnings Trade",draggable:!1,onDragStart:e=>e.preventDefault(),onContextMenu:e=>e.preventDefault(),className:"w-full h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"})}),r.jsx("span",{className:"absolute bottom-0 left-1/2 h-px w-0 bg-[#C7A77A] transition-all duration-500 group-hover:w-20 group-hover:-translate-x-1/2"}),r.jsx("p",{className:"hidden lg:block mt-3 text-[10px] uppercase tracking-[0.25em] text-white/0 group-hover:text-white/45 transition-all duration-500",children:"Bunnings Trade"})]}),r.jsxs("div",{className:"group relative w-full flex flex-col items-center rounded-2xl px-2 md:px-4 py-3 lg:py-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]",children:[r.jsx("div",{className:"w-full h-20 sm:h-24 lg:h-24 flex items-center justify-center",children:r.jsx("img",{src:"/images/partners/Master-Builders-Victoria-Master-Builder.webp",alt:"Master Builders Victoria",draggable:!1,onDragStart:e=>e.preventDefault(),onContextMenu:e=>e.preventDefault(),className:"w-full h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"})}),r.jsx("span",{className:"absolute bottom-0 left-1/2 h-px w-0 bg-[#C7A77A] transition-all duration-500 group-hover:w-20 group-hover:-translate-x-1/2"}),r.jsx("p",{className:"hidden lg:block mt-3 text-[10px] uppercase tracking-[0.25em] text-white/0 group-hover:text-white/45 transition-all duration-500",children:"Master Builders Victoria"})]})]}),r.jsxs("div",{className:"group relative flex flex-col items-center rounded-2xl px-2 md:px-4 lg:px-6 py-3 lg:py-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]",children:[r.jsx("div",{className:"w-full h-20 sm:h-24 lg:h-28 flex items-center justify-center",children:r.jsx("img",{src:"/images/partners/melbourne-boutique-homes.webp",alt:"Melbourne Boutique Homes",draggable:!1,onDragStart:e=>e.preventDefault(),onContextMenu:e=>e.preventDefault(),className:"w-full h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"})}),r.jsx("span",{className:"absolute bottom-0 left-1/2 h-px w-0 bg-[#C7A77A] transition-all duration-500 group-hover:w-20 group-hover:-translate-x-1/2"}),r.jsx("p",{className:"hidden lg:block mt-3 text-[10px] uppercase tracking-[0.25em] text-white/0 group-hover:text-white/45 transition-all duration-500",children:"Melbourne Boutique Homes"})]}),r.jsxs("div",{className:"group relative flex flex-col items-center rounded-2xl px-2 md:px-4 lg:px-6 py-3 lg:py-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]",children:[r.jsx("div",{className:"w-full h-20 sm:h-24 lg:h-28 flex items-center justify-center",children:r.jsx("img",{src:"/images/partners/ams-build.webp",alt:"AMS Build",draggable:!1,onDragStart:e=>e.preventDefault(),onContextMenu:e=>e.preventDefault(),className:"w-full h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"})}),r.jsx("span",{className:"absolute bottom-0 left-1/2 h-px w-0 bg-[#C7A77A] transition-all duration-500 group-hover:w-20 group-hover:-translate-x-1/2"}),r.jsx("p",{className:"hidden lg:block mt-3 text-[10px] uppercase tracking-[0.25em] text-white/0 group-hover:text-white/45 transition-all duration-500",children:"AMS Build"})]})]})]})}),r.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mt-20 py-8 border-t border-white/10",children:[r.jsx("p",{className:"text-white/40 text-sm",children:"© 2026 Backyard Nest. All rights reserved."}),r.jsxs("div",{className:"flex gap-4 mt-6 md:mt-0",children:[r.jsx("a",{href:"https://www.instagram.com/backyard_nest_au/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",className:"w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition duration-300",children:r.jsx(cj,{size:16})}),r.jsx("a",{href:"https://www.facebook.com/share/18ttovRcLR/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",className:"w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition duration-300",children:r.jsx(tj,{size:16})}),r.jsx("a",{href:"https://www.linkedin.com/company/YOUR_LINKEDIN",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition duration-300",children:r.jsx(fj,{size:16})})]})]})]})})}function Kj(){const{pathname:e}=dn();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function Qj(){const i=`https://wa.me/61466333438?text=${encodeURIComponent("Hi Backyard Nest, I'm interested in your designs and would like to know more.")}`;return r.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with Backyard Nest on WhatsApp",className:"fixed bottom-6 right-6 z-[9999] group",children:[r.jsx("span",{className:`\r
          absolute right-16 top-1/2 -translate-y-1/2\r
          whitespace-nowrap\r
          rounded-lg bg-[#2E2A26] px-4 py-2\r
          text-sm text-white\r
          opacity-0 translate-x-2\r
          transition-all duration-300\r
          group-hover:opacity-100 group-hover:translate-x-0\r
          pointer-events-none\r
          shadow-lg\r
        `,children:"Chat with us on WhatsApp"}),r.jsx("div",{className:`\r
          flex h-14 w-14 items-center justify-center\r
          rounded-full\r
          bg-[#25D366]\r
          shadow-lg\r
          transition-all duration-300\r
          hover:scale-110\r
        `,children:r.jsx("svg",{viewBox:"0 0 32 32",className:"h-8 w-8 fill-white","aria-hidden":"true",children:r.jsx("path",{d:"M16.02 3C8.84 3 3 8.83 3 16c0 2.29.6 4.5 1.73 6.46L3 29l6.69-1.71A12.94 12.94 0 0 0 16.02 29C23.18 29 29 23.18 29 16S23.18 3 16.02 3Zm0 23.72c-1.99 0-3.94-.53-5.64-1.54l-.4-.24-3.97 1.01 1.06-3.87-.26-.42A10.67 10.67 0 0 1 5.3 16c0-5.92 4.81-10.72 10.72-10.72S26.73 10.08 26.73 16s-4.8 10.72-10.71 10.72Zm5.87-8.03c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.81 1.03-.99 1.24-.18.21-.36.23-.68.08-.32-.16-1.34-.49-2.55-1.56-.94-.84-1.57-1.88-1.75-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.36.47-.54.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.33.51 1.78.65.75.24 1.44.2 1.98.12.6-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.6-.36Z"})})})]})}function Xj(){const e=dn(),n=e.pathname==="/landingPage"||e.pathname==="/landingpage";return r.jsxs(r.Fragment,{children:[r.jsx(Kj,{}),!n&&r.jsx(N2,{}),r.jsx(I1,{}),r.jsx(Yj,{}),r.jsx(Qj,{})]})}const Bd=j.createContext({});function Ld(e){const n=j.useRef(null);return n.current===null&&(n.current=e()),n.current}const Zj=typeof window<"u",Vx=Zj?j.useLayoutEffect:j.useEffect,wl=j.createContext(null);function Id(e,n){e.indexOf(n)===-1&&e.push(n)}function sl(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const In=(e,n,i)=>i>n?n:i<e?e:i;let zd=()=>{};const Ir={},$x=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Wx=e=>typeof e=="object"&&e!==null,Ux=e=>/^0[^.\s]+$/u.test(e);function Hx(e){let n;return()=>(n===void 0&&(n=e()),n)}const ln=e=>e,bs=(...e)=>e.reduce((n,i)=>o=>i(n(o))),ds=(e,n,i)=>{const o=n-e;return o?(i-e)/o:1};class Od{constructor(){this.subscriptions=[]}add(n){return Id(this.subscriptions,n),()=>sl(this.subscriptions,n)}notify(n,i,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](n,i,o);else for(let u=0;u<l;u++){const d=this.subscriptions[u];d&&d(n,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const qt=e=>e*1e3,sn=e=>e/1e3,Gx=(e,n)=>n?e*(1e3/n):0,qx=(e,n,i)=>(((1-3*i+3*n)*e+(3*i-6*n))*e+3*n)*e,Jj=1e-7,eN=12;function tN(e,n,i,o,l){let u,d,h=0;do d=n+(i-n)/2,u=qx(d,o,l)-e,u>0?i=d:n=d;while(Math.abs(u)>Jj&&++h<eN);return d}function ws(e,n,i,o){if(e===n&&i===o)return ln;const l=u=>tN(u,0,1,e,i);return u=>u===0||u===1?u:qx(l(u),n,o)}const Yx=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,Kx=e=>n=>1-e(1-n),Qx=ws(.33,1.53,.69,.99),Vd=Kx(Qx),Xx=Yx(Vd),Zx=e=>e>=1?1:(e*=2)<1?.5*Vd(e):.5*(2-Math.pow(2,-10*(e-1))),$d=e=>1-Math.sin(Math.acos(e)),Jx=Kx($d),ey=Yx($d),nN=ws(.42,0,1,1),rN=ws(0,0,.58,1),ty=ws(.42,0,.58,1),aN=e=>Array.isArray(e)&&typeof e[0]!="number",ny=e=>Array.isArray(e)&&typeof e[0]=="number",iN={linear:ln,easeIn:nN,easeInOut:ty,easeOut:rN,circIn:$d,circInOut:ey,circOut:Jx,backIn:Vd,backInOut:Xx,backOut:Qx,anticipate:Zx},sN=e=>typeof e=="string",Df=e=>{if(ny(e)){zd(e.length===4);const[n,i,o,l]=e;return ws(n,i,o,l)}else if(sN(e))return iN[e];return e},Oo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function oN(e,n){let i=new Set,o=new Set,l=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function m(x){d.has(x)&&(g.schedule(x),e()),x(h)}const g={schedule:(x,y=!1,b=!1)=>{const N=b&&l?i:o;return y&&d.add(x),N.add(x),x},cancel:x=>{o.delete(x),d.delete(x)},process:x=>{if(h=x,l){u=!0;return}l=!0;const y=i;i=o,o=y,i.forEach(m),i.clear(),l=!1,u&&(u=!1,g.process(x))}};return g}const lN=40;function ry(e,n){let i=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=Oo.reduce((z,R)=>(z[R]=oN(u),z),{}),{setup:h,read:m,resolveKeyframes:g,preUpdate:x,update:y,preRender:b,render:w,postRender:N}=d,E=()=>{const z=Ir.useManualTiming,R=z?l.timestamp:performance.now();i=!1,z||(l.delta=o?1e3/60:Math.max(Math.min(R-l.timestamp,lN),1)),l.timestamp=R,l.isProcessing=!0,h.process(l),m.process(l),g.process(l),x.process(l),y.process(l),b.process(l),w.process(l),N.process(l),l.isProcessing=!1,i&&n&&(o=!1,e(E))},C=()=>{i=!0,o=!0,l.isProcessing||e(E)};return{schedule:Oo.reduce((z,R)=>{const U=d[R];return z[R]=(F,q=!1,A=!1)=>(i||C(),U.schedule(F,q,A)),z},{}),cancel:z=>{for(let R=0;R<Oo.length;R++)d[Oo[R]].cancel(z)},state:l,steps:d}}const{schedule:qe,cancel:zr,state:bt,steps:Au}=ry(typeof requestAnimationFrame<"u"?requestAnimationFrame:ln,!0);let Xo;function cN(){Xo=void 0}const Ft={now:()=>(Xo===void 0&&Ft.set(bt.isProcessing||Ir.useManualTiming?bt.timestamp:performance.now()),Xo),set:e=>{Xo=e,queueMicrotask(cN)}},ay=e=>n=>typeof n=="string"&&n.startsWith(e),iy=ay("--"),uN=ay("var(--"),Wd=e=>uN(e)?dN.test(e.split("/*")[0].trim()):!1,dN=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ff(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const ni={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},hs={...ni,transform:e=>In(0,1,e)},Vo={...ni,default:1},rs=e=>Math.round(e*1e5)/1e5,Ud=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function hN(e){return e==null}const mN=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Hd=(e,n)=>i=>!!(typeof i=="string"&&mN.test(i)&&i.startsWith(e)||n&&!hN(i)&&Object.prototype.hasOwnProperty.call(i,n)),sy=(e,n,i)=>o=>{if(typeof o!="string")return o;const[l,u,d,h]=o.match(Ud);return{[e]:parseFloat(l),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},pN=e=>In(0,255,e),Cu={...ni,transform:e=>Math.round(pN(e))},ia={test:Hd("rgb","red"),parse:sy("red","green","blue"),transform:({red:e,green:n,blue:i,alpha:o=1})=>"rgba("+Cu.transform(e)+", "+Cu.transform(n)+", "+Cu.transform(i)+", "+rs(hs.transform(o))+")"};function fN(e){let n="",i="",o="",l="";return e.length>5?(n=e.substring(1,3),i=e.substring(3,5),o=e.substring(5,7),l=e.substring(7,9)):(n=e.substring(1,2),i=e.substring(2,3),o=e.substring(3,4),l=e.substring(4,5),n+=n,i+=i,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Xu={test:Hd("#"),parse:fN,transform:ia.transform},js=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),tr=js("deg"),Bn=js("%"),ue=js("px"),gN=js("vh"),xN=js("vw"),Mf={...Bn,parse:e=>Bn.parse(e)/100,transform:e=>Bn.transform(e*100)},Ya={test:Hd("hsl","hue"),parse:sy("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:i,alpha:o=1})=>"hsla("+Math.round(e)+", "+Bn.transform(rs(n))+", "+Bn.transform(rs(i))+", "+rs(hs.transform(o))+")"},lt={test:e=>ia.test(e)||Xu.test(e)||Ya.test(e),parse:e=>ia.test(e)?ia.parse(e):Ya.test(e)?Ya.parse(e):Xu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ia.transform(e):Ya.transform(e),getAnimatableNone:e=>{const n=lt.parse(e);return n.alpha=0,lt.transform(n)}},yN=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function vN(e){var n,i;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Ud))==null?void 0:n.length)||0)+(((i=e.match(yN))==null?void 0:i.length)||0)>0}const oy="number",ly="color",bN="var",wN="var(",Rf="${}",jN=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ei(e){const n=e.toString(),i=[],o={color:[],number:[],var:[]},l=[];let u=0;const h=n.replace(jN,m=>(lt.test(m)?(o.color.push(u),l.push(ly),i.push(lt.parse(m))):m.startsWith(wN)?(o.var.push(u),l.push(bN),i.push(m)):(o.number.push(u),l.push(oy),i.push(parseFloat(m))),++u,Rf)).split(Rf);return{values:i,split:h,indexes:o,types:l}}function NN(e){return ei(e).values}function cy({split:e,types:n}){const i=e.length;return o=>{let l="";for(let u=0;u<i;u++)if(l+=e[u],o[u]!==void 0){const d=n[u];d===oy?l+=rs(o[u]):d===ly?l+=lt.transform(o[u]):l+=o[u]}return l}}function kN(e){return cy(ei(e))}const AN=e=>typeof e=="number"?0:lt.test(e)?lt.getAnimatableNone(e):e,CN=(e,n)=>typeof e=="number"?n!=null&&n.trim().endsWith("/")?e:0:AN(e);function EN(e){const n=ei(e);return cy(n)(n.values.map((o,l)=>CN(o,n.split[l])))}const Cn={test:vN,parse:NN,createTransformer:kN,getAnimatableNone:EN};function Eu(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e}function SN({hue:e,saturation:n,lightness:i,alpha:o}){e/=360,n/=100,i/=100;let l=0,u=0,d=0;if(!n)l=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,m=2*i-h;l=Eu(m,h,e+1/3),u=Eu(m,h,e),d=Eu(m,h,e-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:o}}function ol(e,n){return i=>i>0?n:e}const Ge=(e,n,i)=>e+(n-e)*i,Su=(e,n,i)=>{const o=e*e,l=i*(n*n-o)+o;return l<0?0:Math.sqrt(l)},TN=[Xu,ia,Ya],PN=e=>TN.find(n=>n.test(e));function Bf(e){const n=PN(e);if(!n)return!1;let i=n.parse(e);return n===Ya&&(i=SN(i)),i}const Lf=(e,n)=>{const i=Bf(e),o=Bf(n);if(!i||!o)return ol(e,n);const l={...i};return u=>(l.red=Su(i.red,o.red,u),l.green=Su(i.green,o.green,u),l.blue=Su(i.blue,o.blue,u),l.alpha=Ge(i.alpha,o.alpha,u),ia.transform(l))},Zu=new Set(["none","hidden"]);function _N(e,n){return Zu.has(e)?i=>i<=0?e:n:i=>i>=1?n:e}function DN(e,n){return i=>Ge(e,n,i)}function Gd(e){return typeof e=="number"?DN:typeof e=="string"?Wd(e)?ol:lt.test(e)?Lf:RN:Array.isArray(e)?uy:typeof e=="object"?lt.test(e)?Lf:FN:ol}function uy(e,n){const i=[...e],o=i.length,l=e.map((u,d)=>Gd(u)(u,n[d]));return u=>{for(let d=0;d<o;d++)i[d]=l[d](u);return i}}function FN(e,n){const i={...e,...n},o={};for(const l in i)e[l]!==void 0&&n[l]!==void 0&&(o[l]=Gd(e[l])(e[l],n[l]));return l=>{for(const u in o)i[u]=o[u](l);return i}}function MN(e,n){const i=[],o={color:0,var:0,number:0};for(let l=0;l<n.values.length;l++){const u=n.types[l],d=e.indexes[u][o[u]],h=e.values[d]??0;i[l]=h,o[u]++}return i}const RN=(e,n)=>{const i=Cn.createTransformer(n),o=ei(e),l=ei(n);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?Zu.has(e)&&!l.values.length||Zu.has(n)&&!o.values.length?_N(e,n):bs(uy(MN(o,l),l.values),i):ol(e,n)};function dy(e,n,i){return typeof e=="number"&&typeof n=="number"&&typeof i=="number"?Ge(e,n,i):Gd(e)(e,n)}const BN=e=>{const n=({timestamp:i})=>e(i);return{start:(i=!0)=>qe.update(n,i),stop:()=>zr(n),now:()=>bt.isProcessing?bt.timestamp:Ft.now()}},hy=(e,n,i=10)=>{let o="";const l=Math.max(Math.round(n/i),2);for(let u=0;u<l;u++)o+=Math.round(e(u/(l-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},ll=2e4;function qd(e){let n=0;const i=50;let o=e.next(n);for(;!o.done&&n<ll;)n+=i,o=e.next(n);return n>=ll?1/0:n}function LN(e,n=100,i){const o=i({...e,keyframes:[0,n]}),l=Math.min(qd(o),ll);return{type:"keyframes",ease:u=>o.next(l*u).value/n,duration:sn(l)}}const nt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Ju(e,n){return e*Math.sqrt(1-n*n)}const IN=12;function zN(e,n,i){let o=i;for(let l=1;l<IN;l++)o=o-e(o)/n(o);return o}const Tu=.001;function ON({duration:e=nt.duration,bounce:n=nt.bounce,velocity:i=nt.velocity,mass:o=nt.mass}){let l,u,d=1-n;d=In(nt.minDamping,nt.maxDamping,d),e=In(nt.minDuration,nt.maxDuration,sn(e)),d<1?(l=g=>{const x=g*d,y=x*e,b=x-i,w=Ju(g,d),N=Math.exp(-y);return Tu-b/w*N},u=g=>{const y=g*d*e,b=y*i+i,w=Math.pow(d,2)*Math.pow(g,2)*e,N=Math.exp(-y),E=Ju(Math.pow(g,2),d);return(-l(g)+Tu>0?-1:1)*((b-w)*N)/E}):(l=g=>{const x=Math.exp(-g*e),y=(g-i)*e+1;return-Tu+x*y},u=g=>{const x=Math.exp(-g*e),y=(i-g)*(e*e);return x*y});const h=5/e,m=zN(l,u,h);if(e=qt(e),isNaN(m))return{stiffness:nt.stiffness,damping:nt.damping,duration:e};{const g=Math.pow(m,2)*o;return{stiffness:g,damping:d*2*Math.sqrt(o*g),duration:e}}}const VN=["duration","bounce"],$N=["stiffness","damping","mass"];function If(e,n){return n.some(i=>e[i]!==void 0)}function WN(e){let n={velocity:nt.velocity,stiffness:nt.stiffness,damping:nt.damping,mass:nt.mass,isResolvedFromDuration:!1,...e};if(!If(e,$N)&&If(e,VN))if(n.velocity=0,e.visualDuration){const i=e.visualDuration,o=2*Math.PI/(i*1.2),l=o*o,u=2*In(.05,1,1-(e.bounce||0))*Math.sqrt(l);n={...n,mass:nt.mass,stiffness:l,damping:u}}else{const i=ON({...e,velocity:0});n={...n,...i,mass:nt.mass},n.isResolvedFromDuration=!0}return n}function cl(e=nt.visualDuration,n=nt.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:o,restDelta:l}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:m,damping:g,mass:x,duration:y,velocity:b,isResolvedFromDuration:w}=WN({...i,velocity:-sn(i.velocity||0)}),N=b||0,E=g/(2*Math.sqrt(m*x)),C=d-u,M=sn(Math.sqrt(m/x)),I=Math.abs(C)<5;o||(o=I?nt.restSpeed.granular:nt.restSpeed.default),l||(l=I?nt.restDelta.granular:nt.restDelta.default);let z,R,U,F,q,A;if(E<1)U=Ju(M,E),F=(N+E*M*C)/U,z=G=>{const de=Math.exp(-E*M*G);return d-de*(F*Math.sin(U*G)+C*Math.cos(U*G))},q=E*M*F+C*U,A=E*M*C-F*U,R=G=>Math.exp(-E*M*G)*(q*Math.sin(U*G)+A*Math.cos(U*G));else if(E===1){z=de=>d-Math.exp(-M*de)*(C+(N+M*C)*de);const G=N+M*C;R=de=>Math.exp(-M*de)*(M*G*de-N)}else{const G=M*Math.sqrt(E*E-1);z=Z=>{const we=Math.exp(-E*M*Z),ge=Math.min(G*Z,300);return d-we*((N+E*M*C)*Math.sinh(ge)+G*C*Math.cosh(ge))/G};const de=(N+E*M*C)/G,ee=E*M*de-C*G,re=E*M*C-de*G;R=Z=>{const we=Math.exp(-E*M*Z),ge=Math.min(G*Z,300);return we*(ee*Math.sinh(ge)+re*Math.cosh(ge))}}const ae={calculatedDuration:w&&y||null,velocity:G=>qt(R(G)),next:G=>{if(!w&&E<1){const ee=Math.exp(-E*M*G),re=Math.sin(U*G),Z=Math.cos(U*G),we=d-ee*(F*re+C*Z),ge=qt(ee*(q*re+A*Z));return h.done=Math.abs(ge)<=o&&Math.abs(d-we)<=l,h.value=h.done?d:we,h}const de=z(G);if(w)h.done=G>=y;else{const ee=qt(R(G));h.done=Math.abs(ee)<=o&&Math.abs(d-de)<=l}return h.value=h.done?d:de,h},toString:()=>{const G=Math.min(qd(ae),ll),de=hy(ee=>ae.next(G*ee).value,G,30);return G+"ms "+de},toTransition:()=>{}};return ae}cl.applyToOptions=e=>{const n=LN(e,100,cl);return e.ease=n.ease,e.duration=qt(n.duration),e.type="keyframes",e};const UN=5;function my(e,n,i){const o=Math.max(n-UN,0);return Gx(i-e(o),n-o)}function ed({keyframes:e,velocity:n=0,power:i=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:m,restDelta:g=.5,restSpeed:x}){const y=e[0],b={done:!1,value:y},w=A=>h!==void 0&&A<h||m!==void 0&&A>m,N=A=>h===void 0?m:m===void 0||Math.abs(h-A)<Math.abs(m-A)?h:m;let E=i*n;const C=y+E,M=d===void 0?C:d(C);M!==C&&(E=M-y);const I=A=>-E*Math.exp(-A/o),z=A=>M+I(A),R=A=>{const ae=I(A),G=z(A);b.done=Math.abs(ae)<=g,b.value=b.done?M:G};let U,F;const q=A=>{w(b.value)&&(U=A,F=cl({keyframes:[b.value,N(b.value)],velocity:my(z,A,b.value),damping:l,stiffness:u,restDelta:g,restSpeed:x}))};return q(0),{calculatedDuration:null,next:A=>{let ae=!1;return!F&&U===void 0&&(ae=!0,R(A),q(A)),U!==void 0&&A>=U?F.next(A-U):(!ae&&R(A),b)}}}function HN(e,n,i){const o=[],l=i||Ir.mix||dy,u=e.length-1;for(let d=0;d<u;d++){let h=l(e[d],e[d+1]);if(n){const m=Array.isArray(n)?n[d]||ln:n;h=bs(m,h)}o.push(h)}return o}function GN(e,n,{clamp:i=!0,ease:o,mixer:l}={}){const u=e.length;if(zd(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const h=HN(n,o,l),m=h.length,g=x=>{if(d&&x<e[0])return n[0];let y=0;if(m>1)for(;y<e.length-2&&!(x<e[y+1]);y++);const b=ds(e[y],e[y+1],x);return h[y](b)};return i?x=>g(In(e[0],e[u-1],x)):g}function qN(e,n){const i=e[e.length-1];for(let o=1;o<=n;o++){const l=ds(0,n,o);e.push(Ge(i,1,l))}}function YN(e){const n=[0];return qN(n,e.length-1),n}function KN(e,n){return e.map(i=>i*n)}function QN(e,n){return e.map(()=>n||ty).splice(0,e.length-1)}function as({duration:e=300,keyframes:n,times:i,ease:o="easeInOut"}){const l=aN(o)?o.map(Df):Df(o),u={done:!1,value:n[0]},d=KN(i&&i.length===n.length?i:YN(n),e),h=GN(d,n,{ease:Array.isArray(l)?l:QN(n,l)});return{calculatedDuration:e,next:m=>(u.value=h(m),u.done=m>=e,u)}}const XN=e=>e!==null;function jl(e,{repeat:n,repeatType:i="loop"},o,l=1){const u=e.filter(XN),h=l<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||o===void 0?u[h]:o}const ZN={decay:ed,inertia:ed,tween:as,keyframes:as,spring:cl};function py(e){typeof e.type=="string"&&(e.type=ZN[e.type])}class Yd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const JN=e=>e/100;class ul extends Yd{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var o,l;const{motionValue:i}=this.options;i&&i.updatedAt!==Ft.now()&&this.tick(Ft.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(l=(o=this.options).onStop)==null||l.call(o))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;py(n);const{type:i=as,repeat:o=0,repeatDelay:l=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const m=i||as;m!==as&&typeof h[0]!="number"&&(this.mixKeyframes=bs(JN,dy(h[0],h[1])),h=[0,100]);const g=m({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=m({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=qd(g));const{calculatedDuration:x}=g;this.calculatedDuration=x,this.resolvedDuration=x+l,this.totalDuration=this.resolvedDuration*(o+1)-l,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:o,totalDuration:l,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:m}=this;if(this.startTime===null)return o.next(0);const{delay:g=0,keyframes:x,repeat:y,repeatType:b,repeatDelay:w,type:N,onUpdate:E,finalKeyframe:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-l/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const M=this.currentTime-g*(this.playbackSpeed>=0?1:-1),I=this.playbackSpeed>=0?M<0:M>l;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let z=this.currentTime,R=o;if(y){const A=Math.min(this.currentTime,l)/h;let ae=Math.floor(A),G=A%1;!G&&A>=1&&(G=1),G===1&&ae--,ae=Math.min(ae,y+1),!!(ae%2)&&(b==="reverse"?(G=1-G,w&&(G-=w/h)):b==="mirror"&&(R=d)),z=In(0,1,G)*h}let U;I?(this.delayState.value=x[0],U=this.delayState):U=R.next(z),u&&!I&&(U.value=u(U.value));let{done:F}=U;!I&&m!==null&&(F=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return q&&N!==ed&&(U.value=jl(x,this.options,C,this.speed)),E&&E(U.value),q&&this.finish(),U}then(n,i){return this.finished.then(n,i)}get duration(){return sn(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+sn(n)}get time(){return sn(this.currentTime)}set time(n){n=qt(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return my(o=>this.generator.next(o).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Ft.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=sn(this.currentTime))}play(){var l,u;if(this.isStopped)return;const{driver:n=BN,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(l=this.options).onPlay)==null||u.call(l);const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=i??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ft.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function ek(e){for(let n=1;n<e.length;n++)e[n]??(e[n]=e[n-1])}const sa=e=>e*180/Math.PI,td=e=>{const n=sa(Math.atan2(e[1],e[0]));return nd(n)},tk={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:td,rotateZ:td,skewX:e=>sa(Math.atan(e[1])),skewY:e=>sa(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},nd=e=>(e=e%360,e<0&&(e+=360),e),zf=td,Of=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Vf=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),nk={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Of,scaleY:Vf,scale:e=>(Of(e)+Vf(e))/2,rotateX:e=>nd(sa(Math.atan2(e[6],e[5]))),rotateY:e=>nd(sa(Math.atan2(-e[2],e[0]))),rotateZ:zf,rotate:zf,skewX:e=>sa(Math.atan(e[4])),skewY:e=>sa(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function rd(e){return e.includes("scale")?1:0}function ad(e,n){if(!e||e==="none")return rd(n);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,l;if(i)o=nk,l=i;else{const h=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=tk,l=h}if(!l)return rd(n);const u=o[n],d=l[1].split(",").map(ak);return typeof u=="function"?u(d):d[u]}const rk=(e,n)=>{const{transform:i="none"}=getComputedStyle(e);return ad(i,n)};function ak(e){return parseFloat(e.trim())}const ri=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ai=new Set([...ri,"pathRotation"]),$f=e=>e===ni||e===ue,ik=new Set(["x","y","z"]),sk=ri.filter(e=>!ik.has(e));function ok(e){const n=[];return sk.forEach(i=>{const o=e.getValue(i);o!==void 0&&(n.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),n}const Lr={width:({x:e},{paddingLeft:n="0",paddingRight:i="0",boxSizing:o})=>{const l=e.max-e.min;return o==="border-box"?l:l-parseFloat(n)-parseFloat(i)},height:({y:e},{paddingTop:n="0",paddingBottom:i="0",boxSizing:o})=>{const l=e.max-e.min;return o==="border-box"?l:l-parseFloat(n)-parseFloat(i)},top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>ad(n,"x"),y:(e,{transform:n})=>ad(n,"y")};Lr.translateX=Lr.x;Lr.translateY=Lr.y;const la=new Set;let id=!1,sd=!1,od=!1;function fy(){if(sd){const e=Array.from(la).filter(o=>o.needsMeasurement),n=new Set(e.map(o=>o.element)),i=new Map;n.forEach(o=>{const l=ok(o);l.length&&(i.set(o,l),o.render())}),e.forEach(o=>o.measureInitialState()),n.forEach(o=>{o.render();const l=i.get(o);l&&l.forEach(([u,d])=>{var h;(h=o.getValue(u))==null||h.set(d)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}sd=!1,id=!1,la.forEach(e=>e.complete(od)),la.clear()}function gy(){la.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(sd=!0)})}function lk(){od=!0,gy(),fy(),od=!1}class Kd{constructor(n,i,o,l,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=o,this.motionValue=l,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(la.add(this),id||(id=!0,qe.read(gy),qe.resolveKeyframes(fy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:o,motionValue:l}=this;if(n[0]===null){const u=l==null?void 0:l.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(o&&i){const h=o.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),l&&u===void 0&&l.set(n[0])}ek(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),la.delete(this)}cancel(){this.state==="scheduled"&&(la.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ck=e=>e.startsWith("--");function xy(e,n,i){ck(n)?e.style.setProperty(n,i):e.style[n]=i}const uk={};function yy(e,n){const i=Hx(e);return()=>uk[n]??i()}const dk=yy(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),vy=yy(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ts=([e,n,i,o])=>`cubic-bezier(${e}, ${n}, ${i}, ${o})`,Wf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ts([0,.65,.55,1]),circOut:ts([.55,0,1,.45]),backIn:ts([.31,.01,.66,-.59]),backOut:ts([.33,1.53,.69,.99])};function by(e,n){if(e)return typeof e=="function"?vy()?hy(e,n):"ease-out":ny(e)?ts(e):Array.isArray(e)?e.map(i=>by(i,n)||Wf.easeOut):Wf[e]}function hk(e,n,i,{delay:o=0,duration:l=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:m}={},g=void 0){const x={[n]:i};m&&(x.offset=m);const y=by(h,l);Array.isArray(y)&&(x.easing=y);const b={delay:o,duration:l,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),e.animate(x,b)}function wy(e){return typeof e=="function"&&"applyToOptions"in e}function mk({type:e,...n}){return wy(e)&&vy()?e.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class jy extends Yd{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:o,keyframes:l,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:m}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,zd(typeof n.type!="string");const g=mk(n);this.animation=hk(i,o,l,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const x=jl(l,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(x),xy(i,o,x),this.animation.cancel()}m==null||m(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,o,l;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((l=(o=this.animation).commitStyles)==null||l.call(o))}get duration(){var i,o;const n=((o=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:o.call(i).duration)||0;return sn(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+sn(n)}get time(){return sn(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=qt(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:o,observe:l}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&dk()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),o&&(this.animation.rangeEnd=o),ln):l(this)}}const Ny={anticipate:Zx,backInOut:Xx,circInOut:ey};function pk(e){return e in Ny}function fk(e){typeof e.ease=="string"&&pk(e.ease)&&(e.ease=Ny[e.ease])}const Pu=10;class gk extends jy{constructor(n){fk(n),py(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:o,onComplete:l,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new ul({...d,autoplay:!1}),m=Math.max(Pu,Ft.now()-this.startTime),g=In(0,Pu,m-Pu),x=h.sample(m).value,{name:y}=this.options;u&&y&&xy(u,y,x),i.setWithVelocity(h.sample(Math.max(0,m-g)).value,x,g),h.stop()}}const Uf=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Cn.test(e)||e==="0")&&!e.startsWith("url("));function xk(e){const n=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function yk(e,n,i,o){const l=e[0];if(l===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],d=Uf(l,n),h=Uf(u,n);return!d||!h?!1:xk(e)||(i==="spring"||wy(i))&&o}function ld(e){e.duration=0,e.type="keyframes"}const ky=new Set(["opacity","clipPath","filter","transform"]),vk=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function bk(e){for(let n=0;n<e.length;n++)if(typeof e[n]=="string"&&vk.test(e[n]))return!0;return!1}const wk=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),jk=Hx(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Nk(e){var y;const{motionValue:n,name:i,repeatDelay:o,repeatType:l,damping:u,type:d,keyframes:h}=e;if(!(((y=n==null?void 0:n.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:x}=n.owner.getProps();return jk()&&i&&(ky.has(i)||wk.has(i)&&bk(h))&&(i!=="transform"||!x)&&!g&&!o&&l!=="mirror"&&u!==0&&d!=="inertia"}const kk=40;class Ak extends Yd{constructor({autoplay:n=!0,delay:i=0,type:o="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:m,motionValue:g,element:x,...y}){var N;super(),this.stop=()=>{var E,C;this._animation&&(this._animation.stop(),(E=this.stopTimeline)==null||E.call(this)),(C=this.keyframeResolver)==null||C.cancel()},this.createdAt=Ft.now();const b={autoplay:n,delay:i,type:o,repeat:l,repeatDelay:u,repeatType:d,name:m,motionValue:g,element:x,...y},w=(x==null?void 0:x.KeyframeResolver)||Kd;this.keyframeResolver=new w(h,(E,C,M)=>this.onKeyframesResolved(E,C,b,!M),m,g,x),(N=this.keyframeResolver)==null||N.scheduleResolve()}onKeyframesResolved(n,i,o,l){var M,I;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:m,isHandoff:g,onUpdate:x}=o;this.resolvedAt=Ft.now();let y=!0;yk(n,u,d,h)||(y=!1,(Ir.instantAnimations||!m)&&(x==null||x(jl(n,o,i))),n[0]=n[n.length-1],ld(o),o.repeat=0);const w={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>kk?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...o,keyframes:n},N=y&&!g&&Nk(w),E=(I=(M=w.motionValue)==null?void 0:M.owner)==null?void 0:I.current;let C;if(N)try{C=new gk({...w,element:E})}catch{C=new ul(w)}else C=new ul(w);C.finished.then(()=>{this.notifyFinished()}).catch(ln),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),lk()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}function Ay(e,n,i,o=0,l=1){const u=Array.from(e).sort((g,x)=>g.sortNodePosition(x)).indexOf(n),d=e.size,h=(d-1)*o;return typeof i=="function"?i(u,d):l===1?u*o:h-u*o}const Hf=30,Ck=e=>!isNaN(parseFloat(e));class Ek{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{var u;const l=Ft.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Ft.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=Ck(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new Od);const o=this.events[n].add(i);return n==="change"?()=>{o(),qe.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-o}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=Ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Hf)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Hf);return Gx(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ti(e,n){return new Ek(e,n)}function Cy(e,n){if(e!=null&&e.inherit&&n){const{inherit:i,...o}=e;return{...n,...o}}return e}function Qd(e,n){const i=(e==null?void 0:e[n])??(e==null?void 0:e.default)??e;return i!==e?Cy(i,e):i}const Sk={type:"spring",stiffness:500,damping:25,restSpeed:10},Tk=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Pk={type:"keyframes",duration:.8},_k={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Dk=(e,{keyframes:n})=>n.length>2?Pk:ai.has(e)?e.startsWith("scale")?Tk(n[1]):Sk:_k,Fk=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Mk(e){for(const n in e)if(!Fk.has(n))return!0;return!1}const Xd=(e,n,i,o={},l,u)=>d=>{const h=Qd(o,e)||{},m=h.delay||o.delay||0;let{elapsed:g=0}=o;g=g-qt(m);const x={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:e,motionValue:n,element:u?void 0:l};Mk(h)||Object.assign(x,Dk(e,x)),x.duration&&(x.duration=qt(x.duration)),x.repeatDelay&&(x.repeatDelay=qt(x.repeatDelay)),x.from!==void 0&&(x.keyframes[0]=x.from);let y=!1;if((x.type===!1||x.duration===0&&!x.repeatDelay)&&(ld(x),x.delay===0&&(y=!0)),(Ir.instantAnimations||Ir.skipAnimations||l!=null&&l.shouldSkipAnimations||h.skipAnimations)&&(y=!0,ld(x),x.delay=0),x.allowFlatten=!h.type&&!h.ease,y&&!u&&n.get()!==void 0){const b=jl(x.keyframes,h);if(b!==void 0){qe.update(()=>{x.onUpdate(b),x.onComplete()});return}}return h.isSync?new ul(x):new Ak(x)},Rk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Bk(e){const n=Rk.exec(e);if(!n)return[,];const[,i,o,l]=n;return[`--${i??o}`,l]}function Ey(e,n,i=1){const[o,l]=Bk(e);if(!o)return;const u=window.getComputedStyle(n).getPropertyValue(o);if(u){const d=u.trim();return $x(d)?parseFloat(d):d}return Wd(l)?Ey(l,n,i+1):l}function Gf(e){const n=[{},{}];return e==null||e.values.forEach((i,o)=>{n[0][o]=i.get(),n[1][o]=i.getVelocity()}),n}function Zd(e,n,i,o){if(typeof n=="function"){const[l,u]=Gf(o);n=n(i!==void 0?i:e.custom,l,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[l,u]=Gf(o);n=n(i!==void 0?i:e.custom,l,u)}return n}function ca(e,n,i){const o=e.getProps();return Zd(o,n,i!==void 0?i:o.custom,e)}const Sy=new Set(["width","height","top","left","right","bottom",...ri]),cd=e=>Array.isArray(e);function Lk(e,n,i){e.hasValue(n)?e.getValue(n).set(i):e.addValue(n,ti(i))}function Ik(e){return cd(e)?e[e.length-1]||0:e}function zk(e,n){const i=ca(e,n);let{transitionEnd:o={},transition:l={},...u}=i||{};u={...u,...o};for(const d in u){const h=Ik(u[d]);Lk(e,d,h)}}const wt=e=>!!(e&&e.getVelocity);function Ok(e){return!!(wt(e)&&e.add)}function ud(e,n){const i=e.getValue("willChange");if(Ok(i))return i.add(n);if(!i&&Ir.WillChange){const o=new Ir.WillChange("auto");e.addValue("willChange",o),o.add(n)}}function Jd(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Vk="framerAppearId",Ty="data-"+Jd(Vk);function Py(e){return e.props[Ty]}function $k({protectedKeys:e,needsAnimating:n},i){const o=e.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,o}function _y(e,n,{delay:i=0,transitionOverride:o,type:l}={}){let{transition:u,transitionEnd:d,...h}=n;const m=e.getDefaultTransition();u=u?Cy(u,m):m;const g=u==null?void 0:u.reduceMotion,x=u==null?void 0:u.skipAnimations;o&&(u=o);const y=[],b=l&&e.animationState&&e.animationState.getState()[l],w=u==null?void 0:u.path;w&&w.animateVisualElement(e,h,u,i,y);for(const N in h){const E=e.getValue(N,e.latestValues[N]??null),C=h[N];if(C===void 0||b&&$k(b,N))continue;const M={delay:i,...Qd(u||{},N)};x&&(M.skipAnimations=!0);const I=E.get();if(I!==void 0&&!E.isAnimating()&&!Array.isArray(C)&&C===I&&!M.velocity){qe.update(()=>E.set(C));continue}let z=!1;if(window.MotionHandoffAnimation){const F=Py(e);if(F){const q=window.MotionHandoffAnimation(F,N,qe);q!==null&&(M.startTime=q,z=!0)}}ud(e,N);const R=g??e.shouldReduceMotion;E.start(Xd(N,E,C,R&&Sy.has(N)?{type:!1}:M,e,z));const U=E.animation;U&&y.push(U)}if(d){const N=()=>qe.update(()=>{d&&zk(e,d)});y.length?Promise.all(y).then(N):N()}return y}function dd(e,n,i={}){var m;const o=ca(e,n,i.type==="exit"?(m=e.presenceContext)==null?void 0:m.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(l=i.transitionOverride);const u=o?()=>Promise.all(_y(e,o,i)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(g=0)=>{const{delayChildren:x=0,staggerChildren:y,staggerDirection:b}=l;return Wk(e,n,g,x,y,b,i)}:()=>Promise.resolve(),{when:h}=l;if(h){const[g,x]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>x())}else return Promise.all([u(),d(i.delay)])}function Wk(e,n,i=0,o=0,l=0,u=1,d){const h=[];for(const m of e.variantChildren)m.notify("AnimationStart",n),h.push(dd(m,n,{...d,delay:i+(typeof o=="function"?0:o)+Ay(e.variantChildren,m,o,l,u)}).then(()=>m.notify("AnimationComplete",n)));return Promise.all(h)}function Uk(e,n,i={}){e.notify("AnimationStart",n);let o;if(Array.isArray(n)){const l=n.map(u=>dd(e,u,i));o=Promise.all(l)}else if(typeof n=="string")o=dd(e,n,i);else{const l=typeof n=="function"?ca(e,n,i.custom):n;o=Promise.all(_y(e,l,i))}return o.then(()=>{e.notify("AnimationComplete",n)})}const Hk={test:e=>e==="auto",parse:e=>e},Dy=e=>n=>n.test(e),Fy=[ni,ue,Bn,tr,xN,gN,Hk],qf=e=>Fy.find(Dy(e));function Gk(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Ux(e):!0}const qk=new Set(["brightness","contrast","saturate","opacity"]);function Yk(e){const[n,i]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=i.match(Ud)||[];if(!o)return e;const l=i.replace(o,"");let u=qk.has(n)?1:0;return o!==i&&(u*=100),n+"("+u+l+")"}const Kk=/\b([a-z-]*)\(.*?\)/gu,hd={...Cn,getAnimatableNone:e=>{const n=e.match(Kk);return n?n.map(Yk).join(" "):e}},md={...Cn,getAnimatableNone:e=>{const n=Cn.parse(e);return Cn.createTransformer(e)(n.map(o=>typeof o=="number"?0:typeof o=="object"?{...o,alpha:1}:o))}},Yf={...ni,transform:Math.round},Qk={rotate:tr,pathRotation:tr,rotateX:tr,rotateY:tr,rotateZ:tr,scale:Vo,scaleX:Vo,scaleY:Vo,scaleZ:Vo,skew:tr,skewX:tr,skewY:tr,distance:ue,translateX:ue,translateY:ue,translateZ:ue,x:ue,y:ue,z:ue,perspective:ue,transformPerspective:ue,opacity:hs,originX:Mf,originY:Mf,originZ:ue},dl={borderWidth:ue,borderTopWidth:ue,borderRightWidth:ue,borderBottomWidth:ue,borderLeftWidth:ue,borderRadius:ue,borderTopLeftRadius:ue,borderTopRightRadius:ue,borderBottomRightRadius:ue,borderBottomLeftRadius:ue,width:ue,maxWidth:ue,height:ue,maxHeight:ue,top:ue,right:ue,bottom:ue,left:ue,inset:ue,insetBlock:ue,insetBlockStart:ue,insetBlockEnd:ue,insetInline:ue,insetInlineStart:ue,insetInlineEnd:ue,padding:ue,paddingTop:ue,paddingRight:ue,paddingBottom:ue,paddingLeft:ue,paddingBlock:ue,paddingBlockStart:ue,paddingBlockEnd:ue,paddingInline:ue,paddingInlineStart:ue,paddingInlineEnd:ue,margin:ue,marginTop:ue,marginRight:ue,marginBottom:ue,marginLeft:ue,marginBlock:ue,marginBlockStart:ue,marginBlockEnd:ue,marginInline:ue,marginInlineStart:ue,marginInlineEnd:ue,fontSize:ue,backgroundPositionX:ue,backgroundPositionY:ue,...Qk,zIndex:Yf,fillOpacity:hs,strokeOpacity:hs,numOctaves:Yf},Xk={...dl,color:lt,backgroundColor:lt,outlineColor:lt,fill:lt,stroke:lt,borderColor:lt,borderTopColor:lt,borderRightColor:lt,borderBottomColor:lt,borderLeftColor:lt,filter:hd,WebkitFilter:hd,mask:md,WebkitMask:md},My=e=>Xk[e],Zk=new Set([hd,md]);function Ry(e,n){let i=My(e);return Zk.has(i)||(i=Cn),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const Jk=new Set(["auto","none","0"]);function eA(e,n,i){let o=0,l;for(;o<e.length&&!l;){const u=e[o];typeof u=="string"&&!Jk.has(u)&&ei(u).values.length&&(l=e[o]),o++}if(l&&i)for(const u of n)e[u]=Ry(i,l)}class tA extends Kd{constructor(n,i,o,l,u){super(n,i,o,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let x=0;x<n.length;x++){let y=n[x];if(typeof y=="string"&&(y=y.trim(),Wd(y))){const b=Ey(y,i.current);b!==void 0&&(n[x]=b),x===n.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!Sy.has(o)||n.length!==2)return;const[l,u]=n,d=qf(l),h=qf(u),m=Ff(l),g=Ff(u);if(m!==g&&Lr[o]){this.needsMeasurement=!0;return}if(d!==h)if($f(d)&&$f(h))for(let x=0;x<n.length;x++){const y=n[x];typeof y=="string"&&(n[x]=parseFloat(y))}else Lr[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,o=[];for(let l=0;l<n.length;l++)(n[l]===null||Gk(n[l]))&&o.push(l);o.length&&eA(n,o,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:o}=this;if(!n||!n.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Lr[o](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const l=i[i.length-1];l!==void 0&&n.getValue(o,l).jump(l,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:o}=this;if(!n||!n.current)return;const l=n.getValue(i);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,d=o[u];o[u]=Lr[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([m,g])=>{n.getValue(m).set(g)}),this.resolveNoneKeyframes()}}function By(e,n,i){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let o=document;const l=(i==null?void 0:i[e])??o.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e).filter(o=>o!=null)}const pd=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function Zo(e){return Wx(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:eh}=ry(queueMicrotask,!1),Nn={x:!1,y:!1};function Ly(){return Nn.x||Nn.y}function nA(e){return e==="x"||e==="y"?Nn[e]?null:(Nn[e]=!0,()=>{Nn[e]=!1}):Nn.x||Nn.y?null:(Nn.x=Nn.y=!0,()=>{Nn.x=Nn.y=!1})}function Iy(e,n){const i=By(e),o=new AbortController,l={passive:!0,...n,signal:o.signal};return[i,l,()=>o.abort()]}function rA(e){return!(e.pointerType==="touch"||Ly())}function aA(e,n,i={}){const[o,l,u]=Iy(e,i);return o.forEach(d=>{let h=!1,m=!1,g;const x=()=>{d.removeEventListener("pointerleave",N)},y=C=>{g&&(g(C),g=void 0),x()},b=C=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),m&&(m=!1,y(C))},w=()=>{h=!0,window.addEventListener("pointerup",b,l),window.addEventListener("pointercancel",b,l)},N=C=>{if(C.pointerType!=="touch"){if(h){m=!0;return}y(C)}},E=C=>{if(!rA(C))return;m=!1;const M=n(d,C);typeof M=="function"&&(g=M,d.addEventListener("pointerleave",N,l))};d.addEventListener("pointerenter",E,l),d.addEventListener("pointerdown",w,l)}),u}const zy=(e,n)=>n?e===n?!0:zy(e,n.parentElement):!1,th=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,iA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function sA(e){return iA.has(e.tagName)||e.isContentEditable===!0}const oA=new Set(["INPUT","SELECT","TEXTAREA"]);function lA(e){return oA.has(e.tagName)||e.isContentEditable===!0}const Jo=new WeakSet;function Kf(e){return n=>{n.key==="Enter"&&e(n)}}function _u(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const cA=(e,n)=>{const i=e.currentTarget;if(!i)return;const o=Kf(()=>{if(Jo.has(i))return;_u(i,"down");const l=Kf(()=>{_u(i,"up")}),u=()=>_u(i,"cancel");i.addEventListener("keyup",l,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",o,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),n)};function Qf(e){return th(e)&&!Ly()}const Xf=new WeakSet;function uA(e,n,i={}){const[o,l,u]=Iy(e,i),d=h=>{const m=h.currentTarget;if(!Qf(h)||Xf.has(h))return;Jo.add(m),i.stopPropagation&&Xf.add(h);const g=n(m,h),x=(w,N)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",b),Jo.has(m)&&Jo.delete(m),Qf(w)&&typeof g=="function"&&g(w,{success:N})},y=w=>{x(w,m===window||m===document||i.useGlobalTarget||zy(m,w.target))},b=w=>{x(w,!1)};window.addEventListener("pointerup",y,l),window.addEventListener("pointercancel",b,l)};return o.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,l),Zo(h)&&(h.addEventListener("focus",g=>cA(g,l)),!sA(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function nh(e){return Wx(e)&&"ownerSVGElement"in e}const el=new WeakMap;let Fr;const Oy=(e,n,i)=>(o,l)=>l&&l[0]?l[0][e+"Size"]:nh(o)&&"getBBox"in o?o.getBBox()[n]:o[i],dA=Oy("inline","width","offsetWidth"),hA=Oy("block","height","offsetHeight");function mA({target:e,borderBoxSize:n}){var i;(i=el.get(e))==null||i.forEach(o=>{o(e,{get width(){return dA(e,n)},get height(){return hA(e,n)}})})}function pA(e){e.forEach(mA)}function fA(){typeof ResizeObserver>"u"||(Fr=new ResizeObserver(pA))}function gA(e,n){Fr||fA();const i=By(e);return i.forEach(o=>{let l=el.get(o);l||(l=new Set,el.set(o,l)),l.add(n),Fr==null||Fr.observe(o)}),()=>{i.forEach(o=>{const l=el.get(o);l==null||l.delete(n),l!=null&&l.size||Fr==null||Fr.unobserve(o)})}}const tl=new Set;let Ka;function xA(){Ka=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};tl.forEach(n=>n(e))},window.addEventListener("resize",Ka)}function yA(e){return tl.add(e),Ka||xA(),()=>{tl.delete(e),!tl.size&&typeof Ka=="function"&&(window.removeEventListener("resize",Ka),Ka=void 0)}}function Zf(e,n){return typeof e=="function"?yA(e):gA(e,n)}function vA(e){return nh(e)&&e.tagName==="svg"}const bA=[...Fy,lt,Cn],wA=e=>bA.find(Dy(e)),Jf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qa=()=>({x:Jf(),y:Jf()}),eg=()=>({min:0,max:0}),ht=()=>({x:eg(),y:eg()}),jA=new WeakMap;function Nl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ms(e){return typeof e=="string"||Array.isArray(e)}const rh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ah=["initial",...rh];function kl(e){return Nl(e.animate)||ah.some(n=>ms(e[n]))}function Vy(e){return!!(kl(e)||e.variants)}function NA(e,n,i){for(const o in n){const l=n[o],u=i[o];if(wt(l))e.addValue(o,l);else if(wt(u))e.addValue(o,ti(l,{owner:e}));else if(u!==l)if(e.hasValue(o)){const d=e.getValue(o);d.liveStyle===!0?d.jump(l):d.hasAnimated||d.set(l)}else{const d=e.getStaticValue(o);e.addValue(o,ti(d!==void 0?d:l,{owner:e}))}}for(const o in i)n[o]===void 0&&e.removeValue(o);return n}const fd={current:null},$y={current:!1},kA=typeof window<"u";function AA(){if($y.current=!0,!!kA)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>fd.current=e.matches;e.addEventListener("change",n),n()}else fd.current=!1}const tg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let hl={};function Wy(e){hl=e}function CA(){return hl}class EA{scrapeMotionValuesFromProps(n,i,o){return{}}constructor({parent:n,props:i,presenceContext:o,reducedMotionConfig:l,skipAnimations:u,blockInitialAnimation:d,visualState:h},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Kd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Ft.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,qe.render(this.render,!1,!0))};const{latestValues:g,renderState:x}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=x,this.parent=n,this.props=i,this.presenceContext=o,this.depth=n?n.depth+1:0,this.reducedMotionConfig=l,this.skipAnimationsConfig=u,this.options=m,this.blockInitialAnimation=!!d,this.isControllingVariants=kl(i),this.isVariantNode=Vy(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const N=b[w];g[w]!==void 0&&wt(N)&&N.set(g[w])}}mount(n){var i,o;if(this.hasBeenMounted)for(const l in this.initialValues)(i=this.values.get(l))==null||i.jump(this.initialValues[l]),this.latestValues[l]=this.initialValues[l];this.current=n,jA.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,u)=>this.bindToMotionValue(u,l)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:($y.current||AA(),this.shouldReduceMotion=fd.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(o=this.parent)==null||o.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),zr(this.notifyUpdate),zr(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const o=this.features[i];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&ky.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:m,ease:g,duration:x}=i.accelerate,y=new jy({element:this.current,name:n,keyframes:h,times:m,ease:g,duration:qt(x)}),b=d(y);this.valueSubscriptions.set(n,()=>{b(),y.cancel()});return}const o=ai.has(n);o&&this.onBindTransform&&this.onBindTransform();const l=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&qe.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{l(),u&&u()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in hl){const i=hl[n];if(!i)continue;const{isEnabled:o,Feature:l}=i;if(!this.features[n]&&l&&o(this.props)&&(this.features[n]=new l(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ht()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<tg.length;o++){const l=tg[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,d=n[u];d&&(this.propEventSubscriptions[l]=this.on(l,d))}this.prevMotionValues=NA(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const o=this.values.get(n);i!==o&&(o&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let o=this.values.get(n);return o===void 0&&i!==void 0&&(o=ti(i===null?void 0:i,{owner:this}),this.addValue(n,o)),o}readValue(n,i){let o=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return o!=null&&(typeof o=="string"&&($x(o)||Ux(o))?o=parseFloat(o):!wA(o)&&Cn.test(i)&&(o=Ry(n,i)),this.setBaseTarget(n,wt(o)?o.get():o)),wt(o)?o.get():o}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const d=Zd(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(o=d[n])}if(i&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,n);return l!==void 0&&!wt(l)?l:this.initialValues[n]!==void 0&&o===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new Od),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){eh.render(this.render)}}class Uy extends EA{constructor(){super(...arguments),this.KeyframeResolver=tA}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const o=n.style;return o?o[i]:void 0}removeValueFromRenderState(n,{vars:i,style:o}){delete i[n],delete o[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;wt(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Or{constructor(n){this.isMounted=!1,this.node=n}update(){}}function Hy({top:e,left:n,right:i,bottom:o}){return{x:{min:n,max:i},y:{min:e,max:o}}}function SA({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function TA(e,n){if(!n)return e;const i=n({x:e.left,y:e.top}),o=n({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function Du(e){return e===void 0||e===1}function gd({scale:e,scaleX:n,scaleY:i}){return!Du(e)||!Du(n)||!Du(i)}function ra(e){return gd(e)||Gy(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Gy(e){return ng(e.x)||ng(e.y)}function ng(e){return e&&e!=="0%"}function ml(e,n,i){const o=e-i,l=n*o;return i+l}function rg(e,n,i,o,l){return l!==void 0&&(e=ml(e,l,o)),ml(e,i,o)+n}function xd(e,n=0,i=1,o,l){e.min=rg(e.min,n,i,o,l),e.max=rg(e.max,n,i,o,l)}function qy(e,{x:n,y:i}){xd(e.x,n.translate,n.scale,n.originPoint),xd(e.y,i.translate,i.scale,i.originPoint)}const ag=.999999999999,ig=1.0000000000001;function PA(e,n,i,o=!1){var h;const l=i.length;if(!l)return;n.x=n.y=1;let u,d;for(let m=0;m<l;m++){u=i[m],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Rn(e.x,-u.scroll.offset.x),Rn(e.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,qy(e,d)),o&&ra(u.latestValues)&&nl(e,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<ig&&n.x>ag&&(n.x=1),n.y<ig&&n.y>ag&&(n.y=1)}function Rn(e,n){e.min+=n,e.max+=n}function sg(e,n,i,o,l=.5){const u=Ge(e.min,e.max,l);xd(e,n,i,u,o)}function og(e,n){return typeof e=="string"?parseFloat(e)/100*(n.max-n.min):e}function nl(e,n,i){const o=i??e;sg(e.x,og(n.x,o.x),n.scaleX,n.scale,n.originX),sg(e.y,og(n.y,o.y),n.scaleY,n.scale,n.originY)}function Yy(e,n){return Hy(TA(e.getBoundingClientRect(),n))}function _A(e,n,i){const o=Yy(e,i),{scroll:l}=n;return l&&(Rn(o.x,l.offset.x),Rn(o.y,l.offset.y)),o}const DA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},FA=ri.length;function MA(e,n,i){let o="",l=!0;for(let d=0;d<FA;d++){const h=ri[d],m=e[h];if(m===void 0)continue;let g=!0;if(typeof m=="number")g=m===(h.startsWith("scale")?1:0);else{const x=parseFloat(m);g=h.startsWith("scale")?x===1:x===0}if(!g||i){const x=pd(m,dl[h]);if(!g){l=!1;const y=DA[h]||h;o+=`${y}(${x}) `}i&&(n[h]=x)}}const u=e.pathRotation;return u&&(l=!1,o+=`rotate(${pd(u,dl.pathRotation)}) `),o=o.trim(),i?o=i(n,l?"":o):l&&(o="none"),o}function ih(e,n,i){const{style:o,vars:l,transformOrigin:u}=e;let d=!1,h=!1;for(const m in n){const g=n[m];if(ai.has(m)){d=!0;continue}else if(iy(m)){l[m]=g;continue}else{const x=pd(g,dl[m]);m.startsWith("origin")?(h=!0,u[m]=x):o[m]=x}}if(n.transform||(d||i?o.transform=MA(n,e.transform,i):o.transform&&(o.transform="none")),h){const{originX:m="50%",originY:g="50%",originZ:x=0}=u;o.transformOrigin=`${m} ${g} ${x}`}}function Ky(e,{style:n,vars:i},o,l){const u=e.style;let d;for(d in n)u[d]=n[d];l==null||l.applyProjectionStyles(u,o);for(d in i)u.setProperty(d,i[d])}function lg(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const Zi={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(ue.test(e))e=parseFloat(e);else return e;const i=lg(e,n.target.x),o=lg(e,n.target.y);return`${i}% ${o}%`}},RA={correct:(e,{treeScale:n,projectionDelta:i})=>{const o=e,l=Cn.parse(e);if(l.length>5)return o;const u=Cn.createTransformer(e),d=typeof l[0]!="number"?1:0,h=i.x.scale*n.x,m=i.y.scale*n.y;l[0+d]/=h,l[1+d]/=m;const g=Ge(h,m,.5);return typeof l[2+d]=="number"&&(l[2+d]/=g),typeof l[3+d]=="number"&&(l[3+d]/=g),u(l)}},yd={borderRadius:{...Zi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Zi,borderTopRightRadius:Zi,borderBottomLeftRadius:Zi,borderBottomRightRadius:Zi,boxShadow:RA};function Qy(e,{layout:n,layoutId:i}){return ai.has(e)||e.startsWith("origin")||(n||i!==void 0)&&(!!yd[e]||e==="opacity")}function sh(e,n,i){var d;const o=e.style,l=n==null?void 0:n.style,u={};if(!o)return u;for(const h in o)(wt(o[h])||l&&wt(l[h])||Qy(h,e)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=o[h]);return u}function BA(e){return window.getComputedStyle(e)}class LA extends Uy{constructor(){super(...arguments),this.type="html",this.renderInstance=Ky}readValueFromInstance(n,i){var o;if(ai.has(i))return(o=this.projection)!=null&&o.isProjecting?rd(i):rk(n,i);{const l=BA(n),u=(iy(i)?l.getPropertyValue(i):l[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return Yy(n,i)}build(n,i,o){ih(n,i,o.transformTemplate)}scrapeMotionValuesFromProps(n,i,o){return sh(n,i,o)}}const IA={offset:"stroke-dashoffset",array:"stroke-dasharray"},zA={offset:"strokeDashoffset",array:"strokeDasharray"};function OA(e,n,i=1,o=0,l=!0){e.pathLength=1;const u=l?IA:zA;e[u.offset]=`${-o}`,e[u.array]=`${n} ${i}`}const VA=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Xy(e,{attrX:n,attrY:i,attrScale:o,pathLength:l,pathSpacing:u=1,pathOffset:d=0,...h},m,g,x){if(ih(e,h,g),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:b}=e;y.transform&&(b.transform=y.transform,delete y.transform),(b.transform||y.transformOrigin)&&(b.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),b.transform&&(b.transformBox=(x==null?void 0:x.transformBox)??"fill-box",delete y.transformBox);for(const w of VA)y[w]!==void 0&&(b[w]=y[w],delete y[w]);n!==void 0&&(y.x=n),i!==void 0&&(y.y=i),o!==void 0&&(y.scale=o),l!==void 0&&OA(y,l,u,d,!1)}const Zy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Jy=e=>typeof e=="string"&&e.toLowerCase()==="svg";function $A(e,n,i,o){Ky(e,n,void 0,o);for(const l in n.attrs)e.setAttribute(Zy.has(l)?l:Jd(l),n.attrs[l])}function e0(e,n,i){const o=sh(e,n,i);for(const l in e)if(wt(e[l])||wt(n[l])){const u=ri.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[u]=e[l]}return o}class WA extends Uy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ht}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(ai.has(i)){const o=My(i);return o&&o.default||0}return i=Zy.has(i)?i:Jd(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,o){return e0(n,i,o)}build(n,i,o){Xy(n,i,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(n,i,o,l){$A(n,i,o,l)}mount(n){this.isSVGTag=Jy(n.tagName),super.mount(n)}}const UA=ah.length;function t0(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?t0(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const n={};for(let i=0;i<UA;i++){const o=ah[i],l=e.props[o];(ms(l)||l===!1)&&(n[o]=l)}return n}function n0(e,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==e.length)return!1;for(let o=0;o<i;o++)if(n[o]!==e[o])return!1;return!0}const HA=[...rh].reverse(),GA=rh.length;function qA(e){return n=>Promise.all(n.map(({animation:i,options:o})=>Uk(e,i,o)))}function YA(e){let n=qA(e),i=cg(),o=!0,l=!1;const u=g=>(x,y)=>{var w;const b=ca(e,y,g==="exit"?(w=e.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:N,transitionEnd:E,...C}=b;x={...x,...C,...E}}return x};function d(g){n=g(e)}function h(g){const{props:x}=e,y=t0(e.parent)||{},b=[],w=new Set;let N={},E=1/0;for(let M=0;M<GA;M++){const I=HA[M],z=i[I],R=x[I]!==void 0?x[I]:y[I],U=ms(R),F=I===g?z.isActive:null;F===!1&&(E=M);let q=R===y[I]&&R!==x[I]&&U;if(q&&(o||l)&&e.manuallyAnimateOnMount&&(q=!1),z.protectedKeys={...N},!z.isActive&&F===null||!R&&!z.prevProp||Nl(R)||typeof R=="boolean")continue;if(I==="exit"&&z.isActive&&F!==!0){z.prevResolvedValues&&(N={...N,...z.prevResolvedValues});continue}const A=KA(z.prevProp,R);let ae=A||I===g&&z.isActive&&!q&&U||M>E&&U,G=!1;const de=Array.isArray(R)?R:[R];let ee=de.reduce(u(I),{});F===!1&&(ee={});const{prevResolvedValues:re={}}=z,Z={...re,...ee},we=Y=>{ae=!0,w.has(Y)&&(G=!0,w.delete(Y)),z.needsAnimating[Y]=!0;const $=e.getValue(Y);$&&($.liveStyle=!1)};for(const Y in Z){const $=ee[Y],H=re[Y];if(N.hasOwnProperty(Y))continue;let T=!1;cd($)&&cd(H)?T=!n0($,H)||A:T=$!==H,T?$!=null?we(Y):w.add(Y):$!==void 0&&w.has(Y)?we(Y):z.protectedKeys[Y]=!0}z.prevProp=R,z.prevResolvedValues=ee,z.isActive&&(N={...N,...ee}),(o||l)&&e.blockInitialAnimation&&(ae=!1);const ge=q&&A;ae&&(!ge||G)&&b.push(...de.map(Y=>{const $={type:I};if(typeof Y=="string"&&(o||l)&&!ge&&e.manuallyAnimateOnMount&&e.parent){const{parent:H}=e,T=ca(H,Y);if(H.enteringChildren&&T){const{delayChildren:W}=T.transition||{};$.delay=Ay(H.enteringChildren,e,W)}}return{animation:Y,options:$}}))}if(w.size){const M={};if(typeof x.initial!="boolean"){const I=ca(e,Array.isArray(x.initial)?x.initial[0]:x.initial);I&&I.transition&&(M.transition=I.transition)}w.forEach(I=>{const z=e.getBaseTarget(I),R=e.getValue(I);R&&(R.liveStyle=!0),M[I]=z??null}),b.push({animation:M})}let C=!!b.length;return o&&(x.initial===!1||x.initial===x.animate)&&!e.manuallyAnimateOnMount&&(C=!1),o=!1,l=!1,C?n(b):Promise.resolve()}function m(g,x){var b;if(i[g].isActive===x)return Promise.resolve();(b=e.variantChildren)==null||b.forEach(w=>{var N;return(N=w.animationState)==null?void 0:N.setActive(g,x)}),i[g].isActive=x;const y=h(g);for(const w in i)i[w].protectedKeys={};return y}return{animateChanges:h,setActive:m,setAnimateFunction:d,getState:()=>i,reset:()=>{i=cg(),l=!0}}}function KA(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!n0(n,e):!1}function na(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function cg(){return{animate:na(!0),whileInView:na(),whileHover:na(),whileTap:na(),whileDrag:na(),whileFocus:na(),exit:na()}}function vd(e,n){e.min=n.min,e.max=n.max}function jn(e,n){vd(e.x,n.x),vd(e.y,n.y)}function ug(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}const r0=1e-4,QA=1-r0,XA=1+r0,a0=.01,ZA=0-a0,JA=0+a0;function Mt(e){return e.max-e.min}function eC(e,n,i){return Math.abs(e-n)<=i}function dg(e,n,i,o=.5){e.origin=o,e.originPoint=Ge(n.min,n.max,e.origin),e.scale=Mt(i)/Mt(n),e.translate=Ge(i.min,i.max,e.origin)-e.originPoint,(e.scale>=QA&&e.scale<=XA||isNaN(e.scale))&&(e.scale=1),(e.translate>=ZA&&e.translate<=JA||isNaN(e.translate))&&(e.translate=0)}function is(e,n,i,o){dg(e.x,n.x,i.x,o?o.originX:void 0),dg(e.y,n.y,i.y,o?o.originY:void 0)}function hg(e,n,i,o=0){const l=o?Ge(i.min,i.max,o):i.min;e.min=l+n.min,e.max=e.min+Mt(n)}function tC(e,n,i,o){hg(e.x,n.x,i.x,o==null?void 0:o.x),hg(e.y,n.y,i.y,o==null?void 0:o.y)}function mg(e,n,i,o=0){const l=o?Ge(i.min,i.max,o):i.min;e.min=n.min-l,e.max=e.min+Mt(n)}function pl(e,n,i,o){mg(e.x,n.x,i.x,o==null?void 0:o.x),mg(e.y,n.y,i.y,o==null?void 0:o.y)}function pg(e,n,i,o,l){return e-=n,e=ml(e,1/i,o),l!==void 0&&(e=ml(e,1/l,o)),e}function nC(e,n=0,i=1,o=.5,l,u=e,d=e){if(Bn.test(n)&&(n=parseFloat(n),n=Ge(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=Ge(u.min,u.max,o);e===u&&(h-=n),e.min=pg(e.min,n,i,h,l),e.max=pg(e.max,n,i,h,l)}function fg(e,n,[i,o,l],u,d){nC(e,n[i],n[o],n[l],n.scale,u,d)}const rC=["x","scaleX","originX"],aC=["y","scaleY","originY"];function gg(e,n,i,o){fg(e.x,n,rC,i?i.x:void 0,o?o.x:void 0),fg(e.y,n,aC,i?i.y:void 0,o?o.y:void 0)}function xg(e){return e.translate===0&&e.scale===1}function i0(e){return xg(e.x)&&xg(e.y)}function yg(e,n){return e.min===n.min&&e.max===n.max}function iC(e,n){return yg(e.x,n.x)&&yg(e.y,n.y)}function vg(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function s0(e,n){return vg(e.x,n.x)&&vg(e.y,n.y)}function bg(e){return Mt(e.x)/Mt(e.y)}function wg(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function Mn(e){return[e("x"),e("y")]}function sC(e,n,i){let o="";const l=e.x.translate/n.x,u=e.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((l||u||d)&&(o=`translate3d(${l}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(o+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:x,pathRotation:y,rotateX:b,rotateY:w,skewX:N,skewY:E}=i;g&&(o=`perspective(${g}px) ${o}`),x&&(o+=`rotate(${x}deg) `),y&&(o+=`rotate(${y}deg) `),b&&(o+=`rotateX(${b}deg) `),w&&(o+=`rotateY(${w}deg) `),N&&(o+=`skewX(${N}deg) `),E&&(o+=`skewY(${E}deg) `)}const h=e.x.scale*n.x,m=e.y.scale*n.y;return(h!==1||m!==1)&&(o+=`scale(${h}, ${m})`),o||"none"}const o0=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],oC=o0.length,jg=e=>typeof e=="string"?parseFloat(e):e,Ng=e=>typeof e=="number"||ue.test(e);function lC(e,n,i,o,l,u){l?(e.opacity=Ge(0,i.opacity??1,cC(o)),e.opacityExit=Ge(n.opacity??1,0,uC(o))):u&&(e.opacity=Ge(n.opacity??1,i.opacity??1,o));for(let d=0;d<oC;d++){const h=o0[d];let m=kg(n,h),g=kg(i,h);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||Ng(m)===Ng(g)?(e[h]=Math.max(Ge(jg(m),jg(g),o),0),(Bn.test(g)||Bn.test(m))&&(e[h]+="%")):e[h]=g}(n.rotate||i.rotate)&&(e.rotate=Ge(n.rotate||0,i.rotate||0,o))}function kg(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const cC=l0(0,.5,Jx),uC=l0(.5,.95,ln);function l0(e,n,i){return o=>o<e?0:o>n?1:i(ds(e,n,o))}function dC(e,n,i){const o=wt(e)?e:ti(e);return o.start(Xd("",o,n,i)),o.animation}function ps(e,n,i,o={passive:!0}){return e.addEventListener(n,i,o),()=>e.removeEventListener(n,i)}const hC=(e,n)=>e.depth-n.depth;class mC{constructor(){this.children=[],this.isDirty=!1}add(n){Id(this.children,n),this.isDirty=!0}remove(n){sl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(hC),this.isDirty=!1,this.children.forEach(n)}}function pC(e,n){const i=Ft.now(),o=({timestamp:l})=>{const u=l-i;u>=n&&(zr(o),e(u-n))};return qe.setup(o,!0),()=>zr(o)}function rl(e){return wt(e)?e.get():e}class fC{constructor(){this.members=[]}add(n){Id(this.members,n);for(let i=this.members.length-1;i>=0;i--){const o=this.members[i];if(o===n||o===this.lead||o===this.prevLead)continue;const l=o.instance;(!l||l.isConnected===!1)&&!o.snapshot&&(sl(this.members,o),o.unmount())}n.scheduleRender()}remove(n){if(sl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let o=this.members.indexOf(n)-1;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1&&((i=l.instance)==null?void 0:i.isConnected)!==!1)return this.promote(l),!0}return!1}promote(n,i){var l;const o=this.lead;if(n!==o&&(this.prevLead=o,this.lead=n,n.show(),o)){o.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=o.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=o,i&&(o.preserveOpacity=!0),o.snapshot&&(n.snapshot=o.snapshot,n.snapshot.latestValues=o.animationValues||o.latestValues),(l=n.root)!=null&&l.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,o,l,u,d;(o=(i=n.options).onExitComplete)==null||o.call(i),(d=(l=n.resumingFrom)==null?void 0:(u=l.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const al={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Fu=["","X","Y","Z"],gC=1e3;let xC=0;function Mu(e,n,i,o){const{latestValues:l}=n;l[e]&&(i[e]=l[e],n.setStaticValue(e,0),o&&(o[e]=0))}function c0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const i=Py(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:l,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",qe,!(l||u))}const{parent:o}=e;o&&!o.hasCheckedOptimisedAppear&&c0(o)}function u0({attachResizeListener:e,defaultParent:n,measureScroll:i,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(d={},h=n==null?void 0:n()){this.id=xC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(bC),this.nodes.forEach(CC),this.nodes.forEach(EC),this.nodes.forEach(wC)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new mC)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Od),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const m=this.eventHandlers.get(d);m&&m.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=nh(d)&&!vA(d),this.instance=d;const{layoutId:h,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||h)&&(this.isLayoutDirty=!0),e){let x,y=0;const b=()=>this.root.updateBlockedByResize=!1;qe.read(()=>{y=window.innerWidth}),e(d,()=>{const w=window.innerWidth;w!==y&&(y=w,this.root.updateBlockedByResize=!0,x&&x(),x=pC(b,250),al.hasAnimatedSinceResize&&(al.hasAnimatedSinceResize=!1,this.nodes.forEach(Eg)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||m)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:y,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const N=this.options.transition||g.getDefaultTransition()||DC,{onLayoutAnimationStart:E,onLayoutAnimationComplete:C}=g.getProps(),M=!this.targetLayout||!s0(this.targetLayout,w),I=!y&&b;if(this.options.layoutRoot||this.resumeFrom||I||y&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const z={...Qd(N,"layout"),onPlay:E,onComplete:C};(g.shouldReduceMotion||this.options.layoutRoot)&&(z.delay=0,z.type=!1),this.startAnimation(z),this.setAnimationOrigin(x,I,z.path)}else y||Eg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),zr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(SC),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&c0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let x=0;x<this.path.length;x++){const y=this.path[x];y.shouldResetTransform=!0,(typeof y.latestValues.x=="string"||typeof y.latestValues.y=="string")&&(y.isLayoutDirty=!0),y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:h,layout:m}=this.options;if(h===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const m=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),m&&this.nodes.forEach(NC),this.nodes.forEach(Ag);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Cg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(kC),this.nodes.forEach(AC),this.nodes.forEach(yC),this.nodes.forEach(vC)):this.nodes.forEach(Cg),this.clearAllSnapshots();const h=Ft.now();bt.delta=In(0,1e3/60,h-bt.timestamp),bt.timestamp=h,bt.isProcessing=!0,Au.update.process(bt),Au.preRender.process(bt),Au.render.process(bt),bt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,eh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(jC),this.sharedNodes.forEach(TC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Mt(this.snapshot.measuredBox.x)&&!Mt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ht()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const m=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:m,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!l)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!i0(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,x=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||ra(this.latestValues)||x)&&(l(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let m=this.removeElementScroll(h);return d&&(m=this.removeTransform(m)),FC(m),{animationId:this.root.animationId,measuredBox:h,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return ht();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(MC))){const{scroll:x}=this.root;x&&(Rn(h.x,x.offset.x),Rn(h.y,x.offset.y))}return h}removeElementScroll(d){var m;const h=ht();if(jn(h,d),(m=this.scroll)!=null&&m.wasRoot)return h;for(let g=0;g<this.path.length;g++){const x=this.path[g],{scroll:y,options:b}=x;x!==this.root&&y&&b.layoutScroll&&(y.wasRoot&&jn(h,d),Rn(h.x,y.offset.x),Rn(h.y,y.offset.y))}return h}applyTransform(d,h=!1,m){var x,y;const g=m||ht();jn(g,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(Rn(g.x,-w.scroll.offset.x),Rn(g.y,-w.scroll.offset.y)),ra(w.latestValues)&&nl(g,w.latestValues,(x=w.layout)==null?void 0:x.layoutBox)}return ra(this.latestValues)&&nl(g,this.latestValues,(y=this.layout)==null?void 0:y.layoutBox),g}removeTransform(d){var m;const h=ht();jn(h,d);for(let g=0;g<this.path.length;g++){const x=this.path[g];if(!ra(x.latestValues))continue;let y;x.instance&&(gd(x.latestValues)&&x.updateSnapshot(),y=ht(),jn(y,x.measurePageBox())),gg(h,x.latestValues,(m=x.snapshot)==null?void 0:m.layoutBox,y)}return ra(this.latestValues)&&gg(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==bt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:y}=this.options;if(!this.layout||!(x||y))return;this.resolvedRelativeTargetAt=bt.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ht(),this.targetWithTransforms=ht()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),tC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):jn(this.target,this.layout.layoutBox),qy(this.target,this.targetDelta)):jn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||gd(this.parent.latestValues)||Gy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,m){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ht(),this.relativeTargetOrigin=ht(),pl(this.relativeTargetOrigin,h,m,this.options.layoutAnchor||void 0),jn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var N;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let m=!0;if((this.isProjectionDirty||(N=this.parent)!=null&&N.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===bt.timestamp&&(m=!1),m)return;const{layout:g,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||x))return;jn(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,b=this.treeScale.y;PA(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ht());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ug(this.prevProjectionDelta.x,this.projectionDelta.x),ug(this.prevProjectionDelta.y,this.projectionDelta.y)),is(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==b||!wg(this.projectionDelta.x,this.prevProjectionDelta.x)||!wg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Qa(),this.projectionDelta=Qa(),this.projectionDeltaWithTransform=Qa()}setAnimationOrigin(d,h=!1,m){const g=this.snapshot,x=g?g.latestValues:{},y={...this.latestValues},b=Qa();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=ht(),N=g?g.source:void 0,E=this.layout?this.layout.source:void 0,C=N!==E,M=this.getStack(),I=!M||M.members.length<=1,z=!!(C&&!I&&this.options.crossfade===!0&&!this.path.some(_C));this.animationProgress=0;let R;const U=m==null?void 0:m.interpolateProjection(d);this.mixTargetDelta=F=>{const q=F/1e3,A=U==null?void 0:U(q);A?(b.x.translate=A.x,b.x.scale=Ge(d.x.scale,1,q),b.x.origin=d.x.origin,b.x.originPoint=d.x.originPoint,b.y.translate=A.y,b.y.scale=Ge(d.y.scale,1,q),b.y.origin=d.y.origin,b.y.originPoint=d.y.originPoint):(Sg(b.x,d.x,q),Sg(b.y,d.y,q)),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(pl(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),PC(this.relativeTarget,this.relativeTargetOrigin,w,q),R&&iC(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=ht()),jn(R,this.relativeTarget)),C&&(this.animationValues=y,lC(y,x,this.latestValues,q,z,I)),A&&A.rotate!==void 0&&(this.animationValues||(this.animationValues=y),this.animationValues.pathRotation=A.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,m,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(m=this.resumingFrom)==null?void 0:m.currentAnimation)==null||g.stop(),this.pendingAnimation&&(zr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qe.update(()=>{al.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ti(0)),this.motionValue.jump(0,!1),this.currentAnimation=dC(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:x=>{this.mixTargetDelta(x),d.onUpdate&&d.onUpdate(x)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:m,layout:g,latestValues:x}=d;if(!(!h||!m||!g)){if(this!==d&&this.layout&&g&&d0(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||ht();const y=Mt(this.layout.layoutBox.x);m.x.min=d.target.x.min,m.x.max=m.x.min+y;const b=Mt(this.layout.layoutBox.y);m.y.min=d.target.y.min,m.y.max=m.y.min+b}jn(h,m),nl(h,x),is(this.projectionDeltaWithTransform,this.layoutCorrected,h,x)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new fC),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:m}=d;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(h=!0),!h)return;const g={};m.z&&Mu("z",d,g,this.animationValues);for(let x=0;x<Fu.length;x++)Mu(`rotate${Fu[x]}`,d,g,this.animationValues),Mu(`skew${Fu[x]}`,d,g,this.animationValues);d.render();for(const x in g)d.setStaticValue(x,g[x]),this.animationValues&&(this.animationValues[x]=g[x]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=rl(h==null?void 0:h.pointerEvents)||"",d.transform=m?m(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=rl(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!ra(this.latestValues)&&(d.transform=m?m({},""):"none",this.hasProjected=!1);return}d.visibility="";const x=g.animationValues||g.latestValues;this.applyTransformsToTarget();let y=sC(this.projectionDeltaWithTransform,this.treeScale,x);m&&(y=m(x,y)),d.transform=y;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?x.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:d.opacity=g===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const N in yd){if(x[N]===void 0)continue;const{correct:E,applyTo:C,isCSSVariable:M}=yd[N],I=y==="none"?x[N]:E(x[N],g);if(C){const z=C.length;for(let R=0;R<z;R++)d[C[R]]=I}else M?this.options.visualElement.renderState.vars[N]=I:d[N]=I}this.options.layoutId&&(d.pointerEvents=g===this?rl(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Ag),this.root.sharedNodes.clear()}}}function yC(e){e.updateLayout()}function vC(e){var i;const n=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=e.layout,{animationType:u}=e.options,d=n.source!==e.layout.source;if(u==="size")Mn(y=>{const b=d?n.measuredBox[y]:n.layoutBox[y],w=Mt(b);b.min=o[y].min,b.max=b.min+w});else if(u==="x"||u==="y"){const y=u==="x"?"y":"x";vd(d?n.measuredBox[y]:n.layoutBox[y],o[y])}else d0(u,n.layoutBox,o)&&Mn(y=>{const b=d?n.measuredBox[y]:n.layoutBox[y],w=Mt(o[y]);b.max=b.min+w,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+w)});const h=Qa();is(h,o,n.layoutBox);const m=Qa();d?is(m,e.applyTransform(l,!0),n.measuredBox):is(m,o,n.layoutBox);const g=!i0(h);let x=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:w}=y;if(b&&w){const N=e.options.layoutAnchor||void 0,E=ht();pl(E,n.layoutBox,b.layoutBox,N);const C=ht();pl(C,o,w.layoutBox,N),s0(E,C)||(x=!0),y.options.layoutRoot&&(e.relativeTarget=C,e.relativeTargetOrigin=E,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:n,delta:m,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:x})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function bC(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function wC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function jC(e){e.clearSnapshot()}function Ag(e){e.clearMeasurements()}function NC(e){e.isLayoutDirty=!0,e.updateLayout()}function Cg(e){e.isLayoutDirty=!1}function kC(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function AC(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function Eg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function CC(e){e.resolveTargetDelta()}function EC(e){e.calcProjection()}function SC(e){e.resetSkewAndRotation()}function TC(e){e.removeLeadSnapshot()}function Sg(e,n,i){e.translate=Ge(n.translate,0,i),e.scale=Ge(n.scale,1,i),e.origin=n.origin,e.originPoint=n.originPoint}function Tg(e,n,i,o){e.min=Ge(n.min,i.min,o),e.max=Ge(n.max,i.max,o)}function PC(e,n,i,o){Tg(e.x,n.x,i.x,o),Tg(e.y,n.y,i.y,o)}function _C(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const DC={duration:.45,ease:[.4,0,.1,1]},Pg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),_g=Pg("applewebkit/")&&!Pg("chrome/")?Math.round:ln;function Dg(e){e.min=_g(e.min),e.max=_g(e.max)}function FC(e){Dg(e.x),Dg(e.y)}function d0(e,n,i){return e==="position"||e==="preserve-aspect"&&!eC(bg(n),bg(i),.2)}function MC(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const RC=u0({attachResizeListener:(e,n)=>ps(e,"resize",n),measureScroll:()=>{var e,n;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Ru={current:void 0},h0=u0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ru.current){const e=new RC({});e.mount(window),e.setOptions({layoutScroll:!0}),Ru.current=e}return Ru.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),oh=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Fg(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function BC(...e){return n=>{let i=!1;const o=e.map(l=>{const u=Fg(l,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let l=0;l<o.length;l++){const u=o[l];typeof u=="function"?u():Fg(e[l],null)}}}}function LC(...e){return j.useCallback(BC(...e),e)}class IC extends j.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(Zo(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const o=i.offsetParent,l=Zo(o)&&o.offsetWidth||0,u=Zo(o)&&o.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=l-h.width-h.left,h.bottom=u-h.height-h.top,h.direction=d.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function zC({children:e,isPresent:n,anchorX:i,anchorY:o,root:l,pop:u}){var b;const d=j.useId(),h=j.useRef(null),m=j.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:g}=j.useContext(oh),x=((b=e.props)==null?void 0:b.ref)??(e==null?void 0:e.ref),y=LC(h,x);return j.useInsertionEffect(()=>{const{width:w,height:N,top:E,left:C,right:M,bottom:I,direction:z}=m.current;if(n||u===!1||!h.current||!w||!N)return;const R=z==="rtl",U=i==="left"?R?`right: ${M}`:`left: ${C}`:R?`left: ${C}`:`right: ${M}`,F=o==="bottom"?`bottom: ${I}`:`top: ${E}`;h.current.dataset.motionPopId=d;const q=document.createElement("style");g&&(q.nonce=g);const A=l??document.head;return A.appendChild(q),q.sheet&&q.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${N}px !important;
            ${U}px !important;
            ${F}px !important;
          }
        `),()=>{var ae;(ae=h.current)==null||ae.removeAttribute("data-motion-pop-id"),A.contains(q)&&A.removeChild(q)}},[n]),r.jsx(IC,{isPresent:n,childRef:h,sizeRef:m,pop:u,children:u===!1?e:j.cloneElement(e,{ref:y})})}const OC=({children:e,initial:n,isPresent:i,onExitComplete:o,custom:l,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:m,root:g})=>{const x=Ld(VC),y=j.useId();let b=!0,w=j.useMemo(()=>(b=!1,{id:y,initial:n,isPresent:i,custom:l,onExitComplete:N=>{x.set(N,!0);for(const E of x.values())if(!E)return;o&&o()},register:N=>(x.set(N,!1),()=>x.delete(N))}),[i,x,o]);return u&&b&&(w={...w}),j.useMemo(()=>{x.forEach((N,E)=>x.set(E,!1))},[i]),j.useEffect(()=>{!i&&!x.size&&o&&o()},[i]),e=r.jsx(zC,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:m,root:g,children:e}),r.jsx(wl.Provider,{value:w,children:e})};function VC(){return new Map}function m0(e=!0){const n=j.useContext(wl);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:l}=n,u=j.useId();j.useEffect(()=>{if(e)return l(u)},[e]);const d=j.useCallback(()=>e&&o&&o(u),[u,o,e]);return!i&&o?[!1,d]:[!0]}const $o=e=>e.key||"";function Mg(e){const n=[];return j.Children.forEach(e,i=>{j.isValidElement(i)&&n.push(i)}),n}const Rg=({children:e,custom:n,initial:i=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:m="top",root:g})=>{const[x,y]=m0(d),b=j.useMemo(()=>Mg(e),[e]),w=d&&!x?[]:b.map($o),N=j.useRef(!0),E=j.useRef(b),C=Ld(()=>new Map),M=j.useRef(new Set),[I,z]=j.useState(b),[R,U]=j.useState(b);Vx(()=>{N.current=!1,E.current=b;for(let A=0;A<R.length;A++){const ae=$o(R[A]);w.includes(ae)?(C.delete(ae),M.current.delete(ae)):C.get(ae)!==!0&&C.set(ae,!1)}},[R,w.length,w.join("-")]);const F=[];if(b!==I){let A=[...b];for(let ae=0;ae<R.length;ae++){const G=R[ae],de=$o(G);w.includes(de)||(A.splice(ae,0,G),F.push(G))}return u==="wait"&&F.length&&(A=F),U(Mg(A)),z(b),null}const{forceRender:q}=j.useContext(Bd);return r.jsx(r.Fragment,{children:R.map(A=>{const ae=$o(A),G=d&&!x?!1:b===R||w.includes(ae),de=()=>{if(M.current.has(ae))return;if(C.has(ae))M.current.add(ae),C.set(ae,!0);else return;let ee=!0;C.forEach(re=>{re||(ee=!1)}),ee&&(q==null||q(),U(E.current),d&&(y==null||y()),o&&o())};return r.jsx(OC,{isPresent:G,initial:!N.current||i?void 0:!1,custom:n,presenceAffectsLayout:l,mode:u,root:g,onExitComplete:G?void 0:de,anchorX:h,anchorY:m,children:A},ae)})})},p0=j.createContext({strict:!1}),Bg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Lg=!1;function $C(){if(Lg)return;const e={};for(const n in Bg)e[n]={isEnabled:i=>Bg[n].some(o=>!!i[o])};Wy(e),Lg=!0}function f0(){return $C(),CA()}function WC(e){const n=f0();for(const i in e)n[i]={...n[i],...e[i]};Wy(n)}const UC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function fl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||UC.has(e)}let g0=e=>!fl(e);function HC(e){typeof e=="function"&&(g0=n=>n.startsWith("on")?!fl(n):e(n))}try{HC(require("@emotion/is-prop-valid").default)}catch{}function GC(e,n,i){const o={};for(const l in e)l==="values"&&typeof e.values=="object"||wt(e[l])||(g0(l)||i===!0&&fl(l)||!n&&!fl(l)||e.draggable&&l.startsWith("onDrag"))&&(o[l]=e[l]);return o}const Al=j.createContext({});function qC(e,n){if(kl(e)){const{initial:i,animate:o}=e;return{initial:i===!1||ms(i)?i:void 0,animate:ms(o)?o:void 0}}return e.inherit!==!1?n:{}}function YC(e){const{initial:n,animate:i}=qC(e,j.useContext(Al));return j.useMemo(()=>({initial:n,animate:i}),[Ig(n),Ig(i)])}function Ig(e){return Array.isArray(e)?e.join(" "):e}const lh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function x0(e,n,i){for(const o in n)!wt(n[o])&&!Qy(o,i)&&(e[o]=n[o])}function KC({transformTemplate:e},n){return j.useMemo(()=>{const i=lh();return ih(i,n,e),Object.assign({},i.vars,i.style)},[n])}function QC(e,n){const i=e.style||{},o={};return x0(o,i,e),Object.assign(o,KC(e,n)),o}function XC(e,n){const i={},o=QC(e,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=o,i}const y0=()=>({...lh(),attrs:{}});function ZC(e,n,i,o){const l=j.useMemo(()=>{const u=y0();return Xy(u,n,Jy(o),e.transformTemplate,e.style),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};x0(u,e.style,e),l.style={...u,...l.style}}return l}const JC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ch(e){return typeof e!="string"||e.includes("-")?!1:!!(JC.indexOf(e)>-1||/[A-Z]/u.test(e))}function eE(e,n,i,{latestValues:o},l,u=!1,d){const m=(d??ch(e)?ZC:XC)(n,o,l,e),g=GC(n,typeof e=="string",u),x=e!==j.Fragment?{...g,...m,ref:i}:{},{children:y}=n,b=j.useMemo(()=>wt(y)?y.get():y,[y]);return j.createElement(e,{...x,children:b})}function tE({scrapeMotionValuesFromProps:e,createRenderState:n},i,o,l){return{latestValues:nE(i,o,l,e),renderState:n()}}function nE(e,n,i,o){const l={},u=o(e,{});for(const b in u)l[b]=rl(u[b]);let{initial:d,animate:h}=e;const m=kl(e),g=Vy(e);n&&g&&!m&&e.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let x=i?i.initial===!1:!1;x=x||d===!1;const y=x?h:d;if(y&&typeof y!="boolean"&&!Nl(y)){const b=Array.isArray(y)?y:[y];for(let w=0;w<b.length;w++){const N=Zd(e,b[w]);if(N){const{transitionEnd:E,transition:C,...M}=N;for(const I in M){let z=M[I];if(Array.isArray(z)){const R=x?z.length-1:0;z=z[R]}z!==null&&(l[I]=z)}for(const I in E)l[I]=E[I]}}}return l}const v0=e=>(n,i)=>{const o=j.useContext(Al),l=j.useContext(wl),u=()=>tE(e,n,o,l);return i?u():Ld(u)},rE=v0({scrapeMotionValuesFromProps:sh,createRenderState:lh}),aE=v0({scrapeMotionValuesFromProps:e0,createRenderState:y0}),iE=Symbol.for("motionComponentSymbol");function sE(e,n,i){const o=j.useRef(i);j.useInsertionEffect(()=>{o.current=i});const l=j.useRef(null);return j.useCallback(u=>{var h;u&&((h=e.onMount)==null||h.call(e,u)),n&&(u?n.mount(u):n.unmount());const d=o.current;if(typeof d=="function")if(u){const m=d(u);typeof m=="function"&&(l.current=m)}else l.current?(l.current(),l.current=null):d(u);else d&&(d.current=u)},[n])}const b0=j.createContext({});function Ga(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function oE(e,n,i,o,l,u){var z,R;const{visualElement:d}=j.useContext(Al),h=j.useContext(p0),m=j.useContext(wl),g=j.useContext(oh),x=g.reducedMotion,y=g.skipAnimations,b=j.useRef(null),w=j.useRef(!1);o=o||h.renderer,!b.current&&o&&(b.current=o(e,{visualState:n,parent:d,props:i,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:x,skipAnimations:y,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const N=b.current,E=j.useContext(b0);N&&!N.projection&&l&&(N.type==="html"||N.type==="svg")&&lE(b.current,i,l,E);const C=j.useRef(!1);j.useInsertionEffect(()=>{N&&C.current&&N.update(i,m)});const M=i[Ty],I=j.useRef(!!M&&typeof window<"u"&&!((z=window.MotionHandoffIsComplete)!=null&&z.call(window,M))&&((R=window.MotionHasOptimisedAnimation)==null?void 0:R.call(window,M)));return Vx(()=>{w.current=!0,N&&(C.current=!0,window.MotionIsMounted=!0,N.updateFeatures(),N.scheduleRenderMicrotask(),I.current&&N.animationState&&N.animationState.animateChanges())}),j.useEffect(()=>{N&&(!I.current&&N.animationState&&N.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{var U;(U=window.MotionHandoffMarkAsComplete)==null||U.call(window,M)}),I.current=!1),N.enteringChildren=void 0)}),N}function lE(e,n,i,o){const{layoutId:l,layout:u,drag:d,dragConstraints:h,layoutScroll:m,layoutRoot:g,layoutAnchor:x,layoutCrossfade:y}=n;e.projection=new i(e.latestValues,n["data-framer-portal-id"]?void 0:w0(e.parent)),e.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||h&&Ga(h),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,crossfade:y,layoutScroll:m,layoutRoot:g,layoutAnchor:x})}function w0(e){if(e)return e.options.allowProjection!==!1?e.projection:w0(e.parent)}function Bu(e,{forwardMotionProps:n=!1,type:i}={},o,l){o&&WC(o);const u=i?i==="svg":ch(e),d=u?aE:rE;function h(g,x){let y;const b={...j.useContext(oh),...g,layoutId:cE(g)},{isStatic:w}=b,N=YC(g),E=d(g,w);if(!w&&typeof window<"u"){uE();const C=dE(b);y=C.MeasureLayout,N.visualElement=oE(e,E,b,l,C.ProjectionNode,u)}return r.jsxs(Al.Provider,{value:N,children:[y&&N.visualElement?r.jsx(y,{visualElement:N.visualElement,...b}):null,eE(e,g,sE(E,N.visualElement,x),E,w,n,u)]})}h.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const m=j.forwardRef(h);return m[iE]=e,m}function cE({layoutId:e}){const n=j.useContext(Bd).id;return n&&e!==void 0?n+"-"+e:e}function uE(e,n){j.useContext(p0).strict}function dE(e){const n=f0(),{drag:i,layout:o}=n;if(!i&&!o)return{};const l={...i,...o};return{MeasureLayout:i!=null&&i.isEnabled(e)||o!=null&&o.isEnabled(e)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}function hE(e,n){if(typeof Proxy>"u")return Bu;const i=new Map,o=(u,d)=>Bu(u,d,e,n),l=(u,d)=>o(u,d);return new Proxy(l,{get:(u,d)=>d==="create"?o:(i.has(d)||i.set(d,Bu(d,void 0,e,n)),i.get(d))})}const mE=(e,n)=>n.isSVG??ch(e)?new WA(n):new LA(n,{allowProjection:e!==j.Fragment});class pE extends Or{constructor(n){super(n),n.animationState||(n.animationState=YA(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Nl(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let fE=0;class gE extends Or{constructor(){super(...arguments),this.id=fE++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===o)return;if(n&&o===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"||typeof d=="object"&&d!==null&&!Array.isArray(d)){const m=ca(this.node,d,h);if(m){const{transition:g,transitionEnd:x,...y}=m;for(const b in y)(u=this.node.getValue(b))==null||u.jump(y[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const l=this.node.animationState.setActive("exit",!n);i&&!n&&l.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const xE={animation:{Feature:pE},exit:{Feature:gE}};function Ns(e){return{point:{x:e.pageX,y:e.pageY}}}const yE=e=>n=>th(n)&&e(n,Ns(n));function ss(e,n,i,o){return ps(e,n,yE(i),o)}const j0=({current:e})=>e?e.ownerDocument.defaultView:null,zg=(e,n)=>Math.abs(e-n);function vE(e,n){const i=zg(e.x,n.x),o=zg(e.y,n.y);return Math.sqrt(i**2+o**2)}const Og=new Set(["auto","scroll"]);class N0{constructor(n,i,{transformPagePoint:o,contextWindow:l=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Wo(this.lastRawMoveEventInfo,this.transformPagePoint));const w=Lu(this.lastMoveEventInfo,this.history),N=this.startEvent!==null,E=vE(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!N&&!E)return;const{point:C}=w,{timestamp:M}=bt;this.history.push({...C,timestamp:M});const{onStart:I,onMove:z}=this.handlers;N||(I&&I(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),z&&z(this.lastMoveEvent,w)},this.handlePointerMove=(w,N)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=N,this.lastMoveEventInfo=Wo(N,this.transformPagePoint),qe.update(this.updatePoint,!0)},this.handlePointerUp=(w,N)=>{this.end();const{onEnd:E,onSessionEnd:C,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=Lu(w.type==="pointercancel"?this.lastMoveEventInfo:Wo(N,this.transformPagePoint),this.history);this.startEvent&&E&&E(w,I),C&&C(w,I)},!th(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=o,this.distanceThreshold=d,this.contextWindow=l||window;const m=Ns(n),g=Wo(m,this.transformPagePoint),{point:x}=g,{timestamp:y}=bt;this.history=[{...x,timestamp:y}];const{onSessionStart:b}=i;b&&b(n,Lu(g,this.history)),this.removeListeners=bs(ss(this.contextWindow,"pointermove",this.handlePointerMove),ss(this.contextWindow,"pointerup",this.handlePointerUp),ss(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const o=getComputedStyle(i);(Og.has(o.overflowX)||Og.has(o.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const o=n===window,l=o?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:l.x-i.x,y:l.y-i.y};u.x===0&&u.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,l),qe.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),zr(this.updatePoint)}}function Wo(e,n){return n?{point:n(e.point)}:e}function Vg(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Lu({point:e},n){return{point:e,delta:Vg(e,k0(n)),offset:Vg(e,bE(n)),velocity:wE(n,.1)}}function bE(e){return e[0]}function k0(e){return e[e.length-1]}function wE(e,n){if(e.length<2)return{x:0,y:0};let i=e.length-1,o=null;const l=k0(e);for(;i>=0&&(o=e[i],!(l.timestamp-o.timestamp>qt(n)));)i--;if(!o)return{x:0,y:0};o===e[0]&&e.length>2&&l.timestamp-o.timestamp>qt(n)*2&&(o=e[1]);const u=sn(l.timestamp-o.timestamp);if(u===0)return{x:0,y:0};const d={x:(l.x-o.x)/u,y:(l.y-o.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function jE(e,{min:n,max:i},o){return n!==void 0&&e<n?e=o?Ge(n,e,o.min):Math.max(e,n):i!==void 0&&e>i&&(e=o?Ge(i,e,o.max):Math.min(e,i)),e}function $g(e,n,i){return{min:n!==void 0?e.min+n:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function NE(e,{top:n,left:i,bottom:o,right:l}){return{x:$g(e.x,i,l),y:$g(e.y,n,o)}}function Wg(e,n){let i=n.min-e.min,o=n.max-e.max;return n.max-n.min<e.max-e.min&&([i,o]=[o,i]),{min:i,max:o}}function kE(e,n){return{x:Wg(e.x,n.x),y:Wg(e.y,n.y)}}function AE(e,n){let i=.5;const o=Mt(e),l=Mt(n);return l>o?i=ds(n.min,n.max-o,e.min):o>l&&(i=ds(e.min,e.max-l,n.min)),In(0,1,i)}function CE(e,n){const i={};return n.min!==void 0&&(i.min=n.min-e.min),n.max!==void 0&&(i.max=n.max-e.min),i}const bd=.35;function EE(e=bd){return e===!1?e=0:e===!0&&(e=bd),{x:Ug(e,"left","right"),y:Ug(e,"top","bottom")}}function Ug(e,n,i){return{min:Hg(e,n),max:Hg(e,i)}}function Hg(e,n){return typeof e=="number"?e:e[n]||0}const SE=new WeakMap;class TE{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ht(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:o}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const u=y=>{i&&this.snapToCursor(Ns(y).point),this.stopAnimation()},d=(y,b)=>{const{drag:w,dragPropagation:N,onDragStart:E}=this.getProps();if(w&&!N&&(this.openDragLock&&this.openDragLock(),this.openDragLock=nA(w),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Mn(M=>{let I=this.getAxisMotionValue(M).get()||0;if(Bn.test(I)){const{projection:z}=this.visualElement;if(z&&z.layout){const R=z.layout.layoutBox[M];R&&(I=Mt(R)*(parseFloat(I)/100))}}this.originPoint[M]=I}),E&&qe.update(()=>E(y,b),!1,!0),ud(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},h=(y,b)=>{this.latestPointerEvent=y,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:N,onDirectionLock:E,onDrag:C}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:M}=b;if(N&&this.currentDirection===null){this.currentDirection=_E(M),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",b.point,M),this.updateAxis("y",b.point,M),this.visualElement.render(),C&&qe.update(()=>C(y,b),!1,!0)},m=(y,b)=>{this.latestPointerEvent=y,this.latestPanInfo=b,this.stop(y,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:y}=this.getProps();(y||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:x}=this.getProps();this.panSession=new N0(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:m,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,distanceThreshold:o,contextWindow:j0(this.visualElement),element:this.visualElement.current})}stop(n,i){const o=n||this.latestPointerEvent,l=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!l||!o)return;const{velocity:d}=l;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&qe.postRender(()=>h(o,l))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,o){const{drag:l}=this.getProps();if(!o||!Uo(n,l,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+o[n];this.constraints&&this.constraints[n]&&(d=jE(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,l=this.constraints;n&&Ga(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=NE(o.layoutBox,n):this.constraints=!1,this.elastic=EE(i),l!==this.constraints&&!Ga(n)&&o&&this.constraints&&!this.hasMutatedConstraints&&Mn(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=CE(o.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!Ga(n))return!1;const o=n.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;l.root&&(l.root.scroll=void 0,l.root.updateScroll());const u=_A(o,l.root,this.visualElement.getTransformPagePoint());let d=kE(l.layout.layoutBox,u);if(i){const h=i(SA(d));this.hasMutatedConstraints=!!h,h&&(d=Hy(h))}return d}startAnimation(n){const{drag:i,dragMomentum:o,dragElastic:l,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),m=this.constraints||{},g=Mn(x=>{if(!Uo(x,i,this.currentDirection))return;let y=m&&m[x]||{};(d===!0||d===x)&&(y={min:0,max:0});const b=l?200:1e6,w=l?40:1e7,N={type:"inertia",velocity:o?n[x]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...y};return this.startAxisValueAnimation(x,N)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const o=this.getAxisMotionValue(n);return ud(this.visualElement,n),o.start(Xd(n,o,0,i,this.visualElement,!1))}stopAnimation(){Mn(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,l=this.visualElement.getProps()[i];return l||this.visualElement.getValue(n,this.visualElement.latestValues[n]??0)}snapToCursor(n){Mn(i=>{const{drag:o}=this.getProps();if(!Uo(i,o,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(i);if(l&&l.layout){const{min:d,max:h}=l.layout.layoutBox[i],m=u.get()||0;u.set(n[i]-Ge(d,h,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Ga(i)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Mn(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const m=h.get();l[d]=AE({min:m,max:m},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),Mn(d=>{if(!Uo(d,n,null))return;const h=this.getAxisMotionValue(d),{min:m,max:g}=this.constraints[d];h.set(Ge(m,g,l[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;SE.set(this.visualElement,this);const n=this.visualElement.current,i=ss(n,"pointerdown",g=>{const{drag:x,dragListener:y=!0}=this.getProps(),b=g.target,w=b!==n&&lA(b);x&&y&&!w&&this.start(g)});let o;const l=()=>{const{dragConstraints:g}=this.getProps();Ga(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),o||(o=PE(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",l);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),qe.read(l);const h=ps(window,"resize",()=>this.scalePositionWithinConstraints()),m=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:x})=>{this.isDragging&&x&&(Mn(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=g[y].translate,b.set(b.get()+g[y].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),m&&m(),o&&o()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:d=bd,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:o,dragPropagation:l,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Gg(e){let n=!0;return()=>{if(n){n=!1;return}e()}}function PE(e,n,i){const o=Zf(e,Gg(i)),l=Zf(n,Gg(i));return()=>{o(),l()}}function Uo(e,n,i){return(n===!0||n===e)&&(i===null||i===e)}function _E(e,n=10){let i=null;return Math.abs(e.y)>n?i="y":Math.abs(e.x)>n&&(i="x"),i}class DE extends Or{constructor(n){super(n),this.removeGroupControls=ln,this.removeListeners=ln,this.controls=new TE(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ln}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Iu=e=>(n,i)=>{e&&qe.update(()=>e(n,i),!1,!0)};class FE extends Or{constructor(){super(...arguments),this.removePointerDownListener=ln}onPointerDown(n){this.session=new N0(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:j0(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:Iu(n),onStart:Iu(i),onMove:Iu(o),onEnd:(u,d)=>{delete this.session,l&&qe.postRender(()=>l(u,d))}}}mount(){this.removePointerDownListener=ss(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let zu=!1;class ME extends j.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:o,layoutId:l}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),o&&o.register&&l&&o.register(u),zu&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),al.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:o,drag:l,isPresent:u}=this.props,{projection:d}=o;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),zu=!0,l||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||qe.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:o}=n;o&&(o.options.layoutAnchor=i,o.root.didUpdate(),eh.postRender(()=>{!o.currentAnimation&&o.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:l}=n;zu=!0,l&&(l.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function A0(e){const[n,i]=m0(),o=j.useContext(Bd);return r.jsx(ME,{...e,layoutGroup:o,switchLayoutGroup:j.useContext(b0),isPresent:n,safeToRemove:i})}const RE={pan:{Feature:FE},drag:{Feature:DE,ProjectionNode:h0,MeasureLayout:A0}};function qg(e,n,i){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",i==="Start");const l="onHover"+i,u=o[l];u&&qe.postRender(()=>u(n,Ns(n)))}class BE extends Or{mount(){const{current:n}=this.node;n&&(this.unmount=aA(n,(i,o)=>(qg(this.node,o,"Start"),l=>qg(this.node,l,"End"))))}unmount(){}}class LE extends Or{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bs(ps(this.node.current,"focus",()=>this.onFocus()),ps(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Yg(e,n,i){const{props:o}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",i==="Start");const l="onTap"+(i==="End"?"":i),u=o[l];u&&qe.postRender(()=>u(n,Ns(n)))}class IE extends Or{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:o}=this.node.props;this.unmount=uA(n,(l,u)=>(Yg(this.node,u,"Start"),(d,{success:h})=>Yg(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(o==null?void 0:o.tap)===!1})}unmount(){}}const wd=new WeakMap,Ou=new WeakMap,zE=e=>{const n=wd.get(e.target);n&&n(e)},OE=e=>{e.forEach(zE)};function VE({root:e,...n}){const i=e||document;Ou.has(i)||Ou.set(i,{});const o=Ou.get(i),l=JSON.stringify(n);return o[l]||(o[l]=new IntersectionObserver(OE,{root:e,...n})),o[l]}function $E(e,n,i){const o=VE(n);return wd.set(e,i),o.observe(e),()=>{wd.delete(e),o.unobserve(e)}}const WE={some:0,all:1};class UE extends Or{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var m;(m=this.stopObserver)==null||m.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:o,amount:l="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:WE[l]},h=g=>{const{isIntersecting:x}=g;if(this.isInView===x||(this.isInView=x,u&&!x&&this.hasEnteredView))return;x&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",x);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),w=x?y:b;w&&w(g)};this.stopObserver=$E(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(HE(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function HE({viewport:e={}},{viewport:n={}}={}){return i=>e[i]!==n[i]}const GE={inView:{Feature:UE},tap:{Feature:IE},focus:{Feature:LE},hover:{Feature:BE}},qE={layout:{ProjectionNode:h0,MeasureLayout:A0}},YE={...xE,...GE,...RE,...qE},oe=hE(YE,mE);function nr({src:e,alt:n="",className:i="",watermarkClassName:o="",fit:l="cover",watermark:u=!0,watermarkOpacity:d=1,watermarkPosition:h="bottom-right",children:m}){return r.jsxs("div",{onContextMenu:g=>g.preventDefault(),className:`relative overflow-hidden ${i}`,children:[r.jsx("div",{role:"img","aria-label":n,className:`w-full h-full bg-center bg-no-repeat ${l==="cover"?"bg-cover":"bg-contain"}`,style:{backgroundImage:`url(${e})`}}),u&&r.jsx("div",{className:`\r
      absolute\r
      bottom-3\r
      right-3\r
      sm:bottom-4\r
      sm:right-4\r
      md:bottom-5\r
      md:right-5\r
      lg:bottom-6\r
      lg:right-6\r
      pointer-events-none\r
      select-none\r
      z-20\r
    `,style:{opacity:d},children:r.jsx("span",{className:`
    text-white
    font-light
    uppercase
    tracking-[0.35em]
    text-[6px]
    sm:text-[8px]
    md:text-[10px]
    lg:text-xs
    whitespace-nowrap
    drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]
    ${o}
  `,children:"© BACKYARD NEST"})}),m]})}function Yt({title:e,description:n,image:i="https://backyardnest.com.au/images/seo/og-image.jpg",url:o="https://backyardnest.com.au"}){return r.jsxs(Yb,{children:[r.jsx("title",{children:e}),r.jsx("meta",{name:"description",content:n}),r.jsx("link",{rel:"canonical",href:o}),r.jsx("meta",{property:"og:title",content:e}),r.jsx("meta",{property:"og:description",content:n}),r.jsx("meta",{property:"og:image",content:i}),r.jsx("meta",{property:"og:url",content:o}),r.jsx("meta",{property:"og:type",content:"website"}),r.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),r.jsx("meta",{name:"twitter:title",content:e}),r.jsx("meta",{name:"twitter:description",content:n}),r.jsx("meta",{name:"twitter:image",content:i})]})}function KE({children:e="Contact Us",className:n=""}){return r.jsx(Ue,{to:"/contact",className:`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[#2E2A26]
        px-7
        py-3
        text-sm
        font-medium
        tracking-wide
        text-white
        transition-all
        duration-300
        hover:bg-[#C7A77A]
        hover:text-[#2E2A26]
        hover:scale-105
        ${n}
      `,children:e})}function QE(){const e=Vt(),[n,i]=j.useState(window.innerWidth<768);j.useEffect(()=>{const N=()=>{i(window.innerWidth<768)};return window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)}},[]);const u=n?["/images/studio/studio1/mobile/studio1.m.webp","/images/studio/studio2/mobile/studio2.m.webp","/images/studio/studio3/mobile/studio3.m.webp","/images/studio/studyNook/mobile/studyNook.m.webp"]:["/images/studio/studyNook/study_nook_timber.webp","/images/grannyflat/grannyflatexmp/granny_flats_hero.webp","/images/studio/studio1/studio1.1.webp","/images/studio/studio2/studio2.1.webp","/images/studio/studio3/studio3.webp"],d=[{id:0,category:"Studios",title:"Backyard Studios",location:"Melbourne",image:"/images/studio/studio3/studio3.2.webp",link:"/products?category=studio"},{id:1,category:"Granny Flats",title:"Granny Flat",location:"Melbourne",image:"/images/granny_flats_hero.webp",link:"/products?category=granny-flat"}],h=[{number:"01",title:"Discovery Consultation",description:"We discuss your goals, budget and property requirements."},{number:"02",title:"Design & Planning",description:"Our design team creates a tailored concept that complements your home, maximises your space and reflects your personal style."},{number:"03",title:"Permits & Approvals",description:"We manage planning and building approvals where required, helping make the process straightforward and stress free."},{number:"04",title:"Construction",description:"Built by experienced professionals using premium materials, every project is completed with precision, quality and lasting craftsmanship."},{number:"05",title:"Handover",description:"Step into your new backyard space with confidence, knowing every detail has been finished to the highest standards."}],[m,g]=j.useState(0),[x,y]=j.useState(0),[b,w]=j.useState(0);return j.useEffect(()=>{const N=setInterval(()=>{w(E=>(E+1)%u.length)},5e3);return()=>clearInterval(N)},[]),r.jsxs(r.Fragment,{children:[r.jsx(Yt,{title:"Backyard Nest | Premium Backyard studios, Studios & Granny Flats Melbourne",description:"We design and build backyard pods, studios & granny flats across Melbourne & Victoria. Council compliant, custom built, delivered by our own team.",url:"https://backyardnest.com.au/"}),r.jsxs("div",{className:"bg-white",children:[r.jsxs("section",{className:"relative h-[85vh] min-h-[620px] lg:h-screen overflow-hidden",children:[u.map((N,E)=>r.jsx("div",{onContextMenu:C=>C.preventDefault(),className:`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${E===b?"opacity-100 scale-105":"opacity-0 scale-100"}`,children:r.jsx("div",{className:"w-full h-full bg-cover bg-center bg-no-repeat",style:{backgroundImage:`url(${N})`}})},E)),r.jsx("div",{className:"absolute inset-0 bg-black/45"}),r.jsx("div",{className:"absolute inset-0 flex items-end",children:r.jsx("div",{className:"w-full pb-24 md:pb-24 lg:pb-28",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-10 lg:px-12",children:r.jsxs("div",{className:"max-w-5xl",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-white/70 text-[10px] sm:text-xs md:text-sm mb-6",children:"Backyard Studios & Granny Flats Melbourne"}),r.jsxs("h1",{className:`\r
            editorial-heading\r
            text-white\r
            text-[clamp(2.8rem,11vw,8rem)]\r
            leading-[0.88]\r
            tracking-[-0.05em]\r
          `,children:["SMARTER SPACES",r.jsx("br",{}),"BETTER LIVING"]}),r.jsx("p",{className:`\r
    mt-8\r
    text-[#D6B88C]\r
    uppercase\r
    tracking-[0.25em]\r
    text-xs\r
    md:text-sm\r
    font-medium\r
  `,children:"Custom Designed Backyard Spaces Built For Modern Living"}),r.jsx("div",{className:"w-20 h-px bg-[#C7A77A] mt-8 mb-8"}),r.jsx("p",{className:`\r
            max-w-3xl\r
            text-white/85\r
            text-base\r
            md:text-lg\r
            leading-relaxed\r
          `,children:"Create extra space without moving. Backyard Nest designs and builds premium backyard studios, granny flats, home offices and garden retreats across Melbourne and Victoria."}),r.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[r.jsxs("button",{onClick:()=>e("/products"),className:`\r
      inline-flex\r
      items-center\r
      justify-center\r
      min-w-[190px]\r
      rounded-full\r
      border\r
      border-white/80\r
      bg-white/10\r
      backdrop-blur-sm\r
      px-7\r
      py-4\r
      text-white\r
      uppercase\r
      text-xs\r
      font-medium\r
      tracking-[0.2em]\r
      transition-all\r
      duration-300\r
      hover:bg-white\r
      hover:text-[#2E2A26]\r
      hover:border-white\r
      hover:scale-[1.03]\r
    `,children:["Explore Projects",r.jsx("span",{className:"ml-3",children:"→"})]}),r.jsxs("button",{onClick:()=>e("/contact"),className:`\r
      group\r
      inline-flex\r
      items-center\r
      justify-center\r
      min-w-[170px]\r
      rounded-full\r
      bg-[#C7A77A]\r
      px-7\r
      py-4\r
      text-[#2E2A26]\r
      uppercase\r
      text-xs\r
      font-semibold\r
      tracking-[0.2em]\r
      shadow-[0_8px_25px_rgba(0,0,0,0.25)]\r
      transition-all\r
      duration-300\r
      hover:bg-[#F5F0EB]\r
      hover:scale-[1.05]\r
      hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]\r
    `,children:["Get a Free Quote",r.jsx("span",{className:`\r
        ml-3\r
        transition-transform\r
        duration-300\r
        group-hover:translate-x-1\r
      `,children:"→"})]})]})]})})})}),r.jsx("div",{className:"absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/10 backdrop-blur-sm",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5",children:r.jsxs("div",{className:"grid grid-cols-2 md:flex md:flex-wrap justify-center gap-y-6 gap-x-4 md:gap-12 text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/70 text-center",children:[r.jsx("span",{children:"Architecturally Designed"}),r.jsx("span",{className:"hidden md:block",children:"•"}),r.jsx("span",{children:"Council Compliant"}),r.jsx("span",{className:"hidden md:block",children:"•"}),r.jsx("span",{children:"Built In Victoria"}),r.jsx("span",{className:"hidden md:block",children:"•"}),r.jsx("span",{children:"Premium Materials"})]})})})]}),r.jsx("section",{className:"bg-[#F5F0EB] py-20 lg:py-32 overflow-hidden",children:r.jsx("div",{className:"max-w-[1700px] mx-auto w-full",children:r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[38%_62%] items-center gap-8 lg:gap-16",children:[r.jsxs("div",{className:`\r
          order-1\r
          lg:order-1\r
          flex\r
          flex-col\r
          justify-center\r
          px-6\r
          lg:px-20\r
        `,children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-8 lg:mb-16",children:"Explore Spaces"}),r.jsx("div",{className:"lg:hidden mb-1",children:r.jsx("div",{className:`\r
              flex\r
              gap-8\r
              overflow-x-auto\r
              hide-scrollbar\r
              pb-2\r
            `,children:d.map((N,E)=>r.jsx("button",{onClick:()=>g(E),className:`
                  flex-shrink-0
                  pb-3
                  text-2xl
                  transition-all
                  duration-300
                  ${m===E?"text-[#2E2A26] border-b border-[#C7A77A]":"text-[#B8ADA2]"}
                `,children:N.category},N.id))})}),r.jsx("div",{className:"hidden lg:block space-y-1",children:d.map((N,E)=>r.jsxs("button",{onMouseEnter:()=>g(E),onClick:()=>e(N.link),className:"group block text-left",children:[r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsx("h2",{className:`
                    font-light
                    leading-none
                    tracking-[-0.05em]
                    transition-all
                    duration-500
                    text-[clamp(4rem,7vw,7rem)]
                    ${m===E?"text-[#2E2A26] translate-x-2":"text-[#B8ADA2]"}
                  `,children:N.category}),r.jsx("span",{className:`
                    transition-all
                    duration-500
                    text-3xl
                    text-[#C7A77A]
                    ${m===E?"opacity-100 translate-x-0":"opacity-0 -translate-x-4"}
                  `,children:"→"})]}),r.jsx("div",{className:"mt-4 flex items-center gap-4",children:r.jsx("div",{className:`
                    h-px
                    bg-[#C7A77A]
                    transition-all
                    duration-500
                    ${m===E?"w-20":"w-0"}
                  `})})]},N.id))}),r.jsx("div",{className:"mt-4 lg:mt-24",children:r.jsxs("div",{className:`\r
              bg-white/50\r
              backdrop-blur-sm\r
              border\r
              border-[#C7A77A]/10\r
              p-6\r
              lg:p-0\r
              lg:bg-transparent\r
              lg:border-0\r
            `,children:[r.jsx("div",{className:"w-16 h-px bg-[#C7A77A] mb-8"}),r.jsx("p",{className:"uppercase tracking-[0.25em] text-[#A08E7C] text-xs mb-4",children:"Collection"}),r.jsx("h3",{className:`\r
                editorial-heading\r
                text-[#2E2A26]\r
                text-3xl\r
                md:text-5xl\r
                mb-4\r
              `,children:d[m].title}),r.jsx("p",{className:"text-[#8B7E74] text-base md:text-lg",children:d[m].location}),r.jsxs("div",{className:"mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[r.jsxs("button",{onClick:()=>e(d[m].link),className:`\r
      group\r
      inline-flex\r
      items-center\r
      justify-center\r
      rounded-full\r
      border\r
      border-[#2E2A26]/30\r
      bg-white/40\r
      px-6\r
      py-3.5\r
      uppercase\r
      tracking-[0.2em]\r
      text-xs\r
      font-medium\r
      text-[#2E2A26]\r
      transition-all\r
      duration-300\r
      hover:bg-[#2E2A26]\r
      hover:text-[#F5F0EB]\r
      hover:border-[#2E2A26]\r
      hover:scale-[1.02]\r
    `,children:["Explore Collection",r.jsx("span",{className:"ml-3 transition-transform duration-300 group-hover:translate-x-1",children:"→"})]}),r.jsx(KE,{className:`\r
      !bg-[#C7A77A]\r
      !text-[#2E2A26]\r
      !border-[#C7A77A]\r
      px-7\r
      py-3.5\r
      shadow-[0_6px_18px_rgba(46,42,38,0.18)]\r
      hover:!bg-[#2E2A26]\r
      hover:!text-[#F5F0EB]\r
      hover:!border-[#2E2A26]\r
      hover:scale-[1.04]\r
    `,children:"Enquire About Your Space"})]})]})})]}),r.jsxs("div",{onClick:()=>e(d[m].link),className:`\r
          order-2\r
          lg:order-2\r
          cursor-pointer\r
          relative\r
          overflow-hidden\r
          rounded-[20px]\r
          h-[260px]\r
          sm:h-[360px]\r
          md:h-[500px]\r
          lg:h-[580px]\r
          xl:h-[650px]\r
          mx-6\r
          lg:mx-0\r
          lg:mr-16\r
        `,children:[r.jsx("div",{className:"absolute inset-0 bg-[#C7A77A]/5 z-10 pointer-events-none"}),r.jsx(Rg,{mode:"wait",children:r.jsx(oe.div,{initial:{opacity:0,scale:1.05},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.8},className:"absolute inset-0",children:r.jsx(nr,{src:d[m].image,alt:d[m].title,className:"w-full h-full"})},m)})]})]})})}),r.jsx("section",{className:"bg-[#F5F0EB] py-28 lg:py-36 overflow-hidden",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"text-center max-w-5xl mx-auto",children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#8B7E74] text-xs mb-6",children:"Why Backyard Nest"}),r.jsxs("h2",{className:`\r
    editorial-heading\r
    text-[#2E2A26]\r
    text-5xl\r
    md:text-7xl\r
    leading-[0.95]\r
    tracking-[-0.03em]\r
    transition-all\r
    duration-700\r
    hover:tracking-[-0.02em]\r
  `,children:["More Than Just",r.jsx("br",{}),"Extra Space"]})]}),r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},className:"mt-20 grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start",children:[r.jsxs("div",{children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#8B7E74] text-xs mb-6",children:"Why Homeowners Trust Backyard Nest"}),r.jsx("ul",{className:"space-y-4",children:["Custom Designs for Every Property","Sloping & Challenging Site Specialists","Council Permit & Approval Management","Heritage Overlay Expertise","Premium Australian Materials","Transparent Fixed Price Quotes","Complete Turnkey Delivery"].map(N=>r.jsx("li",{className:`\r
        group\r
        flex\r
        items-center\r
        justify-between\r
        border-b\r
        border-[#DED6CF]\r
        py-5\r
        cursor-pointer\r
        transition-all\r
        duration-500\r
        hover:border-[#C7A77A]\r
        hover:pl-4\r
      `,children:r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:`\r
            w-2.5\r
            h-2.5\r
            rounded-full\r
            bg-[#C7A77A]\r
            transition-all\r
            duration-500\r
            group-hover:scale-150\r
            group-hover:shadow-[0_0_20px_rgba(199,167,122,.45)]\r
          `}),r.jsx("span",{className:`\r
            text-[#2E2A26]\r
            text-xl\r
            transition-all\r
            duration-500\r
            group-hover:text-[#B89463]\r
          `,children:N})]})},N))})]}),r.jsxs("div",{className:"space-y-8",children:[r.jsx("p",{className:`\r
    text-[#5F5A55]\r
    text-xl\r
    leading-relaxed\r
    rounded-3xl\r
    p-8\r
    transition-all\r
    duration-500\r
    hover:bg-white/70\r
    hover:shadow-xl\r
    hover:-translate-y-1\r
  `,children:"At Backyard Nest, we help homeowners unlock the full potential of their property with architecturally designed backyard studios, granny flats and multipurpose living spaces that blend seamlessly with their home and lifestyle."}),r.jsx("p",{className:`\r
    text-[#5F5A55]\r
    text-xl\r
    leading-relaxed\r
    rounded-3xl\r
    p-8\r
    transition-all\r
    duration-500\r
    hover:bg-white/70\r
    hover:shadow-xl\r
    hover:-translate-y-1\r
  `,children:"Whether you're creating a home office, private retreat, guest accommodation, rental investment or space for a growing family, our experienced team manages every stage from concept and approvals through to construction and handover."}),r.jsx("p",{className:`\r
    text-[#5F5A55]\r
    text-xl\r
    leading-relaxed\r
    rounded-3xl\r
    p-8\r
    transition-all\r
    duration-500\r
    hover:bg-white/70\r
    hover:shadow-xl\r
    hover:-translate-y-1\r
  `,children:"Every Backyard Nest project is thoughtfully designed for Melbourne's climate, local council requirements and the unique characteristics of your property, delivering beautiful spaces built to last."})]})]}),r.jsx(oe.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.2},className:"mt-16 flex justify-center",children:r.jsxs("button",{onClick:()=>e("/contact"),className:`\r
      group\r
      inline-flex\r
      items-center\r
      justify-center\r
      rounded-full\r
      bg-[#C7A77A]\r
      px-9\r
      py-4\r
      text-[#2E2A26]\r
      uppercase\r
      text-xs\r
      font-semibold\r
      tracking-[0.2em]\r
      shadow-[0_8px_25px_rgba(46,42,38,0.18)]\r
      transition-all\r
      duration-300\r
      hover:bg-[#2E2A26]\r
      hover:text-[#F5F0EB]\r
      hover:scale-[1.04]\r
      hover:shadow-[0_10px_30px_rgba(46,42,38,0.25)]\r
    `,children:["Discuss Your Backyard Project",r.jsx("span",{className:`\r
        ml-3\r
        transition-transform\r
        duration-300\r
        group-hover:translate-x-1\r
      `,children:"→"})]})})]})}),r.jsx("section",{className:"bg-[#F5F0EB] py-24 lg:py-32 overflow-hidden",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"text-center max-w-4xl mx-auto mb-20",children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#8B7E74] text-xs mb-6",children:"Our Services"}),r.jsxs("h2",{className:`\r
          editorial-heading\r
          text-[#2E2A26]\r
          text-5xl\r
          md:text-7xl\r
          leading-[0.95]\r
          tracking-[-0.03em]\r
        `,children:["Premium Backyard Spaces",r.jsx("br",{}),"For Every Lifestyle"]})]}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8",children:[{number:"01",title:"Backyard Studios",description:"Perfect for home offices, creative spaces, gyms and personal retreats.",route:"/products/studio"},{number:"02",title:"Granny Flats",description:"Fully self contained living spaces designed for family members, guests or investment opportunities.",route:"/products/granny"},{number:"03",title:"Garden Studios",description:"A stylish extension of your home that blends seamlessly with your outdoor environment.",route:"/products/studio"},{number:"04",title:"Backyard Office Pods",description:"Create a productive work environment without sacrificing space inside your home.",route:"/products/studio"},{number:"05",title:"Teenage Retreats",description:"Give growing families the additional space they need while maintaining privacy and comfort.",route:"/products/studio"},{number:"06",title:"Multi Purpose Studios",description:"Flexible spaces designed around your unique lifestyle requirements.",route:"/products/studio"}].map((N,E)=>r.jsxs(oe.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:E*.08},onClick:()=>e(N.route),role:"link",tabIndex:0,onKeyDown:C=>{(C.key==="Enter"||C.key===" ")&&e(N.route)},className:`\r
            group\r
            relative\r
            bg-white/70\r
            backdrop-blur-sm\r
            rounded-[32px]\r
            border\r
            border-[#E6DDD4]\r
            p-8\r
            min-h-[320px]\r
            overflow-hidden\r
            transition-all\r
            duration-500\r
            hover:-translate-y-3\r
            hover:border-[#C7A77A]\r
            hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]\r
            cursor-pointer\r
            focus:outline-none\r
            focus:ring-2\r
            focus:ring-[#C7A77A]\r
            focus:ring-offset-2\r
          `,children:[r.jsx("div",{className:`\r
              absolute\r
              -right-5\r
              -top-8\r
              text-[120px]\r
              font-serif\r
              leading-none\r
              text-[#F0E8DF]\r
              transition-all\r
              duration-700\r
              group-hover:scale-110\r
              group-hover:text-[#E6D7C3]\r
            `,children:N.number}),r.jsxs("div",{className:"relative z-10 h-full flex flex-col",children:[r.jsx("span",{className:`\r
                text-[#C7A77A]\r
                uppercase\r
                tracking-[0.25em]\r
                text-xs\r
                mb-6\r
              `,children:N.number}),r.jsx("h3",{className:`\r
                font-serif\r
                text-3xl\r
                text-[#2E2A26]\r
                mb-6\r
                transition-colors\r
                duration-500\r
                group-hover:text-[#B89463]\r
              `,children:N.title}),r.jsx("p",{className:`\r
                text-[#5F5A55]\r
                leading-relaxed\r
                text-lg\r
                flex-grow\r
              `,children:N.description}),r.jsxs("div",{className:`\r
                mt-6\r
                flex\r
                items-center\r
                text-xs\r
                uppercase\r
                tracking-[0.2em]\r
                font-semibold\r
                text-[#C7A77A]\r
                opacity-0\r
                translate-y-2\r
                transition-all\r
                duration-300\r
                group-hover:opacity-100\r
                group-hover:translate-y-0\r
              `,children:["Explore Design",r.jsx("span",{className:"ml-2 transition-transform duration-300 group-hover:translate-x-1",children:"→"})]})]})]},N.number))}),r.jsxs(oe.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.2},className:"mt-16 flex flex-col items-center text-center",children:[r.jsx("p",{className:"mb-5 text-sm text-[#8B7E74]",children:"Have a space in mind? Let's create something around your lifestyle."}),r.jsxs("button",{onClick:()=>e("/contact"),className:`\r
          group\r
          inline-flex\r
          items-center\r
          justify-center\r
          rounded-full\r
          bg-[#C7A77A]\r
          px-9\r
          py-4\r
          text-[#2E2A26]\r
          uppercase\r
          text-xs\r
          font-semibold\r
          tracking-[0.2em]\r
          shadow-[0_8px_25px_rgba(46,42,38,0.18)]\r
          transition-all\r
          duration-300\r
          hover:bg-[#2E2A26]\r
          hover:text-[#F5F0EB]\r
          hover:scale-[1.05]\r
          hover:shadow-[0_12px_30px_rgba(46,42,38,0.25)]\r
        `,children:["Discuss Your Backyard Project",r.jsx("span",{className:`\r
            ml-3\r
            transition-transform\r
            duration-300\r
            group-hover:translate-x-1\r
          `,children:"→"})]})]})]})}),r.jsxs("section",{className:"bg-[#F5F0EB] py-20 lg:py-32 overflow-hidden",children:[r.jsx("div",{className:"max-w-[1700px] mx-auto",children:r.jsxs("div",{className:"grid lg:grid-cols-[40%_60%] gap-12 lg:gap-20",children:[r.jsxs("div",{className:"px-6 lg:px-20",children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-8",children:"Our Process"}),r.jsxs("h2",{className:`\r
            editorial-heading\r
            text-[#2E2A26]\r
            text-[3rem]\r
            md:text-6xl\r
            lg:text-7xl\r
            leading-[0.95]\r
            mb-10\r
            lg:mb-14\r
          `,children:["From Concept",r.jsx("br",{}),"To Completion"]}),r.jsx("div",{className:"space-y-6 lg:space-y-8",children:h.map((N,E)=>r.jsx("button",{onMouseEnter:()=>y(E),className:"block text-left w-full group",children:r.jsxs("div",{className:"flex gap-5",children:[r.jsx("span",{className:`
                    transition-all duration-500
                    text-sm lg:text-base
                    ${x===E?"text-[#C7A77A]":"text-[#B8ADA2]"}
                  `,children:N.number}),r.jsxs("div",{children:[r.jsx("h3",{className:`
                      transition-all duration-500
                      text-2xl
                      md:text-3xl
                      lg:text-5xl
                      tracking-[-0.04em]
                      ${x===E?"text-[#2E2A26]":"text-[#B8ADA2]"}
                    `,children:N.title}),r.jsx(Rg,{children:x===E&&r.jsxs(oe.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.35},children:[r.jsx("div",{className:"w-12 h-px bg-[#C7A77A] my-4"}),r.jsx("p",{className:"text-[#5F5A55] max-w-md leading-relaxed text-sm lg:text-base",children:N.description})]})})]})]})},N.number))})]}),r.jsx("div",{className:"px-6 lg:px-0 lg:pr-20 flex items-start lg:mt-14 xl:mt-16",children:r.jsxs("div",{className:`\r
      relative\r
      w-full\r
      overflow-hidden\r
      rounded-[20px]\r
      shadow-2xl\r
      border border-black/5\r
\r
      h-[260px]\r
      sm:h-[340px]\r
      md:h-[450px]\r
      lg:h-[650px]\r
    `,children:[r.jsxs("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:"/video/haomepage_thumb.webp",disablePictureInPicture:!0,controlsList:"nodownload noplaybackrate noremoteplayback nofullscreen",draggable:!1,onContextMenu:N=>N.preventDefault(),style:{userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"},className:"w-full h-full object-cover select-none",children:[r.jsx("source",{src:"/video/homepage.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),r.jsx("div",{className:"absolute inset-0 z-10",onContextMenu:N=>N.preventDefault(),onDragStart:N=>N.preventDefault()})]})})]})}),r.jsxs(oe.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.2},className:"mt-16 lg:mt-20 px-6 flex flex-col items-center text-center",children:[r.jsx("p",{className:"mb-5 text-sm text-[#8B7E74]",children:"Ready to turn your idea into a space you'll love?"}),r.jsxs("button",{onClick:()=>e("/contact"),className:`\r
                group\r
                inline-flex\r
                items-center\r
                justify-center\r
                rounded-full\r
                bg-[#C7A77A]\r
                px-9\r
                py-4\r
                text-[#2E2A26]\r
                uppercase\r
                text-xs\r
                font-semibold\r
                tracking-[0.2em]\r
                shadow-[0_8px_25px_rgba(46,42,38,0.18)]\r
                transition-all\r
                duration-300\r
                hover:bg-[#2E2A26]\r
                hover:text-[#F5F0EB]\r
                hover:scale-[1.05]\r
                hover:shadow-[0_12px_30px_rgba(46,42,38,0.25)]\r
              `,children:["Explore Backyard Building Options",r.jsx("span",{className:`\r
                  ml-3\r
                  transition-transform\r
                  duration-300\r
                  group-hover:translate-x-1\r
                `,children:"→"})]})]})]}),r.jsx("section",{className:"bg-[#F5F0EB] py-40",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[r.jsxs("div",{className:"text-center mb-24",children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-6",children:"Why Homeowners Choose Us"}),r.jsxs("h2",{className:`\r
          editorial-heading\r
          text-[#2E2A26]\r
          text-5xl\r
          md:text-7xl\r
          leading-[0.95]\r
        `,children:["Built With",r.jsx("br",{}),"Confidence"]})]}),r.jsxs("div",{className:"grid md:grid-cols-4 gap-12",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-[#C7A77A] text-6xl mb-4",children:"50+"}),r.jsx("p",{className:"text-[#2E2A26] text-xl mb-2",children:"Projects Delivered"}),r.jsx("p",{className:"text-[#8B7E74]",children:"Backyard spaces completed across Victoria."})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[#C7A77A] text-6xl mb-4",children:"10+"}),r.jsx("p",{className:"text-[#2E2A26] text-xl mb-2",children:"Years Experience"}),r.jsx("p",{className:"text-[#8B7E74]",children:"Designing spaces for modern living."})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[#C7A77A] text-6xl mb-4",children:"98%"}),r.jsx("p",{className:"text-[#2E2A26] text-xl mb-2",children:"Client Satisfaction"}),r.jsx("p",{className:"text-[#8B7E74]",children:"Built on referrals and repeat customers."})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[#C7A77A] text-6xl mb-4",children:"100%"}),r.jsx("p",{className:"text-[#2E2A26] text-xl mb-2",children:"Australian Built"}),r.jsx("p",{className:"text-[#8B7E74]",children:"Quality materials and local craftsmanship."})]})]}),r.jsxs(oe.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.2},className:"mt-20 flex flex-col items-center text-center",children:[r.jsx("p",{className:"mb-6 text-sm md:text-base text-[#8B7E74]",children:"Ready to create a backyard space with confidence?"}),r.jsxs("button",{onClick:()=>e("/contact"),className:`\r
          group\r
          inline-flex\r
          items-center\r
          justify-center\r
          rounded-full\r
          bg-[#C7A77A]\r
          px-10\r
          py-4\r
          text-[#2E2A26]\r
          uppercase\r
          text-xs\r
          font-semibold\r
          tracking-[0.2em]\r
          shadow-[0_8px_25px_rgba(46,42,38,0.18)]\r
          transition-all\r
          duration-300\r
          hover:bg-[#2E2A26]\r
          hover:text-[#F5F0EB]\r
          hover:scale-[1.05]\r
          hover:shadow-[0_12px_30px_rgba(46,42,38,0.25)]\r
        `,children:["Start Your Backyard Project",r.jsx("span",{className:`\r
            ml-3\r
            transition-transform\r
            duration-300\r
            group-hover:translate-x-1\r
          `,children:"→"})]})]})]})}),r.jsxs("section",{className:"relative h-[80vh] overflow-hidden",children:[r.jsx("div",{onContextMenu:N=>N.preventDefault(),className:`\r
    absolute\r
    inset-0\r
    bg-cover\r
    bg-center\r
    bg-no-repeat\r
  `,style:{backgroundImage:`url(${window.innerWidth<768?"/images/studio/studyNook/mobile/studyNook.m.webp":"/images/studio/studyNook/study_nook_timber.webp"})`}}),r.jsx("div",{className:`\r
      absolute\r
      inset-0\r
      bg-black/45\r
    `}),r.jsx("div",{className:`\r
      relative\r
      z-10\r
      h-full\r
      flex\r
      items-center\r
      justify-center\r
      text-center\r
      px-6\r
    `,children:r.jsxs("div",{children:[r.jsx("p",{className:`\r
          uppercase\r
          tracking-[0.3em]\r
          text-white/70\r
          text-xs\r
          mb-8\r
        `,children:"Start Your Journey"}),r.jsxs("h2",{className:`\r
          editorial-heading\r
          text-white\r
          text-5xl\r
          md:text-8xl\r
          leading-[0.95]\r
          tracking-[-0.04em]\r
          mb-10\r
        `,children:["Ready To Create",r.jsx("br",{}),"Your Backyard Space?"]}),r.jsxs("div",{className:`\r
          flex\r
          flex-col\r
          sm:flex-row\r
          gap-4\r
          justify-center\r
        `,children:[r.jsx("button",{onClick:()=>e("/contact"),className:`\r
            px-10\r
            py-4\r
            bg-[#C7A77A]\r
            text-white\r
            uppercase\r
            tracking-[0.25em]\r
            text-xs\r
            transition-all\r
            duration-300\r
            hover:scale-105\r
          `,children:"Book Consultation"}),r.jsx("button",{onClick:()=>e("/products"),className:`\r
            px-10\r
            py-4\r
            border\r
            border-white\r
            text-white\r
            uppercase\r
            tracking-[0.25em]\r
            text-xs\r
            transition-all\r
            duration-300\r
            hover:bg-white\r
            hover:text-[#2E2A26]\r
          `,children:"Explore Designs"})]})]})})]})]})]})}const XE=[{title:"Home Offices",icon:B2},{title:"Creative Studios",icon:Tj},{title:"Fitness Rooms",icon:J2},{title:"Hobby Spaces",icon:Ej},{title:"Guest Accommodation",icon:M2}];function ZE({price:e,onExplore:n,onQuote:i}){return r.jsxs(oe.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},className:`\r
        mt-8\r
        rounded-[28px]\r
        border\r
        border-[#E8DED3]\r
        bg-[#FBF8F4]\r
        p-8\r
        transition-all\r
        duration-500\r
        hover:border-[#C7A77A]\r
        hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]\r
      `,children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-[11px] mb-1",children:"Backyard Studios"}),r.jsx("h3",{className:`\r
          editorial-heading\r
          text-[#2E2A26]\r
          text-2xl\r
          md:text-3xl\r
          leading-[1]\r
          tracking-[-0.02em]\r
          mb-5\r
        `,children:"Why Choose A Backyard Studio?"}),r.jsx("p",{className:"text-[#5F5A55] leading-relaxed mb-6",children:"Our backyard studios provide a versatile and stylish solution for homeowners needing extra space without the expense of a major home extension."}),r.jsx("div",{className:"w-full h-px bg-[#E8DED3] mb-6"}),r.jsx("div",{className:"grid grid-cols-2 gap-x-8 gap-y-5 mb-6",children:XE.map(o=>{const l=o.icon;return r.jsxs("div",{className:`\r
                flex\r
                items-center\r
                gap-4\r
                group\r
              `,children:[r.jsx("div",{className:`\r
                  w-10\r
                  h-10\r
                  rounded-full\r
                  border\r
                  border-[#D8C7AF]\r
                  bg-white\r
                  flex\r
                  items-center\r
                  justify-center\r
                  transition-all\r
                  duration-300\r
                  group-hover:bg-[#C7A77A]\r
                  group-hover:border-[#C7A77A]\r
                `,children:r.jsx(l,{className:`\r
                    w-5\r
                    h-5\r
                    text-[#C7A77A]\r
                    transition-all\r
                    duration-300\r
                    group-hover:text-white\r
                  `})}),r.jsx("span",{className:`\r
                  text-[#2E2A26]\r
                  text-sm\r
                  md:text-base\r
                  transition-colors\r
                  duration-300\r
                  group-hover:text-[#C7A77A]\r
                `,children:o.title})]},o.title)})}),r.jsx("div",{className:"w-full h-px bg-[#E8DED3] mb-6"}),r.jsx("p",{className:"text-[#5F5A55] leading-relaxed",children:"Designed for year round comfort and functionality, our studios are built using premium materials and modern construction methods to ensure durability and energy efficiency."}),r.jsx("div",{className:"border-t border-[#E8DED3] mt-8 pt-8",children:r.jsxs("div",{className:"flex flex-col gap-6",children:[r.jsxs("div",{children:[r.jsx("p",{className:"uppercase tracking-[0.25em] text-[#8B7E74] text-[11px] mb-2",children:"Starting From"}),r.jsx("h4",{className:`\r
          text-[#2E2A26]\r
          text-[2.4rem]\r
          md:text-[2.8rem]\r
          font-light\r
          leading-none\r
        `,children:e})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r.jsxs(oe.button,{whileHover:{y:-2},whileTap:{scale:.98},onClick:o=>{o.stopPropagation(),n()},className:`\r
          group\r
          inline-flex\r
          items-center\r
          gap-3\r
          rounded-full\r
          border\r
          border-[#2E2A26]\r
          px-6\r
          py-3.5\r
          text-[#2E2A26]\r
          text-sm\r
          transition-all\r
          duration-300\r
          hover:bg-[#2E2A26]\r
          hover:text-white\r
        `,children:["Explore Collection",r.jsx(on,{size:17,className:`\r
            transition-transform\r
            duration-300\r
            group-hover:translate-x-1\r
          `})]}),r.jsxs(oe.button,{whileHover:{y:-2},whileTap:{scale:.98},onClick:o=>{o.stopPropagation(),i()},className:`\r
          group\r
          inline-flex\r
          items-center\r
          gap-3\r
          rounded-full\r
          bg-[#C7A77A]\r
          border\r
          border-[#C7A77A]\r
          px-6\r
          py-3.5\r
          text-[#2E2A26]\r
          text-sm\r
          transition-all\r
          duration-300\r
          hover:bg-[#D7BE8A]\r
          hover:shadow-md\r
        `,children:["Get a Studio Quote",r.jsx(on,{size:17,className:`\r
            transition-transform\r
            duration-300\r
            group-hover:translate-x-1\r
          `})]})]})]})})]})}const JE=[{title:"Comfortable Independent Living",icon:us},{title:"Functional Layouts",icon:dj},{title:"Modern Finishes",icon:Uj},{title:"Energy Efficient Performance",icon:mj},{title:"Long Term Flexibility",icon:Mj}];function e5({price:e,onExplore:n,onQuote:i}){return r.jsxs(oe.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},className:`\r
        mt-8\r
        rounded-[28px]\r
        border\r
        border-[#E8DED3]\r
        bg-[#FBF8F4]\r
        p-8\r
        transition-all\r
        duration-500\r
        hover:border-[#C7A77A]\r
        hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]\r
      `,children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-[11px] mb-1",children:"Granny Flats"}),r.jsx("h3",{className:`\r
          editorial-heading\r
          text-[#2E2A26]\r
          text-2xl\r
          md:text-3xl\r
          leading-[1]\r
          tracking-[-0.02em]\r
          mb-5\r
        `,children:"Why Choose A Granny Flat?"}),r.jsx("p",{className:"text-[#5F5A55] leading-relaxed mb-6",children:"Create additional living space for family members, guests or investment opportunities with a custom designed granny flat that blends seamlessly with your existing home."}),r.jsx("div",{className:"w-full h-px bg-[#E8DED3] mb-6"}),r.jsx("div",{className:"grid grid-cols-2 gap-x-8 gap-y-5 mb-6",children:JE.map(o=>{const l=o.icon;return r.jsxs("div",{className:`\r
                flex\r
                items-center\r
                gap-4\r
                group\r
              `,children:[r.jsx("div",{className:`\r
                  w-10\r
                  h-10\r
                  rounded-full\r
                  border\r
                  border-[#D8C7AF]\r
                  bg-white\r
                  flex\r
                  items-center\r
                  justify-center\r
                  transition-all\r
                  duration-300\r
                  group-hover:bg-[#C7A77A]\r
                  group-hover:border-[#C7A77A]\r
                `,children:r.jsx(l,{className:`\r
                    w-5\r
                    h-5\r
                    text-[#C7A77A]\r
                    transition-all\r
                    duration-300\r
                    group-hover:text-white\r
                  `})}),r.jsx("span",{className:`\r
                  text-[#2E2A26]\r
                  text-sm\r
                  md:text-base\r
                  transition-colors\r
                  duration-300\r
                  group-hover:text-[#C7A77A]\r
                `,children:o.title})]},o.title)})}),r.jsx("div",{className:"w-full h-px bg-[#E8DED3] mb-6"}),r.jsx("p",{className:"text-[#5F5A55] leading-relaxed",children:"Whether you're accommodating ageing parents, adult children or creating a rental opportunity, every Backyard Nest granny flat is thoughtfully designed to maximize comfort, functionality and long term value while meeting Victorian building requirements."}),r.jsx("div",{className:"border-t border-[#E8DED3] mt-8 pt-8",children:r.jsxs("div",{className:"flex flex-col gap-6",children:[r.jsxs("div",{children:[r.jsx("p",{className:"uppercase tracking-[0.25em] text-[#8B7E74] text-[11px] mb-2",children:"Starting From"}),r.jsx("h4",{className:`\r
          text-[#2E2A26]\r
          text-[2.4rem]\r
          md:text-[2.8rem]\r
          font-light\r
          leading-none\r
        `,children:e})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r.jsxs(oe.button,{whileHover:{y:-2},whileTap:{scale:.98},onClick:o=>{o.stopPropagation(),n()},className:`\r
          group\r
          inline-flex\r
          items-center\r
          gap-3\r
          rounded-full\r
          border\r
          border-[#2E2A26]\r
          px-6\r
          py-3.5\r
          text-[#2E2A26]\r
          text-sm\r
          transition-all\r
          duration-300\r
          hover:bg-[#2E2A26]\r
          hover:text-white\r
        `,children:["Explore Collection",r.jsx(on,{size:17,className:`\r
            transition-transform\r
            duration-300\r
            group-hover:translate-x-1\r
          `})]}),r.jsxs(oe.button,{whileHover:{y:-2},whileTap:{scale:.98},onClick:o=>{o.stopPropagation(),i()},className:`\r
          group\r
          inline-flex\r
          items-center\r
          gap-3\r
          rounded-full\r
          bg-[#C7A77A]\r
          border\r
          border-[#C7A77A]\r
          px-6\r
          py-3.5\r
          text-[#2E2A26]\r
          text-sm\r
          transition-all\r
          duration-300\r
          hover:bg-[#D7BE8A]\r
          hover:shadow-md\r
        `,children:["Get a Granny Flat Quote",r.jsx(on,{size:17,className:`\r
            transition-transform\r
            duration-300\r
            group-hover:translate-x-1\r
          `})]})]})]})})]})}const t5=[{id:"studio",tag:"Work • Create • Retreat",title:"Backyard Studios",description:"Purpose-built backyard spaces for focused work, creative pursuits and quiet retreat. Create a dedicated office, studio or personal sanctuary without extending your home.",image:"/images/studio/studio1/mobile/studio1.m.webp",from:"$71,090"},{id:"granny",tag:"Live • Host • Earn",title:"Granny Flats",description:"Fully self contained living spaces designed for family, guests and rental income. A smart way to add flexibility and value to your property.",image:"/images/granny_flats_hero.webp",from:"$169,998"}];function n5(){const e=Vt();return j.useEffect(()=>{window.scrollTo(0,0)},[]),r.jsxs("main",{className:"bg-[#F5F0EB]",children:[r.jsx(Yt,{title:"Our Products | Backyard Nest",description:"Explore our full range of backyard pods, home studios & granny flats — custom designed and built across Melbourne & Victoria. Find your perfect fit.",url:"https://backyardnest.com.au/products"}),r.jsx("section",{className:"min-h-[85vh] lg:h-screen flex items-center pt-24 lg:pt-0",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-8 lg:px-16",children:[r.jsx(oe.p,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-8",children:"Backyard Studios & Granny Flats Melbourne"}),r.jsxs(oe.h1,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},className:`\r
        editorial-heading\r
        text-[#2E2A26]\r
        text-[clamp(3.2rem,12vw,8rem)]\r
        leading-[0.92]\r
        tracking-[-0.05em]\r
        max-w-5xl\r
      `,children:["Spaces Designed",r.jsx("br",{}),"For Modern Living"]}),r.jsx(oe.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:`\r
        mt-8\r
        text-[#5F5A55]\r
        text-base\r
        md:text-lg\r
        leading-relaxed\r
        max-w-2xl\r
      `,children:"Explore our collection of architecturally designed backyard studios, granny flats and garden retreats that combine style, functionality and long term value."})]})}),t5.map((n,i)=>r.jsx("section",{className:"py-16 lg:py-24",children:r.jsx("div",{className:"max-w-[1700px] mx-auto w-full px-6 lg:px-7",children:r.jsxs("div",{onClick:()=>e(`/products/${n.id}`),className:`
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-16
          items-center
          cursor-pointer
          group
          ${i%2===1?"lg:[&>*:first-child]:order-2":""}
        `,children:[r.jsx(oe.div,{initial:{opacity:0,scale:1.05},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.8},className:`\r
            overflow-hidden\r
            rounded-[24px]\r
            h-[400px]\r
            sm:h-[450px]\r
            lg:h-[90vh]\r
          `,children:r.jsx(nr,{src:n.image,alt:n.title,className:`\r
              w-full\r
              h-full\r
              transition-all\r
              duration-1000\r
              group-hover:scale-105\r
            `})}),r.jsxs(oe.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},children:[r.jsx("p",{className:`\r
              uppercase\r
              tracking-[0.25em]\r
              text-[#A08E7C]\r
              text-xs\r
              mb-2\r
            `,children:n.tag}),r.jsx("h2",{className:`\r
              editorial-heading\r
              text-[#2E2A26]\r
              text-[clamp(2.8rem,10vw,5rem)]\r
              leading-[0.95]\r
              tracking-[-0.05em]\r
              mb-1\r
              transition-all\r
              duration-500\r
              group-hover:text-[#C7A77A]\r
            `,children:n.title}),r.jsx("div",{className:"w-16 h-px bg-[#C7A77A] mb-1"}),n.id==="studio"&&r.jsx(ZE,{price:n.from,onExplore:()=>e(`/products/${n.id}`),onQuote:()=>e("/contact?type=studio")}),n.id==="granny"&&r.jsx(e5,{price:n.from,onExplore:()=>e(`/products/${n.id}`),onQuote:()=>e("/contact?type=granny")})]})]})})},n.id)),r.jsxs("section",{className:"relative bg-[#F5F0EB] py-24 lg:py-32 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 pointer-events-none",children:r.jsx("div",{className:"absolute -right-32 top-0 text-[380px] font-serif text-[#ECE3DA] leading-none",children:"BN"})}),r.jsx("div",{className:"relative max-w-7xl mx-auto px-8 lg:px-16",children:r.jsxs("div",{className:"grid lg:grid-cols-[34%_66%] gap-16 items-start",children:[r.jsxs(oe.div,{initial:{opacity:0,x:-40},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"lg:sticky lg:top-28",children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-6",children:"Premium Backyard Spaces"}),r.jsxs("h2",{className:`\r
            editorial-heading\r
            text-[#2E2A26]\r
            text-5xl\r
            md:text-6xl\r
            leading-[0.95]\r
            transition-all\r
            duration-700\r
            hover:tracking-[-0.02em]\r
          `,children:["Designed Around",r.jsx("br",{}),"The Way You Live"]}),r.jsx("div",{className:"w-20 h-[2px] bg-[#C7A77A] mt-10 transition-all duration-500 hover:w-32"})]}),r.jsxs(oe.div,{initial:{opacity:0,x:40},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"relative",children:[r.jsx("div",{className:"absolute left-4 top-0 bottom-0 w-px bg-[#DED6CF]"}),r.jsx("div",{className:"space-y-8",children:["At Backyard Nest, we create architecturally designed backyard studios, granny flats and garden retreats that help Melbourne homeowners unlock the full potential of their property.","Whether you're looking for a dedicated home office, guest accommodation, teenage retreat, creative studio or independent living space, our collection offers thoughtfully designed solutions that combine style, functionality and long term value.","Every Backyard Nest space is designed to complement your home, maximise available space and meet Victorian building requirements. From compact backyard studio to fully self contained granny flats, our designs can be customised to suit your lifestyle, budget and site conditions."].map((n,i)=>r.jsxs(oe.div,{whileHover:{y:-6},transition:{duration:.3},className:`\r
                group\r
                relative\r
                ml-10\r
                rounded-[30px]\r
                bg-white/55\r
                backdrop-blur-sm\r
                border\r
                border-[#E8DED3]\r
                p-6\r
                transition-all\r
                duration-500\r
                hover:border-[#C7A77A]\r
                hover:bg-white\r
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]\r
              `,children:[r.jsx("div",{className:`\r
                  absolute\r
                  -left-[42px]\r
                  top-10\r
                  w-4\r
                  h-4\r
                  rounded-full\r
                  bg-[#C7A77A]\r
                  border-4\r
                  border-[#F5F0EB]\r
                  transition-all\r
                  duration-500\r
                  group-hover:scale-150\r
                `}),r.jsx("p",{className:`\r
                  text-[#5F5A55]\r
                  text-lg\r
                  leading-relaxed\r
                  transition-colors\r
                  duration-500\r
                  group-hover:text-[#2E2A26]\r
                `,children:n})]},i))})]})]})})]}),r.jsx(oe.section,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"py-24 lg:py-36 bg-[#FBF8F4]",children:r.jsxs("div",{className:"max-w-5xl mx-auto px-6",children:[r.jsx(oe.div,{whileHover:{width:120},transition:{duration:.4},className:"w-20 h-px bg-[#C7A77A] mx-auto mb-10"}),r.jsx("p",{className:"uppercase tracking-[0.35em] text-[#A08E7C] text-xs text-center mb-6",children:"Backyard Studios & Granny Flats Melbourne"}),r.jsxs("h2",{className:`\r
        editorial-heading\r
        text-[#2E2A26]\r
        text-center\r
        text-[clamp(2.8rem,10vw,7rem)]\r
        leading-[0.95]\r
      `,children:["Let's Create Your",r.jsx("br",{}),"Perfect Backyard Space."]}),r.jsxs("p",{className:`\r
        mt-8\r
        text-[#5F5A55]\r
        text-base\r
        md:text-lg\r
        leading-relaxed\r
        max-w-3xl\r
        mx-auto\r
        text-center\r
      `,children:["Whether you're planning a ",r.jsx("strong",{children:"backyard studio"}),", ",r.jsx("strong",{children:"granny flat"}),", ",r.jsx("strong",{children:"home office"})," or ",r.jsx("strong",{children:"custom garden retreat"}),", our experienced team is here to help bring your vision to life with beautifully designed spaces tailored to your property, lifestyle and budget."]}),r.jsxs("p",{className:`\r
        mt-5\r
        text-[#5F5A55]\r
        text-base\r
        md:text-lg\r
        leading-relaxed\r
        max-w-3xl\r
        mx-auto\r
        text-center\r
      `,children:["Backyard Nest proudly designs and builds premium ",r.jsx("strong",{children:"backyard studios"})," and ",r.jsx("strong",{children:"granny flats"})," across ",r.jsx("strong",{children:"Melbourne"})," and regional ",r.jsx("strong",{children:"Victoria"}),", including ",r.jsx("strong",{children:"Geelong"}),", ",r.jsx("strong",{children:"Mornington Peninsula"}),", ",r.jsx("strong",{children:"Ballarat"}),", ",r.jsx("strong",{children:"Bendigo"}),", the ",r.jsx("strong",{children:"Eastern Suburbs"}),", ",r.jsx("strong",{children:"Northern Suburbs"}),", ",r.jsx("strong",{children:"Western Suburbs"})," and ",r.jsx("strong",{children:"South Eastern Melbourne"}),"."]}),r.jsx("div",{className:"flex flex-wrap justify-center gap-3 mt-12",children:["Melbourne","Geelong","Mornington Peninsula","Ballarat","Bendigo","Eastern","Northern","Western","South East"].map(n=>r.jsx(oe.div,{whileHover:{y:-4,scale:1.05},transition:{duration:.25},className:`\r
            px-5\r
            py-2.5\r
            rounded-full\r
            border\r
            border-[#D8C7AF]\r
            bg-white\r
            text-[#5F5A55]\r
            text-sm\r
            cursor-default\r
            hover:border-[#C7A77A]\r
            hover:text-[#2E2A26]\r
            hover:shadow-lg\r
          `,children:n},n))}),r.jsxs(oe.div,{whileHover:{y:-6},transition:{duration:.3},className:`\r
        mt-16\r
        rounded-[32px]\r
        border\r
        border-[#E6DDD4]\r
        bg-white\r
        p-10\r
        shadow-sm\r
      `,children:[r.jsx("h3",{className:`\r
          editorial-heading\r
          text-[#2E2A26]\r
          text-3xl\r
          md:text-4xl\r
          text-center\r
          mb-4\r
        `,children:"Ready To Get Started?"}),r.jsx("p",{className:`\r
          text-[#5F5A55]\r
          text-center\r
          max-w-2xl\r
          mx-auto\r
          leading-relaxed\r
        `,children:"Book a free consultation and let our team help you design the perfect backyard studio or granny flat for your property."}),r.jsx("div",{className:"flex justify-center mt-10",children:r.jsxs(oe.button,{whileHover:{scale:1.04,y:-2},whileTap:{scale:.98},onClick:()=>e("/contact"),className:`\r
            group\r
            inline-flex\r
            items-center\r
            gap-4\r
            rounded-full\r
            bg-[#2E2A26]\r
            px-10\r
            py-5\r
            text-white\r
            text-sm\r
            uppercase\r
            tracking-[0.2em]\r
            transition-all\r
            duration-300\r
            hover:bg-[#C7A77A]\r
            hover:shadow-xl\r
          `,children:["Book Consultation",r.jsx(on,{size:18,className:`\r
              transition-transform\r
              duration-300\r
              group-hover:translate-x-1\r
            `})]})})]})]})})]})}function r5(){const e=Vt();j.useEffect(()=>{window.scrollTo(0,0)},[]);const n=[{q:"Do I need council approval for a backyard studio in Melbourne?",a:"Council approval depends on the size, intended use and location of your backyard studio. Some projects may qualify under exempt or streamlined approval pathways, while others require permits. Backyard Nest guides you through every step of the approval process."},{q:"How much does a backyard studio cost?",a:"Pricing varies depending on the studio size, site conditions, finishes and level of customisation. Our studio collection starts from approximately $71,000, with tailored quotes available for bespoke projects."},{q:"Can I use a backyard studio as a home office?",a:"Absolutely. Many clients choose Backyard Nest studios as dedicated home offices, creative workspaces, consulting rooms, wellness studios or private retreats separate from the main home."},{q:"Can a granny flat be rented in Victoria?",a:"Rental regulations vary depending on local council requirements and the intended use of the dwelling. Our team can advise you on the relevant planning and building regulations for your property."},{q:"Do you build on sloping blocks?",a:"Yes. Backyard Nest specialises in designing studios for challenging sites including sloping blocks, narrow lots and difficult access locations."},{q:"Can I customise the design?",a:"Yes. Every Backyard Nest project can be customised with different layouts, cladding options, colours, glazing, internal finishes and site-specific design solutions."},{q:"How long does installation take?",a:"Most projects are completed within several weeks after approvals, manufacturing and site preparation. Your timeline will depend on the design and project complexity."},{q:"Where do you build?",a:"We proudly design and build premium backyard studios and granny flats throughout Melbourne and regional Victoria, including bayside, eastern, northern, western and southeastern suburbs."}],[i,o]=j.useState(null),[l,u]=j.useState("");return r.jsxs("div",{className:"bg-[#F5F0EB] text-[#2E2A26]",children:[r.jsx(Yt,{title:"FAQs | Backyard Nest",description:"Confused about granny flat permits or costs in Melbourne? We answer the questions homeowners ask most — before you commit to a build.",url:"https://backyardnest.com.au/faq"}),r.jsx("section",{className:"relative overflow-hidden border-b border-[#E8DED3]",children:r.jsx("div",{className:"max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 pt-36 lg:pt-44 pb-24",children:r.jsxs("div",{className:"grid lg:grid-cols-[58%_42%] gap-16 items-end",children:[r.jsxs("div",{children:[r.jsx("p",{className:`
            uppercase
            tracking-[0.35em]
            text-[#A08E7C]
            text-xs
            mb-8
          `,children:"Backyard Nest Knowledge Centre"}),r.jsxs("h1",{className:`
            editorial-heading
            text-[#2E2A26]
            text-[clamp(3.8rem,9vw,8rem)]
            leading-[0.88]
            tracking-[-0.05em]
          `,children:["Questions,",r.jsx("br",{}),"Answered."]})]}),r.jsxs("div",{className:"lg:pb-4",children:[r.jsx("div",{className:"w-20 h-px bg-[#C7A77A] mb-8"}),r.jsxs("p",{className:`
            text-[#5F5A55]
            text-lg
            md:text-xl
            leading-relaxed
            max-w-xl
          `,children:["Everything you need to know about",r.jsxs("strong",{className:"text-[#2E2A26]",children:[" ","backyard studios,"]})," ",r.jsx("strong",{className:"text-[#2E2A26]",children:"granny flats,"})," ","permits, pricing, custom designs and installation throughout Melbourne and regional Victoria."]})]})]})})}),r.jsx("section",{className:"py-14 lg:py-20 border-b border-[#E8DED3]",children:r.jsx("div",{className:"max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16",children:r.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-5",children:[r.jsxs("div",{className:`
          group
          rounded-[28px]
          border
          border-[#E8DED3]
          bg-white
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#C7A77A]
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)]
        `,children:[r.jsx("div",{className:`
            w-14
            h-14
            rounded-full
            border
            border-[#DCCDBB]
            bg-[#C7A77A]/10
            flex
            items-center
            justify-center
            mb-6
            transition-all
            duration-300
            group-hover:bg-[#C7A77A]
          `,children:r.jsx(ku,{size:24,className:`
              text-[#C7A77A]
              group-hover:text-white
              transition-colors
            `})}),r.jsxs("h3",{className:"editorial-heading text-3xl text-[#2E2A26] mb-3",children:["Council",r.jsx("br",{}),"Advice"]}),r.jsx("p",{className:"text-[#8B7E74] leading-relaxed text-sm",children:"Guidance on planning permits, approvals and local council requirements across Victoria."})]}),r.jsxs("div",{className:`
          group
          rounded-[28px]
          border
          border-[#E8DED3]
          bg-white
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#C7A77A]
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)]
        `,children:[r.jsx("div",{className:`
            w-14
            h-14
            rounded-full
            border
            border-[#DCCDBB]
            bg-[#C7A77A]/10
            flex
            items-center
            justify-center
            mb-6
            transition-all
            duration-300
            group-hover:bg-[#C7A77A]
          `,children:r.jsx(Pf,{size:24,className:`
              text-[#C7A77A]
              group-hover:text-white
              transition-colors
            `})}),r.jsxs("h3",{className:"editorial-heading text-3xl text-[#2E2A26] mb-3",children:["Custom",r.jsx("br",{}),"Design"]}),r.jsx("p",{className:"text-[#8B7E74] leading-relaxed text-sm",children:"Every backyard studio and granny flat can be tailored to your site, lifestyle and vision."})]}),r.jsxs("div",{className:`
          group
          rounded-[28px]
          border
          border-[#E8DED3]
          bg-white
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#C7A77A]
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)]
        `,children:[r.jsx("div",{className:`
            w-14
            h-14
            rounded-full
            border
            border-[#DCCDBB]
            bg-[#C7A77A]/10
            flex
            items-center
            justify-center
            mb-6
            transition-all
            duration-300
            group-hover:bg-[#C7A77A]
          `,children:r.jsx(D2,{size:24,className:`
              text-[#C7A77A]
              group-hover:text-white
              transition-colors
            `})}),r.jsxs("h3",{className:"editorial-heading text-3xl text-[#2E2A26] mb-3",children:["Fixed",r.jsx("br",{}),"Pricing"]}),r.jsx("p",{className:"text-[#8B7E74] leading-relaxed text-sm",children:"Transparent quotations with no hidden surprises throughout your project."})]}),r.jsxs("div",{className:`
          group
          rounded-[28px]
          border
          border-[#E8DED3]
          bg-white
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#C7A77A]
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)]
        `,children:[r.jsx("div",{className:`
            w-14
            h-14
            rounded-full
            border
            border-[#DCCDBB]
            bg-[#C7A77A]/10
            flex
            items-center
            justify-center
            mb-6
            transition-all
            duration-300
            group-hover:bg-[#C7A77A]
          `,children:r.jsx(_f,{size:24,className:`
              text-[#C7A77A]
              group-hover:text-white
              transition-colors
            `})}),r.jsxs("h3",{className:"editorial-heading text-3xl text-[#2E2A26] mb-3",children:["10 Year",r.jsx("br",{}),"Warranty*"]}),r.jsx("p",{className:"text-[#8B7E74] leading-relaxed text-sm",children:"Premium materials backed by a comprehensive structural warranty* for complete peace of mind."})]})]})})}),r.jsx("section",{className:"py-20 border-b border-[#E8DED3] bg-[#FBF8F4]",children:r.jsx("div",{className:"max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16",children:r.jsxs("div",{className:"grid lg:grid-cols-[35%_65%] gap-16 items-start",children:[r.jsxs("div",{children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-6",children:"Find Your Answer"}),r.jsxs("h2",{className:`
            editorial-heading
            text-[clamp(2.8rem,7vw,5rem)]
            leading-[0.92]
            text-[#2E2A26]
            mb-8
          `,children:["Popular",r.jsx("br",{}),"Questions"]}),r.jsx("p",{className:"text-[#5F5A55] leading-relaxed",children:"Browse the questions our clients ask most often about backyard studios, granny flats, pricing, approvals and construction."})]}),r.jsxs("div",{children:[r.jsxs("div",{className:`
            flex
            items-center
            gap-4
            rounded-full
            border
            border-[#E8DED3]
            bg-white
            px-6
            py-4
            mb-10
          `,children:[r.jsx(Ij,{size:18,className:"text-[#A08E7C]"}),r.jsx("input",{value:l,onChange:d=>u(d.target.value),placeholder:"Search a question...",className:`
              bg-transparent
              outline-none
              w-full
              text-[#2E2A26]
              placeholder:text-[#A08E7C]
            `})]}),r.jsx("div",{className:"flex flex-wrap gap-4",children:n.filter(d=>d.q.toLowerCase().includes(l.toLowerCase())).map((d,h)=>r.jsx("button",{onClick:()=>{var m;o(h),(m=document.getElementById("faq-accordion"))==null||m.scrollIntoView({behavior:"smooth",block:"start"})},className:`
                  group
                  rounded-full
                  border
                  border-[#E8DED3]
                  bg-white
                  px-6
                  py-4
                  text-left
                  transition-all
                  duration-300
                  hover:border-[#C7A77A]
                  hover:bg-[#C7A77A]
                  hover:text-white
                `,children:r.jsxs("span",{className:"flex items-center gap-3",children:[d.q,r.jsx(Lx,{size:16,className:`
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    `})]})},d.q))})]})]})})}),r.jsx("section",{id:"faq-accordion",className:"bg-[#F5F0EB] py-24 lg:py-32",children:r.jsx("div",{className:"max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16",children:n.filter(d=>d.q.toLowerCase().includes(l.toLowerCase())).map((d,h)=>{const m=i===h;return r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:h*.05},className:`
              group
              border-b
              border-[#E6DDD4]
            `,children:[r.jsxs("button",{onClick:()=>o(m?null:h),className:`
                w-full
                py-10
                flex
                items-start
                justify-between
                gap-10
                text-left
              `,children:[r.jsxs("div",{className:"flex gap-8",children:[r.jsx("span",{className:`
                    editorial-heading
                    text-[#C7A77A]
                    text-3xl
                    lg:text-5xl
                    leading-none
                    w-16
                    shrink-0
                  `,children:String(h+1).padStart(2,"0")}),r.jsx("div",{children:r.jsx("h3",{className:`
                      editorial-heading
                      text-[#2E2A26]
                      text-[clamp(1.7rem,2vw,2.8rem)]
                      leading-[1.05]
                      transition-colors
                      duration-300
                      group-hover:text-[#C7A77A]
                    `,children:d.q})})]}),r.jsx("div",{className:`
                  w-12
                  h-12
                  rounded-full
                  border
                  border-[#DCCDBB]
                  flex
                  items-center
                  justify-center
                  shrink-0
                  transition-all
                  duration-300

                  ${m?"bg-[#C7A77A] border-[#C7A77A] rotate-45":"bg-white"}
                `,children:r.jsx("span",{className:`
                    text-3xl
                    leading-none

                    ${m?"text-white":"text-[#C7A77A]"}
                  `,children:"+"})})]}),r.jsx("div",{className:`
                grid
                transition-all
                duration-500

                ${m?"grid-rows-[1fr]":"grid-rows-[0fr]"}
              `,children:r.jsx("div",{className:"overflow-hidden",children:r.jsxs("div",{className:`
                    ml-[96px]
                    lg:ml-[112px]
                    max-w-3xl
                    pb-10
                  `,children:[r.jsx("div",{className:`
                      w-16
                      h-px
                      bg-[#C7A77A]
                      mb-8
                    `}),r.jsx("p",{className:`
                      text-[#5F5A55]
                      text-base
                      md:text-lg
                      leading-8
                    `,children:d.a})]})})})]},d.q)})})}),r.jsx("section",{className:"bg-[#FBF8F4] py-24 lg:py-32",children:r.jsxs("div",{className:"max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16",children:[r.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-20",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-6",children:"Our Process"}),r.jsxs("h2",{className:`
          editorial-heading
          text-[#2E2A26]
          text-[clamp(3rem,7vw,5.8rem)]
          leading-[0.92]
          mb-8
        `,children:["From First",r.jsx("br",{}),"Conversation",r.jsx("br",{}),"To Completion."]}),r.jsx("p",{className:"text-[#5F5A55] text-lg leading-relaxed",children:"Every Backyard Nest project follows a proven process that ensures a seamless experience from your first consultation through design, approvals, construction and final handover."})]}),r.jsx("div",{className:"grid md:grid-cols-2 xl:grid-cols-3 gap-6",children:[{number:"01",title:"Free Consultation",icon:Rd,description:"Discuss your goals, budget and property with our design team."},{number:"02",title:"Site Assessment",icon:Tf,description:"We evaluate your block, access, orientation and site conditions."},{number:"03",title:"Custom Design",icon:Pf,description:"Choose a studio or granny flat and personalise every finish."},{number:"04",title:"Council & Approvals",icon:ku,description:"We assist with planning approvals and required documentation."},{number:"05",title:"Construction",icon:sj,description:"Your studio is manufactured using premium Australian materials."},{number:"06",title:"Installation",icon:us,description:"Fast installation and final handover ready for immediate use."}].map(d=>{const h=d.icon;return r.jsxs(oe.div,{whileHover:{y:-8},transition:{duration:.25},className:`
              group
              rounded-[28px]
              border
              border-[#E8DED3]
              bg-white
              p-8
              transition-all
              duration-500
              hover:border-[#C7A77A]
              hover:shadow-[0_18px_40px_rgba(0,0,0,.05)]
            `,children:[r.jsxs("div",{className:"flex justify-between items-start mb-10",children:[r.jsx("span",{className:`
                  editorial-heading
                  text-5xl
                  text-[#E2D5C5]
                  group-hover:text-[#C7A77A]
                  transition-colors
                `,children:d.number}),r.jsx("div",{className:`
                  w-14
                  h-14
                  rounded-full
                  border
                  border-[#DCCDBB]
                  bg-[#C7A77A]/10
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:bg-[#C7A77A]
                `,children:r.jsx(h,{size:24,className:`
                    text-[#C7A77A]
                    group-hover:text-white
                    transition-colors
                  `})})]}),r.jsx("h3",{className:`
                editorial-heading
                text-3xl
                text-[#2E2A26]
                mb-5
              `,children:d.title}),r.jsx("p",{className:`
                text-[#5F5A55]
                leading-relaxed
              `,children:d.description})]},d.number)})})]})}),r.jsx("section",{className:"bg-[#F5F0EB] py-24 lg:py-32",children:r.jsx("div",{className:"max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16",children:r.jsxs("div",{className:"grid lg:grid-cols-[45%_55%] gap-16 items-center",children:[r.jsxs("div",{children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-6",children:"Council Approvals"}),r.jsxs("h2",{className:`
            editorial-heading
            text-[#2E2A26]
            text-[clamp(3rem,7vw,5.5rem)]
            leading-[0.92]
            mb-8
          `,children:["We Help You",r.jsx("br",{}),"Navigate",r.jsx("br",{}),"The Process."]}),r.jsx("div",{className:"w-20 h-px bg-[#C7A77A] mb-8"}),r.jsx("p",{className:`
            text-[#5F5A55]
            text-lg
            leading-relaxed
            max-w-xl
          `,children:"Every council has different planning requirements. Our experienced team assists homeowners throughout Melbourne and Victoria by helping determine what approvals may be required and preparing the necessary documentation for your project."})]}),r.jsx("div",{className:"grid sm:grid-cols-2 gap-5",children:[{title:"Planning Advice",icon:ku,description:"Guidance on planning requirements based on your property and local council."},{title:"Site Assessment",icon:Tf,description:"We evaluate your site to identify any design or access considerations early."},{title:"Documentation",icon:Bj,description:"Support with drawings, specifications and information required for approvals."},{title:"End-to-End Support",icon:_f,description:"From consultation through installation, our team is here to assist every step of the way."}].map(d=>{const h=d.icon;return r.jsxs(oe.div,{whileHover:{y:-6},transition:{duration:.25},className:`
        group
        rounded-[28px]
        border
        border-[#E8DED3]
        bg-white
        p-7
        transition-all
        duration-500
        hover:border-[#C7A77A]
        hover:shadow-[0_18px_40px_rgba(0,0,0,0.05)]
      `,children:[r.jsx("div",{className:`
          w-14
          h-14
          rounded-full
          border
          border-[#DCCDBB]
          bg-[#C7A77A]/10
          flex
          items-center
          justify-center
          mb-6
          transition-all
          duration-300
          group-hover:bg-[#C7A77A]
          group-hover:border-[#C7A77A]
        `,children:r.jsx(h,{size:24,className:`
            text-[#C7A77A]
            transition-colors
            duration-300
            group-hover:text-white
          `})}),r.jsx("h3",{className:`
          editorial-heading
          text-2xl
          text-[#2E2A26]
          mb-4
        `,children:d.title}),r.jsx("p",{className:`
          text-[#5F5A55]
          leading-relaxed
        `,children:d.description})]},d.title)})})]})})}),r.jsx("section",{className:"bg-[#FBF8F4] py-24 lg:py-32",children:r.jsxs("div",{className:"max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16",children:[r.jsxs("div",{className:"grid lg:grid-cols-[38%_62%] gap-16 items-start",children:[r.jsxs("div",{className:"lg:sticky lg:top-28",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-6",children:"Service Areas"}),r.jsxs("h2",{className:`
            editorial-heading
            text-[#2E2A26]
            text-[clamp(3rem,7vw,5.5rem)]
            leading-[0.92]
            mb-8
          `,children:["Proudly",r.jsx("br",{}),"Building Across",r.jsx("br",{}),"Victoria."]}),r.jsx("div",{className:"w-20 h-px bg-[#C7A77A] mb-8"}),r.jsx("p",{className:`
            text-[#5F5A55]
            text-lg
            leading-relaxed
            max-w-md
          `,children:"Backyard Nest designs and builds premium backyard studios, granny flats and custom backyard spaces throughout Melbourne and regional Victoria."})]}),r.jsx("div",{className:"grid sm:grid-cols-2 gap-5",children:[{region:"Eastern Melbourne",suburbs:"Balwyn • Camberwell • Blackburn • Doncaster • Surrey Hills"},{region:"South Eastern",suburbs:"Berwick • Beaconsfield • Narre Warren • Officer • Clyde"},{region:"Bayside",suburbs:"Brighton • Sandringham • Black Rock • Hampton • Beaumaris"},{region:"Mornington Peninsula",suburbs:"Mornington • Mount Eliza • Mount Martha • Rosebud"},{region:"North & North East",suburbs:"Eltham • Greensborough • Templestowe • Warrandyte"},{region:"Regional Victoria",suburbs:"Geelong • Ballarat • Bendigo • Warragul • Traralgon"}].map(d=>r.jsxs(oe.div,{whileHover:{y:-5},transition:{duration:.25},className:`
              group
              rounded-[28px]
              border
              border-[#E8DED3]
              bg-white
              p-7
              transition-all
              duration-500
              hover:border-[#C7A77A]
              hover:shadow-[0_18px_40px_rgba(0,0,0,0.05)]
            `,children:[r.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[r.jsx(Qo,{size:20,className:"text-[#C7A77A]"}),r.jsx("h3",{className:`
                  editorial-heading
                  text-2xl
                  text-[#2E2A26]
                `,children:d.region})]}),r.jsx("p",{className:`
                text-[#5F5A55]
                leading-relaxed
              `,children:d.suburbs})]},d.region))})]}),r.jsxs("div",{className:`
        mt-20
        rounded-[32px]
        border
        border-[#E8DED3]
        bg-white
        p-10
        flex
        flex-col
        lg:flex-row
        items-start
        lg:items-center
        justify-between
        gap-8
      `,children:[r.jsxs("div",{children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-3",children:"Outside These Areas?"}),r.jsx("h3",{className:"editorial-heading text-3xl text-[#2E2A26] mb-4",children:"We're Expanding Across Australia."}),r.jsx("p",{className:"text-[#5F5A55] max-w-2xl leading-relaxed",children:"If your suburb isn't listed, we'd still love to hear from you. Contact our team to discuss your project and upcoming expansion into new regions."})]}),r.jsxs("button",{onClick:()=>e("/contact"),className:`
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-[#2E2A26]
          px-8
          py-4
          transition-all
          duration-300
          hover:bg-[#2E2A26]
          hover:text-white
        `,children:["Contact Our Team",r.jsx(on,{size:18,className:`
            transition-transform
            duration-300
            group-hover:translate-x-1
          `})]})]})]})}),r.jsxs("section",{className:"bg-[#2E2A26] py-28 lg:py-36 overflow-hidden relative",children:[r.jsx("div",{className:`
      absolute
      inset-0
      opacity-[0.04]
      bg-[radial-gradient(circle_at_top_right,#C7A77A,transparent_55%)]
    `}),r.jsx("div",{className:"relative max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16",children:r.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[r.jsx("p",{className:`
          uppercase
          tracking-[0.35em]
          text-xs
          text-[#C7A77A]
          mb-8
        `,children:"Start Your Project"}),r.jsxs("h2",{className:`
          editorial-heading
          text-white
          text-[clamp(3rem,8vw,6.5rem)]
          leading-[0.92]
          mb-8
        `,children:["Let's Create",r.jsx("br",{}),"Your Perfect",r.jsx("br",{}),"Backyard Space."]}),r.jsxs("p",{className:`
          text-[#D7CEC5]
          text-lg
          md:text-xl
          leading-relaxed
          max-w-3xl
          mx-auto
        `,children:["Whether you're planning a",r.jsx("strong",{className:"text-white",children:" backyard studio"}),",",r.jsx("strong",{className:"text-white",children:" granny flat"}),", home office or custom outdoor space, our team is ready to help you transform your property."]}),r.jsxs("div",{className:`
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-5
          mt-14
        `,children:[r.jsxs("button",{onClick:()=>e("/booking"),className:`
            group
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#C7A77A]
            px-10
            py-5
            text-[#2E2A26]
            font-medium
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:bg-white
          `,children:["Book Free Consultation",r.jsx(on,{size:18,className:`
              transition-transform
              duration-300
              group-hover:translate-x-1
            `})]}),r.jsxs("button",{onClick:()=>e("/products"),className:`
            group
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-white/30
            px-10
            py-5
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-[#2E2A26]
          `,children:["Explore Designs",r.jsx(on,{size:18,className:`
              transition-transform
              duration-300
              group-hover:translate-x-1
            `})]})]}),r.jsx("div",{className:`
          mt-16
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8
          text-center
        `,children:["Custom Designs","Council Guidance","Premium Materials","10-Year Warranty*"].map(d=>r.jsxs("div",{children:[r.jsx("div",{className:"w-10 h-px bg-[#C7A77A] mx-auto mb-4"}),r.jsx("p",{className:`
                text-[#D7CEC5]
                uppercase
                tracking-[0.2em]
                text-[11px]
              `,children:d})]},d))})]})})]})]})}function a5(){j.useEffect(()=>{window.scrollTo(0,0)},[]);const e=Vt(),[n,i]=j.useState(!1),[o,l]=j.useState(!1),[u,d]=j.useState(""),[h]=j.useState(Date.now()),[m,g]=j.useState({projectType:"",studioModel:"",grannyModel:"",purpose:"",name:"",email:"",phone:"",suburb:"",address:"",message:""}),x=(F,q)=>{g(A=>({...A,[F]:q,...F==="projectType"?{studioModel:"",grannyModel:""}:{}}))},y=F=>Object.keys(F).map(q=>encodeURIComponent(q)+"="+encodeURIComponent(F[q])).join("&"),b=["Brighton","Bentleigh","Malvern","Kew","Mount Eliza","Sandringham","Frankston","St Kilda","Caulfield","Eltham","Another Melbourne suburb"],w=/^(\+61|0)[2-9]\d{8}$/,N=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,E=/^[A-Za-zÀ-ÿ' -]{2,60}$/,C=/^\d+.*$/,M=["test","testing","admin","asdf","qwerty","unknown","demo","sample"],I=["seo","backlink","guest post","guest-post","google ranking","rank your website","marketing agency","casino","bitcoin","crypto","loan","forex","viagra","porn","escort","telegram","whatsapp group","buy now","click here"],z=()=>{if((Date.now()-h)/1e3<5)return d("Please take a moment to complete the form before submitting."),!1;if(!E.test(m.name.trim()))return d("Please enter a valid name."),!1;if(M.includes(m.name.trim().toLowerCase()))return d("Please enter your real name."),!1;if(!w.test(m.phone.trim()))return d("Please enter a valid Australian phone number."),!1;const q=m.phone.replace(/\D/g,"");if(/^(.)\1+$/.test(q))return d("Please enter a valid phone number."),!1;if(!N.test(m.email.trim()))return d("Please enter a valid email address."),!1;if(!m.suburb)return d("Please select your suburb."),!1;if(!m.address.trim())return d("Please enter the property address."),!1;if(!C.test(m.address.trim()))return d("Please enter a valid property address."),!1;if(!m.projectType)return d("Please select a project type."),!1;if(m.projectType==="Studio"&&!m.studioModel)return d("Please select a studio model."),!1;if(m.projectType==="Granny Flat"&&!m.grannyModel)return d("Please select a granny flat model."),!1;if(!m.purpose)return d("Please select the purpose of your project."),!1;if(m.message.trim().length>1500)return d("Message is too long."),!1;if(m.message.trim().length<10)return d("Please tell us a little more about your project."),!1;if(/(asdf|qwerty|zxcv|123456|aaaa|bbbb|xxxxx)/i.test(m.message)||/(.)\1{7,}/.test(m.message))return d("Please enter a meaningful message."),!1;if((m.message.match(/https?:\/\//gi)||[]).length+(m.message.match(/www\./gi)||[]).length>1)return d("Please remove links from your message."),!1;const G=(m.name+m.email+m.message).toLowerCase();return I.some(de=>G.includes(de))?(d("Spam detected."),!1):(d(""),!0)},R=()=>{g({projectType:"",studioModel:"",grannyModel:"",purpose:"",name:"",email:"",phone:"",suburb:"",address:"",message:""})},U=async F=>{if(F.preventDefault(),!!z()){i(!0);try{if(!(await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:y({"form-name":"contact",...m})})).ok)throw new Error("Submission failed");R(),l(!0),e("/thank-you",{state:{formSubmitted:!0}})}catch{d("Something went wrong. Please try again.")}finally{i(!1)}}};return r.jsxs("div",{children:[r.jsx(Yt,{title:"Contact Us | Backyard Nest",description:"Ready to start your project? Contact Backyard Nest for a free, no-obligation quote on backyard pods, studios & granny flats across Melbourne & Victoria.",url:"https://backyardnest.com.au/contact"}),r.jsx("section",{className:"bg-[#F5F0EB] py-40",children:r.jsx("div",{className:"max-w-7xl mx-auto px-8 md:px-16",children:r.jsxs("div",{className:"grid lg:grid-cols-[60%_40%] gap-20 items-center",children:[r.jsxs("div",{children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"Contact Us"}),r.jsxs("h1",{className:"editorial-heading text-[#2E2A26] text-[clamp(4rem,7vw,7rem)] mt-8 leading-[0.95]",children:["Let's Start",r.jsx("br",{}),"A Conversation."]}),r.jsx("div",{className:"w-24 h-[2px] bg-[#C7A77A] mt-8 mb-8"}),r.jsx("p",{className:"text-[#5F5A55] text-lg max-w-xl leading-relaxed",children:"Whether you're planning a backyard studio, granny flat, home office or simply exploring ideas, our team is here to help guide your next step."}),r.jsxs("div",{className:"flex flex-wrap gap-4 mt-10",children:[r.jsx("div",{className:"bg-white px-5 py-3 rounded-full border border-[rgba(46,42,38,0.08)]",children:"Backyard Studios"}),r.jsx("div",{className:"bg-white px-5 py-3 rounded-full border border-[rgba(46,42,38,0.08)]",children:"Granny Flats"})]})]}),r.jsx("div",{children:r.jsxs("div",{className:"bg-white rounded-[32px] p-10 border border-[rgba(46,42,38,0.08)]",children:[r.jsx("span",{className:"uppercase tracking-[0.25em] text-[#A08E7C] text-xs",children:"Response Time"}),r.jsx("h3",{className:"text-[#2E2A26] text-3xl mt-4 mb-4",children:"We're Here To Help"}),r.jsx("p",{className:"text-[#5F5A55] leading-relaxed",children:"Most enquiries receive a response within 24 hours. Tell us about your project and we'll point you in the right direction."}),r.jsxs("div",{className:"flex items-center gap-3 mt-8",children:[r.jsx("div",{className:"w-3 h-3 rounded-full bg-[#C7A77A]"}),r.jsx("span",{className:"text-[#5F5A55] text-sm",children:"Average response time: Within 24 hours"})]})]})})]})})}),r.jsx("section",{className:"bg-white py-36",children:r.jsx("div",{className:"max-w-7xl mx-auto px-8 md:px-16",children:r.jsxs("div",{className:"grid lg:grid-cols-[35%_65%] gap-16",children:[r.jsxs("div",{children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"Your Project"}),r.jsxs("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.5rem,4vw,4rem)] mt-6 leading-tight",children:["Tell Us What",r.jsx("br",{}),"You're Planning"]}),r.jsx("p",{className:"text-[#5F5A55] mt-8 leading-relaxed",children:"Select the option that best describes your project and we'll tailor our response accordingly."})]}),r.jsxs("div",{className:"bg-white rounded-[32px] p-10 md:p-12 border border-[rgba(46,42,38,0.08)] shadow-sm",children:[r.jsx("h3",{className:"text-2xl text-[#2E2A26] mb-2",children:"Tell Us About Your Project"}),r.jsx("p",{className:"text-[#5F5A55] mb-10",children:"Share a few details and we'll get back to you within 24 hours."}),r.jsxs("form",{name:"contact",method:"POST","data-netlify":"true","netlify-honeypot":"bot-field",onSubmit:U,className:"space-y-8",children:[r.jsx("input",{type:"hidden",name:"form-name",value:"contact"}),r.jsx("p",{hidden:!0,children:r.jsxs("label",{children:["Don't fill this out:",r.jsx("input",{name:"bot-field"})]})}),r.jsxs("div",{children:[r.jsx("label",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4",children:"Project Type"}),r.jsx("div",{className:"flex flex-wrap gap-3",children:["Studio","Granny Flat","Not Sure Yet"].map(F=>r.jsxs("label",{className:"cursor-pointer",children:[r.jsx("input",{type:"radio",name:"projectType",value:F,checked:m.projectType===F,onChange:q=>x("projectType",q.target.value),className:"peer hidden"}),r.jsx("div",{className:`
            px-6 py-3
            rounded-full
            border
            border-[rgba(46,42,38,0.08)]
            bg-[#F5F0EB]
            text-[#5F5A55]
            transition-all
            duration-300
            peer-checked:bg-[#C7A77A]
            peer-checked:text-[#2E2A26]
            peer-checked:border-[#C7A77A]
            hover:border-[#C7A77A]
          `,children:F})]},F))})]}),m.projectType==="Studio"&&r.jsxs("div",{children:[r.jsx("label",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4",children:"Studio Model"}),r.jsxs("select",{name:"studioModel",required:!0,value:m.studioModel,onChange:F=>x("studioModel",F.target.value),className:`
        w-full
        px-5
        py-4
        rounded-2xl
        border
        border-[rgba(46,42,38,0.08)]
        bg-[#FAF8F5]
        text-[#2E2A26]
        appearance-none
        focus:border-[#C7A77A]
        focus:bg-white
        outline-none
        transition-all
      `,children:[r.jsx("option",{value:"",children:"Select Studio Model"}),r.jsx("option",{value:"The Nest 15",children:"The Nest 15"}),r.jsx("option",{value:"The Aspen 20",children:"The Aspen 20"}),r.jsx("option",{value:"The Brighton 22",children:"The Brighton 22"}),r.jsx("option",{value:"The Vista 26",children:"The Vista 26"})]})]}),m.projectType==="Granny Flat"&&r.jsxs("div",{children:[r.jsx("label",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4",children:"Granny Flat Model"}),r.jsxs("select",{name:"grannyModel",required:!0,value:m.grannyModel,onChange:F=>x("grannyModel",F.target.value),className:`
        w-full
        px-5
        py-4
        rounded-2xl
        border
        border-[rgba(46,42,38,0.08)]
        bg-[#FAF8F5]
        text-[#2E2A26]
        appearance-none
        focus:border-[#C7A77A]
        focus:bg-white
        outline-none
        transition-all
      `,children:[r.jsx("option",{value:"",children:"Select Granny Flat Model"}),r.jsx("option",{value:"The Wattle 60",children:"The Wattle 60"}),r.jsx("option",{value:"The Yarra 38",children:"The Yarra 38"}),r.jsx("option",{value:"The Yarra 44",children:"The Yarra 44"}),r.jsx("option",{value:"The Palmview 44",children:"The Palmview 44"}),r.jsx("option",{value:"The Palmview 38",children:"The Palmview 38"}),r.jsx("option",{value:"The Haven 48",children:"The Haven 48"}),r.jsx("option",{value:"Custom Design",children:"Custom Design"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4",children:"Purpose of Your Project"}),r.jsxs("select",{name:"purpose",required:!0,value:m.purpose,onChange:F=>x("purpose",F.target.value),className:`
      w-full
      px-5
      py-4
      rounded-2xl
      border
      border-[rgba(46,42,38,0.08)]
      bg-[#FAF8F5]
      text-[#2E2A26]
      appearance-none
      focus:border-[#C7A77A]
      focus:bg-white
      outline-none
      transition-all
    `,children:[r.jsx("option",{value:"",children:"Select Purpose"}),r.jsx("option",{value:"Home Office",children:"Home Office"}),r.jsx("option",{value:"Guest Accommodation",children:"Guest Accommodation"}),r.jsx("option",{value:"Teenage Retreat",children:"Teenage Retreat"}),r.jsx("option",{value:"Rental Income",children:"Rental Income"}),r.jsx("option",{value:"Extra Living Space",children:"Extra Living Space"}),r.jsx("option",{value:"Creative Studio",children:"Creative Studio"}),r.jsx("option",{value:"Other",children:"Other"})]})]}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[r.jsx("input",{type:"text",name:"name",required:!0,value:m.name,onChange:F=>x("name",F.target.value),placeholder:"Full Name",autoComplete:"name",maxLength:60,className:`
    w-full
    px-5
    py-4
    rounded-2xl
    border
    border-[rgba(46,42,38,0.08)]
    bg-[#FAF8F5]
    text-[#2E2A26]
    focus:border-[#C7A77A]
    focus:bg-white
    outline-none
    transition-all
  `}),r.jsx("input",{type:"email",name:"email",required:!0,value:m.email,onChange:F=>x("email",F.target.value),placeholder:"Email Address",autoComplete:"email",maxLength:100,className:`
    w-full
    px-5
    py-4
    rounded-2xl
    border
    border-[rgba(46,42,38,0.08)]
    bg-[#FAF8F5]
    text-[#2E2A26]
    focus:border-[#C7A77A]
    focus:bg-white
    outline-none
    transition-all
  `}),r.jsx("input",{type:"tel",name:"phone",required:!0,value:m.phone,onChange:F=>x("phone",F.target.value),placeholder:"04XX XXX XXX",autoComplete:"tel",maxLength:15,className:`
    w-full
    px-5
    py-4
    rounded-2xl
    border
    border-[rgba(46,42,38,0.08)]
    bg-[#FAF8F5]
    text-[#2E2A26]
    focus:border-[#C7A77A]
    focus:bg-white
    outline-none
    transition-all
  `}),r.jsxs("select",{name:"suburb",required:!0,value:m.suburb,onChange:F=>x("suburb",F.target.value),className:`
    w-full
    px-5
    py-4
    rounded-2xl
    border
    border-[rgba(46,42,38,0.08)]
    bg-[#FAF8F5]
    text-[#2E2A26]
    focus:border-[#C7A77A]
    focus:bg-white
    outline-none
    transition-all
  `,children:[r.jsx("option",{value:"",children:"Select suburb"}),b.map(F=>r.jsx("option",{value:F,children:F},F))]}),r.jsx("input",{type:"text",name:"address",required:!0,value:m.address,onChange:F=>x("address",F.target.value),placeholder:"123 Example Street, Brighton VIC 3186",autoComplete:"street-address",maxLength:120,className:`
    w-full
    px-5
    py-4
    rounded-2xl
    border
    border-[rgba(46,42,38,0.08)]
    bg-[#FAF8F5]
    text-[#2E2A26]
    focus:border-[#C7A77A]
    focus:bg-white
    outline-none
    transition-all
  `})]}),r.jsx("textarea",{name:"message",rows:5,value:m.message,onChange:F=>x("message",F.target.value),placeholder:"Tell us about your project...",maxLength:1500,className:`
    w-full
    px-5
    py-4
    rounded-2xl
    border
    border-[rgba(46,42,38,0.08)]
    bg-[#FAF8F5]
    text-[#2E2A26]
    resize-none
    focus:border-[#C7A77A]
    focus:bg-white
    outline-none
    transition-all
  `}),u&&r.jsx("div",{className:"bg-red-100 border border-red-300 text-red-700 px-5 py-4 rounded-2xl text-sm",children:u}),r.jsx("div",{className:"flex justify-end",children:r.jsx("button",{type:"submit",disabled:n,className:`
    px-8
    py-4
    bg-[#2E2A26]
    text-[#F5F0EB]
    rounded-full
    transition-all
    duration-300
    hover:bg-[#C7A77A]
    hover:text-[#2E2A26]
    hover:-translate-y-1
    disabled:opacity-60
    disabled:cursor-not-allowed
    flex
    items-center
    justify-center
    gap-2
  `,children:n?r.jsxs(r.Fragment,{children:[r.jsx(Ix,{size:18,className:"animate-spin"}),"Sending..."]}):"Send Enquiry"})})]})]})]})})}),r.jsx("section",{className:"bg-[#EFE8DF] py-36",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-8 md:px-16",children:[r.jsxs("div",{className:"text-center mb-24",children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"What Happens Next"}),r.jsxs("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-6",children:["A Simple Process,",r.jsx("br",{}),"Designed Around You"]})]}),r.jsx("div",{className:"grid md:grid-cols-4 gap-8",children:[{number:"01",title:"Reach Out",text:"Tell us about your project, goals and ideas through our enquiry form."},{number:"02",title:"Initial Consultation",text:"We'll discuss your space, requirements and answer any questions."},{number:"03",title:"Design & Planning",text:"Our team develops a solution tailored to your property and lifestyle."},{number:"04",title:"Bring It To Life",text:"Watch your backyard transform into a beautifully designed space."}].map(F=>r.jsxs("div",{className:`
            bg-white
            rounded-[28px]
            p-8
            border border-[rgba(46,42,38,0.08)]
            hover:border-[#C7A77A]
            hover:-translate-y-1
            transition-all duration-300
          `,children:[r.jsx("div",{className:"text-[#C7A77A] tracking-[0.3em] text-sm mb-6",children:F.number}),r.jsx("h3",{className:"text-[#2E2A26] text-2xl mb-4",children:F.title}),r.jsx("p",{className:"text-[#5F5A55] leading-relaxed",children:F.text})]},F.number))})]})}),r.jsx("section",{className:"bg-white py-36",children:r.jsxs("div",{className:"max-w-5xl mx-auto px-8",children:[r.jsxs("div",{className:"text-center mb-20",children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"Frequently Asked Questions"}),r.jsx("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-6",children:"Common Questions"})]}),r.jsx("div",{className:"space-y-4",children:[{question:"How long does a typical project take?",answer:"Timelines vary depending on the project scope, approvals and site conditions, but most projects move from design to completion within a few months."},{question:"Do you only work in Melbourne?",answer:"We primarily service Melbourne and surrounding areas, with select projects undertaken across Victoria."},{question:"Can a granny flat be used as a rental property?",answer:"Regulations vary by location. We can guide you through the options available for your property."},{question:"Do I need council approval?",answer:"Approval requirements depend on the size and type of structure. Our team can help identify the requirements for your site."}].map(F=>r.jsxs("details",{className:`
            group
            bg-[#F5F0EB]
            rounded-[24px]
            border border-[rgba(46,42,38,0.08)]
            p-6
          `,children:[r.jsxs("summary",{className:"cursor-pointer list-none flex justify-between items-center text-[#2E2A26] text-lg",children:[F.question,r.jsx("span",{className:"text-[#C7A77A] transition-transform group-open:rotate-45",children:"+"})]}),r.jsx("p",{className:"mt-5 text-[#5F5A55] leading-relaxed",children:F.answer})]},F.question))})]})}),r.jsx("section",{className:"bg-[#F5F0EB] py-36",children:r.jsx("div",{className:"max-w-7xl mx-auto px-8 md:px-16",children:r.jsxs("div",{className:"grid lg:grid-cols-[40%_60%] gap-16 items-center",children:[r.jsxs("div",{children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"Visit Us"}),r.jsxs("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.5rem,4vw,4rem)] mt-6 leading-tight",children:["Let's Talk About",r.jsx("br",{}),"Your Backyard Vision"]}),r.jsx("p",{className:"mt-8 text-[#5F5A55] leading-relaxed max-w-md",children:"Whether you're planning a backyard studio, granny flat or flexible living space, we'd love to discuss your ideas and help bring your project to life."}),r.jsxs("div",{className:"mt-10 space-y-4",children:[r.jsxs("div",{className:"bg-white rounded-2xl p-6 border border-[rgba(46,42,38,0.08)]",children:[r.jsx("p",{className:"text-[#A08E7C] text-xs uppercase tracking-[0.2em] mb-2",children:"Address"}),r.jsxs("p",{className:"text-[#2E2A26] leading-relaxed",children:["Unit 8 / 21–35 Ricketts Road",r.jsx("br",{}),"Mount Waverley VIC 3149",r.jsx("br",{}),"Melbourne, Australia"]})]}),r.jsxs("div",{className:"bg-white rounded-2xl p-6 border border-[rgba(46,42,38,0.08)]",children:[r.jsx("p",{className:"text-[#A08E7C] text-xs uppercase tracking-[0.2em] mb-2",children:"Office Hours"}),r.jsxs("p",{className:"text-[#2E2A26]",children:["Monday – Friday",r.jsx("br",{}),"9:00 AM – 5:00 PM"]})]})]}),r.jsx("a",{href:"https://maps.google.com/?q=Unit+8+21-35+Ricketts+Road+Mount+Waverley+VIC",target:"_blank",rel:"noopener noreferrer",className:`
            inline-flex items-center
            mt-8
            px-8 py-3
            bg-white
            border border-[rgba(46,42,38,0.08)]
            rounded-full
            text-[#5F5A55]
            transition-all duration-300
            hover:border-[#C7A77A]
            hover:text-[#2E2A26]
            hover:-translate-y-1
          `,children:"Get Directions"})]}),r.jsx("div",{className:"overflow-hidden rounded-[32px] border border-[rgba(46,42,38,0.08)] shadow-sm",children:r.jsx("iframe",{title:"Backyard Nest Location",src:"https://maps.google.com/maps?q=21-35%20Ricketts%20Road%20Mount%20Waverley%20VIC&t=&z=15&ie=UTF8&iwloc=&output=embed",className:"w-full h-[550px]",loading:"lazy"})})]})})}),r.jsx("section",{className:"bg-[#EFE8DF] py-40",children:r.jsxs("div",{className:"max-w-5xl mx-auto px-8 text-center",children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"Ready To Get Started?"}),r.jsxs("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(3rem,6vw,6rem)] mt-8 leading-[0.95]",children:["Let's Bring Your",r.jsx("br",{}),"Backyard Vision",r.jsx("br",{}),"To Life"]}),r.jsx("p",{className:"mt-8 text-[#5F5A55] text-lg max-w-2xl mx-auto leading-relaxed",children:"Whether you're planning a studio, granny flat or flexible living space, we're here to help turn ideas into beautifully designed spaces that add value to everyday living."}),r.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4 mt-12",children:[r.jsx("a",{href:"/booking",className:`
px-10 py-4
bg-white
border border-[rgba(46,42,38,0.08)]
text-[#5F5A55]
rounded-full
transition-all duration-300
hover:border-[#C7A77A]
hover:text-[#2E2A26]
hover:-translate-y-1
`,children:"Request A Quote"}),r.jsx("a",{href:"tel:0390000000",className:`
px-10 py-4
bg-transparent
text-[#A08E7C]
rounded-full
border border-[#C7A77A]/50
transition-all duration-300
hover:bg-[#C7A77A]/10
hover:border-[#C7A77A]
hover:text-[#2E2A26]
`,children:"Call Our Team"})]})]})})]})}function i5(){const e=j.useRef(null);j.useEffect(()=>{window.scrollTo(0,0);const i=()=>{if(e.current){const o=window.scrollY;e.current.style.transform=`translateY(${o*.3}px)`}};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]);const n=[{year:"2022",text:"Backyard Nest was founded with a mission to reimagine backyard living."},{year:"2023",text:"First collection of backyard studio launched across Melbourne."},{year:"2024",text:"Granny flat range introduced for modern multi generational living."},{year:"2025",text:"100+ backyard spaces designed and delivered across Australia."}];return r.jsxs("div",{className:"bg-white text-black",children:[r.jsx(Yt,{title:"About Us | Backyard Nest",description:"Meet Backyard Nest — the Melbourne builders behind premium backyard pods, studios & granny flats. Learn our story, our process, and why Victorians trust us.",url:"https://backyardnest.com.au/gallery"}),r.jsx("section",{className:"relative min-h-screen bg-[#F5F0EB] overflow-hidden",children:r.jsx("div",{className:"max-w-7xl mx-auto px-8 md:px-16 pt-40 pb-24",children:r.jsxs("div",{className:"grid lg:grid-cols-[55%_45%] gap-16 items-center",children:[r.jsxs("div",{children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"About Backyard Nest"}),r.jsxs("h1",{className:"editorial-heading text-[#2E2A26] text-[clamp(4rem,8vw,7rem)] mt-8 leading-[0.95]",children:["Designed For",r.jsx("br",{}),"Better Living"]}),r.jsx("div",{className:"w-24 h-[2px] bg-[#C7A77A] mt-8 mb-8"}),r.jsx("p",{className:"text-[#5F5A55] text-lg max-w-xl leading-relaxed",children:"We create beautifully designed backyard studios, granny flats and flexible living spaces that help homeowners unlock the full potential of their property."})]}),r.jsx("div",{className:"relative",children:r.jsx(nr,{src:"/images/studio/studio2/mobile/studio2.m.webp",alt:"BackyardNestStudio",className:`  w-full
    h-[750px]
    rounded-[32px]
    bg-cover
    bg-center
    bg-no-repeat
    overflow-hidden`})})]})})}),r.jsx("section",{className:"bg-white py-36",children:r.jsx("div",{className:"max-w-7xl mx-auto px-8 md:px-16",children:r.jsxs("div",{className:"grid lg:grid-cols-[35%_65%] gap-20",children:[r.jsxs("div",{children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"Introduction"}),r.jsxs("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.5rem,4vw,4.5rem)] mt-6 leading-tight",children:["More than",r.jsx("br",{}),"just extra space"]})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[#5F5A55] text-xl leading-relaxed max-w-3xl",children:"We believe a backyard should be more than something you look at. With thoughtful design, it can become a place to work, create, host family, generate income, or simply enjoy everyday life."}),r.jsx("div",{className:"w-20 h-[2px] bg-[#C7A77A] my-10"}),r.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:[{title:"Work From Home",text:"Purpose built backyard offices designed for focus and productivity."},{title:"Family Living",text:"Flexible granny flats that support multi generational living."},{title:"Creative Spaces",text:"Studios and retreats designed for creativity and wellbeing."},{title:"Long Term Value",text:"Smart investments that add functionality and value to your property."}].map(i=>r.jsxs("div",{className:"group p-6 bg-[#F5F0EB] rounded-[24px] border border-[rgba(46,42,38,0.08)] transition-all duration-300 hover:border-[#C7A77A] hover:-translate-y-1",children:[r.jsx("h3",{className:"text-[#2E2A26] text-lg mb-3",children:i.title}),r.jsx("p",{className:"text-[#5F5A55] text-sm leading-relaxed",children:i.text})]},i.title))})]})]})})}),r.jsx("section",{className:"bg-[#F5F0EB] py-36",children:r.jsx("div",{className:"max-w-7xl mx-auto px-8 md:px-16",children:r.jsxs("div",{className:"grid lg:grid-cols-[45%_55%] gap-20 items-center",children:[r.jsxs("div",{className:"relative",children:[r.jsx(nr,{src:"images/studio/studio1/interior/studio1_int.webp",alt:"studio1_intAboutus",className:`w-full
    h-[700px]
    rounded-[32px]
    overflow-hidden
    bg-cover
    bg-center
    bg-no-repeat`,"aria-label":"Backyard Nest Design Philosophy"}),r.jsxs("div",{className:"absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-5",children:[r.jsx("p",{className:"uppercase tracking-[0.25em] text-[#A08E7C] text-xs mb-2",children:"Our Approach"}),r.jsx("p",{className:"text-[#2E2A26]",children:"Thoughtful design. Lasting value."})]})]}),r.jsxs("div",{children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"Our Philosophy"}),r.jsx("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.8rem,5vw,5rem)] leading-tight mt-6",children:"Every backyard deserves more potential"}),r.jsx("div",{className:"w-20 h-[2px] bg-[#C7A77A] my-10"}),r.jsxs("div",{className:"space-y-8 text-[#5F5A55] text-lg leading-relaxed",children:[r.jsx("p",{children:"We believe outdoor space should be more than something you look at through a window. With thoughtful design, it can become a place to work, create, host family, generate income or simply enjoy everyday life."}),r.jsx("p",{children:"Our designs balance aesthetics, practicality and long term value. Every studio, granny flat and backyard retreat is carefully planned to complement the existing home while making the most of natural light, privacy and available space."}),r.jsx("p",{children:"Rather than building more of the same, we focus on creating spaces that feel purposeful, timeless and genuinely useful for the people who live in them."})]})]})]})})}),r.jsx("section",{className:"bg-white py-36",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-8 md:px-16",children:[r.jsxs("div",{className:"text-center mb-24",children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"Why Choose Us"}),r.jsxs("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-6",children:["Designed With Purpose",r.jsx("br",{}),"Built With Care"]}),r.jsx("div",{className:"w-24 h-[2px] bg-[#C7A77A] mx-auto mt-8"})]}),r.jsx("div",{className:"grid lg:grid-cols-3 gap-8",children:[{number:"01",title:"Architectural Thinking",text:"Every project begins with a thoughtful design process focused on space, light, functionality and long term usability."},{number:"02",title:"Quality Craftsmanship",text:"We prioritise durable materials, careful detailing and proven construction methods to create spaces built to last."},{number:"03",title:"Designed Around You",text:"No two families live the same way. Every backyard space is tailored to suit your lifestyle, goals and property."}].map(i=>r.jsxs("div",{className:"group bg-[#F5F0EB] border border-[rgba(46,42,38,0.08)] rounded-[28px] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#C7A77A]",children:[r.jsx("span",{className:"text-[#C7A77A] text-sm tracking-[0.3em]",children:i.number}),r.jsx("h3",{className:"text-[#2E2A26] text-3xl mt-6 mb-6 editorial-heading",children:i.title}),r.jsx("p",{className:"text-[#5F5A55] leading-relaxed",children:i.text})]},i.number))})]})}),r.jsx("section",{className:"bg-[#EFE8DF] py-36",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-8 md:px-16",children:[r.jsxs("div",{className:"text-center mb-24",children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"By The Numbers"}),r.jsxs("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-6",children:["Measured By The Spaces",r.jsx("br",{}),"We Create"]})]}),r.jsx("div",{className:"grid md:grid-cols-4 gap-12",children:[["100+","Projects Delivered"],["3+","Years Growing"],["98%","Client Satisfaction"],["100%","Custom Designed"]].map(([i,o])=>r.jsxs("div",{className:"text-center border-l border-[rgba(46,42,38,0.08)] first:border-l-0",children:[r.jsx("div",{className:"text-[clamp(3rem,6vw,5rem)] font-light text-[#2E2A26] mb-4",children:i}),r.jsx("div",{className:"w-12 h-[2px] bg-[#C7A77A] mx-auto mb-4"}),r.jsx("div",{className:"uppercase tracking-[0.25em] text-[#A08E7C] text-xs",children:o})]},o))})]})}),r.jsx("section",{className:"bg-white py-32",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-8 md:px-16",children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-xs text-[#A08E7C] block mb-20",children:"History"}),r.jsx("div",{className:"grid md:grid-cols-4 gap-16",children:n.map((i,o)=>r.jsxs("div",{children:[r.jsx("div",{className:"text-xl font-semibold text-[#2E2A26] mb-6",children:i.year}),r.jsx("div",{className:"relative h-[2px] bg-[rgba(46,42,38,0.10)] mb-6",children:r.jsx("div",{className:"w-4 h-4 rounded-full bg-[#C7A77A] absolute -top-[6px]"})}),r.jsx("p",{className:"text-[#5F5A55] leading-relaxed",children:i.text})]},o))})]})}),r.jsx("section",{className:"bg-[#F5F0EB] py-40",children:r.jsxs("div",{className:"max-w-5xl mx-auto px-8 text-center",children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-xs text-[#A08E7C]",children:"Our Philosophy"}),r.jsx("div",{className:"w-20 h-[2px] bg-[#C7A77A] mx-auto mt-8 mb-12"}),r.jsxs("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] leading-tight",children:["The best backyard spaces",r.jsx("br",{}),"don't simply add room.",r.jsx("span",{className:"block text-[#A08E7C] mt-6",children:"They create new possibilities."})]}),r.jsx("p",{className:"mt-12 text-lg text-[#5F5A55] max-w-3xl mx-auto leading-relaxed",children:"Every project begins with a simple question: how can this space improve everyday life? Whether it's a home office, creative studio, guest retreat or granny flat, thoughtful design creates opportunities that extend far beyond additional square metres."}),r.jsx("div",{className:"w-20 h-[2px] bg-[#C7A77A] mx-auto mt-12"})]})}),r.jsx("section",{className:"bg-[#EFE8DF] py-40",children:r.jsxs("div",{className:"max-w-5xl mx-auto px-8 text-center",children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-xs text-[#A08E7C]",children:"Start Your Project"}),r.jsxs("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-8 leading-tight",children:["Bring Your Backyard",r.jsx("br",{}),"Vision To Life"]}),r.jsx("p",{className:"mt-8 text-[#5F5A55] text-lg max-w-2xl mx-auto leading-relaxed",children:"Whether you're planning a backyard studio, granny flat or flexible living space, we're here to help transform your ideas into a beautifully designed reality."}),r.jsx("div",{className:"w-20 h-[2px] bg-[#C7A77A] mx-auto my-12"}),r.jsx("a",{href:"/booking",className:`
inline-flex items-center justify-center
px-10 py-4
border border-[#2E2A26]
text-[#2E2A26]
bg-transparent
rounded-full
transition-all duration-300
hover:bg-[#C7A77A]
hover:text-[#F5F0EB]
`,children:"Request A Quote"})]})})]})}const C0="/.netlify/functions";async function E0(){const e=await fetch(`${C0}/blogs`);if(!e.ok)throw new Error("Failed to fetch blogs");return e.json()}async function s5(e){const n=await fetch(`${C0}/blog?slug=${e}`);if(!n.ok)throw new Error("Failed to fetch blog");return n.json()}async function o5(e,n=3){return(await E0()).filter(o=>o.slug!==e).slice(0,n)}function l5(){const[e,n]=j.useState([]),[i,o]=j.useState(!0),[l,u]=j.useState("");j.useEffect(()=>{async function h(){try{const m=await E0();console.log("BLOGS LOADED:",m),console.log("BLOG SLUGS:",m.map(g=>({title:g.title,slug:g.slug}))),n(m)}catch(m){console.error("BLOG LOAD ERROR:",m),u("Unable to load articles.")}finally{o(!1)}}h()},[]);const d=h=>{console.log("BLOG CARD CLICKED:",{id:h.id,title:h.title,slug:h.slug,targetUrl:`/blog/${h.slug}`}),h.slug||console.error("BLOG POST HAS NO SLUG:",h)};return r.jsxs("div",{className:"bg-white",children:[r.jsx(Yt,{title:"Blogs | Backyard Nest",description:"Explore the Backyard Nest blog for expert advice on backyard pods, granny flats & studios in Melbourne — design tips, permits, pricing & more.",url:"https://backyardnest.com.au/blog"}),r.jsxs("section",{className:"max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-40 pb-24",children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-8",children:"Journal"}),r.jsxs("h1",{className:`\r
            editorial-heading\r
            text-[#2E2A26]\r
            text-[clamp(4rem,8vw,8rem)]\r
            leading-[0.9]\r
            tracking-[-0.05em]\r
          `,children:["Ideas,",r.jsx("br",{}),"Insights &",r.jsx("br",{}),"Inspiration."]}),r.jsx("p",{className:"mt-8 max-w-2xl text-[#8B7E74] text-lg leading-relaxed",children:"Design inspiration, planning guides and project insights for creating exceptional backyard spaces."})]}),i&&r.jsx("section",{className:"py-32",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"inline-block w-10 h-10 border-4 border-[#C7A77A]/30 border-t-[#C7A77A] rounded-full animate-spin mb-6"}),r.jsx("p",{className:"uppercase tracking-[0.25em] text-sm text-[#8B7E74]",children:"Loading Articles..."})]})}),l&&r.jsx("section",{className:"py-32",children:r.jsxs("div",{className:"max-w-xl mx-auto text-center",children:[r.jsx("h2",{className:"editorial-heading text-4xl text-[#2E2A26] mb-6",children:"Unable to load articles"}),r.jsx("p",{className:"text-[#8B7E74]",children:l})]})}),!i&&!l&&r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"max-w-[1700px] mx-auto px-6 lg:px-12 pb-24",children:[r.jsx("div",{className:`\r
                hidden\r
                lg:grid\r
                lg:grid-cols-3\r
                border\r
                border-[#C7A77A]/15\r
                h-[900px]\r
              `,children:[0,1,2].map(h=>{const m=e.filter((g,x)=>x%3===h);return r.jsxs("div",{className:`
                      overflow-y-auto
                      hide-scrollbar
                      ${h!==2?"border-r border-[#C7A77A]/15":""}
                    `,children:[r.jsx("div",{className:`\r
                        sticky\r
                        top-0\r
                        z-10\r
                        bg-[#F5F0EB]\r
                        p-8\r
                        border-b\r
                        border-[#C7A77A]/15\r
                      `,children:r.jsx("p",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C]",children:"Latest Articles"})}),m.map(g=>{const x=g.slug?`/blog/${g.slug}`:"/blog";return console.log("BLOG POST RENDERED:",{title:g.title,slug:g.slug,targetUrl:x}),r.jsxs(Ue,{to:x,onClick:()=>d(g),className:`\r
                            block\r
                            border-b\r
                            border-[#C7A77A]/15\r
                            group\r
                            cursor-pointer\r
                            no-underline\r
                          `,children:[g.heroImage?r.jsx("img",{src:g.heroImage,alt:g.title,className:`\r
                                w-full\r
                                h-[260px]\r
                                object-cover\r
                                transition-transform\r
                                duration-700\r
                                group-hover:scale-105\r
                              `}):r.jsx("div",{className:`\r
                                w-full\r
                                h-[260px]\r
                                bg-[#F5F0EB]\r
                                flex\r
                                items-center\r
                                justify-center\r
                              `,children:r.jsx("span",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C]",children:"Backyard Nest"})}),r.jsxs("div",{className:"p-8",children:[r.jsx("p",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] mb-4",children:g.category}),r.jsx("h3",{className:`\r
                                editorial-heading\r
                                text-3xl\r
                                text-[#2E2A26]\r
                                mb-4\r
                                group-hover:text-[#C7A77A]\r
                                transition-colors\r
                              `,children:g.title}),r.jsx("p",{className:"text-[#8B7E74] mb-6 leading-relaxed",children:g.excerpt}),r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsx("span",{className:"text-sm text-[#8B7E74]",children:g.publishDate}),r.jsxs("span",{className:"text-sm text-[#8B7E74]",children:[g.readingTime," min read"]})]}),r.jsx("span",{className:`\r
                                inline-block\r
                                uppercase\r
                                tracking-[0.25em]\r
                                text-xs\r
                                border-b\r
                                border-[#C7A77A]\r
                                pb-2\r
                                transition-all\r
                                group-hover:text-[#C7A77A]\r
                              `,children:"Read Article →"})]})]},g.id)})]},h)})}),r.jsx("div",{className:"lg:hidden space-y-12",children:e.map(h=>{const m=h.slug?`/blog/${h.slug}`:"/blog";return console.log("MOBILE BLOG POST RENDERED:",{title:h.title,slug:h.slug,targetUrl:m}),r.jsxs(Ue,{to:m,onClick:()=>d(h),className:`\r
                      block\r
                      border-b\r
                      border-[#C7A77A]/15\r
                      pb-10\r
                      group\r
                      cursor-pointer\r
                      no-underline\r
                    `,children:[h.heroImage?r.jsx("img",{src:h.heroImage,alt:h.title,className:`\r
                          w-full\r
                          h-[280px]\r
                          object-cover\r
                          mb-6\r
                          transition-transform\r
                          duration-700\r
                          group-hover:scale-[1.02]\r
                        `}):r.jsx("div",{className:`\r
                          w-full\r
                          h-[280px]\r
                          bg-[#F5F0EB]\r
                          flex\r
                          items-center\r
                          justify-center\r
                          mb-6\r
                        `,children:r.jsx("span",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C]",children:"Backyard Nest"})}),r.jsx("p",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] mb-4",children:h.category}),r.jsx("h3",{className:`\r
                        editorial-heading\r
                        text-3xl\r
                        text-[#2E2A26]\r
                        mb-4\r
                        group-hover:text-[#C7A77A]\r
                        transition-colors\r
                      `,children:h.title}),r.jsx("p",{className:"text-[#8B7E74] leading-relaxed mb-6",children:h.excerpt}),r.jsxs("div",{className:"flex items-center justify-between text-sm text-[#8B7E74] mb-8",children:[r.jsx("span",{children:h.publishDate}),r.jsxs("span",{children:[h.readingTime," min read"]})]}),r.jsx("span",{className:`\r
                        inline-block\r
                        uppercase\r
                        tracking-[0.25em]\r
                        text-xs\r
                        border-b\r
                        border-[#C7A77A]\r
                        pb-2\r
                        transition-all\r
                        group-hover:text-[#C7A77A]\r
                      `,children:"Read Article →"})]},h.id)})})]}),r.jsx("section",{className:"py-32 border-t border-[#C7A77A]/15",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-center",children:[r.jsx("div",{className:"w-20 h-px bg-[#C7A77A] mx-auto mb-12"}),r.jsx("h2",{className:`\r
                  editorial-heading\r
                  text-[#2E2A26]\r
                  text-[clamp(3rem,8vw,6rem)]\r
                  leading-[0.92]\r
                `,children:"Stay Inspired"}),r.jsx("p",{className:`\r
                  mt-8\r
                  text-[#8B7E74]\r
                  text-lg\r
                  max-w-2xl\r
                  mx-auto\r
                `,children:"Receive design inspiration, project stories and practical insights delivered directly to your inbox."})]})})]})]})}function c5(){const{slug:e}=g1();console.log("BLOG POST SLUG:",e);const[n,i]=j.useState(null),[o,l]=j.useState(!0),[u,d]=j.useState([]),[h,m]=j.useState(0);j.useEffect(()=>{async function x(){if(e)try{const y=await s5(e);i(y);const b=await o5(e);d(b)}finally{l(!1)}}x()},[e]),j.useEffect(()=>{const x=()=>{const y=document.documentElement.scrollHeight-window.innerHeight,b=window.scrollY/y*100;m(b)};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]);const g=j.useMemo(()=>n?n.content.filter(x=>x.type==="h2"||x.type==="h3"):[],[n]);return o?r.jsx("div",{className:"min-h-screen flex items-center justify-center",children:"Loading article..."}):n?r.jsxs(r.Fragment,{children:[r.jsx(Yt,{title:(n==null?void 0:n.seoTitle)||"Blogs | Backyard Nest",description:(n==null?void 0:n.metaDescription)||"",url:`https://backyardnest.com.au/blog/${n==null?void 0:n.slug}`}),r.jsx("div",{className:"fixed top-0 left-0 w-full h-[3px] bg-[#F5F0EB] z-[100]",children:r.jsx("div",{className:"h-full bg-[#C7A77A] transition-all duration-150",style:{width:`${h}%`}})}),o?r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-white",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"w-10 h-10 border-4 border-[#C7A77A]/30 border-t-[#C7A77A] rounded-full animate-spin mx-auto mb-6"}),r.jsx("p",{className:"uppercase tracking-[0.25em] text-sm text-[#8B7E74]",children:"Loading Article..."})]})}):n?r.jsxs("div",{className:"bg-white",children:[r.jsx("section",{className:"relative pt-40 pb-20",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[r.jsxs(Ue,{to:"/blog",className:"inline-flex items-center gap-3 uppercase tracking-[0.3em] text-xs text-[#A08E7C] hover:text-[#C7A77A] transition-colors",children:[r.jsx(T2,{size:15}),"Back to Journal"]}),r.jsxs("div",{className:"mt-16",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-8",children:n.category}),r.jsx("h1",{className:`\r
                  editorial-heading\r
                  text-[#2E2A26]\r
                  leading-[0.9]\r
                  tracking-[-0.05em]\r
                  text-[clamp(3.8rem,8vw,8rem)]\r
                  max-w-5xl\r
                `,children:n.title}),r.jsxs("div",{className:"flex flex-wrap items-center gap-8 mt-12 text-[#8B7E74]",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(Gj,{size:18,className:"text-[#C7A77A]"}),r.jsx("span",{children:n.author})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(I2,{size:18,className:"text-[#C7A77A]"}),r.jsx("span",{children:n.publishDate})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(q2,{size:18,className:"text-[#C7A77A]"}),r.jsxs("span",{children:[n.readingTime," min read"]})]}),r.jsxs("button",{className:`\r
                    ml-auto\r
                    flex\r
                    items-center\r
                    gap-3\r
                    uppercase\r
                    tracking-[0.2em]\r
                    text-xs\r
                    hover:text-[#C7A77A]\r
                    transition-colors\r
                  `,children:[r.jsx(Oj,{size:16}),"Share"]})]})]})]})}),n.heroImage&&r.jsx("section",{className:"pb-28",children:r.jsx("div",{className:"max-w-[1700px] mx-auto px-6 lg:px-12",children:r.jsx("img",{src:n.heroImage,alt:n.title,className:`\r
                  w-full\r
                  rounded-[32px]\r
                  object-cover\r
                  max-h-[850px]\r
                  shadow-[0_30px_70px_rgba(0,0,0,0.08)]\r
                `})})}),r.jsx("section",{className:"pb-40",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:r.jsxs("div",{className:"grid lg:grid-cols-[280px_1fr] gap-20",children:[r.jsx("aside",{className:"hidden lg:block",children:r.jsxs("div",{className:"sticky top-32",children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-xs text-[#A08E7C] mb-8",children:"Contents"}),r.jsx("nav",{className:"space-y-5",children:g.map((x,y)=>r.jsx("a",{href:`#section-${y}`,className:`\r
                  block\r
                  text-[#7D7269]\r
                  hover:text-[#C7A77A]\r
                  transition-colors\r
                  leading-relaxed\r
                `,children:x.text},y))})]})}),r.jsx("article",{className:`\r
          max-w-[760px]\r
          mx-auto\r
          w-full\r
        `,children:(()=>{let x=0;return n.content.map((y,b)=>{switch(y.type){case"h1":return r.jsx("h1",{className:`\r
                      editorial-heading\r
                      text-6xl\r
                      leading-[1]\r
                      text-[#2E2A26]\r
                      mt-20\r
                      mb-10\r
                    `,children:y.text},b);case"h2":const w=x++;return r.jsx("h2",{id:`section-${w}`,className:`\r
                      editorial-heading\r
                      text-5xl\r
                      leading-[1]\r
                      text-[#2E2A26]\r
                      mt-24\r
                      mb-10\r
                    `,children:y.text},b);case"h3":const N=x++;return r.jsx("h3",{id:`section-${N}`,className:`\r
                      editorial-heading\r
                      text-3xl\r
                      leading-tight\r
                      text-[#2E2A26]\r
                      mt-16\r
                      mb-6\r
                    `,children:y.text},b);case"paragraph":return r.jsx("p",{className:`\r
                      text-[20px]\r
                      leading-[2]\r
                      text-[#5E5751]\r
                      mb-10\r
                    `,children:y.text},b);case"bullet":return r.jsx("ul",{className:`\r
                      list-disc\r
                      pl-8\r
                      mb-6\r
                    `,children:r.jsx("li",{className:`\r
                        text-[20px]\r
                        leading-[2]\r
                        text-[#5E5751]\r
                      `,children:y.text})},b);case"quote":return r.jsx("blockquote",{className:`\r
                      my-24\r
                      py-12\r
                      border-y\r
                      border-[#C7A77A]/30\r
                    `,children:r.jsxs("p",{className:`\r
                        editorial-heading\r
                        text-5xl\r
                        leading-[1.2]\r
                        text-[#2E2A26]\r
                      `,children:["“",y.text,"”"]})},b);case"image":return r.jsxs("figure",{className:"my-20",children:[r.jsx("img",{src:y.url,alt:y.caption||"",className:`\r
                        w-full\r
                        rounded-[28px]\r
                        shadow-xl\r
                      `}),y.caption&&r.jsx("figcaption",{className:`\r
                          mt-5\r
                          text-center\r
                          text-sm\r
                          tracking-wide\r
                          text-[#8B7E74]\r
                        `,children:y.caption})]},b);case"divider":return r.jsx("hr",{className:`\r
                      my-24\r
                      border-[#C7A77A]/20\r
                    `},b);default:return null}})})()})]})})}),r.jsx("section",{className:"bg-[#F8F5F2] py-32",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[r.jsxs("div",{className:"flex items-end justify-between mb-16",children:[r.jsxs("div",{children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-xs text-[#A08E7C] mb-4",children:"Continue Reading"}),r.jsxs("h2",{className:`\r
            editorial-heading\r
            text-[clamp(3rem,6vw,5rem)]\r
            text-[#2E2A26]\r
            leading-[0.95]\r
          `,children:["More Journal",r.jsx("br",{}),"Articles"]})]}),r.jsx(Ue,{to:"/blog",className:`\r
          hidden\r
          md:inline-flex\r
          uppercase\r
          tracking-[0.25em]\r
          text-xs\r
          border-b\r
          border-[#C7A77A]\r
          pb-2\r
          hover:text-[#C7A77A]\r
          transition-colors\r
        `,children:"View All Articles →"})]}),r.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(x=>r.jsxs(Ue,{to:`/blog/${x.slug}`,className:`\r
        group\r
        bg-white\r
        rounded-[28px]\r
        overflow-hidden\r
        shadow-sm\r
        hover:shadow-xl\r
        transition-all\r
        duration-500\r
      `,children:[x.heroImage?r.jsx("img",{src:x.heroImage,alt:x.title,className:`\r
            aspect-[4/3]\r
            w-full\r
            object-cover\r
            group-hover:scale-105\r
            transition-transform\r
            duration-700\r
          `}):r.jsx("div",{className:"aspect-[4/3] bg-[#EFE8E2]"}),r.jsxs("div",{className:"p-8",children:[r.jsx("p",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] mb-4",children:x.category}),r.jsx("h3",{className:`\r
            editorial-heading\r
            text-3xl\r
            text-[#2E2A26]\r
            group-hover:text-[#C7A77A]\r
            transition-colors\r
          `,children:x.title}),r.jsxs("div",{className:"flex justify-between mt-8 text-sm text-[#8B7E74]",children:[r.jsx("span",{children:x.publishDate}),r.jsxs("span",{children:[x.readingTime," min read"]})]})]})]},x.id))})]})}),r.jsxs("section",{className:"relative overflow-hidden py-40 bg-[#2E2A26]",children:[r.jsx("div",{className:`\r
      absolute\r
      inset-0\r
      bg-[radial-gradient(circle_at_top_right,rgba(199,167,122,.18),transparent_45%)]\r
    `}),r.jsxs("div",{className:"relative max-w-5xl mx-auto px-6 text-center",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#C7A77A] mb-8",children:"Ready to Build?"}),r.jsxs("h2",{className:`\r
        editorial-heading\r
        text-white\r
        leading-[0.9]\r
        text-[clamp(3.5rem,7vw,7rem)]\r
      `,children:["Let's Create Your",r.jsx("br",{}),"Dream Backyard",r.jsx("br",{}),"Studio."]}),r.jsx("p",{className:`\r
        text-white/70\r
        text-xl\r
        leading-relaxed\r
        mt-10\r
        max-w-2xl\r
        mx-auto\r
      `,children:"Whether you're planning a home office, creative studio, guest accommodation or a premium backyard retreat, our team can help bring your vision to life."}),r.jsxs("div",{className:"flex flex-wrap justify-center gap-6 mt-16",children:[r.jsx(Ue,{to:"/contact",className:`\r
          bg-[#C7A77A]\r
          text-white\r
          px-10\r
          py-5\r
          uppercase\r
          tracking-[0.25em]\r
          text-xs\r
          rounded-full\r
          hover:bg-[#B99667]\r
          transition-all\r
        `,children:"Book Consultation"}),r.jsx(Ue,{to:"/products",className:`\r
          border\r
          border-white/20\r
          text-white\r
          px-10\r
          py-5\r
          uppercase\r
          tracking-[0.25em]\r
          text-xs\r
          rounded-full\r
          hover:border-[#C7A77A]\r
          hover:text-[#C7A77A]\r
          transition-all\r
        `,children:"View Studios"})]})]})]})]}):r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-white",children:r.jsxs("div",{className:"text-center",children:[r.jsx("h1",{className:"editorial-heading text-5xl text-[#2E2A26]",children:"Article Not Found"}),r.jsx(Ue,{to:"/blog",className:"inline-flex items-center mt-8 uppercase tracking-[0.25em] text-xs text-[#C7A77A]",children:"← Return to Journal"})]})})]}):r.jsx("div",{className:"min-h-screen flex items-center justify-center",children:"Article not found."})}function u5(){return r.jsx("div",{className:"min-h-[60vh] flex items-center justify-center px-4",children:r.jsxs("div",{className:"text-center",children:[r.jsx("h1",{className:"text-9xl text-gray-900 mb-4",children:"404"}),r.jsx("h2",{className:"text-3xl text-gray-900 mb-4",children:"Page Not Found"}),r.jsx("p",{className:"text-lg text-gray-600 mb-8",children:"The page you're looking for doesn't exist or has been moved."}),r.jsxs(Ue,{to:"/",className:"inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors",children:[r.jsx(us,{size:20}),"Back to Home"]})]})})}function d5(){j.useEffect(()=>{window.scrollTo(0,0)},[]);const e=Vt(),n=[{id:1,label:"The Nest",route:"/products/TheNest",gridImage:"/images/studio/studio3/mobile/studio3.m.webp",immersiveImage:"/images/studio/studio3/studio3.3.webp",description:"A compact 15m² backyard studio thoughtfully designed to maximise space, natural light and functionality, making it ideal for a home office, creative studio or private retreat.",footprint:"6 x 6 m",height:"2.7 m",size:"15",glazing:"Panoramic",capacity:"1"},{id:2,label:"The Aspen",route:"/products/TheAspen",gridImage:"/images/studio/studio2/mobile/studio2.m.webp",immersiveImage:"/images/studio/studio2/studio2.3.webp",description:"A premium 20m² backyard studio designed for modern Australian living, featuring contemporary architecture, abundant natural light and versatile spaces for work, relaxation or guest accommodation.",footprint:"5 x 6 m",height:"2.7 m",size:"20",glazing:"Clerestory",capacity:"2"},{id:3,label:"The Vista",route:"/products/TheVista",gridImage:"/images/studio/studio4/mobile/studio4.m.webp",immersiveImage:"/images/studio/studio4/studio4.3.webp",description:"A premium 26m² backyard studio purpose built for sloping blocks, delivering modern design, smart space and seamless integration with challenging terrain.",footprint:"3 x 5 m",height:"2.7 m",size:"26",glazing:"Single wall",capacity:"2-3"},{id:4,label:"The Brighton ",route:"/products/TheBrighton",gridImage:"/images/studio/studio1/mobile/studio1.m.webp",immersiveImage:"/images/studio/studio1/studio1.3.webp",description:"A compact modern backyard studio with clean cladding and large glass doors framed in black aluminum. Designed to bring in natural light, it creates a bright, functional space ideal for a home office, studio, or private retreat.",footprint:"4 x 5.5 m",height:"2.7 m",size:"32",glazing:"Double wall",capacity:"2"},{id:5,label:"Bespoke Design",description:"Every property is different. Collaborate with our design team to create a one of a kind studio tailored specifically to your needs, site conditions and aesthetic preferences.",gridImage:"/images/studio/custom_studio/mobile/customstudio_mobile.webp",immersiveImage:"/images/studio/custom_studio/customstudio.webp",size:"custo",route:"/contact"}],[i,o]=j.useState(1),l=n.find(u=>u.id===i);return r.jsxs("div",{children:[r.jsx(Yt,{title:"Backyard Studios Melbourne | Custom Studio Builders",description:"From home office to art studio, Backyard Nest builds custom backyard studios across Melbourne & Victoria — made to fit your space, style and budget.",url:"https://backyardnest.com.au/studio"}),r.jsx("section",{className:"bg-[#F5F0EB] py-20 lg:py-32",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[r.jsxs("div",{className:"mb-20",children:[r.jsx("p",{className:`
          uppercase
          tracking-[0.3em]
          text-[#A08E7C]
          text-xs
          mb-6
        `,children:"Studio Collection"}),r.jsx("h2",{className:`
          editorial-heading
          text-[#2E2A26]
   text-[clamp(2.8rem,10vw,7rem)]
          leading-[0.95]
          tracking-[-0.04em]
        `,children:"Explore Every Design"}),r.jsx("p",{className:`
          mt-6
          text-[#5F5A55]
          text-base md:text-lg
          max-w-2xl
          leading-relaxed
        `,children:"Thoughtfully designed studio spaces created for work, creativity and everyday living."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",children:n.map(u=>r.jsxs("div",{onClick:()=>e(u.route),className:`
group
relative
h-[420px]
sm:h-[480px]
lg:h-[520px]
overflow-hidden
rounded-[28px]
cursor-pointer
transition-all
duration-500
group-hover:-translate-y-2
${u.id===99?"ring-1 ring-[#C7A77A]/40":"bg-[#EDE8E0]"}
`,children:[r.jsx("div",{onContextMenu:d=>d.preventDefault(),role:"img","aria-label":u.label,className:`
    absolute
    inset-0
    w-full
    h-full
    bg-cover
    bg-center
    bg-no-repeat
    transition-all
    duration-[1200ms]
    group-hover:scale-110
  `,style:{backgroundImage:`url(${u.gridImage})`}}),r.jsx("div",{className:`
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/25
              to-black/5
            `}),r.jsx("div",{className:`
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-700
              bg-gradient-to-t
              from-[#C7A77A]/20
              via-transparent
              to-transparent
            `}),r.jsxs("div",{className:`
              absolute
              inset-0
              p-8
              flex
              flex-col
              justify-end
            `,children:[r.jsx("p",{className:`
    text-white/60
    uppercase
    tracking-[0.28em]
    text-[10px]
    mb-3
  `,children:u.id===99?"Tailored Solution":"Studios Collection"}),r.jsx("h3",{className:`
                text-white
                text-[1.8rem]
md:text-[2.4rem]
                leading-[0.95]
                font-serif
                tracking-[-0.03em]
                mb-3
                transition-all
                duration-500
                group-hover:text-[#D7BE8A]
              `,children:u.label}),r.jsx("p",{className:`
    text-white/70
    uppercase
    tracking-[0.2em]
    text-[11px]
    mb-6
  `,children:u.id===99?"Designed Around You":`${u.size}m² Studio`}),r.jsxs("div",{className:`
                max-h-0
                overflow-hidden
                transition-all
                duration-700
                group-hover:max-h-[250px]
              `,children:[r.jsx("div",{className:`
                  w-12
                  h-px
                  bg-[#D7BE8A]
                  mb-5
                `}),r.jsx("p",{className:`
                  text-white/80
                  text-sm
                  leading-relaxed
                  mb-6
                `,children:u.description}),r.jsxs("div",{className:`
                  flex
                  items-center
                  gap-3
                  text-[#D7BE8A]
                  uppercase
                  tracking-[0.22em]
                  text-[11px]
                `,children:["Explore Design",r.jsx("span",{className:`
                    transition-transform
                    duration-500
                    group-hover:translate-x-2
                  `,children:"→"})]})]})]})]},u.id))})]})}),r.jsxs("section",{className:"relative min-h-[850px] lg:h-screen overflow-hidden hidden lg:block",children:[r.jsxs("div",{className:"absolute inset-0",children:[r.jsx("div",{className:"relative w-full h-full",children:r.jsx(nr,{src:l.immersiveImage,alt:l.label,className:`
    w-full
    h-full
    transition-all
    duration-700
    scale-100
    lg:scale-105
  `})}),r.jsx("div",{className:"absolute inset-0 bg-black/45"})]}),r.jsxs("div",{className:"relative z-10 h-full flex flex-col lg:flex-row",children:[r.jsxs("div",{className:`
    w-full
    lg:w-1/2
    flex
    flex-col
    justify-center
    px-6
    lg:px-20
    pt-32
    lg:pt-0
  `,children:[r.jsx("span",{className:`
          uppercase
          tracking-[0.3em]
          text-[11px]
          text-white/60
          mb-12
        `,children:"Studio Collection"}),n.map((u,d)=>r.jsx("button",{onMouseEnter:()=>o(u.id),onClick:()=>e(u.route),className:`
            group
            text-left
            py-3
          `,children:r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsxs("span",{className:`
                text-sm
                transition-all
                duration-300
                ${i===u.id?"text-[#C7A77A]":"text-white/40"}
              `,children:["0",d+1]}),r.jsx("h2",{className:`
                font-serif
                transition-all
                duration-500
                leading-none
                ${i===u.id?"text-white text-4xl md:text-6xl":"text-white/40 text-3xl md:text-5xl"}
              `,children:u.label})]})},u.id))]}),r.jsx("div",{className:`
    w-full
    lg:w-1/2
    flex
    items-end
    justify-start
    lg:justify-end
    px-6
    pb-10
    lg:p-20
  `,children:r.jsxs("div",{className:"max-w-md text-white",children:[r.jsx("span",{className:`
            uppercase
            tracking-[0.25em]
            text-[11px]
            text-[#C7A77A]
            block
            mb-6
          `,children:"Selected Design"}),r.jsx("h3",{className:"font-serif text-3xl md:text-5xl mb-6",children:l.label}),r.jsx("p",{className:"text-white/70 leading-relaxed mb-8",children:l.description}),r.jsxs("div",{className:"grid grid-cols-2 gap-4 md:gap-6 mb-10",children:[r.jsxs("div",{children:[r.jsx("span",{className:"text-white/40 text-xs uppercase",children:"Footprint"}),r.jsx("p",{children:l.footprint})]}),r.jsxs("div",{children:[r.jsx("span",{className:"text-white/40 text-xs uppercase",children:"Height"}),r.jsx("p",{children:l.height})]}),r.jsxs("div",{children:[r.jsx("span",{className:"text-white/40 text-xs uppercase",children:"Glazing"}),r.jsx("p",{children:l.glazing})]}),r.jsxs("div",{children:[r.jsx("span",{className:"text-white/40 text-xs uppercase",children:"Capacity"}),r.jsx("p",{children:l.capacity})]})]}),r.jsx("button",{onClick:()=>e(l.route),className:`
            border
            border-white/30
            w-full
md:w-auto
px-8
py-4
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
          `,children:"Explore Design →"})]})})]})]}),r.jsx("section",{className:"lg:hidden bg-[#2E2A26] text-white py-20",children:r.jsxs("div",{className:"px-6",children:[r.jsx("div",{className:"mb-8",children:r.jsx("span",{className:`
          uppercase
          tracking-[0.3em]
          text-[11px]
          text-[#C7A77A]
        `,children:"Studio Collection"})}),r.jsxs("h2",{className:`
        editorial-heading
        text-[clamp(2.8rem,12vw,4.5rem)]
        leading-[0.9]
        mb-6
      `,children:["Find Your",r.jsx("br",{}),"Perfect Studio."]}),r.jsx("p",{className:"text-white/70 leading-relaxed mb-10",children:"Explore our range of architecturally designed backyard studios, creative spaces and work-from-home retreats."}),r.jsx("div",{className:"space-y-4",children:n.map((u,d)=>r.jsxs("button",{onClick:()=>e(u.route),className:`
            w-full
            flex
            items-center
            justify-between
            border-b
            border-white/10
            py-5
            text-left
          `,children:[r.jsxs("div",{children:[r.jsxs("span",{className:"block text-white/40 text-xs mb-1",children:["0",d+1]}),r.jsx("span",{className:"text-xl font-serif",children:u.label})]}),r.jsx("span",{className:"text-[#C7A77A] text-xl",children:"→"})]},u.id))}),r.jsx("button",{onClick:()=>e("/contact"),className:`
        w-full
        mt-10
        py-4
        bg-[#C7A77A]
        text-[#2E2A26]
        uppercase
        tracking-[0.25em]
        text-xs
      `,children:"Book Consultation"})]})}),r.jsx("section",{className:"bg-[#F5F0EB] py-24 lg:py-32",children:r.jsxs("div",{className:"max-w-5xl mx-auto px-6 lg:px-12",children:[r.jsxs(oe.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-14",children:[r.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-[#8A7665] mb-4",children:"Frequently Asked Questions"}),r.jsx("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-light text-[#2F2A26]",children:"Backyard Studio FAQs"}),r.jsx("p",{className:"mt-5 max-w-2xl mx-auto text-[#6F665F] leading-relaxed",children:"Everything you need to know about designing and building a backyard studio with Backyard Nest."})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"Do I need council approval for a backyard studio in Melbourne?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"Approval requirements can vary depending on the size, location, intended use and site conditions of your property. Backyard Nest can help you understand the requirements for your project and guide you through the process."})]}),r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"What can I use a backyard studio for?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"A backyard studio can be designed for a wide range of purposes, including a home office, creative studio, gym, hobby space, retreat or flexible workspace."})]}),r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"How much does a backyard studio cost?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"The cost of a backyard studio depends on factors such as the size, design, finishes, site conditions and level of customisation. Contact Backyard Nest for a tailored quote based on your requirements."})]}),r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"How long does it take to build a backyard studio?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"Project timelines vary depending on the studio design, approvals, site preparation and construction requirements. Your project timeline can be discussed during the consultation process."})]}),r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"Can you build a studio on a small or difficult block?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"Yes. Backyard studios can be designed to work with different block sizes and site conditions. The design can be tailored to make the most of the available space."})]}),r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"Can I customise my backyard studio?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"Yes. Your backyard studio can be customised to suit your needs, including layout, finishes, glazing, functionality and overall design."})]})]})]})}),r.jsxs("section",{className:"relative bg-[#2E2A26] text-white overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[r.jsx("div",{className:"absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C7A77A]/10 blur-3xl"}),r.jsx("div",{className:"absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#C7A77A]/5 blur-3xl"})]}),r.jsx("div",{className:"relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32",children:r.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#C7A77A] text-xs mb-6",children:"Start Your Project"}),r.jsxs("h2",{className:`
          editorial-heading
          text-white
          text-[clamp(3rem,8vw,6.5rem)]
          leading-[0.9]
          tracking-[-0.04em]
        `,children:["Let’s Create",r.jsx("br",{}),r.jsx("span",{className:"text-[#C7A77A]",children:"Something Beautiful."})]}),r.jsx("p",{className:"mt-8 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto",children:"Have a backyard project in mind? Talk to our team about your space, your vision and the possibilities for your property."}),r.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row items-center justify-center gap-4",children:[r.jsxs("button",{onClick:()=>e("/contact"),className:`
            group
            w-full sm:w-auto
            px-8 py-4
            bg-[#C7A77A]
            text-[#2E2A26]
            uppercase
            tracking-[0.22em]
            text-xs
            font-medium
            transition-all
            duration-300
            hover:bg-[#D7BE8A]
            hover:-translate-y-1
          `,children:["Book a Consultation",r.jsx("span",{className:"ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2",children:"→"})]}),r.jsx("button",{onClick:()=>e("/contact"),className:`
            w-full sm:w-auto
            px-8 py-4
            border
            border-white/25
            text-white
            uppercase
            tracking-[0.22em]
            text-xs
            transition-all
            duration-300
            hover:bg-white
            hover:text-[#2E2A26]
          `,children:"Enquire Now"})]}),r.jsx("p",{className:"mt-8 text-white/35 text-xs tracking-wide",children:"No pressure. Just a conversation about what’s possible."})]})})]})]})}function h5(){const e=Vt();j.useEffect(()=>{window.scrollTo(0,0)},[]);const n=[{id:60,label:"The Wattle",route:"/products/TheWattle",immersiveImage:"/images/grannyflat/wattle_60/wattle_2.webp",gridImage:"/images/grannyflat/wattle_60/wattle_grid.webp",description:"A beautifully designed one-bedroom granny flat featuring open-plan living, a full kitchen and a private bathroom. Perfect for independent living, guest accommodation or rental income.",footprint:"7 × 6.5 m",area:"60 m²",height:"2.7 m",glazing:"Large glazed doors",bedrooms:"1",bathrooms:"1",capacity:"1–2"},{id:"yarra-38",label:"The Yarra",size:"38 m²",route:"/products/TheYarra38",immersiveImage:"/images/grannyflat/yara/yarra_38/yarra_38_1.webp",gridImage:"/images/grannyflat/yara/yarra_38/yarra_38_mobile.webp",description:"A thoughtfully designed one-bedroom granny flat making efficient use of a compact backyard footprint. The Yarra 38 features generous glazing, natural light and a strong connection to the backyard.",footprint:"7 × 5.5 m",area:"38 m²",height:"2.7 m",glazing:"Generous glazed openings",bedrooms:"1",bathrooms:"1",capacity:"1–2"},{id:"yarra-44",label:"The Yarra",size:"44 m²",route:"/products/TheYarra44",immersiveImage:"/images/grannyflat/yara/yarra_44/yarra_44_1.webp",gridImage:"/images/grannyflat/yara/yarra_44/yarra_44_mobile.webp",description:"A contemporary one-bedroom granny flat featuring clean architectural lines, generous glazing, natural timber accents and flexible living spaces.",footprint:"7 × 6.5 m",area:"44 m²",height:"2.7 m",glazing:"Generous glazed openings",bedrooms:"1",bathrooms:"1",capacity:"1–2"},{id:"palmview-38",label:"The Palmview",size:"38 m²",route:"/products/ThePalmview38",immersiveImage:"/images/grannyflat/palmview/palmview_38/palmview_38_1.webp",gridImage:"/images/grannyflat/palmview/palmview_38/palmview_38_mobile.webp",description:"A contemporary backyard home combining modern comfort, smart design and effortless indoor-outdoor living. The Palmview 38 features generous glazing, practical living spaces and a private outdoor connection.",footprint:"Compact backyard footprint",area:"38 m²",height:"—",glazing:"Generous glazed openings",bedrooms:"1",bathrooms:"1",capacity:"1–2"},{id:"palmview-44",label:"The Palmview",size:"44 m²",route:"/products/ThePalmview44",immersiveImage:"/images/grannyflat/palmview/palmview_44/palmview_44_1.webp",gridImage:"/images/grannyflat/palmview/palmview_44/palmview_44_mobile.webp",description:"A contemporary backyard home combining modern comfort, smart design and effortless indoor-outdoor living. The Palmview 44 features clean architectural lines, generous glazing and warm timber accents.",footprint:"Compact backyard footprint",area:"44 m²",height:"—",glazing:"Generous glazed openings",bedrooms:"1",bathrooms:"1",capacity:"1–2"},{id:48,label:"The Haven",route:"/products/TheHaven",immersiveImage:"/images/grannyflat/haven/haven_48_1.webp",gridImage:"/images/grannyflat/haven/haven_48_mobile.webp",description:"A modern 48m² one-bedroom granny flat featuring an open-plan kitchen, living and dining area, private bedroom, bathroom and outdoor deck. Designed as a practical secondary dwelling solution for suitable Victorian properties.",footprint:"Compact backyard footprint",area:"48 m²",height:"—",glazing:"Large windows and glazed doors",bedrooms:"1",bathrooms:"1",capacity:"1-2"}],[i,o]=j.useState(60),l=n.find(u=>u.id===i);return r.jsxs("div",{children:[r.jsx(Yt,{title:"Granny Flat Builders Melbourne, Victoria | Backyard Nest",description:"Looking for trusted granny flat builders in Melbourne, Victoria? Backyard Nest designs and builds custom granny flats. Enquire today for a free quote.",url:"https://backyardnest.com.au/products/granny"}),r.jsx("section",{className:"bg-[#F5F0EB] py-20 lg:py-32",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[r.jsxs("div",{className:"mb-20",children:[r.jsx("p",{className:`\r
          uppercase\r
          tracking-[0.3em]\r
          text-[#A08E7C]\r
          text-xs\r
          mb-6\r
        `,children:"Granny Flat Collection"}),r.jsx("h2",{className:`\r
          editorial-heading\r
          text-[#2E2A26]\r
   text-[clamp(2.8rem,10vw,7rem)]\r
          leading-[0.95]\r
          tracking-[-0.04em]\r
        `,children:"Explore Every Design."}),r.jsx("p",{className:`\r
          mt-6\r
          text-[#5F5A55]\r
          text-base md:text-lg\r
          max-w-2xl\r
          leading-relaxed\r
        `,children:"Thoughtfully designed granny flat spaces created for work, creativity and everyday living."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",children:n.map(u=>r.jsxs("div",{onClick:()=>e(u.route),className:`
group
relative
h-[420px]
sm:h-[480px]
lg:h-[520px]
overflow-hidden
rounded-[28px]
cursor-pointer
transition-all
duration-500
group-hover:-translate-y-2
${u.id===99?"ring-1 ring-[#C7A77A]/40":"bg-[#EDE8E0]"}
`,children:[r.jsx("div",{onContextMenu:d=>d.preventDefault(),role:"img","aria-label":u.label,className:`\r
    absolute\r
    inset-0\r
    w-full\r
    h-full\r
    bg-cover\r
    bg-center\r
    bg-no-repeat\r
    transition-all\r
    duration-[1200ms]\r
    group-hover:scale-110\r
  `,style:{backgroundImage:`url(${u.gridImage})`}}),r.jsx("div",{className:`\r
              absolute\r
              inset-0\r
              bg-gradient-to-t\r
              from-black/85\r
              via-black/25\r
              to-black/5\r
            `}),r.jsx("div",{className:`\r
              absolute\r
              inset-0\r
              opacity-0\r
              group-hover:opacity-100\r
              transition-all\r
              duration-700\r
              bg-gradient-to-t\r
              from-[#C7A77A]/20\r
              via-transparent\r
              to-transparent\r
            `}),r.jsxs("div",{className:`\r
              absolute\r
              inset-0\r
              p-8\r
              flex\r
              flex-col\r
              justify-end\r
            `,children:[r.jsx("p",{className:`\r
    text-white/60\r
    uppercase\r
    tracking-[0.28em]\r
    text-[10px]\r
    mb-3\r
  `,children:u.id===99?"Tailored Solution":"granny flat  Collection"}),r.jsx("h3",{className:`\r
                text-white\r
                text-[1.8rem]\r
md:text-[2.4rem]\r
                leading-[0.95]\r
                font-serif\r
                tracking-[-0.03em]\r
                mb-3\r
                transition-all\r
                duration-500\r
                group-hover:text-[#D7BE8A]\r
              `,children:u.label}),r.jsx("p",{className:`\r
    text-white/70\r
    uppercase\r
    tracking-[0.2em]\r
    text-[11px]\r
    mb-6\r
  `,children:u.id===99?"Designed Around You":`${u.id}m² granny flat `}),r.jsxs("div",{className:`\r
                max-h-0\r
                overflow-hidden\r
                transition-all\r
                duration-700\r
                group-hover:max-h-[250px]\r
              `,children:[r.jsx("div",{className:`\r
                  w-12\r
                  h-px\r
                  bg-[#D7BE8A]\r
                  mb-5\r
                `}),r.jsx("p",{className:`\r
                  text-white/80\r
                  text-sm\r
                  leading-relaxed\r
                  mb-6\r
                `,children:u.description}),r.jsxs("div",{className:`\r
                  flex\r
                  items-center\r
                  gap-3\r
                  text-[#D7BE8A]\r
                  uppercase\r
                  tracking-[0.22em]\r
                  text-[11px]\r
                `,children:["Explore Design",r.jsx("span",{className:`\r
                    transition-transform\r
                    duration-500\r
                    group-hover:translate-x-2\r
                  `,children:"→"})]})]})]})]},u.id))})]})}),r.jsxs("section",{className:"relative min-h-[850px] lg:h-screen overflow-hidden hidden lg:block",children:[r.jsxs("div",{className:"absolute inset-0",children:[r.jsx("div",{onContextMenu:u=>u.preventDefault(),role:"img","aria-label":l.label,className:`\r
    w-full\r
    h-full\r
    bg-cover\r
    bg-center\r
    bg-no-repeat\r
    transition-all\r
    duration-700\r
    scale-100\r
    lg:scale-105\r
  `,style:{backgroundImage:`url(${l.immersiveImage})`}}),r.jsx("div",{className:"absolute inset-0 bg-black/45"})]}),r.jsxs("div",{className:"relative z-10 h-full flex flex-col lg:flex-row",children:[r.jsxs("div",{className:`\r
    w-full\r
    lg:w-1/2\r
    flex\r
    flex-col\r
    justify-center\r
    px-6\r
    lg:px-20\r
    pt-32\r
    lg:pt-0\r
  `,children:[r.jsx("span",{className:`\r
          uppercase\r
          tracking-[0.3em]\r
          text-[11px]\r
          text-white/60\r
          mb-12\r
        `,children:"granny flat Collection"}),n.map((u,d)=>r.jsx("button",{onMouseEnter:()=>o(u.id),onClick:()=>e(u.route),className:`\r
            group\r
            text-left\r
            py-3\r
          `,children:r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsxs("span",{className:`
                text-sm
                transition-all
                duration-300
                ${i===u.id?"text-[#C7A77A]":"text-white/40"}
              `,children:["0",d+1]}),r.jsx("h2",{className:`
                font-serif
                transition-all
                duration-500
                leading-none
                ${i===u.id?"text-white text-4xl md:text-6xl":"text-white/40 text-3xl md:text-5xl"}
              `,children:u.label})]})},u.id))]}),r.jsx("div",{className:`\r
    w-full\r
    lg:w-1/2\r
    flex\r
    items-end\r
    justify-start\r
    lg:justify-end\r
    px-6\r
    pb-10\r
    lg:p-20\r
  `,children:r.jsxs("div",{className:"max-w-md text-white",children:[r.jsx("span",{className:`\r
            uppercase\r
            tracking-[0.25em]\r
            text-[11px]\r
            text-[#C7A77A]\r
            block\r
            mb-6\r
          `,children:"Selected Design"}),r.jsx("h3",{className:"font-serif text-3xl md:text-5xl mb-6",children:l.label}),r.jsx("p",{className:"text-white/70 leading-relaxed mb-8",children:l.description}),r.jsxs("div",{className:"grid grid-cols-2 gap-4 md:gap-6 mb-10",children:[r.jsxs("div",{children:[r.jsx("span",{className:"text-white/40 text-xs uppercase",children:"Footprint"}),r.jsx("p",{children:l.footprint})]}),r.jsxs("div",{children:[r.jsx("span",{className:"text-white/40 text-xs uppercase",children:"Height"}),r.jsx("p",{children:l.height})]}),r.jsxs("div",{children:[r.jsx("span",{className:"text-white/40 text-xs uppercase",children:"Glazing"}),r.jsx("p",{children:l.glazing})]}),r.jsxs("div",{children:[r.jsx("span",{className:"text-white/40 text-xs uppercase",children:"Capacity"}),r.jsx("p",{children:l.capacity})]})]}),r.jsx("button",{onClick:()=>e(l.route),className:`\r
            border\r
            border-white/30\r
            w-full\r
md:w-auto\r
px-8\r
py-4\r
            hover:bg-white\r
            hover:text-black\r
            transition-all\r
            duration-300\r
          `,children:"Explore Design →"})]})})]})]}),r.jsx("section",{className:"lg:hidden bg-[#2E2A26] text-white py-20",children:r.jsxs("div",{className:"px-6",children:[r.jsx("div",{className:"mb-8",children:r.jsx("span",{className:`\r
          uppercase\r
          tracking-[0.3em]\r
          text-[11px]\r
          text-[#C7A77A]\r
        `,children:"granny flat Collection"})}),r.jsxs("h2",{className:`\r
        editorial-heading\r
        text-[clamp(2.8rem,12vw,4.5rem)]\r
        leading-[0.9]\r
        mb-6\r
      `,children:["Find Your",r.jsx("br",{}),"Perfect granny flat."]}),r.jsx("p",{className:"text-white/70 leading-relaxed mb-10",children:"Explore our range of architecturally designed backyard granny flats, creative spaces and work-from-home retreats."}),r.jsx("div",{className:"space-y-4",children:n.map((u,d)=>r.jsxs("button",{onClick:()=>e(u.route),className:`\r
            w-full\r
            flex\r
            items-center\r
            justify-between\r
            border-b\r
            border-white/10\r
            py-5\r
            text-left\r
          `,children:[r.jsxs("div",{children:[r.jsxs("span",{className:"block text-white/40 text-xs mb-1",children:["0",d+1]}),r.jsx("span",{className:"text-xl font-serif",children:u.label})]}),r.jsx("span",{className:"text-[#C7A77A] text-xl",children:"→"})]},u.id))}),r.jsx("button",{onClick:()=>e("/contact"),className:`\r
        w-full\r
        mt-10\r
        py-4\r
        bg-[#C7A77A]\r
        text-[#2E2A26]\r
        uppercase\r
        tracking-[0.25em]\r
        text-xs\r
      `,children:"Book Consultation"})]})}),r.jsx("section",{className:"bg-[#F5F0EB] py-24 lg:py-32",children:r.jsxs("div",{className:"max-w-5xl mx-auto px-6 lg:px-12",children:[r.jsxs(oe.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-14",children:[r.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-[#8A7665] mb-4",children:"Frequently Asked Questions"}),r.jsx("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-light text-[#2F2A26]",children:"Granny Flat FAQs"}),r.jsx("p",{className:"mt-5 max-w-2xl mx-auto text-[#6F665F] leading-relaxed",children:"Everything you need to know about designing and building a granny flat with Backyard Nest."})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"Do I need council approval for a granny flat in Melbourne?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"Approval requirements can vary depending on your property, the size and location of the granny flat, its intended use and other site conditions. Backyard Nest can help you understand the requirements for your project."})]}),r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"What can I use a granny flat for?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"A granny flat can provide additional space for independent living, family accommodation, guests or other suitable uses depending on your property and project requirements."})]}),r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"How much does a granny flat cost?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"The cost depends on factors such as the size, design, finishes, site conditions, services and level of customisation. Contact Backyard Nest for a tailored quote based on your requirements."})]}),r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"How long does it take to build a granny flat?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"Construction timelines vary depending on the design, approvals, site preparation and construction requirements. Your expected timeline can be discussed during your consultation."})]}),r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"Can you build a granny flat on a small backyard?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"Granny flats can be designed around different backyard sizes and site conditions. Our collection includes compact options designed to make efficient use of available space."})]}),r.jsxs("details",{className:"group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden",children:[r.jsxs("summary",{className:"flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none",children:[r.jsx("span",{children:"Can I customise my granny flat?"}),r.jsx("span",{className:"ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45",children:"+"})]}),r.jsx("div",{className:"px-6 pb-6 text-[#6F665F] leading-relaxed",children:"Yes. Granny flat designs can be tailored to suit your space, lifestyle and requirements, including layout, finishes, glazing and functionality."})]})]})]})}),r.jsxs("section",{className:"relative bg-[#2E2A26] text-white overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[r.jsx("div",{className:"absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C7A77A]/10 blur-3xl"}),r.jsx("div",{className:"absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#C7A77A]/5 blur-3xl"})]}),r.jsx("div",{className:"relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32",children:r.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-[#C7A77A] text-xs mb-6",children:"Start Your Project"}),r.jsxs("h2",{className:`\r
          editorial-heading\r
          text-white\r
          text-[clamp(3rem,8vw,6.5rem)]\r
          leading-[0.9]\r
          tracking-[-0.04em]\r
        `,children:["Let’s Create",r.jsx("br",{}),r.jsx("span",{className:"text-[#C7A77A]",children:"Something Beautiful."})]}),r.jsx("p",{className:"mt-8 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto",children:"Have a backyard project in mind? Talk to our team about your space, your vision and the possibilities for your property."}),r.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row items-center justify-center gap-4",children:[r.jsxs("button",{onClick:()=>e("/contact"),className:`\r
            group\r
            w-full sm:w-auto\r
            px-8 py-4\r
            bg-[#C7A77A]\r
            text-[#2E2A26]\r
            uppercase\r
            tracking-[0.22em]\r
            text-xs\r
            font-medium\r
            transition-all\r
            duration-300\r
            hover:bg-[#D7BE8A]\r
            hover:-translate-y-1\r
          `,children:["Book a Consultation",r.jsx("span",{className:"ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2",children:"→"})]}),r.jsx("button",{onClick:()=>e("/contact"),className:`\r
            w-full sm:w-auto\r
            px-8 py-4\r
            border\r
            border-white/25\r
            text-white\r
            uppercase\r
            tracking-[0.22em]\r
            text-xs\r
            transition-all\r
            duration-300\r
            hover:bg-white\r
            hover:text-[#2E2A26]\r
          `,children:"Enquire Now"})]}),r.jsx("p",{className:"mt-8 text-white/35 text-xs tracking-wide",children:"No pressure. Just a conversation about what’s possible."})]})})]})]})}function m5(){const[e,n]=j.useState(""),i=Vt(),[o,l]=j.useState(!1),[u,d]=j.useState(""),[h]=j.useState(Date.now()),[m,g]=j.useState({projectType:"",studioModel:"",grannyModel:"",purpose:"",name:"",email:"",phone:"",suburb:"",address:"",message:""}),x=(F,q)=>{g(A=>({...A,[F]:q,...F==="projectType"?{studioModel:"",grannyModel:""}:{}}))},y=F=>Object.keys(F).map(q=>encodeURIComponent(q)+"="+encodeURIComponent(F[q])).join("&"),b=["Brighton","Bentleigh","Malvern","Kew","Mount Eliza","Sandringham","Frankston","St Kilda","Caulfield","Eltham","Another Melbourne suburb"],w=/^(\+61|0)[2-9]\d{8}$/,N=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,E=/^[A-Za-zÀ-ÿ' -]{2,60}$/,C=/^\d+.*$/,M=["test","testing","admin","asdf","qwerty","unknown","demo","sample"],I=["seo","backlink","guest post","guest-post","google ranking","rank your website","marketing agency","casino","bitcoin","crypto","loan","forex","viagra","porn","escort","telegram","whatsapp group","buy now","click here"],z=()=>{if((Date.now()-h)/1e3<5)return d("Please take a moment to complete the form before submitting."),!1;if(!E.test(m.name.trim()))return d("Please enter a valid name."),!1;if(M.includes(m.name.trim().toLowerCase()))return d("Please enter your real name."),!1;if(!w.test(m.phone.trim()))return d("Please enter a valid Australian phone number."),!1;const q=m.phone.replace(/\D/g,"");if(/^(.)\1+$/.test(q))return d("Please enter a valid phone number."),!1;if(!N.test(m.email.trim()))return d("Please enter a valid email address."),!1;if(!m.suburb)return d("Please select your suburb."),!1;if(!m.address.trim())return d("Please enter the property address."),!1;if(!C.test(m.address.trim()))return d("Please enter a valid property address."),!1;if(!m.projectType)return d("Please select a project type."),!1;if(m.projectType==="Studio"&&!m.studioModel)return d("Please select a studio model."),!1;if(m.projectType==="Granny Flat"&&!m.grannyModel)return d("Please select a granny flat model."),!1;if(!m.purpose)return d("Please select the purpose of your project."),!1;if(m.message.trim().length>1500)return d("Message is too long."),!1;if(m.message.trim().length<10)return d("Please tell us a little more about your project."),!1;if(/(asdf|qwerty|zxcv|123456|aaaa|bbbb|xxxxx)/i.test(m.message)||/(.)\1{7,}/.test(m.message))return d("Please enter a meaningful message."),!1;if((m.message.match(/https?:\/\//gi)||[]).length+(m.message.match(/www\./gi)||[]).length>1)return d("Please remove links from your message."),!1;const G=(m.name+m.email+m.message).toLowerCase();return I.some(de=>G.includes(de))?(d("Spam detected."),!1):(d(""),!0)},R=()=>{g({projectType:"",studioModel:"",grannyModel:"",purpose:"",name:"",email:"",phone:"",suburb:"",address:"",message:""})},U=async F=>{if(F.preventDefault(),!!z()){l(!0);try{if(!(await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:y({"form-name":"booking",...m})})).ok)throw new Error("Submission failed");R(),sessionStorage.setItem("formSubmitted","true"),i("/thank-you")}catch{d("Something went wrong. Please try again.")}finally{l(!1)}}};return j.useEffect(()=>{window.scrollTo(0,0)},[]),r.jsxs("div",{className:"bg-white",children:[r.jsx("section",{className:"bg-[#F5F0EB] py-36",children:r.jsxs("div",{className:"max-w-5xl mx-auto px-8 text-center",children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"Book A Consultation"}),r.jsxs("h1",{className:"editorial-heading text-[#2E2A26] text-[clamp(3rem,6vw,6rem)] mt-8 leading-[0.95]",children:["Let's Discuss",r.jsx("br",{}),"Your Project"]}),r.jsx("p",{className:"text-[#5F5A55] max-w-2xl mx-auto mt-8 text-lg leading-relaxed",children:"Tell us a little about your vision and we'll arrange a consultation to explore the possibilities for your backyard space."})]})}),r.jsx("section",{className:"px-8 pb-32 bg-[#F5F0EB]",children:r.jsxs("div",{className:"max-w-5xl mx-auto bg-white rounded-[32px] p-10 md:p-14 border border-[rgba(46,42,38,0.08)] shadow-sm",children:[r.jsx("h3",{className:"text-2xl text-[#2E2A26] mb-2",children:"Tell Us About Your Project"}),r.jsx("p",{className:"text-[#5F5A55] mb-10",children:"Share a few details and our team will contact you within 24 hours."}),r.jsxs("form",{name:"booking",method:"POST","data-netlify":"true","netlify-honeypot":"bot-field",onSubmit:U,className:"space-y-8",children:[r.jsx("input",{type:"hidden",name:"form-name",value:"booking"}),r.jsx("p",{hidden:!0,children:r.jsxs("label",{children:["Don't fill this out:",r.jsx("input",{name:"bot-field"})]})}),r.jsxs("div",{children:[r.jsx("label",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4",children:"Project Type"}),r.jsx("div",{className:"flex flex-wrap gap-3",children:["Studio","Granny Flat","Not Sure Yet"].map(F=>r.jsxs("label",{className:"cursor-pointer",children:[r.jsx("input",{type:"radio",name:"projectType",value:F,checked:m.projectType===F,onChange:q=>x("projectType",q.target.value),className:"peer hidden"}),r.jsx("div",{className:`\r
            px-6 py-3\r
            rounded-full\r
            border\r
            border-[rgba(46,42,38,0.08)]\r
            bg-[#F5F0EB]\r
            text-[#5F5A55]\r
            transition-all\r
            duration-300\r
            peer-checked:bg-[#C7A77A]\r
            peer-checked:text-[#2E2A26]\r
            peer-checked:border-[#C7A77A]\r
            hover:border-[#C7A77A]\r
          `,children:F})]},F))})]}),m.projectType==="Studio"&&r.jsxs("div",{children:[r.jsx("label",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4",children:"Studio Model"}),r.jsxs("select",{name:"studioModel",required:!0,value:m.studioModel,onChange:F=>x("studioModel",F.target.value),className:`\r
        w-full\r
        px-5\r
        py-4\r
        rounded-2xl\r
        border\r
        border-[rgba(46,42,38,0.08)]\r
        bg-[#FAF8F5]\r
        text-[#2E2A26]\r
        appearance-none\r
        focus:border-[#C7A77A]\r
        focus:bg-white\r
        outline-none\r
        transition-all\r
      `,children:[r.jsx("option",{value:"",children:"Select Studio Model"}),r.jsx("option",{value:"The Nest 15",children:"The Nest 15"}),r.jsx("option",{value:"The Aspen 20",children:"The Aspen 20"}),r.jsx("option",{value:"The Brighton 22",children:"The Brighton 22"}),r.jsx("option",{value:"The Vista 26",children:"The Vista 26"})]})]}),m.projectType==="Granny Flat"&&r.jsxs("div",{children:[r.jsx("label",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4",children:"Granny Flat Model"}),r.jsxs("select",{name:"grannyModel",required:!0,value:m.grannyModel,onChange:F=>x("grannyModel",F.target.value),className:`\r
        w-full\r
        px-5\r
        py-4\r
        rounded-2xl\r
        border\r
        border-[rgba(46,42,38,0.08)]\r
        bg-[#FAF8F5]\r
        text-[#2E2A26]\r
        appearance-none\r
        focus:border-[#C7A77A]\r
        focus:bg-white\r
        outline-none\r
        transition-all\r
      `,children:[r.jsx("option",{value:"",children:"Select Granny Flat Model"}),r.jsx("option",{value:"1 Bedroom",children:"1 Bedroom"}),r.jsx("option",{value:"2 Bedroom",children:"2 Bedroom"}),r.jsx("option",{value:"Custom Design",children:"Custom Design"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4",children:"Purpose of Your Project"}),r.jsxs("select",{name:"purpose",required:!0,value:m.purpose,onChange:F=>x("purpose",F.target.value),className:`\r
      w-full\r
      px-5\r
      py-4\r
      rounded-2xl\r
      border\r
      border-[rgba(46,42,38,0.08)]\r
      bg-[#FAF8F5]\r
      text-[#2E2A26]\r
      appearance-none\r
      focus:border-[#C7A77A]\r
      focus:bg-white\r
      outline-none\r
      transition-all\r
    `,children:[r.jsx("option",{value:"",children:"Select Purpose"}),r.jsx("option",{value:"Home Office",children:"Home Office"}),r.jsx("option",{value:"Guest Accommodation",children:"Guest Accommodation"}),r.jsx("option",{value:"Teenage Retreat",children:"Teenage Retreat"}),r.jsx("option",{value:"Rental Income",children:"Rental Income"}),r.jsx("option",{value:"Extra Living Space",children:"Extra Living Space"}),r.jsx("option",{value:"Home Gym",children:"Home Gym"}),r.jsx("option",{value:"Creative Studio",children:"Creative Studio"}),r.jsx("option",{value:"Other",children:"Other"})]})]}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[r.jsx("input",{type:"text",name:"name",required:!0,value:m.name,onChange:F=>x("name",F.target.value),placeholder:"Full Name",autoComplete:"name",maxLength:60,className:"w-full px-5 py-4 rounded-2xl border border-[rgba(46,42,38,0.08)] bg-[#FAF8F5] text-[#2E2A26] focus:border-[#C7A77A] focus:bg-white outline-none transition-all"}),r.jsx("input",{type:"email",name:"email",required:!0,value:m.email,onChange:F=>x("email",F.target.value),placeholder:"Email Address",autoComplete:"email",maxLength:100,className:"w-full px-5 py-4 rounded-2xl border border-[rgba(46,42,38,0.08)] bg-[#FAF8F5] text-[#2E2A26] focus:border-[#C7A77A] focus:bg-white outline-none transition-all"}),r.jsx("input",{type:"tel",name:"phone",required:!0,value:m.phone,onChange:F=>x("phone",F.target.value),placeholder:"04XX XXX XXX",autoComplete:"tel",maxLength:15,className:"w-full px-5 py-4 rounded-2xl border border-[rgba(46,42,38,0.08)] bg-[#FAF8F5] text-[#2E2A26] focus:border-[#C7A77A] focus:bg-white outline-none transition-all"}),r.jsxs("select",{name:"suburb",required:!0,value:m.suburb,onChange:F=>x("suburb",F.target.value),className:"w-full px-5 py-4 rounded-2xl border border-[rgba(46,42,38,0.08)] bg-[#FAF8F5] text-[#2E2A26] focus:border-[#C7A77A] focus:bg-white outline-none transition-all",children:[r.jsx("option",{value:"",children:"Select suburb"}),b.map(F=>r.jsx("option",{value:F,children:F},F))]})]}),r.jsx("input",{type:"text",name:"address",required:!0,value:m.address,onChange:F=>x("address",F.target.value),placeholder:"123 Example Street, Brighton VIC 3186",autoComplete:"street-address",maxLength:120,className:`\r
      w-full\r
      px-5\r
      py-4\r
      rounded-2xl\r
      border\r
      border-[rgba(46,42,38,0.08)]\r
      bg-[#FAF8F5]\r
      text-[#2E2A26]\r
      focus:border-[#C7A77A]\r
      focus:bg-white\r
      outline-none\r
      transition-all\r
    `}),r.jsx("textarea",{name:"message",rows:6,value:m.message,onChange:F=>x("message",F.target.value),placeholder:"Tell us about your project, ideas, timeline or any questions you may have...",maxLength:1500,className:`\r
    w-full\r
    px-5\r
    py-4\r
    rounded-2xl\r
    border\r
    border-[rgba(46,42,38,0.08)]\r
    bg-[#FAF8F5]\r
    text-[#2E2A26]\r
    resize-none\r
    focus:border-[#C7A77A]\r
    focus:bg-white\r
    outline-none\r
    transition-all\r
  `}),u&&r.jsx("div",{className:"bg-red-100 border border-red-300 text-red-700 rounded-2xl px-5 py-4 text-sm",children:u}),r.jsx("div",{className:"flex justify-end",children:r.jsx("div",{className:"flex justify-end",children:r.jsx("button",{type:"submit",disabled:o,className:`\r
      px-10\r
      py-4\r
      bg-[#2E2A26]\r
      text-[#F5F0EB]\r
      rounded-full\r
      transition-all\r
      duration-300\r
      hover:bg-[#C7A77A]\r
      hover:text-[#2E2A26]\r
      hover:-translate-y-1\r
      disabled:opacity-60\r
      disabled:cursor-not-allowed\r
      flex\r
      items-center\r
      justify-center\r
      gap-2\r
    `,children:o?r.jsxs(r.Fragment,{children:[r.jsx(Ix,{size:18,className:"animate-spin"}),"Sending..."]}):"Book Consultation"})})})]})]})}),r.jsx("section",{className:"bg-[#EFE8DF] py-28",children:r.jsxs("div",{className:"max-w-6xl mx-auto px-8 md:px-16",children:[r.jsxs("div",{className:"text-center mb-20",children:[r.jsx("span",{className:"uppercase tracking-[0.3em] text-[#A08E7C] text-xs",children:"What To Expect"}),r.jsxs("h2",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.5rem,4vw,4rem)] mt-6",children:["A Consultation Designed",r.jsx("br",{}),"Around Your Goals"]})]}),r.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{title:"Discuss Your Ideas",text:"Share your vision, requirements and goals for your backyard space."},{title:"Explore Possibilities",text:"Discover design options tailored to your property and lifestyle."},{title:"Get Expert Guidance",text:"Receive practical advice on layouts, planning and next steps."}].map(F=>r.jsxs("div",{className:`\r
            bg-white\r
            rounded-[28px]\r
            p-8\r
            border border-[rgba(46,42,38,0.08)]\r
            hover:border-[#C7A77A]\r
            hover:-translate-y-1\r
            transition-all duration-300\r
          `,children:[r.jsx("h3",{className:"text-[#2E2A26] text-2xl mb-4",children:F.title}),r.jsx("p",{className:"text-[#5F5A55] leading-relaxed",children:F.text})]},F.title))})]})})]})}function p5(){return r.jsxs("main",{className:"relative min-h-screen overflow-hidden bg-[#081827]",children:[r.jsx("div",{className:"absolute inset-0 opacity-30",children:r.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`
              linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
            `,backgroundSize:"70px 70px"}})}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#081827]/80 via-[#081827]/70 to-[#081827]"}),r.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none opacity-40",children:[r.jsx("div",{className:"absolute left-[8%] top-0 h-full w-px bg-white/15"}),r.jsx("div",{className:"absolute left-[20%] top-[5%] h-[75%] w-px bg-white/10"}),r.jsx("div",{className:"absolute right-[22%] top-[10%] h-[65%] w-px bg-white/10"}),r.jsx("div",{className:"absolute right-[5%] top-0 h-full w-px bg-white/15"}),r.jsx("div",{className:"absolute top-[18%] left-0 h-px w-full bg-white/10"}),r.jsx("div",{className:"absolute top-[42%] left-[10%] h-px w-[75%] bg-white/10"}),r.jsx("div",{className:"absolute bottom-[15%] left-0 h-px w-full bg-white/10"}),r.jsx("div",{className:"absolute top-[24%] left-[12%] w-[260px] border-t border-dashed border-white/20"}),r.jsx("div",{className:"absolute top-[58%] right-[10%] w-[300px] border-t border-dashed border-white/20"}),r.jsx("div",{className:"absolute top-[12%] right-[18%] w-[260px] h-px bg-white/15 origin-left -rotate-45"}),r.jsx("div",{className:"absolute bottom-[22%] left-[5%] w-[200px] h-px bg-white/15 origin-left rotate-45"}),r.jsx("div",{className:"absolute left-[6%] top-[20%] w-10 h-10 rounded-full border border-white/20",children:r.jsx("div",{className:"absolute inset-2 rounded-full border border-white/20"})}),r.jsx("div",{className:"absolute right-[4%] top-[6%] w-5 h-5 rounded-full border border-white/20"}),r.jsx("div",{className:"absolute left-[16%] bottom-[12%] w-4 h-4 rounded-full border border-white/20"}),r.jsxs("div",{className:"absolute left-[35%] top-[30%]",children:[r.jsx("div",{className:"w-6 h-px bg-white/25"}),r.jsx("div",{className:"absolute top-[-12px] left-3 h-6 w-px bg-white/25"})]}),r.jsxs("div",{className:"absolute right-[30%] bottom-[28%]",children:[r.jsx("div",{className:"w-6 h-px bg-white/25"}),r.jsx("div",{className:"absolute top-[-12px] left-3 h-6 w-px bg-white/25"})]})]}),r.jsx(oe.div,{className:"absolute inset-x-0 h-56 bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent blur-3xl",animate:{y:["-25%","120%"]},transition:{duration:8,repeat:1/0,ease:"linear"}}),r.jsx("section",{className:"relative z-20 flex min-h-screen items-center justify-center",children:r.jsxs("div",{className:"mx-auto max-w-5xl px-6 text-center",children:[r.jsx(oe.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"mb-6 tracking-[0.45em] uppercase text-[#D8B36A]",children:"Something New Is"}),r.jsxs(oe.h1,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},className:"font-black uppercase text-white leading-none",style:{fontSize:"clamp(5rem,13vw,11rem)"},children:["Coming",r.jsx("br",{}),"Soon"]}),r.jsx(oe.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},className:"mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/70",children:"We're carefully designing something exceptional. Every great studio begins with a blueprint."}),r.jsxs(oe.a,{whileHover:{scale:1.04,y:-2},whileTap:{scale:.98},href:"/products",className:`\r
    group\r
    relative\r
    mt-14\r
    inline-flex\r
    items-center\r
    justify-center\r
    overflow-hidden\r
    rounded-full\r
    border\r
    border-white/20\r
    bg-white/10\r
    px-12\r
    py-5\r
    text-base\r
    font-medium\r
    tracking-wide\r
    text-white\r
    backdrop-blur-xl\r
    shadow-[0_8px_30px_rgba(0,0,0,0.25)]\r
    transition-all\r
    duration-300\r
    hover:border-white/40\r
    hover:bg-white/15\r
    hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]\r
  `,children:[r.jsx("span",{className:"absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"}),r.jsx("span",{className:"relative z-10 font-medium tracking-wide",style:{color:"#ffffff"},children:"Explore Our Designs"})]})]})})]})}function ks({category:e,title:n,highlight:i,description:o,size:l,beds:u,baths:d,warranty:h,heroImage:m,finishes:g,galleryImages:x,relatedProducts:y,designInspiration:b,mobileHeroImage:w,seoTitle:N,seoDescription:E,seoUrl:C,seoImage:M}){const I=Vt(),[z,R]=j.useState(0),[U,F]=j.useState(null),q=U!==null?U:z,A=j.useRef(0),ae=[{title:"Structure & Compliance",subtitle:"Built on Quality",items:["10-Year Structural Warranty*","Premium 7-Year Build Warranty*","Architecturally Designed & Engineered","Building Permit Included","7-Star Energy Compliance","Engineered Steel Frame","Surefoot® Foundation System*"]},{title:"Exterior",subtitle:"Premium Outside",items:["Premium Double-Glazed Aluminium Windows & Doors","Flyscreens to Openable Windows","Choice of Premium External Cladding"]},{title:"Interior & Comfort",subtitle:"Luxury Living",items:["Reverse Cycle Heating & Cooling","Designer Kitchen with Polytec Cabinetry","Luxury Bathroom with Quality Fixtures & Fittings","Hybrid Timber Flooring Throughout","LED Lighting & Standard Electrical Package","Internal & External Painting"]},{title:"Installation",subtitle:"Ready to Enjoy",items:["Installation & Site Delivery","Service Connections (within 10m*)"]}],[G,de]=j.useState(0);return j.useEffect(()=>{x.forEach(ee=>{const re=new Image;re.src=ee.main})},[]),r.jsxs("div",{children:[r.jsx(Yt,{title:N,description:E,url:C,image:M}),r.jsxs("section",{className:"relative h-screen overflow-hidden",children:[r.jsx("div",{onContextMenu:ee=>ee.preventDefault(),role:"img","aria-label":n,className:`\r
      hidden\r
      md:block\r
      absolute\r
      inset-0\r
      bg-cover\r
      bg-center\r
      bg-no-repeat\r
      scale-105\r
    `,style:{backgroundImage:`url(${m})`}}),r.jsx("div",{onContextMenu:ee=>ee.preventDefault(),role:"img","aria-label":n,className:`\r
      block\r
      md:hidden\r
      absolute\r
      inset-0\r
      bg-cover\r
      bg-center\r
      bg-no-repeat\r
      scale-105\r
    `,style:{backgroundImage:`url(${w||m})`}}),r.jsx("div",{className:`\r
      absolute\r
      bottom-4\r
      right-4\r
      sm:bottom-5\r
      sm:right-5\r
      md:bottom-6\r
      md:right-6\r
      lg:bottom-8\r
      lg:right-8\r
      z-20\r
      pointer-events-none\r
      select-none\r
    `,children:r.jsx("span",{className:`\r
        text-white/70\r
        font-light\r
        uppercase\r
        tracking-[0.3em]\r
        text-[10px]\r
        sm:text-xs\r
        md:text-sm\r
        drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]\r
      `,children:"© BACKYARD NEST"})}),r.jsx("div",{className:"absolute inset-0 bg-black/45 z-10"}),r.jsxs("div",{className:`\r
      relative\r
      z-20\r
      h-full\r
      max-w-7xl\r
      mx-auto\r
      px-8\r
      flex\r
      flex-col\r
      justify-end\r
      pb-24\r
    `,children:[r.jsx("span",{className:`\r
        uppercase\r
        tracking-[0.3em]\r
        text-white/60\r
        text-xs\r
        mb-6\r
      `,children:e}),r.jsxs("h1",{className:`\r
        editorial-heading\r
        text-white\r
        text-[clamp(4rem,10vw,8rem)]\r
        leading-[0.9]\r
      `,children:[n,r.jsxs("span",{className:"italic text-[#D7BE8A]",children:[" ",i]})]}),r.jsxs("div",{className:"flex gap-10 mt-10 text-white/80",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs uppercase tracking-[0.2em] opacity-50",children:"Size"}),r.jsx("p",{children:l})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs uppercase tracking-[0.2em] opacity-50",children:"Beds"}),r.jsx("p",{children:u})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs uppercase tracking-[0.2em] opacity-50",children:"Baths"}),r.jsx("p",{children:d})]})]})]})]}),r.jsx("section",{className:"bg-[#F5F0EB] py-20 lg:py-28",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-5",children:"Specifications"}),r.jsxs("h2",{className:`\r
          editorial-heading\r
          text-[#2E2A26]\r
          text-[clamp(2.8rem,6vw,4.8rem)]\r
          leading-[0.95]\r
        `,children:["Designed For",r.jsx("br",{}),"Modern Living"]})]}),(()=>{const ee=[{value:l,label:"Footprint"},{value:u,label:"Bedroom"},...d&&d!=="0"?[{value:d,label:"Bathroom"}]:[],{value:h,label:"Warranty*"}],re=!d||d==="0";return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"lg:hidden",children:re?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"grid grid-cols-2 gap-5",children:ee.slice(0,2).map((Z,we)=>r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:we*.1},whileHover:{y:-6},className:"group rounded-[28px] border border-[#E8DED3] bg-white p-6 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]",children:[r.jsx("p",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.2rem,7vw,3.6rem)] leading-none group-hover:text-[#C7A77A] transition-colors",children:Z.value}),r.jsx("div",{className:"w-12 h-px bg-[#C7A77A] mx-auto my-5"}),r.jsx("p",{className:"uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]",children:Z.label})]},Z.label))}),r.jsx("div",{className:"flex justify-center mt-5",children:r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},whileHover:{y:-6},className:"group w-full max-w-[220px] rounded-[28px] border border-[#E8DED3] bg-white p-6 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]",children:[r.jsx("p",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.2rem,7vw,3.6rem)] leading-none group-hover:text-[#C7A77A] transition-colors",children:ee[2].value}),r.jsx("div",{className:"w-12 h-px bg-[#C7A77A] mx-auto my-5"}),r.jsx("p",{className:"uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]",children:ee[2].label})]})})]}):r.jsx("div",{className:"grid grid-cols-2 gap-5",children:ee.map((Z,we)=>r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:we*.1},whileHover:{y:-6},className:"group rounded-[28px] border border-[#E8DED3] bg-white p-6 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]",children:[r.jsx("p",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.2rem,7vw,3.6rem)] leading-none group-hover:text-[#C7A77A] transition-colors",children:Z.value}),r.jsx("div",{className:"w-12 h-px bg-[#C7A77A] mx-auto my-5"}),r.jsx("p",{className:"uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]",children:Z.label})]},Z.label))})}),r.jsx("div",{className:`hidden lg:grid gap-6 ${re?"grid-cols-3":"grid-cols-4"}`,children:ee.map((Z,we)=>r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:we*.1},whileHover:{y:-6},className:"group rounded-[28px] border border-[#E8DED3] bg-white p-8 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]",children:[r.jsx("p",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.6rem,4vw,3.8rem)] leading-none transition-colors duration-300 group-hover:text-[#C7A77A]",children:Z.value}),r.jsx("div",{className:"w-12 h-px bg-[#C7A77A] mx-auto my-5"}),r.jsx("p",{className:"uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]",children:Z.label})]},Z.label))})]})})()]})}),r.jsxs("section",{className:"relative border-t border-[#E8DED3] bg-[#F7F5F0] py-24 lg:py-32 overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[r.jsx("div",{className:"absolute -top-48 left-0 w-[500px] h-[500px] rounded-full bg-[#C7A77A]/5 blur-3xl"}),r.jsx("div",{className:"absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C7A77A]/5 blur-3xl"})]}),r.jsxs("div",{className:"relative max-w-7xl mx-auto px-6 lg:px-8",children:[r.jsxs("div",{className:"max-w-4xl mx-auto text-center mb-20",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-[11px] text-[#A08E7C] mb-5",children:"STANDARD INCLUSIONS"}),r.jsx("h2",{className:`\r
      editorial-heading\r
      text-[#2E2A26]\r
      text-[clamp(3.2rem,5vw,5.4rem)]\r
      leading-[0.92]\r
      mb-8\r
    `,children:"Luxury Comes Standard"}),r.jsx("p",{className:`\r
      text-[#5F5A55]\r
      text-lg\r
      leading-relaxed\r
      max-w-3xl\r
      mx-auto\r
    `,children:"Every Backyard Nest studio is thoughtfully designed and built to deliver comfort, quality and long-term value. Explore what's included as standard in every premium studio."})]}),r.jsx("div",{className:"grid md:grid-cols-2 gap-7",children:ae.map((ee,re)=>{const Z=G===re;return r.jsxs("div",{onMouseEnter:()=>de(re),onMouseLeave:()=>de(null),onClick:()=>de(Z?null:re),className:`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        bg-white
        cursor-pointer
        transition-all
        duration-700
        ease-out
        ${Z?"border-[#C7A77A] shadow-[0_25px_60px_rgba(0,0,0,0.08)]":"border-[#E8DED3] hover:border-[#D6BE9C]"}
      `,children:[r.jsx("span",{className:`\r
          absolute\r
          right-8\r
          top-4\r
          editorial-heading\r
          text-[7rem]\r
          leading-none\r
          text-[#F4EFE8]\r
          select-none\r
          pointer-events-none\r
        `,children:String(re+1).padStart(2,"0")}),r.jsx("div",{className:`
          absolute
          left-0
          top-0
          h-[3px]
          bg-[#C7A77A]
          transition-all
          duration-700
          ${Z?"w-full":"w-0 group-hover:w-full"}
        `}),r.jsxs("div",{className:"relative z-10 p-9",children:[r.jsx("p",{className:`\r
            uppercase\r
            tracking-[0.25em]\r
            text-[11px]\r
            text-[#A08E7C]\r
            mb-5\r
          `,children:"STANDARD"}),r.jsx("h3",{className:`\r
            editorial-heading\r
            text-[#2E2A26]\r
            text-[2.4rem]\r
            leading-none\r
            mb-3\r
          `,children:ee.title}),r.jsx("p",{className:`\r
            text-[#7D7368]\r
            text-sm\r
            mb-8\r
          `,children:ee.subtitle}),r.jsx("div",{className:`
    grid
    transition-all
    duration-700
    ease-in-out
    ${Z?"grid-rows-[1fr] opacity-100 mt-8":"grid-rows-[0fr] opacity-0 mt-0"}
  `,children:r.jsx("div",{className:"overflow-hidden",children:r.jsx("div",{className:"space-y-2",children:ee.items.map((we,ge)=>r.jsxs("div",{className:`
            flex
            items-start
            gap-4
            py-3
            border-b
            border-[#F1EBE4]
            transition-all
            duration-700
            ${Z?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}
          `,style:{transitionDelay:`${ge*70}ms`},children:[r.jsx("div",{className:`\r
              mt-0.5\r
              flex\r
              h-7\r
              w-7\r
              items-center\r
              justify-center\r
              rounded-full\r
              bg-[#F5EFE7]\r
              text-[#C7A77A]\r
              transition-all\r
              duration-500\r
              group-hover:bg-[#C7A77A]\r
              group-hover:text-white\r
            `,children:"✓"}),r.jsx("p",{className:`\r
              flex-1\r
              text-[15px]\r
              leading-7\r
              text-[#4E4943]\r
            `,children:we})]},ge))})})}),r.jsxs("div",{className:`\r
    mt-10\r
    flex\r
    items-center\r
    justify-between\r
    border-t\r
    border-[#EEE6DC]\r
    pt-6\r
  `,children:[r.jsxs("span",{className:`\r
      uppercase\r
      tracking-[0.2em]\r
      text-[11px]\r
      text-[#A08E7C]\r
    `,children:[ee.items.length," Standard Inclusions"]}),r.jsx("div",{className:`
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      transition-all
      duration-500
      ${Z?"border-[#C7A77A] bg-[#C7A77A] text-white rotate-45":"border-[#E4D8C8] text-[#A08E7C]"}
    `,children:r.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 5v14M5 12h14"})})})]})]})]},re)})}),r.jsx("div",{className:"mt-14 border-t border-[#E8DED3] pt-8",children:r.jsxs("p",{className:`\r
      text-sm\r
      leading-7\r
      text-[#7B7268]\r
      max-w-4xl\r
    `,children:[r.jsx("strong",{children:"*Disclaimer:"})," Standard inclusions are subject to site conditions, engineering requirements, council approvals and service connection availability. Specifications may vary depending on the selected Backyard Nest studio design and individual project requirements."]})})]})]}),r.jsx("section",{className:"bg-[#F5F0EB] py-16 md:py-24 lg:py-32",children:r.jsxs("div",{className:"max-w-[1700px] mx-auto px-5 md:px-6 lg:px-10",children:[r.jsxs("div",{className:"max-w-3xl mb-10 md:mb-16 lg:mb-20",children:[r.jsx("span",{className:"text-[11px] uppercase tracking-[0.35em] text-black/40",children:"Design Overview"}),r.jsx("h2",{className:"editorial-heading text-4xl md:text-5xl lg:text-7xl mt-4",children:"Explore The Design"}),r.jsx("p",{className:"mt-5 md:mt-6 text-black/60 text-base md:text-lg leading-relaxed",children:"Visualise every detail of your studio, from the architectural floor plan through to the completed living space."})]}),r.jsxs("div",{className:`\r
        relative\r
        h-[380px]\r
        sm:h-[500px]\r
        md:h-[650px]\r
        lg:h-[850px]\r
        rounded-[32px]\r
        md:rounded-[50px]\r
        lg:rounded-[70px]\r
        overflow-hidden\r
        border\r
        border-black/10\r
        bg-[#EFE8E1]\r
      `,onTouchStart:ee=>{A.current=ee.touches[0].clientX},onTouchEnd:ee=>{const re=A.current-ee.changedTouches[0].clientX;re>50&&R(Z=>Z===x.length-1?0:Z+1),re<-50&&R(Z=>Z===0?x.length-1:Z-1)},children:[x.map((ee,re)=>r.jsx("div",{className:`
      absolute inset-0
      transition-all duration-700 ease-out
      ${q===re?"opacity-100 scale-100 z-10":"opacity-0 scale-[1.03] z-0"}
    `,children:r.jsx(nr,{src:ee.main,alt:ee.label,fit:ee.label==="Floor Plan"?"contain":"cover",className:"w-full h-full"})},re)),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none z-20"}),r.jsx("div",{className:"absolute top-4 left-4 md:top-8 md:left-8 z-30",children:r.jsx("div",{className:"bg-white/90 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm",children:r.jsx("span",{className:"text-[10px] md:text-[11px] uppercase tracking-[0.25em] md:tracking-[0.3em]",children:x[q].label})})}),r.jsx("div",{className:"absolute top-4 right-4 md:top-8 md:right-8 z-30",children:r.jsx("div",{className:"bg-white/90 backdrop-blur-md px-4 py-2 md:px-5 md:py-3 rounded-full shadow-sm",children:r.jsxs("span",{className:"text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em]",children:[q+1," / ",x.length]})})}),r.jsx("div",{className:"absolute bottom-24 left-1/2 -translate-x-1/2 z-30 md:hidden",children:r.jsx("div",{className:"bg-white/90 backdrop-blur-md px-4 py-2 rounded-full",children:r.jsx("span",{className:"text-[10px] uppercase tracking-[0.2em] text-black/50",children:"Swipe →"})})}),r.jsx("div",{className:"absolute bottom-4 md:bottom-8 left-4 md:left-8 z-30 flex gap-2 md:gap-2",children:x.map((ee,re)=>r.jsxs("button",{onClick:()=>R(re),onMouseEnter:()=>F(re),onMouseLeave:()=>F(null),className:`
              relative
              group
              w-12 h-12
sm:w-14 sm:h-14
md:w-16 md:h-16
lg:w-24 lg:h-24
              rounded-[18px]
              md:rounded-[24px]
              lg:rounded-[28px]
              overflow-hidden
              transition-all
              duration-500
              ${z===re?"scale-105":"opacity-75 hover:opacity-100 hover:-translate-y-2"}
            `,children:[r.jsx("div",{className:`\r
    w-full\r
    h-full\r
    bg-cover\r
    bg-center\r
    transition-transform\r
    duration-700\r
    group-hover:scale-110\r
  `,style:{backgroundImage:`url(${ee.thumb})`}}),r.jsx("div",{className:`
                absolute inset-0
                transition-all duration-300
                ${z===re?"bg-black/10":"bg-black/25 group-hover:bg-black/10"}
              `}),z===re&&r.jsx("div",{className:"absolute inset-0 rounded-[18px] md:rounded-[24px] lg:rounded-[28px] ring-2 md:ring-4 ring-white"}),r.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:block",children:r.jsx("span",{className:"text-[9px] lg:text-[10px] uppercase tracking-[0.15em] lg:tracking-[0.2em] text-white whitespace-nowrap",children:ee.label})})]},re))}),r.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[3px] md:h-[4px] bg-black/5 z-30",children:r.jsx("div",{className:"h-full bg-black/80 transition-all duration-500",style:{width:`${(z+1)/x.length*100}%`}})})]})]})}),b,r.jsx("section",{className:"bg-[#EFE8DF] py-40",children:r.jsx("div",{className:"max-w-7xl mx-auto px-8",children:r.jsxs("div",{className:"grid lg:grid-cols-2 gap-20 items-center",children:[r.jsxs("div",{children:[r.jsx("span",{className:`\r
            uppercase\r
            tracking-[0.3em]\r
            text-[#A08E7C]\r
            text-xs\r
          `,children:"Next Step"}),r.jsxs("h2",{className:`\r
            editorial-heading\r
            text-[#2E2A26]\r
            text-5xl\r
            md:text-7xl\r
            leading-[0.92]\r
            tracking-[-0.04em]\r
            mt-6\r
          `,children:["Let's Design",r.jsx("br",{}),"Your Space",r.jsx("br",{}),"Together."]})]}),r.jsxs("div",{children:[r.jsx("p",{className:`\r
            text-[#5F5A55]\r
            text-lg\r
            leading-relaxed\r
            mb-10\r
          `,children:"Every property is different. Our team will guide you through layouts, finishes, council requirements and pricing to help create the perfect backyard space."}),r.jsxs("div",{className:"space-y-6 mb-12",children:[r.jsxs("div",{className:"flex justify-between border-b border-black/10 pb-4",children:[r.jsx("span",{className:"text-[#5F5A55]",children:"Free Design Consultation"}),r.jsx("span",{className:"text-[#2E2A26]",children:"01"})]}),r.jsxs("div",{className:"flex justify-between border-b border-black/10 pb-4",children:[r.jsx("span",{className:"text-[#5F5A55]",children:"Tailored Quote"}),r.jsx("span",{className:"text-[#2E2A26]",children:"02"})]}),r.jsxs("div",{className:"flex justify-between border-b border-black/10 pb-4",children:[r.jsx("span",{className:"text-[#5F5A55]",children:"Design & Build Support"}),r.jsx("span",{className:"text-[#2E2A26]",children:"03"})]})]}),r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx("button",{onClick:()=>I("/booking"),className:`\r
              px-8\r
              py-4\r
              bg-[#2E2A26]\r
              text-white\r
              hover:bg-black\r
              transition-all\r
            `,children:"Book Consultation"}),r.jsx("button",{onClick:()=>I("/products"),className:`\r
              px-8\r
              py-4\r
              border\r
              border-[#2E2A26]/20\r
              text-[#2E2A26]\r
              hover:bg-[#2E2A26]\r
              hover:text-white\r
              transition-all\r
            `,children:"Explore Collection"})]})]})]})})}),y]})}const f5=[{id:15,label:"The Nest",route:"/products/TheNest",image:"/images/studio/studio3/mobile/studio3.m.webp",tag:"15m² Backyard Studio",description:"A compact studio thoughtfully designed to maximise space, natural light and functionality."},{id:20,label:"The Aspen",route:"/products/TheAspen",image:"/images/studio/studio2/mobile/studio2.m.webp",tag:"20m² Backyard Studio",description:"A premium backyard studio designed for modern Australian living with abundant natural light."},{id:32,label:"The Brighton",route:"/products/TheBrighton",image:"/images/studio/studio1/mobile/studio1.m.webp",tag:"32m² Backyard Studio",description:"A compact modern backyard studio with clean cladding and large glass doors framed in black aluminium."},{id:26,label:"The Vista",route:"/products/TheVista",image:"/images/studio/studio4/mobile/studio4.m.webp",tag:"26m² Backyard Studio",description:"A premium 26m² backyard studio purpose built for sloping blocks, delivering modern design, smart space and seamless integration with challenging terrain."},{id:5,label:"Bespoke Design",price:"Custom Quote",route:"/contact",image:"/images/studio/custom_studio/mobile/customstudio_mobile.webp",tag:"Custom Designed Studio",description:"Every property is different. Collaborate with our design team to create a one of a kind backyard studio tailored specifically to your needs, site conditions and aesthetic preferences."}];function ii({currentId:e}){const n=Vt(),i=f5.filter(o=>o.id!==e);return r.jsx("section",{className:"bg-[#F5F0EB] py-28 overflow-hidden",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-8",children:[r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},className:"text-center mb-20",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-[#A08E7C] text-xs mb-6",children:"Continue Exploring"}),r.jsx("h2",{className:`\r
    editorial-heading\r
    text-[#2E2A26]\r
    text-[clamp(2.8rem,7vw,5rem)]\r
    leading-[0.95]\r
  `,children:"Other Backyard Studios"}),r.jsx("p",{className:`\r
              mt-6\r
              text-[#5F5A55]\r
              max-w-2xl\r
              mx-auto\r
              leading-relaxed\r
            `,children:"Explore our complete collection of architecturally designed backyard studios, each created for different lifestyles, spaces and budgets."})]}),r.jsx("div",{className:"grid md:grid-cols-2 xl:grid-cols-4 gap-8",children:i.map((o,l)=>r.jsx(oe.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:l*.1},whileHover:{y:-8},onClick:()=>n(o.route),className:"group cursor-pointer",children:r.jsxs("div",{className:`\r
      relative\r
      overflow-hidden\r
      rounded-[28px]\r
      aspect-square\r
      shadow-sm\r
    `,children:[r.jsx(nr,{src:o.image,alt:o.label,watermarkClassName:`\r
  text-[2px]\r
  md:text-[6px]\r
  tracking-[0.15em]\r
  opacity-15\r
`,className:`\r
    w-full\r
    h-full\r
    object-cover\r
    transition-all\r
    duration-700\r
    group-hover:scale-105\r
  `}),r.jsx("div",{className:`\r
        absolute\r
        inset-0\r
        bg-gradient-to-t\r
        from-black/60\r
        via-black/10\r
        to-transparent\r
        transition-all\r
        duration-500\r
        group-hover:from-black/70\r
      `}),r.jsxs("div",{className:`\r
        absolute\r
        bottom-0\r
        left-0\r
        right-0\r
        p-7\r
        flex\r
        items-center\r
        justify-between\r
      `,children:[r.jsx("h3",{className:`\r
          editorial-heading\r
          text-white\r
          text-[2.3rem]\r
          leading-none\r
        `,children:o.label}),r.jsx("div",{className:`\r
          w-11\r
          h-11\r
          rounded-full\r
          border\r
          border-white/40\r
          backdrop-blur-sm\r
          bg-white/10\r
          flex\r
          items-center\r
          justify-center\r
          transition-all\r
          duration-300\r
          group-hover:bg-[#C7A77A]\r
          group-hover:border-[#C7A77A]\r
        `,children:r.jsx(on,{size:18,className:`\r
            text-white\r
            transition-transform\r
            duration-300\r
            group-hover:translate-x-1\r
          `})})]})]})},o.id))})]})})}function zn({title:e,subtitle:n,intro:i,paragraphs:o,features:l,outro:u}){return r.jsx("section",{className:"bg-[#FBF8F4] py-20 lg:py-32",children:r.jsx("div",{className:"max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12",children:r.jsxs("div",{className:`\r
            grid\r
            grid-cols-1\r
            lg:grid-cols-[40%_60%]\r
            gap-14\r
            lg:gap-16\r
            items-start\r
          `,children:[r.jsxs(oe.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7},className:`\r
              lg:sticky\r
              lg:top-28\r
              self-start\r
            `,children:[r.jsx("p",{className:`\r
                uppercase\r
                tracking-[0.35em]\r
                text-xs\r
                text-[#A08E7C]\r
                mb-6\r
              `,children:"Design Inspiration"}),r.jsx("div",{className:"w-20 h-px bg-[#C7A77A] mb-8"}),r.jsx("h2",{className:`\r
                editorial-heading\r
                text-[#2E2A26]\r
                text-[clamp(2.7rem,8vw,5.6rem)]\r
                leading-[0.92]\r
                tracking-[-0.04em]\r
                mb-8\r
              `,children:e}),r.jsx("p",{className:`\r
                text-[#5F5A55]\r
                text-lg\r
                md:text-xl\r
                leading-relaxed\r
                max-w-md\r
              `,children:i})]}),r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:`\r
              w-full\r
              min-w-0\r
              space-y-16\r
            `,children:[r.jsxs("div",{className:"max-w-3xl",children:[r.jsx("p",{className:`\r
                  uppercase\r
                  tracking-[0.35em]\r
                  text-xs\r
                  text-[#A08E7C]\r
                  mb-6\r
                `,children:n}),r.jsx("p",{className:`\r
                  text-[#2E2A26]\r
                  text-xl\r
                  md:text-[1.4rem]\r
                  font-light\r
                  leading-[1.75]\r
                  mb-8\r
                `,children:o[0]}),r.jsx("div",{className:"w-full h-px bg-[#E8DED3] mb-8"}),r.jsx("div",{className:"space-y-7",children:o.slice(1).map((d,h)=>r.jsx("p",{className:`\r
                      text-[#5F5A55]\r
                      text-base\r
                      md:text-lg\r
                      leading-8\r
                    `,children:d},h))})]}),r.jsxs("div",{className:"max-w-3xl",children:[r.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[r.jsx("div",{className:"w-14 h-px bg-[#C7A77A]"}),r.jsx("p",{className:`\r
                    uppercase\r
                    tracking-[0.35em]\r
                    text-xs\r
                    text-[#A08E7C]\r
                  `,children:"Design Principles"})]}),r.jsx("div",{className:`\r
                  grid\r
                  grid-cols-1\r
                  md:grid-cols-2\r
                  gap-4\r
                  w-full\r
                `,children:l.map((d,h)=>r.jsxs(oe.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:h*.06},whileHover:{y:-3},className:`\r
                      group\r
                      flex\r
                      items-center\r
                      gap-4\r
                      w-full\r
                      min-w-0\r
                      rounded-2xl\r
                      border\r
                      border-[#E8DED3]\r
                      bg-white\r
                      p-5\r
                      transition-all\r
                      duration-300\r
                      hover:border-[#C7A77A]\r
                      hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]\r
                    `,children:[r.jsx("div",{className:`\r
                        w-10\r
                        h-10\r
                        shrink-0\r
                        rounded-full\r
                        border\r
                        border-[#D9C6AB]\r
                        bg-[#C7A77A]/10\r
                        flex\r
                        items-center\r
                        justify-center\r
                        transition-all\r
                        duration-300\r
                        group-hover:bg-[#C7A77A]\r
                        group-hover:border-[#C7A77A]\r
                      `,children:r.jsx(O2,{size:16,className:`\r
                          text-[#C7A77A]\r
                          transition-colors\r
                          duration-300\r
                          group-hover:text-white\r
                        `})}),r.jsx("span",{className:`\r
                        flex-1\r
                        min-w-0\r
                        text-[#2E2A26]\r
                        text-sm\r
                        md:text-base\r
                        leading-relaxed\r
                        break-words\r
                        transition-colors\r
                        duration-300\r
                        group-hover:text-[#C7A77A]\r
                      `,children:d})]},d))})]}),r.jsxs(oe.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8},className:`\r
                max-w-3xl\r
                pt-12\r
                border-t\r
                border-[#E8DED3]\r
              `,children:[r.jsxs("div",{className:"relative",children:[r.jsx("span",{className:`\r
                    hidden\r
                    lg:block\r
                    absolute\r
                    -top-10\r
                    -left-2\r
                    text-[110px]\r
                    leading-none\r
                    text-[#E8DED3]\r
                    opacity-60\r
                    pointer-events-none\r
                  `,children:'"'}),r.jsx("p",{className:`\r
                    editorial-heading\r
                    text-[#2E2A26]\r
                    italic\r
                    text-[clamp(1.9rem,4vw,3rem)]\r
                    leading-[1.25]\r
                    relative\r
                  `,children:u})]}),r.jsxs("div",{className:"mt-8 flex items-center gap-4",children:[r.jsx("div",{className:"w-12 h-px bg-[#C7A77A]"}),r.jsx("p",{className:`\r
                    uppercase\r
                    tracking-[0.35em]\r
                    text-[11px]\r
                    text-[#A08E7C]\r
                  `,children:"Backyard Nest"})]})]})]})]})})})}function g5(){const e=[{main:"/images/studio/studio4/studio4.3.webp",thumb:"/images/studio/studio4/studio4.3_thumb.webp",label:"Exterior"},{main:"/images/studio/studio4/interior/studio4_int.webp",thumb:"/images/studio/studio4/interior/studio4_int_thumb.webp",label:"Interior"},{main:"/images/studio/studio4/floorplan/studio4_floorplan.webp",thumb:"/images/studio/studio4/floorplan/studio4_floorplan_thumb.webp",label:"Floor Plan"}],n=[{id:"default",name:"Classic",subtitle:"Spotted Gum - A timeless Australian hardwood",color:"#fcefd6",image:"/images/studio/studyNook/study_nook_hero.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"Axon vertical 75mm deep & dramatic",color:"#2B2B2B",image:"/images/studio/studyNook/study_nook_charcole.webp"},{id:"timber",name:"Natural Timber",subtitle:"Warm untreated grain organic & open",color:"#C8A46B",image:"/images/studio/studyNook/study_nook_timber.webp"},{id:"navy",name:"Navy Blue",subtitle:"Low-maintenance modern finish",color:"#6B7280",image:"/images/studio/studyNook/study_nook_navy.webp"},{id:"sage",name:"Sage White",subtitle:"WeatherTex Classic Smooth 200mm",color:"#E5E5E5",image:"/images/studio/studyNook/study_nook_sage.webp"}];return r.jsx(ks,{category:"Backyard Studios",title:"The Vista",highlight:"26",description:"Designed for sloping and hillside blocks, this 26m² backyard studio combines contemporary architecture with functional, space-efficient living.",size:"26 m²",beds:"1",baths:"1",warranty:"10 Year",heroImage:"/images/studio/studio4/studio4.1.webp",mobileHeroImage:"/images/studio/studio4/studio4.1_mobile.webp",seoTitle:"The Vista 26 | Modern Backyard Studio Melbourne VIC",seoDescription:"The Vista 26 by Backyard Nest is purpose-built for sloping blocks. We design and build modern backyard studios across Melbourne. Enquire today.",seoUrl:"https://backyardnest.com.au/products/studio/TheVista",seoImage:"/images/studio/studio4/studio4.1.webp",finishes:n,galleryImages:e,relatedProducts:r.jsx(ii,{currentId:26}),designInspiration:r.jsx(zn,{title:r.jsxs(r.Fragment,{children:["Inspired By",r.jsx("br",{}),"Elevated",r.jsx("br",{}),"Hillside Living."]}),subtitle:"Elevated Hillside Backyard Studio",intro:"Modern architectural design created specifically for sloping blocks, panoramic outlooks and seamless integration with the natural landscape.",paragraphs:["The Vista is purpose built for sloping and hillside blocks, combining contemporary architecture with intelligent design to create a premium backyard studio that embraces challenging landscapes rather than working against them.","Inspired by modern hillside homes, The Vista features clean architectural lines, expansive glazing and carefully considered proportions that maximise natural light, privacy and surrounding views. Every detail has been designed to complement the site's natural contours while creating a seamless connection between indoor comfort and outdoor living.","Perfectly suited to Melbourne's elevated and sloping suburbs, The Vista backyard studio is ideal for homeowners seeking a sophisticated home office, guest accommodation, creative workspace or private retreat that enhances both lifestyle and property value.","Whether overlooking landscaped gardens, bushland or panoramic vistas, The Vista delivers timeless architecture, premium craftsmanship and exceptional functionality, creating a beautifully integrated extension of your home."],features:["Purpose built for sloping blocks","Contemporary architectural styling","Expansive glazing for natural light","Premium vertical cladding","Panoramic outlooks","Indoor outdoor connection","Energy efficient design"],outro:"Designed to unlock the full potential of elevated backyards, The Vista transforms challenging landscapes into elegant architectural spaces that blend effortlessly with their natural surroundings."})})}function x5(){const e=[{id:"default",name:"Classic Timber",subtitle:"Clean plaster finish",color:"#fcefd6",image:"/images/studio/studio1/studio1.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"Deep architectural tone",color:"#2B2B2B",image:"/images/studio/studio1/charcoal.webp"}],n=[{main:"/images/studio/studio1/studio1.webp",thumb:"/images/studio/studio1/studio1_thumb.webp",label:"Exterior"},{main:"/images/studio/studio1/interior/studio1_int.webp",thumb:"/images/studio/studio1/interior/studio1_int_thumb.webp",label:"Interior"},{main:"/images/studio/studio1/floorplan/brighton_floorplan.webp",thumb:"/images/studio/studio1/floorplan/brighton_floorplan_thumb.webp",label:"Floor Plan"}];return r.jsx(ks,{category:"Backyard Studio",title:"The Brighton",highlight:"32",description:"A refined backyard studio designed for focused work and flexible living. Featuring generous glazing, clean architectural lines and a highly efficient layout, The Brighton creates a bright and inspiring space for everyday use.",size:"32 m²",beds:"1",baths:"1",warranty:"10 Year",heroImage:"/images/studio/studio1/studio1.1.webp",mobileHeroImage:"/images/studio/studio1/studio1.1_mobile.webp",seoTitle:"The Brighton 32 | Custom Garden Studio Melbourne",seoDescription:"Bring your vision to life with The Brighton 32 by Backyard Nest. We design and build spacious backyard studios filled with natural light. Explore the design today.",seoUrl:"https://backyardnest.com.au/products/studio/TheBrighton",seoImage:"/images/studio/studio1/studio1.1.webp",finishes:e,galleryImages:n,relatedProducts:r.jsx(ii,{currentId:32}),designInspiration:r.jsx(zn,{title:r.jsxs(r.Fragment,{children:["Inspired By",r.jsx("br",{}),"Mediterranean",r.jsx("br",{}),"Coastal Living."]}),subtitle:"Mediterranean Coastal Backyard Studio",intro:"Clean lines, bright white finishes and timeless Mediterranean architecture inspired by the relaxed homes of the Greek Islands.",paragraphs:["The Brighton draws inspiration from timeless Mediterranean architecture, combining clean white finishes, natural textures and light filled interiors to create a peaceful retreat within your own backyard.","Influenced by the relaxed coastal homes of the Greek Islands, this design embraces simplicity, elegance and connection to outdoor living. Crisp white cladding, soft neutral tones and carefully considered architectural details create a bright and welcoming space that feels both modern and timeless.","Perfectly suited to Melbourne's bayside suburbs, the Brighton luxury backyard studio is ideal for homeowners seeking a sophisticated backyard studio that complements coastal and contemporary homes alike.","Whether used as a home office, guest accommodation, creative studio or private retreat, the Brighton backyard studio delivers a sense of calm, comfort and understated luxury."],features:["Mediterranean inspired architecture","Bright white exterior finishes","Natural timber accents","Large glazed openings","Minimalist interiors","Energy efficient design","Indoor outdoor connection"],outro:"Designed to evoke the relaxed atmosphere of a luxury coastal escape, The Brighton transforms your backyard into a beautiful extension of your lifestyle."})})}function y5(){const e=[{id:"default",name:"Classic",subtitle:"Clean plaster finish crisp & minimal",color:"#fcefd6",image:"/images/studio/officeStudio/office_studio_hero.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"Axon vertical 75mm deep & dramatic",color:"#2B2B2B",image:"/images/studio/officeStudio/office_studio_charcole.webp"},{id:"timber",name:"Natural Timber",subtitle:"Warm untreated grain organic & open",color:"#C8A46B",image:"/images/studio/officeStudio/office_studio_timber.webp"},{id:"navy",name:"Navy Blue",subtitle:"Low-maintenance modern finish",color:"#6B7280",image:"/images/studio/officeStudio/office_studio_navy.webp"},{id:"sage",name:"Sage White",subtitle:"WeatherTex Classic Smooth 200mm",color:"#E5E5E5",image:"/images/studio/officeStudio/office_studio_sage.webp"}],n=[{main:"/images/studio/studio2/studio2.webp",thumb:"/images/studio/studio2/studio2_thumb.webp",label:"Exterior"},{main:"/images/studio/studio2/interior/studio2_int.webp",thumb:"/images/studio/studio2/interior/studio2_int_thumb.webp",label:"Interior"},{main:"/images/studio/studio2/floorplan/aspen_floorplan.webp",thumb:"/images/studio/studio2/floorplan/aspen_floorplan_thumb.webp",label:"Floor Plan"}];return r.jsx(ks,{category:"Backyard Studio",title:"The Aspen",highlight:"20",description:"A spacious studio retreat offering room to work, create and unwind. The Aspen balances contemporary design with practical functionality, making it ideal for home offices, creative studios or guest accommodation.",size:"20 m²",beds:"1",baths:"0",warranty:"10 Year",heroImage:"/images/studio/studio2/studio2.1.webp",mobileHeroImage:"/images/studio/studio2/studio2.1_mobile.webp",seoTitle:"The Aspen 20 | Premium Backyard Studio Melbourne",seoDescription:"Discover The Aspen 20 by Backyard Nest. We design and build premium 20m² backyard studios across Melbourne. Enquire today for a free consultation.",seoUrl:"https://backyardnest.com.au/products/studio/TheAspen",seoImage:"/images/studio/studio2/studio2.1.webp",finishes:e,galleryImages:n,relatedProducts:r.jsx(ii,{currentId:20}),designInspiration:r.jsx(zn,{title:r.jsxs(r.Fragment,{children:["Inspired By",r.jsx("br",{}),"Contemporary",r.jsx("br",{}),"Architecture."]}),subtitle:"Contemporary Architectural Backyard Studio",intro:"Bold architectural forms, striking navy cladding and expansive glazing combine to create a sophisticated backyard studio that feels timeless, modern and effortlessly functional.",paragraphs:["The Aspen 20 is a premium 20m² backyard studio designed for homeowners who value contemporary architecture, functional living and exceptional craftsmanship.","Featuring striking navy blue composite cladding, clean architectural lines and expansive glazing, The Aspen 20 creates a sophisticated backyard retreat that complements both modern and coastal inspired homes.","Perfect as a home office, creative studio, guest accommodation or private sanctuary, this versatile backyard studio provides a practical extension of your living space while enhancing the overall value and appeal of your property.","The Aspen 20 has been carefully designed to suit Melbourne's diverse residential environments, from inner city backyards to bayside and regional properties. Its bold exterior finish creates a distinctive architectural statement, while the light filled interior delivers comfort, flexibility and everyday functionality."],features:["Contemporary architectural styling","Premium navy composite cladding","Expansive glazing for natural light","Open plan multifunctional layout","Minimalist modern detailing","Energy efficient construction","Home office & guest accommodation","Ideal for coastal & urban homes"],outro:"Designed to balance bold architecture with everyday practicality, The Aspen 20 transforms your backyard into a contemporary retreat that seamlessly extends your home and lifestyle."})})}function v5(){const e=[{id:"default",name:"Classic Timber",subtitle:"Clean plaster finish",color:"#fcefd6",image:"/images/hokkori/default.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"Deep architectural tone",color:"#2B2B2B",image:"/images/hokkori/charcoal.webp"}],n=[{main:"/images/studio/studio3/studio3.webp",thumb:"/images/studio/studio3/studio3_thumb.webp",label:"Exterior"},{main:"/images/studio/studio3/interior/studio3_int.webp",thumb:"/images/studio/studio3/interior/studio3_int_thumb.webp",label:"Interior"},{main:"/images/studio/studio3/floorplan/nest_floorplan.webp",thumb:"/images/studio/studio3/floorplan/nest_floorplan_thumb.webp",label:"Floor Plan"}];return r.jsx(ks,{category:"Backyard Studio",title:"The Nest",highlight:"15",description:"Designed for those seeking maximum flexibility, The Nest combines generous open-plan living with premium finishes and abundant natural light. A sophisticated backyard space that adapts to changing lifestyles.",size:"15 m²",beds:"1",baths:"0",warranty:"10 Year",heroImage:"/images/studio/studio3/studio3.2.webp",mobileHeroImage:"/images/studio/studio3/studio3.1_mobile.webp",seoTitle:"The Nest 15 | Custom Backyard Studio Melbourne, Victoria",seoDescription:"Discover The Nest 15 by Backyard Nest, a compact backyard studio designed and built for work, creativity and relaxation. View the floor plan and get started today.",seoUrl:"https://backyardnest.com.au/products/studio/TheNest",seoImage:"/images/studio/studio3/studio3.2.webp",finishes:e,galleryImages:n,relatedProducts:r.jsx(ii,{currentId:15}),designInspiration:r.jsx(zn,{title:r.jsxs(r.Fragment,{children:["Inspired By",r.jsx("br",{}),"Nature &",r.jsx("br",{}),"Quiet Living."]}),subtitle:"Nature Inspired Backyard Studio",intro:"Designed to reconnect you with nature, The Nest 15 combines warm timber finishes, calming proportions and abundant natural light to create a peaceful retreat only steps from your home.",paragraphs:["Escape the demands of everyday life with The Nest 15, a beautifully designed 15m² backyard studio that brings warmth, comfort and timeless architectural character to your outdoor space.","Finished with premium timber textured cladding, The Nest 15 is inspired by nature and thoughtfully designed to create a peaceful backyard retreat where you can relax, recharge or focus. Its natural exterior blends seamlessly with landscaped gardens, mature trees and outdoor entertaining spaces.","Whether you're looking for a home office, reading room, meditation space, creative studio, guest accommodation or a private sanctuary, this versatile backyard studio provides a practical extension of your living space without the expense of a traditional home extension.","Every Backyard Nest studio is fully customisable, allowing you to personalise the layout, cladding, colours and finishes to perfectly complement your home, lifestyle and property while adding lasting value."],features:["Nature inspired architectural design","Premium timber exterior cladding","Warm natural material palette","Light filled, open plan interior","Perfect for home offices","Meditation & wellness retreat","Creative studio or guest room","Designed for Melbourne gardens"],outro:"Thoughtfully designed to become a natural extension of your home, The Nest 15 creates a calm, functional space where work, relaxation and everyday living exist in perfect balance."})})}function b5(){const e=[{id:"default",name:"Classic Timber",subtitle:"Clean plaster finish",color:"#fcefd6",image:"/images/hokkori/default.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"Deep architectural tone",color:"#2B2B2B",image:"/images/hokkori/charcoal.webp"}];return r.jsx(ks,{category:"Tailored Solution",title:"Bespoke",highlight:"Design",description:"Every property is unique. Collaborate with our design team to create a completely custom backyard studio tailored to your site, lifestyle and vision. From concept to completion, every detail is designed around you.",size:"Custom",beds:"Flexible",baths:"Optional",warranty:"10 Year",heroImage:"/images/studio/custom_studio/customstudio.webp",finishes:e,galleryImages:[]})}const w5=[{id:"wattle-60",label:"The Wattle",size:"60 m²",route:"/products/TheWattle",image:"/images/grannyflat/wattle_60/wattle_mobile.webp"},{id:"yarra-38",label:"The Yarra",size:"38 m²",route:"/products/TheYarra38",image:"/images/grannyflat/yara/yarra_38/yarra_38_mobile.webp"},{id:"yarra-44",label:"The Yarra",size:"44 m²",route:"/products/TheYarra44",image:"/images/grannyflat/yara/yarra_44/yarra_44_mobile.webp"},{id:"palmview-38",label:"The Palmview",size:"38 m²",route:"/products/ThePalmview38",image:"/images/grannyflat/palmview/palmview_38/palmview_38_mobile.webp"},{id:"palmview-44",label:"The Palmview",size:"44 m²",route:"/products/ThePalmview44",image:"/images/grannyflat/palmview/palmview_44/palmview_44_mobile.webp"},{id:"haven-48",label:"The Haven",size:"48 m²",route:"/products/TheHaven",image:"/images/grannyflat/haven/haven_48_mobile.webp"}];function As({currentId:e}){const n=Vt(),i=w5.filter(o=>o.id!==e);return r.jsx("section",{className:"bg-[#F5F0EB] py-28 lg:py-36 overflow-hidden",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[r.jsx(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},className:"mb-16 lg:mb-20",children:r.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8",children:[r.jsxs("div",{children:[r.jsx("p",{className:`\r
                uppercase\r
                tracking-[0.35em]\r
                text-[#A08E7C]\r
                text-[10px]\r
                md:text-xs\r
                mb-5\r
              `,children:"Continue Exploring"}),r.jsxs("h2",{className:`\r
                  editorial-heading\r
                  text-[#2E2A26]\r
                  text-[clamp(3rem,7vw,6rem)]\r
                  leading-[0.85]\r
                  tracking-[-0.04em]\r
                `,children:["Find Your",r.jsx("br",{}),r.jsx("span",{className:"text-[#C7A77A]",children:"Next Space."})]})]}),r.jsx("p",{className:`\r
                text-[#5F5A55]\r
                max-w-md\r
                leading-relaxed\r
                text-sm\r
                md:text-base\r
                lg:pb-2\r
              `,children:"Explore our collection of thoughtfully designed backyard homes, created for modern Australian living and flexible use of space."})]})}),r.jsx("div",{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            lg:grid-cols-3\r
            gap-5\r
            lg:gap-6\r
          `,children:i.map((o,l)=>r.jsx(oe.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:l*.08},whileHover:{y:-8},onClick:()=>n(o.route),className:"group cursor-pointer",children:r.jsxs("div",{className:`\r
                  relative\r
                  overflow-hidden\r
                  rounded-[26px]\r
                  aspect-[4/5]\r
                  bg-[#E8DED3]\r
                `,children:[r.jsx(nr,{src:o.image,alt:`${o.label} ${o.size} granny flat`,watermarkClassName:`\r
                    text-[2px]\r
                    md:text-[5px]\r
                    tracking-[0.15em]\r
                    opacity-15\r
                  `,className:`\r
                    w-full\r
                    h-full\r
                    object-cover\r
                    transition-transform\r
                    duration-[1000ms]\r
                    group-hover:scale-105\r
                  `}),r.jsx("div",{className:`\r
                    absolute\r
                    inset-0\r
                    bg-gradient-to-t\r
                    from-black/75\r
                    via-black/10\r
                    to-transparent\r
                    transition-all\r
                    duration-500\r
                    group-hover:from-black/85\r
                  `}),r.jsx("div",{className:"absolute top-5 left-5",children:r.jsx("span",{className:`\r
                      px-3\r
                      py-2\r
                      bg-white/10\r
                      backdrop-blur-md\r
                      border\r
                      border-white/20\r
                      text-white\r
                      text-[9px]\r
                      uppercase\r
                      tracking-[0.2em]\r
                    `,children:o.size})}),r.jsx("div",{className:`\r
                    absolute\r
                    top-5\r
                    right-5\r
                    w-11\r
                    h-11\r
                    rounded-full\r
                    border\r
                    border-white/30\r
                    bg-white/10\r
                    backdrop-blur-md\r
                    flex\r
                    items-center\r
                    justify-center\r
                    transition-all\r
                    duration-500\r
                    group-hover:bg-[#C7A77A]\r
                    group-hover:border-[#C7A77A]\r
                    group-hover:scale-110\r
                  `,children:r.jsx(on,{size:17,className:`\r
                      text-white\r
                      transition-transform\r
                      duration-500\r
                      group-hover:translate-x-1\r
                    `})}),r.jsxs("div",{className:`\r
                    absolute\r
                    bottom-0\r
                    left-0\r
                    right-0\r
                    p-6\r
                    md:p-7\r
                  `,children:[r.jsx("p",{className:`\r
                      text-white/60\r
                      uppercase\r
                      tracking-[0.25em]\r
                      text-[9px]\r
                      mb-3\r
                    `,children:"Granny Flat"}),r.jsxs("div",{className:"flex items-end justify-between gap-4",children:[r.jsxs("div",{children:[r.jsx("h3",{className:`\r
                          editorial-heading\r
                          text-white\r
                          text-[2rem]\r
                          md:text-[2.3rem]\r
                          leading-none\r
                        `,children:o.label}),r.jsx("p",{className:`\r
                          text-[#D7BE8A]\r
                          uppercase\r
                          tracking-[0.2em]\r
                          text-[10px]\r
                          mt-2\r
                        `,children:o.size})]}),r.jsx("span",{className:`\r
                        text-white/60\r
                        text-[9px]\r
                        uppercase\r
                        tracking-[0.15em]\r
                        opacity-0\r
                        translate-y-2\r
                        transition-all\r
                        duration-500\r
                        group-hover:opacity-100\r
                        group-hover:translate-y-0\r
                      `,children:"Explore"})]})]})]})},o.id))}),r.jsx(oe.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.7,delay:.2},className:"flex justify-center mt-14",children:r.jsxs("button",{onClick:()=>n("/products/granny"),className:`\r
              group\r
              flex\r
              items-center\r
              gap-4\r
              text-[#2E2A26]\r
              uppercase\r
              tracking-[0.22em]\r
              text-[10px]\r
              border-b\r
              border-[#2E2A26]/30\r
              pb-2\r
              transition-all\r
              duration-300\r
              hover:text-[#C7A77A]\r
              hover:border-[#C7A77A]\r
            `,children:[r.jsx("span",{children:"View All Granny Flats"}),r.jsx(on,{size:15,className:`\r
                transition-transform\r
                duration-300\r
                group-hover:translate-x-1\r
              `})]})})]})})}function da({category:e,title:n,highlight:i,description:o,size:l,beds:u,baths:d,warranty:h,heroImage:m,finishes:g,galleryImages:x,relatedProducts:y,designInspiration:b,floorplan:w,mobileHeroImage:N,seoTitle:E,seoDescription:C,seoUrl:M,seoImage:I,sizeVariants:z}){const R=Vt(),[U,F]=j.useState(0),[q,A]=j.useState(null),[ae,G]=j.useState(0),[de,ee]=j.useState(z&&z.length>0?z.length-1:0),re=z==null?void 0:z[de],Z=(re==null?void 0:re.galleryImages)||x;j.useEffect(()=>{F(0),A(null)},[de]);const we=j.useRef(0),ge=Z&&Z.length>0?Math.min(q!==null?q:U,Z.length-1):0,ke=Z==null?void 0:Z[ge],Y=[{title:"Structure & Compliance",subtitle:"Built on Quality",items:["10-Year Structural Warranty*","Premium 7-Year Build Warranty*","Architecturally Designed & Engineered","Building Permit Included","7-Star Energy Compliance","Engineered Steel Frame","Surefoot® Foundation System*"]},{title:"Exterior",subtitle:"Premium Outside",items:["Premium Double-Glazed Aluminium Windows & Doors","Flyscreens to Openable Windows","Choice of Premium External Cladding"]},{title:"Interior & Comfort",subtitle:"Comfortable Living",items:["Reverse Cycle Heating & Cooling","Designer Kitchen with Polytec Cabinetry","Luxury Bathroom with Quality Fixtures & Fittings","Hybrid Timber Flooring Throughout","LED Lighting & Standard Electrical Package","Internal & External Painting"]},{title:"Installation",subtitle:"Ready to Enjoy",items:["Installation & Site Delivery","Service Connections (within 10m*)"]}];return j.useEffect(()=>{Z==null||Z.forEach($=>{if($!=null&&$.main){const H=new Image;H.src=$.main}})},[Z]),j.useEffect(()=>{Z!=null&&Z.length&&U>=Z.length&&F(0)},[Z,U]),r.jsxs("div",{children:[r.jsx(Yt,{title:E,description:C,url:M,image:I}),z&&z.length>1&&r.jsx("section",{className:`\r
      relative\r
      z-20\r
      bg-[#F5F0EB]\r
      pt-28\r
      pb-8\r
      lg:pt-32\r
      lg:pb-10\r
    `,children:r.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:r.jsxs("div",{className:`\r
          flex\r
          flex-col\r
          md:flex-row\r
          md:items-center\r
          md:justify-between\r
          gap-6\r
        `,children:[r.jsxs("div",{children:[r.jsx("p",{className:`\r
              uppercase\r
              tracking-[0.3em]\r
              text-[#A08E7C]\r
              text-[10px]\r
              mb-2\r
            `,children:"The Yarra"}),r.jsx("h2",{className:`\r
              font-serif\r
              text-[#2E2A26]\r
              text-2xl\r
              md:text-3xl\r
            `,children:"Choose Your Size"})]}),r.jsx("div",{className:`\r
            flex\r
            gap-1\r
            p-1\r
            bg-white\r
            rounded-full\r
            shadow-sm\r
            w-fit\r
          `,children:z.map(($,H)=>r.jsx("button",{onClick:()=>ee(H),className:`
                px-6
                md:px-8
                py-3
                rounded-full
                text-xs
                uppercase
                tracking-[0.18em]
                transition-all
                duration-300
                ${de===H?"bg-[#2E2A26] text-white":"text-[#5F5A55] hover:bg-[#F5F0EB]"}
              `,children:$.size},$.size))})]})})}),r.jsxs("section",{className:"relative h-screen overflow-hidden",children:[r.jsx("div",{onContextMenu:$=>$.preventDefault(),role:"img","aria-label":n,className:`\r
            hidden md:block\r
            absolute inset-0\r
            bg-cover bg-center bg-no-repeat\r
            scale-105\r
          `,style:{backgroundImage:`url(${(re==null?void 0:re.heroImage)||m})`}}),r.jsx("div",{onContextMenu:$=>$.preventDefault(),role:"img","aria-label":n,className:`\r
            block md:hidden\r
            absolute inset-0\r
            bg-cover bg-center bg-no-repeat\r
            scale-105\r
          `,style:{backgroundImage:`url(${(re==null?void 0:re.mobileHeroImage)||N})`}}),r.jsx("div",{className:`\r
            absolute\r
            bottom-4 right-4\r
            sm:bottom-5 sm:right-5\r
            md:bottom-6 md:right-6\r
            lg:bottom-8 lg:right-8\r
            z-20\r
            pointer-events-none\r
            select-none\r
          `,children:r.jsx("span",{className:`\r
              text-white/70\r
              font-light\r
              uppercase\r
              tracking-[0.3em]\r
              text-[10px] sm:text-xs md:text-sm\r
              drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]\r
            `,children:"© BACKYARD NEST"})}),r.jsx("div",{className:"absolute inset-0 bg-black/45 z-10"}),r.jsxs("div",{className:`\r
            relative z-20\r
            h-full\r
            max-w-7xl\r
            mx-auto\r
            px-8\r
            flex flex-col\r
            justify-end\r
            pb-24\r
          `,children:[r.jsx("span",{className:`\r
              uppercase\r
              tracking-[0.3em]\r
              text-white/60\r
              text-xs\r
              mb-6\r
            `,children:e}),r.jsxs("h1",{className:`\r
              editorial-heading\r
              text-white\r
              text-[clamp(4rem,10vw,8rem)]\r
              leading-[0.9]\r
            `,children:[n,r.jsxs("span",{className:"italic text-[#D7BE8A]",children:[" ",(re==null?void 0:re.highlight)||i]})]}),r.jsx("p",{className:"text-white/75 max-w-2xl mt-6 text-base md:text-lg leading-relaxed",children:(re==null?void 0:re.description)||o}),r.jsxs("div",{className:"flex gap-10 mt-10 text-white/80",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs uppercase tracking-[0.2em] opacity-50",children:"Size"}),r.jsx("p",{children:(re==null?void 0:re.size)||l})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs uppercase tracking-[0.2em] opacity-50",children:"Beds"}),r.jsx("p",{children:u})]}),d&&d!=="0"&&r.jsxs("div",{children:[r.jsx("p",{className:"text-xs uppercase tracking-[0.2em] opacity-50",children:"Baths"}),r.jsx("p",{children:d})]})]})]})]}),r.jsx("section",{className:"bg-[#F5F0EB] py-20 lg:py-28",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-5",children:"Specifications"}),r.jsxs("h2",{className:`\r
                editorial-heading\r
                text-[#2E2A26]\r
                text-[clamp(2.8rem,6vw,4.8rem)]\r
                leading-[0.95]\r
              `,children:["Designed For",r.jsx("br",{}),"Modern Living"]})]}),(()=>{const $=[{value:(re==null?void 0:re.size)||l,label:"Footprint"},{value:u,label:"Bedroom"},...d&&d!=="0"?[{value:d,label:"Bathroom"}]:[],{value:h,label:"Warranty*"}],H=!d||d==="0";return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"lg:hidden",children:H?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"grid grid-cols-2 gap-5",children:$.slice(0,2).map((T,W)=>r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:W*.1},whileHover:{y:-6},className:"group rounded-[28px] border border-[#E8DED3] bg-white p-6 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]",children:[r.jsx("p",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.2rem,7vw,3.6rem)] leading-none group-hover:text-[#C7A77A] transition-colors",children:T.value}),r.jsx("div",{className:"w-12 h-px bg-[#C7A77A] mx-auto my-5"}),r.jsx("p",{className:"uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]",children:T.label})]},T.label))}),r.jsx("div",{className:"flex justify-center mt-5",children:r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},whileHover:{y:-6},className:"group w-full max-w-[220px] rounded-[28px] border border-[#E8DED3] bg-white p-6 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]",children:[r.jsx("p",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.2rem,7vw,3.6rem)] leading-none group-hover:text-[#C7A77A] transition-colors",children:$[2].value}),r.jsx("div",{className:"w-12 h-px bg-[#C7A77A] mx-auto my-5"}),r.jsx("p",{className:"uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]",children:$[2].label})]})})]}):r.jsx("div",{className:"grid grid-cols-2 gap-5",children:$.map((T,W)=>r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:W*.1},whileHover:{y:-6},className:"group rounded-[28px] border border-[#E8DED3] bg-white p-6 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]",children:[r.jsx("p",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.2rem,7vw,3.6rem)] leading-none group-hover:text-[#C7A77A] transition-colors",children:T.value}),r.jsx("div",{className:"w-12 h-px bg-[#C7A77A] mx-auto my-5"}),r.jsx("p",{className:"uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]",children:T.label})]},T.label))})}),r.jsx("div",{className:`hidden lg:grid gap-6 ${H?"grid-cols-3":"grid-cols-4"}`,children:$.map((T,W)=>r.jsxs(oe.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:W*.1},whileHover:{y:-6},className:"group rounded-[28px] border border-[#E8DED3] bg-white p-8 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]",children:[r.jsx("p",{className:"editorial-heading text-[#2E2A26] text-[clamp(2.6rem,4vw,3.8rem)] leading-none transition-colors duration-300 group-hover:text-[#C7A77A]",children:T.value}),r.jsx("div",{className:"w-12 h-px bg-[#C7A77A] mx-auto my-5"}),r.jsx("p",{className:"uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]",children:T.label})]},T.label))})]})})()]})}),r.jsxs("section",{className:"relative border-t border-[#E8DED3] bg-[#F7F5F0] py-24 lg:py-32 overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[r.jsx("div",{className:"absolute -top-48 left-0 w-[500px] h-[500px] rounded-full bg-[#C7A77A]/5 blur-3xl"}),r.jsx("div",{className:"absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C7A77A]/5 blur-3xl"})]}),r.jsxs("div",{className:"relative max-w-7xl mx-auto px-6 lg:px-8",children:[r.jsxs("div",{className:"max-w-4xl mx-auto text-center mb-20",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-[11px] text-[#A08E7C] mb-5",children:"STANDARD INCLUSIONS"}),r.jsx("h2",{className:`\r
            editorial-heading\r
            text-[#2E2A26]\r
            text-[clamp(3.2rem,5vw,5.4rem)]\r
            leading-[0.92]\r
            mb-8\r
          `,children:"Luxury Comes Standard"}),r.jsx("p",{className:`\r
            text-[#5F5A55]\r
            text-lg\r
            leading-relaxed\r
            max-w-3xl\r
            mx-auto\r
          `,children:"Every Backyard Nest Granny flat is thoughtfully designed and built to deliver comfort, quality and long-term value. Explore what's included as standard in every premium Granny flat."})]}),r.jsx("div",{className:"grid md:grid-cols-2 gap-7",children:Y.map(($,H)=>{const T=ae===H;return r.jsxs("div",{onMouseEnter:()=>G(H),onMouseLeave:()=>G(null),onClick:()=>G(T?null:H),className:`
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              bg-white
              cursor-pointer
              transition-all
              duration-700
              ease-out
              ${T?"border-[#C7A77A] shadow-[0_25px_60px_rgba(0,0,0,0.08)]":"border-[#E8DED3] hover:border-[#D6BE9C]"}
            `,children:[r.jsx("span",{className:`\r
                absolute\r
                right-8\r
                top-4\r
                editorial-heading\r
                text-[7rem]\r
                leading-none\r
                text-[#F4EFE8]\r
                select-none\r
                pointer-events-none\r
              `,children:String(H+1).padStart(2,"0")}),r.jsx("div",{className:`
                absolute
                left-0
                top-0
                h-[3px]
                bg-[#C7A77A]
                transition-all
                duration-700
                ${T?"w-full":"w-0 group-hover:w-full"}
              `}),r.jsxs("div",{className:"relative z-10 p-9",children:[r.jsx("p",{className:`\r
                  uppercase\r
                  tracking-[0.25em]\r
                  text-[11px]\r
                  text-[#A08E7C]\r
                  mb-5\r
                `,children:"STANDARD"}),r.jsx("h3",{className:`\r
                  editorial-heading\r
                  text-[#2E2A26]\r
                  text-[2.4rem]\r
                  leading-none\r
                  mb-3\r
                `,children:$.title}),r.jsx("p",{className:`\r
                  text-[#7D7368]\r
                  text-sm\r
                  mb-8\r
                `,children:$.subtitle}),r.jsx("div",{className:`
          grid
          transition-all
          duration-700
          ease-in-out
          ${T?"grid-rows-[1fr] opacity-100 mt-8":"grid-rows-[0fr] opacity-0 mt-0"}
        `,children:r.jsx("div",{className:"overflow-hidden",children:r.jsx("div",{className:"space-y-2",children:$.items.map((W,fe)=>r.jsxs("div",{className:`
                  flex
                  items-start
                  gap-4
                  py-3
                  border-b
                  border-[#F1EBE4]
                  transition-all
                  duration-700
                  ${T?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}
                `,style:{transitionDelay:`${fe*70}ms`},children:[r.jsx("div",{className:`\r
                    mt-0.5\r
                    flex\r
                    h-7\r
                    w-7\r
                    items-center\r
                    justify-center\r
                    rounded-full\r
                    bg-[#F5EFE7]\r
                    text-[#C7A77A]\r
                    transition-all\r
                    duration-500\r
                    group-hover:bg-[#C7A77A]\r
                    group-hover:text-white\r
                  `,children:"✓"}),r.jsx("p",{className:`\r
                    flex-1\r
                    text-[15px]\r
                    leading-7\r
                    text-[#4E4943]\r
                  `,children:W})]},fe))})})}),r.jsxs("div",{className:`\r
          mt-10\r
          flex\r
          items-center\r
          justify-between\r
          border-t\r
          border-[#EEE6DC]\r
          pt-6\r
        `,children:[r.jsxs("span",{className:`\r
            uppercase\r
            tracking-[0.2em]\r
            text-[11px]\r
            text-[#A08E7C]\r
          `,children:[$.items.length," Standard Inclusions"]}),r.jsx("div",{className:`
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-500
            ${T?"border-[#C7A77A] bg-[#C7A77A] text-white rotate-45":"border-[#E4D8C8] text-[#A08E7C]"}
          `,children:r.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 5v14M5 12h14"})})})]})]})]},H)})}),r.jsx("div",{className:"mt-14 border-t border-[#E8DED3] pt-8",children:r.jsxs("p",{className:`\r
            text-sm\r
            leading-7\r
            text-[#7B7268]\r
            max-w-4xl\r
          `,children:[r.jsx("strong",{children:"*Disclaimer:"})," Standard inclusions are subject to site conditions, engineering requirements, council approvals and service connection availability. Specifications may vary depending on the selected Backyard Nest Granny flat design and individual project requirements."]})})]})]}),r.jsx("section",{className:"bg-[#F5F0EB] py-16 md:py-24 lg:py-32",children:r.jsxs("div",{className:"max-w-[1700px] mx-auto px-5 md:px-6 lg:px-10",children:[r.jsxs("div",{className:"max-w-3xl mb-10 md:mb-16 lg:mb-20",children:[r.jsx("span",{className:"text-[11px] uppercase tracking-[0.35em] text-black/40",children:"Design Overview"}),r.jsx("h2",{className:"editorial-heading text-4xl md:text-5xl lg:text-7xl mt-4",children:"Explore The Design"}),r.jsx("p",{className:"mt-5 md:mt-6 text-black/60 text-base md:text-lg leading-relaxed",children:"Visualise every detail of your Granny flat, from the architectural floor plan through to the completed living space."})]}),r.jsxs("div",{className:`\r
              relative\r
              h-[380px]\r
              sm:h-[500px]\r
              md:h-[650px]\r
              lg:h-[850px]\r
              rounded-[32px]\r
              md:rounded-[50px]\r
              lg:rounded-[70px]\r
              overflow-hidden\r
              border\r
              border-black/10\r
              bg-[#EFE8E1]\r
            `,onTouchStart:$=>{we.current=$.touches[0].clientX},onTouchEnd:$=>{if(!(Z!=null&&Z.length))return;const H=we.current-$.changedTouches[0].clientX;H>50&&F(T=>T>=Z.length-1?0:T+1),H<-50&&F(T=>T<=0?Z.length-1:T-1)},children:[Z.map(($,H)=>r.jsx("div",{className:`
            absolute inset-0
            transition-all duration-700 ease-out
            ${ge===H?"opacity-100 scale-100 z-10":"opacity-0 scale-[1.03] z-0"}
          `,children:r.jsx(nr,{src:$.main,alt:$.label,fit:$.label==="Floor Plan"?"contain":"cover",className:"w-full h-full"})},H)),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none z-20"}),r.jsx("div",{className:"absolute top-4 left-4 md:top-8 md:left-8 z-30",children:r.jsx("div",{className:"bg-white/90 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm",children:r.jsx("span",{className:"text-[10px] md:text-[11px] uppercase tracking-[0.25em] md:tracking-[0.3em]",children:(ke==null?void 0:ke.label)||"Design"})})}),r.jsx("div",{className:"absolute top-4 right-4 md:top-8 md:right-8 z-30",children:r.jsx("div",{className:"bg-white/90 backdrop-blur-md px-4 py-2 md:px-5 md:py-3 rounded-full shadow-sm",children:r.jsxs("span",{className:"text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em]",children:[ge+1," / ",Z.length]})})}),r.jsx("div",{className:"absolute bottom-24 left-1/2 -translate-x-1/2 z-30 md:hidden",children:r.jsx("div",{className:"bg-white/90 backdrop-blur-md px-4 py-2 rounded-full",children:r.jsx("span",{className:"text-[10px] uppercase tracking-[0.2em] text-black/50",children:"Swipe →"})})}),r.jsx("div",{className:"absolute bottom-4 md:bottom-8 left-4 md:left-8 z-30 flex gap-2 md:gap-2",children:Z.map(($,H)=>r.jsxs("button",{onClick:()=>F(H),onMouseEnter:()=>A(H),onMouseLeave:()=>A(null),className:`
                    relative
                    group
                    w-12 h-12
                    sm:w-14 sm:h-14
                    md:w-16 md:h-16
                    lg:w-24 lg:h-24
                    rounded-[18px]
                    md:rounded-[24px]
                    lg:rounded-[28px]
                    overflow-hidden
                    transition-all
                    duration-500
                    ${U===H?"scale-105":"opacity-75 hover:opacity-100 hover:-translate-y-2"}
                  `,children:[r.jsx("div",{className:`\r
          w-full\r
          h-full\r
          bg-cover\r
          bg-center\r
          transition-transform\r
          duration-700\r
          group-hover:scale-110\r
        `,style:{backgroundImage:`url(${$.thumb})`}}),r.jsx("div",{className:`
                      absolute inset-0
                      transition-all duration-300
                      ${U===H?"bg-black/10":"bg-black/25 group-hover:bg-black/10"}
                    `}),U===H&&r.jsx("div",{className:"absolute inset-0 rounded-[18px] md:rounded-[24px] lg:rounded-[28px] ring-2 md:ring-4 ring-white"}),r.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:block",children:r.jsx("span",{className:"text-[9px] lg:text-[10px] uppercase tracking-[0.15em] lg:tracking-[0.2em] text-white whitespace-nowrap",children:$.label})})]},H))}),r.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[3px] md:h-[4px] bg-black/5 z-30",children:r.jsx("div",{className:"h-full bg-black/80 transition-all duration-500",style:{width:`${Z.length?(U+1)/Z.length*100:0}%`}})})]})]})}),b,r.jsx("section",{className:"bg-[#EFE8DF] py-40",children:r.jsx("div",{className:"max-w-7xl mx-auto px-8",children:r.jsxs("div",{className:"grid lg:grid-cols-2 gap-20 items-center",children:[r.jsxs("div",{children:[r.jsx("span",{className:`\r
                  uppercase\r
                  tracking-[0.3em]\r
                  text-[#A08E7C]\r
                  text-xs\r
                `,children:"Next Step"}),r.jsxs("h2",{className:`\r
                  editorial-heading\r
                  text-[#2E2A26]\r
                  text-5xl\r
                  md:text-7xl\r
                  leading-[0.92]\r
                  tracking-[-0.04em]\r
                  mt-6\r
                `,children:["Let's Design",r.jsx("br",{}),"Your Space",r.jsx("br",{}),"Together."]})]}),r.jsxs("div",{children:[r.jsx("p",{className:`\r
                  text-[#5F5A55]\r
                  text-lg\r
                  leading-relaxed\r
                  mb-10\r
                `,children:"Every property is different. Our team will guide you through layouts, finishes, council requirements and pricing to help create the perfect backyard space."}),r.jsxs("div",{className:"space-y-6 mb-12",children:[r.jsxs("div",{className:"flex justify-between border-b border-black/10 pb-4",children:[r.jsx("span",{className:"text-[#5F5A55]",children:"Free Design Consultation"}),r.jsx("span",{className:"text-[#2E2A26]",children:"01"})]}),r.jsxs("div",{className:"flex justify-between border-b border-black/10 pb-4",children:[r.jsx("span",{className:"text-[#5F5A55]",children:"Tailored Quote"}),r.jsx("span",{className:"text-[#2E2A26]",children:"02"})]}),r.jsxs("div",{className:"flex justify-between border-b border-black/10 pb-4",children:[r.jsx("span",{className:"text-[#5F5A55]",children:"Design & Build Support"}),r.jsx("span",{className:"text-[#2E2A26]",children:"03"})]})]}),r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx("button",{onClick:()=>R("/booking"),className:`\r
                    px-8\r
                    py-4\r
                    bg-[#2E2A26]\r
                    text-white\r
                    hover:bg-black\r
                    transition-all\r
                  `,children:"Book Consultation"}),r.jsx("button",{onClick:()=>R("/products"),className:`\r
                    px-8\r
                    py-4\r
                    border\r
                    border-[#2E2A26]/20\r
                    text-[#2E2A26]\r
                    hover:bg-[#2E2A26]\r
                    hover:text-white\r
                    transition-all\r
                  `,children:"Explore Collection"})]})]})]})})}),r.jsx(As,{currentId:Number(i)})]})}function j5(){const e=[{id:"default",name:"Classic",subtitle:"Spotted Gum - A timeless Australian hardwood",color:"#fcefd6",image:"/images/grannyflat/grannyflatexmp/granny_flats_hero.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"Deep modern vertical cladding",color:"#2B2B2B",image:"/images/grannyflat/grannyflatexmp/granny_flats_hero.webp"},{id:"timber",name:"Natural Timber",subtitle:"Warm timber tones for an organic feel",color:"#C8A46B",image:"/images/grannyflat/grannyflatexmp/granny_flats_hero.webp"},{id:"navy",name:"Navy Blue",subtitle:"Low-maintenance architectural finish",color:"#6B7280",image:"/images/grannyflat/grannyflatexmp/granny_flats_hero.webp"},{id:"sage",name:"Sage White",subtitle:"Soft contemporary weatherboard",color:"#E5E5E5",image:"/images/grannyflat/grannyflatexmp/granny_flats_hero.webp"}],n=[{main:"/images/grannyflat/wattle_60/wattle_2.webp",thumb:"/images/grannyflat/wattle_60/wattle_2.webp",label:"Exterior"},{main:"/images/grannyflat/wattle_60/wattle_int_1.webp",thumb:"/images/grannyflat/wattle_60/wattle_int_1.webp",label:"Interior"},{main:"/images/grannyflat/wattle_60/wattle_int_2.webp",thumb:"/images/grannyflat/wattle_60/wattle_int_2.webp",label:"Interior"},{main:"/images/grannyflat/wattle_60/wattle_floorplan.webp",thumb:"/images/grannyflat/wattle_60/wattle_floorplan.webp",label:"Floor Plan"}];return r.jsx(da,{category:"Granny Flat",title:"The Wattle",highlight:"60",description:"A spacious 60m² granny flat designed for modern Australian living. The Wattle 60 combines generous living areas, a practical layout and private bedroom accommodation to create a comfortable, independent space for family, guests or future rental accommodation.",size:"60 m²",beds:"1",baths:"1",warranty:"10 Year",heroImage:"/images/grannyflat/wattle_60/wattle_1.webp",floorplan:"/images/grannyflat/wattle_60/wattle_floorplan.webp",mobileHeroImage:"/images/grannyflat/wattle_60/wattle_mobile.webp",seoTitle:"The Wattle 60 | 60m² Granny Flat Melbourne",seoDescription:"Explore The Wattle 60 by Backyard Nest, a spacious 60m² granny flat designed for independent living, family accommodation, guests or rental potential in Melbourne.",seoUrl:"https://backyardnest.com.au/products/GrannyflatProductWattle",seoImage:"/images/grannyflat/wattle_60/wattle_1.webp",finishes:e,galleryImages:n,relatedProducts:r.jsx(ii,{currentId:60}),designInspiration:r.jsx(zn,{title:r.jsxs(r.Fragment,{children:["Designed For",r.jsx("br",{}),"Modern Australian",r.jsx("br",{}),"Living."]}),subtitle:"60m² Modern Australian Granny Flat",intro:"A smarter way to make more of your backyard.",paragraphs:["The Wattle 60 is a spacious 60m² granny flat designed for Australian homeowners looking to create a comfortable, independent living space in their backyard.","With generous living areas, a practical layout and private bedroom accommodation, the Wattle 60 is designed to support the changing needs of Australian families while maintaining a strong connection to the outdoors.","Whether you are considering a granny flat for rental accommodation, multi-generational living or a private space for visiting family and friends, the Wattle 60 provides the space and functionality to make your backyard work harder for you.","More than additional floor space, the Wattle 60 creates an independent backyard residence that brings together privacy, functionality and everyday comfort. Its flexible design makes it suitable for family living, guest accommodation and future lifestyle needs."],features:["Spacious 60m² floor plan","Practical open living areas","Private bedroom accommodation","Designed for independent living","Suitable for multi-generational living","Ideal for guest accommodation","Rental accommodation potential","Strong indoor-outdoor connection"],outro:"Thoughtfully designed for modern Australian lifestyles, The Wattle 60 transforms your backyard into a comfortable and versatile extension of your home."})})}function N5(){const e=[{id:"default",name:"Classic",subtitle:"A timeless finish for modern Australian living",color:"#FCEFD6",image:"/images/grannyflat/haven_48/haven_48_1.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"A deep contemporary architectural finish",color:"#2B2B2B",image:"/images/grannyflat/haven_48/haven_48_1.webp"},{id:"timber",name:"Natural Timber",subtitle:"Warm timber accents for a natural Australian character",color:"#C8A46B",image:"/images/grannyflat/haven_48/haven_48_1.webp"},{id:"navy",name:"Navy Blue",subtitle:"A refined contemporary exterior finish",color:"#6B7280",image:"/images/grannyflat/haven_48/haven_48_1.webp"},{id:"sage",name:"Sage White",subtitle:"A soft neutral finish for a contemporary exterior",color:"#E5E5E5",image:"/images/grannyflat/haven_48/haven_48_1.webp"}],n=[{main:"/images/grannyflat/haven/haven_48_1.webp",thumb:"/images/grannyflat/haven/haven_48_1.webp",label:"Exterior"},{main:"/images/grannyflat/haven/haven_48_int_1.webp",thumb:"/images/grannyflat/haven/haven_48_int_1.webp",label:"Interior"},{main:"/images/grannyflat/haven/haven_48_int_2.webp",thumb:"/images/grannyflat/haven/haven_48_int_2.webp",label:"Interior"},{main:"/images/grannyflat/haven/haven_48_floorplan.webp",thumb:"/images/grannyflat/haven/haven_48_floorplan.webp",label:"Floor Plan"}];return r.jsx(da,{category:"Granny Flat",title:"The Haven",highlight:"48",description:"The Haven 48 is a modern 48m² one-bedroom granny flat designed for suitable Victorian properties. With an open-plan kitchen, living and dining area, private bedroom, bathroom and outdoor deck, it provides a practical secondary dwelling solution with a strong connection between the home and backyard.",size:"48 m²",beds:"1",baths:"—",warranty:"—",heroImage:"/images/grannyflat/haven/haven_48_2.webp",floorplan:"/images/grannyflat/haven/haven_48_floorplan.webp",mobileHeroImage:"/images/grannyflat/haven/haven_48_mobile.webp",seoTitle:"The Haven 48 | 48m² Granny Flat Melbourne",seoDescription:"Explore The Haven 48 by Backyard Nest, a modern 48m² one-bedroom granny flat designed for suitable Victorian properties and flexible secondary dwelling living.",seoUrl:"https://backyardnest.com.au/products/TheHaven",seoImage:"/images/grannyflat/haven/haven_48/haven_48_1.webp",finishes:e,galleryImages:n,relatedProducts:r.jsx(ii,{currentId:48}),designInspiration:r.jsx(zn,{title:r.jsxs(r.Fragment,{children:["Designed For",r.jsx("br",{}),"Modern Australian",r.jsx("br",{}),"Living."]}),subtitle:"48m² One-Bedroom Granny Flat",intro:"A smarter way to make more of your backyard.",paragraphs:["The Haven 48 is a modern 48m² one-bedroom granny flat designed for suitable Victorian properties.","The thoughtfully planned layout brings together an open-plan kitchen, living and dining area with a private bedroom, bathroom and outdoor deck.","Large windows and glazed doors bring natural light into the living areas while creating a strong connection between the home and backyard.","The Haven 48 is particularly suited to homeowners and property investors considering a backyard rental, granny flat investment or secondary dwelling on an existing residential property.","For suitable properties, a secondary dwelling can provide additional accommodation while potentially increasing the overall functionality and value of the property."],features:["48m² floor plan","One-bedroom design","Open-plan kitchen, living and dining","Private bedroom","Bathroom","Outdoor deck","Large windows","Glazed doors","Natural light throughout living areas","Strong connection between home and backyard","Designed for suitable Victorian properties","Suitable secondary dwelling solution","Backyard rental potential","Suitable for additional accommodation"],outro:"The Haven 48 provides a practical secondary dwelling solution that makes better use of suitable residential backyards across Victoria."})})}function k5(){const e=[{id:"default",name:"Classic",subtitle:"Spotted Gum - A timeless Australian hardwood",color:"#fcefd6",image:"/images/granny/bawa37/bawa37_classic.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"Deep modern vertical cladding",color:"#2B2B2B",image:"/images/granny/bawa37/bawa37_charcoal.webp"},{id:"timber",name:"Natural Timber",subtitle:"Warm timber tones for organic feel",color:"#C8A46B",image:"/images/granny/bawa37/bawa37_timber.webp"},{id:"navy",name:"Navy Blue",subtitle:"Low maintenance architectural finish",color:"#6B7280",image:"/images/granny/bawa37/bawa37_navy.webp"},{id:"sage",name:"Sage White",subtitle:"Soft contemporary weatherboard",color:"#E5E5E5",image:"/images/granny/bawa37/bawa37_sage.webp"}];return r.jsx(da,{category:"Granny Flats",title:"BAWA",highlight:"37",description:"A compact one-bedroom granny flat designed for comfortable backyard living with open-plan kitchen and living.",size:"6 x 6 m",area:"37 m²",beds:"1",baths:"1",warranty:"10 yr",heroImage:"/images/granny/bawa37/bawa37_hero.webp",floorplan:"/images/granny/bawa37/bawa37_floorplan.webp",finishes:e})}const A5=()=>{window.gtag&&window.gtag("event","conversion",{send_to:"AW-18311039639/CKlzCPbFrs8cEJeVsZtE",value:1,currency:"AUD"})};function C5(){var i;j.useEffect(()=>{A5(),window.scrollTo(0,0),document.title="Thank You | Backyard Nest"},[]);const e=Vt(),n=dn();return j.useEffect(()=>{var o;(o=n.state)!=null&&o.formSubmitted||e("/",{replace:!0})},[n,e]),(i=n.state)!=null&&i.formSubmitted?r.jsx("div",{className:"bg-[#F5F0EB] min-h-screen",children:r.jsx("section",{className:"min-h-screen flex items-center",children:r.jsx("div",{className:"max-w-6xl mx-auto px-8 py-32 w-full",children:r.jsxs("div",{className:"grid lg:grid-cols-2 gap-20 items-center",children:[r.jsxs("div",{children:[r.jsx("span",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-6",children:"Enquiry Received"}),r.jsxs("h1",{className:"editorial-heading text-[clamp(4rem,8vw,7rem)] leading-[0.9] text-[#2E2A26] mb-8",children:["Thank You",r.jsx("br",{}),"For",r.jsx("br",{}),"Reaching",r.jsx("br",{}),"Out"]}),r.jsx("p",{className:"text-lg text-[#5F5A55] leading-relaxed mb-12 max-w-xl",children:"We've received your enquiry and our team will review your project details. Expect a response within one business day to discuss your vision, requirements and next steps."}),r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx(Ue,{to:"/products",className:`\r
px-10 py-4\r
bg-white\r
border border-[rgba(46,42,38,0.08)]\r
text-[#5F5A55]\r
rounded-full\r
transition-all duration-300\r
hover:border-[#C7A77A]\r
hover:text-[#2E2A26]\r
hover:-translate-y-1\r
`,children:"Explore Our Studios"}),r.jsx(Ue,{to:"/",className:`\r
px-10 py-4\r
bg-transparent\r
text-[#A08E7C]\r
rounded-full\r
border border-[#C7A77A]/50\r
transition-all duration-300\r
hover:bg-[#C7A77A]/10\r
hover:border-[#C7A77A]\r
hover:text-[#2E2A26]\r
`,children:"Back Home"})]})]}),r.jsxs("div",{className:"bg-white rounded-[32px] p-10 shadow-sm border border-[rgba(46,42,38,0.06)]",children:[r.jsx("span",{className:"uppercase tracking-[0.25em] text-xs text-[#A08E7C]",children:"What Happens Next"}),r.jsxs("div",{className:"mt-10 space-y-10",children:[r.jsxs("div",{className:"flex gap-5",children:[r.jsx("div",{className:"w-12 h-12 rounded-full bg-[#C7A77A] flex items-center justify-center shrink-0",children:"✓"}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-[#2E2A26] font-medium mb-2",children:"Enquiry Received"}),r.jsx("p",{className:"text-[#5F5A55]",children:"Your project details have been successfully submitted."})]})]}),r.jsxs("div",{className:"flex gap-5",children:[r.jsx("div",{className:"w-12 h-12 rounded-full border border-[#C7A77A] flex items-center justify-center shrink-0",children:"2"}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-[#2E2A26] font-medium mb-2",children:"Initial Consultation"}),r.jsx("p",{className:"text-[#5F5A55]",children:"We discuss your goals, budget, design preferences and site requirements."})]})]}),r.jsxs("div",{className:"flex gap-5",children:[r.jsx("div",{className:"w-12 h-12 rounded-full border border-[#C7A77A] flex items-center justify-center shrink-0",children:"3"}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-[#2E2A26] font-medium mb-2",children:"Design & Planning"}),r.jsx("p",{className:"text-[#5F5A55]",children:"Our team develops a tailored solution based on your vision and property."})]})]}),r.jsxs("div",{className:"flex gap-5",children:[r.jsx("div",{className:"w-12 h-12 rounded-full border border-[#C7A77A] flex items-center justify-center shrink-0",children:"4"}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-[#2E2A26] font-medium mb-2",children:"Proposal & Build"}),r.jsx("p",{className:"text-[#5F5A55]",children:"Final approval, construction and delivery of your new space."})]})]})]})]})]})})})}):null}const E5=["Brighton","Bentleigh","Malvern","Kew","Mount Eliza","Sandringham","Frankston","St Kilda","Caulfield","Eltham","Another Melbourne suburb"],S5=["Studio","Granny Flat"];function Kg({className:e="",formName:n="consultation"}){const[i,o]=j.useState(!1),[l,u]=j.useState(!1),[d,h]=j.useState(""),[m,g]=j.useState({name:"",phone:"",email:"",suburb:"",address:"",projectType:"",studioModel:"",grannyModel:"",purpose:"",message:""}),x=(R,U)=>{g(F=>({...F,[R]:U,...R==="projectType"?{studioModel:"",grannyModel:""}:{}}))},y=R=>Object.keys(R).map(U=>encodeURIComponent(U)+"="+encodeURIComponent(R[U])).join("&"),b=/^(\+61|0)[2-9]\d{8}$/,w=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,N=/^[A-Za-zÀ-ÿ' -]{2,60}$/,E=()=>{if((Date.now()-z)/1e3<5)return h("Please take a moment to complete the form before submitting."),!1;if(!N.test(m.name.trim()))return h("Please enter a valid name."),!1;const U=["test","testing","admin","asdf","qwerty","unknown","demo","sample"];if((m.message.match(/https?:\/\//gi)||[]).length+(m.message.match(/www\./gi)||[]).length>1)return h("Please remove links from your message."),!1;if(U.includes(m.name.trim().toLowerCase()))return h("Please enter your real name."),!1;if(!b.test(m.phone.trim()))return h("Please enter a valid Australian phone number."),!1;const q=m.phone.replace(/\D/g,"");if(/^(.)\1+$/.test(q))return h("Please enter a valid phone number."),!1;if(!w.test(m.email.trim()))return h("Please enter a valid email address."),!1;if(!m.suburb)return h("Please select your suburb."),!1;if(!m.address.trim())return h("Please enter the property address."),!1;if(!/^\d+.*$/.test(m.address.trim()))return h("Please enter a valid property address."),!1;if(!m.projectType)return h("Please select a project type."),!1;if(m.projectType==="Studio"&&!m.studioModel)return h("Please select a studio model."),!1;if(m.projectType==="Granny Flat"&&!m.grannyModel)return h("Please select a granny flat model."),!1;if(!m.purpose)return h("Please select the purpose of your project."),!1;if(m.message.trim().length>1500)return h("Message is too long."),!1;if(/(asdf|qwerty|zxcv|123456|aaaa|bbbb|xxxxx)/i.test(m.message)||/(.)\1{7,}/.test(m.message))return h("Please enter a meaningful message."),!1;if(m.message.trim().length<10)return h("Please tell us a little more about your project."),!1;const G=["seo","backlink","guest post","guest-post","google ranking","rank your website","marketing agency","casino","bitcoin","crypto","loan","forex","viagra","porn","escort","telegram","whatsapp group","buy now","click here"],de=(m.name+m.email+m.message).toLowerCase();return G.some(ee=>de.includes(ee))?(h("Spam detected."),!1):(h(""),!0)},C=()=>{g({name:"",phone:"",email:"",suburb:"",address:"",projectType:"",studioModel:"",grannyModel:"",purpose:"",message:""})},M=async R=>{if(R.preventDefault(),!!E()){o(!0);try{if(!(await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:y({"form-name":n,...m})})).ok)throw new Error("Submission failed");u(!0),C()}catch{h("Something went wrong. Please try again.")}finally{o(!1)}}},I=()=>{if(!E())return;const R=`Hi Backyard Nest!

Name:
${m.name}

Phone:
${m.phone}

Email:
${m.email}

Suburb:
${m.suburb}

Property Address:
${m.address}

Project Type:
${m.projectType}

Model:
${m.projectType==="Studio"?m.studioModel:m.grannyModel}

Purpose:
${m.purpose}

Message:
${m.message}`;window.open(`https://wa.me/61466333438?text=${encodeURIComponent(R)}`,"_blank")},[z]=j.useState(Date.now());return r.jsx(r.Fragment,{children:l?r.jsxs("div",{className:`bg-[#1C1B19] text-white p-10 rounded-sm text-center ${e}`,children:[r.jsx(H2,{size:70,className:"mx-auto text-[#4B5D45] mb-6"}),r.jsx("h2",{className:"font-serif text-4xl mb-4",children:"Thank You!"}),r.jsx("p",{className:"text-neutral-300 leading-8 max-w-md mx-auto",children:"We've received your enquiry and one of our design consultants will contact you within one business day."}),r.jsx("button",{onClick:()=>u(!1),className:"mt-10 bg-white text-[#1C1B19] hover:bg-[#8B5A3C] hover:text-white transition px-8 py-4 font-semibold",children:"Send Another Enquiry"})]}):r.jsxs("form",{name:n,method:"POST","data-netlify":"true","netlify-honeypot":"bot-field",onSubmit:M,className:`space-y-6 ${e}`,children:[r.jsx("input",{type:"hidden",name:"form-name",value:n}),r.jsx("p",{hidden:!0,children:r.jsxs("label",{children:["Don't fill this out:",r.jsx("input",{name:"bot-field"})]})}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-5",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3",children:"Name"}),r.jsx("input",{required:!0,type:"text",name:"name",value:m.name,onChange:R=>x("name",R.target.value),placeholder:"Your Name",className:"w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white placeholder:text-neutral-500 focus:border-[#C7A77A] transition"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3",children:"Phone"}),r.jsx("input",{required:!0,type:"tel",name:"phone",value:m.phone,onChange:R=>x("phone",R.target.value),placeholder:"04XX XXX XXX",className:"w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white placeholder:text-neutral-500 focus:border-[#C7A77A] transition"})]})]}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-5",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3",children:"Email"}),r.jsx("input",{required:!0,type:"email",name:"email",value:m.email,onChange:R=>x("email",R.target.value),placeholder:"you@email.com",className:"w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white placeholder:text-neutral-500 focus:border-[#C7A77A] transition"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3",children:"Suburb"}),r.jsxs("select",{required:!0,name:"suburb",value:m.suburb,onChange:R=>x("suburb",R.target.value),className:"w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white focus:border-[#C7A77A] transition",children:[r.jsx("option",{value:"",children:"Select suburb"}),E5.map(R=>r.jsx("option",{value:R,children:R},R))]})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3",children:"Property Address"}),r.jsx("input",{required:!0,type:"text",name:"address",value:m.address,onChange:R=>x("address",R.target.value),placeholder:"123 Example Street, Brighton VIC 3186",autoComplete:"street-address",className:"w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white placeholder:text-neutral-500 focus:border-[#C7A77A] transition"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3",children:"Project Type"}),r.jsxs("select",{required:!0,name:"projectType",value:m.projectType,onChange:R=>x("projectType",R.target.value),className:"w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white focus:border-[#C7A77A] transition",children:[r.jsx("option",{value:"",children:"Select project"}),S5.map(R=>r.jsx("option",{value:R,children:R},R))]})]}),m.projectType==="Studio"&&r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3",children:"Studio Model"}),r.jsxs("select",{required:!0,name:"studioModel",value:m.studioModel,onChange:R=>x("studioModel",R.target.value),className:"w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white focus:border-[#C7A77A] transition",children:[r.jsx("option",{value:"",children:"Select Studio Model"}),r.jsx("option",{value:"The Vista",children:"The Vista"}),r.jsx("option",{value:"The Brighton",children:"The Brighton"}),r.jsx("option",{value:"The Aspen",children:"The Aspen"}),r.jsx("option",{value:"The Nest",children:"The Nest"})]})]}),m.projectType==="Granny Flat"&&r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3",children:"Granny Flat Model"}),r.jsxs("select",{required:!0,name:"grannyModel",value:m.grannyModel,onChange:R=>x("grannyModel",R.target.value),className:"w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white focus:border-[#C7A77A] transition",children:[r.jsx("option",{value:"",children:"Select Granny Flat Model"}),r.jsx("option",{value:"1 Bedroom Granny Flat",children:"1 Bedroom Granny Flat"}),r.jsx("option",{value:"2 Bedroom Granny Flat",children:"2 Bedroom Granny Flat"}),r.jsx("option",{value:"Custom Granny Flat",children:"Custom Granny Flat"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3",children:"Purpose of Your Project"}),r.jsxs("select",{required:!0,name:"purpose",value:m.purpose,onChange:R=>x("purpose",R.target.value),className:"w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white focus:border-[#C7A77A] transition",children:[r.jsx("option",{value:"",children:"Select purpose"}),r.jsx("option",{value:"Home Office",children:"Home Office"}),r.jsx("option",{value:"Extra Living Space",children:"Extra Living Space"}),r.jsx("option",{value:"Rental Income",children:"Rental Income"}),r.jsx("option",{value:"Guest Accommodation",children:"Guest Accommodation"}),r.jsx("option",{value:"Teenage Retreat",children:"Teenage Retreat"}),r.jsx("option",{value:"Not Sure Yet",children:"Not Sure Yet"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3",children:"Message"}),r.jsx("textarea",{rows:5,name:"message",value:m.message,onChange:R=>x("message",R.target.value),placeholder:"Tell us a little about your project...",className:"w-full resize-none bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white placeholder:text-neutral-500 focus:border-[#C7A77A] transition"})]}),d&&r.jsx("div",{className:"bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded-sm text-sm",children:d}),r.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:r.jsxs("button",{type:"button",onClick:I,className:"bg-[#4B5D45] hover:bg-[#3D4C38] transition text-white font-semibold py-4 flex justify-center items-center gap-3",children:[r.jsx(Rd,{size:20}),"Send via WhatsApp"]})}),r.jsx("p",{className:"text-center text-xs text-neutral-400 leading-6",children:"By submitting this form you agree to our Privacy Policy. We never share your information with third parties."})]})})}function Qg(){const[e,n]=j.useState(!1),[i,o]=j.useState({name:"",phone:"",email:"",suburb:"",projectType:"",message:""});return r.jsxs(r.Fragment,{children:[r.jsx(Yt,{title:"Backyard Nest | Premium Backyard Studios & Granny Flats Melbourne",description:"Architecturally designed backyard studios and granny flats built across Melbourne."}),r.jsxs("div",{className:"bg-[#FAF8F4] text-[#1C1B19] overflow-x-hidden",children:[r.jsxs("div",{className:"bg-[#1C1B19] text-[#F5F0EB] text-sm text-center py-2 px-4 tracking-wide",children:["🇦🇺 ",r.jsx("strong",{children:"100% Australian Made"}),r.jsx("span",{className:"mx-3",children:"•"}),"10-Year Structural Warranty*",r.jsx("span",{className:"mx-3",children:"•"}),"Servicing Melbourne's Bayside & Inner East"]}),r.jsxs("header",{className:"sticky top-0 z-50 backdrop-blur-md bg-[#FAF8F4]/95 border-b border-black/10",children:[r.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center px-6 py-5",children:[r.jsxs("a",{href:"/",className:"flex items-center gap-3",children:[r.jsx("img",{src:"/images/logo/final_white.webp",alt:"Backyard Nest",className:"h-10 w-auto object-contain select-none rounded-full border border-black/10 shadow-sm",draggable:!1,loading:"eager",onContextMenu:l=>l.preventDefault(),onDragStart:l=>l.preventDefault(),onMouseDown:l=>{l.button===2&&l.preventDefault()},style:{userSelect:"none",WebkitUserDrag:"none",WebkitUserSelect:"none"}}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-serif text-xl",children:"Backyard Nest"}),r.jsx("p",{className:"text-xs uppercase tracking-[0.3em] text-neutral-500",children:"Melbourne"})]})]}),r.jsxs("nav",{className:"hidden lg:flex items-center gap-10",children:[r.jsx("a",{href:"#designs",className:"hover:text-[#8B5A3C] transition",children:"Designs"}),r.jsx("a",{href:"#gallery",className:"hover:text-[#8B5A3C] transition",children:"Gallery"}),r.jsx("a",{href:"#process",className:"hover:text-[#8B5A3C] transition",children:"Process"}),r.jsx("a",{href:"#faq",className:"hover:text-[#8B5A3C] transition",children:"FAQ"})]}),r.jsxs("div",{className:"hidden lg:flex items-center gap-4",children:[r.jsxs("a",{href:"tel:1300000000",className:"flex items-center gap-2 text-sm",children:[r.jsx(Dj,{size:16}),"+61 466 333 438"]}),r.jsx("a",{href:"#enquire",className:"px-5 py-3 border border-[#1C1B19] hover:bg-[#6E4630] hover:text-white transition",children:"Free Consultation"})]}),r.jsx("button",{onClick:()=>n(!e),className:"lg:hidden",children:e?r.jsx(Ox,{size:28}):r.jsx(kj,{size:28})})]}),e&&r.jsx("div",{className:"lg:hidden bg-[#FAF8F4] border-t border-black/10",children:r.jsxs("div",{className:"flex flex-col p-6 gap-5",children:[r.jsx("a",{href:"#designs",children:"Designs"}),r.jsx("a",{href:"#gallery",children:"Gallery"}),r.jsx("a",{href:"#process",children:"Process"}),r.jsx("a",{href:"#faq",children:"FAQ"}),r.jsx("a",{href:"#enquire",className:"bg-[#6E4630] text-white text-center py-3",children:"Free Consultation"})]})})]}),r.jsx("section",{className:"py-24",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6",children:r.jsxs("div",{className:"grid lg:grid-cols-2 gap-20 items-center",children:[r.jsxs("div",{className:"order-2 lg:order-1",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-[#4B5D45] text-sm mb-5",children:"Bayside & Inner East Melbourne"}),r.jsxs("h1",{className:"font-serif text-5xl lg:text-7xl leading-tight",children:["Premium backyard living,",r.jsxs("span",{className:"italic text-[#8B5A3C]",children:[" ","architecturally"," "]}),"designed."]}),r.jsx("p",{className:"text-lg mt-8 max-w-xl text-neutral-700 leading-8",children:"Backyard Nest designs and builds custom studios, home offices and granny flats — crafted by Australian tradespeople, built to feel like part of your home from day one."}),r.jsxs("div",{className:"flex flex-wrap gap-5 mt-10",children:[r.jsx("a",{href:"#enquire",className:"inline-flex items-center justify-center bg-[#1C1B19] px-8 py-4 font-semibold transition-colors duration-300 hover:bg-[#6E4630]",style:{color:"#FFFFFF",textDecoration:"none"},onMouseEnter:l=>l.currentTarget.style.color="#FFFFFF",onMouseLeave:l=>l.currentTarget.style.color="#FFFFFF",children:"See What's Possible"}),r.jsxs("a",{href:"https://wa.me/message/63HQ6LV2X7ABF1",className:"bg-[#4B5D45] hover:bg-[#3D4C38] transition text-white px-8 py-4 flex items-center gap-2",children:[r.jsx(Rd,{size:18}),"WhatsApp"]})]}),r.jsxs("div",{className:"flex gap-12 mt-14",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"font-serif text-4xl",children:"150+"}),r.jsx("p",{className:"uppercase tracking-widest text-xs",children:"Backyards Transformed"})]}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-serif text-4xl",children:"10YR"}),r.jsx("p",{className:"uppercase tracking-widest text-xs",children:"Structural Warranty*"})]}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-serif text-4xl",children:"4.9★"}),r.jsx("p",{className:"uppercase tracking-widest text-xs",children:"AVERAGE CLIENT RATING"})]})]})]}),r.jsxs("div",{className:"space-y-8 order-1 lg:order-2",children:[r.jsxs("div",{className:"bg-[#EDE7DC] border border-black/10 p-6 shadow-lg",children:[r.jsx("img",{src:"/images/studio/studio1/studio1.webp",alt:"Backyard Nest Studio",className:"w-full h-full object-cover select-none",draggable:!1,loading:"eager",onContextMenu:l=>l.preventDefault(),onDragStart:l=>l.preventDefault(),onMouseDown:l=>{l.button===2&&l.preventDefault()},style:{userSelect:"none",WebkitUserDrag:"none",WebkitUserSelect:"none"}}),r.jsxs("div",{className:"flex justify-between mt-5 text-xs uppercase tracking-[0.25em] text-neutral-500",children:[r.jsx("span",{children:"Concept Design"}),r.jsx("span",{children:"Backyard Studio"})]})]}),r.jsxs("div",{id:"enquire",className:"bg-[#1C1B19] text-white p-8 lg:p-10 shadow-2xl",children:[r.jsx("p",{className:"uppercase tracking-[0.3em] text-xs text-[#CBBFA4] mb-3",children:"Free Consultation"}),r.jsx("h2",{className:"font-serif text-3xl",children:"Get your free design consultation"}),r.jsx("p",{className:"text-neutral-300 mt-3 mb-8",children:"Tell us about your backyard — we'll respond within one business day."}),r.jsx(Kg,{})]})]})]})})}),r.jsx("section",{className:"border-y border-black/10 bg-[#EDE7DC] py-10",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-center text-xs text-neutral-500 mb-8",children:"PROUDLY DESIGNING & BUILDING ACROSS"}),r.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:["Brighton","Bentleigh","Malvern","Kew","Mount Eliza","Sandringham","Frankston","Caulfield","St Kilda","Eltham","Mornington Peninsula"].map(l=>r.jsx("span",{className:"px-5 py-2 border border-black/10 rounded-full bg-white text-sm",children:l},l))})]})}),r.jsx("section",{id:"designs",className:"py-24 bg-[#FAF8F4]",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[r.jsxs("div",{className:"max-w-3xl",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#4B5D45] mb-4",children:"WHY HOMEOWNERS CHOOSE BACKYARD NEST"}),r.jsxs("h2",{className:"font-serif text-5xl leading-tight",children:["Every space is designed around",r.jsxs("span",{className:"italic text-[#8B5A3C]",children:[" ","how you actually live."]})]}),r.jsx("p",{className:"text-neutral-600 text-lg mt-6 leading-8",children:"We don't believe in one-size-fits-all backyard buildings. Every Backyard Nest project is thoughtfully designed around your lifestyle, your home and your future plans."})]}),r.jsx("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16",children:[{number:"01",title:"Architecturally Designed",description:"Every layout starts as a considered design, not a stock template — shaped around your block, your light and your lifestyle."},{number:"02",title:"Quality Craftsmanship",description:"Built by Australian tradespeople using materials chosen to perform in our climate for decades, not seasons."},{number:"03",title:"Built to Last",description:"Backed by a 10-year structural warranty, because a well-built backyard studio should outlast the trend it started in."},{number:"04",title:"Thoughtfully Designed Spaces",description:"From natural light to storage to acoustic comfort — the details that make a space feel finished, not just complete."},{number:"05",title:"Modern Australian Design",description:"Clean lines and warm materials that sit naturally alongside the character of your existing home."},{number:"06",title:"Designed Around Your Lifestyle",description:"A home office, a teenage retreat, a guest studio — we design for how the space will actually be used, day to day."}].map(l=>r.jsxs("div",{className:"group bg-white border border-black/10 hover:border-[#8B5A3C] transition-all duration-500 p-8 hover:-translate-y-2",children:[r.jsx("p",{className:"text-sm tracking-[0.25em] text-[#8B5A3C] mb-5",children:l.number}),r.jsx("h3",{className:"font-serif text-2xl mb-5 group-hover:text-[#8B5A3C] transition",children:l.title}),r.jsx("p",{className:"leading-8 text-neutral-600",children:l.description})]},l.number))})]})}),r.jsx("section",{id:"gallery",className:"bg-[#EDE7DC] py-24",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[r.jsx("div",{className:"flex justify-between items-end flex-wrap gap-8",children:r.jsxs("div",{children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#4B5D45] mb-4",children:"A Sample of Recent Concepts"}),r.jsxs("h2",{className:"font-serif text-5xl",children:["Four ways to give your",r.jsxs("span",{className:"italic text-[#8B5A3C]",children:[" ","backyard"]}),r.jsx("br",{}),"more purpose."]})]})}),r.jsx("div",{className:"grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16",children:[{title:"Backyard Studio",image:"/images/studio/studio1/studio1.webp",text:"A flexible retreat for work, rest or play.",path:"/products/studio"},{title:"Home Office Pod",image:"/images/studio/studio3/studio3.2.webp",text:"A quiet, separate space to focus and create.",path:"/products/studio"},{title:"Granny Flat",image:"/images/grannyflat/grannyflatexmp/granny_flats_hero.webp",text:"Self-contained comfort for family or guests.",path:"/products/granny"}].map(l=>r.jsxs(Ue,{to:l.path,className:"group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 block cursor-pointer",children:[r.jsx("div",{className:"overflow-hidden",children:r.jsx("img",{src:l.image,alt:l.title,className:"aspect-[4/3] w-full object-cover group-hover:scale-110 transition duration-700 select-none",draggable:!1,loading:"lazy",onContextMenu:u=>u.preventDefault(),onDragStart:u=>u.preventDefault(),onMouseDown:u=>{u.button===2&&u.preventDefault()},style:{userSelect:"none",WebkitUserDrag:"none",WebkitUserSelect:"none"}})}),r.jsxs("div",{className:"p-6",children:[r.jsx("h3",{className:"font-serif text-2xl mb-3",children:l.title}),r.jsx("p",{className:"text-neutral-600 leading-7 mb-6",children:l.text}),r.jsx("span",{className:"text-[#8B5A3C] font-medium group-hover:underline",children:"Explore Design →"})]})]},l.title))})]})}),r.jsx("section",{id:"process",className:"py-24 bg-[#FAF8F4]",children:r.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[r.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#4B5D45] mb-4",children:"How It Works"}),r.jsxs("h2",{className:"font-serif text-5xl leading-tight",children:["From first enquiry to handover,",r.jsx("br",{}),r.jsxs("span",{className:"italic text-[#8B5A3C]",children:[" ","in five clear steps."]})]}),r.jsx("p",{className:"text-neutral-600 text-lg mt-6 leading-8",children:"We manage every stage of your project so you don't have to coordinate multiple contractors or navigate council approvals yourself."})]}),r.jsx("div",{className:"mt-20 space-y-10",children:[{step:"01",title:"Enquire",text:"Send us a few details about your block and what you have in mind — takes under two minutes."},{step:"02",title:"Free Design Consult",text:"We visit your property, talk through how you'll use the space, and scope an initial concept together."},{step:"03",title:"Concept & Council Approval",text:"We finalise your design and manage the council and planning process on your behalf."},{step:"04",title:"Build",text:"Our Australian trade teams construct your space with regular updates, start to finish."},{step:"05",title:"Handover & Aftercare",text:"A final walkthrough, your warranty documentation, and ongoing support after the keys are handed over."}].map(l=>r.jsxs("div",{className:"grid lg:grid-cols-[120px_1fr] gap-8 border-t border-black/10 pt-10",children:[r.jsx("div",{children:r.jsx("div",{className:"font-serif text-5xl text-[#CBBFA4]",children:l.step})}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-serif text-3xl mb-4",children:l.title}),r.jsx("p",{className:"text-neutral-600 leading-8 max-w-3xl",children:l.text})]})]},l.step))}),r.jsx("div",{className:"text-center mt-16",children:r.jsx("a",{href:"#enquire",className:"inline-flex items-center justify-center bg-[#1C1B19] px-10 py-4 font-semibold transition-colors duration-300 hover:bg-[#6E4630]",style:{color:"#FFFFFF",textDecoration:"none"},onMouseEnter:l=>l.currentTarget.style.color="#FFFFFF",onMouseLeave:l=>l.currentTarget.style.color="#FFFFFF",children:"Book Your Free Site Assessment"})})]})}),r.jsx("section",{className:"py-24 bg-[#EDE7DC]",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[r.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#4B5D45] mb-4",children:"What Homeowners Say"}),r.jsxs("h2",{className:"font-serif text-5xl",children:["Trusted by homeowners across",r.jsxs("span",{className:"italic text-[#8B5A3C]",children:[" ","Melbourne's bayside and inner east."]})]})]}),r.jsx("div",{className:"grid lg:grid-cols-3 gap-8 mt-16",children:[{suburb:"Brighton",review:"The finished studio feels like it was always part of the house. The attention to detail was obvious from the first sketch."},{suburb:"Kew",review:"Council approval, scheduling, trades — all handled for us. We just had to choose the finishes."},{suburb:"Mount Eliza",review:"Our home office pod changed how our whole week works. Quiet, well-built, and it looks fantastic."}].map(l=>r.jsxs("div",{className:"bg-white p-8 border border-black/10 hover:shadow-xl transition duration-500",children:[r.jsx("div",{className:"text-[#8B5A3C] text-xl mb-6",children:"★★★★★"}),r.jsxs("p",{className:"font-serif text-2xl italic leading-10",children:['"',l.review,'"']}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h4",{className:"font-semibold",children:"Homeowner"}),r.jsx("p",{className:"text-neutral-500",children:l.suburb})]})]},l.suburb))}),r.jsx("div",{className:"grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20",children:[{value:"150+",label:"Projects Completed"},{value:"4.9★",label:"Average Rating"},{value:"10 Years",label:"Structural Warranty"},{value:"100%",label:"Australian Built"}].map(l=>r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"font-serif text-5xl text-[#8B5A3C]",children:l.value}),r.jsx("p",{className:"uppercase tracking-[0.25em] text-xs mt-3 text-neutral-600",children:l.label})]},l.label))})]})}),r.jsx("section",{id:"faq",className:"py-24 bg-[#FAF8F4]",children:r.jsxs("div",{className:"max-w-5xl mx-auto px-6",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#4B5D45] mb-4",children:"Common Questions"}),r.jsxs("h2",{className:"font-serif text-5xl",children:["Everything you'd ask before",r.jsxs("span",{className:"italic text-[#8B5A3C]",children:[" ","getting started."]})]})]}),r.jsx("div",{className:"mt-16 divide-y divide-black/10",children:[{question:"Do I need council approval for a backyard studio?",answer:"In most cases, yes — requirements vary by council and by the size and use of the structure. We manage the planning and approval process for you as part of every project."},{question:"How long does a typical build take?",answer:"Most backyard studios and granny flats are completed within 10–16 weeks of council approval, depending on size, finishes and site access."},{question:"Do you service my suburb?",answer:"We work across Melbourne's bayside and inner east, including Brighton, Bentleigh, Malvern, Kew, Mount Eliza, Sandringham, Frankston, St Kilda, Caulfield and Eltham — and most surrounding suburbs. Let us know your address and we'll confirm."},{question:"What's included in the free design consult?",answer:"A site visit, an initial concept discussion, and a clear outline of what's possible on your block — with no obligation to proceed."},{question:"Is there a warranty on the build?",answer:"Yes — every Backyard Nest project is backed by a 10-year structural warranty."},{question:"Can a backyard studio be used as a rental or Airbnb?",answer:"Depending on council zoning and your goals, some designs can support this. Raise it at your design consult and we'll factor it into the plan."}].map(l=>r.jsxs("details",{className:"group py-7",children:[r.jsxs("summary",{className:"flex justify-between items-center cursor-pointer list-none",children:[r.jsx("h3",{className:"font-serif text-2xl",children:l.question}),r.jsx("span",{className:"text-3xl text-[#8B5A3C] group-open:rotate-45 transition",children:"+"})]}),r.jsx("p",{className:"text-neutral-600 leading-8 mt-6 max-w-3xl",children:l.answer})]},l.question))})]})}),r.jsx("section",{className:"bg-[#1C1B19] py-28 text-white",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6",children:r.jsxs("div",{className:"grid lg:grid-cols-2 gap-20 items-center",children:[r.jsxs("div",{children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-xs text-[#CBBFA4] mb-5",children:"Ready When You Are"}),r.jsxs("h2",{className:"font-serif text-6xl leading-tight",children:["Claim your",r.jsxs("span",{className:"italic text-[#CBBFA4]",children:[" ","free consultation."]})]}),r.jsx("p",{className:"text-neutral-300 text-lg leading-9 mt-8",children:"No call centre, no pressure — just a straightforward conversation with the people who'll actually design and build your space."}),r.jsxs("div",{className:"space-y-5 mt-10",children:[r.jsxs("div",{className:"flex gap-4",children:["✓",r.jsx("span",{children:"Free, no-obligation design consult at your property"})]}),r.jsxs("div",{className:"flex gap-4",children:["✓",r.jsx("span",{children:"We manage council approval from start to finish"})]}),r.jsxs("div",{className:"flex gap-4",children:["✓",r.jsx("span",{children:"10-year structural warranty on every build"})]}),r.jsxs("div",{className:"flex gap-4",children:["✓",r.jsx("span",{children:"One team, one point of contact, start to handover"})]})]})]}),r.jsxs("div",{className:"bg-[#2B2925] p-10",children:[r.jsx("h3",{className:"font-serif text-3xl mb-8",children:"Send us your details"}),r.jsx(Kg,{})]})]})})})]})]})}const T5=[{icon:zx,title:"Information We Collect",content:r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"mb-4",children:"We may collect personal information including:"}),r.jsxs("ul",{className:"space-y-2 list-disc list-inside text-neutral-700",children:[r.jsx("li",{children:"Name"}),r.jsx("li",{children:"Email address"}),r.jsx("li",{children:"Phone number"}),r.jsx("li",{children:"Property address"}),r.jsx("li",{children:"Project enquiry details"}),r.jsx("li",{children:"Information you provide through forms or emails"}),r.jsx("li",{children:"Website usage data and device information"})]})]})},{icon:X2,title:"How We Use Your Information",content:r.jsxs("ul",{className:"space-y-2 list-disc list-inside text-neutral-700",children:[r.jsx("li",{children:"Respond to your enquiries"}),r.jsx("li",{children:"Arrange consultations and site visits"}),r.jsx("li",{children:"Prepare quotations"}),r.jsx("li",{children:"Improve our website and services"}),r.jsx("li",{children:"Communicate project updates"}),r.jsx("li",{children:"Meet legal obligations"})]})},{icon:K2,title:"Cookies & Analytics",content:r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"Backyard Nest uses cookies and analytics tools to understand website performance and improve your experience."}),r.jsxs("div",{className:"mt-4 rounded-lg bg-[#F8F5F2] p-4 border",children:[r.jsx("p",{className:"font-medium mb-2",children:"Services we may use:"}),r.jsxs("ul",{className:"space-y-1 list-disc list-inside",children:[r.jsx("li",{children:"Google Analytics"}),r.jsx("li",{children:"Google Ads Conversion Tracking"}),r.jsx("li",{children:"Meta Pixel"})]})]})]})},{icon:yj,title:"Keeping Your Information Secure",content:r.jsx("p",{children:"We implement appropriate technical and organisational safeguards to protect your personal information from unauthorised access, disclosure, alteration or destruction. While we use industry-standard security, no online transmission is ever completely secure."})},{icon:aj,title:"Sharing Information",content:r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"mb-3",children:"We do not sell your personal information."}),r.jsx("p",{children:"We may share information with trusted service providers who help us operate our website, manage enquiries, provide analytics, advertising, hosting or where required by Australian law."})]})},{icon:bj,title:"Contact Us",content:r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"mb-4",children:"If you have any questions regarding this Privacy Policy or wish to access or update your information, please contact us."}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("p",{children:r.jsx("strong",{children:"Backyard Nest"})}),r.jsx("p",{children:"Email: build@backyardnest.com.au"}),r.jsx("p",{children:"Phone: +61 466 333 438"}),r.jsx("p",{children:"Melbourne, Victoria, Australia"})]})]})}];function P5(){return r.jsxs(r.Fragment,{children:[r.jsx(Yt,{title:"Privacy Policy | Backyard Nest",description:"Learn how Backyard Nest collects, stores and protects your personal information.",url:"https://backyardnest.com.au/privacy-policy"}),r.jsxs("main",{className:"bg-[#FCFAF7] text-[#1C1B19]",children:[r.jsxs("section",{className:"relative overflow-hidden border-b border-neutral-200",children:[r.jsx("div",{className:"absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[length:28px_28px]"}),r.jsx("div",{className:"relative max-w-6xl mx-auto px-6 py-28",children:r.jsxs(oe.div,{initial:{opacity:0,y:35},animate:{opacity:1,y:0},transition:{duration:.7},children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-sm text-[#6E4630] mb-5",children:"Legal"}),r.jsx("h1",{className:"editorial-heading text-5xl md:text-7xl mb-8",children:"Privacy Policy"}),r.jsx("div",{className:"w-24 h-[2px] bg-[#6E4630] mb-8"}),r.jsx("p",{className:"text-lg text-neutral-600 max-w-3xl leading-relaxed",children:"Your privacy matters to us. This page explains how Backyard Nest collects, uses, stores and protects your personal information when you interact with our website or contact our team."})]})})]}),r.jsx("section",{className:"max-w-6xl mx-auto px-6 py-20",children:r.jsx("div",{className:"grid lg:grid-cols-2 gap-8",children:T5.map((e,n)=>{const i=e.icon;return r.jsxs(oe.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:n*.05},className:"bg-white rounded-2xl border border-neutral-200 p-8 hover:border-[#6E4630] hover:shadow-xl transition-all duration-300",children:[r.jsx("div",{className:"w-14 h-14 rounded-xl bg-[#F5F0EB] flex items-center justify-center mb-6",children:r.jsx(i,{size:28,className:"text-[#6E4630]"})}),r.jsx("h2",{className:"text-2xl font-semibold mb-6",children:e.title}),r.jsx("div",{className:"leading-8 text-neutral-700",children:e.content})]},e.title)})})}),r.jsx("section",{className:"bg-[#1C1B19] text-white",children:r.jsxs("div",{className:"max-w-5xl mx-auto px-6 py-20 text-center",children:[r.jsx(zx,{className:"mx-auto mb-6 text-[#C8A97E]",size:48}),r.jsx("h2",{className:"text-3xl editorial-heading mb-6",children:"Protecting Your Information"}),r.jsx("p",{className:"max-w-3xl mx-auto text-neutral-300 leading-8",children:"Backyard Nest is committed to handling your information responsibly and transparently. We regularly review our privacy practices to ensure they align with Australian privacy standards and industry best practices."})]})})]})]})}const Vu=[{id:1,title:"The Brighton",category:"Studio",location:"Brighton",size:"22m²",purpose:"Home Office",image:"/images/studio/studio1/studio1.1_mobile.webp",featured:!0},{id:2,title:"The Vista",category:"Studio",location:"Glen Waverley",size:"26m²",purpose:"Guest Retreat",image:"/images/studio/studio2/studio2.1_mobile.webp"},{id:3,title:"The Aspen",category:"Studio",location:"Camberwell",size:"20m²",purpose:"Creative Studio",image:"/images/studio/studio3/studio3.1_mobile.webp"},{id:4,title:"Modern Granny Flat",category:"Granny Flat",location:"Doncaster",size:"60m²",purpose:"Family Living",image:"/images/grannyflat/grannyflatexmp/granny_flats_hero.webp"},{id:5,title:"Luxury Backyard Studio",category:"Studio",location:"Toorak",size:"24m²",purpose:"Rental",image:"/images/studio/studio4/studio4.1_mobile.webp"},{id:6,title:"Premium Granny Flat",category:"Granny Flat",location:"Bentleigh",size:"70m²",purpose:"Investment",image:"/images/studio1.webp"}],_5=["All","Studio","Granny Flat"];function D5(){const[e,n]=j.useState("All"),[i,o]=j.useState(null),l=j.useMemo(()=>e==="All"?Vu:Vu.filter(h=>h.category===e),[e]),u=Vu.find(h=>h.featured);j.useEffect(()=>{if(!i)return;const h=m=>{const g=l.findIndex(x=>x.id===i.id);if(m.key==="Escape"&&o(null),m.key==="ArrowRight"){const x=l[(g+1)%l.length];o(x)}if(m.key==="ArrowLeft"){const x=l[(g-1+l.length)%l.length];o(x)}};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[i,l]);const d=Vt();return r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"relative h-screen overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:"url('/images/studio/studio4/studio4.3.webp')"}}),r.jsx("div",{className:"absolute inset-0 bg-black/45"}),r.jsx("div",{className:"relative z-10 h-full flex items-center",children:r.jsx("div",{className:"max-w-7xl mx-auto px-8 w-full",children:r.jsxs(oe.div,{initial:{opacity:0,y:60},animate:{opacity:1,y:0},transition:{duration:1},children:[r.jsx("p",{className:"uppercase tracking-[0.4em] text-[#C7A77A] text-sm",children:"OUR PROJECTS"}),r.jsxs("h1",{className:"editorial-heading text-white text-7xl md:text-8xl mt-6 leading-none",children:["Designed",r.jsx("br",{}),"For Modern",r.jsx("br",{}),"Australian Living."]}),r.jsx("div",{className:"w-32 h-[2px] bg-[#C7A77A] mt-10"}),r.jsx("p",{className:"mt-10 text-white/80 text-xl max-w-xl leading-relaxed",children:"Explore completed backyard studios and granny flats built throughout Melbourne."})]})})})]}),u&&r.jsx("section",{className:"bg-[#F5F0EB] py-28",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:r.jsxs(oe.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},children:[r.jsxs("div",{className:"mb-14",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-[#C7A77A] text-sm",children:"Featured Project"}),r.jsx("h2",{className:"editorial-heading text-[#2E2A26] text-5xl md:text-6xl mt-4",children:u.title})]}),r.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[r.jsx(oe.div,{whileHover:{scale:1.03},transition:{duration:.4},className:"overflow-hidden rounded-3xl shadow-2xl cursor-pointer",onClick:()=>o(u),children:r.jsx("img",{src:u.image,alt:u.title,className:"w-full h-[600px] object-cover transition duration-700 hover:scale-110"})}),r.jsxs("div",{children:[r.jsx("span",{className:"inline-flex px-4 py-2 rounded-full bg-[#C7A77A]/10 text-[#C7A77A] text-sm font-medium",children:"Featured Design"}),r.jsx("h3",{className:"text-4xl font-semibold text-[#2E2A26] mt-8",children:"Premium craftsmanship with timeless architecture."}),r.jsx("p",{className:"mt-8 text-[#5F5A55] leading-8 text-lg",children:"Every Backyard Nest project is individually designed to maximise natural light, functionality and seamless integration into your outdoor space. Built with premium Australian materials and exceptional attention to detail."}),r.jsxs("div",{className:"grid grid-cols-2 gap-8 mt-12",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-[#9C948C] uppercase text-xs tracking-widest",children:"Location"}),r.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[r.jsx(Qo,{size:18,className:"text-[#C7A77A]"}),r.jsx("span",{className:"text-[#2E2A26] font-medium",children:u.location})]})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[#9C948C] uppercase text-xs tracking-widest",children:"Size"}),r.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[r.jsx(us,{size:18,className:"text-[#C7A77A]"}),r.jsx("span",{className:"text-[#2E2A26] font-medium",children:u.size})]})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[#9C948C] uppercase text-xs tracking-widest",children:"Purpose"}),r.jsx("p",{className:"mt-2 text-[#2E2A26] font-medium",children:u.purpose})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[#9C948C] uppercase text-xs tracking-widest",children:"Category"}),r.jsx("p",{className:"mt-2 text-[#2E2A26] font-medium",children:u.category})]})]}),r.jsxs("button",{onClick:()=>o(u),className:`\r
    mt-14\r
    inline-flex\r
    items-center\r
    gap-3\r
    bg-[#2E2A26]\r
    text-white\r
    px-8\r
    py-4\r
    rounded-full\r
    font-medium\r
    cursor-pointer\r
    transition-all\r
    duration-300\r
    hover:bg-[#C7A77A]\r
    hover:text-[#2E2A26]\r
    hover:-translate-y-1\r
    hover:shadow-xl\r
    active:translate-y-0\r
  `,children:["View Project",r.jsx(on,{size:18,className:"transition-transform duration-300 group-hover:translate-x-1"})]})]})]})]})})}),r.jsx("section",{className:"sticky top-0 z-40 bg-[#F5F0EB]/95 backdrop-blur-md border-y border-[#E7DFD7]",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6",children:r.jsx("div",{className:"flex justify-center gap-5 py-6 overflow-x-auto",children:_5.map(h=>r.jsx("button",{onClick:()=>n(h),className:`px-7 py-3 rounded-full transition-all duration-300 whitespace-nowrap
                  ${e===h?"bg-[#2E2A26] text-white shadow-xl":"bg-white text-[#2E2A26] hover:bg-[#C7A77A] hover:text-white"}`,children:h},h))})})}),r.jsx("section",{className:"bg-[#F5F0EB] py-24",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-8",children:r.jsx(oe.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:r.jsx("div",{className:"columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8",children:l.map((h,m)=>r.jsx(oe.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:m*.08},className:"break-inside-avoid group cursor-pointer",onClick:()=>o(h),children:r.jsxs("div",{className:"relative overflow-hidden rounded-[30px] shadow-xl bg-white",children:[r.jsx("img",{src:h.image,alt:h.title,className:`
                        w-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110

                        ${m%3===0?"h-[520px]":m%2===0?"h-[380px]":"h-[460px]"}
                      `}),r.jsx("div",{className:`\r
                        absolute\r
                        inset-0\r
                        bg-gradient-to-t\r
                        from-black/70\r
                        via-black/10\r
                        to-transparent\r
                        opacity-0\r
                        group-hover:opacity-100\r
                        transition-all\r
                        duration-500\r
                      `}),r.jsx("div",{className:`\r
                        absolute\r
                        top-5\r
                        left-5\r
                        px-4\r
                        py-2\r
                        rounded-full\r
                        bg-white/90\r
                        backdrop-blur\r
                        text-sm\r
                        text-[#2E2A26]\r
                        font-medium\r
                      `,children:h.category}),r.jsxs("div",{className:`\r
                        absolute\r
                        bottom-0\r
                        left-0\r
                        right-0\r
                        p-8\r
                        translate-y-10\r
                        opacity-0\r
                        group-hover:translate-y-0\r
                        group-hover:opacity-100\r
                        transition-all\r
                        duration-500\r
                      `,children:[r.jsx("h3",{className:"text-white text-3xl font-semibold",children:h.title}),r.jsxs("div",{className:"flex items-center gap-2 mt-4 text-white/80",children:[r.jsx(Qo,{size:16}),h.location]}),r.jsxs("div",{className:"flex justify-between mt-8",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-white/60 text-xs uppercase tracking-widest",children:"Size"}),r.jsx("p",{className:"text-white mt-2",children:h.size})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-white/60 text-xs uppercase tracking-widest",children:"Purpose"}),r.jsx("p",{className:"text-white mt-2",children:h.purpose})]})]})]})]})},h.id))})})})}),i&&r.jsxs("div",{className:"fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center",children:[r.jsx("button",{onClick:()=>o(null),className:"absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center",children:r.jsx(Ox,{className:"text-white",size:26})}),r.jsx("button",{onClick:()=>{const h=l.findIndex(g=>g.id===i.id),m=l[(h-1+l.length)%l.length];o(m)},className:"absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center",children:r.jsx($2,{className:"text-white"})}),r.jsx("button",{onClick:()=>{const h=l.findIndex(g=>g.id===i.id),m=l[(h+1)%l.length];o(m)},className:"absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center",children:r.jsx(Lx,{className:"text-white"})}),r.jsxs("div",{className:"max-w-7xl w-full grid lg:grid-cols-3 gap-10 px-10 items-center",children:[r.jsx("div",{className:"lg:col-span-2",children:r.jsx(oe.img,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4},src:i.image,alt:i.title,className:"rounded-3xl max-h-[80vh] w-full object-cover shadow-2xl"},i.id)}),r.jsxs("div",{className:"text-white",children:[r.jsx("p",{className:"uppercase tracking-[0.35em] text-[#C7A77A] text-xs",children:"PROJECT"}),r.jsx("h2",{className:"editorial-heading text-5xl mt-5",children:i.title}),r.jsxs("div",{className:"space-y-8 mt-12",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-white/50 uppercase text-xs tracking-widest",children:"Location"}),r.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[r.jsx(Qo,{size:18,className:"text-[#C7A77A]"}),i.location]})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-white/50 uppercase text-xs tracking-widest",children:"Size"}),r.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[r.jsx(us,{size:18,className:"text-[#C7A77A]"}),i.size]})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-white/50 uppercase text-xs tracking-widest",children:"Purpose"}),r.jsx("p",{className:"mt-2",children:i.purpose})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-white/50 uppercase text-xs tracking-widest",children:"Category"}),r.jsx("p",{className:"mt-2",children:i.category})]})]}),r.jsx("button",{type:"button",onClick:()=>d("/contact",{state:{project:i==null?void 0:i.title}}),className:`\r
    mt-16\r
    w-full\r
    bg-[#C7A77A]\r
    text-[#2E2A26]\r
    py-4\r
    rounded-full\r
    font-medium\r
    cursor-pointer\r
    transition-all\r
    duration-300\r
    hover:bg-white\r
    hover:-translate-y-1\r
    hover:shadow-2xl\r
    active:translate-y-0\r
  `,children:"Request Similar Design"})]})]}),r.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 overflow-auto max-w-5xl px-4",children:l.map(h=>r.jsx("button",{onClick:()=>o(h),className:`
rounded-xl
overflow-hidden
border-2
transition

${i.id===h.id?"border-[#C7A77A] scale-110":"border-transparent opacity-60 hover:opacity-100"}
`,children:r.jsx("img",{src:h.image,alt:h.title,className:"w-24 h-16 object-cover"})},h.id))})]}),r.jsx("section",{className:"bg-white py-28",children:r.jsx("div",{className:"max-w-7xl mx-auto px-6",children:r.jsx(oe.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8},className:"grid md:grid-cols-4 gap-12 text-center",children:[{number:"250+",title:"Projects Completed"},{number:"15+",title:"Years Experience"},{number:"98%",title:"Client Satisfaction"},{number:"Melbourne",title:"Servicing Metro Areas"}].map(h=>r.jsxs(oe.div,{whileHover:{y:-10},transition:{duration:.25},children:[r.jsx("h2",{className:"editorial-heading text-6xl text-[#2E2A26]",children:h.number}),r.jsx("p",{className:"mt-4 uppercase tracking-[0.2em] text-sm text-[#7A746D]",children:h.title})]},h.title))})})}),r.jsxs("section",{className:"relative overflow-hidden bg-[#2E2A26]",children:[r.jsxs("div",{className:"absolute inset-0",children:[r.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C7A77A]/10 blur-3xl"}),r.jsx("div",{className:"absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#C7A77A]/10 blur-3xl"})]}),r.jsx("div",{className:"relative max-w-6xl mx-auto px-6 py-36 text-center",children:r.jsxs(oe.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[r.jsx("p",{className:"uppercase tracking-[0.4em] text-[#C7A77A] text-xs",children:"Let's Build Yours"}),r.jsxs("h2",{className:"editorial-heading text-white text-6xl md:text-7xl mt-8 leading-tight",children:["Inspired By",r.jsx("br",{}),"These Projects?"]}),r.jsx("p",{className:"text-white/70 text-xl max-w-3xl mx-auto mt-10 leading-8",children:"Whether you're planning a backyard studio, granny flat or custom-designed retreat, our team is ready to bring your vision to life."}),r.jsxs("div",{className:"flex flex-wrap justify-center gap-6 mt-16",children:[r.jsx("a",{href:"/contact",className:`\r
                  px-10\r
                  py-5\r
                  rounded-full\r
                  bg-[#C7A77A]\r
                  text-[#2E2A26]\r
                  font-semibold\r
                  hover:bg-white\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-1\r
                `,children:"Request Consultation"}),r.jsx("a",{href:"/products",className:`\r
    inline-flex\r
    items-center\r
    justify-center\r
    px-10\r
    py-5\r
    rounded-full\r
    border-2\r
    border-white\r
    bg-transparent\r
    text-white \r
    font-medium\r
    transition-all\r
    duration-300\r
    hover:bg-white\r
    hover:!text-[#2E2A26]\r
    hover:border-white\r
  `,style:{color:"#fff"},children:"Explore Designs"})]})]})})]})]})}function F5(){const e=[{id:"default",name:"Classic",subtitle:"Natural timber accents with a timeless Australian character",color:"#FCEFD6",image:"/images/grannyflat/yara/yarra_38/yarra_38_2.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"Deep contemporary cladding for a modern architectural finish",color:"#2B2B2B",image:"/images/grannyflat/yara/yarra_38/yarra_38_2.webp"},{id:"timber",name:"Natural Timber",subtitle:"Warm timber tones for an organic Australian feel",color:"#C8A46B",image:"/images/grannyflat/yara/yarra_38/yarra_38_2.webp"},{id:"navy",name:"Navy Blue",subtitle:"A refined contemporary exterior finish",color:"#6B7280",image:"/images/grannyflat/yara/yarra_38/yarra_38_2.webp"},{id:"sage",name:"Sage White",subtitle:"A soft contemporary finish with a light character",color:"#E5E5E5",image:"/images/grannyflat/yara/yarra_38/yarra_38_2.webp"}],n=[{main:"/images/grannyflat/yara/yarra_38/yarra_38_1.webp",thumb:"/images/grannyflat/yara/yarra_38/yarra_38_1.webp",label:"Exterior"},{main:"/images/grannyflat/yara/yarra_38/yarra_38_int.webp",thumb:"/images/grannyflat/yara/yarra_38/yarra_38_int.webp",label:"Interior"},{main:"/images/grannyflat/yara/yarra_38/yarra_38_floorplan.webp",thumb:"/images/grannyflat/yara/yarra_38/yarra_38_floorplan.webp",label:"Floor Plan"}];return r.jsx(da,{category:"Granny Flat",title:"The Yarra",highlight:"38",size:"38 m²",beds:"1",baths:"1",warranty:"10 Year",description:"The Yarra 38 is a thoughtfully designed one-bedroom granny flat that makes the most of a compact footprint. With generous glazing, natural light and a strong connection to the backyard, it provides a comfortable and flexible space for modern Australian living.",heroImage:"/images/grannyflat/yara/yarra_38/yarra_38_2.webp",mobileHeroImage:"/images/grannyflat/yara/yarra_38/yarra_38_mobile.webp",floorplan:"/images/grannyflat/yara/yarra_38/yarra_38_floorplan.webp",seoTitle:"The Yarra 38m² | Contemporary Granny Flat Melbourne",seoDescription:"Explore The Yarra 38m² by Backyard Nest, a thoughtfully designed one-bedroom granny flat with generous glazing, natural light and a strong connection to the backyard.",seoUrl:"https://backyardnest.com.au/products/TheYarra38",seoImage:"/images/grannyflat/yara/yarra_38/yarra_38_2.webp",finishes:e,galleryImages:n,relatedProducts:r.jsx(As,{currentId:"yarra-38"}),designInspiration:r.jsx(zn,{title:r.jsxs(r.Fragment,{children:["Designed For",r.jsx("br",{}),"Modern Australian",r.jsx("br",{}),"Living."]}),subtitle:"The Yarra 38 | Contemporary Australian Granny Flat",intro:"Compact by design. Comfortable by nature.",paragraphs:["The Yarra 38 is a contemporary Australian granny flat designed for homeowners looking to create more usable space in their backyard.","With a compact 38m² footprint, The Yarra makes efficient use of space while maintaining a comfortable and welcoming living environment.","Generous glazing, natural light and a strong connection to the backyard create a light-filled space for modern Australian living.","Whether used for independent living, guest accommodation, a private retreat or additional backyard living, The Yarra 38 is designed to adapt to modern Australian lifestyles."],features:["38m² configuration","Contemporary Australian design","One-bedroom layout","Private bathroom","Natural timber accents","Generous glazing","Abundant natural light","Energy-efficient design","Flexible living spaces","Strong indoor-outdoor connection","Suitable for independent living","Ideal for guest accommodation","Designed for Melbourne and Victorian homes"],outro:"The Yarra 38 transforms an underused backyard into a beautiful and functional space to live, welcome, work and unwind."})})}function M5(){const e=[{id:"default",name:"Classic",subtitle:"A refined neutral exterior with warm timber accents",color:"#FCEFD6",image:"/images/grannyflat/palmview/palmview_38/palmview_38_2.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"Deep contemporary cladding for a modern architectural finish",color:"#2B2B2B",image:"/images/grannyflat/palmview/palmview_38/palmview_38_2.webp"},{id:"timber",name:"Natural Timber",subtitle:"Warm timber tones for an organic Australian feel",color:"#C8A46B",image:"/images/grannyflat/palmview/palmview_38/palmview_38_2.webp"},{id:"navy",name:"Navy Blue",subtitle:"A refined contemporary exterior finish",color:"#6B7280",image:"/images/grannyflat/palmview/palmview_38/palmview_38_2.webp"},{id:"sage",name:"Sage White",subtitle:"A soft contemporary finish with a light character",color:"#E5E5E5",image:"/images/grannyflat/palmview/palmview_38/palmview_38_2.webp"}],n=[{main:"/images/grannyflat/palmview/palmview_38/palmview_38_1.webp",thumb:"/images/grannyflat/palmview/palmview_38/palmview_38_1.webp",label:"Exterior"},{main:"/images/grannyflat/palmview/palmview_38/palmview_38_int.webp",thumb:"/images/grannyflat/palmview/palmview_38/palmview_38_int.webp",label:"Interior"},{main:"/images/grannyflat/palmview/palmview_38/palmview_38_floorplan.webp",thumb:"/images/grannyflat/palmview/palmview_38/palmview_38_floorplan.webp",label:"Floor Plan"}];return r.jsx(da,{category:"Granny Flat",title:"The Palmview",highlight:"38",size:"38 m²",beds:"1",baths:"1",warranty:"10 Year",description:"The Palmview 38 is a thoughtfully designed 38m² backyard home that brings together modern comfort, smart design and effortless indoor-outdoor living. Generous glazing, an open and welcoming interior, a dedicated bedroom, practical living spaces and a private outdoor deck make every square metre count.",heroImage:"/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",mobileHeroImage:"/images/grannyflat/palmview/palmview_38/palmview_38_mobile.webp",floorplan:"/images/grannyflat/palmview/palmview_38/palmview_38_floorplan.webp",seoTitle:"The Palmview 38m² | Contemporary Granny Flat Melbourne",seoDescription:"Explore The Palmview 38m² by Backyard Nest, a thoughtfully designed backyard home combining modern comfort, smart design, generous glazing and effortless indoor-outdoor living.",seoUrl:"https://backyardnest.com.au/products/ThePalmview38",seoImage:"/images/grannyflat/palmview/palmview_38/palmview_38_2.webp",finishes:e,galleryImages:n,relatedProducts:r.jsx(As,{currentId:"palmview-38"}),designInspiration:r.jsx(zn,{title:r.jsxs(r.Fragment,{children:["Designed For",r.jsx("br",{}),"Modern Australian",r.jsx("br",{}),"Living."]}),subtitle:"The Palmview 38 | Contemporary Australian Granny Flat",intro:"Compact living. Effortless connection.",paragraphs:["The Palmview 38 is a contemporary backyard home designed to make every square metre count.","With a thoughtfully planned 38m² footprint, the design combines practical living spaces with a comfortable bedroom and private bathroom.","Generous glazing brings natural light into the interior while creating a strong connection between the home and the surrounding backyard.","A private outdoor deck extends the living space and provides an inviting area to relax, entertain or enjoy the outdoors."],features:["38m² configuration","Contemporary Australian design","One-bedroom layout","Private bathroom","Practical living spaces","Generous glazing","Abundant natural light","Private outdoor deck","Indoor-outdoor connection","Efficient use of space","Modern backyard living","Suitable for independent living","Ideal for guest accommodation","Designed for Melbourne and Victorian homes"],outro:"The Palmview 38 transforms a compact backyard footprint into a comfortable and functional space designed for modern Australian living."})})}function R5(){const e=[{id:"default",name:"Classic",subtitle:"Natural timber accents with a timeless Australian character",color:"#FCEFD6",image:"/images/grannyflat/yara/yarra_44/yarra_44_1.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"Deep contemporary cladding for a modern architectural finish",color:"#2B2B2B",image:"/images/grannyflat/yara/yarra_44/yarra_44_1.webp"},{id:"timber",name:"Natural Timber",subtitle:"Warm timber tones for an organic Australian feel",color:"#C8A46B",image:"/images/grannyflat/yara/yarra_44/yarra_44_1.webp"},{id:"navy",name:"Navy Blue",subtitle:"A refined contemporary exterior finish",color:"#6B7280",image:"/images/grannyflat/yara/yarra_44/yarra_44_1.webp"},{id:"sage",name:"Sage White",subtitle:"A soft contemporary finish with a light character",color:"#E5E5E5",image:"/images/grannyflat/yara/yarra_44/yarra_44_1.webp"}],n=[{main:"/images/grannyflat/yara/yarra_44/yarra_44_1.webp",thumb:"/images/grannyflat/yara/yarra_44/yarra_44_1.webp",label:"Exterior"},{main:"/images/grannyflat/yara/yarra_44/yarra_44_int_1.webp",thumb:"/images/grannyflat/yara/yarra_44/yarra_44_int_1.webp",label:"Interior"},{main:"/images/grannyflat/yara/yarra_44/yarra_44_int_2.webp",thumb:"/images/grannyflat/yara/yarra_44/yarra_44_int_2.webp",label:"Interior"},{main:"/images/grannyflat/yara/yarra_44/yarra_44_floorplan.webp",thumb:"/images/grannyflat/yara/yarra_44/yarra_44_floorplan.webp",label:"Floor Plan"}];return r.jsx(da,{category:"Granny Flat",title:"The Yarra",highlight:"44",size:"44 m²",beds:"1",baths:"1",warranty:"10 Year",description:"The Yarra 44 provides additional space for comfortable everyday living while maintaining the clean architectural lines, natural timber accents and generous glazing that define the design.",heroImage:"/images/grannyflat/yara/yarra_44/yarra_44_1.webp",mobileHeroImage:"/images/grannyflat/yara/yarra_44/yarra_44_mobile.webp",floorplan:"/images/grannyflat/yara/yarra_44/yarra_44_floorplan.webp",seoTitle:"The Yarra 44m² | Contemporary Granny Flat Melbourne",seoDescription:"Explore The Yarra 44m² by Backyard Nest, a contemporary one-bedroom granny flat offering additional living space, generous glazing, natural timber accents and a strong connection to the backyard.",seoUrl:"https://backyardnest.com.au/products/TheYarra44",seoImage:"/images/grannyflat/yara/yarra_44/yarra_44_1.webp",finishes:e,galleryImages:n,relatedProducts:r.jsx(As,{currentId:"yarra-44"}),designInspiration:r.jsx(zn,{title:r.jsxs(r.Fragment,{children:["Designed For",r.jsx("br",{}),"Modern Australian",r.jsx("br",{}),"Living."]}),subtitle:"The Yarra 44 | Contemporary Australian Granny Flat",intro:"More space. Same considered design.",paragraphs:["The Yarra 44 is a contemporary Australian granny flat designed to provide comfortable additional space while maintaining a compact backyard footprint.","With 44m² of thoughtfully planned living space, The Yarra provides room for everyday living without compromising on the clean architectural character of the design.","Generous glazing, natural light and warm timber accents create a welcoming interior with a strong connection to the surrounding backyard.","Whether used for independent living, guest accommodation, a private retreat or additional backyard living, The Yarra 44 is designed to support modern Australian lifestyles."],features:["44m² configuration","Contemporary Australian design","One-bedroom layout","Private bathroom","Natural timber accents","Generous glazing","Abundant natural light","Energy-efficient design","Flexible living spaces","Strong indoor-outdoor connection","Comfortable everyday living","Suitable for independent living","Ideal for guest accommodation","Designed for Melbourne and Victorian homes"],outro:"The Yarra 44 creates a refined and functional backyard space designed for modern living, relaxing and welcoming guests."})})}function B5(){const e=[{id:"default",name:"Classic",subtitle:"A refined neutral exterior with warm timber accents",color:"#FCEFD6",image:"/images/grannyflat/palmview/palmview_44/palmview_44_2.webp"},{id:"charcoal",name:"Charcoal Cedar",subtitle:"Deep contemporary cladding for a modern architectural finish",color:"#2B2B2B",image:"/images/grannyflat/palmview/palmview_44/palmview_44_2.webp"},{id:"timber",name:"Natural Timber",subtitle:"Warm timber tones for an organic Australian feel",color:"#C8A46B",image:"/images/grannyflat/palmview/palmview_44/palmview_44_2.webp"},{id:"navy",name:"Navy Blue",subtitle:"A refined contemporary exterior finish",color:"#6B7280",image:"/images/grannyflat/palmview/palmview_44/palmview_44_2.webp"},{id:"sage",name:"Sage White",subtitle:"A soft contemporary finish with a light character",color:"#E5E5E5",image:"/images/grannyflat/palmview/palmview_44/palmview_44_2.webp"}],n=[{main:"/images/grannyflat/palmview/palmview_44/palmview_44_1.webp",thumb:"/images/grannyflat/palmview/palmview_44/palmview_44_1.webp",label:"Exterior"},{main:"/images/grannyflat/palmview/palmview_44/palmview_44_int_1.webp",thumb:"/images/grannyflat/palmview/palmview_44/palmview_44_int_1.webp",label:"Interior"},{main:"/images/grannyflat/palmview/palmview_44/palmview_44_int_2.webp",thumb:"/images/grannyflat/palmview/palmview_44/palmview_44_int_2.webp",label:"Interior"},{main:"/images/grannyflat/palmview/palmview_44/palmview_44_floorplan.webp",thumb:"/images/grannyflat/palmview/palmview_44/palmview_44_floorplan.webp",label:"Floor Plan"}];return r.jsx(da,{category:"Granny Flat",title:"The Palmview",highlight:"44",size:"44 m²",beds:"1",baths:"1",warranty:"10 Year",description:"The Palmview 44 is a contemporary 44m² backyard studio and granny flat designed for modern Australian homes. Clean architectural lines, generous glazing, warm timber accents and a refined neutral facade bring together style, functionality and everyday comfort in a compact backyard solution.",heroImage:"/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",mobileHeroImage:"/images/grannyflat/palmview/palmview_44/palmview_44_mobile.webp",floorplan:"/images/grannyflat/palmview/palmview_44/palmview_44_floorplan.webp",seoTitle:"The Palmview 44m² | Contemporary Granny Flat Melbourne",seoDescription:"Explore The Palmview 44m² by Backyard Nest, a contemporary backyard studio and granny flat combining clean architectural lines, generous glazing, warm timber accents and everyday comfort.",seoUrl:"https://backyardnest.com.au/products/ThePalmview44",seoImage:"/images/grannyflat/palmview/palmview_44/palmview_44_2.webp",finishes:e,galleryImages:n,relatedProducts:r.jsx(As,{currentId:"palmview-44"}),designInspiration:r.jsx(zn,{title:r.jsxs(r.Fragment,{children:["Designed For",r.jsx("br",{}),"Modern Australian",r.jsx("br",{}),"Living."]}),subtitle:"The Palmview 44 | Contemporary Australian Granny Flat",intro:"More space. Refined backyard living.",paragraphs:["The Palmview 44 is a contemporary backyard home designed for modern Australian homes, combining practical living with a refined architectural character.","With a 44m² footprint, the design provides additional space while maintaining an efficient and compact backyard solution.","Clean architectural lines, generous glazing and warm timber accents create a welcoming home filled with natural light.","The Palmview 44 provides a flexible space that can be used for independent living, guest accommodation, a private retreat or additional backyard living."],features:["44m² configuration","Contemporary Australian design","One-bedroom layout","Private bathroom","Clean architectural lines","Warm timber accents","Generous glazing","Abundant natural light","Flexible living spaces","Strong indoor-outdoor connection","Modern backyard living","Suitable for independent living","Ideal for guest accommodation","Designed for Melbourne and Victorian homes"],outro:"The Palmview 44 brings together style, functionality and everyday comfort to create a refined backyard space for modern Australian living."})})}const L5=c2([{path:"/",Component:Xj,children:[{index:!0,Component:QE},{path:"products",Component:n5},{path:"faq",Component:r5},{path:"contact",Component:a5},{path:"about",Component:i5},{path:"blog",Component:l5},{path:"blog/:slug",Component:c5},{path:"products/studio",Component:d5},{path:"products/granny",Component:h5},{path:"booking",Component:m5},{path:"thank-you",Component:C5},{path:"coming-soon",Component:p5},{path:"landingPage",Component:Qg},{path:"landingpage",Component:Qg},{path:"privacy-policy",Component:P5},{path:"projects",Component:D5},{path:"products/TheVista",Component:g5},{path:"products/TheBrighton",Component:x5},{path:"products/TheAspen",Component:y5},{path:"products/TheNest",Component:v5},{path:"products/CustomDesign",Component:b5},{path:"products/TheWattle",Component:j5},{path:"products/TheYarra38",Component:F5},{path:"products/TheYarra44",Component:R5},{path:"products/ThePalmview38",Component:M5},{path:"products/ThePalmview44",Component:B5},{path:"products/TheHaven",Component:N5},{path:"products/BespokeDesign",Component:k5},{path:"*",Component:u5}]}]);function I5(){return r.jsx(j2,{router:L5})}vb.createRoot(document.getElementById("root")).render(r.jsx(ax,{children:r.jsx(I5,{})}));

/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){"Escape"===t.key&&u(document.querySelector(".popup_opened"))}function r(t){t.target.closest(".popup__form-container")||u(t.target)}t.d({},{y4:()=>G,lx:()=>w,OP:()=>L,p4:()=>B,oc:()=>P,pF:()=>E,vi:()=>I,kH:()=>K,TN:()=>U,xS:()=>_});var n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_invalid",errorClass:"popup__input-error-message_active"};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function d(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new q(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var h={};function p(){}function v(){}function y(){}var m={};s(m,c,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(C([])));g&&g!==e&&r.call(g,c)&&(m=g);var _=y.prototype=p.prototype=Object.create(m);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function i(n,a,c,u){var l=f(t[n],t,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==o(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):e.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return i("throw",t,c,u)}))}u(l.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function C(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return v.prototype=y,n(_,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},S(w.prototype),s(w.prototype,u,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(d(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(_),s(_,l,"Generator"),s(_,c,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){document.addEventListener("keydown",e),t.addEventListener("mousedown",r),t.classList.add("popup_opened")}function u(t){return l.apply(this,arguments)}function l(){var t;return t=i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.removeEventListener("keydown",e),t.next=3,n.removeEventListener("mousedown",r);case 3:return t.next=5,n.classList.remove("popup_opened");case 5:case"end":return t.stop()}}),t)})),l=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))},l.apply(this,arguments)}var s={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-7",headers:{authorization:"07cc07a4-5c32-4ed0-9b36-766ec01ebafc","Content-Type":"application/json"}};function d(t){return t.ok?t.json():Promise.reject(t.status)}function f(t){console.error("Ошибка: ".concat(t))}function h(t){var e=function(t){var e=L.querySelector(".card__item").cloneNode(!0),r=e.querySelector(".card__delete-button"),n=e.querySelector(".card__item-like-button"),o=t.likes,i=e.querySelector(".card__like-counter"),a=e.querySelector(".card__item-image");e.querySelector(".card__item-title").textContent=t.name,a.alt=t.name,a.src=t.link,e.id=t._id;var u,l,h=e.id;return t.owner._id!==_&&r.remove(),o.length>0&&(i.textContent=o.length),function(t,e){return t.find((function(t){return t._id===e}))}(o,_)&&n.classList.add("card__item-like-button_active"),n.addEventListener("click",(function(){n.classList.contains("card__item-like-button_active")?function(t,e,r){return(n=e,fetch("".concat(s.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:s.headers}).then(d)).then((function(e){0===e.likes.length?r.textContent="":r.textContent=e.likes.length,t.classList.remove("card__item-like-button_active")})).catch(f);var n}(n,h,i):function(t,e,r){return(n=e,fetch("".concat(s.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:s.headers}).then(d)).then((function(e){r.textContent=e.likes.length,t.classList.add("card__item-like-button_active")})).catch(f);var n}(n,h,i)})),function(t,e){e.addEventListener("click",(function(){var r;(r=t.id,fetch("".concat(s.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:s.headers}).then(d)).then((function(){t.closest(".card__item").remove()})).catch(f),e.removeAttribute("disabled","")}))}(e,r),u=t.name,l=t.link,a.addEventListener("click",(function(){E.textContent=u,I.alt=u,I.src=l,c(G)})),e}(t);w.prepend(e)}function p(t,e,r,n){var o=e.querySelector("#".concat(t.id,"-error"));o.textContent=r,t.classList.add(n.inputErrorClass),o.classList.add(n.errorClass)}function v(t,e,r){var n=e.querySelector("#".concat(t.id,"-error"));n.textContent="",t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass)}function y(t,e,r){if(t.validity.valid)return t.onblur=function(){t.setAttribute("data-used","true")},void v(t,e,r);"true"!==t.dataset.used?t.onblur=function(){t.setAttribute("data-used","true"),p(t,e,t.validationMessage,r)}:p(t,e,t.validationMessage,r)}function m(t,e){t.reset(),Array.from(t.querySelectorAll(e.inputSelector)).forEach((function(r){v(r,t,e),r.removeAttribute("data-used")}))}function b(t,e,r){!function(t,e){return Array.from(t.querySelectorAll(e.inputSelector)).some((function(r){return y(r,t,e),!r.validity.valid}))}(t,r)?(e.classList.remove(r.inactiveButtonClass),e.removeAttribute("disabled","")):(e.classList.add(r.inactiveButtonClass),e.setAttribute("disabled",""))}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var _,S,w=document.querySelector(".card__items"),L=document.querySelector("#card-template").content,E=document.querySelector(".popup__image-tittle"),x=document.querySelector("#typeEdit"),k=document.querySelector(".profile__title"),q=document.querySelector(".profile__subtitle"),C=document.querySelector("#editButton"),A=document.querySelector("#profileForm"),O=A.querySelector("#profileName"),j=A.querySelector("#profileAbout"),P=document.querySelector("#newCard"),T=document.querySelector("#addButton"),N=document.querySelector("#addPlace"),U=document.querySelector("#newCardTitle"),B=document.querySelector("#newCardLink"),G=document.querySelector("#bigImage"),I=document.querySelector(".popup__image-full"),D=document.querySelectorAll(".popup__close"),F=document.querySelector("#newLocationbtnSave"),H=document.querySelector("#updateAvatar"),J=document.querySelector(".profile__avatar-edit"),M=document.querySelector("#updateAvatarButton"),Y=document.forms.formUpdateAvatar,z=document.querySelector("#updateAvatarInput"),$=document.querySelector(".profile__avatar");function K(t,e){if(t)return e.textContent="Сохранение...",void e.setAttribute("disabled","");e.textContent="Сохранить",e.classList.add(n.disabledBtnClass),e.removeAttribute("disabled","")}Promise.all([fetch("".concat(s.baseUrl,"/cards"),{headers:s.headers}).then(d),fetch("".concat(s.baseUrl,"/users/me"),{headers:s.headers}).then(d)]).then((function(t){var e,r,n,o=(n=2,function(t){if(Array.isArray(t))return t}(r=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(r,n)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];e=a,k.textContent=e.name,q.textContent=e.about,$.src=e.avatar,_=a._id,Array.from(i).reverse().forEach(h)})).catch(f),D.forEach((function(t){t.addEventListener("click",(function(){u(t.closest(".popup"))}))})),C.addEventListener("click",(function(){return m(A,n),c(x),O.value=k.textContent,void(j.value=q.textContent)})),N.addEventListener("submit",(function(t){t.preventDefault();var e,r,n=t.submitter;K(!0,n),(e=U.value,r=B.value,fetch("".concat(s.baseUrl,"/cards"),{method:"POST",headers:s.headers,body:JSON.stringify({name:e,link:r})}).then(d)).then((function(e){h(e),t.target.reset(),u(P)})).catch((function(){f(),t.submitter.classList.add(validationData.disabledBtnClass),n.setAttrubute("disabled","")})).finally((function(){K(!1,n)}))})),T.addEventListener("click",(function(){return m(N,n),c(P),void b(N,F,n)})),A.addEventListener("submit",(function(t){t.preventDefault();var e,r,n=t.submitter;K(!0,n),(e=O.value,r=j.value,fetch("".concat(s.baseUrl,"/users/me"),{method:"PATCH",headers:s.headers,body:JSON.stringify({name:e,about:r})}).then(d)).then((function(e){k.textContent=e.name,q.textContent=e.about,t.target.reset(),u(x)})).catch((function(t){console.log(t)})).finally((function(){K(!1,n)}))})),J.addEventListener("click",(function(){return m(Y,n),c(H),void b(Y,M,n)})),Y.addEventListener("submit",(function(t){t.preventDefault();var e,r=t.submitter;K(!0,r),(e=z.value,fetch("".concat(s.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:s.headers,body:JSON.stringify({avatar:e})}).then(d)).then((function(e){$.src=e.avatar,t.target.reset(),u(H)})).catch(f).finally((function(){K(!1,r)}))})),S=n,Array.from(document.querySelectorAll(S.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault(),m(t,S)})),function(t,e){var r=t.querySelector(e.submitButtonSelector);b(t,r,e),t.addEventListener("input",(function(n){y(n.target,t,e),b(t,r,e)}))}(t,S)}))})();
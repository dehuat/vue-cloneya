parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({1:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};const e=exports.createCloneYa=((e={})=>{const a=function(){let t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",e="";for(let a=0;a<8;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},n=function(t,e,a){for(let n=0;n<t.length;n++)if(t[n][e]===a)return!0;return!1};return{name:e.name||"VueCloneya",props:{minimum:{default:1},maximum:{default:999},value:{default:null,type:Array}},data:()=>({renderData:[]}),mounted(){this.value&&this.fillWithValues(),this.fillToMin()},render:function(e){let a=this,r=a.$slots.default;if(!r||r.length>1)return void console.error("VueCloneya default slot should contain exactly one root element.");const i=function(e,r,i){return e.map(e=>(function e(l){let s=t({},l.data);if(l.data&&l.data.hasOwnProperty("directives")){let e=n(l.data.directives,"name","cloneya-add-btn"),i=n(l.data.directives,"name","cloneya-remove-btn"),o=n(l.data.directives,"name","cloneya-input");if(e&&(s.on={click:a.add}),i&&(s.attrs=t({},s.attrs,{index:r.index}),s.on={click:a.del}),o&&r.el.hasOwnProperty("value"))s.attrs=t({},s.attrs,{value:r.el.value});else if(o&&s.attrs.hasOwnProperty("value")){let e=t({},s.attrs);delete e.value,s.attrs=t({},e)}}l.data=s;const o=l.children&&l.children.map(t=>e(t)),d=i(l.tag,l.data,o);return d.text=l.text,d.isComment=l.isComment,d.componentOptions=l.componentOptions,d.elm=l.elm,d.context=l.context,d.ns=l.ns,d.isStatic=l.isStatic,d.key=l.key,d})(e))};return e("div",{class:{"clone-wrapper":!0}},this.renderData.map(function(t,a){let n=i(r,{el:t,index:a},e);return e("div",{key:t._hash,class:{toClone:!0}},[n])}))},methods:{add(){this.renderData.length!==this.maximum&&this.renderData.push({_hash:a()})},del(t){let e=t.currentTarget.attributes.index.value;if(this.renderData.length===this.minimum)return this.$set(this.renderData,e,{_hash:a()});this.renderData.splice(e,1)},fillToMin(){let t=this.minimum-this.renderData.length;for(let e=0;e<t;e++)this.renderData.push({_hash:a()})},fillWithValues(){this.value.map(t=>this.renderData.push({_hash:a(),value:t}))}},watch:{value:function(){this.renderData=[],this.fillWithValues()}}}}),a=exports.install=((t,a)=>{const n=e(a);t.component(n.name,n),t.directive("cloneyaInput",function(t){t.classList.add("vcloneya")}),t.directive("cloneyaAddBtn",function(t){t.classList.add("vcloneya-add-btn")}),t.directive("cloneyaRemoveBtn",function(t){t.classList.add("vcloneya-remove-btn")})});exports.default=a;
},{}]},{},[1], null)
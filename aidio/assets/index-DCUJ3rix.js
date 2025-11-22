(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))d(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function i(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(c){if(c.ep)return;c.ep=!0;const o=i(c);fetch(c.href,o)}})();const nr=globalThis,Wr=nr.ShadowRoot&&(nr.ShadyCSS===void 0||nr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zr=Symbol(),Ti=new WeakMap;let Yi=class{constructor(r,i,d){if(this._$cssResult$=!0,d!==Zr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=i}get styleSheet(){let r=this.o;const i=this.t;if(Wr&&r===void 0){const d=i!==void 0&&i.length===1;d&&(r=Ti.get(i)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),d&&Ti.set(i,r))}return r}toString(){return this.cssText}};const La=$=>new Yi(typeof $=="string"?$:$+"",void 0,Zr),dn=($,...r)=>{const i=$.length===1?$[0]:r.reduce(((d,c,o)=>d+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(c)+$[o+1]),$[0]);return new Yi(i,$,Zr)},Ua=($,r)=>{if(Wr)$.adoptedStyleSheets=r.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet));else for(const i of r){const d=document.createElement("style"),c=nr.litNonce;c!==void 0&&d.setAttribute("nonce",c),d.textContent=i.cssText,$.appendChild(d)}},$i=Wr?$=>$:$=>$ instanceof CSSStyleSheet?(r=>{let i="";for(const d of r.cssRules)i+=d.cssText;return La(i)})($):$;const{is:Ka,defineProperty:qa,getOwnPropertyDescriptor:Wa,getOwnPropertyNames:Za,getOwnPropertySymbols:Ha,getPrototypeOf:Va}=Object,cr=globalThis,Ri=cr.trustedTypes,Xa=Ri?Ri.emptyScript:"",Ya=cr.reactiveElementPolyfillSupport,Sn=($,r)=>$,ar={toAttribute($,r){switch(r){case Boolean:$=$?Xa:null;break;case Object:case Array:$=$==null?$:JSON.stringify($)}return $},fromAttribute($,r){let i=$;switch(r){case Boolean:i=$!==null;break;case Number:i=$===null?null:Number($);break;case Object:case Array:try{i=JSON.parse($)}catch{i=null}}return i}},Hr=($,r)=>!Ka($,r),zi={attribute:!0,type:String,converter:ar,reflect:!1,useDefault:!1,hasChanged:Hr};Symbol.metadata??=Symbol("metadata"),cr.litPropertyMetadata??=new WeakMap;let cn=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,i=zi){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(r,i),!i.noAccessor){const d=Symbol(),c=this.getPropertyDescriptor(r,d,i);c!==void 0&&qa(this.prototype,r,c)}}static getPropertyDescriptor(r,i,d){const{get:c,set:o}=Wa(this.prototype,r)??{get(){return this[i]},set(h){this[i]=h}};return{get:c,set(h){const u=c?.call(this);o?.call(this,h),this.requestUpdate(r,u,d)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??zi}static _$Ei(){if(this.hasOwnProperty(Sn("elementProperties")))return;const r=Va(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Sn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sn("properties"))){const i=this.properties,d=[...Za(i),...Ha(i)];for(const c of d)this.createProperty(c,i[c])}const r=this[Symbol.metadata];if(r!==null){const i=litPropertyMetadata.get(r);if(i!==void 0)for(const[d,c]of i)this.elementProperties.set(d,c)}this._$Eh=new Map;for(const[i,d]of this.elementProperties){const c=this._$Eu(i,d);c!==void 0&&this._$Eh.set(c,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const i=[];if(Array.isArray(r)){const d=new Set(r.flat(1/0).reverse());for(const c of d)i.unshift($i(c))}else r!==void 0&&i.push($i(r));return i}static _$Eu(r,i){const d=i.attribute;return d===!1?void 0:typeof d=="string"?d:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((r=>this.enableUpdating=r)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((r=>r(this)))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,i=this.constructor.elementProperties;for(const d of i.keys())this.hasOwnProperty(d)&&(r.set(d,this[d]),delete this[d]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ua(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((r=>r.hostConnected?.()))}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach((r=>r.hostDisconnected?.()))}attributeChangedCallback(r,i,d){this._$AK(r,d)}_$ET(r,i){const d=this.constructor.elementProperties.get(r),c=this.constructor._$Eu(r,d);if(c!==void 0&&d.reflect===!0){const o=(d.converter?.toAttribute!==void 0?d.converter:ar).toAttribute(i,d.type);this._$Em=r,o==null?this.removeAttribute(c):this.setAttribute(c,o),this._$Em=null}}_$AK(r,i){const d=this.constructor,c=d._$Eh.get(r);if(c!==void 0&&this._$Em!==c){const o=d.getPropertyOptions(c),h=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ar;this._$Em=c;const u=h.fromAttribute(i,o.type);this[c]=u??this._$Ej?.get(c)??u,this._$Em=null}}requestUpdate(r,i,d){if(r!==void 0){const c=this.constructor,o=this[r];if(d??=c.getPropertyOptions(r),!((d.hasChanged??Hr)(o,i)||d.useDefault&&d.reflect&&o===this._$Ej?.get(r)&&!this.hasAttribute(c._$Eu(r,d))))return;this.C(r,i,d)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,i,{useDefault:d,reflect:c,wrapped:o},h){d&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,h??i??this[r]),o!==!0||h!==void 0)||(this._$AL.has(r)||(this.hasUpdated||d||(i=void 0),this._$AL.set(r,i)),c===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[c,o]of this._$Ep)this[c]=o;this._$Ep=void 0}const d=this.constructor.elementProperties;if(d.size>0)for(const[c,o]of d){const{wrapped:h}=o,u=this[c];h!==!0||this._$AL.has(c)||u===void 0||this.C(c,void 0,o,u)}}let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),this._$EO?.forEach((d=>d.hostUpdate?.())),this.update(i)):this._$EM()}catch(d){throw r=!1,this._$EM(),d}r&&this._$AE(i)}willUpdate(r){}_$AE(r){this._$EO?.forEach((i=>i.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach((i=>this._$ET(i,this[i]))),this._$EM()}updated(r){}firstUpdated(r){}};cn.elementStyles=[],cn.shadowRootOptions={mode:"open"},cn[Sn("elementProperties")]=new Map,cn[Sn("finalized")]=new Map,Ya?.({ReactiveElement:cn}),(cr.reactiveElementVersions??=[]).push("2.1.1");const Vr=globalThis,or=Vr.trustedTypes,Di=or?or.createPolicy("lit-html",{createHTML:$=>$}):void 0,Gi="$lit$",Le=`lit$${Math.random().toFixed(9).slice(2)}$`,Ji="?"+Le,Ga=`<${Ji}>`,Ge=document,An=()=>Ge.createComment(""),On=$=>$===null||typeof $!="object"&&typeof $!="function",Xr=Array.isArray,Ja=$=>Xr($)||typeof $?.[Symbol.iterator]=="function",Lr=`[ 	
\f\r]`,Cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ii=/-->/g,Mi=/>/g,Xe=RegExp(`>|${Lr}(?:([^\\s"'>=/]+)(${Lr}*=${Lr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bi=/'/g,ji=/"/g,Qi=/^(?:script|style|textarea|title)$/i,Qa=$=>(r,...i)=>({_$litType$:$,strings:r,values:i}),Kt=Qa(1),Je=Symbol.for("lit-noChange"),Qt=Symbol.for("lit-nothing"),Fi=new WeakMap,Ye=Ge.createTreeWalker(Ge,129);function ta($,r){if(!Xr($)||!$.hasOwnProperty("raw"))throw Error("invalid template strings array");return Di!==void 0?Di.createHTML(r):r}const to=($,r)=>{const i=$.length-1,d=[];let c,o=r===2?"<svg>":r===3?"<math>":"",h=Cn;for(let u=0;u<i;u++){const m=$[u];let w,C,_=-1,S=0;for(;S<m.length&&(h.lastIndex=S,C=h.exec(m),C!==null);)S=h.lastIndex,h===Cn?C[1]==="!--"?h=Ii:C[1]!==void 0?h=Mi:C[2]!==void 0?(Qi.test(C[2])&&(c=RegExp("</"+C[2],"g")),h=Xe):C[3]!==void 0&&(h=Xe):h===Xe?C[0]===">"?(h=c??Cn,_=-1):C[1]===void 0?_=-2:(_=h.lastIndex-C[2].length,w=C[1],h=C[3]===void 0?Xe:C[3]==='"'?ji:Bi):h===ji||h===Bi?h=Xe:h===Ii||h===Mi?h=Cn:(h=Xe,c=void 0);const g=h===Xe&&$[u+1].startsWith("/>")?" ":"";o+=h===Cn?m+Ga:_>=0?(d.push(w),m.slice(0,_)+Gi+m.slice(_)+Le+g):m+Le+(_===-2?u:g)}return[ta($,o+($[i]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),d]};class Pn{constructor({strings:r,_$litType$:i},d){let c;this.parts=[];let o=0,h=0;const u=r.length-1,m=this.parts,[w,C]=to(r,i);if(this.el=Pn.createElement(w,d),Ye.currentNode=this.el.content,i===2||i===3){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(c=Ye.nextNode())!==null&&m.length<u;){if(c.nodeType===1){if(c.hasAttributes())for(const _ of c.getAttributeNames())if(_.endsWith(Gi)){const S=C[h++],g=c.getAttribute(_).split(Le),E=/([.?@])?(.*)/.exec(S);m.push({type:1,index:o,name:E[2],strings:g,ctor:E[1]==="."?no:E[1]==="?"?ro:E[1]==="@"?io:hr}),c.removeAttribute(_)}else _.startsWith(Le)&&(m.push({type:6,index:o}),c.removeAttribute(_));if(Qi.test(c.tagName)){const _=c.textContent.split(Le),S=_.length-1;if(S>0){c.textContent=or?or.emptyScript:"";for(let g=0;g<S;g++)c.append(_[g],An()),Ye.nextNode(),m.push({type:2,index:++o});c.append(_[S],An())}}}else if(c.nodeType===8)if(c.data===Ji)m.push({type:2,index:o});else{let _=-1;for(;(_=c.data.indexOf(Le,_+1))!==-1;)m.push({type:7,index:o}),_+=Le.length-1}o++}}static createElement(r,i){const d=Ge.createElement("template");return d.innerHTML=r,d}}function hn($,r,i=$,d){if(r===Je)return r;let c=d!==void 0?i._$Co?.[d]:i._$Cl;const o=On(r)?void 0:r._$litDirective$;return c?.constructor!==o&&(c?._$AO?.(!1),o===void 0?c=void 0:(c=new o($),c._$AT($,i,d)),d!==void 0?(i._$Co??=[])[d]=c:i._$Cl=c),c!==void 0&&(r=hn($,c._$AS($,r.values),c,d)),r}class eo{constructor(r,i){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:i},parts:d}=this._$AD,c=(r?.creationScope??Ge).importNode(i,!0);Ye.currentNode=c;let o=Ye.nextNode(),h=0,u=0,m=d[0];for(;m!==void 0;){if(h===m.index){let w;m.type===2?w=new $n(o,o.nextSibling,this,r):m.type===1?w=new m.ctor(o,m.name,m.strings,this,r):m.type===6&&(w=new ao(o,this,r)),this._$AV.push(w),m=d[++u]}h!==m?.index&&(o=Ye.nextNode(),h++)}return Ye.currentNode=Ge,c}p(r){let i=0;for(const d of this._$AV)d!==void 0&&(d.strings!==void 0?(d._$AI(r,d,i),i+=d.strings.length-2):d._$AI(r[i])),i++}}class $n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,i,d,c){this.type=2,this._$AH=Qt,this._$AN=void 0,this._$AA=r,this._$AB=i,this._$AM=d,this.options=c,this._$Cv=c?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&r?.nodeType===11&&(r=i.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,i=this){r=hn(this,r,i),On(r)?r===Qt||r==null||r===""?(this._$AH!==Qt&&this._$AR(),this._$AH=Qt):r!==this._$AH&&r!==Je&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):Ja(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==Qt&&On(this._$AH)?this._$AA.nextSibling.data=r:this.T(Ge.createTextNode(r)),this._$AH=r}$(r){const{values:i,_$litType$:d}=r,c=typeof d=="number"?this._$AC(r):(d.el===void 0&&(d.el=Pn.createElement(ta(d.h,d.h[0]),this.options)),d);if(this._$AH?._$AD===c)this._$AH.p(i);else{const o=new eo(c,this),h=o.u(this.options);o.p(i),this.T(h),this._$AH=o}}_$AC(r){let i=Fi.get(r.strings);return i===void 0&&Fi.set(r.strings,i=new Pn(r)),i}k(r){Xr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let d,c=0;for(const o of r)c===i.length?i.push(d=new $n(this.O(An()),this.O(An()),this,this.options)):d=i[c],d._$AI(o),c++;c<i.length&&(this._$AR(d&&d._$AB.nextSibling,c),i.length=c)}_$AR(r=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);r!==this._$AB;){const d=r.nextSibling;r.remove(),r=d}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}}class hr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,i,d,c,o){this.type=1,this._$AH=Qt,this._$AN=void 0,this.element=r,this.name=i,this._$AM=c,this.options=o,d.length>2||d[0]!==""||d[1]!==""?(this._$AH=Array(d.length-1).fill(new String),this.strings=d):this._$AH=Qt}_$AI(r,i=this,d,c){const o=this.strings;let h=!1;if(o===void 0)r=hn(this,r,i,0),h=!On(r)||r!==this._$AH&&r!==Je,h&&(this._$AH=r);else{const u=r;let m,w;for(r=o[0],m=0;m<o.length-1;m++)w=hn(this,u[d+m],i,m),w===Je&&(w=this._$AH[m]),h||=!On(w)||w!==this._$AH[m],w===Qt?r=Qt:r!==Qt&&(r+=(w??"")+o[m+1]),this._$AH[m]=w}h&&!c&&this.j(r)}j(r){r===Qt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class no extends hr{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===Qt?void 0:r}}class ro extends hr{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==Qt)}}class io extends hr{constructor(r,i,d,c,o){super(r,i,d,c,o),this.type=5}_$AI(r,i=this){if((r=hn(this,r,i,0)??Qt)===Je)return;const d=this._$AH,c=r===Qt&&d!==Qt||r.capture!==d.capture||r.once!==d.once||r.passive!==d.passive,o=r!==Qt&&(d===Qt||c);c&&this.element.removeEventListener(this.name,this,d),o&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class ao{constructor(r,i,d){this.element=r,this.type=6,this._$AN=void 0,this._$AM=i,this.options=d}get _$AU(){return this._$AM._$AU}_$AI(r){hn(this,r)}}const oo=Vr.litHtmlPolyfillSupport;oo?.(Pn,$n),(Vr.litHtmlVersions??=[]).push("3.3.1");const so=($,r,i)=>{const d=i?.renderBefore??r;let c=d._$litPart$;if(c===void 0){const o=i?.renderBefore??null;d._$litPart$=c=new $n(r.insertBefore(An(),o),o,void 0,i??{})}return c._$AI($),c};const Yr=globalThis;let Se=class extends cn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=so(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};Se._$litElement$=!0,Se.finalized=!0,Yr.litElementHydrateSupport?.({LitElement:Se});const lo=Yr.litElementPolyfillSupport;lo?.({LitElement:Se});(Yr.litElementVersions??=[]).push("4.2.1");const fn=$=>(r,i)=>{i!==void 0?i.addInitializer((()=>{customElements.define($,r)})):customElements.define($,r)};const uo={attribute:!0,type:String,converter:ar,reflect:!1,hasChanged:Hr},co=($=uo,r,i)=>{const{kind:d,metadata:c}=i;let o=globalThis.litPropertyMetadata.get(c);if(o===void 0&&globalThis.litPropertyMetadata.set(c,o=new Map),d==="setter"&&(($=Object.create($)).wrapped=!0),o.set(i.name,$),d==="accessor"){const{name:h}=i;return{set(u){const m=r.get.call(this);r.set.call(this,u),this.requestUpdate(h,m,$)},init(u){return u!==void 0&&this.C(h,void 0,$,u),u}}}if(d==="setter"){const{name:h}=i;return function(u){const m=this[h];r.call(this,u),this.requestUpdate(h,m,$)}}throw Error("Unsupported decorator location: "+d)};function _e($){return(r,i)=>typeof i=="object"?co($,r,i):((d,c,o)=>{const h=c.hasOwnProperty(o);return c.constructor.createProperty(o,d),h?Object.getOwnPropertyDescriptor(c,o):void 0})($,r,i)}function Ft($){return _e({...$,state:!0,attribute:!1})}const ho={CHILD:2},fo=$=>(...r)=>({_$litDirective$:$,values:r});class po{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,i,d){this._$Ct=r,this._$AM=i,this._$Ci=d}_$AS(r,i){return this.update(r,i)}update(r,i){return this.render(...i)}}class Kr extends po{constructor(r){if(super(r),this.it=Qt,r.type!==ho.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===Qt||r==null)return this._t=void 0,this.it=r;if(r===Je)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const i=[r];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Kr.directiveName="unsafeHTML",Kr.resultType=1;const te=fo(Kr);class mo{constructor(){this.stream=null}async requestPermission(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("MediaDevices API not supported in this browser");try{return this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1,sampleRate:48e3,channelCount:1}}),this.stream}catch(r){throw r instanceof Error?new Error(`Microphone access denied: ${r.message}`):new Error("Microphone access denied")}}getStream(){return this.stream}release(){this.stream&&(this.stream.getTracks().forEach(r=>r.stop()),this.stream=null)}isActive(){return this.stream!==null&&this.stream.active}}class go{constructor(){this.mediaRecorder=null,this.chunks=[]}async initialize(r){if(!window.MediaRecorder)throw new Error("MediaRecorder API not supported in this browser");const i=this.getSupportedMimeType();if(!i)throw new Error("No supported audio MIME type found");this.mediaRecorder=new MediaRecorder(r,{mimeType:i,audioBitsPerSecond:128e3}),this.mediaRecorder.ondataavailable=d=>{d.data.size>0&&(this.chunks.push(d.data),this.onDataAvailableCallback?.(d.data))},this.mediaRecorder.onstop=()=>{this.onStateChangeCallback?.("inactive")},this.mediaRecorder.onstart=()=>{this.onStateChangeCallback?.("recording")},this.mediaRecorder.onpause=()=>{this.onStateChangeCallback?.("paused")},this.mediaRecorder.onresume=()=>{this.onStateChangeCallback?.("recording")}}getSupportedMimeType(){return["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/mp4"].find(i=>MediaRecorder.isTypeSupported(i))||null}start(r=100){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");this.mediaRecorder.state!=="recording"&&(this.chunks=[],this.mediaRecorder.start(r))}async stop(){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");return this.mediaRecorder.state==="inactive"?new Blob(this.chunks,{type:this.mediaRecorder.mimeType}):new Promise(r=>{this.mediaRecorder.onstop=()=>{const i=new Blob(this.chunks,{type:this.mediaRecorder.mimeType});this.onStateChangeCallback?.("inactive"),r(i)},this.mediaRecorder.stop()})}pause(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.pause()}resume(){this.mediaRecorder?.state==="paused"&&this.mediaRecorder.resume()}getState(){return this.mediaRecorder?.state||"inactive"}getMimeType(){return this.mediaRecorder?.mimeType||""}onDataAvailable(r){this.onDataAvailableCallback=r}onStateChange(r){this.onStateChangeCallback=r}release(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.stop(),this.mediaRecorder=null,this.chunks=[]}}const vo="modulepreload",yo=function($){return"/"+$},Ni={},bo=function(r,i,d){let c=Promise.resolve();if(i&&i.length>0){let w=function(C){return Promise.all(C.map(_=>Promise.resolve(_).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};var h=w;document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),m=u?.nonce||u?.getAttribute("nonce");c=w(i.map(C=>{if(C=yo(C),C in Ni)return;Ni[C]=!0;const _=C.endsWith(".css"),S=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${C}"]${S}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":vo,_||(g.as="script"),g.crossOrigin="",g.href=C,m&&g.setAttribute("nonce",m),document.head.appendChild(g),_)return new Promise((E,v)=>{g.addEventListener("load",E),g.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${C}`)))})}))}function o(u){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=u,window.dispatchEvent(m),!m.defaultPrevented)throw u}return c.then(u=>{for(const m of u||[])m.status==="rejected"&&o(m.reason);return r().catch(o)})};var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ea($){return $&&$.__esModule&&Object.prototype.hasOwnProperty.call($,"default")?$.default:$}var rr={exports:{}},wo=rr.exports,Li;function _o(){return Li||(Li=1,(function($,r){(function(i,d){$.exports=d()})(wo,function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])})(t,e)},d=function(){return(d=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};function c(t,e,n){for(var a,s=0,f=e.length;s<f;s++)!a&&s in e||((a=a||Array.prototype.slice.call(e,0,s))[s]=e[s]);return t.concat(a||Array.prototype.slice.call(e))}var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Te,h=Object.keys,u=Array.isArray;function m(t,e){return typeof e!="object"||h(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||o.Promise||(o.Promise=Promise);var w=Object.getPrototypeOf,C={}.hasOwnProperty;function _(t,e){return C.call(t,e)}function S(t,e){typeof e=="function"&&(e=e(w(t))),(typeof Reflect>"u"?h:Reflect.ownKeys)(e).forEach(function(n){E(t,n,e[n])})}var g=Object.defineProperty;function E(t,e,n,a){g(t,e,m(n&&_(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function v(t){return{from:function(e){return t.prototype=Object.create(e.prototype),E(t.prototype,"constructor",t),{extend:S.bind(null,t.prototype)}}}}var k=Object.getOwnPropertyDescriptor,b=[].slice;function P(t,e,n){return b.call(t,e,n)}function M(t,e){return e(t)}function W(t){if(!t)throw new Error("Assertion Failed")}function K(t){o.setImmediate?setImmediate(t):setTimeout(t,0)}function nt(t,e){if(typeof e=="string"&&_(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],a=0,s=e.length;a<s;++a){var f=nt(t,e[a]);n.push(f)}return n}var y=e.indexOf(".");if(y!==-1){var O=t[e.substr(0,y)];return O==null?void 0:nt(O,e.substr(y+1))}}function G(t,e,n){if(t&&e!==void 0&&!("isFrozen"in Object&&Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){W(typeof n!="string"&&"length"in n);for(var a=0,s=e.length;a<s;++a)G(t,e[a],n[a])}else{var f,y,O=e.indexOf(".");O!==-1?(f=e.substr(0,O),(y=e.substr(O+1))===""?n===void 0?u(t)&&!isNaN(parseInt(f))?t.splice(f,1):delete t[f]:t[f]=n:G(O=!(O=t[f])||!_(t,f)?t[f]={}:O,y,n)):n===void 0?u(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function ut(t){var e,n={};for(e in t)_(t,e)&&(n[e]=t[e]);return n}var tt=[].concat;function pt(t){return tt.apply([],t)}var Et="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(pt([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(t){return o[t]}),Pt=new Set(Et.map(function(t){return o[t]})),R=null;function Q(t){return R=new WeakMap,t=(function e(n){if(!n||typeof n!="object")return n;var a=R.get(n);if(a)return a;if(u(n)){a=[],R.set(n,a);for(var s=0,f=n.length;s<f;++s)a.push(e(n[s]))}else if(Pt.has(n.constructor))a=n;else{var y,O=w(n);for(y in a=O===Object.prototype?{}:Object.create(O),R.set(n,a),n)_(n,y)&&(a[y]=e(n[y]))}return a})(t),R=null,t}var p={}.toString;function it(t){return p.call(t).slice(8,-1)}var Tt=typeof Symbol<"u"?Symbol.iterator:"@@iterator",lt=typeof Tt=="symbol"?function(t){var e;return t!=null&&(e=t[Tt])&&e.apply(t)}:function(){return null};function $t(t,e){return e=t.indexOf(e),0<=e&&t.splice(e,1),0<=e}var st={};function Ot(t){var e,n,a,s;if(arguments.length===1){if(u(t))return t.slice();if(this===st&&typeof t=="string")return[t];if(s=lt(t)){for(n=[];!(a=s.next()).done;)n.push(a.value);return n}if(t==null)return[t];if(typeof(e=t.length)!="number")return[t];for(n=new Array(e);e--;)n[e]=t[e];return n}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}var X=typeof Symbol<"u"?function(t){return t[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},dt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],be=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(dt),V={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function At(t,e){this.name=t,this.message=e}function xt(t,e){return t+". Errors: "+Object.keys(e).map(function(n){return e[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function vt(t,e,n,a){this.failures=e,this.failedKeys=a,this.successCount=n,this.message=xt(t,e)}function qt(t,e){this.name="BulkError",this.failures=Object.keys(e).map(function(n){return e[n]}),this.failuresByPos=e,this.message=xt(t,this.failures)}v(At).from(Error).extend({toString:function(){return this.name+": "+this.message}}),v(vt).from(At),v(qt).from(At);var Jt=be.reduce(function(t,e){return t[e]=e+"Error",t},{}),jt=At,mt=be.reduce(function(t,e){var n=e+"Error";function a(s,f){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(f?`
 `+f:""),this.inner=f||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=V[e]||n,this.inner=null)}return v(a).from(jt),t[e]=a,t},{});mt.Syntax=SyntaxError,mt.Type=TypeError,mt.Range=RangeError;var Xt=dt.reduce(function(t,e){return t[e+"Error"]=mt[e],t},{}),Wt=be.reduce(function(t,e){return["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=mt[e]),t},{});function It(){}function ae(t){return t}function l(t,e){return t==null||t===ae?e:function(n){return e(t(n))}}function et(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Y(t,e){return t===It?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var a=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var f=e.apply(this,arguments);return a&&(this.onsuccess=this.onsuccess?et(a,this.onsuccess):a),s&&(this.onerror=this.onerror?et(s,this.onerror):s),f!==void 0?f:n}}function A(t,e){return t===It?e:function(){t.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?et(n,this.onsuccess):n),a&&(this.onerror=this.onerror?et(a,this.onerror):a)}}function x(t,e){return t===It?e:function(n){var a=t.apply(this,arguments);m(n,a);var s=this.onsuccess,f=this.onerror;return this.onsuccess=null,this.onerror=null,n=e.apply(this,arguments),s&&(this.onsuccess=this.onsuccess?et(s,this.onsuccess):s),f&&(this.onerror=this.onerror?et(f,this.onerror):f),a===void 0?n===void 0?void 0:n:m(a,n)}}function N(t,e){return t===It?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ot(t,e){return t===It?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,f=new Array(s);s--;)f[s]=arguments[s];return n.then(function(){return e.apply(a,f)})}return e.apply(this,arguments)}}Wt.ModifyError=vt,Wt.DexieError=At,Wt.BulkError=qt;var at=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Z(t){at=t}var ct={},kt=100,Et=typeof Promise>"u"?[]:(function(){var t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,w(t),t];var e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,w(e),t]})(),dt=Et[0],be=Et[1],Et=Et[2],be=be&&be.then,Lt=dt&&dt.constructor,Mt=!!Et,ne=function(t,e){Re.push([t,e]),he&&(queueMicrotask(va),he=!1)},Ee=!0,he=!0,pe=[],Zt=[],$e=ae,ye={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:It,pgp:!1,env:{},finalize:It},Ct=ye,Re=[],Ae=0,Qe=[];function _t(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var e=this._PSD=Ct;if(typeof t!="function"){if(t!==ct)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&De(this,this._value))}this._state=null,this._value=null,++e.ref,(function n(a,s){try{s(function(f){if(a._state===null){if(f===a)throw new TypeError("A promise cannot be resolved with itself.");var y=a._lib&&en();f&&typeof f.then=="function"?n(a,function(O,z){f instanceof _t?f._then(O,z):f.then(O,z)}):(a._state=!0,a._value=f,Jr(a)),y&&nn()}},De.bind(null,a))}catch(f){De(a,f)}})(this,t)}var tn={get:function(){var t=Ct,e=In;function n(a,s){var f=this,y=!t.global&&(t!==Ct||e!==In),O=y&&!Me(),z=new _t(function(D,F){dr(f,new ze(ti(a,t,y,O),ti(s,t,y,O),D,F,t))});return this._consoleTask&&(z._consoleTask=this._consoleTask),z}return n.prototype=ct,n},set:function(t){E(this,"then",t&&t.prototype===ct?tn:{get:function(){return t},set:tn.set})}};function ze(t,e,n,a,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=a,this.psd=s}function De(t,e){var n,a;Zt.push(e),t._state===null&&(n=t._lib&&en(),e=$e(e),t._state=!1,t._value=e,a=t,pe.some(function(s){return s._value===a._value})||pe.push(a),Jr(t),n&&nn())}function Jr(t){var e=t._listeners;t._listeners=[];for(var n=0,a=e.length;n<a;++n)dr(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Ae===0&&(++Ae,ne(function(){--Ae==0&&fr()},[]))}function dr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ae,ne(ga,[n,t,e])}else t._listeners.push(e)}function ga(t,e,n){try{var a,s=e._value;!e._state&&Zt.length&&(Zt=[]),a=at&&e._consoleTask?e._consoleTask.run(function(){return t(s)}):t(s),e._state||Zt.indexOf(s)!==-1||(function(f){for(var y=pe.length;y;)if(pe[--y]._value===f._value)return pe.splice(y,1)})(e),n.resolve(a)}catch(f){n.reject(f)}finally{--Ae==0&&fr(),--n.psd.ref||n.psd.finalize()}}function va(){Ke(ye,function(){en()&&nn()})}function en(){var t=Ee;return he=Ee=!1,t}function nn(){var t,e,n;do for(;0<Re.length;)for(t=Re,Re=[],n=t.length,e=0;e<n;++e){var a=t[e];a[0].apply(null,a[1])}while(0<Re.length);he=Ee=!0}function fr(){var t=pe;pe=[],t.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)});for(var e=Qe.slice(0),n=e.length;n;)e[--n]()}function Rn(t){return new _t(ct,!1,t)}function Vt(t,e){var n=Ct;return function(){var a=en(),s=Ct;try{return Be(n,!0),t.apply(this,arguments)}catch(f){e&&e(f)}finally{Be(s,!1),a&&nn()}}}S(_t.prototype,{then:tn,_then:function(t,e){dr(this,new ze(null,null,t,e,Ct))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=t,n=arguments[1];return typeof e=="function"?this.then(null,function(a){return(a instanceof e?n:Rn)(a)}):this.then(null,function(a){return(a&&a.name===e?n:Rn)(a)})},finally:function(t){return this.then(function(e){return _t.resolve(t()).then(function(){return e})},function(e){return _t.resolve(t()).then(function(){return Rn(e)})})},timeout:function(t,e){var n=this;return t<1/0?new _t(function(a,s){var f=setTimeout(function(){return s(new mt.Timeout(e))},t);n.then(a,s).finally(clearTimeout.bind(null,f))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&E(_t.prototype,Symbol.toStringTag,"Dexie.Promise"),ye.env=Qr(),S(_t,{all:function(){var t=Ot.apply(null,arguments).map(Mn);return new _t(function(e,n){t.length===0&&e([]);var a=t.length;t.forEach(function(s,f){return _t.resolve(s).then(function(y){t[f]=y,--a||e(t)},n)})})},resolve:function(t){return t instanceof _t?t:t&&typeof t.then=="function"?new _t(function(e,n){t.then(e,n)}):new _t(ct,!0,t)},reject:Rn,race:function(){var t=Ot.apply(null,arguments).map(Mn);return new _t(function(e,n){t.map(function(a){return _t.resolve(a).then(e,n)})})},PSD:{get:function(){return Ct},set:function(t){return Ct=t}},totalEchoes:{get:function(){return In}},newPSD:Ie,usePSD:Ke,scheduler:{get:function(){return ne},set:function(t){ne=t}},rejectionMapper:{get:function(){return $e},set:function(t){$e=t}},follow:function(t,e){return new _t(function(n,a){return Ie(function(s,f){var y=Ct;y.unhandleds=[],y.onunhandled=f,y.finalize=et(function(){var O,z=this;O=function(){z.unhandleds.length===0?s():f(z.unhandleds[0])},Qe.push(function D(){O(),Qe.splice(Qe.indexOf(D),1)}),++Ae,ne(function(){--Ae==0&&fr()},[])},y.finalize),t()},e,n,a)})}}),Lt&&(Lt.allSettled&&E(_t,"allSettled",function(){var t=Ot.apply(null,arguments).map(Mn);return new _t(function(e){t.length===0&&e([]);var n=t.length,a=new Array(n);t.forEach(function(s,f){return _t.resolve(s).then(function(y){return a[f]={status:"fulfilled",value:y}},function(y){return a[f]={status:"rejected",reason:y}}).then(function(){return--n||e(a)})})})}),Lt.any&&typeof AggregateError<"u"&&E(_t,"any",function(){var t=Ot.apply(null,arguments).map(Mn);return new _t(function(e,n){t.length===0&&n(new AggregateError([]));var a=t.length,s=new Array(a);t.forEach(function(f,y){return _t.resolve(f).then(function(O){return e(O)},function(O){s[y]=O,--a||n(new AggregateError(s))})})})}),Lt.withResolvers&&(_t.withResolvers=Lt.withResolvers));var re={awaits:0,echoes:0,id:0},ya=0,zn=[],Dn=0,In=0,ba=0;function Ie(t,e,n,a){var s=Ct,f=Object.create(s);return f.parent=s,f.ref=0,f.global=!1,f.id=++ba,ye.env,f.env=Mt?{Promise:_t,PromiseProp:{value:_t,configurable:!0,writable:!0},all:_t.all,race:_t.race,allSettled:_t.allSettled,any:_t.any,resolve:_t.resolve,reject:_t.reject}:{},e&&m(f,e),++s.ref,f.finalize=function(){--this.parent.ref||this.parent.finalize()},a=Ke(f,t,n,a),f.ref===0&&f.finalize(),a}function rn(){return re.id||(re.id=++ya),++re.awaits,re.echoes+=kt,re.id}function Me(){return!!re.awaits&&(--re.awaits==0&&(re.id=0),re.echoes=re.awaits*kt,!0)}function Mn(t){return re.echoes&&t&&t.constructor===Lt?(rn(),t.then(function(e){return Me(),e},function(e){return Me(),Yt(e)})):t}function wa(){var t=zn[zn.length-1];zn.pop(),Be(t,!1)}function Be(t,e){var n,a=Ct;(e?!re.echoes||Dn++&&t===Ct:!Dn||--Dn&&t===Ct)||queueMicrotask(e?function(s){++In,re.echoes&&--re.echoes!=0||(re.echoes=re.awaits=re.id=0),zn.push(Ct),Be(s,!0)}.bind(null,t):wa),t!==Ct&&(Ct=t,a===ye&&(ye.env=Qr()),Mt&&(n=ye.env.Promise,e=t.env,(a.global||t.global)&&(Object.defineProperty(o,"Promise",e.PromiseProp),n.all=e.all,n.race=e.race,n.resolve=e.resolve,n.reject=e.reject,e.allSettled&&(n.allSettled=e.allSettled),e.any&&(n.any=e.any))))}function Qr(){var t=o.Promise;return Mt?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject}:{}}function Ke(t,e,n,a,s){var f=Ct;try{return Be(t,!0),e(n,a,s)}finally{Be(f,!1)}}function ti(t,e,n,a){return typeof t!="function"?t:function(){var s=Ct;n&&rn(),Be(e,!0);try{return t.apply(this,arguments)}finally{Be(s,!1),a&&queueMicrotask(Me)}}}function pr(t){Promise===Lt&&re.echoes===0?Dn===0?t():enqueueNativeMicroTask(t):setTimeout(t,0)}(""+be).indexOf("[native code]")===-1&&(rn=Me=It);var Yt=_t.reject,qe="￿",Oe="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ei="String expected.",an=[],Bn="__dbnames",mr="readonly",gr="readwrite";function We(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}var ni={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function jn(t){return typeof t!="string"||/\./.test(t)?function(e){return e}:function(e){return e[t]===void 0&&t in e&&delete(e=Q(e))[t],e}}function ri(){throw mt.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Nt(t,e){try{var n=ii(t),a=ii(e);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return e<t?1:t<e?-1:0;case"binary":return(function(s,f){for(var y=s.length,O=f.length,z=y<O?y:O,D=0;D<z;++D)if(s[D]!==f[D])return s[D]<f[D]?-1:1;return y===O?0:y<O?-1:1})(ai(t),ai(e));case"Array":return(function(s,f){for(var y=s.length,O=f.length,z=y<O?y:O,D=0;D<z;++D){var F=Nt(s[D],f[D]);if(F!==0)return F}return y===O?0:y<O?-1:1})(t,e)}}catch{}return NaN}function ii(t){var e=typeof t;return e!="object"?e:ArrayBuffer.isView(t)?"binary":(t=it(t),t==="ArrayBuffer"?"binary":t)}function ai(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function Fn(t,e,n){var a=t.schema.yProps;return a?(e&&0<n.numFailures&&(e=e.filter(function(s,f){return!n.failures[f]})),Promise.all(a.map(function(s){return s=s.updatesTable,e?t.db.table(s).where("k").anyOf(e).delete():t.db.table(s).clear()})).then(function(){return n})):n}var mn=(oi.prototype.execute=function(t){var e=this["@@propmod"];if(e.add!==void 0){var n=e.add;if(u(n))return c(c([],u(t)?t:[],!0),n).sort();if(typeof n=="number")return(Number(t)||0)+n;if(typeof n=="bigint")try{return BigInt(t)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(e.remove!==void 0){var a=e.remove;if(u(a))return u(t)?t.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(t)-a;if(typeof a=="bigint")try{return BigInt(t)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=e.replacePrefix)===null||n===void 0?void 0:n[0],n&&typeof t=="string"&&t.startsWith(n)?e.replacePrefix[1]+t.substring(n.length):t},oi);function oi(t){this["@@propmod"]=t}function si(t,e){for(var n=h(e),a=n.length,s=!1,f=0;f<a;++f){var y=n[f],O=e[y],z=nt(t,y);O instanceof mn?(G(t,y,O.execute(z)),s=!0):z!==O&&(G(t,y,O),s=!0)}return s}var li=(Ht.prototype._trans=function(t,e,n){var a=this._tx||Ct.trans,s=this.name,f=at&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function y(D,F,T){if(!T.schema[s])throw new mt.NotFound("Table "+s+" not part of transaction");return e(T.idbtrans,T)}var O=en();try{var z=a&&a.db._novip===this.db._novip?a===Ct.trans?a._promise(t,y,n):Ie(function(){return a._promise(t,y,n)},{trans:a,transless:Ct.transless||Ct}):(function D(F,T,U,I){if(F.idbdb&&(F._state.openComplete||Ct.letThrough||F._vip)){var B=F._createTransaction(T,U,F._dbSchema);try{B.create(),F._state.PR1398_maxLoop=3}catch(j){return j.name===Jt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return D(F,T,U,I)})):Yt(j)}return B._promise(T,function(j,L){return Ie(function(){return Ct.trans=B,I(j,L,B)})}).then(function(j){if(T==="readwrite")try{B.idbtrans.commit()}catch{}return T==="readonly"?j:B._completion.then(function(){return j})})}if(F._state.openComplete)return Yt(new mt.DatabaseClosed(F._state.dbOpenError));if(!F._state.isBeingOpened){if(!F._state.autoOpen)return Yt(new mt.DatabaseClosed);F.open().catch(It)}return F._state.dbReadyPromise.then(function(){return D(F,T,U,I)})})(this.db,t,[this.name],y);return f&&(z._consoleTask=f,z=z.catch(function(D){return console.trace(D),Yt(D)})),z}finally{O&&nn()}},Ht.prototype.get=function(t,e){var n=this;return t&&t.constructor===Object?this.where(t).first(e):t==null?Yt(new mt.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:t}).then(function(s){return n.hook.reading.fire(s)})}).then(e)},Ht.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(u(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var e=h(t);if(e.length===1)return this.where(e[0]).equals(t[e[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(O){if(O.compound&&e.every(function(D){return 0<=O.keyPath.indexOf(D)})){for(var z=0;z<e.length;++z)if(e.indexOf(O.keyPath[z])===-1)return!1;return!0}return!1}).sort(function(O,z){return O.keyPath.length-z.keyPath.length})[0];if(n&&this.db._maxKey!==qe){var f=n.keyPath.slice(0,e.length);return this.where(f).equals(f.map(function(z){return t[z]}))}!n&&at&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(e.join("+"),"]"));var a=this.schema.idxByName;function s(O,z){return Nt(O,z)===0}var y=e.reduce(function(T,z){var D=T[0],F=T[1],T=a[z],U=t[z];return[D||T,D||!T?We(F,T&&T.multi?function(I){return I=nt(I,z),u(I)&&I.some(function(B){return s(U,B)})}:function(I){return s(U,nt(I,z))}):F]},[null,null]),f=y[0],y=y[1];return f?this.where(f.name).equals(t[f.keyPath]).filter(y):n?this.filter(y):this.where(e).equals("")},Ht.prototype.filter=function(t){return this.toCollection().and(t)},Ht.prototype.count=function(t){return this.toCollection().count(t)},Ht.prototype.offset=function(t){return this.toCollection().offset(t)},Ht.prototype.limit=function(t){return this.toCollection().limit(t)},Ht.prototype.each=function(t){return this.toCollection().each(t)},Ht.prototype.toArray=function(t){return this.toCollection().toArray(t)},Ht.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ht.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,u(t)?"[".concat(t.join("+"),"]"):t))},Ht.prototype.reverse=function(){return this.toCollection().reverse()},Ht.prototype.mapToClass=function(t){var e,n=this.db,a=this.name;function s(){return e!==null&&e.apply(this,arguments)||this}(this.schema.mappedClass=t).prototype instanceof ri&&((function(z,D){if(typeof D!="function"&&D!==null)throw new TypeError("Class extends value "+String(D)+" is not a constructor or null");function F(){this.constructor=z}i(z,D),z.prototype=D===null?Object.create(D):(F.prototype=D.prototype,new F)})(s,e=t),Object.defineProperty(s.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),s.prototype.table=function(){return a},t=s);for(var f=new Set,y=t.prototype;y;y=w(y))Object.getOwnPropertyNames(y).forEach(function(z){return f.add(z)});function O(z){if(!z)return z;var D,F=Object.create(t.prototype);for(D in z)if(!f.has(D))try{F[D]=z[D]}catch{}return F}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=O,this.hook("reading",O),t},Ht.prototype.defineClass=function(){return this.mapToClass(function(t){m(this,t)})},Ht.prototype.add=function(t,e){var n=this,a=this.schema.primKey,s=a.auto,f=a.keyPath,y=t;return f&&s&&(y=jn(f)(t)),this._trans("readwrite",function(O){return n.core.mutate({trans:O,type:"add",keys:e!=null?[e]:null,values:[y]})}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):O.lastResult}).then(function(O){if(f)try{G(t,f,O)}catch{}return O})},Ht.prototype.upsert=function(t,e){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:t}).then(function(f){var y=f??{};return si(y,e),a&&G(y,a,t),n.core.mutate({trans:s,type:"put",values:[y],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[e]}}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):!!f})})})},Ht.prototype.update=function(t,e){return typeof t!="object"||u(t)?this.where(":id").equals(t).modify(e):(t=nt(t,this.schema.primKey.keyPath),t===void 0?Yt(new mt.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(t).modify(e))},Ht.prototype.put=function(t,e){var n=this,a=this.schema.primKey,s=a.auto,f=a.keyPath,y=t;return f&&s&&(y=jn(f)(t)),this._trans("readwrite",function(O){return n.core.mutate({trans:O,type:"put",values:[y],keys:e!=null?[e]:null})}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):O.lastResult}).then(function(O){if(f)try{G(t,f,O)}catch{}return O})},Ht.prototype.delete=function(t){var e=this;return this._trans("readwrite",function(n){return e.core.mutate({trans:n,type:"delete",keys:[t]}).then(function(a){return Fn(e,[t],a)}).then(function(a){return a.numFailures?_t.reject(a.failures[0]):void 0})})},Ht.prototype.clear=function(){var t=this;return this._trans("readwrite",function(e){return t.core.mutate({trans:e,type:"deleteRange",range:ni}).then(function(n){return Fn(t,null,n)})}).then(function(e){return e.numFailures?_t.reject(e.failures[0]):void 0})},Ht.prototype.bulkGet=function(t){var e=this;return this._trans("readonly",function(n){return e.core.getMany({keys:t,trans:n}).then(function(a){return a.map(function(s){return e.hook.reading.fire(s)})})})},Ht.prototype.bulkAdd=function(t,e,n){var a=this,s=Array.isArray(e)?e:void 0,f=(n=n||(s?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(y){var D=a.schema.primKey,O=D.auto,D=D.keyPath;if(D&&s)throw new mt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var z=t.length,D=D&&O?t.map(jn(D)):t;return a.core.mutate({trans:y,type:"add",keys:s,values:D,wantResults:f}).then(function(B){var T=B.numFailures,U=B.results,I=B.lastResult,B=B.failures;if(T===0)return f?U:I;throw new qt("".concat(a.name,".bulkAdd(): ").concat(T," of ").concat(z," operations failed"),B)})})},Ht.prototype.bulkPut=function(t,e,n){var a=this,s=Array.isArray(e)?e:void 0,f=(n=n||(s?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(y){var D=a.schema.primKey,O=D.auto,D=D.keyPath;if(D&&s)throw new mt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var z=t.length,D=D&&O?t.map(jn(D)):t;return a.core.mutate({trans:y,type:"put",keys:s,values:D,wantResults:f}).then(function(B){var T=B.numFailures,U=B.results,I=B.lastResult,B=B.failures;if(T===0)return f?U:I;throw new qt("".concat(a.name,".bulkPut(): ").concat(T," of ").concat(z," operations failed"),B)})})},Ht.prototype.bulkUpdate=function(t){var e=this,n=this.core,a=t.map(function(y){return y.key}),s=t.map(function(y){return y.changes}),f=[];return this._trans("readwrite",function(y){return n.getMany({trans:y,keys:a,cache:"clone"}).then(function(O){var z=[],D=[];t.forEach(function(T,U){var I=T.key,B=T.changes,j=O[U];if(j){for(var L=0,q=Object.keys(B);L<q.length;L++){var H=q[L],J=B[H];if(H===e.schema.primKey.keyPath){if(Nt(J,I)!==0)throw new mt.Constraint("Cannot update primary key in bulkUpdate()")}else G(j,H,J)}f.push(U),z.push(I),D.push(j)}});var F=z.length;return n.mutate({trans:y,type:"put",keys:z,values:D,updates:{keys:a,changeSpecs:s}}).then(function(T){var U=T.numFailures,I=T.failures;if(U===0)return F;for(var B=0,j=Object.keys(I);B<j.length;B++){var L,q=j[B],H=f[Number(q)];H!=null&&(L=I[q],delete I[q],I[H]=L)}throw new qt("".concat(e.name,".bulkUpdate(): ").concat(U," of ").concat(F," operations failed"),I)})})})},Ht.prototype.bulkDelete=function(t){var e=this,n=t.length;return this._trans("readwrite",function(a){return e.core.mutate({trans:a,type:"delete",keys:t}).then(function(s){return Fn(e,t,s)})}).then(function(y){var s=y.numFailures,f=y.lastResult,y=y.failures;if(s===0)return f;throw new qt("".concat(e.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),y)})},Ht);function Ht(){}function gn(t){function e(y,O){if(O){for(var z=arguments.length,D=new Array(z-1);--z;)D[z-1]=arguments[z];return n[y].subscribe.apply(null,D),t}if(typeof y=="string")return n[y]}var n={};e.addEventType=f;for(var a=1,s=arguments.length;a<s;++a)f(arguments[a]);return e;function f(y,O,z){if(typeof y!="object"){var D;O=O||N;var F={subscribers:[],fire:z=z||It,subscribe:function(T){F.subscribers.indexOf(T)===-1&&(F.subscribers.push(T),F.fire=O(F.fire,T))},unsubscribe:function(T){F.subscribers=F.subscribers.filter(function(U){return U!==T}),F.fire=F.subscribers.reduce(O,z)}};return n[y]=e[y]=F}h(D=y).forEach(function(T){var U=D[T];if(u(U))f(T,D[T][0],D[T][1]);else{if(U!=="asap")throw new mt.InvalidArgument("Invalid event config");var I=f(T,ae,function(){for(var B=arguments.length,j=new Array(B);B--;)j[B]=arguments[B];I.subscribers.forEach(function(L){K(function(){L.apply(null,j)})})})}})}}function vn(t,e){return v(e).from({prototype:t}),e}function on(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function vr(t,e){t.filter=We(t.filter,e)}function yr(t,e,n){var a=t.replayFilter;t.replayFilter=a?function(){return We(a(),e())}:e,t.justLimit=n&&!a}function Nn(t,e){if(t.isPrimKey)return e.primaryKey;var n=e.getIndexByKeyPath(t.index);if(!n)throw new mt.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function ui(t,e,n){var a=Nn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:a,range:t.range}})}function Ln(t,e,n,a){var s=t.replayFilter?We(t.filter,t.replayFilter()):t.filter;if(t.or){var f={},y=function(O,z,D){var F,T;s&&!s(z,D,function(U){return z.stop(U)},function(U){return z.fail(U)})||((T=""+(F=z.primaryKey))=="[object ArrayBuffer]"&&(T=""+new Uint8Array(F)),_(f,T)||(f[T]=!0,e(O,z,D)))};return Promise.all([t.or._iterate(y,n),ci(ui(t,a,n),t.algorithm,y,!t.keysOnly&&t.valueMapper)])}return ci(ui(t,a,n),We(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function ci(t,e,n,a){var s=Vt(a?function(f,y,O){return n(a(f),y,O)}:n);return t.then(function(f){if(f)return f.start(function(){var y=function(){return f.continue()};e&&!e(f,function(O){return y=O},function(O){f.stop(O),y=It},function(O){f.fail(O),y=It})||s(f.value,f,function(O){return y=O}),y()})})}var _a=(Ut.prototype._read=function(t,e){var n=this._ctx;return n.error?n.table._trans(null,Yt.bind(null,n.error)):n.table._trans("readonly",t).then(e)},Ut.prototype._write=function(t){var e=this._ctx;return e.error?e.table._trans(null,Yt.bind(null,e.error)):e.table._trans("readwrite",t,"locked")},Ut.prototype._addAlgorithm=function(t){var e=this._ctx;e.algorithm=We(e.algorithm,t)},Ut.prototype._iterate=function(t,e){return Ln(this._ctx,t,e,this._ctx.table.core)},Ut.prototype.clone=function(t){var e=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return t&&m(n,t),e._ctx=n,e},Ut.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ut.prototype.each=function(t){var e=this._ctx;return this._read(function(n){return Ln(e,t,n,e.table.core)})},Ut.prototype.count=function(t){var e=this;return this._read(function(n){var a=e._ctx,s=a.table.core;if(on(a,!0))return s.count({trans:n,query:{index:Nn(a,s.schema),range:a.range}}).then(function(y){return Math.min(y,a.limit)});var f=0;return Ln(a,function(){return++f,!1},n,s).then(function(){return f})}).then(t)},Ut.prototype.sortBy=function(t,e){var n=t.split(".").reverse(),a=n[0],s=n.length-1;function f(z,D){return D?f(z[n[D]],D-1):z[a]}var y=this._ctx.dir==="next"?1:-1;function O(z,D){return Nt(f(z,s),f(D,s))*y}return this.toArray(function(z){return z.sort(O)}).then(e)},Ut.prototype.toArray=function(t){var e=this;return this._read(function(n){var a=e._ctx;if(a.dir==="next"&&on(a,!0)&&0<a.limit){var s=a.valueMapper,f=Nn(a,a.table.core.schema);return a.table.core.query({trans:n,limit:a.limit,values:!0,query:{index:f,range:a.range}}).then(function(O){return O=O.result,s?O.map(s):O})}var y=[];return Ln(a,function(O){return y.push(O)},n,a.table.core).then(function(){return y})},t)},Ut.prototype.offset=function(t){var e=this._ctx;return t<=0||(e.offset+=t,on(e)?yr(e,function(){var n=t;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):yr(e,function(){var n=t;return function(){return--n<0}})),this},Ut.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),yr(this._ctx,function(){var e=t;return function(n,a,s){return--e<=0&&a(s),0<=e}},!0),this},Ut.prototype.until=function(t,e){return vr(this._ctx,function(n,a,s){return!t(n.value)||(a(s),e)}),this},Ut.prototype.first=function(t){return this.limit(1).toArray(function(e){return e[0]}).then(t)},Ut.prototype.last=function(t){return this.reverse().first(t)},Ut.prototype.filter=function(t){var e;return vr(this._ctx,function(n){return t(n.value)}),(e=this._ctx).isMatch=We(e.isMatch,t),this},Ut.prototype.and=function(t){return this.filter(t)},Ut.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},Ut.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ut.prototype.desc=function(){return this.reverse()},Ut.prototype.eachKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,a){t(a.key,a)})},Ut.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},Ut.prototype.eachPrimaryKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,a){t(a.primaryKey,a)})},Ut.prototype.keys=function(t){var e=this._ctx;e.keysOnly=!e.isMatch;var n=[];return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(t)},Ut.prototype.primaryKeys=function(t){var e=this._ctx;if(e.dir==="next"&&on(e,!0)&&0<e.limit)return this._read(function(a){var s=Nn(e,e.table.core.schema);return e.table.core.query({trans:a,values:!1,limit:e.limit,query:{index:s,range:e.range}})}).then(function(a){return a.result}).then(t);e.keysOnly=!e.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(t)},Ut.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},Ut.prototype.firstKey=function(t){return this.limit(1).keys(function(e){return e[0]}).then(t)},Ut.prototype.lastKey=function(t){return this.reverse().firstKey(t)},Ut.prototype.distinct=function(){var t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];if(!t||!t.multi)return this;var e={};return vr(this._ctx,function(s){var a=s.primaryKey.toString(),s=_(e,a);return e[a]=!0,!s}),this},Ut.prototype.modify=function(t){var e=this,n=this._ctx;return this._write(function(a){var s=typeof t=="function"?t:function(j){return si(j,t)},f=n.table.core,D=f.schema.primaryKey,y=D.outbound,O=D.extractKey,z=200,D=e.db._options.modifyChunkSize;D&&(z=typeof D=="object"?D[f.name]||D["*"]||200:D);function F(j,H){var q=H.failures,H=H.numFailures;U+=j-H;for(var J=0,rt=h(q);J<rt.length;J++){var ft=rt[J];T.push(q[ft])}}var T=[],U=0,I=[],B=t===hi;return e.clone().primaryKeys().then(function(j){function L(H){var J=Math.min(z,j.length-H),rt=j.slice(H,H+J);return(B?Promise.resolve([]):f.getMany({trans:a,keys:rt,cache:"immutable"})).then(function(ft){var bt=[],ht=[],gt=y?[]:null,wt=B?rt:[];if(!B)for(var yt=0;yt<J;++yt){var St=ft[yt],zt={value:Q(St),primKey:j[H+yt]};s.call(zt,zt.value,zt)!==!1&&(zt.value==null?wt.push(j[H+yt]):y||Nt(O(St),O(zt.value))===0?(ht.push(zt.value),y&&gt.push(j[H+yt])):(wt.push(j[H+yt]),bt.push(zt.value)))}return Promise.resolve(0<bt.length&&f.mutate({trans:a,type:"add",values:bt}).then(function(Dt){for(var Bt in Dt.failures)wt.splice(parseInt(Bt),1);F(bt.length,Dt)})).then(function(){return(0<ht.length||q&&typeof t=="object")&&f.mutate({trans:a,type:"put",keys:gt,values:ht,criteria:q,changeSpec:typeof t!="function"&&t,isAdditionalChunk:0<H}).then(function(Dt){return F(ht.length,Dt)})}).then(function(){return(0<wt.length||q&&B)&&f.mutate({trans:a,type:"delete",keys:wt,criteria:q,isAdditionalChunk:0<H}).then(function(Dt){return Fn(n.table,wt,Dt)}).then(function(Dt){return F(wt.length,Dt)})}).then(function(){return j.length>H+J&&L(H+z)})})}var q=on(n)&&n.limit===1/0&&(typeof t!="function"||B)&&{index:n.index,range:n.range};return L(0).then(function(){if(0<T.length)throw new vt("Error modifying one or more objects",T,U,I);return j.length})})})},Ut.prototype.delete=function(){var t=this._ctx,e=t.range;return!on(t)||t.table.schema.yProps||!t.isPrimKey&&e.type!==3?this.modify(hi):this._write(function(n){var a=t.table.core.schema.primaryKey,s=e;return t.table.core.count({trans:n,query:{index:a,range:s}}).then(function(f){return t.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(z){var O=z.failures,z=z.numFailures;if(z)throw new vt("Could not delete some values",Object.keys(O).map(function(D){return O[D]}),f-z);return f-z})})})},Ut);function Ut(){}var hi=function(t,e){return e.value=null};function xa(t,e){return t<e?-1:t===e?0:1}function ka(t,e){return e<t?-1:t===e?0:1}function me(t,e,n){return t=t instanceof fi?new t.Collection(t):t,t._ctx.error=new(n||TypeError)(e),t}function sn(t){return new t.Collection(t,function(){return di("")}).limit(0)}function Un(t,e,n,a){var s,f,y,O,z,D,F,T=n.length;if(!n.every(function(B){return typeof B=="string"}))return me(t,ei);function U(B){s=B==="next"?function(L){return L.toUpperCase()}:function(L){return L.toLowerCase()},f=B==="next"?function(L){return L.toLowerCase()}:function(L){return L.toUpperCase()},y=B==="next"?xa:ka;var j=n.map(function(L){return{lower:f(L),upper:s(L)}}).sort(function(L,q){return y(L.lower,q.lower)});O=j.map(function(L){return L.upper}),z=j.map(function(L){return L.lower}),F=(D=B)==="next"?"":a}U("next"),t=new t.Collection(t,function(){return je(O[0],z[T-1]+a)}),t._ondirectionchange=function(B){U(B)};var I=0;return t._addAlgorithm(function(B,j,L){var q=B.key;if(typeof q!="string")return!1;var H=f(q);if(e(H,z,I))return!0;for(var J=null,rt=I;rt<T;++rt){var ft=(function(bt,ht,gt,wt,yt,St){for(var zt=Math.min(bt.length,wt.length),Dt=-1,Bt=0;Bt<zt;++Bt){var ge=ht[Bt];if(ge!==wt[Bt])return yt(bt[Bt],gt[Bt])<0?bt.substr(0,Bt)+gt[Bt]+gt.substr(Bt+1):yt(bt[Bt],wt[Bt])<0?bt.substr(0,Bt)+wt[Bt]+gt.substr(Bt+1):0<=Dt?bt.substr(0,Dt)+ht[Dt]+gt.substr(Dt+1):null;yt(bt[Bt],ge)<0&&(Dt=Bt)}return zt<wt.length&&St==="next"?bt+gt.substr(bt.length):zt<bt.length&&St==="prev"?bt.substr(0,gt.length):Dt<0?null:bt.substr(0,Dt)+wt[Dt]+gt.substr(Dt+1)})(q,H,O[rt],z[rt],y,D);ft===null&&J===null?I=rt+1:(J===null||0<y(J,ft))&&(J=ft)}return j(J!==null?function(){B.continue(J+F)}:L),!1}),t}function je(t,e,n,a){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:a}}function di(t){return{type:1,lower:t,upper:t}}var fi=(Object.defineProperty(ie.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ie.prototype.between=function(t,e,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(t,e)||this._cmp(t,e)===0&&(n||a)&&(!n||!a)?sn(this):new this.Collection(this,function(){return je(t,e,!n,!a)})}catch{return me(this,Oe)}},ie.prototype.equals=function(t){return t==null?me(this,Oe):new this.Collection(this,function(){return di(t)})},ie.prototype.above=function(t){return t==null?me(this,Oe):new this.Collection(this,function(){return je(t,void 0,!0)})},ie.prototype.aboveOrEqual=function(t){return t==null?me(this,Oe):new this.Collection(this,function(){return je(t,void 0,!1)})},ie.prototype.below=function(t){return t==null?me(this,Oe):new this.Collection(this,function(){return je(void 0,t,!1,!0)})},ie.prototype.belowOrEqual=function(t){return t==null?me(this,Oe):new this.Collection(this,function(){return je(void 0,t)})},ie.prototype.startsWith=function(t){return typeof t!="string"?me(this,ei):this.between(t,t+qe,!0,!0)},ie.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):Un(this,function(e,n){return e.indexOf(n[0])===0},[t],qe)},ie.prototype.equalsIgnoreCase=function(t){return Un(this,function(e,n){return e===n[0]},[t],"")},ie.prototype.anyOfIgnoreCase=function(){var t=Ot.apply(st,arguments);return t.length===0?sn(this):Un(this,function(e,n){return n.indexOf(e)!==-1},t,"")},ie.prototype.startsWithAnyOfIgnoreCase=function(){var t=Ot.apply(st,arguments);return t.length===0?sn(this):Un(this,function(e,n){return n.some(function(a){return e.indexOf(a)===0})},t,qe)},ie.prototype.anyOf=function(){var t=this,e=Ot.apply(st,arguments),n=this._cmp;try{e.sort(n)}catch{return me(this,Oe)}if(e.length===0)return sn(this);var a=new this.Collection(this,function(){return je(e[0],e[e.length-1])});a._ondirectionchange=function(f){n=f==="next"?t._ascending:t._descending,e.sort(n)};var s=0;return a._addAlgorithm(function(f,y,O){for(var z=f.key;0<n(z,e[s]);)if(++s===e.length)return y(O),!1;return n(z,e[s])===0||(y(function(){f.continue(e[s])}),!1)}),a},ie.prototype.notEqual=function(t){return this.inAnyRange([[-1/0,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ie.prototype.noneOf=function(){var t=Ot.apply(st,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return me(this,Oe)}var e=t.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return e.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(e,{includeLowers:!1,includeUppers:!1})},ie.prototype.inAnyRange=function(q,e){var n=this,a=this._cmp,s=this._ascending,f=this._descending,y=this._min,O=this._max;if(q.length===0)return sn(this);if(!q.every(function(H){return H[0]!==void 0&&H[1]!==void 0&&s(H[0],H[1])<=0}))return me(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",mt.InvalidArgument);var z=!e||e.includeLowers!==!1,D=e&&e.includeUppers===!0,F,T=s;function U(H,J){return T(H[0],J[0])}try{(F=q.reduce(function(H,J){for(var rt=0,ft=H.length;rt<ft;++rt){var bt=H[rt];if(a(J[0],bt[1])<0&&0<a(J[1],bt[0])){bt[0]=y(bt[0],J[0]),bt[1]=O(bt[1],J[1]);break}}return rt===ft&&H.push(J),H},[])).sort(U)}catch{return me(this,Oe)}var I=0,B=D?function(H){return 0<s(H,F[I][1])}:function(H){return 0<=s(H,F[I][1])},j=z?function(H){return 0<f(H,F[I][0])}:function(H){return 0<=f(H,F[I][0])},L=B,q=new this.Collection(this,function(){return je(F[0][0],F[F.length-1][1],!z,!D)});return q._ondirectionchange=function(H){T=H==="next"?(L=B,s):(L=j,f),F.sort(U)},q._addAlgorithm(function(H,J,rt){for(var ft,bt=H.key;L(bt);)if(++I===F.length)return J(rt),!1;return!B(ft=bt)&&!j(ft)||(n._cmp(bt,F[I][1])===0||n._cmp(bt,F[I][0])===0||J(function(){T===s?H.continue(F[I][0]):H.continue(F[I][1])}),!1)}),q},ie.prototype.startsWithAnyOf=function(){var t=Ot.apply(st,arguments);return t.every(function(e){return typeof e=="string"})?t.length===0?sn(this):this.inAnyRange(t.map(function(e){return[e,e+qe]})):me(this,"startsWithAnyOf() only works with strings")},ie);function ie(){}function ke(t){return Vt(function(e){return yn(e),t(e.target.error),!1})}function yn(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}var bn="storagemutated",br="x-storagemutated-1",Fe=gn(null,bn),Ca=(Ce.prototype._lock=function(){return W(!Ct.global),++this._reculock,this._reculock!==1||Ct.global||(Ct.lockOwnerFor=this),this},Ce.prototype._unlock=function(){if(W(!Ct.global),--this._reculock==0)for(Ct.global||(Ct.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var t=this._blockedFuncs.shift();try{Ke(t[1],t[0])}catch{}}return this},Ce.prototype._locked=function(){return this._reculock&&Ct.lockOwnerFor!==this},Ce.prototype.create=function(t){var e=this;if(!this.mode)return this;var n=this.db.idbdb,a=this.db._state.dbOpenError;if(W(!this.idbtrans),!t&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new mt.DatabaseClosed(a);case"MissingAPIError":throw new mt.MissingAPI(a.message,a);default:throw new mt.OpenFailed(a)}if(!this.active)throw new mt.TransactionInactive;return W(this._completion._state===null),(t=this.idbtrans=t||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Vt(function(s){yn(s),e._reject(t.error)}),t.onabort=Vt(function(s){yn(s),e.active&&e._reject(new mt.Abort(t.error)),e.active=!1,e.on("abort").fire(s)}),t.oncomplete=Vt(function(){e.active=!1,e._resolve(),"mutatedParts"in t&&Fe.storagemutated.fire(t.mutatedParts)}),this},Ce.prototype._promise=function(t,e,n){var a=this;if(t==="readwrite"&&this.mode!=="readwrite")return Yt(new mt.ReadOnly("Transaction is readonly"));if(!this.active)return Yt(new mt.TransactionInactive);if(this._locked())return new _t(function(f,y){a._blockedFuncs.push([function(){a._promise(t,e,n).then(f,y)},Ct])});if(n)return Ie(function(){var f=new _t(function(y,O){a._lock();var z=e(y,O,a);z&&z.then&&z.then(y,O)});return f.finally(function(){return a._unlock()}),f._lib=!0,f});var s=new _t(function(f,y){var O=e(f,y,a);O&&O.then&&O.then(f,y)});return s._lib=!0,s},Ce.prototype._root=function(){return this.parent?this.parent._root():this},Ce.prototype.waitFor=function(t){var e,n=this._root(),a=_t.resolve(t);n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],e=n.idbtrans.objectStore(n.storeNames[0]),(function f(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(e.get(-1/0).onsuccess=f)})());var s=n._waitingFor;return new _t(function(f,y){a.then(function(O){return n._waitingQueue.push(Vt(f.bind(null,O)))},function(O){return n._waitingQueue.push(Vt(y.bind(null,O)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},Ce.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new mt.Abort))},Ce.prototype.table=function(t){var e=this._memoizedTables||(this._memoizedTables={});if(_(e,t))return e[t];var n=this.schema[t];if(!n)throw new mt.NotFound("Table "+t+" not part of transaction");return n=new this.db.Table(t,n,this),n.core=this.db.core.table(t),e[t]=n},Ce);function Ce(){}function wr(t,e,n,a,s,f,y,O){return{name:t,keyPath:e,unique:n,multi:a,auto:s,compound:f,src:(n&&!y?"&":"")+(a?"*":"")+(s?"++":"")+pi(e),type:O}}function pi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function _r(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,f,y){return y=a(f,y),y&&(s[y[0]]=y[1]),s},{}))};var a}var wn=function(t){try{return t.only([[]]),wn=function(){return[[]]},[[]]}catch{return wn=function(){return qe},qe}};function xr(t){return t==null?function(){}:typeof t=="string"?(e=t).split(".").length===1?function(n){return n[e]}:function(n){return nt(n,e)}:function(n){return nt(n,t)};var e}function mi(t){return[].slice.call(t)}var Sa=0;function _n(t){return t==null?":id":typeof t=="string"?t:"[".concat(t.join("+"),"]")}function Ea(t,e,z){function a(L){if(L.type===3)return null;if(L.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var I=L.lower,B=L.upper,j=L.lowerOpen,L=L.upperOpen;return I===void 0?B===void 0?null:e.upperBound(B,!!L):B===void 0?e.lowerBound(I,!!j):e.bound(I,B,!!j,!!L)}function s(U){var I,B=U.name;return{name:B,schema:U,mutate:function(j){var L=j.trans,q=j.type,H=j.keys,J=j.values,rt=j.range;return new Promise(function(ft,bt){ft=Vt(ft);var ht=L.objectStore(B),gt=ht.keyPath==null,wt=q==="put"||q==="add";if(!wt&&q!=="delete"&&q!=="deleteRange")throw new Error("Invalid operation type: "+q);var yt,St=(H||J||{length:1}).length;if(H&&J&&H.length!==J.length)throw new Error("Given keys array must have same length as given values array.");if(St===0)return ft({numFailures:0,failures:{},results:[],lastResult:void 0});function zt(de){++ge,yn(de)}var Dt=[],Bt=[],ge=0;if(q==="deleteRange"){if(rt.type===4)return ft({numFailures:ge,failures:Bt,results:[],lastResult:void 0});rt.type===3?Dt.push(yt=ht.clear()):Dt.push(yt=ht.delete(a(rt)))}else{var gt=wt?gt?[J,H]:[J,null]:[H,null],Rt=gt[0],le=gt[1];if(wt)for(var ue=0;ue<St;++ue)Dt.push(yt=le&&le[ue]!==void 0?ht[q](Rt[ue],le[ue]):ht[q](Rt[ue])),yt.onerror=zt;else for(ue=0;ue<St;++ue)Dt.push(yt=ht[q](Rt[ue])),yt.onerror=zt}function tr(de){de=de.target.result,Dt.forEach(function(Ve,Nr){return Ve.error!=null&&(Bt[Nr]=Ve.error)}),ft({numFailures:ge,failures:Bt,results:q==="delete"?H:Dt.map(function(Ve){return Ve.result}),lastResult:de})}yt.onerror=function(de){zt(de),tr(de)},yt.onsuccess=tr})},getMany:function(j){var L=j.trans,q=j.keys;return new Promise(function(H,J){H=Vt(H);for(var rt,ft=L.objectStore(B),bt=q.length,ht=new Array(bt),gt=0,wt=0,yt=function(Dt){Dt=Dt.target,ht[Dt._pos]=Dt.result,++wt===gt&&H(ht)},St=ke(J),zt=0;zt<bt;++zt)q[zt]!=null&&((rt=ft.get(q[zt]))._pos=zt,rt.onsuccess=yt,rt.onerror=St,++gt);gt===0&&H(ht)})},get:function(j){var L=j.trans,q=j.key;return new Promise(function(H,J){H=Vt(H);var rt=L.objectStore(B).get(q);rt.onsuccess=function(ft){return H(ft.target.result)},rt.onerror=ke(J)})},query:(I=D,function(j){return new Promise(function(L,q){L=Vt(L);var H,J,rt,gt=j.trans,ft=j.values,bt=j.limit,yt=j.query,ht=bt===1/0?void 0:bt,wt=yt.index,yt=yt.range,gt=gt.objectStore(B),wt=wt.isPrimaryKey?gt:gt.index(wt.name),yt=a(yt);if(bt===0)return L({result:[]});I?((ht=ft?wt.getAll(yt,ht):wt.getAllKeys(yt,ht)).onsuccess=function(St){return L({result:St.target.result})},ht.onerror=ke(q)):(H=0,J=!ft&&"openKeyCursor"in wt?wt.openKeyCursor(yt):wt.openCursor(yt),rt=[],J.onsuccess=function(St){var zt=J.result;return zt?(rt.push(ft?zt.value:zt.primaryKey),++H===bt?L({result:rt}):void zt.continue()):L({result:rt})},J.onerror=ke(q))})}),openCursor:function(j){var L=j.trans,q=j.values,H=j.query,J=j.reverse,rt=j.unique;return new Promise(function(ft,bt){ft=Vt(ft);var wt=H.index,ht=H.range,gt=L.objectStore(B),gt=wt.isPrimaryKey?gt:gt.index(wt.name),wt=J?rt?"prevunique":"prev":rt?"nextunique":"next",yt=!q&&"openKeyCursor"in gt?gt.openKeyCursor(a(ht),wt):gt.openCursor(a(ht),wt);yt.onerror=ke(bt),yt.onsuccess=Vt(function(St){var zt,Dt,Bt,ge,Rt=yt.result;Rt?(Rt.___id=++Sa,Rt.done=!1,zt=Rt.continue.bind(Rt),Dt=(Dt=Rt.continuePrimaryKey)&&Dt.bind(Rt),Bt=Rt.advance.bind(Rt),ge=function(){throw new Error("Cursor not stopped")},Rt.trans=L,Rt.stop=Rt.continue=Rt.continuePrimaryKey=Rt.advance=function(){throw new Error("Cursor not started")},Rt.fail=Vt(bt),Rt.next=function(){var le=this,ue=1;return this.start(function(){return ue--?le.continue():le.stop()}).then(function(){return le})},Rt.start=function(le){function ue(){if(yt.result)try{le()}catch(de){Rt.fail(de)}else Rt.done=!0,Rt.start=function(){throw new Error("Cursor behind last entry")},Rt.stop()}var tr=new Promise(function(de,Ve){de=Vt(de),yt.onerror=ke(Ve),Rt.fail=Ve,Rt.stop=function(Nr){Rt.stop=Rt.continue=Rt.continuePrimaryKey=Rt.advance=ge,de(Nr)}});return yt.onsuccess=Vt(function(de){yt.onsuccess=ue,ue()}),Rt.continue=zt,Rt.continuePrimaryKey=Dt,Rt.advance=Bt,ue(),tr},ft(Rt)):ft(null)},bt)})},count:function(j){var L=j.query,q=j.trans,H=L.index,J=L.range;return new Promise(function(rt,ft){var bt=q.objectStore(B),ht=H.isPrimaryKey?bt:bt.index(H.name),bt=a(J),ht=bt?ht.count(bt):ht.count();ht.onsuccess=Vt(function(gt){return rt(gt.target.result)}),ht.onerror=ke(ft)})}}}var f,y,O,F=(y=z,O=mi((f=t).objectStoreNames),{schema:{name:f.name,tables:O.map(function(U){return y.objectStore(U)}).map(function(U){var I=U.keyPath,L=U.autoIncrement,B=u(I),j={},L={name:U.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:I==null,compound:B,keyPath:I,autoIncrement:L,unique:!0,extractKey:xr(I)},indexes:mi(U.indexNames).map(function(q){return U.index(q)}).map(function(rt){var H=rt.name,J=rt.unique,ft=rt.multiEntry,rt=rt.keyPath,ft={name:H,compound:u(rt),keyPath:rt,unique:J,multiEntry:ft,extractKey:xr(rt)};return j[_n(rt)]=ft}),getIndexByKeyPath:function(q){return j[_n(q)]}};return j[":id"]=L.primaryKey,I!=null&&(j[_n(I)]=L.primaryKey),L})},hasGetAll:0<O.length&&"getAll"in y.objectStore(O[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),z=F.schema,D=F.hasGetAll,F=z.tables.map(s),T={};return F.forEach(function(U){return T[U.name]=U}),{stack:"dbcore",transaction:t.transaction.bind(t),table:function(U){if(!T[U])throw new Error("Table '".concat(U,"' not found"));return T[U]},MIN_KEY:-1/0,MAX_KEY:wn(e),schema:z}}function Aa(t,e,n,a){var s=n.IDBKeyRange;return n.indexedDB,{dbcore:(a=Ea(e,s,a),t.dbcore.reduce(function(f,y){return y=y.create,d(d({},f),y(f))},a))}}function Kn(t,a){var n=a.db,a=Aa(t._middlewares,n,t._deps,a);t.core=a.dbcore,t.tables.forEach(function(s){var f=s.name;t.core.schema.tables.some(function(y){return y.name===f})&&(s.core=t.core.table(f),t[f]instanceof t.Table&&(t[f].core=s.core))})}function qn(t,e,n,a){n.forEach(function(s){var f=a[s];e.forEach(function(y){var O=(function z(D,F){return k(D,F)||(D=w(D))&&z(D,F)})(y,s);(!O||"value"in O&&O.value===void 0)&&(y===t.Transaction.prototype||y instanceof t.Transaction?E(y,s,{get:function(){return this.table(s)},set:function(z){g(this,s,{value:z,writable:!0,configurable:!0,enumerable:!0})}}):y[s]=new t.Table(s,f))})})}function kr(t,e){e.forEach(function(n){for(var a in n)n[a]instanceof t.Table&&delete n[a]})}function Oa(t,e){return t._cfg.version-e._cfg.version}function Pa(t,e,n,a){var s=t._dbSchema;n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=_r("$meta",vi("")[0],[]),t._storeNames.push("$meta"));var f=t._createTransaction("readwrite",t._storeNames,s);f.create(n),f._completion.catch(a);var y=f._reject.bind(f),O=Ct.transless||Ct;Ie(function(){return Ct.trans=f,Ct.transless=O,e!==0?(Kn(t,n),D=e,((z=f).storeNames.includes("$meta")?z.table("$meta").get("version").then(function(F){return F??D}):_t.resolve(D)).then(function(F){return U=F,I=f,B=n,j=[],F=(T=t)._versions,L=T._dbSchema=Zn(0,T.idbdb,B),(F=F.filter(function(q){return q._cfg.version>=U})).length!==0?(F.forEach(function(q){j.push(function(){var H=L,J=q._cfg.dbschema;Hn(T,H,B),Hn(T,J,B),L=T._dbSchema=J;var rt=Cr(H,J);rt.add.forEach(function(wt){Sr(B,wt[0],wt[1].primKey,wt[1].indexes)}),rt.change.forEach(function(wt){if(wt.recreate)throw new mt.Upgrade("Not yet support for changing primary key");var yt=B.objectStore(wt.name);wt.add.forEach(function(St){return Wn(yt,St)}),wt.change.forEach(function(St){yt.deleteIndex(St.name),Wn(yt,St)}),wt.del.forEach(function(St){return yt.deleteIndex(St)})});var ft=q._cfg.contentUpgrade;if(ft&&q._cfg.version>U){Kn(T,B),I._memoizedTables={};var bt=ut(J);rt.del.forEach(function(wt){bt[wt]=H[wt]}),kr(T,[T.Transaction.prototype]),qn(T,[T.Transaction.prototype],h(bt),bt),I.schema=bt;var ht,gt=X(ft);return gt&&rn(),rt=_t.follow(function(){var wt;(ht=ft(I))&&gt&&(wt=Me.bind(null,null),ht.then(wt,wt))}),ht&&typeof ht.then=="function"?_t.resolve(ht):rt.then(function(){return ht})}}),j.push(function(H){var J,rt,ft=q._cfg.dbschema;J=ft,rt=H,[].slice.call(rt.db.objectStoreNames).forEach(function(bt){return J[bt]==null&&rt.db.deleteObjectStore(bt)}),kr(T,[T.Transaction.prototype]),qn(T,[T.Transaction.prototype],T._storeNames,T._dbSchema),I.schema=T._dbSchema}),j.push(function(H){T.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(T.idbdb.version/10)===q._cfg.version?(T.idbdb.deleteObjectStore("$meta"),delete T._dbSchema.$meta,T._storeNames=T._storeNames.filter(function(J){return J!=="$meta"})):H.objectStore("$meta").put(q._cfg.version,"version"))})}),(function q(){return j.length?_t.resolve(j.shift()(I.idbtrans)).then(q):_t.resolve()})().then(function(){gi(L,B)})):_t.resolve();var T,U,I,B,j,L}).catch(y)):(h(s).forEach(function(F){Sr(n,F,s[F].primKey,s[F].indexes)}),Kn(t,n),void _t.follow(function(){return t.on.populate.fire(f)}).catch(y));var z,D})}function Ta(t,e){gi(t._dbSchema,e),e.db.version%10!=0||e.objectStoreNames.contains("$meta")||e.db.createObjectStore("$meta").add(Math.ceil(e.db.version/10-1),"version");var n=Zn(0,t.idbdb,e);Hn(t,t._dbSchema,e);for(var a=0,s=Cr(n,t._dbSchema).change;a<s.length;a++){var f=(function(y){if(y.change.length||y.recreate)return console.warn("Unable to patch indexes of table ".concat(y.name," because it has changes on the type of index or primary key.")),{value:void 0};var O=e.objectStore(y.name);y.add.forEach(function(z){at&&console.debug("Dexie upgrade patch: Creating missing index ".concat(y.name,".").concat(z.src)),Wn(O,z)})})(s[a]);if(typeof f=="object")return f.value}}function Cr(t,e){var n,a={del:[],add:[],change:[]};for(n in t)e[n]||a.del.push(n);for(n in e){var s=t[n],f=e[n];if(s){var y={name:n,def:f,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(f.primKey.keyPath||"")||s.primKey.auto!==f.primKey.auto)y.recreate=!0,a.change.push(y);else{var O=s.idxByName,z=f.idxByName,D=void 0;for(D in O)z[D]||y.del.push(D);for(D in z){var F=O[D],T=z[D];F?F.src!==T.src&&y.change.push(T):y.add.push(T)}(0<y.del.length||0<y.add.length||0<y.change.length)&&a.change.push(y)}}else a.add.push([n,f])}return a}function Sr(t,e,n,a){var s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return a.forEach(function(f){return Wn(s,f)}),s}function gi(t,e){h(t).forEach(function(n){e.db.objectStoreNames.contains(n)||(at&&console.debug("Dexie: Creating missing table",n),Sr(e,n,t[n].primKey,t[n].indexes))})}function Wn(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Zn(t,e,n){var a={};return P(e.objectStoreNames,0).forEach(function(s){for(var f=n.objectStore(s),y=wr(pi(D=f.keyPath),D||"",!0,!1,!!f.autoIncrement,D&&typeof D!="string",!0),O=[],z=0;z<f.indexNames.length;++z){var F=f.index(f.indexNames[z]),D=F.keyPath,F=wr(F.name,D,!!F.unique,!!F.multiEntry,!1,D&&typeof D!="string",!1);O.push(F)}a[s]=_r(s,y,O)}),a}function Hn(t,e,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var f=a[s],y=n.objectStore(f);t._hasGetAll="getAll"in y;for(var O=0;O<y.indexNames.length;++O){var z=y.indexNames[O],D=y.index(z).keyPath,F=typeof D=="string"?D:"["+P(D).join("+")+"]";!e[f]||(D=e[f].idxByName[F])&&(D.name=z,delete e[f].idxByName[F],e[f].idxByName[z]=D)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}function vi(t){return t.split(",").map(function(e,n){var f=e.split(":"),a=(s=f[1])===null||s===void 0?void 0:s.trim(),s=(e=f[0].trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return wr(s,f||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),u(f),n===0,a)})}var $a=(ln.prototype._createTableSchema=_r,ln.prototype._parseIndexSyntax=vi,ln.prototype._parseStoresSpec=function(t,e){var n=this;h(t).forEach(function(a){if(t[a]!==null){var s=n._parseIndexSyntax(t[a]),f=s.shift();if(!f)throw new mt.Schema("Invalid schema for table "+a+": "+t[a]);if(f.unique=!0,f.multi)throw new mt.Schema("Primary key cannot be multiEntry*");s.forEach(function(y){if(y.auto)throw new mt.Schema("Only primary key can be marked as autoIncrement (++)");if(!y.keyPath)throw new mt.Schema("Index must have a name and cannot be an empty string")}),s=n._createTableSchema(a,f,s),e[a]=s}})},ln.prototype.stores=function(n){var e=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,n):n;var n=e._versions,a={},s={};return n.forEach(function(f){m(a,f._cfg.storesSource),s=f._cfg.dbschema={},f._parseStoresSpec(a,s)}),e._dbSchema=s,kr(e,[e._allTables,e,e.Transaction.prototype]),qn(e,[e._allTables,e,e.Transaction.prototype,this._cfg.tables],h(s),s),e._storeNames=h(s),this},ln.prototype.upgrade=function(t){return this._cfg.contentUpgrade=ot(this._cfg.contentUpgrade||It,t),this},ln);function ln(){}function Er(t,e){var n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Pe(Bn,{addons:[],indexedDB:t,IDBKeyRange:e})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function Ar(t){return t&&typeof t.databases=="function"}function Or(t){return Ie(function(){return Ct.letThrough=!0,t()})}function Pr(t){return!("from"in t)}var se=function(t,e){if(!this){var n=new se;return t&&"d"in t&&m(n,t),n}m(this,arguments.length?{d:1,from:t,to:1<arguments.length?e:t}:{d:0})};function xn(t,e,n){var a=Nt(e,n);if(!isNaN(a)){if(0<a)throw RangeError();if(Pr(t))return m(t,{from:e,to:n,d:1});var s=t.l,a=t.r;if(Nt(n,t.from)<0)return s?xn(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},bi(t);if(0<Nt(e,t.to))return a?xn(a,e,n):t.r={from:e,to:n,d:1,l:null,r:null},bi(t);Nt(e,t.from)<0&&(t.from=e,t.l=null,t.d=a?a.d+1:1),0<Nt(n,t.to)&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1),n=!t.r,s&&!t.l&&kn(t,s),a&&n&&kn(t,a)}}function kn(t,e){Pr(e)||(function n(a,z){var f=z.from,y=z.to,O=z.l,z=z.r;xn(a,f,y),O&&n(a,O),z&&n(a,z)})(t,e)}function yi(t,e){var n=Vn(e),a=n.next();if(a.done)return!1;for(var s=a.value,f=Vn(t),y=f.next(s.from),O=y.value;!a.done&&!y.done;){if(Nt(O.from,s.to)<=0&&0<=Nt(O.to,s.from))return!0;Nt(s.from,O.from)<0?s=(a=n.next(O.from)).value:O=(y=f.next(s.from)).value}return!1}function Vn(t){var e=Pr(t)?null:{s:0,n:t};return{next:function(n){for(var a=0<arguments.length;e;)switch(e.s){case 0:if(e.s=1,a)for(;e.n.l&&Nt(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!a||Nt(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function bi(t){var e,n,a=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=1<a?"r":a<-1?"l":"";s&&(e=s=="r"?"l":"r",n=d({},t),a=t[s],t.from=a.from,t.to=a.to,t[s]=a[s],n[s]=a[e],(t[e]=n).d=wi(n)),t.d=wi(t)}function wi(n){var e=n.r,n=n.l;return(e?n?Math.max(e.d,n.d):e.d:n?n.d:0)+1}function Xn(t,e){return h(e).forEach(function(n){t[n]?kn(t[n],e[n]):t[n]=(function a(s){var f,y,O={};for(f in s)_(s,f)&&(y=s[f],O[f]=!y||typeof y!="object"||Pt.has(y.constructor)?y:a(y));return O})(e[n])}),t}function Tr(t,e){return t.all||e.all||Object.keys(t).some(function(n){return e[n]&&yi(e[n],t[n])})}S(se.prototype,((be={add:function(t){return kn(this,t),this},addKey:function(t){return xn(this,t,t),this},addKeys:function(t){var e=this;return t.forEach(function(n){return xn(e,n,n)}),this},hasKey:function(t){var e=Vn(this).next(t).value;return e&&Nt(e.from,t)<=0&&0<=Nt(e.to,t)}})[Tt]=function(){return Vn(this)},be));var Ze={},$r={},Rr=!1;function Yn(t){Xn($r,t),Rr||(Rr=!0,setTimeout(function(){Rr=!1,zr($r,!($r={}))},0))}function zr(t,e){e===void 0&&(e=!1);var n=new Set;if(t.all)for(var a=0,s=Object.values(Ze);a<s.length;a++)_i(y=s[a],t,n,e);else for(var f in t){var y,O=/^idb\:\/\/(.*)\/(.*)\//.exec(f);O&&(f=O[1],O=O[2],(y=Ze["idb://".concat(f,"/").concat(O)])&&_i(y,t,n,e))}n.forEach(function(z){return z()})}function _i(t,e,n,a){for(var s=[],f=0,y=Object.entries(t.queries.query);f<y.length;f++){for(var O=y[f],z=O[0],D=[],F=0,T=O[1];F<T.length;F++){var U=T[F];Tr(e,U.obsSet)?U.subscribers.forEach(function(L){return n.add(L)}):a&&D.push(U)}a&&s.push([z,D])}if(a)for(var I=0,B=s;I<B.length;I++){var j=B[I],z=j[0],D=j[1];t.queries.query[z]=D}}function Ra(t){var e=t._state,n=t._deps.indexedDB;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(function(){return e.dbOpenError?Yt(e.dbOpenError):t});e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;var a=e.openCanceller,s=Math.round(10*t.verno),f=!1;function y(){if(e.openCanceller!==a)throw new mt.DatabaseClosed("db.open() was cancelled")}function O(){return new _t(function(U,I){if(y(),!n)throw new mt.MissingAPI;var B=t.name,j=e.autoSchema||!s?n.open(B):n.open(B,s);if(!j)throw new mt.MissingAPI;j.onerror=ke(I),j.onblocked=Vt(t._fireOnBlocked),j.onupgradeneeded=Vt(function(L){var q;F=j.transaction,e.autoSchema&&!t._options.allowEmptyDB?(j.onerror=yn,F.abort(),j.result.close(),(q=n.deleteDatabase(B)).onsuccess=q.onerror=Vt(function(){I(new mt.NoSuchDatabase("Database ".concat(B," doesnt exist")))})):(F.onerror=ke(I),L=L.oldVersion>Math.pow(2,62)?0:L.oldVersion,T=L<1,t.idbdb=j.result,f&&Ta(t,F),Pa(t,L/10,F,I))},I),j.onsuccess=Vt(function(){F=null;var L,q,H,J,rt,ft=t.idbdb=j.result,bt=P(ft.objectStoreNames);if(0<bt.length)try{var ht=ft.transaction((J=bt).length===1?J[0]:J,"readonly");if(e.autoSchema)q=ft,H=ht,(L=t).verno=q.version/10,H=L._dbSchema=Zn(0,q,H),L._storeNames=P(q.objectStoreNames,0),qn(L,[L._allTables],h(H),H);else if(Hn(t,t._dbSchema,ht),((rt=Cr(Zn(0,(rt=t).idbdb,ht),rt._dbSchema)).add.length||rt.change.some(function(gt){return gt.add.length||gt.change.length}))&&!f)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),ft.close(),s=ft.version+1,f=!0,U(O());Kn(t,ht)}catch{}an.push(t),ft.onversionchange=Vt(function(gt){e.vcFired=!0,t.on("versionchange").fire(gt)}),ft.onclose=Vt(function(){t.close({disableAutoOpen:!1})}),T&&(rt=t._deps,ht=B,ft=rt.indexedDB,rt=rt.IDBKeyRange,Ar(ft)||ht===Bn||Er(ft,rt).put({name:ht}).catch(It)),U()},I)}).catch(function(U){switch(U?.name){case"UnknownError":if(0<e.PR1398_maxLoop)return e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),O();break;case"VersionError":if(0<s)return s=0,O()}return _t.reject(U)})}var z,D=e.dbReadyResolve,F=null,T=!1;return _t.race([a,(typeof navigator>"u"?_t.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(U){function I(){return indexedDB.databases().finally(U)}z=setInterval(I,100),I()}).finally(function(){return clearInterval(z)}):Promise.resolve()).then(O)]).then(function(){return y(),e.onReadyBeingFired=[],_t.resolve(Or(function(){return t.on.ready.fire(t.vip)})).then(function U(){if(0<e.onReadyBeingFired.length){var I=e.onReadyBeingFired.reduce(ot,It);return e.onReadyBeingFired=[],_t.resolve(Or(function(){return I(t.vip)})).then(U)}})}).finally(function(){e.openCanceller===a&&(e.onReadyBeingFired=null,e.isBeingOpened=!1)}).catch(function(U){e.dbOpenError=U;try{F&&F.abort()}catch{}return a===e.openCanceller&&t._close(),Yt(U)}).finally(function(){e.openComplete=!0,D()}).then(function(){var U;return T&&(U={},t.tables.forEach(function(I){I.schema.indexes.forEach(function(B){B.name&&(U["idb://".concat(t.name,"/").concat(I.name,"/").concat(B.name)]=new se(-1/0,[[[]]]))}),U["idb://".concat(t.name,"/").concat(I.name,"/")]=U["idb://".concat(t.name,"/").concat(I.name,"/:dels")]=new se(-1/0,[[[]]])}),Fe(bn).fire(U),zr(U,!0)),t})}function Dr(t){function e(f){return t.next(f)}var n=s(e),a=s(function(f){return t.throw(f)});function s(f){return function(z){var O=f(z),z=O.value;return O.done?z:z&&typeof z.then=="function"?z.then(n,a):u(z)?Promise.all(z).then(n,a):n(z)}}return s(e)()}function Gn(t,e,n){for(var a=u(t)?t.slice():[t],s=0;s<n;++s)a.push(e);return a}var za={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return d(d({},t),{table:function(e){var n=t.table(e),a=n.schema,s={},f=[];function y(T,U,I){var B=_n(T),j=s[B]=s[B]||[],L=T==null?0:typeof T=="string"?1:T.length,q=0<U,q=d(d({},I),{name:q?"".concat(B,"(virtual-from:").concat(I.name,")"):I.name,lowLevelIndex:I,isVirtual:q,keyTail:U,keyLength:L,extractKey:xr(T),unique:!q&&I.unique});return j.push(q),q.isPrimaryKey||f.push(q),1<L&&y(L===2?T[0]:T.slice(0,L-1),U+1,I),j.sort(function(H,J){return H.keyTail-J.keyTail}),q}e=y(a.primaryKey.keyPath,0,a.primaryKey),s[":id"]=[e];for(var O=0,z=a.indexes;O<z.length;O++){var D=z[O];y(D.keyPath,0,D)}function F(T){var U,I=T.query.index;return I.isVirtual?d(d({},T),{query:{index:I.lowLevelIndex,range:(U=T.query.range,I=I.keyTail,{type:U.type===1?2:U.type,lower:Gn(U.lower,U.lowerOpen?t.MAX_KEY:t.MIN_KEY,I),lowerOpen:!0,upper:Gn(U.upper,U.upperOpen?t.MIN_KEY:t.MAX_KEY,I),upperOpen:!0})}}):T}return d(d({},n),{schema:d(d({},a),{primaryKey:e,indexes:f,getIndexByKeyPath:function(T){return(T=s[_n(T)])&&T[0]}}),count:function(T){return n.count(F(T))},query:function(T){return n.query(F(T))},openCursor:function(T){var U=T.query.index,I=U.keyTail,B=U.isVirtual,j=U.keyLength;return B?n.openCursor(F(T)).then(function(q){return q&&L(q)}):n.openCursor(T);function L(q){return Object.create(q,{continue:{value:function(H){H!=null?q.continue(Gn(H,T.reverse?t.MAX_KEY:t.MIN_KEY,I)):T.unique?q.continue(q.key.slice(0,j).concat(T.reverse?t.MIN_KEY:t.MAX_KEY,I)):q.continue()}},continuePrimaryKey:{value:function(H,J){q.continuePrimaryKey(Gn(H,t.MAX_KEY,I),J)}},primaryKey:{get:function(){return q.primaryKey}},key:{get:function(){var H=q.key;return j===1?H[0]:H.slice(0,j)}},value:{get:function(){return q.value}}})}}})}})}};function Ir(t,e,n,a){return n=n||{},a=a||"",h(t).forEach(function(s){var f,y,O;_(e,s)?(f=t[s],y=e[s],typeof f=="object"&&typeof y=="object"&&f&&y?(O=it(f))!==it(y)?n[a+s]=e[s]:O==="Object"?Ir(f,y,n,a+s+"."):f!==y&&(n[a+s]=e[s]):f!==y&&(n[a+s]=e[s])):n[a+s]=void 0}),h(e).forEach(function(s){_(t,s)||(n[a+s]=e[s])}),n}function Mr(t,e){return e.type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}var Da={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(t){return d(d({},t),{table:function(e){var n=t.table(e),a=n.schema.primaryKey;return d(d({},n),{mutate:function(s){var f=Ct.trans,y=f.table(e).hook,O=y.deleting,z=y.creating,D=y.updating;switch(s.type){case"add":if(z.fire===It)break;return f._promise("readwrite",function(){return F(s)},!0);case"put":if(z.fire===It&&D.fire===It)break;return f._promise("readwrite",function(){return F(s)},!0);case"delete":if(O.fire===It)break;return f._promise("readwrite",function(){return F(s)},!0);case"deleteRange":if(O.fire===It)break;return f._promise("readwrite",function(){return(function T(U,I,B){return n.query({trans:U,values:!1,query:{index:a,range:I},limit:B}).then(function(j){var L=j.result;return F({type:"delete",keys:L,trans:U}).then(function(q){return 0<q.numFailures?Promise.reject(q.failures[0]):L.length<B?{failures:[],numFailures:0,lastResult:void 0}:T(U,d(d({},I),{lower:L[L.length-1],lowerOpen:!0}),B)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function F(T){var U,I,B,j=Ct.trans,L=T.keys||Mr(a,T);if(!L)throw new Error("Keys missing");return(T=T.type==="add"||T.type==="put"?d(d({},T),{keys:L}):d({},T)).type!=="delete"&&(T.values=c([],T.values)),T.keys&&(T.keys=c([],T.keys)),U=n,B=L,((I=T).type==="add"?Promise.resolve([]):U.getMany({trans:I.trans,keys:B,cache:"immutable"})).then(function(q){var H=L.map(function(J,rt){var ft,bt,ht,gt=q[rt],wt={onerror:null,onsuccess:null};return T.type==="delete"?O.fire.call(wt,J,gt,j):T.type==="add"||gt===void 0?(ft=z.fire.call(wt,J,T.values[rt],j),J==null&&ft!=null&&(T.keys[rt]=J=ft,a.outbound||G(T.values[rt],a.keyPath,J))):(ft=Ir(gt,T.values[rt]),(bt=D.fire.call(wt,ft,J,gt,j))&&(ht=T.values[rt],Object.keys(bt).forEach(function(yt){_(ht,yt)?ht[yt]=bt[yt]:G(ht,yt,bt[yt])}))),wt});return n.mutate(T).then(function(J){for(var rt=J.failures,ft=J.results,bt=J.numFailures,J=J.lastResult,ht=0;ht<L.length;++ht){var gt=(ft||L)[ht],wt=H[ht];gt==null?wt.onerror&&wt.onerror(rt[ht]):wt.onsuccess&&wt.onsuccess(T.type==="put"&&q[ht]?T.values[ht]:gt)}return{failures:rt,results:ft,numFailures:bt,lastResult:J}}).catch(function(J){return H.forEach(function(rt){return rt.onerror&&rt.onerror(J)}),Promise.reject(J)})})}}})}})}};function xi(t,e,n){try{if(!e||e.keys.length<t.length)return null;for(var a=[],s=0,f=0;s<e.keys.length&&f<t.length;++s)Nt(e.keys[s],t[f])===0&&(a.push(n?Q(e.values[s]):e.values[s]),++f);return a.length===t.length?a:null}catch{return null}}var Ia={stack:"dbcore",level:-1,create:function(t){return{table:function(e){var n=t.table(e);return d(d({},n),{getMany:function(a){if(!a.cache)return n.getMany(a);var s=xi(a.keys,a.trans._cache,a.cache==="clone");return s?_t.resolve(s):n.getMany(a).then(function(f){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?Q(f):f},f})},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function ki(t,e){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!e.schema.primaryKey.outbound}function Ci(t,e){switch(t){case"query":return e.values&&!e.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ma={stack:"dbcore",level:0,name:"Observability",create:function(t){var e=t.schema.name,n=new se(t.MIN_KEY,t.MAX_KEY);return d(d({},t),{transaction:function(a,s,f){if(Ct.subscr&&s!=="readonly")throw new mt.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Ct.querier));return t.transaction(a,s,f)},table:function(a){var s=t.table(a),f=s.schema,y=f.primaryKey,T=f.indexes,O=y.extractKey,z=y.outbound,D=y.autoIncrement&&T.filter(function(I){return I.compound&&I.keyPath.includes(y.keyPath)}),F=d(d({},s),{mutate:function(I){function B(yt){return yt="idb://".concat(e,"/").concat(a,"/").concat(yt),J[yt]||(J[yt]=new se)}var j,L,q,H=I.trans,J=I.mutatedParts||(I.mutatedParts={}),rt=B(""),ft=B(":dels"),bt=I.type,wt=I.type==="deleteRange"?[I.range]:I.type==="delete"?[I.keys]:I.values.length<50?[Mr(y,I).filter(function(yt){return yt}),I.values]:[],ht=wt[0],gt=wt[1],wt=I.trans._cache;return u(ht)?(rt.addKeys(ht),(wt=bt==="delete"||ht.length===gt.length?xi(ht,wt):null)||ft.addKeys(ht),(wt||gt)&&(j=B,L=wt,q=gt,f.indexes.forEach(function(yt){var St=j(yt.name||"");function zt(Bt){return Bt!=null?yt.extractKey(Bt):null}function Dt(Bt){return yt.multiEntry&&u(Bt)?Bt.forEach(function(ge){return St.addKey(ge)}):St.addKey(Bt)}(L||q).forEach(function(Bt,le){var Rt=L&&zt(L[le]),le=q&&zt(q[le]);Nt(Rt,le)!==0&&(Rt!=null&&Dt(Rt),le!=null&&Dt(le))})}))):ht?(gt={from:(gt=ht.lower)!==null&&gt!==void 0?gt:t.MIN_KEY,to:(gt=ht.upper)!==null&&gt!==void 0?gt:t.MAX_KEY},ft.add(gt),rt.add(gt)):(rt.add(n),ft.add(n),f.indexes.forEach(function(yt){return B(yt.name).add(n)})),s.mutate(I).then(function(yt){return!ht||I.type!=="add"&&I.type!=="put"||(rt.addKeys(yt.results),D&&D.forEach(function(St){for(var zt=I.values.map(function(Rt){return St.extractKey(Rt)}),Dt=St.keyPath.findIndex(function(Rt){return Rt===y.keyPath}),Bt=0,ge=yt.results.length;Bt<ge;++Bt)zt[Bt][Dt]=yt.results[Bt];B(St.name).addKeys(zt)})),H.mutatedParts=Xn(H.mutatedParts||{},J),yt})}}),T=function(B){var j=B.query,B=j.index,j=j.range;return[B,new se((B=j.lower)!==null&&B!==void 0?B:t.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:t.MAX_KEY)]},U={get:function(I){return[y,new se(I.key)]},getMany:function(I){return[y,new se().addKeys(I.keys)]},count:T,query:T,openCursor:T};return h(U).forEach(function(I){F[I]=function(B){var j=Ct.subscr,L=!!j,q=ki(Ct,s)&&Ci(I,B)?B.obsSet={}:j;if(L){var H=function(gt){return gt="idb://".concat(e,"/").concat(a,"/").concat(gt),q[gt]||(q[gt]=new se)},J=H(""),rt=H(":dels"),j=U[I](B),L=j[0],j=j[1];if((I==="query"&&L.isPrimaryKey&&!B.values?rt:H(L.name||"")).add(j),!L.isPrimaryKey){if(I!=="count"){var ft=I==="query"&&z&&B.values&&s.query(d(d({},B),{values:!1}));return s[I].apply(this,arguments).then(function(gt){if(I==="query"){if(z&&B.values)return ft.then(function(zt){return zt=zt.result,J.addKeys(zt),gt});var wt=B.values?gt.result.map(O):gt.result;(B.values?J:rt).addKeys(wt)}else if(I==="openCursor"){var yt=gt,St=B.values;return yt&&Object.create(yt,{key:{get:function(){return rt.addKey(yt.primaryKey),yt.key}},primaryKey:{get:function(){var zt=yt.primaryKey;return rt.addKey(zt),zt}},value:{get:function(){return St&&J.addKey(yt.primaryKey),yt.value}}})}return gt})}rt.add(n)}}return s[I].apply(this,arguments)}}),F}})}};function Si(t,e,n){if(n.numFailures===0)return e;if(e.type==="deleteRange")return null;var a=e.keys?e.keys.length:"values"in e&&e.values?e.values.length:1;return n.numFailures===a?null:(e=d({},e),u(e.keys)&&(e.keys=e.keys.filter(function(s,f){return!(f in n.failures)})),"values"in e&&u(e.values)&&(e.values=e.values.filter(function(s,f){return!(f in n.failures)})),e)}function Br(t,e){return n=t,((a=e).lower===void 0||(a.lowerOpen?0<Nt(n,a.lower):0<=Nt(n,a.lower)))&&(t=t,(e=e).upper===void 0||(e.upperOpen?Nt(t,e.upper)<0:Nt(t,e.upper)<=0));var n,a}function Ei(t,e,U,a,s,f){if(!U||U.length===0)return t;var y=e.query.index,O=y.multiEntry,z=e.query.range,D=a.schema.primaryKey.extractKey,F=y.extractKey,T=(y.lowLevelIndex||y).extractKey,U=U.reduce(function(I,B){var j=I,L=[];if(B.type==="add"||B.type==="put")for(var q=new se,H=B.values.length-1;0<=H;--H){var J,rt=B.values[H],ft=D(rt);q.hasKey(ft)||(J=F(rt),(O&&u(J)?J.some(function(yt){return Br(yt,z)}):Br(J,z))&&(q.addKey(ft),L.push(rt)))}switch(B.type){case"add":var bt=new se().addKeys(e.values?I.map(function(St){return D(St)}):I),j=I.concat(e.values?L.filter(function(St){return St=D(St),!bt.hasKey(St)&&(bt.addKey(St),!0)}):L.map(function(St){return D(St)}).filter(function(St){return!bt.hasKey(St)&&(bt.addKey(St),!0)}));break;case"put":var ht=new se().addKeys(B.values.map(function(St){return D(St)}));j=I.filter(function(St){return!ht.hasKey(e.values?D(St):St)}).concat(e.values?L:L.map(function(St){return D(St)}));break;case"delete":var gt=new se().addKeys(B.keys);j=I.filter(function(St){return!gt.hasKey(e.values?D(St):St)});break;case"deleteRange":var wt=B.range;j=I.filter(function(St){return!Br(D(St),wt)})}return j},t);return U===t?t:(U.sort(function(I,B){return Nt(T(I),T(B))||Nt(D(I),D(B))}),e.limit&&e.limit<1/0&&(U.length>e.limit?U.length=e.limit:t.length===e.limit&&U.length<e.limit&&(s.dirty=!0)),f?Object.freeze(U):U)}function Ai(t,e){return Nt(t.lower,e.lower)===0&&Nt(t.upper,e.upper)===0&&!!t.lowerOpen==!!e.lowerOpen&&!!t.upperOpen==!!e.upperOpen}function Ba(t,e){return(function(n,a,s,f){if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((a=Nt(n,a))===0){if(s&&f)return 0;if(s)return 1;if(f)return-1}return a})(t.lower,e.lower,t.lowerOpen,e.lowerOpen)<=0&&0<=(function(n,a,s,f){if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((a=Nt(n,a))===0){if(s&&f)return 0;if(s)return-1;if(f)return 1}return a})(t.upper,e.upper,t.upperOpen,e.upperOpen)}function ja(t,e,n,a){t.subscribers.add(n),a.addEventListener("abort",function(){var s,f;t.subscribers.delete(n),t.subscribers.size===0&&(s=t,f=e,setTimeout(function(){s.subscribers.size===0&&$t(f,s)},3e3))})}var Fa={stack:"dbcore",level:0,name:"Cache",create:function(t){var e=t.schema.name;return d(d({},t),{transaction:function(n,a,s){var f,y,O=t.transaction(n,a,s);return a==="readwrite"&&(y=(f=new AbortController).signal,s=function(z){return function(){if(f.abort(),a==="readwrite"){for(var D=new Set,F=0,T=n;F<T.length;F++){var U=T[F],I=Ze["idb://".concat(e,"/").concat(U)];if(I){var B=t.table(U),j=I.optimisticOps.filter(function(St){return St.trans===O});if(O._explicit&&z&&O.mutatedParts)for(var L=0,q=Object.values(I.queries.query);L<q.length;L++)for(var H=0,J=(bt=q[L]).slice();H<J.length;H++)Tr((ht=J[H]).obsSet,O.mutatedParts)&&($t(bt,ht),ht.subscribers.forEach(function(St){return D.add(St)}));else if(0<j.length){I.optimisticOps=I.optimisticOps.filter(function(St){return St.trans!==O});for(var rt=0,ft=Object.values(I.queries.query);rt<ft.length;rt++)for(var bt,ht,gt,wt=0,yt=(bt=ft[rt]).slice();wt<yt.length;wt++)(ht=yt[wt]).res!=null&&O.mutatedParts&&(z&&!ht.dirty?(gt=Object.isFrozen(ht.res),gt=Ei(ht.res,ht.req,j,B,ht,gt),ht.dirty?($t(bt,ht),ht.subscribers.forEach(function(St){return D.add(St)})):gt!==ht.res&&(ht.res=gt,ht.promise=_t.resolve({result:gt}))):(ht.dirty&&$t(bt,ht),ht.subscribers.forEach(function(St){return D.add(St)})))}}}D.forEach(function(St){return St()})}}},O.addEventListener("abort",s(!1),{signal:y}),O.addEventListener("error",s(!1),{signal:y}),O.addEventListener("complete",s(!0),{signal:y})),O},table:function(n){var a=t.table(n),s=a.schema.primaryKey;return d(d({},a),{mutate:function(f){var y=Ct.trans;if(s.outbound||y.db._options.cache==="disabled"||y.explicit||y.idbtrans.mode!=="readwrite")return a.mutate(f);var O=Ze["idb://".concat(e,"/").concat(n)];return O?(y=a.mutate(f),f.type!=="add"&&f.type!=="put"||!(50<=f.values.length||Mr(s,f).some(function(z){return z==null}))?(O.optimisticOps.push(f),f.mutatedParts&&Yn(f.mutatedParts),y.then(function(z){0<z.numFailures&&($t(O.optimisticOps,f),(z=Si(0,f,z))&&O.optimisticOps.push(z),f.mutatedParts&&Yn(f.mutatedParts))}),y.catch(function(){$t(O.optimisticOps,f),f.mutatedParts&&Yn(f.mutatedParts)})):y.then(function(z){var D=Si(0,d(d({},f),{values:f.values.map(function(F,T){var U;return z.failures[T]?F:(F=(U=s.keyPath)!==null&&U!==void 0&&U.includes(".")?Q(F):d({},F),G(F,s.keyPath,z.results[T]),F)})}),z);O.optimisticOps.push(D),queueMicrotask(function(){return f.mutatedParts&&Yn(f.mutatedParts)})}),y):a.mutate(f)},query:function(f){if(!ki(Ct,a)||!Ci("query",f))return a.query(f);var y=((D=Ct.trans)===null||D===void 0?void 0:D.db._options.cache)==="immutable",T=Ct,O=T.requery,z=T.signal,D=(function(B,j,L,q){var H=Ze["idb://".concat(B,"/").concat(j)];if(!H)return[];if(!(j=H.queries[L]))return[null,!1,H,null];var J=j[(q.query?q.query.index.name:null)||""];if(!J)return[null,!1,H,null];switch(L){case"query":var rt=J.find(function(ft){return ft.req.limit===q.limit&&ft.req.values===q.values&&Ai(ft.req.query.range,q.query.range)});return rt?[rt,!0,H,J]:[J.find(function(ft){return("limit"in ft.req?ft.req.limit:1/0)>=q.limit&&(!q.values||ft.req.values)&&Ba(ft.req.query.range,q.query.range)}),!1,H,J];case"count":return rt=J.find(function(ft){return Ai(ft.req.query.range,q.query.range)}),[rt,!!rt,H,J]}})(e,n,"query",f),F=D[0],T=D[1],U=D[2],I=D[3];return F&&T?F.obsSet=f.obsSet:(T=a.query(f).then(function(B){var j=B.result;if(F&&(F.res=j),y){for(var L=0,q=j.length;L<q;++L)Object.freeze(j[L]);Object.freeze(j)}else B.result=Q(j);return B}).catch(function(B){return I&&F&&$t(I,F),Promise.reject(B)}),F={obsSet:f.obsSet,promise:T,subscribers:new Set,type:"query",req:f,dirty:!1},I?I.push(F):(I=[F],(U=U||(Ze["idb://".concat(e,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[f.query.index.name||""]=I)),ja(F,I,O,z),F.promise.then(function(B){return{result:Ei(B.result,f,U?.optimisticOps,a,F,y)}})}})}})}};function Jn(t,e){return new Proxy(t,{get:function(n,a,s){return a==="db"?e:Reflect.get(n,a,s)}})}var Pe=(Gt.prototype.version=function(t){if(isNaN(t)||t<.1)throw new mt.Type("Given version is not a positive number");if(t=Math.round(10*t)/10,this.idbdb||this._state.isBeingOpened)throw new mt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var e=this._versions,n=e.filter(function(a){return a._cfg.version===t})[0];return n||(n=new this.Version(t),e.push(n),e.sort(Oa),n.stores({}),this._state.autoSchema=!1,n)},Gt.prototype._whenReady=function(t){var e=this;return this.idbdb&&(this._state.openComplete||Ct.letThrough||this._vip)?t():new _t(function(n,a){if(e._state.openComplete)return a(new mt.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return void a(new mt.DatabaseClosed);e.open().catch(It)}e._state.dbReadyPromise.then(n,a)}).then(t)},Gt.prototype.use=function(t){var e=t.stack,n=t.create,a=t.level,s=t.name;return s&&this.unuse({stack:e,name:s}),t=this._middlewares[e]||(this._middlewares[e]=[]),t.push({stack:e,create:n,level:a??10,name:s}),t.sort(function(f,y){return f.level-y.level}),this},Gt.prototype.unuse=function(t){var e=t.stack,n=t.name,a=t.create;return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},Gt.prototype.open=function(){var t=this;return Ke(ye,function(){return Ra(t)})},Gt.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state,e=an.indexOf(this);if(0<=e&&an.splice(e,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new _t(function(n){t.dbReadyResolve=n}),t.openCanceller=new _t(function(n,a){t.cancelOpen=a}))},Gt.prototype.close=function(n){var e=(n===void 0?{disableAutoOpen:!0}:n).disableAutoOpen,n=this._state;e?(n.isBeingOpened&&n.cancelOpen(new mt.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new mt.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Gt.prototype.delete=function(t){var e=this;t===void 0&&(t={disableAutoOpen:!0});var n=0<arguments.length&&typeof arguments[0]!="object",a=this._state;return new _t(function(s,f){function y(){e.close(t);var O=e._deps.indexedDB.deleteDatabase(e.name);O.onsuccess=Vt(function(){var z,D,F;z=e._deps,D=e.name,F=z.indexedDB,z=z.IDBKeyRange,Ar(F)||D===Bn||Er(F,z).delete(D).catch(It),s()}),O.onerror=ke(f),O.onblocked=e._fireOnBlocked}if(n)throw new mt.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(y):y()})},Gt.prototype.backendDB=function(){return this.idbdb},Gt.prototype.isOpen=function(){return this.idbdb!==null},Gt.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},Gt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Gt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Gt.prototype,"tables",{get:function(){var t=this;return h(this._allTables).map(function(e){return t._allTables[e]})},enumerable:!1,configurable:!0}),Gt.prototype.transaction=function(){var t=function(e,n,a){var s=arguments.length;if(s<2)throw new mt.InvalidArgument("Too few arguments");for(var f=new Array(s-1);--s;)f[s-1]=arguments[s];return a=f.pop(),[e,pt(f),a]}.apply(this,arguments);return this._transaction.apply(this,t)},Gt.prototype._transaction=function(t,e,n){var a=this,s=Ct.trans;s&&s.db===this&&t.indexOf("!")===-1||(s=null);var f,y,O=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");try{if(y=e.map(function(D){if(D=D instanceof a.Table?D.name:D,typeof D!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return D}),t=="r"||t===mr)f=mr;else{if(t!="rw"&&t!=gr)throw new mt.InvalidArgument("Invalid transaction mode: "+t);f=gr}if(s){if(s.mode===mr&&f===gr){if(!O)throw new mt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&y.forEach(function(D){if(s&&s.storeNames.indexOf(D)===-1){if(!O)throw new mt.SubTransaction("Table "+D+" not included in parent transaction.");s=null}}),O&&s&&!s.active&&(s=null)}}catch(D){return s?s._promise(null,function(F,T){T(D)}):Yt(D)}var z=function D(F,T,U,I,B){return _t.resolve().then(function(){var j=Ct.transless||Ct,L=F._createTransaction(T,U,F._dbSchema,I);if(L.explicit=!0,j={trans:L,transless:j},I)L.idbtrans=I.idbtrans;else try{L.create(),L.idbtrans._explicit=!0,F._state.PR1398_maxLoop=3}catch(J){return J.name===Jt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return D(F,T,U,null,B)})):Yt(J)}var q,H=X(B);return H&&rn(),j=_t.follow(function(){var J;(q=B.call(L,L))&&(H?(J=Me.bind(null,null),q.then(J,J)):typeof q.next=="function"&&typeof q.throw=="function"&&(q=Dr(q)))},j),(q&&typeof q.then=="function"?_t.resolve(q).then(function(J){return L.active?J:Yt(new mt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return q})).then(function(J){return I&&L._resolve(),L._completion.then(function(){return J})}).catch(function(J){return L._reject(J),Yt(J)})})}.bind(null,this,f,y,s,n);return s?s._promise(f,z,"lock"):Ct.trans?Ke(Ct.transless,function(){return a._whenReady(z)}):this._whenReady(z)},Gt.prototype.table=function(t){if(!_(this._allTables,t))throw new mt.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},Gt);function Gt(t,e){var n=this;this._middlewares={},this.verno=0;var a=Gt.dependencies;this._options=e=d({addons:Gt.addons,autoOpen:!0,indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange,cache:"cloned"},e),this._deps={indexedDB:e.indexedDB,IDBKeyRange:e.IDBKeyRange},a=e.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var s,f,y,O,z,D={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:It,dbReadyPromise:null,cancelOpen:It,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:e.autoOpen};D.dbReadyPromise=new _t(function(T){D.dbReadyResolve=T}),D.openCanceller=new _t(function(T,U){D.cancelOpen=U}),this._state=D,this.name=t,this.on=gn(this,"populate","blocked","versionchange","close",{ready:[ot,It]}),this.once=function(T,U){var I=function(){for(var B=[],j=0;j<arguments.length;j++)B[j]=arguments[j];n.on(T).unsubscribe(I),U.apply(n,B)};return n.on(T,I)},this.on.ready.subscribe=M(this.on.ready.subscribe,function(T){return function(U,I){Gt.vip(function(){var B,j=n._state;j.openComplete?(j.dbOpenError||_t.resolve().then(U),I&&T(U)):j.onReadyBeingFired?(j.onReadyBeingFired.push(U),I&&T(U)):(T(U),B=n,I||T(function L(){B.on.ready.unsubscribe(U),B.on.ready.unsubscribe(L)}))})}}),this.Collection=(s=this,vn(_a.prototype,function(q,L){this.db=s;var I=ni,B=null;if(L)try{I=L()}catch(H){B=H}var j=q._ctx,L=j.table,q=L.hook.reading.fire;this._ctx={table:L,index:j.index,isPrimKey:!j.index||L.schema.primKey.keyPath&&j.index===L.schema.primKey.name,range:I,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:B,or:j.or,valueMapper:q!==ae?q:null}})),this.Table=(f=this,vn(li.prototype,function(T,U,I){this.db=f,this._tx=I,this.name=T,this.schema=U,this.hook=f._allTables[T]?f._allTables[T].hook:gn(null,{creating:[Y,It],reading:[l,ae],updating:[x,It],deleting:[A,It]})})),this.Transaction=(y=this,vn(Ca.prototype,function(T,U,I,B,j){var L=this;T!=="readonly"&&U.forEach(function(q){q=(q=I[q])===null||q===void 0?void 0:q.yProps,q&&(U=U.concat(q.map(function(H){return H.updatesTable})))}),this.db=y,this.mode=T,this.storeNames=U,this.schema=I,this.chromeTransactionDurability=B,this.idbtrans=null,this.on=gn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new _t(function(q,H){L._resolve=q,L._reject=H}),this._completion.then(function(){L.active=!1,L.on.complete.fire()},function(q){var H=L.active;return L.active=!1,L.on.error.fire(q),L.parent?L.parent._reject(q):H&&L.idbtrans&&L.idbtrans.abort(),Yt(q)})})),this.Version=(O=this,vn($a.prototype,function(T){this.db=O,this._cfg={version:T,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(z=this,vn(fi.prototype,function(T,U,I){if(this.db=z,this._ctx={table:T,index:U===":id"?null:U,or:I},this._cmp=this._ascending=Nt,this._descending=function(B,j){return Nt(j,B)},this._max=function(B,j){return 0<Nt(B,j)?B:j},this._min=function(B,j){return Nt(B,j)<0?B:j},this._IDBKeyRange=z._deps.IDBKeyRange,!this._IDBKeyRange)throw new mt.MissingAPI})),this.on("versionchange",function(T){0<T.newVersion?console.warn("Another connection wants to upgrade database '".concat(n.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(n.name,"'. Closing db now to resume the delete request.")),n.close({disableAutoOpen:!1})}),this.on("blocked",function(T){!T.newVersion||T.newVersion<T.oldVersion?console.warn("Dexie.delete('".concat(n.name,"') was blocked")):console.warn("Upgrade '".concat(n.name,"' blocked by other connection holding version ").concat(T.oldVersion/10))}),this._maxKey=wn(e.IDBKeyRange),this._createTransaction=function(T,U,I,B){return new n.Transaction(T,U,I,n._options.chromeTransactionDurability,B)},this._fireOnBlocked=function(T){n.on("blocked").fire(T),an.filter(function(U){return U.name===n.name&&U!==n&&!U._state.vcFired}).map(function(U){return U.on("versionchange").fire(T)})},this.use(Ia),this.use(Fa),this.use(Ma),this.use(za),this.use(Da);var F=new Proxy(this,{get:function(T,U,I){if(U==="_vip")return!0;if(U==="table")return function(j){return Jn(n.table(j),F)};var B=Reflect.get(T,U,I);return B instanceof li?Jn(B,F):U==="tables"?B.map(function(j){return Jn(j,F)}):U==="_createTransaction"?function(){return Jn(B.apply(this,arguments),F)}:B}});this.vip=F,a.forEach(function(T){return T(n)})}var Qn,be=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Na=(jr.prototype.subscribe=function(t,e,n){return this._subscribe(t&&typeof t!="function"?t:{next:t,error:e,complete:n})},jr.prototype[be]=function(){return this},jr);function jr(t){this._subscribe=t}try{Qn={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{Qn={indexedDB:null,IDBKeyRange:null}}function Oi(t){var e,n=!1,a=new Na(function(s){var f=X(t),y,O=!1,z={},D={},F={get closed(){return O},unsubscribe:function(){O||(O=!0,y&&y.abort(),T&&Fe.storagemutated.unsubscribe(I))}};s.start&&s.start(F);var T=!1,U=function(){return pr(B)},I=function(j){Xn(z,j),Tr(D,z)&&U()},B=function(){var j,L,q;!O&&Qn.indexedDB&&(z={},j={},y&&y.abort(),y=new AbortController,q=(function(H){var J=en();try{f&&rn();var rt=Ie(t,H);return rt=f?rt.finally(Me):rt}finally{J&&nn()}})(L={subscr:j,signal:y.signal,requery:U,querier:t,trans:null}),Promise.resolve(q).then(function(H){n=!0,e=H,O||L.signal.aborted||(z={},(function(J){for(var rt in J)if(_(J,rt))return;return 1})(D=j)||T||(Fe(bn,I),T=!0),pr(function(){return!O&&s.next&&s.next(H)}))},function(H){n=!1,["DatabaseClosedError","AbortError"].includes(H?.name)||O||pr(function(){O||s.error&&s.error(H)})}))};return setTimeout(U,0),F});return a.hasValue=function(){return n},a.getValue=function(){return e},a}var He=Pe;function Fr(t){var e=Ne;try{Ne=!0,Fe.storagemutated.fire(t),zr(t,!0)}finally{Ne=e}}S(He,d(d({},Wt),{delete:function(t){return new He(t,{addons:[]}).delete()},exists:function(t){return new He(t,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(t){try{return e=He.dependencies,n=e.indexedDB,e=e.IDBKeyRange,(Ar(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==Bn})}):Er(n,e).toCollection().primaryKeys()).then(t)}catch{return Yt(new mt.MissingAPI)}var e,n},defineClass:function(){return function(t){m(this,t)}},ignoreTransaction:function(t){return Ct.trans?Ke(Ct.transless,t):t()},vip:Or,async:function(t){return function(){try{var e=Dr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:_t.resolve(e)}catch(n){return Yt(n)}}},spawn:function(t,e,n){try{var a=Dr(t.apply(n,e||[]));return a&&typeof a.then=="function"?a:_t.resolve(a)}catch(s){return Yt(s)}},currentTransaction:{get:function(){return Ct.trans||null}},waitFor:function(t,e){return e=_t.resolve(typeof t=="function"?He.ignoreTransaction(t):t).timeout(e||6e4),Ct.trans?Ct.trans.waitFor(e):e},Promise:_t,debug:{get:function(){return at},set:function(t){Z(t)}},derive:v,extend:m,props:S,override:M,Events:gn,on:Fe,liveQuery:Oi,extendObservabilitySet:Xn,getByKeyPath:nt,setByKeyPath:G,delByKeyPath:function(t,e){typeof e=="string"?G(t,e,void 0):"length"in e&&[].map.call(e,function(n){G(t,n,void 0)})},shallowClone:ut,deepClone:Q,getObjectDiff:Ir,cmp:Nt,asap:K,minKey:-1/0,addons:[],connections:an,errnames:Jt,dependencies:Qn,cache:Ze,semVer:"4.2.1",version:"4.2.1".split(".").map(function(t){return parseInt(t)}).reduce(function(t,e,n){return t+e/Math.pow(10,2*n)})})),He.maxKey=wn(He.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Fe(bn,function(t){Ne||(t=new CustomEvent(br,{detail:t}),Ne=!0,dispatchEvent(t),Ne=!1)}),addEventListener(br,function(t){t=t.detail,Ne||Fr(t)}));var un,Ne=!1,Pi=function(){};return typeof BroadcastChannel<"u"&&((Pi=function(){(un=new BroadcastChannel(br)).onmessage=function(t){return t.data&&Fr(t.data)}})(),typeof un.unref=="function"&&un.unref(),Fe(bn,function(t){Ne||un.postMessage(t)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(t){if(!Pe.disableBfCache&&t.persisted){at&&console.debug("Dexie: handling persisted pagehide"),un?.close();for(var e=0,n=an;e<n.length;e++)n[e].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(t){!Pe.disableBfCache&&t.persisted&&(at&&console.debug("Dexie: handling persisted pageshow"),Pi(),Fr({all:new se(-1/0,[[]])}))})),_t.rejectionMapper=function(t,e){return!t||t instanceof At||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Xt[t.name]?t:(e=new Xt[t.name](e||t.message,t),"stack"in t&&E(e,"stack",{get:function(){return this.inner.stack}}),e)},Z(at),d(Pe,Object.freeze({__proto__:null,Dexie:Pe,liveQuery:Oi,Entity:ri,cmp:Nt,PropModification:mn,replacePrefix:function(t,e){return new mn({replacePrefix:[t,e]})},add:function(t){return new mn({add:t})},remove:function(t){return new mn({remove:t})},default:Pe,RangeSet:se,mergeRanges:kn,rangesOverlap:yi}),{default:Pe}),Pe})})(rr)),rr.exports}var xo=_o();const qr=ea(xo),Ui=Symbol.for("Dexie"),sr=globalThis[Ui]||(globalThis[Ui]=qr);if(qr.semVer!==sr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${qr.semVer} and ${sr.semVer}`);const{liveQuery:os,mergeRanges:ss,rangesOverlap:ls,RangeSet:us,cmp:cs,Entity:hs,PropModification:ds,replacePrefix:fs,add:ps,remove:ms,DexieYProvider:gs}=sr;class ko extends sr{constructor(){super("AudioAnnotationDB"),this.version(1).stores({recordings:"id, title, createdAt, isAnnotated",annotations:"recordingId, completedAt, updatedAt"})}}const we=new ko;async function na($){const{v4:r}=await bo(async()=>{const{v4:c}=await import("./index-gGVEG6Gs.js");return{v4:c}},[]),i=r(),d={...$,id:i,createdAt:Date.now(),isAnnotated:!1};return await we.recordings.add(d),i}async function ra(){return await we.recordings.orderBy("createdAt").reverse().toArray()}async function Co($){return await we.recordings.get($)}async function So($,r){await we.recordings.update($,r)}async function Eo($){await we.recordings.delete($),await we.annotations.delete($)}async function Ki($){await we.annotations.put($),await we.recordings.update($.recordingId,{isAnnotated:!0})}async function lr($){return await we.annotations.get($)}async function Ao($){await we.annotations.delete($),await we.recordings.update($,{isAnnotated:!1})}async function Oo(){const $=await we.recordings.toArray(),r=/^Untitled (\d+)$/,i=$.map(d=>d.title.match(r)?.[1]).filter(Boolean).map(Number);return i.length>0?Math.max(...i)+1:1}function Po($){const r=$.lastIndexOf(".");return r===-1?$:$.substring(0,r)}async function To($){return new Promise((r,i)=>{const d=new Audio,c=URL.createObjectURL($);d.addEventListener("loadedmetadata",()=>{URL.revokeObjectURL(c),r(d.duration)}),d.addEventListener("error",()=>{URL.revokeObjectURL(c),i(new Error("Failed to load audio metadata"))}),d.src=c})}async function $o($){if(!$.type.startsWith("audio/"))throw new Error("File must be an audio file");const r=Po($.name),i=await To($);return{id:await na({title:r,audioBlob:$,duration:i,source:"upload"}),title:r,duration:i}}async function Ro($){const r=Array.from($),i=[];for(const d of r)try{const c=await $o(d);i.push(c)}catch(c){console.error(`Failed to upload ${d.name}:`,c)}return i}function zo(){return new Promise($=>{const r=document.createElement("input");r.type="file",r.accept="audio/*",r.multiple=!0,r.addEventListener("change",()=>{$(r.files)}),r.addEventListener("cancel",()=>{$(null)}),r.click()})}function er($){throw new Error('Could not dynamically require "'+$+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ur={exports:{}};var qi;function Do(){return qi||(qi=1,(function($,r){(function(i){$.exports=i()})(function(){return(function i(d,c,o){function h(w,C){if(!c[w]){if(!d[w]){var _=typeof er=="function"&&er;if(!C&&_)return _(w,!0);if(u)return u(w,!0);var S=new Error("Cannot find module '"+w+"'");throw S.code="MODULE_NOT_FOUND",S}var g=c[w]={exports:{}};d[w][0].call(g.exports,function(E){var v=d[w][1][E];return h(v||E)},g,g.exports,i,d,c,o)}return c[w].exports}for(var u=typeof er=="function"&&er,m=0;m<o.length;m++)h(o[m]);return h})({1:[function(i,d,c){var o=i("./utils"),h=i("./support"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";c.encode=function(m){for(var w,C,_,S,g,E,v,k=[],b=0,P=m.length,M=P,W=o.getTypeOf(m)!=="string";b<m.length;)M=P-b,_=W?(w=m[b++],C=b<P?m[b++]:0,b<P?m[b++]:0):(w=m.charCodeAt(b++),C=b<P?m.charCodeAt(b++):0,b<P?m.charCodeAt(b++):0),S=w>>2,g=(3&w)<<4|C>>4,E=1<M?(15&C)<<2|_>>6:64,v=2<M?63&_:64,k.push(u.charAt(S)+u.charAt(g)+u.charAt(E)+u.charAt(v));return k.join("")},c.decode=function(m){var w,C,_,S,g,E,v=0,k=0,b="data:";if(m.substr(0,b.length)===b)throw new Error("Invalid base64 input, it looks like a data url.");var P,M=3*(m=m.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(m.charAt(m.length-1)===u.charAt(64)&&M--,m.charAt(m.length-2)===u.charAt(64)&&M--,M%1!=0)throw new Error("Invalid base64 input, bad content length.");for(P=h.uint8array?new Uint8Array(0|M):new Array(0|M);v<m.length;)w=u.indexOf(m.charAt(v++))<<2|(S=u.indexOf(m.charAt(v++)))>>4,C=(15&S)<<4|(g=u.indexOf(m.charAt(v++)))>>2,_=(3&g)<<6|(E=u.indexOf(m.charAt(v++))),P[k++]=w,g!==64&&(P[k++]=C),E!==64&&(P[k++]=_);return P}},{"./support":30,"./utils":32}],2:[function(i,d,c){var o=i("./external"),h=i("./stream/DataWorker"),u=i("./stream/Crc32Probe"),m=i("./stream/DataLengthProbe");function w(C,_,S,g,E){this.compressedSize=C,this.uncompressedSize=_,this.crc32=S,this.compression=g,this.compressedContent=E}w.prototype={getContentWorker:function(){var C=new h(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new m("data_length")),_=this;return C.on("end",function(){if(this.streamInfo.data_length!==_.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),C},getCompressedWorker:function(){return new h(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},w.createWorkerFrom=function(C,_,S){return C.pipe(new u).pipe(new m("uncompressedSize")).pipe(_.compressWorker(S)).pipe(new m("compressedSize")).withStreamInfo("compression",_)},d.exports=w},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,d,c){var o=i("./stream/GenericWorker");c.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},c.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,d,c){var o=i("./utils"),h=(function(){for(var u,m=[],w=0;w<256;w++){u=w;for(var C=0;C<8;C++)u=1&u?3988292384^u>>>1:u>>>1;m[w]=u}return m})();d.exports=function(u,m){return u!==void 0&&u.length?o.getTypeOf(u)!=="string"?(function(w,C,_,S){var g=h,E=S+_;w^=-1;for(var v=S;v<E;v++)w=w>>>8^g[255&(w^C[v])];return-1^w})(0|m,u,u.length,0):(function(w,C,_,S){var g=h,E=S+_;w^=-1;for(var v=S;v<E;v++)w=w>>>8^g[255&(w^C.charCodeAt(v))];return-1^w})(0|m,u,u.length,0):0}},{"./utils":32}],5:[function(i,d,c){c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!0,c.date=null,c.compression=null,c.compressionOptions=null,c.comment=null,c.unixPermissions=null,c.dosPermissions=null},{}],6:[function(i,d,c){var o=null;o=typeof Promise<"u"?Promise:i("lie"),d.exports={Promise:o}},{lie:37}],7:[function(i,d,c){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",h=i("pako"),u=i("./utils"),m=i("./stream/GenericWorker"),w=o?"uint8array":"array";function C(_,S){m.call(this,"FlateWorker/"+_),this._pako=null,this._pakoAction=_,this._pakoOptions=S,this.meta={}}c.magic="\b\0",u.inherits(C,m),C.prototype.processChunk=function(_){this.meta=_.meta,this._pako===null&&this._createPako(),this._pako.push(u.transformTo(w,_.data),!1)},C.prototype.flush=function(){m.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},C.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this._pako=null},C.prototype._createPako=function(){this._pako=new h[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var _=this;this._pako.onData=function(S){_.push({data:S,meta:_.meta})}},c.compressWorker=function(_){return new C("Deflate",_)},c.uncompressWorker=function(){return new C("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,d,c){function o(g,E){var v,k="";for(v=0;v<E;v++)k+=String.fromCharCode(255&g),g>>>=8;return k}function h(g,E,v,k,b,P){var M,W,K=g.file,nt=g.compression,G=P!==w.utf8encode,ut=u.transformTo("string",P(K.name)),tt=u.transformTo("string",w.utf8encode(K.name)),pt=K.comment,Pt=u.transformTo("string",P(pt)),R=u.transformTo("string",w.utf8encode(pt)),Q=tt.length!==K.name.length,p=R.length!==pt.length,it="",Tt="",lt="",$t=K.dir,st=K.date,Ot={crc32:0,compressedSize:0,uncompressedSize:0};E&&!v||(Ot.crc32=g.crc32,Ot.compressedSize=g.compressedSize,Ot.uncompressedSize=g.uncompressedSize);var X=0;E&&(X|=8),G||!Q&&!p||(X|=2048);var V=0,At=0;$t&&(V|=16),b==="UNIX"?(At=798,V|=(function(vt,qt){var Jt=vt;return vt||(Jt=qt?16893:33204),(65535&Jt)<<16})(K.unixPermissions,$t)):(At=20,V|=(function(vt){return 63&(vt||0)})(K.dosPermissions)),M=st.getUTCHours(),M<<=6,M|=st.getUTCMinutes(),M<<=5,M|=st.getUTCSeconds()/2,W=st.getUTCFullYear()-1980,W<<=4,W|=st.getUTCMonth()+1,W<<=5,W|=st.getUTCDate(),Q&&(Tt=o(1,1)+o(C(ut),4)+tt,it+="up"+o(Tt.length,2)+Tt),p&&(lt=o(1,1)+o(C(Pt),4)+R,it+="uc"+o(lt.length,2)+lt);var xt="";return xt+=`
\0`,xt+=o(X,2),xt+=nt.magic,xt+=o(M,2),xt+=o(W,2),xt+=o(Ot.crc32,4),xt+=o(Ot.compressedSize,4),xt+=o(Ot.uncompressedSize,4),xt+=o(ut.length,2),xt+=o(it.length,2),{fileRecord:_.LOCAL_FILE_HEADER+xt+ut+it,dirRecord:_.CENTRAL_FILE_HEADER+o(At,2)+xt+o(Pt.length,2)+"\0\0\0\0"+o(V,4)+o(k,4)+ut+it+Pt}}var u=i("../utils"),m=i("../stream/GenericWorker"),w=i("../utf8"),C=i("../crc32"),_=i("../signature");function S(g,E,v,k){m.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=E,this.zipPlatform=v,this.encodeFileName=k,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}u.inherits(S,m),S.prototype.push=function(g){var E=g.meta.percent||0,v=this.entriesCount,k=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,m.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:v?(E+100*(v-k-1))/v:100}}))},S.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var E=this.streamFiles&&!g.file.dir;if(E){var v=h(g,E,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:v.fileRecord,meta:{percent:0}})}else this.accumulate=!0},S.prototype.closedSource=function(g){this.accumulate=!1;var E=this.streamFiles&&!g.file.dir,v=h(g,E,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(v.dirRecord),E)this.push({data:(function(k){return _.DATA_DESCRIPTOR+o(k.crc32,4)+o(k.compressedSize,4)+o(k.uncompressedSize,4)})(g),meta:{percent:100}});else for(this.push({data:v.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},S.prototype.flush=function(){for(var g=this.bytesWritten,E=0;E<this.dirRecords.length;E++)this.push({data:this.dirRecords[E],meta:{percent:100}});var v=this.bytesWritten-g,k=(function(b,P,M,W,K){var nt=u.transformTo("string",K(W));return _.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(b,2)+o(b,2)+o(P,4)+o(M,4)+o(nt.length,2)+nt})(this.dirRecords.length,v,g,this.zipComment,this.encodeFileName);this.push({data:k,meta:{percent:100}})},S.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},S.prototype.registerPrevious=function(g){this._sources.push(g);var E=this;return g.on("data",function(v){E.processChunk(v)}),g.on("end",function(){E.closedSource(E.previous.streamInfo),E._sources.length?E.prepareNextSource():E.end()}),g.on("error",function(v){E.error(v)}),this},S.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},S.prototype.error=function(g){var E=this._sources;if(!m.prototype.error.call(this,g))return!1;for(var v=0;v<E.length;v++)try{E[v].error(g)}catch{}return!0},S.prototype.lock=function(){m.prototype.lock.call(this);for(var g=this._sources,E=0;E<g.length;E++)g[E].lock()},d.exports=S},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,d,c){var o=i("../compressions"),h=i("./ZipFileWorker");c.generateWorker=function(u,m,w){var C=new h(m.streamFiles,w,m.platform,m.encodeFileName),_=0;try{u.forEach(function(S,g){_++;var E=(function(P,M){var W=P||M,K=o[W];if(!K)throw new Error(W+" is not a valid compression method !");return K})(g.options.compression,m.compression),v=g.options.compressionOptions||m.compressionOptions||{},k=g.dir,b=g.date;g._compressWorker(E,v).withStreamInfo("file",{name:S,dir:k,date:b,comment:g.comment||"",unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions}).pipe(C)}),C.entriesCount=_}catch(S){C.error(S)}return C}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,d,c){function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var h=new o;for(var u in this)typeof this[u]!="function"&&(h[u]=this[u]);return h}}(o.prototype=i("./object")).loadAsync=i("./load"),o.support=i("./support"),o.defaults=i("./defaults"),o.version="3.10.1",o.loadAsync=function(h,u){return new o().loadAsync(h,u)},o.external=i("./external"),d.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,d,c){var o=i("./utils"),h=i("./external"),u=i("./utf8"),m=i("./zipEntries"),w=i("./stream/Crc32Probe"),C=i("./nodejsUtils");function _(S){return new h.Promise(function(g,E){var v=S.decompressed.getContentWorker().pipe(new w);v.on("error",function(k){E(k)}).on("end",function(){v.streamInfo.crc32!==S.decompressed.crc32?E(new Error("Corrupted zip : CRC32 mismatch")):g()}).resume()})}d.exports=function(S,g){var E=this;return g=o.extend(g||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:u.utf8decode}),C.isNode&&C.isStream(S)?h.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",S,!0,g.optimizedBinaryString,g.base64).then(function(v){var k=new m(g);return k.load(v),k}).then(function(v){var k=[h.Promise.resolve(v)],b=v.files;if(g.checkCRC32)for(var P=0;P<b.length;P++)k.push(_(b[P]));return h.Promise.all(k)}).then(function(v){for(var k=v.shift(),b=k.files,P=0;P<b.length;P++){var M=b[P],W=M.fileNameStr,K=o.resolve(M.fileNameStr);E.file(K,M.decompressed,{binary:!0,optimizedBinaryString:!0,date:M.date,dir:M.dir,comment:M.fileCommentStr.length?M.fileCommentStr:null,unixPermissions:M.unixPermissions,dosPermissions:M.dosPermissions,createFolders:g.createFolders}),M.dir||(E.file(K).unsafeOriginalName=W)}return k.zipComment.length&&(E.comment=k.zipComment),E})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,d,c){var o=i("../utils"),h=i("../stream/GenericWorker");function u(m,w){h.call(this,"Nodejs stream input adapter for "+m),this._upstreamEnded=!1,this._bindStream(w)}o.inherits(u,h),u.prototype._bindStream=function(m){var w=this;(this._stream=m).pause(),m.on("data",function(C){w.push({data:C,meta:{percent:0}})}).on("error",function(C){w.isPaused?this.generatedError=C:w.error(C)}).on("end",function(){w.isPaused?w._upstreamEnded=!0:w.end()})},u.prototype.pause=function(){return!!h.prototype.pause.call(this)&&(this._stream.pause(),!0)},u.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},d.exports=u},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,d,c){var o=i("readable-stream").Readable;function h(u,m,w){o.call(this,m),this._helper=u;var C=this;u.on("data",function(_,S){C.push(_)||C._helper.pause(),w&&w(S)}).on("error",function(_){C.emit("error",_)}).on("end",function(){C.push(null)})}i("../utils").inherits(h,o),h.prototype._read=function(){this._helper.resume()},d.exports=h},{"../utils":32,"readable-stream":16}],14:[function(i,d,c){d.exports={isNode:typeof Buffer<"u",newBufferFrom:function(o,h){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(o,h);if(typeof o=="number")throw new Error('The "data" argument must not be a number');return new Buffer(o,h)},allocBuffer:function(o){if(Buffer.alloc)return Buffer.alloc(o);var h=new Buffer(o);return h.fill(0),h},isBuffer:function(o){return Buffer.isBuffer(o)},isStream:function(o){return o&&typeof o.on=="function"&&typeof o.pause=="function"&&typeof o.resume=="function"}}},{}],15:[function(i,d,c){function o(K,nt,G){var ut,tt=u.getTypeOf(nt),pt=u.extend(G||{},C);pt.date=pt.date||new Date,pt.compression!==null&&(pt.compression=pt.compression.toUpperCase()),typeof pt.unixPermissions=="string"&&(pt.unixPermissions=parseInt(pt.unixPermissions,8)),pt.unixPermissions&&16384&pt.unixPermissions&&(pt.dir=!0),pt.dosPermissions&&16&pt.dosPermissions&&(pt.dir=!0),pt.dir&&(K=b(K)),pt.createFolders&&(ut=k(K))&&P.call(this,ut,!0);var Pt=tt==="string"&&pt.binary===!1&&pt.base64===!1;G&&G.binary!==void 0||(pt.binary=!Pt),(nt instanceof _&&nt.uncompressedSize===0||pt.dir||!nt||nt.length===0)&&(pt.base64=!1,pt.binary=!0,nt="",pt.compression="STORE",tt="string");var R=null;R=nt instanceof _||nt instanceof m?nt:E.isNode&&E.isStream(nt)?new v(K,nt):u.prepareContent(K,nt,pt.binary,pt.optimizedBinaryString,pt.base64);var Q=new S(K,R,pt);this.files[K]=Q}var h=i("./utf8"),u=i("./utils"),m=i("./stream/GenericWorker"),w=i("./stream/StreamHelper"),C=i("./defaults"),_=i("./compressedObject"),S=i("./zipObject"),g=i("./generate"),E=i("./nodejsUtils"),v=i("./nodejs/NodejsStreamInputAdapter"),k=function(K){K.slice(-1)==="/"&&(K=K.substring(0,K.length-1));var nt=K.lastIndexOf("/");return 0<nt?K.substring(0,nt):""},b=function(K){return K.slice(-1)!=="/"&&(K+="/"),K},P=function(K,nt){return nt=nt!==void 0?nt:C.createFolders,K=b(K),this.files[K]||o.call(this,K,null,{dir:!0,createFolders:nt}),this.files[K]};function M(K){return Object.prototype.toString.call(K)==="[object RegExp]"}var W={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(K){var nt,G,ut;for(nt in this.files)ut=this.files[nt],(G=nt.slice(this.root.length,nt.length))&&nt.slice(0,this.root.length)===this.root&&K(G,ut)},filter:function(K){var nt=[];return this.forEach(function(G,ut){K(G,ut)&&nt.push(ut)}),nt},file:function(K,nt,G){if(arguments.length!==1)return K=this.root+K,o.call(this,K,nt,G),this;if(M(K)){var ut=K;return this.filter(function(pt,Pt){return!Pt.dir&&ut.test(pt)})}var tt=this.files[this.root+K];return tt&&!tt.dir?tt:null},folder:function(K){if(!K)return this;if(M(K))return this.filter(function(tt,pt){return pt.dir&&K.test(tt)});var nt=this.root+K,G=P.call(this,nt),ut=this.clone();return ut.root=G.name,ut},remove:function(K){K=this.root+K;var nt=this.files[K];if(nt||(K.slice(-1)!=="/"&&(K+="/"),nt=this.files[K]),nt&&!nt.dir)delete this.files[K];else for(var G=this.filter(function(tt,pt){return pt.name.slice(0,K.length)===K}),ut=0;ut<G.length;ut++)delete this.files[G[ut].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(K){var nt,G={};try{if((G=u.extend(K||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:h.utf8encode})).type=G.type.toLowerCase(),G.compression=G.compression.toUpperCase(),G.type==="binarystring"&&(G.type="string"),!G.type)throw new Error("No output type specified.");u.checkSupport(G.type),G.platform!=="darwin"&&G.platform!=="freebsd"&&G.platform!=="linux"&&G.platform!=="sunos"||(G.platform="UNIX"),G.platform==="win32"&&(G.platform="DOS");var ut=G.comment||this.comment||"";nt=g.generateWorker(this,G,ut)}catch(tt){(nt=new m("error")).error(tt)}return new w(nt,G.type||"string",G.mimeType)},generateAsync:function(K,nt){return this.generateInternalStream(K).accumulate(nt)},generateNodeStream:function(K,nt){return(K=K||{}).type||(K.type="nodebuffer"),this.generateInternalStream(K).toNodejsStream(nt)}};d.exports=W},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,d,c){d.exports=i("stream")},{stream:void 0}],17:[function(i,d,c){var o=i("./DataReader");function h(u){o.call(this,u);for(var m=0;m<this.data.length;m++)u[m]=255&u[m]}i("../utils").inherits(h,o),h.prototype.byteAt=function(u){return this.data[this.zero+u]},h.prototype.lastIndexOfSignature=function(u){for(var m=u.charCodeAt(0),w=u.charCodeAt(1),C=u.charCodeAt(2),_=u.charCodeAt(3),S=this.length-4;0<=S;--S)if(this.data[S]===m&&this.data[S+1]===w&&this.data[S+2]===C&&this.data[S+3]===_)return S-this.zero;return-1},h.prototype.readAndCheckSignature=function(u){var m=u.charCodeAt(0),w=u.charCodeAt(1),C=u.charCodeAt(2),_=u.charCodeAt(3),S=this.readData(4);return m===S[0]&&w===S[1]&&C===S[2]&&_===S[3]},h.prototype.readData=function(u){if(this.checkOffset(u),u===0)return[];var m=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},d.exports=h},{"../utils":32,"./DataReader":18}],18:[function(i,d,c){var o=i("../utils");function h(u){this.data=u,this.length=u.length,this.index=0,this.zero=0}h.prototype={checkOffset:function(u){this.checkIndex(this.index+u)},checkIndex:function(u){if(this.length<this.zero+u||u<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+u+"). Corrupted zip ?")},setIndex:function(u){this.checkIndex(u),this.index=u},skip:function(u){this.setIndex(this.index+u)},byteAt:function(){},readInt:function(u){var m,w=0;for(this.checkOffset(u),m=this.index+u-1;m>=this.index;m--)w=(w<<8)+this.byteAt(m);return this.index+=u,w},readString:function(u){return o.transformTo("string",this.readData(u))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var u=this.readInt(4);return new Date(Date.UTC(1980+(u>>25&127),(u>>21&15)-1,u>>16&31,u>>11&31,u>>5&63,(31&u)<<1))}},d.exports=h},{"../utils":32}],19:[function(i,d,c){var o=i("./Uint8ArrayReader");function h(u){o.call(this,u)}i("../utils").inherits(h,o),h.prototype.readData=function(u){this.checkOffset(u);var m=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},d.exports=h},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,d,c){var o=i("./DataReader");function h(u){o.call(this,u)}i("../utils").inherits(h,o),h.prototype.byteAt=function(u){return this.data.charCodeAt(this.zero+u)},h.prototype.lastIndexOfSignature=function(u){return this.data.lastIndexOf(u)-this.zero},h.prototype.readAndCheckSignature=function(u){return u===this.readData(4)},h.prototype.readData=function(u){this.checkOffset(u);var m=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},d.exports=h},{"../utils":32,"./DataReader":18}],21:[function(i,d,c){var o=i("./ArrayReader");function h(u){o.call(this,u)}i("../utils").inherits(h,o),h.prototype.readData=function(u){if(this.checkOffset(u),u===0)return new Uint8Array(0);var m=this.data.subarray(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},d.exports=h},{"../utils":32,"./ArrayReader":17}],22:[function(i,d,c){var o=i("../utils"),h=i("../support"),u=i("./ArrayReader"),m=i("./StringReader"),w=i("./NodeBufferReader"),C=i("./Uint8ArrayReader");d.exports=function(_){var S=o.getTypeOf(_);return o.checkSupport(S),S!=="string"||h.uint8array?S==="nodebuffer"?new w(_):h.uint8array?new C(o.transformTo("uint8array",_)):new u(o.transformTo("array",_)):new m(_)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,d,c){c.LOCAL_FILE_HEADER="PK",c.CENTRAL_FILE_HEADER="PK",c.CENTRAL_DIRECTORY_END="PK",c.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",c.ZIP64_CENTRAL_DIRECTORY_END="PK",c.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,d,c){var o=i("./GenericWorker"),h=i("../utils");function u(m){o.call(this,"ConvertWorker to "+m),this.destType=m}h.inherits(u,o),u.prototype.processChunk=function(m){this.push({data:h.transformTo(this.destType,m.data),meta:m.meta})},d.exports=u},{"../utils":32,"./GenericWorker":28}],25:[function(i,d,c){var o=i("./GenericWorker"),h=i("../crc32");function u(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(u,o),u.prototype.processChunk=function(m){this.streamInfo.crc32=h(m.data,this.streamInfo.crc32||0),this.push(m)},d.exports=u},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,d,c){var o=i("../utils"),h=i("./GenericWorker");function u(m){h.call(this,"DataLengthProbe for "+m),this.propName=m,this.withStreamInfo(m,0)}o.inherits(u,h),u.prototype.processChunk=function(m){if(m){var w=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=w+m.data.length}h.prototype.processChunk.call(this,m)},d.exports=u},{"../utils":32,"./GenericWorker":28}],27:[function(i,d,c){var o=i("../utils"),h=i("./GenericWorker");function u(m){h.call(this,"DataWorker");var w=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,m.then(function(C){w.dataIsReady=!0,w.data=C,w.max=C&&C.length||0,w.type=o.getTypeOf(C),w.isPaused||w._tickAndRepeat()},function(C){w.error(C)})}o.inherits(u,h),u.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this.data=null},u.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},u.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},u.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var m=null,w=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":m=this.data.substring(this.index,w);break;case"uint8array":m=this.data.subarray(this.index,w);break;case"array":case"nodebuffer":m=this.data.slice(this.index,w)}return this.index=w,this.push({data:m,meta:{percent:this.max?this.index/this.max*100:0}})},d.exports=u},{"../utils":32,"./GenericWorker":28}],28:[function(i,d,c){function o(h){this.name=h||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(h){this.emit("data",h)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(h){this.emit("error",h)}return!0},error:function(h){return!this.isFinished&&(this.isPaused?this.generatedError=h:(this.isFinished=!0,this.emit("error",h),this.previous&&this.previous.error(h),this.cleanUp()),!0)},on:function(h,u){return this._listeners[h].push(u),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(h,u){if(this._listeners[h])for(var m=0;m<this._listeners[h].length;m++)this._listeners[h][m].call(this,u)},pipe:function(h){return h.registerPrevious(this)},registerPrevious:function(h){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=h.streamInfo,this.mergeStreamInfo(),this.previous=h;var u=this;return h.on("data",function(m){u.processChunk(m)}),h.on("end",function(){u.end()}),h.on("error",function(m){u.error(m)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var h=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),h=!0),this.previous&&this.previous.resume(),!h},flush:function(){},processChunk:function(h){this.push(h)},withStreamInfo:function(h,u){return this.extraStreamInfo[h]=u,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var h in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,h)&&(this.streamInfo[h]=this.extraStreamInfo[h])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var h="Worker "+this.name;return this.previous?this.previous+" -> "+h:h}},d.exports=o},{}],29:[function(i,d,c){var o=i("../utils"),h=i("./ConvertWorker"),u=i("./GenericWorker"),m=i("../base64"),w=i("../support"),C=i("../external"),_=null;if(w.nodestream)try{_=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function S(E,v){return new C.Promise(function(k,b){var P=[],M=E._internalType,W=E._outputType,K=E._mimeType;E.on("data",function(nt,G){P.push(nt),v&&v(G)}).on("error",function(nt){P=[],b(nt)}).on("end",function(){try{var nt=(function(G,ut,tt){switch(G){case"blob":return o.newBlob(o.transformTo("arraybuffer",ut),tt);case"base64":return m.encode(ut);default:return o.transformTo(G,ut)}})(W,(function(G,ut){var tt,pt=0,Pt=null,R=0;for(tt=0;tt<ut.length;tt++)R+=ut[tt].length;switch(G){case"string":return ut.join("");case"array":return Array.prototype.concat.apply([],ut);case"uint8array":for(Pt=new Uint8Array(R),tt=0;tt<ut.length;tt++)Pt.set(ut[tt],pt),pt+=ut[tt].length;return Pt;case"nodebuffer":return Buffer.concat(ut);default:throw new Error("concat : unsupported type '"+G+"'")}})(M,P),K);k(nt)}catch(G){b(G)}P=[]}).resume()})}function g(E,v,k){var b=v;switch(v){case"blob":case"arraybuffer":b="uint8array";break;case"base64":b="string"}try{this._internalType=b,this._outputType=v,this._mimeType=k,o.checkSupport(b),this._worker=E.pipe(new h(b)),E.lock()}catch(P){this._worker=new u("error"),this._worker.error(P)}}g.prototype={accumulate:function(E){return S(this,E)},on:function(E,v){var k=this;return E==="data"?this._worker.on(E,function(b){v.call(k,b.data,b.meta)}):this._worker.on(E,function(){o.delay(v,arguments,k)}),this},resume:function(){return o.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(E){if(o.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new _(this,{objectMode:this._outputType!=="nodebuffer"},E)}},d.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,d,c){if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",c.nodebuffer=typeof Buffer<"u",c.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")c.blob=!1;else{var o=new ArrayBuffer(0);try{c.blob=new Blob([o],{type:"application/zip"}).size===0}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);h.append(o),c.blob=h.getBlob("application/zip").size===0}catch{c.blob=!1}}}try{c.nodestream=!!i("readable-stream").Readable}catch{c.nodestream=!1}},{"readable-stream":16}],31:[function(i,d,c){for(var o=i("./utils"),h=i("./support"),u=i("./nodejsUtils"),m=i("./stream/GenericWorker"),w=new Array(256),C=0;C<256;C++)w[C]=252<=C?6:248<=C?5:240<=C?4:224<=C?3:192<=C?2:1;w[254]=w[254]=1;function _(){m.call(this,"utf-8 decode"),this.leftOver=null}function S(){m.call(this,"utf-8 encode")}c.utf8encode=function(g){return h.nodebuffer?u.newBufferFrom(g,"utf-8"):(function(E){var v,k,b,P,M,W=E.length,K=0;for(P=0;P<W;P++)(64512&(k=E.charCodeAt(P)))==55296&&P+1<W&&(64512&(b=E.charCodeAt(P+1)))==56320&&(k=65536+(k-55296<<10)+(b-56320),P++),K+=k<128?1:k<2048?2:k<65536?3:4;for(v=h.uint8array?new Uint8Array(K):new Array(K),P=M=0;M<K;P++)(64512&(k=E.charCodeAt(P)))==55296&&P+1<W&&(64512&(b=E.charCodeAt(P+1)))==56320&&(k=65536+(k-55296<<10)+(b-56320),P++),k<128?v[M++]=k:(k<2048?v[M++]=192|k>>>6:(k<65536?v[M++]=224|k>>>12:(v[M++]=240|k>>>18,v[M++]=128|k>>>12&63),v[M++]=128|k>>>6&63),v[M++]=128|63&k);return v})(g)},c.utf8decode=function(g){return h.nodebuffer?o.transformTo("nodebuffer",g).toString("utf-8"):(function(E){var v,k,b,P,M=E.length,W=new Array(2*M);for(v=k=0;v<M;)if((b=E[v++])<128)W[k++]=b;else if(4<(P=w[b]))W[k++]=65533,v+=P-1;else{for(b&=P===2?31:P===3?15:7;1<P&&v<M;)b=b<<6|63&E[v++],P--;1<P?W[k++]=65533:b<65536?W[k++]=b:(b-=65536,W[k++]=55296|b>>10&1023,W[k++]=56320|1023&b)}return W.length!==k&&(W.subarray?W=W.subarray(0,k):W.length=k),o.applyFromCharCode(W)})(g=o.transformTo(h.uint8array?"uint8array":"array",g))},o.inherits(_,m),_.prototype.processChunk=function(g){var E=o.transformTo(h.uint8array?"uint8array":"array",g.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var v=E;(E=new Uint8Array(v.length+this.leftOver.length)).set(this.leftOver,0),E.set(v,this.leftOver.length)}else E=this.leftOver.concat(E);this.leftOver=null}var k=(function(P,M){var W;for((M=M||P.length)>P.length&&(M=P.length),W=M-1;0<=W&&(192&P[W])==128;)W--;return W<0||W===0?M:W+w[P[W]]>M?W:M})(E),b=E;k!==E.length&&(h.uint8array?(b=E.subarray(0,k),this.leftOver=E.subarray(k,E.length)):(b=E.slice(0,k),this.leftOver=E.slice(k,E.length))),this.push({data:c.utf8decode(b),meta:g.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:c.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},c.Utf8DecodeWorker=_,o.inherits(S,m),S.prototype.processChunk=function(g){this.push({data:c.utf8encode(g.data),meta:g.meta})},c.Utf8EncodeWorker=S},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,d,c){var o=i("./support"),h=i("./base64"),u=i("./nodejsUtils"),m=i("./external");function w(v){return v}function C(v,k){for(var b=0;b<v.length;++b)k[b]=255&v.charCodeAt(b);return k}i("setimmediate"),c.newBlob=function(v,k){c.checkSupport("blob");try{return new Blob([v],{type:k})}catch{try{var b=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return b.append(v),b.getBlob(k)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(v,k,b){var P=[],M=0,W=v.length;if(W<=b)return String.fromCharCode.apply(null,v);for(;M<W;)k==="array"||k==="nodebuffer"?P.push(String.fromCharCode.apply(null,v.slice(M,Math.min(M+b,W)))):P.push(String.fromCharCode.apply(null,v.subarray(M,Math.min(M+b,W)))),M+=b;return P.join("")},stringifyByChar:function(v){for(var k="",b=0;b<v.length;b++)k+=String.fromCharCode(v[b]);return k},applyCanBeUsed:{uint8array:(function(){try{return o.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return o.nodebuffer&&String.fromCharCode.apply(null,u.allocBuffer(1)).length===1}catch{return!1}})()}};function S(v){var k=65536,b=c.getTypeOf(v),P=!0;if(b==="uint8array"?P=_.applyCanBeUsed.uint8array:b==="nodebuffer"&&(P=_.applyCanBeUsed.nodebuffer),P)for(;1<k;)try{return _.stringifyByChunk(v,b,k)}catch{k=Math.floor(k/2)}return _.stringifyByChar(v)}function g(v,k){for(var b=0;b<v.length;b++)k[b]=v[b];return k}c.applyFromCharCode=S;var E={};E.string={string:w,array:function(v){return C(v,new Array(v.length))},arraybuffer:function(v){return E.string.uint8array(v).buffer},uint8array:function(v){return C(v,new Uint8Array(v.length))},nodebuffer:function(v){return C(v,u.allocBuffer(v.length))}},E.array={string:S,array:w,arraybuffer:function(v){return new Uint8Array(v).buffer},uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return u.newBufferFrom(v)}},E.arraybuffer={string:function(v){return S(new Uint8Array(v))},array:function(v){return g(new Uint8Array(v),new Array(v.byteLength))},arraybuffer:w,uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return u.newBufferFrom(new Uint8Array(v))}},E.uint8array={string:S,array:function(v){return g(v,new Array(v.length))},arraybuffer:function(v){return v.buffer},uint8array:w,nodebuffer:function(v){return u.newBufferFrom(v)}},E.nodebuffer={string:S,array:function(v){return g(v,new Array(v.length))},arraybuffer:function(v){return E.nodebuffer.uint8array(v).buffer},uint8array:function(v){return g(v,new Uint8Array(v.length))},nodebuffer:w},c.transformTo=function(v,k){if(k=k||"",!v)return k;c.checkSupport(v);var b=c.getTypeOf(k);return E[b][v](k)},c.resolve=function(v){for(var k=v.split("/"),b=[],P=0;P<k.length;P++){var M=k[P];M==="."||M===""&&P!==0&&P!==k.length-1||(M===".."?b.pop():b.push(M))}return b.join("/")},c.getTypeOf=function(v){return typeof v=="string"?"string":Object.prototype.toString.call(v)==="[object Array]"?"array":o.nodebuffer&&u.isBuffer(v)?"nodebuffer":o.uint8array&&v instanceof Uint8Array?"uint8array":o.arraybuffer&&v instanceof ArrayBuffer?"arraybuffer":void 0},c.checkSupport=function(v){if(!o[v.toLowerCase()])throw new Error(v+" is not supported by this platform")},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(v){var k,b,P="";for(b=0;b<(v||"").length;b++)P+="\\x"+((k=v.charCodeAt(b))<16?"0":"")+k.toString(16).toUpperCase();return P},c.delay=function(v,k,b){setImmediate(function(){v.apply(b||null,k||[])})},c.inherits=function(v,k){function b(){}b.prototype=k.prototype,v.prototype=new b},c.extend=function(){var v,k,b={};for(v=0;v<arguments.length;v++)for(k in arguments[v])Object.prototype.hasOwnProperty.call(arguments[v],k)&&b[k]===void 0&&(b[k]=arguments[v][k]);return b},c.prepareContent=function(v,k,b,P,M){return m.Promise.resolve(k).then(function(W){return o.blob&&(W instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(W))!==-1)&&typeof FileReader<"u"?new m.Promise(function(K,nt){var G=new FileReader;G.onload=function(ut){K(ut.target.result)},G.onerror=function(ut){nt(ut.target.error)},G.readAsArrayBuffer(W)}):W}).then(function(W){var K=c.getTypeOf(W);return K?(K==="arraybuffer"?W=c.transformTo("uint8array",W):K==="string"&&(M?W=h.decode(W):b&&P!==!0&&(W=(function(nt){return C(nt,o.uint8array?new Uint8Array(nt.length):new Array(nt.length))})(W))),W):m.Promise.reject(new Error("Can't read the data of '"+v+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,d,c){var o=i("./reader/readerFor"),h=i("./utils"),u=i("./signature"),m=i("./zipEntry"),w=i("./support");function C(_){this.files=[],this.loadOptions=_}C.prototype={checkSignature:function(_){if(!this.reader.readAndCheckSignature(_)){this.reader.index-=4;var S=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+h.pretty(S)+", expected "+h.pretty(_)+")")}},isSignature:function(_,S){var g=this.reader.index;this.reader.setIndex(_);var E=this.reader.readString(4)===S;return this.reader.setIndex(g),E},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var _=this.reader.readData(this.zipCommentLength),S=w.uint8array?"uint8array":"array",g=h.transformTo(S,_);this.zipComment=this.loadOptions.decodeFileName(g)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var _,S,g,E=this.zip64EndOfCentralSize-44;0<E;)_=this.reader.readInt(2),S=this.reader.readInt(4),g=this.reader.readData(S),this.zip64ExtensibleData[_]={id:_,length:S,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var _,S;for(_=0;_<this.files.length;_++)S=this.files[_],this.reader.setIndex(S.localHeaderOffset),this.checkSignature(u.LOCAL_FILE_HEADER),S.readLocalPart(this.reader),S.handleUTF8(),S.processAttributes()},readCentralDir:function(){var _;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(u.CENTRAL_FILE_HEADER);)(_=new m({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(_);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var _=this.reader.lastIndexOfSignature(u.CENTRAL_DIRECTORY_END);if(_<0)throw this.isSignature(0,u.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(_);var S=_;if(this.checkSignature(u.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===h.MAX_VALUE_16BITS||this.diskWithCentralDirStart===h.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===h.MAX_VALUE_16BITS||this.centralDirRecords===h.MAX_VALUE_16BITS||this.centralDirSize===h.MAX_VALUE_32BITS||this.centralDirOffset===h.MAX_VALUE_32BITS){if(this.zip64=!0,(_=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(_),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,u.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var g=this.centralDirOffset+this.centralDirSize;this.zip64&&(g+=20,g+=12+this.zip64EndOfCentralSize);var E=S-g;if(0<E)this.isSignature(S,u.CENTRAL_FILE_HEADER)||(this.reader.zero=E);else if(E<0)throw new Error("Corrupted zip: missing "+Math.abs(E)+" bytes.")},prepareReader:function(_){this.reader=o(_)},load:function(_){this.prepareReader(_),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},d.exports=C},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,d,c){var o=i("./reader/readerFor"),h=i("./utils"),u=i("./compressedObject"),m=i("./crc32"),w=i("./utf8"),C=i("./compressions"),_=i("./support");function S(g,E){this.options=g,this.loadOptions=E}S.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(g){var E,v;if(g.skip(22),this.fileNameLength=g.readInt(2),v=g.readInt(2),this.fileName=g.readData(this.fileNameLength),g.skip(v),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((E=(function(k){for(var b in C)if(Object.prototype.hasOwnProperty.call(C,b)&&C[b].magic===k)return C[b];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+h.pretty(this.compressionMethod)+" unknown (inner file : "+h.transformTo("string",this.fileName)+")");this.decompressed=new u(this.compressedSize,this.uncompressedSize,this.crc32,E,g.readData(this.compressedSize))},readCentralPart:function(g){this.versionMadeBy=g.readInt(2),g.skip(2),this.bitFlag=g.readInt(2),this.compressionMethod=g.readString(2),this.date=g.readDate(),this.crc32=g.readInt(4),this.compressedSize=g.readInt(4),this.uncompressedSize=g.readInt(4);var E=g.readInt(2);if(this.extraFieldsLength=g.readInt(2),this.fileCommentLength=g.readInt(2),this.diskNumberStart=g.readInt(2),this.internalFileAttributes=g.readInt(2),this.externalFileAttributes=g.readInt(4),this.localHeaderOffset=g.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");g.skip(E),this.readExtraFields(g),this.parseZIP64ExtraField(g),this.fileComment=g.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var g=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),g==0&&(this.dosPermissions=63&this.externalFileAttributes),g==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var g=o(this.extraFields[1].value);this.uncompressedSize===h.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===h.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===h.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===h.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(g){var E,v,k,b=g.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});g.index+4<b;)E=g.readInt(2),v=g.readInt(2),k=g.readData(v),this.extraFields[E]={id:E,length:v,value:k};g.setIndex(b)},handleUTF8:function(){var g=_.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=w.utf8decode(this.fileName),this.fileCommentStr=w.utf8decode(this.fileComment);else{var E=this.findExtraFieldUnicodePath();if(E!==null)this.fileNameStr=E;else{var v=h.transformTo(g,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(v)}var k=this.findExtraFieldUnicodeComment();if(k!==null)this.fileCommentStr=k;else{var b=h.transformTo(g,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(b)}}},findExtraFieldUnicodePath:function(){var g=this.extraFields[28789];if(g){var E=o(g.value);return E.readInt(1)!==1||m(this.fileName)!==E.readInt(4)?null:w.utf8decode(E.readData(g.length-5))}return null},findExtraFieldUnicodeComment:function(){var g=this.extraFields[25461];if(g){var E=o(g.value);return E.readInt(1)!==1||m(this.fileComment)!==E.readInt(4)?null:w.utf8decode(E.readData(g.length-5))}return null}},d.exports=S},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,d,c){function o(E,v,k){this.name=E,this.dir=k.dir,this.date=k.date,this.comment=k.comment,this.unixPermissions=k.unixPermissions,this.dosPermissions=k.dosPermissions,this._data=v,this._dataBinary=k.binary,this.options={compression:k.compression,compressionOptions:k.compressionOptions}}var h=i("./stream/StreamHelper"),u=i("./stream/DataWorker"),m=i("./utf8"),w=i("./compressedObject"),C=i("./stream/GenericWorker");o.prototype={internalStream:function(E){var v=null,k="string";try{if(!E)throw new Error("No output type specified.");var b=(k=E.toLowerCase())==="string"||k==="text";k!=="binarystring"&&k!=="text"||(k="string"),v=this._decompressWorker();var P=!this._dataBinary;P&&!b&&(v=v.pipe(new m.Utf8EncodeWorker)),!P&&b&&(v=v.pipe(new m.Utf8DecodeWorker))}catch(M){(v=new C("error")).error(M)}return new h(v,k,"")},async:function(E,v){return this.internalStream(E).accumulate(v)},nodeStream:function(E,v){return this.internalStream(E||"nodebuffer").toNodejsStream(v)},_compressWorker:function(E,v){if(this._data instanceof w&&this._data.compression.magic===E.magic)return this._data.getCompressedWorker();var k=this._decompressWorker();return this._dataBinary||(k=k.pipe(new m.Utf8EncodeWorker)),w.createWorkerFrom(k,E,v)},_decompressWorker:function(){return this._data instanceof w?this._data.getContentWorker():this._data instanceof C?this._data:new u(this._data)}};for(var _=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],S=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},g=0;g<_.length;g++)o.prototype[_[g]]=S;d.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,d,c){(function(o){var h,u,m=o.MutationObserver||o.WebKitMutationObserver;if(m){var w=0,C=new m(E),_=o.document.createTextNode("");C.observe(_,{characterData:!0}),h=function(){_.data=w=++w%2}}else if(o.setImmediate||o.MessageChannel===void 0)h="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var v=o.document.createElement("script");v.onreadystatechange=function(){E(),v.onreadystatechange=null,v.parentNode.removeChild(v),v=null},o.document.documentElement.appendChild(v)}:function(){setTimeout(E,0)};else{var S=new o.MessageChannel;S.port1.onmessage=E,h=function(){S.port2.postMessage(0)}}var g=[];function E(){var v,k;u=!0;for(var b=g.length;b;){for(k=g,g=[],v=-1;++v<b;)k[v]();b=g.length}u=!1}d.exports=function(v){g.push(v)!==1||u||h()}}).call(this,typeof Te<"u"?Te:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,d,c){var o=i("immediate");function h(){}var u={},m=["REJECTED"],w=["FULFILLED"],C=["PENDING"];function _(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=C,this.queue=[],this.outcome=void 0,b!==h&&v(this,b)}function S(b,P,M){this.promise=b,typeof P=="function"&&(this.onFulfilled=P,this.callFulfilled=this.otherCallFulfilled),typeof M=="function"&&(this.onRejected=M,this.callRejected=this.otherCallRejected)}function g(b,P,M){o(function(){var W;try{W=P(M)}catch(K){return u.reject(b,K)}W===b?u.reject(b,new TypeError("Cannot resolve promise with itself")):u.resolve(b,W)})}function E(b){var P=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof P=="function")return function(){P.apply(b,arguments)}}function v(b,P){var M=!1;function W(G){M||(M=!0,u.reject(b,G))}function K(G){M||(M=!0,u.resolve(b,G))}var nt=k(function(){P(K,W)});nt.status==="error"&&W(nt.value)}function k(b,P){var M={};try{M.value=b(P),M.status="success"}catch(W){M.status="error",M.value=W}return M}(d.exports=_).prototype.finally=function(b){if(typeof b!="function")return this;var P=this.constructor;return this.then(function(M){return P.resolve(b()).then(function(){return M})},function(M){return P.resolve(b()).then(function(){throw M})})},_.prototype.catch=function(b){return this.then(null,b)},_.prototype.then=function(b,P){if(typeof b!="function"&&this.state===w||typeof P!="function"&&this.state===m)return this;var M=new this.constructor(h);return this.state!==C?g(M,this.state===w?b:P,this.outcome):this.queue.push(new S(M,b,P)),M},S.prototype.callFulfilled=function(b){u.resolve(this.promise,b)},S.prototype.otherCallFulfilled=function(b){g(this.promise,this.onFulfilled,b)},S.prototype.callRejected=function(b){u.reject(this.promise,b)},S.prototype.otherCallRejected=function(b){g(this.promise,this.onRejected,b)},u.resolve=function(b,P){var M=k(E,P);if(M.status==="error")return u.reject(b,M.value);var W=M.value;if(W)v(b,W);else{b.state=w,b.outcome=P;for(var K=-1,nt=b.queue.length;++K<nt;)b.queue[K].callFulfilled(P)}return b},u.reject=function(b,P){b.state=m,b.outcome=P;for(var M=-1,W=b.queue.length;++M<W;)b.queue[M].callRejected(P);return b},_.resolve=function(b){return b instanceof this?b:u.resolve(new this(h),b)},_.reject=function(b){var P=new this(h);return u.reject(P,b)},_.all=function(b){var P=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=b.length,W=!1;if(!M)return this.resolve([]);for(var K=new Array(M),nt=0,G=-1,ut=new this(h);++G<M;)tt(b[G],G);return ut;function tt(pt,Pt){P.resolve(pt).then(function(R){K[Pt]=R,++nt!==M||W||(W=!0,u.resolve(ut,K))},function(R){W||(W=!0,u.reject(ut,R))})}},_.race=function(b){var P=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=b.length,W=!1;if(!M)return this.resolve([]);for(var K=-1,nt=new this(h);++K<M;)G=b[K],P.resolve(G).then(function(ut){W||(W=!0,u.resolve(nt,ut))},function(ut){W||(W=!0,u.reject(nt,ut))});var G;return nt}},{immediate:36}],38:[function(i,d,c){var o={};(0,i("./lib/utils/common").assign)(o,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),d.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,d,c){var o=i("./zlib/deflate"),h=i("./utils/common"),u=i("./utils/strings"),m=i("./zlib/messages"),w=i("./zlib/zstream"),C=Object.prototype.toString,_=0,S=-1,g=0,E=8;function v(b){if(!(this instanceof v))return new v(b);this.options=h.assign({level:S,method:E,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},b||{});var P=this.options;P.raw&&0<P.windowBits?P.windowBits=-P.windowBits:P.gzip&&0<P.windowBits&&P.windowBits<16&&(P.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var M=o.deflateInit2(this.strm,P.level,P.method,P.windowBits,P.memLevel,P.strategy);if(M!==_)throw new Error(m[M]);if(P.header&&o.deflateSetHeader(this.strm,P.header),P.dictionary){var W;if(W=typeof P.dictionary=="string"?u.string2buf(P.dictionary):C.call(P.dictionary)==="[object ArrayBuffer]"?new Uint8Array(P.dictionary):P.dictionary,(M=o.deflateSetDictionary(this.strm,W))!==_)throw new Error(m[M]);this._dict_set=!0}}function k(b,P){var M=new v(P);if(M.push(b,!0),M.err)throw M.msg||m[M.err];return M.result}v.prototype.push=function(b,P){var M,W,K=this.strm,nt=this.options.chunkSize;if(this.ended)return!1;W=P===~~P?P:P===!0?4:0,typeof b=="string"?K.input=u.string2buf(b):C.call(b)==="[object ArrayBuffer]"?K.input=new Uint8Array(b):K.input=b,K.next_in=0,K.avail_in=K.input.length;do{if(K.avail_out===0&&(K.output=new h.Buf8(nt),K.next_out=0,K.avail_out=nt),(M=o.deflate(K,W))!==1&&M!==_)return this.onEnd(M),!(this.ended=!0);K.avail_out!==0&&(K.avail_in!==0||W!==4&&W!==2)||(this.options.to==="string"?this.onData(u.buf2binstring(h.shrinkBuf(K.output,K.next_out))):this.onData(h.shrinkBuf(K.output,K.next_out)))}while((0<K.avail_in||K.avail_out===0)&&M!==1);return W===4?(M=o.deflateEnd(this.strm),this.onEnd(M),this.ended=!0,M===_):W!==2||(this.onEnd(_),!(K.avail_out=0))},v.prototype.onData=function(b){this.chunks.push(b)},v.prototype.onEnd=function(b){b===_&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=b,this.msg=this.strm.msg},c.Deflate=v,c.deflate=k,c.deflateRaw=function(b,P){return(P=P||{}).raw=!0,k(b,P)},c.gzip=function(b,P){return(P=P||{}).gzip=!0,k(b,P)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,d,c){var o=i("./zlib/inflate"),h=i("./utils/common"),u=i("./utils/strings"),m=i("./zlib/constants"),w=i("./zlib/messages"),C=i("./zlib/zstream"),_=i("./zlib/gzheader"),S=Object.prototype.toString;function g(v){if(!(this instanceof g))return new g(v);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},v||{});var k=this.options;k.raw&&0<=k.windowBits&&k.windowBits<16&&(k.windowBits=-k.windowBits,k.windowBits===0&&(k.windowBits=-15)),!(0<=k.windowBits&&k.windowBits<16)||v&&v.windowBits||(k.windowBits+=32),15<k.windowBits&&k.windowBits<48&&(15&k.windowBits)==0&&(k.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new C,this.strm.avail_out=0;var b=o.inflateInit2(this.strm,k.windowBits);if(b!==m.Z_OK)throw new Error(w[b]);this.header=new _,o.inflateGetHeader(this.strm,this.header)}function E(v,k){var b=new g(k);if(b.push(v,!0),b.err)throw b.msg||w[b.err];return b.result}g.prototype.push=function(v,k){var b,P,M,W,K,nt,G=this.strm,ut=this.options.chunkSize,tt=this.options.dictionary,pt=!1;if(this.ended)return!1;P=k===~~k?k:k===!0?m.Z_FINISH:m.Z_NO_FLUSH,typeof v=="string"?G.input=u.binstring2buf(v):S.call(v)==="[object ArrayBuffer]"?G.input=new Uint8Array(v):G.input=v,G.next_in=0,G.avail_in=G.input.length;do{if(G.avail_out===0&&(G.output=new h.Buf8(ut),G.next_out=0,G.avail_out=ut),(b=o.inflate(G,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&tt&&(nt=typeof tt=="string"?u.string2buf(tt):S.call(tt)==="[object ArrayBuffer]"?new Uint8Array(tt):tt,b=o.inflateSetDictionary(this.strm,nt)),b===m.Z_BUF_ERROR&&pt===!0&&(b=m.Z_OK,pt=!1),b!==m.Z_STREAM_END&&b!==m.Z_OK)return this.onEnd(b),!(this.ended=!0);G.next_out&&(G.avail_out!==0&&b!==m.Z_STREAM_END&&(G.avail_in!==0||P!==m.Z_FINISH&&P!==m.Z_SYNC_FLUSH)||(this.options.to==="string"?(M=u.utf8border(G.output,G.next_out),W=G.next_out-M,K=u.buf2string(G.output,M),G.next_out=W,G.avail_out=ut-W,W&&h.arraySet(G.output,G.output,M,W,0),this.onData(K)):this.onData(h.shrinkBuf(G.output,G.next_out)))),G.avail_in===0&&G.avail_out===0&&(pt=!0)}while((0<G.avail_in||G.avail_out===0)&&b!==m.Z_STREAM_END);return b===m.Z_STREAM_END&&(P=m.Z_FINISH),P===m.Z_FINISH?(b=o.inflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===m.Z_OK):P!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(G.avail_out=0))},g.prototype.onData=function(v){this.chunks.push(v)},g.prototype.onEnd=function(v){v===m.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},c.Inflate=g,c.inflate=E,c.inflateRaw=function(v,k){return(k=k||{}).raw=!0,E(v,k)},c.ungzip=E},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,d,c){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";c.assign=function(m){for(var w=Array.prototype.slice.call(arguments,1);w.length;){var C=w.shift();if(C){if(typeof C!="object")throw new TypeError(C+"must be non-object");for(var _ in C)C.hasOwnProperty(_)&&(m[_]=C[_])}}return m},c.shrinkBuf=function(m,w){return m.length===w?m:m.subarray?m.subarray(0,w):(m.length=w,m)};var h={arraySet:function(m,w,C,_,S){if(w.subarray&&m.subarray)m.set(w.subarray(C,C+_),S);else for(var g=0;g<_;g++)m[S+g]=w[C+g]},flattenChunks:function(m){var w,C,_,S,g,E;for(w=_=0,C=m.length;w<C;w++)_+=m[w].length;for(E=new Uint8Array(_),w=S=0,C=m.length;w<C;w++)g=m[w],E.set(g,S),S+=g.length;return E}},u={arraySet:function(m,w,C,_,S){for(var g=0;g<_;g++)m[S+g]=w[C+g]},flattenChunks:function(m){return[].concat.apply([],m)}};c.setTyped=function(m){m?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,h)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,u))},c.setTyped(o)},{}],42:[function(i,d,c){var o=i("./common"),h=!0,u=!0;try{String.fromCharCode.apply(null,[0])}catch{h=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{u=!1}for(var m=new o.Buf8(256),w=0;w<256;w++)m[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;function C(_,S){if(S<65537&&(_.subarray&&u||!_.subarray&&h))return String.fromCharCode.apply(null,o.shrinkBuf(_,S));for(var g="",E=0;E<S;E++)g+=String.fromCharCode(_[E]);return g}m[254]=m[254]=1,c.string2buf=function(_){var S,g,E,v,k,b=_.length,P=0;for(v=0;v<b;v++)(64512&(g=_.charCodeAt(v)))==55296&&v+1<b&&(64512&(E=_.charCodeAt(v+1)))==56320&&(g=65536+(g-55296<<10)+(E-56320),v++),P+=g<128?1:g<2048?2:g<65536?3:4;for(S=new o.Buf8(P),v=k=0;k<P;v++)(64512&(g=_.charCodeAt(v)))==55296&&v+1<b&&(64512&(E=_.charCodeAt(v+1)))==56320&&(g=65536+(g-55296<<10)+(E-56320),v++),g<128?S[k++]=g:(g<2048?S[k++]=192|g>>>6:(g<65536?S[k++]=224|g>>>12:(S[k++]=240|g>>>18,S[k++]=128|g>>>12&63),S[k++]=128|g>>>6&63),S[k++]=128|63&g);return S},c.buf2binstring=function(_){return C(_,_.length)},c.binstring2buf=function(_){for(var S=new o.Buf8(_.length),g=0,E=S.length;g<E;g++)S[g]=_.charCodeAt(g);return S},c.buf2string=function(_,S){var g,E,v,k,b=S||_.length,P=new Array(2*b);for(g=E=0;g<b;)if((v=_[g++])<128)P[E++]=v;else if(4<(k=m[v]))P[E++]=65533,g+=k-1;else{for(v&=k===2?31:k===3?15:7;1<k&&g<b;)v=v<<6|63&_[g++],k--;1<k?P[E++]=65533:v<65536?P[E++]=v:(v-=65536,P[E++]=55296|v>>10&1023,P[E++]=56320|1023&v)}return C(P,E)},c.utf8border=function(_,S){var g;for((S=S||_.length)>_.length&&(S=_.length),g=S-1;0<=g&&(192&_[g])==128;)g--;return g<0||g===0?S:g+m[_[g]]>S?g:S}},{"./common":41}],43:[function(i,d,c){d.exports=function(o,h,u,m){for(var w=65535&o|0,C=o>>>16&65535|0,_=0;u!==0;){for(u-=_=2e3<u?2e3:u;C=C+(w=w+h[m++]|0)|0,--_;);w%=65521,C%=65521}return w|C<<16|0}},{}],44:[function(i,d,c){d.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,d,c){var o=(function(){for(var h,u=[],m=0;m<256;m++){h=m;for(var w=0;w<8;w++)h=1&h?3988292384^h>>>1:h>>>1;u[m]=h}return u})();d.exports=function(h,u,m,w){var C=o,_=w+m;h^=-1;for(var S=w;S<_;S++)h=h>>>8^C[255&(h^u[S])];return-1^h}},{}],46:[function(i,d,c){var o,h=i("../utils/common"),u=i("./trees"),m=i("./adler32"),w=i("./crc32"),C=i("./messages"),_=0,S=4,g=0,E=-2,v=-1,k=4,b=2,P=8,M=9,W=286,K=30,nt=19,G=2*W+1,ut=15,tt=3,pt=258,Pt=pt+tt+1,R=42,Q=113,p=1,it=2,Tt=3,lt=4;function $t(l,et){return l.msg=C[et],et}function st(l){return(l<<1)-(4<l?9:0)}function Ot(l){for(var et=l.length;0<=--et;)l[et]=0}function X(l){var et=l.state,Y=et.pending;Y>l.avail_out&&(Y=l.avail_out),Y!==0&&(h.arraySet(l.output,et.pending_buf,et.pending_out,Y,l.next_out),l.next_out+=Y,et.pending_out+=Y,l.total_out+=Y,l.avail_out-=Y,et.pending-=Y,et.pending===0&&(et.pending_out=0))}function V(l,et){u._tr_flush_block(l,0<=l.block_start?l.block_start:-1,l.strstart-l.block_start,et),l.block_start=l.strstart,X(l.strm)}function At(l,et){l.pending_buf[l.pending++]=et}function xt(l,et){l.pending_buf[l.pending++]=et>>>8&255,l.pending_buf[l.pending++]=255&et}function vt(l,et){var Y,A,x=l.max_chain_length,N=l.strstart,ot=l.prev_length,at=l.nice_match,Z=l.strstart>l.w_size-Pt?l.strstart-(l.w_size-Pt):0,ct=l.window,kt=l.w_mask,dt=l.prev,Et=l.strstart+pt,Lt=ct[N+ot-1],Mt=ct[N+ot];l.prev_length>=l.good_match&&(x>>=2),at>l.lookahead&&(at=l.lookahead);do if(ct[(Y=et)+ot]===Mt&&ct[Y+ot-1]===Lt&&ct[Y]===ct[N]&&ct[++Y]===ct[N+1]){N+=2,Y++;do;while(ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&N<Et);if(A=pt-(Et-N),N=Et-pt,ot<A){if(l.match_start=et,at<=(ot=A))break;Lt=ct[N+ot-1],Mt=ct[N+ot]}}while((et=dt[et&kt])>Z&&--x!=0);return ot<=l.lookahead?ot:l.lookahead}function qt(l){var et,Y,A,x,N,ot,at,Z,ct,kt,dt=l.w_size;do{if(x=l.window_size-l.lookahead-l.strstart,l.strstart>=dt+(dt-Pt)){for(h.arraySet(l.window,l.window,dt,dt,0),l.match_start-=dt,l.strstart-=dt,l.block_start-=dt,et=Y=l.hash_size;A=l.head[--et],l.head[et]=dt<=A?A-dt:0,--Y;);for(et=Y=dt;A=l.prev[--et],l.prev[et]=dt<=A?A-dt:0,--Y;);x+=dt}if(l.strm.avail_in===0)break;if(ot=l.strm,at=l.window,Z=l.strstart+l.lookahead,ct=x,kt=void 0,kt=ot.avail_in,ct<kt&&(kt=ct),Y=kt===0?0:(ot.avail_in-=kt,h.arraySet(at,ot.input,ot.next_in,kt,Z),ot.state.wrap===1?ot.adler=m(ot.adler,at,kt,Z):ot.state.wrap===2&&(ot.adler=w(ot.adler,at,kt,Z)),ot.next_in+=kt,ot.total_in+=kt,kt),l.lookahead+=Y,l.lookahead+l.insert>=tt)for(N=l.strstart-l.insert,l.ins_h=l.window[N],l.ins_h=(l.ins_h<<l.hash_shift^l.window[N+1])&l.hash_mask;l.insert&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[N+tt-1])&l.hash_mask,l.prev[N&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=N,N++,l.insert--,!(l.lookahead+l.insert<tt)););}while(l.lookahead<Pt&&l.strm.avail_in!==0)}function Jt(l,et){for(var Y,A;;){if(l.lookahead<Pt){if(qt(l),l.lookahead<Pt&&et===_)return p;if(l.lookahead===0)break}if(Y=0,l.lookahead>=tt&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+tt-1])&l.hash_mask,Y=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),Y!==0&&l.strstart-Y<=l.w_size-Pt&&(l.match_length=vt(l,Y)),l.match_length>=tt)if(A=u._tr_tally(l,l.strstart-l.match_start,l.match_length-tt),l.lookahead-=l.match_length,l.match_length<=l.max_lazy_match&&l.lookahead>=tt){for(l.match_length--;l.strstart++,l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+tt-1])&l.hash_mask,Y=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart,--l.match_length!=0;);l.strstart++}else l.strstart+=l.match_length,l.match_length=0,l.ins_h=l.window[l.strstart],l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+1])&l.hash_mask;else A=u._tr_tally(l,0,l.window[l.strstart]),l.lookahead--,l.strstart++;if(A&&(V(l,!1),l.strm.avail_out===0))return p}return l.insert=l.strstart<tt-1?l.strstart:tt-1,et===S?(V(l,!0),l.strm.avail_out===0?Tt:lt):l.last_lit&&(V(l,!1),l.strm.avail_out===0)?p:it}function jt(l,et){for(var Y,A,x;;){if(l.lookahead<Pt){if(qt(l),l.lookahead<Pt&&et===_)return p;if(l.lookahead===0)break}if(Y=0,l.lookahead>=tt&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+tt-1])&l.hash_mask,Y=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),l.prev_length=l.match_length,l.prev_match=l.match_start,l.match_length=tt-1,Y!==0&&l.prev_length<l.max_lazy_match&&l.strstart-Y<=l.w_size-Pt&&(l.match_length=vt(l,Y),l.match_length<=5&&(l.strategy===1||l.match_length===tt&&4096<l.strstart-l.match_start)&&(l.match_length=tt-1)),l.prev_length>=tt&&l.match_length<=l.prev_length){for(x=l.strstart+l.lookahead-tt,A=u._tr_tally(l,l.strstart-1-l.prev_match,l.prev_length-tt),l.lookahead-=l.prev_length-1,l.prev_length-=2;++l.strstart<=x&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+tt-1])&l.hash_mask,Y=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),--l.prev_length!=0;);if(l.match_available=0,l.match_length=tt-1,l.strstart++,A&&(V(l,!1),l.strm.avail_out===0))return p}else if(l.match_available){if((A=u._tr_tally(l,0,l.window[l.strstart-1]))&&V(l,!1),l.strstart++,l.lookahead--,l.strm.avail_out===0)return p}else l.match_available=1,l.strstart++,l.lookahead--}return l.match_available&&(A=u._tr_tally(l,0,l.window[l.strstart-1]),l.match_available=0),l.insert=l.strstart<tt-1?l.strstart:tt-1,et===S?(V(l,!0),l.strm.avail_out===0?Tt:lt):l.last_lit&&(V(l,!1),l.strm.avail_out===0)?p:it}function mt(l,et,Y,A,x){this.good_length=l,this.max_lazy=et,this.nice_length=Y,this.max_chain=A,this.func=x}function Xt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=P,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new h.Buf16(2*G),this.dyn_dtree=new h.Buf16(2*(2*K+1)),this.bl_tree=new h.Buf16(2*(2*nt+1)),Ot(this.dyn_ltree),Ot(this.dyn_dtree),Ot(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new h.Buf16(ut+1),this.heap=new h.Buf16(2*W+1),Ot(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new h.Buf16(2*W+1),Ot(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Wt(l){var et;return l&&l.state?(l.total_in=l.total_out=0,l.data_type=b,(et=l.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?R:Q,l.adler=et.wrap===2?0:1,et.last_flush=_,u._tr_init(et),g):$t(l,E)}function It(l){var et=Wt(l);return et===g&&(function(Y){Y.window_size=2*Y.w_size,Ot(Y.head),Y.max_lazy_match=o[Y.level].max_lazy,Y.good_match=o[Y.level].good_length,Y.nice_match=o[Y.level].nice_length,Y.max_chain_length=o[Y.level].max_chain,Y.strstart=0,Y.block_start=0,Y.lookahead=0,Y.insert=0,Y.match_length=Y.prev_length=tt-1,Y.match_available=0,Y.ins_h=0})(l.state),et}function ae(l,et,Y,A,x,N){if(!l)return E;var ot=1;if(et===v&&(et=6),A<0?(ot=0,A=-A):15<A&&(ot=2,A-=16),x<1||M<x||Y!==P||A<8||15<A||et<0||9<et||N<0||k<N)return $t(l,E);A===8&&(A=9);var at=new Xt;return(l.state=at).strm=l,at.wrap=ot,at.gzhead=null,at.w_bits=A,at.w_size=1<<at.w_bits,at.w_mask=at.w_size-1,at.hash_bits=x+7,at.hash_size=1<<at.hash_bits,at.hash_mask=at.hash_size-1,at.hash_shift=~~((at.hash_bits+tt-1)/tt),at.window=new h.Buf8(2*at.w_size),at.head=new h.Buf16(at.hash_size),at.prev=new h.Buf16(at.w_size),at.lit_bufsize=1<<x+6,at.pending_buf_size=4*at.lit_bufsize,at.pending_buf=new h.Buf8(at.pending_buf_size),at.d_buf=1*at.lit_bufsize,at.l_buf=3*at.lit_bufsize,at.level=et,at.strategy=N,at.method=Y,It(l)}o=[new mt(0,0,0,0,function(l,et){var Y=65535;for(Y>l.pending_buf_size-5&&(Y=l.pending_buf_size-5);;){if(l.lookahead<=1){if(qt(l),l.lookahead===0&&et===_)return p;if(l.lookahead===0)break}l.strstart+=l.lookahead,l.lookahead=0;var A=l.block_start+Y;if((l.strstart===0||l.strstart>=A)&&(l.lookahead=l.strstart-A,l.strstart=A,V(l,!1),l.strm.avail_out===0)||l.strstart-l.block_start>=l.w_size-Pt&&(V(l,!1),l.strm.avail_out===0))return p}return l.insert=0,et===S?(V(l,!0),l.strm.avail_out===0?Tt:lt):(l.strstart>l.block_start&&(V(l,!1),l.strm.avail_out),p)}),new mt(4,4,8,4,Jt),new mt(4,5,16,8,Jt),new mt(4,6,32,32,Jt),new mt(4,4,16,16,jt),new mt(8,16,32,32,jt),new mt(8,16,128,128,jt),new mt(8,32,128,256,jt),new mt(32,128,258,1024,jt),new mt(32,258,258,4096,jt)],c.deflateInit=function(l,et){return ae(l,et,P,15,8,0)},c.deflateInit2=ae,c.deflateReset=It,c.deflateResetKeep=Wt,c.deflateSetHeader=function(l,et){return l&&l.state?l.state.wrap!==2?E:(l.state.gzhead=et,g):E},c.deflate=function(l,et){var Y,A,x,N;if(!l||!l.state||5<et||et<0)return l?$t(l,E):E;if(A=l.state,!l.output||!l.input&&l.avail_in!==0||A.status===666&&et!==S)return $t(l,l.avail_out===0?-5:E);if(A.strm=l,Y=A.last_flush,A.last_flush=et,A.status===R)if(A.wrap===2)l.adler=0,At(A,31),At(A,139),At(A,8),A.gzhead?(At(A,(A.gzhead.text?1:0)+(A.gzhead.hcrc?2:0)+(A.gzhead.extra?4:0)+(A.gzhead.name?8:0)+(A.gzhead.comment?16:0)),At(A,255&A.gzhead.time),At(A,A.gzhead.time>>8&255),At(A,A.gzhead.time>>16&255),At(A,A.gzhead.time>>24&255),At(A,A.level===9?2:2<=A.strategy||A.level<2?4:0),At(A,255&A.gzhead.os),A.gzhead.extra&&A.gzhead.extra.length&&(At(A,255&A.gzhead.extra.length),At(A,A.gzhead.extra.length>>8&255)),A.gzhead.hcrc&&(l.adler=w(l.adler,A.pending_buf,A.pending,0)),A.gzindex=0,A.status=69):(At(A,0),At(A,0),At(A,0),At(A,0),At(A,0),At(A,A.level===9?2:2<=A.strategy||A.level<2?4:0),At(A,3),A.status=Q);else{var ot=P+(A.w_bits-8<<4)<<8;ot|=(2<=A.strategy||A.level<2?0:A.level<6?1:A.level===6?2:3)<<6,A.strstart!==0&&(ot|=32),ot+=31-ot%31,A.status=Q,xt(A,ot),A.strstart!==0&&(xt(A,l.adler>>>16),xt(A,65535&l.adler)),l.adler=1}if(A.status===69)if(A.gzhead.extra){for(x=A.pending;A.gzindex<(65535&A.gzhead.extra.length)&&(A.pending!==A.pending_buf_size||(A.gzhead.hcrc&&A.pending>x&&(l.adler=w(l.adler,A.pending_buf,A.pending-x,x)),X(l),x=A.pending,A.pending!==A.pending_buf_size));)At(A,255&A.gzhead.extra[A.gzindex]),A.gzindex++;A.gzhead.hcrc&&A.pending>x&&(l.adler=w(l.adler,A.pending_buf,A.pending-x,x)),A.gzindex===A.gzhead.extra.length&&(A.gzindex=0,A.status=73)}else A.status=73;if(A.status===73)if(A.gzhead.name){x=A.pending;do{if(A.pending===A.pending_buf_size&&(A.gzhead.hcrc&&A.pending>x&&(l.adler=w(l.adler,A.pending_buf,A.pending-x,x)),X(l),x=A.pending,A.pending===A.pending_buf_size)){N=1;break}N=A.gzindex<A.gzhead.name.length?255&A.gzhead.name.charCodeAt(A.gzindex++):0,At(A,N)}while(N!==0);A.gzhead.hcrc&&A.pending>x&&(l.adler=w(l.adler,A.pending_buf,A.pending-x,x)),N===0&&(A.gzindex=0,A.status=91)}else A.status=91;if(A.status===91)if(A.gzhead.comment){x=A.pending;do{if(A.pending===A.pending_buf_size&&(A.gzhead.hcrc&&A.pending>x&&(l.adler=w(l.adler,A.pending_buf,A.pending-x,x)),X(l),x=A.pending,A.pending===A.pending_buf_size)){N=1;break}N=A.gzindex<A.gzhead.comment.length?255&A.gzhead.comment.charCodeAt(A.gzindex++):0,At(A,N)}while(N!==0);A.gzhead.hcrc&&A.pending>x&&(l.adler=w(l.adler,A.pending_buf,A.pending-x,x)),N===0&&(A.status=103)}else A.status=103;if(A.status===103&&(A.gzhead.hcrc?(A.pending+2>A.pending_buf_size&&X(l),A.pending+2<=A.pending_buf_size&&(At(A,255&l.adler),At(A,l.adler>>8&255),l.adler=0,A.status=Q)):A.status=Q),A.pending!==0){if(X(l),l.avail_out===0)return A.last_flush=-1,g}else if(l.avail_in===0&&st(et)<=st(Y)&&et!==S)return $t(l,-5);if(A.status===666&&l.avail_in!==0)return $t(l,-5);if(l.avail_in!==0||A.lookahead!==0||et!==_&&A.status!==666){var at=A.strategy===2?(function(Z,ct){for(var kt;;){if(Z.lookahead===0&&(qt(Z),Z.lookahead===0)){if(ct===_)return p;break}if(Z.match_length=0,kt=u._tr_tally(Z,0,Z.window[Z.strstart]),Z.lookahead--,Z.strstart++,kt&&(V(Z,!1),Z.strm.avail_out===0))return p}return Z.insert=0,ct===S?(V(Z,!0),Z.strm.avail_out===0?Tt:lt):Z.last_lit&&(V(Z,!1),Z.strm.avail_out===0)?p:it})(A,et):A.strategy===3?(function(Z,ct){for(var kt,dt,Et,Lt,Mt=Z.window;;){if(Z.lookahead<=pt){if(qt(Z),Z.lookahead<=pt&&ct===_)return p;if(Z.lookahead===0)break}if(Z.match_length=0,Z.lookahead>=tt&&0<Z.strstart&&(dt=Mt[Et=Z.strstart-1])===Mt[++Et]&&dt===Mt[++Et]&&dt===Mt[++Et]){Lt=Z.strstart+pt;do;while(dt===Mt[++Et]&&dt===Mt[++Et]&&dt===Mt[++Et]&&dt===Mt[++Et]&&dt===Mt[++Et]&&dt===Mt[++Et]&&dt===Mt[++Et]&&dt===Mt[++Et]&&Et<Lt);Z.match_length=pt-(Lt-Et),Z.match_length>Z.lookahead&&(Z.match_length=Z.lookahead)}if(Z.match_length>=tt?(kt=u._tr_tally(Z,1,Z.match_length-tt),Z.lookahead-=Z.match_length,Z.strstart+=Z.match_length,Z.match_length=0):(kt=u._tr_tally(Z,0,Z.window[Z.strstart]),Z.lookahead--,Z.strstart++),kt&&(V(Z,!1),Z.strm.avail_out===0))return p}return Z.insert=0,ct===S?(V(Z,!0),Z.strm.avail_out===0?Tt:lt):Z.last_lit&&(V(Z,!1),Z.strm.avail_out===0)?p:it})(A,et):o[A.level].func(A,et);if(at!==Tt&&at!==lt||(A.status=666),at===p||at===Tt)return l.avail_out===0&&(A.last_flush=-1),g;if(at===it&&(et===1?u._tr_align(A):et!==5&&(u._tr_stored_block(A,0,0,!1),et===3&&(Ot(A.head),A.lookahead===0&&(A.strstart=0,A.block_start=0,A.insert=0))),X(l),l.avail_out===0))return A.last_flush=-1,g}return et!==S?g:A.wrap<=0?1:(A.wrap===2?(At(A,255&l.adler),At(A,l.adler>>8&255),At(A,l.adler>>16&255),At(A,l.adler>>24&255),At(A,255&l.total_in),At(A,l.total_in>>8&255),At(A,l.total_in>>16&255),At(A,l.total_in>>24&255)):(xt(A,l.adler>>>16),xt(A,65535&l.adler)),X(l),0<A.wrap&&(A.wrap=-A.wrap),A.pending!==0?g:1)},c.deflateEnd=function(l){var et;return l&&l.state?(et=l.state.status)!==R&&et!==69&&et!==73&&et!==91&&et!==103&&et!==Q&&et!==666?$t(l,E):(l.state=null,et===Q?$t(l,-3):g):E},c.deflateSetDictionary=function(l,et){var Y,A,x,N,ot,at,Z,ct,kt=et.length;if(!l||!l.state||(N=(Y=l.state).wrap)===2||N===1&&Y.status!==R||Y.lookahead)return E;for(N===1&&(l.adler=m(l.adler,et,kt,0)),Y.wrap=0,kt>=Y.w_size&&(N===0&&(Ot(Y.head),Y.strstart=0,Y.block_start=0,Y.insert=0),ct=new h.Buf8(Y.w_size),h.arraySet(ct,et,kt-Y.w_size,Y.w_size,0),et=ct,kt=Y.w_size),ot=l.avail_in,at=l.next_in,Z=l.input,l.avail_in=kt,l.next_in=0,l.input=et,qt(Y);Y.lookahead>=tt;){for(A=Y.strstart,x=Y.lookahead-(tt-1);Y.ins_h=(Y.ins_h<<Y.hash_shift^Y.window[A+tt-1])&Y.hash_mask,Y.prev[A&Y.w_mask]=Y.head[Y.ins_h],Y.head[Y.ins_h]=A,A++,--x;);Y.strstart=A,Y.lookahead=tt-1,qt(Y)}return Y.strstart+=Y.lookahead,Y.block_start=Y.strstart,Y.insert=Y.lookahead,Y.lookahead=0,Y.match_length=Y.prev_length=tt-1,Y.match_available=0,l.next_in=at,l.input=Z,l.avail_in=ot,Y.wrap=N,g},c.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,d,c){d.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,d,c){d.exports=function(o,h){var u,m,w,C,_,S,g,E,v,k,b,P,M,W,K,nt,G,ut,tt,pt,Pt,R,Q,p,it;u=o.state,m=o.next_in,p=o.input,w=m+(o.avail_in-5),C=o.next_out,it=o.output,_=C-(h-o.avail_out),S=C+(o.avail_out-257),g=u.dmax,E=u.wsize,v=u.whave,k=u.wnext,b=u.window,P=u.hold,M=u.bits,W=u.lencode,K=u.distcode,nt=(1<<u.lenbits)-1,G=(1<<u.distbits)-1;t:do{M<15&&(P+=p[m++]<<M,M+=8,P+=p[m++]<<M,M+=8),ut=W[P&nt];e:for(;;){if(P>>>=tt=ut>>>24,M-=tt,(tt=ut>>>16&255)===0)it[C++]=65535&ut;else{if(!(16&tt)){if((64&tt)==0){ut=W[(65535&ut)+(P&(1<<tt)-1)];continue e}if(32&tt){u.mode=12;break t}o.msg="invalid literal/length code",u.mode=30;break t}pt=65535&ut,(tt&=15)&&(M<tt&&(P+=p[m++]<<M,M+=8),pt+=P&(1<<tt)-1,P>>>=tt,M-=tt),M<15&&(P+=p[m++]<<M,M+=8,P+=p[m++]<<M,M+=8),ut=K[P&G];n:for(;;){if(P>>>=tt=ut>>>24,M-=tt,!(16&(tt=ut>>>16&255))){if((64&tt)==0){ut=K[(65535&ut)+(P&(1<<tt)-1)];continue n}o.msg="invalid distance code",u.mode=30;break t}if(Pt=65535&ut,M<(tt&=15)&&(P+=p[m++]<<M,(M+=8)<tt&&(P+=p[m++]<<M,M+=8)),g<(Pt+=P&(1<<tt)-1)){o.msg="invalid distance too far back",u.mode=30;break t}if(P>>>=tt,M-=tt,(tt=C-_)<Pt){if(v<(tt=Pt-tt)&&u.sane){o.msg="invalid distance too far back",u.mode=30;break t}if(Q=b,(R=0)===k){if(R+=E-tt,tt<pt){for(pt-=tt;it[C++]=b[R++],--tt;);R=C-Pt,Q=it}}else if(k<tt){if(R+=E+k-tt,(tt-=k)<pt){for(pt-=tt;it[C++]=b[R++],--tt;);if(R=0,k<pt){for(pt-=tt=k;it[C++]=b[R++],--tt;);R=C-Pt,Q=it}}}else if(R+=k-tt,tt<pt){for(pt-=tt;it[C++]=b[R++],--tt;);R=C-Pt,Q=it}for(;2<pt;)it[C++]=Q[R++],it[C++]=Q[R++],it[C++]=Q[R++],pt-=3;pt&&(it[C++]=Q[R++],1<pt&&(it[C++]=Q[R++]))}else{for(R=C-Pt;it[C++]=it[R++],it[C++]=it[R++],it[C++]=it[R++],2<(pt-=3););pt&&(it[C++]=it[R++],1<pt&&(it[C++]=it[R++]))}break}}break}}while(m<w&&C<S);m-=pt=M>>3,P&=(1<<(M-=pt<<3))-1,o.next_in=m,o.next_out=C,o.avail_in=m<w?w-m+5:5-(m-w),o.avail_out=C<S?S-C+257:257-(C-S),u.hold=P,u.bits=M}},{}],49:[function(i,d,c){var o=i("../utils/common"),h=i("./adler32"),u=i("./crc32"),m=i("./inffast"),w=i("./inftrees"),C=1,_=2,S=0,g=-2,E=1,v=852,k=592;function b(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function P(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function M(R){var Q;return R&&R.state?(Q=R.state,R.total_in=R.total_out=Q.total=0,R.msg="",Q.wrap&&(R.adler=1&Q.wrap),Q.mode=E,Q.last=0,Q.havedict=0,Q.dmax=32768,Q.head=null,Q.hold=0,Q.bits=0,Q.lencode=Q.lendyn=new o.Buf32(v),Q.distcode=Q.distdyn=new o.Buf32(k),Q.sane=1,Q.back=-1,S):g}function W(R){var Q;return R&&R.state?((Q=R.state).wsize=0,Q.whave=0,Q.wnext=0,M(R)):g}function K(R,Q){var p,it;return R&&R.state?(it=R.state,Q<0?(p=0,Q=-Q):(p=1+(Q>>4),Q<48&&(Q&=15)),Q&&(Q<8||15<Q)?g:(it.window!==null&&it.wbits!==Q&&(it.window=null),it.wrap=p,it.wbits=Q,W(R))):g}function nt(R,Q){var p,it;return R?(it=new P,(R.state=it).window=null,(p=K(R,Q))!==S&&(R.state=null),p):g}var G,ut,tt=!0;function pt(R){if(tt){var Q;for(G=new o.Buf32(512),ut=new o.Buf32(32),Q=0;Q<144;)R.lens[Q++]=8;for(;Q<256;)R.lens[Q++]=9;for(;Q<280;)R.lens[Q++]=7;for(;Q<288;)R.lens[Q++]=8;for(w(C,R.lens,0,288,G,0,R.work,{bits:9}),Q=0;Q<32;)R.lens[Q++]=5;w(_,R.lens,0,32,ut,0,R.work,{bits:5}),tt=!1}R.lencode=G,R.lenbits=9,R.distcode=ut,R.distbits=5}function Pt(R,Q,p,it){var Tt,lt=R.state;return lt.window===null&&(lt.wsize=1<<lt.wbits,lt.wnext=0,lt.whave=0,lt.window=new o.Buf8(lt.wsize)),it>=lt.wsize?(o.arraySet(lt.window,Q,p-lt.wsize,lt.wsize,0),lt.wnext=0,lt.whave=lt.wsize):(it<(Tt=lt.wsize-lt.wnext)&&(Tt=it),o.arraySet(lt.window,Q,p-it,Tt,lt.wnext),(it-=Tt)?(o.arraySet(lt.window,Q,p-it,it,0),lt.wnext=it,lt.whave=lt.wsize):(lt.wnext+=Tt,lt.wnext===lt.wsize&&(lt.wnext=0),lt.whave<lt.wsize&&(lt.whave+=Tt))),0}c.inflateReset=W,c.inflateReset2=K,c.inflateResetKeep=M,c.inflateInit=function(R){return nt(R,15)},c.inflateInit2=nt,c.inflate=function(R,Q){var p,it,Tt,lt,$t,st,Ot,X,V,At,xt,vt,qt,Jt,jt,mt,Xt,Wt,It,ae,l,et,Y,A,x=0,N=new o.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return g;(p=R.state).mode===12&&(p.mode=13),$t=R.next_out,Tt=R.output,Ot=R.avail_out,lt=R.next_in,it=R.input,st=R.avail_in,X=p.hold,V=p.bits,At=st,xt=Ot,et=S;t:for(;;)switch(p.mode){case E:if(p.wrap===0){p.mode=13;break}for(;V<16;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(2&p.wrap&&X===35615){N[p.check=0]=255&X,N[1]=X>>>8&255,p.check=u(p.check,N,2,0),V=X=0,p.mode=2;break}if(p.flags=0,p.head&&(p.head.done=!1),!(1&p.wrap)||(((255&X)<<8)+(X>>8))%31){R.msg="incorrect header check",p.mode=30;break}if((15&X)!=8){R.msg="unknown compression method",p.mode=30;break}if(V-=4,l=8+(15&(X>>>=4)),p.wbits===0)p.wbits=l;else if(l>p.wbits){R.msg="invalid window size",p.mode=30;break}p.dmax=1<<l,R.adler=p.check=1,p.mode=512&X?10:12,V=X=0;break;case 2:for(;V<16;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(p.flags=X,(255&p.flags)!=8){R.msg="unknown compression method",p.mode=30;break}if(57344&p.flags){R.msg="unknown header flags set",p.mode=30;break}p.head&&(p.head.text=X>>8&1),512&p.flags&&(N[0]=255&X,N[1]=X>>>8&255,p.check=u(p.check,N,2,0)),V=X=0,p.mode=3;case 3:for(;V<32;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.head&&(p.head.time=X),512&p.flags&&(N[0]=255&X,N[1]=X>>>8&255,N[2]=X>>>16&255,N[3]=X>>>24&255,p.check=u(p.check,N,4,0)),V=X=0,p.mode=4;case 4:for(;V<16;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.head&&(p.head.xflags=255&X,p.head.os=X>>8),512&p.flags&&(N[0]=255&X,N[1]=X>>>8&255,p.check=u(p.check,N,2,0)),V=X=0,p.mode=5;case 5:if(1024&p.flags){for(;V<16;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.length=X,p.head&&(p.head.extra_len=X),512&p.flags&&(N[0]=255&X,N[1]=X>>>8&255,p.check=u(p.check,N,2,0)),V=X=0}else p.head&&(p.head.extra=null);p.mode=6;case 6:if(1024&p.flags&&(st<(vt=p.length)&&(vt=st),vt&&(p.head&&(l=p.head.extra_len-p.length,p.head.extra||(p.head.extra=new Array(p.head.extra_len)),o.arraySet(p.head.extra,it,lt,vt,l)),512&p.flags&&(p.check=u(p.check,it,vt,lt)),st-=vt,lt+=vt,p.length-=vt),p.length))break t;p.length=0,p.mode=7;case 7:if(2048&p.flags){if(st===0)break t;for(vt=0;l=it[lt+vt++],p.head&&l&&p.length<65536&&(p.head.name+=String.fromCharCode(l)),l&&vt<st;);if(512&p.flags&&(p.check=u(p.check,it,vt,lt)),st-=vt,lt+=vt,l)break t}else p.head&&(p.head.name=null);p.length=0,p.mode=8;case 8:if(4096&p.flags){if(st===0)break t;for(vt=0;l=it[lt+vt++],p.head&&l&&p.length<65536&&(p.head.comment+=String.fromCharCode(l)),l&&vt<st;);if(512&p.flags&&(p.check=u(p.check,it,vt,lt)),st-=vt,lt+=vt,l)break t}else p.head&&(p.head.comment=null);p.mode=9;case 9:if(512&p.flags){for(;V<16;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(X!==(65535&p.check)){R.msg="header crc mismatch",p.mode=30;break}V=X=0}p.head&&(p.head.hcrc=p.flags>>9&1,p.head.done=!0),R.adler=p.check=0,p.mode=12;break;case 10:for(;V<32;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}R.adler=p.check=b(X),V=X=0,p.mode=11;case 11:if(p.havedict===0)return R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,p.hold=X,p.bits=V,2;R.adler=p.check=1,p.mode=12;case 12:if(Q===5||Q===6)break t;case 13:if(p.last){X>>>=7&V,V-=7&V,p.mode=27;break}for(;V<3;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}switch(p.last=1&X,V-=1,3&(X>>>=1)){case 0:p.mode=14;break;case 1:if(pt(p),p.mode=20,Q!==6)break;X>>>=2,V-=2;break t;case 2:p.mode=17;break;case 3:R.msg="invalid block type",p.mode=30}X>>>=2,V-=2;break;case 14:for(X>>>=7&V,V-=7&V;V<32;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if((65535&X)!=(X>>>16^65535)){R.msg="invalid stored block lengths",p.mode=30;break}if(p.length=65535&X,V=X=0,p.mode=15,Q===6)break t;case 15:p.mode=16;case 16:if(vt=p.length){if(st<vt&&(vt=st),Ot<vt&&(vt=Ot),vt===0)break t;o.arraySet(Tt,it,lt,vt,$t),st-=vt,lt+=vt,Ot-=vt,$t+=vt,p.length-=vt;break}p.mode=12;break;case 17:for(;V<14;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(p.nlen=257+(31&X),X>>>=5,V-=5,p.ndist=1+(31&X),X>>>=5,V-=5,p.ncode=4+(15&X),X>>>=4,V-=4,286<p.nlen||30<p.ndist){R.msg="too many length or distance symbols",p.mode=30;break}p.have=0,p.mode=18;case 18:for(;p.have<p.ncode;){for(;V<3;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.lens[ot[p.have++]]=7&X,X>>>=3,V-=3}for(;p.have<19;)p.lens[ot[p.have++]]=0;if(p.lencode=p.lendyn,p.lenbits=7,Y={bits:p.lenbits},et=w(0,p.lens,0,19,p.lencode,0,p.work,Y),p.lenbits=Y.bits,et){R.msg="invalid code lengths set",p.mode=30;break}p.have=0,p.mode=19;case 19:for(;p.have<p.nlen+p.ndist;){for(;mt=(x=p.lencode[X&(1<<p.lenbits)-1])>>>16&255,Xt=65535&x,!((jt=x>>>24)<=V);){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(Xt<16)X>>>=jt,V-=jt,p.lens[p.have++]=Xt;else{if(Xt===16){for(A=jt+2;V<A;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(X>>>=jt,V-=jt,p.have===0){R.msg="invalid bit length repeat",p.mode=30;break}l=p.lens[p.have-1],vt=3+(3&X),X>>>=2,V-=2}else if(Xt===17){for(A=jt+3;V<A;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}V-=jt,l=0,vt=3+(7&(X>>>=jt)),X>>>=3,V-=3}else{for(A=jt+7;V<A;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}V-=jt,l=0,vt=11+(127&(X>>>=jt)),X>>>=7,V-=7}if(p.have+vt>p.nlen+p.ndist){R.msg="invalid bit length repeat",p.mode=30;break}for(;vt--;)p.lens[p.have++]=l}}if(p.mode===30)break;if(p.lens[256]===0){R.msg="invalid code -- missing end-of-block",p.mode=30;break}if(p.lenbits=9,Y={bits:p.lenbits},et=w(C,p.lens,0,p.nlen,p.lencode,0,p.work,Y),p.lenbits=Y.bits,et){R.msg="invalid literal/lengths set",p.mode=30;break}if(p.distbits=6,p.distcode=p.distdyn,Y={bits:p.distbits},et=w(_,p.lens,p.nlen,p.ndist,p.distcode,0,p.work,Y),p.distbits=Y.bits,et){R.msg="invalid distances set",p.mode=30;break}if(p.mode=20,Q===6)break t;case 20:p.mode=21;case 21:if(6<=st&&258<=Ot){R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,p.hold=X,p.bits=V,m(R,xt),$t=R.next_out,Tt=R.output,Ot=R.avail_out,lt=R.next_in,it=R.input,st=R.avail_in,X=p.hold,V=p.bits,p.mode===12&&(p.back=-1);break}for(p.back=0;mt=(x=p.lencode[X&(1<<p.lenbits)-1])>>>16&255,Xt=65535&x,!((jt=x>>>24)<=V);){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(mt&&(240&mt)==0){for(Wt=jt,It=mt,ae=Xt;mt=(x=p.lencode[ae+((X&(1<<Wt+It)-1)>>Wt)])>>>16&255,Xt=65535&x,!(Wt+(jt=x>>>24)<=V);){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}X>>>=Wt,V-=Wt,p.back+=Wt}if(X>>>=jt,V-=jt,p.back+=jt,p.length=Xt,mt===0){p.mode=26;break}if(32&mt){p.back=-1,p.mode=12;break}if(64&mt){R.msg="invalid literal/length code",p.mode=30;break}p.extra=15&mt,p.mode=22;case 22:if(p.extra){for(A=p.extra;V<A;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.length+=X&(1<<p.extra)-1,X>>>=p.extra,V-=p.extra,p.back+=p.extra}p.was=p.length,p.mode=23;case 23:for(;mt=(x=p.distcode[X&(1<<p.distbits)-1])>>>16&255,Xt=65535&x,!((jt=x>>>24)<=V);){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if((240&mt)==0){for(Wt=jt,It=mt,ae=Xt;mt=(x=p.distcode[ae+((X&(1<<Wt+It)-1)>>Wt)])>>>16&255,Xt=65535&x,!(Wt+(jt=x>>>24)<=V);){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}X>>>=Wt,V-=Wt,p.back+=Wt}if(X>>>=jt,V-=jt,p.back+=jt,64&mt){R.msg="invalid distance code",p.mode=30;break}p.offset=Xt,p.extra=15&mt,p.mode=24;case 24:if(p.extra){for(A=p.extra;V<A;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.offset+=X&(1<<p.extra)-1,X>>>=p.extra,V-=p.extra,p.back+=p.extra}if(p.offset>p.dmax){R.msg="invalid distance too far back",p.mode=30;break}p.mode=25;case 25:if(Ot===0)break t;if(vt=xt-Ot,p.offset>vt){if((vt=p.offset-vt)>p.whave&&p.sane){R.msg="invalid distance too far back",p.mode=30;break}qt=vt>p.wnext?(vt-=p.wnext,p.wsize-vt):p.wnext-vt,vt>p.length&&(vt=p.length),Jt=p.window}else Jt=Tt,qt=$t-p.offset,vt=p.length;for(Ot<vt&&(vt=Ot),Ot-=vt,p.length-=vt;Tt[$t++]=Jt[qt++],--vt;);p.length===0&&(p.mode=21);break;case 26:if(Ot===0)break t;Tt[$t++]=p.length,Ot--,p.mode=21;break;case 27:if(p.wrap){for(;V<32;){if(st===0)break t;st--,X|=it[lt++]<<V,V+=8}if(xt-=Ot,R.total_out+=xt,p.total+=xt,xt&&(R.adler=p.check=p.flags?u(p.check,Tt,xt,$t-xt):h(p.check,Tt,xt,$t-xt)),xt=Ot,(p.flags?X:b(X))!==p.check){R.msg="incorrect data check",p.mode=30;break}V=X=0}p.mode=28;case 28:if(p.wrap&&p.flags){for(;V<32;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(X!==(4294967295&p.total)){R.msg="incorrect length check",p.mode=30;break}V=X=0}p.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;case 32:default:return g}return R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,p.hold=X,p.bits=V,(p.wsize||xt!==R.avail_out&&p.mode<30&&(p.mode<27||Q!==4))&&Pt(R,R.output,R.next_out,xt-R.avail_out)?(p.mode=31,-4):(At-=R.avail_in,xt-=R.avail_out,R.total_in+=At,R.total_out+=xt,p.total+=xt,p.wrap&&xt&&(R.adler=p.check=p.flags?u(p.check,Tt,xt,R.next_out-xt):h(p.check,Tt,xt,R.next_out-xt)),R.data_type=p.bits+(p.last?64:0)+(p.mode===12?128:0)+(p.mode===20||p.mode===15?256:0),(At==0&&xt===0||Q===4)&&et===S&&(et=-5),et)},c.inflateEnd=function(R){if(!R||!R.state)return g;var Q=R.state;return Q.window&&(Q.window=null),R.state=null,S},c.inflateGetHeader=function(R,Q){var p;return R&&R.state?(2&(p=R.state).wrap)==0?g:((p.head=Q).done=!1,S):g},c.inflateSetDictionary=function(R,Q){var p,it=Q.length;return R&&R.state?(p=R.state).wrap!==0&&p.mode!==11?g:p.mode===11&&h(1,Q,it,0)!==p.check?-3:Pt(R,Q,it,it)?(p.mode=31,-4):(p.havedict=1,S):g},c.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,d,c){var o=i("../utils/common"),h=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],w=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];d.exports=function(C,_,S,g,E,v,k,b){var P,M,W,K,nt,G,ut,tt,pt,Pt=b.bits,R=0,Q=0,p=0,it=0,Tt=0,lt=0,$t=0,st=0,Ot=0,X=0,V=null,At=0,xt=new o.Buf16(16),vt=new o.Buf16(16),qt=null,Jt=0;for(R=0;R<=15;R++)xt[R]=0;for(Q=0;Q<g;Q++)xt[_[S+Q]]++;for(Tt=Pt,it=15;1<=it&&xt[it]===0;it--);if(it<Tt&&(Tt=it),it===0)return E[v++]=20971520,E[v++]=20971520,b.bits=1,0;for(p=1;p<it&&xt[p]===0;p++);for(Tt<p&&(Tt=p),R=st=1;R<=15;R++)if(st<<=1,(st-=xt[R])<0)return-1;if(0<st&&(C===0||it!==1))return-1;for(vt[1]=0,R=1;R<15;R++)vt[R+1]=vt[R]+xt[R];for(Q=0;Q<g;Q++)_[S+Q]!==0&&(k[vt[_[S+Q]]++]=Q);if(G=C===0?(V=qt=k,19):C===1?(V=h,At-=257,qt=u,Jt-=257,256):(V=m,qt=w,-1),R=p,nt=v,$t=Q=X=0,W=-1,K=(Ot=1<<(lt=Tt))-1,C===1&&852<Ot||C===2&&592<Ot)return 1;for(;;){for(ut=R-$t,pt=k[Q]<G?(tt=0,k[Q]):k[Q]>G?(tt=qt[Jt+k[Q]],V[At+k[Q]]):(tt=96,0),P=1<<R-$t,p=M=1<<lt;E[nt+(X>>$t)+(M-=P)]=ut<<24|tt<<16|pt|0,M!==0;);for(P=1<<R-1;X&P;)P>>=1;if(P!==0?(X&=P-1,X+=P):X=0,Q++,--xt[R]==0){if(R===it)break;R=_[S+k[Q]]}if(Tt<R&&(X&K)!==W){for($t===0&&($t=Tt),nt+=p,st=1<<(lt=R-$t);lt+$t<it&&!((st-=xt[lt+$t])<=0);)lt++,st<<=1;if(Ot+=1<<lt,C===1&&852<Ot||C===2&&592<Ot)return 1;E[W=X&K]=Tt<<24|lt<<16|nt-v|0}}return X!==0&&(E[nt+X]=R-$t<<24|64<<16|0),b.bits=Tt,0}},{"../utils/common":41}],51:[function(i,d,c){d.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,d,c){var o=i("../utils/common"),h=0,u=1;function m(x){for(var N=x.length;0<=--N;)x[N]=0}var w=0,C=29,_=256,S=_+1+C,g=30,E=19,v=2*S+1,k=15,b=16,P=7,M=256,W=16,K=17,nt=18,G=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ut=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Pt=new Array(2*(S+2));m(Pt);var R=new Array(2*g);m(R);var Q=new Array(512);m(Q);var p=new Array(256);m(p);var it=new Array(C);m(it);var Tt,lt,$t,st=new Array(g);function Ot(x,N,ot,at,Z){this.static_tree=x,this.extra_bits=N,this.extra_base=ot,this.elems=at,this.max_length=Z,this.has_stree=x&&x.length}function X(x,N){this.dyn_tree=x,this.max_code=0,this.stat_desc=N}function V(x){return x<256?Q[x]:Q[256+(x>>>7)]}function At(x,N){x.pending_buf[x.pending++]=255&N,x.pending_buf[x.pending++]=N>>>8&255}function xt(x,N,ot){x.bi_valid>b-ot?(x.bi_buf|=N<<x.bi_valid&65535,At(x,x.bi_buf),x.bi_buf=N>>b-x.bi_valid,x.bi_valid+=ot-b):(x.bi_buf|=N<<x.bi_valid&65535,x.bi_valid+=ot)}function vt(x,N,ot){xt(x,ot[2*N],ot[2*N+1])}function qt(x,N){for(var ot=0;ot|=1&x,x>>>=1,ot<<=1,0<--N;);return ot>>>1}function Jt(x,N,ot){var at,Z,ct=new Array(k+1),kt=0;for(at=1;at<=k;at++)ct[at]=kt=kt+ot[at-1]<<1;for(Z=0;Z<=N;Z++){var dt=x[2*Z+1];dt!==0&&(x[2*Z]=qt(ct[dt]++,dt))}}function jt(x){var N;for(N=0;N<S;N++)x.dyn_ltree[2*N]=0;for(N=0;N<g;N++)x.dyn_dtree[2*N]=0;for(N=0;N<E;N++)x.bl_tree[2*N]=0;x.dyn_ltree[2*M]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function mt(x){8<x.bi_valid?At(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function Xt(x,N,ot,at){var Z=2*N,ct=2*ot;return x[Z]<x[ct]||x[Z]===x[ct]&&at[N]<=at[ot]}function Wt(x,N,ot){for(var at=x.heap[ot],Z=ot<<1;Z<=x.heap_len&&(Z<x.heap_len&&Xt(N,x.heap[Z+1],x.heap[Z],x.depth)&&Z++,!Xt(N,at,x.heap[Z],x.depth));)x.heap[ot]=x.heap[Z],ot=Z,Z<<=1;x.heap[ot]=at}function It(x,N,ot){var at,Z,ct,kt,dt=0;if(x.last_lit!==0)for(;at=x.pending_buf[x.d_buf+2*dt]<<8|x.pending_buf[x.d_buf+2*dt+1],Z=x.pending_buf[x.l_buf+dt],dt++,at===0?vt(x,Z,N):(vt(x,(ct=p[Z])+_+1,N),(kt=G[ct])!==0&&xt(x,Z-=it[ct],kt),vt(x,ct=V(--at),ot),(kt=ut[ct])!==0&&xt(x,at-=st[ct],kt)),dt<x.last_lit;);vt(x,M,N)}function ae(x,N){var ot,at,Z,ct=N.dyn_tree,kt=N.stat_desc.static_tree,dt=N.stat_desc.has_stree,Et=N.stat_desc.elems,Lt=-1;for(x.heap_len=0,x.heap_max=v,ot=0;ot<Et;ot++)ct[2*ot]!==0?(x.heap[++x.heap_len]=Lt=ot,x.depth[ot]=0):ct[2*ot+1]=0;for(;x.heap_len<2;)ct[2*(Z=x.heap[++x.heap_len]=Lt<2?++Lt:0)]=1,x.depth[Z]=0,x.opt_len--,dt&&(x.static_len-=kt[2*Z+1]);for(N.max_code=Lt,ot=x.heap_len>>1;1<=ot;ot--)Wt(x,ct,ot);for(Z=Et;ot=x.heap[1],x.heap[1]=x.heap[x.heap_len--],Wt(x,ct,1),at=x.heap[1],x.heap[--x.heap_max]=ot,x.heap[--x.heap_max]=at,ct[2*Z]=ct[2*ot]+ct[2*at],x.depth[Z]=(x.depth[ot]>=x.depth[at]?x.depth[ot]:x.depth[at])+1,ct[2*ot+1]=ct[2*at+1]=Z,x.heap[1]=Z++,Wt(x,ct,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(Mt,ne){var Ee,he,pe,Zt,$e,ye,Ct=ne.dyn_tree,Re=ne.max_code,Ae=ne.stat_desc.static_tree,Qe=ne.stat_desc.has_stree,_t=ne.stat_desc.extra_bits,tn=ne.stat_desc.extra_base,ze=ne.stat_desc.max_length,De=0;for(Zt=0;Zt<=k;Zt++)Mt.bl_count[Zt]=0;for(Ct[2*Mt.heap[Mt.heap_max]+1]=0,Ee=Mt.heap_max+1;Ee<v;Ee++)ze<(Zt=Ct[2*Ct[2*(he=Mt.heap[Ee])+1]+1]+1)&&(Zt=ze,De++),Ct[2*he+1]=Zt,Re<he||(Mt.bl_count[Zt]++,$e=0,tn<=he&&($e=_t[he-tn]),ye=Ct[2*he],Mt.opt_len+=ye*(Zt+$e),Qe&&(Mt.static_len+=ye*(Ae[2*he+1]+$e)));if(De!==0){do{for(Zt=ze-1;Mt.bl_count[Zt]===0;)Zt--;Mt.bl_count[Zt]--,Mt.bl_count[Zt+1]+=2,Mt.bl_count[ze]--,De-=2}while(0<De);for(Zt=ze;Zt!==0;Zt--)for(he=Mt.bl_count[Zt];he!==0;)Re<(pe=Mt.heap[--Ee])||(Ct[2*pe+1]!==Zt&&(Mt.opt_len+=(Zt-Ct[2*pe+1])*Ct[2*pe],Ct[2*pe+1]=Zt),he--)}})(x,N),Jt(ct,Lt,x.bl_count)}function l(x,N,ot){var at,Z,ct=-1,kt=N[1],dt=0,Et=7,Lt=4;for(kt===0&&(Et=138,Lt=3),N[2*(ot+1)+1]=65535,at=0;at<=ot;at++)Z=kt,kt=N[2*(at+1)+1],++dt<Et&&Z===kt||(dt<Lt?x.bl_tree[2*Z]+=dt:Z!==0?(Z!==ct&&x.bl_tree[2*Z]++,x.bl_tree[2*W]++):dt<=10?x.bl_tree[2*K]++:x.bl_tree[2*nt]++,ct=Z,Lt=(dt=0)===kt?(Et=138,3):Z===kt?(Et=6,3):(Et=7,4))}function et(x,N,ot){var at,Z,ct=-1,kt=N[1],dt=0,Et=7,Lt=4;for(kt===0&&(Et=138,Lt=3),at=0;at<=ot;at++)if(Z=kt,kt=N[2*(at+1)+1],!(++dt<Et&&Z===kt)){if(dt<Lt)for(;vt(x,Z,x.bl_tree),--dt!=0;);else Z!==0?(Z!==ct&&(vt(x,Z,x.bl_tree),dt--),vt(x,W,x.bl_tree),xt(x,dt-3,2)):dt<=10?(vt(x,K,x.bl_tree),xt(x,dt-3,3)):(vt(x,nt,x.bl_tree),xt(x,dt-11,7));ct=Z,Lt=(dt=0)===kt?(Et=138,3):Z===kt?(Et=6,3):(Et=7,4)}}m(st);var Y=!1;function A(x,N,ot,at){xt(x,(w<<1)+(at?1:0),3),(function(Z,ct,kt,dt){mt(Z),At(Z,kt),At(Z,~kt),o.arraySet(Z.pending_buf,Z.window,ct,kt,Z.pending),Z.pending+=kt})(x,N,ot)}c._tr_init=function(x){Y||((function(){var N,ot,at,Z,ct,kt=new Array(k+1);for(Z=at=0;Z<C-1;Z++)for(it[Z]=at,N=0;N<1<<G[Z];N++)p[at++]=Z;for(p[at-1]=Z,Z=ct=0;Z<16;Z++)for(st[Z]=ct,N=0;N<1<<ut[Z];N++)Q[ct++]=Z;for(ct>>=7;Z<g;Z++)for(st[Z]=ct<<7,N=0;N<1<<ut[Z]-7;N++)Q[256+ct++]=Z;for(ot=0;ot<=k;ot++)kt[ot]=0;for(N=0;N<=143;)Pt[2*N+1]=8,N++,kt[8]++;for(;N<=255;)Pt[2*N+1]=9,N++,kt[9]++;for(;N<=279;)Pt[2*N+1]=7,N++,kt[7]++;for(;N<=287;)Pt[2*N+1]=8,N++,kt[8]++;for(Jt(Pt,S+1,kt),N=0;N<g;N++)R[2*N+1]=5,R[2*N]=qt(N,5);Tt=new Ot(Pt,G,_+1,S,k),lt=new Ot(R,ut,0,g,k),$t=new Ot(new Array(0),tt,0,E,P)})(),Y=!0),x.l_desc=new X(x.dyn_ltree,Tt),x.d_desc=new X(x.dyn_dtree,lt),x.bl_desc=new X(x.bl_tree,$t),x.bi_buf=0,x.bi_valid=0,jt(x)},c._tr_stored_block=A,c._tr_flush_block=function(x,N,ot,at){var Z,ct,kt=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(dt){var Et,Lt=4093624447;for(Et=0;Et<=31;Et++,Lt>>>=1)if(1&Lt&&dt.dyn_ltree[2*Et]!==0)return h;if(dt.dyn_ltree[18]!==0||dt.dyn_ltree[20]!==0||dt.dyn_ltree[26]!==0)return u;for(Et=32;Et<_;Et++)if(dt.dyn_ltree[2*Et]!==0)return u;return h})(x)),ae(x,x.l_desc),ae(x,x.d_desc),kt=(function(dt){var Et;for(l(dt,dt.dyn_ltree,dt.l_desc.max_code),l(dt,dt.dyn_dtree,dt.d_desc.max_code),ae(dt,dt.bl_desc),Et=E-1;3<=Et&&dt.bl_tree[2*pt[Et]+1]===0;Et--);return dt.opt_len+=3*(Et+1)+5+5+4,Et})(x),Z=x.opt_len+3+7>>>3,(ct=x.static_len+3+7>>>3)<=Z&&(Z=ct)):Z=ct=ot+5,ot+4<=Z&&N!==-1?A(x,N,ot,at):x.strategy===4||ct===Z?(xt(x,2+(at?1:0),3),It(x,Pt,R)):(xt(x,4+(at?1:0),3),(function(dt,Et,Lt,Mt){var ne;for(xt(dt,Et-257,5),xt(dt,Lt-1,5),xt(dt,Mt-4,4),ne=0;ne<Mt;ne++)xt(dt,dt.bl_tree[2*pt[ne]+1],3);et(dt,dt.dyn_ltree,Et-1),et(dt,dt.dyn_dtree,Lt-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,kt+1),It(x,x.dyn_ltree,x.dyn_dtree)),jt(x),at&&mt(x)},c._tr_tally=function(x,N,ot){return x.pending_buf[x.d_buf+2*x.last_lit]=N>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&N,x.pending_buf[x.l_buf+x.last_lit]=255&ot,x.last_lit++,N===0?x.dyn_ltree[2*ot]++:(x.matches++,N--,x.dyn_ltree[2*(p[ot]+_+1)]++,x.dyn_dtree[2*V(N)]++),x.last_lit===x.lit_bufsize-1},c._tr_align=function(x){xt(x,2,3),vt(x,M,Pt),(function(N){N.bi_valid===16?(At(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(i,d,c){d.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,d,c){(function(o){(function(h,u){if(!h.setImmediate){var m,w,C,_,S=1,g={},E=!1,v=h.document,k=Object.getPrototypeOf&&Object.getPrototypeOf(h);k=k&&k.setTimeout?k:h,m={}.toString.call(h.process)==="[object process]"?function(W){process.nextTick(function(){P(W)})}:(function(){if(h.postMessage&&!h.importScripts){var W=!0,K=h.onmessage;return h.onmessage=function(){W=!1},h.postMessage("","*"),h.onmessage=K,W}})()?(_="setImmediate$"+Math.random()+"$",h.addEventListener?h.addEventListener("message",M,!1):h.attachEvent("onmessage",M),function(W){h.postMessage(_+W,"*")}):h.MessageChannel?((C=new MessageChannel).port1.onmessage=function(W){P(W.data)},function(W){C.port2.postMessage(W)}):v&&"onreadystatechange"in v.createElement("script")?(w=v.documentElement,function(W){var K=v.createElement("script");K.onreadystatechange=function(){P(W),K.onreadystatechange=null,w.removeChild(K),K=null},w.appendChild(K)}):function(W){setTimeout(P,0,W)},k.setImmediate=function(W){typeof W!="function"&&(W=new Function(""+W));for(var K=new Array(arguments.length-1),nt=0;nt<K.length;nt++)K[nt]=arguments[nt+1];var G={callback:W,args:K};return g[S]=G,m(S),S++},k.clearImmediate=b}function b(W){delete g[W]}function P(W){if(E)setTimeout(P,0,W);else{var K=g[W];if(K){E=!0;try{(function(nt){var G=nt.callback,ut=nt.args;switch(ut.length){case 0:G();break;case 1:G(ut[0]);break;case 2:G(ut[0],ut[1]);break;case 3:G(ut[0],ut[1],ut[2]);break;default:G.apply(u,ut)}})(K)}finally{b(W),E=!1}}}}function M(W){W.source===h&&typeof W.data=="string"&&W.data.indexOf(_)===0&&P(+W.data.slice(_.length))}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,typeof Te<"u"?Te:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ur)),Ur.exports}var Io=Do();const ia=ea(Io);var ir={exports:{}},Mo=ir.exports,Wi;function Bo(){return Wi||(Wi=1,(function($,r){(function(i,d){d()})(Mo,function(){function i(w,C){return typeof C>"u"?C={autoBom:!1}:typeof C!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),C={autoBom:!C}),C.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(w.type)?new Blob(["\uFEFF",w],{type:w.type}):w}function d(w,C,_){var S=new XMLHttpRequest;S.open("GET",w),S.responseType="blob",S.onload=function(){m(S.response,C,_)},S.onerror=function(){console.error("could not download file")},S.send()}function c(w){var C=new XMLHttpRequest;C.open("HEAD",w,!1);try{C.send()}catch{}return 200<=C.status&&299>=C.status}function o(w){try{w.dispatchEvent(new MouseEvent("click"))}catch{var C=document.createEvent("MouseEvents");C.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),w.dispatchEvent(C)}}var h=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Te=="object"&&Te.global===Te?Te:void 0,u=h.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),m=h.saveAs||(typeof window!="object"||window!==h?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(w,C,_){var S=h.URL||h.webkitURL,g=document.createElement("a");C=C||w.name||"download",g.download=C,g.rel="noopener",typeof w=="string"?(g.href=w,g.origin===location.origin?o(g):c(g.href)?d(w,C,_):o(g,g.target="_blank")):(g.href=S.createObjectURL(w),setTimeout(function(){S.revokeObjectURL(g.href)},4e4),setTimeout(function(){o(g)},0))}:"msSaveOrOpenBlob"in navigator?function(w,C,_){if(C=C||w.name||"download",typeof w!="string")navigator.msSaveOrOpenBlob(i(w,_),C);else if(c(w))d(w,C,_);else{var S=document.createElement("a");S.href=w,S.target="_blank",setTimeout(function(){o(S)})}}:function(w,C,_,S){if(S=S||open("","_blank"),S&&(S.document.title=S.document.body.innerText="downloading..."),typeof w=="string")return d(w,C,_);var g=w.type==="application/octet-stream",E=/constructor/i.test(h.HTMLElement)||h.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||g&&E||u)&&typeof FileReader<"u"){var k=new FileReader;k.onloadend=function(){var M=k.result;M=v?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),S?S.location.href=M:location=M,S=null},k.readAsDataURL(w)}else{var b=h.URL||h.webkitURL,P=b.createObjectURL(w);S?S.location=P:location.href=P,S=null,setTimeout(function(){b.revokeObjectURL(P)},4e4)}});h.saveAs=m.saveAs=m,$.exports=m})})(ir)),ir.exports}var aa=Bo();function Zi($){const r=Math.floor($/3600),i=Math.floor($%3600/60),d=Math.floor($%60),c=Math.floor($%1*1e3);return`${r.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")},${c.toString().padStart(3,"0")}`}function Hi($){const r=Math.floor($/3600),i=Math.floor($%3600/60),d=Math.floor($%60),c=Math.floor($%1*1e3);return`${r.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}.${c.toString().padStart(3,"0")}`}function oa($){return $.map((r,i)=>{const d=i+1,c=Zi(r.start),o=Zi(r.end),h=r.text;return`${d}
${c} --> ${o}
${h}
`}).join(`
`)}function sa($){const r=`WEBVTT

`,i=$.map(d=>{const c=Hi(d.start),o=Hi(d.end),h=d.text;return`${c} --> ${o}
${h}
`}).join(`
`);return r+i}function la($){return $.map(r=>{const i=r.start.toFixed(3),d=r.end.toFixed(3);return`[${i}s - ${d}s] ${r.text}`}).join(`
`)}function ua($,r,i,d,c,o,h){return{id:$,title:r,duration:i,created_at:new Date(d).toISOString(),source:c,full_text:o,segments:h.map(u=>({id:u.id,text:u.text,start:u.start,end:u.end,duration:u.end-u.start}))}}async function ca($){return $}async function jo($){const r=await Co($),i=await lr($);if(!r)throw new Error("Recording not found");if(!i)throw new Error("No annotations found for this recording");const d=new ia,c=`${r.title}-${$.slice(0,8)}`,o=d.folder(c),h=await ca(r.audioBlob);o.file(`${$}.wav`,h);const u=ua(r.id,r.title,r.duration,r.createdAt,r.source,i.fullText,i.segments);o.file(`${$}.json`,JSON.stringify(u,null,2));const m=oa(i.segments);o.file(`${$}.srt`,m);const w=sa(i.segments);o.file(`${$}.vtt`,w);const C=la(i.segments);o.file(`${$}.txt`,C);const _=await d.generateAsync({type:"blob"});aa.saveAs(_,`${c}.zip`)}async function Fo(){const r=(await ra()).filter(u=>u.isAnnotated);if(r.length===0)throw new Error("No annotated recordings to export");const i=new ia,c=`annotations-export-${new Date().toISOString().replace(/[:.]/g,"-")}`,o=i.folder(c);for(const u of r){const m=await lr(u.id);if(!m)continue;const w=`${u.title}-${u.id.slice(0,8)}`,C=o.folder(w),_=await ca(u.audioBlob);C.file(`${u.id}.wav`,_);const S=ua(u.id,u.title,u.duration,u.createdAt,u.source,m.fullText,m.segments);C.file(`${u.id}.json`,JSON.stringify(S,null,2));const g=oa(m.segments);C.file(`${u.id}.srt`,g);const E=sa(m.segments);C.file(`${u.id}.vtt`,E);const v=la(m.segments);C.file(`${u.id}.txt`,v)}const h=await i.generateAsync({type:"blob"});aa.saveAs(h,`${c}.zip`)}class No{constructor(r){this.listeners=new Set,this.state=r}getState(){return this.state}subscribe(r){return this.listeners.add(r),()=>{this.listeners.delete(r)}}notify(){this.listeners.forEach(r=>r(this.state))}setState(r){this.state={...this.state,...r},this.notify()}}const ha="aidio-theme",Lo=()=>{try{const $=localStorage.getItem(ha);if($==="dark"||$==="pastel")return $}catch($){console.warn("Failed to read theme from localStorage:",$)}return"dark"},Uo={currentTheme:Lo()};class Ko extends No{constructor(){super(Uo)}toggleTheme(){const r=this.state.currentTheme==="dark"?"pastel":"dark";this.setTheme(r)}setTheme(r){this.setState({currentTheme:r});try{localStorage.setItem(ha,r)}catch(i){console.warn("Failed to save theme to localStorage:",i)}}getCurrentTheme(){return this.state.currentTheme}}const En=new Ko,qo=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-sun"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />
</svg>
`,Wo=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-moon"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
</svg>
`;var da=function($,r,i,d){var c=arguments.length,o=c<3?r:d===null?d=Object.getOwnPropertyDescriptor(r,i):d,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,d);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(c<3?h(o):c>3?h(r,i,o):h(r,i))||o);return c>3&&o&&Object.defineProperty(r,i,o),o};let ur=class extends Se{constructor(){super(...arguments),this.currentTheme=En.getCurrentTheme()}connectedCallback(){super.connectedCallback(),this.unsubscribe=En.subscribe(r=>{this.currentTheme=r.currentTheme})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}handleToggle(){En.toggleTheme()}render(){const r=this.currentTheme==="dark"?qo:Wo,i=this.currentTheme==="dark"?"Switch to Pastel Theme":"Switch to Dark Theme";return Kt`
      <button
        class="theme-toggle-btn"
        @click=${this.handleToggle}
        title=${i}
        aria-label=${i}
      >
        <span class="theme-icon">${te(r)}</span>
      </button>
    `}};ur.styles=dn`
    :host {
      display: inline-flex;
    }

    .theme-toggle-btn {
      width: clamp(40px, 6vw, 48px);
      height: clamp(40px, 6vw, 48px);
      border-radius: var(--radius-md);
      border: 1px solid var(--glass-border);
      background: var(--glass-bg);
      backdrop-filter: blur(var(--glass-blur));
      -webkit-backdrop-filter: blur(var(--glass-blur));
      color: var(--text-primary);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: clamp(1.125rem, 2vw, 1.25rem);
      transition: all var(--duration-normal) var(--ease-out);
      box-shadow: var(--shadow-sm);
    }

    .theme-toggle-btn:hover {
      border-color: var(--accent-coral);
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }

    .theme-toggle-btn:active {
      transform: translateY(0);
      box-shadow: var(--shadow-xs);
    }

    .theme-icon {
      width: clamp(20px, 3vw, 24px);
      height: clamp(20px, 3vw, 24px);
      transition: transform var(--duration-normal) var(--ease-out);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .theme-icon svg {
      width: 100%;
      height: 100%;
      stroke: currentColor;
      fill: none;
    }

    .theme-toggle-btn:hover .theme-icon {
      transform: rotate(20deg);
    }
  `;da([Ft()],ur.prototype,"currentTheme",void 0);ur=da([fn("theme-toggle")],ur);const fa=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-play"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
</svg>
`,Zo=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-pause"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="14" y="3" width="5" height="18" rx="1" />
  <rect x="5" y="3" width="5" height="18" rx="1" />
</svg>
`,Ho=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-repeat"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m17 2 4 4-4 4" />
  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
  <path d="m7 22-4-4 4-4" />
  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
</svg>
`;var oe=function($,r,i,d){var c=arguments.length,o=c<3?r:d===null?d=Object.getOwnPropertyDescriptor(r,i):d,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,d);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(c<3?h(o):c>3?h(r,i,o):h(r,i))||o);return c>3&&o&&Object.defineProperty(r,i,o),o};let ee=class extends Se{constructor(){super(...arguments),this.audioBlob=null,this.startMarker=0,this.endMarker=3,this.leftClamp=0,this.rightClamp=3,this.waveformData=null,this.isPlaying=!1,this.loopEnabled=!1,this.currentTime=0,this.duration=0,this.draggingMarker=null,this.waveformZoom=1,this.waveformPan=0,this.isPanningWaveform=!1,this.panStartX=0,this.panStartOffset=0,this.canvas=null,this.ctx=null,this.audioContext=null,this.audioBuffer=null,this.audioSource=null,this.animationFrameId=null,this.playStartTime=0,this.playStartOffset=0,this.handleMarkerMouseMove=r=>{if(!this.draggingMarker||!this.canvas||this.duration===0)return;const i=this.canvas.getBoundingClientRect(),d=r.clientX-i.left,o=Math.max(0,Math.min(1,d/i.width))*this.duration;if(this.draggingMarker==="start")this.startMarker=Math.max(0,Math.min(o,this.endMarker-.1)),this.leftClamp=this.startMarker;else{const h=this.leftClamp??this.startMarker;this.endMarker=Math.min(this.duration,Math.max(o,h+.1)),this.rightClamp=this.endMarker}this.dispatchMarkerChange(),this.requestUpdate()},this.handleMarkerMouseUp=()=>{this.draggingMarker=null,document.removeEventListener("mousemove",this.handleMarkerMouseMove),document.removeEventListener("mouseup",this.handleMarkerMouseUp)},this.handleWaveformPanStart=r=>{const i=r.target;!i.tagName||i.tagName!=="CANVAS"||(this.isPanningWaveform=!0,this.panStartX=r.clientX,this.panStartOffset=this.waveformPan,document.addEventListener("mousemove",this.handleWaveformPanMove),document.addEventListener("mouseup",this.handleWaveformPanEnd))},this.handleWaveformPanMove=r=>{if(!this.isPanningWaveform)return;const i=r.clientX-this.panStartX;this.waveformPan=this.panStartOffset+i,this.renderWaveform()},this.handleWaveformPanEnd=()=>{this.isPanningWaveform=!1,document.removeEventListener("mousemove",this.handleWaveformPanMove),document.removeEventListener("mouseup",this.handleWaveformPanEnd)},this.handleKeyDown=r=>{r.code==="Space"?(r.preventDefault(),this.handlePlay()):r.code==="KeyL"&&(r.preventDefault(),this.toggleLoop())}}async firstUpdated(){this.canvas=this.shadowRoot.querySelector("canvas"),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.setupCanvas()),this.audioBlob&&await this.loadAudio(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.cleanup(),this.removeEventListener("keydown",this.handleKeyDown)}setupCanvas(){if(!this.canvas||!this.ctx)return;const r=this.canvas.getBoundingClientRect(),i=window.devicePixelRatio||1;this.canvas.width=r.width*i,this.canvas.height=r.height*i,this.ctx.scale(i,i),this.canvas.style.width=`${r.width}px`,this.canvas.style.height=`${r.height}px`}async loadAudio(){if(this.audioBlob)try{this.audioContext=new AudioContext;const r=await this.audioBlob.arrayBuffer();this.audioBuffer=await this.audioContext.decodeAudioData(r),this.duration=this.audioBuffer.duration,this.endMarker=Math.min(3,this.duration),await this.extractWaveformData(),this.renderWaveform(),this.dispatchEvent(new CustomEvent("duration-loaded",{detail:{duration:this.duration},bubbles:!0,composed:!0}))}catch(r){console.error("Failed to load audio:",r)}}async extractWaveformData(){if(!this.audioBuffer)return;const r=this.audioBuffer.getChannelData(0),i=1e3,d=Math.floor(r.length/i),c=new Float32Array(i);for(let o=0;o<i;o++){const h=o*d;let u=0;for(let m=0;m<d;m++)u+=Math.abs(r[h+m]);c[o]=u/d}this.waveformData=c}renderWaveform(){if(!this.canvas||!this.ctx||!this.waveformData)return;const r=this.canvas.getBoundingClientRect(),i=r.width,d=r.height;this.ctx.fillStyle=getComputedStyle(this.canvas).getPropertyValue("--bg-surface")||"#1a1a2e",this.ctx.fillRect(0,0,i,d),this.ctx.save(),this.ctx.translate(this.waveformPan,0);const o=i/this.waveformData.length*this.waveformZoom,h=d/2;this.ctx.fillStyle="rgba(100, 200, 255, 0.8)";const u=Math.max(0,Math.floor(-this.waveformPan/o)),m=Math.min(this.waveformData.length,Math.ceil((i-this.waveformPan)/o));for(let w=u;w<m;w++){const _=this.waveformData[w]*h*.9,S=w*o;this.ctx.fillRect(S,h-_,o*.8,_*2)}if(this.isPlaying&&this.duration>0){const w=this.currentTime/this.duration*i*this.waveformZoom;this.ctx.strokeStyle="#ff6b6b",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(w,0),this.ctx.lineTo(w,d),this.ctx.stroke()}this.ctx.restore()}handlePlay(){this.isPlaying?this.pause():this.play()}async play(){if(!this.audioContext||!this.audioBuffer)return;this.audioContext.state==="suspended"&&await this.audioContext.resume(),this.stopAudioSource(),this.audioSource=this.audioContext.createBufferSource(),this.audioSource.buffer=this.audioBuffer,this.audioSource.connect(this.audioContext.destination);const r=this.leftClamp??this.startMarker,d=(this.rightClamp??this.endMarker)-r;this.audioSource.start(0,r,d),this.isPlaying=!0,this.playStartTime=this.audioContext.currentTime,this.playStartOffset=r,this.audioSource.onended=()=>{this.loopEnabled&&this.isPlaying?this.play():this.pause()},this.startAnimationLoop()}pause(){this.stopAudioSource(),this.isPlaying=!1,this.stopAnimationLoop(),this.renderWaveform()}stopAudioSource(){if(this.audioSource){try{this.audioSource.stop()}catch{}this.audioSource.disconnect(),this.audioSource=null}}startAnimationLoop(){const r=()=>{if(!this.isPlaying||!this.audioContext)return;const i=this.audioContext.currentTime-this.playStartTime;this.currentTime=this.playStartOffset+i;const d=this.rightClamp??this.endMarker;this.currentTime>=d&&(this.currentTime=d),this.renderWaveform(),this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r)}stopAnimationLoop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}toggleLoop(){this.loopEnabled=!this.loopEnabled}handleMarkerMouseDown(r,i){r.preventDefault(),r.stopPropagation(),i==="left"?this.draggingMarker="start":i==="right"?this.draggingMarker="end":this.draggingMarker=i,document.addEventListener("mousemove",this.handleMarkerMouseMove),document.addEventListener("mouseup",this.handleMarkerMouseUp)}dispatchMarkerChange(){this.dispatchEvent(new CustomEvent("markers-changed",{detail:{start:this.startMarker,end:this.endMarker,duration:this.endMarker-this.startMarker},bubbles:!0,composed:!0}))}zoomWaveformIn(){this.waveformZoom=Math.min(5,this.waveformZoom*1.5),this.renderWaveform()}zoomWaveformOut(){this.waveformZoom=Math.max(1,this.waveformZoom/1.5),this.waveformZoom===1&&(this.waveformPan=0),this.renderWaveform()}autoCenterSegment(){if(!this.canvas||this.duration===0)return;const r=this.canvas.getBoundingClientRect(),i=this.leftClamp??this.startMarker,d=this.rightClamp??this.endMarker,c=(i+d)/2/this.duration*r.width*this.waveformZoom;this.waveformPan=r.width/2-c,this.renderWaveform()}formatTime(r){const i=Math.floor(r/60),d=(r%60).toFixed(2);return`${i}:${d.padStart(5,"0")}`}cleanup(){this.pause(),this.audioContext?.close(),this.audioContext=null,this.audioBuffer=null}render(){const r=this.leftClamp!==void 0&&this.rightClamp!==void 0,i=this.duration>0?(r?this.leftClamp:this.startMarker)/this.duration*100:0,d=this.duration>0?(r?this.rightClamp:this.endMarker)/this.duration*100:100;return Kt`
      <div class="player-container">
        <div
          class="waveform-wrapper"
          style="--start-pos: ${i}%; --end-pos: ${d}%; --left-clamp-pos: ${i}%; --right-clamp-pos: ${d}%;"
          @mousedown=${this.handleWaveformPanStart}
        >
          <canvas style="cursor: ${this.isPanningWaveform?"grabbing":"grab"};"></canvas>

          ${r?Kt`
            <!-- Protected region (already annotated) -->
            <div class="protected-region"></div>

            <!-- Active segment (currently being annotated) -->
            <div class="active-segment"></div>

            <!-- Left clamp (protected, smaller but draggable) -->
            <div
              class="marker left-clamp ${this.draggingMarker==="start"?"dragging":""}"
              @mousedown=${c=>this.handleMarkerMouseDown(c,"left")}
            >
              <div class="marker-handle">◀</div>
            </div>

            <!-- Right clamp (adjustable) -->
            <div
              class="marker right-clamp ${this.draggingMarker==="end"?"dragging":""}"
              @mousedown=${c=>this.handleMarkerMouseDown(c,"right")}
            >
              <div class="marker-handle">▶</div>
            </div>
          `:Kt`
            <!-- Legacy mode: start/end markers -->
            <div class="segment-overlay"></div>

            <div
              class="marker start ${this.draggingMarker==="start"?"dragging":""}"
              @mousedown=${c=>this.handleMarkerMouseDown(c,"start")}
            >
              <div class="marker-handle">◀</div>
            </div>

            <div
              class="marker end ${this.draggingMarker==="end"?"dragging":""}"
              @mousedown=${c=>this.handleMarkerMouseDown(c,"end")}
            >
              <div class="marker-handle">▶</div>
            </div>
          `}
        </div>

        <div class="controls">
          <div class="playback-controls">
            <button class="control-btn" @click=${this.handlePlay}>
              ${this.isPlaying?te(Zo):te(fa)}
              <span>${this.isPlaying?"Pause":"Play"}</span>
            </button>

            <button
              class="control-btn ${this.loopEnabled?"active":""}"
              @click=${this.toggleLoop}
            >
              ${te(Ho)}
              <span>Loop</span>
            </button>

            <button class="control-btn" @click=${this.zoomWaveformOut} ?disabled=${this.waveformZoom===1}>
              <span>Zoom Out (−)</span>
            </button>

            <button class="control-btn" @click=${this.zoomWaveformIn} ?disabled=${this.waveformZoom>=5}>
              <span>Zoom In (+)</span>
            </button>

            <button class="control-btn" @click=${this.autoCenterSegment}>
              <span>Center Segment</span>
            </button>
          </div>

          <div class="time-display">
            <span class="duration-label">Segment:</span>
            ${this.formatTime(r?this.leftClamp:this.startMarker)} -
            ${this.formatTime(r?this.rightClamp:this.endMarker)}
            <span class="duration-label">
              (${(r?this.rightClamp-this.leftClamp:this.endMarker-this.startMarker).toFixed(2)}s)
            </span>
            <span class="duration-label">| Zoom: ${Math.round(this.waveformZoom*100)}%</span>
          </div>
        </div>
      </div>
    `}};ee.styles=dn`
    :host {
      display: block;
      width: 100%;
    }

    .player-container {
      background: var(--glass-bg);
      backdrop-filter: blur(var(--glass-blur));
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-4);
    }

    .waveform-wrapper {
      position: relative;
      width: 100%;
      height: 150px;
      background: var(--bg-surface);
      border-radius: var(--radius-md);
      overflow: hidden;
      margin-bottom: var(--spacing-3);
      cursor: crosshair;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }

    .marker {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 3px;
      cursor: ew-resize;
      z-index: 10;
      transition: width 0.1s ease;
    }

    .marker:hover,
    .marker.dragging {
      width: 6px;
    }

    .marker.start {
      background: linear-gradient(to right, transparent, var(--accent-coral));
      left: var(--start-pos);
    }

    .marker.end {
      background: linear-gradient(to left, transparent, var(--accent-coral));
      left: var(--end-pos);
    }

    .marker.left-clamp {
      background: linear-gradient(to right, transparent, #39ff14);
      left: var(--left-clamp-pos);
      cursor: ew-resize;  /* Draggable, but visually distinct */
    }

    .marker.right-clamp {
      background: linear-gradient(to left, transparent, var(--accent-coral));
      left: var(--right-clamp-pos);
      cursor: ew-resize;
    }

    .marker-handle {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 40px;
      background: var(--accent-coral);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 10px;
      font-weight: bold;
      box-shadow: var(--shadow-md);
    }

    .marker.start .marker-handle {
      left: -10px;
    }

    .marker.end .marker-handle {
      right: -10px;
    }

    .marker.left-clamp .marker-handle {
      left: -8px;
      width: 14px;  /* Smaller than right clamp */
      height: 28px;
      background: #39ff14;
      cursor: ew-resize;
    }

    .marker.right-clamp .marker-handle {
      right: -10px;
      background: var(--accent-coral);
    }

    .segment-overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      background: rgba(255, 107, 107, 0.15);
      pointer-events: none;
      left: var(--start-pos);
      width: calc(var(--end-pos) - var(--start-pos));
    }

    .protected-region {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: var(--left-clamp-pos);
      background: rgba(57, 255, 20, 0.1);
      pointer-events: none;
      border-right: 2px solid #39ff14;
    }

    .active-segment {
      position: absolute;
      top: 0;
      bottom: 0;
      background: rgba(255, 107, 107, 0.15);
      pointer-events: none;
      left: var(--left-clamp-pos);
      width: calc(var(--right-clamp-pos) - var(--left-clamp-pos));
    }

    .controls {
      display: flex;
      gap: var(--spacing-3);
      align-items: center;
      justify-content: space-between;
    }

    .playback-controls {
      display: flex;
      gap: var(--spacing-2);
    }

    .control-btn {
      padding: var(--spacing-2) var(--spacing-4);
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      color: var(--text-primary);
      cursor: pointer;
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      transition: all var(--duration-fast) var(--ease-out);
    }

    .control-btn:hover {
      border-color: var(--accent-coral);
      transform: translateY(-1px);
    }

    .control-btn.active {
      background: var(--accent-coral);
      color: white;
      border-color: var(--accent-coral);
    }

    .control-btn svg {
      width: 16px;
      height: 16px;
      stroke: currentColor;
      fill: currentColor;
    }

    .time-display {
      font-family: var(--font-data);
      font-size: var(--text-sm);
      color: var(--text-secondary);
      font-variant-numeric: tabular-nums;
    }

    .duration-label {
      font-weight: var(--font-medium);
      color: var(--text-tertiary);
      margin-right: var(--spacing-1);
    }
  `;oe([_e({type:Object})],ee.prototype,"audioBlob",void 0);oe([_e({type:Number})],ee.prototype,"startMarker",void 0);oe([_e({type:Number})],ee.prototype,"endMarker",void 0);oe([_e({type:Number})],ee.prototype,"leftClamp",void 0);oe([_e({type:Number})],ee.prototype,"rightClamp",void 0);oe([Ft()],ee.prototype,"waveformData",void 0);oe([Ft()],ee.prototype,"isPlaying",void 0);oe([Ft()],ee.prototype,"loopEnabled",void 0);oe([Ft()],ee.prototype,"currentTime",void 0);oe([Ft()],ee.prototype,"duration",void 0);oe([Ft()],ee.prototype,"draggingMarker",void 0);oe([Ft()],ee.prototype,"waveformZoom",void 0);oe([Ft()],ee.prototype,"waveformPan",void 0);oe([Ft()],ee.prototype,"isPanningWaveform",void 0);oe([Ft()],ee.prototype,"panStartX",void 0);oe([Ft()],ee.prototype,"panStartOffset",void 0);ee=oe([fn("audio-waveform-player")],ee);var fe=function($,r,i,d){var c=arguments.length,o=c<3?r:d===null?d=Object.getOwnPropertyDescriptor(r,i):d,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,d);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(c<3?h(o):c>3?h(r,i,o):h(r,i))||o);return c>3&&o&&Object.defineProperty(r,i,o),o};let ce=class extends Se{constructor(){super(...arguments),this.text="",this.fontSize=24,this.leftClamp=0,this.rightClamp=0,this.offsetX=0,this.isDragging=!1,this.dragStartX=0,this.dragStartOffset=0,this.zoomLevel=1,this.draggingClamp=null,this.clampDragStartX=0,this.clampDragStartValue=0,this.isFocused=!1,this.handleFocus=()=>{this.isFocused=!0},this.handleBlur=()=>{this.isFocused=!1},this.handleMouseDown=r=>{this.isDragging=!0,this.dragStartX=r.clientX,this.dragStartOffset=this.offsetX,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)},this.handleMouseMove=r=>{if(!this.isDragging)return;const i=r.clientX-this.dragStartX;this.offsetX=this.dragStartOffset+i,this.requestUpdate()},this.handleMouseUp=()=>{this.isDragging=!1,document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)},this.handleClampMouseDown=(r,i)=>{r.preventDefault(),r.stopPropagation(),this.draggingClamp=i,this.clampDragStartX=r.clientX,this.clampDragStartValue=i==="left"?this.leftClamp:this.rightClamp,document.addEventListener("mousemove",this.handleClampMouseMove),document.addEventListener("mouseup",this.handleClampMouseUp)},this.handleClampMouseMove=r=>{if(!this.draggingClamp||!this.text)return;const i=r.clientX-this.clampDragStartX,d=this.fontSize*this.zoomLevel/2,c=Math.round(i/d);let o=this.clampDragStartValue+c;o=Math.max(0,Math.min(this.text.length,o)),this.draggingClamp==="left"?this.leftClamp=Math.min(o,this.rightClamp-1):this.rightClamp=Math.max(o,this.leftClamp+1),this.dispatchClampChangeEvent(),this.requestUpdate()},this.handleClampMouseUp=()=>{this.draggingClamp=null,document.removeEventListener("mousemove",this.handleClampMouseMove),document.removeEventListener("mouseup",this.handleClampMouseUp)},this.handleKeyDown=r=>{this.isFocused&&((r.metaKey||r.ctrlKey)&&(r.code==="Equal"||r.key==="+"||r.key==="=")?(r.preventDefault(),r.stopPropagation(),this.zoomIn()):(r.metaKey||r.ctrlKey)&&(r.code==="Minus"||r.key==="-")?(r.preventDefault(),r.stopPropagation(),this.zoomOut()):(r.metaKey||r.ctrlKey)&&(r.code==="Digit0"||r.key==="0")&&(r.preventDefault(),r.stopPropagation(),this.resetView()))}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("focus",this.handleFocus),this.addEventListener("blur",this.handleBlur),this.tabIndex=0}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("focus",this.handleFocus),this.removeEventListener("blur",this.handleBlur)}dispatchClampChangeEvent(){this.dispatchEvent(new CustomEvent("text-clamps-changed",{detail:{leftClamp:this.leftClamp,rightClamp:this.rightClamp,text:this.text.substring(this.leftClamp,this.rightClamp)},bubbles:!0,composed:!0}))}zoomIn(){const r=this.zoomLevel;if(this.zoomLevel=Math.min(3,this.zoomLevel*1.2),this.leftClamp>0){const i=this.fontSize*r/2,d=this.leftClamp*i,c=this.fontSize*this.zoomLevel/2,o=this.leftClamp*c;this.offsetX+=d-o}this.requestUpdate()}zoomOut(){const r=this.zoomLevel;if(this.zoomLevel=Math.max(.5,this.zoomLevel/1.2),this.leftClamp>0){const i=this.fontSize*r/2,d=this.leftClamp*i,c=this.fontSize*this.zoomLevel/2,o=this.leftClamp*c;this.offsetX+=d-o}this.requestUpdate()}resetView(){this.offsetX=0,this.zoomLevel=1,this.requestUpdate()}getClearSegmentText(){if(!this.text)return{text:"",startChar:0,endChar:0};const r=this.text.length,i=.3,d=this.shadowRoot?.querySelector(".text-viewport")?.clientWidth||800,c=this.fontSize*this.zoomLevel/2,o=Math.floor(d/c),h=Math.floor(o*i),u=Math.floor(-this.offsetX/c),m=Math.max(0,u+Math.floor((o-h)/2)),w=Math.min(r,m+h);return{text:this.text.substring(m,w),startChar:m,endChar:w}}renderStyledText(){if(!this.text)return"";const r=[];if(this.leftClamp>0){const i=this.text.substring(0,this.leftClamp);r.push(Kt`<span class="protected">${i}</span>`)}if(this.rightClamp>this.leftClamp){const i=this.text.substring(this.leftClamp,this.rightClamp);r.push(Kt`<span class="current">${i}</span>`)}if(this.rightClamp<this.text.length){const i=this.text.substring(this.rightClamp);r.push(Kt`<span class="upcoming">${i}</span>`)}return r}render(){const r=this.fontSize*this.zoomLevel,i=this.fontSize*this.zoomLevel/2,d=this.leftClamp*i+this.offsetX,c=this.rightClamp*i+this.offsetX;return Kt`
      <div class="container">
        <div
          class="text-viewport ${this.isDragging?"dragging":""}"
          @mousedown=${this.handleMouseDown}
          style="--left-clamp-text-pos: ${d}px; --right-clamp-text-pos: ${c}px;"
        >
          ${this.text?Kt`
                <div
                  class="text-content ${this.isDragging?"no-transition":""}"
                  style="--offset-x: ${this.offsetX}px; font-size: ${r}px;"
                >
                  ${this.leftClamp>0||this.rightClamp>0?this.renderStyledText():this.text}
                </div>

                <!-- Text clamp markers -->
                ${this.leftClamp>0||this.rightClamp>0?Kt`
                      <div
                        class="text-clamp left ${this.draggingClamp==="left"?"dragging":""}"
                        @mousedown=${o=>this.handleClampMouseDown(o,"left")}
                      >
                        <div class="text-clamp-handle">◀</div>
                      </div>

                      <div
                        class="text-clamp right ${this.draggingClamp==="right"?"dragging":""}"
                        @mousedown=${o=>this.handleClampMouseDown(o,"right")}
                      >
                        <div class="text-clamp-handle">▶</div>
                      </div>
                    `:null}

                <div class="clear-segment"></div>

                <div class="gradient-mask"></div>

                <div class="blur-overlay">
                  <div class="blur-left"></div>
                  <div class="blur-right"></div>
                </div>
              `:Kt`<div class="empty-state">No text entered yet</div>`}
        </div>

        <div class="controls">
          <div class="zoom-controls">
            <button class="control-btn" @click=${this.zoomOut}>
              Zoom Out (−)
            </button>
            <button class="control-btn" @click=${this.zoomIn}>
              Zoom In (+)
            </button>
            <button class="control-btn" @click=${this.resetView}>
              Reset
            </button>
          </div>

          <div class="info-text">
            ${this.isFocused?Kt`<strong style="color: var(--accent-coral);">🔒 Focus trapped</strong> | `:""}
            Drag text ←→ | ${this.isFocused?"Cmd/Ctrl +/− to zoom":"Click to focus for zoom"} | Zoom: ${Math.round(this.zoomLevel*100)}%
          </div>
        </div>
      </div>
    `}};ce.styles=dn`
    :host {
      display: block;
      width: 100%;
    }

    .container {
      background: var(--bg-surface);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-4);
      overflow: hidden;
      position: relative;
    }

    .text-viewport {
      position: relative;
      height: 120px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: grab;
      user-select: none;
    }

    .text-viewport.dragging {
      cursor: grabbing;
    }

    .text-content {
      position: absolute;
      white-space: nowrap;
      font-family: var(--font-ui);
      font-size: var(--text-2xl);
      font-weight: var(--font-medium);
      color: var(--text-primary);
      transform: translateX(var(--offset-x, 0px));
      transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      will-change: transform;
    }

    .text-content.no-transition {
      transition: none;
    }

    .text-content .protected {
      opacity: 0.4;
      color: #39ff14;
      text-decoration: line-through;
    }

    .text-content .current {
      color: var(--accent-coral);
      font-weight: var(--font-bold);
    }

    .text-content .upcoming {
      opacity: 0.6;
    }

    /* Gradient mask for smoked glass effect - darkening edges */
    .gradient-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 10;
      background: linear-gradient(
        to right,
        rgba(26, 26, 46, 0.98) 0%,
        rgba(26, 26, 46, 0.85) 10%,
        rgba(26, 26, 46, 0.4) 25%,
        transparent 35%,
        transparent 65%,
        rgba(26, 26, 46, 0.4) 75%,
        rgba(26, 26, 46, 0.85) 90%,
        rgba(26, 26, 46, 0.98) 100%
      );
    }

    /* Text blur on edges using mask */
    .text-content::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(3px);
      opacity: 0.5;
      mask-image: linear-gradient(
        to right,
        black 0%,
        black 15%,
        transparent 35%,
        transparent 65%,
        black 85%,
        black 100%
      );
      -webkit-mask-image: linear-gradient(
        to right,
        black 0%,
        black 15%,
        transparent 35%,
        transparent 65%,
        black 85%,
        black 100%
      );
      z-index: -1;
    }

    /* SVG filter for Gaussian blur on edges */
    .blur-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 5;
    }

    .blur-left,
    .blur-right {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 35%;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .blur-left {
      left: 0;
      mask-image: linear-gradient(to right, black 0%, black 50%, transparent 100%);
      -webkit-mask-image: linear-gradient(to right, black 0%, black 50%, transparent 100%);
    }

    .blur-right {
      right: 0;
      mask-image: linear-gradient(to left, black 0%, black 50%, transparent 100%);
      -webkit-mask-image: linear-gradient(to left, black 0%, black 50%, transparent 100%);
    }

    /* Clear segment indicator */
    .clear-segment {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 35%;
      right: 35%;
      border-left: 2px solid var(--accent-coral);
      border-right: 2px solid var(--accent-coral);
      background: rgba(255, 107, 107, 0.05);
      pointer-events: none;
      z-index: 5;
    }

    .controls {
      display: flex;
      gap: var(--spacing-3);
      align-items: center;
      justify-content: space-between;
      margin-top: var(--spacing-3);
      padding-top: var(--spacing-3);
      border-top: 1px solid var(--glass-border);
    }

    .zoom-controls {
      display: flex;
      gap: var(--spacing-2);
    }

    .control-btn {
      padding: var(--spacing-2) var(--spacing-3);
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      color: var(--text-primary);
      cursor: pointer;
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      transition: all var(--duration-fast) var(--ease-out);
    }

    .control-btn:hover {
      border-color: var(--accent-coral);
      transform: translateY(-1px);
    }

    .info-text {
      font-family: var(--font-ui);
      font-size: var(--text-xs);
      color: var(--text-tertiary);
    }

    .empty-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--text-tertiary);
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-style: italic;
    }

    /* Text clamp markers */
    .text-clamp {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 3px;
      cursor: ew-resize;
      z-index: 20;
      transition: width 0.1s ease;
    }

    .text-clamp:hover,
    .text-clamp.dragging {
      width: 6px;
    }

    .text-clamp.left {
      background: linear-gradient(to right, transparent, #39ff14);
      left: var(--left-clamp-text-pos);
    }

    .text-clamp.right {
      background: linear-gradient(to left, transparent, var(--accent-coral));
      left: var(--right-clamp-text-pos);
    }

    .text-clamp-handle {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 30px;
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 10px;
      font-weight: bold;
      box-shadow: var(--shadow-md);
    }

    .text-clamp.left .text-clamp-handle {
      left: -8px;
      background: #39ff14;
    }

    .text-clamp.right .text-clamp-handle {
      right: -8px;
      background: var(--accent-coral);
    }

    /* Focus trap indicator */
    :host([focused]) .container {
      outline: 2px solid var(--accent-coral);
      outline-offset: 2px;
      box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.1);
    }
  `;fe([_e({type:String})],ce.prototype,"text",void 0);fe([_e({type:Number})],ce.prototype,"fontSize",void 0);fe([_e({type:Number})],ce.prototype,"leftClamp",void 0);fe([_e({type:Number})],ce.prototype,"rightClamp",void 0);fe([Ft()],ce.prototype,"offsetX",void 0);fe([Ft()],ce.prototype,"isDragging",void 0);fe([Ft()],ce.prototype,"dragStartX",void 0);fe([Ft()],ce.prototype,"dragStartOffset",void 0);fe([Ft()],ce.prototype,"zoomLevel",void 0);fe([Ft()],ce.prototype,"draggingClamp",void 0);fe([Ft()],ce.prototype,"clampDragStartX",void 0);fe([Ft()],ce.prototype,"clampDragStartValue",void 0);fe([Ft()],ce.prototype,"isFocused",void 0);ce=fe([fn("smoked-glass-text")],ce);const Vi=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-chevron-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 18 6-6-6-6" />
</svg>
`,Vo=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-save"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
  <path d="M7 3v4a1 1 0 0 0 1 1h7" />
</svg>
`,pa=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-check-circle"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
  <path d="m9 11 3 3L22 4" />
</svg>
`;var xe=function($,r,i,d){var c=arguments.length,o=c<3?r:d===null?d=Object.getOwnPropertyDescriptor(r,i):d,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,d);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(c<3?h(o):c>3?h(r,i,o):h(r,i))||o);return c>3&&o&&Object.defineProperty(r,i,o),o};let ve=class extends Se{constructor(){super(...arguments),this.audioBlob=null,this.fullTranscript="",this.transcriptEntered=!1,this.leftClamp=0,this.rightClamp=3,this.totalDuration=0,this.annotations=[],this.isComplete=!1,this.textLeftClamp=0,this.textRightClamp=0}get currentSegmentNumber(){return this.annotations.length+1}get currentSegmentText(){return this.fullTranscript.substring(this.textLeftClamp,this.textRightClamp)}handleMarkersChanged(r){this.rightClamp=r.detail.end,this.leftClamp=r.detail.start}handleDurationLoaded(r){this.totalDuration=r.detail.duration}handleTranscriptInput(r){const i=r.target;this.fullTranscript=i.value}beginAnnotation(){if(!this.fullTranscript.trim()){alert("Please enter the full transcript before beginning annotation.");return}this.transcriptEntered=!0,this.leftClamp=0,this.rightClamp=Math.min(3,this.totalDuration),this.textLeftClamp=0;const r=this.fullTranscript.length/this.totalDuration;this.textRightClamp=Math.floor(r*this.rightClamp),setTimeout(()=>{const i=this.shadowRoot?.querySelector("audio-waveform-player");i&&(i.leftClamp=this.leftClamp,i.rightClamp=this.rightClamp,i.loopEnabled=!0)},100)}confirmSegment(){if(!this.currentSegmentText.trim()){alert("Please adjust the segment boundaries to include text.");return}const r={id:crypto.randomUUID(),audioStart:this.leftClamp,audioEnd:this.rightClamp,text:this.currentSegmentText,textStart:this.textLeftClamp,textEnd:this.textRightClamp,createdAt:Date.now()};this.annotations=[...this.annotations,r],this.advanceToNextSegment(),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{annotation:r,allAnnotations:this.annotations},bubbles:!0,composed:!0}))}advanceToNextSegment(){if(this.rightClamp>=this.totalDuration-.1){this.isComplete=!0,this.dispatchCompletionEvent();return}this.leftClamp=this.rightClamp,this.textLeftClamp=this.textRightClamp;const r=3;this.rightClamp=Math.min(this.leftClamp+r,this.totalDuration);const i=this.fullTranscript.length/this.totalDuration,d=Math.floor(i*this.rightClamp);this.textRightClamp=Math.min(d,this.fullTranscript.length);const c=this.shadowRoot?.querySelector("audio-waveform-player");c&&(c.leftClamp=this.leftClamp,c.rightClamp=this.rightClamp,c.loopEnabled=!0,c.autoCenterSegment&&c.autoCenterSegment());const o=this.shadowRoot?.querySelector("smoked-glass-text");if(o){o.leftClamp=this.textLeftClamp,o.rightClamp=this.textRightClamp;const h=o.fontSize*o.zoomLevel/2,u=this.textLeftClamp*h,m=Math.min(20,this.textLeftClamp);o.offsetX=-(u-m*h)}}dispatchCompletionEvent(){this.dispatchEvent(new CustomEvent("annotation-complete",{detail:{annotations:this.annotations,totalSegments:this.annotations.length,totalDuration:this.totalDuration,fullText:this.fullTranscript},bubbles:!0,composed:!0}))}saveProgress(){const r=new CustomEvent("progress-saved",{detail:{annotations:this.annotations},bubbles:!0,composed:!0});this.dispatchEvent(r),alert(`Progress saved! ${this.annotations.length} segments annotated.`)}render(){return this.isComplete?Kt`
        <div class="workflow-container">
          <div class="completion-message">
            ${te(pa)}
            <span>
              Annotation Complete! ${this.annotations.length} segments saved.
            </span>
          </div>
        </div>
      `:this.transcriptEntered?Kt`
      <div class="workflow-container">
        <div class="header">
          <h1 class="title">Step 2: Segment Audio-Text Alignment</h1>
          <div class="progress-info">
            Segment ${this.currentSegmentNumber} |
            Progress: ${(this.rightClamp/this.totalDuration*100).toFixed(1)}%
          </div>
        </div>

        ${this.annotations.length===0?Kt`
              <div class="help-text">
                <strong>Sliding window workflow:</strong><br />
                1. Audio plays in loop between green (left/protected) and orange (right/adjustable) markers<br />
                2. Drag orange marker to set segment boundary<br />
                3. Adjust text zoom/pan to align with audio<br />
                4. Click "Confirm Segment" when satisfied<br />
                5. Green marker advances automatically, repeat for next segment
              </div>
            `:null}

        <div class="waveform-section">
          <audio-waveform-player
            .audioBlob=${this.audioBlob}
            .leftClamp=${this.leftClamp}
            .rightClamp=${this.rightClamp}
            @markers-changed=${this.handleMarkersChanged}
            @duration-loaded=${this.handleDurationLoaded}
          ></audio-waveform-player>
        </div>

        <div class="text-display-section">
          <smoked-glass-text
            .text=${this.fullTranscript}
            .leftClamp=${this.textLeftClamp}
            .rightClamp=${this.textRightClamp}
          ></smoked-glass-text>
        </div>

        <div class="action-section">
          <div class="segment-info">
            Audio: ${this.leftClamp.toFixed(2)}s - ${this.rightClamp.toFixed(2)}s
            (${(this.rightClamp-this.leftClamp).toFixed(2)}s) |
            Text: chars ${this.textLeftClamp}-${this.textRightClamp}
          </div>

          <div style="display: flex; gap: var(--spacing-2);">
            <button
              class="action-btn secondary-btn"
              @click=${this.saveProgress}
              ?disabled=${this.annotations.length===0}
            >
              ${te(Vo)}
              <span>Save Progress</span>
            </button>

            <button
              class="action-btn"
              @click=${this.confirmSegment}
              ?disabled=${!this.currentSegmentText.trim()}
            >
              <span>Confirm Segment</span>
              ${te(Vi)}
            </button>
          </div>
        </div>
      </div>
    `:Kt`
        <div class="workflow-container">
          <div class="header">
            <h1 class="title">Listen & Enter Transcript</h1>
            <div class="progress-info">
              ${this.totalDuration.toFixed(2)}s audio | ${this.fullTranscript.length} characters entered
            </div>
          </div>

          <div class="help-text">
            <strong>Efficient workflow:</strong><br />
            1. Play the audio below to understand the content<br />
            2. Type or paste the entire transcript in one go<br />
            3. Click "Begin Segmentation" to start matching audio with text
          </div>

          <!-- Show waveform player immediately -->
          <div class="waveform-section">
            <audio-waveform-player
              .audioBlob=${this.audioBlob}
              .startMarker=${0}
              .endMarker=${this.totalDuration}
              @duration-loaded=${this.handleDurationLoaded}
            ></audio-waveform-player>
          </div>

          <div class="text-editor-section">
            <label class="editor-label">Full Transcript</label>
            <textarea
              class="text-input"
              .value=${this.fullTranscript}
              @input=${this.handleTranscriptInput}
              placeholder="Type or paste the complete transcript of the audio here..."
              autofocus
            ></textarea>
            <div class="char-count">
              ${this.fullTranscript.length} characters
            </div>
          </div>

          <div class="action-section">
            <div class="segment-info">
              Ready to segment: ${this.fullTranscript.length>0?"Yes":"Enter transcript first"}
            </div>

            <button
              class="action-btn"
              @click=${this.beginAnnotation}
              ?disabled=${!this.fullTranscript.trim()}
            >
              <span>Begin Segmentation</span>
              ${te(Vi)}
            </button>
          </div>
        </div>
      `}};ve.styles=dn`
    :host {
      display: block;
      height: 100%;
      background: var(--bg-primary);
    }

    .workflow-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: var(--spacing-4);
      gap: var(--spacing-4);
    }

    .header {
      flex: 0 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--spacing-3) var(--spacing-4);
      background: var(--glass-bg);
      backdrop-filter: blur(var(--glass-blur));
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
    }

    .title {
      font-family: var(--font-ui);
      font-size: var(--text-xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
    }

    .progress-info {
      font-family: var(--font-data);
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }

    .waveform-section {
      flex: 0 0 auto;
    }

    .text-display-section {
      flex: 0 0 auto;
    }

    .text-editor-section {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
      background: var(--glass-bg);
      backdrop-filter: blur(var(--glass-blur));
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-4);
    }

    .editor-label {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: var(--spacing-2);
    }

    .text-input {
      flex: 1;
      min-height: 0;
      padding: var(--spacing-3);
      font-family: var(--font-ui);
      font-size: var(--text-lg);
      line-height: var(--leading-relaxed);
      color: var(--text-primary);
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      resize: none;
      transition: all var(--duration-fast) var(--ease-out);
    }

    .text-input:focus {
      outline: none;
      border-color: var(--accent-coral);
      background: rgba(255, 255, 255, 0.05);
    }

    .text-input::placeholder {
      color: var(--text-tertiary);
      font-style: italic;
    }

    .char-count {
      margin-top: var(--spacing-2);
      font-family: var(--font-data);
      font-size: var(--text-xs);
      color: var(--text-tertiary);
      text-align: right;
    }

    .action-section {
      flex: 0 0 auto;
      display: flex;
      gap: var(--spacing-3);
      justify-content: space-between;
      align-items: center;
    }

    .action-btn {
      padding: var(--spacing-3) var(--spacing-6);
      background: var(--accent-coral);
      color: white;
      border: none;
      border-radius: var(--radius-lg);
      font-family: var(--font-ui);
      font-size: var(--text-base);
      font-weight: var(--font-bold);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      transition: all var(--duration-fast) var(--ease-out);
      box-shadow: var(--shadow-lg);
    }

    .action-btn:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-xl);
    }

    .action-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    .action-btn svg {
      width: 20px;
      height: 20px;
      stroke: currentColor;
      fill: currentColor;
    }

    .secondary-btn {
      background: var(--glass-bg);
      color: var(--text-primary);
      border: 1px solid var(--glass-border);
    }

    .completion-message {
      padding: var(--spacing-4);
      background: rgba(57, 255, 20, 0.1);
      border: 2px solid #39ff14;
      border-radius: var(--radius-lg);
      text-align: center;
      font-family: var(--font-ui);
      font-size: var(--text-lg);
      color: #39ff14;
      font-weight: var(--font-bold);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-2);
    }

    .completion-message svg {
      width: 24px;
      height: 24px;
      stroke: currentColor;
      fill: none;
    }

    .segment-info {
      font-family: var(--font-data);
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }

    .help-text {
      font-family: var(--font-ui);
      font-size: var(--text-xs);
      color: var(--text-tertiary);
      line-height: var(--leading-relaxed);
      padding: var(--spacing-3);
      background: rgba(255, 107, 107, 0.05);
      border-left: 3px solid var(--accent-coral);
      border-radius: var(--radius-sm);
      margin-bottom: var(--spacing-3);
    }
  `;xe([_e({type:Object})],ve.prototype,"audioBlob",void 0);xe([Ft()],ve.prototype,"fullTranscript",void 0);xe([Ft()],ve.prototype,"transcriptEntered",void 0);xe([Ft()],ve.prototype,"leftClamp",void 0);xe([Ft()],ve.prototype,"rightClamp",void 0);xe([Ft()],ve.prototype,"totalDuration",void 0);xe([Ft()],ve.prototype,"annotations",void 0);xe([Ft()],ve.prototype,"isComplete",void 0);xe([Ft()],ve.prototype,"textLeftClamp",void 0);xe([Ft()],ve.prototype,"textRightClamp",void 0);ve=xe([fn("annotation-workflow")],ve);const Xo=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
`,Yo=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-rotate-ccw"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
</svg>
`;var Gr=function($,r,i,d){var c=arguments.length,o=c<3?r:d===null?d=Object.getOwnPropertyDescriptor(r,i):d,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,d);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(c<3?h(o):c>3?h(r,i,o):h(r,i))||o);return c>3&&o&&Object.defineProperty(r,i,o),o};let Tn=class extends Se{constructor(){super(...arguments),this.recording=null,this.existingAnnotation=null}async connectedCallback(){super.connectedCallback(),this.recording?.isAnnotated&&(this.existingAnnotation=await lr(this.recording.id)||null)}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async handleStartOver(){!this.recording||!confirm("Are you sure you want to start over? This will delete all current annotations.")||(await Ao(this.recording.id),this.existingAnnotation=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("annotation-reset",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})))}async handleAnnotationComplete(r){if(!this.recording)return;const{annotations:i,fullText:d}=r.detail,c={recordingId:this.recording.id,fullText:d,segments:i,completedAt:Date.now(),updatedAt:Date.now()};await Ki(c),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})),this.handleClose()}async handleAnnotationSaved(r){if(!this.recording)return;const{allAnnotations:i}=r.detail,d=await lr(this.recording.id);d&&(d.segments=i,d.updatedAt=Date.now(),await Ki(d))}render(){return this.recording?Kt`
      <div class="modal-header">
        <div class="title-section">
          <div class="modal-title">Annotating: ${this.recording.title}</div>
          <div class="subtitle">
            Duration: ${this.recording.duration.toFixed(2)}s |
            Source: ${this.recording.source}
          </div>
        </div>

        <div class="header-actions">
          ${this.existingAnnotation?Kt`
                <button
                  class="header-btn danger"
                  @click=${this.handleStartOver}
                  title="Delete all annotations and start over"
                >
                  ${te(Yo)}
                  <span>Start Over</span>
                </button>
              `:null}

          <button
            class="header-btn"
            @click=${this.handleClose}
            title="Close without saving"
          >
            ${te(Xo)}
            <span>Close</span>
          </button>
        </div>
      </div>

      <div class="modal-content">
        <annotation-workflow
          .audioBlob=${this.recording.audioBlob}
          @annotation-complete=${this.handleAnnotationComplete}
          @annotation-saved=${this.handleAnnotationSaved}
        ></annotation-workflow>
      </div>
    `:Kt`<div>No recording selected</div>`}};Tn.styles=dn`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      background: var(--bg-primary);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--spacing-4);
      background: var(--glass-bg);
      backdrop-filter: blur(var(--glass-blur));
      border-bottom: 1px solid var(--glass-border);
    }

    .title-section {
      flex: 1;
    }

    .modal-title {
      font-family: var(--font-ui);
      font-size: var(--text-xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-1);
    }

    .subtitle {
      font-family: var(--font-data);
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }

    .header-actions {
      display: flex;
      gap: var(--spacing-2);
    }

    .header-btn {
      padding: var(--spacing-2) var(--spacing-3);
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      color: var(--text-primary);
      cursor: pointer;
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      transition: all var(--duration-fast) var(--ease-out);
    }

    .header-btn:hover {
      border-color: var(--accent-coral);
      transform: translateY(-1px);
    }

    .header-btn svg {
      width: 16px;
      height: 16px;
      stroke: currentColor;
      fill: none;
    }

    .header-btn.danger:hover {
      background: rgba(255, 107, 107, 0.1);
      border-color: var(--accent-coral);
    }

    .modal-content {
      height: calc(100vh - 80px);
      overflow-y: auto;
    }

    annotation-workflow {
      height: 100%;
    }
  `;Gr([_e({type:Object})],Tn.prototype,"recording",void 0);Gr([Ft()],Tn.prototype,"existingAnnotation",void 0);Tn=Gr([fn("annotation-modal")],Tn);const Go=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-circle"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
</svg>
`,Jo=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-square"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
</svg>
`,Qo=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-upload"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
</svg>
`,ts=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-edit"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
</svg>
`,es=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-trash-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>
`,Xi=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-download"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
</svg>
`,ns=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-mic"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 19v3" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
  <rect x="9" y="2" width="6" height="13" rx="3" />
</svg>
`;var pn=function($,r,i,d){var c=arguments.length,o=c<3?r:d===null?d=Object.getOwnPropertyDescriptor(r,i):d,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,d);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(c<3?h(o):c>3?h(r,i,o):h(r,i))||o);return c>3&&o&&Object.defineProperty(r,i,o),o};let Ue=class extends Se{constructor(){super(...arguments),this.recordings=[],this.isRecording=!1,this.recordingDuration=0,this.selectedRecording=null,this.isModalOpen=!1,this.microphoneService=null,this.mediaRecorderService=null,this.recordingTimer=null}async connectedCallback(){super.connectedCallback(),await this.loadRecordings()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async loadRecordings(){this.recordings=await ra()}async startRecording(){try{this.microphoneService=new mo;const r=await this.microphoneService.requestPermission();this.mediaRecorderService=new go,await this.mediaRecorderService.initialize(r),this.mediaRecorderService.start(),this.isRecording=!0,this.recordingDuration=0,this.recordingTimer=window.setInterval(()=>{this.recordingDuration+=.1,this.requestUpdate()},100)}catch(r){console.error("Failed to start recording:",r),alert("Failed to start recording. Please check microphone permissions."),this.cleanup()}}async stopRecording(){if(this.mediaRecorderService)try{const r=await this.mediaRecorderService.stop(),i=this.recordingDuration,c=`Untitled ${await Oo()}`;await na({title:c,audioBlob:r,duration:i,source:"recording"}),await this.loadRecordings()}catch(r){console.error("Failed to save recording:",r),alert("Failed to save recording.")}finally{this.cleanup()}}cleanup(){this.isRecording=!1,this.recordingDuration=0,this.recordingTimer&&(clearInterval(this.recordingTimer),this.recordingTimer=null),this.microphoneService?.release(),this.mediaRecorderService=null,this.microphoneService=null}async handleUpload(){const r=await zo();if(!(!r||r.length===0))try{await Ro(r),await this.loadRecordings()}catch(i){console.error("Failed to upload files:",i),alert("Failed to upload files.")}}async handleTitleChange(r,i){await So(r.id,{title:i}),await this.loadRecordings()}async handlePlay(r){new Audio(URL.createObjectURL(r.audioBlob)).play()}handleAnnotate(r){this.selectedRecording=r,this.isModalOpen=!0}async handleExport(r){try{await jo(r.id)}catch(i){console.error("Failed to export recording:",i),alert(i instanceof Error?i.message:"Failed to export recording.")}}async handleDelete(r){confirm(`Are you sure you want to delete "${r.title}"? This cannot be undone.`)&&(await Eo(r.id),await this.loadRecordings())}async handleExportAll(){try{await Fo()}catch(r){console.error("Failed to export all recordings:",r),alert(r instanceof Error?r.message:"Failed to export recordings.")}}handleModalClose(){this.isModalOpen=!1,this.selectedRecording=null,this.loadRecordings()}formatDuration(r){const i=Math.floor(r/60),d=Math.floor(r%60);return`${i}:${d.toString().padStart(2,"0")}`}render(){return Kt`
      <div class="container">
        <!-- Header -->
        <div class="header">
          <div class="logo-container">
            <div class="logo">
              <div class="freq-bar"></div>
              <div class="freq-bar"></div>
              <div class="freq-bar"></div>
              <div class="freq-bar"></div>
              <div class="freq-bar"></div>
            </div>
            <h1 class="title"><span class="ai">AI</span>dio</h1>
          </div>
          <theme-toggle></theme-toggle>
        </div>

        <!-- Hero Recording Section -->
        <div class="recording-section">
          ${this.isRecording?null:Kt`
                <div class="hero-text">
                  <div class="hero-title">Build Better Voice AI</div>
                  <div class="hero-subtitle">
                    Record, annotate, and export high-quality audio training data
                  </div>
                </div>
              `}

          <div class="action-buttons">
            <button
              class="record-btn ${this.isRecording?"recording":""}"
              @click=${this.isRecording?this.stopRecording:this.startRecording}
              ?disabled=${this.isRecording&&this.recordingDuration<.5}
            >
              ${te(this.isRecording?Jo:Go)}
              <span>${this.isRecording?"Stop Recording":"Record Audio"}</span>
            </button>

            ${this.isRecording?Kt`<div class="duration">${this.formatDuration(this.recordingDuration)}</div>`:Kt`
                  <button class="upload-btn" @click=${this.handleUpload}>
                    ${te(Qo)}
                    <span>Upload Files</span>
                  </button>
                `}
          </div>
        </div>

        <!-- Recordings Table -->
        <div class="recordings-header">
          <h2 class="section-title">Recordings (${this.recordings.length})</h2>
          ${this.recordings.some(r=>r.isAnnotated)?Kt`
                <button class="export-all-btn" @click=${this.handleExportAll}>
                  ${te(Xi)}
                  <span>Export All</span>
                </button>
              `:null}
        </div>

        <div class="recordings-table">
          ${this.recordings.length===0?Kt`
                <div class="empty-state">
                  <div class="empty-icon">${te(ns)}</div>
                  <div class="empty-title">No recordings yet</div>
                  <div class="empty-description">
                    Start recording or upload audio files to begin annotating your voice data
                  </div>
                </div>
              `:Kt`
                <table>
                  <thead>
                    <tr>
                      <th style="width: 40px;"></th>
                      <th>Title</th>
                      <th style="width: 100px;">Duration</th>
                      <th style="width: 100px;">Source</th>
                      <th style="width: 300px;">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${this.recordings.map(r=>Kt`
                        <tr>
                          <td>
                            ${r.isAnnotated?Kt`${te(pa)}`:""}
                          </td>
                          <td>
                            <div class="title-cell">
                              <input
                                class="title-input"
                                type="text"
                                .value=${r.title}
                                @change=${i=>this.handleTitleChange(r,i.target.value)}
                                placeholder="Enter title..."
                              />
                            </div>
                          </td>
                          <td>
                            <span class="duration-badge">
                              ${this.formatDuration(r.duration)}
                            </span>
                          </td>
                          <td>
                            <span class="duration-badge">
                              ${r.source==="recording"?"Recorded":"Uploaded"}
                            </span>
                          </td>
                          <td>
                            <div class="actions">
                              <button
                                class="action-btn"
                                @click=${()=>this.handlePlay(r)}
                                title="Play audio"
                              >
                                ${te(fa)}
                                <span>Play</span>
                              </button>

                              <button
                                class="action-btn"
                                @click=${()=>this.handleAnnotate(r)}
                                title="Annotate audio"
                              >
                                ${te(ts)}
                                <span>Annotate</span>
                              </button>

                              ${r.isAnnotated?Kt`
                                    <button
                                      class="action-btn"
                                      @click=${()=>this.handleExport(r)}
                                      title="Export annotation"
                                    >
                                      ${te(Xi)}
                                      <span>Export</span>
                                    </button>
                                  `:null}

                              <button
                                class="action-btn danger"
                                @click=${()=>this.handleDelete(r)}
                                title="Delete recording"
                              >
                                ${te(es)}
                                <span>Delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      `)}
                  </tbody>
                </table>
              `}
        </div>
      </div>

      <!-- Annotation Modal -->
      ${this.isModalOpen&&this.selectedRecording?Kt`
            <annotation-modal
              .recording=${this.selectedRecording}
              @close=${this.handleModalClose}
              @annotation-saved=${this.handleModalClose}
            ></annotation-modal>
          `:null}
    `}};Ue.styles=dn`
    :host {
      display: block;
      min-height: 100vh;
      background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
      position: relative;
      overflow-x: hidden;
    }

    /* Animated background pattern */
    :host::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:
        radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 40% 20%, rgba(57, 255, 20, 0.05) 0%, transparent 50%);
      animation: float 20s ease-in-out infinite;
      pointer-events: none;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -30px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }

    .container {
      max-width: 1600px;
      margin: 0 auto;
      padding: var(--spacing-6) var(--spacing-4);
      position: relative;
      z-index: 1;
    }

    /* Header with Logo */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-12);
      padding: var(--spacing-4) 0;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }

    .logo {
      display: flex;
      align-items: flex-end;
      gap: 2px;
      height: 40px;
    }

    .freq-bar {
      width: 4px;
      background: linear-gradient(180deg, #39ff14 0%, #7877c6 100%);
      border-radius: 2px;
      animation: pulse-bar 2s ease-in-out infinite;
      box-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
    }

    .freq-bar:nth-child(1) { height: 60%; animation-delay: 0s; }
    .freq-bar:nth-child(2) { height: 100%; animation-delay: 0.1s; }
    .freq-bar:nth-child(3) { height: 75%; animation-delay: 0.2s; }
    .freq-bar:nth-child(4) { height: 90%; animation-delay: 0.3s; }
    .freq-bar:nth-child(5) { height: 65%; animation-delay: 0.4s; }

    @keyframes pulse-bar {
      0%, 100% { opacity: 0.6; transform: scaleY(1); }
      50% { opacity: 1; transform: scaleY(0.8); }
    }

    .title {
      font-family: 'Outfit', var(--font-ui);
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, #39ff14 0%, #7877c6 50%, #ff6b6b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.02em;
      text-transform: lowercase;
    }

    .title .ai {
      font-weight: 900;
    }

    .tagline {
      font-family: var(--font-data);
      font-size: var(--text-sm);
      color: rgba(255, 255, 255, 0.5);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-top: var(--spacing-1);
    }

    /* Recording Section - Hero Style */
    .recording-section {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-6);
      align-items: center;
      justify-content: center;
      padding: var(--spacing-16) var(--spacing-8);
      margin-bottom: var(--spacing-12);
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(40px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: var(--radius-lg);
      position: relative;
      overflow: hidden;
    }

    .recording-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(57, 255, 20, 0.5), transparent);
    }

    .hero-text {
      text-align: center;
      margin-bottom: var(--spacing-4);
    }

    .hero-title {
      font-family: 'Outfit', var(--font-ui);
      font-size: 3rem;
      font-weight: 800;
      color: white;
      margin-bottom: var(--spacing-2);
      letter-spacing: -0.03em;
    }

    .hero-subtitle {
      font-family: var(--font-ui);
      font-size: var(--text-lg);
      color: rgba(255, 255, 255, 0.6);
      font-weight: 400;
    }

    .action-buttons {
      display: flex;
      gap: var(--spacing-4);
      align-items: center;
    }

    .record-btn,
    .upload-btn {
      padding: var(--spacing-5) var(--spacing-8);
      border-radius: 100px;
      border: none;
      font-family: 'Outfit', var(--font-ui);
      font-size: var(--text-lg);
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .record-btn {
      background: linear-gradient(135deg, #39ff14 0%, #00cc88 100%);
      color: #0a0a0f;
      box-shadow: 0 10px 40px rgba(57, 255, 20, 0.3), 0 0 0 0 rgba(57, 255, 20, 0.5);
    }

    .record-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #00cc88 0%, #39ff14 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .record-btn:hover::before {
      opacity: 1;
    }

    .record-btn:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 15px 60px rgba(57, 255, 20, 0.4), 0 0 0 8px rgba(57, 255, 20, 0.1);
    }

    .record-btn.recording {
      background: linear-gradient(135deg, #ff6b6b 0%, #ff4444 100%);
      animation: pulse-glow 2s ease-in-out infinite;
    }

    @keyframes pulse-glow {
      0%, 100% {
        box-shadow: 0 10px 40px rgba(255, 107, 107, 0.4), 0 0 0 0 rgba(255, 107, 107, 0.6);
      }
      50% {
        box-shadow: 0 15px 60px rgba(255, 107, 107, 0.6), 0 0 0 12px rgba(255, 107, 107, 0.2);
      }
    }

    .upload-btn {
      background: rgba(255, 255, 255, 0.05);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .upload-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 10px 40px rgba(255, 255, 255, 0.1);
    }

    .btn-icon {
      width: 24px;
      height: 24px;
      stroke: currentColor;
      fill: currentColor;
    }

    .duration {
      font-family: var(--font-data);
      font-size: var(--text-2xl);
      color: var(--text-secondary);
      font-variant-numeric: tabular-nums;
    }

    /* Recordings Table */
    .recordings-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-4);
    }

    .section-title {
      font-family: var(--font-ui);
      font-size: var(--text-xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
    }

    .export-all-btn {
      padding: var(--spacing-2) var(--spacing-4);
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      color: var(--text-primary);
      cursor: pointer;
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      transition: all var(--duration-fast) var(--ease-out);
    }

    .export-all-btn:hover {
      border-color: var(--accent-coral);
      transform: translateY(-1px);
    }

    .recordings-table {
      width: 100%;
      background: var(--glass-bg);
      backdrop-filter: blur(var(--glass-blur));
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      background: rgba(255, 255, 255, 0.02);
    }

    th {
      padding: var(--spacing-3) var(--spacing-4);
      text-align: left;
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 1px solid var(--glass-border);
    }

    td {
      padding: var(--spacing-3) var(--spacing-4);
      font-family: var(--font-ui);
      font-size: var(--text-base);
      color: var(--text-primary);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    tr:last-child td {
      border-bottom: none;
    }

    tbody tr {
      transition: background var(--duration-fast) var(--ease-out);
    }

    tbody tr:hover {
      background: rgba(255, 255, 255, 0.02);
    }

    .title-cell {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }

    .title-input {
      flex: 1;
      padding: var(--spacing-1) var(--spacing-2);
      background: transparent;
      border: 1px solid transparent;
      border-radius: var(--radius-sm);
      color: var(--text-primary);
      font-family: var(--font-ui);
      font-size: var(--text-base);
      transition: all var(--duration-fast) var(--ease-out);
    }

    .title-input:hover {
      border-color: var(--glass-border);
    }

    .title-input:focus {
      outline: none;
      border-color: var(--accent-coral);
      background: rgba(255, 255, 255, 0.05);
    }

    .status-icon {
      width: 20px;
      height: 20px;
      stroke: #39ff14;
      fill: none;
    }

    .duration-badge {
      font-family: var(--font-data);
      font-size: var(--text-sm);
      color: var(--text-secondary);
      font-variant-numeric: tabular-nums;
    }

    .actions {
      display: flex;
      gap: var(--spacing-2);
    }

    .action-btn {
      padding: var(--spacing-1) var(--spacing-2);
      background: transparent;
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-sm);
      color: var(--text-primary);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: var(--spacing-1);
      font-family: var(--font-ui);
      font-size: var(--text-xs);
      font-weight: var(--font-semibold);
      transition: all var(--duration-fast) var(--ease-out);
    }

    .action-btn:hover {
      border-color: var(--accent-coral);
      transform: translateY(-1px);
    }

    .action-btn svg {
      width: 14px;
      height: 14px;
      stroke: currentColor;
      fill: none;
    }

    .action-btn.danger:hover {
      background: rgba(255, 107, 107, 0.1);
      border-color: var(--accent-coral);
    }

    .empty-state {
      padding: var(--spacing-16) var(--spacing-8);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-4);
    }

    .empty-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(57, 255, 20, 0.1), rgba(120, 119, 198, 0.1));
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--spacing-4);
    }

    .empty-icon svg {
      width: 40px;
      height: 40px;
      stroke: rgba(57, 255, 20, 0.6);
      fill: none;
    }

    .empty-title {
      font-family: 'Outfit', var(--font-ui);
      font-size: var(--text-xl);
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: var(--spacing-2);
    }

    .empty-description {
      font-family: var(--font-ui);
      font-size: var(--text-base);
      color: rgba(255, 255, 255, 0.4);
      max-width: 400px;
    }
  `;pn([Ft()],Ue.prototype,"recordings",void 0);pn([Ft()],Ue.prototype,"isRecording",void 0);pn([Ft()],Ue.prototype,"recordingDuration",void 0);pn([Ft()],Ue.prototype,"selectedRecording",void 0);pn([Ft()],Ue.prototype,"isModalOpen",void 0);Ue=pn([fn("minimal-recorder")],Ue);const ma=$=>{document.body.setAttribute("data-theme",$)};ma(En.getCurrentTheme());En.subscribe($=>{ma($.currentTheme)});

(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function a(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function d(l){if(l.ep)return;l.ep=!0;const u=a(l);fetch(l.href,u)}})();const rr=globalThis,Zr=rr.ShadowRoot&&(rr.ShadyCSS===void 0||rr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vr=Symbol(),Ri=new WeakMap;let Gi=class{constructor(i,a,d){if(this._$cssResult$=!0,d!==Vr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=a}get styleSheet(){let i=this.o;const a=this.t;if(Zr&&i===void 0){const d=a!==void 0&&a.length===1;d&&(i=Ri.get(a)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),d&&Ri.set(a,i))}return i}toString(){return this.cssText}};const Ka=p=>new Gi(typeof p=="string"?p:p+"",void 0,Vr),dn=(p,...i)=>{const a=p.length===1?p[0]:i.reduce(((d,l,u)=>d+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+p[u+1]),p[0]);return new Gi(a,p,Vr)},qa=(p,i)=>{if(Zr)p.adoptedStyleSheets=i.map((a=>a instanceof CSSStyleSheet?a:a.styleSheet));else for(const a of i){const d=document.createElement("style"),l=rr.litNonce;l!==void 0&&d.setAttribute("nonce",l),d.textContent=a.cssText,p.appendChild(d)}},zi=Zr?p=>p:p=>p instanceof CSSStyleSheet?(i=>{let a="";for(const d of i.cssRules)a+=d.cssText;return Ka(a)})(p):p;const{is:Wa,defineProperty:Ha,getOwnPropertyDescriptor:Za,getOwnPropertyNames:Va,getOwnPropertySymbols:Ya,getPrototypeOf:Xa}=Object,hr=globalThis,Di=hr.trustedTypes,Ga=Di?Di.emptyScript:"",Ja=hr.reactiveElementPolyfillSupport,Sn=(p,i)=>p,sr={toAttribute(p,i){switch(i){case Boolean:p=p?Ga:null;break;case Object:case Array:p=p==null?p:JSON.stringify(p)}return p},fromAttribute(p,i){let a=p;switch(i){case Boolean:a=p!==null;break;case Number:a=p===null?null:Number(p);break;case Object:case Array:try{a=JSON.parse(p)}catch{a=null}}return a}},Yr=(p,i)=>!Wa(p,i),Ii={attribute:!0,type:String,converter:sr,reflect:!1,useDefault:!1,hasChanged:Yr};Symbol.metadata??=Symbol("metadata"),hr.litPropertyMetadata??=new WeakMap;let cn=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,a=Ii){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(i,a),!a.noAccessor){const d=Symbol(),l=this.getPropertyDescriptor(i,d,a);l!==void 0&&Ha(this.prototype,i,l)}}static getPropertyDescriptor(i,a,d){const{get:l,set:u}=Za(this.prototype,i)??{get(){return this[a]},set(h){this[a]=h}};return{get:l,set(h){const c=l?.call(this);u?.call(this,h),this.requestUpdate(i,c,d)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Ii}static _$Ei(){if(this.hasOwnProperty(Sn("elementProperties")))return;const i=Xa(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Sn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sn("properties"))){const a=this.properties,d=[...Va(a),...Ya(a)];for(const l of d)this.createProperty(l,a[l])}const i=this[Symbol.metadata];if(i!==null){const a=litPropertyMetadata.get(i);if(a!==void 0)for(const[d,l]of a)this.elementProperties.set(d,l)}this._$Eh=new Map;for(const[a,d]of this.elementProperties){const l=this._$Eu(a,d);l!==void 0&&this._$Eh.set(l,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const a=[];if(Array.isArray(i)){const d=new Set(i.flat(1/0).reverse());for(const l of d)a.unshift(zi(l))}else i!==void 0&&a.push(zi(i));return a}static _$Eu(i,a){const d=a.attribute;return d===!1?void 0:typeof d=="string"?d:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((i=>this.enableUpdating=i)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((i=>i(this)))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){const i=new Map,a=this.constructor.elementProperties;for(const d of a.keys())this.hasOwnProperty(d)&&(i.set(d,this[d]),delete this[d]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qa(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((i=>i.hostConnected?.()))}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach((i=>i.hostDisconnected?.()))}attributeChangedCallback(i,a,d){this._$AK(i,d)}_$ET(i,a){const d=this.constructor.elementProperties.get(i),l=this.constructor._$Eu(i,d);if(l!==void 0&&d.reflect===!0){const u=(d.converter?.toAttribute!==void 0?d.converter:sr).toAttribute(a,d.type);this._$Em=i,u==null?this.removeAttribute(l):this.setAttribute(l,u),this._$Em=null}}_$AK(i,a){const d=this.constructor,l=d._$Eh.get(i);if(l!==void 0&&this._$Em!==l){const u=d.getPropertyOptions(l),h=typeof u.converter=="function"?{fromAttribute:u.converter}:u.converter?.fromAttribute!==void 0?u.converter:sr;this._$Em=l;const c=h.fromAttribute(a,u.type);this[l]=c??this._$Ej?.get(l)??c,this._$Em=null}}requestUpdate(i,a,d){if(i!==void 0){const l=this.constructor,u=this[i];if(d??=l.getPropertyOptions(i),!((d.hasChanged??Yr)(u,a)||d.useDefault&&d.reflect&&u===this._$Ej?.get(i)&&!this.hasAttribute(l._$Eu(i,d))))return;this.C(i,a,d)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,a,{useDefault:d,reflect:l,wrapped:u},h){d&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,h??a??this[i]),u!==!0||h!==void 0)||(this._$AL.has(i)||(this.hasUpdated||d||(a=void 0),this._$AL.set(i,a)),l===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[l,u]of this._$Ep)this[l]=u;this._$Ep=void 0}const d=this.constructor.elementProperties;if(d.size>0)for(const[l,u]of d){const{wrapped:h}=u,c=this[l];h!==!0||this._$AL.has(l)||c===void 0||this.C(l,void 0,u,c)}}let i=!1;const a=this._$AL;try{i=this.shouldUpdate(a),i?(this.willUpdate(a),this._$EO?.forEach((d=>d.hostUpdate?.())),this.update(a)):this._$EM()}catch(d){throw i=!1,this._$EM(),d}i&&this._$AE(a)}willUpdate(i){}_$AE(i){this._$EO?.forEach((a=>a.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach((a=>this._$ET(a,this[a]))),this._$EM()}updated(i){}firstUpdated(i){}};cn.elementStyles=[],cn.shadowRootOptions={mode:"open"},cn[Sn("elementProperties")]=new Map,cn[Sn("finalized")]=new Map,Ja?.({ReactiveElement:cn}),(hr.reactiveElementVersions??=[]).push("2.1.1");const Xr=globalThis,lr=Xr.trustedTypes,Bi=lr?lr.createPolicy("lit-html",{createHTML:p=>p}):void 0,Ji="$lit$",Le=`lit$${Math.random().toFixed(9).slice(2)}$`,Qi="?"+Le,Qa=`<${Qi}>`,Ge=document,On=()=>Ge.createComment(""),Pn=p=>p===null||typeof p!="object"&&typeof p!="function",Gr=Array.isArray,to=p=>Gr(p)||typeof p?.[Symbol.iterator]=="function",Ur=`[ 	
\f\r]`,Cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mi=/-->/g,ji=/>/g,Ye=RegExp(`>|${Ur}(?:([^\\s"'>=/]+)(${Ur}*=${Ur}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fi=/'/g,Ni=/"/g,ta=/^(?:script|style|textarea|title)$/i,eo=p=>(i,...a)=>({_$litType$:p,strings:i,values:a}),Kt=eo(1),Je=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),Li=new WeakMap,Xe=Ge.createTreeWalker(Ge,129);function ea(p,i){if(!Gr(p)||!p.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bi!==void 0?Bi.createHTML(i):i}const no=(p,i)=>{const a=p.length-1,d=[];let l,u=i===2?"<svg>":i===3?"<math>":"",h=Cn;for(let c=0;c<a;c++){const g=p[c];let k,C,_=-1,E=0;for(;E<g.length&&(h.lastIndex=E,C=h.exec(g),C!==null);)E=h.lastIndex,h===Cn?C[1]==="!--"?h=Mi:C[1]!==void 0?h=ji:C[2]!==void 0?(ta.test(C[2])&&(l=RegExp("</"+C[2],"g")),h=Ye):C[3]!==void 0&&(h=Ye):h===Ye?C[0]===">"?(h=l??Cn,_=-1):C[1]===void 0?_=-2:(_=h.lastIndex-C[2].length,k=C[1],h=C[3]===void 0?Ye:C[3]==='"'?Ni:Fi):h===Ni||h===Fi?h=Ye:h===Mi||h===ji?h=Cn:(h=Ye,l=void 0);const v=h===Ye&&p[c+1].startsWith("/>")?" ":"";u+=h===Cn?g+Qa:_>=0?(d.push(k),g.slice(0,_)+Ji+g.slice(_)+Le+v):g+Le+(_===-2?c:v)}return[ea(p,u+(p[a]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),d]};class Tn{constructor({strings:i,_$litType$:a},d){let l;this.parts=[];let u=0,h=0;const c=i.length-1,g=this.parts,[k,C]=no(i,a);if(this.el=Tn.createElement(k,d),Xe.currentNode=this.el.content,a===2||a===3){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(l=Xe.nextNode())!==null&&g.length<c;){if(l.nodeType===1){if(l.hasAttributes())for(const _ of l.getAttributeNames())if(_.endsWith(Ji)){const E=C[h++],v=l.getAttribute(_).split(Le),A=/([.?@])?(.*)/.exec(E);g.push({type:1,index:u,name:A[2],strings:v,ctor:A[1]==="."?io:A[1]==="?"?ao:A[1]==="@"?oo:dr}),l.removeAttribute(_)}else _.startsWith(Le)&&(g.push({type:6,index:u}),l.removeAttribute(_));if(ta.test(l.tagName)){const _=l.textContent.split(Le),E=_.length-1;if(E>0){l.textContent=lr?lr.emptyScript:"";for(let v=0;v<E;v++)l.append(_[v],On()),Xe.nextNode(),g.push({type:2,index:++u});l.append(_[E],On())}}}else if(l.nodeType===8)if(l.data===Qi)g.push({type:2,index:u});else{let _=-1;for(;(_=l.data.indexOf(Le,_+1))!==-1;)g.push({type:7,index:u}),_+=Le.length-1}u++}}static createElement(i,a){const d=Ge.createElement("template");return d.innerHTML=i,d}}function hn(p,i,a=p,d){if(i===Je)return i;let l=d!==void 0?a._$Co?.[d]:a._$Cl;const u=Pn(i)?void 0:i._$litDirective$;return l?.constructor!==u&&(l?._$AO?.(!1),u===void 0?l=void 0:(l=new u(p),l._$AT(p,a,d)),d!==void 0?(a._$Co??=[])[d]=l:a._$Cl=l),l!==void 0&&(i=hn(p,l._$AS(p,i.values),l,d)),i}class ro{constructor(i,a){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:a},parts:d}=this._$AD,l=(i?.creationScope??Ge).importNode(a,!0);Xe.currentNode=l;let u=Xe.nextNode(),h=0,c=0,g=d[0];for(;g!==void 0;){if(h===g.index){let k;g.type===2?k=new Rn(u,u.nextSibling,this,i):g.type===1?k=new g.ctor(u,g.name,g.strings,this,i):g.type===6&&(k=new so(u,this,i)),this._$AV.push(k),g=d[++c]}h!==g?.index&&(u=Xe.nextNode(),h++)}return Xe.currentNode=Ge,l}p(i){let a=0;for(const d of this._$AV)d!==void 0&&(d.strings!==void 0?(d._$AI(i,d,a),a+=d.strings.length-2):d._$AI(i[a])),a++}}class Rn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,a,d,l){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=i,this._$AB=a,this._$AM=d,this.options=l,this._$Cv=l?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&i?.nodeType===11&&(i=a.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,a=this){i=hn(this,i,a),Pn(i)?i===te||i==null||i===""?(this._$AH!==te&&this._$AR(),this._$AH=te):i!==this._$AH&&i!==Je&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):to(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==te&&Pn(this._$AH)?this._$AA.nextSibling.data=i:this.T(Ge.createTextNode(i)),this._$AH=i}$(i){const{values:a,_$litType$:d}=i,l=typeof d=="number"?this._$AC(i):(d.el===void 0&&(d.el=Tn.createElement(ea(d.h,d.h[0]),this.options)),d);if(this._$AH?._$AD===l)this._$AH.p(a);else{const u=new ro(l,this),h=u.u(this.options);u.p(a),this.T(h),this._$AH=u}}_$AC(i){let a=Li.get(i.strings);return a===void 0&&Li.set(i.strings,a=new Tn(i)),a}k(i){Gr(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let d,l=0;for(const u of i)l===a.length?a.push(d=new Rn(this.O(On()),this.O(On()),this,this.options)):d=a[l],d._$AI(u),l++;l<a.length&&(this._$AR(d&&d._$AB.nextSibling,l),a.length=l)}_$AR(i=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);i!==this._$AB;){const d=i.nextSibling;i.remove(),i=d}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}}class dr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,a,d,l,u){this.type=1,this._$AH=te,this._$AN=void 0,this.element=i,this.name=a,this._$AM=l,this.options=u,d.length>2||d[0]!==""||d[1]!==""?(this._$AH=Array(d.length-1).fill(new String),this.strings=d):this._$AH=te}_$AI(i,a=this,d,l){const u=this.strings;let h=!1;if(u===void 0)i=hn(this,i,a,0),h=!Pn(i)||i!==this._$AH&&i!==Je,h&&(this._$AH=i);else{const c=i;let g,k;for(i=u[0],g=0;g<u.length-1;g++)k=hn(this,c[d+g],a,g),k===Je&&(k=this._$AH[g]),h||=!Pn(k)||k!==this._$AH[g],k===te?i=te:i!==te&&(i+=(k??"")+u[g+1]),this._$AH[g]=k}h&&!l&&this.j(i)}j(i){i===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}}class io extends dr{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===te?void 0:i}}class ao extends dr{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==te)}}class oo extends dr{constructor(i,a,d,l,u){super(i,a,d,l,u),this.type=5}_$AI(i,a=this){if((i=hn(this,i,a,0)??te)===Je)return;const d=this._$AH,l=i===te&&d!==te||i.capture!==d.capture||i.once!==d.once||i.passive!==d.passive,u=i!==te&&(d===te||l);l&&this.element.removeEventListener(this.name,this,d),u&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}}class so{constructor(i,a,d){this.element=i,this.type=6,this._$AN=void 0,this._$AM=a,this.options=d}get _$AU(){return this._$AM._$AU}_$AI(i){hn(this,i)}}const lo=Xr.litHtmlPolyfillSupport;lo?.(Tn,Rn),(Xr.litHtmlVersions??=[]).push("3.3.1");const uo=(p,i,a)=>{const d=a?.renderBefore??i;let l=d._$litPart$;if(l===void 0){const u=a?.renderBefore??null;d._$litPart$=l=new Rn(i.insertBefore(On(),u),u,void 0,a??{})}return l._$AI(p),l};const Jr=globalThis;let Se=class extends cn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=uo(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};Se._$litElement$=!0,Se.finalized=!0,Jr.litElementHydrateSupport?.({LitElement:Se});const co=Jr.litElementPolyfillSupport;co?.({LitElement:Se});(Jr.litElementVersions??=[]).push("4.2.1");const fn=p=>(i,a)=>{a!==void 0?a.addInitializer((()=>{customElements.define(p,i)})):customElements.define(p,i)};const ho={attribute:!0,type:String,converter:sr,reflect:!1,hasChanged:Yr},fo=(p=ho,i,a)=>{const{kind:d,metadata:l}=a;let u=globalThis.litPropertyMetadata.get(l);if(u===void 0&&globalThis.litPropertyMetadata.set(l,u=new Map),d==="setter"&&((p=Object.create(p)).wrapped=!0),u.set(a.name,p),d==="accessor"){const{name:h}=a;return{set(c){const g=i.get.call(this);i.set.call(this,c),this.requestUpdate(h,g,p)},init(c){return c!==void 0&&this.C(h,void 0,p,c),c}}}if(d==="setter"){const{name:h}=a;return function(c){const g=this[h];i.call(this,c),this.requestUpdate(h,g,p)}}throw Error("Unsupported decorator location: "+d)};function xe(p){return(i,a)=>typeof a=="object"?fo(p,i,a):((d,l,u)=>{const h=l.hasOwnProperty(u);return l.constructor.createProperty(u,d),h?Object.getOwnPropertyDescriptor(l,u):void 0})(p,i,a)}function Ut(p){return xe({...p,state:!0,attribute:!1})}const po=(p,i,a)=>(a.configurable=!0,a.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(p,i,a),a);function mo(p,i){return(a,d,l)=>{const u=h=>h.renderRoot?.querySelector(p)??null;return po(a,d,{get(){return u(this)}})}}const go={CHILD:2},vo=p=>(...i)=>({_$litDirective$:p,values:i});class yo{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,a,d){this._$Ct=i,this._$AM=a,this._$Ci=d}_$AS(i,a){return this.update(i,a)}update(i,a){return this.render(...a)}}class Wr extends yo{constructor(i){if(super(i),this.it=te,i.type!==go.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===te||i==null)return this._t=void 0,this.it=i;if(i===Je)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const a=[i];return a.raw=a,this._t={_$litType$:this.constructor.resultType,strings:a,values:[]}}}Wr.directiveName="unsafeHTML",Wr.resultType=1;const Jt=vo(Wr);class bo{constructor(){this.stream=null}async requestPermission(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("MediaDevices API not supported in this browser");try{return this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1,sampleRate:48e3,channelCount:1}}),this.stream}catch(i){throw i instanceof Error?new Error(`Microphone access denied: ${i.message}`):new Error("Microphone access denied")}}getStream(){return this.stream}release(){this.stream&&(this.stream.getTracks().forEach(i=>i.stop()),this.stream=null)}isActive(){return this.stream!==null&&this.stream.active}}class wo{constructor(){this.mediaRecorder=null,this.chunks=[]}async initialize(i){if(!window.MediaRecorder)throw new Error("MediaRecorder API not supported in this browser");const a=this.getSupportedMimeType();if(!a)throw new Error("No supported audio MIME type found");this.mediaRecorder=new MediaRecorder(i,{mimeType:a,audioBitsPerSecond:128e3}),this.mediaRecorder.ondataavailable=d=>{d.data.size>0&&(this.chunks.push(d.data),this.onDataAvailableCallback?.(d.data))},this.mediaRecorder.onstop=()=>{this.onStateChangeCallback?.("inactive")},this.mediaRecorder.onstart=()=>{this.onStateChangeCallback?.("recording")},this.mediaRecorder.onpause=()=>{this.onStateChangeCallback?.("paused")},this.mediaRecorder.onresume=()=>{this.onStateChangeCallback?.("recording")}}getSupportedMimeType(){return["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/mp4"].find(a=>MediaRecorder.isTypeSupported(a))||null}start(i=100){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");this.mediaRecorder.state!=="recording"&&(this.chunks=[],this.mediaRecorder.start(i))}async stop(){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");return this.mediaRecorder.state==="inactive"?new Blob(this.chunks,{type:this.mediaRecorder.mimeType}):new Promise(i=>{this.mediaRecorder.onstop=()=>{const a=new Blob(this.chunks,{type:this.mediaRecorder.mimeType});this.onStateChangeCallback?.("inactive"),i(a)},this.mediaRecorder.stop()})}pause(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.pause()}resume(){this.mediaRecorder?.state==="paused"&&this.mediaRecorder.resume()}getState(){return this.mediaRecorder?.state||"inactive"}getMimeType(){return this.mediaRecorder?.mimeType||""}onDataAvailable(i){this.onDataAvailableCallback=i}onStateChange(i){this.onStateChangeCallback=i}release(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.stop(),this.mediaRecorder=null,this.chunks=[]}}const _o="modulepreload",xo=function(p){return"/aidio/"+p},Ui={},ko=function(i,a,d){let l=Promise.resolve();if(a&&a.length>0){let k=function(C){return Promise.all(C.map(_=>Promise.resolve(_).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};var h=k;document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),g=c?.nonce||c?.getAttribute("nonce");l=k(a.map(C=>{if(C=xo(C),C in Ui)return;Ui[C]=!0;const _=C.endsWith(".css"),E=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${C}"]${E}`))return;const v=document.createElement("link");if(v.rel=_?"stylesheet":_o,_||(v.as="script"),v.crossOrigin="",v.href=C,g&&v.setAttribute("nonce",g),document.head.appendChild(v),_)return new Promise((A,y)=>{v.addEventListener("load",A),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${C}`)))})}))}function u(c){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=c,window.dispatchEvent(g),!g.defaultPrevented)throw c}return l.then(c=>{for(const g of c||[])g.status==="rejected"&&u(g.reason);return i().catch(u)})};var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function na(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var ir={exports:{}},Co=ir.exports,Ki;function So(){return Ki||(Ki=1,(function(p,i){(function(a,d){p.exports=d()})(Co,function(){var a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])})(t,e)},d=function(){return(d=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function l(t,e,n){for(var r,o=0,f=e.length;o<f;o++)!r&&o in e||((r=r||Array.prototype.slice.call(e,0,o))[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}var u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Te,h=Object.keys,c=Array.isArray;function g(t,e){return typeof e!="object"||h(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||u.Promise||(u.Promise=Promise);var k=Object.getPrototypeOf,C={}.hasOwnProperty;function _(t,e){return C.call(t,e)}function E(t,e){typeof e=="function"&&(e=e(k(t))),(typeof Reflect>"u"?h:Reflect.ownKeys)(e).forEach(function(n){A(t,n,e[n])})}var v=Object.defineProperty;function A(t,e,n,r){v(t,e,g(n&&_(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function y(t){return{from:function(e){return t.prototype=Object.create(e.prototype),A(t.prototype,"constructor",t),{extend:E.bind(null,t.prototype)}}}}var S=Object.getOwnPropertyDescriptor,w=[].slice;function T(t,e,n){return w.call(t,e,n)}function B(t,e){return e(t)}function q(t){if(!t)throw new Error("Assertion Failed")}function K(t){u.setImmediate?setImmediate(t):setTimeout(t,0)}function nt(t,e){if(typeof e=="string"&&_(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,o=e.length;r<o;++r){var f=nt(t,e[r]);n.push(f)}return n}var b=e.indexOf(".");if(b!==-1){var P=t[e.substr(0,b)];return P==null?void 0:nt(P,e.substr(b+1))}}function G(t,e,n){if(t&&e!==void 0&&!("isFrozen"in Object&&Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){q(typeof n!="string"&&"length"in n);for(var r=0,o=e.length;r<o;++r)G(t,e[r],n[r])}else{var f,b,P=e.indexOf(".");P!==-1?(f=e.substr(0,P),(b=e.substr(P+1))===""?n===void 0?c(t)&&!isNaN(parseInt(f))?t.splice(f,1):delete t[f]:t[f]=n:G(P=!(P=t[f])||!_(t,f)?t[f]={}:P,b,n)):n===void 0?c(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function ut(t){var e,n={};for(e in t)_(t,e)&&(n[e]=t[e]);return n}var tt=[].concat;function pt(t){return tt.apply([],t)}var At="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(pt([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(t){return u[t]}),Pt=new Set(At.map(function(t){return u[t]})),R=null;function Q(t){return R=new WeakMap,t=(function e(n){if(!n||typeof n!="object")return n;var r=R.get(n);if(r)return r;if(c(n)){r=[],R.set(n,r);for(var o=0,f=n.length;o<f;++o)r.push(e(n[o]))}else if(Pt.has(n.constructor))r=n;else{var b,P=k(n);for(b in r=P===Object.prototype?{}:Object.create(P),R.set(n,r),n)_(n,b)&&(r[b]=e(n[b]))}return r})(t),R=null,t}var m={}.toString;function it(t){return m.call(t).slice(8,-1)}var Tt=typeof Symbol<"u"?Symbol.iterator:"@@iterator",lt=typeof Tt=="symbol"?function(t){var e;return t!=null&&(e=t[Tt])&&e.apply(t)}:function(){return null};function $t(t,e){return e=t.indexOf(e),0<=e&&t.splice(e,1),0<=e}var st={};function Ot(t){var e,n,r,o;if(arguments.length===1){if(c(t))return t.slice();if(this===st&&typeof t=="string")return[t];if(o=lt(t)){for(n=[];!(r=o.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)!="number")return[t];for(n=new Array(e);e--;)n[e]=t[e];return n}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}var Y=typeof Symbol<"u"?function(t){return t[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},dt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ye=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(dt),V={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Et(t,e){this.name=t,this.message=e}function xt(t,e){return t+". Errors: "+Object.keys(e).map(function(n){return e[n].toString()}).filter(function(n,r,o){return o.indexOf(n)===r}).join(`
`)}function vt(t,e,n,r){this.failures=e,this.failedKeys=r,this.successCount=n,this.message=xt(t,e)}function qt(t,e){this.name="BulkError",this.failures=Object.keys(e).map(function(n){return e[n]}),this.failuresByPos=e,this.message=xt(t,this.failures)}y(Et).from(Error).extend({toString:function(){return this.name+": "+this.message}}),y(vt).from(Et),y(qt).from(Et);var Qt=ye.reduce(function(t,e){return t[e]=e+"Error",t},{}),jt=Et,mt=ye.reduce(function(t,e){var n=e+"Error";function r(o,f){this.name=n,o?typeof o=="string"?(this.message="".concat(o).concat(f?`
 `+f:""),this.inner=f||null):typeof o=="object"&&(this.message="".concat(o.name," ").concat(o.message),this.inner=o):(this.message=V[e]||n,this.inner=null)}return y(r).from(jt),t[e]=r,t},{});mt.Syntax=SyntaxError,mt.Type=TypeError,mt.Range=RangeError;var Yt=dt.reduce(function(t,e){return t[e+"Error"]=mt[e],t},{}),Wt=ye.reduce(function(t,e){return["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=mt[e]),t},{});function It(){}function ie(t){return t}function s(t,e){return t==null||t===ie?e:function(n){return e(t(n))}}function et(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function X(t,e){return t===It?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,o=this.onerror;this.onsuccess=null,this.onerror=null;var f=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?et(r,this.onsuccess):r),o&&(this.onerror=this.onerror?et(o,this.onerror):o),f!==void 0?f:n}}function O(t,e){return t===It?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?et(n,this.onsuccess):n),r&&(this.onerror=this.onerror?et(r,this.onerror):r)}}function x(t,e){return t===It?e:function(n){var r=t.apply(this,arguments);g(n,r);var o=this.onsuccess,f=this.onerror;return this.onsuccess=null,this.onerror=null,n=e.apply(this,arguments),o&&(this.onsuccess=this.onsuccess?et(o,this.onsuccess):o),f&&(this.onerror=this.onerror?et(f,this.onerror):f),r===void 0?n===void 0?void 0:n:g(r,n)}}function N(t,e){return t===It?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ot(t,e){return t===It?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,o=arguments.length,f=new Array(o);o--;)f[o]=arguments[o];return n.then(function(){return e.apply(r,f)})}return e.apply(this,arguments)}}Wt.ModifyError=vt,Wt.DexieError=Et,Wt.BulkError=qt;var at=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function H(t){at=t}var ct={},kt=100,At=typeof Promise>"u"?[]:(function(){var t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,k(t),t];var e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,k(e),t]})(),dt=At[0],ye=At[1],At=At[2],ye=ye&&ye.then,Nt=dt&&dt.constructor,Bt=!!At,ee=function(t,e){Re.push([t,e]),ue&&(queueMicrotask(ba),ue=!1)},Ae=!0,ue=!0,pe=[],Ht=[],$e=ie,ve={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:It,pgp:!1,env:{},finalize:It},Ct=ve,Re=[],Ee=0,Qe=[];function _t(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var e=this._PSD=Ct;if(typeof t!="function"){if(t!==ct)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&De(this,this._value))}this._state=null,this._value=null,++e.ref,(function n(r,o){try{o(function(f){if(r._state===null){if(f===r)throw new TypeError("A promise cannot be resolved with itself.");var b=r._lib&&en();f&&typeof f.then=="function"?n(r,function(P,z){f instanceof _t?f._then(P,z):f.then(P,z)}):(r._state=!0,r._value=f,ti(r)),b&&nn()}},De.bind(null,r))}catch(f){De(r,f)}})(this,t)}var tn={get:function(){var t=Ct,e=Bn;function n(r,o){var f=this,b=!t.global&&(t!==Ct||e!==Bn),P=b&&!Be(),z=new _t(function(D,F){fr(f,new ze(ni(r,t,b,P),ni(o,t,b,P),D,F,t))});return this._consoleTask&&(z._consoleTask=this._consoleTask),z}return n.prototype=ct,n},set:function(t){A(this,"then",t&&t.prototype===ct?tn:{get:function(){return t},set:tn.set})}};function ze(t,e,n,r,o){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=o}function De(t,e){var n,r;Ht.push(e),t._state===null&&(n=t._lib&&en(),e=$e(e),t._state=!1,t._value=e,r=t,pe.some(function(o){return o._value===r._value})||pe.push(r),ti(t),n&&nn())}function ti(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)fr(t,e[n]);var o=t._PSD;--o.ref||o.finalize(),Ee===0&&(++Ee,ee(function(){--Ee==0&&pr()},[]))}function fr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ee,ee(ya,[n,t,e])}else t._listeners.push(e)}function ya(t,e,n){try{var r,o=e._value;!e._state&&Ht.length&&(Ht=[]),r=at&&e._consoleTask?e._consoleTask.run(function(){return t(o)}):t(o),e._state||Ht.indexOf(o)!==-1||(function(f){for(var b=pe.length;b;)if(pe[--b]._value===f._value)return pe.splice(b,1)})(e),n.resolve(r)}catch(f){n.reject(f)}finally{--Ee==0&&pr(),--n.psd.ref||n.psd.finalize()}}function ba(){Ke(ve,function(){en()&&nn()})}function en(){var t=Ae;return ue=Ae=!1,t}function nn(){var t,e,n;do for(;0<Re.length;)for(t=Re,Re=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(0<Re.length);ue=Ae=!0}function pr(){var t=pe;pe=[],t.forEach(function(r){r._PSD.onunhandled.call(null,r._value,r)});for(var e=Qe.slice(0),n=e.length;n;)e[--n]()}function zn(t){return new _t(ct,!1,t)}function Vt(t,e){var n=Ct;return function(){var r=en(),o=Ct;try{return Me(n,!0),t.apply(this,arguments)}catch(f){e&&e(f)}finally{Me(o,!1),r&&nn()}}}E(_t.prototype,{then:tn,_then:function(t,e){fr(this,new ze(null,null,t,e,Ct))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=t,n=arguments[1];return typeof e=="function"?this.then(null,function(r){return(r instanceof e?n:zn)(r)}):this.then(null,function(r){return(r&&r.name===e?n:zn)(r)})},finally:function(t){return this.then(function(e){return _t.resolve(t()).then(function(){return e})},function(e){return _t.resolve(t()).then(function(){return zn(e)})})},timeout:function(t,e){var n=this;return t<1/0?new _t(function(r,o){var f=setTimeout(function(){return o(new mt.Timeout(e))},t);n.then(r,o).finally(clearTimeout.bind(null,f))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&A(_t.prototype,Symbol.toStringTag,"Dexie.Promise"),ve.env=ei(),E(_t,{all:function(){var t=Ot.apply(null,arguments).map(Mn);return new _t(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach(function(o,f){return _t.resolve(o).then(function(b){t[f]=b,--r||e(t)},n)})})},resolve:function(t){return t instanceof _t?t:t&&typeof t.then=="function"?new _t(function(e,n){t.then(e,n)}):new _t(ct,!0,t)},reject:zn,race:function(){var t=Ot.apply(null,arguments).map(Mn);return new _t(function(e,n){t.map(function(r){return _t.resolve(r).then(e,n)})})},PSD:{get:function(){return Ct},set:function(t){return Ct=t}},totalEchoes:{get:function(){return Bn}},newPSD:Ie,usePSD:Ke,scheduler:{get:function(){return ee},set:function(t){ee=t}},rejectionMapper:{get:function(){return $e},set:function(t){$e=t}},follow:function(t,e){return new _t(function(n,r){return Ie(function(o,f){var b=Ct;b.unhandleds=[],b.onunhandled=f,b.finalize=et(function(){var P,z=this;P=function(){z.unhandleds.length===0?o():f(z.unhandleds[0])},Qe.push(function D(){P(),Qe.splice(Qe.indexOf(D),1)}),++Ee,ee(function(){--Ee==0&&pr()},[])},b.finalize),t()},e,n,r)})}}),Nt&&(Nt.allSettled&&A(_t,"allSettled",function(){var t=Ot.apply(null,arguments).map(Mn);return new _t(function(e){t.length===0&&e([]);var n=t.length,r=new Array(n);t.forEach(function(o,f){return _t.resolve(o).then(function(b){return r[f]={status:"fulfilled",value:b}},function(b){return r[f]={status:"rejected",reason:b}}).then(function(){return--n||e(r)})})})}),Nt.any&&typeof AggregateError<"u"&&A(_t,"any",function(){var t=Ot.apply(null,arguments).map(Mn);return new _t(function(e,n){t.length===0&&n(new AggregateError([]));var r=t.length,o=new Array(r);t.forEach(function(f,b){return _t.resolve(f).then(function(P){return e(P)},function(P){o[b]=P,--r||n(new AggregateError(o))})})})}),Nt.withResolvers&&(_t.withResolvers=Nt.withResolvers));var ne={awaits:0,echoes:0,id:0},wa=0,Dn=[],In=0,Bn=0,_a=0;function Ie(t,e,n,r){var o=Ct,f=Object.create(o);return f.parent=o,f.ref=0,f.global=!1,f.id=++_a,ve.env,f.env=Bt?{Promise:_t,PromiseProp:{value:_t,configurable:!0,writable:!0},all:_t.all,race:_t.race,allSettled:_t.allSettled,any:_t.any,resolve:_t.resolve,reject:_t.reject}:{},e&&g(f,e),++o.ref,f.finalize=function(){--this.parent.ref||this.parent.finalize()},r=Ke(f,t,n,r),f.ref===0&&f.finalize(),r}function rn(){return ne.id||(ne.id=++wa),++ne.awaits,ne.echoes+=kt,ne.id}function Be(){return!!ne.awaits&&(--ne.awaits==0&&(ne.id=0),ne.echoes=ne.awaits*kt,!0)}function Mn(t){return ne.echoes&&t&&t.constructor===Nt?(rn(),t.then(function(e){return Be(),e},function(e){return Be(),Xt(e)})):t}function xa(){var t=Dn[Dn.length-1];Dn.pop(),Me(t,!1)}function Me(t,e){var n,r=Ct;(e?!ne.echoes||In++&&t===Ct:!In||--In&&t===Ct)||queueMicrotask(e?function(o){++Bn,ne.echoes&&--ne.echoes!=0||(ne.echoes=ne.awaits=ne.id=0),Dn.push(Ct),Me(o,!0)}.bind(null,t):xa),t!==Ct&&(Ct=t,r===ve&&(ve.env=ei()),Bt&&(n=ve.env.Promise,e=t.env,(r.global||t.global)&&(Object.defineProperty(u,"Promise",e.PromiseProp),n.all=e.all,n.race=e.race,n.resolve=e.resolve,n.reject=e.reject,e.allSettled&&(n.allSettled=e.allSettled),e.any&&(n.any=e.any))))}function ei(){var t=u.Promise;return Bt?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(u,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject}:{}}function Ke(t,e,n,r,o){var f=Ct;try{return Me(t,!0),e(n,r,o)}finally{Me(f,!1)}}function ni(t,e,n,r){return typeof t!="function"?t:function(){var o=Ct;n&&rn(),Me(e,!0);try{return t.apply(this,arguments)}finally{Me(o,!1),r&&queueMicrotask(Be)}}}function mr(t){Promise===Nt&&ne.echoes===0?In===0?t():enqueueNativeMicroTask(t):setTimeout(t,0)}(""+ye).indexOf("[native code]")===-1&&(rn=Be=It);var Xt=_t.reject,qe="￿",Oe="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ri="String expected.",an=[],jn="__dbnames",gr="readonly",vr="readwrite";function We(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}var ii={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Fn(t){return typeof t!="string"||/\./.test(t)?function(e){return e}:function(e){return e[t]===void 0&&t in e&&delete(e=Q(e))[t],e}}function ai(){throw mt.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Ft(t,e){try{var n=oi(t),r=oi(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return e<t?1:t<e?-1:0;case"binary":return(function(o,f){for(var b=o.length,P=f.length,z=b<P?b:P,D=0;D<z;++D)if(o[D]!==f[D])return o[D]<f[D]?-1:1;return b===P?0:b<P?-1:1})(si(t),si(e));case"Array":return(function(o,f){for(var b=o.length,P=f.length,z=b<P?b:P,D=0;D<z;++D){var F=Ft(o[D],f[D]);if(F!==0)return F}return b===P?0:b<P?-1:1})(t,e)}}catch{}return NaN}function oi(t){var e=typeof t;return e!="object"?e:ArrayBuffer.isView(t)?"binary":(t=it(t),t==="ArrayBuffer"?"binary":t)}function si(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function Nn(t,e,n){var r=t.schema.yProps;return r?(e&&0<n.numFailures&&(e=e.filter(function(o,f){return!n.failures[f]})),Promise.all(r.map(function(o){return o=o.updatesTable,e?t.db.table(o).where("k").anyOf(e).delete():t.db.table(o).clear()})).then(function(){return n})):n}var mn=(li.prototype.execute=function(t){var e=this["@@propmod"];if(e.add!==void 0){var n=e.add;if(c(n))return l(l([],c(t)?t:[],!0),n).sort();if(typeof n=="number")return(Number(t)||0)+n;if(typeof n=="bigint")try{return BigInt(t)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(e.remove!==void 0){var r=e.remove;if(c(r))return c(t)?t.filter(function(o){return!r.includes(o)}).sort():[];if(typeof r=="number")return Number(t)-r;if(typeof r=="bigint")try{return BigInt(t)-r}catch{return BigInt(0)-r}throw new TypeError("Invalid subtrahend ".concat(r))}return n=(n=e.replacePrefix)===null||n===void 0?void 0:n[0],n&&typeof t=="string"&&t.startsWith(n)?e.replacePrefix[1]+t.substring(n.length):t},li);function li(t){this["@@propmod"]=t}function ui(t,e){for(var n=h(e),r=n.length,o=!1,f=0;f<r;++f){var b=n[f],P=e[b],z=nt(t,b);P instanceof mn?(G(t,b,P.execute(z)),o=!0):z!==P&&(G(t,b,P),o=!0)}return o}var ci=(Zt.prototype._trans=function(t,e,n){var r=this._tx||Ct.trans,o=this.name,f=at&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function b(D,F,$){if(!$.schema[o])throw new mt.NotFound("Table "+o+" not part of transaction");return e($.idbtrans,$)}var P=en();try{var z=r&&r.db._novip===this.db._novip?r===Ct.trans?r._promise(t,b,n):Ie(function(){return r._promise(t,b,n)},{trans:r,transless:Ct.transless||Ct}):(function D(F,$,U,I){if(F.idbdb&&(F._state.openComplete||Ct.letThrough||F._vip)){var M=F._createTransaction($,U,F._dbSchema);try{M.create(),F._state.PR1398_maxLoop=3}catch(j){return j.name===Qt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return D(F,$,U,I)})):Xt(j)}return M._promise($,function(j,L){return Ie(function(){return Ct.trans=M,I(j,L,M)})}).then(function(j){if($==="readwrite")try{M.idbtrans.commit()}catch{}return $==="readonly"?j:M._completion.then(function(){return j})})}if(F._state.openComplete)return Xt(new mt.DatabaseClosed(F._state.dbOpenError));if(!F._state.isBeingOpened){if(!F._state.autoOpen)return Xt(new mt.DatabaseClosed);F.open().catch(It)}return F._state.dbReadyPromise.then(function(){return D(F,$,U,I)})})(this.db,t,[this.name],b);return f&&(z._consoleTask=f,z=z.catch(function(D){return console.trace(D),Xt(D)})),z}finally{P&&nn()}},Zt.prototype.get=function(t,e){var n=this;return t&&t.constructor===Object?this.where(t).first(e):t==null?Xt(new mt.Type("Invalid argument to Table.get()")):this._trans("readonly",function(r){return n.core.get({trans:r,key:t}).then(function(o){return n.hook.reading.fire(o)})}).then(e)},Zt.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(c(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var e=h(t);if(e.length===1)return this.where(e[0]).equals(t[e[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(P){if(P.compound&&e.every(function(D){return 0<=P.keyPath.indexOf(D)})){for(var z=0;z<e.length;++z)if(e.indexOf(P.keyPath[z])===-1)return!1;return!0}return!1}).sort(function(P,z){return P.keyPath.length-z.keyPath.length})[0];if(n&&this.db._maxKey!==qe){var f=n.keyPath.slice(0,e.length);return this.where(f).equals(f.map(function(z){return t[z]}))}!n&&at&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(e.join("+"),"]"));var r=this.schema.idxByName;function o(P,z){return Ft(P,z)===0}var b=e.reduce(function($,z){var D=$[0],F=$[1],$=r[z],U=t[z];return[D||$,D||!$?We(F,$&&$.multi?function(I){return I=nt(I,z),c(I)&&I.some(function(M){return o(U,M)})}:function(I){return o(U,nt(I,z))}):F]},[null,null]),f=b[0],b=b[1];return f?this.where(f.name).equals(t[f.keyPath]).filter(b):n?this.filter(b):this.where(e).equals("")},Zt.prototype.filter=function(t){return this.toCollection().and(t)},Zt.prototype.count=function(t){return this.toCollection().count(t)},Zt.prototype.offset=function(t){return this.toCollection().offset(t)},Zt.prototype.limit=function(t){return this.toCollection().limit(t)},Zt.prototype.each=function(t){return this.toCollection().each(t)},Zt.prototype.toArray=function(t){return this.toCollection().toArray(t)},Zt.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Zt.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,c(t)?"[".concat(t.join("+"),"]"):t))},Zt.prototype.reverse=function(){return this.toCollection().reverse()},Zt.prototype.mapToClass=function(t){var e,n=this.db,r=this.name;function o(){return e!==null&&e.apply(this,arguments)||this}(this.schema.mappedClass=t).prototype instanceof ai&&((function(z,D){if(typeof D!="function"&&D!==null)throw new TypeError("Class extends value "+String(D)+" is not a constructor or null");function F(){this.constructor=z}a(z,D),z.prototype=D===null?Object.create(D):(F.prototype=D.prototype,new F)})(o,e=t),Object.defineProperty(o.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),o.prototype.table=function(){return r},t=o);for(var f=new Set,b=t.prototype;b;b=k(b))Object.getOwnPropertyNames(b).forEach(function(z){return f.add(z)});function P(z){if(!z)return z;var D,F=Object.create(t.prototype);for(D in z)if(!f.has(D))try{F[D]=z[D]}catch{}return F}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=P,this.hook("reading",P),t},Zt.prototype.defineClass=function(){return this.mapToClass(function(t){g(this,t)})},Zt.prototype.add=function(t,e){var n=this,r=this.schema.primKey,o=r.auto,f=r.keyPath,b=t;return f&&o&&(b=Fn(f)(t)),this._trans("readwrite",function(P){return n.core.mutate({trans:P,type:"add",keys:e!=null?[e]:null,values:[b]})}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):P.lastResult}).then(function(P){if(f)try{G(t,f,P)}catch{}return P})},Zt.prototype.upsert=function(t,e){var n=this,r=this.schema.primKey.keyPath;return this._trans("readwrite",function(o){return n.core.get({trans:o,key:t}).then(function(f){var b=f??{};return ui(b,e),r&&G(b,r,t),n.core.mutate({trans:o,type:"put",values:[b],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[e]}}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):!!f})})})},Zt.prototype.update=function(t,e){return typeof t!="object"||c(t)?this.where(":id").equals(t).modify(e):(t=nt(t,this.schema.primKey.keyPath),t===void 0?Xt(new mt.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(t).modify(e))},Zt.prototype.put=function(t,e){var n=this,r=this.schema.primKey,o=r.auto,f=r.keyPath,b=t;return f&&o&&(b=Fn(f)(t)),this._trans("readwrite",function(P){return n.core.mutate({trans:P,type:"put",values:[b],keys:e!=null?[e]:null})}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):P.lastResult}).then(function(P){if(f)try{G(t,f,P)}catch{}return P})},Zt.prototype.delete=function(t){var e=this;return this._trans("readwrite",function(n){return e.core.mutate({trans:n,type:"delete",keys:[t]}).then(function(r){return Nn(e,[t],r)}).then(function(r){return r.numFailures?_t.reject(r.failures[0]):void 0})})},Zt.prototype.clear=function(){var t=this;return this._trans("readwrite",function(e){return t.core.mutate({trans:e,type:"deleteRange",range:ii}).then(function(n){return Nn(t,null,n)})}).then(function(e){return e.numFailures?_t.reject(e.failures[0]):void 0})},Zt.prototype.bulkGet=function(t){var e=this;return this._trans("readonly",function(n){return e.core.getMany({keys:t,trans:n}).then(function(r){return r.map(function(o){return e.hook.reading.fire(o)})})})},Zt.prototype.bulkAdd=function(t,e,n){var r=this,o=Array.isArray(e)?e:void 0,f=(n=n||(o?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(b){var D=r.schema.primKey,P=D.auto,D=D.keyPath;if(D&&o)throw new mt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(o&&o.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var z=t.length,D=D&&P?t.map(Fn(D)):t;return r.core.mutate({trans:b,type:"add",keys:o,values:D,wantResults:f}).then(function(M){var $=M.numFailures,U=M.results,I=M.lastResult,M=M.failures;if($===0)return f?U:I;throw new qt("".concat(r.name,".bulkAdd(): ").concat($," of ").concat(z," operations failed"),M)})})},Zt.prototype.bulkPut=function(t,e,n){var r=this,o=Array.isArray(e)?e:void 0,f=(n=n||(o?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(b){var D=r.schema.primKey,P=D.auto,D=D.keyPath;if(D&&o)throw new mt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(o&&o.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var z=t.length,D=D&&P?t.map(Fn(D)):t;return r.core.mutate({trans:b,type:"put",keys:o,values:D,wantResults:f}).then(function(M){var $=M.numFailures,U=M.results,I=M.lastResult,M=M.failures;if($===0)return f?U:I;throw new qt("".concat(r.name,".bulkPut(): ").concat($," of ").concat(z," operations failed"),M)})})},Zt.prototype.bulkUpdate=function(t){var e=this,n=this.core,r=t.map(function(b){return b.key}),o=t.map(function(b){return b.changes}),f=[];return this._trans("readwrite",function(b){return n.getMany({trans:b,keys:r,cache:"clone"}).then(function(P){var z=[],D=[];t.forEach(function($,U){var I=$.key,M=$.changes,j=P[U];if(j){for(var L=0,W=Object.keys(M);L<W.length;L++){var Z=W[L],J=M[Z];if(Z===e.schema.primKey.keyPath){if(Ft(J,I)!==0)throw new mt.Constraint("Cannot update primary key in bulkUpdate()")}else G(j,Z,J)}f.push(U),z.push(I),D.push(j)}});var F=z.length;return n.mutate({trans:b,type:"put",keys:z,values:D,updates:{keys:r,changeSpecs:o}}).then(function($){var U=$.numFailures,I=$.failures;if(U===0)return F;for(var M=0,j=Object.keys(I);M<j.length;M++){var L,W=j[M],Z=f[Number(W)];Z!=null&&(L=I[W],delete I[W],I[Z]=L)}throw new qt("".concat(e.name,".bulkUpdate(): ").concat(U," of ").concat(F," operations failed"),I)})})})},Zt.prototype.bulkDelete=function(t){var e=this,n=t.length;return this._trans("readwrite",function(r){return e.core.mutate({trans:r,type:"delete",keys:t}).then(function(o){return Nn(e,t,o)})}).then(function(b){var o=b.numFailures,f=b.lastResult,b=b.failures;if(o===0)return f;throw new qt("".concat(e.name,".bulkDelete(): ").concat(o," of ").concat(n," operations failed"),b)})},Zt);function Zt(){}function gn(t){function e(b,P){if(P){for(var z=arguments.length,D=new Array(z-1);--z;)D[z-1]=arguments[z];return n[b].subscribe.apply(null,D),t}if(typeof b=="string")return n[b]}var n={};e.addEventType=f;for(var r=1,o=arguments.length;r<o;++r)f(arguments[r]);return e;function f(b,P,z){if(typeof b!="object"){var D;P=P||N;var F={subscribers:[],fire:z=z||It,subscribe:function($){F.subscribers.indexOf($)===-1&&(F.subscribers.push($),F.fire=P(F.fire,$))},unsubscribe:function($){F.subscribers=F.subscribers.filter(function(U){return U!==$}),F.fire=F.subscribers.reduce(P,z)}};return n[b]=e[b]=F}h(D=b).forEach(function($){var U=D[$];if(c(U))f($,D[$][0],D[$][1]);else{if(U!=="asap")throw new mt.InvalidArgument("Invalid event config");var I=f($,ie,function(){for(var M=arguments.length,j=new Array(M);M--;)j[M]=arguments[M];I.subscribers.forEach(function(L){K(function(){L.apply(null,j)})})})}})}}function vn(t,e){return y(e).from({prototype:t}),e}function on(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function yr(t,e){t.filter=We(t.filter,e)}function br(t,e,n){var r=t.replayFilter;t.replayFilter=r?function(){return We(r(),e())}:e,t.justLimit=n&&!r}function Ln(t,e){if(t.isPrimKey)return e.primaryKey;var n=e.getIndexByKeyPath(t.index);if(!n)throw new mt.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function hi(t,e,n){var r=Ln(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Un(t,e,n,r){var o=t.replayFilter?We(t.filter,t.replayFilter()):t.filter;if(t.or){var f={},b=function(P,z,D){var F,$;o&&!o(z,D,function(U){return z.stop(U)},function(U){return z.fail(U)})||(($=""+(F=z.primaryKey))=="[object ArrayBuffer]"&&($=""+new Uint8Array(F)),_(f,$)||(f[$]=!0,e(P,z,D)))};return Promise.all([t.or._iterate(b,n),di(hi(t,r,n),t.algorithm,b,!t.keysOnly&&t.valueMapper)])}return di(hi(t,r,n),We(t.algorithm,o),e,!t.keysOnly&&t.valueMapper)}function di(t,e,n,r){var o=Vt(r?function(f,b,P){return n(r(f),b,P)}:n);return t.then(function(f){if(f)return f.start(function(){var b=function(){return f.continue()};e&&!e(f,function(P){return b=P},function(P){f.stop(P),b=It},function(P){f.fail(P),b=It})||o(f.value,f,function(P){return b=P}),b()})})}var ka=(Lt.prototype._read=function(t,e){var n=this._ctx;return n.error?n.table._trans(null,Xt.bind(null,n.error)):n.table._trans("readonly",t).then(e)},Lt.prototype._write=function(t){var e=this._ctx;return e.error?e.table._trans(null,Xt.bind(null,e.error)):e.table._trans("readwrite",t,"locked")},Lt.prototype._addAlgorithm=function(t){var e=this._ctx;e.algorithm=We(e.algorithm,t)},Lt.prototype._iterate=function(t,e){return Un(this._ctx,t,e,this._ctx.table.core)},Lt.prototype.clone=function(t){var e=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return t&&g(n,t),e._ctx=n,e},Lt.prototype.raw=function(){return this._ctx.valueMapper=null,this},Lt.prototype.each=function(t){var e=this._ctx;return this._read(function(n){return Un(e,t,n,e.table.core)})},Lt.prototype.count=function(t){var e=this;return this._read(function(n){var r=e._ctx,o=r.table.core;if(on(r,!0))return o.count({trans:n,query:{index:Ln(r,o.schema),range:r.range}}).then(function(b){return Math.min(b,r.limit)});var f=0;return Un(r,function(){return++f,!1},n,o).then(function(){return f})}).then(t)},Lt.prototype.sortBy=function(t,e){var n=t.split(".").reverse(),r=n[0],o=n.length-1;function f(z,D){return D?f(z[n[D]],D-1):z[r]}var b=this._ctx.dir==="next"?1:-1;function P(z,D){return Ft(f(z,o),f(D,o))*b}return this.toArray(function(z){return z.sort(P)}).then(e)},Lt.prototype.toArray=function(t){var e=this;return this._read(function(n){var r=e._ctx;if(r.dir==="next"&&on(r,!0)&&0<r.limit){var o=r.valueMapper,f=Ln(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:f,range:r.range}}).then(function(P){return P=P.result,o?P.map(o):P})}var b=[];return Un(r,function(P){return b.push(P)},n,r.table.core).then(function(){return b})},t)},Lt.prototype.offset=function(t){var e=this._ctx;return t<=0||(e.offset+=t,on(e)?br(e,function(){var n=t;return function(r,o){return n===0||(n===1?--n:o(function(){r.advance(n),n=0}),!1)}}):br(e,function(){var n=t;return function(){return--n<0}})),this},Lt.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),br(this._ctx,function(){var e=t;return function(n,r,o){return--e<=0&&r(o),0<=e}},!0),this},Lt.prototype.until=function(t,e){return yr(this._ctx,function(n,r,o){return!t(n.value)||(r(o),e)}),this},Lt.prototype.first=function(t){return this.limit(1).toArray(function(e){return e[0]}).then(t)},Lt.prototype.last=function(t){return this.reverse().first(t)},Lt.prototype.filter=function(t){var e;return yr(this._ctx,function(n){return t(n.value)}),(e=this._ctx).isMatch=We(e.isMatch,t),this},Lt.prototype.and=function(t){return this.filter(t)},Lt.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},Lt.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Lt.prototype.desc=function(){return this.reverse()},Lt.prototype.eachKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,r){t(r.key,r)})},Lt.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},Lt.prototype.eachPrimaryKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,r){t(r.primaryKey,r)})},Lt.prototype.keys=function(t){var e=this._ctx;e.keysOnly=!e.isMatch;var n=[];return this.each(function(r,o){n.push(o.key)}).then(function(){return n}).then(t)},Lt.prototype.primaryKeys=function(t){var e=this._ctx;if(e.dir==="next"&&on(e,!0)&&0<e.limit)return this._read(function(r){var o=Ln(e,e.table.core.schema);return e.table.core.query({trans:r,values:!1,limit:e.limit,query:{index:o,range:e.range}})}).then(function(r){return r.result}).then(t);e.keysOnly=!e.isMatch;var n=[];return this.each(function(r,o){n.push(o.primaryKey)}).then(function(){return n}).then(t)},Lt.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},Lt.prototype.firstKey=function(t){return this.limit(1).keys(function(e){return e[0]}).then(t)},Lt.prototype.lastKey=function(t){return this.reverse().firstKey(t)},Lt.prototype.distinct=function(){var t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];if(!t||!t.multi)return this;var e={};return yr(this._ctx,function(o){var r=o.primaryKey.toString(),o=_(e,r);return e[r]=!0,!o}),this},Lt.prototype.modify=function(t){var e=this,n=this._ctx;return this._write(function(r){var o=typeof t=="function"?t:function(j){return ui(j,t)},f=n.table.core,D=f.schema.primaryKey,b=D.outbound,P=D.extractKey,z=200,D=e.db._options.modifyChunkSize;D&&(z=typeof D=="object"?D[f.name]||D["*"]||200:D);function F(j,Z){var W=Z.failures,Z=Z.numFailures;U+=j-Z;for(var J=0,rt=h(W);J<rt.length;J++){var ft=rt[J];$.push(W[ft])}}var $=[],U=0,I=[],M=t===fi;return e.clone().primaryKeys().then(function(j){function L(Z){var J=Math.min(z,j.length-Z),rt=j.slice(Z,Z+J);return(M?Promise.resolve([]):f.getMany({trans:r,keys:rt,cache:"immutable"})).then(function(ft){var bt=[],ht=[],gt=b?[]:null,wt=M?rt:[];if(!M)for(var yt=0;yt<J;++yt){var St=ft[yt],zt={value:Q(St),primKey:j[Z+yt]};o.call(zt,zt.value,zt)!==!1&&(zt.value==null?wt.push(j[Z+yt]):b||Ft(P(St),P(zt.value))===0?(ht.push(zt.value),b&&gt.push(j[Z+yt])):(wt.push(j[Z+yt]),bt.push(zt.value)))}return Promise.resolve(0<bt.length&&f.mutate({trans:r,type:"add",values:bt}).then(function(Dt){for(var Mt in Dt.failures)wt.splice(parseInt(Mt),1);F(bt.length,Dt)})).then(function(){return(0<ht.length||W&&typeof t=="object")&&f.mutate({trans:r,type:"put",keys:gt,values:ht,criteria:W,changeSpec:typeof t!="function"&&t,isAdditionalChunk:0<Z}).then(function(Dt){return F(ht.length,Dt)})}).then(function(){return(0<wt.length||W&&M)&&f.mutate({trans:r,type:"delete",keys:wt,criteria:W,isAdditionalChunk:0<Z}).then(function(Dt){return Nn(n.table,wt,Dt)}).then(function(Dt){return F(wt.length,Dt)})}).then(function(){return j.length>Z+J&&L(Z+z)})})}var W=on(n)&&n.limit===1/0&&(typeof t!="function"||M)&&{index:n.index,range:n.range};return L(0).then(function(){if(0<$.length)throw new vt("Error modifying one or more objects",$,U,I);return j.length})})})},Lt.prototype.delete=function(){var t=this._ctx,e=t.range;return!on(t)||t.table.schema.yProps||!t.isPrimKey&&e.type!==3?this.modify(fi):this._write(function(n){var r=t.table.core.schema.primaryKey,o=e;return t.table.core.count({trans:n,query:{index:r,range:o}}).then(function(f){return t.table.core.mutate({trans:n,type:"deleteRange",range:o}).then(function(z){var P=z.failures,z=z.numFailures;if(z)throw new vt("Could not delete some values",Object.keys(P).map(function(D){return P[D]}),f-z);return f-z})})})},Lt);function Lt(){}var fi=function(t,e){return e.value=null};function Ca(t,e){return t<e?-1:t===e?0:1}function Sa(t,e){return e<t?-1:t===e?0:1}function me(t,e,n){return t=t instanceof mi?new t.Collection(t):t,t._ctx.error=new(n||TypeError)(e),t}function sn(t){return new t.Collection(t,function(){return pi("")}).limit(0)}function Kn(t,e,n,r){var o,f,b,P,z,D,F,$=n.length;if(!n.every(function(M){return typeof M=="string"}))return me(t,ri);function U(M){o=M==="next"?function(L){return L.toUpperCase()}:function(L){return L.toLowerCase()},f=M==="next"?function(L){return L.toLowerCase()}:function(L){return L.toUpperCase()},b=M==="next"?Ca:Sa;var j=n.map(function(L){return{lower:f(L),upper:o(L)}}).sort(function(L,W){return b(L.lower,W.lower)});P=j.map(function(L){return L.upper}),z=j.map(function(L){return L.lower}),F=(D=M)==="next"?"":r}U("next"),t=new t.Collection(t,function(){return je(P[0],z[$-1]+r)}),t._ondirectionchange=function(M){U(M)};var I=0;return t._addAlgorithm(function(M,j,L){var W=M.key;if(typeof W!="string")return!1;var Z=f(W);if(e(Z,z,I))return!0;for(var J=null,rt=I;rt<$;++rt){var ft=(function(bt,ht,gt,wt,yt,St){for(var zt=Math.min(bt.length,wt.length),Dt=-1,Mt=0;Mt<zt;++Mt){var ge=ht[Mt];if(ge!==wt[Mt])return yt(bt[Mt],gt[Mt])<0?bt.substr(0,Mt)+gt[Mt]+gt.substr(Mt+1):yt(bt[Mt],wt[Mt])<0?bt.substr(0,Mt)+wt[Mt]+gt.substr(Mt+1):0<=Dt?bt.substr(0,Dt)+ht[Dt]+gt.substr(Dt+1):null;yt(bt[Mt],ge)<0&&(Dt=Mt)}return zt<wt.length&&St==="next"?bt+gt.substr(bt.length):zt<bt.length&&St==="prev"?bt.substr(0,gt.length):Dt<0?null:bt.substr(0,Dt)+wt[Dt]+gt.substr(Dt+1)})(W,Z,P[rt],z[rt],b,D);ft===null&&J===null?I=rt+1:(J===null||0<b(J,ft))&&(J=ft)}return j(J!==null?function(){M.continue(J+F)}:L),!1}),t}function je(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function pi(t){return{type:1,lower:t,upper:t}}var mi=(Object.defineProperty(re.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),re.prototype.between=function(t,e,n,r){n=n!==!1,r=r===!0;try{return 0<this._cmp(t,e)||this._cmp(t,e)===0&&(n||r)&&(!n||!r)?sn(this):new this.Collection(this,function(){return je(t,e,!n,!r)})}catch{return me(this,Oe)}},re.prototype.equals=function(t){return t==null?me(this,Oe):new this.Collection(this,function(){return pi(t)})},re.prototype.above=function(t){return t==null?me(this,Oe):new this.Collection(this,function(){return je(t,void 0,!0)})},re.prototype.aboveOrEqual=function(t){return t==null?me(this,Oe):new this.Collection(this,function(){return je(t,void 0,!1)})},re.prototype.below=function(t){return t==null?me(this,Oe):new this.Collection(this,function(){return je(void 0,t,!1,!0)})},re.prototype.belowOrEqual=function(t){return t==null?me(this,Oe):new this.Collection(this,function(){return je(void 0,t)})},re.prototype.startsWith=function(t){return typeof t!="string"?me(this,ri):this.between(t,t+qe,!0,!0)},re.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):Kn(this,function(e,n){return e.indexOf(n[0])===0},[t],qe)},re.prototype.equalsIgnoreCase=function(t){return Kn(this,function(e,n){return e===n[0]},[t],"")},re.prototype.anyOfIgnoreCase=function(){var t=Ot.apply(st,arguments);return t.length===0?sn(this):Kn(this,function(e,n){return n.indexOf(e)!==-1},t,"")},re.prototype.startsWithAnyOfIgnoreCase=function(){var t=Ot.apply(st,arguments);return t.length===0?sn(this):Kn(this,function(e,n){return n.some(function(r){return e.indexOf(r)===0})},t,qe)},re.prototype.anyOf=function(){var t=this,e=Ot.apply(st,arguments),n=this._cmp;try{e.sort(n)}catch{return me(this,Oe)}if(e.length===0)return sn(this);var r=new this.Collection(this,function(){return je(e[0],e[e.length-1])});r._ondirectionchange=function(f){n=f==="next"?t._ascending:t._descending,e.sort(n)};var o=0;return r._addAlgorithm(function(f,b,P){for(var z=f.key;0<n(z,e[o]);)if(++o===e.length)return b(P),!1;return n(z,e[o])===0||(b(function(){f.continue(e[o])}),!1)}),r},re.prototype.notEqual=function(t){return this.inAnyRange([[-1/0,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},re.prototype.noneOf=function(){var t=Ot.apply(st,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return me(this,Oe)}var e=t.reduce(function(n,r){return n?n.concat([[n[n.length-1][1],r]]):[[-1/0,r]]},null);return e.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(e,{includeLowers:!1,includeUppers:!1})},re.prototype.inAnyRange=function(W,e){var n=this,r=this._cmp,o=this._ascending,f=this._descending,b=this._min,P=this._max;if(W.length===0)return sn(this);if(!W.every(function(Z){return Z[0]!==void 0&&Z[1]!==void 0&&o(Z[0],Z[1])<=0}))return me(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",mt.InvalidArgument);var z=!e||e.includeLowers!==!1,D=e&&e.includeUppers===!0,F,$=o;function U(Z,J){return $(Z[0],J[0])}try{(F=W.reduce(function(Z,J){for(var rt=0,ft=Z.length;rt<ft;++rt){var bt=Z[rt];if(r(J[0],bt[1])<0&&0<r(J[1],bt[0])){bt[0]=b(bt[0],J[0]),bt[1]=P(bt[1],J[1]);break}}return rt===ft&&Z.push(J),Z},[])).sort(U)}catch{return me(this,Oe)}var I=0,M=D?function(Z){return 0<o(Z,F[I][1])}:function(Z){return 0<=o(Z,F[I][1])},j=z?function(Z){return 0<f(Z,F[I][0])}:function(Z){return 0<=f(Z,F[I][0])},L=M,W=new this.Collection(this,function(){return je(F[0][0],F[F.length-1][1],!z,!D)});return W._ondirectionchange=function(Z){$=Z==="next"?(L=M,o):(L=j,f),F.sort(U)},W._addAlgorithm(function(Z,J,rt){for(var ft,bt=Z.key;L(bt);)if(++I===F.length)return J(rt),!1;return!M(ft=bt)&&!j(ft)||(n._cmp(bt,F[I][1])===0||n._cmp(bt,F[I][0])===0||J(function(){$===o?Z.continue(F[I][0]):Z.continue(F[I][1])}),!1)}),W},re.prototype.startsWithAnyOf=function(){var t=Ot.apply(st,arguments);return t.every(function(e){return typeof e=="string"})?t.length===0?sn(this):this.inAnyRange(t.map(function(e){return[e,e+qe]})):me(this,"startsWithAnyOf() only works with strings")},re);function re(){}function ke(t){return Vt(function(e){return yn(e),t(e.target.error),!1})}function yn(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}var bn="storagemutated",wr="x-storagemutated-1",Fe=gn(null,bn),Aa=(Ce.prototype._lock=function(){return q(!Ct.global),++this._reculock,this._reculock!==1||Ct.global||(Ct.lockOwnerFor=this),this},Ce.prototype._unlock=function(){if(q(!Ct.global),--this._reculock==0)for(Ct.global||(Ct.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var t=this._blockedFuncs.shift();try{Ke(t[1],t[0])}catch{}}return this},Ce.prototype._locked=function(){return this._reculock&&Ct.lockOwnerFor!==this},Ce.prototype.create=function(t){var e=this;if(!this.mode)return this;var n=this.db.idbdb,r=this.db._state.dbOpenError;if(q(!this.idbtrans),!t&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new mt.DatabaseClosed(r);case"MissingAPIError":throw new mt.MissingAPI(r.message,r);default:throw new mt.OpenFailed(r)}if(!this.active)throw new mt.TransactionInactive;return q(this._completion._state===null),(t=this.idbtrans=t||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Vt(function(o){yn(o),e._reject(t.error)}),t.onabort=Vt(function(o){yn(o),e.active&&e._reject(new mt.Abort(t.error)),e.active=!1,e.on("abort").fire(o)}),t.oncomplete=Vt(function(){e.active=!1,e._resolve(),"mutatedParts"in t&&Fe.storagemutated.fire(t.mutatedParts)}),this},Ce.prototype._promise=function(t,e,n){var r=this;if(t==="readwrite"&&this.mode!=="readwrite")return Xt(new mt.ReadOnly("Transaction is readonly"));if(!this.active)return Xt(new mt.TransactionInactive);if(this._locked())return new _t(function(f,b){r._blockedFuncs.push([function(){r._promise(t,e,n).then(f,b)},Ct])});if(n)return Ie(function(){var f=new _t(function(b,P){r._lock();var z=e(b,P,r);z&&z.then&&z.then(b,P)});return f.finally(function(){return r._unlock()}),f._lib=!0,f});var o=new _t(function(f,b){var P=e(f,b,r);P&&P.then&&P.then(f,b)});return o._lib=!0,o},Ce.prototype._root=function(){return this.parent?this.parent._root():this},Ce.prototype.waitFor=function(t){var e,n=this._root(),r=_t.resolve(t);n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return r}):(n._waitingFor=r,n._waitingQueue=[],e=n.idbtrans.objectStore(n.storeNames[0]),(function f(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(e.get(-1/0).onsuccess=f)})());var o=n._waitingFor;return new _t(function(f,b){r.then(function(P){return n._waitingQueue.push(Vt(f.bind(null,P)))},function(P){return n._waitingQueue.push(Vt(b.bind(null,P)))}).finally(function(){n._waitingFor===o&&(n._waitingFor=null)})})},Ce.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new mt.Abort))},Ce.prototype.table=function(t){var e=this._memoizedTables||(this._memoizedTables={});if(_(e,t))return e[t];var n=this.schema[t];if(!n)throw new mt.NotFound("Table "+t+" not part of transaction");return n=new this.db.Table(t,n,this),n.core=this.db.core.table(t),e[t]=n},Ce);function Ce(){}function _r(t,e,n,r,o,f,b,P){return{name:t,keyPath:e,unique:n,multi:r,auto:o,compound:f,src:(n&&!b?"&":"")+(r?"*":"")+(o?"++":"")+gi(e),type:P}}function gi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function xr(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:(r=function(o){return[o.name,o]},n.reduce(function(o,f,b){return b=r(f,b),b&&(o[b[0]]=b[1]),o},{}))};var r}var wn=function(t){try{return t.only([[]]),wn=function(){return[[]]},[[]]}catch{return wn=function(){return qe},qe}};function kr(t){return t==null?function(){}:typeof t=="string"?(e=t).split(".").length===1?function(n){return n[e]}:function(n){return nt(n,e)}:function(n){return nt(n,t)};var e}function vi(t){return[].slice.call(t)}var Ea=0;function _n(t){return t==null?":id":typeof t=="string"?t:"[".concat(t.join("+"),"]")}function Oa(t,e,z){function r(L){if(L.type===3)return null;if(L.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var I=L.lower,M=L.upper,j=L.lowerOpen,L=L.upperOpen;return I===void 0?M===void 0?null:e.upperBound(M,!!L):M===void 0?e.lowerBound(I,!!j):e.bound(I,M,!!j,!!L)}function o(U){var I,M=U.name;return{name:M,schema:U,mutate:function(j){var L=j.trans,W=j.type,Z=j.keys,J=j.values,rt=j.range;return new Promise(function(ft,bt){ft=Vt(ft);var ht=L.objectStore(M),gt=ht.keyPath==null,wt=W==="put"||W==="add";if(!wt&&W!=="delete"&&W!=="deleteRange")throw new Error("Invalid operation type: "+W);var yt,St=(Z||J||{length:1}).length;if(Z&&J&&Z.length!==J.length)throw new Error("Given keys array must have same length as given values array.");if(St===0)return ft({numFailures:0,failures:{},results:[],lastResult:void 0});function zt(ce){++ge,yn(ce)}var Dt=[],Mt=[],ge=0;if(W==="deleteRange"){if(rt.type===4)return ft({numFailures:ge,failures:Mt,results:[],lastResult:void 0});rt.type===3?Dt.push(yt=ht.clear()):Dt.push(yt=ht.delete(r(rt)))}else{var gt=wt?gt?[J,Z]:[J,null]:[Z,null],Rt=gt[0],oe=gt[1];if(wt)for(var se=0;se<St;++se)Dt.push(yt=oe&&oe[se]!==void 0?ht[W](Rt[se],oe[se]):ht[W](Rt[se])),yt.onerror=zt;else for(se=0;se<St;++se)Dt.push(yt=ht[W](Rt[se])),yt.onerror=zt}function er(ce){ce=ce.target.result,Dt.forEach(function(Ve,Lr){return Ve.error!=null&&(Mt[Lr]=Ve.error)}),ft({numFailures:ge,failures:Mt,results:W==="delete"?Z:Dt.map(function(Ve){return Ve.result}),lastResult:ce})}yt.onerror=function(ce){zt(ce),er(ce)},yt.onsuccess=er})},getMany:function(j){var L=j.trans,W=j.keys;return new Promise(function(Z,J){Z=Vt(Z);for(var rt,ft=L.objectStore(M),bt=W.length,ht=new Array(bt),gt=0,wt=0,yt=function(Dt){Dt=Dt.target,ht[Dt._pos]=Dt.result,++wt===gt&&Z(ht)},St=ke(J),zt=0;zt<bt;++zt)W[zt]!=null&&((rt=ft.get(W[zt]))._pos=zt,rt.onsuccess=yt,rt.onerror=St,++gt);gt===0&&Z(ht)})},get:function(j){var L=j.trans,W=j.key;return new Promise(function(Z,J){Z=Vt(Z);var rt=L.objectStore(M).get(W);rt.onsuccess=function(ft){return Z(ft.target.result)},rt.onerror=ke(J)})},query:(I=D,function(j){return new Promise(function(L,W){L=Vt(L);var Z,J,rt,gt=j.trans,ft=j.values,bt=j.limit,yt=j.query,ht=bt===1/0?void 0:bt,wt=yt.index,yt=yt.range,gt=gt.objectStore(M),wt=wt.isPrimaryKey?gt:gt.index(wt.name),yt=r(yt);if(bt===0)return L({result:[]});I?((ht=ft?wt.getAll(yt,ht):wt.getAllKeys(yt,ht)).onsuccess=function(St){return L({result:St.target.result})},ht.onerror=ke(W)):(Z=0,J=!ft&&"openKeyCursor"in wt?wt.openKeyCursor(yt):wt.openCursor(yt),rt=[],J.onsuccess=function(St){var zt=J.result;return zt?(rt.push(ft?zt.value:zt.primaryKey),++Z===bt?L({result:rt}):void zt.continue()):L({result:rt})},J.onerror=ke(W))})}),openCursor:function(j){var L=j.trans,W=j.values,Z=j.query,J=j.reverse,rt=j.unique;return new Promise(function(ft,bt){ft=Vt(ft);var wt=Z.index,ht=Z.range,gt=L.objectStore(M),gt=wt.isPrimaryKey?gt:gt.index(wt.name),wt=J?rt?"prevunique":"prev":rt?"nextunique":"next",yt=!W&&"openKeyCursor"in gt?gt.openKeyCursor(r(ht),wt):gt.openCursor(r(ht),wt);yt.onerror=ke(bt),yt.onsuccess=Vt(function(St){var zt,Dt,Mt,ge,Rt=yt.result;Rt?(Rt.___id=++Ea,Rt.done=!1,zt=Rt.continue.bind(Rt),Dt=(Dt=Rt.continuePrimaryKey)&&Dt.bind(Rt),Mt=Rt.advance.bind(Rt),ge=function(){throw new Error("Cursor not stopped")},Rt.trans=L,Rt.stop=Rt.continue=Rt.continuePrimaryKey=Rt.advance=function(){throw new Error("Cursor not started")},Rt.fail=Vt(bt),Rt.next=function(){var oe=this,se=1;return this.start(function(){return se--?oe.continue():oe.stop()}).then(function(){return oe})},Rt.start=function(oe){function se(){if(yt.result)try{oe()}catch(ce){Rt.fail(ce)}else Rt.done=!0,Rt.start=function(){throw new Error("Cursor behind last entry")},Rt.stop()}var er=new Promise(function(ce,Ve){ce=Vt(ce),yt.onerror=ke(Ve),Rt.fail=Ve,Rt.stop=function(Lr){Rt.stop=Rt.continue=Rt.continuePrimaryKey=Rt.advance=ge,ce(Lr)}});return yt.onsuccess=Vt(function(ce){yt.onsuccess=se,se()}),Rt.continue=zt,Rt.continuePrimaryKey=Dt,Rt.advance=Mt,se(),er},ft(Rt)):ft(null)},bt)})},count:function(j){var L=j.query,W=j.trans,Z=L.index,J=L.range;return new Promise(function(rt,ft){var bt=W.objectStore(M),ht=Z.isPrimaryKey?bt:bt.index(Z.name),bt=r(J),ht=bt?ht.count(bt):ht.count();ht.onsuccess=Vt(function(gt){return rt(gt.target.result)}),ht.onerror=ke(ft)})}}}var f,b,P,F=(b=z,P=vi((f=t).objectStoreNames),{schema:{name:f.name,tables:P.map(function(U){return b.objectStore(U)}).map(function(U){var I=U.keyPath,L=U.autoIncrement,M=c(I),j={},L={name:U.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:I==null,compound:M,keyPath:I,autoIncrement:L,unique:!0,extractKey:kr(I)},indexes:vi(U.indexNames).map(function(W){return U.index(W)}).map(function(rt){var Z=rt.name,J=rt.unique,ft=rt.multiEntry,rt=rt.keyPath,ft={name:Z,compound:c(rt),keyPath:rt,unique:J,multiEntry:ft,extractKey:kr(rt)};return j[_n(rt)]=ft}),getIndexByKeyPath:function(W){return j[_n(W)]}};return j[":id"]=L.primaryKey,I!=null&&(j[_n(I)]=L.primaryKey),L})},hasGetAll:0<P.length&&"getAll"in b.objectStore(P[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),z=F.schema,D=F.hasGetAll,F=z.tables.map(o),$={};return F.forEach(function(U){return $[U.name]=U}),{stack:"dbcore",transaction:t.transaction.bind(t),table:function(U){if(!$[U])throw new Error("Table '".concat(U,"' not found"));return $[U]},MIN_KEY:-1/0,MAX_KEY:wn(e),schema:z}}function Pa(t,e,n,r){var o=n.IDBKeyRange;return n.indexedDB,{dbcore:(r=Oa(e,o,r),t.dbcore.reduce(function(f,b){return b=b.create,d(d({},f),b(f))},r))}}function qn(t,r){var n=r.db,r=Pa(t._middlewares,n,t._deps,r);t.core=r.dbcore,t.tables.forEach(function(o){var f=o.name;t.core.schema.tables.some(function(b){return b.name===f})&&(o.core=t.core.table(f),t[f]instanceof t.Table&&(t[f].core=o.core))})}function Wn(t,e,n,r){n.forEach(function(o){var f=r[o];e.forEach(function(b){var P=(function z(D,F){return S(D,F)||(D=k(D))&&z(D,F)})(b,o);(!P||"value"in P&&P.value===void 0)&&(b===t.Transaction.prototype||b instanceof t.Transaction?A(b,o,{get:function(){return this.table(o)},set:function(z){v(this,o,{value:z,writable:!0,configurable:!0,enumerable:!0})}}):b[o]=new t.Table(o,f))})})}function Cr(t,e){e.forEach(function(n){for(var r in n)n[r]instanceof t.Table&&delete n[r]})}function Ta(t,e){return t._cfg.version-e._cfg.version}function $a(t,e,n,r){var o=t._dbSchema;n.objectStoreNames.contains("$meta")&&!o.$meta&&(o.$meta=xr("$meta",bi("")[0],[]),t._storeNames.push("$meta"));var f=t._createTransaction("readwrite",t._storeNames,o);f.create(n),f._completion.catch(r);var b=f._reject.bind(f),P=Ct.transless||Ct;Ie(function(){return Ct.trans=f,Ct.transless=P,e!==0?(qn(t,n),D=e,((z=f).storeNames.includes("$meta")?z.table("$meta").get("version").then(function(F){return F??D}):_t.resolve(D)).then(function(F){return U=F,I=f,M=n,j=[],F=($=t)._versions,L=$._dbSchema=Zn(0,$.idbdb,M),(F=F.filter(function(W){return W._cfg.version>=U})).length!==0?(F.forEach(function(W){j.push(function(){var Z=L,J=W._cfg.dbschema;Vn($,Z,M),Vn($,J,M),L=$._dbSchema=J;var rt=Sr(Z,J);rt.add.forEach(function(wt){Ar(M,wt[0],wt[1].primKey,wt[1].indexes)}),rt.change.forEach(function(wt){if(wt.recreate)throw new mt.Upgrade("Not yet support for changing primary key");var yt=M.objectStore(wt.name);wt.add.forEach(function(St){return Hn(yt,St)}),wt.change.forEach(function(St){yt.deleteIndex(St.name),Hn(yt,St)}),wt.del.forEach(function(St){return yt.deleteIndex(St)})});var ft=W._cfg.contentUpgrade;if(ft&&W._cfg.version>U){qn($,M),I._memoizedTables={};var bt=ut(J);rt.del.forEach(function(wt){bt[wt]=Z[wt]}),Cr($,[$.Transaction.prototype]),Wn($,[$.Transaction.prototype],h(bt),bt),I.schema=bt;var ht,gt=Y(ft);return gt&&rn(),rt=_t.follow(function(){var wt;(ht=ft(I))&&gt&&(wt=Be.bind(null,null),ht.then(wt,wt))}),ht&&typeof ht.then=="function"?_t.resolve(ht):rt.then(function(){return ht})}}),j.push(function(Z){var J,rt,ft=W._cfg.dbschema;J=ft,rt=Z,[].slice.call(rt.db.objectStoreNames).forEach(function(bt){return J[bt]==null&&rt.db.deleteObjectStore(bt)}),Cr($,[$.Transaction.prototype]),Wn($,[$.Transaction.prototype],$._storeNames,$._dbSchema),I.schema=$._dbSchema}),j.push(function(Z){$.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil($.idbdb.version/10)===W._cfg.version?($.idbdb.deleteObjectStore("$meta"),delete $._dbSchema.$meta,$._storeNames=$._storeNames.filter(function(J){return J!=="$meta"})):Z.objectStore("$meta").put(W._cfg.version,"version"))})}),(function W(){return j.length?_t.resolve(j.shift()(I.idbtrans)).then(W):_t.resolve()})().then(function(){yi(L,M)})):_t.resolve();var $,U,I,M,j,L}).catch(b)):(h(o).forEach(function(F){Ar(n,F,o[F].primKey,o[F].indexes)}),qn(t,n),void _t.follow(function(){return t.on.populate.fire(f)}).catch(b));var z,D})}function Ra(t,e){yi(t._dbSchema,e),e.db.version%10!=0||e.objectStoreNames.contains("$meta")||e.db.createObjectStore("$meta").add(Math.ceil(e.db.version/10-1),"version");var n=Zn(0,t.idbdb,e);Vn(t,t._dbSchema,e);for(var r=0,o=Sr(n,t._dbSchema).change;r<o.length;r++){var f=(function(b){if(b.change.length||b.recreate)return console.warn("Unable to patch indexes of table ".concat(b.name," because it has changes on the type of index or primary key.")),{value:void 0};var P=e.objectStore(b.name);b.add.forEach(function(z){at&&console.debug("Dexie upgrade patch: Creating missing index ".concat(b.name,".").concat(z.src)),Hn(P,z)})})(o[r]);if(typeof f=="object")return f.value}}function Sr(t,e){var n,r={del:[],add:[],change:[]};for(n in t)e[n]||r.del.push(n);for(n in e){var o=t[n],f=e[n];if(o){var b={name:n,def:f,recreate:!1,del:[],add:[],change:[]};if(""+(o.primKey.keyPath||"")!=""+(f.primKey.keyPath||"")||o.primKey.auto!==f.primKey.auto)b.recreate=!0,r.change.push(b);else{var P=o.idxByName,z=f.idxByName,D=void 0;for(D in P)z[D]||b.del.push(D);for(D in z){var F=P[D],$=z[D];F?F.src!==$.src&&b.change.push($):b.add.push($)}(0<b.del.length||0<b.add.length||0<b.change.length)&&r.change.push(b)}}else r.add.push([n,f])}return r}function Ar(t,e,n,r){var o=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(function(f){return Hn(o,f)}),o}function yi(t,e){h(t).forEach(function(n){e.db.objectStoreNames.contains(n)||(at&&console.debug("Dexie: Creating missing table",n),Ar(e,n,t[n].primKey,t[n].indexes))})}function Hn(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Zn(t,e,n){var r={};return T(e.objectStoreNames,0).forEach(function(o){for(var f=n.objectStore(o),b=_r(gi(D=f.keyPath),D||"",!0,!1,!!f.autoIncrement,D&&typeof D!="string",!0),P=[],z=0;z<f.indexNames.length;++z){var F=f.index(f.indexNames[z]),D=F.keyPath,F=_r(F.name,D,!!F.unique,!!F.multiEntry,!1,D&&typeof D!="string",!1);P.push(F)}r[o]=xr(o,b,P)}),r}function Vn(t,e,n){for(var r=n.db.objectStoreNames,o=0;o<r.length;++o){var f=r[o],b=n.objectStore(f);t._hasGetAll="getAll"in b;for(var P=0;P<b.indexNames.length;++P){var z=b.indexNames[P],D=b.index(z).keyPath,F=typeof D=="string"?D:"["+T(D).join("+")+"]";!e[f]||(D=e[f].idxByName[F])&&(D.name=z,delete e[f].idxByName[F],e[f].idxByName[z]=D)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&u.WorkerGlobalScope&&u instanceof u.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}function bi(t){return t.split(",").map(function(e,n){var f=e.split(":"),r=(o=f[1])===null||o===void 0?void 0:o.trim(),o=(e=f[0].trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(o)?o.match(/^\[(.*)\]$/)[1].split("+"):o;return _r(o,f||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),c(f),n===0,r)})}var za=(ln.prototype._createTableSchema=xr,ln.prototype._parseIndexSyntax=bi,ln.prototype._parseStoresSpec=function(t,e){var n=this;h(t).forEach(function(r){if(t[r]!==null){var o=n._parseIndexSyntax(t[r]),f=o.shift();if(!f)throw new mt.Schema("Invalid schema for table "+r+": "+t[r]);if(f.unique=!0,f.multi)throw new mt.Schema("Primary key cannot be multiEntry*");o.forEach(function(b){if(b.auto)throw new mt.Schema("Only primary key can be marked as autoIncrement (++)");if(!b.keyPath)throw new mt.Schema("Index must have a name and cannot be an empty string")}),o=n._createTableSchema(r,f,o),e[r]=o}})},ln.prototype.stores=function(n){var e=this.db;this._cfg.storesSource=this._cfg.storesSource?g(this._cfg.storesSource,n):n;var n=e._versions,r={},o={};return n.forEach(function(f){g(r,f._cfg.storesSource),o=f._cfg.dbschema={},f._parseStoresSpec(r,o)}),e._dbSchema=o,Cr(e,[e._allTables,e,e.Transaction.prototype]),Wn(e,[e._allTables,e,e.Transaction.prototype,this._cfg.tables],h(o),o),e._storeNames=h(o),this},ln.prototype.upgrade=function(t){return this._cfg.contentUpgrade=ot(this._cfg.contentUpgrade||It,t),this},ln);function ln(){}function Er(t,e){var n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Pe(jn,{addons:[],indexedDB:t,IDBKeyRange:e})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function Or(t){return t&&typeof t.databases=="function"}function Pr(t){return Ie(function(){return Ct.letThrough=!0,t()})}function Tr(t){return!("from"in t)}var ae=function(t,e){if(!this){var n=new ae;return t&&"d"in t&&g(n,t),n}g(this,arguments.length?{d:1,from:t,to:1<arguments.length?e:t}:{d:0})};function xn(t,e,n){var r=Ft(e,n);if(!isNaN(r)){if(0<r)throw RangeError();if(Tr(t))return g(t,{from:e,to:n,d:1});var o=t.l,r=t.r;if(Ft(n,t.from)<0)return o?xn(o,e,n):t.l={from:e,to:n,d:1,l:null,r:null},_i(t);if(0<Ft(e,t.to))return r?xn(r,e,n):t.r={from:e,to:n,d:1,l:null,r:null},_i(t);Ft(e,t.from)<0&&(t.from=e,t.l=null,t.d=r?r.d+1:1),0<Ft(n,t.to)&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1),n=!t.r,o&&!t.l&&kn(t,o),r&&n&&kn(t,r)}}function kn(t,e){Tr(e)||(function n(r,z){var f=z.from,b=z.to,P=z.l,z=z.r;xn(r,f,b),P&&n(r,P),z&&n(r,z)})(t,e)}function wi(t,e){var n=Yn(e),r=n.next();if(r.done)return!1;for(var o=r.value,f=Yn(t),b=f.next(o.from),P=b.value;!r.done&&!b.done;){if(Ft(P.from,o.to)<=0&&0<=Ft(P.to,o.from))return!0;Ft(o.from,P.from)<0?o=(r=n.next(P.from)).value:P=(b=f.next(o.from)).value}return!1}function Yn(t){var e=Tr(t)?null:{s:0,n:t};return{next:function(n){for(var r=0<arguments.length;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&Ft(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||Ft(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function _i(t){var e,n,r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),o=1<r?"r":r<-1?"l":"";o&&(e=o=="r"?"l":"r",n=d({},t),r=t[o],t.from=r.from,t.to=r.to,t[o]=r[o],n[o]=r[e],(t[e]=n).d=xi(n)),t.d=xi(t)}function xi(n){var e=n.r,n=n.l;return(e?n?Math.max(e.d,n.d):e.d:n?n.d:0)+1}function Xn(t,e){return h(e).forEach(function(n){t[n]?kn(t[n],e[n]):t[n]=(function r(o){var f,b,P={};for(f in o)_(o,f)&&(b=o[f],P[f]=!b||typeof b!="object"||Pt.has(b.constructor)?b:r(b));return P})(e[n])}),t}function $r(t,e){return t.all||e.all||Object.keys(t).some(function(n){return e[n]&&wi(e[n],t[n])})}E(ae.prototype,((ye={add:function(t){return kn(this,t),this},addKey:function(t){return xn(this,t,t),this},addKeys:function(t){var e=this;return t.forEach(function(n){return xn(e,n,n)}),this},hasKey:function(t){var e=Yn(this).next(t).value;return e&&Ft(e.from,t)<=0&&0<=Ft(e.to,t)}})[Tt]=function(){return Yn(this)},ye));var He={},Rr={},zr=!1;function Gn(t){Xn(Rr,t),zr||(zr=!0,setTimeout(function(){zr=!1,Dr(Rr,!(Rr={}))},0))}function Dr(t,e){e===void 0&&(e=!1);var n=new Set;if(t.all)for(var r=0,o=Object.values(He);r<o.length;r++)ki(b=o[r],t,n,e);else for(var f in t){var b,P=/^idb\:\/\/(.*)\/(.*)\//.exec(f);P&&(f=P[1],P=P[2],(b=He["idb://".concat(f,"/").concat(P)])&&ki(b,t,n,e))}n.forEach(function(z){return z()})}function ki(t,e,n,r){for(var o=[],f=0,b=Object.entries(t.queries.query);f<b.length;f++){for(var P=b[f],z=P[0],D=[],F=0,$=P[1];F<$.length;F++){var U=$[F];$r(e,U.obsSet)?U.subscribers.forEach(function(L){return n.add(L)}):r&&D.push(U)}r&&o.push([z,D])}if(r)for(var I=0,M=o;I<M.length;I++){var j=M[I],z=j[0],D=j[1];t.queries.query[z]=D}}function Da(t){var e=t._state,n=t._deps.indexedDB;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(function(){return e.dbOpenError?Xt(e.dbOpenError):t});e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;var r=e.openCanceller,o=Math.round(10*t.verno),f=!1;function b(){if(e.openCanceller!==r)throw new mt.DatabaseClosed("db.open() was cancelled")}function P(){return new _t(function(U,I){if(b(),!n)throw new mt.MissingAPI;var M=t.name,j=e.autoSchema||!o?n.open(M):n.open(M,o);if(!j)throw new mt.MissingAPI;j.onerror=ke(I),j.onblocked=Vt(t._fireOnBlocked),j.onupgradeneeded=Vt(function(L){var W;F=j.transaction,e.autoSchema&&!t._options.allowEmptyDB?(j.onerror=yn,F.abort(),j.result.close(),(W=n.deleteDatabase(M)).onsuccess=W.onerror=Vt(function(){I(new mt.NoSuchDatabase("Database ".concat(M," doesnt exist")))})):(F.onerror=ke(I),L=L.oldVersion>Math.pow(2,62)?0:L.oldVersion,$=L<1,t.idbdb=j.result,f&&Ra(t,F),$a(t,L/10,F,I))},I),j.onsuccess=Vt(function(){F=null;var L,W,Z,J,rt,ft=t.idbdb=j.result,bt=T(ft.objectStoreNames);if(0<bt.length)try{var ht=ft.transaction((J=bt).length===1?J[0]:J,"readonly");if(e.autoSchema)W=ft,Z=ht,(L=t).verno=W.version/10,Z=L._dbSchema=Zn(0,W,Z),L._storeNames=T(W.objectStoreNames,0),Wn(L,[L._allTables],h(Z),Z);else if(Vn(t,t._dbSchema,ht),((rt=Sr(Zn(0,(rt=t).idbdb,ht),rt._dbSchema)).add.length||rt.change.some(function(gt){return gt.add.length||gt.change.length}))&&!f)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),ft.close(),o=ft.version+1,f=!0,U(P());qn(t,ht)}catch{}an.push(t),ft.onversionchange=Vt(function(gt){e.vcFired=!0,t.on("versionchange").fire(gt)}),ft.onclose=Vt(function(){t.close({disableAutoOpen:!1})}),$&&(rt=t._deps,ht=M,ft=rt.indexedDB,rt=rt.IDBKeyRange,Or(ft)||ht===jn||Er(ft,rt).put({name:ht}).catch(It)),U()},I)}).catch(function(U){switch(U?.name){case"UnknownError":if(0<e.PR1398_maxLoop)return e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),P();break;case"VersionError":if(0<o)return o=0,P()}return _t.reject(U)})}var z,D=e.dbReadyResolve,F=null,$=!1;return _t.race([r,(typeof navigator>"u"?_t.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(U){function I(){return indexedDB.databases().finally(U)}z=setInterval(I,100),I()}).finally(function(){return clearInterval(z)}):Promise.resolve()).then(P)]).then(function(){return b(),e.onReadyBeingFired=[],_t.resolve(Pr(function(){return t.on.ready.fire(t.vip)})).then(function U(){if(0<e.onReadyBeingFired.length){var I=e.onReadyBeingFired.reduce(ot,It);return e.onReadyBeingFired=[],_t.resolve(Pr(function(){return I(t.vip)})).then(U)}})}).finally(function(){e.openCanceller===r&&(e.onReadyBeingFired=null,e.isBeingOpened=!1)}).catch(function(U){e.dbOpenError=U;try{F&&F.abort()}catch{}return r===e.openCanceller&&t._close(),Xt(U)}).finally(function(){e.openComplete=!0,D()}).then(function(){var U;return $&&(U={},t.tables.forEach(function(I){I.schema.indexes.forEach(function(M){M.name&&(U["idb://".concat(t.name,"/").concat(I.name,"/").concat(M.name)]=new ae(-1/0,[[[]]]))}),U["idb://".concat(t.name,"/").concat(I.name,"/")]=U["idb://".concat(t.name,"/").concat(I.name,"/:dels")]=new ae(-1/0,[[[]]])}),Fe(bn).fire(U),Dr(U,!0)),t})}function Ir(t){function e(f){return t.next(f)}var n=o(e),r=o(function(f){return t.throw(f)});function o(f){return function(z){var P=f(z),z=P.value;return P.done?z:z&&typeof z.then=="function"?z.then(n,r):c(z)?Promise.all(z).then(n,r):n(z)}}return o(e)()}function Jn(t,e,n){for(var r=c(t)?t.slice():[t],o=0;o<n;++o)r.push(e);return r}var Ia={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return d(d({},t),{table:function(e){var n=t.table(e),r=n.schema,o={},f=[];function b($,U,I){var M=_n($),j=o[M]=o[M]||[],L=$==null?0:typeof $=="string"?1:$.length,W=0<U,W=d(d({},I),{name:W?"".concat(M,"(virtual-from:").concat(I.name,")"):I.name,lowLevelIndex:I,isVirtual:W,keyTail:U,keyLength:L,extractKey:kr($),unique:!W&&I.unique});return j.push(W),W.isPrimaryKey||f.push(W),1<L&&b(L===2?$[0]:$.slice(0,L-1),U+1,I),j.sort(function(Z,J){return Z.keyTail-J.keyTail}),W}e=b(r.primaryKey.keyPath,0,r.primaryKey),o[":id"]=[e];for(var P=0,z=r.indexes;P<z.length;P++){var D=z[P];b(D.keyPath,0,D)}function F($){var U,I=$.query.index;return I.isVirtual?d(d({},$),{query:{index:I.lowLevelIndex,range:(U=$.query.range,I=I.keyTail,{type:U.type===1?2:U.type,lower:Jn(U.lower,U.lowerOpen?t.MAX_KEY:t.MIN_KEY,I),lowerOpen:!0,upper:Jn(U.upper,U.upperOpen?t.MIN_KEY:t.MAX_KEY,I),upperOpen:!0})}}):$}return d(d({},n),{schema:d(d({},r),{primaryKey:e,indexes:f,getIndexByKeyPath:function($){return($=o[_n($)])&&$[0]}}),count:function($){return n.count(F($))},query:function($){return n.query(F($))},openCursor:function($){var U=$.query.index,I=U.keyTail,M=U.isVirtual,j=U.keyLength;return M?n.openCursor(F($)).then(function(W){return W&&L(W)}):n.openCursor($);function L(W){return Object.create(W,{continue:{value:function(Z){Z!=null?W.continue(Jn(Z,$.reverse?t.MAX_KEY:t.MIN_KEY,I)):$.unique?W.continue(W.key.slice(0,j).concat($.reverse?t.MIN_KEY:t.MAX_KEY,I)):W.continue()}},continuePrimaryKey:{value:function(Z,J){W.continuePrimaryKey(Jn(Z,t.MAX_KEY,I),J)}},primaryKey:{get:function(){return W.primaryKey}},key:{get:function(){var Z=W.key;return j===1?Z[0]:Z.slice(0,j)}},value:{get:function(){return W.value}}})}}})}})}};function Br(t,e,n,r){return n=n||{},r=r||"",h(t).forEach(function(o){var f,b,P;_(e,o)?(f=t[o],b=e[o],typeof f=="object"&&typeof b=="object"&&f&&b?(P=it(f))!==it(b)?n[r+o]=e[o]:P==="Object"?Br(f,b,n,r+o+"."):f!==b&&(n[r+o]=e[o]):f!==b&&(n[r+o]=e[o])):n[r+o]=void 0}),h(e).forEach(function(o){_(t,o)||(n[r+o]=e[o])}),n}function Mr(t,e){return e.type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}var Ba={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(t){return d(d({},t),{table:function(e){var n=t.table(e),r=n.schema.primaryKey;return d(d({},n),{mutate:function(o){var f=Ct.trans,b=f.table(e).hook,P=b.deleting,z=b.creating,D=b.updating;switch(o.type){case"add":if(z.fire===It)break;return f._promise("readwrite",function(){return F(o)},!0);case"put":if(z.fire===It&&D.fire===It)break;return f._promise("readwrite",function(){return F(o)},!0);case"delete":if(P.fire===It)break;return f._promise("readwrite",function(){return F(o)},!0);case"deleteRange":if(P.fire===It)break;return f._promise("readwrite",function(){return(function $(U,I,M){return n.query({trans:U,values:!1,query:{index:r,range:I},limit:M}).then(function(j){var L=j.result;return F({type:"delete",keys:L,trans:U}).then(function(W){return 0<W.numFailures?Promise.reject(W.failures[0]):L.length<M?{failures:[],numFailures:0,lastResult:void 0}:$(U,d(d({},I),{lower:L[L.length-1],lowerOpen:!0}),M)})})})(o.trans,o.range,1e4)},!0)}return n.mutate(o);function F($){var U,I,M,j=Ct.trans,L=$.keys||Mr(r,$);if(!L)throw new Error("Keys missing");return($=$.type==="add"||$.type==="put"?d(d({},$),{keys:L}):d({},$)).type!=="delete"&&($.values=l([],$.values)),$.keys&&($.keys=l([],$.keys)),U=n,M=L,((I=$).type==="add"?Promise.resolve([]):U.getMany({trans:I.trans,keys:M,cache:"immutable"})).then(function(W){var Z=L.map(function(J,rt){var ft,bt,ht,gt=W[rt],wt={onerror:null,onsuccess:null};return $.type==="delete"?P.fire.call(wt,J,gt,j):$.type==="add"||gt===void 0?(ft=z.fire.call(wt,J,$.values[rt],j),J==null&&ft!=null&&($.keys[rt]=J=ft,r.outbound||G($.values[rt],r.keyPath,J))):(ft=Br(gt,$.values[rt]),(bt=D.fire.call(wt,ft,J,gt,j))&&(ht=$.values[rt],Object.keys(bt).forEach(function(yt){_(ht,yt)?ht[yt]=bt[yt]:G(ht,yt,bt[yt])}))),wt});return n.mutate($).then(function(J){for(var rt=J.failures,ft=J.results,bt=J.numFailures,J=J.lastResult,ht=0;ht<L.length;++ht){var gt=(ft||L)[ht],wt=Z[ht];gt==null?wt.onerror&&wt.onerror(rt[ht]):wt.onsuccess&&wt.onsuccess($.type==="put"&&W[ht]?$.values[ht]:gt)}return{failures:rt,results:ft,numFailures:bt,lastResult:J}}).catch(function(J){return Z.forEach(function(rt){return rt.onerror&&rt.onerror(J)}),Promise.reject(J)})})}}})}})}};function Ci(t,e,n){try{if(!e||e.keys.length<t.length)return null;for(var r=[],o=0,f=0;o<e.keys.length&&f<t.length;++o)Ft(e.keys[o],t[f])===0&&(r.push(n?Q(e.values[o]):e.values[o]),++f);return r.length===t.length?r:null}catch{return null}}var Ma={stack:"dbcore",level:-1,create:function(t){return{table:function(e){var n=t.table(e);return d(d({},n),{getMany:function(r){if(!r.cache)return n.getMany(r);var o=Ci(r.keys,r.trans._cache,r.cache==="clone");return o?_t.resolve(o):n.getMany(r).then(function(f){return r.trans._cache={keys:r.keys,values:r.cache==="clone"?Q(f):f},f})},mutate:function(r){return r.type!=="add"&&(r.trans._cache=null),n.mutate(r)}})}}}};function Si(t,e){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!e.schema.primaryKey.outbound}function Ai(t,e){switch(t){case"query":return e.values&&!e.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ja={stack:"dbcore",level:0,name:"Observability",create:function(t){var e=t.schema.name,n=new ae(t.MIN_KEY,t.MAX_KEY);return d(d({},t),{transaction:function(r,o,f){if(Ct.subscr&&o!=="readonly")throw new mt.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Ct.querier));return t.transaction(r,o,f)},table:function(r){var o=t.table(r),f=o.schema,b=f.primaryKey,$=f.indexes,P=b.extractKey,z=b.outbound,D=b.autoIncrement&&$.filter(function(I){return I.compound&&I.keyPath.includes(b.keyPath)}),F=d(d({},o),{mutate:function(I){function M(yt){return yt="idb://".concat(e,"/").concat(r,"/").concat(yt),J[yt]||(J[yt]=new ae)}var j,L,W,Z=I.trans,J=I.mutatedParts||(I.mutatedParts={}),rt=M(""),ft=M(":dels"),bt=I.type,wt=I.type==="deleteRange"?[I.range]:I.type==="delete"?[I.keys]:I.values.length<50?[Mr(b,I).filter(function(yt){return yt}),I.values]:[],ht=wt[0],gt=wt[1],wt=I.trans._cache;return c(ht)?(rt.addKeys(ht),(wt=bt==="delete"||ht.length===gt.length?Ci(ht,wt):null)||ft.addKeys(ht),(wt||gt)&&(j=M,L=wt,W=gt,f.indexes.forEach(function(yt){var St=j(yt.name||"");function zt(Mt){return Mt!=null?yt.extractKey(Mt):null}function Dt(Mt){return yt.multiEntry&&c(Mt)?Mt.forEach(function(ge){return St.addKey(ge)}):St.addKey(Mt)}(L||W).forEach(function(Mt,oe){var Rt=L&&zt(L[oe]),oe=W&&zt(W[oe]);Ft(Rt,oe)!==0&&(Rt!=null&&Dt(Rt),oe!=null&&Dt(oe))})}))):ht?(gt={from:(gt=ht.lower)!==null&&gt!==void 0?gt:t.MIN_KEY,to:(gt=ht.upper)!==null&&gt!==void 0?gt:t.MAX_KEY},ft.add(gt),rt.add(gt)):(rt.add(n),ft.add(n),f.indexes.forEach(function(yt){return M(yt.name).add(n)})),o.mutate(I).then(function(yt){return!ht||I.type!=="add"&&I.type!=="put"||(rt.addKeys(yt.results),D&&D.forEach(function(St){for(var zt=I.values.map(function(Rt){return St.extractKey(Rt)}),Dt=St.keyPath.findIndex(function(Rt){return Rt===b.keyPath}),Mt=0,ge=yt.results.length;Mt<ge;++Mt)zt[Mt][Dt]=yt.results[Mt];M(St.name).addKeys(zt)})),Z.mutatedParts=Xn(Z.mutatedParts||{},J),yt})}}),$=function(M){var j=M.query,M=j.index,j=j.range;return[M,new ae((M=j.lower)!==null&&M!==void 0?M:t.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:t.MAX_KEY)]},U={get:function(I){return[b,new ae(I.key)]},getMany:function(I){return[b,new ae().addKeys(I.keys)]},count:$,query:$,openCursor:$};return h(U).forEach(function(I){F[I]=function(M){var j=Ct.subscr,L=!!j,W=Si(Ct,o)&&Ai(I,M)?M.obsSet={}:j;if(L){var Z=function(gt){return gt="idb://".concat(e,"/").concat(r,"/").concat(gt),W[gt]||(W[gt]=new ae)},J=Z(""),rt=Z(":dels"),j=U[I](M),L=j[0],j=j[1];if((I==="query"&&L.isPrimaryKey&&!M.values?rt:Z(L.name||"")).add(j),!L.isPrimaryKey){if(I!=="count"){var ft=I==="query"&&z&&M.values&&o.query(d(d({},M),{values:!1}));return o[I].apply(this,arguments).then(function(gt){if(I==="query"){if(z&&M.values)return ft.then(function(zt){return zt=zt.result,J.addKeys(zt),gt});var wt=M.values?gt.result.map(P):gt.result;(M.values?J:rt).addKeys(wt)}else if(I==="openCursor"){var yt=gt,St=M.values;return yt&&Object.create(yt,{key:{get:function(){return rt.addKey(yt.primaryKey),yt.key}},primaryKey:{get:function(){var zt=yt.primaryKey;return rt.addKey(zt),zt}},value:{get:function(){return St&&J.addKey(yt.primaryKey),yt.value}}})}return gt})}rt.add(n)}}return o[I].apply(this,arguments)}}),F}})}};function Ei(t,e,n){if(n.numFailures===0)return e;if(e.type==="deleteRange")return null;var r=e.keys?e.keys.length:"values"in e&&e.values?e.values.length:1;return n.numFailures===r?null:(e=d({},e),c(e.keys)&&(e.keys=e.keys.filter(function(o,f){return!(f in n.failures)})),"values"in e&&c(e.values)&&(e.values=e.values.filter(function(o,f){return!(f in n.failures)})),e)}function jr(t,e){return n=t,((r=e).lower===void 0||(r.lowerOpen?0<Ft(n,r.lower):0<=Ft(n,r.lower)))&&(t=t,(e=e).upper===void 0||(e.upperOpen?Ft(t,e.upper)<0:Ft(t,e.upper)<=0));var n,r}function Oi(t,e,U,r,o,f){if(!U||U.length===0)return t;var b=e.query.index,P=b.multiEntry,z=e.query.range,D=r.schema.primaryKey.extractKey,F=b.extractKey,$=(b.lowLevelIndex||b).extractKey,U=U.reduce(function(I,M){var j=I,L=[];if(M.type==="add"||M.type==="put")for(var W=new ae,Z=M.values.length-1;0<=Z;--Z){var J,rt=M.values[Z],ft=D(rt);W.hasKey(ft)||(J=F(rt),(P&&c(J)?J.some(function(yt){return jr(yt,z)}):jr(J,z))&&(W.addKey(ft),L.push(rt)))}switch(M.type){case"add":var bt=new ae().addKeys(e.values?I.map(function(St){return D(St)}):I),j=I.concat(e.values?L.filter(function(St){return St=D(St),!bt.hasKey(St)&&(bt.addKey(St),!0)}):L.map(function(St){return D(St)}).filter(function(St){return!bt.hasKey(St)&&(bt.addKey(St),!0)}));break;case"put":var ht=new ae().addKeys(M.values.map(function(St){return D(St)}));j=I.filter(function(St){return!ht.hasKey(e.values?D(St):St)}).concat(e.values?L:L.map(function(St){return D(St)}));break;case"delete":var gt=new ae().addKeys(M.keys);j=I.filter(function(St){return!gt.hasKey(e.values?D(St):St)});break;case"deleteRange":var wt=M.range;j=I.filter(function(St){return!jr(D(St),wt)})}return j},t);return U===t?t:(U.sort(function(I,M){return Ft($(I),$(M))||Ft(D(I),D(M))}),e.limit&&e.limit<1/0&&(U.length>e.limit?U.length=e.limit:t.length===e.limit&&U.length<e.limit&&(o.dirty=!0)),f?Object.freeze(U):U)}function Pi(t,e){return Ft(t.lower,e.lower)===0&&Ft(t.upper,e.upper)===0&&!!t.lowerOpen==!!e.lowerOpen&&!!t.upperOpen==!!e.upperOpen}function Fa(t,e){return(function(n,r,o,f){if(n===void 0)return r!==void 0?-1:0;if(r===void 0)return 1;if((r=Ft(n,r))===0){if(o&&f)return 0;if(o)return 1;if(f)return-1}return r})(t.lower,e.lower,t.lowerOpen,e.lowerOpen)<=0&&0<=(function(n,r,o,f){if(n===void 0)return r!==void 0?1:0;if(r===void 0)return-1;if((r=Ft(n,r))===0){if(o&&f)return 0;if(o)return-1;if(f)return 1}return r})(t.upper,e.upper,t.upperOpen,e.upperOpen)}function Na(t,e,n,r){t.subscribers.add(n),r.addEventListener("abort",function(){var o,f;t.subscribers.delete(n),t.subscribers.size===0&&(o=t,f=e,setTimeout(function(){o.subscribers.size===0&&$t(f,o)},3e3))})}var La={stack:"dbcore",level:0,name:"Cache",create:function(t){var e=t.schema.name;return d(d({},t),{transaction:function(n,r,o){var f,b,P=t.transaction(n,r,o);return r==="readwrite"&&(b=(f=new AbortController).signal,o=function(z){return function(){if(f.abort(),r==="readwrite"){for(var D=new Set,F=0,$=n;F<$.length;F++){var U=$[F],I=He["idb://".concat(e,"/").concat(U)];if(I){var M=t.table(U),j=I.optimisticOps.filter(function(St){return St.trans===P});if(P._explicit&&z&&P.mutatedParts)for(var L=0,W=Object.values(I.queries.query);L<W.length;L++)for(var Z=0,J=(bt=W[L]).slice();Z<J.length;Z++)$r((ht=J[Z]).obsSet,P.mutatedParts)&&($t(bt,ht),ht.subscribers.forEach(function(St){return D.add(St)}));else if(0<j.length){I.optimisticOps=I.optimisticOps.filter(function(St){return St.trans!==P});for(var rt=0,ft=Object.values(I.queries.query);rt<ft.length;rt++)for(var bt,ht,gt,wt=0,yt=(bt=ft[rt]).slice();wt<yt.length;wt++)(ht=yt[wt]).res!=null&&P.mutatedParts&&(z&&!ht.dirty?(gt=Object.isFrozen(ht.res),gt=Oi(ht.res,ht.req,j,M,ht,gt),ht.dirty?($t(bt,ht),ht.subscribers.forEach(function(St){return D.add(St)})):gt!==ht.res&&(ht.res=gt,ht.promise=_t.resolve({result:gt}))):(ht.dirty&&$t(bt,ht),ht.subscribers.forEach(function(St){return D.add(St)})))}}}D.forEach(function(St){return St()})}}},P.addEventListener("abort",o(!1),{signal:b}),P.addEventListener("error",o(!1),{signal:b}),P.addEventListener("complete",o(!0),{signal:b})),P},table:function(n){var r=t.table(n),o=r.schema.primaryKey;return d(d({},r),{mutate:function(f){var b=Ct.trans;if(o.outbound||b.db._options.cache==="disabled"||b.explicit||b.idbtrans.mode!=="readwrite")return r.mutate(f);var P=He["idb://".concat(e,"/").concat(n)];return P?(b=r.mutate(f),f.type!=="add"&&f.type!=="put"||!(50<=f.values.length||Mr(o,f).some(function(z){return z==null}))?(P.optimisticOps.push(f),f.mutatedParts&&Gn(f.mutatedParts),b.then(function(z){0<z.numFailures&&($t(P.optimisticOps,f),(z=Ei(0,f,z))&&P.optimisticOps.push(z),f.mutatedParts&&Gn(f.mutatedParts))}),b.catch(function(){$t(P.optimisticOps,f),f.mutatedParts&&Gn(f.mutatedParts)})):b.then(function(z){var D=Ei(0,d(d({},f),{values:f.values.map(function(F,$){var U;return z.failures[$]?F:(F=(U=o.keyPath)!==null&&U!==void 0&&U.includes(".")?Q(F):d({},F),G(F,o.keyPath,z.results[$]),F)})}),z);P.optimisticOps.push(D),queueMicrotask(function(){return f.mutatedParts&&Gn(f.mutatedParts)})}),b):r.mutate(f)},query:function(f){if(!Si(Ct,r)||!Ai("query",f))return r.query(f);var b=((D=Ct.trans)===null||D===void 0?void 0:D.db._options.cache)==="immutable",$=Ct,P=$.requery,z=$.signal,D=(function(M,j,L,W){var Z=He["idb://".concat(M,"/").concat(j)];if(!Z)return[];if(!(j=Z.queries[L]))return[null,!1,Z,null];var J=j[(W.query?W.query.index.name:null)||""];if(!J)return[null,!1,Z,null];switch(L){case"query":var rt=J.find(function(ft){return ft.req.limit===W.limit&&ft.req.values===W.values&&Pi(ft.req.query.range,W.query.range)});return rt?[rt,!0,Z,J]:[J.find(function(ft){return("limit"in ft.req?ft.req.limit:1/0)>=W.limit&&(!W.values||ft.req.values)&&Fa(ft.req.query.range,W.query.range)}),!1,Z,J];case"count":return rt=J.find(function(ft){return Pi(ft.req.query.range,W.query.range)}),[rt,!!rt,Z,J]}})(e,n,"query",f),F=D[0],$=D[1],U=D[2],I=D[3];return F&&$?F.obsSet=f.obsSet:($=r.query(f).then(function(M){var j=M.result;if(F&&(F.res=j),b){for(var L=0,W=j.length;L<W;++L)Object.freeze(j[L]);Object.freeze(j)}else M.result=Q(j);return M}).catch(function(M){return I&&F&&$t(I,F),Promise.reject(M)}),F={obsSet:f.obsSet,promise:$,subscribers:new Set,type:"query",req:f,dirty:!1},I?I.push(F):(I=[F],(U=U||(He["idb://".concat(e,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[f.query.index.name||""]=I)),Na(F,I,P,z),F.promise.then(function(M){return{result:Oi(M.result,f,U?.optimisticOps,r,F,b)}})}})}})}};function Qn(t,e){return new Proxy(t,{get:function(n,r,o){return r==="db"?e:Reflect.get(n,r,o)}})}var Pe=(Gt.prototype.version=function(t){if(isNaN(t)||t<.1)throw new mt.Type("Given version is not a positive number");if(t=Math.round(10*t)/10,this.idbdb||this._state.isBeingOpened)throw new mt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var e=this._versions,n=e.filter(function(r){return r._cfg.version===t})[0];return n||(n=new this.Version(t),e.push(n),e.sort(Ta),n.stores({}),this._state.autoSchema=!1,n)},Gt.prototype._whenReady=function(t){var e=this;return this.idbdb&&(this._state.openComplete||Ct.letThrough||this._vip)?t():new _t(function(n,r){if(e._state.openComplete)return r(new mt.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return void r(new mt.DatabaseClosed);e.open().catch(It)}e._state.dbReadyPromise.then(n,r)}).then(t)},Gt.prototype.use=function(t){var e=t.stack,n=t.create,r=t.level,o=t.name;return o&&this.unuse({stack:e,name:o}),t=this._middlewares[e]||(this._middlewares[e]=[]),t.push({stack:e,create:n,level:r??10,name:o}),t.sort(function(f,b){return f.level-b.level}),this},Gt.prototype.unuse=function(t){var e=t.stack,n=t.name,r=t.create;return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(function(o){return r?o.create!==r:!!n&&o.name!==n})),this},Gt.prototype.open=function(){var t=this;return Ke(ve,function(){return Da(t)})},Gt.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state,e=an.indexOf(this);if(0<=e&&an.splice(e,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new _t(function(n){t.dbReadyResolve=n}),t.openCanceller=new _t(function(n,r){t.cancelOpen=r}))},Gt.prototype.close=function(n){var e=(n===void 0?{disableAutoOpen:!0}:n).disableAutoOpen,n=this._state;e?(n.isBeingOpened&&n.cancelOpen(new mt.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new mt.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Gt.prototype.delete=function(t){var e=this;t===void 0&&(t={disableAutoOpen:!0});var n=0<arguments.length&&typeof arguments[0]!="object",r=this._state;return new _t(function(o,f){function b(){e.close(t);var P=e._deps.indexedDB.deleteDatabase(e.name);P.onsuccess=Vt(function(){var z,D,F;z=e._deps,D=e.name,F=z.indexedDB,z=z.IDBKeyRange,Or(F)||D===jn||Er(F,z).delete(D).catch(It),o()}),P.onerror=ke(f),P.onblocked=e._fireOnBlocked}if(n)throw new mt.InvalidArgument("Invalid closeOptions argument to db.delete()");r.isBeingOpened?r.dbReadyPromise.then(b):b()})},Gt.prototype.backendDB=function(){return this.idbdb},Gt.prototype.isOpen=function(){return this.idbdb!==null},Gt.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},Gt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Gt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Gt.prototype,"tables",{get:function(){var t=this;return h(this._allTables).map(function(e){return t._allTables[e]})},enumerable:!1,configurable:!0}),Gt.prototype.transaction=function(){var t=function(e,n,r){var o=arguments.length;if(o<2)throw new mt.InvalidArgument("Too few arguments");for(var f=new Array(o-1);--o;)f[o-1]=arguments[o];return r=f.pop(),[e,pt(f),r]}.apply(this,arguments);return this._transaction.apply(this,t)},Gt.prototype._transaction=function(t,e,n){var r=this,o=Ct.trans;o&&o.db===this&&t.indexOf("!")===-1||(o=null);var f,b,P=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");try{if(b=e.map(function(D){if(D=D instanceof r.Table?D.name:D,typeof D!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return D}),t=="r"||t===gr)f=gr;else{if(t!="rw"&&t!=vr)throw new mt.InvalidArgument("Invalid transaction mode: "+t);f=vr}if(o){if(o.mode===gr&&f===vr){if(!P)throw new mt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");o=null}o&&b.forEach(function(D){if(o&&o.storeNames.indexOf(D)===-1){if(!P)throw new mt.SubTransaction("Table "+D+" not included in parent transaction.");o=null}}),P&&o&&!o.active&&(o=null)}}catch(D){return o?o._promise(null,function(F,$){$(D)}):Xt(D)}var z=function D(F,$,U,I,M){return _t.resolve().then(function(){var j=Ct.transless||Ct,L=F._createTransaction($,U,F._dbSchema,I);if(L.explicit=!0,j={trans:L,transless:j},I)L.idbtrans=I.idbtrans;else try{L.create(),L.idbtrans._explicit=!0,F._state.PR1398_maxLoop=3}catch(J){return J.name===Qt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return D(F,$,U,null,M)})):Xt(J)}var W,Z=Y(M);return Z&&rn(),j=_t.follow(function(){var J;(W=M.call(L,L))&&(Z?(J=Be.bind(null,null),W.then(J,J)):typeof W.next=="function"&&typeof W.throw=="function"&&(W=Ir(W)))},j),(W&&typeof W.then=="function"?_t.resolve(W).then(function(J){return L.active?J:Xt(new mt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return W})).then(function(J){return I&&L._resolve(),L._completion.then(function(){return J})}).catch(function(J){return L._reject(J),Xt(J)})})}.bind(null,this,f,b,o,n);return o?o._promise(f,z,"lock"):Ct.trans?Ke(Ct.transless,function(){return r._whenReady(z)}):this._whenReady(z)},Gt.prototype.table=function(t){if(!_(this._allTables,t))throw new mt.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},Gt);function Gt(t,e){var n=this;this._middlewares={},this.verno=0;var r=Gt.dependencies;this._options=e=d({addons:Gt.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,cache:"cloned"},e),this._deps={indexedDB:e.indexedDB,IDBKeyRange:e.IDBKeyRange},r=e.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var o,f,b,P,z,D={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:It,dbReadyPromise:null,cancelOpen:It,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:e.autoOpen};D.dbReadyPromise=new _t(function($){D.dbReadyResolve=$}),D.openCanceller=new _t(function($,U){D.cancelOpen=U}),this._state=D,this.name=t,this.on=gn(this,"populate","blocked","versionchange","close",{ready:[ot,It]}),this.once=function($,U){var I=function(){for(var M=[],j=0;j<arguments.length;j++)M[j]=arguments[j];n.on($).unsubscribe(I),U.apply(n,M)};return n.on($,I)},this.on.ready.subscribe=B(this.on.ready.subscribe,function($){return function(U,I){Gt.vip(function(){var M,j=n._state;j.openComplete?(j.dbOpenError||_t.resolve().then(U),I&&$(U)):j.onReadyBeingFired?(j.onReadyBeingFired.push(U),I&&$(U)):($(U),M=n,I||$(function L(){M.on.ready.unsubscribe(U),M.on.ready.unsubscribe(L)}))})}}),this.Collection=(o=this,vn(ka.prototype,function(W,L){this.db=o;var I=ii,M=null;if(L)try{I=L()}catch(Z){M=Z}var j=W._ctx,L=j.table,W=L.hook.reading.fire;this._ctx={table:L,index:j.index,isPrimKey:!j.index||L.schema.primKey.keyPath&&j.index===L.schema.primKey.name,range:I,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:M,or:j.or,valueMapper:W!==ie?W:null}})),this.Table=(f=this,vn(ci.prototype,function($,U,I){this.db=f,this._tx=I,this.name=$,this.schema=U,this.hook=f._allTables[$]?f._allTables[$].hook:gn(null,{creating:[X,It],reading:[s,ie],updating:[x,It],deleting:[O,It]})})),this.Transaction=(b=this,vn(Aa.prototype,function($,U,I,M,j){var L=this;$!=="readonly"&&U.forEach(function(W){W=(W=I[W])===null||W===void 0?void 0:W.yProps,W&&(U=U.concat(W.map(function(Z){return Z.updatesTable})))}),this.db=b,this.mode=$,this.storeNames=U,this.schema=I,this.chromeTransactionDurability=M,this.idbtrans=null,this.on=gn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new _t(function(W,Z){L._resolve=W,L._reject=Z}),this._completion.then(function(){L.active=!1,L.on.complete.fire()},function(W){var Z=L.active;return L.active=!1,L.on.error.fire(W),L.parent?L.parent._reject(W):Z&&L.idbtrans&&L.idbtrans.abort(),Xt(W)})})),this.Version=(P=this,vn(za.prototype,function($){this.db=P,this._cfg={version:$,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(z=this,vn(mi.prototype,function($,U,I){if(this.db=z,this._ctx={table:$,index:U===":id"?null:U,or:I},this._cmp=this._ascending=Ft,this._descending=function(M,j){return Ft(j,M)},this._max=function(M,j){return 0<Ft(M,j)?M:j},this._min=function(M,j){return Ft(M,j)<0?M:j},this._IDBKeyRange=z._deps.IDBKeyRange,!this._IDBKeyRange)throw new mt.MissingAPI})),this.on("versionchange",function($){0<$.newVersion?console.warn("Another connection wants to upgrade database '".concat(n.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(n.name,"'. Closing db now to resume the delete request.")),n.close({disableAutoOpen:!1})}),this.on("blocked",function($){!$.newVersion||$.newVersion<$.oldVersion?console.warn("Dexie.delete('".concat(n.name,"') was blocked")):console.warn("Upgrade '".concat(n.name,"' blocked by other connection holding version ").concat($.oldVersion/10))}),this._maxKey=wn(e.IDBKeyRange),this._createTransaction=function($,U,I,M){return new n.Transaction($,U,I,n._options.chromeTransactionDurability,M)},this._fireOnBlocked=function($){n.on("blocked").fire($),an.filter(function(U){return U.name===n.name&&U!==n&&!U._state.vcFired}).map(function(U){return U.on("versionchange").fire($)})},this.use(Ma),this.use(La),this.use(ja),this.use(Ia),this.use(Ba);var F=new Proxy(this,{get:function($,U,I){if(U==="_vip")return!0;if(U==="table")return function(j){return Qn(n.table(j),F)};var M=Reflect.get($,U,I);return M instanceof ci?Qn(M,F):U==="tables"?M.map(function(j){return Qn(j,F)}):U==="_createTransaction"?function(){return Qn(M.apply(this,arguments),F)}:M}});this.vip=F,r.forEach(function($){return $(n)})}var tr,ye=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ua=(Fr.prototype.subscribe=function(t,e,n){return this._subscribe(t&&typeof t!="function"?t:{next:t,error:e,complete:n})},Fr.prototype[ye]=function(){return this},Fr);function Fr(t){this._subscribe=t}try{tr={indexedDB:u.indexedDB||u.mozIndexedDB||u.webkitIndexedDB||u.msIndexedDB,IDBKeyRange:u.IDBKeyRange||u.webkitIDBKeyRange}}catch{tr={indexedDB:null,IDBKeyRange:null}}function Ti(t){var e,n=!1,r=new Ua(function(o){var f=Y(t),b,P=!1,z={},D={},F={get closed(){return P},unsubscribe:function(){P||(P=!0,b&&b.abort(),$&&Fe.storagemutated.unsubscribe(I))}};o.start&&o.start(F);var $=!1,U=function(){return mr(M)},I=function(j){Xn(z,j),$r(D,z)&&U()},M=function(){var j,L,W;!P&&tr.indexedDB&&(z={},j={},b&&b.abort(),b=new AbortController,W=(function(Z){var J=en();try{f&&rn();var rt=Ie(t,Z);return rt=f?rt.finally(Be):rt}finally{J&&nn()}})(L={subscr:j,signal:b.signal,requery:U,querier:t,trans:null}),Promise.resolve(W).then(function(Z){n=!0,e=Z,P||L.signal.aborted||(z={},(function(J){for(var rt in J)if(_(J,rt))return;return 1})(D=j)||$||(Fe(bn,I),$=!0),mr(function(){return!P&&o.next&&o.next(Z)}))},function(Z){n=!1,["DatabaseClosedError","AbortError"].includes(Z?.name)||P||mr(function(){P||o.error&&o.error(Z)})}))};return setTimeout(U,0),F});return r.hasValue=function(){return n},r.getValue=function(){return e},r}var Ze=Pe;function Nr(t){var e=Ne;try{Ne=!0,Fe.storagemutated.fire(t),Dr(t,!0)}finally{Ne=e}}E(Ze,d(d({},Wt),{delete:function(t){return new Ze(t,{addons:[]}).delete()},exists:function(t){return new Ze(t,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(t){try{return e=Ze.dependencies,n=e.indexedDB,e=e.IDBKeyRange,(Or(n)?Promise.resolve(n.databases()).then(function(r){return r.map(function(o){return o.name}).filter(function(o){return o!==jn})}):Er(n,e).toCollection().primaryKeys()).then(t)}catch{return Xt(new mt.MissingAPI)}var e,n},defineClass:function(){return function(t){g(this,t)}},ignoreTransaction:function(t){return Ct.trans?Ke(Ct.transless,t):t()},vip:Pr,async:function(t){return function(){try{var e=Ir(t.apply(this,arguments));return e&&typeof e.then=="function"?e:_t.resolve(e)}catch(n){return Xt(n)}}},spawn:function(t,e,n){try{var r=Ir(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:_t.resolve(r)}catch(o){return Xt(o)}},currentTransaction:{get:function(){return Ct.trans||null}},waitFor:function(t,e){return e=_t.resolve(typeof t=="function"?Ze.ignoreTransaction(t):t).timeout(e||6e4),Ct.trans?Ct.trans.waitFor(e):e},Promise:_t,debug:{get:function(){return at},set:function(t){H(t)}},derive:y,extend:g,props:E,override:B,Events:gn,on:Fe,liveQuery:Ti,extendObservabilitySet:Xn,getByKeyPath:nt,setByKeyPath:G,delByKeyPath:function(t,e){typeof e=="string"?G(t,e,void 0):"length"in e&&[].map.call(e,function(n){G(t,n,void 0)})},shallowClone:ut,deepClone:Q,getObjectDiff:Br,cmp:Ft,asap:K,minKey:-1/0,addons:[],connections:an,errnames:Qt,dependencies:tr,cache:He,semVer:"4.2.1",version:"4.2.1".split(".").map(function(t){return parseInt(t)}).reduce(function(t,e,n){return t+e/Math.pow(10,2*n)})})),Ze.maxKey=wn(Ze.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Fe(bn,function(t){Ne||(t=new CustomEvent(wr,{detail:t}),Ne=!0,dispatchEvent(t),Ne=!1)}),addEventListener(wr,function(t){t=t.detail,Ne||Nr(t)}));var un,Ne=!1,$i=function(){};return typeof BroadcastChannel<"u"&&(($i=function(){(un=new BroadcastChannel(wr)).onmessage=function(t){return t.data&&Nr(t.data)}})(),typeof un.unref=="function"&&un.unref(),Fe(bn,function(t){Ne||un.postMessage(t)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(t){if(!Pe.disableBfCache&&t.persisted){at&&console.debug("Dexie: handling persisted pagehide"),un?.close();for(var e=0,n=an;e<n.length;e++)n[e].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(t){!Pe.disableBfCache&&t.persisted&&(at&&console.debug("Dexie: handling persisted pageshow"),$i(),Nr({all:new ae(-1/0,[[]])}))})),_t.rejectionMapper=function(t,e){return!t||t instanceof Et||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Yt[t.name]?t:(e=new Yt[t.name](e||t.message,t),"stack"in t&&A(e,"stack",{get:function(){return this.inner.stack}}),e)},H(at),d(Pe,Object.freeze({__proto__:null,Dexie:Pe,liveQuery:Ti,Entity:ai,cmp:Ft,PropModification:mn,replacePrefix:function(t,e){return new mn({replacePrefix:[t,e]})},add:function(t){return new mn({add:t})},remove:function(t){return new mn({remove:t})},default:Pe,RangeSet:ae,mergeRanges:kn,rangesOverlap:wi}),{default:Pe}),Pe})})(ir)),ir.exports}var Ao=So();const Hr=na(Ao),qi=Symbol.for("Dexie"),ur=globalThis[qi]||(globalThis[qi]=Hr);if(Hr.semVer!==ur.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Hr.semVer} and ${ur.semVer}`);const{liveQuery:Ss,mergeRanges:As,rangesOverlap:Es,RangeSet:Os,cmp:Ps,Entity:Ts,PropModification:$s,replacePrefix:Rs,add:zs,remove:Ds,DexieYProvider:Is}=ur;class Eo extends ur{constructor(){super("AudioAnnotationDB"),this.version(1).stores({recordings:"id, title, createdAt, isAnnotated",annotations:"recordingId, completedAt, updatedAt"})}}const be=new Eo;async function ra(p){const{v4:i}=await ko(async()=>{const{v4:l}=await import("./index-gGVEG6Gs.js");return{v4:l}},[]),a=i(),d={...p,id:a,createdAt:Date.now(),isAnnotated:!1};return await be.recordings.add(d),a}async function ia(){return await be.recordings.orderBy("createdAt").reverse().toArray()}async function Oo(p){return await be.recordings.get(p)}async function Po(p,i){await be.recordings.update(p,i)}async function To(p){await be.recordings.delete(p),await be.annotations.delete(p)}async function Kr(p){await be.annotations.put(p),await be.recordings.update(p.recordingId,{isAnnotated:!0})}async function An(p){return await be.annotations.get(p)}async function $o(p){await be.annotations.delete(p),await be.recordings.update(p,{isAnnotated:!1})}async function Ro(){const p=await be.recordings.toArray(),i=/^Untitled (\d+)$/,a=p.map(d=>d.title.match(i)?.[1]).filter(Boolean).map(Number);return a.length>0?Math.max(...a)+1:1}function zo(p){const i=p.lastIndexOf(".");return i===-1?p:p.substring(0,i)}async function Do(p){return new Promise((i,a)=>{const d=new Audio,l=URL.createObjectURL(p);d.addEventListener("loadedmetadata",()=>{URL.revokeObjectURL(l),i(d.duration)}),d.addEventListener("error",()=>{URL.revokeObjectURL(l),a(new Error("Failed to load audio metadata"))}),d.src=l})}async function Io(p){if(!p.type.startsWith("audio/"))throw new Error("File must be an audio file");const i=zo(p.name),a=await Do(p);return{id:await ra({title:i,audioBlob:p,duration:a,source:"upload"}),title:i,duration:a}}async function Bo(p){const i=Array.from(p),a=[];for(const d of i)try{const l=await Io(d);a.push(l)}catch(l){console.error(`Failed to upload ${d.name}:`,l)}return a}function Mo(){return new Promise(p=>{const i=document.createElement("input");i.type="file",i.accept="audio/*",i.multiple=!0,i.addEventListener("change",()=>{p(i.files)}),i.addEventListener("cancel",()=>{p(null)}),i.click()})}function nr(p){throw new Error('Could not dynamically require "'+p+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var qr={exports:{}};var Wi;function jo(){return Wi||(Wi=1,(function(p,i){(function(a){p.exports=a()})(function(){return(function a(d,l,u){function h(k,C){if(!l[k]){if(!d[k]){var _=typeof nr=="function"&&nr;if(!C&&_)return _(k,!0);if(c)return c(k,!0);var E=new Error("Cannot find module '"+k+"'");throw E.code="MODULE_NOT_FOUND",E}var v=l[k]={exports:{}};d[k][0].call(v.exports,function(A){var y=d[k][1][A];return h(y||A)},v,v.exports,a,d,l,u)}return l[k].exports}for(var c=typeof nr=="function"&&nr,g=0;g<u.length;g++)h(u[g]);return h})({1:[function(a,d,l){var u=a("./utils"),h=a("./support"),c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";l.encode=function(g){for(var k,C,_,E,v,A,y,S=[],w=0,T=g.length,B=T,q=u.getTypeOf(g)!=="string";w<g.length;)B=T-w,_=q?(k=g[w++],C=w<T?g[w++]:0,w<T?g[w++]:0):(k=g.charCodeAt(w++),C=w<T?g.charCodeAt(w++):0,w<T?g.charCodeAt(w++):0),E=k>>2,v=(3&k)<<4|C>>4,A=1<B?(15&C)<<2|_>>6:64,y=2<B?63&_:64,S.push(c.charAt(E)+c.charAt(v)+c.charAt(A)+c.charAt(y));return S.join("")},l.decode=function(g){var k,C,_,E,v,A,y=0,S=0,w="data:";if(g.substr(0,w.length)===w)throw new Error("Invalid base64 input, it looks like a data url.");var T,B=3*(g=g.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(g.charAt(g.length-1)===c.charAt(64)&&B--,g.charAt(g.length-2)===c.charAt(64)&&B--,B%1!=0)throw new Error("Invalid base64 input, bad content length.");for(T=h.uint8array?new Uint8Array(0|B):new Array(0|B);y<g.length;)k=c.indexOf(g.charAt(y++))<<2|(E=c.indexOf(g.charAt(y++)))>>4,C=(15&E)<<4|(v=c.indexOf(g.charAt(y++)))>>2,_=(3&v)<<6|(A=c.indexOf(g.charAt(y++))),T[S++]=k,v!==64&&(T[S++]=C),A!==64&&(T[S++]=_);return T}},{"./support":30,"./utils":32}],2:[function(a,d,l){var u=a("./external"),h=a("./stream/DataWorker"),c=a("./stream/Crc32Probe"),g=a("./stream/DataLengthProbe");function k(C,_,E,v,A){this.compressedSize=C,this.uncompressedSize=_,this.crc32=E,this.compression=v,this.compressedContent=A}k.prototype={getContentWorker:function(){var C=new h(u.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new g("data_length")),_=this;return C.on("end",function(){if(this.streamInfo.data_length!==_.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),C},getCompressedWorker:function(){return new h(u.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},k.createWorkerFrom=function(C,_,E){return C.pipe(new c).pipe(new g("uncompressedSize")).pipe(_.compressWorker(E)).pipe(new g("compressedSize")).withStreamInfo("compression",_)},d.exports=k},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(a,d,l){var u=a("./stream/GenericWorker");l.STORE={magic:"\0\0",compressWorker:function(){return new u("STORE compression")},uncompressWorker:function(){return new u("STORE decompression")}},l.DEFLATE=a("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(a,d,l){var u=a("./utils"),h=(function(){for(var c,g=[],k=0;k<256;k++){c=k;for(var C=0;C<8;C++)c=1&c?3988292384^c>>>1:c>>>1;g[k]=c}return g})();d.exports=function(c,g){return c!==void 0&&c.length?u.getTypeOf(c)!=="string"?(function(k,C,_,E){var v=h,A=E+_;k^=-1;for(var y=E;y<A;y++)k=k>>>8^v[255&(k^C[y])];return-1^k})(0|g,c,c.length,0):(function(k,C,_,E){var v=h,A=E+_;k^=-1;for(var y=E;y<A;y++)k=k>>>8^v[255&(k^C.charCodeAt(y))];return-1^k})(0|g,c,c.length,0):0}},{"./utils":32}],5:[function(a,d,l){l.base64=!1,l.binary=!1,l.dir=!1,l.createFolders=!0,l.date=null,l.compression=null,l.compressionOptions=null,l.comment=null,l.unixPermissions=null,l.dosPermissions=null},{}],6:[function(a,d,l){var u=null;u=typeof Promise<"u"?Promise:a("lie"),d.exports={Promise:u}},{lie:37}],7:[function(a,d,l){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",h=a("pako"),c=a("./utils"),g=a("./stream/GenericWorker"),k=u?"uint8array":"array";function C(_,E){g.call(this,"FlateWorker/"+_),this._pako=null,this._pakoAction=_,this._pakoOptions=E,this.meta={}}l.magic="\b\0",c.inherits(C,g),C.prototype.processChunk=function(_){this.meta=_.meta,this._pako===null&&this._createPako(),this._pako.push(c.transformTo(k,_.data),!1)},C.prototype.flush=function(){g.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},C.prototype.cleanUp=function(){g.prototype.cleanUp.call(this),this._pako=null},C.prototype._createPako=function(){this._pako=new h[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var _=this;this._pako.onData=function(E){_.push({data:E,meta:_.meta})}},l.compressWorker=function(_){return new C("Deflate",_)},l.uncompressWorker=function(){return new C("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(a,d,l){function u(v,A){var y,S="";for(y=0;y<A;y++)S+=String.fromCharCode(255&v),v>>>=8;return S}function h(v,A,y,S,w,T){var B,q,K=v.file,nt=v.compression,G=T!==k.utf8encode,ut=c.transformTo("string",T(K.name)),tt=c.transformTo("string",k.utf8encode(K.name)),pt=K.comment,Pt=c.transformTo("string",T(pt)),R=c.transformTo("string",k.utf8encode(pt)),Q=tt.length!==K.name.length,m=R.length!==pt.length,it="",Tt="",lt="",$t=K.dir,st=K.date,Ot={crc32:0,compressedSize:0,uncompressedSize:0};A&&!y||(Ot.crc32=v.crc32,Ot.compressedSize=v.compressedSize,Ot.uncompressedSize=v.uncompressedSize);var Y=0;A&&(Y|=8),G||!Q&&!m||(Y|=2048);var V=0,Et=0;$t&&(V|=16),w==="UNIX"?(Et=798,V|=(function(vt,qt){var Qt=vt;return vt||(Qt=qt?16893:33204),(65535&Qt)<<16})(K.unixPermissions,$t)):(Et=20,V|=(function(vt){return 63&(vt||0)})(K.dosPermissions)),B=st.getUTCHours(),B<<=6,B|=st.getUTCMinutes(),B<<=5,B|=st.getUTCSeconds()/2,q=st.getUTCFullYear()-1980,q<<=4,q|=st.getUTCMonth()+1,q<<=5,q|=st.getUTCDate(),Q&&(Tt=u(1,1)+u(C(ut),4)+tt,it+="up"+u(Tt.length,2)+Tt),m&&(lt=u(1,1)+u(C(Pt),4)+R,it+="uc"+u(lt.length,2)+lt);var xt="";return xt+=`
\0`,xt+=u(Y,2),xt+=nt.magic,xt+=u(B,2),xt+=u(q,2),xt+=u(Ot.crc32,4),xt+=u(Ot.compressedSize,4),xt+=u(Ot.uncompressedSize,4),xt+=u(ut.length,2),xt+=u(it.length,2),{fileRecord:_.LOCAL_FILE_HEADER+xt+ut+it,dirRecord:_.CENTRAL_FILE_HEADER+u(Et,2)+xt+u(Pt.length,2)+"\0\0\0\0"+u(V,4)+u(S,4)+ut+it+Pt}}var c=a("../utils"),g=a("../stream/GenericWorker"),k=a("../utf8"),C=a("../crc32"),_=a("../signature");function E(v,A,y,S){g.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=A,this.zipPlatform=y,this.encodeFileName=S,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}c.inherits(E,g),E.prototype.push=function(v){var A=v.meta.percent||0,y=this.entriesCount,S=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,g.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:y?(A+100*(y-S-1))/y:100}}))},E.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var A=this.streamFiles&&!v.file.dir;if(A){var y=h(v,A,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},E.prototype.closedSource=function(v){this.accumulate=!1;var A=this.streamFiles&&!v.file.dir,y=h(v,A,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),A)this.push({data:(function(S){return _.DATA_DESCRIPTOR+u(S.crc32,4)+u(S.compressedSize,4)+u(S.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},E.prototype.flush=function(){for(var v=this.bytesWritten,A=0;A<this.dirRecords.length;A++)this.push({data:this.dirRecords[A],meta:{percent:100}});var y=this.bytesWritten-v,S=(function(w,T,B,q,K){var nt=c.transformTo("string",K(q));return _.CENTRAL_DIRECTORY_END+"\0\0\0\0"+u(w,2)+u(w,2)+u(T,4)+u(B,4)+u(nt.length,2)+nt})(this.dirRecords.length,y,v,this.zipComment,this.encodeFileName);this.push({data:S,meta:{percent:100}})},E.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},E.prototype.registerPrevious=function(v){this._sources.push(v);var A=this;return v.on("data",function(y){A.processChunk(y)}),v.on("end",function(){A.closedSource(A.previous.streamInfo),A._sources.length?A.prepareNextSource():A.end()}),v.on("error",function(y){A.error(y)}),this},E.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},E.prototype.error=function(v){var A=this._sources;if(!g.prototype.error.call(this,v))return!1;for(var y=0;y<A.length;y++)try{A[y].error(v)}catch{}return!0},E.prototype.lock=function(){g.prototype.lock.call(this);for(var v=this._sources,A=0;A<v.length;A++)v[A].lock()},d.exports=E},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(a,d,l){var u=a("../compressions"),h=a("./ZipFileWorker");l.generateWorker=function(c,g,k){var C=new h(g.streamFiles,k,g.platform,g.encodeFileName),_=0;try{c.forEach(function(E,v){_++;var A=(function(T,B){var q=T||B,K=u[q];if(!K)throw new Error(q+" is not a valid compression method !");return K})(v.options.compression,g.compression),y=v.options.compressionOptions||g.compressionOptions||{},S=v.dir,w=v.date;v._compressWorker(A,y).withStreamInfo("file",{name:E,dir:S,date:w,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(C)}),C.entriesCount=_}catch(E){C.error(E)}return C}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(a,d,l){function u(){if(!(this instanceof u))return new u;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var h=new u;for(var c in this)typeof this[c]!="function"&&(h[c]=this[c]);return h}}(u.prototype=a("./object")).loadAsync=a("./load"),u.support=a("./support"),u.defaults=a("./defaults"),u.version="3.10.1",u.loadAsync=function(h,c){return new u().loadAsync(h,c)},u.external=a("./external"),d.exports=u},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(a,d,l){var u=a("./utils"),h=a("./external"),c=a("./utf8"),g=a("./zipEntries"),k=a("./stream/Crc32Probe"),C=a("./nodejsUtils");function _(E){return new h.Promise(function(v,A){var y=E.decompressed.getContentWorker().pipe(new k);y.on("error",function(S){A(S)}).on("end",function(){y.streamInfo.crc32!==E.decompressed.crc32?A(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}d.exports=function(E,v){var A=this;return v=u.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:c.utf8decode}),C.isNode&&C.isStream(E)?h.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",E,!0,v.optimizedBinaryString,v.base64).then(function(y){var S=new g(v);return S.load(y),S}).then(function(y){var S=[h.Promise.resolve(y)],w=y.files;if(v.checkCRC32)for(var T=0;T<w.length;T++)S.push(_(w[T]));return h.Promise.all(S)}).then(function(y){for(var S=y.shift(),w=S.files,T=0;T<w.length;T++){var B=w[T],q=B.fileNameStr,K=u.resolve(B.fileNameStr);A.file(K,B.decompressed,{binary:!0,optimizedBinaryString:!0,date:B.date,dir:B.dir,comment:B.fileCommentStr.length?B.fileCommentStr:null,unixPermissions:B.unixPermissions,dosPermissions:B.dosPermissions,createFolders:v.createFolders}),B.dir||(A.file(K).unsafeOriginalName=q)}return S.zipComment.length&&(A.comment=S.zipComment),A})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(a,d,l){var u=a("../utils"),h=a("../stream/GenericWorker");function c(g,k){h.call(this,"Nodejs stream input adapter for "+g),this._upstreamEnded=!1,this._bindStream(k)}u.inherits(c,h),c.prototype._bindStream=function(g){var k=this;(this._stream=g).pause(),g.on("data",function(C){k.push({data:C,meta:{percent:0}})}).on("error",function(C){k.isPaused?this.generatedError=C:k.error(C)}).on("end",function(){k.isPaused?k._upstreamEnded=!0:k.end()})},c.prototype.pause=function(){return!!h.prototype.pause.call(this)&&(this._stream.pause(),!0)},c.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},d.exports=c},{"../stream/GenericWorker":28,"../utils":32}],13:[function(a,d,l){var u=a("readable-stream").Readable;function h(c,g,k){u.call(this,g),this._helper=c;var C=this;c.on("data",function(_,E){C.push(_)||C._helper.pause(),k&&k(E)}).on("error",function(_){C.emit("error",_)}).on("end",function(){C.push(null)})}a("../utils").inherits(h,u),h.prototype._read=function(){this._helper.resume()},d.exports=h},{"../utils":32,"readable-stream":16}],14:[function(a,d,l){d.exports={isNode:typeof Buffer<"u",newBufferFrom:function(u,h){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(u,h);if(typeof u=="number")throw new Error('The "data" argument must not be a number');return new Buffer(u,h)},allocBuffer:function(u){if(Buffer.alloc)return Buffer.alloc(u);var h=new Buffer(u);return h.fill(0),h},isBuffer:function(u){return Buffer.isBuffer(u)},isStream:function(u){return u&&typeof u.on=="function"&&typeof u.pause=="function"&&typeof u.resume=="function"}}},{}],15:[function(a,d,l){function u(K,nt,G){var ut,tt=c.getTypeOf(nt),pt=c.extend(G||{},C);pt.date=pt.date||new Date,pt.compression!==null&&(pt.compression=pt.compression.toUpperCase()),typeof pt.unixPermissions=="string"&&(pt.unixPermissions=parseInt(pt.unixPermissions,8)),pt.unixPermissions&&16384&pt.unixPermissions&&(pt.dir=!0),pt.dosPermissions&&16&pt.dosPermissions&&(pt.dir=!0),pt.dir&&(K=w(K)),pt.createFolders&&(ut=S(K))&&T.call(this,ut,!0);var Pt=tt==="string"&&pt.binary===!1&&pt.base64===!1;G&&G.binary!==void 0||(pt.binary=!Pt),(nt instanceof _&&nt.uncompressedSize===0||pt.dir||!nt||nt.length===0)&&(pt.base64=!1,pt.binary=!0,nt="",pt.compression="STORE",tt="string");var R=null;R=nt instanceof _||nt instanceof g?nt:A.isNode&&A.isStream(nt)?new y(K,nt):c.prepareContent(K,nt,pt.binary,pt.optimizedBinaryString,pt.base64);var Q=new E(K,R,pt);this.files[K]=Q}var h=a("./utf8"),c=a("./utils"),g=a("./stream/GenericWorker"),k=a("./stream/StreamHelper"),C=a("./defaults"),_=a("./compressedObject"),E=a("./zipObject"),v=a("./generate"),A=a("./nodejsUtils"),y=a("./nodejs/NodejsStreamInputAdapter"),S=function(K){K.slice(-1)==="/"&&(K=K.substring(0,K.length-1));var nt=K.lastIndexOf("/");return 0<nt?K.substring(0,nt):""},w=function(K){return K.slice(-1)!=="/"&&(K+="/"),K},T=function(K,nt){return nt=nt!==void 0?nt:C.createFolders,K=w(K),this.files[K]||u.call(this,K,null,{dir:!0,createFolders:nt}),this.files[K]};function B(K){return Object.prototype.toString.call(K)==="[object RegExp]"}var q={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(K){var nt,G,ut;for(nt in this.files)ut=this.files[nt],(G=nt.slice(this.root.length,nt.length))&&nt.slice(0,this.root.length)===this.root&&K(G,ut)},filter:function(K){var nt=[];return this.forEach(function(G,ut){K(G,ut)&&nt.push(ut)}),nt},file:function(K,nt,G){if(arguments.length!==1)return K=this.root+K,u.call(this,K,nt,G),this;if(B(K)){var ut=K;return this.filter(function(pt,Pt){return!Pt.dir&&ut.test(pt)})}var tt=this.files[this.root+K];return tt&&!tt.dir?tt:null},folder:function(K){if(!K)return this;if(B(K))return this.filter(function(tt,pt){return pt.dir&&K.test(tt)});var nt=this.root+K,G=T.call(this,nt),ut=this.clone();return ut.root=G.name,ut},remove:function(K){K=this.root+K;var nt=this.files[K];if(nt||(K.slice(-1)!=="/"&&(K+="/"),nt=this.files[K]),nt&&!nt.dir)delete this.files[K];else for(var G=this.filter(function(tt,pt){return pt.name.slice(0,K.length)===K}),ut=0;ut<G.length;ut++)delete this.files[G[ut].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(K){var nt,G={};try{if((G=c.extend(K||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:h.utf8encode})).type=G.type.toLowerCase(),G.compression=G.compression.toUpperCase(),G.type==="binarystring"&&(G.type="string"),!G.type)throw new Error("No output type specified.");c.checkSupport(G.type),G.platform!=="darwin"&&G.platform!=="freebsd"&&G.platform!=="linux"&&G.platform!=="sunos"||(G.platform="UNIX"),G.platform==="win32"&&(G.platform="DOS");var ut=G.comment||this.comment||"";nt=v.generateWorker(this,G,ut)}catch(tt){(nt=new g("error")).error(tt)}return new k(nt,G.type||"string",G.mimeType)},generateAsync:function(K,nt){return this.generateInternalStream(K).accumulate(nt)},generateNodeStream:function(K,nt){return(K=K||{}).type||(K.type="nodebuffer"),this.generateInternalStream(K).toNodejsStream(nt)}};d.exports=q},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(a,d,l){d.exports=a("stream")},{stream:void 0}],17:[function(a,d,l){var u=a("./DataReader");function h(c){u.call(this,c);for(var g=0;g<this.data.length;g++)c[g]=255&c[g]}a("../utils").inherits(h,u),h.prototype.byteAt=function(c){return this.data[this.zero+c]},h.prototype.lastIndexOfSignature=function(c){for(var g=c.charCodeAt(0),k=c.charCodeAt(1),C=c.charCodeAt(2),_=c.charCodeAt(3),E=this.length-4;0<=E;--E)if(this.data[E]===g&&this.data[E+1]===k&&this.data[E+2]===C&&this.data[E+3]===_)return E-this.zero;return-1},h.prototype.readAndCheckSignature=function(c){var g=c.charCodeAt(0),k=c.charCodeAt(1),C=c.charCodeAt(2),_=c.charCodeAt(3),E=this.readData(4);return g===E[0]&&k===E[1]&&C===E[2]&&_===E[3]},h.prototype.readData=function(c){if(this.checkOffset(c),c===0)return[];var g=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,g},d.exports=h},{"../utils":32,"./DataReader":18}],18:[function(a,d,l){var u=a("../utils");function h(c){this.data=c,this.length=c.length,this.index=0,this.zero=0}h.prototype={checkOffset:function(c){this.checkIndex(this.index+c)},checkIndex:function(c){if(this.length<this.zero+c||c<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+c+"). Corrupted zip ?")},setIndex:function(c){this.checkIndex(c),this.index=c},skip:function(c){this.setIndex(this.index+c)},byteAt:function(){},readInt:function(c){var g,k=0;for(this.checkOffset(c),g=this.index+c-1;g>=this.index;g--)k=(k<<8)+this.byteAt(g);return this.index+=c,k},readString:function(c){return u.transformTo("string",this.readData(c))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var c=this.readInt(4);return new Date(Date.UTC(1980+(c>>25&127),(c>>21&15)-1,c>>16&31,c>>11&31,c>>5&63,(31&c)<<1))}},d.exports=h},{"../utils":32}],19:[function(a,d,l){var u=a("./Uint8ArrayReader");function h(c){u.call(this,c)}a("../utils").inherits(h,u),h.prototype.readData=function(c){this.checkOffset(c);var g=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,g},d.exports=h},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(a,d,l){var u=a("./DataReader");function h(c){u.call(this,c)}a("../utils").inherits(h,u),h.prototype.byteAt=function(c){return this.data.charCodeAt(this.zero+c)},h.prototype.lastIndexOfSignature=function(c){return this.data.lastIndexOf(c)-this.zero},h.prototype.readAndCheckSignature=function(c){return c===this.readData(4)},h.prototype.readData=function(c){this.checkOffset(c);var g=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,g},d.exports=h},{"../utils":32,"./DataReader":18}],21:[function(a,d,l){var u=a("./ArrayReader");function h(c){u.call(this,c)}a("../utils").inherits(h,u),h.prototype.readData=function(c){if(this.checkOffset(c),c===0)return new Uint8Array(0);var g=this.data.subarray(this.zero+this.index,this.zero+this.index+c);return this.index+=c,g},d.exports=h},{"../utils":32,"./ArrayReader":17}],22:[function(a,d,l){var u=a("../utils"),h=a("../support"),c=a("./ArrayReader"),g=a("./StringReader"),k=a("./NodeBufferReader"),C=a("./Uint8ArrayReader");d.exports=function(_){var E=u.getTypeOf(_);return u.checkSupport(E),E!=="string"||h.uint8array?E==="nodebuffer"?new k(_):h.uint8array?new C(u.transformTo("uint8array",_)):new c(u.transformTo("array",_)):new g(_)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(a,d,l){l.LOCAL_FILE_HEADER="PK",l.CENTRAL_FILE_HEADER="PK",l.CENTRAL_DIRECTORY_END="PK",l.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",l.ZIP64_CENTRAL_DIRECTORY_END="PK",l.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(a,d,l){var u=a("./GenericWorker"),h=a("../utils");function c(g){u.call(this,"ConvertWorker to "+g),this.destType=g}h.inherits(c,u),c.prototype.processChunk=function(g){this.push({data:h.transformTo(this.destType,g.data),meta:g.meta})},d.exports=c},{"../utils":32,"./GenericWorker":28}],25:[function(a,d,l){var u=a("./GenericWorker"),h=a("../crc32");function c(){u.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}a("../utils").inherits(c,u),c.prototype.processChunk=function(g){this.streamInfo.crc32=h(g.data,this.streamInfo.crc32||0),this.push(g)},d.exports=c},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(a,d,l){var u=a("../utils"),h=a("./GenericWorker");function c(g){h.call(this,"DataLengthProbe for "+g),this.propName=g,this.withStreamInfo(g,0)}u.inherits(c,h),c.prototype.processChunk=function(g){if(g){var k=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=k+g.data.length}h.prototype.processChunk.call(this,g)},d.exports=c},{"../utils":32,"./GenericWorker":28}],27:[function(a,d,l){var u=a("../utils"),h=a("./GenericWorker");function c(g){h.call(this,"DataWorker");var k=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,g.then(function(C){k.dataIsReady=!0,k.data=C,k.max=C&&C.length||0,k.type=u.getTypeOf(C),k.isPaused||k._tickAndRepeat()},function(C){k.error(C)})}u.inherits(c,h),c.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this.data=null},c.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,u.delay(this._tickAndRepeat,[],this)),!0)},c.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(u.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},c.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var g=null,k=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":g=this.data.substring(this.index,k);break;case"uint8array":g=this.data.subarray(this.index,k);break;case"array":case"nodebuffer":g=this.data.slice(this.index,k)}return this.index=k,this.push({data:g,meta:{percent:this.max?this.index/this.max*100:0}})},d.exports=c},{"../utils":32,"./GenericWorker":28}],28:[function(a,d,l){function u(h){this.name=h||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}u.prototype={push:function(h){this.emit("data",h)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(h){this.emit("error",h)}return!0},error:function(h){return!this.isFinished&&(this.isPaused?this.generatedError=h:(this.isFinished=!0,this.emit("error",h),this.previous&&this.previous.error(h),this.cleanUp()),!0)},on:function(h,c){return this._listeners[h].push(c),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(h,c){if(this._listeners[h])for(var g=0;g<this._listeners[h].length;g++)this._listeners[h][g].call(this,c)},pipe:function(h){return h.registerPrevious(this)},registerPrevious:function(h){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=h.streamInfo,this.mergeStreamInfo(),this.previous=h;var c=this;return h.on("data",function(g){c.processChunk(g)}),h.on("end",function(){c.end()}),h.on("error",function(g){c.error(g)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var h=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),h=!0),this.previous&&this.previous.resume(),!h},flush:function(){},processChunk:function(h){this.push(h)},withStreamInfo:function(h,c){return this.extraStreamInfo[h]=c,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var h in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,h)&&(this.streamInfo[h]=this.extraStreamInfo[h])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var h="Worker "+this.name;return this.previous?this.previous+" -> "+h:h}},d.exports=u},{}],29:[function(a,d,l){var u=a("../utils"),h=a("./ConvertWorker"),c=a("./GenericWorker"),g=a("../base64"),k=a("../support"),C=a("../external"),_=null;if(k.nodestream)try{_=a("../nodejs/NodejsStreamOutputAdapter")}catch{}function E(A,y){return new C.Promise(function(S,w){var T=[],B=A._internalType,q=A._outputType,K=A._mimeType;A.on("data",function(nt,G){T.push(nt),y&&y(G)}).on("error",function(nt){T=[],w(nt)}).on("end",function(){try{var nt=(function(G,ut,tt){switch(G){case"blob":return u.newBlob(u.transformTo("arraybuffer",ut),tt);case"base64":return g.encode(ut);default:return u.transformTo(G,ut)}})(q,(function(G,ut){var tt,pt=0,Pt=null,R=0;for(tt=0;tt<ut.length;tt++)R+=ut[tt].length;switch(G){case"string":return ut.join("");case"array":return Array.prototype.concat.apply([],ut);case"uint8array":for(Pt=new Uint8Array(R),tt=0;tt<ut.length;tt++)Pt.set(ut[tt],pt),pt+=ut[tt].length;return Pt;case"nodebuffer":return Buffer.concat(ut);default:throw new Error("concat : unsupported type '"+G+"'")}})(B,T),K);S(nt)}catch(G){w(G)}T=[]}).resume()})}function v(A,y,S){var w=y;switch(y){case"blob":case"arraybuffer":w="uint8array";break;case"base64":w="string"}try{this._internalType=w,this._outputType=y,this._mimeType=S,u.checkSupport(w),this._worker=A.pipe(new h(w)),A.lock()}catch(T){this._worker=new c("error"),this._worker.error(T)}}v.prototype={accumulate:function(A){return E(this,A)},on:function(A,y){var S=this;return A==="data"?this._worker.on(A,function(w){y.call(S,w.data,w.meta)}):this._worker.on(A,function(){u.delay(y,arguments,S)}),this},resume:function(){return u.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(A){if(u.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new _(this,{objectMode:this._outputType!=="nodebuffer"},A)}},d.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(a,d,l){if(l.base64=!0,l.array=!0,l.string=!0,l.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",l.nodebuffer=typeof Buffer<"u",l.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")l.blob=!1;else{var u=new ArrayBuffer(0);try{l.blob=new Blob([u],{type:"application/zip"}).size===0}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);h.append(u),l.blob=h.getBlob("application/zip").size===0}catch{l.blob=!1}}}try{l.nodestream=!!a("readable-stream").Readable}catch{l.nodestream=!1}},{"readable-stream":16}],31:[function(a,d,l){for(var u=a("./utils"),h=a("./support"),c=a("./nodejsUtils"),g=a("./stream/GenericWorker"),k=new Array(256),C=0;C<256;C++)k[C]=252<=C?6:248<=C?5:240<=C?4:224<=C?3:192<=C?2:1;k[254]=k[254]=1;function _(){g.call(this,"utf-8 decode"),this.leftOver=null}function E(){g.call(this,"utf-8 encode")}l.utf8encode=function(v){return h.nodebuffer?c.newBufferFrom(v,"utf-8"):(function(A){var y,S,w,T,B,q=A.length,K=0;for(T=0;T<q;T++)(64512&(S=A.charCodeAt(T)))==55296&&T+1<q&&(64512&(w=A.charCodeAt(T+1)))==56320&&(S=65536+(S-55296<<10)+(w-56320),T++),K+=S<128?1:S<2048?2:S<65536?3:4;for(y=h.uint8array?new Uint8Array(K):new Array(K),T=B=0;B<K;T++)(64512&(S=A.charCodeAt(T)))==55296&&T+1<q&&(64512&(w=A.charCodeAt(T+1)))==56320&&(S=65536+(S-55296<<10)+(w-56320),T++),S<128?y[B++]=S:(S<2048?y[B++]=192|S>>>6:(S<65536?y[B++]=224|S>>>12:(y[B++]=240|S>>>18,y[B++]=128|S>>>12&63),y[B++]=128|S>>>6&63),y[B++]=128|63&S);return y})(v)},l.utf8decode=function(v){return h.nodebuffer?u.transformTo("nodebuffer",v).toString("utf-8"):(function(A){var y,S,w,T,B=A.length,q=new Array(2*B);for(y=S=0;y<B;)if((w=A[y++])<128)q[S++]=w;else if(4<(T=k[w]))q[S++]=65533,y+=T-1;else{for(w&=T===2?31:T===3?15:7;1<T&&y<B;)w=w<<6|63&A[y++],T--;1<T?q[S++]=65533:w<65536?q[S++]=w:(w-=65536,q[S++]=55296|w>>10&1023,q[S++]=56320|1023&w)}return q.length!==S&&(q.subarray?q=q.subarray(0,S):q.length=S),u.applyFromCharCode(q)})(v=u.transformTo(h.uint8array?"uint8array":"array",v))},u.inherits(_,g),_.prototype.processChunk=function(v){var A=u.transformTo(h.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var y=A;(A=new Uint8Array(y.length+this.leftOver.length)).set(this.leftOver,0),A.set(y,this.leftOver.length)}else A=this.leftOver.concat(A);this.leftOver=null}var S=(function(T,B){var q;for((B=B||T.length)>T.length&&(B=T.length),q=B-1;0<=q&&(192&T[q])==128;)q--;return q<0||q===0?B:q+k[T[q]]>B?q:B})(A),w=A;S!==A.length&&(h.uint8array?(w=A.subarray(0,S),this.leftOver=A.subarray(S,A.length)):(w=A.slice(0,S),this.leftOver=A.slice(S,A.length))),this.push({data:l.utf8decode(w),meta:v.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:l.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},l.Utf8DecodeWorker=_,u.inherits(E,g),E.prototype.processChunk=function(v){this.push({data:l.utf8encode(v.data),meta:v.meta})},l.Utf8EncodeWorker=E},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(a,d,l){var u=a("./support"),h=a("./base64"),c=a("./nodejsUtils"),g=a("./external");function k(y){return y}function C(y,S){for(var w=0;w<y.length;++w)S[w]=255&y.charCodeAt(w);return S}a("setimmediate"),l.newBlob=function(y,S){l.checkSupport("blob");try{return new Blob([y],{type:S})}catch{try{var w=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return w.append(y),w.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(y,S,w){var T=[],B=0,q=y.length;if(q<=w)return String.fromCharCode.apply(null,y);for(;B<q;)S==="array"||S==="nodebuffer"?T.push(String.fromCharCode.apply(null,y.slice(B,Math.min(B+w,q)))):T.push(String.fromCharCode.apply(null,y.subarray(B,Math.min(B+w,q)))),B+=w;return T.join("")},stringifyByChar:function(y){for(var S="",w=0;w<y.length;w++)S+=String.fromCharCode(y[w]);return S},applyCanBeUsed:{uint8array:(function(){try{return u.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return u.nodebuffer&&String.fromCharCode.apply(null,c.allocBuffer(1)).length===1}catch{return!1}})()}};function E(y){var S=65536,w=l.getTypeOf(y),T=!0;if(w==="uint8array"?T=_.applyCanBeUsed.uint8array:w==="nodebuffer"&&(T=_.applyCanBeUsed.nodebuffer),T)for(;1<S;)try{return _.stringifyByChunk(y,w,S)}catch{S=Math.floor(S/2)}return _.stringifyByChar(y)}function v(y,S){for(var w=0;w<y.length;w++)S[w]=y[w];return S}l.applyFromCharCode=E;var A={};A.string={string:k,array:function(y){return C(y,new Array(y.length))},arraybuffer:function(y){return A.string.uint8array(y).buffer},uint8array:function(y){return C(y,new Uint8Array(y.length))},nodebuffer:function(y){return C(y,c.allocBuffer(y.length))}},A.array={string:E,array:k,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return c.newBufferFrom(y)}},A.arraybuffer={string:function(y){return E(new Uint8Array(y))},array:function(y){return v(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:k,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return c.newBufferFrom(new Uint8Array(y))}},A.uint8array={string:E,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:k,nodebuffer:function(y){return c.newBufferFrom(y)}},A.nodebuffer={string:E,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return A.nodebuffer.uint8array(y).buffer},uint8array:function(y){return v(y,new Uint8Array(y.length))},nodebuffer:k},l.transformTo=function(y,S){if(S=S||"",!y)return S;l.checkSupport(y);var w=l.getTypeOf(S);return A[w][y](S)},l.resolve=function(y){for(var S=y.split("/"),w=[],T=0;T<S.length;T++){var B=S[T];B==="."||B===""&&T!==0&&T!==S.length-1||(B===".."?w.pop():w.push(B))}return w.join("/")},l.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":u.nodebuffer&&c.isBuffer(y)?"nodebuffer":u.uint8array&&y instanceof Uint8Array?"uint8array":u.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},l.checkSupport=function(y){if(!u[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},l.MAX_VALUE_16BITS=65535,l.MAX_VALUE_32BITS=-1,l.pretty=function(y){var S,w,T="";for(w=0;w<(y||"").length;w++)T+="\\x"+((S=y.charCodeAt(w))<16?"0":"")+S.toString(16).toUpperCase();return T},l.delay=function(y,S,w){setImmediate(function(){y.apply(w||null,S||[])})},l.inherits=function(y,S){function w(){}w.prototype=S.prototype,y.prototype=new w},l.extend=function(){var y,S,w={};for(y=0;y<arguments.length;y++)for(S in arguments[y])Object.prototype.hasOwnProperty.call(arguments[y],S)&&w[S]===void 0&&(w[S]=arguments[y][S]);return w},l.prepareContent=function(y,S,w,T,B){return g.Promise.resolve(S).then(function(q){return u.blob&&(q instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(q))!==-1)&&typeof FileReader<"u"?new g.Promise(function(K,nt){var G=new FileReader;G.onload=function(ut){K(ut.target.result)},G.onerror=function(ut){nt(ut.target.error)},G.readAsArrayBuffer(q)}):q}).then(function(q){var K=l.getTypeOf(q);return K?(K==="arraybuffer"?q=l.transformTo("uint8array",q):K==="string"&&(B?q=h.decode(q):w&&T!==!0&&(q=(function(nt){return C(nt,u.uint8array?new Uint8Array(nt.length):new Array(nt.length))})(q))),q):g.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(a,d,l){var u=a("./reader/readerFor"),h=a("./utils"),c=a("./signature"),g=a("./zipEntry"),k=a("./support");function C(_){this.files=[],this.loadOptions=_}C.prototype={checkSignature:function(_){if(!this.reader.readAndCheckSignature(_)){this.reader.index-=4;var E=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+h.pretty(E)+", expected "+h.pretty(_)+")")}},isSignature:function(_,E){var v=this.reader.index;this.reader.setIndex(_);var A=this.reader.readString(4)===E;return this.reader.setIndex(v),A},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var _=this.reader.readData(this.zipCommentLength),E=k.uint8array?"uint8array":"array",v=h.transformTo(E,_);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var _,E,v,A=this.zip64EndOfCentralSize-44;0<A;)_=this.reader.readInt(2),E=this.reader.readInt(4),v=this.reader.readData(E),this.zip64ExtensibleData[_]={id:_,length:E,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var _,E;for(_=0;_<this.files.length;_++)E=this.files[_],this.reader.setIndex(E.localHeaderOffset),this.checkSignature(c.LOCAL_FILE_HEADER),E.readLocalPart(this.reader),E.handleUTF8(),E.processAttributes()},readCentralDir:function(){var _;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(c.CENTRAL_FILE_HEADER);)(_=new g({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(_);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var _=this.reader.lastIndexOfSignature(c.CENTRAL_DIRECTORY_END);if(_<0)throw this.isSignature(0,c.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(_);var E=_;if(this.checkSignature(c.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===h.MAX_VALUE_16BITS||this.diskWithCentralDirStart===h.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===h.MAX_VALUE_16BITS||this.centralDirRecords===h.MAX_VALUE_16BITS||this.centralDirSize===h.MAX_VALUE_32BITS||this.centralDirOffset===h.MAX_VALUE_32BITS){if(this.zip64=!0,(_=this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(_),this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,c.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var A=E-v;if(0<A)this.isSignature(E,c.CENTRAL_FILE_HEADER)||(this.reader.zero=A);else if(A<0)throw new Error("Corrupted zip: missing "+Math.abs(A)+" bytes.")},prepareReader:function(_){this.reader=u(_)},load:function(_){this.prepareReader(_),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},d.exports=C},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(a,d,l){var u=a("./reader/readerFor"),h=a("./utils"),c=a("./compressedObject"),g=a("./crc32"),k=a("./utf8"),C=a("./compressions"),_=a("./support");function E(v,A){this.options=v,this.loadOptions=A}E.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var A,y;if(v.skip(22),this.fileNameLength=v.readInt(2),y=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(y),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((A=(function(S){for(var w in C)if(Object.prototype.hasOwnProperty.call(C,w)&&C[w].magic===S)return C[w];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+h.pretty(this.compressionMethod)+" unknown (inner file : "+h.transformTo("string",this.fileName)+")");this.decompressed=new c(this.compressedSize,this.uncompressedSize,this.crc32,A,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var A=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(A),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=u(this.extraFields[1].value);this.uncompressedSize===h.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===h.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===h.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===h.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var A,y,S,w=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<w;)A=v.readInt(2),y=v.readInt(2),S=v.readData(y),this.extraFields[A]={id:A,length:y,value:S};v.setIndex(w)},handleUTF8:function(){var v=_.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=k.utf8decode(this.fileName),this.fileCommentStr=k.utf8decode(this.fileComment);else{var A=this.findExtraFieldUnicodePath();if(A!==null)this.fileNameStr=A;else{var y=h.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(y)}var S=this.findExtraFieldUnicodeComment();if(S!==null)this.fileCommentStr=S;else{var w=h.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(w)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var A=u(v.value);return A.readInt(1)!==1||g(this.fileName)!==A.readInt(4)?null:k.utf8decode(A.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var A=u(v.value);return A.readInt(1)!==1||g(this.fileComment)!==A.readInt(4)?null:k.utf8decode(A.readData(v.length-5))}return null}},d.exports=E},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(a,d,l){function u(A,y,S){this.name=A,this.dir=S.dir,this.date=S.date,this.comment=S.comment,this.unixPermissions=S.unixPermissions,this.dosPermissions=S.dosPermissions,this._data=y,this._dataBinary=S.binary,this.options={compression:S.compression,compressionOptions:S.compressionOptions}}var h=a("./stream/StreamHelper"),c=a("./stream/DataWorker"),g=a("./utf8"),k=a("./compressedObject"),C=a("./stream/GenericWorker");u.prototype={internalStream:function(A){var y=null,S="string";try{if(!A)throw new Error("No output type specified.");var w=(S=A.toLowerCase())==="string"||S==="text";S!=="binarystring"&&S!=="text"||(S="string"),y=this._decompressWorker();var T=!this._dataBinary;T&&!w&&(y=y.pipe(new g.Utf8EncodeWorker)),!T&&w&&(y=y.pipe(new g.Utf8DecodeWorker))}catch(B){(y=new C("error")).error(B)}return new h(y,S,"")},async:function(A,y){return this.internalStream(A).accumulate(y)},nodeStream:function(A,y){return this.internalStream(A||"nodebuffer").toNodejsStream(y)},_compressWorker:function(A,y){if(this._data instanceof k&&this._data.compression.magic===A.magic)return this._data.getCompressedWorker();var S=this._decompressWorker();return this._dataBinary||(S=S.pipe(new g.Utf8EncodeWorker)),k.createWorkerFrom(S,A,y)},_decompressWorker:function(){return this._data instanceof k?this._data.getContentWorker():this._data instanceof C?this._data:new c(this._data)}};for(var _=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],E=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<_.length;v++)u.prototype[_[v]]=E;d.exports=u},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(a,d,l){(function(u){var h,c,g=u.MutationObserver||u.WebKitMutationObserver;if(g){var k=0,C=new g(A),_=u.document.createTextNode("");C.observe(_,{characterData:!0}),h=function(){_.data=k=++k%2}}else if(u.setImmediate||u.MessageChannel===void 0)h="document"in u&&"onreadystatechange"in u.document.createElement("script")?function(){var y=u.document.createElement("script");y.onreadystatechange=function(){A(),y.onreadystatechange=null,y.parentNode.removeChild(y),y=null},u.document.documentElement.appendChild(y)}:function(){setTimeout(A,0)};else{var E=new u.MessageChannel;E.port1.onmessage=A,h=function(){E.port2.postMessage(0)}}var v=[];function A(){var y,S;c=!0;for(var w=v.length;w;){for(S=v,v=[],y=-1;++y<w;)S[y]();w=v.length}c=!1}d.exports=function(y){v.push(y)!==1||c||h()}}).call(this,typeof Te<"u"?Te:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(a,d,l){var u=a("immediate");function h(){}var c={},g=["REJECTED"],k=["FULFILLED"],C=["PENDING"];function _(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=C,this.queue=[],this.outcome=void 0,w!==h&&y(this,w)}function E(w,T,B){this.promise=w,typeof T=="function"&&(this.onFulfilled=T,this.callFulfilled=this.otherCallFulfilled),typeof B=="function"&&(this.onRejected=B,this.callRejected=this.otherCallRejected)}function v(w,T,B){u(function(){var q;try{q=T(B)}catch(K){return c.reject(w,K)}q===w?c.reject(w,new TypeError("Cannot resolve promise with itself")):c.resolve(w,q)})}function A(w){var T=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof T=="function")return function(){T.apply(w,arguments)}}function y(w,T){var B=!1;function q(G){B||(B=!0,c.reject(w,G))}function K(G){B||(B=!0,c.resolve(w,G))}var nt=S(function(){T(K,q)});nt.status==="error"&&q(nt.value)}function S(w,T){var B={};try{B.value=w(T),B.status="success"}catch(q){B.status="error",B.value=q}return B}(d.exports=_).prototype.finally=function(w){if(typeof w!="function")return this;var T=this.constructor;return this.then(function(B){return T.resolve(w()).then(function(){return B})},function(B){return T.resolve(w()).then(function(){throw B})})},_.prototype.catch=function(w){return this.then(null,w)},_.prototype.then=function(w,T){if(typeof w!="function"&&this.state===k||typeof T!="function"&&this.state===g)return this;var B=new this.constructor(h);return this.state!==C?v(B,this.state===k?w:T,this.outcome):this.queue.push(new E(B,w,T)),B},E.prototype.callFulfilled=function(w){c.resolve(this.promise,w)},E.prototype.otherCallFulfilled=function(w){v(this.promise,this.onFulfilled,w)},E.prototype.callRejected=function(w){c.reject(this.promise,w)},E.prototype.otherCallRejected=function(w){v(this.promise,this.onRejected,w)},c.resolve=function(w,T){var B=S(A,T);if(B.status==="error")return c.reject(w,B.value);var q=B.value;if(q)y(w,q);else{w.state=k,w.outcome=T;for(var K=-1,nt=w.queue.length;++K<nt;)w.queue[K].callFulfilled(T)}return w},c.reject=function(w,T){w.state=g,w.outcome=T;for(var B=-1,q=w.queue.length;++B<q;)w.queue[B].callRejected(T);return w},_.resolve=function(w){return w instanceof this?w:c.resolve(new this(h),w)},_.reject=function(w){var T=new this(h);return c.reject(T,w)},_.all=function(w){var T=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=w.length,q=!1;if(!B)return this.resolve([]);for(var K=new Array(B),nt=0,G=-1,ut=new this(h);++G<B;)tt(w[G],G);return ut;function tt(pt,Pt){T.resolve(pt).then(function(R){K[Pt]=R,++nt!==B||q||(q=!0,c.resolve(ut,K))},function(R){q||(q=!0,c.reject(ut,R))})}},_.race=function(w){var T=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=w.length,q=!1;if(!B)return this.resolve([]);for(var K=-1,nt=new this(h);++K<B;)G=w[K],T.resolve(G).then(function(ut){q||(q=!0,c.resolve(nt,ut))},function(ut){q||(q=!0,c.reject(nt,ut))});var G;return nt}},{immediate:36}],38:[function(a,d,l){var u={};(0,a("./lib/utils/common").assign)(u,a("./lib/deflate"),a("./lib/inflate"),a("./lib/zlib/constants")),d.exports=u},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(a,d,l){var u=a("./zlib/deflate"),h=a("./utils/common"),c=a("./utils/strings"),g=a("./zlib/messages"),k=a("./zlib/zstream"),C=Object.prototype.toString,_=0,E=-1,v=0,A=8;function y(w){if(!(this instanceof y))return new y(w);this.options=h.assign({level:E,method:A,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},w||{});var T=this.options;T.raw&&0<T.windowBits?T.windowBits=-T.windowBits:T.gzip&&0<T.windowBits&&T.windowBits<16&&(T.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var B=u.deflateInit2(this.strm,T.level,T.method,T.windowBits,T.memLevel,T.strategy);if(B!==_)throw new Error(g[B]);if(T.header&&u.deflateSetHeader(this.strm,T.header),T.dictionary){var q;if(q=typeof T.dictionary=="string"?c.string2buf(T.dictionary):C.call(T.dictionary)==="[object ArrayBuffer]"?new Uint8Array(T.dictionary):T.dictionary,(B=u.deflateSetDictionary(this.strm,q))!==_)throw new Error(g[B]);this._dict_set=!0}}function S(w,T){var B=new y(T);if(B.push(w,!0),B.err)throw B.msg||g[B.err];return B.result}y.prototype.push=function(w,T){var B,q,K=this.strm,nt=this.options.chunkSize;if(this.ended)return!1;q=T===~~T?T:T===!0?4:0,typeof w=="string"?K.input=c.string2buf(w):C.call(w)==="[object ArrayBuffer]"?K.input=new Uint8Array(w):K.input=w,K.next_in=0,K.avail_in=K.input.length;do{if(K.avail_out===0&&(K.output=new h.Buf8(nt),K.next_out=0,K.avail_out=nt),(B=u.deflate(K,q))!==1&&B!==_)return this.onEnd(B),!(this.ended=!0);K.avail_out!==0&&(K.avail_in!==0||q!==4&&q!==2)||(this.options.to==="string"?this.onData(c.buf2binstring(h.shrinkBuf(K.output,K.next_out))):this.onData(h.shrinkBuf(K.output,K.next_out)))}while((0<K.avail_in||K.avail_out===0)&&B!==1);return q===4?(B=u.deflateEnd(this.strm),this.onEnd(B),this.ended=!0,B===_):q!==2||(this.onEnd(_),!(K.avail_out=0))},y.prototype.onData=function(w){this.chunks.push(w)},y.prototype.onEnd=function(w){w===_&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=w,this.msg=this.strm.msg},l.Deflate=y,l.deflate=S,l.deflateRaw=function(w,T){return(T=T||{}).raw=!0,S(w,T)},l.gzip=function(w,T){return(T=T||{}).gzip=!0,S(w,T)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(a,d,l){var u=a("./zlib/inflate"),h=a("./utils/common"),c=a("./utils/strings"),g=a("./zlib/constants"),k=a("./zlib/messages"),C=a("./zlib/zstream"),_=a("./zlib/gzheader"),E=Object.prototype.toString;function v(y){if(!(this instanceof v))return new v(y);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},y||{});var S=this.options;S.raw&&0<=S.windowBits&&S.windowBits<16&&(S.windowBits=-S.windowBits,S.windowBits===0&&(S.windowBits=-15)),!(0<=S.windowBits&&S.windowBits<16)||y&&y.windowBits||(S.windowBits+=32),15<S.windowBits&&S.windowBits<48&&(15&S.windowBits)==0&&(S.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new C,this.strm.avail_out=0;var w=u.inflateInit2(this.strm,S.windowBits);if(w!==g.Z_OK)throw new Error(k[w]);this.header=new _,u.inflateGetHeader(this.strm,this.header)}function A(y,S){var w=new v(S);if(w.push(y,!0),w.err)throw w.msg||k[w.err];return w.result}v.prototype.push=function(y,S){var w,T,B,q,K,nt,G=this.strm,ut=this.options.chunkSize,tt=this.options.dictionary,pt=!1;if(this.ended)return!1;T=S===~~S?S:S===!0?g.Z_FINISH:g.Z_NO_FLUSH,typeof y=="string"?G.input=c.binstring2buf(y):E.call(y)==="[object ArrayBuffer]"?G.input=new Uint8Array(y):G.input=y,G.next_in=0,G.avail_in=G.input.length;do{if(G.avail_out===0&&(G.output=new h.Buf8(ut),G.next_out=0,G.avail_out=ut),(w=u.inflate(G,g.Z_NO_FLUSH))===g.Z_NEED_DICT&&tt&&(nt=typeof tt=="string"?c.string2buf(tt):E.call(tt)==="[object ArrayBuffer]"?new Uint8Array(tt):tt,w=u.inflateSetDictionary(this.strm,nt)),w===g.Z_BUF_ERROR&&pt===!0&&(w=g.Z_OK,pt=!1),w!==g.Z_STREAM_END&&w!==g.Z_OK)return this.onEnd(w),!(this.ended=!0);G.next_out&&(G.avail_out!==0&&w!==g.Z_STREAM_END&&(G.avail_in!==0||T!==g.Z_FINISH&&T!==g.Z_SYNC_FLUSH)||(this.options.to==="string"?(B=c.utf8border(G.output,G.next_out),q=G.next_out-B,K=c.buf2string(G.output,B),G.next_out=q,G.avail_out=ut-q,q&&h.arraySet(G.output,G.output,B,q,0),this.onData(K)):this.onData(h.shrinkBuf(G.output,G.next_out)))),G.avail_in===0&&G.avail_out===0&&(pt=!0)}while((0<G.avail_in||G.avail_out===0)&&w!==g.Z_STREAM_END);return w===g.Z_STREAM_END&&(T=g.Z_FINISH),T===g.Z_FINISH?(w=u.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===g.Z_OK):T!==g.Z_SYNC_FLUSH||(this.onEnd(g.Z_OK),!(G.avail_out=0))},v.prototype.onData=function(y){this.chunks.push(y)},v.prototype.onEnd=function(y){y===g.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},l.Inflate=v,l.inflate=A,l.inflateRaw=function(y,S){return(S=S||{}).raw=!0,A(y,S)},l.ungzip=A},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(a,d,l){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";l.assign=function(g){for(var k=Array.prototype.slice.call(arguments,1);k.length;){var C=k.shift();if(C){if(typeof C!="object")throw new TypeError(C+"must be non-object");for(var _ in C)C.hasOwnProperty(_)&&(g[_]=C[_])}}return g},l.shrinkBuf=function(g,k){return g.length===k?g:g.subarray?g.subarray(0,k):(g.length=k,g)};var h={arraySet:function(g,k,C,_,E){if(k.subarray&&g.subarray)g.set(k.subarray(C,C+_),E);else for(var v=0;v<_;v++)g[E+v]=k[C+v]},flattenChunks:function(g){var k,C,_,E,v,A;for(k=_=0,C=g.length;k<C;k++)_+=g[k].length;for(A=new Uint8Array(_),k=E=0,C=g.length;k<C;k++)v=g[k],A.set(v,E),E+=v.length;return A}},c={arraySet:function(g,k,C,_,E){for(var v=0;v<_;v++)g[E+v]=k[C+v]},flattenChunks:function(g){return[].concat.apply([],g)}};l.setTyped=function(g){g?(l.Buf8=Uint8Array,l.Buf16=Uint16Array,l.Buf32=Int32Array,l.assign(l,h)):(l.Buf8=Array,l.Buf16=Array,l.Buf32=Array,l.assign(l,c))},l.setTyped(u)},{}],42:[function(a,d,l){var u=a("./common"),h=!0,c=!0;try{String.fromCharCode.apply(null,[0])}catch{h=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{c=!1}for(var g=new u.Buf8(256),k=0;k<256;k++)g[k]=252<=k?6:248<=k?5:240<=k?4:224<=k?3:192<=k?2:1;function C(_,E){if(E<65537&&(_.subarray&&c||!_.subarray&&h))return String.fromCharCode.apply(null,u.shrinkBuf(_,E));for(var v="",A=0;A<E;A++)v+=String.fromCharCode(_[A]);return v}g[254]=g[254]=1,l.string2buf=function(_){var E,v,A,y,S,w=_.length,T=0;for(y=0;y<w;y++)(64512&(v=_.charCodeAt(y)))==55296&&y+1<w&&(64512&(A=_.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(A-56320),y++),T+=v<128?1:v<2048?2:v<65536?3:4;for(E=new u.Buf8(T),y=S=0;S<T;y++)(64512&(v=_.charCodeAt(y)))==55296&&y+1<w&&(64512&(A=_.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(A-56320),y++),v<128?E[S++]=v:(v<2048?E[S++]=192|v>>>6:(v<65536?E[S++]=224|v>>>12:(E[S++]=240|v>>>18,E[S++]=128|v>>>12&63),E[S++]=128|v>>>6&63),E[S++]=128|63&v);return E},l.buf2binstring=function(_){return C(_,_.length)},l.binstring2buf=function(_){for(var E=new u.Buf8(_.length),v=0,A=E.length;v<A;v++)E[v]=_.charCodeAt(v);return E},l.buf2string=function(_,E){var v,A,y,S,w=E||_.length,T=new Array(2*w);for(v=A=0;v<w;)if((y=_[v++])<128)T[A++]=y;else if(4<(S=g[y]))T[A++]=65533,v+=S-1;else{for(y&=S===2?31:S===3?15:7;1<S&&v<w;)y=y<<6|63&_[v++],S--;1<S?T[A++]=65533:y<65536?T[A++]=y:(y-=65536,T[A++]=55296|y>>10&1023,T[A++]=56320|1023&y)}return C(T,A)},l.utf8border=function(_,E){var v;for((E=E||_.length)>_.length&&(E=_.length),v=E-1;0<=v&&(192&_[v])==128;)v--;return v<0||v===0?E:v+g[_[v]]>E?v:E}},{"./common":41}],43:[function(a,d,l){d.exports=function(u,h,c,g){for(var k=65535&u|0,C=u>>>16&65535|0,_=0;c!==0;){for(c-=_=2e3<c?2e3:c;C=C+(k=k+h[g++]|0)|0,--_;);k%=65521,C%=65521}return k|C<<16|0}},{}],44:[function(a,d,l){d.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(a,d,l){var u=(function(){for(var h,c=[],g=0;g<256;g++){h=g;for(var k=0;k<8;k++)h=1&h?3988292384^h>>>1:h>>>1;c[g]=h}return c})();d.exports=function(h,c,g,k){var C=u,_=k+g;h^=-1;for(var E=k;E<_;E++)h=h>>>8^C[255&(h^c[E])];return-1^h}},{}],46:[function(a,d,l){var u,h=a("../utils/common"),c=a("./trees"),g=a("./adler32"),k=a("./crc32"),C=a("./messages"),_=0,E=4,v=0,A=-2,y=-1,S=4,w=2,T=8,B=9,q=286,K=30,nt=19,G=2*q+1,ut=15,tt=3,pt=258,Pt=pt+tt+1,R=42,Q=113,m=1,it=2,Tt=3,lt=4;function $t(s,et){return s.msg=C[et],et}function st(s){return(s<<1)-(4<s?9:0)}function Ot(s){for(var et=s.length;0<=--et;)s[et]=0}function Y(s){var et=s.state,X=et.pending;X>s.avail_out&&(X=s.avail_out),X!==0&&(h.arraySet(s.output,et.pending_buf,et.pending_out,X,s.next_out),s.next_out+=X,et.pending_out+=X,s.total_out+=X,s.avail_out-=X,et.pending-=X,et.pending===0&&(et.pending_out=0))}function V(s,et){c._tr_flush_block(s,0<=s.block_start?s.block_start:-1,s.strstart-s.block_start,et),s.block_start=s.strstart,Y(s.strm)}function Et(s,et){s.pending_buf[s.pending++]=et}function xt(s,et){s.pending_buf[s.pending++]=et>>>8&255,s.pending_buf[s.pending++]=255&et}function vt(s,et){var X,O,x=s.max_chain_length,N=s.strstart,ot=s.prev_length,at=s.nice_match,H=s.strstart>s.w_size-Pt?s.strstart-(s.w_size-Pt):0,ct=s.window,kt=s.w_mask,dt=s.prev,At=s.strstart+pt,Nt=ct[N+ot-1],Bt=ct[N+ot];s.prev_length>=s.good_match&&(x>>=2),at>s.lookahead&&(at=s.lookahead);do if(ct[(X=et)+ot]===Bt&&ct[X+ot-1]===Nt&&ct[X]===ct[N]&&ct[++X]===ct[N+1]){N+=2,X++;do;while(ct[++N]===ct[++X]&&ct[++N]===ct[++X]&&ct[++N]===ct[++X]&&ct[++N]===ct[++X]&&ct[++N]===ct[++X]&&ct[++N]===ct[++X]&&ct[++N]===ct[++X]&&ct[++N]===ct[++X]&&N<At);if(O=pt-(At-N),N=At-pt,ot<O){if(s.match_start=et,at<=(ot=O))break;Nt=ct[N+ot-1],Bt=ct[N+ot]}}while((et=dt[et&kt])>H&&--x!=0);return ot<=s.lookahead?ot:s.lookahead}function qt(s){var et,X,O,x,N,ot,at,H,ct,kt,dt=s.w_size;do{if(x=s.window_size-s.lookahead-s.strstart,s.strstart>=dt+(dt-Pt)){for(h.arraySet(s.window,s.window,dt,dt,0),s.match_start-=dt,s.strstart-=dt,s.block_start-=dt,et=X=s.hash_size;O=s.head[--et],s.head[et]=dt<=O?O-dt:0,--X;);for(et=X=dt;O=s.prev[--et],s.prev[et]=dt<=O?O-dt:0,--X;);x+=dt}if(s.strm.avail_in===0)break;if(ot=s.strm,at=s.window,H=s.strstart+s.lookahead,ct=x,kt=void 0,kt=ot.avail_in,ct<kt&&(kt=ct),X=kt===0?0:(ot.avail_in-=kt,h.arraySet(at,ot.input,ot.next_in,kt,H),ot.state.wrap===1?ot.adler=g(ot.adler,at,kt,H):ot.state.wrap===2&&(ot.adler=k(ot.adler,at,kt,H)),ot.next_in+=kt,ot.total_in+=kt,kt),s.lookahead+=X,s.lookahead+s.insert>=tt)for(N=s.strstart-s.insert,s.ins_h=s.window[N],s.ins_h=(s.ins_h<<s.hash_shift^s.window[N+1])&s.hash_mask;s.insert&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[N+tt-1])&s.hash_mask,s.prev[N&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=N,N++,s.insert--,!(s.lookahead+s.insert<tt)););}while(s.lookahead<Pt&&s.strm.avail_in!==0)}function Qt(s,et){for(var X,O;;){if(s.lookahead<Pt){if(qt(s),s.lookahead<Pt&&et===_)return m;if(s.lookahead===0)break}if(X=0,s.lookahead>=tt&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+tt-1])&s.hash_mask,X=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),X!==0&&s.strstart-X<=s.w_size-Pt&&(s.match_length=vt(s,X)),s.match_length>=tt)if(O=c._tr_tally(s,s.strstart-s.match_start,s.match_length-tt),s.lookahead-=s.match_length,s.match_length<=s.max_lazy_match&&s.lookahead>=tt){for(s.match_length--;s.strstart++,s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+tt-1])&s.hash_mask,X=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart,--s.match_length!=0;);s.strstart++}else s.strstart+=s.match_length,s.match_length=0,s.ins_h=s.window[s.strstart],s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+1])&s.hash_mask;else O=c._tr_tally(s,0,s.window[s.strstart]),s.lookahead--,s.strstart++;if(O&&(V(s,!1),s.strm.avail_out===0))return m}return s.insert=s.strstart<tt-1?s.strstart:tt-1,et===E?(V(s,!0),s.strm.avail_out===0?Tt:lt):s.last_lit&&(V(s,!1),s.strm.avail_out===0)?m:it}function jt(s,et){for(var X,O,x;;){if(s.lookahead<Pt){if(qt(s),s.lookahead<Pt&&et===_)return m;if(s.lookahead===0)break}if(X=0,s.lookahead>=tt&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+tt-1])&s.hash_mask,X=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),s.prev_length=s.match_length,s.prev_match=s.match_start,s.match_length=tt-1,X!==0&&s.prev_length<s.max_lazy_match&&s.strstart-X<=s.w_size-Pt&&(s.match_length=vt(s,X),s.match_length<=5&&(s.strategy===1||s.match_length===tt&&4096<s.strstart-s.match_start)&&(s.match_length=tt-1)),s.prev_length>=tt&&s.match_length<=s.prev_length){for(x=s.strstart+s.lookahead-tt,O=c._tr_tally(s,s.strstart-1-s.prev_match,s.prev_length-tt),s.lookahead-=s.prev_length-1,s.prev_length-=2;++s.strstart<=x&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+tt-1])&s.hash_mask,X=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),--s.prev_length!=0;);if(s.match_available=0,s.match_length=tt-1,s.strstart++,O&&(V(s,!1),s.strm.avail_out===0))return m}else if(s.match_available){if((O=c._tr_tally(s,0,s.window[s.strstart-1]))&&V(s,!1),s.strstart++,s.lookahead--,s.strm.avail_out===0)return m}else s.match_available=1,s.strstart++,s.lookahead--}return s.match_available&&(O=c._tr_tally(s,0,s.window[s.strstart-1]),s.match_available=0),s.insert=s.strstart<tt-1?s.strstart:tt-1,et===E?(V(s,!0),s.strm.avail_out===0?Tt:lt):s.last_lit&&(V(s,!1),s.strm.avail_out===0)?m:it}function mt(s,et,X,O,x){this.good_length=s,this.max_lazy=et,this.nice_length=X,this.max_chain=O,this.func=x}function Yt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=T,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new h.Buf16(2*G),this.dyn_dtree=new h.Buf16(2*(2*K+1)),this.bl_tree=new h.Buf16(2*(2*nt+1)),Ot(this.dyn_ltree),Ot(this.dyn_dtree),Ot(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new h.Buf16(ut+1),this.heap=new h.Buf16(2*q+1),Ot(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new h.Buf16(2*q+1),Ot(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Wt(s){var et;return s&&s.state?(s.total_in=s.total_out=0,s.data_type=w,(et=s.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?R:Q,s.adler=et.wrap===2?0:1,et.last_flush=_,c._tr_init(et),v):$t(s,A)}function It(s){var et=Wt(s);return et===v&&(function(X){X.window_size=2*X.w_size,Ot(X.head),X.max_lazy_match=u[X.level].max_lazy,X.good_match=u[X.level].good_length,X.nice_match=u[X.level].nice_length,X.max_chain_length=u[X.level].max_chain,X.strstart=0,X.block_start=0,X.lookahead=0,X.insert=0,X.match_length=X.prev_length=tt-1,X.match_available=0,X.ins_h=0})(s.state),et}function ie(s,et,X,O,x,N){if(!s)return A;var ot=1;if(et===y&&(et=6),O<0?(ot=0,O=-O):15<O&&(ot=2,O-=16),x<1||B<x||X!==T||O<8||15<O||et<0||9<et||N<0||S<N)return $t(s,A);O===8&&(O=9);var at=new Yt;return(s.state=at).strm=s,at.wrap=ot,at.gzhead=null,at.w_bits=O,at.w_size=1<<at.w_bits,at.w_mask=at.w_size-1,at.hash_bits=x+7,at.hash_size=1<<at.hash_bits,at.hash_mask=at.hash_size-1,at.hash_shift=~~((at.hash_bits+tt-1)/tt),at.window=new h.Buf8(2*at.w_size),at.head=new h.Buf16(at.hash_size),at.prev=new h.Buf16(at.w_size),at.lit_bufsize=1<<x+6,at.pending_buf_size=4*at.lit_bufsize,at.pending_buf=new h.Buf8(at.pending_buf_size),at.d_buf=1*at.lit_bufsize,at.l_buf=3*at.lit_bufsize,at.level=et,at.strategy=N,at.method=X,It(s)}u=[new mt(0,0,0,0,function(s,et){var X=65535;for(X>s.pending_buf_size-5&&(X=s.pending_buf_size-5);;){if(s.lookahead<=1){if(qt(s),s.lookahead===0&&et===_)return m;if(s.lookahead===0)break}s.strstart+=s.lookahead,s.lookahead=0;var O=s.block_start+X;if((s.strstart===0||s.strstart>=O)&&(s.lookahead=s.strstart-O,s.strstart=O,V(s,!1),s.strm.avail_out===0)||s.strstart-s.block_start>=s.w_size-Pt&&(V(s,!1),s.strm.avail_out===0))return m}return s.insert=0,et===E?(V(s,!0),s.strm.avail_out===0?Tt:lt):(s.strstart>s.block_start&&(V(s,!1),s.strm.avail_out),m)}),new mt(4,4,8,4,Qt),new mt(4,5,16,8,Qt),new mt(4,6,32,32,Qt),new mt(4,4,16,16,jt),new mt(8,16,32,32,jt),new mt(8,16,128,128,jt),new mt(8,32,128,256,jt),new mt(32,128,258,1024,jt),new mt(32,258,258,4096,jt)],l.deflateInit=function(s,et){return ie(s,et,T,15,8,0)},l.deflateInit2=ie,l.deflateReset=It,l.deflateResetKeep=Wt,l.deflateSetHeader=function(s,et){return s&&s.state?s.state.wrap!==2?A:(s.state.gzhead=et,v):A},l.deflate=function(s,et){var X,O,x,N;if(!s||!s.state||5<et||et<0)return s?$t(s,A):A;if(O=s.state,!s.output||!s.input&&s.avail_in!==0||O.status===666&&et!==E)return $t(s,s.avail_out===0?-5:A);if(O.strm=s,X=O.last_flush,O.last_flush=et,O.status===R)if(O.wrap===2)s.adler=0,Et(O,31),Et(O,139),Et(O,8),O.gzhead?(Et(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),Et(O,255&O.gzhead.time),Et(O,O.gzhead.time>>8&255),Et(O,O.gzhead.time>>16&255),Et(O,O.gzhead.time>>24&255),Et(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Et(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(Et(O,255&O.gzhead.extra.length),Et(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(s.adler=k(s.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(Et(O,0),Et(O,0),Et(O,0),Et(O,0),Et(O,0),Et(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Et(O,3),O.status=Q);else{var ot=T+(O.w_bits-8<<4)<<8;ot|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(ot|=32),ot+=31-ot%31,O.status=Q,xt(O,ot),O.strstart!==0&&(xt(O,s.adler>>>16),xt(O,65535&s.adler)),s.adler=1}if(O.status===69)if(O.gzhead.extra){for(x=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>x&&(s.adler=k(s.adler,O.pending_buf,O.pending-x,x)),Y(s),x=O.pending,O.pending!==O.pending_buf_size));)Et(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>x&&(s.adler=k(s.adler,O.pending_buf,O.pending-x,x)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){x=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>x&&(s.adler=k(s.adler,O.pending_buf,O.pending-x,x)),Y(s),x=O.pending,O.pending===O.pending_buf_size)){N=1;break}N=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,Et(O,N)}while(N!==0);O.gzhead.hcrc&&O.pending>x&&(s.adler=k(s.adler,O.pending_buf,O.pending-x,x)),N===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){x=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>x&&(s.adler=k(s.adler,O.pending_buf,O.pending-x,x)),Y(s),x=O.pending,O.pending===O.pending_buf_size)){N=1;break}N=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,Et(O,N)}while(N!==0);O.gzhead.hcrc&&O.pending>x&&(s.adler=k(s.adler,O.pending_buf,O.pending-x,x)),N===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&Y(s),O.pending+2<=O.pending_buf_size&&(Et(O,255&s.adler),Et(O,s.adler>>8&255),s.adler=0,O.status=Q)):O.status=Q),O.pending!==0){if(Y(s),s.avail_out===0)return O.last_flush=-1,v}else if(s.avail_in===0&&st(et)<=st(X)&&et!==E)return $t(s,-5);if(O.status===666&&s.avail_in!==0)return $t(s,-5);if(s.avail_in!==0||O.lookahead!==0||et!==_&&O.status!==666){var at=O.strategy===2?(function(H,ct){for(var kt;;){if(H.lookahead===0&&(qt(H),H.lookahead===0)){if(ct===_)return m;break}if(H.match_length=0,kt=c._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++,kt&&(V(H,!1),H.strm.avail_out===0))return m}return H.insert=0,ct===E?(V(H,!0),H.strm.avail_out===0?Tt:lt):H.last_lit&&(V(H,!1),H.strm.avail_out===0)?m:it})(O,et):O.strategy===3?(function(H,ct){for(var kt,dt,At,Nt,Bt=H.window;;){if(H.lookahead<=pt){if(qt(H),H.lookahead<=pt&&ct===_)return m;if(H.lookahead===0)break}if(H.match_length=0,H.lookahead>=tt&&0<H.strstart&&(dt=Bt[At=H.strstart-1])===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]){Nt=H.strstart+pt;do;while(dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&At<Nt);H.match_length=pt-(Nt-At),H.match_length>H.lookahead&&(H.match_length=H.lookahead)}if(H.match_length>=tt?(kt=c._tr_tally(H,1,H.match_length-tt),H.lookahead-=H.match_length,H.strstart+=H.match_length,H.match_length=0):(kt=c._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++),kt&&(V(H,!1),H.strm.avail_out===0))return m}return H.insert=0,ct===E?(V(H,!0),H.strm.avail_out===0?Tt:lt):H.last_lit&&(V(H,!1),H.strm.avail_out===0)?m:it})(O,et):u[O.level].func(O,et);if(at!==Tt&&at!==lt||(O.status=666),at===m||at===Tt)return s.avail_out===0&&(O.last_flush=-1),v;if(at===it&&(et===1?c._tr_align(O):et!==5&&(c._tr_stored_block(O,0,0,!1),et===3&&(Ot(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),Y(s),s.avail_out===0))return O.last_flush=-1,v}return et!==E?v:O.wrap<=0?1:(O.wrap===2?(Et(O,255&s.adler),Et(O,s.adler>>8&255),Et(O,s.adler>>16&255),Et(O,s.adler>>24&255),Et(O,255&s.total_in),Et(O,s.total_in>>8&255),Et(O,s.total_in>>16&255),Et(O,s.total_in>>24&255)):(xt(O,s.adler>>>16),xt(O,65535&s.adler)),Y(s),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?v:1)},l.deflateEnd=function(s){var et;return s&&s.state?(et=s.state.status)!==R&&et!==69&&et!==73&&et!==91&&et!==103&&et!==Q&&et!==666?$t(s,A):(s.state=null,et===Q?$t(s,-3):v):A},l.deflateSetDictionary=function(s,et){var X,O,x,N,ot,at,H,ct,kt=et.length;if(!s||!s.state||(N=(X=s.state).wrap)===2||N===1&&X.status!==R||X.lookahead)return A;for(N===1&&(s.adler=g(s.adler,et,kt,0)),X.wrap=0,kt>=X.w_size&&(N===0&&(Ot(X.head),X.strstart=0,X.block_start=0,X.insert=0),ct=new h.Buf8(X.w_size),h.arraySet(ct,et,kt-X.w_size,X.w_size,0),et=ct,kt=X.w_size),ot=s.avail_in,at=s.next_in,H=s.input,s.avail_in=kt,s.next_in=0,s.input=et,qt(X);X.lookahead>=tt;){for(O=X.strstart,x=X.lookahead-(tt-1);X.ins_h=(X.ins_h<<X.hash_shift^X.window[O+tt-1])&X.hash_mask,X.prev[O&X.w_mask]=X.head[X.ins_h],X.head[X.ins_h]=O,O++,--x;);X.strstart=O,X.lookahead=tt-1,qt(X)}return X.strstart+=X.lookahead,X.block_start=X.strstart,X.insert=X.lookahead,X.lookahead=0,X.match_length=X.prev_length=tt-1,X.match_available=0,s.next_in=at,s.input=H,s.avail_in=ot,X.wrap=N,v},l.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(a,d,l){d.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(a,d,l){d.exports=function(u,h){var c,g,k,C,_,E,v,A,y,S,w,T,B,q,K,nt,G,ut,tt,pt,Pt,R,Q,m,it;c=u.state,g=u.next_in,m=u.input,k=g+(u.avail_in-5),C=u.next_out,it=u.output,_=C-(h-u.avail_out),E=C+(u.avail_out-257),v=c.dmax,A=c.wsize,y=c.whave,S=c.wnext,w=c.window,T=c.hold,B=c.bits,q=c.lencode,K=c.distcode,nt=(1<<c.lenbits)-1,G=(1<<c.distbits)-1;t:do{B<15&&(T+=m[g++]<<B,B+=8,T+=m[g++]<<B,B+=8),ut=q[T&nt];e:for(;;){if(T>>>=tt=ut>>>24,B-=tt,(tt=ut>>>16&255)===0)it[C++]=65535&ut;else{if(!(16&tt)){if((64&tt)==0){ut=q[(65535&ut)+(T&(1<<tt)-1)];continue e}if(32&tt){c.mode=12;break t}u.msg="invalid literal/length code",c.mode=30;break t}pt=65535&ut,(tt&=15)&&(B<tt&&(T+=m[g++]<<B,B+=8),pt+=T&(1<<tt)-1,T>>>=tt,B-=tt),B<15&&(T+=m[g++]<<B,B+=8,T+=m[g++]<<B,B+=8),ut=K[T&G];n:for(;;){if(T>>>=tt=ut>>>24,B-=tt,!(16&(tt=ut>>>16&255))){if((64&tt)==0){ut=K[(65535&ut)+(T&(1<<tt)-1)];continue n}u.msg="invalid distance code",c.mode=30;break t}if(Pt=65535&ut,B<(tt&=15)&&(T+=m[g++]<<B,(B+=8)<tt&&(T+=m[g++]<<B,B+=8)),v<(Pt+=T&(1<<tt)-1)){u.msg="invalid distance too far back",c.mode=30;break t}if(T>>>=tt,B-=tt,(tt=C-_)<Pt){if(y<(tt=Pt-tt)&&c.sane){u.msg="invalid distance too far back",c.mode=30;break t}if(Q=w,(R=0)===S){if(R+=A-tt,tt<pt){for(pt-=tt;it[C++]=w[R++],--tt;);R=C-Pt,Q=it}}else if(S<tt){if(R+=A+S-tt,(tt-=S)<pt){for(pt-=tt;it[C++]=w[R++],--tt;);if(R=0,S<pt){for(pt-=tt=S;it[C++]=w[R++],--tt;);R=C-Pt,Q=it}}}else if(R+=S-tt,tt<pt){for(pt-=tt;it[C++]=w[R++],--tt;);R=C-Pt,Q=it}for(;2<pt;)it[C++]=Q[R++],it[C++]=Q[R++],it[C++]=Q[R++],pt-=3;pt&&(it[C++]=Q[R++],1<pt&&(it[C++]=Q[R++]))}else{for(R=C-Pt;it[C++]=it[R++],it[C++]=it[R++],it[C++]=it[R++],2<(pt-=3););pt&&(it[C++]=it[R++],1<pt&&(it[C++]=it[R++]))}break}}break}}while(g<k&&C<E);g-=pt=B>>3,T&=(1<<(B-=pt<<3))-1,u.next_in=g,u.next_out=C,u.avail_in=g<k?k-g+5:5-(g-k),u.avail_out=C<E?E-C+257:257-(C-E),c.hold=T,c.bits=B}},{}],49:[function(a,d,l){var u=a("../utils/common"),h=a("./adler32"),c=a("./crc32"),g=a("./inffast"),k=a("./inftrees"),C=1,_=2,E=0,v=-2,A=1,y=852,S=592;function w(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function T(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new u.Buf16(320),this.work=new u.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function B(R){var Q;return R&&R.state?(Q=R.state,R.total_in=R.total_out=Q.total=0,R.msg="",Q.wrap&&(R.adler=1&Q.wrap),Q.mode=A,Q.last=0,Q.havedict=0,Q.dmax=32768,Q.head=null,Q.hold=0,Q.bits=0,Q.lencode=Q.lendyn=new u.Buf32(y),Q.distcode=Q.distdyn=new u.Buf32(S),Q.sane=1,Q.back=-1,E):v}function q(R){var Q;return R&&R.state?((Q=R.state).wsize=0,Q.whave=0,Q.wnext=0,B(R)):v}function K(R,Q){var m,it;return R&&R.state?(it=R.state,Q<0?(m=0,Q=-Q):(m=1+(Q>>4),Q<48&&(Q&=15)),Q&&(Q<8||15<Q)?v:(it.window!==null&&it.wbits!==Q&&(it.window=null),it.wrap=m,it.wbits=Q,q(R))):v}function nt(R,Q){var m,it;return R?(it=new T,(R.state=it).window=null,(m=K(R,Q))!==E&&(R.state=null),m):v}var G,ut,tt=!0;function pt(R){if(tt){var Q;for(G=new u.Buf32(512),ut=new u.Buf32(32),Q=0;Q<144;)R.lens[Q++]=8;for(;Q<256;)R.lens[Q++]=9;for(;Q<280;)R.lens[Q++]=7;for(;Q<288;)R.lens[Q++]=8;for(k(C,R.lens,0,288,G,0,R.work,{bits:9}),Q=0;Q<32;)R.lens[Q++]=5;k(_,R.lens,0,32,ut,0,R.work,{bits:5}),tt=!1}R.lencode=G,R.lenbits=9,R.distcode=ut,R.distbits=5}function Pt(R,Q,m,it){var Tt,lt=R.state;return lt.window===null&&(lt.wsize=1<<lt.wbits,lt.wnext=0,lt.whave=0,lt.window=new u.Buf8(lt.wsize)),it>=lt.wsize?(u.arraySet(lt.window,Q,m-lt.wsize,lt.wsize,0),lt.wnext=0,lt.whave=lt.wsize):(it<(Tt=lt.wsize-lt.wnext)&&(Tt=it),u.arraySet(lt.window,Q,m-it,Tt,lt.wnext),(it-=Tt)?(u.arraySet(lt.window,Q,m-it,it,0),lt.wnext=it,lt.whave=lt.wsize):(lt.wnext+=Tt,lt.wnext===lt.wsize&&(lt.wnext=0),lt.whave<lt.wsize&&(lt.whave+=Tt))),0}l.inflateReset=q,l.inflateReset2=K,l.inflateResetKeep=B,l.inflateInit=function(R){return nt(R,15)},l.inflateInit2=nt,l.inflate=function(R,Q){var m,it,Tt,lt,$t,st,Ot,Y,V,Et,xt,vt,qt,Qt,jt,mt,Yt,Wt,It,ie,s,et,X,O,x=0,N=new u.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return v;(m=R.state).mode===12&&(m.mode=13),$t=R.next_out,Tt=R.output,Ot=R.avail_out,lt=R.next_in,it=R.input,st=R.avail_in,Y=m.hold,V=m.bits,Et=st,xt=Ot,et=E;t:for(;;)switch(m.mode){case A:if(m.wrap===0){m.mode=13;break}for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(2&m.wrap&&Y===35615){N[m.check=0]=255&Y,N[1]=Y>>>8&255,m.check=c(m.check,N,2,0),V=Y=0,m.mode=2;break}if(m.flags=0,m.head&&(m.head.done=!1),!(1&m.wrap)||(((255&Y)<<8)+(Y>>8))%31){R.msg="incorrect header check",m.mode=30;break}if((15&Y)!=8){R.msg="unknown compression method",m.mode=30;break}if(V-=4,s=8+(15&(Y>>>=4)),m.wbits===0)m.wbits=s;else if(s>m.wbits){R.msg="invalid window size",m.mode=30;break}m.dmax=1<<s,R.adler=m.check=1,m.mode=512&Y?10:12,V=Y=0;break;case 2:for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(m.flags=Y,(255&m.flags)!=8){R.msg="unknown compression method",m.mode=30;break}if(57344&m.flags){R.msg="unknown header flags set",m.mode=30;break}m.head&&(m.head.text=Y>>8&1),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,m.check=c(m.check,N,2,0)),V=Y=0,m.mode=3;case 3:for(;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.head&&(m.head.time=Y),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,N[2]=Y>>>16&255,N[3]=Y>>>24&255,m.check=c(m.check,N,4,0)),V=Y=0,m.mode=4;case 4:for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.head&&(m.head.xflags=255&Y,m.head.os=Y>>8),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,m.check=c(m.check,N,2,0)),V=Y=0,m.mode=5;case 5:if(1024&m.flags){for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.length=Y,m.head&&(m.head.extra_len=Y),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,m.check=c(m.check,N,2,0)),V=Y=0}else m.head&&(m.head.extra=null);m.mode=6;case 6:if(1024&m.flags&&(st<(vt=m.length)&&(vt=st),vt&&(m.head&&(s=m.head.extra_len-m.length,m.head.extra||(m.head.extra=new Array(m.head.extra_len)),u.arraySet(m.head.extra,it,lt,vt,s)),512&m.flags&&(m.check=c(m.check,it,vt,lt)),st-=vt,lt+=vt,m.length-=vt),m.length))break t;m.length=0,m.mode=7;case 7:if(2048&m.flags){if(st===0)break t;for(vt=0;s=it[lt+vt++],m.head&&s&&m.length<65536&&(m.head.name+=String.fromCharCode(s)),s&&vt<st;);if(512&m.flags&&(m.check=c(m.check,it,vt,lt)),st-=vt,lt+=vt,s)break t}else m.head&&(m.head.name=null);m.length=0,m.mode=8;case 8:if(4096&m.flags){if(st===0)break t;for(vt=0;s=it[lt+vt++],m.head&&s&&m.length<65536&&(m.head.comment+=String.fromCharCode(s)),s&&vt<st;);if(512&m.flags&&(m.check=c(m.check,it,vt,lt)),st-=vt,lt+=vt,s)break t}else m.head&&(m.head.comment=null);m.mode=9;case 9:if(512&m.flags){for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Y!==(65535&m.check)){R.msg="header crc mismatch",m.mode=30;break}V=Y=0}m.head&&(m.head.hcrc=m.flags>>9&1,m.head.done=!0),R.adler=m.check=0,m.mode=12;break;case 10:for(;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}R.adler=m.check=w(Y),V=Y=0,m.mode=11;case 11:if(m.havedict===0)return R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,m.hold=Y,m.bits=V,2;R.adler=m.check=1,m.mode=12;case 12:if(Q===5||Q===6)break t;case 13:if(m.last){Y>>>=7&V,V-=7&V,m.mode=27;break}for(;V<3;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}switch(m.last=1&Y,V-=1,3&(Y>>>=1)){case 0:m.mode=14;break;case 1:if(pt(m),m.mode=20,Q!==6)break;Y>>>=2,V-=2;break t;case 2:m.mode=17;break;case 3:R.msg="invalid block type",m.mode=30}Y>>>=2,V-=2;break;case 14:for(Y>>>=7&V,V-=7&V;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if((65535&Y)!=(Y>>>16^65535)){R.msg="invalid stored block lengths",m.mode=30;break}if(m.length=65535&Y,V=Y=0,m.mode=15,Q===6)break t;case 15:m.mode=16;case 16:if(vt=m.length){if(st<vt&&(vt=st),Ot<vt&&(vt=Ot),vt===0)break t;u.arraySet(Tt,it,lt,vt,$t),st-=vt,lt+=vt,Ot-=vt,$t+=vt,m.length-=vt;break}m.mode=12;break;case 17:for(;V<14;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(m.nlen=257+(31&Y),Y>>>=5,V-=5,m.ndist=1+(31&Y),Y>>>=5,V-=5,m.ncode=4+(15&Y),Y>>>=4,V-=4,286<m.nlen||30<m.ndist){R.msg="too many length or distance symbols",m.mode=30;break}m.have=0,m.mode=18;case 18:for(;m.have<m.ncode;){for(;V<3;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.lens[ot[m.have++]]=7&Y,Y>>>=3,V-=3}for(;m.have<19;)m.lens[ot[m.have++]]=0;if(m.lencode=m.lendyn,m.lenbits=7,X={bits:m.lenbits},et=k(0,m.lens,0,19,m.lencode,0,m.work,X),m.lenbits=X.bits,et){R.msg="invalid code lengths set",m.mode=30;break}m.have=0,m.mode=19;case 19:for(;m.have<m.nlen+m.ndist;){for(;mt=(x=m.lencode[Y&(1<<m.lenbits)-1])>>>16&255,Yt=65535&x,!((jt=x>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Yt<16)Y>>>=jt,V-=jt,m.lens[m.have++]=Yt;else{if(Yt===16){for(O=jt+2;V<O;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Y>>>=jt,V-=jt,m.have===0){R.msg="invalid bit length repeat",m.mode=30;break}s=m.lens[m.have-1],vt=3+(3&Y),Y>>>=2,V-=2}else if(Yt===17){for(O=jt+3;V<O;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}V-=jt,s=0,vt=3+(7&(Y>>>=jt)),Y>>>=3,V-=3}else{for(O=jt+7;V<O;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}V-=jt,s=0,vt=11+(127&(Y>>>=jt)),Y>>>=7,V-=7}if(m.have+vt>m.nlen+m.ndist){R.msg="invalid bit length repeat",m.mode=30;break}for(;vt--;)m.lens[m.have++]=s}}if(m.mode===30)break;if(m.lens[256]===0){R.msg="invalid code -- missing end-of-block",m.mode=30;break}if(m.lenbits=9,X={bits:m.lenbits},et=k(C,m.lens,0,m.nlen,m.lencode,0,m.work,X),m.lenbits=X.bits,et){R.msg="invalid literal/lengths set",m.mode=30;break}if(m.distbits=6,m.distcode=m.distdyn,X={bits:m.distbits},et=k(_,m.lens,m.nlen,m.ndist,m.distcode,0,m.work,X),m.distbits=X.bits,et){R.msg="invalid distances set",m.mode=30;break}if(m.mode=20,Q===6)break t;case 20:m.mode=21;case 21:if(6<=st&&258<=Ot){R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,m.hold=Y,m.bits=V,g(R,xt),$t=R.next_out,Tt=R.output,Ot=R.avail_out,lt=R.next_in,it=R.input,st=R.avail_in,Y=m.hold,V=m.bits,m.mode===12&&(m.back=-1);break}for(m.back=0;mt=(x=m.lencode[Y&(1<<m.lenbits)-1])>>>16&255,Yt=65535&x,!((jt=x>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(mt&&(240&mt)==0){for(Wt=jt,It=mt,ie=Yt;mt=(x=m.lencode[ie+((Y&(1<<Wt+It)-1)>>Wt)])>>>16&255,Yt=65535&x,!(Wt+(jt=x>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}Y>>>=Wt,V-=Wt,m.back+=Wt}if(Y>>>=jt,V-=jt,m.back+=jt,m.length=Yt,mt===0){m.mode=26;break}if(32&mt){m.back=-1,m.mode=12;break}if(64&mt){R.msg="invalid literal/length code",m.mode=30;break}m.extra=15&mt,m.mode=22;case 22:if(m.extra){for(O=m.extra;V<O;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.length+=Y&(1<<m.extra)-1,Y>>>=m.extra,V-=m.extra,m.back+=m.extra}m.was=m.length,m.mode=23;case 23:for(;mt=(x=m.distcode[Y&(1<<m.distbits)-1])>>>16&255,Yt=65535&x,!((jt=x>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if((240&mt)==0){for(Wt=jt,It=mt,ie=Yt;mt=(x=m.distcode[ie+((Y&(1<<Wt+It)-1)>>Wt)])>>>16&255,Yt=65535&x,!(Wt+(jt=x>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}Y>>>=Wt,V-=Wt,m.back+=Wt}if(Y>>>=jt,V-=jt,m.back+=jt,64&mt){R.msg="invalid distance code",m.mode=30;break}m.offset=Yt,m.extra=15&mt,m.mode=24;case 24:if(m.extra){for(O=m.extra;V<O;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.offset+=Y&(1<<m.extra)-1,Y>>>=m.extra,V-=m.extra,m.back+=m.extra}if(m.offset>m.dmax){R.msg="invalid distance too far back",m.mode=30;break}m.mode=25;case 25:if(Ot===0)break t;if(vt=xt-Ot,m.offset>vt){if((vt=m.offset-vt)>m.whave&&m.sane){R.msg="invalid distance too far back",m.mode=30;break}qt=vt>m.wnext?(vt-=m.wnext,m.wsize-vt):m.wnext-vt,vt>m.length&&(vt=m.length),Qt=m.window}else Qt=Tt,qt=$t-m.offset,vt=m.length;for(Ot<vt&&(vt=Ot),Ot-=vt,m.length-=vt;Tt[$t++]=Qt[qt++],--vt;);m.length===0&&(m.mode=21);break;case 26:if(Ot===0)break t;Tt[$t++]=m.length,Ot--,m.mode=21;break;case 27:if(m.wrap){for(;V<32;){if(st===0)break t;st--,Y|=it[lt++]<<V,V+=8}if(xt-=Ot,R.total_out+=xt,m.total+=xt,xt&&(R.adler=m.check=m.flags?c(m.check,Tt,xt,$t-xt):h(m.check,Tt,xt,$t-xt)),xt=Ot,(m.flags?Y:w(Y))!==m.check){R.msg="incorrect data check",m.mode=30;break}V=Y=0}m.mode=28;case 28:if(m.wrap&&m.flags){for(;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Y!==(4294967295&m.total)){R.msg="incorrect length check",m.mode=30;break}V=Y=0}m.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;case 32:default:return v}return R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,m.hold=Y,m.bits=V,(m.wsize||xt!==R.avail_out&&m.mode<30&&(m.mode<27||Q!==4))&&Pt(R,R.output,R.next_out,xt-R.avail_out)?(m.mode=31,-4):(Et-=R.avail_in,xt-=R.avail_out,R.total_in+=Et,R.total_out+=xt,m.total+=xt,m.wrap&&xt&&(R.adler=m.check=m.flags?c(m.check,Tt,xt,R.next_out-xt):h(m.check,Tt,xt,R.next_out-xt)),R.data_type=m.bits+(m.last?64:0)+(m.mode===12?128:0)+(m.mode===20||m.mode===15?256:0),(Et==0&&xt===0||Q===4)&&et===E&&(et=-5),et)},l.inflateEnd=function(R){if(!R||!R.state)return v;var Q=R.state;return Q.window&&(Q.window=null),R.state=null,E},l.inflateGetHeader=function(R,Q){var m;return R&&R.state?(2&(m=R.state).wrap)==0?v:((m.head=Q).done=!1,E):v},l.inflateSetDictionary=function(R,Q){var m,it=Q.length;return R&&R.state?(m=R.state).wrap!==0&&m.mode!==11?v:m.mode===11&&h(1,Q,it,0)!==m.check?-3:Pt(R,Q,it,it)?(m.mode=31,-4):(m.havedict=1,E):v},l.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(a,d,l){var u=a("../utils/common"),h=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],c=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],g=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],k=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];d.exports=function(C,_,E,v,A,y,S,w){var T,B,q,K,nt,G,ut,tt,pt,Pt=w.bits,R=0,Q=0,m=0,it=0,Tt=0,lt=0,$t=0,st=0,Ot=0,Y=0,V=null,Et=0,xt=new u.Buf16(16),vt=new u.Buf16(16),qt=null,Qt=0;for(R=0;R<=15;R++)xt[R]=0;for(Q=0;Q<v;Q++)xt[_[E+Q]]++;for(Tt=Pt,it=15;1<=it&&xt[it]===0;it--);if(it<Tt&&(Tt=it),it===0)return A[y++]=20971520,A[y++]=20971520,w.bits=1,0;for(m=1;m<it&&xt[m]===0;m++);for(Tt<m&&(Tt=m),R=st=1;R<=15;R++)if(st<<=1,(st-=xt[R])<0)return-1;if(0<st&&(C===0||it!==1))return-1;for(vt[1]=0,R=1;R<15;R++)vt[R+1]=vt[R]+xt[R];for(Q=0;Q<v;Q++)_[E+Q]!==0&&(S[vt[_[E+Q]]++]=Q);if(G=C===0?(V=qt=S,19):C===1?(V=h,Et-=257,qt=c,Qt-=257,256):(V=g,qt=k,-1),R=m,nt=y,$t=Q=Y=0,q=-1,K=(Ot=1<<(lt=Tt))-1,C===1&&852<Ot||C===2&&592<Ot)return 1;for(;;){for(ut=R-$t,pt=S[Q]<G?(tt=0,S[Q]):S[Q]>G?(tt=qt[Qt+S[Q]],V[Et+S[Q]]):(tt=96,0),T=1<<R-$t,m=B=1<<lt;A[nt+(Y>>$t)+(B-=T)]=ut<<24|tt<<16|pt|0,B!==0;);for(T=1<<R-1;Y&T;)T>>=1;if(T!==0?(Y&=T-1,Y+=T):Y=0,Q++,--xt[R]==0){if(R===it)break;R=_[E+S[Q]]}if(Tt<R&&(Y&K)!==q){for($t===0&&($t=Tt),nt+=m,st=1<<(lt=R-$t);lt+$t<it&&!((st-=xt[lt+$t])<=0);)lt++,st<<=1;if(Ot+=1<<lt,C===1&&852<Ot||C===2&&592<Ot)return 1;A[q=Y&K]=Tt<<24|lt<<16|nt-y|0}}return Y!==0&&(A[nt+Y]=R-$t<<24|64<<16|0),w.bits=Tt,0}},{"../utils/common":41}],51:[function(a,d,l){d.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(a,d,l){var u=a("../utils/common"),h=0,c=1;function g(x){for(var N=x.length;0<=--N;)x[N]=0}var k=0,C=29,_=256,E=_+1+C,v=30,A=19,y=2*E+1,S=15,w=16,T=7,B=256,q=16,K=17,nt=18,G=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ut=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Pt=new Array(2*(E+2));g(Pt);var R=new Array(2*v);g(R);var Q=new Array(512);g(Q);var m=new Array(256);g(m);var it=new Array(C);g(it);var Tt,lt,$t,st=new Array(v);function Ot(x,N,ot,at,H){this.static_tree=x,this.extra_bits=N,this.extra_base=ot,this.elems=at,this.max_length=H,this.has_stree=x&&x.length}function Y(x,N){this.dyn_tree=x,this.max_code=0,this.stat_desc=N}function V(x){return x<256?Q[x]:Q[256+(x>>>7)]}function Et(x,N){x.pending_buf[x.pending++]=255&N,x.pending_buf[x.pending++]=N>>>8&255}function xt(x,N,ot){x.bi_valid>w-ot?(x.bi_buf|=N<<x.bi_valid&65535,Et(x,x.bi_buf),x.bi_buf=N>>w-x.bi_valid,x.bi_valid+=ot-w):(x.bi_buf|=N<<x.bi_valid&65535,x.bi_valid+=ot)}function vt(x,N,ot){xt(x,ot[2*N],ot[2*N+1])}function qt(x,N){for(var ot=0;ot|=1&x,x>>>=1,ot<<=1,0<--N;);return ot>>>1}function Qt(x,N,ot){var at,H,ct=new Array(S+1),kt=0;for(at=1;at<=S;at++)ct[at]=kt=kt+ot[at-1]<<1;for(H=0;H<=N;H++){var dt=x[2*H+1];dt!==0&&(x[2*H]=qt(ct[dt]++,dt))}}function jt(x){var N;for(N=0;N<E;N++)x.dyn_ltree[2*N]=0;for(N=0;N<v;N++)x.dyn_dtree[2*N]=0;for(N=0;N<A;N++)x.bl_tree[2*N]=0;x.dyn_ltree[2*B]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function mt(x){8<x.bi_valid?Et(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function Yt(x,N,ot,at){var H=2*N,ct=2*ot;return x[H]<x[ct]||x[H]===x[ct]&&at[N]<=at[ot]}function Wt(x,N,ot){for(var at=x.heap[ot],H=ot<<1;H<=x.heap_len&&(H<x.heap_len&&Yt(N,x.heap[H+1],x.heap[H],x.depth)&&H++,!Yt(N,at,x.heap[H],x.depth));)x.heap[ot]=x.heap[H],ot=H,H<<=1;x.heap[ot]=at}function It(x,N,ot){var at,H,ct,kt,dt=0;if(x.last_lit!==0)for(;at=x.pending_buf[x.d_buf+2*dt]<<8|x.pending_buf[x.d_buf+2*dt+1],H=x.pending_buf[x.l_buf+dt],dt++,at===0?vt(x,H,N):(vt(x,(ct=m[H])+_+1,N),(kt=G[ct])!==0&&xt(x,H-=it[ct],kt),vt(x,ct=V(--at),ot),(kt=ut[ct])!==0&&xt(x,at-=st[ct],kt)),dt<x.last_lit;);vt(x,B,N)}function ie(x,N){var ot,at,H,ct=N.dyn_tree,kt=N.stat_desc.static_tree,dt=N.stat_desc.has_stree,At=N.stat_desc.elems,Nt=-1;for(x.heap_len=0,x.heap_max=y,ot=0;ot<At;ot++)ct[2*ot]!==0?(x.heap[++x.heap_len]=Nt=ot,x.depth[ot]=0):ct[2*ot+1]=0;for(;x.heap_len<2;)ct[2*(H=x.heap[++x.heap_len]=Nt<2?++Nt:0)]=1,x.depth[H]=0,x.opt_len--,dt&&(x.static_len-=kt[2*H+1]);for(N.max_code=Nt,ot=x.heap_len>>1;1<=ot;ot--)Wt(x,ct,ot);for(H=At;ot=x.heap[1],x.heap[1]=x.heap[x.heap_len--],Wt(x,ct,1),at=x.heap[1],x.heap[--x.heap_max]=ot,x.heap[--x.heap_max]=at,ct[2*H]=ct[2*ot]+ct[2*at],x.depth[H]=(x.depth[ot]>=x.depth[at]?x.depth[ot]:x.depth[at])+1,ct[2*ot+1]=ct[2*at+1]=H,x.heap[1]=H++,Wt(x,ct,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(Bt,ee){var Ae,ue,pe,Ht,$e,ve,Ct=ee.dyn_tree,Re=ee.max_code,Ee=ee.stat_desc.static_tree,Qe=ee.stat_desc.has_stree,_t=ee.stat_desc.extra_bits,tn=ee.stat_desc.extra_base,ze=ee.stat_desc.max_length,De=0;for(Ht=0;Ht<=S;Ht++)Bt.bl_count[Ht]=0;for(Ct[2*Bt.heap[Bt.heap_max]+1]=0,Ae=Bt.heap_max+1;Ae<y;Ae++)ze<(Ht=Ct[2*Ct[2*(ue=Bt.heap[Ae])+1]+1]+1)&&(Ht=ze,De++),Ct[2*ue+1]=Ht,Re<ue||(Bt.bl_count[Ht]++,$e=0,tn<=ue&&($e=_t[ue-tn]),ve=Ct[2*ue],Bt.opt_len+=ve*(Ht+$e),Qe&&(Bt.static_len+=ve*(Ee[2*ue+1]+$e)));if(De!==0){do{for(Ht=ze-1;Bt.bl_count[Ht]===0;)Ht--;Bt.bl_count[Ht]--,Bt.bl_count[Ht+1]+=2,Bt.bl_count[ze]--,De-=2}while(0<De);for(Ht=ze;Ht!==0;Ht--)for(ue=Bt.bl_count[Ht];ue!==0;)Re<(pe=Bt.heap[--Ae])||(Ct[2*pe+1]!==Ht&&(Bt.opt_len+=(Ht-Ct[2*pe+1])*Ct[2*pe],Ct[2*pe+1]=Ht),ue--)}})(x,N),Qt(ct,Nt,x.bl_count)}function s(x,N,ot){var at,H,ct=-1,kt=N[1],dt=0,At=7,Nt=4;for(kt===0&&(At=138,Nt=3),N[2*(ot+1)+1]=65535,at=0;at<=ot;at++)H=kt,kt=N[2*(at+1)+1],++dt<At&&H===kt||(dt<Nt?x.bl_tree[2*H]+=dt:H!==0?(H!==ct&&x.bl_tree[2*H]++,x.bl_tree[2*q]++):dt<=10?x.bl_tree[2*K]++:x.bl_tree[2*nt]++,ct=H,Nt=(dt=0)===kt?(At=138,3):H===kt?(At=6,3):(At=7,4))}function et(x,N,ot){var at,H,ct=-1,kt=N[1],dt=0,At=7,Nt=4;for(kt===0&&(At=138,Nt=3),at=0;at<=ot;at++)if(H=kt,kt=N[2*(at+1)+1],!(++dt<At&&H===kt)){if(dt<Nt)for(;vt(x,H,x.bl_tree),--dt!=0;);else H!==0?(H!==ct&&(vt(x,H,x.bl_tree),dt--),vt(x,q,x.bl_tree),xt(x,dt-3,2)):dt<=10?(vt(x,K,x.bl_tree),xt(x,dt-3,3)):(vt(x,nt,x.bl_tree),xt(x,dt-11,7));ct=H,Nt=(dt=0)===kt?(At=138,3):H===kt?(At=6,3):(At=7,4)}}g(st);var X=!1;function O(x,N,ot,at){xt(x,(k<<1)+(at?1:0),3),(function(H,ct,kt,dt){mt(H),Et(H,kt),Et(H,~kt),u.arraySet(H.pending_buf,H.window,ct,kt,H.pending),H.pending+=kt})(x,N,ot)}l._tr_init=function(x){X||((function(){var N,ot,at,H,ct,kt=new Array(S+1);for(H=at=0;H<C-1;H++)for(it[H]=at,N=0;N<1<<G[H];N++)m[at++]=H;for(m[at-1]=H,H=ct=0;H<16;H++)for(st[H]=ct,N=0;N<1<<ut[H];N++)Q[ct++]=H;for(ct>>=7;H<v;H++)for(st[H]=ct<<7,N=0;N<1<<ut[H]-7;N++)Q[256+ct++]=H;for(ot=0;ot<=S;ot++)kt[ot]=0;for(N=0;N<=143;)Pt[2*N+1]=8,N++,kt[8]++;for(;N<=255;)Pt[2*N+1]=9,N++,kt[9]++;for(;N<=279;)Pt[2*N+1]=7,N++,kt[7]++;for(;N<=287;)Pt[2*N+1]=8,N++,kt[8]++;for(Qt(Pt,E+1,kt),N=0;N<v;N++)R[2*N+1]=5,R[2*N]=qt(N,5);Tt=new Ot(Pt,G,_+1,E,S),lt=new Ot(R,ut,0,v,S),$t=new Ot(new Array(0),tt,0,A,T)})(),X=!0),x.l_desc=new Y(x.dyn_ltree,Tt),x.d_desc=new Y(x.dyn_dtree,lt),x.bl_desc=new Y(x.bl_tree,$t),x.bi_buf=0,x.bi_valid=0,jt(x)},l._tr_stored_block=O,l._tr_flush_block=function(x,N,ot,at){var H,ct,kt=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(dt){var At,Nt=4093624447;for(At=0;At<=31;At++,Nt>>>=1)if(1&Nt&&dt.dyn_ltree[2*At]!==0)return h;if(dt.dyn_ltree[18]!==0||dt.dyn_ltree[20]!==0||dt.dyn_ltree[26]!==0)return c;for(At=32;At<_;At++)if(dt.dyn_ltree[2*At]!==0)return c;return h})(x)),ie(x,x.l_desc),ie(x,x.d_desc),kt=(function(dt){var At;for(s(dt,dt.dyn_ltree,dt.l_desc.max_code),s(dt,dt.dyn_dtree,dt.d_desc.max_code),ie(dt,dt.bl_desc),At=A-1;3<=At&&dt.bl_tree[2*pt[At]+1]===0;At--);return dt.opt_len+=3*(At+1)+5+5+4,At})(x),H=x.opt_len+3+7>>>3,(ct=x.static_len+3+7>>>3)<=H&&(H=ct)):H=ct=ot+5,ot+4<=H&&N!==-1?O(x,N,ot,at):x.strategy===4||ct===H?(xt(x,2+(at?1:0),3),It(x,Pt,R)):(xt(x,4+(at?1:0),3),(function(dt,At,Nt,Bt){var ee;for(xt(dt,At-257,5),xt(dt,Nt-1,5),xt(dt,Bt-4,4),ee=0;ee<Bt;ee++)xt(dt,dt.bl_tree[2*pt[ee]+1],3);et(dt,dt.dyn_ltree,At-1),et(dt,dt.dyn_dtree,Nt-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,kt+1),It(x,x.dyn_ltree,x.dyn_dtree)),jt(x),at&&mt(x)},l._tr_tally=function(x,N,ot){return x.pending_buf[x.d_buf+2*x.last_lit]=N>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&N,x.pending_buf[x.l_buf+x.last_lit]=255&ot,x.last_lit++,N===0?x.dyn_ltree[2*ot]++:(x.matches++,N--,x.dyn_ltree[2*(m[ot]+_+1)]++,x.dyn_dtree[2*V(N)]++),x.last_lit===x.lit_bufsize-1},l._tr_align=function(x){xt(x,2,3),vt(x,B,Pt),(function(N){N.bi_valid===16?(Et(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(a,d,l){d.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(a,d,l){(function(u){(function(h,c){if(!h.setImmediate){var g,k,C,_,E=1,v={},A=!1,y=h.document,S=Object.getPrototypeOf&&Object.getPrototypeOf(h);S=S&&S.setTimeout?S:h,g={}.toString.call(h.process)==="[object process]"?function(q){process.nextTick(function(){T(q)})}:(function(){if(h.postMessage&&!h.importScripts){var q=!0,K=h.onmessage;return h.onmessage=function(){q=!1},h.postMessage("","*"),h.onmessage=K,q}})()?(_="setImmediate$"+Math.random()+"$",h.addEventListener?h.addEventListener("message",B,!1):h.attachEvent("onmessage",B),function(q){h.postMessage(_+q,"*")}):h.MessageChannel?((C=new MessageChannel).port1.onmessage=function(q){T(q.data)},function(q){C.port2.postMessage(q)}):y&&"onreadystatechange"in y.createElement("script")?(k=y.documentElement,function(q){var K=y.createElement("script");K.onreadystatechange=function(){T(q),K.onreadystatechange=null,k.removeChild(K),K=null},k.appendChild(K)}):function(q){setTimeout(T,0,q)},S.setImmediate=function(q){typeof q!="function"&&(q=new Function(""+q));for(var K=new Array(arguments.length-1),nt=0;nt<K.length;nt++)K[nt]=arguments[nt+1];var G={callback:q,args:K};return v[E]=G,g(E),E++},S.clearImmediate=w}function w(q){delete v[q]}function T(q){if(A)setTimeout(T,0,q);else{var K=v[q];if(K){A=!0;try{(function(nt){var G=nt.callback,ut=nt.args;switch(ut.length){case 0:G();break;case 1:G(ut[0]);break;case 2:G(ut[0],ut[1]);break;case 3:G(ut[0],ut[1],ut[2]);break;default:G.apply(c,ut)}})(K)}finally{w(q),A=!1}}}}function B(q){q.source===h&&typeof q.data=="string"&&q.data.indexOf(_)===0&&T(+q.data.slice(_.length))}})(typeof self>"u"?u===void 0?this:u:self)}).call(this,typeof Te<"u"?Te:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(qr)),qr.exports}var Fo=jo();const aa=na(Fo);var ar={exports:{}},No=ar.exports,Hi;function Lo(){return Hi||(Hi=1,(function(p,i){(function(a,d){d()})(No,function(){function a(k,C){return typeof C>"u"?C={autoBom:!1}:typeof C!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),C={autoBom:!C}),C.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(k.type)?new Blob(["\uFEFF",k],{type:k.type}):k}function d(k,C,_){var E=new XMLHttpRequest;E.open("GET",k),E.responseType="blob",E.onload=function(){g(E.response,C,_)},E.onerror=function(){console.error("could not download file")},E.send()}function l(k){var C=new XMLHttpRequest;C.open("HEAD",k,!1);try{C.send()}catch{}return 200<=C.status&&299>=C.status}function u(k){try{k.dispatchEvent(new MouseEvent("click"))}catch{var C=document.createEvent("MouseEvents");C.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),k.dispatchEvent(C)}}var h=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Te=="object"&&Te.global===Te?Te:void 0,c=h.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=h.saveAs||(typeof window!="object"||window!==h?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(k,C,_){var E=h.URL||h.webkitURL,v=document.createElement("a");C=C||k.name||"download",v.download=C,v.rel="noopener",typeof k=="string"?(v.href=k,v.origin===location.origin?u(v):l(v.href)?d(k,C,_):u(v,v.target="_blank")):(v.href=E.createObjectURL(k),setTimeout(function(){E.revokeObjectURL(v.href)},4e4),setTimeout(function(){u(v)},0))}:"msSaveOrOpenBlob"in navigator?function(k,C,_){if(C=C||k.name||"download",typeof k!="string")navigator.msSaveOrOpenBlob(a(k,_),C);else if(l(k))d(k,C,_);else{var E=document.createElement("a");E.href=k,E.target="_blank",setTimeout(function(){u(E)})}}:function(k,C,_,E){if(E=E||open("","_blank"),E&&(E.document.title=E.document.body.innerText="downloading..."),typeof k=="string")return d(k,C,_);var v=k.type==="application/octet-stream",A=/constructor/i.test(h.HTMLElement)||h.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||v&&A||c)&&typeof FileReader<"u"){var S=new FileReader;S.onloadend=function(){var B=S.result;B=y?B:B.replace(/^data:[^;]*;/,"data:attachment/file;"),E?E.location.href=B:location=B,E=null},S.readAsDataURL(k)}else{var w=h.URL||h.webkitURL,T=w.createObjectURL(k);E?E.location=T:location.href=T,E=null,setTimeout(function(){w.revokeObjectURL(T)},4e4)}});h.saveAs=g.saveAs=g,p.exports=g})})(ar)),ar.exports}var oa=Lo();function Zi(p){const i=Math.floor(p/3600),a=Math.floor(p%3600/60),d=Math.floor(p%60),l=Math.floor(p%1*1e3);return`${i.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")},${l.toString().padStart(3,"0")}`}function Vi(p){const i=Math.floor(p/3600),a=Math.floor(p%3600/60),d=Math.floor(p%60),l=Math.floor(p%1*1e3);return`${i.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}.${l.toString().padStart(3,"0")}`}function sa(p){return p.map((i,a)=>{const d=a+1,l=Zi(i.start),u=Zi(i.end),h=i.text;return`${d}
${l} --> ${u}
${h}
`}).join(`
`)}function la(p){const i=`WEBVTT

`,a=p.map(d=>{const l=Vi(d.start),u=Vi(d.end),h=d.text;return`${l} --> ${u}
${h}
`}).join(`
`);return i+a}function ua(p){return p.map(i=>{const a=i.start.toFixed(3),d=i.end.toFixed(3);return`[${a}s - ${d}s] ${i.text}`}).join(`
`)}function ca(p,i,a,d,l,u,h){return{id:p,title:i,duration:a,created_at:new Date(d).toISOString(),source:l,full_text:u,segments:h.map(c=>({id:c.id,text:c.text,start:c.start,end:c.end,duration:c.end-c.start}))}}async function ha(p){return p}async function Uo(p){const i=await Oo(p),a=await An(p);if(!i)throw new Error("Recording not found");if(!a)throw new Error("No annotations found for this recording");const d=new aa,l=`${i.title}-${p.slice(0,8)}`,u=d.folder(l),h=await ha(i.audioBlob);u.file(`${p}.wav`,h);const c=ca(i.id,i.title,i.duration,i.createdAt,i.source,a.fullText,a.segments);u.file(`${p}.json`,JSON.stringify(c,null,2));const g=sa(a.segments);u.file(`${p}.srt`,g);const k=la(a.segments);u.file(`${p}.vtt`,k);const C=ua(a.segments);u.file(`${p}.txt`,C);const _=await d.generateAsync({type:"blob"});oa.saveAs(_,`${l}.zip`)}async function Ko(){const i=(await ia()).filter(c=>c.isAnnotated);if(i.length===0)throw new Error("No annotated recordings to export");const a=new aa,l=`annotations-export-${new Date().toISOString().replace(/[:.]/g,"-")}`,u=a.folder(l);for(const c of i){const g=await An(c.id);if(!g)continue;const k=`${c.title}-${c.id.slice(0,8)}`,C=u.folder(k),_=await ha(c.audioBlob);C.file(`${c.id}.wav`,_);const E=ca(c.id,c.title,c.duration,c.createdAt,c.source,g.fullText,g.segments);C.file(`${c.id}.json`,JSON.stringify(E,null,2));const v=sa(g.segments);C.file(`${c.id}.srt`,v);const A=la(g.segments);C.file(`${c.id}.vtt`,A);const y=ua(g.segments);C.file(`${c.id}.txt`,y)}const h=await a.generateAsync({type:"blob"});oa.saveAs(h,`${l}.zip`)}class qo{constructor(i){this.listeners=new Set,this.state=i}getState(){return this.state}subscribe(i){return this.listeners.add(i),()=>{this.listeners.delete(i)}}notify(){this.listeners.forEach(i=>i(this.state))}setState(i){this.state={...this.state,...i},this.notify()}}const da="aidio-theme",Wo=()=>{try{const p=localStorage.getItem(da);if(p==="dark"||p==="pastel")return p}catch(p){console.warn("Failed to read theme from localStorage:",p)}return"dark"},Ho={currentTheme:Wo()};class Zo extends qo{constructor(){super(Ho)}toggleTheme(){const i=this.state.currentTheme==="dark"?"pastel":"dark";this.setTheme(i)}setTheme(i){this.setState({currentTheme:i});try{localStorage.setItem(da,i)}catch(a){console.warn("Failed to save theme to localStorage:",a)}}getCurrentTheme(){return this.state.currentTheme}}const En=new Zo,Vo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Yo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Xo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,fa=(p,i,a,d)=>{for(var l=d>1?void 0:d?Go(i,a):i,u=p.length-1,h;u>=0;u--)(h=p[u])&&(l=(d?h(i,a,l):h(l))||l);return d&&l&&Xo(i,a,l),l};let cr=class extends Se{constructor(){super(...arguments),this.currentTheme=En.getCurrentTheme()}connectedCallback(){super.connectedCallback(),this.unsubscribe=En.subscribe(p=>{this.currentTheme=p.currentTheme})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}handleToggle(){En.toggleTheme()}render(){const p=this.currentTheme==="dark"?Vo:Yo,i=this.currentTheme==="dark"?"Switch to Pastel Theme":"Switch to Dark Theme";return Kt`
      <button
        class="theme-toggle-btn"
        @click=${this.handleToggle}
        title=${i}
        aria-label=${i}
      >
        <span class="theme-icon">${Jt(p)}</span>
      </button>
    `}};cr.styles=dn`
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
  `;fa([Ut()],cr.prototype,"currentTheme",2);cr=fa([fn("theme-toggle")],cr);class Jo{constructor(){this.audioBuffer=null,this.markers={left:0,right:0},this.viewport={offsetSeconds:0,pixelsPerSecond:100}}initialize(i,a){this.canvas=i,this.config=a;const d=i.getContext("2d");if(!d)throw new Error("Failed to get 2D rendering context");this.ctx=d,this.updateCanvasDimensions()}setAudioData(i){this.audioBuffer=i,this.render()}setMarkers(i){this.markers=i,this.render()}setViewport(i){this.viewport=i,this.render()}updateConfig(i){this.config={...this.config,...i},this.updateCanvasDimensions(),this.render()}pixelToTime(i){return this.viewport.offsetSeconds+i/this.viewport.pixelsPerSecond}timeToPixel(i){return(i-this.viewport.offsetSeconds)*this.viewport.pixelsPerSecond}updateCanvasDimensions(){this.canvas.width=this.config.width,this.canvas.height=this.config.height}clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}destroy(){this.audioBuffer=null,this.canvas=null,this.ctx=null}}class pa extends Jo{constructor(){super(...arguments),this.waveformData=null}getMetadata(){return{id:"waveform",name:"Waveform",description:"Classic amplitude waveform visualization with gradient coloring",author:"AIdio",version:"1.0.0",performanceProfile:"high",supportsRealtime:!0}}setAudioData(i){super.setAudioData(i),this.waveformData=this.generateWaveformData(i)}generateWaveformData(i){const a=i.getChannelData(0),d=this.config.maxSamplesPerPixel||1e3,l=Math.min(a.length,this.config.width*d),u=Math.floor(a.length/l),h=new Float32Array(l);for(let c=0;c<l;c++){const g=u*c;let k=0;for(let C=0;C<u;C++){const _=Math.abs(a[g+C]||0);_>k&&(k=_)}h[c]=k}return h}render(){if(!this.audioBuffer||!this.waveformData){this.clearCanvas(),this.renderEmptyState();return}this.clearCanvas();const i=this.canvas.width,a=this.canvas.height,d=a/2,l=getComputedStyle(document.documentElement),u=l.getPropertyValue("--waveform-gradient-start").trim(),h=l.getPropertyValue("--waveform-gradient-mid").trim(),c=l.getPropertyValue("--waveform-gradient-end").trim(),g=this.audioBuffer.duration,k=this.viewport.offsetSeconds,C=k+i/this.viewport.pixelsPerSecond,_=Math.floor(k/g*this.waveformData.length),E=Math.ceil(C/g*this.waveformData.length),v=this.waveformData.slice(_,E);this.markers.protected!==void 0&&this.renderProtectedRegion(),this.renderActiveSegment();const A=this.ctx.createLinearGradient(0,0,0,a);A.addColorStop(0,u),A.addColorStop(.5,h),A.addColorStop(1,c),this.ctx.fillStyle=A,this.ctx.beginPath();const y=i/v.length,S=Math.max(1,y*.1);for(let w=0;w<v.length;w++){const B=v[w]*(a/2)*.9,q=w*y,K=d-B/2;this.ctx.fillRect(q,K,y-S,B)}this.renderMarkers()}renderProtectedRegion(){if(this.markers.protected===void 0)return;const i=this.timeToPixel(this.markers.protected);i>0&&(this.ctx.fillStyle="rgba(0, 255, 0, 0.05)",this.ctx.fillRect(0,0,i,this.canvas.height),this.ctx.strokeStyle="rgba(0, 255, 0, 0.2)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(i,0),this.ctx.lineTo(i,this.canvas.height),this.ctx.stroke())}renderActiveSegment(){const i=this.timeToPixel(this.markers.left),d=this.timeToPixel(this.markers.right)-i;d>0&&(this.ctx.fillStyle="rgba(255, 107, 107, 0.1)",this.ctx.fillRect(i,0,d,this.canvas.height))}renderMarkers(){const i=this.timeToPixel(this.markers.left),a=this.timeToPixel(this.markers.right);this.renderMarker(i,"#6BCF7F","◀",!0),this.renderMarker(a,"#FF6B6B","▶",!1)}renderMarker(i,a,d,l){const u=this.canvas.height;this.ctx.strokeStyle=a,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(i,0),this.ctx.lineTo(i,u),this.ctx.stroke();const h=20;this.ctx.fillStyle=a,this.ctx.fillRect(i-h/2,u/2-h/2,h,h),this.ctx.fillStyle="#fff",this.ctx.font="12px monospace",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(d,i,u/2),l&&(this.ctx.fillStyle=a,this.ctx.font="10px sans-serif",this.ctx.fillText("PROTECTED",i,u/2+20))}renderEmptyState(){this.ctx.fillStyle="#666",this.ctx.font="14px sans-serif",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText("No audio loaded",this.canvas.width/2,this.canvas.height/2)}}const ma=new Map;function Qo(p,i){ma.set(p,i)}function ts(p="waveform"){const i=ma.get(p);return i?new i:(console.warn(`[VisualizerFactory] Unknown visualizer type: ${p}, falling back to waveform`),new pa)}Qo("waveform",pa);const ga=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,es=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ns=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var rs=Object.defineProperty,is=Object.getOwnPropertyDescriptor,we=(p,i,a,d)=>{for(var l=d>1?void 0:d?is(i,a):i,u=p.length-1,h;u>=0;u--)(h=p[u])&&(l=(d?h(i,a,l):h(l))||l);return d&&l&&rs(i,a,l),l};let he=class extends Se{constructor(){super(...arguments),this.audioBlob=null,this.leftClamp=0,this.rightClamp=3,this.isPlaying=!1,this.loopEnabled=!1,this.currentTime=0,this.duration=0,this.draggingMarker=null,this.viewportOffset=0,this.pixelsPerSecond=100,this.visualizer=null,this.audioContext=null,this.audioBuffer=null,this.audioSource=null,this.animationFrameId=null,this.playStartTime=0,this.playStartOffset=0,this.handleMarkerMouseMove=p=>{if(!this.draggingMarker||!this.canvas||this.duration===0)return;const i=this.canvas.getBoundingClientRect(),a=p.clientX-i.left,l=Math.max(0,Math.min(1,a/i.width))*this.duration;this.draggingMarker==="left"?this.leftClamp=Math.max(0,Math.min(l,this.rightClamp-.1)):this.rightClamp=Math.min(this.duration,Math.max(l,this.leftClamp+.1)),this.updateVisualizerMarkers(),this.visualizer?.render(),this.dispatchMarkerChange(),this.requestUpdate()},this.handleMarkerMouseUp=()=>{this.draggingMarker=null,document.removeEventListener("mousemove",this.handleMarkerMouseMove),document.removeEventListener("mouseup",this.handleMarkerMouseUp)},this.handleKeyDown=p=>{p.code==="Space"?(p.preventDefault(),this.handlePlay()):p.code==="KeyL"&&(p.preventDefault(),this.toggleLoop())}}async firstUpdated(){if(this.canvas){this.visualizer=ts("waveform");const p=this.canvas.getBoundingClientRect();this.visualizer.initialize(this.canvas,{width:p.width,height:p.height,renderQuality:"high",colorScheme:"default"})}this.audioBlob&&await this.loadAudio(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.cleanup(),this.removeEventListener("keydown",this.handleKeyDown)}async loadAudio(){if(!(!this.audioBlob||!this.visualizer))try{this.audioContext=new AudioContext;const p=await this.audioBlob.arrayBuffer();this.audioBuffer=await this.audioContext.decodeAudioData(p),this.duration=this.audioBuffer.duration,this.rightClamp=Math.min(3,this.duration),this.visualizer.setAudioData(this.audioBuffer),this.visualizer.setViewport({offsetSeconds:this.viewportOffset,pixelsPerSecond:this.pixelsPerSecond}),this.updateVisualizerMarkers(),this.visualizer.render(),this.dispatchEvent(new CustomEvent("duration-loaded",{detail:{duration:this.duration},bubbles:!0,composed:!0}))}catch(p){console.error("Failed to load audio:",p)}}updateVisualizerMarkers(){this.visualizer&&this.visualizer.setMarkers({left:this.leftClamp,right:this.rightClamp})}handlePlay(){this.isPlaying?this.pause():this.play()}async play(){if(!this.audioContext||!this.audioBuffer)return;this.audioContext.state==="suspended"&&await this.audioContext.resume(),this.stopAudioSource(),this.audioSource=this.audioContext.createBufferSource(),this.audioSource.buffer=this.audioBuffer,this.audioSource.connect(this.audioContext.destination);const p=this.leftClamp,a=this.rightClamp-p;this.audioSource.start(0,p,a),this.isPlaying=!0,this.playStartTime=this.audioContext.currentTime,this.playStartOffset=p,this.audioSource.onended=()=>{this.loopEnabled&&this.isPlaying?this.play():this.pause()},this.startAnimationLoop()}pause(){this.stopAudioSource(),this.isPlaying=!1,this.stopAnimationLoop(),this.visualizer?.render()}stopAudioSource(){if(this.audioSource){try{this.audioSource.stop()}catch{}this.audioSource.disconnect(),this.audioSource=null}}startAnimationLoop(){const p=()=>{if(!this.isPlaying||!this.audioContext)return;const i=this.audioContext.currentTime-this.playStartTime;this.currentTime=this.playStartOffset+i,this.currentTime>=this.rightClamp&&(this.currentTime=this.rightClamp),this.visualizer?.render(),this.animationFrameId=requestAnimationFrame(p)};this.animationFrameId=requestAnimationFrame(p)}stopAnimationLoop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}toggleLoop(){this.loopEnabled=!this.loopEnabled}handleMarkerMouseDown(p,i){p.preventDefault(),p.stopPropagation(),this.draggingMarker=i,document.addEventListener("mousemove",this.handleMarkerMouseMove),document.addEventListener("mouseup",this.handleMarkerMouseUp)}dispatchMarkerChange(){this.dispatchEvent(new CustomEvent("markers-changed",{detail:{start:this.leftClamp,end:this.rightClamp,duration:this.rightClamp-this.leftClamp},bubbles:!0,composed:!0}))}panLeft(){this.viewportOffset=Math.max(0,this.viewportOffset-1),this.visualizer?.setViewport({offsetSeconds:this.viewportOffset,pixelsPerSecond:this.pixelsPerSecond}),this.visualizer?.render()}panRight(){this.viewportOffset=Math.min(this.duration,this.viewportOffset+1),this.visualizer?.setViewport({offsetSeconds:this.viewportOffset,pixelsPerSecond:this.pixelsPerSecond}),this.visualizer?.render()}zoomIn(){this.pixelsPerSecond=Math.min(500,this.pixelsPerSecond*1.5),this.visualizer?.setViewport({offsetSeconds:this.viewportOffset,pixelsPerSecond:this.pixelsPerSecond}),this.visualizer?.render()}zoomOut(){this.pixelsPerSecond=Math.max(50,this.pixelsPerSecond/1.5),this.visualizer?.setViewport({offsetSeconds:this.viewportOffset,pixelsPerSecond:this.pixelsPerSecond}),this.visualizer?.render()}centerSegment(){if(this.duration===0)return;const p=(this.leftClamp+this.rightClamp)/2;this.viewportOffset=Math.max(0,p-2.5),this.visualizer?.setViewport({offsetSeconds:this.viewportOffset,pixelsPerSecond:this.pixelsPerSecond}),this.visualizer?.render()}formatTime(p){const i=Math.floor(p/60),a=(p%60).toFixed(2);return`${i}:${a.padStart(5,"0")}`}cleanup(){this.pause(),this.visualizer?.destroy(),this.audioContext?.close(),this.audioContext=null,this.audioBuffer=null,this.visualizer=null}render(){const p=this.duration>0?this.leftClamp/this.duration*100:0,i=this.duration>0?this.rightClamp/this.duration*100:100;return Kt`
      <div class="player-container">
        <div
          class="waveform-wrapper"
          style="--left-clamp-pos: ${p}%; --right-clamp-pos: ${i}%;"
        >
          <canvas></canvas>

          <!-- Protected region (already annotated) -->
          <div class="protected-region"></div>

          <!-- Active segment (currently being annotated) -->
          <div class="active-segment"></div>

          <!-- Left clamp (protected, smaller but draggable) -->
          <div
            class="marker left-clamp ${this.draggingMarker==="left"?"dragging":""}"
            @mousedown=${a=>this.handleMarkerMouseDown(a,"left")}
          >
            <div class="marker-handle">◀</div>
          </div>

          <!-- Right clamp (adjustable) -->
          <div
            class="marker right-clamp ${this.draggingMarker==="right"?"dragging":""}"
            @mousedown=${a=>this.handleMarkerMouseDown(a,"right")}
          >
            <div class="marker-handle">▶</div>
          </div>
        </div>

        <div class="controls">
          <div class="playback-controls">
            <button class="control-btn" @click=${this.handlePlay}>
              ${this.isPlaying?Jt(es):Jt(ga)}
              <span>${this.isPlaying?"Pause":"Play"}</span>
            </button>

            <button
              class="control-btn ${this.loopEnabled?"active":""}"
              @click=${this.toggleLoop}
            >
              ${Jt(ns)}
              <span>Loop</span>
            </button>

            <button class="control-btn" @click=${this.panLeft}>
              <span>Pan Left (←)</span>
            </button>

            <button class="control-btn" @click=${this.panRight}>
              <span>Pan Right (→)</span>
            </button>

            <button class="control-btn" @click=${this.zoomOut}>
              <span>Zoom Out (−)</span>
            </button>

            <button class="control-btn" @click=${this.zoomIn}>
              <span>Zoom In (+)</span>
            </button>

            <button class="control-btn" @click=${this.centerSegment}>
              <span>Center Segment</span>
            </button>
          </div>

          <div class="time-display">
            <span class="duration-label">Segment:</span>
            ${this.formatTime(this.leftClamp)} -
            ${this.formatTime(this.rightClamp)}
            <span class="duration-label">
              (${(this.rightClamp-this.leftClamp).toFixed(2)}s)
            </span>
            <span class="duration-label">| Zoom: ${Math.round(this.pixelsPerSecond/100*100)}%</span>
          </div>
        </div>
      </div>
    `}};he.styles=dn`
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

    .marker.left-clamp {
      background: linear-gradient(to right, transparent, #39ff14);
      left: var(--left-clamp-pos);
      cursor: ew-resize;
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

    .marker.left-clamp .marker-handle {
      left: -8px;
      width: 14px;
      height: 28px;
      background: #39ff14;
      cursor: ew-resize;
    }

    .marker.right-clamp .marker-handle {
      right: -10px;
      background: var(--accent-coral);
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

    .control-btn:active {
      transform: translateY(0);
      box-shadow: var(--shadow-xs);
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
  `;we([xe({type:Object})],he.prototype,"audioBlob",2);we([xe({type:Number})],he.prototype,"leftClamp",2);we([xe({type:Number})],he.prototype,"rightClamp",2);we([Ut()],he.prototype,"isPlaying",2);we([Ut()],he.prototype,"loopEnabled",2);we([Ut()],he.prototype,"currentTime",2);we([Ut()],he.prototype,"duration",2);we([Ut()],he.prototype,"draggingMarker",2);we([Ut()],he.prototype,"viewportOffset",2);we([Ut()],he.prototype,"pixelsPerSecond",2);we([mo("canvas")],he.prototype,"canvas",2);he=we([fn("audio-waveform-player")],he);var as=Object.defineProperty,os=Object.getOwnPropertyDescriptor,fe=(p,i,a,d)=>{for(var l=d>1?void 0:d?os(i,a):i,u=p.length-1,h;u>=0;u--)(h=p[u])&&(l=(d?h(i,a,l):h(l))||l);return d&&l&&as(i,a,l),l};let le=class extends Se{constructor(){super(...arguments),this.text="",this.fontSize=24,this.leftClamp=0,this.rightClamp=0,this.offsetX=0,this.isDragging=!1,this.dragStartX=0,this.dragStartOffset=0,this.zoomLevel=1,this.draggingClamp=null,this.clampDragStartX=0,this.clampDragStartValue=0,this.isFocused=!1,this.handleFocus=()=>{this.isFocused=!0},this.handleBlur=()=>{this.isFocused=!1},this.handleMouseDown=p=>{this.isDragging=!0,this.dragStartX=p.clientX,this.dragStartOffset=this.offsetX,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)},this.handleMouseMove=p=>{if(!this.isDragging)return;const i=p.clientX-this.dragStartX;this.offsetX=this.dragStartOffset+i,this.requestUpdate()},this.handleMouseUp=()=>{this.isDragging=!1,document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)},this.handleClampMouseDown=(p,i)=>{p.preventDefault(),p.stopPropagation(),this.draggingClamp=i,this.clampDragStartX=p.clientX,this.clampDragStartValue=i==="left"?this.leftClamp:this.rightClamp,document.addEventListener("mousemove",this.handleClampMouseMove),document.addEventListener("mouseup",this.handleClampMouseUp)},this.handleClampMouseMove=p=>{if(!this.draggingClamp||!this.text)return;const i=p.clientX-this.clampDragStartX,a=this.fontSize*this.zoomLevel/2,d=Math.round(i/a);let l=this.clampDragStartValue+d;l=Math.max(0,Math.min(this.text.length,l)),this.draggingClamp==="left"?this.leftClamp=Math.min(l,this.rightClamp-1):this.rightClamp=Math.max(l,this.leftClamp+1),this.dispatchClampChangeEvent(),this.requestUpdate()},this.handleClampMouseUp=()=>{this.draggingClamp=null,document.removeEventListener("mousemove",this.handleClampMouseMove),document.removeEventListener("mouseup",this.handleClampMouseUp)},this.handleKeyDown=p=>{this.isFocused&&((p.metaKey||p.ctrlKey)&&(p.code==="Equal"||p.key==="+"||p.key==="=")?(p.preventDefault(),p.stopPropagation(),this.zoomIn()):(p.metaKey||p.ctrlKey)&&(p.code==="Minus"||p.key==="-")?(p.preventDefault(),p.stopPropagation(),this.zoomOut()):(p.metaKey||p.ctrlKey)&&(p.code==="Digit0"||p.key==="0")&&(p.preventDefault(),p.stopPropagation(),this.resetView()))}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("focus",this.handleFocus),this.addEventListener("blur",this.handleBlur),this.tabIndex=0}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("focus",this.handleFocus),this.removeEventListener("blur",this.handleBlur)}dispatchClampChangeEvent(){this.dispatchEvent(new CustomEvent("text-clamps-changed",{detail:{leftClamp:this.leftClamp,rightClamp:this.rightClamp,text:this.text.substring(this.leftClamp,this.rightClamp)},bubbles:!0,composed:!0}))}zoomIn(){const p=this.zoomLevel;if(this.zoomLevel=Math.min(3,this.zoomLevel*1.2),this.leftClamp>0){const i=this.fontSize*p/2,a=this.leftClamp*i,d=this.fontSize*this.zoomLevel/2,l=this.leftClamp*d;this.offsetX+=a-l}this.requestUpdate()}zoomOut(){const p=this.zoomLevel;if(this.zoomLevel=Math.max(.5,this.zoomLevel/1.2),this.leftClamp>0){const i=this.fontSize*p/2,a=this.leftClamp*i,d=this.fontSize*this.zoomLevel/2,l=this.leftClamp*d;this.offsetX+=a-l}this.requestUpdate()}resetView(){this.offsetX=0,this.zoomLevel=1,this.requestUpdate()}getClearSegmentText(){if(!this.text)return{text:"",startChar:0,endChar:0};const p=this.text.length,i=.3,a=this.shadowRoot?.querySelector(".text-viewport")?.clientWidth||800,d=this.fontSize*this.zoomLevel/2,l=Math.floor(a/d),u=Math.floor(l*i),h=Math.floor(-this.offsetX/d),c=Math.max(0,h+Math.floor((l-u)/2)),g=Math.min(p,c+u);return{text:this.text.substring(c,g),startChar:c,endChar:g}}renderStyledText(){if(!this.text)return"";const p=[];if(this.leftClamp>0){const i=this.text.substring(0,this.leftClamp);p.push(Kt`<span class="protected">${i}</span>`)}if(this.rightClamp>this.leftClamp){const i=this.text.substring(this.leftClamp,this.rightClamp);p.push(Kt`<span class="current">${i}</span>`)}if(this.rightClamp<this.text.length){const i=this.text.substring(this.rightClamp);p.push(Kt`<span class="upcoming">${i}</span>`)}return p}render(){const p=this.fontSize*this.zoomLevel,i=this.fontSize*this.zoomLevel/2,a=this.leftClamp*i+this.offsetX,d=this.rightClamp*i+this.offsetX;return Kt`
      <div class="container">
        <div
          class="text-viewport ${this.isDragging?"dragging":""}"
          @mousedown=${this.handleMouseDown}
          style="--left-clamp-text-pos: ${a}px; --right-clamp-text-pos: ${d}px;"
        >
          ${this.text?Kt`
                <div
                  class="text-content ${this.isDragging?"no-transition":""}"
                  style="--offset-x: ${this.offsetX}px; font-size: ${p}px;"
                >
                  ${this.leftClamp>0||this.rightClamp>0?this.renderStyledText():this.text}
                </div>

                <!-- Text clamp markers -->
                ${this.leftClamp>0||this.rightClamp>0?Kt`
                      <div
                        class="text-clamp left ${this.draggingClamp==="left"?"dragging":""}"
                        @mousedown=${l=>this.handleClampMouseDown(l,"left")}
                      >
                        <div class="text-clamp-handle">◀</div>
                      </div>

                      <div
                        class="text-clamp right ${this.draggingClamp==="right"?"dragging":""}"
                        @mousedown=${l=>this.handleClampMouseDown(l,"right")}
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
    `}};le.styles=dn`
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
  `;fe([xe({type:String})],le.prototype,"text",2);fe([xe({type:Number})],le.prototype,"fontSize",2);fe([xe({type:Number})],le.prototype,"leftClamp",2);fe([xe({type:Number})],le.prototype,"rightClamp",2);fe([Ut()],le.prototype,"offsetX",2);fe([Ut()],le.prototype,"isDragging",2);fe([Ut()],le.prototype,"dragStartX",2);fe([Ut()],le.prototype,"dragStartOffset",2);fe([Ut()],le.prototype,"zoomLevel",2);fe([Ut()],le.prototype,"draggingClamp",2);fe([Ut()],le.prototype,"clampDragStartX",2);fe([Ut()],le.prototype,"clampDragStartValue",2);fe([Ut()],le.prototype,"isFocused",2);le=fe([fn("smoked-glass-text")],le);const Yi=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ss=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,or=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var ls=Object.defineProperty,us=Object.getOwnPropertyDescriptor,_e=(p,i,a,d)=>{for(var l=d>1?void 0:d?us(i,a):i,u=p.length-1,h;u>=0;u--)(h=p[u])&&(l=(d?h(i,a,l):h(l))||l);return d&&l&&ls(i,a,l),l};let de=class extends Se{constructor(){super(...arguments),this.audioBlob=null,this.existingAnnotation=null,this.fullTranscript="",this.transcriptEntered=!1,this.leftClamp=0,this.rightClamp=3,this.totalDuration=0,this.annotations=[],this.isComplete=!1,this.textLeftClamp=0,this.textRightClamp=0}willUpdate(p){super.willUpdate(p),p.has("existingAnnotation")&&this.existingAnnotation&&this.loadExistingAnnotation()}loadExistingAnnotation(){if(this.existingAnnotation)if(this.fullTranscript=this.existingAnnotation.fullText||"",this.existingAnnotation.segments&&this.existingAnnotation.segments.length>0){this.annotations=this.existingAnnotation.segments.map(a=>({id:a.id,audioStart:a.start,audioEnd:a.end,text:a.text,textStart:0,textEnd:a.text.length,createdAt:Date.now()})),this.transcriptEntered=!0;const p=this.annotations[this.annotations.length-1];this.leftClamp=p.audioEnd,this.rightClamp=Math.min(this.leftClamp+3,this.totalDuration);const i=this.annotations.map(a=>a.text).join(" ");this.textLeftClamp=i.length,this.textRightClamp=Math.min(this.textLeftClamp+100,this.fullTranscript.length)}else this.fullTranscript&&(this.transcriptEntered=!1)}get currentSegmentNumber(){return this.annotations.length+1}get currentSegmentText(){return this.fullTranscript.substring(this.textLeftClamp,this.textRightClamp)}handleMarkersChanged(p){if(this.rightClamp=p.detail.end,this.leftClamp=p.detail.start,this.fullTranscript&&this.totalDuration>0){const i=this.fullTranscript.length/this.totalDuration,a=Math.floor(i*this.rightClamp);this.textRightClamp=Math.min(a,this.fullTranscript.length),this.textRightClamp<this.textLeftClamp&&(this.textRightClamp=this.textLeftClamp)}}handleDurationLoaded(p){this.totalDuration=p.detail.duration}handleTranscriptInput(p){const i=p.target;this.fullTranscript=i.value}beginAnnotation(){if(!this.fullTranscript.trim()){alert("Please enter the full transcript before beginning annotation.");return}this.transcriptEntered=!0,this.leftClamp=0,this.rightClamp=Math.min(3,this.totalDuration),this.textLeftClamp=0;const p=this.fullTranscript.length/this.totalDuration;this.textRightClamp=Math.floor(p*this.rightClamp),setTimeout(()=>{const i=this.shadowRoot?.querySelector("audio-waveform-player");i&&(i.leftClamp=this.leftClamp,i.rightClamp=this.rightClamp,i.loopEnabled=!0)},100)}confirmSegment(){if(!this.currentSegmentText.trim()){alert("Please adjust the segment boundaries to include text.");return}const p={id:crypto.randomUUID(),audioStart:this.leftClamp,audioEnd:this.rightClamp,text:this.currentSegmentText,textStart:this.textLeftClamp,textEnd:this.textRightClamp,createdAt:Date.now()};this.annotations=[...this.annotations,p],this.advanceToNextSegment(),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{annotation:p,allAnnotations:this.annotations},bubbles:!0,composed:!0}))}advanceToNextSegment(){if(this.rightClamp>=this.totalDuration-.1){this.isComplete=!0;return}this.leftClamp=this.rightClamp,this.textLeftClamp=this.textRightClamp;const p=3;this.rightClamp=Math.min(this.leftClamp+p,this.totalDuration);const i=this.fullTranscript.length/this.totalDuration,a=Math.floor(i*this.rightClamp);this.textRightClamp=Math.min(a,this.fullTranscript.length);const d=this.shadowRoot?.querySelector("audio-waveform-player");d&&(d.leftClamp=this.leftClamp,d.rightClamp=this.rightClamp,d.loopEnabled=!0,d.autoCenterSegment&&d.autoCenterSegment());const l=this.shadowRoot?.querySelector("smoked-glass-text");if(l){l.leftClamp=this.textLeftClamp,l.rightClamp=this.textRightClamp;const u=l.fontSize*l.zoomLevel/2,h=this.textLeftClamp*u,c=Math.min(20,this.textLeftClamp);l.offsetX=-(h-c*u)}}dispatchCompletionEvent(){this.dispatchEvent(new CustomEvent("annotation-complete",{detail:{annotations:this.annotations,totalSegments:this.annotations.length,totalDuration:this.totalDuration,fullText:this.fullTranscript},bubbles:!0,composed:!0}))}saveProgress(){const p=new CustomEvent("progress-saved",{detail:{annotations:this.annotations},bubbles:!0,composed:!0});this.dispatchEvent(p),alert(`Progress saved! ${this.annotations.length} segments annotated.`)}render(){return this.isComplete?Kt`
        <div class="workflow-container">
          <div class="header">
            <h1 class="title">${Jt(or)} Annotation Complete!</h1>
            <div class="progress-info">
              ${this.annotations.length} segments | ${this.totalDuration.toFixed(2)}s total
            </div>
          </div>

          <div class="help-text" style="background: rgba(57, 255, 20, 0.05); border-left-color: #39ff14;">
            <strong>All audio has been segmented!</strong><br />
            You've annotated the entire ${this.totalDuration.toFixed(2)}s recording into ${this.annotations.length} segments.
            Review your work above or click "Finish & Close" to save and return to the main page.
          </div>

          <div style="display: flex; gap: var(--spacing-2); justify-content: center; padding: var(--spacing-4);">
            <button
              class="action-btn"
              @click=${this.dispatchCompletionEvent}
              style="background: linear-gradient(135deg, #39ff14 0%, #00cc88 100%); color: #0a0a0f; font-size: var(--text-lg); padding: var(--spacing-4) var(--spacing-8);"
            >
              ${Jt(or)}
              <span>Finish & Close</span>
            </button>
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
              ?disabled=${!this.fullTranscript.trim()&&this.annotations.length===0}
            >
              ${Jt(ss)}
              <span>Save Progress</span>
            </button>

            ${this.isComplete?Kt`
                  <button
                    class="action-btn"
                    @click=${this.dispatchCompletionEvent}
                    style="background: linear-gradient(135deg, #39ff14 0%, #00cc88 100%); color: #0a0a0f;"
                  >
                    ${Jt(or)}
                    <span>Finish & Close</span>
                  </button>
                `:Kt`
                  <button
                    class="action-btn"
                    @click=${this.confirmSegment}
                    ?disabled=${!this.currentSegmentText.trim()}
                  >
                    <span>Confirm Segment</span>
                    ${Jt(Yi)}
                  </button>
                `}
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
              ${Jt(Yi)}
            </button>
          </div>
        </div>
      `}};de.styles=dn`
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
  `;_e([xe({type:Object})],de.prototype,"audioBlob",2);_e([xe({type:Object})],de.prototype,"existingAnnotation",2);_e([Ut()],de.prototype,"fullTranscript",2);_e([Ut()],de.prototype,"transcriptEntered",2);_e([Ut()],de.prototype,"leftClamp",2);_e([Ut()],de.prototype,"rightClamp",2);_e([Ut()],de.prototype,"totalDuration",2);_e([Ut()],de.prototype,"annotations",2);_e([Ut()],de.prototype,"isComplete",2);_e([Ut()],de.prototype,"textLeftClamp",2);_e([Ut()],de.prototype,"textRightClamp",2);de=_e([fn("annotation-workflow")],de);const cs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,hs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var ds=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,Qr=(p,i,a,d)=>{for(var l=d>1?void 0:d?fs(i,a):i,u=p.length-1,h;u>=0;u--)(h=p[u])&&(l=(d?h(i,a,l):h(l))||l);return d&&l&&ds(i,a,l),l};let $n=class extends Se{constructor(){super(...arguments),this.recording=null,this.existingAnnotation=null}async connectedCallback(){super.connectedCallback(),this.recording?.isAnnotated&&(this.existingAnnotation=await An(this.recording.id)||null)}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async handleStartOver(){!this.recording||!confirm("Are you sure you want to start over? This will delete all current annotations.")||(await $o(this.recording.id),this.existingAnnotation=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("annotation-reset",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})))}async handleAnnotationComplete(p){if(!this.recording)return;const{annotations:i,fullText:a}=p.detail,d={recordingId:this.recording.id,fullText:a,segments:i,completedAt:Date.now(),updatedAt:Date.now()};await Kr(d),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})),this.handleClose()}async handleAnnotationSaved(p){if(!this.recording)return;const{allAnnotations:i}=p.detail,a=await An(this.recording.id);a&&(a.segments=i,a.updatedAt=Date.now(),await Kr(a))}async handleProgressSaved(p){if(!this.recording)return;const{annotations:i}=p.detail;let a=await An(this.recording.id);a?(a.segments=i,a.updatedAt=Date.now()):a={recordingId:this.recording.id,fullText:"",segments:i,completedAt:0,updatedAt:Date.now()},await Kr(a)}render(){return this.recording?Kt`
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
                  ${Jt(hs)}
                  <span>Start Over</span>
                </button>
              `:null}

          <button
            class="header-btn"
            @click=${this.handleClose}
            title="Close without saving"
          >
            ${Jt(cs)}
            <span>Close</span>
          </button>
        </div>
      </div>

      <div class="modal-content">
        <annotation-workflow
          .audioBlob=${this.recording.audioBlob}
          .existingAnnotation=${this.existingAnnotation}
          @annotation-complete=${this.handleAnnotationComplete}
          @annotation-saved=${this.handleAnnotationSaved}
          @progress-saved=${this.handleProgressSaved}
        ></annotation-workflow>
      </div>
    `:Kt`<div>No recording selected</div>`}};$n.styles=dn`
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
  `;Qr([xe({type:Object})],$n.prototype,"recording",2);Qr([Ut()],$n.prototype,"existingAnnotation",2);$n=Qr([fn("annotation-modal")],$n);const ps=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ms=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,gs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,vs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ys=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,bs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var ws=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,pn=(p,i,a,d)=>{for(var l=d>1?void 0:d?_s(i,a):i,u=p.length-1,h;u>=0;u--)(h=p[u])&&(l=(d?h(i,a,l):h(l))||l);return d&&l&&ws(i,a,l),l};let Ue=class extends Se{constructor(){super(...arguments),this.recordings=[],this.isRecording=!1,this.recordingDuration=0,this.selectedRecording=null,this.isModalOpen=!1,this.microphoneService=null,this.mediaRecorderService=null,this.recordingTimer=null}async connectedCallback(){super.connectedCallback(),await this.loadRecordings()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async loadRecordings(){this.recordings=await ia()}async startRecording(){try{this.microphoneService=new bo;const p=await this.microphoneService.requestPermission();this.mediaRecorderService=new wo,await this.mediaRecorderService.initialize(p),this.mediaRecorderService.start(),this.isRecording=!0,this.recordingDuration=0,this.recordingTimer=window.setInterval(()=>{this.recordingDuration+=.1,this.requestUpdate()},100)}catch(p){console.error("Failed to start recording:",p),alert("Failed to start recording. Please check microphone permissions."),this.cleanup()}}async stopRecording(){if(this.mediaRecorderService)try{const p=await this.mediaRecorderService.stop(),i=this.recordingDuration,d=`Untitled ${await Ro()}`;await ra({title:d,audioBlob:p,duration:i,source:"recording"}),await this.loadRecordings()}catch(p){console.error("Failed to save recording:",p),alert("Failed to save recording.")}finally{this.cleanup()}}cleanup(){this.isRecording=!1,this.recordingDuration=0,this.recordingTimer&&(clearInterval(this.recordingTimer),this.recordingTimer=null),this.microphoneService?.release(),this.mediaRecorderService=null,this.microphoneService=null}async handleUpload(){const p=await Mo();if(!(!p||p.length===0))try{await Bo(p),await this.loadRecordings()}catch(i){console.error("Failed to upload files:",i),alert("Failed to upload files.")}}async handleTitleChange(p,i){await Po(p.id,{title:i}),await this.loadRecordings()}async handlePlay(p){new Audio(URL.createObjectURL(p.audioBlob)).play()}handleAnnotate(p){this.selectedRecording=p,this.isModalOpen=!0}async handleExport(p){try{await Uo(p.id)}catch(i){console.error("Failed to export recording:",i),alert(i instanceof Error?i.message:"Failed to export recording.")}}async handleDelete(p){confirm(`Are you sure you want to delete "${p.title}"? This cannot be undone.`)&&(await To(p.id),await this.loadRecordings())}async handleExportAll(){try{await Ko()}catch(p){console.error("Failed to export all recordings:",p),alert(p instanceof Error?p.message:"Failed to export recordings.")}}handleModalClose(){this.isModalOpen=!1,this.selectedRecording=null,this.loadRecordings()}formatDuration(p){const i=Math.floor(p/60),a=Math.floor(p%60);return`${i}:${a.toString().padStart(2,"0")}`}render(){return Kt`
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
              ${Jt(this.isRecording?ms:ps)}
              <span>${this.isRecording?"Stop Recording":"Record Audio"}</span>
            </button>

            ${this.isRecording?Kt`<div class="duration">${this.formatDuration(this.recordingDuration)}</div>`:Kt`
                  <button class="upload-btn" @click=${this.handleUpload}>
                    ${Jt(gs)}
                    <span>Upload Files</span>
                  </button>
                `}
          </div>
        </div>

        <!-- Recordings Table -->
        <div class="recordings-header">
          <h2 class="section-title">Recordings (${this.recordings.length})</h2>
          ${this.recordings.some(p=>p.isAnnotated)?Kt`
                <button class="export-all-btn" @click=${this.handleExportAll}>
                  ${Jt(Xi)}
                  <span>Export All</span>
                </button>
              `:null}
        </div>

        <div class="recordings-table">
          ${this.recordings.length===0?Kt`
                <div class="empty-state">
                  <div class="empty-icon">${Jt(bs)}</div>
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
                    ${this.recordings.map(p=>Kt`
                        <tr>
                          <td>
                            ${p.isAnnotated?Kt`${Jt(or)}`:""}
                          </td>
                          <td>
                            <div class="title-cell">
                              <input
                                class="title-input"
                                type="text"
                                .value=${p.title}
                                @change=${i=>this.handleTitleChange(p,i.target.value)}
                                placeholder="Enter title..."
                              />
                            </div>
                          </td>
                          <td>
                            <span class="duration-badge">
                              ${this.formatDuration(p.duration)}
                            </span>
                          </td>
                          <td>
                            <span class="duration-badge">
                              ${p.source==="recording"?"Recorded":"Uploaded"}
                            </span>
                          </td>
                          <td>
                            <div class="actions">
                              <button
                                class="action-btn"
                                @click=${()=>this.handlePlay(p)}
                                title="Play audio"
                              >
                                ${Jt(ga)}
                                <span>Play</span>
                              </button>

                              <button
                                class="action-btn"
                                @click=${()=>this.handleAnnotate(p)}
                                title="Annotate audio"
                              >
                                ${Jt(vs)}
                                <span>Annotate</span>
                              </button>

                              ${p.isAnnotated?Kt`
                                    <button
                                      class="action-btn"
                                      @click=${()=>this.handleExport(p)}
                                      title="Export annotation"
                                    >
                                      ${Jt(Xi)}
                                      <span>Export</span>
                                    </button>
                                  `:null}

                              <button
                                class="action-btn danger"
                                @click=${()=>this.handleDelete(p)}
                                title="Delete recording"
                              >
                                ${Jt(ys)}
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
  `;pn([Ut()],Ue.prototype,"recordings",2);pn([Ut()],Ue.prototype,"isRecording",2);pn([Ut()],Ue.prototype,"recordingDuration",2);pn([Ut()],Ue.prototype,"selectedRecording",2);pn([Ut()],Ue.prototype,"isModalOpen",2);Ue=pn([fn("minimal-recorder")],Ue);const va=p=>{document.body.setAttribute("data-theme",p)};va(En.getCurrentTheme());En.subscribe(p=>{va(p.currentTheme)});

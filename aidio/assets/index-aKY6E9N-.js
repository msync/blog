(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();const or=globalThis,Yr=or.ShadowRoot&&(or.ShadyCSS===void 0||or.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gr=Symbol(),Ii=new WeakMap;let ea=class{constructor(i,r,u){if(this._$cssResult$=!0,u!==Gr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=r}get styleSheet(){let i=this.o;const r=this.t;if(Yr&&i===void 0){const u=r!==void 0&&r.length===1;u&&(i=Ii.get(r)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),u&&Ii.set(r,i))}return i}toString(){return this.cssText}};const Za=p=>new ea(typeof p=="string"?p:p+"",void 0,Gr),mn=(p,...i)=>{const r=p.length===1?p[0]:i.reduce(((u,o,l)=>u+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+p[l+1]),p[0]);return new ea(r,p,Gr)},Xa=(p,i)=>{if(Yr)p.adoptedStyleSheets=i.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(const r of i){const u=document.createElement("style"),o=or.litNonce;o!==void 0&&u.setAttribute("nonce",o),u.textContent=r.cssText,p.appendChild(u)}},Mi=Yr?p=>p:p=>p instanceof CSSStyleSheet?(i=>{let r="";for(const u of i.cssRules)r+=u.cssText;return Za(r)})(p):p;const{is:Ya,defineProperty:Ga,getOwnPropertyDescriptor:Qa,getOwnPropertyNames:Ja,getOwnPropertySymbols:to,getPrototypeOf:eo}=Object,pr=globalThis,Bi=pr.trustedTypes,no=Bi?Bi.emptyScript:"",ro=pr.reactiveElementPolyfillSupport,On=(p,i)=>p,cr={toAttribute(p,i){switch(i){case Boolean:p=p?no:null;break;case Object:case Array:p=p==null?p:JSON.stringify(p)}return p},fromAttribute(p,i){let r=p;switch(i){case Boolean:r=p!==null;break;case Number:r=p===null?null:Number(p);break;case Object:case Array:try{r=JSON.parse(p)}catch{r=null}}return r}},Qr=(p,i)=>!Ya(p,i),ji={attribute:!0,type:String,converter:cr,reflect:!1,useDefault:!1,hasChanged:Qr};Symbol.metadata??=Symbol("metadata"),pr.litPropertyMetadata??=new WeakMap;let fn=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,r=ji){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(i,r),!r.noAccessor){const u=Symbol(),o=this.getPropertyDescriptor(i,u,r);o!==void 0&&Ga(this.prototype,i,o)}}static getPropertyDescriptor(i,r,u){const{get:o,set:l}=Qa(this.prototype,i)??{get(){return this[r]},set(h){this[r]=h}};return{get:o,set(h){const d=o?.call(this);l?.call(this,h),this.requestUpdate(i,d,u)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??ji}static _$Ei(){if(this.hasOwnProperty(On("elementProperties")))return;const i=eo(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(On("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(On("properties"))){const r=this.properties,u=[...Ja(r),...to(r)];for(const o of u)this.createProperty(o,r[o])}const i=this[Symbol.metadata];if(i!==null){const r=litPropertyMetadata.get(i);if(r!==void 0)for(const[u,o]of r)this.elementProperties.set(u,o)}this._$Eh=new Map;for(const[r,u]of this.elementProperties){const o=this._$Eu(r,u);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const r=[];if(Array.isArray(i)){const u=new Set(i.flat(1/0).reverse());for(const o of u)r.unshift(Mi(o))}else i!==void 0&&r.push(Mi(i));return r}static _$Eu(i,r){const u=r.attribute;return u===!1?void 0:typeof u=="string"?u:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((i=>this.enableUpdating=i)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((i=>i(this)))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){const i=new Map,r=this.constructor.elementProperties;for(const u of r.keys())this.hasOwnProperty(u)&&(i.set(u,this[u]),delete this[u]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xa(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((i=>i.hostConnected?.()))}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach((i=>i.hostDisconnected?.()))}attributeChangedCallback(i,r,u){this._$AK(i,u)}_$ET(i,r){const u=this.constructor.elementProperties.get(i),o=this.constructor._$Eu(i,u);if(o!==void 0&&u.reflect===!0){const l=(u.converter?.toAttribute!==void 0?u.converter:cr).toAttribute(r,u.type);this._$Em=i,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$Em=null}}_$AK(i,r){const u=this.constructor,o=u._$Eh.get(i);if(o!==void 0&&this._$Em!==o){const l=u.getPropertyOptions(o),h=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:cr;this._$Em=o;const d=h.fromAttribute(r,l.type);this[o]=d??this._$Ej?.get(o)??d,this._$Em=null}}requestUpdate(i,r,u){if(i!==void 0){const o=this.constructor,l=this[i];if(u??=o.getPropertyOptions(i),!((u.hasChanged??Qr)(l,r)||u.useDefault&&u.reflect&&l===this._$Ej?.get(i)&&!this.hasAttribute(o._$Eu(i,u))))return;this.C(i,r,u)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,r,{useDefault:u,reflect:o,wrapped:l},h){u&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,h??r??this[i]),l!==!0||h!==void 0)||(this._$AL.has(i)||(this.hasUpdated||u||(r=void 0),this._$AL.set(i,r)),o===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,l]of this._$Ep)this[o]=l;this._$Ep=void 0}const u=this.constructor.elementProperties;if(u.size>0)for(const[o,l]of u){const{wrapped:h}=l,d=this[o];h!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,l,d)}}let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),this._$EO?.forEach((u=>u.hostUpdate?.())),this.update(r)):this._$EM()}catch(u){throw i=!1,this._$EM(),u}i&&this._$AE(r)}willUpdate(i){}_$AE(i){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach((r=>this._$ET(r,this[r]))),this._$EM()}updated(i){}firstUpdated(i){}};fn.elementStyles=[],fn.shadowRootOptions={mode:"open"},fn[On("elementProperties")]=new Map,fn[On("finalized")]=new Map,ro?.({ReactiveElement:fn}),(pr.reactiveElementVersions??=[]).push("2.1.1");const Jr=globalThis,hr=Jr.trustedTypes,Fi=hr?hr.createPolicy("lit-html",{createHTML:p=>p}):void 0,na="$lit$",Le=`lit$${Math.random().toFixed(9).slice(2)}$`,ra="?"+Le,io=`<${ra}>`,Qe=document,$n=()=>Qe.createComment(""),Rn=p=>p===null||typeof p!="object"&&typeof p!="function",ti=Array.isArray,ao=p=>ti(p)||typeof p?.[Symbol.iterator]=="function",Wr=`[ 	
\f\r]`,En=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ni=/-->/g,Li=/>/g,Xe=RegExp(`>|${Wr}(?:([^\\s"'>=/]+)(${Wr}*=${Wr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ui=/'/g,Ki=/"/g,ia=/^(?:script|style|textarea|title)$/i,oo=p=>(i,...r)=>({_$litType$:p,strings:i,values:r}),Kt=oo(1),Je=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),qi=new WeakMap,Ge=Qe.createTreeWalker(Qe,129);function aa(p,i){if(!ti(p)||!p.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fi!==void 0?Fi.createHTML(i):i}const so=(p,i)=>{const r=p.length-1,u=[];let o,l=i===2?"<svg>":i===3?"<math>":"",h=En;for(let d=0;d<r;d++){const v=p[d];let b,S,C=-1,w=0;for(;w<v.length&&(h.lastIndex=w,S=h.exec(v),S!==null);)w=h.lastIndex,h===En?S[1]==="!--"?h=Ni:S[1]!==void 0?h=Li:S[2]!==void 0?(ia.test(S[2])&&(o=RegExp("</"+S[2],"g")),h=Xe):S[3]!==void 0&&(h=Xe):h===Xe?S[0]===">"?(h=o??En,C=-1):S[1]===void 0?C=-2:(C=h.lastIndex-S[2].length,b=S[1],h=S[3]===void 0?Xe:S[3]==='"'?Ki:Ui):h===Ki||h===Ui?h=Xe:h===Ni||h===Li?h=En:(h=Xe,o=void 0);const g=h===Xe&&p[d+1].startsWith("/>")?" ":"";l+=h===En?v+io:C>=0?(u.push(b),v.slice(0,C)+na+v.slice(C)+Le+g):v+Le+(C===-2?d:g)}return[aa(p,l+(p[r]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),u]};class zn{constructor({strings:i,_$litType$:r},u){let o;this.parts=[];let l=0,h=0;const d=i.length-1,v=this.parts,[b,S]=so(i,r);if(this.el=zn.createElement(b,u),Ge.currentNode=this.el.content,r===2||r===3){const C=this.el.content.firstChild;C.replaceWith(...C.childNodes)}for(;(o=Ge.nextNode())!==null&&v.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const C of o.getAttributeNames())if(C.endsWith(na)){const w=S[h++],g=o.getAttribute(C).split(Le),_=/([.?@])?(.*)/.exec(w);v.push({type:1,index:l,name:_[2],strings:g,ctor:_[1]==="."?uo:_[1]==="?"?co:_[1]==="@"?ho:mr}),o.removeAttribute(C)}else C.startsWith(Le)&&(v.push({type:6,index:l}),o.removeAttribute(C));if(ia.test(o.tagName)){const C=o.textContent.split(Le),w=C.length-1;if(w>0){o.textContent=hr?hr.emptyScript:"";for(let g=0;g<w;g++)o.append(C[g],$n()),Ge.nextNode(),v.push({type:2,index:++l});o.append(C[w],$n())}}}else if(o.nodeType===8)if(o.data===ra)v.push({type:2,index:l});else{let C=-1;for(;(C=o.data.indexOf(Le,C+1))!==-1;)v.push({type:7,index:l}),C+=Le.length-1}l++}}static createElement(i,r){const u=Qe.createElement("template");return u.innerHTML=i,u}}function pn(p,i,r=p,u){if(i===Je)return i;let o=u!==void 0?r._$Co?.[u]:r._$Cl;const l=Rn(i)?void 0:i._$litDirective$;return o?.constructor!==l&&(o?._$AO?.(!1),l===void 0?o=void 0:(o=new l(p),o._$AT(p,r,u)),u!==void 0?(r._$Co??=[])[u]=o:r._$Cl=o),o!==void 0&&(i=pn(p,o._$AS(p,i.values),o,u)),i}class lo{constructor(i,r){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:r},parts:u}=this._$AD,o=(i?.creationScope??Qe).importNode(r,!0);Ge.currentNode=o;let l=Ge.nextNode(),h=0,d=0,v=u[0];for(;v!==void 0;){if(h===v.index){let b;v.type===2?b=new In(l,l.nextSibling,this,i):v.type===1?b=new v.ctor(l,v.name,v.strings,this,i):v.type===6&&(b=new fo(l,this,i)),this._$AV.push(b),v=u[++d]}h!==v?.index&&(l=Ge.nextNode(),h++)}return Ge.currentNode=Qe,o}p(i){let r=0;for(const u of this._$AV)u!==void 0&&(u.strings!==void 0?(u._$AI(i,u,r),r+=u.strings.length-2):u._$AI(i[r])),r++}}class In{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,r,u,o){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=i,this._$AB=r,this._$AM=u,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&i?.nodeType===11&&(i=r.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,r=this){i=pn(this,i,r),Rn(i)?i===te||i==null||i===""?(this._$AH!==te&&this._$AR(),this._$AH=te):i!==this._$AH&&i!==Je&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):ao(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==te&&Rn(this._$AH)?this._$AA.nextSibling.data=i:this.T(Qe.createTextNode(i)),this._$AH=i}$(i){const{values:r,_$litType$:u}=i,o=typeof u=="number"?this._$AC(i):(u.el===void 0&&(u.el=zn.createElement(aa(u.h,u.h[0]),this.options)),u);if(this._$AH?._$AD===o)this._$AH.p(r);else{const l=new lo(o,this),h=l.u(this.options);l.p(r),this.T(h),this._$AH=l}}_$AC(i){let r=qi.get(i.strings);return r===void 0&&qi.set(i.strings,r=new zn(i)),r}k(i){ti(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let u,o=0;for(const l of i)o===r.length?r.push(u=new In(this.O($n()),this.O($n()),this,this.options)):u=r[o],u._$AI(l),o++;o<r.length&&(this._$AR(u&&u._$AB.nextSibling,o),r.length=o)}_$AR(i=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);i!==this._$AB;){const u=i.nextSibling;i.remove(),i=u}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}}class mr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,r,u,o,l){this.type=1,this._$AH=te,this._$AN=void 0,this.element=i,this.name=r,this._$AM=o,this.options=l,u.length>2||u[0]!==""||u[1]!==""?(this._$AH=Array(u.length-1).fill(new String),this.strings=u):this._$AH=te}_$AI(i,r=this,u,o){const l=this.strings;let h=!1;if(l===void 0)i=pn(this,i,r,0),h=!Rn(i)||i!==this._$AH&&i!==Je,h&&(this._$AH=i);else{const d=i;let v,b;for(i=l[0],v=0;v<l.length-1;v++)b=pn(this,d[u+v],r,v),b===Je&&(b=this._$AH[v]),h||=!Rn(b)||b!==this._$AH[v],b===te?i=te:i!==te&&(i+=(b??"")+l[v+1]),this._$AH[v]=b}h&&!o&&this.j(i)}j(i){i===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}}class uo extends mr{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===te?void 0:i}}class co extends mr{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==te)}}class ho extends mr{constructor(i,r,u,o,l){super(i,r,u,o,l),this.type=5}_$AI(i,r=this){if((i=pn(this,i,r,0)??te)===Je)return;const u=this._$AH,o=i===te&&u!==te||i.capture!==u.capture||i.once!==u.once||i.passive!==u.passive,l=i!==te&&(u===te||o);o&&this.element.removeEventListener(this.name,this,u),l&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}}class fo{constructor(i,r,u){this.element=i,this.type=6,this._$AN=void 0,this._$AM=r,this.options=u}get _$AU(){return this._$AM._$AU}_$AI(i){pn(this,i)}}const po=Jr.litHtmlPolyfillSupport;po?.(zn,In),(Jr.litHtmlVersions??=[]).push("3.3.1");const mo=(p,i,r)=>{const u=r?.renderBefore??i;let o=u._$litPart$;if(o===void 0){const l=r?.renderBefore??null;u._$litPart$=o=new In(i.insertBefore($n(),l),l,void 0,r??{})}return o._$AI(p),o};const ei=globalThis;let Ce=class extends fn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=mo(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};Ce._$litElement$=!0,Ce.finalized=!0,ei.litElementHydrateSupport?.({LitElement:Ce});const go=ei.litElementPolyfillSupport;go?.({LitElement:Ce});(ei.litElementVersions??=[]).push("4.2.1");const gn=p=>(i,r)=>{r!==void 0?r.addInitializer((()=>{customElements.define(p,i)})):customElements.define(p,i)};const vo={attribute:!0,type:String,converter:cr,reflect:!1,hasChanged:Qr},yo=(p=vo,i,r)=>{const{kind:u,metadata:o}=r;let l=globalThis.litPropertyMetadata.get(o);if(l===void 0&&globalThis.litPropertyMetadata.set(o,l=new Map),u==="setter"&&((p=Object.create(p)).wrapped=!0),l.set(r.name,p),u==="accessor"){const{name:h}=r;return{set(d){const v=i.get.call(this);i.set.call(this,d),this.requestUpdate(h,v,p)},init(d){return d!==void 0&&this.C(h,void 0,p,d),d}}}if(u==="setter"){const{name:h}=r;return function(d){const v=this[h];i.call(this,d),this.requestUpdate(h,v,p)}}throw Error("Unsupported decorator location: "+u)};function _e(p){return(i,r)=>typeof r=="object"?yo(p,i,r):((u,o,l)=>{const h=o.hasOwnProperty(l);return o.constructor.createProperty(l,u),h?Object.getOwnPropertyDescriptor(o,l):void 0})(p,i,r)}function Ut(p){return _e({...p,state:!0,attribute:!1})}const bo=(p,i,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(p,i,r),r);function wo(p,i){return(r,u,o)=>{const l=h=>h.renderRoot?.querySelector(p)??null;return bo(r,u,{get(){return l(this)}})}}const _o={CHILD:2},xo=p=>(...i)=>({_$litDirective$:p,values:i});class ko{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,r,u){this._$Ct=i,this._$AM=r,this._$Ci=u}_$AS(i,r){return this.update(i,r)}update(i,r){return this.render(...r)}}class Zr extends ko{constructor(i){if(super(i),this.it=te,i.type!==_o.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===te||i==null)return this._t=void 0,this.it=i;if(i===Je)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const r=[i];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Zr.directiveName="unsafeHTML",Zr.resultType=1;const Qt=xo(Zr);class So{constructor(){this.stream=null}async requestPermission(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("MediaDevices API not supported in this browser");try{return this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1,sampleRate:48e3,channelCount:1}}),this.stream}catch(i){throw i instanceof Error?new Error(`Microphone access denied: ${i.message}`):new Error("Microphone access denied")}}getStream(){return this.stream}release(){this.stream&&(this.stream.getTracks().forEach(i=>i.stop()),this.stream=null)}isActive(){return this.stream!==null&&this.stream.active}}class Co{constructor(){this.mediaRecorder=null,this.chunks=[]}async initialize(i){if(!window.MediaRecorder)throw new Error("MediaRecorder API not supported in this browser");const r=this.getSupportedMimeType();if(!r)throw new Error("No supported audio MIME type found");this.mediaRecorder=new MediaRecorder(i,{mimeType:r,audioBitsPerSecond:128e3}),this.mediaRecorder.ondataavailable=u=>{u.data.size>0&&(this.chunks.push(u.data),this.onDataAvailableCallback?.(u.data))},this.mediaRecorder.onstop=()=>{this.onStateChangeCallback?.("inactive")},this.mediaRecorder.onstart=()=>{this.onStateChangeCallback?.("recording")},this.mediaRecorder.onpause=()=>{this.onStateChangeCallback?.("paused")},this.mediaRecorder.onresume=()=>{this.onStateChangeCallback?.("recording")}}getSupportedMimeType(){return["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/mp4"].find(r=>MediaRecorder.isTypeSupported(r))||null}start(i=100){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");this.mediaRecorder.state!=="recording"&&(this.chunks=[],this.mediaRecorder.start(i))}async stop(){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");return this.mediaRecorder.state==="inactive"?new Blob(this.chunks,{type:this.mediaRecorder.mimeType}):new Promise(i=>{this.mediaRecorder.onstop=()=>{const r=new Blob(this.chunks,{type:this.mediaRecorder.mimeType});this.onStateChangeCallback?.("inactive"),i(r)},this.mediaRecorder.stop()})}pause(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.pause()}resume(){this.mediaRecorder?.state==="paused"&&this.mediaRecorder.resume()}getState(){return this.mediaRecorder?.state||"inactive"}getMimeType(){return this.mediaRecorder?.mimeType||""}onDataAvailable(i){this.onDataAvailableCallback=i}onStateChange(i){this.onStateChangeCallback=i}release(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.stop(),this.mediaRecorder=null,this.chunks=[]}}const Ao="modulepreload",Eo=function(p){return"/aidio/"+p},Wi={},Oo=function(i,r,u){let o=Promise.resolve();if(r&&r.length>0){let b=function(S){return Promise.all(S.map(C=>Promise.resolve(C).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};var h=b;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),v=d?.nonce||d?.getAttribute("nonce");o=b(r.map(S=>{if(S=Eo(S),S in Wi)return;Wi[S]=!0;const C=S.endsWith(".css"),w=C?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${S}"]${w}`))return;const g=document.createElement("link");if(g.rel=C?"stylesheet":Ao,C||(g.as="script"),g.crossOrigin="",g.href=S,v&&g.setAttribute("nonce",v),document.head.appendChild(g),C)return new Promise((_,y)=>{g.addEventListener("load",_),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${S}`)))})}))}function l(d){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=d,window.dispatchEvent(v),!v.defaultPrevented)throw d}return o.then(d=>{for(const v of d||[])v.status==="rejected"&&l(v.reason);return i().catch(l)})};var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oa(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var sr={exports:{}},Po=sr.exports,Vi;function To(){return Vi||(Vi=1,(function(p,i){(function(r,u){p.exports=u()})(Po,function(){var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])})(t,e)},u=function(){return(u=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};function o(t,e,n){for(var a,s=0,f=e.length;s<f;s++)!a&&s in e||((a=a||Array.prototype.slice.call(e,0,s))[s]=e[s]);return t.concat(a||Array.prototype.slice.call(e))}var l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Te,h=Object.keys,d=Array.isArray;function v(t,e){return typeof e!="object"||h(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||l.Promise||(l.Promise=Promise);var b=Object.getPrototypeOf,S={}.hasOwnProperty;function C(t,e){return S.call(t,e)}function w(t,e){typeof e=="function"&&(e=e(b(t))),(typeof Reflect>"u"?h:Reflect.ownKeys)(e).forEach(function(n){_(t,n,e[n])})}var g=Object.defineProperty;function _(t,e,n,a){g(t,e,v(n&&C(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function y(t){return{from:function(e){return t.prototype=Object.create(e.prototype),_(t.prototype,"constructor",t),{extend:w.bind(null,t.prototype)}}}}var E=Object.getOwnPropertyDescriptor,k=[].slice;function T(t,e,n){return k.call(t,e,n)}function M(t,e){return e(t)}function q(t){if(!t)throw new Error("Assertion Failed")}function K(t){l.setImmediate?setImmediate(t):setTimeout(t,0)}function nt(t,e){if(typeof e=="string"&&C(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],a=0,s=e.length;a<s;++a){var f=nt(t,e[a]);n.push(f)}return n}var x=e.indexOf(".");if(x!==-1){var P=t[e.substr(0,x)];return P==null?void 0:nt(P,e.substr(x+1))}}function G(t,e,n){if(t&&e!==void 0&&!("isFrozen"in Object&&Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){q(typeof n!="string"&&"length"in n);for(var a=0,s=e.length;a<s;++a)G(t,e[a],n[a])}else{var f,x,P=e.indexOf(".");P!==-1?(f=e.substr(0,P),(x=e.substr(P+1))===""?n===void 0?d(t)&&!isNaN(parseInt(f))?t.splice(f,1):delete t[f]:t[f]=n:G(P=!(P=t[f])||!C(t,f)?t[f]={}:P,x,n)):n===void 0?d(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function ut(t){var e,n={};for(e in t)C(t,e)&&(n[e]=t[e]);return n}var tt=[].concat;function pt(t){return tt.apply([],t)}var At="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(pt([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(t){return l[t]}),Pt=new Set(At.map(function(t){return l[t]})),R=null;function J(t){return R=new WeakMap,t=(function e(n){if(!n||typeof n!="object")return n;var a=R.get(n);if(a)return a;if(d(n)){a=[],R.set(n,a);for(var s=0,f=n.length;s<f;++s)a.push(e(n[s]))}else if(Pt.has(n.constructor))a=n;else{var x,P=b(n);for(x in a=P===Object.prototype?{}:Object.create(P),R.set(n,a),n)C(n,x)&&(a[x]=e(n[x]))}return a})(t),R=null,t}var m={}.toString;function it(t){return m.call(t).slice(8,-1)}var Tt=typeof Symbol<"u"?Symbol.iterator:"@@iterator",lt=typeof Tt=="symbol"?function(t){var e;return t!=null&&(e=t[Tt])&&e.apply(t)}:function(){return null};function $t(t,e){return e=t.indexOf(e),0<=e&&t.splice(e,1),0<=e}var st={};function Ot(t){var e,n,a,s;if(arguments.length===1){if(d(t))return t.slice();if(this===st&&typeof t=="string")return[t];if(s=lt(t)){for(n=[];!(a=s.next()).done;)n.push(a.value);return n}if(t==null)return[t];if(typeof(e=t.length)!="number")return[t];for(n=new Array(e);e--;)n[e]=t[e];return n}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}var X=typeof Symbol<"u"?function(t){return t[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},dt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ye=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(dt),Z={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Et(t,e){this.name=t,this.message=e}function xt(t,e){return t+". Errors: "+Object.keys(e).map(function(n){return e[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function vt(t,e,n,a){this.failures=e,this.failedKeys=a,this.successCount=n,this.message=xt(t,e)}function qt(t,e){this.name="BulkError",this.failures=Object.keys(e).map(function(n){return e[n]}),this.failuresByPos=e,this.message=xt(t,this.failures)}y(Et).from(Error).extend({toString:function(){return this.name+": "+this.message}}),y(vt).from(Et),y(qt).from(Et);var Jt=ye.reduce(function(t,e){return t[e]=e+"Error",t},{}),jt=Et,mt=ye.reduce(function(t,e){var n=e+"Error";function a(s,f){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(f?`
 `+f:""),this.inner=f||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=Z[e]||n,this.inner=null)}return y(a).from(jt),t[e]=a,t},{});mt.Syntax=SyntaxError,mt.Type=TypeError,mt.Range=RangeError;var Xt=dt.reduce(function(t,e){return t[e+"Error"]=mt[e],t},{}),Wt=ye.reduce(function(t,e){return["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=mt[e]),t},{});function It(){}function ie(t){return t}function c(t,e){return t==null||t===ie?e:function(n){return e(t(n))}}function et(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Y(t,e){return t===It?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var a=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var f=e.apply(this,arguments);return a&&(this.onsuccess=this.onsuccess?et(a,this.onsuccess):a),s&&(this.onerror=this.onerror?et(s,this.onerror):s),f!==void 0?f:n}}function O(t,e){return t===It?e:function(){t.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?et(n,this.onsuccess):n),a&&(this.onerror=this.onerror?et(a,this.onerror):a)}}function A(t,e){return t===It?e:function(n){var a=t.apply(this,arguments);v(n,a);var s=this.onsuccess,f=this.onerror;return this.onsuccess=null,this.onerror=null,n=e.apply(this,arguments),s&&(this.onsuccess=this.onsuccess?et(s,this.onsuccess):s),f&&(this.onerror=this.onerror?et(f,this.onerror):f),a===void 0?n===void 0?void 0:n:v(a,n)}}function N(t,e){return t===It?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ot(t,e){return t===It?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,f=new Array(s);s--;)f[s]=arguments[s];return n.then(function(){return e.apply(a,f)})}return e.apply(this,arguments)}}Wt.ModifyError=vt,Wt.DexieError=Et,Wt.BulkError=qt;var at=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function V(t){at=t}var ct={},kt=100,At=typeof Promise>"u"?[]:(function(){var t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,b(t),t];var e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,b(e),t]})(),dt=At[0],ye=At[1],At=At[2],ye=ye&&ye.then,Nt=dt&&dt.constructor,Mt=!!At,ee=function(t,e){Re.push([t,e]),ue&&(queueMicrotask(Sa),ue=!1)},Ae=!0,ue=!0,fe=[],Vt=[],$e=ie,ve={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:It,pgp:!1,env:{},finalize:It},St=ve,Re=[],Ee=0,tn=[];function _t(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var e=this._PSD=St;if(typeof t!="function"){if(t!==ct)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&De(this,this._value))}this._state=null,this._value=null,++e.ref,(function n(a,s){try{s(function(f){if(a._state===null){if(f===a)throw new TypeError("A promise cannot be resolved with itself.");var x=a._lib&&nn();f&&typeof f.then=="function"?n(a,function(P,z){f instanceof _t?f._then(P,z):f.then(P,z)}):(a._state=!0,a._value=f,ri(a)),x&&rn()}},De.bind(null,a))}catch(f){De(a,f)}})(this,t)}var en={get:function(){var t=St,e=Fn;function n(a,s){var f=this,x=!t.global&&(t!==St||e!==Fn),P=x&&!Me(),z=new _t(function(D,F){gr(f,new ze(ai(a,t,x,P),ai(s,t,x,P),D,F,t))});return this._consoleTask&&(z._consoleTask=this._consoleTask),z}return n.prototype=ct,n},set:function(t){_(this,"then",t&&t.prototype===ct?en:{get:function(){return t},set:en.set})}};function ze(t,e,n,a,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=a,this.psd=s}function De(t,e){var n,a;Vt.push(e),t._state===null&&(n=t._lib&&nn(),e=$e(e),t._state=!1,t._value=e,a=t,fe.some(function(s){return s._value===a._value})||fe.push(a),ri(t),n&&rn())}function ri(t){var e=t._listeners;t._listeners=[];for(var n=0,a=e.length;n<a;++n)gr(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Ee===0&&(++Ee,ee(function(){--Ee==0&&vr()},[]))}function gr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ee,ee(ka,[n,t,e])}else t._listeners.push(e)}function ka(t,e,n){try{var a,s=e._value;!e._state&&Vt.length&&(Vt=[]),a=at&&e._consoleTask?e._consoleTask.run(function(){return t(s)}):t(s),e._state||Vt.indexOf(s)!==-1||(function(f){for(var x=fe.length;x;)if(fe[--x]._value===f._value)return fe.splice(x,1)})(e),n.resolve(a)}catch(f){n.reject(f)}finally{--Ee==0&&vr(),--n.psd.ref||n.psd.finalize()}}function Sa(){Ke(ve,function(){nn()&&rn()})}function nn(){var t=Ae;return ue=Ae=!1,t}function rn(){var t,e,n;do for(;0<Re.length;)for(t=Re,Re=[],n=t.length,e=0;e<n;++e){var a=t[e];a[0].apply(null,a[1])}while(0<Re.length);ue=Ae=!0}function vr(){var t=fe;fe=[],t.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)});for(var e=tn.slice(0),n=e.length;n;)e[--n]()}function Mn(t){return new _t(ct,!1,t)}function Zt(t,e){var n=St;return function(){var a=nn(),s=St;try{return Be(n,!0),t.apply(this,arguments)}catch(f){e&&e(f)}finally{Be(s,!1),a&&rn()}}}w(_t.prototype,{then:en,_then:function(t,e){gr(this,new ze(null,null,t,e,St))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=t,n=arguments[1];return typeof e=="function"?this.then(null,function(a){return(a instanceof e?n:Mn)(a)}):this.then(null,function(a){return(a&&a.name===e?n:Mn)(a)})},finally:function(t){return this.then(function(e){return _t.resolve(t()).then(function(){return e})},function(e){return _t.resolve(t()).then(function(){return Mn(e)})})},timeout:function(t,e){var n=this;return t<1/0?new _t(function(a,s){var f=setTimeout(function(){return s(new mt.Timeout(e))},t);n.then(a,s).finally(clearTimeout.bind(null,f))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&_(_t.prototype,Symbol.toStringTag,"Dexie.Promise"),ve.env=ii(),w(_t,{all:function(){var t=Ot.apply(null,arguments).map(Nn);return new _t(function(e,n){t.length===0&&e([]);var a=t.length;t.forEach(function(s,f){return _t.resolve(s).then(function(x){t[f]=x,--a||e(t)},n)})})},resolve:function(t){return t instanceof _t?t:t&&typeof t.then=="function"?new _t(function(e,n){t.then(e,n)}):new _t(ct,!0,t)},reject:Mn,race:function(){var t=Ot.apply(null,arguments).map(Nn);return new _t(function(e,n){t.map(function(a){return _t.resolve(a).then(e,n)})})},PSD:{get:function(){return St},set:function(t){return St=t}},totalEchoes:{get:function(){return Fn}},newPSD:Ie,usePSD:Ke,scheduler:{get:function(){return ee},set:function(t){ee=t}},rejectionMapper:{get:function(){return $e},set:function(t){$e=t}},follow:function(t,e){return new _t(function(n,a){return Ie(function(s,f){var x=St;x.unhandleds=[],x.onunhandled=f,x.finalize=et(function(){var P,z=this;P=function(){z.unhandleds.length===0?s():f(z.unhandleds[0])},tn.push(function D(){P(),tn.splice(tn.indexOf(D),1)}),++Ee,ee(function(){--Ee==0&&vr()},[])},x.finalize),t()},e,n,a)})}}),Nt&&(Nt.allSettled&&_(_t,"allSettled",function(){var t=Ot.apply(null,arguments).map(Nn);return new _t(function(e){t.length===0&&e([]);var n=t.length,a=new Array(n);t.forEach(function(s,f){return _t.resolve(s).then(function(x){return a[f]={status:"fulfilled",value:x}},function(x){return a[f]={status:"rejected",reason:x}}).then(function(){return--n||e(a)})})})}),Nt.any&&typeof AggregateError<"u"&&_(_t,"any",function(){var t=Ot.apply(null,arguments).map(Nn);return new _t(function(e,n){t.length===0&&n(new AggregateError([]));var a=t.length,s=new Array(a);t.forEach(function(f,x){return _t.resolve(f).then(function(P){return e(P)},function(P){s[x]=P,--a||n(new AggregateError(s))})})})}),Nt.withResolvers&&(_t.withResolvers=Nt.withResolvers));var ne={awaits:0,echoes:0,id:0},Ca=0,Bn=[],jn=0,Fn=0,Aa=0;function Ie(t,e,n,a){var s=St,f=Object.create(s);return f.parent=s,f.ref=0,f.global=!1,f.id=++Aa,ve.env,f.env=Mt?{Promise:_t,PromiseProp:{value:_t,configurable:!0,writable:!0},all:_t.all,race:_t.race,allSettled:_t.allSettled,any:_t.any,resolve:_t.resolve,reject:_t.reject}:{},e&&v(f,e),++s.ref,f.finalize=function(){--this.parent.ref||this.parent.finalize()},a=Ke(f,t,n,a),f.ref===0&&f.finalize(),a}function an(){return ne.id||(ne.id=++Ca),++ne.awaits,ne.echoes+=kt,ne.id}function Me(){return!!ne.awaits&&(--ne.awaits==0&&(ne.id=0),ne.echoes=ne.awaits*kt,!0)}function Nn(t){return ne.echoes&&t&&t.constructor===Nt?(an(),t.then(function(e){return Me(),e},function(e){return Me(),Yt(e)})):t}function Ea(){var t=Bn[Bn.length-1];Bn.pop(),Be(t,!1)}function Be(t,e){var n,a=St;(e?!ne.echoes||jn++&&t===St:!jn||--jn&&t===St)||queueMicrotask(e?function(s){++Fn,ne.echoes&&--ne.echoes!=0||(ne.echoes=ne.awaits=ne.id=0),Bn.push(St),Be(s,!0)}.bind(null,t):Ea),t!==St&&(St=t,a===ve&&(ve.env=ii()),Mt&&(n=ve.env.Promise,e=t.env,(a.global||t.global)&&(Object.defineProperty(l,"Promise",e.PromiseProp),n.all=e.all,n.race=e.race,n.resolve=e.resolve,n.reject=e.reject,e.allSettled&&(n.allSettled=e.allSettled),e.any&&(n.any=e.any))))}function ii(){var t=l.Promise;return Mt?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(l,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject}:{}}function Ke(t,e,n,a,s){var f=St;try{return Be(t,!0),e(n,a,s)}finally{Be(f,!1)}}function ai(t,e,n,a){return typeof t!="function"?t:function(){var s=St;n&&an(),Be(e,!0);try{return t.apply(this,arguments)}finally{Be(s,!1),a&&queueMicrotask(Me)}}}function yr(t){Promise===Nt&&ne.echoes===0?jn===0?t():enqueueNativeMicroTask(t):setTimeout(t,0)}(""+ye).indexOf("[native code]")===-1&&(an=Me=It);var Yt=_t.reject,qe="￿",Oe="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",oi="String expected.",on=[],Ln="__dbnames",br="readonly",wr="readwrite";function We(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}var si={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Un(t){return typeof t!="string"||/\./.test(t)?function(e){return e}:function(e){return e[t]===void 0&&t in e&&delete(e=J(e))[t],e}}function li(){throw mt.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Ft(t,e){try{var n=ui(t),a=ui(e);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return e<t?1:t<e?-1:0;case"binary":return(function(s,f){for(var x=s.length,P=f.length,z=x<P?x:P,D=0;D<z;++D)if(s[D]!==f[D])return s[D]<f[D]?-1:1;return x===P?0:x<P?-1:1})(ci(t),ci(e));case"Array":return(function(s,f){for(var x=s.length,P=f.length,z=x<P?x:P,D=0;D<z;++D){var F=Ft(s[D],f[D]);if(F!==0)return F}return x===P?0:x<P?-1:1})(t,e)}}catch{}return NaN}function ui(t){var e=typeof t;return e!="object"?e:ArrayBuffer.isView(t)?"binary":(t=it(t),t==="ArrayBuffer"?"binary":t)}function ci(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function Kn(t,e,n){var a=t.schema.yProps;return a?(e&&0<n.numFailures&&(e=e.filter(function(s,f){return!n.failures[f]})),Promise.all(a.map(function(s){return s=s.updatesTable,e?t.db.table(s).where("k").anyOf(e).delete():t.db.table(s).clear()})).then(function(){return n})):n}var yn=(hi.prototype.execute=function(t){var e=this["@@propmod"];if(e.add!==void 0){var n=e.add;if(d(n))return o(o([],d(t)?t:[],!0),n).sort();if(typeof n=="number")return(Number(t)||0)+n;if(typeof n=="bigint")try{return BigInt(t)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(e.remove!==void 0){var a=e.remove;if(d(a))return d(t)?t.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(t)-a;if(typeof a=="bigint")try{return BigInt(t)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=e.replacePrefix)===null||n===void 0?void 0:n[0],n&&typeof t=="string"&&t.startsWith(n)?e.replacePrefix[1]+t.substring(n.length):t},hi);function hi(t){this["@@propmod"]=t}function di(t,e){for(var n=h(e),a=n.length,s=!1,f=0;f<a;++f){var x=n[f],P=e[x],z=nt(t,x);P instanceof yn?(G(t,x,P.execute(z)),s=!0):z!==P&&(G(t,x,P),s=!0)}return s}var fi=(Ht.prototype._trans=function(t,e,n){var a=this._tx||St.trans,s=this.name,f=at&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function x(D,F,$){if(!$.schema[s])throw new mt.NotFound("Table "+s+" not part of transaction");return e($.idbtrans,$)}var P=nn();try{var z=a&&a.db._novip===this.db._novip?a===St.trans?a._promise(t,x,n):Ie(function(){return a._promise(t,x,n)},{trans:a,transless:St.transless||St}):(function D(F,$,U,I){if(F.idbdb&&(F._state.openComplete||St.letThrough||F._vip)){var B=F._createTransaction($,U,F._dbSchema);try{B.create(),F._state.PR1398_maxLoop=3}catch(j){return j.name===Jt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return D(F,$,U,I)})):Yt(j)}return B._promise($,function(j,L){return Ie(function(){return St.trans=B,I(j,L,B)})}).then(function(j){if($==="readwrite")try{B.idbtrans.commit()}catch{}return $==="readonly"?j:B._completion.then(function(){return j})})}if(F._state.openComplete)return Yt(new mt.DatabaseClosed(F._state.dbOpenError));if(!F._state.isBeingOpened){if(!F._state.autoOpen)return Yt(new mt.DatabaseClosed);F.open().catch(It)}return F._state.dbReadyPromise.then(function(){return D(F,$,U,I)})})(this.db,t,[this.name],x);return f&&(z._consoleTask=f,z=z.catch(function(D){return console.trace(D),Yt(D)})),z}finally{P&&rn()}},Ht.prototype.get=function(t,e){var n=this;return t&&t.constructor===Object?this.where(t).first(e):t==null?Yt(new mt.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:t}).then(function(s){return n.hook.reading.fire(s)})}).then(e)},Ht.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(d(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var e=h(t);if(e.length===1)return this.where(e[0]).equals(t[e[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(P){if(P.compound&&e.every(function(D){return 0<=P.keyPath.indexOf(D)})){for(var z=0;z<e.length;++z)if(e.indexOf(P.keyPath[z])===-1)return!1;return!0}return!1}).sort(function(P,z){return P.keyPath.length-z.keyPath.length})[0];if(n&&this.db._maxKey!==qe){var f=n.keyPath.slice(0,e.length);return this.where(f).equals(f.map(function(z){return t[z]}))}!n&&at&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(e.join("+"),"]"));var a=this.schema.idxByName;function s(P,z){return Ft(P,z)===0}var x=e.reduce(function($,z){var D=$[0],F=$[1],$=a[z],U=t[z];return[D||$,D||!$?We(F,$&&$.multi?function(I){return I=nt(I,z),d(I)&&I.some(function(B){return s(U,B)})}:function(I){return s(U,nt(I,z))}):F]},[null,null]),f=x[0],x=x[1];return f?this.where(f.name).equals(t[f.keyPath]).filter(x):n?this.filter(x):this.where(e).equals("")},Ht.prototype.filter=function(t){return this.toCollection().and(t)},Ht.prototype.count=function(t){return this.toCollection().count(t)},Ht.prototype.offset=function(t){return this.toCollection().offset(t)},Ht.prototype.limit=function(t){return this.toCollection().limit(t)},Ht.prototype.each=function(t){return this.toCollection().each(t)},Ht.prototype.toArray=function(t){return this.toCollection().toArray(t)},Ht.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ht.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,d(t)?"[".concat(t.join("+"),"]"):t))},Ht.prototype.reverse=function(){return this.toCollection().reverse()},Ht.prototype.mapToClass=function(t){var e,n=this.db,a=this.name;function s(){return e!==null&&e.apply(this,arguments)||this}(this.schema.mappedClass=t).prototype instanceof li&&((function(z,D){if(typeof D!="function"&&D!==null)throw new TypeError("Class extends value "+String(D)+" is not a constructor or null");function F(){this.constructor=z}r(z,D),z.prototype=D===null?Object.create(D):(F.prototype=D.prototype,new F)})(s,e=t),Object.defineProperty(s.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),s.prototype.table=function(){return a},t=s);for(var f=new Set,x=t.prototype;x;x=b(x))Object.getOwnPropertyNames(x).forEach(function(z){return f.add(z)});function P(z){if(!z)return z;var D,F=Object.create(t.prototype);for(D in z)if(!f.has(D))try{F[D]=z[D]}catch{}return F}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=P,this.hook("reading",P),t},Ht.prototype.defineClass=function(){return this.mapToClass(function(t){v(this,t)})},Ht.prototype.add=function(t,e){var n=this,a=this.schema.primKey,s=a.auto,f=a.keyPath,x=t;return f&&s&&(x=Un(f)(t)),this._trans("readwrite",function(P){return n.core.mutate({trans:P,type:"add",keys:e!=null?[e]:null,values:[x]})}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):P.lastResult}).then(function(P){if(f)try{G(t,f,P)}catch{}return P})},Ht.prototype.upsert=function(t,e){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:t}).then(function(f){var x=f??{};return di(x,e),a&&G(x,a,t),n.core.mutate({trans:s,type:"put",values:[x],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[e]}}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):!!f})})})},Ht.prototype.update=function(t,e){return typeof t!="object"||d(t)?this.where(":id").equals(t).modify(e):(t=nt(t,this.schema.primKey.keyPath),t===void 0?Yt(new mt.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(t).modify(e))},Ht.prototype.put=function(t,e){var n=this,a=this.schema.primKey,s=a.auto,f=a.keyPath,x=t;return f&&s&&(x=Un(f)(t)),this._trans("readwrite",function(P){return n.core.mutate({trans:P,type:"put",values:[x],keys:e!=null?[e]:null})}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):P.lastResult}).then(function(P){if(f)try{G(t,f,P)}catch{}return P})},Ht.prototype.delete=function(t){var e=this;return this._trans("readwrite",function(n){return e.core.mutate({trans:n,type:"delete",keys:[t]}).then(function(a){return Kn(e,[t],a)}).then(function(a){return a.numFailures?_t.reject(a.failures[0]):void 0})})},Ht.prototype.clear=function(){var t=this;return this._trans("readwrite",function(e){return t.core.mutate({trans:e,type:"deleteRange",range:si}).then(function(n){return Kn(t,null,n)})}).then(function(e){return e.numFailures?_t.reject(e.failures[0]):void 0})},Ht.prototype.bulkGet=function(t){var e=this;return this._trans("readonly",function(n){return e.core.getMany({keys:t,trans:n}).then(function(a){return a.map(function(s){return e.hook.reading.fire(s)})})})},Ht.prototype.bulkAdd=function(t,e,n){var a=this,s=Array.isArray(e)?e:void 0,f=(n=n||(s?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(x){var D=a.schema.primKey,P=D.auto,D=D.keyPath;if(D&&s)throw new mt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var z=t.length,D=D&&P?t.map(Un(D)):t;return a.core.mutate({trans:x,type:"add",keys:s,values:D,wantResults:f}).then(function(B){var $=B.numFailures,U=B.results,I=B.lastResult,B=B.failures;if($===0)return f?U:I;throw new qt("".concat(a.name,".bulkAdd(): ").concat($," of ").concat(z," operations failed"),B)})})},Ht.prototype.bulkPut=function(t,e,n){var a=this,s=Array.isArray(e)?e:void 0,f=(n=n||(s?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(x){var D=a.schema.primKey,P=D.auto,D=D.keyPath;if(D&&s)throw new mt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var z=t.length,D=D&&P?t.map(Un(D)):t;return a.core.mutate({trans:x,type:"put",keys:s,values:D,wantResults:f}).then(function(B){var $=B.numFailures,U=B.results,I=B.lastResult,B=B.failures;if($===0)return f?U:I;throw new qt("".concat(a.name,".bulkPut(): ").concat($," of ").concat(z," operations failed"),B)})})},Ht.prototype.bulkUpdate=function(t){var e=this,n=this.core,a=t.map(function(x){return x.key}),s=t.map(function(x){return x.changes}),f=[];return this._trans("readwrite",function(x){return n.getMany({trans:x,keys:a,cache:"clone"}).then(function(P){var z=[],D=[];t.forEach(function($,U){var I=$.key,B=$.changes,j=P[U];if(j){for(var L=0,W=Object.keys(B);L<W.length;L++){var H=W[L],Q=B[H];if(H===e.schema.primKey.keyPath){if(Ft(Q,I)!==0)throw new mt.Constraint("Cannot update primary key in bulkUpdate()")}else G(j,H,Q)}f.push(U),z.push(I),D.push(j)}});var F=z.length;return n.mutate({trans:x,type:"put",keys:z,values:D,updates:{keys:a,changeSpecs:s}}).then(function($){var U=$.numFailures,I=$.failures;if(U===0)return F;for(var B=0,j=Object.keys(I);B<j.length;B++){var L,W=j[B],H=f[Number(W)];H!=null&&(L=I[W],delete I[W],I[H]=L)}throw new qt("".concat(e.name,".bulkUpdate(): ").concat(U," of ").concat(F," operations failed"),I)})})})},Ht.prototype.bulkDelete=function(t){var e=this,n=t.length;return this._trans("readwrite",function(a){return e.core.mutate({trans:a,type:"delete",keys:t}).then(function(s){return Kn(e,t,s)})}).then(function(x){var s=x.numFailures,f=x.lastResult,x=x.failures;if(s===0)return f;throw new qt("".concat(e.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),x)})},Ht);function Ht(){}function bn(t){function e(x,P){if(P){for(var z=arguments.length,D=new Array(z-1);--z;)D[z-1]=arguments[z];return n[x].subscribe.apply(null,D),t}if(typeof x=="string")return n[x]}var n={};e.addEventType=f;for(var a=1,s=arguments.length;a<s;++a)f(arguments[a]);return e;function f(x,P,z){if(typeof x!="object"){var D;P=P||N;var F={subscribers:[],fire:z=z||It,subscribe:function($){F.subscribers.indexOf($)===-1&&(F.subscribers.push($),F.fire=P(F.fire,$))},unsubscribe:function($){F.subscribers=F.subscribers.filter(function(U){return U!==$}),F.fire=F.subscribers.reduce(P,z)}};return n[x]=e[x]=F}h(D=x).forEach(function($){var U=D[$];if(d(U))f($,D[$][0],D[$][1]);else{if(U!=="asap")throw new mt.InvalidArgument("Invalid event config");var I=f($,ie,function(){for(var B=arguments.length,j=new Array(B);B--;)j[B]=arguments[B];I.subscribers.forEach(function(L){K(function(){L.apply(null,j)})})})}})}}function wn(t,e){return y(e).from({prototype:t}),e}function sn(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function _r(t,e){t.filter=We(t.filter,e)}function xr(t,e,n){var a=t.replayFilter;t.replayFilter=a?function(){return We(a(),e())}:e,t.justLimit=n&&!a}function qn(t,e){if(t.isPrimKey)return e.primaryKey;var n=e.getIndexByKeyPath(t.index);if(!n)throw new mt.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function pi(t,e,n){var a=qn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:a,range:t.range}})}function Wn(t,e,n,a){var s=t.replayFilter?We(t.filter,t.replayFilter()):t.filter;if(t.or){var f={},x=function(P,z,D){var F,$;s&&!s(z,D,function(U){return z.stop(U)},function(U){return z.fail(U)})||(($=""+(F=z.primaryKey))=="[object ArrayBuffer]"&&($=""+new Uint8Array(F)),C(f,$)||(f[$]=!0,e(P,z,D)))};return Promise.all([t.or._iterate(x,n),mi(pi(t,a,n),t.algorithm,x,!t.keysOnly&&t.valueMapper)])}return mi(pi(t,a,n),We(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function mi(t,e,n,a){var s=Zt(a?function(f,x,P){return n(a(f),x,P)}:n);return t.then(function(f){if(f)return f.start(function(){var x=function(){return f.continue()};e&&!e(f,function(P){return x=P},function(P){f.stop(P),x=It},function(P){f.fail(P),x=It})||s(f.value,f,function(P){return x=P}),x()})})}var Oa=(Lt.prototype._read=function(t,e){var n=this._ctx;return n.error?n.table._trans(null,Yt.bind(null,n.error)):n.table._trans("readonly",t).then(e)},Lt.prototype._write=function(t){var e=this._ctx;return e.error?e.table._trans(null,Yt.bind(null,e.error)):e.table._trans("readwrite",t,"locked")},Lt.prototype._addAlgorithm=function(t){var e=this._ctx;e.algorithm=We(e.algorithm,t)},Lt.prototype._iterate=function(t,e){return Wn(this._ctx,t,e,this._ctx.table.core)},Lt.prototype.clone=function(t){var e=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return t&&v(n,t),e._ctx=n,e},Lt.prototype.raw=function(){return this._ctx.valueMapper=null,this},Lt.prototype.each=function(t){var e=this._ctx;return this._read(function(n){return Wn(e,t,n,e.table.core)})},Lt.prototype.count=function(t){var e=this;return this._read(function(n){var a=e._ctx,s=a.table.core;if(sn(a,!0))return s.count({trans:n,query:{index:qn(a,s.schema),range:a.range}}).then(function(x){return Math.min(x,a.limit)});var f=0;return Wn(a,function(){return++f,!1},n,s).then(function(){return f})}).then(t)},Lt.prototype.sortBy=function(t,e){var n=t.split(".").reverse(),a=n[0],s=n.length-1;function f(z,D){return D?f(z[n[D]],D-1):z[a]}var x=this._ctx.dir==="next"?1:-1;function P(z,D){return Ft(f(z,s),f(D,s))*x}return this.toArray(function(z){return z.sort(P)}).then(e)},Lt.prototype.toArray=function(t){var e=this;return this._read(function(n){var a=e._ctx;if(a.dir==="next"&&sn(a,!0)&&0<a.limit){var s=a.valueMapper,f=qn(a,a.table.core.schema);return a.table.core.query({trans:n,limit:a.limit,values:!0,query:{index:f,range:a.range}}).then(function(P){return P=P.result,s?P.map(s):P})}var x=[];return Wn(a,function(P){return x.push(P)},n,a.table.core).then(function(){return x})},t)},Lt.prototype.offset=function(t){var e=this._ctx;return t<=0||(e.offset+=t,sn(e)?xr(e,function(){var n=t;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):xr(e,function(){var n=t;return function(){return--n<0}})),this},Lt.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),xr(this._ctx,function(){var e=t;return function(n,a,s){return--e<=0&&a(s),0<=e}},!0),this},Lt.prototype.until=function(t,e){return _r(this._ctx,function(n,a,s){return!t(n.value)||(a(s),e)}),this},Lt.prototype.first=function(t){return this.limit(1).toArray(function(e){return e[0]}).then(t)},Lt.prototype.last=function(t){return this.reverse().first(t)},Lt.prototype.filter=function(t){var e;return _r(this._ctx,function(n){return t(n.value)}),(e=this._ctx).isMatch=We(e.isMatch,t),this},Lt.prototype.and=function(t){return this.filter(t)},Lt.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},Lt.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Lt.prototype.desc=function(){return this.reverse()},Lt.prototype.eachKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,a){t(a.key,a)})},Lt.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},Lt.prototype.eachPrimaryKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,a){t(a.primaryKey,a)})},Lt.prototype.keys=function(t){var e=this._ctx;e.keysOnly=!e.isMatch;var n=[];return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(t)},Lt.prototype.primaryKeys=function(t){var e=this._ctx;if(e.dir==="next"&&sn(e,!0)&&0<e.limit)return this._read(function(a){var s=qn(e,e.table.core.schema);return e.table.core.query({trans:a,values:!1,limit:e.limit,query:{index:s,range:e.range}})}).then(function(a){return a.result}).then(t);e.keysOnly=!e.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(t)},Lt.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},Lt.prototype.firstKey=function(t){return this.limit(1).keys(function(e){return e[0]}).then(t)},Lt.prototype.lastKey=function(t){return this.reverse().firstKey(t)},Lt.prototype.distinct=function(){var t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];if(!t||!t.multi)return this;var e={};return _r(this._ctx,function(s){var a=s.primaryKey.toString(),s=C(e,a);return e[a]=!0,!s}),this},Lt.prototype.modify=function(t){var e=this,n=this._ctx;return this._write(function(a){var s=typeof t=="function"?t:function(j){return di(j,t)},f=n.table.core,D=f.schema.primaryKey,x=D.outbound,P=D.extractKey,z=200,D=e.db._options.modifyChunkSize;D&&(z=typeof D=="object"?D[f.name]||D["*"]||200:D);function F(j,H){var W=H.failures,H=H.numFailures;U+=j-H;for(var Q=0,rt=h(W);Q<rt.length;Q++){var ft=rt[Q];$.push(W[ft])}}var $=[],U=0,I=[],B=t===gi;return e.clone().primaryKeys().then(function(j){function L(H){var Q=Math.min(z,j.length-H),rt=j.slice(H,H+Q);return(B?Promise.resolve([]):f.getMany({trans:a,keys:rt,cache:"immutable"})).then(function(ft){var bt=[],ht=[],gt=x?[]:null,wt=B?rt:[];if(!B)for(var yt=0;yt<Q;++yt){var Ct=ft[yt],zt={value:J(Ct),primKey:j[H+yt]};s.call(zt,zt.value,zt)!==!1&&(zt.value==null?wt.push(j[H+yt]):x||Ft(P(Ct),P(zt.value))===0?(ht.push(zt.value),x&&gt.push(j[H+yt])):(wt.push(j[H+yt]),bt.push(zt.value)))}return Promise.resolve(0<bt.length&&f.mutate({trans:a,type:"add",values:bt}).then(function(Dt){for(var Bt in Dt.failures)wt.splice(parseInt(Bt),1);F(bt.length,Dt)})).then(function(){return(0<ht.length||W&&typeof t=="object")&&f.mutate({trans:a,type:"put",keys:gt,values:ht,criteria:W,changeSpec:typeof t!="function"&&t,isAdditionalChunk:0<H}).then(function(Dt){return F(ht.length,Dt)})}).then(function(){return(0<wt.length||W&&B)&&f.mutate({trans:a,type:"delete",keys:wt,criteria:W,isAdditionalChunk:0<H}).then(function(Dt){return Kn(n.table,wt,Dt)}).then(function(Dt){return F(wt.length,Dt)})}).then(function(){return j.length>H+Q&&L(H+z)})})}var W=sn(n)&&n.limit===1/0&&(typeof t!="function"||B)&&{index:n.index,range:n.range};return L(0).then(function(){if(0<$.length)throw new vt("Error modifying one or more objects",$,U,I);return j.length})})})},Lt.prototype.delete=function(){var t=this._ctx,e=t.range;return!sn(t)||t.table.schema.yProps||!t.isPrimKey&&e.type!==3?this.modify(gi):this._write(function(n){var a=t.table.core.schema.primaryKey,s=e;return t.table.core.count({trans:n,query:{index:a,range:s}}).then(function(f){return t.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(z){var P=z.failures,z=z.numFailures;if(z)throw new vt("Could not delete some values",Object.keys(P).map(function(D){return P[D]}),f-z);return f-z})})})},Lt);function Lt(){}var gi=function(t,e){return e.value=null};function Pa(t,e){return t<e?-1:t===e?0:1}function Ta(t,e){return e<t?-1:t===e?0:1}function pe(t,e,n){return t=t instanceof yi?new t.Collection(t):t,t._ctx.error=new(n||TypeError)(e),t}function ln(t){return new t.Collection(t,function(){return vi("")}).limit(0)}function Vn(t,e,n,a){var s,f,x,P,z,D,F,$=n.length;if(!n.every(function(B){return typeof B=="string"}))return pe(t,oi);function U(B){s=B==="next"?function(L){return L.toUpperCase()}:function(L){return L.toLowerCase()},f=B==="next"?function(L){return L.toLowerCase()}:function(L){return L.toUpperCase()},x=B==="next"?Pa:Ta;var j=n.map(function(L){return{lower:f(L),upper:s(L)}}).sort(function(L,W){return x(L.lower,W.lower)});P=j.map(function(L){return L.upper}),z=j.map(function(L){return L.lower}),F=(D=B)==="next"?"":a}U("next"),t=new t.Collection(t,function(){return je(P[0],z[$-1]+a)}),t._ondirectionchange=function(B){U(B)};var I=0;return t._addAlgorithm(function(B,j,L){var W=B.key;if(typeof W!="string")return!1;var H=f(W);if(e(H,z,I))return!0;for(var Q=null,rt=I;rt<$;++rt){var ft=(function(bt,ht,gt,wt,yt,Ct){for(var zt=Math.min(bt.length,wt.length),Dt=-1,Bt=0;Bt<zt;++Bt){var me=ht[Bt];if(me!==wt[Bt])return yt(bt[Bt],gt[Bt])<0?bt.substr(0,Bt)+gt[Bt]+gt.substr(Bt+1):yt(bt[Bt],wt[Bt])<0?bt.substr(0,Bt)+wt[Bt]+gt.substr(Bt+1):0<=Dt?bt.substr(0,Dt)+ht[Dt]+gt.substr(Dt+1):null;yt(bt[Bt],me)<0&&(Dt=Bt)}return zt<wt.length&&Ct==="next"?bt+gt.substr(bt.length):zt<bt.length&&Ct==="prev"?bt.substr(0,gt.length):Dt<0?null:bt.substr(0,Dt)+wt[Dt]+gt.substr(Dt+1)})(W,H,P[rt],z[rt],x,D);ft===null&&Q===null?I=rt+1:(Q===null||0<x(Q,ft))&&(Q=ft)}return j(Q!==null?function(){B.continue(Q+F)}:L),!1}),t}function je(t,e,n,a){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:a}}function vi(t){return{type:1,lower:t,upper:t}}var yi=(Object.defineProperty(re.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),re.prototype.between=function(t,e,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(t,e)||this._cmp(t,e)===0&&(n||a)&&(!n||!a)?ln(this):new this.Collection(this,function(){return je(t,e,!n,!a)})}catch{return pe(this,Oe)}},re.prototype.equals=function(t){return t==null?pe(this,Oe):new this.Collection(this,function(){return vi(t)})},re.prototype.above=function(t){return t==null?pe(this,Oe):new this.Collection(this,function(){return je(t,void 0,!0)})},re.prototype.aboveOrEqual=function(t){return t==null?pe(this,Oe):new this.Collection(this,function(){return je(t,void 0,!1)})},re.prototype.below=function(t){return t==null?pe(this,Oe):new this.Collection(this,function(){return je(void 0,t,!1,!0)})},re.prototype.belowOrEqual=function(t){return t==null?pe(this,Oe):new this.Collection(this,function(){return je(void 0,t)})},re.prototype.startsWith=function(t){return typeof t!="string"?pe(this,oi):this.between(t,t+qe,!0,!0)},re.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):Vn(this,function(e,n){return e.indexOf(n[0])===0},[t],qe)},re.prototype.equalsIgnoreCase=function(t){return Vn(this,function(e,n){return e===n[0]},[t],"")},re.prototype.anyOfIgnoreCase=function(){var t=Ot.apply(st,arguments);return t.length===0?ln(this):Vn(this,function(e,n){return n.indexOf(e)!==-1},t,"")},re.prototype.startsWithAnyOfIgnoreCase=function(){var t=Ot.apply(st,arguments);return t.length===0?ln(this):Vn(this,function(e,n){return n.some(function(a){return e.indexOf(a)===0})},t,qe)},re.prototype.anyOf=function(){var t=this,e=Ot.apply(st,arguments),n=this._cmp;try{e.sort(n)}catch{return pe(this,Oe)}if(e.length===0)return ln(this);var a=new this.Collection(this,function(){return je(e[0],e[e.length-1])});a._ondirectionchange=function(f){n=f==="next"?t._ascending:t._descending,e.sort(n)};var s=0;return a._addAlgorithm(function(f,x,P){for(var z=f.key;0<n(z,e[s]);)if(++s===e.length)return x(P),!1;return n(z,e[s])===0||(x(function(){f.continue(e[s])}),!1)}),a},re.prototype.notEqual=function(t){return this.inAnyRange([[-1/0,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},re.prototype.noneOf=function(){var t=Ot.apply(st,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return pe(this,Oe)}var e=t.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return e.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(e,{includeLowers:!1,includeUppers:!1})},re.prototype.inAnyRange=function(W,e){var n=this,a=this._cmp,s=this._ascending,f=this._descending,x=this._min,P=this._max;if(W.length===0)return ln(this);if(!W.every(function(H){return H[0]!==void 0&&H[1]!==void 0&&s(H[0],H[1])<=0}))return pe(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",mt.InvalidArgument);var z=!e||e.includeLowers!==!1,D=e&&e.includeUppers===!0,F,$=s;function U(H,Q){return $(H[0],Q[0])}try{(F=W.reduce(function(H,Q){for(var rt=0,ft=H.length;rt<ft;++rt){var bt=H[rt];if(a(Q[0],bt[1])<0&&0<a(Q[1],bt[0])){bt[0]=x(bt[0],Q[0]),bt[1]=P(bt[1],Q[1]);break}}return rt===ft&&H.push(Q),H},[])).sort(U)}catch{return pe(this,Oe)}var I=0,B=D?function(H){return 0<s(H,F[I][1])}:function(H){return 0<=s(H,F[I][1])},j=z?function(H){return 0<f(H,F[I][0])}:function(H){return 0<=f(H,F[I][0])},L=B,W=new this.Collection(this,function(){return je(F[0][0],F[F.length-1][1],!z,!D)});return W._ondirectionchange=function(H){$=H==="next"?(L=B,s):(L=j,f),F.sort(U)},W._addAlgorithm(function(H,Q,rt){for(var ft,bt=H.key;L(bt);)if(++I===F.length)return Q(rt),!1;return!B(ft=bt)&&!j(ft)||(n._cmp(bt,F[I][1])===0||n._cmp(bt,F[I][0])===0||Q(function(){$===s?H.continue(F[I][0]):H.continue(F[I][1])}),!1)}),W},re.prototype.startsWithAnyOf=function(){var t=Ot.apply(st,arguments);return t.every(function(e){return typeof e=="string"})?t.length===0?ln(this):this.inAnyRange(t.map(function(e){return[e,e+qe]})):pe(this,"startsWithAnyOf() only works with strings")},re);function re(){}function ke(t){return Zt(function(e){return _n(e),t(e.target.error),!1})}function _n(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}var xn="storagemutated",kr="x-storagemutated-1",Fe=bn(null,xn),$a=(Se.prototype._lock=function(){return q(!St.global),++this._reculock,this._reculock!==1||St.global||(St.lockOwnerFor=this),this},Se.prototype._unlock=function(){if(q(!St.global),--this._reculock==0)for(St.global||(St.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var t=this._blockedFuncs.shift();try{Ke(t[1],t[0])}catch{}}return this},Se.prototype._locked=function(){return this._reculock&&St.lockOwnerFor!==this},Se.prototype.create=function(t){var e=this;if(!this.mode)return this;var n=this.db.idbdb,a=this.db._state.dbOpenError;if(q(!this.idbtrans),!t&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new mt.DatabaseClosed(a);case"MissingAPIError":throw new mt.MissingAPI(a.message,a);default:throw new mt.OpenFailed(a)}if(!this.active)throw new mt.TransactionInactive;return q(this._completion._state===null),(t=this.idbtrans=t||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Zt(function(s){_n(s),e._reject(t.error)}),t.onabort=Zt(function(s){_n(s),e.active&&e._reject(new mt.Abort(t.error)),e.active=!1,e.on("abort").fire(s)}),t.oncomplete=Zt(function(){e.active=!1,e._resolve(),"mutatedParts"in t&&Fe.storagemutated.fire(t.mutatedParts)}),this},Se.prototype._promise=function(t,e,n){var a=this;if(t==="readwrite"&&this.mode!=="readwrite")return Yt(new mt.ReadOnly("Transaction is readonly"));if(!this.active)return Yt(new mt.TransactionInactive);if(this._locked())return new _t(function(f,x){a._blockedFuncs.push([function(){a._promise(t,e,n).then(f,x)},St])});if(n)return Ie(function(){var f=new _t(function(x,P){a._lock();var z=e(x,P,a);z&&z.then&&z.then(x,P)});return f.finally(function(){return a._unlock()}),f._lib=!0,f});var s=new _t(function(f,x){var P=e(f,x,a);P&&P.then&&P.then(f,x)});return s._lib=!0,s},Se.prototype._root=function(){return this.parent?this.parent._root():this},Se.prototype.waitFor=function(t){var e,n=this._root(),a=_t.resolve(t);n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],e=n.idbtrans.objectStore(n.storeNames[0]),(function f(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(e.get(-1/0).onsuccess=f)})());var s=n._waitingFor;return new _t(function(f,x){a.then(function(P){return n._waitingQueue.push(Zt(f.bind(null,P)))},function(P){return n._waitingQueue.push(Zt(x.bind(null,P)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},Se.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new mt.Abort))},Se.prototype.table=function(t){var e=this._memoizedTables||(this._memoizedTables={});if(C(e,t))return e[t];var n=this.schema[t];if(!n)throw new mt.NotFound("Table "+t+" not part of transaction");return n=new this.db.Table(t,n,this),n.core=this.db.core.table(t),e[t]=n},Se);function Se(){}function Sr(t,e,n,a,s,f,x,P){return{name:t,keyPath:e,unique:n,multi:a,auto:s,compound:f,src:(n&&!x?"&":"")+(a?"*":"")+(s?"++":"")+bi(e),type:P}}function bi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Cr(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,f,x){return x=a(f,x),x&&(s[x[0]]=x[1]),s},{}))};var a}var kn=function(t){try{return t.only([[]]),kn=function(){return[[]]},[[]]}catch{return kn=function(){return qe},qe}};function Ar(t){return t==null?function(){}:typeof t=="string"?(e=t).split(".").length===1?function(n){return n[e]}:function(n){return nt(n,e)}:function(n){return nt(n,t)};var e}function wi(t){return[].slice.call(t)}var Ra=0;function Sn(t){return t==null?":id":typeof t=="string"?t:"[".concat(t.join("+"),"]")}function za(t,e,z){function a(L){if(L.type===3)return null;if(L.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var I=L.lower,B=L.upper,j=L.lowerOpen,L=L.upperOpen;return I===void 0?B===void 0?null:e.upperBound(B,!!L):B===void 0?e.lowerBound(I,!!j):e.bound(I,B,!!j,!!L)}function s(U){var I,B=U.name;return{name:B,schema:U,mutate:function(j){var L=j.trans,W=j.type,H=j.keys,Q=j.values,rt=j.range;return new Promise(function(ft,bt){ft=Zt(ft);var ht=L.objectStore(B),gt=ht.keyPath==null,wt=W==="put"||W==="add";if(!wt&&W!=="delete"&&W!=="deleteRange")throw new Error("Invalid operation type: "+W);var yt,Ct=(H||Q||{length:1}).length;if(H&&Q&&H.length!==Q.length)throw new Error("Given keys array must have same length as given values array.");if(Ct===0)return ft({numFailures:0,failures:{},results:[],lastResult:void 0});function zt(ce){++me,_n(ce)}var Dt=[],Bt=[],me=0;if(W==="deleteRange"){if(rt.type===4)return ft({numFailures:me,failures:Bt,results:[],lastResult:void 0});rt.type===3?Dt.push(yt=ht.clear()):Dt.push(yt=ht.delete(a(rt)))}else{var gt=wt?gt?[Q,H]:[Q,null]:[H,null],Rt=gt[0],oe=gt[1];if(wt)for(var se=0;se<Ct;++se)Dt.push(yt=oe&&oe[se]!==void 0?ht[W](Rt[se],oe[se]):ht[W](Rt[se])),yt.onerror=zt;else for(se=0;se<Ct;++se)Dt.push(yt=ht[W](Rt[se])),yt.onerror=zt}function ir(ce){ce=ce.target.result,Dt.forEach(function(Ze,qr){return Ze.error!=null&&(Bt[qr]=Ze.error)}),ft({numFailures:me,failures:Bt,results:W==="delete"?H:Dt.map(function(Ze){return Ze.result}),lastResult:ce})}yt.onerror=function(ce){zt(ce),ir(ce)},yt.onsuccess=ir})},getMany:function(j){var L=j.trans,W=j.keys;return new Promise(function(H,Q){H=Zt(H);for(var rt,ft=L.objectStore(B),bt=W.length,ht=new Array(bt),gt=0,wt=0,yt=function(Dt){Dt=Dt.target,ht[Dt._pos]=Dt.result,++wt===gt&&H(ht)},Ct=ke(Q),zt=0;zt<bt;++zt)W[zt]!=null&&((rt=ft.get(W[zt]))._pos=zt,rt.onsuccess=yt,rt.onerror=Ct,++gt);gt===0&&H(ht)})},get:function(j){var L=j.trans,W=j.key;return new Promise(function(H,Q){H=Zt(H);var rt=L.objectStore(B).get(W);rt.onsuccess=function(ft){return H(ft.target.result)},rt.onerror=ke(Q)})},query:(I=D,function(j){return new Promise(function(L,W){L=Zt(L);var H,Q,rt,gt=j.trans,ft=j.values,bt=j.limit,yt=j.query,ht=bt===1/0?void 0:bt,wt=yt.index,yt=yt.range,gt=gt.objectStore(B),wt=wt.isPrimaryKey?gt:gt.index(wt.name),yt=a(yt);if(bt===0)return L({result:[]});I?((ht=ft?wt.getAll(yt,ht):wt.getAllKeys(yt,ht)).onsuccess=function(Ct){return L({result:Ct.target.result})},ht.onerror=ke(W)):(H=0,Q=!ft&&"openKeyCursor"in wt?wt.openKeyCursor(yt):wt.openCursor(yt),rt=[],Q.onsuccess=function(Ct){var zt=Q.result;return zt?(rt.push(ft?zt.value:zt.primaryKey),++H===bt?L({result:rt}):void zt.continue()):L({result:rt})},Q.onerror=ke(W))})}),openCursor:function(j){var L=j.trans,W=j.values,H=j.query,Q=j.reverse,rt=j.unique;return new Promise(function(ft,bt){ft=Zt(ft);var wt=H.index,ht=H.range,gt=L.objectStore(B),gt=wt.isPrimaryKey?gt:gt.index(wt.name),wt=Q?rt?"prevunique":"prev":rt?"nextunique":"next",yt=!W&&"openKeyCursor"in gt?gt.openKeyCursor(a(ht),wt):gt.openCursor(a(ht),wt);yt.onerror=ke(bt),yt.onsuccess=Zt(function(Ct){var zt,Dt,Bt,me,Rt=yt.result;Rt?(Rt.___id=++Ra,Rt.done=!1,zt=Rt.continue.bind(Rt),Dt=(Dt=Rt.continuePrimaryKey)&&Dt.bind(Rt),Bt=Rt.advance.bind(Rt),me=function(){throw new Error("Cursor not stopped")},Rt.trans=L,Rt.stop=Rt.continue=Rt.continuePrimaryKey=Rt.advance=function(){throw new Error("Cursor not started")},Rt.fail=Zt(bt),Rt.next=function(){var oe=this,se=1;return this.start(function(){return se--?oe.continue():oe.stop()}).then(function(){return oe})},Rt.start=function(oe){function se(){if(yt.result)try{oe()}catch(ce){Rt.fail(ce)}else Rt.done=!0,Rt.start=function(){throw new Error("Cursor behind last entry")},Rt.stop()}var ir=new Promise(function(ce,Ze){ce=Zt(ce),yt.onerror=ke(Ze),Rt.fail=Ze,Rt.stop=function(qr){Rt.stop=Rt.continue=Rt.continuePrimaryKey=Rt.advance=me,ce(qr)}});return yt.onsuccess=Zt(function(ce){yt.onsuccess=se,se()}),Rt.continue=zt,Rt.continuePrimaryKey=Dt,Rt.advance=Bt,se(),ir},ft(Rt)):ft(null)},bt)})},count:function(j){var L=j.query,W=j.trans,H=L.index,Q=L.range;return new Promise(function(rt,ft){var bt=W.objectStore(B),ht=H.isPrimaryKey?bt:bt.index(H.name),bt=a(Q),ht=bt?ht.count(bt):ht.count();ht.onsuccess=Zt(function(gt){return rt(gt.target.result)}),ht.onerror=ke(ft)})}}}var f,x,P,F=(x=z,P=wi((f=t).objectStoreNames),{schema:{name:f.name,tables:P.map(function(U){return x.objectStore(U)}).map(function(U){var I=U.keyPath,L=U.autoIncrement,B=d(I),j={},L={name:U.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:I==null,compound:B,keyPath:I,autoIncrement:L,unique:!0,extractKey:Ar(I)},indexes:wi(U.indexNames).map(function(W){return U.index(W)}).map(function(rt){var H=rt.name,Q=rt.unique,ft=rt.multiEntry,rt=rt.keyPath,ft={name:H,compound:d(rt),keyPath:rt,unique:Q,multiEntry:ft,extractKey:Ar(rt)};return j[Sn(rt)]=ft}),getIndexByKeyPath:function(W){return j[Sn(W)]}};return j[":id"]=L.primaryKey,I!=null&&(j[Sn(I)]=L.primaryKey),L})},hasGetAll:0<P.length&&"getAll"in x.objectStore(P[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),z=F.schema,D=F.hasGetAll,F=z.tables.map(s),$={};return F.forEach(function(U){return $[U.name]=U}),{stack:"dbcore",transaction:t.transaction.bind(t),table:function(U){if(!$[U])throw new Error("Table '".concat(U,"' not found"));return $[U]},MIN_KEY:-1/0,MAX_KEY:kn(e),schema:z}}function Da(t,e,n,a){var s=n.IDBKeyRange;return n.indexedDB,{dbcore:(a=za(e,s,a),t.dbcore.reduce(function(f,x){return x=x.create,u(u({},f),x(f))},a))}}function Hn(t,a){var n=a.db,a=Da(t._middlewares,n,t._deps,a);t.core=a.dbcore,t.tables.forEach(function(s){var f=s.name;t.core.schema.tables.some(function(x){return x.name===f})&&(s.core=t.core.table(f),t[f]instanceof t.Table&&(t[f].core=s.core))})}function Zn(t,e,n,a){n.forEach(function(s){var f=a[s];e.forEach(function(x){var P=(function z(D,F){return E(D,F)||(D=b(D))&&z(D,F)})(x,s);(!P||"value"in P&&P.value===void 0)&&(x===t.Transaction.prototype||x instanceof t.Transaction?_(x,s,{get:function(){return this.table(s)},set:function(z){g(this,s,{value:z,writable:!0,configurable:!0,enumerable:!0})}}):x[s]=new t.Table(s,f))})})}function Er(t,e){e.forEach(function(n){for(var a in n)n[a]instanceof t.Table&&delete n[a]})}function Ia(t,e){return t._cfg.version-e._cfg.version}function Ma(t,e,n,a){var s=t._dbSchema;n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Cr("$meta",xi("")[0],[]),t._storeNames.push("$meta"));var f=t._createTransaction("readwrite",t._storeNames,s);f.create(n),f._completion.catch(a);var x=f._reject.bind(f),P=St.transless||St;Ie(function(){return St.trans=f,St.transless=P,e!==0?(Hn(t,n),D=e,((z=f).storeNames.includes("$meta")?z.table("$meta").get("version").then(function(F){return F??D}):_t.resolve(D)).then(function(F){return U=F,I=f,B=n,j=[],F=($=t)._versions,L=$._dbSchema=Yn(0,$.idbdb,B),(F=F.filter(function(W){return W._cfg.version>=U})).length!==0?(F.forEach(function(W){j.push(function(){var H=L,Q=W._cfg.dbschema;Gn($,H,B),Gn($,Q,B),L=$._dbSchema=Q;var rt=Or(H,Q);rt.add.forEach(function(wt){Pr(B,wt[0],wt[1].primKey,wt[1].indexes)}),rt.change.forEach(function(wt){if(wt.recreate)throw new mt.Upgrade("Not yet support for changing primary key");var yt=B.objectStore(wt.name);wt.add.forEach(function(Ct){return Xn(yt,Ct)}),wt.change.forEach(function(Ct){yt.deleteIndex(Ct.name),Xn(yt,Ct)}),wt.del.forEach(function(Ct){return yt.deleteIndex(Ct)})});var ft=W._cfg.contentUpgrade;if(ft&&W._cfg.version>U){Hn($,B),I._memoizedTables={};var bt=ut(Q);rt.del.forEach(function(wt){bt[wt]=H[wt]}),Er($,[$.Transaction.prototype]),Zn($,[$.Transaction.prototype],h(bt),bt),I.schema=bt;var ht,gt=X(ft);return gt&&an(),rt=_t.follow(function(){var wt;(ht=ft(I))&&gt&&(wt=Me.bind(null,null),ht.then(wt,wt))}),ht&&typeof ht.then=="function"?_t.resolve(ht):rt.then(function(){return ht})}}),j.push(function(H){var Q,rt,ft=W._cfg.dbschema;Q=ft,rt=H,[].slice.call(rt.db.objectStoreNames).forEach(function(bt){return Q[bt]==null&&rt.db.deleteObjectStore(bt)}),Er($,[$.Transaction.prototype]),Zn($,[$.Transaction.prototype],$._storeNames,$._dbSchema),I.schema=$._dbSchema}),j.push(function(H){$.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil($.idbdb.version/10)===W._cfg.version?($.idbdb.deleteObjectStore("$meta"),delete $._dbSchema.$meta,$._storeNames=$._storeNames.filter(function(Q){return Q!=="$meta"})):H.objectStore("$meta").put(W._cfg.version,"version"))})}),(function W(){return j.length?_t.resolve(j.shift()(I.idbtrans)).then(W):_t.resolve()})().then(function(){_i(L,B)})):_t.resolve();var $,U,I,B,j,L}).catch(x)):(h(s).forEach(function(F){Pr(n,F,s[F].primKey,s[F].indexes)}),Hn(t,n),void _t.follow(function(){return t.on.populate.fire(f)}).catch(x));var z,D})}function Ba(t,e){_i(t._dbSchema,e),e.db.version%10!=0||e.objectStoreNames.contains("$meta")||e.db.createObjectStore("$meta").add(Math.ceil(e.db.version/10-1),"version");var n=Yn(0,t.idbdb,e);Gn(t,t._dbSchema,e);for(var a=0,s=Or(n,t._dbSchema).change;a<s.length;a++){var f=(function(x){if(x.change.length||x.recreate)return console.warn("Unable to patch indexes of table ".concat(x.name," because it has changes on the type of index or primary key.")),{value:void 0};var P=e.objectStore(x.name);x.add.forEach(function(z){at&&console.debug("Dexie upgrade patch: Creating missing index ".concat(x.name,".").concat(z.src)),Xn(P,z)})})(s[a]);if(typeof f=="object")return f.value}}function Or(t,e){var n,a={del:[],add:[],change:[]};for(n in t)e[n]||a.del.push(n);for(n in e){var s=t[n],f=e[n];if(s){var x={name:n,def:f,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(f.primKey.keyPath||"")||s.primKey.auto!==f.primKey.auto)x.recreate=!0,a.change.push(x);else{var P=s.idxByName,z=f.idxByName,D=void 0;for(D in P)z[D]||x.del.push(D);for(D in z){var F=P[D],$=z[D];F?F.src!==$.src&&x.change.push($):x.add.push($)}(0<x.del.length||0<x.add.length||0<x.change.length)&&a.change.push(x)}}else a.add.push([n,f])}return a}function Pr(t,e,n,a){var s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return a.forEach(function(f){return Xn(s,f)}),s}function _i(t,e){h(t).forEach(function(n){e.db.objectStoreNames.contains(n)||(at&&console.debug("Dexie: Creating missing table",n),Pr(e,n,t[n].primKey,t[n].indexes))})}function Xn(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Yn(t,e,n){var a={};return T(e.objectStoreNames,0).forEach(function(s){for(var f=n.objectStore(s),x=Sr(bi(D=f.keyPath),D||"",!0,!1,!!f.autoIncrement,D&&typeof D!="string",!0),P=[],z=0;z<f.indexNames.length;++z){var F=f.index(f.indexNames[z]),D=F.keyPath,F=Sr(F.name,D,!!F.unique,!!F.multiEntry,!1,D&&typeof D!="string",!1);P.push(F)}a[s]=Cr(s,x,P)}),a}function Gn(t,e,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var f=a[s],x=n.objectStore(f);t._hasGetAll="getAll"in x;for(var P=0;P<x.indexNames.length;++P){var z=x.indexNames[P],D=x.index(z).keyPath,F=typeof D=="string"?D:"["+T(D).join("+")+"]";!e[f]||(D=e[f].idxByName[F])&&(D.name=z,delete e[f].idxByName[F],e[f].idxByName[z]=D)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&l.WorkerGlobalScope&&l instanceof l.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}function xi(t){return t.split(",").map(function(e,n){var f=e.split(":"),a=(s=f[1])===null||s===void 0?void 0:s.trim(),s=(e=f[0].trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return Sr(s,f||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),d(f),n===0,a)})}var ja=(un.prototype._createTableSchema=Cr,un.prototype._parseIndexSyntax=xi,un.prototype._parseStoresSpec=function(t,e){var n=this;h(t).forEach(function(a){if(t[a]!==null){var s=n._parseIndexSyntax(t[a]),f=s.shift();if(!f)throw new mt.Schema("Invalid schema for table "+a+": "+t[a]);if(f.unique=!0,f.multi)throw new mt.Schema("Primary key cannot be multiEntry*");s.forEach(function(x){if(x.auto)throw new mt.Schema("Only primary key can be marked as autoIncrement (++)");if(!x.keyPath)throw new mt.Schema("Index must have a name and cannot be an empty string")}),s=n._createTableSchema(a,f,s),e[a]=s}})},un.prototype.stores=function(n){var e=this.db;this._cfg.storesSource=this._cfg.storesSource?v(this._cfg.storesSource,n):n;var n=e._versions,a={},s={};return n.forEach(function(f){v(a,f._cfg.storesSource),s=f._cfg.dbschema={},f._parseStoresSpec(a,s)}),e._dbSchema=s,Er(e,[e._allTables,e,e.Transaction.prototype]),Zn(e,[e._allTables,e,e.Transaction.prototype,this._cfg.tables],h(s),s),e._storeNames=h(s),this},un.prototype.upgrade=function(t){return this._cfg.contentUpgrade=ot(this._cfg.contentUpgrade||It,t),this},un);function un(){}function Tr(t,e){var n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Pe(Ln,{addons:[],indexedDB:t,IDBKeyRange:e})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function $r(t){return t&&typeof t.databases=="function"}function Rr(t){return Ie(function(){return St.letThrough=!0,t()})}function zr(t){return!("from"in t)}var ae=function(t,e){if(!this){var n=new ae;return t&&"d"in t&&v(n,t),n}v(this,arguments.length?{d:1,from:t,to:1<arguments.length?e:t}:{d:0})};function Cn(t,e,n){var a=Ft(e,n);if(!isNaN(a)){if(0<a)throw RangeError();if(zr(t))return v(t,{from:e,to:n,d:1});var s=t.l,a=t.r;if(Ft(n,t.from)<0)return s?Cn(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},Si(t);if(0<Ft(e,t.to))return a?Cn(a,e,n):t.r={from:e,to:n,d:1,l:null,r:null},Si(t);Ft(e,t.from)<0&&(t.from=e,t.l=null,t.d=a?a.d+1:1),0<Ft(n,t.to)&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1),n=!t.r,s&&!t.l&&An(t,s),a&&n&&An(t,a)}}function An(t,e){zr(e)||(function n(a,z){var f=z.from,x=z.to,P=z.l,z=z.r;Cn(a,f,x),P&&n(a,P),z&&n(a,z)})(t,e)}function ki(t,e){var n=Qn(e),a=n.next();if(a.done)return!1;for(var s=a.value,f=Qn(t),x=f.next(s.from),P=x.value;!a.done&&!x.done;){if(Ft(P.from,s.to)<=0&&0<=Ft(P.to,s.from))return!0;Ft(s.from,P.from)<0?s=(a=n.next(P.from)).value:P=(x=f.next(s.from)).value}return!1}function Qn(t){var e=zr(t)?null:{s:0,n:t};return{next:function(n){for(var a=0<arguments.length;e;)switch(e.s){case 0:if(e.s=1,a)for(;e.n.l&&Ft(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!a||Ft(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Si(t){var e,n,a=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=1<a?"r":a<-1?"l":"";s&&(e=s=="r"?"l":"r",n=u({},t),a=t[s],t.from=a.from,t.to=a.to,t[s]=a[s],n[s]=a[e],(t[e]=n).d=Ci(n)),t.d=Ci(t)}function Ci(n){var e=n.r,n=n.l;return(e?n?Math.max(e.d,n.d):e.d:n?n.d:0)+1}function Jn(t,e){return h(e).forEach(function(n){t[n]?An(t[n],e[n]):t[n]=(function a(s){var f,x,P={};for(f in s)C(s,f)&&(x=s[f],P[f]=!x||typeof x!="object"||Pt.has(x.constructor)?x:a(x));return P})(e[n])}),t}function Dr(t,e){return t.all||e.all||Object.keys(t).some(function(n){return e[n]&&ki(e[n],t[n])})}w(ae.prototype,((ye={add:function(t){return An(this,t),this},addKey:function(t){return Cn(this,t,t),this},addKeys:function(t){var e=this;return t.forEach(function(n){return Cn(e,n,n)}),this},hasKey:function(t){var e=Qn(this).next(t).value;return e&&Ft(e.from,t)<=0&&0<=Ft(e.to,t)}})[Tt]=function(){return Qn(this)},ye));var Ve={},Ir={},Mr=!1;function tr(t){Jn(Ir,t),Mr||(Mr=!0,setTimeout(function(){Mr=!1,Br(Ir,!(Ir={}))},0))}function Br(t,e){e===void 0&&(e=!1);var n=new Set;if(t.all)for(var a=0,s=Object.values(Ve);a<s.length;a++)Ai(x=s[a],t,n,e);else for(var f in t){var x,P=/^idb\:\/\/(.*)\/(.*)\//.exec(f);P&&(f=P[1],P=P[2],(x=Ve["idb://".concat(f,"/").concat(P)])&&Ai(x,t,n,e))}n.forEach(function(z){return z()})}function Ai(t,e,n,a){for(var s=[],f=0,x=Object.entries(t.queries.query);f<x.length;f++){for(var P=x[f],z=P[0],D=[],F=0,$=P[1];F<$.length;F++){var U=$[F];Dr(e,U.obsSet)?U.subscribers.forEach(function(L){return n.add(L)}):a&&D.push(U)}a&&s.push([z,D])}if(a)for(var I=0,B=s;I<B.length;I++){var j=B[I],z=j[0],D=j[1];t.queries.query[z]=D}}function Fa(t){var e=t._state,n=t._deps.indexedDB;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(function(){return e.dbOpenError?Yt(e.dbOpenError):t});e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;var a=e.openCanceller,s=Math.round(10*t.verno),f=!1;function x(){if(e.openCanceller!==a)throw new mt.DatabaseClosed("db.open() was cancelled")}function P(){return new _t(function(U,I){if(x(),!n)throw new mt.MissingAPI;var B=t.name,j=e.autoSchema||!s?n.open(B):n.open(B,s);if(!j)throw new mt.MissingAPI;j.onerror=ke(I),j.onblocked=Zt(t._fireOnBlocked),j.onupgradeneeded=Zt(function(L){var W;F=j.transaction,e.autoSchema&&!t._options.allowEmptyDB?(j.onerror=_n,F.abort(),j.result.close(),(W=n.deleteDatabase(B)).onsuccess=W.onerror=Zt(function(){I(new mt.NoSuchDatabase("Database ".concat(B," doesnt exist")))})):(F.onerror=ke(I),L=L.oldVersion>Math.pow(2,62)?0:L.oldVersion,$=L<1,t.idbdb=j.result,f&&Ba(t,F),Ma(t,L/10,F,I))},I),j.onsuccess=Zt(function(){F=null;var L,W,H,Q,rt,ft=t.idbdb=j.result,bt=T(ft.objectStoreNames);if(0<bt.length)try{var ht=ft.transaction((Q=bt).length===1?Q[0]:Q,"readonly");if(e.autoSchema)W=ft,H=ht,(L=t).verno=W.version/10,H=L._dbSchema=Yn(0,W,H),L._storeNames=T(W.objectStoreNames,0),Zn(L,[L._allTables],h(H),H);else if(Gn(t,t._dbSchema,ht),((rt=Or(Yn(0,(rt=t).idbdb,ht),rt._dbSchema)).add.length||rt.change.some(function(gt){return gt.add.length||gt.change.length}))&&!f)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),ft.close(),s=ft.version+1,f=!0,U(P());Hn(t,ht)}catch{}on.push(t),ft.onversionchange=Zt(function(gt){e.vcFired=!0,t.on("versionchange").fire(gt)}),ft.onclose=Zt(function(){t.close({disableAutoOpen:!1})}),$&&(rt=t._deps,ht=B,ft=rt.indexedDB,rt=rt.IDBKeyRange,$r(ft)||ht===Ln||Tr(ft,rt).put({name:ht}).catch(It)),U()},I)}).catch(function(U){switch(U?.name){case"UnknownError":if(0<e.PR1398_maxLoop)return e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),P();break;case"VersionError":if(0<s)return s=0,P()}return _t.reject(U)})}var z,D=e.dbReadyResolve,F=null,$=!1;return _t.race([a,(typeof navigator>"u"?_t.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(U){function I(){return indexedDB.databases().finally(U)}z=setInterval(I,100),I()}).finally(function(){return clearInterval(z)}):Promise.resolve()).then(P)]).then(function(){return x(),e.onReadyBeingFired=[],_t.resolve(Rr(function(){return t.on.ready.fire(t.vip)})).then(function U(){if(0<e.onReadyBeingFired.length){var I=e.onReadyBeingFired.reduce(ot,It);return e.onReadyBeingFired=[],_t.resolve(Rr(function(){return I(t.vip)})).then(U)}})}).finally(function(){e.openCanceller===a&&(e.onReadyBeingFired=null,e.isBeingOpened=!1)}).catch(function(U){e.dbOpenError=U;try{F&&F.abort()}catch{}return a===e.openCanceller&&t._close(),Yt(U)}).finally(function(){e.openComplete=!0,D()}).then(function(){var U;return $&&(U={},t.tables.forEach(function(I){I.schema.indexes.forEach(function(B){B.name&&(U["idb://".concat(t.name,"/").concat(I.name,"/").concat(B.name)]=new ae(-1/0,[[[]]]))}),U["idb://".concat(t.name,"/").concat(I.name,"/")]=U["idb://".concat(t.name,"/").concat(I.name,"/:dels")]=new ae(-1/0,[[[]]])}),Fe(xn).fire(U),Br(U,!0)),t})}function jr(t){function e(f){return t.next(f)}var n=s(e),a=s(function(f){return t.throw(f)});function s(f){return function(z){var P=f(z),z=P.value;return P.done?z:z&&typeof z.then=="function"?z.then(n,a):d(z)?Promise.all(z).then(n,a):n(z)}}return s(e)()}function er(t,e,n){for(var a=d(t)?t.slice():[t],s=0;s<n;++s)a.push(e);return a}var Na={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return u(u({},t),{table:function(e){var n=t.table(e),a=n.schema,s={},f=[];function x($,U,I){var B=Sn($),j=s[B]=s[B]||[],L=$==null?0:typeof $=="string"?1:$.length,W=0<U,W=u(u({},I),{name:W?"".concat(B,"(virtual-from:").concat(I.name,")"):I.name,lowLevelIndex:I,isVirtual:W,keyTail:U,keyLength:L,extractKey:Ar($),unique:!W&&I.unique});return j.push(W),W.isPrimaryKey||f.push(W),1<L&&x(L===2?$[0]:$.slice(0,L-1),U+1,I),j.sort(function(H,Q){return H.keyTail-Q.keyTail}),W}e=x(a.primaryKey.keyPath,0,a.primaryKey),s[":id"]=[e];for(var P=0,z=a.indexes;P<z.length;P++){var D=z[P];x(D.keyPath,0,D)}function F($){var U,I=$.query.index;return I.isVirtual?u(u({},$),{query:{index:I.lowLevelIndex,range:(U=$.query.range,I=I.keyTail,{type:U.type===1?2:U.type,lower:er(U.lower,U.lowerOpen?t.MAX_KEY:t.MIN_KEY,I),lowerOpen:!0,upper:er(U.upper,U.upperOpen?t.MIN_KEY:t.MAX_KEY,I),upperOpen:!0})}}):$}return u(u({},n),{schema:u(u({},a),{primaryKey:e,indexes:f,getIndexByKeyPath:function($){return($=s[Sn($)])&&$[0]}}),count:function($){return n.count(F($))},query:function($){return n.query(F($))},openCursor:function($){var U=$.query.index,I=U.keyTail,B=U.isVirtual,j=U.keyLength;return B?n.openCursor(F($)).then(function(W){return W&&L(W)}):n.openCursor($);function L(W){return Object.create(W,{continue:{value:function(H){H!=null?W.continue(er(H,$.reverse?t.MAX_KEY:t.MIN_KEY,I)):$.unique?W.continue(W.key.slice(0,j).concat($.reverse?t.MIN_KEY:t.MAX_KEY,I)):W.continue()}},continuePrimaryKey:{value:function(H,Q){W.continuePrimaryKey(er(H,t.MAX_KEY,I),Q)}},primaryKey:{get:function(){return W.primaryKey}},key:{get:function(){var H=W.key;return j===1?H[0]:H.slice(0,j)}},value:{get:function(){return W.value}}})}}})}})}};function Fr(t,e,n,a){return n=n||{},a=a||"",h(t).forEach(function(s){var f,x,P;C(e,s)?(f=t[s],x=e[s],typeof f=="object"&&typeof x=="object"&&f&&x?(P=it(f))!==it(x)?n[a+s]=e[s]:P==="Object"?Fr(f,x,n,a+s+"."):f!==x&&(n[a+s]=e[s]):f!==x&&(n[a+s]=e[s])):n[a+s]=void 0}),h(e).forEach(function(s){C(t,s)||(n[a+s]=e[s])}),n}function Nr(t,e){return e.type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}var La={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(t){return u(u({},t),{table:function(e){var n=t.table(e),a=n.schema.primaryKey;return u(u({},n),{mutate:function(s){var f=St.trans,x=f.table(e).hook,P=x.deleting,z=x.creating,D=x.updating;switch(s.type){case"add":if(z.fire===It)break;return f._promise("readwrite",function(){return F(s)},!0);case"put":if(z.fire===It&&D.fire===It)break;return f._promise("readwrite",function(){return F(s)},!0);case"delete":if(P.fire===It)break;return f._promise("readwrite",function(){return F(s)},!0);case"deleteRange":if(P.fire===It)break;return f._promise("readwrite",function(){return(function $(U,I,B){return n.query({trans:U,values:!1,query:{index:a,range:I},limit:B}).then(function(j){var L=j.result;return F({type:"delete",keys:L,trans:U}).then(function(W){return 0<W.numFailures?Promise.reject(W.failures[0]):L.length<B?{failures:[],numFailures:0,lastResult:void 0}:$(U,u(u({},I),{lower:L[L.length-1],lowerOpen:!0}),B)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function F($){var U,I,B,j=St.trans,L=$.keys||Nr(a,$);if(!L)throw new Error("Keys missing");return($=$.type==="add"||$.type==="put"?u(u({},$),{keys:L}):u({},$)).type!=="delete"&&($.values=o([],$.values)),$.keys&&($.keys=o([],$.keys)),U=n,B=L,((I=$).type==="add"?Promise.resolve([]):U.getMany({trans:I.trans,keys:B,cache:"immutable"})).then(function(W){var H=L.map(function(Q,rt){var ft,bt,ht,gt=W[rt],wt={onerror:null,onsuccess:null};return $.type==="delete"?P.fire.call(wt,Q,gt,j):$.type==="add"||gt===void 0?(ft=z.fire.call(wt,Q,$.values[rt],j),Q==null&&ft!=null&&($.keys[rt]=Q=ft,a.outbound||G($.values[rt],a.keyPath,Q))):(ft=Fr(gt,$.values[rt]),(bt=D.fire.call(wt,ft,Q,gt,j))&&(ht=$.values[rt],Object.keys(bt).forEach(function(yt){C(ht,yt)?ht[yt]=bt[yt]:G(ht,yt,bt[yt])}))),wt});return n.mutate($).then(function(Q){for(var rt=Q.failures,ft=Q.results,bt=Q.numFailures,Q=Q.lastResult,ht=0;ht<L.length;++ht){var gt=(ft||L)[ht],wt=H[ht];gt==null?wt.onerror&&wt.onerror(rt[ht]):wt.onsuccess&&wt.onsuccess($.type==="put"&&W[ht]?$.values[ht]:gt)}return{failures:rt,results:ft,numFailures:bt,lastResult:Q}}).catch(function(Q){return H.forEach(function(rt){return rt.onerror&&rt.onerror(Q)}),Promise.reject(Q)})})}}})}})}};function Ei(t,e,n){try{if(!e||e.keys.length<t.length)return null;for(var a=[],s=0,f=0;s<e.keys.length&&f<t.length;++s)Ft(e.keys[s],t[f])===0&&(a.push(n?J(e.values[s]):e.values[s]),++f);return a.length===t.length?a:null}catch{return null}}var Ua={stack:"dbcore",level:-1,create:function(t){return{table:function(e){var n=t.table(e);return u(u({},n),{getMany:function(a){if(!a.cache)return n.getMany(a);var s=Ei(a.keys,a.trans._cache,a.cache==="clone");return s?_t.resolve(s):n.getMany(a).then(function(f){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?J(f):f},f})},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Oi(t,e){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!e.schema.primaryKey.outbound}function Pi(t,e){switch(t){case"query":return e.values&&!e.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ka={stack:"dbcore",level:0,name:"Observability",create:function(t){var e=t.schema.name,n=new ae(t.MIN_KEY,t.MAX_KEY);return u(u({},t),{transaction:function(a,s,f){if(St.subscr&&s!=="readonly")throw new mt.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(St.querier));return t.transaction(a,s,f)},table:function(a){var s=t.table(a),f=s.schema,x=f.primaryKey,$=f.indexes,P=x.extractKey,z=x.outbound,D=x.autoIncrement&&$.filter(function(I){return I.compound&&I.keyPath.includes(x.keyPath)}),F=u(u({},s),{mutate:function(I){function B(yt){return yt="idb://".concat(e,"/").concat(a,"/").concat(yt),Q[yt]||(Q[yt]=new ae)}var j,L,W,H=I.trans,Q=I.mutatedParts||(I.mutatedParts={}),rt=B(""),ft=B(":dels"),bt=I.type,wt=I.type==="deleteRange"?[I.range]:I.type==="delete"?[I.keys]:I.values.length<50?[Nr(x,I).filter(function(yt){return yt}),I.values]:[],ht=wt[0],gt=wt[1],wt=I.trans._cache;return d(ht)?(rt.addKeys(ht),(wt=bt==="delete"||ht.length===gt.length?Ei(ht,wt):null)||ft.addKeys(ht),(wt||gt)&&(j=B,L=wt,W=gt,f.indexes.forEach(function(yt){var Ct=j(yt.name||"");function zt(Bt){return Bt!=null?yt.extractKey(Bt):null}function Dt(Bt){return yt.multiEntry&&d(Bt)?Bt.forEach(function(me){return Ct.addKey(me)}):Ct.addKey(Bt)}(L||W).forEach(function(Bt,oe){var Rt=L&&zt(L[oe]),oe=W&&zt(W[oe]);Ft(Rt,oe)!==0&&(Rt!=null&&Dt(Rt),oe!=null&&Dt(oe))})}))):ht?(gt={from:(gt=ht.lower)!==null&&gt!==void 0?gt:t.MIN_KEY,to:(gt=ht.upper)!==null&&gt!==void 0?gt:t.MAX_KEY},ft.add(gt),rt.add(gt)):(rt.add(n),ft.add(n),f.indexes.forEach(function(yt){return B(yt.name).add(n)})),s.mutate(I).then(function(yt){return!ht||I.type!=="add"&&I.type!=="put"||(rt.addKeys(yt.results),D&&D.forEach(function(Ct){for(var zt=I.values.map(function(Rt){return Ct.extractKey(Rt)}),Dt=Ct.keyPath.findIndex(function(Rt){return Rt===x.keyPath}),Bt=0,me=yt.results.length;Bt<me;++Bt)zt[Bt][Dt]=yt.results[Bt];B(Ct.name).addKeys(zt)})),H.mutatedParts=Jn(H.mutatedParts||{},Q),yt})}}),$=function(B){var j=B.query,B=j.index,j=j.range;return[B,new ae((B=j.lower)!==null&&B!==void 0?B:t.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:t.MAX_KEY)]},U={get:function(I){return[x,new ae(I.key)]},getMany:function(I){return[x,new ae().addKeys(I.keys)]},count:$,query:$,openCursor:$};return h(U).forEach(function(I){F[I]=function(B){var j=St.subscr,L=!!j,W=Oi(St,s)&&Pi(I,B)?B.obsSet={}:j;if(L){var H=function(gt){return gt="idb://".concat(e,"/").concat(a,"/").concat(gt),W[gt]||(W[gt]=new ae)},Q=H(""),rt=H(":dels"),j=U[I](B),L=j[0],j=j[1];if((I==="query"&&L.isPrimaryKey&&!B.values?rt:H(L.name||"")).add(j),!L.isPrimaryKey){if(I!=="count"){var ft=I==="query"&&z&&B.values&&s.query(u(u({},B),{values:!1}));return s[I].apply(this,arguments).then(function(gt){if(I==="query"){if(z&&B.values)return ft.then(function(zt){return zt=zt.result,Q.addKeys(zt),gt});var wt=B.values?gt.result.map(P):gt.result;(B.values?Q:rt).addKeys(wt)}else if(I==="openCursor"){var yt=gt,Ct=B.values;return yt&&Object.create(yt,{key:{get:function(){return rt.addKey(yt.primaryKey),yt.key}},primaryKey:{get:function(){var zt=yt.primaryKey;return rt.addKey(zt),zt}},value:{get:function(){return Ct&&Q.addKey(yt.primaryKey),yt.value}}})}return gt})}rt.add(n)}}return s[I].apply(this,arguments)}}),F}})}};function Ti(t,e,n){if(n.numFailures===0)return e;if(e.type==="deleteRange")return null;var a=e.keys?e.keys.length:"values"in e&&e.values?e.values.length:1;return n.numFailures===a?null:(e=u({},e),d(e.keys)&&(e.keys=e.keys.filter(function(s,f){return!(f in n.failures)})),"values"in e&&d(e.values)&&(e.values=e.values.filter(function(s,f){return!(f in n.failures)})),e)}function Lr(t,e){return n=t,((a=e).lower===void 0||(a.lowerOpen?0<Ft(n,a.lower):0<=Ft(n,a.lower)))&&(t=t,(e=e).upper===void 0||(e.upperOpen?Ft(t,e.upper)<0:Ft(t,e.upper)<=0));var n,a}function $i(t,e,U,a,s,f){if(!U||U.length===0)return t;var x=e.query.index,P=x.multiEntry,z=e.query.range,D=a.schema.primaryKey.extractKey,F=x.extractKey,$=(x.lowLevelIndex||x).extractKey,U=U.reduce(function(I,B){var j=I,L=[];if(B.type==="add"||B.type==="put")for(var W=new ae,H=B.values.length-1;0<=H;--H){var Q,rt=B.values[H],ft=D(rt);W.hasKey(ft)||(Q=F(rt),(P&&d(Q)?Q.some(function(yt){return Lr(yt,z)}):Lr(Q,z))&&(W.addKey(ft),L.push(rt)))}switch(B.type){case"add":var bt=new ae().addKeys(e.values?I.map(function(Ct){return D(Ct)}):I),j=I.concat(e.values?L.filter(function(Ct){return Ct=D(Ct),!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}):L.map(function(Ct){return D(Ct)}).filter(function(Ct){return!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}));break;case"put":var ht=new ae().addKeys(B.values.map(function(Ct){return D(Ct)}));j=I.filter(function(Ct){return!ht.hasKey(e.values?D(Ct):Ct)}).concat(e.values?L:L.map(function(Ct){return D(Ct)}));break;case"delete":var gt=new ae().addKeys(B.keys);j=I.filter(function(Ct){return!gt.hasKey(e.values?D(Ct):Ct)});break;case"deleteRange":var wt=B.range;j=I.filter(function(Ct){return!Lr(D(Ct),wt)})}return j},t);return U===t?t:(U.sort(function(I,B){return Ft($(I),$(B))||Ft(D(I),D(B))}),e.limit&&e.limit<1/0&&(U.length>e.limit?U.length=e.limit:t.length===e.limit&&U.length<e.limit&&(s.dirty=!0)),f?Object.freeze(U):U)}function Ri(t,e){return Ft(t.lower,e.lower)===0&&Ft(t.upper,e.upper)===0&&!!t.lowerOpen==!!e.lowerOpen&&!!t.upperOpen==!!e.upperOpen}function qa(t,e){return(function(n,a,s,f){if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((a=Ft(n,a))===0){if(s&&f)return 0;if(s)return 1;if(f)return-1}return a})(t.lower,e.lower,t.lowerOpen,e.lowerOpen)<=0&&0<=(function(n,a,s,f){if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((a=Ft(n,a))===0){if(s&&f)return 0;if(s)return-1;if(f)return 1}return a})(t.upper,e.upper,t.upperOpen,e.upperOpen)}function Wa(t,e,n,a){t.subscribers.add(n),a.addEventListener("abort",function(){var s,f;t.subscribers.delete(n),t.subscribers.size===0&&(s=t,f=e,setTimeout(function(){s.subscribers.size===0&&$t(f,s)},3e3))})}var Va={stack:"dbcore",level:0,name:"Cache",create:function(t){var e=t.schema.name;return u(u({},t),{transaction:function(n,a,s){var f,x,P=t.transaction(n,a,s);return a==="readwrite"&&(x=(f=new AbortController).signal,s=function(z){return function(){if(f.abort(),a==="readwrite"){for(var D=new Set,F=0,$=n;F<$.length;F++){var U=$[F],I=Ve["idb://".concat(e,"/").concat(U)];if(I){var B=t.table(U),j=I.optimisticOps.filter(function(Ct){return Ct.trans===P});if(P._explicit&&z&&P.mutatedParts)for(var L=0,W=Object.values(I.queries.query);L<W.length;L++)for(var H=0,Q=(bt=W[L]).slice();H<Q.length;H++)Dr((ht=Q[H]).obsSet,P.mutatedParts)&&($t(bt,ht),ht.subscribers.forEach(function(Ct){return D.add(Ct)}));else if(0<j.length){I.optimisticOps=I.optimisticOps.filter(function(Ct){return Ct.trans!==P});for(var rt=0,ft=Object.values(I.queries.query);rt<ft.length;rt++)for(var bt,ht,gt,wt=0,yt=(bt=ft[rt]).slice();wt<yt.length;wt++)(ht=yt[wt]).res!=null&&P.mutatedParts&&(z&&!ht.dirty?(gt=Object.isFrozen(ht.res),gt=$i(ht.res,ht.req,j,B,ht,gt),ht.dirty?($t(bt,ht),ht.subscribers.forEach(function(Ct){return D.add(Ct)})):gt!==ht.res&&(ht.res=gt,ht.promise=_t.resolve({result:gt}))):(ht.dirty&&$t(bt,ht),ht.subscribers.forEach(function(Ct){return D.add(Ct)})))}}}D.forEach(function(Ct){return Ct()})}}},P.addEventListener("abort",s(!1),{signal:x}),P.addEventListener("error",s(!1),{signal:x}),P.addEventListener("complete",s(!0),{signal:x})),P},table:function(n){var a=t.table(n),s=a.schema.primaryKey;return u(u({},a),{mutate:function(f){var x=St.trans;if(s.outbound||x.db._options.cache==="disabled"||x.explicit||x.idbtrans.mode!=="readwrite")return a.mutate(f);var P=Ve["idb://".concat(e,"/").concat(n)];return P?(x=a.mutate(f),f.type!=="add"&&f.type!=="put"||!(50<=f.values.length||Nr(s,f).some(function(z){return z==null}))?(P.optimisticOps.push(f),f.mutatedParts&&tr(f.mutatedParts),x.then(function(z){0<z.numFailures&&($t(P.optimisticOps,f),(z=Ti(0,f,z))&&P.optimisticOps.push(z),f.mutatedParts&&tr(f.mutatedParts))}),x.catch(function(){$t(P.optimisticOps,f),f.mutatedParts&&tr(f.mutatedParts)})):x.then(function(z){var D=Ti(0,u(u({},f),{values:f.values.map(function(F,$){var U;return z.failures[$]?F:(F=(U=s.keyPath)!==null&&U!==void 0&&U.includes(".")?J(F):u({},F),G(F,s.keyPath,z.results[$]),F)})}),z);P.optimisticOps.push(D),queueMicrotask(function(){return f.mutatedParts&&tr(f.mutatedParts)})}),x):a.mutate(f)},query:function(f){if(!Oi(St,a)||!Pi("query",f))return a.query(f);var x=((D=St.trans)===null||D===void 0?void 0:D.db._options.cache)==="immutable",$=St,P=$.requery,z=$.signal,D=(function(B,j,L,W){var H=Ve["idb://".concat(B,"/").concat(j)];if(!H)return[];if(!(j=H.queries[L]))return[null,!1,H,null];var Q=j[(W.query?W.query.index.name:null)||""];if(!Q)return[null,!1,H,null];switch(L){case"query":var rt=Q.find(function(ft){return ft.req.limit===W.limit&&ft.req.values===W.values&&Ri(ft.req.query.range,W.query.range)});return rt?[rt,!0,H,Q]:[Q.find(function(ft){return("limit"in ft.req?ft.req.limit:1/0)>=W.limit&&(!W.values||ft.req.values)&&qa(ft.req.query.range,W.query.range)}),!1,H,Q];case"count":return rt=Q.find(function(ft){return Ri(ft.req.query.range,W.query.range)}),[rt,!!rt,H,Q]}})(e,n,"query",f),F=D[0],$=D[1],U=D[2],I=D[3];return F&&$?F.obsSet=f.obsSet:($=a.query(f).then(function(B){var j=B.result;if(F&&(F.res=j),x){for(var L=0,W=j.length;L<W;++L)Object.freeze(j[L]);Object.freeze(j)}else B.result=J(j);return B}).catch(function(B){return I&&F&&$t(I,F),Promise.reject(B)}),F={obsSet:f.obsSet,promise:$,subscribers:new Set,type:"query",req:f,dirty:!1},I?I.push(F):(I=[F],(U=U||(Ve["idb://".concat(e,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[f.query.index.name||""]=I)),Wa(F,I,P,z),F.promise.then(function(B){return{result:$i(B.result,f,U?.optimisticOps,a,F,x)}})}})}})}};function nr(t,e){return new Proxy(t,{get:function(n,a,s){return a==="db"?e:Reflect.get(n,a,s)}})}var Pe=(Gt.prototype.version=function(t){if(isNaN(t)||t<.1)throw new mt.Type("Given version is not a positive number");if(t=Math.round(10*t)/10,this.idbdb||this._state.isBeingOpened)throw new mt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var e=this._versions,n=e.filter(function(a){return a._cfg.version===t})[0];return n||(n=new this.Version(t),e.push(n),e.sort(Ia),n.stores({}),this._state.autoSchema=!1,n)},Gt.prototype._whenReady=function(t){var e=this;return this.idbdb&&(this._state.openComplete||St.letThrough||this._vip)?t():new _t(function(n,a){if(e._state.openComplete)return a(new mt.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return void a(new mt.DatabaseClosed);e.open().catch(It)}e._state.dbReadyPromise.then(n,a)}).then(t)},Gt.prototype.use=function(t){var e=t.stack,n=t.create,a=t.level,s=t.name;return s&&this.unuse({stack:e,name:s}),t=this._middlewares[e]||(this._middlewares[e]=[]),t.push({stack:e,create:n,level:a??10,name:s}),t.sort(function(f,x){return f.level-x.level}),this},Gt.prototype.unuse=function(t){var e=t.stack,n=t.name,a=t.create;return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},Gt.prototype.open=function(){var t=this;return Ke(ve,function(){return Fa(t)})},Gt.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state,e=on.indexOf(this);if(0<=e&&on.splice(e,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new _t(function(n){t.dbReadyResolve=n}),t.openCanceller=new _t(function(n,a){t.cancelOpen=a}))},Gt.prototype.close=function(n){var e=(n===void 0?{disableAutoOpen:!0}:n).disableAutoOpen,n=this._state;e?(n.isBeingOpened&&n.cancelOpen(new mt.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new mt.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Gt.prototype.delete=function(t){var e=this;t===void 0&&(t={disableAutoOpen:!0});var n=0<arguments.length&&typeof arguments[0]!="object",a=this._state;return new _t(function(s,f){function x(){e.close(t);var P=e._deps.indexedDB.deleteDatabase(e.name);P.onsuccess=Zt(function(){var z,D,F;z=e._deps,D=e.name,F=z.indexedDB,z=z.IDBKeyRange,$r(F)||D===Ln||Tr(F,z).delete(D).catch(It),s()}),P.onerror=ke(f),P.onblocked=e._fireOnBlocked}if(n)throw new mt.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(x):x()})},Gt.prototype.backendDB=function(){return this.idbdb},Gt.prototype.isOpen=function(){return this.idbdb!==null},Gt.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},Gt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Gt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Gt.prototype,"tables",{get:function(){var t=this;return h(this._allTables).map(function(e){return t._allTables[e]})},enumerable:!1,configurable:!0}),Gt.prototype.transaction=function(){var t=function(e,n,a){var s=arguments.length;if(s<2)throw new mt.InvalidArgument("Too few arguments");for(var f=new Array(s-1);--s;)f[s-1]=arguments[s];return a=f.pop(),[e,pt(f),a]}.apply(this,arguments);return this._transaction.apply(this,t)},Gt.prototype._transaction=function(t,e,n){var a=this,s=St.trans;s&&s.db===this&&t.indexOf("!")===-1||(s=null);var f,x,P=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");try{if(x=e.map(function(D){if(D=D instanceof a.Table?D.name:D,typeof D!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return D}),t=="r"||t===br)f=br;else{if(t!="rw"&&t!=wr)throw new mt.InvalidArgument("Invalid transaction mode: "+t);f=wr}if(s){if(s.mode===br&&f===wr){if(!P)throw new mt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&x.forEach(function(D){if(s&&s.storeNames.indexOf(D)===-1){if(!P)throw new mt.SubTransaction("Table "+D+" not included in parent transaction.");s=null}}),P&&s&&!s.active&&(s=null)}}catch(D){return s?s._promise(null,function(F,$){$(D)}):Yt(D)}var z=function D(F,$,U,I,B){return _t.resolve().then(function(){var j=St.transless||St,L=F._createTransaction($,U,F._dbSchema,I);if(L.explicit=!0,j={trans:L,transless:j},I)L.idbtrans=I.idbtrans;else try{L.create(),L.idbtrans._explicit=!0,F._state.PR1398_maxLoop=3}catch(Q){return Q.name===Jt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return D(F,$,U,null,B)})):Yt(Q)}var W,H=X(B);return H&&an(),j=_t.follow(function(){var Q;(W=B.call(L,L))&&(H?(Q=Me.bind(null,null),W.then(Q,Q)):typeof W.next=="function"&&typeof W.throw=="function"&&(W=jr(W)))},j),(W&&typeof W.then=="function"?_t.resolve(W).then(function(Q){return L.active?Q:Yt(new mt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return W})).then(function(Q){return I&&L._resolve(),L._completion.then(function(){return Q})}).catch(function(Q){return L._reject(Q),Yt(Q)})})}.bind(null,this,f,x,s,n);return s?s._promise(f,z,"lock"):St.trans?Ke(St.transless,function(){return a._whenReady(z)}):this._whenReady(z)},Gt.prototype.table=function(t){if(!C(this._allTables,t))throw new mt.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},Gt);function Gt(t,e){var n=this;this._middlewares={},this.verno=0;var a=Gt.dependencies;this._options=e=u({addons:Gt.addons,autoOpen:!0,indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange,cache:"cloned"},e),this._deps={indexedDB:e.indexedDB,IDBKeyRange:e.IDBKeyRange},a=e.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var s,f,x,P,z,D={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:It,dbReadyPromise:null,cancelOpen:It,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:e.autoOpen};D.dbReadyPromise=new _t(function($){D.dbReadyResolve=$}),D.openCanceller=new _t(function($,U){D.cancelOpen=U}),this._state=D,this.name=t,this.on=bn(this,"populate","blocked","versionchange","close",{ready:[ot,It]}),this.once=function($,U){var I=function(){for(var B=[],j=0;j<arguments.length;j++)B[j]=arguments[j];n.on($).unsubscribe(I),U.apply(n,B)};return n.on($,I)},this.on.ready.subscribe=M(this.on.ready.subscribe,function($){return function(U,I){Gt.vip(function(){var B,j=n._state;j.openComplete?(j.dbOpenError||_t.resolve().then(U),I&&$(U)):j.onReadyBeingFired?(j.onReadyBeingFired.push(U),I&&$(U)):($(U),B=n,I||$(function L(){B.on.ready.unsubscribe(U),B.on.ready.unsubscribe(L)}))})}}),this.Collection=(s=this,wn(Oa.prototype,function(W,L){this.db=s;var I=si,B=null;if(L)try{I=L()}catch(H){B=H}var j=W._ctx,L=j.table,W=L.hook.reading.fire;this._ctx={table:L,index:j.index,isPrimKey:!j.index||L.schema.primKey.keyPath&&j.index===L.schema.primKey.name,range:I,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:B,or:j.or,valueMapper:W!==ie?W:null}})),this.Table=(f=this,wn(fi.prototype,function($,U,I){this.db=f,this._tx=I,this.name=$,this.schema=U,this.hook=f._allTables[$]?f._allTables[$].hook:bn(null,{creating:[Y,It],reading:[c,ie],updating:[A,It],deleting:[O,It]})})),this.Transaction=(x=this,wn($a.prototype,function($,U,I,B,j){var L=this;$!=="readonly"&&U.forEach(function(W){W=(W=I[W])===null||W===void 0?void 0:W.yProps,W&&(U=U.concat(W.map(function(H){return H.updatesTable})))}),this.db=x,this.mode=$,this.storeNames=U,this.schema=I,this.chromeTransactionDurability=B,this.idbtrans=null,this.on=bn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new _t(function(W,H){L._resolve=W,L._reject=H}),this._completion.then(function(){L.active=!1,L.on.complete.fire()},function(W){var H=L.active;return L.active=!1,L.on.error.fire(W),L.parent?L.parent._reject(W):H&&L.idbtrans&&L.idbtrans.abort(),Yt(W)})})),this.Version=(P=this,wn(ja.prototype,function($){this.db=P,this._cfg={version:$,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(z=this,wn(yi.prototype,function($,U,I){if(this.db=z,this._ctx={table:$,index:U===":id"?null:U,or:I},this._cmp=this._ascending=Ft,this._descending=function(B,j){return Ft(j,B)},this._max=function(B,j){return 0<Ft(B,j)?B:j},this._min=function(B,j){return Ft(B,j)<0?B:j},this._IDBKeyRange=z._deps.IDBKeyRange,!this._IDBKeyRange)throw new mt.MissingAPI})),this.on("versionchange",function($){0<$.newVersion?console.warn("Another connection wants to upgrade database '".concat(n.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(n.name,"'. Closing db now to resume the delete request.")),n.close({disableAutoOpen:!1})}),this.on("blocked",function($){!$.newVersion||$.newVersion<$.oldVersion?console.warn("Dexie.delete('".concat(n.name,"') was blocked")):console.warn("Upgrade '".concat(n.name,"' blocked by other connection holding version ").concat($.oldVersion/10))}),this._maxKey=kn(e.IDBKeyRange),this._createTransaction=function($,U,I,B){return new n.Transaction($,U,I,n._options.chromeTransactionDurability,B)},this._fireOnBlocked=function($){n.on("blocked").fire($),on.filter(function(U){return U.name===n.name&&U!==n&&!U._state.vcFired}).map(function(U){return U.on("versionchange").fire($)})},this.use(Ua),this.use(Va),this.use(Ka),this.use(Na),this.use(La);var F=new Proxy(this,{get:function($,U,I){if(U==="_vip")return!0;if(U==="table")return function(j){return nr(n.table(j),F)};var B=Reflect.get($,U,I);return B instanceof fi?nr(B,F):U==="tables"?B.map(function(j){return nr(j,F)}):U==="_createTransaction"?function(){return nr(B.apply(this,arguments),F)}:B}});this.vip=F,a.forEach(function($){return $(n)})}var rr,ye=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ha=(Ur.prototype.subscribe=function(t,e,n){return this._subscribe(t&&typeof t!="function"?t:{next:t,error:e,complete:n})},Ur.prototype[ye]=function(){return this},Ur);function Ur(t){this._subscribe=t}try{rr={indexedDB:l.indexedDB||l.mozIndexedDB||l.webkitIndexedDB||l.msIndexedDB,IDBKeyRange:l.IDBKeyRange||l.webkitIDBKeyRange}}catch{rr={indexedDB:null,IDBKeyRange:null}}function zi(t){var e,n=!1,a=new Ha(function(s){var f=X(t),x,P=!1,z={},D={},F={get closed(){return P},unsubscribe:function(){P||(P=!0,x&&x.abort(),$&&Fe.storagemutated.unsubscribe(I))}};s.start&&s.start(F);var $=!1,U=function(){return yr(B)},I=function(j){Jn(z,j),Dr(D,z)&&U()},B=function(){var j,L,W;!P&&rr.indexedDB&&(z={},j={},x&&x.abort(),x=new AbortController,W=(function(H){var Q=nn();try{f&&an();var rt=Ie(t,H);return rt=f?rt.finally(Me):rt}finally{Q&&rn()}})(L={subscr:j,signal:x.signal,requery:U,querier:t,trans:null}),Promise.resolve(W).then(function(H){n=!0,e=H,P||L.signal.aborted||(z={},(function(Q){for(var rt in Q)if(C(Q,rt))return;return 1})(D=j)||$||(Fe(xn,I),$=!0),yr(function(){return!P&&s.next&&s.next(H)}))},function(H){n=!1,["DatabaseClosedError","AbortError"].includes(H?.name)||P||yr(function(){P||s.error&&s.error(H)})}))};return setTimeout(U,0),F});return a.hasValue=function(){return n},a.getValue=function(){return e},a}var He=Pe;function Kr(t){var e=Ne;try{Ne=!0,Fe.storagemutated.fire(t),Br(t,!0)}finally{Ne=e}}w(He,u(u({},Wt),{delete:function(t){return new He(t,{addons:[]}).delete()},exists:function(t){return new He(t,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(t){try{return e=He.dependencies,n=e.indexedDB,e=e.IDBKeyRange,($r(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==Ln})}):Tr(n,e).toCollection().primaryKeys()).then(t)}catch{return Yt(new mt.MissingAPI)}var e,n},defineClass:function(){return function(t){v(this,t)}},ignoreTransaction:function(t){return St.trans?Ke(St.transless,t):t()},vip:Rr,async:function(t){return function(){try{var e=jr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:_t.resolve(e)}catch(n){return Yt(n)}}},spawn:function(t,e,n){try{var a=jr(t.apply(n,e||[]));return a&&typeof a.then=="function"?a:_t.resolve(a)}catch(s){return Yt(s)}},currentTransaction:{get:function(){return St.trans||null}},waitFor:function(t,e){return e=_t.resolve(typeof t=="function"?He.ignoreTransaction(t):t).timeout(e||6e4),St.trans?St.trans.waitFor(e):e},Promise:_t,debug:{get:function(){return at},set:function(t){V(t)}},derive:y,extend:v,props:w,override:M,Events:bn,on:Fe,liveQuery:zi,extendObservabilitySet:Jn,getByKeyPath:nt,setByKeyPath:G,delByKeyPath:function(t,e){typeof e=="string"?G(t,e,void 0):"length"in e&&[].map.call(e,function(n){G(t,n,void 0)})},shallowClone:ut,deepClone:J,getObjectDiff:Fr,cmp:Ft,asap:K,minKey:-1/0,addons:[],connections:on,errnames:Jt,dependencies:rr,cache:Ve,semVer:"4.2.1",version:"4.2.1".split(".").map(function(t){return parseInt(t)}).reduce(function(t,e,n){return t+e/Math.pow(10,2*n)})})),He.maxKey=kn(He.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Fe(xn,function(t){Ne||(t=new CustomEvent(kr,{detail:t}),Ne=!0,dispatchEvent(t),Ne=!1)}),addEventListener(kr,function(t){t=t.detail,Ne||Kr(t)}));var cn,Ne=!1,Di=function(){};return typeof BroadcastChannel<"u"&&((Di=function(){(cn=new BroadcastChannel(kr)).onmessage=function(t){return t.data&&Kr(t.data)}})(),typeof cn.unref=="function"&&cn.unref(),Fe(xn,function(t){Ne||cn.postMessage(t)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(t){if(!Pe.disableBfCache&&t.persisted){at&&console.debug("Dexie: handling persisted pagehide"),cn?.close();for(var e=0,n=on;e<n.length;e++)n[e].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(t){!Pe.disableBfCache&&t.persisted&&(at&&console.debug("Dexie: handling persisted pageshow"),Di(),Kr({all:new ae(-1/0,[[]])}))})),_t.rejectionMapper=function(t,e){return!t||t instanceof Et||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Xt[t.name]?t:(e=new Xt[t.name](e||t.message,t),"stack"in t&&_(e,"stack",{get:function(){return this.inner.stack}}),e)},V(at),u(Pe,Object.freeze({__proto__:null,Dexie:Pe,liveQuery:zi,Entity:li,cmp:Ft,PropModification:yn,replacePrefix:function(t,e){return new yn({replacePrefix:[t,e]})},add:function(t){return new yn({add:t})},remove:function(t){return new yn({remove:t})},default:Pe,RangeSet:ae,mergeRanges:An,rangesOverlap:ki}),{default:Pe}),Pe})})(sr)),sr.exports}var $o=To();const Xr=oa($o),Hi=Symbol.for("Dexie"),dr=globalThis[Hi]||(globalThis[Hi]=Xr);if(Xr.semVer!==dr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Xr.semVer} and ${dr.semVer}`);const{liveQuery:Ts,mergeRanges:$s,rangesOverlap:Rs,RangeSet:zs,cmp:Ds,Entity:Is,PropModification:Ms,replacePrefix:Bs,add:js,remove:Fs,DexieYProvider:Ns}=dr;class Ro extends dr{constructor(){super("AudioAnnotationDB"),this.version(1).stores({recordings:"id, title, createdAt, isAnnotated",annotations:"recordingId, completedAt, updatedAt"})}}const be=new Ro;async function sa(p){const{v4:i}=await Oo(async()=>{const{v4:o}=await import("./index-gGVEG6Gs.js");return{v4:o}},[]),r=i(),u={...p,id:r,createdAt:Date.now(),isAnnotated:!1};return await be.recordings.add(u),r}async function la(){return await be.recordings.orderBy("createdAt").reverse().toArray()}async function zo(p){return await be.recordings.get(p)}async function Do(p,i){await be.recordings.update(p,i)}async function Io(p){await be.recordings.delete(p),await be.annotations.delete(p)}async function Vr(p){await be.annotations.put(p),await be.recordings.update(p.recordingId,{isAnnotated:!0})}async function Pn(p){return await be.annotations.get(p)}async function Mo(p){await be.annotations.delete(p),await be.recordings.update(p,{isAnnotated:!1})}async function Bo(){const p=await be.recordings.toArray(),i=/^Untitled (\d+)$/,r=p.map(u=>u.title.match(i)?.[1]).filter(Boolean).map(Number);return r.length>0?Math.max(...r)+1:1}function jo(p){const i=p.lastIndexOf(".");return i===-1?p:p.substring(0,i)}async function Fo(p){return new Promise((i,r)=>{const u=new Audio,o=URL.createObjectURL(p);u.addEventListener("loadedmetadata",()=>{URL.revokeObjectURL(o),i(u.duration)}),u.addEventListener("error",()=>{URL.revokeObjectURL(o),r(new Error("Failed to load audio metadata"))}),u.src=o})}async function No(p){if(!p.type.startsWith("audio/"))throw new Error("File must be an audio file");const i=jo(p.name),r=await Fo(p);return{id:await sa({title:i,audioBlob:p,duration:r,source:"upload"}),title:i,duration:r}}async function Lo(p){const i=Array.from(p),r=[];for(const u of i)try{const o=await No(u);r.push(o)}catch(o){console.error(`Failed to upload ${u.name}:`,o)}return r}function Uo(){return new Promise(p=>{const i=document.createElement("input");i.type="file",i.accept="audio/*",i.multiple=!0,i.addEventListener("change",()=>{p(i.files)}),i.addEventListener("cancel",()=>{p(null)}),i.click()})}function ar(p){throw new Error('Could not dynamically require "'+p+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Hr={exports:{}};var Zi;function Ko(){return Zi||(Zi=1,(function(p,i){(function(r){p.exports=r()})(function(){return(function r(u,o,l){function h(b,S){if(!o[b]){if(!u[b]){var C=typeof ar=="function"&&ar;if(!S&&C)return C(b,!0);if(d)return d(b,!0);var w=new Error("Cannot find module '"+b+"'");throw w.code="MODULE_NOT_FOUND",w}var g=o[b]={exports:{}};u[b][0].call(g.exports,function(_){var y=u[b][1][_];return h(y||_)},g,g.exports,r,u,o,l)}return o[b].exports}for(var d=typeof ar=="function"&&ar,v=0;v<l.length;v++)h(l[v]);return h})({1:[function(r,u,o){var l=r("./utils"),h=r("./support"),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(v){for(var b,S,C,w,g,_,y,E=[],k=0,T=v.length,M=T,q=l.getTypeOf(v)!=="string";k<v.length;)M=T-k,C=q?(b=v[k++],S=k<T?v[k++]:0,k<T?v[k++]:0):(b=v.charCodeAt(k++),S=k<T?v.charCodeAt(k++):0,k<T?v.charCodeAt(k++):0),w=b>>2,g=(3&b)<<4|S>>4,_=1<M?(15&S)<<2|C>>6:64,y=2<M?63&C:64,E.push(d.charAt(w)+d.charAt(g)+d.charAt(_)+d.charAt(y));return E.join("")},o.decode=function(v){var b,S,C,w,g,_,y=0,E=0,k="data:";if(v.substr(0,k.length)===k)throw new Error("Invalid base64 input, it looks like a data url.");var T,M=3*(v=v.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(v.charAt(v.length-1)===d.charAt(64)&&M--,v.charAt(v.length-2)===d.charAt(64)&&M--,M%1!=0)throw new Error("Invalid base64 input, bad content length.");for(T=h.uint8array?new Uint8Array(0|M):new Array(0|M);y<v.length;)b=d.indexOf(v.charAt(y++))<<2|(w=d.indexOf(v.charAt(y++)))>>4,S=(15&w)<<4|(g=d.indexOf(v.charAt(y++)))>>2,C=(3&g)<<6|(_=d.indexOf(v.charAt(y++))),T[E++]=b,g!==64&&(T[E++]=S),_!==64&&(T[E++]=C);return T}},{"./support":30,"./utils":32}],2:[function(r,u,o){var l=r("./external"),h=r("./stream/DataWorker"),d=r("./stream/Crc32Probe"),v=r("./stream/DataLengthProbe");function b(S,C,w,g,_){this.compressedSize=S,this.uncompressedSize=C,this.crc32=w,this.compression=g,this.compressedContent=_}b.prototype={getContentWorker:function(){var S=new h(l.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new v("data_length")),C=this;return S.on("end",function(){if(this.streamInfo.data_length!==C.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),S},getCompressedWorker:function(){return new h(l.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},b.createWorkerFrom=function(S,C,w){return S.pipe(new d).pipe(new v("uncompressedSize")).pipe(C.compressWorker(w)).pipe(new v("compressedSize")).withStreamInfo("compression",C)},u.exports=b},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,u,o){var l=r("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new l("STORE compression")},uncompressWorker:function(){return new l("STORE decompression")}},o.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,u,o){var l=r("./utils"),h=(function(){for(var d,v=[],b=0;b<256;b++){d=b;for(var S=0;S<8;S++)d=1&d?3988292384^d>>>1:d>>>1;v[b]=d}return v})();u.exports=function(d,v){return d!==void 0&&d.length?l.getTypeOf(d)!=="string"?(function(b,S,C,w){var g=h,_=w+C;b^=-1;for(var y=w;y<_;y++)b=b>>>8^g[255&(b^S[y])];return-1^b})(0|v,d,d.length,0):(function(b,S,C,w){var g=h,_=w+C;b^=-1;for(var y=w;y<_;y++)b=b>>>8^g[255&(b^S.charCodeAt(y))];return-1^b})(0|v,d,d.length,0):0}},{"./utils":32}],5:[function(r,u,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(r,u,o){var l=null;l=typeof Promise<"u"?Promise:r("lie"),u.exports={Promise:l}},{lie:37}],7:[function(r,u,o){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",h=r("pako"),d=r("./utils"),v=r("./stream/GenericWorker"),b=l?"uint8array":"array";function S(C,w){v.call(this,"FlateWorker/"+C),this._pako=null,this._pakoAction=C,this._pakoOptions=w,this.meta={}}o.magic="\b\0",d.inherits(S,v),S.prototype.processChunk=function(C){this.meta=C.meta,this._pako===null&&this._createPako(),this._pako.push(d.transformTo(b,C.data),!1)},S.prototype.flush=function(){v.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},S.prototype.cleanUp=function(){v.prototype.cleanUp.call(this),this._pako=null},S.prototype._createPako=function(){this._pako=new h[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var C=this;this._pako.onData=function(w){C.push({data:w,meta:C.meta})}},o.compressWorker=function(C){return new S("Deflate",C)},o.uncompressWorker=function(){return new S("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,u,o){function l(g,_){var y,E="";for(y=0;y<_;y++)E+=String.fromCharCode(255&g),g>>>=8;return E}function h(g,_,y,E,k,T){var M,q,K=g.file,nt=g.compression,G=T!==b.utf8encode,ut=d.transformTo("string",T(K.name)),tt=d.transformTo("string",b.utf8encode(K.name)),pt=K.comment,Pt=d.transformTo("string",T(pt)),R=d.transformTo("string",b.utf8encode(pt)),J=tt.length!==K.name.length,m=R.length!==pt.length,it="",Tt="",lt="",$t=K.dir,st=K.date,Ot={crc32:0,compressedSize:0,uncompressedSize:0};_&&!y||(Ot.crc32=g.crc32,Ot.compressedSize=g.compressedSize,Ot.uncompressedSize=g.uncompressedSize);var X=0;_&&(X|=8),G||!J&&!m||(X|=2048);var Z=0,Et=0;$t&&(Z|=16),k==="UNIX"?(Et=798,Z|=(function(vt,qt){var Jt=vt;return vt||(Jt=qt?16893:33204),(65535&Jt)<<16})(K.unixPermissions,$t)):(Et=20,Z|=(function(vt){return 63&(vt||0)})(K.dosPermissions)),M=st.getUTCHours(),M<<=6,M|=st.getUTCMinutes(),M<<=5,M|=st.getUTCSeconds()/2,q=st.getUTCFullYear()-1980,q<<=4,q|=st.getUTCMonth()+1,q<<=5,q|=st.getUTCDate(),J&&(Tt=l(1,1)+l(S(ut),4)+tt,it+="up"+l(Tt.length,2)+Tt),m&&(lt=l(1,1)+l(S(Pt),4)+R,it+="uc"+l(lt.length,2)+lt);var xt="";return xt+=`
\0`,xt+=l(X,2),xt+=nt.magic,xt+=l(M,2),xt+=l(q,2),xt+=l(Ot.crc32,4),xt+=l(Ot.compressedSize,4),xt+=l(Ot.uncompressedSize,4),xt+=l(ut.length,2),xt+=l(it.length,2),{fileRecord:C.LOCAL_FILE_HEADER+xt+ut+it,dirRecord:C.CENTRAL_FILE_HEADER+l(Et,2)+xt+l(Pt.length,2)+"\0\0\0\0"+l(Z,4)+l(E,4)+ut+it+Pt}}var d=r("../utils"),v=r("../stream/GenericWorker"),b=r("../utf8"),S=r("../crc32"),C=r("../signature");function w(g,_,y,E){v.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=y,this.encodeFileName=E,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}d.inherits(w,v),w.prototype.push=function(g){var _=g.meta.percent||0,y=this.entriesCount,E=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,v.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:y?(_+100*(y-E-1))/y:100}}))},w.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var _=this.streamFiles&&!g.file.dir;if(_){var y=h(g,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},w.prototype.closedSource=function(g){this.accumulate=!1;var _=this.streamFiles&&!g.file.dir,y=h(g,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),_)this.push({data:(function(E){return C.DATA_DESCRIPTOR+l(E.crc32,4)+l(E.compressedSize,4)+l(E.uncompressedSize,4)})(g),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},w.prototype.flush=function(){for(var g=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var y=this.bytesWritten-g,E=(function(k,T,M,q,K){var nt=d.transformTo("string",K(q));return C.CENTRAL_DIRECTORY_END+"\0\0\0\0"+l(k,2)+l(k,2)+l(T,4)+l(M,4)+l(nt.length,2)+nt})(this.dirRecords.length,y,g,this.zipComment,this.encodeFileName);this.push({data:E,meta:{percent:100}})},w.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},w.prototype.registerPrevious=function(g){this._sources.push(g);var _=this;return g.on("data",function(y){_.processChunk(y)}),g.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),g.on("error",function(y){_.error(y)}),this},w.prototype.resume=function(){return!!v.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},w.prototype.error=function(g){var _=this._sources;if(!v.prototype.error.call(this,g))return!1;for(var y=0;y<_.length;y++)try{_[y].error(g)}catch{}return!0},w.prototype.lock=function(){v.prototype.lock.call(this);for(var g=this._sources,_=0;_<g.length;_++)g[_].lock()},u.exports=w},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,u,o){var l=r("../compressions"),h=r("./ZipFileWorker");o.generateWorker=function(d,v,b){var S=new h(v.streamFiles,b,v.platform,v.encodeFileName),C=0;try{d.forEach(function(w,g){C++;var _=(function(T,M){var q=T||M,K=l[q];if(!K)throw new Error(q+" is not a valid compression method !");return K})(g.options.compression,v.compression),y=g.options.compressionOptions||v.compressionOptions||{},E=g.dir,k=g.date;g._compressWorker(_,y).withStreamInfo("file",{name:w,dir:E,date:k,comment:g.comment||"",unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions}).pipe(S)}),S.entriesCount=C}catch(w){S.error(w)}return S}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,u,o){function l(){if(!(this instanceof l))return new l;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var h=new l;for(var d in this)typeof this[d]!="function"&&(h[d]=this[d]);return h}}(l.prototype=r("./object")).loadAsync=r("./load"),l.support=r("./support"),l.defaults=r("./defaults"),l.version="3.10.1",l.loadAsync=function(h,d){return new l().loadAsync(h,d)},l.external=r("./external"),u.exports=l},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,u,o){var l=r("./utils"),h=r("./external"),d=r("./utf8"),v=r("./zipEntries"),b=r("./stream/Crc32Probe"),S=r("./nodejsUtils");function C(w){return new h.Promise(function(g,_){var y=w.decompressed.getContentWorker().pipe(new b);y.on("error",function(E){_(E)}).on("end",function(){y.streamInfo.crc32!==w.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):g()}).resume()})}u.exports=function(w,g){var _=this;return g=l.extend(g||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:d.utf8decode}),S.isNode&&S.isStream(w)?h.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):l.prepareContent("the loaded zip file",w,!0,g.optimizedBinaryString,g.base64).then(function(y){var E=new v(g);return E.load(y),E}).then(function(y){var E=[h.Promise.resolve(y)],k=y.files;if(g.checkCRC32)for(var T=0;T<k.length;T++)E.push(C(k[T]));return h.Promise.all(E)}).then(function(y){for(var E=y.shift(),k=E.files,T=0;T<k.length;T++){var M=k[T],q=M.fileNameStr,K=l.resolve(M.fileNameStr);_.file(K,M.decompressed,{binary:!0,optimizedBinaryString:!0,date:M.date,dir:M.dir,comment:M.fileCommentStr.length?M.fileCommentStr:null,unixPermissions:M.unixPermissions,dosPermissions:M.dosPermissions,createFolders:g.createFolders}),M.dir||(_.file(K).unsafeOriginalName=q)}return E.zipComment.length&&(_.comment=E.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,u,o){var l=r("../utils"),h=r("../stream/GenericWorker");function d(v,b){h.call(this,"Nodejs stream input adapter for "+v),this._upstreamEnded=!1,this._bindStream(b)}l.inherits(d,h),d.prototype._bindStream=function(v){var b=this;(this._stream=v).pause(),v.on("data",function(S){b.push({data:S,meta:{percent:0}})}).on("error",function(S){b.isPaused?this.generatedError=S:b.error(S)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},d.prototype.pause=function(){return!!h.prototype.pause.call(this)&&(this._stream.pause(),!0)},d.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},u.exports=d},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,u,o){var l=r("readable-stream").Readable;function h(d,v,b){l.call(this,v),this._helper=d;var S=this;d.on("data",function(C,w){S.push(C)||S._helper.pause(),b&&b(w)}).on("error",function(C){S.emit("error",C)}).on("end",function(){S.push(null)})}r("../utils").inherits(h,l),h.prototype._read=function(){this._helper.resume()},u.exports=h},{"../utils":32,"readable-stream":16}],14:[function(r,u,o){u.exports={isNode:typeof Buffer<"u",newBufferFrom:function(l,h){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(l,h);if(typeof l=="number")throw new Error('The "data" argument must not be a number');return new Buffer(l,h)},allocBuffer:function(l){if(Buffer.alloc)return Buffer.alloc(l);var h=new Buffer(l);return h.fill(0),h},isBuffer:function(l){return Buffer.isBuffer(l)},isStream:function(l){return l&&typeof l.on=="function"&&typeof l.pause=="function"&&typeof l.resume=="function"}}},{}],15:[function(r,u,o){function l(K,nt,G){var ut,tt=d.getTypeOf(nt),pt=d.extend(G||{},S);pt.date=pt.date||new Date,pt.compression!==null&&(pt.compression=pt.compression.toUpperCase()),typeof pt.unixPermissions=="string"&&(pt.unixPermissions=parseInt(pt.unixPermissions,8)),pt.unixPermissions&&16384&pt.unixPermissions&&(pt.dir=!0),pt.dosPermissions&&16&pt.dosPermissions&&(pt.dir=!0),pt.dir&&(K=k(K)),pt.createFolders&&(ut=E(K))&&T.call(this,ut,!0);var Pt=tt==="string"&&pt.binary===!1&&pt.base64===!1;G&&G.binary!==void 0||(pt.binary=!Pt),(nt instanceof C&&nt.uncompressedSize===0||pt.dir||!nt||nt.length===0)&&(pt.base64=!1,pt.binary=!0,nt="",pt.compression="STORE",tt="string");var R=null;R=nt instanceof C||nt instanceof v?nt:_.isNode&&_.isStream(nt)?new y(K,nt):d.prepareContent(K,nt,pt.binary,pt.optimizedBinaryString,pt.base64);var J=new w(K,R,pt);this.files[K]=J}var h=r("./utf8"),d=r("./utils"),v=r("./stream/GenericWorker"),b=r("./stream/StreamHelper"),S=r("./defaults"),C=r("./compressedObject"),w=r("./zipObject"),g=r("./generate"),_=r("./nodejsUtils"),y=r("./nodejs/NodejsStreamInputAdapter"),E=function(K){K.slice(-1)==="/"&&(K=K.substring(0,K.length-1));var nt=K.lastIndexOf("/");return 0<nt?K.substring(0,nt):""},k=function(K){return K.slice(-1)!=="/"&&(K+="/"),K},T=function(K,nt){return nt=nt!==void 0?nt:S.createFolders,K=k(K),this.files[K]||l.call(this,K,null,{dir:!0,createFolders:nt}),this.files[K]};function M(K){return Object.prototype.toString.call(K)==="[object RegExp]"}var q={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(K){var nt,G,ut;for(nt in this.files)ut=this.files[nt],(G=nt.slice(this.root.length,nt.length))&&nt.slice(0,this.root.length)===this.root&&K(G,ut)},filter:function(K){var nt=[];return this.forEach(function(G,ut){K(G,ut)&&nt.push(ut)}),nt},file:function(K,nt,G){if(arguments.length!==1)return K=this.root+K,l.call(this,K,nt,G),this;if(M(K)){var ut=K;return this.filter(function(pt,Pt){return!Pt.dir&&ut.test(pt)})}var tt=this.files[this.root+K];return tt&&!tt.dir?tt:null},folder:function(K){if(!K)return this;if(M(K))return this.filter(function(tt,pt){return pt.dir&&K.test(tt)});var nt=this.root+K,G=T.call(this,nt),ut=this.clone();return ut.root=G.name,ut},remove:function(K){K=this.root+K;var nt=this.files[K];if(nt||(K.slice(-1)!=="/"&&(K+="/"),nt=this.files[K]),nt&&!nt.dir)delete this.files[K];else for(var G=this.filter(function(tt,pt){return pt.name.slice(0,K.length)===K}),ut=0;ut<G.length;ut++)delete this.files[G[ut].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(K){var nt,G={};try{if((G=d.extend(K||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:h.utf8encode})).type=G.type.toLowerCase(),G.compression=G.compression.toUpperCase(),G.type==="binarystring"&&(G.type="string"),!G.type)throw new Error("No output type specified.");d.checkSupport(G.type),G.platform!=="darwin"&&G.platform!=="freebsd"&&G.platform!=="linux"&&G.platform!=="sunos"||(G.platform="UNIX"),G.platform==="win32"&&(G.platform="DOS");var ut=G.comment||this.comment||"";nt=g.generateWorker(this,G,ut)}catch(tt){(nt=new v("error")).error(tt)}return new b(nt,G.type||"string",G.mimeType)},generateAsync:function(K,nt){return this.generateInternalStream(K).accumulate(nt)},generateNodeStream:function(K,nt){return(K=K||{}).type||(K.type="nodebuffer"),this.generateInternalStream(K).toNodejsStream(nt)}};u.exports=q},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,u,o){u.exports=r("stream")},{stream:void 0}],17:[function(r,u,o){var l=r("./DataReader");function h(d){l.call(this,d);for(var v=0;v<this.data.length;v++)d[v]=255&d[v]}r("../utils").inherits(h,l),h.prototype.byteAt=function(d){return this.data[this.zero+d]},h.prototype.lastIndexOfSignature=function(d){for(var v=d.charCodeAt(0),b=d.charCodeAt(1),S=d.charCodeAt(2),C=d.charCodeAt(3),w=this.length-4;0<=w;--w)if(this.data[w]===v&&this.data[w+1]===b&&this.data[w+2]===S&&this.data[w+3]===C)return w-this.zero;return-1},h.prototype.readAndCheckSignature=function(d){var v=d.charCodeAt(0),b=d.charCodeAt(1),S=d.charCodeAt(2),C=d.charCodeAt(3),w=this.readData(4);return v===w[0]&&b===w[1]&&S===w[2]&&C===w[3]},h.prototype.readData=function(d){if(this.checkOffset(d),d===0)return[];var v=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},u.exports=h},{"../utils":32,"./DataReader":18}],18:[function(r,u,o){var l=r("../utils");function h(d){this.data=d,this.length=d.length,this.index=0,this.zero=0}h.prototype={checkOffset:function(d){this.checkIndex(this.index+d)},checkIndex:function(d){if(this.length<this.zero+d||d<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+d+"). Corrupted zip ?")},setIndex:function(d){this.checkIndex(d),this.index=d},skip:function(d){this.setIndex(this.index+d)},byteAt:function(){},readInt:function(d){var v,b=0;for(this.checkOffset(d),v=this.index+d-1;v>=this.index;v--)b=(b<<8)+this.byteAt(v);return this.index+=d,b},readString:function(d){return l.transformTo("string",this.readData(d))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var d=this.readInt(4);return new Date(Date.UTC(1980+(d>>25&127),(d>>21&15)-1,d>>16&31,d>>11&31,d>>5&63,(31&d)<<1))}},u.exports=h},{"../utils":32}],19:[function(r,u,o){var l=r("./Uint8ArrayReader");function h(d){l.call(this,d)}r("../utils").inherits(h,l),h.prototype.readData=function(d){this.checkOffset(d);var v=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},u.exports=h},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,u,o){var l=r("./DataReader");function h(d){l.call(this,d)}r("../utils").inherits(h,l),h.prototype.byteAt=function(d){return this.data.charCodeAt(this.zero+d)},h.prototype.lastIndexOfSignature=function(d){return this.data.lastIndexOf(d)-this.zero},h.prototype.readAndCheckSignature=function(d){return d===this.readData(4)},h.prototype.readData=function(d){this.checkOffset(d);var v=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},u.exports=h},{"../utils":32,"./DataReader":18}],21:[function(r,u,o){var l=r("./ArrayReader");function h(d){l.call(this,d)}r("../utils").inherits(h,l),h.prototype.readData=function(d){if(this.checkOffset(d),d===0)return new Uint8Array(0);var v=this.data.subarray(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},u.exports=h},{"../utils":32,"./ArrayReader":17}],22:[function(r,u,o){var l=r("../utils"),h=r("../support"),d=r("./ArrayReader"),v=r("./StringReader"),b=r("./NodeBufferReader"),S=r("./Uint8ArrayReader");u.exports=function(C){var w=l.getTypeOf(C);return l.checkSupport(w),w!=="string"||h.uint8array?w==="nodebuffer"?new b(C):h.uint8array?new S(l.transformTo("uint8array",C)):new d(l.transformTo("array",C)):new v(C)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,u,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,u,o){var l=r("./GenericWorker"),h=r("../utils");function d(v){l.call(this,"ConvertWorker to "+v),this.destType=v}h.inherits(d,l),d.prototype.processChunk=function(v){this.push({data:h.transformTo(this.destType,v.data),meta:v.meta})},u.exports=d},{"../utils":32,"./GenericWorker":28}],25:[function(r,u,o){var l=r("./GenericWorker"),h=r("../crc32");function d(){l.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(d,l),d.prototype.processChunk=function(v){this.streamInfo.crc32=h(v.data,this.streamInfo.crc32||0),this.push(v)},u.exports=d},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,u,o){var l=r("../utils"),h=r("./GenericWorker");function d(v){h.call(this,"DataLengthProbe for "+v),this.propName=v,this.withStreamInfo(v,0)}l.inherits(d,h),d.prototype.processChunk=function(v){if(v){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+v.data.length}h.prototype.processChunk.call(this,v)},u.exports=d},{"../utils":32,"./GenericWorker":28}],27:[function(r,u,o){var l=r("../utils"),h=r("./GenericWorker");function d(v){h.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,v.then(function(S){b.dataIsReady=!0,b.data=S,b.max=S&&S.length||0,b.type=l.getTypeOf(S),b.isPaused||b._tickAndRepeat()},function(S){b.error(S)})}l.inherits(d,h),d.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this.data=null},d.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,l.delay(this._tickAndRepeat,[],this)),!0)},d.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(l.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},d.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var v=null,b=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":v=this.data.substring(this.index,b);break;case"uint8array":v=this.data.subarray(this.index,b);break;case"array":case"nodebuffer":v=this.data.slice(this.index,b)}return this.index=b,this.push({data:v,meta:{percent:this.max?this.index/this.max*100:0}})},u.exports=d},{"../utils":32,"./GenericWorker":28}],28:[function(r,u,o){function l(h){this.name=h||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}l.prototype={push:function(h){this.emit("data",h)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(h){this.emit("error",h)}return!0},error:function(h){return!this.isFinished&&(this.isPaused?this.generatedError=h:(this.isFinished=!0,this.emit("error",h),this.previous&&this.previous.error(h),this.cleanUp()),!0)},on:function(h,d){return this._listeners[h].push(d),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(h,d){if(this._listeners[h])for(var v=0;v<this._listeners[h].length;v++)this._listeners[h][v].call(this,d)},pipe:function(h){return h.registerPrevious(this)},registerPrevious:function(h){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=h.streamInfo,this.mergeStreamInfo(),this.previous=h;var d=this;return h.on("data",function(v){d.processChunk(v)}),h.on("end",function(){d.end()}),h.on("error",function(v){d.error(v)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var h=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),h=!0),this.previous&&this.previous.resume(),!h},flush:function(){},processChunk:function(h){this.push(h)},withStreamInfo:function(h,d){return this.extraStreamInfo[h]=d,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var h in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,h)&&(this.streamInfo[h]=this.extraStreamInfo[h])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var h="Worker "+this.name;return this.previous?this.previous+" -> "+h:h}},u.exports=l},{}],29:[function(r,u,o){var l=r("../utils"),h=r("./ConvertWorker"),d=r("./GenericWorker"),v=r("../base64"),b=r("../support"),S=r("../external"),C=null;if(b.nodestream)try{C=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function w(_,y){return new S.Promise(function(E,k){var T=[],M=_._internalType,q=_._outputType,K=_._mimeType;_.on("data",function(nt,G){T.push(nt),y&&y(G)}).on("error",function(nt){T=[],k(nt)}).on("end",function(){try{var nt=(function(G,ut,tt){switch(G){case"blob":return l.newBlob(l.transformTo("arraybuffer",ut),tt);case"base64":return v.encode(ut);default:return l.transformTo(G,ut)}})(q,(function(G,ut){var tt,pt=0,Pt=null,R=0;for(tt=0;tt<ut.length;tt++)R+=ut[tt].length;switch(G){case"string":return ut.join("");case"array":return Array.prototype.concat.apply([],ut);case"uint8array":for(Pt=new Uint8Array(R),tt=0;tt<ut.length;tt++)Pt.set(ut[tt],pt),pt+=ut[tt].length;return Pt;case"nodebuffer":return Buffer.concat(ut);default:throw new Error("concat : unsupported type '"+G+"'")}})(M,T),K);E(nt)}catch(G){k(G)}T=[]}).resume()})}function g(_,y,E){var k=y;switch(y){case"blob":case"arraybuffer":k="uint8array";break;case"base64":k="string"}try{this._internalType=k,this._outputType=y,this._mimeType=E,l.checkSupport(k),this._worker=_.pipe(new h(k)),_.lock()}catch(T){this._worker=new d("error"),this._worker.error(T)}}g.prototype={accumulate:function(_){return w(this,_)},on:function(_,y){var E=this;return _==="data"?this._worker.on(_,function(k){y.call(E,k.data,k.meta)}):this._worker.on(_,function(){l.delay(y,arguments,E)}),this},resume:function(){return l.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(l.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new C(this,{objectMode:this._outputType!=="nodebuffer"},_)}},u.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,u,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var l=new ArrayBuffer(0);try{o.blob=new Blob([l],{type:"application/zip"}).size===0}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);h.append(l),o.blob=h.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!r("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(r,u,o){for(var l=r("./utils"),h=r("./support"),d=r("./nodejsUtils"),v=r("./stream/GenericWorker"),b=new Array(256),S=0;S<256;S++)b[S]=252<=S?6:248<=S?5:240<=S?4:224<=S?3:192<=S?2:1;b[254]=b[254]=1;function C(){v.call(this,"utf-8 decode"),this.leftOver=null}function w(){v.call(this,"utf-8 encode")}o.utf8encode=function(g){return h.nodebuffer?d.newBufferFrom(g,"utf-8"):(function(_){var y,E,k,T,M,q=_.length,K=0;for(T=0;T<q;T++)(64512&(E=_.charCodeAt(T)))==55296&&T+1<q&&(64512&(k=_.charCodeAt(T+1)))==56320&&(E=65536+(E-55296<<10)+(k-56320),T++),K+=E<128?1:E<2048?2:E<65536?3:4;for(y=h.uint8array?new Uint8Array(K):new Array(K),T=M=0;M<K;T++)(64512&(E=_.charCodeAt(T)))==55296&&T+1<q&&(64512&(k=_.charCodeAt(T+1)))==56320&&(E=65536+(E-55296<<10)+(k-56320),T++),E<128?y[M++]=E:(E<2048?y[M++]=192|E>>>6:(E<65536?y[M++]=224|E>>>12:(y[M++]=240|E>>>18,y[M++]=128|E>>>12&63),y[M++]=128|E>>>6&63),y[M++]=128|63&E);return y})(g)},o.utf8decode=function(g){return h.nodebuffer?l.transformTo("nodebuffer",g).toString("utf-8"):(function(_){var y,E,k,T,M=_.length,q=new Array(2*M);for(y=E=0;y<M;)if((k=_[y++])<128)q[E++]=k;else if(4<(T=b[k]))q[E++]=65533,y+=T-1;else{for(k&=T===2?31:T===3?15:7;1<T&&y<M;)k=k<<6|63&_[y++],T--;1<T?q[E++]=65533:k<65536?q[E++]=k:(k-=65536,q[E++]=55296|k>>10&1023,q[E++]=56320|1023&k)}return q.length!==E&&(q.subarray?q=q.subarray(0,E):q.length=E),l.applyFromCharCode(q)})(g=l.transformTo(h.uint8array?"uint8array":"array",g))},l.inherits(C,v),C.prototype.processChunk=function(g){var _=l.transformTo(h.uint8array?"uint8array":"array",g.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var y=_;(_=new Uint8Array(y.length+this.leftOver.length)).set(this.leftOver,0),_.set(y,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var E=(function(T,M){var q;for((M=M||T.length)>T.length&&(M=T.length),q=M-1;0<=q&&(192&T[q])==128;)q--;return q<0||q===0?M:q+b[T[q]]>M?q:M})(_),k=_;E!==_.length&&(h.uint8array?(k=_.subarray(0,E),this.leftOver=_.subarray(E,_.length)):(k=_.slice(0,E),this.leftOver=_.slice(E,_.length))),this.push({data:o.utf8decode(k),meta:g.meta})},C.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=C,l.inherits(w,v),w.prototype.processChunk=function(g){this.push({data:o.utf8encode(g.data),meta:g.meta})},o.Utf8EncodeWorker=w},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,u,o){var l=r("./support"),h=r("./base64"),d=r("./nodejsUtils"),v=r("./external");function b(y){return y}function S(y,E){for(var k=0;k<y.length;++k)E[k]=255&y.charCodeAt(k);return E}r("setimmediate"),o.newBlob=function(y,E){o.checkSupport("blob");try{return new Blob([y],{type:E})}catch{try{var k=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return k.append(y),k.getBlob(E)}catch{throw new Error("Bug : can't construct the Blob.")}}};var C={stringifyByChunk:function(y,E,k){var T=[],M=0,q=y.length;if(q<=k)return String.fromCharCode.apply(null,y);for(;M<q;)E==="array"||E==="nodebuffer"?T.push(String.fromCharCode.apply(null,y.slice(M,Math.min(M+k,q)))):T.push(String.fromCharCode.apply(null,y.subarray(M,Math.min(M+k,q)))),M+=k;return T.join("")},stringifyByChar:function(y){for(var E="",k=0;k<y.length;k++)E+=String.fromCharCode(y[k]);return E},applyCanBeUsed:{uint8array:(function(){try{return l.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return l.nodebuffer&&String.fromCharCode.apply(null,d.allocBuffer(1)).length===1}catch{return!1}})()}};function w(y){var E=65536,k=o.getTypeOf(y),T=!0;if(k==="uint8array"?T=C.applyCanBeUsed.uint8array:k==="nodebuffer"&&(T=C.applyCanBeUsed.nodebuffer),T)for(;1<E;)try{return C.stringifyByChunk(y,k,E)}catch{E=Math.floor(E/2)}return C.stringifyByChar(y)}function g(y,E){for(var k=0;k<y.length;k++)E[k]=y[k];return E}o.applyFromCharCode=w;var _={};_.string={string:b,array:function(y){return S(y,new Array(y.length))},arraybuffer:function(y){return _.string.uint8array(y).buffer},uint8array:function(y){return S(y,new Uint8Array(y.length))},nodebuffer:function(y){return S(y,d.allocBuffer(y.length))}},_.array={string:w,array:b,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return d.newBufferFrom(y)}},_.arraybuffer={string:function(y){return w(new Uint8Array(y))},array:function(y){return g(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:b,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return d.newBufferFrom(new Uint8Array(y))}},_.uint8array={string:w,array:function(y){return g(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:b,nodebuffer:function(y){return d.newBufferFrom(y)}},_.nodebuffer={string:w,array:function(y){return g(y,new Array(y.length))},arraybuffer:function(y){return _.nodebuffer.uint8array(y).buffer},uint8array:function(y){return g(y,new Uint8Array(y.length))},nodebuffer:b},o.transformTo=function(y,E){if(E=E||"",!y)return E;o.checkSupport(y);var k=o.getTypeOf(E);return _[k][y](E)},o.resolve=function(y){for(var E=y.split("/"),k=[],T=0;T<E.length;T++){var M=E[T];M==="."||M===""&&T!==0&&T!==E.length-1||(M===".."?k.pop():k.push(M))}return k.join("/")},o.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":l.nodebuffer&&d.isBuffer(y)?"nodebuffer":l.uint8array&&y instanceof Uint8Array?"uint8array":l.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(y){if(!l[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(y){var E,k,T="";for(k=0;k<(y||"").length;k++)T+="\\x"+((E=y.charCodeAt(k))<16?"0":"")+E.toString(16).toUpperCase();return T},o.delay=function(y,E,k){setImmediate(function(){y.apply(k||null,E||[])})},o.inherits=function(y,E){function k(){}k.prototype=E.prototype,y.prototype=new k},o.extend=function(){var y,E,k={};for(y=0;y<arguments.length;y++)for(E in arguments[y])Object.prototype.hasOwnProperty.call(arguments[y],E)&&k[E]===void 0&&(k[E]=arguments[y][E]);return k},o.prepareContent=function(y,E,k,T,M){return v.Promise.resolve(E).then(function(q){return l.blob&&(q instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(q))!==-1)&&typeof FileReader<"u"?new v.Promise(function(K,nt){var G=new FileReader;G.onload=function(ut){K(ut.target.result)},G.onerror=function(ut){nt(ut.target.error)},G.readAsArrayBuffer(q)}):q}).then(function(q){var K=o.getTypeOf(q);return K?(K==="arraybuffer"?q=o.transformTo("uint8array",q):K==="string"&&(M?q=h.decode(q):k&&T!==!0&&(q=(function(nt){return S(nt,l.uint8array?new Uint8Array(nt.length):new Array(nt.length))})(q))),q):v.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(r,u,o){var l=r("./reader/readerFor"),h=r("./utils"),d=r("./signature"),v=r("./zipEntry"),b=r("./support");function S(C){this.files=[],this.loadOptions=C}S.prototype={checkSignature:function(C){if(!this.reader.readAndCheckSignature(C)){this.reader.index-=4;var w=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+h.pretty(w)+", expected "+h.pretty(C)+")")}},isSignature:function(C,w){var g=this.reader.index;this.reader.setIndex(C);var _=this.reader.readString(4)===w;return this.reader.setIndex(g),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var C=this.reader.readData(this.zipCommentLength),w=b.uint8array?"uint8array":"array",g=h.transformTo(w,C);this.zipComment=this.loadOptions.decodeFileName(g)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var C,w,g,_=this.zip64EndOfCentralSize-44;0<_;)C=this.reader.readInt(2),w=this.reader.readInt(4),g=this.reader.readData(w),this.zip64ExtensibleData[C]={id:C,length:w,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var C,w;for(C=0;C<this.files.length;C++)w=this.files[C],this.reader.setIndex(w.localHeaderOffset),this.checkSignature(d.LOCAL_FILE_HEADER),w.readLocalPart(this.reader),w.handleUTF8(),w.processAttributes()},readCentralDir:function(){var C;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(d.CENTRAL_FILE_HEADER);)(C=new v({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(C);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var C=this.reader.lastIndexOfSignature(d.CENTRAL_DIRECTORY_END);if(C<0)throw this.isSignature(0,d.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(C);var w=C;if(this.checkSignature(d.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===h.MAX_VALUE_16BITS||this.diskWithCentralDirStart===h.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===h.MAX_VALUE_16BITS||this.centralDirRecords===h.MAX_VALUE_16BITS||this.centralDirSize===h.MAX_VALUE_32BITS||this.centralDirOffset===h.MAX_VALUE_32BITS){if(this.zip64=!0,(C=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(C),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,d.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var g=this.centralDirOffset+this.centralDirSize;this.zip64&&(g+=20,g+=12+this.zip64EndOfCentralSize);var _=w-g;if(0<_)this.isSignature(w,d.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(C){this.reader=l(C)},load:function(C){this.prepareReader(C),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},u.exports=S},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(r,u,o){var l=r("./reader/readerFor"),h=r("./utils"),d=r("./compressedObject"),v=r("./crc32"),b=r("./utf8"),S=r("./compressions"),C=r("./support");function w(g,_){this.options=g,this.loadOptions=_}w.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(g){var _,y;if(g.skip(22),this.fileNameLength=g.readInt(2),y=g.readInt(2),this.fileName=g.readData(this.fileNameLength),g.skip(y),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=(function(E){for(var k in S)if(Object.prototype.hasOwnProperty.call(S,k)&&S[k].magic===E)return S[k];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+h.pretty(this.compressionMethod)+" unknown (inner file : "+h.transformTo("string",this.fileName)+")");this.decompressed=new d(this.compressedSize,this.uncompressedSize,this.crc32,_,g.readData(this.compressedSize))},readCentralPart:function(g){this.versionMadeBy=g.readInt(2),g.skip(2),this.bitFlag=g.readInt(2),this.compressionMethod=g.readString(2),this.date=g.readDate(),this.crc32=g.readInt(4),this.compressedSize=g.readInt(4),this.uncompressedSize=g.readInt(4);var _=g.readInt(2);if(this.extraFieldsLength=g.readInt(2),this.fileCommentLength=g.readInt(2),this.diskNumberStart=g.readInt(2),this.internalFileAttributes=g.readInt(2),this.externalFileAttributes=g.readInt(4),this.localHeaderOffset=g.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");g.skip(_),this.readExtraFields(g),this.parseZIP64ExtraField(g),this.fileComment=g.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var g=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),g==0&&(this.dosPermissions=63&this.externalFileAttributes),g==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var g=l(this.extraFields[1].value);this.uncompressedSize===h.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===h.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===h.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===h.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(g){var _,y,E,k=g.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});g.index+4<k;)_=g.readInt(2),y=g.readInt(2),E=g.readData(y),this.extraFields[_]={id:_,length:y,value:E};g.setIndex(k)},handleUTF8:function(){var g=C.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=b.utf8decode(this.fileName),this.fileCommentStr=b.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var y=h.transformTo(g,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(y)}var E=this.findExtraFieldUnicodeComment();if(E!==null)this.fileCommentStr=E;else{var k=h.transformTo(g,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(k)}}},findExtraFieldUnicodePath:function(){var g=this.extraFields[28789];if(g){var _=l(g.value);return _.readInt(1)!==1||v(this.fileName)!==_.readInt(4)?null:b.utf8decode(_.readData(g.length-5))}return null},findExtraFieldUnicodeComment:function(){var g=this.extraFields[25461];if(g){var _=l(g.value);return _.readInt(1)!==1||v(this.fileComment)!==_.readInt(4)?null:b.utf8decode(_.readData(g.length-5))}return null}},u.exports=w},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,u,o){function l(_,y,E){this.name=_,this.dir=E.dir,this.date=E.date,this.comment=E.comment,this.unixPermissions=E.unixPermissions,this.dosPermissions=E.dosPermissions,this._data=y,this._dataBinary=E.binary,this.options={compression:E.compression,compressionOptions:E.compressionOptions}}var h=r("./stream/StreamHelper"),d=r("./stream/DataWorker"),v=r("./utf8"),b=r("./compressedObject"),S=r("./stream/GenericWorker");l.prototype={internalStream:function(_){var y=null,E="string";try{if(!_)throw new Error("No output type specified.");var k=(E=_.toLowerCase())==="string"||E==="text";E!=="binarystring"&&E!=="text"||(E="string"),y=this._decompressWorker();var T=!this._dataBinary;T&&!k&&(y=y.pipe(new v.Utf8EncodeWorker)),!T&&k&&(y=y.pipe(new v.Utf8DecodeWorker))}catch(M){(y=new S("error")).error(M)}return new h(y,E,"")},async:function(_,y){return this.internalStream(_).accumulate(y)},nodeStream:function(_,y){return this.internalStream(_||"nodebuffer").toNodejsStream(y)},_compressWorker:function(_,y){if(this._data instanceof b&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var E=this._decompressWorker();return this._dataBinary||(E=E.pipe(new v.Utf8EncodeWorker)),b.createWorkerFrom(E,_,y)},_decompressWorker:function(){return this._data instanceof b?this._data.getContentWorker():this._data instanceof S?this._data:new d(this._data)}};for(var C=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],w=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},g=0;g<C.length;g++)l.prototype[C[g]]=w;u.exports=l},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,u,o){(function(l){var h,d,v=l.MutationObserver||l.WebKitMutationObserver;if(v){var b=0,S=new v(_),C=l.document.createTextNode("");S.observe(C,{characterData:!0}),h=function(){C.data=b=++b%2}}else if(l.setImmediate||l.MessageChannel===void 0)h="document"in l&&"onreadystatechange"in l.document.createElement("script")?function(){var y=l.document.createElement("script");y.onreadystatechange=function(){_(),y.onreadystatechange=null,y.parentNode.removeChild(y),y=null},l.document.documentElement.appendChild(y)}:function(){setTimeout(_,0)};else{var w=new l.MessageChannel;w.port1.onmessage=_,h=function(){w.port2.postMessage(0)}}var g=[];function _(){var y,E;d=!0;for(var k=g.length;k;){for(E=g,g=[],y=-1;++y<k;)E[y]();k=g.length}d=!1}u.exports=function(y){g.push(y)!==1||d||h()}}).call(this,typeof Te<"u"?Te:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,u,o){var l=r("immediate");function h(){}var d={},v=["REJECTED"],b=["FULFILLED"],S=["PENDING"];function C(k){if(typeof k!="function")throw new TypeError("resolver must be a function");this.state=S,this.queue=[],this.outcome=void 0,k!==h&&y(this,k)}function w(k,T,M){this.promise=k,typeof T=="function"&&(this.onFulfilled=T,this.callFulfilled=this.otherCallFulfilled),typeof M=="function"&&(this.onRejected=M,this.callRejected=this.otherCallRejected)}function g(k,T,M){l(function(){var q;try{q=T(M)}catch(K){return d.reject(k,K)}q===k?d.reject(k,new TypeError("Cannot resolve promise with itself")):d.resolve(k,q)})}function _(k){var T=k&&k.then;if(k&&(typeof k=="object"||typeof k=="function")&&typeof T=="function")return function(){T.apply(k,arguments)}}function y(k,T){var M=!1;function q(G){M||(M=!0,d.reject(k,G))}function K(G){M||(M=!0,d.resolve(k,G))}var nt=E(function(){T(K,q)});nt.status==="error"&&q(nt.value)}function E(k,T){var M={};try{M.value=k(T),M.status="success"}catch(q){M.status="error",M.value=q}return M}(u.exports=C).prototype.finally=function(k){if(typeof k!="function")return this;var T=this.constructor;return this.then(function(M){return T.resolve(k()).then(function(){return M})},function(M){return T.resolve(k()).then(function(){throw M})})},C.prototype.catch=function(k){return this.then(null,k)},C.prototype.then=function(k,T){if(typeof k!="function"&&this.state===b||typeof T!="function"&&this.state===v)return this;var M=new this.constructor(h);return this.state!==S?g(M,this.state===b?k:T,this.outcome):this.queue.push(new w(M,k,T)),M},w.prototype.callFulfilled=function(k){d.resolve(this.promise,k)},w.prototype.otherCallFulfilled=function(k){g(this.promise,this.onFulfilled,k)},w.prototype.callRejected=function(k){d.reject(this.promise,k)},w.prototype.otherCallRejected=function(k){g(this.promise,this.onRejected,k)},d.resolve=function(k,T){var M=E(_,T);if(M.status==="error")return d.reject(k,M.value);var q=M.value;if(q)y(k,q);else{k.state=b,k.outcome=T;for(var K=-1,nt=k.queue.length;++K<nt;)k.queue[K].callFulfilled(T)}return k},d.reject=function(k,T){k.state=v,k.outcome=T;for(var M=-1,q=k.queue.length;++M<q;)k.queue[M].callRejected(T);return k},C.resolve=function(k){return k instanceof this?k:d.resolve(new this(h),k)},C.reject=function(k){var T=new this(h);return d.reject(T,k)},C.all=function(k){var T=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=k.length,q=!1;if(!M)return this.resolve([]);for(var K=new Array(M),nt=0,G=-1,ut=new this(h);++G<M;)tt(k[G],G);return ut;function tt(pt,Pt){T.resolve(pt).then(function(R){K[Pt]=R,++nt!==M||q||(q=!0,d.resolve(ut,K))},function(R){q||(q=!0,d.reject(ut,R))})}},C.race=function(k){var T=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=k.length,q=!1;if(!M)return this.resolve([]);for(var K=-1,nt=new this(h);++K<M;)G=k[K],T.resolve(G).then(function(ut){q||(q=!0,d.resolve(nt,ut))},function(ut){q||(q=!0,d.reject(nt,ut))});var G;return nt}},{immediate:36}],38:[function(r,u,o){var l={};(0,r("./lib/utils/common").assign)(l,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),u.exports=l},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,u,o){var l=r("./zlib/deflate"),h=r("./utils/common"),d=r("./utils/strings"),v=r("./zlib/messages"),b=r("./zlib/zstream"),S=Object.prototype.toString,C=0,w=-1,g=0,_=8;function y(k){if(!(this instanceof y))return new y(k);this.options=h.assign({level:w,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},k||{});var T=this.options;T.raw&&0<T.windowBits?T.windowBits=-T.windowBits:T.gzip&&0<T.windowBits&&T.windowBits<16&&(T.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var M=l.deflateInit2(this.strm,T.level,T.method,T.windowBits,T.memLevel,T.strategy);if(M!==C)throw new Error(v[M]);if(T.header&&l.deflateSetHeader(this.strm,T.header),T.dictionary){var q;if(q=typeof T.dictionary=="string"?d.string2buf(T.dictionary):S.call(T.dictionary)==="[object ArrayBuffer]"?new Uint8Array(T.dictionary):T.dictionary,(M=l.deflateSetDictionary(this.strm,q))!==C)throw new Error(v[M]);this._dict_set=!0}}function E(k,T){var M=new y(T);if(M.push(k,!0),M.err)throw M.msg||v[M.err];return M.result}y.prototype.push=function(k,T){var M,q,K=this.strm,nt=this.options.chunkSize;if(this.ended)return!1;q=T===~~T?T:T===!0?4:0,typeof k=="string"?K.input=d.string2buf(k):S.call(k)==="[object ArrayBuffer]"?K.input=new Uint8Array(k):K.input=k,K.next_in=0,K.avail_in=K.input.length;do{if(K.avail_out===0&&(K.output=new h.Buf8(nt),K.next_out=0,K.avail_out=nt),(M=l.deflate(K,q))!==1&&M!==C)return this.onEnd(M),!(this.ended=!0);K.avail_out!==0&&(K.avail_in!==0||q!==4&&q!==2)||(this.options.to==="string"?this.onData(d.buf2binstring(h.shrinkBuf(K.output,K.next_out))):this.onData(h.shrinkBuf(K.output,K.next_out)))}while((0<K.avail_in||K.avail_out===0)&&M!==1);return q===4?(M=l.deflateEnd(this.strm),this.onEnd(M),this.ended=!0,M===C):q!==2||(this.onEnd(C),!(K.avail_out=0))},y.prototype.onData=function(k){this.chunks.push(k)},y.prototype.onEnd=function(k){k===C&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=k,this.msg=this.strm.msg},o.Deflate=y,o.deflate=E,o.deflateRaw=function(k,T){return(T=T||{}).raw=!0,E(k,T)},o.gzip=function(k,T){return(T=T||{}).gzip=!0,E(k,T)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,u,o){var l=r("./zlib/inflate"),h=r("./utils/common"),d=r("./utils/strings"),v=r("./zlib/constants"),b=r("./zlib/messages"),S=r("./zlib/zstream"),C=r("./zlib/gzheader"),w=Object.prototype.toString;function g(y){if(!(this instanceof g))return new g(y);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},y||{});var E=this.options;E.raw&&0<=E.windowBits&&E.windowBits<16&&(E.windowBits=-E.windowBits,E.windowBits===0&&(E.windowBits=-15)),!(0<=E.windowBits&&E.windowBits<16)||y&&y.windowBits||(E.windowBits+=32),15<E.windowBits&&E.windowBits<48&&(15&E.windowBits)==0&&(E.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new S,this.strm.avail_out=0;var k=l.inflateInit2(this.strm,E.windowBits);if(k!==v.Z_OK)throw new Error(b[k]);this.header=new C,l.inflateGetHeader(this.strm,this.header)}function _(y,E){var k=new g(E);if(k.push(y,!0),k.err)throw k.msg||b[k.err];return k.result}g.prototype.push=function(y,E){var k,T,M,q,K,nt,G=this.strm,ut=this.options.chunkSize,tt=this.options.dictionary,pt=!1;if(this.ended)return!1;T=E===~~E?E:E===!0?v.Z_FINISH:v.Z_NO_FLUSH,typeof y=="string"?G.input=d.binstring2buf(y):w.call(y)==="[object ArrayBuffer]"?G.input=new Uint8Array(y):G.input=y,G.next_in=0,G.avail_in=G.input.length;do{if(G.avail_out===0&&(G.output=new h.Buf8(ut),G.next_out=0,G.avail_out=ut),(k=l.inflate(G,v.Z_NO_FLUSH))===v.Z_NEED_DICT&&tt&&(nt=typeof tt=="string"?d.string2buf(tt):w.call(tt)==="[object ArrayBuffer]"?new Uint8Array(tt):tt,k=l.inflateSetDictionary(this.strm,nt)),k===v.Z_BUF_ERROR&&pt===!0&&(k=v.Z_OK,pt=!1),k!==v.Z_STREAM_END&&k!==v.Z_OK)return this.onEnd(k),!(this.ended=!0);G.next_out&&(G.avail_out!==0&&k!==v.Z_STREAM_END&&(G.avail_in!==0||T!==v.Z_FINISH&&T!==v.Z_SYNC_FLUSH)||(this.options.to==="string"?(M=d.utf8border(G.output,G.next_out),q=G.next_out-M,K=d.buf2string(G.output,M),G.next_out=q,G.avail_out=ut-q,q&&h.arraySet(G.output,G.output,M,q,0),this.onData(K)):this.onData(h.shrinkBuf(G.output,G.next_out)))),G.avail_in===0&&G.avail_out===0&&(pt=!0)}while((0<G.avail_in||G.avail_out===0)&&k!==v.Z_STREAM_END);return k===v.Z_STREAM_END&&(T=v.Z_FINISH),T===v.Z_FINISH?(k=l.inflateEnd(this.strm),this.onEnd(k),this.ended=!0,k===v.Z_OK):T!==v.Z_SYNC_FLUSH||(this.onEnd(v.Z_OK),!(G.avail_out=0))},g.prototype.onData=function(y){this.chunks.push(y)},g.prototype.onEnd=function(y){y===v.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},o.Inflate=g,o.inflate=_,o.inflateRaw=function(y,E){return(E=E||{}).raw=!0,_(y,E)},o.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,u,o){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(v){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var S=b.shift();if(S){if(typeof S!="object")throw new TypeError(S+"must be non-object");for(var C in S)S.hasOwnProperty(C)&&(v[C]=S[C])}}return v},o.shrinkBuf=function(v,b){return v.length===b?v:v.subarray?v.subarray(0,b):(v.length=b,v)};var h={arraySet:function(v,b,S,C,w){if(b.subarray&&v.subarray)v.set(b.subarray(S,S+C),w);else for(var g=0;g<C;g++)v[w+g]=b[S+g]},flattenChunks:function(v){var b,S,C,w,g,_;for(b=C=0,S=v.length;b<S;b++)C+=v[b].length;for(_=new Uint8Array(C),b=w=0,S=v.length;b<S;b++)g=v[b],_.set(g,w),w+=g.length;return _}},d={arraySet:function(v,b,S,C,w){for(var g=0;g<C;g++)v[w+g]=b[S+g]},flattenChunks:function(v){return[].concat.apply([],v)}};o.setTyped=function(v){v?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,h)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,d))},o.setTyped(l)},{}],42:[function(r,u,o){var l=r("./common"),h=!0,d=!0;try{String.fromCharCode.apply(null,[0])}catch{h=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{d=!1}for(var v=new l.Buf8(256),b=0;b<256;b++)v[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;function S(C,w){if(w<65537&&(C.subarray&&d||!C.subarray&&h))return String.fromCharCode.apply(null,l.shrinkBuf(C,w));for(var g="",_=0;_<w;_++)g+=String.fromCharCode(C[_]);return g}v[254]=v[254]=1,o.string2buf=function(C){var w,g,_,y,E,k=C.length,T=0;for(y=0;y<k;y++)(64512&(g=C.charCodeAt(y)))==55296&&y+1<k&&(64512&(_=C.charCodeAt(y+1)))==56320&&(g=65536+(g-55296<<10)+(_-56320),y++),T+=g<128?1:g<2048?2:g<65536?3:4;for(w=new l.Buf8(T),y=E=0;E<T;y++)(64512&(g=C.charCodeAt(y)))==55296&&y+1<k&&(64512&(_=C.charCodeAt(y+1)))==56320&&(g=65536+(g-55296<<10)+(_-56320),y++),g<128?w[E++]=g:(g<2048?w[E++]=192|g>>>6:(g<65536?w[E++]=224|g>>>12:(w[E++]=240|g>>>18,w[E++]=128|g>>>12&63),w[E++]=128|g>>>6&63),w[E++]=128|63&g);return w},o.buf2binstring=function(C){return S(C,C.length)},o.binstring2buf=function(C){for(var w=new l.Buf8(C.length),g=0,_=w.length;g<_;g++)w[g]=C.charCodeAt(g);return w},o.buf2string=function(C,w){var g,_,y,E,k=w||C.length,T=new Array(2*k);for(g=_=0;g<k;)if((y=C[g++])<128)T[_++]=y;else if(4<(E=v[y]))T[_++]=65533,g+=E-1;else{for(y&=E===2?31:E===3?15:7;1<E&&g<k;)y=y<<6|63&C[g++],E--;1<E?T[_++]=65533:y<65536?T[_++]=y:(y-=65536,T[_++]=55296|y>>10&1023,T[_++]=56320|1023&y)}return S(T,_)},o.utf8border=function(C,w){var g;for((w=w||C.length)>C.length&&(w=C.length),g=w-1;0<=g&&(192&C[g])==128;)g--;return g<0||g===0?w:g+v[C[g]]>w?g:w}},{"./common":41}],43:[function(r,u,o){u.exports=function(l,h,d,v){for(var b=65535&l|0,S=l>>>16&65535|0,C=0;d!==0;){for(d-=C=2e3<d?2e3:d;S=S+(b=b+h[v++]|0)|0,--C;);b%=65521,S%=65521}return b|S<<16|0}},{}],44:[function(r,u,o){u.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,u,o){var l=(function(){for(var h,d=[],v=0;v<256;v++){h=v;for(var b=0;b<8;b++)h=1&h?3988292384^h>>>1:h>>>1;d[v]=h}return d})();u.exports=function(h,d,v,b){var S=l,C=b+v;h^=-1;for(var w=b;w<C;w++)h=h>>>8^S[255&(h^d[w])];return-1^h}},{}],46:[function(r,u,o){var l,h=r("../utils/common"),d=r("./trees"),v=r("./adler32"),b=r("./crc32"),S=r("./messages"),C=0,w=4,g=0,_=-2,y=-1,E=4,k=2,T=8,M=9,q=286,K=30,nt=19,G=2*q+1,ut=15,tt=3,pt=258,Pt=pt+tt+1,R=42,J=113,m=1,it=2,Tt=3,lt=4;function $t(c,et){return c.msg=S[et],et}function st(c){return(c<<1)-(4<c?9:0)}function Ot(c){for(var et=c.length;0<=--et;)c[et]=0}function X(c){var et=c.state,Y=et.pending;Y>c.avail_out&&(Y=c.avail_out),Y!==0&&(h.arraySet(c.output,et.pending_buf,et.pending_out,Y,c.next_out),c.next_out+=Y,et.pending_out+=Y,c.total_out+=Y,c.avail_out-=Y,et.pending-=Y,et.pending===0&&(et.pending_out=0))}function Z(c,et){d._tr_flush_block(c,0<=c.block_start?c.block_start:-1,c.strstart-c.block_start,et),c.block_start=c.strstart,X(c.strm)}function Et(c,et){c.pending_buf[c.pending++]=et}function xt(c,et){c.pending_buf[c.pending++]=et>>>8&255,c.pending_buf[c.pending++]=255&et}function vt(c,et){var Y,O,A=c.max_chain_length,N=c.strstart,ot=c.prev_length,at=c.nice_match,V=c.strstart>c.w_size-Pt?c.strstart-(c.w_size-Pt):0,ct=c.window,kt=c.w_mask,dt=c.prev,At=c.strstart+pt,Nt=ct[N+ot-1],Mt=ct[N+ot];c.prev_length>=c.good_match&&(A>>=2),at>c.lookahead&&(at=c.lookahead);do if(ct[(Y=et)+ot]===Mt&&ct[Y+ot-1]===Nt&&ct[Y]===ct[N]&&ct[++Y]===ct[N+1]){N+=2,Y++;do;while(ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&N<At);if(O=pt-(At-N),N=At-pt,ot<O){if(c.match_start=et,at<=(ot=O))break;Nt=ct[N+ot-1],Mt=ct[N+ot]}}while((et=dt[et&kt])>V&&--A!=0);return ot<=c.lookahead?ot:c.lookahead}function qt(c){var et,Y,O,A,N,ot,at,V,ct,kt,dt=c.w_size;do{if(A=c.window_size-c.lookahead-c.strstart,c.strstart>=dt+(dt-Pt)){for(h.arraySet(c.window,c.window,dt,dt,0),c.match_start-=dt,c.strstart-=dt,c.block_start-=dt,et=Y=c.hash_size;O=c.head[--et],c.head[et]=dt<=O?O-dt:0,--Y;);for(et=Y=dt;O=c.prev[--et],c.prev[et]=dt<=O?O-dt:0,--Y;);A+=dt}if(c.strm.avail_in===0)break;if(ot=c.strm,at=c.window,V=c.strstart+c.lookahead,ct=A,kt=void 0,kt=ot.avail_in,ct<kt&&(kt=ct),Y=kt===0?0:(ot.avail_in-=kt,h.arraySet(at,ot.input,ot.next_in,kt,V),ot.state.wrap===1?ot.adler=v(ot.adler,at,kt,V):ot.state.wrap===2&&(ot.adler=b(ot.adler,at,kt,V)),ot.next_in+=kt,ot.total_in+=kt,kt),c.lookahead+=Y,c.lookahead+c.insert>=tt)for(N=c.strstart-c.insert,c.ins_h=c.window[N],c.ins_h=(c.ins_h<<c.hash_shift^c.window[N+1])&c.hash_mask;c.insert&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[N+tt-1])&c.hash_mask,c.prev[N&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=N,N++,c.insert--,!(c.lookahead+c.insert<tt)););}while(c.lookahead<Pt&&c.strm.avail_in!==0)}function Jt(c,et){for(var Y,O;;){if(c.lookahead<Pt){if(qt(c),c.lookahead<Pt&&et===C)return m;if(c.lookahead===0)break}if(Y=0,c.lookahead>=tt&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+tt-1])&c.hash_mask,Y=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),Y!==0&&c.strstart-Y<=c.w_size-Pt&&(c.match_length=vt(c,Y)),c.match_length>=tt)if(O=d._tr_tally(c,c.strstart-c.match_start,c.match_length-tt),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=tt){for(c.match_length--;c.strstart++,c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+tt-1])&c.hash_mask,Y=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart,--c.match_length!=0;);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+1])&c.hash_mask;else O=d._tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(O&&(Z(c,!1),c.strm.avail_out===0))return m}return c.insert=c.strstart<tt-1?c.strstart:tt-1,et===w?(Z(c,!0),c.strm.avail_out===0?Tt:lt):c.last_lit&&(Z(c,!1),c.strm.avail_out===0)?m:it}function jt(c,et){for(var Y,O,A;;){if(c.lookahead<Pt){if(qt(c),c.lookahead<Pt&&et===C)return m;if(c.lookahead===0)break}if(Y=0,c.lookahead>=tt&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+tt-1])&c.hash_mask,Y=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=tt-1,Y!==0&&c.prev_length<c.max_lazy_match&&c.strstart-Y<=c.w_size-Pt&&(c.match_length=vt(c,Y),c.match_length<=5&&(c.strategy===1||c.match_length===tt&&4096<c.strstart-c.match_start)&&(c.match_length=tt-1)),c.prev_length>=tt&&c.match_length<=c.prev_length){for(A=c.strstart+c.lookahead-tt,O=d._tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-tt),c.lookahead-=c.prev_length-1,c.prev_length-=2;++c.strstart<=A&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+tt-1])&c.hash_mask,Y=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),--c.prev_length!=0;);if(c.match_available=0,c.match_length=tt-1,c.strstart++,O&&(Z(c,!1),c.strm.avail_out===0))return m}else if(c.match_available){if((O=d._tr_tally(c,0,c.window[c.strstart-1]))&&Z(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return m}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(O=d._tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<tt-1?c.strstart:tt-1,et===w?(Z(c,!0),c.strm.avail_out===0?Tt:lt):c.last_lit&&(Z(c,!1),c.strm.avail_out===0)?m:it}function mt(c,et,Y,O,A){this.good_length=c,this.max_lazy=et,this.nice_length=Y,this.max_chain=O,this.func=A}function Xt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=T,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new h.Buf16(2*G),this.dyn_dtree=new h.Buf16(2*(2*K+1)),this.bl_tree=new h.Buf16(2*(2*nt+1)),Ot(this.dyn_ltree),Ot(this.dyn_dtree),Ot(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new h.Buf16(ut+1),this.heap=new h.Buf16(2*q+1),Ot(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new h.Buf16(2*q+1),Ot(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Wt(c){var et;return c&&c.state?(c.total_in=c.total_out=0,c.data_type=k,(et=c.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?R:J,c.adler=et.wrap===2?0:1,et.last_flush=C,d._tr_init(et),g):$t(c,_)}function It(c){var et=Wt(c);return et===g&&(function(Y){Y.window_size=2*Y.w_size,Ot(Y.head),Y.max_lazy_match=l[Y.level].max_lazy,Y.good_match=l[Y.level].good_length,Y.nice_match=l[Y.level].nice_length,Y.max_chain_length=l[Y.level].max_chain,Y.strstart=0,Y.block_start=0,Y.lookahead=0,Y.insert=0,Y.match_length=Y.prev_length=tt-1,Y.match_available=0,Y.ins_h=0})(c.state),et}function ie(c,et,Y,O,A,N){if(!c)return _;var ot=1;if(et===y&&(et=6),O<0?(ot=0,O=-O):15<O&&(ot=2,O-=16),A<1||M<A||Y!==T||O<8||15<O||et<0||9<et||N<0||E<N)return $t(c,_);O===8&&(O=9);var at=new Xt;return(c.state=at).strm=c,at.wrap=ot,at.gzhead=null,at.w_bits=O,at.w_size=1<<at.w_bits,at.w_mask=at.w_size-1,at.hash_bits=A+7,at.hash_size=1<<at.hash_bits,at.hash_mask=at.hash_size-1,at.hash_shift=~~((at.hash_bits+tt-1)/tt),at.window=new h.Buf8(2*at.w_size),at.head=new h.Buf16(at.hash_size),at.prev=new h.Buf16(at.w_size),at.lit_bufsize=1<<A+6,at.pending_buf_size=4*at.lit_bufsize,at.pending_buf=new h.Buf8(at.pending_buf_size),at.d_buf=1*at.lit_bufsize,at.l_buf=3*at.lit_bufsize,at.level=et,at.strategy=N,at.method=Y,It(c)}l=[new mt(0,0,0,0,function(c,et){var Y=65535;for(Y>c.pending_buf_size-5&&(Y=c.pending_buf_size-5);;){if(c.lookahead<=1){if(qt(c),c.lookahead===0&&et===C)return m;if(c.lookahead===0)break}c.strstart+=c.lookahead,c.lookahead=0;var O=c.block_start+Y;if((c.strstart===0||c.strstart>=O)&&(c.lookahead=c.strstart-O,c.strstart=O,Z(c,!1),c.strm.avail_out===0)||c.strstart-c.block_start>=c.w_size-Pt&&(Z(c,!1),c.strm.avail_out===0))return m}return c.insert=0,et===w?(Z(c,!0),c.strm.avail_out===0?Tt:lt):(c.strstart>c.block_start&&(Z(c,!1),c.strm.avail_out),m)}),new mt(4,4,8,4,Jt),new mt(4,5,16,8,Jt),new mt(4,6,32,32,Jt),new mt(4,4,16,16,jt),new mt(8,16,32,32,jt),new mt(8,16,128,128,jt),new mt(8,32,128,256,jt),new mt(32,128,258,1024,jt),new mt(32,258,258,4096,jt)],o.deflateInit=function(c,et){return ie(c,et,T,15,8,0)},o.deflateInit2=ie,o.deflateReset=It,o.deflateResetKeep=Wt,o.deflateSetHeader=function(c,et){return c&&c.state?c.state.wrap!==2?_:(c.state.gzhead=et,g):_},o.deflate=function(c,et){var Y,O,A,N;if(!c||!c.state||5<et||et<0)return c?$t(c,_):_;if(O=c.state,!c.output||!c.input&&c.avail_in!==0||O.status===666&&et!==w)return $t(c,c.avail_out===0?-5:_);if(O.strm=c,Y=O.last_flush,O.last_flush=et,O.status===R)if(O.wrap===2)c.adler=0,Et(O,31),Et(O,139),Et(O,8),O.gzhead?(Et(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),Et(O,255&O.gzhead.time),Et(O,O.gzhead.time>>8&255),Et(O,O.gzhead.time>>16&255),Et(O,O.gzhead.time>>24&255),Et(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Et(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(Et(O,255&O.gzhead.extra.length),Et(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(c.adler=b(c.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(Et(O,0),Et(O,0),Et(O,0),Et(O,0),Et(O,0),Et(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Et(O,3),O.status=J);else{var ot=T+(O.w_bits-8<<4)<<8;ot|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(ot|=32),ot+=31-ot%31,O.status=J,xt(O,ot),O.strstart!==0&&(xt(O,c.adler>>>16),xt(O,65535&c.adler)),c.adler=1}if(O.status===69)if(O.gzhead.extra){for(A=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>A&&(c.adler=b(c.adler,O.pending_buf,O.pending-A,A)),X(c),A=O.pending,O.pending!==O.pending_buf_size));)Et(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>A&&(c.adler=b(c.adler,O.pending_buf,O.pending-A,A)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){A=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>A&&(c.adler=b(c.adler,O.pending_buf,O.pending-A,A)),X(c),A=O.pending,O.pending===O.pending_buf_size)){N=1;break}N=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,Et(O,N)}while(N!==0);O.gzhead.hcrc&&O.pending>A&&(c.adler=b(c.adler,O.pending_buf,O.pending-A,A)),N===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){A=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>A&&(c.adler=b(c.adler,O.pending_buf,O.pending-A,A)),X(c),A=O.pending,O.pending===O.pending_buf_size)){N=1;break}N=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,Et(O,N)}while(N!==0);O.gzhead.hcrc&&O.pending>A&&(c.adler=b(c.adler,O.pending_buf,O.pending-A,A)),N===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&X(c),O.pending+2<=O.pending_buf_size&&(Et(O,255&c.adler),Et(O,c.adler>>8&255),c.adler=0,O.status=J)):O.status=J),O.pending!==0){if(X(c),c.avail_out===0)return O.last_flush=-1,g}else if(c.avail_in===0&&st(et)<=st(Y)&&et!==w)return $t(c,-5);if(O.status===666&&c.avail_in!==0)return $t(c,-5);if(c.avail_in!==0||O.lookahead!==0||et!==C&&O.status!==666){var at=O.strategy===2?(function(V,ct){for(var kt;;){if(V.lookahead===0&&(qt(V),V.lookahead===0)){if(ct===C)return m;break}if(V.match_length=0,kt=d._tr_tally(V,0,V.window[V.strstart]),V.lookahead--,V.strstart++,kt&&(Z(V,!1),V.strm.avail_out===0))return m}return V.insert=0,ct===w?(Z(V,!0),V.strm.avail_out===0?Tt:lt):V.last_lit&&(Z(V,!1),V.strm.avail_out===0)?m:it})(O,et):O.strategy===3?(function(V,ct){for(var kt,dt,At,Nt,Mt=V.window;;){if(V.lookahead<=pt){if(qt(V),V.lookahead<=pt&&ct===C)return m;if(V.lookahead===0)break}if(V.match_length=0,V.lookahead>=tt&&0<V.strstart&&(dt=Mt[At=V.strstart-1])===Mt[++At]&&dt===Mt[++At]&&dt===Mt[++At]){Nt=V.strstart+pt;do;while(dt===Mt[++At]&&dt===Mt[++At]&&dt===Mt[++At]&&dt===Mt[++At]&&dt===Mt[++At]&&dt===Mt[++At]&&dt===Mt[++At]&&dt===Mt[++At]&&At<Nt);V.match_length=pt-(Nt-At),V.match_length>V.lookahead&&(V.match_length=V.lookahead)}if(V.match_length>=tt?(kt=d._tr_tally(V,1,V.match_length-tt),V.lookahead-=V.match_length,V.strstart+=V.match_length,V.match_length=0):(kt=d._tr_tally(V,0,V.window[V.strstart]),V.lookahead--,V.strstart++),kt&&(Z(V,!1),V.strm.avail_out===0))return m}return V.insert=0,ct===w?(Z(V,!0),V.strm.avail_out===0?Tt:lt):V.last_lit&&(Z(V,!1),V.strm.avail_out===0)?m:it})(O,et):l[O.level].func(O,et);if(at!==Tt&&at!==lt||(O.status=666),at===m||at===Tt)return c.avail_out===0&&(O.last_flush=-1),g;if(at===it&&(et===1?d._tr_align(O):et!==5&&(d._tr_stored_block(O,0,0,!1),et===3&&(Ot(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),X(c),c.avail_out===0))return O.last_flush=-1,g}return et!==w?g:O.wrap<=0?1:(O.wrap===2?(Et(O,255&c.adler),Et(O,c.adler>>8&255),Et(O,c.adler>>16&255),Et(O,c.adler>>24&255),Et(O,255&c.total_in),Et(O,c.total_in>>8&255),Et(O,c.total_in>>16&255),Et(O,c.total_in>>24&255)):(xt(O,c.adler>>>16),xt(O,65535&c.adler)),X(c),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?g:1)},o.deflateEnd=function(c){var et;return c&&c.state?(et=c.state.status)!==R&&et!==69&&et!==73&&et!==91&&et!==103&&et!==J&&et!==666?$t(c,_):(c.state=null,et===J?$t(c,-3):g):_},o.deflateSetDictionary=function(c,et){var Y,O,A,N,ot,at,V,ct,kt=et.length;if(!c||!c.state||(N=(Y=c.state).wrap)===2||N===1&&Y.status!==R||Y.lookahead)return _;for(N===1&&(c.adler=v(c.adler,et,kt,0)),Y.wrap=0,kt>=Y.w_size&&(N===0&&(Ot(Y.head),Y.strstart=0,Y.block_start=0,Y.insert=0),ct=new h.Buf8(Y.w_size),h.arraySet(ct,et,kt-Y.w_size,Y.w_size,0),et=ct,kt=Y.w_size),ot=c.avail_in,at=c.next_in,V=c.input,c.avail_in=kt,c.next_in=0,c.input=et,qt(Y);Y.lookahead>=tt;){for(O=Y.strstart,A=Y.lookahead-(tt-1);Y.ins_h=(Y.ins_h<<Y.hash_shift^Y.window[O+tt-1])&Y.hash_mask,Y.prev[O&Y.w_mask]=Y.head[Y.ins_h],Y.head[Y.ins_h]=O,O++,--A;);Y.strstart=O,Y.lookahead=tt-1,qt(Y)}return Y.strstart+=Y.lookahead,Y.block_start=Y.strstart,Y.insert=Y.lookahead,Y.lookahead=0,Y.match_length=Y.prev_length=tt-1,Y.match_available=0,c.next_in=at,c.input=V,c.avail_in=ot,Y.wrap=N,g},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,u,o){u.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,u,o){u.exports=function(l,h){var d,v,b,S,C,w,g,_,y,E,k,T,M,q,K,nt,G,ut,tt,pt,Pt,R,J,m,it;d=l.state,v=l.next_in,m=l.input,b=v+(l.avail_in-5),S=l.next_out,it=l.output,C=S-(h-l.avail_out),w=S+(l.avail_out-257),g=d.dmax,_=d.wsize,y=d.whave,E=d.wnext,k=d.window,T=d.hold,M=d.bits,q=d.lencode,K=d.distcode,nt=(1<<d.lenbits)-1,G=(1<<d.distbits)-1;t:do{M<15&&(T+=m[v++]<<M,M+=8,T+=m[v++]<<M,M+=8),ut=q[T&nt];e:for(;;){if(T>>>=tt=ut>>>24,M-=tt,(tt=ut>>>16&255)===0)it[S++]=65535&ut;else{if(!(16&tt)){if((64&tt)==0){ut=q[(65535&ut)+(T&(1<<tt)-1)];continue e}if(32&tt){d.mode=12;break t}l.msg="invalid literal/length code",d.mode=30;break t}pt=65535&ut,(tt&=15)&&(M<tt&&(T+=m[v++]<<M,M+=8),pt+=T&(1<<tt)-1,T>>>=tt,M-=tt),M<15&&(T+=m[v++]<<M,M+=8,T+=m[v++]<<M,M+=8),ut=K[T&G];n:for(;;){if(T>>>=tt=ut>>>24,M-=tt,!(16&(tt=ut>>>16&255))){if((64&tt)==0){ut=K[(65535&ut)+(T&(1<<tt)-1)];continue n}l.msg="invalid distance code",d.mode=30;break t}if(Pt=65535&ut,M<(tt&=15)&&(T+=m[v++]<<M,(M+=8)<tt&&(T+=m[v++]<<M,M+=8)),g<(Pt+=T&(1<<tt)-1)){l.msg="invalid distance too far back",d.mode=30;break t}if(T>>>=tt,M-=tt,(tt=S-C)<Pt){if(y<(tt=Pt-tt)&&d.sane){l.msg="invalid distance too far back",d.mode=30;break t}if(J=k,(R=0)===E){if(R+=_-tt,tt<pt){for(pt-=tt;it[S++]=k[R++],--tt;);R=S-Pt,J=it}}else if(E<tt){if(R+=_+E-tt,(tt-=E)<pt){for(pt-=tt;it[S++]=k[R++],--tt;);if(R=0,E<pt){for(pt-=tt=E;it[S++]=k[R++],--tt;);R=S-Pt,J=it}}}else if(R+=E-tt,tt<pt){for(pt-=tt;it[S++]=k[R++],--tt;);R=S-Pt,J=it}for(;2<pt;)it[S++]=J[R++],it[S++]=J[R++],it[S++]=J[R++],pt-=3;pt&&(it[S++]=J[R++],1<pt&&(it[S++]=J[R++]))}else{for(R=S-Pt;it[S++]=it[R++],it[S++]=it[R++],it[S++]=it[R++],2<(pt-=3););pt&&(it[S++]=it[R++],1<pt&&(it[S++]=it[R++]))}break}}break}}while(v<b&&S<w);v-=pt=M>>3,T&=(1<<(M-=pt<<3))-1,l.next_in=v,l.next_out=S,l.avail_in=v<b?b-v+5:5-(v-b),l.avail_out=S<w?w-S+257:257-(S-w),d.hold=T,d.bits=M}},{}],49:[function(r,u,o){var l=r("../utils/common"),h=r("./adler32"),d=r("./crc32"),v=r("./inffast"),b=r("./inftrees"),S=1,C=2,w=0,g=-2,_=1,y=852,E=592;function k(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function T(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new l.Buf16(320),this.work=new l.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function M(R){var J;return R&&R.state?(J=R.state,R.total_in=R.total_out=J.total=0,R.msg="",J.wrap&&(R.adler=1&J.wrap),J.mode=_,J.last=0,J.havedict=0,J.dmax=32768,J.head=null,J.hold=0,J.bits=0,J.lencode=J.lendyn=new l.Buf32(y),J.distcode=J.distdyn=new l.Buf32(E),J.sane=1,J.back=-1,w):g}function q(R){var J;return R&&R.state?((J=R.state).wsize=0,J.whave=0,J.wnext=0,M(R)):g}function K(R,J){var m,it;return R&&R.state?(it=R.state,J<0?(m=0,J=-J):(m=1+(J>>4),J<48&&(J&=15)),J&&(J<8||15<J)?g:(it.window!==null&&it.wbits!==J&&(it.window=null),it.wrap=m,it.wbits=J,q(R))):g}function nt(R,J){var m,it;return R?(it=new T,(R.state=it).window=null,(m=K(R,J))!==w&&(R.state=null),m):g}var G,ut,tt=!0;function pt(R){if(tt){var J;for(G=new l.Buf32(512),ut=new l.Buf32(32),J=0;J<144;)R.lens[J++]=8;for(;J<256;)R.lens[J++]=9;for(;J<280;)R.lens[J++]=7;for(;J<288;)R.lens[J++]=8;for(b(S,R.lens,0,288,G,0,R.work,{bits:9}),J=0;J<32;)R.lens[J++]=5;b(C,R.lens,0,32,ut,0,R.work,{bits:5}),tt=!1}R.lencode=G,R.lenbits=9,R.distcode=ut,R.distbits=5}function Pt(R,J,m,it){var Tt,lt=R.state;return lt.window===null&&(lt.wsize=1<<lt.wbits,lt.wnext=0,lt.whave=0,lt.window=new l.Buf8(lt.wsize)),it>=lt.wsize?(l.arraySet(lt.window,J,m-lt.wsize,lt.wsize,0),lt.wnext=0,lt.whave=lt.wsize):(it<(Tt=lt.wsize-lt.wnext)&&(Tt=it),l.arraySet(lt.window,J,m-it,Tt,lt.wnext),(it-=Tt)?(l.arraySet(lt.window,J,m-it,it,0),lt.wnext=it,lt.whave=lt.wsize):(lt.wnext+=Tt,lt.wnext===lt.wsize&&(lt.wnext=0),lt.whave<lt.wsize&&(lt.whave+=Tt))),0}o.inflateReset=q,o.inflateReset2=K,o.inflateResetKeep=M,o.inflateInit=function(R){return nt(R,15)},o.inflateInit2=nt,o.inflate=function(R,J){var m,it,Tt,lt,$t,st,Ot,X,Z,Et,xt,vt,qt,Jt,jt,mt,Xt,Wt,It,ie,c,et,Y,O,A=0,N=new l.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return g;(m=R.state).mode===12&&(m.mode=13),$t=R.next_out,Tt=R.output,Ot=R.avail_out,lt=R.next_in,it=R.input,st=R.avail_in,X=m.hold,Z=m.bits,Et=st,xt=Ot,et=w;t:for(;;)switch(m.mode){case _:if(m.wrap===0){m.mode=13;break}for(;Z<16;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}if(2&m.wrap&&X===35615){N[m.check=0]=255&X,N[1]=X>>>8&255,m.check=d(m.check,N,2,0),Z=X=0,m.mode=2;break}if(m.flags=0,m.head&&(m.head.done=!1),!(1&m.wrap)||(((255&X)<<8)+(X>>8))%31){R.msg="incorrect header check",m.mode=30;break}if((15&X)!=8){R.msg="unknown compression method",m.mode=30;break}if(Z-=4,c=8+(15&(X>>>=4)),m.wbits===0)m.wbits=c;else if(c>m.wbits){R.msg="invalid window size",m.mode=30;break}m.dmax=1<<c,R.adler=m.check=1,m.mode=512&X?10:12,Z=X=0;break;case 2:for(;Z<16;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}if(m.flags=X,(255&m.flags)!=8){R.msg="unknown compression method",m.mode=30;break}if(57344&m.flags){R.msg="unknown header flags set",m.mode=30;break}m.head&&(m.head.text=X>>8&1),512&m.flags&&(N[0]=255&X,N[1]=X>>>8&255,m.check=d(m.check,N,2,0)),Z=X=0,m.mode=3;case 3:for(;Z<32;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}m.head&&(m.head.time=X),512&m.flags&&(N[0]=255&X,N[1]=X>>>8&255,N[2]=X>>>16&255,N[3]=X>>>24&255,m.check=d(m.check,N,4,0)),Z=X=0,m.mode=4;case 4:for(;Z<16;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}m.head&&(m.head.xflags=255&X,m.head.os=X>>8),512&m.flags&&(N[0]=255&X,N[1]=X>>>8&255,m.check=d(m.check,N,2,0)),Z=X=0,m.mode=5;case 5:if(1024&m.flags){for(;Z<16;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}m.length=X,m.head&&(m.head.extra_len=X),512&m.flags&&(N[0]=255&X,N[1]=X>>>8&255,m.check=d(m.check,N,2,0)),Z=X=0}else m.head&&(m.head.extra=null);m.mode=6;case 6:if(1024&m.flags&&(st<(vt=m.length)&&(vt=st),vt&&(m.head&&(c=m.head.extra_len-m.length,m.head.extra||(m.head.extra=new Array(m.head.extra_len)),l.arraySet(m.head.extra,it,lt,vt,c)),512&m.flags&&(m.check=d(m.check,it,vt,lt)),st-=vt,lt+=vt,m.length-=vt),m.length))break t;m.length=0,m.mode=7;case 7:if(2048&m.flags){if(st===0)break t;for(vt=0;c=it[lt+vt++],m.head&&c&&m.length<65536&&(m.head.name+=String.fromCharCode(c)),c&&vt<st;);if(512&m.flags&&(m.check=d(m.check,it,vt,lt)),st-=vt,lt+=vt,c)break t}else m.head&&(m.head.name=null);m.length=0,m.mode=8;case 8:if(4096&m.flags){if(st===0)break t;for(vt=0;c=it[lt+vt++],m.head&&c&&m.length<65536&&(m.head.comment+=String.fromCharCode(c)),c&&vt<st;);if(512&m.flags&&(m.check=d(m.check,it,vt,lt)),st-=vt,lt+=vt,c)break t}else m.head&&(m.head.comment=null);m.mode=9;case 9:if(512&m.flags){for(;Z<16;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}if(X!==(65535&m.check)){R.msg="header crc mismatch",m.mode=30;break}Z=X=0}m.head&&(m.head.hcrc=m.flags>>9&1,m.head.done=!0),R.adler=m.check=0,m.mode=12;break;case 10:for(;Z<32;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}R.adler=m.check=k(X),Z=X=0,m.mode=11;case 11:if(m.havedict===0)return R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,m.hold=X,m.bits=Z,2;R.adler=m.check=1,m.mode=12;case 12:if(J===5||J===6)break t;case 13:if(m.last){X>>>=7&Z,Z-=7&Z,m.mode=27;break}for(;Z<3;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}switch(m.last=1&X,Z-=1,3&(X>>>=1)){case 0:m.mode=14;break;case 1:if(pt(m),m.mode=20,J!==6)break;X>>>=2,Z-=2;break t;case 2:m.mode=17;break;case 3:R.msg="invalid block type",m.mode=30}X>>>=2,Z-=2;break;case 14:for(X>>>=7&Z,Z-=7&Z;Z<32;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}if((65535&X)!=(X>>>16^65535)){R.msg="invalid stored block lengths",m.mode=30;break}if(m.length=65535&X,Z=X=0,m.mode=15,J===6)break t;case 15:m.mode=16;case 16:if(vt=m.length){if(st<vt&&(vt=st),Ot<vt&&(vt=Ot),vt===0)break t;l.arraySet(Tt,it,lt,vt,$t),st-=vt,lt+=vt,Ot-=vt,$t+=vt,m.length-=vt;break}m.mode=12;break;case 17:for(;Z<14;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}if(m.nlen=257+(31&X),X>>>=5,Z-=5,m.ndist=1+(31&X),X>>>=5,Z-=5,m.ncode=4+(15&X),X>>>=4,Z-=4,286<m.nlen||30<m.ndist){R.msg="too many length or distance symbols",m.mode=30;break}m.have=0,m.mode=18;case 18:for(;m.have<m.ncode;){for(;Z<3;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}m.lens[ot[m.have++]]=7&X,X>>>=3,Z-=3}for(;m.have<19;)m.lens[ot[m.have++]]=0;if(m.lencode=m.lendyn,m.lenbits=7,Y={bits:m.lenbits},et=b(0,m.lens,0,19,m.lencode,0,m.work,Y),m.lenbits=Y.bits,et){R.msg="invalid code lengths set",m.mode=30;break}m.have=0,m.mode=19;case 19:for(;m.have<m.nlen+m.ndist;){for(;mt=(A=m.lencode[X&(1<<m.lenbits)-1])>>>16&255,Xt=65535&A,!((jt=A>>>24)<=Z);){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}if(Xt<16)X>>>=jt,Z-=jt,m.lens[m.have++]=Xt;else{if(Xt===16){for(O=jt+2;Z<O;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}if(X>>>=jt,Z-=jt,m.have===0){R.msg="invalid bit length repeat",m.mode=30;break}c=m.lens[m.have-1],vt=3+(3&X),X>>>=2,Z-=2}else if(Xt===17){for(O=jt+3;Z<O;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}Z-=jt,c=0,vt=3+(7&(X>>>=jt)),X>>>=3,Z-=3}else{for(O=jt+7;Z<O;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}Z-=jt,c=0,vt=11+(127&(X>>>=jt)),X>>>=7,Z-=7}if(m.have+vt>m.nlen+m.ndist){R.msg="invalid bit length repeat",m.mode=30;break}for(;vt--;)m.lens[m.have++]=c}}if(m.mode===30)break;if(m.lens[256]===0){R.msg="invalid code -- missing end-of-block",m.mode=30;break}if(m.lenbits=9,Y={bits:m.lenbits},et=b(S,m.lens,0,m.nlen,m.lencode,0,m.work,Y),m.lenbits=Y.bits,et){R.msg="invalid literal/lengths set",m.mode=30;break}if(m.distbits=6,m.distcode=m.distdyn,Y={bits:m.distbits},et=b(C,m.lens,m.nlen,m.ndist,m.distcode,0,m.work,Y),m.distbits=Y.bits,et){R.msg="invalid distances set",m.mode=30;break}if(m.mode=20,J===6)break t;case 20:m.mode=21;case 21:if(6<=st&&258<=Ot){R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,m.hold=X,m.bits=Z,v(R,xt),$t=R.next_out,Tt=R.output,Ot=R.avail_out,lt=R.next_in,it=R.input,st=R.avail_in,X=m.hold,Z=m.bits,m.mode===12&&(m.back=-1);break}for(m.back=0;mt=(A=m.lencode[X&(1<<m.lenbits)-1])>>>16&255,Xt=65535&A,!((jt=A>>>24)<=Z);){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}if(mt&&(240&mt)==0){for(Wt=jt,It=mt,ie=Xt;mt=(A=m.lencode[ie+((X&(1<<Wt+It)-1)>>Wt)])>>>16&255,Xt=65535&A,!(Wt+(jt=A>>>24)<=Z);){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}X>>>=Wt,Z-=Wt,m.back+=Wt}if(X>>>=jt,Z-=jt,m.back+=jt,m.length=Xt,mt===0){m.mode=26;break}if(32&mt){m.back=-1,m.mode=12;break}if(64&mt){R.msg="invalid literal/length code",m.mode=30;break}m.extra=15&mt,m.mode=22;case 22:if(m.extra){for(O=m.extra;Z<O;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}m.length+=X&(1<<m.extra)-1,X>>>=m.extra,Z-=m.extra,m.back+=m.extra}m.was=m.length,m.mode=23;case 23:for(;mt=(A=m.distcode[X&(1<<m.distbits)-1])>>>16&255,Xt=65535&A,!((jt=A>>>24)<=Z);){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}if((240&mt)==0){for(Wt=jt,It=mt,ie=Xt;mt=(A=m.distcode[ie+((X&(1<<Wt+It)-1)>>Wt)])>>>16&255,Xt=65535&A,!(Wt+(jt=A>>>24)<=Z);){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}X>>>=Wt,Z-=Wt,m.back+=Wt}if(X>>>=jt,Z-=jt,m.back+=jt,64&mt){R.msg="invalid distance code",m.mode=30;break}m.offset=Xt,m.extra=15&mt,m.mode=24;case 24:if(m.extra){for(O=m.extra;Z<O;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}m.offset+=X&(1<<m.extra)-1,X>>>=m.extra,Z-=m.extra,m.back+=m.extra}if(m.offset>m.dmax){R.msg="invalid distance too far back",m.mode=30;break}m.mode=25;case 25:if(Ot===0)break t;if(vt=xt-Ot,m.offset>vt){if((vt=m.offset-vt)>m.whave&&m.sane){R.msg="invalid distance too far back",m.mode=30;break}qt=vt>m.wnext?(vt-=m.wnext,m.wsize-vt):m.wnext-vt,vt>m.length&&(vt=m.length),Jt=m.window}else Jt=Tt,qt=$t-m.offset,vt=m.length;for(Ot<vt&&(vt=Ot),Ot-=vt,m.length-=vt;Tt[$t++]=Jt[qt++],--vt;);m.length===0&&(m.mode=21);break;case 26:if(Ot===0)break t;Tt[$t++]=m.length,Ot--,m.mode=21;break;case 27:if(m.wrap){for(;Z<32;){if(st===0)break t;st--,X|=it[lt++]<<Z,Z+=8}if(xt-=Ot,R.total_out+=xt,m.total+=xt,xt&&(R.adler=m.check=m.flags?d(m.check,Tt,xt,$t-xt):h(m.check,Tt,xt,$t-xt)),xt=Ot,(m.flags?X:k(X))!==m.check){R.msg="incorrect data check",m.mode=30;break}Z=X=0}m.mode=28;case 28:if(m.wrap&&m.flags){for(;Z<32;){if(st===0)break t;st--,X+=it[lt++]<<Z,Z+=8}if(X!==(4294967295&m.total)){R.msg="incorrect length check",m.mode=30;break}Z=X=0}m.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;case 32:default:return g}return R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,m.hold=X,m.bits=Z,(m.wsize||xt!==R.avail_out&&m.mode<30&&(m.mode<27||J!==4))&&Pt(R,R.output,R.next_out,xt-R.avail_out)?(m.mode=31,-4):(Et-=R.avail_in,xt-=R.avail_out,R.total_in+=Et,R.total_out+=xt,m.total+=xt,m.wrap&&xt&&(R.adler=m.check=m.flags?d(m.check,Tt,xt,R.next_out-xt):h(m.check,Tt,xt,R.next_out-xt)),R.data_type=m.bits+(m.last?64:0)+(m.mode===12?128:0)+(m.mode===20||m.mode===15?256:0),(Et==0&&xt===0||J===4)&&et===w&&(et=-5),et)},o.inflateEnd=function(R){if(!R||!R.state)return g;var J=R.state;return J.window&&(J.window=null),R.state=null,w},o.inflateGetHeader=function(R,J){var m;return R&&R.state?(2&(m=R.state).wrap)==0?g:((m.head=J).done=!1,w):g},o.inflateSetDictionary=function(R,J){var m,it=J.length;return R&&R.state?(m=R.state).wrap!==0&&m.mode!==11?g:m.mode===11&&h(1,J,it,0)!==m.check?-3:Pt(R,J,it,it)?(m.mode=31,-4):(m.havedict=1,w):g},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,u,o){var l=r("../utils/common"),h=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],d=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],v=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],b=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];u.exports=function(S,C,w,g,_,y,E,k){var T,M,q,K,nt,G,ut,tt,pt,Pt=k.bits,R=0,J=0,m=0,it=0,Tt=0,lt=0,$t=0,st=0,Ot=0,X=0,Z=null,Et=0,xt=new l.Buf16(16),vt=new l.Buf16(16),qt=null,Jt=0;for(R=0;R<=15;R++)xt[R]=0;for(J=0;J<g;J++)xt[C[w+J]]++;for(Tt=Pt,it=15;1<=it&&xt[it]===0;it--);if(it<Tt&&(Tt=it),it===0)return _[y++]=20971520,_[y++]=20971520,k.bits=1,0;for(m=1;m<it&&xt[m]===0;m++);for(Tt<m&&(Tt=m),R=st=1;R<=15;R++)if(st<<=1,(st-=xt[R])<0)return-1;if(0<st&&(S===0||it!==1))return-1;for(vt[1]=0,R=1;R<15;R++)vt[R+1]=vt[R]+xt[R];for(J=0;J<g;J++)C[w+J]!==0&&(E[vt[C[w+J]]++]=J);if(G=S===0?(Z=qt=E,19):S===1?(Z=h,Et-=257,qt=d,Jt-=257,256):(Z=v,qt=b,-1),R=m,nt=y,$t=J=X=0,q=-1,K=(Ot=1<<(lt=Tt))-1,S===1&&852<Ot||S===2&&592<Ot)return 1;for(;;){for(ut=R-$t,pt=E[J]<G?(tt=0,E[J]):E[J]>G?(tt=qt[Jt+E[J]],Z[Et+E[J]]):(tt=96,0),T=1<<R-$t,m=M=1<<lt;_[nt+(X>>$t)+(M-=T)]=ut<<24|tt<<16|pt|0,M!==0;);for(T=1<<R-1;X&T;)T>>=1;if(T!==0?(X&=T-1,X+=T):X=0,J++,--xt[R]==0){if(R===it)break;R=C[w+E[J]]}if(Tt<R&&(X&K)!==q){for($t===0&&($t=Tt),nt+=m,st=1<<(lt=R-$t);lt+$t<it&&!((st-=xt[lt+$t])<=0);)lt++,st<<=1;if(Ot+=1<<lt,S===1&&852<Ot||S===2&&592<Ot)return 1;_[q=X&K]=Tt<<24|lt<<16|nt-y|0}}return X!==0&&(_[nt+X]=R-$t<<24|64<<16|0),k.bits=Tt,0}},{"../utils/common":41}],51:[function(r,u,o){u.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,u,o){var l=r("../utils/common"),h=0,d=1;function v(A){for(var N=A.length;0<=--N;)A[N]=0}var b=0,S=29,C=256,w=C+1+S,g=30,_=19,y=2*w+1,E=15,k=16,T=7,M=256,q=16,K=17,nt=18,G=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ut=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Pt=new Array(2*(w+2));v(Pt);var R=new Array(2*g);v(R);var J=new Array(512);v(J);var m=new Array(256);v(m);var it=new Array(S);v(it);var Tt,lt,$t,st=new Array(g);function Ot(A,N,ot,at,V){this.static_tree=A,this.extra_bits=N,this.extra_base=ot,this.elems=at,this.max_length=V,this.has_stree=A&&A.length}function X(A,N){this.dyn_tree=A,this.max_code=0,this.stat_desc=N}function Z(A){return A<256?J[A]:J[256+(A>>>7)]}function Et(A,N){A.pending_buf[A.pending++]=255&N,A.pending_buf[A.pending++]=N>>>8&255}function xt(A,N,ot){A.bi_valid>k-ot?(A.bi_buf|=N<<A.bi_valid&65535,Et(A,A.bi_buf),A.bi_buf=N>>k-A.bi_valid,A.bi_valid+=ot-k):(A.bi_buf|=N<<A.bi_valid&65535,A.bi_valid+=ot)}function vt(A,N,ot){xt(A,ot[2*N],ot[2*N+1])}function qt(A,N){for(var ot=0;ot|=1&A,A>>>=1,ot<<=1,0<--N;);return ot>>>1}function Jt(A,N,ot){var at,V,ct=new Array(E+1),kt=0;for(at=1;at<=E;at++)ct[at]=kt=kt+ot[at-1]<<1;for(V=0;V<=N;V++){var dt=A[2*V+1];dt!==0&&(A[2*V]=qt(ct[dt]++,dt))}}function jt(A){var N;for(N=0;N<w;N++)A.dyn_ltree[2*N]=0;for(N=0;N<g;N++)A.dyn_dtree[2*N]=0;for(N=0;N<_;N++)A.bl_tree[2*N]=0;A.dyn_ltree[2*M]=1,A.opt_len=A.static_len=0,A.last_lit=A.matches=0}function mt(A){8<A.bi_valid?Et(A,A.bi_buf):0<A.bi_valid&&(A.pending_buf[A.pending++]=A.bi_buf),A.bi_buf=0,A.bi_valid=0}function Xt(A,N,ot,at){var V=2*N,ct=2*ot;return A[V]<A[ct]||A[V]===A[ct]&&at[N]<=at[ot]}function Wt(A,N,ot){for(var at=A.heap[ot],V=ot<<1;V<=A.heap_len&&(V<A.heap_len&&Xt(N,A.heap[V+1],A.heap[V],A.depth)&&V++,!Xt(N,at,A.heap[V],A.depth));)A.heap[ot]=A.heap[V],ot=V,V<<=1;A.heap[ot]=at}function It(A,N,ot){var at,V,ct,kt,dt=0;if(A.last_lit!==0)for(;at=A.pending_buf[A.d_buf+2*dt]<<8|A.pending_buf[A.d_buf+2*dt+1],V=A.pending_buf[A.l_buf+dt],dt++,at===0?vt(A,V,N):(vt(A,(ct=m[V])+C+1,N),(kt=G[ct])!==0&&xt(A,V-=it[ct],kt),vt(A,ct=Z(--at),ot),(kt=ut[ct])!==0&&xt(A,at-=st[ct],kt)),dt<A.last_lit;);vt(A,M,N)}function ie(A,N){var ot,at,V,ct=N.dyn_tree,kt=N.stat_desc.static_tree,dt=N.stat_desc.has_stree,At=N.stat_desc.elems,Nt=-1;for(A.heap_len=0,A.heap_max=y,ot=0;ot<At;ot++)ct[2*ot]!==0?(A.heap[++A.heap_len]=Nt=ot,A.depth[ot]=0):ct[2*ot+1]=0;for(;A.heap_len<2;)ct[2*(V=A.heap[++A.heap_len]=Nt<2?++Nt:0)]=1,A.depth[V]=0,A.opt_len--,dt&&(A.static_len-=kt[2*V+1]);for(N.max_code=Nt,ot=A.heap_len>>1;1<=ot;ot--)Wt(A,ct,ot);for(V=At;ot=A.heap[1],A.heap[1]=A.heap[A.heap_len--],Wt(A,ct,1),at=A.heap[1],A.heap[--A.heap_max]=ot,A.heap[--A.heap_max]=at,ct[2*V]=ct[2*ot]+ct[2*at],A.depth[V]=(A.depth[ot]>=A.depth[at]?A.depth[ot]:A.depth[at])+1,ct[2*ot+1]=ct[2*at+1]=V,A.heap[1]=V++,Wt(A,ct,1),2<=A.heap_len;);A.heap[--A.heap_max]=A.heap[1],(function(Mt,ee){var Ae,ue,fe,Vt,$e,ve,St=ee.dyn_tree,Re=ee.max_code,Ee=ee.stat_desc.static_tree,tn=ee.stat_desc.has_stree,_t=ee.stat_desc.extra_bits,en=ee.stat_desc.extra_base,ze=ee.stat_desc.max_length,De=0;for(Vt=0;Vt<=E;Vt++)Mt.bl_count[Vt]=0;for(St[2*Mt.heap[Mt.heap_max]+1]=0,Ae=Mt.heap_max+1;Ae<y;Ae++)ze<(Vt=St[2*St[2*(ue=Mt.heap[Ae])+1]+1]+1)&&(Vt=ze,De++),St[2*ue+1]=Vt,Re<ue||(Mt.bl_count[Vt]++,$e=0,en<=ue&&($e=_t[ue-en]),ve=St[2*ue],Mt.opt_len+=ve*(Vt+$e),tn&&(Mt.static_len+=ve*(Ee[2*ue+1]+$e)));if(De!==0){do{for(Vt=ze-1;Mt.bl_count[Vt]===0;)Vt--;Mt.bl_count[Vt]--,Mt.bl_count[Vt+1]+=2,Mt.bl_count[ze]--,De-=2}while(0<De);for(Vt=ze;Vt!==0;Vt--)for(ue=Mt.bl_count[Vt];ue!==0;)Re<(fe=Mt.heap[--Ae])||(St[2*fe+1]!==Vt&&(Mt.opt_len+=(Vt-St[2*fe+1])*St[2*fe],St[2*fe+1]=Vt),ue--)}})(A,N),Jt(ct,Nt,A.bl_count)}function c(A,N,ot){var at,V,ct=-1,kt=N[1],dt=0,At=7,Nt=4;for(kt===0&&(At=138,Nt=3),N[2*(ot+1)+1]=65535,at=0;at<=ot;at++)V=kt,kt=N[2*(at+1)+1],++dt<At&&V===kt||(dt<Nt?A.bl_tree[2*V]+=dt:V!==0?(V!==ct&&A.bl_tree[2*V]++,A.bl_tree[2*q]++):dt<=10?A.bl_tree[2*K]++:A.bl_tree[2*nt]++,ct=V,Nt=(dt=0)===kt?(At=138,3):V===kt?(At=6,3):(At=7,4))}function et(A,N,ot){var at,V,ct=-1,kt=N[1],dt=0,At=7,Nt=4;for(kt===0&&(At=138,Nt=3),at=0;at<=ot;at++)if(V=kt,kt=N[2*(at+1)+1],!(++dt<At&&V===kt)){if(dt<Nt)for(;vt(A,V,A.bl_tree),--dt!=0;);else V!==0?(V!==ct&&(vt(A,V,A.bl_tree),dt--),vt(A,q,A.bl_tree),xt(A,dt-3,2)):dt<=10?(vt(A,K,A.bl_tree),xt(A,dt-3,3)):(vt(A,nt,A.bl_tree),xt(A,dt-11,7));ct=V,Nt=(dt=0)===kt?(At=138,3):V===kt?(At=6,3):(At=7,4)}}v(st);var Y=!1;function O(A,N,ot,at){xt(A,(b<<1)+(at?1:0),3),(function(V,ct,kt,dt){mt(V),Et(V,kt),Et(V,~kt),l.arraySet(V.pending_buf,V.window,ct,kt,V.pending),V.pending+=kt})(A,N,ot)}o._tr_init=function(A){Y||((function(){var N,ot,at,V,ct,kt=new Array(E+1);for(V=at=0;V<S-1;V++)for(it[V]=at,N=0;N<1<<G[V];N++)m[at++]=V;for(m[at-1]=V,V=ct=0;V<16;V++)for(st[V]=ct,N=0;N<1<<ut[V];N++)J[ct++]=V;for(ct>>=7;V<g;V++)for(st[V]=ct<<7,N=0;N<1<<ut[V]-7;N++)J[256+ct++]=V;for(ot=0;ot<=E;ot++)kt[ot]=0;for(N=0;N<=143;)Pt[2*N+1]=8,N++,kt[8]++;for(;N<=255;)Pt[2*N+1]=9,N++,kt[9]++;for(;N<=279;)Pt[2*N+1]=7,N++,kt[7]++;for(;N<=287;)Pt[2*N+1]=8,N++,kt[8]++;for(Jt(Pt,w+1,kt),N=0;N<g;N++)R[2*N+1]=5,R[2*N]=qt(N,5);Tt=new Ot(Pt,G,C+1,w,E),lt=new Ot(R,ut,0,g,E),$t=new Ot(new Array(0),tt,0,_,T)})(),Y=!0),A.l_desc=new X(A.dyn_ltree,Tt),A.d_desc=new X(A.dyn_dtree,lt),A.bl_desc=new X(A.bl_tree,$t),A.bi_buf=0,A.bi_valid=0,jt(A)},o._tr_stored_block=O,o._tr_flush_block=function(A,N,ot,at){var V,ct,kt=0;0<A.level?(A.strm.data_type===2&&(A.strm.data_type=(function(dt){var At,Nt=4093624447;for(At=0;At<=31;At++,Nt>>>=1)if(1&Nt&&dt.dyn_ltree[2*At]!==0)return h;if(dt.dyn_ltree[18]!==0||dt.dyn_ltree[20]!==0||dt.dyn_ltree[26]!==0)return d;for(At=32;At<C;At++)if(dt.dyn_ltree[2*At]!==0)return d;return h})(A)),ie(A,A.l_desc),ie(A,A.d_desc),kt=(function(dt){var At;for(c(dt,dt.dyn_ltree,dt.l_desc.max_code),c(dt,dt.dyn_dtree,dt.d_desc.max_code),ie(dt,dt.bl_desc),At=_-1;3<=At&&dt.bl_tree[2*pt[At]+1]===0;At--);return dt.opt_len+=3*(At+1)+5+5+4,At})(A),V=A.opt_len+3+7>>>3,(ct=A.static_len+3+7>>>3)<=V&&(V=ct)):V=ct=ot+5,ot+4<=V&&N!==-1?O(A,N,ot,at):A.strategy===4||ct===V?(xt(A,2+(at?1:0),3),It(A,Pt,R)):(xt(A,4+(at?1:0),3),(function(dt,At,Nt,Mt){var ee;for(xt(dt,At-257,5),xt(dt,Nt-1,5),xt(dt,Mt-4,4),ee=0;ee<Mt;ee++)xt(dt,dt.bl_tree[2*pt[ee]+1],3);et(dt,dt.dyn_ltree,At-1),et(dt,dt.dyn_dtree,Nt-1)})(A,A.l_desc.max_code+1,A.d_desc.max_code+1,kt+1),It(A,A.dyn_ltree,A.dyn_dtree)),jt(A),at&&mt(A)},o._tr_tally=function(A,N,ot){return A.pending_buf[A.d_buf+2*A.last_lit]=N>>>8&255,A.pending_buf[A.d_buf+2*A.last_lit+1]=255&N,A.pending_buf[A.l_buf+A.last_lit]=255&ot,A.last_lit++,N===0?A.dyn_ltree[2*ot]++:(A.matches++,N--,A.dyn_ltree[2*(m[ot]+C+1)]++,A.dyn_dtree[2*Z(N)]++),A.last_lit===A.lit_bufsize-1},o._tr_align=function(A){xt(A,2,3),vt(A,M,Pt),(function(N){N.bi_valid===16?(Et(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(A)}},{"../utils/common":41}],53:[function(r,u,o){u.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,u,o){(function(l){(function(h,d){if(!h.setImmediate){var v,b,S,C,w=1,g={},_=!1,y=h.document,E=Object.getPrototypeOf&&Object.getPrototypeOf(h);E=E&&E.setTimeout?E:h,v={}.toString.call(h.process)==="[object process]"?function(q){process.nextTick(function(){T(q)})}:(function(){if(h.postMessage&&!h.importScripts){var q=!0,K=h.onmessage;return h.onmessage=function(){q=!1},h.postMessage("","*"),h.onmessage=K,q}})()?(C="setImmediate$"+Math.random()+"$",h.addEventListener?h.addEventListener("message",M,!1):h.attachEvent("onmessage",M),function(q){h.postMessage(C+q,"*")}):h.MessageChannel?((S=new MessageChannel).port1.onmessage=function(q){T(q.data)},function(q){S.port2.postMessage(q)}):y&&"onreadystatechange"in y.createElement("script")?(b=y.documentElement,function(q){var K=y.createElement("script");K.onreadystatechange=function(){T(q),K.onreadystatechange=null,b.removeChild(K),K=null},b.appendChild(K)}):function(q){setTimeout(T,0,q)},E.setImmediate=function(q){typeof q!="function"&&(q=new Function(""+q));for(var K=new Array(arguments.length-1),nt=0;nt<K.length;nt++)K[nt]=arguments[nt+1];var G={callback:q,args:K};return g[w]=G,v(w),w++},E.clearImmediate=k}function k(q){delete g[q]}function T(q){if(_)setTimeout(T,0,q);else{var K=g[q];if(K){_=!0;try{(function(nt){var G=nt.callback,ut=nt.args;switch(ut.length){case 0:G();break;case 1:G(ut[0]);break;case 2:G(ut[0],ut[1]);break;case 3:G(ut[0],ut[1],ut[2]);break;default:G.apply(d,ut)}})(K)}finally{k(q),_=!1}}}}function M(q){q.source===h&&typeof q.data=="string"&&q.data.indexOf(C)===0&&T(+q.data.slice(C.length))}})(typeof self>"u"?l===void 0?this:l:self)}).call(this,typeof Te<"u"?Te:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Hr)),Hr.exports}var qo=Ko();const ua=oa(qo);var lr={exports:{}},Wo=lr.exports,Xi;function Vo(){return Xi||(Xi=1,(function(p,i){(function(r,u){u()})(Wo,function(){function r(b,S){return typeof S>"u"?S={autoBom:!1}:typeof S!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),S={autoBom:!S}),S.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(b.type)?new Blob(["\uFEFF",b],{type:b.type}):b}function u(b,S,C){var w=new XMLHttpRequest;w.open("GET",b),w.responseType="blob",w.onload=function(){v(w.response,S,C)},w.onerror=function(){console.error("could not download file")},w.send()}function o(b){var S=new XMLHttpRequest;S.open("HEAD",b,!1);try{S.send()}catch{}return 200<=S.status&&299>=S.status}function l(b){try{b.dispatchEvent(new MouseEvent("click"))}catch{var S=document.createEvent("MouseEvents");S.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),b.dispatchEvent(S)}}var h=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Te=="object"&&Te.global===Te?Te:void 0,d=h.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),v=h.saveAs||(typeof window!="object"||window!==h?function(){}:"download"in HTMLAnchorElement.prototype&&!d?function(b,S,C){var w=h.URL||h.webkitURL,g=document.createElement("a");S=S||b.name||"download",g.download=S,g.rel="noopener",typeof b=="string"?(g.href=b,g.origin===location.origin?l(g):o(g.href)?u(b,S,C):l(g,g.target="_blank")):(g.href=w.createObjectURL(b),setTimeout(function(){w.revokeObjectURL(g.href)},4e4),setTimeout(function(){l(g)},0))}:"msSaveOrOpenBlob"in navigator?function(b,S,C){if(S=S||b.name||"download",typeof b!="string")navigator.msSaveOrOpenBlob(r(b,C),S);else if(o(b))u(b,S,C);else{var w=document.createElement("a");w.href=b,w.target="_blank",setTimeout(function(){l(w)})}}:function(b,S,C,w){if(w=w||open("","_blank"),w&&(w.document.title=w.document.body.innerText="downloading..."),typeof b=="string")return u(b,S,C);var g=b.type==="application/octet-stream",_=/constructor/i.test(h.HTMLElement)||h.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||g&&_||d)&&typeof FileReader<"u"){var E=new FileReader;E.onloadend=function(){var M=E.result;M=y?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),w?w.location.href=M:location=M,w=null},E.readAsDataURL(b)}else{var k=h.URL||h.webkitURL,T=k.createObjectURL(b);w?w.location=T:location.href=T,w=null,setTimeout(function(){k.revokeObjectURL(T)},4e4)}});h.saveAs=v.saveAs=v,p.exports=v})})(lr)),lr.exports}var ca=Vo();function Yi(p){const i=Math.floor(p/3600),r=Math.floor(p%3600/60),u=Math.floor(p%60),o=Math.floor(p%1*1e3);return`${i.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")},${o.toString().padStart(3,"0")}`}function Gi(p){const i=Math.floor(p/3600),r=Math.floor(p%3600/60),u=Math.floor(p%60),o=Math.floor(p%1*1e3);return`${i.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}.${o.toString().padStart(3,"0")}`}function ha(p){return p.map((i,r)=>{const u=r+1,o=Yi(i.start),l=Yi(i.end),h=i.text;return`${u}
${o} --> ${l}
${h}
`}).join(`
`)}function da(p){const i=`WEBVTT

`,r=p.map(u=>{const o=Gi(u.start),l=Gi(u.end),h=u.text;return`${o} --> ${l}
${h}
`}).join(`
`);return i+r}function fa(p){return p.map(i=>{const r=i.start.toFixed(3),u=i.end.toFixed(3);return`[${r}s - ${u}s] ${i.text}`}).join(`
`)}function pa(p,i,r,u,o,l,h){return{id:p,title:i,duration:r,created_at:new Date(u).toISOString(),source:o,full_text:l,segments:h.map(d=>({id:d.id,text:d.text,start:d.start,end:d.end,duration:d.end-d.start}))}}async function ma(p){return p}async function Ho(p){const i=await zo(p),r=await Pn(p);if(!i)throw new Error("Recording not found");if(!r)throw new Error("No annotations found for this recording");const u=new ua,o=`${i.title}-${p.slice(0,8)}`,l=u.folder(o),h=await ma(i.audioBlob);l.file(`${p}.wav`,h);const d=pa(i.id,i.title,i.duration,i.createdAt,i.source,r.fullText,r.segments);l.file(`${p}.json`,JSON.stringify(d,null,2));const v=ha(r.segments);l.file(`${p}.srt`,v);const b=da(r.segments);l.file(`${p}.vtt`,b);const S=fa(r.segments);l.file(`${p}.txt`,S);const C=await u.generateAsync({type:"blob"});ca.saveAs(C,`${o}.zip`)}async function Zo(){const i=(await la()).filter(d=>d.isAnnotated);if(i.length===0)throw new Error("No annotated recordings to export");const r=new ua,o=`annotations-export-${new Date().toISOString().replace(/[:.]/g,"-")}`,l=r.folder(o);for(const d of i){const v=await Pn(d.id);if(!v)continue;const b=`${d.title}-${d.id.slice(0,8)}`,S=l.folder(b),C=await ma(d.audioBlob);S.file(`${d.id}.wav`,C);const w=pa(d.id,d.title,d.duration,d.createdAt,d.source,v.fullText,v.segments);S.file(`${d.id}.json`,JSON.stringify(w,null,2));const g=ha(v.segments);S.file(`${d.id}.srt`,g);const _=da(v.segments);S.file(`${d.id}.vtt`,_);const y=fa(v.segments);S.file(`${d.id}.txt`,y)}const h=await r.generateAsync({type:"blob"});ca.saveAs(h,`${o}.zip`)}class ga{constructor(i){this.listeners=new Set,this.state=i}getState(){return this.state}subscribe(i){return this.listeners.add(i),()=>{this.listeners.delete(i)}}notify(){this.listeners.forEach(i=>i(this.state))}setState(i){this.state={...this.state,...i},this.notify()}}const va="aidio-theme",Xo=()=>{try{const p=localStorage.getItem(va);if(p==="dark"||p==="pastel")return p}catch(p){console.warn("Failed to read theme from localStorage:",p)}return"dark"},Yo={currentTheme:Xo()};class Go extends ga{constructor(){super(Yo)}toggleTheme(){const i=this.state.currentTheme==="dark"?"pastel":"dark";this.setTheme(i)}setTheme(i){this.setState({currentTheme:i});try{localStorage.setItem(va,i)}catch(r){console.warn("Failed to save theme to localStorage:",r)}}getCurrentTheme(){return this.state.currentTheme}}const Tn=new Go,Qo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Jo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var ts=Object.defineProperty,es=Object.getOwnPropertyDescriptor,ya=(p,i,r,u)=>{for(var o=u>1?void 0:u?es(i,r):i,l=p.length-1,h;l>=0;l--)(h=p[l])&&(o=(u?h(i,r,o):h(o))||o);return u&&o&&ts(i,r,o),o};let fr=class extends Ce{constructor(){super(...arguments),this.currentTheme=Tn.getCurrentTheme()}connectedCallback(){super.connectedCallback(),this.unsubscribe=Tn.subscribe(p=>{this.currentTheme=p.currentTheme})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}handleToggle(){Tn.toggleTheme()}render(){const p=this.currentTheme==="dark"?Qo:Jo,i=this.currentTheme==="dark"?"Switch to Pastel Theme":"Switch to Dark Theme";return Kt`
      <button
        class="theme-toggle-btn"
        @click=${this.handleToggle}
        title=${i}
        aria-label=${i}
      >
        <span class="theme-icon">${Qt(p)}</span>
      </button>
    `}};fr.styles=mn`
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
  `;ya([Ut()],fr.prototype,"currentTheme",2);fr=ya([gn("theme-toggle")],fr);class ns{constructor(){this.audioBuffer=null,this.markers={left:0,right:0},this.viewport={offsetSeconds:0,pixelsPerSecond:100}}initialize(i,r){this.canvas=i,this.config=r;const u=i.getContext("2d");if(!u)throw new Error("Failed to get 2D rendering context");this.ctx=u,this.updateCanvasDimensions()}setAudioData(i){this.audioBuffer=i,this.render()}setMarkers(i){this.markers=i,this.render()}setViewport(i){this.viewport=i,this.render()}updateConfig(i){this.config={...this.config,...i},this.updateCanvasDimensions(),this.render()}pixelToTime(i){return this.viewport.offsetSeconds+i/this.viewport.pixelsPerSecond}timeToPixel(i){return(i-this.viewport.offsetSeconds)*this.viewport.pixelsPerSecond}updateCanvasDimensions(){this.canvas.width=this.config.width,this.canvas.height=this.config.height}clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}destroy(){this.audioBuffer=null,this.canvas=null,this.ctx=null}}class ba extends ns{constructor(){super(...arguments),this.waveformData=null}getMetadata(){return{id:"waveform",name:"Waveform",description:"Classic amplitude waveform visualization with gradient coloring",author:"AIdio",version:"1.0.0",performanceProfile:"high",supportsRealtime:!0}}setAudioData(i){super.setAudioData(i),this.waveformData=this.generateWaveformData(i)}generateWaveformData(i){const r=i.getChannelData(0),u=this.config.maxSamplesPerPixel||1e3,o=Math.min(r.length,this.config.width*u),l=Math.floor(r.length/o),h=new Float32Array(o);for(let d=0;d<o;d++){const v=l*d;let b=0;for(let S=0;S<l;S++){const C=Math.abs(r[v+S]||0);C>b&&(b=C)}h[d]=b}return h}render(){if(!this.audioBuffer||!this.waveformData){this.clearCanvas(),this.renderEmptyState();return}this.clearCanvas();const i=this.canvas.width,r=this.canvas.height,u=r/2,o=getComputedStyle(document.documentElement),l=o.getPropertyValue("--waveform-gradient-start").trim(),h=o.getPropertyValue("--waveform-gradient-mid").trim(),d=o.getPropertyValue("--waveform-gradient-end").trim(),v=this.audioBuffer.duration,b=this.viewport.offsetSeconds,S=b+i/this.viewport.pixelsPerSecond,C=Math.floor(b/v*this.waveformData.length),w=Math.ceil(S/v*this.waveformData.length),g=this.waveformData.slice(C,w);this.markers.protected!==void 0&&this.renderProtectedRegion(),this.renderActiveSegment();const _=this.ctx.createLinearGradient(0,0,0,r);_.addColorStop(0,l),_.addColorStop(.5,h),_.addColorStop(1,d),this.ctx.fillStyle=_,this.ctx.beginPath();const y=i/g.length,E=Math.max(1,y*.1);for(let k=0;k<g.length;k++){const M=g[k]*(r/2)*.9,q=k*y,K=u-M/2;this.ctx.fillRect(q,K,y-E,M)}this.renderMarkers()}renderProtectedRegion(){if(this.markers.protected===void 0)return;const i=this.timeToPixel(this.markers.protected);i>0&&(this.ctx.fillStyle="rgba(0, 255, 0, 0.05)",this.ctx.fillRect(0,0,i,this.canvas.height),this.ctx.strokeStyle="rgba(0, 255, 0, 0.2)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(i,0),this.ctx.lineTo(i,this.canvas.height),this.ctx.stroke())}renderActiveSegment(){const i=this.timeToPixel(this.markers.left),u=this.timeToPixel(this.markers.right)-i;u>0&&(this.ctx.fillStyle="rgba(255, 107, 107, 0.1)",this.ctx.fillRect(i,0,u,this.canvas.height))}renderMarkers(){const i=this.timeToPixel(this.markers.left),r=this.timeToPixel(this.markers.right);this.renderMarker(i,"#6BCF7F","◀",!0),this.renderMarker(r,"#FF6B6B","▶",!1)}renderMarker(i,r,u,o){const l=this.canvas.height;this.ctx.strokeStyle=r,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(i,0),this.ctx.lineTo(i,l),this.ctx.stroke();const h=20;this.ctx.fillStyle=r,this.ctx.fillRect(i-h/2,l/2-h/2,h,h),this.ctx.fillStyle="#fff",this.ctx.font="12px monospace",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(u,i,l/2),o&&(this.ctx.fillStyle=r,this.ctx.font="10px sans-serif",this.ctx.fillText("PROTECTED",i,l/2+20))}renderEmptyState(){this.ctx.fillStyle="#666",this.ctx.font="14px sans-serif",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText("No audio loaded",this.canvas.width/2,this.canvas.height/2)}}const wa=new Map;function rs(p,i){wa.set(p,i)}function is(p="waveform"){const i=wa.get(p);return i?new i:(console.warn(`[VisualizerFactory] Unknown visualizer type: ${p}, falling back to waveform`),new ba)}rs("waveform",ba);function hn(p,i){if(p.length===0)return{overallConfidence:0,wordAlignmentRate:0,gaps:[{start:0,end:i,duration:i}],overlaps:[],confidenceDistribution:{high:0,medium:0,low:0}};const r=[...p].sort((w,g)=>w.start-g.start),u=[];for(let w=0;w<r.length;w++){const g=r[w].end,_=w<r.length-1?r[w+1].start:i;_>g&&u.push({start:g,end:_,duration:_-g})}r[0].start>0&&u.unshift({start:0,end:r[0].start,duration:r[0].start});const o=[];for(let w=0;w<r.length-1;w++){const g=r[w],_=r[w+1];g.end>_.start&&o.push({segment1Id:g.id,segment2Id:_.id,start:_.start,end:g.end,duration:g.end-_.start})}const l=p.flatMap(w=>w.words),h=l.length,d=l.filter(w=>w.start>0||w.end>0).length,v=h>0?d/h:0,b=l.map(w=>w.confidence).filter(w=>w>0),S=b.length>0?b.reduce((w,g)=>w+g,0)/b.length:0,C={high:b.filter(w=>w>.9).length,medium:b.filter(w=>w>=.7&&w<=.9).length,low:b.filter(w=>w<.7).length};return{overallConfidence:S,wordAlignmentRate:v,gaps:u,overlaps:o,confidenceDistribution:C}}function dn(p){const i=p.segments.sort((r,u)=>r.start-u.start).map(r=>r.text).join(" ");return{...p,fullText:i,updatedAt:Date.now()}}const Qi={currentAnnotation:null,timelineViewport:{start:0,end:10,pixelsPerSecond:100},selectedSegmentId:null,playbackCursor:0,editMode:"select",isPlaying:!1,history:{undoStack:[],redoStack:[]},showWordMarkers:!1,highlightLowConfidence:!0};class as extends ga{constructor(){super(Qi),this.MAX_HISTORY=50}loadAnnotation(i){this.setState({currentAnnotation:i,timelineViewport:{start:0,end:Math.min(i.duration,10),pixelsPerSecond:100},selectedSegmentId:null,playbackCursor:0,history:{undoStack:[],redoStack:[]}})}addSegment(i,r,u=""){const o=this.state.currentAnnotation;if(!o)return;const l={id:crypto.randomUUID(),start:i,end:r,text:u,source:"manual",confidence:1,words:[]};this.pushHistory();const h={...o,segments:[...o.segments,l],updatedAt:Date.now()},d={...h,alignmentQuality:hn(h.segments,h.duration)};this.setState({currentAnnotation:dn(d),selectedSegmentId:l.id})}updateSegmentText(i,r){const u=this.state.currentAnnotation;if(!u)return;this.pushHistory();const o=u.segments.map(h=>h.id===i?{...h,text:r}:h),l={...u,segments:o,updatedAt:Date.now()};this.setState({currentAnnotation:dn(l)})}updateSegmentBoundary(i,r,u){const o=this.state.currentAnnotation;if(!o)return;const l=o.segments.find(_=>_.id===i);if(!l)return;const h=[...o.segments].sort((_,y)=>_.start-y.start),d=h.findIndex(_=>_.id===i),v=d>0?h[d-1]:null,b=d<h.length-1?h[d+1]:null;let S=u;if(r==="start"){const _=v?v.end:0,y=l.end-.1;S=Math.max(_,Math.min(S,y))}else{const _=l.start+.1,y=b?b.start:o.duration;S=Math.max(_,Math.min(S,y))}const C=o.segments.map(_=>_.id!==i?_:r==="start"?{..._,start:S}:{..._,end:S}),w={...o,segments:C,updatedAt:Date.now()},g={...w,alignmentQuality:hn(w.segments,w.duration)};this.setState({currentAnnotation:g})}deleteSegment(i){const r=this.state.currentAnnotation;if(!r)return;this.pushHistory();const u=r.segments.filter(h=>h.id!==i),o={...r,segments:u,updatedAt:Date.now()},l={...o,alignmentQuality:hn(o.segments,o.duration)};this.setState({currentAnnotation:dn(l),selectedSegmentId:null})}splitSegment(i,r){const u=this.state.currentAnnotation;if(!u)return;const o=u.segments.find(S=>S.id===i);if(!o||r<=o.start||r>=o.end)return;this.pushHistory();const l={...o,id:crypto.randomUUID(),end:r,words:o.words.filter(S=>S.end<=r)},h={...o,id:crypto.randomUUID(),start:r,words:o.words.filter(S=>S.start>=r)},d=u.segments.filter(S=>S.id!==i).concat([l,h]),v={...u,segments:d,updatedAt:Date.now()},b={...v,alignmentQuality:hn(v.segments,v.duration)};this.setState({currentAnnotation:dn(b),selectedSegmentId:l.id})}mergeSegments(i){const r=this.state.currentAnnotation;if(!r||i.length<2)return;this.pushHistory();const u=r.segments.filter(b=>i.includes(b.id));if(u.length<2)return;const o=u.sort((b,S)=>b.start-S.start),l={id:crypto.randomUUID(),start:o[0].start,end:o[o.length-1].end,text:o.map(b=>b.text).join(" "),source:"manual",confidence:o.reduce((b,S)=>b+S.confidence,0)/o.length,words:o.flatMap(b=>b.words)},h=r.segments.filter(b=>!i.includes(b.id)).concat([l]),d={...r,segments:h,updatedAt:Date.now()},v={...d,alignmentQuality:hn(d.segments,d.duration)};this.setState({currentAnnotation:dn(v),selectedSegmentId:l.id})}selectSegment(i){this.setState({selectedSegmentId:i})}setEditMode(i){this.setState({editMode:i})}updatePlaybackCursor(i){this.setState({playbackCursor:i})}setPlaying(i){this.setState({isPlaying:i})}zoom(i){const{timelineViewport:r}=this.state,u=(r.start+r.end)/2,o=Math.max(10,Math.min(1e3,r.pixelsPerSecond*i)),l=(r.end-r.start)/i,h=Math.max(0,u-l/2),d=h+l;this.setState({timelineViewport:{start:h,end:d,pixelsPerSecond:o},showWordMarkers:o>200})}pan(i){const r=this.state.currentAnnotation;if(!r)return;const{timelineViewport:u}=this.state,o=u.end-u.start;let l=u.start+i;l=Math.max(0,Math.min(l,r.duration-o)),this.setState({timelineViewport:{...u,start:l,end:l+o}})}setViewportPosition(i){const r=this.state.currentAnnotation;if(!r)return;const{timelineViewport:u}=this.state,o=u.end-u.start,l=Math.max(0,Math.min(i,r.duration-o));this.setState({timelineViewport:{...u,start:l,end:l+o}})}toggleLowConfidenceHighlight(){this.setState({highlightLowConfidence:!this.state.highlightLowConfidence})}advanceToNextGap(i=3){const r=this.state.currentAnnotation;if(!r)return;const u=[...r.segments].sort((w,g)=>w.start-g.start);let o=0,l=r.duration;if(u.length===0)o=0,l=Math.min(i,r.duration);else{let w=0;if(this.state.selectedSegmentId){const _=u.find(y=>y.id===this.state.selectedSegmentId);_&&(w=_.end)}let g=!1;if(w===0&&u[0].start>.1&&(o=0,l=Math.min(u[0].start,i),g=!0),!g)for(let _=0;_<u.length-1;_++){const y=u[_],E=u[_+1];if(y.end>=w&&E.start-y.end>.1){o=y.end,l=Math.min(o+i,E.start),g=!0;break}}if(!g){const _=u[u.length-1];_.end<r.duration-.1&&(o=_.end,l=Math.min(o+i,r.duration),g=!0)}if(!g)return}const h={id:crypto.randomUUID(),start:o,end:l,text:"",source:"manual",confidence:1,words:[]};this.pushHistory();const d={...r,segments:[...r.segments,h],updatedAt:Date.now()},v={...d,alignmentQuality:hn(d.segments,d.duration)},b=(o+l)/2,S=this.state.timelineViewport.end-this.state.timelineViewport.start,C=Math.max(0,b-S/2);this.setState({currentAnnotation:dn(v),selectedSegmentId:h.id,timelineViewport:{...this.state.timelineViewport,start:C,end:C+S}})}centerOnSelectedSegment(){const{currentAnnotation:i,selectedSegmentId:r,timelineViewport:u}=this.state;if(!i||!r)return;const o=i.segments.find(v=>v.id===r);if(!o)return;const l=(o.start+o.end)/2,h=u.end-u.start,d=Math.max(0,Math.min(l-h/2,i.duration-h));this.setState({timelineViewport:{...u,start:d,end:d+h}})}undo(){const{undoStack:i,redoStack:r}=this.state.history;if(i.length===0)return;const u=i[i.length-1],o={annotation:this.state.currentAnnotation,selectedSegmentId:this.state.selectedSegmentId};this.setState({currentAnnotation:u.annotation,selectedSegmentId:u.selectedSegmentId,history:{undoStack:i.slice(0,-1),redoStack:[...r,o]}})}redo(){const{undoStack:i,redoStack:r}=this.state.history;if(r.length===0)return;const u=r[r.length-1],o={annotation:this.state.currentAnnotation,selectedSegmentId:this.state.selectedSegmentId};this.setState({currentAnnotation:u.annotation,selectedSegmentId:u.selectedSegmentId,history:{undoStack:[...i,o],redoStack:r.slice(0,-1)}})}pushHistory(){if(!this.state.currentAnnotation)return;const i={annotation:this.state.currentAnnotation,selectedSegmentId:this.state.selectedSegmentId},r=[...this.state.history.undoStack,i];r.length>this.MAX_HISTORY&&r.shift(),this.setState({history:{undoStack:r,redoStack:[]}})}reset(){this.state=Qi,this.notify()}}const Ye=new as,_a=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,os=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ss=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var ls=Object.defineProperty,us=Object.getOwnPropertyDescriptor,xe=(p,i,r,u)=>{for(var o=u>1?void 0:u?us(i,r):i,l=p.length-1,h;l>=0;l--)(h=p[l])&&(o=(u?h(i,r,o):h(o))||o);return u&&o&&ls(i,r,o),o};let ge=class extends Ce{constructor(){super(...arguments),this.audioBlob=null,this.leftClamp=0,this.rightClamp=3,this.isPlaying=!1,this.loopEnabled=!1,this.currentTime=0,this.duration=0,this.draggingMarker=null,this.timelineState=Ye.getState(),this.visualizer=null,this.audioContext=null,this.audioBuffer=null,this.audioSource=null,this.animationFrameId=null,this.playStartTime=0,this.playStartOffset=0,this.unsubscribe=null,this.handleCanvasMouseDown=p=>{if(!this.visualizer||!this.canvas)return;const i=this.canvas.getBoundingClientRect(),r=p.clientX-i.left,u=this.visualizer.timeToPixel(this.leftClamp),o=this.visualizer.timeToPixel(this.rightClamp),l=10;Math.abs(r-u)<l?(this.draggingMarker="left",p.preventDefault()):Math.abs(r-o)<l&&(this.draggingMarker="right",p.preventDefault())},this.handleCanvasMouseMove=p=>{if(!this.draggingMarker||!this.visualizer||!this.canvas)return;const i=this.canvas.getBoundingClientRect(),r=p.clientX-i.left,u=this.visualizer.pixelToTime(r);this.draggingMarker==="left"?this.leftClamp=Math.max(0,Math.min(u,this.rightClamp-.1)):this.rightClamp=Math.min(this.duration,Math.max(u,this.leftClamp+.1)),this.updateVisualizerMarkers(),this.visualizer.render(),this.dispatchMarkerChange(),this.requestUpdate()},this.handleCanvasMouseUp=()=>{this.draggingMarker=null}}connectedCallback(){super.connectedCallback(),this.unsubscribe=Ye.subscribe(p=>{this.timelineState=p,this.requestUpdate()})}async firstUpdated(){if(this.canvas){this.visualizer=is("waveform");const p=this.canvas.getBoundingClientRect();this.visualizer.initialize(this.canvas,{width:p.width,height:p.height,renderQuality:"high",colorScheme:"default"})}this.audioBlob&&await this.loadAudio()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup(),this.unsubscribe?.()}async loadAudio(){if(!(!this.audioBlob||!this.visualizer))try{this.audioContext=new AudioContext;const p=await this.audioBlob.arrayBuffer();this.audioBuffer=await this.audioContext.decodeAudioData(p),this.duration=this.audioBuffer.duration,this.rightClamp=Math.min(3,this.duration),this.visualizer.setAudioData(this.audioBuffer);const{timelineViewport:i}=this.timelineState;this.visualizer.setViewport({offsetSeconds:i.start,pixelsPerSecond:i.pixelsPerSecond}),this.updateVisualizerMarkers(),this.visualizer.render(),this.dispatchEvent(new CustomEvent("duration-loaded",{detail:{duration:this.duration},bubbles:!0,composed:!0}))}catch(p){console.error("Failed to load audio:",p)}}updateVisualizerMarkers(){this.visualizer&&this.visualizer.setMarkers({left:this.leftClamp,right:this.rightClamp})}togglePlayback(){this.isPlaying?this.pause():this.play()}getCurrentTime(){return this.currentTime}handlePlay(){this.togglePlayback()}async play(){if(!this.audioContext||!this.audioBuffer)return;this.audioContext.state==="suspended"&&await this.audioContext.resume(),this.stopAudioSource(),this.audioSource=this.audioContext.createBufferSource(),this.audioSource.buffer=this.audioBuffer,this.audioSource.connect(this.audioContext.destination);const p=this.leftClamp,r=this.rightClamp-p;this.audioSource.start(0,p,r),this.isPlaying=!0,this.playStartTime=this.audioContext.currentTime,this.playStartOffset=p,this.audioSource.onended=()=>{this.loopEnabled&&this.isPlaying?this.play():this.pause()},this.startAnimationLoop()}pause(){this.stopAudioSource(),this.isPlaying=!1,this.stopAnimationLoop(),this.visualizer?.render()}stopAudioSource(){if(this.audioSource){try{this.audioSource.stop()}catch{}this.audioSource.disconnect(),this.audioSource=null}}startAnimationLoop(){const p=()=>{if(!this.isPlaying||!this.audioContext)return;const i=this.audioContext.currentTime-this.playStartTime;this.currentTime=this.playStartOffset+i,this.currentTime>=this.rightClamp&&(this.currentTime=this.rightClamp),this.visualizer?.render(),this.animationFrameId=requestAnimationFrame(p)};this.animationFrameId=requestAnimationFrame(p)}stopAnimationLoop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}toggleLoop(){this.loopEnabled=!this.loopEnabled}dispatchMarkerChange(){this.dispatchEvent(new CustomEvent("markers-changed",{detail:{start:this.leftClamp,end:this.rightClamp,duration:this.rightClamp-this.leftClamp},bubbles:!0,composed:!0}))}panLeft(){Ye.pan(-1),this.updateVisualizerViewport()}panRight(){Ye.pan(1),this.updateVisualizerViewport()}zoomIn(){Ye.zoom(1.5),this.updateVisualizerViewport()}zoomOut(){Ye.zoom(1/1.5),this.updateVisualizerViewport()}centerSegment(){Ye.centerOnSelectedSegment(),this.updateVisualizerViewport()}updateVisualizerViewport(){if(!this.visualizer)return;const{timelineViewport:p}=this.timelineState;this.visualizer.setViewport({offsetSeconds:p.start,pixelsPerSecond:p.pixelsPerSecond}),this.visualizer.render()}formatTime(p){const i=Math.floor(p/60),r=(p%60).toFixed(2);return`${i}:${r.padStart(5,"0")}`}cleanup(){this.pause(),this.visualizer?.destroy(),this.audioContext?.close(),this.audioContext=null,this.audioBuffer=null,this.visualizer=null}render(){return Kt`
      <div class="player-container">
        <div class="waveform-wrapper">
          <canvas
            @mousedown=${this.handleCanvasMouseDown}
            @mousemove=${this.handleCanvasMouseMove}
            @mouseup=${this.handleCanvasMouseUp}
            @mouseleave=${this.handleCanvasMouseUp}
          ></canvas>
        </div>

        <div class="controls">
          <div class="playback-controls">
            <button class="control-btn" @click=${this.handlePlay}>
              ${this.isPlaying?Qt(os):Qt(_a)}
              <span>${this.isPlaying?"Pause":"Play"}</span>
            </button>

            <button
              class="control-btn ${this.loopEnabled?"active":""}"
              @click=${this.toggleLoop}
            >
              ${Qt(ss)}
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
            <span class="duration-label">| Zoom: ${Math.round(this.timelineState.timelineViewport.pixelsPerSecond/100*100)}%</span>
          </div>
        </div>
      </div>
    `}};ge.styles=mn`
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
  `;xe([_e({type:Object})],ge.prototype,"audioBlob",2);xe([_e({type:Number})],ge.prototype,"leftClamp",2);xe([_e({type:Number})],ge.prototype,"rightClamp",2);xe([Ut()],ge.prototype,"isPlaying",2);xe([Ut()],ge.prototype,"loopEnabled",2);xe([Ut()],ge.prototype,"currentTime",2);xe([Ut()],ge.prototype,"duration",2);xe([Ut()],ge.prototype,"draggingMarker",2);xe([Ut()],ge.prototype,"timelineState",2);xe([wo("canvas")],ge.prototype,"canvas",2);ge=xe([gn("audio-waveform-player")],ge);var cs=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,de=(p,i,r,u)=>{for(var o=u>1?void 0:u?hs(i,r):i,l=p.length-1,h;l>=0;l--)(h=p[l])&&(o=(u?h(i,r,o):h(o))||o);return u&&o&&cs(i,r,o),o};let le=class extends Ce{constructor(){super(...arguments),this.text="",this.fontSize=24,this.leftClamp=0,this.rightClamp=0,this.offsetX=0,this.isDragging=!1,this.dragStartX=0,this.dragStartOffset=0,this.zoomLevel=1,this.draggingClamp=null,this.clampDragStartX=0,this.clampDragStartValue=0,this.isFocused=!1,this.handleFocus=()=>{this.isFocused=!0},this.handleBlur=()=>{this.isFocused=!1},this.handleMouseDown=p=>{this.isDragging=!0,this.dragStartX=p.clientX,this.dragStartOffset=this.offsetX,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)},this.handleMouseMove=p=>{if(!this.isDragging)return;const i=p.clientX-this.dragStartX;this.offsetX=this.dragStartOffset+i,this.requestUpdate()},this.handleMouseUp=()=>{this.isDragging=!1,document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)},this.handleClampMouseDown=(p,i)=>{p.preventDefault(),p.stopPropagation(),this.draggingClamp=i,this.clampDragStartX=p.clientX,this.clampDragStartValue=i==="left"?this.leftClamp:this.rightClamp,document.addEventListener("mousemove",this.handleClampMouseMove),document.addEventListener("mouseup",this.handleClampMouseUp)},this.handleClampMouseMove=p=>{if(!this.draggingClamp||!this.text)return;const i=p.clientX-this.clampDragStartX,r=this.fontSize*this.zoomLevel/2,u=Math.round(i/r);let o=this.clampDragStartValue+u;o=Math.max(0,Math.min(this.text.length,o)),this.draggingClamp==="left"?this.leftClamp=Math.min(o,this.rightClamp-1):this.rightClamp=Math.max(o,this.leftClamp+1),this.dispatchClampChangeEvent(),this.requestUpdate()},this.handleClampMouseUp=()=>{this.draggingClamp=null,document.removeEventListener("mousemove",this.handleClampMouseMove),document.removeEventListener("mouseup",this.handleClampMouseUp)},this.handleKeyDown=p=>{this.isFocused&&((p.metaKey||p.ctrlKey)&&(p.code==="Equal"||p.key==="+"||p.key==="=")?(p.preventDefault(),p.stopPropagation(),this.zoomIn()):(p.metaKey||p.ctrlKey)&&(p.code==="Minus"||p.key==="-")?(p.preventDefault(),p.stopPropagation(),this.zoomOut()):(p.metaKey||p.ctrlKey)&&(p.code==="Digit0"||p.key==="0")&&(p.preventDefault(),p.stopPropagation(),this.resetView()))}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("focus",this.handleFocus),this.addEventListener("blur",this.handleBlur),this.tabIndex=0}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("focus",this.handleFocus),this.removeEventListener("blur",this.handleBlur)}dispatchClampChangeEvent(){this.dispatchEvent(new CustomEvent("text-clamps-changed",{detail:{leftClamp:this.leftClamp,rightClamp:this.rightClamp,text:this.text.substring(this.leftClamp,this.rightClamp)},bubbles:!0,composed:!0}))}zoomIn(){const p=this.zoomLevel;if(this.zoomLevel=Math.min(3,this.zoomLevel*1.2),this.leftClamp>0){const i=this.fontSize*p/2,r=this.leftClamp*i,u=this.fontSize*this.zoomLevel/2,o=this.leftClamp*u;this.offsetX+=r-o}this.requestUpdate()}zoomOut(){const p=this.zoomLevel;if(this.zoomLevel=Math.max(.5,this.zoomLevel/1.2),this.leftClamp>0){const i=this.fontSize*p/2,r=this.leftClamp*i,u=this.fontSize*this.zoomLevel/2,o=this.leftClamp*u;this.offsetX+=r-o}this.requestUpdate()}resetView(){this.offsetX=0,this.zoomLevel=1,this.requestUpdate()}getClearSegmentText(){if(!this.text)return{text:"",startChar:0,endChar:0};const p=this.text.length,i=.3,r=this.shadowRoot?.querySelector(".text-viewport")?.clientWidth||800,u=this.fontSize*this.zoomLevel/2,o=Math.floor(r/u),l=Math.floor(o*i),h=Math.floor(-this.offsetX/u),d=Math.max(0,h+Math.floor((o-l)/2)),v=Math.min(p,d+l);return{text:this.text.substring(d,v),startChar:d,endChar:v}}renderStyledText(){if(!this.text)return"";const p=[];if(this.leftClamp>0){const i=this.text.substring(0,this.leftClamp);p.push(Kt`<span class="protected">${i}</span>`)}if(this.rightClamp>this.leftClamp){const i=this.text.substring(this.leftClamp,this.rightClamp);p.push(Kt`<span class="current">${i}</span>`)}if(this.rightClamp<this.text.length){const i=this.text.substring(this.rightClamp);p.push(Kt`<span class="upcoming">${i}</span>`)}return p}render(){const p=this.fontSize*this.zoomLevel,i=this.fontSize*this.zoomLevel/2,r=this.leftClamp*i+this.offsetX,u=this.rightClamp*i+this.offsetX;return Kt`
      <div class="container">
        <div
          class="text-viewport ${this.isDragging?"dragging":""}"
          @mousedown=${this.handleMouseDown}
          style="--left-clamp-text-pos: ${r}px; --right-clamp-text-pos: ${u}px;"
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
    `}};le.styles=mn`
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
  `;de([_e({type:String})],le.prototype,"text",2);de([_e({type:Number})],le.prototype,"fontSize",2);de([_e({type:Number})],le.prototype,"leftClamp",2);de([_e({type:Number})],le.prototype,"rightClamp",2);de([Ut()],le.prototype,"offsetX",2);de([Ut()],le.prototype,"isDragging",2);de([Ut()],le.prototype,"dragStartX",2);de([Ut()],le.prototype,"dragStartOffset",2);de([Ut()],le.prototype,"zoomLevel",2);de([Ut()],le.prototype,"draggingClamp",2);de([Ut()],le.prototype,"clampDragStartX",2);de([Ut()],le.prototype,"clampDragStartValue",2);de([Ut()],le.prototype,"isFocused",2);le=de([gn("smoked-glass-text")],le);const Ji=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ds=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ur=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var fs=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,we=(p,i,r,u)=>{for(var o=u>1?void 0:u?ps(i,r):i,l=p.length-1,h;l>=0;l--)(h=p[l])&&(o=(u?h(i,r,o):h(o))||o);return u&&o&&fs(i,r,o),o};let he=class extends Ce{constructor(){super(...arguments),this.audioBlob=null,this.existingAnnotation=null,this.fullTranscript="",this.transcriptEntered=!1,this.leftClamp=0,this.rightClamp=3,this.totalDuration=0,this.annotations=[],this.isComplete=!1,this.textLeftClamp=0,this.textRightClamp=0}willUpdate(p){super.willUpdate(p),p.has("existingAnnotation")&&this.existingAnnotation&&this.loadExistingAnnotation()}loadExistingAnnotation(){if(this.existingAnnotation)if(this.fullTranscript=this.existingAnnotation.fullText||"",this.existingAnnotation.segments&&this.existingAnnotation.segments.length>0){this.annotations=this.existingAnnotation.segments.map(r=>({id:r.id,audioStart:r.start,audioEnd:r.end,text:r.text,textStart:0,textEnd:r.text.length,createdAt:Date.now()})),this.transcriptEntered=!0;const p=this.annotations[this.annotations.length-1];this.leftClamp=p.audioEnd,this.rightClamp=Math.min(this.leftClamp+3,this.totalDuration);const i=this.annotations.map(r=>r.text).join(" ");this.textLeftClamp=i.length,this.textRightClamp=Math.min(this.textLeftClamp+100,this.fullTranscript.length)}else this.fullTranscript&&(this.transcriptEntered=!1)}get currentSegmentNumber(){return this.annotations.length+1}get currentSegmentText(){return this.fullTranscript.substring(this.textLeftClamp,this.textRightClamp)}handleMarkersChanged(p){if(this.rightClamp=p.detail.end,this.leftClamp=p.detail.start,this.fullTranscript&&this.totalDuration>0){const i=this.fullTranscript.length/this.totalDuration,r=Math.floor(i*this.rightClamp);this.textRightClamp=Math.min(r,this.fullTranscript.length),this.textRightClamp<this.textLeftClamp&&(this.textRightClamp=this.textLeftClamp)}}handleDurationLoaded(p){this.totalDuration=p.detail.duration}handleTranscriptInput(p){const i=p.target;this.fullTranscript=i.value}beginAnnotation(){if(!this.fullTranscript.trim()){alert("Please enter the full transcript before beginning annotation.");return}this.transcriptEntered=!0,this.leftClamp=0,this.rightClamp=Math.min(3,this.totalDuration),this.textLeftClamp=0;const p=this.fullTranscript.length/this.totalDuration;this.textRightClamp=Math.floor(p*this.rightClamp),setTimeout(()=>{const i=this.shadowRoot?.querySelector("audio-waveform-player");i&&(i.leftClamp=this.leftClamp,i.rightClamp=this.rightClamp,i.loopEnabled=!0)},100)}confirmSegment(){if(!this.currentSegmentText.trim()){alert("Please adjust the segment boundaries to include text.");return}const p={id:crypto.randomUUID(),audioStart:this.leftClamp,audioEnd:this.rightClamp,text:this.currentSegmentText,textStart:this.textLeftClamp,textEnd:this.textRightClamp,createdAt:Date.now()};this.annotations=[...this.annotations,p],this.advanceToNextSegment(),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{annotation:p,allAnnotations:this.annotations},bubbles:!0,composed:!0}))}advanceToNextSegment(){if(this.rightClamp>=this.totalDuration-.1){this.isComplete=!0;return}this.leftClamp=this.rightClamp,this.textLeftClamp=this.textRightClamp;const p=3;this.rightClamp=Math.min(this.leftClamp+p,this.totalDuration);const i=this.fullTranscript.length/this.totalDuration,r=Math.floor(i*this.rightClamp);this.textRightClamp=Math.min(r,this.fullTranscript.length);const u=this.shadowRoot?.querySelector("audio-waveform-player");u&&(u.leftClamp=this.leftClamp,u.rightClamp=this.rightClamp,u.loopEnabled=!0,u.autoCenterSegment&&u.autoCenterSegment());const o=this.shadowRoot?.querySelector("smoked-glass-text");if(o){o.leftClamp=this.textLeftClamp,o.rightClamp=this.textRightClamp;const l=o.fontSize*o.zoomLevel/2,h=this.textLeftClamp*l,d=Math.min(20,this.textLeftClamp);o.offsetX=-(h-d*l)}}dispatchCompletionEvent(){this.dispatchEvent(new CustomEvent("annotation-complete",{detail:{annotations:this.annotations,totalSegments:this.annotations.length,totalDuration:this.totalDuration,fullText:this.fullTranscript},bubbles:!0,composed:!0}))}saveProgress(){const p=new CustomEvent("progress-saved",{detail:{annotations:this.annotations},bubbles:!0,composed:!0});this.dispatchEvent(p),alert(`Progress saved! ${this.annotations.length} segments annotated.`)}render(){return this.isComplete?Kt`
        <div class="workflow-container">
          <div class="header">
            <h1 class="title">${Qt(ur)} Annotation Complete!</h1>
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
              ${Qt(ur)}
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
              ${Qt(ds)}
              <span>Save Progress</span>
            </button>

            ${this.isComplete?Kt`
                  <button
                    class="action-btn"
                    @click=${this.dispatchCompletionEvent}
                    style="background: linear-gradient(135deg, #39ff14 0%, #00cc88 100%); color: #0a0a0f;"
                  >
                    ${Qt(ur)}
                    <span>Finish & Close</span>
                  </button>
                `:Kt`
                  <button
                    class="action-btn"
                    @click=${this.confirmSegment}
                    ?disabled=${!this.currentSegmentText.trim()}
                  >
                    <span>Confirm Segment</span>
                    ${Qt(Ji)}
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
              ${Qt(Ji)}
            </button>
          </div>
        </div>
      `}};he.styles=mn`
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
  `;we([_e({type:Object})],he.prototype,"audioBlob",2);we([_e({type:Object})],he.prototype,"existingAnnotation",2);we([Ut()],he.prototype,"fullTranscript",2);we([Ut()],he.prototype,"transcriptEntered",2);we([Ut()],he.prototype,"leftClamp",2);we([Ut()],he.prototype,"rightClamp",2);we([Ut()],he.prototype,"totalDuration",2);we([Ut()],he.prototype,"annotations",2);we([Ut()],he.prototype,"isComplete",2);we([Ut()],he.prototype,"textLeftClamp",2);we([Ut()],he.prototype,"textRightClamp",2);he=we([gn("annotation-workflow")],he);const ms=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,gs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var vs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,ni=(p,i,r,u)=>{for(var o=u>1?void 0:u?ys(i,r):i,l=p.length-1,h;l>=0;l--)(h=p[l])&&(o=(u?h(i,r,o):h(o))||o);return u&&o&&vs(i,r,o),o};let Dn=class extends Ce{constructor(){super(...arguments),this.recording=null,this.existingAnnotation=null}async connectedCallback(){super.connectedCallback(),this.recording?.isAnnotated&&(this.existingAnnotation=await Pn(this.recording.id)||null)}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async handleStartOver(){!this.recording||!confirm("Are you sure you want to start over? This will delete all current annotations.")||(await Mo(this.recording.id),this.existingAnnotation=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("annotation-reset",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})))}async handleAnnotationComplete(p){if(!this.recording)return;const{annotations:i,fullText:r}=p.detail,u={recordingId:this.recording.id,fullText:r,segments:i,completedAt:Date.now(),updatedAt:Date.now()};await Vr(u),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})),this.handleClose()}async handleAnnotationSaved(p){if(!this.recording)return;const{allAnnotations:i}=p.detail,r=await Pn(this.recording.id);r&&(r.segments=i,r.updatedAt=Date.now(),await Vr(r))}async handleProgressSaved(p){if(!this.recording)return;const{annotations:i}=p.detail;let r=await Pn(this.recording.id);r?(r.segments=i,r.updatedAt=Date.now()):r={recordingId:this.recording.id,fullText:"",segments:i,completedAt:0,updatedAt:Date.now()},await Vr(r)}render(){return this.recording?Kt`
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
                  ${Qt(gs)}
                  <span>Start Over</span>
                </button>
              `:null}

          <button
            class="header-btn"
            @click=${this.handleClose}
            title="Close without saving"
          >
            ${Qt(ms)}
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
    `:Kt`<div>No recording selected</div>`}};Dn.styles=mn`
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
  `;ni([_e({type:Object})],Dn.prototype,"recording",2);ni([Ut()],Dn.prototype,"existingAnnotation",2);Dn=ni([gn("annotation-modal")],Dn);const bs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ws=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,_s=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,xs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ks=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ta=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Ss=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Cs=Object.defineProperty,As=Object.getOwnPropertyDescriptor,vn=(p,i,r,u)=>{for(var o=u>1?void 0:u?As(i,r):i,l=p.length-1,h;l>=0;l--)(h=p[l])&&(o=(u?h(i,r,o):h(o))||o);return u&&o&&Cs(i,r,o),o};let Ue=class extends Ce{constructor(){super(...arguments),this.recordings=[],this.isRecording=!1,this.recordingDuration=0,this.selectedRecording=null,this.isModalOpen=!1,this.microphoneService=null,this.mediaRecorderService=null,this.recordingTimer=null}async connectedCallback(){super.connectedCallback(),await this.loadRecordings()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async loadRecordings(){this.recordings=await la()}async startRecording(){try{this.microphoneService=new So;const p=await this.microphoneService.requestPermission();this.mediaRecorderService=new Co,await this.mediaRecorderService.initialize(p),this.mediaRecorderService.start(),this.isRecording=!0,this.recordingDuration=0,this.recordingTimer=window.setInterval(()=>{this.recordingDuration+=.1,this.requestUpdate()},100)}catch(p){console.error("Failed to start recording:",p),alert("Failed to start recording. Please check microphone permissions."),this.cleanup()}}async stopRecording(){if(this.mediaRecorderService)try{const p=await this.mediaRecorderService.stop(),i=this.recordingDuration,u=`Untitled ${await Bo()}`;await sa({title:u,audioBlob:p,duration:i,source:"recording"}),await this.loadRecordings()}catch(p){console.error("Failed to save recording:",p),alert("Failed to save recording.")}finally{this.cleanup()}}cleanup(){this.isRecording=!1,this.recordingDuration=0,this.recordingTimer&&(clearInterval(this.recordingTimer),this.recordingTimer=null),this.microphoneService?.release(),this.mediaRecorderService=null,this.microphoneService=null}async handleUpload(){const p=await Uo();if(!(!p||p.length===0))try{await Lo(p),await this.loadRecordings()}catch(i){console.error("Failed to upload files:",i),alert("Failed to upload files.")}}async handleTitleChange(p,i){await Do(p.id,{title:i}),await this.loadRecordings()}async handlePlay(p){new Audio(URL.createObjectURL(p.audioBlob)).play()}handleAnnotate(p){this.selectedRecording=p,this.isModalOpen=!0}async handleExport(p){try{await Ho(p.id)}catch(i){console.error("Failed to export recording:",i),alert(i instanceof Error?i.message:"Failed to export recording.")}}async handleDelete(p){confirm(`Are you sure you want to delete "${p.title}"? This cannot be undone.`)&&(await Io(p.id),await this.loadRecordings())}async handleExportAll(){try{await Zo()}catch(p){console.error("Failed to export all recordings:",p),alert(p instanceof Error?p.message:"Failed to export recordings.")}}handleModalClose(){this.isModalOpen=!1,this.selectedRecording=null,this.loadRecordings()}formatDuration(p){const i=Math.floor(p/60),r=Math.floor(p%60);return`${i}:${r.toString().padStart(2,"0")}`}render(){return Kt`
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
              ${Qt(this.isRecording?ws:bs)}
              <span>${this.isRecording?"Stop Recording":"Record Audio"}</span>
            </button>

            ${this.isRecording?Kt`<div class="duration">${this.formatDuration(this.recordingDuration)}</div>`:Kt`
                  <button class="upload-btn" @click=${this.handleUpload}>
                    ${Qt(_s)}
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
                  ${Qt(ta)}
                  <span>Export All</span>
                </button>
              `:null}
        </div>

        <div class="recordings-table">
          ${this.recordings.length===0?Kt`
                <div class="empty-state">
                  <div class="empty-icon">${Qt(Ss)}</div>
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
                            ${p.isAnnotated?Kt`${Qt(ur)}`:""}
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
                                ${Qt(_a)}
                                <span>Play</span>
                              </button>

                              <button
                                class="action-btn"
                                @click=${()=>this.handleAnnotate(p)}
                                title="Annotate audio"
                              >
                                ${Qt(xs)}
                                <span>Annotate</span>
                              </button>

                              ${p.isAnnotated?Kt`
                                    <button
                                      class="action-btn"
                                      @click=${()=>this.handleExport(p)}
                                      title="Export annotation"
                                    >
                                      ${Qt(ta)}
                                      <span>Export</span>
                                    </button>
                                  `:null}

                              <button
                                class="action-btn danger"
                                @click=${()=>this.handleDelete(p)}
                                title="Delete recording"
                              >
                                ${Qt(ks)}
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
    `}};Ue.styles=mn`
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
  `;vn([Ut()],Ue.prototype,"recordings",2);vn([Ut()],Ue.prototype,"isRecording",2);vn([Ut()],Ue.prototype,"recordingDuration",2);vn([Ut()],Ue.prototype,"selectedRecording",2);vn([Ut()],Ue.prototype,"isModalOpen",2);Ue=vn([gn("minimal-recorder")],Ue);const xa=p=>{document.body.setAttribute("data-theme",p)};xa(Tn.getCurrentTheme());Tn.subscribe(p=>{xa(p.currentTheme)});

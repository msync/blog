(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();const dr=globalThis,ri=dr.ShadowRoot&&(dr.ShadyCSS===void 0||dr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ii=Symbol(),Ki=new WeakMap;let ua=class{constructor(n,r,o){if(this._$cssResult$=!0,o!==ii)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=r}get styleSheet(){let n=this.o;const r=this.t;if(ri&&n===void 0){const o=r!==void 0&&r.length===1;o&&(n=Ki.get(r)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),o&&Ki.set(r,n))}return n}toString(){return this.cssText}};const ss=l=>new ua(typeof l=="string"?l:l+"",void 0,ii),$e=(l,...n)=>{const r=l.length===1?l[0]:n.reduce(((o,s,c)=>o+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+l[c+1]),l[0]);return new ua(r,l,ii)},os=(l,n)=>{if(ri)l.adoptedStyleSheets=n.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(const r of n){const o=document.createElement("style"),s=dr.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=r.cssText,l.appendChild(o)}},qi=ri?l=>l:l=>l instanceof CSSStyleSheet?(n=>{let r="";for(const o of n.cssRules)r+=o.cssText;return ss(r)})(l):l;const{is:ls,defineProperty:cs,getOwnPropertyDescriptor:us,getOwnPropertyNames:ds,getOwnPropertySymbols:hs,getPrototypeOf:fs}=Object,br=globalThis,Wi=br.trustedTypes,ps=Wi?Wi.emptyScript:"",ms=br.reactiveElementPolyfillSupport,In=(l,n)=>l,pr={toAttribute(l,n){switch(n){case Boolean:l=l?ps:null;break;case Object:case Array:l=l==null?l:JSON.stringify(l)}return l},fromAttribute(l,n){let r=l;switch(n){case Boolean:r=l!==null;break;case Number:r=l===null?null:Number(l);break;case Object:case Array:try{r=JSON.parse(l)}catch{r=null}}return r}},ai=(l,n)=>!ls(l,n),Vi={attribute:!0,type:String,converter:pr,reflect:!1,useDefault:!1,hasChanged:ai};Symbol.metadata??=Symbol("metadata"),br.litPropertyMetadata??=new WeakMap;let yn=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,r=Vi){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(n,r),!r.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(n,o,r);s!==void 0&&cs(this.prototype,n,s)}}static getPropertyDescriptor(n,r,o){const{get:s,set:c}=us(this.prototype,n)??{get(){return this[r]},set(d){this[r]=d}};return{get:s,set(d){const f=s?.call(this);c?.call(this,d),this.requestUpdate(n,f,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??Vi}static _$Ei(){if(this.hasOwnProperty(In("elementProperties")))return;const n=fs(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(In("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(In("properties"))){const r=this.properties,o=[...ds(r),...hs(r)];for(const s of o)this.createProperty(s,r[s])}const n=this[Symbol.metadata];if(n!==null){const r=litPropertyMetadata.get(n);if(r!==void 0)for(const[o,s]of r)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const s=this._$Eu(r,o);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const r=[];if(Array.isArray(n)){const o=new Set(n.flat(1/0).reverse());for(const s of o)r.unshift(qi(s))}else n!==void 0&&r.push(qi(n));return r}static _$Eu(n,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((n=>n(this)))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){const n=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(n.set(o,this[o]),delete this[o]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return os(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((n=>n.hostConnected?.()))}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach((n=>n.hostDisconnected?.()))}attributeChangedCallback(n,r,o){this._$AK(n,o)}_$ET(n,r){const o=this.constructor.elementProperties.get(n),s=this.constructor._$Eu(n,o);if(s!==void 0&&o.reflect===!0){const c=(o.converter?.toAttribute!==void 0?o.converter:pr).toAttribute(r,o.type);this._$Em=n,c==null?this.removeAttribute(s):this.setAttribute(s,c),this._$Em=null}}_$AK(n,r){const o=this.constructor,s=o._$Eh.get(n);if(s!==void 0&&this._$Em!==s){const c=o.getPropertyOptions(s),d=typeof c.converter=="function"?{fromAttribute:c.converter}:c.converter?.fromAttribute!==void 0?c.converter:pr;this._$Em=s;const f=d.fromAttribute(r,c.type);this[s]=f??this._$Ej?.get(s)??f,this._$Em=null}}requestUpdate(n,r,o){if(n!==void 0){const s=this.constructor,c=this[n];if(o??=s.getPropertyOptions(n),!((o.hasChanged??ai)(c,r)||o.useDefault&&o.reflect&&c===this._$Ej?.get(n)&&!this.hasAttribute(s._$Eu(n,o))))return;this.C(n,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,r,{useDefault:o,reflect:s,wrapped:c},d){o&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,d??r??this[n]),c!==!0||d!==void 0)||(this._$AL.has(n)||(this.hasUpdated||o||(r=void 0),this._$AL.set(n,r)),s===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,c]of this._$Ep)this[s]=c;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,c]of o){const{wrapped:d}=c,f=this[s];d!==!0||this._$AL.has(s)||f===void 0||this.C(s,void 0,c,f)}}let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(r)):this._$EM()}catch(o){throw n=!1,this._$EM(),o}n&&this._$AE(r)}willUpdate(n){}_$AE(n){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach((r=>this._$ET(r,this[r]))),this._$EM()}updated(n){}firstUpdated(n){}};yn.elementStyles=[],yn.shadowRootOptions={mode:"open"},yn[In("elementProperties")]=new Map,yn[In("finalized")]=new Map,ms?.({ReactiveElement:yn}),(br.reactiveElementVersions??=[]).push("2.1.1");const si=globalThis,mr=si.trustedTypes,Hi=mr?mr.createPolicy("lit-html",{createHTML:l=>l}):void 0,da="$lit$",Ke=`lit$${Math.random().toFixed(9).slice(2)}$`,ha="?"+Ke,gs=`<${ha}>`,en=document,Bn=()=>en.createComment(""),Dn=l=>l===null||typeof l!="object"&&typeof l!="function",oi=Array.isArray,vs=l=>oi(l)||typeof l?.[Symbol.iterator]=="function",Xr=`[ 	
\f\r]`,$n=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zi=/-->/g,Yi=/>/g,Je=RegExp(`>|${Xr}(?:([^\\s"'>=/]+)(${Xr}*=${Xr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gi=/'/g,Xi=/"/g,fa=/^(?:script|style|textarea|title)$/i,ys=l=>(n,...r)=>({_$litType$:l,strings:n,values:r}),Ft=ys(1),nn=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),Qi=new WeakMap,tn=en.createTreeWalker(en,129);function pa(l,n){if(!oi(l)||!l.hasOwnProperty("raw"))throw Error("invalid template strings array");return Hi!==void 0?Hi.createHTML(n):n}const bs=(l,n)=>{const r=l.length-1,o=[];let s,c=n===2?"<svg>":n===3?"<math>":"",d=$n;for(let f=0;f<r;f++){const m=l[f];let b,k,_=-1,w=0;for(;w<m.length&&(d.lastIndex=w,k=d.exec(m),k!==null);)w=d.lastIndex,d===$n?k[1]==="!--"?d=Zi:k[1]!==void 0?d=Yi:k[2]!==void 0?(fa.test(k[2])&&(s=RegExp("</"+k[2],"g")),d=Je):k[3]!==void 0&&(d=Je):d===Je?k[0]===">"?(d=s??$n,_=-1):k[1]===void 0?_=-2:(_=d.lastIndex-k[2].length,b=k[1],d=k[3]===void 0?Je:k[3]==='"'?Xi:Gi):d===Xi||d===Gi?d=Je:d===Zi||d===Yi?d=$n:(d=Je,s=void 0);const v=d===Je&&l[f+1].startsWith("/>")?" ":"";c+=d===$n?m+gs:_>=0?(o.push(b),m.slice(0,_)+da+m.slice(_)+Ke+v):m+Ke+(_===-2?f:v)}return[pa(l,c+(l[r]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),o]};class Mn{constructor({strings:n,_$litType$:r},o){let s;this.parts=[];let c=0,d=0;const f=n.length-1,m=this.parts,[b,k]=bs(n,r);if(this.el=Mn.createElement(b,o),tn.currentNode=this.el.content,r===2||r===3){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(s=tn.nextNode())!==null&&m.length<f;){if(s.nodeType===1){if(s.hasAttributes())for(const _ of s.getAttributeNames())if(_.endsWith(da)){const w=k[d++],v=s.getAttribute(_).split(Ke),C=/([.?@])?(.*)/.exec(w);m.push({type:1,index:c,name:C[2],strings:v,ctor:C[1]==="."?_s:C[1]==="?"?xs:C[1]==="@"?ks:wr}),s.removeAttribute(_)}else _.startsWith(Ke)&&(m.push({type:6,index:c}),s.removeAttribute(_));if(fa.test(s.tagName)){const _=s.textContent.split(Ke),w=_.length-1;if(w>0){s.textContent=mr?mr.emptyScript:"";for(let v=0;v<w;v++)s.append(_[v],Bn()),tn.nextNode(),m.push({type:2,index:++c});s.append(_[w],Bn())}}}else if(s.nodeType===8)if(s.data===ha)m.push({type:2,index:c});else{let _=-1;for(;(_=s.data.indexOf(Ke,_+1))!==-1;)m.push({type:7,index:c}),_+=Ke.length-1}c++}}static createElement(n,r){const o=en.createElement("template");return o.innerHTML=n,o}}function bn(l,n,r=l,o){if(n===nn)return n;let s=o!==void 0?r._$Co?.[o]:r._$Cl;const c=Dn(n)?void 0:n._$litDirective$;return s?.constructor!==c&&(s?._$AO?.(!1),c===void 0?s=void 0:(s=new c(l),s._$AT(l,r,o)),o!==void 0?(r._$Co??=[])[o]=s:r._$Cl=s),s!==void 0&&(n=bn(l,s._$AS(l,n.values),s,o)),n}class ws{constructor(n,r){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:r},parts:o}=this._$AD,s=(n?.creationScope??en).importNode(r,!0);tn.currentNode=s;let c=tn.nextNode(),d=0,f=0,m=o[0];for(;m!==void 0;){if(d===m.index){let b;m.type===2?b=new Fn(c,c.nextSibling,this,n):m.type===1?b=new m.ctor(c,m.name,m.strings,this,n):m.type===6&&(b=new Ss(c,this,n)),this._$AV.push(b),m=o[++f]}d!==m?.index&&(c=tn.nextNode(),d++)}return tn.currentNode=en,s}p(n){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(n,o,r),r+=o.strings.length-2):o._$AI(n[r])),r++}}class Fn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,r,o,s){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=n,this._$AB=r,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&n?.nodeType===11&&(n=r.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,r=this){n=bn(this,n,r),Dn(n)?n===ee||n==null||n===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):n!==this._$AH&&n!==nn&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):vs(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==ee&&Dn(this._$AH)?this._$AA.nextSibling.data=n:this.T(en.createTextNode(n)),this._$AH=n}$(n){const{values:r,_$litType$:o}=n,s=typeof o=="number"?this._$AC(n):(o.el===void 0&&(o.el=Mn.createElement(pa(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(r);else{const c=new ws(s,this),d=c.u(this.options);c.p(r),this.T(d),this._$AH=c}}_$AC(n){let r=Qi.get(n.strings);return r===void 0&&Qi.set(n.strings,r=new Mn(n)),r}k(n){oi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,s=0;for(const c of n)s===r.length?r.push(o=new Fn(this.O(Bn()),this.O(Bn()),this,this.options)):o=r[s],o._$AI(c),s++;s<r.length&&(this._$AR(o&&o._$AB.nextSibling,s),r.length=s)}_$AR(n=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);n!==this._$AB;){const o=n.nextSibling;n.remove(),n=o}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}}class wr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,r,o,s,c){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=n,this.name=r,this._$AM=s,this.options=c,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ee}_$AI(n,r=this,o,s){const c=this.strings;let d=!1;if(c===void 0)n=bn(this,n,r,0),d=!Dn(n)||n!==this._$AH&&n!==nn,d&&(this._$AH=n);else{const f=n;let m,b;for(n=c[0],m=0;m<c.length-1;m++)b=bn(this,f[o+m],r,m),b===nn&&(b=this._$AH[m]),d||=!Dn(b)||b!==this._$AH[m],b===ee?n=ee:n!==ee&&(n+=(b??"")+c[m+1]),this._$AH[m]=b}d&&!s&&this.j(n)}j(n){n===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class _s extends wr{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===ee?void 0:n}}class xs extends wr{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==ee)}}class ks extends wr{constructor(n,r,o,s,c){super(n,r,o,s,c),this.type=5}_$AI(n,r=this){if((n=bn(this,n,r,0)??ee)===nn)return;const o=this._$AH,s=n===ee&&o!==ee||n.capture!==o.capture||n.once!==o.once||n.passive!==o.passive,c=n!==ee&&(o===ee||s);s&&this.element.removeEventListener(this.name,this,o),c&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}}class Ss{constructor(n,r,o){this.element=n,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(n){bn(this,n)}}const Cs=si.litHtmlPolyfillSupport;Cs?.(Mn,Fn),(si.litHtmlVersions??=[]).push("3.3.1");const As=(l,n,r)=>{const o=r?.renderBefore??n;let s=o._$litPart$;if(s===void 0){const c=r?.renderBefore??null;o._$litPart$=s=new Fn(n.insertBefore(Bn(),c),c,void 0,r??{})}return s._$AI(l),s};const li=globalThis;let ge=class extends yn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=As(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return nn}};ge._$litElement$=!0,ge.finalized=!0,li.litElementHydrateSupport?.({LitElement:ge});const Es=li.litElementPolyfillSupport;Es?.({LitElement:ge});(li.litElementVersions??=[]).push("4.2.1");const Ie=l=>(n,r)=>{r!==void 0?r.addInitializer((()=>{customElements.define(l,n)})):customElements.define(l,n)};const Os={attribute:!0,type:String,converter:pr,reflect:!1,hasChanged:ai},Ps=(l=Os,n,r)=>{const{kind:o,metadata:s}=r;let c=globalThis.litPropertyMetadata.get(s);if(c===void 0&&globalThis.litPropertyMetadata.set(s,c=new Map),o==="setter"&&((l=Object.create(l)).wrapped=!0),c.set(r.name,l),o==="accessor"){const{name:d}=r;return{set(f){const m=n.get.call(this);n.set.call(this,f),this.requestUpdate(d,m,l)},init(f){return f!==void 0&&this.C(d,void 0,l,f),f}}}if(o==="setter"){const{name:d}=r;return function(f){const m=this[d];n.call(this,f),this.requestUpdate(d,m,l)}}throw Error("Unsupported decorator location: "+o)};function se(l){return(n,r)=>typeof r=="object"?Ps(l,n,r):((o,s,c)=>{const d=s.hasOwnProperty(c);return s.constructor.createProperty(c,o),d?Object.getOwnPropertyDescriptor(s,c):void 0})(l,n,r)}function ne(l){return se({...l,state:!0,attribute:!1})}const Ts=(l,n,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof n!="object"&&Object.defineProperty(l,n,r),r);function _r(l,n){return(r,o,s)=>{const c=d=>d.renderRoot?.querySelector(l)??null;return Ts(r,o,{get(){return c(this)}})}}const $s={CHILD:2},Is=l=>(...n)=>({_$litDirective$:l,values:n});class Rs{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,r,o){this._$Ct=n,this._$AM=r,this._$Ci=o}_$AS(n,r){return this.update(n,r)}update(n,r){return this.render(...r)}}class ti extends Rs{constructor(n){if(super(n),this.it=ee,n.type!==$s.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(n){if(n===ee||n==null)return this._t=void 0,this.it=n;if(n===nn)return n;if(typeof n!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(n===this.it)return this._t;this.it=n;const r=[n];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}ti.directiveName="unsafeHTML",ti.resultType=1;const Wt=Is(ti);class zs{constructor(){this.stream=null}async requestPermission(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("MediaDevices API not supported in this browser");try{return this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1,sampleRate:48e3,channelCount:1}}),this.stream}catch(n){throw n instanceof Error?new Error(`Microphone access denied: ${n.message}`):new Error("Microphone access denied")}}getStream(){return this.stream}release(){this.stream&&(this.stream.getTracks().forEach(n=>n.stop()),this.stream=null)}isActive(){return this.stream!==null&&this.stream.active}}class Bs{constructor(){this.mediaRecorder=null,this.chunks=[]}async initialize(n){if(!window.MediaRecorder)throw new Error("MediaRecorder API not supported in this browser");const r=this.getSupportedMimeType();if(!r)throw new Error("No supported audio MIME type found");this.mediaRecorder=new MediaRecorder(n,{mimeType:r,audioBitsPerSecond:128e3}),this.mediaRecorder.ondataavailable=o=>{o.data.size>0&&(this.chunks.push(o.data),this.onDataAvailableCallback?.(o.data))},this.mediaRecorder.onstop=()=>{this.onStateChangeCallback?.("inactive")},this.mediaRecorder.onstart=()=>{this.onStateChangeCallback?.("recording")},this.mediaRecorder.onpause=()=>{this.onStateChangeCallback?.("paused")},this.mediaRecorder.onresume=()=>{this.onStateChangeCallback?.("recording")}}getSupportedMimeType(){return["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/mp4"].find(r=>MediaRecorder.isTypeSupported(r))||null}start(n=100){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");this.mediaRecorder.state!=="recording"&&(this.chunks=[],this.mediaRecorder.start(n))}async stop(){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");return this.mediaRecorder.state==="inactive"?new Blob(this.chunks,{type:this.mediaRecorder.mimeType}):new Promise(n=>{this.mediaRecorder.onstop=()=>{const r=new Blob(this.chunks,{type:this.mediaRecorder.mimeType});this.onStateChangeCallback?.("inactive"),n(r)},this.mediaRecorder.stop()})}pause(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.pause()}resume(){this.mediaRecorder?.state==="paused"&&this.mediaRecorder.resume()}getState(){return this.mediaRecorder?.state||"inactive"}getMimeType(){return this.mediaRecorder?.mimeType||""}onDataAvailable(n){this.onDataAvailableCallback=n}onStateChange(n){this.onStateChangeCallback=n}release(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.stop(),this.mediaRecorder=null,this.chunks=[]}}const Ds="modulepreload",Ms=function(l){return"/aidio/"+l},Ji={},js=function(n,r,o){let s=Promise.resolve();if(r&&r.length>0){let b=function(k){return Promise.all(k.map(_=>Promise.resolve(_).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};var d=b;document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");s=b(r.map(k=>{if(k=Ms(k),k in Ji)return;Ji[k]=!0;const _=k.endsWith(".css"),w=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${k}"]${w}`))return;const v=document.createElement("link");if(v.rel=_?"stylesheet":Ds,_||(v.as="script"),v.crossOrigin="",v.href=k,m&&v.setAttribute("nonce",m),document.head.appendChild(v),_)return new Promise((C,y)=>{v.addEventListener("load",C),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${k}`)))})}))}function c(f){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=f,window.dispatchEvent(m),!m.defaultPrevented)throw f}return s.then(f=>{for(const m of f||[])m.status==="rejected"&&c(m.reason);return n().catch(c)})};var Pe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ma(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var hr={exports:{}},Fs=hr.exports,ta;function Ns(){return ta||(ta=1,(function(l,n){(function(r,o){l.exports=o()})(Fs,function(){var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,a){i.__proto__=a}||function(i,a){for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(i[u]=a[u])})(t,e)},o=function(){return(o=Object.assign||function(t){for(var e,i=1,a=arguments.length;i<a;i++)for(var u in e=arguments[i])Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t}).apply(this,arguments)};function s(t,e,i){for(var a,u=0,p=e.length;u<p;u++)!a&&u in e||((a=a||Array.prototype.slice.call(e,0,u))[u]=e[u]);return t.concat(a||Array.prototype.slice.call(e))}var c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Pe,d=Object.keys,f=Array.isArray;function m(t,e){return typeof e!="object"||d(e).forEach(function(i){t[i]=e[i]}),t}typeof Promise>"u"||c.Promise||(c.Promise=Promise);var b=Object.getPrototypeOf,k={}.hasOwnProperty;function _(t,e){return k.call(t,e)}function w(t,e){typeof e=="function"&&(e=e(b(t))),(typeof Reflect>"u"?d:Reflect.ownKeys)(e).forEach(function(i){C(t,i,e[i])})}var v=Object.defineProperty;function C(t,e,i,a){v(t,e,m(i&&_(i,"get")&&typeof i.get=="function"?{get:i.get,set:i.set,configurable:!0}:{value:i,configurable:!0,writable:!0},a))}function y(t){return{from:function(e){return t.prototype=Object.create(e.prototype),C(t.prototype,"constructor",t),{extend:w.bind(null,t.prototype)}}}}var E=Object.getOwnPropertyDescriptor,S=[].slice;function T(t,e,i){return S.call(t,e,i)}function D(t,e){return e(t)}function q(t){if(!t)throw new Error("Assertion Failed")}function K(t){c.setImmediate?setImmediate(t):setTimeout(t,0)}function nt(t,e){if(typeof e=="string"&&_(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var i=[],a=0,u=e.length;a<u;++a){var p=nt(t,e[a]);i.push(p)}return i}var x=e.indexOf(".");if(x!==-1){var P=t[e.substr(0,x)];return P==null?void 0:nt(P,e.substr(x+1))}}function X(t,e,i){if(t&&e!==void 0&&!("isFrozen"in Object&&Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){q(typeof i!="string"&&"length"in i);for(var a=0,u=e.length;a<u;++a)X(t,e[a],i[a])}else{var p,x,P=e.indexOf(".");P!==-1?(p=e.substr(0,P),(x=e.substr(P+1))===""?i===void 0?f(t)&&!isNaN(parseInt(p))?t.splice(p,1):delete t[p]:t[p]=i:X(P=!(P=t[p])||!_(t,p)?t[p]={}:P,x,i)):i===void 0?f(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=i}}function ct(t){var e,i={};for(e in t)_(t,e)&&(i[e]=t[e]);return i}var tt=[].concat;function pt(t){return tt.apply([],t)}var At="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(pt([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(t){return c[t]}),Pt=new Set(At.map(function(t){return c[t]})),I=null;function J(t){return I=new WeakMap,t=(function e(i){if(!i||typeof i!="object")return i;var a=I.get(i);if(a)return a;if(f(i)){a=[],I.set(i,a);for(var u=0,p=i.length;u<p;++u)a.push(e(i[u]))}else if(Pt.has(i.constructor))a=i;else{var x,P=b(i);for(x in a=P===Object.prototype?{}:Object.create(P),I.set(i,a),i)_(i,x)&&(a[x]=e(i[x]))}return a})(t),I=null,t}var g={}.toString;function it(t){return g.call(t).slice(8,-1)}var Tt=typeof Symbol<"u"?Symbol.iterator:"@@iterator",lt=typeof Tt=="symbol"?function(t){var e;return t!=null&&(e=t[Tt])&&e.apply(t)}:function(){return null};function $t(t,e){return e=t.indexOf(e),0<=e&&t.splice(e,1),0<=e}var ot={};function Ot(t){var e,i,a,u;if(arguments.length===1){if(f(t))return t.slice();if(this===ot&&typeof t=="string")return[t];if(u=lt(t)){for(i=[];!(a=u.next()).done;)i.push(a.value);return i}if(t==null)return[t];if(typeof(e=t.length)!="number")return[t];for(i=new Array(e);e--;)i[e]=t[e];return i}for(e=arguments.length,i=new Array(e);e--;)i[e]=arguments[e];return i}var Y=typeof Symbol<"u"?function(t){return t[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ht=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ye=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ht),Z={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Et(t,e){this.name=t,this.message=e}function xt(t,e){return t+". Errors: "+Object.keys(e).map(function(i){return e[i].toString()}).filter(function(i,a,u){return u.indexOf(i)===a}).join(`
`)}function vt(t,e,i,a){this.failures=e,this.failedKeys=a,this.successCount=i,this.message=xt(t,e)}function qt(t,e){this.name="BulkError",this.failures=Object.keys(e).map(function(i){return e[i]}),this.failuresByPos=e,this.message=xt(t,this.failures)}y(Et).from(Error).extend({toString:function(){return this.name+": "+this.message}}),y(vt).from(Et),y(qt).from(Et);var te=ye.reduce(function(t,e){return t[e]=e+"Error",t},{}),Nt=Et,mt=ye.reduce(function(t,e){var i=e+"Error";function a(u,p){this.name=i,u?typeof u=="string"?(this.message="".concat(u).concat(p?`
 `+p:""),this.inner=p||null):typeof u=="object"&&(this.message="".concat(u.name," ").concat(u.message),this.inner=u):(this.message=Z[e]||i,this.inner=null)}return y(a).from(Nt),t[e]=a,t},{});mt.Syntax=SyntaxError,mt.Type=TypeError,mt.Range=RangeError;var Gt=ht.reduce(function(t,e){return t[e+"Error"]=mt[e],t},{}),Vt=ye.reduce(function(t,e){return["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=mt[e]),t},{});function Dt(){}function oe(t){return t}function h(t,e){return t==null||t===oe?e:function(i){return e(t(i))}}function et(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function G(t,e){return t===Dt?e:function(){var i=t.apply(this,arguments);i!==void 0&&(arguments[0]=i);var a=this.onsuccess,u=this.onerror;this.onsuccess=null,this.onerror=null;var p=e.apply(this,arguments);return a&&(this.onsuccess=this.onsuccess?et(a,this.onsuccess):a),u&&(this.onerror=this.onerror?et(u,this.onerror):u),p!==void 0?p:i}}function O(t,e){return t===Dt?e:function(){t.apply(this,arguments);var i=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),i&&(this.onsuccess=this.onsuccess?et(i,this.onsuccess):i),a&&(this.onerror=this.onerror?et(a,this.onerror):a)}}function A(t,e){return t===Dt?e:function(i){var a=t.apply(this,arguments);m(i,a);var u=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,i=e.apply(this,arguments),u&&(this.onsuccess=this.onsuccess?et(u,this.onsuccess):u),p&&(this.onerror=this.onerror?et(p,this.onerror):p),a===void 0?i===void 0?void 0:i:m(a,i)}}function N(t,e){return t===Dt?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function st(t,e){return t===Dt?e:function(){var i=t.apply(this,arguments);if(i&&typeof i.then=="function"){for(var a=this,u=arguments.length,p=new Array(u);u--;)p[u]=arguments[u];return i.then(function(){return e.apply(a,p)})}return e.apply(this,arguments)}}Vt.ModifyError=vt,Vt.DexieError=Et,Vt.BulkError=qt;var at=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function V(t){at=t}var ut={},kt=100,At=typeof Promise>"u"?[]:(function(){var t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,b(t),t];var e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,b(e),t]})(),ht=At[0],ye=At[1],At=At[2],ye=ye&&ye.then,Lt=ht&&ht.constructor,Mt=!!At,re=function(t,e){ze.push([t,e]),de&&(queueMicrotask(Da),de=!1)},Ce=!0,de=!0,fe=[],Ht=[],Re=oe,ve={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Dt,pgp:!1,env:{},finalize:Dt},St=ve,ze=[],Ae=0,sn=[];function _t(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var e=this._PSD=St;if(typeof t!="function"){if(t!==ut)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&De(this,this._value))}this._state=null,this._value=null,++e.ref,(function i(a,u){try{u(function(p){if(a._state===null){if(p===a)throw new TypeError("A promise cannot be resolved with itself.");var x=a._lib&&ln();p&&typeof p.then=="function"?i(a,function(P,R){p instanceof _t?p._then(P,R):p.then(P,R)}):(a._state=!0,a._value=p,di(a)),x&&cn()}},De.bind(null,a))}catch(p){De(a,p)}})(this,t)}var on={get:function(){var t=St,e=qn;function i(a,u){var p=this,x=!t.global&&(t!==St||e!==qn),P=x&&!je(),R=new _t(function(z,F){xr(p,new Be(fi(a,t,x,P),fi(u,t,x,P),z,F,t))});return this._consoleTask&&(R._consoleTask=this._consoleTask),R}return i.prototype=ut,i},set:function(t){C(this,"then",t&&t.prototype===ut?on:{get:function(){return t},set:on.set})}};function Be(t,e,i,a,u){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=i,this.reject=a,this.psd=u}function De(t,e){var i,a;Ht.push(e),t._state===null&&(i=t._lib&&ln(),e=Re(e),t._state=!1,t._value=e,a=t,fe.some(function(u){return u._value===a._value})||fe.push(a),di(t),i&&cn())}function di(t){var e=t._listeners;t._listeners=[];for(var i=0,a=e.length;i<a;++i)xr(t,e[i]);var u=t._PSD;--u.ref||u.finalize(),Ae===0&&(++Ae,re(function(){--Ae==0&&kr()},[]))}function xr(t,e){if(t._state!==null){var i=t._state?e.onFulfilled:e.onRejected;if(i===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ae,re(Ba,[i,t,e])}else t._listeners.push(e)}function Ba(t,e,i){try{var a,u=e._value;!e._state&&Ht.length&&(Ht=[]),a=at&&e._consoleTask?e._consoleTask.run(function(){return t(u)}):t(u),e._state||Ht.indexOf(u)!==-1||(function(p){for(var x=fe.length;x;)if(fe[--x]._value===p._value)return fe.splice(x,1)})(e),i.resolve(a)}catch(p){i.reject(p)}finally{--Ae==0&&kr(),--i.psd.ref||i.psd.finalize()}}function Da(){He(ve,function(){ln()&&cn()})}function ln(){var t=Ce;return de=Ce=!1,t}function cn(){var t,e,i;do for(;0<ze.length;)for(t=ze,ze=[],i=t.length,e=0;e<i;++e){var a=t[e];a[0].apply(null,a[1])}while(0<ze.length);de=Ce=!0}function kr(){var t=fe;fe=[],t.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)});for(var e=sn.slice(0),i=e.length;i;)e[--i]()}function Un(t){return new _t(ut,!1,t)}function Yt(t,e){var i=St;return function(){var a=ln(),u=St;try{return Fe(i,!0),t.apply(this,arguments)}catch(p){e&&e(p)}finally{Fe(u,!1),a&&cn()}}}w(_t.prototype,{then:on,_then:function(t,e){xr(this,new Be(null,null,t,e,St))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=t,i=arguments[1];return typeof e=="function"?this.then(null,function(a){return(a instanceof e?i:Un)(a)}):this.then(null,function(a){return(a&&a.name===e?i:Un)(a)})},finally:function(t){return this.then(function(e){return _t.resolve(t()).then(function(){return e})},function(e){return _t.resolve(t()).then(function(){return Un(e)})})},timeout:function(t,e){var i=this;return t<1/0?new _t(function(a,u){var p=setTimeout(function(){return u(new mt.Timeout(e))},t);i.then(a,u).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&C(_t.prototype,Symbol.toStringTag,"Dexie.Promise"),ve.env=hi(),w(_t,{all:function(){var t=Ot.apply(null,arguments).map(Wn);return new _t(function(e,i){t.length===0&&e([]);var a=t.length;t.forEach(function(u,p){return _t.resolve(u).then(function(x){t[p]=x,--a||e(t)},i)})})},resolve:function(t){return t instanceof _t?t:t&&typeof t.then=="function"?new _t(function(e,i){t.then(e,i)}):new _t(ut,!0,t)},reject:Un,race:function(){var t=Ot.apply(null,arguments).map(Wn);return new _t(function(e,i){t.map(function(a){return _t.resolve(a).then(e,i)})})},PSD:{get:function(){return St},set:function(t){return St=t}},totalEchoes:{get:function(){return qn}},newPSD:Me,usePSD:He,scheduler:{get:function(){return re},set:function(t){re=t}},rejectionMapper:{get:function(){return Re},set:function(t){Re=t}},follow:function(t,e){return new _t(function(i,a){return Me(function(u,p){var x=St;x.unhandleds=[],x.onunhandled=p,x.finalize=et(function(){var P,R=this;P=function(){R.unhandleds.length===0?u():p(R.unhandleds[0])},sn.push(function z(){P(),sn.splice(sn.indexOf(z),1)}),++Ae,re(function(){--Ae==0&&kr()},[])},x.finalize),t()},e,i,a)})}}),Lt&&(Lt.allSettled&&C(_t,"allSettled",function(){var t=Ot.apply(null,arguments).map(Wn);return new _t(function(e){t.length===0&&e([]);var i=t.length,a=new Array(i);t.forEach(function(u,p){return _t.resolve(u).then(function(x){return a[p]={status:"fulfilled",value:x}},function(x){return a[p]={status:"rejected",reason:x}}).then(function(){return--i||e(a)})})})}),Lt.any&&typeof AggregateError<"u"&&C(_t,"any",function(){var t=Ot.apply(null,arguments).map(Wn);return new _t(function(e,i){t.length===0&&i(new AggregateError([]));var a=t.length,u=new Array(a);t.forEach(function(p,x){return _t.resolve(p).then(function(P){return e(P)},function(P){u[x]=P,--a||i(new AggregateError(u))})})})}),Lt.withResolvers&&(_t.withResolvers=Lt.withResolvers));var ie={awaits:0,echoes:0,id:0},Ma=0,Ln=[],Kn=0,qn=0,ja=0;function Me(t,e,i,a){var u=St,p=Object.create(u);return p.parent=u,p.ref=0,p.global=!1,p.id=++ja,ve.env,p.env=Mt?{Promise:_t,PromiseProp:{value:_t,configurable:!0,writable:!0},all:_t.all,race:_t.race,allSettled:_t.allSettled,any:_t.any,resolve:_t.resolve,reject:_t.reject}:{},e&&m(p,e),++u.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},a=He(p,t,i,a),p.ref===0&&p.finalize(),a}function un(){return ie.id||(ie.id=++Ma),++ie.awaits,ie.echoes+=kt,ie.id}function je(){return!!ie.awaits&&(--ie.awaits==0&&(ie.id=0),ie.echoes=ie.awaits*kt,!0)}function Wn(t){return ie.echoes&&t&&t.constructor===Lt?(un(),t.then(function(e){return je(),e},function(e){return je(),Xt(e)})):t}function Fa(){var t=Ln[Ln.length-1];Ln.pop(),Fe(t,!1)}function Fe(t,e){var i,a=St;(e?!ie.echoes||Kn++&&t===St:!Kn||--Kn&&t===St)||queueMicrotask(e?function(u){++qn,ie.echoes&&--ie.echoes!=0||(ie.echoes=ie.awaits=ie.id=0),Ln.push(St),Fe(u,!0)}.bind(null,t):Fa),t!==St&&(St=t,a===ve&&(ve.env=hi()),Mt&&(i=ve.env.Promise,e=t.env,(a.global||t.global)&&(Object.defineProperty(c,"Promise",e.PromiseProp),i.all=e.all,i.race=e.race,i.resolve=e.resolve,i.reject=e.reject,e.allSettled&&(i.allSettled=e.allSettled),e.any&&(i.any=e.any))))}function hi(){var t=c.Promise;return Mt?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(c,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject}:{}}function He(t,e,i,a,u){var p=St;try{return Fe(t,!0),e(i,a,u)}finally{Fe(p,!1)}}function fi(t,e,i,a){return typeof t!="function"?t:function(){var u=St;i&&un(),Fe(e,!0);try{return t.apply(this,arguments)}finally{Fe(u,!1),a&&queueMicrotask(je)}}}function Sr(t){Promise===Lt&&ie.echoes===0?Kn===0?t():enqueueNativeMicroTask(t):setTimeout(t,0)}(""+ye).indexOf("[native code]")===-1&&(un=je=Dt);var Xt=_t.reject,Ze="￿",Ee="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",pi="String expected.",dn=[],Vn="__dbnames",Cr="readonly",Ar="readwrite";function Ye(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}var mi={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Hn(t){return typeof t!="string"||/\./.test(t)?function(e){return e}:function(e){return e[t]===void 0&&t in e&&delete(e=J(e))[t],e}}function gi(){throw mt.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Ut(t,e){try{var i=vi(t),a=vi(e);if(i!==a)return i==="Array"?1:a==="Array"?-1:i==="binary"?1:a==="binary"?-1:i==="string"?1:a==="string"?-1:i==="Date"?1:a!=="Date"?NaN:-1;switch(i){case"number":case"Date":case"string":return e<t?1:t<e?-1:0;case"binary":return(function(u,p){for(var x=u.length,P=p.length,R=x<P?x:P,z=0;z<R;++z)if(u[z]!==p[z])return u[z]<p[z]?-1:1;return x===P?0:x<P?-1:1})(yi(t),yi(e));case"Array":return(function(u,p){for(var x=u.length,P=p.length,R=x<P?x:P,z=0;z<R;++z){var F=Ut(u[z],p[z]);if(F!==0)return F}return x===P?0:x<P?-1:1})(t,e)}}catch{}return NaN}function vi(t){var e=typeof t;return e!="object"?e:ArrayBuffer.isView(t)?"binary":(t=it(t),t==="ArrayBuffer"?"binary":t)}function yi(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function Zn(t,e,i){var a=t.schema.yProps;return a?(e&&0<i.numFailures&&(e=e.filter(function(u,p){return!i.failures[p]})),Promise.all(a.map(function(u){return u=u.updatesTable,e?t.db.table(u).where("k").anyOf(e).delete():t.db.table(u).clear()})).then(function(){return i})):i}var xn=(bi.prototype.execute=function(t){var e=this["@@propmod"];if(e.add!==void 0){var i=e.add;if(f(i))return s(s([],f(t)?t:[],!0),i).sort();if(typeof i=="number")return(Number(t)||0)+i;if(typeof i=="bigint")try{return BigInt(t)+i}catch{return BigInt(0)+i}throw new TypeError("Invalid term ".concat(i))}if(e.remove!==void 0){var a=e.remove;if(f(a))return f(t)?t.filter(function(u){return!a.includes(u)}).sort():[];if(typeof a=="number")return Number(t)-a;if(typeof a=="bigint")try{return BigInt(t)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return i=(i=e.replacePrefix)===null||i===void 0?void 0:i[0],i&&typeof t=="string"&&t.startsWith(i)?e.replacePrefix[1]+t.substring(i.length):t},bi);function bi(t){this["@@propmod"]=t}function wi(t,e){for(var i=d(e),a=i.length,u=!1,p=0;p<a;++p){var x=i[p],P=e[x],R=nt(t,x);P instanceof xn?(X(t,x,P.execute(R)),u=!0):R!==P&&(X(t,x,P),u=!0)}return u}var _i=(Zt.prototype._trans=function(t,e,i){var a=this._tx||St.trans,u=this.name,p=at&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function x(z,F,$){if(!$.schema[u])throw new mt.NotFound("Table "+u+" not part of transaction");return e($.idbtrans,$)}var P=ln();try{var R=a&&a.db._novip===this.db._novip?a===St.trans?a._promise(t,x,i):Me(function(){return a._promise(t,x,i)},{trans:a,transless:St.transless||St}):(function z(F,$,L,B){if(F.idbdb&&(F._state.openComplete||St.letThrough||F._vip)){var M=F._createTransaction($,L,F._dbSchema);try{M.create(),F._state.PR1398_maxLoop=3}catch(j){return j.name===te.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return z(F,$,L,B)})):Xt(j)}return M._promise($,function(j,U){return Me(function(){return St.trans=M,B(j,U,M)})}).then(function(j){if($==="readwrite")try{M.idbtrans.commit()}catch{}return $==="readonly"?j:M._completion.then(function(){return j})})}if(F._state.openComplete)return Xt(new mt.DatabaseClosed(F._state.dbOpenError));if(!F._state.isBeingOpened){if(!F._state.autoOpen)return Xt(new mt.DatabaseClosed);F.open().catch(Dt)}return F._state.dbReadyPromise.then(function(){return z(F,$,L,B)})})(this.db,t,[this.name],x);return p&&(R._consoleTask=p,R=R.catch(function(z){return console.trace(z),Xt(z)})),R}finally{P&&cn()}},Zt.prototype.get=function(t,e){var i=this;return t&&t.constructor===Object?this.where(t).first(e):t==null?Xt(new mt.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return i.core.get({trans:a,key:t}).then(function(u){return i.hook.reading.fire(u)})}).then(e)},Zt.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(f(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var e=d(t);if(e.length===1)return this.where(e[0]).equals(t[e[0]]);var i=this.schema.indexes.concat(this.schema.primKey).filter(function(P){if(P.compound&&e.every(function(z){return 0<=P.keyPath.indexOf(z)})){for(var R=0;R<e.length;++R)if(e.indexOf(P.keyPath[R])===-1)return!1;return!0}return!1}).sort(function(P,R){return P.keyPath.length-R.keyPath.length})[0];if(i&&this.db._maxKey!==Ze){var p=i.keyPath.slice(0,e.length);return this.where(p).equals(p.map(function(R){return t[R]}))}!i&&at&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(e.join("+"),"]"));var a=this.schema.idxByName;function u(P,R){return Ut(P,R)===0}var x=e.reduce(function($,R){var z=$[0],F=$[1],$=a[R],L=t[R];return[z||$,z||!$?Ye(F,$&&$.multi?function(B){return B=nt(B,R),f(B)&&B.some(function(M){return u(L,M)})}:function(B){return u(L,nt(B,R))}):F]},[null,null]),p=x[0],x=x[1];return p?this.where(p.name).equals(t[p.keyPath]).filter(x):i?this.filter(x):this.where(e).equals("")},Zt.prototype.filter=function(t){return this.toCollection().and(t)},Zt.prototype.count=function(t){return this.toCollection().count(t)},Zt.prototype.offset=function(t){return this.toCollection().offset(t)},Zt.prototype.limit=function(t){return this.toCollection().limit(t)},Zt.prototype.each=function(t){return this.toCollection().each(t)},Zt.prototype.toArray=function(t){return this.toCollection().toArray(t)},Zt.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Zt.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,f(t)?"[".concat(t.join("+"),"]"):t))},Zt.prototype.reverse=function(){return this.toCollection().reverse()},Zt.prototype.mapToClass=function(t){var e,i=this.db,a=this.name;function u(){return e!==null&&e.apply(this,arguments)||this}(this.schema.mappedClass=t).prototype instanceof gi&&((function(R,z){if(typeof z!="function"&&z!==null)throw new TypeError("Class extends value "+String(z)+" is not a constructor or null");function F(){this.constructor=R}r(R,z),R.prototype=z===null?Object.create(z):(F.prototype=z.prototype,new F)})(u,e=t),Object.defineProperty(u.prototype,"db",{get:function(){return i},enumerable:!1,configurable:!0}),u.prototype.table=function(){return a},t=u);for(var p=new Set,x=t.prototype;x;x=b(x))Object.getOwnPropertyNames(x).forEach(function(R){return p.add(R)});function P(R){if(!R)return R;var z,F=Object.create(t.prototype);for(z in R)if(!p.has(z))try{F[z]=R[z]}catch{}return F}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=P,this.hook("reading",P),t},Zt.prototype.defineClass=function(){return this.mapToClass(function(t){m(this,t)})},Zt.prototype.add=function(t,e){var i=this,a=this.schema.primKey,u=a.auto,p=a.keyPath,x=t;return p&&u&&(x=Hn(p)(t)),this._trans("readwrite",function(P){return i.core.mutate({trans:P,type:"add",keys:e!=null?[e]:null,values:[x]})}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):P.lastResult}).then(function(P){if(p)try{X(t,p,P)}catch{}return P})},Zt.prototype.upsert=function(t,e){var i=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(u){return i.core.get({trans:u,key:t}).then(function(p){var x=p??{};return wi(x,e),a&&X(x,a,t),i.core.mutate({trans:u,type:"put",values:[x],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[e]}}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):!!p})})})},Zt.prototype.update=function(t,e){return typeof t!="object"||f(t)?this.where(":id").equals(t).modify(e):(t=nt(t,this.schema.primKey.keyPath),t===void 0?Xt(new mt.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(t).modify(e))},Zt.prototype.put=function(t,e){var i=this,a=this.schema.primKey,u=a.auto,p=a.keyPath,x=t;return p&&u&&(x=Hn(p)(t)),this._trans("readwrite",function(P){return i.core.mutate({trans:P,type:"put",values:[x],keys:e!=null?[e]:null})}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):P.lastResult}).then(function(P){if(p)try{X(t,p,P)}catch{}return P})},Zt.prototype.delete=function(t){var e=this;return this._trans("readwrite",function(i){return e.core.mutate({trans:i,type:"delete",keys:[t]}).then(function(a){return Zn(e,[t],a)}).then(function(a){return a.numFailures?_t.reject(a.failures[0]):void 0})})},Zt.prototype.clear=function(){var t=this;return this._trans("readwrite",function(e){return t.core.mutate({trans:e,type:"deleteRange",range:mi}).then(function(i){return Zn(t,null,i)})}).then(function(e){return e.numFailures?_t.reject(e.failures[0]):void 0})},Zt.prototype.bulkGet=function(t){var e=this;return this._trans("readonly",function(i){return e.core.getMany({keys:t,trans:i}).then(function(a){return a.map(function(u){return e.hook.reading.fire(u)})})})},Zt.prototype.bulkAdd=function(t,e,i){var a=this,u=Array.isArray(e)?e:void 0,p=(i=i||(u?void 0:e))?i.allKeys:void 0;return this._trans("readwrite",function(x){var z=a.schema.primKey,P=z.auto,z=z.keyPath;if(z&&u)throw new mt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(u&&u.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var R=t.length,z=z&&P?t.map(Hn(z)):t;return a.core.mutate({trans:x,type:"add",keys:u,values:z,wantResults:p}).then(function(M){var $=M.numFailures,L=M.results,B=M.lastResult,M=M.failures;if($===0)return p?L:B;throw new qt("".concat(a.name,".bulkAdd(): ").concat($," of ").concat(R," operations failed"),M)})})},Zt.prototype.bulkPut=function(t,e,i){var a=this,u=Array.isArray(e)?e:void 0,p=(i=i||(u?void 0:e))?i.allKeys:void 0;return this._trans("readwrite",function(x){var z=a.schema.primKey,P=z.auto,z=z.keyPath;if(z&&u)throw new mt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(u&&u.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var R=t.length,z=z&&P?t.map(Hn(z)):t;return a.core.mutate({trans:x,type:"put",keys:u,values:z,wantResults:p}).then(function(M){var $=M.numFailures,L=M.results,B=M.lastResult,M=M.failures;if($===0)return p?L:B;throw new qt("".concat(a.name,".bulkPut(): ").concat($," of ").concat(R," operations failed"),M)})})},Zt.prototype.bulkUpdate=function(t){var e=this,i=this.core,a=t.map(function(x){return x.key}),u=t.map(function(x){return x.changes}),p=[];return this._trans("readwrite",function(x){return i.getMany({trans:x,keys:a,cache:"clone"}).then(function(P){var R=[],z=[];t.forEach(function($,L){var B=$.key,M=$.changes,j=P[L];if(j){for(var U=0,W=Object.keys(M);U<W.length;U++){var H=W[U],Q=M[H];if(H===e.schema.primKey.keyPath){if(Ut(Q,B)!==0)throw new mt.Constraint("Cannot update primary key in bulkUpdate()")}else X(j,H,Q)}p.push(L),R.push(B),z.push(j)}});var F=R.length;return i.mutate({trans:x,type:"put",keys:R,values:z,updates:{keys:a,changeSpecs:u}}).then(function($){var L=$.numFailures,B=$.failures;if(L===0)return F;for(var M=0,j=Object.keys(B);M<j.length;M++){var U,W=j[M],H=p[Number(W)];H!=null&&(U=B[W],delete B[W],B[H]=U)}throw new qt("".concat(e.name,".bulkUpdate(): ").concat(L," of ").concat(F," operations failed"),B)})})})},Zt.prototype.bulkDelete=function(t){var e=this,i=t.length;return this._trans("readwrite",function(a){return e.core.mutate({trans:a,type:"delete",keys:t}).then(function(u){return Zn(e,t,u)})}).then(function(x){var u=x.numFailures,p=x.lastResult,x=x.failures;if(u===0)return p;throw new qt("".concat(e.name,".bulkDelete(): ").concat(u," of ").concat(i," operations failed"),x)})},Zt);function Zt(){}function kn(t){function e(x,P){if(P){for(var R=arguments.length,z=new Array(R-1);--R;)z[R-1]=arguments[R];return i[x].subscribe.apply(null,z),t}if(typeof x=="string")return i[x]}var i={};e.addEventType=p;for(var a=1,u=arguments.length;a<u;++a)p(arguments[a]);return e;function p(x,P,R){if(typeof x!="object"){var z;P=P||N;var F={subscribers:[],fire:R=R||Dt,subscribe:function($){F.subscribers.indexOf($)===-1&&(F.subscribers.push($),F.fire=P(F.fire,$))},unsubscribe:function($){F.subscribers=F.subscribers.filter(function(L){return L!==$}),F.fire=F.subscribers.reduce(P,R)}};return i[x]=e[x]=F}d(z=x).forEach(function($){var L=z[$];if(f(L))p($,z[$][0],z[$][1]);else{if(L!=="asap")throw new mt.InvalidArgument("Invalid event config");var B=p($,oe,function(){for(var M=arguments.length,j=new Array(M);M--;)j[M]=arguments[M];B.subscribers.forEach(function(U){K(function(){U.apply(null,j)})})})}})}}function Sn(t,e){return y(e).from({prototype:t}),e}function hn(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Er(t,e){t.filter=Ye(t.filter,e)}function Or(t,e,i){var a=t.replayFilter;t.replayFilter=a?function(){return Ye(a(),e())}:e,t.justLimit=i&&!a}function Yn(t,e){if(t.isPrimKey)return e.primaryKey;var i=e.getIndexByKeyPath(t.index);if(!i)throw new mt.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return i}function xi(t,e,i){var a=Yn(t,e.schema);return e.openCursor({trans:i,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:a,range:t.range}})}function Gn(t,e,i,a){var u=t.replayFilter?Ye(t.filter,t.replayFilter()):t.filter;if(t.or){var p={},x=function(P,R,z){var F,$;u&&!u(R,z,function(L){return R.stop(L)},function(L){return R.fail(L)})||(($=""+(F=R.primaryKey))=="[object ArrayBuffer]"&&($=""+new Uint8Array(F)),_(p,$)||(p[$]=!0,e(P,R,z)))};return Promise.all([t.or._iterate(x,i),ki(xi(t,a,i),t.algorithm,x,!t.keysOnly&&t.valueMapper)])}return ki(xi(t,a,i),Ye(t.algorithm,u),e,!t.keysOnly&&t.valueMapper)}function ki(t,e,i,a){var u=Yt(a?function(p,x,P){return i(a(p),x,P)}:i);return t.then(function(p){if(p)return p.start(function(){var x=function(){return p.continue()};e&&!e(p,function(P){return x=P},function(P){p.stop(P),x=Dt},function(P){p.fail(P),x=Dt})||u(p.value,p,function(P){return x=P}),x()})})}var Na=(Kt.prototype._read=function(t,e){var i=this._ctx;return i.error?i.table._trans(null,Xt.bind(null,i.error)):i.table._trans("readonly",t).then(e)},Kt.prototype._write=function(t){var e=this._ctx;return e.error?e.table._trans(null,Xt.bind(null,e.error)):e.table._trans("readwrite",t,"locked")},Kt.prototype._addAlgorithm=function(t){var e=this._ctx;e.algorithm=Ye(e.algorithm,t)},Kt.prototype._iterate=function(t,e){return Gn(this._ctx,t,e,this._ctx.table.core)},Kt.prototype.clone=function(t){var e=Object.create(this.constructor.prototype),i=Object.create(this._ctx);return t&&m(i,t),e._ctx=i,e},Kt.prototype.raw=function(){return this._ctx.valueMapper=null,this},Kt.prototype.each=function(t){var e=this._ctx;return this._read(function(i){return Gn(e,t,i,e.table.core)})},Kt.prototype.count=function(t){var e=this;return this._read(function(i){var a=e._ctx,u=a.table.core;if(hn(a,!0))return u.count({trans:i,query:{index:Yn(a,u.schema),range:a.range}}).then(function(x){return Math.min(x,a.limit)});var p=0;return Gn(a,function(){return++p,!1},i,u).then(function(){return p})}).then(t)},Kt.prototype.sortBy=function(t,e){var i=t.split(".").reverse(),a=i[0],u=i.length-1;function p(R,z){return z?p(R[i[z]],z-1):R[a]}var x=this._ctx.dir==="next"?1:-1;function P(R,z){return Ut(p(R,u),p(z,u))*x}return this.toArray(function(R){return R.sort(P)}).then(e)},Kt.prototype.toArray=function(t){var e=this;return this._read(function(i){var a=e._ctx;if(a.dir==="next"&&hn(a,!0)&&0<a.limit){var u=a.valueMapper,p=Yn(a,a.table.core.schema);return a.table.core.query({trans:i,limit:a.limit,values:!0,query:{index:p,range:a.range}}).then(function(P){return P=P.result,u?P.map(u):P})}var x=[];return Gn(a,function(P){return x.push(P)},i,a.table.core).then(function(){return x})},t)},Kt.prototype.offset=function(t){var e=this._ctx;return t<=0||(e.offset+=t,hn(e)?Or(e,function(){var i=t;return function(a,u){return i===0||(i===1?--i:u(function(){a.advance(i),i=0}),!1)}}):Or(e,function(){var i=t;return function(){return--i<0}})),this},Kt.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),Or(this._ctx,function(){var e=t;return function(i,a,u){return--e<=0&&a(u),0<=e}},!0),this},Kt.prototype.until=function(t,e){return Er(this._ctx,function(i,a,u){return!t(i.value)||(a(u),e)}),this},Kt.prototype.first=function(t){return this.limit(1).toArray(function(e){return e[0]}).then(t)},Kt.prototype.last=function(t){return this.reverse().first(t)},Kt.prototype.filter=function(t){var e;return Er(this._ctx,function(i){return t(i.value)}),(e=this._ctx).isMatch=Ye(e.isMatch,t),this},Kt.prototype.and=function(t){return this.filter(t)},Kt.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},Kt.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Kt.prototype.desc=function(){return this.reverse()},Kt.prototype.eachKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(i,a){t(a.key,a)})},Kt.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},Kt.prototype.eachPrimaryKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(i,a){t(a.primaryKey,a)})},Kt.prototype.keys=function(t){var e=this._ctx;e.keysOnly=!e.isMatch;var i=[];return this.each(function(a,u){i.push(u.key)}).then(function(){return i}).then(t)},Kt.prototype.primaryKeys=function(t){var e=this._ctx;if(e.dir==="next"&&hn(e,!0)&&0<e.limit)return this._read(function(a){var u=Yn(e,e.table.core.schema);return e.table.core.query({trans:a,values:!1,limit:e.limit,query:{index:u,range:e.range}})}).then(function(a){return a.result}).then(t);e.keysOnly=!e.isMatch;var i=[];return this.each(function(a,u){i.push(u.primaryKey)}).then(function(){return i}).then(t)},Kt.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},Kt.prototype.firstKey=function(t){return this.limit(1).keys(function(e){return e[0]}).then(t)},Kt.prototype.lastKey=function(t){return this.reverse().firstKey(t)},Kt.prototype.distinct=function(){var t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];if(!t||!t.multi)return this;var e={};return Er(this._ctx,function(u){var a=u.primaryKey.toString(),u=_(e,a);return e[a]=!0,!u}),this},Kt.prototype.modify=function(t){var e=this,i=this._ctx;return this._write(function(a){var u=typeof t=="function"?t:function(j){return wi(j,t)},p=i.table.core,z=p.schema.primaryKey,x=z.outbound,P=z.extractKey,R=200,z=e.db._options.modifyChunkSize;z&&(R=typeof z=="object"?z[p.name]||z["*"]||200:z);function F(j,H){var W=H.failures,H=H.numFailures;L+=j-H;for(var Q=0,rt=d(W);Q<rt.length;Q++){var ft=rt[Q];$.push(W[ft])}}var $=[],L=0,B=[],M=t===Si;return e.clone().primaryKeys().then(function(j){function U(H){var Q=Math.min(R,j.length-H),rt=j.slice(H,H+Q);return(M?Promise.resolve([]):p.getMany({trans:a,keys:rt,cache:"immutable"})).then(function(ft){var bt=[],dt=[],gt=x?[]:null,wt=M?rt:[];if(!M)for(var yt=0;yt<Q;++yt){var Ct=ft[yt],zt={value:J(Ct),primKey:j[H+yt]};u.call(zt,zt.value,zt)!==!1&&(zt.value==null?wt.push(j[H+yt]):x||Ut(P(Ct),P(zt.value))===0?(dt.push(zt.value),x&&gt.push(j[H+yt])):(wt.push(j[H+yt]),bt.push(zt.value)))}return Promise.resolve(0<bt.length&&p.mutate({trans:a,type:"add",values:bt}).then(function(Bt){for(var jt in Bt.failures)wt.splice(parseInt(jt),1);F(bt.length,Bt)})).then(function(){return(0<dt.length||W&&typeof t=="object")&&p.mutate({trans:a,type:"put",keys:gt,values:dt,criteria:W,changeSpec:typeof t!="function"&&t,isAdditionalChunk:0<H}).then(function(Bt){return F(dt.length,Bt)})}).then(function(){return(0<wt.length||W&&M)&&p.mutate({trans:a,type:"delete",keys:wt,criteria:W,isAdditionalChunk:0<H}).then(function(Bt){return Zn(i.table,wt,Bt)}).then(function(Bt){return F(wt.length,Bt)})}).then(function(){return j.length>H+Q&&U(H+R)})})}var W=hn(i)&&i.limit===1/0&&(typeof t!="function"||M)&&{index:i.index,range:i.range};return U(0).then(function(){if(0<$.length)throw new vt("Error modifying one or more objects",$,L,B);return j.length})})})},Kt.prototype.delete=function(){var t=this._ctx,e=t.range;return!hn(t)||t.table.schema.yProps||!t.isPrimKey&&e.type!==3?this.modify(Si):this._write(function(i){var a=t.table.core.schema.primaryKey,u=e;return t.table.core.count({trans:i,query:{index:a,range:u}}).then(function(p){return t.table.core.mutate({trans:i,type:"deleteRange",range:u}).then(function(R){var P=R.failures,R=R.numFailures;if(R)throw new vt("Could not delete some values",Object.keys(P).map(function(z){return P[z]}),p-R);return p-R})})})},Kt);function Kt(){}var Si=function(t,e){return e.value=null};function Ua(t,e){return t<e?-1:t===e?0:1}function La(t,e){return e<t?-1:t===e?0:1}function pe(t,e,i){return t=t instanceof Ai?new t.Collection(t):t,t._ctx.error=new(i||TypeError)(e),t}function fn(t){return new t.Collection(t,function(){return Ci("")}).limit(0)}function Xn(t,e,i,a){var u,p,x,P,R,z,F,$=i.length;if(!i.every(function(M){return typeof M=="string"}))return pe(t,pi);function L(M){u=M==="next"?function(U){return U.toUpperCase()}:function(U){return U.toLowerCase()},p=M==="next"?function(U){return U.toLowerCase()}:function(U){return U.toUpperCase()},x=M==="next"?Ua:La;var j=i.map(function(U){return{lower:p(U),upper:u(U)}}).sort(function(U,W){return x(U.lower,W.lower)});P=j.map(function(U){return U.upper}),R=j.map(function(U){return U.lower}),F=(z=M)==="next"?"":a}L("next"),t=new t.Collection(t,function(){return Ne(P[0],R[$-1]+a)}),t._ondirectionchange=function(M){L(M)};var B=0;return t._addAlgorithm(function(M,j,U){var W=M.key;if(typeof W!="string")return!1;var H=p(W);if(e(H,R,B))return!0;for(var Q=null,rt=B;rt<$;++rt){var ft=(function(bt,dt,gt,wt,yt,Ct){for(var zt=Math.min(bt.length,wt.length),Bt=-1,jt=0;jt<zt;++jt){var me=dt[jt];if(me!==wt[jt])return yt(bt[jt],gt[jt])<0?bt.substr(0,jt)+gt[jt]+gt.substr(jt+1):yt(bt[jt],wt[jt])<0?bt.substr(0,jt)+wt[jt]+gt.substr(jt+1):0<=Bt?bt.substr(0,Bt)+dt[Bt]+gt.substr(Bt+1):null;yt(bt[jt],me)<0&&(Bt=jt)}return zt<wt.length&&Ct==="next"?bt+gt.substr(bt.length):zt<bt.length&&Ct==="prev"?bt.substr(0,gt.length):Bt<0?null:bt.substr(0,Bt)+wt[Bt]+gt.substr(Bt+1)})(W,H,P[rt],R[rt],x,z);ft===null&&Q===null?B=rt+1:(Q===null||0<x(Q,ft))&&(Q=ft)}return j(Q!==null?function(){M.continue(Q+F)}:U),!1}),t}function Ne(t,e,i,a){return{type:2,lower:t,upper:e,lowerOpen:i,upperOpen:a}}function Ci(t){return{type:1,lower:t,upper:t}}var Ai=(Object.defineProperty(ae.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ae.prototype.between=function(t,e,i,a){i=i!==!1,a=a===!0;try{return 0<this._cmp(t,e)||this._cmp(t,e)===0&&(i||a)&&(!i||!a)?fn(this):new this.Collection(this,function(){return Ne(t,e,!i,!a)})}catch{return pe(this,Ee)}},ae.prototype.equals=function(t){return t==null?pe(this,Ee):new this.Collection(this,function(){return Ci(t)})},ae.prototype.above=function(t){return t==null?pe(this,Ee):new this.Collection(this,function(){return Ne(t,void 0,!0)})},ae.prototype.aboveOrEqual=function(t){return t==null?pe(this,Ee):new this.Collection(this,function(){return Ne(t,void 0,!1)})},ae.prototype.below=function(t){return t==null?pe(this,Ee):new this.Collection(this,function(){return Ne(void 0,t,!1,!0)})},ae.prototype.belowOrEqual=function(t){return t==null?pe(this,Ee):new this.Collection(this,function(){return Ne(void 0,t)})},ae.prototype.startsWith=function(t){return typeof t!="string"?pe(this,pi):this.between(t,t+Ze,!0,!0)},ae.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):Xn(this,function(e,i){return e.indexOf(i[0])===0},[t],Ze)},ae.prototype.equalsIgnoreCase=function(t){return Xn(this,function(e,i){return e===i[0]},[t],"")},ae.prototype.anyOfIgnoreCase=function(){var t=Ot.apply(ot,arguments);return t.length===0?fn(this):Xn(this,function(e,i){return i.indexOf(e)!==-1},t,"")},ae.prototype.startsWithAnyOfIgnoreCase=function(){var t=Ot.apply(ot,arguments);return t.length===0?fn(this):Xn(this,function(e,i){return i.some(function(a){return e.indexOf(a)===0})},t,Ze)},ae.prototype.anyOf=function(){var t=this,e=Ot.apply(ot,arguments),i=this._cmp;try{e.sort(i)}catch{return pe(this,Ee)}if(e.length===0)return fn(this);var a=new this.Collection(this,function(){return Ne(e[0],e[e.length-1])});a._ondirectionchange=function(p){i=p==="next"?t._ascending:t._descending,e.sort(i)};var u=0;return a._addAlgorithm(function(p,x,P){for(var R=p.key;0<i(R,e[u]);)if(++u===e.length)return x(P),!1;return i(R,e[u])===0||(x(function(){p.continue(e[u])}),!1)}),a},ae.prototype.notEqual=function(t){return this.inAnyRange([[-1/0,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ae.prototype.noneOf=function(){var t=Ot.apply(ot,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return pe(this,Ee)}var e=t.reduce(function(i,a){return i?i.concat([[i[i.length-1][1],a]]):[[-1/0,a]]},null);return e.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(e,{includeLowers:!1,includeUppers:!1})},ae.prototype.inAnyRange=function(W,e){var i=this,a=this._cmp,u=this._ascending,p=this._descending,x=this._min,P=this._max;if(W.length===0)return fn(this);if(!W.every(function(H){return H[0]!==void 0&&H[1]!==void 0&&u(H[0],H[1])<=0}))return pe(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",mt.InvalidArgument);var R=!e||e.includeLowers!==!1,z=e&&e.includeUppers===!0,F,$=u;function L(H,Q){return $(H[0],Q[0])}try{(F=W.reduce(function(H,Q){for(var rt=0,ft=H.length;rt<ft;++rt){var bt=H[rt];if(a(Q[0],bt[1])<0&&0<a(Q[1],bt[0])){bt[0]=x(bt[0],Q[0]),bt[1]=P(bt[1],Q[1]);break}}return rt===ft&&H.push(Q),H},[])).sort(L)}catch{return pe(this,Ee)}var B=0,M=z?function(H){return 0<u(H,F[B][1])}:function(H){return 0<=u(H,F[B][1])},j=R?function(H){return 0<p(H,F[B][0])}:function(H){return 0<=p(H,F[B][0])},U=M,W=new this.Collection(this,function(){return Ne(F[0][0],F[F.length-1][1],!R,!z)});return W._ondirectionchange=function(H){$=H==="next"?(U=M,u):(U=j,p),F.sort(L)},W._addAlgorithm(function(H,Q,rt){for(var ft,bt=H.key;U(bt);)if(++B===F.length)return Q(rt),!1;return!M(ft=bt)&&!j(ft)||(i._cmp(bt,F[B][1])===0||i._cmp(bt,F[B][0])===0||Q(function(){$===u?H.continue(F[B][0]):H.continue(F[B][1])}),!1)}),W},ae.prototype.startsWithAnyOf=function(){var t=Ot.apply(ot,arguments);return t.every(function(e){return typeof e=="string"})?t.length===0?fn(this):this.inAnyRange(t.map(function(e){return[e,e+Ze]})):pe(this,"startsWithAnyOf() only works with strings")},ae);function ae(){}function _e(t){return Yt(function(e){return Cn(e),t(e.target.error),!1})}function Cn(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}var An="storagemutated",Pr="x-storagemutated-1",Ue=kn(null,An),Ka=(xe.prototype._lock=function(){return q(!St.global),++this._reculock,this._reculock!==1||St.global||(St.lockOwnerFor=this),this},xe.prototype._unlock=function(){if(q(!St.global),--this._reculock==0)for(St.global||(St.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var t=this._blockedFuncs.shift();try{He(t[1],t[0])}catch{}}return this},xe.prototype._locked=function(){return this._reculock&&St.lockOwnerFor!==this},xe.prototype.create=function(t){var e=this;if(!this.mode)return this;var i=this.db.idbdb,a=this.db._state.dbOpenError;if(q(!this.idbtrans),!t&&!i)switch(a&&a.name){case"DatabaseClosedError":throw new mt.DatabaseClosed(a);case"MissingAPIError":throw new mt.MissingAPI(a.message,a);default:throw new mt.OpenFailed(a)}if(!this.active)throw new mt.TransactionInactive;return q(this._completion._state===null),(t=this.idbtrans=t||(this.db.core||i).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Yt(function(u){Cn(u),e._reject(t.error)}),t.onabort=Yt(function(u){Cn(u),e.active&&e._reject(new mt.Abort(t.error)),e.active=!1,e.on("abort").fire(u)}),t.oncomplete=Yt(function(){e.active=!1,e._resolve(),"mutatedParts"in t&&Ue.storagemutated.fire(t.mutatedParts)}),this},xe.prototype._promise=function(t,e,i){var a=this;if(t==="readwrite"&&this.mode!=="readwrite")return Xt(new mt.ReadOnly("Transaction is readonly"));if(!this.active)return Xt(new mt.TransactionInactive);if(this._locked())return new _t(function(p,x){a._blockedFuncs.push([function(){a._promise(t,e,i).then(p,x)},St])});if(i)return Me(function(){var p=new _t(function(x,P){a._lock();var R=e(x,P,a);R&&R.then&&R.then(x,P)});return p.finally(function(){return a._unlock()}),p._lib=!0,p});var u=new _t(function(p,x){var P=e(p,x,a);P&&P.then&&P.then(p,x)});return u._lib=!0,u},xe.prototype._root=function(){return this.parent?this.parent._root():this},xe.prototype.waitFor=function(t){var e,i=this._root(),a=_t.resolve(t);i._waitingFor?i._waitingFor=i._waitingFor.then(function(){return a}):(i._waitingFor=a,i._waitingQueue=[],e=i.idbtrans.objectStore(i.storeNames[0]),(function p(){for(++i._spinCount;i._waitingQueue.length;)i._waitingQueue.shift()();i._waitingFor&&(e.get(-1/0).onsuccess=p)})());var u=i._waitingFor;return new _t(function(p,x){a.then(function(P){return i._waitingQueue.push(Yt(p.bind(null,P)))},function(P){return i._waitingQueue.push(Yt(x.bind(null,P)))}).finally(function(){i._waitingFor===u&&(i._waitingFor=null)})})},xe.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new mt.Abort))},xe.prototype.table=function(t){var e=this._memoizedTables||(this._memoizedTables={});if(_(e,t))return e[t];var i=this.schema[t];if(!i)throw new mt.NotFound("Table "+t+" not part of transaction");return i=new this.db.Table(t,i,this),i.core=this.db.core.table(t),e[t]=i},xe);function xe(){}function Tr(t,e,i,a,u,p,x,P){return{name:t,keyPath:e,unique:i,multi:a,auto:u,compound:p,src:(i&&!x?"&":"")+(a?"*":"")+(u?"++":"")+Ei(e),type:P}}function Ei(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function $r(t,e,i){return{name:t,primKey:e,indexes:i,mappedClass:null,idxByName:(a=function(u){return[u.name,u]},i.reduce(function(u,p,x){return x=a(p,x),x&&(u[x[0]]=x[1]),u},{}))};var a}var En=function(t){try{return t.only([[]]),En=function(){return[[]]},[[]]}catch{return En=function(){return Ze},Ze}};function Ir(t){return t==null?function(){}:typeof t=="string"?(e=t).split(".").length===1?function(i){return i[e]}:function(i){return nt(i,e)}:function(i){return nt(i,t)};var e}function Oi(t){return[].slice.call(t)}var qa=0;function On(t){return t==null?":id":typeof t=="string"?t:"[".concat(t.join("+"),"]")}function Wa(t,e,R){function a(U){if(U.type===3)return null;if(U.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var B=U.lower,M=U.upper,j=U.lowerOpen,U=U.upperOpen;return B===void 0?M===void 0?null:e.upperBound(M,!!U):M===void 0?e.lowerBound(B,!!j):e.bound(B,M,!!j,!!U)}function u(L){var B,M=L.name;return{name:M,schema:L,mutate:function(j){var U=j.trans,W=j.type,H=j.keys,Q=j.values,rt=j.range;return new Promise(function(ft,bt){ft=Yt(ft);var dt=U.objectStore(M),gt=dt.keyPath==null,wt=W==="put"||W==="add";if(!wt&&W!=="delete"&&W!=="deleteRange")throw new Error("Invalid operation type: "+W);var yt,Ct=(H||Q||{length:1}).length;if(H&&Q&&H.length!==Q.length)throw new Error("Given keys array must have same length as given values array.");if(Ct===0)return ft({numFailures:0,failures:{},results:[],lastResult:void 0});function zt(he){++me,Cn(he)}var Bt=[],jt=[],me=0;if(W==="deleteRange"){if(rt.type===4)return ft({numFailures:me,failures:jt,results:[],lastResult:void 0});rt.type===3?Bt.push(yt=dt.clear()):Bt.push(yt=dt.delete(a(rt)))}else{var gt=wt?gt?[Q,H]:[Q,null]:[H,null],Rt=gt[0],ce=gt[1];if(wt)for(var ue=0;ue<Ct;++ue)Bt.push(yt=ce&&ce[ue]!==void 0?dt[W](Rt[ue],ce[ue]):dt[W](Rt[ue])),yt.onerror=zt;else for(ue=0;ue<Ct;++ue)Bt.push(yt=dt[W](Rt[ue])),yt.onerror=zt}function cr(he){he=he.target.result,Bt.forEach(function(Qe,Gr){return Qe.error!=null&&(jt[Gr]=Qe.error)}),ft({numFailures:me,failures:jt,results:W==="delete"?H:Bt.map(function(Qe){return Qe.result}),lastResult:he})}yt.onerror=function(he){zt(he),cr(he)},yt.onsuccess=cr})},getMany:function(j){var U=j.trans,W=j.keys;return new Promise(function(H,Q){H=Yt(H);for(var rt,ft=U.objectStore(M),bt=W.length,dt=new Array(bt),gt=0,wt=0,yt=function(Bt){Bt=Bt.target,dt[Bt._pos]=Bt.result,++wt===gt&&H(dt)},Ct=_e(Q),zt=0;zt<bt;++zt)W[zt]!=null&&((rt=ft.get(W[zt]))._pos=zt,rt.onsuccess=yt,rt.onerror=Ct,++gt);gt===0&&H(dt)})},get:function(j){var U=j.trans,W=j.key;return new Promise(function(H,Q){H=Yt(H);var rt=U.objectStore(M).get(W);rt.onsuccess=function(ft){return H(ft.target.result)},rt.onerror=_e(Q)})},query:(B=z,function(j){return new Promise(function(U,W){U=Yt(U);var H,Q,rt,gt=j.trans,ft=j.values,bt=j.limit,yt=j.query,dt=bt===1/0?void 0:bt,wt=yt.index,yt=yt.range,gt=gt.objectStore(M),wt=wt.isPrimaryKey?gt:gt.index(wt.name),yt=a(yt);if(bt===0)return U({result:[]});B?((dt=ft?wt.getAll(yt,dt):wt.getAllKeys(yt,dt)).onsuccess=function(Ct){return U({result:Ct.target.result})},dt.onerror=_e(W)):(H=0,Q=!ft&&"openKeyCursor"in wt?wt.openKeyCursor(yt):wt.openCursor(yt),rt=[],Q.onsuccess=function(Ct){var zt=Q.result;return zt?(rt.push(ft?zt.value:zt.primaryKey),++H===bt?U({result:rt}):void zt.continue()):U({result:rt})},Q.onerror=_e(W))})}),openCursor:function(j){var U=j.trans,W=j.values,H=j.query,Q=j.reverse,rt=j.unique;return new Promise(function(ft,bt){ft=Yt(ft);var wt=H.index,dt=H.range,gt=U.objectStore(M),gt=wt.isPrimaryKey?gt:gt.index(wt.name),wt=Q?rt?"prevunique":"prev":rt?"nextunique":"next",yt=!W&&"openKeyCursor"in gt?gt.openKeyCursor(a(dt),wt):gt.openCursor(a(dt),wt);yt.onerror=_e(bt),yt.onsuccess=Yt(function(Ct){var zt,Bt,jt,me,Rt=yt.result;Rt?(Rt.___id=++qa,Rt.done=!1,zt=Rt.continue.bind(Rt),Bt=(Bt=Rt.continuePrimaryKey)&&Bt.bind(Rt),jt=Rt.advance.bind(Rt),me=function(){throw new Error("Cursor not stopped")},Rt.trans=U,Rt.stop=Rt.continue=Rt.continuePrimaryKey=Rt.advance=function(){throw new Error("Cursor not started")},Rt.fail=Yt(bt),Rt.next=function(){var ce=this,ue=1;return this.start(function(){return ue--?ce.continue():ce.stop()}).then(function(){return ce})},Rt.start=function(ce){function ue(){if(yt.result)try{ce()}catch(he){Rt.fail(he)}else Rt.done=!0,Rt.start=function(){throw new Error("Cursor behind last entry")},Rt.stop()}var cr=new Promise(function(he,Qe){he=Yt(he),yt.onerror=_e(Qe),Rt.fail=Qe,Rt.stop=function(Gr){Rt.stop=Rt.continue=Rt.continuePrimaryKey=Rt.advance=me,he(Gr)}});return yt.onsuccess=Yt(function(he){yt.onsuccess=ue,ue()}),Rt.continue=zt,Rt.continuePrimaryKey=Bt,Rt.advance=jt,ue(),cr},ft(Rt)):ft(null)},bt)})},count:function(j){var U=j.query,W=j.trans,H=U.index,Q=U.range;return new Promise(function(rt,ft){var bt=W.objectStore(M),dt=H.isPrimaryKey?bt:bt.index(H.name),bt=a(Q),dt=bt?dt.count(bt):dt.count();dt.onsuccess=Yt(function(gt){return rt(gt.target.result)}),dt.onerror=_e(ft)})}}}var p,x,P,F=(x=R,P=Oi((p=t).objectStoreNames),{schema:{name:p.name,tables:P.map(function(L){return x.objectStore(L)}).map(function(L){var B=L.keyPath,U=L.autoIncrement,M=f(B),j={},U={name:L.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:B==null,compound:M,keyPath:B,autoIncrement:U,unique:!0,extractKey:Ir(B)},indexes:Oi(L.indexNames).map(function(W){return L.index(W)}).map(function(rt){var H=rt.name,Q=rt.unique,ft=rt.multiEntry,rt=rt.keyPath,ft={name:H,compound:f(rt),keyPath:rt,unique:Q,multiEntry:ft,extractKey:Ir(rt)};return j[On(rt)]=ft}),getIndexByKeyPath:function(W){return j[On(W)]}};return j[":id"]=U.primaryKey,B!=null&&(j[On(B)]=U.primaryKey),U})},hasGetAll:0<P.length&&"getAll"in x.objectStore(P[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),R=F.schema,z=F.hasGetAll,F=R.tables.map(u),$={};return F.forEach(function(L){return $[L.name]=L}),{stack:"dbcore",transaction:t.transaction.bind(t),table:function(L){if(!$[L])throw new Error("Table '".concat(L,"' not found"));return $[L]},MIN_KEY:-1/0,MAX_KEY:En(e),schema:R}}function Va(t,e,i,a){var u=i.IDBKeyRange;return i.indexedDB,{dbcore:(a=Wa(e,u,a),t.dbcore.reduce(function(p,x){return x=x.create,o(o({},p),x(p))},a))}}function Qn(t,a){var i=a.db,a=Va(t._middlewares,i,t._deps,a);t.core=a.dbcore,t.tables.forEach(function(u){var p=u.name;t.core.schema.tables.some(function(x){return x.name===p})&&(u.core=t.core.table(p),t[p]instanceof t.Table&&(t[p].core=u.core))})}function Jn(t,e,i,a){i.forEach(function(u){var p=a[u];e.forEach(function(x){var P=(function R(z,F){return E(z,F)||(z=b(z))&&R(z,F)})(x,u);(!P||"value"in P&&P.value===void 0)&&(x===t.Transaction.prototype||x instanceof t.Transaction?C(x,u,{get:function(){return this.table(u)},set:function(R){v(this,u,{value:R,writable:!0,configurable:!0,enumerable:!0})}}):x[u]=new t.Table(u,p))})})}function Rr(t,e){e.forEach(function(i){for(var a in i)i[a]instanceof t.Table&&delete i[a]})}function Ha(t,e){return t._cfg.version-e._cfg.version}function Za(t,e,i,a){var u=t._dbSchema;i.objectStoreNames.contains("$meta")&&!u.$meta&&(u.$meta=$r("$meta",Ti("")[0],[]),t._storeNames.push("$meta"));var p=t._createTransaction("readwrite",t._storeNames,u);p.create(i),p._completion.catch(a);var x=p._reject.bind(p),P=St.transless||St;Me(function(){return St.trans=p,St.transless=P,e!==0?(Qn(t,i),z=e,((R=p).storeNames.includes("$meta")?R.table("$meta").get("version").then(function(F){return F??z}):_t.resolve(z)).then(function(F){return L=F,B=p,M=i,j=[],F=($=t)._versions,U=$._dbSchema=er(0,$.idbdb,M),(F=F.filter(function(W){return W._cfg.version>=L})).length!==0?(F.forEach(function(W){j.push(function(){var H=U,Q=W._cfg.dbschema;nr($,H,M),nr($,Q,M),U=$._dbSchema=Q;var rt=zr(H,Q);rt.add.forEach(function(wt){Br(M,wt[0],wt[1].primKey,wt[1].indexes)}),rt.change.forEach(function(wt){if(wt.recreate)throw new mt.Upgrade("Not yet support for changing primary key");var yt=M.objectStore(wt.name);wt.add.forEach(function(Ct){return tr(yt,Ct)}),wt.change.forEach(function(Ct){yt.deleteIndex(Ct.name),tr(yt,Ct)}),wt.del.forEach(function(Ct){return yt.deleteIndex(Ct)})});var ft=W._cfg.contentUpgrade;if(ft&&W._cfg.version>L){Qn($,M),B._memoizedTables={};var bt=ct(Q);rt.del.forEach(function(wt){bt[wt]=H[wt]}),Rr($,[$.Transaction.prototype]),Jn($,[$.Transaction.prototype],d(bt),bt),B.schema=bt;var dt,gt=Y(ft);return gt&&un(),rt=_t.follow(function(){var wt;(dt=ft(B))&&gt&&(wt=je.bind(null,null),dt.then(wt,wt))}),dt&&typeof dt.then=="function"?_t.resolve(dt):rt.then(function(){return dt})}}),j.push(function(H){var Q,rt,ft=W._cfg.dbschema;Q=ft,rt=H,[].slice.call(rt.db.objectStoreNames).forEach(function(bt){return Q[bt]==null&&rt.db.deleteObjectStore(bt)}),Rr($,[$.Transaction.prototype]),Jn($,[$.Transaction.prototype],$._storeNames,$._dbSchema),B.schema=$._dbSchema}),j.push(function(H){$.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil($.idbdb.version/10)===W._cfg.version?($.idbdb.deleteObjectStore("$meta"),delete $._dbSchema.$meta,$._storeNames=$._storeNames.filter(function(Q){return Q!=="$meta"})):H.objectStore("$meta").put(W._cfg.version,"version"))})}),(function W(){return j.length?_t.resolve(j.shift()(B.idbtrans)).then(W):_t.resolve()})().then(function(){Pi(U,M)})):_t.resolve();var $,L,B,M,j,U}).catch(x)):(d(u).forEach(function(F){Br(i,F,u[F].primKey,u[F].indexes)}),Qn(t,i),void _t.follow(function(){return t.on.populate.fire(p)}).catch(x));var R,z})}function Ya(t,e){Pi(t._dbSchema,e),e.db.version%10!=0||e.objectStoreNames.contains("$meta")||e.db.createObjectStore("$meta").add(Math.ceil(e.db.version/10-1),"version");var i=er(0,t.idbdb,e);nr(t,t._dbSchema,e);for(var a=0,u=zr(i,t._dbSchema).change;a<u.length;a++){var p=(function(x){if(x.change.length||x.recreate)return console.warn("Unable to patch indexes of table ".concat(x.name," because it has changes on the type of index or primary key.")),{value:void 0};var P=e.objectStore(x.name);x.add.forEach(function(R){at&&console.debug("Dexie upgrade patch: Creating missing index ".concat(x.name,".").concat(R.src)),tr(P,R)})})(u[a]);if(typeof p=="object")return p.value}}function zr(t,e){var i,a={del:[],add:[],change:[]};for(i in t)e[i]||a.del.push(i);for(i in e){var u=t[i],p=e[i];if(u){var x={name:i,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(u.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||u.primKey.auto!==p.primKey.auto)x.recreate=!0,a.change.push(x);else{var P=u.idxByName,R=p.idxByName,z=void 0;for(z in P)R[z]||x.del.push(z);for(z in R){var F=P[z],$=R[z];F?F.src!==$.src&&x.change.push($):x.add.push($)}(0<x.del.length||0<x.add.length||0<x.change.length)&&a.change.push(x)}}else a.add.push([i,p])}return a}function Br(t,e,i,a){var u=t.db.createObjectStore(e,i.keyPath?{keyPath:i.keyPath,autoIncrement:i.auto}:{autoIncrement:i.auto});return a.forEach(function(p){return tr(u,p)}),u}function Pi(t,e){d(t).forEach(function(i){e.db.objectStoreNames.contains(i)||(at&&console.debug("Dexie: Creating missing table",i),Br(e,i,t[i].primKey,t[i].indexes))})}function tr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function er(t,e,i){var a={};return T(e.objectStoreNames,0).forEach(function(u){for(var p=i.objectStore(u),x=Tr(Ei(z=p.keyPath),z||"",!0,!1,!!p.autoIncrement,z&&typeof z!="string",!0),P=[],R=0;R<p.indexNames.length;++R){var F=p.index(p.indexNames[R]),z=F.keyPath,F=Tr(F.name,z,!!F.unique,!!F.multiEntry,!1,z&&typeof z!="string",!1);P.push(F)}a[u]=$r(u,x,P)}),a}function nr(t,e,i){for(var a=i.db.objectStoreNames,u=0;u<a.length;++u){var p=a[u],x=i.objectStore(p);t._hasGetAll="getAll"in x;for(var P=0;P<x.indexNames.length;++P){var R=x.indexNames[P],z=x.index(R).keyPath,F=typeof z=="string"?z:"["+T(z).join("+")+"]";!e[p]||(z=e[p].idxByName[F])&&(z.name=R,delete e[p].idxByName[F],e[p].idxByName[R]=z)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&c.WorkerGlobalScope&&c instanceof c.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}function Ti(t){return t.split(",").map(function(e,i){var p=e.split(":"),a=(u=p[1])===null||u===void 0?void 0:u.trim(),u=(e=p[0].trim()).replace(/([&*]|\+\+)/g,""),p=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return Tr(u,p||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),f(p),i===0,a)})}var Ga=(pn.prototype._createTableSchema=$r,pn.prototype._parseIndexSyntax=Ti,pn.prototype._parseStoresSpec=function(t,e){var i=this;d(t).forEach(function(a){if(t[a]!==null){var u=i._parseIndexSyntax(t[a]),p=u.shift();if(!p)throw new mt.Schema("Invalid schema for table "+a+": "+t[a]);if(p.unique=!0,p.multi)throw new mt.Schema("Primary key cannot be multiEntry*");u.forEach(function(x){if(x.auto)throw new mt.Schema("Only primary key can be marked as autoIncrement (++)");if(!x.keyPath)throw new mt.Schema("Index must have a name and cannot be an empty string")}),u=i._createTableSchema(a,p,u),e[a]=u}})},pn.prototype.stores=function(i){var e=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,i):i;var i=e._versions,a={},u={};return i.forEach(function(p){m(a,p._cfg.storesSource),u=p._cfg.dbschema={},p._parseStoresSpec(a,u)}),e._dbSchema=u,Rr(e,[e._allTables,e,e.Transaction.prototype]),Jn(e,[e._allTables,e,e.Transaction.prototype,this._cfg.tables],d(u),u),e._storeNames=d(u),this},pn.prototype.upgrade=function(t){return this._cfg.contentUpgrade=st(this._cfg.contentUpgrade||Dt,t),this},pn);function pn(){}function Dr(t,e){var i=t._dbNamesDB;return i||(i=t._dbNamesDB=new Oe(Vn,{addons:[],indexedDB:t,IDBKeyRange:e})).version(1).stores({dbnames:"name"}),i.table("dbnames")}function Mr(t){return t&&typeof t.databases=="function"}function jr(t){return Me(function(){return St.letThrough=!0,t()})}function Fr(t){return!("from"in t)}var le=function(t,e){if(!this){var i=new le;return t&&"d"in t&&m(i,t),i}m(this,arguments.length?{d:1,from:t,to:1<arguments.length?e:t}:{d:0})};function Pn(t,e,i){var a=Ut(e,i);if(!isNaN(a)){if(0<a)throw RangeError();if(Fr(t))return m(t,{from:e,to:i,d:1});var u=t.l,a=t.r;if(Ut(i,t.from)<0)return u?Pn(u,e,i):t.l={from:e,to:i,d:1,l:null,r:null},Ii(t);if(0<Ut(e,t.to))return a?Pn(a,e,i):t.r={from:e,to:i,d:1,l:null,r:null},Ii(t);Ut(e,t.from)<0&&(t.from=e,t.l=null,t.d=a?a.d+1:1),0<Ut(i,t.to)&&(t.to=i,t.r=null,t.d=t.l?t.l.d+1:1),i=!t.r,u&&!t.l&&Tn(t,u),a&&i&&Tn(t,a)}}function Tn(t,e){Fr(e)||(function i(a,R){var p=R.from,x=R.to,P=R.l,R=R.r;Pn(a,p,x),P&&i(a,P),R&&i(a,R)})(t,e)}function $i(t,e){var i=rr(e),a=i.next();if(a.done)return!1;for(var u=a.value,p=rr(t),x=p.next(u.from),P=x.value;!a.done&&!x.done;){if(Ut(P.from,u.to)<=0&&0<=Ut(P.to,u.from))return!0;Ut(u.from,P.from)<0?u=(a=i.next(P.from)).value:P=(x=p.next(u.from)).value}return!1}function rr(t){var e=Fr(t)?null:{s:0,n:t};return{next:function(i){for(var a=0<arguments.length;e;)switch(e.s){case 0:if(e.s=1,a)for(;e.n.l&&Ut(i,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!a||Ut(i,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Ii(t){var e,i,a=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((i=t.l)===null||i===void 0?void 0:i.d)||0),u=1<a?"r":a<-1?"l":"";u&&(e=u=="r"?"l":"r",i=o({},t),a=t[u],t.from=a.from,t.to=a.to,t[u]=a[u],i[u]=a[e],(t[e]=i).d=Ri(i)),t.d=Ri(t)}function Ri(i){var e=i.r,i=i.l;return(e?i?Math.max(e.d,i.d):e.d:i?i.d:0)+1}function ir(t,e){return d(e).forEach(function(i){t[i]?Tn(t[i],e[i]):t[i]=(function a(u){var p,x,P={};for(p in u)_(u,p)&&(x=u[p],P[p]=!x||typeof x!="object"||Pt.has(x.constructor)?x:a(x));return P})(e[i])}),t}function Nr(t,e){return t.all||e.all||Object.keys(t).some(function(i){return e[i]&&$i(e[i],t[i])})}w(le.prototype,((ye={add:function(t){return Tn(this,t),this},addKey:function(t){return Pn(this,t,t),this},addKeys:function(t){var e=this;return t.forEach(function(i){return Pn(e,i,i)}),this},hasKey:function(t){var e=rr(this).next(t).value;return e&&Ut(e.from,t)<=0&&0<=Ut(e.to,t)}})[Tt]=function(){return rr(this)},ye));var Ge={},Ur={},Lr=!1;function ar(t){ir(Ur,t),Lr||(Lr=!0,setTimeout(function(){Lr=!1,Kr(Ur,!(Ur={}))},0))}function Kr(t,e){e===void 0&&(e=!1);var i=new Set;if(t.all)for(var a=0,u=Object.values(Ge);a<u.length;a++)zi(x=u[a],t,i,e);else for(var p in t){var x,P=/^idb\:\/\/(.*)\/(.*)\//.exec(p);P&&(p=P[1],P=P[2],(x=Ge["idb://".concat(p,"/").concat(P)])&&zi(x,t,i,e))}i.forEach(function(R){return R()})}function zi(t,e,i,a){for(var u=[],p=0,x=Object.entries(t.queries.query);p<x.length;p++){for(var P=x[p],R=P[0],z=[],F=0,$=P[1];F<$.length;F++){var L=$[F];Nr(e,L.obsSet)?L.subscribers.forEach(function(U){return i.add(U)}):a&&z.push(L)}a&&u.push([R,z])}if(a)for(var B=0,M=u;B<M.length;B++){var j=M[B],R=j[0],z=j[1];t.queries.query[R]=z}}function Xa(t){var e=t._state,i=t._deps.indexedDB;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(function(){return e.dbOpenError?Xt(e.dbOpenError):t});e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;var a=e.openCanceller,u=Math.round(10*t.verno),p=!1;function x(){if(e.openCanceller!==a)throw new mt.DatabaseClosed("db.open() was cancelled")}function P(){return new _t(function(L,B){if(x(),!i)throw new mt.MissingAPI;var M=t.name,j=e.autoSchema||!u?i.open(M):i.open(M,u);if(!j)throw new mt.MissingAPI;j.onerror=_e(B),j.onblocked=Yt(t._fireOnBlocked),j.onupgradeneeded=Yt(function(U){var W;F=j.transaction,e.autoSchema&&!t._options.allowEmptyDB?(j.onerror=Cn,F.abort(),j.result.close(),(W=i.deleteDatabase(M)).onsuccess=W.onerror=Yt(function(){B(new mt.NoSuchDatabase("Database ".concat(M," doesnt exist")))})):(F.onerror=_e(B),U=U.oldVersion>Math.pow(2,62)?0:U.oldVersion,$=U<1,t.idbdb=j.result,p&&Ya(t,F),Za(t,U/10,F,B))},B),j.onsuccess=Yt(function(){F=null;var U,W,H,Q,rt,ft=t.idbdb=j.result,bt=T(ft.objectStoreNames);if(0<bt.length)try{var dt=ft.transaction((Q=bt).length===1?Q[0]:Q,"readonly");if(e.autoSchema)W=ft,H=dt,(U=t).verno=W.version/10,H=U._dbSchema=er(0,W,H),U._storeNames=T(W.objectStoreNames,0),Jn(U,[U._allTables],d(H),H);else if(nr(t,t._dbSchema,dt),((rt=zr(er(0,(rt=t).idbdb,dt),rt._dbSchema)).add.length||rt.change.some(function(gt){return gt.add.length||gt.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),ft.close(),u=ft.version+1,p=!0,L(P());Qn(t,dt)}catch{}dn.push(t),ft.onversionchange=Yt(function(gt){e.vcFired=!0,t.on("versionchange").fire(gt)}),ft.onclose=Yt(function(){t.close({disableAutoOpen:!1})}),$&&(rt=t._deps,dt=M,ft=rt.indexedDB,rt=rt.IDBKeyRange,Mr(ft)||dt===Vn||Dr(ft,rt).put({name:dt}).catch(Dt)),L()},B)}).catch(function(L){switch(L?.name){case"UnknownError":if(0<e.PR1398_maxLoop)return e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),P();break;case"VersionError":if(0<u)return u=0,P()}return _t.reject(L)})}var R,z=e.dbReadyResolve,F=null,$=!1;return _t.race([a,(typeof navigator>"u"?_t.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(L){function B(){return indexedDB.databases().finally(L)}R=setInterval(B,100),B()}).finally(function(){return clearInterval(R)}):Promise.resolve()).then(P)]).then(function(){return x(),e.onReadyBeingFired=[],_t.resolve(jr(function(){return t.on.ready.fire(t.vip)})).then(function L(){if(0<e.onReadyBeingFired.length){var B=e.onReadyBeingFired.reduce(st,Dt);return e.onReadyBeingFired=[],_t.resolve(jr(function(){return B(t.vip)})).then(L)}})}).finally(function(){e.openCanceller===a&&(e.onReadyBeingFired=null,e.isBeingOpened=!1)}).catch(function(L){e.dbOpenError=L;try{F&&F.abort()}catch{}return a===e.openCanceller&&t._close(),Xt(L)}).finally(function(){e.openComplete=!0,z()}).then(function(){var L;return $&&(L={},t.tables.forEach(function(B){B.schema.indexes.forEach(function(M){M.name&&(L["idb://".concat(t.name,"/").concat(B.name,"/").concat(M.name)]=new le(-1/0,[[[]]]))}),L["idb://".concat(t.name,"/").concat(B.name,"/")]=L["idb://".concat(t.name,"/").concat(B.name,"/:dels")]=new le(-1/0,[[[]]])}),Ue(An).fire(L),Kr(L,!0)),t})}function qr(t){function e(p){return t.next(p)}var i=u(e),a=u(function(p){return t.throw(p)});function u(p){return function(R){var P=p(R),R=P.value;return P.done?R:R&&typeof R.then=="function"?R.then(i,a):f(R)?Promise.all(R).then(i,a):i(R)}}return u(e)()}function sr(t,e,i){for(var a=f(t)?t.slice():[t],u=0;u<i;++u)a.push(e);return a}var Qa={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return o(o({},t),{table:function(e){var i=t.table(e),a=i.schema,u={},p=[];function x($,L,B){var M=On($),j=u[M]=u[M]||[],U=$==null?0:typeof $=="string"?1:$.length,W=0<L,W=o(o({},B),{name:W?"".concat(M,"(virtual-from:").concat(B.name,")"):B.name,lowLevelIndex:B,isVirtual:W,keyTail:L,keyLength:U,extractKey:Ir($),unique:!W&&B.unique});return j.push(W),W.isPrimaryKey||p.push(W),1<U&&x(U===2?$[0]:$.slice(0,U-1),L+1,B),j.sort(function(H,Q){return H.keyTail-Q.keyTail}),W}e=x(a.primaryKey.keyPath,0,a.primaryKey),u[":id"]=[e];for(var P=0,R=a.indexes;P<R.length;P++){var z=R[P];x(z.keyPath,0,z)}function F($){var L,B=$.query.index;return B.isVirtual?o(o({},$),{query:{index:B.lowLevelIndex,range:(L=$.query.range,B=B.keyTail,{type:L.type===1?2:L.type,lower:sr(L.lower,L.lowerOpen?t.MAX_KEY:t.MIN_KEY,B),lowerOpen:!0,upper:sr(L.upper,L.upperOpen?t.MIN_KEY:t.MAX_KEY,B),upperOpen:!0})}}):$}return o(o({},i),{schema:o(o({},a),{primaryKey:e,indexes:p,getIndexByKeyPath:function($){return($=u[On($)])&&$[0]}}),count:function($){return i.count(F($))},query:function($){return i.query(F($))},openCursor:function($){var L=$.query.index,B=L.keyTail,M=L.isVirtual,j=L.keyLength;return M?i.openCursor(F($)).then(function(W){return W&&U(W)}):i.openCursor($);function U(W){return Object.create(W,{continue:{value:function(H){H!=null?W.continue(sr(H,$.reverse?t.MAX_KEY:t.MIN_KEY,B)):$.unique?W.continue(W.key.slice(0,j).concat($.reverse?t.MIN_KEY:t.MAX_KEY,B)):W.continue()}},continuePrimaryKey:{value:function(H,Q){W.continuePrimaryKey(sr(H,t.MAX_KEY,B),Q)}},primaryKey:{get:function(){return W.primaryKey}},key:{get:function(){var H=W.key;return j===1?H[0]:H.slice(0,j)}},value:{get:function(){return W.value}}})}}})}})}};function Wr(t,e,i,a){return i=i||{},a=a||"",d(t).forEach(function(u){var p,x,P;_(e,u)?(p=t[u],x=e[u],typeof p=="object"&&typeof x=="object"&&p&&x?(P=it(p))!==it(x)?i[a+u]=e[u]:P==="Object"?Wr(p,x,i,a+u+"."):p!==x&&(i[a+u]=e[u]):p!==x&&(i[a+u]=e[u])):i[a+u]=void 0}),d(e).forEach(function(u){_(t,u)||(i[a+u]=e[u])}),i}function Vr(t,e){return e.type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}var Ja={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(t){return o(o({},t),{table:function(e){var i=t.table(e),a=i.schema.primaryKey;return o(o({},i),{mutate:function(u){var p=St.trans,x=p.table(e).hook,P=x.deleting,R=x.creating,z=x.updating;switch(u.type){case"add":if(R.fire===Dt)break;return p._promise("readwrite",function(){return F(u)},!0);case"put":if(R.fire===Dt&&z.fire===Dt)break;return p._promise("readwrite",function(){return F(u)},!0);case"delete":if(P.fire===Dt)break;return p._promise("readwrite",function(){return F(u)},!0);case"deleteRange":if(P.fire===Dt)break;return p._promise("readwrite",function(){return(function $(L,B,M){return i.query({trans:L,values:!1,query:{index:a,range:B},limit:M}).then(function(j){var U=j.result;return F({type:"delete",keys:U,trans:L}).then(function(W){return 0<W.numFailures?Promise.reject(W.failures[0]):U.length<M?{failures:[],numFailures:0,lastResult:void 0}:$(L,o(o({},B),{lower:U[U.length-1],lowerOpen:!0}),M)})})})(u.trans,u.range,1e4)},!0)}return i.mutate(u);function F($){var L,B,M,j=St.trans,U=$.keys||Vr(a,$);if(!U)throw new Error("Keys missing");return($=$.type==="add"||$.type==="put"?o(o({},$),{keys:U}):o({},$)).type!=="delete"&&($.values=s([],$.values)),$.keys&&($.keys=s([],$.keys)),L=i,M=U,((B=$).type==="add"?Promise.resolve([]):L.getMany({trans:B.trans,keys:M,cache:"immutable"})).then(function(W){var H=U.map(function(Q,rt){var ft,bt,dt,gt=W[rt],wt={onerror:null,onsuccess:null};return $.type==="delete"?P.fire.call(wt,Q,gt,j):$.type==="add"||gt===void 0?(ft=R.fire.call(wt,Q,$.values[rt],j),Q==null&&ft!=null&&($.keys[rt]=Q=ft,a.outbound||X($.values[rt],a.keyPath,Q))):(ft=Wr(gt,$.values[rt]),(bt=z.fire.call(wt,ft,Q,gt,j))&&(dt=$.values[rt],Object.keys(bt).forEach(function(yt){_(dt,yt)?dt[yt]=bt[yt]:X(dt,yt,bt[yt])}))),wt});return i.mutate($).then(function(Q){for(var rt=Q.failures,ft=Q.results,bt=Q.numFailures,Q=Q.lastResult,dt=0;dt<U.length;++dt){var gt=(ft||U)[dt],wt=H[dt];gt==null?wt.onerror&&wt.onerror(rt[dt]):wt.onsuccess&&wt.onsuccess($.type==="put"&&W[dt]?$.values[dt]:gt)}return{failures:rt,results:ft,numFailures:bt,lastResult:Q}}).catch(function(Q){return H.forEach(function(rt){return rt.onerror&&rt.onerror(Q)}),Promise.reject(Q)})})}}})}})}};function Bi(t,e,i){try{if(!e||e.keys.length<t.length)return null;for(var a=[],u=0,p=0;u<e.keys.length&&p<t.length;++u)Ut(e.keys[u],t[p])===0&&(a.push(i?J(e.values[u]):e.values[u]),++p);return a.length===t.length?a:null}catch{return null}}var ts={stack:"dbcore",level:-1,create:function(t){return{table:function(e){var i=t.table(e);return o(o({},i),{getMany:function(a){if(!a.cache)return i.getMany(a);var u=Bi(a.keys,a.trans._cache,a.cache==="clone");return u?_t.resolve(u):i.getMany(a).then(function(p){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?J(p):p},p})},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),i.mutate(a)}})}}}};function Di(t,e){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!e.schema.primaryKey.outbound}function Mi(t,e){switch(t){case"query":return e.values&&!e.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var es={stack:"dbcore",level:0,name:"Observability",create:function(t){var e=t.schema.name,i=new le(t.MIN_KEY,t.MAX_KEY);return o(o({},t),{transaction:function(a,u,p){if(St.subscr&&u!=="readonly")throw new mt.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(St.querier));return t.transaction(a,u,p)},table:function(a){var u=t.table(a),p=u.schema,x=p.primaryKey,$=p.indexes,P=x.extractKey,R=x.outbound,z=x.autoIncrement&&$.filter(function(B){return B.compound&&B.keyPath.includes(x.keyPath)}),F=o(o({},u),{mutate:function(B){function M(yt){return yt="idb://".concat(e,"/").concat(a,"/").concat(yt),Q[yt]||(Q[yt]=new le)}var j,U,W,H=B.trans,Q=B.mutatedParts||(B.mutatedParts={}),rt=M(""),ft=M(":dels"),bt=B.type,wt=B.type==="deleteRange"?[B.range]:B.type==="delete"?[B.keys]:B.values.length<50?[Vr(x,B).filter(function(yt){return yt}),B.values]:[],dt=wt[0],gt=wt[1],wt=B.trans._cache;return f(dt)?(rt.addKeys(dt),(wt=bt==="delete"||dt.length===gt.length?Bi(dt,wt):null)||ft.addKeys(dt),(wt||gt)&&(j=M,U=wt,W=gt,p.indexes.forEach(function(yt){var Ct=j(yt.name||"");function zt(jt){return jt!=null?yt.extractKey(jt):null}function Bt(jt){return yt.multiEntry&&f(jt)?jt.forEach(function(me){return Ct.addKey(me)}):Ct.addKey(jt)}(U||W).forEach(function(jt,ce){var Rt=U&&zt(U[ce]),ce=W&&zt(W[ce]);Ut(Rt,ce)!==0&&(Rt!=null&&Bt(Rt),ce!=null&&Bt(ce))})}))):dt?(gt={from:(gt=dt.lower)!==null&&gt!==void 0?gt:t.MIN_KEY,to:(gt=dt.upper)!==null&&gt!==void 0?gt:t.MAX_KEY},ft.add(gt),rt.add(gt)):(rt.add(i),ft.add(i),p.indexes.forEach(function(yt){return M(yt.name).add(i)})),u.mutate(B).then(function(yt){return!dt||B.type!=="add"&&B.type!=="put"||(rt.addKeys(yt.results),z&&z.forEach(function(Ct){for(var zt=B.values.map(function(Rt){return Ct.extractKey(Rt)}),Bt=Ct.keyPath.findIndex(function(Rt){return Rt===x.keyPath}),jt=0,me=yt.results.length;jt<me;++jt)zt[jt][Bt]=yt.results[jt];M(Ct.name).addKeys(zt)})),H.mutatedParts=ir(H.mutatedParts||{},Q),yt})}}),$=function(M){var j=M.query,M=j.index,j=j.range;return[M,new le((M=j.lower)!==null&&M!==void 0?M:t.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:t.MAX_KEY)]},L={get:function(B){return[x,new le(B.key)]},getMany:function(B){return[x,new le().addKeys(B.keys)]},count:$,query:$,openCursor:$};return d(L).forEach(function(B){F[B]=function(M){var j=St.subscr,U=!!j,W=Di(St,u)&&Mi(B,M)?M.obsSet={}:j;if(U){var H=function(gt){return gt="idb://".concat(e,"/").concat(a,"/").concat(gt),W[gt]||(W[gt]=new le)},Q=H(""),rt=H(":dels"),j=L[B](M),U=j[0],j=j[1];if((B==="query"&&U.isPrimaryKey&&!M.values?rt:H(U.name||"")).add(j),!U.isPrimaryKey){if(B!=="count"){var ft=B==="query"&&R&&M.values&&u.query(o(o({},M),{values:!1}));return u[B].apply(this,arguments).then(function(gt){if(B==="query"){if(R&&M.values)return ft.then(function(zt){return zt=zt.result,Q.addKeys(zt),gt});var wt=M.values?gt.result.map(P):gt.result;(M.values?Q:rt).addKeys(wt)}else if(B==="openCursor"){var yt=gt,Ct=M.values;return yt&&Object.create(yt,{key:{get:function(){return rt.addKey(yt.primaryKey),yt.key}},primaryKey:{get:function(){var zt=yt.primaryKey;return rt.addKey(zt),zt}},value:{get:function(){return Ct&&Q.addKey(yt.primaryKey),yt.value}}})}return gt})}rt.add(i)}}return u[B].apply(this,arguments)}}),F}})}};function ji(t,e,i){if(i.numFailures===0)return e;if(e.type==="deleteRange")return null;var a=e.keys?e.keys.length:"values"in e&&e.values?e.values.length:1;return i.numFailures===a?null:(e=o({},e),f(e.keys)&&(e.keys=e.keys.filter(function(u,p){return!(p in i.failures)})),"values"in e&&f(e.values)&&(e.values=e.values.filter(function(u,p){return!(p in i.failures)})),e)}function Hr(t,e){return i=t,((a=e).lower===void 0||(a.lowerOpen?0<Ut(i,a.lower):0<=Ut(i,a.lower)))&&(t=t,(e=e).upper===void 0||(e.upperOpen?Ut(t,e.upper)<0:Ut(t,e.upper)<=0));var i,a}function Fi(t,e,L,a,u,p){if(!L||L.length===0)return t;var x=e.query.index,P=x.multiEntry,R=e.query.range,z=a.schema.primaryKey.extractKey,F=x.extractKey,$=(x.lowLevelIndex||x).extractKey,L=L.reduce(function(B,M){var j=B,U=[];if(M.type==="add"||M.type==="put")for(var W=new le,H=M.values.length-1;0<=H;--H){var Q,rt=M.values[H],ft=z(rt);W.hasKey(ft)||(Q=F(rt),(P&&f(Q)?Q.some(function(yt){return Hr(yt,R)}):Hr(Q,R))&&(W.addKey(ft),U.push(rt)))}switch(M.type){case"add":var bt=new le().addKeys(e.values?B.map(function(Ct){return z(Ct)}):B),j=B.concat(e.values?U.filter(function(Ct){return Ct=z(Ct),!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}):U.map(function(Ct){return z(Ct)}).filter(function(Ct){return!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}));break;case"put":var dt=new le().addKeys(M.values.map(function(Ct){return z(Ct)}));j=B.filter(function(Ct){return!dt.hasKey(e.values?z(Ct):Ct)}).concat(e.values?U:U.map(function(Ct){return z(Ct)}));break;case"delete":var gt=new le().addKeys(M.keys);j=B.filter(function(Ct){return!gt.hasKey(e.values?z(Ct):Ct)});break;case"deleteRange":var wt=M.range;j=B.filter(function(Ct){return!Hr(z(Ct),wt)})}return j},t);return L===t?t:(L.sort(function(B,M){return Ut($(B),$(M))||Ut(z(B),z(M))}),e.limit&&e.limit<1/0&&(L.length>e.limit?L.length=e.limit:t.length===e.limit&&L.length<e.limit&&(u.dirty=!0)),p?Object.freeze(L):L)}function Ni(t,e){return Ut(t.lower,e.lower)===0&&Ut(t.upper,e.upper)===0&&!!t.lowerOpen==!!e.lowerOpen&&!!t.upperOpen==!!e.upperOpen}function ns(t,e){return(function(i,a,u,p){if(i===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((a=Ut(i,a))===0){if(u&&p)return 0;if(u)return 1;if(p)return-1}return a})(t.lower,e.lower,t.lowerOpen,e.lowerOpen)<=0&&0<=(function(i,a,u,p){if(i===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((a=Ut(i,a))===0){if(u&&p)return 0;if(u)return-1;if(p)return 1}return a})(t.upper,e.upper,t.upperOpen,e.upperOpen)}function rs(t,e,i,a){t.subscribers.add(i),a.addEventListener("abort",function(){var u,p;t.subscribers.delete(i),t.subscribers.size===0&&(u=t,p=e,setTimeout(function(){u.subscribers.size===0&&$t(p,u)},3e3))})}var is={stack:"dbcore",level:0,name:"Cache",create:function(t){var e=t.schema.name;return o(o({},t),{transaction:function(i,a,u){var p,x,P=t.transaction(i,a,u);return a==="readwrite"&&(x=(p=new AbortController).signal,u=function(R){return function(){if(p.abort(),a==="readwrite"){for(var z=new Set,F=0,$=i;F<$.length;F++){var L=$[F],B=Ge["idb://".concat(e,"/").concat(L)];if(B){var M=t.table(L),j=B.optimisticOps.filter(function(Ct){return Ct.trans===P});if(P._explicit&&R&&P.mutatedParts)for(var U=0,W=Object.values(B.queries.query);U<W.length;U++)for(var H=0,Q=(bt=W[U]).slice();H<Q.length;H++)Nr((dt=Q[H]).obsSet,P.mutatedParts)&&($t(bt,dt),dt.subscribers.forEach(function(Ct){return z.add(Ct)}));else if(0<j.length){B.optimisticOps=B.optimisticOps.filter(function(Ct){return Ct.trans!==P});for(var rt=0,ft=Object.values(B.queries.query);rt<ft.length;rt++)for(var bt,dt,gt,wt=0,yt=(bt=ft[rt]).slice();wt<yt.length;wt++)(dt=yt[wt]).res!=null&&P.mutatedParts&&(R&&!dt.dirty?(gt=Object.isFrozen(dt.res),gt=Fi(dt.res,dt.req,j,M,dt,gt),dt.dirty?($t(bt,dt),dt.subscribers.forEach(function(Ct){return z.add(Ct)})):gt!==dt.res&&(dt.res=gt,dt.promise=_t.resolve({result:gt}))):(dt.dirty&&$t(bt,dt),dt.subscribers.forEach(function(Ct){return z.add(Ct)})))}}}z.forEach(function(Ct){return Ct()})}}},P.addEventListener("abort",u(!1),{signal:x}),P.addEventListener("error",u(!1),{signal:x}),P.addEventListener("complete",u(!0),{signal:x})),P},table:function(i){var a=t.table(i),u=a.schema.primaryKey;return o(o({},a),{mutate:function(p){var x=St.trans;if(u.outbound||x.db._options.cache==="disabled"||x.explicit||x.idbtrans.mode!=="readwrite")return a.mutate(p);var P=Ge["idb://".concat(e,"/").concat(i)];return P?(x=a.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||Vr(u,p).some(function(R){return R==null}))?(P.optimisticOps.push(p),p.mutatedParts&&ar(p.mutatedParts),x.then(function(R){0<R.numFailures&&($t(P.optimisticOps,p),(R=ji(0,p,R))&&P.optimisticOps.push(R),p.mutatedParts&&ar(p.mutatedParts))}),x.catch(function(){$t(P.optimisticOps,p),p.mutatedParts&&ar(p.mutatedParts)})):x.then(function(R){var z=ji(0,o(o({},p),{values:p.values.map(function(F,$){var L;return R.failures[$]?F:(F=(L=u.keyPath)!==null&&L!==void 0&&L.includes(".")?J(F):o({},F),X(F,u.keyPath,R.results[$]),F)})}),R);P.optimisticOps.push(z),queueMicrotask(function(){return p.mutatedParts&&ar(p.mutatedParts)})}),x):a.mutate(p)},query:function(p){if(!Di(St,a)||!Mi("query",p))return a.query(p);var x=((z=St.trans)===null||z===void 0?void 0:z.db._options.cache)==="immutable",$=St,P=$.requery,R=$.signal,z=(function(M,j,U,W){var H=Ge["idb://".concat(M,"/").concat(j)];if(!H)return[];if(!(j=H.queries[U]))return[null,!1,H,null];var Q=j[(W.query?W.query.index.name:null)||""];if(!Q)return[null,!1,H,null];switch(U){case"query":var rt=Q.find(function(ft){return ft.req.limit===W.limit&&ft.req.values===W.values&&Ni(ft.req.query.range,W.query.range)});return rt?[rt,!0,H,Q]:[Q.find(function(ft){return("limit"in ft.req?ft.req.limit:1/0)>=W.limit&&(!W.values||ft.req.values)&&ns(ft.req.query.range,W.query.range)}),!1,H,Q];case"count":return rt=Q.find(function(ft){return Ni(ft.req.query.range,W.query.range)}),[rt,!!rt,H,Q]}})(e,i,"query",p),F=z[0],$=z[1],L=z[2],B=z[3];return F&&$?F.obsSet=p.obsSet:($=a.query(p).then(function(M){var j=M.result;if(F&&(F.res=j),x){for(var U=0,W=j.length;U<W;++U)Object.freeze(j[U]);Object.freeze(j)}else M.result=J(j);return M}).catch(function(M){return B&&F&&$t(B,F),Promise.reject(M)}),F={obsSet:p.obsSet,promise:$,subscribers:new Set,type:"query",req:p,dirty:!1},B?B.push(F):(B=[F],(L=L||(Ge["idb://".concat(e,"/").concat(i)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=B)),rs(F,B,P,R),F.promise.then(function(M){return{result:Fi(M.result,p,L?.optimisticOps,a,F,x)}})}})}})}};function or(t,e){return new Proxy(t,{get:function(i,a,u){return a==="db"?e:Reflect.get(i,a,u)}})}var Oe=(Qt.prototype.version=function(t){if(isNaN(t)||t<.1)throw new mt.Type("Given version is not a positive number");if(t=Math.round(10*t)/10,this.idbdb||this._state.isBeingOpened)throw new mt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var e=this._versions,i=e.filter(function(a){return a._cfg.version===t})[0];return i||(i=new this.Version(t),e.push(i),e.sort(Ha),i.stores({}),this._state.autoSchema=!1,i)},Qt.prototype._whenReady=function(t){var e=this;return this.idbdb&&(this._state.openComplete||St.letThrough||this._vip)?t():new _t(function(i,a){if(e._state.openComplete)return a(new mt.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return void a(new mt.DatabaseClosed);e.open().catch(Dt)}e._state.dbReadyPromise.then(i,a)}).then(t)},Qt.prototype.use=function(t){var e=t.stack,i=t.create,a=t.level,u=t.name;return u&&this.unuse({stack:e,name:u}),t=this._middlewares[e]||(this._middlewares[e]=[]),t.push({stack:e,create:i,level:a??10,name:u}),t.sort(function(p,x){return p.level-x.level}),this},Qt.prototype.unuse=function(t){var e=t.stack,i=t.name,a=t.create;return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(function(u){return a?u.create!==a:!!i&&u.name!==i})),this},Qt.prototype.open=function(){var t=this;return He(ve,function(){return Xa(t)})},Qt.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state,e=dn.indexOf(this);if(0<=e&&dn.splice(e,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new _t(function(i){t.dbReadyResolve=i}),t.openCanceller=new _t(function(i,a){t.cancelOpen=a}))},Qt.prototype.close=function(i){var e=(i===void 0?{disableAutoOpen:!0}:i).disableAutoOpen,i=this._state;e?(i.isBeingOpened&&i.cancelOpen(new mt.DatabaseClosed),this._close(),i.autoOpen=!1,i.dbOpenError=new mt.DatabaseClosed):(this._close(),i.autoOpen=this._options.autoOpen||i.isBeingOpened,i.openComplete=!1,i.dbOpenError=null)},Qt.prototype.delete=function(t){var e=this;t===void 0&&(t={disableAutoOpen:!0});var i=0<arguments.length&&typeof arguments[0]!="object",a=this._state;return new _t(function(u,p){function x(){e.close(t);var P=e._deps.indexedDB.deleteDatabase(e.name);P.onsuccess=Yt(function(){var R,z,F;R=e._deps,z=e.name,F=R.indexedDB,R=R.IDBKeyRange,Mr(F)||z===Vn||Dr(F,R).delete(z).catch(Dt),u()}),P.onerror=_e(p),P.onblocked=e._fireOnBlocked}if(i)throw new mt.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(x):x()})},Qt.prototype.backendDB=function(){return this.idbdb},Qt.prototype.isOpen=function(){return this.idbdb!==null},Qt.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},Qt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Qt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Qt.prototype,"tables",{get:function(){var t=this;return d(this._allTables).map(function(e){return t._allTables[e]})},enumerable:!1,configurable:!0}),Qt.prototype.transaction=function(){var t=function(e,i,a){var u=arguments.length;if(u<2)throw new mt.InvalidArgument("Too few arguments");for(var p=new Array(u-1);--u;)p[u-1]=arguments[u];return a=p.pop(),[e,pt(p),a]}.apply(this,arguments);return this._transaction.apply(this,t)},Qt.prototype._transaction=function(t,e,i){var a=this,u=St.trans;u&&u.db===this&&t.indexOf("!")===-1||(u=null);var p,x,P=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");try{if(x=e.map(function(z){if(z=z instanceof a.Table?z.name:z,typeof z!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return z}),t=="r"||t===Cr)p=Cr;else{if(t!="rw"&&t!=Ar)throw new mt.InvalidArgument("Invalid transaction mode: "+t);p=Ar}if(u){if(u.mode===Cr&&p===Ar){if(!P)throw new mt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");u=null}u&&x.forEach(function(z){if(u&&u.storeNames.indexOf(z)===-1){if(!P)throw new mt.SubTransaction("Table "+z+" not included in parent transaction.");u=null}}),P&&u&&!u.active&&(u=null)}}catch(z){return u?u._promise(null,function(F,$){$(z)}):Xt(z)}var R=function z(F,$,L,B,M){return _t.resolve().then(function(){var j=St.transless||St,U=F._createTransaction($,L,F._dbSchema,B);if(U.explicit=!0,j={trans:U,transless:j},B)U.idbtrans=B.idbtrans;else try{U.create(),U.idbtrans._explicit=!0,F._state.PR1398_maxLoop=3}catch(Q){return Q.name===te.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return z(F,$,L,null,M)})):Xt(Q)}var W,H=Y(M);return H&&un(),j=_t.follow(function(){var Q;(W=M.call(U,U))&&(H?(Q=je.bind(null,null),W.then(Q,Q)):typeof W.next=="function"&&typeof W.throw=="function"&&(W=qr(W)))},j),(W&&typeof W.then=="function"?_t.resolve(W).then(function(Q){return U.active?Q:Xt(new mt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return W})).then(function(Q){return B&&U._resolve(),U._completion.then(function(){return Q})}).catch(function(Q){return U._reject(Q),Xt(Q)})})}.bind(null,this,p,x,u,i);return u?u._promise(p,R,"lock"):St.trans?He(St.transless,function(){return a._whenReady(R)}):this._whenReady(R)},Qt.prototype.table=function(t){if(!_(this._allTables,t))throw new mt.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},Qt);function Qt(t,e){var i=this;this._middlewares={},this.verno=0;var a=Qt.dependencies;this._options=e=o({addons:Qt.addons,autoOpen:!0,indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange,cache:"cloned"},e),this._deps={indexedDB:e.indexedDB,IDBKeyRange:e.IDBKeyRange},a=e.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var u,p,x,P,R,z={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Dt,dbReadyPromise:null,cancelOpen:Dt,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:e.autoOpen};z.dbReadyPromise=new _t(function($){z.dbReadyResolve=$}),z.openCanceller=new _t(function($,L){z.cancelOpen=L}),this._state=z,this.name=t,this.on=kn(this,"populate","blocked","versionchange","close",{ready:[st,Dt]}),this.once=function($,L){var B=function(){for(var M=[],j=0;j<arguments.length;j++)M[j]=arguments[j];i.on($).unsubscribe(B),L.apply(i,M)};return i.on($,B)},this.on.ready.subscribe=D(this.on.ready.subscribe,function($){return function(L,B){Qt.vip(function(){var M,j=i._state;j.openComplete?(j.dbOpenError||_t.resolve().then(L),B&&$(L)):j.onReadyBeingFired?(j.onReadyBeingFired.push(L),B&&$(L)):($(L),M=i,B||$(function U(){M.on.ready.unsubscribe(L),M.on.ready.unsubscribe(U)}))})}}),this.Collection=(u=this,Sn(Na.prototype,function(W,U){this.db=u;var B=mi,M=null;if(U)try{B=U()}catch(H){M=H}var j=W._ctx,U=j.table,W=U.hook.reading.fire;this._ctx={table:U,index:j.index,isPrimKey:!j.index||U.schema.primKey.keyPath&&j.index===U.schema.primKey.name,range:B,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:M,or:j.or,valueMapper:W!==oe?W:null}})),this.Table=(p=this,Sn(_i.prototype,function($,L,B){this.db=p,this._tx=B,this.name=$,this.schema=L,this.hook=p._allTables[$]?p._allTables[$].hook:kn(null,{creating:[G,Dt],reading:[h,oe],updating:[A,Dt],deleting:[O,Dt]})})),this.Transaction=(x=this,Sn(Ka.prototype,function($,L,B,M,j){var U=this;$!=="readonly"&&L.forEach(function(W){W=(W=B[W])===null||W===void 0?void 0:W.yProps,W&&(L=L.concat(W.map(function(H){return H.updatesTable})))}),this.db=x,this.mode=$,this.storeNames=L,this.schema=B,this.chromeTransactionDurability=M,this.idbtrans=null,this.on=kn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new _t(function(W,H){U._resolve=W,U._reject=H}),this._completion.then(function(){U.active=!1,U.on.complete.fire()},function(W){var H=U.active;return U.active=!1,U.on.error.fire(W),U.parent?U.parent._reject(W):H&&U.idbtrans&&U.idbtrans.abort(),Xt(W)})})),this.Version=(P=this,Sn(Ga.prototype,function($){this.db=P,this._cfg={version:$,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(R=this,Sn(Ai.prototype,function($,L,B){if(this.db=R,this._ctx={table:$,index:L===":id"?null:L,or:B},this._cmp=this._ascending=Ut,this._descending=function(M,j){return Ut(j,M)},this._max=function(M,j){return 0<Ut(M,j)?M:j},this._min=function(M,j){return Ut(M,j)<0?M:j},this._IDBKeyRange=R._deps.IDBKeyRange,!this._IDBKeyRange)throw new mt.MissingAPI})),this.on("versionchange",function($){0<$.newVersion?console.warn("Another connection wants to upgrade database '".concat(i.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(i.name,"'. Closing db now to resume the delete request.")),i.close({disableAutoOpen:!1})}),this.on("blocked",function($){!$.newVersion||$.newVersion<$.oldVersion?console.warn("Dexie.delete('".concat(i.name,"') was blocked")):console.warn("Upgrade '".concat(i.name,"' blocked by other connection holding version ").concat($.oldVersion/10))}),this._maxKey=En(e.IDBKeyRange),this._createTransaction=function($,L,B,M){return new i.Transaction($,L,B,i._options.chromeTransactionDurability,M)},this._fireOnBlocked=function($){i.on("blocked").fire($),dn.filter(function(L){return L.name===i.name&&L!==i&&!L._state.vcFired}).map(function(L){return L.on("versionchange").fire($)})},this.use(ts),this.use(is),this.use(es),this.use(Qa),this.use(Ja);var F=new Proxy(this,{get:function($,L,B){if(L==="_vip")return!0;if(L==="table")return function(j){return or(i.table(j),F)};var M=Reflect.get($,L,B);return M instanceof _i?or(M,F):L==="tables"?M.map(function(j){return or(j,F)}):L==="_createTransaction"?function(){return or(M.apply(this,arguments),F)}:M}});this.vip=F,a.forEach(function($){return $(i)})}var lr,ye=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",as=(Zr.prototype.subscribe=function(t,e,i){return this._subscribe(t&&typeof t!="function"?t:{next:t,error:e,complete:i})},Zr.prototype[ye]=function(){return this},Zr);function Zr(t){this._subscribe=t}try{lr={indexedDB:c.indexedDB||c.mozIndexedDB||c.webkitIndexedDB||c.msIndexedDB,IDBKeyRange:c.IDBKeyRange||c.webkitIDBKeyRange}}catch{lr={indexedDB:null,IDBKeyRange:null}}function Ui(t){var e,i=!1,a=new as(function(u){var p=Y(t),x,P=!1,R={},z={},F={get closed(){return P},unsubscribe:function(){P||(P=!0,x&&x.abort(),$&&Ue.storagemutated.unsubscribe(B))}};u.start&&u.start(F);var $=!1,L=function(){return Sr(M)},B=function(j){ir(R,j),Nr(z,R)&&L()},M=function(){var j,U,W;!P&&lr.indexedDB&&(R={},j={},x&&x.abort(),x=new AbortController,W=(function(H){var Q=ln();try{p&&un();var rt=Me(t,H);return rt=p?rt.finally(je):rt}finally{Q&&cn()}})(U={subscr:j,signal:x.signal,requery:L,querier:t,trans:null}),Promise.resolve(W).then(function(H){i=!0,e=H,P||U.signal.aborted||(R={},(function(Q){for(var rt in Q)if(_(Q,rt))return;return 1})(z=j)||$||(Ue(An,B),$=!0),Sr(function(){return!P&&u.next&&u.next(H)}))},function(H){i=!1,["DatabaseClosedError","AbortError"].includes(H?.name)||P||Sr(function(){P||u.error&&u.error(H)})}))};return setTimeout(L,0),F});return a.hasValue=function(){return i},a.getValue=function(){return e},a}var Xe=Oe;function Yr(t){var e=Le;try{Le=!0,Ue.storagemutated.fire(t),Kr(t,!0)}finally{Le=e}}w(Xe,o(o({},Vt),{delete:function(t){return new Xe(t,{addons:[]}).delete()},exists:function(t){return new Xe(t,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(t){try{return e=Xe.dependencies,i=e.indexedDB,e=e.IDBKeyRange,(Mr(i)?Promise.resolve(i.databases()).then(function(a){return a.map(function(u){return u.name}).filter(function(u){return u!==Vn})}):Dr(i,e).toCollection().primaryKeys()).then(t)}catch{return Xt(new mt.MissingAPI)}var e,i},defineClass:function(){return function(t){m(this,t)}},ignoreTransaction:function(t){return St.trans?He(St.transless,t):t()},vip:jr,async:function(t){return function(){try{var e=qr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:_t.resolve(e)}catch(i){return Xt(i)}}},spawn:function(t,e,i){try{var a=qr(t.apply(i,e||[]));return a&&typeof a.then=="function"?a:_t.resolve(a)}catch(u){return Xt(u)}},currentTransaction:{get:function(){return St.trans||null}},waitFor:function(t,e){return e=_t.resolve(typeof t=="function"?Xe.ignoreTransaction(t):t).timeout(e||6e4),St.trans?St.trans.waitFor(e):e},Promise:_t,debug:{get:function(){return at},set:function(t){V(t)}},derive:y,extend:m,props:w,override:D,Events:kn,on:Ue,liveQuery:Ui,extendObservabilitySet:ir,getByKeyPath:nt,setByKeyPath:X,delByKeyPath:function(t,e){typeof e=="string"?X(t,e,void 0):"length"in e&&[].map.call(e,function(i){X(t,i,void 0)})},shallowClone:ct,deepClone:J,getObjectDiff:Wr,cmp:Ut,asap:K,minKey:-1/0,addons:[],connections:dn,errnames:te,dependencies:lr,cache:Ge,semVer:"4.2.1",version:"4.2.1".split(".").map(function(t){return parseInt(t)}).reduce(function(t,e,i){return t+e/Math.pow(10,2*i)})})),Xe.maxKey=En(Xe.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Ue(An,function(t){Le||(t=new CustomEvent(Pr,{detail:t}),Le=!0,dispatchEvent(t),Le=!1)}),addEventListener(Pr,function(t){t=t.detail,Le||Yr(t)}));var mn,Le=!1,Li=function(){};return typeof BroadcastChannel<"u"&&((Li=function(){(mn=new BroadcastChannel(Pr)).onmessage=function(t){return t.data&&Yr(t.data)}})(),typeof mn.unref=="function"&&mn.unref(),Ue(An,function(t){Le||mn.postMessage(t)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(t){if(!Oe.disableBfCache&&t.persisted){at&&console.debug("Dexie: handling persisted pagehide"),mn?.close();for(var e=0,i=dn;e<i.length;e++)i[e].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(t){!Oe.disableBfCache&&t.persisted&&(at&&console.debug("Dexie: handling persisted pageshow"),Li(),Yr({all:new le(-1/0,[[]])}))})),_t.rejectionMapper=function(t,e){return!t||t instanceof Et||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Gt[t.name]?t:(e=new Gt[t.name](e||t.message,t),"stack"in t&&C(e,"stack",{get:function(){return this.inner.stack}}),e)},V(at),o(Oe,Object.freeze({__proto__:null,Dexie:Oe,liveQuery:Ui,Entity:gi,cmp:Ut,PropModification:xn,replacePrefix:function(t,e){return new xn({replacePrefix:[t,e]})},add:function(t){return new xn({add:t})},remove:function(t){return new xn({remove:t})},default:Oe,RangeSet:le,mergeRanges:Tn,rangesOverlap:$i}),{default:Oe}),Oe})})(hr)),hr.exports}var Us=Ns();const ei=ma(Us),ea=Symbol.for("Dexie"),gr=globalThis[ea]||(globalThis[ea]=ei);if(ei.semVer!==gr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${ei.semVer} and ${gr.semVer}`);const{liveQuery:al,mergeRanges:sl,rangesOverlap:ol,RangeSet:ll,cmp:cl,Entity:ul,PropModification:dl,replacePrefix:hl,add:fl,remove:pl,DexieYProvider:ml}=gr;class Ls extends gr{constructor(){super("AudioAnnotationDB"),this.version(1).stores({recordings:"id, title, createdAt, isAnnotated",annotations:"recordingId, completedAt, updatedAt"})}}const be=new Ls;async function ga(l){const{v4:n}=await js(async()=>{const{v4:s}=await import("./index-gGVEG6Gs.js");return{v4:s}},[]),r=n(),o={...l,id:r,createdAt:Date.now(),isAnnotated:!1};return await be.recordings.add(o),r}async function va(){return await be.recordings.orderBy("createdAt").reverse().toArray()}async function Ks(l){return await be.recordings.get(l)}async function qs(l,n){await be.recordings.update(l,n)}async function Ws(l){await be.recordings.delete(l),await be.annotations.delete(l)}async function Qr(l){await be.annotations.put(l),await be.recordings.update(l.recordingId,{isAnnotated:!0})}async function Rn(l){return await be.annotations.get(l)}async function Vs(l){await be.annotations.delete(l),await be.recordings.update(l,{isAnnotated:!1})}async function Hs(){const l=await be.recordings.toArray(),n=/^Untitled (\d+)$/,r=l.map(o=>o.title.match(n)?.[1]).filter(Boolean).map(Number);return r.length>0?Math.max(...r)+1:1}function Zs(l){const n=l.lastIndexOf(".");return n===-1?l:l.substring(0,n)}async function Ys(l){return new Promise((n,r)=>{const o=new Audio,s=URL.createObjectURL(l);o.addEventListener("loadedmetadata",()=>{URL.revokeObjectURL(s),n(o.duration)}),o.addEventListener("error",()=>{URL.revokeObjectURL(s),r(new Error("Failed to load audio metadata"))}),o.src=s})}async function Gs(l){if(!l.type.startsWith("audio/"))throw new Error("File must be an audio file");const n=Zs(l.name),r=await Ys(l);return{id:await ga({title:n,audioBlob:l,duration:r,source:"upload"}),title:n,duration:r}}async function Xs(l){const n=Array.from(l),r=[];for(const o of n)try{const s=await Gs(o);r.push(s)}catch(s){console.error(`Failed to upload ${o.name}:`,s)}return r}function Qs(){return new Promise(l=>{const n=document.createElement("input");n.type="file",n.accept="audio/*",n.multiple=!0,n.addEventListener("change",()=>{l(n.files)}),n.addEventListener("cancel",()=>{l(null)}),n.click()})}function ur(l){throw new Error('Could not dynamically require "'+l+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Jr={exports:{}};var na;function Js(){return na||(na=1,(function(l,n){(function(r){l.exports=r()})(function(){return(function r(o,s,c){function d(b,k){if(!s[b]){if(!o[b]){var _=typeof ur=="function"&&ur;if(!k&&_)return _(b,!0);if(f)return f(b,!0);var w=new Error("Cannot find module '"+b+"'");throw w.code="MODULE_NOT_FOUND",w}var v=s[b]={exports:{}};o[b][0].call(v.exports,function(C){var y=o[b][1][C];return d(y||C)},v,v.exports,r,o,s,c)}return s[b].exports}for(var f=typeof ur=="function"&&ur,m=0;m<c.length;m++)d(c[m]);return d})({1:[function(r,o,s){var c=r("./utils"),d=r("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(m){for(var b,k,_,w,v,C,y,E=[],S=0,T=m.length,D=T,q=c.getTypeOf(m)!=="string";S<m.length;)D=T-S,_=q?(b=m[S++],k=S<T?m[S++]:0,S<T?m[S++]:0):(b=m.charCodeAt(S++),k=S<T?m.charCodeAt(S++):0,S<T?m.charCodeAt(S++):0),w=b>>2,v=(3&b)<<4|k>>4,C=1<D?(15&k)<<2|_>>6:64,y=2<D?63&_:64,E.push(f.charAt(w)+f.charAt(v)+f.charAt(C)+f.charAt(y));return E.join("")},s.decode=function(m){var b,k,_,w,v,C,y=0,E=0,S="data:";if(m.substr(0,S.length)===S)throw new Error("Invalid base64 input, it looks like a data url.");var T,D=3*(m=m.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(m.charAt(m.length-1)===f.charAt(64)&&D--,m.charAt(m.length-2)===f.charAt(64)&&D--,D%1!=0)throw new Error("Invalid base64 input, bad content length.");for(T=d.uint8array?new Uint8Array(0|D):new Array(0|D);y<m.length;)b=f.indexOf(m.charAt(y++))<<2|(w=f.indexOf(m.charAt(y++)))>>4,k=(15&w)<<4|(v=f.indexOf(m.charAt(y++)))>>2,_=(3&v)<<6|(C=f.indexOf(m.charAt(y++))),T[E++]=b,v!==64&&(T[E++]=k),C!==64&&(T[E++]=_);return T}},{"./support":30,"./utils":32}],2:[function(r,o,s){var c=r("./external"),d=r("./stream/DataWorker"),f=r("./stream/Crc32Probe"),m=r("./stream/DataLengthProbe");function b(k,_,w,v,C){this.compressedSize=k,this.uncompressedSize=_,this.crc32=w,this.compression=v,this.compressedContent=C}b.prototype={getContentWorker:function(){var k=new d(c.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new m("data_length")),_=this;return k.on("end",function(){if(this.streamInfo.data_length!==_.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),k},getCompressedWorker:function(){return new d(c.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},b.createWorkerFrom=function(k,_,w){return k.pipe(new f).pipe(new m("uncompressedSize")).pipe(_.compressWorker(w)).pipe(new m("compressedSize")).withStreamInfo("compression",_)},o.exports=b},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,o,s){var c=r("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new c("STORE compression")},uncompressWorker:function(){return new c("STORE decompression")}},s.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,o,s){var c=r("./utils"),d=(function(){for(var f,m=[],b=0;b<256;b++){f=b;for(var k=0;k<8;k++)f=1&f?3988292384^f>>>1:f>>>1;m[b]=f}return m})();o.exports=function(f,m){return f!==void 0&&f.length?c.getTypeOf(f)!=="string"?(function(b,k,_,w){var v=d,C=w+_;b^=-1;for(var y=w;y<C;y++)b=b>>>8^v[255&(b^k[y])];return-1^b})(0|m,f,f.length,0):(function(b,k,_,w){var v=d,C=w+_;b^=-1;for(var y=w;y<C;y++)b=b>>>8^v[255&(b^k.charCodeAt(y))];return-1^b})(0|m,f,f.length,0):0}},{"./utils":32}],5:[function(r,o,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(r,o,s){var c=null;c=typeof Promise<"u"?Promise:r("lie"),o.exports={Promise:c}},{lie:37}],7:[function(r,o,s){var c=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",d=r("pako"),f=r("./utils"),m=r("./stream/GenericWorker"),b=c?"uint8array":"array";function k(_,w){m.call(this,"FlateWorker/"+_),this._pako=null,this._pakoAction=_,this._pakoOptions=w,this.meta={}}s.magic="\b\0",f.inherits(k,m),k.prototype.processChunk=function(_){this.meta=_.meta,this._pako===null&&this._createPako(),this._pako.push(f.transformTo(b,_.data),!1)},k.prototype.flush=function(){m.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},k.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this._pako=null},k.prototype._createPako=function(){this._pako=new d[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var _=this;this._pako.onData=function(w){_.push({data:w,meta:_.meta})}},s.compressWorker=function(_){return new k("Deflate",_)},s.uncompressWorker=function(){return new k("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,o,s){function c(v,C){var y,E="";for(y=0;y<C;y++)E+=String.fromCharCode(255&v),v>>>=8;return E}function d(v,C,y,E,S,T){var D,q,K=v.file,nt=v.compression,X=T!==b.utf8encode,ct=f.transformTo("string",T(K.name)),tt=f.transformTo("string",b.utf8encode(K.name)),pt=K.comment,Pt=f.transformTo("string",T(pt)),I=f.transformTo("string",b.utf8encode(pt)),J=tt.length!==K.name.length,g=I.length!==pt.length,it="",Tt="",lt="",$t=K.dir,ot=K.date,Ot={crc32:0,compressedSize:0,uncompressedSize:0};C&&!y||(Ot.crc32=v.crc32,Ot.compressedSize=v.compressedSize,Ot.uncompressedSize=v.uncompressedSize);var Y=0;C&&(Y|=8),X||!J&&!g||(Y|=2048);var Z=0,Et=0;$t&&(Z|=16),S==="UNIX"?(Et=798,Z|=(function(vt,qt){var te=vt;return vt||(te=qt?16893:33204),(65535&te)<<16})(K.unixPermissions,$t)):(Et=20,Z|=(function(vt){return 63&(vt||0)})(K.dosPermissions)),D=ot.getUTCHours(),D<<=6,D|=ot.getUTCMinutes(),D<<=5,D|=ot.getUTCSeconds()/2,q=ot.getUTCFullYear()-1980,q<<=4,q|=ot.getUTCMonth()+1,q<<=5,q|=ot.getUTCDate(),J&&(Tt=c(1,1)+c(k(ct),4)+tt,it+="up"+c(Tt.length,2)+Tt),g&&(lt=c(1,1)+c(k(Pt),4)+I,it+="uc"+c(lt.length,2)+lt);var xt="";return xt+=`
\0`,xt+=c(Y,2),xt+=nt.magic,xt+=c(D,2),xt+=c(q,2),xt+=c(Ot.crc32,4),xt+=c(Ot.compressedSize,4),xt+=c(Ot.uncompressedSize,4),xt+=c(ct.length,2),xt+=c(it.length,2),{fileRecord:_.LOCAL_FILE_HEADER+xt+ct+it,dirRecord:_.CENTRAL_FILE_HEADER+c(Et,2)+xt+c(Pt.length,2)+"\0\0\0\0"+c(Z,4)+c(E,4)+ct+it+Pt}}var f=r("../utils"),m=r("../stream/GenericWorker"),b=r("../utf8"),k=r("../crc32"),_=r("../signature");function w(v,C,y,E){m.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=C,this.zipPlatform=y,this.encodeFileName=E,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}f.inherits(w,m),w.prototype.push=function(v){var C=v.meta.percent||0,y=this.entriesCount,E=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,m.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:y?(C+100*(y-E-1))/y:100}}))},w.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var C=this.streamFiles&&!v.file.dir;if(C){var y=d(v,C,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},w.prototype.closedSource=function(v){this.accumulate=!1;var C=this.streamFiles&&!v.file.dir,y=d(v,C,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),C)this.push({data:(function(E){return _.DATA_DESCRIPTOR+c(E.crc32,4)+c(E.compressedSize,4)+c(E.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},w.prototype.flush=function(){for(var v=this.bytesWritten,C=0;C<this.dirRecords.length;C++)this.push({data:this.dirRecords[C],meta:{percent:100}});var y=this.bytesWritten-v,E=(function(S,T,D,q,K){var nt=f.transformTo("string",K(q));return _.CENTRAL_DIRECTORY_END+"\0\0\0\0"+c(S,2)+c(S,2)+c(T,4)+c(D,4)+c(nt.length,2)+nt})(this.dirRecords.length,y,v,this.zipComment,this.encodeFileName);this.push({data:E,meta:{percent:100}})},w.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},w.prototype.registerPrevious=function(v){this._sources.push(v);var C=this;return v.on("data",function(y){C.processChunk(y)}),v.on("end",function(){C.closedSource(C.previous.streamInfo),C._sources.length?C.prepareNextSource():C.end()}),v.on("error",function(y){C.error(y)}),this},w.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},w.prototype.error=function(v){var C=this._sources;if(!m.prototype.error.call(this,v))return!1;for(var y=0;y<C.length;y++)try{C[y].error(v)}catch{}return!0},w.prototype.lock=function(){m.prototype.lock.call(this);for(var v=this._sources,C=0;C<v.length;C++)v[C].lock()},o.exports=w},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,o,s){var c=r("../compressions"),d=r("./ZipFileWorker");s.generateWorker=function(f,m,b){var k=new d(m.streamFiles,b,m.platform,m.encodeFileName),_=0;try{f.forEach(function(w,v){_++;var C=(function(T,D){var q=T||D,K=c[q];if(!K)throw new Error(q+" is not a valid compression method !");return K})(v.options.compression,m.compression),y=v.options.compressionOptions||m.compressionOptions||{},E=v.dir,S=v.date;v._compressWorker(C,y).withStreamInfo("file",{name:w,dir:E,date:S,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(k)}),k.entriesCount=_}catch(w){k.error(w)}return k}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,o,s){function c(){if(!(this instanceof c))return new c;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var d=new c;for(var f in this)typeof this[f]!="function"&&(d[f]=this[f]);return d}}(c.prototype=r("./object")).loadAsync=r("./load"),c.support=r("./support"),c.defaults=r("./defaults"),c.version="3.10.1",c.loadAsync=function(d,f){return new c().loadAsync(d,f)},c.external=r("./external"),o.exports=c},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,o,s){var c=r("./utils"),d=r("./external"),f=r("./utf8"),m=r("./zipEntries"),b=r("./stream/Crc32Probe"),k=r("./nodejsUtils");function _(w){return new d.Promise(function(v,C){var y=w.decompressed.getContentWorker().pipe(new b);y.on("error",function(E){C(E)}).on("end",function(){y.streamInfo.crc32!==w.decompressed.crc32?C(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}o.exports=function(w,v){var C=this;return v=c.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:f.utf8decode}),k.isNode&&k.isStream(w)?d.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):c.prepareContent("the loaded zip file",w,!0,v.optimizedBinaryString,v.base64).then(function(y){var E=new m(v);return E.load(y),E}).then(function(y){var E=[d.Promise.resolve(y)],S=y.files;if(v.checkCRC32)for(var T=0;T<S.length;T++)E.push(_(S[T]));return d.Promise.all(E)}).then(function(y){for(var E=y.shift(),S=E.files,T=0;T<S.length;T++){var D=S[T],q=D.fileNameStr,K=c.resolve(D.fileNameStr);C.file(K,D.decompressed,{binary:!0,optimizedBinaryString:!0,date:D.date,dir:D.dir,comment:D.fileCommentStr.length?D.fileCommentStr:null,unixPermissions:D.unixPermissions,dosPermissions:D.dosPermissions,createFolders:v.createFolders}),D.dir||(C.file(K).unsafeOriginalName=q)}return E.zipComment.length&&(C.comment=E.zipComment),C})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,o,s){var c=r("../utils"),d=r("../stream/GenericWorker");function f(m,b){d.call(this,"Nodejs stream input adapter for "+m),this._upstreamEnded=!1,this._bindStream(b)}c.inherits(f,d),f.prototype._bindStream=function(m){var b=this;(this._stream=m).pause(),m.on("data",function(k){b.push({data:k,meta:{percent:0}})}).on("error",function(k){b.isPaused?this.generatedError=k:b.error(k)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},f.prototype.pause=function(){return!!d.prototype.pause.call(this)&&(this._stream.pause(),!0)},f.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},o.exports=f},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,o,s){var c=r("readable-stream").Readable;function d(f,m,b){c.call(this,m),this._helper=f;var k=this;f.on("data",function(_,w){k.push(_)||k._helper.pause(),b&&b(w)}).on("error",function(_){k.emit("error",_)}).on("end",function(){k.push(null)})}r("../utils").inherits(d,c),d.prototype._read=function(){this._helper.resume()},o.exports=d},{"../utils":32,"readable-stream":16}],14:[function(r,o,s){o.exports={isNode:typeof Buffer<"u",newBufferFrom:function(c,d){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(c,d);if(typeof c=="number")throw new Error('The "data" argument must not be a number');return new Buffer(c,d)},allocBuffer:function(c){if(Buffer.alloc)return Buffer.alloc(c);var d=new Buffer(c);return d.fill(0),d},isBuffer:function(c){return Buffer.isBuffer(c)},isStream:function(c){return c&&typeof c.on=="function"&&typeof c.pause=="function"&&typeof c.resume=="function"}}},{}],15:[function(r,o,s){function c(K,nt,X){var ct,tt=f.getTypeOf(nt),pt=f.extend(X||{},k);pt.date=pt.date||new Date,pt.compression!==null&&(pt.compression=pt.compression.toUpperCase()),typeof pt.unixPermissions=="string"&&(pt.unixPermissions=parseInt(pt.unixPermissions,8)),pt.unixPermissions&&16384&pt.unixPermissions&&(pt.dir=!0),pt.dosPermissions&&16&pt.dosPermissions&&(pt.dir=!0),pt.dir&&(K=S(K)),pt.createFolders&&(ct=E(K))&&T.call(this,ct,!0);var Pt=tt==="string"&&pt.binary===!1&&pt.base64===!1;X&&X.binary!==void 0||(pt.binary=!Pt),(nt instanceof _&&nt.uncompressedSize===0||pt.dir||!nt||nt.length===0)&&(pt.base64=!1,pt.binary=!0,nt="",pt.compression="STORE",tt="string");var I=null;I=nt instanceof _||nt instanceof m?nt:C.isNode&&C.isStream(nt)?new y(K,nt):f.prepareContent(K,nt,pt.binary,pt.optimizedBinaryString,pt.base64);var J=new w(K,I,pt);this.files[K]=J}var d=r("./utf8"),f=r("./utils"),m=r("./stream/GenericWorker"),b=r("./stream/StreamHelper"),k=r("./defaults"),_=r("./compressedObject"),w=r("./zipObject"),v=r("./generate"),C=r("./nodejsUtils"),y=r("./nodejs/NodejsStreamInputAdapter"),E=function(K){K.slice(-1)==="/"&&(K=K.substring(0,K.length-1));var nt=K.lastIndexOf("/");return 0<nt?K.substring(0,nt):""},S=function(K){return K.slice(-1)!=="/"&&(K+="/"),K},T=function(K,nt){return nt=nt!==void 0?nt:k.createFolders,K=S(K),this.files[K]||c.call(this,K,null,{dir:!0,createFolders:nt}),this.files[K]};function D(K){return Object.prototype.toString.call(K)==="[object RegExp]"}var q={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(K){var nt,X,ct;for(nt in this.files)ct=this.files[nt],(X=nt.slice(this.root.length,nt.length))&&nt.slice(0,this.root.length)===this.root&&K(X,ct)},filter:function(K){var nt=[];return this.forEach(function(X,ct){K(X,ct)&&nt.push(ct)}),nt},file:function(K,nt,X){if(arguments.length!==1)return K=this.root+K,c.call(this,K,nt,X),this;if(D(K)){var ct=K;return this.filter(function(pt,Pt){return!Pt.dir&&ct.test(pt)})}var tt=this.files[this.root+K];return tt&&!tt.dir?tt:null},folder:function(K){if(!K)return this;if(D(K))return this.filter(function(tt,pt){return pt.dir&&K.test(tt)});var nt=this.root+K,X=T.call(this,nt),ct=this.clone();return ct.root=X.name,ct},remove:function(K){K=this.root+K;var nt=this.files[K];if(nt||(K.slice(-1)!=="/"&&(K+="/"),nt=this.files[K]),nt&&!nt.dir)delete this.files[K];else for(var X=this.filter(function(tt,pt){return pt.name.slice(0,K.length)===K}),ct=0;ct<X.length;ct++)delete this.files[X[ct].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(K){var nt,X={};try{if((X=f.extend(K||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:d.utf8encode})).type=X.type.toLowerCase(),X.compression=X.compression.toUpperCase(),X.type==="binarystring"&&(X.type="string"),!X.type)throw new Error("No output type specified.");f.checkSupport(X.type),X.platform!=="darwin"&&X.platform!=="freebsd"&&X.platform!=="linux"&&X.platform!=="sunos"||(X.platform="UNIX"),X.platform==="win32"&&(X.platform="DOS");var ct=X.comment||this.comment||"";nt=v.generateWorker(this,X,ct)}catch(tt){(nt=new m("error")).error(tt)}return new b(nt,X.type||"string",X.mimeType)},generateAsync:function(K,nt){return this.generateInternalStream(K).accumulate(nt)},generateNodeStream:function(K,nt){return(K=K||{}).type||(K.type="nodebuffer"),this.generateInternalStream(K).toNodejsStream(nt)}};o.exports=q},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,o,s){o.exports=r("stream")},{stream:void 0}],17:[function(r,o,s){var c=r("./DataReader");function d(f){c.call(this,f);for(var m=0;m<this.data.length;m++)f[m]=255&f[m]}r("../utils").inherits(d,c),d.prototype.byteAt=function(f){return this.data[this.zero+f]},d.prototype.lastIndexOfSignature=function(f){for(var m=f.charCodeAt(0),b=f.charCodeAt(1),k=f.charCodeAt(2),_=f.charCodeAt(3),w=this.length-4;0<=w;--w)if(this.data[w]===m&&this.data[w+1]===b&&this.data[w+2]===k&&this.data[w+3]===_)return w-this.zero;return-1},d.prototype.readAndCheckSignature=function(f){var m=f.charCodeAt(0),b=f.charCodeAt(1),k=f.charCodeAt(2),_=f.charCodeAt(3),w=this.readData(4);return m===w[0]&&b===w[1]&&k===w[2]&&_===w[3]},d.prototype.readData=function(f){if(this.checkOffset(f),f===0)return[];var m=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,m},o.exports=d},{"../utils":32,"./DataReader":18}],18:[function(r,o,s){var c=r("../utils");function d(f){this.data=f,this.length=f.length,this.index=0,this.zero=0}d.prototype={checkOffset:function(f){this.checkIndex(this.index+f)},checkIndex:function(f){if(this.length<this.zero+f||f<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+f+"). Corrupted zip ?")},setIndex:function(f){this.checkIndex(f),this.index=f},skip:function(f){this.setIndex(this.index+f)},byteAt:function(){},readInt:function(f){var m,b=0;for(this.checkOffset(f),m=this.index+f-1;m>=this.index;m--)b=(b<<8)+this.byteAt(m);return this.index+=f,b},readString:function(f){return c.transformTo("string",this.readData(f))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var f=this.readInt(4);return new Date(Date.UTC(1980+(f>>25&127),(f>>21&15)-1,f>>16&31,f>>11&31,f>>5&63,(31&f)<<1))}},o.exports=d},{"../utils":32}],19:[function(r,o,s){var c=r("./Uint8ArrayReader");function d(f){c.call(this,f)}r("../utils").inherits(d,c),d.prototype.readData=function(f){this.checkOffset(f);var m=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,m},o.exports=d},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,o,s){var c=r("./DataReader");function d(f){c.call(this,f)}r("../utils").inherits(d,c),d.prototype.byteAt=function(f){return this.data.charCodeAt(this.zero+f)},d.prototype.lastIndexOfSignature=function(f){return this.data.lastIndexOf(f)-this.zero},d.prototype.readAndCheckSignature=function(f){return f===this.readData(4)},d.prototype.readData=function(f){this.checkOffset(f);var m=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,m},o.exports=d},{"../utils":32,"./DataReader":18}],21:[function(r,o,s){var c=r("./ArrayReader");function d(f){c.call(this,f)}r("../utils").inherits(d,c),d.prototype.readData=function(f){if(this.checkOffset(f),f===0)return new Uint8Array(0);var m=this.data.subarray(this.zero+this.index,this.zero+this.index+f);return this.index+=f,m},o.exports=d},{"../utils":32,"./ArrayReader":17}],22:[function(r,o,s){var c=r("../utils"),d=r("../support"),f=r("./ArrayReader"),m=r("./StringReader"),b=r("./NodeBufferReader"),k=r("./Uint8ArrayReader");o.exports=function(_){var w=c.getTypeOf(_);return c.checkSupport(w),w!=="string"||d.uint8array?w==="nodebuffer"?new b(_):d.uint8array?new k(c.transformTo("uint8array",_)):new f(c.transformTo("array",_)):new m(_)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,o,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,o,s){var c=r("./GenericWorker"),d=r("../utils");function f(m){c.call(this,"ConvertWorker to "+m),this.destType=m}d.inherits(f,c),f.prototype.processChunk=function(m){this.push({data:d.transformTo(this.destType,m.data),meta:m.meta})},o.exports=f},{"../utils":32,"./GenericWorker":28}],25:[function(r,o,s){var c=r("./GenericWorker"),d=r("../crc32");function f(){c.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(f,c),f.prototype.processChunk=function(m){this.streamInfo.crc32=d(m.data,this.streamInfo.crc32||0),this.push(m)},o.exports=f},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,o,s){var c=r("../utils"),d=r("./GenericWorker");function f(m){d.call(this,"DataLengthProbe for "+m),this.propName=m,this.withStreamInfo(m,0)}c.inherits(f,d),f.prototype.processChunk=function(m){if(m){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+m.data.length}d.prototype.processChunk.call(this,m)},o.exports=f},{"../utils":32,"./GenericWorker":28}],27:[function(r,o,s){var c=r("../utils"),d=r("./GenericWorker");function f(m){d.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,m.then(function(k){b.dataIsReady=!0,b.data=k,b.max=k&&k.length||0,b.type=c.getTypeOf(k),b.isPaused||b._tickAndRepeat()},function(k){b.error(k)})}c.inherits(f,d),f.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this.data=null},f.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,c.delay(this._tickAndRepeat,[],this)),!0)},f.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(c.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},f.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var m=null,b=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":m=this.data.substring(this.index,b);break;case"uint8array":m=this.data.subarray(this.index,b);break;case"array":case"nodebuffer":m=this.data.slice(this.index,b)}return this.index=b,this.push({data:m,meta:{percent:this.max?this.index/this.max*100:0}})},o.exports=f},{"../utils":32,"./GenericWorker":28}],28:[function(r,o,s){function c(d){this.name=d||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}c.prototype={push:function(d){this.emit("data",d)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(d){this.emit("error",d)}return!0},error:function(d){return!this.isFinished&&(this.isPaused?this.generatedError=d:(this.isFinished=!0,this.emit("error",d),this.previous&&this.previous.error(d),this.cleanUp()),!0)},on:function(d,f){return this._listeners[d].push(f),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(d,f){if(this._listeners[d])for(var m=0;m<this._listeners[d].length;m++)this._listeners[d][m].call(this,f)},pipe:function(d){return d.registerPrevious(this)},registerPrevious:function(d){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=d.streamInfo,this.mergeStreamInfo(),this.previous=d;var f=this;return d.on("data",function(m){f.processChunk(m)}),d.on("end",function(){f.end()}),d.on("error",function(m){f.error(m)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var d=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),d=!0),this.previous&&this.previous.resume(),!d},flush:function(){},processChunk:function(d){this.push(d)},withStreamInfo:function(d,f){return this.extraStreamInfo[d]=f,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var d in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,d)&&(this.streamInfo[d]=this.extraStreamInfo[d])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var d="Worker "+this.name;return this.previous?this.previous+" -> "+d:d}},o.exports=c},{}],29:[function(r,o,s){var c=r("../utils"),d=r("./ConvertWorker"),f=r("./GenericWorker"),m=r("../base64"),b=r("../support"),k=r("../external"),_=null;if(b.nodestream)try{_=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function w(C,y){return new k.Promise(function(E,S){var T=[],D=C._internalType,q=C._outputType,K=C._mimeType;C.on("data",function(nt,X){T.push(nt),y&&y(X)}).on("error",function(nt){T=[],S(nt)}).on("end",function(){try{var nt=(function(X,ct,tt){switch(X){case"blob":return c.newBlob(c.transformTo("arraybuffer",ct),tt);case"base64":return m.encode(ct);default:return c.transformTo(X,ct)}})(q,(function(X,ct){var tt,pt=0,Pt=null,I=0;for(tt=0;tt<ct.length;tt++)I+=ct[tt].length;switch(X){case"string":return ct.join("");case"array":return Array.prototype.concat.apply([],ct);case"uint8array":for(Pt=new Uint8Array(I),tt=0;tt<ct.length;tt++)Pt.set(ct[tt],pt),pt+=ct[tt].length;return Pt;case"nodebuffer":return Buffer.concat(ct);default:throw new Error("concat : unsupported type '"+X+"'")}})(D,T),K);E(nt)}catch(X){S(X)}T=[]}).resume()})}function v(C,y,E){var S=y;switch(y){case"blob":case"arraybuffer":S="uint8array";break;case"base64":S="string"}try{this._internalType=S,this._outputType=y,this._mimeType=E,c.checkSupport(S),this._worker=C.pipe(new d(S)),C.lock()}catch(T){this._worker=new f("error"),this._worker.error(T)}}v.prototype={accumulate:function(C){return w(this,C)},on:function(C,y){var E=this;return C==="data"?this._worker.on(C,function(S){y.call(E,S.data,S.meta)}):this._worker.on(C,function(){c.delay(y,arguments,E)}),this},resume:function(){return c.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(C){if(c.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new _(this,{objectMode:this._outputType!=="nodebuffer"},C)}},o.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,o,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var c=new ArrayBuffer(0);try{s.blob=new Blob([c],{type:"application/zip"}).size===0}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);d.append(c),s.blob=d.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!r("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(r,o,s){for(var c=r("./utils"),d=r("./support"),f=r("./nodejsUtils"),m=r("./stream/GenericWorker"),b=new Array(256),k=0;k<256;k++)b[k]=252<=k?6:248<=k?5:240<=k?4:224<=k?3:192<=k?2:1;b[254]=b[254]=1;function _(){m.call(this,"utf-8 decode"),this.leftOver=null}function w(){m.call(this,"utf-8 encode")}s.utf8encode=function(v){return d.nodebuffer?f.newBufferFrom(v,"utf-8"):(function(C){var y,E,S,T,D,q=C.length,K=0;for(T=0;T<q;T++)(64512&(E=C.charCodeAt(T)))==55296&&T+1<q&&(64512&(S=C.charCodeAt(T+1)))==56320&&(E=65536+(E-55296<<10)+(S-56320),T++),K+=E<128?1:E<2048?2:E<65536?3:4;for(y=d.uint8array?new Uint8Array(K):new Array(K),T=D=0;D<K;T++)(64512&(E=C.charCodeAt(T)))==55296&&T+1<q&&(64512&(S=C.charCodeAt(T+1)))==56320&&(E=65536+(E-55296<<10)+(S-56320),T++),E<128?y[D++]=E:(E<2048?y[D++]=192|E>>>6:(E<65536?y[D++]=224|E>>>12:(y[D++]=240|E>>>18,y[D++]=128|E>>>12&63),y[D++]=128|E>>>6&63),y[D++]=128|63&E);return y})(v)},s.utf8decode=function(v){return d.nodebuffer?c.transformTo("nodebuffer",v).toString("utf-8"):(function(C){var y,E,S,T,D=C.length,q=new Array(2*D);for(y=E=0;y<D;)if((S=C[y++])<128)q[E++]=S;else if(4<(T=b[S]))q[E++]=65533,y+=T-1;else{for(S&=T===2?31:T===3?15:7;1<T&&y<D;)S=S<<6|63&C[y++],T--;1<T?q[E++]=65533:S<65536?q[E++]=S:(S-=65536,q[E++]=55296|S>>10&1023,q[E++]=56320|1023&S)}return q.length!==E&&(q.subarray?q=q.subarray(0,E):q.length=E),c.applyFromCharCode(q)})(v=c.transformTo(d.uint8array?"uint8array":"array",v))},c.inherits(_,m),_.prototype.processChunk=function(v){var C=c.transformTo(d.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(d.uint8array){var y=C;(C=new Uint8Array(y.length+this.leftOver.length)).set(this.leftOver,0),C.set(y,this.leftOver.length)}else C=this.leftOver.concat(C);this.leftOver=null}var E=(function(T,D){var q;for((D=D||T.length)>T.length&&(D=T.length),q=D-1;0<=q&&(192&T[q])==128;)q--;return q<0||q===0?D:q+b[T[q]]>D?q:D})(C),S=C;E!==C.length&&(d.uint8array?(S=C.subarray(0,E),this.leftOver=C.subarray(E,C.length)):(S=C.slice(0,E),this.leftOver=C.slice(E,C.length))),this.push({data:s.utf8decode(S),meta:v.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=_,c.inherits(w,m),w.prototype.processChunk=function(v){this.push({data:s.utf8encode(v.data),meta:v.meta})},s.Utf8EncodeWorker=w},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,o,s){var c=r("./support"),d=r("./base64"),f=r("./nodejsUtils"),m=r("./external");function b(y){return y}function k(y,E){for(var S=0;S<y.length;++S)E[S]=255&y.charCodeAt(S);return E}r("setimmediate"),s.newBlob=function(y,E){s.checkSupport("blob");try{return new Blob([y],{type:E})}catch{try{var S=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return S.append(y),S.getBlob(E)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(y,E,S){var T=[],D=0,q=y.length;if(q<=S)return String.fromCharCode.apply(null,y);for(;D<q;)E==="array"||E==="nodebuffer"?T.push(String.fromCharCode.apply(null,y.slice(D,Math.min(D+S,q)))):T.push(String.fromCharCode.apply(null,y.subarray(D,Math.min(D+S,q)))),D+=S;return T.join("")},stringifyByChar:function(y){for(var E="",S=0;S<y.length;S++)E+=String.fromCharCode(y[S]);return E},applyCanBeUsed:{uint8array:(function(){try{return c.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return c.nodebuffer&&String.fromCharCode.apply(null,f.allocBuffer(1)).length===1}catch{return!1}})()}};function w(y){var E=65536,S=s.getTypeOf(y),T=!0;if(S==="uint8array"?T=_.applyCanBeUsed.uint8array:S==="nodebuffer"&&(T=_.applyCanBeUsed.nodebuffer),T)for(;1<E;)try{return _.stringifyByChunk(y,S,E)}catch{E=Math.floor(E/2)}return _.stringifyByChar(y)}function v(y,E){for(var S=0;S<y.length;S++)E[S]=y[S];return E}s.applyFromCharCode=w;var C={};C.string={string:b,array:function(y){return k(y,new Array(y.length))},arraybuffer:function(y){return C.string.uint8array(y).buffer},uint8array:function(y){return k(y,new Uint8Array(y.length))},nodebuffer:function(y){return k(y,f.allocBuffer(y.length))}},C.array={string:w,array:b,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return f.newBufferFrom(y)}},C.arraybuffer={string:function(y){return w(new Uint8Array(y))},array:function(y){return v(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:b,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return f.newBufferFrom(new Uint8Array(y))}},C.uint8array={string:w,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:b,nodebuffer:function(y){return f.newBufferFrom(y)}},C.nodebuffer={string:w,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return C.nodebuffer.uint8array(y).buffer},uint8array:function(y){return v(y,new Uint8Array(y.length))},nodebuffer:b},s.transformTo=function(y,E){if(E=E||"",!y)return E;s.checkSupport(y);var S=s.getTypeOf(E);return C[S][y](E)},s.resolve=function(y){for(var E=y.split("/"),S=[],T=0;T<E.length;T++){var D=E[T];D==="."||D===""&&T!==0&&T!==E.length-1||(D===".."?S.pop():S.push(D))}return S.join("/")},s.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":c.nodebuffer&&f.isBuffer(y)?"nodebuffer":c.uint8array&&y instanceof Uint8Array?"uint8array":c.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(y){if(!c[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(y){var E,S,T="";for(S=0;S<(y||"").length;S++)T+="\\x"+((E=y.charCodeAt(S))<16?"0":"")+E.toString(16).toUpperCase();return T},s.delay=function(y,E,S){setImmediate(function(){y.apply(S||null,E||[])})},s.inherits=function(y,E){function S(){}S.prototype=E.prototype,y.prototype=new S},s.extend=function(){var y,E,S={};for(y=0;y<arguments.length;y++)for(E in arguments[y])Object.prototype.hasOwnProperty.call(arguments[y],E)&&S[E]===void 0&&(S[E]=arguments[y][E]);return S},s.prepareContent=function(y,E,S,T,D){return m.Promise.resolve(E).then(function(q){return c.blob&&(q instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(q))!==-1)&&typeof FileReader<"u"?new m.Promise(function(K,nt){var X=new FileReader;X.onload=function(ct){K(ct.target.result)},X.onerror=function(ct){nt(ct.target.error)},X.readAsArrayBuffer(q)}):q}).then(function(q){var K=s.getTypeOf(q);return K?(K==="arraybuffer"?q=s.transformTo("uint8array",q):K==="string"&&(D?q=d.decode(q):S&&T!==!0&&(q=(function(nt){return k(nt,c.uint8array?new Uint8Array(nt.length):new Array(nt.length))})(q))),q):m.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(r,o,s){var c=r("./reader/readerFor"),d=r("./utils"),f=r("./signature"),m=r("./zipEntry"),b=r("./support");function k(_){this.files=[],this.loadOptions=_}k.prototype={checkSignature:function(_){if(!this.reader.readAndCheckSignature(_)){this.reader.index-=4;var w=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+d.pretty(w)+", expected "+d.pretty(_)+")")}},isSignature:function(_,w){var v=this.reader.index;this.reader.setIndex(_);var C=this.reader.readString(4)===w;return this.reader.setIndex(v),C},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var _=this.reader.readData(this.zipCommentLength),w=b.uint8array?"uint8array":"array",v=d.transformTo(w,_);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var _,w,v,C=this.zip64EndOfCentralSize-44;0<C;)_=this.reader.readInt(2),w=this.reader.readInt(4),v=this.reader.readData(w),this.zip64ExtensibleData[_]={id:_,length:w,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var _,w;for(_=0;_<this.files.length;_++)w=this.files[_],this.reader.setIndex(w.localHeaderOffset),this.checkSignature(f.LOCAL_FILE_HEADER),w.readLocalPart(this.reader),w.handleUTF8(),w.processAttributes()},readCentralDir:function(){var _;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(f.CENTRAL_FILE_HEADER);)(_=new m({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(_);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var _=this.reader.lastIndexOfSignature(f.CENTRAL_DIRECTORY_END);if(_<0)throw this.isSignature(0,f.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(_);var w=_;if(this.checkSignature(f.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===d.MAX_VALUE_16BITS||this.diskWithCentralDirStart===d.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===d.MAX_VALUE_16BITS||this.centralDirRecords===d.MAX_VALUE_16BITS||this.centralDirSize===d.MAX_VALUE_32BITS||this.centralDirOffset===d.MAX_VALUE_32BITS){if(this.zip64=!0,(_=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(_),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,f.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var C=w-v;if(0<C)this.isSignature(w,f.CENTRAL_FILE_HEADER)||(this.reader.zero=C);else if(C<0)throw new Error("Corrupted zip: missing "+Math.abs(C)+" bytes.")},prepareReader:function(_){this.reader=c(_)},load:function(_){this.prepareReader(_),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},o.exports=k},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(r,o,s){var c=r("./reader/readerFor"),d=r("./utils"),f=r("./compressedObject"),m=r("./crc32"),b=r("./utf8"),k=r("./compressions"),_=r("./support");function w(v,C){this.options=v,this.loadOptions=C}w.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var C,y;if(v.skip(22),this.fileNameLength=v.readInt(2),y=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(y),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((C=(function(E){for(var S in k)if(Object.prototype.hasOwnProperty.call(k,S)&&k[S].magic===E)return k[S];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+d.pretty(this.compressionMethod)+" unknown (inner file : "+d.transformTo("string",this.fileName)+")");this.decompressed=new f(this.compressedSize,this.uncompressedSize,this.crc32,C,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var C=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(C),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=c(this.extraFields[1].value);this.uncompressedSize===d.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===d.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===d.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===d.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var C,y,E,S=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<S;)C=v.readInt(2),y=v.readInt(2),E=v.readData(y),this.extraFields[C]={id:C,length:y,value:E};v.setIndex(S)},handleUTF8:function(){var v=_.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=b.utf8decode(this.fileName),this.fileCommentStr=b.utf8decode(this.fileComment);else{var C=this.findExtraFieldUnicodePath();if(C!==null)this.fileNameStr=C;else{var y=d.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(y)}var E=this.findExtraFieldUnicodeComment();if(E!==null)this.fileCommentStr=E;else{var S=d.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(S)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var C=c(v.value);return C.readInt(1)!==1||m(this.fileName)!==C.readInt(4)?null:b.utf8decode(C.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var C=c(v.value);return C.readInt(1)!==1||m(this.fileComment)!==C.readInt(4)?null:b.utf8decode(C.readData(v.length-5))}return null}},o.exports=w},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,o,s){function c(C,y,E){this.name=C,this.dir=E.dir,this.date=E.date,this.comment=E.comment,this.unixPermissions=E.unixPermissions,this.dosPermissions=E.dosPermissions,this._data=y,this._dataBinary=E.binary,this.options={compression:E.compression,compressionOptions:E.compressionOptions}}var d=r("./stream/StreamHelper"),f=r("./stream/DataWorker"),m=r("./utf8"),b=r("./compressedObject"),k=r("./stream/GenericWorker");c.prototype={internalStream:function(C){var y=null,E="string";try{if(!C)throw new Error("No output type specified.");var S=(E=C.toLowerCase())==="string"||E==="text";E!=="binarystring"&&E!=="text"||(E="string"),y=this._decompressWorker();var T=!this._dataBinary;T&&!S&&(y=y.pipe(new m.Utf8EncodeWorker)),!T&&S&&(y=y.pipe(new m.Utf8DecodeWorker))}catch(D){(y=new k("error")).error(D)}return new d(y,E,"")},async:function(C,y){return this.internalStream(C).accumulate(y)},nodeStream:function(C,y){return this.internalStream(C||"nodebuffer").toNodejsStream(y)},_compressWorker:function(C,y){if(this._data instanceof b&&this._data.compression.magic===C.magic)return this._data.getCompressedWorker();var E=this._decompressWorker();return this._dataBinary||(E=E.pipe(new m.Utf8EncodeWorker)),b.createWorkerFrom(E,C,y)},_decompressWorker:function(){return this._data instanceof b?this._data.getContentWorker():this._data instanceof k?this._data:new f(this._data)}};for(var _=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],w=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<_.length;v++)c.prototype[_[v]]=w;o.exports=c},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,o,s){(function(c){var d,f,m=c.MutationObserver||c.WebKitMutationObserver;if(m){var b=0,k=new m(C),_=c.document.createTextNode("");k.observe(_,{characterData:!0}),d=function(){_.data=b=++b%2}}else if(c.setImmediate||c.MessageChannel===void 0)d="document"in c&&"onreadystatechange"in c.document.createElement("script")?function(){var y=c.document.createElement("script");y.onreadystatechange=function(){C(),y.onreadystatechange=null,y.parentNode.removeChild(y),y=null},c.document.documentElement.appendChild(y)}:function(){setTimeout(C,0)};else{var w=new c.MessageChannel;w.port1.onmessage=C,d=function(){w.port2.postMessage(0)}}var v=[];function C(){var y,E;f=!0;for(var S=v.length;S;){for(E=v,v=[],y=-1;++y<S;)E[y]();S=v.length}f=!1}o.exports=function(y){v.push(y)!==1||f||d()}}).call(this,typeof Pe<"u"?Pe:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,o,s){var c=r("immediate");function d(){}var f={},m=["REJECTED"],b=["FULFILLED"],k=["PENDING"];function _(S){if(typeof S!="function")throw new TypeError("resolver must be a function");this.state=k,this.queue=[],this.outcome=void 0,S!==d&&y(this,S)}function w(S,T,D){this.promise=S,typeof T=="function"&&(this.onFulfilled=T,this.callFulfilled=this.otherCallFulfilled),typeof D=="function"&&(this.onRejected=D,this.callRejected=this.otherCallRejected)}function v(S,T,D){c(function(){var q;try{q=T(D)}catch(K){return f.reject(S,K)}q===S?f.reject(S,new TypeError("Cannot resolve promise with itself")):f.resolve(S,q)})}function C(S){var T=S&&S.then;if(S&&(typeof S=="object"||typeof S=="function")&&typeof T=="function")return function(){T.apply(S,arguments)}}function y(S,T){var D=!1;function q(X){D||(D=!0,f.reject(S,X))}function K(X){D||(D=!0,f.resolve(S,X))}var nt=E(function(){T(K,q)});nt.status==="error"&&q(nt.value)}function E(S,T){var D={};try{D.value=S(T),D.status="success"}catch(q){D.status="error",D.value=q}return D}(o.exports=_).prototype.finally=function(S){if(typeof S!="function")return this;var T=this.constructor;return this.then(function(D){return T.resolve(S()).then(function(){return D})},function(D){return T.resolve(S()).then(function(){throw D})})},_.prototype.catch=function(S){return this.then(null,S)},_.prototype.then=function(S,T){if(typeof S!="function"&&this.state===b||typeof T!="function"&&this.state===m)return this;var D=new this.constructor(d);return this.state!==k?v(D,this.state===b?S:T,this.outcome):this.queue.push(new w(D,S,T)),D},w.prototype.callFulfilled=function(S){f.resolve(this.promise,S)},w.prototype.otherCallFulfilled=function(S){v(this.promise,this.onFulfilled,S)},w.prototype.callRejected=function(S){f.reject(this.promise,S)},w.prototype.otherCallRejected=function(S){v(this.promise,this.onRejected,S)},f.resolve=function(S,T){var D=E(C,T);if(D.status==="error")return f.reject(S,D.value);var q=D.value;if(q)y(S,q);else{S.state=b,S.outcome=T;for(var K=-1,nt=S.queue.length;++K<nt;)S.queue[K].callFulfilled(T)}return S},f.reject=function(S,T){S.state=m,S.outcome=T;for(var D=-1,q=S.queue.length;++D<q;)S.queue[D].callRejected(T);return S},_.resolve=function(S){return S instanceof this?S:f.resolve(new this(d),S)},_.reject=function(S){var T=new this(d);return f.reject(T,S)},_.all=function(S){var T=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=S.length,q=!1;if(!D)return this.resolve([]);for(var K=new Array(D),nt=0,X=-1,ct=new this(d);++X<D;)tt(S[X],X);return ct;function tt(pt,Pt){T.resolve(pt).then(function(I){K[Pt]=I,++nt!==D||q||(q=!0,f.resolve(ct,K))},function(I){q||(q=!0,f.reject(ct,I))})}},_.race=function(S){var T=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=S.length,q=!1;if(!D)return this.resolve([]);for(var K=-1,nt=new this(d);++K<D;)X=S[K],T.resolve(X).then(function(ct){q||(q=!0,f.resolve(nt,ct))},function(ct){q||(q=!0,f.reject(nt,ct))});var X;return nt}},{immediate:36}],38:[function(r,o,s){var c={};(0,r("./lib/utils/common").assign)(c,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),o.exports=c},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,o,s){var c=r("./zlib/deflate"),d=r("./utils/common"),f=r("./utils/strings"),m=r("./zlib/messages"),b=r("./zlib/zstream"),k=Object.prototype.toString,_=0,w=-1,v=0,C=8;function y(S){if(!(this instanceof y))return new y(S);this.options=d.assign({level:w,method:C,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},S||{});var T=this.options;T.raw&&0<T.windowBits?T.windowBits=-T.windowBits:T.gzip&&0<T.windowBits&&T.windowBits<16&&(T.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var D=c.deflateInit2(this.strm,T.level,T.method,T.windowBits,T.memLevel,T.strategy);if(D!==_)throw new Error(m[D]);if(T.header&&c.deflateSetHeader(this.strm,T.header),T.dictionary){var q;if(q=typeof T.dictionary=="string"?f.string2buf(T.dictionary):k.call(T.dictionary)==="[object ArrayBuffer]"?new Uint8Array(T.dictionary):T.dictionary,(D=c.deflateSetDictionary(this.strm,q))!==_)throw new Error(m[D]);this._dict_set=!0}}function E(S,T){var D=new y(T);if(D.push(S,!0),D.err)throw D.msg||m[D.err];return D.result}y.prototype.push=function(S,T){var D,q,K=this.strm,nt=this.options.chunkSize;if(this.ended)return!1;q=T===~~T?T:T===!0?4:0,typeof S=="string"?K.input=f.string2buf(S):k.call(S)==="[object ArrayBuffer]"?K.input=new Uint8Array(S):K.input=S,K.next_in=0,K.avail_in=K.input.length;do{if(K.avail_out===0&&(K.output=new d.Buf8(nt),K.next_out=0,K.avail_out=nt),(D=c.deflate(K,q))!==1&&D!==_)return this.onEnd(D),!(this.ended=!0);K.avail_out!==0&&(K.avail_in!==0||q!==4&&q!==2)||(this.options.to==="string"?this.onData(f.buf2binstring(d.shrinkBuf(K.output,K.next_out))):this.onData(d.shrinkBuf(K.output,K.next_out)))}while((0<K.avail_in||K.avail_out===0)&&D!==1);return q===4?(D=c.deflateEnd(this.strm),this.onEnd(D),this.ended=!0,D===_):q!==2||(this.onEnd(_),!(K.avail_out=0))},y.prototype.onData=function(S){this.chunks.push(S)},y.prototype.onEnd=function(S){S===_&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},s.Deflate=y,s.deflate=E,s.deflateRaw=function(S,T){return(T=T||{}).raw=!0,E(S,T)},s.gzip=function(S,T){return(T=T||{}).gzip=!0,E(S,T)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,o,s){var c=r("./zlib/inflate"),d=r("./utils/common"),f=r("./utils/strings"),m=r("./zlib/constants"),b=r("./zlib/messages"),k=r("./zlib/zstream"),_=r("./zlib/gzheader"),w=Object.prototype.toString;function v(y){if(!(this instanceof v))return new v(y);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},y||{});var E=this.options;E.raw&&0<=E.windowBits&&E.windowBits<16&&(E.windowBits=-E.windowBits,E.windowBits===0&&(E.windowBits=-15)),!(0<=E.windowBits&&E.windowBits<16)||y&&y.windowBits||(E.windowBits+=32),15<E.windowBits&&E.windowBits<48&&(15&E.windowBits)==0&&(E.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var S=c.inflateInit2(this.strm,E.windowBits);if(S!==m.Z_OK)throw new Error(b[S]);this.header=new _,c.inflateGetHeader(this.strm,this.header)}function C(y,E){var S=new v(E);if(S.push(y,!0),S.err)throw S.msg||b[S.err];return S.result}v.prototype.push=function(y,E){var S,T,D,q,K,nt,X=this.strm,ct=this.options.chunkSize,tt=this.options.dictionary,pt=!1;if(this.ended)return!1;T=E===~~E?E:E===!0?m.Z_FINISH:m.Z_NO_FLUSH,typeof y=="string"?X.input=f.binstring2buf(y):w.call(y)==="[object ArrayBuffer]"?X.input=new Uint8Array(y):X.input=y,X.next_in=0,X.avail_in=X.input.length;do{if(X.avail_out===0&&(X.output=new d.Buf8(ct),X.next_out=0,X.avail_out=ct),(S=c.inflate(X,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&tt&&(nt=typeof tt=="string"?f.string2buf(tt):w.call(tt)==="[object ArrayBuffer]"?new Uint8Array(tt):tt,S=c.inflateSetDictionary(this.strm,nt)),S===m.Z_BUF_ERROR&&pt===!0&&(S=m.Z_OK,pt=!1),S!==m.Z_STREAM_END&&S!==m.Z_OK)return this.onEnd(S),!(this.ended=!0);X.next_out&&(X.avail_out!==0&&S!==m.Z_STREAM_END&&(X.avail_in!==0||T!==m.Z_FINISH&&T!==m.Z_SYNC_FLUSH)||(this.options.to==="string"?(D=f.utf8border(X.output,X.next_out),q=X.next_out-D,K=f.buf2string(X.output,D),X.next_out=q,X.avail_out=ct-q,q&&d.arraySet(X.output,X.output,D,q,0),this.onData(K)):this.onData(d.shrinkBuf(X.output,X.next_out)))),X.avail_in===0&&X.avail_out===0&&(pt=!0)}while((0<X.avail_in||X.avail_out===0)&&S!==m.Z_STREAM_END);return S===m.Z_STREAM_END&&(T=m.Z_FINISH),T===m.Z_FINISH?(S=c.inflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===m.Z_OK):T!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(X.avail_out=0))},v.prototype.onData=function(y){this.chunks.push(y)},v.prototype.onEnd=function(y){y===m.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},s.Inflate=v,s.inflate=C,s.inflateRaw=function(y,E){return(E=E||{}).raw=!0,C(y,E)},s.ungzip=C},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,o,s){var c=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(m){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var k=b.shift();if(k){if(typeof k!="object")throw new TypeError(k+"must be non-object");for(var _ in k)k.hasOwnProperty(_)&&(m[_]=k[_])}}return m},s.shrinkBuf=function(m,b){return m.length===b?m:m.subarray?m.subarray(0,b):(m.length=b,m)};var d={arraySet:function(m,b,k,_,w){if(b.subarray&&m.subarray)m.set(b.subarray(k,k+_),w);else for(var v=0;v<_;v++)m[w+v]=b[k+v]},flattenChunks:function(m){var b,k,_,w,v,C;for(b=_=0,k=m.length;b<k;b++)_+=m[b].length;for(C=new Uint8Array(_),b=w=0,k=m.length;b<k;b++)v=m[b],C.set(v,w),w+=v.length;return C}},f={arraySet:function(m,b,k,_,w){for(var v=0;v<_;v++)m[w+v]=b[k+v]},flattenChunks:function(m){return[].concat.apply([],m)}};s.setTyped=function(m){m?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,d)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,f))},s.setTyped(c)},{}],42:[function(r,o,s){var c=r("./common"),d=!0,f=!0;try{String.fromCharCode.apply(null,[0])}catch{d=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{f=!1}for(var m=new c.Buf8(256),b=0;b<256;b++)m[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;function k(_,w){if(w<65537&&(_.subarray&&f||!_.subarray&&d))return String.fromCharCode.apply(null,c.shrinkBuf(_,w));for(var v="",C=0;C<w;C++)v+=String.fromCharCode(_[C]);return v}m[254]=m[254]=1,s.string2buf=function(_){var w,v,C,y,E,S=_.length,T=0;for(y=0;y<S;y++)(64512&(v=_.charCodeAt(y)))==55296&&y+1<S&&(64512&(C=_.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(C-56320),y++),T+=v<128?1:v<2048?2:v<65536?3:4;for(w=new c.Buf8(T),y=E=0;E<T;y++)(64512&(v=_.charCodeAt(y)))==55296&&y+1<S&&(64512&(C=_.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(C-56320),y++),v<128?w[E++]=v:(v<2048?w[E++]=192|v>>>6:(v<65536?w[E++]=224|v>>>12:(w[E++]=240|v>>>18,w[E++]=128|v>>>12&63),w[E++]=128|v>>>6&63),w[E++]=128|63&v);return w},s.buf2binstring=function(_){return k(_,_.length)},s.binstring2buf=function(_){for(var w=new c.Buf8(_.length),v=0,C=w.length;v<C;v++)w[v]=_.charCodeAt(v);return w},s.buf2string=function(_,w){var v,C,y,E,S=w||_.length,T=new Array(2*S);for(v=C=0;v<S;)if((y=_[v++])<128)T[C++]=y;else if(4<(E=m[y]))T[C++]=65533,v+=E-1;else{for(y&=E===2?31:E===3?15:7;1<E&&v<S;)y=y<<6|63&_[v++],E--;1<E?T[C++]=65533:y<65536?T[C++]=y:(y-=65536,T[C++]=55296|y>>10&1023,T[C++]=56320|1023&y)}return k(T,C)},s.utf8border=function(_,w){var v;for((w=w||_.length)>_.length&&(w=_.length),v=w-1;0<=v&&(192&_[v])==128;)v--;return v<0||v===0?w:v+m[_[v]]>w?v:w}},{"./common":41}],43:[function(r,o,s){o.exports=function(c,d,f,m){for(var b=65535&c|0,k=c>>>16&65535|0,_=0;f!==0;){for(f-=_=2e3<f?2e3:f;k=k+(b=b+d[m++]|0)|0,--_;);b%=65521,k%=65521}return b|k<<16|0}},{}],44:[function(r,o,s){o.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,o,s){var c=(function(){for(var d,f=[],m=0;m<256;m++){d=m;for(var b=0;b<8;b++)d=1&d?3988292384^d>>>1:d>>>1;f[m]=d}return f})();o.exports=function(d,f,m,b){var k=c,_=b+m;d^=-1;for(var w=b;w<_;w++)d=d>>>8^k[255&(d^f[w])];return-1^d}},{}],46:[function(r,o,s){var c,d=r("../utils/common"),f=r("./trees"),m=r("./adler32"),b=r("./crc32"),k=r("./messages"),_=0,w=4,v=0,C=-2,y=-1,E=4,S=2,T=8,D=9,q=286,K=30,nt=19,X=2*q+1,ct=15,tt=3,pt=258,Pt=pt+tt+1,I=42,J=113,g=1,it=2,Tt=3,lt=4;function $t(h,et){return h.msg=k[et],et}function ot(h){return(h<<1)-(4<h?9:0)}function Ot(h){for(var et=h.length;0<=--et;)h[et]=0}function Y(h){var et=h.state,G=et.pending;G>h.avail_out&&(G=h.avail_out),G!==0&&(d.arraySet(h.output,et.pending_buf,et.pending_out,G,h.next_out),h.next_out+=G,et.pending_out+=G,h.total_out+=G,h.avail_out-=G,et.pending-=G,et.pending===0&&(et.pending_out=0))}function Z(h,et){f._tr_flush_block(h,0<=h.block_start?h.block_start:-1,h.strstart-h.block_start,et),h.block_start=h.strstart,Y(h.strm)}function Et(h,et){h.pending_buf[h.pending++]=et}function xt(h,et){h.pending_buf[h.pending++]=et>>>8&255,h.pending_buf[h.pending++]=255&et}function vt(h,et){var G,O,A=h.max_chain_length,N=h.strstart,st=h.prev_length,at=h.nice_match,V=h.strstart>h.w_size-Pt?h.strstart-(h.w_size-Pt):0,ut=h.window,kt=h.w_mask,ht=h.prev,At=h.strstart+pt,Lt=ut[N+st-1],Mt=ut[N+st];h.prev_length>=h.good_match&&(A>>=2),at>h.lookahead&&(at=h.lookahead);do if(ut[(G=et)+st]===Mt&&ut[G+st-1]===Lt&&ut[G]===ut[N]&&ut[++G]===ut[N+1]){N+=2,G++;do;while(ut[++N]===ut[++G]&&ut[++N]===ut[++G]&&ut[++N]===ut[++G]&&ut[++N]===ut[++G]&&ut[++N]===ut[++G]&&ut[++N]===ut[++G]&&ut[++N]===ut[++G]&&ut[++N]===ut[++G]&&N<At);if(O=pt-(At-N),N=At-pt,st<O){if(h.match_start=et,at<=(st=O))break;Lt=ut[N+st-1],Mt=ut[N+st]}}while((et=ht[et&kt])>V&&--A!=0);return st<=h.lookahead?st:h.lookahead}function qt(h){var et,G,O,A,N,st,at,V,ut,kt,ht=h.w_size;do{if(A=h.window_size-h.lookahead-h.strstart,h.strstart>=ht+(ht-Pt)){for(d.arraySet(h.window,h.window,ht,ht,0),h.match_start-=ht,h.strstart-=ht,h.block_start-=ht,et=G=h.hash_size;O=h.head[--et],h.head[et]=ht<=O?O-ht:0,--G;);for(et=G=ht;O=h.prev[--et],h.prev[et]=ht<=O?O-ht:0,--G;);A+=ht}if(h.strm.avail_in===0)break;if(st=h.strm,at=h.window,V=h.strstart+h.lookahead,ut=A,kt=void 0,kt=st.avail_in,ut<kt&&(kt=ut),G=kt===0?0:(st.avail_in-=kt,d.arraySet(at,st.input,st.next_in,kt,V),st.state.wrap===1?st.adler=m(st.adler,at,kt,V):st.state.wrap===2&&(st.adler=b(st.adler,at,kt,V)),st.next_in+=kt,st.total_in+=kt,kt),h.lookahead+=G,h.lookahead+h.insert>=tt)for(N=h.strstart-h.insert,h.ins_h=h.window[N],h.ins_h=(h.ins_h<<h.hash_shift^h.window[N+1])&h.hash_mask;h.insert&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[N+tt-1])&h.hash_mask,h.prev[N&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=N,N++,h.insert--,!(h.lookahead+h.insert<tt)););}while(h.lookahead<Pt&&h.strm.avail_in!==0)}function te(h,et){for(var G,O;;){if(h.lookahead<Pt){if(qt(h),h.lookahead<Pt&&et===_)return g;if(h.lookahead===0)break}if(G=0,h.lookahead>=tt&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+tt-1])&h.hash_mask,G=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),G!==0&&h.strstart-G<=h.w_size-Pt&&(h.match_length=vt(h,G)),h.match_length>=tt)if(O=f._tr_tally(h,h.strstart-h.match_start,h.match_length-tt),h.lookahead-=h.match_length,h.match_length<=h.max_lazy_match&&h.lookahead>=tt){for(h.match_length--;h.strstart++,h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+tt-1])&h.hash_mask,G=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart,--h.match_length!=0;);h.strstart++}else h.strstart+=h.match_length,h.match_length=0,h.ins_h=h.window[h.strstart],h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+1])&h.hash_mask;else O=f._tr_tally(h,0,h.window[h.strstart]),h.lookahead--,h.strstart++;if(O&&(Z(h,!1),h.strm.avail_out===0))return g}return h.insert=h.strstart<tt-1?h.strstart:tt-1,et===w?(Z(h,!0),h.strm.avail_out===0?Tt:lt):h.last_lit&&(Z(h,!1),h.strm.avail_out===0)?g:it}function Nt(h,et){for(var G,O,A;;){if(h.lookahead<Pt){if(qt(h),h.lookahead<Pt&&et===_)return g;if(h.lookahead===0)break}if(G=0,h.lookahead>=tt&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+tt-1])&h.hash_mask,G=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),h.prev_length=h.match_length,h.prev_match=h.match_start,h.match_length=tt-1,G!==0&&h.prev_length<h.max_lazy_match&&h.strstart-G<=h.w_size-Pt&&(h.match_length=vt(h,G),h.match_length<=5&&(h.strategy===1||h.match_length===tt&&4096<h.strstart-h.match_start)&&(h.match_length=tt-1)),h.prev_length>=tt&&h.match_length<=h.prev_length){for(A=h.strstart+h.lookahead-tt,O=f._tr_tally(h,h.strstart-1-h.prev_match,h.prev_length-tt),h.lookahead-=h.prev_length-1,h.prev_length-=2;++h.strstart<=A&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+tt-1])&h.hash_mask,G=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),--h.prev_length!=0;);if(h.match_available=0,h.match_length=tt-1,h.strstart++,O&&(Z(h,!1),h.strm.avail_out===0))return g}else if(h.match_available){if((O=f._tr_tally(h,0,h.window[h.strstart-1]))&&Z(h,!1),h.strstart++,h.lookahead--,h.strm.avail_out===0)return g}else h.match_available=1,h.strstart++,h.lookahead--}return h.match_available&&(O=f._tr_tally(h,0,h.window[h.strstart-1]),h.match_available=0),h.insert=h.strstart<tt-1?h.strstart:tt-1,et===w?(Z(h,!0),h.strm.avail_out===0?Tt:lt):h.last_lit&&(Z(h,!1),h.strm.avail_out===0)?g:it}function mt(h,et,G,O,A){this.good_length=h,this.max_lazy=et,this.nice_length=G,this.max_chain=O,this.func=A}function Gt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=T,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new d.Buf16(2*X),this.dyn_dtree=new d.Buf16(2*(2*K+1)),this.bl_tree=new d.Buf16(2*(2*nt+1)),Ot(this.dyn_ltree),Ot(this.dyn_dtree),Ot(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new d.Buf16(ct+1),this.heap=new d.Buf16(2*q+1),Ot(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new d.Buf16(2*q+1),Ot(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Vt(h){var et;return h&&h.state?(h.total_in=h.total_out=0,h.data_type=S,(et=h.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?I:J,h.adler=et.wrap===2?0:1,et.last_flush=_,f._tr_init(et),v):$t(h,C)}function Dt(h){var et=Vt(h);return et===v&&(function(G){G.window_size=2*G.w_size,Ot(G.head),G.max_lazy_match=c[G.level].max_lazy,G.good_match=c[G.level].good_length,G.nice_match=c[G.level].nice_length,G.max_chain_length=c[G.level].max_chain,G.strstart=0,G.block_start=0,G.lookahead=0,G.insert=0,G.match_length=G.prev_length=tt-1,G.match_available=0,G.ins_h=0})(h.state),et}function oe(h,et,G,O,A,N){if(!h)return C;var st=1;if(et===y&&(et=6),O<0?(st=0,O=-O):15<O&&(st=2,O-=16),A<1||D<A||G!==T||O<8||15<O||et<0||9<et||N<0||E<N)return $t(h,C);O===8&&(O=9);var at=new Gt;return(h.state=at).strm=h,at.wrap=st,at.gzhead=null,at.w_bits=O,at.w_size=1<<at.w_bits,at.w_mask=at.w_size-1,at.hash_bits=A+7,at.hash_size=1<<at.hash_bits,at.hash_mask=at.hash_size-1,at.hash_shift=~~((at.hash_bits+tt-1)/tt),at.window=new d.Buf8(2*at.w_size),at.head=new d.Buf16(at.hash_size),at.prev=new d.Buf16(at.w_size),at.lit_bufsize=1<<A+6,at.pending_buf_size=4*at.lit_bufsize,at.pending_buf=new d.Buf8(at.pending_buf_size),at.d_buf=1*at.lit_bufsize,at.l_buf=3*at.lit_bufsize,at.level=et,at.strategy=N,at.method=G,Dt(h)}c=[new mt(0,0,0,0,function(h,et){var G=65535;for(G>h.pending_buf_size-5&&(G=h.pending_buf_size-5);;){if(h.lookahead<=1){if(qt(h),h.lookahead===0&&et===_)return g;if(h.lookahead===0)break}h.strstart+=h.lookahead,h.lookahead=0;var O=h.block_start+G;if((h.strstart===0||h.strstart>=O)&&(h.lookahead=h.strstart-O,h.strstart=O,Z(h,!1),h.strm.avail_out===0)||h.strstart-h.block_start>=h.w_size-Pt&&(Z(h,!1),h.strm.avail_out===0))return g}return h.insert=0,et===w?(Z(h,!0),h.strm.avail_out===0?Tt:lt):(h.strstart>h.block_start&&(Z(h,!1),h.strm.avail_out),g)}),new mt(4,4,8,4,te),new mt(4,5,16,8,te),new mt(4,6,32,32,te),new mt(4,4,16,16,Nt),new mt(8,16,32,32,Nt),new mt(8,16,128,128,Nt),new mt(8,32,128,256,Nt),new mt(32,128,258,1024,Nt),new mt(32,258,258,4096,Nt)],s.deflateInit=function(h,et){return oe(h,et,T,15,8,0)},s.deflateInit2=oe,s.deflateReset=Dt,s.deflateResetKeep=Vt,s.deflateSetHeader=function(h,et){return h&&h.state?h.state.wrap!==2?C:(h.state.gzhead=et,v):C},s.deflate=function(h,et){var G,O,A,N;if(!h||!h.state||5<et||et<0)return h?$t(h,C):C;if(O=h.state,!h.output||!h.input&&h.avail_in!==0||O.status===666&&et!==w)return $t(h,h.avail_out===0?-5:C);if(O.strm=h,G=O.last_flush,O.last_flush=et,O.status===I)if(O.wrap===2)h.adler=0,Et(O,31),Et(O,139),Et(O,8),O.gzhead?(Et(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),Et(O,255&O.gzhead.time),Et(O,O.gzhead.time>>8&255),Et(O,O.gzhead.time>>16&255),Et(O,O.gzhead.time>>24&255),Et(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Et(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(Et(O,255&O.gzhead.extra.length),Et(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(h.adler=b(h.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(Et(O,0),Et(O,0),Et(O,0),Et(O,0),Et(O,0),Et(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Et(O,3),O.status=J);else{var st=T+(O.w_bits-8<<4)<<8;st|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(st|=32),st+=31-st%31,O.status=J,xt(O,st),O.strstart!==0&&(xt(O,h.adler>>>16),xt(O,65535&h.adler)),h.adler=1}if(O.status===69)if(O.gzhead.extra){for(A=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>A&&(h.adler=b(h.adler,O.pending_buf,O.pending-A,A)),Y(h),A=O.pending,O.pending!==O.pending_buf_size));)Et(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>A&&(h.adler=b(h.adler,O.pending_buf,O.pending-A,A)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){A=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>A&&(h.adler=b(h.adler,O.pending_buf,O.pending-A,A)),Y(h),A=O.pending,O.pending===O.pending_buf_size)){N=1;break}N=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,Et(O,N)}while(N!==0);O.gzhead.hcrc&&O.pending>A&&(h.adler=b(h.adler,O.pending_buf,O.pending-A,A)),N===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){A=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>A&&(h.adler=b(h.adler,O.pending_buf,O.pending-A,A)),Y(h),A=O.pending,O.pending===O.pending_buf_size)){N=1;break}N=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,Et(O,N)}while(N!==0);O.gzhead.hcrc&&O.pending>A&&(h.adler=b(h.adler,O.pending_buf,O.pending-A,A)),N===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&Y(h),O.pending+2<=O.pending_buf_size&&(Et(O,255&h.adler),Et(O,h.adler>>8&255),h.adler=0,O.status=J)):O.status=J),O.pending!==0){if(Y(h),h.avail_out===0)return O.last_flush=-1,v}else if(h.avail_in===0&&ot(et)<=ot(G)&&et!==w)return $t(h,-5);if(O.status===666&&h.avail_in!==0)return $t(h,-5);if(h.avail_in!==0||O.lookahead!==0||et!==_&&O.status!==666){var at=O.strategy===2?(function(V,ut){for(var kt;;){if(V.lookahead===0&&(qt(V),V.lookahead===0)){if(ut===_)return g;break}if(V.match_length=0,kt=f._tr_tally(V,0,V.window[V.strstart]),V.lookahead--,V.strstart++,kt&&(Z(V,!1),V.strm.avail_out===0))return g}return V.insert=0,ut===w?(Z(V,!0),V.strm.avail_out===0?Tt:lt):V.last_lit&&(Z(V,!1),V.strm.avail_out===0)?g:it})(O,et):O.strategy===3?(function(V,ut){for(var kt,ht,At,Lt,Mt=V.window;;){if(V.lookahead<=pt){if(qt(V),V.lookahead<=pt&&ut===_)return g;if(V.lookahead===0)break}if(V.match_length=0,V.lookahead>=tt&&0<V.strstart&&(ht=Mt[At=V.strstart-1])===Mt[++At]&&ht===Mt[++At]&&ht===Mt[++At]){Lt=V.strstart+pt;do;while(ht===Mt[++At]&&ht===Mt[++At]&&ht===Mt[++At]&&ht===Mt[++At]&&ht===Mt[++At]&&ht===Mt[++At]&&ht===Mt[++At]&&ht===Mt[++At]&&At<Lt);V.match_length=pt-(Lt-At),V.match_length>V.lookahead&&(V.match_length=V.lookahead)}if(V.match_length>=tt?(kt=f._tr_tally(V,1,V.match_length-tt),V.lookahead-=V.match_length,V.strstart+=V.match_length,V.match_length=0):(kt=f._tr_tally(V,0,V.window[V.strstart]),V.lookahead--,V.strstart++),kt&&(Z(V,!1),V.strm.avail_out===0))return g}return V.insert=0,ut===w?(Z(V,!0),V.strm.avail_out===0?Tt:lt):V.last_lit&&(Z(V,!1),V.strm.avail_out===0)?g:it})(O,et):c[O.level].func(O,et);if(at!==Tt&&at!==lt||(O.status=666),at===g||at===Tt)return h.avail_out===0&&(O.last_flush=-1),v;if(at===it&&(et===1?f._tr_align(O):et!==5&&(f._tr_stored_block(O,0,0,!1),et===3&&(Ot(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),Y(h),h.avail_out===0))return O.last_flush=-1,v}return et!==w?v:O.wrap<=0?1:(O.wrap===2?(Et(O,255&h.adler),Et(O,h.adler>>8&255),Et(O,h.adler>>16&255),Et(O,h.adler>>24&255),Et(O,255&h.total_in),Et(O,h.total_in>>8&255),Et(O,h.total_in>>16&255),Et(O,h.total_in>>24&255)):(xt(O,h.adler>>>16),xt(O,65535&h.adler)),Y(h),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?v:1)},s.deflateEnd=function(h){var et;return h&&h.state?(et=h.state.status)!==I&&et!==69&&et!==73&&et!==91&&et!==103&&et!==J&&et!==666?$t(h,C):(h.state=null,et===J?$t(h,-3):v):C},s.deflateSetDictionary=function(h,et){var G,O,A,N,st,at,V,ut,kt=et.length;if(!h||!h.state||(N=(G=h.state).wrap)===2||N===1&&G.status!==I||G.lookahead)return C;for(N===1&&(h.adler=m(h.adler,et,kt,0)),G.wrap=0,kt>=G.w_size&&(N===0&&(Ot(G.head),G.strstart=0,G.block_start=0,G.insert=0),ut=new d.Buf8(G.w_size),d.arraySet(ut,et,kt-G.w_size,G.w_size,0),et=ut,kt=G.w_size),st=h.avail_in,at=h.next_in,V=h.input,h.avail_in=kt,h.next_in=0,h.input=et,qt(G);G.lookahead>=tt;){for(O=G.strstart,A=G.lookahead-(tt-1);G.ins_h=(G.ins_h<<G.hash_shift^G.window[O+tt-1])&G.hash_mask,G.prev[O&G.w_mask]=G.head[G.ins_h],G.head[G.ins_h]=O,O++,--A;);G.strstart=O,G.lookahead=tt-1,qt(G)}return G.strstart+=G.lookahead,G.block_start=G.strstart,G.insert=G.lookahead,G.lookahead=0,G.match_length=G.prev_length=tt-1,G.match_available=0,h.next_in=at,h.input=V,h.avail_in=st,G.wrap=N,v},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,o,s){o.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,o,s){o.exports=function(c,d){var f,m,b,k,_,w,v,C,y,E,S,T,D,q,K,nt,X,ct,tt,pt,Pt,I,J,g,it;f=c.state,m=c.next_in,g=c.input,b=m+(c.avail_in-5),k=c.next_out,it=c.output,_=k-(d-c.avail_out),w=k+(c.avail_out-257),v=f.dmax,C=f.wsize,y=f.whave,E=f.wnext,S=f.window,T=f.hold,D=f.bits,q=f.lencode,K=f.distcode,nt=(1<<f.lenbits)-1,X=(1<<f.distbits)-1;t:do{D<15&&(T+=g[m++]<<D,D+=8,T+=g[m++]<<D,D+=8),ct=q[T&nt];e:for(;;){if(T>>>=tt=ct>>>24,D-=tt,(tt=ct>>>16&255)===0)it[k++]=65535&ct;else{if(!(16&tt)){if((64&tt)==0){ct=q[(65535&ct)+(T&(1<<tt)-1)];continue e}if(32&tt){f.mode=12;break t}c.msg="invalid literal/length code",f.mode=30;break t}pt=65535&ct,(tt&=15)&&(D<tt&&(T+=g[m++]<<D,D+=8),pt+=T&(1<<tt)-1,T>>>=tt,D-=tt),D<15&&(T+=g[m++]<<D,D+=8,T+=g[m++]<<D,D+=8),ct=K[T&X];n:for(;;){if(T>>>=tt=ct>>>24,D-=tt,!(16&(tt=ct>>>16&255))){if((64&tt)==0){ct=K[(65535&ct)+(T&(1<<tt)-1)];continue n}c.msg="invalid distance code",f.mode=30;break t}if(Pt=65535&ct,D<(tt&=15)&&(T+=g[m++]<<D,(D+=8)<tt&&(T+=g[m++]<<D,D+=8)),v<(Pt+=T&(1<<tt)-1)){c.msg="invalid distance too far back",f.mode=30;break t}if(T>>>=tt,D-=tt,(tt=k-_)<Pt){if(y<(tt=Pt-tt)&&f.sane){c.msg="invalid distance too far back",f.mode=30;break t}if(J=S,(I=0)===E){if(I+=C-tt,tt<pt){for(pt-=tt;it[k++]=S[I++],--tt;);I=k-Pt,J=it}}else if(E<tt){if(I+=C+E-tt,(tt-=E)<pt){for(pt-=tt;it[k++]=S[I++],--tt;);if(I=0,E<pt){for(pt-=tt=E;it[k++]=S[I++],--tt;);I=k-Pt,J=it}}}else if(I+=E-tt,tt<pt){for(pt-=tt;it[k++]=S[I++],--tt;);I=k-Pt,J=it}for(;2<pt;)it[k++]=J[I++],it[k++]=J[I++],it[k++]=J[I++],pt-=3;pt&&(it[k++]=J[I++],1<pt&&(it[k++]=J[I++]))}else{for(I=k-Pt;it[k++]=it[I++],it[k++]=it[I++],it[k++]=it[I++],2<(pt-=3););pt&&(it[k++]=it[I++],1<pt&&(it[k++]=it[I++]))}break}}break}}while(m<b&&k<w);m-=pt=D>>3,T&=(1<<(D-=pt<<3))-1,c.next_in=m,c.next_out=k,c.avail_in=m<b?b-m+5:5-(m-b),c.avail_out=k<w?w-k+257:257-(k-w),f.hold=T,f.bits=D}},{}],49:[function(r,o,s){var c=r("../utils/common"),d=r("./adler32"),f=r("./crc32"),m=r("./inffast"),b=r("./inftrees"),k=1,_=2,w=0,v=-2,C=1,y=852,E=592;function S(I){return(I>>>24&255)+(I>>>8&65280)+((65280&I)<<8)+((255&I)<<24)}function T(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new c.Buf16(320),this.work=new c.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function D(I){var J;return I&&I.state?(J=I.state,I.total_in=I.total_out=J.total=0,I.msg="",J.wrap&&(I.adler=1&J.wrap),J.mode=C,J.last=0,J.havedict=0,J.dmax=32768,J.head=null,J.hold=0,J.bits=0,J.lencode=J.lendyn=new c.Buf32(y),J.distcode=J.distdyn=new c.Buf32(E),J.sane=1,J.back=-1,w):v}function q(I){var J;return I&&I.state?((J=I.state).wsize=0,J.whave=0,J.wnext=0,D(I)):v}function K(I,J){var g,it;return I&&I.state?(it=I.state,J<0?(g=0,J=-J):(g=1+(J>>4),J<48&&(J&=15)),J&&(J<8||15<J)?v:(it.window!==null&&it.wbits!==J&&(it.window=null),it.wrap=g,it.wbits=J,q(I))):v}function nt(I,J){var g,it;return I?(it=new T,(I.state=it).window=null,(g=K(I,J))!==w&&(I.state=null),g):v}var X,ct,tt=!0;function pt(I){if(tt){var J;for(X=new c.Buf32(512),ct=new c.Buf32(32),J=0;J<144;)I.lens[J++]=8;for(;J<256;)I.lens[J++]=9;for(;J<280;)I.lens[J++]=7;for(;J<288;)I.lens[J++]=8;for(b(k,I.lens,0,288,X,0,I.work,{bits:9}),J=0;J<32;)I.lens[J++]=5;b(_,I.lens,0,32,ct,0,I.work,{bits:5}),tt=!1}I.lencode=X,I.lenbits=9,I.distcode=ct,I.distbits=5}function Pt(I,J,g,it){var Tt,lt=I.state;return lt.window===null&&(lt.wsize=1<<lt.wbits,lt.wnext=0,lt.whave=0,lt.window=new c.Buf8(lt.wsize)),it>=lt.wsize?(c.arraySet(lt.window,J,g-lt.wsize,lt.wsize,0),lt.wnext=0,lt.whave=lt.wsize):(it<(Tt=lt.wsize-lt.wnext)&&(Tt=it),c.arraySet(lt.window,J,g-it,Tt,lt.wnext),(it-=Tt)?(c.arraySet(lt.window,J,g-it,it,0),lt.wnext=it,lt.whave=lt.wsize):(lt.wnext+=Tt,lt.wnext===lt.wsize&&(lt.wnext=0),lt.whave<lt.wsize&&(lt.whave+=Tt))),0}s.inflateReset=q,s.inflateReset2=K,s.inflateResetKeep=D,s.inflateInit=function(I){return nt(I,15)},s.inflateInit2=nt,s.inflate=function(I,J){var g,it,Tt,lt,$t,ot,Ot,Y,Z,Et,xt,vt,qt,te,Nt,mt,Gt,Vt,Dt,oe,h,et,G,O,A=0,N=new c.Buf8(4),st=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!I||!I.state||!I.output||!I.input&&I.avail_in!==0)return v;(g=I.state).mode===12&&(g.mode=13),$t=I.next_out,Tt=I.output,Ot=I.avail_out,lt=I.next_in,it=I.input,ot=I.avail_in,Y=g.hold,Z=g.bits,Et=ot,xt=Ot,et=w;t:for(;;)switch(g.mode){case C:if(g.wrap===0){g.mode=13;break}for(;Z<16;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}if(2&g.wrap&&Y===35615){N[g.check=0]=255&Y,N[1]=Y>>>8&255,g.check=f(g.check,N,2,0),Z=Y=0,g.mode=2;break}if(g.flags=0,g.head&&(g.head.done=!1),!(1&g.wrap)||(((255&Y)<<8)+(Y>>8))%31){I.msg="incorrect header check",g.mode=30;break}if((15&Y)!=8){I.msg="unknown compression method",g.mode=30;break}if(Z-=4,h=8+(15&(Y>>>=4)),g.wbits===0)g.wbits=h;else if(h>g.wbits){I.msg="invalid window size",g.mode=30;break}g.dmax=1<<h,I.adler=g.check=1,g.mode=512&Y?10:12,Z=Y=0;break;case 2:for(;Z<16;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}if(g.flags=Y,(255&g.flags)!=8){I.msg="unknown compression method",g.mode=30;break}if(57344&g.flags){I.msg="unknown header flags set",g.mode=30;break}g.head&&(g.head.text=Y>>8&1),512&g.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,g.check=f(g.check,N,2,0)),Z=Y=0,g.mode=3;case 3:for(;Z<32;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}g.head&&(g.head.time=Y),512&g.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,N[2]=Y>>>16&255,N[3]=Y>>>24&255,g.check=f(g.check,N,4,0)),Z=Y=0,g.mode=4;case 4:for(;Z<16;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}g.head&&(g.head.xflags=255&Y,g.head.os=Y>>8),512&g.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,g.check=f(g.check,N,2,0)),Z=Y=0,g.mode=5;case 5:if(1024&g.flags){for(;Z<16;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}g.length=Y,g.head&&(g.head.extra_len=Y),512&g.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,g.check=f(g.check,N,2,0)),Z=Y=0}else g.head&&(g.head.extra=null);g.mode=6;case 6:if(1024&g.flags&&(ot<(vt=g.length)&&(vt=ot),vt&&(g.head&&(h=g.head.extra_len-g.length,g.head.extra||(g.head.extra=new Array(g.head.extra_len)),c.arraySet(g.head.extra,it,lt,vt,h)),512&g.flags&&(g.check=f(g.check,it,vt,lt)),ot-=vt,lt+=vt,g.length-=vt),g.length))break t;g.length=0,g.mode=7;case 7:if(2048&g.flags){if(ot===0)break t;for(vt=0;h=it[lt+vt++],g.head&&h&&g.length<65536&&(g.head.name+=String.fromCharCode(h)),h&&vt<ot;);if(512&g.flags&&(g.check=f(g.check,it,vt,lt)),ot-=vt,lt+=vt,h)break t}else g.head&&(g.head.name=null);g.length=0,g.mode=8;case 8:if(4096&g.flags){if(ot===0)break t;for(vt=0;h=it[lt+vt++],g.head&&h&&g.length<65536&&(g.head.comment+=String.fromCharCode(h)),h&&vt<ot;);if(512&g.flags&&(g.check=f(g.check,it,vt,lt)),ot-=vt,lt+=vt,h)break t}else g.head&&(g.head.comment=null);g.mode=9;case 9:if(512&g.flags){for(;Z<16;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}if(Y!==(65535&g.check)){I.msg="header crc mismatch",g.mode=30;break}Z=Y=0}g.head&&(g.head.hcrc=g.flags>>9&1,g.head.done=!0),I.adler=g.check=0,g.mode=12;break;case 10:for(;Z<32;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}I.adler=g.check=S(Y),Z=Y=0,g.mode=11;case 11:if(g.havedict===0)return I.next_out=$t,I.avail_out=Ot,I.next_in=lt,I.avail_in=ot,g.hold=Y,g.bits=Z,2;I.adler=g.check=1,g.mode=12;case 12:if(J===5||J===6)break t;case 13:if(g.last){Y>>>=7&Z,Z-=7&Z,g.mode=27;break}for(;Z<3;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}switch(g.last=1&Y,Z-=1,3&(Y>>>=1)){case 0:g.mode=14;break;case 1:if(pt(g),g.mode=20,J!==6)break;Y>>>=2,Z-=2;break t;case 2:g.mode=17;break;case 3:I.msg="invalid block type",g.mode=30}Y>>>=2,Z-=2;break;case 14:for(Y>>>=7&Z,Z-=7&Z;Z<32;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}if((65535&Y)!=(Y>>>16^65535)){I.msg="invalid stored block lengths",g.mode=30;break}if(g.length=65535&Y,Z=Y=0,g.mode=15,J===6)break t;case 15:g.mode=16;case 16:if(vt=g.length){if(ot<vt&&(vt=ot),Ot<vt&&(vt=Ot),vt===0)break t;c.arraySet(Tt,it,lt,vt,$t),ot-=vt,lt+=vt,Ot-=vt,$t+=vt,g.length-=vt;break}g.mode=12;break;case 17:for(;Z<14;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}if(g.nlen=257+(31&Y),Y>>>=5,Z-=5,g.ndist=1+(31&Y),Y>>>=5,Z-=5,g.ncode=4+(15&Y),Y>>>=4,Z-=4,286<g.nlen||30<g.ndist){I.msg="too many length or distance symbols",g.mode=30;break}g.have=0,g.mode=18;case 18:for(;g.have<g.ncode;){for(;Z<3;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}g.lens[st[g.have++]]=7&Y,Y>>>=3,Z-=3}for(;g.have<19;)g.lens[st[g.have++]]=0;if(g.lencode=g.lendyn,g.lenbits=7,G={bits:g.lenbits},et=b(0,g.lens,0,19,g.lencode,0,g.work,G),g.lenbits=G.bits,et){I.msg="invalid code lengths set",g.mode=30;break}g.have=0,g.mode=19;case 19:for(;g.have<g.nlen+g.ndist;){for(;mt=(A=g.lencode[Y&(1<<g.lenbits)-1])>>>16&255,Gt=65535&A,!((Nt=A>>>24)<=Z);){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}if(Gt<16)Y>>>=Nt,Z-=Nt,g.lens[g.have++]=Gt;else{if(Gt===16){for(O=Nt+2;Z<O;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}if(Y>>>=Nt,Z-=Nt,g.have===0){I.msg="invalid bit length repeat",g.mode=30;break}h=g.lens[g.have-1],vt=3+(3&Y),Y>>>=2,Z-=2}else if(Gt===17){for(O=Nt+3;Z<O;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}Z-=Nt,h=0,vt=3+(7&(Y>>>=Nt)),Y>>>=3,Z-=3}else{for(O=Nt+7;Z<O;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}Z-=Nt,h=0,vt=11+(127&(Y>>>=Nt)),Y>>>=7,Z-=7}if(g.have+vt>g.nlen+g.ndist){I.msg="invalid bit length repeat",g.mode=30;break}for(;vt--;)g.lens[g.have++]=h}}if(g.mode===30)break;if(g.lens[256]===0){I.msg="invalid code -- missing end-of-block",g.mode=30;break}if(g.lenbits=9,G={bits:g.lenbits},et=b(k,g.lens,0,g.nlen,g.lencode,0,g.work,G),g.lenbits=G.bits,et){I.msg="invalid literal/lengths set",g.mode=30;break}if(g.distbits=6,g.distcode=g.distdyn,G={bits:g.distbits},et=b(_,g.lens,g.nlen,g.ndist,g.distcode,0,g.work,G),g.distbits=G.bits,et){I.msg="invalid distances set",g.mode=30;break}if(g.mode=20,J===6)break t;case 20:g.mode=21;case 21:if(6<=ot&&258<=Ot){I.next_out=$t,I.avail_out=Ot,I.next_in=lt,I.avail_in=ot,g.hold=Y,g.bits=Z,m(I,xt),$t=I.next_out,Tt=I.output,Ot=I.avail_out,lt=I.next_in,it=I.input,ot=I.avail_in,Y=g.hold,Z=g.bits,g.mode===12&&(g.back=-1);break}for(g.back=0;mt=(A=g.lencode[Y&(1<<g.lenbits)-1])>>>16&255,Gt=65535&A,!((Nt=A>>>24)<=Z);){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}if(mt&&(240&mt)==0){for(Vt=Nt,Dt=mt,oe=Gt;mt=(A=g.lencode[oe+((Y&(1<<Vt+Dt)-1)>>Vt)])>>>16&255,Gt=65535&A,!(Vt+(Nt=A>>>24)<=Z);){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}Y>>>=Vt,Z-=Vt,g.back+=Vt}if(Y>>>=Nt,Z-=Nt,g.back+=Nt,g.length=Gt,mt===0){g.mode=26;break}if(32&mt){g.back=-1,g.mode=12;break}if(64&mt){I.msg="invalid literal/length code",g.mode=30;break}g.extra=15&mt,g.mode=22;case 22:if(g.extra){for(O=g.extra;Z<O;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}g.length+=Y&(1<<g.extra)-1,Y>>>=g.extra,Z-=g.extra,g.back+=g.extra}g.was=g.length,g.mode=23;case 23:for(;mt=(A=g.distcode[Y&(1<<g.distbits)-1])>>>16&255,Gt=65535&A,!((Nt=A>>>24)<=Z);){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}if((240&mt)==0){for(Vt=Nt,Dt=mt,oe=Gt;mt=(A=g.distcode[oe+((Y&(1<<Vt+Dt)-1)>>Vt)])>>>16&255,Gt=65535&A,!(Vt+(Nt=A>>>24)<=Z);){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}Y>>>=Vt,Z-=Vt,g.back+=Vt}if(Y>>>=Nt,Z-=Nt,g.back+=Nt,64&mt){I.msg="invalid distance code",g.mode=30;break}g.offset=Gt,g.extra=15&mt,g.mode=24;case 24:if(g.extra){for(O=g.extra;Z<O;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}g.offset+=Y&(1<<g.extra)-1,Y>>>=g.extra,Z-=g.extra,g.back+=g.extra}if(g.offset>g.dmax){I.msg="invalid distance too far back",g.mode=30;break}g.mode=25;case 25:if(Ot===0)break t;if(vt=xt-Ot,g.offset>vt){if((vt=g.offset-vt)>g.whave&&g.sane){I.msg="invalid distance too far back",g.mode=30;break}qt=vt>g.wnext?(vt-=g.wnext,g.wsize-vt):g.wnext-vt,vt>g.length&&(vt=g.length),te=g.window}else te=Tt,qt=$t-g.offset,vt=g.length;for(Ot<vt&&(vt=Ot),Ot-=vt,g.length-=vt;Tt[$t++]=te[qt++],--vt;);g.length===0&&(g.mode=21);break;case 26:if(Ot===0)break t;Tt[$t++]=g.length,Ot--,g.mode=21;break;case 27:if(g.wrap){for(;Z<32;){if(ot===0)break t;ot--,Y|=it[lt++]<<Z,Z+=8}if(xt-=Ot,I.total_out+=xt,g.total+=xt,xt&&(I.adler=g.check=g.flags?f(g.check,Tt,xt,$t-xt):d(g.check,Tt,xt,$t-xt)),xt=Ot,(g.flags?Y:S(Y))!==g.check){I.msg="incorrect data check",g.mode=30;break}Z=Y=0}g.mode=28;case 28:if(g.wrap&&g.flags){for(;Z<32;){if(ot===0)break t;ot--,Y+=it[lt++]<<Z,Z+=8}if(Y!==(4294967295&g.total)){I.msg="incorrect length check",g.mode=30;break}Z=Y=0}g.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;case 32:default:return v}return I.next_out=$t,I.avail_out=Ot,I.next_in=lt,I.avail_in=ot,g.hold=Y,g.bits=Z,(g.wsize||xt!==I.avail_out&&g.mode<30&&(g.mode<27||J!==4))&&Pt(I,I.output,I.next_out,xt-I.avail_out)?(g.mode=31,-4):(Et-=I.avail_in,xt-=I.avail_out,I.total_in+=Et,I.total_out+=xt,g.total+=xt,g.wrap&&xt&&(I.adler=g.check=g.flags?f(g.check,Tt,xt,I.next_out-xt):d(g.check,Tt,xt,I.next_out-xt)),I.data_type=g.bits+(g.last?64:0)+(g.mode===12?128:0)+(g.mode===20||g.mode===15?256:0),(Et==0&&xt===0||J===4)&&et===w&&(et=-5),et)},s.inflateEnd=function(I){if(!I||!I.state)return v;var J=I.state;return J.window&&(J.window=null),I.state=null,w},s.inflateGetHeader=function(I,J){var g;return I&&I.state?(2&(g=I.state).wrap)==0?v:((g.head=J).done=!1,w):v},s.inflateSetDictionary=function(I,J){var g,it=J.length;return I&&I.state?(g=I.state).wrap!==0&&g.mode!==11?v:g.mode===11&&d(1,J,it,0)!==g.check?-3:Pt(I,J,it,it)?(g.mode=31,-4):(g.havedict=1,w):v},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,o,s){var c=r("../utils/common"),d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],b=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];o.exports=function(k,_,w,v,C,y,E,S){var T,D,q,K,nt,X,ct,tt,pt,Pt=S.bits,I=0,J=0,g=0,it=0,Tt=0,lt=0,$t=0,ot=0,Ot=0,Y=0,Z=null,Et=0,xt=new c.Buf16(16),vt=new c.Buf16(16),qt=null,te=0;for(I=0;I<=15;I++)xt[I]=0;for(J=0;J<v;J++)xt[_[w+J]]++;for(Tt=Pt,it=15;1<=it&&xt[it]===0;it--);if(it<Tt&&(Tt=it),it===0)return C[y++]=20971520,C[y++]=20971520,S.bits=1,0;for(g=1;g<it&&xt[g]===0;g++);for(Tt<g&&(Tt=g),I=ot=1;I<=15;I++)if(ot<<=1,(ot-=xt[I])<0)return-1;if(0<ot&&(k===0||it!==1))return-1;for(vt[1]=0,I=1;I<15;I++)vt[I+1]=vt[I]+xt[I];for(J=0;J<v;J++)_[w+J]!==0&&(E[vt[_[w+J]]++]=J);if(X=k===0?(Z=qt=E,19):k===1?(Z=d,Et-=257,qt=f,te-=257,256):(Z=m,qt=b,-1),I=g,nt=y,$t=J=Y=0,q=-1,K=(Ot=1<<(lt=Tt))-1,k===1&&852<Ot||k===2&&592<Ot)return 1;for(;;){for(ct=I-$t,pt=E[J]<X?(tt=0,E[J]):E[J]>X?(tt=qt[te+E[J]],Z[Et+E[J]]):(tt=96,0),T=1<<I-$t,g=D=1<<lt;C[nt+(Y>>$t)+(D-=T)]=ct<<24|tt<<16|pt|0,D!==0;);for(T=1<<I-1;Y&T;)T>>=1;if(T!==0?(Y&=T-1,Y+=T):Y=0,J++,--xt[I]==0){if(I===it)break;I=_[w+E[J]]}if(Tt<I&&(Y&K)!==q){for($t===0&&($t=Tt),nt+=g,ot=1<<(lt=I-$t);lt+$t<it&&!((ot-=xt[lt+$t])<=0);)lt++,ot<<=1;if(Ot+=1<<lt,k===1&&852<Ot||k===2&&592<Ot)return 1;C[q=Y&K]=Tt<<24|lt<<16|nt-y|0}}return Y!==0&&(C[nt+Y]=I-$t<<24|64<<16|0),S.bits=Tt,0}},{"../utils/common":41}],51:[function(r,o,s){o.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,o,s){var c=r("../utils/common"),d=0,f=1;function m(A){for(var N=A.length;0<=--N;)A[N]=0}var b=0,k=29,_=256,w=_+1+k,v=30,C=19,y=2*w+1,E=15,S=16,T=7,D=256,q=16,K=17,nt=18,X=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ct=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Pt=new Array(2*(w+2));m(Pt);var I=new Array(2*v);m(I);var J=new Array(512);m(J);var g=new Array(256);m(g);var it=new Array(k);m(it);var Tt,lt,$t,ot=new Array(v);function Ot(A,N,st,at,V){this.static_tree=A,this.extra_bits=N,this.extra_base=st,this.elems=at,this.max_length=V,this.has_stree=A&&A.length}function Y(A,N){this.dyn_tree=A,this.max_code=0,this.stat_desc=N}function Z(A){return A<256?J[A]:J[256+(A>>>7)]}function Et(A,N){A.pending_buf[A.pending++]=255&N,A.pending_buf[A.pending++]=N>>>8&255}function xt(A,N,st){A.bi_valid>S-st?(A.bi_buf|=N<<A.bi_valid&65535,Et(A,A.bi_buf),A.bi_buf=N>>S-A.bi_valid,A.bi_valid+=st-S):(A.bi_buf|=N<<A.bi_valid&65535,A.bi_valid+=st)}function vt(A,N,st){xt(A,st[2*N],st[2*N+1])}function qt(A,N){for(var st=0;st|=1&A,A>>>=1,st<<=1,0<--N;);return st>>>1}function te(A,N,st){var at,V,ut=new Array(E+1),kt=0;for(at=1;at<=E;at++)ut[at]=kt=kt+st[at-1]<<1;for(V=0;V<=N;V++){var ht=A[2*V+1];ht!==0&&(A[2*V]=qt(ut[ht]++,ht))}}function Nt(A){var N;for(N=0;N<w;N++)A.dyn_ltree[2*N]=0;for(N=0;N<v;N++)A.dyn_dtree[2*N]=0;for(N=0;N<C;N++)A.bl_tree[2*N]=0;A.dyn_ltree[2*D]=1,A.opt_len=A.static_len=0,A.last_lit=A.matches=0}function mt(A){8<A.bi_valid?Et(A,A.bi_buf):0<A.bi_valid&&(A.pending_buf[A.pending++]=A.bi_buf),A.bi_buf=0,A.bi_valid=0}function Gt(A,N,st,at){var V=2*N,ut=2*st;return A[V]<A[ut]||A[V]===A[ut]&&at[N]<=at[st]}function Vt(A,N,st){for(var at=A.heap[st],V=st<<1;V<=A.heap_len&&(V<A.heap_len&&Gt(N,A.heap[V+1],A.heap[V],A.depth)&&V++,!Gt(N,at,A.heap[V],A.depth));)A.heap[st]=A.heap[V],st=V,V<<=1;A.heap[st]=at}function Dt(A,N,st){var at,V,ut,kt,ht=0;if(A.last_lit!==0)for(;at=A.pending_buf[A.d_buf+2*ht]<<8|A.pending_buf[A.d_buf+2*ht+1],V=A.pending_buf[A.l_buf+ht],ht++,at===0?vt(A,V,N):(vt(A,(ut=g[V])+_+1,N),(kt=X[ut])!==0&&xt(A,V-=it[ut],kt),vt(A,ut=Z(--at),st),(kt=ct[ut])!==0&&xt(A,at-=ot[ut],kt)),ht<A.last_lit;);vt(A,D,N)}function oe(A,N){var st,at,V,ut=N.dyn_tree,kt=N.stat_desc.static_tree,ht=N.stat_desc.has_stree,At=N.stat_desc.elems,Lt=-1;for(A.heap_len=0,A.heap_max=y,st=0;st<At;st++)ut[2*st]!==0?(A.heap[++A.heap_len]=Lt=st,A.depth[st]=0):ut[2*st+1]=0;for(;A.heap_len<2;)ut[2*(V=A.heap[++A.heap_len]=Lt<2?++Lt:0)]=1,A.depth[V]=0,A.opt_len--,ht&&(A.static_len-=kt[2*V+1]);for(N.max_code=Lt,st=A.heap_len>>1;1<=st;st--)Vt(A,ut,st);for(V=At;st=A.heap[1],A.heap[1]=A.heap[A.heap_len--],Vt(A,ut,1),at=A.heap[1],A.heap[--A.heap_max]=st,A.heap[--A.heap_max]=at,ut[2*V]=ut[2*st]+ut[2*at],A.depth[V]=(A.depth[st]>=A.depth[at]?A.depth[st]:A.depth[at])+1,ut[2*st+1]=ut[2*at+1]=V,A.heap[1]=V++,Vt(A,ut,1),2<=A.heap_len;);A.heap[--A.heap_max]=A.heap[1],(function(Mt,re){var Ce,de,fe,Ht,Re,ve,St=re.dyn_tree,ze=re.max_code,Ae=re.stat_desc.static_tree,sn=re.stat_desc.has_stree,_t=re.stat_desc.extra_bits,on=re.stat_desc.extra_base,Be=re.stat_desc.max_length,De=0;for(Ht=0;Ht<=E;Ht++)Mt.bl_count[Ht]=0;for(St[2*Mt.heap[Mt.heap_max]+1]=0,Ce=Mt.heap_max+1;Ce<y;Ce++)Be<(Ht=St[2*St[2*(de=Mt.heap[Ce])+1]+1]+1)&&(Ht=Be,De++),St[2*de+1]=Ht,ze<de||(Mt.bl_count[Ht]++,Re=0,on<=de&&(Re=_t[de-on]),ve=St[2*de],Mt.opt_len+=ve*(Ht+Re),sn&&(Mt.static_len+=ve*(Ae[2*de+1]+Re)));if(De!==0){do{for(Ht=Be-1;Mt.bl_count[Ht]===0;)Ht--;Mt.bl_count[Ht]--,Mt.bl_count[Ht+1]+=2,Mt.bl_count[Be]--,De-=2}while(0<De);for(Ht=Be;Ht!==0;Ht--)for(de=Mt.bl_count[Ht];de!==0;)ze<(fe=Mt.heap[--Ce])||(St[2*fe+1]!==Ht&&(Mt.opt_len+=(Ht-St[2*fe+1])*St[2*fe],St[2*fe+1]=Ht),de--)}})(A,N),te(ut,Lt,A.bl_count)}function h(A,N,st){var at,V,ut=-1,kt=N[1],ht=0,At=7,Lt=4;for(kt===0&&(At=138,Lt=3),N[2*(st+1)+1]=65535,at=0;at<=st;at++)V=kt,kt=N[2*(at+1)+1],++ht<At&&V===kt||(ht<Lt?A.bl_tree[2*V]+=ht:V!==0?(V!==ut&&A.bl_tree[2*V]++,A.bl_tree[2*q]++):ht<=10?A.bl_tree[2*K]++:A.bl_tree[2*nt]++,ut=V,Lt=(ht=0)===kt?(At=138,3):V===kt?(At=6,3):(At=7,4))}function et(A,N,st){var at,V,ut=-1,kt=N[1],ht=0,At=7,Lt=4;for(kt===0&&(At=138,Lt=3),at=0;at<=st;at++)if(V=kt,kt=N[2*(at+1)+1],!(++ht<At&&V===kt)){if(ht<Lt)for(;vt(A,V,A.bl_tree),--ht!=0;);else V!==0?(V!==ut&&(vt(A,V,A.bl_tree),ht--),vt(A,q,A.bl_tree),xt(A,ht-3,2)):ht<=10?(vt(A,K,A.bl_tree),xt(A,ht-3,3)):(vt(A,nt,A.bl_tree),xt(A,ht-11,7));ut=V,Lt=(ht=0)===kt?(At=138,3):V===kt?(At=6,3):(At=7,4)}}m(ot);var G=!1;function O(A,N,st,at){xt(A,(b<<1)+(at?1:0),3),(function(V,ut,kt,ht){mt(V),Et(V,kt),Et(V,~kt),c.arraySet(V.pending_buf,V.window,ut,kt,V.pending),V.pending+=kt})(A,N,st)}s._tr_init=function(A){G||((function(){var N,st,at,V,ut,kt=new Array(E+1);for(V=at=0;V<k-1;V++)for(it[V]=at,N=0;N<1<<X[V];N++)g[at++]=V;for(g[at-1]=V,V=ut=0;V<16;V++)for(ot[V]=ut,N=0;N<1<<ct[V];N++)J[ut++]=V;for(ut>>=7;V<v;V++)for(ot[V]=ut<<7,N=0;N<1<<ct[V]-7;N++)J[256+ut++]=V;for(st=0;st<=E;st++)kt[st]=0;for(N=0;N<=143;)Pt[2*N+1]=8,N++,kt[8]++;for(;N<=255;)Pt[2*N+1]=9,N++,kt[9]++;for(;N<=279;)Pt[2*N+1]=7,N++,kt[7]++;for(;N<=287;)Pt[2*N+1]=8,N++,kt[8]++;for(te(Pt,w+1,kt),N=0;N<v;N++)I[2*N+1]=5,I[2*N]=qt(N,5);Tt=new Ot(Pt,X,_+1,w,E),lt=new Ot(I,ct,0,v,E),$t=new Ot(new Array(0),tt,0,C,T)})(),G=!0),A.l_desc=new Y(A.dyn_ltree,Tt),A.d_desc=new Y(A.dyn_dtree,lt),A.bl_desc=new Y(A.bl_tree,$t),A.bi_buf=0,A.bi_valid=0,Nt(A)},s._tr_stored_block=O,s._tr_flush_block=function(A,N,st,at){var V,ut,kt=0;0<A.level?(A.strm.data_type===2&&(A.strm.data_type=(function(ht){var At,Lt=4093624447;for(At=0;At<=31;At++,Lt>>>=1)if(1&Lt&&ht.dyn_ltree[2*At]!==0)return d;if(ht.dyn_ltree[18]!==0||ht.dyn_ltree[20]!==0||ht.dyn_ltree[26]!==0)return f;for(At=32;At<_;At++)if(ht.dyn_ltree[2*At]!==0)return f;return d})(A)),oe(A,A.l_desc),oe(A,A.d_desc),kt=(function(ht){var At;for(h(ht,ht.dyn_ltree,ht.l_desc.max_code),h(ht,ht.dyn_dtree,ht.d_desc.max_code),oe(ht,ht.bl_desc),At=C-1;3<=At&&ht.bl_tree[2*pt[At]+1]===0;At--);return ht.opt_len+=3*(At+1)+5+5+4,At})(A),V=A.opt_len+3+7>>>3,(ut=A.static_len+3+7>>>3)<=V&&(V=ut)):V=ut=st+5,st+4<=V&&N!==-1?O(A,N,st,at):A.strategy===4||ut===V?(xt(A,2+(at?1:0),3),Dt(A,Pt,I)):(xt(A,4+(at?1:0),3),(function(ht,At,Lt,Mt){var re;for(xt(ht,At-257,5),xt(ht,Lt-1,5),xt(ht,Mt-4,4),re=0;re<Mt;re++)xt(ht,ht.bl_tree[2*pt[re]+1],3);et(ht,ht.dyn_ltree,At-1),et(ht,ht.dyn_dtree,Lt-1)})(A,A.l_desc.max_code+1,A.d_desc.max_code+1,kt+1),Dt(A,A.dyn_ltree,A.dyn_dtree)),Nt(A),at&&mt(A)},s._tr_tally=function(A,N,st){return A.pending_buf[A.d_buf+2*A.last_lit]=N>>>8&255,A.pending_buf[A.d_buf+2*A.last_lit+1]=255&N,A.pending_buf[A.l_buf+A.last_lit]=255&st,A.last_lit++,N===0?A.dyn_ltree[2*st]++:(A.matches++,N--,A.dyn_ltree[2*(g[st]+_+1)]++,A.dyn_dtree[2*Z(N)]++),A.last_lit===A.lit_bufsize-1},s._tr_align=function(A){xt(A,2,3),vt(A,D,Pt),(function(N){N.bi_valid===16?(Et(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(A)}},{"../utils/common":41}],53:[function(r,o,s){o.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,o,s){(function(c){(function(d,f){if(!d.setImmediate){var m,b,k,_,w=1,v={},C=!1,y=d.document,E=Object.getPrototypeOf&&Object.getPrototypeOf(d);E=E&&E.setTimeout?E:d,m={}.toString.call(d.process)==="[object process]"?function(q){process.nextTick(function(){T(q)})}:(function(){if(d.postMessage&&!d.importScripts){var q=!0,K=d.onmessage;return d.onmessage=function(){q=!1},d.postMessage("","*"),d.onmessage=K,q}})()?(_="setImmediate$"+Math.random()+"$",d.addEventListener?d.addEventListener("message",D,!1):d.attachEvent("onmessage",D),function(q){d.postMessage(_+q,"*")}):d.MessageChannel?((k=new MessageChannel).port1.onmessage=function(q){T(q.data)},function(q){k.port2.postMessage(q)}):y&&"onreadystatechange"in y.createElement("script")?(b=y.documentElement,function(q){var K=y.createElement("script");K.onreadystatechange=function(){T(q),K.onreadystatechange=null,b.removeChild(K),K=null},b.appendChild(K)}):function(q){setTimeout(T,0,q)},E.setImmediate=function(q){typeof q!="function"&&(q=new Function(""+q));for(var K=new Array(arguments.length-1),nt=0;nt<K.length;nt++)K[nt]=arguments[nt+1];var X={callback:q,args:K};return v[w]=X,m(w),w++},E.clearImmediate=S}function S(q){delete v[q]}function T(q){if(C)setTimeout(T,0,q);else{var K=v[q];if(K){C=!0;try{(function(nt){var X=nt.callback,ct=nt.args;switch(ct.length){case 0:X();break;case 1:X(ct[0]);break;case 2:X(ct[0],ct[1]);break;case 3:X(ct[0],ct[1],ct[2]);break;default:X.apply(f,ct)}})(K)}finally{S(q),C=!1}}}}function D(q){q.source===d&&typeof q.data=="string"&&q.data.indexOf(_)===0&&T(+q.data.slice(_.length))}})(typeof self>"u"?c===void 0?this:c:self)}).call(this,typeof Pe<"u"?Pe:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Jr)),Jr.exports}var to=Js();const ya=ma(to);var fr={exports:{}},eo=fr.exports,ra;function no(){return ra||(ra=1,(function(l,n){(function(r,o){o()})(eo,function(){function r(b,k){return typeof k>"u"?k={autoBom:!1}:typeof k!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),k={autoBom:!k}),k.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(b.type)?new Blob(["\uFEFF",b],{type:b.type}):b}function o(b,k,_){var w=new XMLHttpRequest;w.open("GET",b),w.responseType="blob",w.onload=function(){m(w.response,k,_)},w.onerror=function(){console.error("could not download file")},w.send()}function s(b){var k=new XMLHttpRequest;k.open("HEAD",b,!1);try{k.send()}catch{}return 200<=k.status&&299>=k.status}function c(b){try{b.dispatchEvent(new MouseEvent("click"))}catch{var k=document.createEvent("MouseEvents");k.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),b.dispatchEvent(k)}}var d=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Pe=="object"&&Pe.global===Pe?Pe:void 0,f=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),m=d.saveAs||(typeof window!="object"||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(b,k,_){var w=d.URL||d.webkitURL,v=document.createElement("a");k=k||b.name||"download",v.download=k,v.rel="noopener",typeof b=="string"?(v.href=b,v.origin===location.origin?c(v):s(v.href)?o(b,k,_):c(v,v.target="_blank")):(v.href=w.createObjectURL(b),setTimeout(function(){w.revokeObjectURL(v.href)},4e4),setTimeout(function(){c(v)},0))}:"msSaveOrOpenBlob"in navigator?function(b,k,_){if(k=k||b.name||"download",typeof b!="string")navigator.msSaveOrOpenBlob(r(b,_),k);else if(s(b))o(b,k,_);else{var w=document.createElement("a");w.href=b,w.target="_blank",setTimeout(function(){c(w)})}}:function(b,k,_,w){if(w=w||open("","_blank"),w&&(w.document.title=w.document.body.innerText="downloading..."),typeof b=="string")return o(b,k,_);var v=b.type==="application/octet-stream",C=/constructor/i.test(d.HTMLElement)||d.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||v&&C||f)&&typeof FileReader<"u"){var E=new FileReader;E.onloadend=function(){var D=E.result;D=y?D:D.replace(/^data:[^;]*;/,"data:attachment/file;"),w?w.location.href=D:location=D,w=null},E.readAsDataURL(b)}else{var S=d.URL||d.webkitURL,T=S.createObjectURL(b);w?w.location=T:location.href=T,w=null,setTimeout(function(){S.revokeObjectURL(T)},4e4)}});d.saveAs=m.saveAs=m,l.exports=m})})(fr)),fr.exports}var ba=no();function ia(l){const n=Math.floor(l/3600),r=Math.floor(l%3600/60),o=Math.floor(l%60),s=Math.floor(l%1*1e3);return`${n.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")},${s.toString().padStart(3,"0")}`}function aa(l){const n=Math.floor(l/3600),r=Math.floor(l%3600/60),o=Math.floor(l%60),s=Math.floor(l%1*1e3);return`${n.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}.${s.toString().padStart(3,"0")}`}function wa(l){return l.map((n,r)=>{const o=r+1,s=ia(n.start),c=ia(n.end),d=n.text;return`${o}
${s} --> ${c}
${d}
`}).join(`
`)}function _a(l){const n=`WEBVTT

`,r=l.map(o=>{const s=aa(o.start),c=aa(o.end),d=o.text;return`${s} --> ${c}
${d}
`}).join(`
`);return n+r}function xa(l){return l.map(n=>{const r=n.start.toFixed(3),o=n.end.toFixed(3);return`[${r}s - ${o}s] ${n.text}`}).join(`
`)}function ka(l,n,r,o,s,c,d){return{id:l,title:n,duration:r,created_at:new Date(o).toISOString(),source:s,full_text:c,segments:d.map(f=>({id:f.id,text:f.text,start:f.start,end:f.end,duration:f.end-f.start}))}}async function Sa(l){return l}async function ro(l){const n=await Ks(l),r=await Rn(l);if(!n)throw new Error("Recording not found");if(!r)throw new Error("No annotations found for this recording");const o=new ya,s=`${n.title}-${l.slice(0,8)}`,c=o.folder(s),d=await Sa(n.audioBlob);c.file(`${l}.wav`,d);const f=ka(n.id,n.title,n.duration,n.createdAt,n.source,r.fullText,r.segments);c.file(`${l}.json`,JSON.stringify(f,null,2));const m=wa(r.segments);c.file(`${l}.srt`,m);const b=_a(r.segments);c.file(`${l}.vtt`,b);const k=xa(r.segments);c.file(`${l}.txt`,k);const _=await o.generateAsync({type:"blob"});ba.saveAs(_,`${s}.zip`)}async function io(){const n=(await va()).filter(f=>f.isAnnotated);if(n.length===0)throw new Error("No annotated recordings to export");const r=new ya,s=`annotations-export-${new Date().toISOString().replace(/[:.]/g,"-")}`,c=r.folder(s);for(const f of n){const m=await Rn(f.id);if(!m)continue;const b=`${f.title}-${f.id.slice(0,8)}`,k=c.folder(b),_=await Sa(f.audioBlob);k.file(`${f.id}.wav`,_);const w=ka(f.id,f.title,f.duration,f.createdAt,f.source,m.fullText,m.segments);k.file(`${f.id}.json`,JSON.stringify(w,null,2));const v=wa(m.segments);k.file(`${f.id}.srt`,v);const C=_a(m.segments);k.file(`${f.id}.vtt`,C);const y=xa(m.segments);k.file(`${f.id}.txt`,y)}const d=await r.generateAsync({type:"blob"});ba.saveAs(d,`${s}.zip`)}class Ca{constructor(n){this.listeners=new Set,this.state=n}getState(){return this.state}subscribe(n){return this.listeners.add(n),()=>{this.listeners.delete(n)}}notify(){this.listeners.forEach(n=>n(this.state))}setState(n){this.state={...this.state,...n},this.notify()}}const Aa="aidio-theme",ao=()=>{try{const l=localStorage.getItem(Aa);if(l==="dark"||l==="pastel")return l}catch(l){console.warn("Failed to read theme from localStorage:",l)}return"dark"},so={currentTheme:ao()};class oo extends Ca{constructor(){super(so)}toggleTheme(){const n=this.state.currentTheme==="dark"?"pastel":"dark";this.setTheme(n)}setTheme(n){this.setState({currentTheme:n});try{localStorage.setItem(Aa,n)}catch(r){console.warn("Failed to save theme to localStorage:",r)}}getCurrentTheme(){return this.state.currentTheme}}const zn=new oo,lo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,co=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var uo=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,Ea=(l,n,r,o)=>{for(var s=o>1?void 0:o?ho(n,r):n,c=l.length-1,d;c>=0;c--)(d=l[c])&&(s=(o?d(n,r,s):d(s))||s);return o&&s&&uo(n,r,s),s};let vr=class extends ge{constructor(){super(...arguments),this.currentTheme=zn.getCurrentTheme()}connectedCallback(){super.connectedCallback(),this.unsubscribe=zn.subscribe(l=>{this.currentTheme=l.currentTheme})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}handleToggle(){zn.toggleTheme()}render(){const l=this.currentTheme==="dark"?lo:co,n=this.currentTheme==="dark"?"Switch to Pastel Theme":"Switch to Dark Theme";return Ft`
      <button
        class="theme-toggle-btn"
        @click=${this.handleToggle}
        title=${n}
        aria-label=${n}
      >
        <span class="theme-icon">${Wt(l)}</span>
      </button>
    `}};vr.styles=$e`
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
  `;Ea([ne()],vr.prototype,"currentTheme",2);vr=Ea([Ie("theme-toggle")],vr);function gn(l,n){if(l.length===0)return{overallConfidence:0,wordAlignmentRate:0,gaps:[{start:0,end:n,duration:n}],overlaps:[],confidenceDistribution:{high:0,medium:0,low:0}};const r=[...l].sort((w,v)=>w.start-v.start),o=[];for(let w=0;w<r.length;w++){const v=r[w].end,C=w<r.length-1?r[w+1].start:n;C>v&&o.push({start:v,end:C,duration:C-v})}r[0].start>0&&o.unshift({start:0,end:r[0].start,duration:r[0].start});const s=[];for(let w=0;w<r.length-1;w++){const v=r[w],C=r[w+1];v.end>C.start&&s.push({segment1Id:v.id,segment2Id:C.id,start:C.start,end:v.end,duration:v.end-C.start})}const c=l.flatMap(w=>w.words),d=c.length,f=c.filter(w=>w.start>0||w.end>0).length,m=d>0?f/d:0,b=c.map(w=>w.confidence).filter(w=>w>0),k=b.length>0?b.reduce((w,v)=>w+v,0)/b.length:0,_={high:b.filter(w=>w>.9).length,medium:b.filter(w=>w>=.7&&w<=.9).length,low:b.filter(w=>w<.7).length};return{overallConfidence:k,wordAlignmentRate:m,gaps:o,overlaps:s,confidenceDistribution:_}}function vn(l){const n=l.segments.sort((r,o)=>r.start-o.start).map(r=>r.text).join(" ");return{...l,fullText:n,updatedAt:Date.now()}}const sa={currentAnnotation:null,timelineViewport:{start:0,end:10,pixelsPerSecond:100},selectedSegmentId:null,playbackCursor:0,editMode:"select",isPlaying:!1,history:{undoStack:[],redoStack:[]},showWordMarkers:!1,highlightLowConfidence:!0};class fo extends Ca{constructor(){super(sa),this.MAX_HISTORY=50}loadAnnotation(n){this.setState({currentAnnotation:n,timelineViewport:{start:0,end:Math.min(n.duration,10),pixelsPerSecond:100},selectedSegmentId:null,playbackCursor:0,history:{undoStack:[],redoStack:[]}})}addSegment(n,r,o=""){const s=this.state.currentAnnotation;if(!s)return;const c={id:crypto.randomUUID(),start:n,end:r,text:o,source:"manual",confidence:1,words:[]};this.pushHistory();const d={...s,segments:[...s.segments,c],updatedAt:Date.now()},f={...d,alignmentQuality:gn(d.segments,d.duration)};this.setState({currentAnnotation:vn(f),selectedSegmentId:c.id})}updateSegmentText(n,r){const o=this.state.currentAnnotation;if(!o)return;this.pushHistory();const s=o.segments.map(d=>d.id===n?{...d,text:r}:d),c={...o,segments:s,updatedAt:Date.now()};this.setState({currentAnnotation:vn(c)})}updateSegmentBoundary(n,r,o,s=!1){const c=this.state.currentAnnotation;if(!c)return;const d=c.segments.find(y=>y.id===n);if(!d)return;const f=[...c.segments].sort((y,E)=>y.start-E.start),m=f.findIndex(y=>y.id===n),b=m>0?f[m-1]:null,k=m<f.length-1?f[m+1]:null;let _=o;if(r==="start"){const y=b?b.end:0,E=d.end-.1;_=Math.max(y,Math.min(_,E))}else{const y=d.start+.1,E=k?k.start:c.duration;_=Math.max(y,Math.min(_,E))}const w=c.segments.map(y=>y.id!==n?y:r==="start"?{...y,start:_}:{...y,end:_}),v={...c,segments:w,updatedAt:Date.now()},C=s?v:{...v,alignmentQuality:gn(v.segments,v.duration)};this.setState({currentAnnotation:C})}deleteSegment(n){const r=this.state.currentAnnotation;if(!r)return;this.pushHistory();const o=r.segments.filter(d=>d.id!==n),s={...r,segments:o,updatedAt:Date.now()},c={...s,alignmentQuality:gn(s.segments,s.duration)};this.setState({currentAnnotation:vn(c),selectedSegmentId:null})}splitSegment(n,r){const o=this.state.currentAnnotation;if(!o)return;const s=o.segments.find(k=>k.id===n);if(!s||r<=s.start||r>=s.end)return;this.pushHistory();const c={...s,id:crypto.randomUUID(),end:r,words:s.words.filter(k=>k.end<=r)},d={...s,id:crypto.randomUUID(),start:r,words:s.words.filter(k=>k.start>=r)},f=o.segments.filter(k=>k.id!==n).concat([c,d]),m={...o,segments:f,updatedAt:Date.now()},b={...m,alignmentQuality:gn(m.segments,m.duration)};this.setState({currentAnnotation:vn(b),selectedSegmentId:c.id})}mergeSegments(n){const r=this.state.currentAnnotation;if(!r||n.length<2)return;this.pushHistory();const o=r.segments.filter(b=>n.includes(b.id));if(o.length<2)return;const s=o.sort((b,k)=>b.start-k.start),c={id:crypto.randomUUID(),start:s[0].start,end:s[s.length-1].end,text:s.map(b=>b.text).join(" "),source:"manual",confidence:s.reduce((b,k)=>b+k.confidence,0)/s.length,words:s.flatMap(b=>b.words)},d=r.segments.filter(b=>!n.includes(b.id)).concat([c]),f={...r,segments:d,updatedAt:Date.now()},m={...f,alignmentQuality:gn(f.segments,f.duration)};this.setState({currentAnnotation:vn(m),selectedSegmentId:c.id})}selectSegment(n){this.setState({selectedSegmentId:n})}setEditMode(n){this.setState({editMode:n})}updatePlaybackCursor(n){this.setState({playbackCursor:n})}setPlaying(n){this.setState({isPlaying:n})}zoom(n){const{timelineViewport:r}=this.state,o=(r.start+r.end)/2,s=Math.max(10,Math.min(1e3,r.pixelsPerSecond*n)),c=(r.end-r.start)/n,d=Math.max(0,o-c/2),f=d+c;this.setState({timelineViewport:{start:d,end:f,pixelsPerSecond:s},showWordMarkers:s>200})}pan(n){const r=this.state.currentAnnotation;if(!r)return;const{timelineViewport:o}=this.state,s=o.end-o.start;let c=o.start+n;c=Math.max(0,Math.min(c,r.duration-s)),this.setState({timelineViewport:{...o,start:c,end:c+s}})}setViewportPosition(n){const r=this.state.currentAnnotation;if(!r)return;const{timelineViewport:o}=this.state,s=o.end-o.start,c=Math.max(0,Math.min(n,r.duration-s));this.setState({timelineViewport:{...o,start:c,end:c+s}})}toggleLowConfidenceHighlight(){this.setState({highlightLowConfidence:!this.state.highlightLowConfidence})}advanceToNextGap(n=3){const r=this.state.currentAnnotation;if(!r)return;const o=[...r.segments].sort((w,v)=>w.start-v.start);let s=0,c=r.duration;if(o.length===0)s=0,c=Math.min(n,r.duration);else{let w=0;if(this.state.selectedSegmentId){const C=o.find(y=>y.id===this.state.selectedSegmentId);C&&(w=C.end)}let v=!1;if(w===0&&o[0].start>.1&&(s=0,c=Math.min(o[0].start,n),v=!0),!v)for(let C=0;C<o.length-1;C++){const y=o[C],E=o[C+1];if(y.end>=w&&E.start-y.end>.1){s=y.end,c=Math.min(s+n,E.start),v=!0;break}}if(!v){const C=o[o.length-1];C.end<r.duration-.1&&(s=C.end,c=Math.min(s+n,r.duration),v=!0)}if(!v)return}const d={id:crypto.randomUUID(),start:s,end:c,text:"",source:"manual",confidence:1,words:[]};this.pushHistory();const f={...r,segments:[...r.segments,d],updatedAt:Date.now()},m={...f,alignmentQuality:gn(f.segments,f.duration)},b=(s+c)/2,k=this.state.timelineViewport.end-this.state.timelineViewport.start,_=Math.max(0,b-k/2);this.setState({currentAnnotation:vn(m),selectedSegmentId:d.id,timelineViewport:{...this.state.timelineViewport,start:_,end:_+k}})}centerOnSelectedSegment(){const{currentAnnotation:n,selectedSegmentId:r,timelineViewport:o}=this.state;if(!n||!r)return;const s=n.segments.find(m=>m.id===r);if(!s)return;const c=(s.start+s.end)/2,d=o.end-o.start,f=Math.max(0,Math.min(c-d/2,n.duration-d));this.setState({timelineViewport:{...o,start:f,end:f+d}})}undo(){const{undoStack:n,redoStack:r}=this.state.history;if(n.length===0)return;const o=n[n.length-1],s={annotation:this.state.currentAnnotation,selectedSegmentId:this.state.selectedSegmentId};this.setState({currentAnnotation:o.annotation,selectedSegmentId:o.selectedSegmentId,history:{undoStack:n.slice(0,-1),redoStack:[...r,s]}})}redo(){const{undoStack:n,redoStack:r}=this.state.history;if(r.length===0)return;const o=r[r.length-1],s={annotation:this.state.currentAnnotation,selectedSegmentId:this.state.selectedSegmentId};this.setState({currentAnnotation:o.annotation,selectedSegmentId:o.selectedSegmentId,history:{undoStack:[...n,s],redoStack:r.slice(0,-1)}})}pushHistory(){if(!this.state.currentAnnotation)return;const n={annotation:this.state.currentAnnotation,selectedSegmentId:this.state.selectedSegmentId},r=[...this.state.history.undoStack,n];r.length>this.MAX_HISTORY&&r.shift(),this.setState({history:{undoStack:r,redoStack:[]}})}reset(){this.state=sa,this.notify()}}const It=new fo,ci=[{id:"pan-left",description:"Pan timeline left (1 second)",keys:{mac:["ArrowLeft"],windows:["ArrowLeft"],linux:["ArrowLeft"]},browserSafe:!0,category:"navigation"},{id:"pan-right",description:"Pan timeline right (1 second)",keys:{mac:["ArrowRight"],windows:["ArrowRight"],linux:["ArrowRight"]},browserSafe:!0,category:"navigation"},{id:"jump-next-segment",description:"Jump to next segment",keys:{mac:["Tab"],windows:["Tab"],linux:["Tab"]},browserSafe:!0,category:"navigation"},{id:"jump-prev-segment",description:"Jump to previous segment",keys:{mac:["Shift","Tab"],windows:["Shift","Tab"],linux:["Shift","Tab"]},browserSafe:!0,category:"navigation"},{id:"jump-start",description:"Jump to start of audio",keys:{mac:["Home"],windows:["Home"],linux:["Home"]},browserSafe:!0,category:"navigation"},{id:"jump-end",description:"Jump to end of audio",keys:{mac:["End"],windows:["End"],linux:["End"]},browserSafe:!0,category:"navigation"},{id:"play-pause",description:"Play/pause looped segment",keys:{mac:["Space"],windows:["Space"],linux:["Space"]},browserSafe:!0,category:"playback"},{id:"extend-segment",description:"Extend right clamp forward (0.1s)",keys:{mac:["]"],windows:["]"],linux:["]"]},browserSafe:!0,category:"editing"},{id:"shrink-segment",description:"Shrink right clamp backward (0.1s)",keys:{mac:["["],windows:["["],linux:["["]},browserSafe:!0,category:"editing"},{id:"snap-word-forward",description:"Snap right clamp to next word boundary",keys:{mac:["Shift","]"],windows:["Shift","]"],linux:["Shift","]"]},browserSafe:!0,category:"editing"},{id:"snap-word-backward",description:"Snap right clamp to previous word boundary",keys:{mac:["Shift","["],windows:["Shift","["],linux:["Shift","["]},browserSafe:!0,category:"editing"},{id:"confirm-segment",description:"Confirm segment and advance",keys:{mac:["Enter"],windows:["Enter"],linux:["Enter"]},browserSafe:!0,category:"editing"},{id:"delete-segment",description:"Delete current segment",keys:{mac:["Backspace"],windows:["Backspace"],linux:["Backspace"]},browserSafe:!0,category:"editing"},{id:"zoom-in",description:"Zoom in",keys:{mac:["+"],windows:["+"],linux:["+"]},browserSafe:!0,category:"zoom"},{id:"zoom-out",description:"Zoom out",keys:{mac:["-"],windows:["-"],linux:["-"]},browserSafe:!0,category:"zoom"},{id:"zoom-reset",description:"Reset zoom to default",keys:{mac:["0"],windows:["0"],linux:["0"]},browserSafe:!0,category:"zoom"},{id:"zoom-preset-1",description:"Set zoom to overview (1x)",keys:{mac:["1"],windows:["1"],linux:["1"]},browserSafe:!0,category:"zoom"},{id:"zoom-preset-2",description:"Set zoom to medium (2x)",keys:{mac:["2"],windows:["2"],linux:["2"]},browserSafe:!0,category:"zoom"},{id:"zoom-preset-3",description:"Set zoom to detail (3x)",keys:{mac:["3"],windows:["3"],linux:["3"]},browserSafe:!0,category:"zoom"},{id:"toggle-minimap",description:"Toggle minimap visibility",keys:{mac:["M"],windows:["M"],linux:["M"]},browserSafe:!0,category:"view"},{id:"move-text-forward-word",description:"Move text cursor forward (word mode)",keys:{mac:["Alt","ArrowRight"],windows:["Alt","ArrowRight"],linux:["Alt","ArrowRight"]},browserSafe:!0,category:"editing"},{id:"move-text-backward-word",description:"Move text cursor backward (word mode)",keys:{mac:["Alt","ArrowLeft"],windows:["Alt","ArrowLeft"],linux:["Alt","ArrowLeft"]},browserSafe:!0,category:"editing"},{id:"move-text-forward-char",description:"Move text cursor forward (character mode)",keys:{mac:["Alt","Shift","ArrowRight"],windows:["Alt","Shift","ArrowRight"],linux:["Alt","Shift","ArrowRight"]},browserSafe:!0,category:"editing"},{id:"move-text-backward-char",description:"Move text cursor backward (character mode)",keys:{mac:["Alt","Shift","ArrowLeft"],windows:["Alt","Shift","ArrowLeft"],linux:["Alt","Shift","ArrowLeft"]},browserSafe:!0,category:"editing"},{id:"transcribe-segment",description:"Transcribe current segment with AI",keys:{mac:["Cmd","Shift","T"],windows:["Ctrl","Shift","T"],linux:["Ctrl","Shift","T"]},browserSafe:!0,category:"editing"},{id:"save-progress",description:"Save current progress",keys:{mac:["Cmd","S"],windows:["Ctrl","S"],linux:["Ctrl","S"]},browserSafe:!0,category:"editing"},{id:"split-segment",description:"Split segment at playhead position",keys:{mac:["Cmd","Shift","S"],windows:["Ctrl","Shift","S"],linux:["Ctrl","Shift","S"]},browserSafe:!0,category:"editing"},{id:"merge-segments",description:"Merge selected segment with next",keys:{mac:["Cmd","Shift","M"],windows:["Ctrl","Shift","M"],linux:["Ctrl","Shift","M"]},browserSafe:!0,category:"editing"},{id:"undo",description:"Undo last action",keys:{mac:["Cmd","Z"],windows:["Ctrl","Z"],linux:["Ctrl","Z"]},browserSafe:!0,category:"editing"},{id:"redo",description:"Redo last undone action",keys:{mac:["Cmd","Shift","Z"],windows:["Ctrl","Y"],linux:["Ctrl","Y"]},browserSafe:!0,category:"editing"}];function ni(l,n){const r=ci.find(o=>o.id===l);if(r)switch(n){case"mac":return r.keys.mac;case"windows":return r.keys.windows;case"linux":return r.keys.linux;default:return r.keys.windows}}function po(l,n){const r=ni(l,n);return r?r.map(o=>{if(n==="mac")switch(o){case"Cmd":return"⌘";case"Shift":return"⇧";case"Alt":return"⌥";case"Ctrl":return"⌃";default:return o}return o}).join("+"):""}function mo(){const l=navigator.userAgent.toLowerCase(),n=navigator.platform?.toLowerCase()||"";return n.includes("mac")||l.includes("mac")?"mac":n.includes("win")||l.includes("win")?"windows":n.includes("linux")||l.includes("linux")?"linux":"unknown"}function oa(l){return{" ":"Space","+":"Plus","-":"Minus","=":"Equal"}[l]||l}function go(l,n){const r=l.metaKey,o=l.ctrlKey,s=l.shiftKey,c=l.altKey,d=oa(l.key),f={Cmd:!1,Ctrl:!1,Shift:!1,Alt:!1};let m=null;for(const k of n)k==="Cmd"?f.Cmd=!0:k==="Ctrl"?f.Ctrl=!0:k==="Shift"?f.Shift=!0:k==="Alt"?f.Alt=!0:m=oa(k);return m!==null&&d!==m?!1:(f.Cmd?r:!r)&&(f.Ctrl?o:!o)&&(f.Shift?s:!s)&&(f.Alt?c:!c)}class vo{constructor(){this.registrations=new Map,this.isEnabled=!0,this.isStarted=!1,this.platform=mo(),this.boundHandler=this.handleKeyDown.bind(this)}getPlatform(){return this.platform}register(n,r){const o=ci.find(s=>s.id===n);if(!o){console.warn(`[KeyboardManager] Unknown shortcut ID: ${n}`);return}if(!o.browserSafe){console.warn(`[KeyboardManager] Shortcut "${n}" is not browser-safe and will not be registered`);return}this.registrations.set(n,{id:n,handler:r,definition:o})}unregister(n){this.registrations.delete(n)}start(n=window){this.isStarted||(n.addEventListener("keydown",this.boundHandler),this.isStarted=!0)}stop(n=window){this.isStarted&&(n.removeEventListener("keydown",this.boundHandler),this.isStarted=!1)}setEnabled(n){this.isEnabled=n}handleKeyDown(n){if(!this.isEnabled)return;const r=n.target,o=r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.isContentEditable,s=["save-progress","transcribe-segment"];for(const[c,d]of this.registrations.entries()){const f=ni(c,this.platform);if(f&&go(n,f)){if(o&&!s.includes(c))continue;n.preventDefault(),n.stopPropagation();try{const m=d.handler(n);m instanceof Promise&&m.catch(b=>{console.error(`[KeyboardManager] Error in shortcut handler "${c}":`,b)})}catch(m){console.error(`[KeyboardManager] Error in shortcut handler "${c}":`,m)}break}}}getRegisteredShortcuts(){return Array.from(this.registrations.values())}getShortcutsByCategory(n){return Array.from(this.registrations.values()).filter(r=>r.definition.category===n)}getFormattedShortcut(n){const r=ni(n,this.platform);return r?r.map(o=>{if(this.platform==="mac")switch(o){case"Cmd":return"⌘";case"Shift":return"⇧";case"Alt":return"⌥";case"Ctrl":return"⌃";default:return o}return o}).join(this.platform==="mac"?"":"+"):""}destroy(n=window){this.stop(n),this.registrations.clear()}}const Jt=new vo;class yo{constructor(){this.audioBuffer=null,this.markers={left:0,right:0},this.viewport={offsetSeconds:0,pixelsPerSecond:100}}initialize(n,r){this.canvas=n,this.config=r;const o=n.getContext("2d");if(!o)throw new Error("Failed to get 2D rendering context");this.ctx=o,this.updateCanvasDimensions()}setAudioData(n){this.audioBuffer=n,this.render()}setMarkers(n){this.markers=n,this.render()}setViewport(n){this.viewport=n,this.render()}updateConfig(n){this.config={...this.config,...n},this.updateCanvasDimensions(),this.render()}pixelToTime(n){return this.viewport.offsetSeconds+n/this.viewport.pixelsPerSecond}timeToPixel(n){return(n-this.viewport.offsetSeconds)*this.viewport.pixelsPerSecond}updateCanvasDimensions(){this.canvas.width=this.config.width,this.canvas.height=this.config.height}clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}destroy(){this.audioBuffer=null,this.canvas=null,this.ctx=null}}class Oa extends yo{constructor(){super(...arguments),this.waveformData=null}getMetadata(){return{id:"waveform",name:"Waveform",description:"Classic amplitude waveform visualization with gradient coloring",author:"AIdio",version:"1.0.0",performanceProfile:"high",supportsRealtime:!0}}setAudioData(n){super.setAudioData(n),this.waveformData=this.generateWaveformData(n)}generateWaveformData(n){const r=n.getChannelData(0),o=this.config.maxSamplesPerPixel||1e3,s=Math.min(r.length,this.config.width*o),c=Math.floor(r.length/s),d=new Float32Array(s);for(let f=0;f<s;f++){const m=c*f;let b=0;for(let k=0;k<c;k++){const _=Math.abs(r[m+k]||0);_>b&&(b=_)}d[f]=b}return d}render(){if(!this.audioBuffer||!this.waveformData){this.clearCanvas(),this.renderEmptyState();return}this.clearCanvas();const n=this.canvas.width,r=this.canvas.height,o=r/2,s=getComputedStyle(document.documentElement),c=s.getPropertyValue("--waveform-gradient-start").trim(),d=s.getPropertyValue("--waveform-gradient-mid").trim(),f=s.getPropertyValue("--waveform-gradient-end").trim(),m=this.audioBuffer.duration,b=this.viewport.offsetSeconds,k=b+n/this.viewport.pixelsPerSecond,_=Math.floor(b/m*this.waveformData.length),w=Math.ceil(k/m*this.waveformData.length),v=this.waveformData.slice(_,w);this.markers.protected!==void 0&&this.renderProtectedRegion(),this.renderActiveSegment();const C=this.ctx.createLinearGradient(0,0,0,r);C.addColorStop(0,c),C.addColorStop(.5,d),C.addColorStop(1,f),this.ctx.fillStyle=C,this.ctx.beginPath();const y=n/v.length,E=Math.max(1,y*.1);for(let S=0;S<v.length;S++){const D=v[S]*(r/2)*.9,q=S*y,K=o-D/2;this.ctx.fillRect(q,K,y-E,D)}this.renderMarkers()}renderProtectedRegion(){if(this.markers.protected===void 0)return;const n=this.timeToPixel(this.markers.protected);n>0&&(this.ctx.fillStyle="rgba(0, 255, 0, 0.05)",this.ctx.fillRect(0,0,n,this.canvas.height),this.ctx.strokeStyle="rgba(0, 255, 0, 0.2)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(n,0),this.ctx.lineTo(n,this.canvas.height),this.ctx.stroke())}renderActiveSegment(){const n=this.timeToPixel(this.markers.left),o=this.timeToPixel(this.markers.right)-n;o>0&&(this.ctx.fillStyle="rgba(255, 107, 107, 0.1)",this.ctx.fillRect(n,0,o,this.canvas.height))}renderMarkers(){const n=this.timeToPixel(this.markers.left),r=this.timeToPixel(this.markers.right);this.renderMarker(n,"#6BCF7F","◀",!0),this.renderMarker(r,"#FF6B6B","▶",!1)}renderMarker(n,r,o,s){const c=this.canvas.height;this.ctx.strokeStyle=r,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(n,0),this.ctx.lineTo(n,c),this.ctx.stroke();const d=20;this.ctx.fillStyle=r,this.ctx.fillRect(n-d/2,c/2-d/2,d,d),this.ctx.fillStyle="#fff",this.ctx.font="12px monospace",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(o,n,c/2),s&&(this.ctx.fillStyle=r,this.ctx.font="10px sans-serif",this.ctx.fillText("PROTECTED",n,c/2+20))}renderEmptyState(){this.ctx.fillStyle="#666",this.ctx.font="14px sans-serif",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText("No audio loaded",this.canvas.width/2,this.canvas.height/2)}}const Pa=new Map;function bo(l,n){Pa.set(l,n)}function wo(l="waveform"){const n=Pa.get(l);return n?new n:(console.warn(`[VisualizerFactory] Unknown visualizer type: ${l}, falling back to waveform`),new Oa)}bo("waveform",Oa);const Ta=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,_o=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,xo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var ko=Object.defineProperty,So=Object.getOwnPropertyDescriptor,Se=(l,n,r,o)=>{for(var s=o>1?void 0:o?So(n,r):n,c=l.length-1,d;c>=0;c--)(d=l[c])&&(s=(o?d(n,r,s):d(s))||s);return o&&s&&ko(n,r,s),s};let we=class extends ge{constructor(){super(...arguments),this.audioBlob=null,this.leftClamp=0,this.rightClamp=3,this.isPlaying=!1,this.loopEnabled=!1,this.currentTime=0,this.duration=0,this.draggingMarker=null,this.timelineState=It.getState(),this.visualizer=null,this.audioContext=null,this.audioBuffer=null,this.audioSource=null,this.animationFrameId=null,this.rafId=null,this.playStartTime=0,this.playStartOffset=0,this.unsubscribe=null,this.handleCanvasMouseDown=l=>{if(!this.visualizer||!this.canvas)return;const n=this.canvas.getBoundingClientRect(),r=l.clientX-n.left,o=this.visualizer.timeToPixel(this.leftClamp),s=this.visualizer.timeToPixel(this.rightClamp),c=10;Math.abs(r-o)<c?(this.draggingMarker="left",l.preventDefault()):Math.abs(r-s)<c&&(this.draggingMarker="right",l.preventDefault())},this.handleCanvasMouseMove=l=>{if(!this.draggingMarker||!this.visualizer||!this.canvas)return;const n=this.canvas.getBoundingClientRect(),r=l.clientX-n.left,o=this.visualizer.pixelToTime(r);this.draggingMarker==="left"?this.leftClamp=Math.max(0,Math.min(o,this.rightClamp-.1)):this.rightClamp=Math.min(this.duration,Math.max(o,this.leftClamp+.1)),this.updateVisualizerMarkers(),this.scheduleRender()},this.handleCanvasMouseUp=()=>{if(!this.draggingMarker)return;this.draggingMarker=null;const{selectedSegmentId:l}=It.getState();l&&(It.updateSegmentBoundary(l,"start",this.leftClamp),It.updateSegmentBoundary(l,"end",this.rightClamp))}}connectedCallback(){super.connectedCallback(),this.unsubscribe=It.subscribe(l=>{this.timelineState=l,this.updateVisualizerViewport()})}async firstUpdated(){if(this.canvas){this.visualizer=wo("waveform");const l=this.canvas.getBoundingClientRect();this.visualizer.initialize(this.canvas,{width:l.width,height:l.height,renderQuality:"high",colorScheme:"default"})}this.audioBlob&&await this.loadAudio()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup(),this.unsubscribe?.(),this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}scheduleRender(){this.rafId||(this.rafId=requestAnimationFrame(()=>{this.visualizer?.render(),this.rafId=null}))}async loadAudio(){if(!(!this.audioBlob||!this.visualizer))try{this.audioContext=new AudioContext;const l=await this.audioBlob.arrayBuffer();this.audioBuffer=await this.audioContext.decodeAudioData(l),this.duration=this.audioBuffer.duration,this.rightClamp=Math.min(3,this.duration),this.visualizer.setAudioData(this.audioBuffer);const{timelineViewport:n}=this.timelineState;this.visualizer.setViewport({offsetSeconds:n.start,pixelsPerSecond:n.pixelsPerSecond}),this.updateVisualizerMarkers(),this.visualizer.render(),this.dispatchEvent(new CustomEvent("duration-loaded",{detail:{duration:this.duration},bubbles:!0,composed:!0}))}catch(l){console.error("Failed to load audio:",l)}}updateVisualizerMarkers(){this.visualizer&&this.visualizer.setMarkers({left:this.leftClamp,right:this.rightClamp})}togglePlayback(){this.isPlaying?this.pause():this.play()}getCurrentTime(){return this.currentTime}handlePlay(){this.togglePlayback()}async play(){if(!this.audioContext||!this.audioBuffer)return;this.audioContext.state==="suspended"&&await this.audioContext.resume(),this.stopAudioSource(),this.audioSource=this.audioContext.createBufferSource(),this.audioSource.buffer=this.audioBuffer,this.audioSource.connect(this.audioContext.destination);const l=this.leftClamp,r=this.rightClamp-l;this.audioSource.start(0,l,r),this.isPlaying=!0,this.playStartTime=this.audioContext.currentTime,this.playStartOffset=l,this.audioSource.onended=()=>{this.loopEnabled&&this.isPlaying?this.play():this.pause()},this.startAnimationLoop()}pause(){this.stopAudioSource(),this.isPlaying=!1,this.stopAnimationLoop(),this.visualizer?.render()}stopAudioSource(){if(this.audioSource){try{this.audioSource.stop()}catch{}this.audioSource.disconnect(),this.audioSource=null}}startAnimationLoop(){const l=()=>{if(!this.isPlaying||!this.audioContext)return;const n=this.audioContext.currentTime-this.playStartTime;this.currentTime=this.playStartOffset+n,this.currentTime>=this.rightClamp&&(this.currentTime=this.rightClamp),this.visualizer?.render(),this.animationFrameId=requestAnimationFrame(l)};this.animationFrameId=requestAnimationFrame(l)}stopAnimationLoop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}toggleLoop(){this.loopEnabled=!this.loopEnabled}dispatchMarkerChange(){this.dispatchEvent(new CustomEvent("markers-changed",{detail:{start:this.leftClamp,end:this.rightClamp,duration:this.rightClamp-this.leftClamp},bubbles:!0,composed:!0}))}panLeft(){It.pan(-1),this.updateVisualizerViewport()}panRight(){It.pan(1),this.updateVisualizerViewport()}zoomIn(){It.zoom(1.5),this.updateVisualizerViewport()}zoomOut(){It.zoom(1/1.5),this.updateVisualizerViewport()}centerSegment(){It.centerOnSelectedSegment(),this.updateVisualizerViewport()}updateVisualizerViewport(){if(!this.visualizer)return;const{timelineViewport:l}=this.timelineState;this.visualizer.setViewport({offsetSeconds:l.start,pixelsPerSecond:l.pixelsPerSecond}),this.scheduleRender()}formatTime(l){const n=Math.floor(l/60),r=(l%60).toFixed(2);return`${n}:${r.padStart(5,"0")}`}cleanup(){this.pause(),this.visualizer?.destroy(),this.audioContext?.close(),this.audioContext=null,this.audioBuffer=null,this.visualizer=null}render(){return Ft`
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
              ${this.isPlaying?Wt(_o):Wt(Ta)}
              <span>${this.isPlaying?"Pause":"Play"}</span>
            </button>

            <button
              class="control-btn ${this.loopEnabled?"active":""}"
              @click=${this.toggleLoop}
            >
              ${Wt(xo)}
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
    `}};we.styles=$e`
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
  `;Se([se({type:Object})],we.prototype,"audioBlob",2);Se([se({type:Number})],we.prototype,"leftClamp",2);Se([se({type:Number})],we.prototype,"rightClamp",2);Se([ne()],we.prototype,"isPlaying",2);Se([ne()],we.prototype,"loopEnabled",2);Se([ne()],we.prototype,"duration",2);Se([ne()],we.prototype,"draggingMarker",2);Se([ne()],we.prototype,"timelineState",2);Se([_r("canvas")],we.prototype,"canvas",2);we=Se([Ie("audio-waveform-player")],we);var Co=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,an=(l,n,r,o)=>{for(var s=o>1?void 0:o?Ao(n,r):n,c=l.length-1,d;c>=0;c--)(d=l[c])&&(s=(o?d(n,r,s):d(s))||s);return o&&s&&Co(n,r,s),s};let Te=class extends ge{constructor(){super(...arguments),this.audioBuffer=null,this.segments=[],this.viewportOffset=0,this.viewportDuration=10,this.isDragging=!1,this.animationId=null,this.resizeObserver=null,this.handleMouseDown=l=>{this.isDragging=!0,this.updateViewportFromClick(l)},this.handleMouseMove=l=>{this.isDragging&&this.updateViewportFromClick(l)},this.handleMouseUp=()=>{this.isDragging=!1}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}firstUpdated(){this.setupCanvas(),this.setupInteraction(),this.setupResizeObserver()}updated(l){(l.has("audioBuffer")||l.has("segments")||l.has("viewportOffset")||l.has("viewportDuration"))&&this.render2D()}setupCanvas(){if(!this.canvas)return;const l=window.devicePixelRatio||1,n=this.canvas.clientWidth,r=this.canvas.clientHeight;this.canvas.width=n*l,this.canvas.height=r*l;const o=this.canvas.getContext("2d");o&&o.scale(l,l)}setupInteraction(){this.canvas&&(this.canvas.addEventListener("mousedown",this.handleMouseDown),this.canvas.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("mouseup",this.handleMouseUp),this.canvas.addEventListener("mouseleave",this.handleMouseUp))}setupResizeObserver(){this.canvas&&(this.resizeObserver=new ResizeObserver(()=>{this.setupCanvas(),this.render2D()}),this.resizeObserver.observe(this.canvas))}updateViewportFromClick(l){if(!this.audioBuffer)return;const n=this.canvas.getBoundingClientRect(),r=l.clientX-n.left,o=this.audioBuffer.duration,c=r/n.width*o,d=Math.max(0,Math.min(c-this.viewportDuration/2,o-this.viewportDuration));this.dispatchEvent(new CustomEvent("viewport-change",{bubbles:!0,composed:!0,detail:{offsetSeconds:d}}))}render2D(){if(!this.canvas)return;const l=this.canvas.getContext("2d");if(!l||!this.audioBuffer)return;const n=this.canvas.clientWidth,r=this.canvas.clientHeight;l.clearRect(0,0,n,r),this.drawWaveform(l,n,r),this.drawSegments(l,n,r),this.drawViewport(l,n,r)}drawWaveform(l,n,r){if(!this.audioBuffer)return;const o=this.audioBuffer.getChannelData(0),s=Math.floor(o.length/n);l.beginPath(),l.strokeStyle=getComputedStyle(this.canvas).getPropertyValue("--text-tertiary").trim(),l.lineWidth=1;for(let c=0;c<n;c++){const d=c*s,f=d+s;let m=0;for(let _=d;_<f&&_<o.length;_++){const w=Math.abs(o[_]);w>m&&(m=w)}const b=r/2,k=m*(r/2)*.8;c===0?l.moveTo(c,b-k):l.lineTo(c,b-k)}l.stroke(),l.beginPath(),l.strokeStyle=getComputedStyle(this.canvas).getPropertyValue("--border-subtle").trim(),l.lineWidth=1,l.moveTo(0,r/2),l.lineTo(n,r/2),l.stroke()}drawSegments(l,n,r){if(!this.audioBuffer||!this.segments.length)return;const o=this.audioBuffer.duration,s=getComputedStyle(this.canvas).getPropertyValue("--color-accent-primary").trim();this.segments.forEach(c=>{const d=c.start/o*n,m=c.end/o*n-d;l.fillStyle=s+"40",l.fillRect(d,0,m,r),l.strokeStyle=s,l.lineWidth=1,l.strokeRect(d,0,m,r)})}drawViewport(l,n,r){if(!this.audioBuffer)return;const o=this.audioBuffer.duration,s=this.viewportOffset/o*n,d=(this.viewportOffset+this.viewportDuration)/o*n-s;l.fillStyle=getComputedStyle(this.canvas).getPropertyValue("--color-signal-active").trim()+"20",l.fillRect(s,0,d,r),l.strokeStyle=getComputedStyle(this.canvas).getPropertyValue("--color-signal-active").trim(),l.lineWidth=2,l.strokeRect(s,0,d,r)}cleanup(){this.animationId!==null&&cancelAnimationFrame(this.animationId),this.resizeObserver&&this.resizeObserver.disconnect(),this.canvas?.removeEventListener("mousedown",this.handleMouseDown),this.canvas?.removeEventListener("mousemove",this.handleMouseMove),this.canvas?.removeEventListener("mouseup",this.handleMouseUp),this.canvas?.removeEventListener("mouseleave",this.handleMouseUp)}render(){return this.audioBuffer?Ft`<canvas></canvas>`:Ft`<div class="loading">No audio loaded</div>`}};Te.styles=$e`
    :host {
      display: block;
      width: 100%;
      height: 64px;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      position: relative;
      overflow: hidden;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    canvas:active {
      cursor: grabbing;
    }

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }
  `;an([se({type:Object})],Te.prototype,"audioBuffer",2);an([se({type:Array})],Te.prototype,"segments",2);an([se({type:Number})],Te.prototype,"viewportOffset",2);an([se({type:Number})],Te.prototype,"viewportDuration",2);an([ne()],Te.prototype,"isDragging",2);an([_r("canvas")],Te.prototype,"canvas",2);Te=an([Ie("timeline-minimap")],Te);var Eo=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,wn=(l,n,r,o)=>{for(var s=o>1?void 0:o?Oo(n,r):n,c=l.length-1,d;c>=0;c--)(d=l[c])&&(s=(o?d(n,r,s):d(s))||s);return o&&s&&Eo(n,r,s),s};let qe=class extends ge{constructor(){super(...arguments),this.isFocused=!1,this.isEditing=!1,this.internalText="",this.handleTextInput=l=>{const n=l.target;this.internalText=n.textContent||""},this.handleTextBlur=()=>{this.isEditing=!1,this.internalText!==this.segment.text&&this.dispatchEvent(new CustomEvent("text-change",{bubbles:!0,composed:!0,detail:{segmentId:this.segment.id,newText:this.internalText}}))},this.handleTextFocus=()=>{this.isEditing=!0,this.dispatchEvent(new CustomEvent("segment-focus",{bubbles:!0,composed:!0,detail:{segmentId:this.segment.id}}))},this.handleRetranscribe=()=>{this.dispatchEvent(new CustomEvent("retranscribe",{bubbles:!0,composed:!0,detail:{segmentId:this.segment.id}}))},this.handleDelete=()=>{this.dispatchEvent(new CustomEvent("delete-segment",{bubbles:!0,composed:!0,detail:{segmentId:this.segment.id}}))}}connectedCallback(){super.connectedCallback(),this.internalText=this.segment?.text||""}updated(l){l.has("segment")&&(this.internalText=this.segment?.text||"",this.textElement&&(this.textElement.textContent=this.internalText)),l.has("isFocused")&&this.isFocused&&!this.isEditing&&this.scrollIntoView({behavior:"smooth",block:"center"})}formatTime(l){const n=Math.floor(l/60),r=(l%60).toFixed(2);return`${n}:${r.padStart(5,"0")}`}getConfidenceClass(l){return l?l>=.8?"high":l>=.5?"medium":"low":""}render(){if(!this.segment)return Ft``;const l=this.isFocused?"segment-container focused":"segment-container",n=this.getConfidenceClass(this.segment.confidence);return Ft`
      <div class=${l}>
        <div class="segment-header">
          <span class="time-range">
            ${this.formatTime(this.segment.start)} → ${this.formatTime(this.segment.end)}
          </span>
          <div class="actions">
            <button class="btn" @click=${this.handleRetranscribe} title="Re-transcribe segment">
              Re-transcribe
            </button>
            <button class="btn" @click=${this.handleDelete} title="Delete segment">Delete</button>
          </div>
        </div>

        <div
          class="segment-text"
          contenteditable="true"
          @input=${this.handleTextInput}
          @focus=${this.handleTextFocus}
          @blur=${this.handleTextBlur}
        >
          ${this.segment.text}
        </div>

        ${this.segment.confidence?Ft`
              <div class="confidence ${n}">
                Confidence: ${(this.segment.confidence*100).toFixed(1)}%
              </div>
            `:""}
      </div>
    `}};qe.styles=$e`
    :host {
      display: block;
      width: 100%;
    }

    .segment-container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
      padding: var(--spacing-3);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      background: var(--bg-surface);
      transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .segment-container.focused {
      border-color: var(--color-signal-active);
      background: var(--bg-surface-hover);
      box-shadow: 0 0 0 2px var(--color-signal-active-alpha);
    }

    .segment-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--spacing-3);
    }

    .time-range {
      font-family: var(--font-data);
      font-size: var(--text-xs);
      color: var(--text-tertiary);
      letter-spacing: 0.05em;
    }

    .actions {
      display: flex;
      gap: var(--spacing-2);
    }

    .btn {
      font-family: var(--font-ui);
      font-size: var(--text-xs);
      padding: var(--spacing-1) var(--spacing-2);
      border: 1px solid var(--border-default);
      border-radius: var(--radius-xs);
      background: var(--bg-primary);
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 100ms ease-out;
    }

    .btn:hover {
      border-color: var(--color-signal-active);
      color: var(--color-signal-active);
      box-shadow: 0 0 4px var(--color-signal-active-alpha);
    }

    .btn:active {
      transform: scale(0.98);
    }

    .segment-text {
      font-family: var(--font-ui);
      font-size: var(--text-base);
      line-height: 1.5;
      color: var(--text-primary);
      padding: var(--spacing-2);
      border: 1px solid transparent;
      border-radius: var(--radius-xs);
      outline: none;
      min-height: 2.5rem;
      cursor: text;
    }

    .segment-text[contenteditable='true'] {
      border-color: var(--border-default);
      background: var(--bg-input);
    }

    .segment-text[contenteditable='true']:focus {
      border-color: var(--color-signal-active);
      background: var(--bg-primary);
    }

    .segment-text:empty::before {
      content: 'Click to edit transcript...';
      color: var(--text-tertiary);
      font-style: italic;
    }

    .confidence {
      font-family: var(--font-data);
      font-size: var(--text-xs);
      color: var(--text-tertiary);
    }

    .confidence.high {
      color: var(--color-signal-active);
    }

    .confidence.medium {
      color: var(--color-signal-warning);
    }

    .confidence.low {
      color: var(--color-signal-error);
    }
  `;wn([se({type:Object})],qe.prototype,"segment",2);wn([se({type:Boolean})],qe.prototype,"isFocused",2);wn([se({type:Boolean})],qe.prototype,"isEditing",2);wn([ne()],qe.prototype,"internalText",2);wn([_r(".segment-text")],qe.prototype,"textElement",2);qe=wn([Ie("editable-segment")],qe);const $a=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,la=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-sparkles"
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
  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
  <path d="M20 2v4" />
  <path d="M22 4h-4" />
  <circle cx="4" cy="20" r="2" />
</svg>
`,Po=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-chevron-down"
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
  <path d="m6 9 6 6 6-6" />
</svg>
`,To=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-check"
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
  <path d="M20 6 9 17l-5-5" />
</svg>
`,$o=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-loader"
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
  <path d="M12 2v4" />
  <path d="m16.2 7.8 2.9-2.9" />
  <path d="M18 12h4" />
  <path d="m16.2 16.2 2.9 2.9" />
  <path d="M12 18v4" />
  <path d="m4.9 19.1 2.9-2.9" />
  <path d="M2 12h4" />
  <path d="m4.9 4.9 2.9 2.9" />
</svg>
`;var Io=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,Nn=(l,n,r,o)=>{for(var s=o>1?void 0:o?Ro(n,r):n,c=l.length-1,d;c>=0;c--)(d=l[c])&&(s=(o?d(n,r,s):d(s))||s);return o&&s&&Io(n,r,s),s};let rn=class extends ge{constructor(){super(...arguments),this.providers=[{id:"whisper-local",name:"Whisper (Local)",description:"OpenAI Whisper running locally",available:!0},{id:"whisper-api",name:"Whisper (API)",description:"OpenAI Whisper via API",available:!0}],this.selectedProvider="whisper-local",this.progress={status:"idle",progress:0},this.collapsed=!1}handleProviderChange(l){const n=l.target;this.selectedProvider=n.value,this.dispatchEvent(new CustomEvent("provider-changed",{detail:{providerId:this.selectedProvider},bubbles:!0,composed:!0}))}handleTranscribeSegment(){this.dispatchEvent(new CustomEvent("transcribe-segment",{detail:{providerId:this.selectedProvider},bubbles:!0,composed:!0}))}handleTranscribeFull(){this.dispatchEvent(new CustomEvent("transcribe-full",{detail:{providerId:this.selectedProvider},bubbles:!0,composed:!0}))}toggleCollapse(){this.collapsed=!this.collapsed}render(){const l=this.providers.find(o=>o.id===this.selectedProvider),n=this.progress.status==="processing",r=l?.available??!1;return Ft`
      <div class="panel-container">
        <div class="panel-header">
          <div class="panel-title">
            ${Wt(la)}
            <span>AI Transcription</span>
          </div>
          <button
            class="collapse-btn ${this.collapsed?"collapsed":""}"
            @click=${this.toggleCollapse}
            title="${this.collapsed?"Expand":"Collapse"}"
          >
            ${Wt(Po)}
          </button>
        </div>

        <div class="panel-content ${this.collapsed?"collapsed":""}">
          <!-- Provider Selection -->
          <div class="section">
            <label class="section-label">Transcription Provider</label>
            <select
              class="provider-select"
              .value=${this.selectedProvider}
              @change=${this.handleProviderChange}
              ?disabled=${n}
            >
              ${this.providers.map(o=>Ft`
                  <option value=${o.id}>
                    ${o.name}
                    ${o.available?"":" (unavailable)"}
                  </option>
                `)}
            </select>
          </div>

          <!-- Actions -->
          <div class="section">
            <label class="section-label">Actions</label>
            <button
              class="action-btn primary"
              @click=${this.handleTranscribeSegment}
              ?disabled=${!r||n}
            >
              ${Wt($a)}
              <span>Transcribe Current Segment</span>
            </button>

            <button
              class="action-btn"
              @click=${this.handleTranscribeFull}
              ?disabled=${!r||n}
            >
              ${Wt(la)}
              <span>Transcribe Full Audio</span>
            </button>
          </div>

          <!-- Progress -->
          ${this.progress.status!=="idle"?Ft`
                <div class="progress-section">
                  <div
                    class="progress-status ${this.progress.status==="processing"?"processing":""}"
                  >
                    ${this.progress.status==="processing"?Wt($o):Wt(To)}
                    <span>
                      ${this.progress.status==="processing"?"Transcribing...":this.progress.status==="complete"?"Complete":"Error"}
                    </span>
                  </div>

                  <div class="progress-bar-container">
                    <div
                      class="progress-bar"
                      style="width: ${this.progress.progress}%"
                    ></div>
                  </div>

                  ${this.progress.message?Ft`<div class="progress-message">${this.progress.message}</div>`:""}
                </div>
              `:""}

          <!-- Info -->
          <div class="info-section">
            <div class="info-text">
              ${r?'Select a segment and click "Transcribe Current Segment" to auto-fill text.':"No transcription providers are currently available. Check your configuration."}
            </div>
          </div>
        </div>
      </div>
    `}};rn.styles=$e`
    :host {
      display: block;
      height: 100%;
    }

    .panel-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      background: var(--glass-bg);
      backdrop-filter: blur(var(--glass-blur));
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    .panel-header {
      padding: var(--spacing-3);
      border-bottom: 1px solid var(--border-subtle);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--bg-surface);
    }

    .panel-title {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }

    .panel-title svg {
      width: 16px;
      height: 16px;
      stroke: var(--accent-coral);
    }

    .collapse-btn {
      background: none;
      border: none;
      color: var(--text-secondary);
      cursor: pointer;
      padding: var(--spacing-1);
      display: flex;
      align-items: center;
      transition: transform var(--duration-fast) var(--ease-out);
    }

    .collapse-btn svg {
      width: 16px;
      height: 16px;
      stroke: currentColor;
    }

    .collapse-btn.collapsed svg {
      transform: rotate(-90deg);
    }

    .panel-content {
      flex: 1;
      padding: var(--spacing-3);
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-3);
    }

    .panel-content.collapsed {
      display: none;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
    }

    .section-label {
      font-family: var(--font-ui);
      font-size: var(--text-xs);
      font-weight: var(--font-semibold);
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .provider-select {
      width: 100%;
      padding: var(--spacing-2);
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-primary);
      background: var(--bg-input);
      border: 1px solid var(--border-default);
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: all var(--duration-fast) var(--ease-out);
    }

    .provider-select:focus {
      outline: none;
      border-color: var(--accent-coral);
    }

    .action-btn {
      width: 100%;
      padding: var(--spacing-3);
      background: var(--glass-bg);
      color: var(--text-primary);
      border: 1px solid var(--border-default);
      border-radius: var(--radius-md);
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-2);
      transition: all var(--duration-fast) var(--ease-out);
    }

    .action-btn:hover:not(:disabled) {
      border-color: var(--accent-coral);
      transform: translateY(-1px);
    }

    .action-btn:active:not(:disabled) {
      transform: translateY(0);
    }

    .action-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .action-btn svg {
      width: 18px;
      height: 18px;
      stroke: currentColor;
      fill: none;
    }

    .action-btn.primary {
      background: var(--accent-coral);
      color: white;
      border-color: var(--accent-coral);
    }

    .progress-section {
      padding: var(--spacing-3);
      background: var(--bg-surface);
      border-radius: var(--radius-md);
      border: 1px solid var(--border-subtle);
    }

    .progress-status {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-2);
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }

    .progress-status svg {
      width: 16px;
      height: 16px;
      stroke: currentColor;
    }

    .progress-status.processing svg {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .progress-bar-container {
      width: 100%;
      height: 4px;
      background: var(--bg-input);
      border-radius: var(--radius-xs);
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      background: var(--accent-coral);
      transition: width var(--duration-normal) var(--ease-out);
    }

    .progress-message {
      margin-top: var(--spacing-2);
      font-family: var(--font-data);
      font-size: var(--text-xs);
      color: var(--text-tertiary);
    }

    .info-section {
      padding: var(--spacing-2);
      background: var(--bg-surface);
      border-radius: var(--radius-sm);
      border: 1px solid var(--border-subtle);
    }

    .info-text {
      font-family: var(--font-ui);
      font-size: var(--text-xs);
      color: var(--text-secondary);
      line-height: var(--leading-relaxed);
    }
  `;Nn([se({type:Array})],rn.prototype,"providers",2);Nn([se({type:String})],rn.prototype,"selectedProvider",2);Nn([se({type:Object})],rn.prototype,"progress",2);Nn([ne()],rn.prototype,"collapsed",2);rn=Nn([Ie("transcription-panel")],rn);var zo=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,Ia=(l,n,r,o)=>{for(var s=o>1?void 0:o?Bo(n,r):n,c=l.length-1,d;c>=0;c--)(d=l[c])&&(s=(o?d(n,r,s):d(s))||s);return o&&s&&zo(n,r,s),s};const Do=[{id:"navigation",label:"Navigation",icon:"🧭"},{id:"playback",label:"Playback",icon:"▶️"},{id:"editing",label:"Editing",icon:"✏️"},{id:"zoom",label:"Zoom",icon:"🔍"},{id:"view",label:"View",icon:"👁️"}],Mo=["play-pause","jump-next-segment","jump-prev-segment","jump-start","jump-end","confirm-segment","extend-segment","shrink-segment","split-segment","merge-segments","transcribe-segment","zoom-in","zoom-out","pan-left","pan-right","undo","redo","save-progress"];let yr=class extends ge{constructor(){super(),this.visible=!1,this.platform=Jt.getPlatform()}handleBackdropClick(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}handleModalClick(l){l.stopPropagation()}render(){return Ft`
      <div class="backdrop" @click=${this.handleBackdropClick}>
        <div class="modal" @click=${this.handleModalClick}>
          <div class="header">
            <h2 class="title">Keyboard Shortcuts</h2>
            <p class="subtitle">Speed up your workflow with these shortcuts</p>
          </div>

          <div class="content">
            ${Do.map(l=>{const n=ci.filter(r=>r.category===l.id&&Mo.includes(r.id));return n.length===0?"":Ft`
                <div class="category">
                  <div class="category-header">
                    <span class="category-icon">${l.icon}</span>
                    <span class="category-label">${l.label}</span>
                  </div>
                  <div class="shortcuts-grid">
                    ${n.map(r=>Ft`
                        <div class="shortcut-description">${r.description}</div>
                        <div class="shortcut-keys">
                          ${po(r.id,this.platform)}
                        </div>
                      `)}
                  </div>
                </div>
              `})}
          </div>

          <div class="footer">
            <p class="footer-text">
              Press <kbd>?</kbd> or <kbd>ESC</kbd> to close this overlay
            </p>
          </div>
        </div>
      </div>
    `}};yr.styles=$e`
    :host {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
      align-items: center;
      justify-content: center;
    }

    :host([visible]) {
      display: flex;
    }

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(4px);
    }

    .modal {
      position: relative;
      max-width: 800px;
      max-height: 90vh;
      width: 90%;
      background: var(--glass-bg);
      backdrop-filter: blur(var(--glass-blur));
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-xl);
    }

    .header {
      padding: var(--spacing-4);
      border-bottom: 1px solid var(--border-subtle);
      background: var(--bg-surface);
    }

    .title {
      font-family: var(--font-ui);
      font-size: var(--text-xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
      margin: 0;
    }

    .subtitle {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-secondary);
      margin-top: var(--spacing-1);
    }

    .content {
      flex: 1;
      overflow-y: auto;
      padding: var(--spacing-4);
    }

    .category {
      margin-bottom: var(--spacing-4);
    }

    .category:last-child {
      margin-bottom: 0;
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      margin-bottom: var(--spacing-3);
      padding-bottom: var(--spacing-2);
      border-bottom: 1px solid var(--border-subtle);
    }

    .category-icon {
      font-size: var(--text-lg);
    }

    .category-label {
      font-family: var(--font-ui);
      font-size: var(--text-md);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
    }

    .shortcuts-grid {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(--spacing-2) var(--spacing-4);
      align-items: center;
    }

    .shortcut-description {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-primary);
    }

    .shortcut-keys {
      font-family: var(--font-data);
      font-size: var(--text-sm);
      color: var(--text-secondary);
      padding: var(--spacing-1) var(--spacing-2);
      background: var(--bg-input);
      border: 1px solid var(--border-default);
      border-radius: var(--radius-sm);
      white-space: nowrap;
    }

    .footer {
      padding: var(--spacing-3) var(--spacing-4);
      border-top: 1px solid var(--border-subtle);
      background: var(--bg-surface);
      text-align: center;
    }

    .footer-text {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }

    .footer-text kbd {
      font-family: var(--font-data);
      padding: var(--spacing-1) var(--spacing-2);
      background: var(--bg-input);
      border: 1px solid var(--border-default);
      border-radius: var(--radius-sm);
      font-size: var(--text-xs);
    }

    .empty-category {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-tertiary);
      font-style: italic;
    }
  `;Ia([se({type:Boolean,reflect:!0})],yr.prototype,"visible",2);yr=Ia([Ie("shortcut-overlay")],yr);const jo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Fo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Ra=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,No=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-undo"
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
  <path d="M3 7v6h6" />
  <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
</svg>
`,Uo=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-redo"
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
  <path d="M21 7v6h-6" />
  <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
</svg>
`,Lo=`<!-- @license lucide-static v0.554.0 - ISC -->
<svg
  class="lucide lucide-list"
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
  <path d="M3 5h.01" />
  <path d="M3 12h.01" />
  <path d="M3 19h.01" />
  <path d="M8 5h13" />
  <path d="M8 12h13" />
  <path d="M8 19h13" />
</svg>
`;var Ko=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,Ve=(l,n,r,o)=>{for(var s=o>1?void 0:o?qo(n,r):n,c=l.length-1,d;c>=0;c--)(d=l[c])&&(s=(o?d(n,r,s):d(s))||s);return o&&s&&Ko(n,r,s),s};let ke=class extends ge{constructor(){super(...arguments),this.audioBlob=null,this.recordingId="",this.timelineState=It.getState(),this.audioBuffer=null,this.transcriptionProgress={status:"idle",progress:0},this.showShortcutOverlay=!1,this.unsubscribe=null,this.transcriptionIntervalId=null,this.transcriptionTimeoutId=null,this.handleOverlayKeys=l=>{l.key==="?"&&!l.ctrlKey&&!l.metaKey&&!l.altKey?(l.preventDefault(),this.showShortcutOverlay=!this.showShortcutOverlay):l.key==="Escape"&&this.showShortcutOverlay&&(l.preventDefault(),this.showShortcutOverlay=!1)}}connectedCallback(){super.connectedCallback(),this.unsubscribe=It.subscribe(l=>{this.timelineState=l,this.requestUpdate()}),window.addEventListener("keydown",this.handleOverlayKeys),Jt.register("play-pause",()=>this.togglePlay()),Jt.register("jump-next-segment",()=>It.advanceToNextGap(3)),Jt.register("jump-prev-segment",()=>this.jumpToPrevSegment()),Jt.register("jump-start",()=>this.jumpToStart()),Jt.register("jump-end",()=>this.jumpToEnd()),Jt.register("confirm-segment",()=>this.confirmSegmentShortcut()),Jt.register("extend-segment",()=>this.extendSegmentBoundary()),Jt.register("shrink-segment",()=>this.shrinkSegmentBoundary()),Jt.register("split-segment",()=>this.splitAtPlayhead()),Jt.register("merge-segments",()=>this.mergeWithNext()),Jt.register("transcribe-segment",()=>this.retranscribeSelected()),Jt.register("zoom-in",()=>It.zoom(1.5)),Jt.register("zoom-out",()=>It.zoom(1/1.5)),Jt.register("pan-left",()=>It.pan(-1)),Jt.register("pan-right",()=>It.pan(1)),Jt.register("undo",()=>It.undo()),Jt.register("redo",()=>It.redo()),Jt.register("save-progress",()=>this.handleSaveProgress()),Jt.start(window)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleOverlayKeys),this.clearTranscriptionTimers(),Jt.stop(),this.unsubscribe?.()}handleOverlayClose(){this.showShortcutOverlay=!1}clearTranscriptionTimers(){this.transcriptionIntervalId&&(clearInterval(this.transcriptionIntervalId),this.transcriptionIntervalId=null),this.transcriptionTimeoutId&&(clearTimeout(this.transcriptionTimeoutId),this.transcriptionTimeoutId=null)}async firstUpdated(){this.audioBlob&&await this.loadAudioBuffer()}async loadAudioBuffer(){if(this.audioBlob)try{const l=new AudioContext,n=await this.audioBlob.arrayBuffer();if(this.audioBuffer=await l.decodeAudioData(n),!this.timelineState.currentAnnotation&&this.audioBlob){const r={id:this.recordingId,recordingId:this.recordingId,audioBlob:this.audioBlob,duration:this.audioBuffer.duration,sampleRate:this.audioBuffer.sampleRate,mimeType:this.audioBlob.type||"audio/webm",fullText:"",segments:[],createdAt:Date.now(),updatedAt:Date.now(),alignmentQuality:{overallConfidence:0,wordAlignmentRate:0,gaps:[{start:0,end:this.audioBuffer.duration,duration:this.audioBuffer.duration}],overlaps:[],confidenceDistribution:{high:0,medium:0,low:0}},trainingMetadata:{language:"en",speechStyle:"read",hasMultipleSpeakers:!1}};It.loadAnnotation(r),r.segments.length===0&&It.advanceToNextGap(3)}}catch(l){console.error("Failed to load audio:",l)}}get selectedSegment(){const{currentAnnotation:l,selectedSegmentId:n}=this.timelineState;return!l||!n?null:l.segments.find(r=>r.id===n)||null}get sortedSegments(){const{currentAnnotation:l}=this.timelineState;return l?[...l.segments].sort((n,r)=>n.start-r.start):[]}get isExportReady(){const{currentAnnotation:l}=this.timelineState;if(!l)return!1;const{alignmentQuality:n}=l;return n.gaps.length===0&&n.overlaps.length===0&&n.overallConfidence>=.7}getConfidenceColor(l){return l>=.9?"var(--color-success)":l>=.7?"var(--color-warning)":"var(--color-error)"}getConfidenceLabel(l){return l>=.9?"high":l>=.7?"medium":"low"}handleViewportChange(l){const{offsetSeconds:n}=l.detail;It.setViewportPosition(n)}handleMarkersChanged(l){const{selectedSegmentId:n}=this.timelineState;if(!n)return;const{start:r,end:o}=l.detail;It.updateSegmentBoundary(n,"start",r),It.updateSegmentBoundary(n,"end",o)}handleSegmentTextChange(l){const{selectedSegmentId:n}=this.timelineState;if(!n)return;const r=l.target;It.updateSegmentText(n,r.value)}handleSegmentClick(l){It.selectSegment(l),It.centerOnSelectedSegment()}handleConfirmSegment(){const l=this.selectedSegment;if(!l||!l.text.trim()){alert("Please enter text for the segment");return}It.advanceToNextGap(3)}handleUndo(){It.undo()}handleRedo(){It.redo()}handleSaveProgress(){this.dispatchEvent(new CustomEvent("progress-saved",{detail:{annotation:this.timelineState.currentAnnotation},bubbles:!0,composed:!0}))}handleComplete(){this.dispatchEvent(new CustomEvent("annotation-complete",{detail:{annotation:this.timelineState.currentAnnotation},bubbles:!0,composed:!0}))}formatTime(l){const n=Math.floor(l/60),r=(l%60).toFixed(2);return`${n}:${r.padStart(5,"0")}`}togglePlay(){this.player&&this.player.togglePlayback()}jumpToPrevSegment(){const{selectedSegmentId:l}=this.timelineState,n=this.sortedSegments;if(n.length===0)return;if(!l){It.selectSegment(n[n.length-1].id),It.centerOnSelectedSegment();return}const r=n.findIndex(o=>o.id===l);r>0&&(It.selectSegment(n[r-1].id),It.centerOnSelectedSegment())}splitAtPlayhead(){const{selectedSegmentId:l}=this.timelineState;if(!l||!this.player)return;const n=this.player.getCurrentTime();It.splitSegment(l,n)}mergeWithNext(){const{selectedSegmentId:l}=this.timelineState;if(!l)return;const n=this.sortedSegments,r=n.findIndex(c=>c.id===l);if(r===-1||r>=n.length-1)return;const o=n[r].id,s=n[r+1].id;It.mergeSegments([o,s])}retranscribeSelected(){const{selectedSegmentId:l}=this.timelineState;l&&this.handleTranscribeSegment()}jumpToStart(){const l=this.sortedSegments;l.length>0?(It.selectSegment(l[0].id),It.centerOnSelectedSegment()):It.setViewportPosition(0)}jumpToEnd(){const{currentAnnotation:l}=this.timelineState;if(!l)return;const n=this.sortedSegments;if(n.length>0)It.selectSegment(n[n.length-1].id),It.centerOnSelectedSegment();else{const r=this.timelineState.timelineViewport.end-this.timelineState.timelineViewport.start,o=Math.max(0,l.duration-r);It.setViewportPosition(o)}}confirmSegmentShortcut(){this.handleConfirmSegment()}extendSegmentBoundary(){const{selectedSegmentId:l}=this.timelineState;if(!l)return;const n=this.selectedSegment;if(!n)return;const r=n.end+.1;It.updateSegmentBoundary(l,"end",r)}shrinkSegmentBoundary(){const{selectedSegmentId:l}=this.timelineState;if(!l)return;const n=this.selectedSegment;if(!n)return;const r=n.end-.1;It.updateSegmentBoundary(l,"end",r)}handleTranscribeSegment(){const{selectedSegmentId:l}=this.timelineState;if(!l){alert("Please select a segment first");return}this.clearTranscriptionTimers(),this.transcriptionProgress={status:"processing",progress:0,currentSegmentId:l,message:"Transcribing segment..."};const n=this.sortedSegments.find(o=>o.id===l);if(!n)return;let r=0;this.transcriptionIntervalId=window.setInterval(()=>{if(r+=10,this.transcriptionProgress={...this.transcriptionProgress,progress:r},r>=100){this.transcriptionIntervalId&&(clearInterval(this.transcriptionIntervalId),this.transcriptionIntervalId=null);const o=`[Transcribed text for segment ${this.sortedSegments.indexOf(n)+1}]`;It.updateSegmentText(l,o),this.transcriptionProgress={status:"complete",progress:100,message:"Transcription complete"},this.transcriptionTimeoutId=window.setTimeout(()=>{this.transcriptionProgress={status:"idle",progress:0},this.transcriptionTimeoutId=null},2e3)}},200)}handleTranscribeFull(){const{currentAnnotation:l}=this.timelineState;if(!l)return;this.clearTranscriptionTimers(),this.transcriptionProgress={status:"processing",progress:0,message:"Transcribing full audio..."};let n=0;this.transcriptionIntervalId=window.setInterval(()=>{n+=5,this.transcriptionProgress={...this.transcriptionProgress,progress:n},n>=100&&(this.transcriptionIntervalId&&(clearInterval(this.transcriptionIntervalId),this.transcriptionIntervalId=null),this.transcriptionProgress={status:"complete",progress:100,message:"Full transcription complete"},this.transcriptionTimeoutId=window.setTimeout(()=>{this.transcriptionProgress={status:"idle",progress:0},this.transcriptionTimeoutId=null},2e3))},400)}render(){const{currentAnnotation:l,selectedSegmentId:n,timelineViewport:r,history:o}=this.timelineState,s=this.selectedSegment,c=this.sortedSegments,d=l&&c.length>0?c[c.length-1].end/l.duration*100:0;return Ft`
      <div class="workflow-container">
        <!-- Header -->
        <div class="header">
          <h1 class="title">Audio-Text Alignment</h1>
          <div class="progress-info">
            <span class="progress-badge">${c.length} segments</span>
            <span>${d.toFixed(1)}% complete</span>

            <!-- QC Badges -->
            ${l?Ft`
                  <div class="qc-badges">
                    <!-- Gaps -->
                    ${l.alignmentQuality.gaps.length>0?Ft`
                          <span class="qc-badge error">
                            ${l.alignmentQuality.gaps.length} gaps
                          </span>
                        `:""}

                    <!-- Overlaps -->
                    ${l.alignmentQuality.overlaps.length>0?Ft`
                          <span class="qc-badge error">
                            ${l.alignmentQuality.overlaps.length} overlaps
                          </span>
                        `:""}

                    <!-- Confidence -->
                    <span
                      class="qc-badge ${this.getConfidenceLabel(l.alignmentQuality.overallConfidence)}"
                      style="background: ${this.getConfidenceColor(l.alignmentQuality.overallConfidence)}20; color: ${this.getConfidenceColor(l.alignmentQuality.overallConfidence)}"
                    >
                      ${(l.alignmentQuality.overallConfidence*100).toFixed(0)}%
                      confidence
                    </span>

                    <!-- Export Ready -->
                    ${this.isExportReady?Ft`
                          <span class="qc-badge success" title="Ready for export">
                            ✓ Export Ready
                          </span>
                        `:""}
                  </div>
                `:""}
          </div>
        </div>

        <!-- Minimap -->
        <div class="minimap-section">
          <timeline-minimap
            .audioBuffer=${this.audioBuffer}
            .segments=${c}
            .viewportOffset=${r.start}
            .viewportDuration=${r.end-r.start}
            @viewport-change=${this.handleViewportChange}
          ></timeline-minimap>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Waveform Player -->
          <div class="waveform-section">
            <audio-waveform-player
              .audioBlob=${this.audioBlob}
              .leftClamp=${s?.start||0}
              .rightClamp=${s?.end||3}
              @markers-changed=${this.handleMarkersChanged}
            ></audio-waveform-player>
          </div>

          <!-- Segment Text Editor -->
          <div class="segment-editor">
            <div class="editor-header">
              <span class="editor-label">
                ${s?`Segment ${c.indexOf(s)+1}`:"No segment selected"}
              </span>
              ${s?Ft`<span class="segment-time">
                    ${this.formatTime(s.start)} → ${this.formatTime(s.end)}
                  </span>`:""}
            </div>
            <textarea
              class="text-input"
              .value=${s?.text||""}
              @input=${this.handleSegmentTextChange}
              placeholder="Enter text for this segment..."
              ?disabled=${!s}
            ></textarea>
          </div>
        </div>

        <!-- Sidebar: Segment List & Transcription -->
        <div class="sidebar">
          <div class="segment-list">
            <div class="segment-list-header">
              <span class="segment-list-title">
                ${Wt(Lo)}
                Segments
              </span>
              <span class="segment-count">${c.length}</span>
            </div>
            <div class="segment-list-scroll">
              ${c.map(f=>{const m=f.confidence??l?.alignmentQuality.overallConfidence??0,b=m<.7;return Ft`
                    <div
                      class="segment-item ${f.id===n?"selected":""}"
                      @click=${()=>this.handleSegmentClick(f.id)}
                    >
                      <div class="segment-item-header">
                        <span class="segment-time">
                          ${this.formatTime(f.start)} - ${this.formatTime(f.end)}
                          ${b?Ft`
                                <span
                                  class="confidence-badge"
                                  style="background: ${this.getConfidenceColor(m)}20; color: ${this.getConfidenceColor(m)}"
                                  title="${this.getConfidenceLabel(m)} confidence"
                                >
                                  ${(m*100).toFixed(0)}%
                                </span>
                              `:""}
                        </span>
                      </div>
                      <div class="segment-text">${f.text||"(empty)"}</div>
                    </div>
                  `})}
            </div>
          </div>

          <!-- Transcription Panel -->
          <transcription-panel
            .progress=${this.transcriptionProgress}
            @transcribe-segment=${this.handleTranscribeSegment}
            @transcribe-full=${this.handleTranscribeFull}
          ></transcription-panel>
        </div>

        <!-- Action Bar -->
        <div class="action-section">
          <div class="segment-info">
            ${s?`${(s.end-s.start).toFixed(2)}s segment`:"No segment selected"}
          </div>

          <div class="action-buttons">
            <button
              class="action-btn"
              @click=${this.handleUndo}
              ?disabled=${o.undoStack.length===0}
              title="Undo (Ctrl+Z)"
            >
              ${Wt(No)}
            </button>

            <button
              class="action-btn"
              @click=${this.handleRedo}
              ?disabled=${o.redoStack.length===0}
              title="Redo (Ctrl+Y)"
            >
              ${Wt(Uo)}
            </button>

            <button class="action-btn" @click=${this.handleSaveProgress}>
              ${Wt(Fo)}
              <span>Save Progress</span>
            </button>

            <button
              class="action-btn primary"
              @click=${this.handleConfirmSegment}
              ?disabled=${!s||!s.text.trim()}
            >
              <span>Confirm & Next</span>
              ${Wt(jo)}
            </button>

            ${d>=99?Ft`
                  <button class="action-btn primary" @click=${this.handleComplete}>
                    ${Wt(Ra)}
                    <span>Complete</span>
                  </button>
                `:""}
          </div>
        </div>
      </div>

      <!-- Shortcut Overlay -->
      <shortcut-overlay
        ?visible=${this.showShortcutOverlay}
        @close=${this.handleOverlayClose}
      ></shortcut-overlay>
    `}};ke.styles=$e`
    :host {
      display: block;
      height: 100%;
      background: var(--bg-primary);
    }

    .workflow-container {
      height: 100%;
      display: grid;
      grid-template-rows: auto auto 1fr auto auto;
      grid-template-columns: 1fr 300px;
      gap: var(--spacing-3);
      padding: var(--spacing-4);
    }

    .header {
      grid-column: 1 / -1;
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
      display: flex;
      gap: var(--spacing-4);
      align-items: center;
    }

    .progress-badge {
      padding: var(--spacing-1) var(--spacing-2);
      background: var(--color-signal-active-alpha);
      border-radius: var(--radius-xs);
      color: var(--color-signal-active);
      font-weight: var(--font-semibold);
    }

    .qc-badges {
      display: flex;
      gap: var(--spacing-2);
      align-items: center;
    }

    .qc-badge {
      padding: var(--spacing-1) var(--spacing-2);
      border-radius: var(--radius-xs);
      font-weight: var(--font-semibold);
      font-size: var(--text-xs);
      display: flex;
      align-items: center;
      gap: var(--spacing-1);
    }

    .qc-badge.success {
      background: rgba(34, 197, 94, 0.1);
      color: rgb(34, 197, 94);
    }

    .qc-badge.warning {
      background: rgba(251, 191, 36, 0.1);
      color: rgb(251, 191, 36);
    }

    .qc-badge.error {
      background: rgba(239, 68, 68, 0.1);
      color: rgb(239, 68, 68);
    }

    .qc-badge.info {
      background: rgba(59, 130, 246, 0.1);
      color: rgb(59, 130, 246);
    }

    .export-ready-icon {
      color: rgb(34, 197, 94);
    }

    .confidence-badge {
      font-size: var(--text-xs);
      padding: 2px var(--spacing-1);
      border-radius: var(--radius-xs);
      margin-left: var(--spacing-1);
    }

    .minimap-section {
      grid-column: 1 / -1;
    }

    .main-content {
      grid-column: 1;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-3);
      min-height: 0;
    }

    .waveform-section {
      flex: 0 0 auto;
    }

    .segment-editor {
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

    .editor-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-3);
    }

    .editor-label {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .text-input {
      flex: 1;
      min-height: 0;
      padding: var(--spacing-3);
      font-family: var(--font-ui);
      font-size: var(--text-lg);
      line-height: var(--leading-relaxed);
      color: var(--text-primary);
      background: var(--bg-input);
      border: 1px solid var(--border-default);
      border-radius: var(--radius-md);
      resize: none;
      transition: all var(--duration-fast) var(--ease-out);
    }

    .text-input:focus {
      outline: none;
      border-color: var(--color-signal-active);
      background: var(--bg-primary);
    }

    .sidebar {
      grid-column: 2;
      grid-row: 3;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-3);
      min-height: 0;
    }

    .segment-list {
      flex: 1;
      min-height: 0;
      background: var(--glass-bg);
      backdrop-filter: blur(var(--glass-blur));
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-3);
      display: flex;
      flex-direction: column;
    }

    .segment-list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-2);
      padding-bottom: var(--spacing-2);
      border-bottom: 1px solid var(--border-subtle);
    }

    .segment-list-title {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }

    .segment-list-title svg {
      width: 16px;
      height: 16px;
      stroke: currentColor;
    }

    .segment-count {
      font-family: var(--font-data);
      font-size: var(--text-xs);
      color: var(--text-tertiary);
    }

    .segment-list-scroll {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
    }

    .segment-item {
      padding: var(--spacing-2);
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: all var(--duration-fast) var(--ease-out);
    }

    .segment-item:hover {
      border-color: var(--color-signal-active);
      background: var(--bg-surface-hover);
    }

    .segment-item.selected {
      border-color: var(--color-signal-active);
      background: var(--color-signal-active-alpha);
    }

    .segment-item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-1);
    }

    .segment-time {
      font-family: var(--font-data);
      font-size: var(--text-xs);
      color: var(--text-tertiary);
    }

    .segment-text {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-primary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .action-section {
      grid-column: 1 / -1;
      display: flex;
      gap: var(--spacing-3);
      justify-content: space-between;
      align-items: center;
      padding: var(--spacing-3) var(--spacing-4);
      background: var(--glass-bg);
      backdrop-filter: blur(var(--glass-blur));
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
    }

    .action-buttons {
      display: flex;
      gap: var(--spacing-2);
    }

    .action-btn {
      padding: var(--spacing-3) var(--spacing-4);
      background: var(--glass-bg);
      color: var(--text-primary);
      border: 1px solid var(--border-default);
      border-radius: var(--radius-md);
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      transition: all var(--duration-fast) var(--ease-out);
    }

    .action-btn:hover {
      border-color: var(--color-signal-active);
      transform: translateY(-1px);
    }

    .action-btn:active {
      transform: translateY(0);
    }

    .action-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    .action-btn svg {
      width: 18px;
      height: 18px;
      stroke: currentColor;
      fill: none;
    }

    .action-btn.primary {
      background: var(--color-signal-active);
      color: white;
      border-color: var(--color-signal-active);
    }

    .segment-info {
      font-family: var(--font-data);
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }
  `;Ve([se({type:Object})],ke.prototype,"audioBlob",2);Ve([se({type:String})],ke.prototype,"recordingId",2);Ve([ne()],ke.prototype,"timelineState",2);Ve([ne()],ke.prototype,"audioBuffer",2);Ve([ne()],ke.prototype,"transcriptionProgress",2);Ve([ne()],ke.prototype,"showShortcutOverlay",2);Ve([_r("audio-waveform-player")],ke.prototype,"player",2);ke=Ve([Ie("annotation-workflow-refactored")],ke);const Wo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Vo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Ho=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,ui=(l,n,r,o)=>{for(var s=o>1?void 0:o?Zo(n,r):n,c=l.length-1,d;c>=0;c--)(d=l[c])&&(s=(o?d(n,r,s):d(s))||s);return o&&s&&Ho(n,r,s),s};let jn=class extends ge{constructor(){super(...arguments),this.recording=null,this.existingAnnotation=null}async connectedCallback(){super.connectedCallback(),this.recording?.isAnnotated&&(this.existingAnnotation=await Rn(this.recording.id)||null)}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async handleStartOver(){!this.recording||!confirm("Are you sure you want to start over? This will delete all current annotations.")||(await Vs(this.recording.id),this.existingAnnotation=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("annotation-reset",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})))}async handleAnnotationComplete(l){if(!this.recording)return;const{annotations:n,fullText:r}=l.detail,o={recordingId:this.recording.id,fullText:r,segments:n,completedAt:Date.now(),updatedAt:Date.now()};await Qr(o),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})),this.handleClose()}async handleAnnotationSaved(l){if(!this.recording)return;const{allAnnotations:n}=l.detail,r=await Rn(this.recording.id);r&&(r.segments=n,r.updatedAt=Date.now(),await Qr(r))}async handleProgressSaved(l){if(!this.recording)return;const{annotations:n}=l.detail;let r=await Rn(this.recording.id);r?(r.segments=n,r.updatedAt=Date.now()):r={recordingId:this.recording.id,fullText:"",segments:n,completedAt:0,updatedAt:Date.now()},await Qr(r)}render(){return this.recording?Ft`
      <div class="modal-header">
        <div class="title-section">
          <div class="modal-title">Annotating: ${this.recording.title}</div>
          <div class="subtitle">
            Duration: ${this.recording.duration.toFixed(2)}s |
            Source: ${this.recording.source}
          </div>
        </div>

        <div class="header-actions">
          ${this.existingAnnotation?Ft`
                <button
                  class="header-btn danger"
                  @click=${this.handleStartOver}
                  title="Delete all annotations and start over"
                >
                  ${Wt(Vo)}
                  <span>Start Over</span>
                </button>
              `:null}

          <button
            class="header-btn"
            @click=${this.handleClose}
            title="Close without saving"
          >
            ${Wt(Wo)}
            <span>Close</span>
          </button>
        </div>
      </div>

      <div class="modal-content">
        <annotation-workflow-refactored
          .audioBlob=${this.recording.audioBlob}
          .recordingId=${this.recording.id}
          @annotation-complete=${this.handleAnnotationComplete}
          @annotation-saved=${this.handleAnnotationSaved}
          @progress-saved=${this.handleProgressSaved}
        ></annotation-workflow-refactored>
      </div>
    `:Ft`<div>No recording selected</div>`}};jn.styles=$e`
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
  `;ui([se({type:Object})],jn.prototype,"recording",2);ui([ne()],jn.prototype,"existingAnnotation",2);jn=ui([Ie("annotation-modal")],jn);const Yo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Go=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Xo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Qo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Jo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ca=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var tl=Object.defineProperty,el=Object.getOwnPropertyDescriptor,_n=(l,n,r,o)=>{for(var s=o>1?void 0:o?el(n,r):n,c=l.length-1,d;c>=0;c--)(d=l[c])&&(s=(o?d(n,r,s):d(s))||s);return o&&s&&tl(n,r,s),s};let We=class extends ge{constructor(){super(...arguments),this.recordings=[],this.isRecording=!1,this.recordingDuration=0,this.selectedRecording=null,this.isModalOpen=!1,this.microphoneService=null,this.mediaRecorderService=null,this.recordingTimer=null}async connectedCallback(){super.connectedCallback(),await this.loadRecordings()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async loadRecordings(){this.recordings=await va()}async startRecording(){try{this.microphoneService=new zs;const l=await this.microphoneService.requestPermission();this.mediaRecorderService=new Bs,await this.mediaRecorderService.initialize(l),this.mediaRecorderService.start(),this.isRecording=!0,this.recordingDuration=0,this.recordingTimer=window.setInterval(()=>{this.recordingDuration+=.1,this.requestUpdate()},100)}catch(l){console.error("Failed to start recording:",l),alert("Failed to start recording. Please check microphone permissions."),this.cleanup()}}async stopRecording(){if(this.mediaRecorderService)try{const l=await this.mediaRecorderService.stop(),n=this.recordingDuration,o=`Untitled ${await Hs()}`;await ga({title:o,audioBlob:l,duration:n,source:"recording"}),await this.loadRecordings()}catch(l){console.error("Failed to save recording:",l),alert("Failed to save recording.")}finally{this.cleanup()}}cleanup(){this.isRecording=!1,this.recordingDuration=0,this.recordingTimer&&(clearInterval(this.recordingTimer),this.recordingTimer=null),this.microphoneService?.release(),this.mediaRecorderService=null,this.microphoneService=null}async handleUpload(){const l=await Qs();if(!(!l||l.length===0))try{await Xs(l),await this.loadRecordings()}catch(n){console.error("Failed to upload files:",n),alert("Failed to upload files.")}}async handleTitleChange(l,n){await qs(l.id,{title:n}),await this.loadRecordings()}async handlePlay(l){new Audio(URL.createObjectURL(l.audioBlob)).play()}handleAnnotate(l){this.selectedRecording=l,this.isModalOpen=!0}async handleExport(l){try{await ro(l.id)}catch(n){console.error("Failed to export recording:",n),alert(n instanceof Error?n.message:"Failed to export recording.")}}async handleDelete(l){confirm(`Are you sure you want to delete "${l.title}"? This cannot be undone.`)&&(await Ws(l.id),await this.loadRecordings())}async handleExportAll(){try{await io()}catch(l){console.error("Failed to export all recordings:",l),alert(l instanceof Error?l.message:"Failed to export recordings.")}}handleModalClose(){this.isModalOpen=!1,this.selectedRecording=null,this.loadRecordings()}formatDuration(l){const n=Math.floor(l/60),r=Math.floor(l%60);return`${n}:${r.toString().padStart(2,"0")}`}render(){return Ft`
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
          ${this.isRecording?null:Ft`
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
              ${Wt(this.isRecording?Go:Yo)}
              <span>${this.isRecording?"Stop Recording":"Record Audio"}</span>
            </button>

            ${this.isRecording?Ft`<div class="duration">${this.formatDuration(this.recordingDuration)}</div>`:Ft`
                  <button class="upload-btn" @click=${this.handleUpload}>
                    ${Wt(Xo)}
                    <span>Upload Files</span>
                  </button>
                `}
          </div>
        </div>

        <!-- Recordings Table -->
        <div class="recordings-header">
          <h2 class="section-title">Recordings (${this.recordings.length})</h2>
          ${this.recordings.some(l=>l.isAnnotated)?Ft`
                <button class="export-all-btn" @click=${this.handleExportAll}>
                  ${Wt(ca)}
                  <span>Export All</span>
                </button>
              `:null}
        </div>

        <div class="recordings-table">
          ${this.recordings.length===0?Ft`
                <div class="empty-state">
                  <div class="empty-icon">${Wt($a)}</div>
                  <div class="empty-title">No recordings yet</div>
                  <div class="empty-description">
                    Start recording or upload audio files to begin annotating your voice data
                  </div>
                </div>
              `:Ft`
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
                    ${this.recordings.map(l=>Ft`
                        <tr>
                          <td>
                            ${l.isAnnotated?Ft`${Wt(Ra)}`:""}
                          </td>
                          <td>
                            <div class="title-cell">
                              <input
                                class="title-input"
                                type="text"
                                .value=${l.title}
                                @change=${n=>this.handleTitleChange(l,n.target.value)}
                                placeholder="Enter title..."
                              />
                            </div>
                          </td>
                          <td>
                            <span class="duration-badge">
                              ${this.formatDuration(l.duration)}
                            </span>
                          </td>
                          <td>
                            <span class="duration-badge">
                              ${l.source==="recording"?"Recorded":"Uploaded"}
                            </span>
                          </td>
                          <td>
                            <div class="actions">
                              <button
                                class="action-btn"
                                @click=${()=>this.handlePlay(l)}
                                title="Play audio"
                              >
                                ${Wt(Ta)}
                                <span>Play</span>
                              </button>

                              <button
                                class="action-btn"
                                @click=${()=>this.handleAnnotate(l)}
                                title="Annotate audio"
                              >
                                ${Wt(Qo)}
                                <span>Annotate</span>
                              </button>

                              ${l.isAnnotated?Ft`
                                    <button
                                      class="action-btn"
                                      @click=${()=>this.handleExport(l)}
                                      title="Export annotation"
                                    >
                                      ${Wt(ca)}
                                      <span>Export</span>
                                    </button>
                                  `:null}

                              <button
                                class="action-btn danger"
                                @click=${()=>this.handleDelete(l)}
                                title="Delete recording"
                              >
                                ${Wt(Jo)}
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
      ${this.isModalOpen&&this.selectedRecording?Ft`
            <annotation-modal
              .recording=${this.selectedRecording}
              @close=${this.handleModalClose}
              @annotation-saved=${this.handleModalClose}
            ></annotation-modal>
          `:null}
    `}};We.styles=$e`
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
  `;_n([ne()],We.prototype,"recordings",2);_n([ne()],We.prototype,"isRecording",2);_n([ne()],We.prototype,"recordingDuration",2);_n([ne()],We.prototype,"selectedRecording",2);_n([ne()],We.prototype,"isModalOpen",2);We=_n([Ie("minimal-recorder")],We);const za=l=>{document.body.setAttribute("data-theme",l)};za(zn.getCurrentTheme());zn.subscribe(l=>{za(l.currentTheme)});

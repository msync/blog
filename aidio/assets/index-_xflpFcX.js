(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=r(l);fetch(l.href,c)}})();const or=globalThis,Qr=or.ShadowRoot&&(or.ShadyCSS===void 0||or.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ti=Symbol(),ji=new WeakMap;let aa=class{constructor(n,r,o){if(this._$cssResult$=!0,o!==ti)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=r}get styleSheet(){let n=this.o;const r=this.t;if(Qr&&n===void 0){const o=r!==void 0&&r.length===1;o&&(n=ji.get(r)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),o&&ji.set(r,n))}return n}toString(){return this.cssText}};const Xa=a=>new aa(typeof a=="string"?a:a+"",void 0,ti),mn=(a,...n)=>{const r=a.length===1?a[0]:n.reduce(((o,l,c)=>o+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+a[c+1]),a[0]);return new aa(r,a,ti)},Ja=(a,n)=>{if(Qr)a.adoptedStyleSheets=n.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(const r of n){const o=document.createElement("style"),l=or.litNonce;l!==void 0&&o.setAttribute("nonce",l),o.textContent=r.cssText,a.appendChild(o)}},Fi=Qr?a=>a:a=>a instanceof CSSStyleSheet?(n=>{let r="";for(const o of n.cssRules)r+=o.cssText;return Xa(r)})(a):a;const{is:Qa,defineProperty:to,getOwnPropertyDescriptor:eo,getOwnPropertyNames:no,getOwnPropertySymbols:ro,getPrototypeOf:io}=Object,fr=globalThis,Ni=fr.trustedTypes,ao=Ni?Ni.emptyScript:"",oo=fr.reactiveElementPolyfillSupport,Pn=(a,n)=>a,cr={toAttribute(a,n){switch(n){case Boolean:a=a?ao:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,n){let r=a;switch(n){case Boolean:r=a!==null;break;case Number:r=a===null?null:Number(a);break;case Object:case Array:try{r=JSON.parse(a)}catch{r=null}}return r}},ei=(a,n)=>!Qa(a,n),Ui={attribute:!0,type:String,converter:cr,reflect:!1,useDefault:!1,hasChanged:ei};Symbol.metadata??=Symbol("metadata"),fr.litPropertyMetadata??=new WeakMap;let fn=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,r=Ui){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(n,r),!r.noAccessor){const o=Symbol(),l=this.getPropertyDescriptor(n,o,r);l!==void 0&&to(this.prototype,n,l)}}static getPropertyDescriptor(n,r,o){const{get:l,set:c}=eo(this.prototype,n)??{get(){return this[r]},set(d){this[r]=d}};return{get:l,set(d){const f=l?.call(this);c?.call(this,d),this.requestUpdate(n,f,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??Ui}static _$Ei(){if(this.hasOwnProperty(Pn("elementProperties")))return;const n=io(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(Pn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pn("properties"))){const r=this.properties,o=[...no(r),...ro(r)];for(const l of o)this.createProperty(l,r[l])}const n=this[Symbol.metadata];if(n!==null){const r=litPropertyMetadata.get(n);if(r!==void 0)for(const[o,l]of r)this.elementProperties.set(o,l)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const l=this._$Eu(r,o);l!==void 0&&this._$Eh.set(l,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const r=[];if(Array.isArray(n)){const o=new Set(n.flat(1/0).reverse());for(const l of o)r.unshift(Fi(l))}else n!==void 0&&r.push(Fi(n));return r}static _$Eu(n,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((n=>n(this)))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){const n=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(n.set(o,this[o]),delete this[o]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ja(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((n=>n.hostConnected?.()))}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach((n=>n.hostDisconnected?.()))}attributeChangedCallback(n,r,o){this._$AK(n,o)}_$ET(n,r){const o=this.constructor.elementProperties.get(n),l=this.constructor._$Eu(n,o);if(l!==void 0&&o.reflect===!0){const c=(o.converter?.toAttribute!==void 0?o.converter:cr).toAttribute(r,o.type);this._$Em=n,c==null?this.removeAttribute(l):this.setAttribute(l,c),this._$Em=null}}_$AK(n,r){const o=this.constructor,l=o._$Eh.get(n);if(l!==void 0&&this._$Em!==l){const c=o.getPropertyOptions(l),d=typeof c.converter=="function"?{fromAttribute:c.converter}:c.converter?.fromAttribute!==void 0?c.converter:cr;this._$Em=l;const f=d.fromAttribute(r,c.type);this[l]=f??this._$Ej?.get(l)??f,this._$Em=null}}requestUpdate(n,r,o){if(n!==void 0){const l=this.constructor,c=this[n];if(o??=l.getPropertyOptions(n),!((o.hasChanged??ei)(c,r)||o.useDefault&&o.reflect&&c===this._$Ej?.get(n)&&!this.hasAttribute(l._$Eu(n,o))))return;this.C(n,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,r,{useDefault:o,reflect:l,wrapped:c},d){o&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,d??r??this[n]),c!==!0||d!==void 0)||(this._$AL.has(n)||(this.hasUpdated||o||(r=void 0),this._$AL.set(n,r)),l===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[l,c]of this._$Ep)this[l]=c;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[l,c]of o){const{wrapped:d}=c,f=this[l];d!==!0||this._$AL.has(l)||f===void 0||this.C(l,void 0,c,f)}}let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(r)):this._$EM()}catch(o){throw n=!1,this._$EM(),o}n&&this._$AE(r)}willUpdate(n){}_$AE(n){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach((r=>this._$ET(r,this[r]))),this._$EM()}updated(n){}firstUpdated(n){}};fn.elementStyles=[],fn.shadowRootOptions={mode:"open"},fn[Pn("elementProperties")]=new Map,fn[Pn("finalized")]=new Map,oo?.({ReactiveElement:fn}),(fr.reactiveElementVersions??=[]).push("2.1.1");const ni=globalThis,ur=ni.trustedTypes,Li=ur?ur.createPolicy("lit-html",{createHTML:a=>a}):void 0,oa="$lit$",Le=`lit$${Math.random().toFixed(9).slice(2)}$`,sa="?"+Le,so=`<${sa}>`,Qe=document,Rn=()=>Qe.createComment(""),$n=a=>a===null||typeof a!="object"&&typeof a!="function",ri=Array.isArray,lo=a=>ri(a)||typeof a?.[Symbol.iterator]=="function",qr=`[ 	
\f\r]`,An=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ki=/-->/g,qi=/>/g,Ye=RegExp(`>|${qr}(?:([^\\s"'>=/]+)(${qr}*=${qr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wi=/'/g,Hi=/"/g,la=/^(?:script|style|textarea|title)$/i,co=a=>(n,...r)=>({_$litType$:a,strings:n,values:r}),Vt=co(1),tn=Symbol.for("lit-noChange"),Qt=Symbol.for("lit-nothing"),Zi=new WeakMap,Je=Qe.createTreeWalker(Qe,129);function ca(a,n){if(!ri(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Li!==void 0?Li.createHTML(n):n}const uo=(a,n)=>{const r=a.length-1,o=[];let l,c=n===2?"<svg>":n===3?"<math>":"",d=An;for(let f=0;f<r;f++){const g=a[f];let b,x,w=-1,C=0;for(;C<g.length&&(d.lastIndex=C,x=d.exec(g),x!==null);)C=d.lastIndex,d===An?x[1]==="!--"?d=Ki:x[1]!==void 0?d=qi:x[2]!==void 0?(la.test(x[2])&&(l=RegExp("</"+x[2],"g")),d=Ye):x[3]!==void 0&&(d=Ye):d===Ye?x[0]===">"?(d=l??An,w=-1):x[1]===void 0?w=-2:(w=d.lastIndex-x[2].length,b=x[1],d=x[3]===void 0?Ye:x[3]==='"'?Hi:Wi):d===Hi||d===Wi?d=Ye:d===Ki||d===qi?d=An:(d=Ye,l=void 0);const v=d===Ye&&a[f+1].startsWith("/>")?" ":"";c+=d===An?g+so:w>=0?(o.push(b),g.slice(0,w)+oa+g.slice(w)+Le+v):g+Le+(w===-2?f:v)}return[ca(a,c+(a[r]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),o]};class In{constructor({strings:n,_$litType$:r},o){let l;this.parts=[];let c=0,d=0;const f=n.length-1,g=this.parts,[b,x]=uo(n,r);if(this.el=In.createElement(b,o),Je.currentNode=this.el.content,r===2||r===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(l=Je.nextNode())!==null&&g.length<f;){if(l.nodeType===1){if(l.hasAttributes())for(const w of l.getAttributeNames())if(w.endsWith(oa)){const C=x[d++],v=l.getAttribute(w).split(Le),E=/([.?@])?(.*)/.exec(C);g.push({type:1,index:c,name:E[2],strings:v,ctor:E[1]==="."?fo:E[1]==="?"?po:E[1]==="@"?mo:pr}),l.removeAttribute(w)}else w.startsWith(Le)&&(g.push({type:6,index:c}),l.removeAttribute(w));if(la.test(l.tagName)){const w=l.textContent.split(Le),C=w.length-1;if(C>0){l.textContent=ur?ur.emptyScript:"";for(let v=0;v<C;v++)l.append(w[v],Rn()),Je.nextNode(),g.push({type:2,index:++c});l.append(w[C],Rn())}}}else if(l.nodeType===8)if(l.data===sa)g.push({type:2,index:c});else{let w=-1;for(;(w=l.data.indexOf(Le,w+1))!==-1;)g.push({type:7,index:c}),w+=Le.length-1}c++}}static createElement(n,r){const o=Qe.createElement("template");return o.innerHTML=n,o}}function pn(a,n,r=a,o){if(n===tn)return n;let l=o!==void 0?r._$Co?.[o]:r._$Cl;const c=$n(n)?void 0:n._$litDirective$;return l?.constructor!==c&&(l?._$AO?.(!1),c===void 0?l=void 0:(l=new c(a),l._$AT(a,r,o)),o!==void 0?(r._$Co??=[])[o]=l:r._$Cl=l),l!==void 0&&(n=pn(a,l._$AS(a,n.values),l,o)),n}class ho{constructor(n,r){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:r},parts:o}=this._$AD,l=(n?.creationScope??Qe).importNode(r,!0);Je.currentNode=l;let c=Je.nextNode(),d=0,f=0,g=o[0];for(;g!==void 0;){if(d===g.index){let b;g.type===2?b=new Bn(c,c.nextSibling,this,n):g.type===1?b=new g.ctor(c,g.name,g.strings,this,n):g.type===6&&(b=new go(c,this,n)),this._$AV.push(b),g=o[++f]}d!==g?.index&&(c=Je.nextNode(),d++)}return Je.currentNode=Qe,l}p(n){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(n,o,r),r+=o.strings.length-2):o._$AI(n[r])),r++}}class Bn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,r,o,l){this.type=2,this._$AH=Qt,this._$AN=void 0,this._$AA=n,this._$AB=r,this._$AM=o,this.options=l,this._$Cv=l?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&n?.nodeType===11&&(n=r.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,r=this){n=pn(this,n,r),$n(n)?n===Qt||n==null||n===""?(this._$AH!==Qt&&this._$AR(),this._$AH=Qt):n!==this._$AH&&n!==tn&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):lo(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==Qt&&$n(this._$AH)?this._$AA.nextSibling.data=n:this.T(Qe.createTextNode(n)),this._$AH=n}$(n){const{values:r,_$litType$:o}=n,l=typeof o=="number"?this._$AC(n):(o.el===void 0&&(o.el=In.createElement(ca(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===l)this._$AH.p(r);else{const c=new ho(l,this),d=c.u(this.options);c.p(r),this.T(d),this._$AH=c}}_$AC(n){let r=Zi.get(n.strings);return r===void 0&&Zi.set(n.strings,r=new In(n)),r}k(n){ri(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,l=0;for(const c of n)l===r.length?r.push(o=new Bn(this.O(Rn()),this.O(Rn()),this,this.options)):o=r[l],o._$AI(c),l++;l<r.length&&(this._$AR(o&&o._$AB.nextSibling,l),r.length=l)}_$AR(n=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);n!==this._$AB;){const o=n.nextSibling;n.remove(),n=o}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}}class pr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,r,o,l,c){this.type=1,this._$AH=Qt,this._$AN=void 0,this.element=n,this.name=r,this._$AM=l,this.options=c,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Qt}_$AI(n,r=this,o,l){const c=this.strings;let d=!1;if(c===void 0)n=pn(this,n,r,0),d=!$n(n)||n!==this._$AH&&n!==tn,d&&(this._$AH=n);else{const f=n;let g,b;for(n=c[0],g=0;g<c.length-1;g++)b=pn(this,f[o+g],r,g),b===tn&&(b=this._$AH[g]),d||=!$n(b)||b!==this._$AH[g],b===Qt?n=Qt:n!==Qt&&(n+=(b??"")+c[g+1]),this._$AH[g]=b}d&&!l&&this.j(n)}j(n){n===Qt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class fo extends pr{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===Qt?void 0:n}}class po extends pr{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==Qt)}}class mo extends pr{constructor(n,r,o,l,c){super(n,r,o,l,c),this.type=5}_$AI(n,r=this){if((n=pn(this,n,r,0)??Qt)===tn)return;const o=this._$AH,l=n===Qt&&o!==Qt||n.capture!==o.capture||n.once!==o.once||n.passive!==o.passive,c=n!==Qt&&(o===Qt||l);l&&this.element.removeEventListener(this.name,this,o),c&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}}class go{constructor(n,r,o){this.element=n,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(n){pn(this,n)}}const vo=ni.litHtmlPolyfillSupport;vo?.(In,Bn),(ni.litHtmlVersions??=[]).push("3.3.1");const yo=(a,n,r)=>{const o=r?.renderBefore??n;let l=o._$litPart$;if(l===void 0){const c=r?.renderBefore??null;o._$litPart$=l=new Bn(n.insertBefore(Rn(),c),c,void 0,r??{})}return l._$AI(a),l};const ii=globalThis;let Ee=class extends fn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=yo(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tn}};Ee._$litElement$=!0,Ee.finalized=!0,ii.litElementHydrateSupport?.({LitElement:Ee});const bo=ii.litElementPolyfillSupport;bo?.({LitElement:Ee});(ii.litElementVersions??=[]).push("4.2.1");const gn=a=>(n,r)=>{r!==void 0?r.addInitializer((()=>{customElements.define(a,n)})):customElements.define(a,n)};const wo={attribute:!0,type:String,converter:cr,reflect:!1,hasChanged:ei},_o=(a=wo,n,r)=>{const{kind:o,metadata:l}=r;let c=globalThis.litPropertyMetadata.get(l);if(c===void 0&&globalThis.litPropertyMetadata.set(l,c=new Map),o==="setter"&&((a=Object.create(a)).wrapped=!0),c.set(r.name,a),o==="accessor"){const{name:d}=r;return{set(f){const g=n.get.call(this);n.set.call(this,f),this.requestUpdate(d,g,a)},init(f){return f!==void 0&&this.C(d,void 0,a,f),f}}}if(o==="setter"){const{name:d}=r;return function(f){const g=this[d];n.call(this,f),this.requestUpdate(d,g,a)}}throw Error("Unsupported decorator location: "+o)};function te(a){return(n,r)=>typeof r=="object"?_o(a,n,r):((o,l,c)=>{const d=l.hasOwnProperty(c);return l.constructor.createProperty(c,o),d?Object.getOwnPropertyDescriptor(l,c):void 0})(a,n,r)}function Kt(a){return te({...a,state:!0,attribute:!1})}const xo=(a,n,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof n!="object"&&Object.defineProperty(a,n,r),r);function ko(a,n){return(r,o,l)=>{const c=d=>d.renderRoot?.querySelector(a)??null;return xo(r,o,{get(){return c(this)}})}}const So={CHILD:2},Co=a=>(...n)=>({_$litDirective$:a,values:n});class Eo{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,r,o){this._$Ct=n,this._$AM=r,this._$Ci=o}_$AS(n,r){return this.update(n,r)}update(n,r){return this.render(...r)}}class Yr extends Eo{constructor(n){if(super(n),this.it=Qt,n.type!==So.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(n){if(n===Qt||n==null)return this._t=void 0,this.it=n;if(n===tn)return n;if(typeof n!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(n===this.it)return this._t;this.it=n;const r=[n];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Yr.directiveName="unsafeHTML",Yr.resultType=1;const ue=Co(Yr);class Ao{constructor(){this.stream=null}async requestPermission(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("MediaDevices API not supported in this browser");try{return this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1,sampleRate:48e3,channelCount:1}}),this.stream}catch(n){throw n instanceof Error?new Error(`Microphone access denied: ${n.message}`):new Error("Microphone access denied")}}getStream(){return this.stream}release(){this.stream&&(this.stream.getTracks().forEach(n=>n.stop()),this.stream=null)}isActive(){return this.stream!==null&&this.stream.active}}class Po{constructor(){this.mediaRecorder=null,this.chunks=[]}async initialize(n){if(!window.MediaRecorder)throw new Error("MediaRecorder API not supported in this browser");const r=this.getSupportedMimeType();if(!r)throw new Error("No supported audio MIME type found");this.mediaRecorder=new MediaRecorder(n,{mimeType:r,audioBitsPerSecond:128e3}),this.mediaRecorder.ondataavailable=o=>{o.data.size>0&&(this.chunks.push(o.data),this.onDataAvailableCallback?.(o.data))},this.mediaRecorder.onstop=()=>{this.onStateChangeCallback?.("inactive")},this.mediaRecorder.onstart=()=>{this.onStateChangeCallback?.("recording")},this.mediaRecorder.onpause=()=>{this.onStateChangeCallback?.("paused")},this.mediaRecorder.onresume=()=>{this.onStateChangeCallback?.("recording")}}getSupportedMimeType(){return["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/mp4"].find(r=>MediaRecorder.isTypeSupported(r))||null}start(n=0){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");this.mediaRecorder.state!=="recording"&&(this.chunks=[],this.mediaRecorder.start(n))}async stop(){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");return this.mediaRecorder.state==="inactive"?new Blob(this.chunks,{type:this.mediaRecorder.mimeType}):new Promise(n=>{this.mediaRecorder.onstop=()=>{const r=new Blob(this.chunks,{type:this.mediaRecorder.mimeType});this.onStateChangeCallback?.("inactive"),n(r)},this.mediaRecorder.stop()})}pause(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.pause()}resume(){this.mediaRecorder?.state==="paused"&&this.mediaRecorder.resume()}getState(){return this.mediaRecorder?.state||"inactive"}getMimeType(){return this.mediaRecorder?.mimeType||""}onDataAvailable(n){this.onDataAvailableCallback=n}onStateChange(n){this.onStateChangeCallback=n}release(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.stop(),this.mediaRecorder=null,this.chunks=[]}}const Oo="modulepreload",To=function(a){return"/aidio/"+a},Vi={},Ro=function(n,r,o){let l=Promise.resolve();if(r&&r.length>0){let b=function(x){return Promise.all(x.map(w=>Promise.resolve(w).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};var d=b;document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=f?.nonce||f?.getAttribute("nonce");l=b(r.map(x=>{if(x=To(x),x in Vi)return;Vi[x]=!0;const w=x.endsWith(".css"),C=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${C}`))return;const v=document.createElement("link");if(v.rel=w?"stylesheet":Oo,w||(v.as="script"),v.crossOrigin="",v.href=x,g&&v.setAttribute("nonce",g),document.head.appendChild(v),w)return new Promise((E,y)=>{v.addEventListener("load",E),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${x}`)))})}))}function c(f){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=f,window.dispatchEvent(g),!g.defaultPrevented)throw f}return l.then(f=>{for(const g of f||[])g.status==="rejected"&&c(g.reason);return n().catch(c)})};var Re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ua(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var sr={exports:{}},$o=sr.exports,Gi;function Io(){return Gi||(Gi=1,(function(a,n){(function(r,o){a.exports=o()})($o,function(){var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,s){i.__proto__=s}||function(i,s){for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(i[u]=s[u])})(t,e)},o=function(){return(o=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var u in e=arguments[i])Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t}).apply(this,arguments)};function l(t,e,i){for(var s,u=0,p=e.length;u<p;u++)!s&&u in e||((s=s||Array.prototype.slice.call(e,0,u))[u]=e[u]);return t.concat(s||Array.prototype.slice.call(e))}var c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Re,d=Object.keys,f=Array.isArray;function g(t,e){return typeof e!="object"||d(e).forEach(function(i){t[i]=e[i]}),t}typeof Promise>"u"||c.Promise||(c.Promise=Promise);var b=Object.getPrototypeOf,x={}.hasOwnProperty;function w(t,e){return x.call(t,e)}function C(t,e){typeof e=="function"&&(e=e(b(t))),(typeof Reflect>"u"?d:Reflect.ownKeys)(e).forEach(function(i){E(t,i,e[i])})}var v=Object.defineProperty;function E(t,e,i,s){v(t,e,g(i&&w(i,"get")&&typeof i.get=="function"?{get:i.get,set:i.set,configurable:!0}:{value:i,configurable:!0,writable:!0},s))}function y(t){return{from:function(e){return t.prototype=Object.create(e.prototype),E(t.prototype,"constructor",t),{extend:C.bind(null,t.prototype)}}}}var A=Object.getOwnPropertyDescriptor,k=[].slice;function T(t,e,i){return k.call(t,e,i)}function z(t,e){return e(t)}function W(t){if(!t)throw new Error("Assertion Failed")}function K(t){c.setImmediate?setImmediate(t):setTimeout(t,0)}function nt(t,e){if(typeof e=="string"&&w(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var i=[],s=0,u=e.length;s<u;++s){var p=nt(t,e[s]);i.push(p)}return i}var _=e.indexOf(".");if(_!==-1){var O=t[e.substr(0,_)];return O==null?void 0:nt(O,e.substr(_+1))}}function X(t,e,i){if(t&&e!==void 0&&!("isFrozen"in Object&&Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){W(typeof i!="string"&&"length"in i);for(var s=0,u=e.length;s<u;++s)X(t,e[s],i[s])}else{var p,_,O=e.indexOf(".");O!==-1?(p=e.substr(0,O),(_=e.substr(O+1))===""?i===void 0?f(t)&&!isNaN(parseInt(p))?t.splice(p,1):delete t[p]:t[p]=i:X(O=!(O=t[p])||!w(t,p)?t[p]={}:O,_,i)):i===void 0?f(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=i}}function ct(t){var e,i={};for(e in t)w(t,e)&&(i[e]=t[e]);return i}var tt=[].concat;function pt(t){return tt.apply([],t)}var Et="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(pt([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(t){return c[t]}),Ot=new Set(Et.map(function(t){return c[t]})),$=null;function Q(t){return $=new WeakMap,t=(function e(i){if(!i||typeof i!="object")return i;var s=$.get(i);if(s)return s;if(f(i)){s=[],$.set(i,s);for(var u=0,p=i.length;u<p;++u)s.push(e(i[u]))}else if(Ot.has(i.constructor))s=i;else{var _,O=b(i);for(_ in s=O===Object.prototype?{}:Object.create(O),$.set(i,s),i)w(i,_)&&(s[_]=e(i[_]))}return s})(t),$=null,t}var m={}.toString;function it(t){return m.call(t).slice(8,-1)}var Tt=typeof Symbol<"u"?Symbol.iterator:"@@iterator",lt=typeof Tt=="symbol"?function(t){var e;return t!=null&&(e=t[Tt])&&e.apply(t)}:function(){return null};function Rt(t,e){return e=t.indexOf(e),0<=e&&t.splice(e,1),0<=e}var st={};function Pt(t){var e,i,s,u;if(arguments.length===1){if(f(t))return t.slice();if(this===st&&typeof t=="string")return[t];if(u=lt(t)){for(i=[];!(s=u.next()).done;)i.push(s.value);return i}if(t==null)return[t];if(typeof(e=t.length)!="number")return[t];for(i=new Array(e);e--;)i[e]=t[e];return i}for(e=arguments.length,i=new Array(e);e--;)i[e]=arguments[e];return i}var G=typeof Symbol<"u"?function(t){return t[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ht=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],we=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ht),V={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function At(t,e){this.name=t,this.message=e}function xt(t,e){return t+". Errors: "+Object.keys(e).map(function(i){return e[i].toString()}).filter(function(i,s,u){return u.indexOf(i)===s}).join(`
`)}function vt(t,e,i,s){this.failures=e,this.failedKeys=s,this.successCount=i,this.message=xt(t,e)}function Lt(t,e){this.name="BulkError",this.failures=Object.keys(e).map(function(i){return e[i]}),this.failuresByPos=e,this.message=xt(t,this.failures)}y(At).from(Error).extend({toString:function(){return this.name+": "+this.message}}),y(vt).from(At),y(Lt).from(At);var Jt=we.reduce(function(t,e){return t[e]=e+"Error",t},{}),jt=At,mt=we.reduce(function(t,e){var i=e+"Error";function s(u,p){this.name=i,u?typeof u=="string"?(this.message="".concat(u).concat(p?`
 `+p:""),this.inner=p||null):typeof u=="object"&&(this.message="".concat(u.name," ").concat(u.message),this.inner=u):(this.message=V[e]||i,this.inner=null)}return y(s).from(jt),t[e]=s,t},{});mt.Syntax=SyntaxError,mt.Type=TypeError,mt.Range=RangeError;var Gt=ht.reduce(function(t,e){return t[e+"Error"]=mt[e],t},{}),qt=we.reduce(function(t,e){return["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=mt[e]),t},{});function Bt(){}function ae(t){return t}function h(t,e){return t==null||t===ae?e:function(i){return e(t(i))}}function et(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Y(t,e){return t===Bt?e:function(){var i=t.apply(this,arguments);i!==void 0&&(arguments[0]=i);var s=this.onsuccess,u=this.onerror;this.onsuccess=null,this.onerror=null;var p=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?et(s,this.onsuccess):s),u&&(this.onerror=this.onerror?et(u,this.onerror):u),p!==void 0?p:i}}function P(t,e){return t===Bt?e:function(){t.apply(this,arguments);var i=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),i&&(this.onsuccess=this.onsuccess?et(i,this.onsuccess):i),s&&(this.onerror=this.onerror?et(s,this.onerror):s)}}function S(t,e){return t===Bt?e:function(i){var s=t.apply(this,arguments);g(i,s);var u=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,i=e.apply(this,arguments),u&&(this.onsuccess=this.onsuccess?et(u,this.onsuccess):u),p&&(this.onerror=this.onerror?et(p,this.onerror):p),s===void 0?i===void 0?void 0:i:g(s,i)}}function N(t,e){return t===Bt?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ot(t,e){return t===Bt?e:function(){var i=t.apply(this,arguments);if(i&&typeof i.then=="function"){for(var s=this,u=arguments.length,p=new Array(u);u--;)p[u]=arguments[u];return i.then(function(){return e.apply(s,p)})}return e.apply(this,arguments)}}qt.ModifyError=vt,qt.DexieError=At,qt.BulkError=Lt;var at=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function H(t){at=t}var ut={},kt=100,Et=typeof Promise>"u"?[]:(function(){var t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,b(t),t];var e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,b(e),t]})(),ht=Et[0],we=Et[1],Et=Et[2],we=we&&we.then,Nt=ht&&ht.constructor,zt=!!Et,ne=function(t,e){Ie.push([t,e]),he&&(queueMicrotask(Aa),he=!1)},Ae=!0,he=!0,me=[],Wt=[],$e=ae,be={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Bt,pgp:!1,env:{},finalize:Bt},St=be,Ie=[],Pe=0,en=[];function _t(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var e=this._PSD=St;if(typeof t!="function"){if(t!==ut)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Be(this,this._value))}this._state=null,this._value=null,++e.ref,(function i(s,u){try{u(function(p){if(s._state===null){if(p===s)throw new TypeError("A promise cannot be resolved with itself.");var _=s._lib&&rn();p&&typeof p.then=="function"?i(s,function(O,I){p instanceof _t?p._then(O,I):p.then(O,I)}):(s._state=!0,s._value=p,oi(s)),_&&an()}},Be.bind(null,s))}catch(p){Be(s,p)}})(this,t)}var nn={get:function(){var t=St,e=Fn;function i(s,u){var p=this,_=!t.global&&(t!==St||e!==Fn),O=_&&!Me(),I=new _t(function(D,F){mr(p,new De(li(s,t,_,O),li(u,t,_,O),D,F,t))});return this._consoleTask&&(I._consoleTask=this._consoleTask),I}return i.prototype=ut,i},set:function(t){E(this,"then",t&&t.prototype===ut?nn:{get:function(){return t},set:nn.set})}};function De(t,e,i,s,u){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=i,this.reject=s,this.psd=u}function Be(t,e){var i,s;Wt.push(e),t._state===null&&(i=t._lib&&rn(),e=$e(e),t._state=!1,t._value=e,s=t,me.some(function(u){return u._value===s._value})||me.push(s),oi(t),i&&an())}function oi(t){var e=t._listeners;t._listeners=[];for(var i=0,s=e.length;i<s;++i)mr(t,e[i]);var u=t._PSD;--u.ref||u.finalize(),Pe===0&&(++Pe,ne(function(){--Pe==0&&gr()},[]))}function mr(t,e){if(t._state!==null){var i=t._state?e.onFulfilled:e.onRejected;if(i===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Pe,ne(Ea,[i,t,e])}else t._listeners.push(e)}function Ea(t,e,i){try{var s,u=e._value;!e._state&&Wt.length&&(Wt=[]),s=at&&e._consoleTask?e._consoleTask.run(function(){return t(u)}):t(u),e._state||Wt.indexOf(u)!==-1||(function(p){for(var _=me.length;_;)if(me[--_]._value===p._value)return me.splice(_,1)})(e),i.resolve(s)}catch(p){i.reject(p)}finally{--Pe==0&&gr(),--i.psd.ref||i.psd.finalize()}}function Aa(){qe(be,function(){rn()&&an()})}function rn(){var t=Ae;return he=Ae=!1,t}function an(){var t,e,i;do for(;0<Ie.length;)for(t=Ie,Ie=[],i=t.length,e=0;e<i;++e){var s=t[e];s[0].apply(null,s[1])}while(0<Ie.length);he=Ae=!0}function gr(){var t=me;me=[],t.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)});for(var e=en.slice(0),i=e.length;i;)e[--i]()}function zn(t){return new _t(ut,!1,t)}function Zt(t,e){var i=St;return function(){var s=rn(),u=St;try{return je(i,!0),t.apply(this,arguments)}catch(p){e&&e(p)}finally{je(u,!1),s&&an()}}}C(_t.prototype,{then:nn,_then:function(t,e){mr(this,new De(null,null,t,e,St))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=t,i=arguments[1];return typeof e=="function"?this.then(null,function(s){return(s instanceof e?i:zn)(s)}):this.then(null,function(s){return(s&&s.name===e?i:zn)(s)})},finally:function(t){return this.then(function(e){return _t.resolve(t()).then(function(){return e})},function(e){return _t.resolve(t()).then(function(){return zn(e)})})},timeout:function(t,e){var i=this;return t<1/0?new _t(function(s,u){var p=setTimeout(function(){return u(new mt.Timeout(e))},t);i.then(s,u).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&E(_t.prototype,Symbol.toStringTag,"Dexie.Promise"),be.env=si(),C(_t,{all:function(){var t=Pt.apply(null,arguments).map(Nn);return new _t(function(e,i){t.length===0&&e([]);var s=t.length;t.forEach(function(u,p){return _t.resolve(u).then(function(_){t[p]=_,--s||e(t)},i)})})},resolve:function(t){return t instanceof _t?t:t&&typeof t.then=="function"?new _t(function(e,i){t.then(e,i)}):new _t(ut,!0,t)},reject:zn,race:function(){var t=Pt.apply(null,arguments).map(Nn);return new _t(function(e,i){t.map(function(s){return _t.resolve(s).then(e,i)})})},PSD:{get:function(){return St},set:function(t){return St=t}},totalEchoes:{get:function(){return Fn}},newPSD:ze,usePSD:qe,scheduler:{get:function(){return ne},set:function(t){ne=t}},rejectionMapper:{get:function(){return $e},set:function(t){$e=t}},follow:function(t,e){return new _t(function(i,s){return ze(function(u,p){var _=St;_.unhandleds=[],_.onunhandled=p,_.finalize=et(function(){var O,I=this;O=function(){I.unhandleds.length===0?u():p(I.unhandleds[0])},en.push(function D(){O(),en.splice(en.indexOf(D),1)}),++Pe,ne(function(){--Pe==0&&gr()},[])},_.finalize),t()},e,i,s)})}}),Nt&&(Nt.allSettled&&E(_t,"allSettled",function(){var t=Pt.apply(null,arguments).map(Nn);return new _t(function(e){t.length===0&&e([]);var i=t.length,s=new Array(i);t.forEach(function(u,p){return _t.resolve(u).then(function(_){return s[p]={status:"fulfilled",value:_}},function(_){return s[p]={status:"rejected",reason:_}}).then(function(){return--i||e(s)})})})}),Nt.any&&typeof AggregateError<"u"&&E(_t,"any",function(){var t=Pt.apply(null,arguments).map(Nn);return new _t(function(e,i){t.length===0&&i(new AggregateError([]));var s=t.length,u=new Array(s);t.forEach(function(p,_){return _t.resolve(p).then(function(O){return e(O)},function(O){u[_]=O,--s||i(new AggregateError(u))})})})}),Nt.withResolvers&&(_t.withResolvers=Nt.withResolvers));var re={awaits:0,echoes:0,id:0},Pa=0,Mn=[],jn=0,Fn=0,Oa=0;function ze(t,e,i,s){var u=St,p=Object.create(u);return p.parent=u,p.ref=0,p.global=!1,p.id=++Oa,be.env,p.env=zt?{Promise:_t,PromiseProp:{value:_t,configurable:!0,writable:!0},all:_t.all,race:_t.race,allSettled:_t.allSettled,any:_t.any,resolve:_t.resolve,reject:_t.reject}:{},e&&g(p,e),++u.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},s=qe(p,t,i,s),p.ref===0&&p.finalize(),s}function on(){return re.id||(re.id=++Pa),++re.awaits,re.echoes+=kt,re.id}function Me(){return!!re.awaits&&(--re.awaits==0&&(re.id=0),re.echoes=re.awaits*kt,!0)}function Nn(t){return re.echoes&&t&&t.constructor===Nt?(on(),t.then(function(e){return Me(),e},function(e){return Me(),Yt(e)})):t}function Ta(){var t=Mn[Mn.length-1];Mn.pop(),je(t,!1)}function je(t,e){var i,s=St;(e?!re.echoes||jn++&&t===St:!jn||--jn&&t===St)||queueMicrotask(e?function(u){++Fn,re.echoes&&--re.echoes!=0||(re.echoes=re.awaits=re.id=0),Mn.push(St),je(u,!0)}.bind(null,t):Ta),t!==St&&(St=t,s===be&&(be.env=si()),zt&&(i=be.env.Promise,e=t.env,(s.global||t.global)&&(Object.defineProperty(c,"Promise",e.PromiseProp),i.all=e.all,i.race=e.race,i.resolve=e.resolve,i.reject=e.reject,e.allSettled&&(i.allSettled=e.allSettled),e.any&&(i.any=e.any))))}function si(){var t=c.Promise;return zt?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(c,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject}:{}}function qe(t,e,i,s,u){var p=St;try{return je(t,!0),e(i,s,u)}finally{je(p,!1)}}function li(t,e,i,s){return typeof t!="function"?t:function(){var u=St;i&&on(),je(e,!0);try{return t.apply(this,arguments)}finally{je(u,!1),s&&queueMicrotask(Me)}}}function vr(t){Promise===Nt&&re.echoes===0?jn===0?t():enqueueNativeMicroTask(t):setTimeout(t,0)}(""+we).indexOf("[native code]")===-1&&(on=Me=Bt);var Yt=_t.reject,We="￿",Oe="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ci="String expected.",sn=[],Un="__dbnames",yr="readonly",br="readwrite";function He(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}var ui={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ln(t){return typeof t!="string"||/\./.test(t)?function(e){return e}:function(e){return e[t]===void 0&&t in e&&delete(e=Q(e))[t],e}}function di(){throw mt.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Ft(t,e){try{var i=hi(t),s=hi(e);if(i!==s)return i==="Array"?1:s==="Array"?-1:i==="binary"?1:s==="binary"?-1:i==="string"?1:s==="string"?-1:i==="Date"?1:s!=="Date"?NaN:-1;switch(i){case"number":case"Date":case"string":return e<t?1:t<e?-1:0;case"binary":return(function(u,p){for(var _=u.length,O=p.length,I=_<O?_:O,D=0;D<I;++D)if(u[D]!==p[D])return u[D]<p[D]?-1:1;return _===O?0:_<O?-1:1})(fi(t),fi(e));case"Array":return(function(u,p){for(var _=u.length,O=p.length,I=_<O?_:O,D=0;D<I;++D){var F=Ft(u[D],p[D]);if(F!==0)return F}return _===O?0:_<O?-1:1})(t,e)}}catch{}return NaN}function hi(t){var e=typeof t;return e!="object"?e:ArrayBuffer.isView(t)?"binary":(t=it(t),t==="ArrayBuffer"?"binary":t)}function fi(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function Kn(t,e,i){var s=t.schema.yProps;return s?(e&&0<i.numFailures&&(e=e.filter(function(u,p){return!i.failures[p]})),Promise.all(s.map(function(u){return u=u.updatesTable,e?t.db.table(u).where("k").anyOf(e).delete():t.db.table(u).clear()})).then(function(){return i})):i}var yn=(pi.prototype.execute=function(t){var e=this["@@propmod"];if(e.add!==void 0){var i=e.add;if(f(i))return l(l([],f(t)?t:[],!0),i).sort();if(typeof i=="number")return(Number(t)||0)+i;if(typeof i=="bigint")try{return BigInt(t)+i}catch{return BigInt(0)+i}throw new TypeError("Invalid term ".concat(i))}if(e.remove!==void 0){var s=e.remove;if(f(s))return f(t)?t.filter(function(u){return!s.includes(u)}).sort():[];if(typeof s=="number")return Number(t)-s;if(typeof s=="bigint")try{return BigInt(t)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return i=(i=e.replacePrefix)===null||i===void 0?void 0:i[0],i&&typeof t=="string"&&t.startsWith(i)?e.replacePrefix[1]+t.substring(i.length):t},pi);function pi(t){this["@@propmod"]=t}function mi(t,e){for(var i=d(e),s=i.length,u=!1,p=0;p<s;++p){var _=i[p],O=e[_],I=nt(t,_);O instanceof yn?(X(t,_,O.execute(I)),u=!0):I!==O&&(X(t,_,O),u=!0)}return u}var gi=(Ht.prototype._trans=function(t,e,i){var s=this._tx||St.trans,u=this.name,p=at&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function _(D,F,R){if(!R.schema[u])throw new mt.NotFound("Table "+u+" not part of transaction");return e(R.idbtrans,R)}var O=rn();try{var I=s&&s.db._novip===this.db._novip?s===St.trans?s._promise(t,_,i):ze(function(){return s._promise(t,_,i)},{trans:s,transless:St.transless||St}):(function D(F,R,L,B){if(F.idbdb&&(F._state.openComplete||St.letThrough||F._vip)){var M=F._createTransaction(R,L,F._dbSchema);try{M.create(),F._state.PR1398_maxLoop=3}catch(j){return j.name===Jt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return D(F,R,L,B)})):Yt(j)}return M._promise(R,function(j,U){return ze(function(){return St.trans=M,B(j,U,M)})}).then(function(j){if(R==="readwrite")try{M.idbtrans.commit()}catch{}return R==="readonly"?j:M._completion.then(function(){return j})})}if(F._state.openComplete)return Yt(new mt.DatabaseClosed(F._state.dbOpenError));if(!F._state.isBeingOpened){if(!F._state.autoOpen)return Yt(new mt.DatabaseClosed);F.open().catch(Bt)}return F._state.dbReadyPromise.then(function(){return D(F,R,L,B)})})(this.db,t,[this.name],_);return p&&(I._consoleTask=p,I=I.catch(function(D){return console.trace(D),Yt(D)})),I}finally{O&&an()}},Ht.prototype.get=function(t,e){var i=this;return t&&t.constructor===Object?this.where(t).first(e):t==null?Yt(new mt.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return i.core.get({trans:s,key:t}).then(function(u){return i.hook.reading.fire(u)})}).then(e)},Ht.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(f(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var e=d(t);if(e.length===1)return this.where(e[0]).equals(t[e[0]]);var i=this.schema.indexes.concat(this.schema.primKey).filter(function(O){if(O.compound&&e.every(function(D){return 0<=O.keyPath.indexOf(D)})){for(var I=0;I<e.length;++I)if(e.indexOf(O.keyPath[I])===-1)return!1;return!0}return!1}).sort(function(O,I){return O.keyPath.length-I.keyPath.length})[0];if(i&&this.db._maxKey!==We){var p=i.keyPath.slice(0,e.length);return this.where(p).equals(p.map(function(I){return t[I]}))}!i&&at&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(e.join("+"),"]"));var s=this.schema.idxByName;function u(O,I){return Ft(O,I)===0}var _=e.reduce(function(R,I){var D=R[0],F=R[1],R=s[I],L=t[I];return[D||R,D||!R?He(F,R&&R.multi?function(B){return B=nt(B,I),f(B)&&B.some(function(M){return u(L,M)})}:function(B){return u(L,nt(B,I))}):F]},[null,null]),p=_[0],_=_[1];return p?this.where(p.name).equals(t[p.keyPath]).filter(_):i?this.filter(_):this.where(e).equals("")},Ht.prototype.filter=function(t){return this.toCollection().and(t)},Ht.prototype.count=function(t){return this.toCollection().count(t)},Ht.prototype.offset=function(t){return this.toCollection().offset(t)},Ht.prototype.limit=function(t){return this.toCollection().limit(t)},Ht.prototype.each=function(t){return this.toCollection().each(t)},Ht.prototype.toArray=function(t){return this.toCollection().toArray(t)},Ht.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ht.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,f(t)?"[".concat(t.join("+"),"]"):t))},Ht.prototype.reverse=function(){return this.toCollection().reverse()},Ht.prototype.mapToClass=function(t){var e,i=this.db,s=this.name;function u(){return e!==null&&e.apply(this,arguments)||this}(this.schema.mappedClass=t).prototype instanceof di&&((function(I,D){if(typeof D!="function"&&D!==null)throw new TypeError("Class extends value "+String(D)+" is not a constructor or null");function F(){this.constructor=I}r(I,D),I.prototype=D===null?Object.create(D):(F.prototype=D.prototype,new F)})(u,e=t),Object.defineProperty(u.prototype,"db",{get:function(){return i},enumerable:!1,configurable:!0}),u.prototype.table=function(){return s},t=u);for(var p=new Set,_=t.prototype;_;_=b(_))Object.getOwnPropertyNames(_).forEach(function(I){return p.add(I)});function O(I){if(!I)return I;var D,F=Object.create(t.prototype);for(D in I)if(!p.has(D))try{F[D]=I[D]}catch{}return F}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=O,this.hook("reading",O),t},Ht.prototype.defineClass=function(){return this.mapToClass(function(t){g(this,t)})},Ht.prototype.add=function(t,e){var i=this,s=this.schema.primKey,u=s.auto,p=s.keyPath,_=t;return p&&u&&(_=Ln(p)(t)),this._trans("readwrite",function(O){return i.core.mutate({trans:O,type:"add",keys:e!=null?[e]:null,values:[_]})}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):O.lastResult}).then(function(O){if(p)try{X(t,p,O)}catch{}return O})},Ht.prototype.upsert=function(t,e){var i=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(u){return i.core.get({trans:u,key:t}).then(function(p){var _=p??{};return mi(_,e),s&&X(_,s,t),i.core.mutate({trans:u,type:"put",values:[_],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[e]}}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):!!p})})})},Ht.prototype.update=function(t,e){return typeof t!="object"||f(t)?this.where(":id").equals(t).modify(e):(t=nt(t,this.schema.primKey.keyPath),t===void 0?Yt(new mt.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(t).modify(e))},Ht.prototype.put=function(t,e){var i=this,s=this.schema.primKey,u=s.auto,p=s.keyPath,_=t;return p&&u&&(_=Ln(p)(t)),this._trans("readwrite",function(O){return i.core.mutate({trans:O,type:"put",values:[_],keys:e!=null?[e]:null})}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):O.lastResult}).then(function(O){if(p)try{X(t,p,O)}catch{}return O})},Ht.prototype.delete=function(t){var e=this;return this._trans("readwrite",function(i){return e.core.mutate({trans:i,type:"delete",keys:[t]}).then(function(s){return Kn(e,[t],s)}).then(function(s){return s.numFailures?_t.reject(s.failures[0]):void 0})})},Ht.prototype.clear=function(){var t=this;return this._trans("readwrite",function(e){return t.core.mutate({trans:e,type:"deleteRange",range:ui}).then(function(i){return Kn(t,null,i)})}).then(function(e){return e.numFailures?_t.reject(e.failures[0]):void 0})},Ht.prototype.bulkGet=function(t){var e=this;return this._trans("readonly",function(i){return e.core.getMany({keys:t,trans:i}).then(function(s){return s.map(function(u){return e.hook.reading.fire(u)})})})},Ht.prototype.bulkAdd=function(t,e,i){var s=this,u=Array.isArray(e)?e:void 0,p=(i=i||(u?void 0:e))?i.allKeys:void 0;return this._trans("readwrite",function(_){var D=s.schema.primKey,O=D.auto,D=D.keyPath;if(D&&u)throw new mt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(u&&u.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var I=t.length,D=D&&O?t.map(Ln(D)):t;return s.core.mutate({trans:_,type:"add",keys:u,values:D,wantResults:p}).then(function(M){var R=M.numFailures,L=M.results,B=M.lastResult,M=M.failures;if(R===0)return p?L:B;throw new Lt("".concat(s.name,".bulkAdd(): ").concat(R," of ").concat(I," operations failed"),M)})})},Ht.prototype.bulkPut=function(t,e,i){var s=this,u=Array.isArray(e)?e:void 0,p=(i=i||(u?void 0:e))?i.allKeys:void 0;return this._trans("readwrite",function(_){var D=s.schema.primKey,O=D.auto,D=D.keyPath;if(D&&u)throw new mt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(u&&u.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var I=t.length,D=D&&O?t.map(Ln(D)):t;return s.core.mutate({trans:_,type:"put",keys:u,values:D,wantResults:p}).then(function(M){var R=M.numFailures,L=M.results,B=M.lastResult,M=M.failures;if(R===0)return p?L:B;throw new Lt("".concat(s.name,".bulkPut(): ").concat(R," of ").concat(I," operations failed"),M)})})},Ht.prototype.bulkUpdate=function(t){var e=this,i=this.core,s=t.map(function(_){return _.key}),u=t.map(function(_){return _.changes}),p=[];return this._trans("readwrite",function(_){return i.getMany({trans:_,keys:s,cache:"clone"}).then(function(O){var I=[],D=[];t.forEach(function(R,L){var B=R.key,M=R.changes,j=O[L];if(j){for(var U=0,q=Object.keys(M);U<q.length;U++){var Z=q[U],J=M[Z];if(Z===e.schema.primKey.keyPath){if(Ft(J,B)!==0)throw new mt.Constraint("Cannot update primary key in bulkUpdate()")}else X(j,Z,J)}p.push(L),I.push(B),D.push(j)}});var F=I.length;return i.mutate({trans:_,type:"put",keys:I,values:D,updates:{keys:s,changeSpecs:u}}).then(function(R){var L=R.numFailures,B=R.failures;if(L===0)return F;for(var M=0,j=Object.keys(B);M<j.length;M++){var U,q=j[M],Z=p[Number(q)];Z!=null&&(U=B[q],delete B[q],B[Z]=U)}throw new Lt("".concat(e.name,".bulkUpdate(): ").concat(L," of ").concat(F," operations failed"),B)})})})},Ht.prototype.bulkDelete=function(t){var e=this,i=t.length;return this._trans("readwrite",function(s){return e.core.mutate({trans:s,type:"delete",keys:t}).then(function(u){return Kn(e,t,u)})}).then(function(_){var u=_.numFailures,p=_.lastResult,_=_.failures;if(u===0)return p;throw new Lt("".concat(e.name,".bulkDelete(): ").concat(u," of ").concat(i," operations failed"),_)})},Ht);function Ht(){}function bn(t){function e(_,O){if(O){for(var I=arguments.length,D=new Array(I-1);--I;)D[I-1]=arguments[I];return i[_].subscribe.apply(null,D),t}if(typeof _=="string")return i[_]}var i={};e.addEventType=p;for(var s=1,u=arguments.length;s<u;++s)p(arguments[s]);return e;function p(_,O,I){if(typeof _!="object"){var D;O=O||N;var F={subscribers:[],fire:I=I||Bt,subscribe:function(R){F.subscribers.indexOf(R)===-1&&(F.subscribers.push(R),F.fire=O(F.fire,R))},unsubscribe:function(R){F.subscribers=F.subscribers.filter(function(L){return L!==R}),F.fire=F.subscribers.reduce(O,I)}};return i[_]=e[_]=F}d(D=_).forEach(function(R){var L=D[R];if(f(L))p(R,D[R][0],D[R][1]);else{if(L!=="asap")throw new mt.InvalidArgument("Invalid event config");var B=p(R,ae,function(){for(var M=arguments.length,j=new Array(M);M--;)j[M]=arguments[M];B.subscribers.forEach(function(U){K(function(){U.apply(null,j)})})})}})}}function wn(t,e){return y(e).from({prototype:t}),e}function ln(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function wr(t,e){t.filter=He(t.filter,e)}function _r(t,e,i){var s=t.replayFilter;t.replayFilter=s?function(){return He(s(),e())}:e,t.justLimit=i&&!s}function qn(t,e){if(t.isPrimKey)return e.primaryKey;var i=e.getIndexByKeyPath(t.index);if(!i)throw new mt.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return i}function vi(t,e,i){var s=qn(t,e.schema);return e.openCursor({trans:i,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:s,range:t.range}})}function Wn(t,e,i,s){var u=t.replayFilter?He(t.filter,t.replayFilter()):t.filter;if(t.or){var p={},_=function(O,I,D){var F,R;u&&!u(I,D,function(L){return I.stop(L)},function(L){return I.fail(L)})||((R=""+(F=I.primaryKey))=="[object ArrayBuffer]"&&(R=""+new Uint8Array(F)),w(p,R)||(p[R]=!0,e(O,I,D)))};return Promise.all([t.or._iterate(_,i),yi(vi(t,s,i),t.algorithm,_,!t.keysOnly&&t.valueMapper)])}return yi(vi(t,s,i),He(t.algorithm,u),e,!t.keysOnly&&t.valueMapper)}function yi(t,e,i,s){var u=Zt(s?function(p,_,O){return i(s(p),_,O)}:i);return t.then(function(p){if(p)return p.start(function(){var _=function(){return p.continue()};e&&!e(p,function(O){return _=O},function(O){p.stop(O),_=Bt},function(O){p.fail(O),_=Bt})||u(p.value,p,function(O){return _=O}),_()})})}var Ra=(Ut.prototype._read=function(t,e){var i=this._ctx;return i.error?i.table._trans(null,Yt.bind(null,i.error)):i.table._trans("readonly",t).then(e)},Ut.prototype._write=function(t){var e=this._ctx;return e.error?e.table._trans(null,Yt.bind(null,e.error)):e.table._trans("readwrite",t,"locked")},Ut.prototype._addAlgorithm=function(t){var e=this._ctx;e.algorithm=He(e.algorithm,t)},Ut.prototype._iterate=function(t,e){return Wn(this._ctx,t,e,this._ctx.table.core)},Ut.prototype.clone=function(t){var e=Object.create(this.constructor.prototype),i=Object.create(this._ctx);return t&&g(i,t),e._ctx=i,e},Ut.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ut.prototype.each=function(t){var e=this._ctx;return this._read(function(i){return Wn(e,t,i,e.table.core)})},Ut.prototype.count=function(t){var e=this;return this._read(function(i){var s=e._ctx,u=s.table.core;if(ln(s,!0))return u.count({trans:i,query:{index:qn(s,u.schema),range:s.range}}).then(function(_){return Math.min(_,s.limit)});var p=0;return Wn(s,function(){return++p,!1},i,u).then(function(){return p})}).then(t)},Ut.prototype.sortBy=function(t,e){var i=t.split(".").reverse(),s=i[0],u=i.length-1;function p(I,D){return D?p(I[i[D]],D-1):I[s]}var _=this._ctx.dir==="next"?1:-1;function O(I,D){return Ft(p(I,u),p(D,u))*_}return this.toArray(function(I){return I.sort(O)}).then(e)},Ut.prototype.toArray=function(t){var e=this;return this._read(function(i){var s=e._ctx;if(s.dir==="next"&&ln(s,!0)&&0<s.limit){var u=s.valueMapper,p=qn(s,s.table.core.schema);return s.table.core.query({trans:i,limit:s.limit,values:!0,query:{index:p,range:s.range}}).then(function(O){return O=O.result,u?O.map(u):O})}var _=[];return Wn(s,function(O){return _.push(O)},i,s.table.core).then(function(){return _})},t)},Ut.prototype.offset=function(t){var e=this._ctx;return t<=0||(e.offset+=t,ln(e)?_r(e,function(){var i=t;return function(s,u){return i===0||(i===1?--i:u(function(){s.advance(i),i=0}),!1)}}):_r(e,function(){var i=t;return function(){return--i<0}})),this},Ut.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),_r(this._ctx,function(){var e=t;return function(i,s,u){return--e<=0&&s(u),0<=e}},!0),this},Ut.prototype.until=function(t,e){return wr(this._ctx,function(i,s,u){return!t(i.value)||(s(u),e)}),this},Ut.prototype.first=function(t){return this.limit(1).toArray(function(e){return e[0]}).then(t)},Ut.prototype.last=function(t){return this.reverse().first(t)},Ut.prototype.filter=function(t){var e;return wr(this._ctx,function(i){return t(i.value)}),(e=this._ctx).isMatch=He(e.isMatch,t),this},Ut.prototype.and=function(t){return this.filter(t)},Ut.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},Ut.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ut.prototype.desc=function(){return this.reverse()},Ut.prototype.eachKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(i,s){t(s.key,s)})},Ut.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},Ut.prototype.eachPrimaryKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(i,s){t(s.primaryKey,s)})},Ut.prototype.keys=function(t){var e=this._ctx;e.keysOnly=!e.isMatch;var i=[];return this.each(function(s,u){i.push(u.key)}).then(function(){return i}).then(t)},Ut.prototype.primaryKeys=function(t){var e=this._ctx;if(e.dir==="next"&&ln(e,!0)&&0<e.limit)return this._read(function(s){var u=qn(e,e.table.core.schema);return e.table.core.query({trans:s,values:!1,limit:e.limit,query:{index:u,range:e.range}})}).then(function(s){return s.result}).then(t);e.keysOnly=!e.isMatch;var i=[];return this.each(function(s,u){i.push(u.primaryKey)}).then(function(){return i}).then(t)},Ut.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},Ut.prototype.firstKey=function(t){return this.limit(1).keys(function(e){return e[0]}).then(t)},Ut.prototype.lastKey=function(t){return this.reverse().firstKey(t)},Ut.prototype.distinct=function(){var t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];if(!t||!t.multi)return this;var e={};return wr(this._ctx,function(u){var s=u.primaryKey.toString(),u=w(e,s);return e[s]=!0,!u}),this},Ut.prototype.modify=function(t){var e=this,i=this._ctx;return this._write(function(s){var u=typeof t=="function"?t:function(j){return mi(j,t)},p=i.table.core,D=p.schema.primaryKey,_=D.outbound,O=D.extractKey,I=200,D=e.db._options.modifyChunkSize;D&&(I=typeof D=="object"?D[p.name]||D["*"]||200:D);function F(j,Z){var q=Z.failures,Z=Z.numFailures;L+=j-Z;for(var J=0,rt=d(q);J<rt.length;J++){var ft=rt[J];R.push(q[ft])}}var R=[],L=0,B=[],M=t===bi;return e.clone().primaryKeys().then(function(j){function U(Z){var J=Math.min(I,j.length-Z),rt=j.slice(Z,Z+J);return(M?Promise.resolve([]):p.getMany({trans:s,keys:rt,cache:"immutable"})).then(function(ft){var bt=[],dt=[],gt=_?[]:null,wt=M?rt:[];if(!M)for(var yt=0;yt<J;++yt){var Ct=ft[yt],It={value:Q(Ct),primKey:j[Z+yt]};u.call(It,It.value,It)!==!1&&(It.value==null?wt.push(j[Z+yt]):_||Ft(O(Ct),O(It.value))===0?(dt.push(It.value),_&&gt.push(j[Z+yt])):(wt.push(j[Z+yt]),bt.push(It.value)))}return Promise.resolve(0<bt.length&&p.mutate({trans:s,type:"add",values:bt}).then(function(Dt){for(var Mt in Dt.failures)wt.splice(parseInt(Mt),1);F(bt.length,Dt)})).then(function(){return(0<dt.length||q&&typeof t=="object")&&p.mutate({trans:s,type:"put",keys:gt,values:dt,criteria:q,changeSpec:typeof t!="function"&&t,isAdditionalChunk:0<Z}).then(function(Dt){return F(dt.length,Dt)})}).then(function(){return(0<wt.length||q&&M)&&p.mutate({trans:s,type:"delete",keys:wt,criteria:q,isAdditionalChunk:0<Z}).then(function(Dt){return Kn(i.table,wt,Dt)}).then(function(Dt){return F(wt.length,Dt)})}).then(function(){return j.length>Z+J&&U(Z+I)})})}var q=ln(i)&&i.limit===1/0&&(typeof t!="function"||M)&&{index:i.index,range:i.range};return U(0).then(function(){if(0<R.length)throw new vt("Error modifying one or more objects",R,L,B);return j.length})})})},Ut.prototype.delete=function(){var t=this._ctx,e=t.range;return!ln(t)||t.table.schema.yProps||!t.isPrimKey&&e.type!==3?this.modify(bi):this._write(function(i){var s=t.table.core.schema.primaryKey,u=e;return t.table.core.count({trans:i,query:{index:s,range:u}}).then(function(p){return t.table.core.mutate({trans:i,type:"deleteRange",range:u}).then(function(I){var O=I.failures,I=I.numFailures;if(I)throw new vt("Could not delete some values",Object.keys(O).map(function(D){return O[D]}),p-I);return p-I})})})},Ut);function Ut(){}var bi=function(t,e){return e.value=null};function $a(t,e){return t<e?-1:t===e?0:1}function Ia(t,e){return e<t?-1:t===e?0:1}function ge(t,e,i){return t=t instanceof _i?new t.Collection(t):t,t._ctx.error=new(i||TypeError)(e),t}function cn(t){return new t.Collection(t,function(){return wi("")}).limit(0)}function Hn(t,e,i,s){var u,p,_,O,I,D,F,R=i.length;if(!i.every(function(M){return typeof M=="string"}))return ge(t,ci);function L(M){u=M==="next"?function(U){return U.toUpperCase()}:function(U){return U.toLowerCase()},p=M==="next"?function(U){return U.toLowerCase()}:function(U){return U.toUpperCase()},_=M==="next"?$a:Ia;var j=i.map(function(U){return{lower:p(U),upper:u(U)}}).sort(function(U,q){return _(U.lower,q.lower)});O=j.map(function(U){return U.upper}),I=j.map(function(U){return U.lower}),F=(D=M)==="next"?"":s}L("next"),t=new t.Collection(t,function(){return Fe(O[0],I[R-1]+s)}),t._ondirectionchange=function(M){L(M)};var B=0;return t._addAlgorithm(function(M,j,U){var q=M.key;if(typeof q!="string")return!1;var Z=p(q);if(e(Z,I,B))return!0;for(var J=null,rt=B;rt<R;++rt){var ft=(function(bt,dt,gt,wt,yt,Ct){for(var It=Math.min(bt.length,wt.length),Dt=-1,Mt=0;Mt<It;++Mt){var ve=dt[Mt];if(ve!==wt[Mt])return yt(bt[Mt],gt[Mt])<0?bt.substr(0,Mt)+gt[Mt]+gt.substr(Mt+1):yt(bt[Mt],wt[Mt])<0?bt.substr(0,Mt)+wt[Mt]+gt.substr(Mt+1):0<=Dt?bt.substr(0,Dt)+dt[Dt]+gt.substr(Dt+1):null;yt(bt[Mt],ve)<0&&(Dt=Mt)}return It<wt.length&&Ct==="next"?bt+gt.substr(bt.length):It<bt.length&&Ct==="prev"?bt.substr(0,gt.length):Dt<0?null:bt.substr(0,Dt)+wt[Dt]+gt.substr(Dt+1)})(q,Z,O[rt],I[rt],_,D);ft===null&&J===null?B=rt+1:(J===null||0<_(J,ft))&&(J=ft)}return j(J!==null?function(){M.continue(J+F)}:U),!1}),t}function Fe(t,e,i,s){return{type:2,lower:t,upper:e,lowerOpen:i,upperOpen:s}}function wi(t){return{type:1,lower:t,upper:t}}var _i=(Object.defineProperty(ie.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ie.prototype.between=function(t,e,i,s){i=i!==!1,s=s===!0;try{return 0<this._cmp(t,e)||this._cmp(t,e)===0&&(i||s)&&(!i||!s)?cn(this):new this.Collection(this,function(){return Fe(t,e,!i,!s)})}catch{return ge(this,Oe)}},ie.prototype.equals=function(t){return t==null?ge(this,Oe):new this.Collection(this,function(){return wi(t)})},ie.prototype.above=function(t){return t==null?ge(this,Oe):new this.Collection(this,function(){return Fe(t,void 0,!0)})},ie.prototype.aboveOrEqual=function(t){return t==null?ge(this,Oe):new this.Collection(this,function(){return Fe(t,void 0,!1)})},ie.prototype.below=function(t){return t==null?ge(this,Oe):new this.Collection(this,function(){return Fe(void 0,t,!1,!0)})},ie.prototype.belowOrEqual=function(t){return t==null?ge(this,Oe):new this.Collection(this,function(){return Fe(void 0,t)})},ie.prototype.startsWith=function(t){return typeof t!="string"?ge(this,ci):this.between(t,t+We,!0,!0)},ie.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):Hn(this,function(e,i){return e.indexOf(i[0])===0},[t],We)},ie.prototype.equalsIgnoreCase=function(t){return Hn(this,function(e,i){return e===i[0]},[t],"")},ie.prototype.anyOfIgnoreCase=function(){var t=Pt.apply(st,arguments);return t.length===0?cn(this):Hn(this,function(e,i){return i.indexOf(e)!==-1},t,"")},ie.prototype.startsWithAnyOfIgnoreCase=function(){var t=Pt.apply(st,arguments);return t.length===0?cn(this):Hn(this,function(e,i){return i.some(function(s){return e.indexOf(s)===0})},t,We)},ie.prototype.anyOf=function(){var t=this,e=Pt.apply(st,arguments),i=this._cmp;try{e.sort(i)}catch{return ge(this,Oe)}if(e.length===0)return cn(this);var s=new this.Collection(this,function(){return Fe(e[0],e[e.length-1])});s._ondirectionchange=function(p){i=p==="next"?t._ascending:t._descending,e.sort(i)};var u=0;return s._addAlgorithm(function(p,_,O){for(var I=p.key;0<i(I,e[u]);)if(++u===e.length)return _(O),!1;return i(I,e[u])===0||(_(function(){p.continue(e[u])}),!1)}),s},ie.prototype.notEqual=function(t){return this.inAnyRange([[-1/0,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ie.prototype.noneOf=function(){var t=Pt.apply(st,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return ge(this,Oe)}var e=t.reduce(function(i,s){return i?i.concat([[i[i.length-1][1],s]]):[[-1/0,s]]},null);return e.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(e,{includeLowers:!1,includeUppers:!1})},ie.prototype.inAnyRange=function(q,e){var i=this,s=this._cmp,u=this._ascending,p=this._descending,_=this._min,O=this._max;if(q.length===0)return cn(this);if(!q.every(function(Z){return Z[0]!==void 0&&Z[1]!==void 0&&u(Z[0],Z[1])<=0}))return ge(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",mt.InvalidArgument);var I=!e||e.includeLowers!==!1,D=e&&e.includeUppers===!0,F,R=u;function L(Z,J){return R(Z[0],J[0])}try{(F=q.reduce(function(Z,J){for(var rt=0,ft=Z.length;rt<ft;++rt){var bt=Z[rt];if(s(J[0],bt[1])<0&&0<s(J[1],bt[0])){bt[0]=_(bt[0],J[0]),bt[1]=O(bt[1],J[1]);break}}return rt===ft&&Z.push(J),Z},[])).sort(L)}catch{return ge(this,Oe)}var B=0,M=D?function(Z){return 0<u(Z,F[B][1])}:function(Z){return 0<=u(Z,F[B][1])},j=I?function(Z){return 0<p(Z,F[B][0])}:function(Z){return 0<=p(Z,F[B][0])},U=M,q=new this.Collection(this,function(){return Fe(F[0][0],F[F.length-1][1],!I,!D)});return q._ondirectionchange=function(Z){R=Z==="next"?(U=M,u):(U=j,p),F.sort(L)},q._addAlgorithm(function(Z,J,rt){for(var ft,bt=Z.key;U(bt);)if(++B===F.length)return J(rt),!1;return!M(ft=bt)&&!j(ft)||(i._cmp(bt,F[B][1])===0||i._cmp(bt,F[B][0])===0||J(function(){R===u?Z.continue(F[B][0]):Z.continue(F[B][1])}),!1)}),q},ie.prototype.startsWithAnyOf=function(){var t=Pt.apply(st,arguments);return t.every(function(e){return typeof e=="string"})?t.length===0?cn(this):this.inAnyRange(t.map(function(e){return[e,e+We]})):ge(this,"startsWithAnyOf() only works with strings")},ie);function ie(){}function Se(t){return Zt(function(e){return _n(e),t(e.target.error),!1})}function _n(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}var xn="storagemutated",xr="x-storagemutated-1",Ne=bn(null,xn),Da=(Ce.prototype._lock=function(){return W(!St.global),++this._reculock,this._reculock!==1||St.global||(St.lockOwnerFor=this),this},Ce.prototype._unlock=function(){if(W(!St.global),--this._reculock==0)for(St.global||(St.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var t=this._blockedFuncs.shift();try{qe(t[1],t[0])}catch{}}return this},Ce.prototype._locked=function(){return this._reculock&&St.lockOwnerFor!==this},Ce.prototype.create=function(t){var e=this;if(!this.mode)return this;var i=this.db.idbdb,s=this.db._state.dbOpenError;if(W(!this.idbtrans),!t&&!i)switch(s&&s.name){case"DatabaseClosedError":throw new mt.DatabaseClosed(s);case"MissingAPIError":throw new mt.MissingAPI(s.message,s);default:throw new mt.OpenFailed(s)}if(!this.active)throw new mt.TransactionInactive;return W(this._completion._state===null),(t=this.idbtrans=t||(this.db.core||i).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Zt(function(u){_n(u),e._reject(t.error)}),t.onabort=Zt(function(u){_n(u),e.active&&e._reject(new mt.Abort(t.error)),e.active=!1,e.on("abort").fire(u)}),t.oncomplete=Zt(function(){e.active=!1,e._resolve(),"mutatedParts"in t&&Ne.storagemutated.fire(t.mutatedParts)}),this},Ce.prototype._promise=function(t,e,i){var s=this;if(t==="readwrite"&&this.mode!=="readwrite")return Yt(new mt.ReadOnly("Transaction is readonly"));if(!this.active)return Yt(new mt.TransactionInactive);if(this._locked())return new _t(function(p,_){s._blockedFuncs.push([function(){s._promise(t,e,i).then(p,_)},St])});if(i)return ze(function(){var p=new _t(function(_,O){s._lock();var I=e(_,O,s);I&&I.then&&I.then(_,O)});return p.finally(function(){return s._unlock()}),p._lib=!0,p});var u=new _t(function(p,_){var O=e(p,_,s);O&&O.then&&O.then(p,_)});return u._lib=!0,u},Ce.prototype._root=function(){return this.parent?this.parent._root():this},Ce.prototype.waitFor=function(t){var e,i=this._root(),s=_t.resolve(t);i._waitingFor?i._waitingFor=i._waitingFor.then(function(){return s}):(i._waitingFor=s,i._waitingQueue=[],e=i.idbtrans.objectStore(i.storeNames[0]),(function p(){for(++i._spinCount;i._waitingQueue.length;)i._waitingQueue.shift()();i._waitingFor&&(e.get(-1/0).onsuccess=p)})());var u=i._waitingFor;return new _t(function(p,_){s.then(function(O){return i._waitingQueue.push(Zt(p.bind(null,O)))},function(O){return i._waitingQueue.push(Zt(_.bind(null,O)))}).finally(function(){i._waitingFor===u&&(i._waitingFor=null)})})},Ce.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new mt.Abort))},Ce.prototype.table=function(t){var e=this._memoizedTables||(this._memoizedTables={});if(w(e,t))return e[t];var i=this.schema[t];if(!i)throw new mt.NotFound("Table "+t+" not part of transaction");return i=new this.db.Table(t,i,this),i.core=this.db.core.table(t),e[t]=i},Ce);function Ce(){}function kr(t,e,i,s,u,p,_,O){return{name:t,keyPath:e,unique:i,multi:s,auto:u,compound:p,src:(i&&!_?"&":"")+(s?"*":"")+(u?"++":"")+xi(e),type:O}}function xi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Sr(t,e,i){return{name:t,primKey:e,indexes:i,mappedClass:null,idxByName:(s=function(u){return[u.name,u]},i.reduce(function(u,p,_){return _=s(p,_),_&&(u[_[0]]=_[1]),u},{}))};var s}var kn=function(t){try{return t.only([[]]),kn=function(){return[[]]},[[]]}catch{return kn=function(){return We},We}};function Cr(t){return t==null?function(){}:typeof t=="string"?(e=t).split(".").length===1?function(i){return i[e]}:function(i){return nt(i,e)}:function(i){return nt(i,t)};var e}function ki(t){return[].slice.call(t)}var Ba=0;function Sn(t){return t==null?":id":typeof t=="string"?t:"[".concat(t.join("+"),"]")}function za(t,e,I){function s(U){if(U.type===3)return null;if(U.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var B=U.lower,M=U.upper,j=U.lowerOpen,U=U.upperOpen;return B===void 0?M===void 0?null:e.upperBound(M,!!U):M===void 0?e.lowerBound(B,!!j):e.bound(B,M,!!j,!!U)}function u(L){var B,M=L.name;return{name:M,schema:L,mutate:function(j){var U=j.trans,q=j.type,Z=j.keys,J=j.values,rt=j.range;return new Promise(function(ft,bt){ft=Zt(ft);var dt=U.objectStore(M),gt=dt.keyPath==null,wt=q==="put"||q==="add";if(!wt&&q!=="delete"&&q!=="deleteRange")throw new Error("Invalid operation type: "+q);var yt,Ct=(Z||J||{length:1}).length;if(Z&&J&&Z.length!==J.length)throw new Error("Given keys array must have same length as given values array.");if(Ct===0)return ft({numFailures:0,failures:{},results:[],lastResult:void 0});function It(fe){++ve,_n(fe)}var Dt=[],Mt=[],ve=0;if(q==="deleteRange"){if(rt.type===4)return ft({numFailures:ve,failures:Mt,results:[],lastResult:void 0});rt.type===3?Dt.push(yt=dt.clear()):Dt.push(yt=dt.delete(s(rt)))}else{var gt=wt?gt?[J,Z]:[J,null]:[Z,null],$t=gt[0],le=gt[1];if(wt)for(var ce=0;ce<Ct;++ce)Dt.push(yt=le&&le[ce]!==void 0?dt[q]($t[ce],le[ce]):dt[q]($t[ce])),yt.onerror=It;else for(ce=0;ce<Ct;++ce)Dt.push(yt=dt[q]($t[ce])),yt.onerror=It}function ir(fe){fe=fe.target.result,Dt.forEach(function(Ge,Kr){return Ge.error!=null&&(Mt[Kr]=Ge.error)}),ft({numFailures:ve,failures:Mt,results:q==="delete"?Z:Dt.map(function(Ge){return Ge.result}),lastResult:fe})}yt.onerror=function(fe){It(fe),ir(fe)},yt.onsuccess=ir})},getMany:function(j){var U=j.trans,q=j.keys;return new Promise(function(Z,J){Z=Zt(Z);for(var rt,ft=U.objectStore(M),bt=q.length,dt=new Array(bt),gt=0,wt=0,yt=function(Dt){Dt=Dt.target,dt[Dt._pos]=Dt.result,++wt===gt&&Z(dt)},Ct=Se(J),It=0;It<bt;++It)q[It]!=null&&((rt=ft.get(q[It]))._pos=It,rt.onsuccess=yt,rt.onerror=Ct,++gt);gt===0&&Z(dt)})},get:function(j){var U=j.trans,q=j.key;return new Promise(function(Z,J){Z=Zt(Z);var rt=U.objectStore(M).get(q);rt.onsuccess=function(ft){return Z(ft.target.result)},rt.onerror=Se(J)})},query:(B=D,function(j){return new Promise(function(U,q){U=Zt(U);var Z,J,rt,gt=j.trans,ft=j.values,bt=j.limit,yt=j.query,dt=bt===1/0?void 0:bt,wt=yt.index,yt=yt.range,gt=gt.objectStore(M),wt=wt.isPrimaryKey?gt:gt.index(wt.name),yt=s(yt);if(bt===0)return U({result:[]});B?((dt=ft?wt.getAll(yt,dt):wt.getAllKeys(yt,dt)).onsuccess=function(Ct){return U({result:Ct.target.result})},dt.onerror=Se(q)):(Z=0,J=!ft&&"openKeyCursor"in wt?wt.openKeyCursor(yt):wt.openCursor(yt),rt=[],J.onsuccess=function(Ct){var It=J.result;return It?(rt.push(ft?It.value:It.primaryKey),++Z===bt?U({result:rt}):void It.continue()):U({result:rt})},J.onerror=Se(q))})}),openCursor:function(j){var U=j.trans,q=j.values,Z=j.query,J=j.reverse,rt=j.unique;return new Promise(function(ft,bt){ft=Zt(ft);var wt=Z.index,dt=Z.range,gt=U.objectStore(M),gt=wt.isPrimaryKey?gt:gt.index(wt.name),wt=J?rt?"prevunique":"prev":rt?"nextunique":"next",yt=!q&&"openKeyCursor"in gt?gt.openKeyCursor(s(dt),wt):gt.openCursor(s(dt),wt);yt.onerror=Se(bt),yt.onsuccess=Zt(function(Ct){var It,Dt,Mt,ve,$t=yt.result;$t?($t.___id=++Ba,$t.done=!1,It=$t.continue.bind($t),Dt=(Dt=$t.continuePrimaryKey)&&Dt.bind($t),Mt=$t.advance.bind($t),ve=function(){throw new Error("Cursor not stopped")},$t.trans=U,$t.stop=$t.continue=$t.continuePrimaryKey=$t.advance=function(){throw new Error("Cursor not started")},$t.fail=Zt(bt),$t.next=function(){var le=this,ce=1;return this.start(function(){return ce--?le.continue():le.stop()}).then(function(){return le})},$t.start=function(le){function ce(){if(yt.result)try{le()}catch(fe){$t.fail(fe)}else $t.done=!0,$t.start=function(){throw new Error("Cursor behind last entry")},$t.stop()}var ir=new Promise(function(fe,Ge){fe=Zt(fe),yt.onerror=Se(Ge),$t.fail=Ge,$t.stop=function(Kr){$t.stop=$t.continue=$t.continuePrimaryKey=$t.advance=ve,fe(Kr)}});return yt.onsuccess=Zt(function(fe){yt.onsuccess=ce,ce()}),$t.continue=It,$t.continuePrimaryKey=Dt,$t.advance=Mt,ce(),ir},ft($t)):ft(null)},bt)})},count:function(j){var U=j.query,q=j.trans,Z=U.index,J=U.range;return new Promise(function(rt,ft){var bt=q.objectStore(M),dt=Z.isPrimaryKey?bt:bt.index(Z.name),bt=s(J),dt=bt?dt.count(bt):dt.count();dt.onsuccess=Zt(function(gt){return rt(gt.target.result)}),dt.onerror=Se(ft)})}}}var p,_,O,F=(_=I,O=ki((p=t).objectStoreNames),{schema:{name:p.name,tables:O.map(function(L){return _.objectStore(L)}).map(function(L){var B=L.keyPath,U=L.autoIncrement,M=f(B),j={},U={name:L.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:B==null,compound:M,keyPath:B,autoIncrement:U,unique:!0,extractKey:Cr(B)},indexes:ki(L.indexNames).map(function(q){return L.index(q)}).map(function(rt){var Z=rt.name,J=rt.unique,ft=rt.multiEntry,rt=rt.keyPath,ft={name:Z,compound:f(rt),keyPath:rt,unique:J,multiEntry:ft,extractKey:Cr(rt)};return j[Sn(rt)]=ft}),getIndexByKeyPath:function(q){return j[Sn(q)]}};return j[":id"]=U.primaryKey,B!=null&&(j[Sn(B)]=U.primaryKey),U})},hasGetAll:0<O.length&&"getAll"in _.objectStore(O[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),I=F.schema,D=F.hasGetAll,F=I.tables.map(u),R={};return F.forEach(function(L){return R[L.name]=L}),{stack:"dbcore",transaction:t.transaction.bind(t),table:function(L){if(!R[L])throw new Error("Table '".concat(L,"' not found"));return R[L]},MIN_KEY:-1/0,MAX_KEY:kn(e),schema:I}}function Ma(t,e,i,s){var u=i.IDBKeyRange;return i.indexedDB,{dbcore:(s=za(e,u,s),t.dbcore.reduce(function(p,_){return _=_.create,o(o({},p),_(p))},s))}}function Zn(t,s){var i=s.db,s=Ma(t._middlewares,i,t._deps,s);t.core=s.dbcore,t.tables.forEach(function(u){var p=u.name;t.core.schema.tables.some(function(_){return _.name===p})&&(u.core=t.core.table(p),t[p]instanceof t.Table&&(t[p].core=u.core))})}function Vn(t,e,i,s){i.forEach(function(u){var p=s[u];e.forEach(function(_){var O=(function I(D,F){return A(D,F)||(D=b(D))&&I(D,F)})(_,u);(!O||"value"in O&&O.value===void 0)&&(_===t.Transaction.prototype||_ instanceof t.Transaction?E(_,u,{get:function(){return this.table(u)},set:function(I){v(this,u,{value:I,writable:!0,configurable:!0,enumerable:!0})}}):_[u]=new t.Table(u,p))})})}function Er(t,e){e.forEach(function(i){for(var s in i)i[s]instanceof t.Table&&delete i[s]})}function ja(t,e){return t._cfg.version-e._cfg.version}function Fa(t,e,i,s){var u=t._dbSchema;i.objectStoreNames.contains("$meta")&&!u.$meta&&(u.$meta=Sr("$meta",Ci("")[0],[]),t._storeNames.push("$meta"));var p=t._createTransaction("readwrite",t._storeNames,u);p.create(i),p._completion.catch(s);var _=p._reject.bind(p),O=St.transless||St;ze(function(){return St.trans=p,St.transless=O,e!==0?(Zn(t,i),D=e,((I=p).storeNames.includes("$meta")?I.table("$meta").get("version").then(function(F){return F??D}):_t.resolve(D)).then(function(F){return L=F,B=p,M=i,j=[],F=(R=t)._versions,U=R._dbSchema=Yn(0,R.idbdb,M),(F=F.filter(function(q){return q._cfg.version>=L})).length!==0?(F.forEach(function(q){j.push(function(){var Z=U,J=q._cfg.dbschema;Xn(R,Z,M),Xn(R,J,M),U=R._dbSchema=J;var rt=Ar(Z,J);rt.add.forEach(function(wt){Pr(M,wt[0],wt[1].primKey,wt[1].indexes)}),rt.change.forEach(function(wt){if(wt.recreate)throw new mt.Upgrade("Not yet support for changing primary key");var yt=M.objectStore(wt.name);wt.add.forEach(function(Ct){return Gn(yt,Ct)}),wt.change.forEach(function(Ct){yt.deleteIndex(Ct.name),Gn(yt,Ct)}),wt.del.forEach(function(Ct){return yt.deleteIndex(Ct)})});var ft=q._cfg.contentUpgrade;if(ft&&q._cfg.version>L){Zn(R,M),B._memoizedTables={};var bt=ct(J);rt.del.forEach(function(wt){bt[wt]=Z[wt]}),Er(R,[R.Transaction.prototype]),Vn(R,[R.Transaction.prototype],d(bt),bt),B.schema=bt;var dt,gt=G(ft);return gt&&on(),rt=_t.follow(function(){var wt;(dt=ft(B))&&gt&&(wt=Me.bind(null,null),dt.then(wt,wt))}),dt&&typeof dt.then=="function"?_t.resolve(dt):rt.then(function(){return dt})}}),j.push(function(Z){var J,rt,ft=q._cfg.dbschema;J=ft,rt=Z,[].slice.call(rt.db.objectStoreNames).forEach(function(bt){return J[bt]==null&&rt.db.deleteObjectStore(bt)}),Er(R,[R.Transaction.prototype]),Vn(R,[R.Transaction.prototype],R._storeNames,R._dbSchema),B.schema=R._dbSchema}),j.push(function(Z){R.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(R.idbdb.version/10)===q._cfg.version?(R.idbdb.deleteObjectStore("$meta"),delete R._dbSchema.$meta,R._storeNames=R._storeNames.filter(function(J){return J!=="$meta"})):Z.objectStore("$meta").put(q._cfg.version,"version"))})}),(function q(){return j.length?_t.resolve(j.shift()(B.idbtrans)).then(q):_t.resolve()})().then(function(){Si(U,M)})):_t.resolve();var R,L,B,M,j,U}).catch(_)):(d(u).forEach(function(F){Pr(i,F,u[F].primKey,u[F].indexes)}),Zn(t,i),void _t.follow(function(){return t.on.populate.fire(p)}).catch(_));var I,D})}function Na(t,e){Si(t._dbSchema,e),e.db.version%10!=0||e.objectStoreNames.contains("$meta")||e.db.createObjectStore("$meta").add(Math.ceil(e.db.version/10-1),"version");var i=Yn(0,t.idbdb,e);Xn(t,t._dbSchema,e);for(var s=0,u=Ar(i,t._dbSchema).change;s<u.length;s++){var p=(function(_){if(_.change.length||_.recreate)return console.warn("Unable to patch indexes of table ".concat(_.name," because it has changes on the type of index or primary key.")),{value:void 0};var O=e.objectStore(_.name);_.add.forEach(function(I){at&&console.debug("Dexie upgrade patch: Creating missing index ".concat(_.name,".").concat(I.src)),Gn(O,I)})})(u[s]);if(typeof p=="object")return p.value}}function Ar(t,e){var i,s={del:[],add:[],change:[]};for(i in t)e[i]||s.del.push(i);for(i in e){var u=t[i],p=e[i];if(u){var _={name:i,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(u.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||u.primKey.auto!==p.primKey.auto)_.recreate=!0,s.change.push(_);else{var O=u.idxByName,I=p.idxByName,D=void 0;for(D in O)I[D]||_.del.push(D);for(D in I){var F=O[D],R=I[D];F?F.src!==R.src&&_.change.push(R):_.add.push(R)}(0<_.del.length||0<_.add.length||0<_.change.length)&&s.change.push(_)}}else s.add.push([i,p])}return s}function Pr(t,e,i,s){var u=t.db.createObjectStore(e,i.keyPath?{keyPath:i.keyPath,autoIncrement:i.auto}:{autoIncrement:i.auto});return s.forEach(function(p){return Gn(u,p)}),u}function Si(t,e){d(t).forEach(function(i){e.db.objectStoreNames.contains(i)||(at&&console.debug("Dexie: Creating missing table",i),Pr(e,i,t[i].primKey,t[i].indexes))})}function Gn(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Yn(t,e,i){var s={};return T(e.objectStoreNames,0).forEach(function(u){for(var p=i.objectStore(u),_=kr(xi(D=p.keyPath),D||"",!0,!1,!!p.autoIncrement,D&&typeof D!="string",!0),O=[],I=0;I<p.indexNames.length;++I){var F=p.index(p.indexNames[I]),D=F.keyPath,F=kr(F.name,D,!!F.unique,!!F.multiEntry,!1,D&&typeof D!="string",!1);O.push(F)}s[u]=Sr(u,_,O)}),s}function Xn(t,e,i){for(var s=i.db.objectStoreNames,u=0;u<s.length;++u){var p=s[u],_=i.objectStore(p);t._hasGetAll="getAll"in _;for(var O=0;O<_.indexNames.length;++O){var I=_.indexNames[O],D=_.index(I).keyPath,F=typeof D=="string"?D:"["+T(D).join("+")+"]";!e[p]||(D=e[p].idxByName[F])&&(D.name=I,delete e[p].idxByName[F],e[p].idxByName[I]=D)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&c.WorkerGlobalScope&&c instanceof c.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}function Ci(t){return t.split(",").map(function(e,i){var p=e.split(":"),s=(u=p[1])===null||u===void 0?void 0:u.trim(),u=(e=p[0].trim()).replace(/([&*]|\+\+)/g,""),p=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return kr(u,p||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),f(p),i===0,s)})}var Ua=(un.prototype._createTableSchema=Sr,un.prototype._parseIndexSyntax=Ci,un.prototype._parseStoresSpec=function(t,e){var i=this;d(t).forEach(function(s){if(t[s]!==null){var u=i._parseIndexSyntax(t[s]),p=u.shift();if(!p)throw new mt.Schema("Invalid schema for table "+s+": "+t[s]);if(p.unique=!0,p.multi)throw new mt.Schema("Primary key cannot be multiEntry*");u.forEach(function(_){if(_.auto)throw new mt.Schema("Only primary key can be marked as autoIncrement (++)");if(!_.keyPath)throw new mt.Schema("Index must have a name and cannot be an empty string")}),u=i._createTableSchema(s,p,u),e[s]=u}})},un.prototype.stores=function(i){var e=this.db;this._cfg.storesSource=this._cfg.storesSource?g(this._cfg.storesSource,i):i;var i=e._versions,s={},u={};return i.forEach(function(p){g(s,p._cfg.storesSource),u=p._cfg.dbschema={},p._parseStoresSpec(s,u)}),e._dbSchema=u,Er(e,[e._allTables,e,e.Transaction.prototype]),Vn(e,[e._allTables,e,e.Transaction.prototype,this._cfg.tables],d(u),u),e._storeNames=d(u),this},un.prototype.upgrade=function(t){return this._cfg.contentUpgrade=ot(this._cfg.contentUpgrade||Bt,t),this},un);function un(){}function Or(t,e){var i=t._dbNamesDB;return i||(i=t._dbNamesDB=new Te(Un,{addons:[],indexedDB:t,IDBKeyRange:e})).version(1).stores({dbnames:"name"}),i.table("dbnames")}function Tr(t){return t&&typeof t.databases=="function"}function Rr(t){return ze(function(){return St.letThrough=!0,t()})}function $r(t){return!("from"in t)}var se=function(t,e){if(!this){var i=new se;return t&&"d"in t&&g(i,t),i}g(this,arguments.length?{d:1,from:t,to:1<arguments.length?e:t}:{d:0})};function Cn(t,e,i){var s=Ft(e,i);if(!isNaN(s)){if(0<s)throw RangeError();if($r(t))return g(t,{from:e,to:i,d:1});var u=t.l,s=t.r;if(Ft(i,t.from)<0)return u?Cn(u,e,i):t.l={from:e,to:i,d:1,l:null,r:null},Ai(t);if(0<Ft(e,t.to))return s?Cn(s,e,i):t.r={from:e,to:i,d:1,l:null,r:null},Ai(t);Ft(e,t.from)<0&&(t.from=e,t.l=null,t.d=s?s.d+1:1),0<Ft(i,t.to)&&(t.to=i,t.r=null,t.d=t.l?t.l.d+1:1),i=!t.r,u&&!t.l&&En(t,u),s&&i&&En(t,s)}}function En(t,e){$r(e)||(function i(s,I){var p=I.from,_=I.to,O=I.l,I=I.r;Cn(s,p,_),O&&i(s,O),I&&i(s,I)})(t,e)}function Ei(t,e){var i=Jn(e),s=i.next();if(s.done)return!1;for(var u=s.value,p=Jn(t),_=p.next(u.from),O=_.value;!s.done&&!_.done;){if(Ft(O.from,u.to)<=0&&0<=Ft(O.to,u.from))return!0;Ft(u.from,O.from)<0?u=(s=i.next(O.from)).value:O=(_=p.next(u.from)).value}return!1}function Jn(t){var e=$r(t)?null:{s:0,n:t};return{next:function(i){for(var s=0<arguments.length;e;)switch(e.s){case 0:if(e.s=1,s)for(;e.n.l&&Ft(i,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!s||Ft(i,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Ai(t){var e,i,s=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((i=t.l)===null||i===void 0?void 0:i.d)||0),u=1<s?"r":s<-1?"l":"";u&&(e=u=="r"?"l":"r",i=o({},t),s=t[u],t.from=s.from,t.to=s.to,t[u]=s[u],i[u]=s[e],(t[e]=i).d=Pi(i)),t.d=Pi(t)}function Pi(i){var e=i.r,i=i.l;return(e?i?Math.max(e.d,i.d):e.d:i?i.d:0)+1}function Qn(t,e){return d(e).forEach(function(i){t[i]?En(t[i],e[i]):t[i]=(function s(u){var p,_,O={};for(p in u)w(u,p)&&(_=u[p],O[p]=!_||typeof _!="object"||Ot.has(_.constructor)?_:s(_));return O})(e[i])}),t}function Ir(t,e){return t.all||e.all||Object.keys(t).some(function(i){return e[i]&&Ei(e[i],t[i])})}C(se.prototype,((we={add:function(t){return En(this,t),this},addKey:function(t){return Cn(this,t,t),this},addKeys:function(t){var e=this;return t.forEach(function(i){return Cn(e,i,i)}),this},hasKey:function(t){var e=Jn(this).next(t).value;return e&&Ft(e.from,t)<=0&&0<=Ft(e.to,t)}})[Tt]=function(){return Jn(this)},we));var Ze={},Dr={},Br=!1;function tr(t){Qn(Dr,t),Br||(Br=!0,setTimeout(function(){Br=!1,zr(Dr,!(Dr={}))},0))}function zr(t,e){e===void 0&&(e=!1);var i=new Set;if(t.all)for(var s=0,u=Object.values(Ze);s<u.length;s++)Oi(_=u[s],t,i,e);else for(var p in t){var _,O=/^idb\:\/\/(.*)\/(.*)\//.exec(p);O&&(p=O[1],O=O[2],(_=Ze["idb://".concat(p,"/").concat(O)])&&Oi(_,t,i,e))}i.forEach(function(I){return I()})}function Oi(t,e,i,s){for(var u=[],p=0,_=Object.entries(t.queries.query);p<_.length;p++){for(var O=_[p],I=O[0],D=[],F=0,R=O[1];F<R.length;F++){var L=R[F];Ir(e,L.obsSet)?L.subscribers.forEach(function(U){return i.add(U)}):s&&D.push(L)}s&&u.push([I,D])}if(s)for(var B=0,M=u;B<M.length;B++){var j=M[B],I=j[0],D=j[1];t.queries.query[I]=D}}function La(t){var e=t._state,i=t._deps.indexedDB;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(function(){return e.dbOpenError?Yt(e.dbOpenError):t});e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;var s=e.openCanceller,u=Math.round(10*t.verno),p=!1;function _(){if(e.openCanceller!==s)throw new mt.DatabaseClosed("db.open() was cancelled")}function O(){return new _t(function(L,B){if(_(),!i)throw new mt.MissingAPI;var M=t.name,j=e.autoSchema||!u?i.open(M):i.open(M,u);if(!j)throw new mt.MissingAPI;j.onerror=Se(B),j.onblocked=Zt(t._fireOnBlocked),j.onupgradeneeded=Zt(function(U){var q;F=j.transaction,e.autoSchema&&!t._options.allowEmptyDB?(j.onerror=_n,F.abort(),j.result.close(),(q=i.deleteDatabase(M)).onsuccess=q.onerror=Zt(function(){B(new mt.NoSuchDatabase("Database ".concat(M," doesnt exist")))})):(F.onerror=Se(B),U=U.oldVersion>Math.pow(2,62)?0:U.oldVersion,R=U<1,t.idbdb=j.result,p&&Na(t,F),Fa(t,U/10,F,B))},B),j.onsuccess=Zt(function(){F=null;var U,q,Z,J,rt,ft=t.idbdb=j.result,bt=T(ft.objectStoreNames);if(0<bt.length)try{var dt=ft.transaction((J=bt).length===1?J[0]:J,"readonly");if(e.autoSchema)q=ft,Z=dt,(U=t).verno=q.version/10,Z=U._dbSchema=Yn(0,q,Z),U._storeNames=T(q.objectStoreNames,0),Vn(U,[U._allTables],d(Z),Z);else if(Xn(t,t._dbSchema,dt),((rt=Ar(Yn(0,(rt=t).idbdb,dt),rt._dbSchema)).add.length||rt.change.some(function(gt){return gt.add.length||gt.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),ft.close(),u=ft.version+1,p=!0,L(O());Zn(t,dt)}catch{}sn.push(t),ft.onversionchange=Zt(function(gt){e.vcFired=!0,t.on("versionchange").fire(gt)}),ft.onclose=Zt(function(){t.close({disableAutoOpen:!1})}),R&&(rt=t._deps,dt=M,ft=rt.indexedDB,rt=rt.IDBKeyRange,Tr(ft)||dt===Un||Or(ft,rt).put({name:dt}).catch(Bt)),L()},B)}).catch(function(L){switch(L?.name){case"UnknownError":if(0<e.PR1398_maxLoop)return e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),O();break;case"VersionError":if(0<u)return u=0,O()}return _t.reject(L)})}var I,D=e.dbReadyResolve,F=null,R=!1;return _t.race([s,(typeof navigator>"u"?_t.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(L){function B(){return indexedDB.databases().finally(L)}I=setInterval(B,100),B()}).finally(function(){return clearInterval(I)}):Promise.resolve()).then(O)]).then(function(){return _(),e.onReadyBeingFired=[],_t.resolve(Rr(function(){return t.on.ready.fire(t.vip)})).then(function L(){if(0<e.onReadyBeingFired.length){var B=e.onReadyBeingFired.reduce(ot,Bt);return e.onReadyBeingFired=[],_t.resolve(Rr(function(){return B(t.vip)})).then(L)}})}).finally(function(){e.openCanceller===s&&(e.onReadyBeingFired=null,e.isBeingOpened=!1)}).catch(function(L){e.dbOpenError=L;try{F&&F.abort()}catch{}return s===e.openCanceller&&t._close(),Yt(L)}).finally(function(){e.openComplete=!0,D()}).then(function(){var L;return R&&(L={},t.tables.forEach(function(B){B.schema.indexes.forEach(function(M){M.name&&(L["idb://".concat(t.name,"/").concat(B.name,"/").concat(M.name)]=new se(-1/0,[[[]]]))}),L["idb://".concat(t.name,"/").concat(B.name,"/")]=L["idb://".concat(t.name,"/").concat(B.name,"/:dels")]=new se(-1/0,[[[]]])}),Ne(xn).fire(L),zr(L,!0)),t})}function Mr(t){function e(p){return t.next(p)}var i=u(e),s=u(function(p){return t.throw(p)});function u(p){return function(I){var O=p(I),I=O.value;return O.done?I:I&&typeof I.then=="function"?I.then(i,s):f(I)?Promise.all(I).then(i,s):i(I)}}return u(e)()}function er(t,e,i){for(var s=f(t)?t.slice():[t],u=0;u<i;++u)s.push(e);return s}var Ka={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return o(o({},t),{table:function(e){var i=t.table(e),s=i.schema,u={},p=[];function _(R,L,B){var M=Sn(R),j=u[M]=u[M]||[],U=R==null?0:typeof R=="string"?1:R.length,q=0<L,q=o(o({},B),{name:q?"".concat(M,"(virtual-from:").concat(B.name,")"):B.name,lowLevelIndex:B,isVirtual:q,keyTail:L,keyLength:U,extractKey:Cr(R),unique:!q&&B.unique});return j.push(q),q.isPrimaryKey||p.push(q),1<U&&_(U===2?R[0]:R.slice(0,U-1),L+1,B),j.sort(function(Z,J){return Z.keyTail-J.keyTail}),q}e=_(s.primaryKey.keyPath,0,s.primaryKey),u[":id"]=[e];for(var O=0,I=s.indexes;O<I.length;O++){var D=I[O];_(D.keyPath,0,D)}function F(R){var L,B=R.query.index;return B.isVirtual?o(o({},R),{query:{index:B.lowLevelIndex,range:(L=R.query.range,B=B.keyTail,{type:L.type===1?2:L.type,lower:er(L.lower,L.lowerOpen?t.MAX_KEY:t.MIN_KEY,B),lowerOpen:!0,upper:er(L.upper,L.upperOpen?t.MIN_KEY:t.MAX_KEY,B),upperOpen:!0})}}):R}return o(o({},i),{schema:o(o({},s),{primaryKey:e,indexes:p,getIndexByKeyPath:function(R){return(R=u[Sn(R)])&&R[0]}}),count:function(R){return i.count(F(R))},query:function(R){return i.query(F(R))},openCursor:function(R){var L=R.query.index,B=L.keyTail,M=L.isVirtual,j=L.keyLength;return M?i.openCursor(F(R)).then(function(q){return q&&U(q)}):i.openCursor(R);function U(q){return Object.create(q,{continue:{value:function(Z){Z!=null?q.continue(er(Z,R.reverse?t.MAX_KEY:t.MIN_KEY,B)):R.unique?q.continue(q.key.slice(0,j).concat(R.reverse?t.MIN_KEY:t.MAX_KEY,B)):q.continue()}},continuePrimaryKey:{value:function(Z,J){q.continuePrimaryKey(er(Z,t.MAX_KEY,B),J)}},primaryKey:{get:function(){return q.primaryKey}},key:{get:function(){var Z=q.key;return j===1?Z[0]:Z.slice(0,j)}},value:{get:function(){return q.value}}})}}})}})}};function jr(t,e,i,s){return i=i||{},s=s||"",d(t).forEach(function(u){var p,_,O;w(e,u)?(p=t[u],_=e[u],typeof p=="object"&&typeof _=="object"&&p&&_?(O=it(p))!==it(_)?i[s+u]=e[u]:O==="Object"?jr(p,_,i,s+u+"."):p!==_&&(i[s+u]=e[u]):p!==_&&(i[s+u]=e[u])):i[s+u]=void 0}),d(e).forEach(function(u){w(t,u)||(i[s+u]=e[u])}),i}function Fr(t,e){return e.type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}var qa={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(t){return o(o({},t),{table:function(e){var i=t.table(e),s=i.schema.primaryKey;return o(o({},i),{mutate:function(u){var p=St.trans,_=p.table(e).hook,O=_.deleting,I=_.creating,D=_.updating;switch(u.type){case"add":if(I.fire===Bt)break;return p._promise("readwrite",function(){return F(u)},!0);case"put":if(I.fire===Bt&&D.fire===Bt)break;return p._promise("readwrite",function(){return F(u)},!0);case"delete":if(O.fire===Bt)break;return p._promise("readwrite",function(){return F(u)},!0);case"deleteRange":if(O.fire===Bt)break;return p._promise("readwrite",function(){return(function R(L,B,M){return i.query({trans:L,values:!1,query:{index:s,range:B},limit:M}).then(function(j){var U=j.result;return F({type:"delete",keys:U,trans:L}).then(function(q){return 0<q.numFailures?Promise.reject(q.failures[0]):U.length<M?{failures:[],numFailures:0,lastResult:void 0}:R(L,o(o({},B),{lower:U[U.length-1],lowerOpen:!0}),M)})})})(u.trans,u.range,1e4)},!0)}return i.mutate(u);function F(R){var L,B,M,j=St.trans,U=R.keys||Fr(s,R);if(!U)throw new Error("Keys missing");return(R=R.type==="add"||R.type==="put"?o(o({},R),{keys:U}):o({},R)).type!=="delete"&&(R.values=l([],R.values)),R.keys&&(R.keys=l([],R.keys)),L=i,M=U,((B=R).type==="add"?Promise.resolve([]):L.getMany({trans:B.trans,keys:M,cache:"immutable"})).then(function(q){var Z=U.map(function(J,rt){var ft,bt,dt,gt=q[rt],wt={onerror:null,onsuccess:null};return R.type==="delete"?O.fire.call(wt,J,gt,j):R.type==="add"||gt===void 0?(ft=I.fire.call(wt,J,R.values[rt],j),J==null&&ft!=null&&(R.keys[rt]=J=ft,s.outbound||X(R.values[rt],s.keyPath,J))):(ft=jr(gt,R.values[rt]),(bt=D.fire.call(wt,ft,J,gt,j))&&(dt=R.values[rt],Object.keys(bt).forEach(function(yt){w(dt,yt)?dt[yt]=bt[yt]:X(dt,yt,bt[yt])}))),wt});return i.mutate(R).then(function(J){for(var rt=J.failures,ft=J.results,bt=J.numFailures,J=J.lastResult,dt=0;dt<U.length;++dt){var gt=(ft||U)[dt],wt=Z[dt];gt==null?wt.onerror&&wt.onerror(rt[dt]):wt.onsuccess&&wt.onsuccess(R.type==="put"&&q[dt]?R.values[dt]:gt)}return{failures:rt,results:ft,numFailures:bt,lastResult:J}}).catch(function(J){return Z.forEach(function(rt){return rt.onerror&&rt.onerror(J)}),Promise.reject(J)})})}}})}})}};function Ti(t,e,i){try{if(!e||e.keys.length<t.length)return null;for(var s=[],u=0,p=0;u<e.keys.length&&p<t.length;++u)Ft(e.keys[u],t[p])===0&&(s.push(i?Q(e.values[u]):e.values[u]),++p);return s.length===t.length?s:null}catch{return null}}var Wa={stack:"dbcore",level:-1,create:function(t){return{table:function(e){var i=t.table(e);return o(o({},i),{getMany:function(s){if(!s.cache)return i.getMany(s);var u=Ti(s.keys,s.trans._cache,s.cache==="clone");return u?_t.resolve(u):i.getMany(s).then(function(p){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?Q(p):p},p})},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),i.mutate(s)}})}}}};function Ri(t,e){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!e.schema.primaryKey.outbound}function $i(t,e){switch(t){case"query":return e.values&&!e.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ha={stack:"dbcore",level:0,name:"Observability",create:function(t){var e=t.schema.name,i=new se(t.MIN_KEY,t.MAX_KEY);return o(o({},t),{transaction:function(s,u,p){if(St.subscr&&u!=="readonly")throw new mt.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(St.querier));return t.transaction(s,u,p)},table:function(s){var u=t.table(s),p=u.schema,_=p.primaryKey,R=p.indexes,O=_.extractKey,I=_.outbound,D=_.autoIncrement&&R.filter(function(B){return B.compound&&B.keyPath.includes(_.keyPath)}),F=o(o({},u),{mutate:function(B){function M(yt){return yt="idb://".concat(e,"/").concat(s,"/").concat(yt),J[yt]||(J[yt]=new se)}var j,U,q,Z=B.trans,J=B.mutatedParts||(B.mutatedParts={}),rt=M(""),ft=M(":dels"),bt=B.type,wt=B.type==="deleteRange"?[B.range]:B.type==="delete"?[B.keys]:B.values.length<50?[Fr(_,B).filter(function(yt){return yt}),B.values]:[],dt=wt[0],gt=wt[1],wt=B.trans._cache;return f(dt)?(rt.addKeys(dt),(wt=bt==="delete"||dt.length===gt.length?Ti(dt,wt):null)||ft.addKeys(dt),(wt||gt)&&(j=M,U=wt,q=gt,p.indexes.forEach(function(yt){var Ct=j(yt.name||"");function It(Mt){return Mt!=null?yt.extractKey(Mt):null}function Dt(Mt){return yt.multiEntry&&f(Mt)?Mt.forEach(function(ve){return Ct.addKey(ve)}):Ct.addKey(Mt)}(U||q).forEach(function(Mt,le){var $t=U&&It(U[le]),le=q&&It(q[le]);Ft($t,le)!==0&&($t!=null&&Dt($t),le!=null&&Dt(le))})}))):dt?(gt={from:(gt=dt.lower)!==null&&gt!==void 0?gt:t.MIN_KEY,to:(gt=dt.upper)!==null&&gt!==void 0?gt:t.MAX_KEY},ft.add(gt),rt.add(gt)):(rt.add(i),ft.add(i),p.indexes.forEach(function(yt){return M(yt.name).add(i)})),u.mutate(B).then(function(yt){return!dt||B.type!=="add"&&B.type!=="put"||(rt.addKeys(yt.results),D&&D.forEach(function(Ct){for(var It=B.values.map(function($t){return Ct.extractKey($t)}),Dt=Ct.keyPath.findIndex(function($t){return $t===_.keyPath}),Mt=0,ve=yt.results.length;Mt<ve;++Mt)It[Mt][Dt]=yt.results[Mt];M(Ct.name).addKeys(It)})),Z.mutatedParts=Qn(Z.mutatedParts||{},J),yt})}}),R=function(M){var j=M.query,M=j.index,j=j.range;return[M,new se((M=j.lower)!==null&&M!==void 0?M:t.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:t.MAX_KEY)]},L={get:function(B){return[_,new se(B.key)]},getMany:function(B){return[_,new se().addKeys(B.keys)]},count:R,query:R,openCursor:R};return d(L).forEach(function(B){F[B]=function(M){var j=St.subscr,U=!!j,q=Ri(St,u)&&$i(B,M)?M.obsSet={}:j;if(U){var Z=function(gt){return gt="idb://".concat(e,"/").concat(s,"/").concat(gt),q[gt]||(q[gt]=new se)},J=Z(""),rt=Z(":dels"),j=L[B](M),U=j[0],j=j[1];if((B==="query"&&U.isPrimaryKey&&!M.values?rt:Z(U.name||"")).add(j),!U.isPrimaryKey){if(B!=="count"){var ft=B==="query"&&I&&M.values&&u.query(o(o({},M),{values:!1}));return u[B].apply(this,arguments).then(function(gt){if(B==="query"){if(I&&M.values)return ft.then(function(It){return It=It.result,J.addKeys(It),gt});var wt=M.values?gt.result.map(O):gt.result;(M.values?J:rt).addKeys(wt)}else if(B==="openCursor"){var yt=gt,Ct=M.values;return yt&&Object.create(yt,{key:{get:function(){return rt.addKey(yt.primaryKey),yt.key}},primaryKey:{get:function(){var It=yt.primaryKey;return rt.addKey(It),It}},value:{get:function(){return Ct&&J.addKey(yt.primaryKey),yt.value}}})}return gt})}rt.add(i)}}return u[B].apply(this,arguments)}}),F}})}};function Ii(t,e,i){if(i.numFailures===0)return e;if(e.type==="deleteRange")return null;var s=e.keys?e.keys.length:"values"in e&&e.values?e.values.length:1;return i.numFailures===s?null:(e=o({},e),f(e.keys)&&(e.keys=e.keys.filter(function(u,p){return!(p in i.failures)})),"values"in e&&f(e.values)&&(e.values=e.values.filter(function(u,p){return!(p in i.failures)})),e)}function Nr(t,e){return i=t,((s=e).lower===void 0||(s.lowerOpen?0<Ft(i,s.lower):0<=Ft(i,s.lower)))&&(t=t,(e=e).upper===void 0||(e.upperOpen?Ft(t,e.upper)<0:Ft(t,e.upper)<=0));var i,s}function Di(t,e,L,s,u,p){if(!L||L.length===0)return t;var _=e.query.index,O=_.multiEntry,I=e.query.range,D=s.schema.primaryKey.extractKey,F=_.extractKey,R=(_.lowLevelIndex||_).extractKey,L=L.reduce(function(B,M){var j=B,U=[];if(M.type==="add"||M.type==="put")for(var q=new se,Z=M.values.length-1;0<=Z;--Z){var J,rt=M.values[Z],ft=D(rt);q.hasKey(ft)||(J=F(rt),(O&&f(J)?J.some(function(yt){return Nr(yt,I)}):Nr(J,I))&&(q.addKey(ft),U.push(rt)))}switch(M.type){case"add":var bt=new se().addKeys(e.values?B.map(function(Ct){return D(Ct)}):B),j=B.concat(e.values?U.filter(function(Ct){return Ct=D(Ct),!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}):U.map(function(Ct){return D(Ct)}).filter(function(Ct){return!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}));break;case"put":var dt=new se().addKeys(M.values.map(function(Ct){return D(Ct)}));j=B.filter(function(Ct){return!dt.hasKey(e.values?D(Ct):Ct)}).concat(e.values?U:U.map(function(Ct){return D(Ct)}));break;case"delete":var gt=new se().addKeys(M.keys);j=B.filter(function(Ct){return!gt.hasKey(e.values?D(Ct):Ct)});break;case"deleteRange":var wt=M.range;j=B.filter(function(Ct){return!Nr(D(Ct),wt)})}return j},t);return L===t?t:(L.sort(function(B,M){return Ft(R(B),R(M))||Ft(D(B),D(M))}),e.limit&&e.limit<1/0&&(L.length>e.limit?L.length=e.limit:t.length===e.limit&&L.length<e.limit&&(u.dirty=!0)),p?Object.freeze(L):L)}function Bi(t,e){return Ft(t.lower,e.lower)===0&&Ft(t.upper,e.upper)===0&&!!t.lowerOpen==!!e.lowerOpen&&!!t.upperOpen==!!e.upperOpen}function Za(t,e){return(function(i,s,u,p){if(i===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((s=Ft(i,s))===0){if(u&&p)return 0;if(u)return 1;if(p)return-1}return s})(t.lower,e.lower,t.lowerOpen,e.lowerOpen)<=0&&0<=(function(i,s,u,p){if(i===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((s=Ft(i,s))===0){if(u&&p)return 0;if(u)return-1;if(p)return 1}return s})(t.upper,e.upper,t.upperOpen,e.upperOpen)}function Va(t,e,i,s){t.subscribers.add(i),s.addEventListener("abort",function(){var u,p;t.subscribers.delete(i),t.subscribers.size===0&&(u=t,p=e,setTimeout(function(){u.subscribers.size===0&&Rt(p,u)},3e3))})}var Ga={stack:"dbcore",level:0,name:"Cache",create:function(t){var e=t.schema.name;return o(o({},t),{transaction:function(i,s,u){var p,_,O=t.transaction(i,s,u);return s==="readwrite"&&(_=(p=new AbortController).signal,u=function(I){return function(){if(p.abort(),s==="readwrite"){for(var D=new Set,F=0,R=i;F<R.length;F++){var L=R[F],B=Ze["idb://".concat(e,"/").concat(L)];if(B){var M=t.table(L),j=B.optimisticOps.filter(function(Ct){return Ct.trans===O});if(O._explicit&&I&&O.mutatedParts)for(var U=0,q=Object.values(B.queries.query);U<q.length;U++)for(var Z=0,J=(bt=q[U]).slice();Z<J.length;Z++)Ir((dt=J[Z]).obsSet,O.mutatedParts)&&(Rt(bt,dt),dt.subscribers.forEach(function(Ct){return D.add(Ct)}));else if(0<j.length){B.optimisticOps=B.optimisticOps.filter(function(Ct){return Ct.trans!==O});for(var rt=0,ft=Object.values(B.queries.query);rt<ft.length;rt++)for(var bt,dt,gt,wt=0,yt=(bt=ft[rt]).slice();wt<yt.length;wt++)(dt=yt[wt]).res!=null&&O.mutatedParts&&(I&&!dt.dirty?(gt=Object.isFrozen(dt.res),gt=Di(dt.res,dt.req,j,M,dt,gt),dt.dirty?(Rt(bt,dt),dt.subscribers.forEach(function(Ct){return D.add(Ct)})):gt!==dt.res&&(dt.res=gt,dt.promise=_t.resolve({result:gt}))):(dt.dirty&&Rt(bt,dt),dt.subscribers.forEach(function(Ct){return D.add(Ct)})))}}}D.forEach(function(Ct){return Ct()})}}},O.addEventListener("abort",u(!1),{signal:_}),O.addEventListener("error",u(!1),{signal:_}),O.addEventListener("complete",u(!0),{signal:_})),O},table:function(i){var s=t.table(i),u=s.schema.primaryKey;return o(o({},s),{mutate:function(p){var _=St.trans;if(u.outbound||_.db._options.cache==="disabled"||_.explicit||_.idbtrans.mode!=="readwrite")return s.mutate(p);var O=Ze["idb://".concat(e,"/").concat(i)];return O?(_=s.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||Fr(u,p).some(function(I){return I==null}))?(O.optimisticOps.push(p),p.mutatedParts&&tr(p.mutatedParts),_.then(function(I){0<I.numFailures&&(Rt(O.optimisticOps,p),(I=Ii(0,p,I))&&O.optimisticOps.push(I),p.mutatedParts&&tr(p.mutatedParts))}),_.catch(function(){Rt(O.optimisticOps,p),p.mutatedParts&&tr(p.mutatedParts)})):_.then(function(I){var D=Ii(0,o(o({},p),{values:p.values.map(function(F,R){var L;return I.failures[R]?F:(F=(L=u.keyPath)!==null&&L!==void 0&&L.includes(".")?Q(F):o({},F),X(F,u.keyPath,I.results[R]),F)})}),I);O.optimisticOps.push(D),queueMicrotask(function(){return p.mutatedParts&&tr(p.mutatedParts)})}),_):s.mutate(p)},query:function(p){if(!Ri(St,s)||!$i("query",p))return s.query(p);var _=((D=St.trans)===null||D===void 0?void 0:D.db._options.cache)==="immutable",R=St,O=R.requery,I=R.signal,D=(function(M,j,U,q){var Z=Ze["idb://".concat(M,"/").concat(j)];if(!Z)return[];if(!(j=Z.queries[U]))return[null,!1,Z,null];var J=j[(q.query?q.query.index.name:null)||""];if(!J)return[null,!1,Z,null];switch(U){case"query":var rt=J.find(function(ft){return ft.req.limit===q.limit&&ft.req.values===q.values&&Bi(ft.req.query.range,q.query.range)});return rt?[rt,!0,Z,J]:[J.find(function(ft){return("limit"in ft.req?ft.req.limit:1/0)>=q.limit&&(!q.values||ft.req.values)&&Za(ft.req.query.range,q.query.range)}),!1,Z,J];case"count":return rt=J.find(function(ft){return Bi(ft.req.query.range,q.query.range)}),[rt,!!rt,Z,J]}})(e,i,"query",p),F=D[0],R=D[1],L=D[2],B=D[3];return F&&R?F.obsSet=p.obsSet:(R=s.query(p).then(function(M){var j=M.result;if(F&&(F.res=j),_){for(var U=0,q=j.length;U<q;++U)Object.freeze(j[U]);Object.freeze(j)}else M.result=Q(j);return M}).catch(function(M){return B&&F&&Rt(B,F),Promise.reject(M)}),F={obsSet:p.obsSet,promise:R,subscribers:new Set,type:"query",req:p,dirty:!1},B?B.push(F):(B=[F],(L=L||(Ze["idb://".concat(e,"/").concat(i)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=B)),Va(F,B,O,I),F.promise.then(function(M){return{result:Di(M.result,p,L?.optimisticOps,s,F,_)}})}})}})}};function nr(t,e){return new Proxy(t,{get:function(i,s,u){return s==="db"?e:Reflect.get(i,s,u)}})}var Te=(Xt.prototype.version=function(t){if(isNaN(t)||t<.1)throw new mt.Type("Given version is not a positive number");if(t=Math.round(10*t)/10,this.idbdb||this._state.isBeingOpened)throw new mt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var e=this._versions,i=e.filter(function(s){return s._cfg.version===t})[0];return i||(i=new this.Version(t),e.push(i),e.sort(ja),i.stores({}),this._state.autoSchema=!1,i)},Xt.prototype._whenReady=function(t){var e=this;return this.idbdb&&(this._state.openComplete||St.letThrough||this._vip)?t():new _t(function(i,s){if(e._state.openComplete)return s(new mt.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return void s(new mt.DatabaseClosed);e.open().catch(Bt)}e._state.dbReadyPromise.then(i,s)}).then(t)},Xt.prototype.use=function(t){var e=t.stack,i=t.create,s=t.level,u=t.name;return u&&this.unuse({stack:e,name:u}),t=this._middlewares[e]||(this._middlewares[e]=[]),t.push({stack:e,create:i,level:s??10,name:u}),t.sort(function(p,_){return p.level-_.level}),this},Xt.prototype.unuse=function(t){var e=t.stack,i=t.name,s=t.create;return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(function(u){return s?u.create!==s:!!i&&u.name!==i})),this},Xt.prototype.open=function(){var t=this;return qe(be,function(){return La(t)})},Xt.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state,e=sn.indexOf(this);if(0<=e&&sn.splice(e,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new _t(function(i){t.dbReadyResolve=i}),t.openCanceller=new _t(function(i,s){t.cancelOpen=s}))},Xt.prototype.close=function(i){var e=(i===void 0?{disableAutoOpen:!0}:i).disableAutoOpen,i=this._state;e?(i.isBeingOpened&&i.cancelOpen(new mt.DatabaseClosed),this._close(),i.autoOpen=!1,i.dbOpenError=new mt.DatabaseClosed):(this._close(),i.autoOpen=this._options.autoOpen||i.isBeingOpened,i.openComplete=!1,i.dbOpenError=null)},Xt.prototype.delete=function(t){var e=this;t===void 0&&(t={disableAutoOpen:!0});var i=0<arguments.length&&typeof arguments[0]!="object",s=this._state;return new _t(function(u,p){function _(){e.close(t);var O=e._deps.indexedDB.deleteDatabase(e.name);O.onsuccess=Zt(function(){var I,D,F;I=e._deps,D=e.name,F=I.indexedDB,I=I.IDBKeyRange,Tr(F)||D===Un||Or(F,I).delete(D).catch(Bt),u()}),O.onerror=Se(p),O.onblocked=e._fireOnBlocked}if(i)throw new mt.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(_):_()})},Xt.prototype.backendDB=function(){return this.idbdb},Xt.prototype.isOpen=function(){return this.idbdb!==null},Xt.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},Xt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Xt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Xt.prototype,"tables",{get:function(){var t=this;return d(this._allTables).map(function(e){return t._allTables[e]})},enumerable:!1,configurable:!0}),Xt.prototype.transaction=function(){var t=function(e,i,s){var u=arguments.length;if(u<2)throw new mt.InvalidArgument("Too few arguments");for(var p=new Array(u-1);--u;)p[u-1]=arguments[u];return s=p.pop(),[e,pt(p),s]}.apply(this,arguments);return this._transaction.apply(this,t)},Xt.prototype._transaction=function(t,e,i){var s=this,u=St.trans;u&&u.db===this&&t.indexOf("!")===-1||(u=null);var p,_,O=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");try{if(_=e.map(function(D){if(D=D instanceof s.Table?D.name:D,typeof D!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return D}),t=="r"||t===yr)p=yr;else{if(t!="rw"&&t!=br)throw new mt.InvalidArgument("Invalid transaction mode: "+t);p=br}if(u){if(u.mode===yr&&p===br){if(!O)throw new mt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");u=null}u&&_.forEach(function(D){if(u&&u.storeNames.indexOf(D)===-1){if(!O)throw new mt.SubTransaction("Table "+D+" not included in parent transaction.");u=null}}),O&&u&&!u.active&&(u=null)}}catch(D){return u?u._promise(null,function(F,R){R(D)}):Yt(D)}var I=function D(F,R,L,B,M){return _t.resolve().then(function(){var j=St.transless||St,U=F._createTransaction(R,L,F._dbSchema,B);if(U.explicit=!0,j={trans:U,transless:j},B)U.idbtrans=B.idbtrans;else try{U.create(),U.idbtrans._explicit=!0,F._state.PR1398_maxLoop=3}catch(J){return J.name===Jt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return D(F,R,L,null,M)})):Yt(J)}var q,Z=G(M);return Z&&on(),j=_t.follow(function(){var J;(q=M.call(U,U))&&(Z?(J=Me.bind(null,null),q.then(J,J)):typeof q.next=="function"&&typeof q.throw=="function"&&(q=Mr(q)))},j),(q&&typeof q.then=="function"?_t.resolve(q).then(function(J){return U.active?J:Yt(new mt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return q})).then(function(J){return B&&U._resolve(),U._completion.then(function(){return J})}).catch(function(J){return U._reject(J),Yt(J)})})}.bind(null,this,p,_,u,i);return u?u._promise(p,I,"lock"):St.trans?qe(St.transless,function(){return s._whenReady(I)}):this._whenReady(I)},Xt.prototype.table=function(t){if(!w(this._allTables,t))throw new mt.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},Xt);function Xt(t,e){var i=this;this._middlewares={},this.verno=0;var s=Xt.dependencies;this._options=e=o({addons:Xt.addons,autoOpen:!0,indexedDB:s.indexedDB,IDBKeyRange:s.IDBKeyRange,cache:"cloned"},e),this._deps={indexedDB:e.indexedDB,IDBKeyRange:e.IDBKeyRange},s=e.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var u,p,_,O,I,D={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Bt,dbReadyPromise:null,cancelOpen:Bt,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:e.autoOpen};D.dbReadyPromise=new _t(function(R){D.dbReadyResolve=R}),D.openCanceller=new _t(function(R,L){D.cancelOpen=L}),this._state=D,this.name=t,this.on=bn(this,"populate","blocked","versionchange","close",{ready:[ot,Bt]}),this.once=function(R,L){var B=function(){for(var M=[],j=0;j<arguments.length;j++)M[j]=arguments[j];i.on(R).unsubscribe(B),L.apply(i,M)};return i.on(R,B)},this.on.ready.subscribe=z(this.on.ready.subscribe,function(R){return function(L,B){Xt.vip(function(){var M,j=i._state;j.openComplete?(j.dbOpenError||_t.resolve().then(L),B&&R(L)):j.onReadyBeingFired?(j.onReadyBeingFired.push(L),B&&R(L)):(R(L),M=i,B||R(function U(){M.on.ready.unsubscribe(L),M.on.ready.unsubscribe(U)}))})}}),this.Collection=(u=this,wn(Ra.prototype,function(q,U){this.db=u;var B=ui,M=null;if(U)try{B=U()}catch(Z){M=Z}var j=q._ctx,U=j.table,q=U.hook.reading.fire;this._ctx={table:U,index:j.index,isPrimKey:!j.index||U.schema.primKey.keyPath&&j.index===U.schema.primKey.name,range:B,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:M,or:j.or,valueMapper:q!==ae?q:null}})),this.Table=(p=this,wn(gi.prototype,function(R,L,B){this.db=p,this._tx=B,this.name=R,this.schema=L,this.hook=p._allTables[R]?p._allTables[R].hook:bn(null,{creating:[Y,Bt],reading:[h,ae],updating:[S,Bt],deleting:[P,Bt]})})),this.Transaction=(_=this,wn(Da.prototype,function(R,L,B,M,j){var U=this;R!=="readonly"&&L.forEach(function(q){q=(q=B[q])===null||q===void 0?void 0:q.yProps,q&&(L=L.concat(q.map(function(Z){return Z.updatesTable})))}),this.db=_,this.mode=R,this.storeNames=L,this.schema=B,this.chromeTransactionDurability=M,this.idbtrans=null,this.on=bn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new _t(function(q,Z){U._resolve=q,U._reject=Z}),this._completion.then(function(){U.active=!1,U.on.complete.fire()},function(q){var Z=U.active;return U.active=!1,U.on.error.fire(q),U.parent?U.parent._reject(q):Z&&U.idbtrans&&U.idbtrans.abort(),Yt(q)})})),this.Version=(O=this,wn(Ua.prototype,function(R){this.db=O,this._cfg={version:R,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(I=this,wn(_i.prototype,function(R,L,B){if(this.db=I,this._ctx={table:R,index:L===":id"?null:L,or:B},this._cmp=this._ascending=Ft,this._descending=function(M,j){return Ft(j,M)},this._max=function(M,j){return 0<Ft(M,j)?M:j},this._min=function(M,j){return Ft(M,j)<0?M:j},this._IDBKeyRange=I._deps.IDBKeyRange,!this._IDBKeyRange)throw new mt.MissingAPI})),this.on("versionchange",function(R){0<R.newVersion?console.warn("Another connection wants to upgrade database '".concat(i.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(i.name,"'. Closing db now to resume the delete request.")),i.close({disableAutoOpen:!1})}),this.on("blocked",function(R){!R.newVersion||R.newVersion<R.oldVersion?console.warn("Dexie.delete('".concat(i.name,"') was blocked")):console.warn("Upgrade '".concat(i.name,"' blocked by other connection holding version ").concat(R.oldVersion/10))}),this._maxKey=kn(e.IDBKeyRange),this._createTransaction=function(R,L,B,M){return new i.Transaction(R,L,B,i._options.chromeTransactionDurability,M)},this._fireOnBlocked=function(R){i.on("blocked").fire(R),sn.filter(function(L){return L.name===i.name&&L!==i&&!L._state.vcFired}).map(function(L){return L.on("versionchange").fire(R)})},this.use(Wa),this.use(Ga),this.use(Ha),this.use(Ka),this.use(qa);var F=new Proxy(this,{get:function(R,L,B){if(L==="_vip")return!0;if(L==="table")return function(j){return nr(i.table(j),F)};var M=Reflect.get(R,L,B);return M instanceof gi?nr(M,F):L==="tables"?M.map(function(j){return nr(j,F)}):L==="_createTransaction"?function(){return nr(M.apply(this,arguments),F)}:M}});this.vip=F,s.forEach(function(R){return R(i)})}var rr,we=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ya=(Ur.prototype.subscribe=function(t,e,i){return this._subscribe(t&&typeof t!="function"?t:{next:t,error:e,complete:i})},Ur.prototype[we]=function(){return this},Ur);function Ur(t){this._subscribe=t}try{rr={indexedDB:c.indexedDB||c.mozIndexedDB||c.webkitIndexedDB||c.msIndexedDB,IDBKeyRange:c.IDBKeyRange||c.webkitIDBKeyRange}}catch{rr={indexedDB:null,IDBKeyRange:null}}function zi(t){var e,i=!1,s=new Ya(function(u){var p=G(t),_,O=!1,I={},D={},F={get closed(){return O},unsubscribe:function(){O||(O=!0,_&&_.abort(),R&&Ne.storagemutated.unsubscribe(B))}};u.start&&u.start(F);var R=!1,L=function(){return vr(M)},B=function(j){Qn(I,j),Ir(D,I)&&L()},M=function(){var j,U,q;!O&&rr.indexedDB&&(I={},j={},_&&_.abort(),_=new AbortController,q=(function(Z){var J=rn();try{p&&on();var rt=ze(t,Z);return rt=p?rt.finally(Me):rt}finally{J&&an()}})(U={subscr:j,signal:_.signal,requery:L,querier:t,trans:null}),Promise.resolve(q).then(function(Z){i=!0,e=Z,O||U.signal.aborted||(I={},(function(J){for(var rt in J)if(w(J,rt))return;return 1})(D=j)||R||(Ne(xn,B),R=!0),vr(function(){return!O&&u.next&&u.next(Z)}))},function(Z){i=!1,["DatabaseClosedError","AbortError"].includes(Z?.name)||O||vr(function(){O||u.error&&u.error(Z)})}))};return setTimeout(L,0),F});return s.hasValue=function(){return i},s.getValue=function(){return e},s}var Ve=Te;function Lr(t){var e=Ue;try{Ue=!0,Ne.storagemutated.fire(t),zr(t,!0)}finally{Ue=e}}C(Ve,o(o({},qt),{delete:function(t){return new Ve(t,{addons:[]}).delete()},exists:function(t){return new Ve(t,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(t){try{return e=Ve.dependencies,i=e.indexedDB,e=e.IDBKeyRange,(Tr(i)?Promise.resolve(i.databases()).then(function(s){return s.map(function(u){return u.name}).filter(function(u){return u!==Un})}):Or(i,e).toCollection().primaryKeys()).then(t)}catch{return Yt(new mt.MissingAPI)}var e,i},defineClass:function(){return function(t){g(this,t)}},ignoreTransaction:function(t){return St.trans?qe(St.transless,t):t()},vip:Rr,async:function(t){return function(){try{var e=Mr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:_t.resolve(e)}catch(i){return Yt(i)}}},spawn:function(t,e,i){try{var s=Mr(t.apply(i,e||[]));return s&&typeof s.then=="function"?s:_t.resolve(s)}catch(u){return Yt(u)}},currentTransaction:{get:function(){return St.trans||null}},waitFor:function(t,e){return e=_t.resolve(typeof t=="function"?Ve.ignoreTransaction(t):t).timeout(e||6e4),St.trans?St.trans.waitFor(e):e},Promise:_t,debug:{get:function(){return at},set:function(t){H(t)}},derive:y,extend:g,props:C,override:z,Events:bn,on:Ne,liveQuery:zi,extendObservabilitySet:Qn,getByKeyPath:nt,setByKeyPath:X,delByKeyPath:function(t,e){typeof e=="string"?X(t,e,void 0):"length"in e&&[].map.call(e,function(i){X(t,i,void 0)})},shallowClone:ct,deepClone:Q,getObjectDiff:jr,cmp:Ft,asap:K,minKey:-1/0,addons:[],connections:sn,errnames:Jt,dependencies:rr,cache:Ze,semVer:"4.2.1",version:"4.2.1".split(".").map(function(t){return parseInt(t)}).reduce(function(t,e,i){return t+e/Math.pow(10,2*i)})})),Ve.maxKey=kn(Ve.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Ne(xn,function(t){Ue||(t=new CustomEvent(xr,{detail:t}),Ue=!0,dispatchEvent(t),Ue=!1)}),addEventListener(xr,function(t){t=t.detail,Ue||Lr(t)}));var dn,Ue=!1,Mi=function(){};return typeof BroadcastChannel<"u"&&((Mi=function(){(dn=new BroadcastChannel(xr)).onmessage=function(t){return t.data&&Lr(t.data)}})(),typeof dn.unref=="function"&&dn.unref(),Ne(xn,function(t){Ue||dn.postMessage(t)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(t){if(!Te.disableBfCache&&t.persisted){at&&console.debug("Dexie: handling persisted pagehide"),dn?.close();for(var e=0,i=sn;e<i.length;e++)i[e].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(t){!Te.disableBfCache&&t.persisted&&(at&&console.debug("Dexie: handling persisted pageshow"),Mi(),Lr({all:new se(-1/0,[[]])}))})),_t.rejectionMapper=function(t,e){return!t||t instanceof At||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Gt[t.name]?t:(e=new Gt[t.name](e||t.message,t),"stack"in t&&E(e,"stack",{get:function(){return this.inner.stack}}),e)},H(at),o(Te,Object.freeze({__proto__:null,Dexie:Te,liveQuery:zi,Entity:di,cmp:Ft,PropModification:yn,replacePrefix:function(t,e){return new yn({replacePrefix:[t,e]})},add:function(t){return new yn({add:t})},remove:function(t){return new yn({remove:t})},default:Te,RangeSet:se,mergeRanges:En,rangesOverlap:Ei}),{default:Te}),Te})})(sr)),sr.exports}var Do=Io();const Xr=ua(Do),Yi=Symbol.for("Dexie"),dr=globalThis[Yi]||(globalThis[Yi]=Xr);if(Xr.semVer!==dr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Xr.semVer} and ${dr.semVer}`);const{liveQuery:Vs,mergeRanges:Gs,rangesOverlap:Ys,RangeSet:Xs,cmp:Js,Entity:Qs,PropModification:tl,replacePrefix:el,add:nl,remove:rl,DexieYProvider:il}=dr;class Bo extends dr{constructor(){super("AudioAnnotationDB"),this.version(1).stores({recordings:"id, title, createdAt, isAnnotated",annotations:"recordingId, completedAt, updatedAt"})}}const _e=new Bo;async function da(a){const{v4:n}=await Ro(async()=>{const{v4:l}=await import("./index-gGVEG6Gs.js");return{v4:l}},[]),r=n(),o={...a,id:r,createdAt:Date.now(),isAnnotated:!1};return await _e.recordings.add(o),r}async function ha(){return await _e.recordings.orderBy("createdAt").reverse().toArray()}async function zo(a){return await _e.recordings.get(a)}async function Mo(a,n){await _e.recordings.update(a,n)}async function jo(a){await _e.recordings.delete(a),await _e.annotations.delete(a)}async function Wr(a){await _e.annotations.put(a),await _e.recordings.update(a.recordingId,{isAnnotated:!0})}async function On(a){return await _e.annotations.get(a)}async function Fo(a){await _e.annotations.delete(a),await _e.recordings.update(a,{isAnnotated:!1})}async function No(){const a=await _e.recordings.toArray(),n=/^Untitled (\d+)$/,r=a.map(o=>o.title.match(n)?.[1]).filter(Boolean).map(Number);return r.length>0?Math.max(...r)+1:1}function Uo(a){const n=a.lastIndexOf(".");return n===-1?a:a.substring(0,n)}async function Lo(a){return new Promise((n,r)=>{const o=new Audio,l=URL.createObjectURL(a);o.addEventListener("loadedmetadata",()=>{URL.revokeObjectURL(l),n(o.duration)}),o.addEventListener("error",()=>{URL.revokeObjectURL(l),r(new Error("Failed to load audio metadata"))}),o.src=l})}async function Ko(a){if(!a.type.startsWith("audio/"))throw new Error("File must be an audio file");const n=Uo(a.name),r=await Lo(a);return{id:await da({title:n,audioBlob:a,duration:r,source:"upload"}),title:n,duration:r}}async function qo(a){const n=Array.from(a),r=[];for(const o of n)try{const l=await Ko(o);r.push(l)}catch(l){console.error(`Failed to upload ${o.name}:`,l)}return r}function Wo(){return new Promise(a=>{const n=document.createElement("input");n.type="file",n.accept="audio/*",n.multiple=!0,n.addEventListener("change",()=>{a(n.files)}),n.addEventListener("cancel",()=>{a(null)}),n.click()})}function ar(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Hr={exports:{}};var Xi;function Ho(){return Xi||(Xi=1,(function(a,n){(function(r){a.exports=r()})(function(){return(function r(o,l,c){function d(b,x){if(!l[b]){if(!o[b]){var w=typeof ar=="function"&&ar;if(!x&&w)return w(b,!0);if(f)return f(b,!0);var C=new Error("Cannot find module '"+b+"'");throw C.code="MODULE_NOT_FOUND",C}var v=l[b]={exports:{}};o[b][0].call(v.exports,function(E){var y=o[b][1][E];return d(y||E)},v,v.exports,r,o,l,c)}return l[b].exports}for(var f=typeof ar=="function"&&ar,g=0;g<c.length;g++)d(c[g]);return d})({1:[function(r,o,l){var c=r("./utils"),d=r("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";l.encode=function(g){for(var b,x,w,C,v,E,y,A=[],k=0,T=g.length,z=T,W=c.getTypeOf(g)!=="string";k<g.length;)z=T-k,w=W?(b=g[k++],x=k<T?g[k++]:0,k<T?g[k++]:0):(b=g.charCodeAt(k++),x=k<T?g.charCodeAt(k++):0,k<T?g.charCodeAt(k++):0),C=b>>2,v=(3&b)<<4|x>>4,E=1<z?(15&x)<<2|w>>6:64,y=2<z?63&w:64,A.push(f.charAt(C)+f.charAt(v)+f.charAt(E)+f.charAt(y));return A.join("")},l.decode=function(g){var b,x,w,C,v,E,y=0,A=0,k="data:";if(g.substr(0,k.length)===k)throw new Error("Invalid base64 input, it looks like a data url.");var T,z=3*(g=g.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(g.charAt(g.length-1)===f.charAt(64)&&z--,g.charAt(g.length-2)===f.charAt(64)&&z--,z%1!=0)throw new Error("Invalid base64 input, bad content length.");for(T=d.uint8array?new Uint8Array(0|z):new Array(0|z);y<g.length;)b=f.indexOf(g.charAt(y++))<<2|(C=f.indexOf(g.charAt(y++)))>>4,x=(15&C)<<4|(v=f.indexOf(g.charAt(y++)))>>2,w=(3&v)<<6|(E=f.indexOf(g.charAt(y++))),T[A++]=b,v!==64&&(T[A++]=x),E!==64&&(T[A++]=w);return T}},{"./support":30,"./utils":32}],2:[function(r,o,l){var c=r("./external"),d=r("./stream/DataWorker"),f=r("./stream/Crc32Probe"),g=r("./stream/DataLengthProbe");function b(x,w,C,v,E){this.compressedSize=x,this.uncompressedSize=w,this.crc32=C,this.compression=v,this.compressedContent=E}b.prototype={getContentWorker:function(){var x=new d(c.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new g("data_length")),w=this;return x.on("end",function(){if(this.streamInfo.data_length!==w.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),x},getCompressedWorker:function(){return new d(c.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},b.createWorkerFrom=function(x,w,C){return x.pipe(new f).pipe(new g("uncompressedSize")).pipe(w.compressWorker(C)).pipe(new g("compressedSize")).withStreamInfo("compression",w)},o.exports=b},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,o,l){var c=r("./stream/GenericWorker");l.STORE={magic:"\0\0",compressWorker:function(){return new c("STORE compression")},uncompressWorker:function(){return new c("STORE decompression")}},l.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,o,l){var c=r("./utils"),d=(function(){for(var f,g=[],b=0;b<256;b++){f=b;for(var x=0;x<8;x++)f=1&f?3988292384^f>>>1:f>>>1;g[b]=f}return g})();o.exports=function(f,g){return f!==void 0&&f.length?c.getTypeOf(f)!=="string"?(function(b,x,w,C){var v=d,E=C+w;b^=-1;for(var y=C;y<E;y++)b=b>>>8^v[255&(b^x[y])];return-1^b})(0|g,f,f.length,0):(function(b,x,w,C){var v=d,E=C+w;b^=-1;for(var y=C;y<E;y++)b=b>>>8^v[255&(b^x.charCodeAt(y))];return-1^b})(0|g,f,f.length,0):0}},{"./utils":32}],5:[function(r,o,l){l.base64=!1,l.binary=!1,l.dir=!1,l.createFolders=!0,l.date=null,l.compression=null,l.compressionOptions=null,l.comment=null,l.unixPermissions=null,l.dosPermissions=null},{}],6:[function(r,o,l){var c=null;c=typeof Promise<"u"?Promise:r("lie"),o.exports={Promise:c}},{lie:37}],7:[function(r,o,l){var c=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",d=r("pako"),f=r("./utils"),g=r("./stream/GenericWorker"),b=c?"uint8array":"array";function x(w,C){g.call(this,"FlateWorker/"+w),this._pako=null,this._pakoAction=w,this._pakoOptions=C,this.meta={}}l.magic="\b\0",f.inherits(x,g),x.prototype.processChunk=function(w){this.meta=w.meta,this._pako===null&&this._createPako(),this._pako.push(f.transformTo(b,w.data),!1)},x.prototype.flush=function(){g.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},x.prototype.cleanUp=function(){g.prototype.cleanUp.call(this),this._pako=null},x.prototype._createPako=function(){this._pako=new d[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var w=this;this._pako.onData=function(C){w.push({data:C,meta:w.meta})}},l.compressWorker=function(w){return new x("Deflate",w)},l.uncompressWorker=function(){return new x("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,o,l){function c(v,E){var y,A="";for(y=0;y<E;y++)A+=String.fromCharCode(255&v),v>>>=8;return A}function d(v,E,y,A,k,T){var z,W,K=v.file,nt=v.compression,X=T!==b.utf8encode,ct=f.transformTo("string",T(K.name)),tt=f.transformTo("string",b.utf8encode(K.name)),pt=K.comment,Ot=f.transformTo("string",T(pt)),$=f.transformTo("string",b.utf8encode(pt)),Q=tt.length!==K.name.length,m=$.length!==pt.length,it="",Tt="",lt="",Rt=K.dir,st=K.date,Pt={crc32:0,compressedSize:0,uncompressedSize:0};E&&!y||(Pt.crc32=v.crc32,Pt.compressedSize=v.compressedSize,Pt.uncompressedSize=v.uncompressedSize);var G=0;E&&(G|=8),X||!Q&&!m||(G|=2048);var V=0,At=0;Rt&&(V|=16),k==="UNIX"?(At=798,V|=(function(vt,Lt){var Jt=vt;return vt||(Jt=Lt?16893:33204),(65535&Jt)<<16})(K.unixPermissions,Rt)):(At=20,V|=(function(vt){return 63&(vt||0)})(K.dosPermissions)),z=st.getUTCHours(),z<<=6,z|=st.getUTCMinutes(),z<<=5,z|=st.getUTCSeconds()/2,W=st.getUTCFullYear()-1980,W<<=4,W|=st.getUTCMonth()+1,W<<=5,W|=st.getUTCDate(),Q&&(Tt=c(1,1)+c(x(ct),4)+tt,it+="up"+c(Tt.length,2)+Tt),m&&(lt=c(1,1)+c(x(Ot),4)+$,it+="uc"+c(lt.length,2)+lt);var xt="";return xt+=`
\0`,xt+=c(G,2),xt+=nt.magic,xt+=c(z,2),xt+=c(W,2),xt+=c(Pt.crc32,4),xt+=c(Pt.compressedSize,4),xt+=c(Pt.uncompressedSize,4),xt+=c(ct.length,2),xt+=c(it.length,2),{fileRecord:w.LOCAL_FILE_HEADER+xt+ct+it,dirRecord:w.CENTRAL_FILE_HEADER+c(At,2)+xt+c(Ot.length,2)+"\0\0\0\0"+c(V,4)+c(A,4)+ct+it+Ot}}var f=r("../utils"),g=r("../stream/GenericWorker"),b=r("../utf8"),x=r("../crc32"),w=r("../signature");function C(v,E,y,A){g.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=E,this.zipPlatform=y,this.encodeFileName=A,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}f.inherits(C,g),C.prototype.push=function(v){var E=v.meta.percent||0,y=this.entriesCount,A=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,g.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:y?(E+100*(y-A-1))/y:100}}))},C.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var E=this.streamFiles&&!v.file.dir;if(E){var y=d(v,E,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},C.prototype.closedSource=function(v){this.accumulate=!1;var E=this.streamFiles&&!v.file.dir,y=d(v,E,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),E)this.push({data:(function(A){return w.DATA_DESCRIPTOR+c(A.crc32,4)+c(A.compressedSize,4)+c(A.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},C.prototype.flush=function(){for(var v=this.bytesWritten,E=0;E<this.dirRecords.length;E++)this.push({data:this.dirRecords[E],meta:{percent:100}});var y=this.bytesWritten-v,A=(function(k,T,z,W,K){var nt=f.transformTo("string",K(W));return w.CENTRAL_DIRECTORY_END+"\0\0\0\0"+c(k,2)+c(k,2)+c(T,4)+c(z,4)+c(nt.length,2)+nt})(this.dirRecords.length,y,v,this.zipComment,this.encodeFileName);this.push({data:A,meta:{percent:100}})},C.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},C.prototype.registerPrevious=function(v){this._sources.push(v);var E=this;return v.on("data",function(y){E.processChunk(y)}),v.on("end",function(){E.closedSource(E.previous.streamInfo),E._sources.length?E.prepareNextSource():E.end()}),v.on("error",function(y){E.error(y)}),this},C.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},C.prototype.error=function(v){var E=this._sources;if(!g.prototype.error.call(this,v))return!1;for(var y=0;y<E.length;y++)try{E[y].error(v)}catch{}return!0},C.prototype.lock=function(){g.prototype.lock.call(this);for(var v=this._sources,E=0;E<v.length;E++)v[E].lock()},o.exports=C},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,o,l){var c=r("../compressions"),d=r("./ZipFileWorker");l.generateWorker=function(f,g,b){var x=new d(g.streamFiles,b,g.platform,g.encodeFileName),w=0;try{f.forEach(function(C,v){w++;var E=(function(T,z){var W=T||z,K=c[W];if(!K)throw new Error(W+" is not a valid compression method !");return K})(v.options.compression,g.compression),y=v.options.compressionOptions||g.compressionOptions||{},A=v.dir,k=v.date;v._compressWorker(E,y).withStreamInfo("file",{name:C,dir:A,date:k,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(x)}),x.entriesCount=w}catch(C){x.error(C)}return x}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,o,l){function c(){if(!(this instanceof c))return new c;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var d=new c;for(var f in this)typeof this[f]!="function"&&(d[f]=this[f]);return d}}(c.prototype=r("./object")).loadAsync=r("./load"),c.support=r("./support"),c.defaults=r("./defaults"),c.version="3.10.1",c.loadAsync=function(d,f){return new c().loadAsync(d,f)},c.external=r("./external"),o.exports=c},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,o,l){var c=r("./utils"),d=r("./external"),f=r("./utf8"),g=r("./zipEntries"),b=r("./stream/Crc32Probe"),x=r("./nodejsUtils");function w(C){return new d.Promise(function(v,E){var y=C.decompressed.getContentWorker().pipe(new b);y.on("error",function(A){E(A)}).on("end",function(){y.streamInfo.crc32!==C.decompressed.crc32?E(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}o.exports=function(C,v){var E=this;return v=c.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:f.utf8decode}),x.isNode&&x.isStream(C)?d.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):c.prepareContent("the loaded zip file",C,!0,v.optimizedBinaryString,v.base64).then(function(y){var A=new g(v);return A.load(y),A}).then(function(y){var A=[d.Promise.resolve(y)],k=y.files;if(v.checkCRC32)for(var T=0;T<k.length;T++)A.push(w(k[T]));return d.Promise.all(A)}).then(function(y){for(var A=y.shift(),k=A.files,T=0;T<k.length;T++){var z=k[T],W=z.fileNameStr,K=c.resolve(z.fileNameStr);E.file(K,z.decompressed,{binary:!0,optimizedBinaryString:!0,date:z.date,dir:z.dir,comment:z.fileCommentStr.length?z.fileCommentStr:null,unixPermissions:z.unixPermissions,dosPermissions:z.dosPermissions,createFolders:v.createFolders}),z.dir||(E.file(K).unsafeOriginalName=W)}return A.zipComment.length&&(E.comment=A.zipComment),E})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,o,l){var c=r("../utils"),d=r("../stream/GenericWorker");function f(g,b){d.call(this,"Nodejs stream input adapter for "+g),this._upstreamEnded=!1,this._bindStream(b)}c.inherits(f,d),f.prototype._bindStream=function(g){var b=this;(this._stream=g).pause(),g.on("data",function(x){b.push({data:x,meta:{percent:0}})}).on("error",function(x){b.isPaused?this.generatedError=x:b.error(x)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},f.prototype.pause=function(){return!!d.prototype.pause.call(this)&&(this._stream.pause(),!0)},f.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},o.exports=f},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,o,l){var c=r("readable-stream").Readable;function d(f,g,b){c.call(this,g),this._helper=f;var x=this;f.on("data",function(w,C){x.push(w)||x._helper.pause(),b&&b(C)}).on("error",function(w){x.emit("error",w)}).on("end",function(){x.push(null)})}r("../utils").inherits(d,c),d.prototype._read=function(){this._helper.resume()},o.exports=d},{"../utils":32,"readable-stream":16}],14:[function(r,o,l){o.exports={isNode:typeof Buffer<"u",newBufferFrom:function(c,d){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(c,d);if(typeof c=="number")throw new Error('The "data" argument must not be a number');return new Buffer(c,d)},allocBuffer:function(c){if(Buffer.alloc)return Buffer.alloc(c);var d=new Buffer(c);return d.fill(0),d},isBuffer:function(c){return Buffer.isBuffer(c)},isStream:function(c){return c&&typeof c.on=="function"&&typeof c.pause=="function"&&typeof c.resume=="function"}}},{}],15:[function(r,o,l){function c(K,nt,X){var ct,tt=f.getTypeOf(nt),pt=f.extend(X||{},x);pt.date=pt.date||new Date,pt.compression!==null&&(pt.compression=pt.compression.toUpperCase()),typeof pt.unixPermissions=="string"&&(pt.unixPermissions=parseInt(pt.unixPermissions,8)),pt.unixPermissions&&16384&pt.unixPermissions&&(pt.dir=!0),pt.dosPermissions&&16&pt.dosPermissions&&(pt.dir=!0),pt.dir&&(K=k(K)),pt.createFolders&&(ct=A(K))&&T.call(this,ct,!0);var Ot=tt==="string"&&pt.binary===!1&&pt.base64===!1;X&&X.binary!==void 0||(pt.binary=!Ot),(nt instanceof w&&nt.uncompressedSize===0||pt.dir||!nt||nt.length===0)&&(pt.base64=!1,pt.binary=!0,nt="",pt.compression="STORE",tt="string");var $=null;$=nt instanceof w||nt instanceof g?nt:E.isNode&&E.isStream(nt)?new y(K,nt):f.prepareContent(K,nt,pt.binary,pt.optimizedBinaryString,pt.base64);var Q=new C(K,$,pt);this.files[K]=Q}var d=r("./utf8"),f=r("./utils"),g=r("./stream/GenericWorker"),b=r("./stream/StreamHelper"),x=r("./defaults"),w=r("./compressedObject"),C=r("./zipObject"),v=r("./generate"),E=r("./nodejsUtils"),y=r("./nodejs/NodejsStreamInputAdapter"),A=function(K){K.slice(-1)==="/"&&(K=K.substring(0,K.length-1));var nt=K.lastIndexOf("/");return 0<nt?K.substring(0,nt):""},k=function(K){return K.slice(-1)!=="/"&&(K+="/"),K},T=function(K,nt){return nt=nt!==void 0?nt:x.createFolders,K=k(K),this.files[K]||c.call(this,K,null,{dir:!0,createFolders:nt}),this.files[K]};function z(K){return Object.prototype.toString.call(K)==="[object RegExp]"}var W={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(K){var nt,X,ct;for(nt in this.files)ct=this.files[nt],(X=nt.slice(this.root.length,nt.length))&&nt.slice(0,this.root.length)===this.root&&K(X,ct)},filter:function(K){var nt=[];return this.forEach(function(X,ct){K(X,ct)&&nt.push(ct)}),nt},file:function(K,nt,X){if(arguments.length!==1)return K=this.root+K,c.call(this,K,nt,X),this;if(z(K)){var ct=K;return this.filter(function(pt,Ot){return!Ot.dir&&ct.test(pt)})}var tt=this.files[this.root+K];return tt&&!tt.dir?tt:null},folder:function(K){if(!K)return this;if(z(K))return this.filter(function(tt,pt){return pt.dir&&K.test(tt)});var nt=this.root+K,X=T.call(this,nt),ct=this.clone();return ct.root=X.name,ct},remove:function(K){K=this.root+K;var nt=this.files[K];if(nt||(K.slice(-1)!=="/"&&(K+="/"),nt=this.files[K]),nt&&!nt.dir)delete this.files[K];else for(var X=this.filter(function(tt,pt){return pt.name.slice(0,K.length)===K}),ct=0;ct<X.length;ct++)delete this.files[X[ct].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(K){var nt,X={};try{if((X=f.extend(K||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:d.utf8encode})).type=X.type.toLowerCase(),X.compression=X.compression.toUpperCase(),X.type==="binarystring"&&(X.type="string"),!X.type)throw new Error("No output type specified.");f.checkSupport(X.type),X.platform!=="darwin"&&X.platform!=="freebsd"&&X.platform!=="linux"&&X.platform!=="sunos"||(X.platform="UNIX"),X.platform==="win32"&&(X.platform="DOS");var ct=X.comment||this.comment||"";nt=v.generateWorker(this,X,ct)}catch(tt){(nt=new g("error")).error(tt)}return new b(nt,X.type||"string",X.mimeType)},generateAsync:function(K,nt){return this.generateInternalStream(K).accumulate(nt)},generateNodeStream:function(K,nt){return(K=K||{}).type||(K.type="nodebuffer"),this.generateInternalStream(K).toNodejsStream(nt)}};o.exports=W},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,o,l){o.exports=r("stream")},{stream:void 0}],17:[function(r,o,l){var c=r("./DataReader");function d(f){c.call(this,f);for(var g=0;g<this.data.length;g++)f[g]=255&f[g]}r("../utils").inherits(d,c),d.prototype.byteAt=function(f){return this.data[this.zero+f]},d.prototype.lastIndexOfSignature=function(f){for(var g=f.charCodeAt(0),b=f.charCodeAt(1),x=f.charCodeAt(2),w=f.charCodeAt(3),C=this.length-4;0<=C;--C)if(this.data[C]===g&&this.data[C+1]===b&&this.data[C+2]===x&&this.data[C+3]===w)return C-this.zero;return-1},d.prototype.readAndCheckSignature=function(f){var g=f.charCodeAt(0),b=f.charCodeAt(1),x=f.charCodeAt(2),w=f.charCodeAt(3),C=this.readData(4);return g===C[0]&&b===C[1]&&x===C[2]&&w===C[3]},d.prototype.readData=function(f){if(this.checkOffset(f),f===0)return[];var g=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,g},o.exports=d},{"../utils":32,"./DataReader":18}],18:[function(r,o,l){var c=r("../utils");function d(f){this.data=f,this.length=f.length,this.index=0,this.zero=0}d.prototype={checkOffset:function(f){this.checkIndex(this.index+f)},checkIndex:function(f){if(this.length<this.zero+f||f<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+f+"). Corrupted zip ?")},setIndex:function(f){this.checkIndex(f),this.index=f},skip:function(f){this.setIndex(this.index+f)},byteAt:function(){},readInt:function(f){var g,b=0;for(this.checkOffset(f),g=this.index+f-1;g>=this.index;g--)b=(b<<8)+this.byteAt(g);return this.index+=f,b},readString:function(f){return c.transformTo("string",this.readData(f))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var f=this.readInt(4);return new Date(Date.UTC(1980+(f>>25&127),(f>>21&15)-1,f>>16&31,f>>11&31,f>>5&63,(31&f)<<1))}},o.exports=d},{"../utils":32}],19:[function(r,o,l){var c=r("./Uint8ArrayReader");function d(f){c.call(this,f)}r("../utils").inherits(d,c),d.prototype.readData=function(f){this.checkOffset(f);var g=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,g},o.exports=d},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,o,l){var c=r("./DataReader");function d(f){c.call(this,f)}r("../utils").inherits(d,c),d.prototype.byteAt=function(f){return this.data.charCodeAt(this.zero+f)},d.prototype.lastIndexOfSignature=function(f){return this.data.lastIndexOf(f)-this.zero},d.prototype.readAndCheckSignature=function(f){return f===this.readData(4)},d.prototype.readData=function(f){this.checkOffset(f);var g=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,g},o.exports=d},{"../utils":32,"./DataReader":18}],21:[function(r,o,l){var c=r("./ArrayReader");function d(f){c.call(this,f)}r("../utils").inherits(d,c),d.prototype.readData=function(f){if(this.checkOffset(f),f===0)return new Uint8Array(0);var g=this.data.subarray(this.zero+this.index,this.zero+this.index+f);return this.index+=f,g},o.exports=d},{"../utils":32,"./ArrayReader":17}],22:[function(r,o,l){var c=r("../utils"),d=r("../support"),f=r("./ArrayReader"),g=r("./StringReader"),b=r("./NodeBufferReader"),x=r("./Uint8ArrayReader");o.exports=function(w){var C=c.getTypeOf(w);return c.checkSupport(C),C!=="string"||d.uint8array?C==="nodebuffer"?new b(w):d.uint8array?new x(c.transformTo("uint8array",w)):new f(c.transformTo("array",w)):new g(w)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,o,l){l.LOCAL_FILE_HEADER="PK",l.CENTRAL_FILE_HEADER="PK",l.CENTRAL_DIRECTORY_END="PK",l.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",l.ZIP64_CENTRAL_DIRECTORY_END="PK",l.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,o,l){var c=r("./GenericWorker"),d=r("../utils");function f(g){c.call(this,"ConvertWorker to "+g),this.destType=g}d.inherits(f,c),f.prototype.processChunk=function(g){this.push({data:d.transformTo(this.destType,g.data),meta:g.meta})},o.exports=f},{"../utils":32,"./GenericWorker":28}],25:[function(r,o,l){var c=r("./GenericWorker"),d=r("../crc32");function f(){c.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(f,c),f.prototype.processChunk=function(g){this.streamInfo.crc32=d(g.data,this.streamInfo.crc32||0),this.push(g)},o.exports=f},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,o,l){var c=r("../utils"),d=r("./GenericWorker");function f(g){d.call(this,"DataLengthProbe for "+g),this.propName=g,this.withStreamInfo(g,0)}c.inherits(f,d),f.prototype.processChunk=function(g){if(g){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+g.data.length}d.prototype.processChunk.call(this,g)},o.exports=f},{"../utils":32,"./GenericWorker":28}],27:[function(r,o,l){var c=r("../utils"),d=r("./GenericWorker");function f(g){d.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,g.then(function(x){b.dataIsReady=!0,b.data=x,b.max=x&&x.length||0,b.type=c.getTypeOf(x),b.isPaused||b._tickAndRepeat()},function(x){b.error(x)})}c.inherits(f,d),f.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this.data=null},f.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,c.delay(this._tickAndRepeat,[],this)),!0)},f.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(c.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},f.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var g=null,b=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":g=this.data.substring(this.index,b);break;case"uint8array":g=this.data.subarray(this.index,b);break;case"array":case"nodebuffer":g=this.data.slice(this.index,b)}return this.index=b,this.push({data:g,meta:{percent:this.max?this.index/this.max*100:0}})},o.exports=f},{"../utils":32,"./GenericWorker":28}],28:[function(r,o,l){function c(d){this.name=d||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}c.prototype={push:function(d){this.emit("data",d)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(d){this.emit("error",d)}return!0},error:function(d){return!this.isFinished&&(this.isPaused?this.generatedError=d:(this.isFinished=!0,this.emit("error",d),this.previous&&this.previous.error(d),this.cleanUp()),!0)},on:function(d,f){return this._listeners[d].push(f),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(d,f){if(this._listeners[d])for(var g=0;g<this._listeners[d].length;g++)this._listeners[d][g].call(this,f)},pipe:function(d){return d.registerPrevious(this)},registerPrevious:function(d){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=d.streamInfo,this.mergeStreamInfo(),this.previous=d;var f=this;return d.on("data",function(g){f.processChunk(g)}),d.on("end",function(){f.end()}),d.on("error",function(g){f.error(g)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var d=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),d=!0),this.previous&&this.previous.resume(),!d},flush:function(){},processChunk:function(d){this.push(d)},withStreamInfo:function(d,f){return this.extraStreamInfo[d]=f,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var d in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,d)&&(this.streamInfo[d]=this.extraStreamInfo[d])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var d="Worker "+this.name;return this.previous?this.previous+" -> "+d:d}},o.exports=c},{}],29:[function(r,o,l){var c=r("../utils"),d=r("./ConvertWorker"),f=r("./GenericWorker"),g=r("../base64"),b=r("../support"),x=r("../external"),w=null;if(b.nodestream)try{w=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function C(E,y){return new x.Promise(function(A,k){var T=[],z=E._internalType,W=E._outputType,K=E._mimeType;E.on("data",function(nt,X){T.push(nt),y&&y(X)}).on("error",function(nt){T=[],k(nt)}).on("end",function(){try{var nt=(function(X,ct,tt){switch(X){case"blob":return c.newBlob(c.transformTo("arraybuffer",ct),tt);case"base64":return g.encode(ct);default:return c.transformTo(X,ct)}})(W,(function(X,ct){var tt,pt=0,Ot=null,$=0;for(tt=0;tt<ct.length;tt++)$+=ct[tt].length;switch(X){case"string":return ct.join("");case"array":return Array.prototype.concat.apply([],ct);case"uint8array":for(Ot=new Uint8Array($),tt=0;tt<ct.length;tt++)Ot.set(ct[tt],pt),pt+=ct[tt].length;return Ot;case"nodebuffer":return Buffer.concat(ct);default:throw new Error("concat : unsupported type '"+X+"'")}})(z,T),K);A(nt)}catch(X){k(X)}T=[]}).resume()})}function v(E,y,A){var k=y;switch(y){case"blob":case"arraybuffer":k="uint8array";break;case"base64":k="string"}try{this._internalType=k,this._outputType=y,this._mimeType=A,c.checkSupport(k),this._worker=E.pipe(new d(k)),E.lock()}catch(T){this._worker=new f("error"),this._worker.error(T)}}v.prototype={accumulate:function(E){return C(this,E)},on:function(E,y){var A=this;return E==="data"?this._worker.on(E,function(k){y.call(A,k.data,k.meta)}):this._worker.on(E,function(){c.delay(y,arguments,A)}),this},resume:function(){return c.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(E){if(c.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new w(this,{objectMode:this._outputType!=="nodebuffer"},E)}},o.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,o,l){if(l.base64=!0,l.array=!0,l.string=!0,l.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",l.nodebuffer=typeof Buffer<"u",l.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")l.blob=!1;else{var c=new ArrayBuffer(0);try{l.blob=new Blob([c],{type:"application/zip"}).size===0}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);d.append(c),l.blob=d.getBlob("application/zip").size===0}catch{l.blob=!1}}}try{l.nodestream=!!r("readable-stream").Readable}catch{l.nodestream=!1}},{"readable-stream":16}],31:[function(r,o,l){for(var c=r("./utils"),d=r("./support"),f=r("./nodejsUtils"),g=r("./stream/GenericWorker"),b=new Array(256),x=0;x<256;x++)b[x]=252<=x?6:248<=x?5:240<=x?4:224<=x?3:192<=x?2:1;b[254]=b[254]=1;function w(){g.call(this,"utf-8 decode"),this.leftOver=null}function C(){g.call(this,"utf-8 encode")}l.utf8encode=function(v){return d.nodebuffer?f.newBufferFrom(v,"utf-8"):(function(E){var y,A,k,T,z,W=E.length,K=0;for(T=0;T<W;T++)(64512&(A=E.charCodeAt(T)))==55296&&T+1<W&&(64512&(k=E.charCodeAt(T+1)))==56320&&(A=65536+(A-55296<<10)+(k-56320),T++),K+=A<128?1:A<2048?2:A<65536?3:4;for(y=d.uint8array?new Uint8Array(K):new Array(K),T=z=0;z<K;T++)(64512&(A=E.charCodeAt(T)))==55296&&T+1<W&&(64512&(k=E.charCodeAt(T+1)))==56320&&(A=65536+(A-55296<<10)+(k-56320),T++),A<128?y[z++]=A:(A<2048?y[z++]=192|A>>>6:(A<65536?y[z++]=224|A>>>12:(y[z++]=240|A>>>18,y[z++]=128|A>>>12&63),y[z++]=128|A>>>6&63),y[z++]=128|63&A);return y})(v)},l.utf8decode=function(v){return d.nodebuffer?c.transformTo("nodebuffer",v).toString("utf-8"):(function(E){var y,A,k,T,z=E.length,W=new Array(2*z);for(y=A=0;y<z;)if((k=E[y++])<128)W[A++]=k;else if(4<(T=b[k]))W[A++]=65533,y+=T-1;else{for(k&=T===2?31:T===3?15:7;1<T&&y<z;)k=k<<6|63&E[y++],T--;1<T?W[A++]=65533:k<65536?W[A++]=k:(k-=65536,W[A++]=55296|k>>10&1023,W[A++]=56320|1023&k)}return W.length!==A&&(W.subarray?W=W.subarray(0,A):W.length=A),c.applyFromCharCode(W)})(v=c.transformTo(d.uint8array?"uint8array":"array",v))},c.inherits(w,g),w.prototype.processChunk=function(v){var E=c.transformTo(d.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(d.uint8array){var y=E;(E=new Uint8Array(y.length+this.leftOver.length)).set(this.leftOver,0),E.set(y,this.leftOver.length)}else E=this.leftOver.concat(E);this.leftOver=null}var A=(function(T,z){var W;for((z=z||T.length)>T.length&&(z=T.length),W=z-1;0<=W&&(192&T[W])==128;)W--;return W<0||W===0?z:W+b[T[W]]>z?W:z})(E),k=E;A!==E.length&&(d.uint8array?(k=E.subarray(0,A),this.leftOver=E.subarray(A,E.length)):(k=E.slice(0,A),this.leftOver=E.slice(A,E.length))),this.push({data:l.utf8decode(k),meta:v.meta})},w.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:l.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},l.Utf8DecodeWorker=w,c.inherits(C,g),C.prototype.processChunk=function(v){this.push({data:l.utf8encode(v.data),meta:v.meta})},l.Utf8EncodeWorker=C},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,o,l){var c=r("./support"),d=r("./base64"),f=r("./nodejsUtils"),g=r("./external");function b(y){return y}function x(y,A){for(var k=0;k<y.length;++k)A[k]=255&y.charCodeAt(k);return A}r("setimmediate"),l.newBlob=function(y,A){l.checkSupport("blob");try{return new Blob([y],{type:A})}catch{try{var k=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return k.append(y),k.getBlob(A)}catch{throw new Error("Bug : can't construct the Blob.")}}};var w={stringifyByChunk:function(y,A,k){var T=[],z=0,W=y.length;if(W<=k)return String.fromCharCode.apply(null,y);for(;z<W;)A==="array"||A==="nodebuffer"?T.push(String.fromCharCode.apply(null,y.slice(z,Math.min(z+k,W)))):T.push(String.fromCharCode.apply(null,y.subarray(z,Math.min(z+k,W)))),z+=k;return T.join("")},stringifyByChar:function(y){for(var A="",k=0;k<y.length;k++)A+=String.fromCharCode(y[k]);return A},applyCanBeUsed:{uint8array:(function(){try{return c.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return c.nodebuffer&&String.fromCharCode.apply(null,f.allocBuffer(1)).length===1}catch{return!1}})()}};function C(y){var A=65536,k=l.getTypeOf(y),T=!0;if(k==="uint8array"?T=w.applyCanBeUsed.uint8array:k==="nodebuffer"&&(T=w.applyCanBeUsed.nodebuffer),T)for(;1<A;)try{return w.stringifyByChunk(y,k,A)}catch{A=Math.floor(A/2)}return w.stringifyByChar(y)}function v(y,A){for(var k=0;k<y.length;k++)A[k]=y[k];return A}l.applyFromCharCode=C;var E={};E.string={string:b,array:function(y){return x(y,new Array(y.length))},arraybuffer:function(y){return E.string.uint8array(y).buffer},uint8array:function(y){return x(y,new Uint8Array(y.length))},nodebuffer:function(y){return x(y,f.allocBuffer(y.length))}},E.array={string:C,array:b,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return f.newBufferFrom(y)}},E.arraybuffer={string:function(y){return C(new Uint8Array(y))},array:function(y){return v(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:b,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return f.newBufferFrom(new Uint8Array(y))}},E.uint8array={string:C,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:b,nodebuffer:function(y){return f.newBufferFrom(y)}},E.nodebuffer={string:C,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return E.nodebuffer.uint8array(y).buffer},uint8array:function(y){return v(y,new Uint8Array(y.length))},nodebuffer:b},l.transformTo=function(y,A){if(A=A||"",!y)return A;l.checkSupport(y);var k=l.getTypeOf(A);return E[k][y](A)},l.resolve=function(y){for(var A=y.split("/"),k=[],T=0;T<A.length;T++){var z=A[T];z==="."||z===""&&T!==0&&T!==A.length-1||(z===".."?k.pop():k.push(z))}return k.join("/")},l.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":c.nodebuffer&&f.isBuffer(y)?"nodebuffer":c.uint8array&&y instanceof Uint8Array?"uint8array":c.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},l.checkSupport=function(y){if(!c[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},l.MAX_VALUE_16BITS=65535,l.MAX_VALUE_32BITS=-1,l.pretty=function(y){var A,k,T="";for(k=0;k<(y||"").length;k++)T+="\\x"+((A=y.charCodeAt(k))<16?"0":"")+A.toString(16).toUpperCase();return T},l.delay=function(y,A,k){setImmediate(function(){y.apply(k||null,A||[])})},l.inherits=function(y,A){function k(){}k.prototype=A.prototype,y.prototype=new k},l.extend=function(){var y,A,k={};for(y=0;y<arguments.length;y++)for(A in arguments[y])Object.prototype.hasOwnProperty.call(arguments[y],A)&&k[A]===void 0&&(k[A]=arguments[y][A]);return k},l.prepareContent=function(y,A,k,T,z){return g.Promise.resolve(A).then(function(W){return c.blob&&(W instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(W))!==-1)&&typeof FileReader<"u"?new g.Promise(function(K,nt){var X=new FileReader;X.onload=function(ct){K(ct.target.result)},X.onerror=function(ct){nt(ct.target.error)},X.readAsArrayBuffer(W)}):W}).then(function(W){var K=l.getTypeOf(W);return K?(K==="arraybuffer"?W=l.transformTo("uint8array",W):K==="string"&&(z?W=d.decode(W):k&&T!==!0&&(W=(function(nt){return x(nt,c.uint8array?new Uint8Array(nt.length):new Array(nt.length))})(W))),W):g.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(r,o,l){var c=r("./reader/readerFor"),d=r("./utils"),f=r("./signature"),g=r("./zipEntry"),b=r("./support");function x(w){this.files=[],this.loadOptions=w}x.prototype={checkSignature:function(w){if(!this.reader.readAndCheckSignature(w)){this.reader.index-=4;var C=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+d.pretty(C)+", expected "+d.pretty(w)+")")}},isSignature:function(w,C){var v=this.reader.index;this.reader.setIndex(w);var E=this.reader.readString(4)===C;return this.reader.setIndex(v),E},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var w=this.reader.readData(this.zipCommentLength),C=b.uint8array?"uint8array":"array",v=d.transformTo(C,w);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var w,C,v,E=this.zip64EndOfCentralSize-44;0<E;)w=this.reader.readInt(2),C=this.reader.readInt(4),v=this.reader.readData(C),this.zip64ExtensibleData[w]={id:w,length:C,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var w,C;for(w=0;w<this.files.length;w++)C=this.files[w],this.reader.setIndex(C.localHeaderOffset),this.checkSignature(f.LOCAL_FILE_HEADER),C.readLocalPart(this.reader),C.handleUTF8(),C.processAttributes()},readCentralDir:function(){var w;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(f.CENTRAL_FILE_HEADER);)(w=new g({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(w);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var w=this.reader.lastIndexOfSignature(f.CENTRAL_DIRECTORY_END);if(w<0)throw this.isSignature(0,f.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(w);var C=w;if(this.checkSignature(f.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===d.MAX_VALUE_16BITS||this.diskWithCentralDirStart===d.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===d.MAX_VALUE_16BITS||this.centralDirRecords===d.MAX_VALUE_16BITS||this.centralDirSize===d.MAX_VALUE_32BITS||this.centralDirOffset===d.MAX_VALUE_32BITS){if(this.zip64=!0,(w=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(w),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,f.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var E=C-v;if(0<E)this.isSignature(C,f.CENTRAL_FILE_HEADER)||(this.reader.zero=E);else if(E<0)throw new Error("Corrupted zip: missing "+Math.abs(E)+" bytes.")},prepareReader:function(w){this.reader=c(w)},load:function(w){this.prepareReader(w),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},o.exports=x},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(r,o,l){var c=r("./reader/readerFor"),d=r("./utils"),f=r("./compressedObject"),g=r("./crc32"),b=r("./utf8"),x=r("./compressions"),w=r("./support");function C(v,E){this.options=v,this.loadOptions=E}C.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var E,y;if(v.skip(22),this.fileNameLength=v.readInt(2),y=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(y),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((E=(function(A){for(var k in x)if(Object.prototype.hasOwnProperty.call(x,k)&&x[k].magic===A)return x[k];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+d.pretty(this.compressionMethod)+" unknown (inner file : "+d.transformTo("string",this.fileName)+")");this.decompressed=new f(this.compressedSize,this.uncompressedSize,this.crc32,E,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var E=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(E),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=c(this.extraFields[1].value);this.uncompressedSize===d.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===d.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===d.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===d.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var E,y,A,k=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<k;)E=v.readInt(2),y=v.readInt(2),A=v.readData(y),this.extraFields[E]={id:E,length:y,value:A};v.setIndex(k)},handleUTF8:function(){var v=w.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=b.utf8decode(this.fileName),this.fileCommentStr=b.utf8decode(this.fileComment);else{var E=this.findExtraFieldUnicodePath();if(E!==null)this.fileNameStr=E;else{var y=d.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(y)}var A=this.findExtraFieldUnicodeComment();if(A!==null)this.fileCommentStr=A;else{var k=d.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(k)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var E=c(v.value);return E.readInt(1)!==1||g(this.fileName)!==E.readInt(4)?null:b.utf8decode(E.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var E=c(v.value);return E.readInt(1)!==1||g(this.fileComment)!==E.readInt(4)?null:b.utf8decode(E.readData(v.length-5))}return null}},o.exports=C},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,o,l){function c(E,y,A){this.name=E,this.dir=A.dir,this.date=A.date,this.comment=A.comment,this.unixPermissions=A.unixPermissions,this.dosPermissions=A.dosPermissions,this._data=y,this._dataBinary=A.binary,this.options={compression:A.compression,compressionOptions:A.compressionOptions}}var d=r("./stream/StreamHelper"),f=r("./stream/DataWorker"),g=r("./utf8"),b=r("./compressedObject"),x=r("./stream/GenericWorker");c.prototype={internalStream:function(E){var y=null,A="string";try{if(!E)throw new Error("No output type specified.");var k=(A=E.toLowerCase())==="string"||A==="text";A!=="binarystring"&&A!=="text"||(A="string"),y=this._decompressWorker();var T=!this._dataBinary;T&&!k&&(y=y.pipe(new g.Utf8EncodeWorker)),!T&&k&&(y=y.pipe(new g.Utf8DecodeWorker))}catch(z){(y=new x("error")).error(z)}return new d(y,A,"")},async:function(E,y){return this.internalStream(E).accumulate(y)},nodeStream:function(E,y){return this.internalStream(E||"nodebuffer").toNodejsStream(y)},_compressWorker:function(E,y){if(this._data instanceof b&&this._data.compression.magic===E.magic)return this._data.getCompressedWorker();var A=this._decompressWorker();return this._dataBinary||(A=A.pipe(new g.Utf8EncodeWorker)),b.createWorkerFrom(A,E,y)},_decompressWorker:function(){return this._data instanceof b?this._data.getContentWorker():this._data instanceof x?this._data:new f(this._data)}};for(var w=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],C=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<w.length;v++)c.prototype[w[v]]=C;o.exports=c},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,o,l){(function(c){var d,f,g=c.MutationObserver||c.WebKitMutationObserver;if(g){var b=0,x=new g(E),w=c.document.createTextNode("");x.observe(w,{characterData:!0}),d=function(){w.data=b=++b%2}}else if(c.setImmediate||c.MessageChannel===void 0)d="document"in c&&"onreadystatechange"in c.document.createElement("script")?function(){var y=c.document.createElement("script");y.onreadystatechange=function(){E(),y.onreadystatechange=null,y.parentNode.removeChild(y),y=null},c.document.documentElement.appendChild(y)}:function(){setTimeout(E,0)};else{var C=new c.MessageChannel;C.port1.onmessage=E,d=function(){C.port2.postMessage(0)}}var v=[];function E(){var y,A;f=!0;for(var k=v.length;k;){for(A=v,v=[],y=-1;++y<k;)A[y]();k=v.length}f=!1}o.exports=function(y){v.push(y)!==1||f||d()}}).call(this,typeof Re<"u"?Re:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,o,l){var c=r("immediate");function d(){}var f={},g=["REJECTED"],b=["FULFILLED"],x=["PENDING"];function w(k){if(typeof k!="function")throw new TypeError("resolver must be a function");this.state=x,this.queue=[],this.outcome=void 0,k!==d&&y(this,k)}function C(k,T,z){this.promise=k,typeof T=="function"&&(this.onFulfilled=T,this.callFulfilled=this.otherCallFulfilled),typeof z=="function"&&(this.onRejected=z,this.callRejected=this.otherCallRejected)}function v(k,T,z){c(function(){var W;try{W=T(z)}catch(K){return f.reject(k,K)}W===k?f.reject(k,new TypeError("Cannot resolve promise with itself")):f.resolve(k,W)})}function E(k){var T=k&&k.then;if(k&&(typeof k=="object"||typeof k=="function")&&typeof T=="function")return function(){T.apply(k,arguments)}}function y(k,T){var z=!1;function W(X){z||(z=!0,f.reject(k,X))}function K(X){z||(z=!0,f.resolve(k,X))}var nt=A(function(){T(K,W)});nt.status==="error"&&W(nt.value)}function A(k,T){var z={};try{z.value=k(T),z.status="success"}catch(W){z.status="error",z.value=W}return z}(o.exports=w).prototype.finally=function(k){if(typeof k!="function")return this;var T=this.constructor;return this.then(function(z){return T.resolve(k()).then(function(){return z})},function(z){return T.resolve(k()).then(function(){throw z})})},w.prototype.catch=function(k){return this.then(null,k)},w.prototype.then=function(k,T){if(typeof k!="function"&&this.state===b||typeof T!="function"&&this.state===g)return this;var z=new this.constructor(d);return this.state!==x?v(z,this.state===b?k:T,this.outcome):this.queue.push(new C(z,k,T)),z},C.prototype.callFulfilled=function(k){f.resolve(this.promise,k)},C.prototype.otherCallFulfilled=function(k){v(this.promise,this.onFulfilled,k)},C.prototype.callRejected=function(k){f.reject(this.promise,k)},C.prototype.otherCallRejected=function(k){v(this.promise,this.onRejected,k)},f.resolve=function(k,T){var z=A(E,T);if(z.status==="error")return f.reject(k,z.value);var W=z.value;if(W)y(k,W);else{k.state=b,k.outcome=T;for(var K=-1,nt=k.queue.length;++K<nt;)k.queue[K].callFulfilled(T)}return k},f.reject=function(k,T){k.state=g,k.outcome=T;for(var z=-1,W=k.queue.length;++z<W;)k.queue[z].callRejected(T);return k},w.resolve=function(k){return k instanceof this?k:f.resolve(new this(d),k)},w.reject=function(k){var T=new this(d);return f.reject(T,k)},w.all=function(k){var T=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var z=k.length,W=!1;if(!z)return this.resolve([]);for(var K=new Array(z),nt=0,X=-1,ct=new this(d);++X<z;)tt(k[X],X);return ct;function tt(pt,Ot){T.resolve(pt).then(function($){K[Ot]=$,++nt!==z||W||(W=!0,f.resolve(ct,K))},function($){W||(W=!0,f.reject(ct,$))})}},w.race=function(k){var T=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var z=k.length,W=!1;if(!z)return this.resolve([]);for(var K=-1,nt=new this(d);++K<z;)X=k[K],T.resolve(X).then(function(ct){W||(W=!0,f.resolve(nt,ct))},function(ct){W||(W=!0,f.reject(nt,ct))});var X;return nt}},{immediate:36}],38:[function(r,o,l){var c={};(0,r("./lib/utils/common").assign)(c,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),o.exports=c},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,o,l){var c=r("./zlib/deflate"),d=r("./utils/common"),f=r("./utils/strings"),g=r("./zlib/messages"),b=r("./zlib/zstream"),x=Object.prototype.toString,w=0,C=-1,v=0,E=8;function y(k){if(!(this instanceof y))return new y(k);this.options=d.assign({level:C,method:E,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},k||{});var T=this.options;T.raw&&0<T.windowBits?T.windowBits=-T.windowBits:T.gzip&&0<T.windowBits&&T.windowBits<16&&(T.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var z=c.deflateInit2(this.strm,T.level,T.method,T.windowBits,T.memLevel,T.strategy);if(z!==w)throw new Error(g[z]);if(T.header&&c.deflateSetHeader(this.strm,T.header),T.dictionary){var W;if(W=typeof T.dictionary=="string"?f.string2buf(T.dictionary):x.call(T.dictionary)==="[object ArrayBuffer]"?new Uint8Array(T.dictionary):T.dictionary,(z=c.deflateSetDictionary(this.strm,W))!==w)throw new Error(g[z]);this._dict_set=!0}}function A(k,T){var z=new y(T);if(z.push(k,!0),z.err)throw z.msg||g[z.err];return z.result}y.prototype.push=function(k,T){var z,W,K=this.strm,nt=this.options.chunkSize;if(this.ended)return!1;W=T===~~T?T:T===!0?4:0,typeof k=="string"?K.input=f.string2buf(k):x.call(k)==="[object ArrayBuffer]"?K.input=new Uint8Array(k):K.input=k,K.next_in=0,K.avail_in=K.input.length;do{if(K.avail_out===0&&(K.output=new d.Buf8(nt),K.next_out=0,K.avail_out=nt),(z=c.deflate(K,W))!==1&&z!==w)return this.onEnd(z),!(this.ended=!0);K.avail_out!==0&&(K.avail_in!==0||W!==4&&W!==2)||(this.options.to==="string"?this.onData(f.buf2binstring(d.shrinkBuf(K.output,K.next_out))):this.onData(d.shrinkBuf(K.output,K.next_out)))}while((0<K.avail_in||K.avail_out===0)&&z!==1);return W===4?(z=c.deflateEnd(this.strm),this.onEnd(z),this.ended=!0,z===w):W!==2||(this.onEnd(w),!(K.avail_out=0))},y.prototype.onData=function(k){this.chunks.push(k)},y.prototype.onEnd=function(k){k===w&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=k,this.msg=this.strm.msg},l.Deflate=y,l.deflate=A,l.deflateRaw=function(k,T){return(T=T||{}).raw=!0,A(k,T)},l.gzip=function(k,T){return(T=T||{}).gzip=!0,A(k,T)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,o,l){var c=r("./zlib/inflate"),d=r("./utils/common"),f=r("./utils/strings"),g=r("./zlib/constants"),b=r("./zlib/messages"),x=r("./zlib/zstream"),w=r("./zlib/gzheader"),C=Object.prototype.toString;function v(y){if(!(this instanceof v))return new v(y);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},y||{});var A=this.options;A.raw&&0<=A.windowBits&&A.windowBits<16&&(A.windowBits=-A.windowBits,A.windowBits===0&&(A.windowBits=-15)),!(0<=A.windowBits&&A.windowBits<16)||y&&y.windowBits||(A.windowBits+=32),15<A.windowBits&&A.windowBits<48&&(15&A.windowBits)==0&&(A.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new x,this.strm.avail_out=0;var k=c.inflateInit2(this.strm,A.windowBits);if(k!==g.Z_OK)throw new Error(b[k]);this.header=new w,c.inflateGetHeader(this.strm,this.header)}function E(y,A){var k=new v(A);if(k.push(y,!0),k.err)throw k.msg||b[k.err];return k.result}v.prototype.push=function(y,A){var k,T,z,W,K,nt,X=this.strm,ct=this.options.chunkSize,tt=this.options.dictionary,pt=!1;if(this.ended)return!1;T=A===~~A?A:A===!0?g.Z_FINISH:g.Z_NO_FLUSH,typeof y=="string"?X.input=f.binstring2buf(y):C.call(y)==="[object ArrayBuffer]"?X.input=new Uint8Array(y):X.input=y,X.next_in=0,X.avail_in=X.input.length;do{if(X.avail_out===0&&(X.output=new d.Buf8(ct),X.next_out=0,X.avail_out=ct),(k=c.inflate(X,g.Z_NO_FLUSH))===g.Z_NEED_DICT&&tt&&(nt=typeof tt=="string"?f.string2buf(tt):C.call(tt)==="[object ArrayBuffer]"?new Uint8Array(tt):tt,k=c.inflateSetDictionary(this.strm,nt)),k===g.Z_BUF_ERROR&&pt===!0&&(k=g.Z_OK,pt=!1),k!==g.Z_STREAM_END&&k!==g.Z_OK)return this.onEnd(k),!(this.ended=!0);X.next_out&&(X.avail_out!==0&&k!==g.Z_STREAM_END&&(X.avail_in!==0||T!==g.Z_FINISH&&T!==g.Z_SYNC_FLUSH)||(this.options.to==="string"?(z=f.utf8border(X.output,X.next_out),W=X.next_out-z,K=f.buf2string(X.output,z),X.next_out=W,X.avail_out=ct-W,W&&d.arraySet(X.output,X.output,z,W,0),this.onData(K)):this.onData(d.shrinkBuf(X.output,X.next_out)))),X.avail_in===0&&X.avail_out===0&&(pt=!0)}while((0<X.avail_in||X.avail_out===0)&&k!==g.Z_STREAM_END);return k===g.Z_STREAM_END&&(T=g.Z_FINISH),T===g.Z_FINISH?(k=c.inflateEnd(this.strm),this.onEnd(k),this.ended=!0,k===g.Z_OK):T!==g.Z_SYNC_FLUSH||(this.onEnd(g.Z_OK),!(X.avail_out=0))},v.prototype.onData=function(y){this.chunks.push(y)},v.prototype.onEnd=function(y){y===g.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},l.Inflate=v,l.inflate=E,l.inflateRaw=function(y,A){return(A=A||{}).raw=!0,E(y,A)},l.ungzip=E},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,o,l){var c=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";l.assign=function(g){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var x=b.shift();if(x){if(typeof x!="object")throw new TypeError(x+"must be non-object");for(var w in x)x.hasOwnProperty(w)&&(g[w]=x[w])}}return g},l.shrinkBuf=function(g,b){return g.length===b?g:g.subarray?g.subarray(0,b):(g.length=b,g)};var d={arraySet:function(g,b,x,w,C){if(b.subarray&&g.subarray)g.set(b.subarray(x,x+w),C);else for(var v=0;v<w;v++)g[C+v]=b[x+v]},flattenChunks:function(g){var b,x,w,C,v,E;for(b=w=0,x=g.length;b<x;b++)w+=g[b].length;for(E=new Uint8Array(w),b=C=0,x=g.length;b<x;b++)v=g[b],E.set(v,C),C+=v.length;return E}},f={arraySet:function(g,b,x,w,C){for(var v=0;v<w;v++)g[C+v]=b[x+v]},flattenChunks:function(g){return[].concat.apply([],g)}};l.setTyped=function(g){g?(l.Buf8=Uint8Array,l.Buf16=Uint16Array,l.Buf32=Int32Array,l.assign(l,d)):(l.Buf8=Array,l.Buf16=Array,l.Buf32=Array,l.assign(l,f))},l.setTyped(c)},{}],42:[function(r,o,l){var c=r("./common"),d=!0,f=!0;try{String.fromCharCode.apply(null,[0])}catch{d=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{f=!1}for(var g=new c.Buf8(256),b=0;b<256;b++)g[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;function x(w,C){if(C<65537&&(w.subarray&&f||!w.subarray&&d))return String.fromCharCode.apply(null,c.shrinkBuf(w,C));for(var v="",E=0;E<C;E++)v+=String.fromCharCode(w[E]);return v}g[254]=g[254]=1,l.string2buf=function(w){var C,v,E,y,A,k=w.length,T=0;for(y=0;y<k;y++)(64512&(v=w.charCodeAt(y)))==55296&&y+1<k&&(64512&(E=w.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(E-56320),y++),T+=v<128?1:v<2048?2:v<65536?3:4;for(C=new c.Buf8(T),y=A=0;A<T;y++)(64512&(v=w.charCodeAt(y)))==55296&&y+1<k&&(64512&(E=w.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(E-56320),y++),v<128?C[A++]=v:(v<2048?C[A++]=192|v>>>6:(v<65536?C[A++]=224|v>>>12:(C[A++]=240|v>>>18,C[A++]=128|v>>>12&63),C[A++]=128|v>>>6&63),C[A++]=128|63&v);return C},l.buf2binstring=function(w){return x(w,w.length)},l.binstring2buf=function(w){for(var C=new c.Buf8(w.length),v=0,E=C.length;v<E;v++)C[v]=w.charCodeAt(v);return C},l.buf2string=function(w,C){var v,E,y,A,k=C||w.length,T=new Array(2*k);for(v=E=0;v<k;)if((y=w[v++])<128)T[E++]=y;else if(4<(A=g[y]))T[E++]=65533,v+=A-1;else{for(y&=A===2?31:A===3?15:7;1<A&&v<k;)y=y<<6|63&w[v++],A--;1<A?T[E++]=65533:y<65536?T[E++]=y:(y-=65536,T[E++]=55296|y>>10&1023,T[E++]=56320|1023&y)}return x(T,E)},l.utf8border=function(w,C){var v;for((C=C||w.length)>w.length&&(C=w.length),v=C-1;0<=v&&(192&w[v])==128;)v--;return v<0||v===0?C:v+g[w[v]]>C?v:C}},{"./common":41}],43:[function(r,o,l){o.exports=function(c,d,f,g){for(var b=65535&c|0,x=c>>>16&65535|0,w=0;f!==0;){for(f-=w=2e3<f?2e3:f;x=x+(b=b+d[g++]|0)|0,--w;);b%=65521,x%=65521}return b|x<<16|0}},{}],44:[function(r,o,l){o.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,o,l){var c=(function(){for(var d,f=[],g=0;g<256;g++){d=g;for(var b=0;b<8;b++)d=1&d?3988292384^d>>>1:d>>>1;f[g]=d}return f})();o.exports=function(d,f,g,b){var x=c,w=b+g;d^=-1;for(var C=b;C<w;C++)d=d>>>8^x[255&(d^f[C])];return-1^d}},{}],46:[function(r,o,l){var c,d=r("../utils/common"),f=r("./trees"),g=r("./adler32"),b=r("./crc32"),x=r("./messages"),w=0,C=4,v=0,E=-2,y=-1,A=4,k=2,T=8,z=9,W=286,K=30,nt=19,X=2*W+1,ct=15,tt=3,pt=258,Ot=pt+tt+1,$=42,Q=113,m=1,it=2,Tt=3,lt=4;function Rt(h,et){return h.msg=x[et],et}function st(h){return(h<<1)-(4<h?9:0)}function Pt(h){for(var et=h.length;0<=--et;)h[et]=0}function G(h){var et=h.state,Y=et.pending;Y>h.avail_out&&(Y=h.avail_out),Y!==0&&(d.arraySet(h.output,et.pending_buf,et.pending_out,Y,h.next_out),h.next_out+=Y,et.pending_out+=Y,h.total_out+=Y,h.avail_out-=Y,et.pending-=Y,et.pending===0&&(et.pending_out=0))}function V(h,et){f._tr_flush_block(h,0<=h.block_start?h.block_start:-1,h.strstart-h.block_start,et),h.block_start=h.strstart,G(h.strm)}function At(h,et){h.pending_buf[h.pending++]=et}function xt(h,et){h.pending_buf[h.pending++]=et>>>8&255,h.pending_buf[h.pending++]=255&et}function vt(h,et){var Y,P,S=h.max_chain_length,N=h.strstart,ot=h.prev_length,at=h.nice_match,H=h.strstart>h.w_size-Ot?h.strstart-(h.w_size-Ot):0,ut=h.window,kt=h.w_mask,ht=h.prev,Et=h.strstart+pt,Nt=ut[N+ot-1],zt=ut[N+ot];h.prev_length>=h.good_match&&(S>>=2),at>h.lookahead&&(at=h.lookahead);do if(ut[(Y=et)+ot]===zt&&ut[Y+ot-1]===Nt&&ut[Y]===ut[N]&&ut[++Y]===ut[N+1]){N+=2,Y++;do;while(ut[++N]===ut[++Y]&&ut[++N]===ut[++Y]&&ut[++N]===ut[++Y]&&ut[++N]===ut[++Y]&&ut[++N]===ut[++Y]&&ut[++N]===ut[++Y]&&ut[++N]===ut[++Y]&&ut[++N]===ut[++Y]&&N<Et);if(P=pt-(Et-N),N=Et-pt,ot<P){if(h.match_start=et,at<=(ot=P))break;Nt=ut[N+ot-1],zt=ut[N+ot]}}while((et=ht[et&kt])>H&&--S!=0);return ot<=h.lookahead?ot:h.lookahead}function Lt(h){var et,Y,P,S,N,ot,at,H,ut,kt,ht=h.w_size;do{if(S=h.window_size-h.lookahead-h.strstart,h.strstart>=ht+(ht-Ot)){for(d.arraySet(h.window,h.window,ht,ht,0),h.match_start-=ht,h.strstart-=ht,h.block_start-=ht,et=Y=h.hash_size;P=h.head[--et],h.head[et]=ht<=P?P-ht:0,--Y;);for(et=Y=ht;P=h.prev[--et],h.prev[et]=ht<=P?P-ht:0,--Y;);S+=ht}if(h.strm.avail_in===0)break;if(ot=h.strm,at=h.window,H=h.strstart+h.lookahead,ut=S,kt=void 0,kt=ot.avail_in,ut<kt&&(kt=ut),Y=kt===0?0:(ot.avail_in-=kt,d.arraySet(at,ot.input,ot.next_in,kt,H),ot.state.wrap===1?ot.adler=g(ot.adler,at,kt,H):ot.state.wrap===2&&(ot.adler=b(ot.adler,at,kt,H)),ot.next_in+=kt,ot.total_in+=kt,kt),h.lookahead+=Y,h.lookahead+h.insert>=tt)for(N=h.strstart-h.insert,h.ins_h=h.window[N],h.ins_h=(h.ins_h<<h.hash_shift^h.window[N+1])&h.hash_mask;h.insert&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[N+tt-1])&h.hash_mask,h.prev[N&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=N,N++,h.insert--,!(h.lookahead+h.insert<tt)););}while(h.lookahead<Ot&&h.strm.avail_in!==0)}function Jt(h,et){for(var Y,P;;){if(h.lookahead<Ot){if(Lt(h),h.lookahead<Ot&&et===w)return m;if(h.lookahead===0)break}if(Y=0,h.lookahead>=tt&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+tt-1])&h.hash_mask,Y=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),Y!==0&&h.strstart-Y<=h.w_size-Ot&&(h.match_length=vt(h,Y)),h.match_length>=tt)if(P=f._tr_tally(h,h.strstart-h.match_start,h.match_length-tt),h.lookahead-=h.match_length,h.match_length<=h.max_lazy_match&&h.lookahead>=tt){for(h.match_length--;h.strstart++,h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+tt-1])&h.hash_mask,Y=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart,--h.match_length!=0;);h.strstart++}else h.strstart+=h.match_length,h.match_length=0,h.ins_h=h.window[h.strstart],h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+1])&h.hash_mask;else P=f._tr_tally(h,0,h.window[h.strstart]),h.lookahead--,h.strstart++;if(P&&(V(h,!1),h.strm.avail_out===0))return m}return h.insert=h.strstart<tt-1?h.strstart:tt-1,et===C?(V(h,!0),h.strm.avail_out===0?Tt:lt):h.last_lit&&(V(h,!1),h.strm.avail_out===0)?m:it}function jt(h,et){for(var Y,P,S;;){if(h.lookahead<Ot){if(Lt(h),h.lookahead<Ot&&et===w)return m;if(h.lookahead===0)break}if(Y=0,h.lookahead>=tt&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+tt-1])&h.hash_mask,Y=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),h.prev_length=h.match_length,h.prev_match=h.match_start,h.match_length=tt-1,Y!==0&&h.prev_length<h.max_lazy_match&&h.strstart-Y<=h.w_size-Ot&&(h.match_length=vt(h,Y),h.match_length<=5&&(h.strategy===1||h.match_length===tt&&4096<h.strstart-h.match_start)&&(h.match_length=tt-1)),h.prev_length>=tt&&h.match_length<=h.prev_length){for(S=h.strstart+h.lookahead-tt,P=f._tr_tally(h,h.strstart-1-h.prev_match,h.prev_length-tt),h.lookahead-=h.prev_length-1,h.prev_length-=2;++h.strstart<=S&&(h.ins_h=(h.ins_h<<h.hash_shift^h.window[h.strstart+tt-1])&h.hash_mask,Y=h.prev[h.strstart&h.w_mask]=h.head[h.ins_h],h.head[h.ins_h]=h.strstart),--h.prev_length!=0;);if(h.match_available=0,h.match_length=tt-1,h.strstart++,P&&(V(h,!1),h.strm.avail_out===0))return m}else if(h.match_available){if((P=f._tr_tally(h,0,h.window[h.strstart-1]))&&V(h,!1),h.strstart++,h.lookahead--,h.strm.avail_out===0)return m}else h.match_available=1,h.strstart++,h.lookahead--}return h.match_available&&(P=f._tr_tally(h,0,h.window[h.strstart-1]),h.match_available=0),h.insert=h.strstart<tt-1?h.strstart:tt-1,et===C?(V(h,!0),h.strm.avail_out===0?Tt:lt):h.last_lit&&(V(h,!1),h.strm.avail_out===0)?m:it}function mt(h,et,Y,P,S){this.good_length=h,this.max_lazy=et,this.nice_length=Y,this.max_chain=P,this.func=S}function Gt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=T,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new d.Buf16(2*X),this.dyn_dtree=new d.Buf16(2*(2*K+1)),this.bl_tree=new d.Buf16(2*(2*nt+1)),Pt(this.dyn_ltree),Pt(this.dyn_dtree),Pt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new d.Buf16(ct+1),this.heap=new d.Buf16(2*W+1),Pt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new d.Buf16(2*W+1),Pt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function qt(h){var et;return h&&h.state?(h.total_in=h.total_out=0,h.data_type=k,(et=h.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?$:Q,h.adler=et.wrap===2?0:1,et.last_flush=w,f._tr_init(et),v):Rt(h,E)}function Bt(h){var et=qt(h);return et===v&&(function(Y){Y.window_size=2*Y.w_size,Pt(Y.head),Y.max_lazy_match=c[Y.level].max_lazy,Y.good_match=c[Y.level].good_length,Y.nice_match=c[Y.level].nice_length,Y.max_chain_length=c[Y.level].max_chain,Y.strstart=0,Y.block_start=0,Y.lookahead=0,Y.insert=0,Y.match_length=Y.prev_length=tt-1,Y.match_available=0,Y.ins_h=0})(h.state),et}function ae(h,et,Y,P,S,N){if(!h)return E;var ot=1;if(et===y&&(et=6),P<0?(ot=0,P=-P):15<P&&(ot=2,P-=16),S<1||z<S||Y!==T||P<8||15<P||et<0||9<et||N<0||A<N)return Rt(h,E);P===8&&(P=9);var at=new Gt;return(h.state=at).strm=h,at.wrap=ot,at.gzhead=null,at.w_bits=P,at.w_size=1<<at.w_bits,at.w_mask=at.w_size-1,at.hash_bits=S+7,at.hash_size=1<<at.hash_bits,at.hash_mask=at.hash_size-1,at.hash_shift=~~((at.hash_bits+tt-1)/tt),at.window=new d.Buf8(2*at.w_size),at.head=new d.Buf16(at.hash_size),at.prev=new d.Buf16(at.w_size),at.lit_bufsize=1<<S+6,at.pending_buf_size=4*at.lit_bufsize,at.pending_buf=new d.Buf8(at.pending_buf_size),at.d_buf=1*at.lit_bufsize,at.l_buf=3*at.lit_bufsize,at.level=et,at.strategy=N,at.method=Y,Bt(h)}c=[new mt(0,0,0,0,function(h,et){var Y=65535;for(Y>h.pending_buf_size-5&&(Y=h.pending_buf_size-5);;){if(h.lookahead<=1){if(Lt(h),h.lookahead===0&&et===w)return m;if(h.lookahead===0)break}h.strstart+=h.lookahead,h.lookahead=0;var P=h.block_start+Y;if((h.strstart===0||h.strstart>=P)&&(h.lookahead=h.strstart-P,h.strstart=P,V(h,!1),h.strm.avail_out===0)||h.strstart-h.block_start>=h.w_size-Ot&&(V(h,!1),h.strm.avail_out===0))return m}return h.insert=0,et===C?(V(h,!0),h.strm.avail_out===0?Tt:lt):(h.strstart>h.block_start&&(V(h,!1),h.strm.avail_out),m)}),new mt(4,4,8,4,Jt),new mt(4,5,16,8,Jt),new mt(4,6,32,32,Jt),new mt(4,4,16,16,jt),new mt(8,16,32,32,jt),new mt(8,16,128,128,jt),new mt(8,32,128,256,jt),new mt(32,128,258,1024,jt),new mt(32,258,258,4096,jt)],l.deflateInit=function(h,et){return ae(h,et,T,15,8,0)},l.deflateInit2=ae,l.deflateReset=Bt,l.deflateResetKeep=qt,l.deflateSetHeader=function(h,et){return h&&h.state?h.state.wrap!==2?E:(h.state.gzhead=et,v):E},l.deflate=function(h,et){var Y,P,S,N;if(!h||!h.state||5<et||et<0)return h?Rt(h,E):E;if(P=h.state,!h.output||!h.input&&h.avail_in!==0||P.status===666&&et!==C)return Rt(h,h.avail_out===0?-5:E);if(P.strm=h,Y=P.last_flush,P.last_flush=et,P.status===$)if(P.wrap===2)h.adler=0,At(P,31),At(P,139),At(P,8),P.gzhead?(At(P,(P.gzhead.text?1:0)+(P.gzhead.hcrc?2:0)+(P.gzhead.extra?4:0)+(P.gzhead.name?8:0)+(P.gzhead.comment?16:0)),At(P,255&P.gzhead.time),At(P,P.gzhead.time>>8&255),At(P,P.gzhead.time>>16&255),At(P,P.gzhead.time>>24&255),At(P,P.level===9?2:2<=P.strategy||P.level<2?4:0),At(P,255&P.gzhead.os),P.gzhead.extra&&P.gzhead.extra.length&&(At(P,255&P.gzhead.extra.length),At(P,P.gzhead.extra.length>>8&255)),P.gzhead.hcrc&&(h.adler=b(h.adler,P.pending_buf,P.pending,0)),P.gzindex=0,P.status=69):(At(P,0),At(P,0),At(P,0),At(P,0),At(P,0),At(P,P.level===9?2:2<=P.strategy||P.level<2?4:0),At(P,3),P.status=Q);else{var ot=T+(P.w_bits-8<<4)<<8;ot|=(2<=P.strategy||P.level<2?0:P.level<6?1:P.level===6?2:3)<<6,P.strstart!==0&&(ot|=32),ot+=31-ot%31,P.status=Q,xt(P,ot),P.strstart!==0&&(xt(P,h.adler>>>16),xt(P,65535&h.adler)),h.adler=1}if(P.status===69)if(P.gzhead.extra){for(S=P.pending;P.gzindex<(65535&P.gzhead.extra.length)&&(P.pending!==P.pending_buf_size||(P.gzhead.hcrc&&P.pending>S&&(h.adler=b(h.adler,P.pending_buf,P.pending-S,S)),G(h),S=P.pending,P.pending!==P.pending_buf_size));)At(P,255&P.gzhead.extra[P.gzindex]),P.gzindex++;P.gzhead.hcrc&&P.pending>S&&(h.adler=b(h.adler,P.pending_buf,P.pending-S,S)),P.gzindex===P.gzhead.extra.length&&(P.gzindex=0,P.status=73)}else P.status=73;if(P.status===73)if(P.gzhead.name){S=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>S&&(h.adler=b(h.adler,P.pending_buf,P.pending-S,S)),G(h),S=P.pending,P.pending===P.pending_buf_size)){N=1;break}N=P.gzindex<P.gzhead.name.length?255&P.gzhead.name.charCodeAt(P.gzindex++):0,At(P,N)}while(N!==0);P.gzhead.hcrc&&P.pending>S&&(h.adler=b(h.adler,P.pending_buf,P.pending-S,S)),N===0&&(P.gzindex=0,P.status=91)}else P.status=91;if(P.status===91)if(P.gzhead.comment){S=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>S&&(h.adler=b(h.adler,P.pending_buf,P.pending-S,S)),G(h),S=P.pending,P.pending===P.pending_buf_size)){N=1;break}N=P.gzindex<P.gzhead.comment.length?255&P.gzhead.comment.charCodeAt(P.gzindex++):0,At(P,N)}while(N!==0);P.gzhead.hcrc&&P.pending>S&&(h.adler=b(h.adler,P.pending_buf,P.pending-S,S)),N===0&&(P.status=103)}else P.status=103;if(P.status===103&&(P.gzhead.hcrc?(P.pending+2>P.pending_buf_size&&G(h),P.pending+2<=P.pending_buf_size&&(At(P,255&h.adler),At(P,h.adler>>8&255),h.adler=0,P.status=Q)):P.status=Q),P.pending!==0){if(G(h),h.avail_out===0)return P.last_flush=-1,v}else if(h.avail_in===0&&st(et)<=st(Y)&&et!==C)return Rt(h,-5);if(P.status===666&&h.avail_in!==0)return Rt(h,-5);if(h.avail_in!==0||P.lookahead!==0||et!==w&&P.status!==666){var at=P.strategy===2?(function(H,ut){for(var kt;;){if(H.lookahead===0&&(Lt(H),H.lookahead===0)){if(ut===w)return m;break}if(H.match_length=0,kt=f._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++,kt&&(V(H,!1),H.strm.avail_out===0))return m}return H.insert=0,ut===C?(V(H,!0),H.strm.avail_out===0?Tt:lt):H.last_lit&&(V(H,!1),H.strm.avail_out===0)?m:it})(P,et):P.strategy===3?(function(H,ut){for(var kt,ht,Et,Nt,zt=H.window;;){if(H.lookahead<=pt){if(Lt(H),H.lookahead<=pt&&ut===w)return m;if(H.lookahead===0)break}if(H.match_length=0,H.lookahead>=tt&&0<H.strstart&&(ht=zt[Et=H.strstart-1])===zt[++Et]&&ht===zt[++Et]&&ht===zt[++Et]){Nt=H.strstart+pt;do;while(ht===zt[++Et]&&ht===zt[++Et]&&ht===zt[++Et]&&ht===zt[++Et]&&ht===zt[++Et]&&ht===zt[++Et]&&ht===zt[++Et]&&ht===zt[++Et]&&Et<Nt);H.match_length=pt-(Nt-Et),H.match_length>H.lookahead&&(H.match_length=H.lookahead)}if(H.match_length>=tt?(kt=f._tr_tally(H,1,H.match_length-tt),H.lookahead-=H.match_length,H.strstart+=H.match_length,H.match_length=0):(kt=f._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++),kt&&(V(H,!1),H.strm.avail_out===0))return m}return H.insert=0,ut===C?(V(H,!0),H.strm.avail_out===0?Tt:lt):H.last_lit&&(V(H,!1),H.strm.avail_out===0)?m:it})(P,et):c[P.level].func(P,et);if(at!==Tt&&at!==lt||(P.status=666),at===m||at===Tt)return h.avail_out===0&&(P.last_flush=-1),v;if(at===it&&(et===1?f._tr_align(P):et!==5&&(f._tr_stored_block(P,0,0,!1),et===3&&(Pt(P.head),P.lookahead===0&&(P.strstart=0,P.block_start=0,P.insert=0))),G(h),h.avail_out===0))return P.last_flush=-1,v}return et!==C?v:P.wrap<=0?1:(P.wrap===2?(At(P,255&h.adler),At(P,h.adler>>8&255),At(P,h.adler>>16&255),At(P,h.adler>>24&255),At(P,255&h.total_in),At(P,h.total_in>>8&255),At(P,h.total_in>>16&255),At(P,h.total_in>>24&255)):(xt(P,h.adler>>>16),xt(P,65535&h.adler)),G(h),0<P.wrap&&(P.wrap=-P.wrap),P.pending!==0?v:1)},l.deflateEnd=function(h){var et;return h&&h.state?(et=h.state.status)!==$&&et!==69&&et!==73&&et!==91&&et!==103&&et!==Q&&et!==666?Rt(h,E):(h.state=null,et===Q?Rt(h,-3):v):E},l.deflateSetDictionary=function(h,et){var Y,P,S,N,ot,at,H,ut,kt=et.length;if(!h||!h.state||(N=(Y=h.state).wrap)===2||N===1&&Y.status!==$||Y.lookahead)return E;for(N===1&&(h.adler=g(h.adler,et,kt,0)),Y.wrap=0,kt>=Y.w_size&&(N===0&&(Pt(Y.head),Y.strstart=0,Y.block_start=0,Y.insert=0),ut=new d.Buf8(Y.w_size),d.arraySet(ut,et,kt-Y.w_size,Y.w_size,0),et=ut,kt=Y.w_size),ot=h.avail_in,at=h.next_in,H=h.input,h.avail_in=kt,h.next_in=0,h.input=et,Lt(Y);Y.lookahead>=tt;){for(P=Y.strstart,S=Y.lookahead-(tt-1);Y.ins_h=(Y.ins_h<<Y.hash_shift^Y.window[P+tt-1])&Y.hash_mask,Y.prev[P&Y.w_mask]=Y.head[Y.ins_h],Y.head[Y.ins_h]=P,P++,--S;);Y.strstart=P,Y.lookahead=tt-1,Lt(Y)}return Y.strstart+=Y.lookahead,Y.block_start=Y.strstart,Y.insert=Y.lookahead,Y.lookahead=0,Y.match_length=Y.prev_length=tt-1,Y.match_available=0,h.next_in=at,h.input=H,h.avail_in=ot,Y.wrap=N,v},l.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,o,l){o.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,o,l){o.exports=function(c,d){var f,g,b,x,w,C,v,E,y,A,k,T,z,W,K,nt,X,ct,tt,pt,Ot,$,Q,m,it;f=c.state,g=c.next_in,m=c.input,b=g+(c.avail_in-5),x=c.next_out,it=c.output,w=x-(d-c.avail_out),C=x+(c.avail_out-257),v=f.dmax,E=f.wsize,y=f.whave,A=f.wnext,k=f.window,T=f.hold,z=f.bits,W=f.lencode,K=f.distcode,nt=(1<<f.lenbits)-1,X=(1<<f.distbits)-1;t:do{z<15&&(T+=m[g++]<<z,z+=8,T+=m[g++]<<z,z+=8),ct=W[T&nt];e:for(;;){if(T>>>=tt=ct>>>24,z-=tt,(tt=ct>>>16&255)===0)it[x++]=65535&ct;else{if(!(16&tt)){if((64&tt)==0){ct=W[(65535&ct)+(T&(1<<tt)-1)];continue e}if(32&tt){f.mode=12;break t}c.msg="invalid literal/length code",f.mode=30;break t}pt=65535&ct,(tt&=15)&&(z<tt&&(T+=m[g++]<<z,z+=8),pt+=T&(1<<tt)-1,T>>>=tt,z-=tt),z<15&&(T+=m[g++]<<z,z+=8,T+=m[g++]<<z,z+=8),ct=K[T&X];n:for(;;){if(T>>>=tt=ct>>>24,z-=tt,!(16&(tt=ct>>>16&255))){if((64&tt)==0){ct=K[(65535&ct)+(T&(1<<tt)-1)];continue n}c.msg="invalid distance code",f.mode=30;break t}if(Ot=65535&ct,z<(tt&=15)&&(T+=m[g++]<<z,(z+=8)<tt&&(T+=m[g++]<<z,z+=8)),v<(Ot+=T&(1<<tt)-1)){c.msg="invalid distance too far back",f.mode=30;break t}if(T>>>=tt,z-=tt,(tt=x-w)<Ot){if(y<(tt=Ot-tt)&&f.sane){c.msg="invalid distance too far back",f.mode=30;break t}if(Q=k,($=0)===A){if($+=E-tt,tt<pt){for(pt-=tt;it[x++]=k[$++],--tt;);$=x-Ot,Q=it}}else if(A<tt){if($+=E+A-tt,(tt-=A)<pt){for(pt-=tt;it[x++]=k[$++],--tt;);if($=0,A<pt){for(pt-=tt=A;it[x++]=k[$++],--tt;);$=x-Ot,Q=it}}}else if($+=A-tt,tt<pt){for(pt-=tt;it[x++]=k[$++],--tt;);$=x-Ot,Q=it}for(;2<pt;)it[x++]=Q[$++],it[x++]=Q[$++],it[x++]=Q[$++],pt-=3;pt&&(it[x++]=Q[$++],1<pt&&(it[x++]=Q[$++]))}else{for($=x-Ot;it[x++]=it[$++],it[x++]=it[$++],it[x++]=it[$++],2<(pt-=3););pt&&(it[x++]=it[$++],1<pt&&(it[x++]=it[$++]))}break}}break}}while(g<b&&x<C);g-=pt=z>>3,T&=(1<<(z-=pt<<3))-1,c.next_in=g,c.next_out=x,c.avail_in=g<b?b-g+5:5-(g-b),c.avail_out=x<C?C-x+257:257-(x-C),f.hold=T,f.bits=z}},{}],49:[function(r,o,l){var c=r("../utils/common"),d=r("./adler32"),f=r("./crc32"),g=r("./inffast"),b=r("./inftrees"),x=1,w=2,C=0,v=-2,E=1,y=852,A=592;function k($){return($>>>24&255)+($>>>8&65280)+((65280&$)<<8)+((255&$)<<24)}function T(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new c.Buf16(320),this.work=new c.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function z($){var Q;return $&&$.state?(Q=$.state,$.total_in=$.total_out=Q.total=0,$.msg="",Q.wrap&&($.adler=1&Q.wrap),Q.mode=E,Q.last=0,Q.havedict=0,Q.dmax=32768,Q.head=null,Q.hold=0,Q.bits=0,Q.lencode=Q.lendyn=new c.Buf32(y),Q.distcode=Q.distdyn=new c.Buf32(A),Q.sane=1,Q.back=-1,C):v}function W($){var Q;return $&&$.state?((Q=$.state).wsize=0,Q.whave=0,Q.wnext=0,z($)):v}function K($,Q){var m,it;return $&&$.state?(it=$.state,Q<0?(m=0,Q=-Q):(m=1+(Q>>4),Q<48&&(Q&=15)),Q&&(Q<8||15<Q)?v:(it.window!==null&&it.wbits!==Q&&(it.window=null),it.wrap=m,it.wbits=Q,W($))):v}function nt($,Q){var m,it;return $?(it=new T,($.state=it).window=null,(m=K($,Q))!==C&&($.state=null),m):v}var X,ct,tt=!0;function pt($){if(tt){var Q;for(X=new c.Buf32(512),ct=new c.Buf32(32),Q=0;Q<144;)$.lens[Q++]=8;for(;Q<256;)$.lens[Q++]=9;for(;Q<280;)$.lens[Q++]=7;for(;Q<288;)$.lens[Q++]=8;for(b(x,$.lens,0,288,X,0,$.work,{bits:9}),Q=0;Q<32;)$.lens[Q++]=5;b(w,$.lens,0,32,ct,0,$.work,{bits:5}),tt=!1}$.lencode=X,$.lenbits=9,$.distcode=ct,$.distbits=5}function Ot($,Q,m,it){var Tt,lt=$.state;return lt.window===null&&(lt.wsize=1<<lt.wbits,lt.wnext=0,lt.whave=0,lt.window=new c.Buf8(lt.wsize)),it>=lt.wsize?(c.arraySet(lt.window,Q,m-lt.wsize,lt.wsize,0),lt.wnext=0,lt.whave=lt.wsize):(it<(Tt=lt.wsize-lt.wnext)&&(Tt=it),c.arraySet(lt.window,Q,m-it,Tt,lt.wnext),(it-=Tt)?(c.arraySet(lt.window,Q,m-it,it,0),lt.wnext=it,lt.whave=lt.wsize):(lt.wnext+=Tt,lt.wnext===lt.wsize&&(lt.wnext=0),lt.whave<lt.wsize&&(lt.whave+=Tt))),0}l.inflateReset=W,l.inflateReset2=K,l.inflateResetKeep=z,l.inflateInit=function($){return nt($,15)},l.inflateInit2=nt,l.inflate=function($,Q){var m,it,Tt,lt,Rt,st,Pt,G,V,At,xt,vt,Lt,Jt,jt,mt,Gt,qt,Bt,ae,h,et,Y,P,S=0,N=new c.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!$||!$.state||!$.output||!$.input&&$.avail_in!==0)return v;(m=$.state).mode===12&&(m.mode=13),Rt=$.next_out,Tt=$.output,Pt=$.avail_out,lt=$.next_in,it=$.input,st=$.avail_in,G=m.hold,V=m.bits,At=st,xt=Pt,et=C;t:for(;;)switch(m.mode){case E:if(m.wrap===0){m.mode=13;break}for(;V<16;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}if(2&m.wrap&&G===35615){N[m.check=0]=255&G,N[1]=G>>>8&255,m.check=f(m.check,N,2,0),V=G=0,m.mode=2;break}if(m.flags=0,m.head&&(m.head.done=!1),!(1&m.wrap)||(((255&G)<<8)+(G>>8))%31){$.msg="incorrect header check",m.mode=30;break}if((15&G)!=8){$.msg="unknown compression method",m.mode=30;break}if(V-=4,h=8+(15&(G>>>=4)),m.wbits===0)m.wbits=h;else if(h>m.wbits){$.msg="invalid window size",m.mode=30;break}m.dmax=1<<h,$.adler=m.check=1,m.mode=512&G?10:12,V=G=0;break;case 2:for(;V<16;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}if(m.flags=G,(255&m.flags)!=8){$.msg="unknown compression method",m.mode=30;break}if(57344&m.flags){$.msg="unknown header flags set",m.mode=30;break}m.head&&(m.head.text=G>>8&1),512&m.flags&&(N[0]=255&G,N[1]=G>>>8&255,m.check=f(m.check,N,2,0)),V=G=0,m.mode=3;case 3:for(;V<32;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}m.head&&(m.head.time=G),512&m.flags&&(N[0]=255&G,N[1]=G>>>8&255,N[2]=G>>>16&255,N[3]=G>>>24&255,m.check=f(m.check,N,4,0)),V=G=0,m.mode=4;case 4:for(;V<16;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}m.head&&(m.head.xflags=255&G,m.head.os=G>>8),512&m.flags&&(N[0]=255&G,N[1]=G>>>8&255,m.check=f(m.check,N,2,0)),V=G=0,m.mode=5;case 5:if(1024&m.flags){for(;V<16;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}m.length=G,m.head&&(m.head.extra_len=G),512&m.flags&&(N[0]=255&G,N[1]=G>>>8&255,m.check=f(m.check,N,2,0)),V=G=0}else m.head&&(m.head.extra=null);m.mode=6;case 6:if(1024&m.flags&&(st<(vt=m.length)&&(vt=st),vt&&(m.head&&(h=m.head.extra_len-m.length,m.head.extra||(m.head.extra=new Array(m.head.extra_len)),c.arraySet(m.head.extra,it,lt,vt,h)),512&m.flags&&(m.check=f(m.check,it,vt,lt)),st-=vt,lt+=vt,m.length-=vt),m.length))break t;m.length=0,m.mode=7;case 7:if(2048&m.flags){if(st===0)break t;for(vt=0;h=it[lt+vt++],m.head&&h&&m.length<65536&&(m.head.name+=String.fromCharCode(h)),h&&vt<st;);if(512&m.flags&&(m.check=f(m.check,it,vt,lt)),st-=vt,lt+=vt,h)break t}else m.head&&(m.head.name=null);m.length=0,m.mode=8;case 8:if(4096&m.flags){if(st===0)break t;for(vt=0;h=it[lt+vt++],m.head&&h&&m.length<65536&&(m.head.comment+=String.fromCharCode(h)),h&&vt<st;);if(512&m.flags&&(m.check=f(m.check,it,vt,lt)),st-=vt,lt+=vt,h)break t}else m.head&&(m.head.comment=null);m.mode=9;case 9:if(512&m.flags){for(;V<16;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}if(G!==(65535&m.check)){$.msg="header crc mismatch",m.mode=30;break}V=G=0}m.head&&(m.head.hcrc=m.flags>>9&1,m.head.done=!0),$.adler=m.check=0,m.mode=12;break;case 10:for(;V<32;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}$.adler=m.check=k(G),V=G=0,m.mode=11;case 11:if(m.havedict===0)return $.next_out=Rt,$.avail_out=Pt,$.next_in=lt,$.avail_in=st,m.hold=G,m.bits=V,2;$.adler=m.check=1,m.mode=12;case 12:if(Q===5||Q===6)break t;case 13:if(m.last){G>>>=7&V,V-=7&V,m.mode=27;break}for(;V<3;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}switch(m.last=1&G,V-=1,3&(G>>>=1)){case 0:m.mode=14;break;case 1:if(pt(m),m.mode=20,Q!==6)break;G>>>=2,V-=2;break t;case 2:m.mode=17;break;case 3:$.msg="invalid block type",m.mode=30}G>>>=2,V-=2;break;case 14:for(G>>>=7&V,V-=7&V;V<32;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}if((65535&G)!=(G>>>16^65535)){$.msg="invalid stored block lengths",m.mode=30;break}if(m.length=65535&G,V=G=0,m.mode=15,Q===6)break t;case 15:m.mode=16;case 16:if(vt=m.length){if(st<vt&&(vt=st),Pt<vt&&(vt=Pt),vt===0)break t;c.arraySet(Tt,it,lt,vt,Rt),st-=vt,lt+=vt,Pt-=vt,Rt+=vt,m.length-=vt;break}m.mode=12;break;case 17:for(;V<14;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}if(m.nlen=257+(31&G),G>>>=5,V-=5,m.ndist=1+(31&G),G>>>=5,V-=5,m.ncode=4+(15&G),G>>>=4,V-=4,286<m.nlen||30<m.ndist){$.msg="too many length or distance symbols",m.mode=30;break}m.have=0,m.mode=18;case 18:for(;m.have<m.ncode;){for(;V<3;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}m.lens[ot[m.have++]]=7&G,G>>>=3,V-=3}for(;m.have<19;)m.lens[ot[m.have++]]=0;if(m.lencode=m.lendyn,m.lenbits=7,Y={bits:m.lenbits},et=b(0,m.lens,0,19,m.lencode,0,m.work,Y),m.lenbits=Y.bits,et){$.msg="invalid code lengths set",m.mode=30;break}m.have=0,m.mode=19;case 19:for(;m.have<m.nlen+m.ndist;){for(;mt=(S=m.lencode[G&(1<<m.lenbits)-1])>>>16&255,Gt=65535&S,!((jt=S>>>24)<=V);){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}if(Gt<16)G>>>=jt,V-=jt,m.lens[m.have++]=Gt;else{if(Gt===16){for(P=jt+2;V<P;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}if(G>>>=jt,V-=jt,m.have===0){$.msg="invalid bit length repeat",m.mode=30;break}h=m.lens[m.have-1],vt=3+(3&G),G>>>=2,V-=2}else if(Gt===17){for(P=jt+3;V<P;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}V-=jt,h=0,vt=3+(7&(G>>>=jt)),G>>>=3,V-=3}else{for(P=jt+7;V<P;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}V-=jt,h=0,vt=11+(127&(G>>>=jt)),G>>>=7,V-=7}if(m.have+vt>m.nlen+m.ndist){$.msg="invalid bit length repeat",m.mode=30;break}for(;vt--;)m.lens[m.have++]=h}}if(m.mode===30)break;if(m.lens[256]===0){$.msg="invalid code -- missing end-of-block",m.mode=30;break}if(m.lenbits=9,Y={bits:m.lenbits},et=b(x,m.lens,0,m.nlen,m.lencode,0,m.work,Y),m.lenbits=Y.bits,et){$.msg="invalid literal/lengths set",m.mode=30;break}if(m.distbits=6,m.distcode=m.distdyn,Y={bits:m.distbits},et=b(w,m.lens,m.nlen,m.ndist,m.distcode,0,m.work,Y),m.distbits=Y.bits,et){$.msg="invalid distances set",m.mode=30;break}if(m.mode=20,Q===6)break t;case 20:m.mode=21;case 21:if(6<=st&&258<=Pt){$.next_out=Rt,$.avail_out=Pt,$.next_in=lt,$.avail_in=st,m.hold=G,m.bits=V,g($,xt),Rt=$.next_out,Tt=$.output,Pt=$.avail_out,lt=$.next_in,it=$.input,st=$.avail_in,G=m.hold,V=m.bits,m.mode===12&&(m.back=-1);break}for(m.back=0;mt=(S=m.lencode[G&(1<<m.lenbits)-1])>>>16&255,Gt=65535&S,!((jt=S>>>24)<=V);){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}if(mt&&(240&mt)==0){for(qt=jt,Bt=mt,ae=Gt;mt=(S=m.lencode[ae+((G&(1<<qt+Bt)-1)>>qt)])>>>16&255,Gt=65535&S,!(qt+(jt=S>>>24)<=V);){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}G>>>=qt,V-=qt,m.back+=qt}if(G>>>=jt,V-=jt,m.back+=jt,m.length=Gt,mt===0){m.mode=26;break}if(32&mt){m.back=-1,m.mode=12;break}if(64&mt){$.msg="invalid literal/length code",m.mode=30;break}m.extra=15&mt,m.mode=22;case 22:if(m.extra){for(P=m.extra;V<P;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}m.length+=G&(1<<m.extra)-1,G>>>=m.extra,V-=m.extra,m.back+=m.extra}m.was=m.length,m.mode=23;case 23:for(;mt=(S=m.distcode[G&(1<<m.distbits)-1])>>>16&255,Gt=65535&S,!((jt=S>>>24)<=V);){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}if((240&mt)==0){for(qt=jt,Bt=mt,ae=Gt;mt=(S=m.distcode[ae+((G&(1<<qt+Bt)-1)>>qt)])>>>16&255,Gt=65535&S,!(qt+(jt=S>>>24)<=V);){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}G>>>=qt,V-=qt,m.back+=qt}if(G>>>=jt,V-=jt,m.back+=jt,64&mt){$.msg="invalid distance code",m.mode=30;break}m.offset=Gt,m.extra=15&mt,m.mode=24;case 24:if(m.extra){for(P=m.extra;V<P;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}m.offset+=G&(1<<m.extra)-1,G>>>=m.extra,V-=m.extra,m.back+=m.extra}if(m.offset>m.dmax){$.msg="invalid distance too far back",m.mode=30;break}m.mode=25;case 25:if(Pt===0)break t;if(vt=xt-Pt,m.offset>vt){if((vt=m.offset-vt)>m.whave&&m.sane){$.msg="invalid distance too far back",m.mode=30;break}Lt=vt>m.wnext?(vt-=m.wnext,m.wsize-vt):m.wnext-vt,vt>m.length&&(vt=m.length),Jt=m.window}else Jt=Tt,Lt=Rt-m.offset,vt=m.length;for(Pt<vt&&(vt=Pt),Pt-=vt,m.length-=vt;Tt[Rt++]=Jt[Lt++],--vt;);m.length===0&&(m.mode=21);break;case 26:if(Pt===0)break t;Tt[Rt++]=m.length,Pt--,m.mode=21;break;case 27:if(m.wrap){for(;V<32;){if(st===0)break t;st--,G|=it[lt++]<<V,V+=8}if(xt-=Pt,$.total_out+=xt,m.total+=xt,xt&&($.adler=m.check=m.flags?f(m.check,Tt,xt,Rt-xt):d(m.check,Tt,xt,Rt-xt)),xt=Pt,(m.flags?G:k(G))!==m.check){$.msg="incorrect data check",m.mode=30;break}V=G=0}m.mode=28;case 28:if(m.wrap&&m.flags){for(;V<32;){if(st===0)break t;st--,G+=it[lt++]<<V,V+=8}if(G!==(4294967295&m.total)){$.msg="incorrect length check",m.mode=30;break}V=G=0}m.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;case 32:default:return v}return $.next_out=Rt,$.avail_out=Pt,$.next_in=lt,$.avail_in=st,m.hold=G,m.bits=V,(m.wsize||xt!==$.avail_out&&m.mode<30&&(m.mode<27||Q!==4))&&Ot($,$.output,$.next_out,xt-$.avail_out)?(m.mode=31,-4):(At-=$.avail_in,xt-=$.avail_out,$.total_in+=At,$.total_out+=xt,m.total+=xt,m.wrap&&xt&&($.adler=m.check=m.flags?f(m.check,Tt,xt,$.next_out-xt):d(m.check,Tt,xt,$.next_out-xt)),$.data_type=m.bits+(m.last?64:0)+(m.mode===12?128:0)+(m.mode===20||m.mode===15?256:0),(At==0&&xt===0||Q===4)&&et===C&&(et=-5),et)},l.inflateEnd=function($){if(!$||!$.state)return v;var Q=$.state;return Q.window&&(Q.window=null),$.state=null,C},l.inflateGetHeader=function($,Q){var m;return $&&$.state?(2&(m=$.state).wrap)==0?v:((m.head=Q).done=!1,C):v},l.inflateSetDictionary=function($,Q){var m,it=Q.length;return $&&$.state?(m=$.state).wrap!==0&&m.mode!==11?v:m.mode===11&&d(1,Q,it,0)!==m.check?-3:Ot($,Q,it,it)?(m.mode=31,-4):(m.havedict=1,C):v},l.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,o,l){var c=r("../utils/common"),d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],g=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],b=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];o.exports=function(x,w,C,v,E,y,A,k){var T,z,W,K,nt,X,ct,tt,pt,Ot=k.bits,$=0,Q=0,m=0,it=0,Tt=0,lt=0,Rt=0,st=0,Pt=0,G=0,V=null,At=0,xt=new c.Buf16(16),vt=new c.Buf16(16),Lt=null,Jt=0;for($=0;$<=15;$++)xt[$]=0;for(Q=0;Q<v;Q++)xt[w[C+Q]]++;for(Tt=Ot,it=15;1<=it&&xt[it]===0;it--);if(it<Tt&&(Tt=it),it===0)return E[y++]=20971520,E[y++]=20971520,k.bits=1,0;for(m=1;m<it&&xt[m]===0;m++);for(Tt<m&&(Tt=m),$=st=1;$<=15;$++)if(st<<=1,(st-=xt[$])<0)return-1;if(0<st&&(x===0||it!==1))return-1;for(vt[1]=0,$=1;$<15;$++)vt[$+1]=vt[$]+xt[$];for(Q=0;Q<v;Q++)w[C+Q]!==0&&(A[vt[w[C+Q]]++]=Q);if(X=x===0?(V=Lt=A,19):x===1?(V=d,At-=257,Lt=f,Jt-=257,256):(V=g,Lt=b,-1),$=m,nt=y,Rt=Q=G=0,W=-1,K=(Pt=1<<(lt=Tt))-1,x===1&&852<Pt||x===2&&592<Pt)return 1;for(;;){for(ct=$-Rt,pt=A[Q]<X?(tt=0,A[Q]):A[Q]>X?(tt=Lt[Jt+A[Q]],V[At+A[Q]]):(tt=96,0),T=1<<$-Rt,m=z=1<<lt;E[nt+(G>>Rt)+(z-=T)]=ct<<24|tt<<16|pt|0,z!==0;);for(T=1<<$-1;G&T;)T>>=1;if(T!==0?(G&=T-1,G+=T):G=0,Q++,--xt[$]==0){if($===it)break;$=w[C+A[Q]]}if(Tt<$&&(G&K)!==W){for(Rt===0&&(Rt=Tt),nt+=m,st=1<<(lt=$-Rt);lt+Rt<it&&!((st-=xt[lt+Rt])<=0);)lt++,st<<=1;if(Pt+=1<<lt,x===1&&852<Pt||x===2&&592<Pt)return 1;E[W=G&K]=Tt<<24|lt<<16|nt-y|0}}return G!==0&&(E[nt+G]=$-Rt<<24|64<<16|0),k.bits=Tt,0}},{"../utils/common":41}],51:[function(r,o,l){o.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,o,l){var c=r("../utils/common"),d=0,f=1;function g(S){for(var N=S.length;0<=--N;)S[N]=0}var b=0,x=29,w=256,C=w+1+x,v=30,E=19,y=2*C+1,A=15,k=16,T=7,z=256,W=16,K=17,nt=18,X=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ct=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ot=new Array(2*(C+2));g(Ot);var $=new Array(2*v);g($);var Q=new Array(512);g(Q);var m=new Array(256);g(m);var it=new Array(x);g(it);var Tt,lt,Rt,st=new Array(v);function Pt(S,N,ot,at,H){this.static_tree=S,this.extra_bits=N,this.extra_base=ot,this.elems=at,this.max_length=H,this.has_stree=S&&S.length}function G(S,N){this.dyn_tree=S,this.max_code=0,this.stat_desc=N}function V(S){return S<256?Q[S]:Q[256+(S>>>7)]}function At(S,N){S.pending_buf[S.pending++]=255&N,S.pending_buf[S.pending++]=N>>>8&255}function xt(S,N,ot){S.bi_valid>k-ot?(S.bi_buf|=N<<S.bi_valid&65535,At(S,S.bi_buf),S.bi_buf=N>>k-S.bi_valid,S.bi_valid+=ot-k):(S.bi_buf|=N<<S.bi_valid&65535,S.bi_valid+=ot)}function vt(S,N,ot){xt(S,ot[2*N],ot[2*N+1])}function Lt(S,N){for(var ot=0;ot|=1&S,S>>>=1,ot<<=1,0<--N;);return ot>>>1}function Jt(S,N,ot){var at,H,ut=new Array(A+1),kt=0;for(at=1;at<=A;at++)ut[at]=kt=kt+ot[at-1]<<1;for(H=0;H<=N;H++){var ht=S[2*H+1];ht!==0&&(S[2*H]=Lt(ut[ht]++,ht))}}function jt(S){var N;for(N=0;N<C;N++)S.dyn_ltree[2*N]=0;for(N=0;N<v;N++)S.dyn_dtree[2*N]=0;for(N=0;N<E;N++)S.bl_tree[2*N]=0;S.dyn_ltree[2*z]=1,S.opt_len=S.static_len=0,S.last_lit=S.matches=0}function mt(S){8<S.bi_valid?At(S,S.bi_buf):0<S.bi_valid&&(S.pending_buf[S.pending++]=S.bi_buf),S.bi_buf=0,S.bi_valid=0}function Gt(S,N,ot,at){var H=2*N,ut=2*ot;return S[H]<S[ut]||S[H]===S[ut]&&at[N]<=at[ot]}function qt(S,N,ot){for(var at=S.heap[ot],H=ot<<1;H<=S.heap_len&&(H<S.heap_len&&Gt(N,S.heap[H+1],S.heap[H],S.depth)&&H++,!Gt(N,at,S.heap[H],S.depth));)S.heap[ot]=S.heap[H],ot=H,H<<=1;S.heap[ot]=at}function Bt(S,N,ot){var at,H,ut,kt,ht=0;if(S.last_lit!==0)for(;at=S.pending_buf[S.d_buf+2*ht]<<8|S.pending_buf[S.d_buf+2*ht+1],H=S.pending_buf[S.l_buf+ht],ht++,at===0?vt(S,H,N):(vt(S,(ut=m[H])+w+1,N),(kt=X[ut])!==0&&xt(S,H-=it[ut],kt),vt(S,ut=V(--at),ot),(kt=ct[ut])!==0&&xt(S,at-=st[ut],kt)),ht<S.last_lit;);vt(S,z,N)}function ae(S,N){var ot,at,H,ut=N.dyn_tree,kt=N.stat_desc.static_tree,ht=N.stat_desc.has_stree,Et=N.stat_desc.elems,Nt=-1;for(S.heap_len=0,S.heap_max=y,ot=0;ot<Et;ot++)ut[2*ot]!==0?(S.heap[++S.heap_len]=Nt=ot,S.depth[ot]=0):ut[2*ot+1]=0;for(;S.heap_len<2;)ut[2*(H=S.heap[++S.heap_len]=Nt<2?++Nt:0)]=1,S.depth[H]=0,S.opt_len--,ht&&(S.static_len-=kt[2*H+1]);for(N.max_code=Nt,ot=S.heap_len>>1;1<=ot;ot--)qt(S,ut,ot);for(H=Et;ot=S.heap[1],S.heap[1]=S.heap[S.heap_len--],qt(S,ut,1),at=S.heap[1],S.heap[--S.heap_max]=ot,S.heap[--S.heap_max]=at,ut[2*H]=ut[2*ot]+ut[2*at],S.depth[H]=(S.depth[ot]>=S.depth[at]?S.depth[ot]:S.depth[at])+1,ut[2*ot+1]=ut[2*at+1]=H,S.heap[1]=H++,qt(S,ut,1),2<=S.heap_len;);S.heap[--S.heap_max]=S.heap[1],(function(zt,ne){var Ae,he,me,Wt,$e,be,St=ne.dyn_tree,Ie=ne.max_code,Pe=ne.stat_desc.static_tree,en=ne.stat_desc.has_stree,_t=ne.stat_desc.extra_bits,nn=ne.stat_desc.extra_base,De=ne.stat_desc.max_length,Be=0;for(Wt=0;Wt<=A;Wt++)zt.bl_count[Wt]=0;for(St[2*zt.heap[zt.heap_max]+1]=0,Ae=zt.heap_max+1;Ae<y;Ae++)De<(Wt=St[2*St[2*(he=zt.heap[Ae])+1]+1]+1)&&(Wt=De,Be++),St[2*he+1]=Wt,Ie<he||(zt.bl_count[Wt]++,$e=0,nn<=he&&($e=_t[he-nn]),be=St[2*he],zt.opt_len+=be*(Wt+$e),en&&(zt.static_len+=be*(Pe[2*he+1]+$e)));if(Be!==0){do{for(Wt=De-1;zt.bl_count[Wt]===0;)Wt--;zt.bl_count[Wt]--,zt.bl_count[Wt+1]+=2,zt.bl_count[De]--,Be-=2}while(0<Be);for(Wt=De;Wt!==0;Wt--)for(he=zt.bl_count[Wt];he!==0;)Ie<(me=zt.heap[--Ae])||(St[2*me+1]!==Wt&&(zt.opt_len+=(Wt-St[2*me+1])*St[2*me],St[2*me+1]=Wt),he--)}})(S,N),Jt(ut,Nt,S.bl_count)}function h(S,N,ot){var at,H,ut=-1,kt=N[1],ht=0,Et=7,Nt=4;for(kt===0&&(Et=138,Nt=3),N[2*(ot+1)+1]=65535,at=0;at<=ot;at++)H=kt,kt=N[2*(at+1)+1],++ht<Et&&H===kt||(ht<Nt?S.bl_tree[2*H]+=ht:H!==0?(H!==ut&&S.bl_tree[2*H]++,S.bl_tree[2*W]++):ht<=10?S.bl_tree[2*K]++:S.bl_tree[2*nt]++,ut=H,Nt=(ht=0)===kt?(Et=138,3):H===kt?(Et=6,3):(Et=7,4))}function et(S,N,ot){var at,H,ut=-1,kt=N[1],ht=0,Et=7,Nt=4;for(kt===0&&(Et=138,Nt=3),at=0;at<=ot;at++)if(H=kt,kt=N[2*(at+1)+1],!(++ht<Et&&H===kt)){if(ht<Nt)for(;vt(S,H,S.bl_tree),--ht!=0;);else H!==0?(H!==ut&&(vt(S,H,S.bl_tree),ht--),vt(S,W,S.bl_tree),xt(S,ht-3,2)):ht<=10?(vt(S,K,S.bl_tree),xt(S,ht-3,3)):(vt(S,nt,S.bl_tree),xt(S,ht-11,7));ut=H,Nt=(ht=0)===kt?(Et=138,3):H===kt?(Et=6,3):(Et=7,4)}}g(st);var Y=!1;function P(S,N,ot,at){xt(S,(b<<1)+(at?1:0),3),(function(H,ut,kt,ht){mt(H),At(H,kt),At(H,~kt),c.arraySet(H.pending_buf,H.window,ut,kt,H.pending),H.pending+=kt})(S,N,ot)}l._tr_init=function(S){Y||((function(){var N,ot,at,H,ut,kt=new Array(A+1);for(H=at=0;H<x-1;H++)for(it[H]=at,N=0;N<1<<X[H];N++)m[at++]=H;for(m[at-1]=H,H=ut=0;H<16;H++)for(st[H]=ut,N=0;N<1<<ct[H];N++)Q[ut++]=H;for(ut>>=7;H<v;H++)for(st[H]=ut<<7,N=0;N<1<<ct[H]-7;N++)Q[256+ut++]=H;for(ot=0;ot<=A;ot++)kt[ot]=0;for(N=0;N<=143;)Ot[2*N+1]=8,N++,kt[8]++;for(;N<=255;)Ot[2*N+1]=9,N++,kt[9]++;for(;N<=279;)Ot[2*N+1]=7,N++,kt[7]++;for(;N<=287;)Ot[2*N+1]=8,N++,kt[8]++;for(Jt(Ot,C+1,kt),N=0;N<v;N++)$[2*N+1]=5,$[2*N]=Lt(N,5);Tt=new Pt(Ot,X,w+1,C,A),lt=new Pt($,ct,0,v,A),Rt=new Pt(new Array(0),tt,0,E,T)})(),Y=!0),S.l_desc=new G(S.dyn_ltree,Tt),S.d_desc=new G(S.dyn_dtree,lt),S.bl_desc=new G(S.bl_tree,Rt),S.bi_buf=0,S.bi_valid=0,jt(S)},l._tr_stored_block=P,l._tr_flush_block=function(S,N,ot,at){var H,ut,kt=0;0<S.level?(S.strm.data_type===2&&(S.strm.data_type=(function(ht){var Et,Nt=4093624447;for(Et=0;Et<=31;Et++,Nt>>>=1)if(1&Nt&&ht.dyn_ltree[2*Et]!==0)return d;if(ht.dyn_ltree[18]!==0||ht.dyn_ltree[20]!==0||ht.dyn_ltree[26]!==0)return f;for(Et=32;Et<w;Et++)if(ht.dyn_ltree[2*Et]!==0)return f;return d})(S)),ae(S,S.l_desc),ae(S,S.d_desc),kt=(function(ht){var Et;for(h(ht,ht.dyn_ltree,ht.l_desc.max_code),h(ht,ht.dyn_dtree,ht.d_desc.max_code),ae(ht,ht.bl_desc),Et=E-1;3<=Et&&ht.bl_tree[2*pt[Et]+1]===0;Et--);return ht.opt_len+=3*(Et+1)+5+5+4,Et})(S),H=S.opt_len+3+7>>>3,(ut=S.static_len+3+7>>>3)<=H&&(H=ut)):H=ut=ot+5,ot+4<=H&&N!==-1?P(S,N,ot,at):S.strategy===4||ut===H?(xt(S,2+(at?1:0),3),Bt(S,Ot,$)):(xt(S,4+(at?1:0),3),(function(ht,Et,Nt,zt){var ne;for(xt(ht,Et-257,5),xt(ht,Nt-1,5),xt(ht,zt-4,4),ne=0;ne<zt;ne++)xt(ht,ht.bl_tree[2*pt[ne]+1],3);et(ht,ht.dyn_ltree,Et-1),et(ht,ht.dyn_dtree,Nt-1)})(S,S.l_desc.max_code+1,S.d_desc.max_code+1,kt+1),Bt(S,S.dyn_ltree,S.dyn_dtree)),jt(S),at&&mt(S)},l._tr_tally=function(S,N,ot){return S.pending_buf[S.d_buf+2*S.last_lit]=N>>>8&255,S.pending_buf[S.d_buf+2*S.last_lit+1]=255&N,S.pending_buf[S.l_buf+S.last_lit]=255&ot,S.last_lit++,N===0?S.dyn_ltree[2*ot]++:(S.matches++,N--,S.dyn_ltree[2*(m[ot]+w+1)]++,S.dyn_dtree[2*V(N)]++),S.last_lit===S.lit_bufsize-1},l._tr_align=function(S){xt(S,2,3),vt(S,z,Ot),(function(N){N.bi_valid===16?(At(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(S)}},{"../utils/common":41}],53:[function(r,o,l){o.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,o,l){(function(c){(function(d,f){if(!d.setImmediate){var g,b,x,w,C=1,v={},E=!1,y=d.document,A=Object.getPrototypeOf&&Object.getPrototypeOf(d);A=A&&A.setTimeout?A:d,g={}.toString.call(d.process)==="[object process]"?function(W){process.nextTick(function(){T(W)})}:(function(){if(d.postMessage&&!d.importScripts){var W=!0,K=d.onmessage;return d.onmessage=function(){W=!1},d.postMessage("","*"),d.onmessage=K,W}})()?(w="setImmediate$"+Math.random()+"$",d.addEventListener?d.addEventListener("message",z,!1):d.attachEvent("onmessage",z),function(W){d.postMessage(w+W,"*")}):d.MessageChannel?((x=new MessageChannel).port1.onmessage=function(W){T(W.data)},function(W){x.port2.postMessage(W)}):y&&"onreadystatechange"in y.createElement("script")?(b=y.documentElement,function(W){var K=y.createElement("script");K.onreadystatechange=function(){T(W),K.onreadystatechange=null,b.removeChild(K),K=null},b.appendChild(K)}):function(W){setTimeout(T,0,W)},A.setImmediate=function(W){typeof W!="function"&&(W=new Function(""+W));for(var K=new Array(arguments.length-1),nt=0;nt<K.length;nt++)K[nt]=arguments[nt+1];var X={callback:W,args:K};return v[C]=X,g(C),C++},A.clearImmediate=k}function k(W){delete v[W]}function T(W){if(E)setTimeout(T,0,W);else{var K=v[W];if(K){E=!0;try{(function(nt){var X=nt.callback,ct=nt.args;switch(ct.length){case 0:X();break;case 1:X(ct[0]);break;case 2:X(ct[0],ct[1]);break;case 3:X(ct[0],ct[1],ct[2]);break;default:X.apply(f,ct)}})(K)}finally{k(W),E=!1}}}}function z(W){W.source===d&&typeof W.data=="string"&&W.data.indexOf(w)===0&&T(+W.data.slice(w.length))}})(typeof self>"u"?c===void 0?this:c:self)}).call(this,typeof Re<"u"?Re:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Hr)),Hr.exports}var Zo=Ho();const fa=ua(Zo);var lr={exports:{}},Vo=lr.exports,Ji;function Go(){return Ji||(Ji=1,(function(a,n){(function(r,o){o()})(Vo,function(){function r(b,x){return typeof x>"u"?x={autoBom:!1}:typeof x!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),x={autoBom:!x}),x.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(b.type)?new Blob(["\uFEFF",b],{type:b.type}):b}function o(b,x,w){var C=new XMLHttpRequest;C.open("GET",b),C.responseType="blob",C.onload=function(){g(C.response,x,w)},C.onerror=function(){console.error("could not download file")},C.send()}function l(b){var x=new XMLHttpRequest;x.open("HEAD",b,!1);try{x.send()}catch{}return 200<=x.status&&299>=x.status}function c(b){try{b.dispatchEvent(new MouseEvent("click"))}catch{var x=document.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),b.dispatchEvent(x)}}var d=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Re=="object"&&Re.global===Re?Re:void 0,f=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=d.saveAs||(typeof window!="object"||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(b,x,w){var C=d.URL||d.webkitURL,v=document.createElement("a");x=x||b.name||"download",v.download=x,v.rel="noopener",typeof b=="string"?(v.href=b,v.origin===location.origin?c(v):l(v.href)?o(b,x,w):c(v,v.target="_blank")):(v.href=C.createObjectURL(b),setTimeout(function(){C.revokeObjectURL(v.href)},4e4),setTimeout(function(){c(v)},0))}:"msSaveOrOpenBlob"in navigator?function(b,x,w){if(x=x||b.name||"download",typeof b!="string")navigator.msSaveOrOpenBlob(r(b,w),x);else if(l(b))o(b,x,w);else{var C=document.createElement("a");C.href=b,C.target="_blank",setTimeout(function(){c(C)})}}:function(b,x,w,C){if(C=C||open("","_blank"),C&&(C.document.title=C.document.body.innerText="downloading..."),typeof b=="string")return o(b,x,w);var v=b.type==="application/octet-stream",E=/constructor/i.test(d.HTMLElement)||d.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||v&&E||f)&&typeof FileReader<"u"){var A=new FileReader;A.onloadend=function(){var z=A.result;z=y?z:z.replace(/^data:[^;]*;/,"data:attachment/file;"),C?C.location.href=z:location=z,C=null},A.readAsDataURL(b)}else{var k=d.URL||d.webkitURL,T=k.createObjectURL(b);C?C.location=T:location.href=T,C=null,setTimeout(function(){k.revokeObjectURL(T)},4e4)}});d.saveAs=g.saveAs=g,a.exports=g})})(lr)),lr.exports}var pa=Go();function Qi(a){const n=Math.floor(a/3600),r=Math.floor(a%3600/60),o=Math.floor(a%60),l=Math.floor(a%1*1e3);return`${n.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")},${l.toString().padStart(3,"0")}`}function ta(a){const n=Math.floor(a/3600),r=Math.floor(a%3600/60),o=Math.floor(a%60),l=Math.floor(a%1*1e3);return`${n.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}.${l.toString().padStart(3,"0")}`}function ma(a){return a.map((n,r)=>{const o=r+1,l=Qi(n.start),c=Qi(n.end),d=n.text;return`${o}
${l} --> ${c}
${d}
`}).join(`
`)}function ga(a){const n=`WEBVTT

`,r=a.map(o=>{const l=ta(o.start),c=ta(o.end),d=o.text;return`${l} --> ${c}
${d}
`}).join(`
`);return n+r}function va(a){return a.map(n=>{const r=n.start.toFixed(3),o=n.end.toFixed(3);return`[${r}s - ${o}s] ${n.text}`}).join(`
`)}function ya(a,n,r,o,l,c,d){return{id:a,title:n,duration:r,created_at:new Date(o).toISOString(),source:l,full_text:c,segments:d.map(f=>({id:f.id,text:f.text,start:f.start,end:f.end,duration:f.end-f.start}))}}async function ba(a){return a}async function Yo(a){const n=await zo(a),r=await On(a);if(!n)throw new Error("Recording not found");if(!r)throw new Error("No annotations found for this recording");const o=new fa,l=`${n.title}-${a.slice(0,8)}`,c=o.folder(l),d=await ba(n.audioBlob);c.file(`${a}.wav`,d);const f=ya(n.id,n.title,n.duration,n.createdAt,n.source,r.fullText,r.segments);c.file(`${a}.json`,JSON.stringify(f,null,2));const g=ma(r.segments);c.file(`${a}.srt`,g);const b=ga(r.segments);c.file(`${a}.vtt`,b);const x=va(r.segments);c.file(`${a}.txt`,x);const w=await o.generateAsync({type:"blob"});pa.saveAs(w,`${l}.zip`)}async function Xo(){const n=(await ha()).filter(f=>f.isAnnotated);if(n.length===0)throw new Error("No annotated recordings to export");const r=new fa,l=`annotations-export-${new Date().toISOString().replace(/[:.]/g,"-")}`,c=r.folder(l);for(const f of n){const g=await On(f.id);if(!g)continue;const b=`${f.title}-${f.id.slice(0,8)}`,x=c.folder(b),w=await ba(f.audioBlob);x.file(`${f.id}.wav`,w);const C=ya(f.id,f.title,f.duration,f.createdAt,f.source,g.fullText,g.segments);x.file(`${f.id}.json`,JSON.stringify(C,null,2));const v=ma(g.segments);x.file(`${f.id}.srt`,v);const E=ga(g.segments);x.file(`${f.id}.vtt`,E);const y=va(g.segments);x.file(`${f.id}.txt`,y)}const d=await r.generateAsync({type:"blob"});pa.saveAs(d,`${l}.zip`)}class Jo{constructor(n){this.listeners=new Set,this.state=n}getState(){return this.state}subscribe(n){return this.listeners.add(n),()=>{this.listeners.delete(n)}}notify(){this.listeners.forEach(n=>n(this.state))}setState(n){this.state={...this.state,...n},this.notify()}}const wa="aidio-theme",Qo=()=>{try{const a=localStorage.getItem(wa);if(a==="dark"||a==="pastel")return a}catch(a){console.warn("Failed to read theme from localStorage:",a)}return"dark"},ts={currentTheme:Qo()};class es extends Jo{constructor(){super(ts)}toggleTheme(){const n=this.state.currentTheme==="dark"?"pastel":"dark";this.setTheme(n)}setTheme(n){this.setState({currentTheme:n});try{localStorage.setItem(wa,n)}catch(r){console.warn("Failed to save theme to localStorage:",r)}}getCurrentTheme(){return this.state.currentTheme}}const Tn=new es,ns=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,rs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var is=Object.defineProperty,as=Object.getOwnPropertyDescriptor,_a=(a,n,r,o)=>{for(var l=o>1?void 0:o?as(n,r):n,c=a.length-1,d;c>=0;c--)(d=a[c])&&(l=(o?d(n,r,l):d(l))||l);return o&&l&&is(n,r,l),l};let hr=class extends Ee{constructor(){super(...arguments),this.currentTheme=Tn.getCurrentTheme()}connectedCallback(){super.connectedCallback(),this.unsubscribe=Tn.subscribe(a=>{this.currentTheme=a.currentTheme})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}handleToggle(){Tn.toggleTheme()}render(){const a=this.currentTheme==="dark"?ns:rs,n=this.currentTheme==="dark"?"Switch to Pastel Theme":"Switch to Dark Theme";return Vt`
      <button
        class="theme-toggle-btn"
        @click=${this.handleToggle}
        title=${n}
        aria-label=${n}
      >
        <span class="theme-icon">${ue(a)}</span>
      </button>
    `}};hr.styles=mn`
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
  `;_a([Kt()],hr.prototype,"currentTheme",2);hr=_a([gn("theme-toggle")],hr);function os(a){const n=[],r=/\S+/g;let o,l=0;for(;(o=r.exec(a))!==null;)n.push({wordIndex:l,charStart:o.index,charEnd:o.index+o[0].length,text:o[0]}),l++;return n}var ss=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,ke=(a,n,r,o)=>{for(var l=o>1?void 0:o?ls(n,r):n,c=a.length-1,d;c>=0;c--)(d=a[c])&&(l=(o?d(n,r,l):d(l))||l);return o&&l&&ss(n,r,l),l};let ye=class extends Ee{constructor(){super(...arguments),this.text="",this.charStart=0,this.charEnd=0,this.committedRanges=[],this.unannotatedRanges=[],this.mode="navigate",this.centerCharIndex=0,this.wordBoundaries=[],this.previousText="",this.currentTransform="translateX(0px)",this.editDraft=""}updated(a){a.has("text")&&this.text!==this.previousText&&(this.wordBoundaries=os(this.text),this.previousText=this.text),(a.has("charStart")||a.has("text")||a.has("centerCharIndex"))&&this.updateCenterPosition(),a.has("mode")&&this.mode==="edit"&&(this.editDraft=this.text.slice(this.charStart,this.charEnd),this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".edit-textarea")?.focus()}))}async updateCenterPosition(){await this.updateComplete;const a=this.shadowRoot?.querySelector(".stream-container");if(!a||this.wordBoundaries.length===0)return;const n=this.centerCharIndex>0?this.centerCharIndex:this.charStart,r=this.wordBoundaries.findIndex(d=>n>=d.charStart&&n<d.charEnd),o=r!==-1?r:0,c=a.querySelectorAll(".word")[o];if(c){const d=c.offsetLeft+c.offsetWidth/2,f=a.offsetWidth/2,g=d-f;this.currentTransform=`translateX(-${g}px)`}}getWordState(a){for(const n of this.committedRanges)if(a.charStart>=n.charStart&&a.charEnd<=n.charEnd)return"committed";if(a.charStart>=this.charStart&&a.charEnd<=this.charEnd)return"active";for(const n of this.unannotatedRanges)if(a.charStart>=n.charStart&&a.charEnd<=n.charEnd)return"unannotated";return"future"}handleWordClick(a,n){if(this.mode==="edit"||this.getWordState(a)==="committed")return;let o=this.charStart,l=this.charEnd;n.shiftKey?(o=Math.min(this.charStart,a.charStart),l=Math.max(this.charEnd,a.charEnd)):a.charStart<this.charStart?o=a.charStart:l=a.charEnd,this.dispatchEvent(new CustomEvent("selection-change",{detail:{charStart:o,charEnd:l},bubbles:!0,composed:!0}))}handleTextInput(a){const n=a.target;this.editDraft=n.value}handleSaveEdit(){const a=this.text.slice(this.charStart,this.charEnd);if(this.editDraft!==a){const n={position:this.charStart,deleteCount:this.charEnd-this.charStart,insertText:this.editDraft};this.dispatchEvent(new CustomEvent("text-edit",{detail:n,bubbles:!0,composed:!0}))}this.dispatchEvent(new CustomEvent("mode-change",{detail:{mode:"navigate"},bubbles:!0,composed:!0}))}handleCancelEdit(){this.dispatchEvent(new CustomEvent("mode-change",{detail:{mode:"navigate"},bubbles:!0,composed:!0}))}handleEditKeydown(a){a.key==="Escape"?(a.preventDefault(),a.stopPropagation(),this.handleCancelEdit()):(a.metaKey||a.ctrlKey)&&a.key==="s"&&(a.preventDefault(),a.stopPropagation(),this.handleSaveEdit())}renderNavigateMode(){return this.text?Vt`
      <div class="mask-overlay"></div>
      <div class="center-guide"></div>

      <div class="stream-container" style="transform: ${this.currentTransform}">
        ${this.wordBoundaries.map(a=>{const n=this.getWordState(a);return Vt`
            <span class="word ${n}" @click=${r=>this.handleWordClick(a,r)}>
              ${a.text}
            </span>
          `})}
      </div>
    `:Vt`
        <div class="empty-state">No text entered yet. Click 'Edit Text' to begin.</div>
      `}renderEditMode(){return Vt`
      <div class="edit-indicator">EDIT MODE</div>
      <div class="edit-container">
        <textarea
          class="edit-textarea"
          .value=${this.editDraft}
          @input=${this.handleTextInput}
          @keydown=${this.handleEditKeydown}
          placeholder="Edit segment text..."
        ></textarea>
        <div class="edit-actions">
          <button class="btn secondary" @click=${this.handleCancelEdit}>Cancel (Esc)</button>
          <button class="btn primary" @click=${this.handleSaveEdit}>Save (Cmd+S)</button>
        </div>
      </div>
    `}render(){return this.mode==="edit"?this.renderEditMode():this.renderNavigateMode()}};ye.styles=mn`
    :host {
      display: block;
      height: 120px;
      position: relative;
      overflow: hidden;
      user-select: none;
      --fade-width: 20%;
    }

    /* Navigate mode container */
    .stream-container {
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      will-change: transform;
      transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      padding-left: 50%;
      z-index: 20;
    }

    .word {
      font-family: var(--font-ui);
      padding: 0 var(--spacing-2);
      cursor: pointer;
      transition: all 0.2s ease;
      opacity: 0.4;
      white-space: nowrap;
      font-size: var(--text-xl);
    }

    .word:hover {
      color: var(--accent-coral);
      transform: scale(1.1);
      opacity: 0.8;
    }

    /* Active selection */
    .word.active {
      opacity: 1;
      font-weight: 700;
      color: var(--text-primary);
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }

    /* Committed (past) words */
    .word.committed {
      opacity: 0.2;
      color: var(--text-secondary);
      text-decoration: line-through;
      cursor: not-allowed;
    }

    .word.committed:hover {
      /* Shake animation for clicking committed words */
      animation: shake 0.3s ease-in-out;
      transform: none;
    }

    /* Unannotated gaps - subtle highlight */
    .word.unannotated {
      opacity: 0.5;
      background: rgba(255, 200, 100, 0.1);
      border-radius: 2px;
    }

    /* Smoked glass mask */
    .mask-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        var(--bg-primary) 0%,
        transparent var(--fade-width),
        transparent calc(100% - var(--fade-width)),
        var(--bg-primary) 100%
      );
      pointer-events: none;
      z-index: 30; /* Sit above text */
    }

    /* Center guide line */
    .center-guide {
      position: absolute;
      left: 50%;
      top: 10%;
      bottom: 10%;
      width: 2px;
      background: var(--accent-coral);
      opacity: 0.1;
      pointer-events: none;
    }

    /* Edit mode container */
    .edit-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: var(--spacing-4);
      box-sizing: border-box;
    }

    .edit-textarea {
      width: 100%;
      max-width: 600px;
      height: 80px;
      font-family: var(--font-ui);
      font-size: var(--text-lg);
      padding: var(--spacing-3);
      border: 2px solid var(--accent-coral);
      border-radius: var(--radius-md);
      background: var(--bg-secondary);
      color: var(--text-primary);
      resize: none;
      outline: none;
      box-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
    }

    .edit-textarea:focus {
      box-shadow: 0 0 30px rgba(255, 107, 107, 0.5);
    }

    /* Edit mode indicator */
    .edit-indicator {
      position: absolute;
      top: var(--spacing-2);
      right: var(--spacing-2);
      font-size: var(--text-sm);
      color: var(--accent-coral);
      font-weight: 600;
      padding: var(--spacing-1) var(--spacing-2);
      background: rgba(255, 107, 107, 0.2);
      border-radius: var(--radius-sm);
      z-index: 30;
    }

    .edit-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: var(--spacing-4);
      box-sizing: border-box;
      gap: var(--spacing-3);
    }

    .edit-actions {
      display: flex;
      gap: var(--spacing-3);
    }

    .btn {
      padding: var(--spacing-2) var(--spacing-4);
      border-radius: var(--radius-md);
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: 600;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.2s ease;
    }

    .btn.secondary {
      background: transparent;
      border-color: var(--text-secondary);
      color: var(--text-secondary);
    }
    .btn.secondary:hover {
      border-color: var(--text-primary);
      color: var(--text-primary);
    }

    .btn.primary {
      background: var(--accent-coral);
      color: white;
      box-shadow: 0 2px 10px rgba(255, 107, 107, 0.3);
    }
    .btn.primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-4px); }
      75% { transform: translateX(4px); }
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
  `;ke([te({type:String})],ye.prototype,"text",2);ke([te({type:Number})],ye.prototype,"charStart",2);ke([te({type:Number})],ye.prototype,"charEnd",2);ke([te({type:Array})],ye.prototype,"committedRanges",2);ke([te({type:Array})],ye.prototype,"unannotatedRanges",2);ke([te({type:String})],ye.prototype,"mode",2);ke([te({type:Number})],ye.prototype,"centerCharIndex",2);ke([Kt()],ye.prototype,"wordBoundaries",2);ke([Kt()],ye.prototype,"currentTransform",2);ke([Kt()],ye.prototype,"editDraft",2);ye=ke([gn("smoked-glass-text")],ye);var cs=Object.defineProperty,us=Object.getOwnPropertyDescriptor,pe=(a,n,r,o)=>{for(var l=o>1?void 0:o?us(n,r):n,c=a.length-1,d;c>=0;c--)(d=a[c])&&(l=(o?d(n,r,l):d(l))||l);return o&&l&&cs(n,r,l),l};let de=class extends Ee{constructor(){super(...arguments),this.audioBuffer=null,this.leftClamp=0,this.rightClamp=0,this.playhead=0,this.visualMode="classic",this.isPlaying=!1,this.selectedClamp=null,this.committedSegments=[],this.zoomLevel=1,this.viewOffset=0,this.isPanning=!1,this.draggingClamp=null,this.peaks=[],this.maxPeak=0,this.drawRafId=null,this.resizeObserver=null,this.panStartX=0,this.didPan=!1,this.handlePanMove=a=>{if(!this.isPanning||!this.audioBuffer)return;Math.abs(a.clientX-this.panStartX)>5&&(this.didPan=!0);const r=this.canvas.getBoundingClientRect(),o=a.movementX,c=this.audioBuffer.duration/this.zoomLevel/r.width;this.clampViewOffset(this.viewOffset-o*c)},this.handlePanUp=a=>{if(this.isPanning=!1,this.releasePointerCapture(a.pointerId),this.removeEventListener("pointermove",this.handlePanMove),this.removeEventListener("pointerup",this.handlePanUp),!this.didPan&&!this.draggingClamp){const n=this.canvas.getBoundingClientRect(),r=a.clientX-n.left,o=this.pixelToTime(r);o>=0&&this.audioBuffer&&o<=this.audioBuffer.duration&&this.dispatchEvent(new CustomEvent("seek",{detail:{time:o},bubbles:!0,composed:!0}))}},this.handleClampMove=a=>{if(!this.draggingClamp||!this.audioBuffer)return;const n=this.canvas.getBoundingClientRect(),r=a.clientX-n.left,o=Math.max(0,Math.min(this.audioBuffer.duration,this.pixelToTime(r)));let l=this.leftClamp,c=this.rightClamp;this.draggingClamp==="left"?l=Math.min(o,c-.05):c=Math.max(o,l+.05),this.dispatchEvent(new CustomEvent("clamp-change",{detail:{left:l,right:c},bubbles:!0,composed:!0})),this.clampViewOffset(this.viewOffset)},this.handleClampUp=()=>{this.draggingClamp=null,window.removeEventListener("pointermove",this.handleClampMove),window.removeEventListener("pointerup",this.handleClampUp)}}firstUpdated(){this.resizeObserver=new ResizeObserver(()=>{this.scheduleDraw()}),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}updated(a){if(a.has("audioBuffer")){const n=a.get("audioBuffer");this.audioBuffer!==n&&(this.calculatePeaks(),this.resetViewport())}this.scheduleDraw(),a.has("isPlaying")&&this.isPlaying&&this.autoScrollToPlayhead(),this.isPanning?this.classList.add("grabbing"):this.classList.remove("grabbing")}calculatePeaks(){if(!this.audioBuffer){this.peaks=[];return}const a=this.audioBuffer.getChannelData(0),n=4e3,r=Math.floor(a.length/n);this.peaks=new Array(n).fill(0),this.maxPeak=0;for(let o=0;o<n;o++){let l=0;const c=o*r;for(let d=0;d<r&&c+d<a.length;d++){const f=Math.abs(a[c+d]);f>l&&(l=f)}this.peaks[o]=l,l>this.maxPeak&&(this.maxPeak=l)}this.maxPeak===0&&(this.maxPeak=1)}resetViewport(){this.zoomLevel=1,this.viewOffset=0}scheduleDraw(){this.drawRafId||(this.drawRafId=requestAnimationFrame(()=>{this.drawRafId=null,this.drawWaveform()}))}drawWaveform(){if(!this.canvas||!this.peaks.length)return;const a=this.canvas.getContext("2d");if(!a)return;const n=this.canvas.getBoundingClientRect();if(n.width===0||n.height===0)return;const r=window.devicePixelRatio||1;this.canvas.width=n.width*r,this.canvas.height=n.height*r,a.scale(r,r);const o=n.width,l=n.height,c=getComputedStyle(this),d=c.getPropertyValue("--bg-surface").trim()||"#161b22",f=c.getPropertyValue("--accent-coral").trim()||"#ff6b6b",g=c.getPropertyValue("--accent-green").trim()||"#39ff14",b=c.getPropertyValue("--accent-yellow").trim()||"#FFB000";switch(a.clearRect(0,0,o,l),a.fillStyle=d,a.fillRect(0,0,o,l),this.visualMode){case"classic":this.drawClassicWaveform(a,o,l,b);break;case"neon":this.drawNeonPulseWaveform(a,o,l,f,g);break;case"mirror":this.drawMirroredWaveform(a,o,l,b);break;default:this.drawClassicWaveform(a,o,l,b)}}drawClassicWaveform(a,n,r,o){this.drawCommittedSegments(a,r),this.drawWaveformSegment(a,n,r,o),this.drawMarkerHighlights(a,r,"rgba(255, 107, 107, 0.1)")}drawCommittedSegments(a,n){if(this.committedSegments.length!==0)for(const r of this.committedSegments){const o=this.timeToPixel(r.start),l=this.timeToPixel(r.end),c=l-o;c>0&&l>0&&(a.fillStyle="rgba(100, 100, 100, 0.25)",a.fillRect(o,0,c,n),a.beginPath(),a.strokeStyle="rgba(255, 255, 255, 0.3)",a.lineWidth=1,a.moveTo(o,0),a.lineTo(o,n),a.moveTo(l,0),a.lineTo(l,n),a.stroke())}}drawNeonPulseWaveform(a,n,r,o,l){this.drawCommittedSegments(a,r),a.shadowBlur=8,a.shadowColor=o,a.globalCompositeOperation="lighter",this.drawWaveformSegment(a,n,r,o);const c=this.timeToPixel(this.leftClamp),f=this.timeToPixel(this.rightClamp)-c;f>0&&(a.save(),a.beginPath(),a.rect(c,0,f,r),a.clip(),a.shadowBlur=15,a.shadowColor=l,this.drawWaveformSegment(a,n,r,l),a.restore()),a.shadowBlur=0,a.globalCompositeOperation="source-over"}drawMirroredWaveform(a,n,r,o){this.drawCommittedSegments(a,r);const l=r/2;a.save(),a.translate(0,l),this.drawWaveformSegment(a,n,r,o,0,1),a.restore(),a.save(),a.translate(0,l),a.scale(1,-1),a.globalAlpha=.5,this.drawWaveformSegment(a,n,r,o,0,1),a.restore(),a.globalAlpha=1,this.drawMarkerHighlights(a,r,"rgba(255, 107, 107, 0.1)")}drawWaveformSegment(a,n,r,o,l=0,c=1){if(!this.audioBuffer)return;const d=this.audioBuffer.duration,f=this.peaks,g=f.length,b=d/this.zoomLevel,x=Math.floor(this.viewOffset/d*g),w=Math.ceil((this.viewOffset+b)/d*g),C=r/2+l,v=this.maxPeak>0?1/this.maxPeak:1;a.strokeStyle=o,a.lineWidth=1,a.beginPath();for(let E=x;E<w;E++){if(E<0||E>=g)continue;const y=E/g*d,A=this.timeToPixel(y),k=f[E]*v*(r/2)*.9*c;E===x?a.moveTo(A,C-k):a.lineTo(A,C-k),a.lineTo(A,C+k)}a.stroke()}drawMarkerHighlights(a,n,r){const o=this.timeToPixel(this.leftClamp),c=this.timeToPixel(this.rightClamp)-o;c>0&&(a.fillStyle=r,a.fillRect(o,0,c,n))}timeToPixel(a){if(!this.audioBuffer)return 0;const n=this.canvas?.getBoundingClientRect();if(!n||n.width===0)return 0;const o=this.audioBuffer.duration/this.zoomLevel;return(a-this.viewOffset)/o*n.width}pixelToTime(a){if(!this.audioBuffer)return 0;const n=this.canvas?.getBoundingClientRect();if(!n||n.width===0)return 0;const l=this.audioBuffer.duration/this.zoomLevel/n.width;return this.viewOffset+a*l}timeToPxString(a){const n=this.timeToPixel(a),r=this.canvas?.getBoundingClientRect();if(!r||r.width===0)return"-100px";const o=5,l=r.width-5;return`${Math.max(o,Math.min(n,l))}px`}clampViewOffset(a){if(!this.audioBuffer)return;const n=this.audioBuffer.duration,r=this.canvas?.getBoundingClientRect();if(!r)return;const o=n/this.zoomLevel,l=Math.max(0,n-o);let c=Math.max(0,Math.min(l,a));const f=25*(o/r.width);this.leftClamp<c+f&&this.draggingClamp==="left"&&(c=Math.max(0,this.leftClamp-f)),this.rightClamp>c+o-f&&this.draggingClamp==="right"&&(c=Math.min(l,this.rightClamp-o+f)),this.viewOffset=c,this.dispatchEvent(new CustomEvent("viewport-change",{detail:{viewOffset:this.viewOffset,zoomLevel:this.zoomLevel},bubbles:!0,composed:!0}))}handleWheel(a){if(!this.audioBuffer)return;a.preventDefault();const n=this.canvas.getBoundingClientRect();if(n.width===0)return;const r=this.audioBuffer.duration;if(a.ctrlKey||a.metaKey){const l=a.deltaY>0?.95:1.05,c=a.clientX-n.left,d=this.pixelToTime(c),f=1,g=Math.max(f,r/.1);let b=Math.max(f,Math.min(g,this.zoomLevel*l));const x=1;r/b<x&&(b=r/x),b=Math.max(f,Math.min(g,b));const w=d-c/n.width*(r/b);this.zoomLevel=b,this.clampViewOffset(w)}else{const l=r/this.zoomLevel/10,c=(a.deltaY>0?1:-1)*l;this.clampViewOffset(this.viewOffset+c)}}autoScrollToPlayhead(){if(!this.audioBuffer||!this.canvas)return;const a=this.canvas.getBoundingClientRect();if(a.width===0)return;const n=this.timeToPixel(this.playhead),o=this.audioBuffer.duration/this.zoomLevel,l=a.width*.25;if(n<l){const c=this.playhead-l/a.width*o;this.clampViewOffset(c)}else if(n>a.width-l){const c=this.playhead-(a.width-l)/a.width*o;this.clampViewOffset(c)}}handleMouseDown(a){this.isPanning=!0,this.didPan=!1,this.panStartX=a.clientX,this.setPointerCapture(a.pointerId),this.addEventListener("pointermove",this.handlePanMove),this.addEventListener("pointerup",this.handlePanUp)}handleWaveformClick(a){if(this.didPan||this.draggingClamp)return;const n=this.canvas.getBoundingClientRect(),r=a.clientX-n.left,o=this.pixelToTime(r);o>=0&&this.audioBuffer&&o<=this.audioBuffer.duration&&this.dispatchEvent(new CustomEvent("seek",{detail:{time:o},bubbles:!0,composed:!0}))}handleClampDown(a,n){a.preventDefault(),a.stopPropagation(),this.dispatchEvent(new CustomEvent("clamp-select",{detail:{which:n},bubbles:!0,composed:!0})),this.draggingClamp=n,window.addEventListener("pointermove",this.handleClampMove),window.addEventListener("pointerup",this.handleClampUp)}formatTime(a){return a.toFixed(2)+"s"}render(){const a=this.timeToPxString(this.leftClamp),n=this.timeToPxString(this.rightClamp),r=this.timeToPxString(this.playhead),o=["clamp-handle","left",this.draggingClamp==="left"?"dragging":"",this.selectedClamp==="left"?"selected":""].filter(Boolean).join(" "),l=["clamp-handle","right",this.draggingClamp==="right"?"dragging":"",this.selectedClamp==="right"?"selected":""].filter(Boolean).join(" ");return Vt`
      <div
        class="wave-wrap ${this.isPanning?"grabbing":""}"
        @pointerdown=${this.handleMouseDown}
        @click=${this.handleWaveformClick}
        @wheel=${this.handleWheel}
      >
        <canvas></canvas>

        <div
          class="${o}"
          style="left:${a}"
          @pointerdown=${c=>this.handleClampDown(c,"left")}
        >
          <div class="clamp-line"></div>
        </div>

        <div
          class="${l}"
          style="left:${n}"
          @pointerdown=${c=>this.handleClampDown(c,"right")}
        >
          <div class="clamp-line"></div>
        </div>

        <div class="marker-label" style="left:${a}">${this.formatTime(this.leftClamp)}</div>
        <div class="marker-label" style="left:${n}">${this.formatTime(this.rightClamp)}</div>
        <div class="playhead-line" style="left:${r}"></div>
      </div>
    `}};de.styles=mn`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      cursor: grab;
      user-select: none;
    }

    :host(.grabbing) {
      cursor: grabbing;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }

    /* Interactive clamps (hit areas) */
    .clamp-handle {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 20px;
      transform: translateX(-50%);
      cursor: col-resize;
      z-index: 20;
      display: flex;
      justify-content: center;
      pointer-events: all;
    }
    
    .clamp-handle:hover .clamp-line,
    .clamp-handle.dragging .clamp-line {
      width: 4px;
    }

    .clamp-line {
      width: 2px;
      height: 100%;
      transition: width 0.1s;
    }
    
    .clamp-handle.left .clamp-line { background: var(--accent-green, #39ff14); }
    .clamp-handle.right .clamp-line { background: var(--accent-coral, #ff6b6b); }

    /* Selected clamp glow */
    .clamp-handle.selected .clamp-line {
      width: 4px;
      box-shadow: 0 0 12px currentColor;
    }
    .clamp-handle.left.selected .clamp-line {
      box-shadow: 0 0 12px var(--accent-green, #39ff14);
    }
    .clamp-handle.right.selected .clamp-line {
      box-shadow: 0 0 12px var(--accent-coral, #ff6b6b);
    }

    .marker-label {
      position: absolute;
      top: 4px;
      padding: 4px 6px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      pointer-events: none;
      transform: translateX(-50%);
      white-space: nowrap;
      z-index: 15;
    }

    .playhead-line {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--accent-coral, #ff6b6b);
      pointer-events: none;
      z-index: 10;
    }

    .wave-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
    }
  `;pe([te({type:Object})],de.prototype,"audioBuffer",2);pe([te({type:Number})],de.prototype,"leftClamp",2);pe([te({type:Number})],de.prototype,"rightClamp",2);pe([te({type:Number})],de.prototype,"playhead",2);pe([te({type:String})],de.prototype,"visualMode",2);pe([te({type:Boolean})],de.prototype,"isPlaying",2);pe([te({type:String})],de.prototype,"selectedClamp",2);pe([te({type:Array})],de.prototype,"committedSegments",2);pe([Kt()],de.prototype,"zoomLevel",2);pe([Kt()],de.prototype,"viewOffset",2);pe([Kt()],de.prototype,"isPanning",2);pe([Kt()],de.prototype,"draggingClamp",2);pe([ko("canvas")],de.prototype,"canvas",2);de=pe([gn("stage-waveform")],de);function Zr(a,n=-40,r=.3){const o=a.getChannelData(0),l=a.sampleRate,c=Math.floor(l*.05),d=[];let f=!1,g=0;for(let b=0;b<o.length;b+=c){const x=Math.min(b+c,o.length);let w=0;for(let y=b;y<x;y++)w+=o[y]*o[y];const C=Math.sqrt(w/(x-b)),E=20*Math.log10(C)<n;if(E&&!f)f=!0,g=b;else if(!E&&f){f=!1;const y=(b-g)/l;y>=r&&d.push({start:g/l,end:b/l,duration:y})}}if(f){const b=(o.length-g)/l;b>=r&&d.push({start:g/l,end:o.length/l,duration:b})}return d}function xa(a,n){const{position:r,deleteCount:o,insertText:l}=n,c=l.length-o,d=a.evolvingHypothesis.slice(0,r),f=a.evolvingHypothesis.slice(r+o),g=d+l+f,x=a.segments.map(C=>ds(C,r,o,c)).filter(C=>C.charEnd>C.charStart||C.isSkipped),w=a.activeSegment?hs(a.activeSegment,r,o,c):null;return{evolvingHypothesis:g,segments:x,activeSegment:w}}function ds(a,n,r,o){const l=n+r;let{charStart:c,charEnd:d}=a;return n>=d?a:l<=c?{...a,charStart:c+o,charEnd:d+o}:n<c?(l>=c&&(c=n+(l>=d?0:o),l>=d?d=c:d=d+o),{...a,charStart:c,charEnd:d}):l<=d?{...a,charEnd:d+o}:{...a,charEnd:n+(o>0?o+r:0)}}function hs(a,n,r,o){const l=n+r;let{charStart:c,charEnd:d}=a;return n>=d?a:l<=c?{...a,charStart:c+o,charEnd:d+o}:n<c?(l>=c&&(c=n+(l>=d?0:o),l>=d?d=c:d=d+o),{...a,charStart:c,charEnd:d}):l<=d?{...a,charEnd:d+o}:{...a,charEnd:n+(o>0?o+r:0)}}function fs(a,n,r){return{position:a,deleteCount:n,insertText:r}}function ps(a){if(!a.activeSegment||a.activeSegment.draftText===null)return a;const{charStart:n,charEnd:r,draftText:o}=a.activeSegment,l=fs(n,r-n,o),c=xa(a,l);return{...c,activeSegment:{...c.activeSegment,charEnd:n+o.length,draftText:null}}}function Vr(a){return{evolvingHypothesis:a,segments:[],activeSegment:null}}function ms(a,n){return"draftText"in n&&n.draftText!==null?n.draftText:a.evolvingHypothesis.slice(n.charStart,n.charEnd)}function hn(a,n,r,o,l,c){return{...a,activeSegment:{id:c,audioStart:n,audioEnd:r,charStart:o,charEnd:l,draftText:null}}}function ea(a,n,r){return a.activeSegment?{...a,activeSegment:{...a.activeSegment,audioStart:n,audioEnd:r}}:a}function gs(a,n,r){return a.activeSegment?{...a,activeSegment:{...a.activeSegment,charStart:n,charEnd:r,draftText:null}}:a}function vs(a){if(!a.activeSegment)return{state:a,segmentId:null};const n=a.activeSegment,r=n.id??crypto.randomUUID(),o={id:r,audioStart:n.audioStart,audioEnd:n.audioEnd,charStart:n.charStart,charEnd:n.charEnd,isSkipped:n.isSkipped};return{state:{...a,segments:[...a.segments,o],activeSegment:null},segmentId:r}}function Gr(a){if(!a.activeSegment)return{state:a,segmentId:null};const n=ps(a);return vs(n)}function na(a,n){return{...a,segments:a.segments.filter(r=>r.id!==n)}}function Xe(a){const n=a.evolvingHypothesis.length;if(n===0)return{annotated:[],unannotated:[],coveragePercent:0};if(a.segments.length===0)return{annotated:[],unannotated:[{start:0,end:n}],coveragePercent:0};const r=a.segments.map(f=>({start:f.charStart,end:f.charEnd})).sort((f,g)=>f.start-g.start),o=ys(r),l=bs(o,n),d=o.reduce((f,g)=>f+(g.end-g.start),0)/n*100;return{annotated:o,unannotated:l,coveragePercent:d}}function ys(a){if(a.length===0)return[];const n=[];let r={...a[0]};for(let o=1;o<a.length;o++){const l=a[o];l.start<=r.end?r.end=Math.max(r.end,l.end):(n.push(r),r={...l})}return n.push(r),n}function bs(a,n){const r=[];let o=0;for(const l of a)l.start>o&&r.push({start:o,end:l.start}),o=l.end;return o<n&&r.push({start:o,end:n}),r}const ka=[{id:"pan-left",description:"Pan timeline left (1 second)",keys:["ArrowLeft"],browserSafe:!0,category:"navigation"},{id:"pan-right",description:"Pan timeline right (1 second)",keys:["ArrowRight"],browserSafe:!0,category:"navigation"},{id:"jump-next-segment",description:"Jump to next segment",keys:["Tab"],browserSafe:!0,category:"navigation"},{id:"jump-prev-segment",description:"Jump to previous segment",keys:["SHIFT","Tab"],browserSafe:!0,category:"navigation"},{id:"jump-start",description:"Jump to start of audio",keys:["Home"],browserSafe:!0,category:"navigation"},{id:"jump-end",description:"Jump to end of audio",keys:["End"],browserSafe:!0,category:"navigation"},{id:"play-pause",description:"Play/pause looped segment",keys:["Space"],browserSafe:!0,category:"playback"},{id:"toggle-loop",description:"Toggle loop playback",keys:["L"],browserSafe:!0,category:"playback"},{id:"toggle-edit-mode",description:"Toggle edit mode",keys:["ALT","E"],browserSafe:!0,category:"editing"},{id:"extend-segment",description:"Extend right clamp forward (0.1s)",keys:["]"],browserSafe:!0,category:"editing"},{id:"shrink-segment",description:"Shrink right clamp backward (0.1s)",keys:["["],browserSafe:!0,category:"editing"},{id:"confirm-segment",description:"Confirm segment and advance",keys:["Enter"],browserSafe:!0,category:"editing"},{id:"delete-segment",description:"Delete current segment",keys:["Backspace"],browserSafe:!0,category:"editing"},{id:"save-progress",description:"Save current progress",keys:["MOD","S"],browserSafe:!0,category:"editing"},{id:"zoom-in",description:"Zoom in",keys:["+"],browserSafe:!0,category:"zoom"},{id:"zoom-out",description:"Zoom out",keys:["-"],browserSafe:!0,category:"zoom"},{id:"zoom-reset",description:"Reset zoom to default",keys:["0"],browserSafe:!0,category:"zoom"},{id:"nudge-left",description:"Nudge selected clamp left",keys:["ArrowLeft"],browserSafe:!0,category:"editing"},{id:"nudge-right",description:"Nudge selected clamp right",keys:["ArrowRight"],browserSafe:!0,category:"editing"},{id:"navigate-prev",description:"Navigate to previous segment",keys:["ALT","ArrowLeft"],browserSafe:!0,category:"navigation"},{id:"navigate-next",description:"Navigate to next segment",keys:["ALT","ArrowRight"],browserSafe:!0,category:"navigation"}];function Jr(a,n){const r=ka.find(o=>o.id===a);if(r)return r.keys.map(o=>{switch(o){case"MOD":return n==="mac"?"Cmd":"Ctrl";case"ALT":return"Alt";case"SHIFT":return"Shift";case"CTRL":return"Ctrl";default:return o}})}function ws(a,n){const r=Jr(a,n);return r?r.map(o=>{if(n==="mac")switch(o){case"Cmd":return"⌘";case"Shift":return"⇧";case"Alt":return"⌥";case"Ctrl":return"⌃";case"Enter":return"⏎";case"Backspace":return"⌫";case"ArrowLeft":return"←";case"ArrowRight":return"→";case"ArrowUp":return"↑";case"ArrowDown":return"↓";default:return o}return o}).join(n==="mac"?"":"+"):""}function _s(){const a=navigator.userAgent.toLowerCase(),n=navigator.platform?.toLowerCase()||"";return n.includes("mac")||a.includes("mac")?"mac":n.includes("win")||a.includes("win")?"windows":n.includes("linux")||a.includes("linux")?"linux":"unknown"}function ra(a){return{" ":"Space","+":"Plus","-":"Minus","=":"Equal"}[a]||a}function xs(a,n){const r={Cmd:!1,Ctrl:!1,Shift:!1,Alt:!1};let o=null;for(const l of n)r.hasOwnProperty(l)?r[l]=!0:o=ra(l);if(o){const l=ra(a.key).toLowerCase(),c=o.toLowerCase();if(a.key==="Dead"){if(a.code.toLowerCase()!==`key${c}`)return!1}else if(l!==c)return!1}return!(r.Cmd&&!a.metaKey||r.Ctrl&&!a.ctrlKey||r.Shift&&!a.shiftKey||r.Alt&&!a.altKey)}function ks(a){const n=a.composedPath(),r=o=>o?.tagName==="INPUT"||o?.tagName==="TEXTAREA"||o?.isContentEditable;if(n.length===0){const o=a.target;return!!o&&r(o)}return n.some(o=>r(o))}class Ss{constructor(){this.registrations=new Map,this.isEnabled=!0,this.isStarted=!1,this.platform=_s(),this.boundHandler=this.handleKeyDown.bind(this)}getPlatform(){return this.platform}register(n,r){const o=ka.find(l=>l.id===n);if(!o){console.warn(`[KeyboardManager] Unknown shortcut ID: ${n}`);return}if(!o.browserSafe){console.warn(`[KeyboardManager] Shortcut "${n}" is not browser-safe and will not be registered`);return}this.registrations.set(n,{id:n,handler:r,definition:o})}unregister(n){this.registrations.delete(n)}start(n=window){this.isStarted||(n.addEventListener("keydown",this.boundHandler),this.isStarted=!0)}stop(n=window){this.isStarted&&(n.removeEventListener("keydown",this.boundHandler),this.isStarted=!1)}setEnabled(n){this.isEnabled=n}handleKeyDown(n){if(!this.isEnabled)return;const r=ks(n),o=["save-progress","transcribe-segment"];for(const[l,c]of this.registrations.entries()){const d=Jr(l,this.platform);if(d&&xs(n,d)){if(r&&!o.includes(l))continue;n.preventDefault(),n.stopPropagation();try{const f=c.handler(n);f instanceof Promise&&f.catch(g=>{console.error(`[KeyboardManager] Error in shortcut handler "${l}":`,g)})}catch(f){console.error(`[KeyboardManager] Error in shortcut handler "${l}":`,f)}break}}}getRegisteredShortcuts(){return Array.from(this.registrations.values())}getShortcutsByCategory(n){return Array.from(this.registrations.values()).filter(r=>r.definition.category===n)}getFormattedShortcut(n){const r=Jr(n,this.platform);return r?r.map(o=>{if(this.platform==="mac")switch(o){case"Cmd":return"⌘";case"Shift":return"⇧";case"Alt":return"⌥";case"Ctrl":return"⌃";default:return o}return o}).join(this.platform==="mac"?"":"+"):""}destroy(n=window){this.stop(n),this.registrations.clear()}}const xe=new Ss,Sa=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Cs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Es=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,As=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Ps=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Os=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,oe=(a,n,r,o)=>{for(var l=o>1?void 0:o?Ts(n,r):n,c=a.length-1,d;c>=0;c--)(d=a[c])&&(l=(o?d(n,r,l):d(l))||l);return o&&l&&Os(n,r,l),l};class Rs{constructor(){this.status="idle",this.playhead=0,this.loop=!1,this.duration=0,this.ctx=null,this.source=null,this.rafId=null,this._buffer=null,this.currentPlayStart=0,this.currentPlayEnd=0,this.playbackRate=1,this.anchorWallTime=0,this.anchorAudioTime=0}get buffer(){return this._buffer}async load(n){this.dispose(),this.ctx=new AudioContext;const r=await this.ctx.decodeAudioData(await n.arrayBuffer());this._buffer=r,this.duration=r.duration,this.playhead=0,this.onUpdate?.()}setPlaybackRate(n){if(this.ctx&&this.status==="playing"){const r=this.ctx.currentTime,o=r-this.anchorWallTime;this.anchorAudioTime+=o*this.playbackRate,this.anchorWallTime=r}this.source&&(this.source.playbackRate.value=n),this.playbackRate=n}async playRange(n,r,o){if(!this.ctx||!this.buffer)return;this.ctx.state==="suspended"&&await this.ctx.resume(),this.stop(!1);const l=Math.max(0,Math.min(this.duration,n)),c=Math.max(l,Math.min(this.duration,r)),d=Math.max(.01,c-l);this.currentPlayStart=l,this.currentPlayEnd=c,this.loop=o,this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.ctx.destination),this.source.playbackRate.value=this.playbackRate,this.anchorWallTime=this.ctx.currentTime,this.anchorAudioTime=l,this.source.start(0,l,d),this.status="playing",this.playhead=n,this.onUpdate?.(),this.trackPlayhead(),this.source.onended=()=>{this.loop?this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop):(this.stop(!1),this.playhead=this.currentPlayEnd,this.onUpdate?.())}}pause(){this.stop()}setPlayRange(n,r){this.currentPlayStart=n,this.currentPlayEnd=r,this.playhead=n,this.onUpdate?.(),this.status==="playing"&&this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop)}setLoop(n){this.loop=n,this.onUpdate?.(),n&&this.status==="playing"&&this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop)}reset(){this.stop(),this.loop=!1,this.playhead=0,this.currentPlayStart=0,this.currentPlayEnd=0,this.onUpdate?.()}dispose(){this.stop(),this.ctx&&(this.ctx.close(),this.ctx=null),this._buffer=null,this.duration=0,this.currentPlayStart=0,this.currentPlayEnd=0}stop(n=!0){if(this.source){this.source.onended=null;try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=null,this.status="idle",n&&(this.playhead=this.currentPlayStart),this.onUpdate?.()}trackPlayhead(){if(!this.ctx)return;const n=this.ctx,r=()=>{if(this.ctx!==n||this.status!=="playing")return;const l=this.ctx.currentTime-this.anchorWallTime,c=this.anchorAudioTime+l*this.playbackRate;this.playhead=Math.min(c,this.currentPlayEnd),this.onUpdate?.(),this.rafId=requestAnimationFrame(r)};this.rafId=requestAnimationFrame(r)}}let ee=class extends Ee{constructor(){super(...arguments),this.audioBlob=null,this.recordingId="",this.initialData=null,this.annotationState=Vr(""),this.textCoverage={annotated:[],unannotated:[],coveragePercent:0},this.keyboardMode="normal",this.selectedClamp="right",this.centerCharIndex=0,this.duration=0,this.isPlaying=!1,this.loop=!1,this.playhead=0,this.playbackRate=1,this.showConfirmReset=!1,this.visualMode="classic",this.saveStatus="idle",this.controller=null}connectedCallback(){super.connectedCallback(),this.registerShortcuts(),xe.start(window)}async firstUpdated(){this.audioBlob&&await this.loadAudio()}disconnectedCallback(){super.disconnectedCallback(),xe.destroy(window),this.controller?.dispose(),this.controller=null}registerShortcuts(){xe.register("play-pause",()=>this.handlePlayPause()),xe.register("toggle-loop",()=>this.handleLoopToggle()),xe.register("toggle-edit-mode",()=>this.enterEditMode()),xe.register("confirm-segment",()=>{const r=this.annotationState.activeSegment;r&&r.charEnd>r.charStart&&this.handleComplete()}),xe.register("save-progress",()=>this.handleSave());const a=.1,n=.5;xe.register("nudge-left",r=>{this.nudgeSelectedClamp(-1,r.shiftKey?n:a)}),xe.register("nudge-right",r=>{this.nudgeSelectedClamp(1,r.shiftKey?n:a)}),xe.register("jump-next-segment",()=>{this.selectedClamp=this.selectedClamp==="left"?"right":"left",this.requestUpdate()})}async loadAudio(){this.controller?.dispose(),this.controller=new Rs,this.controller.onUpdate=()=>{this.playhead=this.controller.playhead,this.isPlaying=this.controller.status==="playing",this.loop=this.controller.loop,this.isPlaying&&this.autoScrollToPlayhead(),this.requestUpdate()},await this.controller.load(this.audioBlob),this.duration=this.controller.duration;const a=this.initialData?.fullText||"";let n=Vr(a),r=0,o=0;if(this.initialData?.segments&&Array.isArray(this.initialData.segments)){const g=this.initialData.segments.map(b=>({id:b.id||crypto.randomUUID(),audioStart:b.start??b.audioStart??0,audioEnd:b.end??b.audioEnd??0,charStart:b.textStartIdx??b.charStart??0,charEnd:b.textEndIdx??b.charEnd??0}));if(n={...n,segments:g},g.length>0){const b=g[g.length-1];r=b.audioEnd,o=b.charEnd}}let l=Math.min(this.duration,r+3);if(this.controller.buffer){const b=Zr(this.controller.buffer).find(x=>x.start>r+.1);b&&(l=b.start)}const c=Math.max(.5,l-r),d=Math.round(c*15),f=Math.min(a.length,o+d);n=hn(n,r,l,o,f),this.annotationState=n,this.textCoverage=Xe(n),this.playhead=r,this.keyboardMode="normal",this.selectedClamp="right",this.requestUpdate()}handleSpeedChange(a){const n=parseFloat(a.target.value);this.playbackRate=n,this.controller&&this.controller.setPlaybackRate(n)}handleStageClampChange(a){const{left:n,right:r}=a.detail;this.annotationState.activeSegment&&(this.annotationState=ea(this.annotationState,n,r),this.controller?.setPlayRange(n,r),this.requestUpdate())}handleClampSelect(a){const{which:n}=a.detail;this.selectedClamp=n,this.requestUpdate()}handleSeek(a){const{time:n}=a.detail;if(this.playhead=n,this.annotationState.activeSegment){const{state:o}=Gr(this.annotationState);this.annotationState=o,this.textCoverage=Xe(o)}const r=this.annotationState.segments.find(o=>n>=o.audioStart&&n<o.audioEnd);if(r){let o=na(this.annotationState,r.id);o=hn(o,r.audioStart,r.audioEnd,r.charStart,r.charEnd,r.id),this.annotationState=o,this.textCoverage=Xe(o),this.centerCharIndex=Math.floor((r.charStart+r.charEnd)/2),this.controller&&this.controller.playRange(r.audioStart,r.audioEnd,this.loop)}else{const o=this.annotationState.activeSegment;o&&n>=o.audioStart&&n<o.audioEnd&&(this.centerCharIndex=Math.floor((o.charStart+o.charEnd)/2))}this.requestUpdate()}handleStageViewportChange(a){}handleTextSelectionChange(a){const{charStart:n,charEnd:r}=a.detail;this.annotationState.activeSegment&&(this.annotationState=gs(this.annotationState,n,r),this.requestUpdate())}handleTextEdit(a){const n=a.detail;this.annotationState=xa(this.annotationState,n),this.textCoverage=Xe(this.annotationState),this.requestUpdate()}handleTextModeChange(a){const{mode:n}=a.detail;this.keyboardMode=n==="edit"?"edit":"normal",this.requestUpdate()}syncFromController(){this.controller&&(this.playhead=this.controller.playhead,this.isPlaying=this.controller.status==="playing",this.loop=this.controller.loop,this.isPlaying&&this.autoScrollToPlayhead())}async handlePlayPause(){if(!this.controller)return;const a=this.annotationState.activeSegment;a&&(this.isPlaying?this.controller.pause():await this.controller.playRange(a.audioStart,a.audioEnd,this.loop))}handleLoopToggle(){this.controller&&this.controller.setLoop(!this.loop)}handleSkip(){const a=this.annotationState.activeSegment;if(!a)return;const n={...this.annotationState,activeSegment:{...a,isSkipped:!0,charEnd:a.charStart}},{state:r,segmentId:o}=Gr(n);if(!o)return;this.dispatchEvent(new CustomEvent("annotation-complete",{detail:{annotations:r.segments,fullText:r.evolvingHypothesis},bubbles:!0,composed:!0}));const l=a.audioEnd,c=a.charStart;let d=l,f=Math.min(this.duration,d+3);if(this.controller?.buffer){const E=Zr(this.controller.buffer).find(y=>y.start>l+.1);E&&(f=E.start)}const g=Math.max(.5,f-d),b=Math.round(g*15),x=c,w=Math.min(r.evolvingHypothesis.length,x+b),C=hn(r,d,f,x,w);this.annotationState=C,this.textCoverage=Xe(C),this.playhead=d,this.selectedClamp="right",this.controller&&this.controller.playRange(d,f,this.loop),this.requestUpdate()}handleSave(){this.saveStatus="saving",this.dispatchEvent(new CustomEvent("progress-saved",{detail:{annotations:this.annotationState.segments,fullText:this.annotationState.evolvingHypothesis},bubbles:!0,composed:!0})),setTimeout(()=>{this.saveStatus="saved",this.requestUpdate(),setTimeout(()=>{this.saveStatus="idle",this.requestUpdate()},2e3)},500)}handleComplete(){const a=this.annotationState.activeSegment;if(!a)return;let{state:n,segmentId:r}=Gr(this.annotationState);if(!r)return;this.dispatchEvent(new CustomEvent("annotation-complete",{detail:{annotations:n.segments,fullText:n.evolvingHypothesis},bubbles:!0,composed:!0}));const o=a.audioEnd,l=a.charEnd;let c=o,d=Math.min(this.duration,c+3);if(this.controller?.buffer){const E=Zr(this.controller.buffer).find(y=>y.start>o+.1);E&&(d=E.start)}const f=Math.max(.5,d-c),g=Math.round(f*15),b=l,x=Math.min(n.evolvingHypothesis.length,b+g),w=n.segments.find(v=>Math.abs(v.audioStart-c)<.1);let C;w?(n=na(n,w.id),C=hn(n,w.audioStart,w.audioEnd,w.charStart,w.charEnd,w.id),d=w.audioEnd):C=hn(n,c,d,b,x),this.annotationState=C,this.textCoverage=Xe(C),this.playhead=c,this.keyboardMode="normal",this.selectedClamp="right",this.controller&&this.controller.playRange(c,d,this.loop),this.requestUpdate()}startOver(){this.showConfirmReset=!0}confirmReset(){this.showConfirmReset=!1;const a=Vr(""),n=hn(a,0,Math.min(3,this.duration),0,0);this.annotationState=n,this.textCoverage=Xe(n),this.keyboardMode="normal",this.selectedClamp="right",this.playhead=0,this.controller&&(this.controller.reset(),this.syncFromController()),this.requestUpdate()}cancelReset(){this.showConfirmReset=!1}autoScrollToPlayhead(){}formatTime(a){return a.toFixed(2)+"s"}enterEditMode(){this.keyboardMode="edit",this.requestUpdate()}nudgeSelectedClamp(a,n){const r=this.annotationState.activeSegment;if(!r)return;const o=a*n;let l=r.audioStart,c=r.audioEnd;if(this.selectedClamp==="left"){if(l=Math.max(0,r.audioStart+o),l>=c-.1)return}else if(c=Math.min(this.duration,r.audioEnd+o),c<=l+.1)return;this.annotationState=ea(this.annotationState,l,c),this.controller?.setPlayRange(l,c),this.requestUpdate()}render(){const a=this.annotationState.activeSegment,n=a?.audioStart??0,r=a?.audioEnd??0,o=a?.charStart??0,l=a?.charEnd??0,c=a?ms(this.annotationState,a):"",d=this.annotationState.segments.filter(x=>!x.isSkipped).map(x=>({start:x.audioStart,end:x.audioEnd})),f=this.annotationState.segments.map(x=>({charStart:x.charStart,charEnd:x.charEnd})),g=this.textCoverage.unannotated.map(x=>({charStart:x.start,charEnd:x.end})),b=this.keyboardMode==="edit"?"edit":"navigate";return Vt`
      <div class="page">
        <div class="header">
          <div class="title">Audio-Text Alignment</div>
          <div class="stats">
            <span>Segment: ${this.formatTime(n)} → ${this.formatTime(r)}</span>
            <span>Length: ${this.formatTime(r-n)}</span>
            <span>Duration: ${this.formatTime(this.duration)}</span>
            <span>Coverage: ${this.textCoverage.coveragePercent.toFixed(0)}%</span>
          </div>
        </div>

        <div class="stage-audio">
          <stage-waveform
            .audioBuffer=${this.audioBlob?this.controller?.buffer??null:null}
            .leftClamp=${n}
            .rightClamp=${r}
            .playhead=${this.playhead}
            .visualMode=${this.visualMode}
            .isPlaying=${this.isPlaying}
            .selectedClamp=${this.selectedClamp}
            .committedSegments=${d}
            @clamp-change=${this.handleStageClampChange}
            @clamp-select=${this.handleClampSelect}
            @seek=${this.handleSeek}
            @viewport-change=${this.handleStageViewportChange}
          ></stage-waveform>
        </div>

        <div class="controls">
          <button class="btn" @click=${this.handlePlayPause}>
            ${ue(this.isPlaying?Cs:Sa)}
            <span>${this.isPlaying?"Pause":"Play"}</span>
          </button>
          <button class="btn" @click=${this.handleLoopToggle} ?aria-pressed=${this.loop}>
            ${ue(Es)}
            <span>Loop ${this.loop?"On":"Off"}</span>
          </button>
          <button class="btn" @click=${this.startOver}>Start Over</button>

          <div class="visualizer-selector">
            <label for="playbackSpeedSelect">Speed:</label>
            <select id="playbackSpeedSelect" @change=${this.handleSpeedChange}>
              <option value="0.5" ?selected=${this.playbackRate===.5}>0.5x</option>
              <option value="0.75" ?selected=${this.playbackRate===.75}>0.75x</option>
              <option value="1.0" ?selected=${this.playbackRate===1}>1.0x</option>
              <option value="1.25" ?selected=${this.playbackRate===1.25}>1.25x</option>
              <option value="1.5" ?selected=${this.playbackRate===1.5}>1.5x</option>
              <option value="1.75" ?selected=${this.playbackRate===1.75}>1.75x</option>
              <option value="2.0" ?selected=${this.playbackRate===2}>2.0x</option>
            </select>

            <label for="visualModeSelect">Visualize:</label>
            <select id="visualModeSelect" @change=${x=>this.visualMode=x.target.value}>
              <option value="classic" ?selected=${this.visualMode==="classic"}>Classic</option>
              <option value="neon" ?selected=${this.visualMode==="neon"}>Neon Pulse</option>
              <option value="mirror" ?selected=${this.visualMode==="mirror"}>Mirrored</option>
            </select>
          </div>
        </div>

        <div class="stage-text">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div class="title" style="font-size: var(--text-base);">Segment Text</div>
            <button class="btn" @click=${this.enterEditMode} style="height: 24px; font-size: 12px;">
              ${this.keyboardMode==="edit"?"Editing... (Esc to exit)":`Edit Text (${ws("toggle-edit-mode",xe.getPlatform())})`}
            </button>
          </div>

          <smoked-glass-text
            .text=${this.annotationState.evolvingHypothesis}
            .charStart=${o}
            .charEnd=${l}
            .centerCharIndex=${this.centerCharIndex}
            .committedRanges=${f}
            .unannotatedRanges=${g}
            .mode=${b}
            @selection-change=${this.handleTextSelectionChange}
            @text-edit=${this.handleTextEdit}
            @mode-change=${this.handleTextModeChange}
          ></smoked-glass-text>
        </div>

        <div class="footer">
          <div>${this.formatTime(r-n)} segment</div>
          <div style="display:flex; gap: var(--spacing-2);">
            <button class="btn" @click=${this.handleSkip} title="Skip audio region (don't commit text)">
              <span>Skip</span>
            </button>
            <button class="btn" @click=${this.handleSave}>
              ${ue(As)}
              <span>${this.saveStatus==="saved"?"Saved ✓":this.saveStatus==="saving"?"Saving...":"Save Progress"}</span>
            </button>
            <button class="btn primary" @click=${this.handleComplete} ?disabled=${!c.trim()}>
              ${ue(Ps)}
              <span>Confirm & Next</span>
            </button>
          </div>
        </div>

        ${this.showConfirmReset?Vt`
          <div class="overlay">
            <div class="modal">
              <div style="font-size: var(--text-lg); font-weight: var(--font-bold); margin-bottom: var(--spacing-2);">
                Start over?
              </div>
              <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--spacing-3);">
                This will stop playback, turn off loop, clear the text, and reset clamps.
              </div>
              <div style="display:flex; gap: var(--spacing-2); justify-content: flex-end;">
                <button class="btn" @click=${this.cancelReset}>Cancel</button>
                <button class="btn primary" @click=${this.confirmReset}>Confirm</button>
              </div>
            </div>
          </div>
        `:null}
      </div>
    `}};ee.styles=mn`
    :host {
      display: block;
      height: 100vh; /* Lock to viewport height */
      width: 100vw;  /* Lock to viewport width */
      background: var(--bg-primary);
      color: var(--text-primary);
      font-family: var(--font-ui);
      overflow: hidden; /* Prevent window scroll */
      box-sizing: border-box;
      outline: none; /* Remove focus ring, handled visually elsewhere */
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    .page {
      height: 100%;
      display: grid;
      /* Header, Audio(fixed), Controls, Text(flexible), Footer */
      grid-template-rows: auto 240px auto 1fr auto; 
      gap: var(--spacing-3);
      padding: var(--spacing-4);
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-2) var(--spacing-4);
      min-height: 60px;
    }

    .stage-audio {
      background: var(--bg-surface);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-3);
      /* Height is controlled by grid track */
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden; /* Contain the visualizer */
      min-height: 0;
    }

    stage-waveform {
      width: 100%;
      height: 100%;
    }

    .stage-text {
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-3);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
      min-height: 0; /* Allow shrinking if needed */
      overflow: hidden;
      position: relative;
    }

    /* Ensure text component fills the stage */
    smoked-glass-text {
      flex: 1;
      height: 100%;
    }

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-2);
      align-items: center;
      padding: 0 var(--spacing-2);
      min-height: 40px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-2);
      padding: var(--spacing-2) var(--spacing-3);
      border-radius: var(--radius-md);
      border: 1px solid var(--glass-border);
      background: var(--glass-bg);
      color: var(--text-primary);
      cursor: pointer;
      font-size: var(--text-xs); /* Smaller font */
      font-weight: var(--font-semibold);
      height: 32px; /* Fixed compact height */
      transition: transform 120ms ease, box-shadow 120ms ease;
    }

    .btn svg {
      width: 14px;
      height: 14px;
    }

    /* ... (btn hover states remain) ... */

    /* Remove old textarea styles */

    .visualizer-selector {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      margin-left: auto;
      font-size: var(--text-xs);
      color: var(--text-secondary);
    }

    select {
      /* ... existing select styles but compact ... */
      padding: var(--spacing-1) var(--spacing-2);
      font-size: var(--text-xs);
      height: 32px;
    }

    .footer {
      /* ... existing footer ... */
      padding: var(--spacing-2) var(--spacing-4);
    }

    .overlay {
      position: fixed;
      inset: 0;
      display: grid;
      place-items: center;
      background: rgba(0, 0, 0, 0.5);
      z-index: 9999;
    }

    .modal {
      background: var(--bg-surface);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-4);
      min-width: 320px;
      box-shadow: var(--shadow-xl);
    }
  `;oe([te({type:Object})],ee.prototype,"audioBlob",2);oe([te({type:String})],ee.prototype,"recordingId",2);oe([te({type:Object})],ee.prototype,"initialData",2);oe([Kt()],ee.prototype,"annotationState",2);oe([Kt()],ee.prototype,"textCoverage",2);oe([Kt()],ee.prototype,"keyboardMode",2);oe([Kt()],ee.prototype,"selectedClamp",2);oe([Kt()],ee.prototype,"centerCharIndex",2);oe([Kt()],ee.prototype,"duration",2);oe([Kt()],ee.prototype,"isPlaying",2);oe([Kt()],ee.prototype,"loop",2);oe([Kt()],ee.prototype,"playhead",2);oe([Kt()],ee.prototype,"playbackRate",2);oe([Kt()],ee.prototype,"showConfirmReset",2);oe([Kt()],ee.prototype,"visualMode",2);oe([Kt()],ee.prototype,"saveStatus",2);ee=oe([gn("annotation-workflow")],ee);const $s=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Is=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Ds=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,ai=(a,n,r,o)=>{for(var l=o>1?void 0:o?Bs(n,r):n,c=a.length-1,d;c>=0;c--)(d=a[c])&&(l=(o?d(n,r,l):d(l))||l);return o&&l&&Ds(n,r,l),l};let Dn=class extends Ee{constructor(){super(...arguments),this.recording=null,this.existingAnnotation=null}async connectedCallback(){super.connectedCallback(),this.recording?.isAnnotated&&(this.existingAnnotation=await On(this.recording.id)||null)}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async handleStartOver(){!this.recording||!confirm("Are you sure you want to start over? This will delete all current annotations.")||(await Fo(this.recording.id),this.existingAnnotation=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("annotation-reset",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})))}async handleAnnotationComplete(a){if(!this.recording)return;const{annotations:n,fullText:r}=a.detail,o={recordingId:this.recording.id,fullText:r,segments:n,completedAt:Date.now(),updatedAt:Date.now()};await Wr(o),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0}))}async handleAnnotationSaved(a){if(!this.recording)return;const{allAnnotations:n}=a.detail,r=await On(this.recording.id);r&&(r.segments=n,r.updatedAt=Date.now(),await Wr(r))}async handleProgressSaved(a){if(!this.recording)return;const{annotations:n}=a.detail;let r=await On(this.recording.id);r?(r.segments=n,r.updatedAt=Date.now()):r={recordingId:this.recording.id,fullText:"",segments:n,completedAt:0,updatedAt:Date.now()},await Wr(r)}render(){return this.recording?Vt`
      <div class="modal-header">
        <div class="title-section">
          <div class="modal-title">Annotating: ${this.recording.title}</div>
          <div class="subtitle">
            Duration: ${this.recording.duration.toFixed(2)}s |
            Source: ${this.recording.source}
          </div>
        </div>

        <div class="header-actions">
          ${this.existingAnnotation?Vt`
                <button
                  class="header-btn danger"
                  @click=${this.handleStartOver}
                  title="Delete all annotations and start over"
                >
                  ${ue(Is)}
                  <span>Start Over</span>
                </button>
              `:null}

          <button
            class="header-btn"
            @click=${this.handleClose}
            title="Close without saving"
          >
            ${ue($s)}
            <span>Close</span>
          </button>
        </div>
      </div>

      <div class="modal-content">
        <annotation-workflow
          .audioBlob=${this.recording.audioBlob}
          .recordingId=${this.recording.id}
          .initialData=${this.existingAnnotation}
          @annotation-complete=${this.handleAnnotationComplete}
          @annotation-saved=${this.handleAnnotationSaved}
          @progress-saved=${this.handleProgressSaved}
        ></annotation-workflow>
      </div>
    `:Vt`<div>No recording selected</div>`}};Dn.styles=mn`
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
  `;ai([te({type:Object})],Dn.prototype,"recording",2);ai([Kt()],Dn.prototype,"existingAnnotation",2);Dn=ai([gn("annotation-modal")],Dn);const zs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Ms=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,js=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Fs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Ns=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ia=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Us=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Ls=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Ks=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,vn=(a,n,r,o)=>{for(var l=o>1?void 0:o?qs(n,r):n,c=a.length-1,d;c>=0;c--)(d=a[c])&&(l=(o?d(n,r,l):d(l))||l);return o&&l&&Ks(n,r,l),l};let Ke=class extends Ee{constructor(){super(...arguments),this.recordings=[],this.isRecording=!1,this.recordingDuration=0,this.selectedRecording=null,this.isModalOpen=!1,this.microphoneService=null,this.mediaRecorderService=null,this.recordingTimer=null}async connectedCallback(){super.connectedCallback(),await this.loadRecordings()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async loadRecordings(){this.recordings=await ha()}async startRecording(){try{this.microphoneService=new Ao;const a=await this.microphoneService.requestPermission();this.mediaRecorderService=new Po,await this.mediaRecorderService.initialize(a),this.mediaRecorderService.onStateChange(n=>{n==="recording"&&!this.recordingTimer&&(this.isRecording=!0,this.recordingTimer=window.setInterval(()=>{this.recordingDuration+=.25;const r=this.shadowRoot?.querySelector(".duration");r&&(r.textContent=this.formatDuration(this.recordingDuration))},250))}),this.recordingDuration=0,this.mediaRecorderService.start()}catch(a){console.error("Failed to start recording:",a),alert("Failed to start recording. Please check microphone permissions."),this.cleanup()}}async stopRecording(){if(this.mediaRecorderService)try{const a=await this.mediaRecorderService.stop(),n=this.recordingDuration,o=`Untitled ${await No()}`;await da({title:o,audioBlob:a,duration:n,source:"recording"}),await this.loadRecordings()}catch(a){console.error("Failed to save recording:",a),alert("Failed to save recording.")}finally{this.cleanup()}}cleanup(){this.isRecording=!1,this.recordingDuration=0,this.recordingTimer&&(clearInterval(this.recordingTimer),this.recordingTimer=null),this.microphoneService?.release(),this.mediaRecorderService=null,this.microphoneService=null}async handleUpload(){const a=await Wo();if(!(!a||a.length===0))try{await qo(a),await this.loadRecordings()}catch(n){console.error("Failed to upload files:",n),alert("Failed to upload files.")}}async handleTitleChange(a,n){await Mo(a.id,{title:n}),await this.loadRecordings()}async handlePlay(a){new Audio(URL.createObjectURL(a.audioBlob)).play()}handleAnnotate(a){this.selectedRecording=a,this.isModalOpen=!0}async handleExport(a){try{await Yo(a.id)}catch(n){console.error("Failed to export recording:",n),alert(n instanceof Error?n.message:"Failed to export recording.")}}async handleDelete(a){confirm(`Are you sure you want to delete "${a.title}"? This cannot be undone.`)&&(await jo(a.id),await this.loadRecordings())}async handleExportAll(){try{await Xo()}catch(a){console.error("Failed to export all recordings:",a),alert(a instanceof Error?a.message:"Failed to export recordings.")}}handleModalClose(){this.isModalOpen=!1,this.selectedRecording=null,this.loadRecordings()}formatDuration(a){const n=Math.floor(a/60),r=Math.floor(a%60);return`${n}:${r.toString().padStart(2,"0")}`}render(){return Vt`
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
          ${this.isRecording?null:Vt`
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
              ${ue(this.isRecording?Ms:zs)}
              <span>${this.isRecording?"Stop Recording":"Record Audio"}</span>
            </button>

            ${this.isRecording?Vt`<div class="duration">${this.formatDuration(this.recordingDuration)}</div>`:Vt`
                  <button class="upload-btn" @click=${this.handleUpload}>
                    ${ue(js)}
                    <span>Upload Files</span>
                  </button>
                `}
          </div>
        </div>

        <!-- Recordings Table -->
        <div class="recordings-header">
          <h2 class="section-title">Recordings (${this.recordings.length})</h2>
          ${this.recordings.some(a=>a.isAnnotated)?Vt`
                <button class="export-all-btn" @click=${this.handleExportAll}>
                  ${ue(ia)}
                  <span>Export All</span>
                </button>
              `:null}
        </div>

        <div class="recordings-table">
          ${this.recordings.length===0?Vt`
                <div class="empty-state">
                  <div class="empty-icon">${ue(Ls)}</div>
                  <div class="empty-title">No recordings yet</div>
                  <div class="empty-description">
                    Start recording or upload audio files to begin annotating your voice data
                  </div>
                </div>
              `:Vt`
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
                    ${this.recordings.map(a=>Vt`
                        <tr>
                          <td>
                            ${a.isAnnotated?Vt`${ue(Us)}`:""}
                          </td>
                          <td>
                            <div class="title-cell">
                              <input
                                class="title-input"
                                type="text"
                                .value=${a.title}
                                @change=${n=>this.handleTitleChange(a,n.target.value)}
                                placeholder="Enter title..."
                              />
                            </div>
                          </td>
                          <td>
                            <span class="duration-badge">
                              ${this.formatDuration(a.duration)}
                            </span>
                          </td>
                          <td>
                            <span class="duration-badge">
                              ${a.source==="recording"?"Recorded":"Uploaded"}
                            </span>
                          </td>
                          <td>
                            <div class="actions">
                              <button
                                class="action-btn"
                                @click=${()=>this.handlePlay(a)}
                                title="Play audio"
                              >
                                ${ue(Sa)}
                                <span>Play</span>
                              </button>

                              <button
                                class="action-btn"
                                @click=${()=>this.handleAnnotate(a)}
                                title="Annotate audio"
                              >
                                ${ue(Fs)}
                                <span>Annotate</span>
                              </button>

                              ${a.isAnnotated?Vt`
                                    <button
                                      class="action-btn"
                                      @click=${()=>this.handleExport(a)}
                                      title="Export annotation"
                                    >
                                      ${ue(ia)}
                                      <span>Export</span>
                                    </button>
                                  `:null}

                              <button
                                class="action-btn danger"
                                @click=${()=>this.handleDelete(a)}
                                title="Delete recording"
                              >
                                ${ue(Ns)}
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
      ${this.isModalOpen&&this.selectedRecording?Vt`
            <annotation-modal
              .recording=${this.selectedRecording}
              @close=${this.handleModalClose}
            ></annotation-modal>
          `:null}
    `}};Ke.styles=mn`
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
  `;vn([Kt()],Ke.prototype,"recordings",2);vn([Kt()],Ke.prototype,"isRecording",2);vn([Kt()],Ke.prototype,"recordingDuration",2);vn([Kt()],Ke.prototype,"selectedRecording",2);vn([Kt()],Ke.prototype,"isModalOpen",2);Ke=vn([gn("minimal-recorder")],Ke);const Ca=a=>{document.body.setAttribute("data-theme",a)};Ca(Tn.getCurrentTheme());Tn.subscribe(a=>{Ca(a.currentTheme)});

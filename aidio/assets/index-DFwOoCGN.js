(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const l of u)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function i(u){const l={};return u.integrity&&(l.integrity=u.integrity),u.referrerPolicy&&(l.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?l.credentials="include":u.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(u){if(u.ep)return;u.ep=!0;const l=i(u);fetch(u.href,l)}})();const Gn=globalThis,Lr=Gn.ShadowRoot&&(Gn.ShadyCSS===void 0||Gn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kr=Symbol(),Ei=new WeakMap;let Wi=class{constructor(a,i,d){if(this._$cssResult$=!0,d!==Kr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=i}get styleSheet(){let a=this.o;const i=this.t;if(Lr&&a===void 0){const d=i!==void 0&&i.length===1;d&&(a=Ei.get(i)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),d&&Ei.set(i,a))}return a}toString(){return this.cssText}};const Da=p=>new Wi(typeof p=="string"?p:p+"",void 0,Kr),rr=(p,...a)=>{const i=p.length===1?p[0]:a.reduce(((d,u,l)=>d+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(u)+p[l+1]),p[0]);return new Wi(i,p,Kr)},Ba=(p,a)=>{if(Lr)p.adoptedStyleSheets=a.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet));else for(const i of a){const d=document.createElement("style"),u=Gn.litNonce;u!==void 0&&d.setAttribute("nonce",u),d.textContent=i.cssText,p.appendChild(d)}},Oi=Lr?p=>p:p=>p instanceof CSSStyleSheet?(a=>{let i="";for(const d of a.cssRules)i+=d.cssText;return Da(i)})(p):p;const{is:ja,defineProperty:Ma,getOwnPropertyDescriptor:Fa,getOwnPropertyNames:Na,getOwnPropertySymbols:Ua,getPrototypeOf:La}=Object,ir=globalThis,Pi=ir.trustedTypes,Ka=Pi?Pi.emptyScript:"",qa=ir.reactiveElementPolyfillSupport,yn=(p,a)=>p,Qn={toAttribute(p,a){switch(a){case Boolean:p=p?Ka:null;break;case Object:case Array:p=p==null?p:JSON.stringify(p)}return p},fromAttribute(p,a){let i=p;switch(a){case Boolean:i=p!==null;break;case Number:i=p===null?null:Number(p);break;case Object:case Array:try{i=JSON.parse(p)}catch{i=null}}return i}},qr=(p,a)=>!ja(p,a),Ri={attribute:!0,type:String,converter:Qn,reflect:!1,useDefault:!1,hasChanged:qr};Symbol.metadata??=Symbol("metadata"),ir.litPropertyMetadata??=new WeakMap;let an=class extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??=[]).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,i=Ri){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(a)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(a,i),!i.noAccessor){const d=Symbol(),u=this.getPropertyDescriptor(a,d,i);u!==void 0&&Ma(this.prototype,a,u)}}static getPropertyDescriptor(a,i,d){const{get:u,set:l}=Fa(this.prototype,a)??{get(){return this[i]},set(c){this[i]=c}};return{get:u,set(c){const h=u?.call(this);l?.call(this,c),this.requestUpdate(a,h,d)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??Ri}static _$Ei(){if(this.hasOwnProperty(yn("elementProperties")))return;const a=La(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(yn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yn("properties"))){const i=this.properties,d=[...Na(i),...Ua(i)];for(const u of d)this.createProperty(u,i[u])}const a=this[Symbol.metadata];if(a!==null){const i=litPropertyMetadata.get(a);if(i!==void 0)for(const[d,u]of i)this.elementProperties.set(d,u)}this._$Eh=new Map;for(const[i,d]of this.elementProperties){const u=this._$Eu(i,d);u!==void 0&&this._$Eh.set(u,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){const i=[];if(Array.isArray(a)){const d=new Set(a.flat(1/0).reverse());for(const u of d)i.unshift(Oi(u))}else a!==void 0&&i.push(Oi(a));return i}static _$Eu(a,i){const d=i.attribute;return d===!1?void 0:typeof d=="string"?d:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((a=>this.enableUpdating=a)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((a=>a(this)))}addController(a){(this._$EO??=new Set).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){const a=new Map,i=this.constructor.elementProperties;for(const d of i.keys())this.hasOwnProperty(d)&&(a.set(d,this[d]),delete this[d]);a.size>0&&(this._$Ep=a)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ba(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((a=>a.hostConnected?.()))}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach((a=>a.hostDisconnected?.()))}attributeChangedCallback(a,i,d){this._$AK(a,d)}_$ET(a,i){const d=this.constructor.elementProperties.get(a),u=this.constructor._$Eu(a,d);if(u!==void 0&&d.reflect===!0){const l=(d.converter?.toAttribute!==void 0?d.converter:Qn).toAttribute(i,d.type);this._$Em=a,l==null?this.removeAttribute(u):this.setAttribute(u,l),this._$Em=null}}_$AK(a,i){const d=this.constructor,u=d._$Eh.get(a);if(u!==void 0&&this._$Em!==u){const l=d.getPropertyOptions(u),c=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:Qn;this._$Em=u;const h=c.fromAttribute(i,l.type);this[u]=h??this._$Ej?.get(u)??h,this._$Em=null}}requestUpdate(a,i,d){if(a!==void 0){const u=this.constructor,l=this[a];if(d??=u.getPropertyOptions(a),!((d.hasChanged??qr)(l,i)||d.useDefault&&d.reflect&&l===this._$Ej?.get(a)&&!this.hasAttribute(u._$Eu(a,d))))return;this.C(a,i,d)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(a,i,{useDefault:d,reflect:u,wrapped:l},c){d&&!(this._$Ej??=new Map).has(a)&&(this._$Ej.set(a,c??i??this[a]),l!==!0||c!==void 0)||(this._$AL.has(a)||(this.hasUpdated||d||(i=void 0),this._$AL.set(a,i)),u===!0&&this._$Em!==a&&(this._$Eq??=new Set).add(a))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[u,l]of this._$Ep)this[u]=l;this._$Ep=void 0}const d=this.constructor.elementProperties;if(d.size>0)for(const[u,l]of d){const{wrapped:c}=l,h=this[u];c!==!0||this._$AL.has(u)||h===void 0||this.C(u,void 0,l,h)}}let a=!1;const i=this._$AL;try{a=this.shouldUpdate(i),a?(this.willUpdate(i),this._$EO?.forEach((d=>d.hostUpdate?.())),this.update(i)):this._$EM()}catch(d){throw a=!1,this._$EM(),d}a&&this._$AE(i)}willUpdate(a){}_$AE(a){this._$EO?.forEach((i=>i.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Eq&&=this._$Eq.forEach((i=>this._$ET(i,this[i]))),this._$EM()}updated(a){}firstUpdated(a){}};an.elementStyles=[],an.shadowRootOptions={mode:"open"},an[yn("elementProperties")]=new Map,an[yn("finalized")]=new Map,qa?.({ReactiveElement:an}),(ir.reactiveElementVersions??=[]).push("2.1.1");const Wr=globalThis,tr=Wr.trustedTypes,Ti=tr?tr.createPolicy("lit-html",{createHTML:p=>p}):void 0,Hi="$lit$",De=`lit$${Math.random().toFixed(9).slice(2)}$`,Zi="?"+De,Wa=`<${Zi}>`,He=document,_n=()=>He.createComment(""),xn=p=>p===null||typeof p!="object"&&typeof p!="function",Hr=Array.isArray,Ha=p=>Hr(p)||typeof p?.[Symbol.iterator]=="function",jr=`[ 	
\f\r]`,gn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$i=/-->/g,Ii=/>/g,qe=RegExp(`>|${jr}(?:([^\\s"'>=/]+)(${jr}*=${jr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zi=/'/g,Di=/"/g,Vi=/^(?:script|style|textarea|title)$/i,Za=p=>(a,...i)=>({_$litType$:p,strings:a,values:i}),ie=Za(1),Ze=Symbol.for("lit-noChange"),Xt=Symbol.for("lit-nothing"),Bi=new WeakMap,We=He.createTreeWalker(He,129);function Yi(p,a){if(!Hr(p)||!p.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ti!==void 0?Ti.createHTML(a):a}const Va=(p,a)=>{const i=p.length-1,d=[];let u,l=a===2?"<svg>":a===3?"<math>":"",c=gn;for(let h=0;h<i;h++){const v=p[h];let x,A,_=-1,E=0;for(;E<v.length&&(c.lastIndex=E,A=c.exec(v),A!==null);)E=c.lastIndex,c===gn?A[1]==="!--"?c=$i:A[1]!==void 0?c=Ii:A[2]!==void 0?(Vi.test(A[2])&&(u=RegExp("</"+A[2],"g")),c=qe):A[3]!==void 0&&(c=qe):c===qe?A[0]===">"?(c=u??gn,_=-1):A[1]===void 0?_=-2:(_=c.lastIndex-A[2].length,x=A[1],c=A[3]===void 0?qe:A[3]==='"'?Di:zi):c===Di||c===zi?c=qe:c===$i||c===Ii?c=gn:(c=qe,u=void 0);const g=c===qe&&p[h+1].startsWith("/>")?" ":"";l+=c===gn?v+Wa:_>=0?(d.push(x),v.slice(0,_)+Hi+v.slice(_)+De+g):v+De+(_===-2?h:g)}return[Yi(p,l+(p[i]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),d]};class kn{constructor({strings:a,_$litType$:i},d){let u;this.parts=[];let l=0,c=0;const h=a.length-1,v=this.parts,[x,A]=Va(a,i);if(this.el=kn.createElement(x,d),We.currentNode=this.el.content,i===2||i===3){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(u=We.nextNode())!==null&&v.length<h;){if(u.nodeType===1){if(u.hasAttributes())for(const _ of u.getAttributeNames())if(_.endsWith(Hi)){const E=A[c++],g=u.getAttribute(_).split(De),C=/([.?@])?(.*)/.exec(E);v.push({type:1,index:l,name:C[2],strings:g,ctor:C[1]==="."?Ga:C[1]==="?"?Xa:C[1]==="@"?Ja:ar}),u.removeAttribute(_)}else _.startsWith(De)&&(v.push({type:6,index:l}),u.removeAttribute(_));if(Vi.test(u.tagName)){const _=u.textContent.split(De),E=_.length-1;if(E>0){u.textContent=tr?tr.emptyScript:"";for(let g=0;g<E;g++)u.append(_[g],_n()),We.nextNode(),v.push({type:2,index:++l});u.append(_[E],_n())}}}else if(u.nodeType===8)if(u.data===Zi)v.push({type:2,index:l});else{let _=-1;for(;(_=u.data.indexOf(De,_+1))!==-1;)v.push({type:7,index:l}),_+=De.length-1}l++}}static createElement(a,i){const d=He.createElement("template");return d.innerHTML=a,d}}function on(p,a,i=p,d){if(a===Ze)return a;let u=d!==void 0?i._$Co?.[d]:i._$Cl;const l=xn(a)?void 0:a._$litDirective$;return u?.constructor!==l&&(u?._$AO?.(!1),l===void 0?u=void 0:(u=new l(p),u._$AT(p,i,d)),d!==void 0?(i._$Co??=[])[d]=u:i._$Cl=u),u!==void 0&&(a=on(p,u._$AS(p,a.values),u,d)),a}class Ya{constructor(a,i){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){const{el:{content:i},parts:d}=this._$AD,u=(a?.creationScope??He).importNode(i,!0);We.currentNode=u;let l=We.nextNode(),c=0,h=0,v=d[0];for(;v!==void 0;){if(c===v.index){let x;v.type===2?x=new Cn(l,l.nextSibling,this,a):v.type===1?x=new v.ctor(l,v.name,v.strings,this,a):v.type===6&&(x=new Qa(l,this,a)),this._$AV.push(x),v=d[++h]}c!==v?.index&&(l=We.nextNode(),c++)}return We.currentNode=He,u}p(a){let i=0;for(const d of this._$AV)d!==void 0&&(d.strings!==void 0?(d._$AI(a,d,i),i+=d.strings.length-2):d._$AI(a[i])),i++}}class Cn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(a,i,d,u){this.type=2,this._$AH=Xt,this._$AN=void 0,this._$AA=a,this._$AB=i,this._$AM=d,this.options=u,this._$Cv=u?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&a?.nodeType===11&&(a=i.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,i=this){a=on(this,a,i),xn(a)?a===Xt||a==null||a===""?(this._$AH!==Xt&&this._$AR(),this._$AH=Xt):a!==this._$AH&&a!==Ze&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):Ha(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==Xt&&xn(this._$AH)?this._$AA.nextSibling.data=a:this.T(He.createTextNode(a)),this._$AH=a}$(a){const{values:i,_$litType$:d}=a,u=typeof d=="number"?this._$AC(a):(d.el===void 0&&(d.el=kn.createElement(Yi(d.h,d.h[0]),this.options)),d);if(this._$AH?._$AD===u)this._$AH.p(i);else{const l=new Ya(u,this),c=l.u(this.options);l.p(i),this.T(c),this._$AH=l}}_$AC(a){let i=Bi.get(a.strings);return i===void 0&&Bi.set(a.strings,i=new kn(a)),i}k(a){Hr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let d,u=0;for(const l of a)u===i.length?i.push(d=new Cn(this.O(_n()),this.O(_n()),this,this.options)):d=i[u],d._$AI(l),u++;u<i.length&&(this._$AR(d&&d._$AB.nextSibling,u),i.length=u)}_$AR(a=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);a!==this._$AB;){const d=a.nextSibling;a.remove(),a=d}}setConnected(a){this._$AM===void 0&&(this._$Cv=a,this._$AP?.(a))}}class ar{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,i,d,u,l){this.type=1,this._$AH=Xt,this._$AN=void 0,this.element=a,this.name=i,this._$AM=u,this.options=l,d.length>2||d[0]!==""||d[1]!==""?(this._$AH=Array(d.length-1).fill(new String),this.strings=d):this._$AH=Xt}_$AI(a,i=this,d,u){const l=this.strings;let c=!1;if(l===void 0)a=on(this,a,i,0),c=!xn(a)||a!==this._$AH&&a!==Ze,c&&(this._$AH=a);else{const h=a;let v,x;for(a=l[0],v=0;v<l.length-1;v++)x=on(this,h[d+v],i,v),x===Ze&&(x=this._$AH[v]),c||=!xn(x)||x!==this._$AH[v],x===Xt?a=Xt:a!==Xt&&(a+=(x??"")+l[v+1]),this._$AH[v]=x}c&&!u&&this.j(a)}j(a){a===Xt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}}class Ga extends ar{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===Xt?void 0:a}}class Xa extends ar{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==Xt)}}class Ja extends ar{constructor(a,i,d,u,l){super(a,i,d,u,l),this.type=5}_$AI(a,i=this){if((a=on(this,a,i,0)??Xt)===Ze)return;const d=this._$AH,u=a===Xt&&d!==Xt||a.capture!==d.capture||a.once!==d.once||a.passive!==d.passive,l=a!==Xt&&(d===Xt||u);u&&this.element.removeEventListener(this.name,this,d),l&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}}class Qa{constructor(a,i,d){this.element=a,this.type=6,this._$AN=void 0,this._$AM=i,this.options=d}get _$AU(){return this._$AM._$AU}_$AI(a){on(this,a)}}const to=Wr.litHtmlPolyfillSupport;to?.(kn,Cn),(Wr.litHtmlVersions??=[]).push("3.3.1");const eo=(p,a,i)=>{const d=i?.renderBefore??a;let u=d._$litPart$;if(u===void 0){const l=i?.renderBefore??null;d._$litPart$=u=new Cn(a.insertBefore(_n(),l),l,void 0,i??{})}return u._$AI(p),u};const Zr=globalThis;let Be=class extends an{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const a=super.createRenderRoot();return this.renderOptions.renderBefore??=a.firstChild,a}update(a){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this._$Do=eo(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ze}};Be._$litElement$=!0,Be.finalized=!0,Zr.litElementHydrateSupport?.({LitElement:Be});const no=Zr.litElementPolyfillSupport;no?.({LitElement:Be});(Zr.litElementVersions??=[]).push("4.2.1");const or=p=>(a,i)=>{i!==void 0?i.addInitializer((()=>{customElements.define(p,a)})):customElements.define(p,a)};const ro={attribute:!0,type:String,converter:Qn,reflect:!1,hasChanged:qr},io=(p=ro,a,i)=>{const{kind:d,metadata:u}=i;let l=globalThis.litPropertyMetadata.get(u);if(l===void 0&&globalThis.litPropertyMetadata.set(u,l=new Map),d==="setter"&&((p=Object.create(p)).wrapped=!0),l.set(i.name,p),d==="accessor"){const{name:c}=i;return{set(h){const v=a.get.call(this);a.set.call(this,h),this.requestUpdate(c,v,p)},init(h){return h!==void 0&&this.C(c,void 0,p,h),h}}}if(d==="setter"){const{name:c}=i;return function(h){const v=this[c];a.call(this,h),this.requestUpdate(c,v,p)}}throw Error("Unsupported decorator location: "+d)};function sr(p){return(a,i)=>typeof i=="object"?io(p,a,i):((d,u,l)=>{const c=u.hasOwnProperty(l);return u.constructor.createProperty(l,d),c?Object.getOwnPropertyDescriptor(u,l):void 0})(p,a,i)}function Jt(p){return sr({...p,state:!0,attribute:!1})}const ao=(p,a,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof a!="object"&&Object.defineProperty(p,a,i),i);function oo(p,a){return(i,d,u)=>{const l=c=>c.renderRoot?.querySelector(p)??null;return ao(i,d,{get(){return l(this)}})}}const so={CHILD:2},lo=p=>(...a)=>({_$litDirective$:p,values:a});class uo{constructor(a){}get _$AU(){return this._$AM._$AU}_$AT(a,i,d){this._$Ct=a,this._$AM=i,this._$Ci=d}_$AS(a,i){return this.update(a,i)}update(a,i){return this.render(...i)}}class Nr extends uo{constructor(a){if(super(a),this.it=Xt,a.type!==so.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(a){if(a===Xt||a==null)return this._t=void 0,this.it=a;if(a===Ze)return a;if(typeof a!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(a===this.it)return this._t;this.it=a;const i=[a];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Nr.directiveName="unsafeHTML",Nr.resultType=1;const ue=lo(Nr);class co{constructor(){this.stream=null}async requestPermission(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("MediaDevices API not supported in this browser");try{return this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1,sampleRate:48e3,channelCount:1}}),this.stream}catch(a){throw a instanceof Error?new Error(`Microphone access denied: ${a.message}`):new Error("Microphone access denied")}}getStream(){return this.stream}release(){this.stream&&(this.stream.getTracks().forEach(a=>a.stop()),this.stream=null)}isActive(){return this.stream!==null&&this.stream.active}}class ho{constructor(){this.mediaRecorder=null,this.chunks=[]}async initialize(a){if(!window.MediaRecorder)throw new Error("MediaRecorder API not supported in this browser");const i=this.getSupportedMimeType();if(!i)throw new Error("No supported audio MIME type found");this.mediaRecorder=new MediaRecorder(a,{mimeType:i,audioBitsPerSecond:128e3}),this.mediaRecorder.ondataavailable=d=>{d.data.size>0&&(this.chunks.push(d.data),this.onDataAvailableCallback?.(d.data))},this.mediaRecorder.onstop=()=>{this.onStateChangeCallback?.("inactive")},this.mediaRecorder.onstart=()=>{this.onStateChangeCallback?.("recording")},this.mediaRecorder.onpause=()=>{this.onStateChangeCallback?.("paused")},this.mediaRecorder.onresume=()=>{this.onStateChangeCallback?.("recording")}}getSupportedMimeType(){return["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/mp4"].find(i=>MediaRecorder.isTypeSupported(i))||null}start(a=0){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");this.mediaRecorder.state!=="recording"&&(this.chunks=[],this.mediaRecorder.start(a))}async stop(){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");return this.mediaRecorder.state==="inactive"?new Blob(this.chunks,{type:this.mediaRecorder.mimeType}):new Promise(a=>{this.mediaRecorder.onstop=()=>{const i=new Blob(this.chunks,{type:this.mediaRecorder.mimeType});this.onStateChangeCallback?.("inactive"),a(i)},this.mediaRecorder.stop()})}pause(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.pause()}resume(){this.mediaRecorder?.state==="paused"&&this.mediaRecorder.resume()}getState(){return this.mediaRecorder?.state||"inactive"}getMimeType(){return this.mediaRecorder?.mimeType||""}onDataAvailable(a){this.onDataAvailableCallback=a}onStateChange(a){this.onStateChangeCallback=a}release(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.stop(),this.mediaRecorder=null,this.chunks=[]}}const fo="modulepreload",po=function(p){return"/aidio/"+p},ji={},mo=function(a,i,d){let u=Promise.resolve();if(i&&i.length>0){let x=function(A){return Promise.all(A.map(_=>Promise.resolve(_).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};var c=x;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),v=h?.nonce||h?.getAttribute("nonce");u=x(i.map(A=>{if(A=po(A),A in ji)return;ji[A]=!0;const _=A.endsWith(".css"),E=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${A}"]${E}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":fo,_||(g.as="script"),g.crossOrigin="",g.href=A,v&&g.setAttribute("nonce",v),document.head.appendChild(g),_)return new Promise((C,y)=>{g.addEventListener("load",C),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${A}`)))})}))}function l(h){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=h,window.dispatchEvent(v),!v.defaultPrevented)throw h}return u.then(h=>{for(const v of h||[])v.status==="rejected"&&l(v.reason);return a().catch(l)})};var Se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gi(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Xn={exports:{}},vo=Xn.exports,Mi;function go(){return Mi||(Mi=1,(function(p,a){(function(i,d){p.exports=d()})(vo,function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])})(t,e)},d=function(){return(d=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function u(t,e,n){for(var r,o=0,f=e.length;o<f;o++)!r&&o in e||((r=r||Array.prototype.slice.call(e,0,o))[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}var l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Se,c=Object.keys,h=Array.isArray;function v(t,e){return typeof e!="object"||c(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||l.Promise||(l.Promise=Promise);var x=Object.getPrototypeOf,A={}.hasOwnProperty;function _(t,e){return A.call(t,e)}function E(t,e){typeof e=="function"&&(e=e(x(t))),(typeof Reflect>"u"?c:Reflect.ownKeys)(e).forEach(function(n){C(t,n,e[n])})}var g=Object.defineProperty;function C(t,e,n,r){g(t,e,v(n&&_(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function y(t){return{from:function(e){return t.prototype=Object.create(e.prototype),C(t.prototype,"constructor",t),{extend:E.bind(null,t.prototype)}}}}var S=Object.getOwnPropertyDescriptor,w=[].slice;function R(t,e,n){return w.call(t,e,n)}function B(t,e){return e(t)}function W(t){if(!t)throw new Error("Assertion Failed")}function K(t){l.setImmediate?setImmediate(t):setTimeout(t,0)}function nt(t,e){if(typeof e=="string"&&_(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,o=e.length;r<o;++r){var f=nt(t,e[r]);n.push(f)}return n}var b=e.indexOf(".");if(b!==-1){var P=t[e.substr(0,b)];return P==null?void 0:nt(P,e.substr(b+1))}}function X(t,e,n){if(t&&e!==void 0&&!("isFrozen"in Object&&Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){W(typeof n!="string"&&"length"in n);for(var r=0,o=e.length;r<o;++r)X(t,e[r],n[r])}else{var f,b,P=e.indexOf(".");P!==-1?(f=e.substr(0,P),(b=e.substr(P+1))===""?n===void 0?h(t)&&!isNaN(parseInt(f))?t.splice(f,1):delete t[f]:t[f]=n:X(P=!(P=t[f])||!_(t,f)?t[f]={}:P,b,n)):n===void 0?h(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function ut(t){var e,n={};for(e in t)_(t,e)&&(n[e]=t[e]);return n}var tt=[].concat;function pt(t){return tt.apply([],t)}var At="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(pt([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(t){return l[t]}),Pt=new Set(At.map(function(t){return l[t]})),$=null;function Q(t){return $=new WeakMap,t=(function e(n){if(!n||typeof n!="object")return n;var r=$.get(n);if(r)return r;if(h(n)){r=[],$.set(n,r);for(var o=0,f=n.length;o<f;++o)r.push(e(n[o]))}else if(Pt.has(n.constructor))r=n;else{var b,P=x(n);for(b in r=P===Object.prototype?{}:Object.create(P),$.set(n,r),n)_(n,b)&&(r[b]=e(n[b]))}return r})(t),$=null,t}var m={}.toString;function it(t){return m.call(t).slice(8,-1)}var Rt=typeof Symbol<"u"?Symbol.iterator:"@@iterator",lt=typeof Rt=="symbol"?function(t){var e;return t!=null&&(e=t[Rt])&&e.apply(t)}:function(){return null};function Tt(t,e){return e=t.indexOf(e),0<=e&&t.splice(e,1),0<=e}var st={};function Ot(t){var e,n,r,o;if(arguments.length===1){if(h(t))return t.slice();if(this===st&&typeof t=="string")return[t];if(o=lt(t)){for(n=[];!(r=o.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)!="number")return[t];for(n=new Array(e);e--;)n[e]=t[e];return n}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}var Y=typeof Symbol<"u"?function(t){return t[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},dt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ve=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(dt),V={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Et(t,e){this.name=t,this.message=e}function xt(t,e){return t+". Errors: "+Object.keys(e).map(function(n){return e[n].toString()}).filter(function(n,r,o){return o.indexOf(n)===r}).join(`
`)}function gt(t,e,n,r){this.failures=e,this.failedKeys=r,this.successCount=n,this.message=xt(t,e)}function Lt(t,e){this.name="BulkError",this.failures=Object.keys(e).map(function(n){return e[n]}),this.failuresByPos=e,this.message=xt(t,this.failures)}y(Et).from(Error).extend({toString:function(){return this.name+": "+this.message}}),y(gt).from(Et),y(Lt).from(Et);var Gt=ve.reduce(function(t,e){return t[e]=e+"Error",t},{}),Mt=Et,mt=ve.reduce(function(t,e){var n=e+"Error";function r(o,f){this.name=n,o?typeof o=="string"?(this.message="".concat(o).concat(f?`
 `+f:""),this.inner=f||null):typeof o=="object"&&(this.message="".concat(o.name," ").concat(o.message),this.inner=o):(this.message=V[e]||n,this.inner=null)}return y(r).from(Mt),t[e]=r,t},{});mt.Syntax=SyntaxError,mt.Type=TypeError,mt.Range=RangeError;var Zt=dt.reduce(function(t,e){return t[e+"Error"]=mt[e],t},{}),Kt=ve.reduce(function(t,e){return["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=mt[e]),t},{});function Dt(){}function re(t){return t}function s(t,e){return t==null||t===re?e:function(n){return e(t(n))}}function et(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function G(t,e){return t===Dt?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,o=this.onerror;this.onsuccess=null,this.onerror=null;var f=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?et(r,this.onsuccess):r),o&&(this.onerror=this.onerror?et(o,this.onerror):o),f!==void 0?f:n}}function O(t,e){return t===Dt?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?et(n,this.onsuccess):n),r&&(this.onerror=this.onerror?et(r,this.onerror):r)}}function k(t,e){return t===Dt?e:function(n){var r=t.apply(this,arguments);v(n,r);var o=this.onsuccess,f=this.onerror;return this.onsuccess=null,this.onerror=null,n=e.apply(this,arguments),o&&(this.onsuccess=this.onsuccess?et(o,this.onsuccess):o),f&&(this.onerror=this.onerror?et(f,this.onerror):f),r===void 0?n===void 0?void 0:n:v(r,n)}}function N(t,e){return t===Dt?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ot(t,e){return t===Dt?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,o=arguments.length,f=new Array(o);o--;)f[o]=arguments[o];return n.then(function(){return e.apply(r,f)})}return e.apply(this,arguments)}}Kt.ModifyError=gt,Kt.DexieError=Et,Kt.BulkError=Lt;var at=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function H(t){at=t}var ct={},kt=100,At=typeof Promise>"u"?[]:(function(){var t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,x(t),t];var e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,x(e),t]})(),dt=At[0],ve=At[1],At=At[2],ve=ve&&ve.then,Nt=dt&&dt.constructor,Bt=!!At,te=function(t,e){Ae.push([t,e]),ce&&(queueMicrotask(ha),ce=!1)},we=!0,ce=!0,de=[],qt=[],Ce=re,me={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Dt,pgp:!1,env:{},finalize:Dt},St=me,Ae=[],_e=0,Ve=[];function _t(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var e=this._PSD=St;if(typeof t!="function"){if(t!==ct)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Oe(this,this._value))}this._state=null,this._value=null,++e.ref,(function n(r,o){try{o(function(f){if(r._state===null){if(f===r)throw new TypeError("A promise cannot be resolved with itself.");var b=r._lib&&Ge();f&&typeof f.then=="function"?n(r,function(P,I){f instanceof _t?f._then(P,I):f.then(P,I)}):(r._state=!0,r._value=f,Yr(r)),b&&Xe()}},Oe.bind(null,r))}catch(f){Oe(r,f)}})(this,t)}var Ye={get:function(){var t=St,e=Pn;function n(r,o){var f=this,b=!t.global&&(t!==St||e!==Pn),P=b&&!Re(),I=new _t(function(z,F){lr(f,new Ee(Xr(r,t,b,P),Xr(o,t,b,P),z,F,t))});return this._consoleTask&&(I._consoleTask=this._consoleTask),I}return n.prototype=ct,n},set:function(t){C(this,"then",t&&t.prototype===ct?Ye:{get:function(){return t},set:Ye.set})}};function Ee(t,e,n,r,o){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=o}function Oe(t,e){var n,r;qt.push(e),t._state===null&&(n=t._lib&&Ge(),e=Ce(e),t._state=!1,t._value=e,r=t,de.some(function(o){return o._value===r._value})||de.push(r),Yr(t),n&&Xe())}function Yr(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)lr(t,e[n]);var o=t._PSD;--o.ref||o.finalize(),_e===0&&(++_e,te(function(){--_e==0&&ur()},[]))}function lr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++_e,te(ca,[n,t,e])}else t._listeners.push(e)}function ca(t,e,n){try{var r,o=e._value;!e._state&&qt.length&&(qt=[]),r=at&&e._consoleTask?e._consoleTask.run(function(){return t(o)}):t(o),e._state||qt.indexOf(o)!==-1||(function(f){for(var b=de.length;b;)if(de[--b]._value===f._value)return de.splice(b,1)})(e),n.resolve(r)}catch(f){n.reject(f)}finally{--_e==0&&ur(),--n.psd.ref||n.psd.finalize()}}function ha(){Me(me,function(){Ge()&&Xe()})}function Ge(){var t=we;return ce=we=!1,t}function Xe(){var t,e,n;do for(;0<Ae.length;)for(t=Ae,Ae=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(0<Ae.length);ce=we=!0}function ur(){var t=de;de=[],t.forEach(function(r){r._PSD.onunhandled.call(null,r._value,r)});for(var e=Ve.slice(0),n=e.length;n;)e[--n]()}function An(t){return new _t(ct,!1,t)}function Ht(t,e){var n=St;return function(){var r=Ge(),o=St;try{return Te(n,!0),t.apply(this,arguments)}catch(f){e&&e(f)}finally{Te(o,!1),r&&Xe()}}}E(_t.prototype,{then:Ye,_then:function(t,e){lr(this,new Ee(null,null,t,e,St))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=t,n=arguments[1];return typeof e=="function"?this.then(null,function(r){return(r instanceof e?n:An)(r)}):this.then(null,function(r){return(r&&r.name===e?n:An)(r)})},finally:function(t){return this.then(function(e){return _t.resolve(t()).then(function(){return e})},function(e){return _t.resolve(t()).then(function(){return An(e)})})},timeout:function(t,e){var n=this;return t<1/0?new _t(function(r,o){var f=setTimeout(function(){return o(new mt.Timeout(e))},t);n.then(r,o).finally(clearTimeout.bind(null,f))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&C(_t.prototype,Symbol.toStringTag,"Dexie.Promise"),me.env=Gr(),E(_t,{all:function(){var t=Ot.apply(null,arguments).map(Rn);return new _t(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach(function(o,f){return _t.resolve(o).then(function(b){t[f]=b,--r||e(t)},n)})})},resolve:function(t){return t instanceof _t?t:t&&typeof t.then=="function"?new _t(function(e,n){t.then(e,n)}):new _t(ct,!0,t)},reject:An,race:function(){var t=Ot.apply(null,arguments).map(Rn);return new _t(function(e,n){t.map(function(r){return _t.resolve(r).then(e,n)})})},PSD:{get:function(){return St},set:function(t){return St=t}},totalEchoes:{get:function(){return Pn}},newPSD:Pe,usePSD:Me,scheduler:{get:function(){return te},set:function(t){te=t}},rejectionMapper:{get:function(){return Ce},set:function(t){Ce=t}},follow:function(t,e){return new _t(function(n,r){return Pe(function(o,f){var b=St;b.unhandleds=[],b.onunhandled=f,b.finalize=et(function(){var P,I=this;P=function(){I.unhandleds.length===0?o():f(I.unhandleds[0])},Ve.push(function z(){P(),Ve.splice(Ve.indexOf(z),1)}),++_e,te(function(){--_e==0&&ur()},[])},b.finalize),t()},e,n,r)})}}),Nt&&(Nt.allSettled&&C(_t,"allSettled",function(){var t=Ot.apply(null,arguments).map(Rn);return new _t(function(e){t.length===0&&e([]);var n=t.length,r=new Array(n);t.forEach(function(o,f){return _t.resolve(o).then(function(b){return r[f]={status:"fulfilled",value:b}},function(b){return r[f]={status:"rejected",reason:b}}).then(function(){return--n||e(r)})})})}),Nt.any&&typeof AggregateError<"u"&&C(_t,"any",function(){var t=Ot.apply(null,arguments).map(Rn);return new _t(function(e,n){t.length===0&&n(new AggregateError([]));var r=t.length,o=new Array(r);t.forEach(function(f,b){return _t.resolve(f).then(function(P){return e(P)},function(P){o[b]=P,--r||n(new AggregateError(o))})})})}),Nt.withResolvers&&(_t.withResolvers=Nt.withResolvers));var ee={awaits:0,echoes:0,id:0},da=0,En=[],On=0,Pn=0,fa=0;function Pe(t,e,n,r){var o=St,f=Object.create(o);return f.parent=o,f.ref=0,f.global=!1,f.id=++fa,me.env,f.env=Bt?{Promise:_t,PromiseProp:{value:_t,configurable:!0,writable:!0},all:_t.all,race:_t.race,allSettled:_t.allSettled,any:_t.any,resolve:_t.resolve,reject:_t.reject}:{},e&&v(f,e),++o.ref,f.finalize=function(){--this.parent.ref||this.parent.finalize()},r=Me(f,t,n,r),f.ref===0&&f.finalize(),r}function Je(){return ee.id||(ee.id=++da),++ee.awaits,ee.echoes+=kt,ee.id}function Re(){return!!ee.awaits&&(--ee.awaits==0&&(ee.id=0),ee.echoes=ee.awaits*kt,!0)}function Rn(t){return ee.echoes&&t&&t.constructor===Nt?(Je(),t.then(function(e){return Re(),e},function(e){return Re(),Vt(e)})):t}function pa(){var t=En[En.length-1];En.pop(),Te(t,!1)}function Te(t,e){var n,r=St;(e?!ee.echoes||On++&&t===St:!On||--On&&t===St)||queueMicrotask(e?function(o){++Pn,ee.echoes&&--ee.echoes!=0||(ee.echoes=ee.awaits=ee.id=0),En.push(St),Te(o,!0)}.bind(null,t):pa),t!==St&&(St=t,r===me&&(me.env=Gr()),Bt&&(n=me.env.Promise,e=t.env,(r.global||t.global)&&(Object.defineProperty(l,"Promise",e.PromiseProp),n.all=e.all,n.race=e.race,n.resolve=e.resolve,n.reject=e.reject,e.allSettled&&(n.allSettled=e.allSettled),e.any&&(n.any=e.any))))}function Gr(){var t=l.Promise;return Bt?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(l,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject}:{}}function Me(t,e,n,r,o){var f=St;try{return Te(t,!0),e(n,r,o)}finally{Te(f,!1)}}function Xr(t,e,n,r){return typeof t!="function"?t:function(){var o=St;n&&Je(),Te(e,!0);try{return t.apply(this,arguments)}finally{Te(o,!1),r&&queueMicrotask(Re)}}}function cr(t){Promise===Nt&&ee.echoes===0?On===0?t():enqueueNativeMicroTask(t):setTimeout(t,0)}(""+ve).indexOf("[native code]")===-1&&(Je=Re=Dt);var Vt=_t.reject,Fe="￿",xe="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Jr="String expected.",Qe=[],Tn="__dbnames",hr="readonly",dr="readwrite";function Ne(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}var Qr={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function $n(t){return typeof t!="string"||/\./.test(t)?function(e){return e}:function(e){return e[t]===void 0&&t in e&&delete(e=Q(e))[t],e}}function ti(){throw mt.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Ft(t,e){try{var n=ei(t),r=ei(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return e<t?1:t<e?-1:0;case"binary":return(function(o,f){for(var b=o.length,P=f.length,I=b<P?b:P,z=0;z<I;++z)if(o[z]!==f[z])return o[z]<f[z]?-1:1;return b===P?0:b<P?-1:1})(ni(t),ni(e));case"Array":return(function(o,f){for(var b=o.length,P=f.length,I=b<P?b:P,z=0;z<I;++z){var F=Ft(o[z],f[z]);if(F!==0)return F}return b===P?0:b<P?-1:1})(t,e)}}catch{}return NaN}function ei(t){var e=typeof t;return e!="object"?e:ArrayBuffer.isView(t)?"binary":(t=it(t),t==="ArrayBuffer"?"binary":t)}function ni(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function In(t,e,n){var r=t.schema.yProps;return r?(e&&0<n.numFailures&&(e=e.filter(function(o,f){return!n.failures[f]})),Promise.all(r.map(function(o){return o=o.updatesTable,e?t.db.table(o).where("k").anyOf(e).delete():t.db.table(o).clear()})).then(function(){return n})):n}var ln=(ri.prototype.execute=function(t){var e=this["@@propmod"];if(e.add!==void 0){var n=e.add;if(h(n))return u(u([],h(t)?t:[],!0),n).sort();if(typeof n=="number")return(Number(t)||0)+n;if(typeof n=="bigint")try{return BigInt(t)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(e.remove!==void 0){var r=e.remove;if(h(r))return h(t)?t.filter(function(o){return!r.includes(o)}).sort():[];if(typeof r=="number")return Number(t)-r;if(typeof r=="bigint")try{return BigInt(t)-r}catch{return BigInt(0)-r}throw new TypeError("Invalid subtrahend ".concat(r))}return n=(n=e.replacePrefix)===null||n===void 0?void 0:n[0],n&&typeof t=="string"&&t.startsWith(n)?e.replacePrefix[1]+t.substring(n.length):t},ri);function ri(t){this["@@propmod"]=t}function ii(t,e){for(var n=c(e),r=n.length,o=!1,f=0;f<r;++f){var b=n[f],P=e[b],I=nt(t,b);P instanceof ln?(X(t,b,P.execute(I)),o=!0):I!==P&&(X(t,b,P),o=!0)}return o}var ai=(Wt.prototype._trans=function(t,e,n){var r=this._tx||St.trans,o=this.name,f=at&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function b(z,F,T){if(!T.schema[o])throw new mt.NotFound("Table "+o+" not part of transaction");return e(T.idbtrans,T)}var P=Ge();try{var I=r&&r.db._novip===this.db._novip?r===St.trans?r._promise(t,b,n):Pe(function(){return r._promise(t,b,n)},{trans:r,transless:St.transless||St}):(function z(F,T,L,D){if(F.idbdb&&(F._state.openComplete||St.letThrough||F._vip)){var j=F._createTransaction(T,L,F._dbSchema);try{j.create(),F._state.PR1398_maxLoop=3}catch(M){return M.name===Gt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return z(F,T,L,D)})):Vt(M)}return j._promise(T,function(M,U){return Pe(function(){return St.trans=j,D(M,U,j)})}).then(function(M){if(T==="readwrite")try{j.idbtrans.commit()}catch{}return T==="readonly"?M:j._completion.then(function(){return M})})}if(F._state.openComplete)return Vt(new mt.DatabaseClosed(F._state.dbOpenError));if(!F._state.isBeingOpened){if(!F._state.autoOpen)return Vt(new mt.DatabaseClosed);F.open().catch(Dt)}return F._state.dbReadyPromise.then(function(){return z(F,T,L,D)})})(this.db,t,[this.name],b);return f&&(I._consoleTask=f,I=I.catch(function(z){return console.trace(z),Vt(z)})),I}finally{P&&Xe()}},Wt.prototype.get=function(t,e){var n=this;return t&&t.constructor===Object?this.where(t).first(e):t==null?Vt(new mt.Type("Invalid argument to Table.get()")):this._trans("readonly",function(r){return n.core.get({trans:r,key:t}).then(function(o){return n.hook.reading.fire(o)})}).then(e)},Wt.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(h(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var e=c(t);if(e.length===1)return this.where(e[0]).equals(t[e[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(P){if(P.compound&&e.every(function(z){return 0<=P.keyPath.indexOf(z)})){for(var I=0;I<e.length;++I)if(e.indexOf(P.keyPath[I])===-1)return!1;return!0}return!1}).sort(function(P,I){return P.keyPath.length-I.keyPath.length})[0];if(n&&this.db._maxKey!==Fe){var f=n.keyPath.slice(0,e.length);return this.where(f).equals(f.map(function(I){return t[I]}))}!n&&at&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(e.join("+"),"]"));var r=this.schema.idxByName;function o(P,I){return Ft(P,I)===0}var b=e.reduce(function(T,I){var z=T[0],F=T[1],T=r[I],L=t[I];return[z||T,z||!T?Ne(F,T&&T.multi?function(D){return D=nt(D,I),h(D)&&D.some(function(j){return o(L,j)})}:function(D){return o(L,nt(D,I))}):F]},[null,null]),f=b[0],b=b[1];return f?this.where(f.name).equals(t[f.keyPath]).filter(b):n?this.filter(b):this.where(e).equals("")},Wt.prototype.filter=function(t){return this.toCollection().and(t)},Wt.prototype.count=function(t){return this.toCollection().count(t)},Wt.prototype.offset=function(t){return this.toCollection().offset(t)},Wt.prototype.limit=function(t){return this.toCollection().limit(t)},Wt.prototype.each=function(t){return this.toCollection().each(t)},Wt.prototype.toArray=function(t){return this.toCollection().toArray(t)},Wt.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Wt.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,h(t)?"[".concat(t.join("+"),"]"):t))},Wt.prototype.reverse=function(){return this.toCollection().reverse()},Wt.prototype.mapToClass=function(t){var e,n=this.db,r=this.name;function o(){return e!==null&&e.apply(this,arguments)||this}(this.schema.mappedClass=t).prototype instanceof ti&&((function(I,z){if(typeof z!="function"&&z!==null)throw new TypeError("Class extends value "+String(z)+" is not a constructor or null");function F(){this.constructor=I}i(I,z),I.prototype=z===null?Object.create(z):(F.prototype=z.prototype,new F)})(o,e=t),Object.defineProperty(o.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),o.prototype.table=function(){return r},t=o);for(var f=new Set,b=t.prototype;b;b=x(b))Object.getOwnPropertyNames(b).forEach(function(I){return f.add(I)});function P(I){if(!I)return I;var z,F=Object.create(t.prototype);for(z in I)if(!f.has(z))try{F[z]=I[z]}catch{}return F}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=P,this.hook("reading",P),t},Wt.prototype.defineClass=function(){return this.mapToClass(function(t){v(this,t)})},Wt.prototype.add=function(t,e){var n=this,r=this.schema.primKey,o=r.auto,f=r.keyPath,b=t;return f&&o&&(b=$n(f)(t)),this._trans("readwrite",function(P){return n.core.mutate({trans:P,type:"add",keys:e!=null?[e]:null,values:[b]})}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):P.lastResult}).then(function(P){if(f)try{X(t,f,P)}catch{}return P})},Wt.prototype.upsert=function(t,e){var n=this,r=this.schema.primKey.keyPath;return this._trans("readwrite",function(o){return n.core.get({trans:o,key:t}).then(function(f){var b=f??{};return ii(b,e),r&&X(b,r,t),n.core.mutate({trans:o,type:"put",values:[b],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[e]}}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):!!f})})})},Wt.prototype.update=function(t,e){return typeof t!="object"||h(t)?this.where(":id").equals(t).modify(e):(t=nt(t,this.schema.primKey.keyPath),t===void 0?Vt(new mt.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(t).modify(e))},Wt.prototype.put=function(t,e){var n=this,r=this.schema.primKey,o=r.auto,f=r.keyPath,b=t;return f&&o&&(b=$n(f)(t)),this._trans("readwrite",function(P){return n.core.mutate({trans:P,type:"put",values:[b],keys:e!=null?[e]:null})}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):P.lastResult}).then(function(P){if(f)try{X(t,f,P)}catch{}return P})},Wt.prototype.delete=function(t){var e=this;return this._trans("readwrite",function(n){return e.core.mutate({trans:n,type:"delete",keys:[t]}).then(function(r){return In(e,[t],r)}).then(function(r){return r.numFailures?_t.reject(r.failures[0]):void 0})})},Wt.prototype.clear=function(){var t=this;return this._trans("readwrite",function(e){return t.core.mutate({trans:e,type:"deleteRange",range:Qr}).then(function(n){return In(t,null,n)})}).then(function(e){return e.numFailures?_t.reject(e.failures[0]):void 0})},Wt.prototype.bulkGet=function(t){var e=this;return this._trans("readonly",function(n){return e.core.getMany({keys:t,trans:n}).then(function(r){return r.map(function(o){return e.hook.reading.fire(o)})})})},Wt.prototype.bulkAdd=function(t,e,n){var r=this,o=Array.isArray(e)?e:void 0,f=(n=n||(o?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(b){var z=r.schema.primKey,P=z.auto,z=z.keyPath;if(z&&o)throw new mt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(o&&o.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var I=t.length,z=z&&P?t.map($n(z)):t;return r.core.mutate({trans:b,type:"add",keys:o,values:z,wantResults:f}).then(function(j){var T=j.numFailures,L=j.results,D=j.lastResult,j=j.failures;if(T===0)return f?L:D;throw new Lt("".concat(r.name,".bulkAdd(): ").concat(T," of ").concat(I," operations failed"),j)})})},Wt.prototype.bulkPut=function(t,e,n){var r=this,o=Array.isArray(e)?e:void 0,f=(n=n||(o?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(b){var z=r.schema.primKey,P=z.auto,z=z.keyPath;if(z&&o)throw new mt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(o&&o.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var I=t.length,z=z&&P?t.map($n(z)):t;return r.core.mutate({trans:b,type:"put",keys:o,values:z,wantResults:f}).then(function(j){var T=j.numFailures,L=j.results,D=j.lastResult,j=j.failures;if(T===0)return f?L:D;throw new Lt("".concat(r.name,".bulkPut(): ").concat(T," of ").concat(I," operations failed"),j)})})},Wt.prototype.bulkUpdate=function(t){var e=this,n=this.core,r=t.map(function(b){return b.key}),o=t.map(function(b){return b.changes}),f=[];return this._trans("readwrite",function(b){return n.getMany({trans:b,keys:r,cache:"clone"}).then(function(P){var I=[],z=[];t.forEach(function(T,L){var D=T.key,j=T.changes,M=P[L];if(M){for(var U=0,q=Object.keys(j);U<q.length;U++){var Z=q[U],J=j[Z];if(Z===e.schema.primKey.keyPath){if(Ft(J,D)!==0)throw new mt.Constraint("Cannot update primary key in bulkUpdate()")}else X(M,Z,J)}f.push(L),I.push(D),z.push(M)}});var F=I.length;return n.mutate({trans:b,type:"put",keys:I,values:z,updates:{keys:r,changeSpecs:o}}).then(function(T){var L=T.numFailures,D=T.failures;if(L===0)return F;for(var j=0,M=Object.keys(D);j<M.length;j++){var U,q=M[j],Z=f[Number(q)];Z!=null&&(U=D[q],delete D[q],D[Z]=U)}throw new Lt("".concat(e.name,".bulkUpdate(): ").concat(L," of ").concat(F," operations failed"),D)})})})},Wt.prototype.bulkDelete=function(t){var e=this,n=t.length;return this._trans("readwrite",function(r){return e.core.mutate({trans:r,type:"delete",keys:t}).then(function(o){return In(e,t,o)})}).then(function(b){var o=b.numFailures,f=b.lastResult,b=b.failures;if(o===0)return f;throw new Lt("".concat(e.name,".bulkDelete(): ").concat(o," of ").concat(n," operations failed"),b)})},Wt);function Wt(){}function un(t){function e(b,P){if(P){for(var I=arguments.length,z=new Array(I-1);--I;)z[I-1]=arguments[I];return n[b].subscribe.apply(null,z),t}if(typeof b=="string")return n[b]}var n={};e.addEventType=f;for(var r=1,o=arguments.length;r<o;++r)f(arguments[r]);return e;function f(b,P,I){if(typeof b!="object"){var z;P=P||N;var F={subscribers:[],fire:I=I||Dt,subscribe:function(T){F.subscribers.indexOf(T)===-1&&(F.subscribers.push(T),F.fire=P(F.fire,T))},unsubscribe:function(T){F.subscribers=F.subscribers.filter(function(L){return L!==T}),F.fire=F.subscribers.reduce(P,I)}};return n[b]=e[b]=F}c(z=b).forEach(function(T){var L=z[T];if(h(L))f(T,z[T][0],z[T][1]);else{if(L!=="asap")throw new mt.InvalidArgument("Invalid event config");var D=f(T,re,function(){for(var j=arguments.length,M=new Array(j);j--;)M[j]=arguments[j];D.subscribers.forEach(function(U){K(function(){U.apply(null,M)})})})}})}}function cn(t,e){return y(e).from({prototype:t}),e}function tn(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function fr(t,e){t.filter=Ne(t.filter,e)}function pr(t,e,n){var r=t.replayFilter;t.replayFilter=r?function(){return Ne(r(),e())}:e,t.justLimit=n&&!r}function zn(t,e){if(t.isPrimKey)return e.primaryKey;var n=e.getIndexByKeyPath(t.index);if(!n)throw new mt.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function oi(t,e,n){var r=zn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Dn(t,e,n,r){var o=t.replayFilter?Ne(t.filter,t.replayFilter()):t.filter;if(t.or){var f={},b=function(P,I,z){var F,T;o&&!o(I,z,function(L){return I.stop(L)},function(L){return I.fail(L)})||((T=""+(F=I.primaryKey))=="[object ArrayBuffer]"&&(T=""+new Uint8Array(F)),_(f,T)||(f[T]=!0,e(P,I,z)))};return Promise.all([t.or._iterate(b,n),si(oi(t,r,n),t.algorithm,b,!t.keysOnly&&t.valueMapper)])}return si(oi(t,r,n),Ne(t.algorithm,o),e,!t.keysOnly&&t.valueMapper)}function si(t,e,n,r){var o=Ht(r?function(f,b,P){return n(r(f),b,P)}:n);return t.then(function(f){if(f)return f.start(function(){var b=function(){return f.continue()};e&&!e(f,function(P){return b=P},function(P){f.stop(P),b=Dt},function(P){f.fail(P),b=Dt})||o(f.value,f,function(P){return b=P}),b()})})}var ma=(Ut.prototype._read=function(t,e){var n=this._ctx;return n.error?n.table._trans(null,Vt.bind(null,n.error)):n.table._trans("readonly",t).then(e)},Ut.prototype._write=function(t){var e=this._ctx;return e.error?e.table._trans(null,Vt.bind(null,e.error)):e.table._trans("readwrite",t,"locked")},Ut.prototype._addAlgorithm=function(t){var e=this._ctx;e.algorithm=Ne(e.algorithm,t)},Ut.prototype._iterate=function(t,e){return Dn(this._ctx,t,e,this._ctx.table.core)},Ut.prototype.clone=function(t){var e=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return t&&v(n,t),e._ctx=n,e},Ut.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ut.prototype.each=function(t){var e=this._ctx;return this._read(function(n){return Dn(e,t,n,e.table.core)})},Ut.prototype.count=function(t){var e=this;return this._read(function(n){var r=e._ctx,o=r.table.core;if(tn(r,!0))return o.count({trans:n,query:{index:zn(r,o.schema),range:r.range}}).then(function(b){return Math.min(b,r.limit)});var f=0;return Dn(r,function(){return++f,!1},n,o).then(function(){return f})}).then(t)},Ut.prototype.sortBy=function(t,e){var n=t.split(".").reverse(),r=n[0],o=n.length-1;function f(I,z){return z?f(I[n[z]],z-1):I[r]}var b=this._ctx.dir==="next"?1:-1;function P(I,z){return Ft(f(I,o),f(z,o))*b}return this.toArray(function(I){return I.sort(P)}).then(e)},Ut.prototype.toArray=function(t){var e=this;return this._read(function(n){var r=e._ctx;if(r.dir==="next"&&tn(r,!0)&&0<r.limit){var o=r.valueMapper,f=zn(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:f,range:r.range}}).then(function(P){return P=P.result,o?P.map(o):P})}var b=[];return Dn(r,function(P){return b.push(P)},n,r.table.core).then(function(){return b})},t)},Ut.prototype.offset=function(t){var e=this._ctx;return t<=0||(e.offset+=t,tn(e)?pr(e,function(){var n=t;return function(r,o){return n===0||(n===1?--n:o(function(){r.advance(n),n=0}),!1)}}):pr(e,function(){var n=t;return function(){return--n<0}})),this},Ut.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),pr(this._ctx,function(){var e=t;return function(n,r,o){return--e<=0&&r(o),0<=e}},!0),this},Ut.prototype.until=function(t,e){return fr(this._ctx,function(n,r,o){return!t(n.value)||(r(o),e)}),this},Ut.prototype.first=function(t){return this.limit(1).toArray(function(e){return e[0]}).then(t)},Ut.prototype.last=function(t){return this.reverse().first(t)},Ut.prototype.filter=function(t){var e;return fr(this._ctx,function(n){return t(n.value)}),(e=this._ctx).isMatch=Ne(e.isMatch,t),this},Ut.prototype.and=function(t){return this.filter(t)},Ut.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},Ut.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ut.prototype.desc=function(){return this.reverse()},Ut.prototype.eachKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,r){t(r.key,r)})},Ut.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},Ut.prototype.eachPrimaryKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,r){t(r.primaryKey,r)})},Ut.prototype.keys=function(t){var e=this._ctx;e.keysOnly=!e.isMatch;var n=[];return this.each(function(r,o){n.push(o.key)}).then(function(){return n}).then(t)},Ut.prototype.primaryKeys=function(t){var e=this._ctx;if(e.dir==="next"&&tn(e,!0)&&0<e.limit)return this._read(function(r){var o=zn(e,e.table.core.schema);return e.table.core.query({trans:r,values:!1,limit:e.limit,query:{index:o,range:e.range}})}).then(function(r){return r.result}).then(t);e.keysOnly=!e.isMatch;var n=[];return this.each(function(r,o){n.push(o.primaryKey)}).then(function(){return n}).then(t)},Ut.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},Ut.prototype.firstKey=function(t){return this.limit(1).keys(function(e){return e[0]}).then(t)},Ut.prototype.lastKey=function(t){return this.reverse().firstKey(t)},Ut.prototype.distinct=function(){var t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];if(!t||!t.multi)return this;var e={};return fr(this._ctx,function(o){var r=o.primaryKey.toString(),o=_(e,r);return e[r]=!0,!o}),this},Ut.prototype.modify=function(t){var e=this,n=this._ctx;return this._write(function(r){var o=typeof t=="function"?t:function(M){return ii(M,t)},f=n.table.core,z=f.schema.primaryKey,b=z.outbound,P=z.extractKey,I=200,z=e.db._options.modifyChunkSize;z&&(I=typeof z=="object"?z[f.name]||z["*"]||200:z);function F(M,Z){var q=Z.failures,Z=Z.numFailures;L+=M-Z;for(var J=0,rt=c(q);J<rt.length;J++){var ft=rt[J];T.push(q[ft])}}var T=[],L=0,D=[],j=t===li;return e.clone().primaryKeys().then(function(M){function U(Z){var J=Math.min(I,M.length-Z),rt=M.slice(Z,Z+J);return(j?Promise.resolve([]):f.getMany({trans:r,keys:rt,cache:"immutable"})).then(function(ft){var bt=[],ht=[],vt=b?[]:null,wt=j?rt:[];if(!j)for(var yt=0;yt<J;++yt){var Ct=ft[yt],It={value:Q(Ct),primKey:M[Z+yt]};o.call(It,It.value,It)!==!1&&(It.value==null?wt.push(M[Z+yt]):b||Ft(P(Ct),P(It.value))===0?(ht.push(It.value),b&&vt.push(M[Z+yt])):(wt.push(M[Z+yt]),bt.push(It.value)))}return Promise.resolve(0<bt.length&&f.mutate({trans:r,type:"add",values:bt}).then(function(zt){for(var jt in zt.failures)wt.splice(parseInt(jt),1);F(bt.length,zt)})).then(function(){return(0<ht.length||q&&typeof t=="object")&&f.mutate({trans:r,type:"put",keys:vt,values:ht,criteria:q,changeSpec:typeof t!="function"&&t,isAdditionalChunk:0<Z}).then(function(zt){return F(ht.length,zt)})}).then(function(){return(0<wt.length||q&&j)&&f.mutate({trans:r,type:"delete",keys:wt,criteria:q,isAdditionalChunk:0<Z}).then(function(zt){return In(n.table,wt,zt)}).then(function(zt){return F(wt.length,zt)})}).then(function(){return M.length>Z+J&&U(Z+I)})})}var q=tn(n)&&n.limit===1/0&&(typeof t!="function"||j)&&{index:n.index,range:n.range};return U(0).then(function(){if(0<T.length)throw new gt("Error modifying one or more objects",T,L,D);return M.length})})})},Ut.prototype.delete=function(){var t=this._ctx,e=t.range;return!tn(t)||t.table.schema.yProps||!t.isPrimKey&&e.type!==3?this.modify(li):this._write(function(n){var r=t.table.core.schema.primaryKey,o=e;return t.table.core.count({trans:n,query:{index:r,range:o}}).then(function(f){return t.table.core.mutate({trans:n,type:"deleteRange",range:o}).then(function(I){var P=I.failures,I=I.numFailures;if(I)throw new gt("Could not delete some values",Object.keys(P).map(function(z){return P[z]}),f-I);return f-I})})})},Ut);function Ut(){}var li=function(t,e){return e.value=null};function va(t,e){return t<e?-1:t===e?0:1}function ga(t,e){return e<t?-1:t===e?0:1}function fe(t,e,n){return t=t instanceof ci?new t.Collection(t):t,t._ctx.error=new(n||TypeError)(e),t}function en(t){return new t.Collection(t,function(){return ui("")}).limit(0)}function Bn(t,e,n,r){var o,f,b,P,I,z,F,T=n.length;if(!n.every(function(j){return typeof j=="string"}))return fe(t,Jr);function L(j){o=j==="next"?function(U){return U.toUpperCase()}:function(U){return U.toLowerCase()},f=j==="next"?function(U){return U.toLowerCase()}:function(U){return U.toUpperCase()},b=j==="next"?va:ga;var M=n.map(function(U){return{lower:f(U),upper:o(U)}}).sort(function(U,q){return b(U.lower,q.lower)});P=M.map(function(U){return U.upper}),I=M.map(function(U){return U.lower}),F=(z=j)==="next"?"":r}L("next"),t=new t.Collection(t,function(){return $e(P[0],I[T-1]+r)}),t._ondirectionchange=function(j){L(j)};var D=0;return t._addAlgorithm(function(j,M,U){var q=j.key;if(typeof q!="string")return!1;var Z=f(q);if(e(Z,I,D))return!0;for(var J=null,rt=D;rt<T;++rt){var ft=(function(bt,ht,vt,wt,yt,Ct){for(var It=Math.min(bt.length,wt.length),zt=-1,jt=0;jt<It;++jt){var pe=ht[jt];if(pe!==wt[jt])return yt(bt[jt],vt[jt])<0?bt.substr(0,jt)+vt[jt]+vt.substr(jt+1):yt(bt[jt],wt[jt])<0?bt.substr(0,jt)+wt[jt]+vt.substr(jt+1):0<=zt?bt.substr(0,zt)+ht[zt]+vt.substr(zt+1):null;yt(bt[jt],pe)<0&&(zt=jt)}return It<wt.length&&Ct==="next"?bt+vt.substr(bt.length):It<bt.length&&Ct==="prev"?bt.substr(0,vt.length):zt<0?null:bt.substr(0,zt)+wt[zt]+vt.substr(zt+1)})(q,Z,P[rt],I[rt],b,z);ft===null&&J===null?D=rt+1:(J===null||0<b(J,ft))&&(J=ft)}return M(J!==null?function(){j.continue(J+F)}:U),!1}),t}function $e(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function ui(t){return{type:1,lower:t,upper:t}}var ci=(Object.defineProperty(ne.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ne.prototype.between=function(t,e,n,r){n=n!==!1,r=r===!0;try{return 0<this._cmp(t,e)||this._cmp(t,e)===0&&(n||r)&&(!n||!r)?en(this):new this.Collection(this,function(){return $e(t,e,!n,!r)})}catch{return fe(this,xe)}},ne.prototype.equals=function(t){return t==null?fe(this,xe):new this.Collection(this,function(){return ui(t)})},ne.prototype.above=function(t){return t==null?fe(this,xe):new this.Collection(this,function(){return $e(t,void 0,!0)})},ne.prototype.aboveOrEqual=function(t){return t==null?fe(this,xe):new this.Collection(this,function(){return $e(t,void 0,!1)})},ne.prototype.below=function(t){return t==null?fe(this,xe):new this.Collection(this,function(){return $e(void 0,t,!1,!0)})},ne.prototype.belowOrEqual=function(t){return t==null?fe(this,xe):new this.Collection(this,function(){return $e(void 0,t)})},ne.prototype.startsWith=function(t){return typeof t!="string"?fe(this,Jr):this.between(t,t+Fe,!0,!0)},ne.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):Bn(this,function(e,n){return e.indexOf(n[0])===0},[t],Fe)},ne.prototype.equalsIgnoreCase=function(t){return Bn(this,function(e,n){return e===n[0]},[t],"")},ne.prototype.anyOfIgnoreCase=function(){var t=Ot.apply(st,arguments);return t.length===0?en(this):Bn(this,function(e,n){return n.indexOf(e)!==-1},t,"")},ne.prototype.startsWithAnyOfIgnoreCase=function(){var t=Ot.apply(st,arguments);return t.length===0?en(this):Bn(this,function(e,n){return n.some(function(r){return e.indexOf(r)===0})},t,Fe)},ne.prototype.anyOf=function(){var t=this,e=Ot.apply(st,arguments),n=this._cmp;try{e.sort(n)}catch{return fe(this,xe)}if(e.length===0)return en(this);var r=new this.Collection(this,function(){return $e(e[0],e[e.length-1])});r._ondirectionchange=function(f){n=f==="next"?t._ascending:t._descending,e.sort(n)};var o=0;return r._addAlgorithm(function(f,b,P){for(var I=f.key;0<n(I,e[o]);)if(++o===e.length)return b(P),!1;return n(I,e[o])===0||(b(function(){f.continue(e[o])}),!1)}),r},ne.prototype.notEqual=function(t){return this.inAnyRange([[-1/0,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ne.prototype.noneOf=function(){var t=Ot.apply(st,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return fe(this,xe)}var e=t.reduce(function(n,r){return n?n.concat([[n[n.length-1][1],r]]):[[-1/0,r]]},null);return e.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(e,{includeLowers:!1,includeUppers:!1})},ne.prototype.inAnyRange=function(q,e){var n=this,r=this._cmp,o=this._ascending,f=this._descending,b=this._min,P=this._max;if(q.length===0)return en(this);if(!q.every(function(Z){return Z[0]!==void 0&&Z[1]!==void 0&&o(Z[0],Z[1])<=0}))return fe(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",mt.InvalidArgument);var I=!e||e.includeLowers!==!1,z=e&&e.includeUppers===!0,F,T=o;function L(Z,J){return T(Z[0],J[0])}try{(F=q.reduce(function(Z,J){for(var rt=0,ft=Z.length;rt<ft;++rt){var bt=Z[rt];if(r(J[0],bt[1])<0&&0<r(J[1],bt[0])){bt[0]=b(bt[0],J[0]),bt[1]=P(bt[1],J[1]);break}}return rt===ft&&Z.push(J),Z},[])).sort(L)}catch{return fe(this,xe)}var D=0,j=z?function(Z){return 0<o(Z,F[D][1])}:function(Z){return 0<=o(Z,F[D][1])},M=I?function(Z){return 0<f(Z,F[D][0])}:function(Z){return 0<=f(Z,F[D][0])},U=j,q=new this.Collection(this,function(){return $e(F[0][0],F[F.length-1][1],!I,!z)});return q._ondirectionchange=function(Z){T=Z==="next"?(U=j,o):(U=M,f),F.sort(L)},q._addAlgorithm(function(Z,J,rt){for(var ft,bt=Z.key;U(bt);)if(++D===F.length)return J(rt),!1;return!j(ft=bt)&&!M(ft)||(n._cmp(bt,F[D][1])===0||n._cmp(bt,F[D][0])===0||J(function(){T===o?Z.continue(F[D][0]):Z.continue(F[D][1])}),!1)}),q},ne.prototype.startsWithAnyOf=function(){var t=Ot.apply(st,arguments);return t.every(function(e){return typeof e=="string"})?t.length===0?en(this):this.inAnyRange(t.map(function(e){return[e,e+Fe]})):fe(this,"startsWithAnyOf() only works with strings")},ne);function ne(){}function ye(t){return Ht(function(e){return hn(e),t(e.target.error),!1})}function hn(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}var dn="storagemutated",mr="x-storagemutated-1",Ie=un(null,dn),ya=(be.prototype._lock=function(){return W(!St.global),++this._reculock,this._reculock!==1||St.global||(St.lockOwnerFor=this),this},be.prototype._unlock=function(){if(W(!St.global),--this._reculock==0)for(St.global||(St.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var t=this._blockedFuncs.shift();try{Me(t[1],t[0])}catch{}}return this},be.prototype._locked=function(){return this._reculock&&St.lockOwnerFor!==this},be.prototype.create=function(t){var e=this;if(!this.mode)return this;var n=this.db.idbdb,r=this.db._state.dbOpenError;if(W(!this.idbtrans),!t&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new mt.DatabaseClosed(r);case"MissingAPIError":throw new mt.MissingAPI(r.message,r);default:throw new mt.OpenFailed(r)}if(!this.active)throw new mt.TransactionInactive;return W(this._completion._state===null),(t=this.idbtrans=t||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ht(function(o){hn(o),e._reject(t.error)}),t.onabort=Ht(function(o){hn(o),e.active&&e._reject(new mt.Abort(t.error)),e.active=!1,e.on("abort").fire(o)}),t.oncomplete=Ht(function(){e.active=!1,e._resolve(),"mutatedParts"in t&&Ie.storagemutated.fire(t.mutatedParts)}),this},be.prototype._promise=function(t,e,n){var r=this;if(t==="readwrite"&&this.mode!=="readwrite")return Vt(new mt.ReadOnly("Transaction is readonly"));if(!this.active)return Vt(new mt.TransactionInactive);if(this._locked())return new _t(function(f,b){r._blockedFuncs.push([function(){r._promise(t,e,n).then(f,b)},St])});if(n)return Pe(function(){var f=new _t(function(b,P){r._lock();var I=e(b,P,r);I&&I.then&&I.then(b,P)});return f.finally(function(){return r._unlock()}),f._lib=!0,f});var o=new _t(function(f,b){var P=e(f,b,r);P&&P.then&&P.then(f,b)});return o._lib=!0,o},be.prototype._root=function(){return this.parent?this.parent._root():this},be.prototype.waitFor=function(t){var e,n=this._root(),r=_t.resolve(t);n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return r}):(n._waitingFor=r,n._waitingQueue=[],e=n.idbtrans.objectStore(n.storeNames[0]),(function f(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(e.get(-1/0).onsuccess=f)})());var o=n._waitingFor;return new _t(function(f,b){r.then(function(P){return n._waitingQueue.push(Ht(f.bind(null,P)))},function(P){return n._waitingQueue.push(Ht(b.bind(null,P)))}).finally(function(){n._waitingFor===o&&(n._waitingFor=null)})})},be.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new mt.Abort))},be.prototype.table=function(t){var e=this._memoizedTables||(this._memoizedTables={});if(_(e,t))return e[t];var n=this.schema[t];if(!n)throw new mt.NotFound("Table "+t+" not part of transaction");return n=new this.db.Table(t,n,this),n.core=this.db.core.table(t),e[t]=n},be);function be(){}function vr(t,e,n,r,o,f,b,P){return{name:t,keyPath:e,unique:n,multi:r,auto:o,compound:f,src:(n&&!b?"&":"")+(r?"*":"")+(o?"++":"")+hi(e),type:P}}function hi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function gr(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:(r=function(o){return[o.name,o]},n.reduce(function(o,f,b){return b=r(f,b),b&&(o[b[0]]=b[1]),o},{}))};var r}var fn=function(t){try{return t.only([[]]),fn=function(){return[[]]},[[]]}catch{return fn=function(){return Fe},Fe}};function yr(t){return t==null?function(){}:typeof t=="string"?(e=t).split(".").length===1?function(n){return n[e]}:function(n){return nt(n,e)}:function(n){return nt(n,t)};var e}function di(t){return[].slice.call(t)}var ba=0;function pn(t){return t==null?":id":typeof t=="string"?t:"[".concat(t.join("+"),"]")}function wa(t,e,I){function r(U){if(U.type===3)return null;if(U.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var D=U.lower,j=U.upper,M=U.lowerOpen,U=U.upperOpen;return D===void 0?j===void 0?null:e.upperBound(j,!!U):j===void 0?e.lowerBound(D,!!M):e.bound(D,j,!!M,!!U)}function o(L){var D,j=L.name;return{name:j,schema:L,mutate:function(M){var U=M.trans,q=M.type,Z=M.keys,J=M.values,rt=M.range;return new Promise(function(ft,bt){ft=Ht(ft);var ht=U.objectStore(j),vt=ht.keyPath==null,wt=q==="put"||q==="add";if(!wt&&q!=="delete"&&q!=="deleteRange")throw new Error("Invalid operation type: "+q);var yt,Ct=(Z||J||{length:1}).length;if(Z&&J&&Z.length!==J.length)throw new Error("Given keys array must have same length as given values array.");if(Ct===0)return ft({numFailures:0,failures:{},results:[],lastResult:void 0});function It(he){++pe,hn(he)}var zt=[],jt=[],pe=0;if(q==="deleteRange"){if(rt.type===4)return ft({numFailures:pe,failures:jt,results:[],lastResult:void 0});rt.type===3?zt.push(yt=ht.clear()):zt.push(yt=ht.delete(r(rt)))}else{var vt=wt?vt?[J,Z]:[J,null]:[Z,null],$t=vt[0],se=vt[1];if(wt)for(var le=0;le<Ct;++le)zt.push(yt=se&&se[le]!==void 0?ht[q]($t[le],se[le]):ht[q]($t[le])),yt.onerror=It;else for(le=0;le<Ct;++le)zt.push(yt=ht[q]($t[le])),yt.onerror=It}function Vn(he){he=he.target.result,zt.forEach(function(Ke,Br){return Ke.error!=null&&(jt[Br]=Ke.error)}),ft({numFailures:pe,failures:jt,results:q==="delete"?Z:zt.map(function(Ke){return Ke.result}),lastResult:he})}yt.onerror=function(he){It(he),Vn(he)},yt.onsuccess=Vn})},getMany:function(M){var U=M.trans,q=M.keys;return new Promise(function(Z,J){Z=Ht(Z);for(var rt,ft=U.objectStore(j),bt=q.length,ht=new Array(bt),vt=0,wt=0,yt=function(zt){zt=zt.target,ht[zt._pos]=zt.result,++wt===vt&&Z(ht)},Ct=ye(J),It=0;It<bt;++It)q[It]!=null&&((rt=ft.get(q[It]))._pos=It,rt.onsuccess=yt,rt.onerror=Ct,++vt);vt===0&&Z(ht)})},get:function(M){var U=M.trans,q=M.key;return new Promise(function(Z,J){Z=Ht(Z);var rt=U.objectStore(j).get(q);rt.onsuccess=function(ft){return Z(ft.target.result)},rt.onerror=ye(J)})},query:(D=z,function(M){return new Promise(function(U,q){U=Ht(U);var Z,J,rt,vt=M.trans,ft=M.values,bt=M.limit,yt=M.query,ht=bt===1/0?void 0:bt,wt=yt.index,yt=yt.range,vt=vt.objectStore(j),wt=wt.isPrimaryKey?vt:vt.index(wt.name),yt=r(yt);if(bt===0)return U({result:[]});D?((ht=ft?wt.getAll(yt,ht):wt.getAllKeys(yt,ht)).onsuccess=function(Ct){return U({result:Ct.target.result})},ht.onerror=ye(q)):(Z=0,J=!ft&&"openKeyCursor"in wt?wt.openKeyCursor(yt):wt.openCursor(yt),rt=[],J.onsuccess=function(Ct){var It=J.result;return It?(rt.push(ft?It.value:It.primaryKey),++Z===bt?U({result:rt}):void It.continue()):U({result:rt})},J.onerror=ye(q))})}),openCursor:function(M){var U=M.trans,q=M.values,Z=M.query,J=M.reverse,rt=M.unique;return new Promise(function(ft,bt){ft=Ht(ft);var wt=Z.index,ht=Z.range,vt=U.objectStore(j),vt=wt.isPrimaryKey?vt:vt.index(wt.name),wt=J?rt?"prevunique":"prev":rt?"nextunique":"next",yt=!q&&"openKeyCursor"in vt?vt.openKeyCursor(r(ht),wt):vt.openCursor(r(ht),wt);yt.onerror=ye(bt),yt.onsuccess=Ht(function(Ct){var It,zt,jt,pe,$t=yt.result;$t?($t.___id=++ba,$t.done=!1,It=$t.continue.bind($t),zt=(zt=$t.continuePrimaryKey)&&zt.bind($t),jt=$t.advance.bind($t),pe=function(){throw new Error("Cursor not stopped")},$t.trans=U,$t.stop=$t.continue=$t.continuePrimaryKey=$t.advance=function(){throw new Error("Cursor not started")},$t.fail=Ht(bt),$t.next=function(){var se=this,le=1;return this.start(function(){return le--?se.continue():se.stop()}).then(function(){return se})},$t.start=function(se){function le(){if(yt.result)try{se()}catch(he){$t.fail(he)}else $t.done=!0,$t.start=function(){throw new Error("Cursor behind last entry")},$t.stop()}var Vn=new Promise(function(he,Ke){he=Ht(he),yt.onerror=ye(Ke),$t.fail=Ke,$t.stop=function(Br){$t.stop=$t.continue=$t.continuePrimaryKey=$t.advance=pe,he(Br)}});return yt.onsuccess=Ht(function(he){yt.onsuccess=le,le()}),$t.continue=It,$t.continuePrimaryKey=zt,$t.advance=jt,le(),Vn},ft($t)):ft(null)},bt)})},count:function(M){var U=M.query,q=M.trans,Z=U.index,J=U.range;return new Promise(function(rt,ft){var bt=q.objectStore(j),ht=Z.isPrimaryKey?bt:bt.index(Z.name),bt=r(J),ht=bt?ht.count(bt):ht.count();ht.onsuccess=Ht(function(vt){return rt(vt.target.result)}),ht.onerror=ye(ft)})}}}var f,b,P,F=(b=I,P=di((f=t).objectStoreNames),{schema:{name:f.name,tables:P.map(function(L){return b.objectStore(L)}).map(function(L){var D=L.keyPath,U=L.autoIncrement,j=h(D),M={},U={name:L.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:D==null,compound:j,keyPath:D,autoIncrement:U,unique:!0,extractKey:yr(D)},indexes:di(L.indexNames).map(function(q){return L.index(q)}).map(function(rt){var Z=rt.name,J=rt.unique,ft=rt.multiEntry,rt=rt.keyPath,ft={name:Z,compound:h(rt),keyPath:rt,unique:J,multiEntry:ft,extractKey:yr(rt)};return M[pn(rt)]=ft}),getIndexByKeyPath:function(q){return M[pn(q)]}};return M[":id"]=U.primaryKey,D!=null&&(M[pn(D)]=U.primaryKey),U})},hasGetAll:0<P.length&&"getAll"in b.objectStore(P[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),I=F.schema,z=F.hasGetAll,F=I.tables.map(o),T={};return F.forEach(function(L){return T[L.name]=L}),{stack:"dbcore",transaction:t.transaction.bind(t),table:function(L){if(!T[L])throw new Error("Table '".concat(L,"' not found"));return T[L]},MIN_KEY:-1/0,MAX_KEY:fn(e),schema:I}}function _a(t,e,n,r){var o=n.IDBKeyRange;return n.indexedDB,{dbcore:(r=wa(e,o,r),t.dbcore.reduce(function(f,b){return b=b.create,d(d({},f),b(f))},r))}}function jn(t,r){var n=r.db,r=_a(t._middlewares,n,t._deps,r);t.core=r.dbcore,t.tables.forEach(function(o){var f=o.name;t.core.schema.tables.some(function(b){return b.name===f})&&(o.core=t.core.table(f),t[f]instanceof t.Table&&(t[f].core=o.core))})}function Mn(t,e,n,r){n.forEach(function(o){var f=r[o];e.forEach(function(b){var P=(function I(z,F){return S(z,F)||(z=x(z))&&I(z,F)})(b,o);(!P||"value"in P&&P.value===void 0)&&(b===t.Transaction.prototype||b instanceof t.Transaction?C(b,o,{get:function(){return this.table(o)},set:function(I){g(this,o,{value:I,writable:!0,configurable:!0,enumerable:!0})}}):b[o]=new t.Table(o,f))})})}function br(t,e){e.forEach(function(n){for(var r in n)n[r]instanceof t.Table&&delete n[r]})}function xa(t,e){return t._cfg.version-e._cfg.version}function ka(t,e,n,r){var o=t._dbSchema;n.objectStoreNames.contains("$meta")&&!o.$meta&&(o.$meta=gr("$meta",pi("")[0],[]),t._storeNames.push("$meta"));var f=t._createTransaction("readwrite",t._storeNames,o);f.create(n),f._completion.catch(r);var b=f._reject.bind(f),P=St.transless||St;Pe(function(){return St.trans=f,St.transless=P,e!==0?(jn(t,n),z=e,((I=f).storeNames.includes("$meta")?I.table("$meta").get("version").then(function(F){return F??z}):_t.resolve(z)).then(function(F){return L=F,D=f,j=n,M=[],F=(T=t)._versions,U=T._dbSchema=Nn(0,T.idbdb,j),(F=F.filter(function(q){return q._cfg.version>=L})).length!==0?(F.forEach(function(q){M.push(function(){var Z=U,J=q._cfg.dbschema;Un(T,Z,j),Un(T,J,j),U=T._dbSchema=J;var rt=wr(Z,J);rt.add.forEach(function(wt){_r(j,wt[0],wt[1].primKey,wt[1].indexes)}),rt.change.forEach(function(wt){if(wt.recreate)throw new mt.Upgrade("Not yet support for changing primary key");var yt=j.objectStore(wt.name);wt.add.forEach(function(Ct){return Fn(yt,Ct)}),wt.change.forEach(function(Ct){yt.deleteIndex(Ct.name),Fn(yt,Ct)}),wt.del.forEach(function(Ct){return yt.deleteIndex(Ct)})});var ft=q._cfg.contentUpgrade;if(ft&&q._cfg.version>L){jn(T,j),D._memoizedTables={};var bt=ut(J);rt.del.forEach(function(wt){bt[wt]=Z[wt]}),br(T,[T.Transaction.prototype]),Mn(T,[T.Transaction.prototype],c(bt),bt),D.schema=bt;var ht,vt=Y(ft);return vt&&Je(),rt=_t.follow(function(){var wt;(ht=ft(D))&&vt&&(wt=Re.bind(null,null),ht.then(wt,wt))}),ht&&typeof ht.then=="function"?_t.resolve(ht):rt.then(function(){return ht})}}),M.push(function(Z){var J,rt,ft=q._cfg.dbschema;J=ft,rt=Z,[].slice.call(rt.db.objectStoreNames).forEach(function(bt){return J[bt]==null&&rt.db.deleteObjectStore(bt)}),br(T,[T.Transaction.prototype]),Mn(T,[T.Transaction.prototype],T._storeNames,T._dbSchema),D.schema=T._dbSchema}),M.push(function(Z){T.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(T.idbdb.version/10)===q._cfg.version?(T.idbdb.deleteObjectStore("$meta"),delete T._dbSchema.$meta,T._storeNames=T._storeNames.filter(function(J){return J!=="$meta"})):Z.objectStore("$meta").put(q._cfg.version,"version"))})}),(function q(){return M.length?_t.resolve(M.shift()(D.idbtrans)).then(q):_t.resolve()})().then(function(){fi(U,j)})):_t.resolve();var T,L,D,j,M,U}).catch(b)):(c(o).forEach(function(F){_r(n,F,o[F].primKey,o[F].indexes)}),jn(t,n),void _t.follow(function(){return t.on.populate.fire(f)}).catch(b));var I,z})}function Sa(t,e){fi(t._dbSchema,e),e.db.version%10!=0||e.objectStoreNames.contains("$meta")||e.db.createObjectStore("$meta").add(Math.ceil(e.db.version/10-1),"version");var n=Nn(0,t.idbdb,e);Un(t,t._dbSchema,e);for(var r=0,o=wr(n,t._dbSchema).change;r<o.length;r++){var f=(function(b){if(b.change.length||b.recreate)return console.warn("Unable to patch indexes of table ".concat(b.name," because it has changes on the type of index or primary key.")),{value:void 0};var P=e.objectStore(b.name);b.add.forEach(function(I){at&&console.debug("Dexie upgrade patch: Creating missing index ".concat(b.name,".").concat(I.src)),Fn(P,I)})})(o[r]);if(typeof f=="object")return f.value}}function wr(t,e){var n,r={del:[],add:[],change:[]};for(n in t)e[n]||r.del.push(n);for(n in e){var o=t[n],f=e[n];if(o){var b={name:n,def:f,recreate:!1,del:[],add:[],change:[]};if(""+(o.primKey.keyPath||"")!=""+(f.primKey.keyPath||"")||o.primKey.auto!==f.primKey.auto)b.recreate=!0,r.change.push(b);else{var P=o.idxByName,I=f.idxByName,z=void 0;for(z in P)I[z]||b.del.push(z);for(z in I){var F=P[z],T=I[z];F?F.src!==T.src&&b.change.push(T):b.add.push(T)}(0<b.del.length||0<b.add.length||0<b.change.length)&&r.change.push(b)}}else r.add.push([n,f])}return r}function _r(t,e,n,r){var o=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(function(f){return Fn(o,f)}),o}function fi(t,e){c(t).forEach(function(n){e.db.objectStoreNames.contains(n)||(at&&console.debug("Dexie: Creating missing table",n),_r(e,n,t[n].primKey,t[n].indexes))})}function Fn(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Nn(t,e,n){var r={};return R(e.objectStoreNames,0).forEach(function(o){for(var f=n.objectStore(o),b=vr(hi(z=f.keyPath),z||"",!0,!1,!!f.autoIncrement,z&&typeof z!="string",!0),P=[],I=0;I<f.indexNames.length;++I){var F=f.index(f.indexNames[I]),z=F.keyPath,F=vr(F.name,z,!!F.unique,!!F.multiEntry,!1,z&&typeof z!="string",!1);P.push(F)}r[o]=gr(o,b,P)}),r}function Un(t,e,n){for(var r=n.db.objectStoreNames,o=0;o<r.length;++o){var f=r[o],b=n.objectStore(f);t._hasGetAll="getAll"in b;for(var P=0;P<b.indexNames.length;++P){var I=b.indexNames[P],z=b.index(I).keyPath,F=typeof z=="string"?z:"["+R(z).join("+")+"]";!e[f]||(z=e[f].idxByName[F])&&(z.name=I,delete e[f].idxByName[F],e[f].idxByName[I]=z)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&l.WorkerGlobalScope&&l instanceof l.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}function pi(t){return t.split(",").map(function(e,n){var f=e.split(":"),r=(o=f[1])===null||o===void 0?void 0:o.trim(),o=(e=f[0].trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(o)?o.match(/^\[(.*)\]$/)[1].split("+"):o;return vr(o,f||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),h(f),n===0,r)})}var Ca=(nn.prototype._createTableSchema=gr,nn.prototype._parseIndexSyntax=pi,nn.prototype._parseStoresSpec=function(t,e){var n=this;c(t).forEach(function(r){if(t[r]!==null){var o=n._parseIndexSyntax(t[r]),f=o.shift();if(!f)throw new mt.Schema("Invalid schema for table "+r+": "+t[r]);if(f.unique=!0,f.multi)throw new mt.Schema("Primary key cannot be multiEntry*");o.forEach(function(b){if(b.auto)throw new mt.Schema("Only primary key can be marked as autoIncrement (++)");if(!b.keyPath)throw new mt.Schema("Index must have a name and cannot be an empty string")}),o=n._createTableSchema(r,f,o),e[r]=o}})},nn.prototype.stores=function(n){var e=this.db;this._cfg.storesSource=this._cfg.storesSource?v(this._cfg.storesSource,n):n;var n=e._versions,r={},o={};return n.forEach(function(f){v(r,f._cfg.storesSource),o=f._cfg.dbschema={},f._parseStoresSpec(r,o)}),e._dbSchema=o,br(e,[e._allTables,e,e.Transaction.prototype]),Mn(e,[e._allTables,e,e.Transaction.prototype,this._cfg.tables],c(o),o),e._storeNames=c(o),this},nn.prototype.upgrade=function(t){return this._cfg.contentUpgrade=ot(this._cfg.contentUpgrade||Dt,t),this},nn);function nn(){}function xr(t,e){var n=t._dbNamesDB;return n||(n=t._dbNamesDB=new ke(Tn,{addons:[],indexedDB:t,IDBKeyRange:e})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function kr(t){return t&&typeof t.databases=="function"}function Sr(t){return Pe(function(){return St.letThrough=!0,t()})}function Cr(t){return!("from"in t)}var oe=function(t,e){if(!this){var n=new oe;return t&&"d"in t&&v(n,t),n}v(this,arguments.length?{d:1,from:t,to:1<arguments.length?e:t}:{d:0})};function mn(t,e,n){var r=Ft(e,n);if(!isNaN(r)){if(0<r)throw RangeError();if(Cr(t))return v(t,{from:e,to:n,d:1});var o=t.l,r=t.r;if(Ft(n,t.from)<0)return o?mn(o,e,n):t.l={from:e,to:n,d:1,l:null,r:null},vi(t);if(0<Ft(e,t.to))return r?mn(r,e,n):t.r={from:e,to:n,d:1,l:null,r:null},vi(t);Ft(e,t.from)<0&&(t.from=e,t.l=null,t.d=r?r.d+1:1),0<Ft(n,t.to)&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1),n=!t.r,o&&!t.l&&vn(t,o),r&&n&&vn(t,r)}}function vn(t,e){Cr(e)||(function n(r,I){var f=I.from,b=I.to,P=I.l,I=I.r;mn(r,f,b),P&&n(r,P),I&&n(r,I)})(t,e)}function mi(t,e){var n=Ln(e),r=n.next();if(r.done)return!1;for(var o=r.value,f=Ln(t),b=f.next(o.from),P=b.value;!r.done&&!b.done;){if(Ft(P.from,o.to)<=0&&0<=Ft(P.to,o.from))return!0;Ft(o.from,P.from)<0?o=(r=n.next(P.from)).value:P=(b=f.next(o.from)).value}return!1}function Ln(t){var e=Cr(t)?null:{s:0,n:t};return{next:function(n){for(var r=0<arguments.length;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&Ft(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||Ft(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function vi(t){var e,n,r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),o=1<r?"r":r<-1?"l":"";o&&(e=o=="r"?"l":"r",n=d({},t),r=t[o],t.from=r.from,t.to=r.to,t[o]=r[o],n[o]=r[e],(t[e]=n).d=gi(n)),t.d=gi(t)}function gi(n){var e=n.r,n=n.l;return(e?n?Math.max(e.d,n.d):e.d:n?n.d:0)+1}function Kn(t,e){return c(e).forEach(function(n){t[n]?vn(t[n],e[n]):t[n]=(function r(o){var f,b,P={};for(f in o)_(o,f)&&(b=o[f],P[f]=!b||typeof b!="object"||Pt.has(b.constructor)?b:r(b));return P})(e[n])}),t}function Ar(t,e){return t.all||e.all||Object.keys(t).some(function(n){return e[n]&&mi(e[n],t[n])})}E(oe.prototype,((ve={add:function(t){return vn(this,t),this},addKey:function(t){return mn(this,t,t),this},addKeys:function(t){var e=this;return t.forEach(function(n){return mn(e,n,n)}),this},hasKey:function(t){var e=Ln(this).next(t).value;return e&&Ft(e.from,t)<=0&&0<=Ft(e.to,t)}})[Rt]=function(){return Ln(this)},ve));var Ue={},Er={},Or=!1;function qn(t){Kn(Er,t),Or||(Or=!0,setTimeout(function(){Or=!1,Pr(Er,!(Er={}))},0))}function Pr(t,e){e===void 0&&(e=!1);var n=new Set;if(t.all)for(var r=0,o=Object.values(Ue);r<o.length;r++)yi(b=o[r],t,n,e);else for(var f in t){var b,P=/^idb\:\/\/(.*)\/(.*)\//.exec(f);P&&(f=P[1],P=P[2],(b=Ue["idb://".concat(f,"/").concat(P)])&&yi(b,t,n,e))}n.forEach(function(I){return I()})}function yi(t,e,n,r){for(var o=[],f=0,b=Object.entries(t.queries.query);f<b.length;f++){for(var P=b[f],I=P[0],z=[],F=0,T=P[1];F<T.length;F++){var L=T[F];Ar(e,L.obsSet)?L.subscribers.forEach(function(U){return n.add(U)}):r&&z.push(L)}r&&o.push([I,z])}if(r)for(var D=0,j=o;D<j.length;D++){var M=j[D],I=M[0],z=M[1];t.queries.query[I]=z}}function Aa(t){var e=t._state,n=t._deps.indexedDB;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(function(){return e.dbOpenError?Vt(e.dbOpenError):t});e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;var r=e.openCanceller,o=Math.round(10*t.verno),f=!1;function b(){if(e.openCanceller!==r)throw new mt.DatabaseClosed("db.open() was cancelled")}function P(){return new _t(function(L,D){if(b(),!n)throw new mt.MissingAPI;var j=t.name,M=e.autoSchema||!o?n.open(j):n.open(j,o);if(!M)throw new mt.MissingAPI;M.onerror=ye(D),M.onblocked=Ht(t._fireOnBlocked),M.onupgradeneeded=Ht(function(U){var q;F=M.transaction,e.autoSchema&&!t._options.allowEmptyDB?(M.onerror=hn,F.abort(),M.result.close(),(q=n.deleteDatabase(j)).onsuccess=q.onerror=Ht(function(){D(new mt.NoSuchDatabase("Database ".concat(j," doesnt exist")))})):(F.onerror=ye(D),U=U.oldVersion>Math.pow(2,62)?0:U.oldVersion,T=U<1,t.idbdb=M.result,f&&Sa(t,F),ka(t,U/10,F,D))},D),M.onsuccess=Ht(function(){F=null;var U,q,Z,J,rt,ft=t.idbdb=M.result,bt=R(ft.objectStoreNames);if(0<bt.length)try{var ht=ft.transaction((J=bt).length===1?J[0]:J,"readonly");if(e.autoSchema)q=ft,Z=ht,(U=t).verno=q.version/10,Z=U._dbSchema=Nn(0,q,Z),U._storeNames=R(q.objectStoreNames,0),Mn(U,[U._allTables],c(Z),Z);else if(Un(t,t._dbSchema,ht),((rt=wr(Nn(0,(rt=t).idbdb,ht),rt._dbSchema)).add.length||rt.change.some(function(vt){return vt.add.length||vt.change.length}))&&!f)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),ft.close(),o=ft.version+1,f=!0,L(P());jn(t,ht)}catch{}Qe.push(t),ft.onversionchange=Ht(function(vt){e.vcFired=!0,t.on("versionchange").fire(vt)}),ft.onclose=Ht(function(){t.close({disableAutoOpen:!1})}),T&&(rt=t._deps,ht=j,ft=rt.indexedDB,rt=rt.IDBKeyRange,kr(ft)||ht===Tn||xr(ft,rt).put({name:ht}).catch(Dt)),L()},D)}).catch(function(L){switch(L?.name){case"UnknownError":if(0<e.PR1398_maxLoop)return e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),P();break;case"VersionError":if(0<o)return o=0,P()}return _t.reject(L)})}var I,z=e.dbReadyResolve,F=null,T=!1;return _t.race([r,(typeof navigator>"u"?_t.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(L){function D(){return indexedDB.databases().finally(L)}I=setInterval(D,100),D()}).finally(function(){return clearInterval(I)}):Promise.resolve()).then(P)]).then(function(){return b(),e.onReadyBeingFired=[],_t.resolve(Sr(function(){return t.on.ready.fire(t.vip)})).then(function L(){if(0<e.onReadyBeingFired.length){var D=e.onReadyBeingFired.reduce(ot,Dt);return e.onReadyBeingFired=[],_t.resolve(Sr(function(){return D(t.vip)})).then(L)}})}).finally(function(){e.openCanceller===r&&(e.onReadyBeingFired=null,e.isBeingOpened=!1)}).catch(function(L){e.dbOpenError=L;try{F&&F.abort()}catch{}return r===e.openCanceller&&t._close(),Vt(L)}).finally(function(){e.openComplete=!0,z()}).then(function(){var L;return T&&(L={},t.tables.forEach(function(D){D.schema.indexes.forEach(function(j){j.name&&(L["idb://".concat(t.name,"/").concat(D.name,"/").concat(j.name)]=new oe(-1/0,[[[]]]))}),L["idb://".concat(t.name,"/").concat(D.name,"/")]=L["idb://".concat(t.name,"/").concat(D.name,"/:dels")]=new oe(-1/0,[[[]]])}),Ie(dn).fire(L),Pr(L,!0)),t})}function Rr(t){function e(f){return t.next(f)}var n=o(e),r=o(function(f){return t.throw(f)});function o(f){return function(I){var P=f(I),I=P.value;return P.done?I:I&&typeof I.then=="function"?I.then(n,r):h(I)?Promise.all(I).then(n,r):n(I)}}return o(e)()}function Wn(t,e,n){for(var r=h(t)?t.slice():[t],o=0;o<n;++o)r.push(e);return r}var Ea={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return d(d({},t),{table:function(e){var n=t.table(e),r=n.schema,o={},f=[];function b(T,L,D){var j=pn(T),M=o[j]=o[j]||[],U=T==null?0:typeof T=="string"?1:T.length,q=0<L,q=d(d({},D),{name:q?"".concat(j,"(virtual-from:").concat(D.name,")"):D.name,lowLevelIndex:D,isVirtual:q,keyTail:L,keyLength:U,extractKey:yr(T),unique:!q&&D.unique});return M.push(q),q.isPrimaryKey||f.push(q),1<U&&b(U===2?T[0]:T.slice(0,U-1),L+1,D),M.sort(function(Z,J){return Z.keyTail-J.keyTail}),q}e=b(r.primaryKey.keyPath,0,r.primaryKey),o[":id"]=[e];for(var P=0,I=r.indexes;P<I.length;P++){var z=I[P];b(z.keyPath,0,z)}function F(T){var L,D=T.query.index;return D.isVirtual?d(d({},T),{query:{index:D.lowLevelIndex,range:(L=T.query.range,D=D.keyTail,{type:L.type===1?2:L.type,lower:Wn(L.lower,L.lowerOpen?t.MAX_KEY:t.MIN_KEY,D),lowerOpen:!0,upper:Wn(L.upper,L.upperOpen?t.MIN_KEY:t.MAX_KEY,D),upperOpen:!0})}}):T}return d(d({},n),{schema:d(d({},r),{primaryKey:e,indexes:f,getIndexByKeyPath:function(T){return(T=o[pn(T)])&&T[0]}}),count:function(T){return n.count(F(T))},query:function(T){return n.query(F(T))},openCursor:function(T){var L=T.query.index,D=L.keyTail,j=L.isVirtual,M=L.keyLength;return j?n.openCursor(F(T)).then(function(q){return q&&U(q)}):n.openCursor(T);function U(q){return Object.create(q,{continue:{value:function(Z){Z!=null?q.continue(Wn(Z,T.reverse?t.MAX_KEY:t.MIN_KEY,D)):T.unique?q.continue(q.key.slice(0,M).concat(T.reverse?t.MIN_KEY:t.MAX_KEY,D)):q.continue()}},continuePrimaryKey:{value:function(Z,J){q.continuePrimaryKey(Wn(Z,t.MAX_KEY,D),J)}},primaryKey:{get:function(){return q.primaryKey}},key:{get:function(){var Z=q.key;return M===1?Z[0]:Z.slice(0,M)}},value:{get:function(){return q.value}}})}}})}})}};function Tr(t,e,n,r){return n=n||{},r=r||"",c(t).forEach(function(o){var f,b,P;_(e,o)?(f=t[o],b=e[o],typeof f=="object"&&typeof b=="object"&&f&&b?(P=it(f))!==it(b)?n[r+o]=e[o]:P==="Object"?Tr(f,b,n,r+o+"."):f!==b&&(n[r+o]=e[o]):f!==b&&(n[r+o]=e[o])):n[r+o]=void 0}),c(e).forEach(function(o){_(t,o)||(n[r+o]=e[o])}),n}function $r(t,e){return e.type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}var Oa={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(t){return d(d({},t),{table:function(e){var n=t.table(e),r=n.schema.primaryKey;return d(d({},n),{mutate:function(o){var f=St.trans,b=f.table(e).hook,P=b.deleting,I=b.creating,z=b.updating;switch(o.type){case"add":if(I.fire===Dt)break;return f._promise("readwrite",function(){return F(o)},!0);case"put":if(I.fire===Dt&&z.fire===Dt)break;return f._promise("readwrite",function(){return F(o)},!0);case"delete":if(P.fire===Dt)break;return f._promise("readwrite",function(){return F(o)},!0);case"deleteRange":if(P.fire===Dt)break;return f._promise("readwrite",function(){return(function T(L,D,j){return n.query({trans:L,values:!1,query:{index:r,range:D},limit:j}).then(function(M){var U=M.result;return F({type:"delete",keys:U,trans:L}).then(function(q){return 0<q.numFailures?Promise.reject(q.failures[0]):U.length<j?{failures:[],numFailures:0,lastResult:void 0}:T(L,d(d({},D),{lower:U[U.length-1],lowerOpen:!0}),j)})})})(o.trans,o.range,1e4)},!0)}return n.mutate(o);function F(T){var L,D,j,M=St.trans,U=T.keys||$r(r,T);if(!U)throw new Error("Keys missing");return(T=T.type==="add"||T.type==="put"?d(d({},T),{keys:U}):d({},T)).type!=="delete"&&(T.values=u([],T.values)),T.keys&&(T.keys=u([],T.keys)),L=n,j=U,((D=T).type==="add"?Promise.resolve([]):L.getMany({trans:D.trans,keys:j,cache:"immutable"})).then(function(q){var Z=U.map(function(J,rt){var ft,bt,ht,vt=q[rt],wt={onerror:null,onsuccess:null};return T.type==="delete"?P.fire.call(wt,J,vt,M):T.type==="add"||vt===void 0?(ft=I.fire.call(wt,J,T.values[rt],M),J==null&&ft!=null&&(T.keys[rt]=J=ft,r.outbound||X(T.values[rt],r.keyPath,J))):(ft=Tr(vt,T.values[rt]),(bt=z.fire.call(wt,ft,J,vt,M))&&(ht=T.values[rt],Object.keys(bt).forEach(function(yt){_(ht,yt)?ht[yt]=bt[yt]:X(ht,yt,bt[yt])}))),wt});return n.mutate(T).then(function(J){for(var rt=J.failures,ft=J.results,bt=J.numFailures,J=J.lastResult,ht=0;ht<U.length;++ht){var vt=(ft||U)[ht],wt=Z[ht];vt==null?wt.onerror&&wt.onerror(rt[ht]):wt.onsuccess&&wt.onsuccess(T.type==="put"&&q[ht]?T.values[ht]:vt)}return{failures:rt,results:ft,numFailures:bt,lastResult:J}}).catch(function(J){return Z.forEach(function(rt){return rt.onerror&&rt.onerror(J)}),Promise.reject(J)})})}}})}})}};function bi(t,e,n){try{if(!e||e.keys.length<t.length)return null;for(var r=[],o=0,f=0;o<e.keys.length&&f<t.length;++o)Ft(e.keys[o],t[f])===0&&(r.push(n?Q(e.values[o]):e.values[o]),++f);return r.length===t.length?r:null}catch{return null}}var Pa={stack:"dbcore",level:-1,create:function(t){return{table:function(e){var n=t.table(e);return d(d({},n),{getMany:function(r){if(!r.cache)return n.getMany(r);var o=bi(r.keys,r.trans._cache,r.cache==="clone");return o?_t.resolve(o):n.getMany(r).then(function(f){return r.trans._cache={keys:r.keys,values:r.cache==="clone"?Q(f):f},f})},mutate:function(r){return r.type!=="add"&&(r.trans._cache=null),n.mutate(r)}})}}}};function wi(t,e){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!e.schema.primaryKey.outbound}function _i(t,e){switch(t){case"query":return e.values&&!e.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ra={stack:"dbcore",level:0,name:"Observability",create:function(t){var e=t.schema.name,n=new oe(t.MIN_KEY,t.MAX_KEY);return d(d({},t),{transaction:function(r,o,f){if(St.subscr&&o!=="readonly")throw new mt.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(St.querier));return t.transaction(r,o,f)},table:function(r){var o=t.table(r),f=o.schema,b=f.primaryKey,T=f.indexes,P=b.extractKey,I=b.outbound,z=b.autoIncrement&&T.filter(function(D){return D.compound&&D.keyPath.includes(b.keyPath)}),F=d(d({},o),{mutate:function(D){function j(yt){return yt="idb://".concat(e,"/").concat(r,"/").concat(yt),J[yt]||(J[yt]=new oe)}var M,U,q,Z=D.trans,J=D.mutatedParts||(D.mutatedParts={}),rt=j(""),ft=j(":dels"),bt=D.type,wt=D.type==="deleteRange"?[D.range]:D.type==="delete"?[D.keys]:D.values.length<50?[$r(b,D).filter(function(yt){return yt}),D.values]:[],ht=wt[0],vt=wt[1],wt=D.trans._cache;return h(ht)?(rt.addKeys(ht),(wt=bt==="delete"||ht.length===vt.length?bi(ht,wt):null)||ft.addKeys(ht),(wt||vt)&&(M=j,U=wt,q=vt,f.indexes.forEach(function(yt){var Ct=M(yt.name||"");function It(jt){return jt!=null?yt.extractKey(jt):null}function zt(jt){return yt.multiEntry&&h(jt)?jt.forEach(function(pe){return Ct.addKey(pe)}):Ct.addKey(jt)}(U||q).forEach(function(jt,se){var $t=U&&It(U[se]),se=q&&It(q[se]);Ft($t,se)!==0&&($t!=null&&zt($t),se!=null&&zt(se))})}))):ht?(vt={from:(vt=ht.lower)!==null&&vt!==void 0?vt:t.MIN_KEY,to:(vt=ht.upper)!==null&&vt!==void 0?vt:t.MAX_KEY},ft.add(vt),rt.add(vt)):(rt.add(n),ft.add(n),f.indexes.forEach(function(yt){return j(yt.name).add(n)})),o.mutate(D).then(function(yt){return!ht||D.type!=="add"&&D.type!=="put"||(rt.addKeys(yt.results),z&&z.forEach(function(Ct){for(var It=D.values.map(function($t){return Ct.extractKey($t)}),zt=Ct.keyPath.findIndex(function($t){return $t===b.keyPath}),jt=0,pe=yt.results.length;jt<pe;++jt)It[jt][zt]=yt.results[jt];j(Ct.name).addKeys(It)})),Z.mutatedParts=Kn(Z.mutatedParts||{},J),yt})}}),T=function(j){var M=j.query,j=M.index,M=M.range;return[j,new oe((j=M.lower)!==null&&j!==void 0?j:t.MIN_KEY,(M=M.upper)!==null&&M!==void 0?M:t.MAX_KEY)]},L={get:function(D){return[b,new oe(D.key)]},getMany:function(D){return[b,new oe().addKeys(D.keys)]},count:T,query:T,openCursor:T};return c(L).forEach(function(D){F[D]=function(j){var M=St.subscr,U=!!M,q=wi(St,o)&&_i(D,j)?j.obsSet={}:M;if(U){var Z=function(vt){return vt="idb://".concat(e,"/").concat(r,"/").concat(vt),q[vt]||(q[vt]=new oe)},J=Z(""),rt=Z(":dels"),M=L[D](j),U=M[0],M=M[1];if((D==="query"&&U.isPrimaryKey&&!j.values?rt:Z(U.name||"")).add(M),!U.isPrimaryKey){if(D!=="count"){var ft=D==="query"&&I&&j.values&&o.query(d(d({},j),{values:!1}));return o[D].apply(this,arguments).then(function(vt){if(D==="query"){if(I&&j.values)return ft.then(function(It){return It=It.result,J.addKeys(It),vt});var wt=j.values?vt.result.map(P):vt.result;(j.values?J:rt).addKeys(wt)}else if(D==="openCursor"){var yt=vt,Ct=j.values;return yt&&Object.create(yt,{key:{get:function(){return rt.addKey(yt.primaryKey),yt.key}},primaryKey:{get:function(){var It=yt.primaryKey;return rt.addKey(It),It}},value:{get:function(){return Ct&&J.addKey(yt.primaryKey),yt.value}}})}return vt})}rt.add(n)}}return o[D].apply(this,arguments)}}),F}})}};function xi(t,e,n){if(n.numFailures===0)return e;if(e.type==="deleteRange")return null;var r=e.keys?e.keys.length:"values"in e&&e.values?e.values.length:1;return n.numFailures===r?null:(e=d({},e),h(e.keys)&&(e.keys=e.keys.filter(function(o,f){return!(f in n.failures)})),"values"in e&&h(e.values)&&(e.values=e.values.filter(function(o,f){return!(f in n.failures)})),e)}function Ir(t,e){return n=t,((r=e).lower===void 0||(r.lowerOpen?0<Ft(n,r.lower):0<=Ft(n,r.lower)))&&(t=t,(e=e).upper===void 0||(e.upperOpen?Ft(t,e.upper)<0:Ft(t,e.upper)<=0));var n,r}function ki(t,e,L,r,o,f){if(!L||L.length===0)return t;var b=e.query.index,P=b.multiEntry,I=e.query.range,z=r.schema.primaryKey.extractKey,F=b.extractKey,T=(b.lowLevelIndex||b).extractKey,L=L.reduce(function(D,j){var M=D,U=[];if(j.type==="add"||j.type==="put")for(var q=new oe,Z=j.values.length-1;0<=Z;--Z){var J,rt=j.values[Z],ft=z(rt);q.hasKey(ft)||(J=F(rt),(P&&h(J)?J.some(function(yt){return Ir(yt,I)}):Ir(J,I))&&(q.addKey(ft),U.push(rt)))}switch(j.type){case"add":var bt=new oe().addKeys(e.values?D.map(function(Ct){return z(Ct)}):D),M=D.concat(e.values?U.filter(function(Ct){return Ct=z(Ct),!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}):U.map(function(Ct){return z(Ct)}).filter(function(Ct){return!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}));break;case"put":var ht=new oe().addKeys(j.values.map(function(Ct){return z(Ct)}));M=D.filter(function(Ct){return!ht.hasKey(e.values?z(Ct):Ct)}).concat(e.values?U:U.map(function(Ct){return z(Ct)}));break;case"delete":var vt=new oe().addKeys(j.keys);M=D.filter(function(Ct){return!vt.hasKey(e.values?z(Ct):Ct)});break;case"deleteRange":var wt=j.range;M=D.filter(function(Ct){return!Ir(z(Ct),wt)})}return M},t);return L===t?t:(L.sort(function(D,j){return Ft(T(D),T(j))||Ft(z(D),z(j))}),e.limit&&e.limit<1/0&&(L.length>e.limit?L.length=e.limit:t.length===e.limit&&L.length<e.limit&&(o.dirty=!0)),f?Object.freeze(L):L)}function Si(t,e){return Ft(t.lower,e.lower)===0&&Ft(t.upper,e.upper)===0&&!!t.lowerOpen==!!e.lowerOpen&&!!t.upperOpen==!!e.upperOpen}function Ta(t,e){return(function(n,r,o,f){if(n===void 0)return r!==void 0?-1:0;if(r===void 0)return 1;if((r=Ft(n,r))===0){if(o&&f)return 0;if(o)return 1;if(f)return-1}return r})(t.lower,e.lower,t.lowerOpen,e.lowerOpen)<=0&&0<=(function(n,r,o,f){if(n===void 0)return r!==void 0?1:0;if(r===void 0)return-1;if((r=Ft(n,r))===0){if(o&&f)return 0;if(o)return-1;if(f)return 1}return r})(t.upper,e.upper,t.upperOpen,e.upperOpen)}function $a(t,e,n,r){t.subscribers.add(n),r.addEventListener("abort",function(){var o,f;t.subscribers.delete(n),t.subscribers.size===0&&(o=t,f=e,setTimeout(function(){o.subscribers.size===0&&Tt(f,o)},3e3))})}var Ia={stack:"dbcore",level:0,name:"Cache",create:function(t){var e=t.schema.name;return d(d({},t),{transaction:function(n,r,o){var f,b,P=t.transaction(n,r,o);return r==="readwrite"&&(b=(f=new AbortController).signal,o=function(I){return function(){if(f.abort(),r==="readwrite"){for(var z=new Set,F=0,T=n;F<T.length;F++){var L=T[F],D=Ue["idb://".concat(e,"/").concat(L)];if(D){var j=t.table(L),M=D.optimisticOps.filter(function(Ct){return Ct.trans===P});if(P._explicit&&I&&P.mutatedParts)for(var U=0,q=Object.values(D.queries.query);U<q.length;U++)for(var Z=0,J=(bt=q[U]).slice();Z<J.length;Z++)Ar((ht=J[Z]).obsSet,P.mutatedParts)&&(Tt(bt,ht),ht.subscribers.forEach(function(Ct){return z.add(Ct)}));else if(0<M.length){D.optimisticOps=D.optimisticOps.filter(function(Ct){return Ct.trans!==P});for(var rt=0,ft=Object.values(D.queries.query);rt<ft.length;rt++)for(var bt,ht,vt,wt=0,yt=(bt=ft[rt]).slice();wt<yt.length;wt++)(ht=yt[wt]).res!=null&&P.mutatedParts&&(I&&!ht.dirty?(vt=Object.isFrozen(ht.res),vt=ki(ht.res,ht.req,M,j,ht,vt),ht.dirty?(Tt(bt,ht),ht.subscribers.forEach(function(Ct){return z.add(Ct)})):vt!==ht.res&&(ht.res=vt,ht.promise=_t.resolve({result:vt}))):(ht.dirty&&Tt(bt,ht),ht.subscribers.forEach(function(Ct){return z.add(Ct)})))}}}z.forEach(function(Ct){return Ct()})}}},P.addEventListener("abort",o(!1),{signal:b}),P.addEventListener("error",o(!1),{signal:b}),P.addEventListener("complete",o(!0),{signal:b})),P},table:function(n){var r=t.table(n),o=r.schema.primaryKey;return d(d({},r),{mutate:function(f){var b=St.trans;if(o.outbound||b.db._options.cache==="disabled"||b.explicit||b.idbtrans.mode!=="readwrite")return r.mutate(f);var P=Ue["idb://".concat(e,"/").concat(n)];return P?(b=r.mutate(f),f.type!=="add"&&f.type!=="put"||!(50<=f.values.length||$r(o,f).some(function(I){return I==null}))?(P.optimisticOps.push(f),f.mutatedParts&&qn(f.mutatedParts),b.then(function(I){0<I.numFailures&&(Tt(P.optimisticOps,f),(I=xi(0,f,I))&&P.optimisticOps.push(I),f.mutatedParts&&qn(f.mutatedParts))}),b.catch(function(){Tt(P.optimisticOps,f),f.mutatedParts&&qn(f.mutatedParts)})):b.then(function(I){var z=xi(0,d(d({},f),{values:f.values.map(function(F,T){var L;return I.failures[T]?F:(F=(L=o.keyPath)!==null&&L!==void 0&&L.includes(".")?Q(F):d({},F),X(F,o.keyPath,I.results[T]),F)})}),I);P.optimisticOps.push(z),queueMicrotask(function(){return f.mutatedParts&&qn(f.mutatedParts)})}),b):r.mutate(f)},query:function(f){if(!wi(St,r)||!_i("query",f))return r.query(f);var b=((z=St.trans)===null||z===void 0?void 0:z.db._options.cache)==="immutable",T=St,P=T.requery,I=T.signal,z=(function(j,M,U,q){var Z=Ue["idb://".concat(j,"/").concat(M)];if(!Z)return[];if(!(M=Z.queries[U]))return[null,!1,Z,null];var J=M[(q.query?q.query.index.name:null)||""];if(!J)return[null,!1,Z,null];switch(U){case"query":var rt=J.find(function(ft){return ft.req.limit===q.limit&&ft.req.values===q.values&&Si(ft.req.query.range,q.query.range)});return rt?[rt,!0,Z,J]:[J.find(function(ft){return("limit"in ft.req?ft.req.limit:1/0)>=q.limit&&(!q.values||ft.req.values)&&Ta(ft.req.query.range,q.query.range)}),!1,Z,J];case"count":return rt=J.find(function(ft){return Si(ft.req.query.range,q.query.range)}),[rt,!!rt,Z,J]}})(e,n,"query",f),F=z[0],T=z[1],L=z[2],D=z[3];return F&&T?F.obsSet=f.obsSet:(T=r.query(f).then(function(j){var M=j.result;if(F&&(F.res=M),b){for(var U=0,q=M.length;U<q;++U)Object.freeze(M[U]);Object.freeze(M)}else j.result=Q(M);return j}).catch(function(j){return D&&F&&Tt(D,F),Promise.reject(j)}),F={obsSet:f.obsSet,promise:T,subscribers:new Set,type:"query",req:f,dirty:!1},D?D.push(F):(D=[F],(L=L||(Ue["idb://".concat(e,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[f.query.index.name||""]=D)),$a(F,D,P,I),F.promise.then(function(j){return{result:ki(j.result,f,L?.optimisticOps,r,F,b)}})}})}})}};function Hn(t,e){return new Proxy(t,{get:function(n,r,o){return r==="db"?e:Reflect.get(n,r,o)}})}var ke=(Yt.prototype.version=function(t){if(isNaN(t)||t<.1)throw new mt.Type("Given version is not a positive number");if(t=Math.round(10*t)/10,this.idbdb||this._state.isBeingOpened)throw new mt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var e=this._versions,n=e.filter(function(r){return r._cfg.version===t})[0];return n||(n=new this.Version(t),e.push(n),e.sort(xa),n.stores({}),this._state.autoSchema=!1,n)},Yt.prototype._whenReady=function(t){var e=this;return this.idbdb&&(this._state.openComplete||St.letThrough||this._vip)?t():new _t(function(n,r){if(e._state.openComplete)return r(new mt.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return void r(new mt.DatabaseClosed);e.open().catch(Dt)}e._state.dbReadyPromise.then(n,r)}).then(t)},Yt.prototype.use=function(t){var e=t.stack,n=t.create,r=t.level,o=t.name;return o&&this.unuse({stack:e,name:o}),t=this._middlewares[e]||(this._middlewares[e]=[]),t.push({stack:e,create:n,level:r??10,name:o}),t.sort(function(f,b){return f.level-b.level}),this},Yt.prototype.unuse=function(t){var e=t.stack,n=t.name,r=t.create;return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(function(o){return r?o.create!==r:!!n&&o.name!==n})),this},Yt.prototype.open=function(){var t=this;return Me(me,function(){return Aa(t)})},Yt.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state,e=Qe.indexOf(this);if(0<=e&&Qe.splice(e,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new _t(function(n){t.dbReadyResolve=n}),t.openCanceller=new _t(function(n,r){t.cancelOpen=r}))},Yt.prototype.close=function(n){var e=(n===void 0?{disableAutoOpen:!0}:n).disableAutoOpen,n=this._state;e?(n.isBeingOpened&&n.cancelOpen(new mt.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new mt.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Yt.prototype.delete=function(t){var e=this;t===void 0&&(t={disableAutoOpen:!0});var n=0<arguments.length&&typeof arguments[0]!="object",r=this._state;return new _t(function(o,f){function b(){e.close(t);var P=e._deps.indexedDB.deleteDatabase(e.name);P.onsuccess=Ht(function(){var I,z,F;I=e._deps,z=e.name,F=I.indexedDB,I=I.IDBKeyRange,kr(F)||z===Tn||xr(F,I).delete(z).catch(Dt),o()}),P.onerror=ye(f),P.onblocked=e._fireOnBlocked}if(n)throw new mt.InvalidArgument("Invalid closeOptions argument to db.delete()");r.isBeingOpened?r.dbReadyPromise.then(b):b()})},Yt.prototype.backendDB=function(){return this.idbdb},Yt.prototype.isOpen=function(){return this.idbdb!==null},Yt.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},Yt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Yt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Yt.prototype,"tables",{get:function(){var t=this;return c(this._allTables).map(function(e){return t._allTables[e]})},enumerable:!1,configurable:!0}),Yt.prototype.transaction=function(){var t=function(e,n,r){var o=arguments.length;if(o<2)throw new mt.InvalidArgument("Too few arguments");for(var f=new Array(o-1);--o;)f[o-1]=arguments[o];return r=f.pop(),[e,pt(f),r]}.apply(this,arguments);return this._transaction.apply(this,t)},Yt.prototype._transaction=function(t,e,n){var r=this,o=St.trans;o&&o.db===this&&t.indexOf("!")===-1||(o=null);var f,b,P=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");try{if(b=e.map(function(z){if(z=z instanceof r.Table?z.name:z,typeof z!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return z}),t=="r"||t===hr)f=hr;else{if(t!="rw"&&t!=dr)throw new mt.InvalidArgument("Invalid transaction mode: "+t);f=dr}if(o){if(o.mode===hr&&f===dr){if(!P)throw new mt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");o=null}o&&b.forEach(function(z){if(o&&o.storeNames.indexOf(z)===-1){if(!P)throw new mt.SubTransaction("Table "+z+" not included in parent transaction.");o=null}}),P&&o&&!o.active&&(o=null)}}catch(z){return o?o._promise(null,function(F,T){T(z)}):Vt(z)}var I=function z(F,T,L,D,j){return _t.resolve().then(function(){var M=St.transless||St,U=F._createTransaction(T,L,F._dbSchema,D);if(U.explicit=!0,M={trans:U,transless:M},D)U.idbtrans=D.idbtrans;else try{U.create(),U.idbtrans._explicit=!0,F._state.PR1398_maxLoop=3}catch(J){return J.name===Gt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return z(F,T,L,null,j)})):Vt(J)}var q,Z=Y(j);return Z&&Je(),M=_t.follow(function(){var J;(q=j.call(U,U))&&(Z?(J=Re.bind(null,null),q.then(J,J)):typeof q.next=="function"&&typeof q.throw=="function"&&(q=Rr(q)))},M),(q&&typeof q.then=="function"?_t.resolve(q).then(function(J){return U.active?J:Vt(new mt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):M.then(function(){return q})).then(function(J){return D&&U._resolve(),U._completion.then(function(){return J})}).catch(function(J){return U._reject(J),Vt(J)})})}.bind(null,this,f,b,o,n);return o?o._promise(f,I,"lock"):St.trans?Me(St.transless,function(){return r._whenReady(I)}):this._whenReady(I)},Yt.prototype.table=function(t){if(!_(this._allTables,t))throw new mt.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},Yt);function Yt(t,e){var n=this;this._middlewares={},this.verno=0;var r=Yt.dependencies;this._options=e=d({addons:Yt.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,cache:"cloned"},e),this._deps={indexedDB:e.indexedDB,IDBKeyRange:e.IDBKeyRange},r=e.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var o,f,b,P,I,z={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Dt,dbReadyPromise:null,cancelOpen:Dt,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:e.autoOpen};z.dbReadyPromise=new _t(function(T){z.dbReadyResolve=T}),z.openCanceller=new _t(function(T,L){z.cancelOpen=L}),this._state=z,this.name=t,this.on=un(this,"populate","blocked","versionchange","close",{ready:[ot,Dt]}),this.once=function(T,L){var D=function(){for(var j=[],M=0;M<arguments.length;M++)j[M]=arguments[M];n.on(T).unsubscribe(D),L.apply(n,j)};return n.on(T,D)},this.on.ready.subscribe=B(this.on.ready.subscribe,function(T){return function(L,D){Yt.vip(function(){var j,M=n._state;M.openComplete?(M.dbOpenError||_t.resolve().then(L),D&&T(L)):M.onReadyBeingFired?(M.onReadyBeingFired.push(L),D&&T(L)):(T(L),j=n,D||T(function U(){j.on.ready.unsubscribe(L),j.on.ready.unsubscribe(U)}))})}}),this.Collection=(o=this,cn(ma.prototype,function(q,U){this.db=o;var D=Qr,j=null;if(U)try{D=U()}catch(Z){j=Z}var M=q._ctx,U=M.table,q=U.hook.reading.fire;this._ctx={table:U,index:M.index,isPrimKey:!M.index||U.schema.primKey.keyPath&&M.index===U.schema.primKey.name,range:D,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:j,or:M.or,valueMapper:q!==re?q:null}})),this.Table=(f=this,cn(ai.prototype,function(T,L,D){this.db=f,this._tx=D,this.name=T,this.schema=L,this.hook=f._allTables[T]?f._allTables[T].hook:un(null,{creating:[G,Dt],reading:[s,re],updating:[k,Dt],deleting:[O,Dt]})})),this.Transaction=(b=this,cn(ya.prototype,function(T,L,D,j,M){var U=this;T!=="readonly"&&L.forEach(function(q){q=(q=D[q])===null||q===void 0?void 0:q.yProps,q&&(L=L.concat(q.map(function(Z){return Z.updatesTable})))}),this.db=b,this.mode=T,this.storeNames=L,this.schema=D,this.chromeTransactionDurability=j,this.idbtrans=null,this.on=un(this,"complete","error","abort"),this.parent=M||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new _t(function(q,Z){U._resolve=q,U._reject=Z}),this._completion.then(function(){U.active=!1,U.on.complete.fire()},function(q){var Z=U.active;return U.active=!1,U.on.error.fire(q),U.parent?U.parent._reject(q):Z&&U.idbtrans&&U.idbtrans.abort(),Vt(q)})})),this.Version=(P=this,cn(Ca.prototype,function(T){this.db=P,this._cfg={version:T,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(I=this,cn(ci.prototype,function(T,L,D){if(this.db=I,this._ctx={table:T,index:L===":id"?null:L,or:D},this._cmp=this._ascending=Ft,this._descending=function(j,M){return Ft(M,j)},this._max=function(j,M){return 0<Ft(j,M)?j:M},this._min=function(j,M){return Ft(j,M)<0?j:M},this._IDBKeyRange=I._deps.IDBKeyRange,!this._IDBKeyRange)throw new mt.MissingAPI})),this.on("versionchange",function(T){0<T.newVersion?console.warn("Another connection wants to upgrade database '".concat(n.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(n.name,"'. Closing db now to resume the delete request.")),n.close({disableAutoOpen:!1})}),this.on("blocked",function(T){!T.newVersion||T.newVersion<T.oldVersion?console.warn("Dexie.delete('".concat(n.name,"') was blocked")):console.warn("Upgrade '".concat(n.name,"' blocked by other connection holding version ").concat(T.oldVersion/10))}),this._maxKey=fn(e.IDBKeyRange),this._createTransaction=function(T,L,D,j){return new n.Transaction(T,L,D,n._options.chromeTransactionDurability,j)},this._fireOnBlocked=function(T){n.on("blocked").fire(T),Qe.filter(function(L){return L.name===n.name&&L!==n&&!L._state.vcFired}).map(function(L){return L.on("versionchange").fire(T)})},this.use(Pa),this.use(Ia),this.use(Ra),this.use(Ea),this.use(Oa);var F=new Proxy(this,{get:function(T,L,D){if(L==="_vip")return!0;if(L==="table")return function(M){return Hn(n.table(M),F)};var j=Reflect.get(T,L,D);return j instanceof ai?Hn(j,F):L==="tables"?j.map(function(M){return Hn(M,F)}):L==="_createTransaction"?function(){return Hn(j.apply(this,arguments),F)}:j}});this.vip=F,r.forEach(function(T){return T(n)})}var Zn,ve=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",za=(zr.prototype.subscribe=function(t,e,n){return this._subscribe(t&&typeof t!="function"?t:{next:t,error:e,complete:n})},zr.prototype[ve]=function(){return this},zr);function zr(t){this._subscribe=t}try{Zn={indexedDB:l.indexedDB||l.mozIndexedDB||l.webkitIndexedDB||l.msIndexedDB,IDBKeyRange:l.IDBKeyRange||l.webkitIDBKeyRange}}catch{Zn={indexedDB:null,IDBKeyRange:null}}function Ci(t){var e,n=!1,r=new za(function(o){var f=Y(t),b,P=!1,I={},z={},F={get closed(){return P},unsubscribe:function(){P||(P=!0,b&&b.abort(),T&&Ie.storagemutated.unsubscribe(D))}};o.start&&o.start(F);var T=!1,L=function(){return cr(j)},D=function(M){Kn(I,M),Ar(z,I)&&L()},j=function(){var M,U,q;!P&&Zn.indexedDB&&(I={},M={},b&&b.abort(),b=new AbortController,q=(function(Z){var J=Ge();try{f&&Je();var rt=Pe(t,Z);return rt=f?rt.finally(Re):rt}finally{J&&Xe()}})(U={subscr:M,signal:b.signal,requery:L,querier:t,trans:null}),Promise.resolve(q).then(function(Z){n=!0,e=Z,P||U.signal.aborted||(I={},(function(J){for(var rt in J)if(_(J,rt))return;return 1})(z=M)||T||(Ie(dn,D),T=!0),cr(function(){return!P&&o.next&&o.next(Z)}))},function(Z){n=!1,["DatabaseClosedError","AbortError"].includes(Z?.name)||P||cr(function(){P||o.error&&o.error(Z)})}))};return setTimeout(L,0),F});return r.hasValue=function(){return n},r.getValue=function(){return e},r}var Le=ke;function Dr(t){var e=ze;try{ze=!0,Ie.storagemutated.fire(t),Pr(t,!0)}finally{ze=e}}E(Le,d(d({},Kt),{delete:function(t){return new Le(t,{addons:[]}).delete()},exists:function(t){return new Le(t,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(t){try{return e=Le.dependencies,n=e.indexedDB,e=e.IDBKeyRange,(kr(n)?Promise.resolve(n.databases()).then(function(r){return r.map(function(o){return o.name}).filter(function(o){return o!==Tn})}):xr(n,e).toCollection().primaryKeys()).then(t)}catch{return Vt(new mt.MissingAPI)}var e,n},defineClass:function(){return function(t){v(this,t)}},ignoreTransaction:function(t){return St.trans?Me(St.transless,t):t()},vip:Sr,async:function(t){return function(){try{var e=Rr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:_t.resolve(e)}catch(n){return Vt(n)}}},spawn:function(t,e,n){try{var r=Rr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:_t.resolve(r)}catch(o){return Vt(o)}},currentTransaction:{get:function(){return St.trans||null}},waitFor:function(t,e){return e=_t.resolve(typeof t=="function"?Le.ignoreTransaction(t):t).timeout(e||6e4),St.trans?St.trans.waitFor(e):e},Promise:_t,debug:{get:function(){return at},set:function(t){H(t)}},derive:y,extend:v,props:E,override:B,Events:un,on:Ie,liveQuery:Ci,extendObservabilitySet:Kn,getByKeyPath:nt,setByKeyPath:X,delByKeyPath:function(t,e){typeof e=="string"?X(t,e,void 0):"length"in e&&[].map.call(e,function(n){X(t,n,void 0)})},shallowClone:ut,deepClone:Q,getObjectDiff:Tr,cmp:Ft,asap:K,minKey:-1/0,addons:[],connections:Qe,errnames:Gt,dependencies:Zn,cache:Ue,semVer:"4.2.1",version:"4.2.1".split(".").map(function(t){return parseInt(t)}).reduce(function(t,e,n){return t+e/Math.pow(10,2*n)})})),Le.maxKey=fn(Le.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Ie(dn,function(t){ze||(t=new CustomEvent(mr,{detail:t}),ze=!0,dispatchEvent(t),ze=!1)}),addEventListener(mr,function(t){t=t.detail,ze||Dr(t)}));var rn,ze=!1,Ai=function(){};return typeof BroadcastChannel<"u"&&((Ai=function(){(rn=new BroadcastChannel(mr)).onmessage=function(t){return t.data&&Dr(t.data)}})(),typeof rn.unref=="function"&&rn.unref(),Ie(dn,function(t){ze||rn.postMessage(t)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(t){if(!ke.disableBfCache&&t.persisted){at&&console.debug("Dexie: handling persisted pagehide"),rn?.close();for(var e=0,n=Qe;e<n.length;e++)n[e].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(t){!ke.disableBfCache&&t.persisted&&(at&&console.debug("Dexie: handling persisted pageshow"),Ai(),Dr({all:new oe(-1/0,[[]])}))})),_t.rejectionMapper=function(t,e){return!t||t instanceof Et||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Zt[t.name]?t:(e=new Zt[t.name](e||t.message,t),"stack"in t&&C(e,"stack",{get:function(){return this.inner.stack}}),e)},H(at),d(ke,Object.freeze({__proto__:null,Dexie:ke,liveQuery:Ci,Entity:ti,cmp:Ft,PropModification:ln,replacePrefix:function(t,e){return new ln({replacePrefix:[t,e]})},add:function(t){return new ln({add:t})},remove:function(t){return new ln({remove:t})},default:ke,RangeSet:oe,mergeRanges:vn,rangesOverlap:mi}),{default:ke}),ke})})(Xn)),Xn.exports}var yo=go();const Ur=Gi(yo),Fi=Symbol.for("Dexie"),er=globalThis[Fi]||(globalThis[Fi]=Ur);if(Ur.semVer!==er.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ur.semVer} and ${er.semVer}`);const{liveQuery:fs,mergeRanges:ps,rangesOverlap:ms,RangeSet:vs,cmp:gs,Entity:ys,PropModification:bs,replacePrefix:ws,add:_s,remove:xs,DexieYProvider:ks}=er;class bo extends er{constructor(){super("AudioAnnotationDB"),this.version(1).stores({recordings:"id, title, createdAt, isAnnotated",annotations:"recordingId, completedAt, updatedAt"})}}const ge=new bo;async function Xi(p){const{v4:a}=await mo(async()=>{const{v4:u}=await import("./index-gGVEG6Gs.js");return{v4:u}},[]),i=a(),d={...p,id:i,createdAt:Date.now(),isAnnotated:!1};return await ge.recordings.add(d),i}async function Ji(){return await ge.recordings.orderBy("createdAt").reverse().toArray()}async function wo(p){return await ge.recordings.get(p)}async function _o(p,a){await ge.recordings.update(p,a)}async function xo(p){await ge.recordings.delete(p),await ge.annotations.delete(p)}async function Mr(p){await ge.annotations.put(p),await ge.recordings.update(p.recordingId,{isAnnotated:!0})}async function bn(p){return await ge.annotations.get(p)}async function ko(p){await ge.annotations.delete(p),await ge.recordings.update(p,{isAnnotated:!1})}async function So(){const p=await ge.recordings.toArray(),a=/^Untitled (\d+)$/,i=p.map(d=>d.title.match(a)?.[1]).filter(Boolean).map(Number);return i.length>0?Math.max(...i)+1:1}function Co(p){const a=p.lastIndexOf(".");return a===-1?p:p.substring(0,a)}async function Ao(p){return new Promise((a,i)=>{const d=new Audio,u=URL.createObjectURL(p);d.addEventListener("loadedmetadata",()=>{URL.revokeObjectURL(u),a(d.duration)}),d.addEventListener("error",()=>{URL.revokeObjectURL(u),i(new Error("Failed to load audio metadata"))}),d.src=u})}async function Eo(p){if(!p.type.startsWith("audio/"))throw new Error("File must be an audio file");const a=Co(p.name),i=await Ao(p);return{id:await Xi({title:a,audioBlob:p,duration:i,source:"upload"}),title:a,duration:i}}async function Oo(p){const a=Array.from(p),i=[];for(const d of a)try{const u=await Eo(d);i.push(u)}catch(u){console.error(`Failed to upload ${d.name}:`,u)}return i}function Po(){return new Promise(p=>{const a=document.createElement("input");a.type="file",a.accept="audio/*",a.multiple=!0,a.addEventListener("change",()=>{p(a.files)}),a.addEventListener("cancel",()=>{p(null)}),a.click()})}function Yn(p){throw new Error('Could not dynamically require "'+p+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Fr={exports:{}};var Ni;function Ro(){return Ni||(Ni=1,(function(p,a){(function(i){p.exports=i()})(function(){return(function i(d,u,l){function c(x,A){if(!u[x]){if(!d[x]){var _=typeof Yn=="function"&&Yn;if(!A&&_)return _(x,!0);if(h)return h(x,!0);var E=new Error("Cannot find module '"+x+"'");throw E.code="MODULE_NOT_FOUND",E}var g=u[x]={exports:{}};d[x][0].call(g.exports,function(C){var y=d[x][1][C];return c(y||C)},g,g.exports,i,d,u,l)}return u[x].exports}for(var h=typeof Yn=="function"&&Yn,v=0;v<l.length;v++)c(l[v]);return c})({1:[function(i,d,u){var l=i("./utils"),c=i("./support"),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";u.encode=function(v){for(var x,A,_,E,g,C,y,S=[],w=0,R=v.length,B=R,W=l.getTypeOf(v)!=="string";w<v.length;)B=R-w,_=W?(x=v[w++],A=w<R?v[w++]:0,w<R?v[w++]:0):(x=v.charCodeAt(w++),A=w<R?v.charCodeAt(w++):0,w<R?v.charCodeAt(w++):0),E=x>>2,g=(3&x)<<4|A>>4,C=1<B?(15&A)<<2|_>>6:64,y=2<B?63&_:64,S.push(h.charAt(E)+h.charAt(g)+h.charAt(C)+h.charAt(y));return S.join("")},u.decode=function(v){var x,A,_,E,g,C,y=0,S=0,w="data:";if(v.substr(0,w.length)===w)throw new Error("Invalid base64 input, it looks like a data url.");var R,B=3*(v=v.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(v.charAt(v.length-1)===h.charAt(64)&&B--,v.charAt(v.length-2)===h.charAt(64)&&B--,B%1!=0)throw new Error("Invalid base64 input, bad content length.");for(R=c.uint8array?new Uint8Array(0|B):new Array(0|B);y<v.length;)x=h.indexOf(v.charAt(y++))<<2|(E=h.indexOf(v.charAt(y++)))>>4,A=(15&E)<<4|(g=h.indexOf(v.charAt(y++)))>>2,_=(3&g)<<6|(C=h.indexOf(v.charAt(y++))),R[S++]=x,g!==64&&(R[S++]=A),C!==64&&(R[S++]=_);return R}},{"./support":30,"./utils":32}],2:[function(i,d,u){var l=i("./external"),c=i("./stream/DataWorker"),h=i("./stream/Crc32Probe"),v=i("./stream/DataLengthProbe");function x(A,_,E,g,C){this.compressedSize=A,this.uncompressedSize=_,this.crc32=E,this.compression=g,this.compressedContent=C}x.prototype={getContentWorker:function(){var A=new c(l.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new v("data_length")),_=this;return A.on("end",function(){if(this.streamInfo.data_length!==_.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),A},getCompressedWorker:function(){return new c(l.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},x.createWorkerFrom=function(A,_,E){return A.pipe(new h).pipe(new v("uncompressedSize")).pipe(_.compressWorker(E)).pipe(new v("compressedSize")).withStreamInfo("compression",_)},d.exports=x},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,d,u){var l=i("./stream/GenericWorker");u.STORE={magic:"\0\0",compressWorker:function(){return new l("STORE compression")},uncompressWorker:function(){return new l("STORE decompression")}},u.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,d,u){var l=i("./utils"),c=(function(){for(var h,v=[],x=0;x<256;x++){h=x;for(var A=0;A<8;A++)h=1&h?3988292384^h>>>1:h>>>1;v[x]=h}return v})();d.exports=function(h,v){return h!==void 0&&h.length?l.getTypeOf(h)!=="string"?(function(x,A,_,E){var g=c,C=E+_;x^=-1;for(var y=E;y<C;y++)x=x>>>8^g[255&(x^A[y])];return-1^x})(0|v,h,h.length,0):(function(x,A,_,E){var g=c,C=E+_;x^=-1;for(var y=E;y<C;y++)x=x>>>8^g[255&(x^A.charCodeAt(y))];return-1^x})(0|v,h,h.length,0):0}},{"./utils":32}],5:[function(i,d,u){u.base64=!1,u.binary=!1,u.dir=!1,u.createFolders=!0,u.date=null,u.compression=null,u.compressionOptions=null,u.comment=null,u.unixPermissions=null,u.dosPermissions=null},{}],6:[function(i,d,u){var l=null;l=typeof Promise<"u"?Promise:i("lie"),d.exports={Promise:l}},{lie:37}],7:[function(i,d,u){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",c=i("pako"),h=i("./utils"),v=i("./stream/GenericWorker"),x=l?"uint8array":"array";function A(_,E){v.call(this,"FlateWorker/"+_),this._pako=null,this._pakoAction=_,this._pakoOptions=E,this.meta={}}u.magic="\b\0",h.inherits(A,v),A.prototype.processChunk=function(_){this.meta=_.meta,this._pako===null&&this._createPako(),this._pako.push(h.transformTo(x,_.data),!1)},A.prototype.flush=function(){v.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},A.prototype.cleanUp=function(){v.prototype.cleanUp.call(this),this._pako=null},A.prototype._createPako=function(){this._pako=new c[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var _=this;this._pako.onData=function(E){_.push({data:E,meta:_.meta})}},u.compressWorker=function(_){return new A("Deflate",_)},u.uncompressWorker=function(){return new A("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,d,u){function l(g,C){var y,S="";for(y=0;y<C;y++)S+=String.fromCharCode(255&g),g>>>=8;return S}function c(g,C,y,S,w,R){var B,W,K=g.file,nt=g.compression,X=R!==x.utf8encode,ut=h.transformTo("string",R(K.name)),tt=h.transformTo("string",x.utf8encode(K.name)),pt=K.comment,Pt=h.transformTo("string",R(pt)),$=h.transformTo("string",x.utf8encode(pt)),Q=tt.length!==K.name.length,m=$.length!==pt.length,it="",Rt="",lt="",Tt=K.dir,st=K.date,Ot={crc32:0,compressedSize:0,uncompressedSize:0};C&&!y||(Ot.crc32=g.crc32,Ot.compressedSize=g.compressedSize,Ot.uncompressedSize=g.uncompressedSize);var Y=0;C&&(Y|=8),X||!Q&&!m||(Y|=2048);var V=0,Et=0;Tt&&(V|=16),w==="UNIX"?(Et=798,V|=(function(gt,Lt){var Gt=gt;return gt||(Gt=Lt?16893:33204),(65535&Gt)<<16})(K.unixPermissions,Tt)):(Et=20,V|=(function(gt){return 63&(gt||0)})(K.dosPermissions)),B=st.getUTCHours(),B<<=6,B|=st.getUTCMinutes(),B<<=5,B|=st.getUTCSeconds()/2,W=st.getUTCFullYear()-1980,W<<=4,W|=st.getUTCMonth()+1,W<<=5,W|=st.getUTCDate(),Q&&(Rt=l(1,1)+l(A(ut),4)+tt,it+="up"+l(Rt.length,2)+Rt),m&&(lt=l(1,1)+l(A(Pt),4)+$,it+="uc"+l(lt.length,2)+lt);var xt="";return xt+=`
\0`,xt+=l(Y,2),xt+=nt.magic,xt+=l(B,2),xt+=l(W,2),xt+=l(Ot.crc32,4),xt+=l(Ot.compressedSize,4),xt+=l(Ot.uncompressedSize,4),xt+=l(ut.length,2),xt+=l(it.length,2),{fileRecord:_.LOCAL_FILE_HEADER+xt+ut+it,dirRecord:_.CENTRAL_FILE_HEADER+l(Et,2)+xt+l(Pt.length,2)+"\0\0\0\0"+l(V,4)+l(S,4)+ut+it+Pt}}var h=i("../utils"),v=i("../stream/GenericWorker"),x=i("../utf8"),A=i("../crc32"),_=i("../signature");function E(g,C,y,S){v.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=C,this.zipPlatform=y,this.encodeFileName=S,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}h.inherits(E,v),E.prototype.push=function(g){var C=g.meta.percent||0,y=this.entriesCount,S=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,v.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:y?(C+100*(y-S-1))/y:100}}))},E.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var C=this.streamFiles&&!g.file.dir;if(C){var y=c(g,C,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},E.prototype.closedSource=function(g){this.accumulate=!1;var C=this.streamFiles&&!g.file.dir,y=c(g,C,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),C)this.push({data:(function(S){return _.DATA_DESCRIPTOR+l(S.crc32,4)+l(S.compressedSize,4)+l(S.uncompressedSize,4)})(g),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},E.prototype.flush=function(){for(var g=this.bytesWritten,C=0;C<this.dirRecords.length;C++)this.push({data:this.dirRecords[C],meta:{percent:100}});var y=this.bytesWritten-g,S=(function(w,R,B,W,K){var nt=h.transformTo("string",K(W));return _.CENTRAL_DIRECTORY_END+"\0\0\0\0"+l(w,2)+l(w,2)+l(R,4)+l(B,4)+l(nt.length,2)+nt})(this.dirRecords.length,y,g,this.zipComment,this.encodeFileName);this.push({data:S,meta:{percent:100}})},E.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},E.prototype.registerPrevious=function(g){this._sources.push(g);var C=this;return g.on("data",function(y){C.processChunk(y)}),g.on("end",function(){C.closedSource(C.previous.streamInfo),C._sources.length?C.prepareNextSource():C.end()}),g.on("error",function(y){C.error(y)}),this},E.prototype.resume=function(){return!!v.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},E.prototype.error=function(g){var C=this._sources;if(!v.prototype.error.call(this,g))return!1;for(var y=0;y<C.length;y++)try{C[y].error(g)}catch{}return!0},E.prototype.lock=function(){v.prototype.lock.call(this);for(var g=this._sources,C=0;C<g.length;C++)g[C].lock()},d.exports=E},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,d,u){var l=i("../compressions"),c=i("./ZipFileWorker");u.generateWorker=function(h,v,x){var A=new c(v.streamFiles,x,v.platform,v.encodeFileName),_=0;try{h.forEach(function(E,g){_++;var C=(function(R,B){var W=R||B,K=l[W];if(!K)throw new Error(W+" is not a valid compression method !");return K})(g.options.compression,v.compression),y=g.options.compressionOptions||v.compressionOptions||{},S=g.dir,w=g.date;g._compressWorker(C,y).withStreamInfo("file",{name:E,dir:S,date:w,comment:g.comment||"",unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions}).pipe(A)}),A.entriesCount=_}catch(E){A.error(E)}return A}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,d,u){function l(){if(!(this instanceof l))return new l;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var c=new l;for(var h in this)typeof this[h]!="function"&&(c[h]=this[h]);return c}}(l.prototype=i("./object")).loadAsync=i("./load"),l.support=i("./support"),l.defaults=i("./defaults"),l.version="3.10.1",l.loadAsync=function(c,h){return new l().loadAsync(c,h)},l.external=i("./external"),d.exports=l},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,d,u){var l=i("./utils"),c=i("./external"),h=i("./utf8"),v=i("./zipEntries"),x=i("./stream/Crc32Probe"),A=i("./nodejsUtils");function _(E){return new c.Promise(function(g,C){var y=E.decompressed.getContentWorker().pipe(new x);y.on("error",function(S){C(S)}).on("end",function(){y.streamInfo.crc32!==E.decompressed.crc32?C(new Error("Corrupted zip : CRC32 mismatch")):g()}).resume()})}d.exports=function(E,g){var C=this;return g=l.extend(g||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:h.utf8decode}),A.isNode&&A.isStream(E)?c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):l.prepareContent("the loaded zip file",E,!0,g.optimizedBinaryString,g.base64).then(function(y){var S=new v(g);return S.load(y),S}).then(function(y){var S=[c.Promise.resolve(y)],w=y.files;if(g.checkCRC32)for(var R=0;R<w.length;R++)S.push(_(w[R]));return c.Promise.all(S)}).then(function(y){for(var S=y.shift(),w=S.files,R=0;R<w.length;R++){var B=w[R],W=B.fileNameStr,K=l.resolve(B.fileNameStr);C.file(K,B.decompressed,{binary:!0,optimizedBinaryString:!0,date:B.date,dir:B.dir,comment:B.fileCommentStr.length?B.fileCommentStr:null,unixPermissions:B.unixPermissions,dosPermissions:B.dosPermissions,createFolders:g.createFolders}),B.dir||(C.file(K).unsafeOriginalName=W)}return S.zipComment.length&&(C.comment=S.zipComment),C})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,d,u){var l=i("../utils"),c=i("../stream/GenericWorker");function h(v,x){c.call(this,"Nodejs stream input adapter for "+v),this._upstreamEnded=!1,this._bindStream(x)}l.inherits(h,c),h.prototype._bindStream=function(v){var x=this;(this._stream=v).pause(),v.on("data",function(A){x.push({data:A,meta:{percent:0}})}).on("error",function(A){x.isPaused?this.generatedError=A:x.error(A)}).on("end",function(){x.isPaused?x._upstreamEnded=!0:x.end()})},h.prototype.pause=function(){return!!c.prototype.pause.call(this)&&(this._stream.pause(),!0)},h.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},d.exports=h},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,d,u){var l=i("readable-stream").Readable;function c(h,v,x){l.call(this,v),this._helper=h;var A=this;h.on("data",function(_,E){A.push(_)||A._helper.pause(),x&&x(E)}).on("error",function(_){A.emit("error",_)}).on("end",function(){A.push(null)})}i("../utils").inherits(c,l),c.prototype._read=function(){this._helper.resume()},d.exports=c},{"../utils":32,"readable-stream":16}],14:[function(i,d,u){d.exports={isNode:typeof Buffer<"u",newBufferFrom:function(l,c){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(l,c);if(typeof l=="number")throw new Error('The "data" argument must not be a number');return new Buffer(l,c)},allocBuffer:function(l){if(Buffer.alloc)return Buffer.alloc(l);var c=new Buffer(l);return c.fill(0),c},isBuffer:function(l){return Buffer.isBuffer(l)},isStream:function(l){return l&&typeof l.on=="function"&&typeof l.pause=="function"&&typeof l.resume=="function"}}},{}],15:[function(i,d,u){function l(K,nt,X){var ut,tt=h.getTypeOf(nt),pt=h.extend(X||{},A);pt.date=pt.date||new Date,pt.compression!==null&&(pt.compression=pt.compression.toUpperCase()),typeof pt.unixPermissions=="string"&&(pt.unixPermissions=parseInt(pt.unixPermissions,8)),pt.unixPermissions&&16384&pt.unixPermissions&&(pt.dir=!0),pt.dosPermissions&&16&pt.dosPermissions&&(pt.dir=!0),pt.dir&&(K=w(K)),pt.createFolders&&(ut=S(K))&&R.call(this,ut,!0);var Pt=tt==="string"&&pt.binary===!1&&pt.base64===!1;X&&X.binary!==void 0||(pt.binary=!Pt),(nt instanceof _&&nt.uncompressedSize===0||pt.dir||!nt||nt.length===0)&&(pt.base64=!1,pt.binary=!0,nt="",pt.compression="STORE",tt="string");var $=null;$=nt instanceof _||nt instanceof v?nt:C.isNode&&C.isStream(nt)?new y(K,nt):h.prepareContent(K,nt,pt.binary,pt.optimizedBinaryString,pt.base64);var Q=new E(K,$,pt);this.files[K]=Q}var c=i("./utf8"),h=i("./utils"),v=i("./stream/GenericWorker"),x=i("./stream/StreamHelper"),A=i("./defaults"),_=i("./compressedObject"),E=i("./zipObject"),g=i("./generate"),C=i("./nodejsUtils"),y=i("./nodejs/NodejsStreamInputAdapter"),S=function(K){K.slice(-1)==="/"&&(K=K.substring(0,K.length-1));var nt=K.lastIndexOf("/");return 0<nt?K.substring(0,nt):""},w=function(K){return K.slice(-1)!=="/"&&(K+="/"),K},R=function(K,nt){return nt=nt!==void 0?nt:A.createFolders,K=w(K),this.files[K]||l.call(this,K,null,{dir:!0,createFolders:nt}),this.files[K]};function B(K){return Object.prototype.toString.call(K)==="[object RegExp]"}var W={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(K){var nt,X,ut;for(nt in this.files)ut=this.files[nt],(X=nt.slice(this.root.length,nt.length))&&nt.slice(0,this.root.length)===this.root&&K(X,ut)},filter:function(K){var nt=[];return this.forEach(function(X,ut){K(X,ut)&&nt.push(ut)}),nt},file:function(K,nt,X){if(arguments.length!==1)return K=this.root+K,l.call(this,K,nt,X),this;if(B(K)){var ut=K;return this.filter(function(pt,Pt){return!Pt.dir&&ut.test(pt)})}var tt=this.files[this.root+K];return tt&&!tt.dir?tt:null},folder:function(K){if(!K)return this;if(B(K))return this.filter(function(tt,pt){return pt.dir&&K.test(tt)});var nt=this.root+K,X=R.call(this,nt),ut=this.clone();return ut.root=X.name,ut},remove:function(K){K=this.root+K;var nt=this.files[K];if(nt||(K.slice(-1)!=="/"&&(K+="/"),nt=this.files[K]),nt&&!nt.dir)delete this.files[K];else for(var X=this.filter(function(tt,pt){return pt.name.slice(0,K.length)===K}),ut=0;ut<X.length;ut++)delete this.files[X[ut].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(K){var nt,X={};try{if((X=h.extend(K||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:c.utf8encode})).type=X.type.toLowerCase(),X.compression=X.compression.toUpperCase(),X.type==="binarystring"&&(X.type="string"),!X.type)throw new Error("No output type specified.");h.checkSupport(X.type),X.platform!=="darwin"&&X.platform!=="freebsd"&&X.platform!=="linux"&&X.platform!=="sunos"||(X.platform="UNIX"),X.platform==="win32"&&(X.platform="DOS");var ut=X.comment||this.comment||"";nt=g.generateWorker(this,X,ut)}catch(tt){(nt=new v("error")).error(tt)}return new x(nt,X.type||"string",X.mimeType)},generateAsync:function(K,nt){return this.generateInternalStream(K).accumulate(nt)},generateNodeStream:function(K,nt){return(K=K||{}).type||(K.type="nodebuffer"),this.generateInternalStream(K).toNodejsStream(nt)}};d.exports=W},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,d,u){d.exports=i("stream")},{stream:void 0}],17:[function(i,d,u){var l=i("./DataReader");function c(h){l.call(this,h);for(var v=0;v<this.data.length;v++)h[v]=255&h[v]}i("../utils").inherits(c,l),c.prototype.byteAt=function(h){return this.data[this.zero+h]},c.prototype.lastIndexOfSignature=function(h){for(var v=h.charCodeAt(0),x=h.charCodeAt(1),A=h.charCodeAt(2),_=h.charCodeAt(3),E=this.length-4;0<=E;--E)if(this.data[E]===v&&this.data[E+1]===x&&this.data[E+2]===A&&this.data[E+3]===_)return E-this.zero;return-1},c.prototype.readAndCheckSignature=function(h){var v=h.charCodeAt(0),x=h.charCodeAt(1),A=h.charCodeAt(2),_=h.charCodeAt(3),E=this.readData(4);return v===E[0]&&x===E[1]&&A===E[2]&&_===E[3]},c.prototype.readData=function(h){if(this.checkOffset(h),h===0)return[];var v=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,v},d.exports=c},{"../utils":32,"./DataReader":18}],18:[function(i,d,u){var l=i("../utils");function c(h){this.data=h,this.length=h.length,this.index=0,this.zero=0}c.prototype={checkOffset:function(h){this.checkIndex(this.index+h)},checkIndex:function(h){if(this.length<this.zero+h||h<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+h+"). Corrupted zip ?")},setIndex:function(h){this.checkIndex(h),this.index=h},skip:function(h){this.setIndex(this.index+h)},byteAt:function(){},readInt:function(h){var v,x=0;for(this.checkOffset(h),v=this.index+h-1;v>=this.index;v--)x=(x<<8)+this.byteAt(v);return this.index+=h,x},readString:function(h){return l.transformTo("string",this.readData(h))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var h=this.readInt(4);return new Date(Date.UTC(1980+(h>>25&127),(h>>21&15)-1,h>>16&31,h>>11&31,h>>5&63,(31&h)<<1))}},d.exports=c},{"../utils":32}],19:[function(i,d,u){var l=i("./Uint8ArrayReader");function c(h){l.call(this,h)}i("../utils").inherits(c,l),c.prototype.readData=function(h){this.checkOffset(h);var v=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,v},d.exports=c},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,d,u){var l=i("./DataReader");function c(h){l.call(this,h)}i("../utils").inherits(c,l),c.prototype.byteAt=function(h){return this.data.charCodeAt(this.zero+h)},c.prototype.lastIndexOfSignature=function(h){return this.data.lastIndexOf(h)-this.zero},c.prototype.readAndCheckSignature=function(h){return h===this.readData(4)},c.prototype.readData=function(h){this.checkOffset(h);var v=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,v},d.exports=c},{"../utils":32,"./DataReader":18}],21:[function(i,d,u){var l=i("./ArrayReader");function c(h){l.call(this,h)}i("../utils").inherits(c,l),c.prototype.readData=function(h){if(this.checkOffset(h),h===0)return new Uint8Array(0);var v=this.data.subarray(this.zero+this.index,this.zero+this.index+h);return this.index+=h,v},d.exports=c},{"../utils":32,"./ArrayReader":17}],22:[function(i,d,u){var l=i("../utils"),c=i("../support"),h=i("./ArrayReader"),v=i("./StringReader"),x=i("./NodeBufferReader"),A=i("./Uint8ArrayReader");d.exports=function(_){var E=l.getTypeOf(_);return l.checkSupport(E),E!=="string"||c.uint8array?E==="nodebuffer"?new x(_):c.uint8array?new A(l.transformTo("uint8array",_)):new h(l.transformTo("array",_)):new v(_)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,d,u){u.LOCAL_FILE_HEADER="PK",u.CENTRAL_FILE_HEADER="PK",u.CENTRAL_DIRECTORY_END="PK",u.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",u.ZIP64_CENTRAL_DIRECTORY_END="PK",u.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,d,u){var l=i("./GenericWorker"),c=i("../utils");function h(v){l.call(this,"ConvertWorker to "+v),this.destType=v}c.inherits(h,l),h.prototype.processChunk=function(v){this.push({data:c.transformTo(this.destType,v.data),meta:v.meta})},d.exports=h},{"../utils":32,"./GenericWorker":28}],25:[function(i,d,u){var l=i("./GenericWorker"),c=i("../crc32");function h(){l.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(h,l),h.prototype.processChunk=function(v){this.streamInfo.crc32=c(v.data,this.streamInfo.crc32||0),this.push(v)},d.exports=h},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,d,u){var l=i("../utils"),c=i("./GenericWorker");function h(v){c.call(this,"DataLengthProbe for "+v),this.propName=v,this.withStreamInfo(v,0)}l.inherits(h,c),h.prototype.processChunk=function(v){if(v){var x=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=x+v.data.length}c.prototype.processChunk.call(this,v)},d.exports=h},{"../utils":32,"./GenericWorker":28}],27:[function(i,d,u){var l=i("../utils"),c=i("./GenericWorker");function h(v){c.call(this,"DataWorker");var x=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,v.then(function(A){x.dataIsReady=!0,x.data=A,x.max=A&&A.length||0,x.type=l.getTypeOf(A),x.isPaused||x._tickAndRepeat()},function(A){x.error(A)})}l.inherits(h,c),h.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this.data=null},h.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,l.delay(this._tickAndRepeat,[],this)),!0)},h.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(l.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},h.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var v=null,x=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":v=this.data.substring(this.index,x);break;case"uint8array":v=this.data.subarray(this.index,x);break;case"array":case"nodebuffer":v=this.data.slice(this.index,x)}return this.index=x,this.push({data:v,meta:{percent:this.max?this.index/this.max*100:0}})},d.exports=h},{"../utils":32,"./GenericWorker":28}],28:[function(i,d,u){function l(c){this.name=c||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}l.prototype={push:function(c){this.emit("data",c)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(c){this.emit("error",c)}return!0},error:function(c){return!this.isFinished&&(this.isPaused?this.generatedError=c:(this.isFinished=!0,this.emit("error",c),this.previous&&this.previous.error(c),this.cleanUp()),!0)},on:function(c,h){return this._listeners[c].push(h),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(c,h){if(this._listeners[c])for(var v=0;v<this._listeners[c].length;v++)this._listeners[c][v].call(this,h)},pipe:function(c){return c.registerPrevious(this)},registerPrevious:function(c){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=c.streamInfo,this.mergeStreamInfo(),this.previous=c;var h=this;return c.on("data",function(v){h.processChunk(v)}),c.on("end",function(){h.end()}),c.on("error",function(v){h.error(v)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var c=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),c=!0),this.previous&&this.previous.resume(),!c},flush:function(){},processChunk:function(c){this.push(c)},withStreamInfo:function(c,h){return this.extraStreamInfo[c]=h,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var c in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,c)&&(this.streamInfo[c]=this.extraStreamInfo[c])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var c="Worker "+this.name;return this.previous?this.previous+" -> "+c:c}},d.exports=l},{}],29:[function(i,d,u){var l=i("../utils"),c=i("./ConvertWorker"),h=i("./GenericWorker"),v=i("../base64"),x=i("../support"),A=i("../external"),_=null;if(x.nodestream)try{_=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function E(C,y){return new A.Promise(function(S,w){var R=[],B=C._internalType,W=C._outputType,K=C._mimeType;C.on("data",function(nt,X){R.push(nt),y&&y(X)}).on("error",function(nt){R=[],w(nt)}).on("end",function(){try{var nt=(function(X,ut,tt){switch(X){case"blob":return l.newBlob(l.transformTo("arraybuffer",ut),tt);case"base64":return v.encode(ut);default:return l.transformTo(X,ut)}})(W,(function(X,ut){var tt,pt=0,Pt=null,$=0;for(tt=0;tt<ut.length;tt++)$+=ut[tt].length;switch(X){case"string":return ut.join("");case"array":return Array.prototype.concat.apply([],ut);case"uint8array":for(Pt=new Uint8Array($),tt=0;tt<ut.length;tt++)Pt.set(ut[tt],pt),pt+=ut[tt].length;return Pt;case"nodebuffer":return Buffer.concat(ut);default:throw new Error("concat : unsupported type '"+X+"'")}})(B,R),K);S(nt)}catch(X){w(X)}R=[]}).resume()})}function g(C,y,S){var w=y;switch(y){case"blob":case"arraybuffer":w="uint8array";break;case"base64":w="string"}try{this._internalType=w,this._outputType=y,this._mimeType=S,l.checkSupport(w),this._worker=C.pipe(new c(w)),C.lock()}catch(R){this._worker=new h("error"),this._worker.error(R)}}g.prototype={accumulate:function(C){return E(this,C)},on:function(C,y){var S=this;return C==="data"?this._worker.on(C,function(w){y.call(S,w.data,w.meta)}):this._worker.on(C,function(){l.delay(y,arguments,S)}),this},resume:function(){return l.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(C){if(l.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new _(this,{objectMode:this._outputType!=="nodebuffer"},C)}},d.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,d,u){if(u.base64=!0,u.array=!0,u.string=!0,u.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",u.nodebuffer=typeof Buffer<"u",u.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")u.blob=!1;else{var l=new ArrayBuffer(0);try{u.blob=new Blob([l],{type:"application/zip"}).size===0}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);c.append(l),u.blob=c.getBlob("application/zip").size===0}catch{u.blob=!1}}}try{u.nodestream=!!i("readable-stream").Readable}catch{u.nodestream=!1}},{"readable-stream":16}],31:[function(i,d,u){for(var l=i("./utils"),c=i("./support"),h=i("./nodejsUtils"),v=i("./stream/GenericWorker"),x=new Array(256),A=0;A<256;A++)x[A]=252<=A?6:248<=A?5:240<=A?4:224<=A?3:192<=A?2:1;x[254]=x[254]=1;function _(){v.call(this,"utf-8 decode"),this.leftOver=null}function E(){v.call(this,"utf-8 encode")}u.utf8encode=function(g){return c.nodebuffer?h.newBufferFrom(g,"utf-8"):(function(C){var y,S,w,R,B,W=C.length,K=0;for(R=0;R<W;R++)(64512&(S=C.charCodeAt(R)))==55296&&R+1<W&&(64512&(w=C.charCodeAt(R+1)))==56320&&(S=65536+(S-55296<<10)+(w-56320),R++),K+=S<128?1:S<2048?2:S<65536?3:4;for(y=c.uint8array?new Uint8Array(K):new Array(K),R=B=0;B<K;R++)(64512&(S=C.charCodeAt(R)))==55296&&R+1<W&&(64512&(w=C.charCodeAt(R+1)))==56320&&(S=65536+(S-55296<<10)+(w-56320),R++),S<128?y[B++]=S:(S<2048?y[B++]=192|S>>>6:(S<65536?y[B++]=224|S>>>12:(y[B++]=240|S>>>18,y[B++]=128|S>>>12&63),y[B++]=128|S>>>6&63),y[B++]=128|63&S);return y})(g)},u.utf8decode=function(g){return c.nodebuffer?l.transformTo("nodebuffer",g).toString("utf-8"):(function(C){var y,S,w,R,B=C.length,W=new Array(2*B);for(y=S=0;y<B;)if((w=C[y++])<128)W[S++]=w;else if(4<(R=x[w]))W[S++]=65533,y+=R-1;else{for(w&=R===2?31:R===3?15:7;1<R&&y<B;)w=w<<6|63&C[y++],R--;1<R?W[S++]=65533:w<65536?W[S++]=w:(w-=65536,W[S++]=55296|w>>10&1023,W[S++]=56320|1023&w)}return W.length!==S&&(W.subarray?W=W.subarray(0,S):W.length=S),l.applyFromCharCode(W)})(g=l.transformTo(c.uint8array?"uint8array":"array",g))},l.inherits(_,v),_.prototype.processChunk=function(g){var C=l.transformTo(c.uint8array?"uint8array":"array",g.data);if(this.leftOver&&this.leftOver.length){if(c.uint8array){var y=C;(C=new Uint8Array(y.length+this.leftOver.length)).set(this.leftOver,0),C.set(y,this.leftOver.length)}else C=this.leftOver.concat(C);this.leftOver=null}var S=(function(R,B){var W;for((B=B||R.length)>R.length&&(B=R.length),W=B-1;0<=W&&(192&R[W])==128;)W--;return W<0||W===0?B:W+x[R[W]]>B?W:B})(C),w=C;S!==C.length&&(c.uint8array?(w=C.subarray(0,S),this.leftOver=C.subarray(S,C.length)):(w=C.slice(0,S),this.leftOver=C.slice(S,C.length))),this.push({data:u.utf8decode(w),meta:g.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:u.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},u.Utf8DecodeWorker=_,l.inherits(E,v),E.prototype.processChunk=function(g){this.push({data:u.utf8encode(g.data),meta:g.meta})},u.Utf8EncodeWorker=E},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,d,u){var l=i("./support"),c=i("./base64"),h=i("./nodejsUtils"),v=i("./external");function x(y){return y}function A(y,S){for(var w=0;w<y.length;++w)S[w]=255&y.charCodeAt(w);return S}i("setimmediate"),u.newBlob=function(y,S){u.checkSupport("blob");try{return new Blob([y],{type:S})}catch{try{var w=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return w.append(y),w.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(y,S,w){var R=[],B=0,W=y.length;if(W<=w)return String.fromCharCode.apply(null,y);for(;B<W;)S==="array"||S==="nodebuffer"?R.push(String.fromCharCode.apply(null,y.slice(B,Math.min(B+w,W)))):R.push(String.fromCharCode.apply(null,y.subarray(B,Math.min(B+w,W)))),B+=w;return R.join("")},stringifyByChar:function(y){for(var S="",w=0;w<y.length;w++)S+=String.fromCharCode(y[w]);return S},applyCanBeUsed:{uint8array:(function(){try{return l.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return l.nodebuffer&&String.fromCharCode.apply(null,h.allocBuffer(1)).length===1}catch{return!1}})()}};function E(y){var S=65536,w=u.getTypeOf(y),R=!0;if(w==="uint8array"?R=_.applyCanBeUsed.uint8array:w==="nodebuffer"&&(R=_.applyCanBeUsed.nodebuffer),R)for(;1<S;)try{return _.stringifyByChunk(y,w,S)}catch{S=Math.floor(S/2)}return _.stringifyByChar(y)}function g(y,S){for(var w=0;w<y.length;w++)S[w]=y[w];return S}u.applyFromCharCode=E;var C={};C.string={string:x,array:function(y){return A(y,new Array(y.length))},arraybuffer:function(y){return C.string.uint8array(y).buffer},uint8array:function(y){return A(y,new Uint8Array(y.length))},nodebuffer:function(y){return A(y,h.allocBuffer(y.length))}},C.array={string:E,array:x,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return h.newBufferFrom(y)}},C.arraybuffer={string:function(y){return E(new Uint8Array(y))},array:function(y){return g(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:x,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return h.newBufferFrom(new Uint8Array(y))}},C.uint8array={string:E,array:function(y){return g(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:x,nodebuffer:function(y){return h.newBufferFrom(y)}},C.nodebuffer={string:E,array:function(y){return g(y,new Array(y.length))},arraybuffer:function(y){return C.nodebuffer.uint8array(y).buffer},uint8array:function(y){return g(y,new Uint8Array(y.length))},nodebuffer:x},u.transformTo=function(y,S){if(S=S||"",!y)return S;u.checkSupport(y);var w=u.getTypeOf(S);return C[w][y](S)},u.resolve=function(y){for(var S=y.split("/"),w=[],R=0;R<S.length;R++){var B=S[R];B==="."||B===""&&R!==0&&R!==S.length-1||(B===".."?w.pop():w.push(B))}return w.join("/")},u.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":l.nodebuffer&&h.isBuffer(y)?"nodebuffer":l.uint8array&&y instanceof Uint8Array?"uint8array":l.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},u.checkSupport=function(y){if(!l[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},u.MAX_VALUE_16BITS=65535,u.MAX_VALUE_32BITS=-1,u.pretty=function(y){var S,w,R="";for(w=0;w<(y||"").length;w++)R+="\\x"+((S=y.charCodeAt(w))<16?"0":"")+S.toString(16).toUpperCase();return R},u.delay=function(y,S,w){setImmediate(function(){y.apply(w||null,S||[])})},u.inherits=function(y,S){function w(){}w.prototype=S.prototype,y.prototype=new w},u.extend=function(){var y,S,w={};for(y=0;y<arguments.length;y++)for(S in arguments[y])Object.prototype.hasOwnProperty.call(arguments[y],S)&&w[S]===void 0&&(w[S]=arguments[y][S]);return w},u.prepareContent=function(y,S,w,R,B){return v.Promise.resolve(S).then(function(W){return l.blob&&(W instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(W))!==-1)&&typeof FileReader<"u"?new v.Promise(function(K,nt){var X=new FileReader;X.onload=function(ut){K(ut.target.result)},X.onerror=function(ut){nt(ut.target.error)},X.readAsArrayBuffer(W)}):W}).then(function(W){var K=u.getTypeOf(W);return K?(K==="arraybuffer"?W=u.transformTo("uint8array",W):K==="string"&&(B?W=c.decode(W):w&&R!==!0&&(W=(function(nt){return A(nt,l.uint8array?new Uint8Array(nt.length):new Array(nt.length))})(W))),W):v.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,d,u){var l=i("./reader/readerFor"),c=i("./utils"),h=i("./signature"),v=i("./zipEntry"),x=i("./support");function A(_){this.files=[],this.loadOptions=_}A.prototype={checkSignature:function(_){if(!this.reader.readAndCheckSignature(_)){this.reader.index-=4;var E=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+c.pretty(E)+", expected "+c.pretty(_)+")")}},isSignature:function(_,E){var g=this.reader.index;this.reader.setIndex(_);var C=this.reader.readString(4)===E;return this.reader.setIndex(g),C},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var _=this.reader.readData(this.zipCommentLength),E=x.uint8array?"uint8array":"array",g=c.transformTo(E,_);this.zipComment=this.loadOptions.decodeFileName(g)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var _,E,g,C=this.zip64EndOfCentralSize-44;0<C;)_=this.reader.readInt(2),E=this.reader.readInt(4),g=this.reader.readData(E),this.zip64ExtensibleData[_]={id:_,length:E,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var _,E;for(_=0;_<this.files.length;_++)E=this.files[_],this.reader.setIndex(E.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),E.readLocalPart(this.reader),E.handleUTF8(),E.processAttributes()},readCentralDir:function(){var _;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(h.CENTRAL_FILE_HEADER);)(_=new v({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(_);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var _=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(_<0)throw this.isSignature(0,h.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(_);var E=_;if(this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===c.MAX_VALUE_16BITS||this.diskWithCentralDirStart===c.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===c.MAX_VALUE_16BITS||this.centralDirRecords===c.MAX_VALUE_16BITS||this.centralDirSize===c.MAX_VALUE_32BITS||this.centralDirOffset===c.MAX_VALUE_32BITS){if(this.zip64=!0,(_=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(_),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,h.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var g=this.centralDirOffset+this.centralDirSize;this.zip64&&(g+=20,g+=12+this.zip64EndOfCentralSize);var C=E-g;if(0<C)this.isSignature(E,h.CENTRAL_FILE_HEADER)||(this.reader.zero=C);else if(C<0)throw new Error("Corrupted zip: missing "+Math.abs(C)+" bytes.")},prepareReader:function(_){this.reader=l(_)},load:function(_){this.prepareReader(_),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},d.exports=A},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,d,u){var l=i("./reader/readerFor"),c=i("./utils"),h=i("./compressedObject"),v=i("./crc32"),x=i("./utf8"),A=i("./compressions"),_=i("./support");function E(g,C){this.options=g,this.loadOptions=C}E.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(g){var C,y;if(g.skip(22),this.fileNameLength=g.readInt(2),y=g.readInt(2),this.fileName=g.readData(this.fileNameLength),g.skip(y),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((C=(function(S){for(var w in A)if(Object.prototype.hasOwnProperty.call(A,w)&&A[w].magic===S)return A[w];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+c.pretty(this.compressionMethod)+" unknown (inner file : "+c.transformTo("string",this.fileName)+")");this.decompressed=new h(this.compressedSize,this.uncompressedSize,this.crc32,C,g.readData(this.compressedSize))},readCentralPart:function(g){this.versionMadeBy=g.readInt(2),g.skip(2),this.bitFlag=g.readInt(2),this.compressionMethod=g.readString(2),this.date=g.readDate(),this.crc32=g.readInt(4),this.compressedSize=g.readInt(4),this.uncompressedSize=g.readInt(4);var C=g.readInt(2);if(this.extraFieldsLength=g.readInt(2),this.fileCommentLength=g.readInt(2),this.diskNumberStart=g.readInt(2),this.internalFileAttributes=g.readInt(2),this.externalFileAttributes=g.readInt(4),this.localHeaderOffset=g.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");g.skip(C),this.readExtraFields(g),this.parseZIP64ExtraField(g),this.fileComment=g.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var g=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),g==0&&(this.dosPermissions=63&this.externalFileAttributes),g==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var g=l(this.extraFields[1].value);this.uncompressedSize===c.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===c.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===c.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===c.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(g){var C,y,S,w=g.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});g.index+4<w;)C=g.readInt(2),y=g.readInt(2),S=g.readData(y),this.extraFields[C]={id:C,length:y,value:S};g.setIndex(w)},handleUTF8:function(){var g=_.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=x.utf8decode(this.fileName),this.fileCommentStr=x.utf8decode(this.fileComment);else{var C=this.findExtraFieldUnicodePath();if(C!==null)this.fileNameStr=C;else{var y=c.transformTo(g,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(y)}var S=this.findExtraFieldUnicodeComment();if(S!==null)this.fileCommentStr=S;else{var w=c.transformTo(g,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(w)}}},findExtraFieldUnicodePath:function(){var g=this.extraFields[28789];if(g){var C=l(g.value);return C.readInt(1)!==1||v(this.fileName)!==C.readInt(4)?null:x.utf8decode(C.readData(g.length-5))}return null},findExtraFieldUnicodeComment:function(){var g=this.extraFields[25461];if(g){var C=l(g.value);return C.readInt(1)!==1||v(this.fileComment)!==C.readInt(4)?null:x.utf8decode(C.readData(g.length-5))}return null}},d.exports=E},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,d,u){function l(C,y,S){this.name=C,this.dir=S.dir,this.date=S.date,this.comment=S.comment,this.unixPermissions=S.unixPermissions,this.dosPermissions=S.dosPermissions,this._data=y,this._dataBinary=S.binary,this.options={compression:S.compression,compressionOptions:S.compressionOptions}}var c=i("./stream/StreamHelper"),h=i("./stream/DataWorker"),v=i("./utf8"),x=i("./compressedObject"),A=i("./stream/GenericWorker");l.prototype={internalStream:function(C){var y=null,S="string";try{if(!C)throw new Error("No output type specified.");var w=(S=C.toLowerCase())==="string"||S==="text";S!=="binarystring"&&S!=="text"||(S="string"),y=this._decompressWorker();var R=!this._dataBinary;R&&!w&&(y=y.pipe(new v.Utf8EncodeWorker)),!R&&w&&(y=y.pipe(new v.Utf8DecodeWorker))}catch(B){(y=new A("error")).error(B)}return new c(y,S,"")},async:function(C,y){return this.internalStream(C).accumulate(y)},nodeStream:function(C,y){return this.internalStream(C||"nodebuffer").toNodejsStream(y)},_compressWorker:function(C,y){if(this._data instanceof x&&this._data.compression.magic===C.magic)return this._data.getCompressedWorker();var S=this._decompressWorker();return this._dataBinary||(S=S.pipe(new v.Utf8EncodeWorker)),x.createWorkerFrom(S,C,y)},_decompressWorker:function(){return this._data instanceof x?this._data.getContentWorker():this._data instanceof A?this._data:new h(this._data)}};for(var _=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],E=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},g=0;g<_.length;g++)l.prototype[_[g]]=E;d.exports=l},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,d,u){(function(l){var c,h,v=l.MutationObserver||l.WebKitMutationObserver;if(v){var x=0,A=new v(C),_=l.document.createTextNode("");A.observe(_,{characterData:!0}),c=function(){_.data=x=++x%2}}else if(l.setImmediate||l.MessageChannel===void 0)c="document"in l&&"onreadystatechange"in l.document.createElement("script")?function(){var y=l.document.createElement("script");y.onreadystatechange=function(){C(),y.onreadystatechange=null,y.parentNode.removeChild(y),y=null},l.document.documentElement.appendChild(y)}:function(){setTimeout(C,0)};else{var E=new l.MessageChannel;E.port1.onmessage=C,c=function(){E.port2.postMessage(0)}}var g=[];function C(){var y,S;h=!0;for(var w=g.length;w;){for(S=g,g=[],y=-1;++y<w;)S[y]();w=g.length}h=!1}d.exports=function(y){g.push(y)!==1||h||c()}}).call(this,typeof Se<"u"?Se:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,d,u){var l=i("immediate");function c(){}var h={},v=["REJECTED"],x=["FULFILLED"],A=["PENDING"];function _(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=A,this.queue=[],this.outcome=void 0,w!==c&&y(this,w)}function E(w,R,B){this.promise=w,typeof R=="function"&&(this.onFulfilled=R,this.callFulfilled=this.otherCallFulfilled),typeof B=="function"&&(this.onRejected=B,this.callRejected=this.otherCallRejected)}function g(w,R,B){l(function(){var W;try{W=R(B)}catch(K){return h.reject(w,K)}W===w?h.reject(w,new TypeError("Cannot resolve promise with itself")):h.resolve(w,W)})}function C(w){var R=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof R=="function")return function(){R.apply(w,arguments)}}function y(w,R){var B=!1;function W(X){B||(B=!0,h.reject(w,X))}function K(X){B||(B=!0,h.resolve(w,X))}var nt=S(function(){R(K,W)});nt.status==="error"&&W(nt.value)}function S(w,R){var B={};try{B.value=w(R),B.status="success"}catch(W){B.status="error",B.value=W}return B}(d.exports=_).prototype.finally=function(w){if(typeof w!="function")return this;var R=this.constructor;return this.then(function(B){return R.resolve(w()).then(function(){return B})},function(B){return R.resolve(w()).then(function(){throw B})})},_.prototype.catch=function(w){return this.then(null,w)},_.prototype.then=function(w,R){if(typeof w!="function"&&this.state===x||typeof R!="function"&&this.state===v)return this;var B=new this.constructor(c);return this.state!==A?g(B,this.state===x?w:R,this.outcome):this.queue.push(new E(B,w,R)),B},E.prototype.callFulfilled=function(w){h.resolve(this.promise,w)},E.prototype.otherCallFulfilled=function(w){g(this.promise,this.onFulfilled,w)},E.prototype.callRejected=function(w){h.reject(this.promise,w)},E.prototype.otherCallRejected=function(w){g(this.promise,this.onRejected,w)},h.resolve=function(w,R){var B=S(C,R);if(B.status==="error")return h.reject(w,B.value);var W=B.value;if(W)y(w,W);else{w.state=x,w.outcome=R;for(var K=-1,nt=w.queue.length;++K<nt;)w.queue[K].callFulfilled(R)}return w},h.reject=function(w,R){w.state=v,w.outcome=R;for(var B=-1,W=w.queue.length;++B<W;)w.queue[B].callRejected(R);return w},_.resolve=function(w){return w instanceof this?w:h.resolve(new this(c),w)},_.reject=function(w){var R=new this(c);return h.reject(R,w)},_.all=function(w){var R=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=w.length,W=!1;if(!B)return this.resolve([]);for(var K=new Array(B),nt=0,X=-1,ut=new this(c);++X<B;)tt(w[X],X);return ut;function tt(pt,Pt){R.resolve(pt).then(function($){K[Pt]=$,++nt!==B||W||(W=!0,h.resolve(ut,K))},function($){W||(W=!0,h.reject(ut,$))})}},_.race=function(w){var R=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=w.length,W=!1;if(!B)return this.resolve([]);for(var K=-1,nt=new this(c);++K<B;)X=w[K],R.resolve(X).then(function(ut){W||(W=!0,h.resolve(nt,ut))},function(ut){W||(W=!0,h.reject(nt,ut))});var X;return nt}},{immediate:36}],38:[function(i,d,u){var l={};(0,i("./lib/utils/common").assign)(l,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),d.exports=l},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,d,u){var l=i("./zlib/deflate"),c=i("./utils/common"),h=i("./utils/strings"),v=i("./zlib/messages"),x=i("./zlib/zstream"),A=Object.prototype.toString,_=0,E=-1,g=0,C=8;function y(w){if(!(this instanceof y))return new y(w);this.options=c.assign({level:E,method:C,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},w||{});var R=this.options;R.raw&&0<R.windowBits?R.windowBits=-R.windowBits:R.gzip&&0<R.windowBits&&R.windowBits<16&&(R.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new x,this.strm.avail_out=0;var B=l.deflateInit2(this.strm,R.level,R.method,R.windowBits,R.memLevel,R.strategy);if(B!==_)throw new Error(v[B]);if(R.header&&l.deflateSetHeader(this.strm,R.header),R.dictionary){var W;if(W=typeof R.dictionary=="string"?h.string2buf(R.dictionary):A.call(R.dictionary)==="[object ArrayBuffer]"?new Uint8Array(R.dictionary):R.dictionary,(B=l.deflateSetDictionary(this.strm,W))!==_)throw new Error(v[B]);this._dict_set=!0}}function S(w,R){var B=new y(R);if(B.push(w,!0),B.err)throw B.msg||v[B.err];return B.result}y.prototype.push=function(w,R){var B,W,K=this.strm,nt=this.options.chunkSize;if(this.ended)return!1;W=R===~~R?R:R===!0?4:0,typeof w=="string"?K.input=h.string2buf(w):A.call(w)==="[object ArrayBuffer]"?K.input=new Uint8Array(w):K.input=w,K.next_in=0,K.avail_in=K.input.length;do{if(K.avail_out===0&&(K.output=new c.Buf8(nt),K.next_out=0,K.avail_out=nt),(B=l.deflate(K,W))!==1&&B!==_)return this.onEnd(B),!(this.ended=!0);K.avail_out!==0&&(K.avail_in!==0||W!==4&&W!==2)||(this.options.to==="string"?this.onData(h.buf2binstring(c.shrinkBuf(K.output,K.next_out))):this.onData(c.shrinkBuf(K.output,K.next_out)))}while((0<K.avail_in||K.avail_out===0)&&B!==1);return W===4?(B=l.deflateEnd(this.strm),this.onEnd(B),this.ended=!0,B===_):W!==2||(this.onEnd(_),!(K.avail_out=0))},y.prototype.onData=function(w){this.chunks.push(w)},y.prototype.onEnd=function(w){w===_&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=w,this.msg=this.strm.msg},u.Deflate=y,u.deflate=S,u.deflateRaw=function(w,R){return(R=R||{}).raw=!0,S(w,R)},u.gzip=function(w,R){return(R=R||{}).gzip=!0,S(w,R)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,d,u){var l=i("./zlib/inflate"),c=i("./utils/common"),h=i("./utils/strings"),v=i("./zlib/constants"),x=i("./zlib/messages"),A=i("./zlib/zstream"),_=i("./zlib/gzheader"),E=Object.prototype.toString;function g(y){if(!(this instanceof g))return new g(y);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},y||{});var S=this.options;S.raw&&0<=S.windowBits&&S.windowBits<16&&(S.windowBits=-S.windowBits,S.windowBits===0&&(S.windowBits=-15)),!(0<=S.windowBits&&S.windowBits<16)||y&&y.windowBits||(S.windowBits+=32),15<S.windowBits&&S.windowBits<48&&(15&S.windowBits)==0&&(S.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new A,this.strm.avail_out=0;var w=l.inflateInit2(this.strm,S.windowBits);if(w!==v.Z_OK)throw new Error(x[w]);this.header=new _,l.inflateGetHeader(this.strm,this.header)}function C(y,S){var w=new g(S);if(w.push(y,!0),w.err)throw w.msg||x[w.err];return w.result}g.prototype.push=function(y,S){var w,R,B,W,K,nt,X=this.strm,ut=this.options.chunkSize,tt=this.options.dictionary,pt=!1;if(this.ended)return!1;R=S===~~S?S:S===!0?v.Z_FINISH:v.Z_NO_FLUSH,typeof y=="string"?X.input=h.binstring2buf(y):E.call(y)==="[object ArrayBuffer]"?X.input=new Uint8Array(y):X.input=y,X.next_in=0,X.avail_in=X.input.length;do{if(X.avail_out===0&&(X.output=new c.Buf8(ut),X.next_out=0,X.avail_out=ut),(w=l.inflate(X,v.Z_NO_FLUSH))===v.Z_NEED_DICT&&tt&&(nt=typeof tt=="string"?h.string2buf(tt):E.call(tt)==="[object ArrayBuffer]"?new Uint8Array(tt):tt,w=l.inflateSetDictionary(this.strm,nt)),w===v.Z_BUF_ERROR&&pt===!0&&(w=v.Z_OK,pt=!1),w!==v.Z_STREAM_END&&w!==v.Z_OK)return this.onEnd(w),!(this.ended=!0);X.next_out&&(X.avail_out!==0&&w!==v.Z_STREAM_END&&(X.avail_in!==0||R!==v.Z_FINISH&&R!==v.Z_SYNC_FLUSH)||(this.options.to==="string"?(B=h.utf8border(X.output,X.next_out),W=X.next_out-B,K=h.buf2string(X.output,B),X.next_out=W,X.avail_out=ut-W,W&&c.arraySet(X.output,X.output,B,W,0),this.onData(K)):this.onData(c.shrinkBuf(X.output,X.next_out)))),X.avail_in===0&&X.avail_out===0&&(pt=!0)}while((0<X.avail_in||X.avail_out===0)&&w!==v.Z_STREAM_END);return w===v.Z_STREAM_END&&(R=v.Z_FINISH),R===v.Z_FINISH?(w=l.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===v.Z_OK):R!==v.Z_SYNC_FLUSH||(this.onEnd(v.Z_OK),!(X.avail_out=0))},g.prototype.onData=function(y){this.chunks.push(y)},g.prototype.onEnd=function(y){y===v.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},u.Inflate=g,u.inflate=C,u.inflateRaw=function(y,S){return(S=S||{}).raw=!0,C(y,S)},u.ungzip=C},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,d,u){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";u.assign=function(v){for(var x=Array.prototype.slice.call(arguments,1);x.length;){var A=x.shift();if(A){if(typeof A!="object")throw new TypeError(A+"must be non-object");for(var _ in A)A.hasOwnProperty(_)&&(v[_]=A[_])}}return v},u.shrinkBuf=function(v,x){return v.length===x?v:v.subarray?v.subarray(0,x):(v.length=x,v)};var c={arraySet:function(v,x,A,_,E){if(x.subarray&&v.subarray)v.set(x.subarray(A,A+_),E);else for(var g=0;g<_;g++)v[E+g]=x[A+g]},flattenChunks:function(v){var x,A,_,E,g,C;for(x=_=0,A=v.length;x<A;x++)_+=v[x].length;for(C=new Uint8Array(_),x=E=0,A=v.length;x<A;x++)g=v[x],C.set(g,E),E+=g.length;return C}},h={arraySet:function(v,x,A,_,E){for(var g=0;g<_;g++)v[E+g]=x[A+g]},flattenChunks:function(v){return[].concat.apply([],v)}};u.setTyped=function(v){v?(u.Buf8=Uint8Array,u.Buf16=Uint16Array,u.Buf32=Int32Array,u.assign(u,c)):(u.Buf8=Array,u.Buf16=Array,u.Buf32=Array,u.assign(u,h))},u.setTyped(l)},{}],42:[function(i,d,u){var l=i("./common"),c=!0,h=!0;try{String.fromCharCode.apply(null,[0])}catch{c=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{h=!1}for(var v=new l.Buf8(256),x=0;x<256;x++)v[x]=252<=x?6:248<=x?5:240<=x?4:224<=x?3:192<=x?2:1;function A(_,E){if(E<65537&&(_.subarray&&h||!_.subarray&&c))return String.fromCharCode.apply(null,l.shrinkBuf(_,E));for(var g="",C=0;C<E;C++)g+=String.fromCharCode(_[C]);return g}v[254]=v[254]=1,u.string2buf=function(_){var E,g,C,y,S,w=_.length,R=0;for(y=0;y<w;y++)(64512&(g=_.charCodeAt(y)))==55296&&y+1<w&&(64512&(C=_.charCodeAt(y+1)))==56320&&(g=65536+(g-55296<<10)+(C-56320),y++),R+=g<128?1:g<2048?2:g<65536?3:4;for(E=new l.Buf8(R),y=S=0;S<R;y++)(64512&(g=_.charCodeAt(y)))==55296&&y+1<w&&(64512&(C=_.charCodeAt(y+1)))==56320&&(g=65536+(g-55296<<10)+(C-56320),y++),g<128?E[S++]=g:(g<2048?E[S++]=192|g>>>6:(g<65536?E[S++]=224|g>>>12:(E[S++]=240|g>>>18,E[S++]=128|g>>>12&63),E[S++]=128|g>>>6&63),E[S++]=128|63&g);return E},u.buf2binstring=function(_){return A(_,_.length)},u.binstring2buf=function(_){for(var E=new l.Buf8(_.length),g=0,C=E.length;g<C;g++)E[g]=_.charCodeAt(g);return E},u.buf2string=function(_,E){var g,C,y,S,w=E||_.length,R=new Array(2*w);for(g=C=0;g<w;)if((y=_[g++])<128)R[C++]=y;else if(4<(S=v[y]))R[C++]=65533,g+=S-1;else{for(y&=S===2?31:S===3?15:7;1<S&&g<w;)y=y<<6|63&_[g++],S--;1<S?R[C++]=65533:y<65536?R[C++]=y:(y-=65536,R[C++]=55296|y>>10&1023,R[C++]=56320|1023&y)}return A(R,C)},u.utf8border=function(_,E){var g;for((E=E||_.length)>_.length&&(E=_.length),g=E-1;0<=g&&(192&_[g])==128;)g--;return g<0||g===0?E:g+v[_[g]]>E?g:E}},{"./common":41}],43:[function(i,d,u){d.exports=function(l,c,h,v){for(var x=65535&l|0,A=l>>>16&65535|0,_=0;h!==0;){for(h-=_=2e3<h?2e3:h;A=A+(x=x+c[v++]|0)|0,--_;);x%=65521,A%=65521}return x|A<<16|0}},{}],44:[function(i,d,u){d.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,d,u){var l=(function(){for(var c,h=[],v=0;v<256;v++){c=v;for(var x=0;x<8;x++)c=1&c?3988292384^c>>>1:c>>>1;h[v]=c}return h})();d.exports=function(c,h,v,x){var A=l,_=x+v;c^=-1;for(var E=x;E<_;E++)c=c>>>8^A[255&(c^h[E])];return-1^c}},{}],46:[function(i,d,u){var l,c=i("../utils/common"),h=i("./trees"),v=i("./adler32"),x=i("./crc32"),A=i("./messages"),_=0,E=4,g=0,C=-2,y=-1,S=4,w=2,R=8,B=9,W=286,K=30,nt=19,X=2*W+1,ut=15,tt=3,pt=258,Pt=pt+tt+1,$=42,Q=113,m=1,it=2,Rt=3,lt=4;function Tt(s,et){return s.msg=A[et],et}function st(s){return(s<<1)-(4<s?9:0)}function Ot(s){for(var et=s.length;0<=--et;)s[et]=0}function Y(s){var et=s.state,G=et.pending;G>s.avail_out&&(G=s.avail_out),G!==0&&(c.arraySet(s.output,et.pending_buf,et.pending_out,G,s.next_out),s.next_out+=G,et.pending_out+=G,s.total_out+=G,s.avail_out-=G,et.pending-=G,et.pending===0&&(et.pending_out=0))}function V(s,et){h._tr_flush_block(s,0<=s.block_start?s.block_start:-1,s.strstart-s.block_start,et),s.block_start=s.strstart,Y(s.strm)}function Et(s,et){s.pending_buf[s.pending++]=et}function xt(s,et){s.pending_buf[s.pending++]=et>>>8&255,s.pending_buf[s.pending++]=255&et}function gt(s,et){var G,O,k=s.max_chain_length,N=s.strstart,ot=s.prev_length,at=s.nice_match,H=s.strstart>s.w_size-Pt?s.strstart-(s.w_size-Pt):0,ct=s.window,kt=s.w_mask,dt=s.prev,At=s.strstart+pt,Nt=ct[N+ot-1],Bt=ct[N+ot];s.prev_length>=s.good_match&&(k>>=2),at>s.lookahead&&(at=s.lookahead);do if(ct[(G=et)+ot]===Bt&&ct[G+ot-1]===Nt&&ct[G]===ct[N]&&ct[++G]===ct[N+1]){N+=2,G++;do;while(ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&N<At);if(O=pt-(At-N),N=At-pt,ot<O){if(s.match_start=et,at<=(ot=O))break;Nt=ct[N+ot-1],Bt=ct[N+ot]}}while((et=dt[et&kt])>H&&--k!=0);return ot<=s.lookahead?ot:s.lookahead}function Lt(s){var et,G,O,k,N,ot,at,H,ct,kt,dt=s.w_size;do{if(k=s.window_size-s.lookahead-s.strstart,s.strstart>=dt+(dt-Pt)){for(c.arraySet(s.window,s.window,dt,dt,0),s.match_start-=dt,s.strstart-=dt,s.block_start-=dt,et=G=s.hash_size;O=s.head[--et],s.head[et]=dt<=O?O-dt:0,--G;);for(et=G=dt;O=s.prev[--et],s.prev[et]=dt<=O?O-dt:0,--G;);k+=dt}if(s.strm.avail_in===0)break;if(ot=s.strm,at=s.window,H=s.strstart+s.lookahead,ct=k,kt=void 0,kt=ot.avail_in,ct<kt&&(kt=ct),G=kt===0?0:(ot.avail_in-=kt,c.arraySet(at,ot.input,ot.next_in,kt,H),ot.state.wrap===1?ot.adler=v(ot.adler,at,kt,H):ot.state.wrap===2&&(ot.adler=x(ot.adler,at,kt,H)),ot.next_in+=kt,ot.total_in+=kt,kt),s.lookahead+=G,s.lookahead+s.insert>=tt)for(N=s.strstart-s.insert,s.ins_h=s.window[N],s.ins_h=(s.ins_h<<s.hash_shift^s.window[N+1])&s.hash_mask;s.insert&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[N+tt-1])&s.hash_mask,s.prev[N&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=N,N++,s.insert--,!(s.lookahead+s.insert<tt)););}while(s.lookahead<Pt&&s.strm.avail_in!==0)}function Gt(s,et){for(var G,O;;){if(s.lookahead<Pt){if(Lt(s),s.lookahead<Pt&&et===_)return m;if(s.lookahead===0)break}if(G=0,s.lookahead>=tt&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+tt-1])&s.hash_mask,G=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),G!==0&&s.strstart-G<=s.w_size-Pt&&(s.match_length=gt(s,G)),s.match_length>=tt)if(O=h._tr_tally(s,s.strstart-s.match_start,s.match_length-tt),s.lookahead-=s.match_length,s.match_length<=s.max_lazy_match&&s.lookahead>=tt){for(s.match_length--;s.strstart++,s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+tt-1])&s.hash_mask,G=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart,--s.match_length!=0;);s.strstart++}else s.strstart+=s.match_length,s.match_length=0,s.ins_h=s.window[s.strstart],s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+1])&s.hash_mask;else O=h._tr_tally(s,0,s.window[s.strstart]),s.lookahead--,s.strstart++;if(O&&(V(s,!1),s.strm.avail_out===0))return m}return s.insert=s.strstart<tt-1?s.strstart:tt-1,et===E?(V(s,!0),s.strm.avail_out===0?Rt:lt):s.last_lit&&(V(s,!1),s.strm.avail_out===0)?m:it}function Mt(s,et){for(var G,O,k;;){if(s.lookahead<Pt){if(Lt(s),s.lookahead<Pt&&et===_)return m;if(s.lookahead===0)break}if(G=0,s.lookahead>=tt&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+tt-1])&s.hash_mask,G=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),s.prev_length=s.match_length,s.prev_match=s.match_start,s.match_length=tt-1,G!==0&&s.prev_length<s.max_lazy_match&&s.strstart-G<=s.w_size-Pt&&(s.match_length=gt(s,G),s.match_length<=5&&(s.strategy===1||s.match_length===tt&&4096<s.strstart-s.match_start)&&(s.match_length=tt-1)),s.prev_length>=tt&&s.match_length<=s.prev_length){for(k=s.strstart+s.lookahead-tt,O=h._tr_tally(s,s.strstart-1-s.prev_match,s.prev_length-tt),s.lookahead-=s.prev_length-1,s.prev_length-=2;++s.strstart<=k&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+tt-1])&s.hash_mask,G=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),--s.prev_length!=0;);if(s.match_available=0,s.match_length=tt-1,s.strstart++,O&&(V(s,!1),s.strm.avail_out===0))return m}else if(s.match_available){if((O=h._tr_tally(s,0,s.window[s.strstart-1]))&&V(s,!1),s.strstart++,s.lookahead--,s.strm.avail_out===0)return m}else s.match_available=1,s.strstart++,s.lookahead--}return s.match_available&&(O=h._tr_tally(s,0,s.window[s.strstart-1]),s.match_available=0),s.insert=s.strstart<tt-1?s.strstart:tt-1,et===E?(V(s,!0),s.strm.avail_out===0?Rt:lt):s.last_lit&&(V(s,!1),s.strm.avail_out===0)?m:it}function mt(s,et,G,O,k){this.good_length=s,this.max_lazy=et,this.nice_length=G,this.max_chain=O,this.func=k}function Zt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=R,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*X),this.dyn_dtree=new c.Buf16(2*(2*K+1)),this.bl_tree=new c.Buf16(2*(2*nt+1)),Ot(this.dyn_ltree),Ot(this.dyn_dtree),Ot(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(ut+1),this.heap=new c.Buf16(2*W+1),Ot(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*W+1),Ot(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Kt(s){var et;return s&&s.state?(s.total_in=s.total_out=0,s.data_type=w,(et=s.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?$:Q,s.adler=et.wrap===2?0:1,et.last_flush=_,h._tr_init(et),g):Tt(s,C)}function Dt(s){var et=Kt(s);return et===g&&(function(G){G.window_size=2*G.w_size,Ot(G.head),G.max_lazy_match=l[G.level].max_lazy,G.good_match=l[G.level].good_length,G.nice_match=l[G.level].nice_length,G.max_chain_length=l[G.level].max_chain,G.strstart=0,G.block_start=0,G.lookahead=0,G.insert=0,G.match_length=G.prev_length=tt-1,G.match_available=0,G.ins_h=0})(s.state),et}function re(s,et,G,O,k,N){if(!s)return C;var ot=1;if(et===y&&(et=6),O<0?(ot=0,O=-O):15<O&&(ot=2,O-=16),k<1||B<k||G!==R||O<8||15<O||et<0||9<et||N<0||S<N)return Tt(s,C);O===8&&(O=9);var at=new Zt;return(s.state=at).strm=s,at.wrap=ot,at.gzhead=null,at.w_bits=O,at.w_size=1<<at.w_bits,at.w_mask=at.w_size-1,at.hash_bits=k+7,at.hash_size=1<<at.hash_bits,at.hash_mask=at.hash_size-1,at.hash_shift=~~((at.hash_bits+tt-1)/tt),at.window=new c.Buf8(2*at.w_size),at.head=new c.Buf16(at.hash_size),at.prev=new c.Buf16(at.w_size),at.lit_bufsize=1<<k+6,at.pending_buf_size=4*at.lit_bufsize,at.pending_buf=new c.Buf8(at.pending_buf_size),at.d_buf=1*at.lit_bufsize,at.l_buf=3*at.lit_bufsize,at.level=et,at.strategy=N,at.method=G,Dt(s)}l=[new mt(0,0,0,0,function(s,et){var G=65535;for(G>s.pending_buf_size-5&&(G=s.pending_buf_size-5);;){if(s.lookahead<=1){if(Lt(s),s.lookahead===0&&et===_)return m;if(s.lookahead===0)break}s.strstart+=s.lookahead,s.lookahead=0;var O=s.block_start+G;if((s.strstart===0||s.strstart>=O)&&(s.lookahead=s.strstart-O,s.strstart=O,V(s,!1),s.strm.avail_out===0)||s.strstart-s.block_start>=s.w_size-Pt&&(V(s,!1),s.strm.avail_out===0))return m}return s.insert=0,et===E?(V(s,!0),s.strm.avail_out===0?Rt:lt):(s.strstart>s.block_start&&(V(s,!1),s.strm.avail_out),m)}),new mt(4,4,8,4,Gt),new mt(4,5,16,8,Gt),new mt(4,6,32,32,Gt),new mt(4,4,16,16,Mt),new mt(8,16,32,32,Mt),new mt(8,16,128,128,Mt),new mt(8,32,128,256,Mt),new mt(32,128,258,1024,Mt),new mt(32,258,258,4096,Mt)],u.deflateInit=function(s,et){return re(s,et,R,15,8,0)},u.deflateInit2=re,u.deflateReset=Dt,u.deflateResetKeep=Kt,u.deflateSetHeader=function(s,et){return s&&s.state?s.state.wrap!==2?C:(s.state.gzhead=et,g):C},u.deflate=function(s,et){var G,O,k,N;if(!s||!s.state||5<et||et<0)return s?Tt(s,C):C;if(O=s.state,!s.output||!s.input&&s.avail_in!==0||O.status===666&&et!==E)return Tt(s,s.avail_out===0?-5:C);if(O.strm=s,G=O.last_flush,O.last_flush=et,O.status===$)if(O.wrap===2)s.adler=0,Et(O,31),Et(O,139),Et(O,8),O.gzhead?(Et(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),Et(O,255&O.gzhead.time),Et(O,O.gzhead.time>>8&255),Et(O,O.gzhead.time>>16&255),Et(O,O.gzhead.time>>24&255),Et(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Et(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(Et(O,255&O.gzhead.extra.length),Et(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(s.adler=x(s.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(Et(O,0),Et(O,0),Et(O,0),Et(O,0),Et(O,0),Et(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Et(O,3),O.status=Q);else{var ot=R+(O.w_bits-8<<4)<<8;ot|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(ot|=32),ot+=31-ot%31,O.status=Q,xt(O,ot),O.strstart!==0&&(xt(O,s.adler>>>16),xt(O,65535&s.adler)),s.adler=1}if(O.status===69)if(O.gzhead.extra){for(k=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>k&&(s.adler=x(s.adler,O.pending_buf,O.pending-k,k)),Y(s),k=O.pending,O.pending!==O.pending_buf_size));)Et(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>k&&(s.adler=x(s.adler,O.pending_buf,O.pending-k,k)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){k=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>k&&(s.adler=x(s.adler,O.pending_buf,O.pending-k,k)),Y(s),k=O.pending,O.pending===O.pending_buf_size)){N=1;break}N=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,Et(O,N)}while(N!==0);O.gzhead.hcrc&&O.pending>k&&(s.adler=x(s.adler,O.pending_buf,O.pending-k,k)),N===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){k=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>k&&(s.adler=x(s.adler,O.pending_buf,O.pending-k,k)),Y(s),k=O.pending,O.pending===O.pending_buf_size)){N=1;break}N=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,Et(O,N)}while(N!==0);O.gzhead.hcrc&&O.pending>k&&(s.adler=x(s.adler,O.pending_buf,O.pending-k,k)),N===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&Y(s),O.pending+2<=O.pending_buf_size&&(Et(O,255&s.adler),Et(O,s.adler>>8&255),s.adler=0,O.status=Q)):O.status=Q),O.pending!==0){if(Y(s),s.avail_out===0)return O.last_flush=-1,g}else if(s.avail_in===0&&st(et)<=st(G)&&et!==E)return Tt(s,-5);if(O.status===666&&s.avail_in!==0)return Tt(s,-5);if(s.avail_in!==0||O.lookahead!==0||et!==_&&O.status!==666){var at=O.strategy===2?(function(H,ct){for(var kt;;){if(H.lookahead===0&&(Lt(H),H.lookahead===0)){if(ct===_)return m;break}if(H.match_length=0,kt=h._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++,kt&&(V(H,!1),H.strm.avail_out===0))return m}return H.insert=0,ct===E?(V(H,!0),H.strm.avail_out===0?Rt:lt):H.last_lit&&(V(H,!1),H.strm.avail_out===0)?m:it})(O,et):O.strategy===3?(function(H,ct){for(var kt,dt,At,Nt,Bt=H.window;;){if(H.lookahead<=pt){if(Lt(H),H.lookahead<=pt&&ct===_)return m;if(H.lookahead===0)break}if(H.match_length=0,H.lookahead>=tt&&0<H.strstart&&(dt=Bt[At=H.strstart-1])===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]){Nt=H.strstart+pt;do;while(dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&At<Nt);H.match_length=pt-(Nt-At),H.match_length>H.lookahead&&(H.match_length=H.lookahead)}if(H.match_length>=tt?(kt=h._tr_tally(H,1,H.match_length-tt),H.lookahead-=H.match_length,H.strstart+=H.match_length,H.match_length=0):(kt=h._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++),kt&&(V(H,!1),H.strm.avail_out===0))return m}return H.insert=0,ct===E?(V(H,!0),H.strm.avail_out===0?Rt:lt):H.last_lit&&(V(H,!1),H.strm.avail_out===0)?m:it})(O,et):l[O.level].func(O,et);if(at!==Rt&&at!==lt||(O.status=666),at===m||at===Rt)return s.avail_out===0&&(O.last_flush=-1),g;if(at===it&&(et===1?h._tr_align(O):et!==5&&(h._tr_stored_block(O,0,0,!1),et===3&&(Ot(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),Y(s),s.avail_out===0))return O.last_flush=-1,g}return et!==E?g:O.wrap<=0?1:(O.wrap===2?(Et(O,255&s.adler),Et(O,s.adler>>8&255),Et(O,s.adler>>16&255),Et(O,s.adler>>24&255),Et(O,255&s.total_in),Et(O,s.total_in>>8&255),Et(O,s.total_in>>16&255),Et(O,s.total_in>>24&255)):(xt(O,s.adler>>>16),xt(O,65535&s.adler)),Y(s),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?g:1)},u.deflateEnd=function(s){var et;return s&&s.state?(et=s.state.status)!==$&&et!==69&&et!==73&&et!==91&&et!==103&&et!==Q&&et!==666?Tt(s,C):(s.state=null,et===Q?Tt(s,-3):g):C},u.deflateSetDictionary=function(s,et){var G,O,k,N,ot,at,H,ct,kt=et.length;if(!s||!s.state||(N=(G=s.state).wrap)===2||N===1&&G.status!==$||G.lookahead)return C;for(N===1&&(s.adler=v(s.adler,et,kt,0)),G.wrap=0,kt>=G.w_size&&(N===0&&(Ot(G.head),G.strstart=0,G.block_start=0,G.insert=0),ct=new c.Buf8(G.w_size),c.arraySet(ct,et,kt-G.w_size,G.w_size,0),et=ct,kt=G.w_size),ot=s.avail_in,at=s.next_in,H=s.input,s.avail_in=kt,s.next_in=0,s.input=et,Lt(G);G.lookahead>=tt;){for(O=G.strstart,k=G.lookahead-(tt-1);G.ins_h=(G.ins_h<<G.hash_shift^G.window[O+tt-1])&G.hash_mask,G.prev[O&G.w_mask]=G.head[G.ins_h],G.head[G.ins_h]=O,O++,--k;);G.strstart=O,G.lookahead=tt-1,Lt(G)}return G.strstart+=G.lookahead,G.block_start=G.strstart,G.insert=G.lookahead,G.lookahead=0,G.match_length=G.prev_length=tt-1,G.match_available=0,s.next_in=at,s.input=H,s.avail_in=ot,G.wrap=N,g},u.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,d,u){d.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,d,u){d.exports=function(l,c){var h,v,x,A,_,E,g,C,y,S,w,R,B,W,K,nt,X,ut,tt,pt,Pt,$,Q,m,it;h=l.state,v=l.next_in,m=l.input,x=v+(l.avail_in-5),A=l.next_out,it=l.output,_=A-(c-l.avail_out),E=A+(l.avail_out-257),g=h.dmax,C=h.wsize,y=h.whave,S=h.wnext,w=h.window,R=h.hold,B=h.bits,W=h.lencode,K=h.distcode,nt=(1<<h.lenbits)-1,X=(1<<h.distbits)-1;t:do{B<15&&(R+=m[v++]<<B,B+=8,R+=m[v++]<<B,B+=8),ut=W[R&nt];e:for(;;){if(R>>>=tt=ut>>>24,B-=tt,(tt=ut>>>16&255)===0)it[A++]=65535&ut;else{if(!(16&tt)){if((64&tt)==0){ut=W[(65535&ut)+(R&(1<<tt)-1)];continue e}if(32&tt){h.mode=12;break t}l.msg="invalid literal/length code",h.mode=30;break t}pt=65535&ut,(tt&=15)&&(B<tt&&(R+=m[v++]<<B,B+=8),pt+=R&(1<<tt)-1,R>>>=tt,B-=tt),B<15&&(R+=m[v++]<<B,B+=8,R+=m[v++]<<B,B+=8),ut=K[R&X];n:for(;;){if(R>>>=tt=ut>>>24,B-=tt,!(16&(tt=ut>>>16&255))){if((64&tt)==0){ut=K[(65535&ut)+(R&(1<<tt)-1)];continue n}l.msg="invalid distance code",h.mode=30;break t}if(Pt=65535&ut,B<(tt&=15)&&(R+=m[v++]<<B,(B+=8)<tt&&(R+=m[v++]<<B,B+=8)),g<(Pt+=R&(1<<tt)-1)){l.msg="invalid distance too far back",h.mode=30;break t}if(R>>>=tt,B-=tt,(tt=A-_)<Pt){if(y<(tt=Pt-tt)&&h.sane){l.msg="invalid distance too far back",h.mode=30;break t}if(Q=w,($=0)===S){if($+=C-tt,tt<pt){for(pt-=tt;it[A++]=w[$++],--tt;);$=A-Pt,Q=it}}else if(S<tt){if($+=C+S-tt,(tt-=S)<pt){for(pt-=tt;it[A++]=w[$++],--tt;);if($=0,S<pt){for(pt-=tt=S;it[A++]=w[$++],--tt;);$=A-Pt,Q=it}}}else if($+=S-tt,tt<pt){for(pt-=tt;it[A++]=w[$++],--tt;);$=A-Pt,Q=it}for(;2<pt;)it[A++]=Q[$++],it[A++]=Q[$++],it[A++]=Q[$++],pt-=3;pt&&(it[A++]=Q[$++],1<pt&&(it[A++]=Q[$++]))}else{for($=A-Pt;it[A++]=it[$++],it[A++]=it[$++],it[A++]=it[$++],2<(pt-=3););pt&&(it[A++]=it[$++],1<pt&&(it[A++]=it[$++]))}break}}break}}while(v<x&&A<E);v-=pt=B>>3,R&=(1<<(B-=pt<<3))-1,l.next_in=v,l.next_out=A,l.avail_in=v<x?x-v+5:5-(v-x),l.avail_out=A<E?E-A+257:257-(A-E),h.hold=R,h.bits=B}},{}],49:[function(i,d,u){var l=i("../utils/common"),c=i("./adler32"),h=i("./crc32"),v=i("./inffast"),x=i("./inftrees"),A=1,_=2,E=0,g=-2,C=1,y=852,S=592;function w($){return($>>>24&255)+($>>>8&65280)+((65280&$)<<8)+((255&$)<<24)}function R(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new l.Buf16(320),this.work=new l.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function B($){var Q;return $&&$.state?(Q=$.state,$.total_in=$.total_out=Q.total=0,$.msg="",Q.wrap&&($.adler=1&Q.wrap),Q.mode=C,Q.last=0,Q.havedict=0,Q.dmax=32768,Q.head=null,Q.hold=0,Q.bits=0,Q.lencode=Q.lendyn=new l.Buf32(y),Q.distcode=Q.distdyn=new l.Buf32(S),Q.sane=1,Q.back=-1,E):g}function W($){var Q;return $&&$.state?((Q=$.state).wsize=0,Q.whave=0,Q.wnext=0,B($)):g}function K($,Q){var m,it;return $&&$.state?(it=$.state,Q<0?(m=0,Q=-Q):(m=1+(Q>>4),Q<48&&(Q&=15)),Q&&(Q<8||15<Q)?g:(it.window!==null&&it.wbits!==Q&&(it.window=null),it.wrap=m,it.wbits=Q,W($))):g}function nt($,Q){var m,it;return $?(it=new R,($.state=it).window=null,(m=K($,Q))!==E&&($.state=null),m):g}var X,ut,tt=!0;function pt($){if(tt){var Q;for(X=new l.Buf32(512),ut=new l.Buf32(32),Q=0;Q<144;)$.lens[Q++]=8;for(;Q<256;)$.lens[Q++]=9;for(;Q<280;)$.lens[Q++]=7;for(;Q<288;)$.lens[Q++]=8;for(x(A,$.lens,0,288,X,0,$.work,{bits:9}),Q=0;Q<32;)$.lens[Q++]=5;x(_,$.lens,0,32,ut,0,$.work,{bits:5}),tt=!1}$.lencode=X,$.lenbits=9,$.distcode=ut,$.distbits=5}function Pt($,Q,m,it){var Rt,lt=$.state;return lt.window===null&&(lt.wsize=1<<lt.wbits,lt.wnext=0,lt.whave=0,lt.window=new l.Buf8(lt.wsize)),it>=lt.wsize?(l.arraySet(lt.window,Q,m-lt.wsize,lt.wsize,0),lt.wnext=0,lt.whave=lt.wsize):(it<(Rt=lt.wsize-lt.wnext)&&(Rt=it),l.arraySet(lt.window,Q,m-it,Rt,lt.wnext),(it-=Rt)?(l.arraySet(lt.window,Q,m-it,it,0),lt.wnext=it,lt.whave=lt.wsize):(lt.wnext+=Rt,lt.wnext===lt.wsize&&(lt.wnext=0),lt.whave<lt.wsize&&(lt.whave+=Rt))),0}u.inflateReset=W,u.inflateReset2=K,u.inflateResetKeep=B,u.inflateInit=function($){return nt($,15)},u.inflateInit2=nt,u.inflate=function($,Q){var m,it,Rt,lt,Tt,st,Ot,Y,V,Et,xt,gt,Lt,Gt,Mt,mt,Zt,Kt,Dt,re,s,et,G,O,k=0,N=new l.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!$||!$.state||!$.output||!$.input&&$.avail_in!==0)return g;(m=$.state).mode===12&&(m.mode=13),Tt=$.next_out,Rt=$.output,Ot=$.avail_out,lt=$.next_in,it=$.input,st=$.avail_in,Y=m.hold,V=m.bits,Et=st,xt=Ot,et=E;t:for(;;)switch(m.mode){case C:if(m.wrap===0){m.mode=13;break}for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(2&m.wrap&&Y===35615){N[m.check=0]=255&Y,N[1]=Y>>>8&255,m.check=h(m.check,N,2,0),V=Y=0,m.mode=2;break}if(m.flags=0,m.head&&(m.head.done=!1),!(1&m.wrap)||(((255&Y)<<8)+(Y>>8))%31){$.msg="incorrect header check",m.mode=30;break}if((15&Y)!=8){$.msg="unknown compression method",m.mode=30;break}if(V-=4,s=8+(15&(Y>>>=4)),m.wbits===0)m.wbits=s;else if(s>m.wbits){$.msg="invalid window size",m.mode=30;break}m.dmax=1<<s,$.adler=m.check=1,m.mode=512&Y?10:12,V=Y=0;break;case 2:for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(m.flags=Y,(255&m.flags)!=8){$.msg="unknown compression method",m.mode=30;break}if(57344&m.flags){$.msg="unknown header flags set",m.mode=30;break}m.head&&(m.head.text=Y>>8&1),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,m.check=h(m.check,N,2,0)),V=Y=0,m.mode=3;case 3:for(;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.head&&(m.head.time=Y),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,N[2]=Y>>>16&255,N[3]=Y>>>24&255,m.check=h(m.check,N,4,0)),V=Y=0,m.mode=4;case 4:for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.head&&(m.head.xflags=255&Y,m.head.os=Y>>8),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,m.check=h(m.check,N,2,0)),V=Y=0,m.mode=5;case 5:if(1024&m.flags){for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.length=Y,m.head&&(m.head.extra_len=Y),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,m.check=h(m.check,N,2,0)),V=Y=0}else m.head&&(m.head.extra=null);m.mode=6;case 6:if(1024&m.flags&&(st<(gt=m.length)&&(gt=st),gt&&(m.head&&(s=m.head.extra_len-m.length,m.head.extra||(m.head.extra=new Array(m.head.extra_len)),l.arraySet(m.head.extra,it,lt,gt,s)),512&m.flags&&(m.check=h(m.check,it,gt,lt)),st-=gt,lt+=gt,m.length-=gt),m.length))break t;m.length=0,m.mode=7;case 7:if(2048&m.flags){if(st===0)break t;for(gt=0;s=it[lt+gt++],m.head&&s&&m.length<65536&&(m.head.name+=String.fromCharCode(s)),s&&gt<st;);if(512&m.flags&&(m.check=h(m.check,it,gt,lt)),st-=gt,lt+=gt,s)break t}else m.head&&(m.head.name=null);m.length=0,m.mode=8;case 8:if(4096&m.flags){if(st===0)break t;for(gt=0;s=it[lt+gt++],m.head&&s&&m.length<65536&&(m.head.comment+=String.fromCharCode(s)),s&&gt<st;);if(512&m.flags&&(m.check=h(m.check,it,gt,lt)),st-=gt,lt+=gt,s)break t}else m.head&&(m.head.comment=null);m.mode=9;case 9:if(512&m.flags){for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Y!==(65535&m.check)){$.msg="header crc mismatch",m.mode=30;break}V=Y=0}m.head&&(m.head.hcrc=m.flags>>9&1,m.head.done=!0),$.adler=m.check=0,m.mode=12;break;case 10:for(;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}$.adler=m.check=w(Y),V=Y=0,m.mode=11;case 11:if(m.havedict===0)return $.next_out=Tt,$.avail_out=Ot,$.next_in=lt,$.avail_in=st,m.hold=Y,m.bits=V,2;$.adler=m.check=1,m.mode=12;case 12:if(Q===5||Q===6)break t;case 13:if(m.last){Y>>>=7&V,V-=7&V,m.mode=27;break}for(;V<3;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}switch(m.last=1&Y,V-=1,3&(Y>>>=1)){case 0:m.mode=14;break;case 1:if(pt(m),m.mode=20,Q!==6)break;Y>>>=2,V-=2;break t;case 2:m.mode=17;break;case 3:$.msg="invalid block type",m.mode=30}Y>>>=2,V-=2;break;case 14:for(Y>>>=7&V,V-=7&V;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if((65535&Y)!=(Y>>>16^65535)){$.msg="invalid stored block lengths",m.mode=30;break}if(m.length=65535&Y,V=Y=0,m.mode=15,Q===6)break t;case 15:m.mode=16;case 16:if(gt=m.length){if(st<gt&&(gt=st),Ot<gt&&(gt=Ot),gt===0)break t;l.arraySet(Rt,it,lt,gt,Tt),st-=gt,lt+=gt,Ot-=gt,Tt+=gt,m.length-=gt;break}m.mode=12;break;case 17:for(;V<14;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(m.nlen=257+(31&Y),Y>>>=5,V-=5,m.ndist=1+(31&Y),Y>>>=5,V-=5,m.ncode=4+(15&Y),Y>>>=4,V-=4,286<m.nlen||30<m.ndist){$.msg="too many length or distance symbols",m.mode=30;break}m.have=0,m.mode=18;case 18:for(;m.have<m.ncode;){for(;V<3;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.lens[ot[m.have++]]=7&Y,Y>>>=3,V-=3}for(;m.have<19;)m.lens[ot[m.have++]]=0;if(m.lencode=m.lendyn,m.lenbits=7,G={bits:m.lenbits},et=x(0,m.lens,0,19,m.lencode,0,m.work,G),m.lenbits=G.bits,et){$.msg="invalid code lengths set",m.mode=30;break}m.have=0,m.mode=19;case 19:for(;m.have<m.nlen+m.ndist;){for(;mt=(k=m.lencode[Y&(1<<m.lenbits)-1])>>>16&255,Zt=65535&k,!((Mt=k>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Zt<16)Y>>>=Mt,V-=Mt,m.lens[m.have++]=Zt;else{if(Zt===16){for(O=Mt+2;V<O;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Y>>>=Mt,V-=Mt,m.have===0){$.msg="invalid bit length repeat",m.mode=30;break}s=m.lens[m.have-1],gt=3+(3&Y),Y>>>=2,V-=2}else if(Zt===17){for(O=Mt+3;V<O;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}V-=Mt,s=0,gt=3+(7&(Y>>>=Mt)),Y>>>=3,V-=3}else{for(O=Mt+7;V<O;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}V-=Mt,s=0,gt=11+(127&(Y>>>=Mt)),Y>>>=7,V-=7}if(m.have+gt>m.nlen+m.ndist){$.msg="invalid bit length repeat",m.mode=30;break}for(;gt--;)m.lens[m.have++]=s}}if(m.mode===30)break;if(m.lens[256]===0){$.msg="invalid code -- missing end-of-block",m.mode=30;break}if(m.lenbits=9,G={bits:m.lenbits},et=x(A,m.lens,0,m.nlen,m.lencode,0,m.work,G),m.lenbits=G.bits,et){$.msg="invalid literal/lengths set",m.mode=30;break}if(m.distbits=6,m.distcode=m.distdyn,G={bits:m.distbits},et=x(_,m.lens,m.nlen,m.ndist,m.distcode,0,m.work,G),m.distbits=G.bits,et){$.msg="invalid distances set",m.mode=30;break}if(m.mode=20,Q===6)break t;case 20:m.mode=21;case 21:if(6<=st&&258<=Ot){$.next_out=Tt,$.avail_out=Ot,$.next_in=lt,$.avail_in=st,m.hold=Y,m.bits=V,v($,xt),Tt=$.next_out,Rt=$.output,Ot=$.avail_out,lt=$.next_in,it=$.input,st=$.avail_in,Y=m.hold,V=m.bits,m.mode===12&&(m.back=-1);break}for(m.back=0;mt=(k=m.lencode[Y&(1<<m.lenbits)-1])>>>16&255,Zt=65535&k,!((Mt=k>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(mt&&(240&mt)==0){for(Kt=Mt,Dt=mt,re=Zt;mt=(k=m.lencode[re+((Y&(1<<Kt+Dt)-1)>>Kt)])>>>16&255,Zt=65535&k,!(Kt+(Mt=k>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}Y>>>=Kt,V-=Kt,m.back+=Kt}if(Y>>>=Mt,V-=Mt,m.back+=Mt,m.length=Zt,mt===0){m.mode=26;break}if(32&mt){m.back=-1,m.mode=12;break}if(64&mt){$.msg="invalid literal/length code",m.mode=30;break}m.extra=15&mt,m.mode=22;case 22:if(m.extra){for(O=m.extra;V<O;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.length+=Y&(1<<m.extra)-1,Y>>>=m.extra,V-=m.extra,m.back+=m.extra}m.was=m.length,m.mode=23;case 23:for(;mt=(k=m.distcode[Y&(1<<m.distbits)-1])>>>16&255,Zt=65535&k,!((Mt=k>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if((240&mt)==0){for(Kt=Mt,Dt=mt,re=Zt;mt=(k=m.distcode[re+((Y&(1<<Kt+Dt)-1)>>Kt)])>>>16&255,Zt=65535&k,!(Kt+(Mt=k>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}Y>>>=Kt,V-=Kt,m.back+=Kt}if(Y>>>=Mt,V-=Mt,m.back+=Mt,64&mt){$.msg="invalid distance code",m.mode=30;break}m.offset=Zt,m.extra=15&mt,m.mode=24;case 24:if(m.extra){for(O=m.extra;V<O;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.offset+=Y&(1<<m.extra)-1,Y>>>=m.extra,V-=m.extra,m.back+=m.extra}if(m.offset>m.dmax){$.msg="invalid distance too far back",m.mode=30;break}m.mode=25;case 25:if(Ot===0)break t;if(gt=xt-Ot,m.offset>gt){if((gt=m.offset-gt)>m.whave&&m.sane){$.msg="invalid distance too far back",m.mode=30;break}Lt=gt>m.wnext?(gt-=m.wnext,m.wsize-gt):m.wnext-gt,gt>m.length&&(gt=m.length),Gt=m.window}else Gt=Rt,Lt=Tt-m.offset,gt=m.length;for(Ot<gt&&(gt=Ot),Ot-=gt,m.length-=gt;Rt[Tt++]=Gt[Lt++],--gt;);m.length===0&&(m.mode=21);break;case 26:if(Ot===0)break t;Rt[Tt++]=m.length,Ot--,m.mode=21;break;case 27:if(m.wrap){for(;V<32;){if(st===0)break t;st--,Y|=it[lt++]<<V,V+=8}if(xt-=Ot,$.total_out+=xt,m.total+=xt,xt&&($.adler=m.check=m.flags?h(m.check,Rt,xt,Tt-xt):c(m.check,Rt,xt,Tt-xt)),xt=Ot,(m.flags?Y:w(Y))!==m.check){$.msg="incorrect data check",m.mode=30;break}V=Y=0}m.mode=28;case 28:if(m.wrap&&m.flags){for(;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Y!==(4294967295&m.total)){$.msg="incorrect length check",m.mode=30;break}V=Y=0}m.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;case 32:default:return g}return $.next_out=Tt,$.avail_out=Ot,$.next_in=lt,$.avail_in=st,m.hold=Y,m.bits=V,(m.wsize||xt!==$.avail_out&&m.mode<30&&(m.mode<27||Q!==4))&&Pt($,$.output,$.next_out,xt-$.avail_out)?(m.mode=31,-4):(Et-=$.avail_in,xt-=$.avail_out,$.total_in+=Et,$.total_out+=xt,m.total+=xt,m.wrap&&xt&&($.adler=m.check=m.flags?h(m.check,Rt,xt,$.next_out-xt):c(m.check,Rt,xt,$.next_out-xt)),$.data_type=m.bits+(m.last?64:0)+(m.mode===12?128:0)+(m.mode===20||m.mode===15?256:0),(Et==0&&xt===0||Q===4)&&et===E&&(et=-5),et)},u.inflateEnd=function($){if(!$||!$.state)return g;var Q=$.state;return Q.window&&(Q.window=null),$.state=null,E},u.inflateGetHeader=function($,Q){var m;return $&&$.state?(2&(m=$.state).wrap)==0?g:((m.head=Q).done=!1,E):g},u.inflateSetDictionary=function($,Q){var m,it=Q.length;return $&&$.state?(m=$.state).wrap!==0&&m.mode!==11?g:m.mode===11&&c(1,Q,it,0)!==m.check?-3:Pt($,Q,it,it)?(m.mode=31,-4):(m.havedict=1,E):g},u.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,d,u){var l=i("../utils/common"),c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],h=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],v=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],x=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];d.exports=function(A,_,E,g,C,y,S,w){var R,B,W,K,nt,X,ut,tt,pt,Pt=w.bits,$=0,Q=0,m=0,it=0,Rt=0,lt=0,Tt=0,st=0,Ot=0,Y=0,V=null,Et=0,xt=new l.Buf16(16),gt=new l.Buf16(16),Lt=null,Gt=0;for($=0;$<=15;$++)xt[$]=0;for(Q=0;Q<g;Q++)xt[_[E+Q]]++;for(Rt=Pt,it=15;1<=it&&xt[it]===0;it--);if(it<Rt&&(Rt=it),it===0)return C[y++]=20971520,C[y++]=20971520,w.bits=1,0;for(m=1;m<it&&xt[m]===0;m++);for(Rt<m&&(Rt=m),$=st=1;$<=15;$++)if(st<<=1,(st-=xt[$])<0)return-1;if(0<st&&(A===0||it!==1))return-1;for(gt[1]=0,$=1;$<15;$++)gt[$+1]=gt[$]+xt[$];for(Q=0;Q<g;Q++)_[E+Q]!==0&&(S[gt[_[E+Q]]++]=Q);if(X=A===0?(V=Lt=S,19):A===1?(V=c,Et-=257,Lt=h,Gt-=257,256):(V=v,Lt=x,-1),$=m,nt=y,Tt=Q=Y=0,W=-1,K=(Ot=1<<(lt=Rt))-1,A===1&&852<Ot||A===2&&592<Ot)return 1;for(;;){for(ut=$-Tt,pt=S[Q]<X?(tt=0,S[Q]):S[Q]>X?(tt=Lt[Gt+S[Q]],V[Et+S[Q]]):(tt=96,0),R=1<<$-Tt,m=B=1<<lt;C[nt+(Y>>Tt)+(B-=R)]=ut<<24|tt<<16|pt|0,B!==0;);for(R=1<<$-1;Y&R;)R>>=1;if(R!==0?(Y&=R-1,Y+=R):Y=0,Q++,--xt[$]==0){if($===it)break;$=_[E+S[Q]]}if(Rt<$&&(Y&K)!==W){for(Tt===0&&(Tt=Rt),nt+=m,st=1<<(lt=$-Tt);lt+Tt<it&&!((st-=xt[lt+Tt])<=0);)lt++,st<<=1;if(Ot+=1<<lt,A===1&&852<Ot||A===2&&592<Ot)return 1;C[W=Y&K]=Rt<<24|lt<<16|nt-y|0}}return Y!==0&&(C[nt+Y]=$-Tt<<24|64<<16|0),w.bits=Rt,0}},{"../utils/common":41}],51:[function(i,d,u){d.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,d,u){var l=i("../utils/common"),c=0,h=1;function v(k){for(var N=k.length;0<=--N;)k[N]=0}var x=0,A=29,_=256,E=_+1+A,g=30,C=19,y=2*E+1,S=15,w=16,R=7,B=256,W=16,K=17,nt=18,X=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ut=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Pt=new Array(2*(E+2));v(Pt);var $=new Array(2*g);v($);var Q=new Array(512);v(Q);var m=new Array(256);v(m);var it=new Array(A);v(it);var Rt,lt,Tt,st=new Array(g);function Ot(k,N,ot,at,H){this.static_tree=k,this.extra_bits=N,this.extra_base=ot,this.elems=at,this.max_length=H,this.has_stree=k&&k.length}function Y(k,N){this.dyn_tree=k,this.max_code=0,this.stat_desc=N}function V(k){return k<256?Q[k]:Q[256+(k>>>7)]}function Et(k,N){k.pending_buf[k.pending++]=255&N,k.pending_buf[k.pending++]=N>>>8&255}function xt(k,N,ot){k.bi_valid>w-ot?(k.bi_buf|=N<<k.bi_valid&65535,Et(k,k.bi_buf),k.bi_buf=N>>w-k.bi_valid,k.bi_valid+=ot-w):(k.bi_buf|=N<<k.bi_valid&65535,k.bi_valid+=ot)}function gt(k,N,ot){xt(k,ot[2*N],ot[2*N+1])}function Lt(k,N){for(var ot=0;ot|=1&k,k>>>=1,ot<<=1,0<--N;);return ot>>>1}function Gt(k,N,ot){var at,H,ct=new Array(S+1),kt=0;for(at=1;at<=S;at++)ct[at]=kt=kt+ot[at-1]<<1;for(H=0;H<=N;H++){var dt=k[2*H+1];dt!==0&&(k[2*H]=Lt(ct[dt]++,dt))}}function Mt(k){var N;for(N=0;N<E;N++)k.dyn_ltree[2*N]=0;for(N=0;N<g;N++)k.dyn_dtree[2*N]=0;for(N=0;N<C;N++)k.bl_tree[2*N]=0;k.dyn_ltree[2*B]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function mt(k){8<k.bi_valid?Et(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function Zt(k,N,ot,at){var H=2*N,ct=2*ot;return k[H]<k[ct]||k[H]===k[ct]&&at[N]<=at[ot]}function Kt(k,N,ot){for(var at=k.heap[ot],H=ot<<1;H<=k.heap_len&&(H<k.heap_len&&Zt(N,k.heap[H+1],k.heap[H],k.depth)&&H++,!Zt(N,at,k.heap[H],k.depth));)k.heap[ot]=k.heap[H],ot=H,H<<=1;k.heap[ot]=at}function Dt(k,N,ot){var at,H,ct,kt,dt=0;if(k.last_lit!==0)for(;at=k.pending_buf[k.d_buf+2*dt]<<8|k.pending_buf[k.d_buf+2*dt+1],H=k.pending_buf[k.l_buf+dt],dt++,at===0?gt(k,H,N):(gt(k,(ct=m[H])+_+1,N),(kt=X[ct])!==0&&xt(k,H-=it[ct],kt),gt(k,ct=V(--at),ot),(kt=ut[ct])!==0&&xt(k,at-=st[ct],kt)),dt<k.last_lit;);gt(k,B,N)}function re(k,N){var ot,at,H,ct=N.dyn_tree,kt=N.stat_desc.static_tree,dt=N.stat_desc.has_stree,At=N.stat_desc.elems,Nt=-1;for(k.heap_len=0,k.heap_max=y,ot=0;ot<At;ot++)ct[2*ot]!==0?(k.heap[++k.heap_len]=Nt=ot,k.depth[ot]=0):ct[2*ot+1]=0;for(;k.heap_len<2;)ct[2*(H=k.heap[++k.heap_len]=Nt<2?++Nt:0)]=1,k.depth[H]=0,k.opt_len--,dt&&(k.static_len-=kt[2*H+1]);for(N.max_code=Nt,ot=k.heap_len>>1;1<=ot;ot--)Kt(k,ct,ot);for(H=At;ot=k.heap[1],k.heap[1]=k.heap[k.heap_len--],Kt(k,ct,1),at=k.heap[1],k.heap[--k.heap_max]=ot,k.heap[--k.heap_max]=at,ct[2*H]=ct[2*ot]+ct[2*at],k.depth[H]=(k.depth[ot]>=k.depth[at]?k.depth[ot]:k.depth[at])+1,ct[2*ot+1]=ct[2*at+1]=H,k.heap[1]=H++,Kt(k,ct,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],(function(Bt,te){var we,ce,de,qt,Ce,me,St=te.dyn_tree,Ae=te.max_code,_e=te.stat_desc.static_tree,Ve=te.stat_desc.has_stree,_t=te.stat_desc.extra_bits,Ye=te.stat_desc.extra_base,Ee=te.stat_desc.max_length,Oe=0;for(qt=0;qt<=S;qt++)Bt.bl_count[qt]=0;for(St[2*Bt.heap[Bt.heap_max]+1]=0,we=Bt.heap_max+1;we<y;we++)Ee<(qt=St[2*St[2*(ce=Bt.heap[we])+1]+1]+1)&&(qt=Ee,Oe++),St[2*ce+1]=qt,Ae<ce||(Bt.bl_count[qt]++,Ce=0,Ye<=ce&&(Ce=_t[ce-Ye]),me=St[2*ce],Bt.opt_len+=me*(qt+Ce),Ve&&(Bt.static_len+=me*(_e[2*ce+1]+Ce)));if(Oe!==0){do{for(qt=Ee-1;Bt.bl_count[qt]===0;)qt--;Bt.bl_count[qt]--,Bt.bl_count[qt+1]+=2,Bt.bl_count[Ee]--,Oe-=2}while(0<Oe);for(qt=Ee;qt!==0;qt--)for(ce=Bt.bl_count[qt];ce!==0;)Ae<(de=Bt.heap[--we])||(St[2*de+1]!==qt&&(Bt.opt_len+=(qt-St[2*de+1])*St[2*de],St[2*de+1]=qt),ce--)}})(k,N),Gt(ct,Nt,k.bl_count)}function s(k,N,ot){var at,H,ct=-1,kt=N[1],dt=0,At=7,Nt=4;for(kt===0&&(At=138,Nt=3),N[2*(ot+1)+1]=65535,at=0;at<=ot;at++)H=kt,kt=N[2*(at+1)+1],++dt<At&&H===kt||(dt<Nt?k.bl_tree[2*H]+=dt:H!==0?(H!==ct&&k.bl_tree[2*H]++,k.bl_tree[2*W]++):dt<=10?k.bl_tree[2*K]++:k.bl_tree[2*nt]++,ct=H,Nt=(dt=0)===kt?(At=138,3):H===kt?(At=6,3):(At=7,4))}function et(k,N,ot){var at,H,ct=-1,kt=N[1],dt=0,At=7,Nt=4;for(kt===0&&(At=138,Nt=3),at=0;at<=ot;at++)if(H=kt,kt=N[2*(at+1)+1],!(++dt<At&&H===kt)){if(dt<Nt)for(;gt(k,H,k.bl_tree),--dt!=0;);else H!==0?(H!==ct&&(gt(k,H,k.bl_tree),dt--),gt(k,W,k.bl_tree),xt(k,dt-3,2)):dt<=10?(gt(k,K,k.bl_tree),xt(k,dt-3,3)):(gt(k,nt,k.bl_tree),xt(k,dt-11,7));ct=H,Nt=(dt=0)===kt?(At=138,3):H===kt?(At=6,3):(At=7,4)}}v(st);var G=!1;function O(k,N,ot,at){xt(k,(x<<1)+(at?1:0),3),(function(H,ct,kt,dt){mt(H),Et(H,kt),Et(H,~kt),l.arraySet(H.pending_buf,H.window,ct,kt,H.pending),H.pending+=kt})(k,N,ot)}u._tr_init=function(k){G||((function(){var N,ot,at,H,ct,kt=new Array(S+1);for(H=at=0;H<A-1;H++)for(it[H]=at,N=0;N<1<<X[H];N++)m[at++]=H;for(m[at-1]=H,H=ct=0;H<16;H++)for(st[H]=ct,N=0;N<1<<ut[H];N++)Q[ct++]=H;for(ct>>=7;H<g;H++)for(st[H]=ct<<7,N=0;N<1<<ut[H]-7;N++)Q[256+ct++]=H;for(ot=0;ot<=S;ot++)kt[ot]=0;for(N=0;N<=143;)Pt[2*N+1]=8,N++,kt[8]++;for(;N<=255;)Pt[2*N+1]=9,N++,kt[9]++;for(;N<=279;)Pt[2*N+1]=7,N++,kt[7]++;for(;N<=287;)Pt[2*N+1]=8,N++,kt[8]++;for(Gt(Pt,E+1,kt),N=0;N<g;N++)$[2*N+1]=5,$[2*N]=Lt(N,5);Rt=new Ot(Pt,X,_+1,E,S),lt=new Ot($,ut,0,g,S),Tt=new Ot(new Array(0),tt,0,C,R)})(),G=!0),k.l_desc=new Y(k.dyn_ltree,Rt),k.d_desc=new Y(k.dyn_dtree,lt),k.bl_desc=new Y(k.bl_tree,Tt),k.bi_buf=0,k.bi_valid=0,Mt(k)},u._tr_stored_block=O,u._tr_flush_block=function(k,N,ot,at){var H,ct,kt=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=(function(dt){var At,Nt=4093624447;for(At=0;At<=31;At++,Nt>>>=1)if(1&Nt&&dt.dyn_ltree[2*At]!==0)return c;if(dt.dyn_ltree[18]!==0||dt.dyn_ltree[20]!==0||dt.dyn_ltree[26]!==0)return h;for(At=32;At<_;At++)if(dt.dyn_ltree[2*At]!==0)return h;return c})(k)),re(k,k.l_desc),re(k,k.d_desc),kt=(function(dt){var At;for(s(dt,dt.dyn_ltree,dt.l_desc.max_code),s(dt,dt.dyn_dtree,dt.d_desc.max_code),re(dt,dt.bl_desc),At=C-1;3<=At&&dt.bl_tree[2*pt[At]+1]===0;At--);return dt.opt_len+=3*(At+1)+5+5+4,At})(k),H=k.opt_len+3+7>>>3,(ct=k.static_len+3+7>>>3)<=H&&(H=ct)):H=ct=ot+5,ot+4<=H&&N!==-1?O(k,N,ot,at):k.strategy===4||ct===H?(xt(k,2+(at?1:0),3),Dt(k,Pt,$)):(xt(k,4+(at?1:0),3),(function(dt,At,Nt,Bt){var te;for(xt(dt,At-257,5),xt(dt,Nt-1,5),xt(dt,Bt-4,4),te=0;te<Bt;te++)xt(dt,dt.bl_tree[2*pt[te]+1],3);et(dt,dt.dyn_ltree,At-1),et(dt,dt.dyn_dtree,Nt-1)})(k,k.l_desc.max_code+1,k.d_desc.max_code+1,kt+1),Dt(k,k.dyn_ltree,k.dyn_dtree)),Mt(k),at&&mt(k)},u._tr_tally=function(k,N,ot){return k.pending_buf[k.d_buf+2*k.last_lit]=N>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&N,k.pending_buf[k.l_buf+k.last_lit]=255&ot,k.last_lit++,N===0?k.dyn_ltree[2*ot]++:(k.matches++,N--,k.dyn_ltree[2*(m[ot]+_+1)]++,k.dyn_dtree[2*V(N)]++),k.last_lit===k.lit_bufsize-1},u._tr_align=function(k){xt(k,2,3),gt(k,B,Pt),(function(N){N.bi_valid===16?(Et(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(k)}},{"../utils/common":41}],53:[function(i,d,u){d.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,d,u){(function(l){(function(c,h){if(!c.setImmediate){var v,x,A,_,E=1,g={},C=!1,y=c.document,S=Object.getPrototypeOf&&Object.getPrototypeOf(c);S=S&&S.setTimeout?S:c,v={}.toString.call(c.process)==="[object process]"?function(W){process.nextTick(function(){R(W)})}:(function(){if(c.postMessage&&!c.importScripts){var W=!0,K=c.onmessage;return c.onmessage=function(){W=!1},c.postMessage("","*"),c.onmessage=K,W}})()?(_="setImmediate$"+Math.random()+"$",c.addEventListener?c.addEventListener("message",B,!1):c.attachEvent("onmessage",B),function(W){c.postMessage(_+W,"*")}):c.MessageChannel?((A=new MessageChannel).port1.onmessage=function(W){R(W.data)},function(W){A.port2.postMessage(W)}):y&&"onreadystatechange"in y.createElement("script")?(x=y.documentElement,function(W){var K=y.createElement("script");K.onreadystatechange=function(){R(W),K.onreadystatechange=null,x.removeChild(K),K=null},x.appendChild(K)}):function(W){setTimeout(R,0,W)},S.setImmediate=function(W){typeof W!="function"&&(W=new Function(""+W));for(var K=new Array(arguments.length-1),nt=0;nt<K.length;nt++)K[nt]=arguments[nt+1];var X={callback:W,args:K};return g[E]=X,v(E),E++},S.clearImmediate=w}function w(W){delete g[W]}function R(W){if(C)setTimeout(R,0,W);else{var K=g[W];if(K){C=!0;try{(function(nt){var X=nt.callback,ut=nt.args;switch(ut.length){case 0:X();break;case 1:X(ut[0]);break;case 2:X(ut[0],ut[1]);break;case 3:X(ut[0],ut[1],ut[2]);break;default:X.apply(h,ut)}})(K)}finally{w(W),C=!1}}}}function B(W){W.source===c&&typeof W.data=="string"&&W.data.indexOf(_)===0&&R(+W.data.slice(_.length))}})(typeof self>"u"?l===void 0?this:l:self)}).call(this,typeof Se<"u"?Se:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Fr)),Fr.exports}var To=Ro();const Qi=Gi(To);var Jn={exports:{}},$o=Jn.exports,Ui;function Io(){return Ui||(Ui=1,(function(p,a){(function(i,d){d()})($o,function(){function i(x,A){return typeof A>"u"?A={autoBom:!1}:typeof A!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),A={autoBom:!A}),A.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(x.type)?new Blob(["\uFEFF",x],{type:x.type}):x}function d(x,A,_){var E=new XMLHttpRequest;E.open("GET",x),E.responseType="blob",E.onload=function(){v(E.response,A,_)},E.onerror=function(){console.error("could not download file")},E.send()}function u(x){var A=new XMLHttpRequest;A.open("HEAD",x,!1);try{A.send()}catch{}return 200<=A.status&&299>=A.status}function l(x){try{x.dispatchEvent(new MouseEvent("click"))}catch{var A=document.createEvent("MouseEvents");A.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),x.dispatchEvent(A)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Se=="object"&&Se.global===Se?Se:void 0,h=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),v=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(x,A,_){var E=c.URL||c.webkitURL,g=document.createElement("a");A=A||x.name||"download",g.download=A,g.rel="noopener",typeof x=="string"?(g.href=x,g.origin===location.origin?l(g):u(g.href)?d(x,A,_):l(g,g.target="_blank")):(g.href=E.createObjectURL(x),setTimeout(function(){E.revokeObjectURL(g.href)},4e4),setTimeout(function(){l(g)},0))}:"msSaveOrOpenBlob"in navigator?function(x,A,_){if(A=A||x.name||"download",typeof x!="string")navigator.msSaveOrOpenBlob(i(x,_),A);else if(u(x))d(x,A,_);else{var E=document.createElement("a");E.href=x,E.target="_blank",setTimeout(function(){l(E)})}}:function(x,A,_,E){if(E=E||open("","_blank"),E&&(E.document.title=E.document.body.innerText="downloading..."),typeof x=="string")return d(x,A,_);var g=x.type==="application/octet-stream",C=/constructor/i.test(c.HTMLElement)||c.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||g&&C||h)&&typeof FileReader<"u"){var S=new FileReader;S.onloadend=function(){var B=S.result;B=y?B:B.replace(/^data:[^;]*;/,"data:attachment/file;"),E?E.location.href=B:location=B,E=null},S.readAsDataURL(x)}else{var w=c.URL||c.webkitURL,R=w.createObjectURL(x);E?E.location=R:location.href=R,E=null,setTimeout(function(){w.revokeObjectURL(R)},4e4)}});c.saveAs=v.saveAs=v,p.exports=v})})(Jn)),Jn.exports}var ta=Io();function Li(p){const a=Math.floor(p/3600),i=Math.floor(p%3600/60),d=Math.floor(p%60),u=Math.floor(p%1*1e3);return`${a.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")},${u.toString().padStart(3,"0")}`}function Ki(p){const a=Math.floor(p/3600),i=Math.floor(p%3600/60),d=Math.floor(p%60),u=Math.floor(p%1*1e3);return`${a.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}.${u.toString().padStart(3,"0")}`}function ea(p){return p.map((a,i)=>{const d=i+1,u=Li(a.start),l=Li(a.end),c=a.text;return`${d}
${u} --> ${l}
${c}
`}).join(`
`)}function na(p){const a=`WEBVTT

`,i=p.map(d=>{const u=Ki(d.start),l=Ki(d.end),c=d.text;return`${u} --> ${l}
${c}
`}).join(`
`);return a+i}function ra(p){return p.map(a=>{const i=a.start.toFixed(3),d=a.end.toFixed(3);return`[${i}s - ${d}s] ${a.text}`}).join(`
`)}function ia(p,a,i,d,u,l,c){return{id:p,title:a,duration:i,created_at:new Date(d).toISOString(),source:u,full_text:l,segments:c.map(h=>({id:h.id,text:h.text,start:h.start,end:h.end,duration:h.end-h.start}))}}async function aa(p){return p}async function zo(p){const a=await wo(p),i=await bn(p);if(!a)throw new Error("Recording not found");if(!i)throw new Error("No annotations found for this recording");const d=new Qi,u=`${a.title}-${p.slice(0,8)}`,l=d.folder(u),c=await aa(a.audioBlob);l.file(`${p}.wav`,c);const h=ia(a.id,a.title,a.duration,a.createdAt,a.source,i.fullText,i.segments);l.file(`${p}.json`,JSON.stringify(h,null,2));const v=ea(i.segments);l.file(`${p}.srt`,v);const x=na(i.segments);l.file(`${p}.vtt`,x);const A=ra(i.segments);l.file(`${p}.txt`,A);const _=await d.generateAsync({type:"blob"});ta.saveAs(_,`${u}.zip`)}async function Do(){const a=(await Ji()).filter(h=>h.isAnnotated);if(a.length===0)throw new Error("No annotated recordings to export");const i=new Qi,u=`annotations-export-${new Date().toISOString().replace(/[:.]/g,"-")}`,l=i.folder(u);for(const h of a){const v=await bn(h.id);if(!v)continue;const x=`${h.title}-${h.id.slice(0,8)}`,A=l.folder(x),_=await aa(h.audioBlob);A.file(`${h.id}.wav`,_);const E=ia(h.id,h.title,h.duration,h.createdAt,h.source,v.fullText,v.segments);A.file(`${h.id}.json`,JSON.stringify(E,null,2));const g=ea(v.segments);A.file(`${h.id}.srt`,g);const C=na(v.segments);A.file(`${h.id}.vtt`,C);const y=ra(v.segments);A.file(`${h.id}.txt`,y)}const c=await i.generateAsync({type:"blob"});ta.saveAs(c,`${u}.zip`)}class Bo{constructor(a){this.listeners=new Set,this.state=a}getState(){return this.state}subscribe(a){return this.listeners.add(a),()=>{this.listeners.delete(a)}}notify(){this.listeners.forEach(a=>a(this.state))}setState(a){this.state={...this.state,...a},this.notify()}}const oa="aidio-theme",jo=()=>{try{const p=localStorage.getItem(oa);if(p==="dark"||p==="pastel")return p}catch(p){console.warn("Failed to read theme from localStorage:",p)}return"dark"},Mo={currentTheme:jo()};class Fo extends Bo{constructor(){super(Mo)}toggleTheme(){const a=this.state.currentTheme==="dark"?"pastel":"dark";this.setTheme(a)}setTheme(a){this.setState({currentTheme:a});try{localStorage.setItem(oa,a)}catch(i){console.warn("Failed to save theme to localStorage:",i)}}getCurrentTheme(){return this.state.currentTheme}}const wn=new Fo,No=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Uo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Lo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,sa=(p,a,i,d)=>{for(var u=d>1?void 0:d?Ko(a,i):a,l=p.length-1,c;l>=0;l--)(c=p[l])&&(u=(d?c(a,i,u):c(u))||u);return d&&u&&Lo(a,i,u),u};let nr=class extends Be{constructor(){super(...arguments),this.currentTheme=wn.getCurrentTheme()}connectedCallback(){super.connectedCallback(),this.unsubscribe=wn.subscribe(p=>{this.currentTheme=p.currentTheme})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}handleToggle(){wn.toggleTheme()}render(){const p=this.currentTheme==="dark"?No:Uo,a=this.currentTheme==="dark"?"Switch to Pastel Theme":"Switch to Dark Theme";return ie`
      <button
        class="theme-toggle-btn"
        @click=${this.handleToggle}
        title=${a}
        aria-label=${a}
      >
        <span class="theme-icon">${ue(p)}</span>
      </button>
    `}};nr.styles=rr`
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
  `;sa([Jt()],nr.prototype,"currentTheme",2);nr=sa([or("theme-toggle")],nr);const la=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,qo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Wo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Ho=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Zo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Vo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,ae=(p,a,i,d)=>{for(var u=d>1?void 0:d?Yo(a,i):a,l=p.length-1,c;l>=0;l--)(c=p[l])&&(u=(d?c(a,i,u):c(u))||u);return d&&u&&Vo(a,i,u),u};class Go{constructor(){this.status="idle",this.playhead=0,this.loop=!1,this.duration=0,this.ctx=null,this.source=null,this.rafId=null,this.buffer=null,this.currentPlayStart=0,this.currentPlayEnd=0,this.playbackRate=1,this.anchorWallTime=0,this.anchorAudioTime=0}async load(a){this.dispose(),this.ctx=new AudioContext;const i=await this.ctx.decodeAudioData(await a.arrayBuffer());this.buffer=i,this.duration=i.duration,this.playhead=0,this.onUpdate?.()}setPlaybackRate(a){if(this.ctx&&this.status==="playing"){const i=this.ctx.currentTime,d=i-this.anchorWallTime;this.anchorAudioTime+=d*this.playbackRate,this.anchorWallTime=i}this.source&&(this.source.playbackRate.value=a),this.playbackRate=a}async playRange(a,i,d){if(!this.ctx||!this.buffer)return;this.ctx.state==="suspended"&&await this.ctx.resume(),this.stop(!1),this.currentPlayStart=a,this.currentPlayEnd=i,this.loop=d,this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.ctx.destination),this.source.playbackRate.value=this.playbackRate;const u=Math.max(.01,i-a);this.anchorWallTime=this.ctx.currentTime,this.anchorAudioTime=a,this.source.start(0,a,u),this.status="playing",this.playhead=a,this.onUpdate?.(),this.trackPlayhead(),this.source.onended=()=>{this.loop?this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop):(this.stop(!1),this.playhead=this.currentPlayEnd,this.onUpdate?.())}}pause(){this.stop()}setPlayRange(a,i){this.currentPlayStart=a,this.currentPlayEnd=i,this.playhead=a,this.onUpdate?.(),this.status==="playing"&&this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop)}setLoop(a){this.loop=a,this.onUpdate?.(),a&&this.status==="playing"&&this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop)}reset(){this.stop(),this.loop=!1,this.playhead=0,this.currentPlayStart=0,this.currentPlayEnd=0,this.onUpdate?.()}dispose(){this.stop(),this.ctx&&(this.ctx.close(),this.ctx=null),this.buffer=null,this.duration=0,this.currentPlayStart=0,this.currentPlayEnd=0}stop(a=!0){if(this.source){this.source.onended=null;try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=null,this.status="idle",a&&(this.playhead=this.currentPlayStart),this.onUpdate?.()}trackPlayhead(){if(!this.ctx)return;const a=this.ctx,i=()=>{if(this.ctx!==a||this.status!=="playing")return;const u=this.ctx.currentTime-this.anchorWallTime,l=this.anchorAudioTime+u*this.playbackRate;this.playhead=Math.min(l,this.currentPlayEnd),this.onUpdate?.(),this.rafId=requestAnimationFrame(i)};this.rafId=requestAnimationFrame(i)}}let Qt=class extends Be{constructor(){super(...arguments),this.audioBlob=null,this.recordingId="",this.duration=0,this.leftClamp=0,this.rightClamp=3,this.text="",this.isPlaying=!1,this.loop=!1,this.showConfirmReset=!1,this.playhead=0,this.visualMode="classic",this.zoomLevel=1,this.viewOffset=0,this.isPanning=!1,this.playbackRate=1,this.peaks=[],this.maxPeak=0,this.controller=null,this.draggingClamp=null,this.panStartX=0,this.panStartOffset=0,this.handleMouseDown=p=>{this.isPanning=!0,this.panStartClientX=p.clientX,this.panStartOffset=this.viewOffset,this.setPointerCapture(p.pointerId),this.addEventListener("pointermove",this.handlePanMove),this.addEventListener("pointerup",this.handlePanUp),this.addEventListener("pointercancel",this.handlePanUp)},this.handlePanMove=p=>{if(!this.isPanning)return;const a=this.canvas.getBoundingClientRect();if(a.width===0)return;const i=p.movementX,u=this.duration/this.zoomLevel/a.width,l=i*u;this.clampViewOffset(this.viewOffset-l),this.scheduleDraw()},this.handlePanUp=p=>{this.isPanning=!1,this.releasePointerCapture(p.pointerId),this.removeEventListener("pointermove",this.handlePanMove),this.removeEventListener("pointerup",this.handlePanUp),this.removeEventListener("pointercancel",this.handlePanUp)},this.handleClampMouseDown=(p,a)=>{p.preventDefault(),p.stopPropagation(),this.draggingClamp=a,window.addEventListener("pointermove",this.handleClampMove),window.addEventListener("pointerup",this.handleClampUp),window.addEventListener("pointercancel",this.handleClampUp)},this.handleClampMove=p=>{if(!this.draggingClamp)return;const a=this.canvas.getBoundingClientRect(),i=p.clientX-a.left,d=Math.max(0,Math.min(this.duration,this.pixelToTime(i)));let u=this.leftClamp,l=this.rightClamp;this.draggingClamp==="left"?u=Math.min(d,l-.05):l=Math.max(d,u+.05),this.leftClamp=u,this.rightClamp=l,this.controller?.setPlayRange(u,l),this.clampViewOffset(this.viewOffset),this.scheduleDraw()},this.handleClampUp=()=>{this.draggingClamp=null,window.removeEventListener("pointermove",this.handleClampMove),window.removeEventListener("pointerup",this.handleClampUp),window.removeEventListener("pointercancel",this.handleClampUp)},this.drawQueued=!1}async firstUpdated(){this.audioBlob&&await this.loadAudio()}disconnectedCallback(){super.disconnectedCallback(),this.controller?.dispose(),this.controller=null}async loadAudio(){this.controller?.dispose(),this.controller=new Go,this.controller.onUpdate=()=>{this.playhead=this.controller.playhead,this.isPlaying=this.controller.status==="playing",this.loop=this.controller.loop,this.isPlaying&&this.autoScrollToPlayhead(),this.requestUpdate()},await this.controller.load(this.audioBlob),this.duration=this.controller.duration,this.leftClamp=0,this.rightClamp=Math.min(10,this.duration),this.playhead=this.leftClamp,this.requestUpdate();const p=this.controller.buffer;if(p){const a=p.getChannelData(0),i=4e3,d=Math.floor(a.length/i);this.peaks=new Array(i).fill(0),this.maxPeak=0;for(let u=0;u<i;u++){let l=0;const c=u*d;for(let h=0;h<d&&c+h<a.length;h++){const v=Math.abs(a[c+h]);v>l&&(l=v)}this.peaks[u]=l,l>this.maxPeak&&(this.maxPeak=l)}this.maxPeak===0&&(this.maxPeak=1),this.scheduleDraw()}}handleSpeedChange(p){const a=parseFloat(p.target.value);this.playbackRate=a,this.controller&&this.controller.setPlaybackRate(a)}syncFromController(){this.controller&&(this.playhead=this.controller.playhead,this.isPlaying=this.controller.status==="playing",this.loop=this.controller.loop,this.isPlaying&&this.autoScrollToPlayhead())}async handlePlayPause(){this.controller&&(this.isPlaying?this.controller.pause():await this.controller.playRange(this.leftClamp,this.rightClamp,this.loop))}handleLoopToggle(){this.controller&&(this.controller.setLoop(!this.loop),this.syncFromController())}handleWheel(p){p.preventDefault();const a=this.canvas.getBoundingClientRect();if(!(a.width===0||this.duration===0)){if(p.ctrlKey||p.metaKey){const d=p.deltaY>0?.95:1.05,u=p.clientX-a.left,l=this.pixelToTime(u),c=1,h=Math.max(c,this.duration/.1);let v=Math.max(c,Math.min(h,this.zoomLevel*d));const x=1;if(this.duration/v<x&&(v=this.duration/x),v=Math.max(c,Math.min(h,v)),this.zoomLevel===c&&p.deltaY>0){this.zoomLevel=c,this.clampViewOffset(0),this.scheduleDraw();return}const _=l-u/a.width*(this.duration/v);this.zoomLevel=v,this.clampViewOffset(_)}else{const d=this.duration/this.zoomLevel/10,u=(p.deltaY>0?1:-1)*d;this.clampViewOffset(this.viewOffset+u)}this.scheduleDraw()}}autoScrollToPlayhead(){const p=this.canvas.getBoundingClientRect();if(p.width===0||!this.isPlaying||this.duration===0)return;const a=this.timeToPixel(this.playhead),i=p.width*.5,d=(p.width-i)/2,u=d+i;let l=this.viewOffset;if(a<d){const c=(d-a)*(this.duration/(p.width*this.zoomLevel));l=this.viewOffset-c,this.clampViewOffset(l)}else if(a>u){const c=(a-u)*(this.duration/(p.width*this.zoomLevel));l=this.viewOffset+c,this.clampViewOffset(l)}}clampViewOffset(p){const a=this.canvas?.getBoundingClientRect();if(!a||a.width===0)return;const i=this.duration/this.zoomLevel,d=Math.max(0,this.duration-i);let u=Math.max(0,Math.min(d,p));const c=25*(i/a.width);this.leftClamp<u+c&&this.draggingClamp==="left"&&(u=Math.max(0,this.leftClamp-c)),this.rightClamp>u+i-c&&this.draggingClamp==="right"&&(u=Math.min(d,this.rightClamp-i+c)),this.viewOffset=u}pixelToTime(p){const a=this.canvas?.getBoundingClientRect();if(!a||a.width===0)return 0;const d=this.duration/this.zoomLevel/a.width;return this.viewOffset+p*d}timeToPixel(p){const a=this.canvas?.getBoundingClientRect();if(!a||a.width===0)return 0;const i=this.duration/this.zoomLevel;return(p-this.viewOffset)/i*a.width}timeToPxString(p){const a=this.timeToPixel(p),i=this.canvas?.getBoundingClientRect();if(!i||i.width===0)return"-100px";const d=5,u=i.width-5;return`${Math.max(d,Math.min(a,u))}px`}handleSave(){const p={id:crypto.randomUUID(),start:this.leftClamp,end:this.rightClamp,text:this.text.trim()};this.dispatchEvent(new CustomEvent("progress-saved",{detail:{segments:[p]},bubbles:!0,composed:!0}))}handleComplete(){const p={id:crypto.randomUUID(),start:this.leftClamp,end:this.rightClamp,text:this.text.trim()};this.dispatchEvent(new CustomEvent("annotation-complete",{detail:{segments:[p]},bubbles:!0,composed:!0}))}startOver(){this.showConfirmReset=!0}confirmReset(){this.showConfirmReset=!1,this.controller?(this.controller.reset(),this.text="",this.syncFromController()):(this.leftClamp=0,this.rightClamp=Math.min(3,this.duration),this.playhead=this.leftClamp,this.text=""),this.zoomLevel=1,this.viewOffset=0,this.scheduleDraw()}cancelReset(){this.showConfirmReset=!1}updated(p){super.updated(p),(p.has("viewOffset")||p.has("zoomLevel")||p.has("peaks")||p.has("visualMode"))&&this.scheduleDraw(),(p.has("leftClamp")||p.has("rightClamp")||p.has("playhead")||p.has("isPlaying"))&&this.requestUpdate()}scheduleDraw(){this.drawQueued||(this.drawQueued=!0,requestAnimationFrame(()=>{this.drawQueued=!1,this.drawWaveform()}))}drawWaveform(){if(!this.canvas||!this.peaks.length)return;const p=this.canvas.getContext("2d");if(!p)return;const a=this.canvas.getBoundingClientRect();if(a.width===0||a.height===0)return;const i=window.devicePixelRatio||1;this.canvas.width=a.width*i,this.canvas.height=a.height*i,p.scale(i,i);const d=a.width,u=a.height,l=getComputedStyle(this),c=l.getPropertyValue("--bg-surface").trim(),h=l.getPropertyValue("--accent-coral").trim(),v=l.getPropertyValue("--accent-green").trim(),x=l.getPropertyValue("--accent-yellow").trim();switch(p.clearRect(0,0,d,u),p.fillStyle=c,p.fillRect(0,0,d,u),this.visualMode){case"classic":this.drawClassicWaveform(p,d,u,l,x);break;case"neon":this.drawNeonPulseWaveform(p,d,u,l,h,v);break;case"mirror":this.drawMirroredWaveform(p,d,u,l,x);break;default:this.drawClassicWaveform(p,d,u,l,x)}}drawWaveformSegment(p,a,i,d,u,l=0,c=1){const h=this.peaks,v=h.length,x=this.duration/this.zoomLevel,A=Math.floor(this.viewOffset/this.duration*v),_=Math.ceil((this.viewOffset+x)/this.duration*v),E=i/2+l;p.strokeStyle=d,p.lineWidth=1,p.beginPath();const g=this.maxPeak>0?1/this.maxPeak:1;for(let C=A;C<_;C++){if(C<0||C>=v)continue;const y=C/v*this.duration,S=this.timeToPixel(y),w=h[C]*g*(i/2)*.9*c;C===A?p.moveTo(S,E-w):p.lineTo(S,E-w),p.lineTo(S,E+w)}p.stroke(),u&&(p.lineTo(a,E),p.lineTo(0,E),p.fillStyle=u,p.fill())}drawClassicWaveform(p,a,i,d,u){this.drawWaveformSegment(p,a,i,u);const l=this.timeToPixel(this.leftClamp),h=this.timeToPixel(this.rightClamp)-l;h>0&&(p.fillStyle="rgba(255, 107, 107, 0.1)",p.fillRect(l,0,h,i))}drawNeonPulseWaveform(p,a,i,d,u,l){p.shadowBlur=8,p.shadowColor=u,p.globalCompositeOperation="lighter",this.drawWaveformSegment(p,a,i,u);const c=this.timeToPixel(this.leftClamp),v=this.timeToPixel(this.rightClamp)-c;v>0&&(p.save(),p.beginPath(),p.rect(c,0,v,i),p.clip(),p.shadowBlur=15,p.shadowColor=l,this.drawWaveformSegment(p,a,i,l),p.restore()),p.shadowBlur=0,p.globalCompositeOperation="source-over"}drawMirroredWaveform(p,a,i,d,u){const l=i/2;p.save(),p.translate(0,l),p.beginPath(),this.drawWaveformSegment(p,a,i,u,void 0,0,1),p.restore(),p.save(),p.translate(0,l),p.scale(1,-1),p.globalAlpha=.5,p.beginPath(),this.drawWaveformSegment(p,a,i,u,void 0,0,1),p.restore(),p.globalAlpha=1,p.strokeStyle=getComputedStyle(this).getPropertyValue("--border-subtle").trim(),p.lineWidth=1,p.beginPath(),p.moveTo(0,l),p.lineTo(a,l),p.stroke();const c=this.timeToPixel(this.leftClamp),v=this.timeToPixel(this.rightClamp)-c;v>0&&(p.fillStyle="rgba(255, 107, 107, 0.1)",p.fillRect(c,0,v,i))}formatTime(p){return p.toFixed(2)+"s"}render(){const p=this.timeToPxString(this.leftClamp),a=this.timeToPxString(this.rightClamp),i=this.timeToPxString(this.playhead);return ie`
      <div class="page">
        <div class="header">
          <div class="title">Audio-Text Alignment</div>
          <div class="stats">
            <span>Segment: ${this.formatTime(this.leftClamp)} → ${this.formatTime(this.rightClamp)}</span>
            <span>Length: ${this.formatTime(this.rightClamp-this.leftClamp)}</span>
            <span>Duration: ${this.formatTime(this.duration)}</span>
          </div>
        </div>

        <div class="visual">
          <div class="wave-wrap ${this.isPanning?"grabbing":""}"
            @pointerdown=${this.handleMouseDown}
            @wheel=${this.handleWheel}
          >
            <canvas></canvas>
            
            <!-- Interactive Clamps -->
            <div 
              class="clamp-handle left ${this.draggingClamp==="left"?"dragging":""}"
              style="left:${p}"
              @pointerdown=${d=>this.handleClampMouseDown(d,"left")}
            >
              <div class="clamp-line"></div>
            </div>
            
            <div 
              class="clamp-handle right ${this.draggingClamp==="right"?"dragging":""}"
              style="left:${a}"
              @pointerdown=${d=>this.handleClampMouseDown(d,"right")}
            >
              <div class="clamp-line"></div>
            </div>

            <div class="marker-label" style="left:${p}">${this.formatTime(this.leftClamp)}</div>
            <div class="marker-label" style="left:${a}">${this.formatTime(this.rightClamp)}</div>
            <div class="playhead-line" style="left:${i}"></div>
          </div>
          
          <div class="controls">
            <button class="btn" @click=${this.handlePlayPause}>
              ${ue(this.isPlaying?qo:la)}
              <span>${this.isPlaying?"Pause":"Play"}</span>
            </button>
            <button class="btn" @click=${this.handleLoopToggle} ?aria-pressed=${this.loop}>
              ${ue(Wo)}
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
              <select id="visualModeSelect" @change=${d=>this.visualMode=d.target.value}>
                <option value="classic" ?selected=${this.visualMode==="classic"}>Classic</option>
                <option value="neon" ?selected=${this.visualMode==="neon"}>Neon Pulse</option>
                <option value="mirror" ?selected=${this.visualMode==="mirror"}>Mirrored</option>
              </select>
            </div>
          </div>
        </div>

        <div class="visual" style="display:flex; flex-direction:column; gap: var(--spacing-2);">
          <div class="title" style="font-size: var(--text-base);">Segment Text</div>
          <textarea
            .value=${this.text}
            @input=${d=>this.text=d.target.value}
            placeholder="Type the transcript for this segment..."
          ></textarea>
        </div>

        <div class="footer">
          <div>${this.formatTime(this.rightClamp-this.leftClamp)} segment</div>
          <div style="display:flex; gap: var(--spacing-2);">
            <button class="btn" @click=${this.handleSave}>
              ${ue(Ho)}
              <span>Save Progress</span>
            </button>
            <button class="btn primary" @click=${this.handleComplete} ?disabled=${!this.text.trim()}>
              ${ue(Zo)}
              <span>Confirm & Next</span>
            </button>
          </div>
        </div>

        ${this.showConfirmReset?ie`
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
    `}};Qt.styles=rr`
    :host {
      display: block;
      height: 100%;
      background: var(--bg-primary);
      color: var(--text-primary);
      font-family: var(--font-ui);
    }

    .page {
      height: 100%;
      display: grid;
      grid-template-rows: auto auto 1fr auto;
      gap: var(--spacing-3);
      padding: var(--spacing-4);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-3) var(--spacing-4);
    }

    .title {
      font-size: var(--text-xl);
      font-weight: var(--font-bold);
    }

    .stats {
      display: flex;
      gap: var(--spacing-3);
      font-family: var(--font-data);
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }

    .visual {
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-3);
    }

    .wave-wrap {
      position: relative;
      height: 160px;
      background: var(--bg-surface);
      border-radius: var(--radius-md);
      overflow: hidden;
      cursor: grab; /* Default cursor for grab-to-pan */
    }
    
    .wave-wrap.grabbing {
      cursor: grabbing; /* Cursor when actively panning */
    }

    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }

    /* Interactive clamps (hit areas) */
    .clamp-handle {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 20px; /* Wider hit area for easy grabbing */
      transform: translateX(-50%); /* Center the 20px hit area on the actual line */
      cursor: col-resize;
      z-index: 20; /* Ensure it's above other elements */
      display: flex; /* For centering the visible line */
      justify-content: center; /* For centering the visible line */
      pointer-events: all; /* Important for receiving events */
    }
    
    .clamp-handle:hover .clamp-line,
    .clamp-handle.dragging .clamp-line {
      width: 4px; /* Make the visible line thicker on hover/drag */
    }

    .clamp-line {
      width: 2px; /* Default visible line thickness */
      height: 100%;
      transition: width 0.1s; /* Smooth transition for thickness */
    }
    
    .clamp-handle.left .clamp-line { background: var(--accent-green); } /* Use theme variable */
    .clamp-handle.right .clamp-line { background: var(--accent-coral); } /* Use theme variable */

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
      background: var(--accent-coral); /* Use theme variable */
      pointer-events: none;
      z-index: 10;
    }

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-2);
      margin-top: var(--spacing-3);
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
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      transition: transform 120ms ease, box-shadow 120ms ease;
    }

    .btn:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .btn:active {
      transform: translateY(0);
      box-shadow: none;
    }

    .btn.primary {
      background: var(--color-signal-active);
      border-color: var(--color-signal-active);
      color: #0a0a0a;
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    textarea {
      width: 100%;
      height: 100%;
      min-height: 220px;
      padding: var(--spacing-3);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      background: var(--bg-surface);
      color: var(--text-primary);
      font-family: var(--font-ui);
      font-size: var(--text-base);
      resize: vertical;
      transition: border-color 120ms ease;
    }

    textarea:focus {
      outline: none;
      border-color: var(--color-signal-active);
    }

    .visualizer-selector {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      margin-left: auto; /* Push to right */
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }

    select {
      background: var(--glass-bg);
      color: var(--text-primary);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      padding: var(--spacing-2) var(--spacing-3);
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      cursor: pointer;
      outline: none;
      transition: border-color 120ms ease;
    }

    select:hover {
      border-color: var(--color-signal-active);
    }

    select:focus {
      border-color: var(--color-signal-active);
      box-shadow: 0 0 0 2px var(--color-signal-active-alpha, rgba(57, 255, 20, 0.2));
    }

    /* Custom scrollbar for textarea */
    textarea::-webkit-scrollbar {
      width: 8px;
    }
    textarea::-webkit-scrollbar-track {
      background: transparent;
    }
    textarea::-webkit-scrollbar-thumb {
      background-color: var(--glass-border);
      border-radius: 4px;
    }
    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(--text-secondary);
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-3) var(--spacing-4);
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
  `;ae([sr({type:Object})],Qt.prototype,"audioBlob",2);ae([sr({type:String})],Qt.prototype,"recordingId",2);ae([Jt()],Qt.prototype,"duration",2);ae([Jt()],Qt.prototype,"leftClamp",2);ae([Jt()],Qt.prototype,"rightClamp",2);ae([Jt()],Qt.prototype,"text",2);ae([Jt()],Qt.prototype,"isPlaying",2);ae([Jt()],Qt.prototype,"loop",2);ae([Jt()],Qt.prototype,"showConfirmReset",2);ae([Jt()],Qt.prototype,"playhead",2);ae([Jt()],Qt.prototype,"visualMode",2);ae([Jt()],Qt.prototype,"zoomLevel",2);ae([Jt()],Qt.prototype,"viewOffset",2);ae([Jt()],Qt.prototype,"isPanning",2);ae([Jt()],Qt.prototype,"playbackRate",2);ae([oo("canvas")],Qt.prototype,"canvas",2);Qt=ae([or("annotation-workflow")],Qt);const Xo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Jo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Qo=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,Vr=(p,a,i,d)=>{for(var u=d>1?void 0:d?ts(a,i):a,l=p.length-1,c;l>=0;l--)(c=p[l])&&(u=(d?c(a,i,u):c(u))||u);return d&&u&&Qo(a,i,u),u};let Sn=class extends Be{constructor(){super(...arguments),this.recording=null,this.existingAnnotation=null}async connectedCallback(){super.connectedCallback(),this.recording?.isAnnotated&&(this.existingAnnotation=await bn(this.recording.id)||null)}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async handleStartOver(){!this.recording||!confirm("Are you sure you want to start over? This will delete all current annotations.")||(await ko(this.recording.id),this.existingAnnotation=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("annotation-reset",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})))}async handleAnnotationComplete(p){if(!this.recording)return;const{annotations:a,fullText:i}=p.detail,d={recordingId:this.recording.id,fullText:i,segments:a,completedAt:Date.now(),updatedAt:Date.now()};await Mr(d),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})),this.handleClose()}async handleAnnotationSaved(p){if(!this.recording)return;const{allAnnotations:a}=p.detail,i=await bn(this.recording.id);i&&(i.segments=a,i.updatedAt=Date.now(),await Mr(i))}async handleProgressSaved(p){if(!this.recording)return;const{annotations:a}=p.detail;let i=await bn(this.recording.id);i?(i.segments=a,i.updatedAt=Date.now()):i={recordingId:this.recording.id,fullText:"",segments:a,completedAt:0,updatedAt:Date.now()},await Mr(i)}render(){return this.recording?ie`
      <div class="modal-header">
        <div class="title-section">
          <div class="modal-title">Annotating: ${this.recording.title}</div>
          <div class="subtitle">
            Duration: ${this.recording.duration.toFixed(2)}s |
            Source: ${this.recording.source}
          </div>
        </div>

        <div class="header-actions">
          ${this.existingAnnotation?ie`
                <button
                  class="header-btn danger"
                  @click=${this.handleStartOver}
                  title="Delete all annotations and start over"
                >
                  ${ue(Jo)}
                  <span>Start Over</span>
                </button>
              `:null}

          <button
            class="header-btn"
            @click=${this.handleClose}
            title="Close without saving"
          >
            ${ue(Xo)}
            <span>Close</span>
          </button>
        </div>
      </div>

      <div class="modal-content">
        <annotation-workflow
          .audioBlob=${this.recording.audioBlob}
          .recordingId=${this.recording.id}
          @annotation-complete=${this.handleAnnotationComplete}
          @annotation-saved=${this.handleAnnotationSaved}
          @progress-saved=${this.handleProgressSaved}
        ></annotation-workflow>
      </div>
    `:ie`<div>No recording selected</div>`}};Sn.styles=rr`
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
  `;Vr([sr({type:Object})],Sn.prototype,"recording",2);Vr([Jt()],Sn.prototype,"existingAnnotation",2);Sn=Vr([or("annotation-modal")],Sn);const es=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ns=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,rs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,is=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,as=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,qi=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,os=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ss=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var ls=Object.defineProperty,us=Object.getOwnPropertyDescriptor,sn=(p,a,i,d)=>{for(var u=d>1?void 0:d?us(a,i):a,l=p.length-1,c;l>=0;l--)(c=p[l])&&(u=(d?c(a,i,u):c(u))||u);return d&&u&&ls(a,i,u),u};let je=class extends Be{constructor(){super(...arguments),this.recordings=[],this.isRecording=!1,this.recordingDuration=0,this.selectedRecording=null,this.isModalOpen=!1,this.microphoneService=null,this.mediaRecorderService=null,this.recordingTimer=null}async connectedCallback(){super.connectedCallback(),await this.loadRecordings()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async loadRecordings(){this.recordings=await Ji()}async startRecording(){try{this.microphoneService=new co;const p=await this.microphoneService.requestPermission();this.mediaRecorderService=new ho,await this.mediaRecorderService.initialize(p),this.mediaRecorderService.onStateChange(a=>{a==="recording"&&!this.recordingTimer&&(this.isRecording=!0,this.recordingTimer=window.setInterval(()=>{this.recordingDuration+=.25;const i=this.shadowRoot?.querySelector(".duration");i&&(i.textContent=this.formatDuration(this.recordingDuration))},250))}),this.recordingDuration=0,this.mediaRecorderService.start()}catch(p){console.error("Failed to start recording:",p),alert("Failed to start recording. Please check microphone permissions."),this.cleanup()}}async stopRecording(){if(this.mediaRecorderService)try{const p=await this.mediaRecorderService.stop(),a=this.recordingDuration,d=`Untitled ${await So()}`;await Xi({title:d,audioBlob:p,duration:a,source:"recording"}),await this.loadRecordings()}catch(p){console.error("Failed to save recording:",p),alert("Failed to save recording.")}finally{this.cleanup()}}cleanup(){this.isRecording=!1,this.recordingDuration=0,this.recordingTimer&&(clearInterval(this.recordingTimer),this.recordingTimer=null),this.microphoneService?.release(),this.mediaRecorderService=null,this.microphoneService=null}async handleUpload(){const p=await Po();if(!(!p||p.length===0))try{await Oo(p),await this.loadRecordings()}catch(a){console.error("Failed to upload files:",a),alert("Failed to upload files.")}}async handleTitleChange(p,a){await _o(p.id,{title:a}),await this.loadRecordings()}async handlePlay(p){new Audio(URL.createObjectURL(p.audioBlob)).play()}handleAnnotate(p){this.selectedRecording=p,this.isModalOpen=!0}async handleExport(p){try{await zo(p.id)}catch(a){console.error("Failed to export recording:",a),alert(a instanceof Error?a.message:"Failed to export recording.")}}async handleDelete(p){confirm(`Are you sure you want to delete "${p.title}"? This cannot be undone.`)&&(await xo(p.id),await this.loadRecordings())}async handleExportAll(){try{await Do()}catch(p){console.error("Failed to export all recordings:",p),alert(p instanceof Error?p.message:"Failed to export recordings.")}}handleModalClose(){this.isModalOpen=!1,this.selectedRecording=null,this.loadRecordings()}formatDuration(p){const a=Math.floor(p/60),i=Math.floor(p%60);return`${a}:${i.toString().padStart(2,"0")}`}render(){return ie`
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
          ${this.isRecording?null:ie`
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
              ${ue(this.isRecording?ns:es)}
              <span>${this.isRecording?"Stop Recording":"Record Audio"}</span>
            </button>

            ${this.isRecording?ie`<div class="duration">${this.formatDuration(this.recordingDuration)}</div>`:ie`
                  <button class="upload-btn" @click=${this.handleUpload}>
                    ${ue(rs)}
                    <span>Upload Files</span>
                  </button>
                `}
          </div>
        </div>

        <!-- Recordings Table -->
        <div class="recordings-header">
          <h2 class="section-title">Recordings (${this.recordings.length})</h2>
          ${this.recordings.some(p=>p.isAnnotated)?ie`
                <button class="export-all-btn" @click=${this.handleExportAll}>
                  ${ue(qi)}
                  <span>Export All</span>
                </button>
              `:null}
        </div>

        <div class="recordings-table">
          ${this.recordings.length===0?ie`
                <div class="empty-state">
                  <div class="empty-icon">${ue(ss)}</div>
                  <div class="empty-title">No recordings yet</div>
                  <div class="empty-description">
                    Start recording or upload audio files to begin annotating your voice data
                  </div>
                </div>
              `:ie`
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
                    ${this.recordings.map(p=>ie`
                        <tr>
                          <td>
                            ${p.isAnnotated?ie`${ue(os)}`:""}
                          </td>
                          <td>
                            <div class="title-cell">
                              <input
                                class="title-input"
                                type="text"
                                .value=${p.title}
                                @change=${a=>this.handleTitleChange(p,a.target.value)}
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
                                ${ue(la)}
                                <span>Play</span>
                              </button>

                              <button
                                class="action-btn"
                                @click=${()=>this.handleAnnotate(p)}
                                title="Annotate audio"
                              >
                                ${ue(is)}
                                <span>Annotate</span>
                              </button>

                              ${p.isAnnotated?ie`
                                    <button
                                      class="action-btn"
                                      @click=${()=>this.handleExport(p)}
                                      title="Export annotation"
                                    >
                                      ${ue(qi)}
                                      <span>Export</span>
                                    </button>
                                  `:null}

                              <button
                                class="action-btn danger"
                                @click=${()=>this.handleDelete(p)}
                                title="Delete recording"
                              >
                                ${ue(as)}
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
      ${this.isModalOpen&&this.selectedRecording?ie`
            <annotation-modal
              .recording=${this.selectedRecording}
              @close=${this.handleModalClose}
              @annotation-saved=${this.handleModalClose}
            ></annotation-modal>
          `:null}
    `}};je.styles=rr`
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
  `;sn([Jt()],je.prototype,"recordings",2);sn([Jt()],je.prototype,"isRecording",2);sn([Jt()],je.prototype,"recordingDuration",2);sn([Jt()],je.prototype,"selectedRecording",2);sn([Jt()],je.prototype,"isModalOpen",2);je=sn([or("minimal-recorder")],je);const ua=p=>{document.body.setAttribute("data-theme",p)};ua(wn.getCurrentTheme());wn.subscribe(p=>{ua(p.currentTheme)});

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const dn=globalThis,si=dn.ShadowRoot&&(dn.ShadyCSS===void 0||dn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oi=Symbol(),Hi=new WeakMap;let wa=class{constructor(r,n,s){if(this._$cssResult$=!0,s!==oi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=n}get styleSheet(){let r=this.o;const n=this.t;if(si&&r===void 0){const s=n!==void 0&&n.length===1;s&&(r=Hi.get(n)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),s&&Hi.set(n,r))}return r}toString(){return this.cssText}};const fs=i=>new wa(typeof i=="string"?i:i+"",void 0,oi),nr=(i,...r)=>{const n=i.length===1?i[0]:r.reduce(((s,o,l)=>s+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[l+1]),i[0]);return new wa(n,i,oi)},ps=(i,r)=>{if(si)i.adoptedStyleSheets=r.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of r){const s=document.createElement("style"),o=dn.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=n.cssText,i.appendChild(s)}},Zi=si?i=>i:i=>i instanceof CSSStyleSheet?(r=>{let n="";for(const s of r.cssRules)n+=s.cssText;return fs(n)})(i):i;const{is:ms,defineProperty:gs,getOwnPropertyDescriptor:vs,getOwnPropertyNames:ys,getOwnPropertySymbols:bs,getPrototypeOf:ws}=Object,yn=globalThis,Vi=yn.trustedTypes,_s=Vi?Vi.emptyScript:"",xs=yn.reactiveElementPolyfillSupport,Or=(i,r)=>i,pn={toAttribute(i,r){switch(r){case Boolean:i=i?_s:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,r){let n=i;switch(r){case Boolean:n=i!==null;break;case Number:n=i===null?null:Number(i);break;case Object:case Array:try{n=JSON.parse(i)}catch{n=null}}return n}},li=(i,r)=>!ms(i,r),Yi={attribute:!0,type:String,converter:pn,reflect:!1,useDefault:!1,hasChanged:li};Symbol.metadata??=Symbol("metadata"),yn.litPropertyMetadata??=new WeakMap;let vr=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,n=Yi){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(r,n),!n.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(r,s,n);o!==void 0&&gs(this.prototype,r,o)}}static getPropertyDescriptor(r,n,s){const{get:o,set:l}=vs(this.prototype,r)??{get(){return this[n]},set(u){this[n]=u}};return{get:o,set(u){const d=o?.call(this);l?.call(this,u),this.requestUpdate(r,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Yi}static _$Ei(){if(this.hasOwnProperty(Or("elementProperties")))return;const r=ws(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Or("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Or("properties"))){const n=this.properties,s=[...ys(n),...bs(n)];for(const o of s)this.createProperty(o,n[o])}const r=this[Symbol.metadata];if(r!==null){const n=litPropertyMetadata.get(r);if(n!==void 0)for(const[s,o]of n)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const o=this._$Eu(n,s);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const n=[];if(Array.isArray(r)){const s=new Set(r.flat(1/0).reverse());for(const o of s)n.unshift(Zi(o))}else r!==void 0&&n.push(Zi(r));return n}static _$Eu(r,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((r=>this.enableUpdating=r)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((r=>r(this)))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(r.set(s,this[s]),delete this[s]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ps(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((r=>r.hostConnected?.()))}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach((r=>r.hostDisconnected?.()))}attributeChangedCallback(r,n,s){this._$AK(r,s)}_$ET(r,n){const s=this.constructor.elementProperties.get(r),o=this.constructor._$Eu(r,s);if(o!==void 0&&s.reflect===!0){const l=(s.converter?.toAttribute!==void 0?s.converter:pn).toAttribute(n,s.type);this._$Em=r,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$Em=null}}_$AK(r,n){const s=this.constructor,o=s._$Eh.get(r);if(o!==void 0&&this._$Em!==o){const l=s.getPropertyOptions(o),u=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:pn;this._$Em=o;const d=u.fromAttribute(n,l.type);this[o]=d??this._$Ej?.get(o)??d,this._$Em=null}}requestUpdate(r,n,s){if(r!==void 0){const o=this.constructor,l=this[r];if(s??=o.getPropertyOptions(r),!((s.hasChanged??li)(l,n)||s.useDefault&&s.reflect&&l===this._$Ej?.get(r)&&!this.hasAttribute(o._$Eu(r,s))))return;this.C(r,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,n,{useDefault:s,reflect:o,wrapped:l},u){s&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,u??n??this[r]),l!==!0||u!==void 0)||(this._$AL.has(r)||(this.hasUpdated||s||(n=void 0),this._$AL.set(r,n)),o===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,l]of this._$Ep)this[o]=l;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,l]of s){const{wrapped:u}=l,d=this[o];u!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,l,d)}}let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(n)):this._$EM()}catch(s){throw r=!1,this._$EM(),s}r&&this._$AE(n)}willUpdate(r){}_$AE(r){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(r){}firstUpdated(r){}};vr.elementStyles=[],vr.shadowRootOptions={mode:"open"},vr[Or("elementProperties")]=new Map,vr[Or("finalized")]=new Map,xs?.({ReactiveElement:vr}),(yn.reactiveElementVersions??=[]).push("2.1.1");const ci=globalThis,mn=ci.trustedTypes,Gi=mn?mn.createPolicy("lit-html",{createHTML:i=>i}):void 0,_a="$lit$",qe=`lit$${Math.random().toFixed(9).slice(2)}$`,xa="?"+qe,ks=`<${xa}>`,er=document,Ir=()=>er.createComment(""),Dr=i=>i===null||typeof i!="object"&&typeof i!="function",ui=Array.isArray,Ss=i=>ui(i)||typeof i?.[Symbol.iterator]=="function",Yn=`[ 	
\f\r]`,Tr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xi=/-->/g,Ji=/>/g,Je=RegExp(`>|${Yn}(?:([^\\s"'>=/]+)(${Yn}*=${Yn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qi=/'/g,ta=/"/g,ka=/^(?:script|style|textarea|title)$/i,Cs=i=>(r,...n)=>({_$litType$:i,strings:r,values:n}),Nt=Cs(1),rr=Symbol.for("lit-noChange"),ae=Symbol.for("lit-nothing"),ea=new WeakMap,tr=er.createTreeWalker(er,129);function Sa(i,r){if(!ui(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gi!==void 0?Gi.createHTML(r):r}const Es=(i,r)=>{const n=i.length-1,s=[];let o,l=r===2?"<svg>":r===3?"<math>":"",u=Tr;for(let d=0;d<n;d++){const m=i[d];let b,_,w=-1,C=0;for(;C<m.length&&(u.lastIndex=C,_=u.exec(m),_!==null);)C=u.lastIndex,u===Tr?_[1]==="!--"?u=Xi:_[1]!==void 0?u=Ji:_[2]!==void 0?(ka.test(_[2])&&(o=RegExp("</"+_[2],"g")),u=Je):_[3]!==void 0&&(u=Je):u===Je?_[0]===">"?(u=o??Tr,w=-1):_[1]===void 0?w=-2:(w=u.lastIndex-_[2].length,b=_[1],u=_[3]===void 0?Je:_[3]==='"'?ta:Qi):u===ta||u===Qi?u=Je:u===Xi||u===Ji?u=Tr:(u=Je,o=void 0);const v=u===Je&&i[d+1].startsWith("/>")?" ":"";l+=u===Tr?m+ks:w>=0?(s.push(b),m.slice(0,w)+_a+m.slice(w)+qe+v):m+qe+(w===-2?d:v)}return[Sa(i,l+(i[n]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),s]};class zr{constructor({strings:r,_$litType$:n},s){let o;this.parts=[];let l=0,u=0;const d=r.length-1,m=this.parts,[b,_]=Es(r,n);if(this.el=zr.createElement(b,s),tr.currentNode=this.el.content,n===2||n===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(o=tr.nextNode())!==null&&m.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const w of o.getAttributeNames())if(w.endsWith(_a)){const C=_[u++],v=o.getAttribute(w).split(qe),E=/([.?@])?(.*)/.exec(C);m.push({type:1,index:l,name:E[2],strings:v,ctor:E[1]==="."?Ts:E[1]==="?"?Ps:E[1]==="@"?Os:bn}),o.removeAttribute(w)}else w.startsWith(qe)&&(m.push({type:6,index:l}),o.removeAttribute(w));if(ka.test(o.tagName)){const w=o.textContent.split(qe),C=w.length-1;if(C>0){o.textContent=mn?mn.emptyScript:"";for(let v=0;v<C;v++)o.append(w[v],Ir()),tr.nextNode(),m.push({type:2,index:++l});o.append(w[C],Ir())}}}else if(o.nodeType===8)if(o.data===xa)m.push({type:2,index:l});else{let w=-1;for(;(w=o.data.indexOf(qe,w+1))!==-1;)m.push({type:7,index:l}),w+=qe.length-1}l++}}static createElement(r,n){const s=er.createElement("template");return s.innerHTML=r,s}}function yr(i,r,n=i,s){if(r===rr)return r;let o=s!==void 0?n._$Co?.[s]:n._$Cl;const l=Dr(r)?void 0:r._$litDirective$;return o?.constructor!==l&&(o?._$AO?.(!1),l===void 0?o=void 0:(o=new l(i),o._$AT(i,n,s)),s!==void 0?(n._$Co??=[])[s]=o:n._$Cl=o),o!==void 0&&(r=yr(i,o._$AS(i,r.values),o,s)),r}class As{constructor(r,n){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:n},parts:s}=this._$AD,o=(r?.creationScope??er).importNode(n,!0);tr.currentNode=o;let l=tr.nextNode(),u=0,d=0,m=s[0];for(;m!==void 0;){if(u===m.index){let b;m.type===2?b=new jr(l,l.nextSibling,this,r):m.type===1?b=new m.ctor(l,m.name,m.strings,this,r):m.type===6&&(b=new Rs(l,this,r)),this._$AV.push(b),m=s[++d]}u!==m?.index&&(l=tr.nextNode(),u++)}return tr.currentNode=er,o}p(r){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(r,s,n),n+=s.strings.length-2):s._$AI(r[n])),n++}}class jr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,n,s,o){this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=r,this._$AB=n,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&r?.nodeType===11&&(r=n.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,n=this){r=yr(this,r,n),Dr(r)?r===ae||r==null||r===""?(this._$AH!==ae&&this._$AR(),this._$AH=ae):r!==this._$AH&&r!==rr&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):Ss(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==ae&&Dr(this._$AH)?this._$AA.nextSibling.data=r:this.T(er.createTextNode(r)),this._$AH=r}$(r){const{values:n,_$litType$:s}=r,o=typeof s=="number"?this._$AC(r):(s.el===void 0&&(s.el=zr.createElement(Sa(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(n);else{const l=new As(o,this),u=l.u(this.options);l.p(n),this.T(u),this._$AH=l}}_$AC(r){let n=ea.get(r.strings);return n===void 0&&ea.set(r.strings,n=new zr(r)),n}k(r){ui(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,o=0;for(const l of r)o===n.length?n.push(s=new jr(this.O(Ir()),this.O(Ir()),this,this.options)):s=n[o],s._$AI(l),o++;o<n.length&&(this._$AR(s&&s._$AB.nextSibling,o),n.length=o)}_$AR(r=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);r!==this._$AB;){const s=r.nextSibling;r.remove(),r=s}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}}class bn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,n,s,o,l){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=r,this.name=n,this._$AM=o,this.options=l,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ae}_$AI(r,n=this,s,o){const l=this.strings;let u=!1;if(l===void 0)r=yr(this,r,n,0),u=!Dr(r)||r!==this._$AH&&r!==rr,u&&(this._$AH=r);else{const d=r;let m,b;for(r=l[0],m=0;m<l.length-1;m++)b=yr(this,d[s+m],n,m),b===rr&&(b=this._$AH[m]),u||=!Dr(b)||b!==this._$AH[m],b===ae?r=ae:r!==ae&&(r+=(b??"")+l[m+1]),this._$AH[m]=b}u&&!o&&this.j(r)}j(r){r===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class Ts extends bn{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===ae?void 0:r}}class Ps extends bn{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==ae)}}class Os extends bn{constructor(r,n,s,o,l){super(r,n,s,o,l),this.type=5}_$AI(r,n=this){if((r=yr(this,r,n,0)??ae)===rr)return;const s=this._$AH,o=r===ae&&s!==ae||r.capture!==s.capture||r.once!==s.once||r.passive!==s.passive,l=r!==ae&&(s===ae||o);o&&this.element.removeEventListener(this.name,this,s),l&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class Rs{constructor(r,n,s){this.element=r,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(r){yr(this,r)}}const $s=ci.litHtmlPolyfillSupport;$s?.(zr,jr),(ci.litHtmlVersions??=[]).push("3.3.1");const Is=(i,r,n)=>{const s=n?.renderBefore??r;let o=s._$litPart$;if(o===void 0){const l=n?.renderBefore??null;s._$litPart$=o=new jr(r.insertBefore(Ir(),l),l,void 0,n??{})}return o._$AI(i),o};const di=globalThis;let Se=class extends vr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=Is(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return rr}};Se._$litElement$=!0,Se.finalized=!0,di.litElementHydrateSupport?.({LitElement:Se});const Ds=di.litElementPolyfillSupport;Ds?.({LitElement:Se});(di.litElementVersions??=[]).push("4.2.1");const ir=i=>(r,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(i,r)})):customElements.define(i,r)};const zs={attribute:!0,type:String,converter:pn,reflect:!1,hasChanged:li},Bs=(i=zs,r,n)=>{const{kind:s,metadata:o}=n;let l=globalThis.litPropertyMetadata.get(o);if(l===void 0&&globalThis.litPropertyMetadata.set(o,l=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),l.set(n.name,i),s==="accessor"){const{name:u}=n;return{set(d){const m=r.get.call(this);r.set.call(this,d),this.requestUpdate(u,m,i)},init(d){return d!==void 0&&this.C(u,void 0,i,d),d}}}if(s==="setter"){const{name:u}=n;return function(d){const m=this[u];r.call(this,d),this.requestUpdate(u,m,i)}}throw Error("Unsupported decorator location: "+s)};function Xt(i){return(r,n)=>typeof n=="object"?Bs(i,r,n):((s,o,l)=>{const u=o.hasOwnProperty(l);return o.constructor.createProperty(l,s),u?Object.getOwnPropertyDescriptor(o,l):void 0})(i,r,n)}function Ft(i){return Xt({...i,state:!0,attribute:!1})}const Ms=(i,r,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(i,r,n),n);function Ca(i,r){return(n,s,o)=>{const l=u=>u.renderRoot?.querySelector(i)??null;return Ms(n,s,{get(){return l(this)}})}}const js={CHILD:2},Ns=i=>(...r)=>({_$litDirective$:i,values:r});class Us{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,n,s){this._$Ct=r,this._$AM=n,this._$Ci=s}_$AS(r,n){return this.update(r,n)}update(r,n){return this.render(...n)}}class ni extends Us{constructor(r){if(super(r),this.it=ae,r.type!==js.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===ae||r==null)return this._t=void 0,this.it=r;if(r===rr)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const n=[r];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}ni.directiveName="unsafeHTML",ni.resultType=1;const ie=Ns(ni);class Ls{constructor(){this.stream=null}async requestPermission(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("MediaDevices API not supported in this browser");try{return this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1,sampleRate:48e3,channelCount:1}}),this.stream}catch(r){throw r instanceof Error?new Error(`Microphone access denied: ${r.message}`):new Error("Microphone access denied")}}getStream(){return this.stream}release(){this.stream&&(this.stream.getTracks().forEach(r=>r.stop()),this.stream=null)}isActive(){return this.stream!==null&&this.stream.active}}class Fs{constructor(){this.mediaRecorder=null,this.chunks=[]}async initialize(r){if(!window.MediaRecorder)throw new Error("MediaRecorder API not supported in this browser");const n=this.getSupportedMimeType();if(!n)throw new Error("No supported audio MIME type found");this.mediaRecorder=new MediaRecorder(r,{mimeType:n,audioBitsPerSecond:128e3}),this.mediaRecorder.ondataavailable=s=>{s.data.size>0&&(this.chunks.push(s.data),this.onDataAvailableCallback?.(s.data))},this.mediaRecorder.onstop=()=>{this.onStateChangeCallback?.("inactive")},this.mediaRecorder.onstart=()=>{this.onStateChangeCallback?.("recording")},this.mediaRecorder.onpause=()=>{this.onStateChangeCallback?.("paused")},this.mediaRecorder.onresume=()=>{this.onStateChangeCallback?.("recording")}}getSupportedMimeType(){return["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/mp4"].find(n=>MediaRecorder.isTypeSupported(n))||null}start(r=0){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");this.mediaRecorder.state!=="recording"&&(this.chunks=[],this.mediaRecorder.start(r))}async stop(){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");return this.mediaRecorder.state==="inactive"?new Blob(this.chunks,{type:this.mediaRecorder.mimeType}):new Promise(r=>{this.mediaRecorder.onstop=()=>{const n=new Blob(this.chunks,{type:this.mediaRecorder.mimeType});this.onStateChangeCallback?.("inactive"),r(n)},this.mediaRecorder.stop()})}pause(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.pause()}resume(){this.mediaRecorder?.state==="paused"&&this.mediaRecorder.resume()}getState(){return this.mediaRecorder?.state||"inactive"}getMimeType(){return this.mediaRecorder?.mimeType||""}onDataAvailable(r){this.onDataAvailableCallback=r}onStateChange(r){this.onStateChangeCallback=r}release(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.stop(),this.mediaRecorder=null,this.chunks=[]}}const Ks="modulepreload",qs=function(i){return"/sonicceeper/"+i},ra={},Ws=function(r,n,s){let o=Promise.resolve();if(n&&n.length>0){let b=function(_){return Promise.all(_.map(w=>Promise.resolve(w).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};var u=b;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");o=b(n.map(_=>{if(_=qs(_),_ in ra)return;ra[_]=!0;const w=_.endsWith(".css"),C=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${C}`))return;const v=document.createElement("link");if(v.rel=w?"stylesheet":Ks,w||(v.as="script"),v.crossOrigin="",v.href=_,m&&v.setAttribute("nonce",m),document.head.appendChild(v),w)return new Promise((E,y)=>{v.addEventListener("load",E),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${_}`)))})}))}function l(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return o.then(d=>{for(const m of d||[])m.status==="rejected"&&l(m.reason);return r().catch(l)})};var $e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ea(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var hn={exports:{}},Hs=hn.exports,na;function Zs(){return na||(na=1,(function(i,r){(function(n,s){i.exports=s()})(Hs,function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&(a[h]=c[h])})(t,e)},s=function(){return(s=Object.assign||function(t){for(var e,a=1,c=arguments.length;a<c;a++)for(var h in e=arguments[a])Object.prototype.hasOwnProperty.call(e,h)&&(t[h]=e[h]);return t}).apply(this,arguments)};function o(t,e,a){for(var c,h=0,p=e.length;h<p;h++)!c&&h in e||((c=c||Array.prototype.slice.call(e,0,h))[h]=e[h]);return t.concat(c||Array.prototype.slice.call(e))}var l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:$e,u=Object.keys,d=Array.isArray;function m(t,e){return typeof e!="object"||u(e).forEach(function(a){t[a]=e[a]}),t}typeof Promise>"u"||l.Promise||(l.Promise=Promise);var b=Object.getPrototypeOf,_={}.hasOwnProperty;function w(t,e){return _.call(t,e)}function C(t,e){typeof e=="function"&&(e=e(b(t))),(typeof Reflect>"u"?u:Reflect.ownKeys)(e).forEach(function(a){E(t,a,e[a])})}var v=Object.defineProperty;function E(t,e,a,c){v(t,e,m(a&&w(a,"get")&&typeof a.get=="function"?{get:a.get,set:a.set,configurable:!0}:{value:a,configurable:!0,writable:!0},c))}function y(t){return{from:function(e){return t.prototype=Object.create(e.prototype),E(t.prototype,"constructor",t),{extend:C.bind(null,t.prototype)}}}}var A=Object.getOwnPropertyDescriptor,k=[].slice;function O(t,e,a){return k.call(t,e,a)}function B(t,e){return e(t)}function W(t){if(!t)throw new Error("Assertion Failed")}function K(t){l.setImmediate?setImmediate(t):setTimeout(t,0)}function rt(t,e){if(typeof e=="string"&&w(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var a=[],c=0,h=e.length;c<h;++c){var p=rt(t,e[c]);a.push(p)}return a}var x=e.indexOf(".");if(x!==-1){var P=t[e.substr(0,x)];return P==null?void 0:rt(P,e.substr(x+1))}}function X(t,e,a){if(t&&e!==void 0&&!("isFrozen"in Object&&Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){W(typeof a!="string"&&"length"in a);for(var c=0,h=e.length;c<h;++c)X(t,e[c],a[c])}else{var p,x,P=e.indexOf(".");P!==-1?(p=e.substr(0,P),(x=e.substr(P+1))===""?a===void 0?d(t)&&!isNaN(parseInt(p))?t.splice(p,1):delete t[p]:t[p]=a:X(P=!(P=t[p])||!w(t,p)?t[p]={}:P,x,a)):a===void 0?d(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=a}}function ct(t){var e,a={};for(e in t)w(t,e)&&(a[e]=t[e]);return a}var tt=[].concat;function pt(t){return tt.apply([],t)}var Et="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(pt([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(t){return l[t]}),Pt=new Set(Et.map(function(t){return l[t]})),$=null;function Q(t){return $=new WeakMap,t=(function e(a){if(!a||typeof a!="object")return a;var c=$.get(a);if(c)return c;if(d(a)){c=[],$.set(a,c);for(var h=0,p=a.length;h<p;++h)c.push(e(a[h]))}else if(Pt.has(a.constructor))c=a;else{var x,P=b(a);for(x in c=P===Object.prototype?{}:Object.create(P),$.set(a,c),a)w(a,x)&&(c[x]=e(a[x]))}return c})(t),$=null,t}var g={}.toString;function it(t){return g.call(t).slice(8,-1)}var Ot=typeof Symbol<"u"?Symbol.iterator:"@@iterator",lt=typeof Ot=="symbol"?function(t){var e;return t!=null&&(e=t[Ot])&&e.apply(t)}:function(){return null};function Rt(t,e){return e=t.indexOf(e),0<=e&&t.splice(e,1),0<=e}var ot={};function Tt(t){var e,a,c,h;if(arguments.length===1){if(d(t))return t.slice();if(this===ot&&typeof t=="string")return[t];if(h=lt(t)){for(a=[];!(c=h.next()).done;)a.push(c.value);return a}if(t==null)return[t];if(typeof(e=t.length)!="number")return[t];for(a=new Array(e);e--;)a[e]=t[e];return a}for(e=arguments.length,a=new Array(e);e--;)a[e]=arguments[e];return a}var Y=typeof Symbol<"u"?function(t){return t[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ht=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],xe=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ht),V={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function At(t,e){this.name=t,this.message=e}function xt(t,e){return t+". Errors: "+Object.keys(e).map(function(a){return e[a].toString()}).filter(function(a,c,h){return h.indexOf(a)===c}).join(`
`)}function vt(t,e,a,c){this.failures=e,this.failedKeys=c,this.successCount=a,this.message=xt(t,e)}function qt(t,e){this.name="BulkError",this.failures=Object.keys(e).map(function(a){return e[a]}),this.failuresByPos=e,this.message=xt(t,this.failures)}y(At).from(Error).extend({toString:function(){return this.name+": "+this.message}}),y(vt).from(At),y(qt).from(At);var ne=xe.reduce(function(t,e){return t[e]=e+"Error",t},{}),jt=At,mt=xe.reduce(function(t,e){var a=e+"Error";function c(h,p){this.name=a,h?typeof h=="string"?(this.message="".concat(h).concat(p?`
 `+p:""),this.inner=p||null):typeof h=="object"&&(this.message="".concat(h.name," ").concat(h.message),this.inner=h):(this.message=V[e]||a,this.inner=null)}return y(c).from(jt),t[e]=c,t},{});mt.Syntax=SyntaxError,mt.Type=TypeError,mt.Range=RangeError;var te=ht.reduce(function(t,e){return t[e+"Error"]=mt[e],t},{}),Wt=xe.reduce(function(t,e){return["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=mt[e]),t},{});function zt(){}function ce(t){return t}function f(t,e){return t==null||t===ce?e:function(a){return e(t(a))}}function et(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function G(t,e){return t===zt?e:function(){var a=t.apply(this,arguments);a!==void 0&&(arguments[0]=a);var c=this.onsuccess,h=this.onerror;this.onsuccess=null,this.onerror=null;var p=e.apply(this,arguments);return c&&(this.onsuccess=this.onsuccess?et(c,this.onsuccess):c),h&&(this.onerror=this.onerror?et(h,this.onerror):h),p!==void 0?p:a}}function T(t,e){return t===zt?e:function(){t.apply(this,arguments);var a=this.onsuccess,c=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),a&&(this.onsuccess=this.onsuccess?et(a,this.onsuccess):a),c&&(this.onerror=this.onerror?et(c,this.onerror):c)}}function S(t,e){return t===zt?e:function(a){var c=t.apply(this,arguments);m(a,c);var h=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,a=e.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?et(h,this.onsuccess):h),p&&(this.onerror=this.onerror?et(p,this.onerror):p),c===void 0?a===void 0?void 0:a:m(c,a)}}function U(t,e){return t===zt?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function st(t,e){return t===zt?e:function(){var a=t.apply(this,arguments);if(a&&typeof a.then=="function"){for(var c=this,h=arguments.length,p=new Array(h);h--;)p[h]=arguments[h];return a.then(function(){return e.apply(c,p)})}return e.apply(this,arguments)}}Wt.ModifyError=vt,Wt.DexieError=At,Wt.BulkError=qt;var at=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function H(t){at=t}var ut={},kt=100,Et=typeof Promise>"u"?[]:(function(){var t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,b(t),t];var e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,b(e),t]})(),ht=Et[0],xe=Et[1],Et=Et[2],xe=xe&&xe.then,Lt=ht&&ht.constructor,Bt=!!Et,se=function(t,e){ze.push([t,e]),pe&&(queueMicrotask(Ka),pe=!1)},Ae=!0,pe=!0,ve=[],Ht=[],De=ce,_e={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:zt,pgp:!1,env:{},finalize:zt},St=_e,ze=[],Te=0,sr=[];function _t(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var e=this._PSD=St;if(typeof t!="function"){if(t!==ut)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Me(this,this._value))}this._state=null,this._value=null,++e.ref,(function a(c,h){try{h(function(p){if(c._state===null){if(p===c)throw new TypeError("A promise cannot be resolved with itself.");var x=c._lib&&lr();p&&typeof p.then=="function"?a(c,function(P,I){p instanceof _t?p._then(P,I):p.then(P,I)}):(c._state=!0,c._value=p,pi(c)),x&&cr()}},Me.bind(null,c))}catch(p){Me(c,p)}})(this,t)}var or={get:function(){var t=St,e=Fr;function a(c,h){var p=this,x=!t.global&&(t!==St||e!==Fr),P=x&&!Ne(),I=new _t(function(D,N){wn(p,new Be(gi(c,t,x,P),gi(h,t,x,P),D,N,t))});return this._consoleTask&&(I._consoleTask=this._consoleTask),I}return a.prototype=ut,a},set:function(t){E(this,"then",t&&t.prototype===ut?or:{get:function(){return t},set:or.set})}};function Be(t,e,a,c,h){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=a,this.reject=c,this.psd=h}function Me(t,e){var a,c;Ht.push(e),t._state===null&&(a=t._lib&&lr(),e=De(e),t._state=!1,t._value=e,c=t,ve.some(function(h){return h._value===c._value})||ve.push(c),pi(t),a&&cr())}function pi(t){var e=t._listeners;t._listeners=[];for(var a=0,c=e.length;a<c;++a)wn(t,e[a]);var h=t._PSD;--h.ref||h.finalize(),Te===0&&(++Te,se(function(){--Te==0&&_n()},[]))}function wn(t,e){if(t._state!==null){var a=t._state?e.onFulfilled:e.onRejected;if(a===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Te,se(Fa,[a,t,e])}else t._listeners.push(e)}function Fa(t,e,a){try{var c,h=e._value;!e._state&&Ht.length&&(Ht=[]),c=at&&e._consoleTask?e._consoleTask.run(function(){return t(h)}):t(h),e._state||Ht.indexOf(h)!==-1||(function(p){for(var x=ve.length;x;)if(ve[--x]._value===p._value)return ve.splice(x,1)})(e),a.resolve(c)}catch(p){a.reject(p)}finally{--Te==0&&_n(),--a.psd.ref||a.psd.finalize()}}function Ka(){He(_e,function(){lr()&&cr()})}function lr(){var t=Ae;return pe=Ae=!1,t}function cr(){var t,e,a;do for(;0<ze.length;)for(t=ze,ze=[],a=t.length,e=0;e<a;++e){var c=t[e];c[0].apply(null,c[1])}while(0<ze.length);pe=Ae=!0}function _n(){var t=ve;ve=[],t.forEach(function(c){c._PSD.onunhandled.call(null,c._value,c)});for(var e=sr.slice(0),a=e.length;a;)e[--a]()}function Nr(t){return new _t(ut,!1,t)}function Yt(t,e){var a=St;return function(){var c=lr(),h=St;try{return Ue(a,!0),t.apply(this,arguments)}catch(p){e&&e(p)}finally{Ue(h,!1),c&&cr()}}}C(_t.prototype,{then:or,_then:function(t,e){wn(this,new Be(null,null,t,e,St))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=t,a=arguments[1];return typeof e=="function"?this.then(null,function(c){return(c instanceof e?a:Nr)(c)}):this.then(null,function(c){return(c&&c.name===e?a:Nr)(c)})},finally:function(t){return this.then(function(e){return _t.resolve(t()).then(function(){return e})},function(e){return _t.resolve(t()).then(function(){return Nr(e)})})},timeout:function(t,e){var a=this;return t<1/0?new _t(function(c,h){var p=setTimeout(function(){return h(new mt.Timeout(e))},t);a.then(c,h).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&E(_t.prototype,Symbol.toStringTag,"Dexie.Promise"),_e.env=mi(),C(_t,{all:function(){var t=Tt.apply(null,arguments).map(Kr);return new _t(function(e,a){t.length===0&&e([]);var c=t.length;t.forEach(function(h,p){return _t.resolve(h).then(function(x){t[p]=x,--c||e(t)},a)})})},resolve:function(t){return t instanceof _t?t:t&&typeof t.then=="function"?new _t(function(e,a){t.then(e,a)}):new _t(ut,!0,t)},reject:Nr,race:function(){var t=Tt.apply(null,arguments).map(Kr);return new _t(function(e,a){t.map(function(c){return _t.resolve(c).then(e,a)})})},PSD:{get:function(){return St},set:function(t){return St=t}},totalEchoes:{get:function(){return Fr}},newPSD:je,usePSD:He,scheduler:{get:function(){return se},set:function(t){se=t}},rejectionMapper:{get:function(){return De},set:function(t){De=t}},follow:function(t,e){return new _t(function(a,c){return je(function(h,p){var x=St;x.unhandleds=[],x.onunhandled=p,x.finalize=et(function(){var P,I=this;P=function(){I.unhandleds.length===0?h():p(I.unhandleds[0])},sr.push(function D(){P(),sr.splice(sr.indexOf(D),1)}),++Te,se(function(){--Te==0&&_n()},[])},x.finalize),t()},e,a,c)})}}),Lt&&(Lt.allSettled&&E(_t,"allSettled",function(){var t=Tt.apply(null,arguments).map(Kr);return new _t(function(e){t.length===0&&e([]);var a=t.length,c=new Array(a);t.forEach(function(h,p){return _t.resolve(h).then(function(x){return c[p]={status:"fulfilled",value:x}},function(x){return c[p]={status:"rejected",reason:x}}).then(function(){return--a||e(c)})})})}),Lt.any&&typeof AggregateError<"u"&&E(_t,"any",function(){var t=Tt.apply(null,arguments).map(Kr);return new _t(function(e,a){t.length===0&&a(new AggregateError([]));var c=t.length,h=new Array(c);t.forEach(function(p,x){return _t.resolve(p).then(function(P){return e(P)},function(P){h[x]=P,--c||a(new AggregateError(h))})})})}),Lt.withResolvers&&(_t.withResolvers=Lt.withResolvers));var oe={awaits:0,echoes:0,id:0},qa=0,Ur=[],Lr=0,Fr=0,Wa=0;function je(t,e,a,c){var h=St,p=Object.create(h);return p.parent=h,p.ref=0,p.global=!1,p.id=++Wa,_e.env,p.env=Bt?{Promise:_t,PromiseProp:{value:_t,configurable:!0,writable:!0},all:_t.all,race:_t.race,allSettled:_t.allSettled,any:_t.any,resolve:_t.resolve,reject:_t.reject}:{},e&&m(p,e),++h.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},c=He(p,t,a,c),p.ref===0&&p.finalize(),c}function ur(){return oe.id||(oe.id=++qa),++oe.awaits,oe.echoes+=kt,oe.id}function Ne(){return!!oe.awaits&&(--oe.awaits==0&&(oe.id=0),oe.echoes=oe.awaits*kt,!0)}function Kr(t){return oe.echoes&&t&&t.constructor===Lt?(ur(),t.then(function(e){return Ne(),e},function(e){return Ne(),ee(e)})):t}function Ha(){var t=Ur[Ur.length-1];Ur.pop(),Ue(t,!1)}function Ue(t,e){var a,c=St;(e?!oe.echoes||Lr++&&t===St:!Lr||--Lr&&t===St)||queueMicrotask(e?function(h){++Fr,oe.echoes&&--oe.echoes!=0||(oe.echoes=oe.awaits=oe.id=0),Ur.push(St),Ue(h,!0)}.bind(null,t):Ha),t!==St&&(St=t,c===_e&&(_e.env=mi()),Bt&&(a=_e.env.Promise,e=t.env,(c.global||t.global)&&(Object.defineProperty(l,"Promise",e.PromiseProp),a.all=e.all,a.race=e.race,a.resolve=e.resolve,a.reject=e.reject,e.allSettled&&(a.allSettled=e.allSettled),e.any&&(a.any=e.any))))}function mi(){var t=l.Promise;return Bt?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(l,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject}:{}}function He(t,e,a,c,h){var p=St;try{return Ue(t,!0),e(a,c,h)}finally{Ue(p,!1)}}function gi(t,e,a,c){return typeof t!="function"?t:function(){var h=St;a&&ur(),Ue(e,!0);try{return t.apply(this,arguments)}finally{Ue(h,!1),c&&queueMicrotask(Ne)}}}function xn(t){Promise===Lt&&oe.echoes===0?Lr===0?t():enqueueNativeMicroTask(t):setTimeout(t,0)}(""+xe).indexOf("[native code]")===-1&&(ur=Ne=zt);var ee=_t.reject,Ze="￿",Pe="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",vi="String expected.",dr=[],qr="__dbnames",kn="readonly",Sn="readwrite";function Ve(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}var yi={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Wr(t){return typeof t!="string"||/\./.test(t)?function(e){return e}:function(e){return e[t]===void 0&&t in e&&delete(e=Q(e))[t],e}}function bi(){throw mt.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Ut(t,e){try{var a=wi(t),c=wi(e);if(a!==c)return a==="Array"?1:c==="Array"?-1:a==="binary"?1:c==="binary"?-1:a==="string"?1:c==="string"?-1:a==="Date"?1:c!=="Date"?NaN:-1;switch(a){case"number":case"Date":case"string":return e<t?1:t<e?-1:0;case"binary":return(function(h,p){for(var x=h.length,P=p.length,I=x<P?x:P,D=0;D<I;++D)if(h[D]!==p[D])return h[D]<p[D]?-1:1;return x===P?0:x<P?-1:1})(_i(t),_i(e));case"Array":return(function(h,p){for(var x=h.length,P=p.length,I=x<P?x:P,D=0;D<I;++D){var N=Ut(h[D],p[D]);if(N!==0)return N}return x===P?0:x<P?-1:1})(t,e)}}catch{}return NaN}function wi(t){var e=typeof t;return e!="object"?e:ArrayBuffer.isView(t)?"binary":(t=it(t),t==="ArrayBuffer"?"binary":t)}function _i(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function Hr(t,e,a){var c=t.schema.yProps;return c?(e&&0<a.numFailures&&(e=e.filter(function(h,p){return!a.failures[p]})),Promise.all(c.map(function(h){return h=h.updatesTable,e?t.db.table(h).where("k").anyOf(e).delete():t.db.table(h).clear()})).then(function(){return a})):a}var br=(xi.prototype.execute=function(t){var e=this["@@propmod"];if(e.add!==void 0){var a=e.add;if(d(a))return o(o([],d(t)?t:[],!0),a).sort();if(typeof a=="number")return(Number(t)||0)+a;if(typeof a=="bigint")try{return BigInt(t)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(e.remove!==void 0){var c=e.remove;if(d(c))return d(t)?t.filter(function(h){return!c.includes(h)}).sort():[];if(typeof c=="number")return Number(t)-c;if(typeof c=="bigint")try{return BigInt(t)-c}catch{return BigInt(0)-c}throw new TypeError("Invalid subtrahend ".concat(c))}return a=(a=e.replacePrefix)===null||a===void 0?void 0:a[0],a&&typeof t=="string"&&t.startsWith(a)?e.replacePrefix[1]+t.substring(a.length):t},xi);function xi(t){this["@@propmod"]=t}function ki(t,e){for(var a=u(e),c=a.length,h=!1,p=0;p<c;++p){var x=a[p],P=e[x],I=rt(t,x);P instanceof br?(X(t,x,P.execute(I)),h=!0):I!==P&&(X(t,x,P),h=!0)}return h}var Si=(Zt.prototype._trans=function(t,e,a){var c=this._tx||St.trans,h=this.name,p=at&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function x(D,N,R){if(!R.schema[h])throw new mt.NotFound("Table "+h+" not part of transaction");return e(R.idbtrans,R)}var P=lr();try{var I=c&&c.db._novip===this.db._novip?c===St.trans?c._promise(t,x,a):je(function(){return c._promise(t,x,a)},{trans:c,transless:St.transless||St}):(function D(N,R,F,z){if(N.idbdb&&(N._state.openComplete||St.letThrough||N._vip)){var M=N._createTransaction(R,F,N._dbSchema);try{M.create(),N._state.PR1398_maxLoop=3}catch(j){return j.name===ne.InvalidState&&N.isOpen()&&0<--N._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),N.close({disableAutoOpen:!1}),N.open().then(function(){return D(N,R,F,z)})):ee(j)}return M._promise(R,function(j,L){return je(function(){return St.trans=M,z(j,L,M)})}).then(function(j){if(R==="readwrite")try{M.idbtrans.commit()}catch{}return R==="readonly"?j:M._completion.then(function(){return j})})}if(N._state.openComplete)return ee(new mt.DatabaseClosed(N._state.dbOpenError));if(!N._state.isBeingOpened){if(!N._state.autoOpen)return ee(new mt.DatabaseClosed);N.open().catch(zt)}return N._state.dbReadyPromise.then(function(){return D(N,R,F,z)})})(this.db,t,[this.name],x);return p&&(I._consoleTask=p,I=I.catch(function(D){return console.trace(D),ee(D)})),I}finally{P&&cr()}},Zt.prototype.get=function(t,e){var a=this;return t&&t.constructor===Object?this.where(t).first(e):t==null?ee(new mt.Type("Invalid argument to Table.get()")):this._trans("readonly",function(c){return a.core.get({trans:c,key:t}).then(function(h){return a.hook.reading.fire(h)})}).then(e)},Zt.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(d(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var e=u(t);if(e.length===1)return this.where(e[0]).equals(t[e[0]]);var a=this.schema.indexes.concat(this.schema.primKey).filter(function(P){if(P.compound&&e.every(function(D){return 0<=P.keyPath.indexOf(D)})){for(var I=0;I<e.length;++I)if(e.indexOf(P.keyPath[I])===-1)return!1;return!0}return!1}).sort(function(P,I){return P.keyPath.length-I.keyPath.length})[0];if(a&&this.db._maxKey!==Ze){var p=a.keyPath.slice(0,e.length);return this.where(p).equals(p.map(function(I){return t[I]}))}!a&&at&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(e.join("+"),"]"));var c=this.schema.idxByName;function h(P,I){return Ut(P,I)===0}var x=e.reduce(function(R,I){var D=R[0],N=R[1],R=c[I],F=t[I];return[D||R,D||!R?Ve(N,R&&R.multi?function(z){return z=rt(z,I),d(z)&&z.some(function(M){return h(F,M)})}:function(z){return h(F,rt(z,I))}):N]},[null,null]),p=x[0],x=x[1];return p?this.where(p.name).equals(t[p.keyPath]).filter(x):a?this.filter(x):this.where(e).equals("")},Zt.prototype.filter=function(t){return this.toCollection().and(t)},Zt.prototype.count=function(t){return this.toCollection().count(t)},Zt.prototype.offset=function(t){return this.toCollection().offset(t)},Zt.prototype.limit=function(t){return this.toCollection().limit(t)},Zt.prototype.each=function(t){return this.toCollection().each(t)},Zt.prototype.toArray=function(t){return this.toCollection().toArray(t)},Zt.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Zt.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,d(t)?"[".concat(t.join("+"),"]"):t))},Zt.prototype.reverse=function(){return this.toCollection().reverse()},Zt.prototype.mapToClass=function(t){var e,a=this.db,c=this.name;function h(){return e!==null&&e.apply(this,arguments)||this}(this.schema.mappedClass=t).prototype instanceof bi&&((function(I,D){if(typeof D!="function"&&D!==null)throw new TypeError("Class extends value "+String(D)+" is not a constructor or null");function N(){this.constructor=I}n(I,D),I.prototype=D===null?Object.create(D):(N.prototype=D.prototype,new N)})(h,e=t),Object.defineProperty(h.prototype,"db",{get:function(){return a},enumerable:!1,configurable:!0}),h.prototype.table=function(){return c},t=h);for(var p=new Set,x=t.prototype;x;x=b(x))Object.getOwnPropertyNames(x).forEach(function(I){return p.add(I)});function P(I){if(!I)return I;var D,N=Object.create(t.prototype);for(D in I)if(!p.has(D))try{N[D]=I[D]}catch{}return N}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=P,this.hook("reading",P),t},Zt.prototype.defineClass=function(){return this.mapToClass(function(t){m(this,t)})},Zt.prototype.add=function(t,e){var a=this,c=this.schema.primKey,h=c.auto,p=c.keyPath,x=t;return p&&h&&(x=Wr(p)(t)),this._trans("readwrite",function(P){return a.core.mutate({trans:P,type:"add",keys:e!=null?[e]:null,values:[x]})}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):P.lastResult}).then(function(P){if(p)try{X(t,p,P)}catch{}return P})},Zt.prototype.upsert=function(t,e){var a=this,c=this.schema.primKey.keyPath;return this._trans("readwrite",function(h){return a.core.get({trans:h,key:t}).then(function(p){var x=p??{};return ki(x,e),c&&X(x,c,t),a.core.mutate({trans:h,type:"put",values:[x],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[e]}}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):!!p})})})},Zt.prototype.update=function(t,e){return typeof t!="object"||d(t)?this.where(":id").equals(t).modify(e):(t=rt(t,this.schema.primKey.keyPath),t===void 0?ee(new mt.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(t).modify(e))},Zt.prototype.put=function(t,e){var a=this,c=this.schema.primKey,h=c.auto,p=c.keyPath,x=t;return p&&h&&(x=Wr(p)(t)),this._trans("readwrite",function(P){return a.core.mutate({trans:P,type:"put",values:[x],keys:e!=null?[e]:null})}).then(function(P){return P.numFailures?_t.reject(P.failures[0]):P.lastResult}).then(function(P){if(p)try{X(t,p,P)}catch{}return P})},Zt.prototype.delete=function(t){var e=this;return this._trans("readwrite",function(a){return e.core.mutate({trans:a,type:"delete",keys:[t]}).then(function(c){return Hr(e,[t],c)}).then(function(c){return c.numFailures?_t.reject(c.failures[0]):void 0})})},Zt.prototype.clear=function(){var t=this;return this._trans("readwrite",function(e){return t.core.mutate({trans:e,type:"deleteRange",range:yi}).then(function(a){return Hr(t,null,a)})}).then(function(e){return e.numFailures?_t.reject(e.failures[0]):void 0})},Zt.prototype.bulkGet=function(t){var e=this;return this._trans("readonly",function(a){return e.core.getMany({keys:t,trans:a}).then(function(c){return c.map(function(h){return e.hook.reading.fire(h)})})})},Zt.prototype.bulkAdd=function(t,e,a){var c=this,h=Array.isArray(e)?e:void 0,p=(a=a||(h?void 0:e))?a.allKeys:void 0;return this._trans("readwrite",function(x){var D=c.schema.primKey,P=D.auto,D=D.keyPath;if(D&&h)throw new mt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(h&&h.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var I=t.length,D=D&&P?t.map(Wr(D)):t;return c.core.mutate({trans:x,type:"add",keys:h,values:D,wantResults:p}).then(function(M){var R=M.numFailures,F=M.results,z=M.lastResult,M=M.failures;if(R===0)return p?F:z;throw new qt("".concat(c.name,".bulkAdd(): ").concat(R," of ").concat(I," operations failed"),M)})})},Zt.prototype.bulkPut=function(t,e,a){var c=this,h=Array.isArray(e)?e:void 0,p=(a=a||(h?void 0:e))?a.allKeys:void 0;return this._trans("readwrite",function(x){var D=c.schema.primKey,P=D.auto,D=D.keyPath;if(D&&h)throw new mt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(h&&h.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var I=t.length,D=D&&P?t.map(Wr(D)):t;return c.core.mutate({trans:x,type:"put",keys:h,values:D,wantResults:p}).then(function(M){var R=M.numFailures,F=M.results,z=M.lastResult,M=M.failures;if(R===0)return p?F:z;throw new qt("".concat(c.name,".bulkPut(): ").concat(R," of ").concat(I," operations failed"),M)})})},Zt.prototype.bulkUpdate=function(t){var e=this,a=this.core,c=t.map(function(x){return x.key}),h=t.map(function(x){return x.changes}),p=[];return this._trans("readwrite",function(x){return a.getMany({trans:x,keys:c,cache:"clone"}).then(function(P){var I=[],D=[];t.forEach(function(R,F){var z=R.key,M=R.changes,j=P[F];if(j){for(var L=0,q=Object.keys(M);L<q.length;L++){var Z=q[L],J=M[Z];if(Z===e.schema.primKey.keyPath){if(Ut(J,z)!==0)throw new mt.Constraint("Cannot update primary key in bulkUpdate()")}else X(j,Z,J)}p.push(F),I.push(z),D.push(j)}});var N=I.length;return a.mutate({trans:x,type:"put",keys:I,values:D,updates:{keys:c,changeSpecs:h}}).then(function(R){var F=R.numFailures,z=R.failures;if(F===0)return N;for(var M=0,j=Object.keys(z);M<j.length;M++){var L,q=j[M],Z=p[Number(q)];Z!=null&&(L=z[q],delete z[q],z[Z]=L)}throw new qt("".concat(e.name,".bulkUpdate(): ").concat(F," of ").concat(N," operations failed"),z)})})})},Zt.prototype.bulkDelete=function(t){var e=this,a=t.length;return this._trans("readwrite",function(c){return e.core.mutate({trans:c,type:"delete",keys:t}).then(function(h){return Hr(e,t,h)})}).then(function(x){var h=x.numFailures,p=x.lastResult,x=x.failures;if(h===0)return p;throw new qt("".concat(e.name,".bulkDelete(): ").concat(h," of ").concat(a," operations failed"),x)})},Zt);function Zt(){}function wr(t){function e(x,P){if(P){for(var I=arguments.length,D=new Array(I-1);--I;)D[I-1]=arguments[I];return a[x].subscribe.apply(null,D),t}if(typeof x=="string")return a[x]}var a={};e.addEventType=p;for(var c=1,h=arguments.length;c<h;++c)p(arguments[c]);return e;function p(x,P,I){if(typeof x!="object"){var D;P=P||U;var N={subscribers:[],fire:I=I||zt,subscribe:function(R){N.subscribers.indexOf(R)===-1&&(N.subscribers.push(R),N.fire=P(N.fire,R))},unsubscribe:function(R){N.subscribers=N.subscribers.filter(function(F){return F!==R}),N.fire=N.subscribers.reduce(P,I)}};return a[x]=e[x]=N}u(D=x).forEach(function(R){var F=D[R];if(d(F))p(R,D[R][0],D[R][1]);else{if(F!=="asap")throw new mt.InvalidArgument("Invalid event config");var z=p(R,ce,function(){for(var M=arguments.length,j=new Array(M);M--;)j[M]=arguments[M];z.subscribers.forEach(function(L){K(function(){L.apply(null,j)})})})}})}}function _r(t,e){return y(e).from({prototype:t}),e}function hr(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Cn(t,e){t.filter=Ve(t.filter,e)}function En(t,e,a){var c=t.replayFilter;t.replayFilter=c?function(){return Ve(c(),e())}:e,t.justLimit=a&&!c}function Zr(t,e){if(t.isPrimKey)return e.primaryKey;var a=e.getIndexByKeyPath(t.index);if(!a)throw new mt.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return a}function Ci(t,e,a){var c=Zr(t,e.schema);return e.openCursor({trans:a,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:c,range:t.range}})}function Vr(t,e,a,c){var h=t.replayFilter?Ve(t.filter,t.replayFilter()):t.filter;if(t.or){var p={},x=function(P,I,D){var N,R;h&&!h(I,D,function(F){return I.stop(F)},function(F){return I.fail(F)})||((R=""+(N=I.primaryKey))=="[object ArrayBuffer]"&&(R=""+new Uint8Array(N)),w(p,R)||(p[R]=!0,e(P,I,D)))};return Promise.all([t.or._iterate(x,a),Ei(Ci(t,c,a),t.algorithm,x,!t.keysOnly&&t.valueMapper)])}return Ei(Ci(t,c,a),Ve(t.algorithm,h),e,!t.keysOnly&&t.valueMapper)}function Ei(t,e,a,c){var h=Yt(c?function(p,x,P){return a(c(p),x,P)}:a);return t.then(function(p){if(p)return p.start(function(){var x=function(){return p.continue()};e&&!e(p,function(P){return x=P},function(P){p.stop(P),x=zt},function(P){p.fail(P),x=zt})||h(p.value,p,function(P){return x=P}),x()})})}var Za=(Kt.prototype._read=function(t,e){var a=this._ctx;return a.error?a.table._trans(null,ee.bind(null,a.error)):a.table._trans("readonly",t).then(e)},Kt.prototype._write=function(t){var e=this._ctx;return e.error?e.table._trans(null,ee.bind(null,e.error)):e.table._trans("readwrite",t,"locked")},Kt.prototype._addAlgorithm=function(t){var e=this._ctx;e.algorithm=Ve(e.algorithm,t)},Kt.prototype._iterate=function(t,e){return Vr(this._ctx,t,e,this._ctx.table.core)},Kt.prototype.clone=function(t){var e=Object.create(this.constructor.prototype),a=Object.create(this._ctx);return t&&m(a,t),e._ctx=a,e},Kt.prototype.raw=function(){return this._ctx.valueMapper=null,this},Kt.prototype.each=function(t){var e=this._ctx;return this._read(function(a){return Vr(e,t,a,e.table.core)})},Kt.prototype.count=function(t){var e=this;return this._read(function(a){var c=e._ctx,h=c.table.core;if(hr(c,!0))return h.count({trans:a,query:{index:Zr(c,h.schema),range:c.range}}).then(function(x){return Math.min(x,c.limit)});var p=0;return Vr(c,function(){return++p,!1},a,h).then(function(){return p})}).then(t)},Kt.prototype.sortBy=function(t,e){var a=t.split(".").reverse(),c=a[0],h=a.length-1;function p(I,D){return D?p(I[a[D]],D-1):I[c]}var x=this._ctx.dir==="next"?1:-1;function P(I,D){return Ut(p(I,h),p(D,h))*x}return this.toArray(function(I){return I.sort(P)}).then(e)},Kt.prototype.toArray=function(t){var e=this;return this._read(function(a){var c=e._ctx;if(c.dir==="next"&&hr(c,!0)&&0<c.limit){var h=c.valueMapper,p=Zr(c,c.table.core.schema);return c.table.core.query({trans:a,limit:c.limit,values:!0,query:{index:p,range:c.range}}).then(function(P){return P=P.result,h?P.map(h):P})}var x=[];return Vr(c,function(P){return x.push(P)},a,c.table.core).then(function(){return x})},t)},Kt.prototype.offset=function(t){var e=this._ctx;return t<=0||(e.offset+=t,hr(e)?En(e,function(){var a=t;return function(c,h){return a===0||(a===1?--a:h(function(){c.advance(a),a=0}),!1)}}):En(e,function(){var a=t;return function(){return--a<0}})),this},Kt.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),En(this._ctx,function(){var e=t;return function(a,c,h){return--e<=0&&c(h),0<=e}},!0),this},Kt.prototype.until=function(t,e){return Cn(this._ctx,function(a,c,h){return!t(a.value)||(c(h),e)}),this},Kt.prototype.first=function(t){return this.limit(1).toArray(function(e){return e[0]}).then(t)},Kt.prototype.last=function(t){return this.reverse().first(t)},Kt.prototype.filter=function(t){var e;return Cn(this._ctx,function(a){return t(a.value)}),(e=this._ctx).isMatch=Ve(e.isMatch,t),this},Kt.prototype.and=function(t){return this.filter(t)},Kt.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},Kt.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Kt.prototype.desc=function(){return this.reverse()},Kt.prototype.eachKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(a,c){t(c.key,c)})},Kt.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},Kt.prototype.eachPrimaryKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(a,c){t(c.primaryKey,c)})},Kt.prototype.keys=function(t){var e=this._ctx;e.keysOnly=!e.isMatch;var a=[];return this.each(function(c,h){a.push(h.key)}).then(function(){return a}).then(t)},Kt.prototype.primaryKeys=function(t){var e=this._ctx;if(e.dir==="next"&&hr(e,!0)&&0<e.limit)return this._read(function(c){var h=Zr(e,e.table.core.schema);return e.table.core.query({trans:c,values:!1,limit:e.limit,query:{index:h,range:e.range}})}).then(function(c){return c.result}).then(t);e.keysOnly=!e.isMatch;var a=[];return this.each(function(c,h){a.push(h.primaryKey)}).then(function(){return a}).then(t)},Kt.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},Kt.prototype.firstKey=function(t){return this.limit(1).keys(function(e){return e[0]}).then(t)},Kt.prototype.lastKey=function(t){return this.reverse().firstKey(t)},Kt.prototype.distinct=function(){var t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];if(!t||!t.multi)return this;var e={};return Cn(this._ctx,function(h){var c=h.primaryKey.toString(),h=w(e,c);return e[c]=!0,!h}),this},Kt.prototype.modify=function(t){var e=this,a=this._ctx;return this._write(function(c){var h=typeof t=="function"?t:function(j){return ki(j,t)},p=a.table.core,D=p.schema.primaryKey,x=D.outbound,P=D.extractKey,I=200,D=e.db._options.modifyChunkSize;D&&(I=typeof D=="object"?D[p.name]||D["*"]||200:D);function N(j,Z){var q=Z.failures,Z=Z.numFailures;F+=j-Z;for(var J=0,nt=u(q);J<nt.length;J++){var ft=nt[J];R.push(q[ft])}}var R=[],F=0,z=[],M=t===Ai;return e.clone().primaryKeys().then(function(j){function L(Z){var J=Math.min(I,j.length-Z),nt=j.slice(Z,Z+J);return(M?Promise.resolve([]):p.getMany({trans:c,keys:nt,cache:"immutable"})).then(function(ft){var bt=[],dt=[],gt=x?[]:null,wt=M?nt:[];if(!M)for(var yt=0;yt<J;++yt){var Ct=ft[yt],It={value:Q(Ct),primKey:j[Z+yt]};h.call(It,It.value,It)!==!1&&(It.value==null?wt.push(j[Z+yt]):x||Ut(P(Ct),P(It.value))===0?(dt.push(It.value),x&&gt.push(j[Z+yt])):(wt.push(j[Z+yt]),bt.push(It.value)))}return Promise.resolve(0<bt.length&&p.mutate({trans:c,type:"add",values:bt}).then(function(Dt){for(var Mt in Dt.failures)wt.splice(parseInt(Mt),1);N(bt.length,Dt)})).then(function(){return(0<dt.length||q&&typeof t=="object")&&p.mutate({trans:c,type:"put",keys:gt,values:dt,criteria:q,changeSpec:typeof t!="function"&&t,isAdditionalChunk:0<Z}).then(function(Dt){return N(dt.length,Dt)})}).then(function(){return(0<wt.length||q&&M)&&p.mutate({trans:c,type:"delete",keys:wt,criteria:q,isAdditionalChunk:0<Z}).then(function(Dt){return Hr(a.table,wt,Dt)}).then(function(Dt){return N(wt.length,Dt)})}).then(function(){return j.length>Z+J&&L(Z+I)})})}var q=hr(a)&&a.limit===1/0&&(typeof t!="function"||M)&&{index:a.index,range:a.range};return L(0).then(function(){if(0<R.length)throw new vt("Error modifying one or more objects",R,F,z);return j.length})})})},Kt.prototype.delete=function(){var t=this._ctx,e=t.range;return!hr(t)||t.table.schema.yProps||!t.isPrimKey&&e.type!==3?this.modify(Ai):this._write(function(a){var c=t.table.core.schema.primaryKey,h=e;return t.table.core.count({trans:a,query:{index:c,range:h}}).then(function(p){return t.table.core.mutate({trans:a,type:"deleteRange",range:h}).then(function(I){var P=I.failures,I=I.numFailures;if(I)throw new vt("Could not delete some values",Object.keys(P).map(function(D){return P[D]}),p-I);return p-I})})})},Kt);function Kt(){}var Ai=function(t,e){return e.value=null};function Va(t,e){return t<e?-1:t===e?0:1}function Ya(t,e){return e<t?-1:t===e?0:1}function ye(t,e,a){return t=t instanceof Pi?new t.Collection(t):t,t._ctx.error=new(a||TypeError)(e),t}function fr(t){return new t.Collection(t,function(){return Ti("")}).limit(0)}function Yr(t,e,a,c){var h,p,x,P,I,D,N,R=a.length;if(!a.every(function(M){return typeof M=="string"}))return ye(t,vi);function F(M){h=M==="next"?function(L){return L.toUpperCase()}:function(L){return L.toLowerCase()},p=M==="next"?function(L){return L.toLowerCase()}:function(L){return L.toUpperCase()},x=M==="next"?Va:Ya;var j=a.map(function(L){return{lower:p(L),upper:h(L)}}).sort(function(L,q){return x(L.lower,q.lower)});P=j.map(function(L){return L.upper}),I=j.map(function(L){return L.lower}),N=(D=M)==="next"?"":c}F("next"),t=new t.Collection(t,function(){return Le(P[0],I[R-1]+c)}),t._ondirectionchange=function(M){F(M)};var z=0;return t._addAlgorithm(function(M,j,L){var q=M.key;if(typeof q!="string")return!1;var Z=p(q);if(e(Z,I,z))return!0;for(var J=null,nt=z;nt<R;++nt){var ft=(function(bt,dt,gt,wt,yt,Ct){for(var It=Math.min(bt.length,wt.length),Dt=-1,Mt=0;Mt<It;++Mt){var be=dt[Mt];if(be!==wt[Mt])return yt(bt[Mt],gt[Mt])<0?bt.substr(0,Mt)+gt[Mt]+gt.substr(Mt+1):yt(bt[Mt],wt[Mt])<0?bt.substr(0,Mt)+wt[Mt]+gt.substr(Mt+1):0<=Dt?bt.substr(0,Dt)+dt[Dt]+gt.substr(Dt+1):null;yt(bt[Mt],be)<0&&(Dt=Mt)}return It<wt.length&&Ct==="next"?bt+gt.substr(bt.length):It<bt.length&&Ct==="prev"?bt.substr(0,gt.length):Dt<0?null:bt.substr(0,Dt)+wt[Dt]+gt.substr(Dt+1)})(q,Z,P[nt],I[nt],x,D);ft===null&&J===null?z=nt+1:(J===null||0<x(J,ft))&&(J=ft)}return j(J!==null?function(){M.continue(J+N)}:L),!1}),t}function Le(t,e,a,c){return{type:2,lower:t,upper:e,lowerOpen:a,upperOpen:c}}function Ti(t){return{type:1,lower:t,upper:t}}var Pi=(Object.defineProperty(le.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),le.prototype.between=function(t,e,a,c){a=a!==!1,c=c===!0;try{return 0<this._cmp(t,e)||this._cmp(t,e)===0&&(a||c)&&(!a||!c)?fr(this):new this.Collection(this,function(){return Le(t,e,!a,!c)})}catch{return ye(this,Pe)}},le.prototype.equals=function(t){return t==null?ye(this,Pe):new this.Collection(this,function(){return Ti(t)})},le.prototype.above=function(t){return t==null?ye(this,Pe):new this.Collection(this,function(){return Le(t,void 0,!0)})},le.prototype.aboveOrEqual=function(t){return t==null?ye(this,Pe):new this.Collection(this,function(){return Le(t,void 0,!1)})},le.prototype.below=function(t){return t==null?ye(this,Pe):new this.Collection(this,function(){return Le(void 0,t,!1,!0)})},le.prototype.belowOrEqual=function(t){return t==null?ye(this,Pe):new this.Collection(this,function(){return Le(void 0,t)})},le.prototype.startsWith=function(t){return typeof t!="string"?ye(this,vi):this.between(t,t+Ze,!0,!0)},le.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):Yr(this,function(e,a){return e.indexOf(a[0])===0},[t],Ze)},le.prototype.equalsIgnoreCase=function(t){return Yr(this,function(e,a){return e===a[0]},[t],"")},le.prototype.anyOfIgnoreCase=function(){var t=Tt.apply(ot,arguments);return t.length===0?fr(this):Yr(this,function(e,a){return a.indexOf(e)!==-1},t,"")},le.prototype.startsWithAnyOfIgnoreCase=function(){var t=Tt.apply(ot,arguments);return t.length===0?fr(this):Yr(this,function(e,a){return a.some(function(c){return e.indexOf(c)===0})},t,Ze)},le.prototype.anyOf=function(){var t=this,e=Tt.apply(ot,arguments),a=this._cmp;try{e.sort(a)}catch{return ye(this,Pe)}if(e.length===0)return fr(this);var c=new this.Collection(this,function(){return Le(e[0],e[e.length-1])});c._ondirectionchange=function(p){a=p==="next"?t._ascending:t._descending,e.sort(a)};var h=0;return c._addAlgorithm(function(p,x,P){for(var I=p.key;0<a(I,e[h]);)if(++h===e.length)return x(P),!1;return a(I,e[h])===0||(x(function(){p.continue(e[h])}),!1)}),c},le.prototype.notEqual=function(t){return this.inAnyRange([[-1/0,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},le.prototype.noneOf=function(){var t=Tt.apply(ot,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return ye(this,Pe)}var e=t.reduce(function(a,c){return a?a.concat([[a[a.length-1][1],c]]):[[-1/0,c]]},null);return e.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(e,{includeLowers:!1,includeUppers:!1})},le.prototype.inAnyRange=function(q,e){var a=this,c=this._cmp,h=this._ascending,p=this._descending,x=this._min,P=this._max;if(q.length===0)return fr(this);if(!q.every(function(Z){return Z[0]!==void 0&&Z[1]!==void 0&&h(Z[0],Z[1])<=0}))return ye(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",mt.InvalidArgument);var I=!e||e.includeLowers!==!1,D=e&&e.includeUppers===!0,N,R=h;function F(Z,J){return R(Z[0],J[0])}try{(N=q.reduce(function(Z,J){for(var nt=0,ft=Z.length;nt<ft;++nt){var bt=Z[nt];if(c(J[0],bt[1])<0&&0<c(J[1],bt[0])){bt[0]=x(bt[0],J[0]),bt[1]=P(bt[1],J[1]);break}}return nt===ft&&Z.push(J),Z},[])).sort(F)}catch{return ye(this,Pe)}var z=0,M=D?function(Z){return 0<h(Z,N[z][1])}:function(Z){return 0<=h(Z,N[z][1])},j=I?function(Z){return 0<p(Z,N[z][0])}:function(Z){return 0<=p(Z,N[z][0])},L=M,q=new this.Collection(this,function(){return Le(N[0][0],N[N.length-1][1],!I,!D)});return q._ondirectionchange=function(Z){R=Z==="next"?(L=M,h):(L=j,p),N.sort(F)},q._addAlgorithm(function(Z,J,nt){for(var ft,bt=Z.key;L(bt);)if(++z===N.length)return J(nt),!1;return!M(ft=bt)&&!j(ft)||(a._cmp(bt,N[z][1])===0||a._cmp(bt,N[z][0])===0||J(function(){R===h?Z.continue(N[z][0]):Z.continue(N[z][1])}),!1)}),q},le.prototype.startsWithAnyOf=function(){var t=Tt.apply(ot,arguments);return t.every(function(e){return typeof e=="string"})?t.length===0?fr(this):this.inAnyRange(t.map(function(e){return[e,e+Ze]})):ye(this,"startsWithAnyOf() only works with strings")},le);function le(){}function Ce(t){return Yt(function(e){return xr(e),t(e.target.error),!1})}function xr(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}var kr="storagemutated",An="x-storagemutated-1",Fe=wr(null,kr),Ga=(Ee.prototype._lock=function(){return W(!St.global),++this._reculock,this._reculock!==1||St.global||(St.lockOwnerFor=this),this},Ee.prototype._unlock=function(){if(W(!St.global),--this._reculock==0)for(St.global||(St.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var t=this._blockedFuncs.shift();try{He(t[1],t[0])}catch{}}return this},Ee.prototype._locked=function(){return this._reculock&&St.lockOwnerFor!==this},Ee.prototype.create=function(t){var e=this;if(!this.mode)return this;var a=this.db.idbdb,c=this.db._state.dbOpenError;if(W(!this.idbtrans),!t&&!a)switch(c&&c.name){case"DatabaseClosedError":throw new mt.DatabaseClosed(c);case"MissingAPIError":throw new mt.MissingAPI(c.message,c);default:throw new mt.OpenFailed(c)}if(!this.active)throw new mt.TransactionInactive;return W(this._completion._state===null),(t=this.idbtrans=t||(this.db.core||a).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Yt(function(h){xr(h),e._reject(t.error)}),t.onabort=Yt(function(h){xr(h),e.active&&e._reject(new mt.Abort(t.error)),e.active=!1,e.on("abort").fire(h)}),t.oncomplete=Yt(function(){e.active=!1,e._resolve(),"mutatedParts"in t&&Fe.storagemutated.fire(t.mutatedParts)}),this},Ee.prototype._promise=function(t,e,a){var c=this;if(t==="readwrite"&&this.mode!=="readwrite")return ee(new mt.ReadOnly("Transaction is readonly"));if(!this.active)return ee(new mt.TransactionInactive);if(this._locked())return new _t(function(p,x){c._blockedFuncs.push([function(){c._promise(t,e,a).then(p,x)},St])});if(a)return je(function(){var p=new _t(function(x,P){c._lock();var I=e(x,P,c);I&&I.then&&I.then(x,P)});return p.finally(function(){return c._unlock()}),p._lib=!0,p});var h=new _t(function(p,x){var P=e(p,x,c);P&&P.then&&P.then(p,x)});return h._lib=!0,h},Ee.prototype._root=function(){return this.parent?this.parent._root():this},Ee.prototype.waitFor=function(t){var e,a=this._root(),c=_t.resolve(t);a._waitingFor?a._waitingFor=a._waitingFor.then(function(){return c}):(a._waitingFor=c,a._waitingQueue=[],e=a.idbtrans.objectStore(a.storeNames[0]),(function p(){for(++a._spinCount;a._waitingQueue.length;)a._waitingQueue.shift()();a._waitingFor&&(e.get(-1/0).onsuccess=p)})());var h=a._waitingFor;return new _t(function(p,x){c.then(function(P){return a._waitingQueue.push(Yt(p.bind(null,P)))},function(P){return a._waitingQueue.push(Yt(x.bind(null,P)))}).finally(function(){a._waitingFor===h&&(a._waitingFor=null)})})},Ee.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new mt.Abort))},Ee.prototype.table=function(t){var e=this._memoizedTables||(this._memoizedTables={});if(w(e,t))return e[t];var a=this.schema[t];if(!a)throw new mt.NotFound("Table "+t+" not part of transaction");return a=new this.db.Table(t,a,this),a.core=this.db.core.table(t),e[t]=a},Ee);function Ee(){}function Tn(t,e,a,c,h,p,x,P){return{name:t,keyPath:e,unique:a,multi:c,auto:h,compound:p,src:(a&&!x?"&":"")+(c?"*":"")+(h?"++":"")+Oi(e),type:P}}function Oi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Pn(t,e,a){return{name:t,primKey:e,indexes:a,mappedClass:null,idxByName:(c=function(h){return[h.name,h]},a.reduce(function(h,p,x){return x=c(p,x),x&&(h[x[0]]=x[1]),h},{}))};var c}var Sr=function(t){try{return t.only([[]]),Sr=function(){return[[]]},[[]]}catch{return Sr=function(){return Ze},Ze}};function On(t){return t==null?function(){}:typeof t=="string"?(e=t).split(".").length===1?function(a){return a[e]}:function(a){return rt(a,e)}:function(a){return rt(a,t)};var e}function Ri(t){return[].slice.call(t)}var Xa=0;function Cr(t){return t==null?":id":typeof t=="string"?t:"[".concat(t.join("+"),"]")}function Ja(t,e,I){function c(L){if(L.type===3)return null;if(L.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var z=L.lower,M=L.upper,j=L.lowerOpen,L=L.upperOpen;return z===void 0?M===void 0?null:e.upperBound(M,!!L):M===void 0?e.lowerBound(z,!!j):e.bound(z,M,!!j,!!L)}function h(F){var z,M=F.name;return{name:M,schema:F,mutate:function(j){var L=j.trans,q=j.type,Z=j.keys,J=j.values,nt=j.range;return new Promise(function(ft,bt){ft=Yt(ft);var dt=L.objectStore(M),gt=dt.keyPath==null,wt=q==="put"||q==="add";if(!wt&&q!=="delete"&&q!=="deleteRange")throw new Error("Invalid operation type: "+q);var yt,Ct=(Z||J||{length:1}).length;if(Z&&J&&Z.length!==J.length)throw new Error("Given keys array must have same length as given values array.");if(Ct===0)return ft({numFailures:0,failures:{},results:[],lastResult:void 0});function It(me){++be,xr(me)}var Dt=[],Mt=[],be=0;if(q==="deleteRange"){if(nt.type===4)return ft({numFailures:be,failures:Mt,results:[],lastResult:void 0});nt.type===3?Dt.push(yt=dt.clear()):Dt.push(yt=dt.delete(c(nt)))}else{var gt=wt?gt?[J,Z]:[J,null]:[Z,null],$t=gt[0],de=gt[1];if(wt)for(var he=0;he<Ct;++he)Dt.push(yt=de&&de[he]!==void 0?dt[q]($t[he],de[he]):dt[q]($t[he])),yt.onerror=It;else for(he=0;he<Ct;++he)Dt.push(yt=dt[q]($t[he])),yt.onerror=It}function ln(me){me=me.target.result,Dt.forEach(function(Xe,Vn){return Xe.error!=null&&(Mt[Vn]=Xe.error)}),ft({numFailures:be,failures:Mt,results:q==="delete"?Z:Dt.map(function(Xe){return Xe.result}),lastResult:me})}yt.onerror=function(me){It(me),ln(me)},yt.onsuccess=ln})},getMany:function(j){var L=j.trans,q=j.keys;return new Promise(function(Z,J){Z=Yt(Z);for(var nt,ft=L.objectStore(M),bt=q.length,dt=new Array(bt),gt=0,wt=0,yt=function(Dt){Dt=Dt.target,dt[Dt._pos]=Dt.result,++wt===gt&&Z(dt)},Ct=Ce(J),It=0;It<bt;++It)q[It]!=null&&((nt=ft.get(q[It]))._pos=It,nt.onsuccess=yt,nt.onerror=Ct,++gt);gt===0&&Z(dt)})},get:function(j){var L=j.trans,q=j.key;return new Promise(function(Z,J){Z=Yt(Z);var nt=L.objectStore(M).get(q);nt.onsuccess=function(ft){return Z(ft.target.result)},nt.onerror=Ce(J)})},query:(z=D,function(j){return new Promise(function(L,q){L=Yt(L);var Z,J,nt,gt=j.trans,ft=j.values,bt=j.limit,yt=j.query,dt=bt===1/0?void 0:bt,wt=yt.index,yt=yt.range,gt=gt.objectStore(M),wt=wt.isPrimaryKey?gt:gt.index(wt.name),yt=c(yt);if(bt===0)return L({result:[]});z?((dt=ft?wt.getAll(yt,dt):wt.getAllKeys(yt,dt)).onsuccess=function(Ct){return L({result:Ct.target.result})},dt.onerror=Ce(q)):(Z=0,J=!ft&&"openKeyCursor"in wt?wt.openKeyCursor(yt):wt.openCursor(yt),nt=[],J.onsuccess=function(Ct){var It=J.result;return It?(nt.push(ft?It.value:It.primaryKey),++Z===bt?L({result:nt}):void It.continue()):L({result:nt})},J.onerror=Ce(q))})}),openCursor:function(j){var L=j.trans,q=j.values,Z=j.query,J=j.reverse,nt=j.unique;return new Promise(function(ft,bt){ft=Yt(ft);var wt=Z.index,dt=Z.range,gt=L.objectStore(M),gt=wt.isPrimaryKey?gt:gt.index(wt.name),wt=J?nt?"prevunique":"prev":nt?"nextunique":"next",yt=!q&&"openKeyCursor"in gt?gt.openKeyCursor(c(dt),wt):gt.openCursor(c(dt),wt);yt.onerror=Ce(bt),yt.onsuccess=Yt(function(Ct){var It,Dt,Mt,be,$t=yt.result;$t?($t.___id=++Xa,$t.done=!1,It=$t.continue.bind($t),Dt=(Dt=$t.continuePrimaryKey)&&Dt.bind($t),Mt=$t.advance.bind($t),be=function(){throw new Error("Cursor not stopped")},$t.trans=L,$t.stop=$t.continue=$t.continuePrimaryKey=$t.advance=function(){throw new Error("Cursor not started")},$t.fail=Yt(bt),$t.next=function(){var de=this,he=1;return this.start(function(){return he--?de.continue():de.stop()}).then(function(){return de})},$t.start=function(de){function he(){if(yt.result)try{de()}catch(me){$t.fail(me)}else $t.done=!0,$t.start=function(){throw new Error("Cursor behind last entry")},$t.stop()}var ln=new Promise(function(me,Xe){me=Yt(me),yt.onerror=Ce(Xe),$t.fail=Xe,$t.stop=function(Vn){$t.stop=$t.continue=$t.continuePrimaryKey=$t.advance=be,me(Vn)}});return yt.onsuccess=Yt(function(me){yt.onsuccess=he,he()}),$t.continue=It,$t.continuePrimaryKey=Dt,$t.advance=Mt,he(),ln},ft($t)):ft(null)},bt)})},count:function(j){var L=j.query,q=j.trans,Z=L.index,J=L.range;return new Promise(function(nt,ft){var bt=q.objectStore(M),dt=Z.isPrimaryKey?bt:bt.index(Z.name),bt=c(J),dt=bt?dt.count(bt):dt.count();dt.onsuccess=Yt(function(gt){return nt(gt.target.result)}),dt.onerror=Ce(ft)})}}}var p,x,P,N=(x=I,P=Ri((p=t).objectStoreNames),{schema:{name:p.name,tables:P.map(function(F){return x.objectStore(F)}).map(function(F){var z=F.keyPath,L=F.autoIncrement,M=d(z),j={},L={name:F.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:z==null,compound:M,keyPath:z,autoIncrement:L,unique:!0,extractKey:On(z)},indexes:Ri(F.indexNames).map(function(q){return F.index(q)}).map(function(nt){var Z=nt.name,J=nt.unique,ft=nt.multiEntry,nt=nt.keyPath,ft={name:Z,compound:d(nt),keyPath:nt,unique:J,multiEntry:ft,extractKey:On(nt)};return j[Cr(nt)]=ft}),getIndexByKeyPath:function(q){return j[Cr(q)]}};return j[":id"]=L.primaryKey,z!=null&&(j[Cr(z)]=L.primaryKey),L})},hasGetAll:0<P.length&&"getAll"in x.objectStore(P[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),I=N.schema,D=N.hasGetAll,N=I.tables.map(h),R={};return N.forEach(function(F){return R[F.name]=F}),{stack:"dbcore",transaction:t.transaction.bind(t),table:function(F){if(!R[F])throw new Error("Table '".concat(F,"' not found"));return R[F]},MIN_KEY:-1/0,MAX_KEY:Sr(e),schema:I}}function Qa(t,e,a,c){var h=a.IDBKeyRange;return a.indexedDB,{dbcore:(c=Ja(e,h,c),t.dbcore.reduce(function(p,x){return x=x.create,s(s({},p),x(p))},c))}}function Gr(t,c){var a=c.db,c=Qa(t._middlewares,a,t._deps,c);t.core=c.dbcore,t.tables.forEach(function(h){var p=h.name;t.core.schema.tables.some(function(x){return x.name===p})&&(h.core=t.core.table(p),t[p]instanceof t.Table&&(t[p].core=h.core))})}function Xr(t,e,a,c){a.forEach(function(h){var p=c[h];e.forEach(function(x){var P=(function I(D,N){return A(D,N)||(D=b(D))&&I(D,N)})(x,h);(!P||"value"in P&&P.value===void 0)&&(x===t.Transaction.prototype||x instanceof t.Transaction?E(x,h,{get:function(){return this.table(h)},set:function(I){v(this,h,{value:I,writable:!0,configurable:!0,enumerable:!0})}}):x[h]=new t.Table(h,p))})})}function Rn(t,e){e.forEach(function(a){for(var c in a)a[c]instanceof t.Table&&delete a[c]})}function ts(t,e){return t._cfg.version-e._cfg.version}function es(t,e,a,c){var h=t._dbSchema;a.objectStoreNames.contains("$meta")&&!h.$meta&&(h.$meta=Pn("$meta",Ii("")[0],[]),t._storeNames.push("$meta"));var p=t._createTransaction("readwrite",t._storeNames,h);p.create(a),p._completion.catch(c);var x=p._reject.bind(p),P=St.transless||St;je(function(){return St.trans=p,St.transless=P,e!==0?(Gr(t,a),D=e,((I=p).storeNames.includes("$meta")?I.table("$meta").get("version").then(function(N){return N??D}):_t.resolve(D)).then(function(N){return F=N,z=p,M=a,j=[],N=(R=t)._versions,L=R._dbSchema=Qr(0,R.idbdb,M),(N=N.filter(function(q){return q._cfg.version>=F})).length!==0?(N.forEach(function(q){j.push(function(){var Z=L,J=q._cfg.dbschema;tn(R,Z,M),tn(R,J,M),L=R._dbSchema=J;var nt=$n(Z,J);nt.add.forEach(function(wt){In(M,wt[0],wt[1].primKey,wt[1].indexes)}),nt.change.forEach(function(wt){if(wt.recreate)throw new mt.Upgrade("Not yet support for changing primary key");var yt=M.objectStore(wt.name);wt.add.forEach(function(Ct){return Jr(yt,Ct)}),wt.change.forEach(function(Ct){yt.deleteIndex(Ct.name),Jr(yt,Ct)}),wt.del.forEach(function(Ct){return yt.deleteIndex(Ct)})});var ft=q._cfg.contentUpgrade;if(ft&&q._cfg.version>F){Gr(R,M),z._memoizedTables={};var bt=ct(J);nt.del.forEach(function(wt){bt[wt]=Z[wt]}),Rn(R,[R.Transaction.prototype]),Xr(R,[R.Transaction.prototype],u(bt),bt),z.schema=bt;var dt,gt=Y(ft);return gt&&ur(),nt=_t.follow(function(){var wt;(dt=ft(z))&&gt&&(wt=Ne.bind(null,null),dt.then(wt,wt))}),dt&&typeof dt.then=="function"?_t.resolve(dt):nt.then(function(){return dt})}}),j.push(function(Z){var J,nt,ft=q._cfg.dbschema;J=ft,nt=Z,[].slice.call(nt.db.objectStoreNames).forEach(function(bt){return J[bt]==null&&nt.db.deleteObjectStore(bt)}),Rn(R,[R.Transaction.prototype]),Xr(R,[R.Transaction.prototype],R._storeNames,R._dbSchema),z.schema=R._dbSchema}),j.push(function(Z){R.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(R.idbdb.version/10)===q._cfg.version?(R.idbdb.deleteObjectStore("$meta"),delete R._dbSchema.$meta,R._storeNames=R._storeNames.filter(function(J){return J!=="$meta"})):Z.objectStore("$meta").put(q._cfg.version,"version"))})}),(function q(){return j.length?_t.resolve(j.shift()(z.idbtrans)).then(q):_t.resolve()})().then(function(){$i(L,M)})):_t.resolve();var R,F,z,M,j,L}).catch(x)):(u(h).forEach(function(N){In(a,N,h[N].primKey,h[N].indexes)}),Gr(t,a),void _t.follow(function(){return t.on.populate.fire(p)}).catch(x));var I,D})}function rs(t,e){$i(t._dbSchema,e),e.db.version%10!=0||e.objectStoreNames.contains("$meta")||e.db.createObjectStore("$meta").add(Math.ceil(e.db.version/10-1),"version");var a=Qr(0,t.idbdb,e);tn(t,t._dbSchema,e);for(var c=0,h=$n(a,t._dbSchema).change;c<h.length;c++){var p=(function(x){if(x.change.length||x.recreate)return console.warn("Unable to patch indexes of table ".concat(x.name," because it has changes on the type of index or primary key.")),{value:void 0};var P=e.objectStore(x.name);x.add.forEach(function(I){at&&console.debug("Dexie upgrade patch: Creating missing index ".concat(x.name,".").concat(I.src)),Jr(P,I)})})(h[c]);if(typeof p=="object")return p.value}}function $n(t,e){var a,c={del:[],add:[],change:[]};for(a in t)e[a]||c.del.push(a);for(a in e){var h=t[a],p=e[a];if(h){var x={name:a,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(h.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||h.primKey.auto!==p.primKey.auto)x.recreate=!0,c.change.push(x);else{var P=h.idxByName,I=p.idxByName,D=void 0;for(D in P)I[D]||x.del.push(D);for(D in I){var N=P[D],R=I[D];N?N.src!==R.src&&x.change.push(R):x.add.push(R)}(0<x.del.length||0<x.add.length||0<x.change.length)&&c.change.push(x)}}else c.add.push([a,p])}return c}function In(t,e,a,c){var h=t.db.createObjectStore(e,a.keyPath?{keyPath:a.keyPath,autoIncrement:a.auto}:{autoIncrement:a.auto});return c.forEach(function(p){return Jr(h,p)}),h}function $i(t,e){u(t).forEach(function(a){e.db.objectStoreNames.contains(a)||(at&&console.debug("Dexie: Creating missing table",a),In(e,a,t[a].primKey,t[a].indexes))})}function Jr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Qr(t,e,a){var c={};return O(e.objectStoreNames,0).forEach(function(h){for(var p=a.objectStore(h),x=Tn(Oi(D=p.keyPath),D||"",!0,!1,!!p.autoIncrement,D&&typeof D!="string",!0),P=[],I=0;I<p.indexNames.length;++I){var N=p.index(p.indexNames[I]),D=N.keyPath,N=Tn(N.name,D,!!N.unique,!!N.multiEntry,!1,D&&typeof D!="string",!1);P.push(N)}c[h]=Pn(h,x,P)}),c}function tn(t,e,a){for(var c=a.db.objectStoreNames,h=0;h<c.length;++h){var p=c[h],x=a.objectStore(p);t._hasGetAll="getAll"in x;for(var P=0;P<x.indexNames.length;++P){var I=x.indexNames[P],D=x.index(I).keyPath,N=typeof D=="string"?D:"["+O(D).join("+")+"]";!e[p]||(D=e[p].idxByName[N])&&(D.name=I,delete e[p].idxByName[N],e[p].idxByName[I]=D)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&l.WorkerGlobalScope&&l instanceof l.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}function Ii(t){return t.split(",").map(function(e,a){var p=e.split(":"),c=(h=p[1])===null||h===void 0?void 0:h.trim(),h=(e=p[0].trim()).replace(/([&*]|\+\+)/g,""),p=/^\[/.test(h)?h.match(/^\[(.*)\]$/)[1].split("+"):h;return Tn(h,p||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),d(p),a===0,c)})}var ns=(pr.prototype._createTableSchema=Pn,pr.prototype._parseIndexSyntax=Ii,pr.prototype._parseStoresSpec=function(t,e){var a=this;u(t).forEach(function(c){if(t[c]!==null){var h=a._parseIndexSyntax(t[c]),p=h.shift();if(!p)throw new mt.Schema("Invalid schema for table "+c+": "+t[c]);if(p.unique=!0,p.multi)throw new mt.Schema("Primary key cannot be multiEntry*");h.forEach(function(x){if(x.auto)throw new mt.Schema("Only primary key can be marked as autoIncrement (++)");if(!x.keyPath)throw new mt.Schema("Index must have a name and cannot be an empty string")}),h=a._createTableSchema(c,p,h),e[c]=h}})},pr.prototype.stores=function(a){var e=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,a):a;var a=e._versions,c={},h={};return a.forEach(function(p){m(c,p._cfg.storesSource),h=p._cfg.dbschema={},p._parseStoresSpec(c,h)}),e._dbSchema=h,Rn(e,[e._allTables,e,e.Transaction.prototype]),Xr(e,[e._allTables,e,e.Transaction.prototype,this._cfg.tables],u(h),h),e._storeNames=u(h),this},pr.prototype.upgrade=function(t){return this._cfg.contentUpgrade=st(this._cfg.contentUpgrade||zt,t),this},pr);function pr(){}function Dn(t,e){var a=t._dbNamesDB;return a||(a=t._dbNamesDB=new Oe(qr,{addons:[],indexedDB:t,IDBKeyRange:e})).version(1).stores({dbnames:"name"}),a.table("dbnames")}function zn(t){return t&&typeof t.databases=="function"}function Bn(t){return je(function(){return St.letThrough=!0,t()})}function Mn(t){return!("from"in t)}var ue=function(t,e){if(!this){var a=new ue;return t&&"d"in t&&m(a,t),a}m(this,arguments.length?{d:1,from:t,to:1<arguments.length?e:t}:{d:0})};function Er(t,e,a){var c=Ut(e,a);if(!isNaN(c)){if(0<c)throw RangeError();if(Mn(t))return m(t,{from:e,to:a,d:1});var h=t.l,c=t.r;if(Ut(a,t.from)<0)return h?Er(h,e,a):t.l={from:e,to:a,d:1,l:null,r:null},zi(t);if(0<Ut(e,t.to))return c?Er(c,e,a):t.r={from:e,to:a,d:1,l:null,r:null},zi(t);Ut(e,t.from)<0&&(t.from=e,t.l=null,t.d=c?c.d+1:1),0<Ut(a,t.to)&&(t.to=a,t.r=null,t.d=t.l?t.l.d+1:1),a=!t.r,h&&!t.l&&Ar(t,h),c&&a&&Ar(t,c)}}function Ar(t,e){Mn(e)||(function a(c,I){var p=I.from,x=I.to,P=I.l,I=I.r;Er(c,p,x),P&&a(c,P),I&&a(c,I)})(t,e)}function Di(t,e){var a=en(e),c=a.next();if(c.done)return!1;for(var h=c.value,p=en(t),x=p.next(h.from),P=x.value;!c.done&&!x.done;){if(Ut(P.from,h.to)<=0&&0<=Ut(P.to,h.from))return!0;Ut(h.from,P.from)<0?h=(c=a.next(P.from)).value:P=(x=p.next(h.from)).value}return!1}function en(t){var e=Mn(t)?null:{s:0,n:t};return{next:function(a){for(var c=0<arguments.length;e;)switch(e.s){case 0:if(e.s=1,c)for(;e.n.l&&Ut(a,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!c||Ut(a,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function zi(t){var e,a,c=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((a=t.l)===null||a===void 0?void 0:a.d)||0),h=1<c?"r":c<-1?"l":"";h&&(e=h=="r"?"l":"r",a=s({},t),c=t[h],t.from=c.from,t.to=c.to,t[h]=c[h],a[h]=c[e],(t[e]=a).d=Bi(a)),t.d=Bi(t)}function Bi(a){var e=a.r,a=a.l;return(e?a?Math.max(e.d,a.d):e.d:a?a.d:0)+1}function rn(t,e){return u(e).forEach(function(a){t[a]?Ar(t[a],e[a]):t[a]=(function c(h){var p,x,P={};for(p in h)w(h,p)&&(x=h[p],P[p]=!x||typeof x!="object"||Pt.has(x.constructor)?x:c(x));return P})(e[a])}),t}function jn(t,e){return t.all||e.all||Object.keys(t).some(function(a){return e[a]&&Di(e[a],t[a])})}C(ue.prototype,((xe={add:function(t){return Ar(this,t),this},addKey:function(t){return Er(this,t,t),this},addKeys:function(t){var e=this;return t.forEach(function(a){return Er(e,a,a)}),this},hasKey:function(t){var e=en(this).next(t).value;return e&&Ut(e.from,t)<=0&&0<=Ut(e.to,t)}})[Ot]=function(){return en(this)},xe));var Ye={},Nn={},Un=!1;function nn(t){rn(Nn,t),Un||(Un=!0,setTimeout(function(){Un=!1,Ln(Nn,!(Nn={}))},0))}function Ln(t,e){e===void 0&&(e=!1);var a=new Set;if(t.all)for(var c=0,h=Object.values(Ye);c<h.length;c++)Mi(x=h[c],t,a,e);else for(var p in t){var x,P=/^idb\:\/\/(.*)\/(.*)\//.exec(p);P&&(p=P[1],P=P[2],(x=Ye["idb://".concat(p,"/").concat(P)])&&Mi(x,t,a,e))}a.forEach(function(I){return I()})}function Mi(t,e,a,c){for(var h=[],p=0,x=Object.entries(t.queries.query);p<x.length;p++){for(var P=x[p],I=P[0],D=[],N=0,R=P[1];N<R.length;N++){var F=R[N];jn(e,F.obsSet)?F.subscribers.forEach(function(L){return a.add(L)}):c&&D.push(F)}c&&h.push([I,D])}if(c)for(var z=0,M=h;z<M.length;z++){var j=M[z],I=j[0],D=j[1];t.queries.query[I]=D}}function is(t){var e=t._state,a=t._deps.indexedDB;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(function(){return e.dbOpenError?ee(e.dbOpenError):t});e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;var c=e.openCanceller,h=Math.round(10*t.verno),p=!1;function x(){if(e.openCanceller!==c)throw new mt.DatabaseClosed("db.open() was cancelled")}function P(){return new _t(function(F,z){if(x(),!a)throw new mt.MissingAPI;var M=t.name,j=e.autoSchema||!h?a.open(M):a.open(M,h);if(!j)throw new mt.MissingAPI;j.onerror=Ce(z),j.onblocked=Yt(t._fireOnBlocked),j.onupgradeneeded=Yt(function(L){var q;N=j.transaction,e.autoSchema&&!t._options.allowEmptyDB?(j.onerror=xr,N.abort(),j.result.close(),(q=a.deleteDatabase(M)).onsuccess=q.onerror=Yt(function(){z(new mt.NoSuchDatabase("Database ".concat(M," doesnt exist")))})):(N.onerror=Ce(z),L=L.oldVersion>Math.pow(2,62)?0:L.oldVersion,R=L<1,t.idbdb=j.result,p&&rs(t,N),es(t,L/10,N,z))},z),j.onsuccess=Yt(function(){N=null;var L,q,Z,J,nt,ft=t.idbdb=j.result,bt=O(ft.objectStoreNames);if(0<bt.length)try{var dt=ft.transaction((J=bt).length===1?J[0]:J,"readonly");if(e.autoSchema)q=ft,Z=dt,(L=t).verno=q.version/10,Z=L._dbSchema=Qr(0,q,Z),L._storeNames=O(q.objectStoreNames,0),Xr(L,[L._allTables],u(Z),Z);else if(tn(t,t._dbSchema,dt),((nt=$n(Qr(0,(nt=t).idbdb,dt),nt._dbSchema)).add.length||nt.change.some(function(gt){return gt.add.length||gt.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),ft.close(),h=ft.version+1,p=!0,F(P());Gr(t,dt)}catch{}dr.push(t),ft.onversionchange=Yt(function(gt){e.vcFired=!0,t.on("versionchange").fire(gt)}),ft.onclose=Yt(function(){t.close({disableAutoOpen:!1})}),R&&(nt=t._deps,dt=M,ft=nt.indexedDB,nt=nt.IDBKeyRange,zn(ft)||dt===qr||Dn(ft,nt).put({name:dt}).catch(zt)),F()},z)}).catch(function(F){switch(F?.name){case"UnknownError":if(0<e.PR1398_maxLoop)return e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),P();break;case"VersionError":if(0<h)return h=0,P()}return _t.reject(F)})}var I,D=e.dbReadyResolve,N=null,R=!1;return _t.race([c,(typeof navigator>"u"?_t.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(F){function z(){return indexedDB.databases().finally(F)}I=setInterval(z,100),z()}).finally(function(){return clearInterval(I)}):Promise.resolve()).then(P)]).then(function(){return x(),e.onReadyBeingFired=[],_t.resolve(Bn(function(){return t.on.ready.fire(t.vip)})).then(function F(){if(0<e.onReadyBeingFired.length){var z=e.onReadyBeingFired.reduce(st,zt);return e.onReadyBeingFired=[],_t.resolve(Bn(function(){return z(t.vip)})).then(F)}})}).finally(function(){e.openCanceller===c&&(e.onReadyBeingFired=null,e.isBeingOpened=!1)}).catch(function(F){e.dbOpenError=F;try{N&&N.abort()}catch{}return c===e.openCanceller&&t._close(),ee(F)}).finally(function(){e.openComplete=!0,D()}).then(function(){var F;return R&&(F={},t.tables.forEach(function(z){z.schema.indexes.forEach(function(M){M.name&&(F["idb://".concat(t.name,"/").concat(z.name,"/").concat(M.name)]=new ue(-1/0,[[[]]]))}),F["idb://".concat(t.name,"/").concat(z.name,"/")]=F["idb://".concat(t.name,"/").concat(z.name,"/:dels")]=new ue(-1/0,[[[]]])}),Fe(kr).fire(F),Ln(F,!0)),t})}function Fn(t){function e(p){return t.next(p)}var a=h(e),c=h(function(p){return t.throw(p)});function h(p){return function(I){var P=p(I),I=P.value;return P.done?I:I&&typeof I.then=="function"?I.then(a,c):d(I)?Promise.all(I).then(a,c):a(I)}}return h(e)()}function an(t,e,a){for(var c=d(t)?t.slice():[t],h=0;h<a;++h)c.push(e);return c}var as={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return s(s({},t),{table:function(e){var a=t.table(e),c=a.schema,h={},p=[];function x(R,F,z){var M=Cr(R),j=h[M]=h[M]||[],L=R==null?0:typeof R=="string"?1:R.length,q=0<F,q=s(s({},z),{name:q?"".concat(M,"(virtual-from:").concat(z.name,")"):z.name,lowLevelIndex:z,isVirtual:q,keyTail:F,keyLength:L,extractKey:On(R),unique:!q&&z.unique});return j.push(q),q.isPrimaryKey||p.push(q),1<L&&x(L===2?R[0]:R.slice(0,L-1),F+1,z),j.sort(function(Z,J){return Z.keyTail-J.keyTail}),q}e=x(c.primaryKey.keyPath,0,c.primaryKey),h[":id"]=[e];for(var P=0,I=c.indexes;P<I.length;P++){var D=I[P];x(D.keyPath,0,D)}function N(R){var F,z=R.query.index;return z.isVirtual?s(s({},R),{query:{index:z.lowLevelIndex,range:(F=R.query.range,z=z.keyTail,{type:F.type===1?2:F.type,lower:an(F.lower,F.lowerOpen?t.MAX_KEY:t.MIN_KEY,z),lowerOpen:!0,upper:an(F.upper,F.upperOpen?t.MIN_KEY:t.MAX_KEY,z),upperOpen:!0})}}):R}return s(s({},a),{schema:s(s({},c),{primaryKey:e,indexes:p,getIndexByKeyPath:function(R){return(R=h[Cr(R)])&&R[0]}}),count:function(R){return a.count(N(R))},query:function(R){return a.query(N(R))},openCursor:function(R){var F=R.query.index,z=F.keyTail,M=F.isVirtual,j=F.keyLength;return M?a.openCursor(N(R)).then(function(q){return q&&L(q)}):a.openCursor(R);function L(q){return Object.create(q,{continue:{value:function(Z){Z!=null?q.continue(an(Z,R.reverse?t.MAX_KEY:t.MIN_KEY,z)):R.unique?q.continue(q.key.slice(0,j).concat(R.reverse?t.MIN_KEY:t.MAX_KEY,z)):q.continue()}},continuePrimaryKey:{value:function(Z,J){q.continuePrimaryKey(an(Z,t.MAX_KEY,z),J)}},primaryKey:{get:function(){return q.primaryKey}},key:{get:function(){var Z=q.key;return j===1?Z[0]:Z.slice(0,j)}},value:{get:function(){return q.value}}})}}})}})}};function Kn(t,e,a,c){return a=a||{},c=c||"",u(t).forEach(function(h){var p,x,P;w(e,h)?(p=t[h],x=e[h],typeof p=="object"&&typeof x=="object"&&p&&x?(P=it(p))!==it(x)?a[c+h]=e[h]:P==="Object"?Kn(p,x,a,c+h+"."):p!==x&&(a[c+h]=e[h]):p!==x&&(a[c+h]=e[h])):a[c+h]=void 0}),u(e).forEach(function(h){w(t,h)||(a[c+h]=e[h])}),a}function qn(t,e){return e.type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}var ss={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(t){return s(s({},t),{table:function(e){var a=t.table(e),c=a.schema.primaryKey;return s(s({},a),{mutate:function(h){var p=St.trans,x=p.table(e).hook,P=x.deleting,I=x.creating,D=x.updating;switch(h.type){case"add":if(I.fire===zt)break;return p._promise("readwrite",function(){return N(h)},!0);case"put":if(I.fire===zt&&D.fire===zt)break;return p._promise("readwrite",function(){return N(h)},!0);case"delete":if(P.fire===zt)break;return p._promise("readwrite",function(){return N(h)},!0);case"deleteRange":if(P.fire===zt)break;return p._promise("readwrite",function(){return(function R(F,z,M){return a.query({trans:F,values:!1,query:{index:c,range:z},limit:M}).then(function(j){var L=j.result;return N({type:"delete",keys:L,trans:F}).then(function(q){return 0<q.numFailures?Promise.reject(q.failures[0]):L.length<M?{failures:[],numFailures:0,lastResult:void 0}:R(F,s(s({},z),{lower:L[L.length-1],lowerOpen:!0}),M)})})})(h.trans,h.range,1e4)},!0)}return a.mutate(h);function N(R){var F,z,M,j=St.trans,L=R.keys||qn(c,R);if(!L)throw new Error("Keys missing");return(R=R.type==="add"||R.type==="put"?s(s({},R),{keys:L}):s({},R)).type!=="delete"&&(R.values=o([],R.values)),R.keys&&(R.keys=o([],R.keys)),F=a,M=L,((z=R).type==="add"?Promise.resolve([]):F.getMany({trans:z.trans,keys:M,cache:"immutable"})).then(function(q){var Z=L.map(function(J,nt){var ft,bt,dt,gt=q[nt],wt={onerror:null,onsuccess:null};return R.type==="delete"?P.fire.call(wt,J,gt,j):R.type==="add"||gt===void 0?(ft=I.fire.call(wt,J,R.values[nt],j),J==null&&ft!=null&&(R.keys[nt]=J=ft,c.outbound||X(R.values[nt],c.keyPath,J))):(ft=Kn(gt,R.values[nt]),(bt=D.fire.call(wt,ft,J,gt,j))&&(dt=R.values[nt],Object.keys(bt).forEach(function(yt){w(dt,yt)?dt[yt]=bt[yt]:X(dt,yt,bt[yt])}))),wt});return a.mutate(R).then(function(J){for(var nt=J.failures,ft=J.results,bt=J.numFailures,J=J.lastResult,dt=0;dt<L.length;++dt){var gt=(ft||L)[dt],wt=Z[dt];gt==null?wt.onerror&&wt.onerror(nt[dt]):wt.onsuccess&&wt.onsuccess(R.type==="put"&&q[dt]?R.values[dt]:gt)}return{failures:nt,results:ft,numFailures:bt,lastResult:J}}).catch(function(J){return Z.forEach(function(nt){return nt.onerror&&nt.onerror(J)}),Promise.reject(J)})})}}})}})}};function ji(t,e,a){try{if(!e||e.keys.length<t.length)return null;for(var c=[],h=0,p=0;h<e.keys.length&&p<t.length;++h)Ut(e.keys[h],t[p])===0&&(c.push(a?Q(e.values[h]):e.values[h]),++p);return c.length===t.length?c:null}catch{return null}}var os={stack:"dbcore",level:-1,create:function(t){return{table:function(e){var a=t.table(e);return s(s({},a),{getMany:function(c){if(!c.cache)return a.getMany(c);var h=ji(c.keys,c.trans._cache,c.cache==="clone");return h?_t.resolve(h):a.getMany(c).then(function(p){return c.trans._cache={keys:c.keys,values:c.cache==="clone"?Q(p):p},p})},mutate:function(c){return c.type!=="add"&&(c.trans._cache=null),a.mutate(c)}})}}}};function Ni(t,e){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!e.schema.primaryKey.outbound}function Ui(t,e){switch(t){case"query":return e.values&&!e.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ls={stack:"dbcore",level:0,name:"Observability",create:function(t){var e=t.schema.name,a=new ue(t.MIN_KEY,t.MAX_KEY);return s(s({},t),{transaction:function(c,h,p){if(St.subscr&&h!=="readonly")throw new mt.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(St.querier));return t.transaction(c,h,p)},table:function(c){var h=t.table(c),p=h.schema,x=p.primaryKey,R=p.indexes,P=x.extractKey,I=x.outbound,D=x.autoIncrement&&R.filter(function(z){return z.compound&&z.keyPath.includes(x.keyPath)}),N=s(s({},h),{mutate:function(z){function M(yt){return yt="idb://".concat(e,"/").concat(c,"/").concat(yt),J[yt]||(J[yt]=new ue)}var j,L,q,Z=z.trans,J=z.mutatedParts||(z.mutatedParts={}),nt=M(""),ft=M(":dels"),bt=z.type,wt=z.type==="deleteRange"?[z.range]:z.type==="delete"?[z.keys]:z.values.length<50?[qn(x,z).filter(function(yt){return yt}),z.values]:[],dt=wt[0],gt=wt[1],wt=z.trans._cache;return d(dt)?(nt.addKeys(dt),(wt=bt==="delete"||dt.length===gt.length?ji(dt,wt):null)||ft.addKeys(dt),(wt||gt)&&(j=M,L=wt,q=gt,p.indexes.forEach(function(yt){var Ct=j(yt.name||"");function It(Mt){return Mt!=null?yt.extractKey(Mt):null}function Dt(Mt){return yt.multiEntry&&d(Mt)?Mt.forEach(function(be){return Ct.addKey(be)}):Ct.addKey(Mt)}(L||q).forEach(function(Mt,de){var $t=L&&It(L[de]),de=q&&It(q[de]);Ut($t,de)!==0&&($t!=null&&Dt($t),de!=null&&Dt(de))})}))):dt?(gt={from:(gt=dt.lower)!==null&&gt!==void 0?gt:t.MIN_KEY,to:(gt=dt.upper)!==null&&gt!==void 0?gt:t.MAX_KEY},ft.add(gt),nt.add(gt)):(nt.add(a),ft.add(a),p.indexes.forEach(function(yt){return M(yt.name).add(a)})),h.mutate(z).then(function(yt){return!dt||z.type!=="add"&&z.type!=="put"||(nt.addKeys(yt.results),D&&D.forEach(function(Ct){for(var It=z.values.map(function($t){return Ct.extractKey($t)}),Dt=Ct.keyPath.findIndex(function($t){return $t===x.keyPath}),Mt=0,be=yt.results.length;Mt<be;++Mt)It[Mt][Dt]=yt.results[Mt];M(Ct.name).addKeys(It)})),Z.mutatedParts=rn(Z.mutatedParts||{},J),yt})}}),R=function(M){var j=M.query,M=j.index,j=j.range;return[M,new ue((M=j.lower)!==null&&M!==void 0?M:t.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:t.MAX_KEY)]},F={get:function(z){return[x,new ue(z.key)]},getMany:function(z){return[x,new ue().addKeys(z.keys)]},count:R,query:R,openCursor:R};return u(F).forEach(function(z){N[z]=function(M){var j=St.subscr,L=!!j,q=Ni(St,h)&&Ui(z,M)?M.obsSet={}:j;if(L){var Z=function(gt){return gt="idb://".concat(e,"/").concat(c,"/").concat(gt),q[gt]||(q[gt]=new ue)},J=Z(""),nt=Z(":dels"),j=F[z](M),L=j[0],j=j[1];if((z==="query"&&L.isPrimaryKey&&!M.values?nt:Z(L.name||"")).add(j),!L.isPrimaryKey){if(z!=="count"){var ft=z==="query"&&I&&M.values&&h.query(s(s({},M),{values:!1}));return h[z].apply(this,arguments).then(function(gt){if(z==="query"){if(I&&M.values)return ft.then(function(It){return It=It.result,J.addKeys(It),gt});var wt=M.values?gt.result.map(P):gt.result;(M.values?J:nt).addKeys(wt)}else if(z==="openCursor"){var yt=gt,Ct=M.values;return yt&&Object.create(yt,{key:{get:function(){return nt.addKey(yt.primaryKey),yt.key}},primaryKey:{get:function(){var It=yt.primaryKey;return nt.addKey(It),It}},value:{get:function(){return Ct&&J.addKey(yt.primaryKey),yt.value}}})}return gt})}nt.add(a)}}return h[z].apply(this,arguments)}}),N}})}};function Li(t,e,a){if(a.numFailures===0)return e;if(e.type==="deleteRange")return null;var c=e.keys?e.keys.length:"values"in e&&e.values?e.values.length:1;return a.numFailures===c?null:(e=s({},e),d(e.keys)&&(e.keys=e.keys.filter(function(h,p){return!(p in a.failures)})),"values"in e&&d(e.values)&&(e.values=e.values.filter(function(h,p){return!(p in a.failures)})),e)}function Wn(t,e){return a=t,((c=e).lower===void 0||(c.lowerOpen?0<Ut(a,c.lower):0<=Ut(a,c.lower)))&&(t=t,(e=e).upper===void 0||(e.upperOpen?Ut(t,e.upper)<0:Ut(t,e.upper)<=0));var a,c}function Fi(t,e,F,c,h,p){if(!F||F.length===0)return t;var x=e.query.index,P=x.multiEntry,I=e.query.range,D=c.schema.primaryKey.extractKey,N=x.extractKey,R=(x.lowLevelIndex||x).extractKey,F=F.reduce(function(z,M){var j=z,L=[];if(M.type==="add"||M.type==="put")for(var q=new ue,Z=M.values.length-1;0<=Z;--Z){var J,nt=M.values[Z],ft=D(nt);q.hasKey(ft)||(J=N(nt),(P&&d(J)?J.some(function(yt){return Wn(yt,I)}):Wn(J,I))&&(q.addKey(ft),L.push(nt)))}switch(M.type){case"add":var bt=new ue().addKeys(e.values?z.map(function(Ct){return D(Ct)}):z),j=z.concat(e.values?L.filter(function(Ct){return Ct=D(Ct),!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}):L.map(function(Ct){return D(Ct)}).filter(function(Ct){return!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}));break;case"put":var dt=new ue().addKeys(M.values.map(function(Ct){return D(Ct)}));j=z.filter(function(Ct){return!dt.hasKey(e.values?D(Ct):Ct)}).concat(e.values?L:L.map(function(Ct){return D(Ct)}));break;case"delete":var gt=new ue().addKeys(M.keys);j=z.filter(function(Ct){return!gt.hasKey(e.values?D(Ct):Ct)});break;case"deleteRange":var wt=M.range;j=z.filter(function(Ct){return!Wn(D(Ct),wt)})}return j},t);return F===t?t:(F.sort(function(z,M){return Ut(R(z),R(M))||Ut(D(z),D(M))}),e.limit&&e.limit<1/0&&(F.length>e.limit?F.length=e.limit:t.length===e.limit&&F.length<e.limit&&(h.dirty=!0)),p?Object.freeze(F):F)}function Ki(t,e){return Ut(t.lower,e.lower)===0&&Ut(t.upper,e.upper)===0&&!!t.lowerOpen==!!e.lowerOpen&&!!t.upperOpen==!!e.upperOpen}function cs(t,e){return(function(a,c,h,p){if(a===void 0)return c!==void 0?-1:0;if(c===void 0)return 1;if((c=Ut(a,c))===0){if(h&&p)return 0;if(h)return 1;if(p)return-1}return c})(t.lower,e.lower,t.lowerOpen,e.lowerOpen)<=0&&0<=(function(a,c,h,p){if(a===void 0)return c!==void 0?1:0;if(c===void 0)return-1;if((c=Ut(a,c))===0){if(h&&p)return 0;if(h)return-1;if(p)return 1}return c})(t.upper,e.upper,t.upperOpen,e.upperOpen)}function us(t,e,a,c){t.subscribers.add(a),c.addEventListener("abort",function(){var h,p;t.subscribers.delete(a),t.subscribers.size===0&&(h=t,p=e,setTimeout(function(){h.subscribers.size===0&&Rt(p,h)},3e3))})}var ds={stack:"dbcore",level:0,name:"Cache",create:function(t){var e=t.schema.name;return s(s({},t),{transaction:function(a,c,h){var p,x,P=t.transaction(a,c,h);return c==="readwrite"&&(x=(p=new AbortController).signal,h=function(I){return function(){if(p.abort(),c==="readwrite"){for(var D=new Set,N=0,R=a;N<R.length;N++){var F=R[N],z=Ye["idb://".concat(e,"/").concat(F)];if(z){var M=t.table(F),j=z.optimisticOps.filter(function(Ct){return Ct.trans===P});if(P._explicit&&I&&P.mutatedParts)for(var L=0,q=Object.values(z.queries.query);L<q.length;L++)for(var Z=0,J=(bt=q[L]).slice();Z<J.length;Z++)jn((dt=J[Z]).obsSet,P.mutatedParts)&&(Rt(bt,dt),dt.subscribers.forEach(function(Ct){return D.add(Ct)}));else if(0<j.length){z.optimisticOps=z.optimisticOps.filter(function(Ct){return Ct.trans!==P});for(var nt=0,ft=Object.values(z.queries.query);nt<ft.length;nt++)for(var bt,dt,gt,wt=0,yt=(bt=ft[nt]).slice();wt<yt.length;wt++)(dt=yt[wt]).res!=null&&P.mutatedParts&&(I&&!dt.dirty?(gt=Object.isFrozen(dt.res),gt=Fi(dt.res,dt.req,j,M,dt,gt),dt.dirty?(Rt(bt,dt),dt.subscribers.forEach(function(Ct){return D.add(Ct)})):gt!==dt.res&&(dt.res=gt,dt.promise=_t.resolve({result:gt}))):(dt.dirty&&Rt(bt,dt),dt.subscribers.forEach(function(Ct){return D.add(Ct)})))}}}D.forEach(function(Ct){return Ct()})}}},P.addEventListener("abort",h(!1),{signal:x}),P.addEventListener("error",h(!1),{signal:x}),P.addEventListener("complete",h(!0),{signal:x})),P},table:function(a){var c=t.table(a),h=c.schema.primaryKey;return s(s({},c),{mutate:function(p){var x=St.trans;if(h.outbound||x.db._options.cache==="disabled"||x.explicit||x.idbtrans.mode!=="readwrite")return c.mutate(p);var P=Ye["idb://".concat(e,"/").concat(a)];return P?(x=c.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||qn(h,p).some(function(I){return I==null}))?(P.optimisticOps.push(p),p.mutatedParts&&nn(p.mutatedParts),x.then(function(I){0<I.numFailures&&(Rt(P.optimisticOps,p),(I=Li(0,p,I))&&P.optimisticOps.push(I),p.mutatedParts&&nn(p.mutatedParts))}),x.catch(function(){Rt(P.optimisticOps,p),p.mutatedParts&&nn(p.mutatedParts)})):x.then(function(I){var D=Li(0,s(s({},p),{values:p.values.map(function(N,R){var F;return I.failures[R]?N:(N=(F=h.keyPath)!==null&&F!==void 0&&F.includes(".")?Q(N):s({},N),X(N,h.keyPath,I.results[R]),N)})}),I);P.optimisticOps.push(D),queueMicrotask(function(){return p.mutatedParts&&nn(p.mutatedParts)})}),x):c.mutate(p)},query:function(p){if(!Ni(St,c)||!Ui("query",p))return c.query(p);var x=((D=St.trans)===null||D===void 0?void 0:D.db._options.cache)==="immutable",R=St,P=R.requery,I=R.signal,D=(function(M,j,L,q){var Z=Ye["idb://".concat(M,"/").concat(j)];if(!Z)return[];if(!(j=Z.queries[L]))return[null,!1,Z,null];var J=j[(q.query?q.query.index.name:null)||""];if(!J)return[null,!1,Z,null];switch(L){case"query":var nt=J.find(function(ft){return ft.req.limit===q.limit&&ft.req.values===q.values&&Ki(ft.req.query.range,q.query.range)});return nt?[nt,!0,Z,J]:[J.find(function(ft){return("limit"in ft.req?ft.req.limit:1/0)>=q.limit&&(!q.values||ft.req.values)&&cs(ft.req.query.range,q.query.range)}),!1,Z,J];case"count":return nt=J.find(function(ft){return Ki(ft.req.query.range,q.query.range)}),[nt,!!nt,Z,J]}})(e,a,"query",p),N=D[0],R=D[1],F=D[2],z=D[3];return N&&R?N.obsSet=p.obsSet:(R=c.query(p).then(function(M){var j=M.result;if(N&&(N.res=j),x){for(var L=0,q=j.length;L<q;++L)Object.freeze(j[L]);Object.freeze(j)}else M.result=Q(j);return M}).catch(function(M){return z&&N&&Rt(z,N),Promise.reject(M)}),N={obsSet:p.obsSet,promise:R,subscribers:new Set,type:"query",req:p,dirty:!1},z?z.push(N):(z=[N],(F=F||(Ye["idb://".concat(e,"/").concat(a)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=z)),us(N,z,P,I),N.promise.then(function(M){return{result:Fi(M.result,p,F?.optimisticOps,c,N,x)}})}})}})}};function sn(t,e){return new Proxy(t,{get:function(a,c,h){return c==="db"?e:Reflect.get(a,c,h)}})}var Oe=(re.prototype.version=function(t){if(isNaN(t)||t<.1)throw new mt.Type("Given version is not a positive number");if(t=Math.round(10*t)/10,this.idbdb||this._state.isBeingOpened)throw new mt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var e=this._versions,a=e.filter(function(c){return c._cfg.version===t})[0];return a||(a=new this.Version(t),e.push(a),e.sort(ts),a.stores({}),this._state.autoSchema=!1,a)},re.prototype._whenReady=function(t){var e=this;return this.idbdb&&(this._state.openComplete||St.letThrough||this._vip)?t():new _t(function(a,c){if(e._state.openComplete)return c(new mt.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return void c(new mt.DatabaseClosed);e.open().catch(zt)}e._state.dbReadyPromise.then(a,c)}).then(t)},re.prototype.use=function(t){var e=t.stack,a=t.create,c=t.level,h=t.name;return h&&this.unuse({stack:e,name:h}),t=this._middlewares[e]||(this._middlewares[e]=[]),t.push({stack:e,create:a,level:c??10,name:h}),t.sort(function(p,x){return p.level-x.level}),this},re.prototype.unuse=function(t){var e=t.stack,a=t.name,c=t.create;return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(function(h){return c?h.create!==c:!!a&&h.name!==a})),this},re.prototype.open=function(){var t=this;return He(_e,function(){return is(t)})},re.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state,e=dr.indexOf(this);if(0<=e&&dr.splice(e,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new _t(function(a){t.dbReadyResolve=a}),t.openCanceller=new _t(function(a,c){t.cancelOpen=c}))},re.prototype.close=function(a){var e=(a===void 0?{disableAutoOpen:!0}:a).disableAutoOpen,a=this._state;e?(a.isBeingOpened&&a.cancelOpen(new mt.DatabaseClosed),this._close(),a.autoOpen=!1,a.dbOpenError=new mt.DatabaseClosed):(this._close(),a.autoOpen=this._options.autoOpen||a.isBeingOpened,a.openComplete=!1,a.dbOpenError=null)},re.prototype.delete=function(t){var e=this;t===void 0&&(t={disableAutoOpen:!0});var a=0<arguments.length&&typeof arguments[0]!="object",c=this._state;return new _t(function(h,p){function x(){e.close(t);var P=e._deps.indexedDB.deleteDatabase(e.name);P.onsuccess=Yt(function(){var I,D,N;I=e._deps,D=e.name,N=I.indexedDB,I=I.IDBKeyRange,zn(N)||D===qr||Dn(N,I).delete(D).catch(zt),h()}),P.onerror=Ce(p),P.onblocked=e._fireOnBlocked}if(a)throw new mt.InvalidArgument("Invalid closeOptions argument to db.delete()");c.isBeingOpened?c.dbReadyPromise.then(x):x()})},re.prototype.backendDB=function(){return this.idbdb},re.prototype.isOpen=function(){return this.idbdb!==null},re.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},re.prototype.hasFailed=function(){return this._state.dbOpenError!==null},re.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(re.prototype,"tables",{get:function(){var t=this;return u(this._allTables).map(function(e){return t._allTables[e]})},enumerable:!1,configurable:!0}),re.prototype.transaction=function(){var t=function(e,a,c){var h=arguments.length;if(h<2)throw new mt.InvalidArgument("Too few arguments");for(var p=new Array(h-1);--h;)p[h-1]=arguments[h];return c=p.pop(),[e,pt(p),c]}.apply(this,arguments);return this._transaction.apply(this,t)},re.prototype._transaction=function(t,e,a){var c=this,h=St.trans;h&&h.db===this&&t.indexOf("!")===-1||(h=null);var p,x,P=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");try{if(x=e.map(function(D){if(D=D instanceof c.Table?D.name:D,typeof D!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return D}),t=="r"||t===kn)p=kn;else{if(t!="rw"&&t!=Sn)throw new mt.InvalidArgument("Invalid transaction mode: "+t);p=Sn}if(h){if(h.mode===kn&&p===Sn){if(!P)throw new mt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");h=null}h&&x.forEach(function(D){if(h&&h.storeNames.indexOf(D)===-1){if(!P)throw new mt.SubTransaction("Table "+D+" not included in parent transaction.");h=null}}),P&&h&&!h.active&&(h=null)}}catch(D){return h?h._promise(null,function(N,R){R(D)}):ee(D)}var I=function D(N,R,F,z,M){return _t.resolve().then(function(){var j=St.transless||St,L=N._createTransaction(R,F,N._dbSchema,z);if(L.explicit=!0,j={trans:L,transless:j},z)L.idbtrans=z.idbtrans;else try{L.create(),L.idbtrans._explicit=!0,N._state.PR1398_maxLoop=3}catch(J){return J.name===ne.InvalidState&&N.isOpen()&&0<--N._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),N.close({disableAutoOpen:!1}),N.open().then(function(){return D(N,R,F,null,M)})):ee(J)}var q,Z=Y(M);return Z&&ur(),j=_t.follow(function(){var J;(q=M.call(L,L))&&(Z?(J=Ne.bind(null,null),q.then(J,J)):typeof q.next=="function"&&typeof q.throw=="function"&&(q=Fn(q)))},j),(q&&typeof q.then=="function"?_t.resolve(q).then(function(J){return L.active?J:ee(new mt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return q})).then(function(J){return z&&L._resolve(),L._completion.then(function(){return J})}).catch(function(J){return L._reject(J),ee(J)})})}.bind(null,this,p,x,h,a);return h?h._promise(p,I,"lock"):St.trans?He(St.transless,function(){return c._whenReady(I)}):this._whenReady(I)},re.prototype.table=function(t){if(!w(this._allTables,t))throw new mt.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},re);function re(t,e){var a=this;this._middlewares={},this.verno=0;var c=re.dependencies;this._options=e=s({addons:re.addons,autoOpen:!0,indexedDB:c.indexedDB,IDBKeyRange:c.IDBKeyRange,cache:"cloned"},e),this._deps={indexedDB:e.indexedDB,IDBKeyRange:e.IDBKeyRange},c=e.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var h,p,x,P,I,D={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:zt,dbReadyPromise:null,cancelOpen:zt,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:e.autoOpen};D.dbReadyPromise=new _t(function(R){D.dbReadyResolve=R}),D.openCanceller=new _t(function(R,F){D.cancelOpen=F}),this._state=D,this.name=t,this.on=wr(this,"populate","blocked","versionchange","close",{ready:[st,zt]}),this.once=function(R,F){var z=function(){for(var M=[],j=0;j<arguments.length;j++)M[j]=arguments[j];a.on(R).unsubscribe(z),F.apply(a,M)};return a.on(R,z)},this.on.ready.subscribe=B(this.on.ready.subscribe,function(R){return function(F,z){re.vip(function(){var M,j=a._state;j.openComplete?(j.dbOpenError||_t.resolve().then(F),z&&R(F)):j.onReadyBeingFired?(j.onReadyBeingFired.push(F),z&&R(F)):(R(F),M=a,z||R(function L(){M.on.ready.unsubscribe(F),M.on.ready.unsubscribe(L)}))})}}),this.Collection=(h=this,_r(Za.prototype,function(q,L){this.db=h;var z=yi,M=null;if(L)try{z=L()}catch(Z){M=Z}var j=q._ctx,L=j.table,q=L.hook.reading.fire;this._ctx={table:L,index:j.index,isPrimKey:!j.index||L.schema.primKey.keyPath&&j.index===L.schema.primKey.name,range:z,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:M,or:j.or,valueMapper:q!==ce?q:null}})),this.Table=(p=this,_r(Si.prototype,function(R,F,z){this.db=p,this._tx=z,this.name=R,this.schema=F,this.hook=p._allTables[R]?p._allTables[R].hook:wr(null,{creating:[G,zt],reading:[f,ce],updating:[S,zt],deleting:[T,zt]})})),this.Transaction=(x=this,_r(Ga.prototype,function(R,F,z,M,j){var L=this;R!=="readonly"&&F.forEach(function(q){q=(q=z[q])===null||q===void 0?void 0:q.yProps,q&&(F=F.concat(q.map(function(Z){return Z.updatesTable})))}),this.db=x,this.mode=R,this.storeNames=F,this.schema=z,this.chromeTransactionDurability=M,this.idbtrans=null,this.on=wr(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new _t(function(q,Z){L._resolve=q,L._reject=Z}),this._completion.then(function(){L.active=!1,L.on.complete.fire()},function(q){var Z=L.active;return L.active=!1,L.on.error.fire(q),L.parent?L.parent._reject(q):Z&&L.idbtrans&&L.idbtrans.abort(),ee(q)})})),this.Version=(P=this,_r(ns.prototype,function(R){this.db=P,this._cfg={version:R,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(I=this,_r(Pi.prototype,function(R,F,z){if(this.db=I,this._ctx={table:R,index:F===":id"?null:F,or:z},this._cmp=this._ascending=Ut,this._descending=function(M,j){return Ut(j,M)},this._max=function(M,j){return 0<Ut(M,j)?M:j},this._min=function(M,j){return Ut(M,j)<0?M:j},this._IDBKeyRange=I._deps.IDBKeyRange,!this._IDBKeyRange)throw new mt.MissingAPI})),this.on("versionchange",function(R){0<R.newVersion?console.warn("Another connection wants to upgrade database '".concat(a.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(a.name,"'. Closing db now to resume the delete request.")),a.close({disableAutoOpen:!1})}),this.on("blocked",function(R){!R.newVersion||R.newVersion<R.oldVersion?console.warn("Dexie.delete('".concat(a.name,"') was blocked")):console.warn("Upgrade '".concat(a.name,"' blocked by other connection holding version ").concat(R.oldVersion/10))}),this._maxKey=Sr(e.IDBKeyRange),this._createTransaction=function(R,F,z,M){return new a.Transaction(R,F,z,a._options.chromeTransactionDurability,M)},this._fireOnBlocked=function(R){a.on("blocked").fire(R),dr.filter(function(F){return F.name===a.name&&F!==a&&!F._state.vcFired}).map(function(F){return F.on("versionchange").fire(R)})},this.use(os),this.use(ds),this.use(ls),this.use(as),this.use(ss);var N=new Proxy(this,{get:function(R,F,z){if(F==="_vip")return!0;if(F==="table")return function(j){return sn(a.table(j),N)};var M=Reflect.get(R,F,z);return M instanceof Si?sn(M,N):F==="tables"?M.map(function(j){return sn(j,N)}):F==="_createTransaction"?function(){return sn(M.apply(this,arguments),N)}:M}});this.vip=N,c.forEach(function(R){return R(a)})}var on,xe=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",hs=(Hn.prototype.subscribe=function(t,e,a){return this._subscribe(t&&typeof t!="function"?t:{next:t,error:e,complete:a})},Hn.prototype[xe]=function(){return this},Hn);function Hn(t){this._subscribe=t}try{on={indexedDB:l.indexedDB||l.mozIndexedDB||l.webkitIndexedDB||l.msIndexedDB,IDBKeyRange:l.IDBKeyRange||l.webkitIDBKeyRange}}catch{on={indexedDB:null,IDBKeyRange:null}}function qi(t){var e,a=!1,c=new hs(function(h){var p=Y(t),x,P=!1,I={},D={},N={get closed(){return P},unsubscribe:function(){P||(P=!0,x&&x.abort(),R&&Fe.storagemutated.unsubscribe(z))}};h.start&&h.start(N);var R=!1,F=function(){return xn(M)},z=function(j){rn(I,j),jn(D,I)&&F()},M=function(){var j,L,q;!P&&on.indexedDB&&(I={},j={},x&&x.abort(),x=new AbortController,q=(function(Z){var J=lr();try{p&&ur();var nt=je(t,Z);return nt=p?nt.finally(Ne):nt}finally{J&&cr()}})(L={subscr:j,signal:x.signal,requery:F,querier:t,trans:null}),Promise.resolve(q).then(function(Z){a=!0,e=Z,P||L.signal.aborted||(I={},(function(J){for(var nt in J)if(w(J,nt))return;return 1})(D=j)||R||(Fe(kr,z),R=!0),xn(function(){return!P&&h.next&&h.next(Z)}))},function(Z){a=!1,["DatabaseClosedError","AbortError"].includes(Z?.name)||P||xn(function(){P||h.error&&h.error(Z)})}))};return setTimeout(F,0),N});return c.hasValue=function(){return a},c.getValue=function(){return e},c}var Ge=Oe;function Zn(t){var e=Ke;try{Ke=!0,Fe.storagemutated.fire(t),Ln(t,!0)}finally{Ke=e}}C(Ge,s(s({},Wt),{delete:function(t){return new Ge(t,{addons:[]}).delete()},exists:function(t){return new Ge(t,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(t){try{return e=Ge.dependencies,a=e.indexedDB,e=e.IDBKeyRange,(zn(a)?Promise.resolve(a.databases()).then(function(c){return c.map(function(h){return h.name}).filter(function(h){return h!==qr})}):Dn(a,e).toCollection().primaryKeys()).then(t)}catch{return ee(new mt.MissingAPI)}var e,a},defineClass:function(){return function(t){m(this,t)}},ignoreTransaction:function(t){return St.trans?He(St.transless,t):t()},vip:Bn,async:function(t){return function(){try{var e=Fn(t.apply(this,arguments));return e&&typeof e.then=="function"?e:_t.resolve(e)}catch(a){return ee(a)}}},spawn:function(t,e,a){try{var c=Fn(t.apply(a,e||[]));return c&&typeof c.then=="function"?c:_t.resolve(c)}catch(h){return ee(h)}},currentTransaction:{get:function(){return St.trans||null}},waitFor:function(t,e){return e=_t.resolve(typeof t=="function"?Ge.ignoreTransaction(t):t).timeout(e||6e4),St.trans?St.trans.waitFor(e):e},Promise:_t,debug:{get:function(){return at},set:function(t){H(t)}},derive:y,extend:m,props:C,override:B,Events:wr,on:Fe,liveQuery:qi,extendObservabilitySet:rn,getByKeyPath:rt,setByKeyPath:X,delByKeyPath:function(t,e){typeof e=="string"?X(t,e,void 0):"length"in e&&[].map.call(e,function(a){X(t,a,void 0)})},shallowClone:ct,deepClone:Q,getObjectDiff:Kn,cmp:Ut,asap:K,minKey:-1/0,addons:[],connections:dr,errnames:ne,dependencies:on,cache:Ye,semVer:"4.2.1",version:"4.2.1".split(".").map(function(t){return parseInt(t)}).reduce(function(t,e,a){return t+e/Math.pow(10,2*a)})})),Ge.maxKey=Sr(Ge.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Fe(kr,function(t){Ke||(t=new CustomEvent(An,{detail:t}),Ke=!0,dispatchEvent(t),Ke=!1)}),addEventListener(An,function(t){t=t.detail,Ke||Zn(t)}));var mr,Ke=!1,Wi=function(){};return typeof BroadcastChannel<"u"&&((Wi=function(){(mr=new BroadcastChannel(An)).onmessage=function(t){return t.data&&Zn(t.data)}})(),typeof mr.unref=="function"&&mr.unref(),Fe(kr,function(t){Ke||mr.postMessage(t)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(t){if(!Oe.disableBfCache&&t.persisted){at&&console.debug("Dexie: handling persisted pagehide"),mr?.close();for(var e=0,a=dr;e<a.length;e++)a[e].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(t){!Oe.disableBfCache&&t.persisted&&(at&&console.debug("Dexie: handling persisted pageshow"),Wi(),Zn({all:new ue(-1/0,[[]])}))})),_t.rejectionMapper=function(t,e){return!t||t instanceof At||t instanceof TypeError||t instanceof SyntaxError||!t.name||!te[t.name]?t:(e=new te[t.name](e||t.message,t),"stack"in t&&E(e,"stack",{get:function(){return this.inner.stack}}),e)},H(at),s(Oe,Object.freeze({__proto__:null,Dexie:Oe,liveQuery:qi,Entity:bi,cmp:Ut,PropModification:br,replacePrefix:function(t,e){return new br({replacePrefix:[t,e]})},add:function(t){return new br({add:t})},remove:function(t){return new br({remove:t})},default:Oe,RangeSet:ue,mergeRanges:Ar,rangesOverlap:Di}),{default:Oe}),Oe})})(hn)),hn.exports}var Vs=Zs();const ii=Ea(Vs),ia=Symbol.for("Dexie"),gn=globalThis[ia]||(globalThis[ia]=ii);if(ii.semVer!==gn.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${ii.semVer} and ${gn.semVer}`);const{liveQuery:hl,mergeRanges:fl,rangesOverlap:pl,RangeSet:ml,cmp:gl,Entity:vl,PropModification:yl,replacePrefix:bl,add:wl,remove:_l,DexieYProvider:xl}=gn;class Ys extends gn{constructor(){super("AudioAnnotationDB"),this.version(1).stores({recordings:"id, title, createdAt, isAnnotated",annotations:"recordingId, completedAt, updatedAt"})}}const ke=new Ys;async function Aa(i){const{v4:r}=await Ws(async()=>{const{v4:o}=await import("./index-gGVEG6Gs.js");return{v4:o}},[]),n=r(),s={...i,id:n,createdAt:Date.now(),isAnnotated:!1};return await ke.recordings.add(s),n}async function Ta(){return await ke.recordings.orderBy("createdAt").reverse().toArray()}async function Gs(i){return await ke.recordings.get(i)}async function Xs(i,r){await ke.recordings.update(i,r)}async function Js(i){await ke.recordings.delete(i),await ke.annotations.delete(i)}async function Gn(i){await ke.annotations.put(i),await ke.recordings.update(i.recordingId,{isAnnotated:!0})}async function Rr(i){return await ke.annotations.get(i)}async function Qs(i){await ke.annotations.delete(i),await ke.recordings.update(i,{isAnnotated:!1})}async function to(){const i=await ke.recordings.toArray(),r=/^Untitled (\d+)$/,n=i.map(s=>s.title.match(r)?.[1]).filter(Boolean).map(Number);return n.length>0?Math.max(...n)+1:1}function eo(i){const r=i.lastIndexOf(".");return r===-1?i:i.substring(0,r)}async function ro(i){return new Promise((r,n)=>{const s=new Audio,o=URL.createObjectURL(i);s.addEventListener("loadedmetadata",()=>{URL.revokeObjectURL(o),r(s.duration)}),s.addEventListener("error",()=>{URL.revokeObjectURL(o),n(new Error("Failed to load audio metadata"))}),s.src=o})}async function no(i){if(!i.type.startsWith("audio/"))throw new Error("File must be an audio file");const r=eo(i.name),n=await ro(i);return{id:await Aa({title:r,audioBlob:i,duration:n,source:"upload"}),title:r,duration:n}}async function io(i){const r=Array.from(i),n=[];for(const s of r)try{const o=await no(s);n.push(o)}catch(o){console.error(`Failed to upload ${s.name}:`,o)}return n}function ao(){return new Promise(i=>{const r=document.createElement("input");r.type="file",r.accept="audio/*",r.multiple=!0,r.addEventListener("change",()=>{i(r.files)}),r.addEventListener("cancel",()=>{i(null)}),r.click()})}function cn(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Xn={exports:{}};var aa;function so(){return aa||(aa=1,(function(i,r){(function(n){i.exports=n()})(function(){return(function n(s,o,l){function u(b,_){if(!o[b]){if(!s[b]){var w=typeof cn=="function"&&cn;if(!_&&w)return w(b,!0);if(d)return d(b,!0);var C=new Error("Cannot find module '"+b+"'");throw C.code="MODULE_NOT_FOUND",C}var v=o[b]={exports:{}};s[b][0].call(v.exports,function(E){var y=s[b][1][E];return u(y||E)},v,v.exports,n,s,o,l)}return o[b].exports}for(var d=typeof cn=="function"&&cn,m=0;m<l.length;m++)u(l[m]);return u})({1:[function(n,s,o){var l=n("./utils"),u=n("./support"),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(m){for(var b,_,w,C,v,E,y,A=[],k=0,O=m.length,B=O,W=l.getTypeOf(m)!=="string";k<m.length;)B=O-k,w=W?(b=m[k++],_=k<O?m[k++]:0,k<O?m[k++]:0):(b=m.charCodeAt(k++),_=k<O?m.charCodeAt(k++):0,k<O?m.charCodeAt(k++):0),C=b>>2,v=(3&b)<<4|_>>4,E=1<B?(15&_)<<2|w>>6:64,y=2<B?63&w:64,A.push(d.charAt(C)+d.charAt(v)+d.charAt(E)+d.charAt(y));return A.join("")},o.decode=function(m){var b,_,w,C,v,E,y=0,A=0,k="data:";if(m.substr(0,k.length)===k)throw new Error("Invalid base64 input, it looks like a data url.");var O,B=3*(m=m.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(m.charAt(m.length-1)===d.charAt(64)&&B--,m.charAt(m.length-2)===d.charAt(64)&&B--,B%1!=0)throw new Error("Invalid base64 input, bad content length.");for(O=u.uint8array?new Uint8Array(0|B):new Array(0|B);y<m.length;)b=d.indexOf(m.charAt(y++))<<2|(C=d.indexOf(m.charAt(y++)))>>4,_=(15&C)<<4|(v=d.indexOf(m.charAt(y++)))>>2,w=(3&v)<<6|(E=d.indexOf(m.charAt(y++))),O[A++]=b,v!==64&&(O[A++]=_),E!==64&&(O[A++]=w);return O}},{"./support":30,"./utils":32}],2:[function(n,s,o){var l=n("./external"),u=n("./stream/DataWorker"),d=n("./stream/Crc32Probe"),m=n("./stream/DataLengthProbe");function b(_,w,C,v,E){this.compressedSize=_,this.uncompressedSize=w,this.crc32=C,this.compression=v,this.compressedContent=E}b.prototype={getContentWorker:function(){var _=new u(l.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new m("data_length")),w=this;return _.on("end",function(){if(this.streamInfo.data_length!==w.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),_},getCompressedWorker:function(){return new u(l.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},b.createWorkerFrom=function(_,w,C){return _.pipe(new d).pipe(new m("uncompressedSize")).pipe(w.compressWorker(C)).pipe(new m("compressedSize")).withStreamInfo("compression",w)},s.exports=b},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,s,o){var l=n("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new l("STORE compression")},uncompressWorker:function(){return new l("STORE decompression")}},o.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,s,o){var l=n("./utils"),u=(function(){for(var d,m=[],b=0;b<256;b++){d=b;for(var _=0;_<8;_++)d=1&d?3988292384^d>>>1:d>>>1;m[b]=d}return m})();s.exports=function(d,m){return d!==void 0&&d.length?l.getTypeOf(d)!=="string"?(function(b,_,w,C){var v=u,E=C+w;b^=-1;for(var y=C;y<E;y++)b=b>>>8^v[255&(b^_[y])];return-1^b})(0|m,d,d.length,0):(function(b,_,w,C){var v=u,E=C+w;b^=-1;for(var y=C;y<E;y++)b=b>>>8^v[255&(b^_.charCodeAt(y))];return-1^b})(0|m,d,d.length,0):0}},{"./utils":32}],5:[function(n,s,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(n,s,o){var l=null;l=typeof Promise<"u"?Promise:n("lie"),s.exports={Promise:l}},{lie:37}],7:[function(n,s,o){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",u=n("pako"),d=n("./utils"),m=n("./stream/GenericWorker"),b=l?"uint8array":"array";function _(w,C){m.call(this,"FlateWorker/"+w),this._pako=null,this._pakoAction=w,this._pakoOptions=C,this.meta={}}o.magic="\b\0",d.inherits(_,m),_.prototype.processChunk=function(w){this.meta=w.meta,this._pako===null&&this._createPako(),this._pako.push(d.transformTo(b,w.data),!1)},_.prototype.flush=function(){m.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},_.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this._pako=null},_.prototype._createPako=function(){this._pako=new u[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var w=this;this._pako.onData=function(C){w.push({data:C,meta:w.meta})}},o.compressWorker=function(w){return new _("Deflate",w)},o.uncompressWorker=function(){return new _("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,s,o){function l(v,E){var y,A="";for(y=0;y<E;y++)A+=String.fromCharCode(255&v),v>>>=8;return A}function u(v,E,y,A,k,O){var B,W,K=v.file,rt=v.compression,X=O!==b.utf8encode,ct=d.transformTo("string",O(K.name)),tt=d.transformTo("string",b.utf8encode(K.name)),pt=K.comment,Pt=d.transformTo("string",O(pt)),$=d.transformTo("string",b.utf8encode(pt)),Q=tt.length!==K.name.length,g=$.length!==pt.length,it="",Ot="",lt="",Rt=K.dir,ot=K.date,Tt={crc32:0,compressedSize:0,uncompressedSize:0};E&&!y||(Tt.crc32=v.crc32,Tt.compressedSize=v.compressedSize,Tt.uncompressedSize=v.uncompressedSize);var Y=0;E&&(Y|=8),X||!Q&&!g||(Y|=2048);var V=0,At=0;Rt&&(V|=16),k==="UNIX"?(At=798,V|=(function(vt,qt){var ne=vt;return vt||(ne=qt?16893:33204),(65535&ne)<<16})(K.unixPermissions,Rt)):(At=20,V|=(function(vt){return 63&(vt||0)})(K.dosPermissions)),B=ot.getUTCHours(),B<<=6,B|=ot.getUTCMinutes(),B<<=5,B|=ot.getUTCSeconds()/2,W=ot.getUTCFullYear()-1980,W<<=4,W|=ot.getUTCMonth()+1,W<<=5,W|=ot.getUTCDate(),Q&&(Ot=l(1,1)+l(_(ct),4)+tt,it+="up"+l(Ot.length,2)+Ot),g&&(lt=l(1,1)+l(_(Pt),4)+$,it+="uc"+l(lt.length,2)+lt);var xt="";return xt+=`
\0`,xt+=l(Y,2),xt+=rt.magic,xt+=l(B,2),xt+=l(W,2),xt+=l(Tt.crc32,4),xt+=l(Tt.compressedSize,4),xt+=l(Tt.uncompressedSize,4),xt+=l(ct.length,2),xt+=l(it.length,2),{fileRecord:w.LOCAL_FILE_HEADER+xt+ct+it,dirRecord:w.CENTRAL_FILE_HEADER+l(At,2)+xt+l(Pt.length,2)+"\0\0\0\0"+l(V,4)+l(A,4)+ct+it+Pt}}var d=n("../utils"),m=n("../stream/GenericWorker"),b=n("../utf8"),_=n("../crc32"),w=n("../signature");function C(v,E,y,A){m.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=E,this.zipPlatform=y,this.encodeFileName=A,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}d.inherits(C,m),C.prototype.push=function(v){var E=v.meta.percent||0,y=this.entriesCount,A=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,m.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:y?(E+100*(y-A-1))/y:100}}))},C.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var E=this.streamFiles&&!v.file.dir;if(E){var y=u(v,E,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},C.prototype.closedSource=function(v){this.accumulate=!1;var E=this.streamFiles&&!v.file.dir,y=u(v,E,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),E)this.push({data:(function(A){return w.DATA_DESCRIPTOR+l(A.crc32,4)+l(A.compressedSize,4)+l(A.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},C.prototype.flush=function(){for(var v=this.bytesWritten,E=0;E<this.dirRecords.length;E++)this.push({data:this.dirRecords[E],meta:{percent:100}});var y=this.bytesWritten-v,A=(function(k,O,B,W,K){var rt=d.transformTo("string",K(W));return w.CENTRAL_DIRECTORY_END+"\0\0\0\0"+l(k,2)+l(k,2)+l(O,4)+l(B,4)+l(rt.length,2)+rt})(this.dirRecords.length,y,v,this.zipComment,this.encodeFileName);this.push({data:A,meta:{percent:100}})},C.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},C.prototype.registerPrevious=function(v){this._sources.push(v);var E=this;return v.on("data",function(y){E.processChunk(y)}),v.on("end",function(){E.closedSource(E.previous.streamInfo),E._sources.length?E.prepareNextSource():E.end()}),v.on("error",function(y){E.error(y)}),this},C.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},C.prototype.error=function(v){var E=this._sources;if(!m.prototype.error.call(this,v))return!1;for(var y=0;y<E.length;y++)try{E[y].error(v)}catch{}return!0},C.prototype.lock=function(){m.prototype.lock.call(this);for(var v=this._sources,E=0;E<v.length;E++)v[E].lock()},s.exports=C},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,s,o){var l=n("../compressions"),u=n("./ZipFileWorker");o.generateWorker=function(d,m,b){var _=new u(m.streamFiles,b,m.platform,m.encodeFileName),w=0;try{d.forEach(function(C,v){w++;var E=(function(O,B){var W=O||B,K=l[W];if(!K)throw new Error(W+" is not a valid compression method !");return K})(v.options.compression,m.compression),y=v.options.compressionOptions||m.compressionOptions||{},A=v.dir,k=v.date;v._compressWorker(E,y).withStreamInfo("file",{name:C,dir:A,date:k,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(_)}),_.entriesCount=w}catch(C){_.error(C)}return _}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,s,o){function l(){if(!(this instanceof l))return new l;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var u=new l;for(var d in this)typeof this[d]!="function"&&(u[d]=this[d]);return u}}(l.prototype=n("./object")).loadAsync=n("./load"),l.support=n("./support"),l.defaults=n("./defaults"),l.version="3.10.1",l.loadAsync=function(u,d){return new l().loadAsync(u,d)},l.external=n("./external"),s.exports=l},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,s,o){var l=n("./utils"),u=n("./external"),d=n("./utf8"),m=n("./zipEntries"),b=n("./stream/Crc32Probe"),_=n("./nodejsUtils");function w(C){return new u.Promise(function(v,E){var y=C.decompressed.getContentWorker().pipe(new b);y.on("error",function(A){E(A)}).on("end",function(){y.streamInfo.crc32!==C.decompressed.crc32?E(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}s.exports=function(C,v){var E=this;return v=l.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:d.utf8decode}),_.isNode&&_.isStream(C)?u.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):l.prepareContent("the loaded zip file",C,!0,v.optimizedBinaryString,v.base64).then(function(y){var A=new m(v);return A.load(y),A}).then(function(y){var A=[u.Promise.resolve(y)],k=y.files;if(v.checkCRC32)for(var O=0;O<k.length;O++)A.push(w(k[O]));return u.Promise.all(A)}).then(function(y){for(var A=y.shift(),k=A.files,O=0;O<k.length;O++){var B=k[O],W=B.fileNameStr,K=l.resolve(B.fileNameStr);E.file(K,B.decompressed,{binary:!0,optimizedBinaryString:!0,date:B.date,dir:B.dir,comment:B.fileCommentStr.length?B.fileCommentStr:null,unixPermissions:B.unixPermissions,dosPermissions:B.dosPermissions,createFolders:v.createFolders}),B.dir||(E.file(K).unsafeOriginalName=W)}return A.zipComment.length&&(E.comment=A.zipComment),E})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,s,o){var l=n("../utils"),u=n("../stream/GenericWorker");function d(m,b){u.call(this,"Nodejs stream input adapter for "+m),this._upstreamEnded=!1,this._bindStream(b)}l.inherits(d,u),d.prototype._bindStream=function(m){var b=this;(this._stream=m).pause(),m.on("data",function(_){b.push({data:_,meta:{percent:0}})}).on("error",function(_){b.isPaused?this.generatedError=_:b.error(_)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},d.prototype.pause=function(){return!!u.prototype.pause.call(this)&&(this._stream.pause(),!0)},d.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},s.exports=d},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,s,o){var l=n("readable-stream").Readable;function u(d,m,b){l.call(this,m),this._helper=d;var _=this;d.on("data",function(w,C){_.push(w)||_._helper.pause(),b&&b(C)}).on("error",function(w){_.emit("error",w)}).on("end",function(){_.push(null)})}n("../utils").inherits(u,l),u.prototype._read=function(){this._helper.resume()},s.exports=u},{"../utils":32,"readable-stream":16}],14:[function(n,s,o){s.exports={isNode:typeof Buffer<"u",newBufferFrom:function(l,u){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(l,u);if(typeof l=="number")throw new Error('The "data" argument must not be a number');return new Buffer(l,u)},allocBuffer:function(l){if(Buffer.alloc)return Buffer.alloc(l);var u=new Buffer(l);return u.fill(0),u},isBuffer:function(l){return Buffer.isBuffer(l)},isStream:function(l){return l&&typeof l.on=="function"&&typeof l.pause=="function"&&typeof l.resume=="function"}}},{}],15:[function(n,s,o){function l(K,rt,X){var ct,tt=d.getTypeOf(rt),pt=d.extend(X||{},_);pt.date=pt.date||new Date,pt.compression!==null&&(pt.compression=pt.compression.toUpperCase()),typeof pt.unixPermissions=="string"&&(pt.unixPermissions=parseInt(pt.unixPermissions,8)),pt.unixPermissions&&16384&pt.unixPermissions&&(pt.dir=!0),pt.dosPermissions&&16&pt.dosPermissions&&(pt.dir=!0),pt.dir&&(K=k(K)),pt.createFolders&&(ct=A(K))&&O.call(this,ct,!0);var Pt=tt==="string"&&pt.binary===!1&&pt.base64===!1;X&&X.binary!==void 0||(pt.binary=!Pt),(rt instanceof w&&rt.uncompressedSize===0||pt.dir||!rt||rt.length===0)&&(pt.base64=!1,pt.binary=!0,rt="",pt.compression="STORE",tt="string");var $=null;$=rt instanceof w||rt instanceof m?rt:E.isNode&&E.isStream(rt)?new y(K,rt):d.prepareContent(K,rt,pt.binary,pt.optimizedBinaryString,pt.base64);var Q=new C(K,$,pt);this.files[K]=Q}var u=n("./utf8"),d=n("./utils"),m=n("./stream/GenericWorker"),b=n("./stream/StreamHelper"),_=n("./defaults"),w=n("./compressedObject"),C=n("./zipObject"),v=n("./generate"),E=n("./nodejsUtils"),y=n("./nodejs/NodejsStreamInputAdapter"),A=function(K){K.slice(-1)==="/"&&(K=K.substring(0,K.length-1));var rt=K.lastIndexOf("/");return 0<rt?K.substring(0,rt):""},k=function(K){return K.slice(-1)!=="/"&&(K+="/"),K},O=function(K,rt){return rt=rt!==void 0?rt:_.createFolders,K=k(K),this.files[K]||l.call(this,K,null,{dir:!0,createFolders:rt}),this.files[K]};function B(K){return Object.prototype.toString.call(K)==="[object RegExp]"}var W={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(K){var rt,X,ct;for(rt in this.files)ct=this.files[rt],(X=rt.slice(this.root.length,rt.length))&&rt.slice(0,this.root.length)===this.root&&K(X,ct)},filter:function(K){var rt=[];return this.forEach(function(X,ct){K(X,ct)&&rt.push(ct)}),rt},file:function(K,rt,X){if(arguments.length!==1)return K=this.root+K,l.call(this,K,rt,X),this;if(B(K)){var ct=K;return this.filter(function(pt,Pt){return!Pt.dir&&ct.test(pt)})}var tt=this.files[this.root+K];return tt&&!tt.dir?tt:null},folder:function(K){if(!K)return this;if(B(K))return this.filter(function(tt,pt){return pt.dir&&K.test(tt)});var rt=this.root+K,X=O.call(this,rt),ct=this.clone();return ct.root=X.name,ct},remove:function(K){K=this.root+K;var rt=this.files[K];if(rt||(K.slice(-1)!=="/"&&(K+="/"),rt=this.files[K]),rt&&!rt.dir)delete this.files[K];else for(var X=this.filter(function(tt,pt){return pt.name.slice(0,K.length)===K}),ct=0;ct<X.length;ct++)delete this.files[X[ct].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(K){var rt,X={};try{if((X=d.extend(K||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:u.utf8encode})).type=X.type.toLowerCase(),X.compression=X.compression.toUpperCase(),X.type==="binarystring"&&(X.type="string"),!X.type)throw new Error("No output type specified.");d.checkSupport(X.type),X.platform!=="darwin"&&X.platform!=="freebsd"&&X.platform!=="linux"&&X.platform!=="sunos"||(X.platform="UNIX"),X.platform==="win32"&&(X.platform="DOS");var ct=X.comment||this.comment||"";rt=v.generateWorker(this,X,ct)}catch(tt){(rt=new m("error")).error(tt)}return new b(rt,X.type||"string",X.mimeType)},generateAsync:function(K,rt){return this.generateInternalStream(K).accumulate(rt)},generateNodeStream:function(K,rt){return(K=K||{}).type||(K.type="nodebuffer"),this.generateInternalStream(K).toNodejsStream(rt)}};s.exports=W},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,s,o){s.exports=n("stream")},{stream:void 0}],17:[function(n,s,o){var l=n("./DataReader");function u(d){l.call(this,d);for(var m=0;m<this.data.length;m++)d[m]=255&d[m]}n("../utils").inherits(u,l),u.prototype.byteAt=function(d){return this.data[this.zero+d]},u.prototype.lastIndexOfSignature=function(d){for(var m=d.charCodeAt(0),b=d.charCodeAt(1),_=d.charCodeAt(2),w=d.charCodeAt(3),C=this.length-4;0<=C;--C)if(this.data[C]===m&&this.data[C+1]===b&&this.data[C+2]===_&&this.data[C+3]===w)return C-this.zero;return-1},u.prototype.readAndCheckSignature=function(d){var m=d.charCodeAt(0),b=d.charCodeAt(1),_=d.charCodeAt(2),w=d.charCodeAt(3),C=this.readData(4);return m===C[0]&&b===C[1]&&_===C[2]&&w===C[3]},u.prototype.readData=function(d){if(this.checkOffset(d),d===0)return[];var m=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,m},s.exports=u},{"../utils":32,"./DataReader":18}],18:[function(n,s,o){var l=n("../utils");function u(d){this.data=d,this.length=d.length,this.index=0,this.zero=0}u.prototype={checkOffset:function(d){this.checkIndex(this.index+d)},checkIndex:function(d){if(this.length<this.zero+d||d<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+d+"). Corrupted zip ?")},setIndex:function(d){this.checkIndex(d),this.index=d},skip:function(d){this.setIndex(this.index+d)},byteAt:function(){},readInt:function(d){var m,b=0;for(this.checkOffset(d),m=this.index+d-1;m>=this.index;m--)b=(b<<8)+this.byteAt(m);return this.index+=d,b},readString:function(d){return l.transformTo("string",this.readData(d))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var d=this.readInt(4);return new Date(Date.UTC(1980+(d>>25&127),(d>>21&15)-1,d>>16&31,d>>11&31,d>>5&63,(31&d)<<1))}},s.exports=u},{"../utils":32}],19:[function(n,s,o){var l=n("./Uint8ArrayReader");function u(d){l.call(this,d)}n("../utils").inherits(u,l),u.prototype.readData=function(d){this.checkOffset(d);var m=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,m},s.exports=u},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,s,o){var l=n("./DataReader");function u(d){l.call(this,d)}n("../utils").inherits(u,l),u.prototype.byteAt=function(d){return this.data.charCodeAt(this.zero+d)},u.prototype.lastIndexOfSignature=function(d){return this.data.lastIndexOf(d)-this.zero},u.prototype.readAndCheckSignature=function(d){return d===this.readData(4)},u.prototype.readData=function(d){this.checkOffset(d);var m=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,m},s.exports=u},{"../utils":32,"./DataReader":18}],21:[function(n,s,o){var l=n("./ArrayReader");function u(d){l.call(this,d)}n("../utils").inherits(u,l),u.prototype.readData=function(d){if(this.checkOffset(d),d===0)return new Uint8Array(0);var m=this.data.subarray(this.zero+this.index,this.zero+this.index+d);return this.index+=d,m},s.exports=u},{"../utils":32,"./ArrayReader":17}],22:[function(n,s,o){var l=n("../utils"),u=n("../support"),d=n("./ArrayReader"),m=n("./StringReader"),b=n("./NodeBufferReader"),_=n("./Uint8ArrayReader");s.exports=function(w){var C=l.getTypeOf(w);return l.checkSupport(C),C!=="string"||u.uint8array?C==="nodebuffer"?new b(w):u.uint8array?new _(l.transformTo("uint8array",w)):new d(l.transformTo("array",w)):new m(w)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,s,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,s,o){var l=n("./GenericWorker"),u=n("../utils");function d(m){l.call(this,"ConvertWorker to "+m),this.destType=m}u.inherits(d,l),d.prototype.processChunk=function(m){this.push({data:u.transformTo(this.destType,m.data),meta:m.meta})},s.exports=d},{"../utils":32,"./GenericWorker":28}],25:[function(n,s,o){var l=n("./GenericWorker"),u=n("../crc32");function d(){l.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(d,l),d.prototype.processChunk=function(m){this.streamInfo.crc32=u(m.data,this.streamInfo.crc32||0),this.push(m)},s.exports=d},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,s,o){var l=n("../utils"),u=n("./GenericWorker");function d(m){u.call(this,"DataLengthProbe for "+m),this.propName=m,this.withStreamInfo(m,0)}l.inherits(d,u),d.prototype.processChunk=function(m){if(m){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+m.data.length}u.prototype.processChunk.call(this,m)},s.exports=d},{"../utils":32,"./GenericWorker":28}],27:[function(n,s,o){var l=n("../utils"),u=n("./GenericWorker");function d(m){u.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,m.then(function(_){b.dataIsReady=!0,b.data=_,b.max=_&&_.length||0,b.type=l.getTypeOf(_),b.isPaused||b._tickAndRepeat()},function(_){b.error(_)})}l.inherits(d,u),d.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this.data=null},d.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,l.delay(this._tickAndRepeat,[],this)),!0)},d.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(l.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},d.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var m=null,b=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":m=this.data.substring(this.index,b);break;case"uint8array":m=this.data.subarray(this.index,b);break;case"array":case"nodebuffer":m=this.data.slice(this.index,b)}return this.index=b,this.push({data:m,meta:{percent:this.max?this.index/this.max*100:0}})},s.exports=d},{"../utils":32,"./GenericWorker":28}],28:[function(n,s,o){function l(u){this.name=u||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}l.prototype={push:function(u){this.emit("data",u)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(u){this.emit("error",u)}return!0},error:function(u){return!this.isFinished&&(this.isPaused?this.generatedError=u:(this.isFinished=!0,this.emit("error",u),this.previous&&this.previous.error(u),this.cleanUp()),!0)},on:function(u,d){return this._listeners[u].push(d),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(u,d){if(this._listeners[u])for(var m=0;m<this._listeners[u].length;m++)this._listeners[u][m].call(this,d)},pipe:function(u){return u.registerPrevious(this)},registerPrevious:function(u){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=u.streamInfo,this.mergeStreamInfo(),this.previous=u;var d=this;return u.on("data",function(m){d.processChunk(m)}),u.on("end",function(){d.end()}),u.on("error",function(m){d.error(m)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var u=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),u=!0),this.previous&&this.previous.resume(),!u},flush:function(){},processChunk:function(u){this.push(u)},withStreamInfo:function(u,d){return this.extraStreamInfo[u]=d,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var u in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,u)&&(this.streamInfo[u]=this.extraStreamInfo[u])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var u="Worker "+this.name;return this.previous?this.previous+" -> "+u:u}},s.exports=l},{}],29:[function(n,s,o){var l=n("../utils"),u=n("./ConvertWorker"),d=n("./GenericWorker"),m=n("../base64"),b=n("../support"),_=n("../external"),w=null;if(b.nodestream)try{w=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function C(E,y){return new _.Promise(function(A,k){var O=[],B=E._internalType,W=E._outputType,K=E._mimeType;E.on("data",function(rt,X){O.push(rt),y&&y(X)}).on("error",function(rt){O=[],k(rt)}).on("end",function(){try{var rt=(function(X,ct,tt){switch(X){case"blob":return l.newBlob(l.transformTo("arraybuffer",ct),tt);case"base64":return m.encode(ct);default:return l.transformTo(X,ct)}})(W,(function(X,ct){var tt,pt=0,Pt=null,$=0;for(tt=0;tt<ct.length;tt++)$+=ct[tt].length;switch(X){case"string":return ct.join("");case"array":return Array.prototype.concat.apply([],ct);case"uint8array":for(Pt=new Uint8Array($),tt=0;tt<ct.length;tt++)Pt.set(ct[tt],pt),pt+=ct[tt].length;return Pt;case"nodebuffer":return Buffer.concat(ct);default:throw new Error("concat : unsupported type '"+X+"'")}})(B,O),K);A(rt)}catch(X){k(X)}O=[]}).resume()})}function v(E,y,A){var k=y;switch(y){case"blob":case"arraybuffer":k="uint8array";break;case"base64":k="string"}try{this._internalType=k,this._outputType=y,this._mimeType=A,l.checkSupport(k),this._worker=E.pipe(new u(k)),E.lock()}catch(O){this._worker=new d("error"),this._worker.error(O)}}v.prototype={accumulate:function(E){return C(this,E)},on:function(E,y){var A=this;return E==="data"?this._worker.on(E,function(k){y.call(A,k.data,k.meta)}):this._worker.on(E,function(){l.delay(y,arguments,A)}),this},resume:function(){return l.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(E){if(l.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new w(this,{objectMode:this._outputType!=="nodebuffer"},E)}},s.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,s,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var l=new ArrayBuffer(0);try{o.blob=new Blob([l],{type:"application/zip"}).size===0}catch{try{var u=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);u.append(l),o.blob=u.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!n("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(n,s,o){for(var l=n("./utils"),u=n("./support"),d=n("./nodejsUtils"),m=n("./stream/GenericWorker"),b=new Array(256),_=0;_<256;_++)b[_]=252<=_?6:248<=_?5:240<=_?4:224<=_?3:192<=_?2:1;b[254]=b[254]=1;function w(){m.call(this,"utf-8 decode"),this.leftOver=null}function C(){m.call(this,"utf-8 encode")}o.utf8encode=function(v){return u.nodebuffer?d.newBufferFrom(v,"utf-8"):(function(E){var y,A,k,O,B,W=E.length,K=0;for(O=0;O<W;O++)(64512&(A=E.charCodeAt(O)))==55296&&O+1<W&&(64512&(k=E.charCodeAt(O+1)))==56320&&(A=65536+(A-55296<<10)+(k-56320),O++),K+=A<128?1:A<2048?2:A<65536?3:4;for(y=u.uint8array?new Uint8Array(K):new Array(K),O=B=0;B<K;O++)(64512&(A=E.charCodeAt(O)))==55296&&O+1<W&&(64512&(k=E.charCodeAt(O+1)))==56320&&(A=65536+(A-55296<<10)+(k-56320),O++),A<128?y[B++]=A:(A<2048?y[B++]=192|A>>>6:(A<65536?y[B++]=224|A>>>12:(y[B++]=240|A>>>18,y[B++]=128|A>>>12&63),y[B++]=128|A>>>6&63),y[B++]=128|63&A);return y})(v)},o.utf8decode=function(v){return u.nodebuffer?l.transformTo("nodebuffer",v).toString("utf-8"):(function(E){var y,A,k,O,B=E.length,W=new Array(2*B);for(y=A=0;y<B;)if((k=E[y++])<128)W[A++]=k;else if(4<(O=b[k]))W[A++]=65533,y+=O-1;else{for(k&=O===2?31:O===3?15:7;1<O&&y<B;)k=k<<6|63&E[y++],O--;1<O?W[A++]=65533:k<65536?W[A++]=k:(k-=65536,W[A++]=55296|k>>10&1023,W[A++]=56320|1023&k)}return W.length!==A&&(W.subarray?W=W.subarray(0,A):W.length=A),l.applyFromCharCode(W)})(v=l.transformTo(u.uint8array?"uint8array":"array",v))},l.inherits(w,m),w.prototype.processChunk=function(v){var E=l.transformTo(u.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(u.uint8array){var y=E;(E=new Uint8Array(y.length+this.leftOver.length)).set(this.leftOver,0),E.set(y,this.leftOver.length)}else E=this.leftOver.concat(E);this.leftOver=null}var A=(function(O,B){var W;for((B=B||O.length)>O.length&&(B=O.length),W=B-1;0<=W&&(192&O[W])==128;)W--;return W<0||W===0?B:W+b[O[W]]>B?W:B})(E),k=E;A!==E.length&&(u.uint8array?(k=E.subarray(0,A),this.leftOver=E.subarray(A,E.length)):(k=E.slice(0,A),this.leftOver=E.slice(A,E.length))),this.push({data:o.utf8decode(k),meta:v.meta})},w.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=w,l.inherits(C,m),C.prototype.processChunk=function(v){this.push({data:o.utf8encode(v.data),meta:v.meta})},o.Utf8EncodeWorker=C},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,s,o){var l=n("./support"),u=n("./base64"),d=n("./nodejsUtils"),m=n("./external");function b(y){return y}function _(y,A){for(var k=0;k<y.length;++k)A[k]=255&y.charCodeAt(k);return A}n("setimmediate"),o.newBlob=function(y,A){o.checkSupport("blob");try{return new Blob([y],{type:A})}catch{try{var k=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return k.append(y),k.getBlob(A)}catch{throw new Error("Bug : can't construct the Blob.")}}};var w={stringifyByChunk:function(y,A,k){var O=[],B=0,W=y.length;if(W<=k)return String.fromCharCode.apply(null,y);for(;B<W;)A==="array"||A==="nodebuffer"?O.push(String.fromCharCode.apply(null,y.slice(B,Math.min(B+k,W)))):O.push(String.fromCharCode.apply(null,y.subarray(B,Math.min(B+k,W)))),B+=k;return O.join("")},stringifyByChar:function(y){for(var A="",k=0;k<y.length;k++)A+=String.fromCharCode(y[k]);return A},applyCanBeUsed:{uint8array:(function(){try{return l.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return l.nodebuffer&&String.fromCharCode.apply(null,d.allocBuffer(1)).length===1}catch{return!1}})()}};function C(y){var A=65536,k=o.getTypeOf(y),O=!0;if(k==="uint8array"?O=w.applyCanBeUsed.uint8array:k==="nodebuffer"&&(O=w.applyCanBeUsed.nodebuffer),O)for(;1<A;)try{return w.stringifyByChunk(y,k,A)}catch{A=Math.floor(A/2)}return w.stringifyByChar(y)}function v(y,A){for(var k=0;k<y.length;k++)A[k]=y[k];return A}o.applyFromCharCode=C;var E={};E.string={string:b,array:function(y){return _(y,new Array(y.length))},arraybuffer:function(y){return E.string.uint8array(y).buffer},uint8array:function(y){return _(y,new Uint8Array(y.length))},nodebuffer:function(y){return _(y,d.allocBuffer(y.length))}},E.array={string:C,array:b,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return d.newBufferFrom(y)}},E.arraybuffer={string:function(y){return C(new Uint8Array(y))},array:function(y){return v(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:b,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return d.newBufferFrom(new Uint8Array(y))}},E.uint8array={string:C,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:b,nodebuffer:function(y){return d.newBufferFrom(y)}},E.nodebuffer={string:C,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return E.nodebuffer.uint8array(y).buffer},uint8array:function(y){return v(y,new Uint8Array(y.length))},nodebuffer:b},o.transformTo=function(y,A){if(A=A||"",!y)return A;o.checkSupport(y);var k=o.getTypeOf(A);return E[k][y](A)},o.resolve=function(y){for(var A=y.split("/"),k=[],O=0;O<A.length;O++){var B=A[O];B==="."||B===""&&O!==0&&O!==A.length-1||(B===".."?k.pop():k.push(B))}return k.join("/")},o.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":l.nodebuffer&&d.isBuffer(y)?"nodebuffer":l.uint8array&&y instanceof Uint8Array?"uint8array":l.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(y){if(!l[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(y){var A,k,O="";for(k=0;k<(y||"").length;k++)O+="\\x"+((A=y.charCodeAt(k))<16?"0":"")+A.toString(16).toUpperCase();return O},o.delay=function(y,A,k){setImmediate(function(){y.apply(k||null,A||[])})},o.inherits=function(y,A){function k(){}k.prototype=A.prototype,y.prototype=new k},o.extend=function(){var y,A,k={};for(y=0;y<arguments.length;y++)for(A in arguments[y])Object.prototype.hasOwnProperty.call(arguments[y],A)&&k[A]===void 0&&(k[A]=arguments[y][A]);return k},o.prepareContent=function(y,A,k,O,B){return m.Promise.resolve(A).then(function(W){return l.blob&&(W instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(W))!==-1)&&typeof FileReader<"u"?new m.Promise(function(K,rt){var X=new FileReader;X.onload=function(ct){K(ct.target.result)},X.onerror=function(ct){rt(ct.target.error)},X.readAsArrayBuffer(W)}):W}).then(function(W){var K=o.getTypeOf(W);return K?(K==="arraybuffer"?W=o.transformTo("uint8array",W):K==="string"&&(B?W=u.decode(W):k&&O!==!0&&(W=(function(rt){return _(rt,l.uint8array?new Uint8Array(rt.length):new Array(rt.length))})(W))),W):m.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,s,o){var l=n("./reader/readerFor"),u=n("./utils"),d=n("./signature"),m=n("./zipEntry"),b=n("./support");function _(w){this.files=[],this.loadOptions=w}_.prototype={checkSignature:function(w){if(!this.reader.readAndCheckSignature(w)){this.reader.index-=4;var C=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+u.pretty(C)+", expected "+u.pretty(w)+")")}},isSignature:function(w,C){var v=this.reader.index;this.reader.setIndex(w);var E=this.reader.readString(4)===C;return this.reader.setIndex(v),E},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var w=this.reader.readData(this.zipCommentLength),C=b.uint8array?"uint8array":"array",v=u.transformTo(C,w);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var w,C,v,E=this.zip64EndOfCentralSize-44;0<E;)w=this.reader.readInt(2),C=this.reader.readInt(4),v=this.reader.readData(C),this.zip64ExtensibleData[w]={id:w,length:C,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var w,C;for(w=0;w<this.files.length;w++)C=this.files[w],this.reader.setIndex(C.localHeaderOffset),this.checkSignature(d.LOCAL_FILE_HEADER),C.readLocalPart(this.reader),C.handleUTF8(),C.processAttributes()},readCentralDir:function(){var w;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(d.CENTRAL_FILE_HEADER);)(w=new m({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(w);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var w=this.reader.lastIndexOfSignature(d.CENTRAL_DIRECTORY_END);if(w<0)throw this.isSignature(0,d.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(w);var C=w;if(this.checkSignature(d.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===u.MAX_VALUE_16BITS||this.diskWithCentralDirStart===u.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===u.MAX_VALUE_16BITS||this.centralDirRecords===u.MAX_VALUE_16BITS||this.centralDirSize===u.MAX_VALUE_32BITS||this.centralDirOffset===u.MAX_VALUE_32BITS){if(this.zip64=!0,(w=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(w),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,d.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var E=C-v;if(0<E)this.isSignature(C,d.CENTRAL_FILE_HEADER)||(this.reader.zero=E);else if(E<0)throw new Error("Corrupted zip: missing "+Math.abs(E)+" bytes.")},prepareReader:function(w){this.reader=l(w)},load:function(w){this.prepareReader(w),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},s.exports=_},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,s,o){var l=n("./reader/readerFor"),u=n("./utils"),d=n("./compressedObject"),m=n("./crc32"),b=n("./utf8"),_=n("./compressions"),w=n("./support");function C(v,E){this.options=v,this.loadOptions=E}C.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var E,y;if(v.skip(22),this.fileNameLength=v.readInt(2),y=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(y),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((E=(function(A){for(var k in _)if(Object.prototype.hasOwnProperty.call(_,k)&&_[k].magic===A)return _[k];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+u.pretty(this.compressionMethod)+" unknown (inner file : "+u.transformTo("string",this.fileName)+")");this.decompressed=new d(this.compressedSize,this.uncompressedSize,this.crc32,E,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var E=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(E),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=l(this.extraFields[1].value);this.uncompressedSize===u.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===u.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===u.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===u.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var E,y,A,k=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<k;)E=v.readInt(2),y=v.readInt(2),A=v.readData(y),this.extraFields[E]={id:E,length:y,value:A};v.setIndex(k)},handleUTF8:function(){var v=w.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=b.utf8decode(this.fileName),this.fileCommentStr=b.utf8decode(this.fileComment);else{var E=this.findExtraFieldUnicodePath();if(E!==null)this.fileNameStr=E;else{var y=u.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(y)}var A=this.findExtraFieldUnicodeComment();if(A!==null)this.fileCommentStr=A;else{var k=u.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(k)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var E=l(v.value);return E.readInt(1)!==1||m(this.fileName)!==E.readInt(4)?null:b.utf8decode(E.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var E=l(v.value);return E.readInt(1)!==1||m(this.fileComment)!==E.readInt(4)?null:b.utf8decode(E.readData(v.length-5))}return null}},s.exports=C},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,s,o){function l(E,y,A){this.name=E,this.dir=A.dir,this.date=A.date,this.comment=A.comment,this.unixPermissions=A.unixPermissions,this.dosPermissions=A.dosPermissions,this._data=y,this._dataBinary=A.binary,this.options={compression:A.compression,compressionOptions:A.compressionOptions}}var u=n("./stream/StreamHelper"),d=n("./stream/DataWorker"),m=n("./utf8"),b=n("./compressedObject"),_=n("./stream/GenericWorker");l.prototype={internalStream:function(E){var y=null,A="string";try{if(!E)throw new Error("No output type specified.");var k=(A=E.toLowerCase())==="string"||A==="text";A!=="binarystring"&&A!=="text"||(A="string"),y=this._decompressWorker();var O=!this._dataBinary;O&&!k&&(y=y.pipe(new m.Utf8EncodeWorker)),!O&&k&&(y=y.pipe(new m.Utf8DecodeWorker))}catch(B){(y=new _("error")).error(B)}return new u(y,A,"")},async:function(E,y){return this.internalStream(E).accumulate(y)},nodeStream:function(E,y){return this.internalStream(E||"nodebuffer").toNodejsStream(y)},_compressWorker:function(E,y){if(this._data instanceof b&&this._data.compression.magic===E.magic)return this._data.getCompressedWorker();var A=this._decompressWorker();return this._dataBinary||(A=A.pipe(new m.Utf8EncodeWorker)),b.createWorkerFrom(A,E,y)},_decompressWorker:function(){return this._data instanceof b?this._data.getContentWorker():this._data instanceof _?this._data:new d(this._data)}};for(var w=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],C=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<w.length;v++)l.prototype[w[v]]=C;s.exports=l},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,s,o){(function(l){var u,d,m=l.MutationObserver||l.WebKitMutationObserver;if(m){var b=0,_=new m(E),w=l.document.createTextNode("");_.observe(w,{characterData:!0}),u=function(){w.data=b=++b%2}}else if(l.setImmediate||l.MessageChannel===void 0)u="document"in l&&"onreadystatechange"in l.document.createElement("script")?function(){var y=l.document.createElement("script");y.onreadystatechange=function(){E(),y.onreadystatechange=null,y.parentNode.removeChild(y),y=null},l.document.documentElement.appendChild(y)}:function(){setTimeout(E,0)};else{var C=new l.MessageChannel;C.port1.onmessage=E,u=function(){C.port2.postMessage(0)}}var v=[];function E(){var y,A;d=!0;for(var k=v.length;k;){for(A=v,v=[],y=-1;++y<k;)A[y]();k=v.length}d=!1}s.exports=function(y){v.push(y)!==1||d||u()}}).call(this,typeof $e<"u"?$e:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,s,o){var l=n("immediate");function u(){}var d={},m=["REJECTED"],b=["FULFILLED"],_=["PENDING"];function w(k){if(typeof k!="function")throw new TypeError("resolver must be a function");this.state=_,this.queue=[],this.outcome=void 0,k!==u&&y(this,k)}function C(k,O,B){this.promise=k,typeof O=="function"&&(this.onFulfilled=O,this.callFulfilled=this.otherCallFulfilled),typeof B=="function"&&(this.onRejected=B,this.callRejected=this.otherCallRejected)}function v(k,O,B){l(function(){var W;try{W=O(B)}catch(K){return d.reject(k,K)}W===k?d.reject(k,new TypeError("Cannot resolve promise with itself")):d.resolve(k,W)})}function E(k){var O=k&&k.then;if(k&&(typeof k=="object"||typeof k=="function")&&typeof O=="function")return function(){O.apply(k,arguments)}}function y(k,O){var B=!1;function W(X){B||(B=!0,d.reject(k,X))}function K(X){B||(B=!0,d.resolve(k,X))}var rt=A(function(){O(K,W)});rt.status==="error"&&W(rt.value)}function A(k,O){var B={};try{B.value=k(O),B.status="success"}catch(W){B.status="error",B.value=W}return B}(s.exports=w).prototype.finally=function(k){if(typeof k!="function")return this;var O=this.constructor;return this.then(function(B){return O.resolve(k()).then(function(){return B})},function(B){return O.resolve(k()).then(function(){throw B})})},w.prototype.catch=function(k){return this.then(null,k)},w.prototype.then=function(k,O){if(typeof k!="function"&&this.state===b||typeof O!="function"&&this.state===m)return this;var B=new this.constructor(u);return this.state!==_?v(B,this.state===b?k:O,this.outcome):this.queue.push(new C(B,k,O)),B},C.prototype.callFulfilled=function(k){d.resolve(this.promise,k)},C.prototype.otherCallFulfilled=function(k){v(this.promise,this.onFulfilled,k)},C.prototype.callRejected=function(k){d.reject(this.promise,k)},C.prototype.otherCallRejected=function(k){v(this.promise,this.onRejected,k)},d.resolve=function(k,O){var B=A(E,O);if(B.status==="error")return d.reject(k,B.value);var W=B.value;if(W)y(k,W);else{k.state=b,k.outcome=O;for(var K=-1,rt=k.queue.length;++K<rt;)k.queue[K].callFulfilled(O)}return k},d.reject=function(k,O){k.state=m,k.outcome=O;for(var B=-1,W=k.queue.length;++B<W;)k.queue[B].callRejected(O);return k},w.resolve=function(k){return k instanceof this?k:d.resolve(new this(u),k)},w.reject=function(k){var O=new this(u);return d.reject(O,k)},w.all=function(k){var O=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=k.length,W=!1;if(!B)return this.resolve([]);for(var K=new Array(B),rt=0,X=-1,ct=new this(u);++X<B;)tt(k[X],X);return ct;function tt(pt,Pt){O.resolve(pt).then(function($){K[Pt]=$,++rt!==B||W||(W=!0,d.resolve(ct,K))},function($){W||(W=!0,d.reject(ct,$))})}},w.race=function(k){var O=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=k.length,W=!1;if(!B)return this.resolve([]);for(var K=-1,rt=new this(u);++K<B;)X=k[K],O.resolve(X).then(function(ct){W||(W=!0,d.resolve(rt,ct))},function(ct){W||(W=!0,d.reject(rt,ct))});var X;return rt}},{immediate:36}],38:[function(n,s,o){var l={};(0,n("./lib/utils/common").assign)(l,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),s.exports=l},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,s,o){var l=n("./zlib/deflate"),u=n("./utils/common"),d=n("./utils/strings"),m=n("./zlib/messages"),b=n("./zlib/zstream"),_=Object.prototype.toString,w=0,C=-1,v=0,E=8;function y(k){if(!(this instanceof y))return new y(k);this.options=u.assign({level:C,method:E,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},k||{});var O=this.options;O.raw&&0<O.windowBits?O.windowBits=-O.windowBits:O.gzip&&0<O.windowBits&&O.windowBits<16&&(O.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var B=l.deflateInit2(this.strm,O.level,O.method,O.windowBits,O.memLevel,O.strategy);if(B!==w)throw new Error(m[B]);if(O.header&&l.deflateSetHeader(this.strm,O.header),O.dictionary){var W;if(W=typeof O.dictionary=="string"?d.string2buf(O.dictionary):_.call(O.dictionary)==="[object ArrayBuffer]"?new Uint8Array(O.dictionary):O.dictionary,(B=l.deflateSetDictionary(this.strm,W))!==w)throw new Error(m[B]);this._dict_set=!0}}function A(k,O){var B=new y(O);if(B.push(k,!0),B.err)throw B.msg||m[B.err];return B.result}y.prototype.push=function(k,O){var B,W,K=this.strm,rt=this.options.chunkSize;if(this.ended)return!1;W=O===~~O?O:O===!0?4:0,typeof k=="string"?K.input=d.string2buf(k):_.call(k)==="[object ArrayBuffer]"?K.input=new Uint8Array(k):K.input=k,K.next_in=0,K.avail_in=K.input.length;do{if(K.avail_out===0&&(K.output=new u.Buf8(rt),K.next_out=0,K.avail_out=rt),(B=l.deflate(K,W))!==1&&B!==w)return this.onEnd(B),!(this.ended=!0);K.avail_out!==0&&(K.avail_in!==0||W!==4&&W!==2)||(this.options.to==="string"?this.onData(d.buf2binstring(u.shrinkBuf(K.output,K.next_out))):this.onData(u.shrinkBuf(K.output,K.next_out)))}while((0<K.avail_in||K.avail_out===0)&&B!==1);return W===4?(B=l.deflateEnd(this.strm),this.onEnd(B),this.ended=!0,B===w):W!==2||(this.onEnd(w),!(K.avail_out=0))},y.prototype.onData=function(k){this.chunks.push(k)},y.prototype.onEnd=function(k){k===w&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=u.flattenChunks(this.chunks)),this.chunks=[],this.err=k,this.msg=this.strm.msg},o.Deflate=y,o.deflate=A,o.deflateRaw=function(k,O){return(O=O||{}).raw=!0,A(k,O)},o.gzip=function(k,O){return(O=O||{}).gzip=!0,A(k,O)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,s,o){var l=n("./zlib/inflate"),u=n("./utils/common"),d=n("./utils/strings"),m=n("./zlib/constants"),b=n("./zlib/messages"),_=n("./zlib/zstream"),w=n("./zlib/gzheader"),C=Object.prototype.toString;function v(y){if(!(this instanceof v))return new v(y);this.options=u.assign({chunkSize:16384,windowBits:0,to:""},y||{});var A=this.options;A.raw&&0<=A.windowBits&&A.windowBits<16&&(A.windowBits=-A.windowBits,A.windowBits===0&&(A.windowBits=-15)),!(0<=A.windowBits&&A.windowBits<16)||y&&y.windowBits||(A.windowBits+=32),15<A.windowBits&&A.windowBits<48&&(15&A.windowBits)==0&&(A.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new _,this.strm.avail_out=0;var k=l.inflateInit2(this.strm,A.windowBits);if(k!==m.Z_OK)throw new Error(b[k]);this.header=new w,l.inflateGetHeader(this.strm,this.header)}function E(y,A){var k=new v(A);if(k.push(y,!0),k.err)throw k.msg||b[k.err];return k.result}v.prototype.push=function(y,A){var k,O,B,W,K,rt,X=this.strm,ct=this.options.chunkSize,tt=this.options.dictionary,pt=!1;if(this.ended)return!1;O=A===~~A?A:A===!0?m.Z_FINISH:m.Z_NO_FLUSH,typeof y=="string"?X.input=d.binstring2buf(y):C.call(y)==="[object ArrayBuffer]"?X.input=new Uint8Array(y):X.input=y,X.next_in=0,X.avail_in=X.input.length;do{if(X.avail_out===0&&(X.output=new u.Buf8(ct),X.next_out=0,X.avail_out=ct),(k=l.inflate(X,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&tt&&(rt=typeof tt=="string"?d.string2buf(tt):C.call(tt)==="[object ArrayBuffer]"?new Uint8Array(tt):tt,k=l.inflateSetDictionary(this.strm,rt)),k===m.Z_BUF_ERROR&&pt===!0&&(k=m.Z_OK,pt=!1),k!==m.Z_STREAM_END&&k!==m.Z_OK)return this.onEnd(k),!(this.ended=!0);X.next_out&&(X.avail_out!==0&&k!==m.Z_STREAM_END&&(X.avail_in!==0||O!==m.Z_FINISH&&O!==m.Z_SYNC_FLUSH)||(this.options.to==="string"?(B=d.utf8border(X.output,X.next_out),W=X.next_out-B,K=d.buf2string(X.output,B),X.next_out=W,X.avail_out=ct-W,W&&u.arraySet(X.output,X.output,B,W,0),this.onData(K)):this.onData(u.shrinkBuf(X.output,X.next_out)))),X.avail_in===0&&X.avail_out===0&&(pt=!0)}while((0<X.avail_in||X.avail_out===0)&&k!==m.Z_STREAM_END);return k===m.Z_STREAM_END&&(O=m.Z_FINISH),O===m.Z_FINISH?(k=l.inflateEnd(this.strm),this.onEnd(k),this.ended=!0,k===m.Z_OK):O!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(X.avail_out=0))},v.prototype.onData=function(y){this.chunks.push(y)},v.prototype.onEnd=function(y){y===m.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=u.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},o.Inflate=v,o.inflate=E,o.inflateRaw=function(y,A){return(A=A||{}).raw=!0,E(y,A)},o.ungzip=E},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,s,o){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(m){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var _=b.shift();if(_){if(typeof _!="object")throw new TypeError(_+"must be non-object");for(var w in _)_.hasOwnProperty(w)&&(m[w]=_[w])}}return m},o.shrinkBuf=function(m,b){return m.length===b?m:m.subarray?m.subarray(0,b):(m.length=b,m)};var u={arraySet:function(m,b,_,w,C){if(b.subarray&&m.subarray)m.set(b.subarray(_,_+w),C);else for(var v=0;v<w;v++)m[C+v]=b[_+v]},flattenChunks:function(m){var b,_,w,C,v,E;for(b=w=0,_=m.length;b<_;b++)w+=m[b].length;for(E=new Uint8Array(w),b=C=0,_=m.length;b<_;b++)v=m[b],E.set(v,C),C+=v.length;return E}},d={arraySet:function(m,b,_,w,C){for(var v=0;v<w;v++)m[C+v]=b[_+v]},flattenChunks:function(m){return[].concat.apply([],m)}};o.setTyped=function(m){m?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,u)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,d))},o.setTyped(l)},{}],42:[function(n,s,o){var l=n("./common"),u=!0,d=!0;try{String.fromCharCode.apply(null,[0])}catch{u=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{d=!1}for(var m=new l.Buf8(256),b=0;b<256;b++)m[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;function _(w,C){if(C<65537&&(w.subarray&&d||!w.subarray&&u))return String.fromCharCode.apply(null,l.shrinkBuf(w,C));for(var v="",E=0;E<C;E++)v+=String.fromCharCode(w[E]);return v}m[254]=m[254]=1,o.string2buf=function(w){var C,v,E,y,A,k=w.length,O=0;for(y=0;y<k;y++)(64512&(v=w.charCodeAt(y)))==55296&&y+1<k&&(64512&(E=w.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(E-56320),y++),O+=v<128?1:v<2048?2:v<65536?3:4;for(C=new l.Buf8(O),y=A=0;A<O;y++)(64512&(v=w.charCodeAt(y)))==55296&&y+1<k&&(64512&(E=w.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(E-56320),y++),v<128?C[A++]=v:(v<2048?C[A++]=192|v>>>6:(v<65536?C[A++]=224|v>>>12:(C[A++]=240|v>>>18,C[A++]=128|v>>>12&63),C[A++]=128|v>>>6&63),C[A++]=128|63&v);return C},o.buf2binstring=function(w){return _(w,w.length)},o.binstring2buf=function(w){for(var C=new l.Buf8(w.length),v=0,E=C.length;v<E;v++)C[v]=w.charCodeAt(v);return C},o.buf2string=function(w,C){var v,E,y,A,k=C||w.length,O=new Array(2*k);for(v=E=0;v<k;)if((y=w[v++])<128)O[E++]=y;else if(4<(A=m[y]))O[E++]=65533,v+=A-1;else{for(y&=A===2?31:A===3?15:7;1<A&&v<k;)y=y<<6|63&w[v++],A--;1<A?O[E++]=65533:y<65536?O[E++]=y:(y-=65536,O[E++]=55296|y>>10&1023,O[E++]=56320|1023&y)}return _(O,E)},o.utf8border=function(w,C){var v;for((C=C||w.length)>w.length&&(C=w.length),v=C-1;0<=v&&(192&w[v])==128;)v--;return v<0||v===0?C:v+m[w[v]]>C?v:C}},{"./common":41}],43:[function(n,s,o){s.exports=function(l,u,d,m){for(var b=65535&l|0,_=l>>>16&65535|0,w=0;d!==0;){for(d-=w=2e3<d?2e3:d;_=_+(b=b+u[m++]|0)|0,--w;);b%=65521,_%=65521}return b|_<<16|0}},{}],44:[function(n,s,o){s.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,s,o){var l=(function(){for(var u,d=[],m=0;m<256;m++){u=m;for(var b=0;b<8;b++)u=1&u?3988292384^u>>>1:u>>>1;d[m]=u}return d})();s.exports=function(u,d,m,b){var _=l,w=b+m;u^=-1;for(var C=b;C<w;C++)u=u>>>8^_[255&(u^d[C])];return-1^u}},{}],46:[function(n,s,o){var l,u=n("../utils/common"),d=n("./trees"),m=n("./adler32"),b=n("./crc32"),_=n("./messages"),w=0,C=4,v=0,E=-2,y=-1,A=4,k=2,O=8,B=9,W=286,K=30,rt=19,X=2*W+1,ct=15,tt=3,pt=258,Pt=pt+tt+1,$=42,Q=113,g=1,it=2,Ot=3,lt=4;function Rt(f,et){return f.msg=_[et],et}function ot(f){return(f<<1)-(4<f?9:0)}function Tt(f){for(var et=f.length;0<=--et;)f[et]=0}function Y(f){var et=f.state,G=et.pending;G>f.avail_out&&(G=f.avail_out),G!==0&&(u.arraySet(f.output,et.pending_buf,et.pending_out,G,f.next_out),f.next_out+=G,et.pending_out+=G,f.total_out+=G,f.avail_out-=G,et.pending-=G,et.pending===0&&(et.pending_out=0))}function V(f,et){d._tr_flush_block(f,0<=f.block_start?f.block_start:-1,f.strstart-f.block_start,et),f.block_start=f.strstart,Y(f.strm)}function At(f,et){f.pending_buf[f.pending++]=et}function xt(f,et){f.pending_buf[f.pending++]=et>>>8&255,f.pending_buf[f.pending++]=255&et}function vt(f,et){var G,T,S=f.max_chain_length,U=f.strstart,st=f.prev_length,at=f.nice_match,H=f.strstart>f.w_size-Pt?f.strstart-(f.w_size-Pt):0,ut=f.window,kt=f.w_mask,ht=f.prev,Et=f.strstart+pt,Lt=ut[U+st-1],Bt=ut[U+st];f.prev_length>=f.good_match&&(S>>=2),at>f.lookahead&&(at=f.lookahead);do if(ut[(G=et)+st]===Bt&&ut[G+st-1]===Lt&&ut[G]===ut[U]&&ut[++G]===ut[U+1]){U+=2,G++;do;while(ut[++U]===ut[++G]&&ut[++U]===ut[++G]&&ut[++U]===ut[++G]&&ut[++U]===ut[++G]&&ut[++U]===ut[++G]&&ut[++U]===ut[++G]&&ut[++U]===ut[++G]&&ut[++U]===ut[++G]&&U<Et);if(T=pt-(Et-U),U=Et-pt,st<T){if(f.match_start=et,at<=(st=T))break;Lt=ut[U+st-1],Bt=ut[U+st]}}while((et=ht[et&kt])>H&&--S!=0);return st<=f.lookahead?st:f.lookahead}function qt(f){var et,G,T,S,U,st,at,H,ut,kt,ht=f.w_size;do{if(S=f.window_size-f.lookahead-f.strstart,f.strstart>=ht+(ht-Pt)){for(u.arraySet(f.window,f.window,ht,ht,0),f.match_start-=ht,f.strstart-=ht,f.block_start-=ht,et=G=f.hash_size;T=f.head[--et],f.head[et]=ht<=T?T-ht:0,--G;);for(et=G=ht;T=f.prev[--et],f.prev[et]=ht<=T?T-ht:0,--G;);S+=ht}if(f.strm.avail_in===0)break;if(st=f.strm,at=f.window,H=f.strstart+f.lookahead,ut=S,kt=void 0,kt=st.avail_in,ut<kt&&(kt=ut),G=kt===0?0:(st.avail_in-=kt,u.arraySet(at,st.input,st.next_in,kt,H),st.state.wrap===1?st.adler=m(st.adler,at,kt,H):st.state.wrap===2&&(st.adler=b(st.adler,at,kt,H)),st.next_in+=kt,st.total_in+=kt,kt),f.lookahead+=G,f.lookahead+f.insert>=tt)for(U=f.strstart-f.insert,f.ins_h=f.window[U],f.ins_h=(f.ins_h<<f.hash_shift^f.window[U+1])&f.hash_mask;f.insert&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[U+tt-1])&f.hash_mask,f.prev[U&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=U,U++,f.insert--,!(f.lookahead+f.insert<tt)););}while(f.lookahead<Pt&&f.strm.avail_in!==0)}function ne(f,et){for(var G,T;;){if(f.lookahead<Pt){if(qt(f),f.lookahead<Pt&&et===w)return g;if(f.lookahead===0)break}if(G=0,f.lookahead>=tt&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+tt-1])&f.hash_mask,G=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),G!==0&&f.strstart-G<=f.w_size-Pt&&(f.match_length=vt(f,G)),f.match_length>=tt)if(T=d._tr_tally(f,f.strstart-f.match_start,f.match_length-tt),f.lookahead-=f.match_length,f.match_length<=f.max_lazy_match&&f.lookahead>=tt){for(f.match_length--;f.strstart++,f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+tt-1])&f.hash_mask,G=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart,--f.match_length!=0;);f.strstart++}else f.strstart+=f.match_length,f.match_length=0,f.ins_h=f.window[f.strstart],f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+1])&f.hash_mask;else T=d._tr_tally(f,0,f.window[f.strstart]),f.lookahead--,f.strstart++;if(T&&(V(f,!1),f.strm.avail_out===0))return g}return f.insert=f.strstart<tt-1?f.strstart:tt-1,et===C?(V(f,!0),f.strm.avail_out===0?Ot:lt):f.last_lit&&(V(f,!1),f.strm.avail_out===0)?g:it}function jt(f,et){for(var G,T,S;;){if(f.lookahead<Pt){if(qt(f),f.lookahead<Pt&&et===w)return g;if(f.lookahead===0)break}if(G=0,f.lookahead>=tt&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+tt-1])&f.hash_mask,G=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),f.prev_length=f.match_length,f.prev_match=f.match_start,f.match_length=tt-1,G!==0&&f.prev_length<f.max_lazy_match&&f.strstart-G<=f.w_size-Pt&&(f.match_length=vt(f,G),f.match_length<=5&&(f.strategy===1||f.match_length===tt&&4096<f.strstart-f.match_start)&&(f.match_length=tt-1)),f.prev_length>=tt&&f.match_length<=f.prev_length){for(S=f.strstart+f.lookahead-tt,T=d._tr_tally(f,f.strstart-1-f.prev_match,f.prev_length-tt),f.lookahead-=f.prev_length-1,f.prev_length-=2;++f.strstart<=S&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+tt-1])&f.hash_mask,G=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),--f.prev_length!=0;);if(f.match_available=0,f.match_length=tt-1,f.strstart++,T&&(V(f,!1),f.strm.avail_out===0))return g}else if(f.match_available){if((T=d._tr_tally(f,0,f.window[f.strstart-1]))&&V(f,!1),f.strstart++,f.lookahead--,f.strm.avail_out===0)return g}else f.match_available=1,f.strstart++,f.lookahead--}return f.match_available&&(T=d._tr_tally(f,0,f.window[f.strstart-1]),f.match_available=0),f.insert=f.strstart<tt-1?f.strstart:tt-1,et===C?(V(f,!0),f.strm.avail_out===0?Ot:lt):f.last_lit&&(V(f,!1),f.strm.avail_out===0)?g:it}function mt(f,et,G,T,S){this.good_length=f,this.max_lazy=et,this.nice_length=G,this.max_chain=T,this.func=S}function te(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=O,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new u.Buf16(2*X),this.dyn_dtree=new u.Buf16(2*(2*K+1)),this.bl_tree=new u.Buf16(2*(2*rt+1)),Tt(this.dyn_ltree),Tt(this.dyn_dtree),Tt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new u.Buf16(ct+1),this.heap=new u.Buf16(2*W+1),Tt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new u.Buf16(2*W+1),Tt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Wt(f){var et;return f&&f.state?(f.total_in=f.total_out=0,f.data_type=k,(et=f.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?$:Q,f.adler=et.wrap===2?0:1,et.last_flush=w,d._tr_init(et),v):Rt(f,E)}function zt(f){var et=Wt(f);return et===v&&(function(G){G.window_size=2*G.w_size,Tt(G.head),G.max_lazy_match=l[G.level].max_lazy,G.good_match=l[G.level].good_length,G.nice_match=l[G.level].nice_length,G.max_chain_length=l[G.level].max_chain,G.strstart=0,G.block_start=0,G.lookahead=0,G.insert=0,G.match_length=G.prev_length=tt-1,G.match_available=0,G.ins_h=0})(f.state),et}function ce(f,et,G,T,S,U){if(!f)return E;var st=1;if(et===y&&(et=6),T<0?(st=0,T=-T):15<T&&(st=2,T-=16),S<1||B<S||G!==O||T<8||15<T||et<0||9<et||U<0||A<U)return Rt(f,E);T===8&&(T=9);var at=new te;return(f.state=at).strm=f,at.wrap=st,at.gzhead=null,at.w_bits=T,at.w_size=1<<at.w_bits,at.w_mask=at.w_size-1,at.hash_bits=S+7,at.hash_size=1<<at.hash_bits,at.hash_mask=at.hash_size-1,at.hash_shift=~~((at.hash_bits+tt-1)/tt),at.window=new u.Buf8(2*at.w_size),at.head=new u.Buf16(at.hash_size),at.prev=new u.Buf16(at.w_size),at.lit_bufsize=1<<S+6,at.pending_buf_size=4*at.lit_bufsize,at.pending_buf=new u.Buf8(at.pending_buf_size),at.d_buf=1*at.lit_bufsize,at.l_buf=3*at.lit_bufsize,at.level=et,at.strategy=U,at.method=G,zt(f)}l=[new mt(0,0,0,0,function(f,et){var G=65535;for(G>f.pending_buf_size-5&&(G=f.pending_buf_size-5);;){if(f.lookahead<=1){if(qt(f),f.lookahead===0&&et===w)return g;if(f.lookahead===0)break}f.strstart+=f.lookahead,f.lookahead=0;var T=f.block_start+G;if((f.strstart===0||f.strstart>=T)&&(f.lookahead=f.strstart-T,f.strstart=T,V(f,!1),f.strm.avail_out===0)||f.strstart-f.block_start>=f.w_size-Pt&&(V(f,!1),f.strm.avail_out===0))return g}return f.insert=0,et===C?(V(f,!0),f.strm.avail_out===0?Ot:lt):(f.strstart>f.block_start&&(V(f,!1),f.strm.avail_out),g)}),new mt(4,4,8,4,ne),new mt(4,5,16,8,ne),new mt(4,6,32,32,ne),new mt(4,4,16,16,jt),new mt(8,16,32,32,jt),new mt(8,16,128,128,jt),new mt(8,32,128,256,jt),new mt(32,128,258,1024,jt),new mt(32,258,258,4096,jt)],o.deflateInit=function(f,et){return ce(f,et,O,15,8,0)},o.deflateInit2=ce,o.deflateReset=zt,o.deflateResetKeep=Wt,o.deflateSetHeader=function(f,et){return f&&f.state?f.state.wrap!==2?E:(f.state.gzhead=et,v):E},o.deflate=function(f,et){var G,T,S,U;if(!f||!f.state||5<et||et<0)return f?Rt(f,E):E;if(T=f.state,!f.output||!f.input&&f.avail_in!==0||T.status===666&&et!==C)return Rt(f,f.avail_out===0?-5:E);if(T.strm=f,G=T.last_flush,T.last_flush=et,T.status===$)if(T.wrap===2)f.adler=0,At(T,31),At(T,139),At(T,8),T.gzhead?(At(T,(T.gzhead.text?1:0)+(T.gzhead.hcrc?2:0)+(T.gzhead.extra?4:0)+(T.gzhead.name?8:0)+(T.gzhead.comment?16:0)),At(T,255&T.gzhead.time),At(T,T.gzhead.time>>8&255),At(T,T.gzhead.time>>16&255),At(T,T.gzhead.time>>24&255),At(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),At(T,255&T.gzhead.os),T.gzhead.extra&&T.gzhead.extra.length&&(At(T,255&T.gzhead.extra.length),At(T,T.gzhead.extra.length>>8&255)),T.gzhead.hcrc&&(f.adler=b(f.adler,T.pending_buf,T.pending,0)),T.gzindex=0,T.status=69):(At(T,0),At(T,0),At(T,0),At(T,0),At(T,0),At(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),At(T,3),T.status=Q);else{var st=O+(T.w_bits-8<<4)<<8;st|=(2<=T.strategy||T.level<2?0:T.level<6?1:T.level===6?2:3)<<6,T.strstart!==0&&(st|=32),st+=31-st%31,T.status=Q,xt(T,st),T.strstart!==0&&(xt(T,f.adler>>>16),xt(T,65535&f.adler)),f.adler=1}if(T.status===69)if(T.gzhead.extra){for(S=T.pending;T.gzindex<(65535&T.gzhead.extra.length)&&(T.pending!==T.pending_buf_size||(T.gzhead.hcrc&&T.pending>S&&(f.adler=b(f.adler,T.pending_buf,T.pending-S,S)),Y(f),S=T.pending,T.pending!==T.pending_buf_size));)At(T,255&T.gzhead.extra[T.gzindex]),T.gzindex++;T.gzhead.hcrc&&T.pending>S&&(f.adler=b(f.adler,T.pending_buf,T.pending-S,S)),T.gzindex===T.gzhead.extra.length&&(T.gzindex=0,T.status=73)}else T.status=73;if(T.status===73)if(T.gzhead.name){S=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>S&&(f.adler=b(f.adler,T.pending_buf,T.pending-S,S)),Y(f),S=T.pending,T.pending===T.pending_buf_size)){U=1;break}U=T.gzindex<T.gzhead.name.length?255&T.gzhead.name.charCodeAt(T.gzindex++):0,At(T,U)}while(U!==0);T.gzhead.hcrc&&T.pending>S&&(f.adler=b(f.adler,T.pending_buf,T.pending-S,S)),U===0&&(T.gzindex=0,T.status=91)}else T.status=91;if(T.status===91)if(T.gzhead.comment){S=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>S&&(f.adler=b(f.adler,T.pending_buf,T.pending-S,S)),Y(f),S=T.pending,T.pending===T.pending_buf_size)){U=1;break}U=T.gzindex<T.gzhead.comment.length?255&T.gzhead.comment.charCodeAt(T.gzindex++):0,At(T,U)}while(U!==0);T.gzhead.hcrc&&T.pending>S&&(f.adler=b(f.adler,T.pending_buf,T.pending-S,S)),U===0&&(T.status=103)}else T.status=103;if(T.status===103&&(T.gzhead.hcrc?(T.pending+2>T.pending_buf_size&&Y(f),T.pending+2<=T.pending_buf_size&&(At(T,255&f.adler),At(T,f.adler>>8&255),f.adler=0,T.status=Q)):T.status=Q),T.pending!==0){if(Y(f),f.avail_out===0)return T.last_flush=-1,v}else if(f.avail_in===0&&ot(et)<=ot(G)&&et!==C)return Rt(f,-5);if(T.status===666&&f.avail_in!==0)return Rt(f,-5);if(f.avail_in!==0||T.lookahead!==0||et!==w&&T.status!==666){var at=T.strategy===2?(function(H,ut){for(var kt;;){if(H.lookahead===0&&(qt(H),H.lookahead===0)){if(ut===w)return g;break}if(H.match_length=0,kt=d._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++,kt&&(V(H,!1),H.strm.avail_out===0))return g}return H.insert=0,ut===C?(V(H,!0),H.strm.avail_out===0?Ot:lt):H.last_lit&&(V(H,!1),H.strm.avail_out===0)?g:it})(T,et):T.strategy===3?(function(H,ut){for(var kt,ht,Et,Lt,Bt=H.window;;){if(H.lookahead<=pt){if(qt(H),H.lookahead<=pt&&ut===w)return g;if(H.lookahead===0)break}if(H.match_length=0,H.lookahead>=tt&&0<H.strstart&&(ht=Bt[Et=H.strstart-1])===Bt[++Et]&&ht===Bt[++Et]&&ht===Bt[++Et]){Lt=H.strstart+pt;do;while(ht===Bt[++Et]&&ht===Bt[++Et]&&ht===Bt[++Et]&&ht===Bt[++Et]&&ht===Bt[++Et]&&ht===Bt[++Et]&&ht===Bt[++Et]&&ht===Bt[++Et]&&Et<Lt);H.match_length=pt-(Lt-Et),H.match_length>H.lookahead&&(H.match_length=H.lookahead)}if(H.match_length>=tt?(kt=d._tr_tally(H,1,H.match_length-tt),H.lookahead-=H.match_length,H.strstart+=H.match_length,H.match_length=0):(kt=d._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++),kt&&(V(H,!1),H.strm.avail_out===0))return g}return H.insert=0,ut===C?(V(H,!0),H.strm.avail_out===0?Ot:lt):H.last_lit&&(V(H,!1),H.strm.avail_out===0)?g:it})(T,et):l[T.level].func(T,et);if(at!==Ot&&at!==lt||(T.status=666),at===g||at===Ot)return f.avail_out===0&&(T.last_flush=-1),v;if(at===it&&(et===1?d._tr_align(T):et!==5&&(d._tr_stored_block(T,0,0,!1),et===3&&(Tt(T.head),T.lookahead===0&&(T.strstart=0,T.block_start=0,T.insert=0))),Y(f),f.avail_out===0))return T.last_flush=-1,v}return et!==C?v:T.wrap<=0?1:(T.wrap===2?(At(T,255&f.adler),At(T,f.adler>>8&255),At(T,f.adler>>16&255),At(T,f.adler>>24&255),At(T,255&f.total_in),At(T,f.total_in>>8&255),At(T,f.total_in>>16&255),At(T,f.total_in>>24&255)):(xt(T,f.adler>>>16),xt(T,65535&f.adler)),Y(f),0<T.wrap&&(T.wrap=-T.wrap),T.pending!==0?v:1)},o.deflateEnd=function(f){var et;return f&&f.state?(et=f.state.status)!==$&&et!==69&&et!==73&&et!==91&&et!==103&&et!==Q&&et!==666?Rt(f,E):(f.state=null,et===Q?Rt(f,-3):v):E},o.deflateSetDictionary=function(f,et){var G,T,S,U,st,at,H,ut,kt=et.length;if(!f||!f.state||(U=(G=f.state).wrap)===2||U===1&&G.status!==$||G.lookahead)return E;for(U===1&&(f.adler=m(f.adler,et,kt,0)),G.wrap=0,kt>=G.w_size&&(U===0&&(Tt(G.head),G.strstart=0,G.block_start=0,G.insert=0),ut=new u.Buf8(G.w_size),u.arraySet(ut,et,kt-G.w_size,G.w_size,0),et=ut,kt=G.w_size),st=f.avail_in,at=f.next_in,H=f.input,f.avail_in=kt,f.next_in=0,f.input=et,qt(G);G.lookahead>=tt;){for(T=G.strstart,S=G.lookahead-(tt-1);G.ins_h=(G.ins_h<<G.hash_shift^G.window[T+tt-1])&G.hash_mask,G.prev[T&G.w_mask]=G.head[G.ins_h],G.head[G.ins_h]=T,T++,--S;);G.strstart=T,G.lookahead=tt-1,qt(G)}return G.strstart+=G.lookahead,G.block_start=G.strstart,G.insert=G.lookahead,G.lookahead=0,G.match_length=G.prev_length=tt-1,G.match_available=0,f.next_in=at,f.input=H,f.avail_in=st,G.wrap=U,v},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,s,o){s.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,s,o){s.exports=function(l,u){var d,m,b,_,w,C,v,E,y,A,k,O,B,W,K,rt,X,ct,tt,pt,Pt,$,Q,g,it;d=l.state,m=l.next_in,g=l.input,b=m+(l.avail_in-5),_=l.next_out,it=l.output,w=_-(u-l.avail_out),C=_+(l.avail_out-257),v=d.dmax,E=d.wsize,y=d.whave,A=d.wnext,k=d.window,O=d.hold,B=d.bits,W=d.lencode,K=d.distcode,rt=(1<<d.lenbits)-1,X=(1<<d.distbits)-1;t:do{B<15&&(O+=g[m++]<<B,B+=8,O+=g[m++]<<B,B+=8),ct=W[O&rt];e:for(;;){if(O>>>=tt=ct>>>24,B-=tt,(tt=ct>>>16&255)===0)it[_++]=65535&ct;else{if(!(16&tt)){if((64&tt)==0){ct=W[(65535&ct)+(O&(1<<tt)-1)];continue e}if(32&tt){d.mode=12;break t}l.msg="invalid literal/length code",d.mode=30;break t}pt=65535&ct,(tt&=15)&&(B<tt&&(O+=g[m++]<<B,B+=8),pt+=O&(1<<tt)-1,O>>>=tt,B-=tt),B<15&&(O+=g[m++]<<B,B+=8,O+=g[m++]<<B,B+=8),ct=K[O&X];r:for(;;){if(O>>>=tt=ct>>>24,B-=tt,!(16&(tt=ct>>>16&255))){if((64&tt)==0){ct=K[(65535&ct)+(O&(1<<tt)-1)];continue r}l.msg="invalid distance code",d.mode=30;break t}if(Pt=65535&ct,B<(tt&=15)&&(O+=g[m++]<<B,(B+=8)<tt&&(O+=g[m++]<<B,B+=8)),v<(Pt+=O&(1<<tt)-1)){l.msg="invalid distance too far back",d.mode=30;break t}if(O>>>=tt,B-=tt,(tt=_-w)<Pt){if(y<(tt=Pt-tt)&&d.sane){l.msg="invalid distance too far back",d.mode=30;break t}if(Q=k,($=0)===A){if($+=E-tt,tt<pt){for(pt-=tt;it[_++]=k[$++],--tt;);$=_-Pt,Q=it}}else if(A<tt){if($+=E+A-tt,(tt-=A)<pt){for(pt-=tt;it[_++]=k[$++],--tt;);if($=0,A<pt){for(pt-=tt=A;it[_++]=k[$++],--tt;);$=_-Pt,Q=it}}}else if($+=A-tt,tt<pt){for(pt-=tt;it[_++]=k[$++],--tt;);$=_-Pt,Q=it}for(;2<pt;)it[_++]=Q[$++],it[_++]=Q[$++],it[_++]=Q[$++],pt-=3;pt&&(it[_++]=Q[$++],1<pt&&(it[_++]=Q[$++]))}else{for($=_-Pt;it[_++]=it[$++],it[_++]=it[$++],it[_++]=it[$++],2<(pt-=3););pt&&(it[_++]=it[$++],1<pt&&(it[_++]=it[$++]))}break}}break}}while(m<b&&_<C);m-=pt=B>>3,O&=(1<<(B-=pt<<3))-1,l.next_in=m,l.next_out=_,l.avail_in=m<b?b-m+5:5-(m-b),l.avail_out=_<C?C-_+257:257-(_-C),d.hold=O,d.bits=B}},{}],49:[function(n,s,o){var l=n("../utils/common"),u=n("./adler32"),d=n("./crc32"),m=n("./inffast"),b=n("./inftrees"),_=1,w=2,C=0,v=-2,E=1,y=852,A=592;function k($){return($>>>24&255)+($>>>8&65280)+((65280&$)<<8)+((255&$)<<24)}function O(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new l.Buf16(320),this.work=new l.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function B($){var Q;return $&&$.state?(Q=$.state,$.total_in=$.total_out=Q.total=0,$.msg="",Q.wrap&&($.adler=1&Q.wrap),Q.mode=E,Q.last=0,Q.havedict=0,Q.dmax=32768,Q.head=null,Q.hold=0,Q.bits=0,Q.lencode=Q.lendyn=new l.Buf32(y),Q.distcode=Q.distdyn=new l.Buf32(A),Q.sane=1,Q.back=-1,C):v}function W($){var Q;return $&&$.state?((Q=$.state).wsize=0,Q.whave=0,Q.wnext=0,B($)):v}function K($,Q){var g,it;return $&&$.state?(it=$.state,Q<0?(g=0,Q=-Q):(g=1+(Q>>4),Q<48&&(Q&=15)),Q&&(Q<8||15<Q)?v:(it.window!==null&&it.wbits!==Q&&(it.window=null),it.wrap=g,it.wbits=Q,W($))):v}function rt($,Q){var g,it;return $?(it=new O,($.state=it).window=null,(g=K($,Q))!==C&&($.state=null),g):v}var X,ct,tt=!0;function pt($){if(tt){var Q;for(X=new l.Buf32(512),ct=new l.Buf32(32),Q=0;Q<144;)$.lens[Q++]=8;for(;Q<256;)$.lens[Q++]=9;for(;Q<280;)$.lens[Q++]=7;for(;Q<288;)$.lens[Q++]=8;for(b(_,$.lens,0,288,X,0,$.work,{bits:9}),Q=0;Q<32;)$.lens[Q++]=5;b(w,$.lens,0,32,ct,0,$.work,{bits:5}),tt=!1}$.lencode=X,$.lenbits=9,$.distcode=ct,$.distbits=5}function Pt($,Q,g,it){var Ot,lt=$.state;return lt.window===null&&(lt.wsize=1<<lt.wbits,lt.wnext=0,lt.whave=0,lt.window=new l.Buf8(lt.wsize)),it>=lt.wsize?(l.arraySet(lt.window,Q,g-lt.wsize,lt.wsize,0),lt.wnext=0,lt.whave=lt.wsize):(it<(Ot=lt.wsize-lt.wnext)&&(Ot=it),l.arraySet(lt.window,Q,g-it,Ot,lt.wnext),(it-=Ot)?(l.arraySet(lt.window,Q,g-it,it,0),lt.wnext=it,lt.whave=lt.wsize):(lt.wnext+=Ot,lt.wnext===lt.wsize&&(lt.wnext=0),lt.whave<lt.wsize&&(lt.whave+=Ot))),0}o.inflateReset=W,o.inflateReset2=K,o.inflateResetKeep=B,o.inflateInit=function($){return rt($,15)},o.inflateInit2=rt,o.inflate=function($,Q){var g,it,Ot,lt,Rt,ot,Tt,Y,V,At,xt,vt,qt,ne,jt,mt,te,Wt,zt,ce,f,et,G,T,S=0,U=new l.Buf8(4),st=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!$||!$.state||!$.output||!$.input&&$.avail_in!==0)return v;(g=$.state).mode===12&&(g.mode=13),Rt=$.next_out,Ot=$.output,Tt=$.avail_out,lt=$.next_in,it=$.input,ot=$.avail_in,Y=g.hold,V=g.bits,At=ot,xt=Tt,et=C;t:for(;;)switch(g.mode){case E:if(g.wrap===0){g.mode=13;break}for(;V<16;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}if(2&g.wrap&&Y===35615){U[g.check=0]=255&Y,U[1]=Y>>>8&255,g.check=d(g.check,U,2,0),V=Y=0,g.mode=2;break}if(g.flags=0,g.head&&(g.head.done=!1),!(1&g.wrap)||(((255&Y)<<8)+(Y>>8))%31){$.msg="incorrect header check",g.mode=30;break}if((15&Y)!=8){$.msg="unknown compression method",g.mode=30;break}if(V-=4,f=8+(15&(Y>>>=4)),g.wbits===0)g.wbits=f;else if(f>g.wbits){$.msg="invalid window size",g.mode=30;break}g.dmax=1<<f,$.adler=g.check=1,g.mode=512&Y?10:12,V=Y=0;break;case 2:for(;V<16;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}if(g.flags=Y,(255&g.flags)!=8){$.msg="unknown compression method",g.mode=30;break}if(57344&g.flags){$.msg="unknown header flags set",g.mode=30;break}g.head&&(g.head.text=Y>>8&1),512&g.flags&&(U[0]=255&Y,U[1]=Y>>>8&255,g.check=d(g.check,U,2,0)),V=Y=0,g.mode=3;case 3:for(;V<32;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}g.head&&(g.head.time=Y),512&g.flags&&(U[0]=255&Y,U[1]=Y>>>8&255,U[2]=Y>>>16&255,U[3]=Y>>>24&255,g.check=d(g.check,U,4,0)),V=Y=0,g.mode=4;case 4:for(;V<16;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}g.head&&(g.head.xflags=255&Y,g.head.os=Y>>8),512&g.flags&&(U[0]=255&Y,U[1]=Y>>>8&255,g.check=d(g.check,U,2,0)),V=Y=0,g.mode=5;case 5:if(1024&g.flags){for(;V<16;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}g.length=Y,g.head&&(g.head.extra_len=Y),512&g.flags&&(U[0]=255&Y,U[1]=Y>>>8&255,g.check=d(g.check,U,2,0)),V=Y=0}else g.head&&(g.head.extra=null);g.mode=6;case 6:if(1024&g.flags&&(ot<(vt=g.length)&&(vt=ot),vt&&(g.head&&(f=g.head.extra_len-g.length,g.head.extra||(g.head.extra=new Array(g.head.extra_len)),l.arraySet(g.head.extra,it,lt,vt,f)),512&g.flags&&(g.check=d(g.check,it,vt,lt)),ot-=vt,lt+=vt,g.length-=vt),g.length))break t;g.length=0,g.mode=7;case 7:if(2048&g.flags){if(ot===0)break t;for(vt=0;f=it[lt+vt++],g.head&&f&&g.length<65536&&(g.head.name+=String.fromCharCode(f)),f&&vt<ot;);if(512&g.flags&&(g.check=d(g.check,it,vt,lt)),ot-=vt,lt+=vt,f)break t}else g.head&&(g.head.name=null);g.length=0,g.mode=8;case 8:if(4096&g.flags){if(ot===0)break t;for(vt=0;f=it[lt+vt++],g.head&&f&&g.length<65536&&(g.head.comment+=String.fromCharCode(f)),f&&vt<ot;);if(512&g.flags&&(g.check=d(g.check,it,vt,lt)),ot-=vt,lt+=vt,f)break t}else g.head&&(g.head.comment=null);g.mode=9;case 9:if(512&g.flags){for(;V<16;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}if(Y!==(65535&g.check)){$.msg="header crc mismatch",g.mode=30;break}V=Y=0}g.head&&(g.head.hcrc=g.flags>>9&1,g.head.done=!0),$.adler=g.check=0,g.mode=12;break;case 10:for(;V<32;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}$.adler=g.check=k(Y),V=Y=0,g.mode=11;case 11:if(g.havedict===0)return $.next_out=Rt,$.avail_out=Tt,$.next_in=lt,$.avail_in=ot,g.hold=Y,g.bits=V,2;$.adler=g.check=1,g.mode=12;case 12:if(Q===5||Q===6)break t;case 13:if(g.last){Y>>>=7&V,V-=7&V,g.mode=27;break}for(;V<3;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}switch(g.last=1&Y,V-=1,3&(Y>>>=1)){case 0:g.mode=14;break;case 1:if(pt(g),g.mode=20,Q!==6)break;Y>>>=2,V-=2;break t;case 2:g.mode=17;break;case 3:$.msg="invalid block type",g.mode=30}Y>>>=2,V-=2;break;case 14:for(Y>>>=7&V,V-=7&V;V<32;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}if((65535&Y)!=(Y>>>16^65535)){$.msg="invalid stored block lengths",g.mode=30;break}if(g.length=65535&Y,V=Y=0,g.mode=15,Q===6)break t;case 15:g.mode=16;case 16:if(vt=g.length){if(ot<vt&&(vt=ot),Tt<vt&&(vt=Tt),vt===0)break t;l.arraySet(Ot,it,lt,vt,Rt),ot-=vt,lt+=vt,Tt-=vt,Rt+=vt,g.length-=vt;break}g.mode=12;break;case 17:for(;V<14;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}if(g.nlen=257+(31&Y),Y>>>=5,V-=5,g.ndist=1+(31&Y),Y>>>=5,V-=5,g.ncode=4+(15&Y),Y>>>=4,V-=4,286<g.nlen||30<g.ndist){$.msg="too many length or distance symbols",g.mode=30;break}g.have=0,g.mode=18;case 18:for(;g.have<g.ncode;){for(;V<3;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}g.lens[st[g.have++]]=7&Y,Y>>>=3,V-=3}for(;g.have<19;)g.lens[st[g.have++]]=0;if(g.lencode=g.lendyn,g.lenbits=7,G={bits:g.lenbits},et=b(0,g.lens,0,19,g.lencode,0,g.work,G),g.lenbits=G.bits,et){$.msg="invalid code lengths set",g.mode=30;break}g.have=0,g.mode=19;case 19:for(;g.have<g.nlen+g.ndist;){for(;mt=(S=g.lencode[Y&(1<<g.lenbits)-1])>>>16&255,te=65535&S,!((jt=S>>>24)<=V);){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}if(te<16)Y>>>=jt,V-=jt,g.lens[g.have++]=te;else{if(te===16){for(T=jt+2;V<T;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}if(Y>>>=jt,V-=jt,g.have===0){$.msg="invalid bit length repeat",g.mode=30;break}f=g.lens[g.have-1],vt=3+(3&Y),Y>>>=2,V-=2}else if(te===17){for(T=jt+3;V<T;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}V-=jt,f=0,vt=3+(7&(Y>>>=jt)),Y>>>=3,V-=3}else{for(T=jt+7;V<T;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}V-=jt,f=0,vt=11+(127&(Y>>>=jt)),Y>>>=7,V-=7}if(g.have+vt>g.nlen+g.ndist){$.msg="invalid bit length repeat",g.mode=30;break}for(;vt--;)g.lens[g.have++]=f}}if(g.mode===30)break;if(g.lens[256]===0){$.msg="invalid code -- missing end-of-block",g.mode=30;break}if(g.lenbits=9,G={bits:g.lenbits},et=b(_,g.lens,0,g.nlen,g.lencode,0,g.work,G),g.lenbits=G.bits,et){$.msg="invalid literal/lengths set",g.mode=30;break}if(g.distbits=6,g.distcode=g.distdyn,G={bits:g.distbits},et=b(w,g.lens,g.nlen,g.ndist,g.distcode,0,g.work,G),g.distbits=G.bits,et){$.msg="invalid distances set",g.mode=30;break}if(g.mode=20,Q===6)break t;case 20:g.mode=21;case 21:if(6<=ot&&258<=Tt){$.next_out=Rt,$.avail_out=Tt,$.next_in=lt,$.avail_in=ot,g.hold=Y,g.bits=V,m($,xt),Rt=$.next_out,Ot=$.output,Tt=$.avail_out,lt=$.next_in,it=$.input,ot=$.avail_in,Y=g.hold,V=g.bits,g.mode===12&&(g.back=-1);break}for(g.back=0;mt=(S=g.lencode[Y&(1<<g.lenbits)-1])>>>16&255,te=65535&S,!((jt=S>>>24)<=V);){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}if(mt&&(240&mt)==0){for(Wt=jt,zt=mt,ce=te;mt=(S=g.lencode[ce+((Y&(1<<Wt+zt)-1)>>Wt)])>>>16&255,te=65535&S,!(Wt+(jt=S>>>24)<=V);){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}Y>>>=Wt,V-=Wt,g.back+=Wt}if(Y>>>=jt,V-=jt,g.back+=jt,g.length=te,mt===0){g.mode=26;break}if(32&mt){g.back=-1,g.mode=12;break}if(64&mt){$.msg="invalid literal/length code",g.mode=30;break}g.extra=15&mt,g.mode=22;case 22:if(g.extra){for(T=g.extra;V<T;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}g.length+=Y&(1<<g.extra)-1,Y>>>=g.extra,V-=g.extra,g.back+=g.extra}g.was=g.length,g.mode=23;case 23:for(;mt=(S=g.distcode[Y&(1<<g.distbits)-1])>>>16&255,te=65535&S,!((jt=S>>>24)<=V);){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}if((240&mt)==0){for(Wt=jt,zt=mt,ce=te;mt=(S=g.distcode[ce+((Y&(1<<Wt+zt)-1)>>Wt)])>>>16&255,te=65535&S,!(Wt+(jt=S>>>24)<=V);){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}Y>>>=Wt,V-=Wt,g.back+=Wt}if(Y>>>=jt,V-=jt,g.back+=jt,64&mt){$.msg="invalid distance code",g.mode=30;break}g.offset=te,g.extra=15&mt,g.mode=24;case 24:if(g.extra){for(T=g.extra;V<T;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}g.offset+=Y&(1<<g.extra)-1,Y>>>=g.extra,V-=g.extra,g.back+=g.extra}if(g.offset>g.dmax){$.msg="invalid distance too far back",g.mode=30;break}g.mode=25;case 25:if(Tt===0)break t;if(vt=xt-Tt,g.offset>vt){if((vt=g.offset-vt)>g.whave&&g.sane){$.msg="invalid distance too far back",g.mode=30;break}qt=vt>g.wnext?(vt-=g.wnext,g.wsize-vt):g.wnext-vt,vt>g.length&&(vt=g.length),ne=g.window}else ne=Ot,qt=Rt-g.offset,vt=g.length;for(Tt<vt&&(vt=Tt),Tt-=vt,g.length-=vt;Ot[Rt++]=ne[qt++],--vt;);g.length===0&&(g.mode=21);break;case 26:if(Tt===0)break t;Ot[Rt++]=g.length,Tt--,g.mode=21;break;case 27:if(g.wrap){for(;V<32;){if(ot===0)break t;ot--,Y|=it[lt++]<<V,V+=8}if(xt-=Tt,$.total_out+=xt,g.total+=xt,xt&&($.adler=g.check=g.flags?d(g.check,Ot,xt,Rt-xt):u(g.check,Ot,xt,Rt-xt)),xt=Tt,(g.flags?Y:k(Y))!==g.check){$.msg="incorrect data check",g.mode=30;break}V=Y=0}g.mode=28;case 28:if(g.wrap&&g.flags){for(;V<32;){if(ot===0)break t;ot--,Y+=it[lt++]<<V,V+=8}if(Y!==(4294967295&g.total)){$.msg="incorrect length check",g.mode=30;break}V=Y=0}g.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;case 32:default:return v}return $.next_out=Rt,$.avail_out=Tt,$.next_in=lt,$.avail_in=ot,g.hold=Y,g.bits=V,(g.wsize||xt!==$.avail_out&&g.mode<30&&(g.mode<27||Q!==4))&&Pt($,$.output,$.next_out,xt-$.avail_out)?(g.mode=31,-4):(At-=$.avail_in,xt-=$.avail_out,$.total_in+=At,$.total_out+=xt,g.total+=xt,g.wrap&&xt&&($.adler=g.check=g.flags?d(g.check,Ot,xt,$.next_out-xt):u(g.check,Ot,xt,$.next_out-xt)),$.data_type=g.bits+(g.last?64:0)+(g.mode===12?128:0)+(g.mode===20||g.mode===15?256:0),(At==0&&xt===0||Q===4)&&et===C&&(et=-5),et)},o.inflateEnd=function($){if(!$||!$.state)return v;var Q=$.state;return Q.window&&(Q.window=null),$.state=null,C},o.inflateGetHeader=function($,Q){var g;return $&&$.state?(2&(g=$.state).wrap)==0?v:((g.head=Q).done=!1,C):v},o.inflateSetDictionary=function($,Q){var g,it=Q.length;return $&&$.state?(g=$.state).wrap!==0&&g.mode!==11?v:g.mode===11&&u(1,Q,it,0)!==g.check?-3:Pt($,Q,it,it)?(g.mode=31,-4):(g.havedict=1,C):v},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,s,o){var l=n("../utils/common"),u=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],d=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],b=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];s.exports=function(_,w,C,v,E,y,A,k){var O,B,W,K,rt,X,ct,tt,pt,Pt=k.bits,$=0,Q=0,g=0,it=0,Ot=0,lt=0,Rt=0,ot=0,Tt=0,Y=0,V=null,At=0,xt=new l.Buf16(16),vt=new l.Buf16(16),qt=null,ne=0;for($=0;$<=15;$++)xt[$]=0;for(Q=0;Q<v;Q++)xt[w[C+Q]]++;for(Ot=Pt,it=15;1<=it&&xt[it]===0;it--);if(it<Ot&&(Ot=it),it===0)return E[y++]=20971520,E[y++]=20971520,k.bits=1,0;for(g=1;g<it&&xt[g]===0;g++);for(Ot<g&&(Ot=g),$=ot=1;$<=15;$++)if(ot<<=1,(ot-=xt[$])<0)return-1;if(0<ot&&(_===0||it!==1))return-1;for(vt[1]=0,$=1;$<15;$++)vt[$+1]=vt[$]+xt[$];for(Q=0;Q<v;Q++)w[C+Q]!==0&&(A[vt[w[C+Q]]++]=Q);if(X=_===0?(V=qt=A,19):_===1?(V=u,At-=257,qt=d,ne-=257,256):(V=m,qt=b,-1),$=g,rt=y,Rt=Q=Y=0,W=-1,K=(Tt=1<<(lt=Ot))-1,_===1&&852<Tt||_===2&&592<Tt)return 1;for(;;){for(ct=$-Rt,pt=A[Q]<X?(tt=0,A[Q]):A[Q]>X?(tt=qt[ne+A[Q]],V[At+A[Q]]):(tt=96,0),O=1<<$-Rt,g=B=1<<lt;E[rt+(Y>>Rt)+(B-=O)]=ct<<24|tt<<16|pt|0,B!==0;);for(O=1<<$-1;Y&O;)O>>=1;if(O!==0?(Y&=O-1,Y+=O):Y=0,Q++,--xt[$]==0){if($===it)break;$=w[C+A[Q]]}if(Ot<$&&(Y&K)!==W){for(Rt===0&&(Rt=Ot),rt+=g,ot=1<<(lt=$-Rt);lt+Rt<it&&!((ot-=xt[lt+Rt])<=0);)lt++,ot<<=1;if(Tt+=1<<lt,_===1&&852<Tt||_===2&&592<Tt)return 1;E[W=Y&K]=Ot<<24|lt<<16|rt-y|0}}return Y!==0&&(E[rt+Y]=$-Rt<<24|64<<16|0),k.bits=Ot,0}},{"../utils/common":41}],51:[function(n,s,o){s.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,s,o){var l=n("../utils/common"),u=0,d=1;function m(S){for(var U=S.length;0<=--U;)S[U]=0}var b=0,_=29,w=256,C=w+1+_,v=30,E=19,y=2*C+1,A=15,k=16,O=7,B=256,W=16,K=17,rt=18,X=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ct=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Pt=new Array(2*(C+2));m(Pt);var $=new Array(2*v);m($);var Q=new Array(512);m(Q);var g=new Array(256);m(g);var it=new Array(_);m(it);var Ot,lt,Rt,ot=new Array(v);function Tt(S,U,st,at,H){this.static_tree=S,this.extra_bits=U,this.extra_base=st,this.elems=at,this.max_length=H,this.has_stree=S&&S.length}function Y(S,U){this.dyn_tree=S,this.max_code=0,this.stat_desc=U}function V(S){return S<256?Q[S]:Q[256+(S>>>7)]}function At(S,U){S.pending_buf[S.pending++]=255&U,S.pending_buf[S.pending++]=U>>>8&255}function xt(S,U,st){S.bi_valid>k-st?(S.bi_buf|=U<<S.bi_valid&65535,At(S,S.bi_buf),S.bi_buf=U>>k-S.bi_valid,S.bi_valid+=st-k):(S.bi_buf|=U<<S.bi_valid&65535,S.bi_valid+=st)}function vt(S,U,st){xt(S,st[2*U],st[2*U+1])}function qt(S,U){for(var st=0;st|=1&S,S>>>=1,st<<=1,0<--U;);return st>>>1}function ne(S,U,st){var at,H,ut=new Array(A+1),kt=0;for(at=1;at<=A;at++)ut[at]=kt=kt+st[at-1]<<1;for(H=0;H<=U;H++){var ht=S[2*H+1];ht!==0&&(S[2*H]=qt(ut[ht]++,ht))}}function jt(S){var U;for(U=0;U<C;U++)S.dyn_ltree[2*U]=0;for(U=0;U<v;U++)S.dyn_dtree[2*U]=0;for(U=0;U<E;U++)S.bl_tree[2*U]=0;S.dyn_ltree[2*B]=1,S.opt_len=S.static_len=0,S.last_lit=S.matches=0}function mt(S){8<S.bi_valid?At(S,S.bi_buf):0<S.bi_valid&&(S.pending_buf[S.pending++]=S.bi_buf),S.bi_buf=0,S.bi_valid=0}function te(S,U,st,at){var H=2*U,ut=2*st;return S[H]<S[ut]||S[H]===S[ut]&&at[U]<=at[st]}function Wt(S,U,st){for(var at=S.heap[st],H=st<<1;H<=S.heap_len&&(H<S.heap_len&&te(U,S.heap[H+1],S.heap[H],S.depth)&&H++,!te(U,at,S.heap[H],S.depth));)S.heap[st]=S.heap[H],st=H,H<<=1;S.heap[st]=at}function zt(S,U,st){var at,H,ut,kt,ht=0;if(S.last_lit!==0)for(;at=S.pending_buf[S.d_buf+2*ht]<<8|S.pending_buf[S.d_buf+2*ht+1],H=S.pending_buf[S.l_buf+ht],ht++,at===0?vt(S,H,U):(vt(S,(ut=g[H])+w+1,U),(kt=X[ut])!==0&&xt(S,H-=it[ut],kt),vt(S,ut=V(--at),st),(kt=ct[ut])!==0&&xt(S,at-=ot[ut],kt)),ht<S.last_lit;);vt(S,B,U)}function ce(S,U){var st,at,H,ut=U.dyn_tree,kt=U.stat_desc.static_tree,ht=U.stat_desc.has_stree,Et=U.stat_desc.elems,Lt=-1;for(S.heap_len=0,S.heap_max=y,st=0;st<Et;st++)ut[2*st]!==0?(S.heap[++S.heap_len]=Lt=st,S.depth[st]=0):ut[2*st+1]=0;for(;S.heap_len<2;)ut[2*(H=S.heap[++S.heap_len]=Lt<2?++Lt:0)]=1,S.depth[H]=0,S.opt_len--,ht&&(S.static_len-=kt[2*H+1]);for(U.max_code=Lt,st=S.heap_len>>1;1<=st;st--)Wt(S,ut,st);for(H=Et;st=S.heap[1],S.heap[1]=S.heap[S.heap_len--],Wt(S,ut,1),at=S.heap[1],S.heap[--S.heap_max]=st,S.heap[--S.heap_max]=at,ut[2*H]=ut[2*st]+ut[2*at],S.depth[H]=(S.depth[st]>=S.depth[at]?S.depth[st]:S.depth[at])+1,ut[2*st+1]=ut[2*at+1]=H,S.heap[1]=H++,Wt(S,ut,1),2<=S.heap_len;);S.heap[--S.heap_max]=S.heap[1],(function(Bt,se){var Ae,pe,ve,Ht,De,_e,St=se.dyn_tree,ze=se.max_code,Te=se.stat_desc.static_tree,sr=se.stat_desc.has_stree,_t=se.stat_desc.extra_bits,or=se.stat_desc.extra_base,Be=se.stat_desc.max_length,Me=0;for(Ht=0;Ht<=A;Ht++)Bt.bl_count[Ht]=0;for(St[2*Bt.heap[Bt.heap_max]+1]=0,Ae=Bt.heap_max+1;Ae<y;Ae++)Be<(Ht=St[2*St[2*(pe=Bt.heap[Ae])+1]+1]+1)&&(Ht=Be,Me++),St[2*pe+1]=Ht,ze<pe||(Bt.bl_count[Ht]++,De=0,or<=pe&&(De=_t[pe-or]),_e=St[2*pe],Bt.opt_len+=_e*(Ht+De),sr&&(Bt.static_len+=_e*(Te[2*pe+1]+De)));if(Me!==0){do{for(Ht=Be-1;Bt.bl_count[Ht]===0;)Ht--;Bt.bl_count[Ht]--,Bt.bl_count[Ht+1]+=2,Bt.bl_count[Be]--,Me-=2}while(0<Me);for(Ht=Be;Ht!==0;Ht--)for(pe=Bt.bl_count[Ht];pe!==0;)ze<(ve=Bt.heap[--Ae])||(St[2*ve+1]!==Ht&&(Bt.opt_len+=(Ht-St[2*ve+1])*St[2*ve],St[2*ve+1]=Ht),pe--)}})(S,U),ne(ut,Lt,S.bl_count)}function f(S,U,st){var at,H,ut=-1,kt=U[1],ht=0,Et=7,Lt=4;for(kt===0&&(Et=138,Lt=3),U[2*(st+1)+1]=65535,at=0;at<=st;at++)H=kt,kt=U[2*(at+1)+1],++ht<Et&&H===kt||(ht<Lt?S.bl_tree[2*H]+=ht:H!==0?(H!==ut&&S.bl_tree[2*H]++,S.bl_tree[2*W]++):ht<=10?S.bl_tree[2*K]++:S.bl_tree[2*rt]++,ut=H,Lt=(ht=0)===kt?(Et=138,3):H===kt?(Et=6,3):(Et=7,4))}function et(S,U,st){var at,H,ut=-1,kt=U[1],ht=0,Et=7,Lt=4;for(kt===0&&(Et=138,Lt=3),at=0;at<=st;at++)if(H=kt,kt=U[2*(at+1)+1],!(++ht<Et&&H===kt)){if(ht<Lt)for(;vt(S,H,S.bl_tree),--ht!=0;);else H!==0?(H!==ut&&(vt(S,H,S.bl_tree),ht--),vt(S,W,S.bl_tree),xt(S,ht-3,2)):ht<=10?(vt(S,K,S.bl_tree),xt(S,ht-3,3)):(vt(S,rt,S.bl_tree),xt(S,ht-11,7));ut=H,Lt=(ht=0)===kt?(Et=138,3):H===kt?(Et=6,3):(Et=7,4)}}m(ot);var G=!1;function T(S,U,st,at){xt(S,(b<<1)+(at?1:0),3),(function(H,ut,kt,ht){mt(H),At(H,kt),At(H,~kt),l.arraySet(H.pending_buf,H.window,ut,kt,H.pending),H.pending+=kt})(S,U,st)}o._tr_init=function(S){G||((function(){var U,st,at,H,ut,kt=new Array(A+1);for(H=at=0;H<_-1;H++)for(it[H]=at,U=0;U<1<<X[H];U++)g[at++]=H;for(g[at-1]=H,H=ut=0;H<16;H++)for(ot[H]=ut,U=0;U<1<<ct[H];U++)Q[ut++]=H;for(ut>>=7;H<v;H++)for(ot[H]=ut<<7,U=0;U<1<<ct[H]-7;U++)Q[256+ut++]=H;for(st=0;st<=A;st++)kt[st]=0;for(U=0;U<=143;)Pt[2*U+1]=8,U++,kt[8]++;for(;U<=255;)Pt[2*U+1]=9,U++,kt[9]++;for(;U<=279;)Pt[2*U+1]=7,U++,kt[7]++;for(;U<=287;)Pt[2*U+1]=8,U++,kt[8]++;for(ne(Pt,C+1,kt),U=0;U<v;U++)$[2*U+1]=5,$[2*U]=qt(U,5);Ot=new Tt(Pt,X,w+1,C,A),lt=new Tt($,ct,0,v,A),Rt=new Tt(new Array(0),tt,0,E,O)})(),G=!0),S.l_desc=new Y(S.dyn_ltree,Ot),S.d_desc=new Y(S.dyn_dtree,lt),S.bl_desc=new Y(S.bl_tree,Rt),S.bi_buf=0,S.bi_valid=0,jt(S)},o._tr_stored_block=T,o._tr_flush_block=function(S,U,st,at){var H,ut,kt=0;0<S.level?(S.strm.data_type===2&&(S.strm.data_type=(function(ht){var Et,Lt=4093624447;for(Et=0;Et<=31;Et++,Lt>>>=1)if(1&Lt&&ht.dyn_ltree[2*Et]!==0)return u;if(ht.dyn_ltree[18]!==0||ht.dyn_ltree[20]!==0||ht.dyn_ltree[26]!==0)return d;for(Et=32;Et<w;Et++)if(ht.dyn_ltree[2*Et]!==0)return d;return u})(S)),ce(S,S.l_desc),ce(S,S.d_desc),kt=(function(ht){var Et;for(f(ht,ht.dyn_ltree,ht.l_desc.max_code),f(ht,ht.dyn_dtree,ht.d_desc.max_code),ce(ht,ht.bl_desc),Et=E-1;3<=Et&&ht.bl_tree[2*pt[Et]+1]===0;Et--);return ht.opt_len+=3*(Et+1)+5+5+4,Et})(S),H=S.opt_len+3+7>>>3,(ut=S.static_len+3+7>>>3)<=H&&(H=ut)):H=ut=st+5,st+4<=H&&U!==-1?T(S,U,st,at):S.strategy===4||ut===H?(xt(S,2+(at?1:0),3),zt(S,Pt,$)):(xt(S,4+(at?1:0),3),(function(ht,Et,Lt,Bt){var se;for(xt(ht,Et-257,5),xt(ht,Lt-1,5),xt(ht,Bt-4,4),se=0;se<Bt;se++)xt(ht,ht.bl_tree[2*pt[se]+1],3);et(ht,ht.dyn_ltree,Et-1),et(ht,ht.dyn_dtree,Lt-1)})(S,S.l_desc.max_code+1,S.d_desc.max_code+1,kt+1),zt(S,S.dyn_ltree,S.dyn_dtree)),jt(S),at&&mt(S)},o._tr_tally=function(S,U,st){return S.pending_buf[S.d_buf+2*S.last_lit]=U>>>8&255,S.pending_buf[S.d_buf+2*S.last_lit+1]=255&U,S.pending_buf[S.l_buf+S.last_lit]=255&st,S.last_lit++,U===0?S.dyn_ltree[2*st]++:(S.matches++,U--,S.dyn_ltree[2*(g[st]+w+1)]++,S.dyn_dtree[2*V(U)]++),S.last_lit===S.lit_bufsize-1},o._tr_align=function(S){xt(S,2,3),vt(S,B,Pt),(function(U){U.bi_valid===16?(At(U,U.bi_buf),U.bi_buf=0,U.bi_valid=0):8<=U.bi_valid&&(U.pending_buf[U.pending++]=255&U.bi_buf,U.bi_buf>>=8,U.bi_valid-=8)})(S)}},{"../utils/common":41}],53:[function(n,s,o){s.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,s,o){(function(l){(function(u,d){if(!u.setImmediate){var m,b,_,w,C=1,v={},E=!1,y=u.document,A=Object.getPrototypeOf&&Object.getPrototypeOf(u);A=A&&A.setTimeout?A:u,m={}.toString.call(u.process)==="[object process]"?function(W){process.nextTick(function(){O(W)})}:(function(){if(u.postMessage&&!u.importScripts){var W=!0,K=u.onmessage;return u.onmessage=function(){W=!1},u.postMessage("","*"),u.onmessage=K,W}})()?(w="setImmediate$"+Math.random()+"$",u.addEventListener?u.addEventListener("message",B,!1):u.attachEvent("onmessage",B),function(W){u.postMessage(w+W,"*")}):u.MessageChannel?((_=new MessageChannel).port1.onmessage=function(W){O(W.data)},function(W){_.port2.postMessage(W)}):y&&"onreadystatechange"in y.createElement("script")?(b=y.documentElement,function(W){var K=y.createElement("script");K.onreadystatechange=function(){O(W),K.onreadystatechange=null,b.removeChild(K),K=null},b.appendChild(K)}):function(W){setTimeout(O,0,W)},A.setImmediate=function(W){typeof W!="function"&&(W=new Function(""+W));for(var K=new Array(arguments.length-1),rt=0;rt<K.length;rt++)K[rt]=arguments[rt+1];var X={callback:W,args:K};return v[C]=X,m(C),C++},A.clearImmediate=k}function k(W){delete v[W]}function O(W){if(E)setTimeout(O,0,W);else{var K=v[W];if(K){E=!0;try{(function(rt){var X=rt.callback,ct=rt.args;switch(ct.length){case 0:X();break;case 1:X(ct[0]);break;case 2:X(ct[0],ct[1]);break;case 3:X(ct[0],ct[1],ct[2]);break;default:X.apply(d,ct)}})(K)}finally{k(W),E=!1}}}}function B(W){W.source===u&&typeof W.data=="string"&&W.data.indexOf(w)===0&&O(+W.data.slice(w.length))}})(typeof self>"u"?l===void 0?this:l:self)}).call(this,typeof $e<"u"?$e:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Xn)),Xn.exports}var oo=so();const Pa=Ea(oo);var fn={exports:{}},lo=fn.exports,sa;function co(){return sa||(sa=1,(function(i,r){(function(n,s){s()})(lo,function(){function n(b,_){return typeof _>"u"?_={autoBom:!1}:typeof _!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),_={autoBom:!_}),_.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(b.type)?new Blob(["\uFEFF",b],{type:b.type}):b}function s(b,_,w){var C=new XMLHttpRequest;C.open("GET",b),C.responseType="blob",C.onload=function(){m(C.response,_,w)},C.onerror=function(){console.error("could not download file")},C.send()}function o(b){var _=new XMLHttpRequest;_.open("HEAD",b,!1);try{_.send()}catch{}return 200<=_.status&&299>=_.status}function l(b){try{b.dispatchEvent(new MouseEvent("click"))}catch{var _=document.createEvent("MouseEvents");_.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),b.dispatchEvent(_)}}var u=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof $e=="object"&&$e.global===$e?$e:void 0,d=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),m=u.saveAs||(typeof window!="object"||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!d?function(b,_,w){var C=u.URL||u.webkitURL,v=document.createElement("a");_=_||b.name||"download",v.download=_,v.rel="noopener",typeof b=="string"?(v.href=b,v.origin===location.origin?l(v):o(v.href)?s(b,_,w):l(v,v.target="_blank")):(v.href=C.createObjectURL(b),setTimeout(function(){C.revokeObjectURL(v.href)},4e4),setTimeout(function(){l(v)},0))}:"msSaveOrOpenBlob"in navigator?function(b,_,w){if(_=_||b.name||"download",typeof b!="string")navigator.msSaveOrOpenBlob(n(b,w),_);else if(o(b))s(b,_,w);else{var C=document.createElement("a");C.href=b,C.target="_blank",setTimeout(function(){l(C)})}}:function(b,_,w,C){if(C=C||open("","_blank"),C&&(C.document.title=C.document.body.innerText="downloading..."),typeof b=="string")return s(b,_,w);var v=b.type==="application/octet-stream",E=/constructor/i.test(u.HTMLElement)||u.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||v&&E||d)&&typeof FileReader<"u"){var A=new FileReader;A.onloadend=function(){var B=A.result;B=y?B:B.replace(/^data:[^;]*;/,"data:attachment/file;"),C?C.location.href=B:location=B,C=null},A.readAsDataURL(b)}else{var k=u.URL||u.webkitURL,O=k.createObjectURL(b);C?C.location=O:location.href=O,C=null,setTimeout(function(){k.revokeObjectURL(O)},4e4)}});u.saveAs=m.saveAs=m,i.exports=m})})(fn)),fn.exports}var Oa=co();const We=i=>{const r=Number(i);return Number.isFinite(r)?r:0};function oa(i){const r=Math.floor(i/3600),n=Math.floor(i%3600/60),s=Math.floor(i%60),o=Math.floor(i%1*1e3);return`${r.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")},${o.toString().padStart(3,"0")}`}function la(i){const r=Math.floor(i/3600),n=Math.floor(i%3600/60),s=Math.floor(i%60),o=Math.floor(i%1*1e3);return`${r.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}.${o.toString().padStart(3,"0")}`}function Ra(i){return i.map((r,n)=>{const s=n+1,o=oa(We(r.start)),l=oa(We(r.end)),u=r.text;return`${s}
${o} --> ${l}
${u}
`}).join(`
`)}function $a(i){const r=`WEBVTT

`,n=i.map(s=>{const o=la(We(s.start)),l=la(We(s.end)),u=s.text;return`${o} --> ${l}
${u}
`}).join(`
`);return r+n}function Ia(i){return i.map(r=>{const n=We(r.start).toFixed(3),s=We(r.end).toFixed(3);return`[${n}s - ${s}s] ${r.text}`}).join(`
`)}function Da(i,r,n,s,o,l,u){return{id:i,title:r,duration:n,created_at:new Date(s).toISOString(),source:o,full_text:l,segments:u.map(d=>{const m=We(d.start),b=We(d.end);return{id:d.id,text:d.text,start:m,end:b,duration:b-m}})}}async function za(i){return i}async function uo(i){const r=await Gs(i),n=await Rr(i);if(!r)throw new Error("Recording not found");if(!n)throw new Error("No annotations found for this recording");const s=new Pa,o=`${r.title}-${i.slice(0,8)}`,l=s.folder(o),u=await za(r.audioBlob);l.file(`${i}.wav`,u);const d=Da(r.id,r.title,r.duration,r.createdAt,r.source,n.fullText,n.segments);l.file(`${i}.json`,JSON.stringify(d,null,2));const m=Ra(n.segments);l.file(`${i}.srt`,m);const b=$a(n.segments);l.file(`${i}.vtt`,b);const _=Ia(n.segments);l.file(`${i}.txt`,_);const w=await s.generateAsync({type:"blob"});Oa.saveAs(w,`${o}.zip`)}async function ho(){const r=(await Ta()).filter(d=>d.isAnnotated);if(r.length===0)throw new Error("No annotated recordings to export");const n=new Pa,o=`annotations-export-${new Date().toISOString().replace(/[:.]/g,"-")}`,l=n.folder(o);for(const d of r){const m=await Rr(d.id);if(!m)continue;const b=`${d.title}-${d.id.slice(0,8)}`,_=l.folder(b),w=await za(d.audioBlob);_.file(`${d.id}.wav`,w);const C=Da(d.id,d.title,d.duration,d.createdAt,d.source,m.fullText,m.segments);_.file(`${d.id}.json`,JSON.stringify(C,null,2));const v=Ra(m.segments);_.file(`${d.id}.srt`,v);const E=$a(m.segments);_.file(`${d.id}.vtt`,E);const y=Ia(m.segments);_.file(`${d.id}.txt`,y)}const u=await n.generateAsync({type:"blob"});Oa.saveAs(u,`${o}.zip`)}class fo{constructor(r){this.listeners=new Set,this.state=r}getState(){return this.state}subscribe(r){return this.listeners.add(r),()=>{this.listeners.delete(r)}}notify(){this.listeners.forEach(r=>r(this.state))}setState(r){this.state={...this.state,...r},this.notify()}}const Ba="sonicceeper-theme",po=()=>{try{const i=localStorage.getItem(Ba);if(i==="dark"||i==="pastel")return i}catch(i){console.warn("Failed to read theme from localStorage:",i)}return"dark"},mo={currentTheme:po()};class go extends fo{constructor(){super(mo)}toggleTheme(){const r=this.state.currentTheme==="dark"?"pastel":"dark";this.setTheme(r)}setTheme(r){this.setState({currentTheme:r});try{localStorage.setItem(Ba,r)}catch(n){console.warn("Failed to save theme to localStorage:",n)}}getCurrentTheme(){return this.state.currentTheme}}const $r=new go,vo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,yo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var bo=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,Ma=(i,r,n,s)=>{for(var o=s>1?void 0:s?wo(r,n):r,l=i.length-1,u;l>=0;l--)(u=i[l])&&(o=(s?u(r,n,o):u(o))||o);return s&&o&&bo(r,n,o),o};let vn=class extends Se{constructor(){super(...arguments),this.currentTheme=$r.getCurrentTheme()}connectedCallback(){super.connectedCallback(),this.unsubscribe=$r.subscribe(i=>{this.currentTheme=i.currentTheme})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}handleToggle(){$r.toggleTheme()}render(){const i=this.currentTheme==="dark"?vo:yo,r=this.currentTheme==="dark"?"Switch to Pastel Theme":"Switch to Dark Theme";return Nt`
      <button
        class="theme-toggle-btn"
        @click=${this.handleToggle}
        title=${r}
        aria-label=${r}
      >
        <span class="theme-icon">${ie(i)}</span>
      </button>
    `}};vn.styles=nr`
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
  `;Ma([Ft()],vn.prototype,"currentTheme",2);vn=Ma([ir("theme-toggle")],vn);function _o(i){const r=[],n=/\S+/g;let s,o=0;for(;(s=n.exec(i))!==null;)r.push({wordIndex:o,charStart:s.index,charEnd:s.index+s[0].length,text:s[0]}),o++;return r}var xo=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,we=(i,r,n,s)=>{for(var o=s>1?void 0:s?ko(r,n):r,l=i.length-1,u;l>=0;l--)(u=i[l])&&(o=(s?u(r,n,o):u(o))||o);return s&&o&&xo(r,n,o),o};let ge=class extends Se{constructor(){super(...arguments),this.text="",this.charStart=0,this.charEnd=0,this.editShortcut="E",this.transcribeShortcut="⌃T",this.committedRanges=[],this.unannotatedRanges=[],this.mode="navigate",this.centerCharIndex=0,this.wordBoundaries=[],this.previousText="",this.currentTransform="translateX(0px)",this.editDraft=""}updated(i){i.has("text")&&this.text!==this.previousText&&(this.wordBoundaries=_o(this.text),this.previousText=this.text),(i.has("charStart")||i.has("text")||i.has("centerCharIndex"))&&this.updateCenterPosition(),i.has("mode")&&this.mode==="edit"&&(this.editDraft=this.text.slice(this.charStart,this.charEnd),this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".edit-textarea")?.focus()}))}async updateCenterPosition(){await this.updateComplete;const i=this.shadowRoot?.querySelector(".stream-container");if(!i||this.wordBoundaries.length===0)return;const r=this.centerCharIndex>0?this.centerCharIndex:this.charStart,n=this.wordBoundaries.findIndex(u=>r>=u.charStart&&r<u.charEnd),s=n!==-1?n:0,l=i.querySelectorAll(".word")[s];if(l){const u=l.offsetLeft+l.offsetWidth/2,d=i.offsetWidth/2,m=u-d;this.currentTransform=`translateX(-${m}px)`}}getWordState(i){for(const r of this.committedRanges)if(i.charStart>=r.charStart&&i.charEnd<=r.charEnd)return"committed";if(i.charStart>=this.charStart&&i.charEnd<=this.charEnd)return"active";for(const r of this.unannotatedRanges)if(i.charStart>=r.charStart&&i.charEnd<=r.charEnd)return"unannotated";return"future"}handleWordClick(i,r){if(this.mode==="edit"||this.getWordState(i)==="committed")return;let s=this.charStart,o=this.charEnd;r.shiftKey?(s=Math.min(this.charStart,i.charStart),o=Math.max(this.charEnd,i.charEnd)):i.charStart<this.charStart?s=i.charStart:o=i.charEnd,this.dispatchEvent(new CustomEvent("selection-change",{detail:{charStart:s,charEnd:o},bubbles:!0,composed:!0}))}handleTextInput(i){const r=i.target;this.editDraft=r.value}handleSaveEdit(){const i=this.text.slice(this.charStart,this.charEnd);if(this.editDraft!==i){const r={position:this.charStart,deleteCount:this.charEnd-this.charStart,insertText:this.editDraft};this.dispatchEvent(new CustomEvent("text-edit",{detail:r,bubbles:!0,composed:!0}))}this.dispatchEvent(new CustomEvent("mode-change",{detail:{mode:"navigate"},bubbles:!0,composed:!0}))}handleCancelEdit(){this.dispatchEvent(new CustomEvent("mode-change",{detail:{mode:"navigate"},bubbles:!0,composed:!0}))}handleEditKeydown(i){i.key==="Escape"?(i.preventDefault(),i.stopPropagation(),this.handleCancelEdit()):(i.metaKey||i.ctrlKey)&&i.key==="s"&&(i.preventDefault(),i.stopPropagation(),this.handleSaveEdit())}handleEditRequest(){this.dispatchEvent(new CustomEvent("edit-request",{bubbles:!0,composed:!0}))}handleTranscribeRequest(){this.dispatchEvent(new CustomEvent("transcribe-request",{bubbles:!0,composed:!0}))}renderEmptyState(){return Nt`
      <div class="empty-state">
        <div class="empty-cta">
          <button class="empty-btn primary" @click=${this.handleEditRequest}>
            <span class="key-hint">${this.editShortcut}</span>
            <span>Start Typing</span>
          </button>
          <button class="empty-btn secondary" @click=${this.handleTranscribeRequest}>
            <span class="key-hint">${this.transcribeShortcut}</span>
            <span>Transcribe Audio</span>
          </button>
        </div>
        <div class="empty-subtitle">
          Transcription gives you a starting point. You'll refine it segment by segment.
        </div>
      </div>
    `}renderNavigateMode(){if(!this.text)return this.renderEmptyState();const i=[];let r=null;for(const n of this.wordBoundaries){const s=this.getWordState(n);r==="committed"&&s!=="committed"&&i.push(Nt`<span class="segment-boundary"></span>`),r!==null&&r!=="committed"&&s==="committed"&&i.push(Nt`<span class="segment-boundary"></span>`),i.push(Nt`
        <span class="word ${s}" @click=${o=>this.handleWordClick(n,o)}>
          ${n.text}
        </span>
      `),r=s}return Nt`
      <div class="mask-overlay"></div>
      <div class="center-guide"></div>

      <div class="stream-container" style="transform: ${this.currentTransform}">
        ${i}
      </div>

      <button class="inline-edit-btn" @click=${this.handleEditRequest}>
        <span class="key-hint">${this.editShortcut}</span>
        <span>Edit</span>
      </button>
    `}renderEditMode(){return Nt`
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
    `}render(){return this.mode==="edit"?this.renderEditMode():this.renderNavigateMode()}};ge.styles=nr`
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

    /* Committed (past) words - completely non-interactive */
    .word.committed {
      opacity: 0.2;
      color: var(--text-secondary);
      text-decoration: line-through;
      cursor: default;
      pointer-events: none;
    }

    /* Visual separator between committed and active regions */
    .segment-boundary {
      display: inline-flex;
      align-items: center;
      margin: 0 var(--spacing-2);
      font-size: var(--text-lg);
      opacity: 0.4;
      color: var(--accent-coral);
    }

    .segment-boundary::before {
      content: '│';
      font-weight: 300;
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
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-4);
      height: 100%;
      font-family: var(--font-ui);
    }

    .empty-cta {
      display: flex;
      gap: var(--spacing-3);
    }

    .empty-btn {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      padding: var(--spacing-3) var(--spacing-5);
      border-radius: var(--radius-lg);
      font-family: var(--font-ui);
      font-size: var(--text-base);
      font-weight: 600;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.2s ease;
      min-height: 48px;
    }

    .empty-btn.primary {
      background: var(--accent-coral);
      color: white;
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
    }

    .empty-btn.primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
    }

    .empty-btn.secondary {
      background: var(--bg-tertiary);
      color: var(--text-primary);
      border-color: var(--border-primary);
    }

    .empty-btn.secondary:hover {
      border-color: var(--accent-coral);
      background: var(--bg-secondary);
    }

    .key-hint {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 24px;
      height: 24px;
      padding: 0 var(--spacing-2);
      background: rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-sm);
      font-family: var(--font-data);
      font-size: var(--text-xs);
      font-weight: 700;
    }

    .empty-subtitle {
      color: var(--text-tertiary);
      font-size: var(--text-sm);
    }

    /* Inline edit button for non-empty state */
    .inline-edit-btn {
      position: absolute;
      bottom: var(--spacing-2);
      right: var(--spacing-3);
      display: flex;
      align-items: center;
      gap: var(--spacing-1);
      padding: var(--spacing-2) var(--spacing-3);
      background: var(--bg-tertiary);
      border: 1px solid var(--border-primary);
      border-radius: var(--radius-md);
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: 500;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s ease;
      z-index: 40;
    }

    .inline-edit-btn:hover {
      background: var(--bg-secondary);
      border-color: var(--accent-coral);
      color: var(--text-primary);
    }

    .inline-edit-btn .key-hint {
      background: rgba(255, 107, 107, 0.2);
      color: var(--accent-coral);
    }
  `;we([Xt({type:String})],ge.prototype,"text",2);we([Xt({type:Number})],ge.prototype,"charStart",2);we([Xt({type:Number})],ge.prototype,"charEnd",2);we([Xt({type:String})],ge.prototype,"editShortcut",2);we([Xt({type:String})],ge.prototype,"transcribeShortcut",2);we([Xt({type:Array})],ge.prototype,"committedRanges",2);we([Xt({type:Array})],ge.prototype,"unannotatedRanges",2);we([Xt({type:String})],ge.prototype,"mode",2);we([Xt({type:Number})],ge.prototype,"centerCharIndex",2);we([Ft()],ge.prototype,"wordBoundaries",2);we([Ft()],ge.prototype,"currentTransform",2);we([Ft()],ge.prototype,"editDraft",2);ge=we([ir("smoked-glass-text")],ge);var So=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,fe=(i,r,n,s)=>{for(var o=s>1?void 0:s?Co(r,n):r,l=i.length-1,u;l>=0;l--)(u=i[l])&&(o=(s?u(r,n,o):u(o))||o);return s&&o&&So(r,n,o),o};let Jt=class extends Se{constructor(){super(...arguments),this.audioBuffer=null,this.leftClamp=0,this.rightClamp=0,this.playhead=0,this.visualMode="classic",this.isPlaying=!1,this.selectedClamp=null,this.committedSegments=[],this.zoomLevel=1,this.viewOffset=0,this.isPanning=!1,this.draggingClamp=null,this.leftClampOverlapState="normal",this.rightClampOverlapState="normal",this.peaks=[],this.maxPeak=0,this.drawRafId=null,this.resizeObserver=null,this.panStartX=0,this.didPan=!1,this.lastClickTime=0,this.lastClickSegment=null,this.handlePanMove=i=>{if(!this.isPanning||!this.audioBuffer)return;Math.abs(i.clientX-this.panStartX)>5&&(this.didPan=!0);const n=this.canvas.getBoundingClientRect(),s=i.movementX,l=this.audioBuffer.duration/this.zoomLevel/n.width;this.clampViewOffset(this.viewOffset-s*l)},this.handlePanUp=i=>{if(this.isPanning=!1,this.releasePointerCapture(i.pointerId),this.removeEventListener("pointermove",this.handlePanMove),this.removeEventListener("pointerup",this.handlePanUp),!this.didPan&&!this.draggingClamp){const r=this.canvas.getBoundingClientRect(),n=i.clientX-r.left,s=this.pixelToTime(n);if(s>=0&&this.audioBuffer&&s<=this.audioBuffer.duration){const o=this.findSegmentAtTime(s),l=Date.now();o?this.lastClickSegment!==null&&this.lastClickSegment.start===o.start&&this.lastClickSegment.end===o.end&&l-this.lastClickTime<Jt.DOUBLE_CLICK_MS?(this.dispatchEvent(new CustomEvent("segment-edit-request",{detail:{segment:o},bubbles:!0,composed:!0})),this.lastClickTime=0,this.lastClickSegment=null):(this.lastClickTime=l,this.lastClickSegment=o,this.dispatchEvent(new CustomEvent("seek",{detail:{time:s},bubbles:!0,composed:!0}))):(this.lastClickTime=0,this.lastClickSegment=null,this.dispatchEvent(new CustomEvent("seek",{detail:{time:s},bubbles:!0,composed:!0})))}}},this.handleClampMove=i=>{if(!this.draggingClamp||!this.audioBuffer)return;const r=this.canvas.getBoundingClientRect(),n=i.clientX-r.left,s=Math.max(0,Math.min(this.audioBuffer.duration,this.pixelToTime(n)));let o=this.leftClamp,l=this.rightClamp;if(this.draggingClamp==="left"){const u=this.applyOverlapConstraints("left",s,this.rightClamp);o=u.time,this.leftClampOverlapState=u.state}else{const u=this.applyOverlapConstraints("right",s,this.leftClamp);l=u.time,this.rightClampOverlapState=u.state}this.dispatchEvent(new CustomEvent("clamp-change",{detail:{left:o,right:l},bubbles:!0,composed:!0})),this.clampViewOffset(this.viewOffset)},this.handleClampUp=()=>{this.draggingClamp=null,this.leftClampOverlapState="normal",this.rightClampOverlapState="normal",window.removeEventListener("pointermove",this.handleClampMove),window.removeEventListener("pointerup",this.handleClampUp)}}zoomIn(){this.audioBuffer&&(this.zoomLevel=Math.min(this.audioBuffer.duration/.1,this.zoomLevel*1.2),this.requestUpdate())}zoomOut(){this.zoomLevel=Math.max(1,this.zoomLevel/1.2),this.clampViewOffset(this.viewOffset),this.requestUpdate()}resetZoom(){this.zoomLevel=1,this.viewOffset=0,this.requestUpdate()}firstUpdated(){this.resizeObserver=new ResizeObserver(()=>{this.scheduleDraw()}),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}updated(i){if(i.has("audioBuffer")){const r=i.get("audioBuffer");this.audioBuffer!==r&&(this.calculatePeaks(),this.resetViewport())}this.scheduleDraw(),i.has("isPlaying")&&this.isPlaying&&this.autoScrollToPlayhead(),this.isPanning?this.classList.add("grabbing"):this.classList.remove("grabbing")}calculatePeaks(){if(!this.audioBuffer){this.peaks=[];return}const i=this.audioBuffer.getChannelData(0),r=4e3,n=Math.floor(i.length/r);this.peaks=new Array(r).fill(0),this.maxPeak=0;for(let s=0;s<r;s++){let o=0;const l=s*n;for(let u=0;u<n&&l+u<i.length;u++){const d=Math.abs(i[l+u]);d>o&&(o=d)}this.peaks[s]=o,o>this.maxPeak&&(this.maxPeak=o)}this.maxPeak===0&&(this.maxPeak=1)}resetViewport(){this.zoomLevel=1,this.viewOffset=0}scheduleDraw(){this.drawRafId||(this.drawRafId=requestAnimationFrame(()=>{this.drawRafId=null,this.drawWaveform()}))}drawWaveform(){if(!this.canvas||!this.peaks.length)return;const i=this.canvas.getContext("2d");if(!i)return;const r=this.canvas.getBoundingClientRect();if(r.width===0||r.height===0)return;const n=window.devicePixelRatio||1;this.canvas.width=r.width*n,this.canvas.height=r.height*n,i.scale(n,n);const s=r.width,o=r.height,l=getComputedStyle(this),u=l.getPropertyValue("--bg-surface").trim()||"#161b22",d=l.getPropertyValue("--accent-coral").trim()||"#ff6b6b",m=l.getPropertyValue("--accent-green").trim()||"#39ff14",b=l.getPropertyValue("--accent-yellow").trim()||"#FFB000";switch(i.clearRect(0,0,s,o),i.fillStyle=u,i.fillRect(0,0,s,o),this.visualMode){case"classic":this.drawClassicWaveform(i,s,o,b);break;case"neon":this.drawNeonPulseWaveform(i,s,o,d,m);break;case"mirror":this.drawMirroredWaveform(i,s,o,b);break;default:this.drawClassicWaveform(i,s,o,b)}}drawClassicWaveform(i,r,n,s){this.drawCommittedSegments(i,n),this.drawWaveformSegment(i,r,n,s),this.drawMarkerHighlights(i,n,"rgba(255, 107, 107, 0.1)")}drawCommittedSegments(i,r){if(this.committedSegments.length!==0)for(const n of this.committedSegments){const s=this.timeToPixel(n.start),o=this.timeToPixel(n.end),l=o-s;l>0&&o>0&&(i.fillStyle="rgba(100, 100, 100, 0.25)",i.fillRect(s,0,l,r),i.beginPath(),i.strokeStyle="rgba(255, 255, 255, 0.3)",i.lineWidth=1,i.moveTo(s,0),i.lineTo(s,r),i.moveTo(o,0),i.lineTo(o,r),i.stroke())}}drawNeonPulseWaveform(i,r,n,s,o){this.drawCommittedSegments(i,n),i.shadowBlur=8,i.shadowColor=s,i.globalCompositeOperation="lighter",this.drawWaveformSegment(i,r,n,s);const l=this.timeToPixel(this.leftClamp),d=this.timeToPixel(this.rightClamp)-l;d>0&&(i.save(),i.beginPath(),i.rect(l,0,d,n),i.clip(),i.shadowBlur=15,i.shadowColor=o,this.drawWaveformSegment(i,r,n,o),i.restore()),i.shadowBlur=0,i.globalCompositeOperation="source-over"}drawMirroredWaveform(i,r,n,s){this.drawCommittedSegments(i,n);const o=n/2;i.save(),i.translate(0,o),this.drawWaveformSegment(i,r,n,s,0,1),i.restore(),i.save(),i.translate(0,o),i.scale(1,-1),i.globalAlpha=.5,this.drawWaveformSegment(i,r,n,s,0,1),i.restore(),i.globalAlpha=1,this.drawMarkerHighlights(i,n,"rgba(255, 107, 107, 0.1)")}drawWaveformSegment(i,r,n,s,o=0,l=1){if(!this.audioBuffer)return;const u=this.audioBuffer.duration,d=this.peaks,m=d.length,b=u/this.zoomLevel,_=Math.floor(this.viewOffset/u*m),w=Math.ceil((this.viewOffset+b)/u*m),C=n/2+o,v=this.maxPeak>0?1/this.maxPeak:1;i.strokeStyle=s,i.lineWidth=1,i.beginPath();for(let E=_;E<w;E++){if(E<0||E>=m)continue;const y=E/m*u,A=this.timeToPixel(y),k=d[E]*v*(n/2)*.9*l;E===_?i.moveTo(A,C-k):i.lineTo(A,C-k),i.lineTo(A,C+k)}i.stroke()}drawMarkerHighlights(i,r,n){const s=this.timeToPixel(this.leftClamp),l=this.timeToPixel(this.rightClamp)-s;l>0&&(i.fillStyle=n,i.fillRect(s,0,l,r))}timeToPixel(i){if(!this.audioBuffer)return 0;const r=this.canvas?.getBoundingClientRect();if(!r||r.width===0)return 0;const s=this.audioBuffer.duration/this.zoomLevel;return(i-this.viewOffset)/s*r.width}pixelToTime(i){if(!this.audioBuffer)return 0;const r=this.canvas?.getBoundingClientRect();if(!r||r.width===0)return 0;const o=this.audioBuffer.duration/this.zoomLevel/r.width;return this.viewOffset+i*o}timeToPxString(i){const r=this.timeToPixel(i),n=this.canvas?.getBoundingClientRect();if(!n||n.width===0)return"-100px";const s=5,o=n.width-5;return`${Math.max(s,Math.min(r,o))}px`}clampViewOffset(i){if(!this.audioBuffer)return;const r=this.audioBuffer.duration,n=this.canvas?.getBoundingClientRect();if(!n)return;const s=r/this.zoomLevel,o=Math.max(0,r-s);let l=Math.max(0,Math.min(o,i));const d=25*(s/n.width);this.leftClamp<l+d&&this.draggingClamp==="left"&&(l=Math.max(0,this.leftClamp-d)),this.rightClamp>l+s-d&&this.draggingClamp==="right"&&(l=Math.min(o,this.rightClamp-s+d)),this.viewOffset=l,this.dispatchEvent(new CustomEvent("viewport-change",{detail:{viewOffset:this.viewOffset,zoomLevel:this.zoomLevel},bubbles:!0,composed:!0}))}handleWheel(i){if(!this.audioBuffer)return;i.preventDefault();const r=this.canvas.getBoundingClientRect();if(r.width===0)return;const n=this.audioBuffer.duration;if(i.ctrlKey||i.metaKey){const o=i.deltaY>0?.95:1.05,l=i.clientX-r.left,u=this.pixelToTime(l),d=1,m=Math.max(d,n/.1);let b=Math.max(d,Math.min(m,this.zoomLevel*o));const _=1;n/b<_&&(b=n/_),b=Math.max(d,Math.min(m,b));const w=u-l/r.width*(n/b);this.zoomLevel=b,this.clampViewOffset(w)}else{const o=n/this.zoomLevel/10,l=(i.deltaY>0?1:-1)*o;this.clampViewOffset(this.viewOffset+l)}}autoScrollToPlayhead(){if(!this.audioBuffer||!this.canvas)return;const i=this.canvas.getBoundingClientRect();if(i.width===0)return;const r=this.timeToPixel(this.playhead),s=this.audioBuffer.duration/this.zoomLevel,o=i.width*.25;if(r<o){const l=this.playhead-o/i.width*s;this.clampViewOffset(l)}else if(r>i.width-o){const l=this.playhead-(i.width-o)/i.width*s;this.clampViewOffset(l)}}findSegmentAtTime(i){for(const r of this.committedSegments)if(i>=r.start&&i<r.end)return r;return null}handleMouseDown(i){this.isPanning=!0,this.didPan=!1,this.panStartX=i.clientX,this.setPointerCapture(i.pointerId),this.addEventListener("pointermove",this.handlePanMove),this.addEventListener("pointerup",this.handlePanUp)}handleWaveformClick(i){if(this.didPan||this.draggingClamp)return;const r=this.canvas.getBoundingClientRect(),n=i.clientX-r.left,s=this.pixelToTime(n);s>=0&&this.audioBuffer&&s<=this.audioBuffer.duration&&this.dispatchEvent(new CustomEvent("seek",{detail:{time:s},bubbles:!0,composed:!0}))}handleClampDown(i,r){i.preventDefault(),i.stopPropagation(),this.dispatchEvent(new CustomEvent("clamp-select",{detail:{which:r},bubbles:!0,composed:!0})),this.draggingClamp=r,window.addEventListener("pointermove",this.handleClampMove),window.addEventListener("pointerup",this.handleClampUp)}applyOverlapConstraints(i,r,n){const s=Jt.MAX_OVERLAP_MS/1e3,o=.05;if(i==="left"){let l=Math.min(r,n-o);l=Math.max(0,l);for(const u of this.committedSegments){if(l>=u.start&&l<u.end){const d=u.end-s;return l<d?{time:d,state:"limit"}:{time:l,state:"overlap"}}if(l<u.start&&this.leftClamp>u.end)return{time:u.end-s,state:"limit"}}return{time:l,state:"normal"}}else{const l=this.audioBuffer?.duration??1/0;let u=Math.max(r,n+o);u=Math.min(l,u);for(const d of this.committedSegments){if(u>d.start&&u<=d.end){const m=d.start+s;return u>m?{time:m,state:"limit"}:{time:u,state:"overlap"}}if(u>d.end&&this.rightClamp<d.start)return{time:d.start+s,state:"limit"}}return{time:u,state:"normal"}}}formatTime(i){return i.toFixed(2)+"s"}render(){const i=this.timeToPxString(this.leftClamp),r=this.timeToPxString(this.rightClamp),n=this.timeToPxString(this.playhead),s=["clamp-handle","left",this.draggingClamp==="left"?"dragging":"",this.selectedClamp==="left"?"selected":"",this.leftClampOverlapState!=="normal"?this.leftClampOverlapState:""].filter(Boolean).join(" "),o=["clamp-handle","right",this.draggingClamp==="right"?"dragging":"",this.selectedClamp==="right"?"selected":"",this.rightClampOverlapState!=="normal"?this.rightClampOverlapState:""].filter(Boolean).join(" ");return Nt`
      <div
        class="wave-wrap ${this.isPanning?"grabbing":""}"
        @pointerdown=${this.handleMouseDown}
        @click=${this.handleWaveformClick}
        @wheel=${this.handleWheel}
      >
        <canvas></canvas>

        <div
          class="${s}"
          style="left:${i}"
          @pointerdown=${l=>this.handleClampDown(l,"left")}
        >
          <div class="clamp-line"></div>
        </div>

        <div
          class="${o}"
          style="left:${r}"
          @pointerdown=${l=>this.handleClampDown(l,"right")}
        >
          <div class="clamp-line"></div>
        </div>

        <div class="marker-label" style="left:${i}">${this.formatTime(this.leftClamp)}</div>
        <div class="marker-label" style="left:${r}">${this.formatTime(this.rightClamp)}</div>
        <div class="playhead-line" style="left:${n}"></div>
      </div>
    `}};Jt.styles=nr`
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

    /* Overlap state - orange warning */
    .clamp-handle.overlap .clamp-line {
      background: #ff9500 !important;
      box-shadow: 0 0 15px #ff9500;
    }

    /* Limit state - red, with shake animation */
    .clamp-handle.limit .clamp-line {
      background: #ff3b30 !important;
      box-shadow: 0 0 20px #ff3b30;
      animation: clamp-shake 0.3s ease-in-out;
    }

    @keyframes clamp-shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-3px); }
      75% { transform: translateX(3px); }
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
  `;Jt.MAX_OVERLAP_MS=250;Jt.DOUBLE_CLICK_MS=300;fe([Xt({type:Object})],Jt.prototype,"audioBuffer",2);fe([Xt({type:Number})],Jt.prototype,"leftClamp",2);fe([Xt({type:Number})],Jt.prototype,"rightClamp",2);fe([Xt({type:Number})],Jt.prototype,"playhead",2);fe([Xt({type:String})],Jt.prototype,"visualMode",2);fe([Xt({type:Boolean})],Jt.prototype,"isPlaying",2);fe([Xt({type:String})],Jt.prototype,"selectedClamp",2);fe([Xt({type:Array})],Jt.prototype,"committedSegments",2);fe([Ft()],Jt.prototype,"zoomLevel",2);fe([Ft()],Jt.prototype,"viewOffset",2);fe([Ft()],Jt.prototype,"isPanning",2);fe([Ft()],Jt.prototype,"draggingClamp",2);fe([Ft()],Jt.prototype,"leftClampOverlapState",2);fe([Ft()],Jt.prototype,"rightClampOverlapState",2);fe([Ca("canvas")],Jt.prototype,"canvas",2);Jt=fe([ir("stage-waveform")],Jt);var Eo=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,hi=(i,r,n,s)=>{for(var o=s>1?void 0:s?Ao(r,n):r,l=i.length-1,u;l>=0;l--)(u=i[l])&&(o=(s?u(r,n,o):u(o))||o);return s&&o&&Eo(r,n,o),o};let Br=class extends Se{constructor(){super(...arguments),this.open=!1,this.platform="mac",this.handleKeydown=i=>{(i.key==="Escape"||i.key==="?")&&(i.preventDefault(),this.handleClose())}}get isMac(){return this.platform==="mac"}get modKey(){return this.isMac?"⌘":"Ctrl"}get altKey(){return this.isMac?"⌥":"Alt"}get shiftKey(){return this.isMac?"⇧":"Shift"}getShortcutGroups(){return[{title:"Playback",shortcuts:[{key:"Space",description:"Play / Pause"},{key:"L",description:"Toggle Loop"},{key:"[",description:"Slower playback"},{key:"]",description:"Faster playback"}]},{title:"Navigation",shortcuts:[{key:"← / →",description:"Nudge clamp (100ms)"},{key:`${this.shiftKey}+← / →`,description:"Big nudge (500ms)"},{key:"Tab",description:"Switch selected clamp"},{key:`${this.altKey}+← / →`,description:"Prev / Next segment"}]},{title:"Segments",shortcuts:[{key:"Enter",description:"Confirm & Advance"},{key:`${this.modKey}+Enter`,description:"Skip segment"},{key:`${this.modKey}+S`,description:"Save progress"}]},{title:"Text Editing",shortcuts:[{key:"E",description:"Edit segment text"},{key:"Esc",description:"Cancel edit"},{key:`${this.modKey}+S`,description:"Save edit"}]},{title:"Transcription",shortcuts:[{key:`${this.modKey}+T`,description:"Transcribe full audio"},{key:`${this.altKey}+T`,description:"Transcribe segment"}]},{title:"Speakers",shortcuts:[{key:"1 / 2 / 3",description:"Assign speaker"},{key:"0",description:"Clear speaker"}]},{title:"View",shortcuts:[{key:"+ / -",description:"Zoom in / out"},{key:"\\",description:"Reset zoom"},{key:"?",description:"Show this help"}]},{title:"Audio",shortcuts:[{key:"N",description:"Toggle noise filter"}]}]}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}handleOverlayClick(i){i.target===i.currentTarget&&this.handleClose()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeydown)}render(){if(!this.open)return null;const i=this.getShortcutGroups();return Nt`
      <div class="overlay" @click=${this.handleOverlayClick}>
        <div class="modal">
          <div class="header">
            <div class="title">Keyboard Shortcuts</div>
            <button class="close-btn" @click=${this.handleClose}>✕</button>
          </div>

          <div class="groups">
            ${i.map(r=>Nt`
                <div class="group">
                  <div class="group-title">${r.title}</div>
                  <div class="shortcut-list">
                    ${r.shortcuts.map(n=>Nt`
                        <div class="shortcut">
                          <span class="shortcut-description">${n.description}</span>
                          <span class="shortcut-key">${n.key}</span>
                        </div>
                      `)}
                  </div>
                </div>
              `)}
          </div>

          <div class="footer">
            Press <kbd>?</kbd> or <kbd>Esc</kbd> to close
          </div>
        </div>
      </div>
    `}};Br.styles=nr`
    :host {
      display: none;
    }

    :host([open]) {
      display: block;
    }

    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(8px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fade-in 0.2s ease-out;
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal {
      background: var(--bg-secondary);
      border: 1px solid var(--border-primary);
      border-radius: var(--radius-xl);
      max-width: 700px;
      max-height: 80vh;
      overflow-y: auto;
      padding: var(--spacing-6);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
      animation: slide-up 0.3s ease-out;
    }

    @keyframes slide-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-5);
      padding-bottom: var(--spacing-3);
      border-bottom: 1px solid var(--border-primary);
    }

    .title {
      font-family: var(--font-ui);
      font-size: var(--text-xl);
      font-weight: 700;
      color: var(--text-primary);
    }

    .close-btn {
      background: none;
      border: none;
      color: var(--text-secondary);
      font-size: var(--text-lg);
      cursor: pointer;
      padding: var(--spacing-2);
      border-radius: var(--radius-sm);
      transition: all 0.2s;
    }

    .close-btn:hover {
      background: var(--bg-tertiary);
      color: var(--text-primary);
    }

    .groups {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-5);
    }

    @media (max-width: 600px) {
      .groups {
        grid-template-columns: 1fr;
      }
    }

    .group {
      background: var(--bg-tertiary);
      border-radius: var(--radius-lg);
      padding: var(--spacing-4);
    }

    .group-title {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      font-weight: 600;
      color: var(--accent-coral);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: var(--spacing-3);
    }

    .shortcut-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
    }

    .shortcut {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--spacing-3);
    }

    .shortcut-description {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-secondary);
      flex: 1;
    }

    .shortcut-key {
      font-family: var(--font-data);
      font-size: var(--text-xs);
      font-weight: 600;
      color: var(--text-primary);
      background: var(--bg-secondary);
      padding: var(--spacing-1) var(--spacing-2);
      border-radius: var(--radius-sm);
      border: 1px solid var(--border-primary);
      white-space: nowrap;
    }

    .footer {
      margin-top: var(--spacing-5);
      padding-top: var(--spacing-3);
      border-top: 1px solid var(--border-primary);
      text-align: center;
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-tertiary);
    }

    .footer kbd {
      font-family: var(--font-data);
      background: var(--bg-tertiary);
      padding: 2px 6px;
      border-radius: 3px;
      border: 1px solid var(--border-primary);
    }
  `;hi([Xt({type:Boolean,reflect:!0})],Br.prototype,"open",2);hi([Xt({type:String})],Br.prototype,"platform",2);Br=hi([ir("keyboard-help-overlay")],Br);const Qe={DEFAULT_DURATION:3,MIN_ADJUSTED_DURATION:.5,DEFAULT_ADVANCE:3,BOUNDARY_PROXIMITY_THRESHOLD:.1},un={SMALL:.1,LARGE:.5},Jn={CHARS_PER_SECOND:15},Qn={THRESHOLD_DB:-40,MIN_DURATION:.3,RMS_WINDOW:.05};function ca(i,r=Qn.THRESHOLD_DB,n=Qn.MIN_DURATION){const s=i.getChannelData(0),o=i.sampleRate,l=Math.floor(o*Qn.RMS_WINDOW),u=[];let d=!1,m=0;for(let b=0;b<s.length;b+=l){const _=Math.min(b+l,s.length);let w=0;for(let y=b;y<_;y++)w+=s[y]*s[y];const C=Math.sqrt(w/(_-b)),E=20*Math.log10(C)<r;if(E&&!d)d=!0,m=b;else if(!E&&d){d=!1;const y=(b-m)/o;y>=n&&u.push({start:m/o,end:b/o,duration:y})}}if(d){const b=(s.length-m)/o;b>=n&&u.push({start:m/o,end:s.length/o,duration:b})}return u}function ja(i,r){const{position:n,deleteCount:s,insertText:o}=r,l=o.length-s,u=i.evolvingHypothesis.slice(0,n),d=i.evolvingHypothesis.slice(n+s),m=u+o+d,_=i.segments.map(C=>To(C,n,s,l)).filter(C=>C.charEnd>C.charStart||C.isSkipped),w=i.activeSegment?Po(i.activeSegment,n,s,l):null;return{evolvingHypothesis:m,segments:_,activeSegment:w}}function To(i,r,n,s){const o=r+n;let{charStart:l,charEnd:u}=i;return r>=u?i:o<=l?{...i,charStart:l+s,charEnd:u+s}:r<l?(o>=l&&(l=r+(o>=u?0:s),o>=u?u=l:u=u+s),{...i,charStart:l,charEnd:u}):o<=u?{...i,charEnd:u+s}:{...i,charEnd:r+(s>0?s+n:0)}}function Po(i,r,n,s){const o=r+n;let{charStart:l,charEnd:u}=i;return r>=u?i:o<=l?{...i,charStart:l+s,charEnd:u+s}:r<l?(o>=l&&(l=r+(o>=u?0:s),o>=u?u=l:u=u+s),{...i,charStart:l,charEnd:u}):o<=u?{...i,charEnd:u+s}:{...i,charEnd:r+(s>0?s+n:0)}}function Oo(i,r,n){return{position:i,deleteCount:r,insertText:n}}function Ro(i){if(!i.activeSegment||i.activeSegment.draftText===null)return i;const{charStart:r,charEnd:n,draftText:s}=i.activeSegment,o=Oo(r,n-r,s),l=ja(i,o);return{...l,activeSegment:{...l.activeSegment,charEnd:r+s.length,draftText:null}}}function ti(i){return{evolvingHypothesis:i,segments:[],activeSegment:null}}function $o(i,r){return"draftText"in r&&r.draftText!==null?r.draftText:i.evolvingHypothesis.slice(r.charStart,r.charEnd)}function gr(i,r,n,s,o,l){return{...i,activeSegment:{id:l,audioStart:r,audioEnd:n,charStart:s,charEnd:o,draftText:null}}}function ua(i,r,n){return i.activeSegment?{...i,activeSegment:{...i.activeSegment,audioStart:r,audioEnd:n}}:i}function ei(i,r,n){return i.activeSegment?{...i,activeSegment:{...i.activeSegment,charStart:r,charEnd:n,draftText:null}}:i}function Io(i,r){return i.activeSegment?{...i,activeSegment:{...i.activeSegment,speaker:r}}:i}function Do(i){if(!i.activeSegment)return{state:i,segmentId:null};const r=i.activeSegment,n=r.id??crypto.randomUUID(),s={id:n,audioStart:r.audioStart,audioEnd:r.audioEnd,charStart:r.charStart,charEnd:r.charEnd,isSkipped:r.isSkipped,speaker:r.speaker};return{state:{...i,segments:[...i.segments,s],activeSegment:null},segmentId:n}}function ri(i){if(!i.activeSegment)return{state:i,segmentId:null};const r=Ro(i);return Do(r)}function da(i,r){return{...i,segments:i.segments.filter(n=>n.id!==r)}}function Re(i){const r=i.evolvingHypothesis.length;if(r===0)return{annotated:[],unannotated:[],coveragePercent:0};if(i.segments.length===0)return{annotated:[],unannotated:[{charStart:0,charEnd:r}],coveragePercent:0};const n=i.segments.map(d=>({charStart:d.charStart,charEnd:d.charEnd})).sort((d,m)=>d.charStart-m.charStart),s=zo(n),o=Bo(s,r),u=s.reduce((d,m)=>d+(m.charEnd-m.charStart),0)/r*100;return{annotated:s,unannotated:o,coveragePercent:u}}function zo(i){if(i.length===0)return[];const r=[];let n={...i[0]};for(let s=1;s<i.length;s++){const o=i[s];o.charStart<=n.charEnd?n.charEnd=Math.max(n.charEnd,o.charEnd):(r.push(n),n={...o})}return r.push(n),r}function Bo(i,r){const n=[];let s=0;for(const o of i)o.charStart>s&&n.push({charStart:s,charEnd:o.charStart}),s=o.charEnd;return s<r&&n.push({charStart:s,charEnd:r}),n}const Na=[{id:"pan-left",description:"Pan timeline left (1 second)",keys:["ArrowLeft"],browserSafe:!0,category:"navigation"},{id:"pan-right",description:"Pan timeline right (1 second)",keys:["ArrowRight"],browserSafe:!0,category:"navigation"},{id:"jump-next-segment",description:"Jump to next segment",keys:["Tab"],browserSafe:!0,category:"navigation"},{id:"jump-prev-segment",description:"Jump to previous segment",keys:["SHIFT","Tab"],browserSafe:!0,category:"navigation"},{id:"jump-start",description:"Jump to start of audio",keys:["Home"],browserSafe:!0,category:"navigation"},{id:"jump-end",description:"Jump to end of audio",keys:["End"],browserSafe:!0,category:"navigation"},{id:"play-pause",description:"Play/pause looped segment",keys:["Space"],browserSafe:!0,category:"playback"},{id:"toggle-loop",description:"Toggle loop playback",keys:["L"],browserSafe:!0,category:"playback"},{id:"toggle-edit-mode",description:"Toggle edit mode",keys:["ALT","E"],browserSafe:!0,category:"editing"},{id:"extend-segment",description:"Extend right clamp forward (0.1s)",keys:["]"],browserSafe:!0,category:"editing"},{id:"shrink-segment",description:"Shrink right clamp backward (0.1s)",keys:["["],browserSafe:!0,category:"editing"},{id:"confirm-segment",description:"Confirm segment and advance",keys:["Enter"],browserSafe:!0,category:"editing"},{id:"delete-segment",description:"Delete current segment",keys:["Backspace"],browserSafe:!0,category:"editing"},{id:"save-progress",description:"Save current progress",keys:["MOD","S"],browserSafe:!0,category:"editing"},{id:"skip-segment",description:"Skip current segment",keys:["CTRL","Enter"],browserSafe:!0,category:"editing"},{id:"zoom-in",description:"Zoom in",keys:["+"],browserSafe:!0,category:"zoom"},{id:"zoom-out",description:"Zoom out",keys:["-"],browserSafe:!0,category:"zoom"},{id:"zoom-reset",description:"Reset zoom to default",keys:["0"],browserSafe:!0,category:"zoom"},{id:"nudge-left",description:"Nudge selected clamp left",keys:["ArrowLeft"],browserSafe:!0,category:"editing"},{id:"nudge-right",description:"Nudge selected clamp right",keys:["ArrowRight"],browserSafe:!0,category:"editing"},{id:"navigate-prev",description:"Navigate to previous segment",keys:["ALT","ArrowLeft"],browserSafe:!0,category:"navigation"},{id:"navigate-next",description:"Navigate to next segment",keys:["ALT","ArrowRight"],browserSafe:!0,category:"navigation"},{id:"show-help",description:"Show keyboard shortcuts help",keys:["?"],browserSafe:!0,category:"view"},{id:"transcribe-full",description:"Transcribe full audio",keys:["CTRL","T"],browserSafe:!0,category:"editing"},{id:"transcribe-segment",description:"Transcribe current segment",keys:["ALT","T"],browserSafe:!0,category:"editing"},{id:"assign-speaker-1",description:"Assign speaker 1",keys:["1"],browserSafe:!0,category:"editing"},{id:"assign-speaker-2",description:"Assign speaker 2",keys:["2"],browserSafe:!0,category:"editing"},{id:"assign-speaker-3",description:"Assign speaker 3",keys:["3"],browserSafe:!0,category:"editing"},{id:"clear-speaker",description:"Clear speaker assignment",keys:["0"],browserSafe:!0,category:"editing"}];function ai(i,r){const n=Na.find(s=>s.id===i);if(n)return n.keys.map(s=>{switch(s){case"MOD":return r==="mac"?"Cmd":"Ctrl";case"ALT":return"Alt";case"SHIFT":return"Shift";case"CTRL":return"Ctrl";default:return s}})}function ha(i,r){const n=ai(i,r);return n?n.map(s=>{if(r==="mac")switch(s){case"Cmd":return"⌘";case"Shift":return"⇧";case"Alt":return"⌥";case"Ctrl":return"⌃";case"Enter":return"⏎";case"Backspace":return"⌫";case"ArrowLeft":return"←";case"ArrowRight":return"→";case"ArrowUp":return"↑";case"ArrowDown":return"↓";default:return s}return s}).join(r==="mac"?"":"+"):""}function Mo(){const i=navigator.userAgent.toLowerCase(),r=navigator.platform?.toLowerCase()||"";return r.includes("mac")||i.includes("mac")?"mac":r.includes("win")||i.includes("win")?"windows":r.includes("linux")||i.includes("linux")?"linux":"unknown"}function fa(i){return{" ":"Space","+":"Plus","-":"Minus","=":"Equal"}[i]||i}function jo(i,r){const n={Cmd:!1,Ctrl:!1,Shift:!1,Alt:!1};let s=null;for(const o of r)n.hasOwnProperty(o)?n[o]=!0:s=fa(o);if(s){const o=fa(i.key).toLowerCase(),l=s.toLowerCase();if(i.key==="Dead"){if(i.code.toLowerCase()!==`key${l}`)return!1}else if(o!==l)return!1}return!(n.Cmd&&!i.metaKey||n.Ctrl&&!i.ctrlKey||n.Shift&&!i.shiftKey||n.Alt&&!i.altKey)}function No(i){const r=i.composedPath(),n=s=>s?.tagName==="INPUT"||s?.tagName==="TEXTAREA"||s?.isContentEditable;if(r.length===0){const s=i.target;return!!s&&n(s)}return r.some(s=>n(s))}class Uo{constructor(){this.registrations=new Map,this.isEnabled=!0,this.isStarted=!1,this.platform=Mo(),this.boundHandler=this.handleKeyDown.bind(this)}getPlatform(){return this.platform}register(r,n){const s=Na.find(o=>o.id===r);if(!s){console.warn(`[KeyboardManager] Unknown shortcut ID: ${r}`);return}if(!s.browserSafe){console.warn(`[KeyboardManager] Shortcut "${r}" is not browser-safe and will not be registered`);return}this.registrations.set(r,{id:r,handler:n,definition:s})}unregister(r){this.registrations.delete(r)}start(r=window){this.isStarted||(r.addEventListener("keydown",this.boundHandler),this.isStarted=!0)}stop(r=window){this.isStarted&&(r.removeEventListener("keydown",this.boundHandler),this.isStarted=!1)}setEnabled(r){this.isEnabled=r}handleKeyDown(r){if(!this.isEnabled)return;const n=No(r),s=["save-progress","transcribe-segment"];for(const[o,l]of this.registrations.entries()){const u=ai(o,this.platform);if(u&&jo(r,u)){if(n&&!s.includes(o))continue;r.preventDefault(),r.stopPropagation();try{const d=l.handler(r);d instanceof Promise&&d.catch(m=>{console.error(`[KeyboardManager] Error in shortcut handler "${o}":`,m)})}catch(d){console.error(`[KeyboardManager] Error in shortcut handler "${o}":`,d)}break}}}getRegisteredShortcuts(){return Array.from(this.registrations.values())}getShortcutsByCategory(r){return Array.from(this.registrations.values()).filter(n=>n.definition.category===r)}getFormattedShortcut(r){const n=ai(r,this.platform);return n?n.map(s=>{if(this.platform==="mac")switch(s){case"Cmd":return"⌘";case"Shift":return"⇧";case"Alt":return"⌥";case"Ctrl":return"⌃";default:return s}return s}).join(this.platform==="mac"?"":"+"):""}destroy(r=window){this.stop(r),this.registrations.clear()}}const Vt=new Uo,Ua=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Lo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Fo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Ko=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ma=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,qo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;class Wo{constructor(){this.status="idle",this.playhead=0,this.loop=!1,this.duration=0,this.ctx=null,this.source=null,this.rafId=null,this._buffer=null,this.currentPlayStart=0,this.currentPlayEnd=0,this.playbackRate=1,this.anchorWallTime=0,this.anchorAudioTime=0}get buffer(){return this._buffer}async load(r){this.dispose(),this.ctx=new AudioContext;const n=await this.ctx.decodeAudioData(await r.arrayBuffer());this._buffer=n,this.duration=n.duration,this.playhead=0,this.onUpdate?.()}setPlaybackRate(r){if(this.ctx&&this.status==="playing"){const n=this.ctx.currentTime,s=n-this.anchorWallTime;this.anchorAudioTime+=s*this.playbackRate,this.anchorWallTime=n}this.source&&(this.source.playbackRate.value=r),this.playbackRate=r}getPlaybackRate(){return this.playbackRate}async playRange(r,n,s){if(!this.ctx||!this.buffer)return;this.ctx.state==="suspended"&&await this.ctx.resume(),this.stop(!1);const o=Math.max(0,Math.min(this.duration,r)),l=Math.max(o,Math.min(this.duration,n)),u=Math.max(.01,l-o);this.currentPlayStart=o,this.currentPlayEnd=l,this.loop=s,this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.ctx.destination),this.source.playbackRate.value=this.playbackRate,this.anchorWallTime=this.ctx.currentTime,this.anchorAudioTime=o,this.source.start(0,o,u),this.status="playing",this.playhead=r,this.onUpdate?.(),this.trackPlayhead(),this.source.onended=()=>{this.loop?this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop):(this.stop(!1),this.playhead=this.currentPlayEnd,this.onUpdate?.())}}pause(){this.stop()}setPlayRange(r,n){this.currentPlayStart=r,this.currentPlayEnd=n,this.playhead=r,this.onUpdate?.(),this.status==="playing"&&this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop)}setLoop(r){this.loop=r,this.onUpdate?.(),r&&this.status==="playing"&&this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop)}reset(){this.stop(),this.loop=!1,this.playhead=0,this.currentPlayStart=0,this.currentPlayEnd=0,this.onUpdate?.()}dispose(){this.stop(),this.ctx&&(this.ctx.close(),this.ctx=null),this._buffer=null,this.duration=0,this.currentPlayStart=0,this.currentPlayEnd=0}stop(r=!0){if(this.source){this.source.onended=null;try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=null,this.status="idle",r&&(this.playhead=this.currentPlayStart),this.onUpdate?.()}trackPlayhead(){if(!this.ctx)return;const r=this.ctx,n=()=>{if(this.ctx!==r||this.status!=="playing")return;const o=this.ctx.currentTime-this.anchorWallTime,l=this.anchorAudioTime+o*this.playbackRate;this.playhead=Math.min(l,this.currentPlayEnd),this.onUpdate?.(),this.rafId=requestAnimationFrame(n)};this.rafId=requestAnimationFrame(n)}}class Pr extends Error{constructor(r,n){super(r),this.code=n,this.name="TranscriptionError"}}class Ho{async transcribeSegment(r,n,s,o){const l=await this.extractAudioSegment(r,n,s);return(await this.transcribeAudio(l,o)).fullText}async extractAudioSegment(r,n,s){const o=await r.arrayBuffer(),l=new AudioContext,u=await l.decodeAudioData(o),d=u.sampleRate,m=Math.floor(n*d),_=Math.floor(s*d)-m,w=l.createBuffer(u.numberOfChannels,_,d);for(let v=0;v<u.numberOfChannels;v++){const E=u.getChannelData(v),y=w.getChannelData(v);for(let A=0;A<_;A++)y[A]=E[m+A]}const C=await this.audioBufferToWav(w);return await l.close(),C}async audioBufferToWav(r){const n=r.numberOfChannels,s=r.sampleRate,o=1,l=16,u=l/8,d=n*u,m=new Float32Array(r.length*n);for(let v=0;v<n;v++){const E=r.getChannelData(v);for(let y=0;y<r.length;y++)m[y*n+v]=E[y]}const b=m.length*u,_=new ArrayBuffer(44+b),w=new DataView(_);this.writeString(w,0,"RIFF"),w.setUint32(4,36+b,!0),this.writeString(w,8,"WAVE"),this.writeString(w,12,"fmt "),w.setUint32(16,16,!0),w.setUint16(20,o,!0),w.setUint16(22,n,!0),w.setUint32(24,s,!0),w.setUint32(28,s*d,!0),w.setUint16(32,d,!0),w.setUint16(34,l,!0),this.writeString(w,36,"data"),w.setUint32(40,b,!0);let C=44;for(let v=0;v<m.length;v++){const E=Math.max(-1,Math.min(1,m[v]));w.setInt16(C,E<0?E*32768:E*32767,!0),C+=2}return new Blob([_],{type:"audio/wav"})}writeString(r,n,s){for(let o=0;o<s.length;o++)r.setUint8(n+o,s.charCodeAt(o))}}class ga extends Ho{constructor(r){super(),this.name="Whisper.cpp",this.version="1.0.0",this.abortController=null,this.config={model:"base",language:"auto",temperature:0,timeout:3e4,...r}}async isAvailable(){try{return(await fetch(this.config.endpoint.replace("/inference","/health"),{method:"GET",signal:AbortSignal.timeout(5e3)})).ok}catch(r){return console.warn("[WhisperCppProvider] Server not available:",r),!1}}async transcribeAudio(r,n){this.abortController=new AbortController,n?.onProgress?.({status:"processing",progress:10,message:"Uploading audio to Whisper.cpp server..."});try{const s=await this.ensureWavFormat(r),o=new FormData;o.append("file",s,"audio.wav");const l=n?.language||this.config.language;l&&(o.append("language",l),l!=="en"&&l!=="auto"&&o.append("task","transcribe")),o.append("response_format","json"),this.config.temperature!==void 0&&o.append("temperature",this.config.temperature.toString()),this.config.model&&o.append("model",this.config.model),n?.onProgress?.({status:"processing",progress:30,message:"Transcribing with Whisper.cpp..."});const u=Date.now(),d=await fetch(this.config.endpoint,{method:"POST",body:o,signal:this.abortController.signal});if(!d.ok){const _=await d.text();throw new Pr(`Whisper.cpp server error: ${d.status} - ${_}`,d.status===401?"unauthorized":"api_error")}n?.onProgress?.({status:"processing",progress:90,message:"Processing transcription..."});const m=await d.json(),b=Date.now()-u;return n?.onProgress?.({status:"completed",progress:100,message:"Transcription complete"}),{fullText:m.text.trim(),segments:m.segments?.map(_=>({id:`whisper-${_.id}`,text:_.text.trim(),start:_.start,end:_.end,confidence:_.no_speech_prob!==void 0?1-_.no_speech_prob:void 0})),language:m.language,duration:b}}catch(s){if(n?.onProgress?.({status:"error",message:s instanceof Error?s.message:"Transcription failed"}),s instanceof Pr)throw s;if(s instanceof Error){if(s.name==="AbortError")throw new Pr("Transcription cancelled","timeout");if(s.message.includes("fetch"))throw new Pr("Failed to connect to Whisper.cpp server. Is it running?","network_error")}throw new Pr(`Transcription failed: ${s instanceof Error?s.message:"Unknown error"}`,"unknown")}finally{this.abortController=null}}cancel(){this.abortController&&(this.abortController.abort(),this.abortController=null)}async ensureWavFormat(r){if(r.type==="audio/wav"||r.type==="audio/wave")return r;const n=await r.arrayBuffer(),s=new AudioContext,o=await s.decodeAudioData(n),l=await this.audioBufferToWav(o);return await s.close(),l}}const va={provider:"manual",autoTranscribe:!1,whisperCpp:{endpoint:"http://localhost:8080/inference",model:"base",language:"auto",temperature:0,timeout:3e4},openai:{apiKey:"",model:"whisper-1",language:"en",timeout:6e4},assemblyai:{apiKey:"",languageCode:"en",timeout:12e4},custom:{endpoint:"",headers:{},timeout:3e4}},Zo="sonicceeper-transcription-config";function ya(){try{const i=localStorage.getItem(Zo);if(i)return{...va,...JSON.parse(i)}}catch(i){console.warn("[TranscriptionConfig] Failed to load config:",i)}return va}var Vo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,Qt=(i,r,n,s)=>{for(var o=s>1?void 0:s?Yo(r,n):r,l=i.length-1,u;l>=0;l--)(u=i[l])&&(o=(s?u(r,n,o):u(o))||o);return s&&o&&Vo(r,n,o),o};let Gt=class extends Se{constructor(){super(...arguments),this.audioBlob=null,this.recordingId="",this.initialData=null,this.annotationState=ti(""),this.textCoverage={annotated:[],unannotated:[],coveragePercent:0},this.keyboardMode="normal",this.selectedClamp="right",this.centerCharIndex=0,this.showKeyboardHelp=!1,this.duration=0,this.isPlaying=!1,this.loop=!1,this.playhead=0,this.playbackRate=1,this.showConfirmReset=!1,this.visualMode="classic",this.saveStatus="idle",this.showTranscriptionModal=!1,this.transcriptionProgress={status:"pending"},this.transcriptionLanguage="auto",this.transcriptionProvider=null,this.controller=null}connectedCallback(){super.connectedCallback(),this.registerShortcuts(),Vt.start(window)}async firstUpdated(){this.audioBlob&&await this.loadAudio()}disconnectedCallback(){super.disconnectedCallback(),Vt.destroy(window),this.controller?.dispose(),this.controller=null}registerShortcuts(){Vt.register("play-pause",()=>this.handlePlayPause()),Vt.register("toggle-loop",()=>this.handleLoopToggle()),Vt.register("toggle-edit-mode",()=>this.enterEditMode()),Vt.register("confirm-segment",()=>{const i=this.annotationState.activeSegment;i&&i.charEnd>i.charStart&&this.handleComplete()}),Vt.register("save-progress",()=>this.handleSave()),Vt.register("skip-segment",()=>this.handleSkip()),Vt.register("nudge-left",i=>{const r=i.shiftKey?un.LARGE:un.SMALL;this.nudgeSelectedClamp(-1,r)}),Vt.register("nudge-right",i=>{const r=i.shiftKey?un.LARGE:un.SMALL;this.nudgeSelectedClamp(1,r)}),Vt.register("jump-next-segment",()=>{this.selectedClamp=this.selectedClamp==="left"?"right":"left",this.requestUpdate()}),Vt.register("navigate-prev",()=>this.handleNavigate(-1)),Vt.register("navigate-next",()=>this.handleNavigate(1)),Vt.register("zoom-in",()=>this.stageWaveform?.zoomIn()),Vt.register("zoom-out",()=>this.stageWaveform?.zoomOut()),Vt.register("zoom-reset",()=>this.stageWaveform?.resetZoom()),Vt.register("show-help",()=>this.toggleKeyboardHelp()),Vt.register("transcribe-full",()=>this.handleTranscribeRequest()),Vt.register("transcribe-segment",()=>this.handleTranscribeSegment()),Vt.register("assign-speaker-1",()=>this.assignSpeaker(1)),Vt.register("assign-speaker-2",()=>this.assignSpeaker(2)),Vt.register("assign-speaker-3",()=>this.assignSpeaker(3)),Vt.register("clear-speaker",()=>this.assignSpeaker(void 0))}toggleKeyboardHelp(){this.showKeyboardHelp=!this.showKeyboardHelp}handleKeyboardHelpClose(){this.showKeyboardHelp=!1}handleNavigate(i){const r=this.annotationState.activeSegment;if(!r)return;const n=[...this.annotationState.segments].sort((o,l)=>o.audioStart-l.audioStart);let s;if(i===1?s=n.find(o=>o.audioStart>r.audioStart+.01):s=[...n].reverse().find(o=>o.audioStart<r.audioStart-.01),s){let o=this._autoCommitActiveSegment(this.annotationState);const l=o.segments.find(u=>u.id===s.id);l&&(this.annotationState=this._liftSegmentToActive(l,o),this.requestUpdate())}}async loadAudio(){this.controller?.dispose(),this.controller=new Wo,this.controller.onUpdate=()=>{this.playhead=this.controller.playhead,this.isPlaying=this.controller.status==="playing",this.loop=this.controller.loop,this.isPlaying&&this.autoScrollToPlayhead(),this.requestUpdate()},await this.controller.load(this.audioBlob),this.duration=this.controller.duration;const i=this.initialData?.fullText||"";let r=ti(i),n=0,s=0;if(this.initialData?.segments&&Array.isArray(this.initialData.segments)){const m=this.initialData.segments.map(b=>({id:b.id||crypto.randomUUID(),audioStart:b.start??b.audioStart??0,audioEnd:b.end??b.audioEnd??0,charStart:b.textStartIdx??b.charStart??0,charEnd:b.textEndIdx??b.charEnd??0,isSkipped:b.isSkipped??!1,speaker:b.speaker??void 0}));if(r={...r,segments:m},m.length>0){const b=m[m.length-1];n=b.audioEnd,s=b.charEnd}}let o=Math.min(this.duration,n+Qe.DEFAULT_DURATION);if(this.controller.buffer){const b=ca(this.controller.buffer).find(_=>_.start>n+Qe.BOUNDARY_PROXIMITY_THRESHOLD);b&&(o=b.start)}const l=Math.max(Qe.MIN_ADJUSTED_DURATION,o-n),u=Math.round(l*Jn.CHARS_PER_SECOND),d=Math.min(i.length,s+u);r=gr(r,n,o,s,d),this.annotationState=r,this.textCoverage=Re(r),this.playhead=n,this.keyboardMode="normal",this.selectedClamp="right",this.requestUpdate()}handleSpeedChange(i){const r=parseFloat(i.target.value);this.playbackRate=r,this.controller&&this.controller.setPlaybackRate(r)}handleStageClampChange(i){const{left:r,right:n}=i.detail;this.annotationState.activeSegment&&(this.annotationState=ua(this.annotationState,r,n),this.controller?.setPlayRange(r,n),this.requestUpdate())}handleClampSelect(i){const{which:r}=i.detail;this.selectedClamp=r,this.requestUpdate()}handleSeek(i){const{time:r}=i.detail;this.playhead=r;const n=this.annotationState.activeSegment;n&&r>=n.audioStart&&r<n.audioEnd&&(this.centerCharIndex=Math.floor((n.charStart+n.charEnd)/2)),this.requestUpdate()}handleSegmentEditRequest(i){const{segment:r}=i.detail;if(!r||!this.annotationState.segments.find(l=>l.audioStart===r.start&&l.audioEnd===r.end))return;let s=this._autoCommitActiveSegment(this.annotationState);const o=s.segments.find(l=>l.audioStart===r.start&&l.audioEnd===r.end);o&&(this.annotationState=this._liftSegmentToActive(o,s),this.playhead=o.audioStart),this.requestUpdate()}_liftSegmentToActive(i,r){let n=da(r,i.id);return n=gr(n,i.audioStart,i.audioEnd,i.charStart,i.charEnd,i.id),this.textCoverage=Re(n),this.centerCharIndex=Math.floor((i.charStart+i.charEnd)/2),this.controller&&this.controller.playRange(i.audioStart,i.audioEnd,this.loop),n}handleStageViewportChange(i){}handleTextSelectionChange(i){const{charStart:r,charEnd:n}=i.detail;this.annotationState.activeSegment&&(this.annotationState=ei(this.annotationState,r,n),this.requestUpdate())}handleTextEdit(i){const r=i.detail;this.annotationState=ja(this.annotationState,r),this.textCoverage=Re(this.annotationState),this.requestUpdate()}handleTextModeChange(i){const{mode:r}=i.detail;this.keyboardMode=r==="edit"?"edit":"normal",this.requestUpdate()}syncFromController(){this.controller&&(this.playhead=this.controller.playhead,this.isPlaying=this.controller.status==="playing",this.loop=this.controller.loop,this.isPlaying&&this.autoScrollToPlayhead())}async handlePlayPause(){if(!this.controller)return;const i=this.annotationState.activeSegment;i&&(this.isPlaying?this.controller.pause():await this.controller.playRange(i.audioStart,i.audioEnd,this.loop))}handleLoopToggle(){this.controller&&this.controller.setLoop(!this.loop)}_autoCommitActiveSegment(i){const r=i.activeSegment;if(!r||r.charEnd<=r.charStart)return i;const{state:n}=ri(i);return this.textCoverage=Re(n),n}_advanceToNextSegment(i,r,n){let s=r,o=Math.min(this.duration,s+Qe.DEFAULT_ADVANCE);if(this.controller?.buffer){const C=ca(this.controller.buffer).find(v=>v.start>r+Qe.BOUNDARY_PROXIMITY_THRESHOLD);C&&(o=C.start)}const l=Math.max(Qe.MIN_ADJUSTED_DURATION,o-s),u=Math.round(l*Jn.CHARS_PER_SECOND),d=n,m=Math.min(i.evolvingHypothesis.length,d+u),b=i.segments.find(w=>Math.abs(w.audioStart-s)<Qe.BOUNDARY_PROXIMITY_THRESHOLD);let _;if(b){const w=da(i,b.id);_=gr(w,b.audioStart,b.audioEnd,b.charStart,b.charEnd,b.id),o=b.audioEnd}else _=gr(i,s,o,d,m);return{newState:_,newAudioEnd:o}}handleSkip(){const i=this.annotationState.activeSegment;if(!i)return;const r={...this.annotationState,activeSegment:{...i,isSkipped:!0,charEnd:i.charStart}},{state:n,segmentId:s}=ri(r);if(!s)return;this.dispatchEvent(new CustomEvent("annotation-complete",{detail:{annotations:n.segments,fullText:n.evolvingHypothesis},bubbles:!0,composed:!0}));const{newState:o,newAudioEnd:l}=this._advanceToNextSegment(n,i.audioEnd,i.charStart);this.annotationState=o,this.textCoverage=Re(o),this.playhead=o.activeSegment?.audioStart??0,this.selectedClamp="right",this.controller&&this.controller.playRange(o.activeSegment?.audioStart??0,l,this.loop),this.requestUpdate()}handleSave(){this.saveStatus="saving",this.dispatchEvent(new CustomEvent("progress-saved",{detail:{annotations:this.annotationState.segments,fullText:this.annotationState.evolvingHypothesis},bubbles:!0,composed:!0})),setTimeout(()=>{this.saveStatus="saved",this.requestUpdate(),setTimeout(()=>{this.saveStatus="idle",this.requestUpdate()},2e3)},500)}handleComplete(){const i=this.annotationState.activeSegment;if(!i)return;let{state:r,segmentId:n}=ri(this.annotationState);if(!n)return;this.dispatchEvent(new CustomEvent("annotation-complete",{detail:{annotations:r.segments,fullText:r.evolvingHypothesis},bubbles:!0,composed:!0}));const{newState:s,newAudioEnd:o}=this._advanceToNextSegment(r,i.audioEnd,i.charEnd);this.annotationState=s,this.textCoverage=Re(s),this.playhead=s.activeSegment?.audioStart??0,this.keyboardMode="normal",this.selectedClamp="right",this.controller&&this.controller.playRange(s.activeSegment?.audioStart??0,o,this.loop),this.requestUpdate()}startOver(){this.showConfirmReset=!0}confirmReset(){this.showConfirmReset=!1;const i=ti(""),r=gr(i,0,Math.min(3,this.duration),0,0);this.annotationState=r,this.textCoverage=Re(r),this.keyboardMode="normal",this.selectedClamp="right",this.playhead=0,this.controller&&(this.controller.reset(),this.syncFromController()),this.requestUpdate()}cancelReset(){this.showConfirmReset=!1}autoScrollToPlayhead(){}formatTime(i){return i.toFixed(2)+"s"}enterEditMode(){this.keyboardMode="edit",this.requestUpdate()}handleTranscribeRequest(){this.showTranscriptionModal=!0,this.transcriptionProgress={status:"pending"},this.requestUpdate()}async startTranscription(){if(!this.audioBlob){console.error("[Transcription] No audio blob available");return}if(!this.transcriptionProvider){const r=ya();this.transcriptionProvider=new ga({endpoint:r.whisperCpp?.endpoint??"http://localhost:8080/inference",model:r.whisperCpp?.model,language:this.transcriptionLanguage,temperature:r.whisperCpp?.temperature,timeout:r.whisperCpp?.timeout})}if(!await this.transcriptionProvider.isAvailable()){this.transcriptionProgress={status:"error",message:"Whisper.cpp server not available. Is it running at localhost:8080?"},this.requestUpdate();return}try{const r=await this.transcriptionProvider.transcribeAudio(this.audioBlob,{language:this.transcriptionLanguage,onProgress:s=>{this.transcriptionProgress=s,this.requestUpdate()}});this.annotationState={...this.annotationState,evolvingHypothesis:r.fullText};const n=this.annotationState.activeSegment;if(n&&r.segments&&r.segments.length>0){const s=r.segments[0];this.annotationState=gr(this.annotationState,s.start,s.end,0,s.text.length)}else if(n){const s=Math.min(r.fullText.length,Math.round((n.audioEnd-n.audioStart)*Jn.CHARS_PER_SECOND));this.annotationState=ei(this.annotationState,0,s)}this.textCoverage=Re(this.annotationState),setTimeout(()=>{this.showTranscriptionModal=!1,this.transcriptionProgress={status:"pending"},this.requestUpdate()},1e3)}catch(r){console.error("[Transcription] Error:",r),this.transcriptionProgress={status:"error",message:r instanceof Error?r.message:"Transcription failed"},this.requestUpdate()}}cancelTranscription(){this.transcriptionProvider?.cancel?.(),this.showTranscriptionModal=!1,this.transcriptionProgress={status:"pending"},this.requestUpdate()}handleLanguageChange(i){this.transcriptionLanguage=i.target.value}assignSpeaker(i){this.annotationState.activeSegment&&(this.annotationState=Io(this.annotationState,i),this.requestUpdate(),console.log(`[Annotation] Speaker ${i??"cleared"} assigned`))}async handleTranscribeSegment(){const i=this.annotationState.activeSegment;if(!i||!this.audioBlob){console.warn("[Transcription] No active segment or audio");return}if(this.transcriptionProgress={status:"processing",progress:10,message:"Transcribing segment..."},this.requestUpdate(),!this.transcriptionProvider){const n=ya();this.transcriptionProvider=new ga({endpoint:n.whisperCpp?.endpoint??"http://localhost:8080/inference",model:n.whisperCpp?.model,language:this.transcriptionLanguage,temperature:n.whisperCpp?.temperature,timeout:n.whisperCpp?.timeout})}if(!await this.transcriptionProvider.isAvailable()){this.transcriptionProgress={status:"error",message:"Whisper.cpp server not available"},setTimeout(()=>{this.transcriptionProgress={status:"pending"},this.requestUpdate()},3e3);return}try{const n=await this.transcriptionProvider.transcribeSegment(this.audioBlob,i.audioStart,i.audioEnd,{language:this.transcriptionLanguage,onProgress:m=>{this.transcriptionProgress=m,this.requestUpdate()}}),s=this.annotationState.evolvingHypothesis,o=s.slice(0,i.charStart),l=s.slice(i.charEnd),u=o+n+l;this.annotationState={...this.annotationState,evolvingHypothesis:u};const d=i.charStart+n.length;this.annotationState=ei(this.annotationState,i.charStart,d),this.textCoverage=Re(this.annotationState),this.transcriptionProgress={status:"completed",progress:100,message:"Segment transcribed!"},setTimeout(()=>{this.transcriptionProgress={status:"pending"},this.requestUpdate()},2e3)}catch(n){console.error("[Transcription] Segment error:",n),this.transcriptionProgress={status:"error",message:n instanceof Error?n.message:"Transcription failed"},setTimeout(()=>{this.transcriptionProgress={status:"pending"},this.requestUpdate()},3e3)}}renderTranscriptionModal(){if(!this.showTranscriptionModal)return null;const i=this.transcriptionProgress.status==="processing",r=this.transcriptionProgress.status==="error",n=this.transcriptionProgress.status==="completed";return Nt`
      <div class="overlay">
        <div class="modal transcription-modal">
          <div class="modal-title">
            ${ie(ma)}
            <span>Transcribe Audio</span>
          </div>

          ${r?Nt`
            <div class="error-message">
              ${this.transcriptionProgress.message??"An error occurred"}
            </div>
          `:null}

          ${!i&&!n?Nt`
            <div class="form-group">
              <label for="languageSelect">Language</label>
              <select id="languageSelect" @change=${this.handleLanguageChange}>
                <option value="auto" ?selected=${this.transcriptionLanguage==="auto"}>Auto-detect</option>
                <option value="en" ?selected=${this.transcriptionLanguage==="en"}>English</option>
                <option value="hi" ?selected=${this.transcriptionLanguage==="hi"}>Hindi</option>
                <option value="es" ?selected=${this.transcriptionLanguage==="es"}>Spanish</option>
                <option value="fr" ?selected=${this.transcriptionLanguage==="fr"}>French</option>
                <option value="de" ?selected=${this.transcriptionLanguage==="de"}>German</option>
                <option value="ja" ?selected=${this.transcriptionLanguage==="ja"}>Japanese</option>
                <option value="zh" ?selected=${this.transcriptionLanguage==="zh"}>Chinese</option>
              </select>
            </div>

            <div style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--spacing-3);">
              Requires whisper.cpp server at localhost:8080
            </div>
          `:null}

          ${i||n?Nt`
            <div class="progress-container">
              <div class="progress-status">
                ${i?Nt`
                  <span class="spinner">${ie(qo)}</span>
                  <span>Transcribing...</span>
                `:Nt`
                  ${ie(pa)}
                  <span>Complete!</span>
                `}
              </div>
              <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${this.transcriptionProgress.progress??0}%"></div>
              </div>
              ${this.transcriptionProgress.message?Nt`
                <div class="progress-message">${this.transcriptionProgress.message}</div>
              `:null}
            </div>
          `:null}

          <div class="footer-actions" style="justify-content: flex-end;">
            <button class="btn" @click=${this.cancelTranscription} ?disabled=${i}>
              ${n?"Close":"Cancel"}
            </button>
            ${!i&&!n?Nt`
              <button class="btn primary" @click=${this.startTranscription}>
                ${ie(ma)}
                <span>Start Transcription</span>
              </button>
            `:null}
          </div>
        </div>
      </div>
    `}nudgeSelectedClamp(i,r){const n=this.annotationState.activeSegment;if(!n)return;const s=i*r;let o=n.audioStart,l=n.audioEnd;if(this.selectedClamp==="left"){if(o=Math.max(0,n.audioStart+s),o>=l-.1)return}else if(l=Math.min(this.duration,n.audioEnd+s),l<=o+.1)return;this.annotationState=ua(this.annotationState,o,l),this.controller?.setPlayRange(o,l),this.requestUpdate()}renderConfirmModal(){return this.showConfirmReset?Nt`
      <div class="overlay">
        <div class="modal">
          <div style="font-size: var(--text-lg); font-weight: var(--font-bold); margin-bottom: var(--spacing-2);">
            Start over?
          </div>
          <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--spacing-3);">
            This will stop playback, turn off loop, clear the text, and reset clamps.
          </div>
          <div class="footer-actions" style="justify-content: flex-end;">
            <button class="btn" @click=${this.cancelReset}>Cancel</button>
            <button class="btn primary" @click=${this.confirmReset}>Confirm</button>
          </div>
        </div>
      </div>
    `:null}render(){const i=this.annotationState.activeSegment,r=i?.audioStart??0,n=i?.audioEnd??0,s=i?.charStart??0,o=i?.charEnd??0,l=i?$o(this.annotationState,i):"",u=this.annotationState.segments.filter(_=>!_.isSkipped).map(_=>({start:_.audioStart,end:_.audioEnd})),d=this.annotationState.segments.map(_=>({charStart:_.charStart,charEnd:_.charEnd})),m=this.textCoverage.unannotated,b=this.keyboardMode==="edit"?"edit":"navigate";return Nt`
      <div class="page">
        <div class="header">
          <div class="title">Audio-Text Alignment</div>
          <div class="stats">
            <span>Segment: ${this.formatTime(r)} → ${this.formatTime(n)}</span>
            <span>Length: ${this.formatTime(n-r)}</span>
            <span>Duration: ${this.formatTime(this.duration)}</span>
            <span>Coverage: ${this.textCoverage.coveragePercent.toFixed(0)}%</span>
          </div>
        </div>

        <div class="stage-audio">
          <stage-waveform
            .audioBuffer=${this.audioBlob?this.controller?.buffer??null:null}
            .leftClamp=${r}
            .rightClamp=${n}
            .playhead=${this.playhead}
            .visualMode=${this.visualMode}
            .isPlaying=${this.isPlaying}
            .selectedClamp=${this.selectedClamp}
            .committedSegments=${u}
            @clamp-change=${this.handleStageClampChange}
            @clamp-select=${this.handleClampSelect}
            @seek=${this.handleSeek}
            @segment-edit-request=${this.handleSegmentEditRequest}
            @viewport-change=${this.handleStageViewportChange}
          ></stage-waveform>
        </div>

        <div class="controls">
          <button class="btn" @click=${this.handlePlayPause}>
            ${ie(this.isPlaying?Lo:Ua)}
            <span>${this.isPlaying?"Pause":"Play"}</span>
          </button>
          <button class="btn" @click=${this.handleLoopToggle} ?aria-pressed=${this.loop}>
            ${ie(Fo)}
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
            <select id="visualModeSelect" @change=${_=>this.visualMode=_.target.value}>
              <option value="classic" ?selected=${this.visualMode==="classic"}>Classic</option>
              <option value="neon" ?selected=${this.visualMode==="neon"}>Neon Pulse</option>
              <option value="mirror" ?selected=${this.visualMode==="mirror"}>Mirrored</option>
            </select>
          </div>
        </div>

        <div class="stage-text">
          <div class="text-header">
            <div class="title" style="font-size: var(--text-base);">Segment Text</div>
            ${this.keyboardMode==="edit"?Nt`<span style="font-size: var(--text-sm); color: var(--accent-coral); font-weight: 600;">
                  EDITING (Esc to exit)
                </span>`:null}
          </div>

          <smoked-glass-text
            .text=${this.annotationState.evolvingHypothesis}
            .charStart=${s}
            .charEnd=${o}
            .centerCharIndex=${this.centerCharIndex}
            .committedRanges=${d}
            .unannotatedRanges=${m}
            .mode=${b}
            .editShortcut=${ha("toggle-edit-mode",Vt.getPlatform())}
            .transcribeShortcut=${ha("transcribe-full",Vt.getPlatform())}
            @selection-change=${this.handleTextSelectionChange}
            @text-edit=${this.handleTextEdit}
            @mode-change=${this.handleTextModeChange}
            @edit-request=${this.enterEditMode}
            @transcribe-request=${this.handleTranscribeRequest}
          ></smoked-glass-text>
        </div>

        <div class="footer">
          <div>${this.formatTime(n-r)} segment</div>
          <div class="footer-actions">
            <button class="btn" @click=${this.handleSkip} title="Skip audio region (don't commit text)">
              <span>Skip</span>
            </button>
            <button class="btn" @click=${this.handleSave}>
              ${ie(Ko)}
              <span>${this.saveStatus==="saved"?"Saved ✓":this.saveStatus==="saving"?"Saving...":"Save Progress"}</span>
            </button>
            <button class="btn primary" @click=${this.handleComplete} ?disabled=${!l.trim()}>
              ${ie(pa)}
              <span>Confirm & Next</span>
            </button>
          </div>
        </div>

        ${this.renderConfirmModal()}
        ${this.renderTranscriptionModal()}

        <keyboard-help-overlay
          ?open=${this.showKeyboardHelp}
          .platform=${Vt.getPlatform()}
          @close=${this.handleKeyboardHelpClose}
        ></keyboard-help-overlay>
      </div>
    `}};Gt.styles=nr`
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

    .text-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-actions {
      display: flex;
      gap: var(--spacing-2);
    }

    /* Transcription Modal */
    .transcription-modal {
      min-width: 400px;
      max-width: 500px;
    }

    .transcription-modal .modal-title {
      font-size: var(--text-lg);
      font-weight: var(--font-bold);
      margin-bottom: var(--spacing-3);
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }

    .transcription-modal .modal-title svg {
      width: 20px;
      height: 20px;
      stroke: var(--accent-coral);
    }

    .transcription-modal .form-group {
      margin-bottom: var(--spacing-3);
    }

    .transcription-modal label {
      display: block;
      font-size: var(--text-sm);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-1);
    }

    .transcription-modal select {
      width: 100%;
      padding: var(--spacing-2);
      font-size: var(--text-sm);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      background: var(--bg-input);
      color: var(--text-primary);
    }

    .transcription-modal .progress-container {
      padding: var(--spacing-3);
      background: var(--bg-surface);
      border-radius: var(--radius-md);
      margin-bottom: var(--spacing-3);
    }

    .transcription-modal .progress-status {
      font-size: var(--text-sm);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-2);
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }

    .transcription-modal .progress-bar {
      height: 4px;
      background: var(--bg-input);
      border-radius: var(--radius-xs);
      overflow: hidden;
    }

    .transcription-modal .progress-bar-fill {
      height: 100%;
      background: var(--accent-coral);
      transition: width 0.3s ease;
    }

    .transcription-modal .progress-message {
      font-size: var(--text-xs);
      color: var(--text-tertiary);
      margin-top: var(--spacing-2);
    }

    .transcription-modal .error-message {
      color: var(--accent-coral);
      font-size: var(--text-sm);
      padding: var(--spacing-2);
      background: rgba(255, 107, 107, 0.1);
      border-radius: var(--radius-md);
      margin-bottom: var(--spacing-3);
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .spinner {
      animation: spin 1s linear infinite;
    }
  `;Qt([Xt({type:Object})],Gt.prototype,"audioBlob",2);Qt([Xt({type:String})],Gt.prototype,"recordingId",2);Qt([Xt({type:Object})],Gt.prototype,"initialData",2);Qt([Ft()],Gt.prototype,"annotationState",2);Qt([Ft()],Gt.prototype,"textCoverage",2);Qt([Ft()],Gt.prototype,"keyboardMode",2);Qt([Ft()],Gt.prototype,"selectedClamp",2);Qt([Ft()],Gt.prototype,"centerCharIndex",2);Qt([Ft()],Gt.prototype,"showKeyboardHelp",2);Qt([Ft()],Gt.prototype,"duration",2);Qt([Ft()],Gt.prototype,"isPlaying",2);Qt([Ft()],Gt.prototype,"loop",2);Qt([Ft()],Gt.prototype,"playhead",2);Qt([Ft()],Gt.prototype,"playbackRate",2);Qt([Ft()],Gt.prototype,"showConfirmReset",2);Qt([Ft()],Gt.prototype,"visualMode",2);Qt([Ft()],Gt.prototype,"saveStatus",2);Qt([Ft()],Gt.prototype,"showTranscriptionModal",2);Qt([Ft()],Gt.prototype,"transcriptionProgress",2);Qt([Ft()],Gt.prototype,"transcriptionLanguage",2);Qt([Ca("stage-waveform")],Gt.prototype,"stageWaveform",2);Gt=Qt([ir("annotation-workflow")],Gt);const Go=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Xo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Jo=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,fi=(i,r,n,s)=>{for(var o=s>1?void 0:s?Qo(r,n):r,l=i.length-1,u;l>=0;l--)(u=i[l])&&(o=(s?u(r,n,o):u(o))||o);return s&&o&&Jo(r,n,o),o};let Mr=class extends Se{constructor(){super(...arguments),this.recording=null,this.existingAnnotation=null}toExportSegments(i,r){return i.map(n=>{const s=n.start??n.audioStart??0,o=n.end??n.audioEnd??0,l=n.charStart??n.textStartIdx??0,u=n.charEnd??n.textEndIdx??0,d=r.slice(l,u);return{id:n.id??crypto.randomUUID(),text:d,start:s,end:o,isSkipped:n.isSkipped??!1,speaker:n.speaker??void 0}})}async connectedCallback(){super.connectedCallback(),this.recording?.isAnnotated&&(this.existingAnnotation=await Rr(this.recording.id)||null)}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async handleStartOver(){!this.recording||!confirm("Are you sure you want to start over? This will delete all current annotations.")||(await Qs(this.recording.id),this.existingAnnotation=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("annotation-reset",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})))}async handleAnnotationComplete(i){if(!this.recording)return;const{annotations:r,fullText:n}=i.detail,s=this.toExportSegments(r,n),o={recordingId:this.recording.id,fullText:n,segments:s,completedAt:Date.now(),updatedAt:Date.now()};await Gn(o),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0}))}async handleAnnotationSaved(i){if(!this.recording)return;const{allAnnotations:r,fullText:n}=i.detail,s=await Rr(this.recording.id);if(s){const o=n??s.fullText??"";s.segments=this.toExportSegments(r,o),s.fullText=o,s.updatedAt=Date.now(),await Gn(s)}}async handleProgressSaved(i){if(!this.recording)return;const{annotations:r,fullText:n}=i.detail;let s=await Rr(this.recording.id);const o=n??s?.fullText??"",l=this.toExportSegments(r,o);s?(s.segments=l,s.fullText=o,s.updatedAt=Date.now()):s={recordingId:this.recording.id,fullText:o,segments:l,completedAt:0,updatedAt:Date.now()},await Gn(s)}render(){return this.recording?Nt`
      <div class="modal-header">
        <div class="title-section">
          <div class="modal-title">Annotating: ${this.recording.title}</div>
          <div class="subtitle">
            Duration: ${this.recording.duration.toFixed(2)}s |
            Source: ${this.recording.source}
          </div>
        </div>

        <div class="header-actions">
          ${this.existingAnnotation?Nt`
                <button
                  class="header-btn danger"
                  @click=${this.handleStartOver}
                  title="Delete all annotations and start over"
                >
                  ${ie(Xo)}
                  <span>Start Over</span>
                </button>
              `:null}

          <button
            class="header-btn"
            @click=${this.handleClose}
            title="Close without saving"
          >
            ${ie(Go)}
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
    `:Nt`<div>No recording selected</div>`}};Mr.styles=nr`
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
  `;fi([Xt({type:Object})],Mr.prototype,"recording",2);fi([Ft()],Mr.prototype,"existingAnnotation",2);Mr=fi([ir("annotation-modal")],Mr);const tl=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,el=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,rl=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,nl=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,il=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ba=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,al=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,sl=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var ol=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,ar=(i,r,n,s)=>{for(var o=s>1?void 0:s?ll(r,n):r,l=i.length-1,u;l>=0;l--)(u=i[l])&&(o=(s?u(r,n,o):u(o))||o);return s&&o&&ol(r,n,o),o};let Ie=class extends Se{constructor(){super(...arguments),this.recordings=[],this.isRecording=!1,this.recordingDuration=0,this.selectedRecording=null,this.isModalOpen=!1,this.isAboutOpen=!1,this.microphoneService=null,this.mediaRecorderService=null,this.recordingTimer=null}async connectedCallback(){super.connectedCallback(),await this.loadRecordings()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async loadRecordings(){this.recordings=await Ta()}async startRecording(){try{this.microphoneService=new Ls;const i=await this.microphoneService.requestPermission();this.mediaRecorderService=new Fs,await this.mediaRecorderService.initialize(i),this.mediaRecorderService.onStateChange(r=>{r==="recording"&&!this.recordingTimer&&(this.isRecording=!0,this.recordingTimer=window.setInterval(()=>{this.recordingDuration+=.25;const n=this.shadowRoot?.querySelector(".duration");n&&(n.textContent=this.formatDuration(this.recordingDuration))},250))}),this.recordingDuration=0,this.mediaRecorderService.start()}catch(i){console.error("Failed to start recording:",i),alert("Failed to start recording. Please check microphone permissions."),this.cleanup()}}async stopRecording(){if(this.mediaRecorderService)try{const i=await this.mediaRecorderService.stop(),r=this.recordingDuration,s=`Untitled ${await to()}`;await Aa({title:s,audioBlob:i,duration:r,source:"recording"}),await this.loadRecordings()}catch(i){console.error("Failed to save recording:",i),alert("Failed to save recording.")}finally{this.cleanup()}}cleanup(){this.isRecording=!1,this.recordingDuration=0,this.recordingTimer&&(clearInterval(this.recordingTimer),this.recordingTimer=null),this.microphoneService?.release(),this.mediaRecorderService=null,this.microphoneService=null}async handleUpload(){const i=await ao();if(!(!i||i.length===0))try{await io(i),await this.loadRecordings()}catch(r){console.error("Failed to upload files:",r),alert("Failed to upload files.")}}async handleTitleChange(i,r){await Xs(i.id,{title:r}),await this.loadRecordings()}async handlePlay(i){new Audio(URL.createObjectURL(i.audioBlob)).play()}handleAnnotate(i){this.selectedRecording=i,this.isModalOpen=!0}async handleExport(i){try{await uo(i.id)}catch(r){console.error("Failed to export recording:",r),alert(r instanceof Error?r.message:"Failed to export recording.")}}async handleDelete(i){confirm(`Are you sure you want to delete "${i.title}"? This cannot be undone.`)&&(await Js(i.id),await this.loadRecordings())}async handleExportAll(){try{await ho()}catch(i){console.error("Failed to export all recordings:",i),alert(i instanceof Error?i.message:"Failed to export recordings.")}}handleModalClose(){this.isModalOpen=!1,this.selectedRecording=null,this.loadRecordings()}openAbout(){this.isAboutOpen=!0}closeAbout(){this.isAboutOpen=!1}formatDuration(i){const r=Math.floor(i/60),n=Math.floor(i%60);return`${r}:${n.toString().padStart(2,"0")}`}render(){return Nt`
      <div class="page">
        <header class="chrome">
          <div class="chrome__inner">
            <div class="chrome__brand">
              <div class="logo">
                <div class="freq-bar"></div>
                <div class="freq-bar"></div>
                <div class="freq-bar"></div>
                <div class="freq-bar"></div>
                <div class="freq-bar"></div>
              </div>
              <h1 class="title"><span class="sonic">Sonic</span>Ceeper</h1>
            </div>
            <div class="chrome__copy">
              <span>Local-first signal lab for training-grade audio</span>
              <button class="about-btn" @click=${this.openAbout}>About</button>
              <theme-toggle></theme-toggle>
            </div>
          </div>
        </header>

        <main class="content">
          <section class="hero-panel">
            <div class="hero-panel__text">
              <div class="hero-title">Fixed-focus recorder for precise annotation</div>
              <div class="hero-subtitle">
                Record or drop files, keep the playhead pinned, and move straight into alignment.
              </div>
            </div>

            <div class="hero-panel__cta">
              <div class="action-buttons">
                <button
                  class="record-btn ${this.isRecording?"recording":""}"
                  @click=${this.isRecording?this.stopRecording:this.startRecording}
                  ?disabled=${this.isRecording&&this.recordingDuration<.5}
                >
                  ${ie(this.isRecording?el:tl)}
                  <span>${this.isRecording?"Stop Recording":"Record Audio"}</span>
                </button>

                ${this.isRecording?Nt`<div class="duration">${this.formatDuration(this.recordingDuration)}</div>`:Nt`
                      <button class="upload-btn" @click=${this.handleUpload}>
                        ${ie(rl)}
                        <span>Upload Files</span>
                      </button>
                    `}
              </div>
            </div>
          </section>

          <section class="recordings-panel">
            <div class="recordings-header">
              <h2 class="section-title">Recordings (${this.recordings.length})</h2>
              ${this.recordings.some(i=>i.isAnnotated)?Nt`
                    <button class="export-all-btn" @click=${this.handleExportAll}>
                      ${ie(ba)}
                      <span>Export All</span>
                    </button>
                  `:null}
            </div>

            <div class="recordings-list">
              ${this.recordings.length===0?Nt`
                    <div class="empty-state">
                      <div class="empty-icon">${ie(sl)}</div>
                      <div class="empty-title">No recordings yet</div>
                      <div class="empty-description">
                        Capture a take or drop audio to start annotating with a fixed-focus timeline.
                      </div>
                    </div>
                  `:this.recordings.map(i=>Nt`
                      <article class="recording-row">
                        <div class="recording-meta">
                          <div class="title-cell">
                            <input
                              class="title-input"
                              type="text"
                              .value=${i.title}
                              @change=${r=>this.handleTitleChange(i,r.target.value)}
                              placeholder="Enter title..."
                            />
                            ${i.isAnnotated?Nt`<span class="badge badge--annotated">${ie(al)} Annotated</span>`:Nt`<span class="badge">Needs annotation</span>`}
                          </div>
                          <div class="meta-line">
                            <span class="duration-badge">${this.formatDuration(i.duration)}</span>
                            <span class="badge">
                              ${i.source==="recording"?"Recorded here":"Uploaded audio"}
                            </span>
                          </div>
                        </div>
                        <div class="actions">
                          <button
                            class="action-btn"
                            @click=${()=>this.handlePlay(i)}
                            title="Play audio"
                          >
                            ${ie(Ua)}
                            <span>Play</span>
                          </button>

                          <button
                            class="action-btn"
                            @click=${()=>this.handleAnnotate(i)}
                            title="Annotate audio"
                          >
                            ${ie(nl)}
                            <span>Annotate</span>
                          </button>

                          ${i.isAnnotated?Nt`
                                <button
                                  class="action-btn"
                                  @click=${()=>this.handleExport(i)}
                                  title="Export annotation"
                                >
                                  ${ie(ba)}
                                  <span>Export</span>
                                </button>
                              `:null}

                          <button
                            class="action-btn danger"
                            @click=${()=>this.handleDelete(i)}
                            title="Delete recording"
                          >
                            ${ie(il)}
                            <span>Delete</span>
                          </button>
                        </div>
                      </article>
                    `)}
            </div>
          </section>
        </main>

        ${this.isAboutOpen?Nt`
              <div class="about-overlay">
                <div class="about-card">
                  <div class="about-header">
                    <div class="logo">
                      <div class="freq-bar"></div>
                      <div class="freq-bar"></div>
                      <div class="freq-bar"></div>
                      <div class="freq-bar"></div>
                      <div class="freq-bar"></div>
                    </div>
                    <div>
                      <div class="about-title">SonicCeeper</div>
                      <div class="about-subtitle">Local-first signal lab for training-grade audio</div>
                    </div>
                  </div>
                  <div class="about-body">
                    <div class="about-pill">Local-first - nothing leaves your device</div>
                    <div class="about-pill">60fps canvas and smoked glass UI</div>
                    <div class="about-pill">Exports ready for fine-tuning</div>
                  </div>
                  <div class="about-actions">
                    <button class="upload-btn" @click=${this.closeAbout}>Close</button>
                  </div>
                </div>
              </div>
            `:null}
      </div>

      <!-- Annotation Modal -->
      ${this.isModalOpen&&this.selectedRecording?Nt`
            <annotation-modal
              .recording=${this.selectedRecording}
              @close=${this.handleModalClose}
            ></annotation-modal>
          `:null}
    `}};Ie.styles=nr`
    :host {
      --chrome-height: 76px;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      height: 100vh;
      overflow: hidden;
      background: radial-gradient(
          circle at 20% 20%,
          color-mix(in srgb, var(--accent-blue) 30%, transparent 70%) 0%,
          transparent 45%
        ),
        radial-gradient(
          circle at 80% 30%,
          color-mix(in srgb, var(--accent-coral) 28%, transparent 72%) 0%,
          transparent 45%
        ),
        linear-gradient(135deg, var(--bg-primary) 0%, color-mix(in srgb, var(--bg-surface) 70%, transparent) 60%);
      position: relative;
      overflow-x: hidden;
    }

    :host::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 50% 50%,
        color-mix(in srgb, var(--accent-purple) 20%, transparent 80%) 0%,
        transparent 55%
      );
      opacity: 0.7;
      pointer-events: none;
    }

    .page {
      max-width: min(1200px, calc(100% - 2 * var(--spacing-4)));
      margin: 0 auto;
      padding: var(--spacing-6) var(--spacing-4);
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-5);
      min-height: calc(100vh - var(--chrome-height));
      height: calc(100vh - var(--chrome-height));
      overflow: hidden;
      flex: 1;
    }

    .chrome {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: var(--chrome-height);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 var(--spacing-4);
      background: var(--glass-bg);
      border-bottom: 1px solid var(--glass-border);
      backdrop-filter: blur(var(--glass-blur));
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
      z-index: 5;
    }

    .chrome__inner {
      width: 100%;
      max-width: 1200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--spacing-4);
    }

    .chrome__brand {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }

    .chrome__copy {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      font-family: var(--font-data);
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }

    .logo {
      display: flex;
      align-items: flex-end;
      gap: var(--spacing-1);
      height: var(--spacing-10);
    }

    .freq-bar {
      width: 4px;
      background: linear-gradient(180deg, var(--accent-green) 0%, var(--accent-purple) 100%);
      border-radius: var(--radius-xs);
      animation: pulse-bar 2s ease-in-out infinite;
      box-shadow: 0 0 10px color-mix(in srgb, var(--accent-green) 60%, transparent);
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
      font-family: var(--font-ui);
      font-size: var(--text-2xl);
      font-weight: 800;
      background: linear-gradient(120deg, var(--accent-green) 0%, var(--accent-purple) 50%, var(--accent-coral) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.02em;
      text-transform: lowercase;
    }

    .title .sonic {
      font-weight: 900;
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-4);
      min-height: 0;
      overflow: hidden;
      padding-top: calc(var(--chrome-height) + var(--spacing-2));
    }

    .hero-panel {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--spacing-6);
      align-items: center;
      padding: var(--spacing-5) var(--spacing-5);
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-lg);
      backdrop-filter: blur(var(--glass-blur));
      min-height: 0;
    }

    .hero-panel__text {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
    }

    .hero-title {
      font-family: var(--font-ui);
      font-size: var(--text-3xl);
      font-weight: var(--font-extrabold);
      color: var(--text-primary);
      letter-spacing: -0.02em;
      line-height: var(--leading-tight);
    }

    .hero-subtitle {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-secondary);
      line-height: var(--leading-normal);
    }

    .hero-panel__cta {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
      align-items: flex-start;
      justify-content: center;
    }

    .about-btn {
      padding: var(--spacing-2) var(--spacing-3);
      border-radius: var(--radius-full);
      border: 1px solid var(--glass-border);
      background: linear-gradient(135deg, color-mix(in srgb, var(--accent-blue) 40%, transparent) 0%, color-mix(in srgb, var(--accent-purple) 40%, transparent) 100%);
      color: var(--text-primary);
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      cursor: pointer;
      transition: all var(--duration-fast) var(--ease-out);
      box-shadow: var(--shadow-md);
      white-space: nowrap;
    }

    .about-btn:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-lg);
    }

    .action-buttons {
      display: flex;
      gap: var(--spacing-3);
      align-items: center;
      flex-wrap: wrap;
    }

    .record-btn,
    .upload-btn {
      padding: var(--spacing-3) var(--spacing-5);
      border-radius: var(--radius-full);
      border: none;
      font-family: var(--font-ui);
      font-size: var(--text-base);
      font-weight: var(--font-bold);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .record-btn {
      background: linear-gradient(130deg, var(--accent-coral) 0%, var(--accent-yellow) 100%);
      color: var(--bg-primary);
      box-shadow: var(--shadow-record-idle);
    }

    .record-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(130deg, var(--accent-yellow) 0%, var(--accent-coral) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .record-btn:hover::before {
      opacity: 0.25;
    }

    .record-btn:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: var(--shadow-record-hover);
      color: var(--bg-primary);
    }

    .record-btn.recording {
      background: linear-gradient(130deg, var(--accent-coral) 0%, var(--color-signal-error) 100%);
      animation: pulse-glow 2s ease-in-out infinite;
      color: var(--text-primary);
    }

    @keyframes pulse-glow {
      0%, 100% {
        box-shadow: var(--shadow-record-pulse-start);
      }
      50% {
        box-shadow: var(--shadow-record-pulse-mid);
      }
    }

    .upload-btn {
      background: color-mix(in srgb, var(--bg-surface) 70%, transparent);
      color: var(--text-primary);
      border: 1px solid var(--glass-border);
    }

    .upload-btn:hover {
      background: color-mix(in srgb, var(--bg-surface-hover) 70%, transparent);
      border-color: color-mix(in srgb, var(--accent-blue) 35%, var(--glass-border));
      transform: translateY(-3px) scale(1.02);
      box-shadow: var(--shadow-md);
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
      padding: var(--spacing-2) var(--spacing-3);
      background: color-mix(in srgb, var(--accent-blue) 12%, transparent);
      border-radius: var(--radius-md);
      border: 1px solid var(--glass-border);
    }

    .recordings-panel {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-lg);
      padding: var(--spacing-3);
      min-height: 0;
      overflow: hidden;
      flex: 1;
      margin-top: var(--spacing-3);
    }

    .recordings-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--spacing-3);
      padding: var(--spacing-2) var(--spacing-3);
      position: sticky;
      top: 0;
      z-index: 1;
      background: color-mix(in srgb, var(--bg-surface) 90%, transparent);
      border-bottom: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
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

    .recordings-list {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      background: var(--bg-surface);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-2);
      box-shadow: inset 0 1px 0 var(--glass-border);
      scrollbar-width: thin;
      scrollbar-color: color-mix(in srgb, var(--glass-border) 60%, transparent) transparent;
      margin-top: var(--spacing-1);
    }

    .recordings-list::-webkit-scrollbar {
      width: 6px;
    }

    .recordings-list::-webkit-scrollbar-thumb {
      background: color-mix(in srgb, var(--glass-border) 70%, transparent);
      border-radius: var(--radius-full);
    }

    .recordings-list::-webkit-scrollbar-track {
      background: transparent;
    }

    .recording-row {
      display: grid;
      grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.7fr) auto;
      gap: var(--spacing-2);
      padding: var(--spacing-2);
      border-radius: var(--radius-md);
      transition: background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
      border: 1px solid transparent;
      align-items: center;
    }

    .recording-row:hover {
      background: color-mix(in srgb, var(--glass-bg) 80%, transparent);
      border-color: var(--glass-border);
      transform: translateY(-1px);
    }

    .recording-meta {
      display: grid;
      grid-template-rows: auto auto;
      gap: var(--spacing-1);
      min-width: 0;
    }

    .title-cell {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(--spacing-2);
      min-width: 0;
    }

    .title-input {
      flex: 1;
      padding: var(--spacing-2);
      background: var(--bg-input);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-sm);
      color: var(--text-primary);
      font-family: var(--font-ui);
      font-size: var(--text-base);
      transition: all var(--duration-fast) var(--ease-out);
    }

    .title-input::placeholder {
      color: var(--text-tertiary);
    }

    .title-input:focus {
      outline: none;
      border-color: var(--accent-coral);
      background: var(--bg-surface-hover);
    }

    .meta-line {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      flex-wrap: wrap;
      min-width: 0;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-2);
      padding: var(--spacing-1) var(--spacing-2);
      border-radius: var(--radius-full);
      font-family: var(--font-data);
      font-size: var(--text-xs);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      background: color-mix(in srgb, var(--bg-elevated) 70%, transparent);
      white-space: nowrap;
    }

    .badge--annotated {
      color: var(--color-signal-success);
      background: color-mix(in srgb, var(--color-signal-success) 12%, transparent);
      border-color: color-mix(in srgb, var(--color-signal-success) 30%, var(--glass-border));
    }

    .duration-badge {
      font-family: var(--font-data);
      font-size: var(--text-xs);
      color: var(--text-secondary);
      font-variant-numeric: tabular-nums;
      padding: var(--spacing-1) var(--spacing-2);
      border-radius: var(--radius-sm);
      background: color-mix(in srgb, var(--accent-blue) 10%, transparent);
      border: 1px solid var(--glass-border);
      white-space: nowrap;
    }

    .actions {
      display: flex;
      gap: var(--spacing-2);
      align-items: center;
      flex-wrap: wrap;
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
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      transition: all var(--duration-fast) var(--ease-out);
      white-space: nowrap;
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
      background: color-mix(in srgb, var(--accent-coral) 10%, transparent);
      border-color: var(--accent-coral);
    }

    .empty-state {
      padding: var(--spacing-12) var(--spacing-8);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-4);
      color: var(--text-secondary);
    }

    .empty-icon {
      width: var(--spacing-16);
      height: var(--spacing-16);
      border-radius: 50%;
      background: linear-gradient(135deg, color-mix(in srgb, var(--accent-green) 20%, transparent), color-mix(in srgb, var(--accent-purple) 20%, transparent));
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--spacing-2);
      border: 1px solid var(--glass-border);
    }

    .empty-icon svg {
      width: var(--spacing-8);
      height: var(--spacing-8);
      stroke: var(--accent-green);
      fill: none;
    }

    .empty-title {
      font-family: var(--font-ui);
      font-size: var(--text-xl);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-1);
    }

    .empty-description {
      font-family: var(--font-ui);
      font-size: var(--text-base);
      color: var(--text-secondary);
      max-width: 420px;
    }

    .footer {
      justify-content: center;
      text-align: center;
      color: var(--text-secondary);
      font-family: var(--font-data);
      font-size: var(--text-sm);
      background: color-mix(in srgb, var(--bg-surface) 80%, transparent);
    }

    .about-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-4);
      z-index: 20;
    }

    .about-card {
      width: min(680px, 90vw);
      background: var(--bg-surface);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-xl);
      padding: var(--spacing-5);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-4);
    }

    .about-header {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }

    .about-title {
      font-family: var(--font-ui);
      font-size: var(--text-2xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
    }

    .about-subtitle {
      font-family: var(--font-ui);
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }

    .about-body {
      display: grid;
      gap: var(--spacing-2);
    }

    .about-pill {
      padding: var(--spacing-2) var(--spacing-3);
      border-radius: var(--radius-full);
      background: color-mix(in srgb, var(--bg-elevated) 80%, transparent);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      font-family: var(--font-data);
      font-size: var(--text-sm);
    }

    .about-actions {
      display: flex;
      justify-content: flex-end;
    }

    .about-actions .upload-btn {
      min-width: 120px;
    }

    @media (max-width: 1024px) {
      .hero-panel {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .page {
        padding: var(--spacing-4) var(--spacing-3);
      }

      .chrome {
        flex-direction: column;
        align-items: flex-start;
      }

      .recording-row {
        grid-template-columns: 1fr;
      }

      .action-buttons {
        width: 100%;
      }
    }
  `;ar([Ft()],Ie.prototype,"recordings",2);ar([Ft()],Ie.prototype,"isRecording",2);ar([Ft()],Ie.prototype,"recordingDuration",2);ar([Ft()],Ie.prototype,"selectedRecording",2);ar([Ft()],Ie.prototype,"isModalOpen",2);ar([Ft()],Ie.prototype,"isAboutOpen",2);Ie=ar([ir("minimal-recorder")],Ie);const La=i=>{document.body.setAttribute("data-theme",i)};La($r.getCurrentTheme());$r.subscribe(i=>{La(i.currentTheme)});

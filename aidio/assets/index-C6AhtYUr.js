(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const o of d)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function i(d){const o={};return d.integrity&&(o.integrity=d.integrity),d.referrerPolicy&&(o.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?o.credentials="include":d.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(d){if(d.ep)return;d.ep=!0;const o=i(d);fetch(d.href,o)}})();const nr=globalThis,Zr=nr.ShadowRoot&&(nr.ShadyCSS===void 0||nr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hr=Symbol(),$i=new WeakMap;let Gi=class{constructor(r,i,c){if(this._$cssResult$=!0,c!==Hr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=i}get styleSheet(){let r=this.o;const i=this.t;if(Zr&&r===void 0){const c=i!==void 0&&i.length===1;c&&(r=$i.get(i)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),c&&$i.set(i,r))}return r}toString(){return this.cssText}};const La=$=>new Gi(typeof $=="string"?$:$+"",void 0,Hr),dn=($,...r)=>{const i=$.length===1?$[0]:r.reduce(((c,d,o)=>c+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(d)+$[o+1]),$[0]);return new Gi(i,$,Hr)},Ua=($,r)=>{if(Zr)$.adoptedStyleSheets=r.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet));else for(const i of r){const c=document.createElement("style"),d=nr.litNonce;d!==void 0&&c.setAttribute("nonce",d),c.textContent=i.cssText,$.appendChild(c)}},Ri=Zr?$=>$:$=>$ instanceof CSSStyleSheet?(r=>{let i="";for(const c of r.cssRules)i+=c.cssText;return La(i)})($):$;const{is:Ka,defineProperty:qa,getOwnPropertyDescriptor:Wa,getOwnPropertyNames:Za,getOwnPropertySymbols:Ha,getPrototypeOf:Va}=Object,hr=globalThis,zi=hr.trustedTypes,Xa=zi?zi.emptyScript:"",Ya=hr.reactiveElementPolyfillSupport,Sn=($,r)=>$,or={toAttribute($,r){switch(r){case Boolean:$=$?Xa:null;break;case Object:case Array:$=$==null?$:JSON.stringify($)}return $},fromAttribute($,r){let i=$;switch(r){case Boolean:i=$!==null;break;case Number:i=$===null?null:Number($);break;case Object:case Array:try{i=JSON.parse($)}catch{i=null}}return i}},Vr=($,r)=>!Ka($,r),Di={attribute:!0,type:String,converter:or,reflect:!1,useDefault:!1,hasChanged:Vr};Symbol.metadata??=Symbol("metadata"),hr.litPropertyMetadata??=new WeakMap;let cn=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,i=Di){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(r,i),!i.noAccessor){const c=Symbol(),d=this.getPropertyDescriptor(r,c,i);d!==void 0&&qa(this.prototype,r,d)}}static getPropertyDescriptor(r,i,c){const{get:d,set:o}=Wa(this.prototype,r)??{get(){return this[i]},set(h){this[i]=h}};return{get:d,set(h){const u=d?.call(this);o?.call(this,h),this.requestUpdate(r,u,c)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Di}static _$Ei(){if(this.hasOwnProperty(Sn("elementProperties")))return;const r=Va(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Sn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sn("properties"))){const i=this.properties,c=[...Za(i),...Ha(i)];for(const d of c)this.createProperty(d,i[d])}const r=this[Symbol.metadata];if(r!==null){const i=litPropertyMetadata.get(r);if(i!==void 0)for(const[c,d]of i)this.elementProperties.set(c,d)}this._$Eh=new Map;for(const[i,c]of this.elementProperties){const d=this._$Eu(i,c);d!==void 0&&this._$Eh.set(d,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const i=[];if(Array.isArray(r)){const c=new Set(r.flat(1/0).reverse());for(const d of c)i.unshift(Ri(d))}else r!==void 0&&i.push(Ri(r));return i}static _$Eu(r,i){const c=i.attribute;return c===!1?void 0:typeof c=="string"?c:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((r=>this.enableUpdating=r)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((r=>r(this)))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,i=this.constructor.elementProperties;for(const c of i.keys())this.hasOwnProperty(c)&&(r.set(c,this[c]),delete this[c]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ua(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((r=>r.hostConnected?.()))}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach((r=>r.hostDisconnected?.()))}attributeChangedCallback(r,i,c){this._$AK(r,c)}_$ET(r,i){const c=this.constructor.elementProperties.get(r),d=this.constructor._$Eu(r,c);if(d!==void 0&&c.reflect===!0){const o=(c.converter?.toAttribute!==void 0?c.converter:or).toAttribute(i,c.type);this._$Em=r,o==null?this.removeAttribute(d):this.setAttribute(d,o),this._$Em=null}}_$AK(r,i){const c=this.constructor,d=c._$Eh.get(r);if(d!==void 0&&this._$Em!==d){const o=c.getPropertyOptions(d),h=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:or;this._$Em=d;const u=h.fromAttribute(i,o.type);this[d]=u??this._$Ej?.get(d)??u,this._$Em=null}}requestUpdate(r,i,c){if(r!==void 0){const d=this.constructor,o=this[r];if(c??=d.getPropertyOptions(r),!((c.hasChanged??Vr)(o,i)||c.useDefault&&c.reflect&&o===this._$Ej?.get(r)&&!this.hasAttribute(d._$Eu(r,c))))return;this.C(r,i,c)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,i,{useDefault:c,reflect:d,wrapped:o},h){c&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,h??i??this[r]),o!==!0||h!==void 0)||(this._$AL.has(r)||(this.hasUpdated||c||(i=void 0),this._$AL.set(r,i)),d===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[d,o]of this._$Ep)this[d]=o;this._$Ep=void 0}const c=this.constructor.elementProperties;if(c.size>0)for(const[d,o]of c){const{wrapped:h}=o,u=this[d];h!==!0||this._$AL.has(d)||u===void 0||this.C(d,void 0,o,u)}}let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),this._$EO?.forEach((c=>c.hostUpdate?.())),this.update(i)):this._$EM()}catch(c){throw r=!1,this._$EM(),c}r&&this._$AE(i)}willUpdate(r){}_$AE(r){this._$EO?.forEach((i=>i.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach((i=>this._$ET(i,this[i]))),this._$EM()}updated(r){}firstUpdated(r){}};cn.elementStyles=[],cn.shadowRootOptions={mode:"open"},cn[Sn("elementProperties")]=new Map,cn[Sn("finalized")]=new Map,Ya?.({ReactiveElement:cn}),(hr.reactiveElementVersions??=[]).push("2.1.1");const Xr=globalThis,sr=Xr.trustedTypes,Ii=sr?sr.createPolicy("lit-html",{createHTML:$=>$}):void 0,Ji="$lit$",Le=`lit$${Math.random().toFixed(9).slice(2)}$`,Qi="?"+Le,Ga=`<${Qi}>`,Ge=document,En=()=>Ge.createComment(""),On=$=>$===null||typeof $!="object"&&typeof $!="function",Yr=Array.isArray,Ja=$=>Yr($)||typeof $?.[Symbol.iterator]=="function",Ur=`[ 	
\f\r]`,Cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bi=/-->/g,Mi=/>/g,Xe=RegExp(`>|${Ur}(?:([^\\s"'>=/]+)(${Ur}*=${Ur}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ji=/'/g,Fi=/"/g,ta=/^(?:script|style|textarea|title)$/i,Qa=$=>(r,...i)=>({_$litType$:$,strings:r,values:i}),Kt=Qa(1),Je=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),Ni=new WeakMap,Ye=Ge.createTreeWalker(Ge,129);function ea($,r){if(!Yr($)||!$.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ii!==void 0?Ii.createHTML(r):r}const to=($,r)=>{const i=$.length-1,c=[];let d,o=r===2?"<svg>":r===3?"<math>":"",h=Cn;for(let u=0;u<i;u++){const m=$[u];let w,C,_=-1,S=0;for(;S<m.length&&(h.lastIndex=S,C=h.exec(m),C!==null);)S=h.lastIndex,h===Cn?C[1]==="!--"?h=Bi:C[1]!==void 0?h=Mi:C[2]!==void 0?(ta.test(C[2])&&(d=RegExp("</"+C[2],"g")),h=Xe):C[3]!==void 0&&(h=Xe):h===Xe?C[0]===">"?(h=d??Cn,_=-1):C[1]===void 0?_=-2:(_=h.lastIndex-C[2].length,w=C[1],h=C[3]===void 0?Xe:C[3]==='"'?Fi:ji):h===Fi||h===ji?h=Xe:h===Bi||h===Mi?h=Cn:(h=Xe,d=void 0);const g=h===Xe&&$[u+1].startsWith("/>")?" ":"";o+=h===Cn?m+Ga:_>=0?(c.push(w),m.slice(0,_)+Ji+m.slice(_)+Le+g):m+Le+(_===-2?u:g)}return[ea($,o+($[i]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),c]};class Tn{constructor({strings:r,_$litType$:i},c){let d;this.parts=[];let o=0,h=0;const u=r.length-1,m=this.parts,[w,C]=to(r,i);if(this.el=Tn.createElement(w,c),Ye.currentNode=this.el.content,i===2||i===3){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(d=Ye.nextNode())!==null&&m.length<u;){if(d.nodeType===1){if(d.hasAttributes())for(const _ of d.getAttributeNames())if(_.endsWith(Ji)){const S=C[h++],g=d.getAttribute(_).split(Le),A=/([.?@])?(.*)/.exec(S);m.push({type:1,index:o,name:A[2],strings:g,ctor:A[1]==="."?no:A[1]==="?"?ro:A[1]==="@"?io:dr}),d.removeAttribute(_)}else _.startsWith(Le)&&(m.push({type:6,index:o}),d.removeAttribute(_));if(ta.test(d.tagName)){const _=d.textContent.split(Le),S=_.length-1;if(S>0){d.textContent=sr?sr.emptyScript:"";for(let g=0;g<S;g++)d.append(_[g],En()),Ye.nextNode(),m.push({type:2,index:++o});d.append(_[S],En())}}}else if(d.nodeType===8)if(d.data===Qi)m.push({type:2,index:o});else{let _=-1;for(;(_=d.data.indexOf(Le,_+1))!==-1;)m.push({type:7,index:o}),_+=Le.length-1}o++}}static createElement(r,i){const c=Ge.createElement("template");return c.innerHTML=r,c}}function hn($,r,i=$,c){if(r===Je)return r;let d=c!==void 0?i._$Co?.[c]:i._$Cl;const o=On(r)?void 0:r._$litDirective$;return d?.constructor!==o&&(d?._$AO?.(!1),o===void 0?d=void 0:(d=new o($),d._$AT($,i,c)),c!==void 0?(i._$Co??=[])[c]=d:i._$Cl=d),d!==void 0&&(r=hn($,d._$AS($,r.values),d,c)),r}class eo{constructor(r,i){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:i},parts:c}=this._$AD,d=(r?.creationScope??Ge).importNode(i,!0);Ye.currentNode=d;let o=Ye.nextNode(),h=0,u=0,m=c[0];for(;m!==void 0;){if(h===m.index){let w;m.type===2?w=new $n(o,o.nextSibling,this,r):m.type===1?w=new m.ctor(o,m.name,m.strings,this,r):m.type===6&&(w=new ao(o,this,r)),this._$AV.push(w),m=c[++u]}h!==m?.index&&(o=Ye.nextNode(),h++)}return Ye.currentNode=Ge,d}p(r){let i=0;for(const c of this._$AV)c!==void 0&&(c.strings!==void 0?(c._$AI(r,c,i),i+=c.strings.length-2):c._$AI(r[i])),i++}}class $n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,i,c,d){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=r,this._$AB=i,this._$AM=c,this.options=d,this._$Cv=d?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&r?.nodeType===11&&(r=i.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,i=this){r=hn(this,r,i),On(r)?r===te||r==null||r===""?(this._$AH!==te&&this._$AR(),this._$AH=te):r!==this._$AH&&r!==Je&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):Ja(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==te&&On(this._$AH)?this._$AA.nextSibling.data=r:this.T(Ge.createTextNode(r)),this._$AH=r}$(r){const{values:i,_$litType$:c}=r,d=typeof c=="number"?this._$AC(r):(c.el===void 0&&(c.el=Tn.createElement(ea(c.h,c.h[0]),this.options)),c);if(this._$AH?._$AD===d)this._$AH.p(i);else{const o=new eo(d,this),h=o.u(this.options);o.p(i),this.T(h),this._$AH=o}}_$AC(r){let i=Ni.get(r.strings);return i===void 0&&Ni.set(r.strings,i=new Tn(r)),i}k(r){Yr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let c,d=0;for(const o of r)d===i.length?i.push(c=new $n(this.O(En()),this.O(En()),this,this.options)):c=i[d],c._$AI(o),d++;d<i.length&&(this._$AR(c&&c._$AB.nextSibling,d),i.length=d)}_$AR(r=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);r!==this._$AB;){const c=r.nextSibling;r.remove(),r=c}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}}class dr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,i,c,d,o){this.type=1,this._$AH=te,this._$AN=void 0,this.element=r,this.name=i,this._$AM=d,this.options=o,c.length>2||c[0]!==""||c[1]!==""?(this._$AH=Array(c.length-1).fill(new String),this.strings=c):this._$AH=te}_$AI(r,i=this,c,d){const o=this.strings;let h=!1;if(o===void 0)r=hn(this,r,i,0),h=!On(r)||r!==this._$AH&&r!==Je,h&&(this._$AH=r);else{const u=r;let m,w;for(r=o[0],m=0;m<o.length-1;m++)w=hn(this,u[c+m],i,m),w===Je&&(w=this._$AH[m]),h||=!On(w)||w!==this._$AH[m],w===te?r=te:r!==te&&(r+=(w??"")+o[m+1]),this._$AH[m]=w}h&&!d&&this.j(r)}j(r){r===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class no extends dr{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===te?void 0:r}}class ro extends dr{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==te)}}class io extends dr{constructor(r,i,c,d,o){super(r,i,c,d,o),this.type=5}_$AI(r,i=this){if((r=hn(this,r,i,0)??te)===Je)return;const c=this._$AH,d=r===te&&c!==te||r.capture!==c.capture||r.once!==c.once||r.passive!==c.passive,o=r!==te&&(c===te||d);d&&this.element.removeEventListener(this.name,this,c),o&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class ao{constructor(r,i,c){this.element=r,this.type=6,this._$AN=void 0,this._$AM=i,this.options=c}get _$AU(){return this._$AM._$AU}_$AI(r){hn(this,r)}}const oo=Xr.litHtmlPolyfillSupport;oo?.(Tn,$n),(Xr.litHtmlVersions??=[]).push("3.3.1");const so=($,r,i)=>{const c=i?.renderBefore??r;let d=c._$litPart$;if(d===void 0){const o=i?.renderBefore??null;c._$litPart$=d=new $n(r.insertBefore(En(),o),o,void 0,i??{})}return d._$AI($),d};const Gr=globalThis;let Se=class extends cn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=so(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};Se._$litElement$=!0,Se.finalized=!0,Gr.litElementHydrateSupport?.({LitElement:Se});const lo=Gr.litElementPolyfillSupport;lo?.({LitElement:Se});(Gr.litElementVersions??=[]).push("4.2.1");const fn=$=>(r,i)=>{i!==void 0?i.addInitializer((()=>{customElements.define($,r)})):customElements.define($,r)};const uo={attribute:!0,type:String,converter:or,reflect:!1,hasChanged:Vr},co=($=uo,r,i)=>{const{kind:c,metadata:d}=i;let o=globalThis.litPropertyMetadata.get(d);if(o===void 0&&globalThis.litPropertyMetadata.set(d,o=new Map),c==="setter"&&(($=Object.create($)).wrapped=!0),o.set(i.name,$),c==="accessor"){const{name:h}=i;return{set(u){const m=r.get.call(this);r.set.call(this,u),this.requestUpdate(h,m,$)},init(u){return u!==void 0&&this.C(h,void 0,$,u),u}}}if(c==="setter"){const{name:h}=i;return function(u){const m=this[h];r.call(this,u),this.requestUpdate(h,m,$)}}throw Error("Unsupported decorator location: "+c)};function ye($){return(r,i)=>typeof i=="object"?co($,r,i):((c,d,o)=>{const h=d.hasOwnProperty(o);return d.constructor.createProperty(o,c),h?Object.getOwnPropertyDescriptor(d,o):void 0})($,r,i)}function Ft($){return ye({...$,state:!0,attribute:!1})}const ho={CHILD:2},fo=$=>(...r)=>({_$litDirective$:$,values:r});class po{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,i,c){this._$Ct=r,this._$AM=i,this._$Ci=c}_$AS(r,i){return this.update(r,i)}update(r,i){return this.render(...i)}}class qr extends po{constructor(r){if(super(r),this.it=te,r.type!==ho.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===te||r==null)return this._t=void 0,this.it=r;if(r===Je)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const i=[r];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}qr.directiveName="unsafeHTML",qr.resultType=1;const Jt=fo(qr);class mo{constructor(){this.stream=null}async requestPermission(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("MediaDevices API not supported in this browser");try{return this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1,sampleRate:48e3,channelCount:1}}),this.stream}catch(r){throw r instanceof Error?new Error(`Microphone access denied: ${r.message}`):new Error("Microphone access denied")}}getStream(){return this.stream}release(){this.stream&&(this.stream.getTracks().forEach(r=>r.stop()),this.stream=null)}isActive(){return this.stream!==null&&this.stream.active}}class go{constructor(){this.mediaRecorder=null,this.chunks=[]}async initialize(r){if(!window.MediaRecorder)throw new Error("MediaRecorder API not supported in this browser");const i=this.getSupportedMimeType();if(!i)throw new Error("No supported audio MIME type found");this.mediaRecorder=new MediaRecorder(r,{mimeType:i,audioBitsPerSecond:128e3}),this.mediaRecorder.ondataavailable=c=>{c.data.size>0&&(this.chunks.push(c.data),this.onDataAvailableCallback?.(c.data))},this.mediaRecorder.onstop=()=>{this.onStateChangeCallback?.("inactive")},this.mediaRecorder.onstart=()=>{this.onStateChangeCallback?.("recording")},this.mediaRecorder.onpause=()=>{this.onStateChangeCallback?.("paused")},this.mediaRecorder.onresume=()=>{this.onStateChangeCallback?.("recording")}}getSupportedMimeType(){return["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/mp4"].find(i=>MediaRecorder.isTypeSupported(i))||null}start(r=100){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");this.mediaRecorder.state!=="recording"&&(this.chunks=[],this.mediaRecorder.start(r))}async stop(){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");return this.mediaRecorder.state==="inactive"?new Blob(this.chunks,{type:this.mediaRecorder.mimeType}):new Promise(r=>{this.mediaRecorder.onstop=()=>{const i=new Blob(this.chunks,{type:this.mediaRecorder.mimeType});this.onStateChangeCallback?.("inactive"),r(i)},this.mediaRecorder.stop()})}pause(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.pause()}resume(){this.mediaRecorder?.state==="paused"&&this.mediaRecorder.resume()}getState(){return this.mediaRecorder?.state||"inactive"}getMimeType(){return this.mediaRecorder?.mimeType||""}onDataAvailable(r){this.onDataAvailableCallback=r}onStateChange(r){this.onStateChangeCallback=r}release(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.stop(),this.mediaRecorder=null,this.chunks=[]}}const vo="modulepreload",yo=function($){return"/aidio/"+$},Li={},bo=function(r,i,c){let d=Promise.resolve();if(i&&i.length>0){let w=function(C){return Promise.all(C.map(_=>Promise.resolve(_).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};var h=w;document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),m=u?.nonce||u?.getAttribute("nonce");d=w(i.map(C=>{if(C=yo(C),C in Li)return;Li[C]=!0;const _=C.endsWith(".css"),S=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${C}"]${S}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":vo,_||(g.as="script"),g.crossOrigin="",g.href=C,m&&g.setAttribute("nonce",m),document.head.appendChild(g),_)return new Promise((A,v)=>{g.addEventListener("load",A),g.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${C}`)))})}))}function o(u){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=u,window.dispatchEvent(m),!m.defaultPrevented)throw u}return d.then(u=>{for(const m of u||[])m.status==="rejected"&&o(m.reason);return r().catch(o)})};var Pe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function na($){return $&&$.__esModule&&Object.prototype.hasOwnProperty.call($,"default")?$.default:$}var rr={exports:{}},wo=rr.exports,Ui;function _o(){return Ui||(Ui=1,(function($,r){(function(i,c){$.exports=c()})(wo,function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])})(t,e)},c=function(){return(c=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};function d(t,e,n){for(var a,s=0,f=e.length;s<f;s++)!a&&s in e||((a=a||Array.prototype.slice.call(e,0,s))[s]=e[s]);return t.concat(a||Array.prototype.slice.call(e))}var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Pe,h=Object.keys,u=Array.isArray;function m(t,e){return typeof e!="object"||h(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||o.Promise||(o.Promise=Promise);var w=Object.getPrototypeOf,C={}.hasOwnProperty;function _(t,e){return C.call(t,e)}function S(t,e){typeof e=="function"&&(e=e(w(t))),(typeof Reflect>"u"?h:Reflect.ownKeys)(e).forEach(function(n){A(t,n,e[n])})}var g=Object.defineProperty;function A(t,e,n,a){g(t,e,m(n&&_(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function v(t){return{from:function(e){return t.prototype=Object.create(e.prototype),A(t.prototype,"constructor",t),{extend:S.bind(null,t.prototype)}}}}var k=Object.getOwnPropertyDescriptor,b=[].slice;function T(t,e,n){return b.call(t,e,n)}function B(t,e){return e(t)}function W(t){if(!t)throw new Error("Assertion Failed")}function K(t){o.setImmediate?setImmediate(t):setTimeout(t,0)}function nt(t,e){if(typeof e=="string"&&_(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],a=0,s=e.length;a<s;++a){var f=nt(t,e[a]);n.push(f)}return n}var y=e.indexOf(".");if(y!==-1){var O=t[e.substr(0,y)];return O==null?void 0:nt(O,e.substr(y+1))}}function G(t,e,n){if(t&&e!==void 0&&!("isFrozen"in Object&&Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){W(typeof n!="string"&&"length"in n);for(var a=0,s=e.length;a<s;++a)G(t,e[a],n[a])}else{var f,y,O=e.indexOf(".");O!==-1?(f=e.substr(0,O),(y=e.substr(O+1))===""?n===void 0?u(t)&&!isNaN(parseInt(f))?t.splice(f,1):delete t[f]:t[f]=n:G(O=!(O=t[f])||!_(t,f)?t[f]={}:O,y,n)):n===void 0?u(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function ut(t){var e,n={};for(e in t)_(t,e)&&(n[e]=t[e]);return n}var tt=[].concat;function pt(t){return tt.apply([],t)}var At="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(pt([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(t){return o[t]}),Tt=new Set(At.map(function(t){return o[t]})),R=null;function Q(t){return R=new WeakMap,t=(function e(n){if(!n||typeof n!="object")return n;var a=R.get(n);if(a)return a;if(u(n)){a=[],R.set(n,a);for(var s=0,f=n.length;s<f;++s)a.push(e(n[s]))}else if(Tt.has(n.constructor))a=n;else{var y,O=w(n);for(y in a=O===Object.prototype?{}:Object.create(O),R.set(n,a),n)_(n,y)&&(a[y]=e(n[y]))}return a})(t),R=null,t}var p={}.toString;function it(t){return p.call(t).slice(8,-1)}var Pt=typeof Symbol<"u"?Symbol.iterator:"@@iterator",lt=typeof Pt=="symbol"?function(t){var e;return t!=null&&(e=t[Pt])&&e.apply(t)}:function(){return null};function $t(t,e){return e=t.indexOf(e),0<=e&&t.splice(e,1),0<=e}var st={};function Ot(t){var e,n,a,s;if(arguments.length===1){if(u(t))return t.slice();if(this===st&&typeof t=="string")return[t];if(s=lt(t)){for(n=[];!(a=s.next()).done;)n.push(a.value);return n}if(t==null)return[t];if(typeof(e=t.length)!="number")return[t];for(n=new Array(e);e--;)n[e]=t[e];return n}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}var X=typeof Symbol<"u"?function(t){return t[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},dt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],we=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(dt),V={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Et(t,e){this.name=t,this.message=e}function xt(t,e){return t+". Errors: "+Object.keys(e).map(function(n){return e[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function vt(t,e,n,a){this.failures=e,this.failedKeys=a,this.successCount=n,this.message=xt(t,e)}function qt(t,e){this.name="BulkError",this.failures=Object.keys(e).map(function(n){return e[n]}),this.failuresByPos=e,this.message=xt(t,this.failures)}v(Et).from(Error).extend({toString:function(){return this.name+": "+this.message}}),v(vt).from(Et),v(qt).from(Et);var Qt=we.reduce(function(t,e){return t[e]=e+"Error",t},{}),jt=Et,mt=we.reduce(function(t,e){var n=e+"Error";function a(s,f){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(f?`
 `+f:""),this.inner=f||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=V[e]||n,this.inner=null)}return v(a).from(jt),t[e]=a,t},{});mt.Syntax=SyntaxError,mt.Type=TypeError,mt.Range=RangeError;var Xt=dt.reduce(function(t,e){return t[e+"Error"]=mt[e],t},{}),Wt=we.reduce(function(t,e){return["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=mt[e]),t},{});function It(){}function ae(t){return t}function l(t,e){return t==null||t===ae?e:function(n){return e(t(n))}}function et(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Y(t,e){return t===It?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var a=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var f=e.apply(this,arguments);return a&&(this.onsuccess=this.onsuccess?et(a,this.onsuccess):a),s&&(this.onerror=this.onerror?et(s,this.onerror):s),f!==void 0?f:n}}function E(t,e){return t===It?e:function(){t.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?et(n,this.onsuccess):n),a&&(this.onerror=this.onerror?et(a,this.onerror):a)}}function x(t,e){return t===It?e:function(n){var a=t.apply(this,arguments);m(n,a);var s=this.onsuccess,f=this.onerror;return this.onsuccess=null,this.onerror=null,n=e.apply(this,arguments),s&&(this.onsuccess=this.onsuccess?et(s,this.onsuccess):s),f&&(this.onerror=this.onerror?et(f,this.onerror):f),a===void 0?n===void 0?void 0:n:m(a,n)}}function N(t,e){return t===It?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ot(t,e){return t===It?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,f=new Array(s);s--;)f[s]=arguments[s];return n.then(function(){return e.apply(a,f)})}return e.apply(this,arguments)}}Wt.ModifyError=vt,Wt.DexieError=Et,Wt.BulkError=qt;var at=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Z(t){at=t}var ct={},kt=100,At=typeof Promise>"u"?[]:(function(){var t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,w(t),t];var e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,w(e),t]})(),dt=At[0],we=At[1],At=At[2],we=we&&we.then,Lt=dt&&dt.constructor,Bt=!!At,ne=function(t,e){Re.push([t,e]),he&&(queueMicrotask(va),he=!1)},Ae=!0,he=!0,me=[],Zt=[],$e=ae,be={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:It,pgp:!1,env:{},finalize:It},Ct=be,Re=[],Ee=0,Qe=[];function _t(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var e=this._PSD=Ct;if(typeof t!="function"){if(t!==ct)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&De(this,this._value))}this._state=null,this._value=null,++e.ref,(function n(a,s){try{s(function(f){if(a._state===null){if(f===a)throw new TypeError("A promise cannot be resolved with itself.");var y=a._lib&&en();f&&typeof f.then=="function"?n(a,function(O,z){f instanceof _t?f._then(O,z):f.then(O,z)}):(a._state=!0,a._value=f,Qr(a)),y&&nn()}},De.bind(null,a))}catch(f){De(a,f)}})(this,t)}var tn={get:function(){var t=Ct,e=In;function n(a,s){var f=this,y=!t.global&&(t!==Ct||e!==In),O=y&&!Be(),z=new _t(function(D,F){fr(f,new ze(ei(a,t,y,O),ei(s,t,y,O),D,F,t))});return this._consoleTask&&(z._consoleTask=this._consoleTask),z}return n.prototype=ct,n},set:function(t){A(this,"then",t&&t.prototype===ct?tn:{get:function(){return t},set:tn.set})}};function ze(t,e,n,a,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=a,this.psd=s}function De(t,e){var n,a;Zt.push(e),t._state===null&&(n=t._lib&&en(),e=$e(e),t._state=!1,t._value=e,a=t,me.some(function(s){return s._value===a._value})||me.push(a),Qr(t),n&&nn())}function Qr(t){var e=t._listeners;t._listeners=[];for(var n=0,a=e.length;n<a;++n)fr(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Ee===0&&(++Ee,ne(function(){--Ee==0&&pr()},[]))}function fr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ee,ne(ga,[n,t,e])}else t._listeners.push(e)}function ga(t,e,n){try{var a,s=e._value;!e._state&&Zt.length&&(Zt=[]),a=at&&e._consoleTask?e._consoleTask.run(function(){return t(s)}):t(s),e._state||Zt.indexOf(s)!==-1||(function(f){for(var y=me.length;y;)if(me[--y]._value===f._value)return me.splice(y,1)})(e),n.resolve(a)}catch(f){n.reject(f)}finally{--Ee==0&&pr(),--n.psd.ref||n.psd.finalize()}}function va(){Ke(be,function(){en()&&nn()})}function en(){var t=Ae;return he=Ae=!1,t}function nn(){var t,e,n;do for(;0<Re.length;)for(t=Re,Re=[],n=t.length,e=0;e<n;++e){var a=t[e];a[0].apply(null,a[1])}while(0<Re.length);he=Ae=!0}function pr(){var t=me;me=[],t.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)});for(var e=Qe.slice(0),n=e.length;n;)e[--n]()}function Rn(t){return new _t(ct,!1,t)}function Vt(t,e){var n=Ct;return function(){var a=en(),s=Ct;try{return Me(n,!0),t.apply(this,arguments)}catch(f){e&&e(f)}finally{Me(s,!1),a&&nn()}}}S(_t.prototype,{then:tn,_then:function(t,e){fr(this,new ze(null,null,t,e,Ct))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=t,n=arguments[1];return typeof e=="function"?this.then(null,function(a){return(a instanceof e?n:Rn)(a)}):this.then(null,function(a){return(a&&a.name===e?n:Rn)(a)})},finally:function(t){return this.then(function(e){return _t.resolve(t()).then(function(){return e})},function(e){return _t.resolve(t()).then(function(){return Rn(e)})})},timeout:function(t,e){var n=this;return t<1/0?new _t(function(a,s){var f=setTimeout(function(){return s(new mt.Timeout(e))},t);n.then(a,s).finally(clearTimeout.bind(null,f))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&A(_t.prototype,Symbol.toStringTag,"Dexie.Promise"),be.env=ti(),S(_t,{all:function(){var t=Ot.apply(null,arguments).map(Bn);return new _t(function(e,n){t.length===0&&e([]);var a=t.length;t.forEach(function(s,f){return _t.resolve(s).then(function(y){t[f]=y,--a||e(t)},n)})})},resolve:function(t){return t instanceof _t?t:t&&typeof t.then=="function"?new _t(function(e,n){t.then(e,n)}):new _t(ct,!0,t)},reject:Rn,race:function(){var t=Ot.apply(null,arguments).map(Bn);return new _t(function(e,n){t.map(function(a){return _t.resolve(a).then(e,n)})})},PSD:{get:function(){return Ct},set:function(t){return Ct=t}},totalEchoes:{get:function(){return In}},newPSD:Ie,usePSD:Ke,scheduler:{get:function(){return ne},set:function(t){ne=t}},rejectionMapper:{get:function(){return $e},set:function(t){$e=t}},follow:function(t,e){return new _t(function(n,a){return Ie(function(s,f){var y=Ct;y.unhandleds=[],y.onunhandled=f,y.finalize=et(function(){var O,z=this;O=function(){z.unhandleds.length===0?s():f(z.unhandleds[0])},Qe.push(function D(){O(),Qe.splice(Qe.indexOf(D),1)}),++Ee,ne(function(){--Ee==0&&pr()},[])},y.finalize),t()},e,n,a)})}}),Lt&&(Lt.allSettled&&A(_t,"allSettled",function(){var t=Ot.apply(null,arguments).map(Bn);return new _t(function(e){t.length===0&&e([]);var n=t.length,a=new Array(n);t.forEach(function(s,f){return _t.resolve(s).then(function(y){return a[f]={status:"fulfilled",value:y}},function(y){return a[f]={status:"rejected",reason:y}}).then(function(){return--n||e(a)})})})}),Lt.any&&typeof AggregateError<"u"&&A(_t,"any",function(){var t=Ot.apply(null,arguments).map(Bn);return new _t(function(e,n){t.length===0&&n(new AggregateError([]));var a=t.length,s=new Array(a);t.forEach(function(f,y){return _t.resolve(f).then(function(O){return e(O)},function(O){s[y]=O,--a||n(new AggregateError(s))})})})}),Lt.withResolvers&&(_t.withResolvers=Lt.withResolvers));var re={awaits:0,echoes:0,id:0},ya=0,zn=[],Dn=0,In=0,ba=0;function Ie(t,e,n,a){var s=Ct,f=Object.create(s);return f.parent=s,f.ref=0,f.global=!1,f.id=++ba,be.env,f.env=Bt?{Promise:_t,PromiseProp:{value:_t,configurable:!0,writable:!0},all:_t.all,race:_t.race,allSettled:_t.allSettled,any:_t.any,resolve:_t.resolve,reject:_t.reject}:{},e&&m(f,e),++s.ref,f.finalize=function(){--this.parent.ref||this.parent.finalize()},a=Ke(f,t,n,a),f.ref===0&&f.finalize(),a}function rn(){return re.id||(re.id=++ya),++re.awaits,re.echoes+=kt,re.id}function Be(){return!!re.awaits&&(--re.awaits==0&&(re.id=0),re.echoes=re.awaits*kt,!0)}function Bn(t){return re.echoes&&t&&t.constructor===Lt?(rn(),t.then(function(e){return Be(),e},function(e){return Be(),Yt(e)})):t}function wa(){var t=zn[zn.length-1];zn.pop(),Me(t,!1)}function Me(t,e){var n,a=Ct;(e?!re.echoes||Dn++&&t===Ct:!Dn||--Dn&&t===Ct)||queueMicrotask(e?function(s){++In,re.echoes&&--re.echoes!=0||(re.echoes=re.awaits=re.id=0),zn.push(Ct),Me(s,!0)}.bind(null,t):wa),t!==Ct&&(Ct=t,a===be&&(be.env=ti()),Bt&&(n=be.env.Promise,e=t.env,(a.global||t.global)&&(Object.defineProperty(o,"Promise",e.PromiseProp),n.all=e.all,n.race=e.race,n.resolve=e.resolve,n.reject=e.reject,e.allSettled&&(n.allSettled=e.allSettled),e.any&&(n.any=e.any))))}function ti(){var t=o.Promise;return Bt?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject}:{}}function Ke(t,e,n,a,s){var f=Ct;try{return Me(t,!0),e(n,a,s)}finally{Me(f,!1)}}function ei(t,e,n,a){return typeof t!="function"?t:function(){var s=Ct;n&&rn(),Me(e,!0);try{return t.apply(this,arguments)}finally{Me(s,!1),a&&queueMicrotask(Be)}}}function mr(t){Promise===Lt&&re.echoes===0?Dn===0?t():enqueueNativeMicroTask(t):setTimeout(t,0)}(""+we).indexOf("[native code]")===-1&&(rn=Be=It);var Yt=_t.reject,qe="￿",Oe="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ni="String expected.",an=[],Mn="__dbnames",gr="readonly",vr="readwrite";function We(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}var ri={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function jn(t){return typeof t!="string"||/\./.test(t)?function(e){return e}:function(e){return e[t]===void 0&&t in e&&delete(e=Q(e))[t],e}}function ii(){throw mt.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Nt(t,e){try{var n=ai(t),a=ai(e);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return e<t?1:t<e?-1:0;case"binary":return(function(s,f){for(var y=s.length,O=f.length,z=y<O?y:O,D=0;D<z;++D)if(s[D]!==f[D])return s[D]<f[D]?-1:1;return y===O?0:y<O?-1:1})(oi(t),oi(e));case"Array":return(function(s,f){for(var y=s.length,O=f.length,z=y<O?y:O,D=0;D<z;++D){var F=Nt(s[D],f[D]);if(F!==0)return F}return y===O?0:y<O?-1:1})(t,e)}}catch{}return NaN}function ai(t){var e=typeof t;return e!="object"?e:ArrayBuffer.isView(t)?"binary":(t=it(t),t==="ArrayBuffer"?"binary":t)}function oi(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function Fn(t,e,n){var a=t.schema.yProps;return a?(e&&0<n.numFailures&&(e=e.filter(function(s,f){return!n.failures[f]})),Promise.all(a.map(function(s){return s=s.updatesTable,e?t.db.table(s).where("k").anyOf(e).delete():t.db.table(s).clear()})).then(function(){return n})):n}var mn=(si.prototype.execute=function(t){var e=this["@@propmod"];if(e.add!==void 0){var n=e.add;if(u(n))return d(d([],u(t)?t:[],!0),n).sort();if(typeof n=="number")return(Number(t)||0)+n;if(typeof n=="bigint")try{return BigInt(t)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(e.remove!==void 0){var a=e.remove;if(u(a))return u(t)?t.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(t)-a;if(typeof a=="bigint")try{return BigInt(t)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=e.replacePrefix)===null||n===void 0?void 0:n[0],n&&typeof t=="string"&&t.startsWith(n)?e.replacePrefix[1]+t.substring(n.length):t},si);function si(t){this["@@propmod"]=t}function li(t,e){for(var n=h(e),a=n.length,s=!1,f=0;f<a;++f){var y=n[f],O=e[y],z=nt(t,y);O instanceof mn?(G(t,y,O.execute(z)),s=!0):z!==O&&(G(t,y,O),s=!0)}return s}var ui=(Ht.prototype._trans=function(t,e,n){var a=this._tx||Ct.trans,s=this.name,f=at&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function y(D,F,P){if(!P.schema[s])throw new mt.NotFound("Table "+s+" not part of transaction");return e(P.idbtrans,P)}var O=en();try{var z=a&&a.db._novip===this.db._novip?a===Ct.trans?a._promise(t,y,n):Ie(function(){return a._promise(t,y,n)},{trans:a,transless:Ct.transless||Ct}):(function D(F,P,U,I){if(F.idbdb&&(F._state.openComplete||Ct.letThrough||F._vip)){var M=F._createTransaction(P,U,F._dbSchema);try{M.create(),F._state.PR1398_maxLoop=3}catch(j){return j.name===Qt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return D(F,P,U,I)})):Yt(j)}return M._promise(P,function(j,L){return Ie(function(){return Ct.trans=M,I(j,L,M)})}).then(function(j){if(P==="readwrite")try{M.idbtrans.commit()}catch{}return P==="readonly"?j:M._completion.then(function(){return j})})}if(F._state.openComplete)return Yt(new mt.DatabaseClosed(F._state.dbOpenError));if(!F._state.isBeingOpened){if(!F._state.autoOpen)return Yt(new mt.DatabaseClosed);F.open().catch(It)}return F._state.dbReadyPromise.then(function(){return D(F,P,U,I)})})(this.db,t,[this.name],y);return f&&(z._consoleTask=f,z=z.catch(function(D){return console.trace(D),Yt(D)})),z}finally{O&&nn()}},Ht.prototype.get=function(t,e){var n=this;return t&&t.constructor===Object?this.where(t).first(e):t==null?Yt(new mt.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:t}).then(function(s){return n.hook.reading.fire(s)})}).then(e)},Ht.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(u(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var e=h(t);if(e.length===1)return this.where(e[0]).equals(t[e[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(O){if(O.compound&&e.every(function(D){return 0<=O.keyPath.indexOf(D)})){for(var z=0;z<e.length;++z)if(e.indexOf(O.keyPath[z])===-1)return!1;return!0}return!1}).sort(function(O,z){return O.keyPath.length-z.keyPath.length})[0];if(n&&this.db._maxKey!==qe){var f=n.keyPath.slice(0,e.length);return this.where(f).equals(f.map(function(z){return t[z]}))}!n&&at&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(e.join("+"),"]"));var a=this.schema.idxByName;function s(O,z){return Nt(O,z)===0}var y=e.reduce(function(P,z){var D=P[0],F=P[1],P=a[z],U=t[z];return[D||P,D||!P?We(F,P&&P.multi?function(I){return I=nt(I,z),u(I)&&I.some(function(M){return s(U,M)})}:function(I){return s(U,nt(I,z))}):F]},[null,null]),f=y[0],y=y[1];return f?this.where(f.name).equals(t[f.keyPath]).filter(y):n?this.filter(y):this.where(e).equals("")},Ht.prototype.filter=function(t){return this.toCollection().and(t)},Ht.prototype.count=function(t){return this.toCollection().count(t)},Ht.prototype.offset=function(t){return this.toCollection().offset(t)},Ht.prototype.limit=function(t){return this.toCollection().limit(t)},Ht.prototype.each=function(t){return this.toCollection().each(t)},Ht.prototype.toArray=function(t){return this.toCollection().toArray(t)},Ht.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ht.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,u(t)?"[".concat(t.join("+"),"]"):t))},Ht.prototype.reverse=function(){return this.toCollection().reverse()},Ht.prototype.mapToClass=function(t){var e,n=this.db,a=this.name;function s(){return e!==null&&e.apply(this,arguments)||this}(this.schema.mappedClass=t).prototype instanceof ii&&((function(z,D){if(typeof D!="function"&&D!==null)throw new TypeError("Class extends value "+String(D)+" is not a constructor or null");function F(){this.constructor=z}i(z,D),z.prototype=D===null?Object.create(D):(F.prototype=D.prototype,new F)})(s,e=t),Object.defineProperty(s.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),s.prototype.table=function(){return a},t=s);for(var f=new Set,y=t.prototype;y;y=w(y))Object.getOwnPropertyNames(y).forEach(function(z){return f.add(z)});function O(z){if(!z)return z;var D,F=Object.create(t.prototype);for(D in z)if(!f.has(D))try{F[D]=z[D]}catch{}return F}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=O,this.hook("reading",O),t},Ht.prototype.defineClass=function(){return this.mapToClass(function(t){m(this,t)})},Ht.prototype.add=function(t,e){var n=this,a=this.schema.primKey,s=a.auto,f=a.keyPath,y=t;return f&&s&&(y=jn(f)(t)),this._trans("readwrite",function(O){return n.core.mutate({trans:O,type:"add",keys:e!=null?[e]:null,values:[y]})}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):O.lastResult}).then(function(O){if(f)try{G(t,f,O)}catch{}return O})},Ht.prototype.upsert=function(t,e){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:t}).then(function(f){var y=f??{};return li(y,e),a&&G(y,a,t),n.core.mutate({trans:s,type:"put",values:[y],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[e]}}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):!!f})})})},Ht.prototype.update=function(t,e){return typeof t!="object"||u(t)?this.where(":id").equals(t).modify(e):(t=nt(t,this.schema.primKey.keyPath),t===void 0?Yt(new mt.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(t).modify(e))},Ht.prototype.put=function(t,e){var n=this,a=this.schema.primKey,s=a.auto,f=a.keyPath,y=t;return f&&s&&(y=jn(f)(t)),this._trans("readwrite",function(O){return n.core.mutate({trans:O,type:"put",values:[y],keys:e!=null?[e]:null})}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):O.lastResult}).then(function(O){if(f)try{G(t,f,O)}catch{}return O})},Ht.prototype.delete=function(t){var e=this;return this._trans("readwrite",function(n){return e.core.mutate({trans:n,type:"delete",keys:[t]}).then(function(a){return Fn(e,[t],a)}).then(function(a){return a.numFailures?_t.reject(a.failures[0]):void 0})})},Ht.prototype.clear=function(){var t=this;return this._trans("readwrite",function(e){return t.core.mutate({trans:e,type:"deleteRange",range:ri}).then(function(n){return Fn(t,null,n)})}).then(function(e){return e.numFailures?_t.reject(e.failures[0]):void 0})},Ht.prototype.bulkGet=function(t){var e=this;return this._trans("readonly",function(n){return e.core.getMany({keys:t,trans:n}).then(function(a){return a.map(function(s){return e.hook.reading.fire(s)})})})},Ht.prototype.bulkAdd=function(t,e,n){var a=this,s=Array.isArray(e)?e:void 0,f=(n=n||(s?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(y){var D=a.schema.primKey,O=D.auto,D=D.keyPath;if(D&&s)throw new mt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var z=t.length,D=D&&O?t.map(jn(D)):t;return a.core.mutate({trans:y,type:"add",keys:s,values:D,wantResults:f}).then(function(M){var P=M.numFailures,U=M.results,I=M.lastResult,M=M.failures;if(P===0)return f?U:I;throw new qt("".concat(a.name,".bulkAdd(): ").concat(P," of ").concat(z," operations failed"),M)})})},Ht.prototype.bulkPut=function(t,e,n){var a=this,s=Array.isArray(e)?e:void 0,f=(n=n||(s?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(y){var D=a.schema.primKey,O=D.auto,D=D.keyPath;if(D&&s)throw new mt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var z=t.length,D=D&&O?t.map(jn(D)):t;return a.core.mutate({trans:y,type:"put",keys:s,values:D,wantResults:f}).then(function(M){var P=M.numFailures,U=M.results,I=M.lastResult,M=M.failures;if(P===0)return f?U:I;throw new qt("".concat(a.name,".bulkPut(): ").concat(P," of ").concat(z," operations failed"),M)})})},Ht.prototype.bulkUpdate=function(t){var e=this,n=this.core,a=t.map(function(y){return y.key}),s=t.map(function(y){return y.changes}),f=[];return this._trans("readwrite",function(y){return n.getMany({trans:y,keys:a,cache:"clone"}).then(function(O){var z=[],D=[];t.forEach(function(P,U){var I=P.key,M=P.changes,j=O[U];if(j){for(var L=0,q=Object.keys(M);L<q.length;L++){var H=q[L],J=M[H];if(H===e.schema.primKey.keyPath){if(Nt(J,I)!==0)throw new mt.Constraint("Cannot update primary key in bulkUpdate()")}else G(j,H,J)}f.push(U),z.push(I),D.push(j)}});var F=z.length;return n.mutate({trans:y,type:"put",keys:z,values:D,updates:{keys:a,changeSpecs:s}}).then(function(P){var U=P.numFailures,I=P.failures;if(U===0)return F;for(var M=0,j=Object.keys(I);M<j.length;M++){var L,q=j[M],H=f[Number(q)];H!=null&&(L=I[q],delete I[q],I[H]=L)}throw new qt("".concat(e.name,".bulkUpdate(): ").concat(U," of ").concat(F," operations failed"),I)})})})},Ht.prototype.bulkDelete=function(t){var e=this,n=t.length;return this._trans("readwrite",function(a){return e.core.mutate({trans:a,type:"delete",keys:t}).then(function(s){return Fn(e,t,s)})}).then(function(y){var s=y.numFailures,f=y.lastResult,y=y.failures;if(s===0)return f;throw new qt("".concat(e.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),y)})},Ht);function Ht(){}function gn(t){function e(y,O){if(O){for(var z=arguments.length,D=new Array(z-1);--z;)D[z-1]=arguments[z];return n[y].subscribe.apply(null,D),t}if(typeof y=="string")return n[y]}var n={};e.addEventType=f;for(var a=1,s=arguments.length;a<s;++a)f(arguments[a]);return e;function f(y,O,z){if(typeof y!="object"){var D;O=O||N;var F={subscribers:[],fire:z=z||It,subscribe:function(P){F.subscribers.indexOf(P)===-1&&(F.subscribers.push(P),F.fire=O(F.fire,P))},unsubscribe:function(P){F.subscribers=F.subscribers.filter(function(U){return U!==P}),F.fire=F.subscribers.reduce(O,z)}};return n[y]=e[y]=F}h(D=y).forEach(function(P){var U=D[P];if(u(U))f(P,D[P][0],D[P][1]);else{if(U!=="asap")throw new mt.InvalidArgument("Invalid event config");var I=f(P,ae,function(){for(var M=arguments.length,j=new Array(M);M--;)j[M]=arguments[M];I.subscribers.forEach(function(L){K(function(){L.apply(null,j)})})})}})}}function vn(t,e){return v(e).from({prototype:t}),e}function on(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function yr(t,e){t.filter=We(t.filter,e)}function br(t,e,n){var a=t.replayFilter;t.replayFilter=a?function(){return We(a(),e())}:e,t.justLimit=n&&!a}function Nn(t,e){if(t.isPrimKey)return e.primaryKey;var n=e.getIndexByKeyPath(t.index);if(!n)throw new mt.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function ci(t,e,n){var a=Nn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:a,range:t.range}})}function Ln(t,e,n,a){var s=t.replayFilter?We(t.filter,t.replayFilter()):t.filter;if(t.or){var f={},y=function(O,z,D){var F,P;s&&!s(z,D,function(U){return z.stop(U)},function(U){return z.fail(U)})||((P=""+(F=z.primaryKey))=="[object ArrayBuffer]"&&(P=""+new Uint8Array(F)),_(f,P)||(f[P]=!0,e(O,z,D)))};return Promise.all([t.or._iterate(y,n),hi(ci(t,a,n),t.algorithm,y,!t.keysOnly&&t.valueMapper)])}return hi(ci(t,a,n),We(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function hi(t,e,n,a){var s=Vt(a?function(f,y,O){return n(a(f),y,O)}:n);return t.then(function(f){if(f)return f.start(function(){var y=function(){return f.continue()};e&&!e(f,function(O){return y=O},function(O){f.stop(O),y=It},function(O){f.fail(O),y=It})||s(f.value,f,function(O){return y=O}),y()})})}var _a=(Ut.prototype._read=function(t,e){var n=this._ctx;return n.error?n.table._trans(null,Yt.bind(null,n.error)):n.table._trans("readonly",t).then(e)},Ut.prototype._write=function(t){var e=this._ctx;return e.error?e.table._trans(null,Yt.bind(null,e.error)):e.table._trans("readwrite",t,"locked")},Ut.prototype._addAlgorithm=function(t){var e=this._ctx;e.algorithm=We(e.algorithm,t)},Ut.prototype._iterate=function(t,e){return Ln(this._ctx,t,e,this._ctx.table.core)},Ut.prototype.clone=function(t){var e=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return t&&m(n,t),e._ctx=n,e},Ut.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ut.prototype.each=function(t){var e=this._ctx;return this._read(function(n){return Ln(e,t,n,e.table.core)})},Ut.prototype.count=function(t){var e=this;return this._read(function(n){var a=e._ctx,s=a.table.core;if(on(a,!0))return s.count({trans:n,query:{index:Nn(a,s.schema),range:a.range}}).then(function(y){return Math.min(y,a.limit)});var f=0;return Ln(a,function(){return++f,!1},n,s).then(function(){return f})}).then(t)},Ut.prototype.sortBy=function(t,e){var n=t.split(".").reverse(),a=n[0],s=n.length-1;function f(z,D){return D?f(z[n[D]],D-1):z[a]}var y=this._ctx.dir==="next"?1:-1;function O(z,D){return Nt(f(z,s),f(D,s))*y}return this.toArray(function(z){return z.sort(O)}).then(e)},Ut.prototype.toArray=function(t){var e=this;return this._read(function(n){var a=e._ctx;if(a.dir==="next"&&on(a,!0)&&0<a.limit){var s=a.valueMapper,f=Nn(a,a.table.core.schema);return a.table.core.query({trans:n,limit:a.limit,values:!0,query:{index:f,range:a.range}}).then(function(O){return O=O.result,s?O.map(s):O})}var y=[];return Ln(a,function(O){return y.push(O)},n,a.table.core).then(function(){return y})},t)},Ut.prototype.offset=function(t){var e=this._ctx;return t<=0||(e.offset+=t,on(e)?br(e,function(){var n=t;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):br(e,function(){var n=t;return function(){return--n<0}})),this},Ut.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),br(this._ctx,function(){var e=t;return function(n,a,s){return--e<=0&&a(s),0<=e}},!0),this},Ut.prototype.until=function(t,e){return yr(this._ctx,function(n,a,s){return!t(n.value)||(a(s),e)}),this},Ut.prototype.first=function(t){return this.limit(1).toArray(function(e){return e[0]}).then(t)},Ut.prototype.last=function(t){return this.reverse().first(t)},Ut.prototype.filter=function(t){var e;return yr(this._ctx,function(n){return t(n.value)}),(e=this._ctx).isMatch=We(e.isMatch,t),this},Ut.prototype.and=function(t){return this.filter(t)},Ut.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},Ut.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ut.prototype.desc=function(){return this.reverse()},Ut.prototype.eachKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,a){t(a.key,a)})},Ut.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},Ut.prototype.eachPrimaryKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,a){t(a.primaryKey,a)})},Ut.prototype.keys=function(t){var e=this._ctx;e.keysOnly=!e.isMatch;var n=[];return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(t)},Ut.prototype.primaryKeys=function(t){var e=this._ctx;if(e.dir==="next"&&on(e,!0)&&0<e.limit)return this._read(function(a){var s=Nn(e,e.table.core.schema);return e.table.core.query({trans:a,values:!1,limit:e.limit,query:{index:s,range:e.range}})}).then(function(a){return a.result}).then(t);e.keysOnly=!e.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(t)},Ut.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},Ut.prototype.firstKey=function(t){return this.limit(1).keys(function(e){return e[0]}).then(t)},Ut.prototype.lastKey=function(t){return this.reverse().firstKey(t)},Ut.prototype.distinct=function(){var t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];if(!t||!t.multi)return this;var e={};return yr(this._ctx,function(s){var a=s.primaryKey.toString(),s=_(e,a);return e[a]=!0,!s}),this},Ut.prototype.modify=function(t){var e=this,n=this._ctx;return this._write(function(a){var s=typeof t=="function"?t:function(j){return li(j,t)},f=n.table.core,D=f.schema.primaryKey,y=D.outbound,O=D.extractKey,z=200,D=e.db._options.modifyChunkSize;D&&(z=typeof D=="object"?D[f.name]||D["*"]||200:D);function F(j,H){var q=H.failures,H=H.numFailures;U+=j-H;for(var J=0,rt=h(q);J<rt.length;J++){var ft=rt[J];P.push(q[ft])}}var P=[],U=0,I=[],M=t===di;return e.clone().primaryKeys().then(function(j){function L(H){var J=Math.min(z,j.length-H),rt=j.slice(H,H+J);return(M?Promise.resolve([]):f.getMany({trans:a,keys:rt,cache:"immutable"})).then(function(ft){var bt=[],ht=[],gt=y?[]:null,wt=M?rt:[];if(!M)for(var yt=0;yt<J;++yt){var St=ft[yt],zt={value:Q(St),primKey:j[H+yt]};s.call(zt,zt.value,zt)!==!1&&(zt.value==null?wt.push(j[H+yt]):y||Nt(O(St),O(zt.value))===0?(ht.push(zt.value),y&&gt.push(j[H+yt])):(wt.push(j[H+yt]),bt.push(zt.value)))}return Promise.resolve(0<bt.length&&f.mutate({trans:a,type:"add",values:bt}).then(function(Dt){for(var Mt in Dt.failures)wt.splice(parseInt(Mt),1);F(bt.length,Dt)})).then(function(){return(0<ht.length||q&&typeof t=="object")&&f.mutate({trans:a,type:"put",keys:gt,values:ht,criteria:q,changeSpec:typeof t!="function"&&t,isAdditionalChunk:0<H}).then(function(Dt){return F(ht.length,Dt)})}).then(function(){return(0<wt.length||q&&M)&&f.mutate({trans:a,type:"delete",keys:wt,criteria:q,isAdditionalChunk:0<H}).then(function(Dt){return Fn(n.table,wt,Dt)}).then(function(Dt){return F(wt.length,Dt)})}).then(function(){return j.length>H+J&&L(H+z)})})}var q=on(n)&&n.limit===1/0&&(typeof t!="function"||M)&&{index:n.index,range:n.range};return L(0).then(function(){if(0<P.length)throw new vt("Error modifying one or more objects",P,U,I);return j.length})})})},Ut.prototype.delete=function(){var t=this._ctx,e=t.range;return!on(t)||t.table.schema.yProps||!t.isPrimKey&&e.type!==3?this.modify(di):this._write(function(n){var a=t.table.core.schema.primaryKey,s=e;return t.table.core.count({trans:n,query:{index:a,range:s}}).then(function(f){return t.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(z){var O=z.failures,z=z.numFailures;if(z)throw new vt("Could not delete some values",Object.keys(O).map(function(D){return O[D]}),f-z);return f-z})})})},Ut);function Ut(){}var di=function(t,e){return e.value=null};function xa(t,e){return t<e?-1:t===e?0:1}function ka(t,e){return e<t?-1:t===e?0:1}function ge(t,e,n){return t=t instanceof pi?new t.Collection(t):t,t._ctx.error=new(n||TypeError)(e),t}function sn(t){return new t.Collection(t,function(){return fi("")}).limit(0)}function Un(t,e,n,a){var s,f,y,O,z,D,F,P=n.length;if(!n.every(function(M){return typeof M=="string"}))return ge(t,ni);function U(M){s=M==="next"?function(L){return L.toUpperCase()}:function(L){return L.toLowerCase()},f=M==="next"?function(L){return L.toLowerCase()}:function(L){return L.toUpperCase()},y=M==="next"?xa:ka;var j=n.map(function(L){return{lower:f(L),upper:s(L)}}).sort(function(L,q){return y(L.lower,q.lower)});O=j.map(function(L){return L.upper}),z=j.map(function(L){return L.lower}),F=(D=M)==="next"?"":a}U("next"),t=new t.Collection(t,function(){return je(O[0],z[P-1]+a)}),t._ondirectionchange=function(M){U(M)};var I=0;return t._addAlgorithm(function(M,j,L){var q=M.key;if(typeof q!="string")return!1;var H=f(q);if(e(H,z,I))return!0;for(var J=null,rt=I;rt<P;++rt){var ft=(function(bt,ht,gt,wt,yt,St){for(var zt=Math.min(bt.length,wt.length),Dt=-1,Mt=0;Mt<zt;++Mt){var ve=ht[Mt];if(ve!==wt[Mt])return yt(bt[Mt],gt[Mt])<0?bt.substr(0,Mt)+gt[Mt]+gt.substr(Mt+1):yt(bt[Mt],wt[Mt])<0?bt.substr(0,Mt)+wt[Mt]+gt.substr(Mt+1):0<=Dt?bt.substr(0,Dt)+ht[Dt]+gt.substr(Dt+1):null;yt(bt[Mt],ve)<0&&(Dt=Mt)}return zt<wt.length&&St==="next"?bt+gt.substr(bt.length):zt<bt.length&&St==="prev"?bt.substr(0,gt.length):Dt<0?null:bt.substr(0,Dt)+wt[Dt]+gt.substr(Dt+1)})(q,H,O[rt],z[rt],y,D);ft===null&&J===null?I=rt+1:(J===null||0<y(J,ft))&&(J=ft)}return j(J!==null?function(){M.continue(J+F)}:L),!1}),t}function je(t,e,n,a){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:a}}function fi(t){return{type:1,lower:t,upper:t}}var pi=(Object.defineProperty(ie.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ie.prototype.between=function(t,e,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(t,e)||this._cmp(t,e)===0&&(n||a)&&(!n||!a)?sn(this):new this.Collection(this,function(){return je(t,e,!n,!a)})}catch{return ge(this,Oe)}},ie.prototype.equals=function(t){return t==null?ge(this,Oe):new this.Collection(this,function(){return fi(t)})},ie.prototype.above=function(t){return t==null?ge(this,Oe):new this.Collection(this,function(){return je(t,void 0,!0)})},ie.prototype.aboveOrEqual=function(t){return t==null?ge(this,Oe):new this.Collection(this,function(){return je(t,void 0,!1)})},ie.prototype.below=function(t){return t==null?ge(this,Oe):new this.Collection(this,function(){return je(void 0,t,!1,!0)})},ie.prototype.belowOrEqual=function(t){return t==null?ge(this,Oe):new this.Collection(this,function(){return je(void 0,t)})},ie.prototype.startsWith=function(t){return typeof t!="string"?ge(this,ni):this.between(t,t+qe,!0,!0)},ie.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):Un(this,function(e,n){return e.indexOf(n[0])===0},[t],qe)},ie.prototype.equalsIgnoreCase=function(t){return Un(this,function(e,n){return e===n[0]},[t],"")},ie.prototype.anyOfIgnoreCase=function(){var t=Ot.apply(st,arguments);return t.length===0?sn(this):Un(this,function(e,n){return n.indexOf(e)!==-1},t,"")},ie.prototype.startsWithAnyOfIgnoreCase=function(){var t=Ot.apply(st,arguments);return t.length===0?sn(this):Un(this,function(e,n){return n.some(function(a){return e.indexOf(a)===0})},t,qe)},ie.prototype.anyOf=function(){var t=this,e=Ot.apply(st,arguments),n=this._cmp;try{e.sort(n)}catch{return ge(this,Oe)}if(e.length===0)return sn(this);var a=new this.Collection(this,function(){return je(e[0],e[e.length-1])});a._ondirectionchange=function(f){n=f==="next"?t._ascending:t._descending,e.sort(n)};var s=0;return a._addAlgorithm(function(f,y,O){for(var z=f.key;0<n(z,e[s]);)if(++s===e.length)return y(O),!1;return n(z,e[s])===0||(y(function(){f.continue(e[s])}),!1)}),a},ie.prototype.notEqual=function(t){return this.inAnyRange([[-1/0,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ie.prototype.noneOf=function(){var t=Ot.apply(st,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return ge(this,Oe)}var e=t.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return e.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(e,{includeLowers:!1,includeUppers:!1})},ie.prototype.inAnyRange=function(q,e){var n=this,a=this._cmp,s=this._ascending,f=this._descending,y=this._min,O=this._max;if(q.length===0)return sn(this);if(!q.every(function(H){return H[0]!==void 0&&H[1]!==void 0&&s(H[0],H[1])<=0}))return ge(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",mt.InvalidArgument);var z=!e||e.includeLowers!==!1,D=e&&e.includeUppers===!0,F,P=s;function U(H,J){return P(H[0],J[0])}try{(F=q.reduce(function(H,J){for(var rt=0,ft=H.length;rt<ft;++rt){var bt=H[rt];if(a(J[0],bt[1])<0&&0<a(J[1],bt[0])){bt[0]=y(bt[0],J[0]),bt[1]=O(bt[1],J[1]);break}}return rt===ft&&H.push(J),H},[])).sort(U)}catch{return ge(this,Oe)}var I=0,M=D?function(H){return 0<s(H,F[I][1])}:function(H){return 0<=s(H,F[I][1])},j=z?function(H){return 0<f(H,F[I][0])}:function(H){return 0<=f(H,F[I][0])},L=M,q=new this.Collection(this,function(){return je(F[0][0],F[F.length-1][1],!z,!D)});return q._ondirectionchange=function(H){P=H==="next"?(L=M,s):(L=j,f),F.sort(U)},q._addAlgorithm(function(H,J,rt){for(var ft,bt=H.key;L(bt);)if(++I===F.length)return J(rt),!1;return!M(ft=bt)&&!j(ft)||(n._cmp(bt,F[I][1])===0||n._cmp(bt,F[I][0])===0||J(function(){P===s?H.continue(F[I][0]):H.continue(F[I][1])}),!1)}),q},ie.prototype.startsWithAnyOf=function(){var t=Ot.apply(st,arguments);return t.every(function(e){return typeof e=="string"})?t.length===0?sn(this):this.inAnyRange(t.map(function(e){return[e,e+qe]})):ge(this,"startsWithAnyOf() only works with strings")},ie);function ie(){}function ke(t){return Vt(function(e){return yn(e),t(e.target.error),!1})}function yn(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}var bn="storagemutated",wr="x-storagemutated-1",Fe=gn(null,bn),Ca=(Ce.prototype._lock=function(){return W(!Ct.global),++this._reculock,this._reculock!==1||Ct.global||(Ct.lockOwnerFor=this),this},Ce.prototype._unlock=function(){if(W(!Ct.global),--this._reculock==0)for(Ct.global||(Ct.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var t=this._blockedFuncs.shift();try{Ke(t[1],t[0])}catch{}}return this},Ce.prototype._locked=function(){return this._reculock&&Ct.lockOwnerFor!==this},Ce.prototype.create=function(t){var e=this;if(!this.mode)return this;var n=this.db.idbdb,a=this.db._state.dbOpenError;if(W(!this.idbtrans),!t&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new mt.DatabaseClosed(a);case"MissingAPIError":throw new mt.MissingAPI(a.message,a);default:throw new mt.OpenFailed(a)}if(!this.active)throw new mt.TransactionInactive;return W(this._completion._state===null),(t=this.idbtrans=t||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Vt(function(s){yn(s),e._reject(t.error)}),t.onabort=Vt(function(s){yn(s),e.active&&e._reject(new mt.Abort(t.error)),e.active=!1,e.on("abort").fire(s)}),t.oncomplete=Vt(function(){e.active=!1,e._resolve(),"mutatedParts"in t&&Fe.storagemutated.fire(t.mutatedParts)}),this},Ce.prototype._promise=function(t,e,n){var a=this;if(t==="readwrite"&&this.mode!=="readwrite")return Yt(new mt.ReadOnly("Transaction is readonly"));if(!this.active)return Yt(new mt.TransactionInactive);if(this._locked())return new _t(function(f,y){a._blockedFuncs.push([function(){a._promise(t,e,n).then(f,y)},Ct])});if(n)return Ie(function(){var f=new _t(function(y,O){a._lock();var z=e(y,O,a);z&&z.then&&z.then(y,O)});return f.finally(function(){return a._unlock()}),f._lib=!0,f});var s=new _t(function(f,y){var O=e(f,y,a);O&&O.then&&O.then(f,y)});return s._lib=!0,s},Ce.prototype._root=function(){return this.parent?this.parent._root():this},Ce.prototype.waitFor=function(t){var e,n=this._root(),a=_t.resolve(t);n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],e=n.idbtrans.objectStore(n.storeNames[0]),(function f(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(e.get(-1/0).onsuccess=f)})());var s=n._waitingFor;return new _t(function(f,y){a.then(function(O){return n._waitingQueue.push(Vt(f.bind(null,O)))},function(O){return n._waitingQueue.push(Vt(y.bind(null,O)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},Ce.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new mt.Abort))},Ce.prototype.table=function(t){var e=this._memoizedTables||(this._memoizedTables={});if(_(e,t))return e[t];var n=this.schema[t];if(!n)throw new mt.NotFound("Table "+t+" not part of transaction");return n=new this.db.Table(t,n,this),n.core=this.db.core.table(t),e[t]=n},Ce);function Ce(){}function _r(t,e,n,a,s,f,y,O){return{name:t,keyPath:e,unique:n,multi:a,auto:s,compound:f,src:(n&&!y?"&":"")+(a?"*":"")+(s?"++":"")+mi(e),type:O}}function mi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function xr(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,f,y){return y=a(f,y),y&&(s[y[0]]=y[1]),s},{}))};var a}var wn=function(t){try{return t.only([[]]),wn=function(){return[[]]},[[]]}catch{return wn=function(){return qe},qe}};function kr(t){return t==null?function(){}:typeof t=="string"?(e=t).split(".").length===1?function(n){return n[e]}:function(n){return nt(n,e)}:function(n){return nt(n,t)};var e}function gi(t){return[].slice.call(t)}var Sa=0;function _n(t){return t==null?":id":typeof t=="string"?t:"[".concat(t.join("+"),"]")}function Aa(t,e,z){function a(L){if(L.type===3)return null;if(L.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var I=L.lower,M=L.upper,j=L.lowerOpen,L=L.upperOpen;return I===void 0?M===void 0?null:e.upperBound(M,!!L):M===void 0?e.lowerBound(I,!!j):e.bound(I,M,!!j,!!L)}function s(U){var I,M=U.name;return{name:M,schema:U,mutate:function(j){var L=j.trans,q=j.type,H=j.keys,J=j.values,rt=j.range;return new Promise(function(ft,bt){ft=Vt(ft);var ht=L.objectStore(M),gt=ht.keyPath==null,wt=q==="put"||q==="add";if(!wt&&q!=="delete"&&q!=="deleteRange")throw new Error("Invalid operation type: "+q);var yt,St=(H||J||{length:1}).length;if(H&&J&&H.length!==J.length)throw new Error("Given keys array must have same length as given values array.");if(St===0)return ft({numFailures:0,failures:{},results:[],lastResult:void 0});function zt(de){++ve,yn(de)}var Dt=[],Mt=[],ve=0;if(q==="deleteRange"){if(rt.type===4)return ft({numFailures:ve,failures:Mt,results:[],lastResult:void 0});rt.type===3?Dt.push(yt=ht.clear()):Dt.push(yt=ht.delete(a(rt)))}else{var gt=wt?gt?[J,H]:[J,null]:[H,null],Rt=gt[0],le=gt[1];if(wt)for(var ue=0;ue<St;++ue)Dt.push(yt=le&&le[ue]!==void 0?ht[q](Rt[ue],le[ue]):ht[q](Rt[ue])),yt.onerror=zt;else for(ue=0;ue<St;++ue)Dt.push(yt=ht[q](Rt[ue])),yt.onerror=zt}function tr(de){de=de.target.result,Dt.forEach(function(Ve,Lr){return Ve.error!=null&&(Mt[Lr]=Ve.error)}),ft({numFailures:ve,failures:Mt,results:q==="delete"?H:Dt.map(function(Ve){return Ve.result}),lastResult:de})}yt.onerror=function(de){zt(de),tr(de)},yt.onsuccess=tr})},getMany:function(j){var L=j.trans,q=j.keys;return new Promise(function(H,J){H=Vt(H);for(var rt,ft=L.objectStore(M),bt=q.length,ht=new Array(bt),gt=0,wt=0,yt=function(Dt){Dt=Dt.target,ht[Dt._pos]=Dt.result,++wt===gt&&H(ht)},St=ke(J),zt=0;zt<bt;++zt)q[zt]!=null&&((rt=ft.get(q[zt]))._pos=zt,rt.onsuccess=yt,rt.onerror=St,++gt);gt===0&&H(ht)})},get:function(j){var L=j.trans,q=j.key;return new Promise(function(H,J){H=Vt(H);var rt=L.objectStore(M).get(q);rt.onsuccess=function(ft){return H(ft.target.result)},rt.onerror=ke(J)})},query:(I=D,function(j){return new Promise(function(L,q){L=Vt(L);var H,J,rt,gt=j.trans,ft=j.values,bt=j.limit,yt=j.query,ht=bt===1/0?void 0:bt,wt=yt.index,yt=yt.range,gt=gt.objectStore(M),wt=wt.isPrimaryKey?gt:gt.index(wt.name),yt=a(yt);if(bt===0)return L({result:[]});I?((ht=ft?wt.getAll(yt,ht):wt.getAllKeys(yt,ht)).onsuccess=function(St){return L({result:St.target.result})},ht.onerror=ke(q)):(H=0,J=!ft&&"openKeyCursor"in wt?wt.openKeyCursor(yt):wt.openCursor(yt),rt=[],J.onsuccess=function(St){var zt=J.result;return zt?(rt.push(ft?zt.value:zt.primaryKey),++H===bt?L({result:rt}):void zt.continue()):L({result:rt})},J.onerror=ke(q))})}),openCursor:function(j){var L=j.trans,q=j.values,H=j.query,J=j.reverse,rt=j.unique;return new Promise(function(ft,bt){ft=Vt(ft);var wt=H.index,ht=H.range,gt=L.objectStore(M),gt=wt.isPrimaryKey?gt:gt.index(wt.name),wt=J?rt?"prevunique":"prev":rt?"nextunique":"next",yt=!q&&"openKeyCursor"in gt?gt.openKeyCursor(a(ht),wt):gt.openCursor(a(ht),wt);yt.onerror=ke(bt),yt.onsuccess=Vt(function(St){var zt,Dt,Mt,ve,Rt=yt.result;Rt?(Rt.___id=++Sa,Rt.done=!1,zt=Rt.continue.bind(Rt),Dt=(Dt=Rt.continuePrimaryKey)&&Dt.bind(Rt),Mt=Rt.advance.bind(Rt),ve=function(){throw new Error("Cursor not stopped")},Rt.trans=L,Rt.stop=Rt.continue=Rt.continuePrimaryKey=Rt.advance=function(){throw new Error("Cursor not started")},Rt.fail=Vt(bt),Rt.next=function(){var le=this,ue=1;return this.start(function(){return ue--?le.continue():le.stop()}).then(function(){return le})},Rt.start=function(le){function ue(){if(yt.result)try{le()}catch(de){Rt.fail(de)}else Rt.done=!0,Rt.start=function(){throw new Error("Cursor behind last entry")},Rt.stop()}var tr=new Promise(function(de,Ve){de=Vt(de),yt.onerror=ke(Ve),Rt.fail=Ve,Rt.stop=function(Lr){Rt.stop=Rt.continue=Rt.continuePrimaryKey=Rt.advance=ve,de(Lr)}});return yt.onsuccess=Vt(function(de){yt.onsuccess=ue,ue()}),Rt.continue=zt,Rt.continuePrimaryKey=Dt,Rt.advance=Mt,ue(),tr},ft(Rt)):ft(null)},bt)})},count:function(j){var L=j.query,q=j.trans,H=L.index,J=L.range;return new Promise(function(rt,ft){var bt=q.objectStore(M),ht=H.isPrimaryKey?bt:bt.index(H.name),bt=a(J),ht=bt?ht.count(bt):ht.count();ht.onsuccess=Vt(function(gt){return rt(gt.target.result)}),ht.onerror=ke(ft)})}}}var f,y,O,F=(y=z,O=gi((f=t).objectStoreNames),{schema:{name:f.name,tables:O.map(function(U){return y.objectStore(U)}).map(function(U){var I=U.keyPath,L=U.autoIncrement,M=u(I),j={},L={name:U.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:I==null,compound:M,keyPath:I,autoIncrement:L,unique:!0,extractKey:kr(I)},indexes:gi(U.indexNames).map(function(q){return U.index(q)}).map(function(rt){var H=rt.name,J=rt.unique,ft=rt.multiEntry,rt=rt.keyPath,ft={name:H,compound:u(rt),keyPath:rt,unique:J,multiEntry:ft,extractKey:kr(rt)};return j[_n(rt)]=ft}),getIndexByKeyPath:function(q){return j[_n(q)]}};return j[":id"]=L.primaryKey,I!=null&&(j[_n(I)]=L.primaryKey),L})},hasGetAll:0<O.length&&"getAll"in y.objectStore(O[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),z=F.schema,D=F.hasGetAll,F=z.tables.map(s),P={};return F.forEach(function(U){return P[U.name]=U}),{stack:"dbcore",transaction:t.transaction.bind(t),table:function(U){if(!P[U])throw new Error("Table '".concat(U,"' not found"));return P[U]},MIN_KEY:-1/0,MAX_KEY:wn(e),schema:z}}function Ea(t,e,n,a){var s=n.IDBKeyRange;return n.indexedDB,{dbcore:(a=Aa(e,s,a),t.dbcore.reduce(function(f,y){return y=y.create,c(c({},f),y(f))},a))}}function Kn(t,a){var n=a.db,a=Ea(t._middlewares,n,t._deps,a);t.core=a.dbcore,t.tables.forEach(function(s){var f=s.name;t.core.schema.tables.some(function(y){return y.name===f})&&(s.core=t.core.table(f),t[f]instanceof t.Table&&(t[f].core=s.core))})}function qn(t,e,n,a){n.forEach(function(s){var f=a[s];e.forEach(function(y){var O=(function z(D,F){return k(D,F)||(D=w(D))&&z(D,F)})(y,s);(!O||"value"in O&&O.value===void 0)&&(y===t.Transaction.prototype||y instanceof t.Transaction?A(y,s,{get:function(){return this.table(s)},set:function(z){g(this,s,{value:z,writable:!0,configurable:!0,enumerable:!0})}}):y[s]=new t.Table(s,f))})})}function Cr(t,e){e.forEach(function(n){for(var a in n)n[a]instanceof t.Table&&delete n[a]})}function Oa(t,e){return t._cfg.version-e._cfg.version}function Ta(t,e,n,a){var s=t._dbSchema;n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=xr("$meta",yi("")[0],[]),t._storeNames.push("$meta"));var f=t._createTransaction("readwrite",t._storeNames,s);f.create(n),f._completion.catch(a);var y=f._reject.bind(f),O=Ct.transless||Ct;Ie(function(){return Ct.trans=f,Ct.transless=O,e!==0?(Kn(t,n),D=e,((z=f).storeNames.includes("$meta")?z.table("$meta").get("version").then(function(F){return F??D}):_t.resolve(D)).then(function(F){return U=F,I=f,M=n,j=[],F=(P=t)._versions,L=P._dbSchema=Zn(0,P.idbdb,M),(F=F.filter(function(q){return q._cfg.version>=U})).length!==0?(F.forEach(function(q){j.push(function(){var H=L,J=q._cfg.dbschema;Hn(P,H,M),Hn(P,J,M),L=P._dbSchema=J;var rt=Sr(H,J);rt.add.forEach(function(wt){Ar(M,wt[0],wt[1].primKey,wt[1].indexes)}),rt.change.forEach(function(wt){if(wt.recreate)throw new mt.Upgrade("Not yet support for changing primary key");var yt=M.objectStore(wt.name);wt.add.forEach(function(St){return Wn(yt,St)}),wt.change.forEach(function(St){yt.deleteIndex(St.name),Wn(yt,St)}),wt.del.forEach(function(St){return yt.deleteIndex(St)})});var ft=q._cfg.contentUpgrade;if(ft&&q._cfg.version>U){Kn(P,M),I._memoizedTables={};var bt=ut(J);rt.del.forEach(function(wt){bt[wt]=H[wt]}),Cr(P,[P.Transaction.prototype]),qn(P,[P.Transaction.prototype],h(bt),bt),I.schema=bt;var ht,gt=X(ft);return gt&&rn(),rt=_t.follow(function(){var wt;(ht=ft(I))&&gt&&(wt=Be.bind(null,null),ht.then(wt,wt))}),ht&&typeof ht.then=="function"?_t.resolve(ht):rt.then(function(){return ht})}}),j.push(function(H){var J,rt,ft=q._cfg.dbschema;J=ft,rt=H,[].slice.call(rt.db.objectStoreNames).forEach(function(bt){return J[bt]==null&&rt.db.deleteObjectStore(bt)}),Cr(P,[P.Transaction.prototype]),qn(P,[P.Transaction.prototype],P._storeNames,P._dbSchema),I.schema=P._dbSchema}),j.push(function(H){P.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(P.idbdb.version/10)===q._cfg.version?(P.idbdb.deleteObjectStore("$meta"),delete P._dbSchema.$meta,P._storeNames=P._storeNames.filter(function(J){return J!=="$meta"})):H.objectStore("$meta").put(q._cfg.version,"version"))})}),(function q(){return j.length?_t.resolve(j.shift()(I.idbtrans)).then(q):_t.resolve()})().then(function(){vi(L,M)})):_t.resolve();var P,U,I,M,j,L}).catch(y)):(h(s).forEach(function(F){Ar(n,F,s[F].primKey,s[F].indexes)}),Kn(t,n),void _t.follow(function(){return t.on.populate.fire(f)}).catch(y));var z,D})}function Pa(t,e){vi(t._dbSchema,e),e.db.version%10!=0||e.objectStoreNames.contains("$meta")||e.db.createObjectStore("$meta").add(Math.ceil(e.db.version/10-1),"version");var n=Zn(0,t.idbdb,e);Hn(t,t._dbSchema,e);for(var a=0,s=Sr(n,t._dbSchema).change;a<s.length;a++){var f=(function(y){if(y.change.length||y.recreate)return console.warn("Unable to patch indexes of table ".concat(y.name," because it has changes on the type of index or primary key.")),{value:void 0};var O=e.objectStore(y.name);y.add.forEach(function(z){at&&console.debug("Dexie upgrade patch: Creating missing index ".concat(y.name,".").concat(z.src)),Wn(O,z)})})(s[a]);if(typeof f=="object")return f.value}}function Sr(t,e){var n,a={del:[],add:[],change:[]};for(n in t)e[n]||a.del.push(n);for(n in e){var s=t[n],f=e[n];if(s){var y={name:n,def:f,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(f.primKey.keyPath||"")||s.primKey.auto!==f.primKey.auto)y.recreate=!0,a.change.push(y);else{var O=s.idxByName,z=f.idxByName,D=void 0;for(D in O)z[D]||y.del.push(D);for(D in z){var F=O[D],P=z[D];F?F.src!==P.src&&y.change.push(P):y.add.push(P)}(0<y.del.length||0<y.add.length||0<y.change.length)&&a.change.push(y)}}else a.add.push([n,f])}return a}function Ar(t,e,n,a){var s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return a.forEach(function(f){return Wn(s,f)}),s}function vi(t,e){h(t).forEach(function(n){e.db.objectStoreNames.contains(n)||(at&&console.debug("Dexie: Creating missing table",n),Ar(e,n,t[n].primKey,t[n].indexes))})}function Wn(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Zn(t,e,n){var a={};return T(e.objectStoreNames,0).forEach(function(s){for(var f=n.objectStore(s),y=_r(mi(D=f.keyPath),D||"",!0,!1,!!f.autoIncrement,D&&typeof D!="string",!0),O=[],z=0;z<f.indexNames.length;++z){var F=f.index(f.indexNames[z]),D=F.keyPath,F=_r(F.name,D,!!F.unique,!!F.multiEntry,!1,D&&typeof D!="string",!1);O.push(F)}a[s]=xr(s,y,O)}),a}function Hn(t,e,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var f=a[s],y=n.objectStore(f);t._hasGetAll="getAll"in y;for(var O=0;O<y.indexNames.length;++O){var z=y.indexNames[O],D=y.index(z).keyPath,F=typeof D=="string"?D:"["+T(D).join("+")+"]";!e[f]||(D=e[f].idxByName[F])&&(D.name=z,delete e[f].idxByName[F],e[f].idxByName[z]=D)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}function yi(t){return t.split(",").map(function(e,n){var f=e.split(":"),a=(s=f[1])===null||s===void 0?void 0:s.trim(),s=(e=f[0].trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return _r(s,f||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),u(f),n===0,a)})}var $a=(ln.prototype._createTableSchema=xr,ln.prototype._parseIndexSyntax=yi,ln.prototype._parseStoresSpec=function(t,e){var n=this;h(t).forEach(function(a){if(t[a]!==null){var s=n._parseIndexSyntax(t[a]),f=s.shift();if(!f)throw new mt.Schema("Invalid schema for table "+a+": "+t[a]);if(f.unique=!0,f.multi)throw new mt.Schema("Primary key cannot be multiEntry*");s.forEach(function(y){if(y.auto)throw new mt.Schema("Only primary key can be marked as autoIncrement (++)");if(!y.keyPath)throw new mt.Schema("Index must have a name and cannot be an empty string")}),s=n._createTableSchema(a,f,s),e[a]=s}})},ln.prototype.stores=function(n){var e=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,n):n;var n=e._versions,a={},s={};return n.forEach(function(f){m(a,f._cfg.storesSource),s=f._cfg.dbschema={},f._parseStoresSpec(a,s)}),e._dbSchema=s,Cr(e,[e._allTables,e,e.Transaction.prototype]),qn(e,[e._allTables,e,e.Transaction.prototype,this._cfg.tables],h(s),s),e._storeNames=h(s),this},ln.prototype.upgrade=function(t){return this._cfg.contentUpgrade=ot(this._cfg.contentUpgrade||It,t),this},ln);function ln(){}function Er(t,e){var n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Te(Mn,{addons:[],indexedDB:t,IDBKeyRange:e})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function Or(t){return t&&typeof t.databases=="function"}function Tr(t){return Ie(function(){return Ct.letThrough=!0,t()})}function Pr(t){return!("from"in t)}var se=function(t,e){if(!this){var n=new se;return t&&"d"in t&&m(n,t),n}m(this,arguments.length?{d:1,from:t,to:1<arguments.length?e:t}:{d:0})};function xn(t,e,n){var a=Nt(e,n);if(!isNaN(a)){if(0<a)throw RangeError();if(Pr(t))return m(t,{from:e,to:n,d:1});var s=t.l,a=t.r;if(Nt(n,t.from)<0)return s?xn(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},wi(t);if(0<Nt(e,t.to))return a?xn(a,e,n):t.r={from:e,to:n,d:1,l:null,r:null},wi(t);Nt(e,t.from)<0&&(t.from=e,t.l=null,t.d=a?a.d+1:1),0<Nt(n,t.to)&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1),n=!t.r,s&&!t.l&&kn(t,s),a&&n&&kn(t,a)}}function kn(t,e){Pr(e)||(function n(a,z){var f=z.from,y=z.to,O=z.l,z=z.r;xn(a,f,y),O&&n(a,O),z&&n(a,z)})(t,e)}function bi(t,e){var n=Vn(e),a=n.next();if(a.done)return!1;for(var s=a.value,f=Vn(t),y=f.next(s.from),O=y.value;!a.done&&!y.done;){if(Nt(O.from,s.to)<=0&&0<=Nt(O.to,s.from))return!0;Nt(s.from,O.from)<0?s=(a=n.next(O.from)).value:O=(y=f.next(s.from)).value}return!1}function Vn(t){var e=Pr(t)?null:{s:0,n:t};return{next:function(n){for(var a=0<arguments.length;e;)switch(e.s){case 0:if(e.s=1,a)for(;e.n.l&&Nt(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!a||Nt(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function wi(t){var e,n,a=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=1<a?"r":a<-1?"l":"";s&&(e=s=="r"?"l":"r",n=c({},t),a=t[s],t.from=a.from,t.to=a.to,t[s]=a[s],n[s]=a[e],(t[e]=n).d=_i(n)),t.d=_i(t)}function _i(n){var e=n.r,n=n.l;return(e?n?Math.max(e.d,n.d):e.d:n?n.d:0)+1}function Xn(t,e){return h(e).forEach(function(n){t[n]?kn(t[n],e[n]):t[n]=(function a(s){var f,y,O={};for(f in s)_(s,f)&&(y=s[f],O[f]=!y||typeof y!="object"||Tt.has(y.constructor)?y:a(y));return O})(e[n])}),t}function $r(t,e){return t.all||e.all||Object.keys(t).some(function(n){return e[n]&&bi(e[n],t[n])})}S(se.prototype,((we={add:function(t){return kn(this,t),this},addKey:function(t){return xn(this,t,t),this},addKeys:function(t){var e=this;return t.forEach(function(n){return xn(e,n,n)}),this},hasKey:function(t){var e=Vn(this).next(t).value;return e&&Nt(e.from,t)<=0&&0<=Nt(e.to,t)}})[Pt]=function(){return Vn(this)},we));var Ze={},Rr={},zr=!1;function Yn(t){Xn(Rr,t),zr||(zr=!0,setTimeout(function(){zr=!1,Dr(Rr,!(Rr={}))},0))}function Dr(t,e){e===void 0&&(e=!1);var n=new Set;if(t.all)for(var a=0,s=Object.values(Ze);a<s.length;a++)xi(y=s[a],t,n,e);else for(var f in t){var y,O=/^idb\:\/\/(.*)\/(.*)\//.exec(f);O&&(f=O[1],O=O[2],(y=Ze["idb://".concat(f,"/").concat(O)])&&xi(y,t,n,e))}n.forEach(function(z){return z()})}function xi(t,e,n,a){for(var s=[],f=0,y=Object.entries(t.queries.query);f<y.length;f++){for(var O=y[f],z=O[0],D=[],F=0,P=O[1];F<P.length;F++){var U=P[F];$r(e,U.obsSet)?U.subscribers.forEach(function(L){return n.add(L)}):a&&D.push(U)}a&&s.push([z,D])}if(a)for(var I=0,M=s;I<M.length;I++){var j=M[I],z=j[0],D=j[1];t.queries.query[z]=D}}function Ra(t){var e=t._state,n=t._deps.indexedDB;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(function(){return e.dbOpenError?Yt(e.dbOpenError):t});e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;var a=e.openCanceller,s=Math.round(10*t.verno),f=!1;function y(){if(e.openCanceller!==a)throw new mt.DatabaseClosed("db.open() was cancelled")}function O(){return new _t(function(U,I){if(y(),!n)throw new mt.MissingAPI;var M=t.name,j=e.autoSchema||!s?n.open(M):n.open(M,s);if(!j)throw new mt.MissingAPI;j.onerror=ke(I),j.onblocked=Vt(t._fireOnBlocked),j.onupgradeneeded=Vt(function(L){var q;F=j.transaction,e.autoSchema&&!t._options.allowEmptyDB?(j.onerror=yn,F.abort(),j.result.close(),(q=n.deleteDatabase(M)).onsuccess=q.onerror=Vt(function(){I(new mt.NoSuchDatabase("Database ".concat(M," doesnt exist")))})):(F.onerror=ke(I),L=L.oldVersion>Math.pow(2,62)?0:L.oldVersion,P=L<1,t.idbdb=j.result,f&&Pa(t,F),Ta(t,L/10,F,I))},I),j.onsuccess=Vt(function(){F=null;var L,q,H,J,rt,ft=t.idbdb=j.result,bt=T(ft.objectStoreNames);if(0<bt.length)try{var ht=ft.transaction((J=bt).length===1?J[0]:J,"readonly");if(e.autoSchema)q=ft,H=ht,(L=t).verno=q.version/10,H=L._dbSchema=Zn(0,q,H),L._storeNames=T(q.objectStoreNames,0),qn(L,[L._allTables],h(H),H);else if(Hn(t,t._dbSchema,ht),((rt=Sr(Zn(0,(rt=t).idbdb,ht),rt._dbSchema)).add.length||rt.change.some(function(gt){return gt.add.length||gt.change.length}))&&!f)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),ft.close(),s=ft.version+1,f=!0,U(O());Kn(t,ht)}catch{}an.push(t),ft.onversionchange=Vt(function(gt){e.vcFired=!0,t.on("versionchange").fire(gt)}),ft.onclose=Vt(function(){t.close({disableAutoOpen:!1})}),P&&(rt=t._deps,ht=M,ft=rt.indexedDB,rt=rt.IDBKeyRange,Or(ft)||ht===Mn||Er(ft,rt).put({name:ht}).catch(It)),U()},I)}).catch(function(U){switch(U?.name){case"UnknownError":if(0<e.PR1398_maxLoop)return e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),O();break;case"VersionError":if(0<s)return s=0,O()}return _t.reject(U)})}var z,D=e.dbReadyResolve,F=null,P=!1;return _t.race([a,(typeof navigator>"u"?_t.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(U){function I(){return indexedDB.databases().finally(U)}z=setInterval(I,100),I()}).finally(function(){return clearInterval(z)}):Promise.resolve()).then(O)]).then(function(){return y(),e.onReadyBeingFired=[],_t.resolve(Tr(function(){return t.on.ready.fire(t.vip)})).then(function U(){if(0<e.onReadyBeingFired.length){var I=e.onReadyBeingFired.reduce(ot,It);return e.onReadyBeingFired=[],_t.resolve(Tr(function(){return I(t.vip)})).then(U)}})}).finally(function(){e.openCanceller===a&&(e.onReadyBeingFired=null,e.isBeingOpened=!1)}).catch(function(U){e.dbOpenError=U;try{F&&F.abort()}catch{}return a===e.openCanceller&&t._close(),Yt(U)}).finally(function(){e.openComplete=!0,D()}).then(function(){var U;return P&&(U={},t.tables.forEach(function(I){I.schema.indexes.forEach(function(M){M.name&&(U["idb://".concat(t.name,"/").concat(I.name,"/").concat(M.name)]=new se(-1/0,[[[]]]))}),U["idb://".concat(t.name,"/").concat(I.name,"/")]=U["idb://".concat(t.name,"/").concat(I.name,"/:dels")]=new se(-1/0,[[[]]])}),Fe(bn).fire(U),Dr(U,!0)),t})}function Ir(t){function e(f){return t.next(f)}var n=s(e),a=s(function(f){return t.throw(f)});function s(f){return function(z){var O=f(z),z=O.value;return O.done?z:z&&typeof z.then=="function"?z.then(n,a):u(z)?Promise.all(z).then(n,a):n(z)}}return s(e)()}function Gn(t,e,n){for(var a=u(t)?t.slice():[t],s=0;s<n;++s)a.push(e);return a}var za={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return c(c({},t),{table:function(e){var n=t.table(e),a=n.schema,s={},f=[];function y(P,U,I){var M=_n(P),j=s[M]=s[M]||[],L=P==null?0:typeof P=="string"?1:P.length,q=0<U,q=c(c({},I),{name:q?"".concat(M,"(virtual-from:").concat(I.name,")"):I.name,lowLevelIndex:I,isVirtual:q,keyTail:U,keyLength:L,extractKey:kr(P),unique:!q&&I.unique});return j.push(q),q.isPrimaryKey||f.push(q),1<L&&y(L===2?P[0]:P.slice(0,L-1),U+1,I),j.sort(function(H,J){return H.keyTail-J.keyTail}),q}e=y(a.primaryKey.keyPath,0,a.primaryKey),s[":id"]=[e];for(var O=0,z=a.indexes;O<z.length;O++){var D=z[O];y(D.keyPath,0,D)}function F(P){var U,I=P.query.index;return I.isVirtual?c(c({},P),{query:{index:I.lowLevelIndex,range:(U=P.query.range,I=I.keyTail,{type:U.type===1?2:U.type,lower:Gn(U.lower,U.lowerOpen?t.MAX_KEY:t.MIN_KEY,I),lowerOpen:!0,upper:Gn(U.upper,U.upperOpen?t.MIN_KEY:t.MAX_KEY,I),upperOpen:!0})}}):P}return c(c({},n),{schema:c(c({},a),{primaryKey:e,indexes:f,getIndexByKeyPath:function(P){return(P=s[_n(P)])&&P[0]}}),count:function(P){return n.count(F(P))},query:function(P){return n.query(F(P))},openCursor:function(P){var U=P.query.index,I=U.keyTail,M=U.isVirtual,j=U.keyLength;return M?n.openCursor(F(P)).then(function(q){return q&&L(q)}):n.openCursor(P);function L(q){return Object.create(q,{continue:{value:function(H){H!=null?q.continue(Gn(H,P.reverse?t.MAX_KEY:t.MIN_KEY,I)):P.unique?q.continue(q.key.slice(0,j).concat(P.reverse?t.MIN_KEY:t.MAX_KEY,I)):q.continue()}},continuePrimaryKey:{value:function(H,J){q.continuePrimaryKey(Gn(H,t.MAX_KEY,I),J)}},primaryKey:{get:function(){return q.primaryKey}},key:{get:function(){var H=q.key;return j===1?H[0]:H.slice(0,j)}},value:{get:function(){return q.value}}})}}})}})}};function Br(t,e,n,a){return n=n||{},a=a||"",h(t).forEach(function(s){var f,y,O;_(e,s)?(f=t[s],y=e[s],typeof f=="object"&&typeof y=="object"&&f&&y?(O=it(f))!==it(y)?n[a+s]=e[s]:O==="Object"?Br(f,y,n,a+s+"."):f!==y&&(n[a+s]=e[s]):f!==y&&(n[a+s]=e[s])):n[a+s]=void 0}),h(e).forEach(function(s){_(t,s)||(n[a+s]=e[s])}),n}function Mr(t,e){return e.type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}var Da={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(t){return c(c({},t),{table:function(e){var n=t.table(e),a=n.schema.primaryKey;return c(c({},n),{mutate:function(s){var f=Ct.trans,y=f.table(e).hook,O=y.deleting,z=y.creating,D=y.updating;switch(s.type){case"add":if(z.fire===It)break;return f._promise("readwrite",function(){return F(s)},!0);case"put":if(z.fire===It&&D.fire===It)break;return f._promise("readwrite",function(){return F(s)},!0);case"delete":if(O.fire===It)break;return f._promise("readwrite",function(){return F(s)},!0);case"deleteRange":if(O.fire===It)break;return f._promise("readwrite",function(){return(function P(U,I,M){return n.query({trans:U,values:!1,query:{index:a,range:I},limit:M}).then(function(j){var L=j.result;return F({type:"delete",keys:L,trans:U}).then(function(q){return 0<q.numFailures?Promise.reject(q.failures[0]):L.length<M?{failures:[],numFailures:0,lastResult:void 0}:P(U,c(c({},I),{lower:L[L.length-1],lowerOpen:!0}),M)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function F(P){var U,I,M,j=Ct.trans,L=P.keys||Mr(a,P);if(!L)throw new Error("Keys missing");return(P=P.type==="add"||P.type==="put"?c(c({},P),{keys:L}):c({},P)).type!=="delete"&&(P.values=d([],P.values)),P.keys&&(P.keys=d([],P.keys)),U=n,M=L,((I=P).type==="add"?Promise.resolve([]):U.getMany({trans:I.trans,keys:M,cache:"immutable"})).then(function(q){var H=L.map(function(J,rt){var ft,bt,ht,gt=q[rt],wt={onerror:null,onsuccess:null};return P.type==="delete"?O.fire.call(wt,J,gt,j):P.type==="add"||gt===void 0?(ft=z.fire.call(wt,J,P.values[rt],j),J==null&&ft!=null&&(P.keys[rt]=J=ft,a.outbound||G(P.values[rt],a.keyPath,J))):(ft=Br(gt,P.values[rt]),(bt=D.fire.call(wt,ft,J,gt,j))&&(ht=P.values[rt],Object.keys(bt).forEach(function(yt){_(ht,yt)?ht[yt]=bt[yt]:G(ht,yt,bt[yt])}))),wt});return n.mutate(P).then(function(J){for(var rt=J.failures,ft=J.results,bt=J.numFailures,J=J.lastResult,ht=0;ht<L.length;++ht){var gt=(ft||L)[ht],wt=H[ht];gt==null?wt.onerror&&wt.onerror(rt[ht]):wt.onsuccess&&wt.onsuccess(P.type==="put"&&q[ht]?P.values[ht]:gt)}return{failures:rt,results:ft,numFailures:bt,lastResult:J}}).catch(function(J){return H.forEach(function(rt){return rt.onerror&&rt.onerror(J)}),Promise.reject(J)})})}}})}})}};function ki(t,e,n){try{if(!e||e.keys.length<t.length)return null;for(var a=[],s=0,f=0;s<e.keys.length&&f<t.length;++s)Nt(e.keys[s],t[f])===0&&(a.push(n?Q(e.values[s]):e.values[s]),++f);return a.length===t.length?a:null}catch{return null}}var Ia={stack:"dbcore",level:-1,create:function(t){return{table:function(e){var n=t.table(e);return c(c({},n),{getMany:function(a){if(!a.cache)return n.getMany(a);var s=ki(a.keys,a.trans._cache,a.cache==="clone");return s?_t.resolve(s):n.getMany(a).then(function(f){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?Q(f):f},f})},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Ci(t,e){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!e.schema.primaryKey.outbound}function Si(t,e){switch(t){case"query":return e.values&&!e.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ba={stack:"dbcore",level:0,name:"Observability",create:function(t){var e=t.schema.name,n=new se(t.MIN_KEY,t.MAX_KEY);return c(c({},t),{transaction:function(a,s,f){if(Ct.subscr&&s!=="readonly")throw new mt.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Ct.querier));return t.transaction(a,s,f)},table:function(a){var s=t.table(a),f=s.schema,y=f.primaryKey,P=f.indexes,O=y.extractKey,z=y.outbound,D=y.autoIncrement&&P.filter(function(I){return I.compound&&I.keyPath.includes(y.keyPath)}),F=c(c({},s),{mutate:function(I){function M(yt){return yt="idb://".concat(e,"/").concat(a,"/").concat(yt),J[yt]||(J[yt]=new se)}var j,L,q,H=I.trans,J=I.mutatedParts||(I.mutatedParts={}),rt=M(""),ft=M(":dels"),bt=I.type,wt=I.type==="deleteRange"?[I.range]:I.type==="delete"?[I.keys]:I.values.length<50?[Mr(y,I).filter(function(yt){return yt}),I.values]:[],ht=wt[0],gt=wt[1],wt=I.trans._cache;return u(ht)?(rt.addKeys(ht),(wt=bt==="delete"||ht.length===gt.length?ki(ht,wt):null)||ft.addKeys(ht),(wt||gt)&&(j=M,L=wt,q=gt,f.indexes.forEach(function(yt){var St=j(yt.name||"");function zt(Mt){return Mt!=null?yt.extractKey(Mt):null}function Dt(Mt){return yt.multiEntry&&u(Mt)?Mt.forEach(function(ve){return St.addKey(ve)}):St.addKey(Mt)}(L||q).forEach(function(Mt,le){var Rt=L&&zt(L[le]),le=q&&zt(q[le]);Nt(Rt,le)!==0&&(Rt!=null&&Dt(Rt),le!=null&&Dt(le))})}))):ht?(gt={from:(gt=ht.lower)!==null&&gt!==void 0?gt:t.MIN_KEY,to:(gt=ht.upper)!==null&&gt!==void 0?gt:t.MAX_KEY},ft.add(gt),rt.add(gt)):(rt.add(n),ft.add(n),f.indexes.forEach(function(yt){return M(yt.name).add(n)})),s.mutate(I).then(function(yt){return!ht||I.type!=="add"&&I.type!=="put"||(rt.addKeys(yt.results),D&&D.forEach(function(St){for(var zt=I.values.map(function(Rt){return St.extractKey(Rt)}),Dt=St.keyPath.findIndex(function(Rt){return Rt===y.keyPath}),Mt=0,ve=yt.results.length;Mt<ve;++Mt)zt[Mt][Dt]=yt.results[Mt];M(St.name).addKeys(zt)})),H.mutatedParts=Xn(H.mutatedParts||{},J),yt})}}),P=function(M){var j=M.query,M=j.index,j=j.range;return[M,new se((M=j.lower)!==null&&M!==void 0?M:t.MIN_KEY,(j=j.upper)!==null&&j!==void 0?j:t.MAX_KEY)]},U={get:function(I){return[y,new se(I.key)]},getMany:function(I){return[y,new se().addKeys(I.keys)]},count:P,query:P,openCursor:P};return h(U).forEach(function(I){F[I]=function(M){var j=Ct.subscr,L=!!j,q=Ci(Ct,s)&&Si(I,M)?M.obsSet={}:j;if(L){var H=function(gt){return gt="idb://".concat(e,"/").concat(a,"/").concat(gt),q[gt]||(q[gt]=new se)},J=H(""),rt=H(":dels"),j=U[I](M),L=j[0],j=j[1];if((I==="query"&&L.isPrimaryKey&&!M.values?rt:H(L.name||"")).add(j),!L.isPrimaryKey){if(I!=="count"){var ft=I==="query"&&z&&M.values&&s.query(c(c({},M),{values:!1}));return s[I].apply(this,arguments).then(function(gt){if(I==="query"){if(z&&M.values)return ft.then(function(zt){return zt=zt.result,J.addKeys(zt),gt});var wt=M.values?gt.result.map(O):gt.result;(M.values?J:rt).addKeys(wt)}else if(I==="openCursor"){var yt=gt,St=M.values;return yt&&Object.create(yt,{key:{get:function(){return rt.addKey(yt.primaryKey),yt.key}},primaryKey:{get:function(){var zt=yt.primaryKey;return rt.addKey(zt),zt}},value:{get:function(){return St&&J.addKey(yt.primaryKey),yt.value}}})}return gt})}rt.add(n)}}return s[I].apply(this,arguments)}}),F}})}};function Ai(t,e,n){if(n.numFailures===0)return e;if(e.type==="deleteRange")return null;var a=e.keys?e.keys.length:"values"in e&&e.values?e.values.length:1;return n.numFailures===a?null:(e=c({},e),u(e.keys)&&(e.keys=e.keys.filter(function(s,f){return!(f in n.failures)})),"values"in e&&u(e.values)&&(e.values=e.values.filter(function(s,f){return!(f in n.failures)})),e)}function jr(t,e){return n=t,((a=e).lower===void 0||(a.lowerOpen?0<Nt(n,a.lower):0<=Nt(n,a.lower)))&&(t=t,(e=e).upper===void 0||(e.upperOpen?Nt(t,e.upper)<0:Nt(t,e.upper)<=0));var n,a}function Ei(t,e,U,a,s,f){if(!U||U.length===0)return t;var y=e.query.index,O=y.multiEntry,z=e.query.range,D=a.schema.primaryKey.extractKey,F=y.extractKey,P=(y.lowLevelIndex||y).extractKey,U=U.reduce(function(I,M){var j=I,L=[];if(M.type==="add"||M.type==="put")for(var q=new se,H=M.values.length-1;0<=H;--H){var J,rt=M.values[H],ft=D(rt);q.hasKey(ft)||(J=F(rt),(O&&u(J)?J.some(function(yt){return jr(yt,z)}):jr(J,z))&&(q.addKey(ft),L.push(rt)))}switch(M.type){case"add":var bt=new se().addKeys(e.values?I.map(function(St){return D(St)}):I),j=I.concat(e.values?L.filter(function(St){return St=D(St),!bt.hasKey(St)&&(bt.addKey(St),!0)}):L.map(function(St){return D(St)}).filter(function(St){return!bt.hasKey(St)&&(bt.addKey(St),!0)}));break;case"put":var ht=new se().addKeys(M.values.map(function(St){return D(St)}));j=I.filter(function(St){return!ht.hasKey(e.values?D(St):St)}).concat(e.values?L:L.map(function(St){return D(St)}));break;case"delete":var gt=new se().addKeys(M.keys);j=I.filter(function(St){return!gt.hasKey(e.values?D(St):St)});break;case"deleteRange":var wt=M.range;j=I.filter(function(St){return!jr(D(St),wt)})}return j},t);return U===t?t:(U.sort(function(I,M){return Nt(P(I),P(M))||Nt(D(I),D(M))}),e.limit&&e.limit<1/0&&(U.length>e.limit?U.length=e.limit:t.length===e.limit&&U.length<e.limit&&(s.dirty=!0)),f?Object.freeze(U):U)}function Oi(t,e){return Nt(t.lower,e.lower)===0&&Nt(t.upper,e.upper)===0&&!!t.lowerOpen==!!e.lowerOpen&&!!t.upperOpen==!!e.upperOpen}function Ma(t,e){return(function(n,a,s,f){if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((a=Nt(n,a))===0){if(s&&f)return 0;if(s)return 1;if(f)return-1}return a})(t.lower,e.lower,t.lowerOpen,e.lowerOpen)<=0&&0<=(function(n,a,s,f){if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((a=Nt(n,a))===0){if(s&&f)return 0;if(s)return-1;if(f)return 1}return a})(t.upper,e.upper,t.upperOpen,e.upperOpen)}function ja(t,e,n,a){t.subscribers.add(n),a.addEventListener("abort",function(){var s,f;t.subscribers.delete(n),t.subscribers.size===0&&(s=t,f=e,setTimeout(function(){s.subscribers.size===0&&$t(f,s)},3e3))})}var Fa={stack:"dbcore",level:0,name:"Cache",create:function(t){var e=t.schema.name;return c(c({},t),{transaction:function(n,a,s){var f,y,O=t.transaction(n,a,s);return a==="readwrite"&&(y=(f=new AbortController).signal,s=function(z){return function(){if(f.abort(),a==="readwrite"){for(var D=new Set,F=0,P=n;F<P.length;F++){var U=P[F],I=Ze["idb://".concat(e,"/").concat(U)];if(I){var M=t.table(U),j=I.optimisticOps.filter(function(St){return St.trans===O});if(O._explicit&&z&&O.mutatedParts)for(var L=0,q=Object.values(I.queries.query);L<q.length;L++)for(var H=0,J=(bt=q[L]).slice();H<J.length;H++)$r((ht=J[H]).obsSet,O.mutatedParts)&&($t(bt,ht),ht.subscribers.forEach(function(St){return D.add(St)}));else if(0<j.length){I.optimisticOps=I.optimisticOps.filter(function(St){return St.trans!==O});for(var rt=0,ft=Object.values(I.queries.query);rt<ft.length;rt++)for(var bt,ht,gt,wt=0,yt=(bt=ft[rt]).slice();wt<yt.length;wt++)(ht=yt[wt]).res!=null&&O.mutatedParts&&(z&&!ht.dirty?(gt=Object.isFrozen(ht.res),gt=Ei(ht.res,ht.req,j,M,ht,gt),ht.dirty?($t(bt,ht),ht.subscribers.forEach(function(St){return D.add(St)})):gt!==ht.res&&(ht.res=gt,ht.promise=_t.resolve({result:gt}))):(ht.dirty&&$t(bt,ht),ht.subscribers.forEach(function(St){return D.add(St)})))}}}D.forEach(function(St){return St()})}}},O.addEventListener("abort",s(!1),{signal:y}),O.addEventListener("error",s(!1),{signal:y}),O.addEventListener("complete",s(!0),{signal:y})),O},table:function(n){var a=t.table(n),s=a.schema.primaryKey;return c(c({},a),{mutate:function(f){var y=Ct.trans;if(s.outbound||y.db._options.cache==="disabled"||y.explicit||y.idbtrans.mode!=="readwrite")return a.mutate(f);var O=Ze["idb://".concat(e,"/").concat(n)];return O?(y=a.mutate(f),f.type!=="add"&&f.type!=="put"||!(50<=f.values.length||Mr(s,f).some(function(z){return z==null}))?(O.optimisticOps.push(f),f.mutatedParts&&Yn(f.mutatedParts),y.then(function(z){0<z.numFailures&&($t(O.optimisticOps,f),(z=Ai(0,f,z))&&O.optimisticOps.push(z),f.mutatedParts&&Yn(f.mutatedParts))}),y.catch(function(){$t(O.optimisticOps,f),f.mutatedParts&&Yn(f.mutatedParts)})):y.then(function(z){var D=Ai(0,c(c({},f),{values:f.values.map(function(F,P){var U;return z.failures[P]?F:(F=(U=s.keyPath)!==null&&U!==void 0&&U.includes(".")?Q(F):c({},F),G(F,s.keyPath,z.results[P]),F)})}),z);O.optimisticOps.push(D),queueMicrotask(function(){return f.mutatedParts&&Yn(f.mutatedParts)})}),y):a.mutate(f)},query:function(f){if(!Ci(Ct,a)||!Si("query",f))return a.query(f);var y=((D=Ct.trans)===null||D===void 0?void 0:D.db._options.cache)==="immutable",P=Ct,O=P.requery,z=P.signal,D=(function(M,j,L,q){var H=Ze["idb://".concat(M,"/").concat(j)];if(!H)return[];if(!(j=H.queries[L]))return[null,!1,H,null];var J=j[(q.query?q.query.index.name:null)||""];if(!J)return[null,!1,H,null];switch(L){case"query":var rt=J.find(function(ft){return ft.req.limit===q.limit&&ft.req.values===q.values&&Oi(ft.req.query.range,q.query.range)});return rt?[rt,!0,H,J]:[J.find(function(ft){return("limit"in ft.req?ft.req.limit:1/0)>=q.limit&&(!q.values||ft.req.values)&&Ma(ft.req.query.range,q.query.range)}),!1,H,J];case"count":return rt=J.find(function(ft){return Oi(ft.req.query.range,q.query.range)}),[rt,!!rt,H,J]}})(e,n,"query",f),F=D[0],P=D[1],U=D[2],I=D[3];return F&&P?F.obsSet=f.obsSet:(P=a.query(f).then(function(M){var j=M.result;if(F&&(F.res=j),y){for(var L=0,q=j.length;L<q;++L)Object.freeze(j[L]);Object.freeze(j)}else M.result=Q(j);return M}).catch(function(M){return I&&F&&$t(I,F),Promise.reject(M)}),F={obsSet:f.obsSet,promise:P,subscribers:new Set,type:"query",req:f,dirty:!1},I?I.push(F):(I=[F],(U=U||(Ze["idb://".concat(e,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[f.query.index.name||""]=I)),ja(F,I,O,z),F.promise.then(function(M){return{result:Ei(M.result,f,U?.optimisticOps,a,F,y)}})}})}})}};function Jn(t,e){return new Proxy(t,{get:function(n,a,s){return a==="db"?e:Reflect.get(n,a,s)}})}var Te=(Gt.prototype.version=function(t){if(isNaN(t)||t<.1)throw new mt.Type("Given version is not a positive number");if(t=Math.round(10*t)/10,this.idbdb||this._state.isBeingOpened)throw new mt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var e=this._versions,n=e.filter(function(a){return a._cfg.version===t})[0];return n||(n=new this.Version(t),e.push(n),e.sort(Oa),n.stores({}),this._state.autoSchema=!1,n)},Gt.prototype._whenReady=function(t){var e=this;return this.idbdb&&(this._state.openComplete||Ct.letThrough||this._vip)?t():new _t(function(n,a){if(e._state.openComplete)return a(new mt.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return void a(new mt.DatabaseClosed);e.open().catch(It)}e._state.dbReadyPromise.then(n,a)}).then(t)},Gt.prototype.use=function(t){var e=t.stack,n=t.create,a=t.level,s=t.name;return s&&this.unuse({stack:e,name:s}),t=this._middlewares[e]||(this._middlewares[e]=[]),t.push({stack:e,create:n,level:a??10,name:s}),t.sort(function(f,y){return f.level-y.level}),this},Gt.prototype.unuse=function(t){var e=t.stack,n=t.name,a=t.create;return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},Gt.prototype.open=function(){var t=this;return Ke(be,function(){return Ra(t)})},Gt.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state,e=an.indexOf(this);if(0<=e&&an.splice(e,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new _t(function(n){t.dbReadyResolve=n}),t.openCanceller=new _t(function(n,a){t.cancelOpen=a}))},Gt.prototype.close=function(n){var e=(n===void 0?{disableAutoOpen:!0}:n).disableAutoOpen,n=this._state;e?(n.isBeingOpened&&n.cancelOpen(new mt.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new mt.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Gt.prototype.delete=function(t){var e=this;t===void 0&&(t={disableAutoOpen:!0});var n=0<arguments.length&&typeof arguments[0]!="object",a=this._state;return new _t(function(s,f){function y(){e.close(t);var O=e._deps.indexedDB.deleteDatabase(e.name);O.onsuccess=Vt(function(){var z,D,F;z=e._deps,D=e.name,F=z.indexedDB,z=z.IDBKeyRange,Or(F)||D===Mn||Er(F,z).delete(D).catch(It),s()}),O.onerror=ke(f),O.onblocked=e._fireOnBlocked}if(n)throw new mt.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(y):y()})},Gt.prototype.backendDB=function(){return this.idbdb},Gt.prototype.isOpen=function(){return this.idbdb!==null},Gt.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},Gt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Gt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Gt.prototype,"tables",{get:function(){var t=this;return h(this._allTables).map(function(e){return t._allTables[e]})},enumerable:!1,configurable:!0}),Gt.prototype.transaction=function(){var t=function(e,n,a){var s=arguments.length;if(s<2)throw new mt.InvalidArgument("Too few arguments");for(var f=new Array(s-1);--s;)f[s-1]=arguments[s];return a=f.pop(),[e,pt(f),a]}.apply(this,arguments);return this._transaction.apply(this,t)},Gt.prototype._transaction=function(t,e,n){var a=this,s=Ct.trans;s&&s.db===this&&t.indexOf("!")===-1||(s=null);var f,y,O=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");try{if(y=e.map(function(D){if(D=D instanceof a.Table?D.name:D,typeof D!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return D}),t=="r"||t===gr)f=gr;else{if(t!="rw"&&t!=vr)throw new mt.InvalidArgument("Invalid transaction mode: "+t);f=vr}if(s){if(s.mode===gr&&f===vr){if(!O)throw new mt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&y.forEach(function(D){if(s&&s.storeNames.indexOf(D)===-1){if(!O)throw new mt.SubTransaction("Table "+D+" not included in parent transaction.");s=null}}),O&&s&&!s.active&&(s=null)}}catch(D){return s?s._promise(null,function(F,P){P(D)}):Yt(D)}var z=function D(F,P,U,I,M){return _t.resolve().then(function(){var j=Ct.transless||Ct,L=F._createTransaction(P,U,F._dbSchema,I);if(L.explicit=!0,j={trans:L,transless:j},I)L.idbtrans=I.idbtrans;else try{L.create(),L.idbtrans._explicit=!0,F._state.PR1398_maxLoop=3}catch(J){return J.name===Qt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return D(F,P,U,null,M)})):Yt(J)}var q,H=X(M);return H&&rn(),j=_t.follow(function(){var J;(q=M.call(L,L))&&(H?(J=Be.bind(null,null),q.then(J,J)):typeof q.next=="function"&&typeof q.throw=="function"&&(q=Ir(q)))},j),(q&&typeof q.then=="function"?_t.resolve(q).then(function(J){return L.active?J:Yt(new mt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):j.then(function(){return q})).then(function(J){return I&&L._resolve(),L._completion.then(function(){return J})}).catch(function(J){return L._reject(J),Yt(J)})})}.bind(null,this,f,y,s,n);return s?s._promise(f,z,"lock"):Ct.trans?Ke(Ct.transless,function(){return a._whenReady(z)}):this._whenReady(z)},Gt.prototype.table=function(t){if(!_(this._allTables,t))throw new mt.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},Gt);function Gt(t,e){var n=this;this._middlewares={},this.verno=0;var a=Gt.dependencies;this._options=e=c({addons:Gt.addons,autoOpen:!0,indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange,cache:"cloned"},e),this._deps={indexedDB:e.indexedDB,IDBKeyRange:e.IDBKeyRange},a=e.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var s,f,y,O,z,D={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:It,dbReadyPromise:null,cancelOpen:It,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:e.autoOpen};D.dbReadyPromise=new _t(function(P){D.dbReadyResolve=P}),D.openCanceller=new _t(function(P,U){D.cancelOpen=U}),this._state=D,this.name=t,this.on=gn(this,"populate","blocked","versionchange","close",{ready:[ot,It]}),this.once=function(P,U){var I=function(){for(var M=[],j=0;j<arguments.length;j++)M[j]=arguments[j];n.on(P).unsubscribe(I),U.apply(n,M)};return n.on(P,I)},this.on.ready.subscribe=B(this.on.ready.subscribe,function(P){return function(U,I){Gt.vip(function(){var M,j=n._state;j.openComplete?(j.dbOpenError||_t.resolve().then(U),I&&P(U)):j.onReadyBeingFired?(j.onReadyBeingFired.push(U),I&&P(U)):(P(U),M=n,I||P(function L(){M.on.ready.unsubscribe(U),M.on.ready.unsubscribe(L)}))})}}),this.Collection=(s=this,vn(_a.prototype,function(q,L){this.db=s;var I=ri,M=null;if(L)try{I=L()}catch(H){M=H}var j=q._ctx,L=j.table,q=L.hook.reading.fire;this._ctx={table:L,index:j.index,isPrimKey:!j.index||L.schema.primKey.keyPath&&j.index===L.schema.primKey.name,range:I,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:M,or:j.or,valueMapper:q!==ae?q:null}})),this.Table=(f=this,vn(ui.prototype,function(P,U,I){this.db=f,this._tx=I,this.name=P,this.schema=U,this.hook=f._allTables[P]?f._allTables[P].hook:gn(null,{creating:[Y,It],reading:[l,ae],updating:[x,It],deleting:[E,It]})})),this.Transaction=(y=this,vn(Ca.prototype,function(P,U,I,M,j){var L=this;P!=="readonly"&&U.forEach(function(q){q=(q=I[q])===null||q===void 0?void 0:q.yProps,q&&(U=U.concat(q.map(function(H){return H.updatesTable})))}),this.db=y,this.mode=P,this.storeNames=U,this.schema=I,this.chromeTransactionDurability=M,this.idbtrans=null,this.on=gn(this,"complete","error","abort"),this.parent=j||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new _t(function(q,H){L._resolve=q,L._reject=H}),this._completion.then(function(){L.active=!1,L.on.complete.fire()},function(q){var H=L.active;return L.active=!1,L.on.error.fire(q),L.parent?L.parent._reject(q):H&&L.idbtrans&&L.idbtrans.abort(),Yt(q)})})),this.Version=(O=this,vn($a.prototype,function(P){this.db=O,this._cfg={version:P,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(z=this,vn(pi.prototype,function(P,U,I){if(this.db=z,this._ctx={table:P,index:U===":id"?null:U,or:I},this._cmp=this._ascending=Nt,this._descending=function(M,j){return Nt(j,M)},this._max=function(M,j){return 0<Nt(M,j)?M:j},this._min=function(M,j){return Nt(M,j)<0?M:j},this._IDBKeyRange=z._deps.IDBKeyRange,!this._IDBKeyRange)throw new mt.MissingAPI})),this.on("versionchange",function(P){0<P.newVersion?console.warn("Another connection wants to upgrade database '".concat(n.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(n.name,"'. Closing db now to resume the delete request.")),n.close({disableAutoOpen:!1})}),this.on("blocked",function(P){!P.newVersion||P.newVersion<P.oldVersion?console.warn("Dexie.delete('".concat(n.name,"') was blocked")):console.warn("Upgrade '".concat(n.name,"' blocked by other connection holding version ").concat(P.oldVersion/10))}),this._maxKey=wn(e.IDBKeyRange),this._createTransaction=function(P,U,I,M){return new n.Transaction(P,U,I,n._options.chromeTransactionDurability,M)},this._fireOnBlocked=function(P){n.on("blocked").fire(P),an.filter(function(U){return U.name===n.name&&U!==n&&!U._state.vcFired}).map(function(U){return U.on("versionchange").fire(P)})},this.use(Ia),this.use(Fa),this.use(Ba),this.use(za),this.use(Da);var F=new Proxy(this,{get:function(P,U,I){if(U==="_vip")return!0;if(U==="table")return function(j){return Jn(n.table(j),F)};var M=Reflect.get(P,U,I);return M instanceof ui?Jn(M,F):U==="tables"?M.map(function(j){return Jn(j,F)}):U==="_createTransaction"?function(){return Jn(M.apply(this,arguments),F)}:M}});this.vip=F,a.forEach(function(P){return P(n)})}var Qn,we=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Na=(Fr.prototype.subscribe=function(t,e,n){return this._subscribe(t&&typeof t!="function"?t:{next:t,error:e,complete:n})},Fr.prototype[we]=function(){return this},Fr);function Fr(t){this._subscribe=t}try{Qn={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{Qn={indexedDB:null,IDBKeyRange:null}}function Ti(t){var e,n=!1,a=new Na(function(s){var f=X(t),y,O=!1,z={},D={},F={get closed(){return O},unsubscribe:function(){O||(O=!0,y&&y.abort(),P&&Fe.storagemutated.unsubscribe(I))}};s.start&&s.start(F);var P=!1,U=function(){return mr(M)},I=function(j){Xn(z,j),$r(D,z)&&U()},M=function(){var j,L,q;!O&&Qn.indexedDB&&(z={},j={},y&&y.abort(),y=new AbortController,q=(function(H){var J=en();try{f&&rn();var rt=Ie(t,H);return rt=f?rt.finally(Be):rt}finally{J&&nn()}})(L={subscr:j,signal:y.signal,requery:U,querier:t,trans:null}),Promise.resolve(q).then(function(H){n=!0,e=H,O||L.signal.aborted||(z={},(function(J){for(var rt in J)if(_(J,rt))return;return 1})(D=j)||P||(Fe(bn,I),P=!0),mr(function(){return!O&&s.next&&s.next(H)}))},function(H){n=!1,["DatabaseClosedError","AbortError"].includes(H?.name)||O||mr(function(){O||s.error&&s.error(H)})}))};return setTimeout(U,0),F});return a.hasValue=function(){return n},a.getValue=function(){return e},a}var He=Te;function Nr(t){var e=Ne;try{Ne=!0,Fe.storagemutated.fire(t),Dr(t,!0)}finally{Ne=e}}S(He,c(c({},Wt),{delete:function(t){return new He(t,{addons:[]}).delete()},exists:function(t){return new He(t,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(t){try{return e=He.dependencies,n=e.indexedDB,e=e.IDBKeyRange,(Or(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==Mn})}):Er(n,e).toCollection().primaryKeys()).then(t)}catch{return Yt(new mt.MissingAPI)}var e,n},defineClass:function(){return function(t){m(this,t)}},ignoreTransaction:function(t){return Ct.trans?Ke(Ct.transless,t):t()},vip:Tr,async:function(t){return function(){try{var e=Ir(t.apply(this,arguments));return e&&typeof e.then=="function"?e:_t.resolve(e)}catch(n){return Yt(n)}}},spawn:function(t,e,n){try{var a=Ir(t.apply(n,e||[]));return a&&typeof a.then=="function"?a:_t.resolve(a)}catch(s){return Yt(s)}},currentTransaction:{get:function(){return Ct.trans||null}},waitFor:function(t,e){return e=_t.resolve(typeof t=="function"?He.ignoreTransaction(t):t).timeout(e||6e4),Ct.trans?Ct.trans.waitFor(e):e},Promise:_t,debug:{get:function(){return at},set:function(t){Z(t)}},derive:v,extend:m,props:S,override:B,Events:gn,on:Fe,liveQuery:Ti,extendObservabilitySet:Xn,getByKeyPath:nt,setByKeyPath:G,delByKeyPath:function(t,e){typeof e=="string"?G(t,e,void 0):"length"in e&&[].map.call(e,function(n){G(t,n,void 0)})},shallowClone:ut,deepClone:Q,getObjectDiff:Br,cmp:Nt,asap:K,minKey:-1/0,addons:[],connections:an,errnames:Qt,dependencies:Qn,cache:Ze,semVer:"4.2.1",version:"4.2.1".split(".").map(function(t){return parseInt(t)}).reduce(function(t,e,n){return t+e/Math.pow(10,2*n)})})),He.maxKey=wn(He.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Fe(bn,function(t){Ne||(t=new CustomEvent(wr,{detail:t}),Ne=!0,dispatchEvent(t),Ne=!1)}),addEventListener(wr,function(t){t=t.detail,Ne||Nr(t)}));var un,Ne=!1,Pi=function(){};return typeof BroadcastChannel<"u"&&((Pi=function(){(un=new BroadcastChannel(wr)).onmessage=function(t){return t.data&&Nr(t.data)}})(),typeof un.unref=="function"&&un.unref(),Fe(bn,function(t){Ne||un.postMessage(t)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(t){if(!Te.disableBfCache&&t.persisted){at&&console.debug("Dexie: handling persisted pagehide"),un?.close();for(var e=0,n=an;e<n.length;e++)n[e].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(t){!Te.disableBfCache&&t.persisted&&(at&&console.debug("Dexie: handling persisted pageshow"),Pi(),Nr({all:new se(-1/0,[[]])}))})),_t.rejectionMapper=function(t,e){return!t||t instanceof Et||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Xt[t.name]?t:(e=new Xt[t.name](e||t.message,t),"stack"in t&&A(e,"stack",{get:function(){return this.inner.stack}}),e)},Z(at),c(Te,Object.freeze({__proto__:null,Dexie:Te,liveQuery:Ti,Entity:ii,cmp:Nt,PropModification:mn,replacePrefix:function(t,e){return new mn({replacePrefix:[t,e]})},add:function(t){return new mn({add:t})},remove:function(t){return new mn({remove:t})},default:Te,RangeSet:se,mergeRanges:kn,rangesOverlap:bi}),{default:Te}),Te})})(rr)),rr.exports}var xo=_o();const Wr=na(xo),Ki=Symbol.for("Dexie"),lr=globalThis[Ki]||(globalThis[Ki]=Wr);if(Wr.semVer!==lr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Wr.semVer} and ${lr.semVer}`);const{liveQuery:os,mergeRanges:ss,rangesOverlap:ls,RangeSet:us,cmp:cs,Entity:hs,PropModification:ds,replacePrefix:fs,add:ps,remove:ms,DexieYProvider:gs}=lr;class ko extends lr{constructor(){super("AudioAnnotationDB"),this.version(1).stores({recordings:"id, title, createdAt, isAnnotated",annotations:"recordingId, completedAt, updatedAt"})}}const _e=new ko;async function ra($){const{v4:r}=await bo(async()=>{const{v4:d}=await import("./index-gGVEG6Gs.js");return{v4:d}},[]),i=r(),c={...$,id:i,createdAt:Date.now(),isAnnotated:!1};return await _e.recordings.add(c),i}async function ia(){return await _e.recordings.orderBy("createdAt").reverse().toArray()}async function Co($){return await _e.recordings.get($)}async function So($,r){await _e.recordings.update($,r)}async function Ao($){await _e.recordings.delete($),await _e.annotations.delete($)}async function qi($){await _e.annotations.put($),await _e.recordings.update($.recordingId,{isAnnotated:!0})}async function ur($){return await _e.annotations.get($)}async function Eo($){await _e.annotations.delete($),await _e.recordings.update($,{isAnnotated:!1})}async function Oo(){const $=await _e.recordings.toArray(),r=/^Untitled (\d+)$/,i=$.map(c=>c.title.match(r)?.[1]).filter(Boolean).map(Number);return i.length>0?Math.max(...i)+1:1}function To($){const r=$.lastIndexOf(".");return r===-1?$:$.substring(0,r)}async function Po($){return new Promise((r,i)=>{const c=new Audio,d=URL.createObjectURL($);c.addEventListener("loadedmetadata",()=>{URL.revokeObjectURL(d),r(c.duration)}),c.addEventListener("error",()=>{URL.revokeObjectURL(d),i(new Error("Failed to load audio metadata"))}),c.src=d})}async function $o($){if(!$.type.startsWith("audio/"))throw new Error("File must be an audio file");const r=To($.name),i=await Po($);return{id:await ra({title:r,audioBlob:$,duration:i,source:"upload"}),title:r,duration:i}}async function Ro($){const r=Array.from($),i=[];for(const c of r)try{const d=await $o(c);i.push(d)}catch(d){console.error(`Failed to upload ${c.name}:`,d)}return i}function zo(){return new Promise($=>{const r=document.createElement("input");r.type="file",r.accept="audio/*",r.multiple=!0,r.addEventListener("change",()=>{$(r.files)}),r.addEventListener("cancel",()=>{$(null)}),r.click()})}function er($){throw new Error('Could not dynamically require "'+$+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Kr={exports:{}};var Wi;function Do(){return Wi||(Wi=1,(function($,r){(function(i){$.exports=i()})(function(){return(function i(c,d,o){function h(w,C){if(!d[w]){if(!c[w]){var _=typeof er=="function"&&er;if(!C&&_)return _(w,!0);if(u)return u(w,!0);var S=new Error("Cannot find module '"+w+"'");throw S.code="MODULE_NOT_FOUND",S}var g=d[w]={exports:{}};c[w][0].call(g.exports,function(A){var v=c[w][1][A];return h(v||A)},g,g.exports,i,c,d,o)}return d[w].exports}for(var u=typeof er=="function"&&er,m=0;m<o.length;m++)h(o[m]);return h})({1:[function(i,c,d){var o=i("./utils"),h=i("./support"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";d.encode=function(m){for(var w,C,_,S,g,A,v,k=[],b=0,T=m.length,B=T,W=o.getTypeOf(m)!=="string";b<m.length;)B=T-b,_=W?(w=m[b++],C=b<T?m[b++]:0,b<T?m[b++]:0):(w=m.charCodeAt(b++),C=b<T?m.charCodeAt(b++):0,b<T?m.charCodeAt(b++):0),S=w>>2,g=(3&w)<<4|C>>4,A=1<B?(15&C)<<2|_>>6:64,v=2<B?63&_:64,k.push(u.charAt(S)+u.charAt(g)+u.charAt(A)+u.charAt(v));return k.join("")},d.decode=function(m){var w,C,_,S,g,A,v=0,k=0,b="data:";if(m.substr(0,b.length)===b)throw new Error("Invalid base64 input, it looks like a data url.");var T,B=3*(m=m.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(m.charAt(m.length-1)===u.charAt(64)&&B--,m.charAt(m.length-2)===u.charAt(64)&&B--,B%1!=0)throw new Error("Invalid base64 input, bad content length.");for(T=h.uint8array?new Uint8Array(0|B):new Array(0|B);v<m.length;)w=u.indexOf(m.charAt(v++))<<2|(S=u.indexOf(m.charAt(v++)))>>4,C=(15&S)<<4|(g=u.indexOf(m.charAt(v++)))>>2,_=(3&g)<<6|(A=u.indexOf(m.charAt(v++))),T[k++]=w,g!==64&&(T[k++]=C),A!==64&&(T[k++]=_);return T}},{"./support":30,"./utils":32}],2:[function(i,c,d){var o=i("./external"),h=i("./stream/DataWorker"),u=i("./stream/Crc32Probe"),m=i("./stream/DataLengthProbe");function w(C,_,S,g,A){this.compressedSize=C,this.uncompressedSize=_,this.crc32=S,this.compression=g,this.compressedContent=A}w.prototype={getContentWorker:function(){var C=new h(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new m("data_length")),_=this;return C.on("end",function(){if(this.streamInfo.data_length!==_.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),C},getCompressedWorker:function(){return new h(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},w.createWorkerFrom=function(C,_,S){return C.pipe(new u).pipe(new m("uncompressedSize")).pipe(_.compressWorker(S)).pipe(new m("compressedSize")).withStreamInfo("compression",_)},c.exports=w},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,c,d){var o=i("./stream/GenericWorker");d.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},d.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,c,d){var o=i("./utils"),h=(function(){for(var u,m=[],w=0;w<256;w++){u=w;for(var C=0;C<8;C++)u=1&u?3988292384^u>>>1:u>>>1;m[w]=u}return m})();c.exports=function(u,m){return u!==void 0&&u.length?o.getTypeOf(u)!=="string"?(function(w,C,_,S){var g=h,A=S+_;w^=-1;for(var v=S;v<A;v++)w=w>>>8^g[255&(w^C[v])];return-1^w})(0|m,u,u.length,0):(function(w,C,_,S){var g=h,A=S+_;w^=-1;for(var v=S;v<A;v++)w=w>>>8^g[255&(w^C.charCodeAt(v))];return-1^w})(0|m,u,u.length,0):0}},{"./utils":32}],5:[function(i,c,d){d.base64=!1,d.binary=!1,d.dir=!1,d.createFolders=!0,d.date=null,d.compression=null,d.compressionOptions=null,d.comment=null,d.unixPermissions=null,d.dosPermissions=null},{}],6:[function(i,c,d){var o=null;o=typeof Promise<"u"?Promise:i("lie"),c.exports={Promise:o}},{lie:37}],7:[function(i,c,d){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",h=i("pako"),u=i("./utils"),m=i("./stream/GenericWorker"),w=o?"uint8array":"array";function C(_,S){m.call(this,"FlateWorker/"+_),this._pako=null,this._pakoAction=_,this._pakoOptions=S,this.meta={}}d.magic="\b\0",u.inherits(C,m),C.prototype.processChunk=function(_){this.meta=_.meta,this._pako===null&&this._createPako(),this._pako.push(u.transformTo(w,_.data),!1)},C.prototype.flush=function(){m.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},C.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this._pako=null},C.prototype._createPako=function(){this._pako=new h[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var _=this;this._pako.onData=function(S){_.push({data:S,meta:_.meta})}},d.compressWorker=function(_){return new C("Deflate",_)},d.uncompressWorker=function(){return new C("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,c,d){function o(g,A){var v,k="";for(v=0;v<A;v++)k+=String.fromCharCode(255&g),g>>>=8;return k}function h(g,A,v,k,b,T){var B,W,K=g.file,nt=g.compression,G=T!==w.utf8encode,ut=u.transformTo("string",T(K.name)),tt=u.transformTo("string",w.utf8encode(K.name)),pt=K.comment,Tt=u.transformTo("string",T(pt)),R=u.transformTo("string",w.utf8encode(pt)),Q=tt.length!==K.name.length,p=R.length!==pt.length,it="",Pt="",lt="",$t=K.dir,st=K.date,Ot={crc32:0,compressedSize:0,uncompressedSize:0};A&&!v||(Ot.crc32=g.crc32,Ot.compressedSize=g.compressedSize,Ot.uncompressedSize=g.uncompressedSize);var X=0;A&&(X|=8),G||!Q&&!p||(X|=2048);var V=0,Et=0;$t&&(V|=16),b==="UNIX"?(Et=798,V|=(function(vt,qt){var Qt=vt;return vt||(Qt=qt?16893:33204),(65535&Qt)<<16})(K.unixPermissions,$t)):(Et=20,V|=(function(vt){return 63&(vt||0)})(K.dosPermissions)),B=st.getUTCHours(),B<<=6,B|=st.getUTCMinutes(),B<<=5,B|=st.getUTCSeconds()/2,W=st.getUTCFullYear()-1980,W<<=4,W|=st.getUTCMonth()+1,W<<=5,W|=st.getUTCDate(),Q&&(Pt=o(1,1)+o(C(ut),4)+tt,it+="up"+o(Pt.length,2)+Pt),p&&(lt=o(1,1)+o(C(Tt),4)+R,it+="uc"+o(lt.length,2)+lt);var xt="";return xt+=`
\0`,xt+=o(X,2),xt+=nt.magic,xt+=o(B,2),xt+=o(W,2),xt+=o(Ot.crc32,4),xt+=o(Ot.compressedSize,4),xt+=o(Ot.uncompressedSize,4),xt+=o(ut.length,2),xt+=o(it.length,2),{fileRecord:_.LOCAL_FILE_HEADER+xt+ut+it,dirRecord:_.CENTRAL_FILE_HEADER+o(Et,2)+xt+o(Tt.length,2)+"\0\0\0\0"+o(V,4)+o(k,4)+ut+it+Tt}}var u=i("../utils"),m=i("../stream/GenericWorker"),w=i("../utf8"),C=i("../crc32"),_=i("../signature");function S(g,A,v,k){m.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=A,this.zipPlatform=v,this.encodeFileName=k,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}u.inherits(S,m),S.prototype.push=function(g){var A=g.meta.percent||0,v=this.entriesCount,k=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,m.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:v?(A+100*(v-k-1))/v:100}}))},S.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var A=this.streamFiles&&!g.file.dir;if(A){var v=h(g,A,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:v.fileRecord,meta:{percent:0}})}else this.accumulate=!0},S.prototype.closedSource=function(g){this.accumulate=!1;var A=this.streamFiles&&!g.file.dir,v=h(g,A,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(v.dirRecord),A)this.push({data:(function(k){return _.DATA_DESCRIPTOR+o(k.crc32,4)+o(k.compressedSize,4)+o(k.uncompressedSize,4)})(g),meta:{percent:100}});else for(this.push({data:v.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},S.prototype.flush=function(){for(var g=this.bytesWritten,A=0;A<this.dirRecords.length;A++)this.push({data:this.dirRecords[A],meta:{percent:100}});var v=this.bytesWritten-g,k=(function(b,T,B,W,K){var nt=u.transformTo("string",K(W));return _.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(b,2)+o(b,2)+o(T,4)+o(B,4)+o(nt.length,2)+nt})(this.dirRecords.length,v,g,this.zipComment,this.encodeFileName);this.push({data:k,meta:{percent:100}})},S.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},S.prototype.registerPrevious=function(g){this._sources.push(g);var A=this;return g.on("data",function(v){A.processChunk(v)}),g.on("end",function(){A.closedSource(A.previous.streamInfo),A._sources.length?A.prepareNextSource():A.end()}),g.on("error",function(v){A.error(v)}),this},S.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},S.prototype.error=function(g){var A=this._sources;if(!m.prototype.error.call(this,g))return!1;for(var v=0;v<A.length;v++)try{A[v].error(g)}catch{}return!0},S.prototype.lock=function(){m.prototype.lock.call(this);for(var g=this._sources,A=0;A<g.length;A++)g[A].lock()},c.exports=S},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,c,d){var o=i("../compressions"),h=i("./ZipFileWorker");d.generateWorker=function(u,m,w){var C=new h(m.streamFiles,w,m.platform,m.encodeFileName),_=0;try{u.forEach(function(S,g){_++;var A=(function(T,B){var W=T||B,K=o[W];if(!K)throw new Error(W+" is not a valid compression method !");return K})(g.options.compression,m.compression),v=g.options.compressionOptions||m.compressionOptions||{},k=g.dir,b=g.date;g._compressWorker(A,v).withStreamInfo("file",{name:S,dir:k,date:b,comment:g.comment||"",unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions}).pipe(C)}),C.entriesCount=_}catch(S){C.error(S)}return C}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,c,d){function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var h=new o;for(var u in this)typeof this[u]!="function"&&(h[u]=this[u]);return h}}(o.prototype=i("./object")).loadAsync=i("./load"),o.support=i("./support"),o.defaults=i("./defaults"),o.version="3.10.1",o.loadAsync=function(h,u){return new o().loadAsync(h,u)},o.external=i("./external"),c.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,c,d){var o=i("./utils"),h=i("./external"),u=i("./utf8"),m=i("./zipEntries"),w=i("./stream/Crc32Probe"),C=i("./nodejsUtils");function _(S){return new h.Promise(function(g,A){var v=S.decompressed.getContentWorker().pipe(new w);v.on("error",function(k){A(k)}).on("end",function(){v.streamInfo.crc32!==S.decompressed.crc32?A(new Error("Corrupted zip : CRC32 mismatch")):g()}).resume()})}c.exports=function(S,g){var A=this;return g=o.extend(g||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:u.utf8decode}),C.isNode&&C.isStream(S)?h.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",S,!0,g.optimizedBinaryString,g.base64).then(function(v){var k=new m(g);return k.load(v),k}).then(function(v){var k=[h.Promise.resolve(v)],b=v.files;if(g.checkCRC32)for(var T=0;T<b.length;T++)k.push(_(b[T]));return h.Promise.all(k)}).then(function(v){for(var k=v.shift(),b=k.files,T=0;T<b.length;T++){var B=b[T],W=B.fileNameStr,K=o.resolve(B.fileNameStr);A.file(K,B.decompressed,{binary:!0,optimizedBinaryString:!0,date:B.date,dir:B.dir,comment:B.fileCommentStr.length?B.fileCommentStr:null,unixPermissions:B.unixPermissions,dosPermissions:B.dosPermissions,createFolders:g.createFolders}),B.dir||(A.file(K).unsafeOriginalName=W)}return k.zipComment.length&&(A.comment=k.zipComment),A})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,c,d){var o=i("../utils"),h=i("../stream/GenericWorker");function u(m,w){h.call(this,"Nodejs stream input adapter for "+m),this._upstreamEnded=!1,this._bindStream(w)}o.inherits(u,h),u.prototype._bindStream=function(m){var w=this;(this._stream=m).pause(),m.on("data",function(C){w.push({data:C,meta:{percent:0}})}).on("error",function(C){w.isPaused?this.generatedError=C:w.error(C)}).on("end",function(){w.isPaused?w._upstreamEnded=!0:w.end()})},u.prototype.pause=function(){return!!h.prototype.pause.call(this)&&(this._stream.pause(),!0)},u.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},c.exports=u},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,c,d){var o=i("readable-stream").Readable;function h(u,m,w){o.call(this,m),this._helper=u;var C=this;u.on("data",function(_,S){C.push(_)||C._helper.pause(),w&&w(S)}).on("error",function(_){C.emit("error",_)}).on("end",function(){C.push(null)})}i("../utils").inherits(h,o),h.prototype._read=function(){this._helper.resume()},c.exports=h},{"../utils":32,"readable-stream":16}],14:[function(i,c,d){c.exports={isNode:typeof Buffer<"u",newBufferFrom:function(o,h){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(o,h);if(typeof o=="number")throw new Error('The "data" argument must not be a number');return new Buffer(o,h)},allocBuffer:function(o){if(Buffer.alloc)return Buffer.alloc(o);var h=new Buffer(o);return h.fill(0),h},isBuffer:function(o){return Buffer.isBuffer(o)},isStream:function(o){return o&&typeof o.on=="function"&&typeof o.pause=="function"&&typeof o.resume=="function"}}},{}],15:[function(i,c,d){function o(K,nt,G){var ut,tt=u.getTypeOf(nt),pt=u.extend(G||{},C);pt.date=pt.date||new Date,pt.compression!==null&&(pt.compression=pt.compression.toUpperCase()),typeof pt.unixPermissions=="string"&&(pt.unixPermissions=parseInt(pt.unixPermissions,8)),pt.unixPermissions&&16384&pt.unixPermissions&&(pt.dir=!0),pt.dosPermissions&&16&pt.dosPermissions&&(pt.dir=!0),pt.dir&&(K=b(K)),pt.createFolders&&(ut=k(K))&&T.call(this,ut,!0);var Tt=tt==="string"&&pt.binary===!1&&pt.base64===!1;G&&G.binary!==void 0||(pt.binary=!Tt),(nt instanceof _&&nt.uncompressedSize===0||pt.dir||!nt||nt.length===0)&&(pt.base64=!1,pt.binary=!0,nt="",pt.compression="STORE",tt="string");var R=null;R=nt instanceof _||nt instanceof m?nt:A.isNode&&A.isStream(nt)?new v(K,nt):u.prepareContent(K,nt,pt.binary,pt.optimizedBinaryString,pt.base64);var Q=new S(K,R,pt);this.files[K]=Q}var h=i("./utf8"),u=i("./utils"),m=i("./stream/GenericWorker"),w=i("./stream/StreamHelper"),C=i("./defaults"),_=i("./compressedObject"),S=i("./zipObject"),g=i("./generate"),A=i("./nodejsUtils"),v=i("./nodejs/NodejsStreamInputAdapter"),k=function(K){K.slice(-1)==="/"&&(K=K.substring(0,K.length-1));var nt=K.lastIndexOf("/");return 0<nt?K.substring(0,nt):""},b=function(K){return K.slice(-1)!=="/"&&(K+="/"),K},T=function(K,nt){return nt=nt!==void 0?nt:C.createFolders,K=b(K),this.files[K]||o.call(this,K,null,{dir:!0,createFolders:nt}),this.files[K]};function B(K){return Object.prototype.toString.call(K)==="[object RegExp]"}var W={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(K){var nt,G,ut;for(nt in this.files)ut=this.files[nt],(G=nt.slice(this.root.length,nt.length))&&nt.slice(0,this.root.length)===this.root&&K(G,ut)},filter:function(K){var nt=[];return this.forEach(function(G,ut){K(G,ut)&&nt.push(ut)}),nt},file:function(K,nt,G){if(arguments.length!==1)return K=this.root+K,o.call(this,K,nt,G),this;if(B(K)){var ut=K;return this.filter(function(pt,Tt){return!Tt.dir&&ut.test(pt)})}var tt=this.files[this.root+K];return tt&&!tt.dir?tt:null},folder:function(K){if(!K)return this;if(B(K))return this.filter(function(tt,pt){return pt.dir&&K.test(tt)});var nt=this.root+K,G=T.call(this,nt),ut=this.clone();return ut.root=G.name,ut},remove:function(K){K=this.root+K;var nt=this.files[K];if(nt||(K.slice(-1)!=="/"&&(K+="/"),nt=this.files[K]),nt&&!nt.dir)delete this.files[K];else for(var G=this.filter(function(tt,pt){return pt.name.slice(0,K.length)===K}),ut=0;ut<G.length;ut++)delete this.files[G[ut].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(K){var nt,G={};try{if((G=u.extend(K||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:h.utf8encode})).type=G.type.toLowerCase(),G.compression=G.compression.toUpperCase(),G.type==="binarystring"&&(G.type="string"),!G.type)throw new Error("No output type specified.");u.checkSupport(G.type),G.platform!=="darwin"&&G.platform!=="freebsd"&&G.platform!=="linux"&&G.platform!=="sunos"||(G.platform="UNIX"),G.platform==="win32"&&(G.platform="DOS");var ut=G.comment||this.comment||"";nt=g.generateWorker(this,G,ut)}catch(tt){(nt=new m("error")).error(tt)}return new w(nt,G.type||"string",G.mimeType)},generateAsync:function(K,nt){return this.generateInternalStream(K).accumulate(nt)},generateNodeStream:function(K,nt){return(K=K||{}).type||(K.type="nodebuffer"),this.generateInternalStream(K).toNodejsStream(nt)}};c.exports=W},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,c,d){c.exports=i("stream")},{stream:void 0}],17:[function(i,c,d){var o=i("./DataReader");function h(u){o.call(this,u);for(var m=0;m<this.data.length;m++)u[m]=255&u[m]}i("../utils").inherits(h,o),h.prototype.byteAt=function(u){return this.data[this.zero+u]},h.prototype.lastIndexOfSignature=function(u){for(var m=u.charCodeAt(0),w=u.charCodeAt(1),C=u.charCodeAt(2),_=u.charCodeAt(3),S=this.length-4;0<=S;--S)if(this.data[S]===m&&this.data[S+1]===w&&this.data[S+2]===C&&this.data[S+3]===_)return S-this.zero;return-1},h.prototype.readAndCheckSignature=function(u){var m=u.charCodeAt(0),w=u.charCodeAt(1),C=u.charCodeAt(2),_=u.charCodeAt(3),S=this.readData(4);return m===S[0]&&w===S[1]&&C===S[2]&&_===S[3]},h.prototype.readData=function(u){if(this.checkOffset(u),u===0)return[];var m=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},c.exports=h},{"../utils":32,"./DataReader":18}],18:[function(i,c,d){var o=i("../utils");function h(u){this.data=u,this.length=u.length,this.index=0,this.zero=0}h.prototype={checkOffset:function(u){this.checkIndex(this.index+u)},checkIndex:function(u){if(this.length<this.zero+u||u<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+u+"). Corrupted zip ?")},setIndex:function(u){this.checkIndex(u),this.index=u},skip:function(u){this.setIndex(this.index+u)},byteAt:function(){},readInt:function(u){var m,w=0;for(this.checkOffset(u),m=this.index+u-1;m>=this.index;m--)w=(w<<8)+this.byteAt(m);return this.index+=u,w},readString:function(u){return o.transformTo("string",this.readData(u))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var u=this.readInt(4);return new Date(Date.UTC(1980+(u>>25&127),(u>>21&15)-1,u>>16&31,u>>11&31,u>>5&63,(31&u)<<1))}},c.exports=h},{"../utils":32}],19:[function(i,c,d){var o=i("./Uint8ArrayReader");function h(u){o.call(this,u)}i("../utils").inherits(h,o),h.prototype.readData=function(u){this.checkOffset(u);var m=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},c.exports=h},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,c,d){var o=i("./DataReader");function h(u){o.call(this,u)}i("../utils").inherits(h,o),h.prototype.byteAt=function(u){return this.data.charCodeAt(this.zero+u)},h.prototype.lastIndexOfSignature=function(u){return this.data.lastIndexOf(u)-this.zero},h.prototype.readAndCheckSignature=function(u){return u===this.readData(4)},h.prototype.readData=function(u){this.checkOffset(u);var m=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},c.exports=h},{"../utils":32,"./DataReader":18}],21:[function(i,c,d){var o=i("./ArrayReader");function h(u){o.call(this,u)}i("../utils").inherits(h,o),h.prototype.readData=function(u){if(this.checkOffset(u),u===0)return new Uint8Array(0);var m=this.data.subarray(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},c.exports=h},{"../utils":32,"./ArrayReader":17}],22:[function(i,c,d){var o=i("../utils"),h=i("../support"),u=i("./ArrayReader"),m=i("./StringReader"),w=i("./NodeBufferReader"),C=i("./Uint8ArrayReader");c.exports=function(_){var S=o.getTypeOf(_);return o.checkSupport(S),S!=="string"||h.uint8array?S==="nodebuffer"?new w(_):h.uint8array?new C(o.transformTo("uint8array",_)):new u(o.transformTo("array",_)):new m(_)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,c,d){d.LOCAL_FILE_HEADER="PK",d.CENTRAL_FILE_HEADER="PK",d.CENTRAL_DIRECTORY_END="PK",d.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",d.ZIP64_CENTRAL_DIRECTORY_END="PK",d.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,c,d){var o=i("./GenericWorker"),h=i("../utils");function u(m){o.call(this,"ConvertWorker to "+m),this.destType=m}h.inherits(u,o),u.prototype.processChunk=function(m){this.push({data:h.transformTo(this.destType,m.data),meta:m.meta})},c.exports=u},{"../utils":32,"./GenericWorker":28}],25:[function(i,c,d){var o=i("./GenericWorker"),h=i("../crc32");function u(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(u,o),u.prototype.processChunk=function(m){this.streamInfo.crc32=h(m.data,this.streamInfo.crc32||0),this.push(m)},c.exports=u},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,c,d){var o=i("../utils"),h=i("./GenericWorker");function u(m){h.call(this,"DataLengthProbe for "+m),this.propName=m,this.withStreamInfo(m,0)}o.inherits(u,h),u.prototype.processChunk=function(m){if(m){var w=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=w+m.data.length}h.prototype.processChunk.call(this,m)},c.exports=u},{"../utils":32,"./GenericWorker":28}],27:[function(i,c,d){var o=i("../utils"),h=i("./GenericWorker");function u(m){h.call(this,"DataWorker");var w=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,m.then(function(C){w.dataIsReady=!0,w.data=C,w.max=C&&C.length||0,w.type=o.getTypeOf(C),w.isPaused||w._tickAndRepeat()},function(C){w.error(C)})}o.inherits(u,h),u.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this.data=null},u.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},u.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},u.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var m=null,w=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":m=this.data.substring(this.index,w);break;case"uint8array":m=this.data.subarray(this.index,w);break;case"array":case"nodebuffer":m=this.data.slice(this.index,w)}return this.index=w,this.push({data:m,meta:{percent:this.max?this.index/this.max*100:0}})},c.exports=u},{"../utils":32,"./GenericWorker":28}],28:[function(i,c,d){function o(h){this.name=h||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(h){this.emit("data",h)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(h){this.emit("error",h)}return!0},error:function(h){return!this.isFinished&&(this.isPaused?this.generatedError=h:(this.isFinished=!0,this.emit("error",h),this.previous&&this.previous.error(h),this.cleanUp()),!0)},on:function(h,u){return this._listeners[h].push(u),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(h,u){if(this._listeners[h])for(var m=0;m<this._listeners[h].length;m++)this._listeners[h][m].call(this,u)},pipe:function(h){return h.registerPrevious(this)},registerPrevious:function(h){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=h.streamInfo,this.mergeStreamInfo(),this.previous=h;var u=this;return h.on("data",function(m){u.processChunk(m)}),h.on("end",function(){u.end()}),h.on("error",function(m){u.error(m)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var h=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),h=!0),this.previous&&this.previous.resume(),!h},flush:function(){},processChunk:function(h){this.push(h)},withStreamInfo:function(h,u){return this.extraStreamInfo[h]=u,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var h in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,h)&&(this.streamInfo[h]=this.extraStreamInfo[h])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var h="Worker "+this.name;return this.previous?this.previous+" -> "+h:h}},c.exports=o},{}],29:[function(i,c,d){var o=i("../utils"),h=i("./ConvertWorker"),u=i("./GenericWorker"),m=i("../base64"),w=i("../support"),C=i("../external"),_=null;if(w.nodestream)try{_=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function S(A,v){return new C.Promise(function(k,b){var T=[],B=A._internalType,W=A._outputType,K=A._mimeType;A.on("data",function(nt,G){T.push(nt),v&&v(G)}).on("error",function(nt){T=[],b(nt)}).on("end",function(){try{var nt=(function(G,ut,tt){switch(G){case"blob":return o.newBlob(o.transformTo("arraybuffer",ut),tt);case"base64":return m.encode(ut);default:return o.transformTo(G,ut)}})(W,(function(G,ut){var tt,pt=0,Tt=null,R=0;for(tt=0;tt<ut.length;tt++)R+=ut[tt].length;switch(G){case"string":return ut.join("");case"array":return Array.prototype.concat.apply([],ut);case"uint8array":for(Tt=new Uint8Array(R),tt=0;tt<ut.length;tt++)Tt.set(ut[tt],pt),pt+=ut[tt].length;return Tt;case"nodebuffer":return Buffer.concat(ut);default:throw new Error("concat : unsupported type '"+G+"'")}})(B,T),K);k(nt)}catch(G){b(G)}T=[]}).resume()})}function g(A,v,k){var b=v;switch(v){case"blob":case"arraybuffer":b="uint8array";break;case"base64":b="string"}try{this._internalType=b,this._outputType=v,this._mimeType=k,o.checkSupport(b),this._worker=A.pipe(new h(b)),A.lock()}catch(T){this._worker=new u("error"),this._worker.error(T)}}g.prototype={accumulate:function(A){return S(this,A)},on:function(A,v){var k=this;return A==="data"?this._worker.on(A,function(b){v.call(k,b.data,b.meta)}):this._worker.on(A,function(){o.delay(v,arguments,k)}),this},resume:function(){return o.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(A){if(o.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new _(this,{objectMode:this._outputType!=="nodebuffer"},A)}},c.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,c,d){if(d.base64=!0,d.array=!0,d.string=!0,d.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",d.nodebuffer=typeof Buffer<"u",d.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")d.blob=!1;else{var o=new ArrayBuffer(0);try{d.blob=new Blob([o],{type:"application/zip"}).size===0}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);h.append(o),d.blob=h.getBlob("application/zip").size===0}catch{d.blob=!1}}}try{d.nodestream=!!i("readable-stream").Readable}catch{d.nodestream=!1}},{"readable-stream":16}],31:[function(i,c,d){for(var o=i("./utils"),h=i("./support"),u=i("./nodejsUtils"),m=i("./stream/GenericWorker"),w=new Array(256),C=0;C<256;C++)w[C]=252<=C?6:248<=C?5:240<=C?4:224<=C?3:192<=C?2:1;w[254]=w[254]=1;function _(){m.call(this,"utf-8 decode"),this.leftOver=null}function S(){m.call(this,"utf-8 encode")}d.utf8encode=function(g){return h.nodebuffer?u.newBufferFrom(g,"utf-8"):(function(A){var v,k,b,T,B,W=A.length,K=0;for(T=0;T<W;T++)(64512&(k=A.charCodeAt(T)))==55296&&T+1<W&&(64512&(b=A.charCodeAt(T+1)))==56320&&(k=65536+(k-55296<<10)+(b-56320),T++),K+=k<128?1:k<2048?2:k<65536?3:4;for(v=h.uint8array?new Uint8Array(K):new Array(K),T=B=0;B<K;T++)(64512&(k=A.charCodeAt(T)))==55296&&T+1<W&&(64512&(b=A.charCodeAt(T+1)))==56320&&(k=65536+(k-55296<<10)+(b-56320),T++),k<128?v[B++]=k:(k<2048?v[B++]=192|k>>>6:(k<65536?v[B++]=224|k>>>12:(v[B++]=240|k>>>18,v[B++]=128|k>>>12&63),v[B++]=128|k>>>6&63),v[B++]=128|63&k);return v})(g)},d.utf8decode=function(g){return h.nodebuffer?o.transformTo("nodebuffer",g).toString("utf-8"):(function(A){var v,k,b,T,B=A.length,W=new Array(2*B);for(v=k=0;v<B;)if((b=A[v++])<128)W[k++]=b;else if(4<(T=w[b]))W[k++]=65533,v+=T-1;else{for(b&=T===2?31:T===3?15:7;1<T&&v<B;)b=b<<6|63&A[v++],T--;1<T?W[k++]=65533:b<65536?W[k++]=b:(b-=65536,W[k++]=55296|b>>10&1023,W[k++]=56320|1023&b)}return W.length!==k&&(W.subarray?W=W.subarray(0,k):W.length=k),o.applyFromCharCode(W)})(g=o.transformTo(h.uint8array?"uint8array":"array",g))},o.inherits(_,m),_.prototype.processChunk=function(g){var A=o.transformTo(h.uint8array?"uint8array":"array",g.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var v=A;(A=new Uint8Array(v.length+this.leftOver.length)).set(this.leftOver,0),A.set(v,this.leftOver.length)}else A=this.leftOver.concat(A);this.leftOver=null}var k=(function(T,B){var W;for((B=B||T.length)>T.length&&(B=T.length),W=B-1;0<=W&&(192&T[W])==128;)W--;return W<0||W===0?B:W+w[T[W]]>B?W:B})(A),b=A;k!==A.length&&(h.uint8array?(b=A.subarray(0,k),this.leftOver=A.subarray(k,A.length)):(b=A.slice(0,k),this.leftOver=A.slice(k,A.length))),this.push({data:d.utf8decode(b),meta:g.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:d.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},d.Utf8DecodeWorker=_,o.inherits(S,m),S.prototype.processChunk=function(g){this.push({data:d.utf8encode(g.data),meta:g.meta})},d.Utf8EncodeWorker=S},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,c,d){var o=i("./support"),h=i("./base64"),u=i("./nodejsUtils"),m=i("./external");function w(v){return v}function C(v,k){for(var b=0;b<v.length;++b)k[b]=255&v.charCodeAt(b);return k}i("setimmediate"),d.newBlob=function(v,k){d.checkSupport("blob");try{return new Blob([v],{type:k})}catch{try{var b=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return b.append(v),b.getBlob(k)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(v,k,b){var T=[],B=0,W=v.length;if(W<=b)return String.fromCharCode.apply(null,v);for(;B<W;)k==="array"||k==="nodebuffer"?T.push(String.fromCharCode.apply(null,v.slice(B,Math.min(B+b,W)))):T.push(String.fromCharCode.apply(null,v.subarray(B,Math.min(B+b,W)))),B+=b;return T.join("")},stringifyByChar:function(v){for(var k="",b=0;b<v.length;b++)k+=String.fromCharCode(v[b]);return k},applyCanBeUsed:{uint8array:(function(){try{return o.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return o.nodebuffer&&String.fromCharCode.apply(null,u.allocBuffer(1)).length===1}catch{return!1}})()}};function S(v){var k=65536,b=d.getTypeOf(v),T=!0;if(b==="uint8array"?T=_.applyCanBeUsed.uint8array:b==="nodebuffer"&&(T=_.applyCanBeUsed.nodebuffer),T)for(;1<k;)try{return _.stringifyByChunk(v,b,k)}catch{k=Math.floor(k/2)}return _.stringifyByChar(v)}function g(v,k){for(var b=0;b<v.length;b++)k[b]=v[b];return k}d.applyFromCharCode=S;var A={};A.string={string:w,array:function(v){return C(v,new Array(v.length))},arraybuffer:function(v){return A.string.uint8array(v).buffer},uint8array:function(v){return C(v,new Uint8Array(v.length))},nodebuffer:function(v){return C(v,u.allocBuffer(v.length))}},A.array={string:S,array:w,arraybuffer:function(v){return new Uint8Array(v).buffer},uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return u.newBufferFrom(v)}},A.arraybuffer={string:function(v){return S(new Uint8Array(v))},array:function(v){return g(new Uint8Array(v),new Array(v.byteLength))},arraybuffer:w,uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return u.newBufferFrom(new Uint8Array(v))}},A.uint8array={string:S,array:function(v){return g(v,new Array(v.length))},arraybuffer:function(v){return v.buffer},uint8array:w,nodebuffer:function(v){return u.newBufferFrom(v)}},A.nodebuffer={string:S,array:function(v){return g(v,new Array(v.length))},arraybuffer:function(v){return A.nodebuffer.uint8array(v).buffer},uint8array:function(v){return g(v,new Uint8Array(v.length))},nodebuffer:w},d.transformTo=function(v,k){if(k=k||"",!v)return k;d.checkSupport(v);var b=d.getTypeOf(k);return A[b][v](k)},d.resolve=function(v){for(var k=v.split("/"),b=[],T=0;T<k.length;T++){var B=k[T];B==="."||B===""&&T!==0&&T!==k.length-1||(B===".."?b.pop():b.push(B))}return b.join("/")},d.getTypeOf=function(v){return typeof v=="string"?"string":Object.prototype.toString.call(v)==="[object Array]"?"array":o.nodebuffer&&u.isBuffer(v)?"nodebuffer":o.uint8array&&v instanceof Uint8Array?"uint8array":o.arraybuffer&&v instanceof ArrayBuffer?"arraybuffer":void 0},d.checkSupport=function(v){if(!o[v.toLowerCase()])throw new Error(v+" is not supported by this platform")},d.MAX_VALUE_16BITS=65535,d.MAX_VALUE_32BITS=-1,d.pretty=function(v){var k,b,T="";for(b=0;b<(v||"").length;b++)T+="\\x"+((k=v.charCodeAt(b))<16?"0":"")+k.toString(16).toUpperCase();return T},d.delay=function(v,k,b){setImmediate(function(){v.apply(b||null,k||[])})},d.inherits=function(v,k){function b(){}b.prototype=k.prototype,v.prototype=new b},d.extend=function(){var v,k,b={};for(v=0;v<arguments.length;v++)for(k in arguments[v])Object.prototype.hasOwnProperty.call(arguments[v],k)&&b[k]===void 0&&(b[k]=arguments[v][k]);return b},d.prepareContent=function(v,k,b,T,B){return m.Promise.resolve(k).then(function(W){return o.blob&&(W instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(W))!==-1)&&typeof FileReader<"u"?new m.Promise(function(K,nt){var G=new FileReader;G.onload=function(ut){K(ut.target.result)},G.onerror=function(ut){nt(ut.target.error)},G.readAsArrayBuffer(W)}):W}).then(function(W){var K=d.getTypeOf(W);return K?(K==="arraybuffer"?W=d.transformTo("uint8array",W):K==="string"&&(B?W=h.decode(W):b&&T!==!0&&(W=(function(nt){return C(nt,o.uint8array?new Uint8Array(nt.length):new Array(nt.length))})(W))),W):m.Promise.reject(new Error("Can't read the data of '"+v+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,c,d){var o=i("./reader/readerFor"),h=i("./utils"),u=i("./signature"),m=i("./zipEntry"),w=i("./support");function C(_){this.files=[],this.loadOptions=_}C.prototype={checkSignature:function(_){if(!this.reader.readAndCheckSignature(_)){this.reader.index-=4;var S=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+h.pretty(S)+", expected "+h.pretty(_)+")")}},isSignature:function(_,S){var g=this.reader.index;this.reader.setIndex(_);var A=this.reader.readString(4)===S;return this.reader.setIndex(g),A},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var _=this.reader.readData(this.zipCommentLength),S=w.uint8array?"uint8array":"array",g=h.transformTo(S,_);this.zipComment=this.loadOptions.decodeFileName(g)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var _,S,g,A=this.zip64EndOfCentralSize-44;0<A;)_=this.reader.readInt(2),S=this.reader.readInt(4),g=this.reader.readData(S),this.zip64ExtensibleData[_]={id:_,length:S,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var _,S;for(_=0;_<this.files.length;_++)S=this.files[_],this.reader.setIndex(S.localHeaderOffset),this.checkSignature(u.LOCAL_FILE_HEADER),S.readLocalPart(this.reader),S.handleUTF8(),S.processAttributes()},readCentralDir:function(){var _;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(u.CENTRAL_FILE_HEADER);)(_=new m({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(_);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var _=this.reader.lastIndexOfSignature(u.CENTRAL_DIRECTORY_END);if(_<0)throw this.isSignature(0,u.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(_);var S=_;if(this.checkSignature(u.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===h.MAX_VALUE_16BITS||this.diskWithCentralDirStart===h.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===h.MAX_VALUE_16BITS||this.centralDirRecords===h.MAX_VALUE_16BITS||this.centralDirSize===h.MAX_VALUE_32BITS||this.centralDirOffset===h.MAX_VALUE_32BITS){if(this.zip64=!0,(_=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(_),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,u.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var g=this.centralDirOffset+this.centralDirSize;this.zip64&&(g+=20,g+=12+this.zip64EndOfCentralSize);var A=S-g;if(0<A)this.isSignature(S,u.CENTRAL_FILE_HEADER)||(this.reader.zero=A);else if(A<0)throw new Error("Corrupted zip: missing "+Math.abs(A)+" bytes.")},prepareReader:function(_){this.reader=o(_)},load:function(_){this.prepareReader(_),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},c.exports=C},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,c,d){var o=i("./reader/readerFor"),h=i("./utils"),u=i("./compressedObject"),m=i("./crc32"),w=i("./utf8"),C=i("./compressions"),_=i("./support");function S(g,A){this.options=g,this.loadOptions=A}S.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(g){var A,v;if(g.skip(22),this.fileNameLength=g.readInt(2),v=g.readInt(2),this.fileName=g.readData(this.fileNameLength),g.skip(v),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((A=(function(k){for(var b in C)if(Object.prototype.hasOwnProperty.call(C,b)&&C[b].magic===k)return C[b];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+h.pretty(this.compressionMethod)+" unknown (inner file : "+h.transformTo("string",this.fileName)+")");this.decompressed=new u(this.compressedSize,this.uncompressedSize,this.crc32,A,g.readData(this.compressedSize))},readCentralPart:function(g){this.versionMadeBy=g.readInt(2),g.skip(2),this.bitFlag=g.readInt(2),this.compressionMethod=g.readString(2),this.date=g.readDate(),this.crc32=g.readInt(4),this.compressedSize=g.readInt(4),this.uncompressedSize=g.readInt(4);var A=g.readInt(2);if(this.extraFieldsLength=g.readInt(2),this.fileCommentLength=g.readInt(2),this.diskNumberStart=g.readInt(2),this.internalFileAttributes=g.readInt(2),this.externalFileAttributes=g.readInt(4),this.localHeaderOffset=g.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");g.skip(A),this.readExtraFields(g),this.parseZIP64ExtraField(g),this.fileComment=g.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var g=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),g==0&&(this.dosPermissions=63&this.externalFileAttributes),g==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var g=o(this.extraFields[1].value);this.uncompressedSize===h.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===h.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===h.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===h.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(g){var A,v,k,b=g.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});g.index+4<b;)A=g.readInt(2),v=g.readInt(2),k=g.readData(v),this.extraFields[A]={id:A,length:v,value:k};g.setIndex(b)},handleUTF8:function(){var g=_.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=w.utf8decode(this.fileName),this.fileCommentStr=w.utf8decode(this.fileComment);else{var A=this.findExtraFieldUnicodePath();if(A!==null)this.fileNameStr=A;else{var v=h.transformTo(g,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(v)}var k=this.findExtraFieldUnicodeComment();if(k!==null)this.fileCommentStr=k;else{var b=h.transformTo(g,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(b)}}},findExtraFieldUnicodePath:function(){var g=this.extraFields[28789];if(g){var A=o(g.value);return A.readInt(1)!==1||m(this.fileName)!==A.readInt(4)?null:w.utf8decode(A.readData(g.length-5))}return null},findExtraFieldUnicodeComment:function(){var g=this.extraFields[25461];if(g){var A=o(g.value);return A.readInt(1)!==1||m(this.fileComment)!==A.readInt(4)?null:w.utf8decode(A.readData(g.length-5))}return null}},c.exports=S},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,c,d){function o(A,v,k){this.name=A,this.dir=k.dir,this.date=k.date,this.comment=k.comment,this.unixPermissions=k.unixPermissions,this.dosPermissions=k.dosPermissions,this._data=v,this._dataBinary=k.binary,this.options={compression:k.compression,compressionOptions:k.compressionOptions}}var h=i("./stream/StreamHelper"),u=i("./stream/DataWorker"),m=i("./utf8"),w=i("./compressedObject"),C=i("./stream/GenericWorker");o.prototype={internalStream:function(A){var v=null,k="string";try{if(!A)throw new Error("No output type specified.");var b=(k=A.toLowerCase())==="string"||k==="text";k!=="binarystring"&&k!=="text"||(k="string"),v=this._decompressWorker();var T=!this._dataBinary;T&&!b&&(v=v.pipe(new m.Utf8EncodeWorker)),!T&&b&&(v=v.pipe(new m.Utf8DecodeWorker))}catch(B){(v=new C("error")).error(B)}return new h(v,k,"")},async:function(A,v){return this.internalStream(A).accumulate(v)},nodeStream:function(A,v){return this.internalStream(A||"nodebuffer").toNodejsStream(v)},_compressWorker:function(A,v){if(this._data instanceof w&&this._data.compression.magic===A.magic)return this._data.getCompressedWorker();var k=this._decompressWorker();return this._dataBinary||(k=k.pipe(new m.Utf8EncodeWorker)),w.createWorkerFrom(k,A,v)},_decompressWorker:function(){return this._data instanceof w?this._data.getContentWorker():this._data instanceof C?this._data:new u(this._data)}};for(var _=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],S=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},g=0;g<_.length;g++)o.prototype[_[g]]=S;c.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,c,d){(function(o){var h,u,m=o.MutationObserver||o.WebKitMutationObserver;if(m){var w=0,C=new m(A),_=o.document.createTextNode("");C.observe(_,{characterData:!0}),h=function(){_.data=w=++w%2}}else if(o.setImmediate||o.MessageChannel===void 0)h="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var v=o.document.createElement("script");v.onreadystatechange=function(){A(),v.onreadystatechange=null,v.parentNode.removeChild(v),v=null},o.document.documentElement.appendChild(v)}:function(){setTimeout(A,0)};else{var S=new o.MessageChannel;S.port1.onmessage=A,h=function(){S.port2.postMessage(0)}}var g=[];function A(){var v,k;u=!0;for(var b=g.length;b;){for(k=g,g=[],v=-1;++v<b;)k[v]();b=g.length}u=!1}c.exports=function(v){g.push(v)!==1||u||h()}}).call(this,typeof Pe<"u"?Pe:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,c,d){var o=i("immediate");function h(){}var u={},m=["REJECTED"],w=["FULFILLED"],C=["PENDING"];function _(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=C,this.queue=[],this.outcome=void 0,b!==h&&v(this,b)}function S(b,T,B){this.promise=b,typeof T=="function"&&(this.onFulfilled=T,this.callFulfilled=this.otherCallFulfilled),typeof B=="function"&&(this.onRejected=B,this.callRejected=this.otherCallRejected)}function g(b,T,B){o(function(){var W;try{W=T(B)}catch(K){return u.reject(b,K)}W===b?u.reject(b,new TypeError("Cannot resolve promise with itself")):u.resolve(b,W)})}function A(b){var T=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof T=="function")return function(){T.apply(b,arguments)}}function v(b,T){var B=!1;function W(G){B||(B=!0,u.reject(b,G))}function K(G){B||(B=!0,u.resolve(b,G))}var nt=k(function(){T(K,W)});nt.status==="error"&&W(nt.value)}function k(b,T){var B={};try{B.value=b(T),B.status="success"}catch(W){B.status="error",B.value=W}return B}(c.exports=_).prototype.finally=function(b){if(typeof b!="function")return this;var T=this.constructor;return this.then(function(B){return T.resolve(b()).then(function(){return B})},function(B){return T.resolve(b()).then(function(){throw B})})},_.prototype.catch=function(b){return this.then(null,b)},_.prototype.then=function(b,T){if(typeof b!="function"&&this.state===w||typeof T!="function"&&this.state===m)return this;var B=new this.constructor(h);return this.state!==C?g(B,this.state===w?b:T,this.outcome):this.queue.push(new S(B,b,T)),B},S.prototype.callFulfilled=function(b){u.resolve(this.promise,b)},S.prototype.otherCallFulfilled=function(b){g(this.promise,this.onFulfilled,b)},S.prototype.callRejected=function(b){u.reject(this.promise,b)},S.prototype.otherCallRejected=function(b){g(this.promise,this.onRejected,b)},u.resolve=function(b,T){var B=k(A,T);if(B.status==="error")return u.reject(b,B.value);var W=B.value;if(W)v(b,W);else{b.state=w,b.outcome=T;for(var K=-1,nt=b.queue.length;++K<nt;)b.queue[K].callFulfilled(T)}return b},u.reject=function(b,T){b.state=m,b.outcome=T;for(var B=-1,W=b.queue.length;++B<W;)b.queue[B].callRejected(T);return b},_.resolve=function(b){return b instanceof this?b:u.resolve(new this(h),b)},_.reject=function(b){var T=new this(h);return u.reject(T,b)},_.all=function(b){var T=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=b.length,W=!1;if(!B)return this.resolve([]);for(var K=new Array(B),nt=0,G=-1,ut=new this(h);++G<B;)tt(b[G],G);return ut;function tt(pt,Tt){T.resolve(pt).then(function(R){K[Tt]=R,++nt!==B||W||(W=!0,u.resolve(ut,K))},function(R){W||(W=!0,u.reject(ut,R))})}},_.race=function(b){var T=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var B=b.length,W=!1;if(!B)return this.resolve([]);for(var K=-1,nt=new this(h);++K<B;)G=b[K],T.resolve(G).then(function(ut){W||(W=!0,u.resolve(nt,ut))},function(ut){W||(W=!0,u.reject(nt,ut))});var G;return nt}},{immediate:36}],38:[function(i,c,d){var o={};(0,i("./lib/utils/common").assign)(o,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),c.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,c,d){var o=i("./zlib/deflate"),h=i("./utils/common"),u=i("./utils/strings"),m=i("./zlib/messages"),w=i("./zlib/zstream"),C=Object.prototype.toString,_=0,S=-1,g=0,A=8;function v(b){if(!(this instanceof v))return new v(b);this.options=h.assign({level:S,method:A,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},b||{});var T=this.options;T.raw&&0<T.windowBits?T.windowBits=-T.windowBits:T.gzip&&0<T.windowBits&&T.windowBits<16&&(T.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var B=o.deflateInit2(this.strm,T.level,T.method,T.windowBits,T.memLevel,T.strategy);if(B!==_)throw new Error(m[B]);if(T.header&&o.deflateSetHeader(this.strm,T.header),T.dictionary){var W;if(W=typeof T.dictionary=="string"?u.string2buf(T.dictionary):C.call(T.dictionary)==="[object ArrayBuffer]"?new Uint8Array(T.dictionary):T.dictionary,(B=o.deflateSetDictionary(this.strm,W))!==_)throw new Error(m[B]);this._dict_set=!0}}function k(b,T){var B=new v(T);if(B.push(b,!0),B.err)throw B.msg||m[B.err];return B.result}v.prototype.push=function(b,T){var B,W,K=this.strm,nt=this.options.chunkSize;if(this.ended)return!1;W=T===~~T?T:T===!0?4:0,typeof b=="string"?K.input=u.string2buf(b):C.call(b)==="[object ArrayBuffer]"?K.input=new Uint8Array(b):K.input=b,K.next_in=0,K.avail_in=K.input.length;do{if(K.avail_out===0&&(K.output=new h.Buf8(nt),K.next_out=0,K.avail_out=nt),(B=o.deflate(K,W))!==1&&B!==_)return this.onEnd(B),!(this.ended=!0);K.avail_out!==0&&(K.avail_in!==0||W!==4&&W!==2)||(this.options.to==="string"?this.onData(u.buf2binstring(h.shrinkBuf(K.output,K.next_out))):this.onData(h.shrinkBuf(K.output,K.next_out)))}while((0<K.avail_in||K.avail_out===0)&&B!==1);return W===4?(B=o.deflateEnd(this.strm),this.onEnd(B),this.ended=!0,B===_):W!==2||(this.onEnd(_),!(K.avail_out=0))},v.prototype.onData=function(b){this.chunks.push(b)},v.prototype.onEnd=function(b){b===_&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=b,this.msg=this.strm.msg},d.Deflate=v,d.deflate=k,d.deflateRaw=function(b,T){return(T=T||{}).raw=!0,k(b,T)},d.gzip=function(b,T){return(T=T||{}).gzip=!0,k(b,T)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,c,d){var o=i("./zlib/inflate"),h=i("./utils/common"),u=i("./utils/strings"),m=i("./zlib/constants"),w=i("./zlib/messages"),C=i("./zlib/zstream"),_=i("./zlib/gzheader"),S=Object.prototype.toString;function g(v){if(!(this instanceof g))return new g(v);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},v||{});var k=this.options;k.raw&&0<=k.windowBits&&k.windowBits<16&&(k.windowBits=-k.windowBits,k.windowBits===0&&(k.windowBits=-15)),!(0<=k.windowBits&&k.windowBits<16)||v&&v.windowBits||(k.windowBits+=32),15<k.windowBits&&k.windowBits<48&&(15&k.windowBits)==0&&(k.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new C,this.strm.avail_out=0;var b=o.inflateInit2(this.strm,k.windowBits);if(b!==m.Z_OK)throw new Error(w[b]);this.header=new _,o.inflateGetHeader(this.strm,this.header)}function A(v,k){var b=new g(k);if(b.push(v,!0),b.err)throw b.msg||w[b.err];return b.result}g.prototype.push=function(v,k){var b,T,B,W,K,nt,G=this.strm,ut=this.options.chunkSize,tt=this.options.dictionary,pt=!1;if(this.ended)return!1;T=k===~~k?k:k===!0?m.Z_FINISH:m.Z_NO_FLUSH,typeof v=="string"?G.input=u.binstring2buf(v):S.call(v)==="[object ArrayBuffer]"?G.input=new Uint8Array(v):G.input=v,G.next_in=0,G.avail_in=G.input.length;do{if(G.avail_out===0&&(G.output=new h.Buf8(ut),G.next_out=0,G.avail_out=ut),(b=o.inflate(G,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&tt&&(nt=typeof tt=="string"?u.string2buf(tt):S.call(tt)==="[object ArrayBuffer]"?new Uint8Array(tt):tt,b=o.inflateSetDictionary(this.strm,nt)),b===m.Z_BUF_ERROR&&pt===!0&&(b=m.Z_OK,pt=!1),b!==m.Z_STREAM_END&&b!==m.Z_OK)return this.onEnd(b),!(this.ended=!0);G.next_out&&(G.avail_out!==0&&b!==m.Z_STREAM_END&&(G.avail_in!==0||T!==m.Z_FINISH&&T!==m.Z_SYNC_FLUSH)||(this.options.to==="string"?(B=u.utf8border(G.output,G.next_out),W=G.next_out-B,K=u.buf2string(G.output,B),G.next_out=W,G.avail_out=ut-W,W&&h.arraySet(G.output,G.output,B,W,0),this.onData(K)):this.onData(h.shrinkBuf(G.output,G.next_out)))),G.avail_in===0&&G.avail_out===0&&(pt=!0)}while((0<G.avail_in||G.avail_out===0)&&b!==m.Z_STREAM_END);return b===m.Z_STREAM_END&&(T=m.Z_FINISH),T===m.Z_FINISH?(b=o.inflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===m.Z_OK):T!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(G.avail_out=0))},g.prototype.onData=function(v){this.chunks.push(v)},g.prototype.onEnd=function(v){v===m.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},d.Inflate=g,d.inflate=A,d.inflateRaw=function(v,k){return(k=k||{}).raw=!0,A(v,k)},d.ungzip=A},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,c,d){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";d.assign=function(m){for(var w=Array.prototype.slice.call(arguments,1);w.length;){var C=w.shift();if(C){if(typeof C!="object")throw new TypeError(C+"must be non-object");for(var _ in C)C.hasOwnProperty(_)&&(m[_]=C[_])}}return m},d.shrinkBuf=function(m,w){return m.length===w?m:m.subarray?m.subarray(0,w):(m.length=w,m)};var h={arraySet:function(m,w,C,_,S){if(w.subarray&&m.subarray)m.set(w.subarray(C,C+_),S);else for(var g=0;g<_;g++)m[S+g]=w[C+g]},flattenChunks:function(m){var w,C,_,S,g,A;for(w=_=0,C=m.length;w<C;w++)_+=m[w].length;for(A=new Uint8Array(_),w=S=0,C=m.length;w<C;w++)g=m[w],A.set(g,S),S+=g.length;return A}},u={arraySet:function(m,w,C,_,S){for(var g=0;g<_;g++)m[S+g]=w[C+g]},flattenChunks:function(m){return[].concat.apply([],m)}};d.setTyped=function(m){m?(d.Buf8=Uint8Array,d.Buf16=Uint16Array,d.Buf32=Int32Array,d.assign(d,h)):(d.Buf8=Array,d.Buf16=Array,d.Buf32=Array,d.assign(d,u))},d.setTyped(o)},{}],42:[function(i,c,d){var o=i("./common"),h=!0,u=!0;try{String.fromCharCode.apply(null,[0])}catch{h=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{u=!1}for(var m=new o.Buf8(256),w=0;w<256;w++)m[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;function C(_,S){if(S<65537&&(_.subarray&&u||!_.subarray&&h))return String.fromCharCode.apply(null,o.shrinkBuf(_,S));for(var g="",A=0;A<S;A++)g+=String.fromCharCode(_[A]);return g}m[254]=m[254]=1,d.string2buf=function(_){var S,g,A,v,k,b=_.length,T=0;for(v=0;v<b;v++)(64512&(g=_.charCodeAt(v)))==55296&&v+1<b&&(64512&(A=_.charCodeAt(v+1)))==56320&&(g=65536+(g-55296<<10)+(A-56320),v++),T+=g<128?1:g<2048?2:g<65536?3:4;for(S=new o.Buf8(T),v=k=0;k<T;v++)(64512&(g=_.charCodeAt(v)))==55296&&v+1<b&&(64512&(A=_.charCodeAt(v+1)))==56320&&(g=65536+(g-55296<<10)+(A-56320),v++),g<128?S[k++]=g:(g<2048?S[k++]=192|g>>>6:(g<65536?S[k++]=224|g>>>12:(S[k++]=240|g>>>18,S[k++]=128|g>>>12&63),S[k++]=128|g>>>6&63),S[k++]=128|63&g);return S},d.buf2binstring=function(_){return C(_,_.length)},d.binstring2buf=function(_){for(var S=new o.Buf8(_.length),g=0,A=S.length;g<A;g++)S[g]=_.charCodeAt(g);return S},d.buf2string=function(_,S){var g,A,v,k,b=S||_.length,T=new Array(2*b);for(g=A=0;g<b;)if((v=_[g++])<128)T[A++]=v;else if(4<(k=m[v]))T[A++]=65533,g+=k-1;else{for(v&=k===2?31:k===3?15:7;1<k&&g<b;)v=v<<6|63&_[g++],k--;1<k?T[A++]=65533:v<65536?T[A++]=v:(v-=65536,T[A++]=55296|v>>10&1023,T[A++]=56320|1023&v)}return C(T,A)},d.utf8border=function(_,S){var g;for((S=S||_.length)>_.length&&(S=_.length),g=S-1;0<=g&&(192&_[g])==128;)g--;return g<0||g===0?S:g+m[_[g]]>S?g:S}},{"./common":41}],43:[function(i,c,d){c.exports=function(o,h,u,m){for(var w=65535&o|0,C=o>>>16&65535|0,_=0;u!==0;){for(u-=_=2e3<u?2e3:u;C=C+(w=w+h[m++]|0)|0,--_;);w%=65521,C%=65521}return w|C<<16|0}},{}],44:[function(i,c,d){c.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,c,d){var o=(function(){for(var h,u=[],m=0;m<256;m++){h=m;for(var w=0;w<8;w++)h=1&h?3988292384^h>>>1:h>>>1;u[m]=h}return u})();c.exports=function(h,u,m,w){var C=o,_=w+m;h^=-1;for(var S=w;S<_;S++)h=h>>>8^C[255&(h^u[S])];return-1^h}},{}],46:[function(i,c,d){var o,h=i("../utils/common"),u=i("./trees"),m=i("./adler32"),w=i("./crc32"),C=i("./messages"),_=0,S=4,g=0,A=-2,v=-1,k=4,b=2,T=8,B=9,W=286,K=30,nt=19,G=2*W+1,ut=15,tt=3,pt=258,Tt=pt+tt+1,R=42,Q=113,p=1,it=2,Pt=3,lt=4;function $t(l,et){return l.msg=C[et],et}function st(l){return(l<<1)-(4<l?9:0)}function Ot(l){for(var et=l.length;0<=--et;)l[et]=0}function X(l){var et=l.state,Y=et.pending;Y>l.avail_out&&(Y=l.avail_out),Y!==0&&(h.arraySet(l.output,et.pending_buf,et.pending_out,Y,l.next_out),l.next_out+=Y,et.pending_out+=Y,l.total_out+=Y,l.avail_out-=Y,et.pending-=Y,et.pending===0&&(et.pending_out=0))}function V(l,et){u._tr_flush_block(l,0<=l.block_start?l.block_start:-1,l.strstart-l.block_start,et),l.block_start=l.strstart,X(l.strm)}function Et(l,et){l.pending_buf[l.pending++]=et}function xt(l,et){l.pending_buf[l.pending++]=et>>>8&255,l.pending_buf[l.pending++]=255&et}function vt(l,et){var Y,E,x=l.max_chain_length,N=l.strstart,ot=l.prev_length,at=l.nice_match,Z=l.strstart>l.w_size-Tt?l.strstart-(l.w_size-Tt):0,ct=l.window,kt=l.w_mask,dt=l.prev,At=l.strstart+pt,Lt=ct[N+ot-1],Bt=ct[N+ot];l.prev_length>=l.good_match&&(x>>=2),at>l.lookahead&&(at=l.lookahead);do if(ct[(Y=et)+ot]===Bt&&ct[Y+ot-1]===Lt&&ct[Y]===ct[N]&&ct[++Y]===ct[N+1]){N+=2,Y++;do;while(ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&ct[++N]===ct[++Y]&&N<At);if(E=pt-(At-N),N=At-pt,ot<E){if(l.match_start=et,at<=(ot=E))break;Lt=ct[N+ot-1],Bt=ct[N+ot]}}while((et=dt[et&kt])>Z&&--x!=0);return ot<=l.lookahead?ot:l.lookahead}function qt(l){var et,Y,E,x,N,ot,at,Z,ct,kt,dt=l.w_size;do{if(x=l.window_size-l.lookahead-l.strstart,l.strstart>=dt+(dt-Tt)){for(h.arraySet(l.window,l.window,dt,dt,0),l.match_start-=dt,l.strstart-=dt,l.block_start-=dt,et=Y=l.hash_size;E=l.head[--et],l.head[et]=dt<=E?E-dt:0,--Y;);for(et=Y=dt;E=l.prev[--et],l.prev[et]=dt<=E?E-dt:0,--Y;);x+=dt}if(l.strm.avail_in===0)break;if(ot=l.strm,at=l.window,Z=l.strstart+l.lookahead,ct=x,kt=void 0,kt=ot.avail_in,ct<kt&&(kt=ct),Y=kt===0?0:(ot.avail_in-=kt,h.arraySet(at,ot.input,ot.next_in,kt,Z),ot.state.wrap===1?ot.adler=m(ot.adler,at,kt,Z):ot.state.wrap===2&&(ot.adler=w(ot.adler,at,kt,Z)),ot.next_in+=kt,ot.total_in+=kt,kt),l.lookahead+=Y,l.lookahead+l.insert>=tt)for(N=l.strstart-l.insert,l.ins_h=l.window[N],l.ins_h=(l.ins_h<<l.hash_shift^l.window[N+1])&l.hash_mask;l.insert&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[N+tt-1])&l.hash_mask,l.prev[N&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=N,N++,l.insert--,!(l.lookahead+l.insert<tt)););}while(l.lookahead<Tt&&l.strm.avail_in!==0)}function Qt(l,et){for(var Y,E;;){if(l.lookahead<Tt){if(qt(l),l.lookahead<Tt&&et===_)return p;if(l.lookahead===0)break}if(Y=0,l.lookahead>=tt&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+tt-1])&l.hash_mask,Y=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),Y!==0&&l.strstart-Y<=l.w_size-Tt&&(l.match_length=vt(l,Y)),l.match_length>=tt)if(E=u._tr_tally(l,l.strstart-l.match_start,l.match_length-tt),l.lookahead-=l.match_length,l.match_length<=l.max_lazy_match&&l.lookahead>=tt){for(l.match_length--;l.strstart++,l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+tt-1])&l.hash_mask,Y=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart,--l.match_length!=0;);l.strstart++}else l.strstart+=l.match_length,l.match_length=0,l.ins_h=l.window[l.strstart],l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+1])&l.hash_mask;else E=u._tr_tally(l,0,l.window[l.strstart]),l.lookahead--,l.strstart++;if(E&&(V(l,!1),l.strm.avail_out===0))return p}return l.insert=l.strstart<tt-1?l.strstart:tt-1,et===S?(V(l,!0),l.strm.avail_out===0?Pt:lt):l.last_lit&&(V(l,!1),l.strm.avail_out===0)?p:it}function jt(l,et){for(var Y,E,x;;){if(l.lookahead<Tt){if(qt(l),l.lookahead<Tt&&et===_)return p;if(l.lookahead===0)break}if(Y=0,l.lookahead>=tt&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+tt-1])&l.hash_mask,Y=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),l.prev_length=l.match_length,l.prev_match=l.match_start,l.match_length=tt-1,Y!==0&&l.prev_length<l.max_lazy_match&&l.strstart-Y<=l.w_size-Tt&&(l.match_length=vt(l,Y),l.match_length<=5&&(l.strategy===1||l.match_length===tt&&4096<l.strstart-l.match_start)&&(l.match_length=tt-1)),l.prev_length>=tt&&l.match_length<=l.prev_length){for(x=l.strstart+l.lookahead-tt,E=u._tr_tally(l,l.strstart-1-l.prev_match,l.prev_length-tt),l.lookahead-=l.prev_length-1,l.prev_length-=2;++l.strstart<=x&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+tt-1])&l.hash_mask,Y=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),--l.prev_length!=0;);if(l.match_available=0,l.match_length=tt-1,l.strstart++,E&&(V(l,!1),l.strm.avail_out===0))return p}else if(l.match_available){if((E=u._tr_tally(l,0,l.window[l.strstart-1]))&&V(l,!1),l.strstart++,l.lookahead--,l.strm.avail_out===0)return p}else l.match_available=1,l.strstart++,l.lookahead--}return l.match_available&&(E=u._tr_tally(l,0,l.window[l.strstart-1]),l.match_available=0),l.insert=l.strstart<tt-1?l.strstart:tt-1,et===S?(V(l,!0),l.strm.avail_out===0?Pt:lt):l.last_lit&&(V(l,!1),l.strm.avail_out===0)?p:it}function mt(l,et,Y,E,x){this.good_length=l,this.max_lazy=et,this.nice_length=Y,this.max_chain=E,this.func=x}function Xt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=T,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new h.Buf16(2*G),this.dyn_dtree=new h.Buf16(2*(2*K+1)),this.bl_tree=new h.Buf16(2*(2*nt+1)),Ot(this.dyn_ltree),Ot(this.dyn_dtree),Ot(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new h.Buf16(ut+1),this.heap=new h.Buf16(2*W+1),Ot(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new h.Buf16(2*W+1),Ot(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Wt(l){var et;return l&&l.state?(l.total_in=l.total_out=0,l.data_type=b,(et=l.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?R:Q,l.adler=et.wrap===2?0:1,et.last_flush=_,u._tr_init(et),g):$t(l,A)}function It(l){var et=Wt(l);return et===g&&(function(Y){Y.window_size=2*Y.w_size,Ot(Y.head),Y.max_lazy_match=o[Y.level].max_lazy,Y.good_match=o[Y.level].good_length,Y.nice_match=o[Y.level].nice_length,Y.max_chain_length=o[Y.level].max_chain,Y.strstart=0,Y.block_start=0,Y.lookahead=0,Y.insert=0,Y.match_length=Y.prev_length=tt-1,Y.match_available=0,Y.ins_h=0})(l.state),et}function ae(l,et,Y,E,x,N){if(!l)return A;var ot=1;if(et===v&&(et=6),E<0?(ot=0,E=-E):15<E&&(ot=2,E-=16),x<1||B<x||Y!==T||E<8||15<E||et<0||9<et||N<0||k<N)return $t(l,A);E===8&&(E=9);var at=new Xt;return(l.state=at).strm=l,at.wrap=ot,at.gzhead=null,at.w_bits=E,at.w_size=1<<at.w_bits,at.w_mask=at.w_size-1,at.hash_bits=x+7,at.hash_size=1<<at.hash_bits,at.hash_mask=at.hash_size-1,at.hash_shift=~~((at.hash_bits+tt-1)/tt),at.window=new h.Buf8(2*at.w_size),at.head=new h.Buf16(at.hash_size),at.prev=new h.Buf16(at.w_size),at.lit_bufsize=1<<x+6,at.pending_buf_size=4*at.lit_bufsize,at.pending_buf=new h.Buf8(at.pending_buf_size),at.d_buf=1*at.lit_bufsize,at.l_buf=3*at.lit_bufsize,at.level=et,at.strategy=N,at.method=Y,It(l)}o=[new mt(0,0,0,0,function(l,et){var Y=65535;for(Y>l.pending_buf_size-5&&(Y=l.pending_buf_size-5);;){if(l.lookahead<=1){if(qt(l),l.lookahead===0&&et===_)return p;if(l.lookahead===0)break}l.strstart+=l.lookahead,l.lookahead=0;var E=l.block_start+Y;if((l.strstart===0||l.strstart>=E)&&(l.lookahead=l.strstart-E,l.strstart=E,V(l,!1),l.strm.avail_out===0)||l.strstart-l.block_start>=l.w_size-Tt&&(V(l,!1),l.strm.avail_out===0))return p}return l.insert=0,et===S?(V(l,!0),l.strm.avail_out===0?Pt:lt):(l.strstart>l.block_start&&(V(l,!1),l.strm.avail_out),p)}),new mt(4,4,8,4,Qt),new mt(4,5,16,8,Qt),new mt(4,6,32,32,Qt),new mt(4,4,16,16,jt),new mt(8,16,32,32,jt),new mt(8,16,128,128,jt),new mt(8,32,128,256,jt),new mt(32,128,258,1024,jt),new mt(32,258,258,4096,jt)],d.deflateInit=function(l,et){return ae(l,et,T,15,8,0)},d.deflateInit2=ae,d.deflateReset=It,d.deflateResetKeep=Wt,d.deflateSetHeader=function(l,et){return l&&l.state?l.state.wrap!==2?A:(l.state.gzhead=et,g):A},d.deflate=function(l,et){var Y,E,x,N;if(!l||!l.state||5<et||et<0)return l?$t(l,A):A;if(E=l.state,!l.output||!l.input&&l.avail_in!==0||E.status===666&&et!==S)return $t(l,l.avail_out===0?-5:A);if(E.strm=l,Y=E.last_flush,E.last_flush=et,E.status===R)if(E.wrap===2)l.adler=0,Et(E,31),Et(E,139),Et(E,8),E.gzhead?(Et(E,(E.gzhead.text?1:0)+(E.gzhead.hcrc?2:0)+(E.gzhead.extra?4:0)+(E.gzhead.name?8:0)+(E.gzhead.comment?16:0)),Et(E,255&E.gzhead.time),Et(E,E.gzhead.time>>8&255),Et(E,E.gzhead.time>>16&255),Et(E,E.gzhead.time>>24&255),Et(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),Et(E,255&E.gzhead.os),E.gzhead.extra&&E.gzhead.extra.length&&(Et(E,255&E.gzhead.extra.length),Et(E,E.gzhead.extra.length>>8&255)),E.gzhead.hcrc&&(l.adler=w(l.adler,E.pending_buf,E.pending,0)),E.gzindex=0,E.status=69):(Et(E,0),Et(E,0),Et(E,0),Et(E,0),Et(E,0),Et(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),Et(E,3),E.status=Q);else{var ot=T+(E.w_bits-8<<4)<<8;ot|=(2<=E.strategy||E.level<2?0:E.level<6?1:E.level===6?2:3)<<6,E.strstart!==0&&(ot|=32),ot+=31-ot%31,E.status=Q,xt(E,ot),E.strstart!==0&&(xt(E,l.adler>>>16),xt(E,65535&l.adler)),l.adler=1}if(E.status===69)if(E.gzhead.extra){for(x=E.pending;E.gzindex<(65535&E.gzhead.extra.length)&&(E.pending!==E.pending_buf_size||(E.gzhead.hcrc&&E.pending>x&&(l.adler=w(l.adler,E.pending_buf,E.pending-x,x)),X(l),x=E.pending,E.pending!==E.pending_buf_size));)Et(E,255&E.gzhead.extra[E.gzindex]),E.gzindex++;E.gzhead.hcrc&&E.pending>x&&(l.adler=w(l.adler,E.pending_buf,E.pending-x,x)),E.gzindex===E.gzhead.extra.length&&(E.gzindex=0,E.status=73)}else E.status=73;if(E.status===73)if(E.gzhead.name){x=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>x&&(l.adler=w(l.adler,E.pending_buf,E.pending-x,x)),X(l),x=E.pending,E.pending===E.pending_buf_size)){N=1;break}N=E.gzindex<E.gzhead.name.length?255&E.gzhead.name.charCodeAt(E.gzindex++):0,Et(E,N)}while(N!==0);E.gzhead.hcrc&&E.pending>x&&(l.adler=w(l.adler,E.pending_buf,E.pending-x,x)),N===0&&(E.gzindex=0,E.status=91)}else E.status=91;if(E.status===91)if(E.gzhead.comment){x=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>x&&(l.adler=w(l.adler,E.pending_buf,E.pending-x,x)),X(l),x=E.pending,E.pending===E.pending_buf_size)){N=1;break}N=E.gzindex<E.gzhead.comment.length?255&E.gzhead.comment.charCodeAt(E.gzindex++):0,Et(E,N)}while(N!==0);E.gzhead.hcrc&&E.pending>x&&(l.adler=w(l.adler,E.pending_buf,E.pending-x,x)),N===0&&(E.status=103)}else E.status=103;if(E.status===103&&(E.gzhead.hcrc?(E.pending+2>E.pending_buf_size&&X(l),E.pending+2<=E.pending_buf_size&&(Et(E,255&l.adler),Et(E,l.adler>>8&255),l.adler=0,E.status=Q)):E.status=Q),E.pending!==0){if(X(l),l.avail_out===0)return E.last_flush=-1,g}else if(l.avail_in===0&&st(et)<=st(Y)&&et!==S)return $t(l,-5);if(E.status===666&&l.avail_in!==0)return $t(l,-5);if(l.avail_in!==0||E.lookahead!==0||et!==_&&E.status!==666){var at=E.strategy===2?(function(Z,ct){for(var kt;;){if(Z.lookahead===0&&(qt(Z),Z.lookahead===0)){if(ct===_)return p;break}if(Z.match_length=0,kt=u._tr_tally(Z,0,Z.window[Z.strstart]),Z.lookahead--,Z.strstart++,kt&&(V(Z,!1),Z.strm.avail_out===0))return p}return Z.insert=0,ct===S?(V(Z,!0),Z.strm.avail_out===0?Pt:lt):Z.last_lit&&(V(Z,!1),Z.strm.avail_out===0)?p:it})(E,et):E.strategy===3?(function(Z,ct){for(var kt,dt,At,Lt,Bt=Z.window;;){if(Z.lookahead<=pt){if(qt(Z),Z.lookahead<=pt&&ct===_)return p;if(Z.lookahead===0)break}if(Z.match_length=0,Z.lookahead>=tt&&0<Z.strstart&&(dt=Bt[At=Z.strstart-1])===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]){Lt=Z.strstart+pt;do;while(dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&dt===Bt[++At]&&At<Lt);Z.match_length=pt-(Lt-At),Z.match_length>Z.lookahead&&(Z.match_length=Z.lookahead)}if(Z.match_length>=tt?(kt=u._tr_tally(Z,1,Z.match_length-tt),Z.lookahead-=Z.match_length,Z.strstart+=Z.match_length,Z.match_length=0):(kt=u._tr_tally(Z,0,Z.window[Z.strstart]),Z.lookahead--,Z.strstart++),kt&&(V(Z,!1),Z.strm.avail_out===0))return p}return Z.insert=0,ct===S?(V(Z,!0),Z.strm.avail_out===0?Pt:lt):Z.last_lit&&(V(Z,!1),Z.strm.avail_out===0)?p:it})(E,et):o[E.level].func(E,et);if(at!==Pt&&at!==lt||(E.status=666),at===p||at===Pt)return l.avail_out===0&&(E.last_flush=-1),g;if(at===it&&(et===1?u._tr_align(E):et!==5&&(u._tr_stored_block(E,0,0,!1),et===3&&(Ot(E.head),E.lookahead===0&&(E.strstart=0,E.block_start=0,E.insert=0))),X(l),l.avail_out===0))return E.last_flush=-1,g}return et!==S?g:E.wrap<=0?1:(E.wrap===2?(Et(E,255&l.adler),Et(E,l.adler>>8&255),Et(E,l.adler>>16&255),Et(E,l.adler>>24&255),Et(E,255&l.total_in),Et(E,l.total_in>>8&255),Et(E,l.total_in>>16&255),Et(E,l.total_in>>24&255)):(xt(E,l.adler>>>16),xt(E,65535&l.adler)),X(l),0<E.wrap&&(E.wrap=-E.wrap),E.pending!==0?g:1)},d.deflateEnd=function(l){var et;return l&&l.state?(et=l.state.status)!==R&&et!==69&&et!==73&&et!==91&&et!==103&&et!==Q&&et!==666?$t(l,A):(l.state=null,et===Q?$t(l,-3):g):A},d.deflateSetDictionary=function(l,et){var Y,E,x,N,ot,at,Z,ct,kt=et.length;if(!l||!l.state||(N=(Y=l.state).wrap)===2||N===1&&Y.status!==R||Y.lookahead)return A;for(N===1&&(l.adler=m(l.adler,et,kt,0)),Y.wrap=0,kt>=Y.w_size&&(N===0&&(Ot(Y.head),Y.strstart=0,Y.block_start=0,Y.insert=0),ct=new h.Buf8(Y.w_size),h.arraySet(ct,et,kt-Y.w_size,Y.w_size,0),et=ct,kt=Y.w_size),ot=l.avail_in,at=l.next_in,Z=l.input,l.avail_in=kt,l.next_in=0,l.input=et,qt(Y);Y.lookahead>=tt;){for(E=Y.strstart,x=Y.lookahead-(tt-1);Y.ins_h=(Y.ins_h<<Y.hash_shift^Y.window[E+tt-1])&Y.hash_mask,Y.prev[E&Y.w_mask]=Y.head[Y.ins_h],Y.head[Y.ins_h]=E,E++,--x;);Y.strstart=E,Y.lookahead=tt-1,qt(Y)}return Y.strstart+=Y.lookahead,Y.block_start=Y.strstart,Y.insert=Y.lookahead,Y.lookahead=0,Y.match_length=Y.prev_length=tt-1,Y.match_available=0,l.next_in=at,l.input=Z,l.avail_in=ot,Y.wrap=N,g},d.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,c,d){c.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,c,d){c.exports=function(o,h){var u,m,w,C,_,S,g,A,v,k,b,T,B,W,K,nt,G,ut,tt,pt,Tt,R,Q,p,it;u=o.state,m=o.next_in,p=o.input,w=m+(o.avail_in-5),C=o.next_out,it=o.output,_=C-(h-o.avail_out),S=C+(o.avail_out-257),g=u.dmax,A=u.wsize,v=u.whave,k=u.wnext,b=u.window,T=u.hold,B=u.bits,W=u.lencode,K=u.distcode,nt=(1<<u.lenbits)-1,G=(1<<u.distbits)-1;t:do{B<15&&(T+=p[m++]<<B,B+=8,T+=p[m++]<<B,B+=8),ut=W[T&nt];e:for(;;){if(T>>>=tt=ut>>>24,B-=tt,(tt=ut>>>16&255)===0)it[C++]=65535&ut;else{if(!(16&tt)){if((64&tt)==0){ut=W[(65535&ut)+(T&(1<<tt)-1)];continue e}if(32&tt){u.mode=12;break t}o.msg="invalid literal/length code",u.mode=30;break t}pt=65535&ut,(tt&=15)&&(B<tt&&(T+=p[m++]<<B,B+=8),pt+=T&(1<<tt)-1,T>>>=tt,B-=tt),B<15&&(T+=p[m++]<<B,B+=8,T+=p[m++]<<B,B+=8),ut=K[T&G];n:for(;;){if(T>>>=tt=ut>>>24,B-=tt,!(16&(tt=ut>>>16&255))){if((64&tt)==0){ut=K[(65535&ut)+(T&(1<<tt)-1)];continue n}o.msg="invalid distance code",u.mode=30;break t}if(Tt=65535&ut,B<(tt&=15)&&(T+=p[m++]<<B,(B+=8)<tt&&(T+=p[m++]<<B,B+=8)),g<(Tt+=T&(1<<tt)-1)){o.msg="invalid distance too far back",u.mode=30;break t}if(T>>>=tt,B-=tt,(tt=C-_)<Tt){if(v<(tt=Tt-tt)&&u.sane){o.msg="invalid distance too far back",u.mode=30;break t}if(Q=b,(R=0)===k){if(R+=A-tt,tt<pt){for(pt-=tt;it[C++]=b[R++],--tt;);R=C-Tt,Q=it}}else if(k<tt){if(R+=A+k-tt,(tt-=k)<pt){for(pt-=tt;it[C++]=b[R++],--tt;);if(R=0,k<pt){for(pt-=tt=k;it[C++]=b[R++],--tt;);R=C-Tt,Q=it}}}else if(R+=k-tt,tt<pt){for(pt-=tt;it[C++]=b[R++],--tt;);R=C-Tt,Q=it}for(;2<pt;)it[C++]=Q[R++],it[C++]=Q[R++],it[C++]=Q[R++],pt-=3;pt&&(it[C++]=Q[R++],1<pt&&(it[C++]=Q[R++]))}else{for(R=C-Tt;it[C++]=it[R++],it[C++]=it[R++],it[C++]=it[R++],2<(pt-=3););pt&&(it[C++]=it[R++],1<pt&&(it[C++]=it[R++]))}break}}break}}while(m<w&&C<S);m-=pt=B>>3,T&=(1<<(B-=pt<<3))-1,o.next_in=m,o.next_out=C,o.avail_in=m<w?w-m+5:5-(m-w),o.avail_out=C<S?S-C+257:257-(C-S),u.hold=T,u.bits=B}},{}],49:[function(i,c,d){var o=i("../utils/common"),h=i("./adler32"),u=i("./crc32"),m=i("./inffast"),w=i("./inftrees"),C=1,_=2,S=0,g=-2,A=1,v=852,k=592;function b(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function T(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function B(R){var Q;return R&&R.state?(Q=R.state,R.total_in=R.total_out=Q.total=0,R.msg="",Q.wrap&&(R.adler=1&Q.wrap),Q.mode=A,Q.last=0,Q.havedict=0,Q.dmax=32768,Q.head=null,Q.hold=0,Q.bits=0,Q.lencode=Q.lendyn=new o.Buf32(v),Q.distcode=Q.distdyn=new o.Buf32(k),Q.sane=1,Q.back=-1,S):g}function W(R){var Q;return R&&R.state?((Q=R.state).wsize=0,Q.whave=0,Q.wnext=0,B(R)):g}function K(R,Q){var p,it;return R&&R.state?(it=R.state,Q<0?(p=0,Q=-Q):(p=1+(Q>>4),Q<48&&(Q&=15)),Q&&(Q<8||15<Q)?g:(it.window!==null&&it.wbits!==Q&&(it.window=null),it.wrap=p,it.wbits=Q,W(R))):g}function nt(R,Q){var p,it;return R?(it=new T,(R.state=it).window=null,(p=K(R,Q))!==S&&(R.state=null),p):g}var G,ut,tt=!0;function pt(R){if(tt){var Q;for(G=new o.Buf32(512),ut=new o.Buf32(32),Q=0;Q<144;)R.lens[Q++]=8;for(;Q<256;)R.lens[Q++]=9;for(;Q<280;)R.lens[Q++]=7;for(;Q<288;)R.lens[Q++]=8;for(w(C,R.lens,0,288,G,0,R.work,{bits:9}),Q=0;Q<32;)R.lens[Q++]=5;w(_,R.lens,0,32,ut,0,R.work,{bits:5}),tt=!1}R.lencode=G,R.lenbits=9,R.distcode=ut,R.distbits=5}function Tt(R,Q,p,it){var Pt,lt=R.state;return lt.window===null&&(lt.wsize=1<<lt.wbits,lt.wnext=0,lt.whave=0,lt.window=new o.Buf8(lt.wsize)),it>=lt.wsize?(o.arraySet(lt.window,Q,p-lt.wsize,lt.wsize,0),lt.wnext=0,lt.whave=lt.wsize):(it<(Pt=lt.wsize-lt.wnext)&&(Pt=it),o.arraySet(lt.window,Q,p-it,Pt,lt.wnext),(it-=Pt)?(o.arraySet(lt.window,Q,p-it,it,0),lt.wnext=it,lt.whave=lt.wsize):(lt.wnext+=Pt,lt.wnext===lt.wsize&&(lt.wnext=0),lt.whave<lt.wsize&&(lt.whave+=Pt))),0}d.inflateReset=W,d.inflateReset2=K,d.inflateResetKeep=B,d.inflateInit=function(R){return nt(R,15)},d.inflateInit2=nt,d.inflate=function(R,Q){var p,it,Pt,lt,$t,st,Ot,X,V,Et,xt,vt,qt,Qt,jt,mt,Xt,Wt,It,ae,l,et,Y,E,x=0,N=new o.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return g;(p=R.state).mode===12&&(p.mode=13),$t=R.next_out,Pt=R.output,Ot=R.avail_out,lt=R.next_in,it=R.input,st=R.avail_in,X=p.hold,V=p.bits,Et=st,xt=Ot,et=S;t:for(;;)switch(p.mode){case A:if(p.wrap===0){p.mode=13;break}for(;V<16;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(2&p.wrap&&X===35615){N[p.check=0]=255&X,N[1]=X>>>8&255,p.check=u(p.check,N,2,0),V=X=0,p.mode=2;break}if(p.flags=0,p.head&&(p.head.done=!1),!(1&p.wrap)||(((255&X)<<8)+(X>>8))%31){R.msg="incorrect header check",p.mode=30;break}if((15&X)!=8){R.msg="unknown compression method",p.mode=30;break}if(V-=4,l=8+(15&(X>>>=4)),p.wbits===0)p.wbits=l;else if(l>p.wbits){R.msg="invalid window size",p.mode=30;break}p.dmax=1<<l,R.adler=p.check=1,p.mode=512&X?10:12,V=X=0;break;case 2:for(;V<16;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(p.flags=X,(255&p.flags)!=8){R.msg="unknown compression method",p.mode=30;break}if(57344&p.flags){R.msg="unknown header flags set",p.mode=30;break}p.head&&(p.head.text=X>>8&1),512&p.flags&&(N[0]=255&X,N[1]=X>>>8&255,p.check=u(p.check,N,2,0)),V=X=0,p.mode=3;case 3:for(;V<32;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.head&&(p.head.time=X),512&p.flags&&(N[0]=255&X,N[1]=X>>>8&255,N[2]=X>>>16&255,N[3]=X>>>24&255,p.check=u(p.check,N,4,0)),V=X=0,p.mode=4;case 4:for(;V<16;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.head&&(p.head.xflags=255&X,p.head.os=X>>8),512&p.flags&&(N[0]=255&X,N[1]=X>>>8&255,p.check=u(p.check,N,2,0)),V=X=0,p.mode=5;case 5:if(1024&p.flags){for(;V<16;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.length=X,p.head&&(p.head.extra_len=X),512&p.flags&&(N[0]=255&X,N[1]=X>>>8&255,p.check=u(p.check,N,2,0)),V=X=0}else p.head&&(p.head.extra=null);p.mode=6;case 6:if(1024&p.flags&&(st<(vt=p.length)&&(vt=st),vt&&(p.head&&(l=p.head.extra_len-p.length,p.head.extra||(p.head.extra=new Array(p.head.extra_len)),o.arraySet(p.head.extra,it,lt,vt,l)),512&p.flags&&(p.check=u(p.check,it,vt,lt)),st-=vt,lt+=vt,p.length-=vt),p.length))break t;p.length=0,p.mode=7;case 7:if(2048&p.flags){if(st===0)break t;for(vt=0;l=it[lt+vt++],p.head&&l&&p.length<65536&&(p.head.name+=String.fromCharCode(l)),l&&vt<st;);if(512&p.flags&&(p.check=u(p.check,it,vt,lt)),st-=vt,lt+=vt,l)break t}else p.head&&(p.head.name=null);p.length=0,p.mode=8;case 8:if(4096&p.flags){if(st===0)break t;for(vt=0;l=it[lt+vt++],p.head&&l&&p.length<65536&&(p.head.comment+=String.fromCharCode(l)),l&&vt<st;);if(512&p.flags&&(p.check=u(p.check,it,vt,lt)),st-=vt,lt+=vt,l)break t}else p.head&&(p.head.comment=null);p.mode=9;case 9:if(512&p.flags){for(;V<16;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(X!==(65535&p.check)){R.msg="header crc mismatch",p.mode=30;break}V=X=0}p.head&&(p.head.hcrc=p.flags>>9&1,p.head.done=!0),R.adler=p.check=0,p.mode=12;break;case 10:for(;V<32;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}R.adler=p.check=b(X),V=X=0,p.mode=11;case 11:if(p.havedict===0)return R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,p.hold=X,p.bits=V,2;R.adler=p.check=1,p.mode=12;case 12:if(Q===5||Q===6)break t;case 13:if(p.last){X>>>=7&V,V-=7&V,p.mode=27;break}for(;V<3;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}switch(p.last=1&X,V-=1,3&(X>>>=1)){case 0:p.mode=14;break;case 1:if(pt(p),p.mode=20,Q!==6)break;X>>>=2,V-=2;break t;case 2:p.mode=17;break;case 3:R.msg="invalid block type",p.mode=30}X>>>=2,V-=2;break;case 14:for(X>>>=7&V,V-=7&V;V<32;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if((65535&X)!=(X>>>16^65535)){R.msg="invalid stored block lengths",p.mode=30;break}if(p.length=65535&X,V=X=0,p.mode=15,Q===6)break t;case 15:p.mode=16;case 16:if(vt=p.length){if(st<vt&&(vt=st),Ot<vt&&(vt=Ot),vt===0)break t;o.arraySet(Pt,it,lt,vt,$t),st-=vt,lt+=vt,Ot-=vt,$t+=vt,p.length-=vt;break}p.mode=12;break;case 17:for(;V<14;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(p.nlen=257+(31&X),X>>>=5,V-=5,p.ndist=1+(31&X),X>>>=5,V-=5,p.ncode=4+(15&X),X>>>=4,V-=4,286<p.nlen||30<p.ndist){R.msg="too many length or distance symbols",p.mode=30;break}p.have=0,p.mode=18;case 18:for(;p.have<p.ncode;){for(;V<3;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.lens[ot[p.have++]]=7&X,X>>>=3,V-=3}for(;p.have<19;)p.lens[ot[p.have++]]=0;if(p.lencode=p.lendyn,p.lenbits=7,Y={bits:p.lenbits},et=w(0,p.lens,0,19,p.lencode,0,p.work,Y),p.lenbits=Y.bits,et){R.msg="invalid code lengths set",p.mode=30;break}p.have=0,p.mode=19;case 19:for(;p.have<p.nlen+p.ndist;){for(;mt=(x=p.lencode[X&(1<<p.lenbits)-1])>>>16&255,Xt=65535&x,!((jt=x>>>24)<=V);){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(Xt<16)X>>>=jt,V-=jt,p.lens[p.have++]=Xt;else{if(Xt===16){for(E=jt+2;V<E;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(X>>>=jt,V-=jt,p.have===0){R.msg="invalid bit length repeat",p.mode=30;break}l=p.lens[p.have-1],vt=3+(3&X),X>>>=2,V-=2}else if(Xt===17){for(E=jt+3;V<E;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}V-=jt,l=0,vt=3+(7&(X>>>=jt)),X>>>=3,V-=3}else{for(E=jt+7;V<E;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}V-=jt,l=0,vt=11+(127&(X>>>=jt)),X>>>=7,V-=7}if(p.have+vt>p.nlen+p.ndist){R.msg="invalid bit length repeat",p.mode=30;break}for(;vt--;)p.lens[p.have++]=l}}if(p.mode===30)break;if(p.lens[256]===0){R.msg="invalid code -- missing end-of-block",p.mode=30;break}if(p.lenbits=9,Y={bits:p.lenbits},et=w(C,p.lens,0,p.nlen,p.lencode,0,p.work,Y),p.lenbits=Y.bits,et){R.msg="invalid literal/lengths set",p.mode=30;break}if(p.distbits=6,p.distcode=p.distdyn,Y={bits:p.distbits},et=w(_,p.lens,p.nlen,p.ndist,p.distcode,0,p.work,Y),p.distbits=Y.bits,et){R.msg="invalid distances set",p.mode=30;break}if(p.mode=20,Q===6)break t;case 20:p.mode=21;case 21:if(6<=st&&258<=Ot){R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,p.hold=X,p.bits=V,m(R,xt),$t=R.next_out,Pt=R.output,Ot=R.avail_out,lt=R.next_in,it=R.input,st=R.avail_in,X=p.hold,V=p.bits,p.mode===12&&(p.back=-1);break}for(p.back=0;mt=(x=p.lencode[X&(1<<p.lenbits)-1])>>>16&255,Xt=65535&x,!((jt=x>>>24)<=V);){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(mt&&(240&mt)==0){for(Wt=jt,It=mt,ae=Xt;mt=(x=p.lencode[ae+((X&(1<<Wt+It)-1)>>Wt)])>>>16&255,Xt=65535&x,!(Wt+(jt=x>>>24)<=V);){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}X>>>=Wt,V-=Wt,p.back+=Wt}if(X>>>=jt,V-=jt,p.back+=jt,p.length=Xt,mt===0){p.mode=26;break}if(32&mt){p.back=-1,p.mode=12;break}if(64&mt){R.msg="invalid literal/length code",p.mode=30;break}p.extra=15&mt,p.mode=22;case 22:if(p.extra){for(E=p.extra;V<E;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.length+=X&(1<<p.extra)-1,X>>>=p.extra,V-=p.extra,p.back+=p.extra}p.was=p.length,p.mode=23;case 23:for(;mt=(x=p.distcode[X&(1<<p.distbits)-1])>>>16&255,Xt=65535&x,!((jt=x>>>24)<=V);){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if((240&mt)==0){for(Wt=jt,It=mt,ae=Xt;mt=(x=p.distcode[ae+((X&(1<<Wt+It)-1)>>Wt)])>>>16&255,Xt=65535&x,!(Wt+(jt=x>>>24)<=V);){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}X>>>=Wt,V-=Wt,p.back+=Wt}if(X>>>=jt,V-=jt,p.back+=jt,64&mt){R.msg="invalid distance code",p.mode=30;break}p.offset=Xt,p.extra=15&mt,p.mode=24;case 24:if(p.extra){for(E=p.extra;V<E;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}p.offset+=X&(1<<p.extra)-1,X>>>=p.extra,V-=p.extra,p.back+=p.extra}if(p.offset>p.dmax){R.msg="invalid distance too far back",p.mode=30;break}p.mode=25;case 25:if(Ot===0)break t;if(vt=xt-Ot,p.offset>vt){if((vt=p.offset-vt)>p.whave&&p.sane){R.msg="invalid distance too far back",p.mode=30;break}qt=vt>p.wnext?(vt-=p.wnext,p.wsize-vt):p.wnext-vt,vt>p.length&&(vt=p.length),Qt=p.window}else Qt=Pt,qt=$t-p.offset,vt=p.length;for(Ot<vt&&(vt=Ot),Ot-=vt,p.length-=vt;Pt[$t++]=Qt[qt++],--vt;);p.length===0&&(p.mode=21);break;case 26:if(Ot===0)break t;Pt[$t++]=p.length,Ot--,p.mode=21;break;case 27:if(p.wrap){for(;V<32;){if(st===0)break t;st--,X|=it[lt++]<<V,V+=8}if(xt-=Ot,R.total_out+=xt,p.total+=xt,xt&&(R.adler=p.check=p.flags?u(p.check,Pt,xt,$t-xt):h(p.check,Pt,xt,$t-xt)),xt=Ot,(p.flags?X:b(X))!==p.check){R.msg="incorrect data check",p.mode=30;break}V=X=0}p.mode=28;case 28:if(p.wrap&&p.flags){for(;V<32;){if(st===0)break t;st--,X+=it[lt++]<<V,V+=8}if(X!==(4294967295&p.total)){R.msg="incorrect length check",p.mode=30;break}V=X=0}p.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;case 32:default:return g}return R.next_out=$t,R.avail_out=Ot,R.next_in=lt,R.avail_in=st,p.hold=X,p.bits=V,(p.wsize||xt!==R.avail_out&&p.mode<30&&(p.mode<27||Q!==4))&&Tt(R,R.output,R.next_out,xt-R.avail_out)?(p.mode=31,-4):(Et-=R.avail_in,xt-=R.avail_out,R.total_in+=Et,R.total_out+=xt,p.total+=xt,p.wrap&&xt&&(R.adler=p.check=p.flags?u(p.check,Pt,xt,R.next_out-xt):h(p.check,Pt,xt,R.next_out-xt)),R.data_type=p.bits+(p.last?64:0)+(p.mode===12?128:0)+(p.mode===20||p.mode===15?256:0),(Et==0&&xt===0||Q===4)&&et===S&&(et=-5),et)},d.inflateEnd=function(R){if(!R||!R.state)return g;var Q=R.state;return Q.window&&(Q.window=null),R.state=null,S},d.inflateGetHeader=function(R,Q){var p;return R&&R.state?(2&(p=R.state).wrap)==0?g:((p.head=Q).done=!1,S):g},d.inflateSetDictionary=function(R,Q){var p,it=Q.length;return R&&R.state?(p=R.state).wrap!==0&&p.mode!==11?g:p.mode===11&&h(1,Q,it,0)!==p.check?-3:Tt(R,Q,it,it)?(p.mode=31,-4):(p.havedict=1,S):g},d.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,c,d){var o=i("../utils/common"),h=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],w=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];c.exports=function(C,_,S,g,A,v,k,b){var T,B,W,K,nt,G,ut,tt,pt,Tt=b.bits,R=0,Q=0,p=0,it=0,Pt=0,lt=0,$t=0,st=0,Ot=0,X=0,V=null,Et=0,xt=new o.Buf16(16),vt=new o.Buf16(16),qt=null,Qt=0;for(R=0;R<=15;R++)xt[R]=0;for(Q=0;Q<g;Q++)xt[_[S+Q]]++;for(Pt=Tt,it=15;1<=it&&xt[it]===0;it--);if(it<Pt&&(Pt=it),it===0)return A[v++]=20971520,A[v++]=20971520,b.bits=1,0;for(p=1;p<it&&xt[p]===0;p++);for(Pt<p&&(Pt=p),R=st=1;R<=15;R++)if(st<<=1,(st-=xt[R])<0)return-1;if(0<st&&(C===0||it!==1))return-1;for(vt[1]=0,R=1;R<15;R++)vt[R+1]=vt[R]+xt[R];for(Q=0;Q<g;Q++)_[S+Q]!==0&&(k[vt[_[S+Q]]++]=Q);if(G=C===0?(V=qt=k,19):C===1?(V=h,Et-=257,qt=u,Qt-=257,256):(V=m,qt=w,-1),R=p,nt=v,$t=Q=X=0,W=-1,K=(Ot=1<<(lt=Pt))-1,C===1&&852<Ot||C===2&&592<Ot)return 1;for(;;){for(ut=R-$t,pt=k[Q]<G?(tt=0,k[Q]):k[Q]>G?(tt=qt[Qt+k[Q]],V[Et+k[Q]]):(tt=96,0),T=1<<R-$t,p=B=1<<lt;A[nt+(X>>$t)+(B-=T)]=ut<<24|tt<<16|pt|0,B!==0;);for(T=1<<R-1;X&T;)T>>=1;if(T!==0?(X&=T-1,X+=T):X=0,Q++,--xt[R]==0){if(R===it)break;R=_[S+k[Q]]}if(Pt<R&&(X&K)!==W){for($t===0&&($t=Pt),nt+=p,st=1<<(lt=R-$t);lt+$t<it&&!((st-=xt[lt+$t])<=0);)lt++,st<<=1;if(Ot+=1<<lt,C===1&&852<Ot||C===2&&592<Ot)return 1;A[W=X&K]=Pt<<24|lt<<16|nt-v|0}}return X!==0&&(A[nt+X]=R-$t<<24|64<<16|0),b.bits=Pt,0}},{"../utils/common":41}],51:[function(i,c,d){c.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,c,d){var o=i("../utils/common"),h=0,u=1;function m(x){for(var N=x.length;0<=--N;)x[N]=0}var w=0,C=29,_=256,S=_+1+C,g=30,A=19,v=2*S+1,k=15,b=16,T=7,B=256,W=16,K=17,nt=18,G=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ut=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Tt=new Array(2*(S+2));m(Tt);var R=new Array(2*g);m(R);var Q=new Array(512);m(Q);var p=new Array(256);m(p);var it=new Array(C);m(it);var Pt,lt,$t,st=new Array(g);function Ot(x,N,ot,at,Z){this.static_tree=x,this.extra_bits=N,this.extra_base=ot,this.elems=at,this.max_length=Z,this.has_stree=x&&x.length}function X(x,N){this.dyn_tree=x,this.max_code=0,this.stat_desc=N}function V(x){return x<256?Q[x]:Q[256+(x>>>7)]}function Et(x,N){x.pending_buf[x.pending++]=255&N,x.pending_buf[x.pending++]=N>>>8&255}function xt(x,N,ot){x.bi_valid>b-ot?(x.bi_buf|=N<<x.bi_valid&65535,Et(x,x.bi_buf),x.bi_buf=N>>b-x.bi_valid,x.bi_valid+=ot-b):(x.bi_buf|=N<<x.bi_valid&65535,x.bi_valid+=ot)}function vt(x,N,ot){xt(x,ot[2*N],ot[2*N+1])}function qt(x,N){for(var ot=0;ot|=1&x,x>>>=1,ot<<=1,0<--N;);return ot>>>1}function Qt(x,N,ot){var at,Z,ct=new Array(k+1),kt=0;for(at=1;at<=k;at++)ct[at]=kt=kt+ot[at-1]<<1;for(Z=0;Z<=N;Z++){var dt=x[2*Z+1];dt!==0&&(x[2*Z]=qt(ct[dt]++,dt))}}function jt(x){var N;for(N=0;N<S;N++)x.dyn_ltree[2*N]=0;for(N=0;N<g;N++)x.dyn_dtree[2*N]=0;for(N=0;N<A;N++)x.bl_tree[2*N]=0;x.dyn_ltree[2*B]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function mt(x){8<x.bi_valid?Et(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function Xt(x,N,ot,at){var Z=2*N,ct=2*ot;return x[Z]<x[ct]||x[Z]===x[ct]&&at[N]<=at[ot]}function Wt(x,N,ot){for(var at=x.heap[ot],Z=ot<<1;Z<=x.heap_len&&(Z<x.heap_len&&Xt(N,x.heap[Z+1],x.heap[Z],x.depth)&&Z++,!Xt(N,at,x.heap[Z],x.depth));)x.heap[ot]=x.heap[Z],ot=Z,Z<<=1;x.heap[ot]=at}function It(x,N,ot){var at,Z,ct,kt,dt=0;if(x.last_lit!==0)for(;at=x.pending_buf[x.d_buf+2*dt]<<8|x.pending_buf[x.d_buf+2*dt+1],Z=x.pending_buf[x.l_buf+dt],dt++,at===0?vt(x,Z,N):(vt(x,(ct=p[Z])+_+1,N),(kt=G[ct])!==0&&xt(x,Z-=it[ct],kt),vt(x,ct=V(--at),ot),(kt=ut[ct])!==0&&xt(x,at-=st[ct],kt)),dt<x.last_lit;);vt(x,B,N)}function ae(x,N){var ot,at,Z,ct=N.dyn_tree,kt=N.stat_desc.static_tree,dt=N.stat_desc.has_stree,At=N.stat_desc.elems,Lt=-1;for(x.heap_len=0,x.heap_max=v,ot=0;ot<At;ot++)ct[2*ot]!==0?(x.heap[++x.heap_len]=Lt=ot,x.depth[ot]=0):ct[2*ot+1]=0;for(;x.heap_len<2;)ct[2*(Z=x.heap[++x.heap_len]=Lt<2?++Lt:0)]=1,x.depth[Z]=0,x.opt_len--,dt&&(x.static_len-=kt[2*Z+1]);for(N.max_code=Lt,ot=x.heap_len>>1;1<=ot;ot--)Wt(x,ct,ot);for(Z=At;ot=x.heap[1],x.heap[1]=x.heap[x.heap_len--],Wt(x,ct,1),at=x.heap[1],x.heap[--x.heap_max]=ot,x.heap[--x.heap_max]=at,ct[2*Z]=ct[2*ot]+ct[2*at],x.depth[Z]=(x.depth[ot]>=x.depth[at]?x.depth[ot]:x.depth[at])+1,ct[2*ot+1]=ct[2*at+1]=Z,x.heap[1]=Z++,Wt(x,ct,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(Bt,ne){var Ae,he,me,Zt,$e,be,Ct=ne.dyn_tree,Re=ne.max_code,Ee=ne.stat_desc.static_tree,Qe=ne.stat_desc.has_stree,_t=ne.stat_desc.extra_bits,tn=ne.stat_desc.extra_base,ze=ne.stat_desc.max_length,De=0;for(Zt=0;Zt<=k;Zt++)Bt.bl_count[Zt]=0;for(Ct[2*Bt.heap[Bt.heap_max]+1]=0,Ae=Bt.heap_max+1;Ae<v;Ae++)ze<(Zt=Ct[2*Ct[2*(he=Bt.heap[Ae])+1]+1]+1)&&(Zt=ze,De++),Ct[2*he+1]=Zt,Re<he||(Bt.bl_count[Zt]++,$e=0,tn<=he&&($e=_t[he-tn]),be=Ct[2*he],Bt.opt_len+=be*(Zt+$e),Qe&&(Bt.static_len+=be*(Ee[2*he+1]+$e)));if(De!==0){do{for(Zt=ze-1;Bt.bl_count[Zt]===0;)Zt--;Bt.bl_count[Zt]--,Bt.bl_count[Zt+1]+=2,Bt.bl_count[ze]--,De-=2}while(0<De);for(Zt=ze;Zt!==0;Zt--)for(he=Bt.bl_count[Zt];he!==0;)Re<(me=Bt.heap[--Ae])||(Ct[2*me+1]!==Zt&&(Bt.opt_len+=(Zt-Ct[2*me+1])*Ct[2*me],Ct[2*me+1]=Zt),he--)}})(x,N),Qt(ct,Lt,x.bl_count)}function l(x,N,ot){var at,Z,ct=-1,kt=N[1],dt=0,At=7,Lt=4;for(kt===0&&(At=138,Lt=3),N[2*(ot+1)+1]=65535,at=0;at<=ot;at++)Z=kt,kt=N[2*(at+1)+1],++dt<At&&Z===kt||(dt<Lt?x.bl_tree[2*Z]+=dt:Z!==0?(Z!==ct&&x.bl_tree[2*Z]++,x.bl_tree[2*W]++):dt<=10?x.bl_tree[2*K]++:x.bl_tree[2*nt]++,ct=Z,Lt=(dt=0)===kt?(At=138,3):Z===kt?(At=6,3):(At=7,4))}function et(x,N,ot){var at,Z,ct=-1,kt=N[1],dt=0,At=7,Lt=4;for(kt===0&&(At=138,Lt=3),at=0;at<=ot;at++)if(Z=kt,kt=N[2*(at+1)+1],!(++dt<At&&Z===kt)){if(dt<Lt)for(;vt(x,Z,x.bl_tree),--dt!=0;);else Z!==0?(Z!==ct&&(vt(x,Z,x.bl_tree),dt--),vt(x,W,x.bl_tree),xt(x,dt-3,2)):dt<=10?(vt(x,K,x.bl_tree),xt(x,dt-3,3)):(vt(x,nt,x.bl_tree),xt(x,dt-11,7));ct=Z,Lt=(dt=0)===kt?(At=138,3):Z===kt?(At=6,3):(At=7,4)}}m(st);var Y=!1;function E(x,N,ot,at){xt(x,(w<<1)+(at?1:0),3),(function(Z,ct,kt,dt){mt(Z),Et(Z,kt),Et(Z,~kt),o.arraySet(Z.pending_buf,Z.window,ct,kt,Z.pending),Z.pending+=kt})(x,N,ot)}d._tr_init=function(x){Y||((function(){var N,ot,at,Z,ct,kt=new Array(k+1);for(Z=at=0;Z<C-1;Z++)for(it[Z]=at,N=0;N<1<<G[Z];N++)p[at++]=Z;for(p[at-1]=Z,Z=ct=0;Z<16;Z++)for(st[Z]=ct,N=0;N<1<<ut[Z];N++)Q[ct++]=Z;for(ct>>=7;Z<g;Z++)for(st[Z]=ct<<7,N=0;N<1<<ut[Z]-7;N++)Q[256+ct++]=Z;for(ot=0;ot<=k;ot++)kt[ot]=0;for(N=0;N<=143;)Tt[2*N+1]=8,N++,kt[8]++;for(;N<=255;)Tt[2*N+1]=9,N++,kt[9]++;for(;N<=279;)Tt[2*N+1]=7,N++,kt[7]++;for(;N<=287;)Tt[2*N+1]=8,N++,kt[8]++;for(Qt(Tt,S+1,kt),N=0;N<g;N++)R[2*N+1]=5,R[2*N]=qt(N,5);Pt=new Ot(Tt,G,_+1,S,k),lt=new Ot(R,ut,0,g,k),$t=new Ot(new Array(0),tt,0,A,T)})(),Y=!0),x.l_desc=new X(x.dyn_ltree,Pt),x.d_desc=new X(x.dyn_dtree,lt),x.bl_desc=new X(x.bl_tree,$t),x.bi_buf=0,x.bi_valid=0,jt(x)},d._tr_stored_block=E,d._tr_flush_block=function(x,N,ot,at){var Z,ct,kt=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(dt){var At,Lt=4093624447;for(At=0;At<=31;At++,Lt>>>=1)if(1&Lt&&dt.dyn_ltree[2*At]!==0)return h;if(dt.dyn_ltree[18]!==0||dt.dyn_ltree[20]!==0||dt.dyn_ltree[26]!==0)return u;for(At=32;At<_;At++)if(dt.dyn_ltree[2*At]!==0)return u;return h})(x)),ae(x,x.l_desc),ae(x,x.d_desc),kt=(function(dt){var At;for(l(dt,dt.dyn_ltree,dt.l_desc.max_code),l(dt,dt.dyn_dtree,dt.d_desc.max_code),ae(dt,dt.bl_desc),At=A-1;3<=At&&dt.bl_tree[2*pt[At]+1]===0;At--);return dt.opt_len+=3*(At+1)+5+5+4,At})(x),Z=x.opt_len+3+7>>>3,(ct=x.static_len+3+7>>>3)<=Z&&(Z=ct)):Z=ct=ot+5,ot+4<=Z&&N!==-1?E(x,N,ot,at):x.strategy===4||ct===Z?(xt(x,2+(at?1:0),3),It(x,Tt,R)):(xt(x,4+(at?1:0),3),(function(dt,At,Lt,Bt){var ne;for(xt(dt,At-257,5),xt(dt,Lt-1,5),xt(dt,Bt-4,4),ne=0;ne<Bt;ne++)xt(dt,dt.bl_tree[2*pt[ne]+1],3);et(dt,dt.dyn_ltree,At-1),et(dt,dt.dyn_dtree,Lt-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,kt+1),It(x,x.dyn_ltree,x.dyn_dtree)),jt(x),at&&mt(x)},d._tr_tally=function(x,N,ot){return x.pending_buf[x.d_buf+2*x.last_lit]=N>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&N,x.pending_buf[x.l_buf+x.last_lit]=255&ot,x.last_lit++,N===0?x.dyn_ltree[2*ot]++:(x.matches++,N--,x.dyn_ltree[2*(p[ot]+_+1)]++,x.dyn_dtree[2*V(N)]++),x.last_lit===x.lit_bufsize-1},d._tr_align=function(x){xt(x,2,3),vt(x,B,Tt),(function(N){N.bi_valid===16?(Et(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(i,c,d){c.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,c,d){(function(o){(function(h,u){if(!h.setImmediate){var m,w,C,_,S=1,g={},A=!1,v=h.document,k=Object.getPrototypeOf&&Object.getPrototypeOf(h);k=k&&k.setTimeout?k:h,m={}.toString.call(h.process)==="[object process]"?function(W){process.nextTick(function(){T(W)})}:(function(){if(h.postMessage&&!h.importScripts){var W=!0,K=h.onmessage;return h.onmessage=function(){W=!1},h.postMessage("","*"),h.onmessage=K,W}})()?(_="setImmediate$"+Math.random()+"$",h.addEventListener?h.addEventListener("message",B,!1):h.attachEvent("onmessage",B),function(W){h.postMessage(_+W,"*")}):h.MessageChannel?((C=new MessageChannel).port1.onmessage=function(W){T(W.data)},function(W){C.port2.postMessage(W)}):v&&"onreadystatechange"in v.createElement("script")?(w=v.documentElement,function(W){var K=v.createElement("script");K.onreadystatechange=function(){T(W),K.onreadystatechange=null,w.removeChild(K),K=null},w.appendChild(K)}):function(W){setTimeout(T,0,W)},k.setImmediate=function(W){typeof W!="function"&&(W=new Function(""+W));for(var K=new Array(arguments.length-1),nt=0;nt<K.length;nt++)K[nt]=arguments[nt+1];var G={callback:W,args:K};return g[S]=G,m(S),S++},k.clearImmediate=b}function b(W){delete g[W]}function T(W){if(A)setTimeout(T,0,W);else{var K=g[W];if(K){A=!0;try{(function(nt){var G=nt.callback,ut=nt.args;switch(ut.length){case 0:G();break;case 1:G(ut[0]);break;case 2:G(ut[0],ut[1]);break;case 3:G(ut[0],ut[1],ut[2]);break;default:G.apply(u,ut)}})(K)}finally{b(W),A=!1}}}}function B(W){W.source===h&&typeof W.data=="string"&&W.data.indexOf(_)===0&&T(+W.data.slice(_.length))}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,typeof Pe<"u"?Pe:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Kr)),Kr.exports}var Io=Do();const aa=na(Io);var ir={exports:{}},Bo=ir.exports,Zi;function Mo(){return Zi||(Zi=1,(function($,r){(function(i,c){c()})(Bo,function(){function i(w,C){return typeof C>"u"?C={autoBom:!1}:typeof C!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),C={autoBom:!C}),C.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(w.type)?new Blob(["\uFEFF",w],{type:w.type}):w}function c(w,C,_){var S=new XMLHttpRequest;S.open("GET",w),S.responseType="blob",S.onload=function(){m(S.response,C,_)},S.onerror=function(){console.error("could not download file")},S.send()}function d(w){var C=new XMLHttpRequest;C.open("HEAD",w,!1);try{C.send()}catch{}return 200<=C.status&&299>=C.status}function o(w){try{w.dispatchEvent(new MouseEvent("click"))}catch{var C=document.createEvent("MouseEvents");C.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),w.dispatchEvent(C)}}var h=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Pe=="object"&&Pe.global===Pe?Pe:void 0,u=h.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),m=h.saveAs||(typeof window!="object"||window!==h?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(w,C,_){var S=h.URL||h.webkitURL,g=document.createElement("a");C=C||w.name||"download",g.download=C,g.rel="noopener",typeof w=="string"?(g.href=w,g.origin===location.origin?o(g):d(g.href)?c(w,C,_):o(g,g.target="_blank")):(g.href=S.createObjectURL(w),setTimeout(function(){S.revokeObjectURL(g.href)},4e4),setTimeout(function(){o(g)},0))}:"msSaveOrOpenBlob"in navigator?function(w,C,_){if(C=C||w.name||"download",typeof w!="string")navigator.msSaveOrOpenBlob(i(w,_),C);else if(d(w))c(w,C,_);else{var S=document.createElement("a");S.href=w,S.target="_blank",setTimeout(function(){o(S)})}}:function(w,C,_,S){if(S=S||open("","_blank"),S&&(S.document.title=S.document.body.innerText="downloading..."),typeof w=="string")return c(w,C,_);var g=w.type==="application/octet-stream",A=/constructor/i.test(h.HTMLElement)||h.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||g&&A||u)&&typeof FileReader<"u"){var k=new FileReader;k.onloadend=function(){var B=k.result;B=v?B:B.replace(/^data:[^;]*;/,"data:attachment/file;"),S?S.location.href=B:location=B,S=null},k.readAsDataURL(w)}else{var b=h.URL||h.webkitURL,T=b.createObjectURL(w);S?S.location=T:location.href=T,S=null,setTimeout(function(){b.revokeObjectURL(T)},4e4)}});h.saveAs=m.saveAs=m,$.exports=m})})(ir)),ir.exports}var oa=Mo();function Hi($){const r=Math.floor($/3600),i=Math.floor($%3600/60),c=Math.floor($%60),d=Math.floor($%1*1e3);return`${r.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")},${d.toString().padStart(3,"0")}`}function Vi($){const r=Math.floor($/3600),i=Math.floor($%3600/60),c=Math.floor($%60),d=Math.floor($%1*1e3);return`${r.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}.${d.toString().padStart(3,"0")}`}function sa($){return $.map((r,i)=>{const c=i+1,d=Hi(r.start),o=Hi(r.end),h=r.text;return`${c}
${d} --> ${o}
${h}
`}).join(`
`)}function la($){const r=`WEBVTT

`,i=$.map(c=>{const d=Vi(c.start),o=Vi(c.end),h=c.text;return`${d} --> ${o}
${h}
`}).join(`
`);return r+i}function ua($){return $.map(r=>{const i=r.start.toFixed(3),c=r.end.toFixed(3);return`[${i}s - ${c}s] ${r.text}`}).join(`
`)}function ca($,r,i,c,d,o,h){return{id:$,title:r,duration:i,created_at:new Date(c).toISOString(),source:d,full_text:o,segments:h.map(u=>({id:u.id,text:u.text,start:u.start,end:u.end,duration:u.end-u.start}))}}async function ha($){return $}async function jo($){const r=await Co($),i=await ur($);if(!r)throw new Error("Recording not found");if(!i)throw new Error("No annotations found for this recording");const c=new aa,d=`${r.title}-${$.slice(0,8)}`,o=c.folder(d),h=await ha(r.audioBlob);o.file(`${$}.wav`,h);const u=ca(r.id,r.title,r.duration,r.createdAt,r.source,i.fullText,i.segments);o.file(`${$}.json`,JSON.stringify(u,null,2));const m=sa(i.segments);o.file(`${$}.srt`,m);const w=la(i.segments);o.file(`${$}.vtt`,w);const C=ua(i.segments);o.file(`${$}.txt`,C);const _=await c.generateAsync({type:"blob"});oa.saveAs(_,`${d}.zip`)}async function Fo(){const r=(await ia()).filter(u=>u.isAnnotated);if(r.length===0)throw new Error("No annotated recordings to export");const i=new aa,d=`annotations-export-${new Date().toISOString().replace(/[:.]/g,"-")}`,o=i.folder(d);for(const u of r){const m=await ur(u.id);if(!m)continue;const w=`${u.title}-${u.id.slice(0,8)}`,C=o.folder(w),_=await ha(u.audioBlob);C.file(`${u.id}.wav`,_);const S=ca(u.id,u.title,u.duration,u.createdAt,u.source,m.fullText,m.segments);C.file(`${u.id}.json`,JSON.stringify(S,null,2));const g=sa(m.segments);C.file(`${u.id}.srt`,g);const A=la(m.segments);C.file(`${u.id}.vtt`,A);const v=ua(m.segments);C.file(`${u.id}.txt`,v)}const h=await i.generateAsync({type:"blob"});oa.saveAs(h,`${d}.zip`)}class No{constructor(r){this.listeners=new Set,this.state=r}getState(){return this.state}subscribe(r){return this.listeners.add(r),()=>{this.listeners.delete(r)}}notify(){this.listeners.forEach(r=>r(this.state))}setState(r){this.state={...this.state,...r},this.notify()}}const da="aidio-theme",Lo=()=>{try{const $=localStorage.getItem(da);if($==="dark"||$==="pastel")return $}catch($){console.warn("Failed to read theme from localStorage:",$)}return"dark"},Uo={currentTheme:Lo()};class Ko extends No{constructor(){super(Uo)}toggleTheme(){const r=this.state.currentTheme==="dark"?"pastel":"dark";this.setTheme(r)}setTheme(r){this.setState({currentTheme:r});try{localStorage.setItem(da,r)}catch(i){console.warn("Failed to save theme to localStorage:",i)}}getCurrentTheme(){return this.state.currentTheme}}const An=new Ko,qo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var fa=function($,r,i,c){var d=arguments.length,o=d<3?r:c===null?c=Object.getOwnPropertyDescriptor(r,i):c,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,c);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(d<3?h(o):d>3?h(r,i,o):h(r,i))||o);return d>3&&o&&Object.defineProperty(r,i,o),o};let cr=class extends Se{constructor(){super(...arguments),this.currentTheme=An.getCurrentTheme()}connectedCallback(){super.connectedCallback(),this.unsubscribe=An.subscribe(r=>{this.currentTheme=r.currentTheme})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}handleToggle(){An.toggleTheme()}render(){const r=this.currentTheme==="dark"?qo:Wo,i=this.currentTheme==="dark"?"Switch to Pastel Theme":"Switch to Dark Theme";return Kt`
      <button
        class="theme-toggle-btn"
        @click=${this.handleToggle}
        title=${i}
        aria-label=${i}
      >
        <span class="theme-icon">${Jt(r)}</span>
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
  `;fa([Ft()],cr.prototype,"currentTheme",void 0);cr=fa([fn("theme-toggle")],cr);const pa=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var oe=function($,r,i,c){var d=arguments.length,o=d<3?r:c===null?c=Object.getOwnPropertyDescriptor(r,i):c,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,c);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(d<3?h(o):d>3?h(r,i,o):h(r,i))||o);return d>3&&o&&Object.defineProperty(r,i,o),o};let ee=class extends Se{constructor(){super(...arguments),this.audioBlob=null,this.startMarker=0,this.endMarker=3,this.leftClamp=0,this.rightClamp=3,this.waveformData=null,this.isPlaying=!1,this.loopEnabled=!1,this.currentTime=0,this.duration=0,this.draggingMarker=null,this.waveformZoom=1,this.waveformPan=0,this.isPanningWaveform=!1,this.panStartX=0,this.panStartOffset=0,this.canvas=null,this.ctx=null,this.audioContext=null,this.audioBuffer=null,this.audioSource=null,this.animationFrameId=null,this.playStartTime=0,this.playStartOffset=0,this.handleMarkerMouseMove=r=>{if(!this.draggingMarker||!this.canvas||this.duration===0)return;const i=this.canvas.getBoundingClientRect(),c=r.clientX-i.left,o=Math.max(0,Math.min(1,c/i.width))*this.duration;this.draggingMarker==="start"?this.leftClamp=Math.max(0,Math.min(o,this.rightClamp-.1)):this.draggingMarker==="end"&&(this.rightClamp=Math.min(this.duration,Math.max(o,this.leftClamp+.1))),this.dispatchMarkerChange(),this.requestUpdate()},this.handleMarkerMouseUp=()=>{this.draggingMarker=null,document.removeEventListener("mousemove",this.handleMarkerMouseMove),document.removeEventListener("mouseup",this.handleMarkerMouseUp)},this.handleWaveformPanStart=r=>{const i=r.target;!i.tagName||i.tagName!=="CANVAS"||(this.isPanningWaveform=!0,this.panStartX=r.clientX,this.panStartOffset=this.waveformPan,document.addEventListener("mousemove",this.handleWaveformPanMove),document.addEventListener("mouseup",this.handleWaveformPanEnd))},this.handleWaveformPanMove=r=>{if(!this.isPanningWaveform)return;const i=r.clientX-this.panStartX;this.waveformPan=this.panStartOffset+i,this.renderWaveform()},this.handleWaveformPanEnd=()=>{this.isPanningWaveform=!1,document.removeEventListener("mousemove",this.handleWaveformPanMove),document.removeEventListener("mouseup",this.handleWaveformPanEnd)},this.handleKeyDown=r=>{r.code==="Space"?(r.preventDefault(),this.handlePlay()):r.code==="KeyL"&&(r.preventDefault(),this.toggleLoop())}}async firstUpdated(){this.canvas=this.shadowRoot.querySelector("canvas"),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.setupCanvas()),this.audioBlob&&await this.loadAudio(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.cleanup(),this.removeEventListener("keydown",this.handleKeyDown)}setupCanvas(){if(!this.canvas||!this.ctx)return;const r=this.canvas.getBoundingClientRect(),i=window.devicePixelRatio||1;this.canvas.width=r.width*i,this.canvas.height=r.height*i,this.ctx.scale(i,i),this.canvas.style.width=`${r.width}px`,this.canvas.style.height=`${r.height}px`}async loadAudio(){if(this.audioBlob)try{this.audioContext=new AudioContext;const r=await this.audioBlob.arrayBuffer();this.audioBuffer=await this.audioContext.decodeAudioData(r),this.duration=this.audioBuffer.duration,this.endMarker=Math.min(3,this.duration),await this.extractWaveformData(),this.renderWaveform(),this.dispatchEvent(new CustomEvent("duration-loaded",{detail:{duration:this.duration},bubbles:!0,composed:!0}))}catch(r){console.error("Failed to load audio:",r)}}async extractWaveformData(){if(!this.audioBuffer)return;const r=this.audioBuffer.getChannelData(0),i=1e3,c=Math.floor(r.length/i),d=new Float32Array(i);for(let o=0;o<i;o++){const h=o*c;let u=0;for(let m=0;m<c;m++)u+=Math.abs(r[h+m]);d[o]=u/c}this.waveformData=d}renderWaveform(){if(!this.canvas||!this.ctx||!this.waveformData)return;const r=this.canvas.getBoundingClientRect(),i=r.width,c=r.height;this.ctx.fillStyle=getComputedStyle(this.canvas).getPropertyValue("--bg-surface")||"#1a1a2e",this.ctx.fillRect(0,0,i,c),this.ctx.save(),this.ctx.translate(this.waveformPan,0);const o=i/this.waveformData.length*this.waveformZoom,h=c/2;this.ctx.fillStyle="rgba(100, 200, 255, 0.8)";const u=Math.max(0,Math.floor(-this.waveformPan/o)),m=Math.min(this.waveformData.length,Math.ceil((i-this.waveformPan)/o));for(let w=u;w<m;w++){const _=this.waveformData[w]*h*.9,S=w*o;this.ctx.fillRect(S,h-_,o*.8,_*2)}if(this.isPlaying&&this.duration>0){const w=this.currentTime/this.duration*i*this.waveformZoom;this.ctx.strokeStyle="#ff6b6b",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(w,0),this.ctx.lineTo(w,c),this.ctx.stroke()}this.ctx.restore()}handlePlay(){this.isPlaying?this.pause():this.play()}async play(){if(!this.audioContext||!this.audioBuffer)return;this.audioContext.state==="suspended"&&await this.audioContext.resume(),this.stopAudioSource(),this.audioSource=this.audioContext.createBufferSource(),this.audioSource.buffer=this.audioBuffer,this.audioSource.connect(this.audioContext.destination);const r=this.leftClamp,c=this.rightClamp-r;this.audioSource.start(0,r,c),this.isPlaying=!0,this.playStartTime=this.audioContext.currentTime,this.playStartOffset=r,this.audioSource.onended=()=>{this.loopEnabled&&this.isPlaying?this.play():this.pause()},this.startAnimationLoop()}pause(){this.stopAudioSource(),this.isPlaying=!1,this.stopAnimationLoop(),this.renderWaveform()}stopAudioSource(){if(this.audioSource){try{this.audioSource.stop()}catch{}this.audioSource.disconnect(),this.audioSource=null}}startAnimationLoop(){const r=()=>{if(!this.isPlaying||!this.audioContext)return;const i=this.audioContext.currentTime-this.playStartTime;this.currentTime=this.playStartOffset+i,this.currentTime>=this.rightClamp&&(this.currentTime=this.rightClamp),this.renderWaveform(),this.animationFrameId=requestAnimationFrame(r)};this.animationFrameId=requestAnimationFrame(r)}stopAnimationLoop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}toggleLoop(){this.loopEnabled=!this.loopEnabled}handleMarkerMouseDown(r,i){r.preventDefault(),r.stopPropagation(),i==="left"?this.draggingMarker="start":i==="right"?this.draggingMarker="end":this.draggingMarker=i,document.addEventListener("mousemove",this.handleMarkerMouseMove),document.addEventListener("mouseup",this.handleMarkerMouseUp)}dispatchMarkerChange(){this.dispatchEvent(new CustomEvent("markers-changed",{detail:{start:this.leftClamp,end:this.rightClamp,duration:this.rightClamp-this.leftClamp},bubbles:!0,composed:!0}))}zoomWaveformIn(){this.waveformZoom=Math.min(5,this.waveformZoom*1.5),this.renderWaveform()}zoomWaveformOut(){this.waveformZoom=Math.max(1,this.waveformZoom/1.5),this.waveformZoom===1&&(this.waveformPan=0),this.renderWaveform()}autoCenterSegment(){if(!this.canvas||this.duration===0)return;const r=this.canvas.getBoundingClientRect(),i=this.leftClamp,c=this.rightClamp,d=(i+c)/2/this.duration*r.width*this.waveformZoom;this.waveformPan=r.width/2-d,this.renderWaveform()}formatTime(r){const i=Math.floor(r/60),c=(r%60).toFixed(2);return`${i}:${c.padStart(5,"0")}`}cleanup(){this.pause(),this.audioContext?.close(),this.audioContext=null,this.audioBuffer=null}render(){const r=this.duration>0?this.leftClamp/this.duration*100:0,i=this.duration>0?this.rightClamp/this.duration*100:100;return Kt`
      <div class="player-container">
        <div
          class="waveform-wrapper"
          style="--left-clamp-pos: ${r}%; --right-clamp-pos: ${i}%;"
          @mousedown=${this.handleWaveformPanStart}
        >
          <canvas style="cursor: ${this.isPanningWaveform?"grabbing":"grab"};"></canvas>

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
        </div>

        <div class="controls">
          <div class="playback-controls">
            <button class="control-btn" @click=${this.handlePlay}>
              ${this.isPlaying?Jt(Zo):Jt(pa)}
              <span>${this.isPlaying?"Pause":"Play"}</span>
            </button>

            <button
              class="control-btn ${this.loopEnabled?"active":""}"
              @click=${this.toggleLoop}
            >
              ${Jt(Ho)}
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
            ${this.formatTime(this.leftClamp)} -
            ${this.formatTime(this.rightClamp)}
            <span class="duration-label">
              (${(this.rightClamp-this.leftClamp).toFixed(2)}s)
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
  `;oe([ye({type:Object})],ee.prototype,"audioBlob",void 0);oe([ye({type:Number})],ee.prototype,"startMarker",void 0);oe([ye({type:Number})],ee.prototype,"endMarker",void 0);oe([ye({type:Number})],ee.prototype,"leftClamp",void 0);oe([ye({type:Number})],ee.prototype,"rightClamp",void 0);oe([Ft()],ee.prototype,"waveformData",void 0);oe([Ft()],ee.prototype,"isPlaying",void 0);oe([Ft()],ee.prototype,"loopEnabled",void 0);oe([Ft()],ee.prototype,"currentTime",void 0);oe([Ft()],ee.prototype,"duration",void 0);oe([Ft()],ee.prototype,"draggingMarker",void 0);oe([Ft()],ee.prototype,"waveformZoom",void 0);oe([Ft()],ee.prototype,"waveformPan",void 0);oe([Ft()],ee.prototype,"isPanningWaveform",void 0);oe([Ft()],ee.prototype,"panStartX",void 0);oe([Ft()],ee.prototype,"panStartOffset",void 0);ee=oe([fn("audio-waveform-player")],ee);var pe=function($,r,i,c){var d=arguments.length,o=d<3?r:c===null?c=Object.getOwnPropertyDescriptor(r,i):c,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,c);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(d<3?h(o):d>3?h(r,i,o):h(r,i))||o);return d>3&&o&&Object.defineProperty(r,i,o),o};let ce=class extends Se{constructor(){super(...arguments),this.text="",this.fontSize=24,this.leftClamp=0,this.rightClamp=0,this.offsetX=0,this.isDragging=!1,this.dragStartX=0,this.dragStartOffset=0,this.zoomLevel=1,this.draggingClamp=null,this.clampDragStartX=0,this.clampDragStartValue=0,this.isFocused=!1,this.handleFocus=()=>{this.isFocused=!0},this.handleBlur=()=>{this.isFocused=!1},this.handleMouseDown=r=>{this.isDragging=!0,this.dragStartX=r.clientX,this.dragStartOffset=this.offsetX,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)},this.handleMouseMove=r=>{if(!this.isDragging)return;const i=r.clientX-this.dragStartX;this.offsetX=this.dragStartOffset+i,this.requestUpdate()},this.handleMouseUp=()=>{this.isDragging=!1,document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)},this.handleClampMouseDown=(r,i)=>{r.preventDefault(),r.stopPropagation(),this.draggingClamp=i,this.clampDragStartX=r.clientX,this.clampDragStartValue=i==="left"?this.leftClamp:this.rightClamp,document.addEventListener("mousemove",this.handleClampMouseMove),document.addEventListener("mouseup",this.handleClampMouseUp)},this.handleClampMouseMove=r=>{if(!this.draggingClamp||!this.text)return;const i=r.clientX-this.clampDragStartX,c=this.fontSize*this.zoomLevel/2,d=Math.round(i/c);let o=this.clampDragStartValue+d;o=Math.max(0,Math.min(this.text.length,o)),this.draggingClamp==="left"?this.leftClamp=Math.min(o,this.rightClamp-1):this.rightClamp=Math.max(o,this.leftClamp+1),this.dispatchClampChangeEvent(),this.requestUpdate()},this.handleClampMouseUp=()=>{this.draggingClamp=null,document.removeEventListener("mousemove",this.handleClampMouseMove),document.removeEventListener("mouseup",this.handleClampMouseUp)},this.handleKeyDown=r=>{this.isFocused&&((r.metaKey||r.ctrlKey)&&(r.code==="Equal"||r.key==="+"||r.key==="=")?(r.preventDefault(),r.stopPropagation(),this.zoomIn()):(r.metaKey||r.ctrlKey)&&(r.code==="Minus"||r.key==="-")?(r.preventDefault(),r.stopPropagation(),this.zoomOut()):(r.metaKey||r.ctrlKey)&&(r.code==="Digit0"||r.key==="0")&&(r.preventDefault(),r.stopPropagation(),this.resetView()))}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("focus",this.handleFocus),this.addEventListener("blur",this.handleBlur),this.tabIndex=0}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("focus",this.handleFocus),this.removeEventListener("blur",this.handleBlur)}dispatchClampChangeEvent(){this.dispatchEvent(new CustomEvent("text-clamps-changed",{detail:{leftClamp:this.leftClamp,rightClamp:this.rightClamp,text:this.text.substring(this.leftClamp,this.rightClamp)},bubbles:!0,composed:!0}))}zoomIn(){const r=this.zoomLevel;if(this.zoomLevel=Math.min(3,this.zoomLevel*1.2),this.leftClamp>0){const i=this.fontSize*r/2,c=this.leftClamp*i,d=this.fontSize*this.zoomLevel/2,o=this.leftClamp*d;this.offsetX+=c-o}this.requestUpdate()}zoomOut(){const r=this.zoomLevel;if(this.zoomLevel=Math.max(.5,this.zoomLevel/1.2),this.leftClamp>0){const i=this.fontSize*r/2,c=this.leftClamp*i,d=this.fontSize*this.zoomLevel/2,o=this.leftClamp*d;this.offsetX+=c-o}this.requestUpdate()}resetView(){this.offsetX=0,this.zoomLevel=1,this.requestUpdate()}getClearSegmentText(){if(!this.text)return{text:"",startChar:0,endChar:0};const r=this.text.length,i=.3,c=this.shadowRoot?.querySelector(".text-viewport")?.clientWidth||800,d=this.fontSize*this.zoomLevel/2,o=Math.floor(c/d),h=Math.floor(o*i),u=Math.floor(-this.offsetX/d),m=Math.max(0,u+Math.floor((o-h)/2)),w=Math.min(r,m+h);return{text:this.text.substring(m,w),startChar:m,endChar:w}}renderStyledText(){if(!this.text)return"";const r=[];if(this.leftClamp>0){const i=this.text.substring(0,this.leftClamp);r.push(Kt`<span class="protected">${i}</span>`)}if(this.rightClamp>this.leftClamp){const i=this.text.substring(this.leftClamp,this.rightClamp);r.push(Kt`<span class="current">${i}</span>`)}if(this.rightClamp<this.text.length){const i=this.text.substring(this.rightClamp);r.push(Kt`<span class="upcoming">${i}</span>`)}return r}render(){const r=this.fontSize*this.zoomLevel,i=this.fontSize*this.zoomLevel/2,c=this.leftClamp*i+this.offsetX,d=this.rightClamp*i+this.offsetX;return Kt`
      <div class="container">
        <div
          class="text-viewport ${this.isDragging?"dragging":""}"
          @mousedown=${this.handleMouseDown}
          style="--left-clamp-text-pos: ${c}px; --right-clamp-text-pos: ${d}px;"
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
  `;pe([ye({type:String})],ce.prototype,"text",void 0);pe([ye({type:Number})],ce.prototype,"fontSize",void 0);pe([ye({type:Number})],ce.prototype,"leftClamp",void 0);pe([ye({type:Number})],ce.prototype,"rightClamp",void 0);pe([Ft()],ce.prototype,"offsetX",void 0);pe([Ft()],ce.prototype,"isDragging",void 0);pe([Ft()],ce.prototype,"dragStartX",void 0);pe([Ft()],ce.prototype,"dragStartOffset",void 0);pe([Ft()],ce.prototype,"zoomLevel",void 0);pe([Ft()],ce.prototype,"draggingClamp",void 0);pe([Ft()],ce.prototype,"clampDragStartX",void 0);pe([Ft()],ce.prototype,"clampDragStartValue",void 0);pe([Ft()],ce.prototype,"isFocused",void 0);ce=pe([fn("smoked-glass-text")],ce);const Xi=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ar=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var xe=function($,r,i,c){var d=arguments.length,o=d<3?r:c===null?c=Object.getOwnPropertyDescriptor(r,i):c,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,c);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(d<3?h(o):d>3?h(r,i,o):h(r,i))||o);return d>3&&o&&Object.defineProperty(r,i,o),o};let fe=class extends Se{constructor(){super(...arguments),this.audioBlob=null,this.existingAnnotation=null,this.fullTranscript="",this.transcriptEntered=!1,this.leftClamp=0,this.rightClamp=3,this.totalDuration=0,this.annotations=[],this.isComplete=!1,this.textLeftClamp=0,this.textRightClamp=0}willUpdate(r){super.willUpdate(r),r.has("existingAnnotation")&&this.existingAnnotation&&this.loadExistingAnnotation()}loadExistingAnnotation(){if(this.existingAnnotation)if(this.fullTranscript=this.existingAnnotation.fullText||"",this.existingAnnotation.segments&&this.existingAnnotation.segments.length>0){this.annotations=this.existingAnnotation.segments.map(c=>({id:c.id,audioStart:c.start,audioEnd:c.end,text:c.text,textStart:0,textEnd:c.text.length,createdAt:Date.now()})),this.transcriptEntered=!0;const r=this.annotations[this.annotations.length-1];this.leftClamp=r.audioEnd,this.rightClamp=Math.min(this.leftClamp+3,this.totalDuration);const i=this.annotations.map(c=>c.text).join(" ");this.textLeftClamp=i.length,this.textRightClamp=Math.min(this.textLeftClamp+100,this.fullTranscript.length)}else this.fullTranscript&&(this.transcriptEntered=!1)}get currentSegmentNumber(){return this.annotations.length+1}get currentSegmentText(){return this.fullTranscript.substring(this.textLeftClamp,this.textRightClamp)}handleMarkersChanged(r){this.rightClamp=r.detail.end,this.leftClamp=r.detail.start}handleDurationLoaded(r){this.totalDuration=r.detail.duration}handleTranscriptInput(r){const i=r.target;this.fullTranscript=i.value}beginAnnotation(){if(!this.fullTranscript.trim()){alert("Please enter the full transcript before beginning annotation.");return}this.transcriptEntered=!0,this.leftClamp=0,this.rightClamp=Math.min(3,this.totalDuration),this.textLeftClamp=0;const r=this.fullTranscript.length/this.totalDuration;this.textRightClamp=Math.floor(r*this.rightClamp),setTimeout(()=>{const i=this.shadowRoot?.querySelector("audio-waveform-player");i&&(i.leftClamp=this.leftClamp,i.rightClamp=this.rightClamp,i.loopEnabled=!0)},100)}confirmSegment(){if(!this.currentSegmentText.trim()){alert("Please adjust the segment boundaries to include text.");return}const r={id:crypto.randomUUID(),audioStart:this.leftClamp,audioEnd:this.rightClamp,text:this.currentSegmentText,textStart:this.textLeftClamp,textEnd:this.textRightClamp,createdAt:Date.now()};this.annotations=[...this.annotations,r],this.advanceToNextSegment(),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{annotation:r,allAnnotations:this.annotations},bubbles:!0,composed:!0}))}advanceToNextSegment(){if(this.rightClamp>=this.totalDuration-.1){this.isComplete=!0;return}this.leftClamp=this.rightClamp,this.textLeftClamp=this.textRightClamp;const r=3;this.rightClamp=Math.min(this.leftClamp+r,this.totalDuration);const i=this.fullTranscript.length/this.totalDuration,c=Math.floor(i*this.rightClamp);this.textRightClamp=Math.min(c,this.fullTranscript.length);const d=this.shadowRoot?.querySelector("audio-waveform-player");d&&(d.leftClamp=this.leftClamp,d.rightClamp=this.rightClamp,d.loopEnabled=!0,d.autoCenterSegment&&d.autoCenterSegment());const o=this.shadowRoot?.querySelector("smoked-glass-text");if(o){o.leftClamp=this.textLeftClamp,o.rightClamp=this.textRightClamp;const h=o.fontSize*o.zoomLevel/2,u=this.textLeftClamp*h,m=Math.min(20,this.textLeftClamp);o.offsetX=-(u-m*h)}}dispatchCompletionEvent(){this.dispatchEvent(new CustomEvent("annotation-complete",{detail:{annotations:this.annotations,totalSegments:this.annotations.length,totalDuration:this.totalDuration,fullText:this.fullTranscript},bubbles:!0,composed:!0}))}saveProgress(){const r=new CustomEvent("progress-saved",{detail:{annotations:this.annotations},bubbles:!0,composed:!0});this.dispatchEvent(r),alert(`Progress saved! ${this.annotations.length} segments annotated.`)}render(){return this.isComplete?Kt`
        <div class="workflow-container">
          <div class="header">
            <h1 class="title">${Jt(ar)} Annotation Complete!</h1>
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
              ${Jt(ar)}
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
              ${Jt(Vo)}
              <span>Save Progress</span>
            </button>

            ${this.isComplete?Kt`
                  <button
                    class="action-btn"
                    @click=${this.dispatchCompletionEvent}
                    style="background: linear-gradient(135deg, #39ff14 0%, #00cc88 100%); color: #0a0a0f;"
                  >
                    ${Jt(ar)}
                    <span>Finish & Close</span>
                  </button>
                `:Kt`
                  <button
                    class="action-btn"
                    @click=${this.confirmSegment}
                    ?disabled=${!this.currentSegmentText.trim()}
                  >
                    <span>Confirm Segment</span>
                    ${Jt(Xi)}
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
              ${Jt(Xi)}
            </button>
          </div>
        </div>
      `}};fe.styles=dn`
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
  `;xe([ye({type:Object})],fe.prototype,"audioBlob",void 0);xe([ye({type:Object})],fe.prototype,"existingAnnotation",void 0);xe([Ft()],fe.prototype,"fullTranscript",void 0);xe([Ft()],fe.prototype,"transcriptEntered",void 0);xe([Ft()],fe.prototype,"leftClamp",void 0);xe([Ft()],fe.prototype,"rightClamp",void 0);xe([Ft()],fe.prototype,"totalDuration",void 0);xe([Ft()],fe.prototype,"annotations",void 0);xe([Ft()],fe.prototype,"isComplete",void 0);xe([Ft()],fe.prototype,"textLeftClamp",void 0);xe([Ft()],fe.prototype,"textRightClamp",void 0);fe=xe([fn("annotation-workflow")],fe);const Xo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Jr=function($,r,i,c){var d=arguments.length,o=d<3?r:c===null?c=Object.getOwnPropertyDescriptor(r,i):c,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,c);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(d<3?h(o):d>3?h(r,i,o):h(r,i))||o);return d>3&&o&&Object.defineProperty(r,i,o),o};let Pn=class extends Se{constructor(){super(...arguments),this.recording=null,this.existingAnnotation=null}async connectedCallback(){super.connectedCallback(),this.recording?.isAnnotated&&(this.existingAnnotation=await ur(this.recording.id)||null)}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async handleStartOver(){!this.recording||!confirm("Are you sure you want to start over? This will delete all current annotations.")||(await Eo(this.recording.id),this.existingAnnotation=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("annotation-reset",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})))}async handleAnnotationComplete(r){if(!this.recording)return;const{annotations:i,fullText:c}=r.detail,d={recordingId:this.recording.id,fullText:c,segments:i,completedAt:Date.now(),updatedAt:Date.now()};await qi(d),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})),this.handleClose()}async handleAnnotationSaved(r){if(!this.recording)return;const{allAnnotations:i}=r.detail,c=await ur(this.recording.id);c&&(c.segments=i,c.updatedAt=Date.now(),await qi(c))}render(){return this.recording?Kt`
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
                  ${Jt(Yo)}
                  <span>Start Over</span>
                </button>
              `:null}

          <button
            class="header-btn"
            @click=${this.handleClose}
            title="Close without saving"
          >
            ${Jt(Xo)}
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
        ></annotation-workflow>
      </div>
    `:Kt`<div>No recording selected</div>`}};Pn.styles=dn`
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
  `;Jr([ye({type:Object})],Pn.prototype,"recording",void 0);Jr([Ft()],Pn.prototype,"existingAnnotation",void 0);Pn=Jr([fn("annotation-modal")],Pn);const Go=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Yi=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var pn=function($,r,i,c){var d=arguments.length,o=d<3?r:c===null?c=Object.getOwnPropertyDescriptor(r,i):c,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate($,r,i,c);else for(var u=$.length-1;u>=0;u--)(h=$[u])&&(o=(d<3?h(o):d>3?h(r,i,o):h(r,i))||o);return d>3&&o&&Object.defineProperty(r,i,o),o};let Ue=class extends Se{constructor(){super(...arguments),this.recordings=[],this.isRecording=!1,this.recordingDuration=0,this.selectedRecording=null,this.isModalOpen=!1,this.microphoneService=null,this.mediaRecorderService=null,this.recordingTimer=null}async connectedCallback(){super.connectedCallback(),await this.loadRecordings()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async loadRecordings(){this.recordings=await ia()}async startRecording(){try{this.microphoneService=new mo;const r=await this.microphoneService.requestPermission();this.mediaRecorderService=new go,await this.mediaRecorderService.initialize(r),this.mediaRecorderService.start(),this.isRecording=!0,this.recordingDuration=0,this.recordingTimer=window.setInterval(()=>{this.recordingDuration+=.1,this.requestUpdate()},100)}catch(r){console.error("Failed to start recording:",r),alert("Failed to start recording. Please check microphone permissions."),this.cleanup()}}async stopRecording(){if(this.mediaRecorderService)try{const r=await this.mediaRecorderService.stop(),i=this.recordingDuration,d=`Untitled ${await Oo()}`;await ra({title:d,audioBlob:r,duration:i,source:"recording"}),await this.loadRecordings()}catch(r){console.error("Failed to save recording:",r),alert("Failed to save recording.")}finally{this.cleanup()}}cleanup(){this.isRecording=!1,this.recordingDuration=0,this.recordingTimer&&(clearInterval(this.recordingTimer),this.recordingTimer=null),this.microphoneService?.release(),this.mediaRecorderService=null,this.microphoneService=null}async handleUpload(){const r=await zo();if(!(!r||r.length===0))try{await Ro(r),await this.loadRecordings()}catch(i){console.error("Failed to upload files:",i),alert("Failed to upload files.")}}async handleTitleChange(r,i){await So(r.id,{title:i}),await this.loadRecordings()}async handlePlay(r){new Audio(URL.createObjectURL(r.audioBlob)).play()}handleAnnotate(r){this.selectedRecording=r,this.isModalOpen=!0}async handleExport(r){try{await jo(r.id)}catch(i){console.error("Failed to export recording:",i),alert(i instanceof Error?i.message:"Failed to export recording.")}}async handleDelete(r){confirm(`Are you sure you want to delete "${r.title}"? This cannot be undone.`)&&(await Ao(r.id),await this.loadRecordings())}async handleExportAll(){try{await Fo()}catch(r){console.error("Failed to export all recordings:",r),alert(r instanceof Error?r.message:"Failed to export recordings.")}}handleModalClose(){this.isModalOpen=!1,this.selectedRecording=null,this.loadRecordings()}formatDuration(r){const i=Math.floor(r/60),c=Math.floor(r%60);return`${i}:${c.toString().padStart(2,"0")}`}render(){return Kt`
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
              ${Jt(this.isRecording?Jo:Go)}
              <span>${this.isRecording?"Stop Recording":"Record Audio"}</span>
            </button>

            ${this.isRecording?Kt`<div class="duration">${this.formatDuration(this.recordingDuration)}</div>`:Kt`
                  <button class="upload-btn" @click=${this.handleUpload}>
                    ${Jt(Qo)}
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
                  ${Jt(Yi)}
                  <span>Export All</span>
                </button>
              `:null}
        </div>

        <div class="recordings-table">
          ${this.recordings.length===0?Kt`
                <div class="empty-state">
                  <div class="empty-icon">${Jt(ns)}</div>
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
                            ${r.isAnnotated?Kt`${Jt(ar)}`:""}
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
                                ${Jt(pa)}
                                <span>Play</span>
                              </button>

                              <button
                                class="action-btn"
                                @click=${()=>this.handleAnnotate(r)}
                                title="Annotate audio"
                              >
                                ${Jt(ts)}
                                <span>Annotate</span>
                              </button>

                              ${r.isAnnotated?Kt`
                                    <button
                                      class="action-btn"
                                      @click=${()=>this.handleExport(r)}
                                      title="Export annotation"
                                    >
                                      ${Jt(Yi)}
                                      <span>Export</span>
                                    </button>
                                  `:null}

                              <button
                                class="action-btn danger"
                                @click=${()=>this.handleDelete(r)}
                                title="Delete recording"
                              >
                                ${Jt(es)}
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
  `;pn([Ft()],Ue.prototype,"recordings",void 0);pn([Ft()],Ue.prototype,"isRecording",void 0);pn([Ft()],Ue.prototype,"recordingDuration",void 0);pn([Ft()],Ue.prototype,"selectedRecording",void 0);pn([Ft()],Ue.prototype,"isModalOpen",void 0);Ue=pn([fn("minimal-recorder")],Ue);const ma=$=>{document.body.setAttribute("data-theme",$)};ma(An.getCurrentTheme());An.subscribe($=>{ma($.currentTheme)});

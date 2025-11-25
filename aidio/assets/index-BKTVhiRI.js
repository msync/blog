(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();const rr=globalThis,Hr=rr.ShadowRoot&&(rr.ShadyCSS===void 0||rr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zr=Symbol(),Ti=new WeakMap;let Yi=class{constructor(i,r,c){if(this._$cssResult$=!0,c!==Zr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=r}get styleSheet(){let i=this.o;const r=this.t;if(Hr&&i===void 0){const c=r!==void 0&&r.length===1;c&&(i=Ti.get(r)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),c&&Ti.set(r,i))}return i}toString(){return this.cssText}};const Na=f=>new Yi(typeof f=="string"?f:f+"",void 0,Zr),hn=(f,...i)=>{const r=f.length===1?f[0]:i.reduce(((c,s,l)=>c+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+f[l+1]),f[0]);return new Yi(r,f,Zr)},Ua=(f,i)=>{if(Hr)f.adoptedStyleSheets=i.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(const r of i){const c=document.createElement("style"),s=rr.litNonce;s!==void 0&&c.setAttribute("nonce",s),c.textContent=r.cssText,f.appendChild(c)}},$i=Hr?f=>f:f=>f instanceof CSSStyleSheet?(i=>{let r="";for(const c of i.cssRules)r+=c.cssText;return Na(r)})(f):f;const{is:La,defineProperty:Ka,getOwnPropertyDescriptor:qa,getOwnPropertyNames:Wa,getOwnPropertySymbols:Ha,getPrototypeOf:Za}=Object,cr=globalThis,Ii=cr.trustedTypes,Va=Ii?Ii.emptyScript:"",Ya=cr.reactiveElementPolyfillSupport,Cn=(f,i)=>f,or={toAttribute(f,i){switch(i){case Boolean:f=f?Va:null;break;case Object:case Array:f=f==null?f:JSON.stringify(f)}return f},fromAttribute(f,i){let r=f;switch(i){case Boolean:r=f!==null;break;case Number:r=f===null?null:Number(f);break;case Object:case Array:try{r=JSON.parse(f)}catch{r=null}}return r}},Vr=(f,i)=>!La(f,i),Bi={attribute:!0,type:String,converter:or,reflect:!1,useDefault:!1,hasChanged:Vr};Symbol.metadata??=Symbol("metadata"),cr.litPropertyMetadata??=new WeakMap;let un=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,r=Bi){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(i,r),!r.noAccessor){const c=Symbol(),s=this.getPropertyDescriptor(i,c,r);s!==void 0&&Ka(this.prototype,i,s)}}static getPropertyDescriptor(i,r,c){const{get:s,set:l}=qa(this.prototype,i)??{get(){return this[r]},set(d){this[r]=d}};return{get:s,set(d){const h=s?.call(this);l?.call(this,d),this.requestUpdate(i,h,c)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Bi}static _$Ei(){if(this.hasOwnProperty(Cn("elementProperties")))return;const i=Za(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Cn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Cn("properties"))){const r=this.properties,c=[...Wa(r),...Ha(r)];for(const s of c)this.createProperty(s,r[s])}const i=this[Symbol.metadata];if(i!==null){const r=litPropertyMetadata.get(i);if(r!==void 0)for(const[c,s]of r)this.elementProperties.set(c,s)}this._$Eh=new Map;for(const[r,c]of this.elementProperties){const s=this._$Eu(r,c);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const r=[];if(Array.isArray(i)){const c=new Set(i.flat(1/0).reverse());for(const s of c)r.unshift($i(s))}else i!==void 0&&r.push($i(i));return r}static _$Eu(i,r){const c=r.attribute;return c===!1?void 0:typeof c=="string"?c:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((i=>this.enableUpdating=i)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((i=>i(this)))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){const i=new Map,r=this.constructor.elementProperties;for(const c of r.keys())this.hasOwnProperty(c)&&(i.set(c,this[c]),delete this[c]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ua(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((i=>i.hostConnected?.()))}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach((i=>i.hostDisconnected?.()))}attributeChangedCallback(i,r,c){this._$AK(i,c)}_$ET(i,r){const c=this.constructor.elementProperties.get(i),s=this.constructor._$Eu(i,c);if(s!==void 0&&c.reflect===!0){const l=(c.converter?.toAttribute!==void 0?c.converter:or).toAttribute(r,c.type);this._$Em=i,l==null?this.removeAttribute(s):this.setAttribute(s,l),this._$Em=null}}_$AK(i,r){const c=this.constructor,s=c._$Eh.get(i);if(s!==void 0&&this._$Em!==s){const l=c.getPropertyOptions(s),d=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:or;this._$Em=s;const h=d.fromAttribute(r,l.type);this[s]=h??this._$Ej?.get(s)??h,this._$Em=null}}requestUpdate(i,r,c){if(i!==void 0){const s=this.constructor,l=this[i];if(c??=s.getPropertyOptions(i),!((c.hasChanged??Vr)(l,r)||c.useDefault&&c.reflect&&l===this._$Ej?.get(i)&&!this.hasAttribute(s._$Eu(i,c))))return;this.C(i,r,c)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,r,{useDefault:c,reflect:s,wrapped:l},d){c&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,d??r??this[i]),l!==!0||d!==void 0)||(this._$AL.has(i)||(this.hasUpdated||c||(r=void 0),this._$AL.set(i,r)),s===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,l]of this._$Ep)this[s]=l;this._$Ep=void 0}const c=this.constructor.elementProperties;if(c.size>0)for(const[s,l]of c){const{wrapped:d}=l,h=this[s];d!==!0||this._$AL.has(s)||h===void 0||this.C(s,void 0,l,h)}}let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),this._$EO?.forEach((c=>c.hostUpdate?.())),this.update(r)):this._$EM()}catch(c){throw i=!1,this._$EM(),c}i&&this._$AE(r)}willUpdate(i){}_$AE(i){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach((r=>this._$ET(r,this[r]))),this._$EM()}updated(i){}firstUpdated(i){}};un.elementStyles=[],un.shadowRootOptions={mode:"open"},un[Cn("elementProperties")]=new Map,un[Cn("finalized")]=new Map,Ya?.({ReactiveElement:un}),(cr.reactiveElementVersions??=[]).push("2.1.1");const Yr=globalThis,sr=Yr.trustedTypes,zi=sr?sr.createPolicy("lit-html",{createHTML:f=>f}):void 0,Gi="$lit$",Fe=`lit$${Math.random().toFixed(9).slice(2)}$`,Xi="?"+Fe,Ga=`<${Xi}>`,Ge=document,Pn=()=>Ge.createComment(""),On=f=>f===null||typeof f!="object"&&typeof f!="function",Gr=Array.isArray,Xa=f=>Gr(f)||typeof f?.[Symbol.iterator]=="function",Ur=`[ 	
\f\r]`,Sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Di=/-->/g,ji=/>/g,Ve=RegExp(`>|${Ur}(?:([^\\s"'>=/]+)(${Ur}*=${Ur}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mi=/'/g,Fi=/"/g,Ji=/^(?:script|style|textarea|title)$/i,Ja=f=>(i,...r)=>({_$litType$:f,strings:i,values:r}),Jt=Ja(1),Xe=Symbol.for("lit-noChange"),Qt=Symbol.for("lit-nothing"),Ni=new WeakMap,Ye=Ge.createTreeWalker(Ge,129);function Qi(f,i){if(!Gr(f)||!f.hasOwnProperty("raw"))throw Error("invalid template strings array");return zi!==void 0?zi.createHTML(i):i}const Qa=(f,i)=>{const r=f.length-1,c=[];let s,l=i===2?"<svg>":i===3?"<math>":"",d=Sn;for(let h=0;h<r;h++){const g=f[h];let b,S,x=-1,E=0;for(;E<g.length&&(d.lastIndex=E,S=d.exec(g),S!==null);)E=d.lastIndex,d===Sn?S[1]==="!--"?d=Di:S[1]!==void 0?d=ji:S[2]!==void 0?(Ji.test(S[2])&&(s=RegExp("</"+S[2],"g")),d=Ve):S[3]!==void 0&&(d=Ve):d===Ve?S[0]===">"?(d=s??Sn,x=-1):S[1]===void 0?x=-2:(x=d.lastIndex-S[2].length,b=S[1],d=S[3]===void 0?Ve:S[3]==='"'?Fi:Mi):d===Fi||d===Mi?d=Ve:d===Di||d===ji?d=Sn:(d=Ve,s=void 0);const v=d===Ve&&f[h+1].startsWith("/>")?" ":"";l+=d===Sn?g+Ga:x>=0?(c.push(b),g.slice(0,x)+Gi+g.slice(x)+Fe+v):g+Fe+(x===-2?h:v)}return[Qi(f,l+(f[r]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),c]};class Rn{constructor({strings:i,_$litType$:r},c){let s;this.parts=[];let l=0,d=0;const h=i.length-1,g=this.parts,[b,S]=Qa(i,r);if(this.el=Rn.createElement(b,c),Ye.currentNode=this.el.content,r===2||r===3){const x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(s=Ye.nextNode())!==null&&g.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const x of s.getAttributeNames())if(x.endsWith(Gi)){const E=S[d++],v=s.getAttribute(x).split(Fe),C=/([.?@])?(.*)/.exec(E);g.push({type:1,index:l,name:C[2],strings:v,ctor:C[1]==="."?eo:C[1]==="?"?no:C[1]==="@"?ro:hr}),s.removeAttribute(x)}else x.startsWith(Fe)&&(g.push({type:6,index:l}),s.removeAttribute(x));if(Ji.test(s.tagName)){const x=s.textContent.split(Fe),E=x.length-1;if(E>0){s.textContent=sr?sr.emptyScript:"";for(let v=0;v<E;v++)s.append(x[v],Pn()),Ye.nextNode(),g.push({type:2,index:++l});s.append(x[E],Pn())}}}else if(s.nodeType===8)if(s.data===Xi)g.push({type:2,index:l});else{let x=-1;for(;(x=s.data.indexOf(Fe,x+1))!==-1;)g.push({type:7,index:l}),x+=Fe.length-1}l++}}static createElement(i,r){const c=Ge.createElement("template");return c.innerHTML=i,c}}function cn(f,i,r=f,c){if(i===Xe)return i;let s=c!==void 0?r._$Co?.[c]:r._$Cl;const l=On(i)?void 0:i._$litDirective$;return s?.constructor!==l&&(s?._$AO?.(!1),l===void 0?s=void 0:(s=new l(f),s._$AT(f,r,c)),c!==void 0?(r._$Co??=[])[c]=s:r._$Cl=s),s!==void 0&&(i=cn(f,s._$AS(f,i.values),s,c)),i}class to{constructor(i,r){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:r},parts:c}=this._$AD,s=(i?.creationScope??Ge).importNode(r,!0);Ye.currentNode=s;let l=Ye.nextNode(),d=0,h=0,g=c[0];for(;g!==void 0;){if(d===g.index){let b;g.type===2?b=new $n(l,l.nextSibling,this,i):g.type===1?b=new g.ctor(l,g.name,g.strings,this,i):g.type===6&&(b=new io(l,this,i)),this._$AV.push(b),g=c[++h]}d!==g?.index&&(l=Ye.nextNode(),d++)}return Ye.currentNode=Ge,s}p(i){let r=0;for(const c of this._$AV)c!==void 0&&(c.strings!==void 0?(c._$AI(i,c,r),r+=c.strings.length-2):c._$AI(i[r])),r++}}class $n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,r,c,s){this.type=2,this._$AH=Qt,this._$AN=void 0,this._$AA=i,this._$AB=r,this._$AM=c,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&i?.nodeType===11&&(i=r.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,r=this){i=cn(this,i,r),On(i)?i===Qt||i==null||i===""?(this._$AH!==Qt&&this._$AR(),this._$AH=Qt):i!==this._$AH&&i!==Xe&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Xa(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==Qt&&On(this._$AH)?this._$AA.nextSibling.data=i:this.T(Ge.createTextNode(i)),this._$AH=i}$(i){const{values:r,_$litType$:c}=i,s=typeof c=="number"?this._$AC(i):(c.el===void 0&&(c.el=Rn.createElement(Qi(c.h,c.h[0]),this.options)),c);if(this._$AH?._$AD===s)this._$AH.p(r);else{const l=new to(s,this),d=l.u(this.options);l.p(r),this.T(d),this._$AH=l}}_$AC(i){let r=Ni.get(i.strings);return r===void 0&&Ni.set(i.strings,r=new Rn(i)),r}k(i){Gr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let c,s=0;for(const l of i)s===r.length?r.push(c=new $n(this.O(Pn()),this.O(Pn()),this,this.options)):c=r[s],c._$AI(l),s++;s<r.length&&(this._$AR(c&&c._$AB.nextSibling,s),r.length=s)}_$AR(i=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);i!==this._$AB;){const c=i.nextSibling;i.remove(),i=c}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}}class hr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,r,c,s,l){this.type=1,this._$AH=Qt,this._$AN=void 0,this.element=i,this.name=r,this._$AM=s,this.options=l,c.length>2||c[0]!==""||c[1]!==""?(this._$AH=Array(c.length-1).fill(new String),this.strings=c):this._$AH=Qt}_$AI(i,r=this,c,s){const l=this.strings;let d=!1;if(l===void 0)i=cn(this,i,r,0),d=!On(i)||i!==this._$AH&&i!==Xe,d&&(this._$AH=i);else{const h=i;let g,b;for(i=l[0],g=0;g<l.length-1;g++)b=cn(this,h[c+g],r,g),b===Xe&&(b=this._$AH[g]),d||=!On(b)||b!==this._$AH[g],b===Qt?i=Qt:i!==Qt&&(i+=(b??"")+l[g+1]),this._$AH[g]=b}d&&!s&&this.j(i)}j(i){i===Qt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}}class eo extends hr{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===Qt?void 0:i}}class no extends hr{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==Qt)}}class ro extends hr{constructor(i,r,c,s,l){super(i,r,c,s,l),this.type=5}_$AI(i,r=this){if((i=cn(this,i,r,0)??Qt)===Xe)return;const c=this._$AH,s=i===Qt&&c!==Qt||i.capture!==c.capture||i.once!==c.once||i.passive!==c.passive,l=i!==Qt&&(c===Qt||s);s&&this.element.removeEventListener(this.name,this,c),l&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}}class io{constructor(i,r,c){this.element=i,this.type=6,this._$AN=void 0,this._$AM=r,this.options=c}get _$AU(){return this._$AM._$AU}_$AI(i){cn(this,i)}}const ao=Yr.litHtmlPolyfillSupport;ao?.(Rn,$n),(Yr.litHtmlVersions??=[]).push("3.3.1");const oo=(f,i,r)=>{const c=r?.renderBefore??i;let s=c._$litPart$;if(s===void 0){const l=r?.renderBefore??null;c._$litPart$=s=new $n(i.insertBefore(Pn(),l),l,void 0,r??{})}return s._$AI(f),s};const Xr=globalThis;let ke=class extends un{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=oo(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Xe}};ke._$litElement$=!0,ke.finalized=!0,Xr.litElementHydrateSupport?.({LitElement:ke});const so=Xr.litElementPolyfillSupport;so?.({LitElement:ke});(Xr.litElementVersions??=[]).push("4.2.1");const dn=f=>(i,r)=>{r!==void 0?r.addInitializer((()=>{customElements.define(f,i)})):customElements.define(f,i)};const lo={attribute:!0,type:String,converter:or,reflect:!1,hasChanged:Vr},uo=(f=lo,i,r)=>{const{kind:c,metadata:s}=r;let l=globalThis.litPropertyMetadata.get(s);if(l===void 0&&globalThis.litPropertyMetadata.set(s,l=new Map),c==="setter"&&((f=Object.create(f)).wrapped=!0),l.set(r.name,f),c==="accessor"){const{name:d}=r;return{set(h){const g=i.get.call(this);i.set.call(this,h),this.requestUpdate(d,g,f)},init(h){return h!==void 0&&this.C(d,void 0,f,h),h}}}if(c==="setter"){const{name:d}=r;return function(h){const g=this[d];i.call(this,h),this.requestUpdate(d,g,f)}}throw Error("Unsupported decorator location: "+c)};function fe(f){return(i,r)=>typeof r=="object"?uo(f,i,r):((c,s,l)=>{const d=s.hasOwnProperty(l);return s.constructor.createProperty(l,c),d?Object.getOwnPropertyDescriptor(s,l):void 0})(f,i,r)}function Ht(f){return fe({...f,state:!0,attribute:!1})}const co=(f,i,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(f,i,r),r);function ta(f,i){return(r,c,s)=>{const l=d=>d.renderRoot?.querySelector(f)??null;return co(r,c,{get(){return l(this)}})}}const ho={CHILD:2},fo=f=>(...i)=>({_$litDirective$:f,values:i});class po{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,r,c){this._$Ct=i,this._$AM=r,this._$Ci=c}_$AS(i,r){return this.update(i,r)}update(i,r){return this.render(...r)}}class qr extends po{constructor(i){if(super(i),this.it=Qt,i.type!==ho.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===Qt||i==null)return this._t=void 0,this.it=i;if(i===Xe)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const r=[i];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}qr.directiveName="unsafeHTML",qr.resultType=1;const ue=fo(qr);class mo{constructor(){this.stream=null}async requestPermission(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("MediaDevices API not supported in this browser");try{return this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1,sampleRate:48e3,channelCount:1}}),this.stream}catch(i){throw i instanceof Error?new Error(`Microphone access denied: ${i.message}`):new Error("Microphone access denied")}}getStream(){return this.stream}release(){this.stream&&(this.stream.getTracks().forEach(i=>i.stop()),this.stream=null)}isActive(){return this.stream!==null&&this.stream.active}}class go{constructor(){this.mediaRecorder=null,this.chunks=[]}async initialize(i){if(!window.MediaRecorder)throw new Error("MediaRecorder API not supported in this browser");const r=this.getSupportedMimeType();if(!r)throw new Error("No supported audio MIME type found");this.mediaRecorder=new MediaRecorder(i,{mimeType:r,audioBitsPerSecond:128e3}),this.mediaRecorder.ondataavailable=c=>{c.data.size>0&&(this.chunks.push(c.data),this.onDataAvailableCallback?.(c.data))},this.mediaRecorder.onstop=()=>{this.onStateChangeCallback?.("inactive")},this.mediaRecorder.onstart=()=>{this.onStateChangeCallback?.("recording")},this.mediaRecorder.onpause=()=>{this.onStateChangeCallback?.("paused")},this.mediaRecorder.onresume=()=>{this.onStateChangeCallback?.("recording")}}getSupportedMimeType(){return["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/mp4"].find(r=>MediaRecorder.isTypeSupported(r))||null}start(i=0){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");this.mediaRecorder.state!=="recording"&&(this.chunks=[],this.mediaRecorder.start(i))}async stop(){if(!this.mediaRecorder)throw new Error("MediaRecorder not initialized");return this.mediaRecorder.state==="inactive"?new Blob(this.chunks,{type:this.mediaRecorder.mimeType}):new Promise(i=>{this.mediaRecorder.onstop=()=>{const r=new Blob(this.chunks,{type:this.mediaRecorder.mimeType});this.onStateChangeCallback?.("inactive"),i(r)},this.mediaRecorder.stop()})}pause(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.pause()}resume(){this.mediaRecorder?.state==="paused"&&this.mediaRecorder.resume()}getState(){return this.mediaRecorder?.state||"inactive"}getMimeType(){return this.mediaRecorder?.mimeType||""}onDataAvailable(i){this.onDataAvailableCallback=i}onStateChange(i){this.onStateChangeCallback=i}release(){this.mediaRecorder?.state==="recording"&&this.mediaRecorder.stop(),this.mediaRecorder=null,this.chunks=[]}}const vo="modulepreload",yo=function(f){return"/aidio/"+f},Ui={},bo=function(i,r,c){let s=Promise.resolve();if(r&&r.length>0){let b=function(S){return Promise.all(S.map(x=>Promise.resolve(x).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};var d=b;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),g=h?.nonce||h?.getAttribute("nonce");s=b(r.map(S=>{if(S=yo(S),S in Ui)return;Ui[S]=!0;const x=S.endsWith(".css"),E=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${S}"]${E}`))return;const v=document.createElement("link");if(v.rel=x?"stylesheet":vo,x||(v.as="script"),v.crossOrigin="",v.href=S,g&&v.setAttribute("nonce",g),document.head.appendChild(v),x)return new Promise((C,y)=>{v.addEventListener("load",C),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${S}`)))})}))}function l(h){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=h,window.dispatchEvent(g),!g.defaultPrevented)throw h}return s.then(h=>{for(const g of h||[])g.status==="rejected"&&l(g.reason);return i().catch(l)})};var Pe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ea(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var ir={exports:{}},wo=ir.exports,Li;function _o(){return Li||(Li=1,(function(f,i){(function(r,c){f.exports=c()})(wo,function(){var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])})(t,e)},c=function(){return(c=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function s(t,e,n){for(var a,o=0,p=e.length;o<p;o++)!a&&o in e||((a=a||Array.prototype.slice.call(e,0,o))[o]=e[o]);return t.concat(a||Array.prototype.slice.call(e))}var l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Pe,d=Object.keys,h=Array.isArray;function g(t,e){return typeof e!="object"||d(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||l.Promise||(l.Promise=Promise);var b=Object.getPrototypeOf,S={}.hasOwnProperty;function x(t,e){return S.call(t,e)}function E(t,e){typeof e=="function"&&(e=e(b(t))),(typeof Reflect>"u"?d:Reflect.ownKeys)(e).forEach(function(n){C(t,n,e[n])})}var v=Object.defineProperty;function C(t,e,n,a){v(t,e,g(n&&x(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function y(t){return{from:function(e){return t.prototype=Object.create(e.prototype),C(t.prototype,"constructor",t),{extend:E.bind(null,t.prototype)}}}}var A=Object.getOwnPropertyDescriptor,_=[].slice;function R(t,e,n){return _.call(t,e,n)}function D(t,e){return e(t)}function W(t){if(!t)throw new Error("Assertion Failed")}function K(t){l.setImmediate?setImmediate(t):setTimeout(t,0)}function nt(t,e){if(typeof e=="string"&&x(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],a=0,o=e.length;a<o;++a){var p=nt(t,e[a]);n.push(p)}return n}var w=e.indexOf(".");if(w!==-1){var O=t[e.substr(0,w)];return O==null?void 0:nt(O,e.substr(w+1))}}function X(t,e,n){if(t&&e!==void 0&&!("isFrozen"in Object&&Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){W(typeof n!="string"&&"length"in n);for(var a=0,o=e.length;a<o;++a)X(t,e[a],n[a])}else{var p,w,O=e.indexOf(".");O!==-1?(p=e.substr(0,O),(w=e.substr(O+1))===""?n===void 0?h(t)&&!isNaN(parseInt(p))?t.splice(p,1):delete t[p]:t[p]=n:X(O=!(O=t[p])||!x(t,p)?t[p]={}:O,w,n)):n===void 0?h(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function ut(t){var e,n={};for(e in t)x(t,e)&&(n[e]=t[e]);return n}var tt=[].concat;function pt(t){return tt.apply([],t)}var At="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(pt([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(t){return l[t]}),Ot=new Set(At.map(function(t){return l[t]})),$=null;function Q(t){return $=new WeakMap,t=(function e(n){if(!n||typeof n!="object")return n;var a=$.get(n);if(a)return a;if(h(n)){a=[],$.set(n,a);for(var o=0,p=n.length;o<p;++o)a.push(e(n[o]))}else if(Ot.has(n.constructor))a=n;else{var w,O=b(n);for(w in a=O===Object.prototype?{}:Object.create(O),$.set(n,a),n)x(n,w)&&(a[w]=e(n[w]))}return a})(t),$=null,t}var m={}.toString;function it(t){return m.call(t).slice(8,-1)}var Rt=typeof Symbol<"u"?Symbol.iterator:"@@iterator",lt=typeof Rt=="symbol"?function(t){var e;return t!=null&&(e=t[Rt])&&e.apply(t)}:function(){return null};function Tt(t,e){return e=t.indexOf(e),0<=e&&t.splice(e,1),0<=e}var st={};function Pt(t){var e,n,a,o;if(arguments.length===1){if(h(t))return t.slice();if(this===st&&typeof t=="string")return[t];if(o=lt(t)){for(n=[];!(a=o.next()).done;)n.push(a.value);return n}if(t==null)return[t];if(typeof(e=t.length)!="number")return[t];for(n=new Array(e);e--;)n[e]=t[e];return n}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}var Y=typeof Symbol<"u"?function(t){return t[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},dt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ye=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(dt),V={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Et(t,e){this.name=t,this.message=e}function xt(t,e){return t+". Errors: "+Object.keys(e).map(function(n){return e[n].toString()}).filter(function(n,a,o){return o.indexOf(n)===a}).join(`
`)}function vt(t,e,n,a){this.failures=e,this.failedKeys=a,this.successCount=n,this.message=xt(t,e)}function Lt(t,e){this.name="BulkError",this.failures=Object.keys(e).map(function(n){return e[n]}),this.failuresByPos=e,this.message=xt(t,this.failures)}y(Et).from(Error).extend({toString:function(){return this.name+": "+this.message}}),y(vt).from(Et),y(Lt).from(Et);var Xt=ye.reduce(function(t,e){return t[e]=e+"Error",t},{}),Mt=Et,mt=ye.reduce(function(t,e){var n=e+"Error";function a(o,p){this.name=n,o?typeof o=="string"?(this.message="".concat(o).concat(p?`
 `+p:""),this.inner=p||null):typeof o=="object"&&(this.message="".concat(o.name," ").concat(o.message),this.inner=o):(this.message=V[e]||n,this.inner=null)}return y(a).from(Mt),t[e]=a,t},{});mt.Syntax=SyntaxError,mt.Type=TypeError,mt.Range=RangeError;var Vt=dt.reduce(function(t,e){return t[e+"Error"]=mt[e],t},{}),Kt=ye.reduce(function(t,e){return["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=mt[e]),t},{});function zt(){}function ae(t){return t}function u(t,e){return t==null||t===ae?e:function(n){return e(t(n))}}function et(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function G(t,e){return t===zt?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var a=this.onsuccess,o=this.onerror;this.onsuccess=null,this.onerror=null;var p=e.apply(this,arguments);return a&&(this.onsuccess=this.onsuccess?et(a,this.onsuccess):a),o&&(this.onerror=this.onerror?et(o,this.onerror):o),p!==void 0?p:n}}function P(t,e){return t===zt?e:function(){t.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?et(n,this.onsuccess):n),a&&(this.onerror=this.onerror?et(a,this.onerror):a)}}function k(t,e){return t===zt?e:function(n){var a=t.apply(this,arguments);g(n,a);var o=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,n=e.apply(this,arguments),o&&(this.onsuccess=this.onsuccess?et(o,this.onsuccess):o),p&&(this.onerror=this.onerror?et(p,this.onerror):p),a===void 0?n===void 0?void 0:n:g(a,n)}}function N(t,e){return t===zt?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ot(t,e){return t===zt?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,o=arguments.length,p=new Array(o);o--;)p[o]=arguments[o];return n.then(function(){return e.apply(a,p)})}return e.apply(this,arguments)}}Kt.ModifyError=vt,Kt.DexieError=Et,Kt.BulkError=Lt;var at=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function H(t){at=t}var ct={},kt=100,At=typeof Promise>"u"?[]:(function(){var t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,b(t),t];var e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,b(e),t]})(),dt=At[0],ye=At[1],At=At[2],ye=ye&&ye.then,Nt=dt&&dt.constructor,Dt=!!At,ee=function(t,e){Re.push([t,e]),ce&&(queueMicrotask(ga),ce=!1)},Se=!0,ce=!0,pe=[],qt=[],Oe=ae,ve={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:zt,pgp:!1,env:{},finalize:zt},St=ve,Re=[],Ce=0,Je=[];function _t(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var e=this._PSD=St;if(typeof t!="function"){if(t!==ct)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&$e(this,this._value))}this._state=null,this._value=null,++e.ref,(function n(a,o){try{o(function(p){if(a._state===null){if(p===a)throw new TypeError("A promise cannot be resolved with itself.");var w=a._lib&&tn();p&&typeof p.then=="function"?n(a,function(O,I){p instanceof _t?p._then(O,I):p.then(O,I)}):(a._state=!0,a._value=p,Qr(a)),w&&en()}},$e.bind(null,a))}catch(p){$e(a,p)}})(this,t)}var Qe={get:function(){var t=St,e=Dn;function n(a,o){var p=this,w=!t.global&&(t!==St||e!==Dn),O=w&&!Be(),I=new _t(function(B,F){dr(p,new Te(ei(a,t,w,O),ei(o,t,w,O),B,F,t))});return this._consoleTask&&(I._consoleTask=this._consoleTask),I}return n.prototype=ct,n},set:function(t){C(this,"then",t&&t.prototype===ct?Qe:{get:function(){return t},set:Qe.set})}};function Te(t,e,n,a,o){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=a,this.psd=o}function $e(t,e){var n,a;qt.push(e),t._state===null&&(n=t._lib&&tn(),e=Oe(e),t._state=!1,t._value=e,a=t,pe.some(function(o){return o._value===a._value})||pe.push(a),Qr(t),n&&en())}function Qr(t){var e=t._listeners;t._listeners=[];for(var n=0,a=e.length;n<a;++n)dr(t,e[n]);var o=t._PSD;--o.ref||o.finalize(),Ce===0&&(++Ce,ee(function(){--Ce==0&&fr()},[]))}function dr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ce,ee(ma,[n,t,e])}else t._listeners.push(e)}function ma(t,e,n){try{var a,o=e._value;!e._state&&qt.length&&(qt=[]),a=at&&e._consoleTask?e._consoleTask.run(function(){return t(o)}):t(o),e._state||qt.indexOf(o)!==-1||(function(p){for(var w=pe.length;w;)if(pe[--w]._value===p._value)return pe.splice(w,1)})(e),n.resolve(a)}catch(p){n.reject(p)}finally{--Ce==0&&fr(),--n.psd.ref||n.psd.finalize()}}function ga(){Le(ve,function(){tn()&&en()})}function tn(){var t=Se;return ce=Se=!1,t}function en(){var t,e,n;do for(;0<Re.length;)for(t=Re,Re=[],n=t.length,e=0;e<n;++e){var a=t[e];a[0].apply(null,a[1])}while(0<Re.length);ce=Se=!0}function fr(){var t=pe;pe=[],t.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)});for(var e=Je.slice(0),n=e.length;n;)e[--n]()}function In(t){return new _t(ct,!1,t)}function Zt(t,e){var n=St;return function(){var a=tn(),o=St;try{return ze(n,!0),t.apply(this,arguments)}catch(p){e&&e(p)}finally{ze(o,!1),a&&en()}}}E(_t.prototype,{then:Qe,_then:function(t,e){dr(this,new Te(null,null,t,e,St))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=t,n=arguments[1];return typeof e=="function"?this.then(null,function(a){return(a instanceof e?n:In)(a)}):this.then(null,function(a){return(a&&a.name===e?n:In)(a)})},finally:function(t){return this.then(function(e){return _t.resolve(t()).then(function(){return e})},function(e){return _t.resolve(t()).then(function(){return In(e)})})},timeout:function(t,e){var n=this;return t<1/0?new _t(function(a,o){var p=setTimeout(function(){return o(new mt.Timeout(e))},t);n.then(a,o).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&C(_t.prototype,Symbol.toStringTag,"Dexie.Promise"),ve.env=ti(),E(_t,{all:function(){var t=Pt.apply(null,arguments).map(jn);return new _t(function(e,n){t.length===0&&e([]);var a=t.length;t.forEach(function(o,p){return _t.resolve(o).then(function(w){t[p]=w,--a||e(t)},n)})})},resolve:function(t){return t instanceof _t?t:t&&typeof t.then=="function"?new _t(function(e,n){t.then(e,n)}):new _t(ct,!0,t)},reject:In,race:function(){var t=Pt.apply(null,arguments).map(jn);return new _t(function(e,n){t.map(function(a){return _t.resolve(a).then(e,n)})})},PSD:{get:function(){return St},set:function(t){return St=t}},totalEchoes:{get:function(){return Dn}},newPSD:Ie,usePSD:Le,scheduler:{get:function(){return ee},set:function(t){ee=t}},rejectionMapper:{get:function(){return Oe},set:function(t){Oe=t}},follow:function(t,e){return new _t(function(n,a){return Ie(function(o,p){var w=St;w.unhandleds=[],w.onunhandled=p,w.finalize=et(function(){var O,I=this;O=function(){I.unhandleds.length===0?o():p(I.unhandleds[0])},Je.push(function B(){O(),Je.splice(Je.indexOf(B),1)}),++Ce,ee(function(){--Ce==0&&fr()},[])},w.finalize),t()},e,n,a)})}}),Nt&&(Nt.allSettled&&C(_t,"allSettled",function(){var t=Pt.apply(null,arguments).map(jn);return new _t(function(e){t.length===0&&e([]);var n=t.length,a=new Array(n);t.forEach(function(o,p){return _t.resolve(o).then(function(w){return a[p]={status:"fulfilled",value:w}},function(w){return a[p]={status:"rejected",reason:w}}).then(function(){return--n||e(a)})})})}),Nt.any&&typeof AggregateError<"u"&&C(_t,"any",function(){var t=Pt.apply(null,arguments).map(jn);return new _t(function(e,n){t.length===0&&n(new AggregateError([]));var a=t.length,o=new Array(a);t.forEach(function(p,w){return _t.resolve(p).then(function(O){return e(O)},function(O){o[w]=O,--a||n(new AggregateError(o))})})})}),Nt.withResolvers&&(_t.withResolvers=Nt.withResolvers));var ne={awaits:0,echoes:0,id:0},va=0,Bn=[],zn=0,Dn=0,ya=0;function Ie(t,e,n,a){var o=St,p=Object.create(o);return p.parent=o,p.ref=0,p.global=!1,p.id=++ya,ve.env,p.env=Dt?{Promise:_t,PromiseProp:{value:_t,configurable:!0,writable:!0},all:_t.all,race:_t.race,allSettled:_t.allSettled,any:_t.any,resolve:_t.resolve,reject:_t.reject}:{},e&&g(p,e),++o.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},a=Le(p,t,n,a),p.ref===0&&p.finalize(),a}function nn(){return ne.id||(ne.id=++va),++ne.awaits,ne.echoes+=kt,ne.id}function Be(){return!!ne.awaits&&(--ne.awaits==0&&(ne.id=0),ne.echoes=ne.awaits*kt,!0)}function jn(t){return ne.echoes&&t&&t.constructor===Nt?(nn(),t.then(function(e){return Be(),e},function(e){return Be(),Yt(e)})):t}function ba(){var t=Bn[Bn.length-1];Bn.pop(),ze(t,!1)}function ze(t,e){var n,a=St;(e?!ne.echoes||zn++&&t===St:!zn||--zn&&t===St)||queueMicrotask(e?function(o){++Dn,ne.echoes&&--ne.echoes!=0||(ne.echoes=ne.awaits=ne.id=0),Bn.push(St),ze(o,!0)}.bind(null,t):ba),t!==St&&(St=t,a===ve&&(ve.env=ti()),Dt&&(n=ve.env.Promise,e=t.env,(a.global||t.global)&&(Object.defineProperty(l,"Promise",e.PromiseProp),n.all=e.all,n.race=e.race,n.resolve=e.resolve,n.reject=e.reject,e.allSettled&&(n.allSettled=e.allSettled),e.any&&(n.any=e.any))))}function ti(){var t=l.Promise;return Dt?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(l,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject}:{}}function Le(t,e,n,a,o){var p=St;try{return ze(t,!0),e(n,a,o)}finally{ze(p,!1)}}function ei(t,e,n,a){return typeof t!="function"?t:function(){var o=St;n&&nn(),ze(e,!0);try{return t.apply(this,arguments)}finally{ze(o,!1),a&&queueMicrotask(Be)}}}function pr(t){Promise===Nt&&ne.echoes===0?zn===0?t():enqueueNativeMicroTask(t):setTimeout(t,0)}(""+ye).indexOf("[native code]")===-1&&(nn=Be=zt);var Yt=_t.reject,Ke="￿",Ae="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ni="String expected.",rn=[],Mn="__dbnames",mr="readonly",gr="readwrite";function qe(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}var ri={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Fn(t){return typeof t!="string"||/\./.test(t)?function(e){return e}:function(e){return e[t]===void 0&&t in e&&delete(e=Q(e))[t],e}}function ii(){throw mt.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Ft(t,e){try{var n=ai(t),a=ai(e);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return e<t?1:t<e?-1:0;case"binary":return(function(o,p){for(var w=o.length,O=p.length,I=w<O?w:O,B=0;B<I;++B)if(o[B]!==p[B])return o[B]<p[B]?-1:1;return w===O?0:w<O?-1:1})(oi(t),oi(e));case"Array":return(function(o,p){for(var w=o.length,O=p.length,I=w<O?w:O,B=0;B<I;++B){var F=Ft(o[B],p[B]);if(F!==0)return F}return w===O?0:w<O?-1:1})(t,e)}}catch{}return NaN}function ai(t){var e=typeof t;return e!="object"?e:ArrayBuffer.isView(t)?"binary":(t=it(t),t==="ArrayBuffer"?"binary":t)}function oi(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function Nn(t,e,n){var a=t.schema.yProps;return a?(e&&0<n.numFailures&&(e=e.filter(function(o,p){return!n.failures[p]})),Promise.all(a.map(function(o){return o=o.updatesTable,e?t.db.table(o).where("k").anyOf(e).delete():t.db.table(o).clear()})).then(function(){return n})):n}var mn=(si.prototype.execute=function(t){var e=this["@@propmod"];if(e.add!==void 0){var n=e.add;if(h(n))return s(s([],h(t)?t:[],!0),n).sort();if(typeof n=="number")return(Number(t)||0)+n;if(typeof n=="bigint")try{return BigInt(t)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(e.remove!==void 0){var a=e.remove;if(h(a))return h(t)?t.filter(function(o){return!a.includes(o)}).sort():[];if(typeof a=="number")return Number(t)-a;if(typeof a=="bigint")try{return BigInt(t)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=e.replacePrefix)===null||n===void 0?void 0:n[0],n&&typeof t=="string"&&t.startsWith(n)?e.replacePrefix[1]+t.substring(n.length):t},si);function si(t){this["@@propmod"]=t}function li(t,e){for(var n=d(e),a=n.length,o=!1,p=0;p<a;++p){var w=n[p],O=e[w],I=nt(t,w);O instanceof mn?(X(t,w,O.execute(I)),o=!0):I!==O&&(X(t,w,O),o=!0)}return o}var ui=(Wt.prototype._trans=function(t,e,n){var a=this._tx||St.trans,o=this.name,p=at&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function w(B,F,T){if(!T.schema[o])throw new mt.NotFound("Table "+o+" not part of transaction");return e(T.idbtrans,T)}var O=tn();try{var I=a&&a.db._novip===this.db._novip?a===St.trans?a._promise(t,w,n):Ie(function(){return a._promise(t,w,n)},{trans:a,transless:St.transless||St}):(function B(F,T,L,z){if(F.idbdb&&(F._state.openComplete||St.letThrough||F._vip)){var j=F._createTransaction(T,L,F._dbSchema);try{j.create(),F._state.PR1398_maxLoop=3}catch(M){return M.name===Xt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return B(F,T,L,z)})):Yt(M)}return j._promise(T,function(M,U){return Ie(function(){return St.trans=j,z(M,U,j)})}).then(function(M){if(T==="readwrite")try{j.idbtrans.commit()}catch{}return T==="readonly"?M:j._completion.then(function(){return M})})}if(F._state.openComplete)return Yt(new mt.DatabaseClosed(F._state.dbOpenError));if(!F._state.isBeingOpened){if(!F._state.autoOpen)return Yt(new mt.DatabaseClosed);F.open().catch(zt)}return F._state.dbReadyPromise.then(function(){return B(F,T,L,z)})})(this.db,t,[this.name],w);return p&&(I._consoleTask=p,I=I.catch(function(B){return console.trace(B),Yt(B)})),I}finally{O&&en()}},Wt.prototype.get=function(t,e){var n=this;return t&&t.constructor===Object?this.where(t).first(e):t==null?Yt(new mt.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:t}).then(function(o){return n.hook.reading.fire(o)})}).then(e)},Wt.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(h(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var e=d(t);if(e.length===1)return this.where(e[0]).equals(t[e[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(O){if(O.compound&&e.every(function(B){return 0<=O.keyPath.indexOf(B)})){for(var I=0;I<e.length;++I)if(e.indexOf(O.keyPath[I])===-1)return!1;return!0}return!1}).sort(function(O,I){return O.keyPath.length-I.keyPath.length})[0];if(n&&this.db._maxKey!==Ke){var p=n.keyPath.slice(0,e.length);return this.where(p).equals(p.map(function(I){return t[I]}))}!n&&at&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(e.join("+"),"]"));var a=this.schema.idxByName;function o(O,I){return Ft(O,I)===0}var w=e.reduce(function(T,I){var B=T[0],F=T[1],T=a[I],L=t[I];return[B||T,B||!T?qe(F,T&&T.multi?function(z){return z=nt(z,I),h(z)&&z.some(function(j){return o(L,j)})}:function(z){return o(L,nt(z,I))}):F]},[null,null]),p=w[0],w=w[1];return p?this.where(p.name).equals(t[p.keyPath]).filter(w):n?this.filter(w):this.where(e).equals("")},Wt.prototype.filter=function(t){return this.toCollection().and(t)},Wt.prototype.count=function(t){return this.toCollection().count(t)},Wt.prototype.offset=function(t){return this.toCollection().offset(t)},Wt.prototype.limit=function(t){return this.toCollection().limit(t)},Wt.prototype.each=function(t){return this.toCollection().each(t)},Wt.prototype.toArray=function(t){return this.toCollection().toArray(t)},Wt.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Wt.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,h(t)?"[".concat(t.join("+"),"]"):t))},Wt.prototype.reverse=function(){return this.toCollection().reverse()},Wt.prototype.mapToClass=function(t){var e,n=this.db,a=this.name;function o(){return e!==null&&e.apply(this,arguments)||this}(this.schema.mappedClass=t).prototype instanceof ii&&((function(I,B){if(typeof B!="function"&&B!==null)throw new TypeError("Class extends value "+String(B)+" is not a constructor or null");function F(){this.constructor=I}r(I,B),I.prototype=B===null?Object.create(B):(F.prototype=B.prototype,new F)})(o,e=t),Object.defineProperty(o.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),o.prototype.table=function(){return a},t=o);for(var p=new Set,w=t.prototype;w;w=b(w))Object.getOwnPropertyNames(w).forEach(function(I){return p.add(I)});function O(I){if(!I)return I;var B,F=Object.create(t.prototype);for(B in I)if(!p.has(B))try{F[B]=I[B]}catch{}return F}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=O,this.hook("reading",O),t},Wt.prototype.defineClass=function(){return this.mapToClass(function(t){g(this,t)})},Wt.prototype.add=function(t,e){var n=this,a=this.schema.primKey,o=a.auto,p=a.keyPath,w=t;return p&&o&&(w=Fn(p)(t)),this._trans("readwrite",function(O){return n.core.mutate({trans:O,type:"add",keys:e!=null?[e]:null,values:[w]})}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):O.lastResult}).then(function(O){if(p)try{X(t,p,O)}catch{}return O})},Wt.prototype.upsert=function(t,e){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(o){return n.core.get({trans:o,key:t}).then(function(p){var w=p??{};return li(w,e),a&&X(w,a,t),n.core.mutate({trans:o,type:"put",values:[w],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[e]}}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):!!p})})})},Wt.prototype.update=function(t,e){return typeof t!="object"||h(t)?this.where(":id").equals(t).modify(e):(t=nt(t,this.schema.primKey.keyPath),t===void 0?Yt(new mt.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(t).modify(e))},Wt.prototype.put=function(t,e){var n=this,a=this.schema.primKey,o=a.auto,p=a.keyPath,w=t;return p&&o&&(w=Fn(p)(t)),this._trans("readwrite",function(O){return n.core.mutate({trans:O,type:"put",values:[w],keys:e!=null?[e]:null})}).then(function(O){return O.numFailures?_t.reject(O.failures[0]):O.lastResult}).then(function(O){if(p)try{X(t,p,O)}catch{}return O})},Wt.prototype.delete=function(t){var e=this;return this._trans("readwrite",function(n){return e.core.mutate({trans:n,type:"delete",keys:[t]}).then(function(a){return Nn(e,[t],a)}).then(function(a){return a.numFailures?_t.reject(a.failures[0]):void 0})})},Wt.prototype.clear=function(){var t=this;return this._trans("readwrite",function(e){return t.core.mutate({trans:e,type:"deleteRange",range:ri}).then(function(n){return Nn(t,null,n)})}).then(function(e){return e.numFailures?_t.reject(e.failures[0]):void 0})},Wt.prototype.bulkGet=function(t){var e=this;return this._trans("readonly",function(n){return e.core.getMany({keys:t,trans:n}).then(function(a){return a.map(function(o){return e.hook.reading.fire(o)})})})},Wt.prototype.bulkAdd=function(t,e,n){var a=this,o=Array.isArray(e)?e:void 0,p=(n=n||(o?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(w){var B=a.schema.primKey,O=B.auto,B=B.keyPath;if(B&&o)throw new mt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(o&&o.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var I=t.length,B=B&&O?t.map(Fn(B)):t;return a.core.mutate({trans:w,type:"add",keys:o,values:B,wantResults:p}).then(function(j){var T=j.numFailures,L=j.results,z=j.lastResult,j=j.failures;if(T===0)return p?L:z;throw new Lt("".concat(a.name,".bulkAdd(): ").concat(T," of ").concat(I," operations failed"),j)})})},Wt.prototype.bulkPut=function(t,e,n){var a=this,o=Array.isArray(e)?e:void 0,p=(n=n||(o?void 0:e))?n.allKeys:void 0;return this._trans("readwrite",function(w){var B=a.schema.primKey,O=B.auto,B=B.keyPath;if(B&&o)throw new mt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(o&&o.length!==t.length)throw new mt.InvalidArgument("Arguments objects and keys must have the same length");var I=t.length,B=B&&O?t.map(Fn(B)):t;return a.core.mutate({trans:w,type:"put",keys:o,values:B,wantResults:p}).then(function(j){var T=j.numFailures,L=j.results,z=j.lastResult,j=j.failures;if(T===0)return p?L:z;throw new Lt("".concat(a.name,".bulkPut(): ").concat(T," of ").concat(I," operations failed"),j)})})},Wt.prototype.bulkUpdate=function(t){var e=this,n=this.core,a=t.map(function(w){return w.key}),o=t.map(function(w){return w.changes}),p=[];return this._trans("readwrite",function(w){return n.getMany({trans:w,keys:a,cache:"clone"}).then(function(O){var I=[],B=[];t.forEach(function(T,L){var z=T.key,j=T.changes,M=O[L];if(M){for(var U=0,q=Object.keys(j);U<q.length;U++){var Z=q[U],J=j[Z];if(Z===e.schema.primKey.keyPath){if(Ft(J,z)!==0)throw new mt.Constraint("Cannot update primary key in bulkUpdate()")}else X(M,Z,J)}p.push(L),I.push(z),B.push(M)}});var F=I.length;return n.mutate({trans:w,type:"put",keys:I,values:B,updates:{keys:a,changeSpecs:o}}).then(function(T){var L=T.numFailures,z=T.failures;if(L===0)return F;for(var j=0,M=Object.keys(z);j<M.length;j++){var U,q=M[j],Z=p[Number(q)];Z!=null&&(U=z[q],delete z[q],z[Z]=U)}throw new Lt("".concat(e.name,".bulkUpdate(): ").concat(L," of ").concat(F," operations failed"),z)})})})},Wt.prototype.bulkDelete=function(t){var e=this,n=t.length;return this._trans("readwrite",function(a){return e.core.mutate({trans:a,type:"delete",keys:t}).then(function(o){return Nn(e,t,o)})}).then(function(w){var o=w.numFailures,p=w.lastResult,w=w.failures;if(o===0)return p;throw new Lt("".concat(e.name,".bulkDelete(): ").concat(o," of ").concat(n," operations failed"),w)})},Wt);function Wt(){}function gn(t){function e(w,O){if(O){for(var I=arguments.length,B=new Array(I-1);--I;)B[I-1]=arguments[I];return n[w].subscribe.apply(null,B),t}if(typeof w=="string")return n[w]}var n={};e.addEventType=p;for(var a=1,o=arguments.length;a<o;++a)p(arguments[a]);return e;function p(w,O,I){if(typeof w!="object"){var B;O=O||N;var F={subscribers:[],fire:I=I||zt,subscribe:function(T){F.subscribers.indexOf(T)===-1&&(F.subscribers.push(T),F.fire=O(F.fire,T))},unsubscribe:function(T){F.subscribers=F.subscribers.filter(function(L){return L!==T}),F.fire=F.subscribers.reduce(O,I)}};return n[w]=e[w]=F}d(B=w).forEach(function(T){var L=B[T];if(h(L))p(T,B[T][0],B[T][1]);else{if(L!=="asap")throw new mt.InvalidArgument("Invalid event config");var z=p(T,ae,function(){for(var j=arguments.length,M=new Array(j);j--;)M[j]=arguments[j];z.subscribers.forEach(function(U){K(function(){U.apply(null,M)})})})}})}}function vn(t,e){return y(e).from({prototype:t}),e}function an(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function vr(t,e){t.filter=qe(t.filter,e)}function yr(t,e,n){var a=t.replayFilter;t.replayFilter=a?function(){return qe(a(),e())}:e,t.justLimit=n&&!a}function Un(t,e){if(t.isPrimKey)return e.primaryKey;var n=e.getIndexByKeyPath(t.index);if(!n)throw new mt.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function ci(t,e,n){var a=Un(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:a,range:t.range}})}function Ln(t,e,n,a){var o=t.replayFilter?qe(t.filter,t.replayFilter()):t.filter;if(t.or){var p={},w=function(O,I,B){var F,T;o&&!o(I,B,function(L){return I.stop(L)},function(L){return I.fail(L)})||((T=""+(F=I.primaryKey))=="[object ArrayBuffer]"&&(T=""+new Uint8Array(F)),x(p,T)||(p[T]=!0,e(O,I,B)))};return Promise.all([t.or._iterate(w,n),hi(ci(t,a,n),t.algorithm,w,!t.keysOnly&&t.valueMapper)])}return hi(ci(t,a,n),qe(t.algorithm,o),e,!t.keysOnly&&t.valueMapper)}function hi(t,e,n,a){var o=Zt(a?function(p,w,O){return n(a(p),w,O)}:n);return t.then(function(p){if(p)return p.start(function(){var w=function(){return p.continue()};e&&!e(p,function(O){return w=O},function(O){p.stop(O),w=zt},function(O){p.fail(O),w=zt})||o(p.value,p,function(O){return w=O}),w()})})}var wa=(Ut.prototype._read=function(t,e){var n=this._ctx;return n.error?n.table._trans(null,Yt.bind(null,n.error)):n.table._trans("readonly",t).then(e)},Ut.prototype._write=function(t){var e=this._ctx;return e.error?e.table._trans(null,Yt.bind(null,e.error)):e.table._trans("readwrite",t,"locked")},Ut.prototype._addAlgorithm=function(t){var e=this._ctx;e.algorithm=qe(e.algorithm,t)},Ut.prototype._iterate=function(t,e){return Ln(this._ctx,t,e,this._ctx.table.core)},Ut.prototype.clone=function(t){var e=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return t&&g(n,t),e._ctx=n,e},Ut.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ut.prototype.each=function(t){var e=this._ctx;return this._read(function(n){return Ln(e,t,n,e.table.core)})},Ut.prototype.count=function(t){var e=this;return this._read(function(n){var a=e._ctx,o=a.table.core;if(an(a,!0))return o.count({trans:n,query:{index:Un(a,o.schema),range:a.range}}).then(function(w){return Math.min(w,a.limit)});var p=0;return Ln(a,function(){return++p,!1},n,o).then(function(){return p})}).then(t)},Ut.prototype.sortBy=function(t,e){var n=t.split(".").reverse(),a=n[0],o=n.length-1;function p(I,B){return B?p(I[n[B]],B-1):I[a]}var w=this._ctx.dir==="next"?1:-1;function O(I,B){return Ft(p(I,o),p(B,o))*w}return this.toArray(function(I){return I.sort(O)}).then(e)},Ut.prototype.toArray=function(t){var e=this;return this._read(function(n){var a=e._ctx;if(a.dir==="next"&&an(a,!0)&&0<a.limit){var o=a.valueMapper,p=Un(a,a.table.core.schema);return a.table.core.query({trans:n,limit:a.limit,values:!0,query:{index:p,range:a.range}}).then(function(O){return O=O.result,o?O.map(o):O})}var w=[];return Ln(a,function(O){return w.push(O)},n,a.table.core).then(function(){return w})},t)},Ut.prototype.offset=function(t){var e=this._ctx;return t<=0||(e.offset+=t,an(e)?yr(e,function(){var n=t;return function(a,o){return n===0||(n===1?--n:o(function(){a.advance(n),n=0}),!1)}}):yr(e,function(){var n=t;return function(){return--n<0}})),this},Ut.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),yr(this._ctx,function(){var e=t;return function(n,a,o){return--e<=0&&a(o),0<=e}},!0),this},Ut.prototype.until=function(t,e){return vr(this._ctx,function(n,a,o){return!t(n.value)||(a(o),e)}),this},Ut.prototype.first=function(t){return this.limit(1).toArray(function(e){return e[0]}).then(t)},Ut.prototype.last=function(t){return this.reverse().first(t)},Ut.prototype.filter=function(t){var e;return vr(this._ctx,function(n){return t(n.value)}),(e=this._ctx).isMatch=qe(e.isMatch,t),this},Ut.prototype.and=function(t){return this.filter(t)},Ut.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},Ut.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ut.prototype.desc=function(){return this.reverse()},Ut.prototype.eachKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,a){t(a.key,a)})},Ut.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},Ut.prototype.eachPrimaryKey=function(t){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(n,a){t(a.primaryKey,a)})},Ut.prototype.keys=function(t){var e=this._ctx;e.keysOnly=!e.isMatch;var n=[];return this.each(function(a,o){n.push(o.key)}).then(function(){return n}).then(t)},Ut.prototype.primaryKeys=function(t){var e=this._ctx;if(e.dir==="next"&&an(e,!0)&&0<e.limit)return this._read(function(a){var o=Un(e,e.table.core.schema);return e.table.core.query({trans:a,values:!1,limit:e.limit,query:{index:o,range:e.range}})}).then(function(a){return a.result}).then(t);e.keysOnly=!e.isMatch;var n=[];return this.each(function(a,o){n.push(o.primaryKey)}).then(function(){return n}).then(t)},Ut.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},Ut.prototype.firstKey=function(t){return this.limit(1).keys(function(e){return e[0]}).then(t)},Ut.prototype.lastKey=function(t){return this.reverse().firstKey(t)},Ut.prototype.distinct=function(){var t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];if(!t||!t.multi)return this;var e={};return vr(this._ctx,function(o){var a=o.primaryKey.toString(),o=x(e,a);return e[a]=!0,!o}),this},Ut.prototype.modify=function(t){var e=this,n=this._ctx;return this._write(function(a){var o=typeof t=="function"?t:function(M){return li(M,t)},p=n.table.core,B=p.schema.primaryKey,w=B.outbound,O=B.extractKey,I=200,B=e.db._options.modifyChunkSize;B&&(I=typeof B=="object"?B[p.name]||B["*"]||200:B);function F(M,Z){var q=Z.failures,Z=Z.numFailures;L+=M-Z;for(var J=0,rt=d(q);J<rt.length;J++){var ft=rt[J];T.push(q[ft])}}var T=[],L=0,z=[],j=t===di;return e.clone().primaryKeys().then(function(M){function U(Z){var J=Math.min(I,M.length-Z),rt=M.slice(Z,Z+J);return(j?Promise.resolve([]):p.getMany({trans:a,keys:rt,cache:"immutable"})).then(function(ft){var bt=[],ht=[],gt=w?[]:null,wt=j?rt:[];if(!j)for(var yt=0;yt<J;++yt){var Ct=ft[yt],It={value:Q(Ct),primKey:M[Z+yt]};o.call(It,It.value,It)!==!1&&(It.value==null?wt.push(M[Z+yt]):w||Ft(O(Ct),O(It.value))===0?(ht.push(It.value),w&&gt.push(M[Z+yt])):(wt.push(M[Z+yt]),bt.push(It.value)))}return Promise.resolve(0<bt.length&&p.mutate({trans:a,type:"add",values:bt}).then(function(Bt){for(var jt in Bt.failures)wt.splice(parseInt(jt),1);F(bt.length,Bt)})).then(function(){return(0<ht.length||q&&typeof t=="object")&&p.mutate({trans:a,type:"put",keys:gt,values:ht,criteria:q,changeSpec:typeof t!="function"&&t,isAdditionalChunk:0<Z}).then(function(Bt){return F(ht.length,Bt)})}).then(function(){return(0<wt.length||q&&j)&&p.mutate({trans:a,type:"delete",keys:wt,criteria:q,isAdditionalChunk:0<Z}).then(function(Bt){return Nn(n.table,wt,Bt)}).then(function(Bt){return F(wt.length,Bt)})}).then(function(){return M.length>Z+J&&U(Z+I)})})}var q=an(n)&&n.limit===1/0&&(typeof t!="function"||j)&&{index:n.index,range:n.range};return U(0).then(function(){if(0<T.length)throw new vt("Error modifying one or more objects",T,L,z);return M.length})})})},Ut.prototype.delete=function(){var t=this._ctx,e=t.range;return!an(t)||t.table.schema.yProps||!t.isPrimKey&&e.type!==3?this.modify(di):this._write(function(n){var a=t.table.core.schema.primaryKey,o=e;return t.table.core.count({trans:n,query:{index:a,range:o}}).then(function(p){return t.table.core.mutate({trans:n,type:"deleteRange",range:o}).then(function(I){var O=I.failures,I=I.numFailures;if(I)throw new vt("Could not delete some values",Object.keys(O).map(function(B){return O[B]}),p-I);return p-I})})})},Ut);function Ut(){}var di=function(t,e){return e.value=null};function _a(t,e){return t<e?-1:t===e?0:1}function xa(t,e){return e<t?-1:t===e?0:1}function me(t,e,n){return t=t instanceof pi?new t.Collection(t):t,t._ctx.error=new(n||TypeError)(e),t}function on(t){return new t.Collection(t,function(){return fi("")}).limit(0)}function Kn(t,e,n,a){var o,p,w,O,I,B,F,T=n.length;if(!n.every(function(j){return typeof j=="string"}))return me(t,ni);function L(j){o=j==="next"?function(U){return U.toUpperCase()}:function(U){return U.toLowerCase()},p=j==="next"?function(U){return U.toLowerCase()}:function(U){return U.toUpperCase()},w=j==="next"?_a:xa;var M=n.map(function(U){return{lower:p(U),upper:o(U)}}).sort(function(U,q){return w(U.lower,q.lower)});O=M.map(function(U){return U.upper}),I=M.map(function(U){return U.lower}),F=(B=j)==="next"?"":a}L("next"),t=new t.Collection(t,function(){return De(O[0],I[T-1]+a)}),t._ondirectionchange=function(j){L(j)};var z=0;return t._addAlgorithm(function(j,M,U){var q=j.key;if(typeof q!="string")return!1;var Z=p(q);if(e(Z,I,z))return!0;for(var J=null,rt=z;rt<T;++rt){var ft=(function(bt,ht,gt,wt,yt,Ct){for(var It=Math.min(bt.length,wt.length),Bt=-1,jt=0;jt<It;++jt){var ge=ht[jt];if(ge!==wt[jt])return yt(bt[jt],gt[jt])<0?bt.substr(0,jt)+gt[jt]+gt.substr(jt+1):yt(bt[jt],wt[jt])<0?bt.substr(0,jt)+wt[jt]+gt.substr(jt+1):0<=Bt?bt.substr(0,Bt)+ht[Bt]+gt.substr(Bt+1):null;yt(bt[jt],ge)<0&&(Bt=jt)}return It<wt.length&&Ct==="next"?bt+gt.substr(bt.length):It<bt.length&&Ct==="prev"?bt.substr(0,gt.length):Bt<0?null:bt.substr(0,Bt)+wt[Bt]+gt.substr(Bt+1)})(q,Z,O[rt],I[rt],w,B);ft===null&&J===null?z=rt+1:(J===null||0<w(J,ft))&&(J=ft)}return M(J!==null?function(){j.continue(J+F)}:U),!1}),t}function De(t,e,n,a){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:a}}function fi(t){return{type:1,lower:t,upper:t}}var pi=(Object.defineProperty(re.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),re.prototype.between=function(t,e,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(t,e)||this._cmp(t,e)===0&&(n||a)&&(!n||!a)?on(this):new this.Collection(this,function(){return De(t,e,!n,!a)})}catch{return me(this,Ae)}},re.prototype.equals=function(t){return t==null?me(this,Ae):new this.Collection(this,function(){return fi(t)})},re.prototype.above=function(t){return t==null?me(this,Ae):new this.Collection(this,function(){return De(t,void 0,!0)})},re.prototype.aboveOrEqual=function(t){return t==null?me(this,Ae):new this.Collection(this,function(){return De(t,void 0,!1)})},re.prototype.below=function(t){return t==null?me(this,Ae):new this.Collection(this,function(){return De(void 0,t,!1,!0)})},re.prototype.belowOrEqual=function(t){return t==null?me(this,Ae):new this.Collection(this,function(){return De(void 0,t)})},re.prototype.startsWith=function(t){return typeof t!="string"?me(this,ni):this.between(t,t+Ke,!0,!0)},re.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):Kn(this,function(e,n){return e.indexOf(n[0])===0},[t],Ke)},re.prototype.equalsIgnoreCase=function(t){return Kn(this,function(e,n){return e===n[0]},[t],"")},re.prototype.anyOfIgnoreCase=function(){var t=Pt.apply(st,arguments);return t.length===0?on(this):Kn(this,function(e,n){return n.indexOf(e)!==-1},t,"")},re.prototype.startsWithAnyOfIgnoreCase=function(){var t=Pt.apply(st,arguments);return t.length===0?on(this):Kn(this,function(e,n){return n.some(function(a){return e.indexOf(a)===0})},t,Ke)},re.prototype.anyOf=function(){var t=this,e=Pt.apply(st,arguments),n=this._cmp;try{e.sort(n)}catch{return me(this,Ae)}if(e.length===0)return on(this);var a=new this.Collection(this,function(){return De(e[0],e[e.length-1])});a._ondirectionchange=function(p){n=p==="next"?t._ascending:t._descending,e.sort(n)};var o=0;return a._addAlgorithm(function(p,w,O){for(var I=p.key;0<n(I,e[o]);)if(++o===e.length)return w(O),!1;return n(I,e[o])===0||(w(function(){p.continue(e[o])}),!1)}),a},re.prototype.notEqual=function(t){return this.inAnyRange([[-1/0,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},re.prototype.noneOf=function(){var t=Pt.apply(st,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return me(this,Ae)}var e=t.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return e.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(e,{includeLowers:!1,includeUppers:!1})},re.prototype.inAnyRange=function(q,e){var n=this,a=this._cmp,o=this._ascending,p=this._descending,w=this._min,O=this._max;if(q.length===0)return on(this);if(!q.every(function(Z){return Z[0]!==void 0&&Z[1]!==void 0&&o(Z[0],Z[1])<=0}))return me(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",mt.InvalidArgument);var I=!e||e.includeLowers!==!1,B=e&&e.includeUppers===!0,F,T=o;function L(Z,J){return T(Z[0],J[0])}try{(F=q.reduce(function(Z,J){for(var rt=0,ft=Z.length;rt<ft;++rt){var bt=Z[rt];if(a(J[0],bt[1])<0&&0<a(J[1],bt[0])){bt[0]=w(bt[0],J[0]),bt[1]=O(bt[1],J[1]);break}}return rt===ft&&Z.push(J),Z},[])).sort(L)}catch{return me(this,Ae)}var z=0,j=B?function(Z){return 0<o(Z,F[z][1])}:function(Z){return 0<=o(Z,F[z][1])},M=I?function(Z){return 0<p(Z,F[z][0])}:function(Z){return 0<=p(Z,F[z][0])},U=j,q=new this.Collection(this,function(){return De(F[0][0],F[F.length-1][1],!I,!B)});return q._ondirectionchange=function(Z){T=Z==="next"?(U=j,o):(U=M,p),F.sort(L)},q._addAlgorithm(function(Z,J,rt){for(var ft,bt=Z.key;U(bt);)if(++z===F.length)return J(rt),!1;return!j(ft=bt)&&!M(ft)||(n._cmp(bt,F[z][1])===0||n._cmp(bt,F[z][0])===0||J(function(){T===o?Z.continue(F[z][0]):Z.continue(F[z][1])}),!1)}),q},re.prototype.startsWithAnyOf=function(){var t=Pt.apply(st,arguments);return t.every(function(e){return typeof e=="string"})?t.length===0?on(this):this.inAnyRange(t.map(function(e){return[e,e+Ke]})):me(this,"startsWithAnyOf() only works with strings")},re);function re(){}function _e(t){return Zt(function(e){return yn(e),t(e.target.error),!1})}function yn(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}var bn="storagemutated",br="x-storagemutated-1",je=gn(null,bn),ka=(xe.prototype._lock=function(){return W(!St.global),++this._reculock,this._reculock!==1||St.global||(St.lockOwnerFor=this),this},xe.prototype._unlock=function(){if(W(!St.global),--this._reculock==0)for(St.global||(St.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var t=this._blockedFuncs.shift();try{Le(t[1],t[0])}catch{}}return this},xe.prototype._locked=function(){return this._reculock&&St.lockOwnerFor!==this},xe.prototype.create=function(t){var e=this;if(!this.mode)return this;var n=this.db.idbdb,a=this.db._state.dbOpenError;if(W(!this.idbtrans),!t&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new mt.DatabaseClosed(a);case"MissingAPIError":throw new mt.MissingAPI(a.message,a);default:throw new mt.OpenFailed(a)}if(!this.active)throw new mt.TransactionInactive;return W(this._completion._state===null),(t=this.idbtrans=t||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Zt(function(o){yn(o),e._reject(t.error)}),t.onabort=Zt(function(o){yn(o),e.active&&e._reject(new mt.Abort(t.error)),e.active=!1,e.on("abort").fire(o)}),t.oncomplete=Zt(function(){e.active=!1,e._resolve(),"mutatedParts"in t&&je.storagemutated.fire(t.mutatedParts)}),this},xe.prototype._promise=function(t,e,n){var a=this;if(t==="readwrite"&&this.mode!=="readwrite")return Yt(new mt.ReadOnly("Transaction is readonly"));if(!this.active)return Yt(new mt.TransactionInactive);if(this._locked())return new _t(function(p,w){a._blockedFuncs.push([function(){a._promise(t,e,n).then(p,w)},St])});if(n)return Ie(function(){var p=new _t(function(w,O){a._lock();var I=e(w,O,a);I&&I.then&&I.then(w,O)});return p.finally(function(){return a._unlock()}),p._lib=!0,p});var o=new _t(function(p,w){var O=e(p,w,a);O&&O.then&&O.then(p,w)});return o._lib=!0,o},xe.prototype._root=function(){return this.parent?this.parent._root():this},xe.prototype.waitFor=function(t){var e,n=this._root(),a=_t.resolve(t);n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],e=n.idbtrans.objectStore(n.storeNames[0]),(function p(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(e.get(-1/0).onsuccess=p)})());var o=n._waitingFor;return new _t(function(p,w){a.then(function(O){return n._waitingQueue.push(Zt(p.bind(null,O)))},function(O){return n._waitingQueue.push(Zt(w.bind(null,O)))}).finally(function(){n._waitingFor===o&&(n._waitingFor=null)})})},xe.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new mt.Abort))},xe.prototype.table=function(t){var e=this._memoizedTables||(this._memoizedTables={});if(x(e,t))return e[t];var n=this.schema[t];if(!n)throw new mt.NotFound("Table "+t+" not part of transaction");return n=new this.db.Table(t,n,this),n.core=this.db.core.table(t),e[t]=n},xe);function xe(){}function wr(t,e,n,a,o,p,w,O){return{name:t,keyPath:e,unique:n,multi:a,auto:o,compound:p,src:(n&&!w?"&":"")+(a?"*":"")+(o?"++":"")+mi(e),type:O}}function mi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function _r(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:(a=function(o){return[o.name,o]},n.reduce(function(o,p,w){return w=a(p,w),w&&(o[w[0]]=w[1]),o},{}))};var a}var wn=function(t){try{return t.only([[]]),wn=function(){return[[]]},[[]]}catch{return wn=function(){return Ke},Ke}};function xr(t){return t==null?function(){}:typeof t=="string"?(e=t).split(".").length===1?function(n){return n[e]}:function(n){return nt(n,e)}:function(n){return nt(n,t)};var e}function gi(t){return[].slice.call(t)}var Sa=0;function _n(t){return t==null?":id":typeof t=="string"?t:"[".concat(t.join("+"),"]")}function Ca(t,e,I){function a(U){if(U.type===3)return null;if(U.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var z=U.lower,j=U.upper,M=U.lowerOpen,U=U.upperOpen;return z===void 0?j===void 0?null:e.upperBound(j,!!U):j===void 0?e.lowerBound(z,!!M):e.bound(z,j,!!M,!!U)}function o(L){var z,j=L.name;return{name:j,schema:L,mutate:function(M){var U=M.trans,q=M.type,Z=M.keys,J=M.values,rt=M.range;return new Promise(function(ft,bt){ft=Zt(ft);var ht=U.objectStore(j),gt=ht.keyPath==null,wt=q==="put"||q==="add";if(!wt&&q!=="delete"&&q!=="deleteRange")throw new Error("Invalid operation type: "+q);var yt,Ct=(Z||J||{length:1}).length;if(Z&&J&&Z.length!==J.length)throw new Error("Given keys array must have same length as given values array.");if(Ct===0)return ft({numFailures:0,failures:{},results:[],lastResult:void 0});function It(he){++ge,yn(he)}var Bt=[],jt=[],ge=0;if(q==="deleteRange"){if(rt.type===4)return ft({numFailures:ge,failures:jt,results:[],lastResult:void 0});rt.type===3?Bt.push(yt=ht.clear()):Bt.push(yt=ht.delete(a(rt)))}else{var gt=wt?gt?[J,Z]:[J,null]:[Z,null],$t=gt[0],se=gt[1];if(wt)for(var le=0;le<Ct;++le)Bt.push(yt=se&&se[le]!==void 0?ht[q]($t[le],se[le]):ht[q]($t[le])),yt.onerror=It;else for(le=0;le<Ct;++le)Bt.push(yt=ht[q]($t[le])),yt.onerror=It}function er(he){he=he.target.result,Bt.forEach(function(Ze,Nr){return Ze.error!=null&&(jt[Nr]=Ze.error)}),ft({numFailures:ge,failures:jt,results:q==="delete"?Z:Bt.map(function(Ze){return Ze.result}),lastResult:he})}yt.onerror=function(he){It(he),er(he)},yt.onsuccess=er})},getMany:function(M){var U=M.trans,q=M.keys;return new Promise(function(Z,J){Z=Zt(Z);for(var rt,ft=U.objectStore(j),bt=q.length,ht=new Array(bt),gt=0,wt=0,yt=function(Bt){Bt=Bt.target,ht[Bt._pos]=Bt.result,++wt===gt&&Z(ht)},Ct=_e(J),It=0;It<bt;++It)q[It]!=null&&((rt=ft.get(q[It]))._pos=It,rt.onsuccess=yt,rt.onerror=Ct,++gt);gt===0&&Z(ht)})},get:function(M){var U=M.trans,q=M.key;return new Promise(function(Z,J){Z=Zt(Z);var rt=U.objectStore(j).get(q);rt.onsuccess=function(ft){return Z(ft.target.result)},rt.onerror=_e(J)})},query:(z=B,function(M){return new Promise(function(U,q){U=Zt(U);var Z,J,rt,gt=M.trans,ft=M.values,bt=M.limit,yt=M.query,ht=bt===1/0?void 0:bt,wt=yt.index,yt=yt.range,gt=gt.objectStore(j),wt=wt.isPrimaryKey?gt:gt.index(wt.name),yt=a(yt);if(bt===0)return U({result:[]});z?((ht=ft?wt.getAll(yt,ht):wt.getAllKeys(yt,ht)).onsuccess=function(Ct){return U({result:Ct.target.result})},ht.onerror=_e(q)):(Z=0,J=!ft&&"openKeyCursor"in wt?wt.openKeyCursor(yt):wt.openCursor(yt),rt=[],J.onsuccess=function(Ct){var It=J.result;return It?(rt.push(ft?It.value:It.primaryKey),++Z===bt?U({result:rt}):void It.continue()):U({result:rt})},J.onerror=_e(q))})}),openCursor:function(M){var U=M.trans,q=M.values,Z=M.query,J=M.reverse,rt=M.unique;return new Promise(function(ft,bt){ft=Zt(ft);var wt=Z.index,ht=Z.range,gt=U.objectStore(j),gt=wt.isPrimaryKey?gt:gt.index(wt.name),wt=J?rt?"prevunique":"prev":rt?"nextunique":"next",yt=!q&&"openKeyCursor"in gt?gt.openKeyCursor(a(ht),wt):gt.openCursor(a(ht),wt);yt.onerror=_e(bt),yt.onsuccess=Zt(function(Ct){var It,Bt,jt,ge,$t=yt.result;$t?($t.___id=++Sa,$t.done=!1,It=$t.continue.bind($t),Bt=(Bt=$t.continuePrimaryKey)&&Bt.bind($t),jt=$t.advance.bind($t),ge=function(){throw new Error("Cursor not stopped")},$t.trans=U,$t.stop=$t.continue=$t.continuePrimaryKey=$t.advance=function(){throw new Error("Cursor not started")},$t.fail=Zt(bt),$t.next=function(){var se=this,le=1;return this.start(function(){return le--?se.continue():se.stop()}).then(function(){return se})},$t.start=function(se){function le(){if(yt.result)try{se()}catch(he){$t.fail(he)}else $t.done=!0,$t.start=function(){throw new Error("Cursor behind last entry")},$t.stop()}var er=new Promise(function(he,Ze){he=Zt(he),yt.onerror=_e(Ze),$t.fail=Ze,$t.stop=function(Nr){$t.stop=$t.continue=$t.continuePrimaryKey=$t.advance=ge,he(Nr)}});return yt.onsuccess=Zt(function(he){yt.onsuccess=le,le()}),$t.continue=It,$t.continuePrimaryKey=Bt,$t.advance=jt,le(),er},ft($t)):ft(null)},bt)})},count:function(M){var U=M.query,q=M.trans,Z=U.index,J=U.range;return new Promise(function(rt,ft){var bt=q.objectStore(j),ht=Z.isPrimaryKey?bt:bt.index(Z.name),bt=a(J),ht=bt?ht.count(bt):ht.count();ht.onsuccess=Zt(function(gt){return rt(gt.target.result)}),ht.onerror=_e(ft)})}}}var p,w,O,F=(w=I,O=gi((p=t).objectStoreNames),{schema:{name:p.name,tables:O.map(function(L){return w.objectStore(L)}).map(function(L){var z=L.keyPath,U=L.autoIncrement,j=h(z),M={},U={name:L.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:z==null,compound:j,keyPath:z,autoIncrement:U,unique:!0,extractKey:xr(z)},indexes:gi(L.indexNames).map(function(q){return L.index(q)}).map(function(rt){var Z=rt.name,J=rt.unique,ft=rt.multiEntry,rt=rt.keyPath,ft={name:Z,compound:h(rt),keyPath:rt,unique:J,multiEntry:ft,extractKey:xr(rt)};return M[_n(rt)]=ft}),getIndexByKeyPath:function(q){return M[_n(q)]}};return M[":id"]=U.primaryKey,z!=null&&(M[_n(z)]=U.primaryKey),U})},hasGetAll:0<O.length&&"getAll"in w.objectStore(O[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),I=F.schema,B=F.hasGetAll,F=I.tables.map(o),T={};return F.forEach(function(L){return T[L.name]=L}),{stack:"dbcore",transaction:t.transaction.bind(t),table:function(L){if(!T[L])throw new Error("Table '".concat(L,"' not found"));return T[L]},MIN_KEY:-1/0,MAX_KEY:wn(e),schema:I}}function Aa(t,e,n,a){var o=n.IDBKeyRange;return n.indexedDB,{dbcore:(a=Ca(e,o,a),t.dbcore.reduce(function(p,w){return w=w.create,c(c({},p),w(p))},a))}}function qn(t,a){var n=a.db,a=Aa(t._middlewares,n,t._deps,a);t.core=a.dbcore,t.tables.forEach(function(o){var p=o.name;t.core.schema.tables.some(function(w){return w.name===p})&&(o.core=t.core.table(p),t[p]instanceof t.Table&&(t[p].core=o.core))})}function Wn(t,e,n,a){n.forEach(function(o){var p=a[o];e.forEach(function(w){var O=(function I(B,F){return A(B,F)||(B=b(B))&&I(B,F)})(w,o);(!O||"value"in O&&O.value===void 0)&&(w===t.Transaction.prototype||w instanceof t.Transaction?C(w,o,{get:function(){return this.table(o)},set:function(I){v(this,o,{value:I,writable:!0,configurable:!0,enumerable:!0})}}):w[o]=new t.Table(o,p))})})}function kr(t,e){e.forEach(function(n){for(var a in n)n[a]instanceof t.Table&&delete n[a]})}function Ea(t,e){return t._cfg.version-e._cfg.version}function Pa(t,e,n,a){var o=t._dbSchema;n.objectStoreNames.contains("$meta")&&!o.$meta&&(o.$meta=_r("$meta",yi("")[0],[]),t._storeNames.push("$meta"));var p=t._createTransaction("readwrite",t._storeNames,o);p.create(n),p._completion.catch(a);var w=p._reject.bind(p),O=St.transless||St;Ie(function(){return St.trans=p,St.transless=O,e!==0?(qn(t,n),B=e,((I=p).storeNames.includes("$meta")?I.table("$meta").get("version").then(function(F){return F??B}):_t.resolve(B)).then(function(F){return L=F,z=p,j=n,M=[],F=(T=t)._versions,U=T._dbSchema=Zn(0,T.idbdb,j),(F=F.filter(function(q){return q._cfg.version>=L})).length!==0?(F.forEach(function(q){M.push(function(){var Z=U,J=q._cfg.dbschema;Vn(T,Z,j),Vn(T,J,j),U=T._dbSchema=J;var rt=Sr(Z,J);rt.add.forEach(function(wt){Cr(j,wt[0],wt[1].primKey,wt[1].indexes)}),rt.change.forEach(function(wt){if(wt.recreate)throw new mt.Upgrade("Not yet support for changing primary key");var yt=j.objectStore(wt.name);wt.add.forEach(function(Ct){return Hn(yt,Ct)}),wt.change.forEach(function(Ct){yt.deleteIndex(Ct.name),Hn(yt,Ct)}),wt.del.forEach(function(Ct){return yt.deleteIndex(Ct)})});var ft=q._cfg.contentUpgrade;if(ft&&q._cfg.version>L){qn(T,j),z._memoizedTables={};var bt=ut(J);rt.del.forEach(function(wt){bt[wt]=Z[wt]}),kr(T,[T.Transaction.prototype]),Wn(T,[T.Transaction.prototype],d(bt),bt),z.schema=bt;var ht,gt=Y(ft);return gt&&nn(),rt=_t.follow(function(){var wt;(ht=ft(z))&&gt&&(wt=Be.bind(null,null),ht.then(wt,wt))}),ht&&typeof ht.then=="function"?_t.resolve(ht):rt.then(function(){return ht})}}),M.push(function(Z){var J,rt,ft=q._cfg.dbschema;J=ft,rt=Z,[].slice.call(rt.db.objectStoreNames).forEach(function(bt){return J[bt]==null&&rt.db.deleteObjectStore(bt)}),kr(T,[T.Transaction.prototype]),Wn(T,[T.Transaction.prototype],T._storeNames,T._dbSchema),z.schema=T._dbSchema}),M.push(function(Z){T.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(T.idbdb.version/10)===q._cfg.version?(T.idbdb.deleteObjectStore("$meta"),delete T._dbSchema.$meta,T._storeNames=T._storeNames.filter(function(J){return J!=="$meta"})):Z.objectStore("$meta").put(q._cfg.version,"version"))})}),(function q(){return M.length?_t.resolve(M.shift()(z.idbtrans)).then(q):_t.resolve()})().then(function(){vi(U,j)})):_t.resolve();var T,L,z,j,M,U}).catch(w)):(d(o).forEach(function(F){Cr(n,F,o[F].primKey,o[F].indexes)}),qn(t,n),void _t.follow(function(){return t.on.populate.fire(p)}).catch(w));var I,B})}function Oa(t,e){vi(t._dbSchema,e),e.db.version%10!=0||e.objectStoreNames.contains("$meta")||e.db.createObjectStore("$meta").add(Math.ceil(e.db.version/10-1),"version");var n=Zn(0,t.idbdb,e);Vn(t,t._dbSchema,e);for(var a=0,o=Sr(n,t._dbSchema).change;a<o.length;a++){var p=(function(w){if(w.change.length||w.recreate)return console.warn("Unable to patch indexes of table ".concat(w.name," because it has changes on the type of index or primary key.")),{value:void 0};var O=e.objectStore(w.name);w.add.forEach(function(I){at&&console.debug("Dexie upgrade patch: Creating missing index ".concat(w.name,".").concat(I.src)),Hn(O,I)})})(o[a]);if(typeof p=="object")return p.value}}function Sr(t,e){var n,a={del:[],add:[],change:[]};for(n in t)e[n]||a.del.push(n);for(n in e){var o=t[n],p=e[n];if(o){var w={name:n,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(o.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||o.primKey.auto!==p.primKey.auto)w.recreate=!0,a.change.push(w);else{var O=o.idxByName,I=p.idxByName,B=void 0;for(B in O)I[B]||w.del.push(B);for(B in I){var F=O[B],T=I[B];F?F.src!==T.src&&w.change.push(T):w.add.push(T)}(0<w.del.length||0<w.add.length||0<w.change.length)&&a.change.push(w)}}else a.add.push([n,p])}return a}function Cr(t,e,n,a){var o=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return a.forEach(function(p){return Hn(o,p)}),o}function vi(t,e){d(t).forEach(function(n){e.db.objectStoreNames.contains(n)||(at&&console.debug("Dexie: Creating missing table",n),Cr(e,n,t[n].primKey,t[n].indexes))})}function Hn(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Zn(t,e,n){var a={};return R(e.objectStoreNames,0).forEach(function(o){for(var p=n.objectStore(o),w=wr(mi(B=p.keyPath),B||"",!0,!1,!!p.autoIncrement,B&&typeof B!="string",!0),O=[],I=0;I<p.indexNames.length;++I){var F=p.index(p.indexNames[I]),B=F.keyPath,F=wr(F.name,B,!!F.unique,!!F.multiEntry,!1,B&&typeof B!="string",!1);O.push(F)}a[o]=_r(o,w,O)}),a}function Vn(t,e,n){for(var a=n.db.objectStoreNames,o=0;o<a.length;++o){var p=a[o],w=n.objectStore(p);t._hasGetAll="getAll"in w;for(var O=0;O<w.indexNames.length;++O){var I=w.indexNames[O],B=w.index(I).keyPath,F=typeof B=="string"?B:"["+R(B).join("+")+"]";!e[p]||(B=e[p].idxByName[F])&&(B.name=I,delete e[p].idxByName[F],e[p].idxByName[I]=B)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&l.WorkerGlobalScope&&l instanceof l.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}function yi(t){return t.split(",").map(function(e,n){var p=e.split(":"),a=(o=p[1])===null||o===void 0?void 0:o.trim(),o=(e=p[0].trim()).replace(/([&*]|\+\+)/g,""),p=/^\[/.test(o)?o.match(/^\[(.*)\]$/)[1].split("+"):o;return wr(o,p||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),h(p),n===0,a)})}var Ra=(sn.prototype._createTableSchema=_r,sn.prototype._parseIndexSyntax=yi,sn.prototype._parseStoresSpec=function(t,e){var n=this;d(t).forEach(function(a){if(t[a]!==null){var o=n._parseIndexSyntax(t[a]),p=o.shift();if(!p)throw new mt.Schema("Invalid schema for table "+a+": "+t[a]);if(p.unique=!0,p.multi)throw new mt.Schema("Primary key cannot be multiEntry*");o.forEach(function(w){if(w.auto)throw new mt.Schema("Only primary key can be marked as autoIncrement (++)");if(!w.keyPath)throw new mt.Schema("Index must have a name and cannot be an empty string")}),o=n._createTableSchema(a,p,o),e[a]=o}})},sn.prototype.stores=function(n){var e=this.db;this._cfg.storesSource=this._cfg.storesSource?g(this._cfg.storesSource,n):n;var n=e._versions,a={},o={};return n.forEach(function(p){g(a,p._cfg.storesSource),o=p._cfg.dbschema={},p._parseStoresSpec(a,o)}),e._dbSchema=o,kr(e,[e._allTables,e,e.Transaction.prototype]),Wn(e,[e._allTables,e,e.Transaction.prototype,this._cfg.tables],d(o),o),e._storeNames=d(o),this},sn.prototype.upgrade=function(t){return this._cfg.contentUpgrade=ot(this._cfg.contentUpgrade||zt,t),this},sn);function sn(){}function Ar(t,e){var n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Ee(Mn,{addons:[],indexedDB:t,IDBKeyRange:e})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function Er(t){return t&&typeof t.databases=="function"}function Pr(t){return Ie(function(){return St.letThrough=!0,t()})}function Or(t){return!("from"in t)}var oe=function(t,e){if(!this){var n=new oe;return t&&"d"in t&&g(n,t),n}g(this,arguments.length?{d:1,from:t,to:1<arguments.length?e:t}:{d:0})};function xn(t,e,n){var a=Ft(e,n);if(!isNaN(a)){if(0<a)throw RangeError();if(Or(t))return g(t,{from:e,to:n,d:1});var o=t.l,a=t.r;if(Ft(n,t.from)<0)return o?xn(o,e,n):t.l={from:e,to:n,d:1,l:null,r:null},wi(t);if(0<Ft(e,t.to))return a?xn(a,e,n):t.r={from:e,to:n,d:1,l:null,r:null},wi(t);Ft(e,t.from)<0&&(t.from=e,t.l=null,t.d=a?a.d+1:1),0<Ft(n,t.to)&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1),n=!t.r,o&&!t.l&&kn(t,o),a&&n&&kn(t,a)}}function kn(t,e){Or(e)||(function n(a,I){var p=I.from,w=I.to,O=I.l,I=I.r;xn(a,p,w),O&&n(a,O),I&&n(a,I)})(t,e)}function bi(t,e){var n=Yn(e),a=n.next();if(a.done)return!1;for(var o=a.value,p=Yn(t),w=p.next(o.from),O=w.value;!a.done&&!w.done;){if(Ft(O.from,o.to)<=0&&0<=Ft(O.to,o.from))return!0;Ft(o.from,O.from)<0?o=(a=n.next(O.from)).value:O=(w=p.next(o.from)).value}return!1}function Yn(t){var e=Or(t)?null:{s:0,n:t};return{next:function(n){for(var a=0<arguments.length;e;)switch(e.s){case 0:if(e.s=1,a)for(;e.n.l&&Ft(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!a||Ft(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function wi(t){var e,n,a=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),o=1<a?"r":a<-1?"l":"";o&&(e=o=="r"?"l":"r",n=c({},t),a=t[o],t.from=a.from,t.to=a.to,t[o]=a[o],n[o]=a[e],(t[e]=n).d=_i(n)),t.d=_i(t)}function _i(n){var e=n.r,n=n.l;return(e?n?Math.max(e.d,n.d):e.d:n?n.d:0)+1}function Gn(t,e){return d(e).forEach(function(n){t[n]?kn(t[n],e[n]):t[n]=(function a(o){var p,w,O={};for(p in o)x(o,p)&&(w=o[p],O[p]=!w||typeof w!="object"||Ot.has(w.constructor)?w:a(w));return O})(e[n])}),t}function Rr(t,e){return t.all||e.all||Object.keys(t).some(function(n){return e[n]&&bi(e[n],t[n])})}E(oe.prototype,((ye={add:function(t){return kn(this,t),this},addKey:function(t){return xn(this,t,t),this},addKeys:function(t){var e=this;return t.forEach(function(n){return xn(e,n,n)}),this},hasKey:function(t){var e=Yn(this).next(t).value;return e&&Ft(e.from,t)<=0&&0<=Ft(e.to,t)}})[Rt]=function(){return Yn(this)},ye));var We={},Tr={},$r=!1;function Xn(t){Gn(Tr,t),$r||($r=!0,setTimeout(function(){$r=!1,Ir(Tr,!(Tr={}))},0))}function Ir(t,e){e===void 0&&(e=!1);var n=new Set;if(t.all)for(var a=0,o=Object.values(We);a<o.length;a++)xi(w=o[a],t,n,e);else for(var p in t){var w,O=/^idb\:\/\/(.*)\/(.*)\//.exec(p);O&&(p=O[1],O=O[2],(w=We["idb://".concat(p,"/").concat(O)])&&xi(w,t,n,e))}n.forEach(function(I){return I()})}function xi(t,e,n,a){for(var o=[],p=0,w=Object.entries(t.queries.query);p<w.length;p++){for(var O=w[p],I=O[0],B=[],F=0,T=O[1];F<T.length;F++){var L=T[F];Rr(e,L.obsSet)?L.subscribers.forEach(function(U){return n.add(U)}):a&&B.push(L)}a&&o.push([I,B])}if(a)for(var z=0,j=o;z<j.length;z++){var M=j[z],I=M[0],B=M[1];t.queries.query[I]=B}}function Ta(t){var e=t._state,n=t._deps.indexedDB;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(function(){return e.dbOpenError?Yt(e.dbOpenError):t});e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;var a=e.openCanceller,o=Math.round(10*t.verno),p=!1;function w(){if(e.openCanceller!==a)throw new mt.DatabaseClosed("db.open() was cancelled")}function O(){return new _t(function(L,z){if(w(),!n)throw new mt.MissingAPI;var j=t.name,M=e.autoSchema||!o?n.open(j):n.open(j,o);if(!M)throw new mt.MissingAPI;M.onerror=_e(z),M.onblocked=Zt(t._fireOnBlocked),M.onupgradeneeded=Zt(function(U){var q;F=M.transaction,e.autoSchema&&!t._options.allowEmptyDB?(M.onerror=yn,F.abort(),M.result.close(),(q=n.deleteDatabase(j)).onsuccess=q.onerror=Zt(function(){z(new mt.NoSuchDatabase("Database ".concat(j," doesnt exist")))})):(F.onerror=_e(z),U=U.oldVersion>Math.pow(2,62)?0:U.oldVersion,T=U<1,t.idbdb=M.result,p&&Oa(t,F),Pa(t,U/10,F,z))},z),M.onsuccess=Zt(function(){F=null;var U,q,Z,J,rt,ft=t.idbdb=M.result,bt=R(ft.objectStoreNames);if(0<bt.length)try{var ht=ft.transaction((J=bt).length===1?J[0]:J,"readonly");if(e.autoSchema)q=ft,Z=ht,(U=t).verno=q.version/10,Z=U._dbSchema=Zn(0,q,Z),U._storeNames=R(q.objectStoreNames,0),Wn(U,[U._allTables],d(Z),Z);else if(Vn(t,t._dbSchema,ht),((rt=Sr(Zn(0,(rt=t).idbdb,ht),rt._dbSchema)).add.length||rt.change.some(function(gt){return gt.add.length||gt.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),ft.close(),o=ft.version+1,p=!0,L(O());qn(t,ht)}catch{}rn.push(t),ft.onversionchange=Zt(function(gt){e.vcFired=!0,t.on("versionchange").fire(gt)}),ft.onclose=Zt(function(){t.close({disableAutoOpen:!1})}),T&&(rt=t._deps,ht=j,ft=rt.indexedDB,rt=rt.IDBKeyRange,Er(ft)||ht===Mn||Ar(ft,rt).put({name:ht}).catch(zt)),L()},z)}).catch(function(L){switch(L?.name){case"UnknownError":if(0<e.PR1398_maxLoop)return e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),O();break;case"VersionError":if(0<o)return o=0,O()}return _t.reject(L)})}var I,B=e.dbReadyResolve,F=null,T=!1;return _t.race([a,(typeof navigator>"u"?_t.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(L){function z(){return indexedDB.databases().finally(L)}I=setInterval(z,100),z()}).finally(function(){return clearInterval(I)}):Promise.resolve()).then(O)]).then(function(){return w(),e.onReadyBeingFired=[],_t.resolve(Pr(function(){return t.on.ready.fire(t.vip)})).then(function L(){if(0<e.onReadyBeingFired.length){var z=e.onReadyBeingFired.reduce(ot,zt);return e.onReadyBeingFired=[],_t.resolve(Pr(function(){return z(t.vip)})).then(L)}})}).finally(function(){e.openCanceller===a&&(e.onReadyBeingFired=null,e.isBeingOpened=!1)}).catch(function(L){e.dbOpenError=L;try{F&&F.abort()}catch{}return a===e.openCanceller&&t._close(),Yt(L)}).finally(function(){e.openComplete=!0,B()}).then(function(){var L;return T&&(L={},t.tables.forEach(function(z){z.schema.indexes.forEach(function(j){j.name&&(L["idb://".concat(t.name,"/").concat(z.name,"/").concat(j.name)]=new oe(-1/0,[[[]]]))}),L["idb://".concat(t.name,"/").concat(z.name,"/")]=L["idb://".concat(t.name,"/").concat(z.name,"/:dels")]=new oe(-1/0,[[[]]])}),je(bn).fire(L),Ir(L,!0)),t})}function Br(t){function e(p){return t.next(p)}var n=o(e),a=o(function(p){return t.throw(p)});function o(p){return function(I){var O=p(I),I=O.value;return O.done?I:I&&typeof I.then=="function"?I.then(n,a):h(I)?Promise.all(I).then(n,a):n(I)}}return o(e)()}function Jn(t,e,n){for(var a=h(t)?t.slice():[t],o=0;o<n;++o)a.push(e);return a}var $a={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return c(c({},t),{table:function(e){var n=t.table(e),a=n.schema,o={},p=[];function w(T,L,z){var j=_n(T),M=o[j]=o[j]||[],U=T==null?0:typeof T=="string"?1:T.length,q=0<L,q=c(c({},z),{name:q?"".concat(j,"(virtual-from:").concat(z.name,")"):z.name,lowLevelIndex:z,isVirtual:q,keyTail:L,keyLength:U,extractKey:xr(T),unique:!q&&z.unique});return M.push(q),q.isPrimaryKey||p.push(q),1<U&&w(U===2?T[0]:T.slice(0,U-1),L+1,z),M.sort(function(Z,J){return Z.keyTail-J.keyTail}),q}e=w(a.primaryKey.keyPath,0,a.primaryKey),o[":id"]=[e];for(var O=0,I=a.indexes;O<I.length;O++){var B=I[O];w(B.keyPath,0,B)}function F(T){var L,z=T.query.index;return z.isVirtual?c(c({},T),{query:{index:z.lowLevelIndex,range:(L=T.query.range,z=z.keyTail,{type:L.type===1?2:L.type,lower:Jn(L.lower,L.lowerOpen?t.MAX_KEY:t.MIN_KEY,z),lowerOpen:!0,upper:Jn(L.upper,L.upperOpen?t.MIN_KEY:t.MAX_KEY,z),upperOpen:!0})}}):T}return c(c({},n),{schema:c(c({},a),{primaryKey:e,indexes:p,getIndexByKeyPath:function(T){return(T=o[_n(T)])&&T[0]}}),count:function(T){return n.count(F(T))},query:function(T){return n.query(F(T))},openCursor:function(T){var L=T.query.index,z=L.keyTail,j=L.isVirtual,M=L.keyLength;return j?n.openCursor(F(T)).then(function(q){return q&&U(q)}):n.openCursor(T);function U(q){return Object.create(q,{continue:{value:function(Z){Z!=null?q.continue(Jn(Z,T.reverse?t.MAX_KEY:t.MIN_KEY,z)):T.unique?q.continue(q.key.slice(0,M).concat(T.reverse?t.MIN_KEY:t.MAX_KEY,z)):q.continue()}},continuePrimaryKey:{value:function(Z,J){q.continuePrimaryKey(Jn(Z,t.MAX_KEY,z),J)}},primaryKey:{get:function(){return q.primaryKey}},key:{get:function(){var Z=q.key;return M===1?Z[0]:Z.slice(0,M)}},value:{get:function(){return q.value}}})}}})}})}};function zr(t,e,n,a){return n=n||{},a=a||"",d(t).forEach(function(o){var p,w,O;x(e,o)?(p=t[o],w=e[o],typeof p=="object"&&typeof w=="object"&&p&&w?(O=it(p))!==it(w)?n[a+o]=e[o]:O==="Object"?zr(p,w,n,a+o+"."):p!==w&&(n[a+o]=e[o]):p!==w&&(n[a+o]=e[o])):n[a+o]=void 0}),d(e).forEach(function(o){x(t,o)||(n[a+o]=e[o])}),n}function Dr(t,e){return e.type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}var Ia={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(t){return c(c({},t),{table:function(e){var n=t.table(e),a=n.schema.primaryKey;return c(c({},n),{mutate:function(o){var p=St.trans,w=p.table(e).hook,O=w.deleting,I=w.creating,B=w.updating;switch(o.type){case"add":if(I.fire===zt)break;return p._promise("readwrite",function(){return F(o)},!0);case"put":if(I.fire===zt&&B.fire===zt)break;return p._promise("readwrite",function(){return F(o)},!0);case"delete":if(O.fire===zt)break;return p._promise("readwrite",function(){return F(o)},!0);case"deleteRange":if(O.fire===zt)break;return p._promise("readwrite",function(){return(function T(L,z,j){return n.query({trans:L,values:!1,query:{index:a,range:z},limit:j}).then(function(M){var U=M.result;return F({type:"delete",keys:U,trans:L}).then(function(q){return 0<q.numFailures?Promise.reject(q.failures[0]):U.length<j?{failures:[],numFailures:0,lastResult:void 0}:T(L,c(c({},z),{lower:U[U.length-1],lowerOpen:!0}),j)})})})(o.trans,o.range,1e4)},!0)}return n.mutate(o);function F(T){var L,z,j,M=St.trans,U=T.keys||Dr(a,T);if(!U)throw new Error("Keys missing");return(T=T.type==="add"||T.type==="put"?c(c({},T),{keys:U}):c({},T)).type!=="delete"&&(T.values=s([],T.values)),T.keys&&(T.keys=s([],T.keys)),L=n,j=U,((z=T).type==="add"?Promise.resolve([]):L.getMany({trans:z.trans,keys:j,cache:"immutable"})).then(function(q){var Z=U.map(function(J,rt){var ft,bt,ht,gt=q[rt],wt={onerror:null,onsuccess:null};return T.type==="delete"?O.fire.call(wt,J,gt,M):T.type==="add"||gt===void 0?(ft=I.fire.call(wt,J,T.values[rt],M),J==null&&ft!=null&&(T.keys[rt]=J=ft,a.outbound||X(T.values[rt],a.keyPath,J))):(ft=zr(gt,T.values[rt]),(bt=B.fire.call(wt,ft,J,gt,M))&&(ht=T.values[rt],Object.keys(bt).forEach(function(yt){x(ht,yt)?ht[yt]=bt[yt]:X(ht,yt,bt[yt])}))),wt});return n.mutate(T).then(function(J){for(var rt=J.failures,ft=J.results,bt=J.numFailures,J=J.lastResult,ht=0;ht<U.length;++ht){var gt=(ft||U)[ht],wt=Z[ht];gt==null?wt.onerror&&wt.onerror(rt[ht]):wt.onsuccess&&wt.onsuccess(T.type==="put"&&q[ht]?T.values[ht]:gt)}return{failures:rt,results:ft,numFailures:bt,lastResult:J}}).catch(function(J){return Z.forEach(function(rt){return rt.onerror&&rt.onerror(J)}),Promise.reject(J)})})}}})}})}};function ki(t,e,n){try{if(!e||e.keys.length<t.length)return null;for(var a=[],o=0,p=0;o<e.keys.length&&p<t.length;++o)Ft(e.keys[o],t[p])===0&&(a.push(n?Q(e.values[o]):e.values[o]),++p);return a.length===t.length?a:null}catch{return null}}var Ba={stack:"dbcore",level:-1,create:function(t){return{table:function(e){var n=t.table(e);return c(c({},n),{getMany:function(a){if(!a.cache)return n.getMany(a);var o=ki(a.keys,a.trans._cache,a.cache==="clone");return o?_t.resolve(o):n.getMany(a).then(function(p){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?Q(p):p},p})},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Si(t,e){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!e.schema.primaryKey.outbound}function Ci(t,e){switch(t){case"query":return e.values&&!e.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var za={stack:"dbcore",level:0,name:"Observability",create:function(t){var e=t.schema.name,n=new oe(t.MIN_KEY,t.MAX_KEY);return c(c({},t),{transaction:function(a,o,p){if(St.subscr&&o!=="readonly")throw new mt.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(St.querier));return t.transaction(a,o,p)},table:function(a){var o=t.table(a),p=o.schema,w=p.primaryKey,T=p.indexes,O=w.extractKey,I=w.outbound,B=w.autoIncrement&&T.filter(function(z){return z.compound&&z.keyPath.includes(w.keyPath)}),F=c(c({},o),{mutate:function(z){function j(yt){return yt="idb://".concat(e,"/").concat(a,"/").concat(yt),J[yt]||(J[yt]=new oe)}var M,U,q,Z=z.trans,J=z.mutatedParts||(z.mutatedParts={}),rt=j(""),ft=j(":dels"),bt=z.type,wt=z.type==="deleteRange"?[z.range]:z.type==="delete"?[z.keys]:z.values.length<50?[Dr(w,z).filter(function(yt){return yt}),z.values]:[],ht=wt[0],gt=wt[1],wt=z.trans._cache;return h(ht)?(rt.addKeys(ht),(wt=bt==="delete"||ht.length===gt.length?ki(ht,wt):null)||ft.addKeys(ht),(wt||gt)&&(M=j,U=wt,q=gt,p.indexes.forEach(function(yt){var Ct=M(yt.name||"");function It(jt){return jt!=null?yt.extractKey(jt):null}function Bt(jt){return yt.multiEntry&&h(jt)?jt.forEach(function(ge){return Ct.addKey(ge)}):Ct.addKey(jt)}(U||q).forEach(function(jt,se){var $t=U&&It(U[se]),se=q&&It(q[se]);Ft($t,se)!==0&&($t!=null&&Bt($t),se!=null&&Bt(se))})}))):ht?(gt={from:(gt=ht.lower)!==null&&gt!==void 0?gt:t.MIN_KEY,to:(gt=ht.upper)!==null&&gt!==void 0?gt:t.MAX_KEY},ft.add(gt),rt.add(gt)):(rt.add(n),ft.add(n),p.indexes.forEach(function(yt){return j(yt.name).add(n)})),o.mutate(z).then(function(yt){return!ht||z.type!=="add"&&z.type!=="put"||(rt.addKeys(yt.results),B&&B.forEach(function(Ct){for(var It=z.values.map(function($t){return Ct.extractKey($t)}),Bt=Ct.keyPath.findIndex(function($t){return $t===w.keyPath}),jt=0,ge=yt.results.length;jt<ge;++jt)It[jt][Bt]=yt.results[jt];j(Ct.name).addKeys(It)})),Z.mutatedParts=Gn(Z.mutatedParts||{},J),yt})}}),T=function(j){var M=j.query,j=M.index,M=M.range;return[j,new oe((j=M.lower)!==null&&j!==void 0?j:t.MIN_KEY,(M=M.upper)!==null&&M!==void 0?M:t.MAX_KEY)]},L={get:function(z){return[w,new oe(z.key)]},getMany:function(z){return[w,new oe().addKeys(z.keys)]},count:T,query:T,openCursor:T};return d(L).forEach(function(z){F[z]=function(j){var M=St.subscr,U=!!M,q=Si(St,o)&&Ci(z,j)?j.obsSet={}:M;if(U){var Z=function(gt){return gt="idb://".concat(e,"/").concat(a,"/").concat(gt),q[gt]||(q[gt]=new oe)},J=Z(""),rt=Z(":dels"),M=L[z](j),U=M[0],M=M[1];if((z==="query"&&U.isPrimaryKey&&!j.values?rt:Z(U.name||"")).add(M),!U.isPrimaryKey){if(z!=="count"){var ft=z==="query"&&I&&j.values&&o.query(c(c({},j),{values:!1}));return o[z].apply(this,arguments).then(function(gt){if(z==="query"){if(I&&j.values)return ft.then(function(It){return It=It.result,J.addKeys(It),gt});var wt=j.values?gt.result.map(O):gt.result;(j.values?J:rt).addKeys(wt)}else if(z==="openCursor"){var yt=gt,Ct=j.values;return yt&&Object.create(yt,{key:{get:function(){return rt.addKey(yt.primaryKey),yt.key}},primaryKey:{get:function(){var It=yt.primaryKey;return rt.addKey(It),It}},value:{get:function(){return Ct&&J.addKey(yt.primaryKey),yt.value}}})}return gt})}rt.add(n)}}return o[z].apply(this,arguments)}}),F}})}};function Ai(t,e,n){if(n.numFailures===0)return e;if(e.type==="deleteRange")return null;var a=e.keys?e.keys.length:"values"in e&&e.values?e.values.length:1;return n.numFailures===a?null:(e=c({},e),h(e.keys)&&(e.keys=e.keys.filter(function(o,p){return!(p in n.failures)})),"values"in e&&h(e.values)&&(e.values=e.values.filter(function(o,p){return!(p in n.failures)})),e)}function jr(t,e){return n=t,((a=e).lower===void 0||(a.lowerOpen?0<Ft(n,a.lower):0<=Ft(n,a.lower)))&&(t=t,(e=e).upper===void 0||(e.upperOpen?Ft(t,e.upper)<0:Ft(t,e.upper)<=0));var n,a}function Ei(t,e,L,a,o,p){if(!L||L.length===0)return t;var w=e.query.index,O=w.multiEntry,I=e.query.range,B=a.schema.primaryKey.extractKey,F=w.extractKey,T=(w.lowLevelIndex||w).extractKey,L=L.reduce(function(z,j){var M=z,U=[];if(j.type==="add"||j.type==="put")for(var q=new oe,Z=j.values.length-1;0<=Z;--Z){var J,rt=j.values[Z],ft=B(rt);q.hasKey(ft)||(J=F(rt),(O&&h(J)?J.some(function(yt){return jr(yt,I)}):jr(J,I))&&(q.addKey(ft),U.push(rt)))}switch(j.type){case"add":var bt=new oe().addKeys(e.values?z.map(function(Ct){return B(Ct)}):z),M=z.concat(e.values?U.filter(function(Ct){return Ct=B(Ct),!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}):U.map(function(Ct){return B(Ct)}).filter(function(Ct){return!bt.hasKey(Ct)&&(bt.addKey(Ct),!0)}));break;case"put":var ht=new oe().addKeys(j.values.map(function(Ct){return B(Ct)}));M=z.filter(function(Ct){return!ht.hasKey(e.values?B(Ct):Ct)}).concat(e.values?U:U.map(function(Ct){return B(Ct)}));break;case"delete":var gt=new oe().addKeys(j.keys);M=z.filter(function(Ct){return!gt.hasKey(e.values?B(Ct):Ct)});break;case"deleteRange":var wt=j.range;M=z.filter(function(Ct){return!jr(B(Ct),wt)})}return M},t);return L===t?t:(L.sort(function(z,j){return Ft(T(z),T(j))||Ft(B(z),B(j))}),e.limit&&e.limit<1/0&&(L.length>e.limit?L.length=e.limit:t.length===e.limit&&L.length<e.limit&&(o.dirty=!0)),p?Object.freeze(L):L)}function Pi(t,e){return Ft(t.lower,e.lower)===0&&Ft(t.upper,e.upper)===0&&!!t.lowerOpen==!!e.lowerOpen&&!!t.upperOpen==!!e.upperOpen}function Da(t,e){return(function(n,a,o,p){if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((a=Ft(n,a))===0){if(o&&p)return 0;if(o)return 1;if(p)return-1}return a})(t.lower,e.lower,t.lowerOpen,e.lowerOpen)<=0&&0<=(function(n,a,o,p){if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((a=Ft(n,a))===0){if(o&&p)return 0;if(o)return-1;if(p)return 1}return a})(t.upper,e.upper,t.upperOpen,e.upperOpen)}function ja(t,e,n,a){t.subscribers.add(n),a.addEventListener("abort",function(){var o,p;t.subscribers.delete(n),t.subscribers.size===0&&(o=t,p=e,setTimeout(function(){o.subscribers.size===0&&Tt(p,o)},3e3))})}var Ma={stack:"dbcore",level:0,name:"Cache",create:function(t){var e=t.schema.name;return c(c({},t),{transaction:function(n,a,o){var p,w,O=t.transaction(n,a,o);return a==="readwrite"&&(w=(p=new AbortController).signal,o=function(I){return function(){if(p.abort(),a==="readwrite"){for(var B=new Set,F=0,T=n;F<T.length;F++){var L=T[F],z=We["idb://".concat(e,"/").concat(L)];if(z){var j=t.table(L),M=z.optimisticOps.filter(function(Ct){return Ct.trans===O});if(O._explicit&&I&&O.mutatedParts)for(var U=0,q=Object.values(z.queries.query);U<q.length;U++)for(var Z=0,J=(bt=q[U]).slice();Z<J.length;Z++)Rr((ht=J[Z]).obsSet,O.mutatedParts)&&(Tt(bt,ht),ht.subscribers.forEach(function(Ct){return B.add(Ct)}));else if(0<M.length){z.optimisticOps=z.optimisticOps.filter(function(Ct){return Ct.trans!==O});for(var rt=0,ft=Object.values(z.queries.query);rt<ft.length;rt++)for(var bt,ht,gt,wt=0,yt=(bt=ft[rt]).slice();wt<yt.length;wt++)(ht=yt[wt]).res!=null&&O.mutatedParts&&(I&&!ht.dirty?(gt=Object.isFrozen(ht.res),gt=Ei(ht.res,ht.req,M,j,ht,gt),ht.dirty?(Tt(bt,ht),ht.subscribers.forEach(function(Ct){return B.add(Ct)})):gt!==ht.res&&(ht.res=gt,ht.promise=_t.resolve({result:gt}))):(ht.dirty&&Tt(bt,ht),ht.subscribers.forEach(function(Ct){return B.add(Ct)})))}}}B.forEach(function(Ct){return Ct()})}}},O.addEventListener("abort",o(!1),{signal:w}),O.addEventListener("error",o(!1),{signal:w}),O.addEventListener("complete",o(!0),{signal:w})),O},table:function(n){var a=t.table(n),o=a.schema.primaryKey;return c(c({},a),{mutate:function(p){var w=St.trans;if(o.outbound||w.db._options.cache==="disabled"||w.explicit||w.idbtrans.mode!=="readwrite")return a.mutate(p);var O=We["idb://".concat(e,"/").concat(n)];return O?(w=a.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||Dr(o,p).some(function(I){return I==null}))?(O.optimisticOps.push(p),p.mutatedParts&&Xn(p.mutatedParts),w.then(function(I){0<I.numFailures&&(Tt(O.optimisticOps,p),(I=Ai(0,p,I))&&O.optimisticOps.push(I),p.mutatedParts&&Xn(p.mutatedParts))}),w.catch(function(){Tt(O.optimisticOps,p),p.mutatedParts&&Xn(p.mutatedParts)})):w.then(function(I){var B=Ai(0,c(c({},p),{values:p.values.map(function(F,T){var L;return I.failures[T]?F:(F=(L=o.keyPath)!==null&&L!==void 0&&L.includes(".")?Q(F):c({},F),X(F,o.keyPath,I.results[T]),F)})}),I);O.optimisticOps.push(B),queueMicrotask(function(){return p.mutatedParts&&Xn(p.mutatedParts)})}),w):a.mutate(p)},query:function(p){if(!Si(St,a)||!Ci("query",p))return a.query(p);var w=((B=St.trans)===null||B===void 0?void 0:B.db._options.cache)==="immutable",T=St,O=T.requery,I=T.signal,B=(function(j,M,U,q){var Z=We["idb://".concat(j,"/").concat(M)];if(!Z)return[];if(!(M=Z.queries[U]))return[null,!1,Z,null];var J=M[(q.query?q.query.index.name:null)||""];if(!J)return[null,!1,Z,null];switch(U){case"query":var rt=J.find(function(ft){return ft.req.limit===q.limit&&ft.req.values===q.values&&Pi(ft.req.query.range,q.query.range)});return rt?[rt,!0,Z,J]:[J.find(function(ft){return("limit"in ft.req?ft.req.limit:1/0)>=q.limit&&(!q.values||ft.req.values)&&Da(ft.req.query.range,q.query.range)}),!1,Z,J];case"count":return rt=J.find(function(ft){return Pi(ft.req.query.range,q.query.range)}),[rt,!!rt,Z,J]}})(e,n,"query",p),F=B[0],T=B[1],L=B[2],z=B[3];return F&&T?F.obsSet=p.obsSet:(T=a.query(p).then(function(j){var M=j.result;if(F&&(F.res=M),w){for(var U=0,q=M.length;U<q;++U)Object.freeze(M[U]);Object.freeze(M)}else j.result=Q(M);return j}).catch(function(j){return z&&F&&Tt(z,F),Promise.reject(j)}),F={obsSet:p.obsSet,promise:T,subscribers:new Set,type:"query",req:p,dirty:!1},z?z.push(F):(z=[F],(L=L||(We["idb://".concat(e,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=z)),ja(F,z,O,I),F.promise.then(function(j){return{result:Ei(j.result,p,L?.optimisticOps,a,F,w)}})}})}})}};function Qn(t,e){return new Proxy(t,{get:function(n,a,o){return a==="db"?e:Reflect.get(n,a,o)}})}var Ee=(Gt.prototype.version=function(t){if(isNaN(t)||t<.1)throw new mt.Type("Given version is not a positive number");if(t=Math.round(10*t)/10,this.idbdb||this._state.isBeingOpened)throw new mt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var e=this._versions,n=e.filter(function(a){return a._cfg.version===t})[0];return n||(n=new this.Version(t),e.push(n),e.sort(Ea),n.stores({}),this._state.autoSchema=!1,n)},Gt.prototype._whenReady=function(t){var e=this;return this.idbdb&&(this._state.openComplete||St.letThrough||this._vip)?t():new _t(function(n,a){if(e._state.openComplete)return a(new mt.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return void a(new mt.DatabaseClosed);e.open().catch(zt)}e._state.dbReadyPromise.then(n,a)}).then(t)},Gt.prototype.use=function(t){var e=t.stack,n=t.create,a=t.level,o=t.name;return o&&this.unuse({stack:e,name:o}),t=this._middlewares[e]||(this._middlewares[e]=[]),t.push({stack:e,create:n,level:a??10,name:o}),t.sort(function(p,w){return p.level-w.level}),this},Gt.prototype.unuse=function(t){var e=t.stack,n=t.name,a=t.create;return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(function(o){return a?o.create!==a:!!n&&o.name!==n})),this},Gt.prototype.open=function(){var t=this;return Le(ve,function(){return Ta(t)})},Gt.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state,e=rn.indexOf(this);if(0<=e&&rn.splice(e,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new _t(function(n){t.dbReadyResolve=n}),t.openCanceller=new _t(function(n,a){t.cancelOpen=a}))},Gt.prototype.close=function(n){var e=(n===void 0?{disableAutoOpen:!0}:n).disableAutoOpen,n=this._state;e?(n.isBeingOpened&&n.cancelOpen(new mt.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new mt.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Gt.prototype.delete=function(t){var e=this;t===void 0&&(t={disableAutoOpen:!0});var n=0<arguments.length&&typeof arguments[0]!="object",a=this._state;return new _t(function(o,p){function w(){e.close(t);var O=e._deps.indexedDB.deleteDatabase(e.name);O.onsuccess=Zt(function(){var I,B,F;I=e._deps,B=e.name,F=I.indexedDB,I=I.IDBKeyRange,Er(F)||B===Mn||Ar(F,I).delete(B).catch(zt),o()}),O.onerror=_e(p),O.onblocked=e._fireOnBlocked}if(n)throw new mt.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(w):w()})},Gt.prototype.backendDB=function(){return this.idbdb},Gt.prototype.isOpen=function(){return this.idbdb!==null},Gt.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},Gt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Gt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Gt.prototype,"tables",{get:function(){var t=this;return d(this._allTables).map(function(e){return t._allTables[e]})},enumerable:!1,configurable:!0}),Gt.prototype.transaction=function(){var t=function(e,n,a){var o=arguments.length;if(o<2)throw new mt.InvalidArgument("Too few arguments");for(var p=new Array(o-1);--o;)p[o-1]=arguments[o];return a=p.pop(),[e,pt(p),a]}.apply(this,arguments);return this._transaction.apply(this,t)},Gt.prototype._transaction=function(t,e,n){var a=this,o=St.trans;o&&o.db===this&&t.indexOf("!")===-1||(o=null);var p,w,O=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");try{if(w=e.map(function(B){if(B=B instanceof a.Table?B.name:B,typeof B!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return B}),t=="r"||t===mr)p=mr;else{if(t!="rw"&&t!=gr)throw new mt.InvalidArgument("Invalid transaction mode: "+t);p=gr}if(o){if(o.mode===mr&&p===gr){if(!O)throw new mt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");o=null}o&&w.forEach(function(B){if(o&&o.storeNames.indexOf(B)===-1){if(!O)throw new mt.SubTransaction("Table "+B+" not included in parent transaction.");o=null}}),O&&o&&!o.active&&(o=null)}}catch(B){return o?o._promise(null,function(F,T){T(B)}):Yt(B)}var I=function B(F,T,L,z,j){return _t.resolve().then(function(){var M=St.transless||St,U=F._createTransaction(T,L,F._dbSchema,z);if(U.explicit=!0,M={trans:U,transless:M},z)U.idbtrans=z.idbtrans;else try{U.create(),U.idbtrans._explicit=!0,F._state.PR1398_maxLoop=3}catch(J){return J.name===Xt.InvalidState&&F.isOpen()&&0<--F._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),F.close({disableAutoOpen:!1}),F.open().then(function(){return B(F,T,L,null,j)})):Yt(J)}var q,Z=Y(j);return Z&&nn(),M=_t.follow(function(){var J;(q=j.call(U,U))&&(Z?(J=Be.bind(null,null),q.then(J,J)):typeof q.next=="function"&&typeof q.throw=="function"&&(q=Br(q)))},M),(q&&typeof q.then=="function"?_t.resolve(q).then(function(J){return U.active?J:Yt(new mt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):M.then(function(){return q})).then(function(J){return z&&U._resolve(),U._completion.then(function(){return J})}).catch(function(J){return U._reject(J),Yt(J)})})}.bind(null,this,p,w,o,n);return o?o._promise(p,I,"lock"):St.trans?Le(St.transless,function(){return a._whenReady(I)}):this._whenReady(I)},Gt.prototype.table=function(t){if(!x(this._allTables,t))throw new mt.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},Gt);function Gt(t,e){var n=this;this._middlewares={},this.verno=0;var a=Gt.dependencies;this._options=e=c({addons:Gt.addons,autoOpen:!0,indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange,cache:"cloned"},e),this._deps={indexedDB:e.indexedDB,IDBKeyRange:e.IDBKeyRange},a=e.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var o,p,w,O,I,B={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:zt,dbReadyPromise:null,cancelOpen:zt,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:e.autoOpen};B.dbReadyPromise=new _t(function(T){B.dbReadyResolve=T}),B.openCanceller=new _t(function(T,L){B.cancelOpen=L}),this._state=B,this.name=t,this.on=gn(this,"populate","blocked","versionchange","close",{ready:[ot,zt]}),this.once=function(T,L){var z=function(){for(var j=[],M=0;M<arguments.length;M++)j[M]=arguments[M];n.on(T).unsubscribe(z),L.apply(n,j)};return n.on(T,z)},this.on.ready.subscribe=D(this.on.ready.subscribe,function(T){return function(L,z){Gt.vip(function(){var j,M=n._state;M.openComplete?(M.dbOpenError||_t.resolve().then(L),z&&T(L)):M.onReadyBeingFired?(M.onReadyBeingFired.push(L),z&&T(L)):(T(L),j=n,z||T(function U(){j.on.ready.unsubscribe(L),j.on.ready.unsubscribe(U)}))})}}),this.Collection=(o=this,vn(wa.prototype,function(q,U){this.db=o;var z=ri,j=null;if(U)try{z=U()}catch(Z){j=Z}var M=q._ctx,U=M.table,q=U.hook.reading.fire;this._ctx={table:U,index:M.index,isPrimKey:!M.index||U.schema.primKey.keyPath&&M.index===U.schema.primKey.name,range:z,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:j,or:M.or,valueMapper:q!==ae?q:null}})),this.Table=(p=this,vn(ui.prototype,function(T,L,z){this.db=p,this._tx=z,this.name=T,this.schema=L,this.hook=p._allTables[T]?p._allTables[T].hook:gn(null,{creating:[G,zt],reading:[u,ae],updating:[k,zt],deleting:[P,zt]})})),this.Transaction=(w=this,vn(ka.prototype,function(T,L,z,j,M){var U=this;T!=="readonly"&&L.forEach(function(q){q=(q=z[q])===null||q===void 0?void 0:q.yProps,q&&(L=L.concat(q.map(function(Z){return Z.updatesTable})))}),this.db=w,this.mode=T,this.storeNames=L,this.schema=z,this.chromeTransactionDurability=j,this.idbtrans=null,this.on=gn(this,"complete","error","abort"),this.parent=M||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new _t(function(q,Z){U._resolve=q,U._reject=Z}),this._completion.then(function(){U.active=!1,U.on.complete.fire()},function(q){var Z=U.active;return U.active=!1,U.on.error.fire(q),U.parent?U.parent._reject(q):Z&&U.idbtrans&&U.idbtrans.abort(),Yt(q)})})),this.Version=(O=this,vn(Ra.prototype,function(T){this.db=O,this._cfg={version:T,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(I=this,vn(pi.prototype,function(T,L,z){if(this.db=I,this._ctx={table:T,index:L===":id"?null:L,or:z},this._cmp=this._ascending=Ft,this._descending=function(j,M){return Ft(M,j)},this._max=function(j,M){return 0<Ft(j,M)?j:M},this._min=function(j,M){return Ft(j,M)<0?j:M},this._IDBKeyRange=I._deps.IDBKeyRange,!this._IDBKeyRange)throw new mt.MissingAPI})),this.on("versionchange",function(T){0<T.newVersion?console.warn("Another connection wants to upgrade database '".concat(n.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(n.name,"'. Closing db now to resume the delete request.")),n.close({disableAutoOpen:!1})}),this.on("blocked",function(T){!T.newVersion||T.newVersion<T.oldVersion?console.warn("Dexie.delete('".concat(n.name,"') was blocked")):console.warn("Upgrade '".concat(n.name,"' blocked by other connection holding version ").concat(T.oldVersion/10))}),this._maxKey=wn(e.IDBKeyRange),this._createTransaction=function(T,L,z,j){return new n.Transaction(T,L,z,n._options.chromeTransactionDurability,j)},this._fireOnBlocked=function(T){n.on("blocked").fire(T),rn.filter(function(L){return L.name===n.name&&L!==n&&!L._state.vcFired}).map(function(L){return L.on("versionchange").fire(T)})},this.use(Ba),this.use(Ma),this.use(za),this.use($a),this.use(Ia);var F=new Proxy(this,{get:function(T,L,z){if(L==="_vip")return!0;if(L==="table")return function(M){return Qn(n.table(M),F)};var j=Reflect.get(T,L,z);return j instanceof ui?Qn(j,F):L==="tables"?j.map(function(M){return Qn(M,F)}):L==="_createTransaction"?function(){return Qn(j.apply(this,arguments),F)}:j}});this.vip=F,a.forEach(function(T){return T(n)})}var tr,ye=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Fa=(Mr.prototype.subscribe=function(t,e,n){return this._subscribe(t&&typeof t!="function"?t:{next:t,error:e,complete:n})},Mr.prototype[ye]=function(){return this},Mr);function Mr(t){this._subscribe=t}try{tr={indexedDB:l.indexedDB||l.mozIndexedDB||l.webkitIndexedDB||l.msIndexedDB,IDBKeyRange:l.IDBKeyRange||l.webkitIDBKeyRange}}catch{tr={indexedDB:null,IDBKeyRange:null}}function Oi(t){var e,n=!1,a=new Fa(function(o){var p=Y(t),w,O=!1,I={},B={},F={get closed(){return O},unsubscribe:function(){O||(O=!0,w&&w.abort(),T&&je.storagemutated.unsubscribe(z))}};o.start&&o.start(F);var T=!1,L=function(){return pr(j)},z=function(M){Gn(I,M),Rr(B,I)&&L()},j=function(){var M,U,q;!O&&tr.indexedDB&&(I={},M={},w&&w.abort(),w=new AbortController,q=(function(Z){var J=tn();try{p&&nn();var rt=Ie(t,Z);return rt=p?rt.finally(Be):rt}finally{J&&en()}})(U={subscr:M,signal:w.signal,requery:L,querier:t,trans:null}),Promise.resolve(q).then(function(Z){n=!0,e=Z,O||U.signal.aborted||(I={},(function(J){for(var rt in J)if(x(J,rt))return;return 1})(B=M)||T||(je(bn,z),T=!0),pr(function(){return!O&&o.next&&o.next(Z)}))},function(Z){n=!1,["DatabaseClosedError","AbortError"].includes(Z?.name)||O||pr(function(){O||o.error&&o.error(Z)})}))};return setTimeout(L,0),F});return a.hasValue=function(){return n},a.getValue=function(){return e},a}var He=Ee;function Fr(t){var e=Me;try{Me=!0,je.storagemutated.fire(t),Ir(t,!0)}finally{Me=e}}E(He,c(c({},Kt),{delete:function(t){return new He(t,{addons:[]}).delete()},exists:function(t){return new He(t,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(t){try{return e=He.dependencies,n=e.indexedDB,e=e.IDBKeyRange,(Er(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(o){return o.name}).filter(function(o){return o!==Mn})}):Ar(n,e).toCollection().primaryKeys()).then(t)}catch{return Yt(new mt.MissingAPI)}var e,n},defineClass:function(){return function(t){g(this,t)}},ignoreTransaction:function(t){return St.trans?Le(St.transless,t):t()},vip:Pr,async:function(t){return function(){try{var e=Br(t.apply(this,arguments));return e&&typeof e.then=="function"?e:_t.resolve(e)}catch(n){return Yt(n)}}},spawn:function(t,e,n){try{var a=Br(t.apply(n,e||[]));return a&&typeof a.then=="function"?a:_t.resolve(a)}catch(o){return Yt(o)}},currentTransaction:{get:function(){return St.trans||null}},waitFor:function(t,e){return e=_t.resolve(typeof t=="function"?He.ignoreTransaction(t):t).timeout(e||6e4),St.trans?St.trans.waitFor(e):e},Promise:_t,debug:{get:function(){return at},set:function(t){H(t)}},derive:y,extend:g,props:E,override:D,Events:gn,on:je,liveQuery:Oi,extendObservabilitySet:Gn,getByKeyPath:nt,setByKeyPath:X,delByKeyPath:function(t,e){typeof e=="string"?X(t,e,void 0):"length"in e&&[].map.call(e,function(n){X(t,n,void 0)})},shallowClone:ut,deepClone:Q,getObjectDiff:zr,cmp:Ft,asap:K,minKey:-1/0,addons:[],connections:rn,errnames:Xt,dependencies:tr,cache:We,semVer:"4.2.1",version:"4.2.1".split(".").map(function(t){return parseInt(t)}).reduce(function(t,e,n){return t+e/Math.pow(10,2*n)})})),He.maxKey=wn(He.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(je(bn,function(t){Me||(t=new CustomEvent(br,{detail:t}),Me=!0,dispatchEvent(t),Me=!1)}),addEventListener(br,function(t){t=t.detail,Me||Fr(t)}));var ln,Me=!1,Ri=function(){};return typeof BroadcastChannel<"u"&&((Ri=function(){(ln=new BroadcastChannel(br)).onmessage=function(t){return t.data&&Fr(t.data)}})(),typeof ln.unref=="function"&&ln.unref(),je(bn,function(t){Me||ln.postMessage(t)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(t){if(!Ee.disableBfCache&&t.persisted){at&&console.debug("Dexie: handling persisted pagehide"),ln?.close();for(var e=0,n=rn;e<n.length;e++)n[e].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(t){!Ee.disableBfCache&&t.persisted&&(at&&console.debug("Dexie: handling persisted pageshow"),Ri(),Fr({all:new oe(-1/0,[[]])}))})),_t.rejectionMapper=function(t,e){return!t||t instanceof Et||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Vt[t.name]?t:(e=new Vt[t.name](e||t.message,t),"stack"in t&&C(e,"stack",{get:function(){return this.inner.stack}}),e)},H(at),c(Ee,Object.freeze({__proto__:null,Dexie:Ee,liveQuery:Oi,Entity:ii,cmp:Ft,PropModification:mn,replacePrefix:function(t,e){return new mn({replacePrefix:[t,e]})},add:function(t){return new mn({add:t})},remove:function(t){return new mn({remove:t})},default:Ee,RangeSet:oe,mergeRanges:kn,rangesOverlap:bi}),{default:Ee}),Ee})})(ir)),ir.exports}var xo=_o();const Wr=ea(xo),Ki=Symbol.for("Dexie"),lr=globalThis[Ki]||(globalThis[Ki]=Wr);if(Wr.semVer!==lr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Wr.semVer} and ${lr.semVer}`);const{liveQuery:xs,mergeRanges:ks,rangesOverlap:Ss,RangeSet:Cs,cmp:As,Entity:Es,PropModification:Ps,replacePrefix:Os,add:Rs,remove:Ts,DexieYProvider:$s}=lr;class ko extends lr{constructor(){super("AudioAnnotationDB"),this.version(1).stores({recordings:"id, title, createdAt, isAnnotated",annotations:"recordingId, completedAt, updatedAt"})}}const be=new ko;async function na(f){const{v4:i}=await bo(async()=>{const{v4:s}=await import("./index-gGVEG6Gs.js");return{v4:s}},[]),r=i(),c={...f,id:r,createdAt:Date.now(),isAnnotated:!1};return await be.recordings.add(c),r}async function ra(){return await be.recordings.orderBy("createdAt").reverse().toArray()}async function So(f){return await be.recordings.get(f)}async function Co(f,i){await be.recordings.update(f,i)}async function Ao(f){await be.recordings.delete(f),await be.annotations.delete(f)}async function Lr(f){await be.annotations.put(f),await be.recordings.update(f.recordingId,{isAnnotated:!0})}async function An(f){return await be.annotations.get(f)}async function Eo(f){await be.annotations.delete(f),await be.recordings.update(f,{isAnnotated:!1})}async function Po(){const f=await be.recordings.toArray(),i=/^Untitled (\d+)$/,r=f.map(c=>c.title.match(i)?.[1]).filter(Boolean).map(Number);return r.length>0?Math.max(...r)+1:1}function Oo(f){const i=f.lastIndexOf(".");return i===-1?f:f.substring(0,i)}async function Ro(f){return new Promise((i,r)=>{const c=new Audio,s=URL.createObjectURL(f);c.addEventListener("loadedmetadata",()=>{URL.revokeObjectURL(s),i(c.duration)}),c.addEventListener("error",()=>{URL.revokeObjectURL(s),r(new Error("Failed to load audio metadata"))}),c.src=s})}async function To(f){if(!f.type.startsWith("audio/"))throw new Error("File must be an audio file");const i=Oo(f.name),r=await Ro(f);return{id:await na({title:i,audioBlob:f,duration:r,source:"upload"}),title:i,duration:r}}async function $o(f){const i=Array.from(f),r=[];for(const c of i)try{const s=await To(c);r.push(s)}catch(s){console.error(`Failed to upload ${c.name}:`,s)}return r}function Io(){return new Promise(f=>{const i=document.createElement("input");i.type="file",i.accept="audio/*",i.multiple=!0,i.addEventListener("change",()=>{f(i.files)}),i.addEventListener("cancel",()=>{f(null)}),i.click()})}function nr(f){throw new Error('Could not dynamically require "'+f+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Kr={exports:{}};var qi;function Bo(){return qi||(qi=1,(function(f,i){(function(r){f.exports=r()})(function(){return(function r(c,s,l){function d(b,S){if(!s[b]){if(!c[b]){var x=typeof nr=="function"&&nr;if(!S&&x)return x(b,!0);if(h)return h(b,!0);var E=new Error("Cannot find module '"+b+"'");throw E.code="MODULE_NOT_FOUND",E}var v=s[b]={exports:{}};c[b][0].call(v.exports,function(C){var y=c[b][1][C];return d(y||C)},v,v.exports,r,c,s,l)}return s[b].exports}for(var h=typeof nr=="function"&&nr,g=0;g<l.length;g++)d(l[g]);return d})({1:[function(r,c,s){var l=r("./utils"),d=r("./support"),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(g){for(var b,S,x,E,v,C,y,A=[],_=0,R=g.length,D=R,W=l.getTypeOf(g)!=="string";_<g.length;)D=R-_,x=W?(b=g[_++],S=_<R?g[_++]:0,_<R?g[_++]:0):(b=g.charCodeAt(_++),S=_<R?g.charCodeAt(_++):0,_<R?g.charCodeAt(_++):0),E=b>>2,v=(3&b)<<4|S>>4,C=1<D?(15&S)<<2|x>>6:64,y=2<D?63&x:64,A.push(h.charAt(E)+h.charAt(v)+h.charAt(C)+h.charAt(y));return A.join("")},s.decode=function(g){var b,S,x,E,v,C,y=0,A=0,_="data:";if(g.substr(0,_.length)===_)throw new Error("Invalid base64 input, it looks like a data url.");var R,D=3*(g=g.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(g.charAt(g.length-1)===h.charAt(64)&&D--,g.charAt(g.length-2)===h.charAt(64)&&D--,D%1!=0)throw new Error("Invalid base64 input, bad content length.");for(R=d.uint8array?new Uint8Array(0|D):new Array(0|D);y<g.length;)b=h.indexOf(g.charAt(y++))<<2|(E=h.indexOf(g.charAt(y++)))>>4,S=(15&E)<<4|(v=h.indexOf(g.charAt(y++)))>>2,x=(3&v)<<6|(C=h.indexOf(g.charAt(y++))),R[A++]=b,v!==64&&(R[A++]=S),C!==64&&(R[A++]=x);return R}},{"./support":30,"./utils":32}],2:[function(r,c,s){var l=r("./external"),d=r("./stream/DataWorker"),h=r("./stream/Crc32Probe"),g=r("./stream/DataLengthProbe");function b(S,x,E,v,C){this.compressedSize=S,this.uncompressedSize=x,this.crc32=E,this.compression=v,this.compressedContent=C}b.prototype={getContentWorker:function(){var S=new d(l.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new g("data_length")),x=this;return S.on("end",function(){if(this.streamInfo.data_length!==x.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),S},getCompressedWorker:function(){return new d(l.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},b.createWorkerFrom=function(S,x,E){return S.pipe(new h).pipe(new g("uncompressedSize")).pipe(x.compressWorker(E)).pipe(new g("compressedSize")).withStreamInfo("compression",x)},c.exports=b},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,c,s){var l=r("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new l("STORE compression")},uncompressWorker:function(){return new l("STORE decompression")}},s.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,c,s){var l=r("./utils"),d=(function(){for(var h,g=[],b=0;b<256;b++){h=b;for(var S=0;S<8;S++)h=1&h?3988292384^h>>>1:h>>>1;g[b]=h}return g})();c.exports=function(h,g){return h!==void 0&&h.length?l.getTypeOf(h)!=="string"?(function(b,S,x,E){var v=d,C=E+x;b^=-1;for(var y=E;y<C;y++)b=b>>>8^v[255&(b^S[y])];return-1^b})(0|g,h,h.length,0):(function(b,S,x,E){var v=d,C=E+x;b^=-1;for(var y=E;y<C;y++)b=b>>>8^v[255&(b^S.charCodeAt(y))];return-1^b})(0|g,h,h.length,0):0}},{"./utils":32}],5:[function(r,c,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(r,c,s){var l=null;l=typeof Promise<"u"?Promise:r("lie"),c.exports={Promise:l}},{lie:37}],7:[function(r,c,s){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",d=r("pako"),h=r("./utils"),g=r("./stream/GenericWorker"),b=l?"uint8array":"array";function S(x,E){g.call(this,"FlateWorker/"+x),this._pako=null,this._pakoAction=x,this._pakoOptions=E,this.meta={}}s.magic="\b\0",h.inherits(S,g),S.prototype.processChunk=function(x){this.meta=x.meta,this._pako===null&&this._createPako(),this._pako.push(h.transformTo(b,x.data),!1)},S.prototype.flush=function(){g.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},S.prototype.cleanUp=function(){g.prototype.cleanUp.call(this),this._pako=null},S.prototype._createPako=function(){this._pako=new d[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var x=this;this._pako.onData=function(E){x.push({data:E,meta:x.meta})}},s.compressWorker=function(x){return new S("Deflate",x)},s.uncompressWorker=function(){return new S("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,c,s){function l(v,C){var y,A="";for(y=0;y<C;y++)A+=String.fromCharCode(255&v),v>>>=8;return A}function d(v,C,y,A,_,R){var D,W,K=v.file,nt=v.compression,X=R!==b.utf8encode,ut=h.transformTo("string",R(K.name)),tt=h.transformTo("string",b.utf8encode(K.name)),pt=K.comment,Ot=h.transformTo("string",R(pt)),$=h.transformTo("string",b.utf8encode(pt)),Q=tt.length!==K.name.length,m=$.length!==pt.length,it="",Rt="",lt="",Tt=K.dir,st=K.date,Pt={crc32:0,compressedSize:0,uncompressedSize:0};C&&!y||(Pt.crc32=v.crc32,Pt.compressedSize=v.compressedSize,Pt.uncompressedSize=v.uncompressedSize);var Y=0;C&&(Y|=8),X||!Q&&!m||(Y|=2048);var V=0,Et=0;Tt&&(V|=16),_==="UNIX"?(Et=798,V|=(function(vt,Lt){var Xt=vt;return vt||(Xt=Lt?16893:33204),(65535&Xt)<<16})(K.unixPermissions,Tt)):(Et=20,V|=(function(vt){return 63&(vt||0)})(K.dosPermissions)),D=st.getUTCHours(),D<<=6,D|=st.getUTCMinutes(),D<<=5,D|=st.getUTCSeconds()/2,W=st.getUTCFullYear()-1980,W<<=4,W|=st.getUTCMonth()+1,W<<=5,W|=st.getUTCDate(),Q&&(Rt=l(1,1)+l(S(ut),4)+tt,it+="up"+l(Rt.length,2)+Rt),m&&(lt=l(1,1)+l(S(Ot),4)+$,it+="uc"+l(lt.length,2)+lt);var xt="";return xt+=`
\0`,xt+=l(Y,2),xt+=nt.magic,xt+=l(D,2),xt+=l(W,2),xt+=l(Pt.crc32,4),xt+=l(Pt.compressedSize,4),xt+=l(Pt.uncompressedSize,4),xt+=l(ut.length,2),xt+=l(it.length,2),{fileRecord:x.LOCAL_FILE_HEADER+xt+ut+it,dirRecord:x.CENTRAL_FILE_HEADER+l(Et,2)+xt+l(Ot.length,2)+"\0\0\0\0"+l(V,4)+l(A,4)+ut+it+Ot}}var h=r("../utils"),g=r("../stream/GenericWorker"),b=r("../utf8"),S=r("../crc32"),x=r("../signature");function E(v,C,y,A){g.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=C,this.zipPlatform=y,this.encodeFileName=A,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}h.inherits(E,g),E.prototype.push=function(v){var C=v.meta.percent||0,y=this.entriesCount,A=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,g.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:y?(C+100*(y-A-1))/y:100}}))},E.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var C=this.streamFiles&&!v.file.dir;if(C){var y=d(v,C,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},E.prototype.closedSource=function(v){this.accumulate=!1;var C=this.streamFiles&&!v.file.dir,y=d(v,C,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),C)this.push({data:(function(A){return x.DATA_DESCRIPTOR+l(A.crc32,4)+l(A.compressedSize,4)+l(A.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},E.prototype.flush=function(){for(var v=this.bytesWritten,C=0;C<this.dirRecords.length;C++)this.push({data:this.dirRecords[C],meta:{percent:100}});var y=this.bytesWritten-v,A=(function(_,R,D,W,K){var nt=h.transformTo("string",K(W));return x.CENTRAL_DIRECTORY_END+"\0\0\0\0"+l(_,2)+l(_,2)+l(R,4)+l(D,4)+l(nt.length,2)+nt})(this.dirRecords.length,y,v,this.zipComment,this.encodeFileName);this.push({data:A,meta:{percent:100}})},E.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},E.prototype.registerPrevious=function(v){this._sources.push(v);var C=this;return v.on("data",function(y){C.processChunk(y)}),v.on("end",function(){C.closedSource(C.previous.streamInfo),C._sources.length?C.prepareNextSource():C.end()}),v.on("error",function(y){C.error(y)}),this},E.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},E.prototype.error=function(v){var C=this._sources;if(!g.prototype.error.call(this,v))return!1;for(var y=0;y<C.length;y++)try{C[y].error(v)}catch{}return!0},E.prototype.lock=function(){g.prototype.lock.call(this);for(var v=this._sources,C=0;C<v.length;C++)v[C].lock()},c.exports=E},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,c,s){var l=r("../compressions"),d=r("./ZipFileWorker");s.generateWorker=function(h,g,b){var S=new d(g.streamFiles,b,g.platform,g.encodeFileName),x=0;try{h.forEach(function(E,v){x++;var C=(function(R,D){var W=R||D,K=l[W];if(!K)throw new Error(W+" is not a valid compression method !");return K})(v.options.compression,g.compression),y=v.options.compressionOptions||g.compressionOptions||{},A=v.dir,_=v.date;v._compressWorker(C,y).withStreamInfo("file",{name:E,dir:A,date:_,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(S)}),S.entriesCount=x}catch(E){S.error(E)}return S}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,c,s){function l(){if(!(this instanceof l))return new l;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var d=new l;for(var h in this)typeof this[h]!="function"&&(d[h]=this[h]);return d}}(l.prototype=r("./object")).loadAsync=r("./load"),l.support=r("./support"),l.defaults=r("./defaults"),l.version="3.10.1",l.loadAsync=function(d,h){return new l().loadAsync(d,h)},l.external=r("./external"),c.exports=l},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,c,s){var l=r("./utils"),d=r("./external"),h=r("./utf8"),g=r("./zipEntries"),b=r("./stream/Crc32Probe"),S=r("./nodejsUtils");function x(E){return new d.Promise(function(v,C){var y=E.decompressed.getContentWorker().pipe(new b);y.on("error",function(A){C(A)}).on("end",function(){y.streamInfo.crc32!==E.decompressed.crc32?C(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}c.exports=function(E,v){var C=this;return v=l.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:h.utf8decode}),S.isNode&&S.isStream(E)?d.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):l.prepareContent("the loaded zip file",E,!0,v.optimizedBinaryString,v.base64).then(function(y){var A=new g(v);return A.load(y),A}).then(function(y){var A=[d.Promise.resolve(y)],_=y.files;if(v.checkCRC32)for(var R=0;R<_.length;R++)A.push(x(_[R]));return d.Promise.all(A)}).then(function(y){for(var A=y.shift(),_=A.files,R=0;R<_.length;R++){var D=_[R],W=D.fileNameStr,K=l.resolve(D.fileNameStr);C.file(K,D.decompressed,{binary:!0,optimizedBinaryString:!0,date:D.date,dir:D.dir,comment:D.fileCommentStr.length?D.fileCommentStr:null,unixPermissions:D.unixPermissions,dosPermissions:D.dosPermissions,createFolders:v.createFolders}),D.dir||(C.file(K).unsafeOriginalName=W)}return A.zipComment.length&&(C.comment=A.zipComment),C})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,c,s){var l=r("../utils"),d=r("../stream/GenericWorker");function h(g,b){d.call(this,"Nodejs stream input adapter for "+g),this._upstreamEnded=!1,this._bindStream(b)}l.inherits(h,d),h.prototype._bindStream=function(g){var b=this;(this._stream=g).pause(),g.on("data",function(S){b.push({data:S,meta:{percent:0}})}).on("error",function(S){b.isPaused?this.generatedError=S:b.error(S)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},h.prototype.pause=function(){return!!d.prototype.pause.call(this)&&(this._stream.pause(),!0)},h.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},c.exports=h},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,c,s){var l=r("readable-stream").Readable;function d(h,g,b){l.call(this,g),this._helper=h;var S=this;h.on("data",function(x,E){S.push(x)||S._helper.pause(),b&&b(E)}).on("error",function(x){S.emit("error",x)}).on("end",function(){S.push(null)})}r("../utils").inherits(d,l),d.prototype._read=function(){this._helper.resume()},c.exports=d},{"../utils":32,"readable-stream":16}],14:[function(r,c,s){c.exports={isNode:typeof Buffer<"u",newBufferFrom:function(l,d){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(l,d);if(typeof l=="number")throw new Error('The "data" argument must not be a number');return new Buffer(l,d)},allocBuffer:function(l){if(Buffer.alloc)return Buffer.alloc(l);var d=new Buffer(l);return d.fill(0),d},isBuffer:function(l){return Buffer.isBuffer(l)},isStream:function(l){return l&&typeof l.on=="function"&&typeof l.pause=="function"&&typeof l.resume=="function"}}},{}],15:[function(r,c,s){function l(K,nt,X){var ut,tt=h.getTypeOf(nt),pt=h.extend(X||{},S);pt.date=pt.date||new Date,pt.compression!==null&&(pt.compression=pt.compression.toUpperCase()),typeof pt.unixPermissions=="string"&&(pt.unixPermissions=parseInt(pt.unixPermissions,8)),pt.unixPermissions&&16384&pt.unixPermissions&&(pt.dir=!0),pt.dosPermissions&&16&pt.dosPermissions&&(pt.dir=!0),pt.dir&&(K=_(K)),pt.createFolders&&(ut=A(K))&&R.call(this,ut,!0);var Ot=tt==="string"&&pt.binary===!1&&pt.base64===!1;X&&X.binary!==void 0||(pt.binary=!Ot),(nt instanceof x&&nt.uncompressedSize===0||pt.dir||!nt||nt.length===0)&&(pt.base64=!1,pt.binary=!0,nt="",pt.compression="STORE",tt="string");var $=null;$=nt instanceof x||nt instanceof g?nt:C.isNode&&C.isStream(nt)?new y(K,nt):h.prepareContent(K,nt,pt.binary,pt.optimizedBinaryString,pt.base64);var Q=new E(K,$,pt);this.files[K]=Q}var d=r("./utf8"),h=r("./utils"),g=r("./stream/GenericWorker"),b=r("./stream/StreamHelper"),S=r("./defaults"),x=r("./compressedObject"),E=r("./zipObject"),v=r("./generate"),C=r("./nodejsUtils"),y=r("./nodejs/NodejsStreamInputAdapter"),A=function(K){K.slice(-1)==="/"&&(K=K.substring(0,K.length-1));var nt=K.lastIndexOf("/");return 0<nt?K.substring(0,nt):""},_=function(K){return K.slice(-1)!=="/"&&(K+="/"),K},R=function(K,nt){return nt=nt!==void 0?nt:S.createFolders,K=_(K),this.files[K]||l.call(this,K,null,{dir:!0,createFolders:nt}),this.files[K]};function D(K){return Object.prototype.toString.call(K)==="[object RegExp]"}var W={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(K){var nt,X,ut;for(nt in this.files)ut=this.files[nt],(X=nt.slice(this.root.length,nt.length))&&nt.slice(0,this.root.length)===this.root&&K(X,ut)},filter:function(K){var nt=[];return this.forEach(function(X,ut){K(X,ut)&&nt.push(ut)}),nt},file:function(K,nt,X){if(arguments.length!==1)return K=this.root+K,l.call(this,K,nt,X),this;if(D(K)){var ut=K;return this.filter(function(pt,Ot){return!Ot.dir&&ut.test(pt)})}var tt=this.files[this.root+K];return tt&&!tt.dir?tt:null},folder:function(K){if(!K)return this;if(D(K))return this.filter(function(tt,pt){return pt.dir&&K.test(tt)});var nt=this.root+K,X=R.call(this,nt),ut=this.clone();return ut.root=X.name,ut},remove:function(K){K=this.root+K;var nt=this.files[K];if(nt||(K.slice(-1)!=="/"&&(K+="/"),nt=this.files[K]),nt&&!nt.dir)delete this.files[K];else for(var X=this.filter(function(tt,pt){return pt.name.slice(0,K.length)===K}),ut=0;ut<X.length;ut++)delete this.files[X[ut].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(K){var nt,X={};try{if((X=h.extend(K||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:d.utf8encode})).type=X.type.toLowerCase(),X.compression=X.compression.toUpperCase(),X.type==="binarystring"&&(X.type="string"),!X.type)throw new Error("No output type specified.");h.checkSupport(X.type),X.platform!=="darwin"&&X.platform!=="freebsd"&&X.platform!=="linux"&&X.platform!=="sunos"||(X.platform="UNIX"),X.platform==="win32"&&(X.platform="DOS");var ut=X.comment||this.comment||"";nt=v.generateWorker(this,X,ut)}catch(tt){(nt=new g("error")).error(tt)}return new b(nt,X.type||"string",X.mimeType)},generateAsync:function(K,nt){return this.generateInternalStream(K).accumulate(nt)},generateNodeStream:function(K,nt){return(K=K||{}).type||(K.type="nodebuffer"),this.generateInternalStream(K).toNodejsStream(nt)}};c.exports=W},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,c,s){c.exports=r("stream")},{stream:void 0}],17:[function(r,c,s){var l=r("./DataReader");function d(h){l.call(this,h);for(var g=0;g<this.data.length;g++)h[g]=255&h[g]}r("../utils").inherits(d,l),d.prototype.byteAt=function(h){return this.data[this.zero+h]},d.prototype.lastIndexOfSignature=function(h){for(var g=h.charCodeAt(0),b=h.charCodeAt(1),S=h.charCodeAt(2),x=h.charCodeAt(3),E=this.length-4;0<=E;--E)if(this.data[E]===g&&this.data[E+1]===b&&this.data[E+2]===S&&this.data[E+3]===x)return E-this.zero;return-1},d.prototype.readAndCheckSignature=function(h){var g=h.charCodeAt(0),b=h.charCodeAt(1),S=h.charCodeAt(2),x=h.charCodeAt(3),E=this.readData(4);return g===E[0]&&b===E[1]&&S===E[2]&&x===E[3]},d.prototype.readData=function(h){if(this.checkOffset(h),h===0)return[];var g=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,g},c.exports=d},{"../utils":32,"./DataReader":18}],18:[function(r,c,s){var l=r("../utils");function d(h){this.data=h,this.length=h.length,this.index=0,this.zero=0}d.prototype={checkOffset:function(h){this.checkIndex(this.index+h)},checkIndex:function(h){if(this.length<this.zero+h||h<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+h+"). Corrupted zip ?")},setIndex:function(h){this.checkIndex(h),this.index=h},skip:function(h){this.setIndex(this.index+h)},byteAt:function(){},readInt:function(h){var g,b=0;for(this.checkOffset(h),g=this.index+h-1;g>=this.index;g--)b=(b<<8)+this.byteAt(g);return this.index+=h,b},readString:function(h){return l.transformTo("string",this.readData(h))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var h=this.readInt(4);return new Date(Date.UTC(1980+(h>>25&127),(h>>21&15)-1,h>>16&31,h>>11&31,h>>5&63,(31&h)<<1))}},c.exports=d},{"../utils":32}],19:[function(r,c,s){var l=r("./Uint8ArrayReader");function d(h){l.call(this,h)}r("../utils").inherits(d,l),d.prototype.readData=function(h){this.checkOffset(h);var g=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,g},c.exports=d},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,c,s){var l=r("./DataReader");function d(h){l.call(this,h)}r("../utils").inherits(d,l),d.prototype.byteAt=function(h){return this.data.charCodeAt(this.zero+h)},d.prototype.lastIndexOfSignature=function(h){return this.data.lastIndexOf(h)-this.zero},d.prototype.readAndCheckSignature=function(h){return h===this.readData(4)},d.prototype.readData=function(h){this.checkOffset(h);var g=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,g},c.exports=d},{"../utils":32,"./DataReader":18}],21:[function(r,c,s){var l=r("./ArrayReader");function d(h){l.call(this,h)}r("../utils").inherits(d,l),d.prototype.readData=function(h){if(this.checkOffset(h),h===0)return new Uint8Array(0);var g=this.data.subarray(this.zero+this.index,this.zero+this.index+h);return this.index+=h,g},c.exports=d},{"../utils":32,"./ArrayReader":17}],22:[function(r,c,s){var l=r("../utils"),d=r("../support"),h=r("./ArrayReader"),g=r("./StringReader"),b=r("./NodeBufferReader"),S=r("./Uint8ArrayReader");c.exports=function(x){var E=l.getTypeOf(x);return l.checkSupport(E),E!=="string"||d.uint8array?E==="nodebuffer"?new b(x):d.uint8array?new S(l.transformTo("uint8array",x)):new h(l.transformTo("array",x)):new g(x)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,c,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,c,s){var l=r("./GenericWorker"),d=r("../utils");function h(g){l.call(this,"ConvertWorker to "+g),this.destType=g}d.inherits(h,l),h.prototype.processChunk=function(g){this.push({data:d.transformTo(this.destType,g.data),meta:g.meta})},c.exports=h},{"../utils":32,"./GenericWorker":28}],25:[function(r,c,s){var l=r("./GenericWorker"),d=r("../crc32");function h(){l.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(h,l),h.prototype.processChunk=function(g){this.streamInfo.crc32=d(g.data,this.streamInfo.crc32||0),this.push(g)},c.exports=h},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,c,s){var l=r("../utils"),d=r("./GenericWorker");function h(g){d.call(this,"DataLengthProbe for "+g),this.propName=g,this.withStreamInfo(g,0)}l.inherits(h,d),h.prototype.processChunk=function(g){if(g){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+g.data.length}d.prototype.processChunk.call(this,g)},c.exports=h},{"../utils":32,"./GenericWorker":28}],27:[function(r,c,s){var l=r("../utils"),d=r("./GenericWorker");function h(g){d.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,g.then(function(S){b.dataIsReady=!0,b.data=S,b.max=S&&S.length||0,b.type=l.getTypeOf(S),b.isPaused||b._tickAndRepeat()},function(S){b.error(S)})}l.inherits(h,d),h.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this.data=null},h.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,l.delay(this._tickAndRepeat,[],this)),!0)},h.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(l.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},h.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var g=null,b=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":g=this.data.substring(this.index,b);break;case"uint8array":g=this.data.subarray(this.index,b);break;case"array":case"nodebuffer":g=this.data.slice(this.index,b)}return this.index=b,this.push({data:g,meta:{percent:this.max?this.index/this.max*100:0}})},c.exports=h},{"../utils":32,"./GenericWorker":28}],28:[function(r,c,s){function l(d){this.name=d||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}l.prototype={push:function(d){this.emit("data",d)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(d){this.emit("error",d)}return!0},error:function(d){return!this.isFinished&&(this.isPaused?this.generatedError=d:(this.isFinished=!0,this.emit("error",d),this.previous&&this.previous.error(d),this.cleanUp()),!0)},on:function(d,h){return this._listeners[d].push(h),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(d,h){if(this._listeners[d])for(var g=0;g<this._listeners[d].length;g++)this._listeners[d][g].call(this,h)},pipe:function(d){return d.registerPrevious(this)},registerPrevious:function(d){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=d.streamInfo,this.mergeStreamInfo(),this.previous=d;var h=this;return d.on("data",function(g){h.processChunk(g)}),d.on("end",function(){h.end()}),d.on("error",function(g){h.error(g)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var d=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),d=!0),this.previous&&this.previous.resume(),!d},flush:function(){},processChunk:function(d){this.push(d)},withStreamInfo:function(d,h){return this.extraStreamInfo[d]=h,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var d in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,d)&&(this.streamInfo[d]=this.extraStreamInfo[d])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var d="Worker "+this.name;return this.previous?this.previous+" -> "+d:d}},c.exports=l},{}],29:[function(r,c,s){var l=r("../utils"),d=r("./ConvertWorker"),h=r("./GenericWorker"),g=r("../base64"),b=r("../support"),S=r("../external"),x=null;if(b.nodestream)try{x=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function E(C,y){return new S.Promise(function(A,_){var R=[],D=C._internalType,W=C._outputType,K=C._mimeType;C.on("data",function(nt,X){R.push(nt),y&&y(X)}).on("error",function(nt){R=[],_(nt)}).on("end",function(){try{var nt=(function(X,ut,tt){switch(X){case"blob":return l.newBlob(l.transformTo("arraybuffer",ut),tt);case"base64":return g.encode(ut);default:return l.transformTo(X,ut)}})(W,(function(X,ut){var tt,pt=0,Ot=null,$=0;for(tt=0;tt<ut.length;tt++)$+=ut[tt].length;switch(X){case"string":return ut.join("");case"array":return Array.prototype.concat.apply([],ut);case"uint8array":for(Ot=new Uint8Array($),tt=0;tt<ut.length;tt++)Ot.set(ut[tt],pt),pt+=ut[tt].length;return Ot;case"nodebuffer":return Buffer.concat(ut);default:throw new Error("concat : unsupported type '"+X+"'")}})(D,R),K);A(nt)}catch(X){_(X)}R=[]}).resume()})}function v(C,y,A){var _=y;switch(y){case"blob":case"arraybuffer":_="uint8array";break;case"base64":_="string"}try{this._internalType=_,this._outputType=y,this._mimeType=A,l.checkSupport(_),this._worker=C.pipe(new d(_)),C.lock()}catch(R){this._worker=new h("error"),this._worker.error(R)}}v.prototype={accumulate:function(C){return E(this,C)},on:function(C,y){var A=this;return C==="data"?this._worker.on(C,function(_){y.call(A,_.data,_.meta)}):this._worker.on(C,function(){l.delay(y,arguments,A)}),this},resume:function(){return l.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(C){if(l.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new x(this,{objectMode:this._outputType!=="nodebuffer"},C)}},c.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,c,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var l=new ArrayBuffer(0);try{s.blob=new Blob([l],{type:"application/zip"}).size===0}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);d.append(l),s.blob=d.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!r("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(r,c,s){for(var l=r("./utils"),d=r("./support"),h=r("./nodejsUtils"),g=r("./stream/GenericWorker"),b=new Array(256),S=0;S<256;S++)b[S]=252<=S?6:248<=S?5:240<=S?4:224<=S?3:192<=S?2:1;b[254]=b[254]=1;function x(){g.call(this,"utf-8 decode"),this.leftOver=null}function E(){g.call(this,"utf-8 encode")}s.utf8encode=function(v){return d.nodebuffer?h.newBufferFrom(v,"utf-8"):(function(C){var y,A,_,R,D,W=C.length,K=0;for(R=0;R<W;R++)(64512&(A=C.charCodeAt(R)))==55296&&R+1<W&&(64512&(_=C.charCodeAt(R+1)))==56320&&(A=65536+(A-55296<<10)+(_-56320),R++),K+=A<128?1:A<2048?2:A<65536?3:4;for(y=d.uint8array?new Uint8Array(K):new Array(K),R=D=0;D<K;R++)(64512&(A=C.charCodeAt(R)))==55296&&R+1<W&&(64512&(_=C.charCodeAt(R+1)))==56320&&(A=65536+(A-55296<<10)+(_-56320),R++),A<128?y[D++]=A:(A<2048?y[D++]=192|A>>>6:(A<65536?y[D++]=224|A>>>12:(y[D++]=240|A>>>18,y[D++]=128|A>>>12&63),y[D++]=128|A>>>6&63),y[D++]=128|63&A);return y})(v)},s.utf8decode=function(v){return d.nodebuffer?l.transformTo("nodebuffer",v).toString("utf-8"):(function(C){var y,A,_,R,D=C.length,W=new Array(2*D);for(y=A=0;y<D;)if((_=C[y++])<128)W[A++]=_;else if(4<(R=b[_]))W[A++]=65533,y+=R-1;else{for(_&=R===2?31:R===3?15:7;1<R&&y<D;)_=_<<6|63&C[y++],R--;1<R?W[A++]=65533:_<65536?W[A++]=_:(_-=65536,W[A++]=55296|_>>10&1023,W[A++]=56320|1023&_)}return W.length!==A&&(W.subarray?W=W.subarray(0,A):W.length=A),l.applyFromCharCode(W)})(v=l.transformTo(d.uint8array?"uint8array":"array",v))},l.inherits(x,g),x.prototype.processChunk=function(v){var C=l.transformTo(d.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(d.uint8array){var y=C;(C=new Uint8Array(y.length+this.leftOver.length)).set(this.leftOver,0),C.set(y,this.leftOver.length)}else C=this.leftOver.concat(C);this.leftOver=null}var A=(function(R,D){var W;for((D=D||R.length)>R.length&&(D=R.length),W=D-1;0<=W&&(192&R[W])==128;)W--;return W<0||W===0?D:W+b[R[W]]>D?W:D})(C),_=C;A!==C.length&&(d.uint8array?(_=C.subarray(0,A),this.leftOver=C.subarray(A,C.length)):(_=C.slice(0,A),this.leftOver=C.slice(A,C.length))),this.push({data:s.utf8decode(_),meta:v.meta})},x.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=x,l.inherits(E,g),E.prototype.processChunk=function(v){this.push({data:s.utf8encode(v.data),meta:v.meta})},s.Utf8EncodeWorker=E},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,c,s){var l=r("./support"),d=r("./base64"),h=r("./nodejsUtils"),g=r("./external");function b(y){return y}function S(y,A){for(var _=0;_<y.length;++_)A[_]=255&y.charCodeAt(_);return A}r("setimmediate"),s.newBlob=function(y,A){s.checkSupport("blob");try{return new Blob([y],{type:A})}catch{try{var _=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return _.append(y),_.getBlob(A)}catch{throw new Error("Bug : can't construct the Blob.")}}};var x={stringifyByChunk:function(y,A,_){var R=[],D=0,W=y.length;if(W<=_)return String.fromCharCode.apply(null,y);for(;D<W;)A==="array"||A==="nodebuffer"?R.push(String.fromCharCode.apply(null,y.slice(D,Math.min(D+_,W)))):R.push(String.fromCharCode.apply(null,y.subarray(D,Math.min(D+_,W)))),D+=_;return R.join("")},stringifyByChar:function(y){for(var A="",_=0;_<y.length;_++)A+=String.fromCharCode(y[_]);return A},applyCanBeUsed:{uint8array:(function(){try{return l.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return l.nodebuffer&&String.fromCharCode.apply(null,h.allocBuffer(1)).length===1}catch{return!1}})()}};function E(y){var A=65536,_=s.getTypeOf(y),R=!0;if(_==="uint8array"?R=x.applyCanBeUsed.uint8array:_==="nodebuffer"&&(R=x.applyCanBeUsed.nodebuffer),R)for(;1<A;)try{return x.stringifyByChunk(y,_,A)}catch{A=Math.floor(A/2)}return x.stringifyByChar(y)}function v(y,A){for(var _=0;_<y.length;_++)A[_]=y[_];return A}s.applyFromCharCode=E;var C={};C.string={string:b,array:function(y){return S(y,new Array(y.length))},arraybuffer:function(y){return C.string.uint8array(y).buffer},uint8array:function(y){return S(y,new Uint8Array(y.length))},nodebuffer:function(y){return S(y,h.allocBuffer(y.length))}},C.array={string:E,array:b,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return h.newBufferFrom(y)}},C.arraybuffer={string:function(y){return E(new Uint8Array(y))},array:function(y){return v(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:b,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return h.newBufferFrom(new Uint8Array(y))}},C.uint8array={string:E,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:b,nodebuffer:function(y){return h.newBufferFrom(y)}},C.nodebuffer={string:E,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return C.nodebuffer.uint8array(y).buffer},uint8array:function(y){return v(y,new Uint8Array(y.length))},nodebuffer:b},s.transformTo=function(y,A){if(A=A||"",!y)return A;s.checkSupport(y);var _=s.getTypeOf(A);return C[_][y](A)},s.resolve=function(y){for(var A=y.split("/"),_=[],R=0;R<A.length;R++){var D=A[R];D==="."||D===""&&R!==0&&R!==A.length-1||(D===".."?_.pop():_.push(D))}return _.join("/")},s.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":l.nodebuffer&&h.isBuffer(y)?"nodebuffer":l.uint8array&&y instanceof Uint8Array?"uint8array":l.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(y){if(!l[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(y){var A,_,R="";for(_=0;_<(y||"").length;_++)R+="\\x"+((A=y.charCodeAt(_))<16?"0":"")+A.toString(16).toUpperCase();return R},s.delay=function(y,A,_){setImmediate(function(){y.apply(_||null,A||[])})},s.inherits=function(y,A){function _(){}_.prototype=A.prototype,y.prototype=new _},s.extend=function(){var y,A,_={};for(y=0;y<arguments.length;y++)for(A in arguments[y])Object.prototype.hasOwnProperty.call(arguments[y],A)&&_[A]===void 0&&(_[A]=arguments[y][A]);return _},s.prepareContent=function(y,A,_,R,D){return g.Promise.resolve(A).then(function(W){return l.blob&&(W instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(W))!==-1)&&typeof FileReader<"u"?new g.Promise(function(K,nt){var X=new FileReader;X.onload=function(ut){K(ut.target.result)},X.onerror=function(ut){nt(ut.target.error)},X.readAsArrayBuffer(W)}):W}).then(function(W){var K=s.getTypeOf(W);return K?(K==="arraybuffer"?W=s.transformTo("uint8array",W):K==="string"&&(D?W=d.decode(W):_&&R!==!0&&(W=(function(nt){return S(nt,l.uint8array?new Uint8Array(nt.length):new Array(nt.length))})(W))),W):g.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(r,c,s){var l=r("./reader/readerFor"),d=r("./utils"),h=r("./signature"),g=r("./zipEntry"),b=r("./support");function S(x){this.files=[],this.loadOptions=x}S.prototype={checkSignature:function(x){if(!this.reader.readAndCheckSignature(x)){this.reader.index-=4;var E=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+d.pretty(E)+", expected "+d.pretty(x)+")")}},isSignature:function(x,E){var v=this.reader.index;this.reader.setIndex(x);var C=this.reader.readString(4)===E;return this.reader.setIndex(v),C},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var x=this.reader.readData(this.zipCommentLength),E=b.uint8array?"uint8array":"array",v=d.transformTo(E,x);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var x,E,v,C=this.zip64EndOfCentralSize-44;0<C;)x=this.reader.readInt(2),E=this.reader.readInt(4),v=this.reader.readData(E),this.zip64ExtensibleData[x]={id:x,length:E,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var x,E;for(x=0;x<this.files.length;x++)E=this.files[x],this.reader.setIndex(E.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),E.readLocalPart(this.reader),E.handleUTF8(),E.processAttributes()},readCentralDir:function(){var x;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(h.CENTRAL_FILE_HEADER);)(x=new g({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(x);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var x=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(x<0)throw this.isSignature(0,h.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(x);var E=x;if(this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===d.MAX_VALUE_16BITS||this.diskWithCentralDirStart===d.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===d.MAX_VALUE_16BITS||this.centralDirRecords===d.MAX_VALUE_16BITS||this.centralDirSize===d.MAX_VALUE_32BITS||this.centralDirOffset===d.MAX_VALUE_32BITS){if(this.zip64=!0,(x=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(x),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,h.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var C=E-v;if(0<C)this.isSignature(E,h.CENTRAL_FILE_HEADER)||(this.reader.zero=C);else if(C<0)throw new Error("Corrupted zip: missing "+Math.abs(C)+" bytes.")},prepareReader:function(x){this.reader=l(x)},load:function(x){this.prepareReader(x),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},c.exports=S},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(r,c,s){var l=r("./reader/readerFor"),d=r("./utils"),h=r("./compressedObject"),g=r("./crc32"),b=r("./utf8"),S=r("./compressions"),x=r("./support");function E(v,C){this.options=v,this.loadOptions=C}E.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var C,y;if(v.skip(22),this.fileNameLength=v.readInt(2),y=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(y),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((C=(function(A){for(var _ in S)if(Object.prototype.hasOwnProperty.call(S,_)&&S[_].magic===A)return S[_];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+d.pretty(this.compressionMethod)+" unknown (inner file : "+d.transformTo("string",this.fileName)+")");this.decompressed=new h(this.compressedSize,this.uncompressedSize,this.crc32,C,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var C=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(C),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=l(this.extraFields[1].value);this.uncompressedSize===d.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===d.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===d.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===d.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var C,y,A,_=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<_;)C=v.readInt(2),y=v.readInt(2),A=v.readData(y),this.extraFields[C]={id:C,length:y,value:A};v.setIndex(_)},handleUTF8:function(){var v=x.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=b.utf8decode(this.fileName),this.fileCommentStr=b.utf8decode(this.fileComment);else{var C=this.findExtraFieldUnicodePath();if(C!==null)this.fileNameStr=C;else{var y=d.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(y)}var A=this.findExtraFieldUnicodeComment();if(A!==null)this.fileCommentStr=A;else{var _=d.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(_)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var C=l(v.value);return C.readInt(1)!==1||g(this.fileName)!==C.readInt(4)?null:b.utf8decode(C.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var C=l(v.value);return C.readInt(1)!==1||g(this.fileComment)!==C.readInt(4)?null:b.utf8decode(C.readData(v.length-5))}return null}},c.exports=E},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,c,s){function l(C,y,A){this.name=C,this.dir=A.dir,this.date=A.date,this.comment=A.comment,this.unixPermissions=A.unixPermissions,this.dosPermissions=A.dosPermissions,this._data=y,this._dataBinary=A.binary,this.options={compression:A.compression,compressionOptions:A.compressionOptions}}var d=r("./stream/StreamHelper"),h=r("./stream/DataWorker"),g=r("./utf8"),b=r("./compressedObject"),S=r("./stream/GenericWorker");l.prototype={internalStream:function(C){var y=null,A="string";try{if(!C)throw new Error("No output type specified.");var _=(A=C.toLowerCase())==="string"||A==="text";A!=="binarystring"&&A!=="text"||(A="string"),y=this._decompressWorker();var R=!this._dataBinary;R&&!_&&(y=y.pipe(new g.Utf8EncodeWorker)),!R&&_&&(y=y.pipe(new g.Utf8DecodeWorker))}catch(D){(y=new S("error")).error(D)}return new d(y,A,"")},async:function(C,y){return this.internalStream(C).accumulate(y)},nodeStream:function(C,y){return this.internalStream(C||"nodebuffer").toNodejsStream(y)},_compressWorker:function(C,y){if(this._data instanceof b&&this._data.compression.magic===C.magic)return this._data.getCompressedWorker();var A=this._decompressWorker();return this._dataBinary||(A=A.pipe(new g.Utf8EncodeWorker)),b.createWorkerFrom(A,C,y)},_decompressWorker:function(){return this._data instanceof b?this._data.getContentWorker():this._data instanceof S?this._data:new h(this._data)}};for(var x=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],E=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<x.length;v++)l.prototype[x[v]]=E;c.exports=l},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,c,s){(function(l){var d,h,g=l.MutationObserver||l.WebKitMutationObserver;if(g){var b=0,S=new g(C),x=l.document.createTextNode("");S.observe(x,{characterData:!0}),d=function(){x.data=b=++b%2}}else if(l.setImmediate||l.MessageChannel===void 0)d="document"in l&&"onreadystatechange"in l.document.createElement("script")?function(){var y=l.document.createElement("script");y.onreadystatechange=function(){C(),y.onreadystatechange=null,y.parentNode.removeChild(y),y=null},l.document.documentElement.appendChild(y)}:function(){setTimeout(C,0)};else{var E=new l.MessageChannel;E.port1.onmessage=C,d=function(){E.port2.postMessage(0)}}var v=[];function C(){var y,A;h=!0;for(var _=v.length;_;){for(A=v,v=[],y=-1;++y<_;)A[y]();_=v.length}h=!1}c.exports=function(y){v.push(y)!==1||h||d()}}).call(this,typeof Pe<"u"?Pe:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,c,s){var l=r("immediate");function d(){}var h={},g=["REJECTED"],b=["FULFILLED"],S=["PENDING"];function x(_){if(typeof _!="function")throw new TypeError("resolver must be a function");this.state=S,this.queue=[],this.outcome=void 0,_!==d&&y(this,_)}function E(_,R,D){this.promise=_,typeof R=="function"&&(this.onFulfilled=R,this.callFulfilled=this.otherCallFulfilled),typeof D=="function"&&(this.onRejected=D,this.callRejected=this.otherCallRejected)}function v(_,R,D){l(function(){var W;try{W=R(D)}catch(K){return h.reject(_,K)}W===_?h.reject(_,new TypeError("Cannot resolve promise with itself")):h.resolve(_,W)})}function C(_){var R=_&&_.then;if(_&&(typeof _=="object"||typeof _=="function")&&typeof R=="function")return function(){R.apply(_,arguments)}}function y(_,R){var D=!1;function W(X){D||(D=!0,h.reject(_,X))}function K(X){D||(D=!0,h.resolve(_,X))}var nt=A(function(){R(K,W)});nt.status==="error"&&W(nt.value)}function A(_,R){var D={};try{D.value=_(R),D.status="success"}catch(W){D.status="error",D.value=W}return D}(c.exports=x).prototype.finally=function(_){if(typeof _!="function")return this;var R=this.constructor;return this.then(function(D){return R.resolve(_()).then(function(){return D})},function(D){return R.resolve(_()).then(function(){throw D})})},x.prototype.catch=function(_){return this.then(null,_)},x.prototype.then=function(_,R){if(typeof _!="function"&&this.state===b||typeof R!="function"&&this.state===g)return this;var D=new this.constructor(d);return this.state!==S?v(D,this.state===b?_:R,this.outcome):this.queue.push(new E(D,_,R)),D},E.prototype.callFulfilled=function(_){h.resolve(this.promise,_)},E.prototype.otherCallFulfilled=function(_){v(this.promise,this.onFulfilled,_)},E.prototype.callRejected=function(_){h.reject(this.promise,_)},E.prototype.otherCallRejected=function(_){v(this.promise,this.onRejected,_)},h.resolve=function(_,R){var D=A(C,R);if(D.status==="error")return h.reject(_,D.value);var W=D.value;if(W)y(_,W);else{_.state=b,_.outcome=R;for(var K=-1,nt=_.queue.length;++K<nt;)_.queue[K].callFulfilled(R)}return _},h.reject=function(_,R){_.state=g,_.outcome=R;for(var D=-1,W=_.queue.length;++D<W;)_.queue[D].callRejected(R);return _},x.resolve=function(_){return _ instanceof this?_:h.resolve(new this(d),_)},x.reject=function(_){var R=new this(d);return h.reject(R,_)},x.all=function(_){var R=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=_.length,W=!1;if(!D)return this.resolve([]);for(var K=new Array(D),nt=0,X=-1,ut=new this(d);++X<D;)tt(_[X],X);return ut;function tt(pt,Ot){R.resolve(pt).then(function($){K[Ot]=$,++nt!==D||W||(W=!0,h.resolve(ut,K))},function($){W||(W=!0,h.reject(ut,$))})}},x.race=function(_){var R=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=_.length,W=!1;if(!D)return this.resolve([]);for(var K=-1,nt=new this(d);++K<D;)X=_[K],R.resolve(X).then(function(ut){W||(W=!0,h.resolve(nt,ut))},function(ut){W||(W=!0,h.reject(nt,ut))});var X;return nt}},{immediate:36}],38:[function(r,c,s){var l={};(0,r("./lib/utils/common").assign)(l,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),c.exports=l},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,c,s){var l=r("./zlib/deflate"),d=r("./utils/common"),h=r("./utils/strings"),g=r("./zlib/messages"),b=r("./zlib/zstream"),S=Object.prototype.toString,x=0,E=-1,v=0,C=8;function y(_){if(!(this instanceof y))return new y(_);this.options=d.assign({level:E,method:C,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},_||{});var R=this.options;R.raw&&0<R.windowBits?R.windowBits=-R.windowBits:R.gzip&&0<R.windowBits&&R.windowBits<16&&(R.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var D=l.deflateInit2(this.strm,R.level,R.method,R.windowBits,R.memLevel,R.strategy);if(D!==x)throw new Error(g[D]);if(R.header&&l.deflateSetHeader(this.strm,R.header),R.dictionary){var W;if(W=typeof R.dictionary=="string"?h.string2buf(R.dictionary):S.call(R.dictionary)==="[object ArrayBuffer]"?new Uint8Array(R.dictionary):R.dictionary,(D=l.deflateSetDictionary(this.strm,W))!==x)throw new Error(g[D]);this._dict_set=!0}}function A(_,R){var D=new y(R);if(D.push(_,!0),D.err)throw D.msg||g[D.err];return D.result}y.prototype.push=function(_,R){var D,W,K=this.strm,nt=this.options.chunkSize;if(this.ended)return!1;W=R===~~R?R:R===!0?4:0,typeof _=="string"?K.input=h.string2buf(_):S.call(_)==="[object ArrayBuffer]"?K.input=new Uint8Array(_):K.input=_,K.next_in=0,K.avail_in=K.input.length;do{if(K.avail_out===0&&(K.output=new d.Buf8(nt),K.next_out=0,K.avail_out=nt),(D=l.deflate(K,W))!==1&&D!==x)return this.onEnd(D),!(this.ended=!0);K.avail_out!==0&&(K.avail_in!==0||W!==4&&W!==2)||(this.options.to==="string"?this.onData(h.buf2binstring(d.shrinkBuf(K.output,K.next_out))):this.onData(d.shrinkBuf(K.output,K.next_out)))}while((0<K.avail_in||K.avail_out===0)&&D!==1);return W===4?(D=l.deflateEnd(this.strm),this.onEnd(D),this.ended=!0,D===x):W!==2||(this.onEnd(x),!(K.avail_out=0))},y.prototype.onData=function(_){this.chunks.push(_)},y.prototype.onEnd=function(_){_===x&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},s.Deflate=y,s.deflate=A,s.deflateRaw=function(_,R){return(R=R||{}).raw=!0,A(_,R)},s.gzip=function(_,R){return(R=R||{}).gzip=!0,A(_,R)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,c,s){var l=r("./zlib/inflate"),d=r("./utils/common"),h=r("./utils/strings"),g=r("./zlib/constants"),b=r("./zlib/messages"),S=r("./zlib/zstream"),x=r("./zlib/gzheader"),E=Object.prototype.toString;function v(y){if(!(this instanceof v))return new v(y);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},y||{});var A=this.options;A.raw&&0<=A.windowBits&&A.windowBits<16&&(A.windowBits=-A.windowBits,A.windowBits===0&&(A.windowBits=-15)),!(0<=A.windowBits&&A.windowBits<16)||y&&y.windowBits||(A.windowBits+=32),15<A.windowBits&&A.windowBits<48&&(15&A.windowBits)==0&&(A.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new S,this.strm.avail_out=0;var _=l.inflateInit2(this.strm,A.windowBits);if(_!==g.Z_OK)throw new Error(b[_]);this.header=new x,l.inflateGetHeader(this.strm,this.header)}function C(y,A){var _=new v(A);if(_.push(y,!0),_.err)throw _.msg||b[_.err];return _.result}v.prototype.push=function(y,A){var _,R,D,W,K,nt,X=this.strm,ut=this.options.chunkSize,tt=this.options.dictionary,pt=!1;if(this.ended)return!1;R=A===~~A?A:A===!0?g.Z_FINISH:g.Z_NO_FLUSH,typeof y=="string"?X.input=h.binstring2buf(y):E.call(y)==="[object ArrayBuffer]"?X.input=new Uint8Array(y):X.input=y,X.next_in=0,X.avail_in=X.input.length;do{if(X.avail_out===0&&(X.output=new d.Buf8(ut),X.next_out=0,X.avail_out=ut),(_=l.inflate(X,g.Z_NO_FLUSH))===g.Z_NEED_DICT&&tt&&(nt=typeof tt=="string"?h.string2buf(tt):E.call(tt)==="[object ArrayBuffer]"?new Uint8Array(tt):tt,_=l.inflateSetDictionary(this.strm,nt)),_===g.Z_BUF_ERROR&&pt===!0&&(_=g.Z_OK,pt=!1),_!==g.Z_STREAM_END&&_!==g.Z_OK)return this.onEnd(_),!(this.ended=!0);X.next_out&&(X.avail_out!==0&&_!==g.Z_STREAM_END&&(X.avail_in!==0||R!==g.Z_FINISH&&R!==g.Z_SYNC_FLUSH)||(this.options.to==="string"?(D=h.utf8border(X.output,X.next_out),W=X.next_out-D,K=h.buf2string(X.output,D),X.next_out=W,X.avail_out=ut-W,W&&d.arraySet(X.output,X.output,D,W,0),this.onData(K)):this.onData(d.shrinkBuf(X.output,X.next_out)))),X.avail_in===0&&X.avail_out===0&&(pt=!0)}while((0<X.avail_in||X.avail_out===0)&&_!==g.Z_STREAM_END);return _===g.Z_STREAM_END&&(R=g.Z_FINISH),R===g.Z_FINISH?(_=l.inflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===g.Z_OK):R!==g.Z_SYNC_FLUSH||(this.onEnd(g.Z_OK),!(X.avail_out=0))},v.prototype.onData=function(y){this.chunks.push(y)},v.prototype.onEnd=function(y){y===g.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},s.Inflate=v,s.inflate=C,s.inflateRaw=function(y,A){return(A=A||{}).raw=!0,C(y,A)},s.ungzip=C},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,c,s){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(g){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var S=b.shift();if(S){if(typeof S!="object")throw new TypeError(S+"must be non-object");for(var x in S)S.hasOwnProperty(x)&&(g[x]=S[x])}}return g},s.shrinkBuf=function(g,b){return g.length===b?g:g.subarray?g.subarray(0,b):(g.length=b,g)};var d={arraySet:function(g,b,S,x,E){if(b.subarray&&g.subarray)g.set(b.subarray(S,S+x),E);else for(var v=0;v<x;v++)g[E+v]=b[S+v]},flattenChunks:function(g){var b,S,x,E,v,C;for(b=x=0,S=g.length;b<S;b++)x+=g[b].length;for(C=new Uint8Array(x),b=E=0,S=g.length;b<S;b++)v=g[b],C.set(v,E),E+=v.length;return C}},h={arraySet:function(g,b,S,x,E){for(var v=0;v<x;v++)g[E+v]=b[S+v]},flattenChunks:function(g){return[].concat.apply([],g)}};s.setTyped=function(g){g?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,d)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,h))},s.setTyped(l)},{}],42:[function(r,c,s){var l=r("./common"),d=!0,h=!0;try{String.fromCharCode.apply(null,[0])}catch{d=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{h=!1}for(var g=new l.Buf8(256),b=0;b<256;b++)g[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;function S(x,E){if(E<65537&&(x.subarray&&h||!x.subarray&&d))return String.fromCharCode.apply(null,l.shrinkBuf(x,E));for(var v="",C=0;C<E;C++)v+=String.fromCharCode(x[C]);return v}g[254]=g[254]=1,s.string2buf=function(x){var E,v,C,y,A,_=x.length,R=0;for(y=0;y<_;y++)(64512&(v=x.charCodeAt(y)))==55296&&y+1<_&&(64512&(C=x.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(C-56320),y++),R+=v<128?1:v<2048?2:v<65536?3:4;for(E=new l.Buf8(R),y=A=0;A<R;y++)(64512&(v=x.charCodeAt(y)))==55296&&y+1<_&&(64512&(C=x.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(C-56320),y++),v<128?E[A++]=v:(v<2048?E[A++]=192|v>>>6:(v<65536?E[A++]=224|v>>>12:(E[A++]=240|v>>>18,E[A++]=128|v>>>12&63),E[A++]=128|v>>>6&63),E[A++]=128|63&v);return E},s.buf2binstring=function(x){return S(x,x.length)},s.binstring2buf=function(x){for(var E=new l.Buf8(x.length),v=0,C=E.length;v<C;v++)E[v]=x.charCodeAt(v);return E},s.buf2string=function(x,E){var v,C,y,A,_=E||x.length,R=new Array(2*_);for(v=C=0;v<_;)if((y=x[v++])<128)R[C++]=y;else if(4<(A=g[y]))R[C++]=65533,v+=A-1;else{for(y&=A===2?31:A===3?15:7;1<A&&v<_;)y=y<<6|63&x[v++],A--;1<A?R[C++]=65533:y<65536?R[C++]=y:(y-=65536,R[C++]=55296|y>>10&1023,R[C++]=56320|1023&y)}return S(R,C)},s.utf8border=function(x,E){var v;for((E=E||x.length)>x.length&&(E=x.length),v=E-1;0<=v&&(192&x[v])==128;)v--;return v<0||v===0?E:v+g[x[v]]>E?v:E}},{"./common":41}],43:[function(r,c,s){c.exports=function(l,d,h,g){for(var b=65535&l|0,S=l>>>16&65535|0,x=0;h!==0;){for(h-=x=2e3<h?2e3:h;S=S+(b=b+d[g++]|0)|0,--x;);b%=65521,S%=65521}return b|S<<16|0}},{}],44:[function(r,c,s){c.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,c,s){var l=(function(){for(var d,h=[],g=0;g<256;g++){d=g;for(var b=0;b<8;b++)d=1&d?3988292384^d>>>1:d>>>1;h[g]=d}return h})();c.exports=function(d,h,g,b){var S=l,x=b+g;d^=-1;for(var E=b;E<x;E++)d=d>>>8^S[255&(d^h[E])];return-1^d}},{}],46:[function(r,c,s){var l,d=r("../utils/common"),h=r("./trees"),g=r("./adler32"),b=r("./crc32"),S=r("./messages"),x=0,E=4,v=0,C=-2,y=-1,A=4,_=2,R=8,D=9,W=286,K=30,nt=19,X=2*W+1,ut=15,tt=3,pt=258,Ot=pt+tt+1,$=42,Q=113,m=1,it=2,Rt=3,lt=4;function Tt(u,et){return u.msg=S[et],et}function st(u){return(u<<1)-(4<u?9:0)}function Pt(u){for(var et=u.length;0<=--et;)u[et]=0}function Y(u){var et=u.state,G=et.pending;G>u.avail_out&&(G=u.avail_out),G!==0&&(d.arraySet(u.output,et.pending_buf,et.pending_out,G,u.next_out),u.next_out+=G,et.pending_out+=G,u.total_out+=G,u.avail_out-=G,et.pending-=G,et.pending===0&&(et.pending_out=0))}function V(u,et){h._tr_flush_block(u,0<=u.block_start?u.block_start:-1,u.strstart-u.block_start,et),u.block_start=u.strstart,Y(u.strm)}function Et(u,et){u.pending_buf[u.pending++]=et}function xt(u,et){u.pending_buf[u.pending++]=et>>>8&255,u.pending_buf[u.pending++]=255&et}function vt(u,et){var G,P,k=u.max_chain_length,N=u.strstart,ot=u.prev_length,at=u.nice_match,H=u.strstart>u.w_size-Ot?u.strstart-(u.w_size-Ot):0,ct=u.window,kt=u.w_mask,dt=u.prev,At=u.strstart+pt,Nt=ct[N+ot-1],Dt=ct[N+ot];u.prev_length>=u.good_match&&(k>>=2),at>u.lookahead&&(at=u.lookahead);do if(ct[(G=et)+ot]===Dt&&ct[G+ot-1]===Nt&&ct[G]===ct[N]&&ct[++G]===ct[N+1]){N+=2,G++;do;while(ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&ct[++N]===ct[++G]&&N<At);if(P=pt-(At-N),N=At-pt,ot<P){if(u.match_start=et,at<=(ot=P))break;Nt=ct[N+ot-1],Dt=ct[N+ot]}}while((et=dt[et&kt])>H&&--k!=0);return ot<=u.lookahead?ot:u.lookahead}function Lt(u){var et,G,P,k,N,ot,at,H,ct,kt,dt=u.w_size;do{if(k=u.window_size-u.lookahead-u.strstart,u.strstart>=dt+(dt-Ot)){for(d.arraySet(u.window,u.window,dt,dt,0),u.match_start-=dt,u.strstart-=dt,u.block_start-=dt,et=G=u.hash_size;P=u.head[--et],u.head[et]=dt<=P?P-dt:0,--G;);for(et=G=dt;P=u.prev[--et],u.prev[et]=dt<=P?P-dt:0,--G;);k+=dt}if(u.strm.avail_in===0)break;if(ot=u.strm,at=u.window,H=u.strstart+u.lookahead,ct=k,kt=void 0,kt=ot.avail_in,ct<kt&&(kt=ct),G=kt===0?0:(ot.avail_in-=kt,d.arraySet(at,ot.input,ot.next_in,kt,H),ot.state.wrap===1?ot.adler=g(ot.adler,at,kt,H):ot.state.wrap===2&&(ot.adler=b(ot.adler,at,kt,H)),ot.next_in+=kt,ot.total_in+=kt,kt),u.lookahead+=G,u.lookahead+u.insert>=tt)for(N=u.strstart-u.insert,u.ins_h=u.window[N],u.ins_h=(u.ins_h<<u.hash_shift^u.window[N+1])&u.hash_mask;u.insert&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[N+tt-1])&u.hash_mask,u.prev[N&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=N,N++,u.insert--,!(u.lookahead+u.insert<tt)););}while(u.lookahead<Ot&&u.strm.avail_in!==0)}function Xt(u,et){for(var G,P;;){if(u.lookahead<Ot){if(Lt(u),u.lookahead<Ot&&et===x)return m;if(u.lookahead===0)break}if(G=0,u.lookahead>=tt&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+tt-1])&u.hash_mask,G=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),G!==0&&u.strstart-G<=u.w_size-Ot&&(u.match_length=vt(u,G)),u.match_length>=tt)if(P=h._tr_tally(u,u.strstart-u.match_start,u.match_length-tt),u.lookahead-=u.match_length,u.match_length<=u.max_lazy_match&&u.lookahead>=tt){for(u.match_length--;u.strstart++,u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+tt-1])&u.hash_mask,G=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart,--u.match_length!=0;);u.strstart++}else u.strstart+=u.match_length,u.match_length=0,u.ins_h=u.window[u.strstart],u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+1])&u.hash_mask;else P=h._tr_tally(u,0,u.window[u.strstart]),u.lookahead--,u.strstart++;if(P&&(V(u,!1),u.strm.avail_out===0))return m}return u.insert=u.strstart<tt-1?u.strstart:tt-1,et===E?(V(u,!0),u.strm.avail_out===0?Rt:lt):u.last_lit&&(V(u,!1),u.strm.avail_out===0)?m:it}function Mt(u,et){for(var G,P,k;;){if(u.lookahead<Ot){if(Lt(u),u.lookahead<Ot&&et===x)return m;if(u.lookahead===0)break}if(G=0,u.lookahead>=tt&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+tt-1])&u.hash_mask,G=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),u.prev_length=u.match_length,u.prev_match=u.match_start,u.match_length=tt-1,G!==0&&u.prev_length<u.max_lazy_match&&u.strstart-G<=u.w_size-Ot&&(u.match_length=vt(u,G),u.match_length<=5&&(u.strategy===1||u.match_length===tt&&4096<u.strstart-u.match_start)&&(u.match_length=tt-1)),u.prev_length>=tt&&u.match_length<=u.prev_length){for(k=u.strstart+u.lookahead-tt,P=h._tr_tally(u,u.strstart-1-u.prev_match,u.prev_length-tt),u.lookahead-=u.prev_length-1,u.prev_length-=2;++u.strstart<=k&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+tt-1])&u.hash_mask,G=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),--u.prev_length!=0;);if(u.match_available=0,u.match_length=tt-1,u.strstart++,P&&(V(u,!1),u.strm.avail_out===0))return m}else if(u.match_available){if((P=h._tr_tally(u,0,u.window[u.strstart-1]))&&V(u,!1),u.strstart++,u.lookahead--,u.strm.avail_out===0)return m}else u.match_available=1,u.strstart++,u.lookahead--}return u.match_available&&(P=h._tr_tally(u,0,u.window[u.strstart-1]),u.match_available=0),u.insert=u.strstart<tt-1?u.strstart:tt-1,et===E?(V(u,!0),u.strm.avail_out===0?Rt:lt):u.last_lit&&(V(u,!1),u.strm.avail_out===0)?m:it}function mt(u,et,G,P,k){this.good_length=u,this.max_lazy=et,this.nice_length=G,this.max_chain=P,this.func=k}function Vt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=R,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new d.Buf16(2*X),this.dyn_dtree=new d.Buf16(2*(2*K+1)),this.bl_tree=new d.Buf16(2*(2*nt+1)),Pt(this.dyn_ltree),Pt(this.dyn_dtree),Pt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new d.Buf16(ut+1),this.heap=new d.Buf16(2*W+1),Pt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new d.Buf16(2*W+1),Pt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Kt(u){var et;return u&&u.state?(u.total_in=u.total_out=0,u.data_type=_,(et=u.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?$:Q,u.adler=et.wrap===2?0:1,et.last_flush=x,h._tr_init(et),v):Tt(u,C)}function zt(u){var et=Kt(u);return et===v&&(function(G){G.window_size=2*G.w_size,Pt(G.head),G.max_lazy_match=l[G.level].max_lazy,G.good_match=l[G.level].good_length,G.nice_match=l[G.level].nice_length,G.max_chain_length=l[G.level].max_chain,G.strstart=0,G.block_start=0,G.lookahead=0,G.insert=0,G.match_length=G.prev_length=tt-1,G.match_available=0,G.ins_h=0})(u.state),et}function ae(u,et,G,P,k,N){if(!u)return C;var ot=1;if(et===y&&(et=6),P<0?(ot=0,P=-P):15<P&&(ot=2,P-=16),k<1||D<k||G!==R||P<8||15<P||et<0||9<et||N<0||A<N)return Tt(u,C);P===8&&(P=9);var at=new Vt;return(u.state=at).strm=u,at.wrap=ot,at.gzhead=null,at.w_bits=P,at.w_size=1<<at.w_bits,at.w_mask=at.w_size-1,at.hash_bits=k+7,at.hash_size=1<<at.hash_bits,at.hash_mask=at.hash_size-1,at.hash_shift=~~((at.hash_bits+tt-1)/tt),at.window=new d.Buf8(2*at.w_size),at.head=new d.Buf16(at.hash_size),at.prev=new d.Buf16(at.w_size),at.lit_bufsize=1<<k+6,at.pending_buf_size=4*at.lit_bufsize,at.pending_buf=new d.Buf8(at.pending_buf_size),at.d_buf=1*at.lit_bufsize,at.l_buf=3*at.lit_bufsize,at.level=et,at.strategy=N,at.method=G,zt(u)}l=[new mt(0,0,0,0,function(u,et){var G=65535;for(G>u.pending_buf_size-5&&(G=u.pending_buf_size-5);;){if(u.lookahead<=1){if(Lt(u),u.lookahead===0&&et===x)return m;if(u.lookahead===0)break}u.strstart+=u.lookahead,u.lookahead=0;var P=u.block_start+G;if((u.strstart===0||u.strstart>=P)&&(u.lookahead=u.strstart-P,u.strstart=P,V(u,!1),u.strm.avail_out===0)||u.strstart-u.block_start>=u.w_size-Ot&&(V(u,!1),u.strm.avail_out===0))return m}return u.insert=0,et===E?(V(u,!0),u.strm.avail_out===0?Rt:lt):(u.strstart>u.block_start&&(V(u,!1),u.strm.avail_out),m)}),new mt(4,4,8,4,Xt),new mt(4,5,16,8,Xt),new mt(4,6,32,32,Xt),new mt(4,4,16,16,Mt),new mt(8,16,32,32,Mt),new mt(8,16,128,128,Mt),new mt(8,32,128,256,Mt),new mt(32,128,258,1024,Mt),new mt(32,258,258,4096,Mt)],s.deflateInit=function(u,et){return ae(u,et,R,15,8,0)},s.deflateInit2=ae,s.deflateReset=zt,s.deflateResetKeep=Kt,s.deflateSetHeader=function(u,et){return u&&u.state?u.state.wrap!==2?C:(u.state.gzhead=et,v):C},s.deflate=function(u,et){var G,P,k,N;if(!u||!u.state||5<et||et<0)return u?Tt(u,C):C;if(P=u.state,!u.output||!u.input&&u.avail_in!==0||P.status===666&&et!==E)return Tt(u,u.avail_out===0?-5:C);if(P.strm=u,G=P.last_flush,P.last_flush=et,P.status===$)if(P.wrap===2)u.adler=0,Et(P,31),Et(P,139),Et(P,8),P.gzhead?(Et(P,(P.gzhead.text?1:0)+(P.gzhead.hcrc?2:0)+(P.gzhead.extra?4:0)+(P.gzhead.name?8:0)+(P.gzhead.comment?16:0)),Et(P,255&P.gzhead.time),Et(P,P.gzhead.time>>8&255),Et(P,P.gzhead.time>>16&255),Et(P,P.gzhead.time>>24&255),Et(P,P.level===9?2:2<=P.strategy||P.level<2?4:0),Et(P,255&P.gzhead.os),P.gzhead.extra&&P.gzhead.extra.length&&(Et(P,255&P.gzhead.extra.length),Et(P,P.gzhead.extra.length>>8&255)),P.gzhead.hcrc&&(u.adler=b(u.adler,P.pending_buf,P.pending,0)),P.gzindex=0,P.status=69):(Et(P,0),Et(P,0),Et(P,0),Et(P,0),Et(P,0),Et(P,P.level===9?2:2<=P.strategy||P.level<2?4:0),Et(P,3),P.status=Q);else{var ot=R+(P.w_bits-8<<4)<<8;ot|=(2<=P.strategy||P.level<2?0:P.level<6?1:P.level===6?2:3)<<6,P.strstart!==0&&(ot|=32),ot+=31-ot%31,P.status=Q,xt(P,ot),P.strstart!==0&&(xt(P,u.adler>>>16),xt(P,65535&u.adler)),u.adler=1}if(P.status===69)if(P.gzhead.extra){for(k=P.pending;P.gzindex<(65535&P.gzhead.extra.length)&&(P.pending!==P.pending_buf_size||(P.gzhead.hcrc&&P.pending>k&&(u.adler=b(u.adler,P.pending_buf,P.pending-k,k)),Y(u),k=P.pending,P.pending!==P.pending_buf_size));)Et(P,255&P.gzhead.extra[P.gzindex]),P.gzindex++;P.gzhead.hcrc&&P.pending>k&&(u.adler=b(u.adler,P.pending_buf,P.pending-k,k)),P.gzindex===P.gzhead.extra.length&&(P.gzindex=0,P.status=73)}else P.status=73;if(P.status===73)if(P.gzhead.name){k=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>k&&(u.adler=b(u.adler,P.pending_buf,P.pending-k,k)),Y(u),k=P.pending,P.pending===P.pending_buf_size)){N=1;break}N=P.gzindex<P.gzhead.name.length?255&P.gzhead.name.charCodeAt(P.gzindex++):0,Et(P,N)}while(N!==0);P.gzhead.hcrc&&P.pending>k&&(u.adler=b(u.adler,P.pending_buf,P.pending-k,k)),N===0&&(P.gzindex=0,P.status=91)}else P.status=91;if(P.status===91)if(P.gzhead.comment){k=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>k&&(u.adler=b(u.adler,P.pending_buf,P.pending-k,k)),Y(u),k=P.pending,P.pending===P.pending_buf_size)){N=1;break}N=P.gzindex<P.gzhead.comment.length?255&P.gzhead.comment.charCodeAt(P.gzindex++):0,Et(P,N)}while(N!==0);P.gzhead.hcrc&&P.pending>k&&(u.adler=b(u.adler,P.pending_buf,P.pending-k,k)),N===0&&(P.status=103)}else P.status=103;if(P.status===103&&(P.gzhead.hcrc?(P.pending+2>P.pending_buf_size&&Y(u),P.pending+2<=P.pending_buf_size&&(Et(P,255&u.adler),Et(P,u.adler>>8&255),u.adler=0,P.status=Q)):P.status=Q),P.pending!==0){if(Y(u),u.avail_out===0)return P.last_flush=-1,v}else if(u.avail_in===0&&st(et)<=st(G)&&et!==E)return Tt(u,-5);if(P.status===666&&u.avail_in!==0)return Tt(u,-5);if(u.avail_in!==0||P.lookahead!==0||et!==x&&P.status!==666){var at=P.strategy===2?(function(H,ct){for(var kt;;){if(H.lookahead===0&&(Lt(H),H.lookahead===0)){if(ct===x)return m;break}if(H.match_length=0,kt=h._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++,kt&&(V(H,!1),H.strm.avail_out===0))return m}return H.insert=0,ct===E?(V(H,!0),H.strm.avail_out===0?Rt:lt):H.last_lit&&(V(H,!1),H.strm.avail_out===0)?m:it})(P,et):P.strategy===3?(function(H,ct){for(var kt,dt,At,Nt,Dt=H.window;;){if(H.lookahead<=pt){if(Lt(H),H.lookahead<=pt&&ct===x)return m;if(H.lookahead===0)break}if(H.match_length=0,H.lookahead>=tt&&0<H.strstart&&(dt=Dt[At=H.strstart-1])===Dt[++At]&&dt===Dt[++At]&&dt===Dt[++At]){Nt=H.strstart+pt;do;while(dt===Dt[++At]&&dt===Dt[++At]&&dt===Dt[++At]&&dt===Dt[++At]&&dt===Dt[++At]&&dt===Dt[++At]&&dt===Dt[++At]&&dt===Dt[++At]&&At<Nt);H.match_length=pt-(Nt-At),H.match_length>H.lookahead&&(H.match_length=H.lookahead)}if(H.match_length>=tt?(kt=h._tr_tally(H,1,H.match_length-tt),H.lookahead-=H.match_length,H.strstart+=H.match_length,H.match_length=0):(kt=h._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++),kt&&(V(H,!1),H.strm.avail_out===0))return m}return H.insert=0,ct===E?(V(H,!0),H.strm.avail_out===0?Rt:lt):H.last_lit&&(V(H,!1),H.strm.avail_out===0)?m:it})(P,et):l[P.level].func(P,et);if(at!==Rt&&at!==lt||(P.status=666),at===m||at===Rt)return u.avail_out===0&&(P.last_flush=-1),v;if(at===it&&(et===1?h._tr_align(P):et!==5&&(h._tr_stored_block(P,0,0,!1),et===3&&(Pt(P.head),P.lookahead===0&&(P.strstart=0,P.block_start=0,P.insert=0))),Y(u),u.avail_out===0))return P.last_flush=-1,v}return et!==E?v:P.wrap<=0?1:(P.wrap===2?(Et(P,255&u.adler),Et(P,u.adler>>8&255),Et(P,u.adler>>16&255),Et(P,u.adler>>24&255),Et(P,255&u.total_in),Et(P,u.total_in>>8&255),Et(P,u.total_in>>16&255),Et(P,u.total_in>>24&255)):(xt(P,u.adler>>>16),xt(P,65535&u.adler)),Y(u),0<P.wrap&&(P.wrap=-P.wrap),P.pending!==0?v:1)},s.deflateEnd=function(u){var et;return u&&u.state?(et=u.state.status)!==$&&et!==69&&et!==73&&et!==91&&et!==103&&et!==Q&&et!==666?Tt(u,C):(u.state=null,et===Q?Tt(u,-3):v):C},s.deflateSetDictionary=function(u,et){var G,P,k,N,ot,at,H,ct,kt=et.length;if(!u||!u.state||(N=(G=u.state).wrap)===2||N===1&&G.status!==$||G.lookahead)return C;for(N===1&&(u.adler=g(u.adler,et,kt,0)),G.wrap=0,kt>=G.w_size&&(N===0&&(Pt(G.head),G.strstart=0,G.block_start=0,G.insert=0),ct=new d.Buf8(G.w_size),d.arraySet(ct,et,kt-G.w_size,G.w_size,0),et=ct,kt=G.w_size),ot=u.avail_in,at=u.next_in,H=u.input,u.avail_in=kt,u.next_in=0,u.input=et,Lt(G);G.lookahead>=tt;){for(P=G.strstart,k=G.lookahead-(tt-1);G.ins_h=(G.ins_h<<G.hash_shift^G.window[P+tt-1])&G.hash_mask,G.prev[P&G.w_mask]=G.head[G.ins_h],G.head[G.ins_h]=P,P++,--k;);G.strstart=P,G.lookahead=tt-1,Lt(G)}return G.strstart+=G.lookahead,G.block_start=G.strstart,G.insert=G.lookahead,G.lookahead=0,G.match_length=G.prev_length=tt-1,G.match_available=0,u.next_in=at,u.input=H,u.avail_in=ot,G.wrap=N,v},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,c,s){c.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,c,s){c.exports=function(l,d){var h,g,b,S,x,E,v,C,y,A,_,R,D,W,K,nt,X,ut,tt,pt,Ot,$,Q,m,it;h=l.state,g=l.next_in,m=l.input,b=g+(l.avail_in-5),S=l.next_out,it=l.output,x=S-(d-l.avail_out),E=S+(l.avail_out-257),v=h.dmax,C=h.wsize,y=h.whave,A=h.wnext,_=h.window,R=h.hold,D=h.bits,W=h.lencode,K=h.distcode,nt=(1<<h.lenbits)-1,X=(1<<h.distbits)-1;t:do{D<15&&(R+=m[g++]<<D,D+=8,R+=m[g++]<<D,D+=8),ut=W[R&nt];e:for(;;){if(R>>>=tt=ut>>>24,D-=tt,(tt=ut>>>16&255)===0)it[S++]=65535&ut;else{if(!(16&tt)){if((64&tt)==0){ut=W[(65535&ut)+(R&(1<<tt)-1)];continue e}if(32&tt){h.mode=12;break t}l.msg="invalid literal/length code",h.mode=30;break t}pt=65535&ut,(tt&=15)&&(D<tt&&(R+=m[g++]<<D,D+=8),pt+=R&(1<<tt)-1,R>>>=tt,D-=tt),D<15&&(R+=m[g++]<<D,D+=8,R+=m[g++]<<D,D+=8),ut=K[R&X];n:for(;;){if(R>>>=tt=ut>>>24,D-=tt,!(16&(tt=ut>>>16&255))){if((64&tt)==0){ut=K[(65535&ut)+(R&(1<<tt)-1)];continue n}l.msg="invalid distance code",h.mode=30;break t}if(Ot=65535&ut,D<(tt&=15)&&(R+=m[g++]<<D,(D+=8)<tt&&(R+=m[g++]<<D,D+=8)),v<(Ot+=R&(1<<tt)-1)){l.msg="invalid distance too far back",h.mode=30;break t}if(R>>>=tt,D-=tt,(tt=S-x)<Ot){if(y<(tt=Ot-tt)&&h.sane){l.msg="invalid distance too far back",h.mode=30;break t}if(Q=_,($=0)===A){if($+=C-tt,tt<pt){for(pt-=tt;it[S++]=_[$++],--tt;);$=S-Ot,Q=it}}else if(A<tt){if($+=C+A-tt,(tt-=A)<pt){for(pt-=tt;it[S++]=_[$++],--tt;);if($=0,A<pt){for(pt-=tt=A;it[S++]=_[$++],--tt;);$=S-Ot,Q=it}}}else if($+=A-tt,tt<pt){for(pt-=tt;it[S++]=_[$++],--tt;);$=S-Ot,Q=it}for(;2<pt;)it[S++]=Q[$++],it[S++]=Q[$++],it[S++]=Q[$++],pt-=3;pt&&(it[S++]=Q[$++],1<pt&&(it[S++]=Q[$++]))}else{for($=S-Ot;it[S++]=it[$++],it[S++]=it[$++],it[S++]=it[$++],2<(pt-=3););pt&&(it[S++]=it[$++],1<pt&&(it[S++]=it[$++]))}break}}break}}while(g<b&&S<E);g-=pt=D>>3,R&=(1<<(D-=pt<<3))-1,l.next_in=g,l.next_out=S,l.avail_in=g<b?b-g+5:5-(g-b),l.avail_out=S<E?E-S+257:257-(S-E),h.hold=R,h.bits=D}},{}],49:[function(r,c,s){var l=r("../utils/common"),d=r("./adler32"),h=r("./crc32"),g=r("./inffast"),b=r("./inftrees"),S=1,x=2,E=0,v=-2,C=1,y=852,A=592;function _($){return($>>>24&255)+($>>>8&65280)+((65280&$)<<8)+((255&$)<<24)}function R(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new l.Buf16(320),this.work=new l.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function D($){var Q;return $&&$.state?(Q=$.state,$.total_in=$.total_out=Q.total=0,$.msg="",Q.wrap&&($.adler=1&Q.wrap),Q.mode=C,Q.last=0,Q.havedict=0,Q.dmax=32768,Q.head=null,Q.hold=0,Q.bits=0,Q.lencode=Q.lendyn=new l.Buf32(y),Q.distcode=Q.distdyn=new l.Buf32(A),Q.sane=1,Q.back=-1,E):v}function W($){var Q;return $&&$.state?((Q=$.state).wsize=0,Q.whave=0,Q.wnext=0,D($)):v}function K($,Q){var m,it;return $&&$.state?(it=$.state,Q<0?(m=0,Q=-Q):(m=1+(Q>>4),Q<48&&(Q&=15)),Q&&(Q<8||15<Q)?v:(it.window!==null&&it.wbits!==Q&&(it.window=null),it.wrap=m,it.wbits=Q,W($))):v}function nt($,Q){var m,it;return $?(it=new R,($.state=it).window=null,(m=K($,Q))!==E&&($.state=null),m):v}var X,ut,tt=!0;function pt($){if(tt){var Q;for(X=new l.Buf32(512),ut=new l.Buf32(32),Q=0;Q<144;)$.lens[Q++]=8;for(;Q<256;)$.lens[Q++]=9;for(;Q<280;)$.lens[Q++]=7;for(;Q<288;)$.lens[Q++]=8;for(b(S,$.lens,0,288,X,0,$.work,{bits:9}),Q=0;Q<32;)$.lens[Q++]=5;b(x,$.lens,0,32,ut,0,$.work,{bits:5}),tt=!1}$.lencode=X,$.lenbits=9,$.distcode=ut,$.distbits=5}function Ot($,Q,m,it){var Rt,lt=$.state;return lt.window===null&&(lt.wsize=1<<lt.wbits,lt.wnext=0,lt.whave=0,lt.window=new l.Buf8(lt.wsize)),it>=lt.wsize?(l.arraySet(lt.window,Q,m-lt.wsize,lt.wsize,0),lt.wnext=0,lt.whave=lt.wsize):(it<(Rt=lt.wsize-lt.wnext)&&(Rt=it),l.arraySet(lt.window,Q,m-it,Rt,lt.wnext),(it-=Rt)?(l.arraySet(lt.window,Q,m-it,it,0),lt.wnext=it,lt.whave=lt.wsize):(lt.wnext+=Rt,lt.wnext===lt.wsize&&(lt.wnext=0),lt.whave<lt.wsize&&(lt.whave+=Rt))),0}s.inflateReset=W,s.inflateReset2=K,s.inflateResetKeep=D,s.inflateInit=function($){return nt($,15)},s.inflateInit2=nt,s.inflate=function($,Q){var m,it,Rt,lt,Tt,st,Pt,Y,V,Et,xt,vt,Lt,Xt,Mt,mt,Vt,Kt,zt,ae,u,et,G,P,k=0,N=new l.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!$||!$.state||!$.output||!$.input&&$.avail_in!==0)return v;(m=$.state).mode===12&&(m.mode=13),Tt=$.next_out,Rt=$.output,Pt=$.avail_out,lt=$.next_in,it=$.input,st=$.avail_in,Y=m.hold,V=m.bits,Et=st,xt=Pt,et=E;t:for(;;)switch(m.mode){case C:if(m.wrap===0){m.mode=13;break}for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(2&m.wrap&&Y===35615){N[m.check=0]=255&Y,N[1]=Y>>>8&255,m.check=h(m.check,N,2,0),V=Y=0,m.mode=2;break}if(m.flags=0,m.head&&(m.head.done=!1),!(1&m.wrap)||(((255&Y)<<8)+(Y>>8))%31){$.msg="incorrect header check",m.mode=30;break}if((15&Y)!=8){$.msg="unknown compression method",m.mode=30;break}if(V-=4,u=8+(15&(Y>>>=4)),m.wbits===0)m.wbits=u;else if(u>m.wbits){$.msg="invalid window size",m.mode=30;break}m.dmax=1<<u,$.adler=m.check=1,m.mode=512&Y?10:12,V=Y=0;break;case 2:for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(m.flags=Y,(255&m.flags)!=8){$.msg="unknown compression method",m.mode=30;break}if(57344&m.flags){$.msg="unknown header flags set",m.mode=30;break}m.head&&(m.head.text=Y>>8&1),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,m.check=h(m.check,N,2,0)),V=Y=0,m.mode=3;case 3:for(;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.head&&(m.head.time=Y),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,N[2]=Y>>>16&255,N[3]=Y>>>24&255,m.check=h(m.check,N,4,0)),V=Y=0,m.mode=4;case 4:for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.head&&(m.head.xflags=255&Y,m.head.os=Y>>8),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,m.check=h(m.check,N,2,0)),V=Y=0,m.mode=5;case 5:if(1024&m.flags){for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.length=Y,m.head&&(m.head.extra_len=Y),512&m.flags&&(N[0]=255&Y,N[1]=Y>>>8&255,m.check=h(m.check,N,2,0)),V=Y=0}else m.head&&(m.head.extra=null);m.mode=6;case 6:if(1024&m.flags&&(st<(vt=m.length)&&(vt=st),vt&&(m.head&&(u=m.head.extra_len-m.length,m.head.extra||(m.head.extra=new Array(m.head.extra_len)),l.arraySet(m.head.extra,it,lt,vt,u)),512&m.flags&&(m.check=h(m.check,it,vt,lt)),st-=vt,lt+=vt,m.length-=vt),m.length))break t;m.length=0,m.mode=7;case 7:if(2048&m.flags){if(st===0)break t;for(vt=0;u=it[lt+vt++],m.head&&u&&m.length<65536&&(m.head.name+=String.fromCharCode(u)),u&&vt<st;);if(512&m.flags&&(m.check=h(m.check,it,vt,lt)),st-=vt,lt+=vt,u)break t}else m.head&&(m.head.name=null);m.length=0,m.mode=8;case 8:if(4096&m.flags){if(st===0)break t;for(vt=0;u=it[lt+vt++],m.head&&u&&m.length<65536&&(m.head.comment+=String.fromCharCode(u)),u&&vt<st;);if(512&m.flags&&(m.check=h(m.check,it,vt,lt)),st-=vt,lt+=vt,u)break t}else m.head&&(m.head.comment=null);m.mode=9;case 9:if(512&m.flags){for(;V<16;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Y!==(65535&m.check)){$.msg="header crc mismatch",m.mode=30;break}V=Y=0}m.head&&(m.head.hcrc=m.flags>>9&1,m.head.done=!0),$.adler=m.check=0,m.mode=12;break;case 10:for(;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}$.adler=m.check=_(Y),V=Y=0,m.mode=11;case 11:if(m.havedict===0)return $.next_out=Tt,$.avail_out=Pt,$.next_in=lt,$.avail_in=st,m.hold=Y,m.bits=V,2;$.adler=m.check=1,m.mode=12;case 12:if(Q===5||Q===6)break t;case 13:if(m.last){Y>>>=7&V,V-=7&V,m.mode=27;break}for(;V<3;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}switch(m.last=1&Y,V-=1,3&(Y>>>=1)){case 0:m.mode=14;break;case 1:if(pt(m),m.mode=20,Q!==6)break;Y>>>=2,V-=2;break t;case 2:m.mode=17;break;case 3:$.msg="invalid block type",m.mode=30}Y>>>=2,V-=2;break;case 14:for(Y>>>=7&V,V-=7&V;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if((65535&Y)!=(Y>>>16^65535)){$.msg="invalid stored block lengths",m.mode=30;break}if(m.length=65535&Y,V=Y=0,m.mode=15,Q===6)break t;case 15:m.mode=16;case 16:if(vt=m.length){if(st<vt&&(vt=st),Pt<vt&&(vt=Pt),vt===0)break t;l.arraySet(Rt,it,lt,vt,Tt),st-=vt,lt+=vt,Pt-=vt,Tt+=vt,m.length-=vt;break}m.mode=12;break;case 17:for(;V<14;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(m.nlen=257+(31&Y),Y>>>=5,V-=5,m.ndist=1+(31&Y),Y>>>=5,V-=5,m.ncode=4+(15&Y),Y>>>=4,V-=4,286<m.nlen||30<m.ndist){$.msg="too many length or distance symbols",m.mode=30;break}m.have=0,m.mode=18;case 18:for(;m.have<m.ncode;){for(;V<3;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.lens[ot[m.have++]]=7&Y,Y>>>=3,V-=3}for(;m.have<19;)m.lens[ot[m.have++]]=0;if(m.lencode=m.lendyn,m.lenbits=7,G={bits:m.lenbits},et=b(0,m.lens,0,19,m.lencode,0,m.work,G),m.lenbits=G.bits,et){$.msg="invalid code lengths set",m.mode=30;break}m.have=0,m.mode=19;case 19:for(;m.have<m.nlen+m.ndist;){for(;mt=(k=m.lencode[Y&(1<<m.lenbits)-1])>>>16&255,Vt=65535&k,!((Mt=k>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Vt<16)Y>>>=Mt,V-=Mt,m.lens[m.have++]=Vt;else{if(Vt===16){for(P=Mt+2;V<P;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Y>>>=Mt,V-=Mt,m.have===0){$.msg="invalid bit length repeat",m.mode=30;break}u=m.lens[m.have-1],vt=3+(3&Y),Y>>>=2,V-=2}else if(Vt===17){for(P=Mt+3;V<P;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}V-=Mt,u=0,vt=3+(7&(Y>>>=Mt)),Y>>>=3,V-=3}else{for(P=Mt+7;V<P;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}V-=Mt,u=0,vt=11+(127&(Y>>>=Mt)),Y>>>=7,V-=7}if(m.have+vt>m.nlen+m.ndist){$.msg="invalid bit length repeat",m.mode=30;break}for(;vt--;)m.lens[m.have++]=u}}if(m.mode===30)break;if(m.lens[256]===0){$.msg="invalid code -- missing end-of-block",m.mode=30;break}if(m.lenbits=9,G={bits:m.lenbits},et=b(S,m.lens,0,m.nlen,m.lencode,0,m.work,G),m.lenbits=G.bits,et){$.msg="invalid literal/lengths set",m.mode=30;break}if(m.distbits=6,m.distcode=m.distdyn,G={bits:m.distbits},et=b(x,m.lens,m.nlen,m.ndist,m.distcode,0,m.work,G),m.distbits=G.bits,et){$.msg="invalid distances set",m.mode=30;break}if(m.mode=20,Q===6)break t;case 20:m.mode=21;case 21:if(6<=st&&258<=Pt){$.next_out=Tt,$.avail_out=Pt,$.next_in=lt,$.avail_in=st,m.hold=Y,m.bits=V,g($,xt),Tt=$.next_out,Rt=$.output,Pt=$.avail_out,lt=$.next_in,it=$.input,st=$.avail_in,Y=m.hold,V=m.bits,m.mode===12&&(m.back=-1);break}for(m.back=0;mt=(k=m.lencode[Y&(1<<m.lenbits)-1])>>>16&255,Vt=65535&k,!((Mt=k>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(mt&&(240&mt)==0){for(Kt=Mt,zt=mt,ae=Vt;mt=(k=m.lencode[ae+((Y&(1<<Kt+zt)-1)>>Kt)])>>>16&255,Vt=65535&k,!(Kt+(Mt=k>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}Y>>>=Kt,V-=Kt,m.back+=Kt}if(Y>>>=Mt,V-=Mt,m.back+=Mt,m.length=Vt,mt===0){m.mode=26;break}if(32&mt){m.back=-1,m.mode=12;break}if(64&mt){$.msg="invalid literal/length code",m.mode=30;break}m.extra=15&mt,m.mode=22;case 22:if(m.extra){for(P=m.extra;V<P;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.length+=Y&(1<<m.extra)-1,Y>>>=m.extra,V-=m.extra,m.back+=m.extra}m.was=m.length,m.mode=23;case 23:for(;mt=(k=m.distcode[Y&(1<<m.distbits)-1])>>>16&255,Vt=65535&k,!((Mt=k>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if((240&mt)==0){for(Kt=Mt,zt=mt,ae=Vt;mt=(k=m.distcode[ae+((Y&(1<<Kt+zt)-1)>>Kt)])>>>16&255,Vt=65535&k,!(Kt+(Mt=k>>>24)<=V);){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}Y>>>=Kt,V-=Kt,m.back+=Kt}if(Y>>>=Mt,V-=Mt,m.back+=Mt,64&mt){$.msg="invalid distance code",m.mode=30;break}m.offset=Vt,m.extra=15&mt,m.mode=24;case 24:if(m.extra){for(P=m.extra;V<P;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}m.offset+=Y&(1<<m.extra)-1,Y>>>=m.extra,V-=m.extra,m.back+=m.extra}if(m.offset>m.dmax){$.msg="invalid distance too far back",m.mode=30;break}m.mode=25;case 25:if(Pt===0)break t;if(vt=xt-Pt,m.offset>vt){if((vt=m.offset-vt)>m.whave&&m.sane){$.msg="invalid distance too far back",m.mode=30;break}Lt=vt>m.wnext?(vt-=m.wnext,m.wsize-vt):m.wnext-vt,vt>m.length&&(vt=m.length),Xt=m.window}else Xt=Rt,Lt=Tt-m.offset,vt=m.length;for(Pt<vt&&(vt=Pt),Pt-=vt,m.length-=vt;Rt[Tt++]=Xt[Lt++],--vt;);m.length===0&&(m.mode=21);break;case 26:if(Pt===0)break t;Rt[Tt++]=m.length,Pt--,m.mode=21;break;case 27:if(m.wrap){for(;V<32;){if(st===0)break t;st--,Y|=it[lt++]<<V,V+=8}if(xt-=Pt,$.total_out+=xt,m.total+=xt,xt&&($.adler=m.check=m.flags?h(m.check,Rt,xt,Tt-xt):d(m.check,Rt,xt,Tt-xt)),xt=Pt,(m.flags?Y:_(Y))!==m.check){$.msg="incorrect data check",m.mode=30;break}V=Y=0}m.mode=28;case 28:if(m.wrap&&m.flags){for(;V<32;){if(st===0)break t;st--,Y+=it[lt++]<<V,V+=8}if(Y!==(4294967295&m.total)){$.msg="incorrect length check",m.mode=30;break}V=Y=0}m.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;case 32:default:return v}return $.next_out=Tt,$.avail_out=Pt,$.next_in=lt,$.avail_in=st,m.hold=Y,m.bits=V,(m.wsize||xt!==$.avail_out&&m.mode<30&&(m.mode<27||Q!==4))&&Ot($,$.output,$.next_out,xt-$.avail_out)?(m.mode=31,-4):(Et-=$.avail_in,xt-=$.avail_out,$.total_in+=Et,$.total_out+=xt,m.total+=xt,m.wrap&&xt&&($.adler=m.check=m.flags?h(m.check,Rt,xt,$.next_out-xt):d(m.check,Rt,xt,$.next_out-xt)),$.data_type=m.bits+(m.last?64:0)+(m.mode===12?128:0)+(m.mode===20||m.mode===15?256:0),(Et==0&&xt===0||Q===4)&&et===E&&(et=-5),et)},s.inflateEnd=function($){if(!$||!$.state)return v;var Q=$.state;return Q.window&&(Q.window=null),$.state=null,E},s.inflateGetHeader=function($,Q){var m;return $&&$.state?(2&(m=$.state).wrap)==0?v:((m.head=Q).done=!1,E):v},s.inflateSetDictionary=function($,Q){var m,it=Q.length;return $&&$.state?(m=$.state).wrap!==0&&m.mode!==11?v:m.mode===11&&d(1,Q,it,0)!==m.check?-3:Ot($,Q,it,it)?(m.mode=31,-4):(m.havedict=1,E):v},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,c,s){var l=r("../utils/common"),d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],h=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],g=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],b=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];c.exports=function(S,x,E,v,C,y,A,_){var R,D,W,K,nt,X,ut,tt,pt,Ot=_.bits,$=0,Q=0,m=0,it=0,Rt=0,lt=0,Tt=0,st=0,Pt=0,Y=0,V=null,Et=0,xt=new l.Buf16(16),vt=new l.Buf16(16),Lt=null,Xt=0;for($=0;$<=15;$++)xt[$]=0;for(Q=0;Q<v;Q++)xt[x[E+Q]]++;for(Rt=Ot,it=15;1<=it&&xt[it]===0;it--);if(it<Rt&&(Rt=it),it===0)return C[y++]=20971520,C[y++]=20971520,_.bits=1,0;for(m=1;m<it&&xt[m]===0;m++);for(Rt<m&&(Rt=m),$=st=1;$<=15;$++)if(st<<=1,(st-=xt[$])<0)return-1;if(0<st&&(S===0||it!==1))return-1;for(vt[1]=0,$=1;$<15;$++)vt[$+1]=vt[$]+xt[$];for(Q=0;Q<v;Q++)x[E+Q]!==0&&(A[vt[x[E+Q]]++]=Q);if(X=S===0?(V=Lt=A,19):S===1?(V=d,Et-=257,Lt=h,Xt-=257,256):(V=g,Lt=b,-1),$=m,nt=y,Tt=Q=Y=0,W=-1,K=(Pt=1<<(lt=Rt))-1,S===1&&852<Pt||S===2&&592<Pt)return 1;for(;;){for(ut=$-Tt,pt=A[Q]<X?(tt=0,A[Q]):A[Q]>X?(tt=Lt[Xt+A[Q]],V[Et+A[Q]]):(tt=96,0),R=1<<$-Tt,m=D=1<<lt;C[nt+(Y>>Tt)+(D-=R)]=ut<<24|tt<<16|pt|0,D!==0;);for(R=1<<$-1;Y&R;)R>>=1;if(R!==0?(Y&=R-1,Y+=R):Y=0,Q++,--xt[$]==0){if($===it)break;$=x[E+A[Q]]}if(Rt<$&&(Y&K)!==W){for(Tt===0&&(Tt=Rt),nt+=m,st=1<<(lt=$-Tt);lt+Tt<it&&!((st-=xt[lt+Tt])<=0);)lt++,st<<=1;if(Pt+=1<<lt,S===1&&852<Pt||S===2&&592<Pt)return 1;C[W=Y&K]=Rt<<24|lt<<16|nt-y|0}}return Y!==0&&(C[nt+Y]=$-Tt<<24|64<<16|0),_.bits=Rt,0}},{"../utils/common":41}],51:[function(r,c,s){c.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,c,s){var l=r("../utils/common"),d=0,h=1;function g(k){for(var N=k.length;0<=--N;)k[N]=0}var b=0,S=29,x=256,E=x+1+S,v=30,C=19,y=2*E+1,A=15,_=16,R=7,D=256,W=16,K=17,nt=18,X=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ut=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ot=new Array(2*(E+2));g(Ot);var $=new Array(2*v);g($);var Q=new Array(512);g(Q);var m=new Array(256);g(m);var it=new Array(S);g(it);var Rt,lt,Tt,st=new Array(v);function Pt(k,N,ot,at,H){this.static_tree=k,this.extra_bits=N,this.extra_base=ot,this.elems=at,this.max_length=H,this.has_stree=k&&k.length}function Y(k,N){this.dyn_tree=k,this.max_code=0,this.stat_desc=N}function V(k){return k<256?Q[k]:Q[256+(k>>>7)]}function Et(k,N){k.pending_buf[k.pending++]=255&N,k.pending_buf[k.pending++]=N>>>8&255}function xt(k,N,ot){k.bi_valid>_-ot?(k.bi_buf|=N<<k.bi_valid&65535,Et(k,k.bi_buf),k.bi_buf=N>>_-k.bi_valid,k.bi_valid+=ot-_):(k.bi_buf|=N<<k.bi_valid&65535,k.bi_valid+=ot)}function vt(k,N,ot){xt(k,ot[2*N],ot[2*N+1])}function Lt(k,N){for(var ot=0;ot|=1&k,k>>>=1,ot<<=1,0<--N;);return ot>>>1}function Xt(k,N,ot){var at,H,ct=new Array(A+1),kt=0;for(at=1;at<=A;at++)ct[at]=kt=kt+ot[at-1]<<1;for(H=0;H<=N;H++){var dt=k[2*H+1];dt!==0&&(k[2*H]=Lt(ct[dt]++,dt))}}function Mt(k){var N;for(N=0;N<E;N++)k.dyn_ltree[2*N]=0;for(N=0;N<v;N++)k.dyn_dtree[2*N]=0;for(N=0;N<C;N++)k.bl_tree[2*N]=0;k.dyn_ltree[2*D]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function mt(k){8<k.bi_valid?Et(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function Vt(k,N,ot,at){var H=2*N,ct=2*ot;return k[H]<k[ct]||k[H]===k[ct]&&at[N]<=at[ot]}function Kt(k,N,ot){for(var at=k.heap[ot],H=ot<<1;H<=k.heap_len&&(H<k.heap_len&&Vt(N,k.heap[H+1],k.heap[H],k.depth)&&H++,!Vt(N,at,k.heap[H],k.depth));)k.heap[ot]=k.heap[H],ot=H,H<<=1;k.heap[ot]=at}function zt(k,N,ot){var at,H,ct,kt,dt=0;if(k.last_lit!==0)for(;at=k.pending_buf[k.d_buf+2*dt]<<8|k.pending_buf[k.d_buf+2*dt+1],H=k.pending_buf[k.l_buf+dt],dt++,at===0?vt(k,H,N):(vt(k,(ct=m[H])+x+1,N),(kt=X[ct])!==0&&xt(k,H-=it[ct],kt),vt(k,ct=V(--at),ot),(kt=ut[ct])!==0&&xt(k,at-=st[ct],kt)),dt<k.last_lit;);vt(k,D,N)}function ae(k,N){var ot,at,H,ct=N.dyn_tree,kt=N.stat_desc.static_tree,dt=N.stat_desc.has_stree,At=N.stat_desc.elems,Nt=-1;for(k.heap_len=0,k.heap_max=y,ot=0;ot<At;ot++)ct[2*ot]!==0?(k.heap[++k.heap_len]=Nt=ot,k.depth[ot]=0):ct[2*ot+1]=0;for(;k.heap_len<2;)ct[2*(H=k.heap[++k.heap_len]=Nt<2?++Nt:0)]=1,k.depth[H]=0,k.opt_len--,dt&&(k.static_len-=kt[2*H+1]);for(N.max_code=Nt,ot=k.heap_len>>1;1<=ot;ot--)Kt(k,ct,ot);for(H=At;ot=k.heap[1],k.heap[1]=k.heap[k.heap_len--],Kt(k,ct,1),at=k.heap[1],k.heap[--k.heap_max]=ot,k.heap[--k.heap_max]=at,ct[2*H]=ct[2*ot]+ct[2*at],k.depth[H]=(k.depth[ot]>=k.depth[at]?k.depth[ot]:k.depth[at])+1,ct[2*ot+1]=ct[2*at+1]=H,k.heap[1]=H++,Kt(k,ct,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],(function(Dt,ee){var Se,ce,pe,qt,Oe,ve,St=ee.dyn_tree,Re=ee.max_code,Ce=ee.stat_desc.static_tree,Je=ee.stat_desc.has_stree,_t=ee.stat_desc.extra_bits,Qe=ee.stat_desc.extra_base,Te=ee.stat_desc.max_length,$e=0;for(qt=0;qt<=A;qt++)Dt.bl_count[qt]=0;for(St[2*Dt.heap[Dt.heap_max]+1]=0,Se=Dt.heap_max+1;Se<y;Se++)Te<(qt=St[2*St[2*(ce=Dt.heap[Se])+1]+1]+1)&&(qt=Te,$e++),St[2*ce+1]=qt,Re<ce||(Dt.bl_count[qt]++,Oe=0,Qe<=ce&&(Oe=_t[ce-Qe]),ve=St[2*ce],Dt.opt_len+=ve*(qt+Oe),Je&&(Dt.static_len+=ve*(Ce[2*ce+1]+Oe)));if($e!==0){do{for(qt=Te-1;Dt.bl_count[qt]===0;)qt--;Dt.bl_count[qt]--,Dt.bl_count[qt+1]+=2,Dt.bl_count[Te]--,$e-=2}while(0<$e);for(qt=Te;qt!==0;qt--)for(ce=Dt.bl_count[qt];ce!==0;)Re<(pe=Dt.heap[--Se])||(St[2*pe+1]!==qt&&(Dt.opt_len+=(qt-St[2*pe+1])*St[2*pe],St[2*pe+1]=qt),ce--)}})(k,N),Xt(ct,Nt,k.bl_count)}function u(k,N,ot){var at,H,ct=-1,kt=N[1],dt=0,At=7,Nt=4;for(kt===0&&(At=138,Nt=3),N[2*(ot+1)+1]=65535,at=0;at<=ot;at++)H=kt,kt=N[2*(at+1)+1],++dt<At&&H===kt||(dt<Nt?k.bl_tree[2*H]+=dt:H!==0?(H!==ct&&k.bl_tree[2*H]++,k.bl_tree[2*W]++):dt<=10?k.bl_tree[2*K]++:k.bl_tree[2*nt]++,ct=H,Nt=(dt=0)===kt?(At=138,3):H===kt?(At=6,3):(At=7,4))}function et(k,N,ot){var at,H,ct=-1,kt=N[1],dt=0,At=7,Nt=4;for(kt===0&&(At=138,Nt=3),at=0;at<=ot;at++)if(H=kt,kt=N[2*(at+1)+1],!(++dt<At&&H===kt)){if(dt<Nt)for(;vt(k,H,k.bl_tree),--dt!=0;);else H!==0?(H!==ct&&(vt(k,H,k.bl_tree),dt--),vt(k,W,k.bl_tree),xt(k,dt-3,2)):dt<=10?(vt(k,K,k.bl_tree),xt(k,dt-3,3)):(vt(k,nt,k.bl_tree),xt(k,dt-11,7));ct=H,Nt=(dt=0)===kt?(At=138,3):H===kt?(At=6,3):(At=7,4)}}g(st);var G=!1;function P(k,N,ot,at){xt(k,(b<<1)+(at?1:0),3),(function(H,ct,kt,dt){mt(H),Et(H,kt),Et(H,~kt),l.arraySet(H.pending_buf,H.window,ct,kt,H.pending),H.pending+=kt})(k,N,ot)}s._tr_init=function(k){G||((function(){var N,ot,at,H,ct,kt=new Array(A+1);for(H=at=0;H<S-1;H++)for(it[H]=at,N=0;N<1<<X[H];N++)m[at++]=H;for(m[at-1]=H,H=ct=0;H<16;H++)for(st[H]=ct,N=0;N<1<<ut[H];N++)Q[ct++]=H;for(ct>>=7;H<v;H++)for(st[H]=ct<<7,N=0;N<1<<ut[H]-7;N++)Q[256+ct++]=H;for(ot=0;ot<=A;ot++)kt[ot]=0;for(N=0;N<=143;)Ot[2*N+1]=8,N++,kt[8]++;for(;N<=255;)Ot[2*N+1]=9,N++,kt[9]++;for(;N<=279;)Ot[2*N+1]=7,N++,kt[7]++;for(;N<=287;)Ot[2*N+1]=8,N++,kt[8]++;for(Xt(Ot,E+1,kt),N=0;N<v;N++)$[2*N+1]=5,$[2*N]=Lt(N,5);Rt=new Pt(Ot,X,x+1,E,A),lt=new Pt($,ut,0,v,A),Tt=new Pt(new Array(0),tt,0,C,R)})(),G=!0),k.l_desc=new Y(k.dyn_ltree,Rt),k.d_desc=new Y(k.dyn_dtree,lt),k.bl_desc=new Y(k.bl_tree,Tt),k.bi_buf=0,k.bi_valid=0,Mt(k)},s._tr_stored_block=P,s._tr_flush_block=function(k,N,ot,at){var H,ct,kt=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=(function(dt){var At,Nt=4093624447;for(At=0;At<=31;At++,Nt>>>=1)if(1&Nt&&dt.dyn_ltree[2*At]!==0)return d;if(dt.dyn_ltree[18]!==0||dt.dyn_ltree[20]!==0||dt.dyn_ltree[26]!==0)return h;for(At=32;At<x;At++)if(dt.dyn_ltree[2*At]!==0)return h;return d})(k)),ae(k,k.l_desc),ae(k,k.d_desc),kt=(function(dt){var At;for(u(dt,dt.dyn_ltree,dt.l_desc.max_code),u(dt,dt.dyn_dtree,dt.d_desc.max_code),ae(dt,dt.bl_desc),At=C-1;3<=At&&dt.bl_tree[2*pt[At]+1]===0;At--);return dt.opt_len+=3*(At+1)+5+5+4,At})(k),H=k.opt_len+3+7>>>3,(ct=k.static_len+3+7>>>3)<=H&&(H=ct)):H=ct=ot+5,ot+4<=H&&N!==-1?P(k,N,ot,at):k.strategy===4||ct===H?(xt(k,2+(at?1:0),3),zt(k,Ot,$)):(xt(k,4+(at?1:0),3),(function(dt,At,Nt,Dt){var ee;for(xt(dt,At-257,5),xt(dt,Nt-1,5),xt(dt,Dt-4,4),ee=0;ee<Dt;ee++)xt(dt,dt.bl_tree[2*pt[ee]+1],3);et(dt,dt.dyn_ltree,At-1),et(dt,dt.dyn_dtree,Nt-1)})(k,k.l_desc.max_code+1,k.d_desc.max_code+1,kt+1),zt(k,k.dyn_ltree,k.dyn_dtree)),Mt(k),at&&mt(k)},s._tr_tally=function(k,N,ot){return k.pending_buf[k.d_buf+2*k.last_lit]=N>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&N,k.pending_buf[k.l_buf+k.last_lit]=255&ot,k.last_lit++,N===0?k.dyn_ltree[2*ot]++:(k.matches++,N--,k.dyn_ltree[2*(m[ot]+x+1)]++,k.dyn_dtree[2*V(N)]++),k.last_lit===k.lit_bufsize-1},s._tr_align=function(k){xt(k,2,3),vt(k,D,Ot),(function(N){N.bi_valid===16?(Et(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(k)}},{"../utils/common":41}],53:[function(r,c,s){c.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,c,s){(function(l){(function(d,h){if(!d.setImmediate){var g,b,S,x,E=1,v={},C=!1,y=d.document,A=Object.getPrototypeOf&&Object.getPrototypeOf(d);A=A&&A.setTimeout?A:d,g={}.toString.call(d.process)==="[object process]"?function(W){process.nextTick(function(){R(W)})}:(function(){if(d.postMessage&&!d.importScripts){var W=!0,K=d.onmessage;return d.onmessage=function(){W=!1},d.postMessage("","*"),d.onmessage=K,W}})()?(x="setImmediate$"+Math.random()+"$",d.addEventListener?d.addEventListener("message",D,!1):d.attachEvent("onmessage",D),function(W){d.postMessage(x+W,"*")}):d.MessageChannel?((S=new MessageChannel).port1.onmessage=function(W){R(W.data)},function(W){S.port2.postMessage(W)}):y&&"onreadystatechange"in y.createElement("script")?(b=y.documentElement,function(W){var K=y.createElement("script");K.onreadystatechange=function(){R(W),K.onreadystatechange=null,b.removeChild(K),K=null},b.appendChild(K)}):function(W){setTimeout(R,0,W)},A.setImmediate=function(W){typeof W!="function"&&(W=new Function(""+W));for(var K=new Array(arguments.length-1),nt=0;nt<K.length;nt++)K[nt]=arguments[nt+1];var X={callback:W,args:K};return v[E]=X,g(E),E++},A.clearImmediate=_}function _(W){delete v[W]}function R(W){if(C)setTimeout(R,0,W);else{var K=v[W];if(K){C=!0;try{(function(nt){var X=nt.callback,ut=nt.args;switch(ut.length){case 0:X();break;case 1:X(ut[0]);break;case 2:X(ut[0],ut[1]);break;case 3:X(ut[0],ut[1],ut[2]);break;default:X.apply(h,ut)}})(K)}finally{_(W),C=!1}}}}function D(W){W.source===d&&typeof W.data=="string"&&W.data.indexOf(x)===0&&R(+W.data.slice(x.length))}})(typeof self>"u"?l===void 0?this:l:self)}).call(this,typeof Pe<"u"?Pe:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Kr)),Kr.exports}var zo=Bo();const ia=ea(zo);var ar={exports:{}},Do=ar.exports,Wi;function jo(){return Wi||(Wi=1,(function(f,i){(function(r,c){c()})(Do,function(){function r(b,S){return typeof S>"u"?S={autoBom:!1}:typeof S!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),S={autoBom:!S}),S.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(b.type)?new Blob(["\uFEFF",b],{type:b.type}):b}function c(b,S,x){var E=new XMLHttpRequest;E.open("GET",b),E.responseType="blob",E.onload=function(){g(E.response,S,x)},E.onerror=function(){console.error("could not download file")},E.send()}function s(b){var S=new XMLHttpRequest;S.open("HEAD",b,!1);try{S.send()}catch{}return 200<=S.status&&299>=S.status}function l(b){try{b.dispatchEvent(new MouseEvent("click"))}catch{var S=document.createEvent("MouseEvents");S.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),b.dispatchEvent(S)}}var d=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Pe=="object"&&Pe.global===Pe?Pe:void 0,h=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=d.saveAs||(typeof window!="object"||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(b,S,x){var E=d.URL||d.webkitURL,v=document.createElement("a");S=S||b.name||"download",v.download=S,v.rel="noopener",typeof b=="string"?(v.href=b,v.origin===location.origin?l(v):s(v.href)?c(b,S,x):l(v,v.target="_blank")):(v.href=E.createObjectURL(b),setTimeout(function(){E.revokeObjectURL(v.href)},4e4),setTimeout(function(){l(v)},0))}:"msSaveOrOpenBlob"in navigator?function(b,S,x){if(S=S||b.name||"download",typeof b!="string")navigator.msSaveOrOpenBlob(r(b,x),S);else if(s(b))c(b,S,x);else{var E=document.createElement("a");E.href=b,E.target="_blank",setTimeout(function(){l(E)})}}:function(b,S,x,E){if(E=E||open("","_blank"),E&&(E.document.title=E.document.body.innerText="downloading..."),typeof b=="string")return c(b,S,x);var v=b.type==="application/octet-stream",C=/constructor/i.test(d.HTMLElement)||d.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||v&&C||h)&&typeof FileReader<"u"){var A=new FileReader;A.onloadend=function(){var D=A.result;D=y?D:D.replace(/^data:[^;]*;/,"data:attachment/file;"),E?E.location.href=D:location=D,E=null},A.readAsDataURL(b)}else{var _=d.URL||d.webkitURL,R=_.createObjectURL(b);E?E.location=R:location.href=R,E=null,setTimeout(function(){_.revokeObjectURL(R)},4e4)}});d.saveAs=g.saveAs=g,f.exports=g})})(ar)),ar.exports}var aa=jo();function Hi(f){const i=Math.floor(f/3600),r=Math.floor(f%3600/60),c=Math.floor(f%60),s=Math.floor(f%1*1e3);return`${i.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")},${s.toString().padStart(3,"0")}`}function Zi(f){const i=Math.floor(f/3600),r=Math.floor(f%3600/60),c=Math.floor(f%60),s=Math.floor(f%1*1e3);return`${i.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}.${s.toString().padStart(3,"0")}`}function oa(f){return f.map((i,r)=>{const c=r+1,s=Hi(i.start),l=Hi(i.end),d=i.text;return`${c}
${s} --> ${l}
${d}
`}).join(`
`)}function sa(f){const i=`WEBVTT

`,r=f.map(c=>{const s=Zi(c.start),l=Zi(c.end),d=c.text;return`${s} --> ${l}
${d}
`}).join(`
`);return i+r}function la(f){return f.map(i=>{const r=i.start.toFixed(3),c=i.end.toFixed(3);return`[${r}s - ${c}s] ${i.text}`}).join(`
`)}function ua(f,i,r,c,s,l,d){return{id:f,title:i,duration:r,created_at:new Date(c).toISOString(),source:s,full_text:l,segments:d.map(h=>({id:h.id,text:h.text,start:h.start,end:h.end,duration:h.end-h.start}))}}async function ca(f){return f}async function Mo(f){const i=await So(f),r=await An(f);if(!i)throw new Error("Recording not found");if(!r)throw new Error("No annotations found for this recording");const c=new ia,s=`${i.title}-${f.slice(0,8)}`,l=c.folder(s),d=await ca(i.audioBlob);l.file(`${f}.wav`,d);const h=ua(i.id,i.title,i.duration,i.createdAt,i.source,r.fullText,r.segments);l.file(`${f}.json`,JSON.stringify(h,null,2));const g=oa(r.segments);l.file(`${f}.srt`,g);const b=sa(r.segments);l.file(`${f}.vtt`,b);const S=la(r.segments);l.file(`${f}.txt`,S);const x=await c.generateAsync({type:"blob"});aa.saveAs(x,`${s}.zip`)}async function Fo(){const i=(await ra()).filter(h=>h.isAnnotated);if(i.length===0)throw new Error("No annotated recordings to export");const r=new ia,s=`annotations-export-${new Date().toISOString().replace(/[:.]/g,"-")}`,l=r.folder(s);for(const h of i){const g=await An(h.id);if(!g)continue;const b=`${h.title}-${h.id.slice(0,8)}`,S=l.folder(b),x=await ca(h.audioBlob);S.file(`${h.id}.wav`,x);const E=ua(h.id,h.title,h.duration,h.createdAt,h.source,g.fullText,g.segments);S.file(`${h.id}.json`,JSON.stringify(E,null,2));const v=oa(g.segments);S.file(`${h.id}.srt`,v);const C=sa(g.segments);S.file(`${h.id}.vtt`,C);const y=la(g.segments);S.file(`${h.id}.txt`,y)}const d=await r.generateAsync({type:"blob"});aa.saveAs(d,`${s}.zip`)}class No{constructor(i){this.listeners=new Set,this.state=i}getState(){return this.state}subscribe(i){return this.listeners.add(i),()=>{this.listeners.delete(i)}}notify(){this.listeners.forEach(i=>i(this.state))}setState(i){this.state={...this.state,...i},this.notify()}}const ha="aidio-theme",Uo=()=>{try{const f=localStorage.getItem(ha);if(f==="dark"||f==="pastel")return f}catch(f){console.warn("Failed to read theme from localStorage:",f)}return"dark"},Lo={currentTheme:Uo()};class Ko extends No{constructor(){super(Lo)}toggleTheme(){const i=this.state.currentTheme==="dark"?"pastel":"dark";this.setTheme(i)}setTheme(i){this.setState({currentTheme:i});try{localStorage.setItem(ha,i)}catch(r){console.warn("Failed to save theme to localStorage:",r)}}getCurrentTheme(){return this.state.currentTheme}}const En=new Ko,qo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var Ho=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,da=(f,i,r,c)=>{for(var s=c>1?void 0:c?Zo(i,r):i,l=f.length-1,d;l>=0;l--)(d=f[l])&&(s=(c?d(i,r,s):d(s))||s);return c&&s&&Ho(i,r,s),s};let ur=class extends ke{constructor(){super(...arguments),this.currentTheme=En.getCurrentTheme()}connectedCallback(){super.connectedCallback(),this.unsubscribe=En.subscribe(f=>{this.currentTheme=f.currentTheme})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}handleToggle(){En.toggleTheme()}render(){const f=this.currentTheme==="dark"?qo:Wo,i=this.currentTheme==="dark"?"Switch to Pastel Theme":"Switch to Dark Theme";return Jt`
      <button
        class="theme-toggle-btn"
        @click=${this.handleToggle}
        title=${i}
        aria-label=${i}
      >
        <span class="theme-icon">${ue(f)}</span>
      </button>
    `}};ur.styles=hn`
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
  `;da([Ht()],ur.prototype,"currentTheme",2);ur=da([dn("theme-toggle")],ur);var Vo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,fn=(f,i,r,c)=>{for(var s=c>1?void 0:c?Yo(i,r):i,l=f.length-1,d;l>=0;l--)(d=f[l])&&(s=(c?d(i,r,s):d(s))||s);return c&&s&&Vo(i,r,s),s};let Ne=class extends ke{constructor(){super(...arguments),this.words=[],this.selection={start:0,end:0},this.committedIndex=0,this.centerIndex=0,this.currentTransform="translateX(0px)"}updated(f){(f.has("centerIndex")||f.has("words"))&&this.updateCenterPosition()}async updateCenterPosition(){await this.updateComplete;const f=this.shadowRoot?.querySelector(".stream-container");if(!f)return;const r=f.querySelectorAll(".word")[this.centerIndex];if(r){const c=r.offsetLeft+r.offsetWidth/2,s=f.offsetWidth/2,l=c-s;this.currentTransform=`translateX(-${l}px)`}}handleWordClick(f){this.dispatchEvent(new CustomEvent("word-click",{detail:{index:f},bubbles:!0,composed:!0}))}render(){return Jt`
      <div class="mask-overlay"></div>
      <div class="center-guide"></div>
      
      <div class="stream-container" style="transform: ${this.currentTransform}">
        ${this.words.map((f,i)=>{const r=typeof f=="string"?f:f.text,c=i<this.committedIndex,s=i>=this.selection.start&&i<this.selection.end;let l="word";return c?l+=" committed":s&&(l+=" active"),Jt`
            <span 
              class="${l}" 
              @click=${()=>this.handleWordClick(i)}
            >
              ${r}
            </span>
          `})}
      </div>
    `}};Ne.styles=hn`
    :host {
      display: block;
      height: 120px;
      position: relative;
      overflow: hidden;
      user-select: none;
      /* Define local variables for ease of use */
      --fade-width: 20%;
    }

    .stream-container {
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      will-change: transform;
      /* Hardware accelerated smooth transform */
      transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); 
      padding-left: 50%; /* Center the first word initially */
    }

    .word {
      font-family: var(--font-ui);
      padding: 0 var(--spacing-2);
      cursor: pointer;
      transition: all 0.2s ease;
      opacity: 0.4; /* Blurred/Future state */
      white-space: nowrap;
      font-size: var(--text-xl); /* Base size, can be dynamic later */
    }

    .word:hover {
      color: var(--accent-coral);
      transform: scale(1.1);
      opacity: 0.8;
    }

    /* Active "Clear Zone" Words */
    .word.active {
      opacity: 1;
      font-weight: 700;
      color: var(--text-primary);
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }

    /* Committed "Past" Words */
    .word.committed {
      opacity: 0.2;
      color: var(--text-secondary);
      text-decoration: line-through;
    }

    /* The "Smoked Glass" Mask */
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
      z-index: 10;
    }

    /* Center Focus Line (Optional guide) */
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
  `;fn([fe({type:Array})],Ne.prototype,"words",2);fn([fe({type:Object})],Ne.prototype,"selection",2);fn([fe({type:Number})],Ne.prototype,"committedIndex",2);fn([fe({type:Number})],Ne.prototype,"centerIndex",2);fn([Ht()],Ne.prototype,"currentTransform",2);Ne=fn([dn("smoked-glass-text")],Ne);var Go=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,we=(f,i,r,c)=>{for(var s=c>1?void 0:c?Xo(i,r):i,l=f.length-1,d;l>=0;l--)(d=f[l])&&(s=(c?d(i,r,s):d(s))||s);return c&&s&&Go(i,r,s),s};let de=class extends ke{constructor(){super(...arguments),this.audioBuffer=null,this.leftClamp=0,this.rightClamp=0,this.playhead=0,this.visualMode="classic",this.isPlaying=!1,this.zoomLevel=1,this.viewOffset=0,this.isPanning=!1,this.draggingClamp=null,this.peaks=[],this.maxPeak=0,this.panStartX=0,this.panStartOffset=0,this.drawRafId=null,this.handlePanMove=f=>{if(!this.isPanning||!this.audioBuffer)return;const i=this.canvas.getBoundingClientRect(),r=f.movementX,s=this.audioBuffer.duration/this.zoomLevel/i.width;this.clampViewOffset(this.viewOffset-r*s)},this.handlePanUp=f=>{this.isPanning=!1,this.releasePointerCapture(f.pointerId),this.removeEventListener("pointermove",this.handlePanMove),this.removeEventListener("pointerup",this.handlePanUp)},this.handleClampMove=f=>{if(!this.draggingClamp||!this.audioBuffer)return;const i=this.canvas.getBoundingClientRect(),r=f.clientX-i.left,c=Math.max(0,Math.min(this.audioBuffer.duration,this.pixelToTime(r)));let s=this.leftClamp,l=this.rightClamp;this.draggingClamp==="left"?s=Math.min(c,l-.05):l=Math.max(c,s+.05),this.dispatchEvent(new CustomEvent("clamp-change",{detail:{left:s,right:l},bubbles:!0,composed:!0})),this.clampViewOffset(this.viewOffset)},this.handleClampUp=()=>{this.draggingClamp=null,window.removeEventListener("pointermove",this.handleClampMove),window.removeEventListener("pointerup",this.handleClampUp)}}updated(f){f.has("audioBuffer")&&(this.calculatePeaks(),this.resetViewport()),this.scheduleDraw(),f.has("isPlaying")&&this.isPlaying&&this.autoScrollToPlayhead(),this.isPanning?this.classList.add("grabbing"):this.classList.remove("grabbing")}calculatePeaks(){if(!this.audioBuffer){this.peaks=[];return}const f=this.audioBuffer.getChannelData(0),i=4e3,r=Math.floor(f.length/i);this.peaks=new Array(i).fill(0),this.maxPeak=0;for(let c=0;c<i;c++){let s=0;const l=c*r;for(let d=0;d<r&&l+d<f.length;d++){const h=Math.abs(f[l+d]);h>s&&(s=h)}this.peaks[c]=s,s>this.maxPeak&&(this.maxPeak=s)}this.maxPeak===0&&(this.maxPeak=1)}resetViewport(){this.zoomLevel=1,this.viewOffset=0}scheduleDraw(){this.drawRafId||(this.drawRafId=requestAnimationFrame(()=>{this.drawRafId=null,this.drawWaveform()}))}drawWaveform(){if(!this.canvas||!this.peaks.length)return;const f=this.canvas.getContext("2d");if(!f)return;const i=this.canvas.getBoundingClientRect();if(i.width===0||i.height===0)return;const r=window.devicePixelRatio||1;this.canvas.width=i.width*r,this.canvas.height=i.height*r,f.scale(r,r);const c=i.width,s=i.height,l=getComputedStyle(this),d=l.getPropertyValue("--bg-surface").trim()||"#161b22",h=l.getPropertyValue("--accent-coral").trim()||"#ff6b6b",g=l.getPropertyValue("--accent-green").trim()||"#39ff14",b=l.getPropertyValue("--accent-yellow").trim()||"#FFB000";switch(f.clearRect(0,0,c,s),f.fillStyle=d,f.fillRect(0,0,c,s),this.visualMode){case"classic":this.drawClassicWaveform(f,c,s,b);break;case"neon":this.drawNeonPulseWaveform(f,c,s,h,g);break;case"mirror":this.drawMirroredWaveform(f,c,s,b);break;default:this.drawClassicWaveform(f,c,s,b)}}drawClassicWaveform(f,i,r,c){this.drawWaveformSegment(f,i,r,c),this.drawMarkerHighlights(f,r,"rgba(255, 107, 107, 0.1)")}drawNeonPulseWaveform(f,i,r,c,s){f.shadowBlur=8,f.shadowColor=c,f.globalCompositeOperation="lighter",this.drawWaveformSegment(f,i,r,c);const l=this.timeToPixel(this.leftClamp),h=this.timeToPixel(this.rightClamp)-l;h>0&&(f.save(),f.beginPath(),f.rect(l,0,h,r),f.clip(),f.shadowBlur=15,f.shadowColor=s,this.drawWaveformSegment(f,i,r,s),f.restore()),f.shadowBlur=0,f.globalCompositeOperation="source-over"}drawMirroredWaveform(f,i,r,c){const s=r/2;f.save(),f.translate(0,s),this.drawWaveformSegment(f,i,r,c,0,1),f.restore(),f.save(),f.translate(0,s),f.scale(1,-1),f.globalAlpha=.5,this.drawWaveformSegment(f,i,r,c,0,1),f.restore(),f.globalAlpha=1,this.drawMarkerHighlights(f,r,"rgba(255, 107, 107, 0.1)")}drawWaveformSegment(f,i,r,c,s=0,l=1){if(!this.audioBuffer)return;const d=this.audioBuffer.duration,h=this.peaks,g=h.length,b=d/this.zoomLevel,S=Math.floor(this.viewOffset/d*g),x=Math.ceil((this.viewOffset+b)/d*g),E=r/2+s,v=this.maxPeak>0?1/this.maxPeak:1;f.strokeStyle=c,f.lineWidth=1,f.beginPath();for(let C=S;C<x;C++){if(C<0||C>=g)continue;const y=C/g*d,A=this.timeToPixel(y),_=h[C]*v*(r/2)*.9*l;C===S?f.moveTo(A,E-_):f.lineTo(A,E-_),f.lineTo(A,E+_)}f.stroke()}drawMarkerHighlights(f,i,r){const c=this.timeToPixel(this.leftClamp),l=this.timeToPixel(this.rightClamp)-c;l>0&&(f.fillStyle=r,f.fillRect(c,0,l,i))}timeToPixel(f){if(!this.audioBuffer)return 0;const i=this.canvas?.getBoundingClientRect();if(!i||i.width===0)return 0;const c=this.audioBuffer.duration/this.zoomLevel;return(f-this.viewOffset)/c*i.width}pixelToTime(f){if(!this.audioBuffer)return 0;const i=this.canvas?.getBoundingClientRect();if(!i||i.width===0)return 0;const s=this.audioBuffer.duration/this.zoomLevel/i.width;return this.viewOffset+f*s}timeToPxString(f){const i=this.timeToPixel(f),r=this.canvas?.getBoundingClientRect();if(!r||r.width===0)return"-100px";const c=5,s=r.width-5;return`${Math.max(c,Math.min(i,s))}px`}clampViewOffset(f){if(!this.audioBuffer)return;const i=this.audioBuffer.duration,r=this.canvas?.getBoundingClientRect();if(!r)return;const c=i/this.zoomLevel,s=Math.max(0,i-c);let l=Math.max(0,Math.min(s,f));const h=25*(c/r.width);this.leftClamp<l+h&&this.draggingClamp==="left"&&(l=Math.max(0,this.leftClamp-h)),this.rightClamp>l+c-h&&this.draggingClamp==="right"&&(l=Math.min(s,this.rightClamp-c+h)),this.viewOffset=l,this.dispatchEvent(new CustomEvent("viewport-change",{detail:{viewOffset:this.viewOffset,zoomLevel:this.zoomLevel},bubbles:!0,composed:!0}))}handleWheel(f){if(!this.audioBuffer)return;f.preventDefault();const i=this.canvas.getBoundingClientRect();if(i.width===0)return;const r=this.audioBuffer.duration;if(f.ctrlKey||f.metaKey){const s=f.deltaY>0?.95:1.05,l=f.clientX-i.left,d=this.pixelToTime(l),h=1,g=Math.max(h,r/.1);let b=Math.max(h,Math.min(g,this.zoomLevel*s));const S=1;r/b<S&&(b=r/S),b=Math.max(h,Math.min(g,b));const x=d-l/i.width*(r/b);this.zoomLevel=b,this.clampViewOffset(x)}else{const s=r/this.zoomLevel/10,l=(f.deltaY>0?1:-1)*s;this.clampViewOffset(this.viewOffset+l)}}autoScrollToPlayhead(){if(!this.audioBuffer||!this.canvas)return;const f=this.canvas.getBoundingClientRect();if(f.width===0)return;const i=this.timeToPixel(this.playhead),c=this.audioBuffer.duration/this.zoomLevel,s=f.width*.25;if(i<s){const l=this.playhead-s/f.width*c;this.clampViewOffset(l)}else if(i>f.width-s){const l=this.playhead-(f.width-s)/f.width*c;this.clampViewOffset(l)}}handleMouseDown(f){this.isPanning=!0,this.panStartX=f.clientX,this.panStartOffset=this.viewOffset,this.setPointerCapture(f.pointerId),this.addEventListener("pointermove",this.handlePanMove),this.addEventListener("pointerup",this.handlePanUp)}handleClampDown(f,i){f.preventDefault(),f.stopPropagation(),this.draggingClamp=i,window.addEventListener("pointermove",this.handleClampMove),window.addEventListener("pointerup",this.handleClampUp)}formatTime(f){return f.toFixed(2)+"s"}render(){const f=this.timeToPxString(this.leftClamp),i=this.timeToPxString(this.rightClamp),r=this.timeToPxString(this.playhead);return Jt`
      <div class="wave-wrap ${this.isPanning?"grabbing":""}"
        @pointerdown=${this.handleMouseDown}
        @wheel=${this.handleWheel}
      >
        <canvas></canvas>
        
        <div class="clamp-handle left ${this.draggingClamp==="left"?"dragging":""}"
          style="left:${f}"
          @pointerdown=${c=>this.handleClampDown(c,"left")}
        >
          <div class="clamp-line"></div>
        </div>
        
        <div class="clamp-handle right ${this.draggingClamp==="right"?"dragging":""}"
          style="left:${i}"
          @pointerdown=${c=>this.handleClampDown(c,"right")}
        >
          <div class="clamp-line"></div>
        </div>

        <div class="marker-label" style="left:${f}">${this.formatTime(this.leftClamp)}</div>
        <div class="marker-label" style="left:${i}">${this.formatTime(this.rightClamp)}</div>
        <div class="playhead-line" style="left:${r}"></div>
      </div>
    `}};de.styles=hn`
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
    }
  `;we([fe({type:Object})],de.prototype,"audioBuffer",2);we([fe({type:Number})],de.prototype,"leftClamp",2);we([fe({type:Number})],de.prototype,"rightClamp",2);we([fe({type:Number})],de.prototype,"playhead",2);we([fe({type:String})],de.prototype,"visualMode",2);we([fe({type:Boolean})],de.prototype,"isPlaying",2);we([Ht()],de.prototype,"zoomLevel",2);we([Ht()],de.prototype,"viewOffset",2);we([Ht()],de.prototype,"isPanning",2);we([Ht()],de.prototype,"draggingClamp",2);we([ta("canvas")],de.prototype,"canvas",2);de=we([dn("stage-waveform")],de);function Jo(f,i=-40,r=.3){const c=f.getChannelData(0),s=f.sampleRate,l=Math.floor(s*.05),d=[];let h=!1,g=0;for(let b=0;b<c.length;b+=l){const S=Math.min(b+l,c.length);let x=0;for(let y=b;y<S;y++)x+=c[y]*c[y];const E=Math.sqrt(x/(S-b)),C=20*Math.log10(E)<i;if(C&&!h)h=!0,g=b;else if(!C&&h){h=!1;const y=(b-g)/s;y>=r&&d.push({start:g/s,end:b/s,duration:y})}}if(h){const b=(c.length-g)/s;b>=r&&d.push({start:g/s,end:c.length/s,duration:b})}return d}const fa=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Qo=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ts=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,es=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ns=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var rs=Object.defineProperty,is=Object.getOwnPropertyDescriptor,ie=(f,i,r,c)=>{for(var s=c>1?void 0:c?is(i,r):i,l=f.length-1,d;l>=0;l--)(d=f[l])&&(s=(c?d(i,r,s):d(s))||s);return c&&s&&rs(i,r,s),s};class as{constructor(){this.status="idle",this.playhead=0,this.loop=!1,this.duration=0,this.ctx=null,this.source=null,this.rafId=null,this._buffer=null,this.currentPlayStart=0,this.currentPlayEnd=0,this.playbackRate=1,this.anchorWallTime=0,this.anchorAudioTime=0}get buffer(){return this._buffer}async load(i){this.dispose(),this.ctx=new AudioContext;const r=await this.ctx.decodeAudioData(await i.arrayBuffer());this._buffer=r,this.duration=r.duration,this.playhead=0,this.onUpdate?.()}setPlaybackRate(i){if(this.ctx&&this.status==="playing"){const r=this.ctx.currentTime,c=r-this.anchorWallTime;this.anchorAudioTime+=c*this.playbackRate,this.anchorWallTime=r}this.source&&(this.source.playbackRate.value=i),this.playbackRate=i}async playRange(i,r,c){if(!this.ctx||!this.buffer)return;this.ctx.state==="suspended"&&await this.ctx.resume(),this.stop(!1),this.currentPlayStart=i,this.currentPlayEnd=r,this.loop=c,this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.ctx.destination),this.source.playbackRate.value=this.playbackRate;const s=Math.max(.01,r-i);this.anchorWallTime=this.ctx.currentTime,this.anchorAudioTime=i,this.source.start(0,i,s),this.status="playing",this.playhead=i,this.onUpdate?.(),this.trackPlayhead(),this.source.onended=()=>{this.loop?this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop):(this.stop(!1),this.playhead=this.currentPlayEnd,this.onUpdate?.())}}pause(){this.stop()}setPlayRange(i,r){this.currentPlayStart=i,this.currentPlayEnd=r,this.playhead=i,this.onUpdate?.(),this.status==="playing"&&this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop)}setLoop(i){this.loop=i,this.onUpdate?.(),i&&this.status==="playing"&&this.playRange(this.currentPlayStart,this.currentPlayEnd,this.loop)}reset(){this.stop(),this.loop=!1,this.playhead=0,this.currentPlayStart=0,this.currentPlayEnd=0,this.onUpdate?.()}dispose(){this.stop(),this.ctx&&(this.ctx.close(),this.ctx=null),this.buffer=null,this.duration=0,this.currentPlayStart=0,this.currentPlayEnd=0}stop(i=!0){if(this.source){this.source.onended=null;try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=null,this.status="idle",i&&(this.playhead=this.currentPlayStart),this.onUpdate?.()}trackPlayhead(){if(!this.ctx)return;const i=this.ctx,r=()=>{if(this.ctx!==i||this.status!=="playing")return;const s=this.ctx.currentTime-this.anchorWallTime,l=this.anchorAudioTime+s*this.playbackRate;this.playhead=Math.min(l,this.currentPlayEnd),this.onUpdate?.(),this.rafId=requestAnimationFrame(r)};this.rafId=requestAnimationFrame(r)}}let te=class extends ke{constructor(){super(...arguments),this.audioBlob=null,this.recordingId="",this.duration=0,this.leftClamp=0,this.rightClamp=3,this.fullText="",this.words=[],this.textStartIdx=0,this.textEndIdx=0,this.committedSegments=[],this.isPlaying=!1,this.loop=!1,this.showConfirmReset=!1,this.playhead=0,this.visualMode="classic",this.playbackRate=1,this.controller=null}async firstUpdated(){this.audioBlob&&await this.loadAudio()}disconnectedCallback(){super.disconnectedCallback(),this.controller?.dispose(),this.controller=null}async loadAudio(){this.controller?.dispose(),this.controller=new as,this.controller.onUpdate=()=>{this.playhead=this.controller.playhead,this.isPlaying=this.controller.status==="playing",this.loop=this.controller.loop,this.isPlaying&&this.autoScrollToPlayhead(),this.requestUpdate()},await this.controller.load(this.audioBlob),this.duration=this.controller.duration,this.leftClamp=0,this.rightClamp=Math.min(10,this.duration),this.playhead=this.leftClamp,this.fullText="This is a sample text for testing the smoked glass component. It demonstrates how words flow through the clear zone as you align audio segments. The quick brown fox jumps over the lazy dog. Now with more words.",this.words=this.fullText.split(" ").map(f=>({text:f})),this.textStartIdx=0,this.textEndIdx=Math.min(5,this.words.length),this.requestUpdate()}handleSpeedChange(f){const i=parseFloat(f.target.value);this.playbackRate=i,this.controller&&this.controller.setPlaybackRate(i)}handleStageClampChange(f){const{left:i,right:r}=f.detail;this.leftClamp=i,this.rightClamp=r,this.controller?.setPlayRange(i,r),this.requestUpdate()}handleStageViewportChange(f){const{viewOffset:i,zoomLevel:r}=f.detail}handleSmokedTextWordClick(f){const{index:i}=f.detail;this.textEndIdx=i+1,this.requestUpdate()}syncFromController(){this.controller&&(this.playhead=this.controller.playhead,this.isPlaying=this.controller.status==="playing",this.loop=this.controller.loop,this.isPlaying&&this.autoScrollToPlayhead())}async handlePlayPause(){this.controller&&(this.isPlaying?this.controller.pause():await this.controller.playRange(this.leftClamp,this.rightClamp,this.loop))}handleLoopToggle(){this.controller&&this.controller.setLoop(!this.loop)}handleSave(){const f={id:crypto.randomUUID(),start:this.leftClamp,end:this.rightClamp,text:this.words.slice(this.textStartIdx,this.textEndIdx).map(i=>i.text).join(" "),textStartIdx:this.textStartIdx,textEndIdx:this.textEndIdx};this.dispatchEvent(new CustomEvent("progress-saved",{detail:{segments:[f]},bubbles:!0,composed:!0}))}handleComplete(){const f={id:crypto.randomUUID(),start:this.leftClamp,end:this.rightClamp,text:this.words.slice(this.textStartIdx,this.textEndIdx).map(g=>g.text).join(" "),textStartIdx:this.textStartIdx,textEndIdx:this.textEndIdx};this.dispatchEvent(new CustomEvent("annotation-complete",{detail:{segments:[f]},bubbles:!0,composed:!0})),this.committedSegments=[...this.committedSegments,f];const i=this.rightClamp;let r=i,c=Math.min(this.duration,r+3);if(this.controller?.buffer){const b=Jo(this.controller.buffer).find(S=>S.start>i+.1);b&&(c=b.start)}const s=Math.max(.5,c-r),l=Math.max(1,Math.round(s*2.5)),d=this.textEndIdx,h=Math.min(this.words.length,d+l);this.leftClamp=r,this.rightClamp=c,this.playhead=r,this.textStartIdx=d,this.textEndIdx=h,this.controller&&this.controller.playRange(this.leftClamp,this.rightClamp,this.loop),this.requestUpdate()}startOver(){this.showConfirmReset=!0}confirmReset(){this.showConfirmReset=!1,this.controller?(this.controller.reset(),this.fullText="",this.words=[],this.textStartIdx=0,this.textEndIdx=0,this.committedSegments=[],this.syncFromController()):(this.leftClamp=0,this.rightClamp=Math.min(3,this.duration),this.playhead=this.leftClamp,this.fullText="",this.words=[],this.textStartIdx=0,this.textEndIdx=0,this.committedSegments=[])}cancelReset(){this.showConfirmReset=!1}autoScrollToPlayhead(){}formatTime(f){return f.toFixed(2)+"s"}render(){const f=this.words.slice(this.textStartIdx,this.textEndIdx).map(i=>i.text).join(" ");return Jt`
      <div class="page">
        <div class="header">
          <div class="title">Audio-Text Alignment</div>
          <div class="stats">
            <span>Segment: ${this.formatTime(this.leftClamp)} → ${this.formatTime(this.rightClamp)}</span>
            <span>Length: ${this.formatTime(this.rightClamp-this.leftClamp)}</span>
            <span>Duration: ${this.formatTime(this.duration)}</span>
          </div>
        </div>

        <div class="stage-audio">
          <stage-waveform
            .audioBuffer=${this.audioBlob?this.controller?.buffer??null:null}
            .leftClamp=${this.leftClamp}
            .rightClamp=${this.rightClamp}
            .playhead=${this.playhead}
            .visualMode=${this.visualMode}
            .isPlaying=${this.isPlaying}
            @clamp-change=${this.handleStageClampChange}
            @viewport-change=${this.handleStageViewportChange}
          ></stage-waveform>
        </div>
          
        <div class="controls">
          <button class="btn" @click=${this.handlePlayPause}>
            ${ue(this.isPlaying?Qo:fa)}
            <span>${this.isPlaying?"Pause":"Play"}</span>
          </button>
          <button class="btn" @click=${this.handleLoopToggle} ?aria-pressed=${this.loop}>
            ${ue(ts)}
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
            <select id="visualModeSelect" @change=${i=>this.visualMode=i.target.value}>
              <option value="classic" ?selected=${this.visualMode==="classic"}>Classic</option>
              <option value="neon" ?selected=${this.visualMode==="neon"}>Neon Pulse</option>
              <option value="mirror" ?selected=${this.visualMode==="mirror"}>Mirrored</option>
            </select>
          </div>
        </div>

        <div class="stage-text">
          <div class="title" style="font-size: var(--text-base);">Segment Text</div>
          <smoked-glass-text
            .words=${this.words}
            .selection=${{start:this.textStartIdx,end:this.textEndIdx}}
            .committedIndex=${this.committedSegments.length>0?this.committedSegments[this.committedSegments.length-1].textEndIdx:0}
            .centerIndex=${this.textStartIdx}
            @word-click=${this.handleSmokedTextWordClick}
          ></smoked-glass-text>
        </div>

        <div class="footer">
          <div>${this.formatTime(this.rightClamp-this.leftClamp)} segment</div>
          <div style="display:flex; gap: var(--spacing-2);">
            <button class="btn" @click=${this.handleSave}>
              ${ue(es)}
              <span>Save Progress</span>
            </button>
            <button class="btn primary" @click=${this.handleComplete} ?disabled=${!f.trim()}>
              ${ue(ns)}
              <span>Confirm & Next</span>
            </button>
          </div>
        </div>

        ${this.showConfirmReset?Jt`
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
    `}};te.styles=hn`
    :host {
      display: block;
      height: 100vh; /* Lock to viewport height */
      width: 100vw;  /* Lock to viewport width */
      background: var(--bg-primary);
      color: var(--text-primary);
      font-family: var(--font-ui);
      overflow: hidden; /* Prevent window scroll */
      box-sizing: border-box;
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
  `;ie([fe({type:Object})],te.prototype,"audioBlob",2);ie([fe({type:String})],te.prototype,"recordingId",2);ie([Ht()],te.prototype,"duration",2);ie([Ht()],te.prototype,"leftClamp",2);ie([Ht()],te.prototype,"rightClamp",2);ie([Ht()],te.prototype,"fullText",2);ie([Ht()],te.prototype,"words",2);ie([Ht()],te.prototype,"textStartIdx",2);ie([Ht()],te.prototype,"textEndIdx",2);ie([Ht()],te.prototype,"committedSegments",2);ie([Ht()],te.prototype,"isPlaying",2);ie([Ht()],te.prototype,"loop",2);ie([Ht()],te.prototype,"showConfirmReset",2);ie([Ht()],te.prototype,"playhead",2);ie([Ht()],te.prototype,"visualMode",2);ie([Ht()],te.prototype,"playbackRate",2);ie([ta("stage-waveform")],te.prototype,"stageWaveform",2);te=ie([dn("annotation-workflow")],te);const os=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ss=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var ls=Object.defineProperty,us=Object.getOwnPropertyDescriptor,Jr=(f,i,r,c)=>{for(var s=c>1?void 0:c?us(i,r):i,l=f.length-1,d;l>=0;l--)(d=f[l])&&(s=(c?d(i,r,s):d(s))||s);return c&&s&&ls(i,r,s),s};let Tn=class extends ke{constructor(){super(...arguments),this.recording=null,this.existingAnnotation=null}async connectedCallback(){super.connectedCallback(),this.recording?.isAnnotated&&(this.existingAnnotation=await An(this.recording.id)||null)}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async handleStartOver(){!this.recording||!confirm("Are you sure you want to start over? This will delete all current annotations.")||(await Eo(this.recording.id),this.existingAnnotation=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("annotation-reset",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})))}async handleAnnotationComplete(f){if(!this.recording)return;const{annotations:i,fullText:r}=f.detail,c={recordingId:this.recording.id,fullText:r,segments:i,completedAt:Date.now(),updatedAt:Date.now()};await Lr(c),this.dispatchEvent(new CustomEvent("annotation-saved",{detail:{recordingId:this.recording.id},bubbles:!0,composed:!0})),this.handleClose()}async handleAnnotationSaved(f){if(!this.recording)return;const{allAnnotations:i}=f.detail,r=await An(this.recording.id);r&&(r.segments=i,r.updatedAt=Date.now(),await Lr(r))}async handleProgressSaved(f){if(!this.recording)return;const{annotations:i}=f.detail;let r=await An(this.recording.id);r?(r.segments=i,r.updatedAt=Date.now()):r={recordingId:this.recording.id,fullText:"",segments:i,completedAt:0,updatedAt:Date.now()},await Lr(r)}render(){return this.recording?Jt`
      <div class="modal-header">
        <div class="title-section">
          <div class="modal-title">Annotating: ${this.recording.title}</div>
          <div class="subtitle">
            Duration: ${this.recording.duration.toFixed(2)}s |
            Source: ${this.recording.source}
          </div>
        </div>

        <div class="header-actions">
          ${this.existingAnnotation?Jt`
                <button
                  class="header-btn danger"
                  @click=${this.handleStartOver}
                  title="Delete all annotations and start over"
                >
                  ${ue(ss)}
                  <span>Start Over</span>
                </button>
              `:null}

          <button
            class="header-btn"
            @click=${this.handleClose}
            title="Close without saving"
          >
            ${ue(os)}
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
    `:Jt`<div>No recording selected</div>`}};Tn.styles=hn`
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
  `;Jr([fe({type:Object})],Tn.prototype,"recording",2);Jr([Ht()],Tn.prototype,"existingAnnotation",2);Tn=Jr([dn("annotation-modal")],Tn);const cs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,hs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ds=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,fs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ps=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,Vi=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,ms=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`,gs=`<!-- @license lucide-static v0.554.0 - ISC -->
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
`;var vs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,pn=(f,i,r,c)=>{for(var s=c>1?void 0:c?ys(i,r):i,l=f.length-1,d;l>=0;l--)(d=f[l])&&(s=(c?d(i,r,s):d(s))||s);return c&&s&&vs(i,r,s),s};let Ue=class extends ke{constructor(){super(...arguments),this.recordings=[],this.isRecording=!1,this.recordingDuration=0,this.selectedRecording=null,this.isModalOpen=!1,this.microphoneService=null,this.mediaRecorderService=null,this.recordingTimer=null}async connectedCallback(){super.connectedCallback(),await this.loadRecordings()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async loadRecordings(){this.recordings=await ra()}async startRecording(){try{this.microphoneService=new mo;const f=await this.microphoneService.requestPermission();this.mediaRecorderService=new go,await this.mediaRecorderService.initialize(f),this.mediaRecorderService.onStateChange(i=>{i==="recording"&&!this.recordingTimer&&(this.isRecording=!0,this.recordingTimer=window.setInterval(()=>{this.recordingDuration+=.25;const r=this.shadowRoot?.querySelector(".duration");r&&(r.textContent=this.formatDuration(this.recordingDuration))},250))}),this.recordingDuration=0,this.mediaRecorderService.start()}catch(f){console.error("Failed to start recording:",f),alert("Failed to start recording. Please check microphone permissions."),this.cleanup()}}async stopRecording(){if(this.mediaRecorderService)try{const f=await this.mediaRecorderService.stop(),i=this.recordingDuration,c=`Untitled ${await Po()}`;await na({title:c,audioBlob:f,duration:i,source:"recording"}),await this.loadRecordings()}catch(f){console.error("Failed to save recording:",f),alert("Failed to save recording.")}finally{this.cleanup()}}cleanup(){this.isRecording=!1,this.recordingDuration=0,this.recordingTimer&&(clearInterval(this.recordingTimer),this.recordingTimer=null),this.microphoneService?.release(),this.mediaRecorderService=null,this.microphoneService=null}async handleUpload(){const f=await Io();if(!(!f||f.length===0))try{await $o(f),await this.loadRecordings()}catch(i){console.error("Failed to upload files:",i),alert("Failed to upload files.")}}async handleTitleChange(f,i){await Co(f.id,{title:i}),await this.loadRecordings()}async handlePlay(f){new Audio(URL.createObjectURL(f.audioBlob)).play()}handleAnnotate(f){this.selectedRecording=f,this.isModalOpen=!0}async handleExport(f){try{await Mo(f.id)}catch(i){console.error("Failed to export recording:",i),alert(i instanceof Error?i.message:"Failed to export recording.")}}async handleDelete(f){confirm(`Are you sure you want to delete "${f.title}"? This cannot be undone.`)&&(await Ao(f.id),await this.loadRecordings())}async handleExportAll(){try{await Fo()}catch(f){console.error("Failed to export all recordings:",f),alert(f instanceof Error?f.message:"Failed to export recordings.")}}handleModalClose(){this.isModalOpen=!1,this.selectedRecording=null,this.loadRecordings()}formatDuration(f){const i=Math.floor(f/60),r=Math.floor(f%60);return`${i}:${r.toString().padStart(2,"0")}`}render(){return Jt`
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
          ${this.isRecording?null:Jt`
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
              ${ue(this.isRecording?hs:cs)}
              <span>${this.isRecording?"Stop Recording":"Record Audio"}</span>
            </button>

            ${this.isRecording?Jt`<div class="duration">${this.formatDuration(this.recordingDuration)}</div>`:Jt`
                  <button class="upload-btn" @click=${this.handleUpload}>
                    ${ue(ds)}
                    <span>Upload Files</span>
                  </button>
                `}
          </div>
        </div>

        <!-- Recordings Table -->
        <div class="recordings-header">
          <h2 class="section-title">Recordings (${this.recordings.length})</h2>
          ${this.recordings.some(f=>f.isAnnotated)?Jt`
                <button class="export-all-btn" @click=${this.handleExportAll}>
                  ${ue(Vi)}
                  <span>Export All</span>
                </button>
              `:null}
        </div>

        <div class="recordings-table">
          ${this.recordings.length===0?Jt`
                <div class="empty-state">
                  <div class="empty-icon">${ue(gs)}</div>
                  <div class="empty-title">No recordings yet</div>
                  <div class="empty-description">
                    Start recording or upload audio files to begin annotating your voice data
                  </div>
                </div>
              `:Jt`
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
                    ${this.recordings.map(f=>Jt`
                        <tr>
                          <td>
                            ${f.isAnnotated?Jt`${ue(ms)}`:""}
                          </td>
                          <td>
                            <div class="title-cell">
                              <input
                                class="title-input"
                                type="text"
                                .value=${f.title}
                                @change=${i=>this.handleTitleChange(f,i.target.value)}
                                placeholder="Enter title..."
                              />
                            </div>
                          </td>
                          <td>
                            <span class="duration-badge">
                              ${this.formatDuration(f.duration)}
                            </span>
                          </td>
                          <td>
                            <span class="duration-badge">
                              ${f.source==="recording"?"Recorded":"Uploaded"}
                            </span>
                          </td>
                          <td>
                            <div class="actions">
                              <button
                                class="action-btn"
                                @click=${()=>this.handlePlay(f)}
                                title="Play audio"
                              >
                                ${ue(fa)}
                                <span>Play</span>
                              </button>

                              <button
                                class="action-btn"
                                @click=${()=>this.handleAnnotate(f)}
                                title="Annotate audio"
                              >
                                ${ue(fs)}
                                <span>Annotate</span>
                              </button>

                              ${f.isAnnotated?Jt`
                                    <button
                                      class="action-btn"
                                      @click=${()=>this.handleExport(f)}
                                      title="Export annotation"
                                    >
                                      ${ue(Vi)}
                                      <span>Export</span>
                                    </button>
                                  `:null}

                              <button
                                class="action-btn danger"
                                @click=${()=>this.handleDelete(f)}
                                title="Delete recording"
                              >
                                ${ue(ps)}
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
      ${this.isModalOpen&&this.selectedRecording?Jt`
            <annotation-modal
              .recording=${this.selectedRecording}
              @close=${this.handleModalClose}
              @annotation-saved=${this.handleModalClose}
            ></annotation-modal>
          `:null}
    `}};Ue.styles=hn`
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
  `;pn([Ht()],Ue.prototype,"recordings",2);pn([Ht()],Ue.prototype,"isRecording",2);pn([Ht()],Ue.prototype,"recordingDuration",2);pn([Ht()],Ue.prototype,"selectedRecording",2);pn([Ht()],Ue.prototype,"isModalOpen",2);Ue=pn([dn("minimal-recorder")],Ue);const pa=f=>{document.body.setAttribute("data-theme",f)};pa(En.getCurrentTheme());En.subscribe(f=>{pa(f.currentTheme)});

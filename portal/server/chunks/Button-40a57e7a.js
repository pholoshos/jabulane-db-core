import { c as create_ssr_component, b as compute_rest_props, j as get_current_component, v as validate_component, k as spread, l as escape_attribute_value, o as escape_object, h as add_attribute, g as getContext, p as compute_slots, w as listen, m as missing_component, q as onDestroy, x as bubble, y as prevent_default, z as stop_propagation } from './ssr-3e0ce6b7.js';
import { w as writable } from './index-62c943ac.js';

var t="colors",n="sizes",r="space",i={gap:r,gridGap:r,columnGap:r,gridColumnGap:r,rowGap:r,gridRowGap:r,inset:r,insetBlock:r,insetBlockEnd:r,insetBlockStart:r,insetInline:r,insetInlineEnd:r,insetInlineStart:r,margin:r,marginTop:r,marginRight:r,marginBottom:r,marginLeft:r,marginBlock:r,marginBlockEnd:r,marginBlockStart:r,marginInline:r,marginInlineEnd:r,marginInlineStart:r,padding:r,paddingTop:r,paddingRight:r,paddingBottom:r,paddingLeft:r,paddingBlock:r,paddingBlockEnd:r,paddingBlockStart:r,paddingInline:r,paddingInlineEnd:r,paddingInlineStart:r,top:r,right:r,bottom:r,left:r,scrollMargin:r,scrollMarginTop:r,scrollMarginRight:r,scrollMarginBottom:r,scrollMarginLeft:r,scrollMarginX:r,scrollMarginY:r,scrollMarginBlock:r,scrollMarginBlockEnd:r,scrollMarginBlockStart:r,scrollMarginInline:r,scrollMarginInlineEnd:r,scrollMarginInlineStart:r,scrollPadding:r,scrollPaddingTop:r,scrollPaddingRight:r,scrollPaddingBottom:r,scrollPaddingLeft:r,scrollPaddingX:r,scrollPaddingY:r,scrollPaddingBlock:r,scrollPaddingBlockEnd:r,scrollPaddingBlockStart:r,scrollPaddingInline:r,scrollPaddingInlineEnd:r,scrollPaddingInlineStart:r,fontSize:"fontSizes",background:t,backgroundColor:t,backgroundImage:t,borderImage:t,border:t,borderBlock:t,borderBlockEnd:t,borderBlockStart:t,borderBottom:t,borderBottomColor:t,borderColor:t,borderInline:t,borderInlineEnd:t,borderInlineStart:t,borderLeft:t,borderLeftColor:t,borderRight:t,borderRightColor:t,borderTop:t,borderTopColor:t,caretColor:t,color:t,columnRuleColor:t,fill:t,outline:t,outlineColor:t,stroke:t,textDecorationColor:t,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:n,minBlockSize:n,maxBlockSize:n,inlineSize:n,minInlineSize:n,maxInlineSize:n,width:n,minWidth:n,maxWidth:n,height:n,minHeight:n,maxHeight:n,flexBasis:n,gridTemplateColumns:n,gridTemplateRows:n,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},o=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,l=()=>{const e=Object.create(null);return (t,n,...r)=>{const i=(e=>JSON.stringify(e,o))(t);return i in e?e[i]:e[i]=n(t,...r)}},s=Symbol.for("sxs.internal"),a=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),c=e=>{for(const t in e)return !0;return !1},{hasOwnProperty:d}=Object.prototype,g=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),p=/\s+(?![^()]*\))/,u=e=>t=>e(..."string"==typeof t?String(t).split(p):[t]),h={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:u(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:u(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:u(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:u(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:u(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:u(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},f=/([\d.]+)([^]*)/,m=(e,t)=>e.length?e.reduce(((e,n)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(e)?`:is(${n})`:n):n+" "+e))),e)),[]):t,b=(e,t)=>e in S&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,n,r,i)=>n+("stretch"===r?`-moz-available${i};${g(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${g(e)}:${n}fit-content`)+i)):String(t),S={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},k=e=>e?e+"-":"",y=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,r,i,o,l)=>"$"==o==!!i?e:(r||"--"==o?"calc(":"")+"var(--"+("$"===o?k(t)+(l.includes("$")?"":k(n))+l.replace(/\$/g,"-"):l)+")"+(r||"--"==o?"*"+(r||"")+(i||"1")+")":""))),B=/\s*,\s*(?![^()]*\))/,$=Object.prototype.toString,x=(e,t,n,r,i)=>{let o,l,s;const a=(e,t,n)=>{let c,d;const p=e=>{for(c in e){const x=64===c.charCodeAt(0),z=x&&Array.isArray(e[c])?e[c]:[e[c]];for(d of z){const e=/[A-Z]/.test(S=c)?S:S.replace(/-[^]/g,(e=>e[1].toUpperCase())),z="object"==typeof d&&d&&d.toString===$&&(!r.utils[e]||!t.length);if(e in r.utils&&!z){const t=r.utils[e];if(t!==l){l=t,p(t(d)),l=null;continue}}else if(e in h){const t=h[e];if(t!==s){s=t,p(t(d)),s=null;continue}}if(x&&(u=c.slice(1)in r.media?"@media "+r.media[c.slice(1)]:c,c=u.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,n,r,i,o)=>{const l=f.test(t),s=.0625*(l?-1:1),[a,c]=l?[r,t]:[t,r];return "("+("="===n[0]?"":">"===n[0]===l?"max-":"min-")+a+":"+("="!==n[0]&&1===n.length?c.replace(f,((e,t,r)=>Number(t)+s*(">"===n?1:-1)+r)):c)+(i?") and ("+(">"===i[0]?"min-":"max-")+a+":"+(1===i.length?o.replace(f,((e,t,n)=>Number(t)+s*(">"===i?-1:1)+n)):o):"")+")"}))),z){const e=x?n.concat(c):[...n],r=x?[...t]:m(t,c.split(B));void 0!==o&&i(I(...o)),o=void 0,a(d,r,e);}else void 0===o&&(o=[[],t,n]),c=x||36!==c.charCodeAt(0)?c:`--${k(r.prefix)}${c.slice(1).replace(/\$/g,"-")}`,d=z?d:"number"==typeof d?d&&e in R?String(d)+"px":String(d):y(b(e,null==d?"":d),r.prefix,r.themeMap[e]),o[0].push(`${x?`${c} `:`${g(c)}:`}${d}`);}}var u,S;};p(e),void 0!==o&&i(I(...o)),o=void 0;};a(e,t,n);},I=(e,t,n)=>`${n.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,R={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},z=e=>String.fromCharCode(e+(e>25?39:97)),W=e=>(e=>{let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=z(t%52)+n;return z(t%52)+n})(((e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e})(5381,JSON.stringify(e))>>>0),j=["themed","global","styled","onevar","resonevar","allvar","inline"],E=e=>{if(e.href&&!e.href.startsWith(location.origin))return !1;try{return !!e.cssRules}catch(e){return !1}},T=e=>{let t;const n=()=>{const{cssRules:e}=t.sheet;return [].map.call(e,((n,r)=>{const{cssText:i}=n;let o="";if(i.startsWith("--sxs"))return "";if(e[r-1]&&(o=e[r-1].cssText).startsWith("--sxs")){if(!n.cssRules.length)return "";for(const e in t.rules)if(t.rules[e].group===n)return `--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;return n.cssRules.length?`${o}${i}`:""}return i})).join("")},r=()=>{if(t){const{rules:e,sheet:n}=t;if(!n.deleteRule){for(;3===Object(Object(n.cssRules)[0]).type;)n.cssRules.splice(0,1);n.cssRules=[];}for(const t in e)delete e[t];}const i=Object(e).styleSheets||[];for(const e of i)if(E(e)){for(let i=0,o=e.cssRules;o[i];++i){const l=Object(o[i]);if(1!==l.type)continue;const s=Object(o[i+1]);if(4!==s.type)continue;++i;const{cssText:a}=l;if(!a.startsWith("--sxs"))continue;const c=a.slice(14,-3).trim().split(/\s+/),d=j[c[0]];d&&(t||(t={sheet:e,reset:r,rules:{},toString:n}),t.rules[d]={group:s,index:i,cache:new Set(c)});}if(t)break}if(!t){const i=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,i(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4));},get cssText(){return "@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:i("","text/css"),rules:{},reset:r,toString:n};}const{sheet:o,rules:l}=t;for(let e=j.length-1;e>=0;--e){const t=j[e];if(!l[t]){const n=j[e+1],r=l[n]?l[n].index:o.cssRules.length;o.insertRule("@media{}",r),o.insertRule(`--sxs{--sxs:${e}}`,r),l[t]={group:o.cssRules[r+1],index:r,cache:new Set([e])};}v(l[t]);}};return r(),t},v=e=>{const t=e.group;let n=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,n),++n;}catch(e){}};},M=Symbol(),w=l(),C=(e,t)=>w(e,(()=>(...n)=>{let r={type:null,composers:new Set};for(const t of n)if(null!=t)if(t[s]){null==r.type&&(r.type=t[s].type);for(const e of t[s].composers)r.composers.add(e);}else t.constructor!==Object||t.$$typeof?null==r.type&&(r.type=t):r.composers.add(P(t,e));return null==r.type&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),L(e,r,t)})),P=({variants:e,compoundVariants:t,defaultVariants:n,...r},i)=>{const o=`${k(i.prefix)}c-${W(r)}`,l=[],s=[],a=Object.create(null),g=[];for(const e in n)a[e]=String(n[e]);if("object"==typeof e&&e)for(const t in e){p=a,u=t,d.call(p,u)||(a[t]="undefined");const n=e[t];for(const e in n){const r={[t]:String(e)};"undefined"===String(e)&&g.push(t);const i=n[e],o=[r,i,!c(i)];l.push(o);}}var p,u;if("object"==typeof t&&t)for(const e of t){let{css:t,...n}=e;t="object"==typeof t&&t||{};for(const e in n)n[e]=String(n[e]);const r=[n,t,!c(t)];s.push(r);}return [o,r,l,s,a,g]},L=(e,t,n)=>{const[r,i,o,l]=O(t.composers),c="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let n=0;n<t[M].length;n++){const[r,i]=t[M][n];e.rules[r].apply(i);}return t[M]=[],null}return t[M]=[],t.rules={},j.forEach((e=>t.rules[e]={apply:n=>t[M].push([e,n])})),t})(n):null,d=(c||n).rules,g=`.${r}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,p=s=>{s="object"==typeof s&&s||D;const{css:a,...p}=s,u={};for(const e in o)if(delete p[e],e in s){let t=s[e];"object"==typeof t&&t?u[e]={"@initial":o[e],...t}:(t=String(t),u[e]="undefined"!==t||l.has(e)?t:o[e]);}else u[e]=o[e];const h=new Set([...i]);for(const[r,i,o,l]of t.composers){n.rules.styled.cache.has(r)||(n.rules.styled.cache.add(r),x(i,[`.${r}`],[],e,(e=>{d.styled.apply(e);})));const t=A(o,u,e.media),s=A(l,u,e.media,!0);for(const i of t)if(void 0!==i)for(const[t,o,l]of i){const i=`${r}-${W(o)}-${t}`;h.add(i);const s=(l?n.rules.resonevar:n.rules.onevar).cache,a=l?d.resonevar:d.onevar;s.has(i)||(s.add(i),x(o,[`.${i}`],[],e,(e=>{a.apply(e);})));}for(const t of s)if(void 0!==t)for(const[i,o]of t){const t=`${r}-${W(o)}-${i}`;h.add(t),n.rules.allvar.cache.has(t)||(n.rules.allvar.cache.add(t),x(o,[`.${t}`],[],e,(e=>{d.allvar.apply(e);})));}}if("object"==typeof a&&a){const t=`${r}-i${W(a)}-css`;h.add(t),n.rules.inline.cache.has(t)||(n.rules.inline.cache.add(t),x(a,[`.${t}`],[],e,(e=>{d.inline.apply(e);})));}for(const e of String(s.className||"").trim().split(/\s+/))e&&h.add(e);const f=p.className=[...h].join(" ");return {type:t.type,className:f,selector:g,props:p,toString:()=>f,deferredInjector:c}};return a(p,{className:r,selector:g,[s]:t,toString:()=>(n.rules.styled.cache.has(r)||p(),r)})},O=e=>{let t="";const n=[],r={},i=[];for(const[o,,,,l,s]of e){""===t&&(t=o),n.push(o),i.push(...s);for(const e in l){const t=l[e];(void 0===r[e]||"undefined"!==t||s.includes(t))&&(r[e]=t);}}return [t,n,r,new Set(i)]},A=(e,t,n,r)=>{const i=[];e:for(let[o,l,s]of e){if(s)continue;let e,a=0,c=!1;for(e in o){const r=o[e];let i=t[e];if(i!==r){if("object"!=typeof i||!i)continue e;{let e,t,o=0;for(const l in i){if(r===String(i[l])){if("@initial"!==l){const e=l.slice(1);(t=t||[]).push(e in n?n[e]:l.replace(/^@media ?/,"")),c=!0;}a+=o,e=!0;}++o;}if(t&&t.length&&(l={["@media "+t.join(", ")]:l}),!e)continue e}}}(i[a]=i[a]||[]).push([r?"cv":`${e}-${o[e]}`,l,c]);}return i},D={},H=l(),N=(e,t)=>H(e,(()=>(...n)=>{const r=()=>{for(let r of n){r="object"==typeof r&&r||{};let n=W(r);if(!t.rules.global.cache.has(n)){if(t.rules.global.cache.add(n),"@import"in r){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let n of [].concat(r["@import"]))n=n.includes('"')||n.includes("'")?n:`"${n}"`,t.sheet.insertRule(`@import ${n};`,e++);delete r["@import"];}x(r,[],[],e,(e=>{t.rules.global.apply(e);}));}}return ""};return a(r,{toString:r})})),V=l(),G=(e,t)=>V(e,(()=>n=>{const r=`${k(e.prefix)}k-${W(n)}`,i=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const i=[];x(n,[],[],e,(e=>i.push(e)));const o=`@keyframes ${r}{${i.join("")}}`;t.rules.global.apply(o);}return r};return a(i,{get name(){return i()},toString:i})})),F=class{constructor(e,t,n,r){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==n?"":String(n),this.prefix=null==r?"":String(r);}get computedValue(){return "var("+this.variable+")"}get variable(){return "--"+k(this.prefix)+k(this.scale)+this.token}toString(){return this.computedValue}},J=l(),U=(e,t)=>J(e,(()=>(n,r)=>{r="object"==typeof n&&n||Object(r);const i=`.${n=(n="string"==typeof n?n:"")||`${k(e.prefix)}t-${W(r)}`}`,o={},l=[];for(const t in r){o[t]={};for(const n in r[t]){const i=`--${k(e.prefix)}${t}-${n}`,s=y(String(r[t][n]),e.prefix,t);o[t][n]=new F(n,s,t,e.prefix),l.push(`${i}:${s}`);}}const s=()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const i=`${r===e.theme?":root,":""}.${n}{${l.join(";")}}`;t.rules.themed.apply(i);}return n};return {...o,get className(){return s()},selector:i,toString:s}})),Z=l(),X=e=>{let t=!1;const n=Z(e,(e=>{t=!0;const n="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",r="object"==typeof e.media&&e.media||{},o="object"==typeof e.root?e.root||null:globalThis.document||null,l="object"==typeof e.theme&&e.theme||{},s={prefix:n,media:r,theme:l,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...i},utils:"object"==typeof e.utils&&e.utils||{}},a=T(o),c={css:C(s,a),globalCss:N(s,a),keyframes:G(s,a),createTheme:U(s,a),reset(){a.reset(),c.theme.toString();},theme:{},sheet:a,config:s,prefix:n,getCssText:a.toString,toString:a.toString};return String(c.theme=c.createTheme(l)),c}));return t||n.reset(),n};//# sourceMappingUrl=index.map

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { observable = false } = $$props;
  let { component } = $$props;
  let { code } = $$props;
  if ($$props.observable === void 0 && $$bindings.observable && observable !== void 0)
    $$bindings.observable(observable);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  return `${observable ? ` <!-- HTML_TAG_START -->${exception(component, code)}<!-- HTML_TAG_END -->` : ``}`;
});
const Error$2 = Error$1;
const isBrowser = () => typeof window !== "undefined";
const browser = isBrowser();
const minifiedCss = ".modal-header{padding: 2px 16px;background-color: #339af0;color: white;}.modal-body{padding: 2px 16px;}.modal-footer{padding: 2px 16px;background-color: #339af0;color: white;}.modal-content{position: relative;background-color: #fefefe;margin: auto;padding: 0;border: 1px solid #888;width: 80%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);animation-name: animateTop;animation-duration: 0.4s;}@keyframes animateTop {from {top: -300px; opacity: 0}to {top: 0; opacity: 1}}";
const style = browser ? document.createElement("style") : void 0;
if (browser) {
  const s = style;
  s.textContent = minifiedCss;
  s.id = "svelteui-inject";
}
function UserException(component, message, solution) {
  if (browser)
    document.head.appendChild(style);
  const html = `
    <div class="modal-content">
        <div class="modal-header">
            <h2>[${component} Component Error]:</h2>
            <h3>${message}</h3>
        </div>
        <div class="modal-body">
            <pre>
                ${solution ? solution : ""}
            </pre>
        </div>
        <div class="modal-footer">
            <h3>Fix the code to dismiss this error.</h3>
        </div>
    </div>        
    `;
  return html;
}
function exception(component, code) {
  const { message, solution } = code;
  if (solution) {
    return UserException(component, message, solution);
  }
  return UserException(component, message);
}
function useActions(node, actions) {
  const actionReturns = [];
  if (actions) {
    for (let i = 0; i < actions.length; i++) {
      const actionEntry = actions[i];
      const action = Array.isArray(actionEntry) ? actionEntry[0] : actionEntry;
      if (Array.isArray(actionEntry) && actionEntry.length > 1) {
        actionReturns.push(action(node, actionEntry[1]));
      } else {
        actionReturns.push(action(node));
      }
    }
  }
  return {
    update(actions2) {
      if ((actions2 && actions2.length || 0) != actionReturns.length) {
        throw new Error("You must not change the length of an actions array.");
      }
      if (actions2) {
        for (let i = 0; i < actions2.length; i++) {
          const returnEntry = actionReturns[i];
          if (returnEntry && returnEntry.update) {
            const actionEntry = actions2[i];
            if (Array.isArray(actionEntry) && actionEntry.length > 1) {
              returnEntry.update(actionEntry[1]);
            } else {
              returnEntry.update();
            }
          }
        }
      }
    },
    destroy() {
      for (let i = 0; i < actionReturns.length; i++) {
        const returnEntry = actionReturns[i];
        if (returnEntry && returnEntry.destroy) {
          returnEntry.destroy();
        }
      }
    }
  };
}
const MODIFIER_DIVIDER = "!";
const modifierRegex = new RegExp(`^[^${MODIFIER_DIVIDER}]+(?:${MODIFIER_DIVIDER}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`);
function createEventForwarder(component, except = []) {
  let $on;
  const events = [];
  component.$on = (fullEventType, callback) => {
    const eventType = fullEventType;
    let destructor = () => {
    };
    for (const exception2 of except) {
      if (typeof exception2 === "string" && exception2 === eventType) {
        const callbacks = component.$$.callbacks[eventType] || (component.$$.callbacks[eventType] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      if (typeof exception2 === "object" && exception2["name"] === eventType) {
        const oldCallback = callback;
        callback = (...props) => {
          if (!(typeof exception2 === "object" && exception2["shouldExclude"]())) {
            oldCallback(...props);
          }
        };
      }
    }
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const modifierMatch = eventType.match(modifierRegex);
      if (modifierMatch) {
        const parts = eventType.split(MODIFIER_DIVIDER);
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (const entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
const key = {};
function useSvelteUIThemeContext() {
  return getContext(key);
}
const colorScheme = writable("light");
function useSvelteUITheme() {
  let observer;
  colorScheme?.subscribe((mode) => {
    observer = mode;
  });
  const DEFAULT_THEME = {
    // @ts-ignore
    ...theme,
    colorNames: colorNameMap,
    colorScheme: observer,
    dark: dark?.selector,
    fn: {
      cover: fns.cover,
      themeColor: fns.themeColor,
      size: fns.size,
      radius: fns.radius,
      rgba: fns.rgba,
      variant: fns.variant
    }
  };
  return DEFAULT_THEME;
}
function themeColor(color, shade = 0) {
  const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  let _shade = "50";
  if (!isSvelteUIColor(color))
    return color;
  if (shade !== Number(0))
    _shade = `${shade.toString()}00`;
  return theme2.colors[`${color}${_shade}`]?.value;
}
function isSvelteUIColor(color) {
  let valid = false;
  switch (color) {
    case "dark":
      valid = true;
      break;
    case "gray":
      valid = true;
      break;
    case "red":
      valid = true;
      break;
    case "pink":
      valid = true;
      break;
    case "grape":
      valid = true;
      break;
    case "violet":
      valid = true;
      break;
    case "indigo":
      valid = true;
      break;
    case "blue":
      valid = true;
      break;
    case "cyan":
      valid = true;
      break;
    case "teal":
      valid = true;
      break;
    case "green":
      valid = true;
      break;
    case "lime":
      valid = true;
      break;
    case "yellow":
      valid = true;
      break;
    case "orange":
      valid = true;
      break;
    default:
      valid = false;
      break;
  }
  return valid;
}
function isHexColor(hex) {
  const replaced = hex.replace("#", "");
  return typeof replaced === "string" && replaced.length === 6 && !Number.isNaN(Number(`0x${replaced}`));
}
function hexToRgba(color) {
  const replaced = color.replace("#", "");
  const parsed = parseInt(replaced, 16);
  const r = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r, g, b, a] = color.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r, g, b, a: a || 1 };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
const vFunc = (color, gradient) => {
  const { themeColor: themeColor2, rgba: rgba2 } = fns;
  const variants = {
    /** Filled variant */
    filled: {
      [`${dark.selector} &`]: {
        backgroundColor: themeColor2(color, 8)
      },
      border: "transparent",
      backgroundColor: themeColor2(color, 6),
      color: "White",
      "&:hover": { backgroundColor: themeColor2(color, 7) }
    },
    /** Light variant */
    light: {
      [`${dark.selector} &`]: {
        backgroundColor: rgba2(themeColor2(color, 8), 0.35),
        color: color === "dark" ? themeColor2("dark", 0) : themeColor2(color, 2),
        "&:hover": { backgroundColor: rgba2(themeColor2(color, 7), 0.45) }
      },
      border: "transparent",
      backgroundColor: themeColor2(color, 0),
      color: color === "dark" ? themeColor2("dark", 9) : themeColor2(color, 6),
      "&:hover": { backgroundColor: themeColor2(color, 1) }
    },
    /** Outline variant */
    outline: {
      [`${dark.selector} &`]: {
        border: `1px solid ${themeColor2(color, 4)}`,
        color: `${themeColor2(color, 4)}`,
        "&:hover": { backgroundColor: rgba2(themeColor2(color, 4), 0.05) }
      },
      border: `1px solid ${themeColor2(color, 7)}`,
      backgroundColor: "transparent",
      color: themeColor2(color, 7),
      "&:hover": {
        backgroundColor: rgba2(themeColor2(color, 0), 0.35)
      }
    },
    /** Subtle variant */
    subtle: {
      [`${dark.selector} &`]: {
        color: color === "dark" ? themeColor2("dark", 0) : themeColor2(color, 2),
        "&:hover": { backgroundColor: rgba2(themeColor2(color, 8), 0.35) }
      },
      border: "transparent",
      backgroundColor: "transparent",
      color: color === "dark" ? themeColor2("dark", 9) : themeColor2(color, 6),
      "&:hover": {
        backgroundColor: themeColor2(color, 0)
      }
    },
    /** Default variant */
    default: {
      [`${dark.selector} &`]: {
        border: `1px solid ${themeColor2("dark", 5)}`,
        backgroundColor: themeColor2("dark", 5),
        color: "White",
        "&:hover": { backgroundColor: themeColor2("dark", 4) }
      },
      border: `1px solid ${themeColor2("gray", 4)}`,
      backgroundColor: "White",
      color: "Black",
      "&:hover": { backgroundColor: themeColor2("gray", 0) }
    },
    /** White variant */
    white: {
      border: "transparent",
      backgroundColor: "White",
      color: themeColor2(color, 7),
      "&:hover": { backgroundColor: "White" }
    },
    gradient: {}
  };
  if (gradient) {
    variants.gradient = {
      border: "transparent",
      background: `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)`,
      color: "White"
    };
  }
  return variants;
};
function createConverter(units) {
  return (px) => {
    if (typeof px === "number") {
      return `${px / 16}${units}`;
    }
    if (typeof px === "string") {
      const replaced = px.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        return `${Number(replaced) / 16}${units}`;
      }
    }
    return px;
  };
}
const rem = createConverter("rem");
function cover(offset = 0) {
  return {
    position: "absolute",
    top: rem(offset),
    right: rem(offset),
    left: rem(offset),
    bottom: rem(offset)
  };
}
function size(props) {
  if (typeof props.size === "number") {
    return props.size;
  }
  if (typeof props.sizes[props.size] === "number") {
    return props.sizes[props.size];
  }
  return +props.sizes[props.size]?.value || +props.sizes.md?.value;
}
function radius(radii) {
  const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  if (typeof radii === "number") {
    return radii;
  }
  return theme2.radii[radii].value;
}
function rgba(color, alpha = 1) {
  if (typeof color !== "string" || alpha > 1 || alpha < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  const { r, g, b } = toRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
const DEFAULT_GRADIENT = {
  from: "indigo",
  to: "cyan",
  deg: 45
};
function variant({ variant: variant2, color, gradient }) {
  const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  const primaryShade = 6;
  if (variant2 === "light") {
    return {
      border: "transparent",
      background: [rgba(themeColor(color, 8), 0.35), rgba(themeColor(color, 0), 1)],
      color: [
        color === "dark" ? themeColor("dark", 0) : themeColor(color, 2),
        color === "dark" ? themeColor("dark", 9) : themeColor(color, primaryShade)
      ],
      // themeColor(color, theme.colorScheme === 'dark' ? 2 : getPrimaryShade('light')),
      hover: [rgba(themeColor(color, 7), 0.45), rgba(themeColor(color, 1), 0.65)]
    };
  }
  if (variant2 === "default") {
    return {
      border: [themeColor("dark", 5), themeColor("gray", 4)],
      background: [themeColor("dark", 5), theme2.colors.white.value],
      color: [theme2.colors.white.value, theme2.colors.black.value],
      hover: [themeColor("dark", 4), themeColor("gray", 0)]
    };
  }
  if (variant2 === "white") {
    return {
      border: "transparent",
      background: theme2.colors.white.value,
      color: themeColor(color, primaryShade),
      hover: null
    };
  }
  if (variant2 === "outline") {
    return {
      border: [themeColor(color, 4), themeColor(color, primaryShade)],
      background: "transparent",
      color: [themeColor(color, 4), themeColor(color, primaryShade)],
      hover: [rgba(themeColor(color, 4), 0.05), rgba(themeColor(color, 0), 0.35)]
    };
  }
  if (variant2 === "gradient") {
    const merged = {
      from: gradient?.from || DEFAULT_GRADIENT.from,
      to: gradient?.to || DEFAULT_GRADIENT.to,
      deg: gradient?.deg || DEFAULT_GRADIENT.deg
    };
    return {
      background: `linear-gradient(${merged.deg}deg, ${themeColor(merged.from, primaryShade)} 0%, ${themeColor(merged.to, primaryShade)} 100%)`,
      color: theme2.colors.white.value,
      border: "transparent",
      hover: null
    };
  }
  if (variant2 === "subtle") {
    return {
      border: "transparent",
      background: "transparent",
      color: [
        color === "dark" ? themeColor("dark", 0) : themeColor(color, 2),
        color === "dark" ? themeColor("dark", 9) : themeColor(color, primaryShade)
      ],
      hover: [rgba(themeColor(color, 8), 0.35), rgba(themeColor(color, 0), 1)]
    };
  }
  return {
    border: "transparent",
    background: [themeColor(color, 8), themeColor(color, primaryShade)],
    color: theme2.colors.white.value,
    hover: themeColor(color, 7)
  };
}
const fns = {
  cover,
  size,
  radius,
  themeColor,
  variant,
  rgba
};
const colors = {
  primary: "#228be6",
  white: "#ffffff",
  black: "#000000",
  dark50: "#C1C2C5",
  dark100: "#A6A7AB",
  dark200: "#909296",
  dark300: "#5c5f66",
  dark400: "#373A40",
  dark500: "#2C2E33",
  dark600: "#25262b",
  dark700: "#1A1B1E",
  dark800: "#141517",
  dark900: "#101113",
  gray50: "#f8f9fa",
  gray100: "#f1f3f5",
  gray200: "#e9ecef",
  gray300: "#dee2e6",
  gray400: "#ced4da",
  gray500: "#adb5bd",
  gray600: "#868e96",
  gray700: "#495057",
  gray800: "#343a40",
  gray900: "#212529",
  red50: "#fff5f5",
  red100: "#ffe3e3",
  red200: "#ffc9c9",
  red300: "#ffa8a8",
  red400: "#ff8787",
  red500: "#ff6b6b",
  red600: "#fa5252",
  red700: "#f03e3e",
  red800: "#e03131",
  red900: "#c92a2a",
  pink50: "#fff0f6",
  pink100: "#ffdeeb",
  pink200: "#fcc2d7",
  pink300: "#faa2c1",
  pink400: "#f783ac",
  pink500: "#f06595",
  pink600: "#e64980",
  pink700: "#d6336c",
  pink800: "#c2255c",
  pink900: "#a61e4d",
  grape50: "#f8f0fc",
  grape100: "#f3d9fa",
  grape200: "#eebefa",
  grape300: "#e599f7",
  grape400: "#da77f2",
  grape500: "#cc5de8",
  grape600: "#be4bdb",
  grape700: "#ae3ec9",
  grape800: "#9c36b5",
  grape900: "#862e9c",
  violet50: "#f3f0ff",
  violet100: "#e5dbff",
  violet200: "#d0bfff",
  violet300: "#b197fc",
  violet400: "#9775fa",
  violet500: "#845ef7",
  violet600: "#7950f2",
  violet700: "#7048e8",
  violet800: "#6741d9",
  violet900: "#5f3dc4",
  indigo50: "#edf2ff",
  indigo100: "#dbe4ff",
  indigo200: "#bac8ff",
  indigo300: "#91a7ff",
  indigo400: "#748ffc",
  indigo500: "#5c7cfa",
  indigo600: "#4c6ef5",
  indigo700: "#4263eb",
  indigo800: "#3b5bdb",
  indigo900: "#364fc7",
  blue50: "#e7f5ff",
  blue100: "#d0ebff",
  blue200: "#a5d8ff",
  blue300: "#74c0fc",
  blue400: "#4dabf7",
  blue500: "#339af0",
  blue600: "#228be6",
  blue700: "#1c7ed6",
  blue800: "#1971c2",
  blue900: "#1864ab",
  cyan50: "#e3fafc",
  cyan100: "#c5f6fa",
  cyan200: "#99e9f2",
  cyan300: "#66d9e8",
  cyan400: "#3bc9db",
  cyan500: "#22b8cf",
  cyan600: "#15aabf",
  cyan700: "#1098ad",
  cyan800: "#0c8599",
  cyan900: "#0b7285",
  teal50: "#e6fcf5",
  teal100: "#c3fae8",
  teal200: "#96f2d7",
  teal300: "#63e6be",
  teal400: "#38d9a9",
  teal500: "#20c997",
  teal600: "#12b886",
  teal700: "#0ca678",
  teal800: "#099268",
  teal900: "#087f5b",
  green50: "#ebfbee",
  green100: "#d3f9d8",
  green200: "#b2f2bb",
  green300: "#8ce99a",
  green400: "#69db7c",
  green500: "#51cf66",
  green600: "#40c057",
  green700: "#37b24d",
  green800: "#2f9e44",
  green900: "#2b8a3e",
  lime50: "#f4fce3",
  lime100: "#e9fac8",
  lime200: "#d8f5a2",
  lime300: "#c0eb75",
  lime400: "#a9e34b",
  lime500: "#94d82d",
  lime600: "#82c91e",
  lime700: "#74b816",
  lime800: "#66a80f",
  lime900: "#5c940d",
  yellow50: "#fff9db",
  yellow100: "#fff3bf",
  yellow200: "#ffec99",
  yellow300: "#ffe066",
  yellow400: "#ffd43b",
  yellow500: "#fcc419",
  yellow600: "#fab005",
  yellow700: "#f59f00",
  yellow800: "#f08c00",
  yellow900: "#e67700",
  orange50: "#fff4e6",
  orange100: "#ffe8cc",
  orange200: "#ffd8a8",
  orange300: "#ffc078",
  orange400: "#ffa94d",
  orange500: "#ff922b",
  orange600: "#fd7e14",
  orange700: "#f76707",
  orange800: "#e8590c",
  orange900: "#d9480f"
};
const colorNameMap = {
  blue: "blue",
  cyan: "cyan",
  dark: "dark",
  grape: "grape",
  gray: "gray",
  green: "green",
  indigo: "indigo",
  lime: "lime",
  orange: "orange",
  pink: "pink",
  red: "red",
  teal: "teal",
  violet: "violet",
  yellow: "yellow"
};
const hasOwn = {}.hasOwnProperty;
function cx(...args) {
  const classes = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg)
      continue;
    const argType = typeof arg;
    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = { ...arg };
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === "object") {
      if (arg.toString === Object.prototype.toString) {
        for (const key2 in arg) {
          if (hasOwn.call(arg, key2) && arg[key2]) {
            classes.push(key2);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    }
  }
  return classes.join(" ");
}
function cssFactory() {
  return { cx };
}
function fromEntries(entries) {
  const o = {};
  Object.keys(entries).forEach((key2) => {
    const [k, v] = entries[key2];
    o[k] = v;
  });
  return o;
}
const CLASS_KEY = "svelteui";
function createRef(refName) {
  return `__svelteui-ref-${refName || ""}`;
}
function sanitizeCss(object, theme2) {
  const refs = [];
  const classMap = {};
  const _sanitizeVariants = (obj) => {
    const variants = Object.keys(obj.variation);
    for (const variant2 of variants) {
      _sanitize(obj.variation[variant2]);
    }
  };
  const _sanitize = (obj) => {
    Object.keys(obj).map((value) => {
      if (value === "variants") {
        _sanitizeVariants(obj[value]);
        return;
      }
      if (value === "ref") {
        refs.push(obj.ref);
      }
      if (value === "darkMode") {
        obj[`${theme2.dark} &`] = obj.darkMode;
      }
      if (obj[value] === null || typeof obj[value] !== "object")
        return;
      _sanitize(obj[value]);
      if (value === "darkMode") {
        delete obj[value];
      } else if (value.startsWith("@media"))
        ;
      else if (!value.startsWith("&") && !value.startsWith(theme2.dark)) {
        const getStyles = css$2(obj[value]);
        classMap[value] = getStyles().toString();
        obj[`& .${getStyles().toString()}`] = obj[value];
        delete obj[value];
      }
    });
  };
  _sanitize(object);
  delete object["& .root"];
  return { classMap, refs: Array.from(new Set(refs)) };
}
function createStyles(input) {
  const getCssObject = typeof input === "function" ? input : () => input;
  function useStyles2(params = {}, options) {
    const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
    const { cx: cx2 } = cssFactory();
    const { override, name } = options || {};
    const dirtyCssObject = getCssObject(theme2, params, createRef);
    const sanitizedCss = Object.assign({}, dirtyCssObject);
    const { classMap, refs } = sanitizeCss(sanitizedCss, theme2);
    const root = dirtyCssObject["root"] ?? void 0;
    const cssObjectClean = root !== void 0 ? { ...root, ...sanitizedCss } : dirtyCssObject;
    const getStyles = css$2(cssObjectClean);
    const classes = fromEntries(Object.keys(dirtyCssObject).map((keys) => {
      const ref = refs.find((r) => r.includes(keys)) ?? "";
      const getRefName = ref?.split("-") ?? [];
      const keyIsRef = ref?.split("-")[getRefName?.length - 1] === keys;
      const value = keys.toString();
      let transformedClasses = classMap[value] ?? value;
      if (ref && keyIsRef) {
        transformedClasses = `${transformedClasses} ${ref}`;
      }
      if (keys === "root") {
        transformedClasses = getStyles({ css: override }).toString();
      }
      let libClass = `${CLASS_KEY}-${keys.toString()}`;
      if (name) {
        libClass = `${CLASS_KEY}-${name}-${keys.toString()}`;
        transformedClasses = `${transformedClasses} ${libClass}`;
      }
      return [keys, transformedClasses];
    }));
    return {
      cx: cx2,
      theme: theme2,
      classes,
      getStyles: css$2(cssObjectClean)
    };
  }
  return useStyles2;
}
const { css: css$2, globalCss, keyframes, getCssText, theme, createTheme, config, reset } = X({
  prefix: "svelteui",
  theme: {
    colors,
    space: {
      0: "0rem",
      xs: 10,
      sm: 12,
      md: 16,
      lg: 20,
      xl: 24,
      xsPX: "10px",
      smPX: "12px",
      mdPX: "16px",
      lgPX: "20px",
      xlPX: "24px",
      1: "0.125rem",
      2: "0.25rem",
      3: "0.375rem",
      4: "0.5rem",
      5: "0.625rem",
      6: "0.75rem",
      7: "0.875rem",
      8: "1rem",
      9: "1.25rem",
      10: "1.5rem",
      11: "1.75rem",
      12: "2rem",
      13: "2.25rem",
      14: "2.5rem",
      15: "2.75rem",
      16: "3rem",
      17: "3.5rem",
      18: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px"
    },
    fonts: {
      standard: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      fallback: "Segoe UI, system-ui, sans-serif"
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    lineHeights: {
      xs: 1,
      sm: 1.25,
      md: 1.5,
      lg: 1.625,
      xl: 1.75
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    sizes: {},
    radii: {
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "16px",
      xl: "32px",
      squared: "33%",
      rounded: "50%",
      pill: "9999px"
    },
    shadows: {
      xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
      sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
      md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
      xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      5: "500",
      10: "1000",
      max: "9999"
    },
    borderWidths: {
      light: "1px",
      normal: "2px",
      bold: "3px",
      extrabold: "4px",
      black: "5px",
      xs: "1px",
      sm: "2px",
      md: "3px",
      lg: "4px",
      xl: "5px"
    },
    breakpoints: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400
    },
    borderStyles: {},
    transitions: {}
  },
  media: {
    xs: "(min-width: 576px)",
    sm: "(min-width: 768px)",
    md: "(min-width: 992px)",
    lg: "(min-width: 1200px)",
    xl: "(min-width: 1400px)"
  },
  utils: {
    focusRing: (value) => ({
      WebkitTapHighlightColor: "transparent",
      "&:focus": {
        outlineOffset: 2,
        outline: value === "always" || value === "auto" ? "2px solid $primary" : "none"
      },
      "&:focus:not(:focus-visible)": {
        outline: value === "auto" || value === "never" ? "none" : void 0
      }
    }),
    /** padding top */
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    /** margin */
    m: (value) => ({
      margin: value
    }),
    /** margin-top */
    mt: (value) => ({
      marginTop: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    ta: (value) => ({
      textAlign: value
    }),
    tt: (value) => ({
      textTransform: value
    }),
    to: (value) => ({
      textOverflow: value
    }),
    d: (value) => ({ display: value }),
    dflex: (value) => ({
      display: "flex",
      alignItems: value,
      justifyContent: value
    }),
    fd: (value) => ({
      flexDirection: value
    }),
    fw: (value) => ({ flexWrap: value }),
    ai: (value) => ({
      alignItems: value
    }),
    ac: (value) => ({
      alignContent: value
    }),
    jc: (value) => ({
      justifyContent: value
    }),
    as: (value) => ({
      alignSelf: value
    }),
    fg: (value) => ({ flexGrow: value }),
    fs: (value) => ({
      fontSize: value
    }),
    fb: (value) => ({
      flexBasis: value
    }),
    bc: (value) => ({
      backgroundColor: value
    }),
    bf: (value) => ({
      backdropFilter: value
    }),
    bg: (value) => ({
      background: value
    }),
    bgBlur: (value) => ({
      bf: "saturate(180%) blur(10px)",
      bg: value
    }),
    bgColor: (value) => ({
      backgroundColor: value
    }),
    backgroundClip: (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    }),
    bgClip: (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    }),
    br: (value) => ({
      borderRadius: value
    }),
    bw: (value) => ({
      borderWidth: value
    }),
    btrr: (value) => ({
      borderTopRightRadius: value
    }),
    bbrr: (value) => ({
      borderBottomRightRadius: value
    }),
    bblr: (value) => ({
      borderBottomLeftRadius: value
    }),
    btlr: (value) => ({
      borderTopLeftRadius: value
    }),
    bs: (value) => ({
      boxShadow: value
    }),
    normalShadow: (value) => ({
      boxShadow: `0 4px 14px 0 $${value}`
    }),
    lh: (value) => ({
      lineHeight: value
    }),
    ov: (value) => ({ overflow: value }),
    ox: (value) => ({
      overflowX: value
    }),
    oy: (value) => ({
      overflowY: value
    }),
    pe: (value) => ({
      pointerEvents: value
    }),
    events: (value) => ({
      pointerEvents: value
    }),
    us: (value) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    userSelect: (value) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    w: (value) => ({ width: value }),
    h: (value) => ({
      height: value
    }),
    minW: (value) => ({
      minWidth: value
    }),
    minH: (value) => ({
      minWidth: value
    }),
    mw: (value) => ({
      maxWidth: value
    }),
    maxW: (value) => ({
      maxWidth: value
    }),
    mh: (value) => ({
      maxHeight: value
    }),
    maxH: (value) => ({
      maxHeight: value
    }),
    size: (value) => ({
      width: value,
      height: value
    }),
    minSize: (value) => ({
      minWidth: value,
      minHeight: value,
      width: value,
      height: value
    }),
    sizeMin: (value) => ({
      minWidth: value,
      minHeight: value,
      width: value,
      height: value
    }),
    maxSize: (value) => ({
      maxWidth: value,
      maxHeight: value
    }),
    sizeMax: (value) => ({
      maxWidth: value,
      maxHeight: value
    }),
    appearance: (value) => ({
      WebkitAppearance: value,
      appearance: value
    }),
    scale: (value) => ({
      transform: `scale(${value})`
    }),
    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`
    }),
    tdl: (value) => ({
      textDecorationLine: value
    }),
    // Text gradient effect
    textGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    })
  },
  themeMap: {
    ...i,
    width: "space",
    height: "space",
    minWidth: "space",
    maxWidth: "space",
    minHeight: "space",
    maxHeight: "space",
    flexBasis: "space",
    gridTemplateColumns: "space",
    gridTemplateRows: "space",
    blockSize: "space",
    minBlockSize: "space",
    maxBlockSize: "space",
    inlineSize: "space",
    minInlineSize: "space",
    maxInlineSize: "space",
    borderWidth: "borderWeights"
  }
});
const dark = createTheme("dark-theme", {
  colors,
  shadows: {
    xs: "-4px 0 15px rgb(0 0 0 / 50%)",
    sm: "0 5px 20px -5px rgba(20, 20, 20, 0.1)",
    md: "0 8px 30px rgba(20, 20, 20, 0.15)",
    lg: "0 30px 60px rgba(20, 20, 20, 0.15)",
    xl: "0 40px 80px rgba(20, 20, 20, 0.25)"
  }
});
globalCss({
  a: {
    focusRing: "auto"
  },
  body: {
    [`${dark.selector} &`]: {
      backgroundColor: "$dark700",
      color: "$dark50"
    },
    backgroundColor: "$white",
    color: "$black"
  }
});
globalCss({
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%",
    margin: 0
  },
  body: {
    margin: 0
  },
  "article, aside, footer, header, nav, section, figcaption, figure, main": {
    display: "block"
  },
  h1: {
    fontSize: "2em",
    margin: 0
  },
  hr: {
    boxSizing: "content-box",
    height: 0,
    overflow: "visible"
  },
  pre: {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  a: {
    background: "transparent",
    textDecorationSkip: "objects"
  },
  "a:active, a:hover": {
    outlineWidth: 0
  },
  "abbr[title]": {
    borderBottom: "none",
    textDecoration: "underline"
  },
  "b, strong": {
    fontWeight: "bolder"
  },
  "code, kbp, samp": {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  dfn: {
    fontStyle: "italic"
  },
  mark: {
    backgroundColor: "#ff0",
    color: "#000"
  },
  small: {
    fontSize: "80%"
  },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline"
  },
  sup: {
    top: "-0.5em"
  },
  sub: {
    bottom: "-0.25em"
  },
  "audio, video": {
    display: "inline-block"
  },
  "audio:not([controls])": {
    display: "none",
    height: 0
  },
  img: {
    borderStyle: "none",
    verticalAlign: "middle"
  },
  "svg:not(:root)": {
    overflow: "hidden"
  },
  "button, input, optgroup, select, textarea": {
    fontFamily: "sans-serif",
    fontSize: "100%",
    lineHeight: "1.15",
    margin: 0
  },
  "button, input": {
    overflow: "visible"
  },
  "button, select": {
    textTransform: "none"
  },
  "button, [type=reset], [type=submit]": {
    WebkitAppearance: "button"
  },
  "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner": {
    borderStyle: "none",
    padding: 0
  },
  "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring": {
    outline: "1px dotted ButtonText"
  },
  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal"
  },
  progress: {
    display: "inline-block",
    verticalAlign: "baseline"
  },
  textarea: {
    overflow: "auto"
  },
  "[type=checkbox], [type=radio]": {
    boxSizing: "border-box",
    padding: 0
  },
  "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button": {
    height: "auto"
  },
  "[type=search]": {
    appearance: "textfield",
    outlineOffset: "-2px"
  },
  "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration": {
    appearance: "none"
  },
  "::-webkit-file-upload-button": {
    appearance: "button",
    font: "inherit"
  },
  "details, menu": {
    display: "block"
  },
  summary: {
    display: "list-item"
  },
  canvas: {
    display: "inline-block"
  },
  template: {
    display: "none"
  },
  "[hidden]": {
    display: "none"
  }
});
const sizes = {
  xs: {
    height: 30,
    padding: "0px 14px"
  },
  sm: {
    height: 36,
    padding: "0px 18px"
  },
  md: {
    height: 42,
    padding: "0px 22px"
  },
  lg: {
    height: 50,
    padding: "0px 26px"
  },
  xl: {
    height: 60,
    padding: "0px 32px"
  },
  "compact-xs": {
    height: 22,
    padding: "0 7px"
  },
  "compact-sm": {
    height: 26,
    padding: "0 8px"
  },
  "compact-md": {
    height: 30,
    padding: "0 10px"
  },
  "compact-lg": {
    height: 34,
    padding: "0 12px"
  },
  "compact-xl": {
    height: 40,
    padding: "0 14px"
  }
};
const useStyles = createStyles((theme2, { color, compact, fullSize, gradient, radius: radius2, size: size2, variant: variant2 }) => {
  return {
    root: {
      focusRing: "auto",
      cursor: "pointer",
      position: "relative",
      boxSizing: "border-box",
      textDecoration: "none",
      outline: "none",
      userSelect: "none",
      appearance: "none",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: null,
      borderRadius: typeof radius2 === "number" ? radius2 : `$${radius2}`,
      height: typeof size2 === "number" ? `${size2}px` : sizes[compact ? `compact-${size2}` : size2].height,
      padding: typeof size2 === "number" ? `0px ${size2}px` : sizes[compact ? `compact-${size2}` : size2].padding,
      fontFamily: "$standard",
      fontWeight: "$semibold",
      fontSize: `$${size2}`,
      lineHeight: 1,
      flexGrow: 0,
      width: fullSize ? "100%" : "fit-content",
      "&:hover": {
        backgroundColor: variant2 === "gradient" ? null : theme2.fn.themeColor(color, 7),
        backgroundSize: variant2 === "gradient" ? "200%" : null
      },
      "&:active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        pointerEvents: "none",
        borderColor: "transparent",
        background: theme2.fn.themeColor("gray", 2),
        backgroundColor: theme2.fn.themeColor("gray", 2),
        color: theme2.fn.themeColor("gray", 5),
        cursor: "not-allowed",
        darkMode: {
          borderColor: "transparent",
          backgroundColor: theme2.fn.themeColor("dark", 4),
          color: theme2.fn.themeColor("dark", 6)
        }
      }
    },
    disabled: {
      pointerEvents: "none",
      borderColor: "transparent",
      background: theme2.fn.themeColor("gray", 2),
      backgroundColor: theme2.fn.themeColor("gray", 2),
      color: theme2.fn.themeColor("gray", 5),
      cursor: "not-allowed",
      darkMode: {
        backgroundColor: theme2.fn.themeColor("dark", 4),
        color: theme2.fn.themeColor("dark", 6)
      }
    },
    loading: {
      pointerEvents: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: -1,
        backgroundColor: "rgba(255, 255, 255, .5)",
        borderRadius: `$${radius2}`,
        cursor: "not-allowed"
      }
    },
    variants: {
      variation: vFunc(color, gradient),
      // Used to override the disable style when using anchor HTML element
      disabled: {
        true: {
          pointerEvents: "none",
          borderColor: "transparent",
          background: theme2.fn.themeColor("gray", 2),
          backgroundColor: theme2.fn.themeColor("gray", 2),
          color: theme2.fn.themeColor("gray", 5),
          cursor: "not-allowed",
          [`${dark.selector} &`]: {
            borderColor: "transparent",
            backgroundColor: theme2.fn.themeColor("dark", 4),
            color: theme2.fn.themeColor("dark", 6)
          }
        }
      }
    }
  };
});
const ButtonErrors = Object.freeze([
  {
    error: true,
    message: "If using the disabled prop, a loading cannot be set at the same time",
    solution: `
                If your component looks like this:
                
                &lt;Button disabled loading ...&gt; Button Text &lt;/Button&gt;
                         ^^^^^^^^ ^^^^^^^ - Try removing one of these
                `
  },
  {
    error: true,
    message: "If using the external prop, a href prop must be associated with it. If you have an href prop there must be content inside.",
    solution: `
                If your component looks like this:
                
                &lt;Button external ...&gt; Button Text &lt;/Button&gt;
                         ^^^^^^^^ - Try adding the href prop too
                `
  }
]);
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size: size2 = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("width", `${size2}px`, 0)}${add_attribute("height", `${size2}px`, 0)} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"${add_attribute("stroke", color, 0)}${add_attribute("class", className, 0)}><g fill="none" fill-rule="evenodd"><g transform="translate(2.5 2.5)" stroke-width="5"><circle stroke-opacity=".5" cx="16" cy="16" r="16"></circle><path d="M32 16c0-9.94-8.06-16-16-16"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg>`;
});
const Circle$1 = Circle;
const Bars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size: size2 = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg"${add_attribute("fill", color, 0)}${add_attribute("width", `${size2}px`, 0)}${add_attribute("class", className, 0)}><rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect></svg>`;
});
const Bars$1 = Bars;
const Dots = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size: size2 = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("width", `${size2}px`, 0)}${add_attribute("height", `${Number(size2) / 4}px`, 0)} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"${add_attribute("fill", color, 0)}${add_attribute("class", className, 0)}><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle></svg>`;
});
const Dots$1 = Dots;
const LOADER_SIZES = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58
};
const getCorrectShade = (color, dark2 = false) => {
  return theme.colors[dark2 ? `${color}400` : `${color}600`].value;
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "size", "color", "variant"]);
  let { use = [], element = void 0, class: className = "", size: size2 = "md", color = "blue", variant: variant2 = "circle" } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  const LOADERS = { bars: Bars$1, circle: Circle$1, dots: Dots$1 };
  const defaultLoader = variant2 in LOADERS ? variant2 : "circle";
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant2 !== void 0)
    $$bindings.variant(variant2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` ${validate_component(LOADERS[defaultLoader] || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        {
          color: color === "white" ? "white" : getCorrectShade(color)
        },
        { size: LOADER_SIZES[size2] },
        { class: className },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Loader$1 = Loader;
const css$1 = {
  code: ".ripple.svelte-3pkhve{display:block;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;border-radius:inherit;color:inherit;pointer-events:none;z-index:0;contain:strict}.ripple.svelte-3pkhve .animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;opacity:0;pointer-events:none;overflow:hidden;will-change:transform, opacity}.ripple.svelte-3pkhve .animation-enter{transition:none}.ripple.svelte-3pkhve .animation-in{transition:opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),\n			opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1)}.ripple.svelte-3pkhve .animation-out{transition:opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)}",
  map: null
};
const Ripple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { center = false } = $$props;
  let { circle = false } = $$props;
  let { color = "currentColor" } = $$props;
  let el;
  onDestroy(() => {
    {
      return;
    }
  });
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  if ($$props.circle === void 0 && $$bindings.circle && circle !== void 0)
    $$bindings.circle(circle);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$1);
  return `<div class="ripple svelte-3pkhve"${add_attribute("this", el, 0)}></div>`;
});
const Ripple$1 = Ripple;
const css = {
  code: ".uppercase.svelte-5xpm5q{text-transform:uppercase}.left-section.svelte-5xpm5q{margin-right:10px;display:flex;align-items:center;justify-content:center}.right-section.svelte-5xpm5q{margin-left:10px;display:flex;align-items:center;justify-content:center}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx2;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "variant",
    "color",
    "size",
    "radius",
    "gradient",
    "loaderPosition",
    "loaderProps",
    "href",
    "external",
    "disabled",
    "compact",
    "loading",
    "uppercase",
    "fullSize",
    "ripple"
  ]);
  let $$slots = compute_slots(slots);
  let { use = [], element = void 0, class: className = "", override = {}, variant: variant2 = "filled", color = "blue", size: size2 = "sm", radius: radius2 = "sm", gradient = { from: "indigo", to: "cyan", deg: 45 }, loaderPosition = "left", loaderProps = {
    size: "xs",
    color: "white",
    variant: "circle"
  }, href = null, external = false, disabled = false, compact = false, loading = false, uppercase = false, fullSize = false, ripple = false } = $$props;
  createEventForwarder(get_current_component());
  let observable = false;
  let err;
  if (disabled && loading) {
    observable = true;
    err = ButtonErrors[0];
  }
  if (external && typeof href !== "string" || href?.length < 1) {
    observable = true;
    err = ButtonErrors[1];
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.variant === void 0 && $$bindings.variant && variant2 !== void 0)
    $$bindings.variant(variant2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.radius === void 0 && $$bindings.radius && radius2 !== void 0)
    $$bindings.radius(radius2);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.loaderPosition === void 0 && $$bindings.loaderPosition && loaderPosition !== void 0)
    $$bindings.loaderPosition(loaderPosition);
  if ($$props.loaderProps === void 0 && $$bindings.loaderProps && loaderProps !== void 0)
    $$bindings.loaderProps(loaderProps);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.uppercase === void 0 && $$bindings.uppercase && uppercase !== void 0)
    $$bindings.uppercase(uppercase);
  if ($$props.fullSize === void 0 && $$bindings.fullSize && fullSize !== void 0)
    $$bindings.fullSize(fullSize);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  $$result.css.add(css);
  {
    if (observable)
      override = { display: "none" };
  }
  ({ cx: cx2, classes, getStyles } = useStyles(
    {
      color,
      compact,
      fullSize,
      gradient,
      radius: radius2,
      size: size2,
      variant: variant2
    },
    { name: "Button" }
  ));
  return `${validate_component(Error$2, "Error").$$render(
    $$result,
    {
      observable,
      component: "Button",
      code: err
    },
    {},
    {}
  )}  ${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(cx2(
          className,
          classes.root,
          getStyles({
            css: override,
            variation: variant2,
            disabled
          }),
          {
            [classes.disabled]: disabled,
            [classes.loading]: loading
          }
        ))
      },
      { role: "button" },
      { rel: "noreferrer noopener" },
      {
        target: escape_attribute_value(external ? "_blank" : "_self")
      },
      escape_object($$restProps),
      { tabindex: "0" }
    ],
    {
      classes: (compact ? "compact" : "") + " " + (uppercase ? "uppercase" : "") + " svelte-5xpm5q"
    }
  )}${add_attribute("this", element, 0)}>${loading && loaderPosition === "left" ? `<span class="left-section svelte-5xpm5q">${validate_component(Loader$1, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.leftIcon ? `<span class="left-section svelte-5xpm5q">${slots.leftIcon ? slots.leftIcon({}) : `X`}</span>` : ``}`} ${slots.default ? slots.default({}) : `Button`} ${ripple ? `${validate_component(Ripple$1, "Ripple").$$render($$result, { center: false, circle: false }, {}, {})}` : ``} ${loading && loaderPosition === "right" ? `<span class="right-section svelte-5xpm5q">${validate_component(Loader$1, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.rightIcon ? `<span class="right-section svelte-5xpm5q">${slots.rightIcon ? slots.rightIcon({}) : `X`}</span>` : ``}`}</a>` : `<button${spread(
    [
      {
        class: escape_attribute_value(cx2(className, classes.root, getStyles({ css: override, variation: variant2 }), {
          [classes.disabled]: disabled,
          [classes.loading]: loading
        }))
      },
      { disabled: disabled || null },
      escape_object($$restProps),
      { tabindex: "0" }
    ],
    {
      classes: (compact ? "compact" : "") + " " + (uppercase ? "uppercase" : "") + " svelte-5xpm5q"
    }
  )}${add_attribute("this", element, 0)}>${loading && loaderPosition === "left" ? `<span class="left-section svelte-5xpm5q">${validate_component(Loader$1, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.leftIcon ? `<span class="left-section svelte-5xpm5q">${slots.leftIcon ? slots.leftIcon({}) : `X`}</span>` : ``}`} ${slots.default ? slots.default({}) : `Button`} ${ripple ? `${validate_component(Ripple$1, "Ripple").$$render($$result, { center: false, circle: false }, {}, {})}` : ``} ${loading && loaderPosition === "right" ? `<span class="right-section svelte-5xpm5q">${validate_component(Loader$1, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.rightIcon ? `<span class="right-section svelte-5xpm5q">${slots.rightIcon ? slots.rightIcon({}) : `X`}</span>` : ``}`}</button>`}`;
});
const Button$1 = Button;

export { Button$1 as B, Error$2 as E, Loader$1 as L, createEventForwarder as a, useSvelteUIThemeContext as b, createStyles as c, dark as d, useSvelteUITheme as e, fns as f, globalCss as g, css$2 as h, keyframes as k, useActions as u, vFunc as v };
//# sourceMappingURL=Button-40a57e7a.js.map

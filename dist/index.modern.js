import e from"lodash";var t,n;!function(e){e.Setting="setting",e.Translation="translation",e.UI="ui",e.OrganizationSettingV3="ORGANIZATION_SETTINGS",e.TranslationSettingV3="TRANSLATION_SETTINGS",e.FeatureSettingV3="FEATURE_SETTINGS"}(t||(t={})),function(e){e.Setting="settings",e.Translation="translations",e.UI="ui",e.OrganizationSettingV3="ORGANIZATION_SETTINGS",e.TranslationSettingV3="TRANSLATION_SETTINGS",e.FeatureSettingV3="FEATURE_SETTINGS"}(n||(n={}));const a={[t.Setting]:{plural:n.Setting,label:"Setting",labelPlural:"Settings",order:1},[t.Translation]:{plural:n.Translation,label:"Translation",labelPlural:"Translations",order:2},[t.UI]:{plural:n.UI,label:"UI",labelPlural:"UI",order:3},[t.OrganizationSettingV3]:{plural:n.OrganizationSettingV3,label:"Organization",labelPlural:"Organization",order:1},[t.TranslationSettingV3]:{plural:n.TranslationSettingV3,label:"Translation",labelPlural:"Translations",order:2},[t.FeatureSettingV3]:{plural:n.FeatureSettingV3,label:"Feature",labelPlural:"Features",order:3}},{assign:l,mapValues:o}=e,s=(e={})=>(e=o(e,()=>!0),l({nested:!1,categorized:!1},e)),{each:r,setWith:i}=e,u=e=>{const t={};return r(e,(e,n)=>{i(t,n,e,Object)}),t},{each:c,get:g}=e,b=(e,t={},n=null)=>{const a=s(t),l=((e,t=null)=>{const n={};return c(e,(e,a)=>{if(t){const{key:n,value:l}=t(a,e);n&&(a=n),l&&(e=l)}n[a]=e}),n})(e,e=>{if(a.categorized){const t=g(n,e);t&&(e=`${t.category}.${e}`)}return{key:e}});return a.nested?u(l):l},{each:d,has:f}=e,p=(e,t={})=>{const n=s(t),l=((e,t=null)=>{const n={};return d(e,(e,a)=>{let l=f(e,"value")?e.value:e.default;if(t){const{key:n,value:o}=t(a,e);n&&(a=n),o&&(l=o)}n[a]=l}),n})(e,(e,t)=>({key:e=n.categorized?`${a[t.category].plural}.${e}`:e}));return n.nested?u(l):l},{assign:y,each:m,get:S,has:T,isObject:h,kebabCase:$,last:I,mapKeys:O,mapValues:v,merge:V,set:E,size:L,split:N,startCase:w,unset:k}=e,A=e=>"object"==typeof e&&"boolean"==typeof e.default?"switch":"input",C=(e,t,n=!1)=>{if(h(t)){if(!n&&!T(t,"default"))throw new Error(`Config "${e}" is missing a "default" value.`)}else t={default:t};return t},F=(e,t,n={})=>{if(delete(t=C(e,t)).key,t.docLink){const e=`Documentation on this feature can be found <a href="${t.docLink}">here</a>.`;t.hint=t.hint?e+`<br>${t.hint}`:e,delete t.docLink}return y({default:null,type:A(t),label:w(I(N(e,"."))),category:"setting"},t,n)},j=(t,n={},a)=>(t=O(t,(t,n)=>e.get(t,"key",n)),v(t,(e,t)=>(a&&a(t,e),F(t,e,n)))),z=(e,t,n)=>{V(e,((e,t,n)=>j(t,n,t=>{if(T(e,t))throw new Error(`Duplicate key: "${t}"`)}))(e,t,n))},R=(e,t)=>y({label:w(I(N(e,"."))),order:0,toggleable:!1,description:null,rootKey:null},t),G=async({getComponents:t,getConfigs:n,getLabel:a,getName:l,source:o})=>{const s=l?await l():o,r={name:s,label:a?await a():w(s)},i=t?await t():null;if(n){const e=j(await n()),t=((e,t={})=>{const n={};let a=!1;return m(e,e=>{if("object"==typeof e&&T(e,"component")){if(!T(n,e.component)){let a={};if(T(t,e.component)){const{getOptions:n}=t[e.component];a=n?n():t[e.component]}n[e.component]=R(e.component,a)}}else a=!0}),a&&L(n)&&(n.unsorted=R("unsorted",{order:999})),n})(e,i);V(r,{config:e,components:t})}else{const{components:t,configs:n}=(t=>{const n={},a=(e=>v(e,(e,t)=>{const{getOptions:n}=e;return R(t,n?n():null)}))(t);return m(t,(t,l)=>{const{getConfigs:o,getSettings:s,getTranslations:r,getUI:i}=t,u={component:l},c=((t,n)=>{const a={group:{path:"groups"},tab:{path:"tabs"}},l=(e,t=null)=>{const n={};return m(e,(e,a)=>{if(e=C(a,e),t){const{config:l,key:o}=t(a,e);n[o]=l}else n[a]=e}),n},o=(e,o,s,r=!0,i="group",u)=>(((e,l,o,s="group")=>{let r=a[s].path,i={};m(o,e=>{if("object"==typeof e&&e.group){const l=e.group;m(a,e=>{const a=S(t,[n,e.path,l]);if(a){E(i,[e.path,l],a),k(t,[n,e.path,l]);const o=S(t,[n,e.path],{});0===L(o)&&k(t,[n,e.path])}})}}),E(t,[n,r,e],y({label:l},i))})(e,o,s,i),l(s,(t,n)=>(n.group=n.group?`${e}.${n.group}`:e,u&&u(t,n),{key:r?`${e}.${t}`:t,config:n})));return{addNested:(e,t)=>l(t,(t,n)=>("object"==typeof n&&(n.visibleIf&&(n.visibleIf=`${e}.${n.visibleIf}`),n.longLabel=`${w(e)} ⇢ ${n.longLabel?n.longLabel:n.label?n.label:w(t)}`),{key:`${e}.${t}`,config:n})),addFeature:(t,n,a,l=!1,s=!0)=>{if(T(a,"enabled"))throw new Error(`Feature "${t}" should not contain a property named "enabled".`);return a=y({enabled:C("enabled",l)},a),o(t,n,a,s,"group",(n,a)=>{"enabled"!==n&&"object"==typeof a&&e.set(a,"visibleIf",`${t}.enabled`)})},addGroup:o,addTab:(e,t)=>{const n=$(e);return o(n,e,t,!1,"tab")},addField:(e,t)=>{let n={};const a=`${e}.isVisible`,l=w(e);if(n.isVisible={default:!0,label:"Visible",longLabel:`${l} ⇢ Visible`,styleClasses:"col-md-2"},n.required={default:!1,label:"Required",longLabel:`${l} ⇢ Required`,visibleIf:a,styleClasses:"col-md-2"},n.disabled={default:!1,label:"Disabled",longLabel:`${l} ⇢ Disabled`,visibleIf:a,styleClasses:"col-md-2"},n.readonly={default:!1,label:"Readonly",longLabel:`${l} ⇢ Readonly`,visibleIf:a,styleClasses:"col-md-2"},n.hasAutoFocus={default:!1,label:"Autofocus",longLabel:`${l} ⇢ Autofocus`,visibleIf:a,styleClasses:"col-md-2"},n.pattern={default:"",label:"Pattern",longLabel:`${l} ⇢ Pattern`,visibleIf:a,styleClasses:"col-md-12"},t){const e=(e,t)=>{if(T(n,e))throw new Error(`Field ${e} already exists!`);const o=F(e,t,{visibleIf:a,styleClasses:"col-md-12"});o.longLabel=`${l} ⇢ ${o.label}`,n[e]=o},o=(e,t)=>{V(n[e],C(e,t,!0))};t&&t({insert:e,modify:o})}return o(e,w(e),n,!0)}}})(a,l);o?z(n,o(c),u):(s&&z(n,s(c),y(u,{category:"setting"})),r&&z(n,r(c),y(u,{category:"translation"})),i&&z(n,i(c),y(u,{category:"ui"})))}),{configs:n,components:a}})(i);V(r,{configs:n,components:t})}return r};class P extends Error{constructor(e,t){super(`${t.message} ("${e}" source)`),this.name="SourceError"}}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U.apply(this,arguments)}const _=async(e,t)=>(await G(U({source:e},t))).configs;export{a as CATEGORIES,t as ConfigCategory,n as ConfigCategoryPlurals,P as SourceError,s as getTransformationOptions,G as parseSource,_ as parseSourceConfigs,b as transformResponse,p as transformToConfigValues,u as transformToNested};
//# sourceMappingURL=index.modern.js.map

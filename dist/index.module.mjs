import e from"lodash";var t,n,r;!function(e){e.Setting="setting",e.Translation="translation",e.UI="ui",e.OrganizationSettingV3="ORGANIZATION_SETTINGS",e.TranslationSettingV3="TRANSLATION_SETTINGS",e.FeatureSettingV3="FEATURE_SETTINGS"}(n||(n={})),function(e){e.Setting="settings",e.Translation="translations",e.UI="ui",e.OrganizationSettingV3="ORGANIZATION_SETTINGS",e.TranslationSettingV3="TRANSLATION_SETTINGS",e.FeatureSettingV3="FEATURE_SETTINGS"}(r||(r={}));var o=((t={})[n.Setting]={plural:r.Setting,label:"Setting",labelPlural:"Settings",order:1},t[n.Translation]={plural:r.Translation,label:"Translation",labelPlural:"Translations",order:2},t[n.UI]={plural:r.UI,label:"UI",labelPlural:"UI",order:3},t[n.OrganizationSettingV3]={plural:r.OrganizationSettingV3,label:"Organization",labelPlural:"Organization",order:1},t[n.TranslationSettingV3]={plural:r.TranslationSettingV3,label:"Translation",labelPlural:"Translations",order:2},t[n.FeatureSettingV3]={plural:r.FeatureSettingV3,label:"Feature",labelPlural:"Features",order:3},t),i=e.assign,a=e.mapValues,l=function(e){return void 0===e&&(e={}),e=a(e,function(){return!0}),i({nested:!1,categorized:!1},e)},u=e.each,c=e.setWith,s=function(e){var t={};return u(e,function(e,n){c(t,n,e,Object)}),t},f=e.each,d=e.get,p=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n=null);var r=l(t),o=function(e,t){void 0===t&&(t=null);var n={};return f(e,function(e,r){if(t){var o=t(r,e),i=o.key,a=o.value;i&&(r=i),a&&(e=a)}n[r]=e}),n}(e,function(e){if(r.categorized){var t=d(n,e);t&&(e=t.category+"."+e)}return{key:e}});return r.nested?s(o):o},g=e.each,b=e.has,v=function(e,t){void 0===t&&(t={});var n=l(t),r=function(e,t){void 0===t&&(t=null);var n={};return g(e,function(e,r){var o=b(e,"value")?e.value:e.default;if(t){var i=t(r,e),a=i.key,l=i.value;a&&(r=a),l&&(o=l)}n[r]=o}),n}(e,function(e,t){return{key:e=n.categorized?o[t.category].plural+"."+e:e}});return n.nested?s(r):r};function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function T(e,t,n){return T=S()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&m(o,n.prototype),o},T.apply(null,arguments)}function O(e){var t="function"==typeof Map?new Map:void 0;return O=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return T(e,arguments,h(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),m(n,e)},O(e)}var I=e.assign,P=e.each,j=e.get,V=e.has,E=e.isObject,L=e.kebabCase,N=e.last,w=e.mapKeys,F=e.mapValues,R=e.merge,k=e.set,_=e.size,A=e.split,C=e.startCase,z=e.unset,G=function(e){return"object"==typeof e&&"boolean"==typeof e.default?"switch":"input"},U=function(e,t,n){if(void 0===n&&(n=!1),E(t)){if(!n&&!V(t,"default"))throw new Error('Config "'+e+'" is missing a "default" value.')}else t={default:t};return t},x=function(e,t,n){if(void 0===n&&(n={}),delete(t=U(e,t)).key,t.docLink){var r='Documentation on this feature can be found <a href="'+t.docLink+'">here</a>.';t.hint=t.hint?r+"<br>"+t.hint:r,delete t.docLink}return I({default:null,type:G(t),label:C(N(A(e,"."))),category:"setting"},t,n)},D=function(t,n,r){return void 0===n&&(n={}),t=w(t,function(t,n){return e.get(t,"key",n)}),F(t,function(e,t){return r&&r(t,e),x(t,e,n)})},q=function(e,t,n){R(e,function(e,t,n){return D(t,n,function(t){if(V(e,t))throw new Error('Duplicate key: "'+t+'"')})}(e,t,n))},B=function(e,t){return I({label:C(N(A(e,"."))),order:0,toggleable:!1,description:null,rootKey:null},t)},K=function(t){var n=t.getComponents,r=t.getConfigs,o=t.getLabel,i=t.getName,a=t.source;try{var l=function(t){function i(o){function i(t){var n=function(){if(r)return Promise.resolve(r()).then(function(e){var n=D(e),r=function(e,t){void 0===t&&(t={});var n={},r=!1;return P(e,function(e){if("object"==typeof e&&V(e,"component")){if(!V(n,e.component)){var o={};if(V(t,e.component)){var i=t[e.component].getOptions;o=i?i():t[e.component]}n[e.component]=B(e.component,o)}}else r=!0}),r&&_(n)&&(n.unsorted=B("unsorted",{order:999})),n}(n,t);R(a,{config:n,components:r})});var n,o,i,l=(o={},i=function(e){return F(e,function(e,t){var n=e.getOptions;return B(t,n?n():null)})}(n=t),P(n,function(t,n){var r=t.getConfigs,a=t.getSettings,l=t.getTranslations,u=t.getUI,c={component:n},s=function(t,n){var r={group:{path:"groups"},tab:{path:"tabs"}},o=function(e,t){void 0===t&&(t=null);var n={};return P(e,function(e,r){if(e=U(r,e),t){var o=t(r,e);n[o.key]=o.config}else n[r]=e}),n},i=function(e,i,a,l,u,c){return void 0===l&&(l=!0),void 0===u&&(u="group"),function(e,o,i,a){void 0===a&&(a="group");var l=r[a].path,u={};P(i,function(e){if("object"==typeof e&&e.group){var o=e.group;P(r,function(e){var r=j(t,[n,e.path,o]);if(r){k(u,[e.path,o],r),z(t,[n,e.path,o]);var i=j(t,[n,e.path],{});0===_(i)&&z(t,[n,e.path])}})}}),k(t,[n,l,e],I({label:o},u))}(e,i,a,u),o(a,function(t,n){return n.group=n.group?e+"."+n.group:e,c&&c(t,n),{key:l?e+"."+t:t,config:n}})};return{addNested:function(e,t){return o(t,function(t,n){return"object"==typeof n&&(n.visibleIf&&(n.visibleIf=e+"."+n.visibleIf),n.longLabel=C(e)+" ⇢ "+(n.longLabel?n.longLabel:n.label?n.label:C(t))),{key:e+"."+t,config:n}})},addFeature:function(t,n,r,o,a){if(void 0===o&&(o=!1),void 0===a&&(a=!0),V(r,"enabled"))throw new Error('Feature "'+t+'" should not contain a property named "enabled".');return r=I({enabled:U("enabled",o)},r),i(t,n,r,a,"group",function(n,r){"enabled"!==n&&"object"==typeof r&&e.set(r,"visibleIf",t+".enabled")})},addGroup:i,addTab:function(e,t){var n=L(e);return i(n,e,t,!1,"tab")},addField:function(e,t){var n={},r=e+".isVisible",o=C(e);return n.isVisible={default:!0,label:"Visible",longLabel:o+" ⇢ Visible",styleClasses:"col-md-2"},n.required={default:!1,label:"Required",longLabel:o+" ⇢ Required",visibleIf:r,styleClasses:"col-md-2"},n.disabled={default:!1,label:"Disabled",longLabel:o+" ⇢ Disabled",visibleIf:r,styleClasses:"col-md-2"},n.readonly={default:!1,label:"Readonly",longLabel:o+" ⇢ Readonly",visibleIf:r,styleClasses:"col-md-2"},n.hasAutoFocus={default:!1,label:"Autofocus",longLabel:o+" ⇢ Autofocus",visibleIf:r,styleClasses:"col-md-2"},n.pattern={default:"",label:"Pattern",longLabel:o+" ⇢ Pattern",visibleIf:r,styleClasses:"col-md-12"},t&&t&&t({insert:function(e,t){if(V(n,e))throw new Error("Field "+e+" already exists!");var i=x(e,t,{visibleIf:r,styleClasses:"col-md-12"});i.longLabel=o+" ⇢ "+i.label,n[e]=i},modify:function(e,t){R(n[e],U(e,t,!0))}}),i(e,C(e),n,!0)}}}(i,n);r?q(o,r(s),c):(a&&q(o,a(s),I(c,{category:"setting"})),l&&q(o,l(s),I(c,{category:"translation"})),u&&q(o,u(s),I(c,{category:"ui"})))}),{configs:o,components:i});R(a,{configs:l.configs,components:l.components})}();return n&&n.then?n.then(function(){return a}):a}var a={name:t,label:o};return n?Promise.resolve(n()).then(i):i(null)}return o?Promise.resolve(o()).then(i):i(C(t))};return Promise.resolve(i?Promise.resolve(i()).then(l):l(a))}catch(e){return Promise.reject(e)}},M=/*#__PURE__*/function(e){var t,n;function r(t,n){var r;return(r=e.call(this,n.message+' ("'+t+'" source)')||this).name="SourceError",r}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,m(t,n),r}(/*#__PURE__*/O(Error)),Z=function(e,t){try{return Promise.resolve(K(y({source:e},t))).then(function(e){return e.configs})}catch(e){return Promise.reject(e)}};export{o as CATEGORIES,n as ConfigCategory,r as ConfigCategoryPlurals,M as SourceError,l as getTransformationOptions,K as parseSource,Z as parseSourceConfigs,p as transformResponse,v as transformToConfigValues,s as transformToNested};
//# sourceMappingURL=index.module.mjs.map

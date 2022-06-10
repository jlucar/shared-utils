import e,{size as t}from"lodash";var n=e.each,r=e.setWith,o=function(e){var t={};return n(e,function(e,n){r(t,n,e,Object)}),t},i=e.has,u=function(e){var t={};return function e(t,n,r){void 0===r&&(r=[]),Object.entries(n).forEach(function(n){var o=n[0],u=n[1];"object"!=typeof u||Array.isArray(u)||i(u,"default")?t[[].concat(r,[o]).join(".")]=u:e(t,u,[].concat(r,[o]))})}(t,e),t};function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function f(e,t,n){return f=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&s(o,n.prototype),o},f.apply(null,arguments)}function d(e){var t="function"==typeof Map?new Map:void 0;return d=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return f(e,arguments,a(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,e)},d(e)}var p=e.each,v=e.isBoolean,b=e.isObject,y=e.last,g=e.split,m=e.startsWith,h=e.trimEnd,w=function(e){var t={},n=function(e,t){void 0===t&&(t="");var n=function e(t,n){var r;if(!t||"object"!=typeof t)return[(r={},r[n]=t,r)];var o=n?Array.isArray(t)?n:n+".":"";return Object.keys(t).flatMap(function(n){return e(t[n],Array.isArray(t)?o+"["+n+"]":""+o+n)}).reduce(function(e,t){return l({},e,t)},[])}(e,t),r={};return p(n,function(e,t){var n=g(t,"."),o=y(n);m(o,"#")?"#value"===o&&(r[h(t,".#value")]=e):r[t]=e}),r}(e);return p(n,function(e,n){var r=e;b(e)&&(r=e["#value"]);var o={default:r};v(r)&&(o.type="switch"),t[n]=o}),t},O=e.assign,j=e.has,C=e.isBoolean,I=e.isObject,k=e.map,P=e.mapValues,A=e.merge,E=e.size,V=function(e,t,n){void 0===n&&(n=null);var r=null,o=E(n);if(1!==o)throw new Error('The "'+e+'" group must only have one parent key, '+o+" given.");var i=P(n,function(e,n){if(!r){var o={type:"switch",default:t};if(I(t)){if(!j(t,"default")||!C(t.default))throw new Error('A "default" boolean value must be supplied in the object');A(o,t)}e=O({enabled:o},e),r=n+".enabled"}return e}),u=B(e,i);return k(u,function(e,t){return t!==r&&(e.visibleIf=r),e}),u},R=e.has,F=e.map,_=e.mapKeys,x=function(e,t){void 0===t&&(t=null);var n={},r=e+".isVisible";return n.isVisible={type:"switch",label:"Visible",default:!0,group:e,styleClasses:"col-md-2"},n.required={type:"switch",label:"Required",default:!1,group:e,visibleIf:r,styleClasses:"col-md-2"},n.disabled={type:"switch",label:"Disabled",default:!1,group:e,visibleIf:r,styleClasses:"col-md-2"},n.readonly={type:"switch",label:"Readonly",default:!1,group:e,visibleIf:r,styleClasses:"col-md-2"},n.hasAutoFocus={type:"switch",label:"Autofocus",default:!1,group:e,visibleIf:r,styleClasses:"col-md-2"},n.pattern={type:"input",label:"Pattern",default:"",group:e,visibleIf:r,styleClasses:"col-md-12"},t&&(n=t(n),F(n,function(t,n){R(t,"group")||(t.group=e),"isVisible"===n||R(t,"visibleIf")||(t.visibleIf=r),R(t,"styleClasses")||(t.styleClasses="col-md-12")})),B(e,_(n,function(t,n){return e+"."+n}))},q=e.map,B=function(e,t){var n=u(t);return q(n,function(t){return t.group=e,t}),n},D=e.merge,L=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null);var o={configs:{}};return e&&(o.configs=e),t&&(o.category=t),n&&(o.section=n),r&&D(o,r),o},S=e.mapValues,T=e.merge,K=function(e,t){return S(e,function(e){return T(e,{subsection:t}),e})},M=e.assign,N=e.has,W=e.map,z=e.mapValues,G=e.setWith,U=function(e,t){return e.map(function(e){var n="string"==typeof e?e:e.key;if(N(t,n)){var r="object"==typeof e?e:{};return delete r.key,M({model:n},t[n],r)}return console.log(n+" is not a config!"),null}).filter(function(e){if(null!==e)return e})},H=function(e,t,n){var r={name:e,schema:[],model:{}};if(t){var o=function(e,t){return z(e,function(e,n){return{id:n,order:Number(n),label:e.label,fields:U(e.fields,t)}})}(t,n);r.schema=o,r.model=function(e){var t={};return W(e,function(e){W(e.fields,function(e){G(t,e.model,e.default,Object)})}),t}(o)}return r},J=e.assign,Q=e.each,X=e.get,Y=e.has,Z=e.isObject,$=e.kebabCase,ee=e.last,te=e.mapKeys,ne=e.mapValues,re=e.merge,oe=e.set,ie=e.split,ue=e.startCase,le=e.unset,ae=function(e){return"boolean"==typeof e.default?"switch":"input"},se=function(e,t,n){if(void 0===n&&(n=!1),Z(t)){if(!n&&!Y(t,"default"))throw new Error('Config "'+e+'" is missing a "default" value.')}else t={default:t};return t},ce=function(e,t,n){if(void 0===n&&(n={}),delete(t=se(e,t)).key,t.docLink){var r='Documentation on this feature can be found <a href="'+t.docLink+'">here</a>.';t.hint=t.hint?r+"<br>"+t.hint:r,delete t.docLink}return J({default:null,type:ae(t),label:ue(ee(ie(e,"."))),category:"setting"},t,n)},fe=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n=null),e=te(e,function(e,t){return e.key?e.key:t}),ne(e,function(e,r){return n&&n(r,e),ce(r,e,t)})},de=function(e,t,n){re(e,function(e,t,n){return fe(t,n,function(t){if(Y(e,t))throw new Error('Duplicate key: "'+t+'"')})}(e,t,n))},pe=function(e,t){return void 0===t&&(t=null),J({label:ue(ee(ie(e,"."))),order:0,toggleable:!1,description:null,rootKey:null},t)},ve=function(e){var n=e.getComponents,r=e.getConfigs,o=e.getLabel,i=e.getName,u=e.source;try{var l=function(e){var n=function(){if(r)return Promise.resolve(r()).then(function(n){var r=fe(n),o=function(e,n){void 0===n&&(n={});var r={},o=!1;return Q(e,function(e){if(Y(e,"component")){if(!Y(r,e.component)){var t={};if(Y(n,e.component)){var i=n[e.component].getOptions;t=i?i():n[e.component]}r[e.component]=pe(e.component,t)}}else o=!0}),o&&t(r)&&(r.unsorted=pe("unsorted",{order:999})),r}(r,e);re(s,{configs:r,components:o})});var n,o,i,u=(o={},i=function(e){return ne(e,function(e,t){var n=e.getOptions;return pe(t,n?n():null)})}(n=e),Q(n,function(e,n){var r=e.getConfigs,u=e.getSettings,l=e.getTranslations,a=e.getUI,s={component:n},c=function(e,n){var r={group:{path:"groups"},tab:{path:"tabs"}},o=function(e,t){void 0===t&&(t=null);var n={};return Q(e,function(e,r){if(e=se(r,e),t){var o=t(r,e);n[o.key]=o.config}else n[r]=e}),n},i=function(i,u,l,a,s,c){return void 0===a&&(a=!0),void 0===s&&(s="group"),void 0===c&&(c=null),function(o,i,u,l){void 0===l&&(l="group");var a=r[l].path,s={};Q(u,function(o){if(o.group){var i=o.group;Q(r,function(r){var o=X(e,[n,r.path,i]);if(o){oe(s,[r.path,i],o),le(e,[n,r.path,i]);var u=X(e,[n,r.path],{});0===t(u)&&le(e,[n,r.path])}})}}),oe(e,[n,a,o],J({label:i},s))}(i,u,l,s),o(l,function(e,t){return t.group=t.group?i+"."+t.group:i,c&&c(e,t),{key:a?i+"."+e:e,config:t}})};return{addNested:function(e,t){return o(t,function(t,n){return n.visibleIf&&(n.visibleIf=e+"."+n.visibleIf),{key:e+"."+t,config:n}})},addFeature:function(e,t,n,r,o){if(void 0===r&&(r=!1),void 0===o&&(o=!0),Y(n,"enabled"))throw new Error('Feature "'+e+'" should not contain a property named "enabled".');return n=J({enabled:se("enabled",r)},n),i(e,t,n,o,"group",function(t,n){"enabled"!==t&&(n.visibleIf=e+".enabled")})},addGroup:i,addTab:function(e,t){var n=$(e);return i(n,e,t,!1,"tab")},addField:function(e,t){void 0===t&&(t=null);var n={},r=e+".isVisible";return n.isVisible={default:!0,label:"Visible",styleClasses:"col-md-2"},n.required={default:!1,label:"Required",visibleIf:r,styleClasses:"col-md-2"},n.disabled={default:!1,label:"Disabled",visibleIf:r,styleClasses:"col-md-2"},n.readonly={default:!1,label:"Readonly",visibleIf:r,styleClasses:"col-md-2"},n.hasAutoFocus={default:!1,label:"Autofocus",visibleIf:r,styleClasses:"col-md-2"},n.pattern={default:"",label:"Pattern",visibleIf:r,styleClasses:"col-md-12"},t&&t({insert:function(e,t){if(Y(n,e))throw new Error("Field "+e+" already exists!");n[e]=ce(e,t,{visibleIf:r,styleClasses:"col-md-12"})},modify:function(e,t){re(n[e],se(e,t,!0))}}),i(e,ue(e),n,!0)}}}(i,n);r?de(o,r(c),s):(u&&de(o,u(c),J(s,{category:"setting"})),l&&de(o,l(c),J(s,{category:"translation"})),a&&de(o,a(c),J(s,{category:"ui"})))}),{configs:o,components:i});re(s,{configs:u.configs,components:u.components})}();return n&&n.then?n.then(function(){return s}):s},a=i?i():u,s={name:a,label:o?o():ue(a)};return Promise.resolve(n?Promise.resolve(n()).then(l):l(null))}catch(e){return Promise.reject(e)}},be=function(e,t){void 0===t&&(t=null),t=J({nested:!1},t);var n={};return Q(e,function(e,t){n[t]=e.default}),t.nested?o(n):n},ye=/*#__PURE__*/function(e){var t,n;function r(t,n){var r;return(r=e.call(this,n.message+' ("'+t+'" source)')||this).name="SourceError",r}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,s(t,n),r}(/*#__PURE__*/d(Error));export{ye as SourceError,o as convertToNested,u as createConfigs,w as createConfigsFromJson,V as createFeature,x as createField,B as createGroup,L as createSection,K as createSubSection,be as getMockResponse,H as parseOnboarder,ve as parseSource};
//# sourceMappingURL=index.module.mjs.map

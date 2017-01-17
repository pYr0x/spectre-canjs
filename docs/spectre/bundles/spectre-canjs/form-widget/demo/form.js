/*spectre-canjs@0.20.0#form-widget/field-components/file-field/file-field.stache!steal-stache@3.0.5#steal-stache*/
define("spectre-canjs@0.20.0#form-widget/field-components/file-field/file-field.stache!steal-stache@3.0.5#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.4#can-view-import","can-stache-bindings@3.0.6#can-stache-bindings"],function(e,t,a){var r=t([{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-group "]},{tokenType:"special",args:["#if errors[properties.name]"]},{tokenType:"attrValue",args:["has-danger"]},{tokenType:"special",args:["/if"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n\r\n\r\n    "]},{tokenType:"start",args:["ul",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["ul",!1]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu-item"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["input-group"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["label",!1]},{tokenType:"special",args:["#if properties.inline"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["hide"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"special",args:["/if"]},{tokenType:"attrStart",args:["for"]},{tokenType:"special",args:["properties.name"]},{tokenType:"attrEnd",args:["for"]},{tokenType:"end",args:["label",!1]},{tokenType:"special",args:["properties.alias"]},{tokenType:"close",args:["label"]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["input",!0]},{tokenType:"attrStart",args:["($change)"]},{tokenType:"attrValue",args:["onChange(%element)"]},{tokenType:"attrEnd",args:["($change)"]},{tokenType:"attrStart",args:["type"]},{tokenType:"attrValue",args:["file"]},{tokenType:"attrEnd",args:["type"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-control form-input"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["name"]},{tokenType:"special",args:["properties.name"]},{tokenType:"attrEnd",args:["name"]},{tokenType:"special",args:["#if properties.multiple"]},{tokenType:"attrStart",args:["multiple"]},{tokenType:"attrEnd",args:["multiple"]},{tokenType:"special",args:["/if"]},{tokenType:"end",args:["input",!0]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n\r\n            "]},{tokenType:"special",args:["#if errors[properties.name]"]},{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-input-hint"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["span",!1]},{tokenType:"special",args:[" errors[properties.name]"]},{tokenType:"close",args:["span"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["#if state.isPending"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu-item loading"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"special",args:["#if currentFiles.length"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"comment",args:[" menu header "]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu-header"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu-header-text"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["span",!1]},{tokenType:"chars",args:["\r\n            Current Files\r\n        "]},{tokenType:"close",args:["span"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["#each currentFiles"]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"comment",args:[" menu item "]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu-item clear"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"chars",args:["\r\n                    "]},{tokenType:"start",args:["a",!1]},{tokenType:"attrStart",args:["href"]},{tokenType:"special",args:["path"]},{tokenType:"attrEnd",args:["href"]},{tokenType:"attrStart",args:["target"]},{tokenType:"attrValue",args:["_blank"]},{tokenType:"attrEnd",args:["target"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["float-left"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["a",!1]},{tokenType:"chars",args:["\r\n                        "]},{tokenType:"start",args:["i",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["icon icon-link"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["i",!1]},{tokenType:"close",args:["i"]},{tokenType:"chars",args:[" "]},{tokenType:"special",args:["path"]},{tokenType:"chars",args:["\r\n                    "]},{tokenType:"close",args:["a"]},{tokenType:"chars",args:["\r\n                    "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["type"]},{tokenType:"attrValue",args:["button"]},{tokenType:"attrEnd",args:["type"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn ml-10 "]},{tokenType:"special",args:["#if removing"]},{tokenType:"attrValue",args:["loading"]},{tokenType:"special",args:["/if"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["removeFile(.)"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"end",args:["button",!1]},{tokenType:"start",args:["i",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["fa fa-trash"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["i",!1]},{tokenType:"close",args:["i"]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["/each"]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"close",args:["ul"]},{tokenType:"chars",args:["\r\n\r\n"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"done",args:[]}]);return function(t,s,n){var p={module:e};return s instanceof a.Options||(s=new a.Options(s||{})),r(t,s.add(p),n)}});
/*spectre-canjs@0.20.0#form-widget/field-components/file-field/file-field*/
define("spectre-canjs@0.20.0#form-widget/field-components/file-field/file-field",["exports","can-define/list/list","can-define/map/map","can-component","can-event","object-assign","can-util/js/dev/dev","./file-field.stache!","./file-field.less"],function(e,t,i,n,r,s,o,a){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var l=u(t),d=u(i),p=u(n),f=u(r),c=u(s),h=u(o),v=u(a),m=d["default"].extend({path:"string",removing:"boolean"}),g=e.ViewModel=d["default"].extend("FileField",{properties:d["default"],errors:{Value:d["default"]},value:{type:"string",value:""},currentFiles:{get:function(e){return e||(e=this.currentFiles=new l["default"](this.value.split(",").filter(function(e){return""!==e}).map(function(e){return new m({path:e,removing:!1})})),e.on("add",this.updateValue.bind(this)),e.on("remove",this.updateValue.bind(this))),e}},state:{value:{isResolved:!0}},progress:{type:"number",value:100},onChange:function(e){var t=this;e.files&&(!this.properties.multiple&&this.currentFiles.length?this.removeFile(this.currentFiles[0]).then(function(){t.uploadFiles(e.files)}):this.uploadFiles(e.files))},uploadFiles:function(e){var t=this;this.errors[this.properties.name]=null;for(var i=new FormData,n=0;n<e.length;n++)i.append(n,e.item(n));this.state=new Promise(function(e,n){var r=new XMLHttpRequest;r.open("POST",t.properties.url,!0),r.onload=function(){200===r.status?e(JSON.parse(r.responseText)):n(r)},r.onerror=n,r.send(i)}).then(this.uploadSuccess.bind(this))["catch"](this.uploadError.bind(this))},uploadSuccess:function(e){var t=this;"undefined"==typeof e.error?e.uploads.forEach(function(e){var i=new m({path:e,removing:!1});t.currentFiles.push(i)}):h["default"].warn("ERRORS: ",e.error)},updateValue:function(){this.currentFiles.length?this.value=this.currentFiles.map(function(e){return e.path}).join(","):this.value="",this.dispatch("fieldchange",[this.value])},uploadError:function(e,t,i){413===e.status&&(this.errors[this.properties.name]="The uploaded file is too large"),h["default"].warn("ERRORS: ",e,t,i)},removeFile:function(e){var t=this;return e.removing?!1:(e.removing=!0,this.state=new Promise(function(i,n){var r=new XMLHttpRequest;r.open("DELETE",t.properties.url,!0),r.onload=function(){200===r.status?i(JSON.parse(r.responseText)):n(r)},r.onerror=n,r.setRequestHeader("Content-type","application/json"),r.send(JSON.stringify({file:e.path}))}).then(this.removeSuccess.bind(this,e))["catch"](this.removeError.bind(this,e)),this.state)},removeSuccess:function(e){this.currentFiles.splice(this.currentFiles.indexOf(e),1),this.updateValue()},removeError:function(e,t){404===t.status&&this.removeSuccess(e,t),h["default"].warn("Error: ",t)}});c["default"](g.prototype,f["default"]),p["default"].extend({tag:"file-field",view:v["default"],ViewModel:g})});
/*spectre-canjs@0.20.0#form-widget/field-components/json-field/json-field.stache!steal-stache@3.0.5#steal-stache*/
define("spectre-canjs@0.20.0#form-widget/field-components/json-field/json-field.stache!steal-stache@3.0.5#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.4#can-view-import","can-stache-bindings@3.0.6#can-stache-bindings"],function(e,t,a){var r=t([{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-group"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n  "]},{tokenType:"start",args:["fieldset",!1]},{tokenType:"end",args:["fieldset",!1]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["legend",!1]},{tokenType:"end",args:["legend",!1]},{tokenType:"special",args:["properties.alias"]},{tokenType:"close",args:["legend"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["form-widget",!0]},{tokenType:"attrStart",args:["inline"]},{tokenType:"special",args:["properties.inline"]},{tokenType:"attrEnd",args:["inline"]},{tokenType:"attrStart",args:["{form-object}"]},{tokenType:"attrValue",args:["jsonFormObject"]},{tokenType:"attrEnd",args:["{form-object}"]},{tokenType:"attrStart",args:["(fieldchange)"]},{tokenType:"attrValue",args:["saveField"]},{tokenType:"attrEnd",args:["(fieldchange)"]},{tokenType:"attrStart",args:["{fields}"]},{tokenType:"attrValue",args:["formFields"]},{tokenType:"attrEnd",args:["{fields}"]},{tokenType:"attrStart",args:["show-buttons"]},{tokenType:"attrValue",args:["false"]},{tokenType:"attrEnd",args:["show-buttons"]},{tokenType:"end",args:["form-widget",!0]},{tokenType:"chars",args:["\r\n  "]},{tokenType:"close",args:["fieldset"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"done",args:[]}]);return function(t,n,s){var o={module:e};return n instanceof a.Options||(n=new a.Options(n||{})),r(t,n.add(o),s)}});
/*spectre-canjs@0.20.0#form-widget/field-components/json-field/json-field*/
define("spectre-canjs@0.20.0#form-widget/field-components/json-field/json-field",["exports","can-component","can-define/map/map","can-event","./json-field.stache!","../../../../util/field","can-util/js/assign/assign","can-util/js/dev/dev"],function(e,t,i,s,n,r,a,l){"use strict";function d(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var o=d(t),f=d(i),u=d(s),p=d(n),c=d(a),v=d(l),h=e.ViewModel=f["default"].extend("JSONField",{properties:f["default"],value:"string",errors:"*",jsonFormObject:{get:function(e){var t=this.properties.ObjectTemplate;try{e=this.value?JSON.parse(this.value):{}}catch(i){v["default"].warn(i)}return t?new t(e):(v["default"].warn("json-field needs an ObjectTemplate defined in its field properties"),e)}},formFields:{get:function(){return this.properties.fields&&this.properties.fields.length?r.parseFieldArray(this.properties.fields):r.mapToFields(this.properties.ObjectTemplate)}},saveField:function(e,t,i,s){s.current[s.name]=s.value;var n=JSON.stringify(s.current.serialize());this.value=n,this.dispatch("fieldchange",[n])}});c["default"](h.prototype,u["default"]),o["default"].extend({tag:"json-field",view:p["default"],ViewModel:h})});
/*spectre-canjs@0.20.0#form-widget/field-components/date-field/constants*/
define("spectre-canjs@0.20.0#form-widget/field-components/date-field/constants",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var l=(e.MONTH_OPTIONS=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}],e.YEAR_OPTIONS=[]),a=(new Date).getFullYear();a>=1900;a--)l.push({label:a,value:a})});
/*spectre-canjs@0.20.0#form-widget/field-components/date-field/date-field.stache!steal-stache@3.0.5#steal-stache*/
define("spectre-canjs@0.20.0#form-widget/field-components/date-field/date-field.stache!steal-stache@3.0.5#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.4#can-view-import","can-stache-bindings@3.0.6#can-stache-bindings"],function(e,t,a){var r=t([{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-group"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["label",!1]},{tokenType:"special",args:["#if properties.inline"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["hide"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"special",args:["/if"]},{tokenType:"attrStart",args:["for"]},{tokenType:"special",args:["properties.name"]},{tokenType:"attrEnd",args:["for"]},{tokenType:"end",args:["label",!1]},{tokenType:"special",args:["properties.alias"]},{tokenType:"close",args:["label"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["input-group"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"start",args:["select-field",!0]},{tokenType:"attrStart",args:["{(value)}"]},{tokenType:"attrValue",args:["day"]},{tokenType:"attrEnd",args:["{(value)}"]},{tokenType:"attrStart",args:["{properties}"]},{tokenType:"attrValue",args:["dayProperties"]},{tokenType:"attrEnd",args:["{properties}"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["float-left"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["(change)"]},{tokenType:"attrValue",args:["onChange"]},{tokenType:"attrEnd",args:["(change)"]},{tokenType:"end",args:["select-field",!0]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"start",args:["select-field",!0]},{tokenType:"attrStart",args:["{(value)}"]},{tokenType:"attrValue",args:["month"]},{tokenType:"attrEnd",args:["{(value)}"]},{tokenType:"attrStart",args:["{properties}"]},{tokenType:"attrValue",args:["monthProperties"]},{tokenType:"attrEnd",args:["{properties}"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["float-left"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["(change)"]},{tokenType:"attrValue",args:["onChange"]},{tokenType:"attrEnd",args:["(change)"]},{tokenType:"end",args:["select-field",!0]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"start",args:["select-field",!0]},{tokenType:"attrStart",args:["{(value)}"]},{tokenType:"attrValue",args:["year"]},{tokenType:"attrEnd",args:["{(value)}"]},{tokenType:"attrStart",args:["{properties}"]},{tokenType:"attrValue",args:["yearProperties"]},{tokenType:"attrEnd",args:["{properties}"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["float-left"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["(change)"]},{tokenType:"attrValue",args:["onChange"]},{tokenType:"attrEnd",args:["(change)"]},{tokenType:"end",args:["select-field",!0]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["clear"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"done",args:[]}]);return function(t,s,n){var o={module:e};return s instanceof a.Options||(s=new a.Options(s||{})),r(t,s.add(o),n)}});
/*spectre-canjs@0.20.0#form-widget/field-components/date-field/date-field*/
define("spectre-canjs@0.20.0#form-widget/field-components/date-field/date-field",["exports","can-define/map/map","can-component","can-event","object-assign","./constants","./date-field.stache!","../select-field/select-field","./date-field.less!"],function(e,t,a,n,i,o,l){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var s=r(t),d=r(a),u=r(n),f=r(i),h=r(l),c=e.ViewModel=s["default"].extend("DateField",{properties:s["default"],errors:"*",value:{type:"date",set:function(e){return this.isValidDate(e)?this.set({day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}):e=new Date,e},get:function(){var e=this.month+1+"/"+this.day+"/"+this.year;return this.isValidDate(e)?new Date(e):new Date}},day:{value:(new Date).getDate(),type:"number"},month:{value:(new Date).getMonth(),type:"number"},year:{type:"number",value:(new Date).getFullYear()},dayProperties:{get:function(){for(var e=[],t=1;t<=this.getDaysInMonth(this.value);t++)e.push({value:t,label:t});return{inline:!0,options:e,name:"day"}}},monthProperties:{value:{inline:!0,options:o.MONTH_OPTIONS,name:"month"}},yearProperties:{value:{inline:!0,options:o.YEAR_OPTIONS,name:"year"}},getDaysInMonth:function(e){var t=new Date(e.getYear(),e.getMonth()+1,0);return t.getDate()},onChange:function(){this.dispatch("fieldchange",[this.value])},isValidDate:function(e){return e?(e=new Date(e),!isNaN(e.getTime())):!1}});f["default"](c.prototype,u["default"]),d["default"].extend({tag:"date-field",view:h["default"],ViewModel:c})});
/*can-fixture@1.0.12#helpers/getid*/
define("can-fixture@1.0.12#helpers/getid",function(e,t,a){a.exports=function(e,t){var a=e.data.id;return void 0===a&&"number"==typeof e.data&&(a=e.data),void 0===a&&e.url.replace(/\/(\d+)(\/|$|\.)/g,function(e,t){a=t}),void 0===a&&(a=e.url.replace(/\/(\w+)(\/|$|\.)/g,function(e,t){"update"!==t&&(a=t)})),void 0===a&&(a=Math.round(1e3*Math.random())),a}});
/*can-fixture@1.0.12#helpers/legacyStore*/
define("can-fixture@1.0.12#helpers/legacyStore",function(t,e,a){var n=t("./getid"),r=t("can-set"),i=t("can-util/js/is-array-like/is-array-like"),o=t("can-util/js/each/each"),d=t("can-util/js/assign/assign");a.exports=function(t,e,a){var f,u,s,c=0,l=function(t){for(var e=0;e<f.length;e++)if(t==f[e].id)return f[e]},p={};if(i(t)&&"string"==typeof t[0]?(u=t,t=e,e=a,a=arguments[3]):"string"==typeof t&&(u=[t+"s",t],t=e,e=a,a=arguments[3]),"number"==typeof t)f=[],s=function(){f=[];for(var a=0;t>a;a++){var n=e(a,f);n.id||(n.id=a),c=Math.max(n.id+1,c+1)||f.length,f.push(n)}};else{a=e;var g=t;s=function(){f=g.slice(0)}}return d(p,{getListData:function(t){t=t||{};var e=f.slice(0);t.data=t.data||{},o((t.data.order||[]).slice(0).reverse(),function(t){var a=t.split(" ");e=e.sort(function(t,e){return"ASC"!==a[1].toUpperCase()?t[a[0]]<e[a[0]]?1:t[a[0]]===e[a[0]]?0:-1:t[a[0]]<e[a[0]]?-1:t[a[0]]===e[a[0]]?0:1})}),o((t.data.group||[]).slice(0).reverse(),function(t){var a=t.split(" ");e=e.sort(function(t,e){return t[a[0]]>e[a[0]]})});var n=parseInt(t.data.offset,10)||0,i=parseInt(t.data.limit,10)||f.length-n,d=0;for(var u in t.data)if(d=0,void 0!==t.data[u]&&(-1!==u.indexOf("Id")||-1!==u.indexOf("_id")))for(;d<e.length;)t.data[u]!=e[d][u]?e.splice(d,1):d++;if("function"==typeof a)for(d=0;d<e.length;)a(e[d],t)?d++:e.splice(d,1);else if("object"==typeof a)for(d=0;d<e.length;){var s=r.subset(e[d],t.data,a);s?d++:e.splice(d,1)}var c={count:e.length,data:e.slice(n,n+i)};return o(["limit","offset"],function(e){e in t.data&&(c[e]=t.data[e])}),c},getData:function(t,e){var a=l(n(t));return"undefined"==typeof a?e(404,"Requested resource not found"):void e(a)},updateData:function(t,e){var a=n(t),r=l(a);return"undefined"==typeof r?e(404,"Requested resource not found"):(d(r,t.data),void e({id:a},{location:t.url||"/"+n(t)}))},destroyData:function(t,e){var a=n(t),r=l(a);if("undefined"==typeof r)return e(404,"Requested resource not found");for(var i=0;i<f.length;i++)if(f[i].id==a){f.splice(i,1);break}return{}},createData:function(t,a){var n="function"==typeof e?e(f.length,f):{};d(n,t.data),n.id||(n.id=c++),f.push(n),a({id:n.id},{location:t.url+"/"+n.id})}}),s(),d({findAll:p.getListData,findOne:p.getData,create:p.createData,update:p.updateData,destroy:p.destroyData,getId:n,find:function(t){return l(n(t))},reset:s},p)}});
/*can-connect@1.2.0#helpers/clone-data*/
define("can-connect@1.2.0#helpers/clone-data",function(n,e,a){var s=n("can-util/js/is-array/is-array"),i=n("can-util/js/deep-assign/deep-assign");a.exports=function(n){return s(n)?n.slice(0):i({},n)}});
/*can-connect@1.2.0#data/memory-cache/memory-cache*/
define("can-connect@1.2.0#data/memory-cache/memory-cache",function(t,e,a){var s=t("can-connect/helpers/get-items"),n=t("can-connect"),i=t("can-connect/helpers/sorted-set-json"),r=t("can-set"),c=t("can-connect/helpers/overwrite"),o=t("can-connect/helpers/set-add"),u=t("can-connect/helpers/get-index-by-id"),h=t("can-util/js/assign/assign"),v=t("can-connect/helpers/clone-data");a.exports=n.behavior("data/memory-cache",function(t){var e={_sets:{},getSetData:function(){return this._sets},__getListData:function(t){var e=this.getSetData(),a=e[i(t)];return a?a.items:void 0},_instances:{},getInstance:function(t){return this._instances[t]},removeSet:function(t,e){var a=this.getSetData();delete a[t],e!==!0&&this.updateSets()},updateSets:function(){},updateInstance:function(t){var e=this.id(t);return e in this._instances?c(this._instances[e],t,this.idProp):this._instances[e]=t,this._instances[e]},updateSet:function(t,e,a){var s=a?i(a):t.setKey;if(a&&s!==t.setKey){var n=this.getSetData(),r=t.setKey;n[s]=t,t.setKey=s,t.set=h({},a),this.removeSet(r)}t.items=e;var c=this;e.forEach(function(t){c.updateInstance(t)})},addSet:function(t,e){var a=s(e),n=this.getSetData(),r=i(t);n[r]={setKey:r,items:a,set:h({},t)};var c=this;a.forEach(function(t){c.updateInstance(t)}),this.updateSets()},_eachSet:function(t){var e=this.getSetData(),a=this,s=function(e,s){return t.call(a,e,s,function(){return e.items})};for(var n in e){var i=e[n],r=s(i,n);if(void 0!==r)return r}},_getSets:function(){var t=[],e=this.getSetData();for(var a in e)t.push(e[a].set);return t},getSets:function(){return Promise.resolve(this._getSets())},clear:function(){this._instances={},this._sets={}},getListData:function(t){t=t||{};var e=this.getListDataSync(t);return e?Promise.resolve(e):Promise.reject({message:"no data",error:404})},getListDataSync:function(t){for(var e=this._getSets(),a=0;a<e.length;a++){var s=e[a];if(r.subset(t,s,this.algebra)){var n=this.__getListData(s),i=r.getSubset(t,s,n,this.algebra);return{data:i,count:n.length}}}},_getListData:function(t){return this.getListDataSync(t)},updateListData:function(t,e){e=e||{};var a=v(t),n=s(a),i=this.getSetData(),c=this;for(var o in i){var u=i[o],d=r.union(u.set,e,this.algebra);if(d){var f=h({},u.set);return this.getListData(f).then(function(t){c.updateSet(u,r.getUnion(f,e,s(t),n,c.algebra),d)})}}return this.addSet(e,a),Promise.resolve()},getData:function(t){var e=this.id(t),a=this.getInstance(e);return a?Promise.resolve(a):Promise.reject({message:"no data",error:404})},createData:function(t){var e=this,a=this.updateInstance(t);return this._eachSet(function(t,s,n){r.has(t.set,a,this.algebra)&&e.updateSet(t,o(e,t.set,n(),a,e.algebra),t.set)}),Promise.resolve(h({},a))},updateData:function(t){var e=this,a=this.updateInstance(t);return this._eachSet(function(t,s,n){var i=n(),c=u(e,a,i);r.subset(a,t.set,this.algebra)?-1===c?e.updateSet(t,o(e,t.set,n(),a,e.algebra)):(i.splice(c,1,a),e.updateSet(t,i)):-1!==c&&(i.splice(c,1),e.updateSet(t,i))}),Promise.resolve(h({},a))},destroyData:function(t){var e=this;this._eachSet(function(a,s,n){var i=n(),r=u(e,t,i);-1!==r&&(i.splice(r,1),e.updateSet(a,i))});var a=this.id(t);return delete this._instances[a],Promise.resolve(h({},t))}};return e})});
/*can-fixture@1.0.12#store*/
define("can-fixture@1.0.12#store",function(t,a,n){var e=t("can-set"),i=t("can-connect"),r=t("./helpers/legacyStore"),s=t("can-util/js/each/each"),c=t("can-util/js/assign/assign"),o=t("can-util/js/is-array-like/is-array-like"),u=t("can-connect/data/memory-cache/memory-cache"),h=function(t){for(var a in t)return a},d=function(t){return function(a,n){this.connection[t](a.data).then(function(t){n(t)},function(t){n(403,t)})}},f=function(t,a){return function(){var n=[],e=0;return s(t,function(t){n.push(JSON.parse(JSON.stringify(t))),e=Math.max(t[a]+1,e+1)||n.length}),{maxId:e,items:n}}},m=function(t,a,n){this.connection=t,this.makeItems=a,this.idProp=n,this.reset();for(var e in m.prototype)this[e]=this[e].bind(this)};c(m.prototype,{getListData:d("getListData"),getData:d("getData"),createData:function(t,a){var n=this.idProp;t.data[n]=++this.maxId,this.connection.createData(t.data).then(function(e){var i={};i[n]=t.data[n],a(i)},function(t){a(403,t)})},updateData:d("updateData"),destroyData:d("destroyData"),reset:function(t){t&&(this.makeItems=f(t,this.idProp));var a=this.makeItems();this.maxId=a.maxId,this.connection.addSet({},{data:a.items})},get:function(t){var a=this.connection.id(t);return this.connection.getInstance(a)},getList:function(t){return this.connection._getListData(t)}}),s({findAll:"getListData",findOne:"getData",create:"createData",update:"updateData",destroy:"destroyData"},function(t,a){m.prototype[a]=function(){return this[t].apply(this,arguments)}}),m.make=function(t,a,n){var s=!1;if((t instanceof e.Algebra||a instanceof e.Algebra||n instanceof e.Algebra)&&(s=!0),!s)return r.apply(this,arguments);var c,d;"number"==typeof t?(d=h(n.clauses.id||{})||"id",c=function(){for(var n=[],e=0,i=0;t>i;i++){var r=a(i,n);r[d]||(r[d]=i),e=Math.max(r[d]+1,e+1)||n.length,n.push(r)}return{maxId:e,items:n}}):o(t)&&(n=a,d=h(n.clauses.id||{})||"id",c=f(t,d));var p=i([u],{algebra:n,idProp:d});return new m(p,c,d)},n.exports=m});
/*can-fixture@1.0.12#core*/
define("can-fixture@1.0.12#core",function(t,e,r){var n=t("can-set"),a=t("can-util/js/string/string").sub,u=t("can-util/js/each/each"),i=t("can-util/js/assign/assign"),o=t("can-util/js/is-empty-object/is-empty-object");t("./store");var s=[];e.fixtures=s,e.add=function(t,r){if(r&&(r.getData||r.getListData)){var n=t,a=r,i=a.idProp,o=new RegExp("\\/\\{"+i+"\\}.*"),f=o.test(n),l=f?n.replace(o,""):n,c=f?n:n.trim()+"/{"+i+"}";r=void 0,t={},t["GET "+c]=a.getData,t["DELETE "+c]=a.destroyData,t["PUT "+c]=a.updateData,t["GET "+l]=a.getListData,t["POST "+l]=a.createData}if(void 0!==r){if("string"==typeof t){var d=t.match(/(GET|POST|PUT|DELETE|PATCH) (.+)/i);t=d?{url:d[2],type:d[1]}:{url:t}}var p=e.index(t,!0);if(p>-1&&s.splice(p,1),null==r)return;if("object"==typeof r){var v=r;r=function(){return v}}t.fixture=r,s.unshift(t)}else u(t,function(t,r){e.add(r,t)})};var f=e.add;f.on=!0,f.delay=10,e.callDynamicFixture=function(t,r,n){t.data=r.data;var a=JSON.stringify(t.data);e.log(""+t.type.toUpperCase()+" "+t.url+" "+a.substr(0,50)+" -> handler(req,res)");var u=function(){var r=e.extractResponse.apply(t,arguments);return n.apply(this,r)},i=function(){var e=r.fixture(t,u,t.headers,r);void 0!==e&&u(200,e)};return t.async?setTimeout(i,f.delay):(i(),null)},e.index=function(t,r){for(var n=0;n<s.length;n++)if(e.matches(t,s[n],r))return n;return-1},e.get=function(t){if(f.on){var r=e.index(t,!0);-1===r&&(r=e.index(t,!1));var n=r>=0?i({},s[r]):void 0;if(n){var u=n.fixture,o=e.dataFromUrl(n.url,t.url);if("string"==typeof n.fixture)o&&(u=a(u,o)),n.url=u,n.data=null,n.type="GET",n.error||(n.error=function(t,e,r){throw"fixtures.js Error "+e+" "+r});else{var l=i({},t.data||{});n.data=i(l,o)}}return n}},e.matches=function(t,r,a){return a?n.equal(t,r,{fixture:function(){return!0}}):n.subset(t,r,e.defaultCompare)};var l=function(t,e){return null==t&&o(e)?!0:null==e&&o(t)?!0:n.equal(t,e)},c=function(t,e){return null==t&&o(e)?!0:null==e&&o(t)?!0:n.subset(t,e)};e.defaultCompare={url:function(t,r){return!!e.dataFromUrl(r,t)},fixture:function(){return!0},xhr:function(){return!0},type:function(t,e){return e&&t?t.toLowerCase()===e.toLowerCase():e===t},method:function(t,e){return e&&t?t.toLowerCase()===e.toLowerCase():e===t},helpers:function(){return!0},headers:l,data:c};var d=/\{([^\}]+)\}/g;e.dataFromUrl=function(t,e){if(!t)return{};var r=[],n=t.replace(".","\\.").replace("?","\\?"),a=new RegExp(n.replace(d,function(t,e){return r.push(e),"([^/]+)"})+"$").exec(e),i={};return a?(a.shift(),u(r,function(t){i[t]=a.shift()}),i):null},e.extractResponse=function(t,e,r,n){return"number"!=typeof t&&(r=e,e=t,t=200),"string"==typeof r&&(n=r,r={}),[t,e,r,n]},e.log=function(){console.log("can-fixture: "+Array.prototype.slice.call(arguments).join(" "))}});
/*can-fixture@1.0.12#helpers/deparam*/
define("can-fixture@1.0.12#helpers/deparam",function(e,t,n){var r=e("can-util/js/each/each"),a=/^\d+$/,i=/([^\[\]]+)|(\[\])/g,c=/([^?#]*)(#.*)?$/,o=function(e){return decodeURIComponent(e.replace(/\+/g," "))};n.exports=function(e){var t,n,p={};return e&&c.test(e)&&(t=e.split("&"),r(t,function(e){var t=e.split("="),r=o(t.shift()),c=o(t.join("=")),f=p;if(r){t=r.match(i);for(var s=0,u=t.length-1;u>s;s++)f[t[s]]||(f[t[s]]=a.test(t[s+1])||"[]"===t[s+1]?[]:{}),f=f[t[s]];n=t.pop(),"[]"===n?f.push(c):f[n]=c}})),p}});
/*can-fixture@1.0.12#xhr*/
define("can-fixture@1.0.12#xhr",function(e,t,n){!function(t){function n(e,t){for(var n,s=e.__events[t]||[],r=0,o=s.length;o>r;r++)n=s[r],n.call(e)}var s=e("./core"),r=e("./helpers/deparam"),o=e("can-util/js/assign/assign"),a=e("can-util/js/each/each"),i=XMLHttpRequest,u="undefined"!=typeof t?t:window,d=["type","url","async","response","responseText","responseType","responseXML","responseURL","status","statusText","readyState"],h=["abort","error","load","loadend","loadstart","progress","readystatechange"];!function(){var e=new i;for(var t in e)0===t.indexOf("on")?-1===h.indexOf(t.substr(2))&&h.push(t.substr(2)):-1===d.indexOf(t)&&"function"!=typeof e[t]&&d.push(t)}(),u.XMLHttpRequest=function(){var e=this,t=new i;this._xhr=t,this._requestHeaders={},this.__events={},a(h,function(s){t["on"+s]=function(){return n(e,s),e["on"+s]?e["on"+s].apply(e,arguments):void 0}}),this.onload=null},u.XMLHttpRequest._XHR=i,o(XMLHttpRequest.prototype,{setRequestHeader:function(e,t){this._requestHeaders[e]=t},open:function(e,t,n){this.type=e,this.url=t,this.async=n===!1?!1:!0},getAllResponseHeaders:function(){return this._xhr.getAllResponseHeaders.apply(this._xhr,arguments)},addEventListener:function(e,t){var n=this.__events[e]=this.__events[e]||[];n.push(t)},removeEventListener:function(e,t){var n=this.__events[e]=this.__events[e]||[],s=n.indexOf(t);s>=0&&n.splice(s,1)},setDisableHeaderCheck:function(e){this._disableHeaderCheck=!!e},getResponseHeader:function(e){return this._xhr.getResponseHeader(e)},abort:function(){var e=this._xhr;return void 0!==this.timeoutId&&(clearTimeout(this.timeoutId),e.open(this.type,this.url,this.async===!1?!1:!0),e.send()),e.abort()},send:function(e){var t=this.type.toLowerCase()||"get",i={url:this.url,data:e,headers:this._requestHeaders,type:t,method:t,async:this.async,xhr:this};if((!i.data&&"get"===i.type||"delete"===i.type)&&(i.data=r(i.url.split("?")[1]),i.url=i.url.split("?")[0]),"string"==typeof i.data)try{i.data=JSON.parse(i.data)}catch(u){i.data=r(i.data)}var d=s.get(i),h=this;if(d&&"function"==typeof d.fixture)return void(this.timeoutId=s.callDynamicFixture(i,d,function(e,t,s,r){t="string"==typeof t?t:JSON.stringify(t),h._xhr={open:function(){},send:function(){},abort:function(){},getResponseHeader:function(){}},o(h,{readyState:4,status:e});var i=e>=200&&300>e||304===e;i?o(h,{statusText:r||"OK",responseText:t}):o(h,{statusText:r||"error",responseText:t}),h.getAllResponseHeaders=function(){var e=[];return a(s||{},function(t,n){Array.prototype.push.apply(e,[n,": ",t,"\r\n"])}),e.join("")},h.onreadystatechange&&h.onreadystatechange({target:h}),n(h,"progress"),h.onprogress&&h.onprogress(),n(h,"load"),h.onload&&h.onload(),n(h,"loadend"),h.onloadend&&h.onloadend()}));var p=function(){return h._xhr.open(h._xhr.type,h._xhr.url,h._xhr.async),h._requestHeaders&&Object.keys(h._requestHeaders).forEach(function(e){h._xhr.setRequestHeader(e,h._requestHeaders[e])}),h._xhr.send(e)};return d&&"number"==typeof d.fixture?(s.log(i.url+" -> delay "+d.fixture+"ms"),void(this.timeoutId=setTimeout(p,d.fixture))):(d&&(s.log(i.url+" -> "+d.url),o(h,d)),p())}}),a(d,function(e){Object.defineProperty(XMLHttpRequest.prototype,e,{get:function(){return this._xhr[e]},set:function(t){try{this._xhr[e]=t}catch(n){}}})})}(function(){return this}())});
/*can-fixture@1.0.12#fixture*/
define("can-fixture@1.0.12#fixture",function(e,r,t){var n=e("./core"),o=n.add,s=e("./store");e("./xhr");var a=e("can-util/js/assign/assign"),u=e("can-namespace"),i=function(){};a(o,{rand:function f(e,r,t){if("number"==typeof e)return"number"==typeof r?e+Math.floor(Math.random()*(r-e+1)):Math.floor(Math.random()*(e+1));var n=e.slice(0);void 0===r?(r=1,t=n.length):void 0===t&&(t=r);for(var o=[],s=r+Math.round(f(t-r)),a=0;s>a;a++){var u=f(n.length-1),i=n.splice(u,1)[0];o.push(i)}return o},xhr:function(e){return a({},{abort:i,getAllResponseHeaders:function(){return""},getResponseHeader:function(){return""},open:i,overrideMimeType:i,readyState:4,responseText:"",responseXML:null,send:i,setRequestHeader:i,status:200,statusText:"OK"},e)},store:s.make,fixtures:n.fixtures}),"undefined"!=typeof window&&"function"!=typeof e.resolve&&(window.fixture=o),t.exports=u.fixture=o});
/*spectre-canjs@0.20.0#form-widget/demo/form*/
define("spectre-canjs@0.20.0#form-widget/demo/form",["can-fixture","can-stache","can-define/map/map","spectre-canjs/form-widget/form-widget","spectre-canjs/form-widget/field-components/text-field/","spectre-canjs/form-widget/field-components/select-field/","spectre-canjs/form-widget/field-components/file-field/","spectre-canjs/form-widget/field-components/json-field/","spectre-canjs/form-widget/field-components/date-field/"],function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=n(e),i=n(t),o=n(l);a["default"].delay=2e3,a["default"]({method:"POST",url:"/upload"},function(e,t,l,n){return{uploads:["fake_upload_filename"]}}),a["default"]({method:"DELETE",url:"/upload"},function(){return{result:"Success"}});var d=o["default"].extend({field1:{type:"string",value:"test-value"},field2:"string",field3:"number",field4:"date",field5:"string",field6:"string"}),f=[{name:"field1",validate:function(e){return console.log(e),e.value.length<50?"This field must contain at least 50 characters":!1}},{value:"another value",name:"field2",alias:"A basic textarea field",type:"text",textarea:!0,placeholder:'Enter the text: "hello"',validate:function(e){return"hello"!==e.value?'This field must contain the text, "hello"':!1}},{value:1,name:"field3",alias:"A select dropdown",fieldType:"select",options:[{value:1,label:"Option 1"},{value:2,label:"Option 2"}]},{name:"field4",alias:"A date field",fieldType:"date",value:new Date("2010-10-11")},{name:"field5",alias:"A file field",multiple:!0,fieldType:"file",url:"/upload"},{name:"field6",alias:"A JSON Field",fieldType:"json",type:"string",value:"",ObjectTemplate:o["default"].extend({json_field_1:"string",json_field_2:{validate:function(e){return console.log(e),2!=e.value?"The value must be 2":void 0},value:2,fieldType:"select",options:[{value:1,label:"Option 1"},{value:2,label:"Option 2"}]},json_field_3:{type:"number",validate:function(e){return e.value<10?"Please enter a value greater than 10":void 0}}})}],s=i["default"].from("demo-html"),r=new o["default"]({formObject:new d,fields:f,onChange:function(){console.log(arguments)},onSubmit:function(){alert("Form submitted! See the console for details"),console.log("submitted data: ",this.formObject.serialize())},onCancel:function(){console.log("Form canceled!")},stringify:function(){return JSON.stringify(this.formObject.serialize())}}),u=s(r);document.body.appendChild(u)});
//# sourceMappingURL=form.js.map
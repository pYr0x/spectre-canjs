define("spectre-canjs@2.4.1#sp-toast/ViewModel",["exports","can-define/map/map"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(t);e.default=s.default.extend("ToastItem",{fade:{type:"boolean",default:!0},timer:{},autoHide:{type:"number",default:5e3,set:function(e){var t=this;return e&&(this.timer&&window.clearTimeout(this.timer),this.timer=setTimeout(function(){t.hide()},e)),e}},custom:{type:"boolean",default:!1},severity:{default:"info",type:function(e){var t=["primary","info","success","warning","error"];return t.indexOf(e)>-1?e:t[0]}},dismissable:{default:!0,type:"boolean"},iconClass:{type:"string",default:"icon icon-error_outline"},visible:{default:!0,type:"boolean"},body:{default:"",type:"string"},heading:{default:"",type:"string"},fadeTime:{type:"number",default:1e3},element:"*",hide:function(){var e=this;this.visible&&(this.visible=!1,this.fade?setTimeout(function(){e.dispatch("hide",[e])},this.fadeTime):this.dispatch("hide",[this]))}})}),define("spectre-canjs@2.4.1#sp-toast-container/ViewModel",["exports","can-define/map/map","can-define/list/list","../sp-toast/ViewModel"],function(e,t,s,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(t),i=n(s),r=n(a);e.default=o.default.extend("ToastContainer",{toasts:{Default:i.default.extend("ToastList",{"#":r.default})},addToast:function(e){var t=this;this.toasts.push(e),this.toasts[this.toasts.length-1].on("hide",function(e,s){t.removeToast(s)})},removeToast:function(e){var t=this.toasts.indexOf(e);this.toasts.splice(t,1)}})}),define("spectre-canjs@2.4.1#sp-toast-container/sp-toast-container.stache!steal-stache@4.1.0#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@4.0.2#can-view-import","can-stache-bindings@4.1.4#can-stache-bindings","spectre-canjs/sp-toast/sp-toast.stache"],function(e,t,s){var a=t("sp-toast-container/sp-toast-container.stache",[{tokenType:"start",args:["can-import",!0,1]},{tokenType:"attrStart",args:["from",1]},{tokenType:"attrValue",args:["spectre-canjs/sp-toast/sp-toast.stache",1]},{tokenType:"attrEnd",args:["from",1]},{tokenType:"attrStart",args:["value:to",1]},{tokenType:"attrValue",args:["scope.vars.toast",1]},{tokenType:"attrEnd",args:["value:to",1]},{tokenType:"end",args:["can-import",!0,1]},{tokenType:"chars",args:["\n",1]},{tokenType:"start",args:["div",!1,2]},{tokenType:"attrStart",args:["class",2]},{tokenType:"attrValue",args:["toasts",2]},{tokenType:"attrEnd",args:["class",2]},{tokenType:"end",args:["div",!1,2]},{tokenType:"chars",args:[" ",2]},{tokenType:"special",args:["#each(toasts)",2]},{tokenType:"chars",args:["\n        ",2]},{tokenType:"special",args:[">scope.vars.toast",3]},{tokenType:"chars",args:["\n    ",3]},{tokenType:"special",args:["/each",4]},{tokenType:"chars",args:["\n\n",4]},{tokenType:"close",args:["div",6]},{tokenType:"chars",args:["\n",6]},{tokenType:"done",args:[7]}]);return function(t,s,n){var o=Object.assign({module:e},s);return a(t,o,n)}}),define("spectre-canjs@2.4.1#sp-toast-container/sp-toast-container",["can-component","./ViewModel","./sp-toast-container.stache"],function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=a(e),o=a(t),i=a(s);n.default.extend({tag:"sp-toast-container",ViewModel:o.default,view:i.default})}),define("spectre-canjs@2.4.1#sp-toast/sp-toast",["exports","./sp-toast.stache","can-component","./ViewModel","./sp-toast.less"],function(e,t,s,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(t),i=n(s),r=n(a);i.default.extend({tag:"sp-toast",view:o.default,ViewModel:r.default}),e.default=r.default}),define("spectre-canjs@2.4.1#sp-toast-container/demo/toast",["can-define/map/map","can-stache","can-view-model","spectre-canjs/sp-toast-container/sp-toast-container","spectre-canjs/sp-toast/sp-toast","./styles.less"],function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=a(e),o=a(t),i=a(s),r=new n.default({heading:"Title Here",details:"Details",autoHide:5e3,severity:"info",dismissable:!0,add:function(){(0,i.default)("sp-toast-container").addToast({heading:this.heading,body:this.body,severity:this.severity,autoHide:this.autoHide,dismissable:this.dismissable})}}),c=o.default.from("demo-html");document.body.appendChild(c(r))});
//# sourceMappingURL=toast.js.map
// Compiled by ClojureScript 1.9.89 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
cljs.core.enable_console_print_BANG_.call(null);
frontend.core.app = cljs.core.PersistentArrayMap.EMPTY;
goog.net.XhrIo.send("/imgs",(function (event){
cljs.core.println.call(null,event);

var res = event.target.getResponseText();
var parsed = window.JSON.parse(res);
return cljs.core.println.call(null,parsed);
}));

//# sourceMappingURL=core.js.map
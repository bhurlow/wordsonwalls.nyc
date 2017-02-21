// Compiled by ClojureScript 1.9.293 {}
goog.provide('mirror.tools');
goog.require('cljs.core');
goog.require('goog.net.jsloader');
goog.require('goog.Uri');
goog.require('reagent.core');
goog.require('mirror.util');
goog.require('cljs.reader');
/**
 * returns an instrumented atom used to represent
 *   state
 */
mirror.tools.state_atom = (function mirror$tools$state_atom(data){
return reagent.core.atom.call(null,data);
});
mirror.tools.on_reload = (function mirror$tools$on_reload(path){
return cljs.core.println.call(null,"RELOADED > ",path);
});
mirror.tools.reload_js_file = (function mirror$tools$reload_js_file(path){
cljs.core.println.call(null,"attempting reload of",path);

goog.isProvided_ = (function (name){
return false;
});

var deferred = goog.net.jsloader.load(path);
deferred.addCallback(((function (deferred){
return (function (){
return mirror.tools.on_reload.call(null,path);
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (x){
return cljs.core.println.call(null,"module load error",x);
});})(deferred))
);
});
mirror.tools.handle_ss_cmd = (function mirror$tools$handle_ss_cmd(s){
var data = cljs.reader.read_string.call(null,s);
cljs.core.println.call(null,data);

var G__973 = (((cljs.core.first.call(null,data) instanceof cljs.core.Keyword))?cljs.core.first.call(null,data).fqn:null);
switch (G__973) {
case "reload":
return cljs.core.doall.call(null,cljs.core.map.call(null,mirror.tools.reload_js_file,cljs.core.second.call(null,data)));

break;
default:
return cljs.core.println.call(null,"dont know the",cljs.core.first.call(null,data),"cmd");

}
});
mirror.tools.ws_on_open = (function mirror$tools$ws_on_open(){
return cljs.core.println.call(null,"WS OPEN");
});
mirror.tools.ws_on_close = (function mirror$tools$ws_on_close(){
return cljs.core.println.call(null,"WS CLOSE!");
});
mirror.tools.ws_on_message = (function mirror$tools$ws_on_message(e){
cljs.core.println.call(null,"WS MESSAGE");

return mirror.tools.handle_ss_cmd.call(null,e.data);
});
mirror.tools.new_ws = (function mirror$tools$new_ws(){
return (new WebSocket([cljs.core.str("ws://"),cljs.core.str(window.location.host),cljs.core.str("/_ws")].join('')));
});
mirror.tools.init_ws = (function mirror$tools$init_ws(){
var ws = mirror.tools.new_ws.call(null);
(ws["onopen"] = mirror.tools.ws_on_open);

(ws["onclose"] = mirror.tools.ws_on_close);

return (ws["onmessage"] = mirror.tools.ws_on_message);
});
mirror.tools.setup_react = (function mirror$tools$setup_react(state,render_fn){
cljs.core.println.call(null,"frontend init");

var props = cljs.reader.read_string.call(null,__MIRROR_DATA__);
cljs.core.println.call(null,"initial props",props);

cljs.core.reset_BANG_.call(null,state,props);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_fn], null),document.getElementById("__mount"));
});
if(typeof mirror.tools.initialized !== 'undefined'){
} else {
mirror.tools.initialized = cljs.core.atom.call(null,false);
}
mirror.tools.inject = (function mirror$tools$inject(state,render_fn){
mirror.tools.setup_react.call(null,state,render_fn);

if(cljs.core.truth_(cljs.core.deref.call(null,mirror.tools.initialized))){
return null;
} else {
mirror.tools.init_ws.call(null);

return cljs.core.reset_BANG_.call(null,mirror.tools.initialized,true);
}
});

//# sourceMappingURL=tools.js.map
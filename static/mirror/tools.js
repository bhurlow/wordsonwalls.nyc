// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
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
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(data);
});
mirror.tools.on_reload = (function mirror$tools$on_reload(path){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["RELOADED > ",path], 0));
});
mirror.tools.reload_js_file = (function mirror$tools$reload_js_file(path){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["attempting reload of",path], 0));

goog.isProvided_ = (function (name){
return false;
});

var deferred = goog.net.jsloader.load(path);
deferred.addCallback(((function (deferred){
return (function (){
return mirror.tools.on_reload(path);
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (x){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["module load error",x], 0));
});})(deferred))
);
});
mirror.tools.handle_ss_cmd = (function mirror$tools$handle_ss_cmd(s){
var data = cljs.reader.read_string(s);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0));

var G__5596 = (((cljs.core.first(data) instanceof cljs.core.Keyword))?cljs.core.first(data).fqn:null);
switch (G__5596) {
case "reload":
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mirror.tools.reload_js_file,cljs.core.second(data)));

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dont know the",cljs.core.first(data),"cmd"], 0));

}
});
mirror.tools.ws_on_open = (function mirror$tools$ws_on_open(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["WS OPEN"], 0));
});
mirror.tools.ws_on_close = (function mirror$tools$ws_on_close(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["WS CLOSE!"], 0));
});
mirror.tools.ws_on_message = (function mirror$tools$ws_on_message(e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["WS MESSAGE"], 0));

return mirror.tools.handle_ss_cmd(e.data);
});
mirror.tools.new_ws = (function mirror$tools$new_ws(){
return (new WebSocket([cljs.core.str("ws://"),cljs.core.str(window.location.host),cljs.core.str("/_ws")].join('')));
});
mirror.tools.init_ws = (function mirror$tools$init_ws(){
var ws = mirror.tools.new_ws();
(ws["onopen"] = mirror.tools.ws_on_open);

(ws["onclose"] = mirror.tools.ws_on_close);

return (ws["onmessage"] = mirror.tools.ws_on_message);
});
mirror.tools.setup_react = (function mirror$tools$setup_react(state,render_fn){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["frontend init"], 0));

var props = cljs.reader.read_string(__MIRROR_DATA__);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["initial props",props], 0));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,props) : cljs.core.reset_BANG_.call(null,state,props));

var G__5600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_fn], null);
var G__5601 = document.getElementById("__mount");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__5600,G__5601) : reagent.core.render_component.call(null,G__5600,G__5601));
});
if(typeof mirror.tools.initialized !== 'undefined'){
} else {
mirror.tools.initialized = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
}
mirror.tools.inject = (function mirror$tools$inject(state,render_fn){
mirror.tools.setup_react(state,render_fn);

if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mirror.tools.initialized) : cljs.core.deref.call(null,mirror.tools.initialized)))){
return null;
} else {
mirror.tools.init_ws();

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mirror.tools.initialized,true) : cljs.core.reset_BANG_.call(null,mirror.tools.initialized,true));
}
});

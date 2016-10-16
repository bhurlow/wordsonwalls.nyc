// Compiled by ClojureScript 1.9.198 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('om.dom');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
frontend.core.reload_all = (function frontend$core$reload_all(){
return frontend.core.require.call(null,new cljs.core.Symbol(null,"frontend.core","frontend.core",1294659180,null),new cljs.core.Keyword(null,"reload","reload",863702807));
});
frontend.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"loading...",new cljs.core.Keyword(null,"hash","hash",-13781596),"#",new cljs.core.Keyword(null,"s3-keys","s3-keys",138598102),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selected-image","selected-image",821836981),null], null));
frontend.core.fetch_images = (function frontend$core$fetch_images(cb){
return goog.net.XhrIo.send("/imgs",(function (event){
cljs.core.println.call(null,event);

var res = event.target.getResponseText();
var parsed = window.JSON.parse(res);
return cb.call(null,parsed);
}));
});
frontend.core.make_s3_url = (function frontend$core$make_s3_url(k){
return [cljs.core.str("/s3image/"),cljs.core.str(encodeURIComponent(k))].join('');
});
frontend.core.cycle_image = (function frontend$core$cycle_image(){
cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),"loading...");

cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true);

return cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-image","selected-image",821836981)], null),(function (){
return cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"s3-keys","s3-keys",138598102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.core.app_state)));
}));
});
frontend.core.format_title = (function frontend$core$format_title(k){
return [cljs.core.str(cljs.core.first.call(null,clojure.string.split.call(null,k,/\./)))].join('');
});
frontend.core.bg_style = (function frontend$core$bg_style(){
return "bg-black pa2";
});
frontend.core.render_image = (function frontend$core$render_image(data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected-image","selected-image",821836981).cljs$core$IFn$_invoke$arity$1(data))){
cljs.core.println.call(null,"making seslected image url");

cljs.core.println.call(null,frontend.core.make_s3_url.call(null,new cljs.core.Keyword(null,"selected-image","selected-image",821836981).cljs$core$IFn$_invoke$arity$1(data)));

return React.DOM.div(({"class": "img-box"}),om.util.force_children.call(null,React.DOM.img(({"src": frontend.core.make_s3_url.call(null,new cljs.core.Keyword(null,"selected-image","selected-image",821836981).cljs$core$IFn$_invoke$arity$1(data)), "width": (500), "onLoad": (function (){
cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),frontend.core.format_title.call(null,new cljs.core.Keyword(null,"selected-image","selected-image",821836981).cljs$core$IFn$_invoke$arity$1(data)));

return cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);
})()
, "height": (500)}),om.util.force_children.call(null,null))));
} else {
return null;
}
});
frontend.core.render_main = (function frontend$core$render_main(data){
var G__18670 = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core._EQ_.call(null,"#",G__18670)){
if((new cljs.core.Keyword(null,"selected-image","selected-image",821836981).cljs$core$IFn$_invoke$arity$1(data) == null)){
return React.DOM.img(({"className": "w-60 center db pointer", "src": "/img/crystal_ball.jpeg"}),om.util.force_children.call(null,null));
} else {
return frontend.core.render_image.call(null,data);
}
} else {
if(cljs.core._EQ_.call(null,"#about",G__18670)){
return React.DOM.h1(null,om.util.force_children.call(null,"ABOUT PAGE"));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),G__18670)){
return React.DOM.p(null,om.util.force_children.call(null,"nope"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(data))].join('')));

}
}
}
});
frontend.core.root_component = (function frontend$core$root_component(data,owner){
if(typeof frontend.core.t_frontend$core18674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
frontend.core.t_frontend$core18674 = (function (root_component,data,owner,meta18675){
this.root_component = root_component;
this.data = data;
this.owner = owner;
this.meta18675 = meta18675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
frontend.core.t_frontend$core18674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18676,meta18675__$1){
var self__ = this;
var _18676__$1 = this;
return (new frontend.core.t_frontend$core18674(self__.root_component,self__.data,self__.owner,meta18675__$1));
});

frontend.core.t_frontend$core18674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18676){
var self__ = this;
var _18676__$1 = this;
return self__.meta18675;
});

frontend.core.t_frontend$core18674.prototype.om$core$IRender$ = true;

frontend.core.t_frontend$core18674.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(({"className": "frame mw6 center"}),om.util.force_children.call(null,React.DOM.a(({"href": "#"}),om.util.force_children.call(null,React.DOM.h1(({"className": "bg-black pl2 pt2 pb2 pr2 tc"}),om.util.force_children.call(null,"WORDSONWALLS.nyc"))))),om.util.force_children.call(null,frontend.core.render_main.call(null,self__.data)),om.util.force_children.call(null,React.DOM.h3(({"className": "bg-black pl2 pt2 pb2 pr2 tc"}),om.util.force_children.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)))),om.util.force_children.call(null,React.DOM.footer(({"className": [cljs.core.str("fixed bottom-1 w6 "),cljs.core.str(frontend.core.bg_style.call(null))].join('')}),om.util.force_children.call(null,React.DOM.div(({"className": "w-100"}),om.util.force_children.call(null,React.DOM.p(({"className": ""}),om.util.force_children.call(null,React.DOM.a(({"href": "#about", "className": "white"}),om.util.force_children.call(null,"about wordsonwalls"))))),om.util.force_children.call(null,React.DOM.p(({"className": "f7"}),om.util.force_children.call(null,"made by: Ken, Marcus, Brian"))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,"v0.3"))))))));
});

frontend.core.t_frontend$core18674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root-component","root-component",-166494948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta18675","meta18675",33505220,null)], null);
});

frontend.core.t_frontend$core18674.cljs$lang$type = true;

frontend.core.t_frontend$core18674.cljs$lang$ctorStr = "frontend.core/t_frontend$core18674";

frontend.core.t_frontend$core18674.cljs$lang$ctorPrWriter = (function (this__14992__auto__,writer__14993__auto__,opt__14994__auto__){
return cljs.core._write.call(null,writer__14993__auto__,"frontend.core/t_frontend$core18674");
});

frontend.core.__GT_t_frontend$core18674 = (function frontend$core$root_component_$___GT_t_frontend$core18674(root_component__$1,data__$1,owner__$1,meta18675){
return (new frontend.core.t_frontend$core18674(root_component__$1,data__$1,owner__$1,meta18675));
});

}

return (new frontend.core.t_frontend$core18674(frontend$core$root_component,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,frontend.core.root_component,frontend.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("world")], null));
frontend.core.init_images = (function frontend$core$init_images(){
return null;
});
frontend.core.fetch_images.call(null,(function (images){
cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"s3-keys","s3-keys",138598102),cljs.core.js__GT_clj.call(null,images,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));

cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),"Fortunes from the Streets to You");

return (window["onclick"] = frontend.core.cycle_image);
}));
frontend.core.get_hash = (function frontend$core$get_hash(){
var hash = ((window["location"])["hash"]);
if(cljs.core.empty_QMARK_.call(null,hash)){
return "#";
} else {
return hash;
}
});
frontend.core.on_location_change = (function frontend$core$on_location_change(e){
cljs.core.println.call(null,"setting location",frontend.core.get_hash.call(null));

return cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"hash","hash",-13781596),frontend.core.get_hash.call(null));
});
frontend.core.init_location = (function frontend$core$init_location(){
(window["onhashchange"] = frontend.core.on_location_change);

return cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"hash","hash",-13781596),frontend.core.get_hash.call(null));
});
frontend.core.init = (function frontend$core$init(){
frontend.core.init_location.call(null);

return cljs.core.println.call(null,"fetching image keys");
});
frontend.core.init.call(null);

//# sourceMappingURL=core.js.map
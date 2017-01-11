// Compiled by ClojureScript 1.9.293 {}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mirror.tools');
goog.require('goog.net.XhrIo');
cljs.core.enable_console_print_BANG_.call(null);
pages.index.initial_state = (function pages$index$initial_state(){
return null;
});
pages.index.state = mirror.tools.state_atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible-img","visible-img",697721342),(0),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.PersistentVector.EMPTY], null));
pages.index.fetch_images = (function pages$index$fetch_images(cb){
return goog.net.XhrIo.send("/imgs",(function (event){
cljs.core.println.call(null,event);

var res = event.target.getResponseText();
var parsed = window.JSON.parse(res);
return cb.call(null,parsed);
}));
});
pages.index.make_url = (function pages$index$make_url(name){
return [cljs.core.str("http://wordsonwalls.nyc.s3.amazonaws.com/processed/"),cljs.core.str(name)].join('');
});
if(typeof pages.index.timer !== 'undefined'){
} else {
pages.index.timer = cljs.core.atom.call(null,null);
}
pages.index.inc_visible_img = (function pages$index$inc_visible_img(){
return cljs.core.swap_BANG_.call(null,pages.index.state,cljs.core.update,new cljs.core.Keyword(null,"visible-img","visible-img",697721342),(function (x){
cljs.core.println.call(null,"visible image",x);

return cljs.core.mod.call(null,(x + (1)),(5));
}));
});
pages.index.trigger_anim = (function pages$index$trigger_anim(){
if(cljs.core.truth_(cljs.core.deref.call(null,pages.index.timer))){
clearInterval(cljs.core.deref.call(null,pages.index.timer));

return cljs.core.reset_BANG_.call(null,pages.index.timer,null);
} else {
return cljs.core.reset_BANG_.call(null,pages.index.timer,setInterval((function (){
cljs.core.println.call(null,"INCREMENTING VISIBLE");

return pages.index.inc_visible_img.call(null);
}),(200)));
}
});
pages.index.image_animation = (function pages$index$image_animation(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),pages.index.trigger_anim], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"IMAGE ANUM"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)))?cljs.core.doall.call(null,(function (){var iter__9040__auto__ = (function pages$index$image_animation_$_iter__1246(s__1247){
return (new cljs.core.LazySeq(null,(function (){
var s__1247__$1 = s__1247;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__1247__$1);
if(temp__4657__auto__){
var s__1247__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1247__$2)){
var c__9038__auto__ = cljs.core.chunk_first.call(null,s__1247__$2);
var size__9039__auto__ = cljs.core.count.call(null,c__9038__auto__);
var b__1249 = cljs.core.chunk_buffer.call(null,size__9039__auto__);
if((function (){var i__1248 = (0);
while(true){
if((i__1248 < size__9039__auto__)){
var x = cljs.core._nth.call(null,c__9038__auto__,i__1248);
cljs.core.chunk_append.call(null,b__1249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),pages.index.make_url.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)),x)),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.not_EQ_.call(null,x,new cljs.core.Keyword(null,"visible-img","visible-img",697721342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null):null),new cljs.core.Keyword(null,"key","key",-1516042587),x], null)], null));

var G__1250 = (i__1248 + (1));
i__1248 = G__1250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1249),pages$index$image_animation_$_iter__1246.call(null,cljs.core.chunk_rest.call(null,s__1247__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1249),null);
}
} else {
var x = cljs.core.first.call(null,s__1247__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),pages.index.make_url.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)),x)),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.not_EQ_.call(null,x,new cljs.core.Keyword(null,"visible-img","visible-img",697721342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null):null),new cljs.core.Keyword(null,"key","key",-1516042587),x], null)], null),pages$index$image_animation_$_iter__1246.call(null,cljs.core.rest.call(null,s__1247__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9040__auto__.call(null,cljs.core.range.call(null,(10)));
})()):null)], null);
});
pages.index.render = (function pages$index$render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w6.center.green","div.w6.center.green",1325377124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,pages.index.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.rand.call(null,(100))], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"WORDS ON WALLS!"], null),pages.index.image_animation.call(null)], null)], null);
});
mirror.tools.inject.call(null,pages.index.state,new cljs.core.Var(function(){return pages.index.render;},new cljs.core.Symbol("pages.index","render","pages.index/render",-1834771087,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"pages.index","pages.index",-1346419101,null),new cljs.core.Symbol(null,"render","render",232498073,null),"pages/index.cljc",13,1,67,67,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(pages.index.render)?pages.index.render.cljs$lang$test:null)])));

//# sourceMappingURL=index.js.map
// Compiled by ClojureScript 1.9.293 {}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mirror.tools');
goog.require('goog.net.XhrIo');
cljs.core.enable_console_print_BANG_.call(null);
pages.index.style__GT_string = (function pages$index$style__GT_string(style_map){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.map.call(null,(function (pair){
return [cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,pair))),cljs.core.str(": "),cljs.core.str(cljs.core.second.call(null,pair)),cljs.core.str(";")].join('');
}),style_map)));
});
pages.index.style = (function pages$index$style(m){
return m;
});
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

return cljs.core.mod.call(null,(x + (1)),(10));
}));
});
pages.index.stop_and_clean_anim = (function pages$index$stop_and_clean_anim(){
clearInterval(cljs.core.deref.call(null,pages.index.timer));

return cljs.core.reset_BANG_.call(null,pages.index.timer,null);
});
pages.index.FORTUNE_TIMEOUT = (30000);
pages.index.save_fortune_state = (function pages$index$save_fortune_state(name){
localStorage.setItem("fortune",name);

return localStorage.setItem("fortune_time",(pages.index.FORTUNE_TIMEOUT + Date.now()));
});
pages.index.select_fortune = (function pages$index$select_fortune(){
cljs.core.swap_BANG_.call(null,pages.index.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535),cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state))));

return pages.index.save_fortune_state.call(null,new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)));
});
pages.index.play_card_sound = (function pages$index$play_card_sound(){
var audio = document.querySelector("audio");
cljs.core.println.call(null,audio);

return audio.play();
});
pages.index.trigger_anim = (function pages$index$trigger_anim(){
pages.index.play_card_sound.call(null);

if(cljs.core.truth_(cljs.core.deref.call(null,pages.index.timer))){
return pages.index.stop_and_clean_anim.call(null);
} else {
return cljs.core.reset_BANG_.call(null,pages.index.timer,setInterval((function (){
cljs.core.println.call(null,"INCREMENTING VISIBLE");

pages.index.inc_visible_img.call(null);

cljs.core.println.call(null,"inside interval",new cljs.core.Keyword(null,"visible-img","visible-img",697721342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)));

if((new cljs.core.Keyword(null,"visible-img","visible-img",697721342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)) >= (9))){
pages.index.stop_and_clean_anim.call(null);

return pages.index.select_fortune.call(null);
} else {
return null;
}
}),(100)));
}
});
pages.index.image_animation = (function pages$index$image_animation(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((function (){var and__8673__auto__ = new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state));
if(cljs.core.truth_(and__8673__auto__)){
return (new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)) == null);
} else {
return and__8673__auto__;
}
})())?cljs.core.doall.call(null,(function (){var iter__9040__auto__ = (function pages$index$image_animation_$_iter__2153(s__2154){
return (new cljs.core.LazySeq(null,(function (){
var s__2154__$1 = s__2154;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__2154__$1);
if(temp__4657__auto__){
var s__2154__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2154__$2)){
var c__9038__auto__ = cljs.core.chunk_first.call(null,s__2154__$2);
var size__9039__auto__ = cljs.core.count.call(null,c__9038__auto__);
var b__2156 = cljs.core.chunk_buffer.call(null,size__9039__auto__);
if((function (){var i__2155 = (0);
while(true){
if((i__2155 < size__9039__auto__)){
var x = cljs.core._nth.call(null,c__9038__auto__,i__2155);
cljs.core.chunk_append.call(null,b__2156,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),pages.index.make_url.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)),x)),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.not_EQ_.call(null,x,new cljs.core.Keyword(null,"visible-img","visible-img",697721342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state))))?pages.index.style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)):null),new cljs.core.Keyword(null,"key","key",-1516042587),x], null)], null));

var G__2157 = (i__2155 + (1));
i__2155 = G__2157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2156),pages$index$image_animation_$_iter__2153.call(null,cljs.core.chunk_rest.call(null,s__2154__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2156),null);
}
} else {
var x = cljs.core.first.call(null,s__2154__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),pages.index.make_url.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)),x)),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.not_EQ_.call(null,x,new cljs.core.Keyword(null,"visible-img","visible-img",697721342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state))))?pages.index.style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)):null),new cljs.core.Keyword(null,"key","key",-1516042587),x], null)], null),pages$index$image_animation_$_iter__2153.call(null,cljs.core.rest.call(null,s__2154__$2)));
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
pages.index.selected_fortune = (function pages$index$selected_fortune(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),pages.index.make_url.call(null,new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"share on twitter!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"share on facebook!"], null)], null);
} else {
return null;
}
});
pages.index.fortune_saved_QMARK_ = (function pages$index$fortune_saved_QMARK_(){
var fortune_time = localStorage.getItem("fortune_time");
var now = Date.now();
var expired_QMARK_ = (now > fortune_time);
return !(expired_QMARK_);
});
pages.index.set_saved_forture = (function pages$index$set_saved_forture(){
if((new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)) == null)){
cljs.core.println.call(null,"SET STATE FORITE");

return cljs.core.swap_BANG_.call(null,pages.index.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535),localStorage.getItem("fortune"));
} else {
return null;
}
});
pages.index.display_fortune_expiration = (function pages$index$display_fortune_expiration(){
var fortune_time = localStorage.getItem("fortune_time");
var now = Date.now();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gray","p.gray",-1298826002),[cljs.core.str("Expires in "),cljs.core.str((fortune_time - now)),cljs.core.str(" ms")].join('')], null);
});
pages.index.render = (function pages$index$render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-60.center.mt6.pb4","div.w-60.center.mt6.pb4",203795672),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,pages.index.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.rand.call(null,(100))], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"wordsonwalls.nyc"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),pages.index.trigger_anim], null),"click to roll your forture for the day..."], null),(cljs.core.truth_(pages.index.fortune_saved_QMARK_.call(null))?(function (){
cljs.core.println.call(null,"FORTUEN ALREADY SAVED");

pages.index.set_saved_forture.call(null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),pages.index.display_fortune_expiration.call(null),pages.index.selected_fortune.call(null)], null);
})()
:(function (){
cljs.core.println.call(null,"no saved fortune found");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),pages.index.image_animation.call(null),pages.index.selected_fortune.call(null)], null);
})()
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mv4.fl","a.mv4.fl",-318610426),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"about wordsonwalls.nyc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"hidden"], null),new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/card_sound"),cljs.core.str(cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))),cljs.core.str(".mp3")].join('')], null)], null)], null)], null);
});
mirror.tools.inject.call(null,pages.index.state,new cljs.core.Var(function(){return pages.index.render;},new cljs.core.Symbol("pages.index","render","pages.index/render",-1834771087,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"pages.index","pages.index",-1346419101,null),new cljs.core.Symbol(null,"render","render",232498073,null),"pages/index.cljc",13,1,135,135,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(pages.index.render)?pages.index.render.cljs$lang$test:null)])));

//# sourceMappingURL=index.js.map
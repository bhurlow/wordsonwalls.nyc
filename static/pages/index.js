// Compiled by ClojureScript 1.9.293 {}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mirror.tools');
goog.require('goog.net.XhrIo');
goog.require('goog.crypt.Md5');
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
pages.index.strip_fortune_name = (function pages$index$strip_fortune_name(n){
return n.replace(".jpg","");
});
pages.index.cons_fortune_name = (function pages$index$cons_fortune_name(f){
return [cljs.core.str(f),cljs.core.str(".jpg")].join('');
});
pages.index.select_fortune = (function pages$index$select_fortune(){
cljs.core.swap_BANG_.call(null,pages.index.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535),cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state))));

pages.index.save_fortune_state.call(null,new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)));

return (window.location["hash"] = pages.index.strip_fortune_name.call(null,new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state))));
});
pages.index.play_card_sound = (function pages$index$play_card_sound(){
var audio = document.querySelector("audio");
cljs.core.println.call(null,audio);

return audio.play();
});
pages.index.trigger_anim = (function pages$index$trigger_anim(){
cljs.core.swap_BANG_.call(null,pages.index.state,cljs.core.assoc,new cljs.core.Keyword(null,"clicked-ball","clicked-ball",442240093),true);

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
})())?cljs.core.doall.call(null,(function (){var iter__9040__auto__ = (function pages$index$image_animation_$_iter__3619(s__3620){
return (new cljs.core.LazySeq(null,(function (){
var s__3620__$1 = s__3620;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__3620__$1);
if(temp__4657__auto__){
var s__3620__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3620__$2)){
var c__9038__auto__ = cljs.core.chunk_first.call(null,s__3620__$2);
var size__9039__auto__ = cljs.core.count.call(null,c__9038__auto__);
var b__3622 = cljs.core.chunk_buffer.call(null,size__9039__auto__);
if((function (){var i__3621 = (0);
while(true){
if((i__3621 < size__9039__auto__)){
var x = cljs.core._nth.call(null,c__9038__auto__,i__3621);
cljs.core.chunk_append.call(null,b__3622,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),pages.index.make_url.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)),x)),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.not_EQ_.call(null,x,new cljs.core.Keyword(null,"visible-img","visible-img",697721342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state))))?pages.index.style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)):null),new cljs.core.Keyword(null,"key","key",-1516042587),x], null)], null));

var G__3623 = (i__3621 + (1));
i__3621 = G__3623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3622),pages$index$image_animation_$_iter__3619.call(null,cljs.core.chunk_rest.call(null,s__3620__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3622),null);
}
} else {
var x = cljs.core.first.call(null,s__3620__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),pages.index.make_url.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)),x)),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.not_EQ_.call(null,x,new cljs.core.Keyword(null,"visible-img","visible-img",697721342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state))))?pages.index.style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)):null),new cljs.core.Keyword(null,"key","key",-1516042587),x], null)], null),pages$index$image_animation_$_iter__3619.call(null,cljs.core.rest.call(null,s__3620__$2)));
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
pages.index.make_hash = (function pages$index$make_hash(in$){
var m = (new goog.crypt.Md5());
var s = m.digest(in$);
m.reset();

return s.join("");
});
pages.index.sharable_url = (function pages$index$sharable_url(){
return window.location.href;
});
pages.index.twitter_link = (function pages$index$twitter_link(url){
return [cljs.core.str("https://twitter.com/intent/tweet?text="),cljs.core.str(encodeURIComponent(url))].join('');
});
pages.index.fb_link = (function pages$index$fb_link(url){
return [cljs.core.str("http://www.facebook.com/sharer.php?u="),cljs.core.str(url)].join('');
});
pages.index.selected_fortune = (function pages$index$selected_fortune(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),pages.index.make_url.call(null,new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link.black.dim.fl.bg-white.pa2.ttu.b.tracked.w-50-ns.w-100.mt1","a.link.black.dim.fl.bg-white.pa2.ttu.b.tracked.w-50-ns.w-100.mt1",783416923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),pages.index.twitter_link.call(null,pages.index.sharable_url.call(null))], null),"share on twitter!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link.black.dim.fl.bg-white.pa2.ttu.b.tracked.w-50-ns.w-100.mt1","a.link.black.dim.fl.bg-white.pa2.ttu.b.tracked.w-50-ns.w-100.mt1",783416923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),pages.index.fb_link.call(null,pages.index.sharable_url.call(null))], null),"share on facebook!"], null)], null);
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
pages.index.detect_hash = (function pages$index$detect_hash(){
if(!(cljs.core.empty_QMARK_.call(null,window.location.hash))){
cljs.core.println.call(null,"SETTING SELECETED!");

return cljs.core.swap_BANG_.call(null,pages.index.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535),pages.index.cons_fortune_name.call(null,window.location.hash.replace("#","")));
} else {
return null;
}
});
pages.index.render_ball = (function pages$index$render_ball(){
if((new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)) == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-100.fl","div.w-100.fl",-260946156),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pointer.center","img.pointer.center",-2095192961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),pages.index.trigger_anim,new cljs.core.Keyword(null,"src","src",-1651076051),"/static/crystal_ball_transparent.png"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.bg-white.black.tracked.pa2","p.bg-white.black.tracked.pa2",-30516644),"click the crystal ball to roll your fortune for the day..."], null)], null);
} else {
return null;
}
});
pages.index.render_about = (function pages$index$render_about(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt2.black.f6.f5-ns.fl.tl.bg-white.pv2-ns.lh-copy.tracked.ph2.ph5-ns.w-100.overflow-hidden","div.mt2.black.f6.f5-ns.fl.tl.bg-white.pv2-ns.lh-copy.tracked.ph2.ph5-ns.w-100.overflow-hidden",212899130),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.measure","p.measure",-1732360073),"Everyone has something to say, whether politics, poetry or romantic pronouncements. Humerous aphorisms compete with surreal rants and New York city walls offer a constant comment canvas of free expression for it all. Ken Brown has been documenting the ephemeral nature of the city for over 30 years. He's discovered that these words hold much more than opinion and attitudes, they suggest a texture of the times. Moreover, they offer visions into the future. Words on Walls, a projected aided by Brian Hurlow and Marcus Flemming, seeks to fix these prescient phrases of New York street culture into something more than stone. Rub the digital crystal ball to receive your NYC Wors on Walls forture today! As they say, if you want to know what's going on, read the walls."], null)], null);
});
pages.index.render_bg = (function pages$index$render_bg(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.z--1.w-100.h-100.top-0.cover","div.fixed.z--1.w-100.h-100.top-0.cover",441564047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"url(/static/cosmos_crop.jpg)",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(-1)], null)], null)], null);
});
pages.index.render = (function pages$index$render(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),pages.index.render_bg.call(null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pa3.w-100.w-60-ns.center.mt2.mt3-ns.pb4","div.pa3.w-100.w-60-ns.center.mt2.mt3-ns.pb4",-39288671),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,pages.index.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.rand.call(null,(100))], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.tracked-mega.ttu.f3","h1.tracked-mega.ttu.f3",-412905571),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link.white","a.link.white",927069522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"words on walls.nyc"], null)], null),(cljs.core.truth_(pages.index.fortune_saved_QMARK_.call(null))?(function (){
cljs.core.println.call(null,"FORTUEN ALREADY SAVED");

pages.index.set_saved_forture.call(null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),pages.index.selected_fortune.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt4","div.mt4",1590815199),pages.index.render_about.call(null)], null)], null);
})()
:(function (){
cljs.core.println.call(null,"no saved fortune found");

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.not.call(null,new cljs.core.Keyword(null,"clicked-ball","clicked-ball",442240093).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state))))?pages.index.render_ball.call(null):null),pages.index.image_animation.call(null),pages.index.selected_fortune.call(null),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-fortune","selected-fortune",-1818506535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pages.index.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt4","div.mt4",1590815199),pages.index.render_about.call(null)], null):null)], null);
})()
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"hidden"], null),new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/card_sound"),cljs.core.str(cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))),cljs.core.str(".mp3")].join('')], null)], null)], null)], null);
});
mirror.tools.inject.call(null,pages.index.state,new cljs.core.Var(function(){return pages.index.render;},new cljs.core.Symbol("pages.index","render","pages.index/render",-1834771087,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"pages.index","pages.index",-1346419101,null),new cljs.core.Symbol(null,"render","render",232498073,null),"pages/index.cljc",13,1,190,190,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(pages.index.render)?pages.index.render.cljs$lang$test:null)])));
pages.index.detect_hash.call(null);

//# sourceMappingURL=index.js.map
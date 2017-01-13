// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mirror.tools');
goog.require('goog.net.XhrIo');
cljs.core.enable_console_print_BANG_();
pages.index.style__GT_string = (function pages$index$style__GT_string(style_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pair){
return [cljs.core.str(cljs.core.name(cljs.core.first(pair))),cljs.core.str(": "),cljs.core.str(cljs.core.second(pair)),cljs.core.str(";")].join('');
}),style_map)));
});
pages.index.style = (function pages$index$style(m){
return m;
});
pages.index.initial_state = (function pages$index$initial_state(){
return null;
});
pages.index.state = mirror.tools.state_atom(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible_DASH_img,(0),cljs.core.cst$kw$names,cljs.core.PersistentVector.EMPTY], null));
pages.index.fetch_images = (function pages$index$fetch_images(cb){
var G__5606 = "/imgs";
var G__5607 = ((function (G__5606){
return (function (event){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([event], 0));

var res = event.target.getResponseText();
var parsed = window.JSON.parse(res);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(parsed) : cb.call(null,parsed));
});})(G__5606))
;
return goog.net.XhrIo.send(G__5606,G__5607);
});
pages.index.make_url = (function pages$index$make_url(name){
return [cljs.core.str("http://wordsonwalls.nyc.s3.amazonaws.com/processed/"),cljs.core.str(name)].join('');
});
if(typeof pages.index.timer !== 'undefined'){
} else {
pages.index.timer = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
pages.index.inc_visible_img = (function pages$index$inc_visible_img(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pages.index.state,cljs.core.update,cljs.core.cst$kw$visible_DASH_img,(function (x){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["visible image",x], 0));

return cljs.core.mod((x + (1)),(10));
}));
});
pages.index.stop_and_clean_anim = (function pages$index$stop_and_clean_anim(){
var G__5609_5610 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.timer) : cljs.core.deref.call(null,pages.index.timer));
clearInterval(G__5609_5610);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(pages.index.timer,null) : cljs.core.reset_BANG_.call(null,pages.index.timer,null));
});
pages.index.FORTUNE_TIMEOUT = (30000);
pages.index.save_fortune_state = (function pages$index$save_fortune_state(name){
localStorage.setItem("fortune",name);

return localStorage.setItem("fortune_time",(pages.index.FORTUNE_TIMEOUT + Date.now()));
});
pages.index.select_fortune = (function pages$index$select_fortune(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pages.index.state,cljs.core.assoc,cljs.core.cst$kw$selected_DASH_fortune,cljs.core.rand_nth(cljs.core.cst$kw$names.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state)))));

return pages.index.save_fortune_state(cljs.core.cst$kw$selected_DASH_fortune.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state))));
});
pages.index.play_card_sound = (function pages$index$play_card_sound(){
var audio = document.querySelector("audio");
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([audio], 0));

return audio.play();
});
pages.index.trigger_anim = (function pages$index$trigger_anim(){
pages.index.play_card_sound();

if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.timer) : cljs.core.deref.call(null,pages.index.timer)))){
return pages.index.stop_and_clean_anim();
} else {
var G__5615 = pages.index.timer;
var G__5616 = (function (){var G__5617 = ((function (G__5615){
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["INCREMENTING VISIBLE"], 0));

pages.index.inc_visible_img();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["inside interval",cljs.core.cst$kw$visible_DASH_img.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state)))], 0));

if((cljs.core.cst$kw$visible_DASH_img.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state))) >= (9))){
pages.index.stop_and_clean_anim();

return pages.index.select_fortune();
} else {
return null;
}
});})(G__5615))
;
var G__5618 = (100);
return setInterval(G__5617,G__5618);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__5615,G__5616) : cljs.core.reset_BANG_.call(null,G__5615,G__5616));
}
});
pages.index.image_animation = (function pages$index$image_animation(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(cljs.core.truth_((function (){var and__8673__auto__ = cljs.core.cst$kw$names.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state)));
if(cljs.core.truth_(and__8673__auto__)){
return (cljs.core.cst$kw$selected_DASH_fortune.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state))) == null);
} else {
return and__8673__auto__;
}
})())?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__9040__auto__ = (function pages$index$image_animation_$_iter__5625(s__5626){
return (new cljs.core.LazySeq(null,(function (){
var s__5626__$1 = s__5626;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__5626__$1);
if(temp__4657__auto__){
var s__5626__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5626__$2)){
var c__9038__auto__ = cljs.core.chunk_first(s__5626__$2);
var size__9039__auto__ = cljs.core.count(c__9038__auto__);
var b__5628 = cljs.core.chunk_buffer(size__9039__auto__);
if((function (){var i__5627 = (0);
while(true){
if((i__5627 < size__9039__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9038__auto__,i__5627);
cljs.core.chunk_append(b__5628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,pages.index.make_url(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$names.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state))),x)),cljs.core.cst$kw$style,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$visible_DASH_img.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state)))))?pages.index.style(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null)):null),cljs.core.cst$kw$key,x], null)], null));

var G__5631 = (i__5627 + (1));
i__5627 = G__5631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5628),pages$index$image_animation_$_iter__5625(cljs.core.chunk_rest(s__5626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5628),null);
}
} else {
var x = cljs.core.first(s__5626__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,pages.index.make_url(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$names.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state))),x)),cljs.core.cst$kw$style,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$visible_DASH_img.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state)))))?pages.index.style(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null)):null),cljs.core.cst$kw$key,x], null)], null),pages$index$image_animation_$_iter__5625(cljs.core.rest(s__5626__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9040__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()):null)], null);
});
pages.index.selected_fortune = (function pages$index$selected_fortune(){
if(cljs.core.truth_(cljs.core.cst$kw$selected_DASH_fortune.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state))))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,pages.index.make_url(cljs.core.cst$kw$selected_DASH_fortune.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state))))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/"], null),"share on twitter!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/"], null),"share on facebook!"], null)], null);
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
if((cljs.core.cst$kw$selected_DASH_fortune.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pages.index.state) : cljs.core.deref.call(null,pages.index.state))) == null)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["SET STATE FORITE"], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pages.index.state,cljs.core.assoc,cljs.core.cst$kw$selected_DASH_fortune,localStorage.getItem("fortune"));
} else {
return null;
}
});
pages.index.display_fortune_expiration = (function pages$index$display_fortune_expiration(){
var fortune_time = localStorage.getItem("fortune_time");
var now = Date.now();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$gray,[cljs.core.str("Expires in "),cljs.core.str((fortune_time - now)),cljs.core.str(" ms")].join('')], null);
});
pages.index.render = (function pages$index$render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$w_DASH_60$center$mt6$pb4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pages.index.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$r,cljs.core.rand.cljs$core$IFn$_invoke$arity$1((100))], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"wordsonwalls.nyc"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,pages.index.trigger_anim], null),"click to roll your forture for the day..."], null),(cljs.core.truth_(pages.index.fortune_saved_QMARK_())?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["FORTUEN ALREADY SAVED"], 0));

pages.index.set_saved_forture();

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,pages.index.display_fortune_expiration(),pages.index.selected_fortune()], null);
})()
:(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["no saved fortune found"], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,pages.index.image_animation(),pages.index.selected_fortune()], null);
})()
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$mv4$fl,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/about"], null),"about wordsonwalls.nyc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"hidden"], null),cljs.core.cst$kw$src,[cljs.core.str("/card_sound"),cljs.core.str(cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))),cljs.core.str(".mp3")].join('')], null)], null)], null)], null);
});
mirror.tools.inject(pages.index.state,new cljs.core.Var(function(){return pages.index.render;},cljs.core.cst$sym$pages$index_SLASH_render,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$pages$index,cljs.core.cst$sym$render,"pages/index.cljc",13,1,135,135,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(pages.index.render)?pages.index.render.cljs$lang$test:null)])));

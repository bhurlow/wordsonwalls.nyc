// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14353){
var map__14378 = p__14353;
var map__14378__$1 = ((((!((map__14378 == null)))?((((map__14378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14378):map__14378);
var m = map__14378__$1;
var n = cljs.core.get.call(null,map__14378__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14378__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14380_14402 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14381_14403 = null;
var count__14382_14404 = (0);
var i__14383_14405 = (0);
while(true){
if((i__14383_14405 < count__14382_14404)){
var f_14406 = cljs.core._nth.call(null,chunk__14381_14403,i__14383_14405);
cljs.core.println.call(null,"  ",f_14406);

var G__14407 = seq__14380_14402;
var G__14408 = chunk__14381_14403;
var G__14409 = count__14382_14404;
var G__14410 = (i__14383_14405 + (1));
seq__14380_14402 = G__14407;
chunk__14381_14403 = G__14408;
count__14382_14404 = G__14409;
i__14383_14405 = G__14410;
continue;
} else {
var temp__4657__auto___14411 = cljs.core.seq.call(null,seq__14380_14402);
if(temp__4657__auto___14411){
var seq__14380_14412__$1 = temp__4657__auto___14411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14380_14412__$1)){
var c__11984__auto___14413 = cljs.core.chunk_first.call(null,seq__14380_14412__$1);
var G__14414 = cljs.core.chunk_rest.call(null,seq__14380_14412__$1);
var G__14415 = c__11984__auto___14413;
var G__14416 = cljs.core.count.call(null,c__11984__auto___14413);
var G__14417 = (0);
seq__14380_14402 = G__14414;
chunk__14381_14403 = G__14415;
count__14382_14404 = G__14416;
i__14383_14405 = G__14417;
continue;
} else {
var f_14418 = cljs.core.first.call(null,seq__14380_14412__$1);
cljs.core.println.call(null,"  ",f_14418);

var G__14419 = cljs.core.next.call(null,seq__14380_14412__$1);
var G__14420 = null;
var G__14421 = (0);
var G__14422 = (0);
seq__14380_14402 = G__14419;
chunk__14381_14403 = G__14420;
count__14382_14404 = G__14421;
i__14383_14405 = G__14422;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14423 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__11170__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14423);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14423)))?cljs.core.second.call(null,arglists_14423):arglists_14423));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14384_14424 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14385_14425 = null;
var count__14386_14426 = (0);
var i__14387_14427 = (0);
while(true){
if((i__14387_14427 < count__14386_14426)){
var vec__14388_14428 = cljs.core._nth.call(null,chunk__14385_14425,i__14387_14427);
var name_14429 = cljs.core.nth.call(null,vec__14388_14428,(0),null);
var map__14391_14430 = cljs.core.nth.call(null,vec__14388_14428,(1),null);
var map__14391_14431__$1 = ((((!((map__14391_14430 == null)))?((((map__14391_14430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14391_14430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14391_14430):map__14391_14430);
var doc_14432 = cljs.core.get.call(null,map__14391_14431__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14433 = cljs.core.get.call(null,map__14391_14431__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14429);

cljs.core.println.call(null," ",arglists_14433);

if(cljs.core.truth_(doc_14432)){
cljs.core.println.call(null," ",doc_14432);
} else {
}

var G__14434 = seq__14384_14424;
var G__14435 = chunk__14385_14425;
var G__14436 = count__14386_14426;
var G__14437 = (i__14387_14427 + (1));
seq__14384_14424 = G__14434;
chunk__14385_14425 = G__14435;
count__14386_14426 = G__14436;
i__14387_14427 = G__14437;
continue;
} else {
var temp__4657__auto___14438 = cljs.core.seq.call(null,seq__14384_14424);
if(temp__4657__auto___14438){
var seq__14384_14439__$1 = temp__4657__auto___14438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14384_14439__$1)){
var c__11984__auto___14440 = cljs.core.chunk_first.call(null,seq__14384_14439__$1);
var G__14441 = cljs.core.chunk_rest.call(null,seq__14384_14439__$1);
var G__14442 = c__11984__auto___14440;
var G__14443 = cljs.core.count.call(null,c__11984__auto___14440);
var G__14444 = (0);
seq__14384_14424 = G__14441;
chunk__14385_14425 = G__14442;
count__14386_14426 = G__14443;
i__14387_14427 = G__14444;
continue;
} else {
var vec__14393_14445 = cljs.core.first.call(null,seq__14384_14439__$1);
var name_14446 = cljs.core.nth.call(null,vec__14393_14445,(0),null);
var map__14396_14447 = cljs.core.nth.call(null,vec__14393_14445,(1),null);
var map__14396_14448__$1 = ((((!((map__14396_14447 == null)))?((((map__14396_14447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14396_14447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14396_14447):map__14396_14447);
var doc_14449 = cljs.core.get.call(null,map__14396_14448__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14450 = cljs.core.get.call(null,map__14396_14448__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14446);

cljs.core.println.call(null," ",arglists_14450);

if(cljs.core.truth_(doc_14449)){
cljs.core.println.call(null," ",doc_14449);
} else {
}

var G__14451 = cljs.core.next.call(null,seq__14384_14439__$1);
var G__14452 = null;
var G__14453 = (0);
var G__14454 = (0);
seq__14384_14424 = G__14451;
chunk__14385_14425 = G__14452;
count__14386_14426 = G__14453;
i__14387_14427 = G__14454;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__14398 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14399 = null;
var count__14400 = (0);
var i__14401 = (0);
while(true){
if((i__14401 < count__14400)){
var role = cljs.core._nth.call(null,chunk__14399,i__14401);
var temp__4657__auto___14455__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14455__$1)){
var spec_14456 = temp__4657__auto___14455__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_14456));
} else {
}

var G__14457 = seq__14398;
var G__14458 = chunk__14399;
var G__14459 = count__14400;
var G__14460 = (i__14401 + (1));
seq__14398 = G__14457;
chunk__14399 = G__14458;
count__14400 = G__14459;
i__14401 = G__14460;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__14398);
if(temp__4657__auto____$1){
var seq__14398__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14398__$1)){
var c__11984__auto__ = cljs.core.chunk_first.call(null,seq__14398__$1);
var G__14461 = cljs.core.chunk_rest.call(null,seq__14398__$1);
var G__14462 = c__11984__auto__;
var G__14463 = cljs.core.count.call(null,c__11984__auto__);
var G__14464 = (0);
seq__14398 = G__14461;
chunk__14399 = G__14462;
count__14400 = G__14463;
i__14401 = G__14464;
continue;
} else {
var role = cljs.core.first.call(null,seq__14398__$1);
var temp__4657__auto___14465__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14465__$2)){
var spec_14466 = temp__4657__auto___14465__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_14466));
} else {
}

var G__14467 = cljs.core.next.call(null,seq__14398__$1);
var G__14468 = null;
var G__14469 = (0);
var G__14470 = (0);
seq__14398 = G__14467;
chunk__14399 = G__14468;
count__14400 = G__14469;
i__14401 = G__14470;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
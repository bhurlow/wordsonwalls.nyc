// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22658){
var map__22683 = p__22658;
var map__22683__$1 = ((((!((map__22683 == null)))?((((map__22683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22683):map__22683);
var m = map__22683__$1;
var n = cljs.core.get.call(null,map__22683__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22683__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__426__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__426__auto__)){
var ns = temp__426__auto__;
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
var seq__22685_22707 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22686_22708 = null;
var count__22687_22709 = (0);
var i__22688_22710 = (0);
while(true){
if((i__22688_22710 < count__22687_22709)){
var f_22711 = cljs.core._nth.call(null,chunk__22686_22708,i__22688_22710);
cljs.core.println.call(null,"  ",f_22711);

var G__22712 = seq__22685_22707;
var G__22713 = chunk__22686_22708;
var G__22714 = count__22687_22709;
var G__22715 = (i__22688_22710 + (1));
seq__22685_22707 = G__22712;
chunk__22686_22708 = G__22713;
count__22687_22709 = G__22714;
i__22688_22710 = G__22715;
continue;
} else {
var temp__426__auto___22716 = cljs.core.seq.call(null,seq__22685_22707);
if(temp__426__auto___22716){
var seq__22685_22717__$1 = temp__426__auto___22716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22685_22717__$1)){
var c__16616__auto___22718 = cljs.core.chunk_first.call(null,seq__22685_22717__$1);
var G__22719 = cljs.core.chunk_rest.call(null,seq__22685_22717__$1);
var G__22720 = c__16616__auto___22718;
var G__22721 = cljs.core.count.call(null,c__16616__auto___22718);
var G__22722 = (0);
seq__22685_22707 = G__22719;
chunk__22686_22708 = G__22720;
count__22687_22709 = G__22721;
i__22688_22710 = G__22722;
continue;
} else {
var f_22723 = cljs.core.first.call(null,seq__22685_22717__$1);
cljs.core.println.call(null,"  ",f_22723);

var G__22724 = cljs.core.next.call(null,seq__22685_22717__$1);
var G__22725 = null;
var G__22726 = (0);
var G__22727 = (0);
seq__22685_22707 = G__22724;
chunk__22686_22708 = G__22725;
count__22687_22709 = G__22726;
i__22688_22710 = G__22727;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22728 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__15713__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__15713__auto__)){
return or__15713__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22728);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22728)))?cljs.core.second.call(null,arglists_22728):arglists_22728));
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
var seq__22689_22729 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22690_22730 = null;
var count__22691_22731 = (0);
var i__22692_22732 = (0);
while(true){
if((i__22692_22732 < count__22691_22731)){
var vec__22693_22733 = cljs.core._nth.call(null,chunk__22690_22730,i__22692_22732);
var name_22734 = cljs.core.nth.call(null,vec__22693_22733,(0),null);
var map__22696_22735 = cljs.core.nth.call(null,vec__22693_22733,(1),null);
var map__22696_22736__$1 = ((((!((map__22696_22735 == null)))?((((map__22696_22735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22696_22735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22696_22735):map__22696_22735);
var doc_22737 = cljs.core.get.call(null,map__22696_22736__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22738 = cljs.core.get.call(null,map__22696_22736__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22734);

cljs.core.println.call(null," ",arglists_22738);

if(cljs.core.truth_(doc_22737)){
cljs.core.println.call(null," ",doc_22737);
} else {
}

var G__22739 = seq__22689_22729;
var G__22740 = chunk__22690_22730;
var G__22741 = count__22691_22731;
var G__22742 = (i__22692_22732 + (1));
seq__22689_22729 = G__22739;
chunk__22690_22730 = G__22740;
count__22691_22731 = G__22741;
i__22692_22732 = G__22742;
continue;
} else {
var temp__426__auto___22743 = cljs.core.seq.call(null,seq__22689_22729);
if(temp__426__auto___22743){
var seq__22689_22744__$1 = temp__426__auto___22743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22689_22744__$1)){
var c__16616__auto___22745 = cljs.core.chunk_first.call(null,seq__22689_22744__$1);
var G__22746 = cljs.core.chunk_rest.call(null,seq__22689_22744__$1);
var G__22747 = c__16616__auto___22745;
var G__22748 = cljs.core.count.call(null,c__16616__auto___22745);
var G__22749 = (0);
seq__22689_22729 = G__22746;
chunk__22690_22730 = G__22747;
count__22691_22731 = G__22748;
i__22692_22732 = G__22749;
continue;
} else {
var vec__22698_22750 = cljs.core.first.call(null,seq__22689_22744__$1);
var name_22751 = cljs.core.nth.call(null,vec__22698_22750,(0),null);
var map__22701_22752 = cljs.core.nth.call(null,vec__22698_22750,(1),null);
var map__22701_22753__$1 = ((((!((map__22701_22752 == null)))?((((map__22701_22752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22701_22752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22701_22752):map__22701_22752);
var doc_22754 = cljs.core.get.call(null,map__22701_22753__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22755 = cljs.core.get.call(null,map__22701_22753__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22751);

cljs.core.println.call(null," ",arglists_22755);

if(cljs.core.truth_(doc_22754)){
cljs.core.println.call(null," ",doc_22754);
} else {
}

var G__22756 = cljs.core.next.call(null,seq__22689_22744__$1);
var G__22757 = null;
var G__22758 = (0);
var G__22759 = (0);
seq__22689_22729 = G__22756;
chunk__22690_22730 = G__22757;
count__22691_22731 = G__22758;
i__22692_22732 = G__22759;
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
var temp__426__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__426__auto__)){
var fnspec = temp__426__auto__;
cljs.core.print.call(null,"Spec");

var seq__22703 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22704 = null;
var count__22705 = (0);
var i__22706 = (0);
while(true){
if((i__22706 < count__22705)){
var role = cljs.core._nth.call(null,chunk__22704,i__22706);
var temp__426__auto___22760__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__426__auto___22760__$1)){
var spec_22761 = temp__426__auto___22760__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_22761));
} else {
}

var G__22762 = seq__22703;
var G__22763 = chunk__22704;
var G__22764 = count__22705;
var G__22765 = (i__22706 + (1));
seq__22703 = G__22762;
chunk__22704 = G__22763;
count__22705 = G__22764;
i__22706 = G__22765;
continue;
} else {
var temp__426__auto____$1 = cljs.core.seq.call(null,seq__22703);
if(temp__426__auto____$1){
var seq__22703__$1 = temp__426__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22703__$1)){
var c__16616__auto__ = cljs.core.chunk_first.call(null,seq__22703__$1);
var G__22766 = cljs.core.chunk_rest.call(null,seq__22703__$1);
var G__22767 = c__16616__auto__;
var G__22768 = cljs.core.count.call(null,c__16616__auto__);
var G__22769 = (0);
seq__22703 = G__22766;
chunk__22704 = G__22767;
count__22705 = G__22768;
i__22706 = G__22769;
continue;
} else {
var role = cljs.core.first.call(null,seq__22703__$1);
var temp__426__auto___22770__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__426__auto___22770__$2)){
var spec_22771 = temp__426__auto___22770__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_22771));
} else {
}

var G__22772 = cljs.core.next.call(null,seq__22703__$1);
var G__22773 = null;
var G__22774 = (0);
var G__22775 = (0);
seq__22703 = G__22772;
chunk__22704 = G__22773;
count__22705 = G__22774;
i__22706 = G__22775;
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

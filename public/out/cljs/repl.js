// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18016){
var map__18041 = p__18016;
var map__18041__$1 = ((((!((map__18041 == null)))?((((map__18041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18041):map__18041);
var m = map__18041__$1;
var n = cljs.core.get.call(null,map__18041__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18041__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18043_18065 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18044_18066 = null;
var count__18045_18067 = (0);
var i__18046_18068 = (0);
while(true){
if((i__18046_18068 < count__18045_18067)){
var f_18069 = cljs.core._nth.call(null,chunk__18044_18066,i__18046_18068);
cljs.core.println.call(null,"  ",f_18069);

var G__18070 = seq__18043_18065;
var G__18071 = chunk__18044_18066;
var G__18072 = count__18045_18067;
var G__18073 = (i__18046_18068 + (1));
seq__18043_18065 = G__18070;
chunk__18044_18066 = G__18071;
count__18045_18067 = G__18072;
i__18046_18068 = G__18073;
continue;
} else {
var temp__426__auto___18074 = cljs.core.seq.call(null,seq__18043_18065);
if(temp__426__auto___18074){
var seq__18043_18075__$1 = temp__426__auto___18074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18043_18075__$1)){
var c__15243__auto___18076 = cljs.core.chunk_first.call(null,seq__18043_18075__$1);
var G__18077 = cljs.core.chunk_rest.call(null,seq__18043_18075__$1);
var G__18078 = c__15243__auto___18076;
var G__18079 = cljs.core.count.call(null,c__15243__auto___18076);
var G__18080 = (0);
seq__18043_18065 = G__18077;
chunk__18044_18066 = G__18078;
count__18045_18067 = G__18079;
i__18046_18068 = G__18080;
continue;
} else {
var f_18081 = cljs.core.first.call(null,seq__18043_18075__$1);
cljs.core.println.call(null,"  ",f_18081);

var G__18082 = cljs.core.next.call(null,seq__18043_18075__$1);
var G__18083 = null;
var G__18084 = (0);
var G__18085 = (0);
seq__18043_18065 = G__18082;
chunk__18044_18066 = G__18083;
count__18045_18067 = G__18084;
i__18046_18068 = G__18085;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18086 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__14340__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__14340__auto__)){
return or__14340__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18086);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18086)))?cljs.core.second.call(null,arglists_18086):arglists_18086));
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
var seq__18047_18087 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18048_18088 = null;
var count__18049_18089 = (0);
var i__18050_18090 = (0);
while(true){
if((i__18050_18090 < count__18049_18089)){
var vec__18051_18091 = cljs.core._nth.call(null,chunk__18048_18088,i__18050_18090);
var name_18092 = cljs.core.nth.call(null,vec__18051_18091,(0),null);
var map__18054_18093 = cljs.core.nth.call(null,vec__18051_18091,(1),null);
var map__18054_18094__$1 = ((((!((map__18054_18093 == null)))?((((map__18054_18093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18054_18093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18054_18093):map__18054_18093);
var doc_18095 = cljs.core.get.call(null,map__18054_18094__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18096 = cljs.core.get.call(null,map__18054_18094__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18092);

cljs.core.println.call(null," ",arglists_18096);

if(cljs.core.truth_(doc_18095)){
cljs.core.println.call(null," ",doc_18095);
} else {
}

var G__18097 = seq__18047_18087;
var G__18098 = chunk__18048_18088;
var G__18099 = count__18049_18089;
var G__18100 = (i__18050_18090 + (1));
seq__18047_18087 = G__18097;
chunk__18048_18088 = G__18098;
count__18049_18089 = G__18099;
i__18050_18090 = G__18100;
continue;
} else {
var temp__426__auto___18101 = cljs.core.seq.call(null,seq__18047_18087);
if(temp__426__auto___18101){
var seq__18047_18102__$1 = temp__426__auto___18101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18047_18102__$1)){
var c__15243__auto___18103 = cljs.core.chunk_first.call(null,seq__18047_18102__$1);
var G__18104 = cljs.core.chunk_rest.call(null,seq__18047_18102__$1);
var G__18105 = c__15243__auto___18103;
var G__18106 = cljs.core.count.call(null,c__15243__auto___18103);
var G__18107 = (0);
seq__18047_18087 = G__18104;
chunk__18048_18088 = G__18105;
count__18049_18089 = G__18106;
i__18050_18090 = G__18107;
continue;
} else {
var vec__18056_18108 = cljs.core.first.call(null,seq__18047_18102__$1);
var name_18109 = cljs.core.nth.call(null,vec__18056_18108,(0),null);
var map__18059_18110 = cljs.core.nth.call(null,vec__18056_18108,(1),null);
var map__18059_18111__$1 = ((((!((map__18059_18110 == null)))?((((map__18059_18110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18059_18110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18059_18110):map__18059_18110);
var doc_18112 = cljs.core.get.call(null,map__18059_18111__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18113 = cljs.core.get.call(null,map__18059_18111__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18109);

cljs.core.println.call(null," ",arglists_18113);

if(cljs.core.truth_(doc_18112)){
cljs.core.println.call(null," ",doc_18112);
} else {
}

var G__18114 = cljs.core.next.call(null,seq__18047_18102__$1);
var G__18115 = null;
var G__18116 = (0);
var G__18117 = (0);
seq__18047_18087 = G__18114;
chunk__18048_18088 = G__18115;
count__18049_18089 = G__18116;
i__18050_18090 = G__18117;
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

var seq__18061 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18062 = null;
var count__18063 = (0);
var i__18064 = (0);
while(true){
if((i__18064 < count__18063)){
var role = cljs.core._nth.call(null,chunk__18062,i__18064);
var temp__426__auto___18118__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__426__auto___18118__$1)){
var spec_18119 = temp__426__auto___18118__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_18119));
} else {
}

var G__18120 = seq__18061;
var G__18121 = chunk__18062;
var G__18122 = count__18063;
var G__18123 = (i__18064 + (1));
seq__18061 = G__18120;
chunk__18062 = G__18121;
count__18063 = G__18122;
i__18064 = G__18123;
continue;
} else {
var temp__426__auto____$1 = cljs.core.seq.call(null,seq__18061);
if(temp__426__auto____$1){
var seq__18061__$1 = temp__426__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18061__$1)){
var c__15243__auto__ = cljs.core.chunk_first.call(null,seq__18061__$1);
var G__18124 = cljs.core.chunk_rest.call(null,seq__18061__$1);
var G__18125 = c__15243__auto__;
var G__18126 = cljs.core.count.call(null,c__15243__auto__);
var G__18127 = (0);
seq__18061 = G__18124;
chunk__18062 = G__18125;
count__18063 = G__18126;
i__18064 = G__18127;
continue;
} else {
var role = cljs.core.first.call(null,seq__18061__$1);
var temp__426__auto___18128__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__426__auto___18128__$2)){
var spec_18129 = temp__426__auto___18128__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_18129));
} else {
}

var G__18130 = cljs.core.next.call(null,seq__18061__$1);
var G__18131 = null;
var G__18132 = (0);
var G__18133 = (0);
seq__18061 = G__18130;
chunk__18062 = G__18131;
count__18063 = G__18132;
i__18064 = G__18133;
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
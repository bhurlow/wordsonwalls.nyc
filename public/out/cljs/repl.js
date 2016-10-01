// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18018){
var map__18043 = p__18018;
var map__18043__$1 = ((((!((map__18043 == null)))?((((map__18043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18043):map__18043);
var m = map__18043__$1;
var n = cljs.core.get.call(null,map__18043__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18045_18067 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18046_18068 = null;
var count__18047_18069 = (0);
var i__18048_18070 = (0);
while(true){
if((i__18048_18070 < count__18047_18069)){
var f_18071 = cljs.core._nth.call(null,chunk__18046_18068,i__18048_18070);
cljs.core.println.call(null,"  ",f_18071);

var G__18072 = seq__18045_18067;
var G__18073 = chunk__18046_18068;
var G__18074 = count__18047_18069;
var G__18075 = (i__18048_18070 + (1));
seq__18045_18067 = G__18072;
chunk__18046_18068 = G__18073;
count__18047_18069 = G__18074;
i__18048_18070 = G__18075;
continue;
} else {
var temp__426__auto___18076 = cljs.core.seq.call(null,seq__18045_18067);
if(temp__426__auto___18076){
var seq__18045_18077__$1 = temp__426__auto___18076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18045_18077__$1)){
var c__15245__auto___18078 = cljs.core.chunk_first.call(null,seq__18045_18077__$1);
var G__18079 = cljs.core.chunk_rest.call(null,seq__18045_18077__$1);
var G__18080 = c__15245__auto___18078;
var G__18081 = cljs.core.count.call(null,c__15245__auto___18078);
var G__18082 = (0);
seq__18045_18067 = G__18079;
chunk__18046_18068 = G__18080;
count__18047_18069 = G__18081;
i__18048_18070 = G__18082;
continue;
} else {
var f_18083 = cljs.core.first.call(null,seq__18045_18077__$1);
cljs.core.println.call(null,"  ",f_18083);

var G__18084 = cljs.core.next.call(null,seq__18045_18077__$1);
var G__18085 = null;
var G__18086 = (0);
var G__18087 = (0);
seq__18045_18067 = G__18084;
chunk__18046_18068 = G__18085;
count__18047_18069 = G__18086;
i__18048_18070 = G__18087;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18088 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__14342__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__14342__auto__)){
return or__14342__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18088);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18088)))?cljs.core.second.call(null,arglists_18088):arglists_18088));
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
var seq__18049_18089 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18050_18090 = null;
var count__18051_18091 = (0);
var i__18052_18092 = (0);
while(true){
if((i__18052_18092 < count__18051_18091)){
var vec__18053_18093 = cljs.core._nth.call(null,chunk__18050_18090,i__18052_18092);
var name_18094 = cljs.core.nth.call(null,vec__18053_18093,(0),null);
var map__18056_18095 = cljs.core.nth.call(null,vec__18053_18093,(1),null);
var map__18056_18096__$1 = ((((!((map__18056_18095 == null)))?((((map__18056_18095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18056_18095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18056_18095):map__18056_18095);
var doc_18097 = cljs.core.get.call(null,map__18056_18096__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18098 = cljs.core.get.call(null,map__18056_18096__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18094);

cljs.core.println.call(null," ",arglists_18098);

if(cljs.core.truth_(doc_18097)){
cljs.core.println.call(null," ",doc_18097);
} else {
}

var G__18099 = seq__18049_18089;
var G__18100 = chunk__18050_18090;
var G__18101 = count__18051_18091;
var G__18102 = (i__18052_18092 + (1));
seq__18049_18089 = G__18099;
chunk__18050_18090 = G__18100;
count__18051_18091 = G__18101;
i__18052_18092 = G__18102;
continue;
} else {
var temp__426__auto___18103 = cljs.core.seq.call(null,seq__18049_18089);
if(temp__426__auto___18103){
var seq__18049_18104__$1 = temp__426__auto___18103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18049_18104__$1)){
var c__15245__auto___18105 = cljs.core.chunk_first.call(null,seq__18049_18104__$1);
var G__18106 = cljs.core.chunk_rest.call(null,seq__18049_18104__$1);
var G__18107 = c__15245__auto___18105;
var G__18108 = cljs.core.count.call(null,c__15245__auto___18105);
var G__18109 = (0);
seq__18049_18089 = G__18106;
chunk__18050_18090 = G__18107;
count__18051_18091 = G__18108;
i__18052_18092 = G__18109;
continue;
} else {
var vec__18058_18110 = cljs.core.first.call(null,seq__18049_18104__$1);
var name_18111 = cljs.core.nth.call(null,vec__18058_18110,(0),null);
var map__18061_18112 = cljs.core.nth.call(null,vec__18058_18110,(1),null);
var map__18061_18113__$1 = ((((!((map__18061_18112 == null)))?((((map__18061_18112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18061_18112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18061_18112):map__18061_18112);
var doc_18114 = cljs.core.get.call(null,map__18061_18113__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18115 = cljs.core.get.call(null,map__18061_18113__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18111);

cljs.core.println.call(null," ",arglists_18115);

if(cljs.core.truth_(doc_18114)){
cljs.core.println.call(null," ",doc_18114);
} else {
}

var G__18116 = cljs.core.next.call(null,seq__18049_18104__$1);
var G__18117 = null;
var G__18118 = (0);
var G__18119 = (0);
seq__18049_18089 = G__18116;
chunk__18050_18090 = G__18117;
count__18051_18091 = G__18118;
i__18052_18092 = G__18119;
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

var seq__18063 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18064 = null;
var count__18065 = (0);
var i__18066 = (0);
while(true){
if((i__18066 < count__18065)){
var role = cljs.core._nth.call(null,chunk__18064,i__18066);
var temp__426__auto___18120__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__426__auto___18120__$1)){
var spec_18121 = temp__426__auto___18120__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_18121));
} else {
}

var G__18122 = seq__18063;
var G__18123 = chunk__18064;
var G__18124 = count__18065;
var G__18125 = (i__18066 + (1));
seq__18063 = G__18122;
chunk__18064 = G__18123;
count__18065 = G__18124;
i__18066 = G__18125;
continue;
} else {
var temp__426__auto____$1 = cljs.core.seq.call(null,seq__18063);
if(temp__426__auto____$1){
var seq__18063__$1 = temp__426__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18063__$1)){
var c__15245__auto__ = cljs.core.chunk_first.call(null,seq__18063__$1);
var G__18126 = cljs.core.chunk_rest.call(null,seq__18063__$1);
var G__18127 = c__15245__auto__;
var G__18128 = cljs.core.count.call(null,c__15245__auto__);
var G__18129 = (0);
seq__18063 = G__18126;
chunk__18064 = G__18127;
count__18065 = G__18128;
i__18066 = G__18129;
continue;
} else {
var role = cljs.core.first.call(null,seq__18063__$1);
var temp__426__auto___18130__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__426__auto___18130__$2)){
var spec_18131 = temp__426__auto___18130__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_18131));
} else {
}

var G__18132 = cljs.core.next.call(null,seq__18063__$1);
var G__18133 = null;
var G__18134 = (0);
var G__18135 = (0);
seq__18063 = G__18132;
chunk__18064 = G__18133;
count__18065 = G__18134;
i__18066 = G__18135;
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
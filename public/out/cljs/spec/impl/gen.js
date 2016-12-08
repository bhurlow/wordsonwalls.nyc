// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__14992__auto__,writer__14993__auto__,opt__14994__auto__){
return cljs.core._write.call(null,writer__14993__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15910 = arguments.length;
var i__15524__auto___15911 = (0);
while(true){
if((i__15524__auto___15911 < len__15523__auto___15910)){
args__15530__auto__.push((arguments[i__15524__auto___15911]));

var G__15912 = (i__15524__auto___15911 + (1));
i__15524__auto___15911 = G__15912;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq15909){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15909));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15914 = arguments.length;
var i__15524__auto___15915 = (0);
while(true){
if((i__15524__auto___15915 < len__15523__auto___15914)){
args__15530__auto__.push((arguments[i__15524__auto___15915]));

var G__15916 = (i__15524__auto___15915 + (1));
i__15524__auto___15915 = G__15916;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq15913){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15913));
});

var g_QMARK__15917 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_15918 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15917){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__15917))
,null));
var mkg_15919 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15917,g_15918){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__15917,g_15918))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__15917,g_15918,mkg_15919){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__15917).call(null,x);
});})(g_QMARK__15917,g_15918,mkg_15919))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__15917,g_15918,mkg_15919){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_15919).call(null,gfn);
});})(g_QMARK__15917,g_15918,mkg_15919))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__15917,g_15918,mkg_15919){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_15918).call(null,generator);
});})(g_QMARK__15917,g_15918,mkg_15919))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__15881__auto___15937 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__15881__auto___15937){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15938 = arguments.length;
var i__15524__auto___15939 = (0);
while(true){
if((i__15524__auto___15939 < len__15523__auto___15938)){
args__15530__auto__.push((arguments[i__15524__auto___15939]));

var G__15940 = (i__15524__auto___15939 + (1));
i__15524__auto___15939 = G__15940;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15937))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15937){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15937),args);
});})(g__15881__auto___15937))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__15881__auto___15937){
return (function (seq15920){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15920));
});})(g__15881__auto___15937))
;


var g__15881__auto___15941 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__15881__auto___15941){
return (function cljs$spec$impl$gen$list(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15942 = arguments.length;
var i__15524__auto___15943 = (0);
while(true){
if((i__15524__auto___15943 < len__15523__auto___15942)){
args__15530__auto__.push((arguments[i__15524__auto___15943]));

var G__15944 = (i__15524__auto___15943 + (1));
i__15524__auto___15943 = G__15944;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15941))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15941){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15941),args);
});})(g__15881__auto___15941))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__15881__auto___15941){
return (function (seq15921){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15921));
});})(g__15881__auto___15941))
;


var g__15881__auto___15945 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__15881__auto___15945){
return (function cljs$spec$impl$gen$map(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15946 = arguments.length;
var i__15524__auto___15947 = (0);
while(true){
if((i__15524__auto___15947 < len__15523__auto___15946)){
args__15530__auto__.push((arguments[i__15524__auto___15947]));

var G__15948 = (i__15524__auto___15947 + (1));
i__15524__auto___15947 = G__15948;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15945))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15945){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15945),args);
});})(g__15881__auto___15945))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__15881__auto___15945){
return (function (seq15922){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15922));
});})(g__15881__auto___15945))
;


var g__15881__auto___15949 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__15881__auto___15949){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15950 = arguments.length;
var i__15524__auto___15951 = (0);
while(true){
if((i__15524__auto___15951 < len__15523__auto___15950)){
args__15530__auto__.push((arguments[i__15524__auto___15951]));

var G__15952 = (i__15524__auto___15951 + (1));
i__15524__auto___15951 = G__15952;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15949))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15949){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15949),args);
});})(g__15881__auto___15949))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__15881__auto___15949){
return (function (seq15923){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15923));
});})(g__15881__auto___15949))
;


var g__15881__auto___15953 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__15881__auto___15953){
return (function cljs$spec$impl$gen$set(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15954 = arguments.length;
var i__15524__auto___15955 = (0);
while(true){
if((i__15524__auto___15955 < len__15523__auto___15954)){
args__15530__auto__.push((arguments[i__15524__auto___15955]));

var G__15956 = (i__15524__auto___15955 + (1));
i__15524__auto___15955 = G__15956;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15953))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15953){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15953),args);
});})(g__15881__auto___15953))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__15881__auto___15953){
return (function (seq15924){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15924));
});})(g__15881__auto___15953))
;


var g__15881__auto___15957 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__15881__auto___15957){
return (function cljs$spec$impl$gen$vector(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15958 = arguments.length;
var i__15524__auto___15959 = (0);
while(true){
if((i__15524__auto___15959 < len__15523__auto___15958)){
args__15530__auto__.push((arguments[i__15524__auto___15959]));

var G__15960 = (i__15524__auto___15959 + (1));
i__15524__auto___15959 = G__15960;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15957))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15957){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15957),args);
});})(g__15881__auto___15957))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__15881__auto___15957){
return (function (seq15925){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15925));
});})(g__15881__auto___15957))
;


var g__15881__auto___15961 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__15881__auto___15961){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15962 = arguments.length;
var i__15524__auto___15963 = (0);
while(true){
if((i__15524__auto___15963 < len__15523__auto___15962)){
args__15530__auto__.push((arguments[i__15524__auto___15963]));

var G__15964 = (i__15524__auto___15963 + (1));
i__15524__auto___15963 = G__15964;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15961))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15961){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15961),args);
});})(g__15881__auto___15961))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__15881__auto___15961){
return (function (seq15926){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15926));
});})(g__15881__auto___15961))
;


var g__15881__auto___15965 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__15881__auto___15965){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15966 = arguments.length;
var i__15524__auto___15967 = (0);
while(true){
if((i__15524__auto___15967 < len__15523__auto___15966)){
args__15530__auto__.push((arguments[i__15524__auto___15967]));

var G__15968 = (i__15524__auto___15967 + (1));
i__15524__auto___15967 = G__15968;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15965))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15965){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15965),args);
});})(g__15881__auto___15965))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__15881__auto___15965){
return (function (seq15927){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15927));
});})(g__15881__auto___15965))
;


var g__15881__auto___15969 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__15881__auto___15969){
return (function cljs$spec$impl$gen$elements(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15970 = arguments.length;
var i__15524__auto___15971 = (0);
while(true){
if((i__15524__auto___15971 < len__15523__auto___15970)){
args__15530__auto__.push((arguments[i__15524__auto___15971]));

var G__15972 = (i__15524__auto___15971 + (1));
i__15524__auto___15971 = G__15972;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15969))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15969){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15969),args);
});})(g__15881__auto___15969))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__15881__auto___15969){
return (function (seq15928){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15928));
});})(g__15881__auto___15969))
;


var g__15881__auto___15973 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__15881__auto___15973){
return (function cljs$spec$impl$gen$bind(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15974 = arguments.length;
var i__15524__auto___15975 = (0);
while(true){
if((i__15524__auto___15975 < len__15523__auto___15974)){
args__15530__auto__.push((arguments[i__15524__auto___15975]));

var G__15976 = (i__15524__auto___15975 + (1));
i__15524__auto___15975 = G__15976;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15973))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15973){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15973),args);
});})(g__15881__auto___15973))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__15881__auto___15973){
return (function (seq15929){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15929));
});})(g__15881__auto___15973))
;


var g__15881__auto___15977 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__15881__auto___15977){
return (function cljs$spec$impl$gen$choose(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15978 = arguments.length;
var i__15524__auto___15979 = (0);
while(true){
if((i__15524__auto___15979 < len__15523__auto___15978)){
args__15530__auto__.push((arguments[i__15524__auto___15979]));

var G__15980 = (i__15524__auto___15979 + (1));
i__15524__auto___15979 = G__15980;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15977))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15977){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15977),args);
});})(g__15881__auto___15977))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__15881__auto___15977){
return (function (seq15930){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15930));
});})(g__15881__auto___15977))
;


var g__15881__auto___15981 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__15881__auto___15981){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15982 = arguments.length;
var i__15524__auto___15983 = (0);
while(true){
if((i__15524__auto___15983 < len__15523__auto___15982)){
args__15530__auto__.push((arguments[i__15524__auto___15983]));

var G__15984 = (i__15524__auto___15983 + (1));
i__15524__auto___15983 = G__15984;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15981))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15981){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15981),args);
});})(g__15881__auto___15981))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__15881__auto___15981){
return (function (seq15931){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15931));
});})(g__15881__auto___15981))
;


var g__15881__auto___15985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__15881__auto___15985){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15986 = arguments.length;
var i__15524__auto___15987 = (0);
while(true){
if((i__15524__auto___15987 < len__15523__auto___15986)){
args__15530__auto__.push((arguments[i__15524__auto___15987]));

var G__15988 = (i__15524__auto___15987 + (1));
i__15524__auto___15987 = G__15988;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15985))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15985){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15985),args);
});})(g__15881__auto___15985))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__15881__auto___15985){
return (function (seq15932){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15932));
});})(g__15881__auto___15985))
;


var g__15881__auto___15989 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__15881__auto___15989){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15990 = arguments.length;
var i__15524__auto___15991 = (0);
while(true){
if((i__15524__auto___15991 < len__15523__auto___15990)){
args__15530__auto__.push((arguments[i__15524__auto___15991]));

var G__15992 = (i__15524__auto___15991 + (1));
i__15524__auto___15991 = G__15992;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15989))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15989){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15989),args);
});})(g__15881__auto___15989))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__15881__auto___15989){
return (function (seq15933){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15933));
});})(g__15881__auto___15989))
;


var g__15881__auto___15993 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__15881__auto___15993){
return (function cljs$spec$impl$gen$sample(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15994 = arguments.length;
var i__15524__auto___15995 = (0);
while(true){
if((i__15524__auto___15995 < len__15523__auto___15994)){
args__15530__auto__.push((arguments[i__15524__auto___15995]));

var G__15996 = (i__15524__auto___15995 + (1));
i__15524__auto___15995 = G__15996;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15993))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15993){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15993),args);
});})(g__15881__auto___15993))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__15881__auto___15993){
return (function (seq15934){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15934));
});})(g__15881__auto___15993))
;


var g__15881__auto___15997 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__15881__auto___15997){
return (function cljs$spec$impl$gen$return(var_args){
var args__15530__auto__ = [];
var len__15523__auto___15998 = arguments.length;
var i__15524__auto___15999 = (0);
while(true){
if((i__15524__auto___15999 < len__15523__auto___15998)){
args__15530__auto__.push((arguments[i__15524__auto___15999]));

var G__16000 = (i__15524__auto___15999 + (1));
i__15524__auto___15999 = G__16000;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___15997))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___15997){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___15997),args);
});})(g__15881__auto___15997))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__15881__auto___15997){
return (function (seq15935){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15935));
});})(g__15881__auto___15997))
;


var g__15881__auto___16001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__15881__auto___16001){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16002 = arguments.length;
var i__15524__auto___16003 = (0);
while(true){
if((i__15524__auto___16003 < len__15523__auto___16002)){
args__15530__auto__.push((arguments[i__15524__auto___16003]));

var G__16004 = (i__15524__auto___16003 + (1));
i__15524__auto___16003 = G__16004;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15881__auto___16001))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15881__auto___16001){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15881__auto___16001),args);
});})(g__15881__auto___16001))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__15881__auto___16001){
return (function (seq15936){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15936));
});})(g__15881__auto___16001))
;

var g__15894__auto___16026 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__15894__auto___16026){
return (function cljs$spec$impl$gen$any(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16027 = arguments.length;
var i__15524__auto___16028 = (0);
while(true){
if((i__15524__auto___16028 < len__15523__auto___16027)){
args__15530__auto__.push((arguments[i__15524__auto___16028]));

var G__16029 = (i__15524__auto___16028 + (1));
i__15524__auto___16028 = G__16029;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16026))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16026){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16026);
});})(g__15894__auto___16026))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__15894__auto___16026){
return (function (seq16005){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16005));
});})(g__15894__auto___16026))
;


var g__15894__auto___16030 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__15894__auto___16030){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16031 = arguments.length;
var i__15524__auto___16032 = (0);
while(true){
if((i__15524__auto___16032 < len__15523__auto___16031)){
args__15530__auto__.push((arguments[i__15524__auto___16032]));

var G__16033 = (i__15524__auto___16032 + (1));
i__15524__auto___16032 = G__16033;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16030))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16030){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16030);
});})(g__15894__auto___16030))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__15894__auto___16030){
return (function (seq16006){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16006));
});})(g__15894__auto___16030))
;


var g__15894__auto___16034 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__15894__auto___16034){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16035 = arguments.length;
var i__15524__auto___16036 = (0);
while(true){
if((i__15524__auto___16036 < len__15523__auto___16035)){
args__15530__auto__.push((arguments[i__15524__auto___16036]));

var G__16037 = (i__15524__auto___16036 + (1));
i__15524__auto___16036 = G__16037;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16034))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16034){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16034);
});})(g__15894__auto___16034))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__15894__auto___16034){
return (function (seq16007){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16007));
});})(g__15894__auto___16034))
;


var g__15894__auto___16038 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__15894__auto___16038){
return (function cljs$spec$impl$gen$char(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16039 = arguments.length;
var i__15524__auto___16040 = (0);
while(true){
if((i__15524__auto___16040 < len__15523__auto___16039)){
args__15530__auto__.push((arguments[i__15524__auto___16040]));

var G__16041 = (i__15524__auto___16040 + (1));
i__15524__auto___16040 = G__16041;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16038))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16038){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16038);
});})(g__15894__auto___16038))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__15894__auto___16038){
return (function (seq16008){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16008));
});})(g__15894__auto___16038))
;


var g__15894__auto___16042 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__15894__auto___16042){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16043 = arguments.length;
var i__15524__auto___16044 = (0);
while(true){
if((i__15524__auto___16044 < len__15523__auto___16043)){
args__15530__auto__.push((arguments[i__15524__auto___16044]));

var G__16045 = (i__15524__auto___16044 + (1));
i__15524__auto___16044 = G__16045;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16042))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16042){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16042);
});})(g__15894__auto___16042))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__15894__auto___16042){
return (function (seq16009){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16009));
});})(g__15894__auto___16042))
;


var g__15894__auto___16046 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__15894__auto___16046){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16047 = arguments.length;
var i__15524__auto___16048 = (0);
while(true){
if((i__15524__auto___16048 < len__15523__auto___16047)){
args__15530__auto__.push((arguments[i__15524__auto___16048]));

var G__16049 = (i__15524__auto___16048 + (1));
i__15524__auto___16048 = G__16049;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16046))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16046){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16046);
});})(g__15894__auto___16046))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__15894__auto___16046){
return (function (seq16010){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16010));
});})(g__15894__auto___16046))
;


var g__15894__auto___16050 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__15894__auto___16050){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16051 = arguments.length;
var i__15524__auto___16052 = (0);
while(true){
if((i__15524__auto___16052 < len__15523__auto___16051)){
args__15530__auto__.push((arguments[i__15524__auto___16052]));

var G__16053 = (i__15524__auto___16052 + (1));
i__15524__auto___16052 = G__16053;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16050))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16050){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16050);
});})(g__15894__auto___16050))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__15894__auto___16050){
return (function (seq16011){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16011));
});})(g__15894__auto___16050))
;


var g__15894__auto___16054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__15894__auto___16054){
return (function cljs$spec$impl$gen$double(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16055 = arguments.length;
var i__15524__auto___16056 = (0);
while(true){
if((i__15524__auto___16056 < len__15523__auto___16055)){
args__15530__auto__.push((arguments[i__15524__auto___16056]));

var G__16057 = (i__15524__auto___16056 + (1));
i__15524__auto___16056 = G__16057;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16054))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16054){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16054);
});})(g__15894__auto___16054))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__15894__auto___16054){
return (function (seq16012){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16012));
});})(g__15894__auto___16054))
;


var g__15894__auto___16058 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__15894__auto___16058){
return (function cljs$spec$impl$gen$int(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16059 = arguments.length;
var i__15524__auto___16060 = (0);
while(true){
if((i__15524__auto___16060 < len__15523__auto___16059)){
args__15530__auto__.push((arguments[i__15524__auto___16060]));

var G__16061 = (i__15524__auto___16060 + (1));
i__15524__auto___16060 = G__16061;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16058))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16058){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16058);
});})(g__15894__auto___16058))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__15894__auto___16058){
return (function (seq16013){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16013));
});})(g__15894__auto___16058))
;


var g__15894__auto___16062 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__15894__auto___16062){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16063 = arguments.length;
var i__15524__auto___16064 = (0);
while(true){
if((i__15524__auto___16064 < len__15523__auto___16063)){
args__15530__auto__.push((arguments[i__15524__auto___16064]));

var G__16065 = (i__15524__auto___16064 + (1));
i__15524__auto___16064 = G__16065;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16062))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16062){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16062);
});})(g__15894__auto___16062))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__15894__auto___16062){
return (function (seq16014){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16014));
});})(g__15894__auto___16062))
;


var g__15894__auto___16066 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__15894__auto___16066){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16067 = arguments.length;
var i__15524__auto___16068 = (0);
while(true){
if((i__15524__auto___16068 < len__15523__auto___16067)){
args__15530__auto__.push((arguments[i__15524__auto___16068]));

var G__16069 = (i__15524__auto___16068 + (1));
i__15524__auto___16068 = G__16069;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16066))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16066){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16066);
});})(g__15894__auto___16066))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__15894__auto___16066){
return (function (seq16015){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16015));
});})(g__15894__auto___16066))
;


var g__15894__auto___16070 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__15894__auto___16070){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16071 = arguments.length;
var i__15524__auto___16072 = (0);
while(true){
if((i__15524__auto___16072 < len__15523__auto___16071)){
args__15530__auto__.push((arguments[i__15524__auto___16072]));

var G__16073 = (i__15524__auto___16072 + (1));
i__15524__auto___16072 = G__16073;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16070))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16070){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16070);
});})(g__15894__auto___16070))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__15894__auto___16070){
return (function (seq16016){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16016));
});})(g__15894__auto___16070))
;


var g__15894__auto___16074 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__15894__auto___16074){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16075 = arguments.length;
var i__15524__auto___16076 = (0);
while(true){
if((i__15524__auto___16076 < len__15523__auto___16075)){
args__15530__auto__.push((arguments[i__15524__auto___16076]));

var G__16077 = (i__15524__auto___16076 + (1));
i__15524__auto___16076 = G__16077;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16074))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16074){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16074);
});})(g__15894__auto___16074))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__15894__auto___16074){
return (function (seq16017){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16017));
});})(g__15894__auto___16074))
;


var g__15894__auto___16078 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__15894__auto___16078){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16079 = arguments.length;
var i__15524__auto___16080 = (0);
while(true){
if((i__15524__auto___16080 < len__15523__auto___16079)){
args__15530__auto__.push((arguments[i__15524__auto___16080]));

var G__16081 = (i__15524__auto___16080 + (1));
i__15524__auto___16080 = G__16081;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16078))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16078){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16078);
});})(g__15894__auto___16078))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__15894__auto___16078){
return (function (seq16018){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16018));
});})(g__15894__auto___16078))
;


var g__15894__auto___16082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__15894__auto___16082){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16083 = arguments.length;
var i__15524__auto___16084 = (0);
while(true){
if((i__15524__auto___16084 < len__15523__auto___16083)){
args__15530__auto__.push((arguments[i__15524__auto___16084]));

var G__16085 = (i__15524__auto___16084 + (1));
i__15524__auto___16084 = G__16085;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16082))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16082){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16082);
});})(g__15894__auto___16082))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__15894__auto___16082){
return (function (seq16019){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16019));
});})(g__15894__auto___16082))
;


var g__15894__auto___16086 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__15894__auto___16086){
return (function cljs$spec$impl$gen$string(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16087 = arguments.length;
var i__15524__auto___16088 = (0);
while(true){
if((i__15524__auto___16088 < len__15523__auto___16087)){
args__15530__auto__.push((arguments[i__15524__auto___16088]));

var G__16089 = (i__15524__auto___16088 + (1));
i__15524__auto___16088 = G__16089;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16086))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16086){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16086);
});})(g__15894__auto___16086))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__15894__auto___16086){
return (function (seq16020){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16020));
});})(g__15894__auto___16086))
;


var g__15894__auto___16090 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__15894__auto___16090){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16091 = arguments.length;
var i__15524__auto___16092 = (0);
while(true){
if((i__15524__auto___16092 < len__15523__auto___16091)){
args__15530__auto__.push((arguments[i__15524__auto___16092]));

var G__16093 = (i__15524__auto___16092 + (1));
i__15524__auto___16092 = G__16093;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16090))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16090){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16090);
});})(g__15894__auto___16090))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__15894__auto___16090){
return (function (seq16021){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16021));
});})(g__15894__auto___16090))
;


var g__15894__auto___16094 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__15894__auto___16094){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16095 = arguments.length;
var i__15524__auto___16096 = (0);
while(true){
if((i__15524__auto___16096 < len__15523__auto___16095)){
args__15530__auto__.push((arguments[i__15524__auto___16096]));

var G__16097 = (i__15524__auto___16096 + (1));
i__15524__auto___16096 = G__16097;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16094))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16094){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16094);
});})(g__15894__auto___16094))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__15894__auto___16094){
return (function (seq16022){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16022));
});})(g__15894__auto___16094))
;


var g__15894__auto___16098 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__15894__auto___16098){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16099 = arguments.length;
var i__15524__auto___16100 = (0);
while(true){
if((i__15524__auto___16100 < len__15523__auto___16099)){
args__15530__auto__.push((arguments[i__15524__auto___16100]));

var G__16101 = (i__15524__auto___16100 + (1));
i__15524__auto___16100 = G__16101;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16098))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16098){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16098);
});})(g__15894__auto___16098))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__15894__auto___16098){
return (function (seq16023){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16023));
});})(g__15894__auto___16098))
;


var g__15894__auto___16102 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__15894__auto___16102){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16103 = arguments.length;
var i__15524__auto___16104 = (0);
while(true){
if((i__15524__auto___16104 < len__15523__auto___16103)){
args__15530__auto__.push((arguments[i__15524__auto___16104]));

var G__16105 = (i__15524__auto___16104 + (1));
i__15524__auto___16104 = G__16105;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16102))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16102){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16102);
});})(g__15894__auto___16102))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__15894__auto___16102){
return (function (seq16024){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16024));
});})(g__15894__auto___16102))
;


var g__15894__auto___16106 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__15894__auto___16106){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16107 = arguments.length;
var i__15524__auto___16108 = (0);
while(true){
if((i__15524__auto___16108 < len__15523__auto___16107)){
args__15530__auto__.push((arguments[i__15524__auto___16108]));

var G__16109 = (i__15524__auto___16108 + (1));
i__15524__auto___16108 = G__16109;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});})(g__15894__auto___16106))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15894__auto___16106){
return (function (args){
return cljs.core.deref.call(null,g__15894__auto___16106);
});})(g__15894__auto___16106))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__15894__auto___16106){
return (function (seq16025){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16025));
});})(g__15894__auto___16106))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__15530__auto__ = [];
var len__15523__auto___16112 = arguments.length;
var i__15524__auto___16113 = (0);
while(true){
if((i__15524__auto___16113 < len__15523__auto___16112)){
args__15530__auto__.push((arguments[i__15524__auto___16113]));

var G__16114 = (i__15524__auto___16113 + (1));
i__15524__auto___16113 = G__16114;
continue;
} else {
}
break;
}

var argseq__15531__auto__ = ((((0) < args__15530__auto__.length))?(new cljs.core.IndexedSeq(args__15530__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__15531__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__16110_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__16110_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq16111){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16111));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__16115_SHARP_){
return (new Date(p1__16115_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map
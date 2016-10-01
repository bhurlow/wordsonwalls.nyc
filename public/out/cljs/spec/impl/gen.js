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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__14994__auto__,writer__14995__auto__,opt__14996__auto__){
return cljs.core._write.call(null,writer__14995__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__15532__auto__ = [];
var len__15525__auto___15912 = arguments.length;
var i__15526__auto___15913 = (0);
while(true){
if((i__15526__auto___15913 < len__15525__auto___15912)){
args__15532__auto__.push((arguments[i__15526__auto___15913]));

var G__15914 = (i__15526__auto___15913 + (1));
i__15526__auto___15913 = G__15914;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq15911){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15911));
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
var args__15532__auto__ = [];
var len__15525__auto___15916 = arguments.length;
var i__15526__auto___15917 = (0);
while(true){
if((i__15526__auto___15917 < len__15525__auto___15916)){
args__15532__auto__.push((arguments[i__15526__auto___15917]));

var G__15918 = (i__15526__auto___15917 + (1));
i__15526__auto___15917 = G__15918;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq15915){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15915));
});

var g_QMARK__15919 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_15920 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15919){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__15919))
,null));
var mkg_15921 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15919,g_15920){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__15919,g_15920))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__15919,g_15920,mkg_15921){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__15919).call(null,x);
});})(g_QMARK__15919,g_15920,mkg_15921))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__15919,g_15920,mkg_15921){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_15921).call(null,gfn);
});})(g_QMARK__15919,g_15920,mkg_15921))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__15919,g_15920,mkg_15921){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_15920).call(null,generator);
});})(g_QMARK__15919,g_15920,mkg_15921))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__15883__auto___15939 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__15883__auto___15939){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15940 = arguments.length;
var i__15526__auto___15941 = (0);
while(true){
if((i__15526__auto___15941 < len__15525__auto___15940)){
args__15532__auto__.push((arguments[i__15526__auto___15941]));

var G__15942 = (i__15526__auto___15941 + (1));
i__15526__auto___15941 = G__15942;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15939))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15939){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15939),args);
});})(g__15883__auto___15939))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__15883__auto___15939){
return (function (seq15922){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15922));
});})(g__15883__auto___15939))
;


var g__15883__auto___15943 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__15883__auto___15943){
return (function cljs$spec$impl$gen$list(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15944 = arguments.length;
var i__15526__auto___15945 = (0);
while(true){
if((i__15526__auto___15945 < len__15525__auto___15944)){
args__15532__auto__.push((arguments[i__15526__auto___15945]));

var G__15946 = (i__15526__auto___15945 + (1));
i__15526__auto___15945 = G__15946;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15943))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15943){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15943),args);
});})(g__15883__auto___15943))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__15883__auto___15943){
return (function (seq15923){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15923));
});})(g__15883__auto___15943))
;


var g__15883__auto___15947 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__15883__auto___15947){
return (function cljs$spec$impl$gen$map(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15948 = arguments.length;
var i__15526__auto___15949 = (0);
while(true){
if((i__15526__auto___15949 < len__15525__auto___15948)){
args__15532__auto__.push((arguments[i__15526__auto___15949]));

var G__15950 = (i__15526__auto___15949 + (1));
i__15526__auto___15949 = G__15950;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15947))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15947){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15947),args);
});})(g__15883__auto___15947))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__15883__auto___15947){
return (function (seq15924){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15924));
});})(g__15883__auto___15947))
;


var g__15883__auto___15951 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__15883__auto___15951){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15952 = arguments.length;
var i__15526__auto___15953 = (0);
while(true){
if((i__15526__auto___15953 < len__15525__auto___15952)){
args__15532__auto__.push((arguments[i__15526__auto___15953]));

var G__15954 = (i__15526__auto___15953 + (1));
i__15526__auto___15953 = G__15954;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15951))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15951){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15951),args);
});})(g__15883__auto___15951))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__15883__auto___15951){
return (function (seq15925){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15925));
});})(g__15883__auto___15951))
;


var g__15883__auto___15955 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__15883__auto___15955){
return (function cljs$spec$impl$gen$set(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15956 = arguments.length;
var i__15526__auto___15957 = (0);
while(true){
if((i__15526__auto___15957 < len__15525__auto___15956)){
args__15532__auto__.push((arguments[i__15526__auto___15957]));

var G__15958 = (i__15526__auto___15957 + (1));
i__15526__auto___15957 = G__15958;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15955))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15955){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15955),args);
});})(g__15883__auto___15955))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__15883__auto___15955){
return (function (seq15926){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15926));
});})(g__15883__auto___15955))
;


var g__15883__auto___15959 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__15883__auto___15959){
return (function cljs$spec$impl$gen$vector(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15960 = arguments.length;
var i__15526__auto___15961 = (0);
while(true){
if((i__15526__auto___15961 < len__15525__auto___15960)){
args__15532__auto__.push((arguments[i__15526__auto___15961]));

var G__15962 = (i__15526__auto___15961 + (1));
i__15526__auto___15961 = G__15962;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15959))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15959){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15959),args);
});})(g__15883__auto___15959))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__15883__auto___15959){
return (function (seq15927){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15927));
});})(g__15883__auto___15959))
;


var g__15883__auto___15963 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__15883__auto___15963){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15964 = arguments.length;
var i__15526__auto___15965 = (0);
while(true){
if((i__15526__auto___15965 < len__15525__auto___15964)){
args__15532__auto__.push((arguments[i__15526__auto___15965]));

var G__15966 = (i__15526__auto___15965 + (1));
i__15526__auto___15965 = G__15966;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15963))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15963){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15963),args);
});})(g__15883__auto___15963))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__15883__auto___15963){
return (function (seq15928){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15928));
});})(g__15883__auto___15963))
;


var g__15883__auto___15967 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__15883__auto___15967){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15968 = arguments.length;
var i__15526__auto___15969 = (0);
while(true){
if((i__15526__auto___15969 < len__15525__auto___15968)){
args__15532__auto__.push((arguments[i__15526__auto___15969]));

var G__15970 = (i__15526__auto___15969 + (1));
i__15526__auto___15969 = G__15970;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15967))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15967){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15967),args);
});})(g__15883__auto___15967))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__15883__auto___15967){
return (function (seq15929){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15929));
});})(g__15883__auto___15967))
;


var g__15883__auto___15971 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__15883__auto___15971){
return (function cljs$spec$impl$gen$elements(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15972 = arguments.length;
var i__15526__auto___15973 = (0);
while(true){
if((i__15526__auto___15973 < len__15525__auto___15972)){
args__15532__auto__.push((arguments[i__15526__auto___15973]));

var G__15974 = (i__15526__auto___15973 + (1));
i__15526__auto___15973 = G__15974;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15971))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15971){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15971),args);
});})(g__15883__auto___15971))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__15883__auto___15971){
return (function (seq15930){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15930));
});})(g__15883__auto___15971))
;


var g__15883__auto___15975 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__15883__auto___15975){
return (function cljs$spec$impl$gen$bind(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15976 = arguments.length;
var i__15526__auto___15977 = (0);
while(true){
if((i__15526__auto___15977 < len__15525__auto___15976)){
args__15532__auto__.push((arguments[i__15526__auto___15977]));

var G__15978 = (i__15526__auto___15977 + (1));
i__15526__auto___15977 = G__15978;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15975))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15975){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15975),args);
});})(g__15883__auto___15975))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__15883__auto___15975){
return (function (seq15931){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15931));
});})(g__15883__auto___15975))
;


var g__15883__auto___15979 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__15883__auto___15979){
return (function cljs$spec$impl$gen$choose(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15980 = arguments.length;
var i__15526__auto___15981 = (0);
while(true){
if((i__15526__auto___15981 < len__15525__auto___15980)){
args__15532__auto__.push((arguments[i__15526__auto___15981]));

var G__15982 = (i__15526__auto___15981 + (1));
i__15526__auto___15981 = G__15982;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15979))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15979){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15979),args);
});})(g__15883__auto___15979))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__15883__auto___15979){
return (function (seq15932){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15932));
});})(g__15883__auto___15979))
;


var g__15883__auto___15983 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__15883__auto___15983){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15984 = arguments.length;
var i__15526__auto___15985 = (0);
while(true){
if((i__15526__auto___15985 < len__15525__auto___15984)){
args__15532__auto__.push((arguments[i__15526__auto___15985]));

var G__15986 = (i__15526__auto___15985 + (1));
i__15526__auto___15985 = G__15986;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15983))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15983){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15983),args);
});})(g__15883__auto___15983))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__15883__auto___15983){
return (function (seq15933){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15933));
});})(g__15883__auto___15983))
;


var g__15883__auto___15987 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__15883__auto___15987){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15988 = arguments.length;
var i__15526__auto___15989 = (0);
while(true){
if((i__15526__auto___15989 < len__15525__auto___15988)){
args__15532__auto__.push((arguments[i__15526__auto___15989]));

var G__15990 = (i__15526__auto___15989 + (1));
i__15526__auto___15989 = G__15990;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15987))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15987){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15987),args);
});})(g__15883__auto___15987))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__15883__auto___15987){
return (function (seq15934){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15934));
});})(g__15883__auto___15987))
;


var g__15883__auto___15991 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__15883__auto___15991){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15992 = arguments.length;
var i__15526__auto___15993 = (0);
while(true){
if((i__15526__auto___15993 < len__15525__auto___15992)){
args__15532__auto__.push((arguments[i__15526__auto___15993]));

var G__15994 = (i__15526__auto___15993 + (1));
i__15526__auto___15993 = G__15994;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15991))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15991){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15991),args);
});})(g__15883__auto___15991))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__15883__auto___15991){
return (function (seq15935){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15935));
});})(g__15883__auto___15991))
;


var g__15883__auto___15995 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__15883__auto___15995){
return (function cljs$spec$impl$gen$sample(var_args){
var args__15532__auto__ = [];
var len__15525__auto___15996 = arguments.length;
var i__15526__auto___15997 = (0);
while(true){
if((i__15526__auto___15997 < len__15525__auto___15996)){
args__15532__auto__.push((arguments[i__15526__auto___15997]));

var G__15998 = (i__15526__auto___15997 + (1));
i__15526__auto___15997 = G__15998;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15995))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15995){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15995),args);
});})(g__15883__auto___15995))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__15883__auto___15995){
return (function (seq15936){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15936));
});})(g__15883__auto___15995))
;


var g__15883__auto___15999 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__15883__auto___15999){
return (function cljs$spec$impl$gen$return(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16000 = arguments.length;
var i__15526__auto___16001 = (0);
while(true){
if((i__15526__auto___16001 < len__15525__auto___16000)){
args__15532__auto__.push((arguments[i__15526__auto___16001]));

var G__16002 = (i__15526__auto___16001 + (1));
i__15526__auto___16001 = G__16002;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___15999))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___15999){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___15999),args);
});})(g__15883__auto___15999))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__15883__auto___15999){
return (function (seq15937){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15937));
});})(g__15883__auto___15999))
;


var g__15883__auto___16003 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__15883__auto___16003){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16004 = arguments.length;
var i__15526__auto___16005 = (0);
while(true){
if((i__15526__auto___16005 < len__15525__auto___16004)){
args__15532__auto__.push((arguments[i__15526__auto___16005]));

var G__16006 = (i__15526__auto___16005 + (1));
i__15526__auto___16005 = G__16006;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15883__auto___16003))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15883__auto___16003){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15883__auto___16003),args);
});})(g__15883__auto___16003))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__15883__auto___16003){
return (function (seq15938){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15938));
});})(g__15883__auto___16003))
;

var g__15896__auto___16028 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__15896__auto___16028){
return (function cljs$spec$impl$gen$any(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16029 = arguments.length;
var i__15526__auto___16030 = (0);
while(true){
if((i__15526__auto___16030 < len__15525__auto___16029)){
args__15532__auto__.push((arguments[i__15526__auto___16030]));

var G__16031 = (i__15526__auto___16030 + (1));
i__15526__auto___16030 = G__16031;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16028))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16028){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16028);
});})(g__15896__auto___16028))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__15896__auto___16028){
return (function (seq16007){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16007));
});})(g__15896__auto___16028))
;


var g__15896__auto___16032 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__15896__auto___16032){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16033 = arguments.length;
var i__15526__auto___16034 = (0);
while(true){
if((i__15526__auto___16034 < len__15525__auto___16033)){
args__15532__auto__.push((arguments[i__15526__auto___16034]));

var G__16035 = (i__15526__auto___16034 + (1));
i__15526__auto___16034 = G__16035;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16032))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16032){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16032);
});})(g__15896__auto___16032))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__15896__auto___16032){
return (function (seq16008){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16008));
});})(g__15896__auto___16032))
;


var g__15896__auto___16036 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__15896__auto___16036){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16037 = arguments.length;
var i__15526__auto___16038 = (0);
while(true){
if((i__15526__auto___16038 < len__15525__auto___16037)){
args__15532__auto__.push((arguments[i__15526__auto___16038]));

var G__16039 = (i__15526__auto___16038 + (1));
i__15526__auto___16038 = G__16039;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16036))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16036){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16036);
});})(g__15896__auto___16036))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__15896__auto___16036){
return (function (seq16009){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16009));
});})(g__15896__auto___16036))
;


var g__15896__auto___16040 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__15896__auto___16040){
return (function cljs$spec$impl$gen$char(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16041 = arguments.length;
var i__15526__auto___16042 = (0);
while(true){
if((i__15526__auto___16042 < len__15525__auto___16041)){
args__15532__auto__.push((arguments[i__15526__auto___16042]));

var G__16043 = (i__15526__auto___16042 + (1));
i__15526__auto___16042 = G__16043;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16040))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16040){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16040);
});})(g__15896__auto___16040))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__15896__auto___16040){
return (function (seq16010){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16010));
});})(g__15896__auto___16040))
;


var g__15896__auto___16044 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__15896__auto___16044){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16045 = arguments.length;
var i__15526__auto___16046 = (0);
while(true){
if((i__15526__auto___16046 < len__15525__auto___16045)){
args__15532__auto__.push((arguments[i__15526__auto___16046]));

var G__16047 = (i__15526__auto___16046 + (1));
i__15526__auto___16046 = G__16047;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16044))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16044){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16044);
});})(g__15896__auto___16044))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__15896__auto___16044){
return (function (seq16011){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16011));
});})(g__15896__auto___16044))
;


var g__15896__auto___16048 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__15896__auto___16048){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16049 = arguments.length;
var i__15526__auto___16050 = (0);
while(true){
if((i__15526__auto___16050 < len__15525__auto___16049)){
args__15532__auto__.push((arguments[i__15526__auto___16050]));

var G__16051 = (i__15526__auto___16050 + (1));
i__15526__auto___16050 = G__16051;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16048))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16048){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16048);
});})(g__15896__auto___16048))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__15896__auto___16048){
return (function (seq16012){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16012));
});})(g__15896__auto___16048))
;


var g__15896__auto___16052 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__15896__auto___16052){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16053 = arguments.length;
var i__15526__auto___16054 = (0);
while(true){
if((i__15526__auto___16054 < len__15525__auto___16053)){
args__15532__auto__.push((arguments[i__15526__auto___16054]));

var G__16055 = (i__15526__auto___16054 + (1));
i__15526__auto___16054 = G__16055;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16052))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16052){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16052);
});})(g__15896__auto___16052))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__15896__auto___16052){
return (function (seq16013){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16013));
});})(g__15896__auto___16052))
;


var g__15896__auto___16056 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__15896__auto___16056){
return (function cljs$spec$impl$gen$double(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16057 = arguments.length;
var i__15526__auto___16058 = (0);
while(true){
if((i__15526__auto___16058 < len__15525__auto___16057)){
args__15532__auto__.push((arguments[i__15526__auto___16058]));

var G__16059 = (i__15526__auto___16058 + (1));
i__15526__auto___16058 = G__16059;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16056))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16056){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16056);
});})(g__15896__auto___16056))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__15896__auto___16056){
return (function (seq16014){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16014));
});})(g__15896__auto___16056))
;


var g__15896__auto___16060 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__15896__auto___16060){
return (function cljs$spec$impl$gen$int(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16061 = arguments.length;
var i__15526__auto___16062 = (0);
while(true){
if((i__15526__auto___16062 < len__15525__auto___16061)){
args__15532__auto__.push((arguments[i__15526__auto___16062]));

var G__16063 = (i__15526__auto___16062 + (1));
i__15526__auto___16062 = G__16063;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16060))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16060){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16060);
});})(g__15896__auto___16060))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__15896__auto___16060){
return (function (seq16015){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16015));
});})(g__15896__auto___16060))
;


var g__15896__auto___16064 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__15896__auto___16064){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16065 = arguments.length;
var i__15526__auto___16066 = (0);
while(true){
if((i__15526__auto___16066 < len__15525__auto___16065)){
args__15532__auto__.push((arguments[i__15526__auto___16066]));

var G__16067 = (i__15526__auto___16066 + (1));
i__15526__auto___16066 = G__16067;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16064))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16064){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16064);
});})(g__15896__auto___16064))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__15896__auto___16064){
return (function (seq16016){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16016));
});})(g__15896__auto___16064))
;


var g__15896__auto___16068 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__15896__auto___16068){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16069 = arguments.length;
var i__15526__auto___16070 = (0);
while(true){
if((i__15526__auto___16070 < len__15525__auto___16069)){
args__15532__auto__.push((arguments[i__15526__auto___16070]));

var G__16071 = (i__15526__auto___16070 + (1));
i__15526__auto___16070 = G__16071;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16068))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16068){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16068);
});})(g__15896__auto___16068))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__15896__auto___16068){
return (function (seq16017){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16017));
});})(g__15896__auto___16068))
;


var g__15896__auto___16072 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__15896__auto___16072){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16073 = arguments.length;
var i__15526__auto___16074 = (0);
while(true){
if((i__15526__auto___16074 < len__15525__auto___16073)){
args__15532__auto__.push((arguments[i__15526__auto___16074]));

var G__16075 = (i__15526__auto___16074 + (1));
i__15526__auto___16074 = G__16075;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16072))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16072){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16072);
});})(g__15896__auto___16072))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__15896__auto___16072){
return (function (seq16018){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16018));
});})(g__15896__auto___16072))
;


var g__15896__auto___16076 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__15896__auto___16076){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16077 = arguments.length;
var i__15526__auto___16078 = (0);
while(true){
if((i__15526__auto___16078 < len__15525__auto___16077)){
args__15532__auto__.push((arguments[i__15526__auto___16078]));

var G__16079 = (i__15526__auto___16078 + (1));
i__15526__auto___16078 = G__16079;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16076))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16076){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16076);
});})(g__15896__auto___16076))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__15896__auto___16076){
return (function (seq16019){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16019));
});})(g__15896__auto___16076))
;


var g__15896__auto___16080 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__15896__auto___16080){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16081 = arguments.length;
var i__15526__auto___16082 = (0);
while(true){
if((i__15526__auto___16082 < len__15525__auto___16081)){
args__15532__auto__.push((arguments[i__15526__auto___16082]));

var G__16083 = (i__15526__auto___16082 + (1));
i__15526__auto___16082 = G__16083;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16080))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16080){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16080);
});})(g__15896__auto___16080))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__15896__auto___16080){
return (function (seq16020){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16020));
});})(g__15896__auto___16080))
;


var g__15896__auto___16084 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__15896__auto___16084){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16085 = arguments.length;
var i__15526__auto___16086 = (0);
while(true){
if((i__15526__auto___16086 < len__15525__auto___16085)){
args__15532__auto__.push((arguments[i__15526__auto___16086]));

var G__16087 = (i__15526__auto___16086 + (1));
i__15526__auto___16086 = G__16087;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16084))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16084){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16084);
});})(g__15896__auto___16084))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__15896__auto___16084){
return (function (seq16021){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16021));
});})(g__15896__auto___16084))
;


var g__15896__auto___16088 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__15896__auto___16088){
return (function cljs$spec$impl$gen$string(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16089 = arguments.length;
var i__15526__auto___16090 = (0);
while(true){
if((i__15526__auto___16090 < len__15525__auto___16089)){
args__15532__auto__.push((arguments[i__15526__auto___16090]));

var G__16091 = (i__15526__auto___16090 + (1));
i__15526__auto___16090 = G__16091;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16088))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16088){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16088);
});})(g__15896__auto___16088))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__15896__auto___16088){
return (function (seq16022){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16022));
});})(g__15896__auto___16088))
;


var g__15896__auto___16092 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__15896__auto___16092){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16093 = arguments.length;
var i__15526__auto___16094 = (0);
while(true){
if((i__15526__auto___16094 < len__15525__auto___16093)){
args__15532__auto__.push((arguments[i__15526__auto___16094]));

var G__16095 = (i__15526__auto___16094 + (1));
i__15526__auto___16094 = G__16095;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16092))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16092){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16092);
});})(g__15896__auto___16092))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__15896__auto___16092){
return (function (seq16023){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16023));
});})(g__15896__auto___16092))
;


var g__15896__auto___16096 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__15896__auto___16096){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16097 = arguments.length;
var i__15526__auto___16098 = (0);
while(true){
if((i__15526__auto___16098 < len__15525__auto___16097)){
args__15532__auto__.push((arguments[i__15526__auto___16098]));

var G__16099 = (i__15526__auto___16098 + (1));
i__15526__auto___16098 = G__16099;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16096))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16096){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16096);
});})(g__15896__auto___16096))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__15896__auto___16096){
return (function (seq16024){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16024));
});})(g__15896__auto___16096))
;


var g__15896__auto___16100 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__15896__auto___16100){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16101 = arguments.length;
var i__15526__auto___16102 = (0);
while(true){
if((i__15526__auto___16102 < len__15525__auto___16101)){
args__15532__auto__.push((arguments[i__15526__auto___16102]));

var G__16103 = (i__15526__auto___16102 + (1));
i__15526__auto___16102 = G__16103;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16100))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16100){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16100);
});})(g__15896__auto___16100))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__15896__auto___16100){
return (function (seq16025){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16025));
});})(g__15896__auto___16100))
;


var g__15896__auto___16104 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__15896__auto___16104){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16105 = arguments.length;
var i__15526__auto___16106 = (0);
while(true){
if((i__15526__auto___16106 < len__15525__auto___16105)){
args__15532__auto__.push((arguments[i__15526__auto___16106]));

var G__16107 = (i__15526__auto___16106 + (1));
i__15526__auto___16106 = G__16107;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16104))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16104){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16104);
});})(g__15896__auto___16104))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__15896__auto___16104){
return (function (seq16026){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16026));
});})(g__15896__auto___16104))
;


var g__15896__auto___16108 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__15896__auto___16108){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16109 = arguments.length;
var i__15526__auto___16110 = (0);
while(true){
if((i__15526__auto___16110 < len__15525__auto___16109)){
args__15532__auto__.push((arguments[i__15526__auto___16110]));

var G__16111 = (i__15526__auto___16110 + (1));
i__15526__auto___16110 = G__16111;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});})(g__15896__auto___16108))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15896__auto___16108){
return (function (args){
return cljs.core.deref.call(null,g__15896__auto___16108);
});})(g__15896__auto___16108))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__15896__auto___16108){
return (function (seq16027){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16027));
});})(g__15896__auto___16108))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__15532__auto__ = [];
var len__15525__auto___16114 = arguments.length;
var i__15526__auto___16115 = (0);
while(true){
if((i__15526__auto___16115 < len__15525__auto___16114)){
args__15532__auto__.push((arguments[i__15526__auto___16115]));

var G__16116 = (i__15526__auto___16115 + (1));
i__15526__auto___16115 = G__16116;
continue;
} else {
}
break;
}

var argseq__15533__auto__ = ((((0) < args__15532__auto__.length))?(new cljs.core.IndexedSeq(args__15532__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__15533__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__16112_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__16112_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq16113){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16113));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__16117_SHARP_){
return (new Date(p1__16117_SHARP_));
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
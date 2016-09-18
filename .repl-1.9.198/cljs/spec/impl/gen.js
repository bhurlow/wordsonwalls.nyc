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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__16365__auto__,writer__16366__auto__,opt__16367__auto__){
return cljs.core._write.call(null,writer__16366__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__16903__auto__ = [];
var len__16896__auto___21416 = arguments.length;
var i__16897__auto___21417 = (0);
while(true){
if((i__16897__auto___21417 < len__16896__auto___21416)){
args__16903__auto__.push((arguments[i__16897__auto___21417]));

var G__21418 = (i__16897__auto___21417 + (1));
i__16897__auto___21417 = G__21418;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq21415){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21415));
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
var args__16903__auto__ = [];
var len__16896__auto___21420 = arguments.length;
var i__16897__auto___21421 = (0);
while(true){
if((i__16897__auto___21421 < len__16896__auto___21420)){
args__16903__auto__.push((arguments[i__16897__auto___21421]));

var G__21422 = (i__16897__auto___21421 + (1));
i__16897__auto___21421 = G__21422;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq21419){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21419));
});

var g_QMARK__21423 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_21424 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__21423){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__21423))
,null));
var mkg_21425 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__21423,g_21424){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__21423,g_21424))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__21423,g_21424,mkg_21425){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__21423).call(null,x);
});})(g_QMARK__21423,g_21424,mkg_21425))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__21423,g_21424,mkg_21425){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_21425).call(null,gfn);
});})(g_QMARK__21423,g_21424,mkg_21425))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__21423,g_21424,mkg_21425){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_21424).call(null,generator);
});})(g_QMARK__21423,g_21424,mkg_21425))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__21387__auto___21443 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__21387__auto___21443){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21444 = arguments.length;
var i__16897__auto___21445 = (0);
while(true){
if((i__16897__auto___21445 < len__16896__auto___21444)){
args__16903__auto__.push((arguments[i__16897__auto___21445]));

var G__21446 = (i__16897__auto___21445 + (1));
i__16897__auto___21445 = G__21446;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21443))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21443){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21443),args);
});})(g__21387__auto___21443))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__21387__auto___21443){
return (function (seq21426){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21426));
});})(g__21387__auto___21443))
;


var g__21387__auto___21447 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__21387__auto___21447){
return (function cljs$spec$impl$gen$list(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21448 = arguments.length;
var i__16897__auto___21449 = (0);
while(true){
if((i__16897__auto___21449 < len__16896__auto___21448)){
args__16903__auto__.push((arguments[i__16897__auto___21449]));

var G__21450 = (i__16897__auto___21449 + (1));
i__16897__auto___21449 = G__21450;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21447))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21447){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21447),args);
});})(g__21387__auto___21447))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__21387__auto___21447){
return (function (seq21427){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21427));
});})(g__21387__auto___21447))
;


var g__21387__auto___21451 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__21387__auto___21451){
return (function cljs$spec$impl$gen$map(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21452 = arguments.length;
var i__16897__auto___21453 = (0);
while(true){
if((i__16897__auto___21453 < len__16896__auto___21452)){
args__16903__auto__.push((arguments[i__16897__auto___21453]));

var G__21454 = (i__16897__auto___21453 + (1));
i__16897__auto___21453 = G__21454;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21451))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21451){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21451),args);
});})(g__21387__auto___21451))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__21387__auto___21451){
return (function (seq21428){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21428));
});})(g__21387__auto___21451))
;


var g__21387__auto___21455 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__21387__auto___21455){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21456 = arguments.length;
var i__16897__auto___21457 = (0);
while(true){
if((i__16897__auto___21457 < len__16896__auto___21456)){
args__16903__auto__.push((arguments[i__16897__auto___21457]));

var G__21458 = (i__16897__auto___21457 + (1));
i__16897__auto___21457 = G__21458;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21455))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21455){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21455),args);
});})(g__21387__auto___21455))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__21387__auto___21455){
return (function (seq21429){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21429));
});})(g__21387__auto___21455))
;


var g__21387__auto___21459 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__21387__auto___21459){
return (function cljs$spec$impl$gen$set(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21460 = arguments.length;
var i__16897__auto___21461 = (0);
while(true){
if((i__16897__auto___21461 < len__16896__auto___21460)){
args__16903__auto__.push((arguments[i__16897__auto___21461]));

var G__21462 = (i__16897__auto___21461 + (1));
i__16897__auto___21461 = G__21462;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21459))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21459){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21459),args);
});})(g__21387__auto___21459))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__21387__auto___21459){
return (function (seq21430){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21430));
});})(g__21387__auto___21459))
;


var g__21387__auto___21463 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__21387__auto___21463){
return (function cljs$spec$impl$gen$vector(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21464 = arguments.length;
var i__16897__auto___21465 = (0);
while(true){
if((i__16897__auto___21465 < len__16896__auto___21464)){
args__16903__auto__.push((arguments[i__16897__auto___21465]));

var G__21466 = (i__16897__auto___21465 + (1));
i__16897__auto___21465 = G__21466;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21463))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21463){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21463),args);
});})(g__21387__auto___21463))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__21387__auto___21463){
return (function (seq21431){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21431));
});})(g__21387__auto___21463))
;


var g__21387__auto___21467 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__21387__auto___21467){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21468 = arguments.length;
var i__16897__auto___21469 = (0);
while(true){
if((i__16897__auto___21469 < len__16896__auto___21468)){
args__16903__auto__.push((arguments[i__16897__auto___21469]));

var G__21470 = (i__16897__auto___21469 + (1));
i__16897__auto___21469 = G__21470;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21467))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21467){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21467),args);
});})(g__21387__auto___21467))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__21387__auto___21467){
return (function (seq21432){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21432));
});})(g__21387__auto___21467))
;


var g__21387__auto___21471 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__21387__auto___21471){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21472 = arguments.length;
var i__16897__auto___21473 = (0);
while(true){
if((i__16897__auto___21473 < len__16896__auto___21472)){
args__16903__auto__.push((arguments[i__16897__auto___21473]));

var G__21474 = (i__16897__auto___21473 + (1));
i__16897__auto___21473 = G__21474;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21471))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21471){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21471),args);
});})(g__21387__auto___21471))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__21387__auto___21471){
return (function (seq21433){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21433));
});})(g__21387__auto___21471))
;


var g__21387__auto___21475 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__21387__auto___21475){
return (function cljs$spec$impl$gen$elements(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21476 = arguments.length;
var i__16897__auto___21477 = (0);
while(true){
if((i__16897__auto___21477 < len__16896__auto___21476)){
args__16903__auto__.push((arguments[i__16897__auto___21477]));

var G__21478 = (i__16897__auto___21477 + (1));
i__16897__auto___21477 = G__21478;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21475))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21475){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21475),args);
});})(g__21387__auto___21475))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__21387__auto___21475){
return (function (seq21434){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21434));
});})(g__21387__auto___21475))
;


var g__21387__auto___21479 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__21387__auto___21479){
return (function cljs$spec$impl$gen$bind(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21480 = arguments.length;
var i__16897__auto___21481 = (0);
while(true){
if((i__16897__auto___21481 < len__16896__auto___21480)){
args__16903__auto__.push((arguments[i__16897__auto___21481]));

var G__21482 = (i__16897__auto___21481 + (1));
i__16897__auto___21481 = G__21482;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21479))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21479){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21479),args);
});})(g__21387__auto___21479))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__21387__auto___21479){
return (function (seq21435){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21435));
});})(g__21387__auto___21479))
;


var g__21387__auto___21483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__21387__auto___21483){
return (function cljs$spec$impl$gen$choose(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21484 = arguments.length;
var i__16897__auto___21485 = (0);
while(true){
if((i__16897__auto___21485 < len__16896__auto___21484)){
args__16903__auto__.push((arguments[i__16897__auto___21485]));

var G__21486 = (i__16897__auto___21485 + (1));
i__16897__auto___21485 = G__21486;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21483))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21483){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21483),args);
});})(g__21387__auto___21483))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__21387__auto___21483){
return (function (seq21436){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21436));
});})(g__21387__auto___21483))
;


var g__21387__auto___21487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__21387__auto___21487){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21488 = arguments.length;
var i__16897__auto___21489 = (0);
while(true){
if((i__16897__auto___21489 < len__16896__auto___21488)){
args__16903__auto__.push((arguments[i__16897__auto___21489]));

var G__21490 = (i__16897__auto___21489 + (1));
i__16897__auto___21489 = G__21490;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21487))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21487){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21487),args);
});})(g__21387__auto___21487))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__21387__auto___21487){
return (function (seq21437){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21437));
});})(g__21387__auto___21487))
;


var g__21387__auto___21491 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__21387__auto___21491){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21492 = arguments.length;
var i__16897__auto___21493 = (0);
while(true){
if((i__16897__auto___21493 < len__16896__auto___21492)){
args__16903__auto__.push((arguments[i__16897__auto___21493]));

var G__21494 = (i__16897__auto___21493 + (1));
i__16897__auto___21493 = G__21494;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21491))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21491){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21491),args);
});})(g__21387__auto___21491))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__21387__auto___21491){
return (function (seq21438){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21438));
});})(g__21387__auto___21491))
;


var g__21387__auto___21495 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__21387__auto___21495){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21496 = arguments.length;
var i__16897__auto___21497 = (0);
while(true){
if((i__16897__auto___21497 < len__16896__auto___21496)){
args__16903__auto__.push((arguments[i__16897__auto___21497]));

var G__21498 = (i__16897__auto___21497 + (1));
i__16897__auto___21497 = G__21498;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21495))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21495){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21495),args);
});})(g__21387__auto___21495))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__21387__auto___21495){
return (function (seq21439){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21439));
});})(g__21387__auto___21495))
;


var g__21387__auto___21499 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__21387__auto___21499){
return (function cljs$spec$impl$gen$sample(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21500 = arguments.length;
var i__16897__auto___21501 = (0);
while(true){
if((i__16897__auto___21501 < len__16896__auto___21500)){
args__16903__auto__.push((arguments[i__16897__auto___21501]));

var G__21502 = (i__16897__auto___21501 + (1));
i__16897__auto___21501 = G__21502;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21499))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21499){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21499),args);
});})(g__21387__auto___21499))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__21387__auto___21499){
return (function (seq21440){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21440));
});})(g__21387__auto___21499))
;


var g__21387__auto___21503 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__21387__auto___21503){
return (function cljs$spec$impl$gen$return(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21504 = arguments.length;
var i__16897__auto___21505 = (0);
while(true){
if((i__16897__auto___21505 < len__16896__auto___21504)){
args__16903__auto__.push((arguments[i__16897__auto___21505]));

var G__21506 = (i__16897__auto___21505 + (1));
i__16897__auto___21505 = G__21506;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21503))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21503){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21503),args);
});})(g__21387__auto___21503))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__21387__auto___21503){
return (function (seq21441){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21441));
});})(g__21387__auto___21503))
;


var g__21387__auto___21507 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__21387__auto___21507){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21508 = arguments.length;
var i__16897__auto___21509 = (0);
while(true){
if((i__16897__auto___21509 < len__16896__auto___21508)){
args__16903__auto__.push((arguments[i__16897__auto___21509]));

var G__21510 = (i__16897__auto___21509 + (1));
i__16897__auto___21509 = G__21510;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21387__auto___21507))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21387__auto___21507){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21387__auto___21507),args);
});})(g__21387__auto___21507))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21387__auto___21507){
return (function (seq21442){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21442));
});})(g__21387__auto___21507))
;

var g__21400__auto___21532 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__21400__auto___21532){
return (function cljs$spec$impl$gen$any(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21533 = arguments.length;
var i__16897__auto___21534 = (0);
while(true){
if((i__16897__auto___21534 < len__16896__auto___21533)){
args__16903__auto__.push((arguments[i__16897__auto___21534]));

var G__21535 = (i__16897__auto___21534 + (1));
i__16897__auto___21534 = G__21535;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21532))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21532){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21532);
});})(g__21400__auto___21532))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__21400__auto___21532){
return (function (seq21511){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21511));
});})(g__21400__auto___21532))
;


var g__21400__auto___21536 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__21400__auto___21536){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21537 = arguments.length;
var i__16897__auto___21538 = (0);
while(true){
if((i__16897__auto___21538 < len__16896__auto___21537)){
args__16903__auto__.push((arguments[i__16897__auto___21538]));

var G__21539 = (i__16897__auto___21538 + (1));
i__16897__auto___21538 = G__21539;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21536))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21536){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21536);
});})(g__21400__auto___21536))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__21400__auto___21536){
return (function (seq21512){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21512));
});})(g__21400__auto___21536))
;


var g__21400__auto___21540 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__21400__auto___21540){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21541 = arguments.length;
var i__16897__auto___21542 = (0);
while(true){
if((i__16897__auto___21542 < len__16896__auto___21541)){
args__16903__auto__.push((arguments[i__16897__auto___21542]));

var G__21543 = (i__16897__auto___21542 + (1));
i__16897__auto___21542 = G__21543;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21540))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21540){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21540);
});})(g__21400__auto___21540))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__21400__auto___21540){
return (function (seq21513){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21513));
});})(g__21400__auto___21540))
;


var g__21400__auto___21544 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__21400__auto___21544){
return (function cljs$spec$impl$gen$char(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21545 = arguments.length;
var i__16897__auto___21546 = (0);
while(true){
if((i__16897__auto___21546 < len__16896__auto___21545)){
args__16903__auto__.push((arguments[i__16897__auto___21546]));

var G__21547 = (i__16897__auto___21546 + (1));
i__16897__auto___21546 = G__21547;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21544))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21544){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21544);
});})(g__21400__auto___21544))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__21400__auto___21544){
return (function (seq21514){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21514));
});})(g__21400__auto___21544))
;


var g__21400__auto___21548 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__21400__auto___21548){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21549 = arguments.length;
var i__16897__auto___21550 = (0);
while(true){
if((i__16897__auto___21550 < len__16896__auto___21549)){
args__16903__auto__.push((arguments[i__16897__auto___21550]));

var G__21551 = (i__16897__auto___21550 + (1));
i__16897__auto___21550 = G__21551;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21548))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21548){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21548);
});})(g__21400__auto___21548))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__21400__auto___21548){
return (function (seq21515){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21515));
});})(g__21400__auto___21548))
;


var g__21400__auto___21552 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__21400__auto___21552){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21553 = arguments.length;
var i__16897__auto___21554 = (0);
while(true){
if((i__16897__auto___21554 < len__16896__auto___21553)){
args__16903__auto__.push((arguments[i__16897__auto___21554]));

var G__21555 = (i__16897__auto___21554 + (1));
i__16897__auto___21554 = G__21555;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21552))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21552){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21552);
});})(g__21400__auto___21552))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__21400__auto___21552){
return (function (seq21516){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21516));
});})(g__21400__auto___21552))
;


var g__21400__auto___21556 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__21400__auto___21556){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21557 = arguments.length;
var i__16897__auto___21558 = (0);
while(true){
if((i__16897__auto___21558 < len__16896__auto___21557)){
args__16903__auto__.push((arguments[i__16897__auto___21558]));

var G__21559 = (i__16897__auto___21558 + (1));
i__16897__auto___21558 = G__21559;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21556))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21556){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21556);
});})(g__21400__auto___21556))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__21400__auto___21556){
return (function (seq21517){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21517));
});})(g__21400__auto___21556))
;


var g__21400__auto___21560 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__21400__auto___21560){
return (function cljs$spec$impl$gen$double(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21561 = arguments.length;
var i__16897__auto___21562 = (0);
while(true){
if((i__16897__auto___21562 < len__16896__auto___21561)){
args__16903__auto__.push((arguments[i__16897__auto___21562]));

var G__21563 = (i__16897__auto___21562 + (1));
i__16897__auto___21562 = G__21563;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21560))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21560){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21560);
});})(g__21400__auto___21560))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__21400__auto___21560){
return (function (seq21518){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21518));
});})(g__21400__auto___21560))
;


var g__21400__auto___21564 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__21400__auto___21564){
return (function cljs$spec$impl$gen$int(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21565 = arguments.length;
var i__16897__auto___21566 = (0);
while(true){
if((i__16897__auto___21566 < len__16896__auto___21565)){
args__16903__auto__.push((arguments[i__16897__auto___21566]));

var G__21567 = (i__16897__auto___21566 + (1));
i__16897__auto___21566 = G__21567;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21564))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21564){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21564);
});})(g__21400__auto___21564))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__21400__auto___21564){
return (function (seq21519){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21519));
});})(g__21400__auto___21564))
;


var g__21400__auto___21568 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__21400__auto___21568){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21569 = arguments.length;
var i__16897__auto___21570 = (0);
while(true){
if((i__16897__auto___21570 < len__16896__auto___21569)){
args__16903__auto__.push((arguments[i__16897__auto___21570]));

var G__21571 = (i__16897__auto___21570 + (1));
i__16897__auto___21570 = G__21571;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21568))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21568){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21568);
});})(g__21400__auto___21568))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__21400__auto___21568){
return (function (seq21520){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21520));
});})(g__21400__auto___21568))
;


var g__21400__auto___21572 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__21400__auto___21572){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21573 = arguments.length;
var i__16897__auto___21574 = (0);
while(true){
if((i__16897__auto___21574 < len__16896__auto___21573)){
args__16903__auto__.push((arguments[i__16897__auto___21574]));

var G__21575 = (i__16897__auto___21574 + (1));
i__16897__auto___21574 = G__21575;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21572))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21572){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21572);
});})(g__21400__auto___21572))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__21400__auto___21572){
return (function (seq21521){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21521));
});})(g__21400__auto___21572))
;


var g__21400__auto___21576 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__21400__auto___21576){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21577 = arguments.length;
var i__16897__auto___21578 = (0);
while(true){
if((i__16897__auto___21578 < len__16896__auto___21577)){
args__16903__auto__.push((arguments[i__16897__auto___21578]));

var G__21579 = (i__16897__auto___21578 + (1));
i__16897__auto___21578 = G__21579;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21576))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21576){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21576);
});})(g__21400__auto___21576))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__21400__auto___21576){
return (function (seq21522){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21522));
});})(g__21400__auto___21576))
;


var g__21400__auto___21580 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__21400__auto___21580){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21581 = arguments.length;
var i__16897__auto___21582 = (0);
while(true){
if((i__16897__auto___21582 < len__16896__auto___21581)){
args__16903__auto__.push((arguments[i__16897__auto___21582]));

var G__21583 = (i__16897__auto___21582 + (1));
i__16897__auto___21582 = G__21583;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21580))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21580){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21580);
});})(g__21400__auto___21580))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__21400__auto___21580){
return (function (seq21523){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21523));
});})(g__21400__auto___21580))
;


var g__21400__auto___21584 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__21400__auto___21584){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21585 = arguments.length;
var i__16897__auto___21586 = (0);
while(true){
if((i__16897__auto___21586 < len__16896__auto___21585)){
args__16903__auto__.push((arguments[i__16897__auto___21586]));

var G__21587 = (i__16897__auto___21586 + (1));
i__16897__auto___21586 = G__21587;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21584))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21584){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21584);
});})(g__21400__auto___21584))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__21400__auto___21584){
return (function (seq21524){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21524));
});})(g__21400__auto___21584))
;


var g__21400__auto___21588 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__21400__auto___21588){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21589 = arguments.length;
var i__16897__auto___21590 = (0);
while(true){
if((i__16897__auto___21590 < len__16896__auto___21589)){
args__16903__auto__.push((arguments[i__16897__auto___21590]));

var G__21591 = (i__16897__auto___21590 + (1));
i__16897__auto___21590 = G__21591;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21588))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21588){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21588);
});})(g__21400__auto___21588))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__21400__auto___21588){
return (function (seq21525){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21525));
});})(g__21400__auto___21588))
;


var g__21400__auto___21592 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__21400__auto___21592){
return (function cljs$spec$impl$gen$string(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21593 = arguments.length;
var i__16897__auto___21594 = (0);
while(true){
if((i__16897__auto___21594 < len__16896__auto___21593)){
args__16903__auto__.push((arguments[i__16897__auto___21594]));

var G__21595 = (i__16897__auto___21594 + (1));
i__16897__auto___21594 = G__21595;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21592))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21592){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21592);
});})(g__21400__auto___21592))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__21400__auto___21592){
return (function (seq21526){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21526));
});})(g__21400__auto___21592))
;


var g__21400__auto___21596 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__21400__auto___21596){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21597 = arguments.length;
var i__16897__auto___21598 = (0);
while(true){
if((i__16897__auto___21598 < len__16896__auto___21597)){
args__16903__auto__.push((arguments[i__16897__auto___21598]));

var G__21599 = (i__16897__auto___21598 + (1));
i__16897__auto___21598 = G__21599;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21596))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21596){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21596);
});})(g__21400__auto___21596))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__21400__auto___21596){
return (function (seq21527){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21527));
});})(g__21400__auto___21596))
;


var g__21400__auto___21600 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__21400__auto___21600){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21601 = arguments.length;
var i__16897__auto___21602 = (0);
while(true){
if((i__16897__auto___21602 < len__16896__auto___21601)){
args__16903__auto__.push((arguments[i__16897__auto___21602]));

var G__21603 = (i__16897__auto___21602 + (1));
i__16897__auto___21602 = G__21603;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21600))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21600){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21600);
});})(g__21400__auto___21600))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__21400__auto___21600){
return (function (seq21528){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21528));
});})(g__21400__auto___21600))
;


var g__21400__auto___21604 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__21400__auto___21604){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21605 = arguments.length;
var i__16897__auto___21606 = (0);
while(true){
if((i__16897__auto___21606 < len__16896__auto___21605)){
args__16903__auto__.push((arguments[i__16897__auto___21606]));

var G__21607 = (i__16897__auto___21606 + (1));
i__16897__auto___21606 = G__21607;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21604))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21604){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21604);
});})(g__21400__auto___21604))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__21400__auto___21604){
return (function (seq21529){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21529));
});})(g__21400__auto___21604))
;


var g__21400__auto___21608 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__21400__auto___21608){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21609 = arguments.length;
var i__16897__auto___21610 = (0);
while(true){
if((i__16897__auto___21610 < len__16896__auto___21609)){
args__16903__auto__.push((arguments[i__16897__auto___21610]));

var G__21611 = (i__16897__auto___21610 + (1));
i__16897__auto___21610 = G__21611;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21608))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21608){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21608);
});})(g__21400__auto___21608))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__21400__auto___21608){
return (function (seq21530){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21530));
});})(g__21400__auto___21608))
;


var g__21400__auto___21612 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__21400__auto___21612){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21613 = arguments.length;
var i__16897__auto___21614 = (0);
while(true){
if((i__16897__auto___21614 < len__16896__auto___21613)){
args__16903__auto__.push((arguments[i__16897__auto___21614]));

var G__21615 = (i__16897__auto___21614 + (1));
i__16897__auto___21614 = G__21615;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});})(g__21400__auto___21612))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21400__auto___21612){
return (function (args){
return cljs.core.deref.call(null,g__21400__auto___21612);
});})(g__21400__auto___21612))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__21400__auto___21612){
return (function (seq21531){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21531));
});})(g__21400__auto___21612))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__16903__auto__ = [];
var len__16896__auto___21618 = arguments.length;
var i__16897__auto___21619 = (0);
while(true){
if((i__16897__auto___21619 < len__16896__auto___21618)){
args__16903__auto__.push((arguments[i__16897__auto___21619]));

var G__21620 = (i__16897__auto___21619 + (1));
i__16897__auto___21619 = G__21620;
continue;
} else {
}
break;
}

var argseq__16904__auto__ = ((((0) < args__16903__auto__.length))?(new cljs.core.IndexedSeq(args__16903__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__16904__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__21616_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__21616_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq21617){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21617));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__21621_SHARP_){
return (new Date(p1__21621_SHARP_));
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

// Compiled by ClojureScript 1.9.293 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__11776__auto__,writer__11777__auto__,opt__11778__auto__){
return cljs.core._write.call(null,writer__11777__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__12285__auto__ = [];
var len__12278__auto___12385 = arguments.length;
var i__12279__auto___12386 = (0);
while(true){
if((i__12279__auto___12386 < len__12278__auto___12385)){
args__12285__auto__.push((arguments[i__12279__auto___12386]));

var G__12387 = (i__12279__auto___12386 + (1));
i__12279__auto___12386 = G__12387;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12384){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12384));
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
var args__12285__auto__ = [];
var len__12278__auto___12389 = arguments.length;
var i__12279__auto___12390 = (0);
while(true){
if((i__12279__auto___12390 < len__12278__auto___12389)){
args__12285__auto__.push((arguments[i__12279__auto___12390]));

var G__12391 = (i__12279__auto___12390 + (1));
i__12279__auto___12390 = G__12391;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12388){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12388));
});

var g_QMARK__12392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12393 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12392){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12392))
,null));
var mkg_12394 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12392,g_12393){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12392,g_12393))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12392,g_12393,mkg_12394){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12392).call(null,x);
});})(g_QMARK__12392,g_12393,mkg_12394))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12392,g_12393,mkg_12394){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12394).call(null,gfn);
});})(g_QMARK__12392,g_12393,mkg_12394))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12392,g_12393,mkg_12394){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12393).call(null,generator);
});})(g_QMARK__12392,g_12393,mkg_12394))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12356__auto___12413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__12356__auto___12413){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12414 = arguments.length;
var i__12279__auto___12415 = (0);
while(true){
if((i__12279__auto___12415 < len__12278__auto___12414)){
args__12285__auto__.push((arguments[i__12279__auto___12415]));

var G__12416 = (i__12279__auto___12415 + (1));
i__12279__auto___12415 = G__12416;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12413))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12413),args);
});})(g__12356__auto___12413))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__12356__auto___12413){
return (function (seq12395){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12395));
});})(g__12356__auto___12413))
;


var g__12356__auto___12417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__12356__auto___12417){
return (function cljs$spec$impl$gen$list(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12418 = arguments.length;
var i__12279__auto___12419 = (0);
while(true){
if((i__12279__auto___12419 < len__12278__auto___12418)){
args__12285__auto__.push((arguments[i__12279__auto___12419]));

var G__12420 = (i__12279__auto___12419 + (1));
i__12279__auto___12419 = G__12420;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12417))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12417),args);
});})(g__12356__auto___12417))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__12356__auto___12417){
return (function (seq12396){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12396));
});})(g__12356__auto___12417))
;


var g__12356__auto___12421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__12356__auto___12421){
return (function cljs$spec$impl$gen$map(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12422 = arguments.length;
var i__12279__auto___12423 = (0);
while(true){
if((i__12279__auto___12423 < len__12278__auto___12422)){
args__12285__auto__.push((arguments[i__12279__auto___12423]));

var G__12424 = (i__12279__auto___12423 + (1));
i__12279__auto___12423 = G__12424;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12421))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12421),args);
});})(g__12356__auto___12421))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__12356__auto___12421){
return (function (seq12397){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12397));
});})(g__12356__auto___12421))
;


var g__12356__auto___12425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__12356__auto___12425){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12426 = arguments.length;
var i__12279__auto___12427 = (0);
while(true){
if((i__12279__auto___12427 < len__12278__auto___12426)){
args__12285__auto__.push((arguments[i__12279__auto___12427]));

var G__12428 = (i__12279__auto___12427 + (1));
i__12279__auto___12427 = G__12428;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12425))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12425),args);
});})(g__12356__auto___12425))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__12356__auto___12425){
return (function (seq12398){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12398));
});})(g__12356__auto___12425))
;


var g__12356__auto___12429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__12356__auto___12429){
return (function cljs$spec$impl$gen$set(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12430 = arguments.length;
var i__12279__auto___12431 = (0);
while(true){
if((i__12279__auto___12431 < len__12278__auto___12430)){
args__12285__auto__.push((arguments[i__12279__auto___12431]));

var G__12432 = (i__12279__auto___12431 + (1));
i__12279__auto___12431 = G__12432;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12429))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12429),args);
});})(g__12356__auto___12429))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__12356__auto___12429){
return (function (seq12399){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12399));
});})(g__12356__auto___12429))
;


var g__12356__auto___12433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__12356__auto___12433){
return (function cljs$spec$impl$gen$vector(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12434 = arguments.length;
var i__12279__auto___12435 = (0);
while(true){
if((i__12279__auto___12435 < len__12278__auto___12434)){
args__12285__auto__.push((arguments[i__12279__auto___12435]));

var G__12436 = (i__12279__auto___12435 + (1));
i__12279__auto___12435 = G__12436;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12433))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12433),args);
});})(g__12356__auto___12433))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__12356__auto___12433){
return (function (seq12400){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12400));
});})(g__12356__auto___12433))
;


var g__12356__auto___12437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__12356__auto___12437){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12438 = arguments.length;
var i__12279__auto___12439 = (0);
while(true){
if((i__12279__auto___12439 < len__12278__auto___12438)){
args__12285__auto__.push((arguments[i__12279__auto___12439]));

var G__12440 = (i__12279__auto___12439 + (1));
i__12279__auto___12439 = G__12440;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12437))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12437),args);
});})(g__12356__auto___12437))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__12356__auto___12437){
return (function (seq12401){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12401));
});})(g__12356__auto___12437))
;


var g__12356__auto___12441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__12356__auto___12441){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12442 = arguments.length;
var i__12279__auto___12443 = (0);
while(true){
if((i__12279__auto___12443 < len__12278__auto___12442)){
args__12285__auto__.push((arguments[i__12279__auto___12443]));

var G__12444 = (i__12279__auto___12443 + (1));
i__12279__auto___12443 = G__12444;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12441))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12441),args);
});})(g__12356__auto___12441))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__12356__auto___12441){
return (function (seq12402){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12402));
});})(g__12356__auto___12441))
;


var g__12356__auto___12445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__12356__auto___12445){
return (function cljs$spec$impl$gen$elements(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12446 = arguments.length;
var i__12279__auto___12447 = (0);
while(true){
if((i__12279__auto___12447 < len__12278__auto___12446)){
args__12285__auto__.push((arguments[i__12279__auto___12447]));

var G__12448 = (i__12279__auto___12447 + (1));
i__12279__auto___12447 = G__12448;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12445))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12445),args);
});})(g__12356__auto___12445))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__12356__auto___12445){
return (function (seq12403){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12403));
});})(g__12356__auto___12445))
;


var g__12356__auto___12449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__12356__auto___12449){
return (function cljs$spec$impl$gen$bind(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12450 = arguments.length;
var i__12279__auto___12451 = (0);
while(true){
if((i__12279__auto___12451 < len__12278__auto___12450)){
args__12285__auto__.push((arguments[i__12279__auto___12451]));

var G__12452 = (i__12279__auto___12451 + (1));
i__12279__auto___12451 = G__12452;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12449))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12449){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12449),args);
});})(g__12356__auto___12449))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__12356__auto___12449){
return (function (seq12404){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12404));
});})(g__12356__auto___12449))
;


var g__12356__auto___12453 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__12356__auto___12453){
return (function cljs$spec$impl$gen$choose(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12454 = arguments.length;
var i__12279__auto___12455 = (0);
while(true){
if((i__12279__auto___12455 < len__12278__auto___12454)){
args__12285__auto__.push((arguments[i__12279__auto___12455]));

var G__12456 = (i__12279__auto___12455 + (1));
i__12279__auto___12455 = G__12456;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12453))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12453){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12453),args);
});})(g__12356__auto___12453))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__12356__auto___12453){
return (function (seq12405){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12405));
});})(g__12356__auto___12453))
;


var g__12356__auto___12457 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__12356__auto___12457){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12458 = arguments.length;
var i__12279__auto___12459 = (0);
while(true){
if((i__12279__auto___12459 < len__12278__auto___12458)){
args__12285__auto__.push((arguments[i__12279__auto___12459]));

var G__12460 = (i__12279__auto___12459 + (1));
i__12279__auto___12459 = G__12460;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12457))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12457){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12457),args);
});})(g__12356__auto___12457))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__12356__auto___12457){
return (function (seq12406){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12406));
});})(g__12356__auto___12457))
;


var g__12356__auto___12461 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__12356__auto___12461){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12462 = arguments.length;
var i__12279__auto___12463 = (0);
while(true){
if((i__12279__auto___12463 < len__12278__auto___12462)){
args__12285__auto__.push((arguments[i__12279__auto___12463]));

var G__12464 = (i__12279__auto___12463 + (1));
i__12279__auto___12463 = G__12464;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12461))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12461){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12461),args);
});})(g__12356__auto___12461))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__12356__auto___12461){
return (function (seq12407){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12407));
});})(g__12356__auto___12461))
;


var g__12356__auto___12465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__12356__auto___12465){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12466 = arguments.length;
var i__12279__auto___12467 = (0);
while(true){
if((i__12279__auto___12467 < len__12278__auto___12466)){
args__12285__auto__.push((arguments[i__12279__auto___12467]));

var G__12468 = (i__12279__auto___12467 + (1));
i__12279__auto___12467 = G__12468;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12465))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12465),args);
});})(g__12356__auto___12465))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__12356__auto___12465){
return (function (seq12408){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12408));
});})(g__12356__auto___12465))
;


var g__12356__auto___12469 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__12356__auto___12469){
return (function cljs$spec$impl$gen$sample(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12470 = arguments.length;
var i__12279__auto___12471 = (0);
while(true){
if((i__12279__auto___12471 < len__12278__auto___12470)){
args__12285__auto__.push((arguments[i__12279__auto___12471]));

var G__12472 = (i__12279__auto___12471 + (1));
i__12279__auto___12471 = G__12472;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12469))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12469){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12469),args);
});})(g__12356__auto___12469))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__12356__auto___12469){
return (function (seq12409){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12409));
});})(g__12356__auto___12469))
;


var g__12356__auto___12473 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__12356__auto___12473){
return (function cljs$spec$impl$gen$return(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12474 = arguments.length;
var i__12279__auto___12475 = (0);
while(true){
if((i__12279__auto___12475 < len__12278__auto___12474)){
args__12285__auto__.push((arguments[i__12279__auto___12475]));

var G__12476 = (i__12279__auto___12475 + (1));
i__12279__auto___12475 = G__12476;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12473))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12473){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12473),args);
});})(g__12356__auto___12473))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__12356__auto___12473){
return (function (seq12410){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12410));
});})(g__12356__auto___12473))
;


var g__12356__auto___12477 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__12356__auto___12477){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12478 = arguments.length;
var i__12279__auto___12479 = (0);
while(true){
if((i__12279__auto___12479 < len__12278__auto___12478)){
args__12285__auto__.push((arguments[i__12279__auto___12479]));

var G__12480 = (i__12279__auto___12479 + (1));
i__12279__auto___12479 = G__12480;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12477))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12477){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12477),args);
});})(g__12356__auto___12477))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__12356__auto___12477){
return (function (seq12411){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12411));
});})(g__12356__auto___12477))
;


var g__12356__auto___12481 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__12356__auto___12481){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12482 = arguments.length;
var i__12279__auto___12483 = (0);
while(true){
if((i__12279__auto___12483 < len__12278__auto___12482)){
args__12285__auto__.push((arguments[i__12279__auto___12483]));

var G__12484 = (i__12279__auto___12483 + (1));
i__12279__auto___12483 = G__12484;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12356__auto___12481))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12356__auto___12481){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12356__auto___12481),args);
});})(g__12356__auto___12481))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__12356__auto___12481){
return (function (seq12412){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12412));
});})(g__12356__auto___12481))
;

var g__12369__auto___12506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__12369__auto___12506){
return (function cljs$spec$impl$gen$any(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12507 = arguments.length;
var i__12279__auto___12508 = (0);
while(true){
if((i__12279__auto___12508 < len__12278__auto___12507)){
args__12285__auto__.push((arguments[i__12279__auto___12508]));

var G__12509 = (i__12279__auto___12508 + (1));
i__12279__auto___12508 = G__12509;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12506))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12506){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12506);
});})(g__12369__auto___12506))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__12369__auto___12506){
return (function (seq12485){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12485));
});})(g__12369__auto___12506))
;


var g__12369__auto___12510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__12369__auto___12510){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12511 = arguments.length;
var i__12279__auto___12512 = (0);
while(true){
if((i__12279__auto___12512 < len__12278__auto___12511)){
args__12285__auto__.push((arguments[i__12279__auto___12512]));

var G__12513 = (i__12279__auto___12512 + (1));
i__12279__auto___12512 = G__12513;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12510))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12510){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12510);
});})(g__12369__auto___12510))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__12369__auto___12510){
return (function (seq12486){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12486));
});})(g__12369__auto___12510))
;


var g__12369__auto___12514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__12369__auto___12514){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12515 = arguments.length;
var i__12279__auto___12516 = (0);
while(true){
if((i__12279__auto___12516 < len__12278__auto___12515)){
args__12285__auto__.push((arguments[i__12279__auto___12516]));

var G__12517 = (i__12279__auto___12516 + (1));
i__12279__auto___12516 = G__12517;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12514))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12514){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12514);
});})(g__12369__auto___12514))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__12369__auto___12514){
return (function (seq12487){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12487));
});})(g__12369__auto___12514))
;


var g__12369__auto___12518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__12369__auto___12518){
return (function cljs$spec$impl$gen$char(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12519 = arguments.length;
var i__12279__auto___12520 = (0);
while(true){
if((i__12279__auto___12520 < len__12278__auto___12519)){
args__12285__auto__.push((arguments[i__12279__auto___12520]));

var G__12521 = (i__12279__auto___12520 + (1));
i__12279__auto___12520 = G__12521;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12518))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12518){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12518);
});})(g__12369__auto___12518))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__12369__auto___12518){
return (function (seq12488){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12488));
});})(g__12369__auto___12518))
;


var g__12369__auto___12522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__12369__auto___12522){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12523 = arguments.length;
var i__12279__auto___12524 = (0);
while(true){
if((i__12279__auto___12524 < len__12278__auto___12523)){
args__12285__auto__.push((arguments[i__12279__auto___12524]));

var G__12525 = (i__12279__auto___12524 + (1));
i__12279__auto___12524 = G__12525;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12522))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12522){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12522);
});})(g__12369__auto___12522))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__12369__auto___12522){
return (function (seq12489){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12489));
});})(g__12369__auto___12522))
;


var g__12369__auto___12526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__12369__auto___12526){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12527 = arguments.length;
var i__12279__auto___12528 = (0);
while(true){
if((i__12279__auto___12528 < len__12278__auto___12527)){
args__12285__auto__.push((arguments[i__12279__auto___12528]));

var G__12529 = (i__12279__auto___12528 + (1));
i__12279__auto___12528 = G__12529;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12526))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12526){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12526);
});})(g__12369__auto___12526))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__12369__auto___12526){
return (function (seq12490){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12490));
});})(g__12369__auto___12526))
;


var g__12369__auto___12530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__12369__auto___12530){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12531 = arguments.length;
var i__12279__auto___12532 = (0);
while(true){
if((i__12279__auto___12532 < len__12278__auto___12531)){
args__12285__auto__.push((arguments[i__12279__auto___12532]));

var G__12533 = (i__12279__auto___12532 + (1));
i__12279__auto___12532 = G__12533;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12530))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12530){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12530);
});})(g__12369__auto___12530))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__12369__auto___12530){
return (function (seq12491){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12491));
});})(g__12369__auto___12530))
;


var g__12369__auto___12534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__12369__auto___12534){
return (function cljs$spec$impl$gen$double(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12535 = arguments.length;
var i__12279__auto___12536 = (0);
while(true){
if((i__12279__auto___12536 < len__12278__auto___12535)){
args__12285__auto__.push((arguments[i__12279__auto___12536]));

var G__12537 = (i__12279__auto___12536 + (1));
i__12279__auto___12536 = G__12537;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12534))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12534){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12534);
});})(g__12369__auto___12534))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__12369__auto___12534){
return (function (seq12492){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12492));
});})(g__12369__auto___12534))
;


var g__12369__auto___12538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__12369__auto___12538){
return (function cljs$spec$impl$gen$int(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12539 = arguments.length;
var i__12279__auto___12540 = (0);
while(true){
if((i__12279__auto___12540 < len__12278__auto___12539)){
args__12285__auto__.push((arguments[i__12279__auto___12540]));

var G__12541 = (i__12279__auto___12540 + (1));
i__12279__auto___12540 = G__12541;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12538))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12538){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12538);
});})(g__12369__auto___12538))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__12369__auto___12538){
return (function (seq12493){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12493));
});})(g__12369__auto___12538))
;


var g__12369__auto___12542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__12369__auto___12542){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12543 = arguments.length;
var i__12279__auto___12544 = (0);
while(true){
if((i__12279__auto___12544 < len__12278__auto___12543)){
args__12285__auto__.push((arguments[i__12279__auto___12544]));

var G__12545 = (i__12279__auto___12544 + (1));
i__12279__auto___12544 = G__12545;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12542))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12542){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12542);
});})(g__12369__auto___12542))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__12369__auto___12542){
return (function (seq12494){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12494));
});})(g__12369__auto___12542))
;


var g__12369__auto___12546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__12369__auto___12546){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12547 = arguments.length;
var i__12279__auto___12548 = (0);
while(true){
if((i__12279__auto___12548 < len__12278__auto___12547)){
args__12285__auto__.push((arguments[i__12279__auto___12548]));

var G__12549 = (i__12279__auto___12548 + (1));
i__12279__auto___12548 = G__12549;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12546))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12546){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12546);
});})(g__12369__auto___12546))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__12369__auto___12546){
return (function (seq12495){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12495));
});})(g__12369__auto___12546))
;


var g__12369__auto___12550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__12369__auto___12550){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12551 = arguments.length;
var i__12279__auto___12552 = (0);
while(true){
if((i__12279__auto___12552 < len__12278__auto___12551)){
args__12285__auto__.push((arguments[i__12279__auto___12552]));

var G__12553 = (i__12279__auto___12552 + (1));
i__12279__auto___12552 = G__12553;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12550))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12550){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12550);
});})(g__12369__auto___12550))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__12369__auto___12550){
return (function (seq12496){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12496));
});})(g__12369__auto___12550))
;


var g__12369__auto___12554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__12369__auto___12554){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12555 = arguments.length;
var i__12279__auto___12556 = (0);
while(true){
if((i__12279__auto___12556 < len__12278__auto___12555)){
args__12285__auto__.push((arguments[i__12279__auto___12556]));

var G__12557 = (i__12279__auto___12556 + (1));
i__12279__auto___12556 = G__12557;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12554))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12554){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12554);
});})(g__12369__auto___12554))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__12369__auto___12554){
return (function (seq12497){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12497));
});})(g__12369__auto___12554))
;


var g__12369__auto___12558 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__12369__auto___12558){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12559 = arguments.length;
var i__12279__auto___12560 = (0);
while(true){
if((i__12279__auto___12560 < len__12278__auto___12559)){
args__12285__auto__.push((arguments[i__12279__auto___12560]));

var G__12561 = (i__12279__auto___12560 + (1));
i__12279__auto___12560 = G__12561;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12558))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12558){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12558);
});})(g__12369__auto___12558))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__12369__auto___12558){
return (function (seq12498){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12498));
});})(g__12369__auto___12558))
;


var g__12369__auto___12562 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__12369__auto___12562){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12563 = arguments.length;
var i__12279__auto___12564 = (0);
while(true){
if((i__12279__auto___12564 < len__12278__auto___12563)){
args__12285__auto__.push((arguments[i__12279__auto___12564]));

var G__12565 = (i__12279__auto___12564 + (1));
i__12279__auto___12564 = G__12565;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12562))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12562){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12562);
});})(g__12369__auto___12562))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__12369__auto___12562){
return (function (seq12499){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12499));
});})(g__12369__auto___12562))
;


var g__12369__auto___12566 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__12369__auto___12566){
return (function cljs$spec$impl$gen$string(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12567 = arguments.length;
var i__12279__auto___12568 = (0);
while(true){
if((i__12279__auto___12568 < len__12278__auto___12567)){
args__12285__auto__.push((arguments[i__12279__auto___12568]));

var G__12569 = (i__12279__auto___12568 + (1));
i__12279__auto___12568 = G__12569;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12566))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12566){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12566);
});})(g__12369__auto___12566))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__12369__auto___12566){
return (function (seq12500){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12500));
});})(g__12369__auto___12566))
;


var g__12369__auto___12570 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__12369__auto___12570){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12571 = arguments.length;
var i__12279__auto___12572 = (0);
while(true){
if((i__12279__auto___12572 < len__12278__auto___12571)){
args__12285__auto__.push((arguments[i__12279__auto___12572]));

var G__12573 = (i__12279__auto___12572 + (1));
i__12279__auto___12572 = G__12573;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12570))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12570){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12570);
});})(g__12369__auto___12570))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__12369__auto___12570){
return (function (seq12501){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12501));
});})(g__12369__auto___12570))
;


var g__12369__auto___12574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__12369__auto___12574){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12575 = arguments.length;
var i__12279__auto___12576 = (0);
while(true){
if((i__12279__auto___12576 < len__12278__auto___12575)){
args__12285__auto__.push((arguments[i__12279__auto___12576]));

var G__12577 = (i__12279__auto___12576 + (1));
i__12279__auto___12576 = G__12577;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12574))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12574){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12574);
});})(g__12369__auto___12574))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__12369__auto___12574){
return (function (seq12502){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12502));
});})(g__12369__auto___12574))
;


var g__12369__auto___12578 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__12369__auto___12578){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12579 = arguments.length;
var i__12279__auto___12580 = (0);
while(true){
if((i__12279__auto___12580 < len__12278__auto___12579)){
args__12285__auto__.push((arguments[i__12279__auto___12580]));

var G__12581 = (i__12279__auto___12580 + (1));
i__12279__auto___12580 = G__12581;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12578))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12578){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12578);
});})(g__12369__auto___12578))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__12369__auto___12578){
return (function (seq12503){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12503));
});})(g__12369__auto___12578))
;


var g__12369__auto___12582 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__12369__auto___12582){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12583 = arguments.length;
var i__12279__auto___12584 = (0);
while(true){
if((i__12279__auto___12584 < len__12278__auto___12583)){
args__12285__auto__.push((arguments[i__12279__auto___12584]));

var G__12585 = (i__12279__auto___12584 + (1));
i__12279__auto___12584 = G__12585;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12582))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12582){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12582);
});})(g__12369__auto___12582))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__12369__auto___12582){
return (function (seq12504){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12504));
});})(g__12369__auto___12582))
;


var g__12369__auto___12586 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__12369__auto___12586){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12587 = arguments.length;
var i__12279__auto___12588 = (0);
while(true){
if((i__12279__auto___12588 < len__12278__auto___12587)){
args__12285__auto__.push((arguments[i__12279__auto___12588]));

var G__12589 = (i__12279__auto___12588 + (1));
i__12279__auto___12588 = G__12589;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});})(g__12369__auto___12586))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12369__auto___12586){
return (function (args){
return cljs.core.deref.call(null,g__12369__auto___12586);
});})(g__12369__auto___12586))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__12369__auto___12586){
return (function (seq12505){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12505));
});})(g__12369__auto___12586))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__12285__auto__ = [];
var len__12278__auto___12592 = arguments.length;
var i__12279__auto___12593 = (0);
while(true){
if((i__12279__auto___12593 < len__12278__auto___12592)){
args__12285__auto__.push((arguments[i__12279__auto___12593]));

var G__12594 = (i__12279__auto___12593 + (1));
i__12279__auto___12593 = G__12594;
continue;
} else {
}
break;
}

var argseq__12286__auto__ = ((((0) < args__12285__auto__.length))?(new cljs.core.IndexedSeq(args__12285__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__12286__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__12590_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12590_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq12591){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12591));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__12595_SHARP_){
return (new Date(p1__12595_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
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
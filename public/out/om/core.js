// Compiled by ClojureScript 1.9.293 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.display_name[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core.display_name["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.init_state[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core.init_state["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.should_update[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,next_props,next_state);
} else {
var m__11834__auto____$1 = (om.core.should_update["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.will_mount[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core.will_mount["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.did_mount[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core.did_mount["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.will_unmount[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.will_update[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,next_props,next_state);
} else {
var m__11834__auto____$1 = (om.core.will_update["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.did_update[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__11834__auto____$1 = (om.core.did_update["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.will_receive_props[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,next_props);
} else {
var m__11834__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.render[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core.render["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.render_props[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,props,state);
} else {
var m__11834__auto____$1 = (om.core.render_props["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core.render_state[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,state);
} else {
var m__11834__auto____$1 = (om.core.render_state["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__11834__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args15859 = [];
var len__12278__auto___15862 = arguments.length;
var i__12279__auto___15863 = (0);
while(true){
if((i__12279__auto___15863 < len__12278__auto___15862)){
args15859.push((arguments[i__12279__auto___15863]));

var G__15864 = (i__12279__auto___15863 + (1));
i__12279__auto___15863 = G__15864;
continue;
} else {
}
break;
}

var G__15861 = args15859.length;
switch (G__15861) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15859.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._get_state[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core._get_state["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._get_state[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,ks);
} else {
var m__11834__auto____$1 = (om.core._get_state["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args15866 = [];
var len__12278__auto___15869 = arguments.length;
var i__12279__auto___15870 = (0);
while(true){
if((i__12279__auto___15870 < len__12278__auto___15869)){
args15866.push((arguments[i__12279__auto___15870]));

var G__15871 = (i__12279__auto___15870 + (1));
i__12279__auto___15870 = G__15871;
continue;
} else {
}
break;
}

var G__15868 = args15866.length;
switch (G__15868) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15866.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._get_render_state[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._get_render_state[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,ks);
} else {
var m__11834__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args15873 = [];
var len__12278__auto___15876 = arguments.length;
var i__12279__auto___15877 = (0);
while(true){
if((i__12279__auto___15877 < len__12278__auto___15876)){
args15873.push((arguments[i__12279__auto___15877]));

var G__15878 = (i__12279__auto___15877 + (1));
i__12279__auto___15877 = G__15878;
continue;
} else {
}
break;
}

var G__15875 = args15873.length;
switch (G__15875) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15873.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,val,render);
} else {
var m__11834__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,ks,val,render);
} else {
var m__11834__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._get_queue[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core._get_queue["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,c);
} else {
var m__11834__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__11833__auto__ = (((x == null))?null:x);
var m__11834__auto__ = (om.core._value[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,x);
} else {
var m__11834__auto____$1 = (om.core._value["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__11833__auto__ = (((cursor == null))?null:cursor);
var m__11834__auto__ = (om.core._path[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,cursor);
} else {
var m__11834__auto____$1 = (om.core._path["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__11833__auto__ = (((cursor == null))?null:cursor);
var m__11834__auto__ = (om.core._state[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,cursor);
} else {
var m__11834__auto____$1 = (om.core._state["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args15880 = [];
var len__12278__auto___15883 = arguments.length;
var i__12279__auto___15884 = (0);
while(true){
if((i__12279__auto___15884 < len__12278__auto___15883)){
args15880.push((arguments[i__12279__auto___15884]));

var G__15885 = (i__12279__auto___15884 + (1));
i__12279__auto___15884 = G__15885;
continue;
} else {
}
break;
}

var G__15882 = args15880.length;
switch (G__15882) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15880.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__11833__auto__ = (((value == null))?null:value);
var m__11834__auto__ = (om.core._to_cursor[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,value,state);
} else {
var m__11834__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__11833__auto__ = (((value == null))?null:value);
var m__11834__auto__ = (om.core._to_cursor[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,value,state,path);
} else {
var m__11834__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__11833__auto__ = (((cursor == null))?null:cursor);
var m__11834__auto__ = (om.core._derive[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,cursor,derived,state,path);
} else {
var m__11834__auto____$1 = (om.core._derive["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__11833__auto__ = (((cursor == null))?null:cursor);
var m__11834__auto__ = (om.core._transact_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,cursor,korks,f,tag);
} else {
var m__11834__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__11833__auto__ = (((x == null))?null:x);
var m__11834__auto__ = (om.core._listen_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,x,key,tx_listen);
} else {
var m__11834__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__11833__auto__ = (((x == null))?null:x);
var m__11834__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,x,key);
} else {
var m__11834__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__11833__auto__ = (((x == null))?null:x);
var m__11834__auto__ = (om.core._notify_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__11834__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,id,p,val);
} else {
var m__11834__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,id,p);
} else {
var m__11834__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,id);
} else {
var m__11834__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._get_property[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,id,p);
} else {
var m__11834__auto____$1 = (om.core._get_property["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__11833__auto__ = (((cursor == null))?null:cursor);
var m__11834__auto__ = (om.core._root_key[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,cursor);
} else {
var m__11834__auto____$1 = (om.core._root_key["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._adapt[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,other);
} else {
var m__11834__auto____$1 = (om.core._adapt["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,c);
} else {
var m__11834__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$,c);
} else {
var m__11834__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__11833__auto__ = (((this$ == null))?null:this$);
var m__11834__auto__ = (om.core._get_deps[goog.typeOf(x__11833__auto__)]);
if(!((m__11834__auto__ == null))){
return m__11834__auto__.call(null,this$);
} else {
var m__11834__auto____$1 = (om.core._get_deps["_"]);
if(!((m__11834__auto____$1 == null))){
return m__11834__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === state.om$core$IOmSwap$)))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ICursor$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

return (x.props["__om_cursor"]);
});
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args15891 = [];
var len__12278__auto___15894 = arguments.length;
var i__12279__auto___15895 = (0);
while(true){
if((i__12279__auto___15895 < len__12278__auto___15894)){
args15891.push((arguments[i__12279__auto___15895]));

var G__15896 = (i__12279__auto___15895 + (1));
i__12279__auto___15895 = G__15896;
continue;
} else {
}
break;
}

var G__15893 = args15891.length;
switch (G__15893) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15891.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args15898 = [];
var len__12278__auto___15901 = arguments.length;
var i__12279__auto___15902 = (0);
while(true){
if((i__12279__auto___15902 < len__12278__auto___15901)){
args15898.push((arguments[i__12279__auto___15902]));

var G__15903 = (i__12279__auto___15902 + (1));
i__12279__auto___15902 = G__15903;
continue;
} else {
}
break;
}

var G__15900 = args15898.length;
switch (G__15900) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15898.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;

om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4657__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var pending_state = temp__4657__auto__;
var G__15906 = state;
(G__15906["__om_prev_state"] = (state["__om_state"]));

(G__15906["__om_state"] = pending_state);

(G__15906["__om_pending_state"] = null);

return G__15906;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args15907 = [];
var len__12278__auto___15910 = arguments.length;
var i__12279__auto___15911 = (0);
while(true){
if((i__12279__auto___15911 < len__12278__auto___15910)){
args15907.push((arguments[i__12279__auto___15911]));

var G__15912 = (i__12279__auto___15911 + (1));
i__12279__auto___15911 = G__15912;
continue;
} else {
}
break;
}

var G__15909 = args15907.length;
switch (G__15909) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15907.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__11170__auto__ = props;
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return owner.props;
}
})();
var temp__4657__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var props_state = temp__4657__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__11170__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;

om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidUpdate$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_15936 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__11170__auto__ = (state_15936["__om_prev_state"]);
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return (state_15936["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillUnmount$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__15917 = cljs.core.seq.call(null,refs);
var chunk__15918 = null;
var count__15919 = (0);
var i__15920 = (0);
while(true){
if((i__15920 < count__15919)){
var ref = cljs.core._nth.call(null,chunk__15918,i__15920);
om.core.unobserve.call(null,this$,ref);

var G__15937 = seq__15917;
var G__15938 = chunk__15918;
var G__15939 = count__15919;
var G__15940 = (i__15920 + (1));
seq__15917 = G__15937;
chunk__15918 = G__15938;
count__15919 = G__15939;
i__15920 = G__15940;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__15917);
if(temp__4657__auto____$1){
var seq__15917__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15917__$1)){
var c__11984__auto__ = cljs.core.chunk_first.call(null,seq__15917__$1);
var G__15941 = cljs.core.chunk_rest.call(null,seq__15917__$1);
var G__15942 = c__11984__auto__;
var G__15943 = cljs.core.count.call(null,c__11984__auto__);
var G__15944 = (0);
seq__15917 = G__15941;
chunk__15918 = G__15942;
count__15919 = G__15943;
i__15920 = G__15944;
continue;
} else {
var ref = cljs.core.first.call(null,seq__15917__$1);
om.core.unobserve.call(null,this$,ref);

var G__15945 = cljs.core.next.call(null,seq__15917__$1);
var G__15946 = null;
var G__15947 = (0);
var G__15948 = (0);
seq__15917 = G__15945;
chunk__15918 = G__15946;
count__15919 = G__15947;
i__15920 = G__15948;
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
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillReceiveProps$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IShouldUpdate$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__11158__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__11158__auto__)){
var and__11158__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__11158__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__11158__auto____$1;
}
} else {
return and__11158__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__11158__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__11158__auto__){
return cljs.core.some.call(null,((function (and__11158__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__15914_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__15914_SHARP_);
});})(and__11158__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__11158__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_15923 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_15924 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_15925 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_15926 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_15927 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRender$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRenderProps$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRenderState$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_15927;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_15926;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_15925;

om.core._STAR_state_STAR_ = _STAR_state_STAR_15924;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_15923;
}}),(function (next_props,next_state){
var this$ = this;
var c_15949 = om.core.children.call(null,this$);
if(((!((c_15949 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_15949.om$core$IWillUpdate$)))?true:(((!c_15949.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_15949):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_15949))){
var state_15950 = this$.state;
om.core.will_update.call(null,c_15949,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__11170__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = ({"__om_id": (function (){var or__11170__auto__ = id;
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IInitState$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))});
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidMount$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDisplayName$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_15951 = om.core.children.call(null,this$);
if(((!((c_15951 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_15951.om$core$IWillMount$)))?true:(((!c_15951.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_15951):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_15951))){
om.core.will_mount.call(null,c_15951);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x15953 = obj;
x15953.om$core$ISetState$ = cljs.core.PROTOCOL_SENTINEL;

x15953.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x15953){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__11158__auto__ = !((app_state == null));
if(and__11158__auto__){
return render;
} else {
return and__11158__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x15953))
;

x15953.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x15953){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__11158__auto__ = !((app_state == null));
if(and__11158__auto__){
return render;
} else {
return and__11158__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x15953))
;

x15953.om$core$IGetRenderState$ = cljs.core.PROTOCOL_SENTINEL;

x15953.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x15953){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x15953))
;

x15953.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x15953){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x15953))
;

x15953.om$core$IGetState$ = cljs.core.PROTOCOL_SENTINEL;

x15953.om$core$IGetState$_get_state$arity$1 = ((function (x15953){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__11170__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return (state["__om_state"]);
}
});})(x15953))
;

x15953.om$core$IGetState$_get_state$arity$2 = ((function (x15953){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x15953))
;

return x15953;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__11170__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__11170__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IInitState$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return ({"__om_id": om_id});
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_15963 = om.core.children.call(null,this$);
if(((!((c_15963 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_15963.om$core$IWillMount$)))?true:(((!c_15963.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_15963):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_15963))){
om.core.will_mount.call(null,c_15963);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillUnmount$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.dissoc,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$));

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__15957 = cljs.core.seq.call(null,refs);
var chunk__15958 = null;
var count__15959 = (0);
var i__15960 = (0);
while(true){
if((i__15960 < count__15959)){
var ref = cljs.core._nth.call(null,chunk__15958,i__15960);
om.core.unobserve.call(null,this$,ref);

var G__15964 = seq__15957;
var G__15965 = chunk__15958;
var G__15966 = count__15959;
var G__15967 = (i__15960 + (1));
seq__15957 = G__15964;
chunk__15958 = G__15965;
count__15959 = G__15966;
i__15960 = G__15967;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__15957);
if(temp__4657__auto____$1){
var seq__15957__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15957__$1)){
var c__11984__auto__ = cljs.core.chunk_first.call(null,seq__15957__$1);
var G__15968 = cljs.core.chunk_rest.call(null,seq__15957__$1);
var G__15969 = c__11984__auto__;
var G__15970 = cljs.core.count.call(null,c__11984__auto__);
var G__15971 = (0);
seq__15957 = G__15968;
chunk__15958 = G__15969;
count__15959 = G__15970;
i__15960 = G__15971;
continue;
} else {
var ref = cljs.core.first.call(null,seq__15957__$1);
om.core.unobserve.call(null,this$,ref);

var G__15972 = cljs.core.next.call(null,seq__15957__$1);
var G__15973 = null;
var G__15974 = (0);
var G__15975 = (0);
seq__15957 = G__15972;
chunk__15958 = G__15973;
count__15959 = G__15974;
i__15960 = G__15975;
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
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_15976 = this$.props;
var c_15977 = om.core.children.call(null,this$);
if(((!((c_15977 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_15977.om$core$IWillUpdate$)))?true:(((!c_15977.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_15977):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_15977))){
var state_15978 = this$.state;
om.core.will_update.call(null,c_15977,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidUpdate$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_15979 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__11170__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x15981 = cljs.core.clj__GT_js.call(null,methods$);
x15981.om$core$ISetState$ = cljs.core.PROTOCOL_SENTINEL;

x15981.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x15981){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__11158__auto__ = !((gstate == null));
if(and__11158__auto__){
return render;
} else {
return and__11158__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x15981))
;

x15981.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x15981){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x15981))
;

x15981.om$core$IGetRenderState$ = cljs.core.PROTOCOL_SENTINEL;

x15981.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x15981){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x15981))
;

x15981.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x15981){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x15981))
;

x15981.om$core$IGetState$ = cljs.core.PROTOCOL_SENTINEL;

x15981.om$core$IGetState$_get_state$arity$1 = ((function (x15981){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__11170__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x15981))
;

x15981.om$core$IGetState$_get_state$arity$2 = ((function (x15981){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x15981))
;

return x15981;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ICursor$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = cljs.core.PROTOCOL_SENTINEL;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__15985){
var vec__15986 = p__15985;
var k = cljs.core.nth.call(null,vec__15986,(0),null);
var v = cljs.core.nth.call(null,vec__15986,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__15989 = null;
var G__15989__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__15989__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__15989 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15989__2.call(this,self__,k);
case 3:
return G__15989__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15989.cljs$core$IFn$_invoke$arity$2 = G__15989__2;
G__15989.cljs$core$IFn$_invoke$arity$3 = G__15989__3;
return G__15989;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args15984){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15984)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__11776__auto__,writer__11777__auto__,opt__11778__auto__){
return cljs.core._write.call(null,writer__11777__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = cljs.core.PROTOCOL_SENTINEL;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__15991 = null;
var G__15991__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__15991__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__15991 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15991__2.call(this,self__,k);
case 3:
return G__15991__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15991.cljs$core$IFn$_invoke$arity$2 = G__15991__2;
G__15991.cljs$core$IFn$_invoke$arity$3 = G__15991__3;
return G__15991;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args15990){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15990)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__11776__auto__,writer__11777__auto__,opt__11778__auto__){
return cljs.core._write.call(null,writer__11777__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x15993 = cljs.core.clone.call(null,val);
x15993.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

x15993.cljs$core$IDeref$_deref$arity$1 = ((function (x15993){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x15993))
;

x15993.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

x15993.om$core$ICursor$_path$arity$1 = ((function (x15993){
return (function (_){
var ___$1 = this;
return path;
});})(x15993))
;

x15993.om$core$ICursor$_state$arity$1 = ((function (x15993){
return (function (_){
var ___$1 = this;
return state;
});})(x15993))
;

x15993.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x15993.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x15993){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x15993))
;

x15993.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

x15993.cljs$core$IEquiv$_equiv$arity$2 = ((function (x15993){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x15993))
;

return x15993;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args15994 = [];
var len__12278__auto___15999 = arguments.length;
var i__12279__auto___16000 = (0);
while(true){
if((i__12279__auto___16000 < len__12278__auto___15999)){
args15994.push((arguments[i__12279__auto___16000]));

var G__16001 = (i__12279__auto___16000 + (1));
i__12279__auto___16000 = G__16001;
continue;
} else {
}
break;
}

var G__15996 = args15994.length;
switch (G__15996) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15994.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === val.om$core$IToCursor$)))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || ((cljs.core.PROTOCOL_SENTINEL === val.cljs$core$ICloneable$)))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;

om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === atom.cljs$core$IDeref$)))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref atom)"));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x16006 = cljs.core.clone.call(null,x);
x16006.cljs$core$ICloneable$ = cljs.core.PROTOCOL_SENTINEL;

x16006.cljs$core$ICloneable$_clone$arity$1 = ((function (x16006){
return (function (this$){
var this$__$1 = this;
return om.core.ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x16006))
;

x16006.om$core$IAdapt$ = cljs.core.PROTOCOL_SENTINEL;

x16006.om$core$IAdapt$_adapt$arity$2 = ((function (x16006){
return (function (this$,other){
var this$__$1 = this;
return om.core.ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x16006))
;

x16006.om$core$ICursorDerive$ = cljs.core.PROTOCOL_SENTINEL;

x16006.om$core$ICursorDerive$_derive$arity$4 = ((function (x16006){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x16006))
;

x16006.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x16006.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x16006){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x16006))
;

return x16006;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(((!((cursor == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === cursor.om$core$IOmRef$)))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x16014 = cljs.core.clone.call(null,cursor);
x16014.om$core$ICursorDerive$ = cljs.core.PROTOCOL_SENTINEL;

x16014.om$core$ICursorDerive$_derive$arity$4 = ((function (x16014,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x16014,path,storage))
;

x16014.om$core$IOmRef$ = cljs.core.PROTOCOL_SENTINEL;

x16014.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x16014,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x16014,path,storage))
;

x16014.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x16014,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x16014,path,storage))
;

x16014.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x16014,path,storage){
return (function (_){
var ___$1 = this;
var seq__16015 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__16016 = null;
var count__16017 = (0);
var i__16018 = (0);
while(true){
if((i__16018 < count__16017)){
var c = cljs.core._nth.call(null,chunk__16016,i__16018);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__16019 = seq__16015;
var G__16020 = chunk__16016;
var G__16021 = count__16017;
var G__16022 = (i__16018 + (1));
seq__16015 = G__16019;
chunk__16016 = G__16020;
count__16017 = G__16021;
i__16018 = G__16022;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16015);
if(temp__4657__auto__){
var seq__16015__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16015__$1)){
var c__11984__auto__ = cljs.core.chunk_first.call(null,seq__16015__$1);
var G__16023 = cljs.core.chunk_rest.call(null,seq__16015__$1);
var G__16024 = c__11984__auto__;
var G__16025 = cljs.core.count.call(null,c__11984__auto__);
var G__16026 = (0);
seq__16015 = G__16023;
chunk__16016 = G__16024;
count__16017 = G__16025;
i__16018 = G__16026;
continue;
} else {
var c = cljs.core.first.call(null,seq__16015__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__16027 = cljs.core.next.call(null,seq__16015__$1);
var G__16028 = null;
var G__16029 = (0);
var G__16030 = (0);
seq__16015 = G__16027;
chunk__16016 = G__16028;
count__16017 = G__16029;
i__16018 = G__16030;
continue;
}
} else {
return null;
}
}
break;
}
});})(x16014,path,storage))
;

x16014.om$core$IOmRef$_get_deps$arity$1 = ((function (x16014,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x16014,path,storage))
;

x16014.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x16014.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x16014,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x16014,path,storage))
;

return x16014;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__11170__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (component? c)"));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (cursor? ref)"));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__11170__auto__ = state.om$render$T;
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args16031 = [];
var len__12278__auto___16038 = arguments.length;
var i__12279__auto___16039 = (0);
while(true){
if((i__12279__auto___16039 < len__12278__auto___16038)){
args16031.push((arguments[i__12279__auto___16039]));

var G__16040 = (i__12279__auto___16039 + (1));
i__12279__auto___16039 = G__16040;
continue;
} else {
}
break;
}

var G__16033 = args16031.length;
switch (G__16033) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16031.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__16034_16042 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__16035_16043 = null;
var count__16036_16044 = (0);
var i__16037_16045 = (0);
while(true){
if((i__16037_16045 < count__16036_16044)){
var f_16046 = cljs.core._nth.call(null,chunk__16035_16043,i__16037_16045);
f_16046.call(null);

var G__16047 = seq__16034_16042;
var G__16048 = chunk__16035_16043;
var G__16049 = count__16036_16044;
var G__16050 = (i__16037_16045 + (1));
seq__16034_16042 = G__16047;
chunk__16035_16043 = G__16048;
count__16036_16044 = G__16049;
i__16037_16045 = G__16050;
continue;
} else {
var temp__4657__auto___16051 = cljs.core.seq.call(null,seq__16034_16042);
if(temp__4657__auto___16051){
var seq__16034_16052__$1 = temp__4657__auto___16051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16034_16052__$1)){
var c__11984__auto___16053 = cljs.core.chunk_first.call(null,seq__16034_16052__$1);
var G__16054 = cljs.core.chunk_rest.call(null,seq__16034_16052__$1);
var G__16055 = c__11984__auto___16053;
var G__16056 = cljs.core.count.call(null,c__11984__auto___16053);
var G__16057 = (0);
seq__16034_16042 = G__16054;
chunk__16035_16043 = G__16055;
count__16036_16044 = G__16056;
i__16037_16045 = G__16057;
continue;
} else {
var f_16058 = cljs.core.first.call(null,seq__16034_16052__$1);
f_16058.call(null);

var G__16059 = cljs.core.next.call(null,seq__16034_16052__$1);
var G__16060 = null;
var G__16061 = (0);
var G__16062 = (0);
seq__16034_16042 = G__16059;
chunk__16035_16043 = G__16060;
count__16036_16044 = G__16061;
i__16037_16045 = G__16062;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;

om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__11170__auto__ = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRender$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__11170__auto__){
return or__11170__auto__;
} else {
var or__11170__auto____$1 = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRenderProps$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__11170__auto____$1){
return or__11170__auto____$1;
} else {
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRenderState$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IRender x) (satisfies? IRenderProps x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args16073 = [];
var len__12278__auto___16076 = arguments.length;
var i__12279__auto___16077 = (0);
while(true){
if((i__12279__auto___16077 < len__12278__auto___16076)){
args16073.push((arguments[i__12279__auto___16077]));

var G__16078 = (i__12279__auto___16077 + (1));
i__12279__auto___16077 = G__16078;
continue;
} else {
}
break;
}

var G__16075 = args16073.length;
switch (G__16075) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16073.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__11170__auto__ = descriptor;
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
var or__11170__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__11170__auto____$1)){
return or__11170__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;

om.core.getf = (function om$core$getf(var_args){
var args16080 = [];
var len__12278__auto___16083 = arguments.length;
var i__12279__auto___16084 = (0);
while(true){
if((i__12279__auto___16084 < len__12278__auto___16083)){
args16080.push((arguments[i__12279__auto___16084]));

var G__16085 = (i__12279__auto___16084 + (1));
i__12279__auto___16084 = G__16085;
continue;
} else {
}
break;
}

var G__16082 = args16080.length;
switch (G__16082) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16080.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;

om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args16087 = [];
var len__12278__auto___16092 = arguments.length;
var i__12279__auto___16093 = (0);
while(true){
if((i__12279__auto___16093 < len__12278__auto___16092)){
args16087.push((arguments[i__12279__auto___16093]));

var G__16094 = (i__12279__auto___16093 + (1));
i__12279__auto___16093 = G__16094;
continue;
} else {
}
break;
}

var G__16089 = args16087.length;
switch (G__16089) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16087.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str("(valid-opts? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,({"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
}));
} else {
var map__16090 = m;
var map__16090__$1 = ((((!((map__16090 == null)))?((((map__16090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16090):map__16090);
var key = cljs.core.get.call(null,map__16090__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__16090__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__16090__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__16090__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__16090__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4655__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__11170__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,({"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__16090,map__16090__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__16090,map__16090__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__16090,map__16090__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__16090,map__16090__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__11170__auto__ = rkey;
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_}));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args16096 = [];
var len__12278__auto___16099 = arguments.length;
var i__12279__auto___16100 = (0);
while(true){
if((i__12279__auto___16100 < len__12278__auto___16099)){
args16096.push((arguments[i__12279__auto___16100]));

var G__16101 = (i__12279__auto___16100 + (1));
i__12279__auto___16100 = G__16101;
continue;
} else {
}
break;
}

var G__16098 = args16096.length;
switch (G__16098) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16096.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;

/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args16103 = [];
var len__12278__auto___16106 = arguments.length;
var i__12279__auto___16107 = (0);
while(true){
if((i__12279__auto___16107 < len__12278__auto___16106)){
args16103.push((arguments[i__12279__auto___16107]));

var G__16108 = (i__12279__auto___16107 + (1));
i__12279__auto___16107 = G__16108;
continue;
} else {
}
break;
}

var G__16105 = args16103.length;
switch (G__16105) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16103.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;

om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === state.om$core$INotify$)))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_16134 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_16135 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_16136 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x16123_16137 = state;
x16123_16137.om$core$IRootProperties$ = cljs.core.PROTOCOL_SENTINEL;

x16123_16137.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x16123_16137,properties_16134,listeners_16135,render_queue_16136){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_16134,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x16123_16137,properties_16134,listeners_16135,render_queue_16136))
;

x16123_16137.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x16123_16137,properties_16134,listeners_16135,render_queue_16136){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_16134,cljs.core.dissoc,id,k);
});})(x16123_16137,properties_16134,listeners_16135,render_queue_16136))
;

x16123_16137.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x16123_16137,properties_16134,listeners_16135,render_queue_16136){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_16134,cljs.core.dissoc,id);
});})(x16123_16137,properties_16134,listeners_16135,render_queue_16136))
;

x16123_16137.om$core$IRootProperties$_get_property$arity$3 = ((function (x16123_16137,properties_16134,listeners_16135,render_queue_16136){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_16134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x16123_16137,properties_16134,listeners_16135,render_queue_16136))
;

x16123_16137.om$core$INotify$ = cljs.core.PROTOCOL_SENTINEL;

x16123_16137.om$core$INotify$_listen_BANG_$arity$3 = ((function (x16123_16137,properties_16134,listeners_16135,render_queue_16136){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_16135,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x16123_16137,properties_16134,listeners_16135,render_queue_16136))
;

x16123_16137.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x16123_16137,properties_16134,listeners_16135,render_queue_16136){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_16135,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x16123_16137,properties_16134,listeners_16135,render_queue_16136))
;

x16123_16137.om$core$INotify$_notify_BANG_$arity$3 = ((function (x16123_16137,properties_16134,listeners_16135,render_queue_16136){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__16124_16138 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_16135));
var chunk__16125_16139 = null;
var count__16126_16140 = (0);
var i__16127_16141 = (0);
while(true){
if((i__16127_16141 < count__16126_16140)){
var vec__16128_16142 = cljs.core._nth.call(null,chunk__16125_16139,i__16127_16141);
var __16143 = cljs.core.nth.call(null,vec__16128_16142,(0),null);
var f_16144 = cljs.core.nth.call(null,vec__16128_16142,(1),null);
f_16144.call(null,tx_data,root_cursor);

var G__16145 = seq__16124_16138;
var G__16146 = chunk__16125_16139;
var G__16147 = count__16126_16140;
var G__16148 = (i__16127_16141 + (1));
seq__16124_16138 = G__16145;
chunk__16125_16139 = G__16146;
count__16126_16140 = G__16147;
i__16127_16141 = G__16148;
continue;
} else {
var temp__4657__auto___16149 = cljs.core.seq.call(null,seq__16124_16138);
if(temp__4657__auto___16149){
var seq__16124_16150__$1 = temp__4657__auto___16149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16124_16150__$1)){
var c__11984__auto___16151 = cljs.core.chunk_first.call(null,seq__16124_16150__$1);
var G__16152 = cljs.core.chunk_rest.call(null,seq__16124_16150__$1);
var G__16153 = c__11984__auto___16151;
var G__16154 = cljs.core.count.call(null,c__11984__auto___16151);
var G__16155 = (0);
seq__16124_16138 = G__16152;
chunk__16125_16139 = G__16153;
count__16126_16140 = G__16154;
i__16127_16141 = G__16155;
continue;
} else {
var vec__16131_16156 = cljs.core.first.call(null,seq__16124_16150__$1);
var __16157 = cljs.core.nth.call(null,vec__16131_16156,(0),null);
var f_16158 = cljs.core.nth.call(null,vec__16131_16156,(1),null);
f_16158.call(null,tx_data,root_cursor);

var G__16159 = cljs.core.next.call(null,seq__16124_16150__$1);
var G__16160 = null;
var G__16161 = (0);
var G__16162 = (0);
seq__16124_16138 = G__16159;
chunk__16125_16139 = G__16160;
count__16126_16140 = G__16161;
i__16127_16141 = G__16162;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x16123_16137,properties_16134,listeners_16135,render_queue_16136))
;

x16123_16137.om$core$IRenderQueue$ = cljs.core.PROTOCOL_SENTINEL;

x16123_16137.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x16123_16137,properties_16134,listeners_16135,render_queue_16136){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_16136);
});})(x16123_16137,properties_16134,listeners_16135,render_queue_16136))
;

x16123_16137.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x16123_16137,properties_16134,listeners_16135,render_queue_16136){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_16136),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_16136,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x16123_16137,properties_16134,listeners_16135,render_queue_16136))
;

x16123_16137.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x16123_16137,properties_16134,listeners_16135,render_queue_16136){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_16136,cljs.core.empty);
});})(x16123_16137,properties_16134,listeners_16135,render_queue_16136))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x16164 = cljs.core.clone.call(null,cursor);
x16164.cljs$core$ICloneable$ = cljs.core.PROTOCOL_SENTINEL;

x16164.cljs$core$ICloneable$_clone$arity$1 = ((function (x16164){
return (function (this$){
var this$__$1 = this;
return om.core.tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x16164))
;

x16164.om$core$IAdapt$ = cljs.core.PROTOCOL_SENTINEL;

x16164.om$core$IAdapt$_adapt$arity$2 = ((function (x16164){
return (function (this$,other){
var this$__$1 = this;
return om.core.tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x16164))
;

x16164.om$core$IRootKey$ = cljs.core.PROTOCOL_SENTINEL;

x16164.om$core$IRootKey$_root_key$arity$1 = ((function (x16164){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x16164))
;

return x16164;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__16165){
var map__16253 = p__16165;
var map__16253__$1 = ((((!((map__16253 == null)))?((((map__16253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16253):map__16253);
var options = map__16253__$1;
var target = cljs.core.get.call(null,map__16253__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__16253__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__16253__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__16253__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__16253__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__16253__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__16253__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str("(ifn? f)")].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__16340 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__16340,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__16340,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IAtom$)))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__11170__auto__ = adapt;
if(cljs.core.truth_(or__11170__auto__)){
return or__11170__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__16253,map__16253__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_16341 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_16298 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_16299 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_16300 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_16301 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_16301;

om.core._STAR_state_STAR_ = _STAR_state_STAR_16300;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_16299;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_16298;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_16341);
} else {
}
}

var queue_16342 = om.core._get_queue.call(null,state__$1);
if(cljs.core.empty_QMARK_.call(null,queue_16342)){
} else {
var seq__16302_16343 = cljs.core.seq.call(null,queue_16342);
var chunk__16303_16344 = null;
var count__16304_16345 = (0);
var i__16305_16346 = (0);
while(true){
if((i__16305_16346 < count__16304_16345)){
var c_16347 = cljs.core._nth.call(null,chunk__16303_16344,i__16305_16346);
if(cljs.core.truth_(c_16347.isMounted())){
var temp__4657__auto___16348 = (c_16347.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___16348)){
var next_props_16349 = temp__4657__auto___16348;
(c_16347.props["__om_cursor"] = next_props_16349);

(c_16347.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__11170__auto__ = !((function (){var G__16307 = om.core.children.call(null,c_16347);
if(!((G__16307 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__16307.om$core$ICheckState$))){
return true;
} else {
if((!G__16307.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__16307);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__16307);
}
})());
if(or__11170__auto__){
return or__11170__auto__;
} else {
return c_16347.shouldComponentUpdate(c_16347.props,c_16347.state);
}
})())){
c_16347.forceUpdate();
} else {
}
} else {
}

var G__16350 = seq__16302_16343;
var G__16351 = chunk__16303_16344;
var G__16352 = count__16304_16345;
var G__16353 = (i__16305_16346 + (1));
seq__16302_16343 = G__16350;
chunk__16303_16344 = G__16351;
count__16304_16345 = G__16352;
i__16305_16346 = G__16353;
continue;
} else {
var temp__4657__auto___16354 = cljs.core.seq.call(null,seq__16302_16343);
if(temp__4657__auto___16354){
var seq__16302_16355__$1 = temp__4657__auto___16354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16302_16355__$1)){
var c__11984__auto___16356 = cljs.core.chunk_first.call(null,seq__16302_16355__$1);
var G__16357 = cljs.core.chunk_rest.call(null,seq__16302_16355__$1);
var G__16358 = c__11984__auto___16356;
var G__16359 = cljs.core.count.call(null,c__11984__auto___16356);
var G__16360 = (0);
seq__16302_16343 = G__16357;
chunk__16303_16344 = G__16358;
count__16304_16345 = G__16359;
i__16305_16346 = G__16360;
continue;
} else {
var c_16361 = cljs.core.first.call(null,seq__16302_16355__$1);
if(cljs.core.truth_(c_16361.isMounted())){
var temp__4657__auto___16362__$1 = (c_16361.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___16362__$1)){
var next_props_16363 = temp__4657__auto___16362__$1;
(c_16361.props["__om_cursor"] = next_props_16363);

(c_16361.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__11170__auto__ = !((function (){var G__16309 = om.core.children.call(null,c_16361);
if(!((G__16309 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__16309.om$core$ICheckState$))){
return true;
} else {
if((!G__16309.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__16309);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__16309);
}
})());
if(or__11170__auto__){
return or__11170__auto__;
} else {
return c_16361.shouldComponentUpdate(c_16361.props,c_16361.state);
}
})())){
c_16361.forceUpdate();
} else {
}
} else {
}

var G__16364 = cljs.core.next.call(null,seq__16302_16355__$1);
var G__16365 = null;
var G__16366 = (0);
var G__16367 = (0);
seq__16302_16343 = G__16364;
chunk__16303_16344 = G__16365;
count__16304_16345 = G__16366;
i__16305_16346 = G__16367;
continue;
}
} else {
}
}
break;
}

om.core._empty_queue_BANG_.call(null,state__$1);
}

var _refs_16368 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_16368)){
} else {
var seq__16310_16369 = cljs.core.seq.call(null,_refs_16368);
var chunk__16311_16370 = null;
var count__16312_16371 = (0);
var i__16313_16372 = (0);
while(true){
if((i__16313_16372 < count__16312_16371)){
var vec__16314_16373 = cljs.core._nth.call(null,chunk__16311_16370,i__16313_16372);
var path_16374__$1 = cljs.core.nth.call(null,vec__16314_16373,(0),null);
var cs_16375 = cljs.core.nth.call(null,vec__16314_16373,(1),null);
var cs_16376__$1 = cljs.core.deref.call(null,cs_16375);
var seq__16317_16377 = cljs.core.seq.call(null,cs_16376__$1);
var chunk__16318_16378 = null;
var count__16319_16379 = (0);
var i__16320_16380 = (0);
while(true){
if((i__16320_16380 < count__16319_16379)){
var vec__16321_16381 = cljs.core._nth.call(null,chunk__16318_16378,i__16320_16380);
var id_16382 = cljs.core.nth.call(null,vec__16321_16381,(0),null);
var c_16383 = cljs.core.nth.call(null,vec__16321_16381,(1),null);
if(cljs.core.truth_(c_16383.shouldComponentUpdate(c_16383.props,c_16383.state))){
c_16383.forceUpdate();
} else {
}

var G__16384 = seq__16317_16377;
var G__16385 = chunk__16318_16378;
var G__16386 = count__16319_16379;
var G__16387 = (i__16320_16380 + (1));
seq__16317_16377 = G__16384;
chunk__16318_16378 = G__16385;
count__16319_16379 = G__16386;
i__16320_16380 = G__16387;
continue;
} else {
var temp__4657__auto___16388 = cljs.core.seq.call(null,seq__16317_16377);
if(temp__4657__auto___16388){
var seq__16317_16389__$1 = temp__4657__auto___16388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16317_16389__$1)){
var c__11984__auto___16390 = cljs.core.chunk_first.call(null,seq__16317_16389__$1);
var G__16391 = cljs.core.chunk_rest.call(null,seq__16317_16389__$1);
var G__16392 = c__11984__auto___16390;
var G__16393 = cljs.core.count.call(null,c__11984__auto___16390);
var G__16394 = (0);
seq__16317_16377 = G__16391;
chunk__16318_16378 = G__16392;
count__16319_16379 = G__16393;
i__16320_16380 = G__16394;
continue;
} else {
var vec__16324_16395 = cljs.core.first.call(null,seq__16317_16389__$1);
var id_16396 = cljs.core.nth.call(null,vec__16324_16395,(0),null);
var c_16397 = cljs.core.nth.call(null,vec__16324_16395,(1),null);
if(cljs.core.truth_(c_16397.shouldComponentUpdate(c_16397.props,c_16397.state))){
c_16397.forceUpdate();
} else {
}

var G__16398 = cljs.core.next.call(null,seq__16317_16389__$1);
var G__16399 = null;
var G__16400 = (0);
var G__16401 = (0);
seq__16317_16377 = G__16398;
chunk__16318_16378 = G__16399;
count__16319_16379 = G__16400;
i__16320_16380 = G__16401;
continue;
}
} else {
}
}
break;
}

var G__16402 = seq__16310_16369;
var G__16403 = chunk__16311_16370;
var G__16404 = count__16312_16371;
var G__16405 = (i__16313_16372 + (1));
seq__16310_16369 = G__16402;
chunk__16311_16370 = G__16403;
count__16312_16371 = G__16404;
i__16313_16372 = G__16405;
continue;
} else {
var temp__4657__auto___16406 = cljs.core.seq.call(null,seq__16310_16369);
if(temp__4657__auto___16406){
var seq__16310_16407__$1 = temp__4657__auto___16406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16310_16407__$1)){
var c__11984__auto___16408 = cljs.core.chunk_first.call(null,seq__16310_16407__$1);
var G__16409 = cljs.core.chunk_rest.call(null,seq__16310_16407__$1);
var G__16410 = c__11984__auto___16408;
var G__16411 = cljs.core.count.call(null,c__11984__auto___16408);
var G__16412 = (0);
seq__16310_16369 = G__16409;
chunk__16311_16370 = G__16410;
count__16312_16371 = G__16411;
i__16313_16372 = G__16412;
continue;
} else {
var vec__16327_16413 = cljs.core.first.call(null,seq__16310_16407__$1);
var path_16414__$1 = cljs.core.nth.call(null,vec__16327_16413,(0),null);
var cs_16415 = cljs.core.nth.call(null,vec__16327_16413,(1),null);
var cs_16416__$1 = cljs.core.deref.call(null,cs_16415);
var seq__16330_16417 = cljs.core.seq.call(null,cs_16416__$1);
var chunk__16331_16418 = null;
var count__16332_16419 = (0);
var i__16333_16420 = (0);
while(true){
if((i__16333_16420 < count__16332_16419)){
var vec__16334_16421 = cljs.core._nth.call(null,chunk__16331_16418,i__16333_16420);
var id_16422 = cljs.core.nth.call(null,vec__16334_16421,(0),null);
var c_16423 = cljs.core.nth.call(null,vec__16334_16421,(1),null);
if(cljs.core.truth_(c_16423.shouldComponentUpdate(c_16423.props,c_16423.state))){
c_16423.forceUpdate();
} else {
}

var G__16424 = seq__16330_16417;
var G__16425 = chunk__16331_16418;
var G__16426 = count__16332_16419;
var G__16427 = (i__16333_16420 + (1));
seq__16330_16417 = G__16424;
chunk__16331_16418 = G__16425;
count__16332_16419 = G__16426;
i__16333_16420 = G__16427;
continue;
} else {
var temp__4657__auto___16428__$1 = cljs.core.seq.call(null,seq__16330_16417);
if(temp__4657__auto___16428__$1){
var seq__16330_16429__$1 = temp__4657__auto___16428__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16330_16429__$1)){
var c__11984__auto___16430 = cljs.core.chunk_first.call(null,seq__16330_16429__$1);
var G__16431 = cljs.core.chunk_rest.call(null,seq__16330_16429__$1);
var G__16432 = c__11984__auto___16430;
var G__16433 = cljs.core.count.call(null,c__11984__auto___16430);
var G__16434 = (0);
seq__16330_16417 = G__16431;
chunk__16331_16418 = G__16432;
count__16332_16419 = G__16433;
i__16333_16420 = G__16434;
continue;
} else {
var vec__16337_16435 = cljs.core.first.call(null,seq__16330_16429__$1);
var id_16436 = cljs.core.nth.call(null,vec__16337_16435,(0),null);
var c_16437 = cljs.core.nth.call(null,vec__16337_16435,(1),null);
if(cljs.core.truth_(c_16437.shouldComponentUpdate(c_16437.props,c_16437.state))){
c_16437.forceUpdate();
} else {
}

var G__16438 = cljs.core.next.call(null,seq__16330_16429__$1);
var G__16439 = null;
var G__16440 = (0);
var G__16441 = (0);
seq__16330_16417 = G__16438;
chunk__16331_16418 = G__16439;
count__16332_16419 = G__16440;
i__16333_16420 = G__16441;
continue;
}
} else {
}
}
break;
}

var G__16442 = cljs.core.next.call(null,seq__16310_16407__$1);
var G__16443 = null;
var G__16444 = (0);
var G__16445 = (0);
seq__16310_16369 = G__16442;
chunk__16311_16370 = G__16443;
count__16312_16371 = G__16444;
i__16313_16372 = G__16445;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__16253,map__16253__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16253,map__16253__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16253,map__16253__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16253,map__16253__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16253,map__16253__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16253,map__16253__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16253,map__16253__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16253,map__16253__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__16253,map__16253__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error("Assert failed: (gdom/isElement target)"));
}

var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ITransact$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args16448 = [];
var len__12278__auto___16451 = arguments.length;
var i__12279__auto___16452 = (0);
while(true){
if((i__12279__auto___16452 < len__12278__auto___16451)){
args16448.push((arguments[i__12279__auto___16452]));

var G__16453 = (i__12279__auto___16452 + (1));
i__12279__auto___16452 = G__16453;
continue;
} else {
}
break;
}

var G__16450 = args16448.length;
switch (G__16450) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16448.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (transactable? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args16455 = [];
var len__12278__auto___16458 = arguments.length;
var i__12279__auto___16459 = (0);
while(true){
if((i__12279__auto___16459 < len__12278__auto___16458)){
args16455.push((arguments[i__12279__auto___16459]));

var G__16460 = (i__12279__auto___16459 + (1));
i__12279__auto___16459 = G__16460;
continue;
} else {
}
break;
}

var G__16457 = args16455.length;
switch (G__16457) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16455.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var key = ((((!((cursor == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === cursor.om$core$IRootKey$)))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 *   extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args16464 = [];
var len__12278__auto___16467 = arguments.length;
var i__12279__auto___16468 = (0);
while(true){
if((i__12279__auto___16468 < len__12278__auto___16467)){
args16464.push((arguments[i__12279__auto___16468]));

var G__16469 = (i__12279__auto___16468 + (1));
i__12279__auto___16468 = G__16469;
continue;
} else {
}
break;
}

var G__16466 = args16464.length;
switch (G__16466) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16464.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var temp__4657__auto__ = owner.refs;
if(cljs.core.truth_(temp__4657__auto__)){
var refs = temp__4657__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;

/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args16471 = [];
var len__12278__auto___16474 = arguments.length;
var i__12279__auto___16475 = (0);
while(true){
if((i__12279__auto___16475 < len__12278__auto___16474)){
args16471.push((arguments[i__12279__auto___16475]));

var G__16476 = (i__12279__auto___16475 + (1));
i__12279__auto___16475 = G__16476;
continue;
} else {
}
break;
}

var G__16473 = args16471.length;
switch (G__16473) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16471.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args16478 = [];
var len__12278__auto___16481 = arguments.length;
var i__12279__auto___16482 = (0);
while(true){
if((i__12279__auto___16482 < len__12278__auto___16481)){
args16478.push((arguments[i__12279__auto___16482]));

var G__16483 = (i__12279__auto___16482 + (1));
i__12279__auto___16482 = G__16483;
continue;
} else {
}
break;
}

var G__16480 = args16478.length;
switch (G__16480) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16478.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args16485 = [];
var len__12278__auto___16488 = arguments.length;
var i__12279__auto___16489 = (0);
while(true){
if((i__12279__auto___16489 < len__12278__auto___16488)){
args16485.push((arguments[i__12279__auto___16489]));

var G__16490 = (i__12279__auto___16489 + (1));
i__12279__auto___16489 = G__16490;
continue;
} else {
}
break;
}

var G__16487 = args16485.length;
switch (G__16487) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16485.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args16492 = [];
var len__12278__auto___16495 = arguments.length;
var i__12279__auto___16496 = (0);
while(true){
if((i__12279__auto___16496 < len__12278__auto___16495)){
args16492.push((arguments[i__12279__auto___16496]));

var G__16497 = (i__12279__auto___16496 + (1));
i__12279__auto___16496 = G__16497;
continue;
} else {
}
break;
}

var G__16494 = args16492.length;
switch (G__16494) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16492.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args16499 = [];
var len__12278__auto___16502 = arguments.length;
var i__12279__auto___16503 = (0);
while(true){
if((i__12279__auto___16503 < len__12278__auto___16502)){
args16499.push((arguments[i__12279__auto___16503]));

var G__16504 = (i__12279__auto___16503 + (1));
i__12279__auto___16503 = G__16504;
continue;
} else {
}
break;
}

var G__16501 = args16499.length;
switch (G__16501) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16499.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map
// Compiled by ClojureScript 1.9.293 {}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
pages.index.fetch_images = (function pages$index$fetch_images(cb){
return goog.net.XhrIo.send("/imgs",(function (event){
return null;
}),cljs.core.println.call(null,pages.index.event),(function (){var res = pages.index.event.target.getResponseText();
var parsed = window.JSON.parse(res);
return cb.call(null,parsed);
})());
});
pages.index.render = (function pages$index$render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"YO WORLD"], null);
});

//# sourceMappingURL=index.js.map
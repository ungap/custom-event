/*! (c) Andrea Giammarchi - ISC */
var self=this||{};self.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(t){function e(t,e){e||(e={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!!e.bubbles,!!e.cancelable,e.detail),n}return e.prototype=new e("").constructor.prototype,e}();
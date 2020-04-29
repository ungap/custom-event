/*! (c) Andrea Giammarchi - ISC */
var self = this || /* istanbul ignore next */ {};
try {
  var CE = CustomEvent;
} catch (err) {
  if (typeof document === 'undefined') {
    CE = (function () {
      return function CustomEvent(type, init) {
        if (!init) init = {};
        this.type = type;
        this.bubbles = !!init.bubbles;
        this.cancelable = !!init.cancelable;
        this.detail = init.detail;
      };
    })();
  } else {
    CE = (function () {
      return function CustomEvent(type, init) {
        if (!init) init = {};
        var e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, !!init.bubbles, !!init.cancelable, init.detail);
        return e;
      };
    })();
  }
  CE.prototype = new CE().constructor.prototype;
}
self.CustomEvent = CE;
module.exports = self.CustomEvent;

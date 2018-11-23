/*! (c) Andrea Giammarchi - ISC */
var self = this || /* istanbul ignore next */ {};
try { self.CustomEvent = new CustomEvent('.').constructor; }
catch (CustomEvent) {
  self.CustomEvent = function CustomEvent(type, init) {
    if (!init)
      init = {};
    var e = document.createEvent('Event');
    var bubbles = !!init.bubbles;
    var cancelable = !!init.cancelable;
    e.initEvent(type, bubbles, cancelable);
    e.bubbles = bubbles;
    e.cancelable = cancelable;
    e.detail = init.detail;
    return e;
  };
}
module.exports = self.CustomEvent;

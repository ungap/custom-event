/*! (c) Andrea Giammarchi - ISC */
var self = this || /* istanbul ignore next */ {};
try { self.CustomEvent = new CustomEvent('.').constructor; }
catch (CustomEvent) {
  self.CustomEvent = function CustomEvent(type, init) {
    if (!init)
      init = {};
    var bubbles = !!init.bubbles;
    var cancelable = !!init.cancelable;
    var e = document.createEvent('Event');
    e.initEvent(type, bubbles, cancelable);
    e.detail = init.detail;
    try {
      e.bubbles = bubbles;
      e.cancelable = cancelable;
    } catch (e) {}
    return e;
  };
}
module.exports = self.CustomEvent;

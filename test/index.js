if (typeof document === 'undefined')
  global.document = {
    createEvent: function () {
      return {initCustomEvent: function (type, bubbles, cancelable, detail) {
        this.type = type;
        this.bubbles = !!bubbles;
        this.cancelable = !!cancelable;
        this.detail = detail;
      }};
    }
  };

var CustomEvent = require('../cjs');
test();

delete require.cache[require.resolve('../cjs')];
global.CustomEvent = CustomEvent;

CustomEvent = require('../cjs');
test();

function test() {

  var a = new CustomEvent('a');
  console.assert(a.type === 'a');
  console.assert(!a.cancelable && !a.bubbles);

  var b = new CustomEvent('b', {bubbles: true, cancelable: true});
  console.assert(b.type === 'b');
  console.assert(b.cancelable && b.bubbles);

  var c = new CustomEvent('c', {bubbles: true});
  console.assert(c.type === 'c');
  console.assert(!c.cancelable && c.bubbles);

  var d = new CustomEvent('d', {cancelable: true});
  console.assert(d.type === 'd');
  console.assert(d.cancelable && !d.bubbles);

  var e = new CustomEvent('e', {bubbles: false, cancelable: false});
  console.assert(e.type === 'e');
  console.assert(!e.cancelable && !e.bubbles);

  var f = new CustomEvent('f', {detail: 123});
  console.assert(f.type === 'f');
  console.assert(f.detail === 123);
}

if (typeof document === 'undefined')
  global.document = {
    createEvent: function () {
      return {initEvent: function (type, init) {
        this.type = type;
        if (!init) init = {};
        this.bubbles = !!init.bubbles;
        this.cancelable = !!init.cancelable;
      }};
    }
  };

var CustomEvent = require('../cjs');
test();

function test() {

  var a = new CustomEvent('a');
  console.assert(a.type === 'a');
  console.assert(!a.cancelable && !a.bubbles);

  var b = new CustomEvent('b', {bubbles: true, cancelable: true});
  console.assert(b.type === 'b');
  console.log(b.cancelable, b.bubbles);
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

/*! (c) Andrea Giammarchi - ISC */
var self=this||{};try{self.CustomEvent=CustomEvent}catch(CustomEvent){self.CustomEvent=function(e,t){t||(t={});var n=document.createEvent("Event"),l=!!t.bubbles,a=!!t.cancelable;return n.initEvent(e,l,a),n.bubbles=l,n.cancelable=a,n.detail=t.detail,n}}
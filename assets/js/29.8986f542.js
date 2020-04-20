(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{231:function(e,t,r){"use strict";r.r(t);var o=r(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"other-concepts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-concepts"}},[e._v("#")]),e._v(" Other Concepts")]),e._v(" "),r("p",[e._v("When looking at the code in our "),r("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/tree/master/packages/ERTP/test",target:"_blank",rel:"noopener noreferrer"}},[e._v("tests"),r("OutboundLink")],1),e._v(", you might see some new\nconcepts:")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Vats")]),e._v(": All user code runs in what we call a vat. Within a vat, code is run synchronously. Communication with another vat happens asynchronously. The "),r("a",{attrs:{href:"https://github.com/Agoric/SwingSet",target:"_blank",rel:"noopener noreferrer"}},[e._v("SwingSet infrastructure"),r("OutboundLink")],1),e._v(" creates the vats and makes communication between vats possible.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("E() and tildot (~.)")]),e._v(": Instead of "),r("code",[e._v("obj.foo()")]),e._v(", we can write "),r("code",[e._v("E(obj).foo()")]),e._v(" or the syntactic sugar, "),r("code",[e._v("obj~.foo()")]),e._v(' and get a promise for the result. The syntax means "deliver the message foo() to the actual object asynchronously, in its own turn, wherever and whenever it is, even if it is local." Using '),r("code",[e._v("E")]),e._v(" or "),r("code",[e._v("~.")]),e._v(", you can talk asynchronously to local and remote objects in exactly the same way.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Presences")]),e._v(": Presences are our name for the local object that stands in for the remote object. If "),r("code",[e._v("obj")]),e._v(' is a presence of a remote object, we can send messages to the remote object by using "~." on '),r("code",[e._v("obj")]),e._v(", as in the above example.")])])]),e._v(" "),r("h2",{attrs:{id:"more-ertp-resources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#more-ertp-resources"}},[e._v("#")]),e._v(" More ERTP resources")]),e._v(" "),r("p",[e._v("Mark Miller explained ERTP on Oct 10, 2018 in his "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=YXUqfgdDbr8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Programming Secure Smart Contracts"),r("OutboundLink")],1),e._v(" presentation\nduring San Francisco Blockchain Week at a\n"),r("a",{attrs:{href:"https://www.meetup.com/SF-Cryptocurrency-Devs/events/253457222/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SF Cryptocurrency Devs meetup"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=YXUqfgdDbr8",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://user-images.githubusercontent.com/150986/59150095-b8a65200-89e3-11e9-9b5d-43a9be8a3c90.png",alt:"miller-sfbw-erights"}}),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);
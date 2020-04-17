(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{245:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"timer-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timer-service"}},[e._v("#")]),e._v(" Timer Service")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("There will be one or two "),a("code",[e._v("timerServices")]),e._v(" in home. One is from the chain (if\npresent), the other from the local vat. It would probably be sensible to use a\nchain-based timer for contracts, but more efficient to use the local timer\nfor operations that don't need consensus or consistency. Each "),a("code",[e._v("timerService")]),e._v("\ngives the ability to get the current time, schedule a single "),a("code",[e._v("wake()")]),e._v(" call,\ncreate a repeater that will allow scheduling of events at regular intervals,\nor remove scheduled calls.")]),e._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),a("p",[e._v("The timerService's API is:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TimerService")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Retrieve the time of the start of the current block.")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getCurrentTimestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Return value is the time at which the call is scheduled to take place.")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setWakeup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("baseTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("Handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Remove the handler from all its scheduled wakeups, whether")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// produced by timer.setWakeup(h) or repeater.schedule(h).")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("removeWakeup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("Handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Create and return a repeater that will schedule wake() calls repeatedly at")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// times that are a multiple of interval following baseTime. Interval is the")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// delay between successive times at which wake will be called. When")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// schedule(h) is called, h.wake() will be scheduled to be called after the")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// next multiple of interval from the base. Since block times are coarse-")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// grained, the actual call may occur later, but this won't change when the")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// next event will be called.")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createRepeater")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("delaySecs "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" interval "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Repeater"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Repeater")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Return value is the time scheduled for the first call on handler.")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The handler will continue to be scheduled for a wake() call every")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// interval until the repeater is disabled.")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("schedule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("Handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Disable this repeater, so schedule() can't be called, and handlers")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// already scheduled with this repeater won't be rescheduled again after")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// wake() is next called on them.")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("disable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Handler")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The time passed to wake() is the time that the call was scheduled to")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// occur.")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wake")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"transcript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transcript"}},[e._v("#")]),e._v(" Transcript")]),e._v(" "),a("p",[e._v("Here's a transcript of a session showing the use of the repeater.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('command[0]  home\nhistory[0]  {"LOADING":[Promise],"gallery":[Presence o-50],"sharingService":[Presence o-51],\n"purse":[Presence o-52],"canvasStatePublisher":[Presence o-53],"contractHost":[Presence o-54],\n"chainTimerService":[Presence o-55],"sharing":[Presence o-56],"registry":[Presence o-57],"zoe":\n[Presence o-58],"localTimerService":[Presence o-59],"uploads":[Presence o-60]}\ncommand[1]  home.localTimerService~.getCurrentTimestamp()\nhistory[1]  1571782780000\ncommand[2]  home.chainTimerService~.getCurrentTimestamp()\nhistory[2]  1571782793\ncommand[3]  makeHandler = () => { let calls = 0; const args = []; return { getCalls() {\nreturn calls; }, getArgs() { return args; }, wake(arg) { args.push(arg); calls += 1; }, }; }\nhistory[3]  [Function makeHandler]\ncommand[4]  h1 = makeHandler()\nhistory[4]  {"getCalls":[Function getCalls],"getArgs":[Function getArgs],"wake":[Function wake]}\ncommand[5]  h2 = makeHandler()\nhistory[5]  {"getCalls":[Function getCalls],"getArgs":[Function getArgs],"wake":[Function wake]}\ncommand[6]  tl = home.localTimerService\nhistory[6]  [Presence o-59]\ncommand[7]  tc = home.chainTimerService\nhistory[7]  [Presence o-55]\ncommand[8]  rl = tl~.createRepeater(7, 1500)\nhistory[8]  [Presence o-64]\ncommand[9]  rc = tc~.createRepeater(7, 1)\nhistory[9]  [Presence o-65]\ncommand[10]  rl~.schedule(h1)\nhistory[10]  1571783040007\ncommand[11]  rc~.schedule(h2)\nhistory[11]  1571783051\ncommand[12]  h1.getCalls()\nhistory[12]  3\ncommand[13]  h2.getCalls()\nhistory[13]  1\n...\ncommand[22]  h1.getCalls()\nhistory[22]  50\ncommand[23]  h1.getCalls()\nhistory[23]  53\ncommand[24]  h1.getCalls()\nhistory[24]  54\ncommand[25]  tl~.getCurrentTimestamp()\nhistory[25]  1571783375000\ncommand[26]  tc~.getCurrentTimestamp()\nhistory[26]  1571783384\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
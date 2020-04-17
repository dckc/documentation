(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{207:function(e,t,o){e.exports=o.p+"assets/img/LocalSolo.ba672c73.png"},208:function(e,t,o){e.exports=o.p+"assets/img/LocalChain.86e50c11.png"},209:function(e,t,o){e.exports=o.p+"assets/img/SharedChain.ee694474.png"},242:function(e,t,o){"use strict";o.r(t);var a=o(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"agoric-s-cosmic-swingset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agoric-s-cosmic-swingset"}},[e._v("#")]),e._v(" Agoric's Cosmic SwingSet")]),e._v(" "),a("p",[e._v("Agoric's Cosmic SwingSet enables developers to test smart contracts build with "),a("a",{attrs:{href:"https://github.com/Agoric/ERTP",target:"_blank",rel:"noopener noreferrer"}},[e._v("ERTP"),a("OutboundLink")],1),e._v(" in various blockchain setup environments")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This document gives an overview of the process of setting up")]),e._v(" "),a("ol",[a("li",[e._v("a local environment that will allow you to build and debug")]),e._v(" "),a("li",[e._v("an environment that emulates a remote setup for testing")]),e._v(" "),a("li",[e._v("deploying to the TestNet")]),e._v(" "),a("li",[e._v("(not available yet) deploying to MainNet")])]),e._v(" "),a("p",[e._v("In order to build a DeFi app in the SwingSet environment, your team will have to write code for three things:")]),e._v(" "),a("ul",[a("li",[e._v("The UI that displays in interface and talks to the handler via WebSockets")]),e._v(" "),a("li",[e._v("The Handler that receives commands from the user via WebSockets and sends\ntransactions to the local solo SwingSet for relay to the Chain")]),e._v(" "),a("li",[e._v("The Dapp code that runs in the Chain SwingSet and has access to objects on\nother chains")])]),e._v(" "),a("p",[e._v("To develop and deploy new code, you'll have to clone our "),a("a",{attrs:{href:"https://github.com/Agoric/cosmic-swingset",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmic SwingSet"),a("OutboundLink")],1),e._v(" repo from GitHib")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/Agoric/cosmic-swingset\n")])])]),a("p",[e._v("There is more thorough documentation there. This is an overview.")]),e._v(" "),a("h2",{attrs:{id:"different-ways-to-run-the-pixel-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#different-ways-to-run-the-pixel-demo"}},[e._v("#")]),e._v(" Different ways to run the Pixel Demo")]),e._v(" "),a("p",[e._v("Running the demo requires a local solo node to serve as your access point.\nWhichever environment you want to develop in, you'll start by building a solo\nnode from the source code.")]),e._v(" "),a("p",[a("strong",[e._v("Choose a scenario:")])]),e._v(" "),a("h2",{attrs:{id:"scenario-3-no-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-3-no-testnet"}},[e._v("#")]),e._v(" Scenario 3: no testnet")]),e._v(" "),a("h3",{attrs:{id:"develop-off-chain-demo-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#develop-off-chain-demo-locally"}},[e._v("#")]),e._v(" Develop off-chain demo locally")]),e._v(" "),a("p",[e._v("In this scenario, you run:")]),e._v(" "),a("ul",[a("li",[e._v("a "),a("strong",[e._v("solo node")]),e._v(" with the server-side Pixel Demo running and exposing an HTTP server in localhost")]),e._v(" "),a("li",[e._v("a "),a("strong",[e._v("web browser")]),e._v(" connecting to the solo node and enabling user interaction with the Pixel Demo")])]),e._v(" "),a("p",[e._v("No blockchain is involved.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:o(207),alt:"Local Solo"}})])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("em",[e._v("A Local Solo SwingSet. Notice that there's no chain.")])])])])]),e._v(" "),a("p",[e._v("Run:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" scenario3-setup\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" scenario3-run-client\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/Agoric/cosmic-swingset/tree/master/lib/ag-solo/vats/vat-demo.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("lib/ag-solo/vats/vat-demo.js")]),a("OutboundLink")],1),e._v(" contains the code running a vat with\nthe Pixel Gallery Demo.")]),e._v(" "),a("p",[e._v("Also, as part of "),a("code",[e._v("make scenario3-setup")]),e._v(", "),a("code",[e._v("bin/ag-solo init <directory>")]),e._v(" gets called and all the\ncontent of the "),a("a",{attrs:{href:"https://github.com/Agoric/cosmic-swingset/tree/master/lib/ag-solo/vats",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("vats")]),a("OutboundLink")],1),e._v(" directory gets copied to the "),a("code",[e._v("<directory>")])]),e._v(" "),a("p",[e._v("The objects added to "),a("code",[e._v("home")]),e._v(" are created in\n"),a("a",{attrs:{href:"https://github.com/Agoric/cosmic-swingset/tree/master/lib/ag-solo/vats/vat-demo.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("lib/ag-solo/vats/vat-demo.js")]),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",target:"_blank",rel:"noopener noreferrer"}},[e._v("REPL"),a("OutboundLink")],1),e._v(" handler is in\n"),a("a",{attrs:{href:"https://github.com/Agoric/cosmic-swingset/tree/master/lib/ag-solo/vats/vat-http.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("lib/ag-solo/vats/vat-http.js")]),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The HTML frontend code is pure JS/DOM (no additional libraries yet), in\n"),a("code",[e._v("lib/ag-solo/html/index.html")]),e._v(" and "),a("code",[e._v("lib/ag-solo/html/main.js")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"scenario-2-a-single-local-testnet-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-2-a-single-local-testnet-node"}},[e._v("#")]),e._v(" Scenario 2: a single local testnet node")]),e._v(" "),a("h3",{attrs:{id:"develop-on-chain-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#develop-on-chain-demo"}},[e._v("#")]),e._v(" Develop on-chain demo")]),e._v(" "),a("p",[e._v("In this scenario, you run:")]),e._v(" "),a("ul",[a("li",[e._v("one or several "),a("strong",[e._v("solo node(s)")]),e._v(" each exposing an HTTP server in localhost (each to a different port)")]),e._v(" "),a("li",[e._v("a "),a("strong",[e._v("single local blockchain testnet node")]),e._v(" with the server-side Pixel Demo running")]),e._v(" "),a("li",[e._v("a "),a("strong",[e._v("web browser")]),e._v(" connecting to each solo node via a different port and enabling user interaction with the Pixel Demo")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:o(208),alt:"Local Chain"}})])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("em",[e._v("A Local Chain SwingSet. Notice that the chain is private.")])])])])]),e._v(" "),a("p",[e._v("The solo nodes communicate with the testnet node")]),e._v(" "),a("p",[e._v("Before using this scenario, it is recommanded that you test your code with Scenario 3.")]),e._v(" "),a("p",[e._v("Prepare the chain and solo nodes:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" scenario2-setup "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BASE_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NUM_SOLOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n")])])]),a("p",[e._v("fThis prepares for creating 3 solo nodes. Each node exposes a web server to a different port. The\nports start at "),a("code",[e._v("8000")]),e._v(" ("),a("code",[e._v("BASE_PORT")]),e._v("). So the solo node ports here will be "),a("code",[e._v("8000")]),e._v(", "),a("code",[e._v("8001")]),e._v(" and "),a("code",[e._v("8002")])]),e._v(" "),a("p",[e._v("Start the chain:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" scenario2-run-chain\n")])])]),a("p",[e._v("Wait about 5 seconds for the chain to produce its first block, then switch to another terminal:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" scenario2-run-client "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BASE_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v("\n")])])]),a("p",[e._v("You can communicate with the node by opening http://localhost:8000/")]),e._v(" "),a("p",[e._v("You can start other solo nodes with "),a("code",[e._v("make scenario2-run-client BASE_PORT=8001")]),e._v(" and "),a("code",[e._v("make scenario2-run-client BASE_PORT=8002")]),e._v(" and communicate with them respectively with on\nhttp://localhost:8001/ and http://localhost:8002/")]),e._v(" "),a("h2",{attrs:{id:"scenario-1-your-own-local-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-1-your-own-local-testnet"}},[e._v("#")]),e._v(" Scenario 1: your own local testnet")]),e._v(" "),a("h3",{attrs:{id:"develop-testnet-provisioner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#develop-testnet-provisioner"}},[e._v("#")]),e._v(" Develop testnet provisioner")]),e._v(" "),a("p",[e._v("In this scenario, you run:")]),e._v(" "),a("ul",[a("li",[e._v("a "),a("strong",[e._v("solo node")]),e._v(" exposing an HTTP server in localhost")]),e._v(" "),a("li",[e._v("a "),a("strong",[e._v("several local blockchain testnet nodes")]),e._v(" with the server-side Pixel Demo running on top.")]),e._v(" "),a("li",[e._v("a "),a("strong",[e._v("web browser")]),e._v(" connecting to the solo node and enabling user interaction with the Pixel Demo")])]),e._v(" "),a("p",[e._v("This scenario is only useful for moving toward deploying the local source code as a new\ntestnet. Before using this scenario, you should test your on-chain code under Scenario 2.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:o(209),alt:"Shared Chain"}})])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("em",[e._v("A Shared Chain setup. You can connect to the chain with multiple solo SwingSets.")])])])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" scenario1-setup\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" scenario1-run-chain\n")])])]),a("p",[e._v("Wait until the bootstrap produces a provisioning server URL and visit it.  Then run in another terminal:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" scenario1-run-client\n")])])]),a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/Agoric/cosmic-swingset#testnet-tutorial",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testnet Tutorial"),a("OutboundLink")],1),e._v(" for more guidance.")]),e._v(" "),a("h2",{attrs:{id:"scenario-0-a-public-testnet-kick-the-tires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-0-a-public-testnet-kick-the-tires"}},[e._v("#")]),e._v(" Scenario 0: a public testnet (kick the tires)")]),e._v(" "),a("p",[e._v("In this scenario, you run:")]),e._v(" "),a("ul",[a("li",[e._v("a "),a("strong",[e._v("solo node")]),e._v(" exposing an HTTP server in localhost")]),e._v(" "),a("li",[e._v("a "),a("strong",[e._v("web browser")]),e._v(" connecting to the solo node and enabling user interaction with the Pixel Demo")])]),e._v(" "),a("p",[e._v("This scenario assumes your solo node can access a "),a("strong",[e._v("blockchain running on the Internet")])]),e._v(" "),a("p",[e._v("To run the solo node using the current directory's source code against a public testnet, use:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ make scenario0-setup\n$ make scenario0-run-client\n")])])]),a("p",[e._v("Alternatively, running the solo node from a Docker image and no local source code is described in the "),a("a",{attrs:{href:"#overview"}},[e._v("top section")]),e._v(".")]),e._v(" "),a("p",[e._v("Now go to http://localhost:8000/ to interact with your new solo node.")])])}),[],!1,null,null,null);t.default=n.exports}}]);
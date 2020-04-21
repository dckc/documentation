(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{240:function(e,t,o){"use strict";o.r(t);var r=o(0),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"starting-a-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#starting-a-project"}},[e._v("#")]),e._v(" Starting a Project")]),e._v(" "),o("p",[e._v("This document shows how to start a new Agoric project. Our demos are called "),o("i",[e._v("Dapps (distributed\napplications)")]),e._v(", which typically have a browser-based user interface,\na public API server, and a contract running on the Agoric blockchain.")]),e._v(" "),o("p",[e._v("Before doing the steps given in this document, be sure you have done the necessary prerequisites\nspecified in "),o("a",{attrs:{href:"https://agoric.com/documentation/getting-started/before-using-agoric/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Before Using Agoric"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("For complete documentation on the Agoric CLI commands (those starting with "),o("code",[e._v("agoric")]),e._v(") used here,\nsee the "),o("a",{attrs:{href:"https://agoric.com/documentation/getting-started/agoric-cli-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Agoric CLI Guide"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Also, for what needs to be done after you modify a project's code, see\n"),o("a",{attrs:{href:"https://agoric.com/documentation/getting-started/development-cycle/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Development Cycle"),o("OutboundLink")],1),e._v(" "),o("br"),o("br"),e._v(" "),o("table",{attrs:{border:"1"}},[o("tbody",[o("tr",[o("th",[o("b",[e._v("Step")])]),e._v(" "),o("th",[o("b",[e._v("Action")])]),e._v(" "),o("th",[o("b",[e._v("Explanation")])])]),o("tr",[o("td",[o("center",[e._v("1")])],1),e._v(" "),o("td",[e._v("Go to or open a shell and "),o("code",[e._v("cd <directory-where-you-want-to-install-Dapp-code>")])]),e._v(" "),o("td",[e._v("When you initialize your project/Dapp in the next step, its initial code is copied into your current directory (permissions allowing).")])]),e._v(" "),o("tr",[o("td",[o("center",[e._v("2")])],1),e._v(" "),o("td",[e._v("Run "),o("code",[e._v("agoric init demo")])]),o("td",[e._v("Initializes a "),o("i",[e._v("Dapp")]),e._v(" ("),o("i",[e._v("Distributed application")]),e._v(")\nproject.\n"),o("br"),o("br"),e._v(" "),o("code",[e._v("init")]),e._v(" creates a sub-directory with the specified name\n("),o("code",[e._v("demo")]),e._v(" in this case) in your current directory and copies an existing project's files\ninto it. You can give the project any name you like. This\ndocumentation assumes you used "),o("code",[e._v("demo")]),e._v(".\n"),o("br"),o("br"),e._v("\nThere are optional arguments that let you specify which project\nyou want copied into the specified directory. By default, their values are set to\nuse the Encouragement Dapp we wrote to provide a simple skeleton for a smart contract.\nTo specify a different project, use the optional arguments:"),o("br"),e._v(" "),o("code",[e._v("--dapp-template <name>")]),e._v(" Use the project specified by this <name> as the template copied into your current directory."),o("br"),e._v(" "),o("code",[e._v("--dapp-base <base-url>")]),e._v(" Look under this directory for the Dapp template.\n"),o("br"),o("br"),e._v("If this\ndoesn't work, use "),o("code",[e._v("echo $PATH")]),e._v(" to check that your Agoric\nCLI install directory is in your "),o("code",[e._v("$PATH")]),e._v(" If not, add\nit to "),o("code",[e._v("$PATH")])])]),e._v(" "),o("tr",[o("td",[o("center",[e._v("3")])],1),e._v(" "),o("td",[o("code",[e._v("cd demo")])]),e._v(" "),o("td",[e._v("Move to the directory where your project (the demo) is\nlocated.")])]),e._v(" "),o("tr",[o("td",[o("center",[e._v("4")])],1),e._v(" "),o("td",[o("code",[e._v("agoric install")])]),e._v(" "),o("td",[e._v("Install JavaScript dependencies, which may take a while.")])]),e._v(" "),o("tr",[o("td",[o("center",[e._v("5")])],1),e._v(" "),o("td",[o("code",[e._v("agoric start --reset")]),o("br"),e._v("\n(leave this shell up with the process running)")]),e._v(" "),o("td",[e._v("Start the Agoric VM. "),o("code",[e._v("--reset")]),e._v(" discards any prior Agoric\nstate. This creates the "),o("i",[e._v("vats")]),e._v(" in which smart contract code runs.\nThe VM continues to run in this shell, making it unusable for\nrunning commands.")])]),e._v(" "),o("tr",[o("td",[o("center",[e._v("6")])],1),e._v(" "),o("td",[e._v("Open another shell, go to your "),o("code",[e._v("demo")]),e._v(" directory")]),e._v(" "),o("td",[e._v("For the remainer of this table, we call this the "),o("i",[e._v("deploy shell")]),e._v(".\n"),o("br"),o("br"),e._v("Use the same project directory name and location as you used in Step 2. In\nthis example, we used "),o("code",[e._v("demo")]),e._v(" but you may have used a\ndifferent name in Step 2.")])]),e._v(" "),o("tr",[o("td",[o("center",[e._v("7")])],1),e._v(" "),o("td",[e._v("In the deploy shell, "),o("code",[e._v("agoric deploy ./contract/deploy.js ./api/deploy.js")])]),e._v(" "),o("td",[e._v("Deploy the Dapp on an Agoric VM, install the Dapp's smart\ncontract and web API, as well as JavaScript code that implements the Agoric APIs for writing and implementing\ncontracts.")])]),e._v(" "),o("tr",[o("td",[o("center",[e._v("8")])],1),e._v(" "),o("td",[e._v("In the deploy shell, "),o("code",[e._v("cd ui")])]),e._v(" "),o("td",[e._v("Move into the sub-directory that stores the demo project's UI")])]),e._v(" "),o("tr",[o("td",[o("center",[e._v("9")])],1),e._v(" "),o("td",[e._v("In the deploy shell, "),o("code",[e._v("yarn install")])]),e._v(" "),o("td",[e._v("Install NPM dependencies")])]),e._v(" "),o("tr",[o("td",[o("center",[e._v("10")])],1),e._v(" "),o("td",[e._v("In the deploy shell, "),o("code",[e._v("yarn start")])]),e._v(" "),o("td",[o("code",[e._v("start")]),e._v(" is a "),o("code",[e._v("yarn")]),e._v(" sub-command\nimplemented by Agoric. It launches the React development server.")])]),e._v(" "),o("tr",[o("td",[o("center",[e._v("11")])],1),e._v(" "),o("td",[e._v("Go to a browser and open "),o("code",[e._v("http://localhost:3000")]),e._v(" to\nsee the Dapp. If you used the default values for "),o("code",[e._v("agoric init")]),e._v("\nin Step 2, you'll see the Encouragement demo Dapp, described in the next cell.")]),e._v(" "),o("td",[e._v("If you used the "),o("code",[e._v("agoric init")]),e._v(" defaults in Step 2,\nyou'll see our Encouragement Dapp, which lets you get encouragement,\neither for free or by making a tip. The latter requires interaction\nwith your wallet where your assets are stored. See the next step.")])]),e._v(" "),o("tr",[o("td",[o("center",[e._v("12")])],1),e._v(" "),o("td",[e._v("Go to another tab or browser and open\n"),o("code",[e._v("http://localhost:8000/")]),e._v(" to see and interact with a basic wallet and a REPL")]),e._v(" "),o("td",[e._v("REPL is "),o("i",[e._v("Read-Eval-Print Loop")]),e._v(". Your Encouragement Dapp wallet is seeded\nwith a few purses.")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
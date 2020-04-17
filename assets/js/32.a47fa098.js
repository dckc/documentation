(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{239:function(e,o,t){"use strict";t.r(o);var n=t(0),a=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"development-cycle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#development-cycle"}},[e._v("#")]),e._v(" Development Cycle")]),e._v(" "),t("p",[e._v("Here's what you have to do when you make code changes in various parts of the system, including your contract code, so that the Agoric system reflects your changes.")]),e._v(" "),t("p",[e._v("Different changes have different impacts. The table below is ordered so that your changes with the most impact are at the top in the first row. To use the table, go down the first column until you see a type of change you made.")]),e._v(" "),t("p",[e._v("Then go to that row's second column and do the action specified there. You then need to go down the second column and do every action specified in the second column down to and including the last row's second column. In other words, if you do the action in row 3's second column, you must also do the action in row 4's second column, then row 5's second column, and so on until the bottom row.")]),e._v(" "),t("p",[e._v("You don’t have to do any of the second column actions in rows above where you started.")]),e._v(" "),t("table",{attrs:{border:"1"}},[t("tbody",[t("tr",[t("td",{attrs:{colspan:"3"}},[t("b",[e._v("How to use this table:"),t("br"),t("br"),e._v(" "),t("ol",[t("li",[e._v("Go down the first column until you encounter the type of change you made.")]),e._v(" "),t("li",[e._v("Go to that row’s second column and do the action specified there (if you want to know more about what and why you’re doing, see the row’s third column).")]),e._v(" "),t("li",[e._v("Go down to the next row and do the action in its second column.")]),e._v(" "),t("li",[e._v("Repeat 3. until you reach the bottom of the table and do the action in the bottom row’s second column.")])])]),e._v("\nFor example, let’s say you changed code in "),t("code",[e._v("agoric-sdk")]),e._v(". Going down the first column, you find it and look at the action in the second column of that row. It says you need to run "),t("code",[e._v("agoric start --reset")]),e._v(". Then go to the next row and its second column to find out you need to run "),t("code",[e._v("agoric deploy contract/deploy.js")]),e._v(" Continue doing the action specified in each following row’s second column until the “refresh your browser” instruction in the bottom row.\n")])]),e._v(" "),t("tr",[t("th",[t("center",[t("b",[e._v("If you...")])])],1),t("th",[t("center",[t("b",[e._v("Then you must...")])])],1),t("th",[t("center",[t("b",[e._v("Notes")])])],1)]),e._v(" "),t("tr",[t("td",[e._v("Change which npm packages are used in "),t("code",[e._v("agoric-sdk")])]),e._v(" "),t("td",[e._v(" In your "),t("code",[e._v("agoric-sdk")]),e._v(" directory, run "),t("code",[e._v("yarn install")])]),t("td",[e._v(" Updates the "),t("code",[e._v("node_modules")]),e._v(" to match the current package declarations. ")])]),e._v(" "),t("tr",[t("td",[e._v("Change packages in the "),t("code",[e._v("packages/")]),e._v(" directory. For example, "),t("code",[e._v("SwingSet")]),e._v(", "),t("code",[e._v("eventual-send")]),e._v(", "),t("code",[e._v("default-evaluate-options")]),e._v(", "),t("code",[e._v("captp")]),e._v(", or "),t("code",[e._v("evaluate")])]),e._v(" "),t("td",[e._v("In your "),t("code",[e._v("agoric-sdk")]),e._v(" directory, run "),t("code",[e._v("yarn build")])]),e._v(" "),t("td",[e._v("Rebuilds the SDK generated files.")])]),e._v(" "),t("tr",[t("td",[e._v("This second column action needs to be done for any changes listed above this row, but doesn’t need to be done for changes listed below this row.")]),e._v(" "),t("td",[e._v("Run "),t("code",[e._v("agoric install")])]),e._v(" "),t("td",[e._v("Copies the new "),t("code",[e._v("agoric-sdk/node_modules")]),e._v(" into the Dapp.")])]),e._v(" "),t("tr"),t("tr",[t("td",[e._v("Change your contract definition.")]),e._v(" "),t("td",[e._v("Run "),t("code",[e._v("agoric deploy contract/deploy.js")])]),e._v(" "),t("td",[e._v("Pushes the new contract to the chain.")])]),e._v(" "),t("tr",[t("td",[e._v("Change the code in your contract’s `api` directory. It contains the cloud service part of your app, which talks to the contract on chain.")]),e._v(" "),t("td",[e._v("Run "),t("code",[e._v("agoric deploy api/deploy.js")])]),e._v(" "),t("td",[e._v("Pushes the API handler to your local Agoric VM,  "),t("code",[e._v("ag-solo")])])]),e._v(" "),t("tr",[t("td",[e._v("Change your UI code")]),e._v(" "),t("td",[e._v("Code changes may be automatically picked up and reflected in the display. If not, refresh the browser. ")]),e._v(" "),t("td",[e._v("When you save your changes, the ReactJS dev proxy automatically updates, but sometimes it gets confused.")])])])])])}),[],!1,null,null,null);o.default=a.exports}}]);
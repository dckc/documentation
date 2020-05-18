(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{258:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"contract-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contract-requirements"}},[t._v("#")]),t._v(" Contract Requirements")]),t._v(" "),a("Zoe-Version"),t._v(" "),a("p",[t._v("When writing a smart contract that will be run on Zoe, it's important\nto know the proper format and other expectations.")]),t._v(" "),a("p",[t._v("A Zoe contract is a JavaScript file that can import other JavaScript\ncode, including:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/@agoric/harden",target:"_blank",rel:"noopener noreferrer"}},[t._v("@agoric/harden"),a("OutboundLink")],1),t._v(": a package for recursively deep-freezing")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/@agoric/nat",target:"_blank",rel:"noopener noreferrer"}},[t._v("@agoric/nat"),a("OutboundLink")],1),t._v(": a package\nfor testing whether something is a natural number (natural numbers\nare recommended for currency-related programming in order to better\ndeal with rounding) and throwing if\nnot.")]),t._v(" "),a("li",[t._v("@agoric/notifier: A package that provides updates through\nsmartly resolving promises rather than polling")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/@agoric/zoe",target:"_blank",rel:"noopener noreferrer"}},[t._v("@agoric/zoe"),a("OutboundLink")],1),t._v(": Zoe has\nhelpers that contracts can use by importing\n"),a("code",[t._v("@agoric/zoe/src/contractSupport/zoeHelpers")])])]),t._v(" "),a("p",[t._v("A Zoe contract will be bundled up, so you should feel free to divide\nyour contract into multiple files (perhaps putting helper functions in a\nseparate file, for example) and import them.")]),t._v(" "),a("p",[t._v("A Zoe contract needs to be able to run under "),a("a",{attrs:{href:"https://github.com/Agoric/ses-shim#secure-ecmascript-shim-ses-shim",target:"_blank",rel:"noopener noreferrer"}},[t._v("Agoric's SES"),a("OutboundLink")],1),t._v(". Some legacy\nJavaScript code is incompatible with SES, because SES freezes the\nJavaScript objects you start out with (the primordials, such as "),a("code",[t._v("Object")]),t._v("), and some legacy code tries to\nmutate these.")]),t._v(" "),a("p",[t._v('The "main" contract file that potentially imports other files and\npackages needs to have the following structure:')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" makeContract "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("zcf")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    invite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required")]),t._v("\n    publicAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("zcf")]),t._v(" is the "),a("router-link",{attrs:{to:"/zoe/api/zoe-contract-facet.html"}},[t._v("Zoe Contract\nFacet")]),t._v(".")],1),t._v(" "),a("li",[a("code",[t._v("invite")]),t._v(" must be a Zoe\ninvite that will be provided to the user who instantiates the\ncontract.")]),t._v(" "),a("li",[a("code",[t._v("publicAPI")]),t._v(" is an optional object whose methods will be\navailable to anyone who knows the "),a("code",[t._v("instanceHandle")]),t._v(" of the contract\ninstance. "),a("code",[t._v("publicAPI")]),t._v(" is a good place to put public queries (i.e.\n"),a("code",[t._v("getCurrentPrice")]),t._v(" of Autoswap) and other\nrequests that shouldn't require making an offer or having an invite.")])]),t._v(" "),a("h2",{attrs:{id:"creating-an-invite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-invite"}},[t._v("#")]),t._v(" Creating an invite")]),t._v(" "),a("p",[t._v("To create an invite in the contract, you can use the Zoe Contract\nFacet method directly ("),a("router-link",{attrs:{to:"/zoe/api/zoe-contract-facet.html#zcf-makeinvitation-offerhook-customproperties"}},[a("code",[t._v("zcf.makeInvitation")])]),t._v(") or you can use the\nzoeHelpers function ("),a("router-link",{attrs:{to:"/zoe/api/zoe-helpers.html#zoehelper-inviteanoffer-options"}},[a("code",[t._v("inviteAnOffer")])]),t._v(") which has some additional\nfunctionality, like being able to specify what kind of proposal the\noffer should have.")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);
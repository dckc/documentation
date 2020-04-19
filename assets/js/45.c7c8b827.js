(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{250:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"zoe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoe"}},[t._v("#")]),t._v(" Zoe")]),t._v(" "),s("Zoe-Version"),t._v(" "),s("p",[t._v("Zoe is a long-lived and well-trusted contract that enforces offer safety for the contracts that use it. Zoe has a single "),s("code",[t._v("inviteIssuer")]),t._v(" for the entirety of its lifetime. By having a reference to Zoe, a user can get the "),s("code",[t._v("inviteIssuer")]),t._v(" and thus validate any "),s("code",[t._v("invite")]),t._v(" they receive from someone else.")]),t._v(" "),s("h2",{attrs:{id:"zoe-getinviteissuer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoe-getinviteissuer"}},[t._v("#")]),t._v(" zoe.getInviteIssuer()")]),t._v(" "),s("ul",[s("li",[t._v("Returns: "),s("code",[t._v("{Issuer}")])])]),t._v(" "),s("p",[t._v("Get the long-lived "),s("code",[t._v("inviteIssuer")]),t._v(". The mint associated with the "),s("code",[t._v("inviteIssuer")]),t._v(" creates the ERTP payments that represent the right to participate in a contract.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bob claims all with the Zoe inviteIssuer")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" inviteIssuer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInviteIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bobExclInvitePayment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" inviteIssuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("claim")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bobInvitePayment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"zoe-install-code-moduleformat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoe-install-code-moduleformat"}},[t._v("#")]),t._v(" zoe.install(code, moduleFormat)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("code")]),t._v(" "),s("code",[t._v("{String}")])]),t._v(" "),s("li",[s("code",[t._v("moduleFormat")]),t._v(" "),s("code",[t._v("{String}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Object}")])])]),t._v(" "),s("p",[t._v("Create an installation by safely evaluating the code and registering\nit with Zoe. Returns an "),s("code",[t._v("installationHandle")]),t._v(", an opaque unique\nidentifier for the contract code.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bundleSource "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/bundle-source'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Pack the contract.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sourceCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moduleFormat "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bundleSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someContract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// install and get the `installationHandle` for someContract")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" installationHandle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sourceCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moduleFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"zoe-makeinstance-installationhandle-issuerkeywordrecord-terms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoe-makeinstance-installationhandle-issuerkeywordrecord-terms"}},[t._v("#")]),t._v(" zoe.makeInstance(installationHandle, issuerKeywordRecord, terms)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("installationHandle")]),t._v(" "),s("code",[t._v("{Object}")])]),t._v(" "),s("li",[s("code",[t._v("issuerKeywordRecord")]),t._v(" "),s("code",[t._v("{Object}")])]),t._v(" "),s("li",[s("code",[t._v("terms")]),t._v(" "),s("code",[t._v("{Object}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Invite}")])])]),t._v(" "),s("p",[t._v("We can use Zoe to create smart contract instances by specifying a\nparticular contract installation to use, as well as the\n"),s("code",[t._v("issuerKeywordRecord")]),t._v(" and "),s("code",[t._v("terms")]),t._v(" of the contract. The\n"),s("code",[t._v("issuerKeywordRecord")]),t._v(" is a record mapping string names (keywords) to\nissuers, such as "),s("code",[t._v("{ Asset: simoleanIssuer}")]),t._v(". (Note that the keywords\nmust begin with a capital letter and must be ASCII.) Parties to the\ncontract will use the keywords to index their proposal and their\npayments. The payout that users receive from Zoe will be in the form of an\nobject with keywords as keys. Terms are the arguments to the contract,\nsuch as the number of bids an auction will wait for before closing.\nTerms are up to the discretion of the smart contract. We get back an\ninvite (an ERTP payment) to participate in the contract.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" issuerKeywordRecord "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Asset'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moolaIssuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Price'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" simoleanIssuer \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" terms "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" numBids"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" someInvite "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  secondPriceAuctionInstallationHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  issuerKeywordRecord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  terms\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"zoe-getinstancerecord-instancehandle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoe-getinstancerecord-instancehandle"}},[t._v("#")]),t._v(" zoe.getInstanceRecord(instanceHandle)")]),t._v(" "),s("ul",[s("li",[t._v("Returns: "),s("router-link",{attrs:{to:"/zoe/api/table-columns.html#instance-record-properties"}},[s("code",[t._v("{InstanceRecord}")])])],1)]),t._v(" "),s("p",[t._v("Credibly get the instance record using the "),s("code",[t._v("instanceHandle")]),t._v(" ID.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  installationHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  publicAPI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  terms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  issuerKeywordRecord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  keywords"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstanceRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instanceHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"zoe-offer-invite-proposal-payments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoe-offer-invite-proposal-payments"}},[t._v("#")]),t._v(" zoe.offer(invite, proposal, payments)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("invite")]),t._v(" "),s("code",[t._v("{Payment}")])]),t._v(" "),s("li",[s("code",[t._v("proposal")]),t._v(" "),s("router-link",{attrs:{to:"/zoe/api/structs.html#proposal"}},[s("code",[t._v("{Proposal}")])])],1),t._v(" "),s("li",[s("code",[t._v("paymentKeywordRecord")]),t._v(" "),s("code",[t._v("{PaymentKeywordRecord}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("Promise<{OfferResultRecord}>")])])]),t._v(" "),s("p",[t._v("To make an offer to a contract, the user must provide an invite ot the\ncontract, a proposal (their rules for the offer), and the payments to be\nescrowed by Zoe.")]),t._v(" "),s("p",[t._v("The proposal has three parts: "),s("code",[t._v("want")]),t._v(" and "),s("code",[t._v("give")]),t._v(" are used\nby Zoe to enforce offer safety; "),s("code",[t._v("exit")]),t._v(" is used to specify\nthe particular payout-liveness policy that Zoe can guarantee.\n"),s("code",[t._v("want")]),t._v(" and "),s("code",[t._v("give")]),t._v(" are objects with keywords as keys and amounts\nas values.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("paymentKeywordRecord")]),t._v(" is a record with keywords as keys,\nand the values are the actual payments to be escrowed. A payment\nis required for every rule under "),s("code",[t._v("give")]),t._v(".")]),t._v(" "),s("p",[t._v("The resulting "),s("code",[t._v("OfferResultRecord")]),t._v(" contains a handle for querying\nZoe about the offer, a promise for the payouts when the offer\nis complete, a promise for the result of invoking the contract-specific\nhook associated with the invitation, and if appropriate for the specified\n"),s("code",[t._v("exit")]),t._v(" policy, a function to cancel the offer.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A user makes an offer and escrows with Zoe using an invite ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" offerHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" userPayoutP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" outcome"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" outcomeP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cancelObj "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    userInvite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    userProposal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    userPayments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"zoe-isofferactive-offerhandle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoe-isofferactive-offerhandle"}},[t._v("#")]),t._v(" zoe.isOfferActive(offerHandle)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("offerHandles")]),t._v(" "),s("code",[t._v("{Object}")])]),t._v(" "),s("li",[t._v("Returns: `{Boolean}``")])]),t._v(" "),s("p",[t._v("Check if the offer is still active. This method does not throw if the offer is inactive.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isActive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isOfferActive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someOfferHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"zoe-getoffers-offerhandles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoe-getoffers-offerhandles"}},[t._v("#")]),t._v(" zoe.getOffers(offerHandles)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("offerHandles")]),t._v(" "),s("code",[t._v("{Array <Object>}")])]),t._v(" "),s("li",[t._v("Returns: "),s("router-link",{attrs:{to:"/zoe/api/records.html#offer-record"}},[s("code",[t._v("{Array <OfferRecord>}")])])],1)]),t._v(" "),s("p",[t._v("Get a list of offer records. Throws error if offers are not found.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" offers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("listOfOfferHandles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"zoe-getoffer-offerhandle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoe-getoffer-offerhandle"}},[t._v("#")]),t._v(" zoe.getOffer(offerHandle)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("offerHandle")]),t._v(" "),s("code",[t._v("{Object}")])]),t._v(" "),s("li",[t._v("Returns: "),s("router-link",{attrs:{to:"/zoe/api/records.html#offer-record"}},[s("code",[t._v("{<OfferRecord>}")])])],1)]),t._v(" "),s("p",[t._v("Get the offer record. Throws error if the offer is not found.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  installationHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  publicAPI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  terms\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inviteHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);
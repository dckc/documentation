(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{250:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"zoe-contract-facet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zoe-contract-facet"}},[t._v("#")]),t._v(" Zoe Contract Facet")]),t._v(" "),e("Zoe-Version"),t._v(" "),e("h2",{attrs:{id:"zcf-reallocate-offerhandles-reallocation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-reallocate-offerhandles-reallocation"}},[t._v("#")]),t._v(" zcf.reallocate(offerHandles, reallocation)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("offerHandles")]),t._v(" "),e("code",[t._v("{Array <Object>}")])]),t._v(" "),e("li",[e("code",[t._v("reallocation")]),t._v(" "),e("router-link",{attrs:{to:"/zoe/api/records.html#amountkeywordrecord"}},[e("code",[t._v("{Array <AmountKeywordRecord>}")])])],1)]),t._v(" "),e("p",[t._v("Instruct Zoe to try reallocating for the given "),e("code",[t._v("offerHandles")]),t._v(". Reallocation is an array of "),e("code",[t._v("AmountKeywordRecords")]),t._v(", which are objects where the keys are keywords and the values are amounts. The amount to be paid to the player who made the offer at the same index in the "),e("code",[t._v("offerHandles")]),t._v(" array. The reallocation will only happen if 'offer safety' and conservation of rights are true, as enforced by Zoe.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" harden "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/harden'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reallocate by switching the amount of the firstOffer and matchingOffer")]),t._v("\nzoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("reallocate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("firstOfferHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" matchingOfferHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("matchingOfferAmount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" firstOfferAmount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"zcf-complete-offerhandles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-complete-offerhandles"}},[t._v("#")]),t._v(" zcf.complete(offerHandles)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("offerHandles")]),t._v(" "),e("code",[t._v("{Array <Object>}")])])]),t._v(" "),e("p",[t._v("Eject the offer, taking the current allocation for that offer and creating payments to be returned to the user. No 'offer safety' checks are done here because any previous reallocation performed those checks.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" harden "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/harden'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nzoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("someOfferHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"zcf-addnewissuer-issuer-keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-addnewissuer-issuer-keyword"}},[t._v("#")]),t._v(" zcf.addNewIssuer(issuer, keyword)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("issuers")]),t._v(" "),e("code",[t._v("{Issuer}")])]),t._v(" "),e("li",[e("code",[t._v("keyword")]),t._v(" "),e("code",[t._v("{String}")])]),t._v(" "),e("li",[t._v("Returns: "),e("code",[t._v("{Promise}")])])]),t._v(" "),e("p",[t._v("Inform Zoe about a new issuer. Returns a promise for acknowledging when the issuer is added and ready.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNewIssuer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("liquidityIssuer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Liquidity'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do stuff")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"zcf-getzoeservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-getzoeservice"}},[t._v("#")]),t._v(" zcf.getZoeService()")]),t._v(" "),e("ul",[e("li",[t._v("Returns: "),e("code",[t._v("{ZoeService}")])])]),t._v(" "),e("p",[t._v("Expose the user-facing Zoe Service API to the contracts as well.")]),t._v(" "),e("h2",{attrs:{id:"zcf-makeinvite-seat-customproperties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-makeinvite-seat-customproperties"}},[t._v("#")]),t._v(" zcf.makeInvite(seat, customProperties)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("seat")]),t._v(" "),e("code",[t._v("{Object}")])]),t._v(" "),e("li",[e("code",[t._v("customProperties")]),t._v(" "),e("code",[t._v("{Object}")])]),t._v(" "),e("li",[t._v("Returns: "),e("code",[t._v("{Payment}")])])]),t._v(" "),e("p",[t._v("Create an invite using the Zoe "),e("code",[t._v("inviteMint")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" invite"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inviteHandle "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeInvite")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  seat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" seatDesc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bid'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" auctionedAssets"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tickets3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minimumBid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" simoleans100 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"zcf-getinviteissuer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-getinviteissuer"}},[t._v("#")]),t._v(" zcf.getInviteIssuer()")]),t._v(" "),e("ul",[e("li",[t._v("Returns: "),e("code",[t._v("{Issuer}")])])]),t._v(" "),e("p",[t._v("Get the Zoe "),e("code",[t._v("inviteIssuer")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" inviteIssuer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInviteIssuer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"zcf-getamountmaths-issuerkeywordrecord"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-getamountmaths-issuerkeywordrecord"}},[t._v("#")]),t._v(" zcf.getAmountMaths(issuerKeywordRecord)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("issuerKeywordRecord")]),t._v(" "),e("router-link",{attrs:{to:"/zoe/api/records.html#issuerkeywordrecord"}},[e("code",[t._v("{IssuerKeywordRecord}")])])],1),t._v(" "),e("li",[t._v("Returns: "),e("router-link",{attrs:{to:"/zoe/api/records.html#amountmathkeywordrecord"}},[e("code",[t._v("{AmountMathKeywordRecord}")])])],1)]),t._v(" "),e("p",[t._v("Pass in an issuerKeywordRecord and get an amountMathKeywordRecord in return.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" amountMathKeywordRecord "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAmountMaths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("issuerKeywordRecord"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"zcf-isofferactive-offerhandle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-isofferactive-offerhandle"}},[t._v("#")]),t._v(" zcf.isOfferActive(offerHandle)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("offerHandles")]),t._v(" "),e("code",[t._v("{Object}")])]),t._v(" "),e("li",[t._v("Returns: `{Boolean}``")])]),t._v(" "),e("p",[t._v("Check if the offer is still active. This method does not throw if the offer is inactive.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isActive "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isOfferActive")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someOfferHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"zcf-getofferstatuses-offerhandles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-getofferstatuses-offerhandles"}},[t._v("#")]),t._v(" zcf.getOfferStatuses(offerHandles)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("offerHandles")]),t._v(" "),e("code",[t._v("{Array <Object>}")])]),t._v(" "),e("li",[t._v("Returns: "),e("code",[t._v("{OfferStatusesRecord}")])])]),t._v(" "),e("p",[t._v("Divide the "),e("code",[t._v("offerHandles")]),t._v(" into 'active' and 'inactive' lists")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" active"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" activeBidHandles "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOfferStatuses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allBidHandles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"zcf-getoffers-offerhandles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-getoffers-offerhandles"}},[t._v("#")]),t._v(" zcf.getOffers(offerHandles)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("offerHandles")]),t._v(" "),e("code",[t._v("{Array <Object>}")])]),t._v(" "),e("li",[t._v("Returns: "),e("router-link",{attrs:{to:"/zoe/api/records.html#offer-record"}},[e("code",[t._v("{Array <OfferRecord>}")])])],1)]),t._v(" "),e("p",[t._v("Get a list of offer records.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" offers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("listOfOfferHandles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"zcf-getoffer-offerhandle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-getoffer-offerhandle"}},[t._v("#")]),t._v(" zcf.getOffer(offerHandle)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("offerHandle")]),t._v(" "),e("code",[t._v("{Object}")])]),t._v(" "),e("li",[t._v("Returns: "),e("router-link",{attrs:{to:"/zoe/api/records.html#offer-record"}},[e("code",[t._v("{<OfferRecord>}")])])],1)]),t._v(" "),e("p",[t._v("Get the offer record.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" payoutRules "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inviteHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"zcf-getinstancerecord"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zcf-getinstancerecord"}},[t._v("#")]),t._v(" zcf.getInstanceRecord()")]),t._v(" "),e("ul",[e("li",[t._v("Returns: "),e("router-link",{attrs:{to:"/zoe/api/records.html#instance-record-properties"}},[e("code",[t._v("{InstanceRecord}")])])],1)]),t._v(" "),e("p",[t._v('Get the instance record. This allows the contracts to get access\nto their keywords, issuers and other "instanceRecord" information from\nZoe.')]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuerKeywordRecord"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keywords"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" terms "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstanceRecord")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);
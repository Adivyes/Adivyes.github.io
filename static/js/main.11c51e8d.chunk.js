(this["webpackJsonpfuse-dashbord"]=this["webpackJsonpfuse-dashbord"]||[]).push([[0],{204:function(e,n,t){},205:function(e,n,t){},207:function(e,n,t){},209:function(e,n,t){},223:function(e,n){},232:function(e,n){},250:function(e,n){},252:function(e,n){},269:function(e,n){},270:function(e,n){},334:function(e,n){},336:function(e,n){},345:function(e,n){},347:function(e,n){},372:function(e,n){},374:function(e,n){},375:function(e,n){},380:function(e,n){},382:function(e,n){},395:function(e,n){},407:function(e,n){},410:function(e,n){},415:function(e,n){},426:function(e,n){},429:function(e,n){},481:function(e){e.exports=JSON.parse('[{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Blacklisted","inputs":[{"type":"address","name":"_account","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"BlacklisterChanged","inputs":[{"type":"address","name":"newBlacklister","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Burn","inputs":[{"type":"address","name":"burner","internalType":"address","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"MasterMinterChanged","inputs":[{"type":"address","name":"newMasterMinter","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Mint","inputs":[{"type":"address","name":"minter","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"MinterConfigured","inputs":[{"type":"address","name":"minter","internalType":"address","indexed":true},{"type":"uint256","name":"minterAllowedAmount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"MinterRemoved","inputs":[{"type":"address","name":"oldMinter","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":false},{"type":"address","name":"newOwner","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"Pause","inputs":[],"anonymous":false},{"type":"event","name":"PauserChanged","inputs":[{"type":"address","name":"newAddress","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"UnBlacklisted","inputs":[{"type":"address","name":"_account","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Unpause","inputs":[],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"blacklist","inputs":[{"type":"address","name":"_account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"blacklister","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"burn","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"configureMinter","inputs":[{"type":"address","name":"minter","internalType":"address"},{"type":"uint256","name":"minterAllowedAmount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"currency","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"initialize","inputs":[{"type":"string","name":"tokenName","internalType":"string"},{"type":"string","name":"tokenSymbol","internalType":"string"},{"type":"string","name":"tokenCurrency","internalType":"string"},{"type":"uint8","name":"tokenDecimals","internalType":"uint8"},{"type":"address","name":"newMasterMinter","internalType":"address"},{"type":"address","name":"newPauser","internalType":"address"},{"type":"address","name":"newBlacklister","internalType":"address"},{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isBlacklisted","inputs":[{"type":"address","name":"_account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isMinter","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"masterMinter","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"mint","inputs":[{"type":"address","name":"_to","internalType":"address"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minterAllowance","inputs":[{"type":"address","name":"minter","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"pause","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"paused","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"pauser","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"removeMinter","inputs":[{"type":"address","name":"minter","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"unBlacklist","inputs":[{"type":"address","name":"_account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"unpause","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateBlacklister","inputs":[{"type":"address","name":"_newBlacklister","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateMasterMinter","inputs":[{"type":"address","name":"_newMasterMinter","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePauser","inputs":[{"type":"address","name":"_newPauser","internalType":"address"}]}]')},482:function(e,n,t){"use strict";t.r(n);var a=t(24),s=t.n(a),i=t(194),r=t.n(i),d=(t(204),t(68)),c=(t(205),t(1));var u=function(e){e.sidebarOpen;var n=e.openSidebar;return Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsx)("div",{className:"nav_icon",onClick:function(){return n()},children:Object(c.jsx)("i",{className:"fa fa-bars"})}),Object(c.jsxs)("div",{className:"navbar__left",children:[Object(c.jsx)("a",{href:"https://health.fuse.io/",children:"Network Status"}),Object(c.jsx)("a",{href:"https://explorer.fuse.io/accounts",children:"Accounts"}),Object(c.jsx)("a",{className:"active_link",href:"https://explorer.fusenet.io/",children:"Explorer"})]}),Object(c.jsx)("div",{className:"navbar__right",children:Object(c.jsx)("a",{children:Object(c.jsx)("img",{width:"30",src:"data:image/png;base64,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",alt:"avatar"})})})]})},p=(t(207),t.p+"static/media/logo.b4b93073.svg");var l=function(e){var n=e.sidebarOpen,t=e.closeSidebar;return Object(c.jsxs)("div",{className:n?"sidebar_responsive":"",id:"sidebar",children:[Object(c.jsxs)("div",{className:"sidebar__title",children:[Object(c.jsxs)("div",{className:"sidebar__img",children:[Object(c.jsx)("a",{href:"https://fuse.io/",children:Object(c.jsx)("img",{src:p,alt:"logo"})}),Object(c.jsx)("h1",{})]}),Object(c.jsx)("i",{onClick:function(){return t()},className:"fa fa-times",id:"sidebarIcon","aria-hidden":"true"})]}),Object(c.jsxs)("div",{className:"sidebar__menu",children:[Object(c.jsx)("h2",{children:"APPS"}),Object(c.jsxs)("div",{className:"sidebar__link",children:[Object(c.jsx)("i",{className:"fa fa-trophy","aria-hidden":"true"}),Object(c.jsx)("a",{href:"https://rewards.fuse.io/",children:"LP Rewards"})]}),Object(c.jsxs)("div",{className:"sidebar__link",children:[Object(c.jsx)("i",{className:"fa fa-refresh"}),Object(c.jsx)("a",{href:"https://fuseswap.com/#/swap",children:"Fuseswap"})]}),Object(c.jsxs)("div",{className:"sidebar__link",children:[Object(c.jsx)("i",{className:"fa fa-wrench"}),Object(c.jsx)("a",{href:"https://studio.fuse.io/",children:"Studio"})]}),Object(c.jsxs)("div",{className:"sidebar__link",children:[Object(c.jsx)("i",{className:"fa fa-line-chart"}),Object(c.jsx)("a",{href:"https://staking.fuse.io/",children:"Staking"})]}),Object(c.jsx)("h2",{children:"TOKENS"}),Object(c.jsxs)("div",{className:"sidebar__link",children:[Object(c.jsx)("i",{className:"fa fa-btc"}),Object(c.jsx)("a",{href:"https://explorer.fuse.io/tokens",children:"All tokens"})]}),Object(c.jsxs)("div",{className:"sidebar__link",children:[Object(c.jsx)("i",{className:"fa fa-connectdevelop"}),Object(c.jsx)("a",{href:"https://explorer.fuse.io/bridged-tokens",children:"Bridged tokens"})]}),Object(c.jsx)("h2",{children:"TRANSACTIONS"}),Object(c.jsxs)("div",{className:"sidebar__link",children:[Object(c.jsx)("i",{className:"fa fa-check"}),Object(c.jsx)("a",{href:"https://explorer.fuse.io/txs",children:"Validated"})]}),Object(c.jsxs)("div",{className:"sidebar__link",children:[Object(c.jsx)("i",{className:"fa fa-clock-o"}),Object(c.jsx)("a",{href:"https://explorer.fuse.io/pending-transactions",children:"Pending"})]})]})]})},o=t(21),y=t.n(o),m=t(67),b=(t(209),t(210)),f=t(481),j=new b(new b.providers.HttpProvider("https://rpc.fuse.io"));function h(){return x.apply(this,arguments)}function x(){return(x=Object(m.a)(y.a.mark((function e(){var n,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0x249BE57637D8B013Ad64785404b24aeBaE9B098B",n=new j.eth.Contract(f,"0x249BE57637D8B013Ad64785404b24aeBaE9B098B"),e.prev=2,e.next=5,n.methods.totalSupply().call();case 5:return t=e.sent,e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:return e.prev=12,e.finish(12);case 14:case"end":return e.stop()}}),e,null,[[2,9,12,14]])})))).apply(this,arguments)}var O=function(){var e=new Intl.NumberFormat("en"),n=Object(a.useState)(0),t=Object(d.a)(n,2),s=t[0],i=t[1],r=function(){var n=Object(m.a)(y.a.mark((function n(){var t,a,s,r,d;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h();case 2:for(t=n.sent,a=Array.from(String(t),Number),s=[],r=0;r<9;r++)6===r&&s.push("."),s.push(a[r]);d=s.join(""),d=e.format(d),i(d);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){r()}),[]),Object(c.jsx)("main",{children:Object(c.jsxs)("div",{className:"main__container",children:[Object(c.jsx)("div",{className:"main__title",children:Object(c.jsxs)("div",{className:"main__greeting",children:[Object(c.jsx)("h1",{children:"Hello Dear Fuser"}),Object(c.jsx)("p",{children:"Welcome to our dashboard"})]})}),Object(c.jsxs)("div",{className:"main__cards",children:[Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("i",{className:"fa fa-rocket fa-2x","aria-hidden":"true"}),Object(c.jsxs)("div",{className:"card_inner",children:[Object(c.jsx)("p",{className:"text-primary-p",children:"fUSD total supply"}),Object(c.jsx)("span",{className:"font-bold text-title",children:s})]})]}),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("i",{className:"fa fa-repeat fa-2x ","aria-hidden":"true"}),Object(c.jsxs)("div",{className:"card_inner",children:[Object(c.jsx)("p",{className:"text-primary-p",children:"fUSD in circulating "}),Object(c.jsx)("span",{className:"font-bold text-title",children:"99,400.5 "})]})]}),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("i",{className:"fa fa-shield fa-2x ","aria-hidden":"true"}),Object(c.jsxs)("div",{className:"card_inner",children:[Object(c.jsx)("p",{className:"text-primary-p",children:"fUSD backed in pegswap "}),Object(c.jsx)("span",{className:"font-bold text-title",children:"47,606.42"})]})]})]}),Object(c.jsx)("div",{className:"charts",children:Object(c.jsxs)("div",{className:"charts__right",children:[Object(c.jsxs)("div",{className:"charts__right__title",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Fuse stats "})}),Object(c.jsx)("i",{className:"fa fa-bar-chart","aria-hidden":"true"})]}),Object(c.jsxs)("div",{className:"charts__right__cards",children:[Object(c.jsxs)("div",{className:"card1",children:[Object(c.jsx)("h1",{children:"My fUSD"}),Object(c.jsx)("p",{children:"75,300"})]}),Object(c.jsxs)("div",{className:"card2",children:[Object(c.jsx)("h1",{children:"fUSD to swaped"}),Object(c.jsx)("p",{children:"40,408,566 "})]}),Object(c.jsxs)("div",{className:"card3",children:[Object(c.jsx)("h1",{children:"USDC "}),Object(c.jsx)("p",{children:"143,136.189"})]}),Object(c.jsxs)("div",{className:"card4",children:[Object(c.jsx)("h1",{children:"Wallet addresses "}),Object(c.jsx)("p",{children:"362,040"})]})]})]})})]})})};var v=function(){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),t=n[0],s=n[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(u,{sidebarOpen:t,openSidebar:function(){s(!0)}}),Object(c.jsx)(O,{}),Object(c.jsx)(l,{sidebarOpen:t,closeSidebar:function(){s(!1)}})]})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,486)).then((function(n){var t=n.getCLS,a=n.getFID,s=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),T()}},[[482,1,2]]]);
//# sourceMappingURL=main.11c51e8d.chunk.js.map
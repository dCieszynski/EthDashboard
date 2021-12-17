(this["webpackJsonpreact-dapp"]=this["webpackJsonpreact-dapp"]||[]).push([[0],{46:function(e,t,a){},49:function(e,t){},58:function(e,t){},61:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),c=a(35),s=a.n(c),o=(a(46),a(5)),i=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{className:"header header--main",children:" Ether Dashboard"})})},u=a(2),d=a.n(u),l=a(16),j=a(15),b=a(14),h=a(13),f=function(e){var t=function(e){var t=new Date(1e3*e),a=t.getMonth(),n=t.getFullYear();return t.getDate()+"."+a+"."+n};return Object(o.jsxs)("div",{className:"transactionsHistory",children:[Object(o.jsx)("h2",{className:"header header-transactionsHistory",children:"Transactions History"}),Object(o.jsx)("div",{className:"table",children:Object(o.jsxs)("div",{className:"table-content",children:[Object(o.jsxs)("div",{className:"table__col",children:[Object(o.jsx)("h3",{className:"header header--table",children:"Date"}),e.transactionsHistory.map((function(e,a){return Object(o.jsx)("div",{className:"table-row",children:t(e.timestamp)},a)}))]}),Object(o.jsxs)("div",{className:"table__col",children:[Object(o.jsx)("h3",{className:"header header--table",children:"From address"}),e.transactionsHistory.map((function(t,a){return Object(o.jsx)("div",{className:"table-row "+(e.account===String(t.from).toLowerCase()?"account-address":""),children:String(t.from).toLowerCase()},a)}))]}),Object(o.jsxs)("div",{className:"table__col",children:[Object(o.jsx)("h3",{className:"header header--table",children:"To address"}),e.transactionsHistory.map((function(t,a){return Object(o.jsx)("div",{className:"table-row "+(e.account===String(t.to).toLowerCase()?"account-address":""),children:String(t.to).toLowerCase()},a)}))]}),Object(o.jsxs)("div",{className:"table__col",children:[Object(o.jsx)("h3",{className:"header header--table",children:"Value"}),e.transactionsHistory.map((function(e,t){return Object(o.jsxs)("div",{className:"table-row",children:[parseFloat(b.a.utils.formatEther(h.a.from(e.value._hex))).toFixed(4)," ","ETH"]},t)}))]})]})})]})},O=function(e){return Object(o.jsxs)("div",{className:"userInfo",children:[Object(o.jsxs)("h2",{className:"header header--dashboard account-address",children:["User account: ",e.account]}),Object(o.jsxs)("h2",{className:"header header--dashboard",children:["Balance: ",e.balance," ETH"]})]})},m=function(e){return Object(o.jsxs)("div",{className:"dashboard",children:[Object(o.jsx)(O,{account:e.account,balance:e.balance}),Object(o.jsx)(f,{account:e.account,transactionsHistory:e.transactionsHistory})]})},p=function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),s=Object(j.a)(c,2),i=s[0],u=s[1],h=Object(n.useState)("Connect Wallet"),f=Object(j.a)(h,2),O=f[0],p=f[1],x=Object(n.useState)(),v=Object(j.a)(x,2),w=v[0],N=v[1],y=Object(n.useState)(),g=Object(j.a)(y,2),H=g[0],k=g[1],S=Object(n.useState)([]),_=Object(j.a)(S,2),E=_[0],C=_[1];Object(n.useEffect)((function(){F(),D()}),[w]);var F=function(){var e=Object(l.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===w){e.next=8;break}return e.next=3,w.getBalance(i);case 3:return t=e.sent,e.next=6,b.a.utils.formatEther(t);case 6:a=e.sent,k(parseFloat(a).toFixed(4));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===i){e.next=5;break}return"ropsten",t=new b.a.providers.EtherscanProvider("ropsten"),e.next=5,t.getHistory(i).then((function(e){C(e),console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){var e=Object(l.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new b.a.providers.Web3Provider(window.ethereum);case 2:t=e.sent,N(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:a=e.sent,u(a[0]),p("Wallet connected"),t();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),window.ethereum?t():r("Need to install MetaMask!");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"container container--login",children:[Object(o.jsx)("button",{className:"btn btn--login",onClick:L,children:O}),Object(o.jsx)(m,{account:i,balance:H,transactionsHistory:E}),a]})};var x=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{}),Object(o.jsx)(p,{})]})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.579b96e8.chunk.js.map
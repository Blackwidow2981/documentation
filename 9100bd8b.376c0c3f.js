(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return g}));var a=n(3),o=n(7),r=(n(0),n(365)),l=["components"],s={title:"Chat Auto translate",sidebar_label:"Chat Auto translate"},c={unversionedId:"platform_concepts/inbox/Chat auto translate",id:"platform_concepts/inbox/Chat auto translate",isDocsHomePage:!1,title:"Chat Auto translate",description:"Chat Auto translate",source:"@site/docs/platform_concepts/inbox/Chat auto translate.md",slug:"/platform_concepts/inbox/Chat auto translate",permalink:"/docs/platform_concepts/inbox/Chat auto translate",version:"current",sidebar_label:"Chat Auto translate",sidebar:"platform_concepts",previous:{title:"Chat report metrics 101",permalink:"/docs/platform_concepts/inbox/Chat report metrics 101"},next:{title:"How to get your own Google Translate API key",permalink:"/docs/platform_concepts/inbox/google-translate-api-inbox"}},i=[{value:"How to use Inbox&#39;s Auto translate",id:"how-to-use-inboxs-auto-translate",children:[{value:"Note:",id:"note",children:[]}]}],u={toc:i};function g(e){var t=e.components,n=Object(o.a)(e,l);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"chat-auto-translate"},"Chat Auto translate"),Object(r.b)("h2",{id:"how-to-use-inboxs-auto-translate"},"How to use Inbox's Auto translate"),Object(r.b)("p",null,"Inbox\u2019s Auto-translate feature provides a real-time 2-way translation between the agent as well as the end-user for over 100+ languages. This allows both the parties to speak in their preferred language while the system takes care of their near-instant translation."),Object(r.b)("h4",{id:"enabling-auto-translate"},"Enabling auto translate:"),Object(r.b)("p",null,"To enable chat auto translate,"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Go to Inbox -> Chats -> Settings -> Chats configuration -> Chat auto translate")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/V5AZb4EivnvU1634802769954.png",alt:"Chat auto translate"})),Object(r.b)("p",null,"Now turn on the toggle. Add your Google Cloud Translate API key in its input field.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/google-translate-api-inbox/"},"Here's how you can generate your own google translate API key")),Object(r.b)("p",null,"Once your API key is validated, you would get a success notification. If not, pls check the API key and try again. If\nthe issue persists, regenerate the API key.\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/sznmMoQf9xkT1634802877386.png",alt:"API Success"})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/4unnXpXEglAD1634802950978.png",alt:"API Fail"})),Object(r.b)("h4",{id:"changing-agents-language-optional"},"Changing Agent\u2019s language: (optional)"),Object(r.b)("p",null,"English is the default agent messaging language. If you want to change your agent\u2019s messaging languages,"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Go to Inbox -> Chats -> Settings -> Agents configuration. Select the edit icon for that particular agent and change the Default language")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/twEksPNGUa691634803072880.png",alt:"Default language"})),Object(r.b)("h4",{id:"auto-translate-in-action"},"Auto translate in Action:"),Object(r.b)("p",null,"Any incoming language will be auto-detected by the system. You can also hardcode to translate only a particular set of languages."),Object(r.b)("p",null,"Once a foreign language is detected, Agents can identify the language at the top of their chat input box. If needed, agents can manually change the language also\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/x6YX7Sw670lb1634803196101.png",alt:"Language detection"})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/F8nooNQW9uda1634803257954.png",alt:"Change language"})),Object(r.b)("p",null,"Now all incoming and outgoing messages would be translated according to the agents\u2019 and end-users preferred language. Agents can toggle and see both the original and translated message by clicking on the label - ",Object(r.b)("strong",{parentName:"p"},"Show translated / Show original")," below each message as shown below,\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Pa8yHsOjOt101634803395295.png",alt:"Labels"})),Object(r.b)("p",null,"If for any reason, the agents want to send a generic message such as address without being translated, then all they need to do is to disable this toggle in the chat input box. This will stop translation for that message alone.\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/sgxn9hy3kr2G1634803422903.png",alt:"Toggle off"})),Object(r.b)("p",null,"After that message is sent, the toggle will automatically enable itself for the translation of the next message."),Object(r.b)("h3",{id:"note"},"Note:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The cost of the Translate API is borne by the client.\n"),Object(r.b)("li",{parentName:"ul"},"You can either choose to auto-translate all the incoming languages or hardcode to translate only a particular set of languages. Note that if you\u2019ve set to auto-translate any language in the bot, it\u2019ll likely increase the billing\n"),Object(r.b)("li",{parentName:"ul"},"The translation will also work when transferring chats. For example, when agent \u2018A\u2019 whose default language is English transfers the incoming French chat to agent \u2018B\u2019 whose default language is Hindi, our system will translate all the previous messages from English to Hindi for agent \u2018B\u2019.")))}g.isMDXComponent=!0},365:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),g=u(n),b=a,h=g["".concat(l,".").concat(b)]||g[b]||p[b]||r;return n?o.a.createElement(h,s(s({ref:t},i),{},{components:n})):o.a.createElement(h,s({ref:t},i))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
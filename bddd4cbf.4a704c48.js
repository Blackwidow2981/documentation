(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{278:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(365)),i=["components"],l={title:"Web Client",sidebar_label:"Web Client"},c={unversionedId:"platform_concepts/channelConfiguration/web",id:"platform_concepts/channelConfiguration/web",isDocsHomePage:!1,title:"Web Client",description:"Authenticate the Users in the Web Widget from the Parent Interface via Session Tokens",source:"@site/docs/platform_concepts/channelConfiguration/web.md",slug:"/platform_concepts/channelConfiguration/web",permalink:"/docs/platform_concepts/channelConfiguration/web",version:"current",sidebar_label:"Web Client",sidebar:"platform_concepts",previous:{title:"Setup Web Widget",permalink:"/docs/platform_concepts/channelConfiguration/web-widget"},next:{title:"How to setup a WhatsApp chatbot on Yellow Messenger?",permalink:"/docs/platform_concepts/channelConfiguration/whatsapp-configuration"}},s=[{value:"Share user data from parent interface to bot using data payload",id:"share-user-data-from-parent-interface-to-bot-using-data-payload",children:[]}],p={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"authenticate-the-users-in-the-web-widget-from-the-parent-interface-via-session-tokens"},"Authenticate the Users in the Web Widget from the Parent Interface via Session Tokens"),Object(o.b)("p",null,"Process:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In the script of publish your bot, developer can configure to add session tokens."),Object(o.b)("li",{parentName:"ol"},"Based on the session tokens we will receive, we will do a parent interface auth API call."),Object(o.b)("li",{parentName:"ol"},"Based on the response from API, we can start the session with the same UID for user.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Place the following script at the end of your ",Object(o.b)("inlineCode",{parentName:"li"},"</body>")," tag")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript">\nwindow.ymConfig = { bot:\u2019botId\u2019, ymAuthenticationToken: { id:"userPin",lang: "lang_code"} };  (function () {var w=window,ic=w.YellowMessenger;\nif("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function()\n{i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,\ne.src="https://app.yellowmessenger.com/widget/main.js";var t=d.getElementsByTagName("script")[0];\nt.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,\nw.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();\n<\/script>\n')),Object(o.b)("p",null,"Don't forget to update the Bot ID and User PIN and Language Code in the given code."),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Event name 'authenticate' will be received in the bot.")),Object(o.b)("p",null,"On receiving the event, we need to send back the senderId using the below code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'app.sendEvent({\n               code: "verifiedUser",\n               data: senderId\n           });\n')),Object(o.b)("p",null,"Sample Code for reference:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'if (app.data.event && app.data.event.code === \'authenticate\') {\n   /**check db for userpin => map the app.sender to the userpin\n    *next time when this event is received, check the userpin already has a sender in db,\n    *if yes => fetch the sender id and send it in the event\n    *else => send app.sender in the event */\n   const authenticate = async () => {\n       try {\n           let payloadData = app.data.event.payload\n     /**payload contains the details that were sent in the script using ymAuthenticationToken */\n           try {\n               payloadData = (typeof payloadData === "string") ? JSON.parse(payloadData) : payloadData;\n           } catch (e) { }\n           app.log(payloadData, "payloadData")\n \n           app.USER_PIN = (payloadData.id) ? payloadData.id : false;\n           // let default_language = payloadData.lang;\n           let pattern = /\\b(en|id)\\b/gi;\n           let default_language = (payloadData.lang && (payloadData.lang.match(pattern))) ? payloadData.lang.match(pattern)[0] : (payloadData.lang == "id_code") ? "id" : "en"\n           let query = {\n               "table": "user_pin_sender_id_mapping",\n               "body": {\n                   "query": {\n                       "match": {\n                           "user_pin": app.USER_PIN\n                       }\n                   }\n               }\n           }\n           const dbResult = await app.dataStore.search(query);\n           const dbRecords = app._.get(dbResult, \'hits.hits\', []);\n           let senderId;\n           if (dbRecords.length > 0) {\n               senderId = dbRecords[0]._source[\'sender_id\'];\n               let id = dbRecords[0]._id;\n               app.dataStore.update({\n                   table: \'user_pin_sender_id_mapping\',\n                   record: {\n                       _id: id,\n                       default_language\n                   }\n               }).then(() => {\n                   app.log("UPDATED");\n               }).catch(() => {\n                   app.log("NOT UPDATED");\n               })\n           } else {\n               // senderId = new Date().getTime();\n               senderId = app.USER_PIN;\n')),Object(o.b)("h2",{id:"share-user-data-from-parent-interface-to-bot-using-data-payload"},"Share user data from parent interface to bot using data payload"),Object(o.b)("p",null,"Data payload feature comes handy when data is already present in the parent interface and you want to access it in the bot."),Object(o.b)("p",null,"As you can see we've user email and user name present on the webpage. Aim here is to parse it from the web page and use it as variables. "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In the webpage, identify elements which contains user data. Here, ",Object(o.b)("inlineCode",{parentName:"li"},"username")," and ",Object(o.b)("inlineCode",{parentName:"li"},"useremail")," elements contains the user data.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},' <p id = "username">yellow.ai Community</p>\n <p id="useremail" name="useremail">community@yellow.ai</p>\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Go to Channels > Chat widget > Deploy and copy the Chatbot code using the copy button.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/igpYi18.png",alt:null})),Object(o.b)("p",null,"Chat bot code should look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'<script type="text/javascript">\nwindow.ymConfig = {"bot":"YOUR_BOT_ID_HERE","host":"https://cloud.yellowmessenger.com","partiallyOpen":false,"alignLeft":"right"};(function () {var w=window,ic=w.YellowMessenger;if("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function(){i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();\n<\/script>\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Under the script, parse elements using ",Object(o.b)("inlineCode",{parentName:"li"},'getElementById("element_name")'),".")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'let name = document.getElementById("username").innerText;\nlet email =  document.getElementById("useremail").innerText;\n')),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Finally, pass the name and email variables using payload to the window.ymConfig.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'window.ymConfig = {"bot":"YOUR_BOT_ID_HERE","host":"https://cloud.yellowmessenger.com","payload":{"name": name,"email": email}\n')),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Let's review all the changes needs to be made in the webpage.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<html>\n<head>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>\n</head>\n<body>\n  \n <p id = "username">yellow.ai Community</p>\n <p id="useremail" name="useremail">community@yellow.ai</p>\n\n<script type="text/javascript">\n    let name = document.getElementById("username").innerText; // parse elements\n    let email =  document.getElementById("useremail").innerText;\n\n    console.log("Test data: ", name, email); // pass variables using payload object to window.ymConfig\n    window.ymConfig = {"bot":"YOUR_BOT_ID_HERE","host":"https://cloud.yellowmessenger.com","payload":{"name": name,"email": email},"partiallyOpen":false,"alignRight":"right"};(function () {var w=window,ic=w.YellowMessenger;if("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function(){i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();\n<\/script>\n\n</body>\n</html>\n')),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now in your bot your bot you can access this payload data just like variables, using this syntax: ",Object(o.b)("inlineCode",{parentName:"p"},"{{profile.payload.data}}"),"\n",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/qfRMBbq.png",alt:null}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"End result should look like this on your bot! \ud83c\udf89"))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/gw0rOxM.png",alt:null})))}d.isMDXComponent=!0},365:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
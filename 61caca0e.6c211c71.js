(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(366)),i=["components"],s={title:"User Journey Visualisation",sidebar_label:"User Journey"},l={unversionedId:"platform_concepts/growth/user-journey",id:"platform_concepts/growth/user-journey",isDocsHomePage:!1,title:"User Journey Visualisation",description:"Introduction",source:"@site/docs/platform_concepts/growth/user-journey.md",slug:"/platform_concepts/growth/user-journey",permalink:"/docs/platform_concepts/growth/user-journey",version:"current",sidebar_label:"User Journey",sidebar:"platform_concepts",previous:{title:"Metrics",permalink:"/docs/platform_concepts/growth/metrics"},next:{title:"Funnels",permalink:"/docs/platform_concepts/growth/funnels"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Understanding the terminologies",id:"understanding-the-terminologies",children:[{value:"<strong><em>User Journey Visualisation</em></strong>",id:"user-journey-visualisation",children:[]},{value:"<strong><em>&#39;Steps inside the flow&#39; modal</em></strong>",id:"steps-inside-the-flow-modal",children:[]}]},{value:"Important Points to Note",id:"important-points-to-note",children:[]},{value:"FAQs",id:"faqs",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"User Journey Visualisation enables you to view how your users are moving across different journeys when conversing with the bot. Some high level insights you can derive from here are -\nVarious paths taken by the users\nIdentify major points where users are dropping off or changing paths\nHelp our customers build hypothesis for adding/making any changes in the bot journeys\nImprove engagement & journey completion rate"),Object(a.b)("h2",{id:"understanding-the-terminologies"},"Understanding the terminologies"),Object(a.b)("h3",{id:"user-journey-visualisation"},Object(a.b)("strong",{parentName:"h3"},Object(a.b)("em",{parentName:"strong"},"User Journey Visualisation"))),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/RZRdMXB.png",alt:null})),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Session start")),": This is the start of the flow chart. All the data shown in journey visualisation flow charts is on a session ID level. If one person comes to the bot 3 times in 3 days, we look at all the 3 paths he/she took. ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"User Dropped"))," : This means the user got dropped off the chat window or did not respond for a very long time.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Journey completion rate")),": Total times a journey was triggered/ total times it was completed.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Journey dropped rate")),": %age of times users dropped off the chat.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Journey switched rate")),": %age of time users switched paths between two journeys")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"43.28 %(")),"96310): This means, out of 100% of the sessions which got triggered on the chat, 43.28 % (~ 96310) times people went to the wallet journey directly after starting the session."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This does not mean 96310 users went through this flow. "),Object(a.b)("li",{parentName:"ul"},"This also does not mean that only 96310 times the wallet journey was triggered. "),Object(a.b)("li",{parentName:"ul"},"The journey was triggered 96310 times directly after starting the session. This does not include the numbers for cases     where this journey was triggered in a later stage.")))),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/WBENaSa.png",alt:null})),Object(a.b)("h3",{id:"steps-inside-the-flow-modal"},Object(a.b)("strong",{parentName:"h3"},Object(a.b)("em",{parentName:"strong"},"'Steps inside the flow' modal"))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Journey Switched")),": This means the user switched from journey A to journey B.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Journey Completed")),": This denotes completion of the journey. It might take longer for certain users to complete the journey based on the steps in the journey and their response to it.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"User Dropped")),": This means the user got dropped off the chat window or did not respond for a very long time."))),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/tX2G1vz.png",alt:null})),Object(a.b)("h2",{id:"important-points-to-note"},"Important Points to Note"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This is only available on ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"cloud")),"."),Object(a.b)("li",{parentName:"ul"},"The data is distributed on a ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"session level")),"."),Object(a.b)("li",{parentName:"ul"},"Individual user paths cannot be visualised here"),Object(a.b)("li",{parentName:"ul"},"All the numbers mentioned inside the black boxes denote the number of ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"user hits and not the unique users")),"."),Object(a.b)("li",{parentName:"ul"},"journeyVizOther(~3.12%) is the amount of hits where paths did not follow any pattern.")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/RBM5nLL.png",alt:null})),Object(a.b)("h2",{id:"faqs"},"FAQs"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"What does \u201cswitched\u201d mean")),"?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Switched means moved to a different journey at any point of time"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"User count is not matching with the numbers shown here")),".",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"The Number shown in the flow chart is \u2018number of hits\u2019 and not \u2018number of users\u2019."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Is dropped inside steps considered as final drop or can the user still continue")),"?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"User has dropped out of the bot"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"How are we tracking users in the mobile app")),"?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Closing the chat window/app or leaving the chat in the middle of the conservation for a long time implies the user has dropped off."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"When are we considering a journey to get completed")),"?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"It depends on the step structure and how many steps are required to complete a journey.")))))}b.isMDXComponent=!0},366:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||a;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
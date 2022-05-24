(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),h=a,m=u["".concat(o,".").concat(h)]||u[h]||p[h]||s;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),s=(n(0),n(365)),o=["components"],i={title:"Default Agent Statuses",sidebar_label:"Default Agent Statuses"},c={unversionedId:"platform_concepts/inbox/default-agent-statuses",id:"platform_concepts/inbox/default-agent-statuses",isDocsHomePage:!1,title:"Default Agent Statuses",description:"Inbox offers three default agent statuses that you can choose to define your availability. These statuses are the foundation based on which the incoming tickets are assigned to you. Ensure that you are indeed selecting the correct status at any time.",source:"@site/docs/platform_concepts/inbox/default-agent-statuses.md",slug:"/platform_concepts/inbox/default-agent-statuses",permalink:"/docs/platform_concepts/inbox/default-agent-statuses",version:"current",sidebar_label:"Default Agent Statuses",sidebar:"platform_concepts",previous:{title:"How are different tickets assigned to agents in Inbox?",permalink:"/docs/platform_concepts/inbox/tickets-assignment-logic"},next:{title:"Custom Usecases",permalink:"/docs/platform_concepts/inbox/inbox-settings/custom-usecases"}},l=[{value:"Difference between Busy &amp; Away",id:"difference-between-busy--away",children:[]},{value:"Reports:",id:"reports",children:[]}],b={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,o);return Object(s.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Inbox offers three default agent statuses that you can choose to define your availability. These statuses are the foundation based on which the incoming tickets are assigned to you. Ensure that you are indeed selecting the correct status at any time."),Object(s.b)("p",null,"The default statuses are as follows;  "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Available"),Object(s.b)("br",{parentName:"li"}),"The new incoming chats will only be assigned to agents who have set their status to Available. The chats will be assigned based on their concurrency.  "),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Busy"),Object(s.b)("br",{parentName:"li"}),"No new chat ticket will be assigned to agents who have set their status to be Busy. These chats will be queued in their respective group and then automatically assigned to agents when they make themselves Available.  ","If the group queue is not enabled then these chats will be converted as Missed chats and stored in Inbox for reference.  ",Object(s.b)("em",{parentName:"li"},"Eg:",Object(s.b)("br",{parentName:"em"}),"When you are working on important issues/escalations.",Object(s.b)("br",{parentName:"em"}),"Documentation work",Object(s.b)("br",{parentName:"em"}),"Internal meetings/discussions etc.,"),"  "),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Away"),Object(s.b)("br",{parentName:"li"}),"No new chat ticket will be assigned to agents who have set their status to be Away. These chats will be queued in their respective group and then automatically assigned to agents when they make themselves Available.  ","If the group queue is not enabled then these chats will be converted as Missed chats and stored in your account for reference.  ",Object(s.b)("em",{parentName:"li"},"Eg:",Object(s.b)("br",{parentName:"em"}),"Recess",Object(s.b)("br",{parentName:"em"}),"Bio break",Object(s.b)("br",{parentName:"em"}),"Lunch break"),"  ")),Object(s.b)("p",null,"When an agent logs out or goes away from the Inbox module, they\u2019ll be treated as ",Object(s.b)("strong",{parentName:"p"},"Offline")," and no new conversation will be assigned to that agent even if they are present inside the yellow.ai platform in any other module like Insights, Studio etc.,"),Object(s.b)("h3",{id:"difference-between-busy--away"},"Difference between Busy & Away"),Object(s.b)("p",null,"On paper, ",Object(s.b)("strong",{parentName:"p"},"Busy")," and ",Object(s.b)("strong",{parentName:"p"},"Away")," are both identical in function but when you log out after changing your status to ",Object(s.b)("strong",{parentName:"p"},"Away"),", it\u2019ll not treat you as ",Object(s.b)("strong",{parentName:"p"},"Offline")," but still as ",Object(s.b)("strong",{parentName:"p"},"Away"),". This is to avoid missing out on the chats raised by the end users when all your agents have logged off within the working hours for eg: lunch break.",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("em",{parentName:"p"},"Eg:",Object(s.b)("br",{parentName:"em"}),"Consider a scenario wherein, all your agents break for lunch from 1 PM - 2 PM. If they are considered ",Object(s.b)("strong",{parentName:"em"},"Offline")," during that time, the chats raised during the time will be completely missed unless Offline chats are enabled.  Even if they are enabled, those chats will be only be captured in Open status and will not be assigned to agents immediately.\nNow if they are considered as ",Object(s.b)("strong",{parentName:"em"},"Away"),", those chats will not be missed irrespective of Offline chats being enabled or not and the chats will be queued, then automatically assigned to agents after 2PM.")),Object(s.b)("h3",{id:"reports"},"Reports:"),Object(s.b)("p",null,"The time spent by each agent in the different statuses will be tracked and made available in the agent activity report.  However the ",Object(s.b)("strong",{parentName:"p"},"agent activity report")," will not track the time spent in ",Object(s.b)("strong",{parentName:"p"},"Offline")," status."),Object(s.b)("p",null," The aggregated time spent by the agent i.e total Available/Busy/Away time spent by the agent per each day is also accessible  in the ",Object(s.b)("strong",{parentName:"p"},"agent performance report"),"."),Object(s.b)("p",null,"To download it,  "),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Go to Inbox -> Reports -> Agent activity / Agent performance report -> Generate  ")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/HBcEwklYDNVO1643808492429.png",alt:"Generating Reports"})),Object(s.b)("h4",{id:"note"},"Note:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Admin cannot change the status of any other agent."),Object(s.b)("li",{parentName:"ul"},"You can still manually transfer the chat to an agent who has set themselves to Busy / Away. This manual transfer operation will not conisder agent's current concurrency and will assign tickets even if their concurrency is full.")))}u.isMDXComponent=!0}}]);
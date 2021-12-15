(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(225)),i=["components"],c={title:"Engage Updates",sidebar_label:"Engage",featured:!0},s={unversionedId:"updates/sep_21/engage",id:"updates/sep_21/engage",isDocsHomePage:!1,title:"Engage Updates",description:"1. Allow users to set frequency of the Inbound Campaign",source:"@site/docs/updates/sep_21/engage.md",slug:"/updates/sep_21/engage",permalink:"/docs/updates/sep_21/engage",version:"current",sidebar_label:"Engage",sidebar:"updates",previous:{title:"Inbox Updates",permalink:"/docs/updates/aug_21/inbox"},next:{title:"Inbox Updates",permalink:"/docs/updates/sep_21/inbox"}},u=[{value:"1. Allow users to set frequency of the Inbound Campaign",id:"1-allow-users-to-set-frequency-of-the-inbound-campaign",children:[]},{value:"2. Introduced New Inbound Trigger -- On Hover &amp; Custom Events",id:"2-introduced-new-inbound-trigger----on-hover--custom-events",children:[]},{value:"3. Data validation cases have been added for Create and Update Audience APIs",id:"3-data-validation-cases-have-been-added-for-create-and-update-audience-apis",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"1-allow-users-to-set-frequency-of-the-inbound-campaign"},"1. Allow users to set frequency of the Inbound Campaign"),Object(o.b)("p",null,"Users will be able to define how frequently the same visitor will see the same ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign"},Object(o.b)("strong",{parentName:"a"},"Inbound campaign"))),Object(o.b)("p",null,"Defining frequency is essential because If the user keeps viewing the same campaign repeatedly and frequently, it might lead to a poor UX.\n",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Az5kFAx.png",alt:null})),Object(o.b)("h3",{id:"2-introduced-new-inbound-trigger----on-hover--custom-events"},"2. Introduced New Inbound Trigger -- On Hover & Custom Events"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On hover would be very similar to a CTA event. However, instead of mouse click, this event will be triggered on hovering of the mouse. So now any inbound campaign can be triggered by hovering on an object defined under ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType"},Object(o.b)("strong",{parentName:"a"},"Web behaviour (When)"))," of that particular campaign.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Also, now the campaign can be launched using any custom events that has been defined under the Event Hub section present in studio section of the platform\n",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/g0hKnpc.png",alt:null})))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/amBNogz.png",alt:null})),Object(o.b)("h3",{id:"3-data-validation-cases-have-been-added-for-create-and-update-audience-apis"},"3. Data validation cases have been added for Create and Update Audience APIs"),Object(o.b)("p",null,"There are data validations added for adding Audience in the user table such as "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"invalidDataType:")," It contains the columns/properties for which the wrong data type was passed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"invalidProperty:")," The column/property provided in the request body does not exist in DB."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"propertiesRequired:")," These are the mandatory columns/properties that need to be passed in the request body")))}d.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,g=d["".concat(i,".").concat(b)]||d[b]||l[b]||o;return n?r.a.createElement(g,c(c({ref:t},u),{},{components:n})):r.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
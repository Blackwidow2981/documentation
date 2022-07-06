(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{255:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),l=(a(0),a(385)),b=["components"],o={sidebar_label:"User Data Tracking",title:"What user data can be tracked in yellow.ai?"},i={unversionedId:"platform_concepts/engagement/outbound/cdp/user_data_segments/cdp_data",id:"platform_concepts/engagement/outbound/cdp/user_data_segments/cdp_data",isDocsHomePage:!1,title:"What user data can be tracked in yellow.ai?",description:"You can group your users together based on who they are and what they do. We store three types of data about your users:",source:"@site/docs/platform_concepts/engagement/outbound/cdp/user_data_segments/cdp_data.md",slug:"/platform_concepts/engagement/outbound/cdp/user_data_segments/cdp_data",permalink:"/docs/platform_concepts/engagement/outbound/cdp/user_data_segments/cdp_data",version:"current",sidebar_label:"User Data Tracking",sidebar:"platform_concepts",previous:{title:"CDP Overview",permalink:"/docs/platform_concepts/engagement/outbound/cdp/overview"},next:{title:"Managing user data in yellow.ai",permalink:"/docs/platform_concepts/engagement/outbound/cdp/user_data_segments/manage_user_data"}},s=[{value:"User Property Data Types",id:"user-property-data-types",children:[]},{value:"System User Properties",id:"system-user-properties",children:[]},{value:"Custom User Properties",id:"custom-user-properties",children:[]},{value:"User Events",id:"user-events",children:[{value:"Export your User Data",id:"export-your-user-data",children:[]}]}],c={toc:s};function p(e){var t=e.components,a=Object(n.a)(e,b);return Object(l.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can group your users together based on who they are and what they do. We store three types of data about your users:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"System User Properties (a default set of data we already have about your users)."),Object(l.b)("li",{parentName:"ol"},"Custom User Properties (data you send us about your users)."),Object(l.b)("li",{parentName:"ol"},"Events (data that records specific actions users take).")),Object(l.b)("p",null,"Below, we\u2019ll explain how these data types work and how you can make the most of them."),Object(l.b)("h2",{id:"user-property-data-types"},"User Property Data Types"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Data Type")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Description")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Stores String data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"Stores positive or negative integer, or a decimal number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"time"),Object(l.b)("td",{parentName:"tr",align:null},"Stores time in hh:mm:ss format")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"date"),Object(l.b)("td",{parentName:"tr",align:null},"Stores date in YYYY-MM-DD format")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"datetime"),Object(l.b)("td",{parentName:"tr",align:null},"Stores date and time in YYYY-MM-DD hh:mm:ss format")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"list"),Object(l.b)("td",{parentName:"tr",align:null},"Stores an array of String values")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Stores true or false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"phone"),Object(l.b)("td",{parentName:"tr",align:null},"Stores phone numbers with country code and validates the format by checking country code and number of digits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"url"),Object(l.b)("td",{parentName:"tr",align:null},"Stores URL and validates the format for the same")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"email"),Object(l.b)("td",{parentName:"tr",align:null},"Stores email and validates the format for the same")))),Object(l.b)("h2",{id:"system-user-properties"},"System User Properties"),Object(l.b)("p",null,"You\u2019ll see the following default properties in your user module right from the beginning:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Property Name")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Data Type")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Description")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"userId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"this is a unique identifier for a user NOTE: This can be passed")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"firstName"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"a user\u2019s first name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lastName"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"a user\u2019s last name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"gender"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"a user\u2019s gender")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"country"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"calculated by the user\u2019s IP address location")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"city"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"calculated by the user\u2019s IP address location")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ip"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"fetched from the user\u2019s browser")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"latitude"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"calculated by the user\u2019s IP address location")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"longitude"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"calculated by the user\u2019s IP address location")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"language"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"preferred language setting for a user")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"timezone"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"calculated by the user\u2019s IP address location")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"email"),Object(l.b)("td",{parentName:"tr",align:null},"email"),Object(l.b)("td",{parentName:"tr",align:null},"user\u2019s email address")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"phone"),Object(l.b)("td",{parentName:"tr",align:null},"phone"),Object(l.b)("td",{parentName:"tr",align:null},"user\u2019s phone number with country code")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lastChannel"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"this is the last channel, set up on yellow.ai, where the user had an active session NOTE: You can update this property to cover touch-points/channels outside yellow.ai")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dob"),Object(l.b)("td",{parentName:"tr",align:null},"date"),Object(l.b)("td",{parentName:"tr",align:null},"a person\u2019s date of birth")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lastSession"),Object(l.b)("td",{parentName:"tr",align:null},"dateTime"),Object(l.b)("td",{parentName:"tr",align:null},"timestamp of the last time the user had an active session on one of the channels set up on yellow.ai NOTE: You can update this property to cover touch-points/channels outside yellow.ai")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"emailOptin"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"This is true if a user has subscribed to your emails, else it is false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"smsOptin"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"This is true if a user has subscribed to your SMS, else it is false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"whatsAppOptin"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"This is true if a user has subscribed to your WhatsApp messages, else it is false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"createdAt"),Object(l.b)("td",{parentName:"tr",align:null},"dateTime"),Object(l.b)("td",{parentName:"tr",align:null},"timestamp for when the user record was created")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"updatedAt"),Object(l.b)("td",{parentName:"tr",align:null},"dateTime"),Object(l.b)("td",{parentName:"tr",align:null},"timestamp for when the user record was last updated")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"tags"),Object(l.b)("td",{parentName:"tr",align:null},"list"),Object(l.b)("td",{parentName:"tr",align:null},"list of groups a user belongs to, based on the tag(s) you\u2019ve manually applied to them")))),Object(l.b)("h2",{id:"custom-user-properties"},"Custom User Properties"),Object(l.b)("p",null,"Custom properties store additional information specific to your users. For example, you might want to store the number of times they have visited your pricing page, what their department is, which is their preferred product, etc."),Object(l.b)("p",null,"These properties are ideal for helping you answer questions like:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"How many/how much?")," e.g. which users are paying you over $10 per month?"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"What\u2019s the name?")," e.g. show me a list of all the users whose job title is \u2018Marketer\u2019"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Is it true or false?")," e.g. which users have visited my pricing page? (pricingPageVisit = true) and which users haven\u2019t?  (pricingPageVisit = false)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"What date?")," e.g. which users\u2019 subscriptions are due to end on September 1st?")),Object(l.b)("p",null,"Custom User Properties can be ",Object(l.b)("a",{parentName:"p",href:"./manage_user_data#manage-user-properties"},"created from UI, in Users Module"),"."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Currently, a custom property can not be archived or edited."))),Object(l.b)("h2",{id:"user-events"},"User Events"),Object(l.b)("p",null,"You can ",Object(l.b)("a",{parentName:"p",href:"../enriching_user_profiles/user_events"},"send events")," to yellow.ai, to record whenever users take specific actions or capture an important conversion event. Events record the first and last time a user does something and the total amount of times they do something. For example, you can see the first time users clicked on a particular page, or when they most recently purchased an item."),Object(l.b)("p",null,"Events will show in your user list, and you can filter them to answer questions like:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Are users visiting the same product page a lot recently?"),Object(l.b)("li",{parentName:"ul"},"Have they used the export feature a bunch of times? or"),Object(l.b)("li",{parentName:"ul"},"Have they downgraded their plan?")),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"User Events is currently in beta! Write to ",Object(l.b)("a",{parentName:"p",href:"mailto:sarthak@yellow.ai"},"sarthak@yellow.ai")," to get it enabled for your bot."))),Object(l.b)("h3",{id:"export-your-user-data"},"Export your User Data"),Object(l.b)("p",null,"You can quickly and easily export your user data out of yellow.ai. ",Object(l.b)("a",{parentName:"p",href:"./manage_user_data#viewing--exporting-your-user-data"},"Here's how to do that"),"."))}p.isMDXComponent=!0},385:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),c=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,m=p["".concat(b,".").concat(d)]||p[d]||u[d]||l;return a?n.a.createElement(m,o(o({ref:t},s),{},{components:a})):n.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var s=2;s<l;s++)b[s]=a[s];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
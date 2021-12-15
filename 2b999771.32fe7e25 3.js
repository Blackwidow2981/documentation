(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{229:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||i;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(229)),r=["components"],l={title:"Omnichannel Notifications Engine",sidebar_label:"Omnichannel Notifications API"},c={unversionedId:"platform_concepts/omniChannelNotifications/gettingStarted",id:"platform_concepts/omniChannelNotifications/gettingStarted",isDocsHomePage:!1,title:"Omnichannel Notifications Engine",description:"Getting Started",source:"@site/docs/platform_concepts/omniChannelNotifications/gettingStarted.md",slug:"/platform_concepts/omniChannelNotifications/gettingStarted",permalink:"/docs/platform_concepts/omniChannelNotifications/gettingStarted",version:"current",sidebar_label:"Omnichannel Notifications API",sidebar:"platform_concepts",previous:{title:"Certifications",permalink:"/docs/platform_concepts/compliances/certifications"},next:{title:"Getting started with Omnichannel Notifications Engine",permalink:"/docs/platform_concepts/omniChannelNotifications/sendMessage"}},s=[],b={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Yellow.ai\u2019s Notification Engine API lets you send dynamic notifications to your customers through various conversational channels. The API natively supports Whatsapp, SMS, Email notifications to be sent through simple to use APIs. Right now this is enabled as REST APIs."),Object(i.b)("p",null,"The notifications API supports all the media-types that respective channels allows you to send. You can refer to the same over here(link to channels feasibility matrix)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Features")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"On demand notification delivery."),Object(i.b)("li",{parentName:"ol"},"Support for 10+ channels."),Object(i.b)("li",{parentName:"ol"},"Support for scheduling notifications."),Object(i.b)("li",{parentName:"ol"},"Support for postbacks on delivery updates."),Object(i.b)("li",{parentName:"ol"},"Reporting is available.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Prerequisites")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Access to YM Project -")," To use these APIs you would need authentication token, which can be onbainted from the YM profile. Please refer this to get the same."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Should have configured a channel in YM Project -")," To use these APIs, you should have configured the channel that you want to send notifications on")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Structure of the API")),Object(i.b)("p",null,"The API is very simple. It has 5 little segments:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"User(s) - who you want to target"),Object(i.b)("li",{parentName:"ol"},"Content - what you want to send them"),Object(i.b)("li",{parentName:"ol"},"Channels - where you want to reach out to them"),Object(i.b)("li",{parentName:"ol"},"Schedule - when to send it"),Object(i.b)("li",{parentName:"ol"},"Metadata - if there is anything else you want us to know")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"userDetails:")),Object(i.b)("p",null,"   Type:  ",Object(i.b)("inlineCode",{parentName:"p"},"Object")),Object(i.b)("p",null,"   Mandatory:  ",Object(i.b)("inlineCode",{parentName:"p"},"Yes")),Object(i.b)("p",null,"   What: ",Object(i.b)("inlineCode",{parentName:"p"},"Details of the user to be notified.")),Object(i.b)("p",null,"User details may contain all relevant information about the user. It needs to have atleast one contactable information and any number of additional parameters. For example, in case of voice notification, it needs to have a \u2018number\u2019 field mandatory and any number of extra parameters."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"content:")),Object(i.b)("p",null,"   Type:  ",Object(i.b)("inlineCode",{parentName:"p"},"Object")),Object(i.b)("p",null,"   Mandatory:  ",Object(i.b)("inlineCode",{parentName:"p"},"No")),Object(i.b)("p",null,"   What: ",Object(i.b)("inlineCode",{parentName:"p"},"Content of the notification. Contains message and additional parameters to be rendered")),Object(i.b)("p",null,"Content contains the message that needs to be sent as a notification. Either it can contain the plain message directly or contain parameters to be rendered for a template on a particular channel."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"channels:")),Object(i.b)("p",null,"   Type:  ",Object(i.b)("inlineCode",{parentName:"p"},"List")),Object(i.b)("p",null,"   Mandatory:  ",Object(i.b)("inlineCode",{parentName:"p"},"Yes")),Object(i.b)("p",null,"   What: ",Object(i.b)("inlineCode",{parentName:"p"},"List of Channels to send the notification")),Object(i.b)("p",null,"Content contains the message that needs to be sent as a notification. Either it can contain the plain message directly or contain parameters to be rendered for a template on a particular channel."),Object(i.b)("p",null,"Sender parameter should be the caller id in case of voice notification and sender email id in case of email notification and so on. This field will be validated before sending the notification."),Object(i.b)("p",null,"Supported channels are"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"sms"),Object(i.b)("li",{parentName:"ul"},"whatsapp"),Object(i.b)("li",{parentName:"ul"},"email"),Object(i.b)("li",{parentName:"ul"},"voice"),Object(i.b)("li",{parentName:"ul"},"facebook (Facebook messenger)"),Object(i.b)("li",{parentName:"ul"},"Currently user will be notified on only the first channel configured.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"metadata")),Object(i.b)("p",null,"   Type:  ",Object(i.b)("inlineCode",{parentName:"p"},"Object")),Object(i.b)("p",null,"   Mandatory:  ",Object(i.b)("inlineCode",{parentName:"p"},"Yes")),Object(i.b)("p",null,"   What: ",Object(i.b)("inlineCode",{parentName:"p"},"Content of the notification. Contains message and additional parameters to be rendered")),Object(i.b)("p",null,"Metadata contains meta information fields about the notification itself"),Object(i.b)("p",null,"Currently metadata supports the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  `scheduleAt` : ISO formatted date time string at which the notification must be sent.\n\n  `customPayload` : JSON object which will flow back to the postback url if configured and also reflect in the reports. Can be used to associate identifying information for a particular notification.\n")))}p.isMDXComponent=!0}}]);
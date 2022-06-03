(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(366)),i=["components"],c={title:"WhatsApp Phone Number Migration",sidebar_label:"WhatsApp Phone Number Migration"},p={unversionedId:"cookbooks/whatsapp cookbook/wa-migration",id:"cookbooks/whatsapp cookbook/wa-migration",isDocsHomePage:!1,title:"WhatsApp Phone Number Migration",description:"The migration process involves 3 main assets:",source:"@site/docs/cookbooks/whatsapp cookbook/wa-migration.md",slug:"/cookbooks/whatsapp cookbook/wa-migration",permalink:"/docs/cookbooks/whatsapp cookbook/wa-migration",version:"current",sidebar_label:"WhatsApp Phone Number Migration"},s=[],l={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The migration process involves 3 main assets:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"A source WABA")," - The account the phone number is currently registered to.\n",Object(a.b)("strong",{parentName:"p"},"A phone number")," - The number that will be migrated.\n",Object(a.b)("strong",{parentName:"p"},"A destination WABA")," - The account the number will be migrated to."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Eligibilty Criteria")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/HzJofpE.png",alt:null})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Process:")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"WABA is created on the destination BSP"),Object(a.b)("li",{parentName:"ol"},"Acount Review is completed on the destination BSP"),Object(a.b)("li",{parentName:"ol"},"Source BSP has to disable the 2FA for the WABA in order to allow the destination WABA to initiate the migration."),Object(a.b)("li",{parentName:"ol"},"Destiniation BSP will initiate the migration process by sending an OTP to the WhatsApp Number via SMS/Call (Sent from a US Number, its suggested to verify that the incoming services are active for the number)"),Object(a.b)("li",{parentName:"ol"},"Once the OTP verification is done by the destination BSP the number along with the approved templates will be migrated to the destination WABA."),Object(a.b)("li",{parentName:"ol"},"2FA is enabled on the destination WABA once the Infra is created.")))}b.isMDXComponent=!0},366:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,f=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
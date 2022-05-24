(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{211:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return p}));var n=o(3),r=o(7),a=(o(0),o(365)),c=["components"],i={title:"Salesforce Service Cloud",sidebar_label:"Salesforce Service Cloud"},s={unversionedId:"platform_concepts/appConfiguration/salesforce-service-cloud",id:"platform_concepts/appConfiguration/salesforce-service-cloud",isDocsHomePage:!1,title:"Salesforce Service Cloud",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/salesforce-service-cloud.md",slug:"/platform_concepts/appConfiguration/salesforce-service-cloud",permalink:"/docs/platform_concepts/appConfiguration/salesforce-service-cloud",version:"current",sidebar_label:"Salesforce Service Cloud",sidebar:"platform_concepts",previous:{title:"Razorpay",permalink:"/docs/platform_concepts/appConfiguration/razorpay"},next:{title:"Service Now",permalink:"/docs/platform_concepts/appConfiguration/service-now"}},l=[{value:"Scope of Integration",id:"scope-of-integration",children:[]},{value:"Use-cases",id:"use-cases",children:[{value:"Simple Integration with oAuth 2.0",id:"simple-integration-with-oauth-20",children:[]},{value:"Take actions with Salesforce Nodes",id:"take-actions-with-salesforce-nodes",children:[]},{value:"Receive Events from Salesforce",id:"receive-events-from-salesforce",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Navigate to Integrations Tab",id:"navigate-to-integrations-tab",children:[]},{value:"Connect your Salesforce account",id:"connect-your-salesforce-account",children:[]}]},{value:"Supported Version",id:"supported-version",children:[]}],u={toc:l};function p(e){var t=e.components,o=Object(r.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(a.b)("p",null,"Yellow.ai Integration with Salesforce CRM allows you to seamlessly connect your Salesforce CRM instance with yellow.ai platform. Any customer who has a Salesforce CRM account will be able to seamlessly connect their Salesforce instance with yellow.ai using oAuth. This connector will enable users to receive events for Salesforce objects, both system defined and custom objects. Furthermore, this connector with enable you to take actions, such as create, update etc. on the objects"),Object(a.b)("h2",{id:"use-cases"},"Use-cases"),Object(a.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(a.b)("h3",{id:"simple-integration-with-oauth-20"},"Simple Integration with oAuth 2.0"),Object(a.b)("p",null,"Yellow.ai does not store the client\u2019s credentials and leverages oAuth 2.0 approach for integrating with client\u2019s Salesforce account."),Object(a.b)("p",null,"While integrating, yellow.ai navigates the user to the login page of Salesforce, i.e. login.salesforce.com or to the subdomain which was already used in the same browser. If you want to integrate in some other instance, clear your cookies and retry login in from yellow.ai platform."),Object(a.b)("h3",{id:"take-actions-with-salesforce-nodes"},"Take actions with Salesforce Nodes"),Object(a.b)("p",null,"You can store a new",Object(a.b)("strong",{parentName:"p"},"Lead(Object)")," or store data in any of your custom objects. The actions are not limited to the system defined Salesforce Objects, you can even use your Custom Objects here. The actions are not just limited to creating a new record in the object, you can read, update and delete relevant records too from the objects."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/fnLI1gD.png",alt:null})),Object(a.b)("p",null,"On-click of the Salesforce CRM node, you can customize the object and action type along with the attributes that you wish to pass."),Object(a.b)("h3",{id:"receive-events-from-salesforce"},"Receive Events from Salesforce"),Object(a.b)("p",null,"<",Object(a.b)("strong",{parentName:"p"},"COMING SOON"),">"),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Configuring the integration with Salesforce CRM is straightforward. Follow the steps defined below to start integrating:"),Object(a.b)("h3",{id:"navigate-to-integrations-tab"},"Navigate to Integrations Tab"),Object(a.b)("p",null,"Inside your project, navigate to the Configuration** **tab and then click on the Integrations Tab. Search for Salesforce CRM."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/E9LZ68M.png",alt:null})),Object(a.b)("h3",{id:"connect-your-salesforce-account"},"Connect your Salesforce account"),Object(a.b)("p",null,"Click on Connect to see an option of click to connect with Salesforce. After you click that, you will notice that you will be prompted to login to your Salesforce account."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/2ucDsE7.gif",alt:null})),Object(a.b)("p",null,"Voila! And just like that, you are now connected with your Salesforce account."),Object(a.b)("h2",{id:"supported-version"},"Supported Version"),Object(a.b)("p",null,"This integration will support the latest version releases, latest one being 52.0"),Object(a.b)("p",null,"For more information, please refer ",Object(a.b)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/api_rest_eol.htm"},"here"),"."))}p.isMDXComponent=!0},365:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return d}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(o),b=n,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return o?r.a.createElement(d,i(i({ref:t},l),{},{components:o})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=o[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);
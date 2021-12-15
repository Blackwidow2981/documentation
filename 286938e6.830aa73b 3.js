(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{229:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return f}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},b=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(a),d=t,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return a?r.a.createElement(f,c(c({ref:n},l),{},{components:a})):r.a.createElement(f,c({ref:n},l))}));function f(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return s})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return b}));var t=a(3),r=a(7),o=(a(0),a(229)),i=["components"],c={title:"Create and access variables in UI",sidebar_label:"Create and access journey variables in UI"},s={unversionedId:"platform_concepts/configurations/variables-in-UI",id:"platform_concepts/configurations/variables-in-UI",isDocsHomePage:!1,title:"Create and access variables in UI",description:"How to create a journey variable",source:"@site/docs/platform_concepts/configurations/variables-in-UI.md",slug:"/platform_concepts/configurations/variables-in-UI",permalink:"/docs/platform_concepts/configurations/variables-in-UI",version:"current",sidebar_label:"Create and access journey variables in UI"},l=[{value:"How to create a journey variable",id:"how-to-create-a-journey-variable",children:[]},{value:"How to access a journey variable",id:"how-to-access-a-journey-variable",children:[]},{value:"Advanced example - accessing variable fields and index",id:"advanced-example---accessing-variable-fields-and-index",children:[]}],u={toc:l};function b(e){var n=e.components,a=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(t.a)({},u,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"how-to-create-a-journey-variable"},"How to create a journey variable"),Object(o.b)("p",null,"You can create journey variables using below option from UI. Variables are nothing but a way to store data that can vary/is not fixed.\n",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/rQFoICf.gif",alt:null})),Object(o.b)("h3",{id:"how-to-access-a-journey-variable"},"How to access a journey variable"),Object(o.b)("p",null,"You can access a journey variable inside any node using this notation ",Object(o.b)("inlineCode",{parentName:"p"},"{{variables.variable_name}}"),"\nSo for the variable you just created above, you can access using {{variables.category}}"),Object(o.b)("h3",{id:"advanced-example---accessing-variable-fields-and-index"},"Advanced example - accessing variable fields and index"),Object(o.b)("p",null,"Above was very simple, but often, in this example in ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellowmessenger.com/docs/documentation/concepts/response-types-action-logic#api"},"API action node"),", the response you store is not a simple string or value."),Object(o.b)("p",null,"Consider following response from a weather API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "coord": {\n    "lon": 77.2167,\n    "lat": 28.6667\n  },\n  "weather": [\n    {\n      "id": 761,\n      "main": "Dust",\n      "description": "dust",\n      "icon": "50d"\n    }\n  ],\n  "base": "stations",\n  "main": {\n    "temp": 32.54,\n    "feels_like": 30.55,\n    "temp_min": 32,\n    "temp_max": 33,\n    "pressure": 1002,\n    "humidity": 21\n  },\n  "visibility": 3500,\n  "wind": {\n    "speed": 3.09,\n    "deg": 260,\n    "gust": 8.23\n  },\n  "clouds": {\n    "all": 0\n  },\n  "dt": 1617278187,\n  "sys": {\n    "type": 1,\n    "id": 9161,\n    "country": "IN",\n    "sunrise": 1617237667,\n    "sunset": 1617282517\n  },\n  "timezone": 19800,\n  "id": 1273294,\n  "name": "Delhi",\n  "cod": 200\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"To access any fields of this you can simply do {{variables.variable_name.field_name}} and this can go upto fields of fields."))),Object(o.b)("p",null,"For example: to access temp in above, {{variables.API_var.main.temp}} can be used. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"You can also access array values using keys."),"\nTo access weather description in above, you can see it's inside an array ","[ ]"," and is the first ","[0th index]"," value of array.\n{{variables.API_var.weather.0.description}} will be used. ")))}b.isMDXComponent=!0}}]);
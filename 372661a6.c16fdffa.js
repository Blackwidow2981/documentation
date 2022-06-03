(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(366)),r=["components"],l={title:"Operational/Logical Nodes - Action and Logic",sidebar_label:"Action and Logic"},c={unversionedId:"platform_concepts/studio/steps/action-nodes-and-logic",id:"platform_concepts/studio/steps/action-nodes-and-logic",isDocsHomePage:!1,title:"Operational/Logical Nodes - Action and Logic",description:"Action",source:"@site/docs/platform_concepts/studio/steps/action-nodes-and-logic.md",slug:"/platform_concepts/studio/steps/action-nodes-and-logic",permalink:"/docs/platform_concepts/studio/steps/action-nodes-and-logic",version:"current",sidebar_label:"Action and Logic",sidebar:"platform_concepts",previous:{title:"Prompts and Messages",permalink:"/docs/platform_concepts/studio/steps/prompts-and-messages"},next:{title:"Intents",permalink:"/docs/platform_concepts/studio/natural-language-understanding/intents"}},s=[{value:"Action",id:"action",children:[{value:"API",id:"api",children:[]},{value:"Analytics",id:"analytics",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Database",id:"database",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Document Search",id:"document-search",children:[]},{value:"Send Email",id:"send-email",children:[]},{value:"Modifier",id:"modifier",children:[]},{value:"Raise Ticket",id:"raise-ticket",children:[]},{value:"Set language",id:"set-language",children:[]},{value:"Trigger Journey",id:"trigger-journey",children:[]},{value:"Send OTP and Verify OTP",id:"send-otp-and-verify-otp",children:[]},{value:"Generate PDF",id:"generate-pdf",children:[]},{value:"Delay",id:"delay",children:[]}]},{value:"Logic",id:"logic",children:[{value:"If condition",id:"if-condition",children:[]}]}],b={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"action"},"Action"),Object(o.b)("p",null,"Action nodes are used whenever we need to take some action behind the scenes example database insert, API execution or document search etc. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To use an action node, simply add it to the flow where you want the action to be done.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/aBB6iDw.png",alt:null})),Object(o.b)("hr",null),Object(o.b)("h3",{id:"api"},"API"),Object(o.b)("p",null,"API action node allows you to hit an API at that point of the flow, assign dynamic API parameters (if any) from user inputs and then store API response in a variable for further use. "),Object(o.b)("img",{src:"https://i.imgur.com/gh4hTyr.png",alt:"drawing",width:"60%"}),Object(o.b)("p",null,"In above node, we selected an API (explore_car) to hit, we provided value to parameter using variable.\nThen we store the whole response we will get from that API in a variable."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Learn how to directly use this variable, if JSON response in your nodes to access different fields in API response ",Object(o.b)("a",{parentName:"p",href:"../bot-variables#advanced-example---accessing-variable-fields-and-index-in-json-object-array-type-stored-in-a-variable"},Object(o.b)("strong",{parentName:"a"},"here"))))),Object(o.b)("p",null,"\ud83d\udcbb  ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Optional field"))," : ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Transformation function")),"\nSometimes, an API response can be too big , or not in a proper format for us to be able to parse from easily. (Note that a function is not needed just to access a simple field of a JSON API response).\nIn those cases, we can write a function to parse and transform API response according to our needs and return desirable response. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Snippet for Transformation function")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"return new Promise\n  (resolve => {\n\n    // For transfromation function tagged in API Node, To fetch api response\n    const response = ymLib.args.apiResponse;\n\n    // Your logic here \n\n    // Any value returned (or promisified value) - is stored in bot Variable storing API response\n    \n    return resolve(<parsed response>);\n  });         \n       \n\n")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udccc ",Object(o.b)("strong",{parentName:"p"},"Note"),": To be able to invoke an API at certain point, it should already be added/configured at API management section of platform. All APIs added there are available in dropdown of the action node."),Object(o.b)("p",{parentName:"div"},Object(o.b)("a",{parentName:"p",href:"../api-management/add-api"},"Click here to learn how to add APIs")),Object(o.b)("p",{parentName:"div"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/ENGKa8e.jpg",alt:null})))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"analytics"},"Analytics"),Object(o.b)("p",null,"Analytics node can be used to sent analytics events at any point in the execution of journey. You type the event name to push and select value."),Object(o.b)("p",null,"The analytics node can be used to capture custom events at any point in the execution of a journey. The data passed via the node will flow into the analytics table of Data Explorer inside the Insights section."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Event"))," - This can be a static name or a variable which will be captured under the Events column on the analytics table."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Value"))," - A variable needs to be selected here which will be captured under the eventValue column."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Keys"))," - This is an optional field to capture metadata and will be created as a new column. Multiple columns can be created using keys."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Pro-tip")),": Using custom events, you can analyse user flow from one journey/step to another, filter by specific custom events, summarise by different user responses, visualise drop offs and conversion funnels, etc."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/xM3FZy5.png",alt:null})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/BvNwdWt.jpg",alt:null})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/fwUfCMz.png",alt:null})),Object(o.b)("hr",null),Object(o.b)("h3",{id:"variables"},"Variables"),Object(o.b)("p",null,"Variables node can be used to set value of one or more variables at any point in the node. (",Object(o.b)("a",{parentName:"p",href:"../bot-variables"},"Learn how to create a variable"),")"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2139\ufe0f If you leave value blank, it will set to empty string")),Object(o.b)("img",{src:"https://i.imgur.com/f0mF278.png",alt:"drawing",width:"60%"}),Object(o.b)("hr",null),Object(o.b)("h3",{id:"database"},"Database"),Object(o.b)("p",null,"Database action node helps you in perform simple insert and search operations on your ",Object(o.b)("a",{parentName:"p",href:"../../data/create-tables"},"database tables"),". "),Object(o.b)("h4",{id:"insert"},Object(o.b)("strong",{parentName:"h4"},"Insert")),Object(o.b)("p",null,"You select insert operation to insert details against each column into any database table you select. "),Object(o.b)("img",{src:"https://i.imgur.com/Bs3DcfA.png",alt:"drawing",width:"60%"}),Object(o.b)("h4",{id:"bulk-insert"},Object(o.b)("strong",{parentName:"h4"},"Bulk Insert")),Object(o.b)("p",null,"You can also do bulk insert in database instead of just one row at a time. All you need on this node is to select a variable containing data you want to insert.\n","[To be updated]"),Object(o.b)("img",{src:"https://i.imgur.com/8rnAtQ9.png",alt:"drawing",width:"60%"}),Object(o.b)("h4",{id:"search"},Object(o.b)("strong",{parentName:"h4"},"Search")),Object(o.b)("p",null,"You can also perform search operation in database node. "),Object(o.b)("img",{src:"https://i.imgur.com/9yCz0DD.png",alt:"drawing",width:"60%"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For searching, you can ",Object(o.b)("strong",{parentName:"p"},"select a table")," you want to perform search on. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Add filter"),": You can also add filters to your search (optional). "),Object(o.b)("p",{parentName:"li"},"Following filter conditons are available,\nlet's understand with examples of what all will match with '",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Model car")),"' string - "),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"a"),". ",Object(o.b)("strong",{parentName:"p"},"Is/Is not")," : for exactly matching/exactly not matching with value given.\nEg: 'Model car' will be matched "),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"b"),". ",Object(o.b)("strong",{parentName:"p"},"contains/does not contain")," : will be matched/omitted if it contains the given value\nEg: 'Model car', 'this is a Model car', 'Model car 101' all will be matched/omitted"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"c"),". ",Object(o.b)("strong",{parentName:"p"},"contains any/does not contain any"),": this is like above, but here each word will be matched/omitted as contains instead of whole phrase.\nEg: 'Model car', 'Model', 'car', 'this is a Model', 'car 242' etc all will be matched"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"d"),". ",Object(o.b)("strong",{parentName:"p"},"range"),": In range you can enter a ",Object(o.b)("inlineCode",{parentName:"p"},"from")," and ",Object(o.b)("inlineCode",{parentName:"p"},"to")," value as a filter.\nEg: prince ",Object(o.b)("inlineCode",{parentName:"p"},"from"),":'1000' ",Object(o.b)("inlineCode",{parentName:"p"},"to"),":5000")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Output")," : You can sort the output based on a string type column (optional), modify the size of output (maximum no. of records to fetch) and store this result in a variable."))),Object(o.b)("h4",{id:"update"},"Update"),Object(o.b)("img",{src:"https://i.imgur.com/o7lvCdC.png",alt:"drawing",width:"50%"}),Object(o.b)("p",null,"Update option in the database node can be used to update values stored in the tables.\nTo do so:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Select update option in database node"),Object(o.b)("li",{parentName:"ol"},"Select the name of the table "),Object(o.b)("li",{parentName:"ol"},"You can add a where condition that acts as condition that has to be met in order to update the value"),Object(o.b)("li",{parentName:"ol"},"In Update with ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In Fields add the name of column    "),Object(o.b)("li",{parentName:"ul"},"In with value add the variable storing the value that you want to update current")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("p",null,"You can use function node to execute code at any point in the flow.\nIn this node you can select the ",Object(o.b)("a",{parentName:"p",href:"../cloud-function"},"code function")," you wish to execute and ",Object(o.b)("a",{parentName:"p",href:"../bot-variables"},"variable")," to store the return value of function in (optional)."),Object(o.b)("img",{src:"https://i.imgur.com/hCnAPvz.png",alt:"drawing",width:"50%"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Learn ",Object(o.b)("a",{parentName:"p",href:"../cloud-function"},"here")," about different methods/arguments you can use in functions. "))),Object(o.b)("h3",{id:"document-search"},"Document Search"),Object(o.b)("p",null,"Document Search action node is used to answer user query at any point in the flow (or fallback) from documents uploaded in the Knowledge base.  (This node shows results from document cognition)"),Object(o.b)("img",{src:"https://i.imgur.com/0V43oWI.png",alt:"drawing",width:"70%"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can select a variable containing search query"),Object(o.b)("li",{parentName:"ul"},"You can also choose too add metadata filters (optional) to your query (the filters you tagged your documents with will show in dropdown). "),Object(o.b)("li",{parentName:"ul"},"You can branch flow from here based on whether any results were found in the documents (success) or not (failure)."),Object(o.b)("li",{parentName:"ul"},"There is no store output here, as the results are directly shown in carousels. "),Object(o.b)("li",{parentName:"ul"},"In node settings, you can configure total no. of results shown, total number of results per document and messages shown while showing results/reporting failure. ")),Object(o.b)("img",{src:"https://i.imgur.com/cu1uk7M.png",alt:"drawing",width:"50%"}),Object(o.b)("hr",null),Object(o.b)("h3",{id:"send-email"},"Send Email"),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"Send Email")," node to Send Emails to user."),Object(o.b)("p",null,"Following fields can be configured:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"From"),"  is a default email. (Currently custom emails are not supported)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"To")," can be selected from bot variables. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Subject"),"- You can write plain text and use variables here. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Body")," - You can write plain text, basic HTML markdown, or can also use ",Object(o.b)("a",{parentName:"li",href:"../bot-variables"},"variables"),". ")),Object(o.b)("img",{src:"https://i.imgur.com/BlpcD8e.png",alt:"drawing",width:"50%"}),Object(o.b)("hr",null),Object(o.b)("h3",{id:"modifier"},"Modifier"),Object(o.b)("p",null,"Modifier node is used to perform a series of simple operations like lower case, capitilise, remove from end, replace with etc on input variable and store the 'modified' output. This node can be quick used when you want to say, modify some user input before entering to DB or pass to API node, or fetch from API and show to user etc."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"  You can also test your series of modifiers by entering different input strings to check whether you are getting desired output in test window shown below. "))),Object(o.b)("img",{src:"https://i.imgur.com/ENukZvc.png",alt:"drawing",width:"65%"}),Object(o.b)("hr",null),Object(o.b)("h3",{id:"raise-ticket"},"Raise Ticket"),Object(o.b)("p",null,"Raise ticket is used in order to connect user to the human agent. Raise Ticket Node can be found in Actions List - "),Object(o.b)("img",{src:"https://cdn.yellowmessenger.com/06DOgJSptFtI1625671454725.png",alt:"drawing",width:"40%"}),Object(o.b)("p",null,"This simple UI node can be used to setup basic & advanced scenarios such as Working Hours, Agent Availibiity, voice/video calling, etc required to create a ticket."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Raise Ticket Outputs")," - "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"}," Ticket Closed ")," - This essentially is bot behaviour after the Agent closes a ticket (i.e. s/he has resolved user query)."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"}," Error ")," - This can be used as a generic message in any case ticket creation is not successful. For customised messages, specific errors event hub can be configured. ")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Raise Ticket Response")),Object(o.b)("p",null,"Raise Ticket action node returns an object response as shown below. You can parse important information from this response to store it in a database or use it an another journey."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "tags": [],\n  "responded": false,\n  "ticketType": "livechat",\n  "ticketCsatScore": null,\n  "agentCsatScore": null,\n  "assignedByAdmin": false,\n  "manualAssignment": false,\n  "lastAgentMessageTime": null,\n  "lastUserMessageTime": null,\n  "lastBotMessageTime": null,\n  "userActiveStatus": null,\n  "agentActiveStatus": null,\n  "replyCount": 0,\n  "voiceCall": false,\n  "sipCall": false,\n  "agentCurrentHandlingTicketsCount": 0,\n  "autoStartCall": false,\n  "autoTranslate": false,\n  "autoDetectLanguage": false,\n  "_id": "6156df377b7bb14e16bae116",\n  "botId": "YOUR_BOT_ID_HERE",\n  "uid": "106265078787462873391306131746",\n  "source": "yellowmessenger",\n  "issue": "ISSUE_TITLE_HERE",\n  "priority": "MEDIUM",\n  "severity": "MEDIUM",\n  "contact": {\n    "phone": "1234567890",\n    "name": "CUSTOMER_NAME",\n    "email": "[community@yellow.ai](mailto:community@yellow.ai)"\n  },\n  "assignedTo": "community_yello_ai",\n  "sessionId": "5b8a665e69dbc5c451d88bf0",\n  "userLanguage": "en",\n  "ticketId": "100001",\n  "logs": [],\n  "timestamp": "2021-10-01T10:13:11.657Z",\n  "reassignmentLog": [],\n  "collaborators": [\n    {\n      "_id": "6156df377b7bb15d9fbae11a",\n      "username": "community_yello_ai",\n      "xmppUsername": "user_1624003758958",\n      "name": "yellow.ai Community"\n    }\n  ],\n  "agentLanguage": "en",\n  "status": "ASSIGNED",\n  "assignedTime": "2021-10-01T10:13:11.695Z",\n  "xmpp": "user_1624003758958"\n}\n')),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Str2q6a.png",alt:null})),Object(o.b)("p",null,"While raising a ticket, you can pass fields such as ",Object(o.b)("strong",{parentName:"p"},"Name")," , ",Object(o.b)("strong",{parentName:"p"},"Contact")," (Email/Phone Number), and ",Object(o.b)("strong",{parentName:"p"},"Query"),". Message after ticket assignment will be seen by user on getting connected to the agent."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Advanced Options")," - to provide additional information to the ticket."),Object(o.b)("img",{src:"https://cdn.yellowmessenger.com/4RHn4Fh3AzoS1625672881317.png",alt:"drawing",width:"65%"}),Object(o.b)("p",null,"As configured in Inbox Settings, Tags and Custom Fields will be visible in a multi-select dropdown(i.e. more than one options can be added to ticket)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Tags")," - Selected Tags from dropdown will be added to the extra details of the ticket (useful for agents to get a quick overview of the issue).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Department")," - Similar tickets can be assigned to relevant departments.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Priority")," - Denotes the priority of ticket from high, medium or low. (default priority is MEDIUM)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Voice Call Options")," - Voice Call, SIP Call and Auto Start Call can be enabled.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Custom Fields")," - Based on the use case additonal information collected by bot can be added to ticket. for example, in ecommerce Order ID, Payment Mode, Delivery date etc can be asked before connecting to the agent. Just like key value pairs, once a custom field is selected, additional prompt will be seen."))),Object(o.b)("img",{src:"https://cdn.yellowmessenger.com/iE4ppldmrE7k1625673583277.png",alt:"drawing",width:"65%"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Error Handling")),Object(o.b)("p",null,"Output of Raise Ticket Node dictates general behaviour for any error in creating a ticket. In most real life scenarios, it is preferred to show appropriate reason to user as to why they cannot to an agent. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," : Once any specific event is active and configured, the corresponding flow will be given preference. Bot is never paused unless ticket is in ASSIGNED state (i.e. Agent is interating with the user).")),Object(o.b)("p",null,"Follow two steps to handle custom scenarios -"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In Event Hub, activate the custom inbox event.Scenarios that can be handled - ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All Available Agents Busy"),Object(o.b)("li",{parentName:"ul"},"All Available Agents Away"),Object(o.b)("li",{parentName:"ul"},"All Available Agents Offline"),Object(o.b)("li",{parentName:"ul"},"All Available Agents Limit Reached"),Object(o.b)("li",{parentName:"ul"},"Queue Not Enabled"),Object(o.b)("li",{parentName:"ul"},"Group Queue Not Enabled"),Object(o.b)("li",{parentName:"ul"},"Group Queue Limit Reached"),Object(o.b)("li",{parentName:"ul"},"Offline Ticketing Not Enabled"),Object(o.b)("li",{parentName:"ul"},"Offline Ticketing Not Enabled for Groups"),Object(o.b)("li",{parentName:"ul"},"Offline Ticket Queue Limit Reached")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Build a Flow with relevant event added in the Start Trigger.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Working Hours")),Object(o.b)("p",null,"If bot is suppose to respond with a different message outside of agent working hours, ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"./action-nodes-and-logic#logic"},"Logic Node"))," can be used. "),Object(o.b)("img",{src:"https://cdn.yellowmessenger.com/ciDa5Gn2ZzbK1625675537775.png",alt:"drawing",width:"60%"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note : The bot default timezone considered while evalutaing whether a user is outside working hours.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Inbox support auto translate feature out of the box so agents don't need to know the customers langauge in order to help them. Just enable ",Object(o.b)("inlineCode",{parentName:"p"},"Translate User Message")," in the raise ticket node configuration to use this feature."),Object(o.b)("img",{src:"https://i.imgur.com/frCvffs.png",alt:"drawing",width:"40%"}))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"set-language"},"Set language"),Object(o.b)("p",null,"You can use Set language action node to set or change the bot language at any given point in the flow. Set language action node takes only one input - variable containing ISO code of language you wish to change to.\n(Note : You can google the ISO codes for various languages)"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported"},"Here is the list of languages that we support")),Object(o.b)("img",{src:"https://i.imgur.com/kNWdMP4.png",alt:"drawing",width:"60%"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Language can only be changed to only if that language is configured in bot settings, otherwise the node will fail. "))),Object(o.b)("h3",{id:"trigger-journey"},"Trigger Journey"),Object(o.b)("p",null,"Trigger Journey action node can be used to trigger another journey at any point in the flow. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you add more nodes after trigger journey, the bot will return to the remaining flow in the journey after triggered journey ins completed."))),Object(o.b)("img",{src:"https://i.imgur.com/60xWXCn.png",alt:"drawing",width:"60%"}),Object(o.b)("hr",null),Object(o.b)("h3",{id:"send-otp-and-verify-otp"},"Send OTP and Verify OTP"),Object(o.b)("p",null,"Send OTP and Verify OTP are simple nodes that can be used for sending and verifying OTPs.  "),Object(o.b)("img",{src:"https://i.imgur.com/PedjC6o.png",alt:"drawing",width:"60%"}),Object(o.b)("p",null,"In verify otp node, you can also branch the flow based on verification success and failure."),Object(o.b)("img",{src:"https://i.imgur.com/aRvqus8.png",alt:"drawing",width:"60%"}),Object(o.b)("h3",{id:"generate-pdf"},"Generate PDF"),Object(o.b)("p",null,"This node is used to generate PDFs that contain dynamic data."),Object(o.b)("img",{src:"https://cdn.yellowmessenger.com/4yIdNmUwh3Q51626268800011.png",alt:"drawing",width:"60%"}),Object(o.b)("p",null,"Steps to generate dynamic documents:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Upload a template document"),". This document should be in .docx format and have placeholder values wherever the dynamic data is to be inserted. The placeholder should be enclosed in single brackets, ie. ",Object(o.b)("inlineCode",{parentName:"p"},"{placeholdername}"),".\neg: The company name is {company name}")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Map placeholder names to variables"),". Enter the placeholder name without the brackets in the left column and select variable value in the right column. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Save to a variable")),Object(o.b)("p",{parentName:"li"},"This can now be sent through the ",Object(o.b)("strong",{parentName:"p"},"Send file")," node. Simply choose the relevant variable from the ",Object(o.b)("em",{parentName:"p"},"fetch from variable")," dropdown, this will send the dynamically generated file as a PDF to the user."))),Object(o.b)("h3",{id:"delay"},"Delay"),Object(o.b)("p",null,"Using this action node, we can delay the next steps of our conversational flow in a journey. We can set the delay in terms of minutes or hours."),Object(o.b)("img",{src:"https://i.imgur.com/SOvGGjq.png",alt:"drawing",width:"80%"}),Object(o.b)("p",null,"Now if we see in this example the phone prompt is followed by a 1 min delay node. So the next name prompt will appear 1 min after phone prompt."),Object(o.b)("h2",{id:"logic"},"Logic"),Object(o.b)("h3",{id:"if-condition"},"If condition"),Object(o.b)("p",null,"Using this condition node, you can branch flow based on multiple conditions. There are a variety of conditions available , as well as multiple things you can compare with.  "),Object(o.b)("img",{src:"https://i.imgur.com/sSq1fSG.png",alt:"drawing",width:"60%"}))}d.isMDXComponent=!0},366:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(365)),s=["components"],i={sidebar_label:"Lead Generation Bot",title:"Lead Generation Bot"},l={unversionedId:"cookbooks/template-bots/lead-generation",id:"cookbooks/template-bots/lead-generation",isDocsHomePage:!1,title:"Lead Generation Bot",description:"Create Lead Generation Bot",source:"@site/docs/cookbooks/template-bots/lead-generation.md",slug:"/cookbooks/template-bots/lead-generation",permalink:"/docs/cookbooks/template-bots/lead-generation",version:"current",sidebar_label:"Lead Generation Bot",sidebar:"cookbooks",previous:{title:"FAQ Bot",permalink:"/docs/cookbooks/template-bots/faq"},next:{title:"WhatsApp Channel Setup",permalink:"/docs/cookbooks/whatsapp cookbook/whatsapp-bot"}},c=[{value:"Create Lead Generation Bot",id:"create-lead-generation-bot",children:[{value:"<code>Step 1:</code> Create a Journey",id:"step-1-create-a-journey",children:[]},{value:"<code>Step 2:</code> Add User Expressions",id:"step-2-add-user-expressions",children:[]},{value:"<code>Step 3:</code> Adding of Responses",id:"step-3-adding-of-responses",children:[]},{value:"<code>Step 4:</code> Contextual Question/Response",id:"step-4-contextual-questionresponse",children:[]},{value:"<code>Step 5:</code> Quick Reply Input",id:"step-5-quick-reply-input",children:[]},{value:"<code>Step 6:</code> Train and Try your Bot",id:"step-6-train-and-try-your-bot",children:[]}]},{value:"Create Lead Generation Bot using Form Journey",id:"create-lead-generation-bot-using-form-journey",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,s);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"create-lead-generation-bot"},"Create Lead Generation Bot"),Object(r.b)("p",null,"We are starting with our next recipe which will be ready in few minutes just like 2 minute noodles\ud83d\ude09. In this recipe we will create a lead generation bot which will capture some information of the user while answering the FAQs or if the user is interested in certain offerings. Lets get started!"),Object(r.b)("h3",{id:"step-1-create-a-journey"},Object(r.b)("inlineCode",{parentName:"h3"},"Step 1:")," Create a Journey"),Object(r.b)("p",null,"What is a Journey? -- A journey starts when the user queries for a certain answer and the bot gets the relevant information and shares it with the user. While getting the right information the bot might require some more details to identify the exact info to be shared which are known as steps/actions later. Below is an example of how a journey look like:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Bot"),": ",Object(r.b)("em",{parentName:"p"},"How may I help you?")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"User"),": ",Object(r.b)("em",{parentName:"p"},"What is my order status?")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Bot"),": ",Object(r.b)("em",{parentName:"p"},"Please enter your Order ID.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"User"),": ",Object(r.b)("em",{parentName:"p"},"YM10X")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Bot"),": ",Object(r.b)("em",{parentName:"p"},"Your order status is: Shipped on 12th Jan 2021 and will reach on or before 15th Jan 2021.")),Object(r.b)("p",null,"--------------- End Of Order Status Journey---------------"),Object(r.b)("p",null,"Now lets create our own journey to generate leads. "),Object(r.b)("hr",null),Object(r.b)("p",null,"In the Studio Dashboard you can create a Journey by heading to the left bottom section and select Create Journey. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Q8CjY97hpxWO1613018676058.png",alt:null})),Object(r.b)("hr",null),Object(r.b)("p",null,"You have to select a Blank Journey, give it a name and description for reference and select the category as Default. Once done you will be inside the journey Dashboard where we would be creating the User Journey as required in our lead generation flow."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/YZGjlTDx51YT1613018946967.png",alt:null})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Quick Tip\ud83d\udca1: You can also select template journeys for Agent Connect and Form Based Journeys which will have the flow already created for you just like cup noddles\ud83c\udf5c"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"step-2-add-user-expressions"},Object(r.b)("inlineCode",{parentName:"h3"},"Step 2:")," Add User Expressions"),Object(r.b)("p",null,"User Expressions are what your users can type in order to fullfil the intent of this journey. Its suggested that you should add atleast 5-8 expressions to train the bot accurately."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/MXd8MBBMVIqi1613029480475.png",alt:null})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Quick Tip\ud83d\udca1: Punctuations are not required while adding user utterances."))),Object(r.b)("p",null,"Once the User Expressions are added you can add the Responses/Questions required to be shown to the users in order to get the required information. There are multiple types of responses that you can use. You can also use combination of the different types of responses in order to make the bot response more intuitive. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/5bltCorsPHGQ1613104473061.png",alt:null})),Object(r.b)("hr",null),Object(r.b)("h3",{id:"step-3-adding-of-responses"},Object(r.b)("inlineCode",{parentName:"h3"},"Step 3:")," Adding of Responses"),Object(r.b)("p",null,"In our case we will be using Question Type Message Response in order to ask the name, email, phone number etc. to the user. The reason of using a Question Type Response and not a generic Message response is for the validation of each user input for each question. You can use the available validations or write your own Regex to validate the input."),Object(r.b)("p",null,"In case if you need variances to your question for each question you can also do that by adding randomize text just below the input text bar of the response."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Lr2wc66ssaCg1613104821044.png",alt:null})),Object(r.b)("p",null,"You can select Name Validator in this case to validate the user input. Adding a validator is not mandatory but suggested so that valid inputs are captured. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/0b2IyhjPXKrZ1613105420402.png",alt:null})),Object(r.b)("p",null,"Once the validator is added you can add the message to be shown for invalid inputs. The bot will not allow the users to proceed if the user doesn't enter a valid response. You can also add number of retries for a valid response which will be discussed later."),Object(r.b)("p",null,"You also use settings of each of these nodes to set ",Object(r.b)("inlineCode",{parentName:"p"},"Autoskip prompt using")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Use this as Unique ID")),Object(r.b)("p",null,"When you check the unique Id setting, then through out the journeys of the bot it won't again ask for same prompt question. For example, if you mark the name prompt as unique Id then throught out the bot journeys it won't ask for the name again."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/BNLifiq.png",alt:null})),Object(r.b)("p",null,"Similarily if you have used the Autoskip prompt then if the variable contains the value then it will skip the prompt and continue with the rest of the journey"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/a6OYf4K.png",alt:null})),Object(r.b)("hr",null),Object(r.b)("h3",{id:"step-4-contextual-questionresponse"},Object(r.b)("inlineCode",{parentName:"h3"},"Step 4:")," Contextual Question/Response"),Object(r.b)("p",null,"You can add Contextual Question responses as well for each questions wherever required in order to make the bot more user friendly. It is suggested to add Common Contextual Responses for every question."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/rITfsdJPOPWw1613107702044.png",alt:null})," ",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/CufP3Qva6zI81613108060676.png",alt:null})),Object(r.b)("hr",null),Object(r.b)("h3",{id:"step-5-quick-reply-input"},Object(r.b)("inlineCode",{parentName:"h3"},"Step 5:")," Quick Reply Input"),Object(r.b)("p",null,"To make the bot more user friendly you can add quick replies as an input option. You can also configure the quick reply button colour, design etc. from Advanced Settings. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/vhYmC2EvFu601613110323588.png",alt:null})),Object(r.b)("hr",null),Object(r.b)("h3",{id:"step-6-train-and-try-your-bot"},Object(r.b)("inlineCode",{parentName:"h3"},"Step 6:")," Train and Try your Bot"),Object(r.b)("p",null,"Once you are done with adding of the utterances, questions and the contextual responses you can train and try your bot to confirm the flow is working as you designed. "),Object(r.b)("p",null,"To Train your bot you need to click ",Object(r.b)("em",{parentName:"p"},"Train")," on the right top"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/PUSjIck2mpPk1613125572918.png",alt:null}),"\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/sT6VGMa0y6av1613126056073.png",alt:null})),Object(r.b)("p",null,"Ater the training is completed you can go to Try Your Bot and verify your created flow."),Object(r.b)("p",null,"You are ready with your first Bot! \ud83c\udf89"),Object(r.b)("p",null,"Next we will discuss on how we can save those user information in a Database and do an import of the records as in when required. You can check the next guide on Database creation ",Object(r.b)("a",{parentName:"p",href:"../../platform_concepts/data/create-tables"},"here")),Object(r.b)("h2",{id:"create-lead-generation-bot-using-form-journey"},"Create Lead Generation Bot using Form Journey"),Object(r.b)("p",null,"In the cookbook above, we saw how to create a Lead Generation bot on Yellow Messenger. However, there's one more way to create it quickly. Introducing Form Journey which is nothing but template journey which you can use for various purposed. In this cookbook, we will use ",Object(r.b)("inlineCode",{parentName:"p"},"Form Journey")," to get user data."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a new Form journey\nIn Studio, click on ",Object(r.b)("inlineCode",{parentName:"li"},"Create Journey")," button on the bottom left corner.\nIn the popup, in the ",Object(r.b)("inlineCode",{parentName:"li"},"Template")," field select ",Object(r.b)("inlineCode",{parentName:"li"},"Forms"),". Also, add rest of the details.\n",Object(r.b)("img",{parentName:"li",src:"https://i.imgur.com/Ko2A98A.png",alt:null}))),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"Select steps for forms journey")," add all fields as per requirement.\nClick on ",Object(r.b)("inlineCode",{parentName:"p"},"Create Journey")," now."),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Connect it with ",Object(r.b)("inlineCode",{parentName:"li"},"Welcome Prompt"),".")),Object(r.b)("p",null,"We want users to engage with this journey when they first interact with the bot. Best way to do this including it in the ",Object(r.b)("inlineCode",{parentName:"p"},"Welcome Promt"),". Go to ",Object(r.b)("inlineCode",{parentName:"p"},"Studio")," click on the home and select ",Object(r.b)("inlineCode",{parentName:"p"},"Welcome Prompt"),". You should see a ",Object(r.b)("inlineCode",{parentName:"p"},"Text Message")," response already there."),Object(r.b)("p",null,"Let's add a ",Object(r.b)("a",{parentName:"p",href:"../../platform_concepts/studio/steps/prompts-and-messages#quick-replies"},"Quick Reply")," message by clicking on ",Object(r.b)("inlineCode",{parentName:"p"},"Click here to add new response"),". Enter a text message here and buttons you want to show users as options"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/DByc6iN.png",alt:null})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Store information in the database")),Object(r.b)("p",null,"First go through the ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/data/create-tables"},Object(r.b)("strong",{parentName:"a"},"data module"))," to understand how a database is created and values are added to the respective columns of the database."),Object(r.b)("p",null,"Then use a ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/steps/action-nodes-and-logic#database"},Object(r.b)("strong",{parentName:"a"},"database action node"))," to insert the user information in the database table that you have create in the data module."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ReJ0gxz.png",alt:null})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ftgzRjM.png",alt:null})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Try your bot")),Object(r.b)("p",null,"Now you can interact with your bot. If everything works just fine, after completing the journeys, you should see the user data in the database."))}p.isMDXComponent=!0},365:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(h,i(i({ref:t},c),{},{components:n})):a.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
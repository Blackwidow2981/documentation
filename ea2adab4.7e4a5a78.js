(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{343:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(365)),r=["components"],c={title:"Chatbot SDK for xamarin",sidebar_label:"xamarin Chatbot SDK"},l={unversionedId:"platform_concepts/channelConfiguration/xamarin",id:"platform_concepts/channelConfiguration/xamarin",isDocsHomePage:!1,title:"Chatbot SDK for xamarin",description:"Migration Guide for Android",source:"@site/docs/platform_concepts/channelConfiguration/xamarin.md",slug:"/platform_concepts/channelConfiguration/xamarin",permalink:"/docs/platform_concepts/channelConfiguration/xamarin",version:"current",sidebar_label:"xamarin Chatbot SDK",sidebar:"platform_concepts",previous:{title:"How to setup a WhatsApp chatbot on Yellow Messenger?",permalink:"/docs/platform_concepts/channelConfiguration/whatsapp-configuration"},next:{title:"Azure AD",permalink:"/docs/platform_concepts/appConfiguration/azure-ad"}},s=[{value:"Installation",id:"installation",children:[{value:"Xamarin",id:"xamarin",children:[]}]},{value:"Pre-requisite",id:"pre-requisite",children:[{value:"Setting up Xamarin.Forms",id:"setting-up-xamarinforms",children:[]},{value:"Setting up Android",id:"setting-up-android",children:[]},{value:"Setting up iOS",id:"setting-up-ios",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Set botId",id:"set-botid",children:[]},{value:"YM AuthenticationToken",id:"ym-authenticationtoken",children:[]},{value:"Push Notifications",id:"push-notifications",children:[]},{value:"Payload",id:"payload",children:[]},{value:"On-Premise / Region Specific deployments",id:"on-premise--region-specific-deployments",children:[]},{value:"Custom loader",id:"custom-loader",children:[]},{value:"V2 bot",id:"v2-bot",children:[]},{value:"Speech to Text",id:"speech-to-text",children:[]},{value:"Colors",id:"colors",children:[]},{value:"Present chatbot",id:"present-chatbot",children:[]}]},{value:"Bot Events",id:"bot-events",children:[]},{value:"Close bot",id:"close-bot",children:[]},{value:"Unlink Device Token",id:"unlink-device-token",children:[]},{value:"Demo App",id:"demo-app",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"migration-guide-for-android"},"Migration Guide for Android"),Object(i.b)("p",null,"Version 1.x had an issue where a corrupted ymAuthentication token was passed in some cases from SDK to the server. The conversation history was thus mapped to the corrupted ymAuthenticationToken"),Object(i.b)("p",null,"Version 2.x has fix for this issue and thus a correct ymAuthenticationToken is always passed.\nHowever, as the correct ymAuthentication is different from the corrupted token, our server treats this user as a new user which leads to a complete loss of history of user conversations.\nThe user will have a fresh start after updating the app."),Object(i.b)("p",null,"Note:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"ymAuthentication was corrupted only when it contained ",Object(i.b)("inlineCode",{parentName:"li"},"=")," character in 1.x versions"),Object(i.b)("li",{parentName:"ol"},"This issue was happening only on Android platform.")),Object(i.b)("p",null,"For more info feel free to email us at ",Object(i.b)("a",{parentName:"p",href:"mailto:mobile@yellow.ai"},"mobile@yellow.ai")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"xamarin"},"Xamarin"),Object(i.b)("p",null,"Open NuGet package manager"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Search for YmChat"),Object(i.b)("li",{parentName:"ul"},"Install the package for",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Xamarin.Forms"),Object(i.b)("li",{parentName:"ul"},"Android"),Object(i.b)("li",{parentName:"ul"},"iOS")))),Object(i.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(i.b)("h3",{id:"setting-up-xamarinforms"},"Setting up Xamarin.Forms"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("inlineCode",{parentName:"li"},"App.xaml.cs")),Object(i.b)("li",{parentName:"ul"},"import namespace YmChat",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-c#"},"using YmChat;\n"))),Object(i.b)("li",{parentName:"ul"},"Accept parameter ",Object(i.b)("inlineCode",{parentName:"li"},"IYmChat")," in the ",Object(i.b)("inlineCode",{parentName:"li"},"App")," constructor\nand pass down to the class where you are using the SDK",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-c#"},"public App(IYmChat iymchat)\n{\n    InitializeComponent();\n    MainPage = new MainPage(iymchat);\n}\n")))),Object(i.b)("h3",{id:"setting-up-android"},"Setting up Android"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("inlineCode",{parentName:"li"},"MainActivity.cs")),Object(i.b)("li",{parentName:"ul"},"import namespace YmChat",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-c#"},"using YmChat;\n"))),Object(i.b)("li",{parentName:"ul"},"Inside ",Object(i.b)("inlineCode",{parentName:"li"},"onCreate")," function add this snippet at the end",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-c#"},"YmChatImplementation ymchat = new YmChatImplementation();\nLoadApplication(new App(ymchat));\n")))),Object(i.b)("h3",{id:"setting-up-ios"},"Setting up iOS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("inlineCode",{parentName:"li"},"AppDelegate.cs")),Object(i.b)("li",{parentName:"ul"},"import namespace YmChat",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-c#"},"using YmChat;\n"))),Object(i.b)("li",{parentName:"ul"},"Inside ",Object(i.b)("inlineCode",{parentName:"li"},"FinishedLaunching")," function add this snippet before return",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-c#"},"YmChatImplementation ymchat = new YmChatImplementation();\nLoadApplication(new App(ymchat));\n")))),Object(i.b)("h4",{id:"file-provider"},"File provider"),Object(i.b)("p",null,"Add following key in your ",Object(i.b)("inlineCode",{parentName:"p"},"strings.xml")," file found at ",Object(i.b)("inlineCode",{parentName:"p"},"yourproject.Android/Resources/values/strings.xml"),", this will override default file provider used by SDK."),Object(i.b)("p",null,'Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"\nExample - applicationId : "com.abc.xyz" then application_id_for_provider = com.abc.xyz.fileprovider'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<string name="application_id_for_provider">your.application.id.fileprovider</string>\n')),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"set-botid"},"Set botId"),Object(i.b)("p",null,"This is the first and compulsory step."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setBotId("botId");\n')),Object(i.b)("h3",{id:"ym-authenticationtoken"},"YM AuthenticationToken"),Object(i.b)("p",null,"ymAuthenticationToken is used to associate an identity of the user with the chat bot."),Object(i.b)("p",null,"Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since ",Object(i.b)("strong",{parentName:"p"},"inception"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setAuthenticationToken("token");\n')),Object(i.b)("p",null,"Note: History will load only when ",Object(i.b)("inlineCode",{parentName:"p"},"Show history")," flag is enabled in the channel settings"),Object(i.b)("h3",{id:"push-notifications"},"Push Notifications"),Object(i.b)("p",null,"YMChat supports firebase notifications. Pass your ",Object(i.b)("inlineCode",{parentName:"p"},"FCM token")," in setDeviceToken method."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setDeviceToken("token");\n')),Object(i.b)("p",null,"Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info ",Object(i.b)("a",{parentName:"p",href:"https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key"},"here")),Object(i.b)("h3",{id:"payload"},"Payload"),Object(i.b)("p",null,"Additional information can be passed in the form of key value pair from app to bot using payload."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},'var Payload = new Dictionary<string, object> { { "name": "Integration", "type": "Xamarin" } };\nymChatInterface.setPayLoad(Payload);\n')),Object(i.b)("p",null,"Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown"),Object(i.b)("p",null,"For passing data from bot to app refer bot ",Object(i.b)("a",{parentName:"p",href:"#bot-events"},"Bot Events")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"payload security")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Payload is securely passed in HTTPS post request to protect the information passed in it"))),Object(i.b)("h4",{id:"trigger-journey"},"Trigger journey"),Object(i.b)("p",null,"A specific journey can be triggered on launch, by passing the slug in the payload."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'ymChatInterface.setPayload({ "JourneySlug" : "checkout-cart" });\n')),Object(i.b)("h3",{id:"on-premise--region-specific-deployments"},"On-Premise / Region Specific deployments"),Object(i.b)("p",null,"YmChat supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to ",Object(i.b)("inlineCode",{parentName:"p"},"setCustomURL()")," method."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCustomURL("https://your-on-prem-url.com");\n')),Object(i.b)("p",null,"If the bot is deployed in a specific region(e.g. r1,r2,r3..rn)) on yellow.ai cloud, set the ",Object(i.b)("inlineCode",{parentName:"p"},"customBaseUrl")," as follows"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCustomURL("https://rx.cloud.yellow.ai");\n')),Object(i.b)("p",null,"Here rx = r1,r2,r3,r4,r5 etc"),Object(i.b)("h3",{id:"custom-loader"},"Custom loader"),Object(i.b)("p",null,"You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCustomLoaderURL(\n  "https://example.com/your/custom/image.gif"\n);\n')),Object(i.b)("h3",{id:"v2-bot"},"V2 bot"),Object(i.b)("p",null,"You can enable V2 bot by calling ",Object(i.b)("inlineCode",{parentName:"p"},"setVersion()")," method. Default value is 1"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.setVersion(2);\n")),Object(i.b)("h3",{id:"speech-to-text"},"Speech to Text"),Object(i.b)("p",null,"Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.setEnableSpeech(true);\n")),Object(i.b)("h3",{id:"colors"},"Colors"),Object(i.b)("h4",{id:"status-bar"},"Status bar"),Object(i.b)("p",null,"Status bar color can be set by calling ",Object(i.b)("inlineCode",{parentName:"p"},"setStatusBarColor")," method"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setStatusBarColor("#FFFFFF")\n')),Object(i.b)("h4",{id:"close-button"},"Close button"),Object(i.b)("p",null,"Close button color can be set by calling ",Object(i.b)("inlineCode",{parentName:"p"},"setCloseButtonColor")," method"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCloseButtonColor("#000000")\n')),Object(i.b)("h4",{id:"ios"},"iOS"),Object(i.b)("p",null,"If you are supporting Speech recognition, add following snippet to Info.plist of the host app"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"<key>NSMicrophoneUsageDescription</key>\n<string>Your microphone will be used to record your speech when you use the Voice feature.</string>\n<key>NSSpeechRecognitionUsageDescription</key>\n<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>\n")),Object(i.b)("h3",{id:"present-chatbot"},"Present chatbot"),Object(i.b)("p",null,"Chat bot can be presented by calling ",Object(i.b)("inlineCode",{parentName:"p"},"startChatbot()"),". This method will display full screen chat view"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.startChatBot();\n")),Object(i.b)("h2",{id:"bot-events"},"Bot Events"),Object(i.b)("p",null,"Bot events are used to pass information from bot to app. For passing events from app to bot refer ",Object(i.b)("a",{parentName:"p",href:"#payload"},"Payload")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},' ymChatInterface.onEventFromBot((botEvent) =>\n  {\n    Console.WriteLine(botEvent["code"]);\n    Console.WriteLine(botEvent["data"]);\n  });\n')),Object(i.b)("h4",{id:"bot-close-event"},"Bot close event"),Object(i.b)("p",null,"Bot close event is separately sent and it can be handled in following way."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.onBotClose(() =>\n  {\n    Console.WriteLine("Chatbot closed");\n  });\n')),Object(i.b)("h2",{id:"close-bot"},"Close bot"),Object(i.b)("p",null,"Bot can be closed by tapping on cross button at top, and they can be programmatically closed using ",Object(i.b)("inlineCode",{parentName:"p"},"closeBot()")," function"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.closeBot();\n")),Object(i.b)("h2",{id:"unlink-device-token"},"Unlink Device Token"),Object(i.b)("p",null,"If you want to stop receiving push notifications you can unlink the device token.\nDevice token typically is unlinked when the user logs out of the app."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c#"},'  ymChatInterface.unLinkDeviceToken(\n    botId,\n    apiKey,\n    deviceToken,\n    (isDeviceTokenUnlinked) {\n      Console.WriteLine("Device token unlinked");\n      },\n    (failureMessage) {\n      Console.WriteLine(failureMessage);\n      });\n')),Object(i.b)("h2",{id:"demo-app"},"Demo App"),Object(i.b)("p",null,"A demo app can be used as a reference to better understand how this SDK can be integrated in the app\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/yellowmessenger/ymchat-xamarin-demo"},"https://github.com/yellowmessenger/ymchat-xamarin-demo")))}b.isMDXComponent=!0},365:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
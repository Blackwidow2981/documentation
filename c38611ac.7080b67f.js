(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{289:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),c=a(7),s=(a(0),a(365)),o=["components"],p={title:"Slack",sidebar_label:"Slack"},r={unversionedId:"platform_concepts/channelConfiguration/slack",id:"platform_concepts/channelConfiguration/slack",isDocsHomePage:!1,title:"Slack",description:"Introduction",source:"@site/docs/platform_concepts/channelConfiguration/slack.md",slug:"/platform_concepts/channelConfiguration/slack",permalink:"/docs/platform_concepts/channelConfiguration/slack",version:"current",sidebar_label:"Slack",sidebar:"platform_concepts",previous:{title:"react-native Chatbot SDK",permalink:"/docs/platform_concepts/channelConfiguration/react-native"},next:{title:"SMS Outbound India",permalink:"/docs/platform_concepts/channelConfiguration/sms-outbound-india"}},l=[{value:"Introduction",id:"introduction",children:[{value:"Slack context management using YM",id:"slack-context-management-using-ym",children:[]}]},{value:"Creating new App on Slack",id:"creating-new-app-on-slack",children:[]},{value:"Configuration of single / multi-workspace",id:"configuration-of-single--multi-workspace",children:[{value:"Single Workspace:",id:"single-workspace",children:[]},{value:"Multiple Workspace:",id:"multiple-workspace",children:[]}]},{value:"Adding Slack app to Direct message / Channel",id:"adding-slack-app-to-direct-message--channel",children:[]},{value:"Slack APIs integration",id:"slack-apis-integration",children:[]},{value:"Slack Interactive Features",id:"slack-interactive-features",children:[{value:"Block Kit:",id:"block-kit",children:[]},{value:"Modals:",id:"modals",children:[]},{value:"Slash Commands / Shortcuts:",id:"slash-commands--shortcuts",children:[]},{value:"Ephemeral Message ( only visible to you )",id:"ephemeral-message--only-visible-to-you-",children:[]}]},{value:"Initiate Direct Message:",id:"initiate-direct-message",children:[{value:"App Home Tab",id:"app-home-tab",children:[]}]},{value:"References",id:"references",children:[]}],i={toc:l};function b(e){var t=e.components,a=Object(c.a)(e,o);return Object(s.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,"Slack is a workplace communication tool, \u201ca single place for messaging, tools and files.\u201d This means Slack is an instant messaging system with lots of add-ins for other workplace tools. Slack has an intuitive UI with both group and person-to-person messaging. These are more than 1500 apps and allows users to create their own app which has evolved Slack to become a one-stop-shop for a lot of users."),Object(s.b)("p",null,"Video Recording of how to get started - ",Object(s.b)("a",{parentName:"p",href:"https://www.loom.com/share/ca1c315947204b168310e20eeb6c5523"},"https://www.loom.com/share/ca1c315947204b168310e20eeb6c5523")),Object(s.b)("h3",{id:"slack-context-management-using-ym"},"Slack context management using YM"),Object(s.b)("p",null,"Slack provides threaded messaging so It is important to understand how yellow messenger platform handles the context in channel, threads and in DM."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Channel:")),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Bot will always reply in respective thread"),Object(s.b)("li",{parentName:"ol"},"Each thread conserve independent context, if multiple threads are activated by same/different person \u2192 bot will maintain individual context/journey for each thread. Parallelly same journey can be run in different threads."),Object(s.b)("li",{parentName:"ol"},"Each thread has its own local memory (app.memory), So local memory cannot be accessible cross threads, cross channels, groups. Use global memory for cross memory requirements."),Object(s.b)("li",{parentName:"ol"},"User profile is preserved cross channels/threads/DMs therefore oauth/integrations/tokens is accessible for user irrespective of channels.",Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},"app.sender = T01XXXJA9T8_G01XXXF2P7S_1605XXX144.000200  (i.e WorkspaceID_ChannelD_ThreadID)")))),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/DL6bokDi0ycB1612443392644.png",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"DM:")),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Bot will always reply in 1-1 conversation (no threads formation)"),Object(s.b)("li",{parentName:"ol"},"Bot ignore thread formation for better conversational experience"),Object(s.b)("li",{parentName:"ol"},"Local memory is accessible within DM irrespective of threads.",Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},"app.sender = T01XXXJA9T8_D01XXX5V4TD (i.e WorkspaceID_ChannelID)\n",Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/ZqjZAPydoVtY1612443431420.png",alt:null}))))),Object(s.b)("h2",{id:"creating-new-app-on-slack"},"Creating new App on Slack"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 1:")," Goto ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/apps"},"https://api.slack.com/apps")," and click on ",Object(s.b)("strong",{parentName:"p"},"Create a new app"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 2:")," Fill up the app name and select your app development workspace."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 3:")," After creating the app, goto the event subscription on the left panel. Enable the event subscription and add request URL to ",Object(s.b)("a",{parentName:"p",href:"https://app.yellowmessenger.com/integrations/slack/receive/"},Object(s.b)("em",{parentName:"a"},"https://app.yellowmessenger.com/integrations/slack/receive/")),Object(s.b)("em",{parentName:"p"},"botID")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/CodBUrX.png",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 4:")," Now scroll down on the event subscription section and expand ",Object(s.b)("strong",{parentName:"p"},"Subscribe to bot events")," and add the events scope according to your bot requirement."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Some of the common events:"),"  ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/events"},Object(s.b)("strong",{parentName:"a"},"references"))),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"th"},"Event Name")),Object(s.b)("th",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"th"},"Description")))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("a",{parentName:"td",href:"https://api.slack.com/events/app_home_opened"},"app_home_opened")),Object(s.b)("td",{parentName:"tr",align:null},"User clicked into your App Home tab")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("a",{parentName:"td",href:"https://api.slack.com/events/message.channels"},"message.channels")),Object(s.b)("td",{parentName:"tr",align:null},"A message was posted to a channel")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("a",{parentName:"td",href:"https://api.slack.com/events/message.groups"},"message.groups")),Object(s.b)("td",{parentName:"tr",align:null},"A message was posted to a private channel")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("a",{parentName:"td",href:"https://api.slack.com/events/message.im"},"message.im")),Object(s.b)("td",{parentName:"tr",align:null},"A message was posted in a direct message channel")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("a",{parentName:"td",href:"https://api.slack.com/events/message.mpim"},"message.mpim")),Object(s.b)("td",{parentName:"tr",align:null},"A message was posted in a multiparty direct message channel")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 5:")," Goto OAuth & Permission and add the redirect URL: ",Object(s.b)("a",{parentName:"p",href:"https://app.yellowmessenger.com/integrations/oauth/redirect"},"https://app.yellowmessenger.com/integrations/oauth/redirect"),"\nand ",Object(s.b)("strong",{parentName:"p"},"Bot Token Scope")," according to your requirement, ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/scopes"},"Reference")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Some Useful scopes")," are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/channels:history"},Object(s.b)("strong",{parentName:"a"},"channels:history")),"\nView messages and other content in public channels that App has been added"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/chat:write"},Object(s.b)("strong",{parentName:"a"},"chat:write")),"\nSend messages as @yourBot"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/commands"},Object(s.b)("strong",{parentName:"a"},"commands")),"\nAdd shortcuts and/or slash commands that people can use"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/groups:history"},Object(s.b)("strong",{parentName:"a"},"groups:history")),"\nView messages and other content in private channels that App has been added"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/groups:read"},Object(s.b)("strong",{parentName:"a"},"groups:read")),"\nView basic information about private channels that App has been added to"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/im:history"},Object(s.b)("strong",{parentName:"a"},"im:history")),"\nView messages and other content in direct messages that App has been added"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/im:read"},Object(s.b)("strong",{parentName:"a"},"im:read")),"\nView basic information about direct messages that App has been added to"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/incoming-webhook"},Object(s.b)("strong",{parentName:"a"},"incoming-webhook")),"\nPost messages to specific channels in Slack"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/mpim:history"},Object(s.b)("strong",{parentName:"a"},"mpim:history")),"\nView messages and other content in group direct messages that App has been added to"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/mpim:read"},Object(s.b)("strong",{parentName:"a"},"mpim:read")),"\nView basic information about group direct messages that App has been added to"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/team:read"},Object(s.b)("strong",{parentName:"a"},"team:read")),"\nView the name, email domain, and icon for workspaces App is connected to"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/scopes/users:read"},Object(s.b)("strong",{parentName:"a"},"users:read")),"\nView people in a workspace")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/58VZkQR.png",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 6:")," Now goto Interactivity & Shortcuts, enable it and add request URL to:\n",Object(s.b)("a",{parentName:"p",href:"https://app.yellowmessenger.com/integrations/slack/interaction/"},"https://app.yellowmessenger.com/integrations/slack/interaction/"),Object(s.b)("em",{parentName:"p"},"botID")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/5kUTZg4.png",alt:null})),Object(s.b)("h2",{id:"configuration-of-single--multi-workspace"},"Configuration of single / multi-workspace"),Object(s.b)("p",null,"Slack App can be built for both single workspace use cases like building for a particular organisation or can be built for multi-tenant workspaces like building apps for marketplace."),Object(s.b)("h3",{id:"single-workspace"},"Single Workspace:"),Object(s.b)("p",null,"Slack app uses bot access token (xoxb) to communicate with workspace users, ",Object(s.b)("strong",{parentName:"p"},"Bot access token")," is obtained when the slack workspace admin add the app to their workspace."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Steps to configure single workspace:"),"\n",Object(s.b)("strong",{parentName:"p"},"Step 1:")," Goto OAuth & Permissions, Click on the Install App to Workspace"),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/FSROL5t.png",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 2:")," Select a channel, incase you have enabled external incoming webhooks (",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/apps/%5BAPPID%5D/incoming-webhooks"},"https://api.slack.com/apps/[APPID]/incoming-webhooks"),")"),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/KUbz_iS-iAoOOhmVcPAc-eO0JSJIIiyMp6NCh9ez5BLkWCtW2Z-tlwGCCvs1TO_QoGtW59lJSb9OOkYsoe5toOiF5u49h1gPCEfFaTZ6BaXQxDPSApUpxof5eXq2gMH4VUJkMFgQ",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 3:")," After installing the app to workspace, go back to the ",Object(s.b)("strong",{parentName:"p"},"OAuth & Permission")," copy the Bot Access token (xoxb- ) and paste at the Yellow messenger > Channels > Slack > Add the Slack access token > Save."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/H5bSjrK.png",alt:null})),Object(s.b)("h3",{id:"multiple-workspace"},"Multiple Workspace:"),Object(s.b)("p",null,"Slack multi-workspace can be handled using the OAuth token, YM bot will map the bot access token according to the requesting user workspace"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Steps to configure multi workspace"),"\n",Object(s.b)("strong",{parentName:"p"},"Step 1:")," Goto ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/apps/"},"https://api.slack.com/apps/")," > Basic Information on the left panel and copy the Client ID & Client Secret."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/mUMeIHSjnvZG45kYDtSs6I-eFySQnKmsaljmKAJTGiO3nJ_OR88cHHATazCGg11q2ZKaneGkNW-gFmxPvsidPQj_eYvMB7368Jxq8JZ5c7h149-f3Aam1hA0EafAOg8kzLZupEwy",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 2:")," Paste the client ID, Client Secret and scopes (comma separated) in the yellow messenger Slack channel OAuth Tokens"),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/UAsBEeONP3wbUE224ruAto5mYvq13bgc0KJmsCNjJY3-SqmozPvoeD1BeKt-l-8bklw42L4bg0GJUl8l3AeXS-9DtJK9Y5e9vFeY_QEkpxDT1FNVnr7oCx8EmWxZ6FnK2v-ncQCy",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 3:")," For manual / development purposes you can use the ",Object(s.b)("strong",{parentName:"p"},"Connect")," button to connect the slack app to the workspace. For marketplace share following install url to connect the app to their workspaces with YM platform. ",Object(s.b)("a",{parentName:"p",href:"https://app.yellowmessenger.com/integrations/slack/install/"},"https://app.yellowmessenger.com/integrations/slack/install/"),Object(s.b)("em",{parentName:"p"},"botId")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/RzDD6tuFd2n91612443533385.png",alt:null})),Object(s.b)("p",null,"In case of multi workspace bot access token can be obtained using:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"    app.getAccessToken().then(slackTAuth => { app.log(slackTAuth) })\n")),Object(s.b)("h2",{id:"adding-slack-app-to-direct-message--channel"},"Adding Slack app to Direct message / Channel"),Object(s.b)("p",null,"After adding the Slack app to the workspace, you are required to add the app to a group or DM for testing or interacting with the bot."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Adding slack app to DM:"),"\nUse the ",Object(s.b)("strong",{parentName:"p"},"+")," button near ",Object(s.b)("strong",{parentName:"p"},"Apps")," and ",Object(s.b)("strong",{parentName:"p"},"Select the app")," > Add > ",Object(s.b)("strong",{parentName:"p"},"Messages"),"\n, or search the App using the top workspace search."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Adding slack app to Group / Channel:"),"\nGoto Channel details > More > View App in channels\nNow you can add / remove the app to the channel."),Object(s.b)("img",{src:"https://i.imgur.com/T6eaztI.png",alt:"drawing",width:"60%"}),Object(s.b)("img",{src:"https://i.imgur.com/1ZrtMo6.png",alt:"drawing",width:"80%"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Message event format at YM"),"\nTest your bot using ",Object(s.b)("strong",{parentName:"p"},'app.sendTextMessage("Hi")')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"app.log(app.data)\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"DM:")," Bot will reply in 1-1 conversation fashion (no threads will be formed)"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'    {\n            "message": "Hi",\n            "slackChannel": "D01BXXXV4TD",   //D stand for DM channel\n            "userId": "U01B4XXX9A7",         // slack userID of sender\n            "threadTs": "",                  // threadID (not present in DM)\n            "channelType": "im",             //im => DM\n            "eventType": "message"        //event can be from message/button/slash etc\n    }\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Group / Channel :")," Bot will reply in the threads and context will be mentioned within the respective threads only, app.memory will be accessible within the particular thread only.\nGroup : private,\nChannel: public."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'    {\n            "message": "Hi",\n            "slackChannel": "G01CNXXXP7S",   //G stand for group / C stand for channel\n            "userId": "U01B4XXX9A7",           // slack userID of sender\n            "threadTs": "1605XXX466.000200",   // threadID\n            "channelType": "group",            //from group / from channel\n            "eventType": "message"        //event can be from message/button/slash etc\n    }\n')),Object(s.b)("h2",{id:"slack-apis-integration"},"Slack APIs integration"),Object(s.b)("p",null,"The Slack Web API is an interface for querying information from and enacting change in a Slack workspace.\nReference: ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/methods"},"https://api.slack.com/methods")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Api to fetch user info in a workspace.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'    {\n            name: "user_info",\n            type: "GET",\n            encoding: "utf8",\n            url: "https://slack.com/api/users.info",\n            headers: [],\n            params: [{\n                            key: "user",\n                            value: "{{userID}}"\n                    },\n                    {\n                            key: "token",\n                            value: "{{{slacktoken}}}"\n                    }\n            ]\n    }\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Bot access token"),":"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"For single workspace configuration:",Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},"let slackTAuth = app.oauth.mapping.slackAuthToken"))),Object(s.b)("li",{parentName:"ol"},"For multi-workspace configuration:",Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},"app.getAccessToken().then(slackTAuth => { app.log(slackTAuth) })")))),Object(s.b)("h2",{id:"slack-interactive-features"},"Slack Interactive Features"),Object(s.b)("h3",{id:"block-kit"},"Block Kit:"),Object(s.b)("p",null,"Slack has its own way to present messages in interactive fashion using message blocks, ",Object(s.b)("strong",{parentName:"p"},"app.sendTextMessage()")," and ",Object(s.b)("strong",{parentName:"p"},"Quick Replies")," will work on Slack but ",Object(s.b)("strong",{parentName:"p"},"app.sendCards()")," will not work."),Object(s.b)("p",null,"Slack Block Kit gives you a way to create rich, interactive UI for your app. Each block displays or handles information in a different way, and multiple blocks can stack to form:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Message block: ",Object(s.b)("em",{parentName:"p"},"Rich message (styled text, action buttons, drop-downs etc)"),"\n",Object(s.b)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/FXfkmRGsdu6YrEMbLnqzG2Fwt8l_XW5Orl7T9Q4LN2CSfnfJusfml9j-hpJ5T1Q8z_z2sNfOK5pP6bQZ0vHjlV2OkjdHCXoJQfDJMSFfJ549Uu9DTmnC7U_KmWy5J-PN0BlYmo6I",alt:null}))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Attachments: ",Object(s.b)("em",{parentName:"p"},"Similar to Message block, automatic collapse lengthy message with expand button."))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Modals: ",Object(s.b)("em",{parentName:"p"},"Pop-up to allow users to fill a form."))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"App Home: ",Object(s.b)("em",{parentName:"p"},"Layout of home tab of app.")))),Object(s.b)("p",null,"Slack has its own designer to design blocks.\n",Object(s.b)("a",{parentName:"p",href:"https://app.slack.com/block-kit-builder/"},"https://app.slack.com/block-kit-builder/")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Sending message block using YM:"),"\nMessage block allows you to send message as section and actions type"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'    app.sendActions({\n        "blocks": [\n            {\n                "type": "section",\n                "text": {\n                    "type": "plain_text",\n                    "text": "Click below to continue",\n                    "emoji": true\n                }\n            },\n            {\n                "type": "actions",\n                "elements": [\n                    {\n                          "type": "button",\n                          "text": {\n                                "type": "plain_text",\n                                "text": "Continue",\n                                "emoji": true\n                          },\n                          "value": "value123",\n                          "action_id": "action123"\n                    }\n                ]\n            }\n        ]\n    })\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Event receive on button click")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'    app.log(app.data)\n    {\n            "action_id": "action123",\n            "text": {\n                    "type": "plain_text",\n                    "text": "Continue"\n            },\n            "value": "value123",\n            "type": "button",\n            "channelName": "directmessage",\n            "userId": "U01BXXXX9A7",\n    }\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Sending message attachments using YM:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'    app.sendActions({"attachments": [{"blocks": [ \u2026 ]}]})\n')),Object(s.b)("p",null,"Button click event will be the same as the message block case."),Object(s.b)("h3",{id:"modals"},"Modals:"),Object(s.b)("p",null,"Modals provide focused spaces ideal for requesting and collecting data from users, or temporarily displaying dynamic and interactive information."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/X5rzc67VwGFE1612443582779.png",alt:null})),Object(s.b)("p",null,"Each modal consists of some standardized UI elements \u2014 a title, an ",Object(s.b)("em",{parentName:"p"},"x")," button to dismiss the modal, a ",Object(s.b)("em",{parentName:"p"},"cancel")," button \u2014 that wrap around a fully-customizable space \u2014 the modal's ",Object(s.b)("strong",{parentName:"p"},"view"),".\nReference: ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/surfaces/modals/using"},"https://api.slack.com/surfaces/modals/using")),Object(s.b)("p",null,"This interaction happened ",Object(s.b)("strong",{parentName:"p"},"only using button")," which is capable of creating trigger_id, trigger_id is handled automatically in backend of YM, the app is sent a payload containing a special trigger_id.\nModals can be designed using ",Object(s.b)("a",{parentName:"p",href:"https://app.slack.com/block-kit-builder/"},"block-kit-builder"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Sending modals using YM")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'    //After receiving event of button click action\n    app.sendModal({\n            "type": "modal",\n            "submit": {...},\n            "private_metadata": JSON.stringify(metadata), //sending private data / IDs .\n            "close": {..},\n            "title": {...},\n            "blocks": [\n                  {\n                        "type": "input",\n                                    "block_id": "block123",\n                        "label": {\n                                "type": "plain_text",\n                                "text": "Anything else you want to tell us?",\n                        },\n                        "element": {\n                                "type": "plain_text_input",\n                                "multiline": true\n                        },\n                        "action_id": "action123",\n                        "optional": true\n                  },\n                  {\n                        "type": "divider"\n                  }\n          ]\n    })\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Event receive at YM after submission")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'    app.log(app.data)\n    {\n      "userId": "U01B4XXX9A7",\n        "event": {\n            "code": "view_submission",\n            "data": {\n                  "id": "V01XXXUSHF",\n                  "team_id": "T01AxXXA9T8",\n                  "type": "modal",\n                  "blocks": [...],\n                  "private_metadata": "{\\"action\\":\\"generateTicket\\"}",\n                  "state": {\n                        "values": {\n                              "block123": {               //unique block id\n                                    "action123": {        //unique action id\n                                            "type": "plain_text_input",\n                                            "value": "pc is not working"\n                                    }\n                              },\n                              "blockO123": {                //in case of drop-down\n                                    "actionO123": {\n                                            "type": "static_select",\n                                            "selected_option": {\n                                                    "text": {..},\n                                                    "value": "2"\n                                            }\n                                    }\n                                }\n                          }\n                    }\n          }\n    }}\n')),Object(s.b)("h3",{id:"slash-commands--shortcuts"},"Slash Commands / Shortcuts:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Slash Commands"),"\nIt allows users to invoke your app by typing a string into the message composer box. Slash commands are not sent as a message but as a command to the bot."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"E.g:  /channel invite @bob to #tech\nReference: ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/interactivity/slash-commands"},"https://api.slack.com/interactivity/slash-commands"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Steps to add slash command")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 1:")," Goto ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/apps/"},"https://api.slack.com/apps/")," > Select you App > Select the Slash Commands in left panel > Create New Command"),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/gi8aCuibqASoTUbFB1dd7PC8bCG2CBoLJH6MFrbR5l5qsiGIhoua0Y6Wie-_cKslKX9i-Py22thk29gAwfkTPqeJXZLjrdRsLayEnQNSMtpyzl7Ynmutn8-e_R618-nBFpfjpXmU",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 2:")," Fill the command, Description and add Request URL > SAVE\nRequest URL: ",Object(s.b)("a",{parentName:"p",href:"https://app.yellowmessenger.com/integrations/slack/shortcuts/"},"https://app.yellowmessenger.com/integrations/slack/shortcuts/"),Object(s.b)("em",{parentName:"p"},"botID")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/O57LXorBBGZWnF32lB6U6uENu04wrUSe3kZQqxxADFVu3m7nVh9tcpXppvxGWULD-NVFez-F3ZIYxLFrEdhRuW-At8icKcz41_s8JGKSmLhw3zE5yNPmSGpr37j7hkgLbACPCqde",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Event receive at YM for slash command")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'    app.log(app.data)\n    {\n            "event": {\n                    "code": "slack-shortcuts",\n                    "data": {\n                            "command": "/raiseticket",\n                            "text": "pc is not working",\n                            "message": "pc is not working",\n                            "userId": "U01BXXX9A7"\n                    }\n            }\n    }\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Shortcuts"),":\nSimilar to Slash command to send command to the bot. Shortcut can be initiated from the shortcuts button in the message composer, or from within search.\nReference: ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/interactivity/shortcuts/using"},"https://api.slack.com/interactivity/shortcuts/using")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/SgELjOml-tWwUISj_4l2BBGa5BFcQX7jL4K9tUWKhjNvkvoMbxUjdXo8PNUuGcMojKWg22DMGXi-e78CiQbHQzAuk06DNrErjeD9AyFGOX2va2w8EbVMII_VurHPSQ2joJwZezZJ",alt:null})),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/EPN8qw2bpO0fUxEeCU4jnYMAYBnOvosOhI2AEx8AWECYJJq26hBRCx06iJI2XYfM9Y7IFEoeR-IZ7OWjEHTPVeCTTT5X7KWpboHXcFvqEFuOoVHr0BJwZJ1JBQZ63JIsyssPusYY",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Steps to add shortcuts:")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Goto api.slack.com > Interactivity & Shortcuts  > Create new Shortcut")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/6TM9JIHMdGtnkqB6V15GefpEWD1QYGYWs4eI-TXfjlxPZav7Jeo0qkx3jE3ilVqvlfROczHYPDOOum_gdDvmWgO2u3JL0PlLbNh2UlTy_kdoZHcex6GU2ga30zxHJOS5khkUs8uP",alt:null})),Object(s.b)("h3",{id:"ephemeral-message--only-visible-to-you-"},"Ephemeral Message ( only visible to you )"),Object(s.b)("p",null,"This method posts an ephemeral message, which is visible only to the assigned user in a specific public channel, private channel, or private conversation.\nReference: ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/methods/chat.postEphemeral"},"https://api.slack.com/methods/chat.postEphemeral")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/oEopkGDAjf_o-JB9GynKO8Og5LB89LVamBGDUWS7gHzZLelR8B2waipmrD4GxSOnTugdPO7APQStqhpw_mjLJrP4l2UpmvgUpnp-_BAB392zcvohqPgvWW5LX7MrKxFVZJ2wWLpv",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Sending ephemeral messages:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"app.sendActions(blocks, { ephemeral: true })\napp.sendTextMessage(msg, { ephemeral: true })\napp.sendQuickReplies(payload, { ephemeral: true })\n")),Object(s.b)("h2",{id:"initiate-direct-message"},"Initiate Direct Message:"),Object(s.b)("p",null,"This method can be used by bot to initiate a DM with the user.\nExample:"),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/QV-fgScM-v0D7ykJlG0J2HxnUl1MNH5bvUbRT6RS2UtIFhxF6Q5SNSpFBcBTUxUfgZy8kyo8mHKkdTLetmxX5kgtotp-UCd9oR0zs0WWtLMjHVZUj9gh9JDhj-pBHEduvlnKyWog",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Sending DM to user")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"//For same user\napp.switchToPrivateChannel().then(() => { app.sendTextMessage(payload) }\n\n//For any user using userChannelID\napp.sendActions(payload, { senderId: userChannelID })\napp.sendTextMessage(payload, { senderId: userChannelID })\napp.sendQuickReplies(payload, { senderId: userChannelID })\n")),Object(s.b)("h3",{id:"app-home-tab"},"App Home Tab"),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/jyt3kT4xuVoebZkYh9KAOFl42p0fbAf1xNcxJ9i1QghQ95FcHeq6hZzl1QsUt29G_K8xWoxN0b2uMkN7py5bApOtcqDqJNx329_YV6m3plpiqEgWMtnwooFSAt5nQSfqSaAr6OTD",alt:null})),Object(s.b)("p",null,"App home tab content is also generated using the block kit payload."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step to add home tab:")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 1:")," Goto ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/apps/"},"https://api.slack.com/apps/")," > Select your App > App Home in left panel > Enable Home tab"),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/2JoaZhv0alUAnpwW2WzbMzoMSl1Bnnw89QmnJKw40JneRUnmdVKI056rpAnIo_ElKSE1J0srbdo8-A6pded5dMUQwIjFNbHmOz6--5nx266qqa7PQ3YX1CCOQ04VCEeyy4ZvDBlm",alt:null})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 2:")," add ",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/events/app_home_opened"},"app_home_opened")," event in the ",Object(s.b)("strong",{parentName:"p"},"Event subscription")," (Follow Create new app > Step 4)"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 3:"),' Click on the Home tab of your app, event received will be:\napp.data.eventType : "app_home_opened"'),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Step 4:")," After receiving the app_home_opened event you can respond using the following api:\n",Object(s.b)("a",{parentName:"p",href:"https://api.slack.com/methods/views.publish"},"https://api.slack.com/methods/views.publish")," with view type : \u201chome\u201d."),Object(s.b)("h2",{id:"references"},"References"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/start"},"Getting start with Slack app")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/methods/"},"Slack Apis")),Object(s.b)("li",{parentName:"ol"},"Interaction:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/start/planning/guidelines"},"Guidelines")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/methods/"},"Methods")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/surfaces/"},"Interactive components")))),Object(s.b)("li",{parentName:"ol"},"Designing:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://api.slack.com/start/designing/guidelines"},"Guidlines")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://app.slack.com/block-kit-builder/"},"Block Kit Builder"))))),Object(s.b)("p",null,"Explore different apps on slack to better understand flow and interacting components usage.\n",Object(s.b)("a",{parentName:"p",href:"https://app.slack.com/block-kit-builder/"})))}b.isMDXComponent=!0},365:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),c=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),i=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},b=function(e){var t=i(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),b=i(a),u=n,h=b["".concat(o,".").concat(u)]||b[u]||m[u]||s;return a?c.a.createElement(h,p(p({ref:t},l),{},{components:a})):c.a.createElement(h,p({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<s;l++)o[l]=a[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
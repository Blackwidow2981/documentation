---
title: Nodes Overview
sidebar_label: Overview
---

Nodes are the building blocks of a [Flow/Journeys](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys).  

## 1. Types 

Nodes are classified into the following types: 
1. **Prompts**: Prompts can be used when the bot expects a user response to the posed question. Click here to learn more. 
 
2. **Messages**: Messages can be used when the bot has to display information to the user without expecting any response. Click here to learn more. 

3. **Action**: Actions are non-interactive nodes that can be used to perform a specific task. Click here to learn more. 

4. **Logic**: Logic nodes can be used when the flow must be branched based on the given conditions. Click here to learn more. 

After clicking +Create flow, you will be directed to a canvas with a start node from where you will have the flexibility to design a flow.


![](https://i.imgur.com/uKrEbNH.jpg)


## 2. Add Nodes

Nodes can be added to this start node in two different ways:

1. Click on the black dot in the center of a node.


![](https://i.imgur.com/04ar7yF.jpg)


2. Click on any 4 of the icons on the left which represent each category of nodes.

![](https://i.imgur.com/vFdHzKo.png)


### Build a Flow 

A flow is usually built using a series of smaller nodes. Each flow must have a minimum of two nodes configured.

* **Start Trigger**: First node must always be a trigger (click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys) to learn more). You can configure how to trigger this flow. That is, by means of Intents, Entities, URL Events, or other flows.
* Add any of the following nodes one by one to continue this flow with a logic. 
    * **Prompts**: These nodes expect user inputs- when the input is invalid, fallback messages are displayed. They are interactive/conversational nodes.
    * **Messages**: Use these nodes to display messages, files, images etc. 
    * **Actions**: Background action like Database Insert, Search, or executing an API are performed with these nodes.
    * **Logic**: Conditional branching nodes.

* Connect all the nodes to complete the flow. Test it on the bot. 

## 3. Configure Display

This option is available for all the nodes that display some information on the bot. For example name node, text node, video node etc. It is used to configure how the information must be produced on different platforms like Website, Alexa, Google Assistant, Voice etc.

* Click the tools(channel option) symbol available below the node name.  

![](https://i.imgur.com/EFZSXmG.png)

* Multiple channel options are available for each type of node. 

![](https://i.imgur.com/X5unpvO.png)

* Few commonly used configurations are listed below.  

### General- Web

* **Hide Input** - User input wont be displayed on the bot.
* **Hide Home Button** - When this node is executed, user will not be able to click on the home button to restart the flow. 
* **Sensitive information** - Can be used to hide passwords and other personal information from being displayed. 
* **Button Auto Width** - For Quick replies and multi select, buttons can be configured.
* **Enable Multiple Files** - This is used for file-related nodes, which gives the user permission to add more than one file at once.

Enable these options to improve the video viewing experience. 
* **Thumbnail** - This is the image that will be displayed when the video is not being played. 
* **Autoplay** - Video will play automatically.
* **Show controls** - Controls such as Play/Pause, Forward etc will be displayed.
* **Downloadable** - Displayed video can be downloaded to the local system.
* **Muted** - Mute the audio until user unmutes it. 
* **Loop** - To play the video again once it stops.

### Voice

This is configured for voice bots. Basically, you can modify voice related features like the speed, delay, forward chat to etc. 

### Google Assistant 

* **End Session** - Bot session on google assistant comes to an end when this node is reached.

### Alexa 

* **End Session** - Bot session on alexa comes to an end when this node is reached.


-----

**What Next?**

Learn more about the types of nodes in the further sections.
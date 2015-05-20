---
layout: post
title:  "Speak the Language"
date:   2015-05-16 21:47:40
categories: strategy
permalink: /:categories/:title.html
intro: Information architecture is… art and science. It lives in your applications in the form of navigations, labels, metadata, search algorithms, everything that has words in it. I was inspired by the holistic approach of ethnosemantics and wanted to write an article about it.
---

### What problem are we solving?
-  You are designing or building an app for a group of people you don’t identify yourself with (be honest, it is most likely true)
-  You want to innovate discovery within your application

### How can ethnosemantics help design better interfaces?
I don’t think anyone would argue with me on that the interface should speak the language of your users. The use of language is a learned and shared behavior, thus it’s unique to each cultural group. If you think about your users as a cultural group (“single parents”, “nurses”, “urban dog owners”, etc.), your goal is to learn their language.

Ethnosemantics is a branch of Anthropology that offers a great body or research and methods to understand how people use language and relate different concepts. Traditionally, it is used by anthropologists to study cultural groups, but the same research techniques can be used to understand users of your application or website.

<p class="important">Ethnosemantics offers a great body or research and methods to understand how people use language and relate different concepts.</p>

This article was greatly inspired by the work of anthropologists Spradley and McCurdy. They have developed a systematic approach of discovering, systematizing and understanding taxonomies (or “folk terms”, whatever people call things).

### Discover
The first discovery stage is mostly _interviewing_ your users (not talking to). It is not specific to learning the language, but something that could greatly improve your user experience in general. This empathetic step will help you understand people you are building the product for on a different level. Not just numbers and statistics, but who they _really_ are. This is a half-an-hour technique inspired by anthropologic methods. You should give it a try.

1. Start with a **Grand Tour**. It is a good way to find topics you might be interested in. Ask questions like “Could you describe what a day of a single dad looks like?”, “Could you describe the hospital you are working at”. The goal is to get a general vocabulary set for a place or action.
2. When you hear an interesting word or interesting action the user describes try a **Mini Tour**. It is targeted on a specific term, usually an action and uses questions like “Could you describe [action]?”
3. When you are interested in a very specific task your user has (like “find a babysitter”, “take a selfie”, “connect with grandparents”) try **Story Questions**. This tactic explores actual and often recent event with a question like “What was the last time you [task]?”
4. Use **Native Language questions** when it is crucial to find that right word for your interface. You need to check if the term is actually used within a user group, or the person is just using it for the interview. Try repeating the term you’ve heard to get more information about it or ask if that is how the informant uses it with his or her peers.

The purpose of these interviews is to get a large amount of unstructured data. You can extract specific to the user terminology from it. You are looking for the terms specific to the domain of your product or terms related to the tasks users would be performing within your app. The terminology could be divided in verbs, nouns, and phrases.

<p class="important">Interviewing is not specific to learning the language, but something that could greatly improve the user experience of your product in general.</p>

In my experience, the best way to do so is to use a tool like Evernote, so you can record the conversation and write down timestamps at the same time. It is most likely there won’t be time to write notes on the entire conversation, but you can simply jot down the time on the recorder when something interesting happens, and can come back to it later and listen again.

<div class="figure-container">
<figure class="figure-2-centered">
  <img src="{{ '/assets/images/speak-the-language-acorns.jpg' | prepend: site.baseurl }}" alt="acorns app">
  <figcaption>Acorns</figcaption>
</figure>
</div>

Let’s take Acorns app as an example. It allows users to invest their change from purchases (_Disclaimer: I don’t know what research the creators of Acorn conducted or what they’ve based their design decision on. I am just using their app as an example for potential research_). The designers used terms like “government bonds”, “large cap”, “small cap”, “diversified portfolio”. The app is targeting people who have little investment experience and wouldn't mind to start with something small like change. The user research could define what language these people use when it comes to finances use or what domain knowledge they have.

### Taxonomic Structure
The purpose of identifying the taxonomic structure is to understand how your users relate concepts to each other. Taxonomic structures are especially important when designing navigation, indexes, or search algorithms. Take a look at these examples of taxonomies in practice.

<div class="figure-container">
<figure class="figure-3">
  <img src="{{ '/assets/images/speak-the-language-uo.jpg' | prepend: site.baseurl }}" alt="semantic relationships">
  <figcaption>Urban Outfitters</figcaption>
</figure>

<figure class="figure-3">
  <img src="{{ '/assets/images/speak-the-language-spotify.jpg' | prepend: site.baseurl }}" alt="semantic relationships">
  <figcaption>Spotify</figcaption>
</figure>
<figure class="figure-3">
  <img src="{{ '/assets/images/speak-the-language-yelp.jpg' | prepend: site.baseurl }}" alt="semantic relationships">
  <figcaption>Yelp</figcaption>
</figure>

</div>

These are three very different apps using taxonomies for their navigation. Well-designed navigation helps users find the right bit of information fast and with fewer steps. The relationship between the label terms could be **hierarchical** (“dresses” and “casual”), **associative** (music that associates with “work-out”), **means-end** (“delivery” is a way to “get food”), or other. The appropriate taxonomy depends on the goals of the design.

This is where you can improve and innovate discoverability. Working with the data you got from your users can help you find better label terms (“bottoms” vs. “pants”) or relationships (“BB creams” is not only subset of “makeup”, but also “skincare”). Taxonomic structure largely depends on semantic relationships between terms, and there are many different ways to structure them. These are two different approaches.

<figure>
  <img src="{{ '/assets/images/speak-the-language-1.png' | prepend: site.baseurl }}" alt="semantic relationships">
  <figcaption>Taxonomic structures used in athropology (Spradley &amp; McCurdy)</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/images/speak-the-language-2.png' | prepend: site.baseurl }}" alt="semantic relationships">
  <figcaption>Taxonomic structures in thesauri</figcaption>
</figure>

 The first method is used in anthropology to study “folk terms”. The second one is used in information science to create controlled vocabularies, indexes, etc. These are tools you can use to analize an excisting information architecture, or mix-and-match different semantic relationships to innovate discoverability. There is no perfect formula. After all, Information Architecture is part art.


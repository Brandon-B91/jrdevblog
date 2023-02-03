---
title: "Snipcart and gatsby part 1"
date: 2021-8-6 14:20:00
author: "Brandon Brown"
image: '../../images/images-front/gatsby-netlify-ecommerce.png'
tags:
  - gatsby
  - snipcart
  - ecommerce
  - netlify
---

# Intergrating Snipcart with Gatsby 

Recently I've been working on a personal project, a small ecommerce site that I will be using for a business I"m starting if you'd like to check that out. **[Here](https://inkdera.com)**

I'd like to talk about my experiences in building my ecommerce site with Gatsbyjs then using snipcart to handle the "payment gateway" and finally hosting it all on Netlify.

## Gatsbyjs

First off this site was actually built on Gatsbyjs so let's talk about Gatsbyjs and what it is if you'd like to read the official documentation of what it is **[click here](https://gatsbyjs.com)** for my very quick over view of it. Gatsbyjs is a SSG s(tatic site generator) that runs on ReactJs and Graphql which is a query langague. 

## Snipcart

The next good question is going to be what is Snipcart? Again if you'd like to read the official documentation on that **[click here](https://snipcart.com)** for my quick overview on it snipcart is javascript which allows you to add certain parameters something like this.

```js
<button class="snipcart-add-item"
  data-item-id="starry-night"
  data-item-price="79.99"
  data-item-url="/paintings/starry-night"
  data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
  data-item-image="/assets/images/starry-night.jpg"
  data-item-name="The Starry Night"
  data-item-custom1-name="Frame color"
  data-item-custom1-options="Black|Brown|Gold">
  Add to cart
</button>
```

As you can see here there is a button which has the class of snipcart-add-item after that you define some customer attributes in the actual button and this is where the magic happens you can see in the example above we can define the price, the url, the image, and even some "custom fields" that you can relly customize even more.

all this happens by adding some small code blocks to your site like anything else some CSS and JS files.

Well it all sound pretty simple right? Sure it does! it's supposed to be easy. Before we get into this which is the main topic of this article let's talk about hosting.

## Netlify

Hosting for this project was handled through Netlify if you want to visit their site **[click here](https://netlify.com)** I used Netlify because of course they are very affordable (I mean free of course!) Also their integratiion with Github makes life easier. Whenever I push changes from Vscode to Github, Netlify will automatically pick this up and then deploy the changes automatically. 

So why am I do this post, Well documentation on snipcart is very good if you're using it with vanilla javascript. However using it with gatsby I found a few things that took some tinkering to figure out. it could have made my life a little bit easier so as we go through this I will point out the build I'm using and the versions of every package. 

## Overview

Let's get right into it then. Overall I had a great experience with this triple threat of technology. I guess the buzzword for this type of thing now is "jamstack" but I'll leave that up to you to decide.

This is where I'm kicking myself a bit, I should have kept a live documentation of this process as I went through it to make sure that I camptured all the issues accurately. Sadly I didn't so this will be a recount of what I remmeber as i went through this, I've been working on this site on my free time and after work or on weekends for the past few months. 

I'm going to start with one of the issues I remmeber the most because when I figured out what was wrong and how to fix the issue it was quite simple and I was little frustrated at how simple the solution was. I have a template page in the src of my project the main purpose of this is when a product is shown and clicked on you are taken to a new page which has all the details and info that is pulled from the markdown using graphql. Why does this matter well typically in Gatbyjs when pulling let's say an image from the markdown file you would doe somthhing like this. 

```
<GatsbyImage 
class="image-top"
src={post.frontmatter.image}
"other props here"
/>
```

Now this is pretty straight forward GatsbyImage is the pliugin we are using to display "dynamic images" class is applying a class for styling. Now "src" is the magic here of course src means source the "post.frontmatter.image" is to put simply pointing to the source of the image which is located in the markdown file. I'm not going into all of that.

The issue I was getting here is I have my site and markdown files set up so that they will pull more than one image from the markdown file and create a slideshow to show off the product in more than one way. So when I was creating some social share links the facebook share was alwasy selecting the last image in the slideshow. Wellllll... Clearly this is an issue because it doesn't show the image I want, Secondly with twitter nothing at all was being shown for the image, So the card appeared and the title of the item and the description but no image. Why is that? I'm going to be honset I don't know the exact reason for this however I have an idea and I will try to explain.

Gatsbyjs offers some nifty little tools like getimage() and getSrc(), I'm sure by now you can see where this is going... Yeah I had to switch out the call I was using getImage() for getSrc(), this actually solved the issue for both the facebook and twitter social share buttons. I think this was happening due to the way their "share" features pull the informations from what was sent to it.

Anyways this is the first part of this and a bit long. I will update a part 2 soo on some of the small things I had an issue with. 

*If you'd like to join the community and make your own posts on here and share your experiences Reach to me VIA social media or Email and I'd be more than happy to feature your writings!*







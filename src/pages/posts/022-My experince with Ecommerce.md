---
title: "My experience with building my own ecommerce site"
date: 2021-7-29 14:20:00
author: "Brandon Brown"
image: '../../images/images-front/ecommerce.jpeg'
tags:
  - Ecommerce
  - Snipcart
  - Gatsby
  - web
---

# My experience with building my own ecommerce site.

Well this might be similar to the last post I made "snipcart" However that post was about the nuissances and the little quirks of working with snipcart in GatsbyJs. This post I feel is more going to be about my experience in building and managing my own Ecommerce site. This will be based solely on what it was like building an ecommerce site implementing the features and setting up what tools would be most useful.

## Production tools

I decided to go with GatsbyJs for security reasons of course store information in the .md files does make it a bit more secure in my opinion nad also helps with production and build times.

Along with GatsbyJs I'm using snipcart for the payment gateway. You can **[read more here](https://snipcart.com)**, why? Well because it runs on Javascript which is primaly what I work with anyways so the learning curve albeit was there, it was just not nearly as massive as it could have been. Which, hey! There is nothing wrong with learning but you can't take on too much at once without either burning out, or not retaining enough information and neither one of those are good, since they are just a waste of time. 

Building an ecommerce site the idea was fun but daunting there can be so much invovled in this and it can really be a headache and quite scary, after all you are dealing with people credit / debit cards and their money. Starting off I had a clear vision of how I wanted things to look and I started to get to to work, building everything with Gatsby so it will funciton properly installing plugins, setting up google analytics, creating a mailchimp account to handle the email marketing. Okay great! now what? well, let's build some products and figure out how we want those to look and how they will be displayed. We are going to have mens and womens tshirs and tank tops and some "accessories".

Great we got all of that out of the way. wait a minute I have duplicate items showing up because it shows all the items for list in a long line. Welllllll. That's not good. So how do I fix it? I know! Maybe it's not the most practical solution but I can set a Parameter in the GraphQl query to pull the items I want! Let's do that! Awesome, well no it's just a long list of items. I wouldn't want to scrol lthrough this long list. I'm sure now one else will not to mention it can't be good for perfomance. 

I know that was a bit jumbled just how my thought process went over the course of a few days while I was working on this in my spare time. 

1. layout, done.
2. products displaying? Done.
3. individual pages to show all items? Done.
4. email marketing sign up is working? Done!

I think we are good to go let's launch it now and make changes as needed going forward. pushed everything to live server awesome the website is working!!!! How exciting! I can go sit down and eat dinner my night is over... Or so I thought a few emails roll in after a couple hours of letting everyone know it is live. Email one "Hey! I'm trying to place an order and my credit card is being declined. I know my card is good I used it earlier today. "

Oh no... Something is wrong, well maybe not it could have been that persons card, right? I'll try my own and see what happens. Mine is being declined, no worries I'll try another one, That one declined as well.... Uh oh. why???

I start trouble shooting right away to figure out whats happening, first thing I do it go straight to my snipcart dashboard and look at the api keys to make sure they are correct and sure enough I'm using the live api key and it is in the proper place in the gatsby.config file.. So now what?

well by this point it's pretty late around 2am and I have a full workday that morning. Time to sleep, I reach out to snipcarts support team and let them know the issue. after some back and forth they advise i'm using the test api key and not the live. Am i going crazy? I go back and look in the dashboard and it's the live key same thing that is in my gatsby.config file.... So what is wrong??? 

Well not to bore too much for Whatever reason when I was pushing my site updates to github and netlify was auto publishing them they key was not updating but other changes were updating? Yeah not really sure what happened there so I ended up completely removing my site from netlify, then re adding the github repo and it fixed the issue.

A bit long winded on this one so I will be splitting it into two parts. 

*If you'd like to join the community and make your own posts on here and share your experiences Reach to me VIA social media or Email and I'd be more than happy to feature your writings!*





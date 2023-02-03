---
title: "Add to favorties using local storage"
date: 2022-04-23 12:40:00
author: "Brandon Brown"
image: '../../images/images-front/localstorage.jpeg'
tags:
   - javascript
   - React
   - html5
   - local Storage
---

# How I created an add to favorite using only local storage

First off I thinkg we should talk about local storage what it is and how it works. 

To put it simply, local storage uses the browser to store information in a 'key', 'value' pair. So what does this mean well let's use an example of how it looks to set an item in localStorage.

```
localStorage.setItem(key, 'value');

```

Alright not so bad right? it's simple we have our 'key which is what we use to call the value that is stored.

So how do we access this now that it is stored? Take a look below by calling it inside a console.log just to see the result.

```
console.log(localStorage.getItem(key));
```

This will log 'value' into the console since that is the value we associated with our 'key'.

Well all this seems pretty simple right? Sure it does, save something into localStorage then go to another page or where you want it to be stored and bam we have an add to favorites right? Well... This is where things can get a little complicated. Here's why... I used this in a Pwa I created that lets you browse random movies and see where you watch them or search for a specific movie and see where to watch it as well (this also works for TV shows as well.) So as you can imagine in the "Favorites section" we are going to want to show an image of the title the name and I chose even to add the description. 

Let's take a look at how this is an issue.. I was using react so if we created a simple add to favorites function which was added onClick. 

***I'm going to  assume some working knowledge of React for the purpose of keeping this tutorial focused solely on local storage***

well that's great but based on what we have seen already if we just added in something like 

```
const onClick = () => {
    localStorage.setItem(name, 'title')
}
```

very basic right? Well the problem liese in the key, value pair... Anytime we try to add a new movie or tv show the same function is called which is going to say okay the value of 'name' (our key) is now set to the title of this new movie or tv show, but why? Well the function is just running one **setItem** and using the same key, so how do we get around this?

This is where things get a bit intersting so I'll show my entire solution and then break it down. (Also big shoutout to ***[Stackoverflow](https://stackoverflow.com)*** for the help figuring this out!)

```
     if (
        localStorage.getItem("arrObject") &&
        localStorage.getItem("arrObject").length > 0
      )
        arrObject = JSON.parse(localStorage.getItem("arrObject"));
      let arrObj = {
        name: res.title,
        id: res.id,
        img: res.poster_path,
        overview: res.overview,
      };
      arrObject.push(arrObj);
      localStorage.setItem("arrObject", JSON.stringify(arrObject));

```

It looks complicated but in software what we need to do is brek things down into smaller bits so it makes more sense.

```
   if (
        localStorage.getItem("arrObject") &&
        localStorage.getItem("arrObject").length > 0
      )
```
What we are doing here is saying **if** there is no object saved in local storage already then create it.

```
        arrObject = JSON.parse(localStorage.getItem("arrObject"));

```

here we are getting the "object" ***[See here to learn about OBJECTS ](https://www.javascripttutorial.net/javascript-objects/#:~:text=In%20JavaScript%2C%20an%20object%20is,array%2C%20and%20even%20a%20function.)*** we are going to be creating to store our info and then using the "JSON.parse" what this is doing is converting the "JSON string" into a javascript object.

```
    let arrObj = {
        name: res.title,
        id: res.id,
        img: res.poster_path,
        overview: res.overview,
      };
```

In this piece of code we are creating the object and assigning it the keys name, id, img, overview. and then giving them values. I was using an API in order to get the info needed (You can **[Click here ](https://www.jrdevsblog.com/fetch-apis-and-vanilla-js/)** to learn more about Apis) Which is why you see the res.title which is just me calling the result of the api query and the title associated with that result which i cleverly named res. 

The next part is the interesting part.

```
      arrObject.push(arrObj);
      localStorage.setItem("arrObject", JSON.stringify(arrObject));
```

In this section we used the .push method which is us now saying after everything has been done **DON'T** override the existing information just add to it. Finally we are saying set the object in localStorage to **"arrOBject"** and then the value to the actual object of arrObject as a string which is the **JSON.stringify() method.

That is where we will end this tutroial in part 2 we are going to show how to map through the information and then display it to the page. 

*If you'd like to join the community and make your own posts on here and share your experiences Reach to me VIA social media or Email and I'd be more than happy to feature your writings!* 
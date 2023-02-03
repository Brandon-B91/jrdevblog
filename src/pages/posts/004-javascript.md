---
title: "Javascript"
date: 2021-2-21 19:15:00
author: "Brandon Brown"
image: '../../images/images-front/jslogo.png'
tags:
  - web
  - javascript
  - reference
---

# Javascript 

What is javascript, well this is a recurring metaphor so let's go back to the house metaphor so to backtrack the html is the structure the roof, walls and floor. The css is the paint and the color of the carpet and drapes. So then Javascript is like the AC, why? because it's what makes it cool!

Yeah, yeah I know That was some terrible humor but I think it is kinda fitting, right? well lets now get into and take a very bas look at javascript.. Don't worry we get into it a whole lot more later for now we will keep it basic.

So let's start at the very begining. we will declarea variable. First off what is a variable well a variable is mainly used to store information like a string or a number and more. Don't worry we will get into that later as well.

So let's get to it.

```js
    var myVar = 3;
    we can also use the console.log(myVar) 
    here we can check the console by logging 
    our "var" that we defined as "myVar" to it.
    when we check the consle it will show 3
```

![michael scott from the office saying I decalre variable](../../images/images-md/var.webp)

So that is easy enough right? What we need to talk about now is ecmascript or es6 what is this? well ecmascript is the official name for "javascript" so es6 is the 6th interation of it and brought in a whole lot of new changes

Now in es6 we have a new way to define a variable.
remmeber back to myVar? and how we decalred that with var? Well look at the example below to see how we can do it with es6.

```js
    // we have two ways of doing this now.
    let myVar = 3;
    or
    const myVar = 3; 
```

In the example above we just did the same thing but using two different words. "let" and "const". To keep it basic. "let" is a variable that can be changed. See below.

```js
    let myVar = 3;
    myVar + 3;
    console.log(myVar) this will result in
    the console showing 6;
```

Now the same thing instead using "const".

```js
    const myVar = 3;
    myVar + 3;
    console.log(myVar)
```

This will result in an error since a "const" short for "constant" cannot be changed in this. So we want to use this in situations where the data will not changed later on.

To summarize, javascript can be a lot of fun and adds functionality to the website, we did take a brief look at how to declare variables and the different ways this can be handled. We will take a deeper looking into this later.

*If you'd like to join the community and make your own posts on here and share your experiences Reach to me VIA social media or Email and I'd be more than happy to feature your writings!*






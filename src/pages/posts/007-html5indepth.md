---
title: "Html5 in depth"
date: 2021-2-28 12:07:00
author: "Brandon Brown"
image: '../../images/images-front/indepthhtml.png'
tags:
  - html
  - reference
  - project
---

So now, I think it is time we actually get into doing some actual work and taking a look ai the different components of building the web.  

Thank you for keeping up with here I know there was a lot of light introductions to the site and how I came to be and some very basics of the web and the technologies so today I'd like to start breaking things down into tangeable useable bits of information.  

Let's talk about HTML5

```html
<!DOCTYPE html>
  <head>
    <title>My Project</title>
    <link rel="icon" type="image/x-icon" href="./assets/favicon.ico" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body>
      
  </body>
</html>
```

In the code above is a basic html5 skeleton. Let's go ahead and break down what exactly we see here and whats going on.  

Also feel free to copy the code and work along we are going to make a small project by the time we are done here that will utilize HTML5 Css3 and vanilla js.  

First off let's talk about writing comments in html5 they look like this open with 
```html
<!--  anything between these brackets will not be rendered as html -->
```  

```html
<!-- first off is the DOCTYPE html which tells the browser what this doucment type is and how to handle it -->
<!DOCTYPE html>
  <head>  <--  this is the head in here will sit your title as well as other important information.
    <title>My Project</title> <-- this is what shows in the tab when you have your site open.
    <link rel="icon" type="image/x-icon" href="./assets/favicon.ico" /> <-- See the "link" tag here this is used in the head and brings in other files like css.
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" /> <-- this is what enables your site to be responsive. Without this your media queries wont work. (we'll get into those later)
    <link rel="stylesheet" href="css/main.css"> <-- Here you can see the css file being "linked" (we will talk about bringing that in when we get)
  </head> 
  <body>
      <!--Here is where the actual content of your website will be so headers, images, information, links to other sites. and so. -->
  </body>
</html>
```

Well there is a alot going on in the section above. and the comments are a little crazy but you can see the head houses a lot of crucial information. 
also if you're using VSCode for writing your code which is what I'm using. There is a useful extention called "html skeleton" which will generate all this for you to speed up development.  

Now let's talk about the body section this is where you will put your header tags, images, the actual info you see on th website all falls under the body section.  

Let's take a look at the this code now.

```html
    <!DOCTYPE html>
  <head>
    <title>My Project</title>
    <link rel="icon" type="image/x-icon" href="./assets/favicon.ico" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body>
      <Header>
          <nav>
              <ul>
                  <li>Home</li>
                  <li>Gattery</li>
                  <li>Contact US</li>
              </ul>
          </nav>
      </Header>
      <section class="main">
          <h1>
              Hello World
          </h1>
      </section>
  </body>
</html>

```

You can see we've added a few things to this site now. A header, a nav (short for navigation), an unordered list which is the "ul", and then list items or "li" which are the actual items in the unordered list.  

We have the "section" with a class of main and an h1 tag in there that says "hello world", so far this is going to give us a very basic white background site with black text./

![basic website layout](../../images/images-md/firstShot.png)

So you can see above this is very basic and doesn't have a lot of content so in part 2 we will add more to it then move on to the css to make it look it good!   

**Stay tuned for part 2**

*If you'd like to join the community and make your own posts on here and share your experiences Reach to me VIA social media or Email and I'd be more than happy to feature your writings!*




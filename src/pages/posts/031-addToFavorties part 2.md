---
title: "Add to favorties using local storage part 2"
date: 2022-06-26 11:56:00
author: "Brandon Brown"
image: '../../images/images-front/Part 2....png'
tags:
   - javascript
   - React
   - html5
   - local Storage
---

# How I created an add to favorite using only local storage part 2

In the part one of this tutorial we talked about how to add an item to localStorage and how to display what was stored with the 'key', 'value' pair. How to create an object and how to then add new items to the object that was created inside of the local storage. 

First off this is not the ideal way to create an add to favorties section it should be done with more of database layout this was simply a personal project that I wanted to work on for fun and practicing some basic things inisde of a PWA that was created for my own personal use.

Now lets get into part 2...

## Mapping the data. 

Well now that we have created a list of titles in our localStorage we are goint to map through the data then display them as their own list item with relevant information so that will look something like this.

```
const allItems = JSON.parse(localStorage.getItem("arrObject"));

     {allItems !== null ? (
          allItems.map((item) => {
            return (
              <>
                <div className="results" key={item.id}>
                  <Link to={`/MoviePage/${item.id}`} className="linkName">
                    <img
                      src={`https://image.tmdb.org/t/p/w92/` + item.img}
                      alt={item.id}
                    />
                  </Link>
                  <div className="body">
                    <h3>{item.name}</h3>
                    <p>{item.overview}</p>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p style={{ padding: "2%" }}>
            Nothing added yet. Go browse in our Movies section to add something!
          </p>
        )}
```

as always lets go ahead and break this down into smaller pieces so that it's easier to understand the first piece 

```
const allItems = JSON.parse(localStorage.getItem("arrObject"));
```
is just us setting a "variable" that we can use to reference our stored information just making it easier to read and understand. 

Now let's get into the thick of it. 

```
{allItems !== null ? ()
```

this should be pretty familiar to anyone with a working knowledge of React we are just saying as long as the viable "allItems" does NOT equal "null" meaning that there is some "value" stored in it" display the informatin being referenced. The reason I've done this is because I actually turned this into a ternary condition where it null does return true than instead it will dipslay "Nothing added yet. Go browse in our movies section to add something" just a little quality of life addition. 

the next part unforutnately I cannot really break down into to much smaller of section since it all kind of relies on its self.

```
allItems.map((item) => {
            return (
              <>
                <div className="results" key={item.id}>
                  <Link to={`/MoviePage/${item.id}`} className="linkName">
                    <img
                      src={`https://image.tmdb.org/t/p/w92/` + item.img}
                      alt={item.id}
                    />
                  </Link>
                  <div className="body">
                    <h3>{item.name}</h3>
                    <p>{item.overview}</p>
                  </div>
                </div>
              </>
            );
          })
        )
```

you will see the allItems.map((item) => {}) in this we are saying take the variable allItems that we defined at the top as being the variable to access everything stored in localStorage the "item" is simeply a reference inside of the map which is standard when using the map function which allows us to now refenrnce anything in side the variable of "allItems" with "item" you will see "item.id" which it the id associated with each object stored in local storage. 

Next is the Link to which is just using dynamic routing to allow you you to access the page for the items stored in the local storage just anothing quality of life feature. 

Really this is all it took in order to create an add to favorties section with localStorage.

Let me just break down the pros and cons I've found so far.


### Pros:


&ensp; - ease of use
&ensp; - flexibility 
&ensp; - browser support

### cons 

&ensp; - duplicates cannot be controlled
&ensp; - lack of in depth controll
&ensp; - feels very hacked toghether
&ensp; - very limited acalability

All in all this was a very fun project to work on and implement which took some out of the box thinking on my part to make work let me know what you think of it! 

*If you'd like to join the community and make your own posts on here and share your experiences Reach to me VIA social media or Email and I'd be more than happy to feature your writings!* 

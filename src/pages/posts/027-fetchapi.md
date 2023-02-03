---
title: "Fetch apis and vanilla js"
date: 2022-02-15 9:33:00
author: "Brandon Brown"
image: '../../images/images-front/api.png'
tags:
   - javascript
   - api
   - fetch
---

# What is an Api?

Well to put it simply Api or application programming interface. This is break it down simply is something where you can either send data to or request data from most of the modern web uses apis to some degree wether it be from social media to your favorite online store! 

Why are we talking about Api's today? I thini these days more than ever they are a staple of web design and every developer should know how to use them. I ran into an issue earlier on a project I was building for fun where I had to take information returned from one api and then pass that through to another api and return that information as well.

Well to be honest I went to the all knowing, the magnificent, the wonderful.[stackoverflow](https://stackoverflow.com)
where I came to the propest of Promise chaining I'm going to post the code and then do my best to break it down as to how I came to the outcome I got.

```
function getResults(pokemon) {
  const pokemonData = fetch(`${api}/${pokemon}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      displayPokemonName(data);
      const moveName = data.moves[0].move.name;
      return fetch(`${apiMoves}/${moveName}`);
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      displayMove1(data);
      console.log(data);
      return fetch(`${apiSpecies}/${pokemon}`);
    })
    .then((data) => data.json())
    .then((data) => {
        displaySpecies(data)
      console.log(data);
    })
}
```

So let's break this down and talk about each part the "fetch" is all too familiar this is how we are requesting the information from the API.

```
 const pokemonData = fetch(`${api}/${pokemon}`)
```

 this section of code here I will break down just so it makes sense. you will see the api and pokemon vaiables being used the api I'm using is "https://pokeapi.co/api/v2/pokemon" now in order for this api to work a search paramter has to be used for it to return something. So for instance a pokemon name or id# the "/" in there is because their api actually looks like "https://pokeapi.co/api/v2/pokemon/" <-- pokemon name or id so that is where the "pokemon" vairable comes in that come from the search box that is on the application it's self and the value of what it entered into it then is used as the search paramter for the api.

the next section of code should look familiar  if you've ever worked with an api, if not I'll try to explain.
```
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      displayPokemonName(data);
```
when using an api it returns a promise we then have to resolve that promise and then tell it what to do.

So we take the (data) that is returned then turn that data into json with data.json() this way it is easier to work with.
the next .then is where we are going to use the console.log(data) which we just returned right about it with data.json() this will allow us to inspect the data returned in the console so we can chose the endpoints we want to use in our application.

The last part there is the displayPokemonName(data) this is simpply calling the function I will use to display the data and then passing the "data" into it.

Now this is where the chaining starts.

```
     const moveName = data.moves[0].move.name;
      return fetch(`${apiMoves}/${moveName}`);
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      displayMove1(data);
      console.log(data);
      return fetch(`${apiSpecies}/${pokemon}`);
    })
```

You will see this picks up right after where the first api call was sent to the function displayPomemonName(data).

We are delcaring a const of "moveName" which is set the value of "data.moves[0].move.name" this is the api endpoint that I pulled from the first fetch request that made which is then being passed into the second api call being made which like the first need a search parameter. To make it clear the data.moves[0].move.name returns the move "mega-punch" which I then am taking and passing in to the "apiMoves" which is not returning some more information for the move "mega-punch" which I am then returning the data received as json with the .json() just like in the first call, we then are setting the function "displayMove" to receive that "data" so it can then be used how I want.

after that you will a 3rd promise which i"m not going to break down because we have already seen how that works in the last instance.

You will notice the.

```
return fetch(`${apiSpecies}/${pokemon}
```

This is a 3rd promise being made which again is just taking the pokemon name or id which was entered into the searchbox and then returning information based on that pokemon.

In short this was a fun little project which you can [**[Check out here](https://pokemoncardapi.netlify.app)**]

 *If you'd like to join the community and make your own posts on here and share your experiences Reach to me VIA social media or Email and I'd be more than happy to feature your writings!*


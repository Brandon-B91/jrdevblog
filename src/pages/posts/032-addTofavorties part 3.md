---
title: "Add to favorties using local storage part 3 Updated!"
date: 2023-02-03 15:00:00
author: "Brandon Brown"
image: '../../images/images-front/Part3....png'
tags:
   - javascript
   - React
   - html5
   - local Storage
---

# How I created an add to favorite using only local storage part 3 Update... New version.

So if you look back on the past 2 posts about local storage I was working with adding movie titles to local storage then retrieving them from there to display them and created a dynamic route to that titles "movie page"... This was great and all however...

## The problems

This wasn't a great solution but it did the job so what I was doing was creating an empty array either for "movies" or "tv shows" then pushing and object to the respective array, well there was some issues with this for one, If i wanted to add to the array I had to pull down the original array create a new one and then push all the new items to it. This was limiting to say the least... Also if you wanted to clear anything from your favorties you had to remove everything.. Ouch! To make it worse you can add the samething a million times if you wanted... who wants that?

## So now what?

Well lets move onto what I did and how I changed this and what features I add to it... This worked out perfectly in my use case I ended up throwing out that code completely and starting from scratch, it goes to show how versatile coding can be if you just learn to look at  things outside the box a bit.. First off you can now add an item to the local storage and delete only that item. this will elimianate duplicates from being added now as well! 

## Lets take a look 
if you'd like to go back and look at the previous posts I will link them now before we get into it.

- [Part 1](https://www.jrdevsblog.com/add-to-favorties-using-local-storage-part-1/)
- [Part 2](https://www.jrdevsblog.com/add-to-favorties-using-local-storage-part-2/)

```js

localStorage.getItem(props.res.title) === null ? localStorage.setItem(props.res.title, props.res.id): localStorage.removeItem(props.res.title);

```

So what is happeneing here is I have two separate components. One for movies and one for tv shows let me explain.. 

In the API I'm using movies and tv shows are called different things, for instance movies go by "title" tv shows go by "name".

I've explain this before but with local storage we have to use "key", "value" pairs so we are storing the title or name as the key and the id for the corresponding item as the value this will make sense later.

In the example above we are using a ternary operator to check if the title of the movie we just tried to add to local storage is present or not if it is then we remove it, if it's not then we add it. 

Just like that we have solved one of the issues listed above on duplicated being an issue.

```js
localStorage.getItem(props.res?.title) == null ?  <FaRegHeart /> : <FaHeart /> 
```

Also just for fun here is the slice of code that will change the icon to show either a full heart which means its in your favorites or an empty heart if it's not, simple yet effective.

Now onto the hard(er) part. Once we have saved the item and checked to make sure it was a duplicate with the previous lines of code now what do we do with it? Well the API i'm using has a "multi" search where you can search by movie title tv show name or actor name.

Onto the favorties page!

```js
 const key = Object.keys(localStorage); 
  const id = Object.values(localStorage);
```

Looking at these the first line is simplying pulling the "keys" from local storage and saving them to "key"

the second line is taking the values from local storage and saving them to "id"

next up is how we bring it all together, so hold on.

```js
  return (
    <div className="movieTvFav">
      <h2>Favorites!</h2> 
      {key.length > 0 ? <button className="movieTvFav-button" onClick={clearAll}>Clear all</button> : ""}
      <div className="tv-results">
        {key.length > 0
          ? key.map((item) => {
              encodeURI(item);
              return (
                <div>
                  <MovieFavSearch item={item} id={id} />
                </div>
              );
            })
          : `Looks empty in here! go browse in the Movies or T.V sections to add something!`}
      </div>
    </div>
  );
```

Okay let's break this down key.map((item) => {}) this is taking the "key" variable we save all the "keys" from local storage to and mapping through it to return all the "names" or "title" we are then passing this through the "encodeuri" this is justi formatting it for us since the API will only accept URI encoded strings.

after that we taking all that and pass it to the <movieFavSearch> component using the item and id props..

## Lets wrap this up in the last step!

So now lets look at the movieFavSearch component and see what this is doing under the hood.

The component 

```js
  useEffect(() => {
    const auto = fetch(`
        https://api.themoviedb.org/3/search/multi?api_key=f79df266a37e366257a09e6b64a14de9&language=en-US&query=${props.item}&page=1&include_adult=false`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setResponse(response);
        let res = response.results[0]
        setRes(res)
      });
  }, []);

```

I went with useEffect here because I want this to run imemdiately on page load so the items from the persons favorites list will populate on page load, you can see in the fetch request we passed our "props.item" so the multi search can pull it imemdiately.

Next is we want to be able to link to that items either movie or tv page so the user can get more information on it and this is how we did that.

```js
 let page;
    res?.media_type == "movie" ? (page = "MoviePage") : (page = "TvPage");

 ```

 So we set "page" and leave it empty for a reason so on the response given from the fetch request which returns us a field called media type so all we need is a ternary operator to check if the media type is "movie" if it is great! All we do is set "page" to equal "MoviePage" which is the page I use for movies if it's not then use "TvPage" simple right?

```
      <Link to={`/${page}/${res?.id}`} className="linkName">
          <img
            src={`https://image.tmdb.org/t/p/w154/` + res?.poster_path}
            alt={res?.id}
          />
        </Link>
```

Look at the code above see where we use Link to and the page variable we talked about earlier then after that we call the id but why the id? well if we need the "id" to ensure that when the page is generated we use the id for accuracy since all movies and tv shows have unique ids.

## Conclusion

I know this one was a bit length however I think that it was a fun experiment and it also solved all the issues I outlined that the original method had.

*If you'd like to join the community and make your own posts on here and share your experiences Reach to me VIA social media or Email and I'd be more than happy to feature your writings!* 













 
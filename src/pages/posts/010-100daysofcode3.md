---
title: "100 Days of Code 3"
date: 2021-3-21 08:20:00
author: "Brandon Brown"
image: '../../images/images-front/100daysofcode3.png'
tags:
  - web
  - mini series
  - 100 Days of Code
---

# 100 Days of code part 3

So it has been a little while since I've been able to update this but its time to get back on it.  

I've been working on a side prject which has been occupying a lot of my time I know that is not an excuse and I need to work on time management a bit.  

Lets' get into this tho in part 2 **[HERE](https://jrdevsblog.com/100-days-of-code-2)** I was talking about some work I had done in jquery and some very basic intros to react. Yeah I know this site is actually buily with GatsbyJS which is a SSg that uses react and graphql.  

So since then I have spent quite a bit of time working on my side project which I can't really talk about too much since it's not done yet.  

Some key things I do want to talk about in graphQL specifically is the amount of control it gives you when it comes to querying things.  

![GraphQL logo](../../images/images-md/graphql.png)

First lets talk about graphql and what it is GraphQL is a query language hence the QL (query language) so to put it simply it's used to query data from a server to the client.  

In my situation I use it to pull information from a .md file, So let's say this blog post is named 100daysofcode3.md the MD is a markdown file I'm not going to get into that in this post. To give you an idea oh how this looks it would be somthing like this.  

```graphql 
const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(format: PLAIN, pruneLength: 180, truncate: true)
        }
      }
    }
  }
`
```

First off this is actually an older way of calling for images there is a new gatsby plugin for images we will talk about that later on.  

So looking at the code above starting at the top with calling the "query" after that is AllMarkdownRemark{ more code here } this is telling the API I want to get information from "ALL" markdownRemark files. Why am I calling it like this? Well it's because I am using the info from all of theme to create the pages once the icon is clicked.  

What I'm saying here is that the pages for these blog pages you are reading aren't there until you click (or tap) on them. Then after some techno wizardry in the background that query we posted about passes the necessary information to create all of this.  

What I find intersting about GraphQL is that you can select what info you want to query, somw query languages don't give you this control and just spew all the information on you.  

I'm not saying that GraphQL is better than other query languages I'll be honest it's actually the first one I've put time into using. I will eventually work with some others and then come back to this post and do a reflection on how it differs and how I feel about it after using a few others for comparison.  

**Stay tuned for part 4**

*If you'd like to join the community and make your own posts on here and share your experiences Reach to me VIA social media or Email and I'd be more than happy to feature your writings!*


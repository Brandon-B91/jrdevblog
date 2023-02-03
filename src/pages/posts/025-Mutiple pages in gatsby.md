---
title: "Creating pages from different templates in gatsby"
date: 2021-10-8 14:00:00
author: "Brandon Brown"
image: '../../images/images-front/fork.png'
tags:
   - Gatsby
   - Web 
   - Ecommerce
---

# Intro

So I've talked about this before on here but I do have a personal ecommerce site that I built using GatsbyJs and Snipcart you can read more  **[Here](https://www.jrdevsblog.com/my-experience-with-building-my-own-ecommerce-site/)** So up until recently it was just a basic Ecommerce site Where I could sell my products. I recently decided I wanted to add a blog to that as well and decided well Gatsby is perfect for this sort of thing.

## Where to start 

First thing we need to do is establish what we want to happen and where it will all be displayed.. We know that we will want the blog to show up on the home page for easy access. We also know that we will need a dedicated blog page as well, last we know that we will want the blog to have a slightly different setup and layout from how the products we are selling look. That means we will need to set up a new template. 

## New Template

Let's get into the actual coding and I'll be honest this took me a bit longer to figure out than I'd like to admit and I'm going to provide exxamples of what I was doing that did not work and then the final code which did work. Inside the gatbys-node.js file which is where the code lives that is creating our pages progrmatically is where we need to start, we need to tell this code that we will be creating a new page type from a different template and figure out how to make it recognize this. Looking back on it the solution seems so simple but that is always the case when hindsight is 20/20 right?

Why don't we take a look at the code I was trying and talk about what happened prior to the correct code being implemented?

This is the way the code was setup just for the one page type and template.

```
const path = require(`path`);
const _ = require("lodash");

const { createFilePath } = require(`gatsby-source-filesystem`);
const { info } = require("console");
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const results = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              type
              price
              author
              tag
              gender
              customField {
                name
                values
                gender
                list
              }
              line
              display
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  results.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};

```

What's going on here or the part we are mostly focused on here is the 

```
createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
```
 You can see where the component: path.resolve is picking up which template to use when cretePage api is used. 

 Well in all my genius I decide that this should be a simple fix and end up with something like this. 

 ```
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const products = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              type
              price
              author
              tag
              gender
              customField {
                name
                values
                gender
                list
              }
              line
              display
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  products.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });

  const blog = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              type
              price
              author
              tag
              gender
              customField {
                name
                values
                gender
                list
              }
              line
              display
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  blog.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
 ```

 As you can see all I did was recreate the original query with a different const value and re name it. In my mind this is great because I can change the component: path.resolve to the new template and Viola done! Well not so much... BUT WHY? well what was happening is the template I was using for the blogs as well as the products were reading each other and both were applying to the pages that were being created... Well then it became a jumbled mess so now what?

 Well what I ended up doing was adding a query field to the markdown files that were going to be used for the blog posts and added a frontmatter filed like so 
```
 ---------
type: "blog"
 ---------
```

 Then inside the gatsby-node file I changed the code to look more like this.

 ```
  results.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.type === `blog`) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    } else {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/product-page.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    }
  });
 ```

 What I ended up doing here as you can see if is saying if the page clicked on has the frontmatter type of "blog" then follow this template if not then follow this path instead..

 Seems pretty simple right? Well sure it does however in the moment when I'm knee deep with 8 google chrome tabs open and scratching my head then BAM like a train it hits me... Well here we are I got to  sit back triumpahntly and breathe a sigh of relief as it all came together. 

 *If you'd like to join the community and make your own posts on here and share your experiences Reach to me VIA social media or Email and I'd be more than happy to feature your writings!*


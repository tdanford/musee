Museé 
=====

A small Typescript-based web app, inspired by the [NYT Close Reading of Auden's _Museé des Beaux Arts_](https://www.nytimes.com/interactive/2022/03/06/books/auden-musee-des-beaux-arts.html).  

## Introduction 

I _loved_ the NYT Close Reading -- both because I loved the Auden poem, of course of course, but also because I was captivated by the way in which the reading itself was presented.  The reader scrolls through sentences and sections of Elisa Gabbert's essay... and as they scroll the rest of the page is driven to highlight images or words that are the subject of that portion of the essay.  

"What I'd really love," I thought, "is to write _all_ my tutorials and documentation, for technical work, using a system like this!"  (It's a very limited vision, nothing as grand as an explication of Auden's meditation on suffering and art, but often a _limited vision_ is all we have.) 

I didn't look at the code behind the NYT app at all.  Even now I still don't know how they implemented it, and I don't _want_ to know.  

But I'd recently been browsing the docs for Javascript's [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), and that seemed well-suited to a task like this, so I spent a night coding up a simple version based -- each section of "content" is displayed or removed on the righthand side of the screen as each scrollable "control" block on the left appears or disappears in the user's viewport -- and this is what a few hours of work got me.   

## Installation 

Once you've cloned the repository, you'll need to run 

```shell
$ npm install
```

to install the dependencies -- and then to run a local (development) server, 

```shell
$ npm run dev 
```

After that, your server should be running on [http://localhost:3000/](http://localhost:3000/) (or perhaps on a different port, if there was something already running on port 3000 on your machine).  

## Future Work

* Integrate with embedded reveal.js?
* Work on being able to animate / zoom images as a transition, instead of showing images
* replace the all-or-nothing rendering on the righthand side of the page, with a `.scrollInToView()` type call, on a (very tall) div of images or content
* add other 'content types' e.g. raw html 

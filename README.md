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

## Configuring a Museé

You can see an example configuration in `public/arts/example.json`. 

Each JSON configuration has field, `arts`, whose value is an array of Art objects.

```json
{
    "arts": [
        ...
    ]
}
```

An Art has two keys, `instruction` and `content`.  

```json
{
    "instruction": "Here is some string instruction, that is shown on the left-hand (scrollable) portion of the display", 
    "content": {
        ...
    }
}
```

The value of an `instruction` is just a string, but there are four types of `content` objects:

* Empty
* String
* Image
* Zoomed Image 

They are classified by a common `type` field, with values in the set `{ "empty", "string", "image", "zoom" }`, and the type of content determines what is shown on the righthand side of the page when the corresponding instruction is visible on the left.  

### Empty Arts

For example, 

```json
{
    "type": "empty"
}
```

Just shows a blank page on the right

### String Arts 

```json
{
  "type": "string", 
  "value": "This string is rendered in the content pane without additional parsing"
}
```

### Image Arts 

```json
{
    "type": "image", 
    "src": "example.png"
}
```

will insert an HTML image element with a `src` URL of `/images/example.png`, which is served from the `public/images` folder in this project.  (Support for remote images will be added later.)

### Zoomed Image Arts

```json
{
  "type": "zoom", 
  "src": "example.png", 
  "tx": 10, 
  "ty": 20, 
  "scale": 2.0
}
```

## Future Work

* Integrate with embedded reveal.js?
* Integrate with [Manim](https://github.com/ManimCommunity/manim) for generating images programmatically rather than having to juggle screenshots everywhere
* replace the all-or-nothing rendering on the righthand side of the page, with a `.scrollInToView()` type call, on a (very tall) div of images or content
* add other 'content types' e.g. raw html 

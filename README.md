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

## Configuring a Presentation

At the moment, you can see an example configuration in the `example.json` file, located under the `pages` folder.  Currently, this JSON document is loaded statically when NextJS compiles the page the first time; this means that if you change the file while the dev server is running, you'll have to restart the dev server to see the updates.

(In the future, we'll load these configuration files dynamically rather than compiling them statically like this; see _Future Work_ below.)

Each JSON configuration file has a key, `steps`, whose value is an array of Musee Step objects.

```json
{
    "steps": [
        ...
    ]
}
```

A Musee Step object has two keys, `instruction` and `content`.  

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

For example, 

```json
{
    "type": "empty"
}
```

Just shows a blank page on the right, while 

```json
{
    "type": "image", 
    "src": "example.png"
}
```

will insert an HTML image element with a `src` URL of `/images/example.png`, which is served from the `public/images` folder in this project.  (Support for remote images will be added later.)

## Future Work

* Integrate with embedded reveal.js?
* replace the all-or-nothing rendering on the righthand side of the page, with a `.scrollInToView()` type call, on a (very tall) div of images or content
* load json configuration from an API rather than statically compiling it in
* add other 'content types' e.g. raw html 

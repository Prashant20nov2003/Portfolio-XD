---
title: How I Built My First Project and What I Learned from it
author: Jasper Wang
description: my journey of building and deploying my first every personal project
pubDate: 2024-01-09
tags:
  - project
  - JavaScript
  - HTML
  - SCSS
---

## Why

During my pursuit of psychology at UBC, I stumbled upon a YouTube video talking about JavaScript- the video was about what you can make with JavaScript, and it sparked my curiosity for programming.

I was so intrigued by the possibilities of making a personal website, all fully customizable with an infinite amount of features that you can put in I started to learn how to program by learning JavaScript.

So, over the summer of 2020, I self-studied on Udemy, I fully went through 3 tutorial series on Web Development, CSS and SCSS, and JavaScript. And I made a series of little projects here and there too.

So, when I was presented with the opportunity to make a bespoke landing page for an actual company, I took on the challenge of applying what I learned.

## Process:

### Before diving into the IDE:

First, I did research on websites like [awwward.com](http://awwward.com/) and [dribbble.com](http://dribbble.com/) to get some design inspiration.

Once I settled on a design language that I liked, I used pencil and paper to graph the layout of the webpage. It’s only after I finish the skeleton of the layout, that I get to code.

### First step: The hyper hypertext markup

I started with an HTML skeleton of the webpage- I made an HTML mock-up according to my layout sketches, and then I started the styling.

### Second step: the Sassy CSS

I picked SCSS to manage my styling. SCSS is a pre-processor scripting language that's a superset of CSS, and I chose it because I can utilize the [BEM methodology](https://getbem.com/) to organize my CSS files.

SCSS allows me to nest CSS selectors, making it easy to read and write complex stylesheets, to demonstrate, here is the source code of one of my button component’s styling.

```scss
.next-btn {
  position: relative;
  display: flex;
  width: max-content;

  &__text {
    width: max-content;
    /* omitted */
  }

  &__arrow {
    display: block;
    /* omitted */
  }

  &__circle {
    position: absolute;
    top: 0;
    /* omitted */

    &:hover {
      /* omitted */
    }

    &:active {
      /* omitted */
    }
  }
}
```

Not just nesting, SCSS enables me to do so much more- from importing many stylesheets into one to *mixins*, and reusable snippets, writing CSS became such a breeze.

### Third Step: The JavaScript ☕️!

To make the project more fun, I opted to not use libraries for scrolling animations. I watched a few [videos by](https://www.youtube.com/watch?v=T8EYosX4NOo) Kevin Powell and learned to implement the fade-in effect of each element as they're scrolled into view, as well as the scroll spy effect on the menu bar.

At the time, my programming skills weren’t as good as now, that’s why for some of the more difficult effects like photo carousel I opted for using a [community npm package](https://github.com/ganlanyuan/tiny-slider).

### Fourth+ Steps: Going back and forth, and repeat

Once the prototype is done, I went about _iterating_ the project by going through online resources to see if I am following **best practices**. Two helpful tools were the [Google Lighthouse Score](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) and [the Front-End Check List](https://frontendchecklist.io). After using these tools, I realized I didn't do anything about SEO, meta tags and accessibility. So I modified my HTML code to make the webpage more accessible, and easier for a crawler to index.

## What went well

I went from not having any fully finished and deployed projects to having one, all by myself without following a tutorial!

## What challenges or roadblocks did I face

Lots.

At the time of making this project, I wasn't too familiar with OOP concepts and techniques like closures, IIFE, and ES6 syntax, so I was having a lot of trouble trying to use external libraries. And my code wasn't very clean and efficient (aka smelly).

Now that I have a lot more experience with programming, I will go on to refactor the code to follow good programming practices that employ encapsulations, descriptive variable names, and so on.

## What did I learn?

This project changed me, literally. I became more independent and I found something that I very much have a knack for. Let me explain:

Over the span of one month (yes, this little landing page took me a month), I learned so, so, so much. Prior to this project, I had never properly made something without relying on a tutorial. But I finally did it.

Ever since I did this project on my own without hand-holding, I became a lot more comfortable with making my own projects by looking up documentation and articles to solve problems. (Especially thanks to not having access to Chat GPT back then, I did not pick up an unhealthy habit of relying on it.)

And this is also the project that made me realize I have a passion for programming. It is one of the few things in the world that truly scratches my brain in a magical way, where I can go into *a flow state* as easily as pie.

This opens up the door for me to go even more in-depth into web development and programming. I picked up React, learned to use Gatsby to make a more sophisticated site (too busy to finish due to school), and ultimately I went into studying computer science at BCIT right after I graduated.

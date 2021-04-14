# [Frontend Mentor - 3-column preview](https://3-column-preview.netlify.app/)

## Background

<br>

[Link to my solution](https://github.com/aemann2/3-column-preview-card-component-main)

My first time using Tailwind for a design...I'm not sure whether I like it. It's relatively simple to make things responsive with Tailwind, but there are little things that are more difficult to do. For example, setting a `border` for the buttons on hover requires a line in the tailwind config, and it took me a long time to figure that out. And each time you modify the config, you have to rebuild the CSS. The same with changing the properties of grid-template-columns. It's enough extra steps that it almost seems like I'd be better off using regular CSS for some of these things.

Then there's the issue of all the classes in the HTML. How are you supposed to maintain and organize those? I guess you could just create an `@apply` in the styles.css, but at that point, it seems like you're better off just using regular CSS. I'm going to try it a few more times, but as of now I'm not sold on it. I like it more than Bootstrap, but there are still many instances where I feel like I'd be better off just using CSS.

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

Bright orange: hsl(31, 77%, 52%)
Dark cyan: hsl(184, 100%, 22%)
Very dark cyan: hsl(179, 100%, 13%)

### Neutral

Transparent white (paragraphs): hsla(0, 0%, 100%, 0.75)
Very light gray (background, headings, buttons): hsl(0, 0%, 95%)

## Typography

### Body Copy

- Font size: 15px

### Font

- Family: [Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)
- Weights: 400

- Family: [Big Shoulders Display](https://fonts.google.com/specimen/Big+Shoulders+Display)
- Weights: 700

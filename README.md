# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

To create an intro component with a sign up form as close to the design files provided.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](screenshot.JPG)

### Links

- Solution URL: [here](https://github.com/Ishi1834/intro-component-with-signup-form)
- Live Site URL: [here](https://ishi1834.github.io/intro-component-with-signup-form/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

I should use vw for elements such as a container which I want to grow as the screen gets bigger and px for margins and paddings:

```css
.container {
  margin: 8vw 8vw 4vw 8vw;
  display: flex;
  flex-direction: column;
}
.form input {
  padding: 20px;
  font-weight: 600;
  color: var(--Dark-Blue);
  margin: 13px 0;
  border: 1px solid var(--Grayish-Blue);
  border-radius: 5px;
}
```

How to manipulate an element using javaScript:

```js
const fNameError = document.querySelector("#fname + span.error");
```

## Author

- Github - [@Ishi1834](https://github.com/Ishi1834)
- Frontend Mentor - [@Ishi1834](https://www.frontendmentor.io/profile/Ishi1834)
- CodePen - [@sadiq1834](https://codepen.io/sadiq1834)

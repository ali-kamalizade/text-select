# text-select - select text on any web web page

[![npm version](https://badge.fury.io/js/%40alidev%2Ftext-select.svg)](https://badge.fury.io/js/%40alidev%2Ftext-select)
[![Build Status](https://travis-ci.org/ali-kamalizade/text-select.svg?branch=master)](https://travis-ci.org/ali-kamalizade/text-select)

`text-select` is a tiny and helpful library to easily select text on web pages.
Compared to other solutions, `text-select` can not only select text of HTML elements but you can also select a substring.
`text-select` can also be used in end-to-end tests (e.g. using Protractor or TestCafe) to select any text during tests.

## Features
- Works in browsers and NPM-based projects (e.g. React applications)
- Select whole text of an element or just select part of it
- Simple getter functions to get selected text
- TypeScript support (e.g. handy for Angular projects)
- Can be used in end-to-end tests to select text
- Tiny size (~1 KB) without any dependencies: just vanilla JavaScript

## Installation
- If you are using NPM: ```npm install @alidev/text-select```
- You can also include the script directly. Just download the script from the [dist folder](https://github.com/ali-kamalizade/text-select/tree/master/dist).

## Get started
- Usage in Node.js projects (ES6 syntax):

```javascript
import {selectElementText, selectText} from '@alidev/text-select/dist';
// Select the whole text of an element
selectElementText(document.getElementById('intro-header'));
// Select only a substring of an element's text
selectText(document.getElementById('contact-email', 'john.doe@ac.me'));
```
- Usage in the browser (the `TextSelect` global contains all of the functions):

```javascript
<script src="text-select.bundle.js"></script>

TextSelect.selectElementText(document.getElementById('intro-header'));
```

## Compatibility
- Every decent web browser (Chrome, Firefox, Safari, Opera, Microsoft Edge, IE11)

## Examples
- See the demo.html file for a simple example.

## Local development setup
1. Download the repository.
2. Get Node.js and install it if you haven't already.
3. Use ```npm install``` to install the necessary dependencies.
4. The source code is written in TypeScript in the `src` directory.
5. Run ```npm run build``` to build the library.
6. Run ```npm test``` to run the e2e tests.

## Contribution
Pull requests and feature requests are welcome!

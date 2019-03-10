# text-select

[![npm version](https://badge.fury.io/js/%40alidev%2Ftext-select.svg)](https://badge.fury.io/js/%40alidev%2Ftext-select)
[![Build Status](https://travis-ci.org/ali-kamalizade/text-select.svg?branch=master)](https://travis-ci.org/ali-kamalizade/text-select)

`text-select` is a tiny library to select text on web page.
Compared to other solutions, `text-select` can not only select text of HTML elements but you can also select a substring.
`text-select` can also be used in end-to-end tests (e.g. using Protractor or TestCafe) to select text during tests.

## Features
- Works in browsers and NPM-based projects (e.g. React applications)
- Select whole text of an element or just select part of it
- TypeScript support (e.g. handy for Angular projects)
- Can be used in end-to-end tests
- Tiny size (~1 KB)

## Installation
- If you are using NPM: ```npm install @alidev/text-select```
- You can also include the script directly. Just download the script from the [dist folder](https://github.com/ali-kamalizade/text-select/tree/master/dist).

## Get started
- Usage in NPM:
```javascript
import {selectElementText, selectText} from '@alidev/text-select/dist';

selectElementText(document.getElementById('intro-header'));
```
- Usage in the browser:
```javascript
<script src="text-select.bundle.js"></script>

TextSelect.selectElementText(document.getElementById('intro-header'));
```

## Compatibility:
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

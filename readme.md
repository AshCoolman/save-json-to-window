# Save JSON to window

## Intro

Sometimes its useful to make values created at build-time, available to the frontend.


## Usage

To install:

```sh
$ npm i save-json-to-window --save-dev
```

## Usage

At the start of your `Gulpfile.js` you could add:

```javascript
var package = require('../package.json'),
    saveJsonToWindow = require('../src/index.js'),
    obj = {version: package.version}

saveJsonToWindow('./test/build-values.js', 'buildValues', obj);
```

Will create a file called `build-values.js` containing:
```javascript
window.buildValues = {"version":"1.0.0"}
```

You can now include `build-values.js` as a file dependency.

Note: this does a _synchronous_ write of the file.

Caution: it is generally considered bad practice to add anything to window object, proceed with caution..
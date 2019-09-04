# Window Position (window-pos)

![GitHub](https://img.shields.io/github/license/Soundofdarkness/window-pos?style=for-the-badge)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Soundofdarkness/window-pos?style=for-the-badge)

A small native library to get the size and position of a window on windows.

## Installing

```
npm install git+https://github.com/Soundofdarkness/window-pos.git
```

## Usage

```js
const windowPos = require("window-pos");

// Rect: {top: 0, bottom: 0, left: 0, right: 0} or null if the window is not found.
const rect = windowPos.getWindowCoords("Window Title");

// Size: {width: 0, height: 0}
const size = windowPos.getWindowSize("Window Title")
```

## Dependencies

- [Lodash.Clone](https://www.npmjs.com/package/lodash.clone) [MIT](https://github.com/lodash/lodash/blob/master/LICENSE)  
- [Node-Addon-Api](https://www.npmjs.com/package/node-addon-api) [MIT](https://github.com/nodejs/node-addon-api/blob/master/LICENSE.md)

Dev Dependencies:

- [Node-Gyp](https://www.npmjs.com/package/node-gyp) [MIT](https://github.com/nodejs/node-gyp/blob/master/LICENSE)
- [Mocha](https://www.npmjs.com/package/mocha) [MIT](https://github.com/mochajs/mocha/blob/master/LICENSE)

## License

This project is licensed under the terms of the MIT License.
See [License](/License)


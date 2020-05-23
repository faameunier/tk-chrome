# How to install dev environment
The dev environment relies on npm / node. Make sure to have these installed and working.

#### NPM environment
Clone and install dependencies.
Please use a recent version of Node and npm :)
```
git clone git@github.com:faameunier/tk-chrome.git
cd tk-chrome
npm install
```

**TIP** A bug with node_gyp and MacOS Catalina can be avoided by running 
```
npm i -g node-gyp@latest && npm config set node_gyp "/usr/local/lib/node_modules/node-gyp/bin/node-gyp.js"
```

The code need to build (transpile) from ES2015+ to ES5 for better compatibility. This is done using Babel.

To avoid building manually with:
```
npm run build-env
```

You can run (debug environment):
```
npm run watch
```

The build will happen automatically each time you do a modification **in the src folder on any file**. Feel free to extend the watch in *package.json*.

#### Environments
Due to webpack building process it can be hard to access functions.
In order to avoid this, in **debug** environment, some variables are added to the window. See `memory.js` for an example:
```javascript
[...]
export var memoryManager = new MemoryManager();
if (ENV === 'debug') {
  window.memoryManager = memoryManager;
}
```

The ENV variable is managed by webpack directly and affects the default configurations as well.

#### Setting up chrome
Go to [chrome://extensions](chrome://extensions), toggle 'Developer mode' in top right corner.

Select 'Load unpacked extension' and select the **dist** folder.

**TIP** You can install  [Extensions Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/) to easily reload the extension in-flight (not perfect)

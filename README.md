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
npm run build
```

You can run:
```
npm run watch
```

The build will happen automatically each time you do a modification **in the src folder on a .js file**. Feel free to extend the watch in *package.json*.

#### Setting up chrome
Go to [chrome://extensions](chrome://extensions), toggle 'Developer mode' in top right corner.

Select 'Load unpacked extension' and select this whole folder.

This will be improved in a later update of the building process.

**TIP** You can install  [Extensions Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/) to easily reload the extension in-flight (not perfect)

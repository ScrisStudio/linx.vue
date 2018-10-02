<h3 align="center">linx.vue</h3>

---

Linx.vue is a CLI tool to create applications that run on Web, Mobile Phones and Standalone Devices in a go. 

- It is the modified cli tool that was used in developing scristask 1.10+.
- Some code is from <https://github.com/halfrost/vue-objccn>

## Build Setup

``` bash
# install dependencies
npm install

# cordova setup
# first edit the project name in app/config.xml
cd app
npm install
cordova platform add ios
cordova platform add android
cordova platform add browser

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# run Cordova tests
# first open four lines in src/main.js
npm run cdev
cd app
cordova run ios

# build for Cordova
# first open four lines in src/main.js
npm run cbuild
cd app
cordova run ios

# run Electron tests
npm run edev

# build for Electron
npm run ebuild
```

# Then

Then edit your information in:

	package.json
    README.md
    app/package.json
    
Now it is time to build your webapp. 

Just use it like using vue-cli. (with vue-router and element-ui) 

You will find it easy to use.

---
Dominik Qiu from Scris Studio 
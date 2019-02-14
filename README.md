<h3 align="center">linx.vue</h3>

---

Linx.vue is a boilerplate to create applications that run on Web, Mobile Phones and Standalone Devices in one go. 

- It is the modified environment that was used in developing <https://github.com/scris/scristask> 1.10+.
- Some code is from <https://github.com/halfrost/vue-objccn>, so I currently choose to use GPL v3, however I will rewrite these 3 files one day and change the project into MIT.

# Setup

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
```

# Then

Then edit your information in:

```bash
# edit for vue
package.json

# edit README
README.md

# edit for cordova
app/package.json

# edit for electron
dist/package.json 
```
Now it is time to build your web app.

Just use it like using vue-cli. (with vue-router)

You will find it easy to use.

You can use `process.env.LINX_AGENT` to get which kind of devices is the user currently using.
if you get `electron` , do things in standalone devices.
if you get `cordova`, do things in mobile phones.
if you get other answers or get nothing, mark it as in the web environment.


# Commands

``` bash
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

# build for Cordova (Browser)
npm run cbrowser

# build for iOS
npm run cios

# build for Android
npm run candroid

# run Electron tests
npm run edev

# before typing these lines,
# build for Mac X64
npm run emac

# build for Windows X64
npm run ewin

# build for Linux X64
npm run elinux
```


---
Dominik Qiu from Scris Studio 

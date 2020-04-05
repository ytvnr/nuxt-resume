# nuxt-resume

> A Nuxt.js resume!

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Deploy on Github pages

You can use gh-pages. It allows to push directory **dist** in **gh-pages branch** in your project.

```shell script
npm install --save-dev gh-pages
```

Then add in your **package.json** file a **deploy** script:

```json
"scripts": {
    "dev": "nuxt-ts",
    "build": "nuxt-ts build",
    "generate": "nuxt-ts generate",
    "start": "nuxt-ts start",
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
    "test": "jest",
    "deploy": "gh-pages -d dist"
  }
```


## Issue to install gh-pages on macOS

You can have issue when installing gh-pages

```shell script
> node-gyp rebuild

No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1

```

[See here](https://github.com/nodejs/node-gyp#on-macos)
[See here (macOS Catalina)](https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md#The-acid-test)


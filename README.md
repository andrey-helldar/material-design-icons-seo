# material-design-icons-seo

SEO Plugin for [Material Design icons](https://www.npmjs.com/package/material-design-icons) by Google.

![material-design-icons-seo](https://user-images.githubusercontent.com/10347617/51179143-c2fd6d80-18d5-11e9-8905-1a6eebd424c8.png)


<p align="center">
    <a href="https://yarn.pm/material-design-icons-seo"><img src="https://img.shields.io/npm/dt/material-design-icons-seo.svg?style=flat-square" alt="Total Downloads" /></a>
    <a href="https://yarn.pm/material-design-icons-seo"><img src="https://img.shields.io/npm/v/material-design-icons-seo.svg?style=flat-square" alt="Latest Stable Version" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/npm/l/material-design-icons-seo.svg?style=flat-square" alt="License" /></a>
</p>

## Installation

**NPM**
```bash
npm i --save-dev material-design-icons-seo
```

**Yarn**
```
yarn add --dev material-design-icons-seo
```

***CDN***

* jsDelivr - [cdn.jsdelivr.net/npm/material-design-icons-seo](https://cdn.jsdelivr.net/npm/material-design-icons-seo@latest)


## Using

### SCSS

```scss
@import "~material-design-icons-seo/src/scss/material-design-icons-seo.scss";
```

### CSS
Copy the folders `build/css` and `build/fonts` to root dir of your project and connect them:
```html
<head>
    <!-- ... -->
    
    <link href="/css/material-design-icons-seo.css" rel="stylesheet">
</head>
```

### Your project

To work, you must connect the main package [material-design-icons](https://www.npmjs.com/package/material-design-icons), since this is an add-on for it:
```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="/css/material-design-icons-seo.css" rel="stylesheet">
```

Now you can use constructions like:
```html
<i class="material-icons">face</i>
<i class="material-icons mi-face"></i>

<i class="material-icons red">send</i>
<i class="material-icons mi-send red"></i>

<i class="material-icons green">face</i>
<i class="material-icons mi-face green"></i>
```

![test page](https://user-images.githubusercontent.com/10347617/51175123-7bbdaf80-18ca-11e9-8f5c-e8b82604e126.png)

## License

This package is released under the [MIT License](LICENSE).

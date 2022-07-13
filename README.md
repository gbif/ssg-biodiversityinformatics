# alliance
A subsite for GBIC2 (subsequently repurposed for the _alliance_) using a static site generator. The _alliance_ version of the site is deprecated by Wix-based site at https://allianceforbio.org, and content rolled back to serve as an archive version (circa Aug-Sept 2018) for the GBIC2 event site.

For general usage about using the static site see to [example site](ssg.gbif-uat.org).

## Install
To install dependencies run
```
npm install
```

## Build
Builds are done with [Gulp](http://gulpjs.com/).

### Development build
To run a development build. Teh default build is a development build.

```
gulp
```

### Production
This will minify assets and won't start a server
```
gulp --production
```

## custom components in this project

**Framework buttons**
you can have one or more buttons.

* alignmenment options: left, center, spaceAround
* title: what text should go below the icon
* img options are the ones provided in the image folder. 
* link: where to link to
* background options: understanding, evidence, data, culture

```
```styledYaml
templates:
- path: framework.html
  alignment: left
  buttons:
  - title: Published materials
    img: published-materials.png
    link: ./some/page
    background: understanding
  - title: Multiscale
    img: published-materials.png
    link: /ar/some/page
    background: evidence
  - title: Published materials
    img: published-materials.png
    link: /ar/some/page
    background: data
  - title: Published materials
    img: published-materials.png
    link: ../some/page
    background: culture
`` `
```

# GBIC2
A subsite for GBIC2 using the a static site generator - content needs to be revised

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


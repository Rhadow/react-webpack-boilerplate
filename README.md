# React-Webpack-Boilerplate
[![Maintenance Status][status-image]][status-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][deps-image]][deps-url]
[![devDependency Status][dev-deps-image]][dev-deps-url]
[![Code Climate][climate-image]][climate-url]

> React project boilerplate with webpack and ES6!

## What You Get

* react (Support for React v0.12.x and React v0.13.x)
* jquery
* bootstrap
* hot reload feature

## Install
Follow the steps below:

```sh
$ git clone https://github.com/Rhadow/react-webpack-boilerplate.git
$ cd react-webpack-boilerplate
$ npm install
```

## Development:

```sh
$ npm run dev
```

Your application will be available at [http://localhost:3000](http://localhost:3000).

Whenever you need to add a third party plugins or libraries into common `vendor.js`, access to `package.json` and insert the path or module name into `vendors`.

## Production

For MAC/LINUX User

```sh
$ npm run deploy
```

For WINDOWS User

```sh
$ npm run wdeploy
```

Every javascript and assets file will be bundled into `dist` folder.

## License

MIT © [Howard Chang](http://rhadow.github.io)


[travis-url]: https://travis-ci.org/Rhadow/react-webpack-boilerplate
[travis-image]: https://travis-ci.org/Rhadow/react-webpack-boilerplate.svg?branch=master

[deps-url]: https://david-dm.org/Rhadow/react-webpack-boilerplate
[deps-image]: https://david-dm.org/Rhadow/react-webpack-boilerplate.svg

[dev-deps-url]: https://david-dm.org/Rhadow/react-webpack-boilerplate#info=devDependencies
[dev-deps-image]: https://david-dm.org/Rhadow/react-webpack-boilerplate/dev-status.svg

[status-url]: https://github.com/Rhadow/react-webpack-boilerplate/pulse
[status-image]: http://img.shields.io/badge/status-maintained-brightgreen.svg?style=flat-square

[climate-url]: https://codeclimate.com/github/Rhadow/react-webpack-boilerplate
[climate-image]: https://codeclimate.com/github/Rhadow/react-webpack-boilerplate/badges/gpa.svg

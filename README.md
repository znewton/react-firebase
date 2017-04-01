# React Firebase
Welcome to this little project of mine. I wanted to see how easy it is to combine
firebase and react to create a simple messaging app or just an app with google login.

## Requirements
To run this project, you'll need NodeJS.

Once you have that, use npm to globally install webpack:
```bash
npm install webpack --global
```

## Getting Started
First, clone this project into a directory (ie. `C:/Projects/react-firebase`)

Using the command line, navigate to said directory and run
```bash
npm install
```
to grab the dependencies for the project.

## Developing
This project uses Webpack to bundle the app. In order to build it,
use the scripts in `package.json` by calling
```bash
npm run [script-name]
```
It is recommended that you open 2 terminal windows (or 3 if you want another terminal
open for git); one to watch/build and one to serve.

### Watch
This script runs the babel compiler and webpack bundler each time a file changes within
the project directory (`../react-firebase/src/`).

### Serve
Uses node to serve on a localhost server (default is port [3000](http://localhost:3000))

### Dev Serve
Uses browser-refresh to serve on a localhost server (also default to [3000](http://localhost:3000)).
Refreshes page JS and/or CSS on file change from withing the server directory.

### Build
Uses webpack to build an optimized and minimized version of the app.
This is a **very important** step if you ever want to actually host this.
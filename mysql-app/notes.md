react js, CRUD example app using PHP API and MySQL db
- install node
node --version: v18.18.0
- install npm
npm --version: 9.8.1

react - js library for building ui
npx create-react-app mysql-app


note my react:

    npm start
    Starts the development server.
    npm run build
    Bundles the app into static files for production.
    npm test
    Starts the test runner.
    npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
    We suggest that you begin by typing:
    cd mysql-app
    npm start

nodejs server: localhost:3000 (127.0.0.1)

node_modules - node packages for react app

safe do delete files from freshly made react app:
src:
    - App.test.js
    - reportWebVitals.js
    - setupTests.js

src:
index.js
    - runs app component (App.js) with function App()

importing image from src folder to App.js (1st line in App.js)
//import logo from '. /logo.svg';

new folder in src: components
new files in src/components: 
- ListUser.js
- CreateUser.js
- EditUser.js

routing:
npm install react-router-dom
in App.js:
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
put <BrowserRouter> tag in the App div in the App function in App.js

this was inside #root div in index.html

    This HTML file is a template.
    If you open it directly in the browser, you will see an empty page.
    You can add webfonts, meta tags, or analytics to this file.
    The build step will place the bundled scripts into the <body> tag.
    To begin the development, run `npm start` or `yarn start`.
    To create a production bundle, use `npm run build` or `yarn build`.

this was inside <head></head> in index.html

      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.

manifest.json: json metadata about the application

    The manifest.json file is not strictly required for a web application to function, but it's often used to enhance the user experience, especially on mobile devices and when adding a web app to the home screen. Browsers like Chrome and Firefox use this file to provide features such as adding the web app to the home screen, displaying a splash screen, and providing a more integrated experience.
    "name" and "short_name" specify the name of the application.
    "start_url" defines the URL that should be loaded when the application is launched.
    "display" specifies how the application should be displayed (e.g., fullscreen, standalone, browser).
    "theme_color" and "background_color" specify the colors used for the application's theme and background, respectively.
    "icons" provides an array of icons in different sizes and formats for the application.

connecting to php
making api call
installing axios package in react
npm install axios
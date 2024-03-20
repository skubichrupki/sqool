react js, CRUD example app using PHP API and MySQL db
- install node
node --version: v18.18.0
- install npm
npm --version: 9.8.1

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

safe do delete files from freshly made react app:
src:
    - App.test.js
    - reportWebVitals.js
    - setupTests.js

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

    npm install @fortawesome/fontawesome-free
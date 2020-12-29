# Swedbank Front-End Dev Homework

The project includes 2 pages: home and banking. Home page has some dummy data. Banking page allows the user to switch between payment form and loan calculator.
The project is responsive (breakpoint is 600px) and tested in Chrome and Firefox.

<img src="https://i.ibb.co/sQG6Dgv/Screen-Shot-2020-12-29-at-15-04-58.png" width="200">
<img src="https://i.ibb.co/wYBkGnf/Screen-Shot-2020-12-29-at-15-05-12.png" width="200">
<img src="https://i.ibb.co/QQpRpDh/Screen-Shot-2020-12-29-at-15-05-18.png" width="200">

## Running the project
`yarn install` to install all dependencies
`yarn start` to start the app in your browser

## Tools
React, React Router. No CSS preprocessors used.

## Project structure
assets: *css* folder contains color constants and common css styles (font sizes, spacing, etc); *icons* and *images* contain .svg and .png files respectively; data.js is a source of dummy data used by components.

components: contain all reusable UI components, each component comes with its own css, BEM naming principles are used for class names.

pages: contains project's routes.

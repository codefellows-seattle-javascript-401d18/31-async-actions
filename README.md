![cf](https://i.imgur.com/7v5ASc8.png) 31: Async Actions
======

### Description

This is the frontend to an app using React, Redux, MongoDB, and Express.

## About

This application is a React App that allows the user to create, save, edit and delete notes.  Every function of this app has it's own component.  The Dashboard component lives in the App component and all of the other content lives in the Dashboard.

## Installation

Clone or fork this application and download it to your localhost.  In terminal, run ```npm install``` to install all required dev dependencies on your local host.

## How to Run App

To run app, in terminal run ```npm run build``` or ```npm run watch```.  Open ```localhost:8080``` to run the application in your browser.


## Learning Objectives
* We will be able to create thunk based middleware for redux
* We will be able to create asynchronous action creators

#### Configuration  

##### backend
* copy your cf-gram (or comparable) API into a directory labeled `backend`

##### frontend
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
* `src/style/main.scss`
* `src/style/lib`
  * `_vars.scss`
* `src/style/base`
  * `_base.scss`
  * `_reset.scss`
* `src/style/layout`
  * `_header.scss`
  * `_footer.scss`
  * `_content.scss`

#### Feature Tasks
* create a simple front end for your cf-gram (or comparable) API
  * you are only required to create CRUD operations for a single resource of your backend
  * **note:** be sure to remove auth from any routes that require it
* use the react/redux best practices we've learned to date
* add validation in your redux reducers
* add reporter and thunk middleware to your redux store
* create async action creators for making ajax request to your backend
* create sync action creators (regular action creators that return an object literal) for updating your app store

#### Problems:

problem:
Getting this error in terminal:
```
10 | let initialState = [];
11 |
> 12 | export default (state=initialState, action) => {
   | ^
13 |   let {payload, type}= action;
14 |   // this combines these two things into just action so we can be less explicit below
15 |
```

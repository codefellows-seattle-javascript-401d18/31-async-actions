![cf](https://i.imgur.com/7v5ASc8.png) 31: Async Actions

## Submission Instructions
* fork this repository & create a new branch for your work
* write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* push to your repository
* submit a pull request to this repository
* submit a link to your PR in canvas
* write a question and observation on canvas

## Learning Objectives
* students will be able to create thunk based middleware for redux
* students will be able to create asynchronous action creators

## Requirements  
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

###### App Component Tree
Your components should be nested in the following layout  

``` 
App
  DashboardContainer
    ResourceForm (create)
    [ResourceItem]
      ResourceForm (update)
```

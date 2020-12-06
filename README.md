## Practice instructions:

* **1) Create a module for the route handlers**
  * Create a file named 'routes.js'.  
  * In 'routes.js', import `express` and set up `express.Router`
  * Remove the two route handlers, '/' and '/error', from 'app.js' and add them to 'routes.js'
  * Adjust the route handlers to work on the `router` rather than `app`
  * Export the `router` and import the module into 'app.js'
  * Use `app.use()` to pass the new `routes` module to the Express app
  
* **2) Create a module for the error handlers**
  * Create a file named 'errorHandlers.js'
  * Remove the callback functions from the 404 and global error handlers in 'app.js' and add them to 'errorHandlers.js'
  * Convert the callbacks in 'errorHandlers.js' to named functions so that they can be exported
  * Export the new named error handler functions from 'errorHandlers.js' and import the module into 'app.js'
  * Pass the new exported functions into the `app.use` statements for the 404 and global error handlers

* **3) Create a module for the helper functions**
  * Create a file named 'helpers.js'
  * Remove the `reverseString` and `shortenString` functions from 'app.js' and add them to 'helpers.js'
  * Export the two functions from 'helpers.js' and import the module into 'routes.js'
  * Change the two helper function calls in the GET '/' route handler from 'routes.js' to call the `reverseString` and `shortenString` helper functions from the imported module

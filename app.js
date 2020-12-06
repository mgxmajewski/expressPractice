// Import Express and set up the app
const express = require('express');
const app = express();

const routes = require('./routes');

/*
* Helpers for Various Tasks
*/

app.use(routes);

// Helper function to reverse a string
const reverseString = (string) => [...string].reverse().join('');

// Helper function to shorten a string to fifty characters
const shortenString = (string) => {
  return string.length > 50 ? string.substring(0, 50) + "..." : string;
}


/*
* 404 and Global Error Handlers
*/

// Error handler for handling non-existent routes
app.use((req, res, next) => {
  // Log statement to indicate that this function is running 
  console.log('Handling 404 error');

  // Create new error to handle non-existent routes
  const err = new Error('err');
  err.status = 404;
  err.message = 'Oops, page not found. Looks like that route does not exist.';

  // Pass error to global error handler below
  next(err);
});

// Global error handler
app.use((err, req, res, next) => {
  // Log statement to indicate that this function is running
  console.log('Handling a global error');
  console.log(err);
  
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Set error status and send error message to the page 
  res.status(err.status || 500);
  res.send(err.message);
});

// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})
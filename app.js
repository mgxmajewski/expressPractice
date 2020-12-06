// Import Express and set up the app
const express = require('express');
const app = express();

/*
* Helpers for Various Tasks
*/

// Helper function to reverse a string
const reverseString = (string) => [...string].reverse().join('');

// Helper function to shorten a string to fifty characters
const shortenString = (string) => {
  return string.length > 50 ? string.substring(0, 50) + "..." : string;
}

/*
* Route Handlers
*/

// Home route
app.get('/', (req, res) => {
  // Log statement to indicate that this function is running
  console.log('Handling request to root or "home" route, "/"');

  // Create greeting and use helper functions to reverse and shorten a string
  const greeting = 'Hello World!'
  const reversedGreeting = reverseString(greeting);
  const shortenedDesc = shortenString('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel sapien diam. Vestibulum sed turpis id eros varius cursus.');

  // Send greeting to the page
  res.send(`
    <h1>${greeting} &#128075;</h1>
    <p><strong>Reversed greeting:</strong> ${reversedGreeting}</p>
    <p><strong>Shortened description:</strong> ${shortenedDesc}</p>
  `);
});

// Custom error route
app.get('/error', (req, res) => {
  // Log statement to indicate that this function is running
  console.log('Handling request to custom "error" route, "/error"');

  // Create custom error and print error message to the page
  const err = new Error('err');
  err.message = 'Oops, it looks like an error occurred.';
  throw err;
});

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
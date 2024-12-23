const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static('public'));

// Define the route for the home page
app.get('/', (req, res) => {
  res.send('<h1>Hello, this is a simple page hosted on Vercel!</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

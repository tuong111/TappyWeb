// Import Express framework
const express = require('express');

// Create Express app
const app = express();

// Define middleware to add required headers
app.use((req, res, next) => {
    // Add Cross Origin Isolation header
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    // Add SharedArrayBuffer header
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    next();
});

// Define a route to serve your HTML file
app.get('/', (req, res) => {
    // Send your HTML file
    res.sendFile(__dirname + '/TappyWeb.html');
});

// Serve other static files (CSS, JS, images, etc.)
app.use(express.static(__dirname));

// Set up the server to listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

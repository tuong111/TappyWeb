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

// Define a route to serve your HTML file with a button to navigate to '/tappy'
app.get('/', (req, res) => {
    // Render HTML with a button to navigate to '/tappy' and embedded CSS
    res.send(`
        <html>
            <head>
                <title>WIZARD TEAM</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }

                    .container {
                        text-align: center;
                    }

                    h1 {
                        color: #333;
                    }

                    p {
                        color: #666;
                        margin-bottom: 20px;
                    }

                    button {
                        padding: 10px 20px;
                        background-color: #007bff;
                        color: #fff;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    button:hover {
                        background-color: #0056b3;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Welcome to WIZARD TEAM Website</h1>
                    <p>Here some games:</p>
                    <button onclick="window.location.href = '/tappy';">TAPPY GAME</button>
                </div>
            </body>
        </html>
    `);
});

// Define a route for '/tappy'
app.get('/tappy', (req, res) => {
    // Render HTML for Tappy page
    res.sendFile(__dirname + '/TappyWeb.html');
});

// Serve other static files (CSS, JS, images, etc.)
app.use(express.static(__dirname));

// Set up the server to listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

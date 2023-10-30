const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for handling dynamic requests (e.g., fetching weather data)
app.get('/getWeatherData', (req, res) => {
    // Your dynamic logic here
    // You can use external APIs to fetch weather data and send it as JSON
    const weatherData = {
        temperature: 25,
        condition: 'Sunny',
        // Add more data as needed
    };

    res.json(weatherData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

if (!OPENWEATHER_API_KEY) {
    console.error("OPENWEATHER_API_KEY is not defined. Please set it in your .env file or environment variables.");
    process.exit(1);
}
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // For parsing JSON request bodies

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/weather', async (req, res) => {
    const city = req.body.city;
    if (!city) {
        return res.status(400).json({ error: 'City is required.' });
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`; // units=metric for Celsius

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            console.error(`Error fetching weather: ${error.response.status} - ${error.response.data.message}`);
            res.status(error.response.status).json({ error: error.response.data.message });
        } else {
            console.error(`Network error: ${error.message}`);
            res.status(500).json({ error: 'Failed to fetch weather data.' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
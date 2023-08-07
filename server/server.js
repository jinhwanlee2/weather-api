const express = require('express')
const app = express()

// const apiKey = "d3dd1372f453e54dcbc1b208c92b2976";
const apiCall = "https://api.openweathermap.org/data/2.5/weather?q="
const apiKey = "&appid=d3dd1372f453e54dcbc1b208c92b2976&units=metric"

app.get('/api/:city', async (req, res) => {
    const city = req.params.city;
    const url = apiCall + city + apiKey;
    
    try {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        res.json(data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});


app.listen(5000, () => {console.log("Server started on port 5000") })
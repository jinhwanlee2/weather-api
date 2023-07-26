const express = require('express')
const app = express()

const apiKey = "d3dd1372f453e54dcbc1b208c92b2976";
const apiCall = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

app.get("/api", async (req, res) => {

    res.json({"users": ["userOne", "userTwo", "userThree"] })

    /*
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=irvine&appid=d3dd1372f453e54dcbc1b208c92b2976&units=metric');
        const data = await response.json();

        res.json(data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }*/
});


app.listen(5000, () => {console.log("Server started on port 5000") })
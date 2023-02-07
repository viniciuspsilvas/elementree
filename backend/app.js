const express = require('express');
var bodyParser = require('body-parser');

const app = express();

// calling body-parser to handle the Request Object from POST requests
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ status: 'ok' }))

app.post('/generateCoordinates', (req, res) => {
    const { boundaryBox, numberOfCoordinates } = req.body;
    const { latitudeMin, latitudeMax, longitudeMin, longitudeMax } = boundaryBox;

    // Validate query parameters
    if (!latitudeMin || !latitudeMax || !longitudeMin || !longitudeMax || !numberOfCoordinates) {
        return res.status(400).send({ error: "Missing query parameters" });
    }

    let coordinates = [];

    for (let i = 0; i < numberOfCoordinates; i++) {

        let latitude = latitudeMin + Math.random() * (latitudeMax - latitudeMin);
        let longitude = longitudeMin + Math.random() * (longitudeMax - longitudeMin);

        coordinates.push({ latitude, longitude });
    }

    res.status(200).send(coordinates);
});

module.exports = app;

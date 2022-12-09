// For environment constiables
const dotenv = require('dotenv');
dotenv.config();

// Install Aylien sdk
const AylienNewsApi = require("aylien-news-api");

const defaultClient = AylienNewsApi.ApiClient.instance;

const app_id = defaultClient.authentications["app_id"];
app_id.apiKey = process.env.APP_ID;

const app_key = defaultClient.authentications["app_key"];
app_key.apiKey = process.env.API_KEY;

const api = new AylienNewsApi.DefaultApi();


// Setting express
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})

app.get("/news", function (req, res) {
    const opts = {
        title: req.query.name,
        publishedAtStart: "NOW-7DAYS",
        publishedAtEnd: "NOW"
    };

    api.listStories(opts, function (error, data, response) {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(data.stories);
        }
    });
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
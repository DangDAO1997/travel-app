// Declare ENV
const env = require("dotenv");
env.config();

const PORT = process.env.PORT;
const GEONAMES_API_KEY = process.env.GEONAMES_API_KEY;
const WEATHERBIT_API_KEY = process.env.WEATHERBIT_API_KEY;
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
console.log(GEONAMES_API_KEY, WEATHERBIT_API_KEY, PIXABAY_API_KEY);

// Require Express to run server and routes
const express = require("express");
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Init cors
const cors = require("cors");
app.use(cors());

// Init static folder
app.use(express.static("dist"));

// init api travel
app.get("/travel", async function (req, res) {
  const { city } = req.query;
  const geoData = await (await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${GEONAMES_API_KEY}`)).json();
  const weather = await (await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${geoData.geonames[0].lat}&lon=${geoData.geonames[0].lng}&key=${WEATHERBIT_API_KEY}`)).json();
  const photo = await (await fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${city}&image_type=photo`)).json();

  let data = {
    temp: weather.data[0].temp,
    image: photo.hits[0].webformatURL
  }
  res.send(data);
})


// Init index.html
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});


// Start server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

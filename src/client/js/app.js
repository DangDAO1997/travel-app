/* Global Variables */

const formE = document.getElementById("form");
const zipE = document.getElementById("zip");
const btnGenerateE = document.getElementById("generate");

const dateE = document.getElementById("date");
const tempE = document.getElementById("temp");
const contentE = document.getElementById("content");

// Define api url
const baseUrl = 'http://localhost:8080/travel';

// handle api
const getTravel = ()=>{
   const city = zipE.value;
    fetch(`${baseUrl}?city=${city}`)
    .then(res=>res.json())
    .then(data=>{
        tempE.innerHTML = `Temp: ${data.temp} Celsius`;
        contentE.innerHTML = `<img src="${data.image}"/>`;
    })
    .catch(e=>console.log(e));
}


btnGenerateE.addEventListener('click', getTravel);

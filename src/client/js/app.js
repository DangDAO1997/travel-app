/* Global Variables */

import { getTravel } from './getTravel'

const formE = document.getElementById("form");
const zipE = document.getElementById("zip");
const timeE = document.getElementById("time");
const btnGenerateE = document.getElementById("generate");

const dateE = document.getElementById("date");
const tempE = document.getElementById("temp");
const contentE = document.getElementById("content");

// get date and city then call api and show travel result
const click = () => {
    const dateDes = Date.parse(timeE.value);
    const now = new Date().getTime();
    const remain = Math.floor((dateDes - now) / (24 * 60 * 60 * 1000));
    if(remain <= 0){
        alert("Time invalid");
        return;
    }
    getTravel(zipE.value, (data) => {
        dateE.innerHTML = `Remaining: ${remain} day`
        tempE.innerHTML = `Temp: ${data.temp} Celsius`;
        contentE.innerHTML = `<img src="${data.image}"/>`;
    })
};
btnGenerateE.addEventListener('click', click);

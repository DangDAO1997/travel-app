/* Global Variables */

import {getTravel} from './getTravel'

const formE = document.getElementById("form");
const zipE = document.getElementById("zip");
const btnGenerateE = document.getElementById("generate");

const dateE = document.getElementById("date");
const tempE = document.getElementById("temp");
const contentE = document.getElementById("content");

const click = ()=>{
    getTravel(zipE.value, (data)=>{
        tempE.innerHTML = `Temp: ${data.temp} Celsius`;
        contentE.innerHTML = `<img src="${data.image}"/>`;
    })
};
btnGenerateE.addEventListener('click', click);

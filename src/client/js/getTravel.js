const getTravel = (city, callback) => {
    if(city&&typeof city === 'string'){
        fetch(`http://localhost:8080/travel?city=${city}`)
        .then(res => res.json())
        .then(callback)
        .catch(e => console.log(e));
    }
}

export {getTravel}
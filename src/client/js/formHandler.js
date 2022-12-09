import {checkForName} from "./nameChecker"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(!checkForName(formText)){
        return;
    }
    
    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8080/news?name=${formText}`)
    .then(res => res.json())
    .then(res => {
        let data = "";
        for (const e of res) {
            data += `<br>${e.title}<br>`;
        }
        return data;
    })
    .then(function(res) {
        document.getElementById('results').innerHTML = res;
    })
}

export { handleSubmit }

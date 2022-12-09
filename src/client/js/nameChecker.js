function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);

    const re = new RegExp("^[a-zA-Z 0-9]+$");

    if (!re.test(inputText)) {
        alert("Name Invalid!");
        return false;
    }

    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ];

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
    return true;
}

export { checkForName }

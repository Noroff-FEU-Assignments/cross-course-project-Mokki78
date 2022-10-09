const colours = ["red", "white", "blue", "green"];

colours.forEach(function(item) {
    console.log(item);

});

function validateEmail(email) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const patternMatches = regEx.test(email);
    return patternMatches;

    if {
        validateEmail = true {
            returnMessage ="You have entered a valid email"
        }
        else{
            returnMessage= "You have not entered a valid email"
        }
    }
}


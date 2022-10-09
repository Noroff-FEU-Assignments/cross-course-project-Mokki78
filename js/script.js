
const form = document.querySelector(".contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#error-name");
const email = document.querySelector("#email");
const emailError = document.querySelector("#error-email");
const mobile = document.querySelector("#mobile");
const mobileError = document.querySelector("#error-mobile");

function validateForm() {
    Event.preventDefault();

    if(name.value.length > 0){
        nameError.style.display = "none";
    } else(name.value.length == 0);{
        nameError.style.display = "block";
    }
    
    if(email.value.length > 0){
        emailError.style.display = "none";
    }else(email.value.length == 0);{
        emailError.style.display = "block";
    }

    if(mobile.value.length > 0){
        mobileError.style.display = "none";
    }else(mobile.value.length == 0);{
        mobileError.style.display = "block";
    }
        
}

form.addEventListener("submit", validateForm);





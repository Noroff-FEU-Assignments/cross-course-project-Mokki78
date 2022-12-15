
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

const url = "http://localhost:10014/wp-json/wc/posts";
const productContainer = document.querySelector(".products");

async function getJackets() {
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        console.log(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getJackets();


function createHTML(products) 
    products.forEach(function(product){
        productContainer.innerHTML += `<div>
                                      <h2>${product.name}</h2>
                                      <img src="${product.image[0].src}" alt="${product.name}"
                                      <div>`;

    })





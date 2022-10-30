const womenUrl = "";
const productContainer = document.querySelector(".products");

async function getJackets() {
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getProducts();


function createHTML(products){
    products.forEach(function(product){
        productContainer.innerHTML +=
        `<div class="product">
          <h2>${product.name}</h2>
          <img src="${product.image[0].src}" alt="${product.name}">
        </div>;
    })
}
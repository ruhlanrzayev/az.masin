// Identify login page
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".right-content span:nth-child(5)");
    const loginContainer = document.querySelector(".login-container");
    const closeBtn = document.querySelector(".login-container i"); 

    loginBtn.addEventListener("click", function () {
        loginContainer.classList.add("active");
        document.body.style.overflow = "hidden"; 
    });

    closeBtn.addEventListener("click", function () {
        loginContainer.classList.remove("active");
        document.body.style.overflow = "auto"; 
    });
});

const inputsContainer = document.getElementById('inputsContainer')
const inputsAltContainer = document.getElementById('inputsAltContainer')
const productsContainer = document.getElementById('productsContainer')
const favoriteContainer = document.getElementById('favoriteContainer');
const favButton = document.getElementById('favoriteCont')
const homeButton = document.getElementById('homeCont')

// closeHome and showFav
favButton.onclick = () => {
    if(!favoriteContainer.classList.contains("showFav")) {
        inputsContainer.classList.add("closeHome")
        inputsAltContainer.classList.add("closeHome")
        productsContainer.classList.add("closeHome")
        favoriteContainer.classList.add("showFav")
    }
}

homeButton.onclick = () => {
    if(inputsContainer.classList.contains("closeHome")) {
        inputsContainer.classList.remove("closeHome")
        inputsAltContainer.classList.remove("closeHome")
        productsContainer.classList.remove("closeHome")
        favoriteContainer.classList.remove("showFav")
    }
}

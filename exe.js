
document.addEventListener("DOMContentLoaded", function() {
    const burgerButton = document.getElementById("burgerButton");
    const burgerLinks = document.getElementById("burgerLinks");
    const burgerLogo = document.getElementById("burgerLogo");

    burgerButton.addEventListener("click", function(event) {
        event.preventDefault();
        burgerLinks.classList.toggle("active");
        burgerLogo.classList.toggle("active");
    });
});

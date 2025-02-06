// Function to handle navigation menu (Already in web.js)
let sideMenu = document.getElementById("sidemenu");

function openmenu() {
    sideMenu.style.right = "0";
}

function closemenu() {
    sideMenu.style.right = "-250px";
}

// Smooth Scroll Effect for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Services Section Hover Animation
const serviceCards = document.querySelectorAll(".services-list div");

serviceCards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });
});

// Console Log to Confirm JavaScript is Loaded
console.log("Services page JavaScript loaded successfully!");

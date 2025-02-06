// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Hover Animation for Project Cards
const projectCards = document.querySelectorAll(".work");

projectCards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });
});

// Show Layer on Hover
projectCards.forEach(card => {
    const layer = card.querySelector(".layer");

    card.addEventListener("mouseover", () => {
        layer.style.height = "100%";
    });

    card.addEventListener("mouseout", () => {
        layer.style.height = "0";
    });
});

// Console Log for Debugging
console.log("Projects page JavaScript loaded successfully!");



let activeLink = document.querySelector(".nav-btn");

activeLink.addEventListener("click", () => {
     console.log("active link clicked");
});

// dark and light mode functionality!!

document.addEventListener("DOMContentLoaded", function () {
     const themeToggle = document.querySelector(".nav-bkcolor i");
     const body = document.body;
 
     // Check for saved user preference in local storage
     if (localStorage.getItem("theme") === "light") {
         body.classList.add("light-mode");
         themeToggle.classList.replace("fa-sun", "fa-moon");
     }
 
     themeToggle.addEventListener("click", function () {
         body.classList.toggle("light-mode");
 
         // Toggle icon (sun/moon)
         if (body.classList.contains("light-mode")) {
             themeToggle.classList.replace("fa-sun", "fa-moon");
             localStorage.setItem("theme", "light"); // Save preference
         } else {
             themeToggle.classList.replace("fa-moon", "fa-sun");
             localStorage.setItem("theme", "dark"); // Save preference
         }
     });
 });
 
 // for mobile devices!

 // Hamburger menu functionality

 document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");
    const closeBtn = document.getElementById("closeBtn");

    // Show mobile menu
    hamburger.addEventListener("click", function () {
        mobileNav.classList.add("active");
    });

    // Hide mobile menu
    closeBtn.addEventListener("click", function () {
        mobileNav.classList.remove("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
            mobileNav.classList.remove("active");
        }
    });
});



/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* ==========================================
   CLOSE MENU AFTER CLICK
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ==========================================
   STICKY HEADER SHADOW
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(

    ".service-card, .feature, .testimonial, .stat-card, .info-box, .contact-form"

);

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all .6s ease";

});

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        const name = form.querySelector('input[name="name"]').value.trim();

        const email = form.querySelector('input[name="email"]').value.trim();

        const message = form.querySelector("textarea").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length < 3) {

            alert("Please enter your full name.");

            e.preventDefault();

            return;

        }

        if (!emailRegex.test(email)) {

            alert("Please enter a valid email address.");

            e.preventDefault();

            return;

        }

        if (message.length < 10) {

            alert("Please enter at least 10 characters in your message.");

            e.preventDefault();

            return;

        }

    });

}


/* ==========================================
   SMOOTH BUTTON HOVER EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});



/* ==========================================
   OPTIONAL CONSOLE MESSAGE
========================================== */

console.log("ABC Accounting Website Loaded Successfully");

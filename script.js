/* ==========================================
   STICKY HEADER SHADOW
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
    } else {
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.08)";
    }

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
        topBtn.style.justifyContent = "center";
        topBtn.style.alignItems = "center";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ==========================================
   ANIMATE STATS
========================================== */

const counters = document.querySelectorAll(".stat h2");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = parseInt(counter.innerText);

            const count = parseInt(counter.dataset.count || 0);

            const increment = Math.ceil(target / speed);

            if (count < target) {

                const newValue = count + increment;

                counter.dataset.count = newValue;

                counter.innerText = newValue + "+";

                setTimeout(update, 15);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    if (!started && window.scrollY > stats.offsetTop - 500) {

        started = true;

        startCounter();

    }

});


/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    answer.style.display = "none";

    item.style.cursor = "pointer";

    item.addEventListener("click", () => {

        faqItems.forEach(i => {

            if (i !== item) {

                i.querySelector("p").style.display = "none";

            }

        });

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    ".card,.service-card,.review-card,.contact-card,.step,.condition-item,.about-boxes div"
);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";

});

window.addEventListener("scroll", reveal);

reveal();


/* ==========================================
   APPOINTMENT FORM
========================================== */

const form = document.querySelector(".appointment-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your appointment request has been submitted.");

        form.reset();

    });

}
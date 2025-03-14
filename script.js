const scrollContainer = document.getElementById("course-scroll");

function scrollCourses(distance) {
    scrollContainer.scrollBy({
        left: distance,
        behavior: "smooth",
    });
}

// Auto-scroll functionality
let autoScroll = setInterval(() => {
    scrollContainer.scrollBy({
        left: 350,
        behavior: "smooth",
    });
}, 3000);

// Pause auto-scroll on hover and resume on mouse leave
scrollContainer.addEventListener("mouseover", () => clearInterval(autoScroll));
scrollContainer.addEventListener("mouseleave", () => {
    autoScroll = setInterval(() => {
        scrollContainer.scrollBy({
            left: 350,
            behavior: "smooth",
        });
    }, 1000);
});

// JavaScript for fade-in and slide-up animation on page load
window.addEventListener("DOMContentLoaded", function () {
    const courseCards = document.querySelectorAll(".course-box");

    courseCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 500); // Each card appears with a delay (500ms between cards)
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeToggle.checked = true;
    }

    // Toggle theme and save preference
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });
});







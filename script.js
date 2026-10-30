
// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

// Add animation to sections and cards
document.querySelectorAll(
    ".section-heading, .about-card, .stat-card, .skill-card, .project-card, .education-card, .cert-card, .contact-card"
).forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});

// Initialize Lucide icons
lucide.createIcons();

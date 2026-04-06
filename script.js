// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Scroll animation for skills
window.addEventListener("scroll", () => {
  const skills = document.querySelectorAll(".skill-card");
  skills.forEach(skill => {
    const position = skill.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      skill.style.opacity = "1";
      skill.style.transform = "translateY(0)";
    }
  });
});

// Fake contact form submission
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");
form.addEventListener("submit", e => {
  e.preventDefault();
  message.textContent = "Thank you! Your message has been sent.";
  form.reset();
});

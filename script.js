// Typing Effect
const typedText = document.getElementById("typed-text");
const phrases = ["Software Engineer", "Web Developer", "Problem Solver"];
let index = 0, charIndex = 0, isDeleting = false;

function type() {
  const current = phrases[index];
  const updated = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
  typedText.textContent = updated;

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % phrases.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 60 : 120);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();

  // Scroll reveal animation for sections
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => observer.observe(section));
});

// Smooth Scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll to top button logic
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

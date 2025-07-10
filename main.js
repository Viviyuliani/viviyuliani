
// Mobile menu toggle
document.getElementById("mobile-menu-button")?.addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu?.classList.toggle("hidden");
});

// Profile slider
let currentSlide = 0;
const slider = document.getElementById("profile-slider");
const dots = document.querySelectorAll(".slider-dot");

function goToSlide(n) {
  currentSlide = n;
  slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle("bg-blue-500", index === currentSlide);
    dot.classList.toggle("bg-gray-300", index !== currentSlide);
  });
}

dots.forEach(dot => {
  dot.addEventListener("click", function () {
    goToSlide(parseInt(this.getAttribute("data-slide")));
  });
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % 3;
  goToSlide(currentSlide);
}, 5000);

function showSkillDetail(skillId) {
  const detailElement = document.getElementById(`${skillId}-detail`);
  detailElement?.classList.toggle("hidden");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
    document.querySelectorAll("nav a").forEach(link => link.classList.remove("active-section"));
    this.classList.add("active-section");
  });
});

window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  let current = "";
  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 150) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle("active-section", link.getAttribute("href") === `#${current}`);
  });
});

const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menuContainer = document.getElementById("menu-tab-container");
const pictureCarousel = document.querySelector(".picture-carousel");
const articleCarousel = document.querySelector(".article-carousel");
const slides = document.querySelectorAll(".picture-carousel picture");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentSlide = 0;
const maxSlide = slides.length - 1;

const toggleMenu = () => menuContainer.classList.toggle("open");

menuOpen.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);

menuContainer.addEventListener("click", (e) => {
    if (e.target === menuContainer) {
        menuContainer.classList.remove("open");
    }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < maxSlide) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  pictureCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  articleCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
});

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = maxSlide;
  }

  pictureCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  articleCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
});
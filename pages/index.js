// Filter functionality
const buttons = document.querySelectorAll(".filter__buttons button");
const items = document.querySelectorAll(".gallery__item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    items.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Modal functionality
const modal = document.getElementById("image-modal");
const modalImg = modal.querySelector(".modal-content");
const closeButton = modal.querySelector(".close-button");
const galleryItems = document.querySelectorAll(".gallery__item img");

galleryItems.forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("modal--active");
  });
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("modal--active");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("modal--active");
  }
});

// WhatsApp floating button functionality
const phoneNumber = "5514998199528";
const defaultMessage =
  "Olá! Tenho uma ideia de projeto e gostaria de solicitar um orçamento.";

(function setupWhatsappButton() {
  const a = document.getElementById("whatsapp-float");

  const encoded = encodeURIComponent(defaultMessage);
  const href = `https://wa.me/${phoneNumber}?text=${encoded}`;
  a.setAttribute("href", href);
})();

// Mobile navigation functionality
const burger = document.querySelector(".header__nav-burger");
const nav = document.querySelector(".header__nav-list");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Swiper.js functionality
const swiper = new Swiper(".mySwiper", {
  loop: true,

  speed: 2000,

  autoplay: {
    delay: 500,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Responsividade (Breakpoints):
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
  },
});

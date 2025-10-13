import GalleryFilter from "../src/components/GalleryFilter.js";
import ImageModal from "../src/components/ImageModal.js";
import WhatsappButton from "../src/components/WhatsappButton.js";
import MobileNav from "../src/components/MobileNav.js";

document.addEventListener("DOMContentLoaded", () => {
  new GalleryFilter(".filter__buttons button", ".gallery__item");

  new ImageModal("image-modal", ".gallery__item img");

  new WhatsappButton(
    "whatsapp-float",
    "5511971927873",
    "Olá! Tenho uma ideia de projeto e gostaria de solicitar um orçamento."
  );

  new MobileNav(".header__nav-burger", ".header__nav-list");

  new Swiper(".mySwiper", {
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
});

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

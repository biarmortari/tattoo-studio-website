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

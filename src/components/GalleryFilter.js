export default class GalleryFilter {
  constructor(buttonSelector, itemSelector) {
    this.buttons = document.querySelectorAll(buttonSelector);
    this.items = document.querySelectorAll(itemSelector);
    this.init();
  }

  init() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        this.filterItems(filter);
      });
    });
  }

  filterItems(filter) {
    this.items.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
}

class ImageModal {
  constructor(modalId, imageSelector) {
    this.modal = document.getElementById(modalId);
    this.modalImg = this.modal.querySelector(".modal-content");
    this.closeButton = this.modal.querySelector(".close-button");
    this.images = document.querySelectorAll(imageSelector);
    this.init();
  }

  init() {
    this.images.forEach((img) => {
      img.addEventListener("click", () => {
        this.modalImg.src = img.src;
        this.modal.classList.add("modal--active");
      });
    });

    this.closeButton.addEventListener("click", () => {
      this.modal.classList.remove("modal--active");
    });

    window.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.modal.classList.remove("modal--active");
      }
    });
  }
}
export default ImageModal;

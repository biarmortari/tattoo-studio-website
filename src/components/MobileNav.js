class MobileNav {
  constructor(burgerSelector, navSelector) {
    this.burger = document.querySelector(burgerSelector);
    this.nav = document.querySelector(navSelector);
    this.init();
  }

  init() {
    this.burger.addEventListener("click", () => {
      this.nav.classList.toggle("active");
    });

    this.nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        this.nav.classList.remove("active");
      });
    });
  }
}

export default MobileNav;

const headerHeight = document.querySelector(".header").offsetHeight;
let body = document.querySelector("body");
body.style.paddingTop = headerHeight + "px";

document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);
    if (scrollTarget) {
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// header burger

const headerBurgerBtn = document.querySelectorAll(".header__burger");
const headerModal = document.querySelector(".header__modal");
headerBurgerBtn.forEach((burger) => {
  burger.addEventListener("click", () => {
    if (!headerModal.classList.contains("headermodalactive")) {
      headerModal.classList.add("headermodalactive");
    }
  });
});

const headerModalCLose = document.querySelector(".header__modal-close");

headerModalCLose.addEventListener("click", () => {
  if (headerModal.classList.contains("headermodalactive")) {
    headerModal.classList.remove("headermodalactive");
  }
});

// header modal links
const headerModalLinks = document.querySelectorAll(".header__modal-links");
headerModalLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (headerModal.classList.contains("headermodalactive")) {
      headerModal.classList.remove("headermodalactive");
    }
  });
});

const cartModal = document.querySelector(".cart__modal");
const cartBtn = document.querySelectorAll(".cart__btn");
cartBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!cartBody.classList.contains("activemodalbody")) {
      cartBody.classList.add("activemodalbody");
    }
    if (!cartModal.classList.contains("cartmodalactive")) {
      cartModal.classList.add("cartmodalactive");
    }

    setTimeout(() => {
      cartBody.classList.remove("activemodalbody");
      cartModal.classList.remove("cartmodalactive");
    }, 3000);
  });
  const cartBtnClose = document.querySelector(".cart__modal-close");
  cartBtnClose.addEventListener("click", () => {
    cartBody.classList.remove("activemodalbody");
    cartModal.classList.remove("cartmodalactive");
  });
});

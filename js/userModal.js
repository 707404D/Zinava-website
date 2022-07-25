const userModal = document.querySelector(".user__modal");
const userBtn = document.querySelectorAll(".header__user");
const cartBody = document.querySelector("body");
userBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!cartBody.classList.contains("activemodalbody")) {
      cartBody.classList.add("activemodalbody");
    }
    if (!userModal.classList.contains("usermodalactive")) {
      userModal.classList.add("usermodalactive");
    }
  });
});

const userbtnClose = document.querySelector(".user__modal-close");
userbtnClose.addEventListener("click", () => {
  cartBody.classList.remove("activemodalbody");
  userModal.classList.remove("usermodalactive");
});

const modalBtnGetCode = document.querySelector(".user__modal-btn-getcode");
modalBtnGetCode.addEventListener("click", () => {
  const userWrapper = document.querySelector(".user__modal-wrapper");
  if (!userWrapper.classList.contains("activeusercode")) {
    userWrapper.classList.add("activeusercode");
  }
});

const modalBtnSign = document.querySelector(".user__modal-btn-sign");
modalBtnSign.addEventListener("click", () => {
  if (cartBody.classList.contains("activemodalbody")) {
    cartBody.classList.remove("activemodalbody");
  }
  if (userModal.classList.contains("usermodalactive")) {
    userModal.classList.remove("usermodalactive");
  }
  setTimeout(() => {
    const userWrapper = document.querySelector(".user__modal-wrapper");
    if (userWrapper.classList.contains("activeusercode")) {
      userWrapper.classList.remove("activeusercode");
    }
  }, 2000);
});

const btnCodeAgain = document.querySelector(".user__modal-codeagain");
btnCodeAgain.addEventListener("click", (e) => {
  e.preventDefault();
});

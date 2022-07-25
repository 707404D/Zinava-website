const cardSumWrapp = document.querySelector(".card__sum");

cardSumWrapp.addEventListener("click", (e) => {
  const cardBtnMinus = cardSumWrapp.querySelector(".card__minus");
  const cardBtnPlus = cardSumWrapp.querySelector(".card__plus");
  const cardCount = cardSumWrapp.querySelector(".card__sum-sum");
  if (e.target == cardBtnMinus) {
    if (cardCount.value > 1) {
      cardCount.value--;
    }
  }
  if (e.target === cardBtnPlus) {
    if (cardCount.value < 99) {
      cardCount.value++;
    }
  }
});

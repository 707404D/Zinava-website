const catalogBtnCol = document.querySelector(
  ".catalog__filter-view-btn-column"
);
const catalogBtnRow = document.querySelector(".catalog__filter-view-btn-row");
const catalogItemsWrapper = document.querySelector(".catalog__items");
const catalogFilterViewBtns = document.querySelector(".catalog__filter-view");
catalogBtnRow.addEventListener("click", () => {
  if (!catalogItemsWrapper.classList.contains("activeitemsrowview")) {
    catalogItemsWrapper.classList.add("activeitemsrowview");
  }
  catalogFilterViewBtns.classList.add("activerowview");
});
catalogBtnCol.addEventListener("click", () => {
  if (catalogItemsWrapper.classList.contains("activeitemsrowview")) {
    catalogItemsWrapper.classList.remove("activeitemsrowview");
  }
  catalogFilterViewBtns.classList.remove("activerowview");
});

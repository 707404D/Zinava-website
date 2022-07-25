const cardPreviewSmallItems = document.querySelectorAll(
  ".card__preview-small-item"
);
const cardPreviewBigItems = document.querySelectorAll(
  ".card__preview-big-item"
);

cardPreviewSmallItems.forEach(cardPreviewFn);

function cardPreviewFn(item) {
  item.addEventListener("click", function (e) {
    let tabId = item.getAttribute("data-href");
    let currentTab = document.querySelector(tabId);

    if (!item.classList.contains("activesmallitem")) {
      cardPreviewSmallItems.forEach(function (item) {
        item.classList.remove("activesmallitem");
      });
      item.classList.add("activesmallitem");

      cardPreviewBigItems.forEach(function (bigitem) {
        bigitem.classList.remove("activebigitem");
      });
      currentTab.classList.add("activebigitem");
    }
  });
}

document.querySelector(".card__preview-small-item").click();

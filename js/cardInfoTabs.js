const cardInfoTabs = document.querySelectorAll(".card__tabs-btn");
const cardInfoTabsCnt = document.querySelectorAll(".card__tabs-content");

cardInfoTabs.forEach(cardInfoTabsFn);

function cardInfoTabsFn(item) {
  item.addEventListener("click", function (e) {
    let tabId = item.getAttribute("data-href");
    let currentTab = document.querySelector(tabId);

    if (!item.classList.contains("activeinfotab")) {
      cardInfoTabs.forEach(function (item) {
        item.classList.remove("activeinfotab");
      });
      item.classList.add("activeinfotab");

      cardInfoTabsCnt.forEach(function (cnt) {
        cnt.classList.remove("activeinfocnt");
      });
      currentTab.classList.add("activeinfocnt");
      // filterBtnsCnt.forEach(function (cnt) {
      //   cnt.classList.remove("activecntmenu");
      // });
      // currentTabWrapper.classList.remove("activewrapmenu");
    }
  });
}

document.querySelector(".card__tabs-btn").click();



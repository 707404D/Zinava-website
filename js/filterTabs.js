const filterBtnsMenu = document.querySelectorAll(".catalog__filter-btn-menu");
const filterBtnsCnt = document.querySelectorAll(".catalog__filter-content");

filterBtnsMenu.forEach(filterTabsFn);

function filterTabsFn(item) {
  item.addEventListener("click", function (e) {
    let tabId = item.getAttribute("data-href");
    let currentTab = document.querySelector(tabId);
    let currentTabWrapper = currentTab.parentNode;

    if (item.classList.contains("activebtnmenu")) {
      filterBtnsMenu.forEach(function (item) {
        item.classList.remove("activebtnmenu");
      });
      filterBtnsCnt.forEach(function (cnt) {
        cnt.classList.remove("activecntmenu");
      });
      currentTabWrapper.classList.remove("activewrapmenu");
    } else {
      filterBtnsMenu.forEach(function (item) {
        item.classList.remove("activebtnmenu");
      });

      item.classList.add("activebtnmenu");

      filterBtnsCnt.forEach(function (cnt) {
        cnt.classList.remove("activecntmenu");
      });
      currentTab.classList.add("activecntmenu");
      currentTabWrapper.classList.add("activewrapmenu");
    }
  });
}

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".catalog__filter-btn-menu") &&
    !e.target.closest(".catalog__filter-content") &&
    !e.target.closest(".catalog__filter-cats-content")
  ) {
    filterBtnsMenu.forEach(function (item) {
      item.classList.remove("activebtnmenu");
    });

    filterBtnsCnt.forEach(function (cnt) {
      cnt.classList.remove("activecntmenu");
    });
    const cntwrapper = document.querySelector(".catalog__filter-cats-content");
    cntwrapper.classList.remove("activewrapmenu");
  }
});

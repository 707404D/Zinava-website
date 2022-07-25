const selects = () => {
  const popularItemsSelects = document.querySelectorAll(
    ".popular__item-select"
  );
  popularItemsSelects.forEach((select) => {
    const popularItemSelectDefault = select.querySelector(
      ".popular__item-select-default"
    );
    if (popularItemSelectDefault) {
      const popularItemLabels = select.querySelectorAll(
        ".popular__item-select-label"
      );

      // Toggle menu
      popularItemSelectDefault.addEventListener("click", () => {
        if ("active" === select.getAttribute("data-state")) {
          select.setAttribute("data-state", "");
        } else {
          select.setAttribute("data-state", "active");
        }
      });

      // Close when click to option
      for (let i = 0; i < popularItemLabels.length; i++) {
        popularItemLabels[i].addEventListener("click", (evt) => {
          popularItemSelectDefault.textContent = evt.target.textContent;
          select.setAttribute("data-state", "");
        });
      }
    }
  });
};

selects();

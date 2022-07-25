// счетчик кол-ва товаров для всех товаров в корзине
const cartCounts = document.querySelectorAll(".cart__count");

cartCounts.forEach((counter) => {
  counter.addEventListener("click", (e) => {
    const cartBtnMinus = counter.querySelector(".cart__minus");
    const cartBtnPlus = counter.querySelector(".cart__plus");
    const cartCount = counter.querySelector(".cart__count-sum");
    if (e.target == cartBtnMinus) {
      if (cartCount.value > 1) {
        cartCount.value--;
        cartSumFn();
      }
    }
    if (e.target === cartBtnPlus) {
      if (cartCount.value < 99) {
        cartCount.value++;
        cartSumFn();
      }
    }
  });
});

// подсчитываем общую сумму
const cartSumFn = () => {
  const cartItems = document.querySelectorAll(".cart__item");
  const totalPriceArr = [];

  cartItems.forEach((cartItem) => {
    const totalPriceItems = () => {
      const itemPrice = cartItem.querySelector(".cart__price").innerText;
      const itemCount = cartItem.querySelector(".cart__count-sum").value;
      const itemSumPrice = parseInt(itemPrice) * parseInt(itemCount);
      return itemSumPrice;
    };
    const result = totalPriceItems();
    totalPriceArr.push(result);
  });

  const totalPrice = totalPriceArr.map((i) => (x += i), (x = 0)).reverse()[0];
  const cartSum = document.querySelector(".cart__sum");
  cartSum.innerText = totalPrice;

  const cartDeliveryFn = () => {
    const cartDelivPrice = document.querySelector(".cart__delivery-price");

    if (+cartSum.innerText >= 50) {
      cartDelivPrice.innerText = "Бесплатная доставка";
      cartDelivPrice.classList.add("cart__delivery-price-free");
    } else {
      cartDelivPrice.classList.remove("cart__delivery-price-free");
      cartDelivPrice.innerHTML = `Бесплатная доставка при заказе от <span class="cart__delivery-sum">50</span> <span>byn</span>`;
    }
  };
  cartDeliveryFn();
};

cartSumFn();

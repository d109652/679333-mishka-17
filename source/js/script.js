var modal = document.querySelector(".modal");
var weekProduct = document.querySelector(".product-card__order");
var cartProduct = document.querySelectorAll(".item__cart")

if (document.querySelector(".product-card__order")) {
  weekProduct.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
  })
}

if (document.querySelector(".modal")) {
  for (var i = 0; i < cartProduct.length; i++) {
    cartProduct[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modal.classList.add("modal-show");
    })
  }
}

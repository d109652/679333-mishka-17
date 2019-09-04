var modal = document.querySelector(".modal");
var weekProduct = document.querySelector(".product-card__order");
var cartProduct = document.querySelectorAll(".item__cart")
var cartProductArray = Array.prototype.slice.call(cartProduct);

weekProduct.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
})

if (document.querySelector(".modal")) {
  var modalOverlay = document.querySelector(".modal"),
    modalButtons = document.querySelectorAll(".item__cart");
  modalButtonArray = Array.prototype.slice.call(modalButtons);

  modalButtonArray.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      modalOverlay.classList.add("modal-show");
    });
  });
}

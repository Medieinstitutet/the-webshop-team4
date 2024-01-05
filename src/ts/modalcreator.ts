// import { addProductToBasket } from "./main";
import { Products } from "./models/products";
import { addToCartClicked } from "./main";

export function updateModalContent(product: Products) {
  const modal = document.getElementById(
    "content-information"
  ) as HTMLDivElement;

  modal?.classList.remove("modalHidden");

  //Create html for Modal
  const modalTitle = document.createElement("h2");
  const modalImage = document.createElement("img");
  const modalImgContainer = document.createElement("div");
  const modalPrice = document.createElement("p");
  const modalDescription = document.createElement("p");
  const modalColor = document.createElement("h4");
  const modalCloseBtn = document.createElement("button");
  const modalTextContainer = document.createElement("div");
  modalCloseBtn.className = "closeButton";

  //Apply content in Modal elements
  modalTitle.innerHTML = product.title;
  modalPrice.innerHTML = "Price: " + product.price.toString() + " kr";
  modalDescription.innerHTML = "Description: " + product.description;
  modalImage.src = product.image;
  modalColor.innerHTML = "Color: " + product.color;
  modalCloseBtn.innerHTML = `<i class="bi bi-x-circle-fill"></i>`;
  modalImgContainer.appendChild(modalImage);

  modal.innerHTML = "";

  modal?.appendChild(modalCloseBtn);
  modal?.appendChild(modalImgContainer);
  modal?.appendChild(modalTextContainer);
  modalTextContainer?.appendChild(modalTitle);
  modalTextContainer?.appendChild(modalPrice);
  modalTextContainer?.appendChild(modalDescription);
  modalTextContainer?.appendChild(modalColor);

  modalTitle.className = "modal-card__title";
  modalImage.className = "modal-card__image";
  modalImgContainer.className = "modal-card__img-container";
  modalPrice.className = "modal-card_price";
  modalDescription.className = "modal-card_description";
  modalTextContainer.className = "modal-card__text";

  const addBtn = document.createElement("button");
  addBtn.innerHTML = '<i class="bi bi-cart-plus"></i> Add Product';
  addBtn.className = "modal-card__button";
  modal?.appendChild(addBtn);

  addBtn.addEventListener("click", () => {
    addToCartClicked(product);
  });

  modalCloseBtn.addEventListener("click", () => {
    modal?.classList.add("modalHidden");
  });
}

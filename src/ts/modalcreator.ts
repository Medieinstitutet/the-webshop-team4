// import { addProductToBasket } from "./main";
import { Products } from "./models/products";
import { addProduct } from "./main";


export function updateModalContent(product: Products) {
    const modal = document.getElementById("content-information") as HTMLDivElement;

    modal?.classList.remove("modalHidden");
  
    //Create html for Modal
    const modalTitle = document.createElement("h3");
    const modalImage = document.createElement("img");
    const modalImgContainer = document.createElement("div");
    const modalPrice = document.createElement("p");
    const modalDescription = document.createElement("p");
    const modalColor = document.createElement("h4");
    const modalCloseBtn = document.createElement("button");
  
    //Apply content in Modal elements
    modalTitle.innerHTML = product.title;
    modalPrice.innerHTML = product.price.toString() + " kr";
    modalDescription.innerHTML = product.description;
    modalImage.src = product.image;
    modalColor.innerHTML = "color:" + product.color;
    modalCloseBtn.innerHTML=`<i class="bi bi-x"></i>`;
    modalCloseBtn.className="btn-close";
  
    modalImgContainer.appendChild(modalImage);
    
  
    modal.innerHTML = "";
    modal?.appendChild(modalCloseBtn);
    modal?.appendChild(modalImgContainer);
    modal?.appendChild(modalTitle);
    modal?.appendChild(modalPrice);
    modal?.appendChild(modalDescription);
    modal?.appendChild(modalColor);
  
    modalTitle.className = "modal-card__title";
    modalImage.className = "modal-card__image";
    modalImgContainer.className = "modal-card__img-container";
    modalPrice.className = "modal-card_price";
    modalDescription.className = "modal-card_description";
  
    const addBtn = document.createElement("button");
    addBtn.innerHTML = '<i class="bi bi-cart-plus"></i> Add Product';
    addBtn.className = "modal-card__button";
    modal?.appendChild(addBtn);

   

   
    modalCloseBtn.addEventListener("click", () => {
      modal?.classList.add("modalHidden");
    });
  }
  
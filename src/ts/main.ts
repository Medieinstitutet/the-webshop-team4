import "./../scss/style.scss";
import { Products } from "./models/products";
import { updateModalContent } from "./modalcreator.ts";
import { updateCheckoutContent } from "./checkcreator.ts";

//----------------Hamburger Menu Functions-----------------------
const menuBtn = document.querySelector(".hamburger") as HTMLButtonElement;
const hamburgerNav = document.querySelector(".hamburgerNav") as HTMLElement;
const banner = document.querySelector(".banner") as HTMLElement;

//Add a listener to listen after click on hamburger menu icon
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("isActive");
  hamburgerNav.classList.toggle("isActive");
  banner.classList.toggle("isActive");
});

//------------------ DATABASE ---------------------
/* Kategorier
1. Chairs
2. Couches
3. Tables
4. Beds
*/
const product1 = new Products(
  1,
  "Lugnvik",
  1679,
  "https://i.imgur.com/Xh1jbqe.png",
  "Dark brown oakwood chair with leather cushion",
  "Chairs",
  "Oak"
);
const product2 = new Products(
  2,
  "Aspelund",
  1498,
  "https://i.imgur.com/DlYgzC6.png",
  "Modern oakwood chair, with comfy seat cushion in leather",
  "Chairs",
  "Oak"
);
const product3 = new Products(
  3,
  "Sarek",
  3219,
  "https://i.imgur.com/K00Kozt.png",
  "Victorian chair in brown pinewood, with black fabric cushion",
  "Chairs",
  "Pine"
);
const product4 = new Products(
  4,
  "Princeton",
  4398,
  "https://i.imgur.com/tmetJY1.png",
  "Luxuorius victorian inspired chair with grey velvet cushions, painted with metallic bronze paint",
  "Chairs",
  "Bronze"
);
const product5 = new Products(
  5,
  "Norrebro",
  798,
  "https://i.imgur.com/Z1KGkvL.png",
  "Victorian inspired and golden painted chair with beige velvet cushions and armrests",
  "Chairs",
  "Gold"
);
const product6 = new Products(
  6,
  "Albany",
  8339,
  "https://i.imgur.com/gQfVqiJ.png",
  "2 seat couch",
  "Couches",
  "Beige"
);
const product7 = new Products(
  7,
  "Matara",
  11199,
  "https://i.imgur.com/SKstywQ.png",
  "2 seat couch",
  "Couches",
  "Orange"
);
const product8 = new Products(
  8,
  "Denton",
  4164,
  "https://i.imgur.com/Txp0v1I.jpg",
  "Description 8",
  "Couches",
  "Vit"
);
const product9 = new Products(
  9,
  "Baltimore",
  3659,
  "https://i.imgur.com/FdyNuIT.jpg",
  "Description 9",
  "Couches",
  "Brun"
);
const product10 = new Products(
  10,
  "Wyoming",
  7699,
  "https://i.imgur.com/FGydSor.jpg",
  "Description 10",
  "Couches",
  "Grå"
);
const product11 = new Products(
  11,
  "Touluse",
  1679,
  "https://i.imgur.com/Cw4H6Ep.png",
  "Description 11",
  "Tables",
  "Rosa"
);
const product12 = new Products(
  12,
  "Grenelle",
  689,
  "https://i.imgur.com/0oz7OrW.jpg",
  "Description 12",
  "Tables",
  "Cyan"
);
const product13 = new Products(
  13,
  "Vernon",
  3249,
  "https://i.imgur.com/QGxc8QF.jpg",
  "Description 13",
  "Tables",
  "Magenta"
);
const product14 = new Products(
  14,
  "Futo",
  2499,
  "https://i.imgur.com/c4ACTev.jpg",
  "Description 14",
  "Tables",
  "Lime"
);
const product15 = new Products(
  15,
  "Walle",
  1299,
  "https://i.imgur.com/mAhn51f.jpg",
  "Description 15",
  "Tables",
  "Turquoise"
);
const product16 = new Products(
  16,
  "Eira",
  14399,
  "https://i.imgur.com/fOC7U9k.png",
  "Description 16",
  "Beds",
  "Guld"
);
const product17 = new Products(
  17,
  "Pelow",
  7899,
  "https://i.imgur.com/AI3tx7c.png",
  "Description 17",
  "Beds",
  "Silver"
);
const product18 = new Products(
  18,
  "Dermy",
  23679,
  "https://i.imgur.com/i2o6DOJ.png",
  "Description 18",
  "Beds",
  "Bronze"
);
const product19 = new Products(
  19,
  "Tiveden",
  30598,
  "https://i.imgur.com/5nQHJ9O.png",
  "Description 19",
  "Beds",
  "Platinum"
);
const product20 = new Products(
  20,
  "Skene",
  26849,
  "https://i.imgur.com/BXbg11X.png",
  "Description 20",
  "Beds",
  "Ruby"
);
//-------------Create an array of the objects---------------
const productsArray: Products[] = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
];

//Create basket array
let basket: Products[] = JSON.parse(
  localStorage.getItem("shoppingCart") ?? "[]"
);
const basketContainer = document.getElementById("appBasket") as HTMLDivElement;

//------------------------------- BASKET -----------------------------
//Create function to handle basket and it's HTML
const renderBasket = () => {
  if (basketContainer !== null) {
    basketContainer.innerHTML = "";
  }
  let totalQuantity = 0;
  for (let i = 0; i < basket.length; i++) {
    totalQuantity += basket[i].quantity;
    const noticeOnCart = document.getElementById(
      "noticeOnCart"
    ) as HTMLParagraphElement;

    if (noticeOnCart) {
      noticeOnCart.innerHTML = totalQuantity.toString();
    }

    // create basket elements
    const basketProductContainer = document.createElement("div");
    const basketProductTitle = document.createElement("p");
    const basketProductPrice = document.createElement("p");
    const basketImgContainer = document.createElement("div");
    const basketImg = document.createElement("img");
    const basketProductQuanitity = document.createElement("p");
    const basketRemoveButton = document.createElement("button");
    const increaseQuantityButton = document.createElement("button");
    const decreaseQuantityButton = document.createElement("button");

    //Add Classnames
    basketProductContainer.className = "basket__productContainer";
    basketProductTitle.className = "basket__title";
    basketProductPrice.className = "basket__price";
    basketImg.className = "basket__img";
    basketImgContainer.className = "basket__img-container";
    basketProductQuanitity.className = "basket__quantity";
    basketRemoveButton.className = "basketRemove";
    increaseQuantityButton.className = "basketIncreaseQuantity";
    decreaseQuantityButton.className = "basketDecreaseQuantity";

    // Add content to basket elements
    basketProductPrice.innerHTML = basket[i].price.toString() + " kr";
    basketProductTitle.innerHTML = basket[i].title;
    basketProductQuanitity.innerHTML = basket[i].quantity.toString();
    basketImg.src = basket[i].image;
    basketRemoveButton.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    increaseQuantityButton.innerHTML =
      '<i class="fa-solid fa-circle-plus"></i>';
    decreaseQuantityButton.innerHTML =
      '<i class="fa-solid fa-circle-minus"></i>';

    // Appended basket elements to html
    basketImg.appendChild(basketImgContainer);
    basketProductContainer.appendChild(basketImg);
    basketProductContainer.appendChild(basketProductTitle);
    basketProductContainer.appendChild(decreaseQuantityButton);
    basketProductContainer.appendChild(basketProductQuanitity);
    basketProductContainer.appendChild(increaseQuantityButton);
    basketProductContainer.appendChild(basketProductPrice);
    basketProductContainer.appendChild(basketRemoveButton);

    basketContainer?.appendChild(basketProductContainer);

    //When user increase quantity
    increaseQuantityButton.addEventListener("click", () => {
      basket[i].quantity++;
      updateShoppingCart();
      renderBasket();
    });
    //When user decrease quantity
    decreaseQuantityButton.addEventListener("click", () => {
      basket[i].quantity--;

      //Checks if quantity is 0 and if it is remove product from basket
      if (basket[i].quantity < 1) {
        basket.splice(i, 1);
      }
      updateShoppingCart();
      renderBasket();
    });

    //When user clicks on the remove button
    basketRemoveButton.addEventListener("click", () => {
      basket.splice(i, 1);
      updateShoppingCart();
      renderBasket();
    });
  }

  // Show the total price of products in the shopping cart

  let totalPrice = 0;
  for (let i = 0; i < basket.length; i++) {
    totalPrice += basket[i].price * basket[i].quantity;
  }

  if (totalPrice === 0) {
    const totalPricePharagraph = document.createElement("h3");
    basketContainer?.appendChild(totalPricePharagraph);
    totalPricePharagraph.className = "total-price";
    totalPricePharagraph.innerHTML = "Your Shopping cart is empty";
    //renderBasket();
  } else {
    const totalPricePharagraph = document.createElement("h3");
    basketContainer?.appendChild(totalPricePharagraph);
    totalPricePharagraph.className = "total-price";
    totalPricePharagraph.innerHTML = "Total price: " + totalPrice + " kr";
  }

  //Make Checkout button active if there is products in basket
  const basketBtn = document.getElementById(
    "basket__button"
  ) as HTMLButtonElement;
  if (basketBtn) {
    if (basket.length > 0) {
      basketBtn.style.display = "block";
    } else {
      basketBtn.style.display = "none";
    }
    updateShoppingCart();
  }
};

//----------------------------- PRODUCTS ------------------------
//Create and show Products on page
productsArray.forEach((product) => {
  const productsContainer = document.getElementById("app") as HTMLDivElement;
  //Create Element
  const productCard = document.createElement("div");
  const img = document.createElement("img");
  const imgContainer = document.createElement("div");
  const productPrice = document.createElement("p");
  const productName = document.createElement("h3");
  const addBtn = document.createElement("button");

  //Add ClassName
  productCard.className = "product-card";
  imgContainer.className = "product-card__img-container";
  img.className = "product-card__img";
  productPrice.className = "product-card__price";
  productName.className = "product-card__title";
  addBtn.className = "product-card__button";

  //Add content
  productName.innerHTML = product.title;
  img.src = product.image;
  productPrice.innerHTML = product.price + " kr";
  addBtn.innerHTML = '<i class="bi bi-cart-plus"></i> Add Product';

  //Place it on page
  imgContainer.appendChild(img);
  productCard?.appendChild(imgContainer);
  productCard?.appendChild(productName);
  productCard?.appendChild(productPrice);
  productCard?.appendChild(addBtn);
  productsContainer?.appendChild(productCard);

  //Listen for click to show product information
  imgContainer.addEventListener("click", () => {
    updateModalContent(product);
  });

  //Listen for click on "add to cart"
  addBtn.addEventListener("click", () => {
    addToCartClicked(product);
  });
});

export function addToCartClicked(product: Products) {
  if (basket.length == 0) {
    //if the length of the array is 0, add product to array
    basket.push(product);
  } else {
    let checkIndex = basket.findIndex((prod) => prod.id === product.id); //search if there is already an item with the same id

    if (checkIndex === -1) {
      // if checkIndex becomes -1 (when findIndex couldn't find an index which container the same id as product.id)
      basket.push(product);
    } else {
      // Products already in local storage, increase quantity
      basket[checkIndex].quantity = basket[checkIndex].quantity + 1;
    }
  }
  updateShoppingCart(); //Update localStorage
  renderBasket();
}

function updateShoppingCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(basket)); //add cart to localStorage
}

//------------------------------------ HANDLE CHECKOUT -----------------------------
const checkoutButton = document.getElementById("checkout") as HTMLButtonElement;
checkoutButton?.addEventListener("click", () => {
  spinnerLoad();
});

function spinnerLoad() {
  basket = [];
  updateShoppingCart();
  const hideMain = document.getElementById("checkoutMain") as HTMLElement; //Hämtar main där
  hideMain.className = "hideCheckoutInfo";

  const checkoutModal = document.getElementById(
    "checkout-information"
  ) as HTMLDivElement;
  checkoutModal.classList.toggle("modalHidden"); //Hides checkout informtion

  let setTimer: any;
  setTimer = setTimeout(updateCheckoutContent, 3000); //Show orderconfirmation after 3 seconds, updateCheckoutcontent is the function handling orderconfirmation conten
}

renderBasket(); //Update basket

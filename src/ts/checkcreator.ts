const spinner = document.getElementById("spinner") as HTMLDivElement;

//Everything that shows up after loading Spinner
export function updateCheckoutContent() {
  const checkoutModal = document.getElementById(
    "checkout-information"
  ) as HTMLDivElement;

  const orderConfirmation = document.createElement("div");
  const orderNumber = document.createElement("p");
  const thanksForOrder = document.createElement("h2");
  const emailSent = document.createElement("h3");
  const orderDate = document.createElement("p");
  const checkmark = document.createElement("p");
  const backBtn = document.createElement("button");
  backBtn.innerHTML = `<a href="index.html">Back to startpage</a>`;
  backBtn.className = "toStart-btn";

  orderNumber.innerHTML =
    "Order no.: " + Math.floor(100000 + Math.random() * 900000).toString();
  orderDate.innerHTML = "Order date: " + new Date().toDateString();
  thanksForOrder.innerHTML = "Thank you for your order!";
  emailSent.innerHTML =
    "Your order has been received and an confirmation has been sent to your email.";
  checkmark.innerHTML = '<i class="fas fa-check-circle"></i>';

  orderConfirmation.className =
    "orderConfirmContainer orderHidden animate-orderConfirmation";
  orderNumber.className = "orderNumber";
  orderDate.className = "orderDate";
  thanksForOrder.className = "thanksOrder";
  emailSent.className = "emailSent";
  checkmark.className = "checkmarkOrder";

  spinner.classList.toggle("loader");
  orderConfirmation.classList.toggle("orderHidden");

  orderConfirmation.appendChild(checkmark);
  orderConfirmation.appendChild(thanksForOrder);
  orderConfirmation.appendChild(emailSent);
  orderConfirmation.appendChild(orderNumber);
  orderConfirmation.appendChild(orderDate);
  orderConfirmation.appendChild(backBtn);
  checkoutModal?.appendChild(orderConfirmation);
}

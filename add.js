function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
let counterNotification = 0;   
let notification = document.querySelector("#notificationcart") ;
// console.log(counterNotification)
let cartButton = document.querySelectorAll(".cartButton");
if (counterNotification == 0 ) {
  notification.style.display ="none"
}

cartButton.forEach((btn) => {
  btn.addEventListener("click", addCart);
});
// cartButton.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     // Change the text of the clicked button to "Added"
//     btn.textContent = "Added";
//     // btn.textContent = "ADD";
//   });
// });
let itemSize = [];
// let totalcard = document.querySelector(".total").style.display = "none"
function PriceDisplay() {
  
  PriceArray = [];
  let FinalPricetobeDisplay = 0;

  let PriceCart = document.getElementsByClassName("productPrizeCart");
  for (const element of PriceCart) {
    let final = element.textContent;
    let ToInt = parseInt(final);
    PriceArray.push(ToInt);
    // console.log(PriceArray)
  }
  for (let i = 0; i < PriceArray.length; i++) {
    FinalPricetobeDisplay = FinalPricetobeDisplay + PriceArray[i];
  }
  // console.log(FinalPricetobeDisplay);
  let totalvalue = (document.querySelector(".PriceValue").innerHTML =
    FinalPricetobeDisplay);
  //   if (FinalPricetobeDisplay > 0) {
  //     document.querySelector(".total").style.display ="block";
  //  }
}
function addCart() {
  let productContainer = this.parentElement.parentElement;
  // let totalcard = document.querySelector(".total").style.display = "block"
  // let totalvalue = document.querySelector(".PriceValue").style.display = "block"
  // console.log(productContainer)
  let productSize = productContainer.querySelector(".productSize").innerHTML;
  let productPrize = productContainer.querySelector(".productPrize").innerHTML;
  let productTitle = productContainer.querySelector(".productTitle").innerHTML;
  let productid = Math.random().toString(36).substring(7);
  let productImg = productContainer.querySelector(".productImg").src;
  // console.log(`<img src="${productImg}">`)
  // console.log(productImg);
  // console.log(productSize)
  // console.log(productPrize)
  // console.log(productTitle)
  let newproduct = {
    productTitle,
    productSize,
    productPrize,
    productid,
    productImg,
  };
  // 2 approche of doing the same thing.
  // if (itemSize.some(product => product.productTitle === newproduct.productTitle)) {
  //   alert("item already added")

  //   }
  if (itemSize.find((elm) => elm.productTitle === newproduct.productTitle)) {
    alert("item already added");
  } else {
    itemSize.push(newproduct);
     console.log(itemSize)
     this.textContent = "ADDED";
    let newproductElement = createCartProduct(
      productPrize,
      productSize,  
      productTitle,
      productid,
      productImg
    );
    let element = document.createElement("div");
    element.innerHTML = newproductElement;
    let createBasket = document.querySelector(".cartContent");
    createBasket.append(element);
    counterNotification++;
    notification.innerHTML = counterNotification;
    if (counterNotification > 0) {
      notification.style.display ="block"
    } 
    PriceDisplay();
  }
}

function createCartProduct(
  productPrize,
  productSize,
  productTitle,
  productid,
  productImg
) {
  return `<div id=${productid} class="cardcart" >
 <div class="DivproductImg">
  <img id="productImg" src="${productImg}" alt="" srcset="">
  </div>
  <div class="productTitleC">
  <h1 id="ff" >${productTitle}</h1>
  </div>
  <div class="cartProductSize">

  <label for="shoes" class="productSize"><span>size: </span>${productSize}</label>
  </div>
<div class="card-price">
<p1>price:<span class="productPrizeCart" class="productPrize">${productPrize}</span></p1>
</div>
<div id="removecard" >
<button type="button" class="btn" onclick="removeItem(this)" data-cardID=${productid}><img src="Images/trash.png"/></button>

</div>


</div>


  `;
}
function removeItem(element) {
  // console.log(title)
  const cardId = element.getAttribute("data-cardID");
  // console.log(cardId)
  const cardElement = document.getElementById(cardId);
  // console.log(cardElement)
  let removeElmId = itemSize.findIndex((elem) => {
    return elem.productid === cardId;
  });
  itemSize.splice(removeElmId, 1);
  PriceArray.splice(removeElmId, 1);
  // console.log(PriceArray)
  cardElement.remove();
  counterNotification--;
  notification.innerHTML = counterNotification;
  if (counterNotification === 0) {
    notification.style.display ="none"
  } 
  //console.log(itemSize)
  PriceDisplay();

}

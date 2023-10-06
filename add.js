
function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
let cartButton = document.querySelectorAll(".cartButton")

cartButton.forEach((btn)=>{
  btn.addEventListener("click",addCart)
  
})
cartButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Change the text of the clicked button to "Added"
    btn.textContent = "Added";
  });
});
let itemSize =[];
// let totalcard = document.querySelector(".total").style.display = "none"
function PriceDisplay()
{  
   PriceArray = [];
  let FinalPricetobeDisplay= 0;
 
let id = document.getElementsByClassName("productPrizeCart"
);
for (const element of id) {
  let final = element.textContent
    let ToInt = parseInt(final); 
    PriceArray.push(ToInt);
    // console.log(PriceArray)

}
for(let i= 0;i<PriceArray.length;i++)
    {   FinalPricetobeDisplay = FinalPricetobeDisplay + PriceArray[i];
    }
  // console.log(FinalPricetobeDisplay);
    let totalvalue = document.querySelector(".PriceValue"
  ).innerHTML =FinalPricetobeDisplay ;
//   if (totalvalue <1) {
//     document.querySelector(".total").style.display ="none";
//  }   
  
}
function addCart()
{

let productContainer = this.parentElement.parentElement;
// let totalcard = document.querySelector(".total").style.display = "block"
// let totalvalue = document.querySelector(".PriceValue").style.display = "block"
// console.log(productContainer)
let productSize = productContainer.querySelector(".productSize").innerHTML;
let productPrize = productContainer.querySelector(".productPrize").innerHTML;
let productTitle = productContainer.querySelector(".productTitle").innerHTML;
let  productid = Math.random().toString(36).substring(7);
let productImg = productContainer.querySelector(".productImg").src;
// console.log(`<img src="${productImg}">`)
// console.log(productImg);
// console.log(productSize)
// console.log(productPrize)
// console.log(productTitle)
 let newproduct = {productTitle,productSize,productPrize,productid,productImg};
  // console.log(newproduct)
  // if (itemSize.some(product => product.productTitle === newproduct.productTitle)) {
  //   alert("item already added")
      
  //   }
  if (itemSize.find(elm => elm.productTitle === newproduct.productTitle )) {
    alert("item already added")
    
  }
  else
  {
  itemSize.push(newproduct);
  //  console.log(itemSize)
  //ddd
  let newproductElement = createCartProduct(productPrize, productSize, productTitle,productid,productImg);
  let element = document.createElement("div");
  element.innerHTML = newproductElement;
  let createBasket = document.querySelector(".cartContent");
  createBasket.append(element);
  PriceDisplay();
  }
}


function createCartProduct(productPrize,productSize,productTitle,productid,productImg)
{    
  
   return `<div id=${productid} class="cardcart" >
 
  <img id="productImg" src="${productImg}" alt="" srcset="">
  <h1 id="ff" class="productTitleC">${productTitle}</h1>
  <label for="shoes" class="productSize">${productSize}</label>
<div class="card-price">
<p1>price :<span class="productPrizeCart" class="productPrize">${productPrize}</span></p1>
</div>
<div id="removecard" >
<button type="button" class="btn" onclick="removeItem(this)" data-cardID=${productid}><img src="close.png"/></button>

</div>


</div>


  ` 

}
function removeItem(element) {
  // console.log(title)
  const cardId = element.getAttribute("data-cardID");
  // console.log(cardId)
  const cardElement = document.getElementById(cardId);
  // console.log(cardElement)
  let removeElmId = itemSize.findIndex((elem)=>{return elem.productid === cardId});
  itemSize.splice(removeElmId,1);
  PriceArray.splice(removeElmId,1);
  // console.log(PriceArray)
  cardElement.remove();
  //console.log(itemSize)
  PriceDisplay();
}

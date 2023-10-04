// function popupcart()
// {  
//     let element = document.getElementById("cartpopup");
//     let table = document.getElementsByClassName("cartbg");
    
//     element.classList.toggle("cartbg")
  
//   // Add some sample table content
//   table.innerHTML = `
//     <tr>
//       <th>Product</th>
//       <th>Price</th>
//     </tr>
//     <tr>
//       <td>Product 1</td>
//       <td>$10</td>
//     </tr>
//     <tr>
//       <td>Product 2</td>
//       <td>$15</td>
//     </tr>
//     <!-- Add more rows as needed -->
//   `;
  
 
//     // alert("hiii");
// }
function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// let uservalueTitle = document.querySelector(".productSize")
//  console.log(uservalueTitle.innerHTML);
//  let uservalueShoes = document.querySelector("#size")
//  console.log(uservalueShoes.innerHTML);
//  let uservaluePrice = document.querySelector("#price")
//  console.log(uservaluePrice.innerHTML);
 
//  const Userstorevalue = [uservaluePrice,uservalueShoes,uservalueTitle].innerHTML
//  console.log(Userstorevalue)

let cartButton = document.querySelectorAll(".cartButton")
// console.log(cartButton)
cartButton.forEach((btn)=>{
  btn.addEventListener("click",addCart)
})
let itemSize =[];
function addCart()
{

let productContainer = this.parentElement.parentElement;

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
   console.log(itemSize)
  
  let newproductElement = createCartProduct(productPrize, productSize, productTitle,productid,productImg)
let element = document.createElement("div");
element.innerHTML = newproductElement;
let createBasket = document.querySelector(".cartContent");
createBasket.append(element);
  }
}

function createCartProduct(productPrize,productSize,productTitle,productid,productImg)
{ 
  return `<div id=${productid} class="cardcart" >
 
  <img id="productImg" src="${productImg}" alt="" srcset="">
  <h1 id="ff" class="productTitleC">${productTitle}</h1>
  <label for="shoes" class="productSize">${productSize}</label>
<div class="card-price">
<p1>price :<span class="productPrize">${productPrize}</span></p1>
</div>
<div id="removecard" >
<button type="button" class="btn" onclick="removeItem(this)" data-cardID=${productid}><img src="close.png"/></button>

</div>


</div>


  `
}


function removeItem(element) {
   
 
  // let title = document.getElementById("ff").parentElement;
  // console.log(title)
  const cardId = element.getAttribute("data-cardID");
  // console.log(cardId)
  const cardElement = document.getElementById(cardId);
  // console.log(cardElement)
  let removeElmId = itemSize.findIndex((elem)=>{return elem.productid === cardId});
  itemSize.splice(removeElmId,1);
  // console.log(vcc);
  cardElement.remove();
    // console.log(itemSize)
  //  title.remove();
  //  console.log(itemSize)

  
}
let PriceValue = document.querySelector(".PriceValue"
).innerHTML = 0;
let ProductPrice = document.querySelector(".productPrize"
).innerHTML = 0;
console.log(PriceValue);
console.log(ProductPrice);
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemAndPrice = {};
  var price = Math.floor(Math.random() * 100) +1;
  itemAndPrice[item] = price;
  cart.push(itemAndPrice);
  console.log(item + " has been removed from cart.");
  return cart;
}


function viewCart() {
  var setence_starter = "In your cart, you have";
  var cart_list = [];

cart.forEach (function(item) {
  for(var key in item) {
    cart_list.push(`${key} at $${item[key]}`)
  }
}
);

    if(cart_list.lenght===0){
      console.log("Your shopping cart is empty.")
    }
    else if(cart_list.lenght == 1){
      console.log(`${sentence_starter} ${cart_list}.`);
    }
    else if(cart_list.lenght == 2){
      console.log(`${sentence_starter} ${cart_list[0]} and ${cart_list[1]}.`);
    }
    else if(cart_list.lenght == 3){
      cart_list[cart_list.length-1]= "and "+cart_list[cart_list.length-1];
         console.log(`${sentence_starter} ${cart_list.join(", ")}.`);
    }
}

function total() {
  var total = 0;
  cart.forEach(function(item){
    for(var key in item) {
      total+=item[key];
    }
  });
  return total;
}

function removeFromCart(item) {
  var shoppingCart= false;
for(var i = 0; i < cart.lenght; i++){
  if(cart[i].hasOwnProperty(item)){
    foodChecker=true;
    cart.splice(i,1);
  }
}
  if(!foodChecker){
    console.log("The item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if(arguments.lenght===0) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else if(argument.lenght ==1){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}`);
    cart = [];
  }
}

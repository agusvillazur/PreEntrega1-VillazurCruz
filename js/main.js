//Unit Price
const unitPrice = 4.99;

//Stock
const unitStock = 500;

//Discounts
const noDiscount = 1;
const firstDiscount = (1 - 0.10);
const secondDiscount = (1 - 0.25);
const thirdDiscount = (1 - 0.35);

//Shipping fee
const fee = 7.99;

alert("Welcome to Power Up!");

let nameEntered = prompt("Please enter your name:");

alert(`Hi ${nameEntered}!`);

var agePrompt=prompt("Please enter your age");

if (agePrompt>=16) {
  alert('You now have access to our catalog:')
} else {
  alert('Sorry! Our products contain high levels of caffeine and are not recommended for customers under the age of 16.');
  window.location.href = 'http://www.google.com';
  alert(`Come back in a few years!`); 
}


alert(`Each energy drink is only $4.99!

Here are our prices and discounts:
1 can = $4.99 + shipping fee
1 pack (6 cans) = 10% discount + shipping fee
+2 packs = 25% and no shipping fee
7 or more packs = 35% and no shipping fee`);

let quantity = parseInt(prompt("How many items do you want?"));

while (quantity > unitStock) { 
  alert(`Our maximum stock is ${unitStock} items.`);
  quantity = prompt("Please enter another number:");
}

//Function
function priceCalculator(quantity, unitPrice, noDiscount, firstDiscount, secondDiscount, thirdDiscount, fee) {
  if (quantity >= 0 && quantity <= 1) {
    let finalPrice = ((quantity * unitPrice * noDiscount) + fee)
    return finalPrice.toFixed(2);
  }
  else if (quantity >= 6 && quantity <= 12) {
    let finalPrice = ((quantity * unitPrice * firstDiscount) + fee)
    return finalPrice.toFixed(2);
  }
  else if (quantity >= 13 && quantity <= 41) {
    let finalPrice = (quantity * unitPrice * secondDiscount)
    return finalPrice.toFixed(2);
  }
  else {
    let finalPrice = (quantity * unitPrice * thirdDiscount)
    return finalPrice.toFixed(2);
  }
}

alert("Your final price is: $" + priceCalculator(quantity, unitPrice, noDiscount, firstDiscount, secondDiscount, thirdDiscount, fee));

alert("Thanks for your purchase, we hope you come back soon!");

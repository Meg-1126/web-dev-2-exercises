class Pizza {
  constructor() {
    this.toppings = ['cheese'];
  }
}

function addTopping (topping) {
  pizza1.toppings.push(topping);
}

let pizza1 = new Pizza();
console.log(pizza1.toppings);
pizza1.addTopping('mushrooms');
pizza1.addTopping('peppers');
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping('more cheese');
console.log(pizza2.toppings); // ["cheese", "more cheese"];
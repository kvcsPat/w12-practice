// console.log('hello');

/*
---js primitives---

string
number
boolean
null
undefined
*/

/*
let string = "hello";
let newString = string.toUpperCase();
console.log(newString);
console.log(newString.length)
*/

// console.dir(String)

/*
const user = {
    name: "Joe",
    age: 20
}

console.log(typeof user)

console.log(user.name)

console.log(user['name'])
*/

/*
function createPizza(name, price) {
    return {
        "name": name,
        "price": price,
        "details": function () {
            console.log(name, price);
            let newPrice = price*2;
            console.log(newPrice)
        }
    }
}

let pizza1 = createPizza("Hawaii", 1800);

console.log(pizza1);
console.log(createPizza("Piedone", 2800));

pizza1.details();

const pizza = {
    "name": "Hawaii",
    "price": 1800,
    details(){
        console.log(this.name, this.price)
    }
}

pizza.details();
*/

/*
const pizzaObj = new Object();
pizzaObj.name = "Hammer";

console.log(pizzaObj.name)
*/


class Pizza {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
    details(){
        console.log(this.name)
        console.log(this.price)
    }
}

const pizzaLecso = new Pizza("Lecso", 3100);

//console.log(pizzaLecso);
//console.log(pizzaLecso.name);
//console.log(pizzaLecso.price);
pizzaLecso.details();

const pizzaHam = new Pizza("Ham", 3000);

//console.log(pizzaHam);
//console.log(pizzaHam.name);
//console.log(pizzaHam.price);
pizzaHam.details();

let params = ["4Cheese", 1560];

let pizzaFromArray = new Pizza(...params);
console.log(pizzaFromArray);

let params1 = [...params, "5th cheese"];
console.log(params1);

let params2 = [...params, ...params1];
console.log(params2);
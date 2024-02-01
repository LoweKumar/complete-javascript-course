'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery : function({starterIndex = 1, mainIndex = 0, time = '20:00', address }){
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

restaurant.orderDelivery({starterIndex : 2, mainIndex : 2, time : '22:30', address : 'NewYork'})

const arr = [2,3,4];
// destructuring array demo
const[x, y, z] = arr;
console.log(x, y ,z);
let[main, , secondary] = restaurant.categories;
console.log(main, secondary);

// swap value of two variables main and secondary
[main, secondary] = [secondary, main];
console.log(main, secondary);

const[starter, mainCourse] = restaurant.order(0,2);
console.log(starter, mainCourse);

// destructuring objects
const{name :restaurantName, openingHours:hours, categories:tags} = restaurant;
console.log(restaurantName, hours, tags);

//setting the default values in object destructuring
const{menu =[], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// //Mutating Variables
// let a = 100;
// let b = 121;
// const obj = {a:200, b:300, c:400}
// ({a,b} = obj);
// console.log(a, b);

//spread operator
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const str = 'My name is abc';
const strings = [...str, 'and XYZ'];
console.log(strings);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menuCreate = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuCreate);

//using spread oerator to get the old objets of restaurant and add new objects
const newRestaurant = {foundedIn : 1885, ...restaurant, founderName : 'Kumar'};
console.log(newRestaurant);


//Rest patterns and parameters
// Rest is opposite of Spread operators

// spread because on the right side of =
const arr1 = [1, 2, ...[3, 4]];
console.log(arr1);

// REST because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//objects demo for REST operator
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

//create a function that accepts any no of parameters and return the result after addition
// using REST operator to achieve this
const add = function (...numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
};

add(1,2,3);
add(1,2,3,4,5);
add(1,2,3,4,5,6,7,8,9);
// will use spread operator to provide values to add()
const no = [2, 4, 6, 8, 10];
add(...no);














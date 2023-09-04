// start with strings, numbers and booleans
let myName = 'Aoi'
let myName2 = myName
console.log(myName, myName2)
myName = 'Tanaka'
console.log(myName, myName2)

let age = 28
let age2 = age
console.log(age, age2)
age = 30
console.log(age, age2)

// Let's say we have an array
const fruits = ['Banana', 'Apple', 'Orange', 'Grapes']

// and we want to make a copy of it.
// You might think we can just do something like this:
const ingredients = fruits
console.log(fruits, ingredients)

// however what happens when we update that array?
// ingredients[3] = 'Mango'
// console.log(fruits, ingredients)

// now here is the problem! - We have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// one way
const ingredients2 = fruits.slice()
ingredients2[3] = 'Mango'
console.log(fruits, ingredients2)

// or create a new array and concat the old one in
const ingredients3 = [].concat(fruits)
ingredients3[3] = 'Pear'
console.log(fruits, ingredients3)

// or use the new ES6 Spread
const ingredients4 = [...fruits]
ingredients4[3] = 'Kiwi'
console.log(fruits, ingredients4)

const ingredients5 = Array.from(fruits);
ingredients5[3] = 'Pineapple'
console.log(fruits, ingredients5)

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Aoi Tanaka',
  age: 28
};

// and think we make a copy:
const editor = person
console.log(person, editor)

// editor.birthday = '1995.05.23'
// console.log(person, editor)

// how do we take a copy instead?
const editor2 = Object.assign({}, person, {birthday: '1995.05.23'})
console.log(person, editor2)

// We will hopefully soon see the object ...spread
// const editor3 = {...peson}

// Things to note - this is only 1 level deep - both for Arrays and Objects. 
// lodash has a cloneDeep method, but you should think twice before using it.
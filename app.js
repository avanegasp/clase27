console.log("Hola mundo")

function expression
const square = function(x){
  return x * x
}
console.log(square(4))

function literal
function square(x){
  return x * x
}
console.log(square(4))

arrow function
const square = x => x * x
console.log(square(4))

const sum = (x, y) => x + y
console.log(sum(1,2))

const sayHi = () => {
    console.log("hola mundo")
    return 5
}

sayHi()

const honk = () => {
    console.log("beep")
}

honk()

const rest = (a,b) => {
    a-b
}


array
let listOfNumbers = [2,3,4,5]
listOfNumbers.push(6)
console.log(listOfNumbers[0])
listOfNumbers.pop()
console.log(listOfNumbers)

hash = objetos

let day1 = {
  squirrel: false,
  events: ["work", "touch tree", "running"],
  sayHi: function(){
    console.log("Hola Mundo")
  }
}

eventos : "touch house", "swimming", "sleep"
squirrel: true
sayBye, esta va a despedir a la ardilla(name)
diciendo "Adios _______"

day1.sayHi()
console.log(day1.squirrel)
console.log(day1.events[2])
console.log(day1.wolf)

day1.wolf = false
console.log(day1)

console.log(day1.events.includes("swimming"))

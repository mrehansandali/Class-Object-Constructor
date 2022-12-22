const num1 = 8
const num2 = new Number(8)

let item1 = true
let item2 = new Boolean(true)

item1 = { name: "rehan", age: 21 }
item2 = new Object({ name: "ali", age: 22 })

item1 = [1, 2, 3, 4]
item2 = new Object(1, 2, 3, 4)

console.log(item1)
console.log(item2)





class Car {

  constructor(brand) {
    this.carname = brand;
  }
}
mycar = new Car(rt5656);




special_car = new Car("HESHAM")
nam = "Rehan"
names = new String("Rehan")
typeof (special_car)





class Laptop {
  constructor(brand, model, processor, price) {
    this.brand = brand,
      this.model = model,
      this.processor = processor,
      this.price = price,
      this.fullname = function () {
        return `${brand} ${model} ${processor} ${price} `
      }
  }
}
Laptop.prototype.launch = "2019"
lenovo = new Laptop("Lenovo", "2022", "corei7", 55000)
hp = new Laptop("hp", "2022", "corei7", 55000)
dell = new Laptop("dell", "2022", "corei7", 55000)
Laptop.prototype.launch = "2019"

console.log(`${lenovo.fullname()} ${lenovo.launch}`)
console.log(`${hp.fullname()} ${hp.launch}`)
console.log(`${dell.fullname()} ${dell.launch}`)




class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname,
      this.lastname = lastname
  }
}

let person1 = new Person("rehan", "sandali")
let person2 = new Person("ahtisham", "ali")

Person.prototype.getFullName = function () {
  return this.firstname + " " + this.lastname
}
Person.prototype.setNewLastName = function (newLastName) {
  return this.lastname = newLastName
}
console.log(person1.getFullName())
console.log(person1.setNewLastName("Khan"))
console.log(person1.getFullName())
// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"
let veggie = 'carrot';
veggie = 'onion';
console.log(`veggie : ${veggie}`);

// =========================
//      DATA STRUCTURES
// =========================
// animals = ["tiger", "panda", "raccoon"]
// animals.append("opossum")
let animals = ['tiger', 'panda', 'raccoon'];
animals.push('opossum');
console.log(`animals = ${animals}`);

// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True
let dog = {'name': 'Sprinkles', 'age': 3};
dog.isfriendly = true;
console.log(dog);

// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)
for (let i=0;i<6;i++){
  console.log(i);
};
// for animal in animals:
//    print(animal)
for(let animal of animals){
  console.log(animal);
};
// for k, v in dog.items():
//    print(f"{k}: {v}")
for (let key in dog){
  console.log(`${key}:${dog[key]}`)
}
//
//
// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return "fizzbuzz"
//    elif num % 3 == 0:
//        return "fizz"
//    elif num % 5 == 0:
//        return "buzz"
//    else:
//        return num

// ES6 way: Function Expression
const fizzbizz = function(num){
  if (num % 3 == 0 && num % 5 == 0){
    return 'fizzbuzz';
  }else if (num % 3 == 0){
    return 'fizz';
  }else if (num % 5 == 0){
    return 'buzz';
  }else {
    return num;
  }
};
const ans =fizzbizz(15);
console.log(ans);

//
// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
//        self.species = species
//        self.name = name
//
//    def __str__(self):
//        return f"{self.name} is a {self.species}"

class Animal{
  constructor(species,name){
    this.species = species;
    this.name = name;
  }
  toString(){
    return this.name +' is a ' + this.species;
  }
};
const animal1 = new Animal('dog','lolo');
console.log(animal1.toString());

// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species="dog", name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f"{super().__str__()} that can {self.trick}"
class Dog extends Animal{
  constructor(name,trick){
    super('dog',name);
    this.trick = trick;
  }
  toString(){
    return super.toString() + ' that can' + this.trick ;
  }
}
const animal2 = new Dog('buddy','bow bow');
console.log(animal2.toString());
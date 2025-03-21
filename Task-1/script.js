/* 
Question: How to compare two JSON have the same properties wihtout order.
          a. let obj1 = {name:"Person 1",age:5}
          b. let obj2 = {age:5,name:"Person 1"}
*/
let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };
let obj1Keys = Object.keys(obj1);
let obj2Keys = Object.keys(obj2);
let result = [];
if (obj1Keys.length !== obj2Keys.length) {
  console.log("Objects are not same");
} else {
  for (key of obj1Keys) {
    if (obj1[key] !== obj2[key]) {
      console.log("Objects are not same");
      break;
    } else {
      result.push(true);
    }
  }
  if (obj1Keys.length === result.length) {
    console.log("Objects are same");
  }
}

//Modified Approach

let object1 = { name: "Person 1", age: 5 };
let object2 = { age: 5, name: "Person 1" };

let sortedObj1 = Object.entries(object1).sort()
let sortedObj2 = Object.entries(object2).sort()

let areSame = JSON.stringify(sortedObj1) === JSON.stringify(sortedObj2)

console.log(areSame ? "Objects are same" : "Objects are not same");
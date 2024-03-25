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

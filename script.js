"for loop"
var studatt=["mon","tue","wed"]
for(i=0; i<studatt.length;i++)
console.log(studatt[i])
console.log("-------------------")

"for-in loop"
var studName ={
    name:"sakthi",
    age:24,
    course:"FSD"
}
for(var a in studName){
console.log(a,studName[a])
}
console.log("-------------------")

"for-off loop"
var numb = [1,2,3,4,5]

for(var a of numb){
console.log(a)
}
console.log("-------------------")

"for-each loop"
var stud = [
    { name: "John", age: 25 },
    { name: "elango", age: 30 },
    { name: "thiru", age: 35 }
  ];
  
  stud.forEach((data) => {
    console.log(data.name);
  });
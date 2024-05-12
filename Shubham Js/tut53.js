console.log('This is Tutorial 53');

let name = 'Shubham';
let name1 = 'Harry';
let name2 = 'Rohan';
let name3 = 'Krishnesh';
console.log(name + " is a good boy");
function greet(name, greetText="Greeting from JavaScript"){
 console.log(greetText + ""+ name);
  console.log(name + " is a good boy");
}
function sum(a,b,c){
 let d=a + b+ c;
 return d;
}
let greetText= "Good Morning ";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
 //let returnval= greet(name3);
// console.log(returnval);

let returnval=sum(1,5,1000);
console.log(returnval);

function greater(a,b)
{
  if (a>b){
    console.log(a + "is greater than"+ b);
  }
  else if(a==b){
    console.log(a + " is equal to" + b);
  }
  else {
    console.log(a + " is less than " + b);
  }
}
 greater(44,50);
function max(a,b){
  if (a>b)
  {
    return a;
  }
  else{
    return b;
  }
}
let a=10; 
let b=35;
console.log(`The greater number in ${a} and ${b} is ${max(a,b)}`);

console.log('helllo'); 

//variables

var b='heenge navu';
console.log(b);

var c=45;  
console.log(c);

/*
var age =prompt('What is your age?');
var sonage=prompt('what is your son age');
var m=age-sonage; 
alert('the difference between the ages is '+m);
document.getElementById('someText').innerHTML='the difference between the ages is '+m;

// number in javascript

var num1=5.7;
console.log((num1)*10);*/
/*
var num1=30;
num1++;
num1--;

console.log(num1);
console.log(num1 /6);
num1 += 10;
console.log(num1);

//functions
1.create a function
2.call the function
function fun()
{
    alert('this is a function');
}
//call

fun()

*/

// how do arguments work in functions?
/*
function sumNumbers(){
    var x=prompt('x value');
    var y=prompt('y value');
    var c=x+y;
    alert(c);
}

sumNumbers();
*/
/*
function  sumnumbers(num1 , num2){
    var result=num1 +num2;
    console.log(result);
}

sumnumbers(10,10);

// while loops

var num=0;

while(num<100)
{
    num +=1;
    console.log(num);
}

for(let n=0;n<100;n++)
{
    console.log(n);
}
*/
//Data types

let yourage=21; //number
let yourname='abhishek'; // string
let name={first:'patil',last:'Santoshkumar'};
let truth=false;
let groceries=['apple','banana','orange']; //array
let random; //undefined
let nothing=null; // value NULL

// strirng in Javascript (common methods)

let fruit ='banana,apple,orange,blackberry';
let morefruits = 'banana\napple';

console.log(fruit.length);
console.log(fruit.length);
console.log(fruit.indexOf('na'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase(fruit)); 
console.log(fruit.charAt[2]);
console.log(fruit.split(','));
// console.log()

//Array

//let fruits = ['banana','orange','apple','pineapple'];
let fruits = new Array('banana','apple','orange','pineapple');

console.log(fruits[2]);

fruits[0]='pear';
console.log(fruits);

for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

//array common methods

console.log('to string',fruits.toString());
console.log(fruits.join('-'));  

//pop and // push operations

console.log(fruits,fruits.pop(),fruits); //remove last item
console.log(fruits.push('blackberry'),fruits); //append
console.log(fruits.push('mango'),fruits);
// // fruits.log(fruits[4]);
// fruits[4]='new fruit';
fruits[fruits.length]='new fruit'; //same as push
console.log(fruits);
fruits.shift();//remove first element from a list
console.log(fruits);

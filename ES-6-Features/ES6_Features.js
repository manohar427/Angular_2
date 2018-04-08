/********************************************************
1. Default Parameters in ES6
*********************************************************/
/*var link1 = function (height, color, url) {
    var height = height || 50
    var color = color || 'red'
    var url = url || 'http://azat.co'
    console.log('height:'height",color:"color",url:"url);
}
link1(25,'my url');

var link1 = function (height=50, color='red', url='http://azat.co') {
    console.log('height:'height",color:"color",url:"url);
}
link1(1111);*/

/*************************************************************
2. Template Literals in ES6
**************************************************************/
/*var link3 = function (){
	var first ="Manohar";
	var last = "Sambayyapalem";
	var id='NHJS2';
	console.log("ES5 ::::::::::::::::::::::::");
	var name = 'Your name is '  first  ' '  last  '.';
    var url = 'http://localhost:3000/api/messages/'  id;
    console.log("Name:"name);
    console.log("Url:"url);
}
link3();

var link3 = function (){	
	var first ="Manohar";
	var last = "Sambayyapalem";
	var id='NHJS2';
	var name = `Your name is ${first} ${last}.`;
    var url = `http://localhost:3000/api/messages/${id}`
    console.log("\nES6 ::::::::::::::::::::::::");
    console.log("Name:"name);
    console.log("Url:"url);
}
link3();
*/

/***************************************************************
3. Multi-line Strings in ES6
****************************************************************/
/*var roadPoem = 'Then took the other, as just as fair,\n\t'
     'And having perhaps the better claim\n'
     'Because it was grassy and wanted wear,\n\t'
     'Though as for that the passing there\n\t'
     'Had worn them really about the same,\n\t'

var fourAgreements = 'You have the right to be you.\n\
    You can only be you when you do your best.'

console.log("ES5 ::::::::::::::::::::::::");
console.log("roadPoem:"roadPoem);
console.log("fourAgreements:"fourAgreements);


var roadPoem1 = `Then took the other, as just as fair,
    And having perhaps the better claim
 Because it was grassy and wanted wear,
                   Though as for that the passing there
    Had worn them really about the same,`

var fourAgreements1 = `You have the right to be you.
    You can only be you when you do your best.`

console.log("\nES6 ::::::::::::::::::::::::");
console.log("roadPoem:\n"roadPoem1);
console.log("fourAgreements:\n"fourAgreements1);
*/

/***********************************************************
4. Arrow Functions in ES6
************************************************************/
/*var ele = [34,5,3,45,33,22,44,55];
var even = [];

var myFunc1 = function(num){  
           console.log(num " ");       
           if(num %2 ==0){
                even.push(num);
           }
           
       }
console.log("\nES5 ::::::::::::::::::::::::");
ele.forEach(myFunc1);
console.log(even);
even = [];
var myFunc1 =  (num)=>{
                    console.log(num " ");
                     if(num %2 ==0){
                     even.push(num);
           }
                }
        console.log("\nES6 ::::::::::::::::::::::::");        
ele.forEach(myFunc1);
console.log(even);
*/

let obj = {
  myVar: 'foo',
  
  myFunc: function() {
    console.log(this.myVar)
  }
}
//obj.myFunc();

let obj1 = {
  myVar: 'foo',
  
  myFunc: function() { 
    console.log(this.myVar);   
 
    setTimeout(function() {
      console.log(this.myVar)
    }, 1000)
  }
}
//obj1.myFunc();

let obj2 = {
  myVar: 'foo',
  
  myFunc: function() { 
    let self = this
    console.log(this.myVar)  
  
    setTimeout(function() {
      console.log("obj2:"+self.myVar)
    }, 1000)
  }
}
//obj2.myFunc();

let obj3 = {
  myVar: 'foo',
  
  myFunc: function() { 
    console.log(this.myVar)  
  
    setTimeout(() => {
      console.log("obj3:"+this.myVar)
    }, 1000)
  }
}
//obj3.myFunc() ;
let obj4 = {
  myVar: 'foo',
  
  myFunc: () => { 
    console.log(this.myVar)  
  }
}
//obj4.myFunc()

var Car =  function(){
    this.speed  = 100;
    var self = this;
	setInterval(function (){
		self.speed ++;
		console.log(self.speed);
	},1000
		)
}
//var c = new Car();


var Car1 =  function(){
    this.speed  = 100;
	setInterval(() => {
		this.speed ++;
		console.log(this.speed);
	},1000
		)
}
//var c1 = new Car1();

var n1 = 9;
var n2 = "9";

console.log("1:"+(n1==n2));
console.log("2:"+(n1===n2));

/************************************************************
5. Block-Scoped Constructs Let and Const
*************************************************************/
//var is function scoped.

/*function calculateTotalAmount (vip) {
  var amount = 0
  if (vip) {
    var amount = 1
  }
  { // more crazy blocks!
    var amount = 100
    {
      var amount = 1000
    }
  }  
  return amount
}
console.log(calculateTotalAmount(true))
//let is block scope

function calculateTotalAmount1 (vip) {
  var amount = 10
  if (vip) {
    let amount = 1
  }
  { // more crazy blocks!
    let amount = 100
    {
      let amount = 1000
    }
  }  
  return amount
}
console.log(calculateTotalAmount1(true))


function calculateTotalAmount2 (vip) {
  const amount = 0  
  if (vip) {
    const amount = 1 
  } 
  { // more crazy blocks!
    const amount = 100 
    {
      const amount = 1000
      }
  }  
  return amount
}

console.log(calculateTotalAmount2(true))



const foo = Object.freeze({});//{};
foo.prop = "Moo"; // This works!
console.log(foo.prop);
*/
/*********************************************
             6. Modules in ES6
**********************************************/
//module.js file:
/*
export var port = 3000
export function getAccounts(url) {
   console.log("Url from module.js:"url);
}

//file main.js
import {port, getAccounts} from 'module'
console.log(port) // 3000
  //OR

import * as service from 'module'
console.log(service.port) // 3000  
*/

/************************************************
              7.Promises in ES6
************************************************/


/*setTimeout(()=>{
  console.log('Yay!');
}, 1000);

var wait1000 =  new Promise((resolve, reject)=> {
  setTimeout(reject('Action is rejected ...... !'), 1000)
}).then(()=> {
  console.log('Yay!');
}).catch(reason => { 
  console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB:"reason);
});
*/
/*var p1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, 'one'); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, 'two'); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
 setTimeout(resolve, 9000, 'five');
});

Promise.all([p1, p2, p3, p4, p5]).then(values => { 
  console.log(values);
}, reason => {
  console.log(reason)
});
*/
//1.Class Object and Constructor 

function Person0() {

  console.log('Person0 instantiated');
};

var person0 = new Person0('Alice');

var Person = function (firstName) {
  this.firstName = firstName;
  console.log('Person instantiated');
};

var person1 = new Person('Alice');
var person2 = new Person('Bob');

// Show the firstName properties of the objects
console.log('person1 is ' + person1.firstName); // logs "person1 is Alice"
console.log('person2 is ' + person2.firstName); // logs "person2 is Bob"

//2.Methods
var Person3 = function (name) {
	this.name = name;
	  console.log('Person3 instantiated'); 
};

Person3.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.name);
};

var Person4 = new Person3('Bob');

var sayHello = Person3.prototype.sayHello;
console.log("==========================1");
sayHello.call(Person4)
console.log("==========================2");
//3.Constructor over loading 

function FooString()
{   
    console.log("Arguements length :"+arguments.length);
	if(arguments.length>0)
    {   this.str=arguments[0];
        return;
    }
    this.str="";
}

var s1=new FooString();
console.log("No Args:"+s1.str);
var s2=new FooString("hello world");
console.log("Args:"+s2.str);

var s3=new FooString("hello world","IOIOIOIO");
console.log("Args:"+s3.str);




//1.Call demo
var obj = {name:"Manohar"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" and "+a;
}

//console.log(greeting.call(obj,"A","B","C"));
//welcome Manohar and A

var obj2 = {
	name:"Manohar",
    gree : function(a,b,c){
             return "welcome "+this.name+" and "+a;
    }
};

var greeting2 = obj2.gree;
var myObj = {name:"King of all time"};
//console.log(greeting2.call(obj2,"A","B","C"));
//console.log(greeting2.call(myObj,"A1111","B","C"));

//welcome Manohar and A
//welcome King of all time and A1111

//2.Apply demo
var args = ["A","B","C"];
console.log(greeting2.apply(myObj,args));


//2.Bind demo

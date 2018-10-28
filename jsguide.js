//print the name and value of each property of o. return
//undefined function printprops(o)

function printprops(o){
	for(var p in o)
		console.log(p+": "+o[p]+"\n")
}

//compute the distance between Cartesian points (x1,y1) and (x2,y2)
function distance(x1,y1,x2,y2){
	var dx = x2-x1;
	var dy = y2-y1;
	return Math.sqrt(dx*dx,dy*dy);
}

//A recursive expression defines a function that squares its argument.
//note that we assign it to a variable
var square = function(x){return x*x}

//Function expression can includes names, which is useful for recursion
var f = function fact(x){if (x<=1) return 1; else return x*fact(x-1);};

//Function expression can also be used as arguments to other functions
data.sort(function(a,b){return a-b;});

//Function expressions are sometimes defined and immediately invoked
var tensquared = (function(x){return x*x;}(10));

function hypotenuse(a,b){
	function square(X){return x*x}
	return Math.square(square(a)+square(b));
}

//invoke function
// as functions
// as methods
// as constructors
// indirectly through their call() and apply() methods

printpops({x:1});
var total = distance(0,0,,2,1)+distance(2,1,3,5);
var prpbability = factorial(5)/factorial(13);

//Define and invoke a function to determine if we're in strict mode
var strict = (function(){return !this;}());


var calculator = { //An object literal
	operand1: 1,
	operand2: 1,
	add: function(){
		//Note the use of the this keyword to refer to this object.
		this.result = this.operand1+this.operand2;
	}
};

calculator.add(); // A method invocation to compute 1+1
calculator.result;

o["m"](x,y);
//a[o](z)

customer.surname.toUpperCase(); //invoke method on customer.surname
f().m();

var o = { //an object o.
	m:function(){//method m of the object
		var self = this; //save the this value in a variable.
		console.log(this===o); //print true: this is the object o
		f(); //now call the helper function f()
		function f(){
			console.log(this===o); //false , this is global or undefined
			console.log(self === o); // true, self is the outer this value

		}}
};
o.m();

//Append the names of the enumerable properties of object o to the 
//array a, and return a. If a is omited, created and return a new array.
function getPropertyNames(o, /* optional*/ a){
	if(a===undefined) a=[] ; //If undefiend, use a new array
	for(var property in o) a.push(property);
		return a;
}

// This function can be invoked with 1 or 2 arguments:
var a = getPropertyNames(o);
getPropertyNames(p,a);

function(x,y,z){
	//First verify that the right number of arguments was passed
	if(arguments.length !=3){
		throw new Error("function f called with" + arguments.length + 
			"arguments, but it expectes 3 arguments.")
	}
	//Now do the actual function ..
} 

function max(/*...*/){
	var max = Number.NEGATIVE_INFINITY;
	//loop through the arguments, looking for, and remebering, the biggest
	for(var i=0; i< arguments.length;i++)
		if (arguments[i] > max) max = arguments[i];
	//return the biggest
	return max;
}

var largest = max(1,10,100,2,3,1000,4,5,1000,6);

function f(x){
	console.log(x);
	arguments[0] = null;
	console.log(x);
}

//Copy length elements of the array from to the array to 
//being copying with element from start in the from array
//and copy that element to to_start in the to array
// It is hard to remember the order of the argument
function arraycopy(/*array*/ from, /*index*/ from_start,
	/*array*/ to, /*index*/ to_start,
	/*integer*/ length){
	//code goes here
}

//This version is a littele less efficient, but you don't have to
//remember the order of the arguments, and from_start and to_start
//default to 0.
function easycopy(args){
	arraycopy(args.from,
		args.from_start||0,//Note default value provides
		args.to,
		args.to_start||0,
		args.length
		);
}
//here is how you might invoke easycopy()
var a = [1,2,3,4], b=[];
easycopy({from:a, to:b,length:4});


function max(/* number...*/){
	/* code here*/
}

//return the sum of the elements of array(or array-like object) a.
//The elements of a must all be numbers or null and undefined are ignored.
function sum(a){
	if(isArrayLike(a)){
		var total =0;
		for(var i=0; i<a.length ;i++){ 
			//Loop though all elemetns
			var elements =a[i];
			if(elements == null) continue;
			if(isFinite(element)) total+=element;
			else throw new Error("sum(): elements must be finite numbers");
		}
		return total;
	}
	else throw new Error("sum(): argument must be array-lile");
}


function flexisum(a){
	var total =0;
	for(var i=0; i<arguments.length;i++){
		var element = arguments[i],n;
		if(element == null) continue;
		if(isArray(element))
			n = flexisum.apply(this,element);
		else if (typeof element ==="function")
			n = Number(element());
		else n = Number (element());
		if(isNaN(n))
			throw Error("flexisum(): can't convert" + element + "to number");
		total +=n;
	}
	return total;
}


// 8.4 Functions as Values

function square(x) {return x*x;}

var s =square;
square(4);
s(4);

var o = {square:function(x){return x*x;}};
var y = o.square(16);

var a = [function(x){return x*x;},20];
a[0](a[1]);

//we define some simple function here
function add(x,y){return x+y;}
function subtraxt(x,y){return x-y;}
function multiply(x,y){reutrn x*y;}
function divide(x,y){return x/y;}

//here's a funcion that takes one of the above functions
//as an argument and invokes it on two operatnds
function operate(operator, operand1, operand2){
	return operator(operand1, operand2);
}

// we could invoke this function like this to compute the value(2+3)+(4*5):
var i = operate(add, operate(add,2,3),operate(multiply,4,5));

//For the sake of the example, we implement the simple functions again,
// this time using function literals within an object literal
var operators = {
	add: function(x,y){return x+y;}
	pow: Math.pow //
}

//THis function takes the name of an operator, looks up that opeator
// in the object, and then invokes it on the supplied oprands. Note
// the syntax used to invoke the operator function.
function operator2(operation, operand1, operand2){
	if(typeof operators[operation]==="function")
		return operators[opertaion](operand1, operand2);
	else throw "unknown operator";
}

//compute the value ("hello" + " "+"world") like this

//8.4.1 Defining Your Own Function Properties
//Initialize the counter property of the function object
//Function declarations are hoisted so we really can
//do this assignment before the function declaration

uniqueIneger.counter = 0;

//This function returns a different integer each time it is called.
//It uses a property of itself to remeberthe next value to be returned.
function uniqueInteger(){
	return uniqueInteger.counter++;
}

//compute factorials and cache results as properties of the function itself.
function factorial(n){
	if(isFinite(n) && n>0 && n==Math.round(n)){
		if(!(n in factorial))
			factorial[n] = n*factorial(n-1);
		return factorial[n];
	}
	else reutrn NaN;
}
factorial[1]=1;


//8.5 Functions as Namespaces
function mymodule(){
	//module code goes here
	//Any variables used by the module are local to this function
	//instead of clutrering up the global namespace.
}

mymodule(); //but't don't forget to invoke the function!


(function(){ //mymodule function rewritten as an unnamed expression
	//Module code goes here
}());

//Example 8-3  The extend() function, patched if necessary

//Define an extend function that copies the properties of its second and 
//subsequent arguments onto its first argument.
//we work around an IE bug here: in many varsion of IE, the for/in loop
//won't enumerate an enumerable property of o if the prototype of o has 
//an nonenumerable property by the same name. This means that properties
//like toString are not handled correctely unless we explicitly check for them.
var extend = (function(){// Assign the return value of this function
	//First check for the presence of the bug before patching it.
	for(var p in {toString:null}){
		//If we get here, then the for/in loop works correctly and we return
		// a simple version of the extend() function
		return function extend(o){
			for(var i=1;i<arguments.length;i++){
				var source = arguments[i];
				for(var prop in source ) o[prop] = source[prop];
			}
		return o;
		}
	};
}


//If we get here, it means that the for/in loop did not enumerate
//the toString property of the test object. So return a version
// of the extend() function that explicitly tests for the nonenumerable
// properties of Object.prototype

return function patched_extend(o){
	for(var i=1 ; i <arguments.length;i++){
		var source = arguments[i];
		//copy all the enumerable properties
		for (var prop in source ) o[prop] = source[prop];
		// And now check the special-case properties
		for(var j=0; j<protoprops.length;j++){
			prop = protoprops[j];
			if(source.hasOwnProperty(prop)) o[prop] = source[prop];
		}
	}
};

//This is the list of special-case properties we check for
var protoprops = ["toString","valueOf","constructor","hasOwnProperty",
	"isPrototypeOf","propertyIsEnumerable","toLocaleString"];

}());


//8.6 Closure
// lexical scoping - functions are executed using the variable scope that was in 
// effect when they  were defined, not the variable scope that is in effect when they 
// are invoked. Ref 3.10 variable scope and 3.10.3 scope chain

// when a nested function object is returned from the function within
// which it was defined.

var scope = "global scope"; // a global variable
function checkscope(){
	var scope = "local scope"; // a local variable
	function f(){return scope;}  // return the value in scope here
	return f();
}
checkscope();

var scope = "global scope";
function checkscope(){
	var scope = "local scope";
	function f(){return scope;}
	return f;
}

checkscope()()

//closure - capture the local variable (and parameter) binding of 
// the outer function within which they are defined

var uniqueInteger = (function(){ //Define and invoke 
		var counter = 0; //Private state of function below
		return function(){return counter++;};
}());

function counter(){
	var n=0;
	return {
		count: function(){return n++;},
		reset:function(){n=0;}

	};
}

var c = counter(), d= counter();

c.count();
d.count();
c.reset();
c.count();
d.count();

function counter(n){ //Function argument n is the private variable
	return {
		// Chapter 6.6
		// Property getter method returns and increments private counter var.
		get count(){return n++;},
		//Property setter doesn't allow the value of n to decrease
		set count(m){
			if(m>=n) n=m;
			else throw Error ("count can only be set to a larger value");
		}
	};
}

var c=counter(1000);

c.count ;
c.count ;
c.count = 2000;
c.count ;
c.count = 2000; // error

// This function adds propert accessor methods for a property with
// the specified name to the object o. The methods are named get<name>
// and set<name>. If a predicate function is supplied, the setter 
// method uses it to test its argument for validity before storing it.
// If the predicate returns false, the setter method throws an exception.

//tThe unusual thing about this function is that the property value 
// that is manipulated by the getter and setter methods is not stored in
// the object o. Instead, the value is stored only in a local variable
// in this function. The getter and setter methods are also defined 
// locally to this function and therefore have access to this local variable.
// This means that the value is private to the two accessor methods, and it 
// cannot be set or modified except through the setter method.

function addPrivateProperty(o, name, predicate){
	var value; // This is the property value

	// The getter method simply returns the value.
	o["get" + name] = function(){return value;};

	//The setter method stores the value or throws an exception if
	//the predicate rejects the value
	o["set"+name] = function(v){
		if(predicate && !predicate(v))
			throw Error("set"+name+": invalid value"+v);
		else 
			value =v;
	};
}

//The following code demonstrate the addPrivateProperty() method
var o = {}; //Here is an empty object

//Add property accessor methods getName and setName()
// Ensure that only string values are allowed
addPrivateProperty(o,"Name",function(x){return typeof x=="string";});

o.setName("Frank"); //Set the property value
console.log(o.getName()); //Get the property value
o.setName(0);  // Try to set a value of the wrong type

// This function returns a function that always returns v
function constfunc(v) {return function(){return v;};}

//Create an array of constant functions:
var funcs = [];
for (var i=0; i<10;i++) funcs[i] = constfunc(i);

//The function at array element 5 returns the value 5
funcs[5](); // => 5

// arguments.length - the number of arguments that were passed to the function

// function type, "length" - the arity of the function - the number of papameters it 
// declares in its parameter list. read-only ( the number of arguments that the function expects)

// This function uses arguments.callee, so it won't work in stric mode.
function check(args){
	var actual = args.length;
	var expected = args.callee.length;
	if(actual !== expected)
		throw Error("Expected "+expected +"args; got"+actual);
}

function f(x,y,z){
	check(arguments); // check that the actual # of args matches expected #/
	return x+y+z; //Now do the rest of the function normally
}


//8.7.2 The prototype property

// prototype object


//8.7.3  (8.2.4)

//call() and apply() = the first arguments to both call() and apply() is the object on which 
// the function is to be invoked; this argument is the invocation context and become the value 
// of the this keyoword within the body of the function


f.call(o); f.call(o); // <=> 
o.m=f;
o.m();
delete o.m;

//Replace the method named m of the object o woth a version that logs
// messages before and after invoking the original method.
function tract(o,m){
	var original = o[m];
	o[m] = function(){
		console.log(new Date(), "Entering:", m);
		var result = origin.apply(this, arguments);
		console.log(new Data(), "Exiting:", m);
		return result;
	};
}


//A function.bind() method for ECMAScript3
if(!Function.prototype.bind){
	Function.prototype.bind = function(o /*,args*/){
		//save the this and arguments values into variables so we can
		// use them in the nested function below.
		var self = this, boundArgs = arguments;

		// The return value of the bind() method is a function
		return function(){
			//Build up an argument list, starting with any args passed
			// to bind after the first one, and follow those with all args
			// passed to this function.
			var args = [] , i;
			for(i=1; i<boundArgs.length;i++) args.push(boundArgs[i]);
			for(i=0; i<arguments.length;i++) args.push(arguments[i]);

				// Now invoke self as a method of o, with those arguments
			return self.apply(o,args);
		};
	};
}

//8.7.6 The Function() constructor
// 4.12.2  eval()
var f = new Function("x","y","return x*y;");

var f = function(x,y){return x*y;}

//functions created by Function() constructor do not use lexical scoping.


//8.7.7 Callable Objects
// A callable object is any object that can be invoked in a function
// invocation expression.


//8.8 Funcaional Programming

//8.8.1 Processing Arrays with Functions

var data =[1,1,3,5,5];
//The mean is the sum of the elements divided by the number of elements
var total = 0;
for(var i = 0; i<data.length;i++) total += data[i];
var mean = total/data.length;

total = 0;
for(var i = 0;i<data.length;i++){
	var deviation = data[i]-mean;
	total += deviation*deviation;
}
var stddev = Math.sqrt(total/(data.length-1));


var sum = function(x,y) {return x+y;}
var square = function(x){return x*x;}

var data= [1,1,3,5,5];
var mean = data.reduce(sum)/data.length;
var deviations = data.map(function(x){return x-mean;});
var stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));

//Call the funcion f for each element of array a and return 
// an array of the results. Use Array.prototype.map if it is defined.
var map = Array.prototype.map ? function(a,f){return a.map(f);}:function(a,f){
	var results = [];
	for(var i=0; len = a.length; i<len;i++){
		if(i in a) results[i] = f.call(null,a[i],i,a);
	}
	return results;
}

//Reduce the array a to a single value using the function f and
//optional initial value. Use Array.prototype.reduce if it is defined.
var reduct = Array.prototype.reduce ? 
	function (a,f,inital){
		if (arguments.length >2)
			return a.reduct(f,initial);
		else return a.reduce(f);
	}
	: function(a,f,inital){
		var i = 0, len = a.length , accumulator;
		// start with the specified initial value, or the first value in a
		if (arguments.length>2) accumulator = initial;
		else { // Find the first defined index in the array
			if (len ===0 ) throw TypeError();
				while (i<len){
					if(i in a){
						accumulator = a[i+1];
						break;
					}
					else i++;
				}
				if(i==len) throw TypeError();

			}
			while(i<len){
				if(i in a)
					accumulator = f.call(undefined,accumulator,a[i],i,a);
				i++;
			}
			return accumulator;
	};
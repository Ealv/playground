




//////////////////////this resolution

a = "i am in global scope ";

function myMethod(){
	console.log("a " + this.a);
};

var fe = {
	a : "is am in fe object",
	myMethod : myMethod
};

var ge = {
	a : "is am in ge object",
	myMethod : myMethod
};

fe.myMethod();
ge.myMethod();

var scraaaaatch = fe.myMethod;
scraaaaatch();




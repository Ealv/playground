
a = "gooooooooo";
b = "gooooooooo";

function SuperClass (){
	console.log("superclass constructor ");
	this.b = 5;

	var inpriv= -550;

	this.inmethodForPrivate = function(){
		console.log("priv is  " + inpriv);
	};

	this.insetMethodForPrivate = function(priva){
		inpriv = priva;
	};

};

SuperClass.prototype.methodInherit = function(){
	console.log("b inherited is " + this.b);
};

function CurrentClass(priv) {
	SuperClass.call(this);
	this.a = 10;

	//var priv= 50;

	this.methodForPrivate = function(){
		console.log("priv is  " + priv);
	};

	this.setMethodForPrivate = function(priva){
		priv = priva;
	};

};

//hiiie, this wil use the SAME
// proto for the two class
//CurrentClass.prototype = SuperClass.prototype;

//hiiie, here we call the SuperClass constrcutor again 
//if you remove the suerpClass.call(this) you will add the a has proto and not in ownProperty, this will cause futur shadowing...
//CurrentClass.prototype = new SuperClass();

CurrentClass.prototype = Object.create(SuperClass.prototype);
CurrentClass.prototype.constructor = CurrentClass;

CurrentClass.prototype.method = function(){
	console.log("a is bind " + this.a);
};


var o = new CurrentClass(10);

o.method();
o.methodInherit();
o.methodForPrivate();
o.setMethodForPrivate(20);
o.methodForPrivate();


o.inmethodForPrivate();
o.insetMethodForPrivate(-20);
o.inmethodForPrivate();

var b = new CurrentClass(50);
o.methodForPrivate();
b.setMethodForPrivate(-8800);
o.methodForPrivate();
b.methodForPrivate();


o.methodInherit();

SuperClass.prototype.methodInherit = function(){
	console.log("b inherited mutated is " + this.b);
};

o.methodInherit();

/*

//console.log("constructor " + CurrentClass.constructor);

function toto(){
	var a =10;
	return {
		getA : function(){console.log(" aais  "+  a);},
	 	setA : function(b){a =b;}
	};
};


var truc = toto();
truc.getA();
var troc = toto();
troc.getA();
troc.setA(-80);
troc.getA();
truc.getA();
*/




//////////////////////:::desugared inherit class 1.6 from babel ////////////////////////////

var _inherits = function (subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	} 
	subClass.prototype = Object.create(superClass && superClass.prototype, 
		{ constructor: 
			{ value: subClass, enumerable: false, writable: true, configurable: true } });
	if (superClass)
		subClass.__proto__ = superClass; 
};
	
var _createClass = (function () {
	function defineProperties(target, props) { 
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor)
				descriptor.writable = true; 
				Object.defineProperty(target, descriptor.key, descriptor); 
			}
	} 
	return function (Constructor, protoProps, staticProps) { 
		if (protoProps)
			defineProperties(Constructor.prototype, protoProps); 
		if (staticProps)
			defineProperties(Constructor, staticProps);
		return Constructor; 
	}; 
})();


var Toto = (function () {
        function Toto() {
                _classCallCheck(this, Toto);
                this.a = 10;
        }

        _createClass(Toto, [{
                key: "getA",
                value: function getA() {
                        return this.a;
                }
        }]);

        return Toto;
})();

var Titi = (function (_Toto) {
        function Titi(a, b) {
                _classCallCheck(this, Titi);

                _get(Object.getPrototypeOf(Titi.prototype), "constructor", this).call(this, a);
                this.b = b;
        }

        _inherits(Titi, _Toto);

        _createClass(Titi, [{
                key: "getB",
                value: function getB() {
                        return this.a;
                }
        }, {
                key: "getA",
                value: function getA() {
                        return _get(Object.getPrototypeOf(Titi.prototype), "getA", this).call(this) + " aa   ";
                }
        }, {
                key: "getAll",
                value: function getAll() {
					return [this.getA(), this.getB()];                
		}
        }]);

        return Titi;
})(Toto);



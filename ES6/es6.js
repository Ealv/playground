


class Toto {
	constructor(a){
		this.a = a;
	}
	  getA (){
		return this.a;}
};



class Titi extends Toto{
	constructor(a,b){
		super(a);
		var priv = 5;
		this.b = b;
		this.getPriv= function() {
			console.log("priv " + priv);
		};
		this.setPriv = function(priii) {
			priv = priii;
		};
	};
	getB (){
		return this.b;
	};
	getA(){
		return super.getA() + " aa   ";
	};
	getAll(){
		let i;
		return [
			this.getA(),
			this.getB()
		];
	};
};

var truc = new Titi();
truc.getPriv();

var troc = new Titi();
truc.setPriv(51);
truc.getPriv();
troc.getPriv();

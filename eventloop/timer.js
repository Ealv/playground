
///var q = require("q");
//var prom = new q.Promise();
//console.dir(prom);

//event loop

var clc = require('cli-color');

function sleep(sheep){
	if(!sheep){
		sheep=1000000000;
	}
	while(sheep>0){
		sheep--;
	};
}

function helloInStack(n){
	if(n >= 0){
		console.log(clc.white("hello fro stack with no time  " + n));
		helloInStack(n - 1);
	}
}

function helloNextTick(n){
	return process.nextTick(function(){ 
		//sleep();
		if(n >= 0){
			console.log(clc.green("hello nextTick " + n));
			helloNextTick(n - 1);
		}
	});
}

function helloImmediate(n){
	return setImmediate(function(){
		//sleep();
		if(n >= 0){
			sleep();
			console.log(clc.blue("hello immediate " + n));
			helloImmediate(n - 1);
		}
	});
}

function helloSetTimeout(n){
	return setTimeout(function(){
		if(n >= 0){
			sleep();
			console.log(clc.yellow("hello settimeout " + n));
			helloSetTimeout(n - 1);
		}
	},0);
}

function helloFromDeffered(n){
	return setTimeout(function(){
		if(n >= 0){
			sleep();
			var prom = new Promise();
			console.dir(prom);
			console.log(clc.pink("hello settimeout " + n));
			helloFromDeffered(n - 1);
		}
	},0);
}

setTimeout(function(){
	//helloInStack(5);
	//helloFromDeffered(5);
	//helloNextTick(5);
	//helloSetTimeout(5);
	//helloImmediate(5);
},0);


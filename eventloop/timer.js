 
var Suite = require('benchmark').Suite;
var fs = require('fs');

//var suite = new Suite


//console.dir(deffered);

//event loop

/*
console.log("one");
setTimeout(function(){console.log("two! ");},1000);
console.log("three");
*/




function sleep(n){
	if(!n)n=1000000000;
	while(n>0){n--;};
}



function helloInStack(n){
	if(!n){
		 console.log("hello in stack  0");
		 return;	
		}
	console.log("hello in stack  " + n);
	helloInStack(n - 1);
}

function helloNextTick(n){
	if(!n)
		return process.nextTick(function(){console.log("hello NextTick 0");});
	console.log("hello NextTick " + n);
	return process.nextTick(function(){ 
		//sleep(1000000000);
		helloNextTick(n - 1)});
}

function helloNImmediate(n){
	if(!n)
		return setImmediate(
			function(){
				console.log("hello immediate 0")});
	return setImmediate(function(){
		sleep(1000000000);
		console.log("hello immediate " + n);
		helloNImmediate(n - 1);
	});
}


function helloSetTimeout(n){
	if(!n)
		return setTimeout(
			function(){
				console.log("hello settimeout 0")},0);
	return setTimeout(function(){
		console.log("hello settimeout " + n);
		helloSetTimeout(n - 1);
	},0);
}


//current stack, nextTick, setTimeout and setImmediate 


setTimeout(function(){console.log("setTimeout with no time! ");},0);
setImmediate(function(){console.log("set immediate !")});
process.nextTick(function(){
	console.log("process next tick  !");
	//process.nextTick(function(){console.log("process next tick 2 !");});
});
console.log("in current stack");

setTimeout(function() {
  setTimeout(function() {
    console.log('hiiiii setTimeout')
  }, 0);
  setImmediate(function() {
    console.log('hiiiii setImmediate')
  });
}, 10);



/*
///////////////////closure ///////////////////////////////////
var startTimeValue = {};

function Toto(i){
	var startTime = new Date().getTime();
	startTimeValue[i] = startTime;
	var j =0; 
	while(j < 1000000)j++;

	setTimeout(function(){
		if(startTime !== startTimeValue[i]){
			console.log("not the same value closure for " + i);
			console.log("start time  " + startTime + "  and  " + startTimeValue[i]);
		}
		else {
			console.log("it is the same");
		}
		//console.log("startiem " + startTime + " duration " + (new Date().getTime() - startTime));
	},1500);
};

for (var i =0 ;i <10;i++){
	Toto(i);
}	

console.log("startTimeValue");
console.log(startTimeValue);

*/



/*
helloInStack(5);
helloNextTick(5);
helloNImmediate(5);
helloSetTimeout(5);
*/

//setTimeout(function(){console.log("fro time out with 1 time! ");},1);
//setTimeout(function(){console.log("fro time out with 2 time! ");},2);

//manage NO keep alive

//var timer1 = setInterval(function(){console.log("hie! ");},100);
//var timer2 = setTimeout(function(){console.log("hie 2 ! ");},1500);

///timer1.unref();


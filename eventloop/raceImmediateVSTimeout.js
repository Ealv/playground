var winner = "";


//setTimeout(function(){



setTimeout(function(){
	if(!winner) {
		winner = "settimeout";
		console.log(winner);
}},0);



setImmediate(function(){
	if(!winner) {
		winner = "setimmediate";
		console.log(winner);
}});

//},0);


var Immutable = require('immutable');
var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 2555);
map1.get('b'); // 2
map2.get('b'); // 50

var map3 = map2.set('b',2); 


//is immutable only define ref under values ?

if(map1 === map3)
	console.log("yes it is ");
else
	console.log("no it is not the same " );

//check for each key each value deeply
if(Immutable.is(map1, map3) === true)
	console.log("but deep check equal is ok of course ");


var map1 = Immutable.Map({a:1, b:1, c:1});
var map2 = Immutable.Map({a:1, b:1, c:1});
console.log("do we have ref equlity	? " + ((map1 === map2)? "ref equality" :" not ref equality"));
console.log("do we have deeep equality	?  "  + ((Immutable.is(map1, map2) === true) ? "deep equality " :" no deeep equality" ));




var seq = Immutable.Map(map1).toSeq();

var map3 = seq.flip().flip();


//var map3 = map2.seq(

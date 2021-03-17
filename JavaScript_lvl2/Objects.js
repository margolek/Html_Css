var canInfo = {make:'Toyota',year:1990,model:"Camry"}
var myNewO = {a:'Hello',b:[1,2,3],c:{inside:['a','b']}}

for (key in canInfo){
	console.log(key)
	console.log(canInfo[key])
}

var simple = {
	prop: "Hello",
	myMethod: function(){
		console.log("My methos was called")
	}
}

var myObj = {
	name : "Slawek",
	greet : function(){
		console.log("Hello "+this.name)
	}
}

function helloYou(name){
	console.log("Hello "+name)
}

function addNum(num1,num2){
	console.log(num1+num2)
}

function helloSomeone(name="Frankie") {
	console.log("Hello " + name)
}

function formal(name="San",title="Sir") {
	return title+" "+name
}

function timesFive(numInput) {
	// result is onlny in local scope
	var result = numInput * 5
	return result
}

// Global Scope
var v = " Global V"
var stuff = "Global Stuff"

function fun(stuff) {
	console.log(v)
	stuff = "Reassign stuff inside func"
	console.log(stuff)
}
fun()
console.log(stuff)
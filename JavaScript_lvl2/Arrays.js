var country1 = "USA"
var country2 = "Germany"
var country3 = "China"
var countries = ["USA","Germany","China"]
var mixed = [true,20,"string"]
var myArr = ['one','two','three']
var lastItem = myArr.pop()
//Add new item to array
myArr.push("new_item")

//Array Iteration
var arr = ['A','B','C']

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i])
}

for (letter of arr){
	console.log(letter)
}

// Pass each item of array into function
arr.forEach(alert)

function addAwesome(name){
	console.log(name+" is awecome")
}

var topics = ['python','django','science']
topics.forEach(addAwesome)
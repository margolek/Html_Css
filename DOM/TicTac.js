var content = document.querySelectorAll('td')
console.log(content)
function changeMarker(){
	if (this.textContent == ""){
  		this.textContent = "X"}
  	else if (this.textContent == "X"){
  		this.textContent = "O"
  	}else if (this.textContent == "O"){
  		this.textContent = ""
  	}}


for (var i = 0; i < content.length; i++) {
	content[i].addEventListener('click',changeMarker)
}


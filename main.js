

let b=parseInt(prompt("enter the start value"))


for(let i=0;i<b; i++){

	for(let j=b;j>i; j--){
		document.write((j-i)+"&nbsp")
	}
	document.write("<br>")

	for(let k=0; k<i+1; k++){
		document.write("&nbsp&nbsp" +"&nbsp")
	}
	
}
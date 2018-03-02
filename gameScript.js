var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
var heading = document.querySelector(".headings");
var message = document.querySelector(".messageSpan")
var resetButton = document.querySelector(".resetButton");

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor.toUpperCase();
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	message.innerHTML = " ";
	heading.style.backgroundColor = "#fafafa";
	heading.style.color = "#608EFA"
})

colorDisplay.innerHTML = pickedColor.toUpperCase();

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor)
		{
			changeColors(clickedColor);
			message.innerHTML = "Correct!"
			heading.style.backgroundColor = clickedColor;
			heading.style.color = "#ffffff";
		}
		else
		{
			this.style.backgroundColor = "#fafafa";
			message.innerHTML = "Try Again!"
		}
	})
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256 );
	var g = Math.floor(Math.random() * 256 );
	var b = Math.floor(Math.random() * 256 );
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



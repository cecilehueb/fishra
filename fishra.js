const image = document.getElementById("img");
let currentPos = 0;	
let images = [
	"img/randomimg/photo01.jpeg",
    "img/randomimg/photo01.jpg",
	"img/randomimg/photo02.jpeg",
	"img/randomimg/photo02.PNG",
	"img/randomimg/photo03.jpg",
	"img/randomimg/photo04.jpg",
	"img/randomimg/photo05.PNG",
	"img/randomimg/photo06.jpg",
]

	// defines a function and calls every 1 second
var loop;
function imageLoop() {
	loop = setInterval(getRandomImage, 1000);
}

imageLoop();
	
	// loops trough list of images
function getRandomImage(){
	if (++currentPos >= images.length)
        currentPos = 0;
		image.src = images[currentPos];
}
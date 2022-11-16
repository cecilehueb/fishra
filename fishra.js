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
	"img/randomimg/photo07.jpg",
	"img/randomimg/photo08.jpg",
	"img/randomimg/photo09.jpg",
	"img/randomimg/photo10.jpg",
	"img/randomimg/photo11.jpg",
	"img/randomimg/photo12.jpg",
	"img/randomimg/photo13.jpg",
	"img/randomimg/photo14.jpg",
	"img/randomimg/photo15.jpg",
	"img/randomimg/photo16.jpg",
	"img/randomimg/photo17.jpg",
	"img/randomimg/photo18.jpg",
	"img/randomimg/photo19.jpg",
	"img/randomimg/photo20.jpg",
	"img/randomimg/photo21.jpg",
	"img/randomimg/photo22.jpeg",
	"img/randomimg/photo23.jpg",
	"img/randomimg/photo24.jpg",
	"img/randomimg/photo25.jpg",
	"img/randomimg/photo26.jpg",
	"img/randomimg/photo27.jpg",
	"img/randomimg/photo28.jpeg",
	"img/randomimg/photo29.jpg",
	"img/randomimg/photo30.jpeg",
	"img/randomimg/photo31.JPG",

]

	// defines a function and calls every 1 second
var loop;
function imageLoop() {
	loop = setInterval(getRandomImage, 700);
}

imageLoop();
	
	// loops trough list of images
function getRandomImage(){
	if (++currentPos >= images.length)
        currentPos = 0;
		image.src = images[currentPos];
}
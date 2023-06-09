const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//variables used for dots
let iteration = 0;
let dots = document.querySelector(".dots");
let dotSelected = document.createElement("div");
dotSelected.className = "dot_selected dot";
let dot = document.createElement("div");
dot.className = "dot";

document.body.onload = addDot;
//adding dots - number depend of number of slides
function addDot() {
	if (iteration === 0) {
		dots.append(dotSelected);
		iteration++;
	}
	while (iteration < slides.length) {
		let clone = dot.cloneNode(true);
		dots.append(clone);
		iteration++;
	}
}

//variables used for carousel
let slideNumber = 0;
let currentSlide = 0;
let baliseImg = document.getElementById("current-img");
let baliseText = document.getElementById("current-text");

//functions for carousel
function switchSlide(currentSlide) { //used to switch between slides - image + text
	currentSlide = slides[slideNumber];
	baliseImg.src =`./assets/images/slideshow/${currentSlide.image}`;
	baliseText.innerHTML = `${currentSlide.tagLine}`;
}

function cloneDot(positionClone) { //add dot - argument expected is 'afterbegin' or 'beforeend'
	let clone = dot.cloneNode(true);
	dots.insertAdjacentElement(positionClone, clone);
}

function removeDot (position) {
	if (position === 'firstChild') {
		dots.firstChild.remove();
	} else if (position === 'lastChild') {
		dots.lastChild.remove();
	}
}

function switchComplete(direction) {
	if (slideNumber === 0 && direction === 'left'){
			slideNumber = slides.length-1;
			for (let i = 0; i < slideNumber; i++) {
				cloneDot('afterbegin');
				removeDot(position = 'lastChild');
			} 
			switchSlide(currentSlide);
	} else if (slideNumber === slides.length-1 && direction === 'right') {
			slideNumber = 0;
			for (let i = 0; i < slides.length-1; i++) {
				cloneDot('beforeend');
				removeDot(position = 'firstChild');
			}
			switchSlide(currentSlide);
	}
	else {
		if (direction === 'left') {
			slideNumber--;
			switchSlide(currentSlide);
			cloneDot('beforeend');
			removeDot(position = 'firstChild');
		} else if (direction === 'right') {
			slideNumber++;
			switchSlide(currentSlide);
			cloneDot('afterbegin');
			removeDot(position = 'lastChild');
		}	
	}
}

let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
	switchComplete('left');
});

let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
	switchComplete ('right');
});


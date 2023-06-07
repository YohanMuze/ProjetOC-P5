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

function cloneDotNext() { //add dot after the dot_selected and remove first dot
	let clone = dot.cloneNode(true);
	dots.insertAdjacentElement('beforeend', clone);
	dots.firstChild.remove();
}

function cloneDotPrev() { //add dot before dot_selected and remove last dot
	let clone = dot.cloneNode(true);
	dots.insertAdjacentElement('afterbegin', clone);
	dots.lastChild.remove();
}


let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
	if (slideNumber === 0){
		slideNumber = slides.length-1;
		switchSlide(currentSlide);
		for (let i = 0; i < slideNumber; i++) {
			cloneDotPrev();
		}
		
	} else {
		slideNumber--;
		switchSlide(currentSlide);
		cloneDotNext();
	}
});

let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
	console.log("Bouton droit");
	if (slideNumber === slides.length-1){
		slideNumber = 0;
		switchSlide(currentSlide);
		for (let i = 0; i < slides.length-1; i++) {
			cloneDotNext();
		}
	} else {
		slideNumber++;
		switchSlide(currentSlide);
		cloneDotPrev();
	}
});


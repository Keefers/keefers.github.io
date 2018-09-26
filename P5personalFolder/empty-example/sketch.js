var canvas; 

// screen text

var intro;
var title;
var firstOption;
var secondOption;
var thirdOption; 
var fourthOption; 
var userName; 

// inputs

var nameInput; 

function setup() {

	canvas = createCanvas (windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");

	gameStart();
}

function gameStart(){

	background(0);

	intro = createP("What is your name?")	
	createElement("br");

	nameInput = createInput("Type your name in here.");
	nameInput.changed(storyStart);

}

function storyStart() {

	nameInput.hide();
	intro.hide();

	userName = createElement('h1', nameInput.value());
	title = createElement('h1', "Can you find your way out?");


}
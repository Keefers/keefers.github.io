var canvas; 

// screen text

var intro;
var title;
var firstOption;
var secondOption;
var thirdOption; 
var fourthOption; 
var random;
var userName; 

// inputs

var nameInput; 

// Boolean

var easyWayToggle;

function preload() {

	img = loadImage('./Images/dogwatermelon.jpg');
}

function setup() {

	canvas = createCanvas (windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");

	gameStart();
}

function gameStart(){

	background(0);

	intro = createP("What is your name?");
	createElement("br");

	nameInput = createInput("Type your name in here.");
	nameInput.changed(storyStart);

	random = createButton('What this oWo?');
	random.mousePressed(puppyPic);

}

function puppyPic() {

	image(img, windowWidth/2, windowHeight/2,)
}

function storyStart() {

	nameInput.hide();
	intro.hide();

	userName = createElement('h1', nameInput.value());
	title = createElement('h1', "Can you find your way out?");

	firstOption = createP("Take the easy way out. You have one chance.");
	secondOption = createP("Take the hard way out.");

	firstOption.mousePressed(easyWay);
	secondOption.mousePressed(hardWay);

}

function easyWay() {

	easyWayToggle = true;

	firstOption.hide();
	secondOption.hide();
	userName.hide();
	title.hide(); 

	// background(0);
		
}

function gameOver() {

	userName.show();

	background('blue');

	createP("Game over. You done goofed lad.");

}
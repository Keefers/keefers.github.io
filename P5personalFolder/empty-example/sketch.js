var canvas; 

// screen text

var intro;
var title;
var firstOption;
var secondOption;
var thirdOption; 
var fourthOption; 
var random;
var dog;
var userName; 

// inputs

var nameInput; 

// Boolean

var easyWayToggle;

function preload(){

	dog = loadImage('../images/dogwatermelon.jpg');	

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
	intro.style("padding-left", "1");
	createElement("br");

	nameInput = createInput("Type your name!");
	nameInput.style("padding-left", "1");
	nameInput.changed(storyStart);
	createElement("br");
	createElement("br");

	random = createButton('What this oWo?');
	random.position(windowWidth/2, windowHeight/2);
	random.mousePressed(puppyPic);

}

function puppyPic() {

	random.hide();
	createElement("br");

	var tempPar = createP("Just thought a picture of a dog would make your day better!");

	imageMode(CENTER);
	image(dog,windowWidth/2, windowHeight/2, dog.width/5, dog.height/5);
}

function storyStart() {

	nameInput.hide();
	intro.hide();
	tempPar.hide();

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
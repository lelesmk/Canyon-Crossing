/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);
    
	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...

//    fill(0);
//    ellipse(gameChar_x, gameChar_y, 5, 5);
    
    // head1
    fill(240, 195, 135);
    ellipse(gameChar_x, gameChar_y-50, 25, 25);
    // body1
    fill(255, 50, 50);
    rect(gameChar_x-10, gameChar_y-40, 20, 35);
    // arms1
    fill(0);
    rect(gameChar_x-10, gameChar_y-40, 5, 20);
    rect(gameChar_x+5, gameChar_y-40, 5, 20);
    // feet1
    rect(gameChar_x-10, gameChar_y-7, 8, 8);
    rect(gameChar_x+2, gameChar_y-7, 8, 8);
    
    

	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...

//    fill(0);
//    ellipse(gameChar_x, gameChar_y, 5, 5);
    
    // head2
    fill(240, 195, 135);
    ellipse(gameChar_x, gameChar_y-50, 25, 25);
    // body2
    fill(255, 50, 50);
    rect(gameChar_x-10, gameChar_y-40, 20, 20);
    // arms2
    fill(0);
    rect(gameChar_x-10, gameChar_y-42, 5, 10);
    rect(gameChar_x+5, gameChar_y-42, 5, 10);
    // feet2
    rect(gameChar_x-10, gameChar_y-22, 8, 8);
    rect(gameChar_x+2, gameChar_y-22, 8, 8);
    

	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
    
//    fill(0);
//    ellipse(gameChar_x, gameChar_y, 5, 5);
    
    // head3
    fill(240, 195, 135);
    ellipse(gameChar_x, gameChar_y-50, 25, 25);
    // body3
    fill(255, 50, 50);
    rect(gameChar_x-5, gameChar_y-40, 10, 30);
    // arms3
    fill(0);
    rect(gameChar_x, gameChar_y-40, 5, 20);
    // feet3
    rect(gameChar_x+2, gameChar_y-7, 8, 8);
    rect(gameChar_x-12, gameChar_y-15, 8, 8);
    


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...

//    fill(0);
//    ellipse(gameChar_x, gameChar_y, 5, 5);
    
    // head4
    fill(240, 195, 135);
    ellipse(gameChar_x, gameChar_y-50, 25, 25);
    // body4
    fill(255, 50, 50);
    rect(gameChar_x-5, gameChar_y-40, 10, 30);
    // arms4
    fill(0);
    rect(gameChar_x-5, gameChar_y-40, 5, 20);
    // feet4
    rect(gameChar_x-10, gameChar_y-7, 8, 8);
    rect(gameChar_x+5, gameChar_y-15, 8, 8);

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...


//    fill(0);
//    ellipse(gameChar_x, gameChar_y, 5, 5);
    
    // head5
    fill(240, 195, 135);
    ellipse(gameChar_x, gameChar_y-50, 25, 25);
    // body5
    fill(255, 50, 50);
    rect(gameChar_x-5, gameChar_y-40, 10, 20);
    // arms5
    fill(0);
    rect(gameChar_x-5, gameChar_y-40, 5, 10);
    // feet5
    rect(gameChar_x+2, gameChar_y-25, 8, 8);

    
	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
    
    
//    fill(0);
//    ellipse(gameChar_x, gameChar_y, 5, 5);
    
    // head7
    fill(240, 195, 135);
    ellipse(gameChar_x, gameChar_y-50, 25, 25);
    // body7
    fill(255, 50, 50);
    rect(gameChar_x-5, gameChar_y-40, 10, 20);
    // arms7
    fill(0);
    rect(gameChar_x, gameChar_y-40, 5, 10);
    // feet7
    rect(gameChar_x-10, gameChar_y-25, 8, 8);

}

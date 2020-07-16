/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	// green ground 1
    rect(0, 432, 250, 144); //draw some green ground
    // green ground 2
    rect(370, 432, 654, 144);

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	fill(255);
	text("cloud", 200, 100);
    
    ellipse(220, 133, 50, 50);
    ellipse(200, 133, 35, 35);
    ellipse(240, 133, 35, 35);
    
    fill(230);
    ellipse(370, 180, 50, 50);
    ellipse(350, 180, 35, 35);
    ellipse(390, 180, 35, 35);

	//2. a mountain in the distance
	//... add your code here

	noStroke();
	fill(255);
	text("mountain", 500, 256);
    
    fill(0, 153, 153);
    triangle(700, 200, 700, 432, 560, 432);
    fill(0, 51, 51);
    triangle(700, 200, 700, 432, 840, 432);
    fill(255, 160);
    beginShape();
    vertex(670, 250);
    vertex(695, 245);
    vertex(712, 255);
    vertex(715, 245);
    vertex(732, 252);
    vertex(700, 200);
    vertex(670, 250);
    endShape();
    
    fill(0, 153, 153);
    triangle(520, 280, 520, 432, 400, 432);
    fill(0, 51, 51);
    triangle(520, 280, 520, 432, 640, 432);
    fill(255, 160);
    beginShape();
    vertex(488, 320);
    vertex(515, 312);
    vertex(532, 324);
    vertex(534, 308);
    vertex(546, 312);
    vertex(520, 280);
    vertex(488, 320);
    endShape();
    

	//3. a tree
	//... add your code here

	noStroke();
	fill(255);
	text("tree", 800, 346);
    
    fill(102, 51, 0);
    rect(880, 352, 18, 80);
    
    fill(0, 153, 0);
    triangle(889, 332, 855, 362, 923, 362);
    triangle(889, 322, 855, 352, 923, 352);
    triangle(889, 307, 855, 337, 923, 337);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

    // river
    fill(0, 255, 255);
    rect(250, 500, 120, 50);
    
	//... add your code here
    // cliff rocks 1
    fill(55, 35, 20);
    rect(0, 440, 240, 140, 10);
    // cliff rocks 2
    rect(380, 440, 644, 140, 10);
    
    fill(105, 110, 140);
    rect(0, 440, 160, 50, 10);
    rect(0, 500, 80, 75, 10);
    rect(90, 500, 70, 75, 10);
    rect(170, 440, 60, 50, 10);
    rect(170, 500, 60, 75, 10);
    
    // ravine
    rect(245, 550, 130, 50, 10);
    
    rect(390, 470, 100, 110, 10);
    
    rect(520, 450, 100, 130, 10);
    
    rect(640, 440, 160, 50, 10);
    rect(640, 500, 80, 75, 10);
    rect(730, 500, 70, 75, 10);
    rect(810, 440, 60, 50, 10);
    rect(810, 500, 60, 75, 10);
    
    rect(920, 470, 100, 50, 10);
    rect(920, 530, 60, 50, 10);
    rect(990, 530, 30, 50, 10);
    
    
    
    noStroke();
	fill(255);
	text("canyon", 100, 480);
    
    
	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
	text("collectable item", 380, 380);
    

    fill(255, 210, 55);
    stroke(250, 240, 70);
    strokeWeight(3);
    ellipse(430, 420, 20, 20);
    
    line(430, 405, 430, 395);
    
    line(415, 410, 410, 405);
    line(412, 420, 405, 420);
    line(415, 430, 410, 435);
    
    line(430, 436, 430, 445);
    
    line(445, 410, 450, 405);
    line(445, 420, 452, 420);
    line(445, 430, 450, 435);
    
    fill(200, 160, 10);
    textSize(15);
    text("$", 425, 412, 20, 20);
    
    
    strokeWeight(1);
//    grid();
//    displayMousePosition();
}

function grid() {
    stroke(1);
    for (var x = 0; x < width; x += 10) {
        line(x, 0, x, height);
        for (var y = 0; y < height; y += 10) {
            line(0, y, width, y);
        }
    }
}

function displayMousePosition() {
    fill(255, 255, 255);
    rect(0, 0, 60, 20);
    fill(0);
    text(mouseX + ',' + mouseY, 10, 15);
}
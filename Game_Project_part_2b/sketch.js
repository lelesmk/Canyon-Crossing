/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    
    // width / 2 = 512
    
    canyon = {
        x: width/2,
        y: floorPos_y
    };
    
    collectable = {
        x: width/2,
        y: floorPos_y
    };

    mountain = {
        x: width/2,
        y: floorPos_y
    };
    
    cloud = {
        x: width/2,
        y: floorPos_y
    };
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
    
    // Clouds
    // cloud 1
	fill(255);    
    ellipse(cloud.x-292, floorPos_y-299, 50, 50);
    ellipse(cloud.x-312, floorPos_y-299, 35, 35);
    ellipse(cloud.x-272, floorPos_y-299, 35, 35);
    // cloud 2
    fill(230);
    ellipse(cloud.x-142, floorPos_y-252, 50, 50);
    ellipse(cloud.x-162, floorPos_y-252, 35, 35);
    ellipse(cloud.x-122, floorPos_y-252, 35, 35);
    // cloud 3
    fill(200);
    ellipse(cloud.x-42, floorPos_y-299, 50, 50);
    ellipse(cloud.x-62, floorPos_y-299, 35, 35);
    ellipse(cloud.x-22, floorPos_y-299, 35, 35);
    // cloud 4
    fill(230);
    ellipse(cloud.x+258, floorPos_y-250, 50, 50);
    ellipse(cloud.x+238, floorPos_y-250, 35, 35);
    ellipse(cloud.x+278, floorPos_y-250, 35, 35);
     // cloud 4
    fill(200);
    ellipse(cloud.x+358, floorPos_y-200, 50, 50);
    ellipse(cloud.x+338, floorPos_y-200, 35, 35);
    ellipse(cloud.x+378, floorPos_y-200, 35, 35);
    
    
    // Mountain
    
    // mount 1
    fill(0, 153, 153);
    triangle(mountain.x-102, floorPos_y-152, 
             mountain.x-102, floorPos_y, 
             mountain.x-222, floorPos_y);
    fill(0, 51, 51);
    triangle(mountain.x-102, floorPos_y-152, 
             mountain.x-102, floorPos_y, 
             mountain.x-18, floorPos_y);
    fill(255, 160);
    beginShape();
    vertex(mountain.x-134, floorPos_y-112);
    vertex(mountain.x-107, floorPos_y-118);
    vertex(mountain.x-90, floorPos_y-108);
    vertex(mountain.x-88, floorPos_y-124);
    vertex(mountain.x-76, floorPos_y-120);
    vertex(mountain.x-102, floorPos_y-152);
    vertex(mountain.x-134, floorPos_y-112);
    endShape();
    

    // mount 3
    fill(0, 153, 153);
    triangle(mountain.x+338, floorPos_y-152, 
             mountain.x+338, floorPos_y, 
             mountain.x+218, floorPos_y);
    fill(0, 51, 51);
    triangle(mountain.x+338, floorPos_y-152, 
             mountain.x+338, floorPos_y, 
             mountain.x+458, floorPos_y);
    fill(255, 160);
    beginShape();
    vertex(mountain.x+306, floorPos_y-112);
    vertex(mountain.x+333, floorPos_y-118);
    vertex(mountain.x+350, floorPos_y-108);
    vertex(mountain.x+352, floorPos_y-124);
    vertex(mountain.x+876, floorPos_y-120);
    vertex(mountain.x+338, floorPos_y-152);
    vertex(mountain.x+818, floorPos_y-112);
    endShape();
    
    // mount 4
    fill(0, 153, 153);
    triangle(mountain.x+488, floorPos_y-232, 
             mountain.x+488, floorPos_y, 
             mountain.x+348, floorPos_y);
    fill(0, 51, 51);
    triangle(mountain.x+488, floorPos_y-232, 
             mountain.x+488, floorPos_y, 
             mountain.x+628, floorPos_y);
    fill(255, 160);
    beginShape();
    vertex(mountain.x+458, floorPos_y-182);
    vertex(mountain.x+473, floorPos_y-187);
    vertex(mountain.x+900, floorPos_y-177);
    vertex(mountain.x+503, floorPos_y-187);
    vertex(mountain.x+980, floorPos_y-180);
    vertex(mountain.x+488, floorPos_y-232);
    vertex(mountain.x+458, floorPos_y-182);
    endShape();
    
    // mount 2
    fill(0, 153, 153);
    triangle(mountain.x-262, floorPos_y-232, 
             mountain.x-262, floorPos_y, 
             mountain.x-402, floorPos_y);
    fill(0, 51, 51);
    triangle(mountain.x-262, floorPos_y-232, 
             mountain.x-262, floorPos_y, 
             mountain.x-122, floorPos_y);
    fill(255, 160);
    beginShape();
    vertex(mountain.x-292, floorPos_y-182);
    vertex(mountain.x-267, floorPos_y-187);
    vertex(mountain.x-250, floorPos_y-177);
    vertex(mountain.x-247, floorPos_y-187);
    vertex(mountain.x-230, floorPos_y-180);
    vertex(mountain.x-262, floorPos_y-232);
    vertex(mountain.x-292, floorPos_y-182);
    endShape();

    
    
    // Green ground 1
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    // Green ground 2
    rect(695, floorPos_y, 654, 144);
    
    
    // Game character
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
    
    
    // Tree
    // trunk
    fill(102, 51, 0);
    rect(treePos_x, treePos_y+65, 18, 80);
    // branches
    fill(0, 153, 0);
    // bottom branch
    triangle(treePos_x+9, treePos_y+40, 
             treePos_x-25, treePos_y+70, 
             treePos_x+43, treePos_y+70);
    // middle branch
    triangle(treePos_x+9, treePos_y+20, 
             treePos_x-25, treePos_y+50, 
             treePos_x+43, treePos_y+50);
    // top branch
    triangle(treePos_x+9, treePos_y, 
             treePos_x-25, treePos_y+30, 
             treePos_x+43, treePos_y+30);
    
    // Canyon
    // dirt 1
    fill(55, 35, 20);
    rect(0, floorPos_y+8, 560, 140, 10);
    // dirt 2
    rect(collectable.x+198, floorPos_y+8, 644, 140, 10);
    // cliff rocks 1
    fill(105, 110, 140);
    rect(canyon.x-22, floorPos_y+18, 60, 50, 10);
    rect(canyon.x-22, floorPos_y+78, 60, 70, 10);
    rect(canyon.x-102, floorPos_y+78, 70, 70, 10);
    rect(canyon.x-192, floorPos_y+78, 80, 70, 10);
    rect(canyon.x-192, floorPos_y+18, 160, 50, 10);
    rect(canyon.x-302, floorPos_y+18, 100, 130, 10);
    rect(canyon.x-472, floorPos_y+18, 160, 50, 10);
    rect(canyon.x-392, floorPos_y+78, 80, 70, 10);
    rect(canyon.x-472, floorPos_y+78, 70, 70, 10);
    rect(0, floorPos_y+18, 30, 50, 10);
    rect(0, floorPos_y+78, 30, 70, 10);
    // ravine river
    fill(0, 255, 255);
    rect(canyon+63, floorPos_y+68, 120, 50);
    // ravine rocks
    fill(105, 110, 140);
    rect(canyon.x+58, floorPos_y+118, 130, 50, 10);
    // cliff rocks 2
    rect(canyon.x+208, floorPos_y+18, 100, 130, 10);
    rect(canyon.x+318, floorPos_y+18, 160, 50, 10);
    rect(canyon.x+318, floorPos_y+78, 80, 75, 10);
    rect(canyon.x+408, floorPos_y+78, 70, 75, 10);
    rect(canyon.x+488, floorPos_y+18, 30, 50, 10);
    rect(canyon.x+488, floorPos_y+78, 30, 70, 10);
    
    
    // Collectable
    
    fill(255, 210, 55);
    stroke(250, 240, 70);
    strokeWeight(3);
    ellipse(collectable.x+278, floorPos_y-12, 20, 20);
    
    line(collectable.x+278, floorPos_y-27, 790, 395);
    
    line(collectable.x+263, floorPos_y-22, 770, 405);
    line(collectable.x+260, floorPos_y-12, 765, 420);
    line(collectable.x+263, floorPos_y-2, 770, 435);
    
    line(collectable.x+278, floorPos_y+4, 790, 445);
    
    line(collectable.x+293, floorPos_y-22, 810, 405);
    line(collectable.x+293, floorPos_y-12, 812, 420);
    line(collectable.x+293, floorPos_y-2, 810, 435);
    
    fill(200, 160, 10);
    textSize(15);
    text("$", 785, floorPos_y-20, 20, 20);
    
    strokeWeight(1);
    

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

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;

}

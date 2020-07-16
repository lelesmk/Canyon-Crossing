/*

The Game Project

Week 3

Game interaction

*/


var floorPos_y;

var gameChar;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;


var collectable;
var collectRange;
var scale_size;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	
    
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    
    scale_size = 0.6
    
    gameChar = {
        x_pos: width/2,
        y_pos: floorPos_y,
        speed: 4
    };
    
    collectable = {
        x_pos: 100,
        y_pos: floorPos_y-100*scale_size,
        width: 20*scale_size,
        height: 100*scale_size,
        grip_width: 10*scale_size,
        grip_height: 30*scale_size,
        cross_width: 40*scale_size,
        cross_height: 10*scale_size,
        point_height: 20*scale_size,
        isFound: false
    };
    
    canyon = {
        x: width/2,
        y: floorPos_y
    };
    
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue

	noStroke();
	// Green ground 1
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    // Green ground 2
    rect(695, floorPos_y, 654, 144);

	// Canyon
    
    // falling down canyon
 
    if(gameChar.x_pos > 575 && gameChar.x_pos < 695)
    {
        isPlummeting = true;
    } else if(gameChar.y_pos >= floorPos_y)
    {
        isPlummeting = false;
    }
    
    if(isPlummeting == true)
    {
        gameChar.y_pos += gameChar.speed-3;
    }
    
    // dirt 1
    fill(55, 35, 20);
    rect(0, floorPos_y+8, 560, 140, 10);
    // dirt 2
    rect(695+10, floorPos_y+8, 644, 140, 10);
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
    rect(canyon.x+63, floorPos_y+68, 120, 50);
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
    collectRange = dist(gameChar.x_pos, gameChar.y_pos, collectable.x_pos, collectable.y_pos);
    
//    console.log("Range Collect: ", collectRange);
//    console.log("Range Colletable: ", collectable.x_pos, collectable.y_pos);
//    console.log("Range Game Char: ", gameChar.x_pos, gameChar.y);
    
    if(collectRange < 80)
    {
        collectable.isFound = true;
    }

    if(collectable.isFound == false)
    {   
        // blade
        fill(255, 215, 0);
        rect(collectable.x_pos, collectable.y_pos, collectable.width, collectable.height);
        triangle(collectable.x_pos, collectable.y_pos+collectable.height, 
                 collectable.x_pos+collectable.width, collectable.y_pos+collectable.height, 
                 collectable.x_pos+collectable.width/2, collectable.y_pos+collectable.height+20);
        
        // handle
        fill(139, 69, 19);
        rect(collectable.x_pos+collectable.grip_width/2, collectable.y_pos-collectable.grip_height, collectable.grip_width, collectable.grip_height);
        rect(collectable.x_pos-collectable.width/2, collectable.y_pos, collectable.cross_width, collectable.cross_height);
        
    }
        
	//Game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        // head7
        fill(240, 195, 135);
        ellipse(gameChar.x_pos, gameChar.y_pos-50, 25, 25);
        // body7
        fill(255, 50, 50);
        rect(gameChar.x_pos-5, gameChar.y_pos-40, 10, 20);
        // arms7
        fill(0);
        rect(gameChar.x_pos, gameChar.y_pos-40, 5, 10);
        // feet7
        rect(gameChar.x_pos-10, gameChar.y_pos-25, 8, 8);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        // head5
        fill(240, 195, 135);
        ellipse(gameChar.x_pos, gameChar.y_pos-50, 25, 25);
        // body5
        fill(255, 50, 50);
        rect(gameChar.x_pos-5, gameChar.y_pos-40, 10, 20);
        // arms5
        fill(0);
        rect(gameChar.x_pos-5, gameChar.y_pos-40, 5, 10);
        // feet5
        rect(gameChar.x_pos+2, gameChar.y_pos-25, 8, 8);

	}
	else if(isLeft)
	{
		// add your walking left code
        // head3
        fill(240, 195, 135);
        ellipse(gameChar.x_pos, gameChar.y_pos-50, 25, 25);
        // body3
        fill(255, 50, 50);
        rect(gameChar.x_pos-5, gameChar.y_pos-40, 10, 30);
        // arms3
        fill(0);
        rect(gameChar.x_pos, gameChar.y_pos-40, 5, 20);
        // feet3
        rect(gameChar.x_pos+2, gameChar.y_pos-7, 8, 8);
        rect(gameChar.x_pos-12, gameChar.y_pos-15, 8, 8);

	}
	else if(isRight)
	{
		// add your walking right code
        // head4
        fill(240, 195, 135);
        ellipse(gameChar.x_pos, gameChar.y_pos-50, 25, 25);
        // body4
        fill(255, 50, 50);
        rect(gameChar.x_pos-5, gameChar.y_pos-40, 10, 30);
        // arms4
        fill(0);
        rect(gameChar.x_pos-5, gameChar.y_pos-40, 5, 20);
        // feet4
        rect(gameChar.x_pos-10, gameChar.y_pos-7, 8, 8);
        rect(gameChar.x_pos+5, gameChar.y_pos-15, 8, 8);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        // head2
        fill(240, 195, 135);
        ellipse(gameChar.x_pos, gameChar.y_pos-50, 25, 25);
        // body2
        fill(255, 50, 50);
        rect(gameChar.x_pos-10, gameChar.y_pos-40, 20, 20);
        // arms2
        fill(0);
        rect(gameChar.x_pos-10, gameChar.y_pos-42, 5, 10);
        rect(gameChar.x_pos+5, gameChar.y_pos-42, 5, 10);
        // feet2
        rect(gameChar.x_pos-10, gameChar.y_pos-22, 8, 8);
        rect(gameChar.x_pos+2, gameChar.y_pos-22, 8, 8);

	}
	else
	{
		// add your standing front facing code
        // head1
        fill(240, 195, 135);
        ellipse(gameChar.x_pos, gameChar.y_pos-50, 25, 25);
        // body1
        fill(255, 50, 50);
        rect(gameChar.x_pos-10, gameChar.y_pos-40, 20, 35);
        // arms1
        fill(0);
        rect(gameChar.x_pos-10, gameChar.y_pos-40, 5, 20);
        rect(gameChar.x_pos+5, gameChar.y_pos-40, 5, 20);
        // feet1
        rect(gameChar.x_pos-10, gameChar.y_pos-7, 8, 8);
        rect(gameChar.x_pos+2, gameChar.y_pos-7, 8, 8);

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    
    // move left
    if(isLeft == true)
    {
       gameChar.x_pos -= gameChar.speed;
    }
    // move right
    if(isRight == true)
    {
       gameChar.x_pos += gameChar.speed;
    }
    // gravity
    if(gameChar.y_pos < floorPos_y)
    {
        gameChar.y_pos += 2;
        isFalling = true;
    } else {
        isFalling = false;
    }
    
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


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
    
    
	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    let leftArrow = 37;
    let rightArrow = 39;
    let spaceBar = 32;
    
    if(keyCode == leftArrow){
        console.log("left arrow");
        isLeft = true;
        
    } else if(keyCode == rightArrow)
    {
        console.log("right arrow");
        isRight = true;
    } else if(keyCode == spaceBar)
    {
        console.log("space bar");
        if(gameChar.y_pos == floorPos_y){
           gameChar.y_pos -= 100;
        }
    }
              
    
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
    let leftArrow = 37;
    let rightArrow = 39;
    
    if(keyCode == leftArrow){
        console.log("left arrow");
        isLeft = false;
        
    } else if(keyCode == rightArrow)
    {
        console.log("right arrow");
        isRight = false;
    }
}
